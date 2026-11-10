---
title: HMDVRDevice
slug: Web/API/HMDVRDevice
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Schnittstelle **`HMDVRDevice`** der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert ein Head-Mounted Display. Sie stellt Informationen über jedes Auge bereit und ermöglicht es, das aktuelle Sichtfeld zu ändern.

## Instanzeigenschaften

_Diese Schnittstelle definiert keine eigenen Eigenschaften, erbt aber die Eigenschaften ihrer übergeordneten Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay)._

- `VRDisplay.hardwareUnitId` {{ReadOnlyInline}}
  - : Gibt die eindeutige Hardware-ID der gesamten Hardwareeinheit zurück, zu der dieses `VRDevice` gehört. Alle Geräte, die zur selben physischen Hardwareeinheit gehören, haben dieselbe `hardwareUnitId`.
- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}}
  - : Gibt die ID dieses bestimmten `VRDevice` zurück. Die ID sollte sich bei einem Neustart des Browsers nicht ändern, damit Konfigurationsdaten anhand dieser ID gespeichert werden können.
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}}
  - : Ein für Menschen lesbarer Name zur Identifizierung des `VRDevice`.

## Instanzmethoden

- [`HMDVRDevice.getEyeParameters()`](/de/docs/Web/API/HMDVRDevice/getEyeParameters) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die aktuellen Parameter für das als Argument angegebene Auge („left“ oder „right“) zurück, beispielsweise Informationen zum Sichtfeld. Die Parameter werden in einem [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt gespeichert.
- [`HMDVRDevice.setFieldOfView()`](/de/docs/Web/API/HMDVRDevice/setFieldOfView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Legt das Sichtfeld für beide Augen fest.

## Beispiele

Das folgende Beispiel aus der WebVR-Spezifikation findet das erste verfügbare `HMDVRDevice` und, falls vorhanden, das zugehörige [`PositionSensorVRDevice`](/de/docs/Web/API/PositionSensorVRDevice).

```js
navigator.getVRDevices().then((devices) => {
  for (const device of devices) {
    if (device instanceof HMDVRDevice) {
      gHMD = device;
      break;
    }
  }

  if (gHMD) {
    for (const device of devices) {
      if (
        device instanceof PositionSensorVRDevice &&
        device.hardwareUnitId === gHMD.hardwareUnitId
      ) {
        gPositionSensor = devices[i];
        break;
      }
    }
  }
});
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
