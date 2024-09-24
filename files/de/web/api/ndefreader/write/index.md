---
title: "NDEFReader: write() Methode"
short-title: write()
slug: Web/API/NDEFReader/write
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `write()`-Methode des [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Interfaces versucht, eine NDEF-Nachricht auf ein Tag zu schreiben und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine Nachricht auf das Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsaufforderung aus, wenn die "nfc"-Berechtigung nicht zuvor gewährt wurde.

## Syntax

```js-nolint
write(message)
write(message, options)
```

### Parameter

- `message`

  - : Die zu schreibende Nachricht, entweder als String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
    ein {{jsxref("DataView")}} oder ein Array von Datensätzen. Ein Datensatz hat die folgenden Mitglieder:

    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten, ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
        ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiger Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/MIME_types).
    - `recordType`

      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Es muss einer der folgenden Werte sein:

        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/MIME_types).
        - `"smart-poster"`
          - : Ein Smart Poster gemäß der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation.
        - `"text"`
          - : Text gemäß der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation.
        - `"unknown"`
          - : Der Typ des Datensatzes ist nicht bekannt.
        - `"URL"`
          - : Eine URL gemäß der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation.

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `overwrite`
      - : Ein boolescher Wert, der angibt, ob vorhandene Datensätze überschrieben werden sollen, sofern solche vorhanden sind.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), der das aktuelle Schreibvorgang abbrechen lässt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das entweder aufgelöst wird, wenn eine Nachricht auf das Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise ab, indem sie ein [`DOMException`](/de/docs/Web/API/DOMException) übergibt, dessen `name` einer der folgenden ist:

- `AbortError`
  - : Der Scan-Vorgang wurde mit dem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen, das im `options`-Argument übergeben wurde.
- `NotAllowedError`
  - : Die Berechtigung für diesen Vorgang wurde abgelehnt oder `overwrite` ist
    `false` und es befinden sich bereits Datensätze auf dem Tag.
- `NotSupportedError`
  - : Es gibt keinen mit Web NFC kompatiblen NFC-Adapter, oder der vorhandene NFC-Adapter unterstützt das Senden von Nachrichten nicht, oder die Verbindung kann nicht hergestellt werden.
- `NotReadableError`
  - : Die UA darf nicht auf den zugrunde liegenden NFC-Adapter zugreifen (z.B. aufgrund der Benutzerpräferenz).
- `NetworkError`
  - : Die Übertragung ist fehlgeschlagen, nachdem sie bereits begonnen hatte (z.B. wurde das Tag aus dem
    Leser entfernt).

## Beispiele

### Einen Textstring schreiben

Das folgende Beispiel zeigt, wie Sie einen String auf ein NFC-Tag schreiben und auftretende Fehler verarbeiten können.

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

Das folgende Beispiel zeigt, wie Sie ein oben beschriebenes Datensatzobjekt auf ein NFC-Tag schreiben und auftretende Fehler verarbeiten können.

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

### Schreiben mit Timeout planen

Es ist manchmal nützlich, eine Zeitbegrenzung für einen Schreibvorgang festzulegen. Zum Beispiel bitten Sie den Benutzer, ein Tag zu berühren, aber innerhalb einer bestimmten Zeit wird kein Tag gefunden, dann erfolgt ein Timeout.

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
