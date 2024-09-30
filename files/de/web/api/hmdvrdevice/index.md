---
title: HMDVRDevice
slug: Web/API/HMDVRDevice
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`HMDVRDevice`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert ein Head-Mounted Display und bietet Zugriff auf Informationen über jedes Auge, sowie die Möglichkeit, das aktuelle Sichtfeld zu ändern.

## Instanzmethoden

- [`HMDVRDevice.getEyeParameters()`](/de/docs/Web/API/HMDVRDevice/getEyeParameters) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die aktuellen Parameter für das angegebene Auge ("links" oder "rechts") zurück, wie z. B. Sichtfeldinformationen, die in einem [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt gespeichert sind.
- [`HMDVRDevice.setFieldOfView()`](/de/docs/Web/API/HMDVRDevice/setFieldOfView) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Legt das Sichtfeld für beide Augen fest.

## Instanzeigenschaften

_Diese Schnittstelle definiert keine eigenen Eigenschaften, erbt jedoch die Eigenschaften ihrer übergeordneten Schnittstelle, [`VRDisplay`](/de/docs/Web/API/VRDisplay)._

- `VRDisplay.hardwareUnitId` {{ReadOnlyInline}}
  - : Gibt die eindeutige Hardware-ID für die gesamte Hardware-Einheit zurück, deren Teil dieses `VRDevice` ist. Alle Geräte, die Teil desselben physischen Geräts sind, haben dieselbe `hardwareUnitId`.
- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}}
  - : Gibt die ID für dieses spezifische `VRDevice` zurück. Die ID sollte sich bei Neustarts des Browsers nicht ändern, was die Speicherung von Konfigurationsdaten ermöglicht, die darauf basieren.
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}}
  - : Ein lesbarer Name zur Identifikation des `VRDevice`.

## Beispiele

Das folgende Beispiel, das aus der WebVR-Spezifikation entnommen wurde, findet das erste verfügbare `HMDVRDevice` und das damit verbundene [`PositionSensorVRDevice`](/de/docs/Web/API/PositionSensorVRDevice), falls vorhanden.

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
