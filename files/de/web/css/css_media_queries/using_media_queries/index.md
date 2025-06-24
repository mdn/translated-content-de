---
title: Verwenden von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

**Media Queries** ermöglichen es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (wie Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder -orientierung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, {{Glossary("viewport", "Viewport")}}-Breite oder -Höhe zu verwenden, Benutzervorlieben wie reduzierte Bewegungen, Datennutzung oder Transparenz.

Media Queries werden für Folgendes verwendet:

- Um Stile bedingt mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) anzuwenden.
- Um bestimmte Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="` anzusprechen.
- Um [Medienzustände zu testen und zu überwachen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mithilfe der Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS's `@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query setzt sich aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Medienmerkmal_-Ausdrücken zusammen, die optional auf verschiedene Weise mit _logischen Operatoren_ kombiniert werden können. Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die breite Kategorie des Geräts, für das die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (wird als `all` angenommen), außer beim Verwenden des logischen Operators `only`.

- [Medienmerkmale](/de/docs/Web/CSS/@media#media_features) beschreiben ein spezifisches Merkmal des {{Glossary("user_agent", "User-Agents")}}, des Ausgabegeräts oder der Umgebung:

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

  Zum Beispiel erlaubt das {{cssxref("@media/hover", "hover")}}-Merkmal eine Abfrage, um zu überprüfen, ob das Gerät das Überfahren von Elementen unterstützt. Medienmerkmal-Ausdrücke testen auf ihre Anwesenheit oder ihren Wert und sind vollständig optional. Jeder Medienmerkmal-Ausdruck muss von Klammern umgeben sein.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and`, und `only`. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommata trennen.

Eine Media Query berechnet sich zu `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, _und_ alle Medienmerkmalausdrücke als wahr berechnet werden. Abfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query, die an sein {{HTMLElement("link")}}-Tag angehängt ist, [wird dennoch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), selbst wenn die Abfrage `false` zurückgibt; der Download findet statt, aber die Priorität des Downloads wird viel niedriger sein. Dennoch werden seine Inhalte nicht angewendet, es sei denn, das Ergebnis der Abfrage ändert sich zu `true`. Sie können in Tomayacs Blog lesen, [warum Browser Stylesheets mit nicht übereinstimmenden Media Queries herunterladen](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Ansprechen von Medientypen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts. Obwohl Websites häufig mit Bildschirmen im Kopf entworfen werden, möchten Sie möglicherweise Stile erstellen, die spezielle Geräte wie Drucker oder audio-basierte Bildschirmlesegeräte ansprechen. Zum Beispiel spricht dieses CSS Drucker an:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte ansprechen. Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte anzusprechen:

```css
@media screen, print {
  /* … */
}
```

Sehen Sie sich die [Medientypen](/de/docs/Web/CSS/@media#media_types) an, um die Liste der verfügbaren Medientypen zu erhalten. Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen veraltet, wobei nur `screen`, `print` und `all` übrig bleiben. Um spezifischere Attribute zu adressieren, verwenden Sie stattdessen _Medienmerkmale_.

## Ansprechen von Medienmerkmalen

Medienmerkmale beschreiben die spezifischen Eigenschaften eines bestimmten {{Glossary("user_agent", "User-Agents")}}, Ausgabegeräts oder der Umgebung. Zum Beispiel können Sie spezielle Stile für Breitbildmonitore, Computer mit Maus oder Geräte, die bei schlechten Lichtverhältnissen verwendet werden, anwenden. Dieses Beispiel wendet Stile an, wenn das _primäre_ Eingabemechanismus des Benutzers (wie eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Medienmerkmale sind entweder Bereichs- oder diskrete Merkmale.

_Diskrete Merkmale_ nehmen ihren Wert aus einem {{Glossary("enumerated", "aufzählbaren")}} Satz möglicher Schlüsselwortwerte. Zum Beispiel akzeptiert das diskrete Merkmal `orientation` entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichsmerkmale_ können mit "min-" oder "max-" präfixiert werden, um "Mindestbedingung" oder "Maximalbedingung" auszudrücken. Zum Beispiel wird dieses CSS nur dann Stile anwenden, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder kleiner als 1250px ist:

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

Mit Bereichsmerkmalen der Media Query können Sie entweder die inklusiven Präfixe `min-` und `max-` oder die prägnanteren Bereichssyntax-Operatoren `<=` und `>=` verwenden.

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

Obige Bereichsvergleiche sind inklusiv. Um den Vergleichswert auszuschließen, verwenden Sie `<` und/oder `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

Wenn Sie eine Medienmerkmal-Abfrage ohne Angabe eines Wertes erstellen, werden die verschachtelten Stile so lange verwendet, bis der Wert des Merkmals nicht `0` oder `none` ist. Zum Beispiel wird dieses CSS auf jedes Gerät mit einem Farbbildschirm angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Merkmal nicht für das Gerät gilt, auf dem der Browser ausgeführt wird, sind Ausdrücke, die dieses Medienmerkmal betreffen, immer falsch.

Für weitere [Beispiele von Medienmerkmalen](/de/docs/Web/CSS/@media#media_features) besuchen Sie bitte die Referenzseite für jedes spezifische Merkmal.

## Erstellen komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`. Außerdem können Sie mehrere Media Queries zu einer kommaseparierten Liste kombinieren; dies ermöglicht es Ihnen, dieselben Stile in verschiedenen Situationen anzuwenden, wobei die enthaltenen Media Queries als logische `or`-Zusammensetzung ausgewertet werden: interpretiert, als ob jede Media Query in Klammern mit einem `or` dazwischen wäre.

Im vorherigen Beispiel haben wir den `and`-Operator gesehen, der verwendet wird, um einen Medien*typ* mit einem Medien*merkmal* zu gruppieren. Der `and`-Operator kann auch mehrere Medienmerkmale innerhalb einer einzelnen Media Query kombinieren. Der `not`-Operator negiert eine Media Query oder ein Medienmerkmal, wenn er mit Klammern verwendet wird, und kehrt so im Wesentlichen deren normale Bedeutungen um. Der `or`-Operator kann unter bestimmten Bedingungen verwendet werden, um mehrere Medienmerkmale innerhalb einer einzelnen Media Query zu kombinieren. Schließlich wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile ohne Auswertung der Medienmerkmal-Ausdrücke anwenden, aber er hat keine Wirkung in modernen Browsern.

> [!NOTE]
> In den meisten Fällen wird der Medientyp `all` standardmäßig verwendet, wenn kein anderer Typ angegeben ist. Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie explizit einen Medientyp angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombinieren mehrerer Typen oder Merkmale

Das `and`-Schlüsselwort kombiniert ein Medienmerkmal mit einem Medientyp _oder_ anderen Medienmerkmalen. Dieses Beispiel kombiniert zwei Medienmerkmale, um Stile auf Geräte im Querformat mit einer Breite von mindestens 30 em zu beschränken:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Medienmerkmale an den Medientyp `screen` anfügen:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen mehrerer Abfragen

Sie können eine kommaseparierte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers einem der verschiedenen Medientypen, Merkmale oder Zustände entspricht.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ sich der Browser-Viewport im Hochformat befindet (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer in eine PDF druckt und die Seitenhöhe 800px beträgt, gibt die Media Query `true` zurück, weil die erste Abfragekomponente — die prüft, ob der Viewport eine Höhe von `680px` oder mehr hat — wahr ist. Ebenso, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, gibt die Media Query `true` zurück, weil die zweite Abfragekomponente wahr ist.

In einer kommaseparierten Liste von Media Queries enden die individuellen Media Queries am Komma oder, im Fall der letzten Media Query in der Liste, an der öffnenden Klammer (`{`).

### Umkehren der Bedeutung einer Abfrage

Das `not`-Schlüsselwort kehrt die Bedeutung einer einzelnen Media Query um. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles _außer_ gedruckten Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not` negiert ohne Klammern alle Merkmale innerhalb der Media Query, in der es enthalten ist. Das bedeutet, dass in einer kommaseparierten Liste von Media Queries jedes `not` auf die einzelne Abfrage anwendet, in der es enthalten ist, und _alle_ Merkmale innerhalb dieser einzelnen Abfrage betrifft. In diesem Beispiel bezieht sich das `not` auf die erste Media Query `screen and (color)`, die beim ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Da die Abfrage mit einem Medientyp `screen` beginnt, _können_ Sie `screen and (color)` nicht in Klammern setzen. Andererseits müssen Sie, wenn Ihre Media Query nur aus Merkmalen besteht, die Abfrage in Klammern setzen:

```css
@media not ((width > 1000px) and (color)), print and (color) {
  /* … */
}
```

Klammern begrenzen die Komponenten der Abfrage, die negiert werden. Zum Beispiel, um nur die Abfrage `(width > 1000px)` zu negieren:

```css
@media (not (width > 1000px)) and (color), print and (color) {
  /* … */
}
```

Das `not` negiert nur die Abfrage zu seiner Rechten. In diesem Beispiel negieren wir die Medienfunktion `hover`, aber nicht den Medientyp `screen`:

```css
@media screen and not (hover) {
  /* … */
}
```

Das `not (hover)` entspricht, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall, aufgrund seiner Reihenfolge, bezieht sich das `not` auf `hover`, aber nicht auf `screen`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das `only`-Schlüsselwort verhindert, dass ältere Browser, die Media Queries mit Medienmerkmalen nicht unterstützen, die gegebenen Stile anwenden.
_Es hat keinen Effekt auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Merkmale mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung unter mehr als einem Merkmal zu testen, was zu `true` auflöst, wenn eines der Merkmale wahr ist. Zum Beispiel, die folgende Abfrage testet auf Geräte mit einem monochromen Bildschirm oder Hover-Fähigkeit:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den `or`-Operator nicht auf der gleichen Ebene wie die `and`- und `not`-Operatoren verwenden können. Sie können entweder die Medienmerkmale mit einem Komma trennen oder Klammern verwenden, um Sub-Ausdrücke von Medienmerkmalen zu gruppieren, um die Reihenfolge der Auswertung zu verdeutlichen.

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
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Media Queries programmgesteuert testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
