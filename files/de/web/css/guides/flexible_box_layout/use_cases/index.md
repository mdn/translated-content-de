---
title: Typische Anwendungsfälle von Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/Guides/Flexible_box_layout/Use_cases
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

In diesem Leitfaden werfen wir einen Blick auf einige der üblichen Anwendungsfälle für Flexbox — jene Situationen, in denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension layouten oder den Abstand zwischen den Elementen steuern möchten. In diesem Leitfaden betrachten wir einige der typischen Anwendungsfälle von Flexbox.

## Navigation

Ein übliches Muster für die Navigation ist es, eine Liste von Elementen als horizontale Leiste anzuzeigen. Dies ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Anwendungsfall für Flexbox betrachtet werden.

Wenn wir eine Reihe von Elementen haben, die wir horizontal anzeigen möchten, könnten wir zusätzlichen Platz haben. Wir müssen entscheiden, was mit diesem Raum geschehen soll und haben dafür ein paar Optionen. Entweder zeigen wir den Raum außerhalb der Elemente an — indem wir sie mit Leerraum zwischen oder um sie herum verteilen — oder wir absorbieren den zusätzlichen Raum innerhalb der Elemente und benötigen daher eine Methode, die es den Elementen ermöglicht, zu wachsen und diesen Raum einzunehmen.

### Raum außerhalb der Elemente verteilt

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungseigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Sie können mehr über diese Eigenschaft im Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) lesen, der sich mit der Ausrichtung von Elementen auf der Hauptachse befasst.

In diesem Beispiel stellen wir die Elemente in ihrer natürlichen Größe dar und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Raum verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Raum am Ende der Elemente zu platzieren, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

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

### Raum innerhalb der Elemente verteilt

Ein anderes Muster für die Navigation wäre es, den verfügbaren Raum innerhalb der Elemente selbst zu verteilen, anstatt Platz zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften erlauben es Elementen, im Verhältnis zueinander zu wachsen und zu schrumpfen, wie in [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) beschrieben.

Wenn Sie die Größenangabe Ihrer Navigationselemente respektieren möchten, aber den verfügbaren Raum gleichmäßig unter ihnen aufgeteilt haben möchten, könnten Sie `flex: auto` verwenden, das eine Abkürzung für `flex: 1 1 auto` ist — alle Elemente wachsen und schrumpfen von einer Flex-Basis von `auto`. Dies würde bedeuten, dass das längere Element mehr Platz bekommt, weil es von einer größeren Größe aus gestartet ist, auch wenn ihm der gleiche Betrag an verfügbarem Raum zugewiesen wird wie den anderen.

Im folgenden Live-Beispiel versuchen Sie, `flex: auto` in `flex: 1` zu ändern. Diese Abkürzung für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite haben, da sie von einer `flex-basis` von `0` arbeiten, wodurch der gesamte Raum gleichmäßig verteilt wird.

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

## Gesplittete Navigation

Eine weitere Möglichkeit, Elemente auf der Hauptachse auszurichten, ist die Verwendung von Auto-Rändern. Dies ermöglicht das Gestaltungsmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Auto-Rand-Technik, die in [Verwendung von Auto-Rändern für die Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das Anfangsverhalten von Flexbox ist. Die {{cssxref("gap")}}-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element auf ein anderes verschieben, um zu ändern, wo die Trennung erfolgt.

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

Ein langjähriger Witz unter Entwicklern besagt, dass das schwierigste Problem im Webdesign die vertikale Zentrierung ist. Die vertikale Zentrierung von Inhalten ist mit den Flexbox-Ausrichtungseigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **"Play"** und versuchen Sie, die Ausrichtung zu ändern, indem Sie zum Beispiel das Element mit `start` am Anfang oder mit `end` am Ende ausrichten:

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

Mit den [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)-Eigenschaften können Sie ein Element innerhalb eines anderen ohne Flexbox vertikal zentrieren. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus dem Kasten zu entfernen und `align-content: center` hinzuzufügen. Fügen Sie dann `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout, das den Footer nach unten drückt

Egal, ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten anzuordnen, diese Layoutmethoden funktionieren nur bei direkten Kindern des Flex- oder Grid-Containers. Das bedeutet, dass wenn Sie variable Mengen an Inhalten haben, die Karte sich auf die Höhe des Grid-Bereichs oder des Flex-Containers erstrecken wird. Jeder Inhalt innerhalb verwendet das reguläre Blocklayout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer nach oben wandert, um direkt unter dem Inhalt zu sitzen, anstatt am unteren Rand der Karte zu haften.

![Zwei Kartenkomponenten, die zeigen, dass die inneren Teile der Komponente nicht mit dem Wrapper gedehnt werden.](flex-cards.png)

Flexbox löst dieses Problem. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Dann setzen wir den Inhaltsbereich auf `flex: 1`, was eine Abkürzung für `flex: 1 1 0` ist — das Element kann von einer Flex-Basis von `0` wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Raum im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, werden Sie sehen, dass der Footer nach oben wandert, um direkt unter dem Inhalt zu sitzen.

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

Das Medienobjekt — ein Bild oder ein anderes Medienelement mit einem erklärenden Text nebeneinander — ist ein häufiges Muster im Webdesign. Medienobjekte sollten in der Lage sein, umgekehrt zu werden — das Bild von einer Seite auf die andere zu bewegen.

Dieses Muster wird für Kommentare und andere Orte verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um dem Teil des Medienobjekts mit dem Bild zu erlauben, seine Größendaten vom Bild abzuleiten, wobei der Inhalt des Medienobjekts flexibel ist und den verbleibenden Raum einnimmt.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und die `.content` ist zum Wachsen eingestellt, mit dem Wachstumsfaktor auf `1`. Diese Eigenschaften sind die gleichen wie die, die für unser Spaltenlayoutkartenmuster oben verwendet werden.

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

Um zu verhindern, dass das Bild zu groß wird, sollten Sie eine {{cssxref("max-width")}} zum Bild hinzufügen. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen und verwendet eine `flex-basis` von auto. Jede {{cssxref("width")}} oder `max-width`, die auf das Bild angewendet wird, wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch erlauben, dass beide Seiten proportional wachsen und schrumpfen. Wenn Sie beide Seiten auf `flex: 1` setzen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie mit zwei gleich großen Spalten enden. Sie könnten auch den Inhalt als Leitfaden nehmen und beide auf `flex: auto` setzen, in welchem Fall sie vom Inhalt aus wachsen und schrumpfen oder von jeder Größe, die direkt auf die Flex-Elemente angewendet wird, wie eine `width` auf dem Bild.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jede Seite mit unterschiedlichen {{cssxref("flex-grow")}} Faktoren versehen, beispielsweise die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber diesen Raum mit unterschiedlichen Raten gemäß dem zugewiesenen `flex-grow`-Faktor verteilen. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, werden im Leitfaden [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) ausführlich beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Umschalten des Medienobjekts

Um die Anzeige des Medienobjekts zu wechseln und das Bild rechts und den Inhalt links zu haben, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

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

Flexbox ist besonders nützlich, wenn es darum geht, Formularelemente zu gestalten. Formulare haben mehrere kleine Elemente, die wir normalerweise zueinander ausrichten möchten. Ein häufiges Muster ist ein {{htmlelement("label")}} und {{htmlelement("input")}}-Paar, kombiniert mit einem {{htmlelement("button")}}, vielleicht für ein Suchformular oder ein Newsletter-Anmeldeformular, bei dem Ihr Besucher seine E-Mail-Adresse eingeben soll.

Flexbox macht diese Art von Layout einfach zu erreichen. Das `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Text-Eingabefeld wird je nach verfügbarem Platz wachsen und schrumpfen.

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

Muster wie dieses können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die problemlos zusätzliche Elemente aufnehmen, die hinzugefügt werden. Sie nutzen die Flexibilität von Flexbox aus, indem Sie Elemente mischen, die nicht wachsen, mit denen, die es tun.

## Fazit

Während Sie die oben genannten Muster erkundet haben, haben Sie hoffentlich begonnen zu verstehen, wie Sie den besten Weg finden können, Flexbox zu verwenden, um das gewünschte Ergebnis zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die nicht dehnbar sind, mit denen, die es sind, nutzen Sie den Inhalt, um die Größe zu bestimmen, oder erlauben Sie Flexbox, den Raum proportional zu verteilen. Es liegt an Ihnen.

Denken Sie darüber nach, wie Sie den Inhalt, den Sie haben, am besten präsentieren können, und sehen Sie dann, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
