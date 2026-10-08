---
title: "tag: Wasm-Definition"
short-title: tag
slug: WebAssembly/Reference/Definitions/tag
l10n:
  sourceCommit: 977386fc14a76dec21374aef1e0571900b28dab4
---

Die [Definition](/de/docs/WebAssembly/Reference/Definitions) **`tag`** deklariert einen Ausnahmetyp, der im Modul ausgelöst werden kann.

{{InteractiveExample("Wat Demo: tag", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Declare an exception tag $my_error with two i32 parameters
  (tag $my_error (param i32) (param i32))

  ;; Import console.log
  (import "env" "log" (func $log (param i32)))

  ;; Define $try_and_catch function that tries running the $might_throw function
  ;; and catches the $my_error exception if thrown, returning the exception's
  ;; arguments from the block
  (func $try_and_catch (param $value i32)
    (block $handler (result i32) (result i32)
      (try_table (catch $my_error $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )

    ;; Log the exception's arguments
    call $log
    call $log
  )

  (func $might_throw (param $value i32)
    ;; If value is negative, throw an exception
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        ;; Push the error code onto the stack, then throw
        (i32.const 0)       ;; error code
        (i32.const 42)      ;; error payload
        (throw $my_error)   ;; throw $my_error exception
      )
    )
  )

  ;; Export $try_and_catch function
  (export "try_and_catch" (func $try_and_catch))
)
```

```js interactive-example
// Import object containing console.log
const env = {
  log: console.log,
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  (result) => {
    // Negative value causes function to throw
    result.instance.exports.try_and_catch(-1);
  },
);
```

## Syntax

```plain
tag identifier parameters
```

- `tag`
  - : Der Definitionstyp `tag`. Muss immer an erster Stelle stehen.
- `identifier` {{optional_inline}}
  - : Ein identifizierender Name für das Tag. Er muss mit einem `$`-Symbol beginnen, beispielsweise `$my_error`.
- `parameters`
  - : Ein oder mehrere Werte, die die Parameter des Ausnahmetyps und deren Typen angeben. Jeder besteht aus:
    - dem Schlüsselwort `param`
    - dem Typ des Parameters. Dies kann ein beliebiger [Wasm-Typ](/de/docs/WebAssembly/Reference/Value_types) sein.

## Beschreibung

Mit der WebAssembly-Definition `tag` lassen sich Ausnahmetypen für das Modul definieren. Jeder Ausnahmetyp besteht aus einem optionalen identifizierenden Namen mit vorangestelltem `$`-Symbol, gefolgt von einer oder mehreren Parameterdefinitionen. Zum Beispiel:

```wat
(tag $my_error (param i32))
```

Weiter unten im Modul können Sie über den identifizierenden Namen auf den Ausnahmetyp verweisen, in diesem Fall über `$my_error`.

> [!NOTE]
> Wenn kein `identifier` angegeben ist, kann das Tag über seine Tag-Indexnummer identifiziert werden: `0` für das erste angegebene Tag, `1` für das zweite usw.

Die folgende Funktion nimmt beispielsweise einen `i32`-Parameter entgegen und prüft mithilfe der Anweisung [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s), ob er kleiner als `0` ist. Falls ja, lösen wir eine Ausnahme vom Typ `$my_error` aus und übergeben ihr den Wert `42`, der einen Fehlercode oder eine Nutzlast darstellen könnte.

```wat
(func $might_throw (param $value i32)
  (local.get $value)
  (i32.const 0)
  (i32.lt_s)
  (if
    (then
      (i32.const 42)
      (throw $my_error)
    )
  )
)
```

Die ausgelöste Ausnahme kann anschließend mit einem Wasm-try/catch-Block behandelt werden. Dabei kann auch auf ihre Nutzlast zugegriffen werden. Ein Beispiel finden Sie im Abschnitt [Ausprobieren](#try_it) oben auf der Seite. Weitere Beispiele finden Sie auf den folgenden Seiten:

- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)
- [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
- [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
- [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
- [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)

### Wasm-Ausnahmen in JavaScript behandeln

Wenn die Funktion, die die Ausnahme auslöst, exportiert wird, kann die Ausnahme alternativ mit einer regulären JavaScript-Anweisung [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) behandelt werden.

Beispielsweise könnten wir die zuvor gezeigte Funktion `$might_throw` so exportieren:

```wat
(export "might_throw" (func $might_throw))
```

Um auf die Nutzlast der Ausnahme zugreifen zu können, müssen Sie auch das Tag exportieren:

```wat
(export "my_error" (tag $my_error))
```

In JavaScript können wir dann das Modul instanziieren und die exportierte Funktion über das Objekt [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) mit einer Zahl kleiner als `0` als Argument aufrufen. Dadurch löst sie die Ausnahme `$my_error` aus. Über das Objekt `exports` können wir auch auf das exportierte Tag zugreifen.

Anschließend können wir innerhalb des Blocks `catch` mit der Methode [`Exception.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf die Nutzlast der Ausnahme zugreifen.

```js
let myErrorTag;

WebAssembly.instantiateStreaming(fetch("module.wasm")).then((result) => {
  myErrorTag = result.instance.exports.my_error;
  try {
    result.instance.exports.might_throw(-1); // negative value causes function to throw
  } catch (e) {
    if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
      console.log("Error code:", e.getArg(myErrorTag, 0));
    } else {
      throw e; // throw other errors
    }
  }
});
```

Ein lauffähiges Beispiel mit einer vollständigen Erklärung finden Sie weiter unten unter [Vollständiges Beispiel zur Ausnahmebehandlung in JavaScript](#vollständiges_beispiel_zur_ausnahmebehandlung_in_javascript).

### Tags in JavaScript erstellen

Mit dem Konstruktor [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) lässt sich ein Wasm-Tag auch im JavaScript-Host erstellen:

Zum Beispiel:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Sie können es in das Modul importieren:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env });
```

Anschließend können Sie im Wasm-Modul wie folgt darauf verweisen:

```wat
(module
  (tag $my_error (import "env" "my_error") (param i32))

  ...
)
```

## Beispiele

### Vollständiges Beispiel zur Ausnahmebehandlung in JavaScript

Dieses Beispiel zeigt, wie eine Ausnahme, die in einem Wasm-Modul definiert und ausgelöst wird, im zugehörigen JavaScript-Host behandelt werden kann.

#### Wasm

In unserem Wasm-Modul definieren wir zunächst ein Ausnahme-Tag namens `$my_error` mit einem einzelnen `i32`-Parameter und exportieren es. Anschließend definieren wir eine Funktion namens `$might_throw`, die einen einzelnen `i32`-Parameter entgegennimmt, prüft, ob er kleiner als `0` ist, und in diesem Fall die Ausnahme `$my_error` mit der Nutzlast `42` auslöst. Zum Schluss exportieren wir die Funktion `$might_throw`.

```html hidden live-sample___tag_definition
<p></p>
```

```wat live-sample___tag_definition
(module
  (tag $my_error (param i32))
  (export "my_error" (tag $my_error))

  (func $might_throw (param $value i32)
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        (i32.const 42)
        (throw $my_error)
      )
    )
  )

  (export "might_throw" (func $might_throw))
)
```

#### JavaScript

Zu Beginn unseres Skripts definieren wir eine Variable namens `myErrorTag`, holen eine Referenz auf ein {{htmlelement("p")}}-Element für die Ausgabe der Ergebnisse und instanziieren unser Wasm-Modul mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

```js live-sample___tag_definition
let myErrorTag;
const output = document.querySelector("p");
const wasm = WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"));
```

Sobald das Promise von `instantiateStreaming()` erfüllt ist, weisen wir der Variablen `myErrorTag` das exportierte Tag `my_error` zu. Anschließend rufen wir die exportierte Funktion `might_throw()` innerhalb eines `try`-Blocks mit einer negativen Zahl als Argument auf, damit sie eine Ausnahme auslöst.

Im zugehörigen `catch`-Block ist die ausgelöste Wasm-Ausnahme im Objekt `error` verfügbar, das eine Instanz von [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) ist. Mit `error instanceof WebAssembly.Exception` prüfen wir, ob dies zutrifft. Außerdem prüfen wir mit der Methode [`is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), ob das Objekt `error` eine Ausnahme des exportierten Typs `myErrorTag` darstellt.

Wenn beides zutrifft, greifen wir mit der Methode [`getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf die Nutzlast der Wasm-Ausnahme zu und geben sie im `<p>`-Element aus. Andernfalls geben wir dort das Fehlerobjekt aus.

```js live-sample___tag_definition
wasm.then((result) => {
  myErrorTag = result.instance.exports.my_error;
  try {
    result.instance.exports.might_throw(-1);
  } catch (error) {
    if (error instanceof WebAssembly.Exception && error.is(myErrorTag)) {
      output.textContent = `Error code: ${error.getArg(myErrorTag, 0)}`;
    } else {
      output.textContent = `Error: ${error}`; // report other errors
    }
  }
});
```

#### Ergebnis

{{embedlivesample("tag_definition", "100%", 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Anweisung [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)
- Anweisung [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)
- Anweisung [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)
  - Klausel [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
  - Klausel [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
  - Klausel [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
  - Klausel [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)
- Typ [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)
- JavaScript-Schnittstelle [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)
- JavaScript-Schnittstelle [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
