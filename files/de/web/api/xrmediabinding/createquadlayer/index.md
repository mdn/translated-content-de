---
title: "XRMediaBinding: createQuadLayer() Methode"
short-title: createQuadLayer()
slug: Web/API/XRMediaBinding/createQuadLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createQuadLayer()`**-Methode der [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding)-Schnittstelle gibt ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Objekt zurück, welches eine Ebene darstellt, die in der virtuellen Umgebung einen flachen rechteckigen Raum einnimmt.

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
      - : Eine Zahl, die die Höhe der Ebene angibt.
    - `invertStereo` {{optional_inline}}
      - : Ein Boolean, der angibt, ob die natürliche Position jeder Ansicht im Video invertiert werden soll. Standardmäßig `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout des Videos angibt. Mögliche Werte:
        - `default`
          - : Die Ebene nimmt alle Ansichten der Sitzung auf.
        - `mono`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugeteilt und für beide Augen dargestellt.
        - `stereo`
          - : Der User-Agent entscheidet, wie es das [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eines oder zwei) zuteilt und das Layout (oben/unten oder links/rechts). Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
        - `stereo-left-right`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugeteilt. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist entworfen, um Zeichenaufrufe für Inhalt, der bereits in Stereo ist (zum Beispiel Stereo-Videos oder -Bilder), zu minimieren.
        - `stereo-top-bottom`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugeteilt. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist entworfen, um Zeichenaufrufe für Inhalt, der bereits in Stereo ist (zum Beispiel Stereo-Videos oder -Bilder), zu minimieren. Der Standardwert ist `mono`.
    - `space` **Erforderlich**
      - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers definiert.
    - `transform` {{optional_inline}}
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das den Versatz und die Orientierung relativ zu `space` definiert.
    - `width` {{optional_inline}}
      - : Eine Zahl, die die Breite der Ebene angibt.

### Rückgabewert

Ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Objekt.

## Beispiele

### Erstellen eines `XRQuadLayer` zum Anzeigen eines Videos

Erstellen Sie ein [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding) und verwenden Sie ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), das an `createQuadLayer()` übergeben wird. Konfigurieren Sie die Quad-Ebene mit den oben aufgeführten Optionen und präsentieren Sie die Ebene dem XR-Gerät, indem Sie sie dem `layers`-Renderzustand in [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzufügen.

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
