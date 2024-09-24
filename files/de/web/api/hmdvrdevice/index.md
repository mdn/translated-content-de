---
title: HMDVRDevice
slug: Web/API/HMDVRDevice
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`HMDVRDevice`**-Schnittstelle der [WebVR-API](/de/docs/Web/API/WebVR_API) repräsentiert ein Head-Mounted-Display und bietet Zugriff auf Informationen zu jedem Auge, sowie die Möglichkeit, das aktuelle Sichtfeld zu ändern.

## Instanzmethoden

- {{domxref("HMDVRDevice.getEyeParameters()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die aktuellen Parameter für das als Argument spezifizierte Auge zurück ("left" oder "right") — wie z.B. Informationen zum Sichtfeld —, die in einem {{domxref("VREyeParameters")}}-Objekt gespeichert sind.
- {{domxref("HMDVRDevice.setFieldOfView()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Setzt das Sichtfeld für beide Augen.

## Instanzeigenschaften

_Diese Schnittstelle definiert keine eigenen Eigenschaften, erbt jedoch die Eigenschaften ihrer Elternschnittstelle, {{domxref("VRDisplay")}}._

- `VRDisplay.hardwareUnitId` {{ReadOnlyInline}}
  - : Gibt die eindeutige Hardware-ID für die gesamte Hardware-Einheit zurück, zu der dieses `VRDevice` gehört. Alle Geräte, die Teil des gleichen physischen Hardwarestücks sind, haben die gleiche `hardwareUnitId`.
- {{domxref("VRDisplay.displayId")}} {{ReadOnlyInline}}
  - : Gibt die ID für dieses spezifische `VRDevice` zurück. Die ID sollte sich nicht bei Browser-Neustarts ändern, was es ermöglicht, Konfigurationsdaten basierend darauf zu speichern.
- {{domxref("VRDisplay.displayName")}} {{ReadOnlyInline}}
  - : Ein für Menschen lesbarer Name zur Identifikation des `VRDevice`.

## Beispiele

Das folgende Beispiel, aus der WebVR-Spezifikation entnommen, findet das erste verfügbare `HMDVRDevice` und das zugehörige {{domxref("PositionSensorVRDevice")}}, falls eines vorhanden ist.

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

- [WebVR-API](/de/docs/Web/API/WebVR_API)
