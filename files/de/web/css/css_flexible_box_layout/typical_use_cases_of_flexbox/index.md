---
title: Typische Anwendungsfälle für Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

In diesem Leitfaden betrachten wir einige der gängigen Anwendungsfälle für Flexbox – jene Bereiche, in denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen steuern möchten. In diesem Leitfaden werden wir einige der typischen Anwendungsfälle von Flexbox untersuchen.

## Navigation

Ein häufiges Muster für die Navigation ist die Darstellung einer Liste von Elementen als horizontale Leiste. Es ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Anwendungsfall für Flexbox betrachtet werden.

Wenn wir eine Reihe von Elementen haben, die wir horizontal anzeigen möchten, können wir am Ende mit zusätzlichem Platz landen. Wir müssen entscheiden, was wir mit diesem Platz machen, und haben einige Optionen. Entweder zeigen wir den Platz außerhalb der Elemente an – indem wir sie mit Leerraum dazwischen oder um sie herum verteilen – oder wir nehmen den zusätzlichen Platz innerhalb der Elemente auf und benötigen daher eine Methode, um die Elemente wachsen und diesen Platz einnehmen zu lassen.

### Außen um die Elemente verteilte Fläche

Um den Platz zwischen oder um die Elemente zu verteilen, nutzen wir die Ausrichtungseigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Mehr über diese Eigenschaft können Sie im Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) lesen, der sich mit der Ausrichtung der Elemente auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Platz verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` nutzen. Sie könnten auch `start` nutzen, um den Platz am Ende der Elemente zu platzieren, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

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

### Innerhalb der Elemente verteilte Fläche

Ein anderes Muster für die Navigation wäre, den verfügbaren Platz innerhalb der Elemente selbst zu verteilen, anstatt Platz zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften erlauben es Elementen, im Verhältnis zueinander zu wachsen und zu schrumpfen, wie im Artikel [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größen-Eigenschaft Ihrer Navigationselemente respektieren, aber den verfügbaren Platz unter ihnen gleichmäßig verteilen möchten, könnten Sie `flex: auto` verwenden, was die Kurzform für `flex: 1 1 auto` ist – alle Elemente wachsen und schrumpfen von einer flex-basis von `auto`. Das würde bedeuten, dass das längere Element mehr Platz hätte, da es von einer größeren Größe ausgeht, obwohl ihm der gleiche Betrag an verfügbarem Platz zugewiesen wird wie den anderen.

Im Live-Beispiel unten versuchen Sie, `flex: auto` in `flex: 1` zu ändern. Diese Kurzform für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite haben, da sie von einer `flex-basis` von `0` ausgehen, die den gesamten Raum gleichmäßig verteilt.

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

Eine andere Möglichkeit, Elemente auf der Hauptachse auszurichten, ist die Verwendung von automatischen Abständen. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Abstände, die im Artikel [Verwendung von automatischen Abständen zur Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das anfängliche Verhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/gap)-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element auf ein anderes verschieben, um zu ändern, wo die Teilung erfolgt.

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

## Element zentrieren

Ein langjähriger Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign das vertikale Zentrieren ist. Das vertikale Zentrieren von Inhalten ist mit den Flexbox-Ausrichtungseigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **"Play"** und versuchen Sie, die Ausrichtung zu ändern, zum Beispiel das Element mit `start` zum Anfang oder mit `end` zum Ende auszurichten:

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

Mit [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften können Sie ein Element in einem anderen ohne Flexbox vertikal zentrieren. Versuchen Sie im obigen Beispiel, die Flex-Eigenschaften aus der Box zu entfernen und `align-content: center` hinzuzufügen. Fügen Sie dann `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout, das den Footer nach unten drückt

Ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten zu gestalten, diese Layout-Methoden funktionieren nur für direkte Kinder des Flex- oder Grid-Komponents. Das bedeutet, dass wenn Sie variable Mengen an Inhalt haben, die Karte sich auf die Höhe des Grid-Bereichs oder Flex-Containers strecken wird. Jeglicher Inhalt darin verwendet das reguläre Block-Layout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer bis zum unteren Rand des Inhalts hochsteigen wird, anstatt am unteren Rand der Karte zu haften.

![Zwei Kartenkomponenten zeigen, dass die internen Elemente der Komponente sich nicht mit der Umhüllung strecken.](flex-cards.png)

Flexbox löst dies. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Wir setzen dann den Inhaltsbereich auf `flex: 1`, was die Kurzform für `flex: 1 1 0` ist – das Element kann von einer Flexbasis von `0` aus wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Platz im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, werden Sie sehen, dass der Footer direkt unter dem Inhalt nach oben rückt.

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

Das Medienobjekt – ein Bild oder ein anderes Medienelement mit einem erklärenden Text daneben – ist ein gängiges Muster im Webdesign. Medienobjekte sollten umkehrbar sein – das Bild von einer Seite zur anderen bewegen.

Dieses Muster wird für Kommentare und andere Bereiche verwendet, in denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um den Teil des Medienobjekts, das das Bild enthält, seine Größeninformationen vom Bild nehmen zu lassen, während der Inhalt des Medienobjekts den verbleibenden Platz einnimmt.

In diesem Beispiel wird das Medienobjekt an `flex-start` ausgerichtet und das `.content` ist so eingestellt, dass es mit einem Wachstumsfaktor von `1` wächst. Diese Eigenschaften sind dieselben, die wir für unser Spaltenlayout-Kartenmuster oben verwendet haben.

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

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren möchten, beziehen sich auf die verschiedenen Möglichkeiten, wie Sie das Medienobjekt in Ihrem Design einschränken könnten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie dem Bild eine {{cssxref("max-width")}} hinzufügen. Da diese Seite des Medienobjekts die Standardwerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jede angewandte {{cssxref("width")}} oder `max-width` auf das Bild wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten erlauben, proportional zu wachsen und zu schrumpfen. Wenn Sie beide Seiten auf `flex: 1` einstellen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie am Ende zwei gleich große Spalten haben. Sie könnten den Inhalt als Leitfaden nehmen und beide auf `flex: auto` setzen, in welchem Fall sie von der Größe des Inhalts oder einer direkt auf die Flex-Elemente angewandten Größe wie einer `width` auf dem Bild wachsen und schrumpfen würden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, beispielsweise die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Dies würde bedeuten, dass sie eine `flex-basis` von `0` verwenden, den Raum jedoch mit unterschiedlichen Raten entsprechend dem zugewiesenen `flex-grow`-Faktor verteilen. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, sind im Detail im Leitfaden [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Umkehren des Medienobjekts

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

## Formularelemente

Flexbox ist besonders nützlich, wenn es darum geht, Formularelemente zu gestalten. Formulare haben mehrere kleine Elemente, die wir typischerweise miteinander ausrichten möchten. Ein häufiges Muster ist die Kombination eines {{htmlelement("label")}} und eines {{htmlelement("input")}} mit einem {{htmlelement("button")}}, möglicherweise für eine Suchform oder ein Newsletter-Anmeldeformular, in dem Sie Ihren Besucher bitten, seine E-Mail-Adresse einzugeben.

Flexbox macht dieses Layout einfach erreichbar. Das `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften ermöglichen es dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Texteingabefeld wird je nach verfügbarem Platz wachsen und schrumpfen.

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

Muster wie dieses können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihre Gestaltung zu erstellen, die leicht zusätzliche, hinzukommende Elemente berücksichtigt. Sie nutzen die Flexibilität von Flexbox, indem Sie nicht wachsende mit wachsenden Elementen mischen.

## Fazit

Während Sie die oben genannten Muster erkundet haben, haben Sie hoffentlich begonnen zu sehen, wie Sie am besten Flexbox nutzen können, um das gewünschte Ergebnis zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht strecken können, mit solchen, die es können, nutzen Sie den Inhalt, um die Größe zu bestimmen, oder lassen Sie Flexbox den Raum proportional verteilen. Es liegt an Ihnen.

Denken Sie darüber nach, wie Sie den Inhalt, den Sie haben, am besten präsentieren können und sehen Sie, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
