---
title: "XRInputSourcesChangeEvent: XRInputSourcesChangeEvent()-Konstruktor"
short-title: XRInputSourcesChangeEvent()
slug: Web/API/XRInputSourcesChangeEvent/XRInputSourcesChangeEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRInputSourcesChangeEvent()`**-
Konstruktor erstellt und gibt ein neues [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent)-Objekt zurück, das eine Aktualisierung der Liste der verfügbaren [WebXR](/de/docs/Web/API/WebXR_Device_API)-Eingabegeräte darstellt. Sie werden diesen Konstruktor normalerweise nicht selbst aufrufen, da diese Ereignisse vom WebXR-System erstellt und an Sie gesendet werden.

## Syntax

```js-nolint
new XRInputSourcesChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es immer auf `inputsourceschange`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `added`
      - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die jeweils ein neu verfügbares Eingabegerät darstellen.
    - `removed`
      - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die nicht mehr verfügbaren Eingabegeräte darstellen.
    - `session`
      - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

### Rückgabewert

Ein neues [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent)-Objekt, das basierend auf den bereitgestellten Eingabeparametern konfiguriert wird.

## Beispiele

Der folgende Codeausschnitt erstellt ein neues `XRInputSourcesChangeEvent`-
Objekt, das anzeigt, dass eine einzelne neue Eingabequelle, beschrieben durch ein
[`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt namens `newInputSource`, dem System hinzugefügt wurde.

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
