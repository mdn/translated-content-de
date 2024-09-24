---
title: "MediaDeviceInfo: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaDeviceInfo/groupId
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`groupId`** des {{domxref("MediaDeviceInfo")}}-Interfaces gibt einen Zeichenfolgenwert zurück, der ein Gruppenkennzeichen ist.

Zwei Geräte haben das gleiche Gruppenkennzeichen, wenn sie zum selben physischen Gerät gehören; zum Beispiel ein Monitor mit integrierter Kamera und Mikrofon.

## Wert

Eine Zeichenkette, die die Gruppe von verwandten Geräten, zu der dieses Gerät gehört, eindeutig identifiziert.

## Spezifikationen

{{Specifications}}

## Beispiele

In diesem Beispiel erstellen wir eine Liste der Geräte, die zur gleichen Gruppe wie ein gegebenes Gerät gehören. Dies könnte verwendet werden, um eine Benutzeroberfläche zu erstellen, die zugehörige Geräte zur Präsentation zusammenfasst, oder es dem Benutzer erleichtert, die eingebaute Kamera und das Mikrofon auf demselben Display gleichzeitig zu verwenden.

```js
const getDeviceGroup = (mainDevInfo) => {
  let devList = [];

  navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices.forEach((device) => {
      if (device.groupId === mainDevInfo.groupId) {
        devList.push(device);
      }
    });
  });

  return devList;
};
```

Die Funktion `getDeviceGroup()` nimmt als Eingabe das `MediaDeviceInfo`-Objekt entgegen, das das Gerät beschreibt, für das eine Gruppenliste erstellt werden soll. Die Funktion beginnt mit der Initialisierung des Ergebnisarrays, `devList`, als leeres Array.

Dann wird {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} aufgerufen, um die Liste aller Mediengeräte zu erhalten. Sobald das Versprechen erfüllt ist, durchlaufen wir die Liste mit {{jsxref("Array.forEach", "forEach()")}}.
Für jedes Gerät wird, wenn sein `groupId` mit dem `groupId` des Hauptgeräts übereinstimmt, das {{domxref("MediaDeviceInfo")}}-Objekt zur Liste hinzugefügt.

Schließlich wird die Liste, die nun ein `MediaDeviceInfo`-Objekt für jedes Gerät in derselben Gruppe enthält, an den Anrufer zurückgegeben.

Diese Funktion kann leicht geändert werden, um das übergebene Gerät entweder wegzulassen oder an den Anfang der Liste zu setzen, indem die beiden Objekte anhand ihrer {{domxref("MediaDeviceInfo.deviceId", "deviceId")}}-Werte verglichen werden und das Gerät nur dann zur Ergebnisliste hinzugefügt wird, wenn es nicht übereinstimmt.

Diese Version des Beispiels platziert das übergebene Gerät an der Spitze der Ergebnisliste und fügt dann alle anderen Mitglieder der gefundenen Gruppe hinzu:

```js
const getDeviceGroup = (mainDevInfo) => {
  let devList = [mainDevInfo];

  navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices.forEach((device) => {
      if (
        device.groupId === mainDevInfo.groupId &&
        device.deviceId !== mainDevInfo.deviceId
      ) {
        devList.push(device);
      }
    });
  });

  return devList;
};
```

## Browser-Kompatibilität

{{Compat}}
