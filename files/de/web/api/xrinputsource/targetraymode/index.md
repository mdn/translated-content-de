---
title: "XRInputSource: targetRayMode-Eigenschaft"
short-title: targetRayMode
slug: Web/API/XRInputSource/targetRayMode
l10n:
  sourceCommit: 46a755ea71206e4512e3639596e6f68f4e71f041
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)
Eigenschaft **`targetRayMode`** gibt die Methode an, mit der der Zielstrahl für die
Eingabequelle erzeugt und dem Benutzer präsentiert werden soll.

Typischerweise wird ein Zielstrahl von der Quelle des Zielsystems entlang des Zielstrahls in die Richtung gezeichnet, in die der Benutzer schaut oder zeigt. Der Stil des Strahls liegt normalerweise bei Ihnen, ebenso wie die Methode zur Anzeige des Endpunkts des Strahls. Der anvisierte Punkt oder das Objekt könnte durch das Zeichnen einer Form oder das Hervorheben der anvisierten Oberfläche oder des Objekts angezeigt werden.

Ein Zielstrahl, der von einem Handcontroller ausgesendet wird:

![Ein Screenshot, der einen Zielstrahl zeigt, der von einem Handcontroller ausgesendet wird](https://mdn.github.io/shared-assets/images/examples/hand-controller-target-ray.gif)

Der Zielstrahl kann alles sein, von einer einfachen Linie (idealerweise im Verlauf der Distanz verblassend) bis hin zu einem animierten Effekt wie dem im obigen Screenshot gezeigten Science-Fiction-"Phaser"-Stil.

## Wert

Ein String, der angibt, welche Methode verwendet werden soll, um den Zielstrahl für den Benutzer zu erzeugen und zu präsentieren. Die möglichen Werte sind:

- `gaze`
  - : Der Benutzer verwendet ein Blickverfolgungssystem (oder **Blick-Eingabe**), das die Richtung erkennt, in die der Benutzer schaut. Der Zielstrahl wird von den Augen des Betrachters ausgehen und der Blickrichtung folgen.
- `screen`
  - : Die Richtung des Zielstrahls wird durch ein Tippen auf einen Touchscreen, eine Maus oder ein anderes taktiles Eingabegerät angegeben.
- `tracked-pointer`
  - : Das Zielen erfolgt mit einem Handgerät oder einem Handverfolgungssystem, mit dem der Benutzer in die Richtung des Ziels zeigt. Der Zielstrahl erstreckt sich von der Hand (oder dem Objekt in der Hand) in die anvisierte Richtung. Die Richtung wird anhand plattformspezifischer Regeln bestimmt, wobei, falls solche Regeln fehlen, davon ausgegangen wird, dass der Benutzer seinen Zeigefinger gerade aus seiner Hand heraus zeigt.
- `transient-pointer`
  - : Die Eingabequelle wurde als Teil einer Betriebssystem-Interaktionsabsicht generiert und nicht von einem bestimmten Hardwarestück. Einige Beispiele umfassen Benutzerabsichten, die auf Informationen beruhen, die zu sensibel sind, um direkt offengelegt zu werden, wie etwa Blick, synthetisierte Eingaben von Webtreibern oder Eingaben, die von unterstützenden Technologien generiert wurden.

## Nutzungshinweise

Der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der Eingabequelle gibt die Position und Ausrichtung des Zielstrahls an und kann verwendet werden, um zu bestimmen, wo der Strahl gerendert werden soll.

## Beispiele

Dieses Codefragment zeigt einen Teil einer Funktion, die einmal pro Frame aufgerufen werden soll. Es sucht nach Eingaben, die ein nicht-`null` [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) haben. Eingaben mit einem Wert für diese Eigenschaft repräsentieren Eingaben, die einen Zielstrahl vom Benutzer weg projizieren.

Für jede solche Eingabe sucht dieses Beispiel nach Eingaben, deren `targetRayMode` `tracked-pointer` ist, was darauf hinweist, dass die Eingabe tatsächlich dazu gedacht ist, ein Zielgerät darzustellen und keine Blickrichtung, Bildschirmberührung oder Mausklick. Für verfolgte Zeiger wird eine Funktion `myRenderTargetRayAsBeam()` aufgerufen, um einen Strahl von der virtuellen Position des Eingabecontrollers nach außen in die Richtung, in die er zeigt, zu rendern.

Der Code sollte weiterhin Aufgaben wie das Zeichnen von Controllern oder von Objekten, die die Positionen der Hände des Benutzers im virtuellen Raum repräsentieren, sowie alle anderen eingabebezogenen Aufgaben ausführen.

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

Lesen Sie den Artikel [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs) für weitere Details und ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
