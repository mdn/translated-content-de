---
title: Verwendung von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: 53930e7004d7cd5cb475bfadfc0450f88853d8ea
---

{{CSSRef}}

**Media Queries** ermöglichen es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (z.B. Druck vs. Bildschirm) oder von anderen Funktionen oder Merkmalen wie Bildschirmauflösung oder -ausrichtung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, Browser-{{Glossary("viewport", "Viewport")}}-Breite oder -Höhe, Benutzerpräferenzen wie bevorzugte reduzierte Bewegungen, Datennutzung oder Transparenz anzuwenden.

Media Queries werden verwendet für:

- Bedingtes Anwenden von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Regeln](/de/docs/Web/CSS/At-rule).
- Das gezielte Ansprechen bestimmter Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="`.
- [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mit den Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS's `@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries dieselbe.

## Syntax

Ein Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Media-Feature_-Ausdrücken, die optional auf verschiedene Weise mit _logischen Operatoren_ kombiniert werden können.
Media Queries sind nicht groß- und kleinschreibungssensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die breite Kategorie des Geräts, für das der Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (angenommen wird `all`), es sei denn, es wird der logische Operator `only` verwendet.

- [Media-Features](/de/docs/Web/CSS/@media#media_features) beschreiben ein spezifisches Merkmal des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung:

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

  Zum Beispiel ermöglicht das {{cssxref("@media/hover", "hover")}}-Feature eine Abfrage, ob das Gerät das Hovering über Elemente unterstützt.
  Media Feature Ausdrücke testen auf deren Vorhandensein oder Wert und sind vollständig optional.
  Jeder Media Feature Ausdruck muss von Klammern umgeben sein.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and` und `only`.
  Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

Ein Media Query ergibt `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, und alle Media-Feature-Ausdrücke als true berechnet werden.
Anfragen mit unbekannten Medientypen sind immer false.

> [!NOTE]
> Ein Stylesheet mit einem an seinen {{HTMLElement("link")}}-Tag angehängten Media Query wird [noch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), selbst wenn die Abfrage `false` ergibt, der Download geschieht, aber die Priorität des Herunterladens wird viel geringer sein.
> Dennoch werden die Inhalte erst angewendet, wenn das Ergebnis der Abfrage `true` wird.
> Sie können in Tomayacs Blog darüber lesen, warum dies geschieht: [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Ansprechen von Medientypen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts.
Obwohl Websites häufig mit Bildschirmen im Sinn entworfen werden, möchten Sie möglicherweise Stile erstellen, die auf spezielle Geräte wie Drucker oder audio-basierte Screenreader abzielen.
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

Sehen Sie sich [Medientypen](/de/docs/Web/CSS/@media#media_types) für die Liste der verfügbaren Medientypen an.
Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen als veraltet erklärt, wobei nur `screen`, `print` und `all` verbleiben. Um spezifischere Attribute anzusprechen, verwenden Sie stattdessen _Media Features_.

## Ansprechen von Media Features

Media Features beschreiben die spezifischen Merkmale eines bestimmten {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder der Umgebung.
Zum Beispiel können Sie spezifische Stile auf Breitbildmonitore, Computer, die Mäuse verwenden, oder Geräte anwenden, die in schwach beleuchteten Bedingungen verwendet werden.
In diesem Beispiel werden Stile angewendet, wenn der _primäre_ Eingabemechanismus des Benutzers (wie eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Media Features sind entweder Bereichs- oder diskret.

_Diskrete Features_ nehmen ihre Werte aus einer {{Glossary("enumerated", "aufgezählten")}} Menge möglicher Schlüsselwortwerte. Zum Beispiel akzeptiert das diskrete `orientation`-Feature entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichs-Features_ können mit "min-" oder "max-" vorangestellt werden, um Einschränkungen für "minimale Bedingung" oder "maximale Bedingung" auszudrücken.
Zum Beispiel wird dieses CSS nur dann Stile anwenden, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder schmaler als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Die folgenden Media Queries sind äquivalent zu dem obigen Beispiel:

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

Mit den Range-Features der Media Queries können Sie entweder die inklusiven `min-` und `max-` Präfixe oder die prägnanteren Bereichssyntaxoperatoren `<=` und `>=` verwenden.

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

Die Bereichsvergleiche oben sind einschließlich. Um den Vergleichswert auszuschließen, verwenden Sie `<` und/oder `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

Wenn Sie eine Media Feature Abfrage ohne Angabe eines Wertes erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Features nicht `0` oder `none` ist.
Zum Beispiel wird dieses CSS auf jedes Gerät mit einem Farbbildschirm angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Feature nicht auf das Gerät zutrifft, auf dem der Browser ausgeführt wird, sind Ausdrücke, die dieses Media Feature betreffen, immer false.

Für weitere [Media Feature](/de/docs/Web/CSS/@media#media_features)-Beispiele siehe bitte die Referenzseite für jedes spezifische Feature.

## Erstellen von komplexen Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`.
Darüber hinaus können Sie mehrere Media Queries zu einer durch Kommas getrennten Liste kombinieren; dies ermöglicht es Ihnen, dieselben Stile in verschiedenen Situationen anzuwenden, wobei die enthaltenen Media Queries als logische `or`-Komposition ausgewertet werden: interpretiert, als ob jede Media Query in Klammern mit einem `or` dazwischen wäre.

Im vorherigen Beispiel haben wir den `and`-Operator verwendet, um einen Media _Typ_ mit einem Media _Feature_ zu gruppieren.
Der `and`-Operator kann auch verwendet werden, um mehrere Media Features innerhalb einer einzelnen Media Query zu kombinieren.
Der `not`-Operator negiert eine Media Query oder ein Media Feature, wenn es mit Klammern verwendet wird, und kehrt im Grunde deren normale Bedeutungen um.
Der `or`-Operator kann, unter bestimmten Bedingungen, verwendet werden, um mehrere Media Features innerhalb einer einzigen Media Query zu kombinieren.
Schließlich wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile ohne Auswertung der Media Feature Ausdrücke anwenden, aber er hat keine Wirkung in modernen Browsern.

> [!NOTE]
> In den meisten Fällen wird der Medientyp `all` standardmäßig verwendet, wenn kein anderer Typ spezifiziert ist.
> Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie ausdrücklich einen Medientyp angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombinieren mehrerer Typen oder Features

Das Schlüsselwort `and` kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features.
Dieses Beispiel kombiniert zwei Media Features, um Stile auf Geräte im Querformat mit einer Breite von mindestens 30 ems zu beschränken:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Media Features mit dem Medientyp `screen` verknüpfen:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen für mehrere Anfragen

Sie können eine durch Kommas getrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem der verschiedenen Medientypen, Merkmale oder Zustände übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn der Browser-Viewport im Hochformat ist (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer in eine PDF druckt und die Seitenhöhe 800px beträgt, gibt die Media Query true zurück, weil die erste Abfragekomponente — die testet, ob der Viewport eine Höhe von `680px` oder mehr hat — wahr ist.
Ebenso, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, gibt die Media Query true zurück, weil die zweite Abfragekomponente wahr ist.

In einer durch Kommas getrennten Liste von Media Queries enden die einzelnen Media Queries am Komma oder, im Fall der letzten Media Query in der Liste, an der öffnenden Klammer (`{`).

### Bedeutung einer Anfrage umkehren

Das Schlüsselwort `not` kehrt die Bedeutung einer einzelnen Media Query um. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles _außer_ auf gedruckte Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not`, ohne Klammern, negiert alle Features innerhalb der Media Query, in der es enthalten ist. Das bedeutet, dass in einer durch Kommas getrennten Liste von Media Queries jedes `not` auf die einzige Abfrage angewendet wird, in der es enthalten ist, und auf _alle_ Features innerhalb dieser einzigen Abfrage. In diesem Beispiel wird das `not` auf die erste Media Query angewendet, die am ersten Komma endet:

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

Beide Beispiele sind gültig. Medienbedingungen können gruppiert werden, indem sie in Klammern (`()`) eingeschlossen werden. Diese Gruppen können dann innerhalb einer Bedingung wie eine einzige Media Query verschachtelt werden.

Das `not` wird als letztes in einer Media Query ausgewertet, was bedeutet, dass es auf die gesamte Media Query angewendet wird, nicht auf ein einzelnes Feature innerhalb einer Abfrage, als ob nach dem `not` sofort eine öffnende Klammer hinzugefügt und am Ende der Media Query geschlossen würde.

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

Sie wird nicht wie folgt ausgewertet:

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

Um ein einzelnes Feature innerhalb einer Media Query zu negieren, verwenden Sie Klammern. Die Ummantelung eines `not` und eines Media Features in Klammern begrenzt die Komponenten der Abfrage, die negiert werden.

In diesem Beispiel negieren wir das `hover` Media Feature, aber nicht den `all` Medientyp:

```css
@media all and (not(hover)) {
  /* … */
}
```

Das `not(hover)` trifft zu, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall, wegen der Klammern, bezieht sich das `not` auf `hover`, aber nicht auf `all`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die Media Queries mit Media Features nicht unterstützen, die gegebenen Stile anwenden.
_Es hat keine Wirkung auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen für mehrere Features mit `or`

Sie können `or` verwenden, um nach einer Übereinstimmung unter mehr als einem Feature zu suchen, wobei `true` aufgelöst wird, wenn eines der Features wahr ist.
Zum Beispiel testet die folgende Abfrage Geräte, die ein monochromes Display oder eine Hover-Fähigkeit haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den `or`-Operator nicht auf der gleichen Ebene wie die `and` und `not`-Operatoren verwenden können. Sie können entweder die Media Features mit einem Komma trennen oder Klammern verwenden, um Unterausdrücke von Media Features zu gruppieren, um die Auswertungsreihenfolge zu klären.

Zum Beispiel sind die folgenden Anfragen beide gültig:

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
- [Testen von Media Queries programmgesteuert](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla Media Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit Media Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
