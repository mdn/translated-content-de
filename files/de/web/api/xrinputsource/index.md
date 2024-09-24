---
title: XRInputSource
slug: Web/API/XRInputSource
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`XRInputSource`**-Schnittstelle des [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Steuerungseingabequelle, die Teil des WebXR-kompatiblen virtuellen oder augmentierten Realitätssystems des Benutzers ist. Das Gerät ist spezifisch für die verwendete Plattform, liefert jedoch die Richtung, in die es gezielt wird, und kann optional Ereignisse erzeugen, wenn der Benutzer Aktionen mit dem Gerät ausführt.

## Instanzeigenschaften

- {{domxref("XRInputSource.gamepad", "gamepad")}} {{ReadOnlyInline}}
  - : Ein {{domxref("Gamepad")}}-Objekt, das den Zustand der Tasten und Achsen der XR-Eingabequelle beschreibt, sofern es sich um ein Gamepad oder ein vergleichbares Gerät handelt. Ist das Gerät kein gamepad-ähnliches Gerät, hat diese Eigenschaft den Wert `null`.
- {{domxref('XRInputSource.gripSpace', 'gripSpace')}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRSpace")}}, dessen Ursprung die Pose verfolgt, die verwendet wird, um Objekte zu rendern, die so erscheinen sollen, als würden sie in der durch `handedness` angegebenen Hand gehalten werden. Die Orientierung dieses Raums gibt den Winkel an, in dem die Hand das Objekt greift. Lesen Sie im Hauptartikel zu {{domxref("XRInputSource.gripSpace", "gripSpace")}} weiter, um mehr Details zur Nutzung dieses Raumes zu erfahren.
- {{domxref('XRInputSource.hand', 'hand')}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRHand")}}-Objekt, das Zugriff auf das zugrunde liegende Hand-Tracking-Gerät bietet.
- {{domxref('XRInputSource.handedness', 'handedness')}} {{ReadOnlyInline}}
  - : Ein String, der angibt, in welcher Hand das durch diese `XRInputSource` dargestellte Gerät verwendet wird, falls vorhanden. Der Wert kann `left`, `right` oder `none` sein.
- {{domxref('XRInputSource.profiles', 'profiles')}} {{ReadOnlyInline}}
  - : Ein Array von Strings, die jeweils den Namen eines Eingabeprofils spezifizieren, das die bevorzugte visuelle Darstellung und das Verhalten dieser Eingabequelle beschreibt.
- {{domxref('XRInputSource.targetRayMode', 'targetRayMode')}} {{ReadOnlyInline}}
  - : Ein String, der die Methodik angibt, die zur Erzeugung des Zielstrahls verwendet wird: `gaze`, `tracked-pointer` oder `screen`.
- {{domxref('XRInputSource.targetRaySpace', 'targetRaySpace')}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRSpace")}}-Objekt, das den Ursprung des Zielstrahls und die Richtung, in die er sich erstreckt, definiert. Dieser Raum wird mit der durch `targetRayMode` definierten Methode festgelegt.

## Instanzmethoden

_Die `XRInputSource`-Schnittstelle definiert keine Methoden._

## Verwendungsnotizen

### Aktionen und der Zielstrahl

Wenn das Gerät eine Angabe der Richtung bietet, in die es zeigt, erfolgt dies mithilfe eines **Zielstrahls**. Dies ist ein Strahl, der sich vom Standort des Geräts in der Richtung, in die es zeigt, erstreckt.

**Ein Zielstrahl, der von einem Handcontroller ausgesendet wird.**

![Ein Screenshot, der zeigt, wie ein Zielstrahl von einem Handcontroller ausgesendet wird](https://mdn.github.io/shared-assets/images/examples/hand-controller-target-ray.gif)

Wenn das Gerät einen Abzug oder eine andere quetschbare Eingabe enthält, wie ein Handgestengerät, das erkennt, wenn der Benutzer seine Faust ballt, wird diese Aktion als **primäre Quetschaktion** bezeichnet. Eine primäre Quetschaktion sollte einem Greifakt in der Realität entsprechen, wie das Ergreifen eines Objekts oder das Drücken eines Abzugs auf einem Werkzeug oder einer Waffe. Wenn eine Quetschaktion beginnt, wie beispielsweise durch Drücken des Abzugs oder das Festziehen des Griffs durch den Benutzer, wird ein {{domxref("XRSession.squeezestart_event", "squeezestart")}}-Ereignis an die `XRSession` gesendet. Sobald die Aktion abgeschlossen ist und der Benutzer den Abzug oder Griff losgelassen hat, wird ein {{domxref("XRSession.squeeze_event", "squeeze")}}-Ereignis gesendet. Danach folgt ein {{domxref("XRSession.squeezeend_event", "squeezeend")}}, das ebenfalls gesendet wird, wenn die Aktion abgebrochen und nicht abgeschlossen wird.

Wenn das Gerät eine Taste oder eine andere drückbare Eingabekontrolle hat, ist es eine **primäre Eingabequelle**, und diese Taste ist eine **primäre Aktion**. Eine primäre Aktion kann auftreten, wenn der Benutzer eine Taste drückt, auf ein Touchpad oder die obere Taste eines Joysticks klickt oder eine Handgeste oder gesprochene Befehl verwendet, die die Taste-ähnliche Aktion aufruft. Wenn eine primäre Aktion beginnt, wird ein {{domxref("XRSession.selectstart_event", "selectstart")}}-Ereignis an die {{domxref("XRSession")}} gesendet. Wenn die Aktion abgeschlossen ist (beispielsweise wenn der Benutzer die Taste loslässt), wird ein {{domxref("XRSession.select_event", "select")}}-Ereignis gesendet. Schließlich wird, sobald dies abgeschlossen ist – oder wenn der Benutzer die Aktion abbricht –, ein {{domxref("XRSession.selectend_event", "selectend")}}-Ereignis an das Session-Objekt gesendet.

Eine Aktion kann entweder durch den Benutzer auf gerätespezifische Weise abgebrochen werden oder falls das Eingabegerät getrennt wird, bevor die Aktion abgeschlossen ist.

### Lokales Koordinatensystem

Jede Eingabequelle hat ihr eigenes lokales Koordinatensystem, das durch die {{domxref("XRInputSource.gripSpace", "gripSpace")}}-Eigenschaft beschrieben wird, welche ein {{domxref("XRSpace")}} ist, das verwendet wird, um das Koordinatensystem der Eingabe in das Weltkoordinatensystem zu übertragen. Das Koordinatensystem des Griffraums kann dann verwendet werden, um Objekte zu rendern, sodass sie so erscheinen, als würden sie in der Hand des Benutzers gehalten.

![Ein Diagramm, das das durch die gripSpace-Eigenschaft definierte Koordinatensystem zeigt](xr-hand-axes.svg)

Für weitere Details zum Koordinatensystem der Eingabequelle siehe den Artikel, der die {{domxref("XRInputSource.gripSpace", "gripSpace")}}-Eigenschaft im Detail behandelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- {{domxref("XRInputSourceArray")}}
- {{domxref("XRSpace")}}
