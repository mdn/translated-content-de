---
title: Verwendung von Media Queries
slug: Web/CSS/Guides/Media_queries/Using
l10n:
  sourceCommit: 44eeeccd6f2799db65aedaf2d23290d20057ce9e
---

**Media Queries** ermöglichen es Ihnen, CSS-Stile abhängig vom Medientyp eines Geräts (etwa Druck im Gegensatz zu Bildschirm) oder von anderen Merkmalen bzw. Eigenschaften wie Bildschirmauflösung oder -ausrichtung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, Breite oder Höhe des Browser-{{Glossary("viewport", "Viewport")}}, Benutzereinstellungen wie einer Präferenz für reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Um Stile bedingt mit den [at-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/de/docs/Web/CSS) {{cssxref("@media")}}, {{cssxref("@custom-media")}} und {{cssxref("@import")}} anzuwenden.
- Um bestimmte Medien für die [HTML](/de/docs/Web/HTML)-Elemente {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und weitere mit den Attributen `media=` oder `sizes="` anzusprechen.
- Um Medienzustände mithilfe der Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) [zu testen und zu überwachen](/de/docs/Web/CSS/Guides/Media_queries/Testing).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden CSS-`@media` zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von Ausdrücken für _Medienmerkmale_, die optional auf verschiedene Arten mithilfe _logischer Operatoren_ kombiniert werden können.
Bei Media Queries wird Groß- und Kleinschreibung nicht berücksichtigt.

- [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) definieren die allgemeine Kategorie von Geräten, für die die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (es wird `all` angenommen), außer wenn der logische Operator `only` verwendet wird.

- [Medienmerkmale](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) beschreiben eine spezifische Eigenschaft des {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder der Umgebung:
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

  Beispielsweise ermöglicht das Merkmal {{cssxref("@media/hover", "hover")}} einer Abfrage zu prüfen, ob das Gerät das Überfahren von Elementen mit einem Zeiger unterstützt.
  Ausdrücke für Medienmerkmale testen auf deren Vorhandensein oder Wert und sind vollständig optional.
  Jeder Ausdruck für ein Medienmerkmal muss von Klammern umgeben sein.

- [Logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zusammenzustellen: `not`, `and` und `only`.
  Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie durch Kommas trennen.

Eine Media Query ergibt `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, _und_ alle Ausdrücke für Medienmerkmale `true` ergeben.
Abfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Stylesheet mit einer Media Query, die an sein {{HTMLElement("link")}}-Tag angehängt ist, [wird dennoch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), auch wenn die Abfrage `false` ergibt; der Download erfolgt, jedoch mit deutlich geringerer Priorität.
> Sein Inhalt wird jedoch erst angewendet, wenn das Ergebnis der Abfrage zu `true` wechselt.
> Warum dies geschieht, können Sie in Tomayacs Blogbeitrag [Why Browsers Download Stylesheets With Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2) nachlesen.

## Medientypen ansprechen

Medientypen beschreiben die allgemeine Kategorie eines bestimmten Geräts.
Obwohl Websites üblicherweise für Bildschirme gestaltet werden, möchten Sie möglicherweise Stile erstellen, die spezielle Geräte wie Drucker oder audiobasierte Screenreader ansprechen.
Dieses CSS richtet sich beispielsweise an Drucker:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte ansprechen.
Diese `@media`-Regel verwendet beispielsweise zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte anzusprechen:

```css
@media screen, print {
  /* … */
}
```

Eine Liste der verfügbaren Medientypen finden Sie unter [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types).
Da Medientypen Geräte nur sehr allgemein beschreiben, wurden die meisten ursprünglich definierten Medientypen als veraltet eingestuft; nur `screen`, `print` und `all` bleiben erhalten. Um spezifischere Eigenschaften anzusprechen, verwenden Sie stattdessen _Medienmerkmale_.

## Medienmerkmale ansprechen

Medienmerkmale beschreiben die spezifischen Eigenschaften eines bestimmten {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder einer Umgebung.
Sie können beispielsweise spezifische Stile auf Breitbildmonitore, Computer mit Mäusen oder Geräte anwenden, die bei schlechten Lichtverhältnissen verwendet werden.
Dieses Beispiel wendet Stile an, wenn der _primäre_ Eingabemechanismus des Benutzers (z. B. eine Maus) über Elemente fahren kann:

```css
@media (hover: hover) {
  /* … */
}
```

Medienmerkmale sind entweder Bereichsmerkmale oder diskrete Merkmale.

_Diskrete Merkmale_ beziehen ihren Wert aus einer {{Glossary("enumerated", "aufgezählten")}} Menge möglicher Schlüsselwortwerte. Das diskrete Merkmal `orientation` akzeptiert beispielsweise entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichsmerkmale_ können mit „min-“ oder „max-“ vorangestellt werden, um Einschränkungen für eine „Mindestbedingung“ oder „Höchstbedingung“ auszudrücken.
Dieses CSS wendet beispielsweise nur dann Stile an, wenn die Breite des {{Glossary("viewport", "Viewport")}} Ihres Browsers gleich oder kleiner als 1250px ist:

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

Bei Bereichsmerkmalen von Media Queries können Sie entweder die einschließenden Präfixe `min-` und `max-` oder die kürzeren Operatoren der Bereichssyntax `<=` und `>=` verwenden.

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

Die obigen Bereichsvergleiche sind einschließend. Um den Vergleichswert auszuschließen, verwenden Sie `<` und/oder `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

Wenn Sie eine Abfrage für ein Medienmerkmal erstellen, ohne einen Wert anzugeben, werden die verschachtelten Stile verwendet, solange der Wert des Merkmals weder `0` noch `none` ist.
Dieses CSS gilt beispielsweise für jedes Gerät mit einem Farbbildschirm:

```css
@media (color) {
  /* … */
}
```

Wenn ein Merkmal nicht auf das Gerät zutrifft, auf dem der Browser ausgeführt wird, sind Ausdrücke, die dieses Medienmerkmal enthalten, immer falsch.

Weitere Beispiele für [Medienmerkmale](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) finden Sie auf der Referenzseite des jeweiligen Merkmals.

## Komplexe Media Queries erstellen

Manchmal möchten Sie möglicherweise eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`.
Außerdem können Sie mehrere Media Queries in einer durch Kommas getrennten Liste kombinieren; dadurch können Sie dieselben Stile in verschiedenen Situationen anwenden, wobei die enthaltenen Media Queries als logische `or`-Verknüpfung ausgewertet werden: so interpretiert, als befände sich jede Media Query in Klammern und zwischen ihnen stünde ein `or`.

Im vorherigen Beispiel haben wir den Operator `and` verwendet, um einen Medien-_Typ_ mit einem Medien-_Merkmal_ zu gruppieren.
Der Operator `and` kann auch mehrere Medienmerkmale innerhalb einer einzelnen Media Query kombinieren.
Der Operator `not` negiert eine Media Query oder, bei Verwendung mit Klammern, ein Medienmerkmal, wodurch ihre normale Bedeutung grundsätzlich umgekehrt wird.
Der Operator `or` kann unter bestimmten Bedingungen verwendet werden, um mehrere Medienmerkmale innerhalb einer einzelnen Media Query zu kombinieren.
Schließlich wurde der Operator `only` verwendet, um ältere Browser daran zu hindern, die Stile anzuwenden, ohne die Ausdrücke für Medienmerkmale auszuwerten; in modernen Browsern hat er jedoch keine Wirkung.

> [!NOTE]
> In den meisten Fällen wird standardmäßig der Medientyp `all` verwendet, wenn kein anderer Typ angegeben ist.
> Wenn Sie jedoch den Operator `only` verwenden, müssen Sie explizit einen Medientyp angeben. Sie können `only screen` oder `only print` als Ganzes betrachten.

### Mehrere Typen oder Merkmale kombinieren

Das Schlüsselwort `and` kombiniert ein Medienmerkmal mit einem Medientyp _oder_ anderen Medienmerkmalen.
Dieses Beispiel kombiniert zwei Medienmerkmale, um Stile auf Geräte im Querformat mit einer Breite von mindestens 30 em zu beschränken:

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

### Mehrere Abfragen testen

Sie können eine durch Kommas getrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem von verschiedenen Medientypen, Merkmalen oder Zuständen übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ sich der Browser-Viewport im Hochformat befindet (die Höhe des Viewport ist größer als seine Breite):

```css
@media (height >= 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel ergibt die Media Query `true`, wenn der Benutzer in eine PDF-Datei druckt und die Seitenhöhe 800px beträgt, weil die erste Abfragekomponente – die prüft, ob der Viewport eine Höhe von `680px` oder mehr aufweist – `true` ergibt.
Ebenso ergibt die Media Query `true`, wenn ein Benutzer ein Smartphone im Hochformat mit einer Viewport-Höhe von 480px verwendet, weil die zweite Abfragekomponente `true` ergibt.

In einer durch Kommas getrennten Liste von Media Queries enden die einzelnen Media Queries am Komma bzw. bei der letzten Media Query der Liste an der öffnenden Klammer (`{`).

### Die Bedeutung einer Abfrage umkehren

Das Schlüsselwort `not` kehrt die Bedeutung einer einzelnen Media Query um. Die CSS-Stile in dieser Media Query werden beispielsweise auf alles außer Druckmedien angewendet:

```css
@media not print {
  /* … */
}
```

`not` negiert nur die Media Query, auf die es angewendet wird. `not` ohne Klammern negiert alle Merkmale innerhalb der Media Query, in der es enthalten ist. Das bedeutet, dass in einer durch Kommas getrennten Liste von Media Queries jedes `not` auf die einzelne Abfrage angewendet wird, in der es enthalten ist, und auf _alle_ Merkmale innerhalb dieser einzelnen Abfrage wirkt. In diesem Beispiel wird `not` auf die erste Media Query `screen and (color)` angewendet, die am ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Da die Abfrage mit dem Medientyp `screen` beginnt, können Sie `screen and (color)` _nicht_ in Klammern setzen. Wenn Ihre Media Query dagegen nur aus Merkmalen besteht, _müssen_ Sie die Abfrage in Klammern setzen:

```css
@media not ((width > 1000px) and (color)), print and (color) {
  /* … */
}
```

Klammern begrenzen die Komponenten der Abfrage, die negiert werden. Um beispielsweise nur die Abfrage `(width > 1000px)` zu negieren:

```css
@media (not (width > 1000px)) and (color), print and (color) {
  /* … */
}
```

`not` negiert nur die Abfrage rechts davon. In diesem Beispiel negieren wir das Medienmerkmal `hover`, aber nicht den Medientyp `screen`:

```css
@media screen and not (hover) {
  /* … */
}
```

`not (hover)` stimmt überein, wenn das Gerät nicht über Hover-Fähigkeit verfügt. In diesem Fall wirkt `not` aufgrund seiner Reihenfolge auf `hover`, aber nicht auf `screen`.

### Kompatibilität mit älteren Browsern verbessern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die Media Queries mit Medienmerkmalen nicht unterstützen, die angegebenen Stile anwenden.
_Es hat keine Wirkung auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Mehrere Merkmale mit `or` testen

Sie können `or` verwenden, um auf eine Übereinstimmung mit mehr als einem Merkmal zu testen; das Ergebnis ist `true`, wenn eines der Merkmale `true` ergibt.
Die folgende Abfrage testet beispielsweise auf Geräte mit einem monochromen Display oder Hover-Fähigkeit:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den Operator `or` nicht auf derselben Ebene wie die Operatoren `and` und `not` verwenden können. Sie können die Medienmerkmale entweder durch ein Komma trennen oder Klammern verwenden, um Teilausdrücke von Medienmerkmalen zu gruppieren und so die Auswertungsreihenfolge zu verdeutlichen.

Die folgenden Abfragen sind beispielsweise beide gültig:

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
- [Media Queries programmgesteuert testen](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [CSS Animations Between Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
