---
title: "XRInputSource: targetRayMode-Eigenschaft"
short-title: targetRayMode
slug: Web/API/XRInputSource/targetRayMode
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)
Eigenschaft **`targetRayMode`** gibt an, auf welche Weise der Zielstrahl für die Eingabequelle erzeugt und dem Benutzer präsentiert werden soll.

In der Regel wird ein Zielstrahl vom Ursprung des Zielsystems entlang des Strahls in die Richtung gezogen, in die der Benutzer schaut oder zeigt. Der Stil des Strahls liegt im Allgemeinen bei Ihnen, ebenso wie die Methode zur Anzeige des Endpunkts des Strahls. Der anvisierte Punkt oder das Zielobjekt kann durch Zeichnen einer Form oder Hervorheben der anvisierten Fläche oder des Objekts angezeigt werden.

Ein Zielstrahl, der von einem Hand-Controller ausgeht:

![Ein Screenshot, der einen Zielstrahl zeigt, der von einem Hand-Controller ausgeht](https://mdn.github.io/shared-assets/images/examples/hand-controller-target-ray.gif)

Der Zielstrahl kann alles Mögliche sein, von einer einfachen Linie (idealerweise mit Abstand verblassend) bis hin zu einem animierten Effekt, wie dem Science-Fiction-"Phaser"-Stil, der im obigen Screenshot gezeigt wird.

## Wert

Ein String, der angibt, welche Methode beim Erzeugen und Präsentieren des Zielstrahls für den Benutzer verwendet werden soll. Die möglichen Werte sind:

- `gaze`
  - : Der Benutzer verwendet ein Blickverfolgungssystem (oder **Blickeingabe**), das die Richtung erkennt, in die der Benutzer schaut. Der Zielstrahl wird so gezeichnet, dass er von den Augen des Betrachters ausgeht und der Blickrichtung folgt.
- `screen`
  - : Die Richtung des Zielstrahls wird mittels Berührung auf einem Touchscreen, einer Maus oder einem anderen taktilen Eingabegerät angezeigt.
- `tracked-pointer`
  - : Die Zielerfassung erfolgt mit einem Handgerät oder Handverfolgungssystem, das der Benutzer in Zielrichtung zeigt. Der Zielstrahl erstreckt sich von der Hand (oder dem Objekt in der Hand) in die anvisierte Richtung. Die Richtung wird anhand plattformabhängiger Regeln bestimmt, obwohl, falls keine derartigen Regeln existieren, die Richtung angenommen wird, indem davon ausgegangen wird, dass der Benutzer seinen Zeigefinger gerade aus seiner Hand zeigt.
- `transient-pointer`
  - : Die Eingabequelle wurde als Teil eines Betriebssystem-Interaktionsvorgangs generiert und nicht von einem bestimmten Hardwarestück. Einige Beispiele umfassen Benutzerabsichten, die auf Informationen basieren, die zu sensibel sind, um direkt offengelegt zu werden, wie z.B. Blick, synthetisierte Eingaben von Webtreibern oder Eingaben, die von unterstützenden Technologien generiert werden.

## Hinweise zur Verwendung

[`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der Eingabequelle gibt die Position und Orientierung des Zielstrahls an und kann verwendet werden, um zu bestimmen, wo der Strahl gerendert werden soll.

## Beispiele

Dieser Codeausschnitt zeigt einen Teil einer Funktion, die in jedem Frame aufgerufen werden soll. Er sucht nach Eingaben, die einen nicht-`null` [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) haben. Eingaben, die einen Wert für diese Eigenschaft besitzen, repräsentieren Eingaben, die einen Zielstrahl vom Benutzer weg projizieren.

Für jede solche Eingabe sucht dieses Beispiel nach Eingaben, deren `targetRayMode` `tracked-pointer` ist, was darauf hinweist, dass die Eingabe dazu bestimmt ist, ein Zielgerät darzustellen, statt eines Blickgeräts, Bildschirmtipps oder Mausklicks. Für verfolgte Zeiger wird eine Funktion `myRenderTargetRayAsBeam()` aufgerufen, um einen Strahl vom virtuellen Standort des Eingabegeräts in die Richtung zu rendern, in die es zeigt.

Der Code sollte weiterhin Aufgaben ausführen, wie z.B. Controller oder Objekte darzustellen, die die Positionen der Hände des Benutzers im virtuellen Raum repräsentieren, sowie alle anderen eingabebezogenen Aufgaben.

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
