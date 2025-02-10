---
title: "MediaDeviceInfo: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaDeviceInfo/groupId
l10n:
  sourceCommit: 6bef243050a1f49bf5b7f37e9c4552f7aa30e24d
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`groupId`** schreibgeschützte Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Schnittstelle gibt einen String zurück, der eine Gruppenkennung darstellt.

Zwei Geräte haben dieselbe Gruppenkennung, wenn sie zu demselben physischen Gerät gehören; beispielsweise ein Monitor mit einer integrierten Kamera und einem Mikrofon.

## Wert

Ein String, der die Gruppe von zusammengehörigen Geräten eindeutig identifiziert, zu der dieses Gerät gehört.

## Beispiele

In diesem Beispiel erstellen wir eine Liste der Geräte, die zur selben Gruppe wie ein bestimmtes Gerät gehören. Dies könnte verwendet werden, um eine Benutzeroberfläche zu erstellen, die zusammengehörige Geräte zusammen darstellt, oder um es dem Benutzer zu erleichtern, Kamera und Mikrofon auf demselben Display gleichzeitig zu verwenden.

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

Die Funktion `getDeviceGroup()` nimmt als Eingabe das `MediaDeviceInfo`-Objekt, das das Gerät beschreibt, für das eine Gruppenliste erstellt werden soll. Die Funktion beginnt mit der Initialisierung des Ergebnis-Arrays `devList` als leeres Array.

Anschließend wird [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgerufen, um die Liste aller Mediengeräte abzurufen. Sobald das Promise erfüllt ist, wird die Liste mit {{jsxref("Array.forEach", "forEach()")}} durchlaufen. Für jedes Gerät wird überprüft, ob dessen `groupId` mit der `groupId` des Hauptgeräts übereinstimmt. Ist dies der Fall, wird das [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekt in die Liste eingefügt.

Am Ende wird die Liste, die nun ein `MediaDeviceInfo`-Objekt für jedes Gerät in derselben Gruppe enthält, an den Aufrufer zurückgegeben.

Dies könnte leicht so modifiziert werden, dass entweder das übergebene Gerät aus der zurückgegebenen Liste ausgeschlossen oder an den Anfang der Liste gesetzt wird, indem die beiden Objekte anhand ihrer [`deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId)-Werte verglichen werden. Dabei wird das Gerät nur dann in die Ergebnisliste aufgenommen, wenn es nicht übereinstimmt.

Diese Version des Beispiels setzt das übergebene Gerät an den Anfang der Ergebnisliste und fügt dann weitere Mitglieder der Gruppe hinzu, die gefunden werden:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
