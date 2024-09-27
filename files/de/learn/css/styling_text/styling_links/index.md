---
title: Styling links
slug: Learn/CSS/Styling_text/Styling_links
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

Beim Stylen von [Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) ist es wichtig, zu verstehen, wie man Pseudo-Klassen effektiv nutzt, um ihre Zustände zu gestalten. Es ist auch wichtig zu wissen, wie man Links für die Nutzung in gängigen Schnittstellen-Features, deren Inhalte variieren (wie Navigationsmenüs und Tabs), stylt. Wir werden diese Themen in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (Studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Grundlagen von CSS (Studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >Grundlagen von CSS-Text und Schriftarten</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Link-Zustände stylt und Links effektiv in
        gängigen Benutzeroberflächen-Features wie Navigationsmenüs einsetzt.
      </td>
    </tr>
  </tbody>
</table>

## Schauen wir uns einige Links an

Wir haben uns angesehen, wie Links nach den besten Praktiken in Ihrem HTML implementiert werden in [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks). In diesem Artikel bauen wir auf diesem Wissen auf und zeigen Ihnen die besten Praktiken für das Styling von Links.

### Link-Zustände

Das erste Konzept, das zu verstehen ist, ist das der Link-Zustände — verschiedene Zustände, in denen Links existieren können. Diese können mit unterschiedlichen [Pseudo-Klassen](/de/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes_and_pseudo-elements) gestylt werden:

- **Link**: Ein Link, der ein Ziel hat (d.h., nicht nur ein benannter Anker), wird mit der {{cssxref(":link")}} Pseudo-Klasse gestylt.
- **Visited**: Ein Link, der bereits besucht wurde (im Verlauf des Browsers existiert), wird mit der {{cssxref(":visited")}} Pseudo-Klasse gestylt.
- **Hover**: Ein Link, der durch den Mauszeiger eines Benutzers überflogen wird, wird mit der {{cssxref(":hover")}} Pseudo-Klasse gestylt.
- **Focus**: Ein Link, der fokussiert ist (z.B. von einem Tastaturnutzer mittels

  <kbd>Tab</kbd>

  oder ähnlich, oder programmatisch fokussiert mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) bewegt) — dieser wird mit der {{cssxref(":focus")}} Pseudo-Klasse gestylt.

- **Active**: Ein aktivierter Link (z.B. darauf geklickt), wird mit der {{cssxref(":active")}} Pseudo-Klasse gestylt.

### Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält. Der CSS vergrößert und zentriert den Text, um ihn hervorzuheben. Vergleichen Sie das Aussehen und Verhalten der Standardstilarten im Beispiel mit den anderen Links auf dieser Seite, die mehr CSS-Stile erhalten haben. Standardlinks haben die folgenden Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Das Überfliegen eines Links lässt den Mauszeiger zu einem kleinen Hand-Symbol wechseln.
- Fokussierte Links haben einen Umriss um sie herum — Sie sollten in der Lage sein, sich mit der Tastatur durch Drücken der Tabulatortaste durch die Links auf dieser Seite zu bewegen.

- Aktive Links sind rot. Halten Sie die Maustaste auf dem Link gedrückt, während Sie darauf klicken.

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
> Alle Link-Beispiele auf dieser Seite verlinken zum oberen Rand ihres Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht kaputt gehen.

Interessanterweise sind diese Standardstile fast gleich wie in den frühen Tagen der Browser in den mittleren 1990ern. Der Grund dafür ist, dass die Nutzer dieses Verhalten kennen und erwarten — wenn Links anders gestylt wären, würde das viele Leute verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht stylen sollten. Es bedeutet nur, dass Sie nicht zu weit vom erwarteten Verhalten abweichen sollten. Sie sollten zumindest:

- Unterstreichungen für Links verwenden, aber nicht für andere Dinge. Wenn Sie Links nicht unterstreichen wollen, heben Sie sie zumindest auf andere Weise hervor.
- Lassen Sie Links irgendwie reagieren, wenn sie überflogen/ fokussiert sind, und auf eine leicht andere Weise, wenn sie aktiviert werden.

Die Standardstile können mit den folgenden CSS-Eigenschaften ausgeschaltet/verändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten dies nur ausschalten, wenn Sie einen sehr guten Grund dafür haben.
- {{cssxref("outline")}} für den Textrand. Ein Umriss ist ähnlich wie ein Rahmen. Der einzige Unterschied ist, dass ein Rahmen Platz im Kasten einnimmt und ein Umriss nicht; er sitzt einfach über dem Hintergrund. Der Umriss ist eine nützliche Unterstützung für die Zugänglichkeit und sollte nicht entfernt werden, ohne eine andere Methode zum Anzeigen des fokussierten Links hinzuzufügen.

> [!NOTE]
> Sie sind nicht nur auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu stylen — Sie können beliebige Eigenschaften verwenden.

### Einige Links stylen

Nun, da wir die Standardzustände im Detail betrachtet haben, schauen wir uns ein typisches Set von Link-Stilen an.

Als Erstes schreiben wir unsere leeren Regelsets aus:

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

Diese Reihenfolge ist wichtig, weil Linkstile aufeinander aufbauen. Zum Beispiel gelten die Stile in der ersten Regel für alle nachfolgenden. Wenn ein Link aktiviert wird, wird er normalerweise auch überflogen. Wenn Sie diese in der falschen Reihenfolge setzen und in jedem Regelset die gleichen Eigenschaften ändern, funktionieren die Dinge nicht wie erwartet. Um sich die Reihenfolge zu merken, könnten Sie versuchen, ein Mnemotechnikum wie **L**o**V**e **F**ears **HA**te zu verwenden.

Nun fügen wir einige Informationen hinzu, um dies richtig zu stylen:

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

Wir stellen auch einige HTML-Beispiele bereit, auf die der CSS angewendet wird:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Das Zusammenfügen der beiden ergibt dieses Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier getan? Dies sieht sicherlich anders aus als das Standardstyling, bietet aber dennoch eine ausreichend vertraute Erfahrung für die Nutzer, um zu wissen, was vor sich geht:

- Die ersten beiden Regeln sind in dieser Diskussion nicht sehr interessant.
- Die dritte Regel verwendet den `a`-Selektor, um den Fokus-Umriss zu entfernen (der ohnehin in den Browsern variiert).
- Als Nächstes verwenden wir die Selektoren `a:link` und `a:visited`, um ein paar Farbvariationen auf nicht besuchte und besuchte Links anzuwenden, damit sie sich unterscheiden.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, um fokussierte und überflogene Links ohne Unterstreichung und mit unterschiedlichen Hintergrundfarben zu versehen.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert werden, um zu verdeutlichen, dass etwas Wichtiges passiert!

### Aktives Lernen: Gestalten Sie Ihre eigenen Links

In dieser aktiven Lerneinheit möchten wir, dass Sie unser leeres Set von Regeln verwenden und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Nutzen Sie Ihre Fantasie, toben Sie sich aus. Wir sind sicher, dass Sie etwas Cooleres und genauso Funktionales wie unser obiges Beispiel entwerfen können.

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

## Einfügen von Icons auf Links

Eine gängige Praxis ist es, Icons in Links einzubinden, um besser zu verdeutlichen, auf welche Art von Inhalt der Link verweist. Schauen wir uns ein sehr einfaches Beispiel an, das ein Icon zu externen Links hinzufügt (Links, die zu anderen Websites führen). Ein solches Icon sieht normalerweise wie ein kleiner Pfeil aus, der aus einem Kasten zeigt. Für dieses Beispiel werden wir [das externe Link-Icon von icons8.com](https://icons8.com/icon/741/external-link) verwenden.

Schauen wir uns etwas HTML und CSS an, das uns den gewünschten Effekt vermittelt. Zuerst etwas einfaches HTML zum Stylen:

```html-nolint
<p>
  For more information on the weather, visit our <a href="#">weather page</a>,
  look at <a href="https://en.wikipedia.org/">weather on Wikipedia</a>, or check
  out
  <a href="https://www.nationalgeographic.org/topics/resource-library-weather/">
    weather on National Geographic</a>.
</p>
```

Nun das CSS:

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

Was passiert hier? Wir überspringen den größten Teil des CSS, da es die gleichen Informationen enthält, die Sie bereits gesehen haben. Die letzte Regel ist jedoch interessant: Wir verwenden das {{cssxref("::after")}} Pseudoelement. Das `0.8rem x 0.8rem` Pseudoelement wird als Inline-Block nach dem Ankertext eingefügt. Und das Icon wird als {{cssxref("background")}} des Pseudoelements dargestellt.

Wir haben eine [relative Einheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) `em` verwendet. Es dimensioniert das Icon proportional zur Textgröße des Ankers. Wenn sich die Textgröße des Ankers ändert, passt sich die Icon-Größe entsprechend an.

Ein abschließendes Wort: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) richtig schreiben, sollten Sie nur absolute URLs für externe Links verwenden — es ist effizienter, relative Links zu verwenden, um zu anderen Teilen Ihrer eigenen Website zu verlinken (wie mit dem ersten Link). Der Text "http" sollte daher nur in externen Links erscheinen (wie den zweiten und dritten) und wir können diesen mit einem [Attributselektor](/de/docs/Learn/CSS/Building_blocks/Selectors#attribute_selectors) auswählen: `a[href^="http"]` wählt {{htmlelement("a")}} Elemente aus, aber nur, wenn sie ein [`href`](/de/docs/Web/HTML/Element/a#href) Attribut mit einem Wert haben, der mit "http" beginnt.

Das war's also. Versuchen Sie, den aktiven Lernabschnitt oben zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie noch nicht mit [Hintergründen](/de/docs/Learn/CSS/Building_blocks) und [responsivem Webdesign](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) vertraut sind; diese werden an anderen Stellen erklärt.

## Links als Buttons stylen

Die Werkzeuge, die Sie bisher in diesem Artikel erforscht haben, können auch auf andere Weise genutzt werden. Zum Beispiel können Zustände wie Hover verwendet werden, um viele verschiedene Elemente zu stylen, nicht nur Links — Sie könnten den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen stylen wollen.

Darüber hinaus werden Links oft so gestylt, dass sie in bestimmten Situationen wie Buttons aussehen und sich verhalten. Ein Navigationsmenü einer Website kann als eine Reihe von Links ausgezeichnet werden, die als eine Gruppe von Steuerungsschaltflächen oder Tabs gestylt werden können, die dem Benutzer Zugriff auf andere Teile der Website bieten. Lassen Sie uns untersuchen, wie das geht.

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

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}} Element mit einer `"container"` Klasse. Das `<nav>` enthält unsere Links.

Das CSS beinhaltet das Styling für den Container und die darin enthaltenen Links.

- Die zweite Regel sagt:
  - Der Container ist ein [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox). Die Gegenstände, die er enthält — in diesem Fall die Links — werden _Flex-Items_ sein.
  - Der Abstand zwischen den Flex-Items beträgt `0.625%` der Breite des Containers.
- Die dritte Regel stylt die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente angepasst werden, sodass sie den gesamten verfügbaren Platz im Container nutzen.
  - Als nächstes schalten wir die Standardwerte für {{cssxref("text-decoration")}} und {{cssxref("outline")}} aus — wir wollen nicht, dass diese unser Aussehen beeinträchtigen.
  - Die letzten drei Deklarationen dienen dem Zentrum des Textes innerhalb jedes Links, setzen die {{cssxref("line-height")}} auf 3, um den Buttons etwas Höhe zu geben (was auch den Vorteil hat, den Text vertikal zu zentrieren), und setzen die Textfarbe auf schwarz.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen alles vermittelt, was Sie über Links wissen müssen — für den Moment! Der letzte Artikel in unserem Modul "Styling Text" beschreibt, wie Sie [benutzerdefinierte Schriftarten](/de/docs/Learn/CSS/Styling_text/Web_fonts) auf Ihren Websites verwenden (oder Web Fonts, wie sie besser bekannt sind).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
