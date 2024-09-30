---
title: "XRMediaBinding: createQuadLayer()-Methode"
short-title: createQuadLayer()
slug: Web/API/XRMediaBinding/createQuadLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createQuadLayer()`**-Methode der [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding)-Schnittstelle gibt ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Objekt zurück, das eine Schicht ist, die einen flachen rechteckigen Raum in der virtuellen Umgebung einnimmt.

## Syntax

```js-nolint
createQuadLayer(video, options)
```

### Parameter

- `video`
  - : Ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), das angezeigt werden soll.
- `options`
  - : Ein Objekt zur Konfiguration der [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer). Das Objekt kann die folgenden Eigenschaften haben, wobei `space` erforderlich ist:
    - `height` {{optional_inline}}
      - : Eine Zahl, die die Höhe der Schicht angibt.
    - `invertStereo` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die natürliche Position jeder Ansicht im Video invertiert werden soll. Standardmäßig `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout des Videos angibt. Mögliche Werte:
        - `default`
          - : Die Schicht berücksichtigt alle Ansichten der Sitzung.
        - `mono`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen und beiden Augen präsentiert.
        - `stereo`
          - : Der User-Agent entscheidet, wie er das [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eines oder zwei) zuweist und das Layout (oben/unten oder links/rechts) gestaltet. Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
        - `stereo-left-right`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist darauf ausgelegt, Zeichnungsaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder Bilder).
        - `stereo-top-bottom`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist darauf ausgelegt, Zeichnungsaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder Bilder). Der Standardwert ist `mono`.
    - `space` **Erforderlich**
      - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die räumliche Beziehung der Schicht zur physischen Umgebung des Benutzers definiert.
    - `transform` {{optional_inline}}
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das den Versatz und die Orientierung relativ zu `space` definiert.
    - `width` {{optional_inline}}
      - : Eine Zahl, die die Breite der Schicht angibt.

### Rückgabewert

Ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Objekt.

## Beispiele

### Erstellen eines `XRQuadLayer`, um ein Video anzuzeigen

Erstellen Sie ein [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding) und verwenden Sie ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), das an `createQuadLayer()` übergeben wird. Konfigurieren Sie die Quad-Schicht mit den oben aufgelisteten Optionen und präsentieren Sie die Schicht auf dem XR-Gerät, indem Sie sie dem `layers`-Renderzustand in [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzufügen.

```js
function onXRSessionStarted(xrSession) {
  const xrMediaBinding = new XRMediaBinding(xrSession);
  const video = document.createElement("video");
  video.src = "just-fascination.mp4";

  const videoLayer = xrMediaBinding.createQuadLayer(video, {
    space: xrReferenceSpace,
  });

  xrSession.updateRenderState({
    layers: [videoLayer],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
