---
title: Typische Anwendungsfälle von Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Leitfaden werfen wir einen Blick auf einige der üblichen Anwendungsfälle für Flexbox – jene Bereiche, in denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist in der Regel die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen steuern möchten. In diesem Leitfaden werden wir einige der typischen Anwendungsfälle von Flexbox betrachten.

## Navigation

Ein häufiges Muster für die Navigation ist eine Liste von Elementen, die als horizontale Leiste angezeigt wird. Es ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Anwendungsfall für Flexbox betrachtet werden.

Wenn wir eine Sammlung von Elementen haben, die wir horizontal anzeigen möchten, haben wir möglicherweise zusätzlichen Platz. Wir müssen entscheiden, was mit diesem Platz geschehen soll, und haben ein paar Optionen. Entweder zeigen wir den Platz außerhalb der Elemente an – sie werden also mit Leerraum zwischen oder um sie herum aufgeteilt – oder wir absorbieren den zusätzlichen Raum innerhalb der Elemente und benötigen daher eine Methode, die es den Elementen ermöglicht, zu wachsen und diesen Raum einzunehmen.

### Platzverteilung außerhalb der Elemente

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungs-Eigenschaften in Flexbox sowie die {{cssxref("justify-content")}}-Eigenschaft. Weitere Informationen zu dieser Eigenschaft finden Sie unter [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container), die sich mit der Ausrichtung von Elementen auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Raum verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Raum an das Ende der Elemente zu setzen, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

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

### Platzverteilung innerhalb der Elemente

Ein anderes Navigationsmuster wäre es, den verfügbaren Raum innerhalb der Elemente selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften ermöglichen es Elementen, proportional zueinander zu wachsen und zu schrumpfen, wie im [Steuern von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größen-Eigenschaft Ihrer Navigationselemente respektieren, aber den verfügbaren Raum gleichmäßig unter ihnen aufteilen möchten, könnten Sie `flex: auto` verwenden, was die Kurzform für `flex: 1 1 auto` ist – alle Elemente wachsen und schrumpfen von einer Flex-Basis von `auto`. Das würde bedeuten, dass das längere Element mehr Raum hätte, weil es von einer größeren Größe aus startete, obwohl ihm derselbe verfügbare Raum wie den anderen zugewiesen wird.

Im unten stehenden Live-Beispiel können Sie `flex: auto` in `flex: 1` ändern. Diese Kurzform von `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite haben, da sie von einer Flex-Basis von `0` arbeiten und der gesamte Raum gleichmäßig verteilt wird.

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

## Geteilte Navigation

Eine andere Möglichkeit, Elemente auf der Hauptachse auszurichten, ist die Verwendung von automatischen Margen. Dies ermöglicht das Design-Muster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Margen, die in [Verwendung von automatischen Margen zur Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das anfängliche Verhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/gap)-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element mit einem `margin-left`-Wert von `auto` rechts aus. Sie können die Klasse von einem Element zum anderen verschieben, um zu ändern, wo die Teilung erfolgt.

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

## Zentrieren eines Elements

Ein langjähriger Scherz unter Entwicklern ist, dass das schwierigste Problem im Webdesign die vertikale Zentrierung ist. Das vertikale Zentrieren von Inhalten ist mit Flexbox-Ausrichtungseigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

Klicken Sie auf **"Abspielen"** und versuchen Sie die Ausrichtung zu ändern, zum Beispiel das Element mit `start` oder `end` auszurichten:

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

Mit den [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften können Sie ein Element auch ohne Flexbox vertikal innerhalb eines anderen zentrieren. Entfernen Sie im obigen Beispiel die Flex-Eigenschaften aus dem Container und fügen Sie `align-content: center` hinzu. Fügen Sie dann `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Karten-Layout mit nach unten geschobenem Footer

Ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten zu layouten, diese Layoutmethoden funktionieren nur bei direkten Kindern des Flex- oder Grid-Containers. Das bedeutet, dass bei variabler Inhaltsmenge die Karte sich an die Höhe des Grid-Bereichs oder Flex-Containers anpasst. Jeder Inhalt innerhalb verwendet das reguläre Block-Layout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer nach oben rückt, bis er direkt unter dem Inhalt ist, anstatt am unteren Rand der Karte zu bleiben.

![Zwei Kartenkomponenten zeigen, dass die Inhalte der Komponente sich nicht mit dem Wrapper strecken.](flex-cards.png)

Flexbox löst dies. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Dann setzen wir den Inhaltsbereich auf `flex: 1`, was die Kurzform für `flex: 1 1 0` ist – das Element kann von einer Flexbasis von `0` wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Raum im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, sehen Sie, wie der Footer direkt unter den Inhalt rückt.

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

Das Medienobjekt – ein Bild oder ein anderes Medienelement mit einem parallel angeordneten beschreibenden Text – ist ein häufiges Muster im Webdesign. Medienobjekte sollten umgedreht werden können – das Bild verschiebt sich von einer Seite zur anderen.

Dieses Muster wird für Kommentare und andere Stellen verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um den Teil des Medienobjekts, der das Bild enthält, seine Größenzuwachs-Informationen vom Bild nehmen zu lassen, während der Inhalt des Medienobjekts flexibel verbleibt, um den verbleibenden Raum einzunehmen.

In diesem Beispiel ist das Medienobjekt an `flex-start` ausgerichtet, und `.content` ist auf Wachstum eingestellt, wobei der Wachstumsfaktor auf `1` gesetzt ist. Diese Eigenschaften sind die gleichen wie bei unserem Spaltenlayout-Muster oben.

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

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren könnten, betreffen die verschiedenen Arten, wie Sie das Medienobjekt in Ihr Design einpassen können.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie dem Bild eine {{cssxref("max-width")}} hinzufügen. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen und verwendet eine `flex-basis` von auto. Jede angewendete {{cssxref("width")}} oder `max-width` auf das Bild wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch zulassen, dass beide Seiten proportional wachsen und schrumpfen. Wenn Sie beide Seiten auf `flex: 1` setzen, werden sie von einer {{cssxref("flex-basis")}} von `0` aus wachsen und schrumpfen, sodass Sie zwei gleich große Spalten erhalten. Sie könnten auch den Inhalt als Maßstab nehmen und beide auf `flex: auto` setzen, in welchem Fall sie vom Inhalt aus oder von einer direkt auf die Flex-Elemente angewendeten Größe wie einer `width` auf dem Bild aus wachsen und schrumpfen.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch beiden Seiten unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, zum Beispiel die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Das bedeutet, dass sie eine `flex-basis` von `0` verwenden, den Raum jedoch in unterschiedlichen Raten gemäß dem von Ihnen zugewiesenen `flex-grow`-Faktor verteilen. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, sind im Leitfaden [Steuern von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) im Detail beschrieben.

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

Um die Anzeige des Medienobjekts zu ändern und das Bild auf die rechte Seite und den Inhalt auf die linke Seite zu setzen, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

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

Flexbox ist besonders nützlich, wenn es um das Styling von Formularsteuerelementen geht. Formulare haben mehrere kleine Elemente, die wir typischerweise miteinander ausrichten möchten. Ein häufiges Muster ist ein {{htmlelement("label")}}- und {{htmlelement("input")}}-Paar kombiniert mit einem {{htmlelement("button")}}, möglicherweise für ein Suchformular oder ein Anmeldeformular für einen Newsletter, in dem Sie Ihren Besucher auffordern, seine E-Mail-Adresse einzugeben.

Flexbox macht es einfach, dieses Layout zu erreichen. Das `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften ermöglichen es dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Text-Eingabefeld wächst und schrumpft abhängig vom verfügbaren Platz.

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

Muster wie dieses können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die problemlos zusätzliche Elemente aufnehmen kann. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente mischen, die nicht wachsen, mit denen, die es tun.

## Schlussfolgerung

Während der Erkundung der obigen Muster haben Sie hoffentlich begonnen zu sehen, wie Sie den besten Weg durchdenken können, Flexbox zu verwenden, um das gewünschte Ergebnis zu erzielen. Oftmals haben Sie mehr als eine Wahlmöglichkeit. Mischen Sie Elemente, die sich nicht stretchen können, mit solchen, die es können, verwenden Sie den Inhalt, um die Größe zu bestimmen, oder lassen Sie Flexbox den Raum proportional aufteilen. Es liegt an Ihnen.

Denken Sie darüber nach, wie Sie den Inhalt, den Sie haben, am besten präsentieren und sehen Sie dann, wie Flexbox oder andere Layout-Methoden Ihnen helfen können, dies zu erreichen.
