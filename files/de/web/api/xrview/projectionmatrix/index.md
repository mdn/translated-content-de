---
title: "XRView: projectionMatrix-Eigenschaft"
short-title: projectionMatrix
slug: Web/API/XRView/projectionMatrix
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`projectionMatrix`**-Eigenschaft des [`XRView`](/de/docs/Web/API/XRView)-Interfaces gibt die Projektionsmatrix an, die auf die zugrunde liegende Ansicht angewandt werden soll. Diese sollte verwendet werden, um die Perspektive in die gesamte Szene zu integrieren, um sicherzustellen, dass das Ergebnis mit dem übereinstimmt, was das Auge erwartet zu sehen.

> [!NOTE]
> Das Versäumnis, eine ordnungsgemäße Perspektive anzuwenden, oder Inkonsistenzen in der Perspektive können möglicherweise zu ernsthaften Beschwerden oder Unbehagen bei den Benutzer*innen führen.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt, das die Projektionsmatrix für die Ansicht darstellt. Die Projektionsmatrix für die Sicht jedes Auges wird verwendet, um sicherzustellen, dass der korrekte Teil der Szene jedem Auge präsentiert wird, um eine glaubwürdige 3D-Szene zu erzeugen, ohne Unbehagen für die Benutzer*innen zu verursachen.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
