// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
((globalThis) => {
  const core = Deno.core;
  core.initializeAsyncOps();
  globalThis.runjs = {
    readFile: (path) => {
      return core.ops.op_read_file(path);
    },
    writeFile: (path, contents) => {
      return core.ops.op_write_file(path, contents);
    },
    removeFile: (path) => {
      return core.ops.op_remove_file(path);
    },
  };
})(globalThis);
