---
title: "`border-shape` CSS property"
short-title: border-shape
slug: Web/CSS/Reference/Properties/border-shape
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{SeeCompatTable}}

Die **`border-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Randform eines Elements unter Verwendung von {{cssxref("basic-shape")}} Werten.

## Syntax

```css
/* Keyword */
border-shape: none;

/* Single <basic-shape> value */
border-shape: circle(50%);
border-shape: rect(10px 460px 130px 20px round 20px);
border-shape: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* Two <basic-shape> values */
border-shape: circle(50%) ellipse(40% 30%);
border-shape: polygon(0% 0%, 0% 100%, 100% 0%)
  polygon(10% 10%, 10% 70%, 70% 10%);

/* <basic-shape> and <geometry-box> values */
border-shape: circle(50%) border-box ellipse(40% 30%) view-box;
border-shape: rect(5px 198px 189px 0px round 20px) view-box circle(50%);
border-shape: path(
    "M 35,95 C 35,50 60,15 100,20 C 120,5 160,5 180,22 C 200,5 250,5 270,22 C 295,5 340,5 360,22 C 395,10 440,35 440,75 C 455,90 450,120 430,128 C 400,145 360,145 330,130 C 300,145 260,145 230,130 C 200,145 160,145 130,130 C 80,142 35,120 35,95 Z"
  )
  view-box;

/* Global values */
border-shape: inherit;
border-shape: initial;
border-shape: revert;
border-shape: revert-layer;
border-shape: unset;
```

Die Eigenschaft `border-shape` kann unter Verwendung des Schlüsselworts `none` angegeben werden, oder mit einer oder zwei durch Leerzeichen getrennten Formdefinitionen, die jeweils aus einem `<basic-shape>` Wert oder einem `<basic-shape>` Wert und einem `<geometry-box>` Wert bestehen.

### Werte

- `none`
  - : Gibt an, dass keine Randform definiert ist. Dies ist der Initialwert.
- {{cssxref("basic-shape")}}
  - : Definiert die Form des Randes mit einer der `<basic-shape>` Funktionen.
- [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box) {{optional_inline}}
  - : Definiert die Referenzbox, relativ zu der die Randform gezeichnet wird. Wenn nicht enthalten, wird die Referenz-Geometriebox der Form standardmäßig gesetzt auf:
    - `half-border-box`, wenn eine einzelne Basisform spezifiziert ist, was bedeutet, dass jeder definierte Rand oben auf dem Formpfad gezeichnet wird, wobei der Pfad über seine Mitte verläuft.
    - `border-box` für die erste (äußere) Form und `padding-box` für die zweite (innere) Form, wenn zwei Basisformen angegeben sind. Der Rand füllt dann den Bereich zwischen den beiden Formen aus.

## Beschreibung

Die Eigenschaft `border-shape` kann auf Elemente angewandt werden, um präzise geformte Container, wie Sprechblasen oder abstrakte Tooltip-Designs, zu erstellen, ohne auf Umgehungen angewiesen zu sein.

```html hidden live-sample___speech-bubble-demo
<img src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg" />
<p>I am a leopard</p>
```

```css hidden live-sample___speech-bubble-demo
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  display: block;
  width: 300px;
  anchor-name: --leopard;
  position: relative;
  top: 45px;
}

p {
  font-family: "Helvetica", "Arial";
  font-size: 1.3rem;
  padding: 15px 0;
  margin: 0 0 -30px -110px;
  background-color: chartreuse;
  border: 7px solid rgb(50 50 50);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);

  width: 250px;
  height: 100px;
  border-shape: shape(
      from 50.08% 0%,
      curve to 97.71% 25.55% with 72.95% 0%/93.9% 8.76%,
      curve to 97.71% 62.04% with 100.76% 37.96%/100.76% 49.64%,
      curve to 50.08% 83.94% with 93.9% 75.18%/72.95% 83.94%,
      curve to 23.41% 82.48% with 36.75% 83.94%/27.22% 83.21%,
      curve to 17.7% 100% with 21.51% 87.59%/19.22% 94.16%,
      curve to 11.98% 82.48% with 16.17% 94.16%/13.89% 87.59%,
      curve to 1.31% 62.04% with 13.5% 81.75%/3.98% 76.64%,
      curve to 2.45% 25.55% with -0.59% 49.64%/-0.59% 37.96%,
      curve to 50.08% 0% with 6.26% 8.76%/27.22% 0%,
      close
    )
    content-box;

  text-align: center;
  line-height: 4;

  position: absolute;
  position-anchor: --leopard;
  bottom: anchor(top);
  left: anchor(right);
}
```

{{EmbedLiveSample("speech-bubble-demo", "100%", "240")}}

Beachten Sie, wie die angewandte `border-shape` gut mit dem auf dem Element definierten {{cssxref("border")}} und {{cssxref("box-shadow")}} harmoniert — sie folgen der Form des Randes.

### Unterstützte Formfunktionen

Sie können die `border-shape` (auch die eines Inline- oder Pseudo-Elements) unter Verwendung einer der {{cssxref("basic-shape")}} Funktionen definieren. Diese Funktionen umfassen:

- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}: Bieten verschiedene Möglichkeiten, grundlegende rechteckige Formen zu definieren.
- {{cssxref("basic-shape/circle","circle()")}}: Definiert Kreisformen.
- {{cssxref("basic-shape/ellipse","ellipse()")}}: Definiert Ellipsenformen.
- {{cssxref("basic-shape/path","path()")}}: Definiert jede Art von Form unter Verwendung der [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) String-Syntax. Die SVG-Pfad-Syntax hat Einschränkungen — es können nur Pixelwerte verwendet werden und der Pfad muss als einzelner String definiert sein, sodass benutzerdefinierte Eigenschaften nicht über {{cssxref("var()")}} einbezogen werden können. Es wird empfohlen, stattdessen `shape()` zu verwenden.
- {{cssxref("basic-shape/polygon","polygon()")}}: Definiert jede Art von Polygon über Paare von Scheitelkoordinaten. Wenn Ihre gewünschte Form geschwungene Kurven enthält, wird empfohlen, `shape()` zu verwenden.
- {{cssxref("basic-shape/shape","shape()")}}: Definiert jede Art von Form. Die Syntax von `shape()` ist CSS-kompatibler als die von `path()` und behebt deren Mängel.

Sie können auch ein optionales [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box) Schlüsselwort nach jedem `<basic-shape>` Wert einfügen, um die Referenzbox anzugeben, relativ zu der die Formen gezeichnet werden sollen.

### Strich- und Füllmodi

Die Eigenschaft `border-shape` hat die folgenden zwei Modi:

- Wenn ein einzelnes `<basic-shape>` im Wert bereitgestellt wird, definiert diese Form die Form des Randes des Elements, wobei die definierten Randstile als Strich um die Form gezeichnet werden, wie im vorherigen Beispiel gezeigt. Dies wird als **Strichmodus** bezeichnet.
- Wenn zwei `<basic-shape>`s im Wert bereitgestellt werden, definiert die erste Form die äußere Grenze des Randes, die zweite Form definiert die innere Grenze des Randes, und jede definierte Randfarbe füllt den Bereich zwischen den beiden Grenzen aus. Dies wird als **Füllmodus** bezeichnet.

> [!NOTE]
> Vermeiden Sie, eine Form für die innere Grenze zu definieren, die größer als die äußere Grenze ist. Wenn Sie dies tun, rendert der Randbereich nicht richtig; es kann sein, dass keine Randfüllung gerendert wird oder eine Form hinter der anderen gerendert wird.

### Auswirkung auf Layout und Rendering

Die Eigenschaft `border-shape` erzeugt einen rein visuellen Effekt — das Layout des Elements wird immer noch mit der zugrunde liegenden rechteckigen Definition berechnet, und der Inhaltfluss wird nicht beeinflusst.

Der Inhalt und der Hintergrund des Elements werden durch die Eigenschaft `border-shape` (die innere Form im Füllmodus) abgeschnitten. Wenn die spezifizierte `border-shape` dieselbe Größe oder kleiner als der Inhalt/Hintergrund ist, müssen Sie die Referenzbox nicht anpassen, es sei denn, Sie möchten eine Art Offset-Effekt erzeugen. Wenn die spezifizierte `border-shape` jedoch größer als der Inhalt/Hintergrund ist, werden Sie Lücken zwischen dem Rand des Hintergrunds und der Form(en) sehen. In solchen Fällen müssen Sie möglicherweise eine andere Referenzbox verwenden, um die Anzeige zu reparieren (siehe [Umgang mit Randformen, die größer als der Hintergrund des Elements sind](#handling_border-shapes_larger_than_the_elements_background) für weitere Informationen).

### Einschränkungen bei Randstilen, die auf Randformen angewendet werden

Nicht alle Randstile werden auf Elemente mit einer gesetzten `border-shape` Eigenschaft angewendet. Die folgende Liste erklärt, wie jede Eigenschaft betroffen ist:

- {{cssxref("border-color")}}: Diese Eigenschaft wird angewendet. Wenn jedoch mehrere Elementränder unterschiedliche Farben haben, wählt der Browser die erste Kante mit einer Randfarbe, in der folgenden Reihenfolge:

  - Blockanfangskante
  - Inline-Anfangskante
  - Blockendkante
  - Inline-Endkante

  Der Browser wendet dann die Randfarbe dieser Kante auf die gesamte gerenderte `border-shape` an.

- {{cssxref("border-image")}}: Nicht angewendet.
- {{cssxref("border-style")}}: Nicht angewendet. Alle Ränder werden mit einem `solid` Stil gerendert.
- {{cssxref("border-width")}}: Im Strichmodus wird `border-width` direkt auf die gerenderte `border-shape` angewendet. Wenn mehrere Kanten unterschiedliche Randbreiten haben, wählt der Browser eine Breite, um den gesamten Rand mit dem gleichen Verfahren zu versehen, das für `border-color` beschrieben wurde.

  Im Füllmodus wird der Randbereich durch die Differenz zwischen den Flächen der äußeren und inneren Formen definiert; daher hat `border-width` keinen direkten Einfluss auf die Breite des gerenderten Randes. Es hat jedoch einen indirekten Einfluss — es beeinflusst weiterhin die Größe der Referenzboxen, zu denen die Formen relativ gezeichnet werden (es sei denn, Sie setzen deren `<geometry-box>` auf `content-box` oder `padding-box`). Daher müssen Sie bei der Verwendung des Füllmodus immer noch vorsichtig sein, welche `border-width` auf das zugrunde liegende Element gesetzt ist.

Als Beispiel, wenn einem Element die folgenden Deklarationen zugewiesen sind:

```css
border-shape: rect(5px 198px 189px 0px round 20px);
border-bottom: 30px dashed blue;
border-left: 40px dotted hotpink;
border-right: 50px double yellow;
```

Das gerenderte Feld wird einen rechteckigen Rand mit abgerundeten Ecken haben. Der Randstil wird `solid` sein, da andere Stile ignoriert werden. Die Randbreite und Farbe werden `40px` und `hotpink` sein – dies liegt daran, dass die `border-left` Eigenschaft Stile auf die Inline-Anfangskante anwendet (angesehen davon, dass die Seite einen horizontalen {{cssxref("writing-mode")}} hat), was die erste Kante mit Randstilen ist; dies wird vom Browser gemäß der zuvor beschriebenen Prioritätenliste gewählt.

### Interaktion mit `border-radius` und `corner-shape`

Die Eigenschaften {{cssxref("border-radius")}} und {{cssxref("corner-shape")}} sind mit `border-shape` inkompatibel. Wenn auf ein Element eine `border-shape` gesetzt ist, wird jede gesetzte `border-radius` ignoriert, daher hat `corner-shape` ebenfalls keinen Einfluss. Die Eigenschaften `border-shape` und `border-radius`/`corner-shape` haben unterschiedliche Effekte und werden separat verwendet.

Wenn Sie geformte Ecken in einer `border-shape` verwenden möchten, müssen Sie sie direkt als Teil der Form zeichnen.

### `border-shape` im Vergleich zu `clip-path`

Die {{cssxref("clip-path")}} Eigenschaft nimmt ähnliche Werte wie `border-shape` an und erzeugt ähnliche Effekte. Beide Eigenschaften können verwendet werden, um die Form eines Elements und damit den Trefferbereich des Elements zu ändern, was die Grenze beeinflusst, innerhalb derer `:hover` Effekte und zeigerbezogene Ereignisse aktiviert werden.

Es gibt jedoch einen grundlegenden Unterschied in der Funktionsweise der beiden Eigenschaften:

- `clip-path` verbirgt den Bereich des Elements, der außerhalb der durch die bereitgestellte Form definierten Region liegt.
- `border-shape` ändert das visuelle Rendering des Elements so, dass es innerhalb der durch die bereitgestellte Form definierten Region liegt.

Dies bedeutet, dass `border-shape` den Inhalt des Elements beschneidet, während die {{cssxref("overflow")}} Eigenschaft dessen Anzeige steuern kann, während `clip-path` den Inhalt des Elements vollständig verdeckt, sodass eine Überlaufsteuerung nicht möglich ist.

Noch bedeutsamer ist, dass Eigenschaften wie `box-shadow` und `outline` der mit `clip-path` erstellten Form nicht folgen — es schneidet das Äußere des Elements ab, was bedeutet, dass solche Effekte auf unschöne Weise gekürzt oder vollständig entfernt werden. Die Eigenschaft `border-shape` hingegen erstellt einen anders geformten Rand, dem solche Effekte ordentlich folgen.

### Umgang mit Randformen, die größer als der Hintergrund des Elements sind

Wie bereits erwähnt, ist ein Problem bei `border-shape`, dass wenn Sie eine Form definieren, die größer als der Inhalt/Hintergrund des Elements ist, Sie eine Lücke zwischen dem Hintergrund und dem Rand erhalten können.

Der empfohlene Ansatz, um dies zu beheben, ist, die Referenz `<geometry-box>` auf `content-box` zu setzen und dann {{cssxref("padding")}} zu verwenden, um die Lücken zwischen dem Inhalt und dem Rand zu füllen. Zum Beispiel:

```css
border-shape: shape(
    from 0% 0%,
    hline to 33%,
    arc by 33% 0% of 16% 20% small cw,
    hline to 100%,
    line to 100% 33%,
    arc by 0% 33% of 20% 16% small cw,
    line to 100% 100%,
    hline to 66%,
    arc by -33% 0% of 16% 20% small ccw,
    hline to 0%,
    line to 0% 66%,
    arc by 0% -33% of 20% 16% small ccw,
    close
  )
  content-box;
padding: 24px;
```

Auf diese Weise wird das `padding` außerhalb der Form gesetzt, wodurch diese kleiner wird und der Hintergrund die Teile der Form ausfüllen kann, die außerhalb des Inhaltsbereichs liegen. Sie können diese Technik in unserem Beispiel [unregelmäßiges Puzzle-Stück-Navigationsmenü](/de/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu) in Aktion sehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `border-shape` Strichverwendung

Dieses Beispiel zeigt, wie `border-shape` im Strichmodus verwendet wird.

#### HTML

Der Markup dieses Beispiels enthält ein einzelnes {{htmlelement("p")}} Element.

```html live-sample___basic-border-shape live-sample___basic-border-shape-fill
<p>Circle</p>
```

#### CSS

```css hidden live-sample___basic-border-shape live-sample___basic-border-shape-fill live-sample___border-shape-select live-sample___animate-border-shape
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  box-sizing: border-box;
  font-family: "Helvetica", "Arial";
  font-size: 1.6rem;
  padding: 40px 50px;
  background-color: chartreuse;
  display: flex;
  align-items: center;
}
```

Wir geben der Box eine {{cssxref("width")}} von `fit-content` und ein {{cssxref("aspect-ratio")}} von `1/1`, um den Inhalt ordentlich in einem Quadrat zu platzieren. Wir setzen auch eine dicke schwarze {{cssxref("border")}} und eine {{cssxref("box-shadow")}}, bevor wir eine `border-shape` von `circle(50%)` setzen, um einen kreisförmigen Rand zu erstellen, der den Inhalt und den Hintergrund ordentlich umschließt.

```css live-sample___basic-border-shape
p {
  width: fit-content;
  aspect-ratio: 1/1;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: circle(50%);
}
```

#### Ergebnis

{{EmbedLiveSample("basic-border-shape", "100%", "240")}}

Beachten Sie, wie sich der `border` und `box-shadow` ordentlich an die definierte Form anpassen.

### Grundlegende `border-shape` Füllverwendung

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie `border-shape` im Füllmodus verwendet wird, um einen unregelmäßigen, gefüllten Rand zu erstellen.

Das HTML ist das gleiche wie im vorherigen Beispiel.

#### CSS

Das CSS ist dasselbe wie im vorherigen Beispiel, außer dass wir dieses Mal den Rand `hotpink` färben und wir zwei `<basic-shape>` Definitionen innerhalb des `border-shape` Werts enthalten. Es gibt ein äußeres Rechteck, das den gesamten Bereich des Inhalts abdeckt, und einen inneren Kreis, der derselbe ist wie im vorherigen Beispiel.

```css live-sample___basic-border-shape-fill
p {
  width: fit-content;
  aspect-ratio: 1/1;
  border: 15px solid hotpink;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: rect(0% 100% 100% 0% round 20px) circle(50%);
}
```

#### Ergebnis

{{EmbedLiveSample("basic-border-shape-fill", "100%", "240")}}

Beachten Sie, wie dieses Mal der Rand den Bereich zwischen dem Rechteck und dem Kreis abdeckt und die im `border` Deklaration festgelegte Farbe annimmt.

### Vergleich der `border-shape` Werte

In diesem Beispiel lassen wir Sie auswählen aus verschiedenen `border-shape` Werten, die auf ein Element angewendet werden sollen, damit Sie vergleichen und kontrastieren können, wie sie gerendert werden.

#### HTML

Das HTML ist ähnlich wie im vorherigen Beispiel, außer dass wir dieses Mal etwas mehr Text im `<p>` Element enthalten haben. Wir haben auch ein {{htmlelement("select")}} Element hinzugefügt, sodass Sie verschiedene Klassen über JavaScript auf das `<p>` anwenden können (wir haben sowohl das `<select>` als auch das JavaScript aus Gründen der Kürze ausgeblendet).

```html live-sample___border-shape-select
<p>Blessed are the cheesemakers.</p>
```

```html hidden live-sample___border-shape-select
<form>
  <label for="shape-select">Select border-shape type:</label>
  <br />
  <select id="shape-select">
    <option>circle</option>
    <option selected>ellipse</option>
    <option>inset</option>
    <option>path</option>
    <option>polygon</option>
    <option>rect</option>
    <option>shape</option>
    <option>two-polygons</option>
    <option>xywh</option>
  </select>
</form>
```

Die Klassen setzen verschiedene `border-shape` Werte auf das `<p>` Element. Zunächst ist eine `class` von `ellipse` auf das `<p>` Element gesetzt, daher hat es anfangs eine `ellipse()` `border-shape`.

```js hidden live-sample___border-shape-select
const box = document.querySelector("p");
const select = document.querySelector("select");

select.addEventListener("change", selectClass);

function selectClass() {
  box.className = select.value;
}

selectClass();
```

#### CSS

Im CSS geben wir der Box eine {{cssxref("width")}} von `550px`, eine dicke schwarze {{cssxref("border")}}, und eine {{cssxref("box-shadow")}}.

```css live-sample___border-shape-select
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
}
```

Als nächstes definieren wir die Regeln für jede der Klassen, die angewendet werden, wenn Sie die verschiedenen Optionen im `<select>` Element auswählen:

```css-nolint live-sample___border-shape-select
.circle {
  border-shape: circle(60%);
}

.ellipse {
  border-shape: ellipse(50% 40%);
}

.inset {
  border-shape: inset(10px 20px 10px 20px round 20px);
}

.path {
  border-shape: path(
      "M 35,95 C 35,50 60,15 100,20 C 120,5 160,5 180,22 C 200,5 250,5 270,22 C 295,5 340,5 360,22 C 460,10 477,35 496,75 C 515,157 450,120 430,128 C 400,145 360,145 330,130 C 300,145 260,145 230,130 C 200,145 160,145 130,130 C 80,142 35,120 35,95 Z"
    )
    view-box;
}

.polygon {
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}

.rect {
  border-shape: rect(10px 500px 130px 20px round 20px);
}

.shape {
  border-shape: shape(
    from 0% 64.5%,
    curve to 15.71% 8.26% with 0% 30.76%/6.04% 4.51%,
    curve to 35.05% 9.76% with 20.55% -2.99%/30.21% -2.99%,
    curve to 56.8% 9.76% with 39.88% -2.99%/51.97% -2.99%,
    curve to 78.56% 9.76% with 62.84% -2.99%/73.72% -2.99%,
    curve to 97.89% 49.5% with 87.02% 0.76%/97.89% 19.51%,
    curve to 95.47% 89.25% with 101.52% 60.75%/100.31% 83.25%,
    curve to 71.3% 90.75% with 88.22% 102%/78.56% 102%,
    curve to 47.13% 90.75% with 64.05% 102%/54.38% 102%,
    curve to 22.96% 90.75% with 39.88% 102%/30.21% 102%,
    curve to 0% 64.5% with 10.88% 99.75%/0% 83.25%,
    close
  );
}

.two-polygons {
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 105%, 86% 88%, 91% 75%, 101% 60%, 93% 30%, 86% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%)
    polygon(0% 55%, 0% 90%, 6% 104%, 17% 93%, 30% 100%, 43% 93%, 56% 102%, 69% 93%, 81% 102%, 88% 93%, 94% 78%, 100% 58%, 94% 24%, 88% -2%, 76% 13%, 64% -4%, 51% 11%, 39% -4%, 26% 11%, 13% -4%, 3% 13%);
}

.xywh {
  border-shape: xywh(5% 5% 90% 90% round 20px);
}
```

```css hidden live-sample___border-shape-select
form {
  position: absolute;
  border: 2px solid black;
  background: white;
  padding: 5px;
  bottom: 0;
  right: 0;
}

form select {
  width: 100%;
  padding: 2px 5px;
  margin-top: 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("border-shape-select", "100%", "350")}}

Wählen Sie verschiedene Optionen aus dem Dropdown-Menü aus, um zu sehen, wie die verschiedenen Randformen gerendert werden. Verwenden Sie bei Bedarf jederzeit die Entwicklertools Ihres Browsers, um die auf das `<p>` Element angewendeten `border-shape` Werte zu inspizieren und zu bearbeiten, um eine Vorstellung davon zu bekommen, wie die Werte funktionieren.

### Animieren einer `border-shape`

Dieses Beispiel zeigt, wie Sie die `border-shape` Eigenschaft animieren können.

#### HTML

Das gleiche `<p>` Element wird wie im vorherigen Beispiel verwendet, außer dass wir dieses Mal ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut enthalten haben, damit es über die Tastatur fokussiert werden kann.

```html live-sample___animate-border-shape
<p tabindex="0">Blessed are the cheesemakers.</p>
```

#### CSS

Für dieses Beispiel wenden wir eine `polygon()` `border-shape` auf das `<p>` an.

```css-nolint live-sample___animate-border-shape
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}
```

Wir setzen auch eine {{cssxref("animation")}} auf die {{cssxref(":hover")}} und {{cssxref(":focus")}} Zustände des `<p>` Elements, sodass es, wenn es fokussiert oder überfahren wird, sanft hin und her zwischen zwei Polygonformen für unendliche Iterationen animiert.

```css-nolint live-sample___animate-border-shape
p:hover,
p:focus {
  animation: morph 1s ease-in-out infinite alternate;
}

@keyframes morph {
  from {
    border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
  }
  to {
    border-shape: polygon(0% 55%, 0% 90%, 6% 104%, 17% 93%, 30% 100%, 43% 93%, 56% 102%, 69% 93%, 81% 102%, 88% 93%, 94% 78%, 100% 58%, 94% 24%, 88% -2%, 76% 13%, 64% -4%, 51% 11%, 39% -4%, 26% 11%, 13% -4%, 3% 13%) view-box;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("animate-border-shape", "100%", "240")}}

Fahren Sie mit der Maus über oder fokussieren Sie den Absatz, um die Animation zu sehen.

```css hidden live-sample___speech-bubble-demo live-sample___basic-border-shape live-sample___basic-border-shape-fill live-sample___border-shape-select live-sample___animate-border-shape
@supports not (border-shape: circle(50%)) {
  body::before {
    content: "Your browser does not support the 'border-shape' property.";
    font-family: sans-serif;
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("corner-shape")}}
- [Erstellen eines unregelmäßigen Navigationsmenüs mit border-shape](/de/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu)
- [CSS Rand und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [border-shape: die Zukunft des nicht-rechteckigen Webs](https://una.im/border-shape) von Una Kravets (2026)
- [Machen Sie sich bereit für die mächtige CSS border-shape Eigenschaft!](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) auf CSS Tricks (2026)
