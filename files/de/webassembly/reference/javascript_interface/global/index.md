---
title: WebAssembly.Global
slug: WebAssembly/Reference/JavaScript_interface/Global
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Ein **`WebAssembly.Global`** Objekt stellt eine globale Variable dar, die sowohl von JavaScript zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Instanzen importierbar/exportierbar ist. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.

## Konstruktor

- [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global/Global)
  - : Erstellt ein neues `Global`-Objekt.

## Globale Instanzen

Alle `Global`-Instanzen erben vom Prototyp-Objekt des `Global()` Konstruktors – dies kann modifiziert werden, um alle `Global`-Instanzen zu beeinflussen.

### Instanzeigenschaften

- `Global.prototype.constructor`
  - : Gibt die Funktion zurück, die die Instanz dieses Objekts erstellt hat. Standardmäßig ist dies der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global/Global) Konstruktor.
- `Global.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String-Wert "WebAssembly.Global".
- `Global.prototype.value`
  - : Der Wert, der innerhalb der globalen Variablen enthalten ist – dieser kann verwendet werden, um den Wert des Globals direkt zu setzen und abzurufen.

### Instanzmethoden

- `Global.prototype.valueOf()`
  - : Eine alte Methode, die den Wert innerhalb der globalen Variablen zurückgibt.

## Beispiele

### Erstellen einer neuen Global-Instanz

Das folgende Beispiel zeigt eine neue globale Instanz, die mit dem `WebAssembly.Global()` Konstruktor erstellt wird. Sie wird als veränderlicher `i32`-Typ mit einem Wert von 0 definiert.

Der Wert des Globals wird dann geändert, zuerst auf `42` mit der `Global.value` Eigenschaft und dann auf 43 mit der `incGlobal()` Funktion, die aus dem `global.wasm` Modul exportiert wird (dies addiert 1 zu jedem gegebenen Wert und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub sehen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
