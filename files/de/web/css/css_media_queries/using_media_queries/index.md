---
title: Verwendung von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{CSSRef}}

**Media Queries** ermöglichen es Ihnen, CSS-Stile basierend auf dem Medientyp eines Geräts (wie Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder Orientierung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, {{Glossary("viewport", "Viewport")}}-Breite oder -Höhe des Browsers sowie Benutzerpräferenzen wie reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingtes Anwenden von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}}- und {{cssxref("@import")}}-[At-Regeln](/de/docs/Web/CSS/At-rule).
- Ausrichten auf bestimmte Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="`.
- [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) durch die Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden zur Veranschaulichung das CSS `@media`, aber die grundlegende Syntax ist für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und beliebig vielen _Media-Feature_-Ausdrücken, die optional auf verschiedene Weise mit _logischen Operatoren_ kombiniert werden können.
Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die übergeordnete Kategorie des Geräts, für die die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (als `all` angenommen), es sei denn, der logische Operator `only` wird verwendet.

- [Media Features](/de/docs/Web/CSS/@media#media_features) beschreiben eine spezifische Eigenschaft des {{Glossary("user_agent", "User-Agent")}}, des Ausgabegeräts oder der Umgebung:

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

  Zum Beispiel erlaubt das {{cssxref("@media/hover", "hover")}}-Feature einer Query zu prüfen, ob das Gerät das Hovering über Elemente unterstützt.
  Media-Feature-Ausdrücke testen auf ihre Präsenz oder ihren Wert und sind vollständig optional. Jedes Media-Feature-Ausdruck muss in Klammern gesetzt werden.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and` und `only`.
  Mehrere Media Queries können auch zu einer einzigen Regel kombiniert werden, indem sie durch Kommata getrennt werden.

Eine Media Query errechnet sich zu `true`, wenn der Medientyp (falls angegeben) dem Gerät entspricht, auf dem ein Dokument angezeigt wird, _und_ alle Media-Feature-Ausdrücke als wahr ausgewertet werden.
Abfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query, die an sein {{HTMLElement("link")}}-Tag angehängt ist, [wird trotzdem heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), auch wenn die Query `false` zurückgibt. Der Download erfolgt, aber mit einer viel niedrigeren Priorität.
> Dennoch werden die Inhalte nicht angewendet, es sei denn und bis das Ergebnis der Query auf `true` wechselt.
> Gründe dafür können Sie in Tomayacs Blog [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2) nachlesen.

## Medienarten gezielt ansprechen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts.
Obwohl Websites üblicherweise für Bildschirme entwickelt werden, möchten Sie vielleicht Stile erstellen, die spezielle Geräte wie Drucker oder audio-basierte Screenreader ansprechen. Zum Beispiel richtet sich dieses CSS an Drucker:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte gezielt ansprechen.
Diese `@media`-Regel verwendet beispielsweise zwei Media Queries, um sowohl Geräte mit Bildschirm als auch Druckgeräte anzusprechen:

```css
@media screen, print {
  /* … */
}
```

Siehe [Medientypen](/de/docs/Web/CSS/@media#media_types) für die Liste der verfügbaren Medientypen.
Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen als veraltet markiert, wobei nur `screen`, `print` und `all` übrigblieben. Um spezifischere Attribute zu adressieren, verwenden Sie stattdessen _Media Features_.

## Zielgerichtetes Ansprechen von Media Features

Media Features beschreiben die spezifischen Eigenschaften eines bestimmten {{Glossary("user_agent", "User-Agent")}}, Ausgabegeräts oder der Umgebung.
Beispielsweise können Sie spezifische Stile für Breitbildmonitore, Computer mit Maussteuerung oder Geräte in lichtarmen Umgebungen anwenden.
Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingabemechanismus des Benutzers (wie eine Maus) über Elemente hovern kann:

```css
@media (hover: hover) {
  /* … */
}
```

Media Features sind entweder „Range“ oder „Discrete“.

_Discrete Features_ beziehen ihren Wert aus einer {{Glossary("enumerated", "enumerierten")}} Menge möglicher Schlüsselwortwerte. Beispielsweise akzeptiert das diskrete Feature `orientation` entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Range Features_ können mit "min-" oder "max-" vorangestellt werden, um „Mindestbedingungen“ oder „Höchstbedingungen“ auszudrücken.
Zum Beispiel wird dieses CSS nur angewendet, wenn die {{Glossary("viewport", "Viewport")}}-Breite des Browsers gleich oder kleiner als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Die folgenden Media Queries sind gleichwertig zu obigem Beispiel:

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

Mit Range Features bei Media Queries können Sie entweder die inklusiven Präfixe `min-` und `max-` verwenden oder die prägnanteren Bereichssyntaxoperatoren `<=` und `>=`.

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

Wenn Sie eine Media-Feature-Abfrage ohne Wertangabe erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Features nicht `0` oder `none` ist.
Zum Beispiel gilt dieses CSS für jedes Gerät mit einem Farbdisplay:

```css
@media (color) {
  /* … */
}
```

Wenn ein Feature nicht für das Gerät gilt, auf dem der Browser läuft, sind Ausdrücke, die dieses Media Feature beinhalten, immer false.

Weitere Beispiele zu [Media Features](/de/docs/Web/CSS/@media#media_features) finden Sie auf der Referenzseite für jedes spezifische Feature.

## Komplexe Media Queries erstellen

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt.
Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`.
Außerdem können Sie mehrere Media Queries zu einer kommaseparierten Liste kombinieren. Dadurch können Sie dieselben Stile in verschiedenen Situationen anwenden, wobei die enthaltenen Media Queries als logische `or`-Zusammensetzung ausgewertet werden: interpretiert, als ob jede Media Query in Klammern mit einem `or` dazwischen stünde.

Im vorherigen Beispiel haben wir gesehen, wie der `and`-Operator verwendet wird, um einen Medientyp mit einem Media Feature zu gruppieren.
Der `and`-Operator kann auch mehrere Media Features innerhalb einer einzigen Media Query kombinieren.
Der `not`-Operator negiert eine Media Query oder ein Media Feature, wenn er mit Klammern verwendet wird, und kehrt im Wesentlichen deren normale Bedeutungen um.
Der `or`-Operator kann unter bestimmten Bedingungen verwendet werden, um mehrere Media Features innerhalb einer einzigen Media Query zu kombinieren.
Schließlich wurde der `only`-Operator verwendet, um ältere Browser daran zu hindern, die Stile anzuwenden, ohne die Media Feature-Ausdrücke auszuwerten. Er hat jedoch in modernen Browsern keine Wirkung.

> [!NOTE]
> In den meisten Fällen wird der Medientyp `all` standardmäßig verwendet, wenn kein anderer Typ angegeben ist.
> Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie explizit einen Medientyp angeben. Sie könnten beispielsweise `only screen` oder `only print` als Gesamtheit sehen.

### Kombinieren mehrerer Typen oder Features

Das Schlüsselwort `and` kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features.
Dieses Beispiel kombiniert zwei Media Features, um die Stile auf Geräte im Querformat mit einer Breite von mindestens 30 `em` zu beschränken:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit Bildschirm zu beschränken, können Sie die Media Features mit dem Medientyp `screen` verketten:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen mehrerer Queries

Sie können eine kommaseparierte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem der verschiedenen Medientypen, Features oder Zuständen übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn sich der Browser-Viewport im Hochformat befindet (die Höhe des Viewports ist größer als die Breite):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel wird die Media Query bei einem Druck in eine PDF-Datei mit einer Seitenhöhe von 800px als wahr ausgewertet, da die erste Komponentenabfrage – die prüft, ob der Viewport eine Höhe von `680px` oder mehr hat – wahr ist.
Ähnlich wird die Media Query wahr, wenn der Benutzer ein Smartphone im Hochformat verwendet, dessen Viewport-Höhe 480px beträgt, da die zweite Komponentenabfrage wahr ist.

In einer kommaseparierten Liste von Media Queries enden die einzelnen Media Queries am Komma oder im Fall der letzten Media Query der Liste mit der öffnenden Klammer (`{`).

### Umkehren der Bedeutung einer Query

Das Schlüsselwort `not` kehrt die Bedeutung einer einzelnen Media Query um.
Beispielsweise werden die CSS-Stile in dieser Media Query auf alles _außer_ Druckmedien angewendet:

```css
@media not print {
  /* … */
}
```

Der `not`-Operator negiert nur die Media Query, auf die er angewendet wird. Ohne Klammern negiert `not` alle Features innerhalb der Media Query, in der es enthalten ist.
Das bedeutet: In einer kommaseparierten Liste von Media Queries wird jedes `not` nur auf die einzelne Query angewendet, in der es enthalten ist, und gilt für _alle_ Features innerhalb dieser einzelnen Query. In diesem Beispiel gilt das `not` für die erste Media Query, die am ersten Komma endet:

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

Beide Beispiele sind gültig.
Medienbedingungen können gruppiert werden, indem sie in Klammern (`()`) gesetzt werden.
Diese Gruppen können dann in einer Bedingung verschachtelt werden, genauso wie eine einzelne Media Query.

Der `not`-Operator wird in einer Media Query zuletzt ausgewertet, wodurch er auf die gesamte Media Query und nicht auf ein einzelnes Feature innerhalb einer Query angewendet wird, als ob direkt nach dem `not` eine öffnende Klammer gesetzt und am Ende der Media Query wieder geschlossen würde.

Die folgende Query:

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

Um ein einzelnes Feature innerhalb einer Media Query zu negieren, verwenden Sie Klammern. Indem Sie ein `not` und ein Media Feature in Klammern einschließen, schränken Sie die Komponenten der Query ein, die negiert werden.

In diesem Beispiel negieren wir das Media Feature `hover`, aber nicht den Medientyp `all`:

```css
@media all and (not(hover)) {
  /* … */
}
```

Das `not(hover)` trifft zu, wenn das Gerät keine Hover-Fähigkeiten hat. In diesem Fall gilt das `not` wegen der Klammern nur für `hover`, nicht aber für `all`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die keine Media Queries mit Media Features unterstützen, die angegebenen Stile anwenden.
_Es hat keine Wirkung auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Features mit `or`

Sie können `or` verwenden, um eine Übereinstimmung unter mehreren Features zu testen, wobei das Ergebnis `true` ist, wenn eines der Features wahr ist.
Zum Beispiel testet die folgende Query Geräte, die über ein monochromes Display oder Hover-Fähigkeiten verfügen:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den Operator `or` nicht auf derselben Ebene wie die Operatoren `and` und `not` verwenden können.
Sie können die Media Features entweder mit einem Komma trennen oder Klammern verwenden, um Teil-Ausdrücke von Media Features zu gruppieren und die Reihenfolge der Auswertung zu klären.

Die folgenden Queries sind zum Beispiel beide gültig:

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
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Media Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Media Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
