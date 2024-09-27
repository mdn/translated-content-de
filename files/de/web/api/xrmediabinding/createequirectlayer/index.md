---
title: "XRMediaBinding: Methode createEquirectLayer()"
short-title: createEquirectLayer()
slug: Web/API/XRMediaBinding/createEquirectLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createEquirectLayer()`**-Methode der [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding)-Schnittstelle gibt ein [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Objekt zurück, das eine Ebene darstellt, die equirektangular kodierte Daten auf die Innenseite einer Kugel abbildet.

## Syntax

```js-nolint
createEquirectLayer(video, options)
```

### Parameter

- `video`
  - : Ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), das angezeigt werden soll.
- `options`
  - : Ein Objekt zur Konfiguration des [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer). Das Objekt kann die folgenden Eigenschaften haben, und `space` ist erforderlich:
    - `centralHorizontalAngle` {{optional_inline}}
      - : Eine Zahl, die den zentralen horizontalen Winkel in Radianten für die Kugel angibt. Standardwert: `6.28318` (2π).
    - `invertStereo` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die natürliche Position jeder Ansicht im Video invertiert werden soll. Standardmäßig `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout des Videos angibt. Mögliche Werte:
        - `default`
          - : Die Ebene umfasst alle Ansichten der Sitzung.
        - `mono`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen und beiden Augen präsentiert.
        - `stereo`
          - : Der User-Agent entscheidet, wie es das [`XRSubImage`](/de/docs/Web/API/XRSubImage) zuweist (eins oder zwei) und das Layout (oben/unten oder links/rechts). Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
        - `stereo-left-right`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout minimiert die Anzahl der Zeichnungsaufrufe für Inhalte, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder -Bilder).
        - `stereo-top-bottom`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout minimiert die Anzahl der Zeichnungsaufrufe für Inhalte, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder -Bilder).
            Der Standardwert ist `mono`.
    - `lowerVerticalAngle` {{optional_inline}}
      - : Eine Zahl, die den unteren vertikalen Winkel in Radianten für die Kugel angibt. Standardwert: `-1.570795` (-π/2).
    - `radius` {{optional_inline}}
      - : Eine Zahl, die den Radius der Kugel angibt. Standardwert `0.0`.
    - `space` **Erforderlich**
      - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers definiert.
    - `transform` {{optional_inline}}
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das den Versatz und die Orientierung relativ zu `space` definiert.
    - `upperVerticalAngle` {{optional_inline}}
      - : Eine Zahl, die den oberen vertikalen Winkel in Radianten für die Kugel angibt. Standardwert: `1.570795` (π/2).

### Rückgabewert

Ein [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Objekt.

## Beispiele

### Erstellen eines `XREquirectLayer`, um ein Video anzuzeigen

Erstellen Sie ein [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding) und verwenden Sie ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), das in `createEquirectLayer()` übergeben wird. Konfigurieren Sie die Quad-Ebene mit den oben aufgeführten Optionen und präsentieren Sie die Ebene dem XR-Gerät, indem Sie sie dem `layers` Renderzustand in [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzufügen.

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

- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
