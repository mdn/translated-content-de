---
title: "MediaDeviceInfo: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaDeviceInfo/groupId
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die schreibgeschützte **`groupId`**-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Schnittstelle gibt einen String zurück, der eine Gruppenkennung ist.

Zwei Geräte haben dieselbe Gruppenkennung, wenn sie zu demselben physischen Gerät gehören; beispielsweise ein Monitor mit integrierter Kamera und Mikrofon.

## Wert

Ein String, der die Gruppe verwandter Geräte, zu der dieses Gerät gehört, eindeutig identifiziert.

## Spezifikationen

{{Specifications}}

## Beispiele

In diesem Beispiel erstellen wir eine Liste der Geräte, die Teil derselben Gruppe wie ein bestimmtes Gerät sind. Dies könnte verwendet werden, um eine Benutzeroberfläche zu erstellen, die verbundene Geräte zusammenführt, um sie darzustellen, oder um es dem Nutzer zu erleichtern, die integrierte Kamera und das Mikrofon auf demselben Display gleichzeitig auszuwählen.

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

Die Funktion `getDeviceGroup()` nimmt das `MediaDeviceInfo`-Objekt als Eingabe, das das Gerät beschreibt, für das eine Gruppenliste erstellt werden soll. Die Funktion beginnt damit, das Ergebnisarray `devList` als leeres Array zu initialisieren.

Dann wird [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgerufen, um die Liste aller Mediengeräte zu erhalten. Sobald das Versprechen erfüllt ist, durchlaufen wir die Liste mit {{jsxref("Array.forEach", "forEach()")}}. Für jedes Gerät, dessen `groupId` mit der `groupId` des Hauptgeräts übereinstimmt, schieben wir das [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekt in die Liste.

Schließlich wird die Liste, die nun ein `MediaDeviceInfo`-Objekt für jedes Gerät in derselben Gruppe enthält, an den Aufrufer zurückgegeben.

Diese Version könnte einfach geändert werden, um entweder das übergebene Gerät aus der zurückgegebenen Liste herauszulassen oder es an die Spitze der Liste zu setzen, indem die `deviceId`-Werte der beiden Objekte verglichen werden und das Gerät nur dann auf die Ergebnisliste gesetzt wird, wenn es nicht übereinstimmt.

Diese Version des Beispiels setzt das übergebene Gerät an die Spitze der Ergebnisliste und fügt dann alle anderen gefundenen Mitglieder der Gruppe hinzu:

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
