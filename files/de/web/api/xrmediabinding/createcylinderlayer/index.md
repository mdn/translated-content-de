---
title: "XRMediaBinding: createCylinderLayer()-Methode"
short-title: createCylinderLayer()
slug: Web/API/XRMediaBinding/createCylinderLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createCylinderLayer()`**-Methode der {{domxref("XRMediaBinding")}}-Schnittstelle gibt ein {{domxref("XRCylinderLayer")}}-Objekt zurück, das eine Schicht darstellt, die einen gekrümmten rechteckigen Raum in der virtuellen Umgebung einnimmt.

## Syntax

```js-nolint
createCylinderLayer(video, options)
```

### Parameter

- `video`
  - : Ein {{domxref("HTMLVideoElement")}} zur Anzeige.
- `options`
  - : Ein Objekt zur Konfiguration des {{domxref("XRCylinderLayer")}}. Das Objekt kann die folgenden Eigenschaften haben, wobei `space` erforderlich ist:
    - `aspectRatio` {{optional_inline}}
      - : Eine Zahl, die das Verhältnis des sichtbaren Zylinderabschnitts angibt. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders geteilt durch seine Höhe. Die Breite wird berechnet, indem der `radius` mit dem `centralAngle` multipliziert wird.
    - `centralAngle` {{optional_inline}}
      - : Eine Zahl, die den Winkel in Radianten des sichtbaren Abschnitts des Zylinders angibt. Standardwert: `0.78539` (π / 4).
    - `invertStereo` {{optional_inline}}
      - : Ein boolean, der angibt, ob die natürliche Position jeder Ansicht im Video umgekehrt werden soll. Standardmäßig `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout des Videos angibt. Mögliche Werte:
        - `default`
          - : Die Schicht berücksichtigt alle Ansichten der Sitzung.
        - `mono`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird sowohl für das linke als auch für das rechte Auge bereitgestellt.
        - `stereo`
          - : Der Benutzeragent entscheidet, wie er das {{domxref("XRSubImage")}} (eins oder zwei) und das Layout (oben/unten oder links/rechts) zuweist. Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
        - `stereo-left-right`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist darauf ausgelegt, Zeichnungsaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (z. B. Stereo-Videos oder -Bilder).
        - `stereo-top-bottom`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist darauf ausgelegt, Zeichnungsaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (z. B. Stereo-Videos oder -Bilder).
            Der Standardwert ist `mono`.
    - `radius` {{optional_inline}}
      - : Eine Zahl, die den Radius des Zylinders angibt. Standardwert `2.0`.
    - `space` **Erforderlich**
      - : Ein {{domxref("XRSpace")}}-Objekt, das die räumliche Beziehung der Schicht zur physischen Umgebung des Benutzers definiert.
    - `transform` {{optional_inline}}
      - : Ein {{domxref("XRRigidTransform")}}-Objekt, das den Versatz und die Ausrichtung relativ zu `space` definiert.

### Rückgabewert

Ein {{domxref("XRCylinderLayer")}}-Objekt.

## Beispiele

### Erstellen eines `XRCylinderLayer` zur Anzeige eines Videos

Erstellen Sie eine {{domxref("XRMediaBinding")}} und verwenden Sie ein {{domxref("HTMLVideoElement")}}, das in `createCylinderLayer()` übergeben wird. Konfigurieren Sie die Quadebene mit den oben aufgeführten Optionen und präsentieren Sie die Ebene dem XR-Gerät, indem Sie sie dem `layers`-Renderstatus in {{domxref("XRSession.updateRenderState()")}} hinzufügen.

```js
function onXRSessionStarted(xrSession) {
  const xrMediaBinding = new XRMediaBinding(xrSession);
  const video = document.createElement("video");
  video.src = "just-fascination.mp4";

  const videoLayer = xrMediaBinding.createCylinderLayer(video, {
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

- {{domxref("XRCylinderLayer")}}
