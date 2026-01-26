---
title: Typische Anwendungsfälle für Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/Guides/Flexible_box_layout/Use_cases
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

In diesem Leitfaden werden wir uns einige der häufig vorkommenden Anwendungsfälle für Flexbox ansehen – jene Stellen, an denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen steuern möchten. In diesem Leitfaden werden wir einige der typischen Anwendungsfälle von Flexbox betrachten.

## Navigation

Ein häufiges Muster für die Navigation ist eine Liste von Elementen als horizontale Leiste darzustellen. Dies ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Anwendungsfall für Flexbox betrachtet werden.

Wenn wir eine Reihe von Elementen horizontal anzeigen möchten, kann es passieren, dass zusätzlicher Raum entsteht. Wir müssen entscheiden, was wir mit diesem Raum tun, und haben ein paar Optionen. Entweder zeigen wir den Raum außerhalb der Elemente an – sodass sie mit Leerraum zwischen oder um sie herum verteilt werden – oder wir nutzen den zusätzlichen Raum innerhalb der Elemente und benötigen eine Methode, um den Elementen zu erlauben, zu wachsen und diesen Raum einzunehmen.

### Raum außerhalb der Elemente verteilen

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungseigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Mehr über diese Eigenschaft können Sie in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) lesen, die sich mit der Ausrichtung von Elementen auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Raum verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Raum am Ende der Elemente zu platzieren, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

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

Ein anderes Muster für die Navigation wäre, den verfügbaren Raum in den Elementen selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften erlauben es, dass Elemente im Verhältnis zueinander wachsen und schrumpfen, wie in [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) beschrieben.

Wenn Sie die Größeigenschaften Ihrer Navigationselemente respektieren möchten, aber den verfügbaren Raum gleichmäßig unter ihnen aufteilen, könnten Sie `flex: auto` verwenden, das Abkürzung für `flex: 1 1 auto` ist – alle Elemente wachsen und schrumpfen von einer Flex-Basis von `auto`. Dies würde bedeuten, dass das längere Element mehr Raum hätte, da es von einer größeren Größe ausging, auch wenn ihm die gleiche Menge an verfügbarem Raum zugewiesen wird wie den anderen.

Im folgenden Live-Beispiel versuchen Sie, `flex: auto` zu `flex: 1` zu ändern. Diese Abkürzung für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite haben, da sie von einer `flex-basis` von `0` ausgehen und all der Raum gleichmäßig verteilt wird.

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

## Aufgeteilte Navigation

Eine weitere Möglichkeit, Elemente auf der Hauptachse auszurichten, besteht darin, automatische Außenabstände zu verwenden. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen linksbündig und eine andere Gruppe rechtsbündig ausgerichtet ist. Hierbei verwenden wir die Technik der automatischen Außenabstände, die in [Verwendung von automatischen Außenabständen für die Hauptachsen-Ausrichtung](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das anfängliche Verhalten von Flexbox ist. Die {{cssxref("gap")}}-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element zu einem anderen bewegen, um zu ändern, wo die Teilung stattfindet.

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

Ein lang anhaltender Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign die vertikale Zentrierung ist. Die vertikale Zentrierung von Inhalten ist mit den Ausrichtungseigenschaften von Flexbox sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **„Play“** und versuchen Sie, die Ausrichtung zu ändern, zum Beispiel das Element mit `start` an den Anfang oder mit `end` an das Ende auszurichten:

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

Mit [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/Guides/Box_alignment)-Eigenschaften können Sie ein Element in einem anderen ohne Flexbox vertikal zentrieren. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus dem Kasten zu entfernen und `align-content: center` hinzuzufügen. Dann fügen Sie `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout, das den Footer nach unten schiebt

Egal, ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten zu entwerfen, diese Layout-Methoden funktionieren nur bei direkten Kindern der Flex- oder Grid-Komponente. Das bedeutet, dass wenn Sie variable Mengen an Inhalten haben, die Karte auf die Höhe des Gitterbereichs oder des Flex-Containers gedehnt wird. Jeder Inhalt im Inneren verwendet das reguläre Blocklayout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer nach oben zum Boden des Inhalts rückt, anstatt am Boden der Karte festzukleben.

![Zwei Kartenkomponenten, die zeigen, dass das Innere der Komponente nicht mit der Umhüllung dehnt.](flex-cards.png)

Flexbox löst dies. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Wir setzen dann den Inhaltsbereich auf `flex: 1`, was die Abkürzung für `flex: 1 1 0` ist – das Element kann von einer Flex-Basis von `0` aus wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es allen verfügbaren Raum im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, werden Sie sehen, dass der Footer nach oben rückt, um direkt unter dem Inhalt zu sitzen.

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

Das Medienobjekt – ein Bild oder ein anderes Medienelement mit einem beschreibenden Text nebeneinander – ist ein häufiges Muster im Webdesign. Medienobjekte sollten in der Lage sein, umgedreht zu werden – das Bild von einer Seite zur anderen zu bewegen.

Dieses Muster wird für Kommentare und andere Orte verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um dem Teil des Medienobjekts, das das Bild enthält, zu ermöglichen, seine Größeninformation vom Bild zu übernehmen, während der Inhalt des Medienobjekts sich flexibel verhält, um den verbleibenden Raum einzunehmen.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet, und die `.content` ist so eingestellt, dass sie wächst, mit dem Wachstumsfaktor auf `1` gesetzt. Diese Eigenschaften sind die gleichen wie jene, die wir für unser Spaltenlayout-Kartenmuster oben verwendet haben.

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

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren möchten, beziehen sich auf die verschiedenen Möglichkeiten, wie Sie das Medienobjekt in Ihrem Design einschränken möchten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie ein {{cssxref("max-width")}} zum Bild hinzufügen. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen und verwendet eine `flex-basis` von auto. Jede {{cssxref("width")}} oder `max-width`, die auf das Bild angewendet wird, wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten im Verhältnis wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie letztendlich zwei gleich große Spalten erhalten. Sie könnten entweder den Inhalt als Anleitung nehmen und beide auf `flex: auto` setzen, in diesem Fall würden sie von der Größe des Inhalts oder von jeder direkt auf die Flex-Elemente angewendeten Größe wie einer `width` am Bild wachsen und schrumpfen.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten jeder Seite auch unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, indem Sie zum Beispiel die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber diesen Raum mit unterschiedlichen Raten entsprechend dem `flex-grow`-Faktor, den Sie zugewiesen haben, verteilen. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, sind im Detail im Leitfaden [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) beschrieben.

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

Um die Anzeige des Medienobjekts zu ändern und das Bild rechts und den Inhalt links zu haben, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

In diesem Beispiel fügten wir eine `flipped`-Klasse neben der `media`-Klasse hinzu. Entfernen Sie die Klasse aus dem HTML, um zu sehen, wie sich die Anzeige ändert.

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

Flexbox ist besonders nützlich, wenn es darum geht, Formularelemente zu gestalten. Formulare haben mehrere kleine Elemente, die wir normalerweise miteinander ausrichten möchten. Ein häufiges Muster ist ein {{htmlelement("label")}}- und {{htmlelement("input")}}-Paar kombiniert mit einem {{htmlelement("button")}}, vielleicht für ein Suchformular oder ein Anmeldeformular für einen Newsletter, bei dem der Besucher seine E-Mail-Adresse eingeben soll.

Flexbox macht diesen Layout-Typ mit nur wenigen Anweisungen erreichbar. Das `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben es dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Texteingabefeld wächst und schrumpft je nach verfügbarem Raum.

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

Muster wie dieses können es einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die leicht zusätzliche Elemente aufnehmen kann. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente mischen, die nicht wachsen, mit denen, die es tun.

## Fazit

Während Sie die oben genannten Muster erkundet haben, haben Sie hoffentlich begonnen zu erkennen, wie Sie überlegen können, den besten Weg zu finden, Flexbox zu verwenden, um das Ergebnis zu erzielen, das Sie möchten. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht dehnen, mit denen, die es tun, verwenden Sie den Inhalt, um die Größe zu beeinflussen, oder erlauben Sie Flexbox, den Raum proportional zu verteilen. Es liegt an Ihnen.

Denken Sie darüber nach, wie Sie den Inhalt, den Sie haben, am besten präsentieren können, und sehen Sie dann, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
