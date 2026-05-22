---
title: "funcref: Wasm-Wertetyp"
short-title: funcref
slug: WebAssembly/Reference/Value_types/funcref
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Der **`funcref`** Wertetyp referenziert eine in Wasm definierte Funktion und ermöglicht die Verwendung von höheren Funktionen über die Grenzen der Wasm- und JavaScript-Sprachen hinweg.

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

Der `funcref`-Typ wird verwendet, um eine Referenz auf eine in Wasm erstellte Funktion zu erstellen, die dann in eine von JavaScript importierte Funktion übergeben werden kann. Ein typischer Anwendungsfall ist, dass Wasm-Funktionen als Rückruffunktionen in JavaScript-Funktionen übergeben werden.

## Beispiele

### Grundlegende Verwendung von `funcref`

In diesem Beispiel importieren wir eine benutzerdefinierte JavaScript `map()` Funktion in ein Wasm-Modul, die ein Array und eine Rückruffunktion als Parameter akzeptiert. Der Rückruffunktionsparameter erhält einen funcref-Typ, was bedeutet, dass er in Wasm definiert und in die JavaScript-Funktion übergeben werden kann.

#### JavaScript

Zuerst greifen wir auf eine {{htmlelement("p")}}-Element-Referenz zu, in die wir unsere Ergebnisse ausgeben werden, und ein Array, das wir später in einen exportierten WebAssembly-Funktionsaufruf übergeben werden.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");
const arr = [1, 4, 9, 16, 64];
```

Dann erstellen wir ein Importobjekt und definieren darin eine Funktion namens `map()`, die zwei Parameter akzeptiert: ein Array und eine Rückruffunktion. Im Inneren erstellen wir ein neues Array (`result`), indem wir jeden Wert im Array über die integrierte JavaScript-Funktion [`Array.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) in die Rückruffunktion übergeben. Schließlich legen wir das Ergebnis als Wert der `textContent` des Ausgabeelements fest.

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

Der letzte Schritt in unserem JavaScript ist, das Wasm-Modul mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) zu kompilieren und zu instanziieren, während wir den `importObj`-Namespace importieren. Wenn das Ergebnis zurückgegeben wird, rufen wir die Wasm `doubleArray()` Funktion auf, die über das WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `arr`-Array als Parameter.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), importObj).then(
  ({ instance }) => {
    instance.exports.doubleArray(arr);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die `map()` Funktion aus dem importierten `js` Namespace, die wir `$map` nennen. Der erste `param` erhält einen `externref`-Typ (der das Array-Parameter repräsentiert) und der zweite einen `funcref`-Typ (der den Rückrufparameter repräsentiert).

Als nächstes definieren wir eine Funktion namens `double()`, die sowohl einen Gleitkommawert-Parameter annimmt als auch zurückgibt. Der Funktionskörper multipliziert den Parameter mit 2, indem die [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung verwendet wird.

Schließlich definieren wir die exportierte `doubleArray()` Funktion. Sie hat einen einzigen definierten `param` — `$arr` — mit einem `externref`-Typ, was sinnvoll ist, da wir sie von JavaScript aus aufrufen und dort den Wert bereitstellen. Im Inneren rufen wir die importierte `map()` Funktion auf und übergeben ihr das `$arr` `externref` und die `double()` Funktion als Parameter.

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

Die gerenderte Ausgabe sieht folgendermaßen aus:

{{embedlivesample("basic-usage", "100%", 100)}}

Das ursprüngliche Array hat alle seine Werte mit `2` multipliziert, und das resultierende neue Array wird in unserem `<p>`-Element ausgegeben. Das ist sinnvoll: Wir rufen die exportierte `doubleArray()` Funktion aus JavaScript auf. Das Wasm-Modul übernimmt dann den Aufruf unserer JavaScript `map()` Funktion und übergibt ihr das Array und die in Wasm definierte `double()` Rückruffunktion, damit sie den Rückruf auf jeden Array-Wert über `Array.map()` anwenden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table) Definition
