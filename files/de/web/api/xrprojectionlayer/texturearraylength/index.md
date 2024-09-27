---
title: "XRProjectionLayer: textureArrayLength-Eigenschaft"
short-title: textureArrayLength
slug: Web/API/XRProjectionLayer/textureArrayLength
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureArrayLength`**-Eigenschaft der Schnittstelle [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) gibt die Schichtanzahl für Array-Texturen an, wenn `texture-array` als `textureType` verwendet wird.

Die Schichtanzahl der Projektionsebene für Array-Texturen wird durch den User Agent oder das Gerät bestimmt. Sie wird im [`XRSubImage`](/de/docs/Web/API/XRSubImage) berichtet, das nur innerhalb der Frame-Schleife zugänglich ist. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf den ersten Frame nach der Schichtherstellung warten wollen, um die erforderlichen Dimensionen für diese Puffer zu bestimmen, ermöglicht die `textureArrayLength`-Eigenschaft den Zugriff auf die Schichtanzahl für Array-Texturen außerhalb der Frame-Schleife. Die Zuweisung dieser Puffer kann direkt nach der Erstellung der Schicht erfolgen.

## Wert

Eine Zahl, die die Anzahl der Schichten der Farbtexturen bei Verwendung von `texture-array` als `textureType` angibt. Andernfalls beträgt der Wert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSubImage`](/de/docs/Web/API/XRSubImage)
