---
title: "funcref: Wasm-Werttyp"
short-title: funcref
slug: WebAssembly/Reference/Value_types/funcref
l10n:
  sourceCommit: 187220197832f482878607080ae9e7c1edabe108
---

Der **`funcref`** Werttyp referenziert eine in Wasm definierte Funktion und ermöglicht somit die Verwendung von höherwertigen Funktionen über die Sprachgrenzen von Wasm und JavaScript hinweg.

{{InteractiveExample("Wat Demo: funcref", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import forEach() function, which takes an externref and a funcref as params
  (import "js" "forEach" (func $forEach (param externref) (param funcref)))
  ;; Define double() function, which doubles a value, and returns the result
  (func $double (export "double") (param f64) (result f64)
    (f64.mul (local.get 0) (f64.const 2))
  )
  ;; Export doubleArray() function, which takes an externref param, then
  ;; calls the forEach() function, passing it the externref and the double()
  ;; function as params
  (func (export "doubleArray")
    (param $arr externref)
    (call $forEach
      (local.get $arr)
      (ref.func $double)
    )
  )
)
```

```js interactive-example
// Define an array of numbers
const arr = [1, 4, 9, 16, 64];

// Define a forEach function, which runs a callback function on each element of an array
const importObj = {
  js: {
    forEach(array, callback) {
      array.forEach((value) => {
        const result = callback(value);
        console.log(result);
      });
    },
  },
};

// Compile and instantiate the wasm module, importing the importObj namespace
// in the process
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), importObj).then(
  ({ instance }) => {
    // Run the exported doubleArray() function, passing it our array
    instance.exports.doubleArray(arr);
  },
);
```

## Syntax

```wat
;; Define imported function callback parameter
(param funcref)
```

## Beschreibung

Der `funcref` Typ wird verwendet, um eine Referenz zu einer in Wasm erstellten Funktion zu erstellen, die dann in eine aus JavaScript importierte Funktion übergeben werden kann. Ein typischer Anwendungsfall ist die Möglichkeit, Wasm-Funktionen als Rückruffunktionen in JavaScript-Funktionen zu übergeben.

## Beispiele

### Grundlegende Verwendung von `funcref`

In diesem Beispiel importieren wir eine benutzerdefinierte JavaScript-`map()` Funktion in ein Wasm-Modul, die ein Array und eine Rückruffunktion als Parameter akzeptiert. Der Rückruffunktionsparameter erhält einen `funcref` Typ, was bedeutet, dass er innerhalb von Wasm definiert und in die JavaScript-Funktion übergeben werden kann.

#### JavaScript

Zuerst holen wir uns Referenzen zu einem {{htmlelement("p")}}-Element, in das wir unsere Ergebnisse ausgeben werden, und zu einem Array, das wir später in einen exportierten WebAssembly-Funktionsaufruf übergeben.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");
const arr = [1, 4, 9, 16, 64];
```

Als nächstes erstellen wir ein Import-Objekt und definieren darin eine Funktion namens `map()`, die zwei Parameter nimmt: ein Array und eine Rückruffunktion. Darin erstellen wir ein neues Array (`result`), indem jeder Wert im Array über die eingebaute JavaScript-[`Array.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) Funktion in die Rückruffunktion übergeben wird. Schließlich setzen wir das Ergebnis als Wert des `textContent` des Ausgabeelements.

```js live-sample___basic-usage
const importObj = {
  js: {
    map(array, callback) {
      const result = array.map((value) => callback(value));
      output.textContent = result;
    },
  },
};
```

Der letzte Schritt in unserem JavaScript besteht darin, das Wasm-Modul mithilfe von [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) zu kompilieren und zu instanziieren, wobei wir im Prozess den `importObj`-Namensraum importieren. Wenn das Ergebnis zurückgegeben wird, rufen wir die Wasm-`doubleArray()` Funktion auf, die im WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben ihr das `arr`-Array als Parameter.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), importObj).then(
  ({ instance }) => {
    instance.exports.doubleArray(arr);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die `map()` Funktion aus dem importierten `js`-Namensraum und geben ihr einen Referenznamen von `$map`. Der erste `param` erhält einen `externref` Typ (der das Array-Parameter repräsentiert), und der zweite erhält einen `funcref` Typ (der das Rückruf-Parameter repräsentiert).

Als nächstes definieren wir eine Funktion namens `double()`, die sowohl einen Gleitkomma-Parameter nimmt als auch zurückgibt. Der Funktionskörper multipliziert den Parameter mit 2, unter Verwendung der [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung.

Schließlich definieren wir die exportierte `doubleArray()` Funktion. Sie hat einen einzigen definierten `param` — `$arr` — mit einem `externref` Typ, was sinnvoll ist, da wir sie aus JavaScript aufrufen und den Wert dort bereitstellen. Darin rufen wir die importierte `map()` Funktion auf und übergeben ihr das `$arr` `externref` und die `double()` Funktion als Parameter.

```wat live-sample___basic-usage
(module
  (import "js" "map" (func $map (param externref) (param funcref)))
  (func $double (export "double") (param f64) (result f64)
    (f64.mul (local.get 0) (f64.const 2))
  )
  (func (export "doubleArray")
    (param $arr externref)
    (call $map
      (local.get $arr)
      (ref.func $double)
    )
  )
)
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{embedlivesample("basic-usage", "100%", 100)}}

Das ursprüngliche Array hat alle seine Werte mit `2` multipliziert, und das resultierende neue Array wird in unserem `<p>`-Element ausgegeben. Das ergibt Sinn: Wir rufen die exportierte `doubleArray()` Funktion aus JavaScript auf. Das Wasm-Modul übernimmt das Aufrufen unserer JavaScript-`map()` Funktion, indem es das Array und die in Wasm definierte `double()` Rückruffunktion übergibt, sodass der Rückruf über `Array.map()` auf jeden Array-Wert angewendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)-Definition
