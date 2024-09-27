---
title: "File: File()-Konstruktor"
short-title: File()
slug: Web/API/File/File
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Der **`File()`**-Konstruktor erstellt eine neue Instanz des [`File`](/de/docs/Web/API/File)-Objekts.

## Syntax

```js-nolint
new File(fileBits, fileName)
new File(fileBits, fileName, options)
```

### Parameter

- `fileBits`
  - : Ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
    Objekt wie ein {{jsxref("Array")}}, das {{jsxref("ArrayBuffer")}},
    {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, [`Blob`](/de/docs/Web/API/Blob)s, Strings
    oder eine Mischung solcher Elemente enthält, die in die [`File`](/de/docs/Web/API/File) eingefügt werden.
    Beachten Sie, dass Strings hier als UTF-8 kodiert sind, im Gegensatz zu den üblichen JavaScript-UTF-16-Strings.
- `fileName`
  - : Ein String, der den Dateinamen oder den Pfad zur Datei darstellt.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das optionale Attribute für die Datei enthält. Verfügbare Optionen sind
    wie folgt:

    - `type` {{optional_inline}}
      - : Ein String, der den MIME-Typ des Inhalts darstellt, der in die Datei eingefügt wird. Standardwert ist `""`.
    - `endings` {{optional_inline}}
      - : Wie Newline-Zeichen (`\n`) innerhalb des Inhalts interpretiert werden, wenn
        die Daten Text sind. Der Standardwert, `transparent`, kopiert Newline-Zeichen in den Blob, ohne sie zu ändern. Um Zeilenumbrüche in das native Systemkonvention umzuwandeln, geben Sie den Wert `native` an.
    - `lastModified` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Millisekunden
        zwischen dem Unix-Zeit-Epoch und dem Zeitpunkt, an dem die Datei zuletzt geändert wurde, darstellt. Standardwert ist {{jsxref("Date.now()")}}.

## Beispiele

```js
const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`Blob`](/de/docs/Web/API/Blob)
