---
title: Viewport Segments API
slug: Web/API/Viewport_segments_API
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{DefaultAPISidebar("Viewport Segments API")}}{{seecompattable}}

Die **Viewport Segments API** ermöglicht es Entwicklern, die Position und Abmessungen logisch getrennter Viewport-Segmente mithilfe von CSS und JavaScript zu erfassen. _Viewport-Segmente_ entstehen, wenn der Viewport durch eine oder mehrere Hardware-Eigenschaften wie ein Falz oder ein Scharnier zwischen separaten Displays unterteilt wird. Mit der Viewport Segments API können Entwickler responsive Designs erstellen, die für verschiedene Größen und Anordnungen von Viewport-Segmenten optimiert sind.

## Konzepte und Verwendung

Geräte mit mehreren Displays, die als verschiedene Segmente derselben Displayfläche fungieren sollen (denken Sie an faltbare oder klappbare Smartphones), stellen Entwickler vor einige einzigartige Designherausforderungen. Sie können Ihr Layout für das Display als eine Einheit optimieren, aber wie können Sie sicherstellen, dass Designelemente genau auf die verschiedenen Segmente passen und nicht in zwei Teile zerschnitten werden? Und wie können Sie verhindern, dass Inhalte durch den physischen Falz/Scharnier verdeckt werden?

Es kann wichtig sein zu wissen, ob der Bildschirm eines Benutzergerätes einen Falz oder eine Verbindung hat, welche Größe die verschiedenen Segmente haben, ob sie gleich groß sind und die Ausrichtung der Segmente (ob sie nebeneinander oder übereinander angeordnet sind). Die Viewport Segments API ermöglicht den Zugriff auf die segmentierten Geräteinformationen des Benutzers mit CSS und JavaScript-Funktionen, die den Zugriff auf die Position und die Abmessungen jedes Viewport-Segments innerhalb eines Displays ermöglichen, einschließlich {{cssxref("@media")}}-Funktionen zur Erkennung unterschiedlicher horizontaler und vertikaler Bereichslayouts.

Eine Erklärung, wie die API funktioniert, finden Sie unter [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using).

## Schnittstellen

- [`Viewport`](/de/docs/Web/API/Viewport)
  - : Repräsentiert den Viewport des Geräts. Bietet Zugriff auf die [`Viewport.segments`](/de/docs/Web/API/Viewport/segments)-Eigenschaft, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurückgibt, die die Position und Dimensionen jedes Viewport-Segments innerhalb eines segmentierten Displays darstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Window.viewport`](/de/docs/Web/API/Window/viewport)
  - : Gibt eine `Viewport`-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Viewports des Geräts bietet.

## CSS-Funktionen

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media`-Funktion
  - : Erkennt, ob das Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die horizontal angeordnet sind.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media`-Funktion
  - : Erkennt, ob das Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die vertikal angeordnet sind.
- [Viewport-Segment-Umgebungsvariablen](/de/docs/Web/CSS/Reference/Values/env#viewport-segment-width)
  - : Diese [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using) bieten Zugriff auf die Randkoordinaten und Dimensionen jedes Viewport-Segments.

## Beispiele

Ein vollständiges Beispiel, das die Verwendung der oben genannten Funktionen demonstriert, finden Sie in der [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/).

Wenn möglich, sollten Sie die Demo auf einem faltbaren Gerät ansehen. Aktuelle Browser-Entwicklertools ermöglichen die Simulation faltbarer Geräte, jedoch wird die Emulation der verschiedenen physischen Segmente nicht unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using)
- [CSSOM View API](/de/docs/Web/API/CSSOM_view_API)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables) Modul
- [Origin Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
