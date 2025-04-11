---
title: Gestaltung von Links
slug: Learn_web_development/Core/Text_styling/Styling_links
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

Beim Gestalten von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) ist es wichtig zu verstehen, warum Standard-Linkstil entscheidend ist, wie man Pseudoklassen nutzt, um Link-Zustände effektiv zu gestalten, und wie man Links für die Verwendung in verschiedenen Schnittstellenkomponenten wie Navigationsmenüs und Registerkarten gestaltet. Wir werden all diese Themen in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, warum Standardstil für Links für die Benutzerfreundlichkeit im Web wichtig ist — sie sind vertraut und helfen den Nutzern, Links zu erkennen.</li>
          <li>Styling von Link-Zuständen: <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Verstehen, warum Link-Zustände für Barrierefreiheit und Benutzerfreundlichkeit notwendig sind.</li>
          <li>Einfügen von Icons in Links.</li>
          <li>Erstellen eines Navigationsmenüs mit Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Link-Zustände

Das Erste, was man verstehen sollte, ist das Konzept der Link-Zustände — die verschiedenen Zustände, in denen Links existieren können. Diese können mit verschiedenen [Pseudoklassen](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) gestaltet werden:

- **Link**: Ein Link, der ein Ziel hat (d.h. nicht nur ein benannter Anker), gestaltet mit der {{cssxref(":link")}} Pseudoklasse.
- **Visited**: Ein Link, der bereits besucht wurde (existiert im Verlauf des Browsers), gestaltet mit der {{cssxref(":visited")}} Pseudoklasse.
- **Hover**: Ein Link, über den der Mauszeiger eines Benutzers schwebt, gestaltet mit der {{cssxref(":hover")}} Pseudoklasse.
- **Focus**: Ein Link, der fokussiert ist (z. B. durch einen Tastaturnutzer mit der <kbd>Tab</kbd>-Taste oder Ähnlichem, oder programmatisch fokussiert über [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)) — dies wird mit der {{cssxref(":focus")}} Pseudoklasse gestaltet.
- **Active**: Ein Link, der aktiviert ist (z. B. angeklickt wird), gestaltet mit der {{cssxref(":active")}} Pseudoklasse.

## Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält; obwohl das CSS den Text vergrößert und zentriert, um ihn hervorzuheben. Sie können das Aussehen und Verhalten der Standardstile im Beispiel mit dem Aussehen und Verhalten anderer Links auf dieser Seite vergleichen, die mehr CSS-Stile haben. Standardlinks haben die folgenden Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Über einem Link schwebend ändert sich der Mauszeiger zu einer kleinen Hand.
- Fokussierte Links haben einen Rahmen um sich — Sie sollten in der Lage sein, die Links auf dieser Seite mit der Tastatur durch Drücken der Tabulatortaste zu fokussieren.

- Aktive Links sind rot. Versuchen Sie, die Maustaste gedrückt zu halten, während Sie auf den Link klicken.

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
> Alle Linkbeispiele auf dieser Seite führen zum oberen Rand ihres Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht kaputtgehen.

Interessanterweise sind diese Standardstile fast identisch mit denen, wie sie in den frühen Tagen der Browser in den Mitte der neunziger Jahre waren. Das liegt daran, dass die Nutzer dieses Verhalten kennen und erwarten — wenn Links anders gestaltet wären, würde das viele Menschen verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht gestalten sollten. Es bedeutet nur, dass Sie sich nicht zu weit vom erwarteten Verhalten entfernen sollten. Sie sollten zumindest:

- Unterstreichungen für Links verwenden, aber nicht für andere Dinge. Wenn Sie keine Links unterstreichen möchten, heben Sie sie zumindest auf andere Weise hervor.
- Lassen Sie sie in irgendeiner Weise reagieren, wenn sie schwebend/fokussiert sind, und in einer leicht anderen Weise, wenn sie aktiviert werden.

Die Standardstile können mit folgenden CSS-Eigenschaften abgeschaltet/geändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten dies nicht deaktivieren, es sei denn, Sie haben einen sehr guten Grund.
- {{cssxref("outline")}} für den Textrahmen. Ein Rahmen ist einem Rand ähnlich. Der einzige Unterschied ist, dass ein Rand Platz im Boxmodell einnimmt und ein Rahmen nicht; er sitzt einfach über dem Hintergrund. Der Rahmen ist eine nützliche Zugänglichkeitsunterstützung, sollte also nicht entfernt werden, ohne eine andere Methode zur Kennzeichnung des fokussierten Links hinzuzufügen.

> [!NOTE]
> Sie sind nicht auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu gestalten — Sie können beliebige Eigenschaften verwenden.

## Styling von Links

Nachdem wir die Standardzustände im Detail betrachtet haben, schauen wir uns nun einen typischen Satz von Linkstilen an.

Zu Beginn schreiben wir unsere leeren Regelsets aus:

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

Diese Reihenfolge ist wichtig, weil sich Linkstile aufeinander aufbauen. Zum Beispiel gelten die Stile in der ersten Regel für alle nachfolgenden. Wenn ein Link aktiviert wird, wird er normalerweise auch überfahren. Wenn Sie diese in der falschen Reihenfolge setzen und in jedem Regelset dieselben Eigenschaften ändern, funktionieren sie nicht wie erwartet. Um sich die Reihenfolge zu merken, können Sie eine Eselsbrücke wie **L**o**V**e **F**ears **HA**te verwenden.

Nun fügen wir einige Informationen hinzu, um dies richtig zu gestalten:

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

Wir stellen auch ein Beispiel-HTML zur Verfügung, auf das das CSS angewendet wird:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Das Zusammenfügen der beiden ergibt dieses Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier gemacht? Dies sieht auf jeden Fall anders aus als das Standard-Styling, bietet jedoch eine vertraute Erfahrung für die Nutzer, damit sie wissen, was vor sich geht:

- Die ersten beiden Regeln sind in diesem Zusammenhang nicht so interessant.
- Die dritte Regel verwendet den `a`-Selektor, um den Fokusrahmen zu entfernen (der sowieso zwischen den Browsern variiert).
- Als Nächstes verwenden wir die `a:link` und `a:visited` Selektoren, um ein paar Farbvariationen auf nicht besuchte und besuchte Links zu setzen, so dass sie unterscheidbar sind.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, um fokussierte und überfahrene Links mit keinen Unterstreichungen und unterschiedlichen Hintergrundfarben zu versehen.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert sind, um deutlich zu machen, dass etwas Wichtiges passiert!

## Aktives Lernen: Gestalten Sie Ihre eigenen Links

In dieser aktiven Lerneinheit möchten wir, dass Sie unser leeres Regelset nehmen und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Verwenden Sie Ihre Fantasie, gehen Sie wild. Wir sind sicher, dass Sie mit etwas ebenso funktionalem wie unserem obigen Beispiel aufwarten können.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche beheben. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um das oben gezeigte Beispiel einzufügen.

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

## Hinzufügen von Icons zu Links

Eine gängige Praxis ist es, Icons zu Links hinzuzufügen, um mehr auf den Inhalt hinzuweisen, auf den der Link verweist. Schauen wir uns ein wirklich einfaches Beispiel an, das ein Icon zu externen Links (Links, die zu anderen Sites führen) hinzufügt. Ein solches Icon sieht normalerweise aus wie ein kleiner Pfeil, der aus einem Kasten heraus zeigt. Für dieses Beispiel verwenden wir das [Extern-Linksymbol von icons8.com](https://icons8.com/icon/741/external-link).

Schauen wir uns etwas HTML und CSS an, das uns den gewünschten Effekt gibt. Zuerst etwas einfaches HTML zum Gestalten:

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

Was passiert hier? Wir überspringen das meiste CSS, denn es ist nur das gleiche Material, das Sie schon gesehen haben. Die letzte Regel jedoch ist interessant: wir verwenden das {{cssxref("::after")}} Pseudo-Element. Das `0.8rem x 0.8rem` Pseudo-Element wird nach dem Anchor-Text als Inline-Block eingefügt. Und das Icon wird als {{cssxref("background")}} des Pseudo-Elements dargestellt.

Wir haben eine [relative Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) `em` verwendet. Es passt die Größe des Icons im Verhältnis zur Textgröße des Ankers an. Ändert sich die Textgröße des Ankers, passt sich die Icon-Größe entsprechend an.

Ein letzter Punkt: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) richtig schreiben, sollten Sie nur absolute URLs für externe Links verwenden – es ist effizienter, relative Links zu verwenden, um auf andere Teile Ihrer eigenen Website zu verlinken (wie beim ersten Link). Der Text "http" sollte daher nur in externen Links erscheinen (wie den zweiten und dritten), und wir können dies mit einem [Attributselektor](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) auswählen: `a[href^="http"]` selektiert {{htmlelement("a")}} Elemente, aber nur, wenn sie ein [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut mit einem Wert haben, der mit "http" beginnt.

Das war's. Versuchen Sie, den aktiven Lerneabschnitt oben noch einmal zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Keine Sorge, wenn Sie noch nicht mit [Hintergründen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) und [responsivem Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) vertraut sind; diese werden an anderer Stelle erklärt.

## Links als Schaltflächen gestalten

Die Werkzeuge, die Sie bisher in diesem Artikel erkundet haben, können auch auf andere Weise verwendet werden. Zum Beispiel können Zustände wie Hover verwendet werden, um viele verschiedene Elemente zu gestalten, nicht nur Links – Sie könnten den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen gestalten.

Links werden zudem häufig so gestaltet, dass sie unter bestimmten Umständen wie Schaltflächen aussehen und sich verhalten. Ein Website-Navigationsmenü kann als Menge an Links markiert werden, und dies kann so gestaltet werden, dass es wie eine Reihe von Steuerungselementen oder Registerkarten aussieht, die dem Nutzer den Zugriff auf andere Teile der Website ermöglichen. Lassen Sie uns erkunden wie.

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

Das ergibt das folgende Ergebnis:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}} Element mit einer `"container"` Klasse. Das `<nav>` enthält unsere Links.

Das CSS umfasst das Styling für den Container und die Links darin enthalten.

- Die zweite Regel sagt:
  - Der Container ist ein [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Die enthaltenen Elemente – die Links, in diesem Fall – werden _Flex-Elemente_ sein.
  - Der Abstand zwischen den Flex-Elementen wird `0.625%` der Containerbreite sein.
- Die dritte Regel stylt die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz im Container nutzen.
  - Anschließend schalten wir die Standardwerte {{cssxref("text-decoration")}} und {{cssxref("outline")}} aus – wir wollen nicht, dass diese unser Aussehen stören.
  - Die letzten drei Deklarationen zentrieren den Text innerhalb jedes Links, setzen die {{cssxref("line-height")}} auf 3, um den Schaltflächen etwas Höhe zu geben (was auch den Vorteil hat, den Text vertikal zu zentrieren), und setzen die Textfarbe auf schwarz.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen alles vermittelt, was Sie über Links wissen müssen – zumindest für den Moment! Der letzte Artikel in unserem Styling-Text-Modul erklärt, wie Sie benutzerdefinierte Schriftarten auf Ihren Websites verwenden können (besser bekannt als Web Fonts).

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
