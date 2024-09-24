---
title: "XRMediaBinding: Methode createQuadLayer()"
short-title: createQuadLayer()
slug: Web/API/XRMediaBinding/createQuadLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createQuadLayer()`** Methode der {{domxref("XRMediaBinding")}} Schnittstelle gibt ein {{domxref("XRQuadLayer")}} Objekt zurück, das eine Schicht darstellt, die einen flachen rechteckigen Raum in der virtuellen Umgebung einnimmt.

## Syntax

```js-nolint
createQuadLayer(video, options)
```

### Parameter

- `video`
  - : Ein {{domxref("HTMLVideoElement")}}, das angezeigt werden soll.
- `options`
  - : Ein Objekt zur Konfiguration des {{domxref("XRQuadLayer")}}. Das Objekt kann die folgenden Eigenschaften haben, wobei `space` erforderlich ist:
    - `height` {{optional_inline}}
      - : Eine Zahl, die die Höhe der Schicht angibt.
    - `invertStereo` {{optional_inline}}
      - : Ein Boolean, der angibt, ob die natürliche Position jedes Bildes im Video invertiert werden soll. Standardmäßig `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout des Videos angibt. Mögliche Werte:
        - `default`
          - : Die Schicht berücksichtigt alle Ansichten der Sitzung.
        - `mono`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen und beiden Augen präsentiert.
        - `stereo`
          - : Der User Agent entscheidet, wie er das {{domxref("XRSubImage")}} (eines oder zwei) zuweist und das Layout (oben/unten oder links/rechts) gestaltet. Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
        - `stereo-left-right`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist darauf ausgelegt, Zeichnungsaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (z.B. Stereo-Videos oder -Bilder).
        - `stereo-top-bottom`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist darauf ausgelegt, Zeichnungsaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (z.B. Stereo-Videos oder -Bilder).
            Der Standardwert ist `mono`.
    - `space` **Erforderlich**
      - : Ein {{domxref("XRSpace")}} Objekt, das die räumliche Beziehung der Schicht zur physischen Umgebung des Benutzers definiert.
    - `transform` {{optional_inline}}
      - : Ein {{domxref("XRRigidTransform")}} Objekt, das den Versatz und die Orientierung relativ zu `space` definiert.
    - `width` {{optional_inline}}
      - : Eine Zahl, die die Breite der Schicht angibt.

### Rückgabewert

Ein {{domxref("XRQuadLayer")}} Objekt.

## Beispiele

### Erstellen eines `XRQuadLayer` zur Anzeige eines Videos

Erstellen Sie ein {{domxref("XRMediaBinding")}} und verwenden Sie ein {{domxref("HTMLVideoElement")}}, das in `createQuadLayer()` übergeben wird. Konfigurieren Sie die Quad-Schicht mit den oben aufgeführten Optionen und präsentieren Sie die Schicht dem XR-Gerät, indem Sie sie der Renderzustand-Layer in {{domxref("XRSession.updateRenderState()")}} hinzufügen.

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

- {{domxref("XRQuadLayer")}}
