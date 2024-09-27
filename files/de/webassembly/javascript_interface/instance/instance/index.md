---
title: WebAssembly.Instance() Konstruktor
slug: WebAssembly/JavaScript_interface/Instance/Instance
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Der **`WebAssembly.Instance()`** Konstruktor erstellt ein neues
`Instance`-Objekt, das eine zustandsbehaftete, ausführbare Instanz eines
[`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) ist.

## Syntax

> [!WARNING]
> Da die Instanziierung großer Module teuer sein kann,
> sollten Entwickler den `Instance()`-Konstruktor nur verwenden, wenn eine synchrone
> Instanziierung unbedingt erforderlich ist. Zu allen anderen
> Zeiten sollte die asynchrone
> [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)-Methode verwendet werden.

```js
new WebAssembly.Instance(module, importObject);
```

### Parameter

- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt, das instanziiert werden soll.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die in die neu erstellte
    `Instance` zu importierenden Werte enthält, wie Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte.
    Es muss für jeden deklarierten Import von `module` eine passende Eigenschaft vorhanden sein, andernfalls wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.

#### Ausnahmen

- Wenn einer der Parameter nicht vom korrekten Typ oder Aufbau ist, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Wenn der Vorgang fehlschlägt, wird je nach Ursache des Fehlers
  ein [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) ausgelöst.
- Einige Browser können einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Puffern im UI-Thread verbieten.

## Beispiele

### Synchrone Instanziierung eines WebAssembly-Moduls

Die `WebAssembly.Instance()`-Konstruktorfunktion kann aufgerufen werden, um ein gegebenes [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt synchron zu instanziieren, zum Beispiel:

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
[`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)-Funktion, zum Beispiel so:

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
- [WebAssembly Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
