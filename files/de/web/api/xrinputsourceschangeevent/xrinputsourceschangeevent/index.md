---
title: "XRInputSourcesChangeEvent: XRInputSourcesChangeEvent()-Konstruktor"
short-title: XRInputSourcesChangeEvent()
slug: Web/API/XRInputSourcesChangeEvent/XRInputSourcesChangeEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRInputSourcesChangeEvent()`**
Konstruktor erstellt und gibt ein neues [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent)-Objekt zurück,
das eine Aktualisierung der Liste der verfügbaren [WebXR](/de/docs/Web/API/WebXR_Device_API) Eingabegeräte darstellt. In der Regel werden Sie diesen Konstruktor nicht selbst aufrufen, da diese Ereignisse vom WebXR-System erstellt und gesendet werden.

## Syntax

```js-nolint
new XRInputSourcesChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Dieser ist case-sensitiv und Browser setzen ihn immer auf `inputsourceschange`.
- `options`
  - : Ein Objekt, das _neben den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `added`
      - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, von denen jedes ein neu verfügbares Eingabegerät darstellt.
    - `removed`
      - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die nicht mehr verfügbaren Eingabegeräte darstellen.
    - `session`
      - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

### Rückgabewert

Ein neues [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent)-Objekt, das basierend auf
den angegebenen Eingabeparametern konfiguriert wurde.

## Beispiele

Der folgende Codeausschnitt erstellt ein neues `XRInputSourcesChangeEvent`
Objekt, das angibt, dass eine einzige neue Eingabequelle, beschrieben durch ein
[`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt namens `newInputSource`, zum System hinzugefügt wurde.

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
