---
title: "WorkerGlobalScope: self-Eigenschaft"
short-title: self
slug: Web/API/WorkerGlobalScope/self
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`self`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt eine Referenz auf den `WorkerGlobalScope` selbst zurück. Meistens handelt es sich um einen speziellen Scope wie zum Beispiel [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Wert

Ein globales Scope-Objekt (unterschiedlich, je nachdem, mit welchem Workertyp Sie es zu tun haben, wie oben angegeben).

## Beispiele

Wenn Sie

```js
console.log(self);
```

innerhalb eines Workers aufrufen, wird ein Worker-Global-Scope desselben Typs wie das Worker-Objekt in die Konsole geschrieben — etwa wie folgt:

```plain
DedicatedWorkerGlobalScope {
undefined: undefined, Infinity: Infinity, Math: MathConstructor, NaN: NaN, Intl: Object…}
    Infinity: Infinity
    Array: function Array() { [native code] }
      arguments: null
      caller: null
      isArray: function isArray() { [native code] }
      length: 1
      name: "Array"
      observe: function observe() { [native code] }
      prototype: Array[0]
      unobserve: function unobserve() { [native code] }
      __proto__: function Empty() {}
      <function scope>
    ArrayBuffer: function ArrayBuffer() { [native code] }
    Blob: function Blob() { [native code] }
    Boolean: function Boolean() { [native code] }
    DataView: function DataView() { [native code] }
    Date: function Date() { [native code] }
    DedicatedWorkerGlobalScope: function DedicatedWorkerGlobalScope() { [native code] }
    Error: function Error() { [native code] }
// etc. etc.
```

Dies liefert eine vollständige Liste der Objekte, die für diesen Worker-Scope verfügbar sind. Es ist ein sehr nützlicher Test, wenn Sie prüfen möchten, ob etwas für Ihren Worker verfügbar ist oder nicht. Wir führen auch eine Liste von [Funktionen und Klassen, die Web Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
