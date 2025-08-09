---
title: Typische Anwendungsfälle von Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

In diesem Leitfaden werfen wir einen Blick auf einige der häufigen Anwendungsfälle für Flexbox – jene Bereiche, in denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen kontrollieren möchten. In diesem Leitfaden betrachten wir einige der typischen Anwendungsfälle von Flexbox.

## Navigation

Ein häufiges Muster für die Navigation besteht darin, eine Liste von Elementen als horizontale Leiste anzuzeigen. Dies ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Flexbox-Anwendungsfall betrachtet werden.

Wenn wir eine Reihe von Elementen haben, die wir horizontal anzeigen möchten, könnte am Ende zusätzlicher Raum bleiben. Wir müssen entscheiden, was mit diesem Raum geschehen soll, und haben einige Optionen. Entweder zeigen wir den Raum außerhalb der Elemente an – und schaffen somit Abstand mit Leerraum zwischen oder um sie herum – oder wir absorbieren den zusätzlichen Raum innerhalb der Elemente und benötigen daher eine Methode, die es den Elementen erlaubt zu wachsen und diesen Raum einzunehmen.

### Raum außerhalb der Elemente verteilt

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungs-Eigenschaften in Flexbox und die Eigenschaft {{cssxref("justify-content")}}. Mehr über diese Eigenschaft können Sie in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) lesen, die sich mit der Ausrichtung von Elementen auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Raum verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Raum am Ende der Elemente zu platzieren, `end` um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

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

Ein anderes Muster für die Navigation wäre, den verfügbaren Raum innerhalb der Elemente selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften erlauben es Elementen, im Verhältnis zueinander zu wachsen und zu schrumpfen, wie in [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größenangabe Ihrer Navigationselemente respektieren, aber den verfügbaren Raum gleichmäßig unter ihnen aufteilen möchten, könnten Sie `flex: auto` verwenden, was die Kurzform von `flex: 1 1 auto` ist – alle Elemente wachsen und schrumpfen von einer Flex-Basis aus `auto`. Das würde bedeuten, dass das längere Element mehr Raum hätte, weil es von einer größeren Größe aus gestartet ist, obwohl ihm der gleiche verfügbare Raum zugewiesen ist wie den anderen.

Im folgenden Live-Beispiel versuchen Sie, `flex: auto` in `flex: 1` zu ändern. Diese Kurzform von `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite haben, da sie von einer `flex-basis` von `0` arbeiten, was es ermöglicht, den gesamten Raum gleichmäßig zu verteilen.

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

Eine andere Möglichkeit, Elemente auf der Hauptachse auszurichten, ist die Verwendung von automatischen Rändern. Dies ermöglicht das Design-Muster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Ränder, die in [Verwenden von automatischen Rändern zur Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben ist.

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

Ein lange bestehender Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign die vertikale Zentrierung ist. Die vertikale Zentrierung von Inhalten ist mit den Ausrichtungseigenschaften von Flexbox sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **"Play"** und versuchen Sie, die Ausrichtung zu ändern, indem Sie das Element z. B. mit `start` zum Anfang oder mit `end` zum Ende ausrichten:

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

Mit den [CSS-Box-Ausrichtungseigenschaften](/de/docs/Web/CSS/CSS_box_alignment) können Sie ein Element vertikal ohne Flexbox innerhalb eines anderen zentrieren. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus dem Container zu entfernen und `align-content: center` hinzuzufügen. Fügen Sie dann `margin: auto` dem Element hinzu, das Sie horizontal zentrieren möchten.

## Karten-Layout, das den Footer nach unten drückt

Ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenelementen anzuordnen, diese Layout-Methoden funktionieren nur bei direkten Kindern des Flex- oder Grid-Elements. Das bedeutet, dass wenn Sie variable Inhalte haben, die Karte sich auf die Höhe des Gitterbereichs oder des Flex-Containers erstrecken wird. Jedes Inhaltselement im Inneren verwendet das reguläre Block-Layout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer nach oben steigen wird, um direkt unter dem Inhalt zu sitzen, anstatt am unteren Rand der Karte zu bleiben.

![Zwei Kartenelemente, die zeigen, dass die internen Bestandteile des Elements nicht mit der Hülle gestreckt werden.](flex-cards.png)

Flexbox löst dies. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Dann setzen wir den Inhaltsbereich auf `flex: 1`, was die Kurzform von `flex: 1 1 0` ist – das Element kann wachsen und schrumpfen von einer Flex-Basis von `0`. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Raum im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, werden Sie sehen, dass der Footer nach oben verschoben wird, um sich direkt unter dem Inhalt zu befinden.

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

Das Medienobjekt – ein Bild oder ein anderes Medien-Element mit etwas erklärendem Text nebeneinander – ist ein häufiges Muster im Webdesign. Medienobjekte sollten in der Lage sein, umgedreht zu werden – indem das Bild von einer Seite zur anderen bewegt wird.

Dieses Muster wird für Kommentare und andere Bereiche verwendet, in denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um dem Teil des Medienobjekts, der das Bild enthält, zu erlauben, seine Größeninformationen vom Bild zu nehmen, wobei der Inhalt des Medienobjekts flexibel den restlichen Raum einnimmt.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und das `.content` ist auf Wachstum eingestellt, wobei der Wachstumsfaktor auf `1` gesetzt ist. Diese Eigenschaften sind die gleichen wie die, die wir für unser Karten-Layout-Muster mit Spalten oben verwendet haben.

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

Um zu verhindern, dass das Bild zu groß wird, sollten Sie ein {{cssxref("max-width")}} auf das Bild anwenden. Da diese Seite des Medienobjekts die anfänglichen Werte von Flexbox verwendet, kann es schrumpfen, aber nicht wachsen und verwendet eine `flex-basis` von auto. Jede angewendete {{cssxref("width")}} oder `max-width` auf das Bild wird die `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten proportional wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, werden sie aus einer {{cssxref("flex-basis")}} von `0` wachsen und schrumpfen, sodass Sie mit zwei gleich großen Spalten enden. Sie könnten auch den Inhalt als Leitfaden nehmen und beide auf `flex: auto` setzen, in welchem Fall sie von der Größe des Inhalts oder einer direkt auf die Flex-Elemente angewendeten Größe, wie einer `width` auf dem Bild, wachsen und schrumpfen würden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, beispielsweise die Seite mit dem Bild auf `flex: 1` und die Inhaltseite auf `flex: 3` setzen. Das würde bedeuten, dass sie eine `flex-basis` von `0` verwenden, aber diesen Raum mit unterschiedlichen Raten gemäß dem `flex-grow`-Faktor verteilt, den Sie zugewiesen haben. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, sind im Detail im Leitfaden [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Das Medienobjekt umdrehen

Um die Anzeige des Medienobjekts zu wechseln und das Bild rechts und den Inhalt links zu haben, setzen wir die Eigenschaft `flex-direction` auf `row-reverse`.

In diesem Beispiel haben wir eine Klasse `flipped` neben der Klasse `media` hinzugefügt. Entfernen Sie die Klasse aus dem HTML, um zu sehen, wie sich die Anzeige ändert.

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

Flexbox ist besonders nützlich, wenn es darum geht, Formularelemente zu stylen. Formulare haben mehrere kleine Elemente, die wir typischerweise miteinander ausrichten möchten. Ein häufiges Muster besteht darin, ein {{htmlelement("label")}}- und {{htmlelement("input")}}-Paar mit einem {{htmlelement("button")}} zu kombinieren, möglicherweise für ein Suchformular oder ein Newsletter-Anmeldeformular, bei dem Sie möchten, dass Ihr Besucher seine E-Mail-Adresse eingibt.

Flexbox macht diese Art von Layout einfach. Das `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben es dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Texteingabefeld wird abhängig vom verfügbaren Raum wachsen und schrumpfen.

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
  background-color: #666;
}
```

{{EmbedLiveSample("label-input-button")}}

Solche Muster können es wesentlich einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die problemlos zusätzliche Elemente aufnehmen können. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente, die nicht wachsen, mit denen mischen, die es tun.

## Fazit

Während Sie die oben genannten Muster erkundet haben, haben Sie hoffentlich begonnen zu sehen, wie Sie den besten Weg durchdenken können, Flexbox zu nutzen, um das gewünschte Ergebnis zu erzielen. Häufig haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht dehnen können, mit denen, die es können, nutzen Sie den Inhalt, um die Größe zu bestimmen, oder lassen Sie Flexbox den Raum proportional verteilen. Es liegt an Ihnen.

Denken Sie an den besten Weg, um die Inhalte, die Sie haben, zu präsentieren, und prüfen Sie, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
