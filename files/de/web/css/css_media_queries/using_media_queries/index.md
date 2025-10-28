---
title: Verwendung von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

**Media Queries** erlauben es Ihnen, CSS-Stile je nach Medientyp eines Geräts (wie Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder -ausrichtung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, Browser-{{Glossary("viewport", "Viewport")}} Breite oder Höhe, Benutzerpräferenzen wie reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingte Anwendung von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule).
- Spezifische Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="` zu verwenden.
- [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) durch Verwendung der Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS's `@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und beliebig vielen _Medienmerkmal_-Ausdrücken, die optional auf verschiedene Weise mit _logischen Operatoren_ kombiniert werden können. Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die breite Kategorie von Geräten, für die die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (Standard ist `all`), außer wenn Sie den logischen Operator `only` verwenden.

- [Medienmerkmale](/de/docs/Web/CSS/@media#media_features) beschreiben ein bestimmtes Merkmal des {{Glossary("user_agent", "User-Agenten")}}, des Ausgabegeräts oder der Umgebung:
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

  Zum Beispiel erlaubt das {{cssxref("@media/hover", "hover")}}-Merkmal einer Query zu überprüfen, ob das Gerät das Überfahren von Elementen unterstützt. Medienmerkmal-Ausdrücke testen auf deren Vorhandensein oder Wert und sind völlig optional. Jeder Medienmerkmal-Ausdruck muss in Klammern gesetzt werden.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu komponieren: `not`, `and`, und `only`. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommata trennen.

Eine Media Query wird zu `true`, wenn der Medientyp (falls spezifiziert) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, _und_ alle Medienmerkmal-Ausdrücke zutreffen. Anfragen, die unbekannte Medientypen betreffen, sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer an dessen {{HTMLElement("link")}}-Tag angehängten Media Query [wird immer noch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), selbst wenn die Query `false` zurückgibt. Der Download erfolgt, aber die Priorität des Downloads ist viel geringer. Seine Inhalte werden jedoch nur angewendet, wenn und solange das Ergebnis der Query `true` ist. In Tomayacs Blog [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2) können Sie lesen, warum dies geschieht.

## Zielgerichtetes Ansprechen von Medientypen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts. Obwohl Websites gewöhnlich unter Berücksichtigung von Bildschirmen entworfen werden, möchten Sie möglicherweise Stile erstellen, die auf spezielle Geräte wie Drucker oder audio-basierte Bildschirmleser abzielen. Zum Beispiel zielt dieses CSS auf Drucker ab:

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

Die [Medientypen](/de/docs/Web/CSS/@media#media_types) bieten eine Liste der verfügbaren Medientypen. Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen veraltet, wobei nur `screen`, `print` und `all` verbleiben. Um spezifischere Attribute anzusprechen, verwenden Sie stattdessen _Medienmerkmale_.

## Zielgerichtetes Ansprechen von Medienmerkmalen

Medienmerkmale beschreiben die spezifischen Eigenschaften eines bestimmten {{Glossary("user_agent", "User-Agenten")}}, Ausgabegeräts oder Umgebung. Beispielsweise können Sie spezifische Stile auf Breitbildmonitore, Computer, die Mäuse verwenden, oder Geräte, die bei schlechten Lichtverhältnissen verwendet werden, anwenden. Dieses Beispiel wendet Stile an, wenn das primäre Eingabegerät des Nutzers (z.B. eine Maus) über Elemente fahren kann:

```css
@media (hover: hover) {
  /* … */
}
```

Medienmerkmale sind entweder Bereichs- oder diskrete Merkmale.

_Diskrete Merkmale_ nehmen ihren Wert aus einer {{Glossary("enumerated", "enumerierten")}} Menge möglicher Schlüsselwortwerte. Zum Beispiel akzeptiert das diskrete `orientation`-Merkmal entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichsmerkmale_ können mit "min-" oder "max-" vorangestellt werden, um "mindestens"-Bedingungen oder "höchstens"-Bedingungen auszudrücken. Zum Beispiel wird dieses CSS nur Stile anwenden, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder schmaler als 1250px ist:

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

Mit den Bereichsmerkmalen von Media Queries können Sie entweder die inklusiven `min-` und `max-` Präfixe oder die prägnanteren Bereichs-Syntaxoperatoren `<=` und `>=` verwenden.

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

Wenn Sie eine Medienmerkmal-Query erstellen, ohne einen Wert anzugeben, werden die verschachtelten Stile verwendet, solange der Wert des Merkmals nicht `0` oder `none` ist. Zum Beispiel wird dieses CSS auf jedes Gerät mit einem Farbbildschirm angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Merkmal auf das Gerät, auf dem der Browser läuft, nicht zutrifft, sind Ausdrücke, die dieses Medienmerkmal betreffen, immer falsch.

Für weitere Beispiele zu [Medienmerkmalen](/de/docs/Web/CSS/@media#media_features) besuchen Sie bitte die Referenzseite zu jedem spezifischen Merkmal.

## Erstellen komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`. Zudem können Sie mehrere Media Queries zu einer durch Kommata getrennten Liste kombinieren; dies ermöglicht es Ihnen, die gleichen Stile in verschiedenen Situationen anzuwenden, wobei die enthaltenen Media Queries als logisches `or`-Konstrukt ausgewertet werden: interpretiert, als ob jede Media Query innerhalb von Klammern mit einem `or` dazwischen wäre.

Im vorherigen Beispiel haben wir den `and`-Operator verwendet, um einen Medien-_typ_ mit einem Medien-_merkmal_ zu gruppieren. Der `and`-Operator kann auch verwendet werden, um mehrere Medienmerkmale innerhalb einer einzelnen Media Query zu kombinieren. Der `not`-Operator negiert eine Media Query oder ein Medienmerkmal, wenn es in Klammern verwendet wird, und kehrt im Wesentlichen deren normale Bedeutungen um. Der `or`-Operator kann – unter bestimmten Bedingungen – verwendet werden, um mehrere Medienmerkmale innerhalb einer einzelnen Media Query zu kombinieren. Schließlich wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile anwenden, ohne die Medienmerkmal-Ausdrücke auszuwerten – er hat in modernen Browsern jedoch keine Wirkung.

> [!NOTE]
> In den meisten Fällen wird der Medientyp `all` standardmäßig verwendet, wenn kein anderer Typ angegeben ist. Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie einen Medientyp explizit angeben. Sie können `only screen` oder `only print` als ganzes sehen.

### Kombination mehrerer Typen oder Merkmale

Das `and`-Schlüsselwort kombiniert ein Medienmerkmal mit einem Medientyp _oder_ anderen Medienmerkmalen. Dieses Beispiel kombiniert zwei Medienmerkmale, um Stile auf Geräte im Querformat mit einer Breite von mindestens 30ems zu beschränken:

```css
@media (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Medienmerkmale mit dem Medientyp `screen` verketten:

```css
@media screen and (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen mehrerer Queries

Sie können eine durch Kommata getrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Nutzers einem der verschiedenen Medientypen, -merkmalen oder -zuständen entspricht.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Nutzers eine Höhe von 680px oder mehr hat _oder_ wenn sich der Browser-Viewport im Hochformat befindet (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (height >= 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Nutzer in einem PDF druckt und die Seitenhöhe 800px beträgt, ist die Media Query wahr, weil die erste Anfragenkomponente – die prüft, ob der Viewport eine Höhe von `680px` oder mehr hat – wahr ist. Ebenso, wenn ein Nutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, ist die Media Query wahr, weil die zweite Anfragenkomponente wahr ist.

In einer durch Kommata getrennten Liste von Media Queries enden die individuellen Media Queries beim Komma oder, im Falle der letzten Media Query in der Liste, an der öffnenden Klammer (`{`).

### Umkehrung der Bedeutung einer Query

Das `not`-Schlüsselwort kehrt die Bedeutung einer einzelnen Media Query um. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles _außer_ auf gedruckte Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not`, ohne Klammern, negiert alle Merkmale innerhalb der Media Query, in der es enthalten ist. Dies bedeutet, dass in einer durch Kommata getrennten Liste von Media Queries, jedes `not` auf die einzelne Query angewendet wird, in der es sich befindet, und auf _alle_ Merkmale innerhalb dieser einzelnen Query. In diesem Beispiel wird das `not` auf die erste Media Query `screen and (color)` angewendet, die am ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Da die Query mit einem Medientyp `screen` beginnt, können Sie `screen and (color)` _nicht_ mit Klammern umschließen. Andererseits, wenn Ihre Media Query nur aus Merkmalen besteht, müssen Sie die Query klammern:

```css
@media not ((width > 1000px) and (color)), print and (color) {
  /* … */
}
```

Klammern begrenzen die Komponenten der Query, die negiert werden. Zum Beispiel, um nur die `(width > 1000px)` Query zu negieren:

```css
@media (not (width > 1000px)) and (color), print and (color) {
  /* … */
}
```

`not` negiert nur die Query rechts davon. In diesem Beispiel negieren wir das `hover`-Medienmerkmal, aber nicht den Medientyp `screen`:

```css
@media screen and not (hover) {
  /* … */
}
```

Das `not (hover)` trifft zu, wenn das Gerät keine Hover-Funktionalität hat. In diesem Fall, weil die Reihenfolge so ist, wird `not` auf `hover` angewendet, aber nicht auf `screen`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das `only`-Schlüsselwort verhindert, dass ältere Browser, die keine Media Queries mit Medienmerkmalen unterstützen, die gegebenen Stile anwenden. _Es hat keine Wirkung auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Merkmale mit `or`

Sie können `or` verwenden, um ein Übereinstimmungen unter mehr als einem Merkmal zu testen, wobei `true` zurückgegeben wird, wenn eines der Merkmale zutrifft. Zum Beispiel testet die folgende Query für Geräte, die ein monochromes Display oder Hover-Funktionalität haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den `or`-Operator nicht auf der gleichen Ebene wie die `and`- und `not`-Operatoren verwenden können. Sie können entweder die Medienmerkmale mit einem Komma trennen oder Klammern verwenden, um Unterausdrücke von Medienmerkmalen zu gruppieren, um die Reihenfolge der Auswertung klarzustellen.

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
- [Media Queries programmatisch testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
