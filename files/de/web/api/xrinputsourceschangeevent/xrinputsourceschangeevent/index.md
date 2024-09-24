---
title: "XRInputSourcesChangeEvent: XRInputSourcesChangeEvent()-Konstruktor"
short-title: XRInputSourcesChangeEvent()
slug: Web/API/XRInputSourcesChangeEvent/XRInputSourcesChangeEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRInputSourcesChangeEvent()`**-Konstruktor erstellt und gibt ein neues {{domxref("XRInputSourcesChangeEvent")}}-Objekt zurück, das eine Aktualisierung der Liste der verfügbaren [WebXR](/de/docs/Web/API/WebXR_Device_API)-Eingabegeräte darstellt. Üblicherweise werden Sie diesen Konstruktor nicht selbst aufrufen, da diese Ereignisse vom WebXR-System erstellt und an Sie gesendet werden.

## Syntax

```js-nolint
new XRInputSourcesChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist groß- und kleinschreibungssensitiv und wird von Browsern immer auf `inputsourceschange` gesetzt.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `added`
      - : Ein Array mit null oder mehr {{domxref("XRInputSource")}}-Objekten, wobei jedes ein Eingabegerät darstellt, das neu verfügbar ist.
    - `removed`
      - : Ein Array mit null oder mehr {{domxref("XRInputSource")}}-Objekten, die die Eingabegeräte darstellen, die nicht mehr verfügbar sind.
    - `session`
      - : Die {{domxref("XRSession")}}, auf die sich das Ereignis bezieht.

### Rückgabewert

Ein neues {{domxref("XRInputSourcesChangeEvent")}}-Objekt, das basierend auf den bereitgestellten Eingabeparametern konfiguriert ist.

## Beispiele

Der folgende Code-Schnipsel erstellt ein neues `XRInputSourcesChangeEvent`-Objekt, das anzeigt, dass eine einzelne neue Eingabequelle, beschrieben durch ein {{domxref("XRInputSource")}}-Objekt namens `newInputSource`, dem System hinzugefügt wurde.

```js
let iscEvent = new XRInputSourcesChangeEvent("inputsourceschange", {
  session: xrSession,
  added: [newInputSource],
  removed: [],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
