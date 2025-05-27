---
title: Einsatz von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{CSSRef}}

**Media Queries** ermöglichen es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (wie Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder Ausrichtung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, {{Glossary("viewport", "Viewport")}}-Breite oder -Höhe des Browsers, Benutzerpräferenzen wie reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Um Stile bedingt mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) anzuwenden.
- Um spezifische Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="` zu targetieren.
- Um [Medienzustände zu testen und zu überwachen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mit den Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS `@media` zu Veranschaulichungszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Medienmerkmalen_, die optional auf verschiedene Arten mit _logischen Operatoren_ kombiniert werden können. Media Queries sind nicht casesensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die allgemeine Kategorie des Geräts, für das die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (wird als `all` angenommen), außer wenn der logische Operator `only` verwendet wird.

- [Medienmerkmale](/de/docs/Web/CSS/@media#media_features) beschreiben eine spezifische Eigenschaft des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung:

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

  Zum Beispiel ermöglicht das {{cssxref("@media/hover", "hover")}}-Merkmal eine Abfrage, ob das Gerät das Überfahren von Elementen mit dem Cursor unterstützt. Medienmerkmal-Ausdrücke testen ihre Anwesenheit oder ihren Wert und sind völlig optional. Jeder Medienmerkmal-Ausdruck muss in Klammern eingehüllt sein.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and`, und `only`.
  Sie können auch mehrere Media Queries in eine einzige Regel kombinieren, indem Sie sie durch Kommas trennen.

Eine Media Query ergibt `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, _und_ alle Medienmerkmal-Ausdrücke als wahr ausgewertet werden. Abfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query im zugehörigen {{HTMLElement("link")}}-Tag [wird dennoch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), selbst wenn die Abfrage `false` ergibt. Der Download erfolgt, aber die Priorität des Downloads ist wesentlich niedriger.
> Dennoch werden seine Inhalte nicht angewendet, es sei denn und bis das Ergebnis der Abfrage auf `true` wechselt. Sie können in Tomayacs Blog lesen, warum dies geschieht: [Why Browsers Download Stylesheets with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Ziele für Medientypen

Medientypen beschreiben die allgemeine Kategorie eines gegebenen Geräts. Obwohl Websites häufig mit Bildschirmen im Sinn entworfen werden, möchten Sie möglicherweise Stile erstellen, die spezielle Geräte wie Drucker oder audiobasierte Screenreader adressieren. Zum Beispiel richtet sich dieses CSS an Drucker:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte targetieren. Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte zu targetieren:

```css
@media screen, print {
  /* … */
}
```

Sehen Sie [Medientypen](/de/docs/Web/CSS/@media#media_types) für die Liste der verfügbaren Medientypen. Da Medientypen Geräte in sehr breiten Kategorien beschreiben, wurden die meisten der ursprünglich definierten Medientypen veraltet, wobei nur `screen`, `print` und `all` verblieben. Um spezifischere Attribute zu targetieren, verwenden Sie _Medienmerkmale_.

## Ziele für Medienmerkmale

Medienmerkmale beschreiben die spezifischen Eigenschaften eines gegebenen {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder der Umgebung. Zum Beispiel können Sie spezifische Stile auf Breitbildmonitore, Computer, die Mäuse verwenden, oder Geräte anwenden, die bei schlechten Lichtverhältnissen verwendet werden. Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingabemechanismus des Benutzers (wie eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Medienmerkmale sind entweder Bereich oder diskret.

_Diskrete Merkmale_ nehmen ihren Wert aus einem {{Glossary("enumerated", "aufzählbaren")}} Satz möglicher Schlüsselwortwerte. Beispiel: Das diskrete `orientation`-Merkmal akzeptiert entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichsmerkmale_ können mit "min-" oder "max-" versehen werden, um "Mindestbedingung" oder "Höchstbedingung" auszudrücken. Zum Beispiel wird dieses CSS nur angewendet, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder schmaler als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Die folgenden Media Queries sind dem obigen Beispiel äquivalent:

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

Mit Media Query Bereichsmerkmalen können Sie entweder die inklusiven Präfixe `min-` und `max-` oder die prägnanteren Bereichssyntax-Operatoren `<=` und `>=` verwenden.

Die folgenden Media Queries sind äquivalent:

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

Wenn Sie eine Medienmerkmal-Abfrage ohne Wertangabe erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Merkmals nicht `0` oder `none` ist. Zum Beispiel wird dieses CSS auf jedes Gerät mit einem Farbbildschirm angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Merkmal auf dem Gerät, auf dem der Browser läuft, nicht anwendbar ist, sind Ausdrücke mit diesem Medienmerkmal immer falsch.

Für weitere [Beispiele zu Medienmerkmalen](/de/docs/Web/CSS/@media#media_features) besuchen Sie bitte die Referenzseite für jedes spezifische Merkmal.

## Erstellung komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`. Darüber hinaus können Sie mehrere Media Queries in eine durch Kommas getrennte Liste kombinieren; damit können Sie dieselben Stile in verschiedenen Situationen anwenden, wobei die enthaltenen Media Queries als logische `or`-Komposition ausgewertet werden: interpretiert, als ob jede Media Query in Klammern mit einem `or` dazwischen stünde.

Im vorherigen Beispiel haben wir den `and`-Operator verwendet, um einen Medientyp mit einem Medienmerkmal zu gruppieren. Der `and`-Operator kann auch mehrere Medienmerkmale innerhalb einer einzigen Media Query kombinieren. Der `not`-Operator negiert eine Media Query oder ein Medienmerkmal, wenn er zusammen mit Klammern verwendet wird, und hebt im Grunde ihre normalen Bedeutungen auf. Der `or`-Operator kann unter bestimmten Bedingungen verwendet werden, um mehrere Medienmerkmale innerhalb einer einzigen Media Query zu kombinieren. Zuletzt wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile anwenden, ohne die Medienmerkmalausdrücke auszuwerten, aber er hat in modernen Browsern keine Wirkung.

> [!NOTE]
> In den meisten Fällen wird der `all`-Medientyp standardmäßig verwendet, wenn kein anderer Typ angegeben ist. Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie explizit einen Medientyp angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombination mehrerer Typen oder Merkmale

Das `and`-Schlüsselwort kombiniert ein Medienmerkmal mit einem Medientyp _oder_ anderen Medienmerkmalen. In diesem Beispiel werden zwei Medienmerkmale kombiniert, um Stile auf Geräte im Querformat mit einer Breite von mindestens 30 em zu beschränken:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Medienmerkmale mit dem Medientyp `screen` verketten:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen mehrerer Abfragen

Sie können eine durch Kommas getrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn sich das Gerät des Benutzers mit einem der verschiedenen Medientypen, Merkmale oder Zustände deckt.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Benutzergerät eine Höhe von 680px oder mehr aufweist _oder_ der Browser-Viewport im Hochformat ist (die Höhe des Viewports ist größer als die Breite des Viewports):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer in eine PDF-Datei druckt und die Seitenhöhe 800px beträgt, ergibt die Media Query `true`, weil die erste Abfragekomponente — die testet, ob der Viewport eine Höhe von `680px` oder mehr hat — wahr ist. Ebenso, wenn ein Benutzer ein Smartphone im Hochformat mit einer Viewport-Höhe von 480px verwendet, ergibt die Media Query `true`, weil die zweite Abfragekomponente wahr ist.

In einer durch Kommas getrennten Liste von Media Queries enden die einzelnen Media Queries am Komma oder, im Fall der letzten Media Query in der Liste, an der öffnenden Klammer (`{`).

### Umkehren der Bedeutung einer Abfrage

Das `not`-Schlüsselwort kehrt die Bedeutung einer einzelnen Media Query um. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles _außer_ gedruckte Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, zu der es gehört. Das `not`, ohne Klammern, negiert alle Merkmale innerhalb der Media Query, in der es sich befindet. Das bedeutet, dass in einer durch Kommas getrennten Liste von Media Queries jedes `not` auf die einzelne Query angewendet wird, in der es sich befindet, und auf _alle_ Merkmale innerhalb dieser einzelnen Query angewendet wird. In diesem Beispiel wird das `not` auf die erste Media Query `screen and (color)` angewendet, die am ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Da die Query mit einem Medientyp `screen` beginnt, können Sie `screen and (color)` _nicht_ in Klammern setzen. Andererseits, wenn Ihre Media Query nur aus Merkmalen besteht, dann müssen Sie die Query einklammern:

```css
@media not ((width > 1000px) and (color)), print and (color) {
  /* … */
}
```

Klammern begrenzen die Komponenten der Query, die negiert werden. Zum Beispiel, um nur die `(width > 1000px)`-Abfrage zu negieren:

```css
@media (not (width > 1000px)) and (color), print and (color) {
  /* … */
}
```

`not` negiert nur die Query zu ihrer rechten Seite. In diesem Beispiel negieren wir das `hover`-Medienmerkmal, aber nicht den `screen`-Medientyp:

```css
@media screen and not (hover) {
  /* … */
}
```

Das `not (hover)` trifft zu, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall, aufgrund der Reihenfolge, wird das `not` auf `hover` angewendet, aber nicht auf `screen`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das `only`-Schlüsselwort verhindert, dass ältere Browser, die keine Media Queries mit Medienmerkmalen unterstützen, die angegebenen Stile anwenden.
_Es hat auf moderne Browser keine Wirkung._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Merkmale mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung zwischen mehr als einem Merkmal zu testen, wobei `true` aufgelöst wird, wenn eines der Merkmale wahr ist. Zum Beispiel testet die folgende Query nach Geräten, die ein monochromes Display oder Hover-Fähigkeit haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den `or`-Operator nicht auf derselben Ebene verwenden können wie die `and`- und `not`-Operatoren. Sie können entweder die Medienmerkmale durch ein Komma trennen oder Klammern verwenden, um Unterausdrücke von Medienmerkmalen zu gruppieren, um die Reihenfolge der Auswertung zu klären.

Zum Beispiel sind die folgenden Queries beide gültig:

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
- [Testing media queries programmatically](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS Animations Between Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
