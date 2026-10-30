---
title: "MediaDeviceInfo: Methode toJSON()"
short-title: toJSON()
slug: Web/API/MediaDeviceInfo/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die Methode **`toJSON()`** der Schnittstelle [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `MediaDeviceInfo`-Objekt repräsentiert.

Die Methode wird bei der {{Glossary("JSON", "JSON")}}-Serialisierung automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `MediaDeviceInfo`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId)
- [`kind`](/de/docs/Web/API/MediaDeviceInfo/kind)
- [`label`](/de/docs/Web/API/MediaDeviceInfo/label)
- [`groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId)

Der Wert jeder Eigenschaft wird unverändert übernommen.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `MediaDeviceInfo`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // List cameras and microphones.
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        const json = device.toJSON();
        console.log(json); // A plain object
        console.log(typeof json); // "object"
        console.log(json.deviceId); // Same value as device.deviceId
      });
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
}
```

### In einen JSON-String serialisieren

Innerhalb des `forEach()`-Callbacks aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(device));
```

Dies würde einen JSON-String wie den folgenden protokollieren (zur besseren Lesbarkeit formatiert):

```json
{
  "deviceId": "HJtTemQTM64Bivxv3ZEyKjCi1VR8042lPNpmXKObKJE=",
  "kind": "videoinput",
  "label": "",
  "groupId": "Okm2l1YZTrwy8awTxE8QSLNFoVMdIXx++wLh68tbmv0="
}
```

Jedes weitere Gerät wird als separater JSON-String protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
