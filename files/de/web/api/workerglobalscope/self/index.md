---
title: "WorkerGlobalScope: self-Eigenschaft"
short-title: self
slug: Web/API/WorkerGlobalScope/self
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`self`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt eine Referenz auf das `WorkerGlobalScope` selbst zurück. Meistens handelt es sich um einen spezifischen Scope wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Wert

Ein globales Scope-Objekt (unterscheidet sich je nach Art des Arbeiters, mit dem Sie es zu tun haben, wie oben angegeben).

## Beispiele

Wenn Sie das Folgende innerhalb eines Workers aufgerufen haben

```js
console.log(self);
```

wird ein Worker-Global-Scope vom gleichen Typ wie dieses Worker-Objekt in die Konsole geschrieben — etwa so etwas wie das Folgende:

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

Dies bietet eine vollständige Liste der in diesem Worker-Scope verfügbaren Objekte, was einen nützlichen Test darstellt, wenn Sie herausfinden möchten, ob etwas für Ihren Worker verfügbar ist oder nicht. Wir führen auch eine Liste von [Funktionen und Klassen, die für Web Workers verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
