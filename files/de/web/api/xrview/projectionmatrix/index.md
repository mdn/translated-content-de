---
title: "XRView: projectionMatrix-Eigenschaft"
short-title: projectionMatrix
slug: Web/API/XRView/projectionMatrix
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`projectionMatrix`**-Eigenschaft des {{domxref("XRView")}}-Interfaces gibt die Projektionsmatrix an, die auf die zugrunde liegende Ansicht angewendet werden soll. Dies sollte verwendet werden, um Perspektiven in alles im Szenenbild zu integrieren, um sicherzustellen, dass das Ergebnis mit dem übereinstimmt, was das Auge erwartet zu sehen.

> [!NOTE]
> Das Versäumnis, eine korrekte Perspektive anzuwenden, oder Ungereimtheiten in der Perspektive können möglicherweise zu erheblichen Unannehmlichkeiten oder Belastungen für den Benutzer führen.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt, das die Projektionsmatrix für die Ansicht repräsentiert. Die Projektionsmatrix für die Ansicht jedes Auges wird verwendet, um sicherzustellen, dass der richtige Bereich der Szene jedem Auge präsentiert wird, um eine glaubwürdige 3D-Szene zu schaffen, ohne dem Benutzer Unannehmlichkeiten zu bereiten.

## Beispiele

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
