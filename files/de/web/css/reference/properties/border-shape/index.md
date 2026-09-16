---
title: "`border-shape` CSS property"
short-title: border-shape
slug: Web/CSS/Reference/Properties/border-shape
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`border-shape`** definiert die Rahmenform eines Elements mithilfe von {{cssxref("basic-shape")}}-Werten.

## Syntax

```css
/* Keyword value */
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

Die Eigenschaft `border-shape` kann mit dem Schlüsselwort `none` oder mit einer oder zwei durch Leerzeichen getrennten Formdefinitionen angegeben werden, die jeweils aus einem `<basic-shape>`-Wert oder einem `<basic-shape>`-Wert und einem `<geometry-box>`-Wert bestehen.

### Werte

- `none`
  - : Gibt an, dass keine Rahmenform definiert ist. Dies ist der Anfangswert.
- {{cssxref("basic-shape")}}
  - : Definiert die Form des Rahmens mithilfe einer der `<basic-shape>`-Funktionen.
- [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box) {{optional_inline}}
  - : Definiert das Referenzfeld, relativ zu dem die Rahmenform gezeichnet wird. Wenn es nicht angegeben wird, ist das Referenzgeometriefeld der Form standardmäßig:
    - `half-border-box`, wenn eine einzelne Grundform angegeben ist. Dies bedeutet, dass jeder definierte Rahmen über dem Formpfad gezeichnet wird, wobei der Pfad durch dessen Mitte verläuft.
    - `border-box` für die erste (äußere) Form und `padding-box` für die zweite (innere) Form, wenn zwei Grundformen angegeben sind. Der Rahmen nimmt dann den Bereich zwischen den beiden Formen ein.

## Beschreibung

Die Eigenschaft `border-shape` kann auf Elemente angewendet werden, um präzise geformte Container wie Sprechblasen, wie hier gezeigt, oder abstrakte Tooltip-Designs zu erstellen, ohne auf Workarounds zurückgreifen zu müssen.

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

Beachten Sie, wie das angewendete `border-shape` gut mit dem auf dem Element definierten {{cssxref("border")}} und {{cssxref("box-shadow")}} zusammenwirkt — sie folgen der Form des Rahmens.

### Unterstützte Formfunktionen

Sie können das `border-shape` eines Elements, einschließlich eines Inline- oder Pseudo-Elements, mithilfe einer der {{cssxref("basic-shape")}}-Funktionen definieren. Diese Funktionen umfassen:

- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} und {{cssxref("basic-shape/xywh","xywh()")}}: Bieten verschiedene Möglichkeiten, grundlegende Rechteckformen zu definieren.
- {{cssxref("basic-shape/circle","circle()")}}: Definiert Kreisformen.
- {{cssxref("basic-shape/ellipse","ellipse()")}}: Definiert Ellipsenformen.
- {{cssxref("basic-shape/path","path()")}}: Definiert beliebige Formen mithilfe der Stringsyntax für [SVG-Pfade](/de/docs/Web/SVG/Reference/Element/path). Die SVG-Pfadsyntax hat Einschränkungen — sie kann nur Pixelwerte verwenden, und der Pfad muss als einzelner String definiert werden, sodass benutzerdefinierte Eigenschaften nicht über {{cssxref("var()")}} eingebunden werden können. Es wird empfohlen, stattdessen `shape()` zu verwenden.
- {{cssxref("basic-shape/polygon","polygon()")}}: Definiert beliebige Polygone über Paare von Scheitelpunktkoordinaten. Wenn Ihre gewünschte Form weiche Kurven enthält, wird empfohlen, `shape()` zu verwenden.
- {{cssxref("basic-shape/shape","shape()")}}: Definiert beliebige Formen. Die Syntax von `shape()` ist CSS-kompatibler als die von `path()` und behebt deren Mängel.

Sie können außerdem nach jedem `<basic-shape>`-Wert ein optionales Schlüsselwort [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box) einfügen, um das Referenzfeld anzugeben, relativ zu dem die Formen gezeichnet werden sollen.

### Kontur- und Füllmodi

Die Eigenschaft `border-shape` hat die folgenden zwei Modi:

- Wenn im Wert eine einzelne `<basic-shape>` angegeben wird, definiert diese Form die Form des Elementrahmens. Die definierten Rahmenstile werden dabei als Kontur um die Form gezeichnet, wie im vorherigen Beispiel gezeigt. Dies wird als **Konturmodus** bezeichnet.
- Wenn im Wert zwei `<basic-shape>`s angegeben werden, definiert die erste Form die äußere Begrenzung des Rahmens, die zweite Form die innere Begrenzung des Rahmens, und jede definierte Rahmenfarbe füllt den Bereich zwischen den beiden Begrenzungen. Dies wird als **Füllmodus** bezeichnet.

> [!NOTE]
> Vermeiden Sie es, eine Form für die innere Begrenzung zu definieren, die größer als die äußere Begrenzung ist. Andernfalls wird der Rahmenbereich nicht korrekt gerendert; möglicherweise wird keine Rahmenfüllung dargestellt oder eine Form hinter der anderen gerendert.

### Auswirkungen auf Layout und Rendering

Die Eigenschaft `border-shape` erzeugt einen rein visuellen Effekt — das Layout des Elements wird weiterhin anhand der zugrunde liegenden rechteckigen Felddefinition berechnet, und der Inhaltsfluss wird nicht beeinflusst.

Der Inhalt und Hintergrund des Elements werden durch die Eigenschaft `border-shape` beschnitten, im Füllmodus durch die innere Form. Wenn das angegebene `border-shape` dieselbe Größe wie oder eine kleinere Größe als Inhalt/Hintergrund hat, müssen Sie das Referenzfeld nicht anpassen, es sei denn, Sie möchten eine Art Versatzwirkung erzeugen. Wenn das angegebene `border-shape` jedoch größer als Inhalt/Hintergrund ist, sehen Sie Lücken zwischen der Kante des Hintergrunds und der bzw. den Formen. In solchen Fällen müssen Sie möglicherweise ein anderes Referenzfeld verwenden, um die Darstellung zu korrigieren (weitere Informationen finden Sie unter [Umgang mit border-shapes, die größer als der Hintergrund des Elements sind](#handling_border-shapes_larger_than_the_elements_background)).

### Einschränkungen bei Rahmenstilen für Rahmenformen

Nicht alle Rahmenstile werden auf Elemente angewendet, für die eine Eigenschaft `border-shape` festgelegt ist. Die folgende Liste erläutert, wie jede Eigenschaft beeinflusst wird:

- {{cssxref("border-color")}}: Diese Eigenschaft wird angewendet. Wenn jedoch mehrere Elementrahmen unterschiedliche Farben haben, wählt der Browser die erste Kante mit einer Rahmenfarbe in der folgenden Reihenfolge:

  - Blockstartkante
  - Inlinestartkante
  - Blockendkante
  - Inlineendkante

  Der Browser wendet dann die Rahmenfarbe dieser Kante auf das gesamte gerenderte `border-shape` an.

- {{cssxref("border-image")}}: Wird nicht angewendet.
- {{cssxref("border-style")}}: Wird nicht angewendet. Alle Rahmen werden mit dem Stil `solid` gerendert.
- {{cssxref("border-width")}}: Im Konturmodus wird `border-width` direkt auf das gerenderte `border-shape` angewendet. Wenn mehrere Kanten unterschiedliche Rahmenbreiten haben, wählt der Browser mithilfe desselben für `border-color` beschriebenen Verfahrens eine Breite aus, die auf den gesamten Rahmen angewendet wird.

  Im Füllmodus wird der Rahmenbereich durch den Unterschied zwischen den Flächen der äußeren und inneren Formen definiert; daher hat `border-width` keine direkte Auswirkung auf die Breite des gerenderten Rahmens. Es hat jedoch eine indirekte Auswirkung — es beeinflusst weiterhin die Größe der Referenzfelder, relativ zu denen die Formen gezeichnet werden, es sei denn, Sie setzen deren `<geometry-box>` auf `content-box` oder `padding-box`. Daher müssen Sie auch bei Verwendung des Füllmodus die für das zugrunde liegende Element festgelegte `border-width` berücksichtigen.

Wenn beispielsweise auf ein Element die folgenden Deklarationen angewendet werden:

```css
border-shape: rect(5px 198px 189px 0px round 20px);
border-bottom: 30px dashed blue;
border-left: 40px dotted hotpink;
border-right: 50px double yellow;
```

wird das gerenderte Feld einen rechteckigen Rahmen mit abgerundeten Ecken haben. Der Rahmenstil wird `solid` sein, da andere Stile ignoriert werden. Die Rahmenbreite und -farbe werden `40px` beziehungsweise `hotpink` sein — dies liegt daran, dass die Eigenschaft `border-left` Stile auf die Inlinestartkante anwendet, vorausgesetzt, dass die Seite einen horizontalen {{cssxref("writing-mode")}} hat. Dies ist die erste Kante mit Rahmenstilen; sie wird vom Browser gemäß der zuvor beschriebenen Prioritätsliste ausgewählt.

### Interaktion mit `border-radius` und `corner-shape`

Die Eigenschaften {{cssxref("border-radius")}} und {{cssxref("corner-shape")}} sind nicht mit `border-shape` kompatibel. Wenn für ein Element ein `border-shape` festgelegt ist, wird jedes gesetzte `border-radius` ignoriert; daher hat auch `corner-shape` keine Auswirkung. Die Eigenschaften `border-shape` und `border-radius`/`corner-shape` haben unterschiedliche Auswirkungen und werden getrennt verwendet.

Wenn Sie geformte Ecken in einem `border-shape` verwenden möchten, müssen Sie diese direkt als Teil der Form zeichnen.

### `border-shape` im Vergleich zu `clip-path`

Die Eigenschaft {{cssxref("clip-path")}} akzeptiert ähnliche Werte wie `border-shape` und erzeugt ähnliche Effekte. Beide Eigenschaften können verwendet werden, um die Form eines Elements und damit dessen Trefferbereich zu ändern, wodurch die Begrenzung verändert wird, innerhalb derer `:hover`-Effekte und zeigerbezogene Ereignisse aktiviert werden.

Es gibt jedoch einen grundlegenden Unterschied in der Funktionsweise der beiden Eigenschaften:

- `clip-path` verbirgt den Bereich des Elements, der außerhalb der durch die bereitgestellte Form definierten Region liegt.
- `border-shape` verändert das visuelle Rendering des Elements, sodass es innerhalb der durch die bereitgestellte Form definierten Region liegt.

Das bedeutet, dass `border-shape` den Inhalt des Elements beschneidet und gleichzeitig die Eigenschaft {{cssxref("overflow")}} dessen Darstellung steuern lässt, während `clip-path` den Elementinhalt vollständig verbirgt, sodass keine Überlaufsteuerung möglich ist.

Noch wichtiger ist, dass Eigenschaften wie `box-shadow` und `outline` nicht der durch `clip-path` erzeugten Form folgen — es schneidet die Außenseite des Elements ab, was bedeutet, dass solche Effekte unschön abgeschnitten oder vollständig entfernt werden. Die Eigenschaft `border-shape` erzeugt hingegen einen anders geformten Rahmen, dem solche Effekte sauber folgen.

### Umgang mit border-shapes, die größer als der Hintergrund des Elements sind

Wie bereits erwähnt, besteht ein Problem bei `border-shape` darin, dass beim Definieren einer Form, die größer als der Inhalt/Hintergrund des Elements ist, eine Lücke zwischen Hintergrund und Rahmen entstehen kann.

Der empfohlene Ansatz zur Behebung besteht darin, das Referenz-`<geometry-box>` auf `content-box` zu setzen und anschließend {{cssxref("padding")}} zu verwenden, um die Lücken zwischen Inhalt und Rahmen zu füllen. Zum Beispiel:

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

Auf diese Weise wird das `padding` außerhalb der Form festgelegt, wodurch sie kleiner wird und der Hintergrund gezwungen wird, die Teile der Form auszufüllen, die über den Inhaltsbereich hinausreichen. Sie können diese Technik in unserem Beispiel für ein [Navigationsmenü mit unregelmäßigen Puzzleteilen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu) in Aktion sehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `border-shape` im Konturmodus

Dieses Beispiel zeigt, wie `border-shape` im Konturmodus verwendet wird.

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("p")}}-Element.

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

Wir geben dem Feld eine {{cssxref("width")}} von `fit-content` und ein {{cssxref("aspect-ratio")}} von `1/1`, damit der Inhalt sauber in ein Quadrat passt. Außerdem setzen wir einen dicken schwarzen {{cssxref("border")}} und einen {{cssxref("box-shadow")}}, bevor wir ein `border-shape` von `circle(50%)` festlegen, um einen kreisförmigen Rahmen zu erzeugen, der sauber um Inhalt und Hintergrund passt.

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

Beachten Sie, wie `border` und `box-shadow` der definierten Form sauber folgen.

### Grundlegende Verwendung von `border-shape` im Füllmodus

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie `border-shape` im Füllmodus verwendet wird, um einen unregelmäßigen gefüllten Rahmen zu erstellen.

Das HTML ist dasselbe wie im vorherigen Beispiel.

#### CSS

Das CSS ist dasselbe wie im vorherigen Beispiel, außer dass wir den Rahmen diesmal mit `hotpink` einfärben und zwei `<basic-shape>`-Definitionen in den Wert von `border-shape` aufnehmen. Es gibt ein äußeres Rechteck, das den gesamten Bereich des Inhalts abdeckt, und einen inneren Kreis, der dem aus dem vorherigen Beispiel entspricht.

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

Beachten Sie, dass der Rahmen diesmal den Bereich zwischen dem Rechteck und dem Kreis abdeckt und die in der `border`-Deklaration festgelegte Farbe übernimmt.

### Vergleich von `border-shape`-Werten

In diesem Beispiel können Sie aus verschiedenen `border-shape`-Werten auswählen, die auf ein Element angewendet werden, sodass Sie vergleichen können, wie sie gerendert werden.

#### HTML

Das HTML ähnelt dem im vorherigen Beispiel, außer dass wir diesmal etwas mehr Text im `<p>`-Element enthalten. Außerdem haben wir ein {{htmlelement("select")}}-Element eingefügt, damit Sie über JavaScript verschiedene Klassen auswählen können, die auf das `<p>` angewendet werden; der Übersichtlichkeit halber haben wir sowohl `<select>` als auch das JavaScript ausgeblendet.

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

Die Klassen setzen unterschiedliche `border-shape`-Werte für das `<p>`-Element. Zu Beginn wird für das `<p>`-Element eine `class` von `ellipse` gesetzt, sodass es anfangs ein `ellipse()`-`border-shape` hat.

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

Im CSS geben wir dem Feld eine {{cssxref("width")}} von `550px`, einen dicken schwarzen {{cssxref("border")}} und einen {{cssxref("box-shadow")}}.

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

Wählen Sie verschiedene Optionen aus dem Dropdown-Menü aus, um zu sehen, wie die unterschiedlichen Rahmenformen gerendert werden. Sie können jederzeit die Entwicklerwerkzeuge Ihres Browsers verwenden, um die auf das `<p>`-Element angewendeten `border-shape`-Werte zu untersuchen und zu bearbeiten, um ein Gefühl dafür zu bekommen, wie die Werte funktionieren.

### Animation eines `border-shape`

Dieses Beispiel demonstriert, wie Sie die Eigenschaft `border-shape` animieren können.

#### HTML

Dasselbe `<p>`-Element wie im vorherigen Beispiel wird verwendet, außer dass wir diesmal ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut eingefügt haben, damit es über die Tastatur fokussiert werden kann.

```html live-sample___animate-border-shape
<p tabindex="0">Blessed are the cheesemakers.</p>
```

#### CSS

Für dieses Beispiel wenden wir ein `polygon()`-`border-shape` auf das `<p>` an.

```css-nolint live-sample___animate-border-shape
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}
```

Wir setzen außerdem eine {{cssxref("animation")}} für die Zustände {{cssxref(":hover")}} und {{cssxref(":focus")}} des `<p>`-Elements, sodass es bei Hover oder Fokus für unendlich viele Wiederholungen sanft zwischen zwei polygonalen Rahmenformen hin- und heranimiert wird.

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

Bewegen Sie den Mauszeiger über den Absatz oder fokussieren Sie ihn, um die Animation zu sehen.

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
- Modul [CSS-Rahmen und Felddekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [border-shape: the future of the non-rectangular web](https://una.im/border-shape) von Una Kravets (2026)
- [Get Ready For the Powerful CSS border-shape Property!](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) auf CSS Tricks (2026)
