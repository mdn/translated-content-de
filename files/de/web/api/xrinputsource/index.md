---
title: XRInputSource
slug: Web/API/XRInputSource
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`XRInputSource`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Quelle der Steuereingaben, die Teil des WebXR-kompatiblen virtuellen oder erweiterten Realitätssystems des Benutzers ist. Das Gerät ist spezifisch für die verwendete Plattform, liefert jedoch die Richtung, in die es gezeigt wird, und kann optional Ereignisse generieren, wenn der Benutzer Aktionen mit dem Gerät ausführt.

## Instanz-Eigenschaften

- [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad) {{ReadOnlyInline}}
  - : Ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt, das den Zustand der Tasten und Achsen der XR-Eingabequelle beschreibt, wenn es sich um ein Gamepad oder ein vergleichbares Gerät handelt. Ist das Gerät kein gamepad-ähnliches Gerät, hat diese Eigenschaft den Wert `null`.
- [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) {{ReadOnlyInline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), dessen Ursprung die Pose nachverfolgt, die verwendet wird, um Objekte zu rendern, die erscheinen sollen, als ob sie in der durch `handedness` angegebenen Hand gehalten werden. Die Orientierung dieses Raums gibt den Winkel an, in dem die Hand das Objekt greift. Lesen Sie im Hauptartikel über [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) weiter, um mehr Details darüber zu erfahren, wie dieser Raum verwendet wird.
- [`hand`](/de/docs/Web/API/XRInputSource/hand) {{ReadOnlyInline}}
  - : Ein [`XRHand`](/de/docs/Web/API/XRHand)-Objekt, das Zugriff auf das zugrunde liegende Handverfolgungsgerät bietet.
- [`handedness`](/de/docs/Web/API/XRInputSource/handedness) {{ReadOnlyInline}}
  - : Ein String, der angibt, in welcher Hand das durch diese `XRInputSource` repräsentierte Gerät verwendet wird, falls vorhanden. Der Wert kann `left`, `right` oder `none` sein.
- [`profiles`](/de/docs/Web/API/XRInputSource/profiles) {{ReadOnlyInline}}
  - : Ein Array von Strings, die jeweils den Namen eines Eingabeprofils angeben, das die bevorzugte visuelle Darstellung und das Verhalten dieser Eingabequelle beschreibt.
- [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) {{ReadOnlyInline}}
  - : Ein String, der die Methodik angibt, die verwendet wird, um den Ziellinienstrahl zu erzeugen: `gaze`, `tracked-pointer` oder `screen`.
- [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) {{ReadOnlyInline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das den Ursprung des Zielstrahls und die Richtung festlegt, in die er sich erstreckt. Dieser Raum wird mit der durch `targetRayMode` definierten Methode festgelegt.

## Instanz-Methoden

_Das `XRInputSource`-Interface definiert keine Methoden._

## Verwendungshinweise

### Aktionen und der Zielstrahl

Wenn das Gerät eine Angabe der Richtung liefert, in die es zeigt, erfolgt dies mithilfe eines **Zielstrahls**. Dies ist ein Strahl, der sich von der Position des Geräts in die Richtung erstreckt, in die es zeigt.

**Ein Zielstrahl, der von einem Hand-Controller ausgesendet wird.**

![Ein Screenshot, der einen Zielstrahl zeigt, der von einem Hand-Controller ausgesendet wird](https://mdn.github.io/shared-assets/images/examples/hand-controller-target-ray.gif)

Wenn das Gerät einen Auslöser oder eine andere drückbare Eingabe enthält, wie z.B. ein Handgestengerät, das erkennt, wenn der Benutzer seine Faust ballt, wird diese Aktion als **primäre Drückaktion** bezeichnet. Eine primäre Drückaktion sollte einem Greifakt in der Realität entsprechen, wie dem Ergreifen eines Objekts oder dem Drücken eines Abzugs an einem Werkzeug oder einer Waffe. Wenn eine Drückaktion beginnt, also z.B. der Benutzer den Abzug drückt oder seinen Griff verstärkt, wird ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis an die `XRSession` gesendet. Sobald die Aktion abgeschlossen ist und der Benutzer den Abzug oder Griff losgelassen hat, wird ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet. Dies wird gefolgt von einem [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event), das ebenfalls gesendet wird, wenn die Aktion abgebrochen und nicht abgeschlossen wird.

Wenn das Gerät eine Taste oder andere drückbare Eingabesteuerung hat, ist es eine **primäre Eingabequelle**, und diese Taste ist eine **primäre Aktion**. Eine primäre Aktion kann auftreten, wenn der Benutzer eine Taste drückt, auf einem Touchpad oder der obersten Taste eines Steuerknüppels klickt oder ein Handgesten- oder Sprachbefehl verwendet, der die taste-ähnliche Aktion auslöst. Wenn eine primäre Aktion beginnt, wird ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet. Wenn die Aktion abgeschlossen ist (z.B. wenn der Benutzer die Taste loslässt), wird ein [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis gesendet. Schließlich, sobald dies abgeschlossen ist – oder wenn der Benutzer die Aktion abbricht – wird ein [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis an das Sitzungsobjekt gesendet.

Eine Aktion kann entweder vom Benutzer auf gerätespezifische Weise abgebrochen werden oder wenn das Eingabegerät getrennt wird, bevor die Aktion abgeschlossen ist.

### Lokales Koordinatensystem

Jede Eingabequelle hat ihr eigenes lokales Koordinatensystem, das durch die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft beschrieben wird, das ein [`XRSpace`](/de/docs/Web/API/XRSpace) ist, das dazu verwendet wird, das Koordinatensystem der Eingabe in das Weltkoordinatensystem zu überführen. Das Koordinatensystem des Griffraums kann dann verwendet werden, um Objekte zu rendern, so dass sie erscheinen, als ob sie in der Hand des Benutzers gehalten werden.

![Ein Diagramm, das das Koordinatensystem zeigt, das durch die gripSpace-Eigenschaft definiert wird](xr-hand-axes.svg)

Weitere Details zum Koordinatensystem der Eingabequelle finden Sie im Artikel, der die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft im Detail behandelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)
- [`XRSpace`](/de/docs/Web/API/XRSpace)
