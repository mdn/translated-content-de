---
title: Verwenden von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

**Media Queries** erlauben es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (wie z.B. Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, Browser-{{Glossary("viewport", "Viewport")}}-Breite oder -Höhe, Benutzerpräferenzen wie reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingtes Anwenden von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule).
- Zielgerichtetes Ansprechen bestimmter Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den `media=` oder `sizes="` Attributen.
- [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mittels der Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS `@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Media Feature_-Ausdrücken, die optional auf verschiedene Weise mit _logischen Operatoren_ kombiniert werden können.
Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die breite Kategorie von Geräten, für die die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (wird als `all` angenommen), außer wenn der `only` logische Operator verwendet wird.

- [Media Features](/de/docs/Web/CSS/@media#media_features) beschreiben ein spezifisches Merkmal des {{Glossary("user_agent", "Benutzeragenten")}}, des Ausgabegeräts oder der Umgebung:
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

  Zum Beispiel erlaubt das {{cssxref("@media/hover", "hover")}}-Feature einer Abfrage zu überprüfen, ob das Gerät das Überfahren von Elementen unterstützt.
  Media Feature-Ausdrücke testen auf ihre Anwesenheit oder ihren Wert und sind vollständig optional.
  Jedes Media Feature-Ausdruck muss von Klammern umgeben sein.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and`, und `only`.
  Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

Eine Media Query ergibt `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird _und_ alle Media Feature-Ausdrücke als wahr berechnet werden.
Abfragen, die unbekannte Medientypen umfassen, sind immer falsch.

> [!NOTE]
> Ein Style Sheet mit einer Media Query, die an sein {{HTMLElement("link")}}-Tag angehängt ist, [wird dennoch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), auch wenn die Abfrage `false` zurückgibt; der Download erfolgt, aber die Priorität des Herunterladens ist deutlich niedriger.
> Dennoch werden seine Inhalte nicht angewendet, es sei denn, bis das Ergebnis der Abfrage auf `true` ändert.
> Sie können lesen, warum das passiert, in Tomayacs Blog [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Ausrichten auf Medientypen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts.
Obwohl Websites meist für Bildschirme entworfen werden, möchten Sie möglicherweise Stile erstellen, die spezielle Geräte wie Drucker oder audiobasierte Screenreader ansprechen.
Zum Beispiel ist dieses CSS auf Drucker ausgerichtet:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte ansprechen.
Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckergeräte zu adressieren:

```css
@media screen, print {
  /* … */
}
```

Sehen Sie [Medientypen](/de/docs/Web/CSS/@media#media_types) für die Liste verfügbarer Medientypen.
Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen veraltet, wobei nur `screen`, `print`, und `all` verbleiben. Um spezifischere Attribute anzusprechen, verwenden Sie stattdessen _Media Features_.

## Ausrichten auf Media Features

Media Features beschreiben die spezifischen Eigenschaften eines bestimmten {{Glossary("user_agent", "Benutzeragenten")}}, Ausgabegeräts oder Umgebung.
Zum Beispiel können Sie spezifische Stile für Breitbildmonitore, Computer mit Mäusen oder Geräte, die unter schlechten Lichtverhältnissen genutzt werden, anwenden.
Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingabemechanismus des Benutzers (wie eine Maus) Elemente überfahren kann:

```css
@media (hover: hover) {
  /* … */
}
```

Media Features sind entweder Bereich oder diskret.

_Diskrete Features_ nehmen ihren Wert aus einer {{Glossary("enumerated", "aufgezählten")}} Menge von möglichen Schlüsselwortwerten. Zum Beispiel akzeptiert das diskrete `orientation`-Feature entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichs-Features_ können mit "min-" oder "max-" vorangestellt werden, um "Mindestbedingung" oder "Höchstbedingung"-Beschränkungen auszudrücken.
Zum Beispiel wird dieses CSS nur dann Stile anwenden, wenn die Breite des {{Glossary("viewport", "Viewports")}} Ihres Browsers gleich oder schmaler als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Die folgenden Media Queries sind gleichwertig mit dem obigen Beispiel:

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

Mit Bereichs-Features bei Media Queries können Sie entweder die inklusiven `min-` und `max-` Präfixe oder die prägnanteren Bereichssyntax-Operatoren `<=` und `>=` verwenden.

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

Die Bereichsvergleiche oben sind inklusiv. Um den Vergleichswert auszuschließen, verwenden Sie `<` und/oder `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

Wenn Sie eine Media Feature-Abfrage ohne Angabe eines Wertes erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Features nicht `0` oder `none` ist.
Zum Beispiel wird dieses CSS für jedes Gerät mit einem Farbbildschirm angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Merkmal nicht auf das Gerät zutrifft, auf dem der Browser läuft, sind Ausdrücke, die dieses Media Feature betreffen, immer falsch.

Für weitere [Media Feature](/de/docs/Web/CSS/@media#media_features)-Beispiele, lesen Sie bitte die Referenzseite für jedes spezifische Merkmal.

## Erstellen komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängig ist. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and`, und `only`.
Darüber hinaus können Sie mehrere Media Queries zu einer kommagetrennten Liste zusammenfassen; dies ermöglicht es Ihnen, die gleichen Stile in verschiedenen Situationen anzuwenden, wobei die enthaltenen Media Queries als logische `or`-Komposition ausgewertet werden: interpretiert als ob jede Media Query in Klammern mit einem `or` zwischen ihnen wäre.

Im vorherigen Beispiel sahen wir den `and`-Operator, der verwendet wurde, um einen Media _Typ_ mit einem Media _Feature_ zu gruppieren.
Der `and`-Operator kann auch verwendet werden, um mehrere Media Features innerhalb einer einzigen Media Query zu kombinieren.
Der `not`-Operator negiert eine Media Query oder ein Media Feature, wenn er mit Klammern verwendet wird, und kehrt im Wesentlichen ihre normalen Bedeutungen um.
Der `or`-Operator kann unter bestimmten Bedingungen verwendet werden, um mehrere Media Features innerhalb einer einzigen Media Query zu kombinieren.
Zuletzt wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile anwenden, ohne die Ausdrücke der Media Features auszuwerten, aber er hat in modernen Browsern keine Wirkung.

> [!NOTE]
> In den meisten Fällen wird der `all`-Medientyp standardmäßig verwendet, wenn kein anderer Typ angegeben wird.
> Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie einen Medientyp ausdrücklich angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombinieren mehrerer Typen oder Merkmale

Das `and`-Schlüsselwort kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features.
Dieses Beispiel kombiniert zwei Media Features, um Stile auf Geräte im Querformat mit einer Breite von mindestens 30 ems zu beschränken:

```css
@media (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Media Features an den `screen`-Medientyp anketten:

```css
@media screen and (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen für mehrere Abfragen

Sie können eine kommagetrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem beliebigen von verschiedenen Medientypen, Features oder Zuständen übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn der Browser-Viewport im Hochformat ist (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (height >= 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer auf eine PDF druckt und die Seitenhöhe 800px beträgt, gibt die Media Query true zurück, weil die erste Abfragekomponente - die prüft, ob der Viewport eine Höhe von `680px` oder mehr hat - wahr ist.
Ebenso, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, gibt die Media Query true zurück, weil die zweite Abfragekomponente wahr ist.

In einer kommagetrennten Liste von Media Queries enden die einzelnen Media Queries beim Komma oder, im Fall der letzten Media Query in der Liste, bei der öffnenden Klammer (`{`).

### Eine Abfrage umkehren

Das `not`-Schlüsselwort kehrt die Bedeutung einer einzelnen Media Query um. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles _außer_ auf gedruckte Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not` negiert ohne Klammern alle Features, die innerhalb der Media Query enthalten sind. Das bedeutet, in einer kommagetrennten Liste von Media Queries, dass jedes `not` auf die einzelne Query angewendet wird, in der es enthalten ist, und auf _alle_ Features innerhalb dieser einzelnen Query. In diesem Beispiel bezieht sich das `not` auf die erste Media Query `screen and (color)`, die beim ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Weil die Abfrage mit einem Medientyp `screen` beginnt, können Sie `screen and (color)` _nicht_ in Klammern setzen. Andererseits, wenn Ihre Media Query nur aus Features besteht, müssen Sie die Abfrage in Klammern setzen:

```css
@media not ((width > 1000px) and (color)), print and (color) {
  /* … */
}
```

Die Klammern begrenzen die Komponenten der Abfrage, die negiert werden. Um zum Beispiel nur die `(width > 1000px)`-Abfrage zu negieren:

```css
@media (not (width > 1000px)) and (color), print and (color) {
  /* … */
}
```

`not` negiert nur die Abfrage zu seiner Rechten. In diesem Beispiel negieren wir die `hover` Media Feature aber nicht den `screen` Medientyp:

```css
@media screen and not (hover) {
  /* … */
}
```

Das `not (hover)` trifft zu, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall, aufgrund seiner Reihenfolge, bezieht sich das `not` auf `hover`, aber nicht auf `screen`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das `only`-Schlüsselwort verhindert, dass ältere Browser, die Media Queries mit Media Features nicht unterstützen, die gegebenen Stile anwenden.
_Es hat keine Wirkung in modernen Browsern._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen für mehrere Features mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung unter mehreren Features zu testen, wobei `true` zurückgegeben wird, wenn eines der Features wahr ist.
Zum Beispiel testet die folgende Abfrage auf Geräte, die ein monochromes Display oder Hover-Fähigkeit haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Bitte beachten Sie, dass Sie den `or`-Operator nicht auf der gleichen Ebene wie die `and`- und `not`-Operatoren verwenden können. Sie können entweder die Media Features durch ein Komma trennen oder Klammern verwenden, um Unterausdrücke von Media Features zu gruppieren, um die Auswertungsreihenfolge zu klären.

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

- [@media](/de/docs/Web/CSS/@media)
- [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Programmatic Testing von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla Media Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit Media Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
