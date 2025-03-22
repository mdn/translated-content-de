---
title: Links stylen
slug: Learn_web_development/Core/Text_styling/Styling_links
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

Beim Stylen von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) ist es wichtig zu verstehen, warum Standardlinkstile wichtig sind, wie man Pseudoklassen effektiv zur Stilierung von Linkzuständen verwendet und wie man Links für den Einsatz in häufig variierenden Schnittstellenfunktionen wie Navigationsmenüs und Tabs stylt. In diesem Artikel schauen wir uns all diese Themen an.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, warum Standardlinkstile wichtig für die Benutzerfreundlichkeit im Web sind — sie sind vertraut und helfen Benutzern, Links zu erkennen.</li>
          <li>Stylen von Linkzuständen: <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Verstehen, warum Linkzustände für Barrierefreiheit und Benutzerfreundlichkeit notwendig sind.</li>
          <li>Einfügen von Icons in Links.</li>
          <li>Erstellen eines Navigationsmenüs mit Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Linkzustände

Das erste, was zu verstehen ist, ist das Konzept der Linkzustände — verschiedene Zustände, in denen Links existieren können. Diese können mit verschiedenen [Pseudoklassen](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) gestylt werden:

- **Link**: Ein Link, der ein Ziel hat (d.h. nicht nur ein benannter Anker), wird mit der {{cssxref(":link")}} Pseudoklasse gestylt.
- **Visited**: Ein Link, der bereits besucht wurde (im Verlauf des Browsers existiert), wird mit der {{cssxref(":visited")}} Pseudoklasse gestylt.
- **Hover**: Ein Link, über den der Mauszeiger eines Benutzers schwebt, wird mit der {{cssxref(":hover")}} Pseudoklasse gestylt.
- **Focus**: Ein Link, der fokussiert ist (z. B. durch einen Tastaturbenutzer mit der <kbd>Tab</kbd>-Taste oder ähnlichem, oder programmatisch mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) fokussiert) — dieser wird mit der {{cssxref(":focus")}} Pseudoklasse gestylt.
- **Active**: Ein Link, der aktiviert wird (z. B. angeklickt), wird mit der {{cssxref(":active")}} Pseudoklasse gestylt.

## Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält; obwohl das CSS den Text vergrößert und zentriert, um ihn hervorzuheben. Sie können das Aussehen und Verhalten der Standardstile im Beispiel mit dem Aussehen und Verhalten anderer Links auf dieser Seite vergleichen, die mehr CSS-Stile angewendet haben. Standard-Links haben die folgenden Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Wenn man über einen Link fährt, ändert sich der Mauszeiger zu einem kleinen Hand-Symbol.
- Fokussierte Links haben eine Umrandung — Sie sollten die Links auf dieser Seite mit der Tastatur fokussieren können, indem Sie die Tabulatortaste drücken.
- Aktive Links sind rot. Versuchen Sie, die Maustaste auf dem Link gedrückt zu halten, während Sie ihn anklicken.

```html
<p><a href="#">A simple link</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('Default_styles', '100%', 130) }}

> [!NOTE]
> Alle Linkbeispiele auf dieser Seite verlinken zum oberen Rand ihres Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht kaputt gehen.

Interessanterweise sind diese Standardstile fast dieselben wie in den frühen Tagen der Browser in den mittleren 1990ern. Dies liegt daran, dass Benutzer dies kennen und erwarten — wenn Links anders gestylt würden, würde das viele Menschen verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht stylen sollten. Es bedeutet nur, dass Sie nicht zu weit vom erwarteten Verhalten abweichen sollten. Sie sollten zumindest:

- Unterstreichungen für Links verwenden, aber nicht für andere Dinge. Wenn Sie keine Links unterstreichen möchten, sollten Sie sie zumindest auf eine andere Weise hervorheben.
- Sie sollten in irgendeiner Weise reagieren, wenn sie überfahren/fokussiert werden, und auf eine leicht unterschiedliche Weise, wenn sie aktiviert werden.

Die Standardstile können mit den folgenden CSS-Eigenschaften abgeschaltet/geändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten dies nur ausschalten, wenn Sie einen sehr guten Grund haben.
- {{cssxref("outline")}} für die Textumrandung. Eine Umrandung ist ähnlich wie ein Rahmen. Der einzige Unterschied ist, dass ein Rahmen Platz im Kästchen einnimmt und eine Umrandung nicht; sie sitzt nur über dem Hintergrund. Die Umrandung ist ein nützliches Hilfsmittel für Barrierefreiheit und sollte nicht entfernt werden, ohne eine andere Methode zur Anzeige des fokussierten Links zu verwenden.

> [!NOTE]
> Sie sind nicht nur auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu stylen — Sie können alle gewünschten Eigenschaften verwenden.

## Links stylen

Nachdem wir uns die Standardzustände im Detail angeschaut haben, schauen wir uns nun ein typisches Set von Linkstilen an.

Um zu beginnen, schreiben wir unsere leeren Regelsets aus:

```css
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}
```

Diese Reihenfolge ist wichtig, weil Linkstile aufeinander aufbauen. Zum Beispiel gelten die Stile in der ersten Regel für alle nachfolgenden. Wenn ein Link aktiviert wird, wird er normalerweise auch überfahren. Wenn Sie diese in der falschen Reihenfolge angeben und dieselben Eigenschaften in jedem Regelset ändern, funktioniert es nicht wie erwartet. Um sich die Reihenfolge zu merken, können Sie sich ein Merkvers wie etwa **L**o**V**e **F**ears **HA**te merken.

Nun fügen wir einige Informationen hinzu, damit dies ordnungsgemäß gestylt wird:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline-color: transparent;
}

a:link {
  color: #6900ff;
}

a:visited {
  color: #a5c300;
}

a:focus {
  text-decoration: none;
  background: #bae498;
}

a:hover {
  text-decoration: none;
  background: #cdfeaa;
}

a:active {
  background: #6900ff;
  color: #cdfeaa;
}
```

Wir bieten auch ein Beispiel-HTML an, um das CSS anzuwenden:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Zusammen ergibt dies folgendes Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier gemacht? Dies sieht sicherlich anders aus als die Standardstilierung, bietet jedoch immer noch eine vertraute Erfahrung für Benutzer, damit sie wissen, was vor sich geht:

- Die ersten beiden Regeln sind für diese Diskussion nicht so interessant.
- Die dritte Regel verwendet den `a`-Selektor, um die Fokusumrandung loszuwerden (die sich in verschiedenen Browsern sowieso unterscheidet).
- Als nächstes verwenden wir die `a:link`- und `a:visited`-Selektoren, um einige Farbvariationen auf nicht besuchte und besuchte Links anzuwenden, damit sie unterscheidbar sind.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, um fokussierte und überfahrene Links so einzustellen, dass sie keine Unterstreichung haben und andere Hintergrundfarben aufweisen.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert werden, um klarzumachen, dass etwas Wichtiges passiert!

## Aktives Lernen: Stylen Sie Ihre eigenen Links

In dieser aktiven Lerneinheit möchten wir, dass Sie unser leeres Set von Regeln nehmen und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Nutzen Sie Ihre Fantasie, seien Sie kreativ. Wir sind sicher, dass Sie etwas Cooleres und genauso Funktionales wie unser obiges Beispiel entwickeln können.

Wenn Ihnen ein Fehler unterläuft, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die _Lösung anzeigen_-Taste, um das oben gezeigte Beispiel einzufügen.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p>There are several browsers available, such as <a href="#">Mozilla
 Firefox</a>, <a href="#">Google Chrome</a>, and
<a href="#">Microsoft Edge</a>.</p>
  </textarea>

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
a {

}

a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}
  </textarea>

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Show solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
const htmlInput = document.querySelector(".html-input");
const cssInput = document.querySelector(".css-input");
const reset = document.getElementById("reset");
const htmlCode = htmlInput.value;
const cssCode = cssInput.value;
const output = document.querySelector(".output");
const solution = document.getElementById("solution");

const styleElem = document.createElement("style");
const headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = `p {
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 1.4;
}

a {
  outline-color: transparent;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}`;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Active_learning_Style_your_own_links', 700, 800) }}

## Icons in Links einfügen

Eine häufige Praxis ist es, Icons in Links einzufügen, um mehr einen Hinweis darauf zu geben, auf welche Art von Inhalt der Link verweist. Schauen wir uns ein wirklich einfaches Beispiel an, das ein Icon zu externen Links hinzufügt (Links, die auf andere Seiten führen). Solch ein Icon sieht normalerweise wie ein kleiner Pfeil aus, der aus einer Box herauszeigt. Für dieses Beispiel verwenden wir das [External Link Icon von icons8.com](https://icons8.com/icon/741/external-link).

Schauen wir uns etwas HTML und CSS an, die uns den gewünschten Effekt geben. Zuerst etwas einfaches HTML zum Stylen:

```html-nolint
<p>
  For more information on the weather, visit our <a href="#">weather page</a>,
  look at <a href="https://en.wikipedia.org/">weather on Wikipedia</a>, or check
  out
  <a href="https://www.nationalgeographic.org/topics/resource-library-weather/">
    weather on National Geographic</a>.
</p>
```

Als nächstes das CSS:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

a[href^="http"]::after {
  content: "";
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  margin-left: 0.25em;

  background-size: 100%;
  background-image: url("external-link-52.png");
}
```

{{ EmbedLiveSample('Including_icons_on_links', '100%', 150) }}

Was passiert hier? Wir gehen über das meiste CSS hinweg, da es dieselben Informationen sind, die Sie bereits gesehen haben. Die letzte Regel ist jedoch interessant: Wir verwenden {{cssxref("::after")}} Pseudo-Element. Das `0.8rem x 0.8rem`-Pseudo-Element wird nach dem Ankertext als Inline-Block eingefügt. Und das Icon wird als {{cssxref("background")}} des Pseudo-Elements dargestellt.

Wir haben eine [relative Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) `em` verwendet. Sie passt die Größe des Icons proportional zur Textgröße des Ankers an. Wenn sich die Textgröße des Ankers ändert, passt sich auch die Größe des Icons entsprechend an.

Ein abschließendes Wort: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) richtig schreiben, sollten Sie nur absolute URLs für externe Links verwenden — es ist effizienter, relative Links zu verwenden, um auf andere Teile Ihrer eigenen Seite zu verlinken (wie beim ersten Link). Der Text "http" sollte also nur bei externen Links erscheinen (wie den zweiten und dritten), und wir können dies mit einem [Attributselektor](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) auswählen: `a[href^="http"]` wählt {{htmlelement("a")}}-Elemente aus, aber nur, wenn sie ein [`href`](/de/docs/Web/HTML/Element/a#href) Attribut mit einem Wert haben, der mit "http" beginnt.

Das war's. Versuchen Sie, den aktiven Lernebereich oben erneut zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Keine Sorge, wenn Sie noch nicht mit [Hintergründen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) und [responsivem Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) vertraut sind; diese werden an anderen Orten erklärt.

## Links als Buttons stylen

Die Tools, die Sie bisher in diesem Artikel erkundet haben, können auch auf andere Weise verwendet werden. Zum Beispiel können Zustände wie Hover verwendet werden, um viele verschiedene Elemente zu stylen, nicht nur Links — Sie möchten möglicherweise den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen stylen.

Darüber hinaus werden Links ziemlich häufig so gestylt, dass sie in bestimmten Umständen wie Buttons aussehen und sich verhalten. Ein Website-Navigationsmenü kann als eine Menge von Links gekennzeichnet sein, und dies kann so gestylt werden, dass es wie eine Menge von Steuerelementbuttons oder Tabs aussieht, die dem Benutzer Zugang zu anderen Teilen der Seite geben. Lassen Sie uns erkunden, wie das geht.

Zuerst etwas HTML:

```html
<nav class="container">
  <a href="#">Home</a>
  <a href="#">Pizza</a>
  <a href="#">Music</a>
  <a href="#">Wombats</a>
  <a href="#">Finland</a>
</nav>
```

Und nun unser CSS:

```css
body,
html {
  margin: 0;
  font-family: sans-serif;
}

.container {
  display: flex;
  gap: 0.625%;
}

a {
  flex: 1;
  text-decoration: none;
  outline-color: transparent;
  text-align: center;
  line-height: 3;
  color: black;
}

a:link,
a:visited,
a:focus {
  background: palegoldenrod;
  color: black;
}

a:hover {
  background: orange;
}

a:active {
  background: darkred;
  color: white;
}
```

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}}-Element mit einer `"container"`-Klasse. Das `<nav>` enthält unsere Links.

Das CSS umfasst die Stilisierung des Containers und der enthaltenen Links.

- Die zweite Regel besagt:
  - Der Container ist ein [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Die darin enthaltenen Elemente — in diesem Fall die Links — werden _Flex-Elemente_ sein.
  - Der Abstand zwischen den Flex-Elementen beträgt `0.625%` der Breite des Containers.
- Die dritte Regel stilisiert die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz im Container nutzen.
  - Als nächstes schalten wir die Standard-{{cssxref("text-decoration")}} und {{cssxref("outline")}} aus — wir wollen nicht, dass diese unser Aussehen verderben.
  - Die letzten drei Deklarationen zentrieren den Text in jedem Link, setzen die {{cssxref("line-height")}} auf 3, um den Buttons etwas Höhe zu geben (was zudem den Vorteil hat, den Text vertikal zu zentrieren), und setzen die Textfarbe auf schwarz.

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen alles vermittelt hat, was Sie über Links wissen müssen — zumindest für den Moment! Der letzte Artikel in unserem Styling-Textmodul beschreibt, wie Sie benutzerdefinierte Schriften auf Ihren Webseiten verwenden (oder Webfonts, wie sie besser bekannt sind).

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
