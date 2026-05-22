---
title: "externref: Wasm Wertetyp"
short-title: externref
slug: WebAssembly/Reference/Value_types/externref
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Der **`externref`** Wertetyp referenziert einen JavaScript-Wert, sodass er an ein Wasm-Modul übergeben werden kann, ohne dass eine Kopie oder Serialisierung erforderlich ist.

{{InteractiveExample("Wat Demo: externref", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import custom double() and built-in console.log() functions
  ;; double param defined as external value via externref
  (import "obj" "double" (func $double (param externref) (result i32)))
  (import "console" "log" (func $log (param i32)))

  ;; Define logDouble() function
  (func (export "logDouble")
    ;; Expected param is externref
    (param $num externref)

    ;; Call double(), passing it $num externref as param
    (call $double (local.get $num))
    ;; Call console.log, with double() return value as param
    (call $log)
  )
)
```

```js interactive-example
// Define double() function inside obj
const obj = {
  double(num) {
    return num * 2;
  },
};

// Compile and instantiate Wasm module, importing console and obj namespaces
// Call exported logDouble() function, passing it the number 8
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  console,
  obj,
}).then((result) => result.instance.exports.logDouble(8));
```

## Syntax

```wat
;; Define imported external function parameter
(param externref)

;; Define named function parameter
(param $num externref)
```

## Beschreibung

Der `externref` Typ wird verwendet, um Werte, die in JavaScript definiert sind, aus einem Wasm-Modul heraus zu referenzieren. Jeder Wertetyp kann referenziert werden, was sehr nützlich ist, wenn Funktionen in WebAssembly importiert werden, die DOM-Knoten manipulieren, zu Canvas-Kontexten schreiben oder Bilddaten bearbeiten. Es ist nicht mehr erforderlich, Daten in geeigneten Formaten darzustellen (zum Beispiel Objekte zu serialisieren), bevor sie an Wasm übergeben werden.

WebAssembly-Code kann nicht direkt auf den JavaScript-Wert zugreifen und muss ihn entweder in einem `global`/[`table`](/de/docs/WebAssembly/Reference/Definitions/table) speichern oder an eine importierte JavaScript-Funktion übergeben.

### Speicherbereinigung

Wenn ein Wasm-Modul eine Referenz auf ein in JavaScript definiertes Objekt hält, kann dieses Objekt nicht vom Garbage Collector bereinigt werden, bis Wasm die Referenz fallen lässt. Zu lange gehaltene Referenzen können Speicherlecks erzeugen — zum Beispiel wenn Sie eine `externref` in einer [Table](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) speichern. Es ist gute Praxis, die Referenzen zu entfernen, wenn sie nicht mehr benötigt werden.

## Beispiele

### Grundlegende Verwendung von `externref`

In diesem Beispiel importieren wir zwei benutzerdefinierte JavaScript-Funktionen in ein Wasm-Modul und verwenden sie innerhalb einer Wasm-Funktion, die dann exportiert wird. Die Funktionsparameter werden alle in JavaScript definiert und direkt mit `externref` referenziert.

#### JavaScript

Zunächst definieren wir unsere zwei Funktionen — `double()` und `output()` — innerhalb eines JavaScript-Objekts namens `obj`. Die erste Funktion nimmt eine Zahl als Argument und gibt eine Zahl zurück, die das Doppelte des Eingabewerts ist. Die zweite Funktion nimmt eine Elementreferenz und einen Wert und weist den Wert der `textContent` des Elements zu. Wir greifen auch auf eine HTML {{htmlelement("p")}} Elementreferenz zu, in die ein Wert ausgegeben wird.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const obj = {
  double(num) {
    return num * 2;
  },
  output(elem, val) {
    elem.textContent = val;
  },
};

const output = document.querySelector("p");
```

Als Nächstes kompilieren und instanziieren wir das Wasm-Modul mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir den `obj` Namensraum importieren. Wenn das Ergebnis zurückgegeben wird, rufen wir die Wasm `outputDouble()` Funktion auf, die auf dem WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { obj }).then(
  (result) => {
    result.instance.exports.outputDouble(8, output);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die `double()` und `output()` Funktionen aus dem importierten `obj` Namensraum, wobei wir ihnen die Referenznamen `$double` und `$output` geben. Beachten Sie, wie das erste `param` in jedem Fall einen `externref` Typ hat. Das liegt daran, dass diese Parameter von JavaScript bereitgestellt werden, wenn die exportierte `outputDouble()` Funktion aufgerufen wird. Der zweite `param` der `output()` Funktion ist kein `externref`; es ist ein `i32`, der als Ergebnis der `double()` Funktion bereitgestellt wird, wenn sie innerhalb des Wasm-Moduls aufgerufen wird.

Anschließend definieren wir die exportierte `outputDouble()` Funktion. Ihre beiden `params` — `$num` und `$elem` — sind `externref` Typen, was sinnvoll ist, da wir sie von JavaScript aus aufrufen und die Werte dort bereitstellen. Im Inneren definieren wir eine lokale Variable namens `$double_num`, rufen die importierte `double()` Funktion auf, übergeben ihr das `$num` `externref` als Parameter und weisen den Rückgabewert `$double_num` zu. Schließlich vervollständigen wir die `outputDouble()` Funktion, indem wir die importierte `output()` Funktion aufrufen, ihr das `$elem` `externref` als ersten Parameter und den `$double_num` Wert als zweiten Parameter übergeben.

```wat live-sample___basic-usage
(module
  (import "obj" "double" (func $double (param externref) (result i32)))
  (import "obj" "output" (func $output (param externref) (param i32)))
  (func (export "outputDouble")
    (param $num externref)
    (param $elem externref)

    (local $double_num i32)

    (call $double (local.get $num))
    (local.set $double_num)

    (call $output (local.get $elem) (local.get $double_num))
  )
)
```

#### Ergebnis

Die gerenderte Ausgabe sieht folgendermaßen aus:

{{embedlivesample("basic-usage", "100%", 100)}}

Der Wert `16` wird innerhalb des Ausgabe-`<p>` Elements angezeigt. Das ist sinnvoll, da wir die exportierte `outputDouble()` Wasm-Funktion von JavaScript aus aufrufen und ihr die Zahl `8` und eine Referenz auf das `<p>` als Argumente übergeben. Innerhalb des Wasm-Moduls verwendet die `outputDouble()` Funktion die importierten `double()` und `output()` Funktionen, um den Wert der Zahl zu verdoppeln und ihn als `textContent` des angegebenen Elements zu setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table) Definition
