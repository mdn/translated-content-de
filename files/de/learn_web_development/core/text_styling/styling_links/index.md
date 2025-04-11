---
title: Styling Links
slug: Learn_web_development/Core/Text_styling/Styling_links
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

Beim Stylen von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) ist es wichtig zu verstehen, warum Standardlink-Stile wichtig sind, wie man Pseudo-Klassen effektiv nutzt, um Link-Zustände zu stylen, und wie man Links für den Einsatz in häufigen, unterschiedlichen Benutzeroberflächenfunktionen wie Navigationsmenüs und Tabs stylt. Wir werden all diese Themen in diesem Artikel beleuchten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, warum Standardlink-Stile für die Benutzerfreundlichkeit im Web wichtig sind — sie sind vertraut und helfen den Benutzern, Links zu erkennen.</li>
          <li>Stylen von Link-Zuständen: <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Verstehen, warum Link-Zustände für Barrierefreiheit und Benutzerfreundlichkeit notwendig sind.</li>
          <li>Einbinden von Icons auf Links.</li>
          <li>Erstellen eines Navigationsmenüs mit Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Link-Zustände

Das Erste, das man verstehen muss, ist das Konzept der Link-Zustände — verschiedene Zustände, in denen Links existieren können. Diese können mit verschiedenen [Pseudo-Klassen](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) gestylt werden:

- **Link**: Ein Link, der ein Ziel hat (d.h. nicht nur ein benannter Anker), gestylt mit der {{cssxref(":link")}} Pseudo-Klasse.
- **Visited**: Ein Link, der bereits besucht wurde (im Verlauf des Browsers existiert), gestylt mit der {{cssxref(":visited")}} Pseudo-Klasse.
- **Hover**: Ein Link, der von einem Benutzer mit dem Mauszeiger überfahren wird, gestylt mit der {{cssxref(":hover")}} Pseudo-Klasse.
- **Focus**: Ein Link, der fokussiert ist (z.B. durch einen Tastaturbenutzer mit der <kbd>Tab</kbd>-Taste oder ähnlichem bewegt, oder programmgesteuert mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) fokussiert) — dieser wird mit der {{cssxref(":focus")}} Pseudo-Klasse gestylt.
- **Active**: Ein Link, der aktiviert ist (z.B. angeklickt wird), gestylt mit der {{cssxref(":active")}} Pseudo-Klasse.

## Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussehen und sich verhalten wird; obwohl das CSS den Text vergrößert und zentriert, um ihn stärker hervorzuheben. Sie können das Aussehen und Verhalten der Standardstile im Beispiel mit dem Aussehen und Verhalten anderer Links auf dieser Seite vergleichen, die mehr CSS-Stile haben. Standardlinks haben folgende Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Wenn ein Link überfahren wird, ändert sich der Mauszeiger zu einem kleinen Hand-Symbol.
- Fokussierte Links haben eine Umrandung — Sie sollten in der Lage sein, die Links auf dieser Seite mit der Tastatur durch Drücken der Tab-Taste zu fokussieren.

- Aktive Links sind rot. Versuchen Sie, die Maustaste auf dem Link gedrückt zu halten, während Sie darauf klicken.

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
> Alle Link-Beispiele auf dieser Seite verlinken an den Anfang ihres Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht kaputt gehen.

Interessanterweise sind diese Standardstile fast identisch mit denen aus den frühen Tagen der Browser in den Mitte der 1990er Jahre. Dies liegt daran, dass Benutzer dieses Verhalten kennen und erwarten — wenn Links anders gestylt wären, würde dies viele Menschen verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht stylen sollten. Es bedeutet nur, dass Sie nicht zu weit vom erwarteten Verhalten abweichen sollten. Sie sollten zumindest:

- Verwenden Sie Unterstreichungen für Links, aber nicht für andere Dinge. Wenn Sie keine Unterstreichungen für Links möchten, heben Sie sie zumindest anderweitig hervor.
- Machen Sie sie irgendwie reaktiv, wenn sie überfahren/fokussiert werden, und auf eine etwas andere Weise, wenn sie aktiviert werden.

Die Standardstile können mit den folgenden CSS-Eigenschaften abgeschaltet/geändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Mauszeigerstil — Sie sollten dies nicht ausschalten, es sei denn, Sie haben einen sehr guten Grund.
- {{cssxref("outline")}} für die Textumrandung. Eine Umrandung ist ähnlich wie ein Rand. Der einzige Unterschied ist, dass ein Rand Platz im Kasten einnimmt und eine Umrandung nicht; sie sitzt einfach über dem Hintergrund. Die Umrandung ist eine nützliche Hilfe für die Barrierefreiheit und sollte nicht entfernt werden, ohne eine andere Methode hinzuzufügen, um den fokussierten Link anzuzeigen.

> [!NOTE]
> Sie sind nicht nur auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu stylen — Sie können frei alle Eigenschaften verwenden, die Ihnen gefallen.

## Styling von Links

Nachdem wir uns die Standardzustände im Detail angesehen haben, schauen wir uns nun ein typisches Set an Link-Stilen an.

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

Diese Reihenfolge ist wichtig, da sich Link-Stile gegenseitig aufbauen. Zum Beispiel werden die Stile in der ersten Regel auf alle folgenden angewendet. Wenn ein Link aktiviert wird, ist er normalerweise auch überfahren. Wenn Sie diese in der falschen Reihenfolge setzen und die gleichen Eigenschaften in jedem Regelset ändern, wird es nicht so funktionieren, wie Sie es erwarten. Um sich die Reihenfolge zu merken, könnte man ein Merkspruch wie **L**o**V**e **F**ears **HA**te verwenden.

Nun fügen wir einige weitere Informationen hinzu, um dies richtig zu stylen:

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

Wir liefern auch etwas Beispiel-HTML, um das CSS anzuwenden:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Wenn wir beides zusammenfügen, erhalten wir dieses Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier gemacht? Dies sieht sicherlich anders aus als das Standardstyling, aber es bietet immer noch eine vertraute Erfahrung für Benutzer, um zu wissen, was vor sich geht:

- Die ersten beiden Regeln sind für diese Diskussion nicht so interessant.
- Die dritte Regel verwendet den `a`-Selektor, um die Fokusumrandung zu entfernen (die ohnehin in verschiedenen Browsern variiert).
- Als Nächstes verwenden wir die `a:link`- und `a:visited`-Selektoren, um einige Farbvariationen bei nicht besuchten und besuchten Links festzulegen, damit sie sich unterscheiden.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, um fokussierte und überfahrene Links so zu gestalten, dass sie keine Unterstreichung und unterschiedliche Hintergrundfarben haben.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert werden, um klarzumachen, dass etwas Wichtiges passiert!

## Aktives Lernen: Stylen Sie Ihre eigenen Links

In dieser aktiven Lerneinheit möchten wir, dass Sie unser leeres Set von Regeln nehmen und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Verwenden Sie Ihre Fantasie, lassen Sie Ihren Ideen freien Lauf. Wir sind sicher, dass Sie etwas Cooleres und genauso Funktionales wie unser obiges Beispiel entwickeln können.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um das Beispiel einzufügen, das wir oben gezeigt haben.

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

## Einbinden von Icons auf Links

Eine gängige Praxis ist es, Icons auf Links einzubinden, um einen besseren Hinweis darauf zu geben, auf welche Art von Inhalt der Link verweist. Schauen wir uns ein wirklich einfaches Beispiel an, das ein Icon zu externen Links hinzufügt (Links, die zu anderen Seiten führen). Ein solches Icon sieht normalerweise wie ein kleiner Pfeil aus, der aus einer Box herauszeigt. Für dieses Beispiel verwenden wir [externes Link-Icon von icons8.com](https://icons8.com/icon/741/external-link).

Lassen Sie uns einige HTML- und CSS-Beispiele betrachten, die uns den gewünschten Effekt geben. Zuerst etwas einfaches HTML zum Stylen:

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

Was passiert hier? Wir werden den größten Teil des CSS überspringen, da es sich nur um die gleichen Informationen handelt, die Sie bereits zuvor gesehen haben. Die letzte Regel ist jedoch interessant: Wir verwenden das {{cssxref("::after")}} Pseudoelement. Das `0.8rem x 0.8rem` Pseudoelement wird nach dem Ankertext als Inline-Block platziert. Und das Icon wird als {{cssxref("background")}} des Pseudoelements dargestellt.

Wir haben eine [relative Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) `em` verwendet. Sie dimensioniert das Icon proportional zur Textgröße des Ankers. Wenn sich die Textgröße des Ankers ändert, passt sich auch die Icon-Größe entsprechend an.

Ein letztes Wort: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) korrekt schreiben, sollten Sie nur absolute URLs für externe Links verwenden — es ist effizienter, relative Links zu verwenden, um auf andere Teile Ihrer eigenen Webseite zu verlinken (wie beim ersten Link). Der Text "http" sollte daher nur in externen Links erscheinen (wie bei den zweiten und dritten Links), und wir können dies mit einem [Attribut-Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) auswählen: `a[href^="http"]` wählt {{htmlelement("a")}} Elemente aus, aber nur, wenn sie ein [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut mit einem Wert haben, der mit "http" beginnt.

Das war's. Versuchen Sie, den aktiven Lernbereich oben erneut zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie noch nicht mit [Hintergründen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) und [responsive Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) vertraut sind; diese werden an anderer Stelle erklärt.

## Links als Buttons stylen

Die Werkzeuge, die Sie bisher in diesem Artikel erkundet haben, können auch auf andere Weise verwendet werden. Zum Beispiel können Zustände wie Hover genutzt werden, um viele verschiedene Elemente zu stylen, nicht nur Links — Sie könnten beispielsweise den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen stylen möchten.

Darüber hinaus werden Links in bestimmten Situationen häufig so gestylt, dass sie wie Buttons aussehen und sich verhalten. Ein Navigationsmenü auf einer Webseite kann als Satz von Links markiert werden, und dieses kann so gestylt werden, dass es wie ein Satz von Steuerbuttons oder Tabs aussieht, die dem Benutzer den Zugang zu anderen Teilen der Seite bieten. Lassen Sie uns erkunden, wie.

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

Das gibt uns folgendes Ergebnis:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}} Element mit einer `"container"` Klasse. Das `<nav>` enthält unsere Links.

Das CSS umfasst das Styling für den Container und die darin enthaltenen Links.

- Die zweite Regel besagt:
  - Der Container ist ein [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Die darin enthaltenen Elemente — in diesem Fall die Links — werden _Flex-Elemente_ sein.
  - Der Abstand zwischen den Flex-Elementen beträgt `0.625%` der Breite des Containers.
- Die dritte Regel stylt die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz im Container ausnutzen.
  - Als nächstes schalten wir die Standard {{cssxref("text-decoration")}} und {{cssxref("outline")}} aus — wir wollen nicht, dass diese unseren Look stören.
  - Die letzten drei Deklarationen dienen dazu, den Text innerhalb jedes Links zu zentrieren, die {{cssxref("line-height")}} auf 3 zu setzen, um den Buttons etwas Höhe zu geben (was auch den Vorteil hat, den Text vertikal zu zentrieren), und die Textfarbe auf Schwarz zu setzen.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen alles vermittelt, was Sie über Links wissen müssen — fürs Erste! Der letzte Artikel in unserem Textstyling-Modul erklärt, wie Sie benutzerdefinierte Schriftarten auf Ihren Websites verwenden können (besser bekannt als Webfonts).

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
