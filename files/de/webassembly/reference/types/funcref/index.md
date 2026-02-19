---
title: "funcref: Wasm-Typ"
short-title: funcref
slug: WebAssembly/Reference/Types/funcref
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Der **`funcref`** Werttyp referenziert eine in Wasm definierte Funktion und ermöglicht es, höherwertige Funktionen über die Grenzen von Wasm und JavaScript hinweg zu verwenden.

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

Der `funcref` Typ wird verwendet, um eine Referenz auf eine in Wasm erstellte Funktion zu erzeugen, die dann in eine aus JavaScript importierte Funktion übergeben werden kann. Eine typische Verwendung davon ist, Wasm-Funktionen in JavaScript-Funktionen als Rückruffunktionen zu übergeben.

## Beispiele

### Grundlegende Verwendung von `funcref`

In diesem Beispiel importieren wir eine benutzerdefinierte JavaScript `map()` Funktion in ein Wasm-Modul, die ein Array und eine Rückruffunktion als Parameter akzeptiert. Der Rückruffunktionsparameter wird mit einem `funcref` Typ versehen, was bedeutet, dass er innerhalb von Wasm definiert und in die JavaScript-Funktion übergeben werden kann.

#### JavaScript

Zuerst greifen wir auf eine {{htmlelement("p")}} Element-Referenz zu, in die wir unsere Ergebnisse ausgeben werden, sowie ein Array, das wir später in einen exportierten WebAssembly-Funktionsaufruf übergeben.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");
const arr = [1, 4, 9, 16, 64];
```

Als Nächstes erstellen wir ein Import-Objekt und definieren darin eine Funktion namens `map()`, die zwei Parameter übernimmt: ein Array und eine Rückruffunktion. Innerhalb wird ein neues Array (`result`) erstellt, indem jeder Wert im Array über die eingebaute JavaScript [`Array.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) Funktion in die Rückruffunktion übergeben wird. Schließlich setzen wir das Ergebnis als Wert des `textContent` des Ausgabeelements.

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

Der letzte Schritt in unserem JavaScript ist, das Wasm-Modul zu kompilieren und zu instanziieren, indem wir [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden und den `importObj` Namespace im Prozess importieren. Wenn das Ergebnis zurückgegeben wird, rufen wir die Wasm `doubleArray()` Funktion auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihm das `arr` Array als Parameter.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), importObj).then(
  ({ instance }) => {
    instance.exports.doubleArray(arr);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die `map()` Funktion aus dem importierten `js` Namespace und geben ihr einen Referenznamen `$map`. Der erste `param` wird mit einem `externref` Typ versehen (dies repräsentiert den Array-Parameter), und der zweite mit einem `funcref` Typ (dies repräsentiert den Rückrufparameter).

Als nächstes definieren wir eine Funktion namens `double()`, die sowohl einen Fließkomma-Parameter verwendet als auch zurückgibt. Der Funktionskörper multipliziert den Parameter mit 2, indem die [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Instruktion verwendet wird.

Schließlich definieren wir die exportierte `doubleArray()` Funktion. Sie hat einen definierten `param` — `$arr` — mit einem `externref` Typ, was sinnvoll ist, da wir sie aus JavaScript aufrufen und den Wert dort bereitstellen. Innerhalb rufen wir die importierte `map()` Funktion auf und übergeben ihr `$arr` `externref` und die `double()` Funktion als ihre Parameter.

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

Das ursprüngliche Array hat alle seine Werte mit `2` multipliziert, und das resultierende neue Array wird in unserem `<p>` Element ausgegeben. Das ergibt Sinn: Wir rufen die exportierte `doubleArray()` Funktion aus JavaScript auf. Das Wasm-Modul übernimmt dann den Aufruf unserer JavaScript `map()` Funktion und übergibt ihr das Array und die in Wasm definierte `double()` Rückruffunktion, sodass sie den Rückruf auf jeden Array-Wert über `Array.map()` anwenden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`externref`](/de/docs/WebAssembly/Reference/Types/externref)
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table) Definition
