---
title: "NDEFReader: write() Methode"
short-title: write()
slug: Web/API/NDEFReader/write
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `write()`-Methode der [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Schnittstelle versucht, eine NDEF-Nachricht auf ein Tag zu schreiben und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine Nachricht auf das Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler aufgetreten ist. Diese Methode löst eine Berechtigungsabfrage aus, wenn die "nfc"-Berechtigung zuvor nicht erteilt wurde.

## Syntax

```js-nolint
write(message)
write(message, options)
```

### Parameter

- `message`
  - : Die zu schreibende Nachricht, entweder ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
    ein {{jsxref("DataView")}} oder ein Array von Datensätzen. Ein Datensatz hat die folgenden Mitglieder:
    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten, ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}},
        ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Ein vom Entwickler definierter Identifikator für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
    - `recordType`
      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Er muss einer der folgenden Werte sein:
        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
        - `"smart-poster"`
          - : Ein smart-poster, wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation definiert.
        - `"text"`
          - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation definiert.
        - `"unknown"`
          - : Der Datensatztyp ist nicht bekannt.
        - `"URL"`
          - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation definiert.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `overwrite`
      - : Ein boolescher Wert, der angibt, ob vorhandene Datensätze überschrieben werden sollen, falls solche existieren.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das die aktuelle Schreiboperation abbrechen kann.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das entweder aufgelöst wird, wenn eine Nachricht auf das Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler aufgetreten ist.

### Ausnahmen

Diese Methode löst keine Ausnahmen aus; stattdessen wird das zurückgegebene Promise abgelehnt,
und ein [`DOMException`](/de/docs/Web/API/DOMException) wird weitergegeben, dessen `name` einer der
folgenden ist:

- `AbortError`
  - : Der Scanvorgang wurde mit dem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen, das im `options`-Argument übergeben wurde.
- `NotAllowedError`
  - : Die Berechtigung für diesen Vorgang wurde abgelehnt oder `overwrite` ist
    `false`, und es befinden sich bereits Datensätze auf dem Tag.
- `NotSupportedError`
  - : Es gibt keinen NFC-Adapter, der mit Web NFC kompatibel ist, oder der verfügbare NFC-Adapter unterstützt das Senden von Nachrichten nicht, oder die Verbindung kann nicht hergestellt werden.
- `NotReadableError`
  - : Dem UA ist der Zugriff auf den zugrunde liegenden NFC-Adapter nicht gestattet (z. B. aufgrund der Benutzerpräferenz).
- `NetworkError`
  - : Der Transfer ist fehlgeschlagen, nachdem er bereits gestartet wurde (z. B. wurde das Tag vom
    Leser entfernt).

## Beispiele

### Schreiben eines Textstrings

Das folgende Beispiel zeigt, wie ein String auf einem NFC-Tag geschrieben wird und wie auf auftretende Fehler reagiert wird.

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

Das folgende Beispiel zeigt, wie ein Datensatzobjekt (wie oben beschrieben) auf einem NFC-Tag geschrieben wird und wie auf auftretende Fehler reagiert wird.

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

### Planung eines Schreibvorgangs mit Timeout

Es ist manchmal nützlich, ein Zeitlimit für eine Schreiboperation festzulegen. Zum Beispiel bitten Sie den Benutzer, ein Tag zu berühren, aber es wird innerhalb eines bestimmten Zeitraums kein Tag gefunden, dann läuft die Zeit ab.

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
