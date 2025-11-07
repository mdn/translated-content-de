---
title: Viewport Segments API
slug: Web/API/Viewport_segments_API
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{DefaultAPISidebar("Viewport Segments API")}}{{seecompattable}}

Die **Viewport Segments API** erlaubt Entwicklern, die Position und Abmessungen von logisch getrennten Viewport-Segmenten mittels CSS und JavaScript zu ermitteln. _Viewport-Segmente_ entstehen, wenn der Viewport durch eine oder mehrere Hardware-Features wie einem Falz oder einem Scharnier zwischen separaten Displays geteilt wird. Mit der Viewport Segments API können Entwickler responsive Designs erstellen, die auf verschiedene Viewport-Segmentgrößen und -anordnungen optimiert sind.

## Konzepte und Nutzung

Geräte mit mehreren Displays, die als unterschiedliche Segmente derselben Displayfläche fungieren (denken Sie an faltbare oder mit Scharnieren versehene Smartphones), stellen Entwickler vor einzigartige Designherausforderungen. Sie können Ihr Layout für das Display als eine Einheit optimieren, aber wie können Sie sicherstellen, dass Designelemente auf die verschiedenen Segmente passen und nicht in zwei Teile zerschnitten werden? Und wie können Sie verhindern, dass Inhalte durch den physischen Falz/Verbindung verdeckt werden?

Es kann wichtig sein zu wissen, ob der Bildschirm eines Benutzergeräts einen Falz oder eine Verbindung hat, welche Größe die verschiedenen Segmente haben, ob sie gleich groß sind und die Ausrichtung der Segmente (ob sie nebeneinander oder von oben nach unten sind). Die Viewport Segments API ermöglicht den Zugriff auf die segmentierten Geräteinformationen des Benutzers mit CSS- und JavaScript-Funktionen, die Zugriff auf die Position und Abmessungen jedes Viewport-Segments innerhalb eines Displays bieten, einschließlich {{cssxref("@media")}}-Features zur Erkennung verschiedener horizontaler und vertikaler Region-Layouts.

Eine Erklärung, wie die API funktioniert, finden Sie unter [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using).

## Schnittstellen

- [`Viewport`](/de/docs/Web/API/Viewport)
  - : Repräsentiert den Viewport des Geräts. Bietet Zugriff auf die [`Viewport.segments`](/de/docs/Web/API/Viewport/segments) Eigenschaft, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurückgibt, die die Position und Abmessungen jedes Viewport-Segments innerhalb eines segmentierten Displays darstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Window.viewport`](/de/docs/Web/API/Window/viewport)
  - : Gibt eine `Viewport` Objektinstanz zurück, die Informationen über den aktuellen Zustand des Gerätes Viewport bietet.

## CSS-Funktionen

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media`-Feature
  - : Erkennt, ob das Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die horizontal angeordnet sind.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media`-Feature
  - : Erkennt, ob das Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die vertikal angeordnet sind.
- [Viewport-Segment-Umgebungsvariablen](/de/docs/Web/CSS/Reference/Values/env#viewport-segment-width)
  - : Diese [Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables) bieten Zugriff auf die Randkoordinaten und Abmessungen jedes Viewport-Segments.

## Beispiele

Ein vollständiges Beispiel zur Nutzung der oben genannten Funktionen finden Sie im [Viewport segment API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/).

Wenn möglich, sollten Sie das Demo auf einem faltbaren Gerät ansehen. Aktuelle Entwicklertools von Browsern ermöglichen die Emulation von faltbaren Geräten, beinhalten jedoch nicht die Emulation der unterschiedlichen physischen Segmente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using)
- [Viewport API](/de/docs/Web/API/Viewport_API)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- [Origin-Prozess für faltbare APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
