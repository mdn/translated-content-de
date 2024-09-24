---
title: "HMDVRDevice: Methode setFieldOfView()"
short-title: setFieldOfView()
slug: Web/API/HMDVRDevice/setFieldOfView
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`setFieldOfView()`**-Methode des {{domxref("HMDVRDevice")}}-Interfaces kann verwendet werden, um das Sichtfeld für ein Auge oder beide Augen gleichzeitig einzustellen.

## Syntax

```js-nolint
setFieldOfView(leftFOV, rightFOV, zNear, zFar)
```

### Parameter

- `leftFOV` {{optional_inline}}
  - : Ein {{domxref("VRFieldOfView")}}-Objekt, das das neue Sichtfeld für das linke Auge definiert. Wird es nicht angegeben, ändert sich das Sichtfeld des linken Auges nicht.
- `rightFOV` {{optional_inline}}
  - : Ein {{domxref("VRFieldOfView")}}-Objekt, das das neue Sichtfeld für das rechte Auge definiert. Wird es nicht angegeben, ändert sich das Sichtfeld des rechten Auges nicht.
- `zNear` {{optional_inline}}
  - : Die Entfernung von den Augen zum nächsten Punkt des Sichtfeldes. Die nächstgelegenen Objekte, die noch im Sichtfeld sein können. Wird es nicht angegeben, wird der Standardwert verwendet — `0.01`.
- `zFar` {{optional_inline}}
  - : Die Entfernung von den Augen zum weitesten Punkt des Sichtfeldes. Die am weitesten entfernten Objekte, die noch im Sichtfeld sein können. Wird es nicht angegeben, wird der Standardwert verwendet — `10000.0`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende einfache Beispiel zeigt eine Funktion, die verwendet werden kann, um ein benutzerdefiniertes Sichtfeld mit vier angegebenen Gradwerten für oben, rechts, unten und links einzustellen. Der `VRFieldOfView()`-Konstruktor wird verwendet, um ein {{domxref("VRFieldOfView")}}-Objekt aus den bereitgestellten Werten zu erstellen, das dann in die `setFieldOfView()`-Methode eingespeist wird (in diesem Fall werden immer die Standardwerte für `zNear` und `zFar` verwendet).

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
> Beim Testen kann das Einstellen eines ungewöhnlichen/sehr kleinen Sichtfeldes das Sichtfenster erheblich stören. Es ist ratsam, zuerst das aktuelle Sichtfeld abzurufen (mit {{domxref("VREyeParameters.fieldOfView")}}), bevor drastische Änderungen vorgenommen werden, damit Sie es bei Bedarf später zurücksetzen können.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
