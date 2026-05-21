---
title: "funcref: Wasm-Typ"
short-title: funcref
slug: WebAssembly/Reference/Value_types/funcref
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`funcref`**-Werttyp referenziert eine in Wasm definierte Funktion und ermöglicht es, höherwertige Funktionen über die Grenzen von Wasm und JavaScript hinweg zu verwenden.

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

Der `funcref`-Typ wird verwendet, um eine Referenz auf eine in Wasm erstellte Funktion zu erstellen, die dann in eine aus JavaScript importierte Funktion übergeben werden kann. Eine typische Verwendung hiervon ist es, Wasm-Funktionen als Callback in JavaScript-Funktionen zu übergeben.

## Beispiele

### Grundlegende Verwendung von `funcref`

In diesem Beispiel importieren wir eine benutzerdefinierte JavaScript-`map()`-Funktion in ein Wasm-Modul, das ein Array und eine Callback-Funktion als Parameter akzeptiert. Der Callback-Funktionsparameter erhält einen `funcref`-Typ, was bedeutet, dass er innerhalb von Wasm definiert und in die JavaScript-Funktion übergeben werden kann.

#### JavaScript

Zuerst holen wir uns Referenzen auf ein {{htmlelement("p")}}-Element, in das wir unsere Ergebnisse ausgeben werden, und auf ein Array, das wir später in einen exportierten WebAssembly-Funktionsaufruf übergeben werden.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");
const arr = [1, 4, 9, 16, 64];
```

Als nächstes erstellen wir ein Import-Objekt und definieren eine Funktion namens `map()` darin, welche zwei Parameter benötigt: ein Array und eine Callback-Funktion. Im Inneren erstellen wir ein neues Array (`result`), indem wir jeden Wert im Array in die Callback-Funktion über die in JavaScript eingebaute [`Array.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Funktion übergeben. Schließlich setzen wir das Ergebnis als Wert des `textContent` des Ausgabe-Elements.

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

Der letzte Schritt in unserem JavaScript ist das Kompilieren und Instanziieren des Wasm-Moduls mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir den `importObj`-Namespace importieren. Wenn das Ergebnis zurückgegeben wird, rufen wir die Wasm-`doubleArray()`-Funktion auf, die im WebAssembly-Objekt [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) verfügbar ist, und übergeben ihr das Array `arr` als Parameter.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), importObj).then(
  ({ instance }) => {
    instance.exports.doubleArray(arr);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die `map()`-Funktion aus dem importierten `js`-Namespace und geben ihr den Referenznamen `$map`. Der erste `param` erhält einen `externref`-Typ (der das Array-Parameter darstellt), und der zweite einen `funcref`-Typ (der das Callback-Parameter darstellt).

Als nächstes definieren wir eine Funktion namens `double()`, die sowohl ein als auch ein zurückgegebenes Gleitkomma-Zahlenparameter hat. Der Funktionskörper multipliziert das Parameter mit 2, indem die [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung verwendet wird.

Schließlich definieren wir die exportierte `doubleArray()`-Funktion. Sie hat einen einzigen definierten `param` — `$arr` — mit einem `externref`-Typ, was sinnvoll ist, da wir sie aus JavaScript aufrufen und den Wert dort bereitstellen. Im Inneren rufen wir die importierte `map()`-Funktion auf, indem wir ihr das `$arr` `externref` und die `double()`-Funktion als Parameter übergeben.

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

Die gerenderte Ausgabe sieht so aus:

{{embedlivesample("basic-usage", "100%", 100)}}

Das ursprüngliche Array hat alle seine Werte mit `2` multipliziert, und das resultierende neue Array wird in unserem `<p>`-Element ausgegeben. Das macht Sinn: Wir rufen die exportierte `doubleArray()`-Funktion aus JavaScript auf. Das Wasm-Modul kümmert sich dann um den Aufruf unserer JavaScript-`map()`-Funktion, indem es ihr das Array und die in Wasm definierte `double()`-Callback-Funktion übergibt, sodass `Array.map()` den Callback auf jeden Array-Wert anwenden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table) Definition
