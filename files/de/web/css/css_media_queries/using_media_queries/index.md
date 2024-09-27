---
title: Verwendung von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

**Media Queries** ermöglichen es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (wie z.B. Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder Ausrichtung, [Seitenverhältnis](/de/docs/Glossary/aspect_ratio), Browser-[Viewport](/de/docs/Glossary/viewport)-Breite oder -Höhe, Benutzerpräferenzen wie reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingte Anwendung von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Regeln](/de/docs/Web/CSS/At-rule).
- Zielgerichtete Medienauswahl für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}, und andere [HTML](/de/docs/Web/HTML) Elemente mit den `media=` oder `sizes="` Attributen.
- [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mit den Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden für Anschauungszwecke das CSS-`@media`, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Medienmerkmals_ausdrücken, die optional auf verschiedene Weise durch \_logische Operatoren_ kombiniert werden können.
Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die breite Kategorie des Geräts, für das die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (standardmäßig `all`), außer wenn der logische Operator `only` verwendet wird.

- [Medienmerkmale](/de/docs/Web/CSS/@media#media_features) beschreiben eine spezifische Eigenschaft des [User Agents](/en-US/Docs/Glossary/user_agent), des Ausgabegeräts oder der Umgebung:

  - {{cssxref("@media/any-hover", "any-hover")}}
  - {{cssxref("@media/any-pointer", "any-pointer")}}
  - {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - {{cssxref("@media/color", "color")}}
  - {{cssxref("@media/color-gamut", "color-gamut")}}
  - {{cssxref("@media/color-index", "color-index")}}
  - {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}
  - {{cssxref("@media/display-mode", "display-mode")}}
  - {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - {{cssxref("@media/forced-colors", "forced-colors")}}
  - {{cssxref("@media/grid", "grid")}}
  - {{cssxref("@media/height", "height")}}
  - {{cssxref("@media/hover", "hover")}}
  - {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - {{cssxref("@media/monochrome", "monochrome")}}
  - {{cssxref("@media/orientation", "orientation")}}
  - {{cssxref("@media/overflow-block", "overflow-block")}}
  - {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - {{cssxref("@media/pointer", "pointer")}}
  - {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - {{cssxref("@media/resolution", "resolution")}}
  - {{cssxref("@media/scripting", "scripting")}}
  - {{cssxref("@media/update", "update")}}
  - {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - {{cssxref("@media/width", "width")}}.

  Zum Beispiel erlaubt das {{cssxref("@media/hover", "hover")}}-Merkmal einer Query zu überprüfen, ob das Gerät das Schweben über Elemente unterstützt.
  Medienmerkmalsausdrücke testen auf ihre Anwesenheit oder ihren Wert und sind völlig optional.
  Jedes Medienmerkmalsausdruck muss von Klammern umgeben sein.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and` und `only`.
  Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie durch Kommas trennen.

Eine Media Query ergibt `true`, wenn der Medientyp (falls angegeben) mit dem Gerät, auf dem ein Dokument angezeigt wird, übereinstimmt _und_ alle Medienmerkmalsausdrücke als wahr ausgewertet werden.
Anfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query, das an sein {{HTMLElement("link")}}-Tag angehängt ist, [wird trotzdem heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), selbst wenn die Anfrage `false` ergibt. Der Download erfolgt, allerdings wird die Priorität des Downloads viel niedriger sein.
> Dennoch wird sein Inhalt nur angewendet, wenn und wann das Ergebnis der Anfrage `true` wird.
> Sie können in Tomayacs Blog nachlesen, warum dies geschieht: [Warum Browser Stylesheets mit nicht übereinstimmenden Media Queries herunterladen](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Zielgerichtete Medientypen

Medientypen beschreiben die allgemeine Kategorie eines gegebenen Geräts.
Obwohl Websites häufig mit Blick auf Bildschirme entworfen werden, könnten Sie Stile erstellen wollen, die auf spezielle Geräte wie Drucker oder audio-basierte Screenreader abzielen.
Zum Beispiel zielt dieses CSS auf Drucker ab:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Gerätezielgruppen festlegen.
Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte zu adressieren:

```css
@media screen, print {
  /* … */
}
```

Siehe [Medientypen](/de/docs/Web/CSS/@media#media_types) für die Liste der verfügbaren Medientypen.
Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten der ursprünglich definierten Medientypen veraltet, wobei nur `screen`, `print` und `all` verbleiben. Um spezifischere Attribute zu adressieren, verwenden Sie stattdessen _Medienmerkmale_.

## Zielgerichtete Medienmerkmale

Medienmerkmale beschreiben die spezifischen Eigenschaften eines gegebenen [User Agents](/de/docs/Glossary/user_agent), Ausgabegeräts oder der Umgebung.
Beispielsweise können Sie bestimmte Stile auf Breitbildmonitore, Computer, die Mäuse verwenden, oder Geräte anwenden, die bei schwachen Lichtverhältnissen verwendet werden.
Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingabemechanismus des Benutzers (wie z. B. eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Medienmerkmale sind entweder Bereichs- oder diskrete Merkmale.

_Diskrete Merkmale_ nehmen ihren Wert aus einer [enumarisierten](/de/docs/Glossary/enumerated) Menge möglicher Schlüsselwortwerte. Beispielsweise akzeptiert das diskrete Merkmal `orientation` entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichsmerkmale_ können mit "min-" oder "max-" vorangestellt werden, um "Mindestbedingung" oder "Höchstbedingung" Einschränkungen auszudrücken.
Beispielsweise wird dieses CSS nur angewendet, wenn die [Viewport](/de/docs/Glossary/viewport) Breite Ihres Browsers gleich oder schmaler als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Dies kann auch wie folgt geschrieben werden:

```css
@media (width <= 1250px) {
  /* … */
}
```

Mit den Bereichsmerkmalen von Media Queries können Sie entweder die inklusiven `min-` und `max-` Präfixe oder die prägnanteren Bereichs-Syntax-Operatoren `<=` und `=>` verwenden.

Die folgenden Media Queries sind äquivalent:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

@media (30em <= width <= 50em) {
  /* … */
}
```

Die obigen Bereichsvergleiche sind inklusiv. Um den Vergleichswert nicht einzuschließen, verwenden Sie `<` und `>`.

```css
@media (30em < width < 50em) {
  /* … */
}
```

Wenn Sie eine Medienmerkmalsquery erstellen, ohne einen Wert anzugeben, werden die verschachtelten Stile verwendet, solange der Wert des Merkmals nicht 0 oder `none` ist.
Beispielsweise wird dieses CSS auf jedes Gerät mit Farbanzeige angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Merkmal nicht auf das Gerät zutrifft, auf dem der Browser ausgeführt wird, sind Ausdrücke, die dieses Medienmerkmal betreffen, immer falsch.

Für weitere Beispiele zu [Medienmerkmalen](/de/docs/Web/CSS/@media#media_features) sehen Sie sich bitte die Referenzseite für jedes spezifische Merkmal an.

## Erstellen komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`.
Darüber hinaus können Sie mehrere Media Queries in eine _komma-separierte Liste_ kombinieren; dies ermöglicht es Ihnen, dieselben Stile in verschiedenen Situationen anzuwenden.

Im vorherigen Beispiel sahen wir den `and` Operator, der verwendet wird, um einen Medien-_typ_ mit einem Medien-_merkmal_ zu gruppieren.
Der `and` Operator kann auch mehrere Medienmerkmale zu einer einzigen Media Query kombinieren. Der `not` Operator negiert eine Media Query und kehrt im Grunde ihre normale Bedeutung um.
Der `only` Operator verhindert, dass ältere Browser die Stile anwenden.

> [!NOTE]
> In den meisten Fällen wird der Medientyp `all` standardmäßig verwendet, wenn kein anderer Typ angegeben ist.
> Wenn Sie jedoch den Operator `only` verwenden, müssen Sie explizit einen Medientyp angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombination mehrerer Typen oder Merkmale

Das `and` Schlüsselwort kombiniert ein Medienmerkmal mit einem Medientyp _oder_ anderen Medienmerkmalen.
Dieses Beispiel kombiniert zwei Medienmerkmale, um Stile auf Geräte mit Querformat und einer Breite von mindestens 30 Ems zu beschränken:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit Bildschirm zu beschränken, können Sie die Medienmerkmale mit dem Medientyp `screen` verketten:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen für mehrere Abfragen

Sie können eine komma-separierte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem der verschiedenen Medientypen, -merkmale oder -zustände übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die Blockstile werden angewendet, wenn entweder das Benutzergerät eine Höhe von 680px oder mehr hat _oder_ wenn das Browser-Viewport im Hochformat ist (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer in eine PDF druckt und die Seitenhöhe 800px beträgt, gibt die Media Query `true` zurück, da die erste Abfragekomponente — die testet, ob der Viewport eine Höhe von `680px` oder mehr hat — wahr ist.
Ebenso, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, gibt die Media Query `true` zurück, weil die zweite Abfragekomponente wahr ist.

In einer komma-separierten Liste von Media Queries enden die einzelnen Media Queries am Komma oder, im Fall der letzten Media Query in der Liste, am öffnenden Klammer (`{`).

### Umkehren der Bedeutung einer Abfrage

Das `not` Schlüsselwort kehrt die Bedeutung einer einzelnen Media Query um. Beispielsweise werden die CSS-Stile in dieser Media Query auf alles _außer_ Druckmedien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not`, ohne Klammern, negiert alle Merkmale innerhalb der Media Query, in der es enthalten ist. Das bedeutet, dass in einer komma-separierten Liste von Media Queries jedes `not` auf die einzelne Abfrage angewendet wird, in der es enthalten ist und auf _alle_ Merkmale innerhalb dieser einzelnen Abfrage zutrifft. In diesem Beispiel wird `not` auf die erste Media Query angewendet, die mit dem ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Die obige Abfrage wird wie folgt ausgewertet:

```css
@media (not (screen and (color))), print and (color) {
  /* … */
}
```

Beide Beispiele sind gültig. Medienbedingungen können durch das Einhüllen in Klammern (`()`) gruppiert werden. Diese Gruppen können dann innerhalb einer Bedingung wie eine einzelne Media Query verschachtelt werden.

Das `not` wird zuletzt in einer Media Query ausgewertet, was bedeutet, dass es auf die gesamte Media Query angewendet wird, nicht auf ein einzelnes Merkmal innerhalb einer Abfrage, als ob nach dem `not` sofort eine öffnende Klammer hinzugefügt und am Ende der Media Query geschlossen wird.

Die folgende Abfrage:

```css
@media not all and (monochrome) {
  /* … */
}
```

wird wie folgt ausgewertet:

```css
@media not (all and (monochrome)) {
  /* … */
}
```

Sie wird nicht so ausgewertet:

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

Um ein einzelnes Merkmal innerhalb einer Media Query zu negieren, verwenden Sie Klammern. Wenn Sie ein `not` und ein Medienmerkmal in Klammern setzen, beschränken Sie die Komponenten der Abfrage, die negiert werden.

In diesem Beispiel negieren wir das `hover`-Medienmerkmal, aber nicht den Medientyp `all`:

```css
@media all and (not(hover)) {
  /* … */
}
```

Das `not(hover)` trifft zu, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall gilt das `not` durch die Klammern für `hover`, aber nicht für `all`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das `only` Schlüsselwort verhindert, dass ältere Browser, die Media Queries mit Medienmerkmalen nicht unterstützen, die angegebenen Stile anwenden.
_Es hat keinen Einfluss auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen für mehrere Merkmale mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung unter mehr als einem Merkmal zu testen, das auf `true` auflöst, wenn eines der Merkmale wahr ist.
Zum Beispiel testet die folgende Abfrage auf Geräte, die entweder ein monochromes Display oder Hovor-Fähigkeit haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

## Siehe auch

- [@media](/de/docs/Web/CSS/@media)
- [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Media Queries programmatisch testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
