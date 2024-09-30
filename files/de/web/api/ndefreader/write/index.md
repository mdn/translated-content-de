---
title: "NDEFReader: write() Methode"
short-title: write()
slug: Web/API/NDEFReader/write
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `write()`-Methode des [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Interfaces versucht, eine NDEF-Nachricht auf einen Tag zu schreiben und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine Nachricht auf den Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsaufforderung aus, wenn die "nfc"-Berechtigung nicht zuvor erteilt wurde.

## Syntax

```js-nolint
write(message)
write(message, options)
```

### Parameter

- `message`

  - : Die Nachricht, die geschrieben werden soll, entweder ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
    ein {{jsxref("DataView")}} oder ein Array von Datensätzen. Ein Datensatz hat die folgenden Mitglieder:

    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten, ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
        ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiges Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
    - `recordType`

      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Es muss einer der folgenden Werte sein:

        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
        - `"smart-poster"`
          - : Ein Smart-Poster, wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation definiert.
        - `"text"`
          - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation definiert.
        - `"unknown"`
          - : Der Datensatztyp ist nicht bekannt.
        - `"URL"`
          - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation definiert.

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `overwrite`
      - : Ein boolescher Wert, der angibt, ob vorhandene Datensätze überschrieben werden sollen, falls solche existieren.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das es ermöglicht, den aktuellen Schreibvorgang abzubrechen.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das entweder aufgelöst wird, wenn eine Nachricht auf den Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise ab und übergibt eine [`DOMException`](/de/docs/Web/API/DOMException), deren `name` einer der folgenden ist:

- `AbortError`
  - : Der Scanvorgang wurde mit dem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen, das im `options`-Argument übergeben wurde.
- `NotAllowedError`
  - : Die Berechtigung für diese Operation wurde verweigert oder `overwrite` ist
    `false` und es sind bereits Datensätze auf dem Tag vorhanden.
- `NotSupportedError`
  - : Es gibt keinen mit Web NFC kompatiblen NFC-Adapter, oder der verfügbare NFC-Adapter unterstützt das Übertragen von Nachrichten nicht, oder die Verbindung kann nicht hergestellt werden.
- `NotReadableError`
  - : Der UA darf nicht auf den zugrunde liegenden NFC-Adapter zugreifen (z. B. aufgrund von Benutzerpräferenzen).
- `NetworkError`
  - : Der Transfer ist fehlgeschlagen, nachdem er bereits gestartet wurde (z. B. wurde das Tag vom Leser entfernt).

## Beispiele

### Schreiben einer Textzeichenfolge

Das folgende Beispiel zeigt, wie eine Zeichenfolge auf ein NFC-Tag geschrieben wird und wie auftretende Fehler behandelt werden.

```js
const ndef = new NDEFReader();
ndef
  .write("Hello World")
  .then(() => {
    console.log("Message written.");
  })
  .catch((error) => {
    console.log(`Write failed :-( try again: ${error}.`);
  });
```

### Schreiben einer URL

Das folgende Beispiel zeigt, wie ein Datensatzobjekt (wie oben beschrieben) auf ein NFC-Tag geschrieben wird und wie auftretende Fehler behandelt werden.

```js
const ndef = new NDEFReader();
try {
  await ndef.write({
    records: [{ recordType: "url", data: "http://example.com/" }],
  });
} catch {
  console.log("Write failed :-( try again.");
}
```

### Planen eines Schreibvorgangs mit einem Zeitlimit

Es ist manchmal nützlich, ein Zeitlimit für einen Schreibvorgang festzulegen. Zum Beispiel bitten Sie den Benutzer, ein Tag zu berühren, aber es wird innerhalb einer bestimmten Zeitspanne kein Tag gefunden, dann läuft die Zeit ab.

```js
const ndef = new NDEFReader();
ndef.onreading = (event) => console.log("We read a tag!");

function write(data, { timeout } = {}) {
  return new Promise((resolve, reject) => {
    const ctlr = new AbortController();
    ctlr.signal.onabort = () => reject("Time is up, bailing out!");
    setTimeout(() => ctlr.abort(), timeout);

    ndef.addEventListener(
      "reading",
      (event) => {
        ndef.write(data, { signal: ctlr.signal }).then(resolve, reject);
      },
      { once: true },
    );
  });
}

await ndef.scan();
try {
  // Let's wait for 5 seconds only.
  await write("Hello World", { timeout: 5_000 });
} catch (err) {
  console.error("Something went wrong", err);
} finally {
  console.log("We wrote to a tag!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
