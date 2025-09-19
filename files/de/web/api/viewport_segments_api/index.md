---
title: Viewport Segments API
slug: Web/API/Viewport_segments_API
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{DefaultAPISidebar("Viewport Segments API")}}{{seecompattable}}

Die **Viewport Segments API** ermöglicht es Entwicklern, die Position und Abmessungen logisch getrennter Viewport-Segmente mittels CSS und JavaScript zu ermitteln. _Viewport-Segmente_ werden erstellt, wenn der Viewport durch eine oder mehrere Hardware-Eigenschaften wie beispielsweise ein Falz oder ein Scharnier zwischen getrennten Anzeigen geteilt wird. Mit der Viewport Segments API können Entwickler responsive Designs erstellen, die für unterschiedliche Größen und Anordnungen von Viewport-Segmenten optimiert sind.

## Konzepte und Verwendung

Geräte mit mehreren Anzeigen, die als unterschiedliche Segmente derselben Anzeigefläche fungieren sollen (denken Sie an klappbare oder klappbare Smartphone-Bildschirme), stellen Entwickler vor einzigartige Designherausforderungen. Sie können Ihr Layout für die Anzeige als eine Einheit optimieren, aber wie können Sie sicherstellen, dass Designelemente genau auf den verschiedenen Segmenten platzieren und nicht in zwei Teile geschnitten werden? Und wie können Sie verhindern, dass Inhalte durch den physischen Falz oder die Verbindung verdeckt werden?

Es kann wichtig sein zu wissen, ob der Bildschirm eines Benutzergeräts einen Falz oder eine Verbindung hat, welche Größe die verschiedenen Segmente haben, ob sie gleich groß sind und wie die Ausrichtung der Segmente ist (ob sie nebeneinander oder übereinander sind). Die Viewport Segments API ermöglicht den Zugriff auf die segmentierten Geräteinformationen des Benutzers mit CSS- und JavaScript-Funktionen, die Zugang zur Position und den Abmessungen jedes Viewport-Segments innerhalb einer Anzeige bieten, einschließlich {{cssxref("@media")}}-Funktionen, um unterschiedliche horizontale und vertikale Layouts zu erkennen.

Eine Erklärung, wie die API funktioniert, finden Sie unter [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using).

## Schnittstellen

- [`Viewport`](/de/docs/Web/API/Viewport)
  - : Repräsentiert den Viewport des Geräts. Bietet Zugriff auf die [`Viewport.segments`](/de/docs/Web/API/Viewport/segments) Eigenschaft, die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect) Objekten zurückgibt, welche die Position und Abmessungen jedes Viewport-Segments innerhalb einer segmentierten Anzeige darstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Window.viewport`](/de/docs/Web/API/Window/viewport)
  - : Gibt eine `Viewport`-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Viewports des Geräts bietet.

## CSS-Funktionen

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media`-Funktion
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten horizontal angeordnet hat.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media`-Funktion
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten vertikal angeordnet hat.
- [Viewport-Segment-Umgebungsvariablen](/de/docs/Web/CSS/env#viewport-segment-width)
  - : Diese [Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables) bieten Zugang zu den Randkoordinaten und Abmessungen jedes Viewport-Segments.

## Beispiele

Ein vollständiges Beispiel zur Nutzung der oben genannten Funktionen finden Sie in der [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/).

Wenn möglich, sollten Sie die Demo auf einem faltbaren Gerät ansehen. Aktuelle Browser-Entwicklertools ermöglichen die Emulation faltbarer Geräte, beinhalten jedoch keine Emulation der verschiedenen physischen Segmente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using)
- [Viewport API](/de/docs/Web/API/Viewport_API)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- [Origin Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
