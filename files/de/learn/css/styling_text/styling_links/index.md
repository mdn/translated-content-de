---
title: Styling links
slug: Learn/CSS/Styling_text/Styling_links
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

Beim Styling von [Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) ist es wichtig zu verstehen, wie man Pseudoklassen effektiv nutzt, um deren Zustände zu gestalten. Es ist auch wichtig zu wissen, wie man Links für den Einsatz in gängigen Benutzeroberflächenfunktionen, deren Inhalt variiert, wie Navigationsmenüs und Tabs, stylt. Wir werden uns beide Themen in diesem Artikel ansehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), CSS-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS-Text- und Schriftgrundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Linkzustände stylt und wie man Links effektiv in
        gängigen UI-Funktionen wie Navigationsmenüs verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns einige Links ansehen

Wir haben uns angesehen, wie Links in Ihrem HTML gemäß den Best Practices in [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) implementiert werden. In diesem Artikel werden wir auf diesem Wissen aufbauen und Ihnen die besten Praktiken für deren Styling zeigen.

### Linkzustände

Der erste Punkt ist das Verständnis des Konzepts von Linkzuständen — verschiedene Zustände, in denen Links existieren können. Diese können unter Verwendung verschiedener [Pseudoklassen](/de/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes_and_pseudo-elements) gestylt werden:

- **Link**: Ein Link, der ein Ziel hat (d. h. nicht nur ein benannter Anker), gestylt mit der {{cssxref(":link")}} Pseudoklasse.
- **Visited**: Ein Link, der bereits besucht wurde (in der Browserverlaufs-Historie existiert), gestylt mit der {{cssxref(":visited")}} Pseudoklasse.
- **Hover**: Ein Link, über den mit dem Mauszeiger des Benutzers gehobert wird, gestylt mit der {{cssxref(":hover")}} Pseudoklasse.
- **Focus**: Ein Link, der fokussiert ist (z. B. durch die Tastatur mittels der

  <kbd>Tab</kbd>

  Taste oder ein ähnliches Vorgehen, oder programmatisch fokussiert durch [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)) — dies wird mit der {{cssxref(":focus")}} Pseudoklasse gestylt.

- **Active**: Ein Link, der aktiviert ist (z. B. angeklickt), gestylt mit der {{cssxref(":active")}} Pseudoklasse.

### Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält; obwohl das CSS die Schrift vergrößert und zentriert, um es hervorzuheben. Sie können das Aussehen und Verhalten der Standardstilings im Beispiel mit dem Aussehen und Verhalten anderer Links auf dieser Seite vergleichen, die mehr CSS-Stile haben. Standardlinks haben die folgenden Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Ein Link, der gehobert wird, lässt den Mauszeiger in ein kleines Hand-Symbol wechseln.
- Fokussierte Links haben eine Umrandung um sie herum — Sie sollten in der Lage sein, die Links auf dieser Seite mit der Tastatur durch Drücken der Tabulatortaste zu fokussieren.

- Aktive Links sind rot. Versuchen Sie, den Mausknopf auf dem Link gedrückt zu halten, während Sie ihn anklicken.

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
> Alle Linkbeispiele auf dieser Seite verlinken auf den oberen Rand ihres Fensters. Das leere Fragment (`href="#"`) wird genutzt, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht kaputt gehen.

Interessanterweise sind diese Standardstile fast dieselben wie in den frühen Tagen der Browser in den mittleren 1990er Jahren. Das liegt daran, dass Nutzer dieses Verhalten kennen und erwarten — wenn Links anders gestaltet wären, würde das viele Menschen verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht stylen sollten. Es bedeutet nur, dass Sie nicht zu weit vom erwarteten Verhalten abweichen sollten. Sie sollten zumindest:

- Verwenden Sie Unterstreichungen für Links, aber nicht für andere Dinge. Wenn Sie Links nicht unterstreichen möchten, heben Sie sie auf andere Weise hervor.
- Lassen Sie sie in irgendeiner Weise reagieren, wenn sie gehobert/gefokussiert werden, und auf eine etwas andere Weise, wenn sie aktiviert werden.

Die Standardstile können mit den folgenden CSS-Eigenschaften ausgeschaltet/geändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten dies nicht ausschalten, es sei denn, Sie haben einen sehr guten Grund.
- {{cssxref("outline")}} für die Textumrandung. Eine Umrandung ist ähnlich wie ein Rahmen. Der einzige Unterschied besteht darin, dass ein Rahmen Platz in der Box einnimmt und eine Umrandung nicht; sie sitzt einfach über dem Hintergrund. Die Umrandung ist eine nützliche Zugänglichkeitshilfe, und sollte nicht entfernt werden, ohne eine andere Methode zum Anzeigen des fokussierten Links hinzuzufügen.

> [!NOTE]
> Es sind nicht nur die oben genannten Eigenschaften, die Sie verwenden können, um Ihre Links zu stylen — Sie können beliebige Eigenschaften verwenden, die Sie möchten.

### Einige Links stylen

Jetzt, da wir uns die Standardzustände im Detail angesehen haben, schauen wir uns einen typischen Satz von Linkstilen an.

Zunächst schreiben wir unsere leeren Regelsätze aus:

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

Diese Reihenfolge ist wichtig, da Linkstile aufeinander aufbauen. Beispielsweise gelten die Stile in der ersten Regel für alle nachfolgenden. Wenn ein Link aktiviert wird, wird normalerweise auch darüber gehobert. Wenn Sie diese in der falschen Reihenfolge anordnen und Sie ändern dieselben Eigenschaften in jedem Regelsatz, funktionieren die Dinge nicht wie erwartet. Um sich die Reihenfolge zu merken, könnten Sie ein Mnemonic verwenden wie **L**o**V**e **F**ears **HA**te.

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

Wir werden auch einige Beispiel-HTML bereitstellen, um das CSS anzuwenden:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Das Zusammenführen der beiden ergibt folgendes Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier gemacht? Dies sieht sicherlich anders aus als das Standardstyling, bietet aber noch genug Bekanntheit für Benutzer, um zu wissen, was vor sich geht:

- Die ersten beiden Regeln sind für diese Diskussion nicht so interessant.
- Die dritte Regel verwendet den `a`-Selektor, um die Fokussierungsumrandung zu entfernen (die sowieso in verschiedenen Browsern variiert).
- Nächste verwenden wir die `a:link` und `a:visited` Selektoren, um einige Farbvariationen für nicht besuchte und besuchte Links festzulegen, sodass sie unterscheidbar sind.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, um fokussierte und gehoberte Links ohne Unterstreichung und mit unterschiedlichen Hintergrundfarben zu gestalten.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert werden, um klarzustellen, dass etwas Wichtiges geschieht!

### Aktives Lernen: Stylen Sie Ihre eigenen Links

In dieser aktiven Lernsitzung möchten wir, dass Sie unser leeres Set von Regeln verwenden und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Lassen Sie Ihrer Fantasie freien Lauf, seien Sie wild. Wir sind sicher, dass Sie etwas Coolereres und genauso Funktionales wie unser obiges Beispiel finden können.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösung anzeigen_-Schaltfläche, um das Beispiel einzufügen, das wir oben gezeigt haben.

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

## Einfügen von Symbolen in Links

Eine gängige Praxis ist es, Symbole in Links einzufügen, um mehr Hinweise darauf zu geben, auf welche Art von Inhalt der Link verweist. Schauen wir uns ein wirklich einfaches Beispiel an, das ein Symbol zu externen Links hinzufügt (Links, die auf andere Websites führen). Ein solches Symbol sieht normalerweise aus wie ein kleiner Pfeil, der aus einem Kasten herauszeigt. Für dieses Beispiel verwenden wir [externes Linksymbol von icons8.com](https://icons8.com/icon/741/external-link).

Schauen wir uns etwas HTML und CSS an, das uns den gewünschten Effekt gibt. Erstens, einfaches HTML zum Stylen:

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

Was passiert hier? Wir überspringen den größten Teil des CSS, da es sich nur um dieselben Informationen handelt, die Sie schon zuvor gesehen haben. Die letzte Regel ist jedoch interessant: wir verwenden das {{cssxref("::after")}} Pseudoelement. Das `0.8rem x 0.8rem` große Pseudoelement wird nach dem Ankertext als Inline-Block eingefügt. Und das Symbol wird als {{cssxref("background")}} des Pseudoelements gerendert.

Wir haben eine [relative Einheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) `em` verwendet. Es dimensioniert das Symbol proportional zur Textgröße des Ankers. Wenn sich die Textgröße des Ankers ändert, passt sich auch die Symbolgröße entsprechend an.

Ein abschließendes Wort: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) korrekt schreiben, sollten Sie nur absolute URLs für externe Links verwenden — es ist effizienter, relative Links zu verwenden, um auf andere Teile Ihrer eigenen Website zu verlinken (wie beim ersten Link). Der Text "http" sollte daher nur in externen Links erscheinen (wie bei den zweiten und dritten), und wir können dies mit einem [Attributselektor](/de/docs/Learn/CSS/Building_blocks/Selectors#attribute_selectors) auswählen: `a[href^="http"]` selektiert {{htmlelement("a")}} Elemente, jedoch nur, wenn sie ein [`href`](/de/docs/Web/HTML/Element/a#href) Attribut mit einem Wert haben, der mit "http" beginnt.

Das war's. Versuchen Sie, die obige aktive Lernsektion erneut zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie noch nicht mit [Hintergründen](/de/docs/Learn/CSS/Building_blocks) und [responsivem Webdesign](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) vertraut sind; diese werden an anderer Stelle erklärt.

## Links als Schaltflächen stylen

Die Werkzeuge, die Sie bisher in diesem Artikel erkundet haben, können auch auf andere Weise verwendet werden. Zum Beispiel können Zustände wie Hover genutzt werden, um viele verschiedene Elemente zu stylen, nicht nur Links — Sie möchten vielleicht den Hoverzustand von Absätzen, Listenelementen oder anderen Dingen stylen.

Darüber hinaus werden Links häufig so gestylt, dass sie in bestimmten Umständen wie Schaltflächen aussehen und sich verhalten. Ein Website-Navigationsmenü kann als Menge von Links markiert werden und dies kann so gestaltet werden, dass es wie eine Menge von Steuerungsschaltflächen oder Registerkarten aussieht, die dem Benutzer Zugang zu anderen Bereichen der Website bieten. Lassen Sie uns erkunden, wie.

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

Und jetzt unser CSS:

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

Dies ergibt folgendes Resultat:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}} Element mit einer `"container"` Klasse. Das `<nav>` enthält unsere Links.

Das CSS enthält das Styling für das Container und die darin enthaltenen Links.

- Die zweite Regel besagt:
  - Das Container ist ein [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox). Die Elemente, die es enthält — die Links, in diesem Fall — werden _Flex-Items_.
  - Der Abstand zwischen den Flex-Items beträgt `0.625%` der Breite des Containers.
- Die dritte Regel stylt die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz im Container nutzen.
  - Danach schalten wir die Standard-{{cssxref("text-decoration")}} und {{cssxref("outline")}} ab — wir wollen nicht, dass diese unseren Look zerstören.
  - Die letzten drei Deklarationen dienen dazu, den Text innerhalb jedes Links zu zentrieren, die {{cssxref("line-height")}} auf 3 einzustellen, um den Buttons etwas Höhe zu geben (was auch den Vorteil hat, den Text vertikal zu zentrieren), und die Textfarbe auf Schwarz zu setzen.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen alles vermittelt, was Sie über Links wissen müssen — vorerst! Der abschließende Artikel in unserem Modul zum Textstyling beschreibt, wie Sie [benutzerdefinierte Schriftarten](/de/docs/Learn/CSS/Styling_text/Web_fonts) auf Ihren Websites verwenden können (oder Webfonts, wie sie besser bekannt sind).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
