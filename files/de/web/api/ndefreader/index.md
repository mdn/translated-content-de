---
title: NDEFReader
slug: Web/API/NDEFReader
l10n:
  sourceCommit: a492b9739e10e7751797804228b360285e006858
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`NDEFReader`**-Schnittstelle der [Web NFC API](/de/docs/Web/API/Web_NFC_API) wird verwendet, um von kompatiblen NFC-Geräten, z. B. NFC-Tags, die NDEF unterstützen, zu lesen und Daten darauf zu schreiben, wenn sich diese Geräte im magnetischen Induktionsfeld des Lesegeräts befinden.

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("NDEFReader.NDEFReader", "NDEFReader()")}} {{Experimental_Inline}}
  - : Gibt ein neues `NDEFReader`-Objekt zurück.

## Instanzmethoden

_Die `NDEFReader`-Schnittstelle erbt die Methoden von {{domxref("EventTarget")}}, ihrer übergeordneten Schnittstelle._

- {{DOMxRef("NDEFReader.scan", "NDEFReader.scan()")}} {{Experimental_Inline}}
  - : Aktiviert ein Lesegerät und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn ein NFC-Tag-Lesevorgang geplant ist, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsanfrage aus, wenn die "nfc"-Berechtigung nicht zuvor erteilt wurde.
- {{DOMxRef("NDEFReader.write", "NDEFReader.write()")}} {{Experimental_Inline}}
  - : Versucht, eine NDEF-Nachricht auf ein Tag zu schreiben und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine Nachricht auf das Tag geschrieben wurde, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsanfrage aus, wenn die "nfc"-Berechtigung nicht zuvor erteilt wurde.

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten Interface, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("NDEFReader.reading_event", "reading")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine neue Lesung von kompatiblen NFC-Geräten verfügbar ist.
- {{DOMxRef("NDEFReader.readingerror_event", "readingerror")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Tag in der Nähe eines Lesegeräts ist, aber nicht gelesen werden kann.

## Beispiele

### Behandlung von ersten Lesen während des Schreibens

Das folgende Beispiel zeigt, wie man zwischen einem allgemeinen Lese-Handler und einem verwendet, der speziell für ein einzelnes Schreiben gedacht ist, koordiniert. Um zu schreiben, muss ein Tag gefunden und gelesen werden. Dies gibt Ihnen die Möglichkeit zu überprüfen, ob es tatsächlich ein Tag ist, auf das Sie schreiben möchten. Deshalb wird empfohlen, dass Sie `write()` von einem Leseereignis aus aufrufen.

```js
const ndef = new NDEFReader();
let ignoreRead = false;

ndef.onreading = (event) => {
  if (ignoreRead) {
    return; // Schreiben ausstehend, Lesen ignorieren.
  }

  console.log("Wir haben ein Tag gelesen, aber nicht während eines ausstehenden Schreibens!");
};

function write(data) {
  ignoreRead = true;
  return new Promise((resolve, reject) => {
    ndef.addEventListener(
      "reading",
      (event) => {
        // Überprüfen, ob wir auf dieses Tag schreiben wollen, oder ablehnen.
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
  await write("Hallo Welt");
  console.log("Wir haben auf ein Tag geschrieben!");
} catch (err) {
  console.error("Etwas ist schiefgelaufen", err);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
