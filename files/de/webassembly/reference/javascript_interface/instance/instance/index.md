---
title: WebAssembly.Instance() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Instance/Instance
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Der **`WebAssembly.Instance()`** Konstruktor erstellt ein neues
`Instance` Objekt, welches eine zustandsbehaftete, ausführbare Instanz eines
[`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) ist.

> [!WARNING]
> Da die Instanziierung für große Module teuer sein kann,
> sollten Entwickler den `Instance()` Konstruktor nur verwenden, wenn die synchrone
> Instanziierung absolut erforderlich ist; die asynchrone
> [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode sollte in allen anderen
> Fällen verwendet werden.

## Syntax

```js-nolint
new WebAssembly.Instance(module, importObject)
```

### Parameter

- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt, das instanziiert werden soll.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte
    `Instance` importiert werden sollen, wie z. B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekte.
    Es muss eine übereinstimmende Eigenschaft für jeden deklarierten Import von `module` vorhanden sein, andernfalls wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.

#### Ausnahmen

- Wenn einer der Parameter nicht vom richtigen Typ oder in der richtigen Struktur ist, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Wenn die Operation fehlschlägt, wird je nach Ursache des Fehlers entweder ein
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.
- Einige Browser können einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Puffern im UI-Thread verbieten.

## Beispiele

### Synchrone Instanziierung eines WebAssembly-Moduls

Die `WebAssembly.Instance()` Konstruktorfunktion kann aufgerufen werden, um
ein angegebenes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt synchron zu instanziieren, zum Beispiel:

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

Die bevorzugte Methode, um eine `Instance` zu erhalten, ist jedoch die Verwendung der asynchronen
[`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Funktion, zum Beispiel so:

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
