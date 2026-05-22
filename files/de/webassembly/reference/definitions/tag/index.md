---
title: "tag: Wasm-Definition"
short-title: tag
slug: WebAssembly/Reference/Definitions/tag
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Die **`tag`**-[Definition](/de/docs/WebAssembly/Reference/Definitions) deklariert einen Ausnahmetyp, der im Modul ausgelöst werden kann.

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
  - : Der `tag`-Definitionstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein identifizierender Name für den Tag. Dieser muss mit einem `$`-Symbol beginnen, beispielsweise `$my_error`.
- `parameters`
  - : Ein oder mehrere Werte, die die Parameter des Ausnahmetyps und deren Typen spezifizieren. Jeder besteht aus:
    - Dem Schlüsselwort `param`
    - Dem Typ des Parameters. Dies kann jeder [Wasm-Typ](/de/docs/WebAssembly/Reference/Value_types) sein.

## Beschreibung

Die WebAssembly-`tag`-Definition ermöglicht es, Ausnahmetypen für das Modul zu definieren. Jeder besteht aus einem optionalen identifizierenden Namen, dem ein `$`-Symbol vorangestellt ist, gefolgt von einer oder mehreren Parameterdefinitionen. Zum Beispiel:

```wat
(tag $my_error (param i32))
```

Später im Modul können Sie auf den Ausnahmetyp durch seinen identifizierenden Namen, in diesem Fall `$my_error`, verweisen.

> [!NOTE]
> Falls kein `identifier` angegeben wird, kann der Tag durch seine Tag-Indexnummer identifiziert werden — `0` für den zuerst angegebenen Tag, `1` für den zweiten usw.

Zum Beispiel, die folgende Funktion nimmt einen `i32`-Parameter und überprüft, ob er kleiner als `0` ist, mittels der [`lt_s`]-Anweisung(/de/docs/WebAssembly/Reference/Numeric/lt_s). Falls dies der Fall ist, werfen wir eine Ausnahme des Typs `$my_error` und übergeben einen Wert von `42`, welcher einen Fehlercode oder eine Nutzlast darstellen könnte.

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

Die ausgelöste Ausnahme könnte dann behandelt werden, und die Nutzlast könnte unter Verwendung eines Wasm-try/catch-Blocks abgerufen werden. Sie können ein Beispiel im Abschnitt [Probieren Sie es aus](#try_it) oben auf der Seite sehen; siehe auch die folgenden Seiten für weitere Beispiele:

- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)
- [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
- [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
- [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
- [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)

### Behandeln von Wasm-Ausnahmen in JavaScript

Alternativ, wenn die Funktion, die die Ausnahme auslöst, exportiert wird, kann die Ausnahme über eine reguläre JavaScript-`try...catch`-Anweisung behandelt werden.

Zum Beispiel könnten wir die `$might_throw`-Funktion wie folgt exportieren:

```wat
(export "might_throw" (func $might_throw))
```

Um auf die Nutzlast der Ausnahme zuzugreifen, müssen Sie auch den Tag exportieren:

```wat
(export "my_error" (tag $my_error))
```

Zurück in JavaScript können wir das Modul instanziieren und dann die exportierte Funktion (über das [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt) mit einem numerischen Argument, das kleiner als `0` ist, aufrufen, um die `$my_error`-Ausnahme auszulösen. Wir können auch auf den exportierten Tag über das `exports`-Objekt zugreifen.

Dann können wir innerhalb des `catch`-Blocks auf die Nutzlast der Ausnahme mithilfe der [`Exception.getArg()`]-Methode(/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) zugreifen.

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

Sie können dies in Aktion zusammen mit einer vollständigen Erklärung in unserem [vollständigen Beispiel zur Behandlung von JavaScript-Ausnahmen](#vollständiges_beispiel_zur_behandlung_von_javascript-ausnahmen) später sehen.

### Erstellen von Tags in JavaScript

Es ist auch möglich, einen Wasm-Tag innerhalb des JavaScript-Hosts zu erstellen, indem Sie den [`WebAssembly.Tag()`]-Konstruktor(/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) verwenden:

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

Dann verweisen Sie innerhalb des Wasm-Moduls darauf:

```wat
(module
  (tag $my_error (import "env" "my_error") (param i32))

  ...
)
```

## Beispiele

### Vollständiges Beispiel zur Behandlung von JavaScript-Ausnahmen

In diesem Beispiel zeigen wir, wie man eine in einem Wasm-Modul definierte und geworfene Ausnahme vom zugehörigen JavaScript-Host behandelt.

#### Wasm

In unserem Wasm-Modul beginnen wir, indem wir einen Ausnahmetag namens `$my_error` mit einem einzelnen `i32`-Parameter definieren, dann exportieren wir ihn. Dann definieren wir eine Funktion namens `$might_throw`, die einen einzelnen `i32`-Parameter entgegennimmt, überprüft, ob er kleiner als `0` ist, und die `$my_error`-Ausnahme mit einer Nutzlast von `42` wirft, wenn dies der Fall ist. Schließlich exportieren wir die Funktion `$might_throw`.

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

Wir beginnen unser Skript mit der Definition einer Variablen namens `myErrorTag`, greifen auf eine Ausgabe-{{htmlelement("p")}}-Element zu, in das Ergebnisse ausgegeben werden sollen, und instanziieren unser Wasm-Modul mithilfe von [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

```js live-sample___tag_definition
let myErrorTag;
const output = document.querySelector("p");
const wasm = WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"));
```

Wenn das `instantiateStreaming()`-Versprechen aufgelöst wird, setzen wir die Variable `myErrorTag` auf den exportierten `my_error`-Tag und versuchen dann, die exportierte `might_throw()`-Funktion innerhalb eines `try`-Blocks mit einem negativen numerischen Argument auszuführen, um sie auslösen zu lassen.

Innerhalb des entsprechenden `catch`-Blocks wird die ausgelöste Wasm-Ausnahme im `error`-Objekt verfügbar sein, das eine Instanz von [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) ist. Wir überprüfen, ob dies zutrifft mit `error instanceof WebAssembly.Exception`, und ob das `error`-Objekt eine Ausnahme des exportierten `myErrorTag`-Typs darstellt (mithilfe der [`is()`]-Methode(/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)).

Wenn beide Bedingungen zutreffen, greifen wir mithilfe der [`getArg()`]-Methode(/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf die Nutzlast der Wasm-Ausnahme zu und schreiben sie in das Ausgabe-`<p>`. Falls nicht, schreiben wir das Fehlerobjekt in das Ausgabe-`<p>`.

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

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)-Anweisung
- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Anweisung
  - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)-Klausel
  - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)-Klausel
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)-Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)-Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-JavaScript-Schnittstelle
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)-JavaScript-Schnittstelle
