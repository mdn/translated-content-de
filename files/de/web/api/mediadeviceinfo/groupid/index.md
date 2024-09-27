---
title: "MediaDeviceInfo: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaDeviceInfo/groupId
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`groupId`** schreibgeschützte Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Schnittstelle liefert einen String, der eine Gruppenkennung darstellt.

Zwei Geräte haben dieselbe Gruppenkennung, wenn sie zu demselben physischen Gerät gehören; zum Beispiel ein Monitor mit sowohl einer eingebauten Kamera als auch einem Mikrofon.

## Wert

Ein String, der die Gruppe von verwandten Geräten, zu der dieses Gerät gehört, eindeutig identifiziert.

## Spezifikationen

{{Specifications}}

## Beispiele

In diesem Beispiel erstellen wir eine Liste der Geräte, die Teil derselben Gruppe wie ein gegebenes Gerät sind. Dies könnte verwendet werden, um eine Benutzeroberfläche zu erstellen, die zusammengehörige Geräte zur Präsentation bündelt, oder um es dem Benutzer zu erleichtern, die eingebaute Kamera und das Mikrofon auf demselben Display gleichzeitig zu nutzen.

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

Die `getDeviceGroup()`-Funktion nimmt als Eingabe das `MediaDeviceInfo`-Objekt, das das Gerät beschreibt, für das eine Gruppenliste erstellt werden soll. Die Funktion beginnt, indem sie das Ergebnis-Array `devList` als leeres Array initialisiert.

Dann wird [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgerufen, um die Liste aller Mediengeräte zu erhalten. Sobald das Versprechen erfüllt ist, durchlaufen wir die Liste mit {{jsxref("Array.forEach", "forEach()")}}. Für jedes Gerät, dessen `groupId` mit der `groupId` des Hauptgeräts übereinstimmt, fügen wir das [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekt der Liste hinzu.

Schließlich wird die Liste, die nun ein `MediaDeviceInfo`-Objekt für jedes Gerät in derselben Gruppe enthält, an den Aufrufer zurückgegeben.

Dies könnte leicht geändert werden, um entweder das übergebene Gerät aus der zurückgegebenen Liste auszuschließen oder es an die Spitze der Liste zu setzen, indem die [`deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId)-Werte der beiden Objekte verglichen werden und das Gerät nur dann zur Ergebnisliste hinzugefügt wird, wenn es nicht übereinstimmt.

Diese Version des Beispiels platziert das übergebene Gerät an die Spitze der Ergebnisliste und fügt dann alle anderen Mitglieder der Gruppe hinzu, die gefunden werden:

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
