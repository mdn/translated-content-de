---
title: Typische Anwendungsfälle von Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

In diesem Leitfaden betrachten wir einige der häufigen Anwendungsfälle für Flexbox — jene Stellen, an denen Flexbox sinnvoller ist als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen steuern möchten. In diesem Leitfaden schauen wir uns einige der typischen Anwendungsfälle von Flexbox an.

## Navigation

Ein häufiges Muster für die Navigation ist es, eine Liste von Elementen als horizontale Leiste anzuzeigen. Dies ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Anwendungsfall für Flexbox angesehen werden.

Wenn wir eine Reihe von Elementen horizontal anzeigen möchten, bleibt möglicherweise zusätzlicher Platz übrig. Wir müssen entscheiden, was wir mit diesem Raum machen, und haben ein paar Optionen. Wir können den Raum außerhalb der Elemente darstellen — sie somit mit Leerraum zwischen oder um sie herum verteilen — oder wir absorbieren den zusätzlichen Raum innerhalb der Elemente und benötigen daher eine Methode, um den Elementen zu ermöglichen, zu wachsen und diesen Raum einzunehmen.

### Raum außerhalb der Elemente verteilt

Um den Raum zwischen oder um die Elemente herum zu verteilen, verwenden wir die Ausrichtungs-Eigenschaften in Flexbox und die {{cssxref("justify-content")}} Eigenschaft. Sie können mehr über diese Eigenschaft in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) lesen, das sich mit der Ausrichtung von Elementen entlang der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Platz verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Raum am Ende der Elemente zu platzieren, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

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

Ein anderes Muster für die Navigation wäre es, den verfügbaren Raum innerhalb der Elemente selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}} Eigenschaften ermöglichen es Elementen, im Verhältnis zueinander zu wachsen und zu schrumpfen, wie in [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größe Ihrer Navigationselemente respektieren möchten, aber den verfügbaren Raum gleichmäßig unter ihnen aufteilen möchten, könnten Sie `flex: auto` verwenden, was die Abkürzung für `flex: 1 1 auto` ist — alle Elemente wachsen und schrumpfen von einer Flex-Basis von `auto`. Dies würde bedeuten, dass das längere Element mehr Platz hätte, da es von einer größeren Größe aus startet, obwohl ihm derselbe verfügbare Raum wie den anderen zugewiesen wird.

Im nachstehenden Beispiel können Sie versuchen, `flex: auto` in `flex: 1` zu ändern. Diese Abkürzung für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite einnehmen, da sie von einer `flex-basis` von `0` ausgehen und der gesamte Raum gleichmäßig verteilt wird.

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

## Gespaltener Navigation

Eine weitere Möglichkeit, Elemente entlang der Hauptachse auszurichten, besteht darin, automatische Margen zu verwenden. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Margen, die in [Verwenden von automatischen Margen für die Hauptrichtungs-Ausrichtung](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das anfängliche Verhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/gap) Eigenschaft sorgt für Lücken zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left` Wert von `auto` geben. Sie können die Klasse von einem Element zu einem anderen verschieben, um zu ändern, wo die Teilung erfolgt.

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

## Mittelstift

Ein immerwährender Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign das vertikale Zentrieren ist. Das vertikale Zentrieren von Inhalten ist mit Flexbox-Ausrichtungseigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **"Play"** und versuchen Sie, die Ausrichtung zu ändern, indem Sie das Element beispielsweise mit `start` nach Anfang oder mit `end` nach Ende ausrichten:

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

Mit [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Eigenschaften können Sie ein Element innerhalb eines anderen vertikal zentrieren, ohne Flexbox. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus der Box zu entfernen und `align-content: center` hinzuzufügen. Fügen Sie dann `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout, das den Footer nach unten drückt

Egal, ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten zu layouten, diese Layout-Methoden funktionieren nur auf den direkten Kindern der Flex- oder Grid-Komponente. Das bedeutet, dass bei variablen Inhaltsmengen die Karte sich an die Höhe des Grid-Bereichs oder des Flex-Containers anpasst. Jeder Inhalt darin verwendet das Standard-Blocklayout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer zum Inhalt hinaufsteigt, anstatt am unteren Rand der Karte zu bleiben.

![Zwei Kartenkomponenten, die zeigen, dass der interne Inhalt der Komponente nicht mit dem Wrapper dehnt.](flex-cards.png)

Flexbox löst das. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Wir setzen dann den Inhaltsbereich auf `flex: 1`, was die Abkürzung für `flex: 1 1 0` ist — das Element kann von einer Flex-Basis von `0` aus wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Raum im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex` Eigenschaft aus dem Live-Beispiel entfernen, sehen Sie, dass sich der Footer direkt unter den Inhalt verschiebt.

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

Das Medienobjekt — ein Bild oder anderes Medienelement mit einem danebenstehenden beschreibenden Text — ist ein häufiges Muster im Webdesign. Medienobjekte sollten gekippt werden können — das Bild von einer Seite auf die andere verschieben.

Dieses Muster wird für Kommentare und andere Stellen verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um den Teil des Medienobjekts, der das Bild enthält, seine Größeninformationen vom Bild übernehmen zu lassen, wobei der Inhalt des Medienobjekts flexibel den verbleibenden Raum einnimmt.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und die `.content` ist zum Wachsen gesetzt, mit dem Wachstumsfaktor auf `1`. Diese Eigenschaften sind die gleichen wie diejenigen, die wir für unser Säulenlayout-Kartenmuster oben verwendet haben.

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

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren könnten, beziehen sich auf die verschiedenen Möglichkeiten, wie Sie das Medienobjekt in Ihrem Design einschränken möchten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie eine {{cssxref("max-width")}} auf das Bild anwenden. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jede {{cssxref("width")}} oder `max-width`, die Sie auf das Bild anwenden, wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten im Verhältnis wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie zwei gleich große Spalten erhalten. Sie könnten entweder den Inhalt als Leitfaden nehmen und beide auf `flex: auto` setzen, in welchem Fall sie von der Größe des Inhalts oder jeder direkt auf die Flex-Elemente angewendeten Größe wie eine `width` auf dem Bild wachsen und schrumpfen würden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}} Faktoren geben, indem Sie beispielsweise die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber diesen Raum mit unterschiedlichen Raten entsprechend dem `flex-grow` Faktor verteilen, den Sie zugewiesen haben. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, werden im Leitfaden [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) im Detail beschrieben.

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

Um die Darstellung des Medienobjekts umzukehren und das Bild auf der rechten und den Inhalt auf der linken Seite zu haben, setzen wir die `flex-direction` Eigenschaft auf `row-reverse`.

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

Flexbox ist besonders nützlich, wenn es darum geht, Formularelemente zu gestalten. Formulare haben mehrere kleine Elemente, die wir normalerweise miteinander ausrichten möchten. Ein häufiges Muster ist es, ein {{htmlelement("label")}} und {{htmlelement("input")}} Paar mit einem {{htmlelement("button")}} zu kombinieren, vielleicht für ein Suchformular oder ein Newsletter-Anmeldeformular, bei dem Ihr Besucher seine E-Mail-Adresse eingeben soll.

Flexbox macht diesen Typ von Layout einfach zu erreichen. Das `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben es dem `<input>` Feld zu wachsen, während der Button und das Etikett nicht wachsen. Das Texteingabefeld wird sich je nach verfügbarer Platzierung anpassen.

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

Muster wie dieses können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die problemlos zusätzliche Elemente aufnehmen. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente mischen, die nicht wachsen, mit denen, die es tun.

## Schlussfolgerung

Während Sie die obigen Muster untersucht haben, haben Sie hoffentlich begonnen zu sehen, wie Sie den besten Weg durchdenken können, Flexbox zu verwenden, um das gewünschte Ergebnis zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht dehnen können, mit solchen, die es können, verwenden Sie den Inhalt, um die Größe zu bestimmen, oder erlauben Sie Flexbox, den Raum proportional zu verteilen. Es liegt an Ihnen.

Denken Sie darüber nach, wie Sie den Inhalt, den Sie haben, am besten präsentieren, und sehen Sie, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
