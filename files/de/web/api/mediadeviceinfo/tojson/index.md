---
title: "MediaDeviceInfo: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/MediaDeviceInfo/toJSON
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`toJSON()`**-Methode der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Schnittstelle ist ein [Serializer](/de/docs/Glossary/Serialization); sie gibt eine JSON-Darstellung des [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekts darstellt.

### Beispiele

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // List cameras and microphones.
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(device.toJSON());
      });
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
}
```

Dies könnte folgendes erzeugen:

```bash
Object { deviceId: "HJtTemQTM64Bivxv3ZEyKjCi1VR8042lPNpmXKObKJE=", kind: "videoinput", label: "", groupId: "Okm2l1YZTrwy8awTxE8QSLNFoVMdIXx++wLh68tbmv0=" }
Object { deviceId: "EqDubLxPlPeW+5w/ereWTF/3EaAMVHh9QBBHkZHiP0k=", kind: "audioinput", label: "", groupId: "Okm2l1YZTrwy8awTxE8QSLNFoVMdIXx++wLh68tbmv0=" }
Object { deviceId: "CanWttL2RnHOiS7FzzYXMIvLqVFE5S06Lfy8H//nhEw=", kind: "audioinput", label: "", groupId: "nOdLNeXGIw9oL9f2wH69SssQpRVs7cmt9jqZrUWgQwI=" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
