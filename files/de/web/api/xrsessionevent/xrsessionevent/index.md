---
title: "XRSessionEvent: XRSessionEvent() Konstruktor"
short-title: XRSessionEvent()
slug: Web/API/XRSessionEvent/XRSessionEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der WebXR Device API
**`XRSessionEvent()`** Konstruktor erstellt und gibt ein neues
{{domxref("XRSessionEvent")}} Objekt zurück. Diese Objekte repräsentieren Ereignisse, die
Zustandsänderungen in einer {{domxref("XRSession")}} ankündigen, die eine erweiterte oder virtuelle
Realitätssitzung darstellt.

## Syntax

```js-nolint
new XRSessionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß- und Kleinschreibung beachtend und Browser setzen es auf `end` oder `visibilitychange`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `session`
      - : Die {{domxref("XRSession")}}, an die das Ereignis gesendet werden soll.

### Rückgabewert

Ein neues {{domxref("XRSessionEvent")}} Objekt, das ein Objekt des
angegebenen Typs darstellt und gemäß dem `options` Parameter konfiguriert ist.

## Beispiele

Siehe [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
