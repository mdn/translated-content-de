---
title: Verwendung von Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

**Media Queries** ermöglichen es Ihnen, CSS-Stile basierend auf dem Medientyp eines Geräts (z. B. Drucken vs. Bildschirm) oder anderen Merkmalen wie Bildschirmauflösung oder -ausrichtung, {{Glossary("aspect_ratio", "Bildseitenverhältnis")}}, Browser-{{Glossary("viewport", "Viewport")}}-Breite oder -Höhe, Benutzereinstellungen wie bevorzugte reduzierte Bewegung, Datennutzung oder Transparenz anzuwenden.

Media Queries werden für Folgendes verwendet:

- Bedingtes Anwenden von Stilen mit den [CSS](/de/docs/Web/CSS) {{cssxref("@media")}}- und {{cssxref("@import")}}-[At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule).
- Ansprechen bestimmter Medien für die {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} und andere [HTML](/de/docs/Web/HTML)-Elemente mit den Attributen `media=` oder `sizes="`.
- [Testen und Überwachen von Medienzuständen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) mithilfe der Methoden [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

> [!NOTE]
> Die Beispiele auf dieser Seite verwenden zur Veranschaulichung `@media` aus CSS, aber die grundlegende Syntax bleibt für alle Arten von Media Queries gleich.

## Syntax

Eine Media Query besteht aus einem optionalen _Medientyp_ und beliebig vielen _Media-Feature_-Ausdrücken, die optional auf verschiedene Weise mit _logischen Operatoren_ kombiniert werden können.
Media Queries sind nicht zwischen Groß- und Kleinschreibung unterscheidend.

- [Medientypen](/de/docs/Web/CSS/@media#media_types) definieren die übergeordnete Kategorie des Geräts, für die die Media Query gilt: `all`, `print`, `screen`.

  Der Typ ist optional (wird standardmäßig als `all` angenommen), außer wenn der logische Operator `only` verwendet wird.

- [Media Features](/de/docs/Web/CSS/@media#media_features) beschreiben eine spezifische Eigenschaft des {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder der Umgebung:

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

  Zum Beispiel ermöglicht das Feature {{cssxref("@media/hover", "hover")}}, eine Media Query zu erstellen, die überprüft, ob das Gerät Hovering über Elemente unterstützt.
  Media-Feature-Ausdrücke testen auf Vorhandensein oder Wert und sind vollständig optional.
  Jedes Media-Feature-Ausdruck muss in Klammern eingegrenzt werden.

- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) können verwendet werden, um eine komplexe Media Query zu erstellen: `not`, `and` und `only`.
  Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

Eine Media Query ergibt `true`, wenn der Medientyp (falls angegeben) mit dem Gerät übereinstimmt, auf dem ein Dokument angezeigt wird, _und_ alle Media-Feature-Ausdrücke zu `true` ausgewertet werden.
Abfragen mit unbekannten Medientypen ergeben immer `false`.

> [!NOTE]
> Ein Stylesheet mit einer an sein {{HTMLElement("link")}}-Tag gebundene Media Query [wird trotzdem heruntergeladen](https://scottjehl.github.io/CSS-Download-Tests/), auch wenn die Abfrage `false` ergibt. Der Download wird jedoch mit einer deutlich niedrigeren Priorität durchgeführt.
> Dennoch werden die Inhalte erst angewendet, wenn das Ergebnis der Anfrage zu `true` wechselt.
> Sie können in Tomayacs Blog [Why Browsers Download Stylesheets with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2) nachlesen, warum dies geschieht.

## Medientypen ansprechen

Medientypen beschreiben die allgemeine Kategorie eines gegebenen Geräts.
Obwohl Websites häufig für Screens entwickelt werden, möchten Sie möglicherweise Stile erstellen, die spezielle Geräte wie Drucker oder audio-basierte Screenreader ansprechen.
Dieses Beispiel zeigt CSS, das Drucker anspricht:

```css
@media print {
  /* … */
}
```

Sie können auch mehrere Geräte ansprechen.
In diesem Beispiel verwendet die `@media`-Regel zwei Media Queries, um sowohl Bildschirm- als auch Druckgeräte anzusprechen:

```css
@media screen, print {
  /* … */
}
```

Sehen Sie in der Liste der [Medientypen](/de/docs/Web/CSS/@media#media_types) nach, welche Optionen verfügbar sind.
Da Medientypen Geräte nur in sehr allgemeinen Begriffen beschreiben, wurden die meisten ursprünglich definierten Medientypen abgelehnt, wobei nur `screen`, `print` und `all` verblieben sind.
Um spezifischere Attribute anzusprechen, verwenden Sie stattdessen _Media Features_.

## Media Features ansprechen

Media Features beschreiben die spezifischen Merkmale eines bestimmten {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder einer Umgebung.
Zum Beispiel können Sie spezifische Stile für Breitbildmonitore, Computer mit Mausnutzung oder Geräte, die in Umgebungen mit schwachem Licht verwendet werden, anwenden.
Dieses Beispiel wendet Stile an, wenn der Benutzer eine _primäre_ Eingabemethode (wie eine Maus) verwendet, die Hovering über Elementen unterstützt:

```css
@media (hover: hover) {
  /* … */
}
```

Media Features können entweder Bereichs- oder diskrete Features sein.

_Diskrete Features_ nehmen ihren Wert aus einer {{Glossary("enumerated", "enumerierten")}} Menge möglicher Schlüsselwörter.
Zum Beispiel akzeptiert das diskrete `orientation`-Feature entweder `landscape` oder `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Viele _Bereichs-Features_ können mit "min-" oder "max-" vorangestellt werden, um "Mindestbedingung"- oder "Höchstbedingung"-Einschränkungen auszudrücken.
Das folgende CSS wendet nur Stile an, wenn die {{Glossary("viewport", "Viewport")}}-Breite Ihres Browsers gleich oder kleiner als 1250px ist:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Die folgenden Media Queries sind äquivalent zum obigen Beispiel:

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

Mit den Bereichs-Features von Media Queries können Sie entweder die inklusiven Präfixe `min-` und `max-` verwenden oder die prägnanteren Bereichs-Syntaxoperatoren `<=` und `>=`.

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

Wenn Sie eine Media-Feature-Query ohne Angabe eines Werts erstellen, werden die verschachtelten Stile verwendet, solange der Wert des Features nicht `0` oder `none` ist.
Zum Beispiel wird dieses CSS auf jedes Gerät mit Farbbildschirm angewendet:

```css
@media (color) {
  /* … */
}
```

Falls ein Feature nicht auf das Gerät zutrifft, auf dem der Browser ausgeführt wird, ergeben Ausdrücke, die dieses Media Feature verwenden, immer `false`.

Für weitere [Media Feature](/de/docs/Web/CSS/@media#media_features)-Beispiele sehen Sie bitte die Referenzseite für jedes spezifische Feature.

## Komplexe Media Queries erstellen

Manchmal möchten Sie eine Media Query erstellen, die von mehreren Bedingungen abhängt. Hier kommen die _logischen Operatoren_ ins Spiel: `not`, `and` und `only`.
Außerdem können Sie mehrere Media Queries zu einer kommagetrennten Liste kombinieren; dies erlaubt es Ihnen, dieselben Stile in verschiedenen Situationen anzuwenden, wobei die enthaltenen Media Queries als logische `or`-Zusammensetzung ausgewertet werden: Sie werden so interpretiert, als ob jede Media Query in Klammern steht und mit einem `or` dazwischen.

Im vorherigen Beispiel haben wir gesehen, dass der Operator `and` verwendet wurde, um einen Media-Typ mit einem Media Feature zu kombinieren.
Der Operator `and` kann auch mehrere Media Features innerhalb einer einzigen Media Query kombinieren.
Der Operator `not` negiert eine Media Query oder ein Media Feature beim Einsatz mit Klammern, was ihre normale Bedeutung im Wesentlichen umkehrt.
Der Operator `or` kann unter bestimmten Bedingungen verwendet werden, um mehrere Media Features innerhalb einer einzigen Media Query zu kombinieren.
Abschließend wurde der Operator `only` verwendet, um ältere Browser daran zu hindern, die Stile ohne die Evaluierung der Media-Feature-Ausdrücke anzuwenden, aber er hat in modernen Browsern keinen Effekt.

> [!NOTE]
> In den meisten Fällen wird der Medientyp `all` standardmäßig verwendet, wenn kein anderer Typ angegeben ist.
> Allerdings müssen Sie, falls Sie den Operator `only` verwenden, explizit einen Medientyp angeben.
> Sie können `only screen` oder `only print` als Gesamtbegriff sehen.

### Mehrere Typen oder Features kombinieren

Das Schlüsselwort `and` kombiniert ein Media Feature mit einem Medientyp _oder_ anderen Media Features.
Dieses Beispiel kombiniert zwei Media Features, um die Stile auf Geräte im Querformat mit einer Breite von mindestens 30 em zu beschränken:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Um die Stile auf Geräte mit Bildschirm zu beschränken, können Sie die Media Features mit dem Medientyp `screen` verbinden:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Prüfung mehrerer Abfragen

Sie können eine kommagetrennte Liste von Media Queries verwenden, um Stile anzuwenden, wenn das Gerät des Benutzers mit einem beliebigen der Media-Typen, -Features oder -Zustände übereinstimmt.

Die folgende Regel enthält zwei Media Queries. Die in ihrem Block enthaltenen Styles werden angewendet, wenn entweder das Gerät des Benutzers eine Höhe von 680px oder mehr hat _oder_ wenn sich das Browser-Viewport im Hochformat befindet (die Viewport-Höhe ist größer als die Viewport-Breite):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In diesem Beispiel ergibt die Media Query `true`, wenn der Benutzer eine PDF-Datei druckt und die Seitenhöhe 800px beträgt, da die erste Abfragekomponente – die überprüft, ob die Viewport-Höhe mindestens `680px` beträgt – wahr ist.
Ebenso ergibt die Media Query `true`, wenn ein Benutzer auf einem Smartphone im Hochformat mit einer Viewport-Höhe von 480px arbeitet, da die zweite Abfragekomponente wahr ist.

In einer kommagetrennten Liste von Media Queries endet jede einzelne Media Query am Komma oder, im Fall der letzten Media Query in der Liste, an der öffnenden geschwungenen Klammer (`{`).

### Bedeutung einer Abfrage invertieren

Das Schlüsselwort `not` kehrt die Bedeutung einer einzelnen Media Query um.
Zum Beispiel werden die in dieser Media Query enthaltenen CSS-Stile auf alles _außer_ gedruckte Medien angewendet:

```css
@media not print {
  /* … */
}
```

Das `not` negiert nur die Media Query, auf die es angewendet wird.
Ohne Klammern negiert `not` alle Features innerhalb der Media Query, in der es enthalten ist.
In einer kommagetrennten Liste von Media Queries gilt jedes `not` nur für die einzelne Query, in der es enthalten ist, und damit für _alle_ Features innerhalb dieser einzelnen Query.
In diesem Beispiel gilt das `not` für die erste Media Query, die am ersten Komma endet:

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
Media-Bedingungen können durch Einfassen in Klammern (`()`) gruppiert werden.
Diese Gruppen können dann wie eine einzelne Media Query innerhalb einer Bedingung verschachtelt werden.

Das `not` wird zuletzt in einer Media Query ausgewertet, das bedeutet, es gilt für die gesamte Media Query, nicht nur für ein einzelnes Feature innerhalb einer Abfrage, so als ob unmittelbar nach dem `not` eine öffnende Klammer hinzugefügt und am Ende der Media Query geschlossen wurde.

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

Sie wird nicht so ausgewertet:

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

Um ein einzelnes Feature innerhalb einer Media Query zu negieren, verwenden Sie Klammern.
Das Einfassen eines `not` und eines Media Features in Klammern beschränkt die Komponenten der Abfrage, die negiert werden.

In diesem Beispiel negieren wir das `hover`-Media Feature, aber nicht den Medientyp `all`:

```css
@media all and (not(hover)) {
  /* … */
}
```

Das `not(hover)` trifft zu, wenn das Gerät keine Hover-Funktionalität hat.
In diesem Fall gilt das `not`, aufgrund der Klammern, nur für `hover`, nicht jedoch für `all`.

### Verbesserung der Kompatibilität mit älteren Browsern

Das Schlüsselwort `only` verhindert, dass ältere Browser, die keine Media Queries mit Media Features unterstützen, die angegebenen Stile anwenden.
_In modernen Browsern hat es keinen Effekt._

```css
@media only screen and (color) {
  /* … */
}
```

### Testen mehrerer Features mit `or`

Sie können `or` verwenden, um mehrere Features zu prüfen und eine Übereinstimmung zu erzielen, wenn eines der Features `true` ergibt.
Zum Beispiel testet die folgende Abfrage Geräte, die ein monochromes Display oder Hover-Funktionalität besitzen:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

Beachten Sie, dass Sie den Operator `or` nicht auf derselben Ebene wie die Operatoren `and` und `not` verwenden können.
Sie können entweder die Media Features mit einem Komma trennen oder Klammern verwenden, um Unterausdrücke der Media Features zu gruppieren und die Auswertungsreihenfolge zu verdeutlichen.

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
- [Media Queries programmgesteuert testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS-Animationen innerhalb von Media Queries](https://davidwalsh.name/animate-media-queries)
- [Erweiterte Mozilla-Media-Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Media-Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
