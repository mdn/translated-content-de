---
title: "externref: Wasm-Werttyp"
short-title: externref
slug: WebAssembly/Reference/Value_types/externref
l10n:
  sourceCommit: 187220197832f482878607080ae9e7c1edabe108
---

Der **`externref`**-Werttyp verweist auf einen JavaScript-Wert und ermöglicht es, diesen einem Wasm-Modul zu übergeben, ohne dass eine Kopie oder Serialisierung erforderlich ist.

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

Der `externref`-Typ wird verwendet, um Werte, die in JavaScript definiert sind, innerhalb von Wasm-Modulen zu referenzieren. Jeder Werttyp kann referenziert werden, was besonders nützlich ist, wenn Funktionen in WebAssembly importiert werden, die DOM-Knoten manipulieren, Canvas-Kontexte beschreiben oder Bilddaten manipulieren. Es ist nicht mehr notwendig, Daten in entsprechenden Formaten darzustellen (zum Beispiel Objekte zu serialisieren), bevor sie an Wasm übergeben werden.

WebAssembly-Code kann nicht direkt auf den JavaScript-Wert zugreifen und muss ihn entweder in einem `global`/[`table`](/de/docs/WebAssembly/Reference/Definitions/table) speichern oder an eine importierte JavaScript-Funktion übergeben.

### Garbage Collection

Wenn ein Wasm-Modul eine Referenz auf ein Objekt hält, das in JavaScript definiert ist, kann dieses Objekt nicht garbage-collected werden, bis Wasm die Referenz freigibt. Das Halten von Referenzen über längere Zeit kann zu Speicherlecks führen — zum Beispiel, wenn Sie eine `externref` in einer [Tabelle](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) speichern. Es ist eine gute Praxis, die Referenzen zu löschen, wenn sie nicht mehr benötigt werden.

## Beispiele

### Grundlegende Verwendung von `externref`

In diesem Beispiel importieren wir zwei benutzerdefinierte JavaScript-Funktionen in ein Wasm-Modul und verwenden sie innerhalb einer Wasm-Funktion, die dann exportiert wird. Die Funktionsparameter sind alle in JavaScript definiert und werden direkt mit `externref` referenziert.

#### JavaScript

Zunächst definieren wir unsere beiden Funktionen — `double()` und `output()` — innerhalb eines JavaScript-Objekts namens `obj`. Die erste nimmt eine Zahl als Argument und gibt eine Zahl zurück, die das Doppelte des Eingabewerts ist. Die zweite nimmt eine Elementreferenz und einen Wert und weist den Wert dem `textContent` des Elements zu. Wir holen auch eine Referenz zu einem HTML-{{htmlelement("p")}}-Element, in das ein Wert ausgegeben wird.

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

Als Nächstes kompilieren und instanziieren wir das Wasm-Modul mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir den `obj`-Namensraum importieren. Wenn das Ergebnis zurückgegeben wird, rufen wir die Wasm-`outputDouble()`-Funktion auf, die im WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { obj }).then(
  (result) => {
    result.instance.exports.outputDouble(8, output);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die `double()`- und `output()`-Funktionen aus dem importierten `obj`-Namensraum und geben ihnen die Referenznamen `$double` und `$output`. Beachten Sie, dass der erste `param` in jedem Fall einen `externref`-Typ hat. Dies liegt daran, dass diese Parameter von JavaScript bereitgestellt werden, wenn die exportierte `outputDouble()`-Funktion aufgerufen wird. Der zweite `param` der `output()`-Funktion ist kein `externref`; es ist ein `i32`, bereitgestellt als das Ergebnis der `double()`-Funktion, wenn sie innerhalb des Wasm-Moduls aufgerufen wird.

Als Nächstes definieren wir die exportierte `outputDouble()`-Funktion. Ihre beiden `params` — `$num` und `$elem` — sind `externref`-Typen, was Sinn macht, da wir sie von JavaScript aus aufrufen und die Werte dort bereitstellen. Darin definieren wir eine lokale Variable namens `$double_num`, rufen die importierte `double()`-Funktion auf, übergeben ihr das `$num`-`externref` als Parameter und weisen den Rückgabewert `$double_num` zu. Schließlich vervollständigen wir die `outputDouble()`-Funktion, indem wir die importierte `output()`-Funktion aufrufen, ihr das `$elem`-`externref` als ersten Parameter und den `$double_num`-Wert als zweiten Parameter übergeben.

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

Die gerenderte Ausgabe sieht wie folgt aus:

{{embedlivesample("basic-usage", "100%", 100)}}

Der Wert `16` wird im Ausgabe-`<p>`-Element angezeigt. Dies ist sinnvoll, da wir die exportierte `outputDouble()`-Wasm-Funktion von JavaScript aus aufrufen und ihr die Zahl `8` und eine Referenz auf das `<p>` als Argumente übergeben. Im Wasm-Modul verwendet die `outputDouble()`-Funktion die importierten `double()`- und `output()`-Funktionen, um den Wert der Zahl zu verdoppeln und ihn als `textContent` des angegebenen Elements zu setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)-Definition
