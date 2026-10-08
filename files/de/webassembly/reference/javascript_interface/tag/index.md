---
title: WebAssembly.Tag
slug: WebAssembly/Reference/JavaScript_interface/Tag
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Das **`WebAssembly.Tag`**-Objekt repräsentiert einen WebAssembly-Ausnahmetyp, der in einem Wasm-Modul ausgelöst werden kann.

## Konstruktor

- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
  - : Erstellt eine neue Instanz eines `WebAssembly.Tag`-Objekts.

## Instanzmethoden

- [`Tag.prototype.type()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)
  - : Gibt das Objekt zurück, das das Array der Datentypen für den Tag definiert (wie im Konstruktor festgelegt).

## Beschreibung

WebAssembly-Module können Ausnahmetypen mit der Moduldefinition [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) definieren. Ausnahmen dieser Typen können dann mit der Anweisung [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw) ausgelöst und mithilfe von [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Blöcken mit [catch-Klauseln](/de/docs/WebAssembly/Reference/Exception_handling#catch_clauses) abgefangen und behandelt werden.

Bei Bedarf können Sie einen Wasm-Ausnahmetyp im JavaScript-Host mit dem Konstruktor [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) definieren und ihn anschließend zur Verwendung in das Wasm-Modul importieren.

Ein wesentlicher Vorteil der Definition von Wasm-Ausnahmetypen in JavaScript besteht darin, dass der Ausnahmetyp dort verfügbar sein muss, um eine Ausnahme in JavaScript zu behandeln. Wenn Sie ihn in JavaScript definieren, müssen Sie ihn nicht aus dem Wasm-Modul exportieren.

Beispielsweise können Sie zunächst einen Fehler-Tag-Typ wie folgt erstellen:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Anschließend können Sie ihn wie folgt in ein Wasm-Modul importieren:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(/* ... */);
```

Im Wasm-Modul importieren Sie den Fehler-Tag und lösen an einer Stelle in Ihrem Code eine Ausnahme dieses Typs aus:

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

Zurück in JavaScript können Sie versuchen, die exportierte Funktion `throw()` in einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung auszuführen. Wenn die Funktion eine Ausnahme auslöst, ist der an den `catch`-Block weitergegebene Fehler eine Instanz eines [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts.

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

Mit [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) können Sie prüfen, ob die Ausnahme denselben Ausnahmetyp hat, den wir zuvor definiert haben (`myErrorTag`). Anschließend können Sie mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf die Nutzdaten der Ausnahme zugreifen.

> [!NOTE]
> Sie können nicht mit einem neuen Tag auf die Werte einer Ausnahme zugreifen, nur weil dieser dieselben Parameter hat; es handelt sich um einen anderen Tag!
> Dadurch können WebAssembly-Module Ausnahmeinformationen bei Bedarf intern halten.
> Code kann Ausnahmen, die er nicht versteht, dennoch abfangen und erneut auslösen.

## Beispiele

Ein funktionsfähiges Beispiel für die Behandlung einer Wasm-Ausnahme in JavaScript finden Sie auf der Referenzseite zur Anweisung [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw).

### Grundlegende Verwendung

Dieser Codeausschnitt erstellt eine neue `Tag`-Instanz:

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Der folgende Ausschnitt zeigt, wie wir sie bei der Instanziierung in ein Wasm-Modul importieren könnten:

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

Das WebAssembly-Modul könnte den Tag dann wie folgt importieren:

```wat
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32)))
)
```

Wenn mit dem Tag eine Ausnahme ausgelöst wurde, die an JavaScript weitergegeben wurde, könnten wir den Tag verwenden, um die Werte der Ausnahme zu untersuchen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) – Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
