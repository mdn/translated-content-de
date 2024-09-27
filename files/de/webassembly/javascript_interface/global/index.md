---
title: WebAssembly.Global
slug: WebAssembly/JavaScript_interface/Global
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Global`**-Objekt stellt eine globale Variableninstanz dar, die sowohl von JavaScript zugänglich ist als auch zwischen ein oder mehreren [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importiert und exportiert werden kann. Dies ermöglicht das dynamische Verknüpfen mehrerer Module.

## Konstruktor

- [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global/Global)
  - : Erstellt ein neues `Global`-Objekt.

## Globale Instanzen

Alle `Global`-Instanzen erben vom Prototypenobjekt des `Global()`-Konstruktors — dieses kann modifiziert werden, um alle `Global`-Instanzen zu beeinflussen.

### Instanz-Eigenschaften

- `Global.prototype.constructor`
  - : Gibt die Funktion zurück, die die Instanz dieses Objekts erstellt hat. Standardmäßig ist dies der [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global/Global)-Konstruktor.
- `Global.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String-Wert "WebAssembly.Global".
- `Global.prototype.value`
  - : Der Wert, der innerhalb der globalen Variablen enthalten ist — dieser kann verwendet werden, um den Wert der globalen Variable direkt zu setzen und abzurufen.

### Instanz-Methoden

- `Global.prototype.valueOf()`
  - : Eine Methode im alten Stil, die den Wert zurückgibt, der innerhalb der globalen Variablen enthalten ist.

## Beispiele

### Erstellen einer neuen Global-Instanz

Das folgende Beispiel zeigt, wie eine neue Globale-Instanz mit dem `WebAssembly.Global()`-Konstruktor erstellt wird. Sie wird als veränderlicher `i32`-Typ mit einem Wert von 0 definiert.

Der Wert der Globalen-Variable wird dann geändert, zuerst auf `42` mit der `Global.value`-Eigenschaft und dann auf 43 mit der `incGlobal()`-Funktion, die aus dem `global.wasm`-Modul exportiert wird (dies fügt 1 zu jedem gegebenen Wert hinzu und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub ausführen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); sehen Sie sich auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
