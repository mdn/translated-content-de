---
title: MediaDeviceInfo
slug: Web/API/MediaDeviceInfo
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die Schnittstelle **`MediaDeviceInfo`** der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) enthält Informationen über ein einzelnes Medieneingabe- oder -ausgabegerät.

Die durch Aufruf von [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) abgerufene Geräteliste ist ein Array von `MediaDeviceInfo`-Objekten – eines pro Mediengerät.

## Instanzeigenschaften

- [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das dargestellte Gerät sitzungsübergreifend identifiziert. Andere Anwendungen können diesen Bezeichner nicht erraten; er ist für den Ursprung der aufrufenden Anwendung eindeutig. Er wird zurückgesetzt, wenn Benutzer Cookies löschen. Beim privaten Surfen wird ein anderer Bezeichner verwendet, der nicht sitzungsübergreifend gespeichert wird.
- [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Gruppe identifiziert. Zwei Geräte haben dieselbe Gruppenkennung, wenn sie zum selben physischen Gerät gehören – beispielsweise zu einem Monitor mit integrierter Kamera und integriertem Mikrofon.
- [`MediaDeviceInfo.kind`](/de/docs/Web/API/MediaDeviceInfo/kind) {{ReadOnlyInline}}
  - : Gibt einen Aufzählungswert zurück, der entweder `"videoinput"`, `"audioinput"` oder `"audiooutput"` ist.
- [`MediaDeviceInfo.label`](/de/docs/Web/API/MediaDeviceInfo/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der dieses Gerät beschreibt (beispielsweise „Externe USB-Webcam“).

> [!NOTE]
> Aus Sicherheitsgründen ist das Feld `label` immer leer, es sei denn, ein Medienstrom ist aktiv _oder_ Benutzer haben eine dauerhafte Berechtigung für den Zugriff auf Mediengeräte erteilt. Andernfalls könnten die Gerätebezeichnungen als Teil eines {{Glossary("Fingerprinting", "Fingerprinting")}}-Mechanismus verwendet werden, um Benutzer zu identifizieren.

## Instanzmethoden

- [`MediaDeviceInfo.toJSON()`](/de/docs/Web/API/MediaDeviceInfo/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `MediaDeviceInfo`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiel

Dieses Beispiel verwendet [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), um eine Liste von Geräten abzurufen.

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // List cameras and microphones.
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
      });
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
}
```

Das könnte Folgendes ausgeben:

```bash
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

Oder, wenn mindestens ein Medienstrom aktiv ist oder dauerhafte Berechtigungen erteilt wurden:

```bash
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
- [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
