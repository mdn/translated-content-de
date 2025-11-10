---
title: Verwenden von Media Queries
slug: Web/CSS/Guides/Media_queries/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Media Queries** ermöglichen es Ihnen, CSS-Stile basierend auf dem Medientyp eines Geräts (wie zum Beispiel Druck oder Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder -ausrichtung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, {{Glossary("viewport", "Viewport")}}-Breite oder -Höhe des Browsers, Benutzerpräferenzen wie reduzierte Bewegungen, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingtes Anwenden von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules).
- Ansprechen bestimmter Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="`.
- [Testen und Überwachen von Mediastatus](/de/docs/Web/CSS/Guides/Media_queries/Testing) mit den Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSSs `@media` zu Illustrationszwecken, aber die Grundsyntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Media-Feature_-Ausdrücken, die optional in verschiedenen Weisen kombiniert werden können, wobei _logische Operatoren_ verwendet werden.
Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) definieren die breite Kategorie von Geräten, für die die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (und wird standardmäßig auf `all` gesetzt), außer wenn der logische Operator `only` verwendet wird.

- [Media-Features](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) beschreiben ein spezifisches Merkmal des {{Glossary("user_agent", "User-Agents")}}, des Ausgabegeräts oder der Umgebung:
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

  Zum Beispiel ermöglicht das {{cssxref("@media/hover", "hover")}}-Feature eine Abfrage, ob das Gerät das Schweben über Elementen unterstützt.
  Media-Feature-Ausdrücke testen deren Vorhandensein oder Wert und sind vollständig optional.
  Jedes Media-Feature-Ausdruck muss von Klammern umgeben sein.

- [Logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and` und `only`.
  Sie können auch mehrere Media Queries in einer einzelnen Regel kombinieren, indem Sie sie mit Kommas trennen.

Eine Media Query wird als `true` berechnet, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, _und_ alle Media-Feature-Ausdrücke als wahr berechnet werden.
Anfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query, die an sein {{HTMLElement("link")}}-Tag angehängt ist, [wird dennoch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), auch wenn die Abfrage `false` zurückgibt, der Download erfolgt jedoch mit viel niedrigerer Priorität.
> Dennoch werden die Inhalte erst dann angewendet, wenn das Ergebnis der Abfrage `true` wird.
> Sie können nachlesen, warum dies passiert, in Tomayacs Blog [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Ansprechen von Medientypen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts.
Obwohl Websites häufig mit Blick auf Bildschirme entworfen werden, möchten Sie möglicherweise Stile erstellen, die auf spezielle Geräte wie Drucker oder audio-basierte Bildschirmleser abzielen.
Zum Beispiel zielt dieses CSS auf Drucker ab:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte ansprechen.
Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte anzusprechen:

```css
@media screen, print {
  /* … */
}
```

Siehe [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) für die Liste der verfügbaren Medientypen.
Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen abgelehnt, und es bleiben nur `screen`, `print` und `all`. Um spezifischere Attribute anzusprechen, verwenden Sie stattdessen _Media Features_.

## Ansprechen von Media Features

Media Features beschreiben die spezifischen Merkmale eines bestimmten {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung.
Zum Beispiel können Sie spezielle Stile auf Breitbildschirme, Computer mit Mäusen oder Geräte anwenden, die unter schwachen Lichtverhältnissen verwendet werden.
Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingabemechanismus des Benutzers (wie eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Media Features sind entweder Bereichs- oder diskrete Features.

_Diskrete Features_ nehmen ihren Wert aus einer {{Glossary("enumerated", "aufgezählten")}} Menge möglicher Schlüsselwortwerte. Zum Beispiel akzeptiert das diskrete `orientation`-Feature entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichs-Features_ können mit "min-" oder "max-" vorangestellt werden, um "Minimumsbedingung" oder "Maximalbedingung" Einschränkungen auszudrücken.
Zum Beispiel wird dieses CSS Stile nur dann anwenden, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder geringer als 1250px ist:

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

Mit Bereichs-Features von Media Queries können Sie entweder die inklusiven Präfixe `min-` und `max-` verwenden oder die prägnanteren Bereichssyntaxoperatoren `<=` und `>=`.

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

Die oben genannten Bereichsvergleiche sind inklusive. Um den Vergleichswert auszuschließen, verwenden Sie `<` und/oder `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

Wenn Sie eine Media-Feature-Abfrage erstellen, ohne einen Wert anzugeben, werden die verschachtelten Stile verwendet, solange der Wert des Features nicht `0` oder `none` ist.
Zum Beispiel wird dieses CSS auf jedes Gerät mit einem Farbdisplay angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Feature nicht für das Gerät gilt, auf dem der Browser läuft, sind Ausdrücke, die dieses Media Feature betreffen, immer falsch.

Für weitere [Beispiele zu Media Features](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) sehen Sie bitte die Referenzseite für jedes spezifische Feature.

## Erstellen komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ `not`, `and` und `only` ins Spiel.
Darüber hinaus können Sie mehrere Media Queries in eine durch Kommas getrennte Liste kombinieren; dies ermöglicht es Ihnen, dieselben Stile in verschiedenen Situationen anzuwenden, wobei die enthaltenen Media Queries als logische `or`-Komposition ausgewertet werden: So interpretiert, als wäre jede Media Query in Klammern mit einem `or` dazwischen.

Im vorherigen Beispiel haben wir den `and`-Operator verwendet, um einen Medientyp mit einem Media Feature zu gruppieren.
Der `and`-Operator kann auch mehrere Media Features innerhalb einer einzelnen Media Query kombinieren.
Der `not`-Operator negiert eine Media Query oder ein Media Feature, wenn er mit Klammern verwendet wird, und kehrt deren normale Bedeutung um.
Der `or`-Operator kann unter bestimmten Bedingungen verwendet werden, um mehrere Media Features innerhalb einer einzelnen Media Query zu kombinieren.
Zuletzt wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile ohne Bewertung der Media Feature-Ausdrücke anwenden, aber er hat keine Wirkung in modernen Browsern.

> [!NOTE]
> In den meisten Fällen wird der `all`-Medientyp standardmäßig verwendet, wenn kein anderer Typ angegeben ist.
> Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie einen Medientyp explizit angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombinieren mehrerer Typen oder Features

Das `and`-Schlüsselwort kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features.
In diesem Beispiel werden zwei Media Features kombiniert, um Stile auf Geräte mit einer Breite von mindestens 30 ems und einer Landschaftsausrichtung zu beschränken:

```css
@media (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Media Features mit dem Medientyp `screen` verketten:

```css
@media screen and (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen mehrerer Abfragen

Sie können eine durch Kommas getrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem von mehreren Media-Typen, Features oder Zuständen übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die in dem Block enthaltenen Stile werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ der Browser-Viewport im Hochformat ist (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (height >= 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer auf ein PDF druckt und die Seitenhöhe 800px beträgt, gibt die Media Query `true` zurück, weil die erste Anfragekomponente — die testet, ob der Viewport eine Höhe von `680px` oder mehr hat — `true` ist.
Ebenso, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, gibt die Media Query `true` zurück, weil die zweite Anfragekomponente `true` ist.

In einer durch Kommas getrennten Liste von Media Queries enden die einzelnen Media Queries am Komma oder, im Fall der letzten Media Query in der Liste, an der öffnenden Klammer (`{`).

### Umkehren der Bedeutung einer Abfrage

Das Schlüsselwort `not` kehrt die Bedeutung einer einzelnen Media Query um. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles _außer_ Druckmedien angewendet:

```css
@media not print {
  /* … */
}
```

Der `not`-Operator negiert nur die Media Query, auf die er angewendet wird. `not` ohne Klammern negiert alle Features innerhalb der Media Query, in der es enthalten ist. Das bedeutet, dass in einer durch Kommas getrennten Liste von Media Queries jedes `not` nur auf die einzelne Media Query angewendet wird, in der es enthalten ist, und auf _alle_ Features in dieser einzigen Anfrage. In diesem Beispiel wird das `not` auf die erste Media Query `screen and (color)` angewendet, die am ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Da die Anfrage mit einem Medientyp `screen` beginnt, können Sie `screen and (color)` _nicht_ in Klammern setzen. Wenn Ihre Media Query jedoch nur aus Features besteht, müssen Sie die Anfrage _einklammern_:

```css
@media not ((width > 1000px) and (color)), print and (color) {
  /* … */
}
```

Klammern begrenzen die Komponenten der Anfrage, die negiert werden. Zum Beispiel, um nur die Abfrage `(width > 1000px)` zu negieren:

```css
@media (not (width > 1000px)) and (color), print and (color) {
  /* … */
}
```

`not` negiert nur die Abfrage zu seiner Rechten. In diesem Beispiel negieren wir das `hover`-Feature der Media Query, aber nicht den `screen`-Medientyp:

```css
@media screen and not (hover) {
  /* … */
}
```

`not (hover)` stimmt überein, wenn das Gerät keine Hover-Funktion hat. In diesem Fall, aufgrund seiner Anordnung, wird `not` auf `hover` angewendet, aber nicht auf `screen`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die keine Media Queries mit Media Features unterstützen, die gegebenen Stile anwenden.
_Es hat keine Auswirkung auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Features mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung unter mehr als einem Feature zu testen, wobei `true` zurückgegeben wird, wenn eines der Features `true` ist.
Zum Beispiel testet die folgende Abfrage Geräte mit einem Monochrom-Display oder Hover-Fähigkeit:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den `or`-Operator nicht auf derselben Ebene wie die `and`- und `not`-Operatoren verwenden können. Sie können entweder die Media Features durch ein Komma trennen oder Klammern verwenden, um Sub-Ausdrücke von Media Features zu gruppieren, um die Reihenfolge der Auswertung zu verdeutlichen.

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
- [Media Queries programmatisch testen](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla Media Features](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit Media Features](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
