---
title: "File: File()-Konstruktor"
short-title: File()
slug: Web/API/File/File
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Der **`File()`**-Konstruktor erstellt eine neue Instanz des {{domxref("File")}} Objekts.

## Syntax

```js-nolint
new File(fileBits, fileName)
new File(fileBits, fileName, options)
```

### Parameter

- `fileBits`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
    Objekt wie ein {{jsxref("Array")}}, das {{jsxref("ArrayBuffer")}}s,
    {{jsxref("TypedArray")}}s, {{jsxref("DataView")}}s, {{domxref("Blob")}}s, Zeichenfolgen
    oder eine Mischung solcher Elemente enthält, die in die {{domxref("File")}}
    eingefügt werden. Beachten Sie, dass Zeichenfolgen hier als UTF-8 kodiert sind, im Gegensatz zu den üblichen JavaScript UTF-16-Zeichenfolgen.
- `fileName`
  - : Eine Zeichenfolge, die den Dateinamen oder den Pfad zur Datei darstellt.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das optionale Attribute für die Datei enthält. Verfügbare Optionen sind wie folgt:

    - `type` {{optional_inline}}
      - : Eine Zeichenfolge, die den MIME-Typ des
        Inhalts darstellt, der in die Datei eingefügt wird. Standardmäßig hat es den Wert `""`.
    - `endings` {{optional_inline}}
      - : Wie Zeilenendezeichen (`\n`) innerhalb der Inhalte interpretiert werden sollen, wenn
        die Daten Text sind. Der Standardwert `transparent` kopiert Zeilenendezeichen ohne Änderungen in das Blob. Um Zeilenenden in das native Format des Hostsystems zu konvertieren, geben Sie den Wert `native` an.
    - `lastModified` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Millisekunden
        zwischen der Unix-Zeit-Epoche und der letzten Änderung der Datei darstellt. Standardmäßig hat es den Wert {{jsxref("Date.now()")}}.

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

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
