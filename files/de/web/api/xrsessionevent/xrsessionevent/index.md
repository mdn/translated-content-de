---
title: "XRSessionEvent: XRSessionEvent() Konstruktor"
short-title: XRSessionEvent()
slug: Web/API/XRSessionEvent/XRSessionEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRSessionEvent()`** Konstruktor der WebXR Device API erstellt und gibt ein neues [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent)-Objekt zurück. Diese Objekte repräsentieren Ereignisse, die Zustandsänderungen in einer [`XRSession`](/de/docs/Web/API/XRSession) ankündigen, die eine Augmented-Reality- oder Virtual-Reality-Sitzung darstellt.

## Syntax

```js-nolint
new XRSessionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Dieser ist groß- und kleinschreibungssensitiv und wird von Browsern auf `end` oder `visibilitychange` gesetzt.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `session`
      - : Die [`XRSession`](/de/docs/Web/API/XRSession), an die das Ereignis geliefert werden soll.

### Rückgabewert

Ein neues [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent)-Objekt, das ein Objekt des angegebenen Typs darstellt und gemäß den durch den `options`-Parameter beschriebenen Konfigurationen erstellt wird.

## Beispiele

Siehe [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
