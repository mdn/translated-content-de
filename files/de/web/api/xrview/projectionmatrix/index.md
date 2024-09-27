---
title: "XRView: projectionMatrix-Eigenschaft"
short-title: projectionMatrix
slug: Web/API/XRView/projectionMatrix
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`projectionMatrix`**-Eigenschaft der [`XRView`](/de/docs/Web/API/XRView)-Schnittstelle gibt die Projektionsmatrix an, die auf die zugrunde liegende Ansicht angewendet werden soll. Diese sollte verwendet werden, um alles in der Szene perspektivisch zu integrieren, um sicherzustellen, dass das Ergebnis mit dem übereinstimmt, was das Auge zu sehen erwartet.

> [!NOTE]
> Das Versäumnis, eine korrekte Perspektive anzuwenden oder Inkonsistenzen in der Perspektive können möglicherweise ernste Unannehmlichkeiten oder Belastungen für den Benutzer verursachen.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt, das die Projektionsmatrix für die Ansicht repräsentiert. Die Projektionsmatrix für die Ansicht jedes Auges wird verwendet, um sicherzustellen, dass der richtige Bereich der Szene jedem Auge präsentiert wird, um eine glaubwürdige 3D-Szene zu erstellen, ohne Unbehagen für den Benutzer zu verursachen.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
