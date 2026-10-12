---
title: "NDEFReader: Methode write()"
short-title: write()
slug: Web/API/NDEFReader/write
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die Methode `write()` der [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Schnittstelle versucht, eine NDEF-Nachricht auf einen Tag zu schreiben. Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Nachricht auf den Tag geschrieben wurde, oder bei einem Hardware- oder Berechtigungsfehler abgelehnt wird. Diese Methode löst eine Berechtigungsanfrage aus, wenn die Berechtigung „nfc“ noch nicht erteilt wurde.

## Syntax

```js-nolint
write(message)
write(message, options)
```

### Parameter

- `message`
  - : Die zu schreibende Nachricht: ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder ein Array von Datensätzen. Ein Datensatz hat folgende Eigenschaften:
    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten: einen String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder ein Array verschachtelter Datensätze.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler festgelegte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiges {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
    - `recordType`
      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Er muss einen der folgenden Werte haben:
        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
        - `"smart-poster"`
          - : Ein Smart Poster gemäß der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation.
        - `"text"`
          - : Text gemäß der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation.
        - `"unknown"`
          - : Der Typ des Datensatzes ist unbekannt.
        - `"URL"`
          - : Eine URL gemäß der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation.

- `options` {{optional_inline}}
  - : Ein Objekt mit folgenden Eigenschaften:
    - `overwrite`
      - : Ein boolescher Wert, der angibt, ob vorhandene Datensätze überschrieben werden sollen.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der aktuelle Schreibvorgang abgebrochen werden kann.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das erfüllt wird, sobald eine Nachricht auf den Tag geschrieben wurde, oder bei einem Hardware- oder Berechtigungsfehler abgelehnt wird.

### Ausnahmen

Diese Methode löst keine Ausnahmen aus. Stattdessen wird das zurückgegebene Promise mit einer [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, deren `name` einer der folgenden Werte ist:

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Scanvorgang wurde mit dem im Argument `options` übergebenen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Berechtigung für diesen Vorgang wurde verweigert, oder `overwrite` ist `false` und auf dem Tag befinden sich bereits Datensätze.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es ist kein mit Web NFC kompatibler NFC-Adapter vorhanden, der verfügbare NFC-Adapter unterstützt das Übertragen von Nachrichten nicht oder es kann keine Verbindung hergestellt werden.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der User-Agent darf nicht auf den zugrunde liegenden NFC-Adapter zugreifen (z. B. aufgrund einer Benutzereinstellung).
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Übertragung ist fehlgeschlagen, nachdem sie bereits begonnen hatte (z. B. weil der Tag vom Lesegerät entfernt wurde).

## Beispiele

### Einen Textstring schreiben

Das folgende Beispiel zeigt, wie Sie einen String auf einen NFC-Tag schreiben und dabei auftretende Fehler behandeln.

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

Das folgende Beispiel zeigt, wie Sie ein oben beschriebenes Datensatzobjekt auf einen NFC-Tag schreiben und dabei auftretende Fehler behandeln.

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

### Einen Schreibvorgang mit einem Zeitlimit versehen

Manchmal ist es sinnvoll, für einen Schreibvorgang ein Zeitlimit festzulegen. Wenn Sie beispielsweise einen Benutzer bitten, einen Tag an das Lesegerät zu halten, aber innerhalb einer bestimmten Zeit kein Tag gefunden wird, können Sie den Vorgang wegen Zeitüberschreitung abbrechen.

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
