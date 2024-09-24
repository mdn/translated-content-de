---
title: "NDEFReader: write()-Methode"
short-title: write()
slug: Web/API/NDEFReader/write
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `write()`-Methode der {{DOMxRef("NDEFReader")}}-Schnittstelle versucht, eine NDEF-Nachricht auf einen Tag zu schreiben und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine Nachricht auf den Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsanforderung aus, wenn die "nfc"-Berechtigung nicht zuvor erteilt wurde.

## Syntax

```js-nolint
write(message)
write(message, options)
```

### Parameter

- `message`

  - : Die Nachricht, die geschrieben werden soll, entweder ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder ein Array von Einträgen. Ein Eintrag hat die folgenden Mitglieder:

    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten, ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder ein Array von verschachtelten Einträgen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Codierung des Eintrags angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte ID für den Eintrag.
    - `lang` {{optional_inline}}
      - : Ein gültiges Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
    - `recordType`

      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Er muss einer der folgenden Werte sein:

        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer {{domxref("NDEFRecord")}}.
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
        - `"smart-poster"`
          - : Ein Smart-Poster, wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation definiert.
        - `"text"`
          - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation definiert.
        - `"unknown"`
          - : Der Eintragstyp ist nicht bekannt.
        - `"URL"`
          - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation definiert.

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `overwrite`
      - : Ein boolescher Wert, der angibt, ob vorhandene Einträge überschrieben werden sollen, falls diese existieren.
    - `signal` {{optional_inline}}
      - : Ein {{DOMxRef("AbortSignal")}}, das es ermöglicht, den aktuellen Schreibvorgang abzubrechen.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das entweder aufgelöst wird, wenn eine Nachricht auf den Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise ab und gibt ein {{domxref("DOMException")}} zurück, dessen `name` einer der folgenden ist:

- `AbortError`
  - : Der Suchvorgang wurde mit dem {{DOMxRef("AbortSignal")}} abgebrochen, das im `options`-Argument übergeben wurde.
- `NotAllowedError`
  - : Die Berechtigung für diesen Vorgang wurde abgelehnt oder `overwrite` ist `false` und es gibt bereits Einträge auf dem Tag.
- `NotSupportedError`
  - : Es gibt keinen mit Web NFC kompatiblen NFC-Adapter, oder der verfügbare NFC-Adapter unterstützt das Senden von Nachrichten nicht, oder die Verbindung kann nicht hergestellt werden.
- `NotReadableError`
  - : Der UA darf nicht auf den zugrundeliegenden NFC-Adapter zugreifen (z.B. aufgrund der Benutzerpräferenz).
- `NetworkError`
  - : Übertragung fehlgeschlagen, nachdem sie bereits gestartet wurde (z.B. wurde der Tag aus dem Leser entfernt).

## Beispiele

### Einen Text-String schreiben

Das folgende Beispiel zeigt, wie man einen String auf ein NFC-Tag schreibt und auftretende Fehler verarbeitet.

```js
const ndef = new NDEFReader();
ndef
  .write("Hello World")
  .then(() => {
    console.log("Nachricht geschrieben.");
  })
  .catch((error) => {
    console.log(`Schreiben fehlgeschlagen :-( bitte erneut versuchen: ${error}.`);
  });
```

### Eine URL schreiben

Das folgende Beispiel zeigt, wie man ein oben beschriebenes Objektdatensatz auf ein NFC-Tag schreibt und auftretende Fehler verarbeitet.

```js
const ndef = new NDEFReader();
try {
  await ndef.write({
    records: [{ recordType: "url", data: "http://example.com/" }],
  });
} catch {
  console.log("Schreiben fehlgeschlagen :-( bitte erneut versuchen.");
}
```

### Ein Schreiben mit einem Timeout planen

Es ist manchmal nützlich, eine Zeitgrenze für einen Schreibvorgang zu setzen. Zum Beispiel fragen Sie den Benutzer, ein Tag zu berühren, aber es wird innerhalb einer bestimmten Zeit kein Tag gefunden, dann läuft die Zeit ab.

```js
const ndef = new NDEFReader();
ndef.onreading = (event) => console.log("Wir haben ein Tag gelesen!");

function write(data, { timeout } = {}) {
  return new Promise((resolve, reject) => {
    const ctlr = new AbortController();
    ctlr.signal.onabort = () => reject("Die Zeit ist abgelaufen, Abbruch!");
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
  // Warten Sie nur 5 Sekunden.
  await write("Hello World", { timeout: 5_000 });
} catch (err) {
  console.error("Etwas ist schief gelaufen", err);
} finally {
  console.log("Wir haben auf ein Tag geschrieben!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
