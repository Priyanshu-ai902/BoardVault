"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";
import { deleteProject } from "@/actions/projects";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";

export default function DeleteProject({ projectId }) {
  const { membership } = useOrganization();
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    loading: isDeleting,
    error,
    fn: deleteProjectFn,
    data: deleted,
  } = useFetch(deleteProject);

  const isAdmin = membership?.role === "org:admin";

  const handleDelete = async () => {
    deleteProjectFn(projectId);
  };

  useEffect(() => {
    if (deleted) {
      router.refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleted]);

  if (!isAdmin) return null;

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className={`${isDeleting ? "animate-pulse" : ""}`}
        onClick={() => setShowConfirm(true)}
        disabled={isDeleting}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="text-gray-300 text-sm">
              Are you sure you want to delete this project?
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="secondary"
                className="bg-gray-700 hover:bg-gray-600 text-gray-300"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="bg-red-600 hover:bg-red-500 text-white"
                onClick={() => {
                  handleDelete();
                  setShowConfirm(false);
                }}
                disabled={isDeleting}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
