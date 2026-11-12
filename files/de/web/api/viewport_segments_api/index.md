---
title: Viewport Segments API
slug: Web/API/Viewport_segments_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("Viewport Segments API")}}{{seecompattable}}

Die **Viewport Segments API** ermöglicht es Entwicklern, mit CSS und JavaScript auf die Position und Abmessungen logisch getrennter Viewport-Segmente zuzugreifen. _Viewport-Segmente_ entstehen, wenn der Viewport durch ein oder mehrere Hardwaremerkmale geteilt wird, etwa durch eine Falte oder ein Scharnier zwischen getrennten Displays. Mit der Viewport Segments API können Entwickler responsive Designs erstellen, die für unterschiedliche Größen und Anordnungen von Viewport-Segmenten optimiert sind.

## Konzepte und Verwendung

Geräte mit mehreren Displays, die als verschiedene Segmente einer gemeinsamen Anzeigefläche dienen sollen – etwa Smartphones mit faltbarem Bildschirm oder Scharnier –, stellen Entwickler vor besondere Herausforderungen bei der Gestaltung. Sie können Ihr Layout für die Anzeigefläche als Ganzes optimieren. Doch wie stellen Sie sicher, dass Designelemente auf die verschiedenen Segmente passen und nicht in zwei Teile getrennt werden? Und wie verhindern Sie, dass Inhalte durch die physische Falte oder Verbindungsstelle verdeckt werden?

Es kann wichtig sein zu wissen, ob der Bildschirm eines Benutzergeräts eine Falte oder Verbindungsstelle hat, wie groß die verschiedenen Segmente sind, ob sie gleich groß sind und wie sie angeordnet sind (nebeneinander oder übereinander). Die Viewport Segments API ermöglicht den Zugriff auf Informationen über segmentierte Geräte mit CSS- und JavaScript-Funktionen. Diese geben Aufschluss über die Position und Abmessungen jedes Viewport-Segments innerhalb einer Anzeigefläche. Dazu gehören {{cssxref("@media")}}-Features, mit denen sich unterschiedliche horizontale und vertikale Anordnungen erkennen lassen.

Eine Erklärung der Funktionsweise der API finden Sie unter [Die Viewport Segments API verwenden](/de/docs/Web/API/Viewport_segments_API/Using).

## CSS-Features

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}-`@media`-Feature
  - : Erkennt, ob das Gerät eine bestimmte Anzahl horizontal angeordneter Viewport-Segmente hat.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}-`@media`-Feature
  - : Erkennt, ob das Gerät eine bestimmte Anzahl vertikal angeordneter Viewport-Segmente hat.
- [Umgebungsvariablen für Viewport-Segmente](/de/docs/Web/CSS/Reference/Values/env#viewport-segment-width)
  - : Diese [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using) ermöglichen den Zugriff auf die Kantenkoordinaten und Abmessungen jedes Viewport-Segments.

## Schnittstellen

- [`Viewport`](/de/docs/Web/API/Viewport)
  - : Repräsentiert den Viewport des Geräts. Bietet Zugriff auf die Eigenschaft [`Viewport.segments`](/de/docs/Web/API/Viewport/segments), die ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurückgibt. Diese repräsentieren die Position und Abmessungen jedes Viewport-Segments innerhalb einer segmentierten Anzeigefläche.

### Erweiterungen anderer Schnittstellen

- [`Window.viewport`](/de/docs/Web/API/Window/viewport)
  - : Gibt eine `Viewport`-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Geräte-Viewports bereitstellt.

## Beispiele

Ein vollständiges Beispiel für die Verwendung der oben genannten Funktionen finden Sie in der [Demo zur Viewport Segments API](https://mdn.github.io/dom-examples/viewport-segments-api/).

Sehen Sie sich die Demo nach Möglichkeit auf einem faltbaren Gerät an. Aktuelle Entwicklertools für Browser können faltbare Geräte emulieren, bilden aber die verschiedenen physischen Segmente nicht nach.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Viewport Segments API verwenden](/de/docs/Web/API/Viewport_segments_API/Using)
- [CSSOM View API](/de/docs/Web/API/CSSOM_view_API)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Modul für CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables)
- [Origin Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
