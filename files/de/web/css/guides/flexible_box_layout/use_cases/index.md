---
title: Typische Anwendungsfälle für Flexbox
short-title: Typische Anwendungsfälle
slug: Web/CSS/Guides/Flexible_box_layout/Use_cases
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

In diesem Leitfaden sehen wir uns einige häufige Anwendungsfälle für Flexbox an – Situationen, in denen Flexbox besser geeignet ist als eine andere Layoutmethode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layoutlösung, wenn Sie eine Gruppe von Elementen in einer Dimension anordnen oder den Abstand zwischen Elementen steuern möchten. In diesem Leitfaden betrachten wir einige typische Anwendungsfälle für Flexbox.

## Navigation

Ein häufiges Muster für die Navigation ist eine Liste von Elementen, die als horizontale Leiste dargestellt wird. Dies ist wahrscheinlich das häufigste Flexbox-Beispiel und kann als idealer Anwendungsfall für Flexbox gelten.

Wenn wir eine Gruppe von Elementen horizontal darstellen möchten, bleibt möglicherweise zusätzlicher Platz übrig. Wir müssen entscheiden, wie wir diesen Platz nutzen. Dafür gibt es mehrere Möglichkeiten: Entweder verteilen wir ihn außerhalb der Elemente und schaffen so Abstand zwischen oder um die Elemente, oder wir verteilen ihn innerhalb der Elemente. Im zweiten Fall benötigen wir eine Möglichkeit, die Elemente wachsen zu lassen, damit sie den Platz ausfüllen.

### Platz außerhalb der Elemente verteilen

Um den Platz zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungseigenschaften von Flexbox und die Eigenschaft {{cssxref("justify-content")}}. Mehr über diese Eigenschaft erfahren Sie unter [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items). Dort geht es um die Ausrichtung von Elementen entlang der Hauptachse.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um den Abstand zwischen ihnen gleichmäßig zu verteilen. Mit den Werten `space-around` oder `space-evenly` können Sie die Verteilung des Platzes ändern. Sie können auch `start` verwenden, um den Platz hinter den Elementen zu platzieren, `end`, um ihn vor ihnen zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

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

Ein anderes Navigationsmuster besteht darin, den verfügbaren Platz innerhalb der Elemente selbst zu verteilen, statt Abstände zwischen ihnen zu schaffen. Mit den {{cssxref("flex")}}-Eigenschaften können Elemente proportional zueinander wachsen und schrumpfen, wie unter [Größenverhältnisse von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) beschrieben.

Wenn Sie die Größe Ihrer Navigationselemente berücksichtigen, den verfügbaren Platz aber gleichmäßig unter ihnen aufteilen möchten, können Sie `flex: auto` verwenden. Das ist die Kurzschreibweise für `flex: 1 1 auto`: Alle Elemente wachsen und schrumpfen ausgehend von einer Flex-Basis von `auto`. Ein längeres Element erhält dadurch mehr Platz, weil es von einer größeren Ausgangsgröße ausgeht – obwohl ihm genauso viel verfügbarer Platz zugewiesen wird wie den anderen Elementen.

Versuchen Sie im folgenden interaktiven Beispiel, `flex: auto` durch `flex: 1` zu ersetzen. Diese Kurzschreibweise für `flex: 1 1 0` bewirkt, dass alle Elemente gleich breit werden: Sie gehen von einer `flex-basis` von `0` aus, sodass der gesamte Platz gleichmäßig verteilt werden kann.

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

Eine weitere Möglichkeit, Elemente entlang der Hauptachse auszurichten, sind automatische Außenabstände. Damit lässt sich eine Navigationsleiste gestalten, bei der eine Gruppe von Elementen links und eine andere rechts ausgerichtet ist. Hier verwenden wir die Technik mit automatischen Außenabständen, die unter [Automatische Außenabstände zur Ausrichtung entlang der Hauptachse verwenden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind entlang der Hauptachse mit `normal` ausgerichtet. Dieser Wert verhält sich wie `start`, da dies das Standardverhalten von Flexbox ist. Die Eigenschaft {{cssxref("gap")}} erzeugt Abstände zwischen den Elementen. Das letzte Element richten wir rechts aus, indem wir ihm für `margin-left` den Wert `auto` zuweisen. Sie können die Klasse von einem Element auf ein anderes verschieben, um die Stelle der Trennung zu ändern.

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

Ein altbekannter Scherz unter Entwicklern lautet, dass die vertikale Zentrierung das schwierigste Problem im Webdesign sei. Mit den Ausrichtungseigenschaften von Flexbox lässt sich Inhalt jedoch sehr einfach vertikal zentrieren, wie das folgende interaktive Beispiel zeigt.

Klicken Sie auf **„Play“** und ändern Sie probeweise die Ausrichtung: Richten Sie das Element beispielsweise mit `start` am Anfang oder mit `end` am Ende aus.

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

Mit den Eigenschaften der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) können Sie ein Element auch ohne Flexbox innerhalb eines anderen vertikal zentrieren. Versuchen Sie im obigen Beispiel, die Flex-Eigenschaften von der Box zu entfernen und `align-content: center` hinzuzufügen. Fügen Sie dann dem Element, das Sie horizontal zentrieren möchten, `margin: auto` hinzu.

## Kartenlayout mit Fußbereich am unteren Rand

Unabhängig davon, ob Sie eine Liste von Kartenkomponenten mit Flexbox oder Grid anordnen, wirken sich diese Layoutmethoden nur auf direkte Kindelemente der Flex- oder Grid-Komponente aus. Das bedeutet: Bei unterschiedlich umfangreichen Inhalten dehnt sich die Karte auf die Höhe des Grid-Bereichs oder Flex-Containers aus. Der Inhalt innerhalb der Karte verwendet das reguläre Blocklayout. Bei einer Karte mit weniger Inhalt rückt der Fußbereich daher direkt unter den Inhalt, statt am unteren Rand der Karte zu bleiben.

![Zwei Kartenkomponenten, die zeigen, dass sich die inneren Elemente der Komponente nicht zusammen mit dem umgebenden Element ausdehnen.](flex-cards.png)

Flexbox löst dieses Problem. Wir machen die Karte zu einem Flex-Container und setzen {{cssxref("flex-direction", "flex-direction: column")}}. Anschließend setzen wir für den Inhaltsbereich `flex: 1`. Das ist die Kurzschreibweise für `flex: 1 1 0`: Das Element kann ausgehend von einer Flex-Basis von `0` wachsen und schrumpfen. Da es das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Platz im Flex-Container ein und drückt den Fußbereich an den unteren Rand. Wenn Sie die `flex`-Eigenschaft aus dem interaktiven Beispiel entfernen, sehen Sie, wie der Fußbereich nach oben rückt und direkt unter dem Inhalt steht.

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

Ein Medienobjekt – ein Bild oder ein anderes Medienelement neben einem beschreibenden Text – ist ein häufiges Muster im Webdesign. Die Anordnung sollte sich umkehren lassen, sodass das Bild von einer Seite auf die andere wechselt.

Dieses Muster wird für Kommentare und überall dort verwendet, wo Bilder neben ihren Beschreibungen stehen. Mit Flexbox können wir erreichen, dass der Teil des Medienobjekts mit dem Bild seine Größe vom Bild ableitet, während sich der Inhaltsbereich flexibel ausdehnt und den verbleibenden Platz einnimmt.

In diesem Beispiel ist das Medienobjekt an `flex-start` ausgerichtet, und `.content` ist so eingestellt, dass es mit einem Wachstumsfaktor von `1` wächst. Dies sind dieselben Eigenschaften, die wir oben für das Kartenmuster mit Spaltenlayout verwendet haben.

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

Im folgenden interaktiven Beispiel können Sie verschiedene Möglichkeiten ausprobieren, die Größe des Medienobjekts in Ihrem Design zu begrenzen.

Damit das Bild nicht zu groß wird, sollten Sie ihm eine {{cssxref("max-width")}} zuweisen. Da diese Seite des Medienobjekts die Flexbox-Standardwerte verwendet, kann sie schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jeder Wert für {{cssxref("width")}} oder `max-width`, den Sie dem Bild zuweisen, wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie können auch zulassen, dass beide Seiten proportional wachsen und schrumpfen. Wenn Sie für beide Seiten `flex: 1` festlegen, wachsen und schrumpfen sie ausgehend von einer {{cssxref("flex-basis")}} von `0`. Dadurch entstehen zwei gleich breite Spalten. Alternativ können Sie den Inhalt als Ausgangspunkt nehmen und für beide Seiten `flex: auto` festlegen. In diesem Fall wachsen und schrumpfen sie ausgehend von der Größe ihres Inhalts oder einer Größe, die Sie den Flex-Elementen direkt zuweisen, beispielsweise durch `width` für das Bild.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie können den beiden Seiten auch unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, etwa `flex: 1` für die Seite mit dem Bild und `flex: 3` für die Inhaltsseite. Beide verwenden dann eine `flex-basis` von `0`, verteilen den Platz aber entsprechend den zugewiesenen `flex-grow`-Faktoren in unterschiedlichem Verhältnis. Die dafür verwendeten Flex-Eigenschaften werden im Leitfaden [Größenverhältnisse von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) ausführlich beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Medienobjekt umkehren

Um die Darstellung des Medienobjekts umzukehren, sodass das Bild rechts und der Inhalt links steht, setzen wir die Eigenschaft `flex-direction` auf `row-reverse`.

In diesem Beispiel haben wir neben der Klasse `media` eine Klasse `flipped` hinzugefügt. Entfernen Sie die Klasse aus dem HTML, um zu sehen, wie sich die Darstellung ändert.

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

## Formularsteuerelemente

Flexbox ist besonders nützlich, wenn es um die Gestaltung von Formularsteuerelementen geht. Formulare enthalten mehrere kleine Elemente, die wir meist aneinander ausrichten möchten. Ein häufiges Muster ist ein Paar aus {{htmlelement("label")}} und {{htmlelement("input")}}, kombiniert mit einem {{htmlelement("button")}} – beispielsweise für ein Suchformular oder ein Anmeldeformular für einen Newsletter, in das Besucher ihre E-Mail-Adresse eingeben.

Mit Flexbox lässt sich ein solches Layout mit nur wenigen Deklarationen umsetzen. `<label>`, `<input>` und `<button>` befinden sich in einem umgebenden Element, für das `display: flex` festgelegt ist. Die Flex-Eigenschaften ermöglichen es dem `<input>`-Feld zu wachsen, während Button und Label nicht wachsen. Das Texteingabefeld wächst oder schrumpft je nach verfügbarem Platz.

```html live-sample___label-input-button
<div class="wrapper">
  <label for="text">Label</label>
  <input id="text" type="text" />
  <button type="button">Send</button>
</div>
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
.wrapper button {
  background-color: rgb(96 139 168);
  color: white;
}
.wrapper label {
  background-color: #666666;
}
```

{{EmbedLiveSample("label-input-button")}}

Muster wie dieses können es erleichtern, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, in die sich zusätzliche Elemente problemlos einfügen lassen. Dabei nutzen Sie die Flexibilität von Flexbox, indem Sie Elemente, die nicht wachsen, mit solchen kombinieren, die wachsen können.

## Fazit

Die obigen Muster zeigen, wie Sie Flexbox gezielt einsetzen können, um das gewünschte Ergebnis zu erzielen. Häufig gibt es mehr als eine Möglichkeit. Kombinieren Sie Elemente, die sich nicht ausdehnen können, mit solchen, die es können. Nutzen Sie den Inhalt als Grundlage für die Größe oder lassen Sie Flexbox den Platz proportional verteilen. Die Entscheidung liegt bei Ihnen.

Überlegen Sie, wie Sie Ihre Inhalte am besten präsentieren, und prüfen Sie dann, wie Flexbox oder andere Layoutmethoden Ihnen dabei helfen können.
