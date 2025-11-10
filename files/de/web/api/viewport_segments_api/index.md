---
title: Viewport Segments API
slug: Web/API/Viewport_segments_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Viewport Segments API")}}{{seecompattable}}

Die **Viewport-Segments-API** ermöglicht es Entwicklern, mit CSS und JavaScript auf die Position und Abmessungen von logisch getrennten Viewport-Segmenten zuzugreifen. _Viewport-Segmente_ werden erstellt, wenn der Viewport durch eine oder mehrere Hardwarefunktionen wie ein Knick oder ein Scharnier zwischen separaten Displays geteilt wird. Mit der Viewport-Segments-API können Entwickler responsive Designs erstellen, die für unterschiedliche Größen und Anordnungen von Viewport-Segmenten optimiert sind.

## Konzepte und Nutzung

Geräte mit mehreren Displays, die als verschiedene Segmente derselben Displayfläche fungieren sollen (denken Sie an faltbare oder Bildschirm-Smartphones mit Scharnier), stellen Entwickler vor einige einzigartige Designherausforderungen. Sie können Ihr Layout für das Display als Einzelentity optimieren, aber wie stellen Sie sicher, dass Designelemente gut auf die verschiedenen Segmente passen und nicht in zwei Teile geschnitten werden? Und wie können Sie verhindern, dass Inhalte vom physischen Falz/Verbindung verdeckt werden?

Es kann wichtig sein zu wissen, ob der Bildschirm eines Benutzergeräts einen Falz oder eine Verbindung hat, welche Größe die verschiedenen Segmente haben, ob sie gleich groß sind und die Ausrichtung der Segmente (ob sie nebeneinander oder oben und unten angeordnet sind). Die Viewport-Segments-API ermöglicht den Zugriff auf die segmentierten Geräteinformationen des Benutzers mit CSS- und JavaScript-Funktionen, die den Zugriff auf die Position und Abmessungen jedes Viewport-Segments innerhalb eines Displays bieten, einschließlich {{cssxref("@media")}}-Funktionen, um verschiedene horizontale und vertikale Region-Layouts zu erkennen.

Für eine Erklärung, wie die API funktioniert, siehe [Verwendung der Viewport-Segments-API](/de/docs/Web/API/Viewport_segments_API/Using).

## Schnittstellen

- [`Viewport`](/de/docs/Web/API/Viewport)
  - : Repräsentiert den Viewport des Geräts. Bietet Zugriff auf die [`Viewport.segments`](/de/docs/Web/API/Viewport/segments)-Eigenschaft, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurückgibt, die die Position und Abmessungen jedes Viewport-Segments innerhalb eines segmentierten Displays darstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Window.viewport`](/de/docs/Web/API/Window/viewport)
  - : Gibt eine `Viewport`-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Viewports des Geräts bietet.

## CSS-Funktionen

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media`-Funktion
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von horizontal angeordneten Viewport-Segmenten hat.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media`-Funktion
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von vertikal angeordneten Viewport-Segmenten hat.
- [Viewport-Segment-Umgebungsvariablen](/de/docs/Web/CSS/Reference/Values/env#viewport-segment-width)
  - : Diese [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using) bieten Zugriff auf die Randkoordinaten und Abmessungen jedes Viewport-Segments.

## Beispiele

Ein vollständiges Beispiel, das die Verwendung der oben genannten Funktionen demonstriert, finden Sie im [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/).

Wenn möglich, sollten Sie die Demo auf einem faltbaren Gerät ansehen. Aktuelle Entwicklerwerkzeuge des Browsers ermöglichen die Emulation faltbarer Geräte, beinhalten jedoch keine Emulation der verschiedenen physischen Segmente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Viewport-Segments-API](/de/docs/Web/API/Viewport_segments_API/Using)
- [Viewport-API](/de/docs/Web/API/Viewport_API)
- [Device Posture-API](/de/docs/Web/API/Device_Posture_API)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables)-Modul
- [Origin-Test für Foldable-APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
