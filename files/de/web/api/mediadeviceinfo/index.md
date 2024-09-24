---
title: MediaDeviceInfo
slug: Web/API/MediaDeviceInfo
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Das **`MediaDeviceInfo`**-Interface der {{domxref("Media Capture and Streams API", "", "", "nocode")}} enthält Informationen, die ein einzelnes Medien-Eingabe- oder -Ausgabegerät beschreiben.

Die Liste der Geräte, die durch den Aufruf von {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} erhalten wird, ist ein Array von `MediaDeviceInfo`-Objekten, jeweils eines pro Mediengerät.

## Instanzeigenschaften

- {{domxref("MediaDeviceInfo.deviceId")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine Kennung für das dargestellte Gerät ist, die über Sitzungen hinweg gespeichert wird. Sie ist für andere Anwendungen unerratbar und einzigartig für den Ursprung der aufrufenden Anwendung. Sie wird zurückgesetzt, wenn der Benutzer Cookies löscht (für das private Surfen wird eine andere Kennung verwendet, die nicht über Sitzungen hinweg gespeichert wird).
- {{domxref("MediaDeviceInfo.groupId")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine Gruppierungskennung darstellt. Zwei Geräte haben dieselbe Gruppierungskennung, wenn sie zu demselben physischen Gerät gehören — zum Beispiel ein Monitor mit integrierter Kamera und Mikrofon.
- {{domxref("MediaDeviceInfo.kind")}} {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der entweder `"videoinput"`, `"audioinput"` oder `"audiooutput"` ist.
- {{domxref("MediaDeviceInfo.label")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der dieses Gerät beschreibt (zum Beispiel "Externe USB-Webcam").

> [!NOTE]
> Aus Sicherheitsgründen ist das `label`-Feld immer leer, es sei denn, es existiert ein aktiver Medienstream _oder_ der Benutzer hat eine dauerhafte Berechtigung für den Zugriff auf Mediengeräte erteilt. Die Menge der Gerätebezeichnungen könnte andernfalls als Teil eines [Fingerabdrucksmechanismus](/de/docs/Glossary/Fingerprinting) verwendet werden, um einen Benutzer zu identifizieren.

## Instanzmethoden

- {{domxref("MediaDeviceInfo.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `MediaDeviceInfo`-Objekts zurück.

## Beispiel

Hier ist ein Beispiel, das {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} verwendet, um eine Liste von Geräten zu erhalten.

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

Dies könnte folgendes ausgeben:

```bash
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

oder wenn ein oder mehrere Medienstreams aktiv sind oder wenn dauerhafte Berechtigungen erteilt wurden:

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
- {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}}
- {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}}
