---
title: Typische Anwendungsfälle von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

In diesem Leitfaden werfen wir einen Blick auf einige der häufigen Anwendungsfälle für Flexbox – dort, wo Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist in der Regel die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen steuern möchten. In diesem Leitfaden betrachten wir einige der typischen Anwendungsfälle von Flexbox.

## Navigation

Ein häufiges Muster für die Navigation ist eine Liste von Elementen, die als horizontale Leiste angezeigt werden. Das ist wahrscheinlich das häufigste Flexbox-Beispiel und könnte als idealer Anwendungsfall für Flexbox angesehen werden.

Wenn wir eine Reihe von Elementen haben, die wir horizontal anzeigen möchten, kann durchaus zusätzlicher Platz entstehen. Wir müssen entscheiden, was mit diesem Platz geschehen soll, und haben dabei mehrere Optionen. Entweder zeigen wir den Raum außerhalb der Elemente an – und verteilen sie somit mit Leerraum dazwischen oder um sie herum – oder wir absorbieren den zusätzlichen Raum innerhalb der Elemente und benötigen daher eine Methode, um den Elementen zu erlauben, zu wachsen und diesen Raum einzunehmen.

### Raum außerhalb der Elemente verteilt

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungs-Eigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Weitere Informationen zu dieser Eigenschaft finden Sie in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container), welches die Ausrichtung der Elemente auf der Hauptachse behandelt.

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
  color: #000;
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

Ein anderes Muster für die Navigation wäre, den verfügbaren Platz innerhalb der Elemente selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften erlauben es Elementen zu wachsen und sich im Verhältnis zueinander zu ändern, wie in [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größeneigenschaft Ihrer Navigationselemente respektieren, den verfügbaren Platz jedoch gleichmäßig unter ihnen aufteilen möchten, könnten Sie `flex: auto` verwenden, was die Kurzform für `flex: 1 1 auto` ist – alle Elemente wachsen und schrumpfen von einer flex-basis von `auto`. Dies würde bedeuten, dass das längere Element mehr Platz hätte, da es von einer größeren Größe aus begann, obwohl ihm derselbe verfügbare Platz zugewiesen wird wie den anderen.

Im folgenden Live-Beispiel versuchen Sie, `flex: auto` in `flex: 1` zu ändern. Diese Kurzschreibweise für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite haben, da sie von einer `flex-basis` von `0` arbeiten, wodurch der gesamte Raum gleichmäßig verteilt wird.

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
  color: #000;
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

## Gesplitterte Navigation

Eine andere Möglichkeit, Elemente auf der Hauptachse auszurichten, ist die Verwendung von automatischen Rändern. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Ränder, die in [Verwendung von automatischen Rändern für die Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben ist.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das anfängliche Verhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/gap)-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element zu einem anderen wechseln, um zu ändern, wo die Teilung erfolgt.

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
  color: #000;
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

Ein langjähriger Witz unter Entwicklern besagt, dass das schwierigste Problem im Webdesign das vertikale Zentrieren ist. Das vertikale Zentrieren von Inhalten ist mit den Ausrichtungs-Eigenschaften von Flexbox sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **"Play"** und versuchen Sie, die Ausrichtung zu ändern, zum Beispiel das Element mit `start` nach vorne oder mit `end` nach hinten auszurichten:

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

Mit den [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften können Sie ein Element innerhalb eines anderen ohne Flexbox vertikal zentrieren. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus der Box zu entfernen und `align-content: center` hinzuzufügen. Dann fügen Sie `margin: auto` dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartendesign schiebt Fußzeile nach unten

Ob Sie Flexbox oder Raster verwenden, um eine Liste von Kartenkomponenten zu gestalten, diese Layout-Methoden funktionieren nur auf direkten Kindern der Flex- oder Rasterkomponente. Das bedeutet, dass wenn Sie unterschiedliche Inhaltsmengen haben, die Karte auf die Höhe des Rasterbereichs oder des Flex-Containers gestreckt wird. Jeder Inhalt im Inneren verwendet das reguläre Block-Layout, was bedeutet, dass auf einer Karte mit weniger Inhalt die Fußzeile zum unteren Ende des Inhalts hinaufsteigt, anstatt an der Unterseite der Karte zu haften.

![Zwei Kartenkomponenten zeigen, dass die internen Elemente der Komponente sich nicht mit der Hülle strecken.](flex-cards.png)

Flexbox löst dies. Wir machen die Karte zu einem Flex-Container, mit {{cssxref("flex-direction", "flex-direction: column")}}. Wir setzen dann den Inhaltsbereich auf `flex: 1`, was die Kurzform für `flex: 1 1 0` ist – das Element kann von einer flex-Basis von `0` aus wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Raum im Flex-Container ein und schiebt die Fußzeile nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, sehen Sie, dass die Fußzeile direkt unter den Inhalt verschoben wird.

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

Das Medienobjekt – ein Bild oder ein anderes Medienelement, das zusammen mit etwas beschreibendem Text nebeneinander angezeigt wird – ist ein häufiges Muster im Webdesign. Die Medienobjekte sollten sich umdrehen lassen – das Bild von einer Seite zur anderen verschieben.

Dieses Muster wird für Kommentare und andere Orte verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, damit der Teil des Medienobjekts, der das Bild enthält, seine Größeninformation vom Bild erhält und der Inhalt des Medienobjekts flexibel den verbleibenden Platz einnimmt.

In diesem Beispiel wird das Medienobjekt auf `flex-start` ausgerichtet und die `.content` ist auf Wachstum eingestellt, mit dem Wachstumsfaktor auf `1` gesetzt. Diese Eigenschaften sind die gleichen wie die, die für unser Spaltenlayout-Kartenmuster oben verwendet wurden.

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

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren könnten, betreffen die verschiedenen Wege, auf denen Sie das Medienobjekt in Ihrem Design einschränken möchten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie ein {{cssxref("max-width")}} zum Bild hinzufügen. Da diese Seite des Medienobjekts die anfänglichen Werte von Flexbox verwendet, kann es schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jede {{cssxref("width")}} oder `max-width`, die auf das Bild angewendet wird, wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten proportional wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, werden sie von einer {{cssxref("flex-basis")}} von `0` aus wachsen und schrumpfen, sodass Sie zwei gleich große Spalten erhalten. Sie könnten auch den Inhalt als Leitfaden nehmen und beide auf `flex: auto` setzen, in diesem Fall würden sie von der Größe des Inhalts oder jeder direkt auf die Flex-Elemente angewendeten Größe wie eine `Breite` auf dem Bild aus wachsen und schrumpfen.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, beispielsweise die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber den Raum in unterschiedlichen Raten gemäß dem `flex-grow`-Faktor verteilen, den Sie zugewiesen haben. Die Flex-Eigenschaften, die wir hierfür verwenden, sind detailliert im Leitfaden [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Umdrehen des Medienobjekts

Um die Anzeige des Medienobjekts zu ändern und das Bild auf der rechten und den Inhalt auf der linken Seite zu haben, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

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

Flexbox ist besonders nützlich, wenn es darum geht, Formularsteuerungen zu gestalten. Formulare enthalten mehrere kleine Elemente, die wir typischerweise miteinander ausrichten möchten. Ein häufiges Muster ist ein {{htmlelement("label")}}- und {{htmlelement("input")}}-Paar in Kombination mit einem {{htmlelement("button")}}, vielleicht für ein Suchformular oder ein Newsletter-Anmeldeformular, bei dem Ihr Besucher seine E-Mail-Adresse eingeben soll.

Flexbox macht diese Art von Layout einfach zu erreichen. Die `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben es dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Text-Eingabefeld wird je nach verfügbarem Platz wachsen und schrumpfen.

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
  color: #fff;
}
.wrapper > input[type="text"] {
  background-color: rgb(96 139 168 / 0.5);
  border-right: 1px solid rgb(96 139 168);
  flex: 1 1 auto;
}
.wrapper input[type="submit"] {
  background-color: rgb(96 139 168);
  color: #fff;
}
.wrapper label {
  background-color: #666;
}
```

{{EmbedLiveSample("label-input-button")}}

Muster wie dieses können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die leicht zusätzliche Elemente aufnehmen. Sie nutzen die Flexibilität von Flexbox, indem Sie nicht wachsende Elemente mit solchen, die es tun, mischen.

## Fazit

Während Sie die obigen Muster erkunden, haben Sie hoffentlich begonnen zu erkennen, wie Sie den besten Weg finden können, Flexbox zu verwenden, um das gewünschte Ergebnis zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht strecken können, mit solchen, die es können, nutzen Sie den Inhalt zur Bestimmung der Größe oder erlauben Sie Flexbox, Raum proportional zu verteilen. Es liegt an Ihnen.

Denken Sie über die beste Art nach, den Inhalt, den Sie haben zu präsentieren, und sehen Sie dann, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
