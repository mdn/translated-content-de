---
title: Grundkonzepte des Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 3714892d278cd121e91b8efa4f96e18ea4c6dc8d
---

{{CSSRef}}

[CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Raster können verwendet werden, um große Seitenbereiche oder kleine Benutzeroberflächenelemente zu layouten. Dieser Artikel führt in das CSS-Rasterlayout und die neue Terminologie ein, die Teil der CSS-Rasterlayout-Level-1-Spezifikation ist. Die in diesem Überblick gezeigten Funktionen werden dann im restlichen Leitfaden ausführlicher erklärt.

## Was ist ein Raster?

Ein Raster ist ein Satz sich kreuzender horizontaler und vertikaler Linien, die Reihen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Reihenlinien auf das Raster gelegt werden. Das CSS-Rasterlayout bietet folgende Funktionen:

### Feste und flexible Spurgrößen

Sie können ein Raster mit festen Spurgrößen erstellen – zum Beispiel mit Pixeln. Dies setzt das Raster auf die spezifizierte Pixelgröße, die zu dem von Ihnen gewünschten Layout passt. Sie können auch ein Raster mit flexiblen Größen unter Verwendung von Prozentwerten oder mit der speziell dafür entwickelten Einheit `fr` erstellen.

### Platzierung von Elementen

Sie können Elemente an einer genauen Position auf dem Raster platzieren, indem Sie Liniennummern, Namen oder ein Zielgebiet des Rasters verwenden. Raster enthält auch einen Algorithmus zur Steuerung der Platzierung von Elementen, denen keine explizite Position auf dem Raster zugewiesen wurde.

### Erstellung zusätzlicher Spuren zur Aufnahme von Inhalten

Sie können ein explizites Raster mit Rasterlayout definieren. Die Rasterlayout-Spezifikation ist flexibel genug, um bei Bedarf zusätzliche Reihen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von „so vielen Spalten, die in einen Container passen“, sind enthalten.

### Ausrichtungssteuerung

Raster enthält Ausrichtungsfunktionen, sodass wir steuern können, wie die Elemente ausgerichtet werden, sobald sie in einem Rasterbereich platziert sind, und wie das gesamte Raster ausgerichtet ist.

### Steuerung von überlappenden Inhalten

Mehr als ein Element kann in eine Rasterzelle oder einen Bereich eingefügt werden und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}}-Eigenschaft gesteuert werden.

Das Raster ist eine leistungsstarke Spezifikation, die in Kombination mit anderen Teilen von CSS wie [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) helfen kann, Layouts zu erstellen, die zuvor in CSS nicht darstellbar waren. Alles beginnt mit der Erstellung eines Rasters in Ihrem **grid container**.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` auf einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Items_.

In diesem Beispiel habe ich ein enthaltenes div mit einer Klasse von wrapper und darin fünf Kindelementen.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Ich mache das `.wrapper` zu einem Grid-Container.

```css
.wrapper {
  display: grid;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('The_Grid_container', '200', '330') }}

Alle direkten Kinder sind jetzt Grid-Items. In einem Webbrowser sehen Sie keinen Unterschied in der Anzeige dieser Elemente, bevor sie in ein Raster umgewandelt werden, da das Raster eine einspaltige Anordnung für die Elemente erstellt hat. An dieser Stelle kann es nützlich sein, mit dem [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) zu arbeiten, der Teil der Firefox Developer Tools ist. Wenn Sie dieses Beispiel in Firefox anzeigen und das Raster inspizieren, sehen Sie ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf und dann wird das Raster auf diesem Element im Browserfenster überlagert angezeigt.

![Verwendung des Grid-Highlighters in DevTools zur Anzeige eines Rasters](1-grid-inspector.png)

Wenn Sie lernen und dann mit dem CSS-Rasterlayout arbeiten, wird Ihnen dieses Tool ein besseres visuelles Verständnis dafür geben, was mit Ihren Rastern geschieht.

Um mehr im Rasterdarstellungsstil zu arbeiten, müssen wir Spuren hinzufügen.

## Rasterspuren

Wir definieren Reihen und Spalten in unserem Raster mit den {{cssxref("grid-template-rows")}}- und {{cssxref("grid-template-columns")}}-Eigenschaften. Diese definieren die Spuren des Rasters. Eine _Rasterspur_ ist der Raum zwischen zwei benachbarten Linien im Raster. Das folgende Bild zeigt eine hervorgehobene Spur – dies ist die erste Spur in unserer Rasterzeile.

![Eine Box mit 3 Rasterelementen. Über den drei Elementen befindet sich ein durchgehender hellgrüner Bereich, der die Spur darstellt.](1_grid_track.png)

Rasterspuren werden im expliziten Raster durch die Verwendung der Eigenschaften `grid-template-columns` und `grid-template-rows` oder durch die Kurzformen `grid` oder `grid-template` definiert. Spuren werden auch im impliziten Raster erstellt, indem ein Rasterobjekt außerhalb der im expliziten Raster erstellten Spuren positioniert wird.

### Einfaches Beispiel

Ich kann unser früheres Beispiel erweitern, indem ich die `grid-template-columns`-Eigenschaft hinzufüge und dann die Größe der Spaltenspuren definiere.

Ich habe jetzt ein Raster mit drei 200 Pixel breiten Spaltenspuren erstellt. Die Kind-Elemente werden einzeln in dieser Rasterzelle angeordnet.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Basic_example', '610', '140') }}

### Die fr-Einheit

Spuren können unter Verwendung jeder Längeneinheit definiert werden. Raster führt auch eine zusätzliche Längeneinheit ein, die uns bei der Erstellung flexibler Rasterspuren hilft. Die neue `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Rastercontainer. Die nächste Rasterdefinition würde drei gleich breite Spuren erstellen, die sich entsprechend dem verfügbaren Raum vergrößern oder verkleinern.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('The_fr_unit', '220', '140') }}

### Ungleiche Größen

Im nächsten Beispiel erstellen wir eine Definition mit einer `2fr` Spur und dann zwei `1fr` Spuren. Der verfügbare Raum wird in vier Teile geteilt. Zwei Teile werden der ersten Spur gegeben und jeweils ein Teil den nächsten zwei Spuren.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Unequal_sizes', '220', '140') }}

### Mischung aus flexiblen und absoluten Größen

Im letzten Beispiel kombinieren wir absolut dimensionierte Spuren mit `fr`-Einheiten. Die erste Spur ist 500 Pixel, sodass die feste Breite vom verfügbaren Raum abgezogen wird. Der verbleibende Raum wird in drei Teile geteilt und proportional den zwei flexiblen Spuren zugewiesen.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Mixing_flexible_and_absolute_sizes', '220', '140') }}

### Spurlisten mit der repeat()-Notation

Große Raster mit vielen Spuren können die `repeat()`-Notation verwenden, um alle oder einen Teil der Spurliste zu wiederholen. Zum Beispiel kann die Rasterdefinition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

auch geschrieben werden als:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Wiederholungsnotation kann für einen Teil der Spurliste verwendet werden. Im nächsten Beispiel habe ich ein Raster mit einer anfänglichen 20-Pixel-Spur, dann einem wiederholten Abschnitt mit 6 `1fr` Spuren und letztlich einer abschließenden 20-Pixel-Spur erstellt.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Wiederholungsnotation nimmt die Spurliste und verwendet sie, um ein sich wiederholendes Muster von Spuren zu erstellen. Im nächsten Beispiel wird mein Raster aus 10 Spuren bestehen, einer `1fr` Spur, gefolgt von einer `2fr` Spur. Dieses Muster wird fünfmal wiederholt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Raster

Als wir unser Beispielraster erstellten, definierten wir speziell unsere Spaltenspuren mit der {{cssxref("grid-template-columns")}}-Eigenschaft, aber das Raster erstellte auch eigenständig Reihen. Diese Reihen sind Teil des impliziten Rasters. Während das explizite Raster alle mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definierten Reihen und Spalten umfasst.

Wenn Sie etwas außerhalb des definierten Rasters platzieren - oder aufgrund der Vielzahl von Inhalten mehr Rasterspuren benötigt werden - erstellt das Raster die erforderlichen Reihen und Spalten im impliziten Raster. Diese Spuren werden standardmäßig automatisch dimensioniert, basierend auf der Größe des Inhalts, der sich in ihnen befindet.

Sie können auch eine festgelegte Größe für Spuren definieren, die im impliziten Raster erstellt werden, unter Verwendung der {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} Eigenschaften.

Im untenstehenden Beispiel verwenden wir `grid-auto-rows`, um sicherzustellen, dass im impliziten Raster erstellte Spuren eine Höhe von 200 Pixeln haben.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('The_implicit_and_explicit_grid', '230', '450') }}

### Spurgrößen und minmax

Beim Einrichten eines expliziten Rasters oder beim Definieren der Größe für automatisch erstellte Reihen oder Spalten möchten wir den Spuren möglicherweise eine Mindestgröße geben, aber auch sicherstellen, dass sie sich an den hinzugefügten Inhalt anpassen. Zum Beispiel möchte ich vielleicht, dass meine Reihen niemals kleiner als 100 Pixel werden, aber wenn mein Inhalt auf 300 Pixel in der Höhe ansteigt, möchte ich, dass sich die Reihe an diese Höhe anpasst.

Das Raster bietet hierfür eine Lösung mit der Funktion {{cssxref("minmax", "minmax()")}}. Im nächsten Beispiel verwende ich `minmax()` im Wert von {{cssxref("grid-auto-rows")}}. Das bedeutet, dass automatisch erstellte Reihen mindestens 100 Pixel hoch sind und maximal `auto`. Die Verwendung von `auto` bedeutet, dass die Größe den Inhaltsgröße berücksichtigt und sich ausdehnt, um Platz für das höchste Element in einer Zelle in dieser Reihe zu bieten.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>
    Two
    <p>I have some more content in.</p>
    <p>This makes me taller than 100 pixels.</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Track_sizing_and_minmax', '240', '470') }}

## Rasterlinien

Es sollte beachtet werden, dass wir beim Definieren eines Rasters die Spuren des Rasters, nicht die Linien, definieren. Raster gibt uns dann nummerierte Linien, die wir verwenden können, wenn wir Elemente positionieren. In unserem Raster mit drei Spalten und zwei Reihen haben wir vier Spaltenlinien.

![Diagramm, das nummerierte Rasterlinien zeigt.](1_diagram_numbered_grid_lines.png)

Die Linien sind entsprechend dem Schreibmodus des Dokuments nummeriert. In einer Sprache von links nach rechts befindet sich die Linie 1 auf der linken Seite des Rasters. In einer Sprache von rechts nach links befindet sie sich auf der rechten Seite des Rasters. Linien können auch benannt werden, und wir werden später in dieser Leitfadenreihe darauf eingehen, wie dies durchgeführt wird.

### Positionierung von Elementen an Linien

Wir werden die auf Linien basierende Platzierung ausführlich in einem späteren Artikel untersuchen. Das folgende Beispiel demonstriert dies auf einfache Weise. Beim Platzieren eines Elements zielen wir auf die Linie – statt auf die Spur.

Im folgenden Beispiel platziere ich die ersten beiden Elemente auf unserem dreispurigen Spaltenraster unter Verwendung der Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}}. Von links nach rechts wird das erste Element an der Spaltenlinie 1 platziert und spannt sich bis zur Spaltenlinie 4, die in unserem Fall die äußerste rechte Linie im Raster ist. Es beginnt an der Reihenlinie 1 und endet an der Reihenlinie 3 und spannt somit zwei Reihen-Spuren.

Das zweite Element beginnt an der Spaltenlinie 1 des Rasters und überspannt eine Spur. Dies ist die Standardeinstellung, daher muss ich die Endlinie nicht angeben. Es überspannt auch zwei Zeilenspuren von der Zeilenlinie 3 bis zur Zeilenlinie 5. Die anderen Elemente werden sich in die leeren Räume im Raster platzieren.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Positioning_items_against_lines', '230', '450') }}

> [!NOTE]
> Vergessen Sie nicht, dass Sie den [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) in den Firefox Developer Tools verwenden können, um zu sehen, wie die Elemente gegen die Linien des Rasters positioniert sind.

### Kurzformen für die Linienpositionierung

Die im obigen Beispiel verwendeten Langformwerte können für Spalten mit {{cssxref("grid-column")}} und für Reihen mit {{cssxref("grid-row")}} auf eine Zeile komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code bereitstellen, jedoch mit weit weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

Sie können den Endwert weglassen, wenn der Bereich nur eine Spur überspannt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.box2 {
  grid-column: 1;
  grid-row: 3 / 5;
}
```

## Rasterzellen

Eine _Rasterzelle_ ist die kleinste Einheit in einem Raster. Konzeptionell ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, legen sich die Kindelemente in jeder definierten Rasterzelle an, sobald ein Raster als Elternteil definiert ist. Im folgenden Bild habe ich die erste Zelle des Rasters hervorgehoben.

![Die erste Rasterzelle hervorgehoben](1_grid_cell.png)

## Rasterbereiche

Elemente können eine oder mehrere Zellen sowohl in der Reihe als auch in der Spalte überspannen, und dies schafft einen _Rasterbereich_. Rasterbereiche müssen rechteckig sein – es ist zum Beispiel nicht möglich, einen L-förmigen Bereich zu schaffen. Der hervorgehobene Rasterbereich umfasst zwei Reihen- und zwei Spaltenspuren.

![Ein Rasterbereich](1_grid_area.png)

## Zwischenräume

_Zwischenräume_ oder _Gänge_ zwischen Rasterzellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}}, oder der Kurzform {{cssxref("gap")}} erstellt werden. Im untenstehenden Beispiel erstelle ich einen 10-Pixel-Abstand zwischen Spalten und einen `1em`-Abstand zwischen Reihen.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
```

> [!NOTE]
> Als das Raster erstmals in Browsern verfügbar wurde, wurden die Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} und {{cssxref("gap")}} mit dem `grid-`-Präfix als `grid-column-gap`, `grid-row-gap` und `grid-gap` vorangestellt.
>
> Alle Browser unterstützen jetzt nicht mehr vorangestellte Werte, jedoch werden die vorangestellten Versionen als Aliase beibehalten, was ihre Verwendung sicher macht.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  column-gap: 10px;
  row-gap: 1em;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Gutters') }}

Der von Zwischenräumen genutzte Raum wird berücksichtigt, bevor Raum an die flexible Längeneinheit `fr`-Spuren zugewiesen wird, und Zwischenräume wirken für Zweck wie Größenverhältnisse wie eine reguläre Rasterspur, jedoch kann nichts in einen Zwischenraum platziert werden. In Bezug auf die auf Linien basierende Positionierung verhält sich der Zwischenraum wie eine dicke Linie.

## Verschachtelung von Rastern

Ein Rasterelement kann ein Rastercontainer werden. Im folgenden Beispiel habe ich das zuvor erstellte dreispurige Raster mit unseren zwei positionierten Elementen. In diesem Fall hat das erste Element einige Unterelemente. Da diese Elemente keine direkten Kinder des Rasters sind, nehmen sie nicht am Rasterlayout teil und werden im normalen Dokumentenfluss angezeigt.

![Verschachteltes Raster im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Subgrid

Wenn ich `box1` auf `display: grid` setze, kann ich eine Spurdarstellung geben und es wird ebenfalls zu einem Raster. Die Elemente werden dann auf diesem neuen Raster angeordnet.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  gap: 3px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.box1 {
  grid-column: 1 / 4;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Nesting_without_subgrid', '600', '340') }}

In diesem Fall hat das verschachtelte Raster keine Beziehung zum übergeordneten Raster. Wie Sie im Beispiel sehen können, hat es den {{cssxref("gap")}} des übergeordneten Rasters nicht geerbt und die Linien im verschachtelten Raster stimmen nicht mit den Linien im übergeordneten Raster überein.

### Subgrid

Zusätzlich zu regulären Rastern erlaubt _Subgrid_ uns, verschachtelte Raster zu erstellen, die die Spurdarstellung des übergeordneten Rasters verwenden.

Um sie zu verwenden, bearbeiten wir das obige Beispiel des verschachtelten Rasters, um die Spurdarstellung von `grid-template-columns: repeat(3, 1fr)` in `grid-template-columns: subgrid` zu ändern. Das verschachtelte Raster verwendet dann die übergeordneten Rasterspuren, um Elemente anzuordnen.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: subgrid;
}
```

## Stapeln von Elementen mit z-index

Rasterelemente können dieselbe Zelle belegen und in diesem Fall können wir die Eigenschaft {{cssxref("z-index")}} verwenden, um die Reihenfolge zu steuern, in der sich überlappende Elemente stapeln.

### Überlappung ohne z-index

Wenn wir zu unserem Beispiel mit durch Liniennummern positionierten Elementen zurückkehren, können wir dies ändern, um zwei Elemente überlappen zu lassen.

```html
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Overlapping_without_z-index', '230', '460') }}

Das Element `box2` überlappt jetzt `box1` und wird darüber angezeigt, da es später in der Quellreihenfolge kommt.

### Steuerung der Reihenfolge

Wir können die Reihenfolge, in der sich die Elemente stapeln, mit der `z-index`-Eigenschaft steuern – genauso wie positionierte Elemente. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es unter `box1` in der Stapelung angezeigt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Controlling_the_order', '230', '460') }}

## Nächste Schritte

In diesem Artikel haben wir einen sehr kurzen Blick auf die Möglichkeiten der Rasterlayouts geworfen. Erkunden und experimentieren Sie mit den Codebeispielen und gehen Sie dann weiter zum [nächsten Teil dieses Leitfadens](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods), wo wir wirklich anfangen werden, die Details des CSS-Rasterlayouts zu erforschen.
