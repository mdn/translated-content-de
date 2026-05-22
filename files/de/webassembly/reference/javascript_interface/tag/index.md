---
title: WebAssembly.Tag
slug: WebAssembly/Reference/JavaScript_interface/Tag
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Das **`WebAssembly.Tag`**-Objekt repräsentiert einen WebAssembly-Ausnahmetyp, der in einem Wasm-Modul ausgelöst werden kann.

## Konstruktor

- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
  - : Erstellt eine neue Instanz eines `WebAssembly.Tag`-Objekts.

## Instanzmethoden

- [`Tag.prototype.type()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)
  - : Gibt das Objekt zurück, das das Datentypen-Array für das Tag definiert (wie im Konstruktor festgelegt).

## Beschreibung

WebAssembly-Module können Ausnahmetypen mit der [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Moduldefinition definieren. Ausnahmen dieser Typen können dann mit der [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung ausgelöst und mit [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Blöcken, die [catch-Klauseln](/de/docs/WebAssembly/Reference/Exception_handling#catch_clauses) enthalten, abgefangen und behandelt werden.

Falls gewünscht, können Sie einen Wasm-Ausnahmetyp im JavaScript-Host mit dem [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)-Konstruktor definieren, bevor Sie ihn in das Wasm-Modul importieren, um ihn dort zu verwenden.

Einer der Hauptvorteile der Definition von Wasm-Ausnahmetypen in JavaScript besteht darin, dass Sie den Ausnahmetyp benötigen, wenn Sie eine Ausnahme in JavaScript behandeln. Wenn er in JavaScript definiert ist, erspart Ihnen das den Export aus dem Wasm-Modul.

Zum Beispiel können Sie beginnen, indem Sie einen Fehlertag-Typ wie folgt konstruieren:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Sie können ihn dann in ein Wasm-Modul wie folgt importieren:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then( ... )
```

Innerhalb des Wasm-Moduls würden Sie den Fehlertag importieren und an irgendeiner Stelle in Ihrem Code eine Ausnahme dieses Typs auslösen:

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

Zurück in JavaScript könnten Sie dann versuchen, die exportierte `throw()`-Funktion in einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung auszuführen. Wenn die Funktion eine Ausnahme auslöst, wird der zu dem `catch`-Block propagierte Fehler eine Instanz eines [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts sein.

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

Sie können prüfen, ob er den gleichen Ausnahmetyp hat, den wir zuvor definiert haben (`myErrorTag`), indem Sie [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) verwenden, und dann auf die Nutzdaten der Ausnahme mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) zugreifen.

> [!NOTE]
> Sie können nicht auf die Werte einer Ausnahme mit einem neuen Tag zugreifen, das zufällig dieselben Parameter hat; es ist ein anderes Tag!
> Dies stellt sicher, dass WebAssembly-Module Ausnahmeinformationen intern halten können, wenn erforderlich.
> Code kann dennoch Ausnahmen abfangen und erneut auslösen, die er nicht versteht.

## Beispiele

Für ein funktionierendes Beispiel zum Umgang mit einer Wasm-Ausnahme in JavaScript siehe die Referenzseite zur [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung.

### Grundlegende Verwendung

Dieses Codebeispiel erstellt eine neue `Tag`-Instanz:

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Das untenstehende Beispiel zeigt, wie wir es während der Instanziierung in ein Wasm-Modul importieren könnten:

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

Das WebAssembly-Modul könnte das Tag dann wie unten gezeigt importieren:

```wat
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32)))
)
```

Wenn das Tag verwendet wurde, um eine Ausnahme auszulösen, die nach JavaScript propagiert wurde, könnten wir das Tag verwenden, um seine Werte zu inspizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
- [`exnref`](/de/docs/WebAssembly/Reference/Types/exnref)-Typ
