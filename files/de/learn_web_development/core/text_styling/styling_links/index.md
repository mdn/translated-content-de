---
title: Gestaltung von Links
slug: Learn_web_development/Core/Text_styling/Styling_links
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

Bei der Gestaltung von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) ist es wichtig zu verstehen, warum die Standardlinkstile wichtig sind, wie man Pseudo-Klassen verwendet, um Linkzustände effektiv zu gestalten, und wie man Links für die Verwendung in häufig verwendeten Benutzeroberflächenelementen wie Navigationsmenüs und Registerkarten gestaltet. In diesem Artikel werden wir all diese Themen behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, warum Standardlinkstile für die Benutzerfreundlichkeit im Web wichtig sind — sie sind vertraut und helfen Nutzern, Links zu erkennen.</li>
          <li>Gestaltung von Linkzuständen: <code>:hover</code>, <code>:focus</code>, <code>:visited</code>, und <code>:active</code>.</li>
          <li>Verstehen, warum Linkzustände für Barrierefreiheit und Benutzerfreundlichkeit erforderlich sind.</li>
          <li>Einfügen von Icons in Links.</li>
          <li>Erstellen eines Navigationsmenüs mit Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Linkzustände

Das Erste, was man verstehen muss, ist das Konzept von Linkzuständen — verschiedene Zustände, in denen Links existieren können. Diese können mithilfe verschiedener [Pseudo-Klassen](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#pseudo-classes_and_pseudo-elements) gestaltet werden:

- **Link**: Ein Link, der ein Ziel hat (d.h. nicht nur ein benannter Anker), wird mit der {{cssxref(":link")}} Pseudo-Klasse gestaltet.
- **Besucht**: Ein Link, der bereits besucht wurde (in der Browser-Historie existiert), wird mit der {{cssxref(":visited")}} Pseudo-Klasse gestaltet.
- **Hover**: Ein Link, über den der Mauszeiger eines Nutzers schwebt, wird mit der {{cssxref(":hover")}} Pseudo-Klasse gestaltet.
- **Fokus**: Ein Link, der fokussiert ist (z.B. von einem Tastaturnutzer mit der <kbd>Tab</kbd>-Taste oder ähnlichem erreicht wurde, oder programmgesteuert mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) fokussiert wurde) — dieser wird mit der {{cssxref(":focus")}} Pseudo-Klasse gestaltet.
- **Aktiv**: Ein Link, der aktiviert ist (z.B. angeklickt wurde), wird mit der {{cssxref(":active")}} Pseudo-Klasse gestaltet.

## Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält; auch wenn das CSS den Text vergrößert und zentriert, um ihn hervorzuheben. Sie können das Erscheinungsbild und das Verhalten der Standardstile im Beispiel mit dem Aussehen und Verhalten anderer Links auf dieser Seite vergleichen, die mehr CSS-Stile haben. Standardlinks haben folgende Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Wenn man mit der Maus über einen Link schwebt, ändert sich der Mauszeiger zu einem kleinen Hand-Symbol.
- Fokussierte Links haben eine Umrandung — Sie sollten in der Lage sein, die Links auf dieser Seite mit der Tastatur zu fokussieren, indem Sie die Tabulatortaste drücken.

- Aktive Links sind rot. Versuchen Sie, die Maustaste beim Klicken auf den Link gedrückt zu halten.

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
> Alle Linkbeispiele auf dieser Seite verlinken zum oberen Rand ihres Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die sich jeweils in einem {{HTMLElement("iframe")}} befinden, nicht kaputtgehen.

Interessanterweise sind diese Standardstile fast dieselben wie in den ersten Tagen der Browser in den mittleren 1990ern. Dies liegt daran, dass die Nutzer dieses Verhalten kennen und erwarten — wenn Links anders gestaltet werden, würde dies viele Menschen verwirren. Das bedeutet nicht, dass Sie Links nicht überhaupt gestalten sollten. Es bedeutet nur, dass Sie nicht zu weit vom erwarteten Verhalten abweichen sollten. Sie sollten zumindest:

- Unterstreichen Sie Links, aber nicht andere Dinge. Wenn Sie Links nicht unterstreichen möchten, heben Sie sie zumindest auf andere Weise hervor.
- Sorgen Sie dafür, dass sie auf irgendeine Weise reagieren, wenn sie geschwebt/fokussiert werden, und auf eine leicht andere Weise, wenn sie aktiviert werden.

Die Standardstile können mit den folgenden CSS-Eigenschaften ausgeschaltet/verändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten dies nicht deaktivieren, es sei denn, Sie haben einen sehr guten Grund.
- {{cssxref("outline")}} für die Textumrandung. Eine Umrandung ist ähnlich wie ein Rahmen. Der einzige Unterschied besteht darin, dass ein Rahmen Platz im Kasten einnimmt und eine Umrandung nicht; sie sitzt einfach über dem Hintergrund. Die Umrandung ist eine nützliche Hilfe für die Barrierefreiheit und sollte nicht entfernt werden, ohne eine andere Methode hinzuzufügen, um den fokussierten Link anzuzeigen.

> [!NOTE]
> Sie sind nicht nur auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu gestalten — Sie können beliebige Eigenschaften verwenden, die Sie möchten.

## Gestaltung von Links

Nachdem wir nun die Standardzustände im Detail betrachtet haben, wollen wir uns ein typisches Set von Linkstilen ansehen.

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

Diese Reihenfolge ist wichtig, da Linkstile aufeinander aufbauen. Beispielsweise gelten die Stile in der ersten Regel für alle nachfolgenden. Wenn ein Link aktiviert ist, wird normalerweise auch über ihn geschwebt. Wenn Sie diese in der falschen Reihenfolge anordnen und dieselben Eigenschaften in jedem Regelset ändern, funktionieren die Dinge nicht wie erwartet. Um sich die Reihenfolge zu merken, könnten Sie ein Merkwort wie **L**o**V**e **F**ears **HA**te verwenden.

Jetzt fügen wir ein paar weitere Informationen hinzu, um dies richtig zu stylen:

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

Wir bieten auch etwas Beispiel-HTML, auf das das CSS angewendet wird:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Das Zusammenspiel beider ergibt folgendes Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier gemacht? Dies sieht definitiv anders aus als die Standardgestaltung, bietet aber dennoch ein vertrautes Erlebnis für die Nutzer:

- Die ersten beiden Regeln sind in dieser Diskussion nicht so interessant.
- Die dritte Regel verwendet den `a`-Selektor, um die Fokusumrandung zu entfernen (die sowieso je nach Browser variiert).
- Als Nächstes verwenden wir die `a:link` und `a:visited` Selektoren, um einige Farbvariationen auf nicht besuchten und besuchten Links zu setzen, sodass sie erkennbar sind.
- Die nächsten zwei Regeln verwenden `a:focus` und `a:hover`, um fokussierte und geschwebte Links ohne Unterstrich und mit unterschiedlichen Hintergrundfarben zu versehen.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert werden, um deutlich zu machen, dass etwas Wichtiges passiert!

## Aktives Lernen: Gestalten Sie Ihre eigenen Links

In dieser aktiven Lerneinheit möchten wir, dass Sie unser leeres Satz von Regeln verwenden und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Nutzen Sie Ihre Vorstellungskraft, lassen Sie Ihrer Kreativität freien Lauf. Wir sind sicher, dass Sie etwas Cooleres und ebenso Funktionales wie unser obiges Beispiel entwickeln können.

Wenn Ihnen ein Fehler unterläuft, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um das Beispiel einzufügen, das wir oben gezeigt haben.

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

Ein häufig verwendeter Ansatz ist das Hinzufügen von Icons in Links, um mehr Hinweise darauf zu geben, zu welcher Art von Inhalt der Link führt. Schauen wir uns ein wirklich einfaches Beispiel an, das ein Icon zu externen Links hinzufügt (Links, die zu anderen Websites führen). Ein solches Icon sieht normalerweise wie ein kleiner Pfeil aus, der aus einem Kasten zeigt. Für dieses Beispiel verwenden wir das [externes Link-Icon von icons8.com](https://icons8.com/icon/741/external-link).

Schauen wir uns etwas HTML und CSS an, das den Effekt erzielt, den wir wünschen. Zuerst etwas einfaches HTML zum Stylen:

```html-nolint
<p>
  For more information on the weather, visit our <a href="#">weather page</a>,
  look at <a href="https://en.wikipedia.org/">weather on Wikipedia</a>, or check
  out
  <a href="https://www.nationalgeographic.org/topics/resource-library-weather/">
    weather on National Geographic</a>.
</p>
```

Als Nächstes das CSS:

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

Was passiert hier? Wir überspringen den größten Teil des CSS, da es sich um dieselben Informationen handelt, die Sie vorher angesehen haben. Die letzte Regel ist jedoch interessant: Wir verwenden das {{cssxref("::after")}} Pseudoelement. Das `0.8rem x 0.8rem` Pseudoelement wird nach dem Ankertext als ein Inline-Block eingefügt. Und das Icon wird als {{cssxref("background")}} des Pseudoelements dargestellt.

Wir haben eine [relative Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) `em` verwendet. Es bemisst das Icon proportional zur Textgröße des Ankers. Wenn sich die Textgröße des Ankers ändert, passt sich die Icon-Größe entsprechend an.

Ein abschließendes Wort: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) korrekt schreiben, sollten Sie nur absolute URLs für externe Links verwenden — es ist effizienter, relative Links zu verwenden, um zu anderen Teilen Ihrer eigenen Website zu verlinken (wie beim ersten Link). Der Text "http" sollte daher nur in externen Links erscheinen (wie bei den zweiten und dritten), und wir können dies mit einem [Attributselektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#attribute_selectors) auswählen: `a[href^="http"]` wählt {{htmlelement("a")}} Elemente aus, jedoch nur, wenn sie ein [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut mit einem Wert haben, der mit "http" beginnt.

Das ist alles. Versuchen Sie, zur aktiven Lerneinheit oben zurückzukehren und diese neue Technik auszuprobieren!

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie mit [Hintergründen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) und [responsivem Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) noch nicht vertraut sind; diese werden an anderen Stellen erklärt.

## Links als Schaltflächen gestalten

Die bisher in diesem Artikel erkundeten Werkzeuge können auch auf andere Weise verwendet werden. Beispielweise können Zustände wie Hover verwendet werden, um viele verschiedene Elemente zu gestalten, nicht nur Links — man könnte den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen gestalten.

Zusätzlich werden Links häufig so gestaltet, dass sie in bestimmten Umständen wie Schaltflächen aussehen und sich verhalten. Ein Navigationsmenü einer Website kann als ein Satz von Links formatiert werden, und dies kann so gestaltet werden, dass es wie eine Reihe von Steuerschaltflächen oder Registerkarten aussieht, die dem Nutzer Zugriff auf andere Teile der Website geben. Lassen Sie uns erkunden, wie das geht.

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

Das ergibt das folgende Ergebnis:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}}-Element mit einer `"container"` Klasse. Das `<nav>` enthält unsere Links.

Das CSS beinhaltet die Gestaltung des Containers und der darin enthaltenen Links.

- Die zweite Regel besagt:
  - Der Container ist ein [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Die enthaltenen Elemente — in diesem Fall die Links — werden _Flexitems_ sein.
  - Der Abstand zwischen den Flexitems beträgt `0.625%` der Breite des Containers.
- Die dritte Regel gestaltet die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz des Containers nutzen.
  - Als Nächstes schalten wir die Standard-{{cssxref("text-decoration")}} und {{cssxref("outline")}} ab — wir wollen nicht, dass diese unser Aussehen beeinträchtigen.
  - Die letzten drei Deklarationen sind, um den Text innerhalb jedes Links zu zentrieren, die {{cssxref("line-height")}} auf 3 zu setzen, um den Schaltflächen etwas Höhe zu geben (was auch den Vorteil hat, den Text vertikal zu zentrieren), und die Textfarbe auf Schwarz zu setzen.

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen alles bietet, was Sie über Links wissen müssen — fürs Erste! Der letzte Artikel in unserem Modul zur Textgestaltung behandelt, wie Sie benutzerdefinierte Schriften auf Ihren Websites verwenden können (besser bekannt als Webschriften).

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
