---
title: Verwenden von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**Media Queries** ermöglichen es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (wie Druck vs. Bildschirm) oder anderen Merkmalen oder Eigenschaften wie Bildschirmauflösung oder Orientierung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, Browser-{{Glossary("viewport", "Viewport")}}-Breite oder -Höhe, Benutzerpräferenzen wie verminderte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingtes Anwenden von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule).
- Zielgerichtetes Ansprechen spezifischer Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}, und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="`.
- [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mithilfe der Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS's `@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Medienmerkmals_ausdrücken, die optional in verschiedenen Weisen mit \_logischen Operatoren_ kombiniert werden können.
Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die breite Kategorie von Geräten, für die die Media Query gilt: `all`, `print`, `screen`.

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

  Zum Beispiel erlaubt das {{cssxref("@media/hover", "hover")}}-Merkmal eine Abfrage, ob das Gerät das Überfahren von Elementen mit der Maus unterstützt.
  Medienmerkmalsausdrücke testen auf ihre Präsenz oder ihren Wert und sind völlig optional.
  Jedes Medienmerkmalsausdruck muss in Klammern eingefasst werden.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and`, und `only`.
  Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

Eine Media Query ergibt `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, _und_ alle Medienmerkmalsausdrücke als wahr berechnet werden.
Abfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query an seinem {{HTMLElement("link")}}-Tag [wird dennoch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), sogar wenn die Abfrage `false` ergibt, der Download erfolgt aber mit deutlich niedrigerer Priorität.
> Dennoch wird sein Inhalt nicht angewendet, es sei denn, das Ergebnis der Abfrage ändert sich zu `true`.
> Sie können in Tomayacs Blog lesen, warum das passiert: [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Ansprechen von Medientypen

Medientypen beschreiben die allgemeine Kategorie eines Geräts.
Obwohl Websites häufig für Bildschirme entwickelt werden, möchten Sie möglicherweise Stile für spezielle Geräte wie Drucker oder audiobasierte Screenreader erstellen.
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

Siehe [Medientypen](/de/docs/Web/CSS/@media#media_types) für die Liste der verfügbaren Medientypen.
Da Medientypen Geräte in sehr allgemeinen Begriffen beschreiben, wurden die meisten der ursprünglich definierten Medientypen veraltet, wobei nur `screen`, `print` und `all` verbleiben. Um spezifischere Attribute anzusprechen, verwenden Sie stattdessen _Medienmerkmale_.

## Ansprechen von Medienmerkmalen

Medienmerkmale beschreiben die spezifischen Eigenschaften eines gegebenen {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder Umgebung.
Zum Beispiel können Sie spezielle Stile auf Breitbildmonitore, Computer, die Mäuse verwenden, oder auf Geräte anwenden, die in lichtarmen Bedingungen genutzt werden.
Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingabemechanismus des Benutzers (wie eine Maus) über Elemente fahren kann:

```css
@media (hover: hover) {
  /* … */
}
```

Medienmerkmale sind entweder Bereichs- oder diskrete Merkmale.

_Diskrete Merkmale_ nehmen ihren Wert aus einem {{Glossary("enumerated", "enumerierten")}} Satz von möglichen Schlüsselwortwerten. Zum Beispiel akzeptiert das diskrete Merkmal `orientation` entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichsmerkmale_ können mit "min-" oder "max-" vorangestellt werden, um "Mindestbedingung" oder "Maximalbedingung" auszudrücken.
Zum Beispiel wird dieses CSS nur angewendet, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder schmaler als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Die folgenden Media Queries sind zum obigen Beispiel äquivalent:

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

Mit Medienbereichsmerkmalen können Sie entweder die inklusiven Präfixe `min-` und `max-` oder die prägnanteren Bereichssyntax-Operatoren `<=` und `>=` verwenden.

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

Die Bereichsvergleiche oben sind inklusiv. Um den Vergleichswert auszuschließen, verwenden Sie `<` und/oder `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

Wenn Sie eine Medienmerkmalsabfrage ohne Angabe eines Werts erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Merkmals nicht `0` oder `none` ist.
Zum Beispiel wird dieses CSS auf jedes Gerät mit Farbbildschirm angewandt:

```css
@media (color) {
  /* … */
}
```

Wenn ein Merkmal nicht auf das Gerät zutrifft, auf dem der Browser gerade läuft, sind Ausdrücke, die dieses Medienmerkmal betreffen, immer falsch.

Für mehr [Medienmerkmale](/de/docs/Web/CSS/@media#media_features)-Beispiele besuchen Sie bitte die Referenzseite für jede spezifizierte Funktion.

## Erstellen von komplexen Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and`, und `only`.
Darüber hinaus können Sie mehrere Media Queries in eine kommagetrennte Liste kombinieren; dies ermöglicht es Ihnen, die gleichen Stile in verschiedenen Situationen anzuwenden, wobei die enthaltenen Media Queries als logische `or`-Komposition ausgewertet werden: so interpretiert, als ob jede Media Query in Klammern mit einem `or` dazwischen stehen würde.

Im vorherigen Beispiel sahen wir den `and`-Operator, der verwendet wurde, um einen Medientyp mit einem Medienmerkmal zu gruppieren.
Der `and`-Operator kann auch mehrere Medienmerkmale innerhalb einer einzigen Media Query kombinieren.
Der `not`-Operator negiert eine Media Query oder ein Medienmerkmal, wenn es mit Klammern verwendet wird, und kehrt im Grunde ihre normalen Bedeutungen um.
Der `or`-Operator kann unter bestimmten Bedingungen verwendet werden, um mehrere Medienmerkmale innerhalb einer einzigen Media Query zu kombinieren.
Zuletzt wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile anwenden, ohne die Medienmerkmalsausdrücke zu evaluieren, hat jedoch in modernen Browsern keine Wirkung.

> [!NOTE]
> In den meisten Fällen wird der Medientyp `all` standardmäßig verwendet, wenn kein anderer Typ angegeben ist.
> Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie einen Medientyp explizit angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombinieren mehrerer Typen oder Merkmale

Das Schlüsselwort `and` kombiniert ein Medienmerkmal mit einem Medientyp _oder_ anderen Medienmerkmalen.
Dieses Beispiel kombiniert zwei Medienmerkmale, um Stile auf landschaftsorientierte Geräte mit einer Breite von mindestens 30 ems zu beschränken:

```css
@media (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Medienmerkmale an den Medientyp `screen` anhängen:

```css
@media screen and (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen mehrerer Abfragen

Sie können eine kommagetrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers irgendeinen von verschiedenen Medientypen, Merkmalen oder Zuständen erfüllt.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn der Browser-Viewport im Hochformat ist (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (height >= 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer ein Dokument als PDF druckt und die Seitenhöhe 800px beträgt, gibt die Media Query `true` zurück, da die erste Abfragekomponente — die testet, ob der Viewport eine Höhe von `680px` oder mehr hat — wahr ist.
Ebenso, wenn ein Benutzer ein Smartphone im Hochformat mit einer Viewport-Höhe von 480px verwendet, gibt die Media Query `true` zurück, weil die zweite Abfragekomponente wahr ist.

In einer kommagetrennten Liste von Media Queries enden die einzelnen Media Queries am Komma oder, im Fall der letzten Media Query in der Liste, an der öffnenden Klammer (`{`).

### Umkehren der Bedeutung einer Abfrage

Das Schlüsselwort `not` kehrt die Bedeutung einer einzelnen Media Query um. Zum Beispiel werden die CSS-Stile in dieser Media Query auf alles außer auf gedruckte Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not`, ohne Klammern, negiert alle Merkmale innerhalb der Media Query, in der es enthalten ist. Dies bedeutet, dass in einer kommagetrennten Liste von Media Queries jeder `not` auf die einzelne Abfrage angewendet wird, in der es enthalten ist, und auf _alle_ Merkmale innerhalb dieser einzelnen Abfrage. In diesem Beispiel bezieht sich das `not` auf die erste Media Query `screen and (color)`, die beim ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Da die Abfrage mit einem Medientyp `screen` beginnt, _kann_ `screen and (color)` nicht mit Klammern umgeben werden. Andererseits, wenn Ihre Media Query nur aus Merkmalen besteht, dann _müssen_ Sie die Abfrage mit Klammern versehen:

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

`not` negiert nur die Abfrage zu seiner Rechten. In diesem Beispiel negieren wir das Medienmerkmal `hover`, aber nicht den Medientyp `screen`:

```css
@media screen and not (hover) {
  /* … */
}
```

Das `not (hover)` trifft zu, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall, aufgrund seiner Anordnung, bezieht sich das `not` auf `hover`, aber nicht auf `screen`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die Media Queries mit Medienmerkmalen nicht unterstützen, die gegebenen Stile anwenden.
_Es hat keine Wirkung auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Merkmale mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung unter mehr als einem Merkmal zu testen, die zu `true` auslöst, wenn eines der Merkmale wahr ist.
Zum Beispiel testet die folgende Abfrage Geräte, die eine monochrome Anzeige oder eine Hover-Fähigkeit haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den `or`-Operator nicht auf der gleichen Ebene wie die `and`- und `not`-Operatoren verwenden können. Sie können entweder die Medienmerkmale mit einem Komma trennen oder Klammern verwenden, um Unterausdrücke von Medienmerkmalen zu gruppieren, um die Reihenfolge der Auswertung zu verdeutlichen.

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
- [Programmatisches Testen von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
