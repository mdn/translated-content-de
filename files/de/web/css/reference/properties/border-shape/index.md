---
title: "`border-shape` CSS property"
short-title: border-shape
slug: Web/CSS/Reference/Properties/border-shape
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

{{SeeCompatTable}}

Die **`border-shape`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Form der Umrandung eines Elements mithilfe von {{cssxref("basic-shape")}} Werten.

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

Die `border-shape`-Eigenschaft kann mit dem Schlüsselwort `none` oder durch eine oder zwei durch Leerzeichen getrennte Formdefinitionen angegeben werden, die jeweils aus einem `<basic-shape>`-Wert oder einem `<basic-shape>`-Wert und einem `<geometry-box>`-Wert bestehen.

### Werte

- `none`
  - : Gibt an, dass keine Umrandungsform definiert ist. Dies ist der Anfangswert.
- {{cssxref("basic-shape")}}
  - : Definiert die Form der Umrandung mithilfe einer der `<basic-shape>`-Funktionen.
- [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box) {{optional_inline}}
  - : Definiert den Referenzrahmen, relativ zu dem die Umrandungsform gezeichnet wird. Wenn nicht enthalten, verwendet die Referenzgeometriebox der Form standardmäßig:
    - `half-border-box`, wenn eine einzelne Grundform angegeben ist, was bedeutet, dass eine definierte Umrandung auf dem Formpfad gezeichnet wird, wobei der Pfad durch seine Mitte verläuft.
    - `border-box` für die erste (äußere) Form und `padding-box` für die zweite (innere) Form, wenn zwei Grundformen angegeben sind. Die Umrandung nimmt dann den Bereich zwischen den beiden Formen ein.

## Beschreibung

Die `border-shape`-Eigenschaft kann auf Elemente angewendet werden, um präzise geformte Container, wie Sprechblasen, zu erstellen, ohne Workarounds verwenden zu müssen.

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
  font-family: Arial, Helvetica, sans-serif;
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

Beachten Sie, wie die angewendete `border-shape`-Eigenschaft gut mit der definierten {{cssxref("border")}}- und {{cssxref("box-shadow")}} zusammenarbeitet — sie folgen der Form der Umrandung.

### Unterstützte Formfunktionen

Sie können die `border-shape` eines Elements (einschließlich die eines Inline- oder Pseudoelements) mithilfe einer der {{cssxref("basic-shape")}}-Funktionen definieren. Diese Funktionen umfassen:

- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, und {{cssxref("basic-shape/xywh","xywh()")}}: Bieten verschiedene Möglichkeiten zur Definition grundlegender Rechteckformen.
- {{cssxref("basic-shape/circle","circle()")}}: Definiert Kreisformen.
- {{cssxref("basic-shape/ellipse","ellipse()")}}: Definiert Ellipsenformen.
- {{cssxref("basic-shape/path","path()")}}: Definiert jede Art von Form mithilfe der [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path)-String-Syntax. Die SVG-Pfadsyntax hat Einschränkungen — es können nur Pixelwerte verwendet werden und der Pfad muss als ein einzelner String definiert sein, daher können benutzerdefinierte Eigenschaften nicht über {{cssxref("var()")}} eingebunden werden. Es wird empfohlen, stattdessen `shape()` zu verwenden.
- {{cssxref("basic-shape/polygon","polygon()")}}: Definiert jede Art von Polygon durch Paare von Scheitelkoordinaten. Wenn Ihre gewünschte Form glatte Kurven enthält, wird empfohlen, `shape()` zu verwenden.
- {{cssxref("basic-shape/shape","shape()")}}: Definiert jede Art von Form. Die Syntax von `shape()` ist CSS-kompatibler als die von `path()` und behebt deren Mängel.

Sie können auch ein optionales [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box)-Schlüsselwort nach jedem `<basic-shape>`-Wert hinzufügen, um den Referenzrahmen anzugeben, relativ zu dem die Formen gezeichnet werden sollen.

### Strich- und Füllmodi

Die `border-shape`-Eigenschaft hat die folgenden beiden Modi:

- Wenn ein einzelnes `<basic-shape>` im Wert angegeben ist, definiert diese Form die Form der Umrandung des Elements, mit den definierten Umrandungsstilen, die als Strich um die Form herum gezeichnet werden, wie im vorherigen Beispiel gezeigt. Dies wird als **Strichmodus** bezeichnet.
- Wenn zwei `<basic-shape>`s im Wert angegeben sind, definiert die erste Form die äußere Grenze der Umrandung, die zweite Form die innere Grenze der Umrandung, und jede definierte Umrandungsfarbe füllt den Bereich zwischen den beiden Grenzen. Dies wird als **Füllmodus** bezeichnet.

> [!NOTE]
> Vermeiden Sie es, eine Form für die innere Grenze zu definieren, die größer ist als die äußere Grenze. Wenn Sie dies tun, wird der Umrandungsbereich nicht korrekt gerendert; möglicherweise wird keine Umrandungsfüllung gerendert oder eine Form hinter der anderen dargestellt.

### Effekt auf Layout und Rendering

Die `border-shape`-Eigenschaft erzeugt einen rein visuellen Effekt — das Layout des Elements wird weiterhin unter Verwendung der zugrunde liegenden rechteckigen Definition berechnet, und der Inhaltsfluss wird nicht beeinflusst.

Der Inhalt und der Hintergrund des Elements werden von der `border-shape`-Eigenschaft (der inneren Form im Füllmodus) abgeschnitten. Wenn die angegebene `border-shape` die gleiche Größe oder kleiner als der Inhalt/Hintergrund ist, müssen Sie den Referenzrahmen nicht anpassen, es sei denn, Sie möchten eine Art Offset-Effekt erzeugen. Wenn jedoch die angegebene `border-shape` größer als der Inhalt/Hintergrund ist, sehen Sie Lücken zwischen dem Rand des Hintergrunds und der Form(en). In solchen Fällen müssen Sie möglicherweise einen anderen Referenzrahmen verwenden, um die Anzeige zu korrigieren (siehe [Handhabung von Umrandungsformen, die größer sind als der Hintergrund eines Elements](#handling_border-shapes_larger_than_the_elements_background) für mehr Informationen).

### Einschränkungen bei auf Umrandungsformen angewendeten Umrandungsstilen

Nicht alle Umrandungsstile werden auf Elemente angewendet, bei denen die `border-shape`-Eigenschaft gesetzt ist. Die folgende Liste erklärt, wie jede Eigenschaft betroffen ist:

- {{cssxref("border-color")}}: Diese Eigenschaft wird angewendet. Wenn jedoch mehrere Elemente mit unterschiedlichen Farben versehen sind, wählt der Browser die erste Kante mit einer Umrandungsfarbe in der folgenden Reihenfolge:

  - Blockanfangskante
  - Inline-Anfangskante
  - Blockendkante
  - Inline-Endkante

  Der Browser wendet dann die Umrandungsfarbe dieser Kante auf die gesamte gerenderte `border-shape` an.

- {{cssxref("border-image")}}: Nicht angewendet.
- {{cssxref("border-style")}}: Nicht angewendet. Alle Umrandungen werden mit einem `solid`-Stil gerendert.
- {{cssxref("border-width")}}: Im Strichmodus wird die `border-width` direkt auf die gerenderte `border-shape` angewendet. Bei unterschiedlichen Umrandungsbreiten wählt der Browser eine Breite aus, die auf die gesamte Umrandung angewendet wird, ähnlich wie bei `border-color` beschrieben.

  Im Füllmodus wird der Umrandungsbereich durch den Unterschied zwischen den Bereichen der inneren und äußeren Formen definiert; daher hat `border-width` keinen direkten Einfluss auf die Breite der gerenderten Umrandung. Es hat jedoch einen indirekten Effekt – es beeinflusst weiterhin die Größe der Referenzrahmen, relativ zu denen die Formen gezeichnet werden (es sei denn, Sie setzen deren `<geometry-box>` auf `content-box` oder `padding-box`). Sie müssen daher weiterhin auf die `border-width` des zugrunde liegenden Elements achtgeben, während Sie den Füllmodus verwenden.

Als Beispiel, wenn ein Element die folgenden Deklarationen anwendet:

```css
border-shape: rect(5px 198px 189px 0px round 20px);
border-bottom: 30px dashed blue;
border-left: 40px dotted hotpink;
border-right: 50px double yellow;
```

Der gerenderte Rahmen wird eine rechteckige Umrandung mit abgerundeten Ecken haben. Der Stil der Umrandung wird `solid` sein, da andere Stile ignoriert werden. Die Breite und Farbe der Umrandung sind `40px` und `hotpink`, da die `border-left`-Eigenschaft Stile auf die Inline-Anfangskante anwendet (angenommen, die Seite hat einen horizontalen {{cssxref("writing-mode")}}), die die erste Kante mit Umrandungsstilen ist; diese wird vom Browser nach der vorher beschriebenen Prioritätenliste ausgewählt.

### Wechselwirkung mit `border-radius` und `corner-shape`

Die {{cssxref("border-radius")}}- und {{cssxref("corner-shape")}}-Eigenschaften sind nicht kompatibel mit `border-shape`. Wenn eine `border-shape` auf ein Element gesetzt ist, wird eine gesetzte `border-radius` ignoriert, daher hat auch `corner-shape` keine Wirkung. Die `border-shape`- und `border-radius`/`corner-shape`-Eigenschaften haben unterschiedliche Effekte und werden getrennt verwendet.

Wenn Sie geformte Ecken in einer `border-shape` verwenden möchten, müssen Sie diese direkt als Teil der Form zeichnen.

### `border-shape` versus `clip-path`

Die {{cssxref("clip-path")}}-Eigenschaft nimmt Werte ähnlich wie `border-shape` an und erzeugt ähnliche Effekte. Beide Eigenschaften können verwendet werden, um die Form eines Elements zu ändern und damit den Bereich des Elements, in dem `:hover`-Effekte und zeigerbezogene Ereignisse ausgelöst werden.

Es gibt jedoch einen grundlegenden Unterschied in der Funktionsweise der beiden Eigenschaften:

- `clip-path` versteckt den Bereich des Elements, der außerhalb der durch die bereitgestellte Form definierten Region liegt.
- `border-shape` ändert die visuelle Darstellung des Elements, sodass es innerhalb der durch die bereitgestellte Form definierten Region liegt.

Das bedeutet, dass `border-shape` den Inhalt des Elements abschneidet, während die {{cssxref("overflow")}}-Eigenschaft weiterhin seine Anzeige steuert, während `clip-path` den gesamten Inhalt des Elements verbirgt, sodass eine Steuerung des Überlaufs nicht möglich ist.

Wesentlich ist, dass Eigenschaften wie `box-shadow` und `outline` der durch `clip-path` erzeugten Form nicht folgen — sie schneidet das Äußere des Elements ab, was bedeutet, dass solche Effekte in unschöner Weise abgeschnitten oder vollständig entfernt werden. Die `border-shape`-Eigenschaft dagegen erzeugt eine anders geformte Umrandung, die von solchen Effekten sauber verfolgt wird.

### Umgang mit Umrandungsformen, die größer sind als der Hintergrund eines Elements

Wie bereits erwähnt, kann ein Problem bei `border-shape` darin bestehen, dass, wenn Sie eine Form definieren, die größer als der Inhalt/Hintergrund des Elements ist, es zu einer Lücke zwischen dem Hintergrund und der Umrandung kommen kann.

Der empfohlene Ansatz zur Behebung dieses Problems besteht darin, das `Referenz-<geometry-box>` auf `content-box` zu setzen und dann {{cssxref("padding")}} zu verwenden, um die Lücken zwischen dem Inhalt und der Umrandung zu füllen. Zum Beispiel:

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

Auf diese Weise wird das `padding` außerhalb der Form gesetzt, wodurch sie kleiner wird, und der Hintergrund wird gezwungen, die Teile der Form auszufüllen, die außerhalb des Inhaltsbereichs reichen. Sie können diese Technik in unserem [Navigationmenü-Beispiel mit unregelmäßigem Puzzleteilstück](/de/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu) in Aktion sehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `border-shape` im Strichmodus

Dieses Beispiel zeigt, wie man `border-shape` im Strichmodus verwendet.

#### HTML

Der Markdown für dieses Beispiel enthält ein einzelnes {{htmlelement("p")}}-Element.

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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  padding: 40px 50px;
  background-color: chartreuse;
  display: flex;
  align-items: center;
}
```

Wir geben dem Rahmen eine {{cssxref("width")}} von `fit-content` und ein {{cssxref("aspect-ratio")}} von `1/1`, um den Inhalt sauber in einem Quadrat unterzubringen. Wir setzen auch eine dicke schwarze {{cssxref("border")}} und einen {{cssxref("box-shadow")}}, bevor wir eine {{cssxref("border-shape")}} von `circle(50%)` setzen, um eine kreisförmige Umrandung zu erstellen, die den Inhalt und den Hintergrund sauber einfasst.

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

Beachten Sie, wie die `border` und `box-shadow` der definierten Form sauber folgen.

### Grundlegende Verwendung von `border-shape` im Füllmodus

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man `border-shape` im Füllmodus verwendet, um eine unregelmäßig gefüllte Umrandung zu erstellen.

Das HTML ist dasselbe wie im vorherigen Beispiel.

#### CSS

Das CSS ist das gleiche wie im vorherigen Beispiel, außer dass wir diesmal die Umrandung `hotpink` färben und wir zwei `<basic-shape>`-Definitionen im `border-shape`-Wert einfügen. Es gibt ein äußeres Rechteck, das den gesamten Bereich des Inhalts abdeckt, und einen inneren Kreis, der dem im vorherigen Beispiel entspricht.

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

Beachten Sie, wie diesmal die Umrandung den Bereich zwischen dem Rechteck und dem Kreis abdeckt und die in der `border`-Deklaration festgelegte Farbe annimmt.

### Vergleichen von `border-shape`-Werten

In diesem Beispiel lassen wir Sie aus verschiedenen `border-shape`-Werten auswählen, die auf ein Element angewendet werden können, um zu vergleichen, wie sie gerendert werden.

#### HTML

Das HTML ist ähnlich wie im vorherigen Beispiel, außer dass wir diesmal ein wenig mehr Text im `<p>`-Element hinzufügen. Wir haben auch ein {{htmlelement("select")}}-Element hinzugefügt, sodass Sie verschiedene Klassen über JavaScript auf das `<p>`-Element anwenden können (wir haben sowohl das `<select>` als auch das JavaScript aus Gründen der Übersichtlichkeit ausgeblendet).

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

Die Klassen setzen verschiedene `border-shape`-Werte auf das `<p>`-Element. Zunächst wird eine `class` von `ellipse` auf das `<p>`-Element gesetzt, sodass es zu Beginn eine `ellipse()` `border-shape` hat.

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

Im CSS geben wir der Box eine {{cssxref("width")}} von `550px`, eine dicke schwarze {{cssxref("border")}} und eine {{cssxref("box-shadow")}}.

```css live-sample___border-shape-select
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
}
```

Als Nächstes definieren wir die Regeln für jede der Klassen, die angewendet werden, wenn Sie die verschiedenen Optionen im `<select>`-Element auswählen:

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

Wählen Sie verschiedene Optionen aus dem Dropdown-Menü aus, um zu sehen, wie die verschiedenen Umrandungsformen gerendert werden. Nutzen Sie jederzeit gerne die Entwicklertools Ihres Browsers, um die auf das `<p>`-Element angewendeten `border-shape`-Werte zu inspizieren und sie zu bearbeiten, um eine Vorstellung davon zu bekommen, wie die Werte funktionieren.

### Animieren einer `border-shape`

Dieses Beispiel zeigt, wie Sie die `border-shape`-Eigenschaft animieren können.

#### HTML

Dasselbe `<p>`-Element wird verwendet wie im vorherigen Beispiel, außer dass wir diesem Mal ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzugefügt haben, damit es über die Tastatur fokussiert werden kann.

```html live-sample___animate-border-shape
<p tabindex="0">Blessed are the cheesemakers.</p>
```

#### CSS

Für dieses Beispiel wenden wir ein `polygon()` `border-shape` auf das `<p>` an.

```css-nolint live-sample___animate-border-shape
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}
```

Wir setzen auch eine {{cssxref("animation")}} auf die {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zustände des `<p>`-Elements, sodass, wenn das Element fokussiert oder überfahren wird, es geschmeidig und unendlich zwischen zwei Polygon-Umrandungsformen hin und her animiert.

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

Fahren Sie mit der Maus über den Absatz oder fokussieren Sie ihn, um die Animation zu sehen.

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
- [Ein unregelmäßiges Navigationsmenü mit Umrandungsform erstellen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu)
- [CSS-Umrandungen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS Hintergründe und Umrandungen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [border-shape: die Zukunft des unregelmäßigen Webs](https://una.im/border-shape) von Una Kravets (2026)
- [Machen Sie sich bereit für die leistungsstarke CSS-Eigenschaft border-shape!](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) auf CSS Tricks (2026)
