---
title: "XRMediaBinding: createCylinderLayer()-Methode"
short-title: createCylinderLayer()
slug: Web/API/XRMediaBinding/createCylinderLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createCylinderLayer()`**-Methode der [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding)-Schnittstelle gibt ein [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Objekt zurück, das eine Schicht darstellt, die in der virtuellen Umgebung einen gekrümmten rechteckigen Raum einnimmt.

## Syntax

```js-nolint
createCylinderLayer(video, options)
```

### Parameter

- `video`
  - : Ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), das angezeigt werden soll.
- `options`
  - : Ein Objekt zur Konfiguration des [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer). Das Objekt kann die folgenden Eigenschaften haben, wobei `space` erforderlich ist:
    - `aspectRatio` {{optional_inline}}
      - : Eine Zahl, die das Verhältnis des sichtbaren Zylinderabschnitts angibt. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders geteilt durch seine Höhe. Die Breite wird berechnet, indem der `radius` mit dem `centralAngle` multipliziert wird.
    - `centralAngle` {{optional_inline}}
      - : Eine Zahl, die den Winkel in Radianten des sichtbaren Zylinderabschnitts angibt. Standardwert: `0.78539` (π / 4).
    - `invertStereo` {{optional_inline}}
      - : Ein Boolescher Wert, der angibt, ob die natürliche Position jeder Ansicht im Video invertiert werden soll. Standardmäßig `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout des Videos angibt. Mögliche Werte:
        - `default`
          - : Die Schicht umfasst alle Ansichten der Sitzung.
        - `mono`
          - : Ein einziges [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen und beiden Augen präsentiert.
        - `stereo`
          - : Der Benutzeragent entscheidet, wie er das [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eines oder zwei) zuweist und das Layout (oben/unten oder links/rechts) festlegt. Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
        - `stereo-left-right`
          - : Ein einziges [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist darauf ausgelegt, Zeichenaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder -Bilder).
        - `stereo-top-bottom`
          - : Ein einziges [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist darauf ausgelegt, Zeichenaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder -Bilder).
            Der Standardwert ist `mono`.
    - `radius` {{optional_inline}}
      - : Eine Zahl, die den Radius des Zylinders angibt. Standardwert `2.0`.
    - `space` **Erforderlich**
      - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die räumliche Beziehung der Schicht zur physischen Umgebung des Benutzers definiert.
    - `transform` {{optional_inline}}
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das den Versatz und die Ausrichtung relativ zu `space` definiert.

### Rückgabewert

Ein [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Objekt.

## Beispiele

### Erstellen eines `XRCylinderLayer` zur Anzeige eines Videos

Erstellen Sie ein [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding) und verwenden Sie ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), das in `createCylinderLayer()` übergeben wird. Konfigurieren Sie die Quad-Schicht mithilfe der oben aufgeführten Optionen und präsentieren Sie die Schicht dem XR-Gerät, indem Sie sie dem `layers`-Renderzustand in [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzufügen.

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

- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
