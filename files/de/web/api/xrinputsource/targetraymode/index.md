---
title: "XRInputSource: targetRayMode-Eigenschaft"
short-title: targetRayMode
slug: Web/API/XRInputSource/targetRayMode
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRInputSource")}}-Eigenschaft **`targetRayMode`** gibt an, wie der Zielstrahl für die Eingabequelle generiert und dem Benutzer präsentiert werden soll.

Typischerweise wird ein Zielstrahl von der Quelle des Zielsystems entlang des Zielstrahls in die Richtung gezogen, in die der Benutzer schaut oder zeigt. Der Stil des Strahls liegt im Allgemeinen bei Ihnen, ebenso wie die Methode zur Anzeige des Endpunkts des Strahls. Der zielgerichtete Punkt oder das Objekt kann durch das Zeichnen einer Form oder Hervorheben der anvisierten Oberfläche oder des Objekts angezeigt werden.

Ein von einem Handcontroller abgegebener Zielstrahl:

![Ein Screenshot, der einen Zielstrahl zeigt, der von einem Handcontroller abgegeben wird](https://mdn.github.io/shared-assets/images/examples/hand-controller-target-ray.gif)

Der Zielstrahl kann von einer einfachen Linie (idealerweise mit Distanzabnahme) bis zu einem animierten Effekt wie dem im obigen Screenshot gezeigten Science-Fiction-"Phaser"-Stil reichen.

## Wert

Ein String, der angibt, welche Methode verwendet werden soll, um den Zielstrahl für den Benutzer zu generieren und darzustellen. Die möglichen Werte sind:

- `gaze`
  - : Der Benutzer verwendet ein System zur Blickverfolgung (**gaze input**), das die Richtung erkennt, in die der Benutzer schaut. Der Zielstrahl wird von den Augen des Betrachters aus gezogen und folgt der Richtung, in die er schaut.
- `screen`
  - : Die Richtung des Zielstrahls wird durch ein Antippen auf einem Touchscreen, einer Maus oder einem anderen taktilen Eingabegerät angegeben.
- `tracked-pointer`
  - : Die Zielerfassung erfolgt mit einem Handgerät oder einem Handverfolgungssystem, mit dem der Benutzer in die Richtung des Ziels zeigt. Der Zielstrahl erstreckt sich von der Hand (oder dem Objekt in der Hand) in die anvisierte Richtung. Die Richtung wird gemäß plattformspezifischen Regeln bestimmt, sollte es solche Regeln nicht geben, wird die Richtung angenommen, indem der Benutzer seinen Zeigefinger gerade von der Hand ausstrecken lässt.
- `transient-pointer`
  - : Die Eingabequelle wurde als Teil einer Betriebssystem-Interaktionsabsicht erzeugt und nicht aufgrund eines bestimmten Hardwarestücks. Einige Beispiele umfassen Benutzerabsichten, die auf Informationen basieren, die zu sensibel sind, um direkt offengelegt zu werden, wie Blicke, synthetisierte Eingaben von Web-Treibern oder durch unterstützende Technologien generierte Eingaben.

## Hinweise zur Verwendung

Die {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} der Eingabequelle gibt die Position und Orientierung des Zielstrahls an und kann verwendet werden, um zu bestimmen, wo der Strahl gerendert werden soll.

## Beispiele

Dieses Codefragment zeigt einen Teil einer Funktion, die in jedem Frame aufgerufen werden soll. Es sucht nach Eingaben, die eine nicht-`null` {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} haben. Eingaben, die einen Wert für diese Eigenschaft haben, repräsentieren Eingaben, die einen Zielstrahl vom Benutzer ausgehend projizieren.

Für jede solche Eingabe sucht dieses Beispiel nach Eingaben, deren `targetRayMode` auf `tracked-pointer` gesetzt ist, was darauf hinweist, dass die Eingabe tatsächlich dazu bestimmt ist, ein Zielgerät darzustellen, anstatt ein Blickgerät, Bildschirmtippen oder Mausklick. Für verfolgte Zeiger wird eine Funktion `myRenderTargetRayAsBeam()` aufgerufen, um einen Strahl vom virtuellen Standort des Eingabesteuergeräts in die Richtung zu rendern, in die es zeigt.

Der Code sollte weiterhin Aufgaben wie das Zeichnen von Steuergeräten oder Objekten, die die Positionen der Hände des Benutzers im virtuellen Raum repräsentieren, sowie alle weiteren eingabebezogenen Aufgaben ausführen.

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
- [Verwendung von Gamepads in WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Gamepads)
