---
title: "NDEFReader: write() Methode"
short-title: write()
slug: Web/API/NDEFReader/write
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `write()`-Methode des [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Interfaces versucht, eine NDEF-Nachricht auf einen Tag zu schreiben und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine Nachricht auf den Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsaufforderung aus, wenn die "nfc"-Berechtigung nicht vorher erteilt wurde.

## Syntax

```js-nolint
write(message)
write(message, options)
```

### Parameter

- `message`
  - : Die zu schreibende Nachricht, entweder ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
    ein {{jsxref("DataView")}}, oder ein Array von Datensätzen. Ein Datensatz hat die folgenden Mitglieder:
    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten, ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
        ein {{jsxref("DataView")}}, oder ein Array von verschachtelten Datensätzen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Codierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.
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
          - : Ein Smart Poster wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation definiert.
        - `"text"`
          - : Text wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation definiert.
        - `"unknown"`
          - : Der Datensatztyp ist nicht bekannt.
        - `"URL"`
          - : Eine URL wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation definiert.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `overwrite`
      - : Ein boolescher Wert, der angibt, ob vorhandene Datensätze überschrieben werden sollen, falls solche existieren.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), der es ermöglicht, die aktuelle Schreiboperation abzubrechen.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das entweder aufgelöst wird, wenn eine Nachricht auf den Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise ab und übergibt ein [`DOMException`](/de/docs/Web/API/DOMException), dessen `name` einer der folgenden ist:

- `AbortError`
  - : Die Scan-Operation wurde mit dem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen, das im `options`-Argument übergeben wurde.
- `NotAllowedError`
  - : Die Berechtigung für diese Operation wurde abgelehnt, oder `overwrite` ist `false` und es gibt bereits Datensätze auf dem Tag.
- `NotSupportedError`
  - : Es gibt keinen mit Web NFC kompatiblen NFC-Adapter, oder der vorhandene NFC-Adapter unterstützt das Senden von Nachrichten nicht, oder die Verbindung kann nicht hergestellt werden.
- `NotReadableError`
  - : Der UA darf nicht auf den zugrunde liegenden NFC-Adapter zugreifen (z.B. aufgrund von Benutzervorgaben).
- `NetworkError`
  - : Die Übertragung ist fehlgeschlagen, nachdem sie bereits gestartet wurde (z.B. wurde der Tag aus dem Leser entfernt).

## Beispiele

### Eine Textzeichenkette schreiben

Das folgende Beispiel zeigt, wie man eine Zeichenkette auf einen NFC-Tag schreibt und auftretende Fehler verarbeitet.

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

Das folgende Beispiel zeigt, wie man ein Datensatzobjekt (wie oben beschrieben) auf einen NFC-Tag schreibt und auftretende Fehler verarbeitet.

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

### Ein Schreibvorgang mit Timeout planen

Es ist manchmal nützlich, ein Zeitlimit für einen Schreibvorgang festzulegen. Zum Beispiel bitten Sie den Benutzer, einen Tag zu berühren, aber innerhalb einer bestimmten Zeit wird kein Tag gefunden, dann läuft die Zeit ab.

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
