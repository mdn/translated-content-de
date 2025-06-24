---
title: "NDEFReader: write() Methode"
short-title: write()
slug: Web/API/NDEFReader/write
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `write()` Methode des [`NDEFReader`](/de/docs/Web/API/NDEFReader) Interfaces versucht, eine NDEF-Nachricht auf ein Tag zu schreiben und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine Nachricht auf das Tag geschrieben wurde, oder abgelehnt wird, falls ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsausforderung aus, wenn die Berechtigung "nfc" nicht zuvor erteilt wurde.

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
      - : Beinhaltet die zu übertragenden Daten, ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
        ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiger Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
    - `recordType`
      - : Ein String, der den Typ der im `data` gespeicherten Daten angibt. Es muss einer der folgenden Werte sein:
        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
        - `"smart-poster"`
          - : Ein Smartposter gemäß der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation.
        - `"text"`
          - : Text gemäß der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation.
        - `"unknown"`
          - : Der Typ des Datensatzes ist nicht bekannt.
        - `"URL"`
          - : Eine URL gemäß der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation.

- `options` {{optional_inline}}
  - : Ein Objekt mit folgenden Eigenschaften:
    - `overwrite`
      - : Ein boolescher Wert, der angibt, ob vorhandene Datensätze überschrieben werden sollen, falls solche existieren.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das das aktuelle Schreibvorgang abbrechen lässt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das entweder aufgelöst wird, wenn eine Nachricht auf das Tag geschrieben wurde, oder abgelehnt wird, falls ein Hardware- oder Berechtigungsfehler auftritt.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen wird das zurückgegebene Promise abgelehnt und ein [`DOMException`](/de/docs/Web/API/DOMException) übergeben, dessen `name` einer der folgenden ist:

- `AbortError`
  - : Der Scan-Vorgang wurde mit dem im `options` Argument übergebenen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen.
- `NotAllowedError`
  - : Die Berechtigung für diesen Vorgang wurde abgelehnt oder `overwrite` ist
    `false` und es sind bereits Datensätze auf dem Tag vorhanden.
- `NotSupportedError`
  - : Es gibt keinen NFC-Adapter, der mit Web NFC kompatibel ist, oder der verfügbare NFC-Adapter unterstützt das Senden von Nachrichten nicht, oder die Verbindung kann nicht hergestellt werden.
- `NotReadableError`
  - : Der UA darf nicht auf den zugrunde liegenden NFC-Adapter zugreifen (z.B. aufgrund der Benutzereinstellung).
- `NetworkError`
  - : Die Übertragung schlug fehl, nachdem sie bereits begonnen hatte (z.B. wurde das Tag vom Leser entfernt).

## Beispiele

### Einen Textstring schreiben

Das folgende Beispiel zeigt, wie ein String auf ein NFC-Tag geschrieben wird und wie auftretende Fehler verarbeitet werden.

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

### Eine URL schreiben

Das folgende Beispiel zeigt, wie ein oben beschriebener Datensatz auf ein NFC-Tag geschrieben wird und wie auftretende Fehler verarbeitet werden.

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

### Ein Schreiben mit einem Timeout planen

Es ist manchmal nützlich, eine Zeitbegrenzung für einen Schreibvorgang festzulegen. Zum Beispiel bitten Sie den Benutzer, ein Tag zu berühren, aber innerhalb einer bestimmten Zeitspanne wird kein Tag gefunden, dann läuft die Zeit ab.

```js
const ndef = new NDEFReader();
ndef.onreading = (event) => console.log("We read a tag!");

function write(data, { timeout } = {}) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    controller.signal.onabort = () =>
      reject(new Error("Time is up, bailing out!"));
    setTimeout(() => controller.abort(), timeout);

    ndef.addEventListener(
      "reading",
      (event) => {
        ndef.write(data, { signal: controller.signal }).then(resolve, reject);
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
