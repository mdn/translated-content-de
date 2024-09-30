---
title: "HTMLVideoElement: videoWidth-Eigenschaft"
short-title: videoWidth
slug: Web/API/HTMLVideoElement/videoWidth
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoWidth`**-Eigenschaft der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle gibt die [intrinsische Breite](/de/docs/Web/API/HTMLVideoElement/videoHeight#about_intrinsic_width_and_height) des Videos in CSS-Pixeln an. Einfach ausgedrückt ist dies die Breite des Mediums in seiner natürlichen Größe.

Weitere Details finden Sie unter [`HTMLVideoElement.videoHeight` > Über intrinsische Breite und Höhe](/de/docs/Web/API/HTMLVideoElement/videoHeight#about_intrinsic_width_and_height).

## Wert

Ein ganzzahliger Wert, der die intrinsische Breite des Videos in CSS-Pixeln angibt. Wenn der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) des Elements `HTMLMediaElement.HAVE_NOTHING` ist, dann beträgt der Wert dieser Eigenschaft 0, da weder Video- noch Posterbild-Größeninformationen verfügbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
