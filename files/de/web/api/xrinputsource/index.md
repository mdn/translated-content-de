---
title: XRInputSource
slug: Web/API/XRInputSource
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das Interface **`XRInputSource`** der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Quelle von Steuerungseingaben, die Teil des WebXR-kompatiblen virtuellen oder erweiterten Realitätssystems des Benutzers ist. Das Gerät ist spezifisch für die verwendete Plattform, liefert jedoch die Richtung, in die es gezielt wird und kann optional Ereignisse erzeugen, wenn der Benutzer Aktionen mit dem Gerät auslöst.

## Instanzeigenschaften

- [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad) {{ReadOnlyInline}}
  - : Ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt, das den Zustand der Tasten und Achsen an der XR-Eingabequelle beschreibt, wenn es sich um ein Gamepad oder ein vergleichbares Gerät handelt. Wenn das Gerät kein Gamepad-ähnliches Gerät ist, hat diese Eigenschaft den Wert `null`.
- [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) {{ReadOnlyInline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), dessen Ursprung die Pose verfolgt, die verwendet wird, um Objekte zu rendern, die so erscheinen sollen, als würden sie in der durch `handedness` angegebenen Hand gehalten. Die Ausrichtung dieses Raums gibt den Winkel an, in dem die Hand das Objekt greift. Lesen Sie im Hauptartikel über [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) weiter, um mehr darüber zu erfahren, wie dieser Raum verwendet wird.
- [`hand`](/de/docs/Web/API/XRInputSource/hand) {{ReadOnlyInline}}
  - : Ein [`XRHand`](/de/docs/Web/API/XRHand)-Objekt, das den Zugriff auf das zugrunde liegende Hand-Tracking-Gerät ermöglicht.
- [`handedness`](/de/docs/Web/API/XRInputSource/handedness) {{ReadOnlyInline}}
  - : Ein String, der angibt, in welcher Hand das durch diese `XRInputSource` repräsentierte Gerät verwendet wird, falls vorhanden. Der Wert wird `left`, `right` oder `none` sein.
- [`profiles`](/de/docs/Web/API/XRInputSource/profiles) {{ReadOnlyInline}}
  - : Ein Array von Strings, die jeweils den Namen eines Eingabeprofils angeben, das die bevorzugte visuelle Darstellung und das Verhalten dieser Eingabequelle beschreibt.
- [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) {{ReadOnlyInline}}
  - : Ein String, der die Methode angibt, die verwendet wird, um den Zielstrahl zu erzeugen: `gaze`, `tracked-pointer` oder `screen`.
- [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) {{ReadOnlyInline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das den Ursprung des Zielstrahls und die Richtung, in die er sich erstreckt, definiert. Dieser Raum wird mithilfe der durch `targetRayMode` definierten Methode festgelegt.

## Instanzmethoden

_Das `XRInputSource`-Interface definiert keine Methoden._

## Anwendungshinweise

### Aktionen und der Zielstrahl

Wenn das Gerät eine Angabe über die Richtung liefert, in die es zeigt, erfolgt dies über einen **Zielstrahl**. Dies ist ein Strahl, der sich von der Position des Geräts aus in die Richtung erstreckt, in die es zeigt.

**Ein von einem Handcontroller emittierter Zielstrahl.**

![Ein Screenshot, der einen von einem Handcontroller emittierten Zielstrahl zeigt](https://mdn.github.io/shared-assets/images/examples/hand-controller-target-ray.gif)

Wenn das Gerät einen Auslöser oder einen anderen zusammendrückbaren Eingang enthält, wie z. B. ein Handgestengerät, das erkennt, wann der Benutzer seine Faust zusammendrückt, wird diese Aktion als **primäre Quetschaktion** bezeichnet. Eine primäre Quetschaktion sollte einer Greifhandlung in der Realität entsprechen, z. B. das Ergreifen eines Objekts oder das Drücken eines Auslösers an einem Werkzeug oder einer Waffe. Wenn eine Quetschaktion beginnt, z. B. indem der Benutzer den Auslöser drückt oder seinen Griff verstärkt, wird ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis an die `XRSession` gesendet. Sobald die Aktion abgeschlossen ist und der Benutzer den Auslöser oder den Griff gelöst hat, wird ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet. Dies wird gefolgt von einem [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event), das ebenfalls gesendet wird, wenn die Aktion abgebrochen wird, anstatt abgeschlossen zu werden.

Wenn das Gerät über eine Taste oder andere drückbare Eingabesteuerung verfügt, ist dies eine **primäre Eingabequelle**, und diese Taste ist eine **primäre Aktion**. Eine primäre Aktion kann auftreten, wenn der Benutzer eine Taste drückt, auf ein Touchpad klickt oder die obere Taste eines Daumensticks verwendet oder ein Handzeichen oder einen Sprachbefehl verwendet, der die Aktion tastenähnlich auslöst. Wenn eine primäre Aktion beginnt, wird ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet. Wenn die Aktion abgeschlossen ist (z. B. wenn der Benutzer die Taste loslässt), wird ein [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis gesendet. Schließlich, sobald das abgeschlossen ist — oder wenn der Benutzer die Aktion abbricht — wird ein [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis an das Sitzungsobjekt gesendet.

Eine Aktion kann entweder vom Benutzer auf gerätspezifische Weise abgebrochen werden oder wenn das Eingabegerät getrennt wird, bevor die Aktion abgeschlossen ist.

### Lokales Koordinatensystem

Jede Eingabequelle hat ihr eigenes lokales Koordinatensystem, das durch die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft beschrieben wird, welche ein [`XRSpace`](/de/docs/Web/API/XRSpace) ist, der verwendet wird, um das Koordinatensystem der Eingabe in das Weltkoordinatensystem zu übertragen. Das Koordinatensystem des Griffraums kann dann verwendet werden, um Objekte so zu rendern, dass sie erscheinen, als würden sie in der Hand des Benutzers gehalten.

![Ein Diagramm, das das durch die gripSpace-Eigenschaft definierte Koordinatensystem zeigt](xr-hand-axes.svg)

Weitere Details zum Koordinatensystem der Eingabequelle finden Sie im Artikel, der die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft im Detail beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)
- [`XRSpace`](/de/docs/Web/API/XRSpace)
