---
title: Typische Anwendungsfälle von Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/Guides/Flexible_box_layout/Use_cases
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

In diesem Leitfaden werden wir einige der gängigen Anwendungsfälle für Flexbox betrachten — jene Bereiche, in denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen kontrollieren möchten. In diesem Leitfaden werden wir einige der typischen Anwendungsfälle von Flexbox betrachten.

## Navigation

Ein häufiges Muster für die Navigation ist eine Liste von Elementen, die als horizontale Leiste angezeigt werden. Es ist wahrscheinlich das häufigste Flexbox-Beispiel und könnte als idealer Flexbox-Anwendungsfall betrachtet werden.

Wenn wir eine Reihe von Elementen haben, die wir horizontal anzeigen möchten, könnten wir zusätzlichen Platz haben. Wir müssen entscheiden, was wir mit diesem Platz machen, und haben ein paar Optionen. Entweder zeigen wir den Platz außerhalb der Elemente an — also verteilen wir sie mit Leerzeichen zwischen oder um sie herum — oder wir absorbieren den zusätzlichen Platz innerhalb der Elemente und benötigen daher eine Methode, um den Elementen zu erlauben, zu wachsen und diesen Platz einzunehmen.

### Platz außerhalb der Elemente verteilen

Um den Platz zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungs-Eigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Weitere Informationen zu dieser Eigenschaft finden Sie in [Ausrichtung der Elemente in einem flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items), die sich mit der Ausrichtung der Elemente auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Platz verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Platz am Ende der Elemente zu setzen, `end`, um ihn davor zu setzen, oder `center`, um die Navigationselemente zu zentrieren.

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

### Platz innerhalb der Elemente verteilen

Ein anderes Muster für die Navigation wäre, den verfügbaren Platz innerhalb der Elemente selbst zu verteilen, anstatt Platz zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften erlauben es, dass Elemente im Verhältnis zueinander wachsen und schrumpfen, wie in [Steuerung der Verhältnisse von flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) beschrieben.

Wenn Sie die Größeneigenschaft Ihrer Navigationselemente respektieren möchten, aber den verfügbaren Platz gleichmäßig unter ihnen aufteilen möchten, könnten Sie `flex: auto` verwenden, was die Abkürzung für `flex: 1 1 auto` ist — alle Elemente wachsen und schrumpfen von einer Flex-Basis von `auto`. Das würde bedeuten, dass das längere Element mehr Platz hätte, weil es von einer größeren Größe aus startet, obwohl ihm genauso viel verfügbarer Platz zugewiesen wird wie den anderen.

Im Live-Beispiel unten versuchen Sie, `flex: auto` in `flex: 1` zu ändern. Diese Abkürzung für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite haben, da sie von einer `flex-basis` von `0` arbeiten und dadurch der gesamte Platz gleichmäßig verteilt wird.

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

Eine andere Möglichkeit, Elemente auf der Hauptachse auszurichten, ist die Verwendung von automatischen Rändern. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Ränder, die in [Verwendung automatischer Ränder für die Hauptachsen-Ausrichtung](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items#using_auto_margins_for_main_axis_alignment) beschrieben ist.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das Standardverhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/Reference/Properties/gap)-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element zu einem anderen verschieben, um zu ändern, wo die Trennung erfolgt.

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

Ein langjähriger Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign die vertikale Zentrierung ist. Die vertikale Zentrierung von Inhalten ist mit Flexbox-Ausrichtungs-Eigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

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

Mit [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/Guides/Box_alignment)-Eigenschaften können Sie ein Element vertikal in einem anderen ohne Flexbox zentrieren. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus dem Kasten zu entfernen und `align-content: center` hinzuzufügen. Fügen Sie dann `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout, das den Footer nach unten drückt

Egal, ob Sie Flexbox oder ein Raster verwenden, um eine Liste von Kartenkomponenten anzuordnen, diese Layoutmethoden funktionieren nur bei direkten Kindern der Flex- oder Rasterkomponente. Das bedeutet, dass wenn Sie variable Mengen an Inhalten haben, die Karte sich auf die Höhe des Rasterbereichs oder Flex-Containers streckt. Jeder Inhalt im Inneren verwendet das reguläre Block-Layout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer nach oben bis zum Ende des Inhalts steigt, anstatt am unteren Rand der Karte zu haften.

![Zwei Kartenkomponenten, die zeigen, dass das Innere der Komponente nicht mit der Hülle gedehnt wird.](flex-cards.png)

Flexbox löst dies. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Wir setzen dann den Inhaltsbereich auf `flex: 1`, was die Abkürzung für `flex: 1 1 0` ist — das Element kann von einer Flex-Basis von `0` wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Platz im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die Flex-Eigenschaft aus dem Live-Beispiel entfernen, sehen Sie, dass sich der Footer direkt unter dem Inhalt nach oben bewegt.

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

Das Medienobjekt — ein Bild oder ein anderes Medienelement mit einem daneben beschriebenen Text — ist ein häufiges Muster im Webdesign. Medienobjekte sollten umgedreht werden können — das Bild von einer Seite zur anderen verschieben.

Dieses Muster wird für Kommentare und andere Orte verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um den Teil des Medienobjekts, der das Bild enthält, seine Größeninformationen vom Bild nehmen zu lassen und den Inhalt des Medienobjekts flexibel den verbleibenden Platz einnehmen zu lassen.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und der `.content` wächst mit dem Wachstumsfaktor `1`. Diese Eigenschaften sind die gleichen wie die, die wir für unser Kartenlayoutmuster oben verwendet haben.

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

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren möchten, beziehen sich auf die verschiedenen Möglichkeiten, wie Sie das Medienobjekt in Ihrem Design beschränken könnten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie dem Bild eine {{cssxref("max-width")}} hinzufügen. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jede {{cssxref("width")}} oder `max-width`, die auf das Bild angewendet wird, wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten proportional wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie zwei gleich große Spalten erhalten. Sie könnten entweder die Inhalte als Leitfaden nehmen und beide auf `flex: auto` setzen, in welchem Fall sie aus der Größe des Inhalts oder jeder direkt auf die Flex-Elemente angewendeten Größe, wie einer `width` auf dem Bild, wachsen und schrumpfen würden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, indem Sie zum Beispiel die Seite mit dem Bild auf `flex: 1` setzen und die Seite mit dem Inhalt auf `flex: 3`. Dies würde bedeuten, dass sie eine `flex-basis` von `0` verwenden, aber diesen Platz in unterschiedlichen Raten gemäß dem von Ihnen zugewiesenen `flex-grow`-Faktor verteilen. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, sind im Detail im Leitfaden [Steuerung der Verhältnisse von flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Umkehrung des Medienobjekts

Um die Anzeige des Medienobjekts zu wechseln und das Bild auf der rechten Seite und den Inhalt auf der linken Seite zu haben, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

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

Flexbox ist besonders nützlich, wenn es darum geht, Formularelemente zu gestalten. Formulare haben mehrere kleine Elemente, die wir normalerweise miteinander ausrichten möchten. Ein häufiges Muster ist ein Paar aus {{htmlelement("label")}} und {{htmlelement("input")}}, kombiniert mit einem {{htmlelement("button")}}, vielleicht für ein Suchformular oder ein Anmeldeformular für einen Newsletter, bei dem Sie möchten, dass Ihr Besucher seine E-Mail-Adresse eingibt.

Flexbox macht dieses Layout leicht zu erreichen. Die `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben, dass das `<input>`-Feld wächst, während der Button und das Label nicht wachsen. Das Texteingabefeld wird je nach verfügbarem Platz wachsen und schrumpfen.

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

Muster wie dieses können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die leicht zusätzliche Elemente aufnehmen kann. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente mischen, die nicht wachsen, mit denen, die es tun.

## Fazit

Während Sie die obigen Muster erkunden, haben Sie hoffentlich begonnen zu sehen, wie Sie die beste Methode durchdenken können, um mit Flexbox den gewünschten Effekt zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht dehnen können, mit denen, die es können, verwenden Sie den Inhalt, um die Größe zu bestimmen, oder lassen Sie Flexbox den Platz proportional aufteilen. Es liegt an Ihnen.

Überlegen Sie, wie Sie den Inhalt, den Sie haben, am besten präsentieren können, und sehen Sie dann, wie Ihnen Flexbox oder andere Layout-Methoden dabei helfen können, dies zu erreichen.
