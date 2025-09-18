---
title: Viewport Segments API
slug: Web/API/Viewport_segments_API
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

{{DefaultAPISidebar("Viewport segments API")}}{{seecompattable}}

Die **Viewport Segments API** ermöglicht Entwicklern den Zugriff auf die Position und Abmessungen von logisch getrennten Viewport-Segmenten mithilfe von CSS und JavaScript. _Viewport-Segmente_ entstehen, wenn der Viewport durch eine oder mehrere Hardware-Funktionen wie ein Falz oder ein Scharnier zwischen separaten Displays geteilt wird. Mit der Viewport Segments API können Entwickler responsive Designs erstellen, die für unterschiedliche Größen und Anordnungen von Viewport-Segmenten optimiert sind.

## Konzepte und Nutzung

Geräte mit mehreren Displays, die als verschiedene Segmente derselben Anzeigefläche fungieren sollen (man denke an faltbare oder scharniergebundene Smartphones), stellen Entwickler vor einige einzigartige Designherausforderungen. Sie können Ihr Layout für das Display als Ganzes optimieren, aber wie können Sie sicherstellen, dass Designelemente genau auf die unterschiedlichen Segmente passen und nicht in zwei Teile zerschnitten werden? Und wie können Sie verhindern, dass Inhalte durch den physischen Falz/die Verbindung verdeckt werden?

Es kann wichtig sein zu wissen, ob der Bildschirm des Geräts eines Nutzers einen Falz oder eine Verbindung hat, wie groß die verschiedenen Segmente sind, ob sie gleich groß sind und wie die Segmente ausgerichtet sind (nebeneinander oder übereinander). Die Viewport Segments API ermöglicht den Zugriff auf die segmentierten Geräteinformationen des Nutzers mit CSS- und JavaScript-Features, die Zugriff auf die Position und Abmessungen jedes Viewport-Segments innerhalb eines Displays bieten, einschließlich {{cssxref("@media")}}-Features zur Erkennung unterschiedlicher horizontaler und vertikaler Bereichslayouts.

Für eine Erklärung, wie die API funktioniert, siehe [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using).

## Schnittstellen

- [`Viewport`](/de/docs/Web/API/Viewport)
  - : Repräsentiert den Viewport des Geräts. Bietet Zugriff auf die [`Viewport.segments`](/de/docs/Web/API/Viewport/segments)-Eigenschaft, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurückgibt, die die Position und Abmessungen jedes Viewport-Segments innerhalb eines segmentierten Displays darstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Window.viewport`](/de/docs/Web/API/Window/viewport)
  - : Gibt eine `Viewport`-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Viewports des Geräts bereitstellt.

## CSS-Funktionen

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media`-Feature
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von horizontal ausgerichteten Viewport-Segmenten hat.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media`-Feature
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von vertikal ausgerichteten Viewport-Segmenten hat.
- [Viewport-Segment-Umgebungsvariablen](/de/docs/Web/CSS/env#viewport-segment-width)
  - : Diese [Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables) bieten Zugriff auf die Randkoordinaten und Abmessungen jedes Viewport-Segments.

## Beispiele

Ein vollständiges Beispiel zur Demonstration der Nutzung der oben genannten Funktionen finden Sie in der [Viewport Segment API-Demo](https://mdn.github.io/dom-examples/viewport-segment-api/).

Nach Möglichkeit sollten Sie die Demo auf einem faltbaren Gerät ansehen. Aktuelle Entwicklertools der Browser erlauben die Emulation faltbarer Geräte, beinhalten aber keine Emulation der verschiedenen physischen Segmente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using)
- [Viewport API](/de/docs/Web/API/Viewport_API)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- [Herkunftstest für faltbare APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
