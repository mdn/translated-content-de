---
title: WebAssembly.Global
slug: WebAssembly/Reference/JavaScript_interface/Global
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Ein **`WebAssembly.Global`** Objekt stellt eine Instanz einer globalen Variablen dar, die sowohl von JavaScript aus zugänglich ist als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert oder exportiert werden kann. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.

## Konstruktor

- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global/Global)
  - : Erstellt ein neues `Global`-Objekt.

## Globale Instanzen

Alle `Global`-Instanzen erben von dem Prototyp-Objekt des `Global()`-Konstruktors — dies kann geändert werden, um alle `Global`-Instanzen zu beeinflussen.

### Instanzeigenschaften

- `Global.prototype.constructor`
  - : Gibt die Funktion zurück, die die Instanz dieses Objekts erstellt hat. Standardmäßig ist dies der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global/Global) Konstruktor.
- `Global.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String-Wert "WebAssembly.Global".
- `Global.prototype.value`
  - : Der Wert, der in der globalen Variable enthalten ist — dieser kann verwendet werden, um den Wert der globalen Variable direkt zu setzen und abzurufen.

### Instanzmethoden

- `Global.prototype.valueOf()`
  - : Althergebrachte Methode, die den in der globalen Variable enthaltenen Wert zurückgibt.

## Beispiele

### Erstellen einer neuen Global-Instanz

Das folgende Beispiel zeigt die Erstellung einer neuen globalen Instanz mit dem `WebAssembly.Global()` Konstruktor. Sie wird als mutable `i32`-Typ mit einem Wert von 0 definiert.

Der Wert der globalen Variable wird dann zuerst mit der `Global.value`-Eigenschaft auf `42` geändert und anschließend auf 43 mit der `incGlobal()`-Funktion geändert, die aus dem `global.wasm` Modul exportiert wird (dies fügt 1 zu dem übergebenen Wert hinzu und gibt dann den neuen Wert zurück).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}\n`
      : `FAIL!\nGot: ${got}\nExpected: ${expected}\n`;
  output.innerText += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> [!NOTE]
> Sie können das Beispiel [live auf GitHub ausführen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [Vorschlag zu import/export mutabler globaler Variablen](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
