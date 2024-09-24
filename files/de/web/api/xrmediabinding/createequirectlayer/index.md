---
title: "XRMediaBinding: Methode createEquirectLayer()"
short-title: createEquirectLayer()
slug: Web/API/XRMediaBinding/createEquirectLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createEquirectLayer()`**-Methode des {{domxref("XRMediaBinding")}}-Interfaces gibt ein {{domxref("XREquirectLayer")}}-Objekt zurück, das eine Ebene ist, die equirektangulär kodierte Daten auf die Innenseite einer Kugel abbildet.

## Syntax

```js-nolint
createEquirectLayer(video, options)
```

### Parameter

- `video`
  - : Ein {{domxref("HTMLVideoElement")}} zur Anzeige.
- `options`
  - : Ein Objekt zur Konfiguration der {{domxref("XREquirectLayer")}}. Das Objekt kann die folgenden Eigenschaften aufweisen und `space` ist erforderlich:
    - `centralHorizontalAngle` {{optional_inline}}
      - : Eine Zahl, die den zentralen horizontalen Winkel in Radianten für die Kugel angibt. Standardwert: `6.28318` (2π).
    - `invertStereo` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die natürliche Position jeder Ansicht im Video umgekehrt werden soll. Standardmäßig `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout des Videos angibt. Mögliche Werte:
        - `default`
          - : Die Ebene berücksichtigt alle Ansichten der Sitzung.
        - `mono`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen und beiden Augen präsentiert.
        - `stereo`
          - : Der Benutzeragent entscheidet, wie er das {{domxref("XRSubImage")}} (eines oder zwei) und das Layout (oben/unten oder links/rechts) zuteilt. Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
        - `stereo-left-right`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist darauf ausgelegt, Zeichenaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (z. B. Stereo-Videos oder -Bilder).
        - `stereo-top-bottom`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist darauf ausgelegt, Zeichenaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (z. B. Stereo-Videos oder -Bilder).
            Der Standardwert ist `mono`.
    - `lowerVerticalAngle` {{optional_inline}}
      - : Eine Zahl, die den unteren vertikalen Winkel in Radianten für die Kugel angibt. Standardwert: `-1.570795` (-π/2).
    - `radius` {{optional_inline}}
      - : Eine Zahl, die den Radius der Kugel angibt. Standardwert `0.0`.
    - `space` **Erforderlich**
      - : Ein {{domxref("XRSpace")}}-Objekt, das die räumliche Beziehung der Ebene mit der physikalischen Umgebung des Benutzers definiert.
    - `transform` {{optional_inline}}
      - : Ein {{domxref("XRRigidTransform")}}-Objekt, das den Versatz und die Orientierung relativ zu `space` definiert.
    - `upperVerticalAngle` {{optional_inline}}
      - : Eine Zahl, die den oberen vertikalen Winkel in Radianten für die Kugel angibt. Standardwert: `1.570795` (π/2).

### Rückgabewert

Ein {{domxref("XREquirectLayer")}}-Objekt.

## Beispiele

### Erstellen eines `XREquirectLayer`, um ein Video anzuzeigen

Erstellen Sie ein {{domxref("XRMediaBinding")}} und verwenden Sie ein {{domxref("HTMLVideoElement")}}, das in `createEquirectLayer()` übergeben wird. Konfigurieren Sie die Quadrat-Ebene mithilfe der oben aufgeführten Optionen und präsentieren Sie die Ebene dem XR-Gerät, indem Sie sie dem `layers`-Renderzustand in {{domxref("XRSession.updateRenderState()")}} hinzufügen.

```js
function onXRSessionStarted(xrSession) {
  const xrMediaBinding = new XRMediaBinding(xrSession);
  const video = document.createElement("video");
  video.src = "just-fascination.mp4";

  const videoLayer = xrMediaBinding.createEquirectLayer(video, {
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

- {{domxref("XREquirectLayer")}}
