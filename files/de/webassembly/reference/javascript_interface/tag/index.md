---
title: WebAssembly.Tag
slug: WebAssembly/Reference/JavaScript_interface/Tag
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Das **`WebAssembly.Tag`** Objekt repräsentiert einen WebAssembly Ausnahmetyp, der in einem Wasm-Modul ausgelöst werden kann.

## Konstruktor

- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
  - : Erstellt eine neue Instanz des `WebAssembly.Tag` Objekts.

## Instanzmethoden

- [`Tag.prototype.type()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)
  - : Gibt das Objekt zurück, das das Datentypen-Array für den Tag definiert (wie im Konstruktor festgelegt).

## Beschreibung

WebAssembly-Module können Ausnahmetypen mithilfe der [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) Moduldefinition definieren. Ausnahmen dieser Typen können dann mit der [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw) Anweisung ausgelöst und mit [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table) Blöcken, die [catch-Klauseln](/de/docs/WebAssembly/Reference/Exception_handling#catch_clauses) enthalten, abgefangen und behandelt werden.

Wenn gewünscht, können Sie einen Wasm-Ausnahmetyp im JavaScript-Host mit dem [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) Konstruktor definieren, bevor Sie ihn in das Wasm-Modul importieren, um ihn dort zu verwenden.

Einer der Hauptvorteile der Definition von Wasm-Ausnahmetypen in JavaScript ist, dass der Ausnahmetyp verfügbar sein muss, wenn eine Ausnahme in JavaScript behandelt wird. Wenn er in JavaScript definiert ist, ersparen Sie sich den Export aus dem Wasm-Modul.

So können Sie beispielsweise beginnen, einen Fehler-Tag-Typ wie folgt zu erstellen:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Sie können ihn dann in ein Wasm-Modul wie folgt importieren:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(/* ... */);
```

Im Wasm-Modul würden Sie den Fehler-Tag importieren und an irgendeiner Stelle im Code eine Ausnahme dieses Typs auslösen:

```wat
(tag $my_error (import "env" "my_error") (param i32))

(func $throw (param $value i32)

  ...

  (i32.const 42)     ;; error code payload
  (throw $my_error)  ;; throw exception type $my_error

  ...

)

(export "throw" (func $throw))
```

Zurück in JavaScript könnten Sie dann versuchen, die exportierte `throw()` Funktion in einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Anweisung auszuführen. Wenn die Funktion eine Ausnahme auslöst, wird der Fehler, der in den `catch` Block propagiert wird, eine Instanz des [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) Objekts sein.

```js
WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(
  (result) => {
    try {
      // Cause function to throw
      result.instance.exports.throw(-1);
    } catch (e) {
      if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
        const errorCode = e.getArg(myErrorTag, 0); // 0 = first payload value
        console.log("Error code:", errorCode); // 42
      } else {
        throw e; // throw other errors
      }
    }
  },
);
```

Sie können überprüfen, ob es sich um den gleichen Ausnahmetyp handelt, den wir zuvor definiert haben (`myErrorTag`), mithilfe von [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), und dann die Nutzlast der Ausnahme mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) abrufen.

> [!NOTE]
> Sie können nicht auf die Werte einer Ausnahme mit einem neuen Tag zugreifen, das zufällig die gleichen Parameter hat; es ist ein anderer Tag!
> Dies stellt sicher, dass WebAssembly-Module bei Bedarf Ausnahmeinformations intern halten können.
> Der Code kann dennoch Ausnahmen auffangen und erneut auslösen, die er nicht versteht.

## Beispiele

Für ein funktionierendes Beispiel zur Behandlung einer Wasm-Ausnahme in JavaScript, siehe die [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw) Anweisungsreferenzseite.

### Grundlegende Verwendung

Dieser Codeausschnitt erstellt eine neue `Tag` Instanz:

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Der untenstehende Ausschnitt zeigt, wie wir ihn während der Instanziierung in ein Wasm-Modul importieren könnten:

```js
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject).then(
  (obj) => {
    // …
  },
);
```

Das WebAssembly-Modul könnte dann den Tag wie unten gezeigt importieren:

```wat
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32)))
)
```

Wenn der Tag verwendet wurde, um eine Ausnahme auszulösen, die nach JavaScript propagiert wurde, könnten wir den Tag verwenden, um seine Werte zu inspizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) Definition
- [`exnref`](/de/docs/WebAssembly/Reference/Types/exnref) Typ
