---
title: WebAssembly.Instance() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Instance/Instance
l10n:
  sourceCommit: 36f90b7e285c1694e6cd1e549e37740ffb68f533
---

Der **`WebAssembly.Instance()`** Konstruktor erzeugt ein neues
`Instance` Objekt, das eine zustandsbehaftete, ausführbare Instanz eines
[`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) darstellt.

> [!WARNING]
> Da die Instanziierung großer Module kostspielig sein kann,
> sollten Entwickler den `Instance()` Konstruktor nur dann verwenden, wenn die
> synchrone Instanziierung unbedingt erforderlich ist; in allen anderen
> Fällen sollte die asynchrone
> [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode verwendet werden.

## Syntax

```js-nolint
new WebAssembly.Instance(module, importObject)
```

### Parameter

- `module`
  - : Das zu instanziierende [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte
    `Instance` importiert werden sollen, wie z. B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekte.
    Es muss eine passende Eigenschaft für jeden deklarierten Import des `module`
    vorhanden sein, ansonsten wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.

#### Ausnahmen

- Wenn einer der Parameter nicht den korrekten Typ oder die korrekte Struktur aufweist, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Wenn der Vorgang fehlschlägt, wird je nach Ursache des Fehlers einer der folgenden ausgelöst:
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError).
- Einige Browser könnten einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Buffern im UI-Thread verbieten.

## Beispiele

### Synchrone Instanziierung eines WebAssembly-Moduls

Die `WebAssembly.Instance()` Konstruktorfunktion kann aufgerufen werden, um
ein gegebenes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt synchron zu instanziieren, zum Beispiel:

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

Der bevorzugte Weg, um eine `Instance` zu erhalten, ist jedoch die asynchrone
[`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Funktion, zum Beispiel wie folgt:

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Die WebAssembly JavaScript API verwenden](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
