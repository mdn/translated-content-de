---
title: MediaKeyMessageEvent
slug: Web/API/MediaKeyMessageEvent
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

---

title: MediaKeyMessageEvent
slug: Web/API/MediaKeyMessageEvent
page-type: web-api-interface
browser-compat: api.MediaKeyMessageEvent
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`MediaKeyMessageEvent`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) enthält den Inhalt und die zugehörigen Daten, wenn das Inhaltsentschlüsselungsmodul eine Nachricht für die Sitzung generiert.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MediaKeyMessageEvent.MediaKeyMessageEvent","MediaKeyMessageEvent()")}}
  - : Erstellt eine neue Instanz von `MediaKeyMessageEvent`.

## Instanzattribute

Erbt Attribute von seinem Elternteil, {{domxref("Event")}}.

- {{domxref("MediaKeyMessageEvent.message")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}} mit einer Nachricht vom Inhaltsentschlüsselungsmodul zurück. Nachrichten variieren je nach Schlüsselsystem.
- {{domxref("MediaKeyMessageEvent.messageType")}} {{ReadOnlyInline}}
  - : Gibt den Nachrichtentyp an. Kann einer von `license-request`, `license-renewal`, `license-release` oder `individualization-request` sein.

## Instanzmethoden

Erbt Methoden von seinem Elternteil, {{domxref("Event")}}.

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
