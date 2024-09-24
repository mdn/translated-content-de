---
title: Links stilisieren
slug: Learn/CSS/Styling_text/Styling_links
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

Beim Stilisieren von [Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) ist es wichtig zu verstehen, wie man Pseudoklassen effektiv nutzt, um deren Zustände zu gestalten. Außerdem sollte man wissen, wie man Links für den Einsatz in häufig verwendeten Benutzeroberflächenfunktionen, deren Inhalt variiert, wie z.B. Navigationsmenüs und Tabs, stilisiert. In diesem Artikel werden wir beide Themen behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Grundlagen von CSS (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS-Text- und Schriftgrundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Link-Zustände stilisiert und wie man Links effektiv in
        allgemeinen UI-Funktionen wie Navigationsmenüs verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Schauen wir uns einige Links an

Wir haben uns angesehen, wie Links gemäß den Best Practices in Ihrem HTML implementiert werden können, in [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks). In diesem Artikel bauen wir auf diesem Wissen auf und zeigen Ihnen die Best Practices für ihre Stilgestaltung.

### Link-Zustände

Das erste, was man verstehen muss, ist das Konzept der Link-Zustände — verschiedene Zustände, in denen sich Links befinden können. Diese können mit unterschiedlichen [Pseudoklassen](/de/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes_and_pseudo-elements) gestaltet werden:

- **Link**: Ein Link, der ein Ziel hat (d.h. nicht nur ein benannter Anker), gestaltet mit der {{cssxref(":link")}} Pseudoklasse.
- **Visited**: Ein Link, der bereits besucht wurde (im Browserverlauf existiert), gestaltet mit der {{cssxref(":visited")}} Pseudoklasse.
- **Hover**: Ein Link, über den mit dem Mauszeiger eines Benutzers geschwebt wird, gestaltet mit der {{cssxref(":hover")}} Pseudoklasse.
- **Focus**: Ein Link, der fokussiert ist (z.B. von einem Keyboardnutzer mit der

  <kbd>Tab</kbd>

  -Taste oder etwas Ähnlichem erreicht, oder programmatisch mit {{domxref("HTMLElement.focus()")}} fokussiert) — dies wird mit der {{cssxref(":focus")}} Pseudoklasse gestaltet.

- **Active**: Ein Link, der aktiviert ist (z.B. angeklickt wird), gestaltet mit der {{cssxref(":active")}} Pseudoklasse.

### Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält; obwohl das CSS den Text vergrößert und zentriert, um ihn deutlicher hervorzuheben. Sie können das Aussehen und Verhalten der Standardstilgestaltung im Beispiel mit dem Aussehen und Verhalten anderer Links auf dieser Seite vergleichen, bei denen mehr CSS-Stile angewendet wurden. Standard-Links haben folgende Eigenschaften:

- Links sind unterstrichen.
- Unbesuchte Links sind blau.
- Besuchte Links sind violett.
- Wenn man mit der Maus über einen Link schwebt, ändert sich der Mauszeiger zu einem kleinen Hand-Symbol.
- Fokussierte Links haben einen Umriss — Sie sollten die Links auf dieser Seite mit der Tastatur fokussieren können, indem Sie die Tab-Taste drücken.

- Aktive Links sind rot. Versuchen Sie, die Maustaste auf dem Link gedrückt zu halten, wenn Sie darauf klicken.

```html
<p><a href="#">Ein einfacher Link</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('Default_styles', '100%', 130) }}

> [!NOTE]
> Alle Linkbeispiele auf dieser Seite verlinken zum oberen Ende ihres Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht kaputtgehen.

Interessanterweise sind diese Standardstile fast identisch mit denen aus den frühen Browser-Zeiten in den 1990er Jahren. Der Grund dafür ist, dass die Benutzer dieses Verhalten kennen und erwarten — wenn Links anders gestaltet wären, würde das viele Menschen verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht gestalten sollten. Es bedeutet nur, dass Sie sich nicht zu weit vom erwarteten Verhalten entfernen sollten. Sie sollten zumindest:

- Verwenden Sie Unterstreichungen für Links, aber nicht für andere Dinge. Wenn Sie Links nicht unterstreichen möchten, heben Sie sie zumindest auf eine andere Weise hervor.
- Lassen Sie sie auf irgendeine Weise reagieren, wenn sie überfahren/fokussiert werden, und auf eine leicht andere Weise, wenn sie aktiviert werden.

Die Standardstile können mit den folgenden CSS-Eigenschaften deaktiviert/geändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten dies nur deaktivieren, wenn Sie einen sehr guten Grund dafür haben.
- {{cssxref("outline")}} für den Textumriss. Ein Umriss ist ähnlich wie ein Rahmen. Der einzige Unterschied besteht darin, dass ein Rahmen Platz im Block einnimmt und ein Umriss nicht; er sitzt einfach über dem Hintergrund. Der Umriss ist eine nützliche Unterstützung für die Barrierefreiheit und sollte nicht entfernt werden, ohne eine andere Methode hinzuzufügen, um den fokussierten Link anzuzeigen.

> [!NOTE]
> Sie sind nicht nur auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu gestalten — Sie können beliebige Eigenschaften verwenden.

### Einige Links stilisieren

Nachdem wir uns die Standardzustände im Detail angesehen haben, schauen wir uns nun eine typische Reihe von Link-Stilen an.

Zuerst werden wir unsere leeren Regelsätze aufschreiben:

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

Diese Reihenfolge ist wichtig, da Linkstile aufeinander aufbauen. Zum Beispiel werden die Stile in der ersten Regel auf alle nachfolgenden angewendet. Wenn ein Link aktiviert wird, schwebt er normalerweise auch darüber. Wenn Sie diese in der falschen Reihenfolge setzen und in jedem Regelsatz dieselben Eigenschaften ändern, werden die Dinge nicht wie erwartet funktionieren. Um sich die Reihenfolge zu merken, können Sie ein Mnemonic wie **L**o**V**e **F**ears **HA**te verwenden.

Fügen wir nun einige weitere Informationen hinzu, um dies richtig zu stylen:

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

Wir stellen auch einige Beispiel-HTML zur Verfügung, um das CSS anzuwenden:

```html
<p>
  Es gibt mehrere verfügbare Browser, wie <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a> und <a href="#">Microsoft Edge</a>.
</p>
```

Das Zusammenfügen der beiden ergibt dieses Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier getan? Dies sieht sicherlich anders aus als die Standardgestaltung, bietet den Benutzern jedoch trotzdem eine vertraute genug Erfahrung, um zu wissen, was passiert:

- Die ersten beiden Regeln sind nicht von großem Interesse für diese Diskussion.
- Die dritte Regel verwendet den `a`-Selektor, um den Fokusumriss zu entfernen (dieser variiert ohnehin zwischen den Browsern).
- Als Nächstes verwenden wir die `a:link` und `a:visited` Selektoren, um ein paar Farbvariationen auf unbesuchten und besuchten Links festzulegen, damit sie sich unterscheiden.
- Die folgenden zwei Regeln verwenden `a:focus` und `a:hover`, um fokussierten und gehobenen Links kein Unterstrich und unterschiedliche Hintergrundfarben zu geben.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert werden, um klar zu machen, dass etwas Wichtiges passiert!

### Aktives Lernen: Stilisieren Sie Ihre eigenen Links

In dieser aktiven Lerneinheit möchten wir, dass Sie unser leeres Set von Regeln nehmen und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Verwenden Sie Ihre Fantasie, lassen Sie Ihrer Kreativität freien Lauf. Wir sind sicher, dass Sie etwas Coolerem und genauso Funktionalem wie unser obiges Beispiel finden können.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um das Beispiel einzufügen, das wir oben gezeigt haben.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p>Es gibt mehrere verfügbare Browser, wie <a href="#">Mozilla
 Firefox</a>, <a href="#">Google Chrome</a>, und
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

## Einfügen von Symbolen auf Links

Eine übliche Praxis ist es, Symbole auf Links hinzuzufügen, um besser anzuzeigen, welche Art von Inhalt der Link anzeigt. Lassen Sie uns ein wirklich einfaches Beispiel betrachten, das ein Symbol zu externen Links (Links, die zu anderen Seiten führen) hinzufügt. Ein solches Symbol sieht normalerweise wie ein kleiner Pfeil aus, der aus einem Kasten zeigt. Für dieses Beispiel verwenden wir das [Externe Link-Symbol von icons8.com](https://icons8.com/icon/741/external-link).

Schauen wir uns etwas HTML und CSS an, das uns den gewünschten Effekt gibt. Zuerst ein einfaches HTML, das wir stilisieren möchten:

```html-nolint
<p>
  Für weitere Informationen über das Wetter besuchen Sie unsere <a href="#">Wetterseite</a>,
  sehen Sie sich <a href="https://en.wikipedia.org/">Wetter auf Wikipedia</a> an oder schauen
  Sie sich
  <a href="https://www.nationalgeographic.org/topics/resource-library-weather/">
    Wetter auf National Geographic</a> an.
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

Was passiert hier? Wir überspringen den größten Teil des CSS, da es dieselben Informationen enthält, die Sie bereits gesehen haben. Die letzte Regel ist jedoch interessant: Wir verwenden {{cssxref("::after")}} Pseudo-Element. Das `0.8rem x 0.8rem` Pseudo-Element wird nach dem Ankertext als Inline-Block eingefügt. Und das Symbol wird als {{cssxref("background")}} des Pseudo-Elements gerendert.

Wir haben eine [relative Einheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) `em` verwendet. Sie passt die Größe des Symbols proportional zur Textgröße des Ankers an. Wenn sich die Textgröße des Ankers ändert, passt sich auch die Symbolgröße entsprechend an.

Ein letztes Wort: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) korrekt schreiben, sollten Sie nur absolute URLs für externe Links verwenden — es ist effizienter, relative Links zu verwenden, um auf andere Teile Ihrer eigenen Site zu verlinken (wie beim ersten Link). Der Text "http" sollte daher nur in externen Links erscheinen (wie beim zweiten und dritten Link), und wir können dies mit einem [Attributselektor](/de/docs/Learn/CSS/Building_blocks/Selectors#attribute_selectors) auswählen: `a[href^="http"]` selektiert {{htmlelement("a")}} Elemente, aber nur, wenn sie ein [`href`](/de/docs/Web/HTML/Element/a#href) Attribut mit einem Wert haben, der mit "http" beginnt.

Das war's. Versuchen Sie, den aktiven Lernabschnitt oben noch einmal zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie noch nicht mit [Hintergründen](/de/docs/Learn/CSS/Building_blocks) und [responsivem Webdesign](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) vertraut sind; diese werden an anderen Stellen erklärt.

## Links als Schaltflächen stilisieren

Die Werkzeuge, die Sie in diesem Artikel bisher erkundet haben, können auch auf andere Weise verwendet werden. Zum Beispiel können Zustände wie Hover verwendet werden, um viele verschiedene Elemente zu stilisieren, nicht nur Links — Sie könnten den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen stilisieren.

Außerdem werden Links recht häufig so gestaltet, dass sie in bestimmten Situationen wie Schaltflächen aussehen und sich verhalten. Ein Navigationsmenü auf einer Website kann als eine Gruppe von Links markiert werden, und dies kann so gestaltet werden, dass es wie eine Gruppe von Steuerungsknöpfen oder Tabs aussieht, die dem Benutzer Zugriff auf andere Teile der Seite bieten. Lassen Sie uns erkunden, wie.

Zuerst etwas HTML:

```html
<nav class="container">
  <a href="#">Home</a>
  <a href="#">Pizza</a>
  <a href="#">Musik</a>
  <a href="#">Wombats</a>
  <a href="#">Finnland</a>
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

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}} Element mit einer `"container"` Klasse. Das `<nav>` enthält unsere Links.

Das CSS umfasst das Styling für den Container und die darin enthaltenen Links.

- Die zweite Regel besagt:
  - Der Container ist ein [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox). Die darin enthaltenen Elemente — in diesem Fall die Links — werden _Flex-Elemente_ sein.
  - Der Abstand zwischen den Flex-Elementen beträgt `0.625%` der Containerbreite.
- Die dritte Regel gestaltet die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz im Container nutzen.
  - Als Nächstes schalten wir die Standard-{{cssxref("text-decoration")}} und {{cssxref("outline")}} aus — wir möchten nicht, dass diese unser Aussehen stören.
  - Die letzten drei Deklarationen zentrieren den Text in jedem Link, setzen die {{cssxref("line-height")}} auf 3, um den Schaltflächen etwas Höhe zu geben (was auch den Vorteil hat, den Text vertikal zu zentrieren), und setzen die Textfarbe auf Schwarz.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Sie mit allem versorgt, was Sie derzeit über Links wissen müssen! Der letzte Artikel in unserem Styling-Text-Modul beschreibt, wie Sie [benutzerdefinierte Schriften](/de/docs/Learn/CSS/Styling_text/Web_fonts) auf Ihren Websites verwenden können (oder Web-Schriften, wie sie besser bekannt sind).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
