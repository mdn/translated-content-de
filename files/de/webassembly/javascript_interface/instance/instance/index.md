---
title: WebAssembly.Instance() Konstruktor
slug: WebAssembly/JavaScript_interface/Instance/Instance
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Der **`WebAssembly.Instance()`** Konstruktor erstellt ein neues
`Instance` Objekt, das eine zustandsbehaftete, ausführbare Instanz eines
[`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) ist.

## Syntax

> [!WARNING]
> Da die Instanziierung größerer Module aufwendig sein kann,
> sollten Entwickler den `Instance()` Konstruktor nur verwenden, wenn eine synchrone
> Instanziierung absolut erforderlich ist; die asynchrone
> Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) sollte in allen anderen
> Fällen verwendet werden.

```js
new WebAssembly.Instance(module, importObject);
```

### Parameter

- `module`
  - : Das zu instanziierende [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekt.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte
    `Instance` importiert werden sollen, wie z.B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekte.
    Es muss eine übereinstimmende Eigenschaft für jeden deklarierten Import von `module` vorhanden sein, andernfalls wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.

#### Ausnahmen

- Wenn einer der Parameter nicht den korrekten Typ oder die korrekte Struktur hat, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Wenn die Operation fehlschlägt, wird je nach Ursache des Fehlers einer von
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) ausgelöst.
- Einige Browser können einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Puffern im UI-Thread verbieten.

## Beispiele

### Synchrone Instanziierung eines WebAssembly Moduls

Die `WebAssembly.Instance()` Konstrukturfunktion kann aufgerufen werden, um ein gegebenes [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekt synchron zu instanziieren, zum Beispiel:

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

Die bevorzugte Methode, um eine `Instance` zu erhalten, ist jedoch über die asynchrone
Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), zum Beispiel so:

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

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [Konzepte von WebAssembly](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
