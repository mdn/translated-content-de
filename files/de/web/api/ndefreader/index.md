---
title: NDEFReader
slug: Web/API/NDEFReader
l10n:
  sourceCommit: a492b9739e10e7751797804228b360285e006858
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`NDEFReader`**-Schnittstelle der [Web NFC API](/de/docs/Web/API/Web_NFC_API) wird verwendet, um Daten von und zu kompatiblen NFC-Geräten zu lesen und zu schreiben, z. B. NFC-Tags, die NDEF unterstützen, wenn sich diese Geräte im magnetischen Induktionsfeld des Lesegeräts befinden.

{{InheritanceDiagram}}

## Konstruktor

- [`NDEFReader()`](/de/docs/Web/API/NDEFReader/NDEFReader) {{Experimental_Inline}}
  - : Gibt ein neues `NDEFReader`-Objekt zurück.

## Instanzmethoden

_Die `NDEFReader`-Schnittstelle erbt die Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget), ihrer übergeordneten Schnittstelle._

- [`NDEFReader.scan()`](/de/docs/Web/API/NDEFReader/scan) {{Experimental_Inline}}
  - : Aktiviert ein Lesegerät und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn ein NFC-Tag-Lesevorgang geplant ist, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsaufforderung aus, wenn die "nfc"-Berechtigung zuvor nicht erteilt wurde.
- [`NDEFReader.write()`](/de/docs/Web/API/NDEFReader/write) {{Experimental_Inline}}
  - : Versucht, eine NDEF-Nachricht auf ein Tag zu schreiben und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine Nachricht auf das Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsaufforderung aus, wenn die "nfc"-Berechtigung zuvor nicht erteilt wurde.

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`reading`](/de/docs/Web/API/NDEFReader/reading_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine neue Lesung von kompatiblen NFC-Geräten verfügbar ist.
- [`readingerror`](/de/docs/Web/API/NDEFReader/readingerror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich ein Tag in der Nähe eines Lesegeräts befindet, aber nicht gelesen werden kann.

## Beispiele

### Umgang mit initialen Lesungen beim Schreiben

Das folgende Beispiel zeigt, wie man zwischen einem allgemeinen Lesebehandler und einem, der speziell für ein einmaliges Schreiben verwendet wird, koordiniert. Um zu schreiben, muss ein Tag gefunden und gelesen werden. Dies gibt Ihnen die Möglichkeit zu überprüfen, ob es sich tatsächlich um ein Tag handelt, auf das Sie schreiben möchten. Deshalb wird empfohlen, dass Sie `write()` von einem Leseereignis aufrufen.

```js
const ndef = new NDEFReader();
let ignoreRead = false;

ndef.onreading = (event) => {
  if (ignoreRead) {
    return; // write pending, ignore read.
  }

  console.log("We read a tag, but not during pending write!");
};

function write(data) {
  ignoreRead = true;
  return new Promise((resolve, reject) => {
    ndef.addEventListener(
      "reading",
      (event) => {
        // Check if we want to write to this tag, or reject.
        ndef
          .write(data)
          .then(resolve, reject)
          .finally(() => (ignoreRead = false));
      },
      { once: true },
    );
  });
}

await ndef.scan();
try {
  await write("Hello World");
  console.log("We wrote to a tag!");
} catch (err) {
  console.error("Something went wrong", err);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
