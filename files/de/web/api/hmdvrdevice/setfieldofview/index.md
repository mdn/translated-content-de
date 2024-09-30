---
title: "HMDVRDevice: setFieldOfView()-Methode"
short-title: setFieldOfView()
slug: Web/API/HMDVRDevice/setFieldOfView
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`setFieldOfView()`**-Methode des [`HMDVRDevice`](/de/docs/Web/API/HMDVRDevice)-Interfaces kann verwendet werden, um das Sichtfeld für ein Auge oder beide Augen gleichzeitig einzustellen.

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
  - : Die Entfernung von den Augen zum nächsten Punkt des Sichtfeldes. Die nächste Entfernung, bei der Objekte noch sichtbar sind. Wenn nicht angegeben, wird der Standardwert verwendet — `0.01`.
- `zFar` {{optional_inline}}
  - : Die Entfernung von den Augen zum entferntesten Punkt des Sichtfeldes. Die weiteste Entfernung, bei der Objekte noch sichtbar sind. Wenn nicht angegeben, wird der Standardwert verwendet — `10000.0`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende einfache Beispiel zeigt eine Funktion, die verwendet werden kann, um ein benutzerdefiniertes Sichtfeld mit vier angegebenen Gradwerten für oben, rechts, unten und links einzustellen. Der `VRFieldOfView()`-Konstruktor wird verwendet, um ein [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)-Objekt aus den angegebenen Werten zu erstellen, das dann in die `setFieldOfView()`-Methode eingefügt wird (die Standardwerte für `zNear` und `zFar` werden in diesem Fall immer verwendet).

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
> Beim Testen kann das Einstellen eines seltsamen/kleinen Sichtfeldes das Sichtfeld erheblich beeinträchtigen. Es ist eine gute Idee, zunächst das aktuelle Sichtfeld zu erfassen (unter Verwendung von [`VREyeParameters.fieldOfView`](/de/docs/Web/API/VREyeParameters/fieldOfView)), bevor drastische Änderungen vorgenommen werden, damit es bei Bedarf später zurückgesetzt werden kann.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
