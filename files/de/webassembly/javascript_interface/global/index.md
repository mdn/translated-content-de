---
title: WebAssembly.Global
slug: WebAssembly/JavaScript_interface/Global
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Global`** Objekt repräsentiert eine globale Variableninstanz, die sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar ist. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.

## Konstruktor

- [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global/Global)
  - : Erstellt ein neues `Global` Objekt.

## Globale Instanzen

Alle `Global`-Instanzen erben vom Prototype-Objekt des `Global()`-Konstruktors — dieses kann modifiziert werden, um alle `Global`-Instanzen zu beeinflussen.

### Instanz-Eigenschaften

- `Global.prototype.constructor`
  - : Gibt die Funktion zurück, die die Instanz dieses Objekts erstellt hat. Standardmäßig ist dies der [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global/Global) Konstruktor.
- `Global.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der Stringwert "WebAssembly.Global".
- `Global.prototype.value`
  - : Der Wert, der in der globalen Variable enthalten ist — dieser kann verwendet werden, um den Wert des Globals direkt festzulegen und abzurufen.

### Instanz-Methoden

- `Global.prototype.valueOf()`
  - : Methode im alten Stil, die den in der globalen Variablen enthaltenen Wert zurückgibt.

## Beispiele

### Erstellen einer neuen Global-Instanz

Das folgende Beispiel zeigt, wie eine neue globale Instanz mit dem `WebAssembly.Global()` Konstruktor erstellt wird. Sie wird als veränderbarer `i32` Typ mit einem Wert von 0 definiert.

Der Wert der globalen Variablen wird dann geändert, zuerst auf `42` mittels der `Global.value` Eigenschaft und dann auf 43 mittels der `incGlobal()` Funktion, die aus dem `global.wasm` Modul exportiert wird (dies addiert 1 zu jedem Wert, der ihm gegeben wird, und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub ausführen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); sehen Sie auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Die WebAssembly JavaScript API verwenden](/de/docs/WebAssembly/Using_the_JavaScript_API)
- [Vorschlag für importierbare/exportierbare veränderbare Globale](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
