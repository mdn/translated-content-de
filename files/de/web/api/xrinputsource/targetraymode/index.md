---
title: "XRInputSource: Eigenschaft targetRayMode"
short-title: targetRayMode
slug: Web/API/XRInputSource/targetRayMode
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`targetRayMode`** gibt an, auf welche Weise der Zielstrahl für die Eingabequelle erzeugt und dem Benutzer präsentiert werden soll.

Typischerweise wird ein Zielstrahl von der Quelle des Zielsystems entlang des Zielstrahls in die Richtung gezeichnet, in die der Benutzer schaut oder zeigt. Die Gestaltung des Strahls bleibt im Allgemeinen Ihnen überlassen, ebenso die Methode zur Kennzeichnung des Endpunkts des Strahls. Der angezielte Punkt oder das Objekt kann durch Zeichnen einer Form oder Hervorheben der anvisierten Oberfläche oder des Objekts angezeigt werden.

Ein Zielstrahl, der von einem Handcontroller ausgesendet wird:

![Ein Screenshot, der einen von einem Handcontroller ausgesendeten Zielstrahl zeigt](https://mdn.github.io/shared-assets/images/examples/hand-controller-target-ray.gif)

Der Zielstrahl kann alles von einer einfachen Linie (idealerweise über die Entfernung verblassend) bis hin zu einem animierten Effekt wie dem im obigen Screenshot gezeigten Science-Fiction-"Phaser"-Stil sein.

## Wert

Ein String, der angibt, welche Methode zur Erzeugung und Präsentation des Zielstrahls für den Benutzer verwendet werden soll. Die möglichen Werte sind:

- `gaze`
  - : Der Benutzer verwendet ein Blickverfolgungssystem (oder **Blickeingabe**), das die Richtung erkennt, in die der Benutzer schaut. Der Zielstrahl wird von den Augen des Betrachters ausgehend gezeichnet und folgt der Blickrichtung.
- `screen`
  - : Die Richtung des Zielstrahls wird durch Tippen auf einen Touchscreen, eine Maus oder ein anderes taktiles Eingabegerät angezeigt.
- `tracked-pointer`
  - : Die Zielerfassung erfolgt mit einem Handgerät oder einem Handverfolgungssystem, das der Benutzer in die Richtung des Ziels zeigt. Der Zielstrahl erstreckt sich von der Hand (oder dem Objekt in der Hand) in die anvisierte Richtung. Die Richtung wird basierend auf plattformspezifischen Regeln bestimmt, obwohl, falls solche Regeln nicht existieren, die Richtung durch Annahme gewählt wird, dass der Benutzer seinen Zeigefinger gerade aus seiner Hand heraus zeigt.
- `transient-pointer`
  - : Die Eingabequelle wurde als Teil einer Betriebssystem-Interaktionsabsicht und nicht durch ein spezifisches Hardwareteil erzeugt. Einige Beispiele schließen Benutzerintentionen ein, die auf Informationen basieren, die zu sensibel sind, um direkt offengelegt zu werden, wie z.B. Blick, synthetisierte Eingaben von Web-Treibern oder Eingaben, die von unterstützender Technologie erzeugt wurden.

## Nutzungshinweise

Die [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der Eingabequelle gibt die Position und Orientierung des Zielstrahls an und kann verwendet werden, um zu bestimmen, wo der Strahl gerendert werden soll.

## Beispiele

Dieses Codefragment zeigt einen Teil einer Funktion, die einmal pro Frame aufgerufen werden soll. Es sucht nach Eingaben, die eine nicht-`null`-Wert für [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) haben. Eingaben, die einen Wert für diese Eigenschaft haben, repräsentieren Eingaben, die einen Zielstrahl vom Benutzer aus in die Ferne projizieren.

Für jede solche Eingabe sucht dieses Beispiel nach Eingaben, deren `targetRayMode` `tracked-pointer` ist, was anzeigt, dass die Eingabe tatsächlich ein Zielgerät anstelle eines Blickgerätes, Bildschirmpunktes oder Mausklicks darstellen soll. Für verfolgte Zeiger wird die Funktion `myRenderTargetRayAsBeam()` aufgerufen, um einen Strahl vom virtuellen Standort des Eingabereglers in die Richtung zu rendern, in die er zeigt.

Der Code sollte weiterhin Aufgaben wie das Zeichnen von Controllern oder von Objekten, die die Positionen der Benutzerhände im virtuellen Raum repräsentieren, sowie alle anderen eingabebezogenen Aufgaben ausführen.

```js
function updateInputSources(session, frame, refSpace) {
  for (const source of session.getInputSources()) {
    const targetRayPose = frame.getPose(inputSource.targetRaySpace, refSpace);

    if (targetRayPose) {
      if (source.targetRayMode === "tracked-pointer") {
        myRenderTargetRayAsBeam(targetRayPose);
      }
    }

    // …
  }
}
```

Siehe den Artikel [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs) für weitere Details und ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Verwendung von Gamepads in WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Gamepads)
