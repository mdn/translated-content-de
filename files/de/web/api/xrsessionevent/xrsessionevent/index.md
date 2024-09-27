---
title: "XRSessionEvent: XRSessionEvent()-Konstruktor"
short-title: XRSessionEvent()
slug: Web/API/XRSessionEvent/XRSessionEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der Konstruktor der WebXR Device API
**`XRSessionEvent()`** erstellt und gibt ein neues
[`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent)-Objekt zurück. Diese Objekte repräsentieren Ereignisse, die
Zustandsänderungen in einer [`XRSession`](/de/docs/Web/API/XRSession) ankündigen, welche eine erweiterte oder virtuelle
Realitätssitzung darstellt.

## Syntax

```js-nolint
new XRSessionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es auf `end` oder `visibilitychange`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `session`
      - : Die [`XRSession`](/de/docs/Web/API/XRSession), an die das Ereignis übermittelt werden soll.

### Rückgabewert

Ein neues [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent)-Objekt, das einen Objekttyp repräsentiert und wie im `options`-Parameter beschrieben konfiguriert ist.

## Beispiele

Siehe [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
