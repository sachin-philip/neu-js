// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
((globalThis) => {
  const core = Deno.core;

  function argsToMessage(...args) {
    return args.map((arg) => JSON.stringify(arg)).join(" ");
  }

  globalThis.console = {
    log: (...args) => {
      core.print(`[log]: ${argsToMessage(...args)}\n`, false);
    },
    error: (...args) => {
      core.print(`[error]: ${argsToMessage(...args)}\n`, true);
    },
  };
})(globalThis);
