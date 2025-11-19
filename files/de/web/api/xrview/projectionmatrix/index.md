---
title: "XRView: Eigenschaft projectionMatrix"
short-title: projectionMatrix
slug: Web/API/XRView/projectionMatrix
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`projectionMatrix`** der Schnittstelle [`XRView`](/de/docs/Web/API/XRView) gibt die Projektionsmatrix an, die auf die zugrunde liegende Ansicht angewendet werden soll. Dies sollte verwendet werden, um Perspektive in alles im Szenenbild zu integrieren, um sicherzustellen, dass das Ergebnis mit dem übereinstimmt, was das Auge zu sehen erwartet.

> [!NOTE]
> Das Versäumnis, eine korrekte Perspektive anzuwenden, oder Inkonsistenzen in der Perspektive können möglicherweise zu ernsthafter Unbehaglichkeit oder Angst beim Benutzer führen.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt, das die Projektionsmatrix für die Ansicht darstellt. Die Projektionsmatrix für die Ansicht jedes Auges wird verwendet, um sicherzustellen, dass der richtige Bereich der Szene jedem Auge präsentiert wird, um eine glaubhafte 3D-Szene zu erzeugen, ohne dass dies Unbehagen für den Benutzer verursacht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
