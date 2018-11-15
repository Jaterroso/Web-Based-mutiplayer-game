Object.defineProperty(Module, "asmLibraryArg", {
  set: function (value) {
    value._JS_UNETWebSockets_SocketCreate = function (hostId, urlPtr) {
      var url = Pointer_stringify(urlPtr).replace(/^ws:\/\//, "wss://");
      urlPtr = Runtime.stackAlloc((url.length << 2) + 1);
      writeStringToMemory(url, urlPtr);
      return _JS_UNETWebSockets_SocketCreate(hostId, urlPtr);
    };
    Module._asmLibraryArg = value;
  },
  get: function () {
    return Module._asmLibraryArg;
  },
});