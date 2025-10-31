---
title: Typische Anwendungsfälle von Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

In diesem Leitfaden werfen wir einen Blick auf einige der häufigsten Anwendungsfälle für Flexbox — jene Situationen, in denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen steuern möchten. In diesem Leitfaden sehen wir uns einige der typischen Anwendungsfälle von Flexbox an.

## Navigation

Ein häufiges Muster für Navigationen ist das Anzeigen einer Liste von Elementen als horizontale Leiste. Dies ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Anwendungsfall für Flexbox angesehen werden.

Wenn wir eine Reihe von Elementen haben, die wir horizontal anzeigen möchten, kann es sein, dass zusätzlicher Platz entsteht. Wir müssen entscheiden, was wir mit diesem Platz tun, und haben ein paar Optionen. Entweder zeigen wir den Platz außerhalb der Elemente an — indem wir sie mit Leerraum zwischen oder um sie herum verteilen — oder wir absorbieren den zusätzlichen Platz in den Elementen und benötigen daher eine Methode, die es den Elementen ermöglicht, zu wachsen und diesen Platz einzunehmen.

### Platz außerhalb der Elemente verteilt

Um den Platz zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungs-Eigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Mehr darüber können Sie im Abschnitt [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) lesen, der sich mit der Ausrichtung von Elementen auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Platz verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Platz am Ende der Elemente zu platzieren, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

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

### Platz innerhalb der Elemente verteilt

Ein anderes Muster für Navigation wäre es, den verfügbaren Platz innerhalb der Elemente selbst zu verteilen, anstatt Platz zwischen ihnen zu schaffen. Mit den {{cssxref("flex")}}-Eigenschaften können Elemente proportional zueinander wachsen und schrumpfen, wie in [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größen-Eigenschaft Ihrer Navigationselemente respektieren, aber den verfügbaren Platz gleichmäßig unter ihnen aufteilen möchten, könnten Sie `flex: auto` verwenden, was die Kurzform für `flex: 1 1 auto` ist — alle Elemente wachsen und schrumpfen von einer Flex-Grundlage von `auto`. Das würde bedeuten, dass das längere Element mehr Platz hätte, da es von einer größeren Größe aus startet, selbst wenn ihm der gleiche verfügbare Raum wie den anderen zugewiesen wird.

Versuchen Sie im Live-Beispiel unten, `flex: auto` in `flex: 1` zu ändern. Diese Kurzform für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite haben, da sie von einer `flex-basis` von `0` ausgehen, sodass der gesamte Platz gleichmäßig verteilt wird.

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

Eine andere Möglichkeit, Elemente auf der Hauptachse auszurichten, besteht darin, automatische Ränder zu verwenden. Das ermöglicht ein Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Ränder, wie im Abschnitt [Verwendung von automatischen Rändern zur Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das Initialverhalten von Flexbox ist. Mit der [`gap`](/de/docs/Web/CSS/Reference/Properties/gap)-Eigenschaft werden die Abstände zwischen den Elementen erzeugt. Und wir richten das letzte Element durch Zuweisung eines `margin-left`-Werts von `auto` nach rechts aus. Sie können die Klasse von einem Element zu einem anderen verschieben, um zu ändern, wo die Teilung stattfindet.

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

## Zentriertes Element

Ein lang anhaltender Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign das vertikale Zentrieren ist. Das vertikale Zentrieren von Inhalten ist dank der Flexbox-Ausrichtungs-Eigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **"Play"** und versuchen Sie, die Ausrichtung zu ändern, beispielsweise das Element mit `start` an den Anfang oder mit `end` an das Ende auszurichten:

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

Mit den Eigenschaften der [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) können Sie ein Element innerhalb eines anderen auch ohne Flexbox vertikal zentrieren. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus dem Container zu entfernen und `align-content: center` hinzuzufügen. Fügen Sie dann `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout mit nach unten gedrücktem Footer

Egal, ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten zu gestalten, diese Layoutmethoden funktionieren nur bei direkten Kindern der Flex- oder Grid-Komponente. Das bedeutet, dass wenn Sie unterschiedliche Mengen an Inhalt haben, die Karte sich bis zur Höhe des Grid-Bereichs oder Flex-Containers erstrecken wird. Jeglicher Inhalt darin verwendet das reguläre Block-Layout, was bedeutet, dass der Footer bei einer Karte mit weniger Inhalt nach unten rückt, statt am unteren Rand der Karte zu bleiben.

![Zwei Kartenkomponenten, die zeigen, dass das Innere der Komponente sich nicht mit dem Wrapper erstreckt.](flex-cards.png)

Flexbox löst das. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Dann setzen wir den Inhaltsbereich auf `flex: 1`, was die Kurzform für `flex: 1 1 0` ist — das Element kann von einer Flex-Grundlage von `0` wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Platz im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft im Live-Beispiel entfernen, werden Sie sehen, dass der Footer nach oben rückt, um direkt unter dem Inhalt zu sitzen.

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

Das Medienobjekt — ein Bild oder anderes Medienelement mit etwas beschreibendem Text nebeneinander — ist ein häufiges Muster im Webdesign. Medienobjekte sollten umgedreht werden können — das Bild von einer Seite zur anderen verschieben.

Dieses Muster wird für Kommentare und andere Orte verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um den Teil des Medienobjekts, der das Bild enthält, seine Größeninformationen aus dem Bild beziehen zu lassen, wobei der Inhalt des Medienobjekts flexibel den restlichen Platz einnimmt.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und der `.content`-Abschnitt ist auf Wachstum eingestellt, mit einem Wachstumsfaktor von `1`. Diese Eigenschaften sind dieselben, die wir auch für unser Spaltenlayout-Kartenmuster oben verwendet haben.

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

Einige Dinge, die Sie in diesem Live-Beispiel versuchen könnten, beziehen sich auf die verschiedenen Möglichkeiten, wie Sie das Medienobjekt in Ihrem Design einschränken könnten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie eine {{cssxref("max-width")}} für das Bild hinzufügen. Da diese Seite des Medienobjekts die anfänglichen Werte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jede angewendete {{cssxref("width")}} oder `max-width` auf das Bild wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten proportional wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie letztendlich zwei gleich große Spalten erhalten. Sie könnten auch den Inhalt als Anhaltspunkt nehmen und beide auf `flex: auto` setzen, in welchem Fall sie vom Inhalt oder von einer direkt angewendeten Größe auf die Flex-Elemente wie einer `width` für das Bild wachsen oder schrumpfen würden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, z.B. die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber diesen Raum mit unterschiedlichen Raten gemäß dem zugewiesenen `flex-grow`-Faktor verteilen. Die Flex-Eigenschaften, die wir dafür verwenden, werden im Leitfaden [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) ausführlich beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Umgedrehtes Medienobjekt

Um die Darstellung des Medienobjekts zu wechseln und das Bild auf die rechte und den Inhalt auf die linke Seite zu setzen, ändern wir die `flex-direction`-Eigenschaft in `row-reverse`.

In diesem Beispiel haben wir eine `flipped`-Klasse neben der `media`-Klasse hinzugefügt. Entfernen Sie die Klasse aus dem HTML, um zu sehen, wie sich die Darstellung ändert.

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

## Formularelemente

Flexbox ist besonders nützlich, wenn es um die Gestaltung von Formularelementen geht. Formulare bestehen aus mehreren kleinen Elementen, die wir typischerweise miteinander ausrichten möchten. Ein häufiges Muster ist ein {{htmlelement("label")}}- und {{htmlelement("input")}}-Paar, kombiniert mit einem {{htmlelement("button")}}, eventuell für ein Suchformular oder ein Anmeldeformular für einen Newsletter, bei dem Ihr Besucher seine E-Mail-Adresse eingeben soll.

Flexbox macht es einfach, dieses Layout zu erreichen. Der `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` eingestellt ist. Die Flex-Eigenschaften ermöglichen es dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Texteingabefeld wird je nach verfügbarem Raum wachsen und schrumpfen.

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

Solche Muster können es viel einfacher machen, eine Sammlung von Formularelementen für Ihr Design zu erstellen, die zusätzliche Elemente leicht aufnehmen. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente mischen, die nicht wachsen, mit solchen, die es tun.

## Fazit

Während Sie die obigen Muster erkundet haben, haben Sie hoffentlich begonnen zu sehen, wie Sie die beste Verwendung von Flexbox durchdenken können, um das gewünschte Ergebnis zu erzielen. Ziemlich oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht strecken können, mit solchen, die es können, verwenden Sie den Inhalt, um die Größe zu informieren, oder lassen Sie Flexbox den Raum proportional verteilen. Es liegt an Ihnen.

Denken Sie darüber nach, wie Sie den Inhalt, den Sie haben, am besten präsentieren können, und sehen Sie dann, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
