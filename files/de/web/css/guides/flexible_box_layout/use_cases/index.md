---
title: Typische Anwendungsfälle von Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/Guides/Flexible_box_layout/Use_cases
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden werfen wir einen Blick auf einige der häufigsten Anwendungsfälle für Flexbox — jene Bereiche, in denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen steuern möchten. In diesem Leitfaden werden wir einige der typischen Anwendungsfälle von Flexbox betrachten.

## Navigation

Ein gängiges Muster für die Navigation ist es, eine Liste von Elementen als horizontale Leiste darzustellen. Es ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Flexbox-Anwendungsfall betrachtet werden.

Wenn wir eine Reihe von Elementen haben, die wir horizontal anzeigen möchten, entstehen möglicherweise zusätzliche Freiräume. Wir müssen entscheiden, was wir mit diesem Raum anfangen wollen und haben einige Optionen. Wir können den Raum außerhalb der Elemente anzeigen – sie also mit Freiraum dazwischen oder darum herum verteilen – oder wir können den zusätzlichen Raum innerhalb der Elemente absorbieren und benötigen daher eine Methode, die Elemente wachsen zu lassen und diesen Raum zu nutzen.

### Raum außerhalb der Elemente verteilen

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungseigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Sie können mehr über diese Eigenschaft in [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) lesen, das sich mit der Ausrichtung von Elementen auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können die Verteilung des Raums mit den Werten `space-around` oder `space-evenly` ändern. Sie könnten auch `start` verwenden, um den Raum am Ende der Elemente zu platzieren, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

```html live-sample___navigation
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 is longer</a></li>
    <li><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___navigation
nav {
  border: 2px solid #eeeeee;
}

nav a {
  text-decoration: none;
  color: black;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("navigation")}}

### Raum innerhalb der Elemente verteilen

Ein anderes Muster für die Navigation wäre es, den verfügbaren Raum innerhalb der Elemente selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften erlauben es, dass die Elemente proportional zueinander wachsen und schrumpfen, wie in [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) beschrieben.

Wenn Sie die Größenangabe Ihrer Navigationselemente respektieren, aber den verfügbaren Raum gleichmäßig unter ihnen verteilen möchten, könnten Sie `flex: auto` verwenden, was die Kurzform für `flex: 1 1 auto` ist — alle Elemente wachsen und schrumpfen ab einem Flex-Basiswert von `auto`. Dies würde bedeuten, dass das längere Element mehr Platz erhält, da es von einer größeren Größe ausgeht, obwohl ihm derselbe verfügbare Raum wie den anderen zugewiesen wird.

Im folgenden Live-Beispiel versuchen Sie `flex: auto` in `flex: 1` zu ändern. Diese Kurzform für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite erhalten, da sie von einem `flex-basis` von `0` ausgehen, wodurch der gesamte Raum gleichmäßig verteilt wird.

```html live-sample___navigation-flex
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 is longer</a></li>
    <li><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___navigation-flex
nav {
  border: 2px solid #eeeeee;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav a {
  text-decoration: none;
  color: black;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav li {
  flex: auto;
}
```

{{EmbedLiveSample("navigation-flex")}}

## Geteilte Navigation

Eine weitere Möglichkeit, Elemente auf der Hauptachse auszurichten, ist die Verwendung von automatischen Rändern. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Ränder, die in [Verwendung von automatischen Rändern für die Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das Anfangsverhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/Reference/Properties/gap)-Eigenschaft schafft Abstände zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element auf ein anderes verschieben, um zu ändern, wo die Teilung erfolgt.

```html live-sample___split-navigation
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 is longer</a></li>
    <li class="push-right"><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___split-navigation
nav {
  border: 2px solid #eeeeee;
}

nav a {
  text-decoration: none;
  color: black;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.push-right {
  margin-left: auto;
}
```

{{EmbedLiveSample("split-navigation")}}

## Zentrumselement

Ein langjähriger Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign die vertikale Zentrierung ist. Die vertikale Zentrierung von Inhalten ist mit Flexbox-Ausrichtungseigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **"Play"** und versuchen Sie, die Ausrichtung zu ändern, z. B. das Element mit `start` an den Anfang oder mit `end` ans Ende auszurichten:

```html live-sample___center
<div class="box">
  <div></div>
</div>
```

```css live-sample___center
.box {
  height: 300px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("center", "", "320px")}}

Mit [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)-Eigenschaften können Sie ein Element innerhalb eines anderen ohne Flexbox vertikal zentrieren. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus dem Kasten zu entfernen und `align-content: center` hinzuzufügen. Dann fügen Sie `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout, das den Footer nach unten drückt

Egal, ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten zu layouten, funktionieren diese Layoutmethoden nur bei direkten Kindern der Flex- oder Grid-Komponente. Das bedeutet, dass, wenn Sie variable Mengen von Inhalten haben, die Karte sich auf die Höhe des Grid-Bereichs oder Flex-Containers dehnt. Jedes darin enthaltene Element verwendet das reguläre Block-Layout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer nach oben zur Unterseite des Inhalts rutscht, anstatt am unteren Rand der Karte zu haften.

![Zwei Kartenkomponenten zeigen, dass die inneren Elemente der Komponente sich nicht mit dem Wrapper dehnen.](flex-cards.png)

Flexbox löst dieses Problem. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Dann setzen wir den Inhaltsbereich auf `flex: 1`, was die Kurzform für `flex: 1 1 0` ist — das Element kann von einem Flex-Basiswert von `0` wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Raum im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, sehen Sie, dass der Footer aufsteigt und direkt unter dem Inhalt sitzt.

```html live-sample___cards
<div class="cards">
  <div class="card">
    <div class="content">
      <p>This card doesn't have much content.</p>
    </div>
    <footer>Card footer</footer>
  </div>
  <div class="card">
    <div class="content">
      <p>
        This card has a lot more content which means that it defines the height
        of the container the cards are in. I've laid the cards out using grid
        layout, so the cards themselves will stretch to the same height.
      </p>
    </div>
    <footer>Card footer</footer>
  </div>
</div>
```

```css live-sample___cards
body {
  font-family: sans-serif;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
}

.card {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.card .content {
  padding: 10px;
  flex: 1 1 auto;
}

.card footer {
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}
```

{{EmbedLiveSample("cards", "", "280px")}}

## Medienobjekte

Das Medienobjekt — ein Bild oder ein anderes Medienelement mit einem beschreibenden Text daneben — ist ein häufiges Muster im Webdesign. Medienobjekte sollten umgedreht werden können — das Bild von einer Seite auf die andere zu verschieben.

Dieses Muster wird für Kommentare und andere Orte verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, damit der Teil des Medienobjekts, der das Bild enthält, seine Größeninformationen vom Bild selbst erhält, während der Inhalt des Medienobjekts sich anpasst, um den verbleibenden Raum einzunehmen.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und der `.content`-Teil ist so eingestellt, dass er wächst, wobei der Wachstumsfaktor auf `1` gesetzt ist. Diese Eigenschaften sind die gleichen, die wir für unser Kartenlayout mit Spaltenmuster oben verwendet haben.

```html live-sample___media
<div class="media">
  <div class="image">
    <img
      alt="A colorful balloon against a blue sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="content">
    This is the content of my media object. Items directly inside the flex
    container will be aligned to flex-start.
  </div>
</div>
```

```css live-sample___media
img {
  max-width: 100%;
  display: block;
}

.media {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}

.media .content {
  flex: 1;
  padding: 10px;
}
```

{{EmbedLiveSample("media", "", "320px")}}

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren möchten, beziehen sich auf die verschiedenen Arten, wie Sie das Medienobjekt in Ihrem Design beschränken könnten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie dem Bild eine {{cssxref("max-width")}} hinzufügen. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jede zur Bild angewendete {{cssxref("width")}} oder `max-width` wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten im Verhältnis zueinander wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie mit zwei gleichgroßen Spalten enden. Sie könnten entweder den Inhalt als Leitfaden nehmen und beide auf `flex: auto` setzen, in welchem Fall sie aus der Größe des Inhalts oder jeder direkt auf die Flex-Elemente angewandten Größe wie einer `width` auf dem Bild wachsen und schrumpfen würden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, indem Sie beispielsweise die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber den Raum mit unterschiedlichen Raten gemäß dem von Ihnen zugewiesenen `flex-grow`-Faktor verteilen. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, werden detailliert im Leitfaden [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Medienobjekt umdrehen

Um die Darstellung des Medienobjekts zu wechseln und das Bild rechts und den Inhalt links anzuzeigen, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

In diesem Beispiel haben wir eine `flipped`-Klasse neben der `media`-Klasse hinzugefügt. Entfernen Sie die Klasse aus dem HTML, um zu sehen, wie sich die Anzeige ändert.

```html live-sample___media-flipped
<div class="media flipped">
  <div class="image">
    <img
      alt="A colorful balloon against a blue sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="content">
    This is the content of my media object. Items directly inside the flex
    container will be aligned to flex-start.
  </div>
</div>
```

```css live-sample___media-flipped
img {
  max-width: 100%;
  display: block;
}

.media {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}

.flipped {
  flex-direction: row-reverse;
}

.media .content {
  flex: 1;
  padding: 10px;
}
```

{{EmbedLiveSample("media-flipped", "", "320px")}}

## Formularsteuerungen

Flexbox ist besonders nützlich für das Styling von Formularsteuerungen. Formulare enthalten mehrere kleine Elemente, die wir typischerweise zueinander ausrichten möchten. Ein gängiges Muster ist die Kombination eines {{htmlelement("label")}}- und {{htmlelement("input")}}-Paares mit einem {{htmlelement("button")}}, vielleicht für ein Suchformular oder ein Newsletter-Anmeldeformular, bei dem Ihr Besucher seine E-Mail-Adresse eingeben soll.

Flexbox macht es einfach, diese Art von Layout zu erreichen. Das `<label>`, `<input>` und `<button>` befinden sich in einem Wrapper, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben es, dass das `<input>`-Feld wächst, während der Button und das Label nicht wachsen. Das Texteingabefeld wächst und schrumpft je nach verfügbarem Raum.

```html live-sample___label-input-button
<form class="example">
  <div class="wrapper">
    <label for="text">Label</label>
    <input id="text" type="text" />
    <input type="submit" value="Send" />
  </div>
</form>
```

```css live-sample___label-input-button
* {
  font: 1.1em sans-serif;
}

.wrapper {
  display: flex;
  border: 1px solid rgb(96 139 168);
}
.wrapper > * {
  padding: 10px;
  border: none;
  color: white;
}
.wrapper > input[type="text"] {
  background-color: rgb(96 139 168 / 0.5);
  border-right: 1px solid rgb(96 139 168);
  flex: 1 1 auto;
}
.wrapper input[type="submit"] {
  background-color: rgb(96 139 168);
  color: white;
}
.wrapper label {
  background-color: #666666;
}
```

{{EmbedLiveSample("label-input-button")}}

Muster wie dieses können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die leicht zusätzlichen Elementen Platz bietet. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente mischen, die nicht wachsen, mit denen, die es tun.

## Fazit

Während Sie die oben genannten Muster erkundet haben, haben Sie hoffentlich begonnen zu sehen, wie Sie den besten Weg denken können, um Flexbox zu nutzen, um das gewünschte Ergebnis zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht strecken können, mit denen, die es können, nutzen Sie den Inhalt, um die Größe zu bestimmen, oder lassen Sie Flexbox den Raum proportional aufteilen. Es liegt an Ihnen.

Denken Sie über den besten Weg nach, den Inhalt zu präsentieren, den Sie haben, und sehen Sie dann, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
