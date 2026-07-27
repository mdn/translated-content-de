---
title: WebAssembly.Tag
slug: WebAssembly/Reference/JavaScript_interface/Tag
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

Das **`WebAssembly.Tag`**-Objekt repräsentiert einen WebAssembly-Ausnahmentyp, der in einem Wasm-Modul geworfen werden kann.

## Konstruktor

- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
  - : Erstellt eine neue Instanz des `WebAssembly.Tag`-Objekts.

## Instanzmethoden

- [`Tag.prototype.type()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)
  - : Gibt das Objekt zurück, das das Datentypen-Array für den Tag definiert (wie in seinem Konstruktor festgelegt).

## Beschreibung

WebAssembly-Module können Ausnahmetypen unter Verwendung der [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Moduldefinition definieren. Ausnahmen dieser Typen können dann mit dem [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Befehl geworfen und mit [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Blöcken, die [catch-Klauseln](/de/docs/WebAssembly/Reference/Exception_handling#catch_clauses) enthalten, abgefangen und behandelt werden.

Falls gewünscht, können Sie einen Wasm-Ausnahmetyp im JavaScript-Host mit dem [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)-Konstruktor definieren, bevor Sie ihn in das Wasm-Modul importieren, um ihn dort zu verwenden.

Einer der Hauptvorteile der Definition von Wasm-Ausnahmetypen in JavaScript besteht darin, dass Sie den Ausnahmetyp beim Behandeln einer Ausnahme in JavaScript verfügbar haben müssen. Wenn diese in JavaScript definiert ist, erspart es Ihnen, ihn aus dem Wasm-Modul exportieren zu müssen.

Zum Beispiel können Sie beginnen, indem Sie einen Fehler-Tag-Typ wie folgt konstruieren:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Sie können ihn dann in ein Wasm-Modul so importieren:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(/* ... */);
```

Innerhalb des Wasm-Moduls würden Sie den Fehler-Tag importieren und an einer Stelle in Ihrem Code eine Ausnahme dieses Typs werfen:

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

Zurück in JavaScript könnten Sie dann versuchen, die exportierte `throw()`-Funktion in einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung auszuführen. Wenn die Funktion eine Ausnahme wirft, wird der in den `catch`-Block propagierte Fehler eine Instanz des [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts sein.

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

Sie können prüfen, ob es sich um denselben Ausnahmetyp handelt, den wir zuvor definiert haben (`myErrorTag`), indem Sie [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) verwenden und dann auf die Nutzlast der Ausnahme mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) zugreifen.

> [!NOTE]
> Sie können nicht auf die Werte einer Ausnahme mit einem neuen Tag zugreifen, das zufällig dieselben Parameter hat; es ist ein anderer Tag!
> Dies stellt sicher, dass WebAssembly-Module bei Bedarf Ausnahmeinformationen intern behalten können.
> Code kann immer noch Ausnahmen fangen und erneut werfen, die er nicht versteht.

## Beispiele

Für ein funktionierendes Beispiel, wie eine Wasm-Ausnahme in JavaScript behandelt wird, siehe die [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Befehlsreferenzseite.

### Grundlegende Verwendung

Dieses Codebeispiel erstellt eine neue `Tag`-Instanz:

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Das unten gezeigte Beispiel demonstriert, wie wir es während der Instanziierung in ein Wasm-Modul importieren könnten:

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

Das WebAssembly-Modul könnte den Tag dann wie unten gezeigt importieren:

```wat
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32)))
)
```

Wenn das Tag verwendet wurde, um eine Ausnahme zu werfen, die nach JavaScript propagiert wurde, könnten wir das Tag verwenden, um seine Werte zu inspizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) Definition
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref) Typ
