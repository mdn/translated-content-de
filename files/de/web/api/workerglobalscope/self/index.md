---
title: "WorkerGlobalScope: self-Eigenschaft"
short-title: self
slug: Web/API/WorkerGlobalScope/self
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`self`**-Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle gibt eine Referenz auf die `WorkerGlobalScope` selbst zurück. Meistens handelt es sich um einen spezifischen Geltungsbereich wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Wert

Ein globales Scope-Objekt (unterscheidet sich je nach Typ des Workers, mit dem Sie es zu tun haben, wie oben angegeben).

## Beispiele

Wenn Sie

```js
console.log(self);
```

innerhalb eines Workers aufgerufen haben, wird ein Worker-Geltungsbereich desselben Typs wie das Worker-Objekt in die Konsole geschrieben — etwa so etwas:

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

Dies bietet eine vollständige Liste der Objekte, die diesem Worker-Geltungsbereich zur Verfügung stehen, weshalb es ein nützlicher Test ist, um zu überprüfen, ob etwas für Ihren Worker verfügbar ist oder nicht. Wir pflegen auch eine Liste von [Funktionen und Klassen, die Web Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
