---
title: "HTMLVideoElement: videoWidth-Eigenschaft"
short-title: videoWidth
slug: Web/API/HTMLVideoElement/videoWidth
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoWidth`**-Eigenschaft des {{domxref("HTMLVideoElement")}}-Interfaces gibt die [intrinsische Breite](/de/docs/Web/API/HTMLVideoElement/videoHeight#about_intrinsic_width_and_height) des Videos an, ausgedrückt in CSS-Pixeln. Einfach ausgedrückt ist dies die Breite des Mediums in seiner natürlichen Größe.

Für weitere Details siehe [`HTMLVideoElement.videoHeight` > Über intrinsische Breite und Höhe](/de/docs/Web/API/HTMLVideoElement/videoHeight#about_intrinsic_width_and_height).

## Wert

Ein Ganzzahlwert, der die intrinsische Breite des Videos in CSS-Pixeln angibt. Wenn der {{domxref("HTMLMediaElement.readyState", "readyState")}} des Elements `HTMLMediaElement.HAVE_NOTHING` ist, beträgt der Wert dieser Eigenschaft 0, da weder Video- noch Poster-Frame-Größeninformationen verfügbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
