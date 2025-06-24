---
title: "Datei: Konstruktor File()"
short-title: File()
slug: Web/API/File/File
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Der **`File()`**-Konstruktor erstellt eine neue Instanz eines [`File`](/de/docs/Web/API/File)-Objekts.

## Syntax

```js-nolint
new File(fileBits, fileName)
new File(fileBits, fileName, options)
```

### Parameter

- `fileBits`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wie ein {{jsxref("Array")}}, das {{jsxref("ArrayBuffer")}}s, {{jsxref("TypedArray")}}s, {{jsxref("DataView")}}s, [`Blob`](/de/docs/Web/API/Blob)s, Zeichenfolgen oder eine Mischung solcher Elemente enthält, die in die [`File`](/de/docs/Web/API/File) eingefügt werden. Beachten Sie, dass Zeichenfolgen hier als {{Glossary("UTF-8", "UTF-8")}} kodiert werden, im Gegensatz zu den üblichen JavaScript {{Glossary("UTF-16", "UTF-16")}} Zeichenfolgen.
- `fileName`
  - : Eine Zeichenfolge, die den Dateinamen oder den Pfad zur Datei darstellt.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das optionale Attribute für die Datei enthält. Verfügbare Optionen sind wie folgt:
    - `type` {{optional_inline}}
      - : Eine Zeichenfolge, die den MIME-Typ des Inhalts darstellt, der in die Datei eingefügt wird. Standardmäßig ist der Wert `""`.
    - `endings` {{optional_inline}}
      - : Wie Zeilenumbrüche (`\n`) innerhalb der Inhalte interpretiert werden, wenn die Daten Text sind. Der Standardwert, `transparent`, kopiert Zeilenumbrüche in das Blob, ohne sie zu ändern. Um Zeilenumbrüche in das native Konvention des Hostsystems zu konvertieren, geben Sie den Wert `native` an.
    - `lastModified` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Millisekunden zwischen der Unix-Zeit-Epoche und dem Zeitpunkt darstellt, an dem die Datei zuletzt geändert wurde. Standardmäßig ist der Wert {{jsxref("Date.now()")}}.

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
