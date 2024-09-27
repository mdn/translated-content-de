---
title: "HMDVRDevice: setFieldOfView()-Methode"
short-title: setFieldOfView()
slug: Web/API/HMDVRDevice/setFieldOfView
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`setFieldOfView()`**-Methode der [`HMDVRDevice`](/de/docs/Web/API/HMDVRDevice)-Schnittstelle kann verwendet werden, um das Sichtfeld für ein Auge oder beide Augen gleichzeitig zu setzen.

## Syntax

```js-nolint
setFieldOfView(leftFOV, rightFOV, zNear, zFar)
```

### Parameter

- `leftFOV` {{optional_inline}}
  - : Ein [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)-Objekt, das das neue Sichtfeld für das linke Auge definiert. Wenn nicht angegeben, ändert sich das Sichtfeld des linken Auges nicht.
- `rightFOV` {{optional_inline}}
  - : Ein [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)-Objekt, das das neue Sichtfeld für das rechte Auge definiert. Wenn nicht angegeben, ändert sich das Sichtfeld des rechten Auges nicht.
- `zNear` {{optional_inline}}
  - : Die Distanz von den Augen zum nächsten Punkt der Ansicht. Die nächste Entfernung, ab der Objekte noch im Sichtfeld sind. Wenn nicht angegeben, wird der Standardwert verwendet — `0.01`.
- `zFar` {{optional_inline}}
  - : Die Distanz von den Augen zum am weitesten entfernten Punkt der Ansicht. Die weiteste Entfernung, ab der Objekte noch im Sichtfeld sind. Wenn nicht angegeben, wird der Standardwert verwendet — `10000.0`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende einfache Beispiel zeigt eine Funktion, die verwendet werden kann, um ein benutzerdefiniertes Sichtfeld mit vier vorgegebenen Winkelwerten für oben, rechts, unten und links festzulegen. Der `VRFieldOfView()`-Konstruktor wird verwendet, um ein [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)-Objekt aus den übermittelten Werten zu erstellen, welches dann in die `setFieldOfView()`-Methode eingespeist wird (die Standardwerte für `zNear` und `zFar` werden in diesem Fall immer verwendet).

```js
function setCustomFOV(up, right, down, left) {
  const testFOV = new VRFieldOfView(up, right, down, left);

  gHMD.setFieldOfView(testFOV, testFOV, 0.01, 10000.0);

  const lEye = gHMD.getEyeParameters("left");
  const rEye = gHMD.getEyeParameters("right");
  console.log(lEye.currentFieldOfView);
  console.log(rEye.currentFieldOfView);
}
```

> [!NOTE]
> Beim Testen kann das Einstellen eines ungewöhnlichen/winzigen Sichtfeldes das Sichtfeld wirklich durcheinanderbringen. Es ist eine gute Idee, zunächst das aktuelle Sichtfeld (mit [`VREyeParameters.fieldOfView`](/de/docs/Web/API/VREyeParameters/fieldOfView)) zu erfassen, bevor Änderungen vorgenommen werden, sodass es bei Bedarf danach zurückgesetzt werden kann.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
