---
title: "XRMediaBinding: XRMediaBinding() Konstruktor"
short-title: XRMediaBinding()
slug: Web/API/XRMediaBinding/XRMediaBinding
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Der **`XRMediaBinding()`** Konstruktor erstellt und gibt ein neues {{domxref("XRMediaBinding")}} Objekt zurück.

## Syntax

```js-nolint
new XRMediaBinding(session)
```

### Parameter

- `session`
  - : Ein {{domxref("XRSession")}} Objekt, das die WebXR-Sitzung angibt, für die die Medienbindung erstellt werden soll.

### Rückgabewert

Ein neu erstelltes {{domxref("XRMediaBinding")}}.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn die neue `XRMediaBinding` aufgrund eines der möglichen Zustandsfehler nicht erstellt werden konnte:

    - Die {{domxref("XRSession")}}, die durch `session` angegeben ist, wurde bereits gestoppt.
    - Die angegebene `session` ist nicht immersiv.

## Beispiele

### Erstellen einer neuen `XRMediaBinding`

Im folgenden Beispiel wird eine neue Medienbindung für eine Sitzung erstellt, um eine {{domxref("XRQuadLayer")}} zum Anzeigen einer Videolage in der Szene zu erstellen.

```js
const xrMediaBinding = new XRMediaBinding(xrSession);

const video = document.createElement("video");
video.src = "just-fascination.mp4";
const layer = xrMediaBinding.createQuadLayer(video);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRWebGLBinding")}}
