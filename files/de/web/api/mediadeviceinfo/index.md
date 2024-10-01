---
title: MediaDeviceInfo
slug: Web/API/MediaDeviceInfo
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`MediaDeviceInfo`** Schnittstelle der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) enthält Informationen, die ein einzelnes Medien-Ein- oder Ausgabegerät beschreiben.

Die Liste der Geräte, die durch Aufruf von [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) erhalten wird, ist ein Array von `MediaDeviceInfo` Objekten, eines pro Mediengerät.

## Instanz-Eigenschaften

- [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der ein Bezeichner für das dargestellte Gerät ist, der über Sitzungen hinweg gespeichert wird. Er ist von anderen Anwendungen nicht erratbar und eindeutig für den Ursprung der aufrufenden Anwendung. Er wird zurückgesetzt, wenn der Benutzer Cookies löscht (für das private Surfen wird ein anderer Bezeichner verwendet, der nicht über Sitzungen hinweg gespeichert wird).
- [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der ein Gruppen-Bezeichner ist. Zwei Geräte haben den gleichen Gruppen-Bezeichner, wenn sie zu demselben physischen Gerät gehören — zum Beispiel ein Monitor mit integrierter Kamera und Mikrofon.
- [`MediaDeviceInfo.kind`](/de/docs/Web/API/MediaDeviceInfo/kind) {{ReadOnlyInline}}
  - : Gibt einen aufgezählten Wert zurück, der entweder `"videoinput"`, `"audioinput"` oder `"audiooutput"` ist.
- [`MediaDeviceInfo.label`](/de/docs/Web/API/MediaDeviceInfo/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der dieses Gerät beschreibt (zum Beispiel "Externe USB-Webcam").

> [!NOTE]
> Aus Sicherheitsgründen ist das `label`-Feld immer leer, es sei denn, ein aktiver Medienstream existiert _oder_ der Benutzer hat dauerhafte Berechtigungen für den Zugriff auf Mediengeräte erteilt. Die Menge der Gerätebezeichnungen könnte andernfalls als Teil eines {{Glossary("Fingerprinting", "Fingerprinting")}} Mechanismus verwendet werden, um einen Benutzer zu identifizieren.

## Instanz-Methoden

- [`MediaDeviceInfo.toJSON()`](/de/docs/Web/API/MediaDeviceInfo/toJSON)
  - : Gibt eine JSON-Repräsentation des `MediaDeviceInfo` Objekts zurück.

## Beispiel

Hier ist ein Beispiel, das [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) verwendet, um eine Liste von Geräten zu erhalten.

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

Dies könnte folgendes erzeugen:

```bash
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

oder wenn ein oder mehrere Medienströme aktiv sind, oder wenn dauerhafte Berechtigungen erteilt wurden:

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
