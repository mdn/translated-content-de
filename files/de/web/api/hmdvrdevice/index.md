---
title: HMDVRDevice
slug: Web/API/HMDVRDevice
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`HMDVRDevice`**-Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert ein Head-Mounted Display, das Zugriff auf Informationen über jedes Auge bietet und es uns ermöglicht, das aktuelle Sichtfeld zu ändern.

## Instanzmethoden

- [`HMDVRDevice.getEyeParameters()`](/de/docs/Web/API/HMDVRDevice/getEyeParameters) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die aktuellen Parameter für das im Argument angegebene Auge zurück ("links" oder "rechts"), wie zum Beispiel Informationen über das Sichtfeld, die in einem [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt gespeichert sind.
- [`HMDVRDevice.setFieldOfView()`](/de/docs/Web/API/HMDVRDevice/setFieldOfView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Legt das Sichtfeld für beide Augen fest.

## Instanzeigenschaften

_Dieses Interface definiert keine eigenen Eigenschaften, sondern erbt die Eigenschaften seines übergeordneten Interfaces, [`VRDisplay`](/de/docs/Web/API/VRDisplay)._

- `VRDisplay.hardwareUnitId` {{ReadOnlyInline}}
  - : Gibt die eindeutige Hardware-ID der gesamten Hardwareeinheit zurück, zu der dieses `VRDevice` gehört. Alle Geräte, die Teil desselben physischen Hardwareteils sind, haben die gleiche `hardwareUnitId`.
- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}}
  - : Gibt die ID für dieses spezifische `VRDevice` zurück. Die ID sollte sich nicht über Browser-Neustarts hinweg ändern, was es ermöglicht, Konfigurationsdaten basierend darauf zu speichern.
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}}
  - : Ein lesbarer Name zur Identifizierung des `VRDevice`.

## Beispiele

Das folgende Beispiel, das aus der WebVR-Spezifikation stammt, findet das erste verfügbare `HMDVRDevice` und das zugehörige [`PositionSensorVRDevice`](/de/docs/Web/API/PositionSensorVRDevice), falls eines vorhanden ist.

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
