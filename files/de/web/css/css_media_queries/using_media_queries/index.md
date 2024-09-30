---
title: Verwendung von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

**Media Queries** ermöglichen es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (wie z.B. Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder -ausrichtung, [Seitenverhältnis](/de/docs/Glossary/aspect_ratio), Browser-[Viewport](/de/docs/Glossary/viewport)-Breite oder -Höhe, Benutzerpräferenzen wie der Präferenz für reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Um Stile bedingt mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Regeln](/de/docs/Web/CSS/At-rule) anzuwenden.
- Um bestimmte Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML) Elemente mit den Attributen `media=` oder `sizes="` zu tarieren.
- Um [Medienzustände zu testen und zu überwachen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mithilfe der Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS's `@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Ein Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Media-Feature_-Ausdrücken, die optional auf verschiedene Weise mit _logischen Operatoren_ kombiniert werden können.
Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die allgemeine Kategorie des Geräts, für das das Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (wird standardmäßig `all` angenommen) außer bei Verwendung des logischen Operators `only`.

- [Media-Features](/de/docs/Web/CSS/@media#media_features) beschreiben ein spezifisches Merkmal des [User-Agents](/de/docs/Glossary/user_agent), des Ausgabegeräts oder der Umgebung:

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

  Beispielsweise ermöglicht die {{cssxref("@media/hover", "hover")}}-Funktion eine Abfrage, um zu überprüfen, ob das Gerät das Hovering über Elementen unterstützt.
  Media-Feature-Ausdrücke testen auf deren Vorhandensein oder Wert und sind völlig optional.
  Jedes Media-Feature-Ausdruck muss in Klammern gesetzt werden.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu komponieren: `not`, `and`, und `only`.
  Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommata trennen.

Eine Media Query ergibt `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird _und_ alle Media-Feature-Ausdrücke als wahr berechnet werden.
Abfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein mit einer Media Query verbundenes Stylesheet im {{HTMLElement("link")}}-Tag [wird trotzdem heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), selbst wenn die Abfrage `false` ergibt, der Download erfolgt, aber die Priorität des Downloads ist wesentlich niedriger.
> Dennoch wird der Inhalt nicht angewendet, es sei denn, das Ergebnis der Abfrage wird `true`.
> Sie können in Tomayacs Blog nachlesen, warum dies passiert: [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Zielorientierung von Medientypen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts.
Obwohl Websites häufig mit Bildschirmen im Hinterkopf gestaltet werden, möchten Sie möglicherweise Stile erstellen, die auf spezielle Geräte wie Drucker oder audio-basierte Screenreader abzielen.
Zum Beispiel zielt dieses CSS auf Drucker ab:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte anvisieren.
Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte anzuvisieren:

```css
@media screen, print {
  /* … */
}
```

Siehe [Medientypen](/de/docs/Web/CSS/@media#media_types) für die Liste der verfügbaren Medientypen.
Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen veraltet, wobei nur `screen`, `print` und `all` erhalten bleiben. Um spezifischere Attribute zu zielen, verwenden Sie stattdessen _Media Features_.

## Zielorientierung von Media-Features

Media-Features beschreiben die spezifischen Merkmale eines bestimmten [User-Agents](/de/docs/Glossary/user_agent), Ausgabegeräts oder Umgebung.
Zum Beispiel können Sie spezifische Stile für Breitbildmonitore, Computer, die Mäuse verwenden, oder Geräte, die unter schlechten Lichtbedingungen verwendet werden, anwenden.
Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingabemechanismus des Benutzers (wie eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Media-Features sind entweder Bereiche oder diskret.

_Diskrete Features_ beziehen ihren Wert aus einem [aufgezählten](/de/docs/Glossary/enumerated) Satz möglicher Schlüsselwortwerte. Zum Beispiel akzeptiert das diskrete `orientation`-Feature entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichs-Features_ können mit "min-" oder "max-" vorangestellt werden, um "Mindestbedingung" oder "Höchstbedingung" Einschränkungen auszudrücken.
Zum Beispiel wird dieses CSS Stile nur anwenden, wenn die [Viewport](/de/docs/Glossary/viewport)-Breite Ihres Browsers gleich oder kleiner als 1250px ist:

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

Mit Media Query-Bereichs-Features können Sie entweder die inklusiven Präfixe `min-` und `max-` oder die knapperen Bereichs-Syntaxoperatoren `<=` und `=>` verwenden.

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

Wenn Sie eine Media-Feature-Abfrage ohne Angabe eines Wertes erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Features nicht 0 oder `none` ist.
Zum Beispiel wird dieses CSS auf jedes Gerät mit einem Farbbildschirm angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Feature nicht auf das Gerät zutrifft, auf dem der Browser ausgeführt wird, sind Ausdrücke, die dieses Media Feature beinhalten, immer falsch.

Für weitere [Media Feature-](/de/docs/Web/CSS/@media#media_features) Beispiele sehen Sie bitte die Referenzseite für jedes spezifische Feature.

## Erstellen komplexer Media Queries

Manchmal möchten Sie möglicherweise eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and`, und `only`.
Darüber hinaus können Sie mehrere Media Queries zu einer _kommagetrennten Liste_ kombinieren; dies ermöglicht es Ihnen, die gleichen Stile in verschiedenen Situationen anzuwenden.

Im vorherigen Beispiel haben wir gesehen, wie der Operator `and` verwendet wird, um einen Media _Typ_ mit einem Media _Feature_ zu gruppieren.
Der `and`-Operator kann auch mehrere Media Features zu einer einzigen Media Query kombinieren. Der Operator `not` negiert hingegen eine Media Query, indem er im Wesentlichen deren normale Bedeutung umkehrt.
Der Operator `only` verhindert, dass ältere Browser die Stile anwenden.

> [!NOTE]
> In den meisten Fällen wird der Media-Typ `all` standardmäßig verwendet, wenn kein anderer Typ angegeben ist.
> Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie explizit einen Medientyp angeben. Sie können `only screen` oder `only print` in seiner Gesamtheit sehen.

### Kombinieren mehrerer Typen oder Features

Das Schlüsselwort `and` kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features.
Dieses Beispiel kombiniert zwei Media Features, um Stile auf Geräte mit landschaftsorientierten Ausrichtungen und einer Breite von mindestens 30 em zu beschränken:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Media Features an den `screen`-Medientyp anhängen:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen mehrerer Abfragen

Sie können eine kommagetrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem der verschiedenen Medientypen, Features oder Zustände übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn das Browser-Viewport sich im Portraitmodus befindet (die Höhe des Viewports ist größer als die Breite des Viewports):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel wird die Media Query `true`, wenn der Benutzer auf ein PDF druckt und die Seitenhöhe 800px beträgt, weil die erste Abfragekomponente - die testet, ob das Viewport eine Höhe von `680px` oder mehr hat - wahr ist.
Ebenso, wenn ein Benutzer auf einem Smartphone im Portraitmodus mit einem Viewport von 480px ist, wird die Media Query `true`, weil die zweite Abfragekomponente wahr ist.

In einer kommagetrennten Liste von Media Queries enden die einzelnen Media Queries am Komma oder im Fall der letzten Media Query in der Liste am öffnenden Klammer (`{`).

### Invertieren der Bedeutung einer Abfrage

Das Schlüsselwort `not` hebt die Bedeutung einer einzelnen Media Query auf. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles angewendet, _außer_ auf gedruckte Medien:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not` ohne Klammern negiert alle Features innerhalb der Media Query, in der es enthalten ist. Das bedeutet, dass in einer kommagetrennten Liste von Media Queries jedes `not` auf die einzelne Abfrage, in der es enthalten ist, angewendet wird und sich auf _alle_ Features innerhalb dieser einzelnen Abfrage auswirkt. In diesem Beispiel wird das `not` auf die erste Media Query angewendet, die am ersten Komma endet:

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

Beide Beispiele sind gültig. Medienbedingungen können gruppiert werden, indem sie in Klammern (`()`) gesetzt werden. Diese Gruppen können dann innerhalb einer Bedingung wie eine einzelne Media Query verschachtelt werden.

Das `not` wird zuletzt in einer Media Query ausgewertet, was bedeutet, dass es auf die gesamte Media Query angewendet wird, nicht auf ein einzelnes Feature innerhalb einer Query, so als ob direkt nach dem `not` eine offene Klammer hinzugefügt und am Ende der Media Query geschlossen werden würde.

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

Sie wird nicht so ausgewertet:

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

Um ein einzelnes Feature innerhalb einer Media Query zu negieren, verwenden Sie Klammern. Das Umschließen eines `not` und eines Media Features in Klammern begrenzt die Komponenten der Abfrage, die negiert werden.

In diesem Beispiel negieren wir das `hover`-Media Feature, jedoch nicht den Medientyp `all`:

```css
@media all and (not(hover)) {
  /* … */
}
```

Der `not(hover)` passt, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall bezieht sich das `not` aufgrund der Klammern auf `hover`, jedoch nicht auf `all`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die keine Media Queries mit Media Features unterstützen, die gegebenen Stile anwenden.
_Es hat keinen Effekt auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Features mit `or`

Sie können `or` verwenden, um nach Übereinstimmungen unter mehr als einem Feature zu testen, wobei es auf `true` auflöst, wenn eines der Features wahr ist.
Zum Beispiel testet die folgende Abfrage auf Geräte mit monochromem Display oder Hover-Fähigkeit:

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
- [Erweiterte Mozilla-Media-Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Media-Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
