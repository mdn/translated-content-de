---
title: Verwendung von Media Queries
slug: Web/CSS/Guides/Media_queries/Using
l10n:
  sourceCommit: 3ee2355c3c90cf92c3119b82f8ebfa5d16c91c53
---

**Media Queries** ermöglichen es Ihnen, CSS-Stile je nach Medientyp eines Geräts (z. B. Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder Ausrichtung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, {{Glossary("viewport", "Viewport")}}-Breite oder -Höhe des Browsers, Benutzerpräferenzen wie reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingte Anwendung von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}}, {{cssxref("@custom-media")}} und {{cssxref("@import")}} [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules).
- Zielgerichtete Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="`.
- Zum [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/Guides/Media_queries/Testing) mit den Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS's `@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Media Feature_-Ausdrücken, die optional auf verschiedene Weise mit _logischen Operatoren_ kombiniert werden können. Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) definieren die breite Kategorie von Geräten, für die die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (wird als `all` angenommen), es sei denn, es wird der logische Operator `only` verwendet.

- [Media Features](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) beschreiben eine spezifische Eigenschaft des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umwelt:
  - {{cssxref("@media/any-hover", "any-hover")}}
  - {{cssxref("@media/any-pointer", "any-pointer")}}
  - {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - {{cssxref("@media/color", "color")}}
  - {{cssxref("@media/color-gamut", "color-gamut")}}
  - {{cssxref("@media/color-index", "color-index")}}
  - {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - {{cssxref("@media/device-posture", "device-posture")}}
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
  - {{cssxref("@media/width", "width")}}

  Zum Beispiel ermöglicht die {{cssxref("@media/hover", "hover")}}-Funktion einer Abfrage zu prüfen, ob das Gerät das Hovern über Elemente unterstützt. Media Feature-Ausdrücke testen auf deren Vorhandensein oder Wert und sind völlig optional. Jedes Media Feature-Ausdruck muss in Klammern eingeschlossen sein.

- [Logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu formulieren: `not`, `and` und `only`. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie durch Kommas trennen.

Eine Media Query wird zu `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird _und_ alle Media Feature-Ausdrücke als wahr evaluiert werden. Anfragen, die unbekannte Medientypen beinhalten, sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query, die an sein {{HTMLElement("link")}}-Tag angehängt ist, wird [immer noch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), selbst wenn die Abfrage `false` ergibt; der Download erfolgt, aber die Priorität des Herunterladens ist viel niedriger. Trotzdem werden seine Inhalte erst angewendet, wenn das Ergebnis der Abfrage `true` wird. Sie können in Tomayacs Blog [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2) nachlesen, warum dies geschieht.

## Zielgerichtete Medientypen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts. Obwohl Websites üblicherweise mit Bildschirmen im Hinterkopf entworfen werden, möchten Sie möglicherweise auch Stile erstellen, die auf spezielle Geräte wie Drucker oder audiobasierte Screenreader abzielen. Dieses CSS zielt beispielsweise auf Drucker ab:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte anvisieren. Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte zu berücksichtigen:

```css
@media screen, print {
  /* … */
}
```

Siehe [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) für die Liste der verfügbaren Medientypen. Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten der ursprünglich definierten Medientypen veraltet, mit nur `screen`, `print` und `all` verbleibend. Um spezifischere Attribute anzuvisieren, verwenden Sie stattdessen _Media Features_.

## Zielgerichtete Media Features

Media Features beschreiben die spezifischen Eigenschaften eines bestimmten {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder der Umgebung. Zum Beispiel können Sie bestimmte Stile auf Breitbildmonitore, Computer, die Mäuse verwenden, oder Geräte anwenden, die in dunklen Bedingungen verwendet werden. Dieses Beispiel wendet Stile an, wenn das _primäre_ Eingabegerät des Benutzers (z.B. eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Media Features sind entweder Bereichs- oder diskrete Features.

_Diskrete Features_ nehmen ihren Wert aus einem {{Glossary("enumerated", "enumerierten")}} Satz möglicher Schlüsselwortwerte. Zum Beispiel akzeptiert das diskrete `orientation`-Feature entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichs-Features_ können mit "min-" oder "max-" vorangestellt werden, um "Mindestbedingungs-" oder "Höchstbedingungs-" Einschränkungen auszudrücken. Zum Beispiel wird dieses CSS nur dann Stile anwenden, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder kleiner als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Die folgenden Media Queries entsprechen dem obigen Beispiel:

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

Mit den Bereichs-Features von Media Queries können Sie entweder die inklusiven `min-` und `max-` Präfixe verwenden oder die kürzeren Bereichssyntax-Operatoren `<=` und `>=`.

Die folgenden Media Queries sind gleichwertig:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

@media (30em <= width <= 50em) {
  /* … */
}

@media (50em >= width >= 30em) {
  /* … */
}
```

Die obigen Bereichsvergleiche sind inklusiv. Um den Vergleichswert auszuschließen, verwenden Sie `<` und/oder `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

Wenn Sie eine Media Feature Abfrage ohne Angabe eines Wertes erstellen, werden die verschachtelten Stile angewandt, solange der Wert des Features nicht `0` oder `none` ist. Zum Beispiel wird diese CSS für jedes Gerät mit einem Farbbildschirm angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Feature für das Gerät, auf dem der Browser läuft, nicht zutrifft, sind Ausdrücke, die dieses Media Feature beinhalten, immer falsch.

Für weitere [Media Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)-Beispiele, besuchen Sie bitte die Referenzseite für jedes spezifische Feature.

## Erstellen komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`. Darüber hinaus können Sie mehrere Media Queries in eine durch Kommas getrennte Liste kombinieren; dies ermöglicht es Ihnen, die gleichen Stile in unterschiedlichen Situationen anzuwenden, wobei die enthaltenen Media Queries als logische `or`-Zusammensetzung ausgewertet werden: interpretiert, als ob jede Media Query in Klammern mit einem `or` dazwischen wäre.

Im vorherigen Beispiel haben wir den `and`-Operator gesehen, der verwendet wird, um einen Medien-_Typ_ mit einem Medien-_Feature_ zu gruppieren. Der `and`-Operator kann auch mehrere Media Features innerhalb einer einzige Media Query kombinieren. Der `not`-Operator negiert eine Media Query oder ein Media Feature, wenn er in Klammern verwendet wird, und kehrt ihre normalen Bedeutungen grundlegend um. Der `or`-Operator kann unter bestimmten Bedingungen verwendet werden, um mehrere Media Features innerhalb einer einzigen Media Query zu kombinieren. Schließlich wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile anwenden, ohne die Media Feature-Ausdrücke auszuwerten, aber er hat in modernen Browsern keine Wirkung.

> [!NOTE]
> In den meisten Fällen wird der `all` Medientyp standardmäßig verwendet, wenn kein anderer Typ angegeben ist. Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie explizit einen Medientyp angeben. Sie können `only screen` oder `only print` als Ganzes betrachten.

### Kombinieren mehrerer Typen oder Features

Das Schlüsselwort `and` kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features. Dieses Beispiel kombiniert zwei Media Features, um Stile auf Geräte im Querformat mit einer Breite von mindestens 30 ems zu beschränken:

```css
@media (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit Bildschirm zu beschränken, können Sie die Media Features an den Medientyp `screen` anfügen:

```css
@media screen and (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen von mehreren Abfragen

Sie können eine durch Kommas getrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem der verschiedenen Medientypen, Features oder Zustände übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn das Browser-Viewport im Hochformat ist (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (height >= 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel gilt: Wenn der Benutzer in ein PDF druckt und die Seitenhöhe 800px beträgt, ergibt die Media Query `true`, weil die erste Abfragekomponente - die testet, ob das Viewport eine Höhe von `680px` oder mehr hat - wahr ist. Ebenso, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, ergibt die Media Query `true`, weil die zweite Abfragekomponente wahr ist.

In einer durch Kommas getrennten Liste von Media Queries enden die einzelnen Media Queries an dem Komma oder, im Falle der letzten Media Query in der Liste, an der öffnenden Klammer (`{`).

### Abfragebedeutung invertieren

Das Schlüsselwort `not` invertiert die Bedeutung einer einzelnen Media Query. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles _außer_ gedruckten Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not`, ohne Klammern, negiert alle Features innerhalb der Media Query, in der es enthalten ist. Das bedeutet, in einer durch Kommas getrennten Liste von Media Queries wendet sich jedes `not` auf die einzelne Abfrage, in der es enthalten ist, an und gilt für _alle_ Features innerhalb dieser einzelnen Abfrage. In diesem Beispiel wendet sich das `not` auf die erste Media Query `screen and (color)` an, die beim ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Da die Abfrage mit einem Medientyp `screen` beginnt, _kann_ man `screen and (color)` nicht in Klammern setzen. Andererseits, wenn Ihre Media Query nur aus Features besteht, _müssen_ Sie die Abfrage in Klammern setzen:

```css
@media not ((width > 1000px) and (color)), print and (color) {
  /* … */
}
```

Klammern begrenzen die Komponenten der Abfrage, die negiert werden. Zum Beispiel, um nur die `(width > 1000px)`-Abfrage zu negieren:

```css
@media (not (width > 1000px)) and (color), print and (color) {
  /* … */
}
```

`not` negiert nur die Abfrage zu seiner rechten Seite. In diesem Beispiel negieren wir das `hover` Media Feature, nicht aber den `screen` Medientyp:

```css
@media screen and not (hover) {
  /* … */
}
```

Das `not (hover)` trifft zu, wenn das Gerät keine Hover-Fähigkeit hat. Aufgrund seiner Anordnung bezieht sich das `not` auf `hover`, aber nicht auf `screen`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die Media Queries mit Media Features nicht unterstützen, die angegebenen Stile anwenden.
_Es hat auf moderne Browser keinen Einfluss._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen auf mehrere Features mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung unter mehr als einem Feature zu testen und löst `true` aus, wenn eines der Features zutrifft. Zum Beispiel testet die folgende Abfrage auf Geräte, die ein monochromes Display oder eine Hover-Fähigkeit haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den `or`-Operator nicht auf derselben Ebene wie die `and`- und `not`-Operatoren verwenden können. Sie können entweder die Media Features durch ein Komma trennen oder Klammern verwenden, um Unterausdrücke von Media Features zu gruppieren, um die Reihenfolge der Auswertung zu verdeutlichen.

Zum Beispiel sind die folgenden Abfragen beide gültig:

```css
@media ((color) and (hover)) or (monochrome) {
  /* … */
}

/* or */
@media (color) and (hover), (monochrome) {
  /* … */
}
```

## Siehe auch

- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
- [Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Medienabfragen programmgesteuert testen](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Media-Features](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Media-Features](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
