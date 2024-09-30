---
title: "XRMediaBinding: XRMediaBinding() Konstruktor"
short-title: XRMediaBinding()
slug: Web/API/XRMediaBinding/XRMediaBinding
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Der **`XRMediaBinding()`** Konstruktor erzeugt und gibt ein neues [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding) Objekt zurück.

## Syntax

```js-nolint
new XRMediaBinding(session)
```

### Parameter

- `session`
  - : Ein [`XRSession`](/de/docs/Web/API/XRSession) Objekt, das die WebXR-Sitzung angibt, für die die Medienbindung erstellt werden soll.

### Rückgabewert

Ein neu erstelltes [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das neue `XRMediaBinding` aufgrund eines der mehreren möglichen Zustandsfehler nicht erstellt werden konnte:

    - Die durch `session` angegebene [`XRSession`](/de/docs/Web/API/XRSession) wurde bereits gestoppt.
    - Die angegebene `session` ist nicht immersiv.

## Beispiele

### Erstellen eines neuen `XRMediaBinding`

Das folgende Beispiel erstellt eine neue Medienbindung für eine Sitzung, um eine [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer) zu erzeugen und eine Videolayer in der Szene anzuzeigen.

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

- [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)
