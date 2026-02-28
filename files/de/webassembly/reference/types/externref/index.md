---
title: "externref: Wasm-Typ"
short-title: externref
slug: WebAssembly/Reference/Types/externref
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Der **`externref`**-Werttyp referenziert einen JavaScript-Wert, womit er einem Wasm-Modul übergeben werden kann, ohne dass Kopieren oder Serialisieren erforderlich ist.

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

Der `externref`-Typ wird verwendet, um Werte zu referenzieren, die in JavaScript definiert sind und in Wasm-Modulen genutzt werden. Jeder beliebige Werttyp kann referenziert werden, was besonders nützlich ist, wenn Funktionen in WebAssembly importiert werden, die DOM-Knoten manipulieren, in Canvas-Kontexte schreiben oder Bilddaten verarbeiten. Es ist nicht mehr notwendig, Daten in geeigneten Formaten darzustellen (beispielsweise Objekte zu serialisieren), bevor sie an Wasm übermittelt werden.

WebAssembly-Code kann nicht direkt auf den JavaScript-Wert zugreifen und muss ihn entweder in einem `global`/[`table`](/de/docs/WebAssembly/Reference/Definitions/table) speichern oder an eine importierte JavaScript-Funktion übergeben.

### Speicherbereinigung

Wenn ein Wasm-Modul eine Referenz auf ein in JavaScript definiertes Objekt hält, kann dieses Objekt nicht gelöscht werden, bis Wasm die Referenz aufgibt. Das Halten von Referenzen zu lange kann zu Speicherlecks führen – beispielsweise, wenn Sie ein `externref` in einer [Tabelle](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) speichern. Es ist eine gute Praxis, die Referenzen zu löschen, wenn sie nicht mehr benötigt werden.

## Beispiele

### Grundlegende Verwendung von `externref`

In diesem Beispiel importieren wir zwei benutzerdefinierte JavaScript-Funktionen in ein Wasm-Modul und verwenden sie innerhalb einer Wasm-Funktion, die dann exportiert wird. Die Funktionsparameter sind alle in JavaScript definiert und werden direkt über `externref` referenziert.

#### JavaScript

Zuerst definieren wir unsere beiden Funktionen — `double()` und `output()` — innerhalb eines JavaScript-Objekts namens `obj`. Die erste Funktion nimmt eine Zahl als Argument und gibt eine Zahl zurück, die das Doppelte des Eingabewertes ist. Die zweite Funktion nimmt eine Element-Referenz und einen Wert und weist diesen Wert dem `textContent` des Elements zu. Wir greifen auch auf eine Referenz zu einem HTML-{{htmlelement("p")}}-Element zu, in das ein Wert ausgegeben wird.

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

Anschließend kompilieren und instanziieren wir das Wasm-Modul mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir den `obj`-Namespace importieren. Wenn das Ergebnis zurückgegeben wird, rufen wir die Wasm-`outputDouble()`-Funktion auf, die auf dem WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { obj }).then(
  (result) => {
    result.instance.exports.outputDouble(8, output);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die Funktionen `double()` und `output()` aus dem importierten `obj`-Namespace und geben ihnen die Referenznamen `$double` und `$output`. Beachten Sie, wie der erste `param` in jedem Fall einen `externref`-Typ erhält. Dies liegt daran, dass diese Parameter von JavaScript bereitgestellt werden, wenn die exportierte `outputDouble()`-Funktion aufgerufen wird. Der zweite `param` der `output()`-Funktion ist kein `externref`; es handelt sich um einen `i32`, der als Ergebnis der `double()`-Funktion bereitgestellt wird, wenn sie aus dem Wasm-Modul aufgerufen wird.

Als nächstes definieren wir die exportierte `outputDouble()`-Funktion. Ihre beiden `params` — `$num` und `$elem` — sind `externref`-Typen, was sinnvoll ist, da wir sie aus JavaScript aufrufen und die Werte dort bereitstellen. Im Inneren definieren wir eine lokale Variable namens `$double_num`, rufen die importierte `double()`-Funktion auf, übergeben ihr das `$num`-`externref` als Parameter und weisen den Rückgabewert `$double_num` zu. Schließlich vervollständigen wir die `outputDouble()`-Funktion, indem wir die importierte `output()`-Funktion aufrufen, ihr das `$elem`-`externref` als ersten Parameter und den `$double_num`-Wert als zweiten Parameter übergeben.

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

Der Wert `16` wird innerhalb des `<p>`-Ausgabeelements angezeigt. Das ergibt Sinn, da wir die exportierte `outputDouble()`-Wasm-Funktion aus JavaScript aufrufen und ihr die Zahl `8` und eine Referenz auf das `<p>` als Argumente übergeben. Innerhalb des Wasm-Moduls verwendet die `outputDouble()`-Funktion die importierten `double()`- und `output()`-Funktionen, um den Wert der Zahl zu verdoppeln und als `textContent` des angegebenen Elements zu setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)
- Definition von [`table`](/de/docs/WebAssembly/Reference/Definitions/table)
