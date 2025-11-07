---
title: Verwenden von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**Media Queries** ermöglichen es Ihnen, CSS-Stile basierend auf dem Medientyp eines Geräts (wie Druck vs. Bildschirm) oder anderen Eigenschaften wie Bildschirmauflösung oder -ausrichtung, {{Glossary("aspect_ratio", "Seitenverhältnis")}}, Browser-{{Glossary("viewport", "Viewport")}}-Breite oder -Höhe, Benutzereinstellungen wie reduzierte Bewegungen, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingtes Anwenden von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}} und {{cssxref("@import")}} [at-rules](/de/docs/Web/CSS/CSS_syntax/At-rules).
- Anvisieren spezifischer Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}, und andere [HTML](/de/docs/Web/HTML) Elemente mit den Attributen `media=` oder `sizes="`.
- Um [Medienzustände zu testen und zu überwachen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mithilfe der Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden `@media` von CSS zu Illustrationszwecken, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und einer beliebigen Anzahl von _Media-Feature_-Ausdrücken, die optional in verschiedener Weise mit _logischen Operatoren_ kombiniert werden können.
Media Queries sind nicht case-sensitiv.

- [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) definieren die breite Kategorie des Geräts, für das die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (wird als `all` angenommen), es sei denn, Sie verwenden den logischen Operator `only`.

- [Media-Features](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) beschreiben eine spezifische Eigenschaft des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung:
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

  Beispielsweise erlaubt das {{cssxref("@media/hover", "hover")}}-Feature einer Query zu überprüfen, ob das Gerät das Überfahren von Elementen unterstützt.
  Media Feature-Ausdrücke testen auf ihre Anwesenheit oder ihren Wert und sind vollständig optional.
  Jedes Media Feature-Ausdruck muss in Klammern gesetzt werden.

- [Logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and`, und `only`.
  Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

Eine Media Query wird als `true` ausgewertet, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, _und_ alle Media Feature-Ausdrücke als wahr berechnet werden.
Abfragen mit unbekannten Medientypen sind immer falsch.

> [!NOTE]
> Ein Style Sheet mit einer an sein {{HTMLElement("link")}}-Tag angehängten Media Query [wird dennoch heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), selbst wenn die Query `false` zurückgibt. Der Download findet statt, jedoch mit wesentlich niedrigerer Priorität.
> Dennoch werden seine Inhalte erst dann angewendet, wenn und sofern das Ergebnis der Query in `true` geändert wird.
> Sie können in Tomayacs Blog nachlesen, warum dies geschieht, [Warum Browser Stylesheets mit nicht übereinstimmenden Media Queries herunterladen](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Anvisieren von Medientypen

Medientypen beschreiben die allgemeine Kategorie eines gegebenen Geräts.
Obwohl Websites häufig mit Blick auf Bildschirme gestaltet werden, möchten Sie möglicherweise Stile erstellen, die spezielle Geräte wie Drucker oder audio-basierte Bildschirmlesegeräte anvisieren.
Zum Beispiel zielt dieses CSS auf Drucker ab:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte anvisieren.
Zum Beispiel verwendet diese `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte anzuvisieren:

```css
@media screen, print {
  /* … */
}
```

Siehe [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) für die Liste der verfügbaren Medientypen.
Da Medientypen Geräte sehr allgemein beschreiben, wurden die meisten ursprünglich definierten Medientypen veraltet, wobei nur `screen`, `print` und `all` verbleiben. Um gezieltere Attribute anzusprechen, verwenden Sie _Media Features_ stattdessen.

## Anvisieren von Media Features

Media Features beschreiben die spezifischen Eigenschaften eines gegebenen {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder der Umgebung.
Beispielsweise können Sie spezifische Stile auf Breitbild-Monitore, Computer, die Mäuse verwenden, oder Geräte anwenden, die unter Bedingungen mit wenig Licht genutzt werden.
Dieses Beispiel wendet Stile an, wenn der _Hauptinputmechanismus_ des Benutzers (wie eine Maus) über Elemente schweben kann:

```css
@media (hover: hover) {
  /* … */
}
```

Media Features sind entweder Bereichs- oder diskrete Features.

_Diskrete Features_ nehmen ihren Wert aus einer {{Glossary("enumerated", "enumerierten")}} Menge möglicher Schlüsselwortwerte. Zum Beispiel akzeptiert das diskrete `orientation`-Feature entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichs-Features_ können mit "min-" oder "max-" präfixiert werden, um Einschränkungen für "minimale Bedingung" oder "maximale Bedingung" auszudrücken.
Zum Beispiel wird dieses CSS nur dann Stile anwenden, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder kleiner als 1250px ist:

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

Bei Media Query Bereichs-Features können Sie entweder die inklusiven Präfixe `min-` und `max-` verwenden oder die prägnanteren Bereichssyntax-Operatoren `<=` und `>=`.

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

Die oben genannten Bereichsvergleiche sind inklusiv. Um den Vergleichswert auszuschließen, verwenden Sie `<` und/oder `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

Wenn Sie eine Media Feature-Query ohne Angabe eines Wertes erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Features nicht `0` oder `none` ist.
Zum Beispiel wird dieses CSS auf jedes Gerät mit Farbdisplay angewendet:

```css
@media (color) {
  /* … */
}
```

Wenn ein Feature nicht auf das Gerät angewendet wird, auf dem der Browser ausgeführt wird, sind Ausdrücke, die dieses Media Feature betreffen, immer falsch.

Für weitere [Media Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)-Beispiele lesen Sie bitte die Referenzseite für jedes spezifische Feature.

## Erstellen komplexer Media Queries

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and`, und `only`.
Darüber hinaus können Sie mehrere Media Queries zu einer durch Kommas getrennten Liste kombinieren; dies ermöglicht es Ihnen, dieselben Stile in verschiedenen Situationen anzuwenden, wobei die enthaltenen Media Queries als logische `or`-Zusammensetzung bewertet werden: interpretiert als ob jede Media Query in Klammern mit einem `or` dazwischen wäre.

Im vorherigen Beispiel haben wir den `and`-Operator verwendet, um einen Medien-_Typ_ mit einem Media-_Feature_ zu gruppieren.
Der `and`-Operator kann auch mehrere Media Features innerhalb einer einzelnen Media Query kombinieren.
Der `not`-Operator negiert eine Media Query oder ein Media Feature, wenn er mit Klammern verwendet wird, wodurch im Grunde ihre normale Bedeutung umgekehrt wird.
Der `or`-Operator kann, unter bestimmten Bedingungen, verwendet werden, um mehrere Media Features innerhalb einer einzelnen Media Query zu kombinieren.
Zuletzt wurde der `only`-Operator verwendet, um zu verhindern, dass ältere Browser die Stile anwenden, ohne die Media Feature-Ausdrücke auszuwerten, aber in modernen Browsern hat er keine Wirkung.

> [!NOTE]
> In den meisten Fällen wird der Medientyp `all` standardmäßig verwendet, wenn kein anderer Typ angegeben wird.
> Wenn Sie jedoch den `only`-Operator verwenden, müssen Sie explizit einen Medientyp angeben. Sie können `only screen` oder `only print` als Ganzes sehen.

### Kombinieren mehrerer Typen oder Features

Das Schlüsselwort `and` kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features.
Dieses Beispiel kombiniert zwei Media Features, um die Stile auf Geräte im Querformat mit einer Breite von mindestens 30 ems zu beschränken:

```css
@media (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit einem Bildschirm zu beschränken, können Sie die Media Features mit dem Bildschirmmedientyp verketten:

```css
@media screen and (width >= 30em) and (orientation: landscape) {
  /* … */
}
```

### Testen auf mehrere Queries

Sie können eine durch Kommas getrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers einem der verschiedenen Medientypen, Features oder Zustände entspricht.

Die folgende Regel enthält zwei Media Queries. Die Stile des Blocks werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn sich der Browser-Viewport im Hochformat befindet (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (height >= 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel, wenn der Benutzer in eine PDF druckt und die Seitenhöhe 800px beträgt, gibt die Media Query true zurück, weil die erste Abfragekomponente — die testet, ob der Viewport eine Höhe von `680px` oder mehr hat — true ist.
Ebenso, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px ist, gibt die Media Query true zurück, weil die zweite Abfragekomponente true ist.

In einer durch Kommas getrennten Liste von Media Queries enden die einzelnen Media Queries am Komma oder, im Fall der letzten Media Query in der Liste, an der öffnenden Klammer (`{`).

### Bedeutung einer Query umkehren

Das Schlüsselwort `not` kehrt die Bedeutung einer einzelnen Media Query um. Beispielsweise werden die CSS-Stile in dieser Media Query auf alles _außer_ Druckmedien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird. Das `not`, ohne Klammern, negiert alle Features innerhalb der Media Query, in der es enthalten ist. Das bedeutet, dass in einer durch Kommas getrennten Liste von Media Queries jedes `not` auf die einzelne Query angewendet wird, in der es enthalten ist, und _alle_ Features innerhalb dieser einzelnen Query betrifft. In diesem Beispiel wird das `not` auf die erste Media Query `screen and (color)` angewendet, die beim ersten Komma endet:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Da die Abfrage mit einem Medientyp `screen` beginnt, können Sie `screen and (color)` nicht in Klammern setzen. Andererseits, wenn Ihre Media Query nur aus Features besteht, müssen Sie die Abfrage in Klammern setzen:

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

`not` negiert nur die Abfrage zu seiner Rechten. In diesem Beispiel negieren wir das `hover` Media Feature, aber nicht den `screen` Medientyp:

```css
@media screen and not (hover) {
  /* … */
}
```

Das `not (hover)` trifft zu, wenn das Gerät keine Hover-Fähigkeit hat. In diesem Fall, aufgrund seiner Reihenfolge, gilt das `not` für `hover` aber nicht für `screen`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die keine Media Queries mit Media Features unterstützen, die gegebenen Stile anwenden.
_Es hat keine Wirkung auf moderne Browser._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen auf mehrere Features mit `or`

Sie können `or` verwenden, um auf eine Übereinstimmung zwischen mehr als einem Feature zu testen, das `true` ist, wenn eines der Features wahr ist.
Zum Beispiel testet die folgende Abfrage auf Geräte, die entweder ein Monochromanzeige- oder eine Hover-Fähigkeit haben:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den `or`-Operator nicht auf der gleichen Ebene wie die `and` und `not`-Operatoren verwenden können. Sie können entweder die Media Features mit einem Komma trennen oder Klammern verwenden, um Unterausdrücke von Media Features zu gruppieren, um die Reihenfolge der Auswertung zu klären.

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
- [Containment Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Medienabfragen programmatisch testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS-Animationen zwischen Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Media-Features](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Media-Features](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
