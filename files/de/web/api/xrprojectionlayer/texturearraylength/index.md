---
title: "XRProjectionLayer: Eigenschaft textureArrayLength"
short-title: textureArrayLength
slug: Web/API/XRProjectionLayer/textureArrayLength
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureArrayLength`**-Eigenschaft des [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Interfaces gibt die Schichtanzahl für Array-Texturen an, wenn `texture-array` als `textureType` verwendet wird.

Die Schichtanzahl der Projektionsschicht für Array-Texturen wird vom Benutzeragenten oder dem Gerät bestimmt. Sie wird in der [`XRSubImage`](/de/docs/Web/API/XRSubImage) gemeldet, welche nur innerhalb der Frame-Schleife zugänglich ist. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf den ersten Frame nach der Schichterstellung warten möchten, um die benötigten Dimensionen für diese Puffer zu bestimmen, ermöglicht die `textureArrayLength`-Eigenschaft den Zugriff auf die Schichtanzahl für Array-Texturen außerhalb der Frame-Schleife. Die Zuordnung dieser Puffer kann direkt nach der Schichterstellung erfolgen.

## Wert

Eine Zahl, die die Anzahl der Schichten der Farbtexturen bei Verwendung von `texture-array` als `textureType` angibt. Andernfalls wird es `1` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSubImage`](/de/docs/Web/API/XRSubImage)
