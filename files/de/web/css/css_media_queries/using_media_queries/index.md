---
title: Verwenden von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

**Media Queries** ermöglichen es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (wie Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder Ausrichtung, {{glossary("aspect ratio")}}, Browser-{{glossary("viewport")}}-Breite oder -Höhe, Benutzerpräferenzen wie reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingte Anwendung von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [at-rules](/de/docs/Web/CSS/At-rule).
- Anvisieren spezifischer Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML) Elemente mit den `media=` oder `sizes="` Attributen.
- [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mit den Methoden {{domxref("Window.matchMedia()")}} und {{domxref("EventTarget.addEventListener()")}}.

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS's `@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Media Feature_-Ausdrücken, die optional auf verschiedene Weise mittels _logischer Operatoren_ kombiniert werden können. Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die übergeordnete Kategorie von Geräten, für die eine Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (wird als `all` angenommen), außer wenn der logische Operator `only` verwendet wird.

- [Media Features](/de/docs/Web/CSS/@media#media_features) beschreiben ein spezifisches Merkmal des {{glossary("user agent")}}, des Ausgabegeräts oder der Umgebung:

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

  Zum Beispiel ermöglicht die {{cssxref("@media/hover", "hover")}}-Funktion eine Abfrage, um zu überprüfen, ob das Gerät das Überfahren von Elementen unterstützt. Media Feature-Ausdrücke testen für ihre Existenz oder ihren Wert und sind völlig optional. Jedes Media Feature-Ausdruck muss von Klammern umgeben sein.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and` und `only`. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

Eine Media Query wird als `true` berechnet, wenn der Medientyp (wenn angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird _und_ alle Media Feature-Ausdrücke als wahr berechnet werden. Abfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query, die an seinen {{HTMLElement("link")}}-Tag angehängt ist, [wird trotzdem heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), auch wenn die Abfrage `false` zurückgibt. Der Download wird stattfinden, aber die Priorität des Downloads wird viel niedriger sein. Seine Inhalte werden jedoch nicht angewendet, es sei denn, und bis das Ergebnis der Abfrage auf `true` ändert.
> Sie können in Tomayacs Blog nachlesen, warum dies passiert: [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Anvisieren von Medientypen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts. Obwohl Websites in der Regel für Bildschirme entwickelt werden, möchten Sie möglicherweise Stile erstellen, die spezielle Geräte wie Drucker oder audio-basierte Screenreader ansprechen. Zum Beispiel zielt dieses CSS auf Drucker ab:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte anvisieren. Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte anzusprechen:

```css
@media screen, print {
  /* … */
}
```

Siehe [Medientypen](/de/docs/Web/CSS/@media#media_types) für die Liste der verfügbaren Medientypen. Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen abgelehnt, wobei nur `screen`, `print` und `all` verbleiben. Um spezifischere Attribute anzuvisieren, verwenden Sie stattdessen _Media Features_.

## Anvisieren von Media Features

Media Features beschreiben die spezifischen Merkmale eines bestimmten {{glossary("user agent")}}, Ausgabegeräts oder einer Umgebung. Beispielsweise können Sie spezifische Stile für Breitbildmonitore, Computer, die Mäuse verwenden, oder Geräte anwenden, die in schwach beleuchteten Bedingungen verwendet werden. Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingangsmechanismus des Benutzers (wie eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Media Features sind entweder Bereichs- oder diskrete Merkmale.

_Diskrete Merkmale_ nehmen ihren Wert aus einer {{glossary("enumerated")}} Menge möglicher Schlüsselwortwerte. Zum Beispiel akzeptiert das diskrete `orientation`-Feature entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichsmerkmale_ können mit "min-" oder "max-" vorangestellt werden, um "Mindestbedingungs"- oder "Höchstbedingungs"-Beschränkungen auszudrücken. Zum Beispiel wird dieses CSS nur dann angewendet, wenn die {{glossary("viewport")}}-Breite Ihres Browsers gleich oder kleiner als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Dies kann auch so geschrieben werden:

```css
@media (width <= 1250px) {
  /* … */
}
```

Bei Media Query-Bereichsmerkmalen können Sie entweder die inklusiven `min-` und `max-` Präfixe verwenden oder die prägnanteren Bereichssyntax-Operatoren `<=` und `=>`.

Die folgenden Media Queries sind gleichwertig:

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

Wenn Sie eine Media Feature-Abfrage ohne Angabe eines Werts erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Merkmals nicht 0 oder `none` ist. Zum Beispiel wird dieses CSS auf jedes Gerät mit einem Farbdisplay angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Merkmal nicht auf das Gerät anwendbar ist, auf dem der Browser läuft, sind Ausdrücke, die dieses Media Feature betreffen, immer falsch.

Für mehr [Media Feature](/de/docs/Web/CSS/@media#media_features) Beispiele, sehen Sie sich bitte die Referenzseite für jedes spezifische Merkmal an.

## Erstellen komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`. Außerdem können Sie mehrere Media Queries in eine _komma-separierte Liste_ kombinieren; dies ermöglicht es Ihnen, dieselben Stile in verschiedenen Situationen anzuwenden.

Im vorherigen Beispiel sahen wir den `and` Operator, der verwendet wurde, um einen Medientyp mit einem Media Feature zu gruppieren. Der `and` Operator kann auch mehrere Media Features zu einer einzigen Media Query kombinieren. Der `not` Operator negiert hingegen eine Media Query und kehrt im Wesentlichen ihre normale Bedeutung um. Der `only` Operator verhindert, dass ältere Browser die Stile anwenden.

> [!NOTE]
> In den meisten Fällen wird der `all` Medientyp standardmäßig verwendet, wenn kein anderer Typ angegeben ist. Wenn Sie jedoch den `only` Operator verwenden, müssen Sie einen Medientyp explizit angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombinieren mehrerer Typen oder Merkmale

Das `and` Schlüsselwort kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features. Dieses Beispiel kombiniert zwei Media Features, um die Stile auf landschaftsorientierte Geräte mit einer Breite von mindestens 30 ems zu beschränken:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Media Features mit dem `screen` Medientyp verkettet:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen mehrerer Abfragen

Sie können eine komma-separierte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers einem von verschiedenen Medientypen, Merkmalen oder Zuständen entspricht.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn sich das Browser-Viewport im Hochformat befindet (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer in ein PDF druckt und die Seitenhöhe 800px beträgt, gibt die Media Query `true` zurück, weil die erste Abfragekomponente — die überprüft, ob der Viewport eine Höhe von `680px` oder mehr hat — wahr ist. Ebenso, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, gibt die Media Query `true` zurück, weil die zweite Abfragekomponente wahr ist.

In einer komma-separierten Liste von Media Queries enden die einzelnen Media Queries beim Komma oder, im Fall der letzten Media Query in der Liste, bei der öffnenden geschweiften Klammer (`{`).

### Umkehren der Bedeutung einer Abfrage

Das `not` Schlüsselwort kehrt die Bedeutung einer einzelnen Media Query um. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles _außer_ gedruckte Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not`, ohne Klammern, negiert alle Merkmale innerhalb der Media Query, in der es enthalten ist. Das bedeutet, dass in einer komma-separierten Liste von Media Queries jedes `not` auf die einzelne Abfrage angewendet wird, in der es enthalten ist, und auf _alle_ Merkmale innerhalb dieser einzelnen Abfrage anwendet. In diesem Beispiel gilt das `not` für die erste Media Query, die beim ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Die obige Abfrage wird so ausgewertet:

```css
@media (not (screen and (color))), print and (color) {
  /* … */
}
```

Beide Beispiele sind gültig. Medienbedingungen können gruppiert werden, indem sie in Klammern (`()`) eingeschlossen werden. Diese Gruppen können dann innerhalb einer Bedingung genauso wie eine einzelne Media Query verschachtelt werden.

Das `not` wird zuletzt in einer Media Query ausgewertet, was bedeutet, dass es auf die gesamte Media Query angewendet wird, nicht auf ein einzelnes Merkmal innerhalb einer Abfrage, als ob eine öffnende Klammer sofort nach dem `not` hinzugefügt und am Ende der Media Query geschlossen würde.

Die folgende Abfrage:

```css
@media not all and (monochrome) {
  /* … */
}
```

wird so ausgewertet:

```css
@media not (all and (monochrome)) {
  /* … */
}
```

Es wird nicht so ausgewertet:

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

Um ein einzelnes Merkmal innerhalb einer Media Query zu negieren, verwenden Sie Klammern. Das Einbeziehen eines `not` und eines Media Features in Klammern begrenzt die Komponenten der Abfrage, die negiert werden.

In diesem Beispiel negieren wir das `hover` Media Feature, aber nicht den `all` Medientyp:

```css
@media all and (not(hover)) {
  /* … */
}
```

Das `not(hover)` passt, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall gilt das `not` aufgrund der Klammern für `hover`, aber nicht für `all`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das `only` Schlüsselwort verhindert, dass ältere Browser, die Media Queries mit Media Features nicht unterstützen, die angegebenen Stile anwenden. _Es hat keine Wirkung auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Merkmale mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung unter mehr als einem Merkmal zu testen, und `true` zurückgeben, wenn eines der Merkmale wahr ist. Zum Beispiel testet die folgende Abfrage auf Geräte, die ein monochromes Display oder Hover-Fähigkeit haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

## Siehe auch

- [@media](/de/docs/Web/CSS/@media)
- [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Testing media queries programmatically](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS Animations Between Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla Media Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit Media Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
