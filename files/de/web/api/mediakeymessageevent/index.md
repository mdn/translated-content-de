---
title: MediaKeyMessageEvent
slug: Web/API/MediaKeyMessageEvent
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`MediaKeyMessageEvent`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) enthält den Inhalt und die zugehörigen Daten, wenn das Inhaltsentschlüsselungsmodul eine Nachricht für die Sitzung generiert.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaKeyMessageEvent()`](/de/docs/Web/API/MediaKeyMessageEvent/MediaKeyMessageEvent)
  - : Erstellt eine neue Instanz von `MediaKeyMessageEvent`.

## Instanzeigenschaften

Erbt Eigenschaften von seinem übergeordneten Element, [`Event`](/de/docs/Web/API/Event).

- [`MediaKeyMessageEvent.message`](/de/docs/Web/API/MediaKeyMessageEvent/message) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} mit einer Nachricht vom Inhaltsentschlüsselungsmodul zurück. Nachrichten variieren je nach Schlüsselsystem.
- [`MediaKeyMessageEvent.messageType`](/de/docs/Web/API/MediaKeyMessageEvent/messageType) {{ReadOnlyInline}}
  - : Gibt den Typ der Nachricht an. Kann `license-request`, `license-renewal`, `license-release` oder `individualization-request` sein.

## Instanzmethoden

Erbt Methoden von seinem übergeordneten Element, [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
