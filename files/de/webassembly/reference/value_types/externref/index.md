---
title: "externref: Wasm-Typ"
short-title: externref
slug: WebAssembly/Reference/Value_types/externref
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`externref`** Werttyp referenziert einen JavaScript-Wert, sodass er einem Wasm-Modul übergeben werden kann, ohne dass Kopieren oder Serialisieren erforderlich ist.

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

Der `externref` Typ wird verwendet, um in JavaScript definierte Werte aus Wasm-Modulen zu referenzieren. Jeder Werttyp kann referenziert werden, was sehr nützlich ist, wenn Funktionen in WebAssembly importiert werden, die DOM-Knoten manipulieren, auf Canvas-Kontexte schreiben oder Bilddaten bearbeiten. Es ist nicht mehr notwendig, Daten in geeigneten Formaten darzustellen (z. B. Objekte zu serialisieren), bevor sie an Wasm übergeben werden.

WebAssembly-Code kann nicht direkt auf den JavaScript-Wert zugreifen und muss ihn entweder in einem `global`/[`table`](/de/docs/WebAssembly/Reference/Definitions/table) speichern oder an eine importierte JavaScript-Funktion übergeben.

### Speicherbereinigung

Wenn ein Wasm-Modul eine Referenz auf ein in JavaScript definiertes Objekt hält, kann dieses Objekt nicht gesammelt werden, bis Wasm die Referenz löscht. Das Halten von Referenzen über einen längeren Zeitraum kann zu Speicherlecks führen – beispielsweise wenn Sie ein `externref` in einer [Table](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) speichern. Es ist eine gute Praxis, die Referenzen zu verwerfen, wenn sie nicht mehr benötigt werden.

## Beispiele

### Grundlegende Verwendung von `externref`

In diesem Beispiel importieren wir zwei benutzerdefinierte JavaScript-Funktionen in ein Wasm-Modul und verwenden sie innerhalb einer Wasm-Funktion, die dann exportiert wird. Die Funktionsparameter sind alle in JavaScript definiert und werden direkt mit `externref` referenziert.

#### JavaScript

Zuerst definieren wir unsere beiden Funktionen – `double()` und `output()` – in einem JavaScript-Objekt namens `obj`. Die erste Funktion nimmt eine Zahl als Argument und gibt eine Zahl zurück, die das Doppelte des Eingabewerts ist. Die zweite Funktion nimmt eine Elementreferenz und einen Wert und weist den Wert dem `textContent` des Elements zu. Wir holen uns auch eine Referenz auf ein HTML-{{htmlelement("p")}}-Element, in das ein Wert ausgegeben wird.

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

Als nächstes kompilieren und instanziieren wir das Wasm-Modul mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir den `obj`-Namespace importieren. Wenn das Ergebnis zurückgegeben wird, rufen wir die Wasm-`outputDouble()`-Funktion auf, die im WebAssembly-`[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)`[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)`-Objekt verfügbar ist.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { obj }).then(
  (result) => {
    result.instance.exports.outputDouble(8, output);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die `double()` und `output()`-Funktionen aus dem importierten `obj`-Namespace und geben ihnen die Referenznamen `$double` und `$output`. Beachten Sie, dass der erste `param` in jedem Fall einen `externref`-Typ hat. Dies liegt daran, dass diese Parameter von JavaScript bereitgestellt werden, wenn die exportierte `outputDouble()`-Funktion aufgerufen wird. Der zweite `param` der `output()`-Funktion ist kein `externref`; es ist ein `i32`, das als Ergebnis der `double()`-Funktion bereitgestellt wird, wenn sie innerhalb des Wasm-Moduls aufgerufen wird.

Als nächstes definieren wir die exportierte `outputDouble()`-Funktion. Ihre zwei `params` — `$num` und `$elem` — sind `externref`-Typen, was Sinn ergibt, da wir sie von JavaScript aus aufrufen und die Werte dort bereitstellen. Innerhalb definieren wir eine lokale Variable namens `$double_num`, rufen die importierte `double()`-Funktion auf, übergeben ihr den `$num` `externref` als Parameter und weisen ihren Rückgabewert `$double_num` zu. Schließlich vervollständigen wir die `outputDouble()`-Funktion, indem wir die importierte `output()`-Funktion aufrufen und ihr den `$elem` `externref` als ersten Parameter und den `$double_num` Wert als zweiten Parameter übergeben.

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

Der Wert `16` wird im Ausgabe-`<p>`-Element angezeigt. Das ergibt Sinn, da wir die exportierte `outputDouble()`-Wasm-Funktion von JavaScript aus aufrufen, ihr die Zahl `8` und eine Referenz auf das `<p>` als Argument übergeben. Innerhalb des Wasm-Moduls verwendet die `outputDouble()`-Funktion die importierten `double()` und `output()`-Funktionen, um den Wert der Zahl zu verdoppeln und ihn als `textContent` des angegebenen Elements festzulegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table) Definition
