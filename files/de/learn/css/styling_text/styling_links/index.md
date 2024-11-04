---
title: Styling von Links
slug: Learn/CSS/Styling_text/Styling_links
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

Beim Styling von [Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) ist es wichtig, zu verstehen, wie man Pseudo-Klassen effektiv nutzt, um ihre Zustände zu gestalten. Es ist auch wichtig zu wissen, wie man Links in häufig verwendeten Benutzeroberflächenfunktionen, deren Inhalte variieren, wie Navigationsmenüs und Registerkarten, stylt. In diesem Artikel werden wir beide Themen betrachten.

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
        Zu lernen, wie man Link-Zustände stylt und wie man Links effektiv in
        häufigen UI-Elementen wie Navigationsmenüs verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Schauen wir uns einige Links an

In [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) haben wir uns angesehen, wie Links gemäß den Best Practices in Ihrem HTML implementiert werden. In diesem Artikel bauen wir auf diesem Wissen auf und zeigen Ihnen die besten Praktiken für das Styling.

### Link-Zustände

Das erste, was Sie verstehen sollten, ist das Konzept der Link-Zustände — verschiedene Zustände, in denen sich Links befinden können. Diese können mit verschiedenen [Pseudo-Klassen](/de/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes_and_pseudo-elements) gestylt werden:

- **Link**: Ein Link, der ein Ziel hat (d. h., nicht nur ein benannter Anker), wird mit der {{cssxref(":link")}}-Pseudo-Klasse gestylt.
- **Visited**: Ein Link, der bereits besucht wurde (existiert im Verlauf des Browsers), wird mit der {{cssxref(":visited")}}-Pseudo-Klasse gestylt.
- **Hover**: Ein Link, der von einem Mauszeiger des Nutzers überfahren wird, wird mit der {{cssxref(":hover")}}-Pseudo-Klasse gestylt.
- **Focus**: Ein Link, der fokussiert ist (z. B. von einem Tastaturbenutzer mit der <kbd>Tab</kbd>-Taste oder ähnlichem erreicht, oder programmgesteuert mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) fokussiert) — dies wird mit der {{cssxref(":focus")}}-Pseudo-Klasse gestylt.
- **Active**: Ein Link, der aktiviert wird (z. B. angeklickt), wird mit der {{cssxref(":active")}}-Pseudo-Klasse gestylt.

### Standardstile

Das untenstehende Beispiel veranschaulicht, wie ein Link im Standardzustand aussieht und sich verhält; obwohl der CSS-Code den Text vergrößert und zentriert, um ihn hervorzuheben. Sie können das Aussehen und Verhalten der Standard-Stylings im Beispiel mit dem Aussehen und Verhalten anderer Links auf dieser Seite vergleichen, die mehr CSS-Stile angewendet haben. Standard-Links haben die folgenden Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Beim Überfahren eines Links ändert sich der Mauszeiger zu einem kleinen Hand-Symbol.
- Fokussierte Links haben eine Umrisslinie — Sie sollten Links auf dieser Seite mit der Tastatur durch Drücken der Tab-Taste fokussieren können.

- Aktive Links sind rot. Versuchen Sie, die Maus auf dem Link zu halten, während Sie darauf klicken.

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
> Alle Link-Beispiele auf dieser Seite verlinken zum oberen Rand ihres Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht fehlschlagen.

Interessanterweise sind diese Standardstile fast dieselben wie in den frühen Tagen der Browser in den mittleren 1990er Jahren. Dies liegt daran, dass die Benutzer wissen und erwarten, dass dieses Verhalten existiert — wenn Links anders gestylt wären, würde dies viele Menschen verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht stylen sollten. Es bedeutet nur, dass Sie sich nicht zu weit vom erwarteten Verhalten entfernen sollten. Sie sollten zumindest:

- Verwenden Sie Unterstreichungen für Links, aber nicht für andere Dinge. Wenn Sie keine Unterstreichungen für Links verwenden möchten, sollten Sie sie zumindest auf eine andere Weise hervorheben.
- Sie sollten auf irgendeine Weise reagieren, wenn sie überfahren/fokussiert werden, und auf eine leicht andere Weise, wenn sie aktiviert werden.

Die Standardstile können wie folgt deaktiviert/verändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten dies nicht ausschalten, es sei denn, Sie haben einen sehr guten Grund.
- {{cssxref("outline")}} für die Textumrisse. Ein Umriss ist ähnlich wie ein Rahmen. Der einzige Unterschied besteht darin, dass ein Rahmen Platz im Box-Modell einnimmt, ein Umriss jedoch nicht; er liegt einfach über dem Hintergrund. Der Umriss ist eine nützliche Unterstützung für die Zugänglichkeit und sollte nicht entfernt werden, ohne dass eine andere Methode zur Anzeige des fokussierten Links hinzugefügt wird.

> [!NOTE]
> Sie sind nicht auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu stylen — Sie können freie Wahl über die Verwendung beliebiger Eigenschaften haben.

### Einige Links stylen

Nachdem wir uns die Standardzustände im Detail angesehen haben, werfen wir einen Blick auf ein typisches Set von Link-Stilen.

Als erstes schreiben wir unsere leeren Regelsets:

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

Diese Reihenfolge ist wichtig, da die Link-Stile aufeinander aufbauen. Zum Beispiel werden die Stile der ersten Regel auf alle nachfolgenden angewendet. Wenn ein Link aktiviert ist, wird er normalerweise auch überfahren. Wenn Sie sie in der falschen Reihenfolge setzen und die gleichen Eigenschaften in jedem Regelset ändern, funktioniert es nicht wie erwartet. Um sich die Reihenfolge zu merken, könnten Sie ein Gedächtnishilfe verwenden, wie z. B. **L**o**V**e **F**ears **HA**te.

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

Wir stellen auch einige Beispiel-HTML zur Verfügung, auf die das CSS angewendet wird:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Zusammengeführt ergibt dies folgendes Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier gemacht? Dies sieht sicherlich anders aus als das Standard-Styling, bietet jedoch weiterhin eine genügend vertraute Erfahrung für Benutzer, um zu wissen, was vor sich geht:

- Die ersten beiden Regeln sind für diese Diskussion nicht sehr interessant.
- Die dritte Regel verwendet den `a`-Selektor, um den Fokusumriss zu entfernen (der sich ohnehin je nach Browser unterscheidet).
- Als nächstes verwenden wir die `a:link`- und `a:visited`-Selektoren, um einige Farbvariationen bei unbesuchten und besuchten Links festzulegen, sodass sie sich unterscheiden.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, um fokussierte und überfahrene Links ohne Unterstrich und mit unterschiedlichen Hintergrundfarben zu versehen.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert werden, um deutlich zu machen, dass etwas Wichtiges vor sich geht!

### Aktives Lernen: Stylen Sie Ihre eigenen Links

In dieser aktiven Lerneinheit möchten wir, dass Sie unser leeres Regelset verwenden und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Verwenden Sie Ihre Fantasie, lassen Sie es krachen. Wir sind sicher, dass Sie mit etwas Coolerem und ebenso Funktionalem wie unserem obigen Beispiel aufwarten können.

Wenn Sie einen Fehler machen, können Sie es immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_-Button, um das Beispiel einzufügen, das wir oben gezeigt haben.

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

Eine gängige Praxis ist es, Icons auf Links einzufügen, um mehr Hinweise darauf zu geben, auf welche Art von Inhalt der Link verweist. Schauen wir uns ein wirklich einfaches Beispiel an, das ein Icon zu externen Links hinzufügt (Links, die zu anderen Seiten führen). Ein solches Icon sieht normalerweise wie ein kleiner Pfeil aus, der aus einem Kasten zeigt. Für dieses Beispiel verwenden wir das [externe Link-Icon von icons8.com](https://icons8.com/icon/741/external-link).

Schauen wir uns etwas HTML und CSS an, das uns den gewünschten Effekt gibt. Zuerst etwas einfaches HTML zum Stylen:

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

Was passiert hier? Wir überspringen den größten Teil des CSS, da es nur die Informationen enthält, die Sie bereits gesehen haben. Die letzte Regel ist jedoch interessant: Wir verwenden das {{cssxref("::after")}}-Pseudo-Element. Das `0.8rem x 0.8rem` Pseudo-Element wird nach dem Ankertext als Inline-Block eingefügt. Und das Icon wird als {{cssxref("background")}} des Pseudo-Elements gerendert.

Wir haben eine [relative Einheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) `em` verwendet. Damit wird das Icon proportional zur Textgröße des Ankers dimensioniert. Wenn sich die Textgröße des Ankers ändert, passt sich auch die Größe des Icons entsprechend an.

Ein letztes Wort: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) richtig schreiben, sollten Sie nur absolute URLs für externe Links verwenden – es ist effizienter, relative Links zu verwenden, um auf andere Teile Ihrer eigenen Website zu verlinken (wie beim ersten Link). Der Text "http" sollte daher nur in externen Links erscheinen (wie dem zweiten und dritten), und wir können dies mit einem [Attribut-Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors#attribute_selectors) auswählen: `a[href^="http"]` wählt {{htmlelement("a")}}-Elemente, jedoch nur, wenn sie ein [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut mit einem Wert haben, der mit "http" beginnt.

Das war's. Versuchen Sie, den Abschnitt zum aktiven Lernen oben erneut zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie noch nicht mit [Hintergründen](/de/docs/Learn/CSS/Building_blocks) und [responsive Webdesign](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) vertraut sind; diese werden an anderer Stelle erklärt.

## Links als Schaltflächen stylen

Die Tools, die Sie bisher in diesem Artikel erkundet haben, können auch auf andere Weise genutzt werden. Zum Beispiel können Zustände wie Hover verwendet werden, um viele verschiedene Elemente zu stylen, nicht nur Links — Sie könnten den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen stylen wollen.

Zudem werden Links häufig so gestaltet, dass sie in bestimmten Umständen wie Schaltflächen aussehen und sich verhalten. Ein Navigationsmenü einer Website kann als eine Menge von Links formatiert werden, und dieses kann so gestylt werden, dass es wie eine Reihe von Steuerschaltflächen oder Registerkarten aussieht, die dem Benutzer Zugang zu anderen Teilen der Website bieten. Lassen Sie uns erkunden, wie dies funktioniert.

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

Das CSS enthält das Styling für den Container und die Links, die er enthält.

- Die zweite Regel besagt:
  - Der Container ist ein [flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox). Die Elemente, die er enthält — in diesem Fall die Links — werden _flex items_ sein.
  - Der Abstand zwischen den flex items beträgt `0.625%` der Breite des Containers.
- Die dritte Regel stylt die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz im Container nutzen.
  - Als nächstes schalten wir die Standard-{{cssxref("text-decoration")}} und {{cssxref("outline")}} aus — wir wollen diese nicht, weil sie unser Aussehen stören.
  - Die letzten drei Deklarationen dienen dazu, den Text in jedem Link zu zentrieren, die {{cssxref("line-height")}} auf 3 festzulegen, um den Schaltflächen etwas Höhe zu geben (was auch den Vorteil hat, den Text vertikal zu zentrieren) und die Textfarbe auf Schwarz zu setzen.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen alles bereitgestellt, was Sie über Links wissen müssen — vorerst! Der letzte Artikel in unserem Modul zum Textstyling beschreibt, wie Sie [benutzerdefinierte Schriftarten](/de/docs/Learn/CSS/Styling_text/Web_fonts) auf Ihren Websites verwenden (oder Web-Fonts, wie sie besser bekannt sind).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
