---
title: Stilierung von Links
slug: Learn_web_development/Core/Text_styling/Styling_links
l10n:
  sourceCommit: e47ecbb9beee1f7f6b22376686be75b15bb73638
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

Beim Stilieren von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) ist es wichtig zu verstehen, warum Standardlink-Stile wichtig sind, wie man Pseudoklassen effektiv verwendet, um Linkzustände zu stilieren, und wie man Links in häufig verwendeten Oberflächenmerkmalen wie Navigationsmenüs und Registerkarten stilisiert. Wir werden all diese Themen in diesem Artikel betrachten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Stilierungsgrundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, warum Standardlink-Stile wichtig für die Benutzerfreundlichkeit im Web sind — sie sind vertraut und helfen Benutzern, Links zu erkennen.</li>
          <li>Stilierung von Link-Zuständen: <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Verstehen, warum Link-Zustände für Zugänglichkeit und Benutzerfreundlichkeit notwendig sind.</li>
          <li>Einschließen von Symbolen auf Links.</li>
          <li>Erstellen eines Navigationsmenüs mit Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Link-Zustände

Das erste, was man verstehen muss, ist das Konzept der Link-Zustände — verschiedene Zustände, in denen Links existieren können. Diese können mit verschiedenen [Pseudoklassen](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) gestylt werden:

- **Link**: Ein Link, der ein Ziel hat (d.h. nicht nur ein benannter Anker), gestylt mit der {{cssxref(":link")}}-Pseudoklasse.
- **Visited**: Ein Link, der bereits besucht wurde (existiert im Verlauf des Browsers), gestylt mit der {{cssxref(":visited")}}-Pseudoklasse.
- **Hover**: Ein Link, über den mit dem Mauszeiger eines Benutzers geschwebt wird, gestylt mit der {{cssxref(":hover")}}-Pseudoklasse.
- **Focus**: Ein Link, der fokussiert ist (z.B. durch eine Tastaturbenutzer mit der <kbd>Tab</kbd>-Taste oder ähnlich bewegt, oder programmgesteuert mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) fokussiert) — dieser wird mit der {{cssxref(":focus")}}-Pseudoklasse gestylt.
- **Active**: Ein Link, der aktiviert wird (beispielsweise angeklickt wird), gestylt mit der {{cssxref(":active")}}-Pseudoklasse.

## Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält; obwohl der CSS den Text vergrößert und zentriert, um ihn mehr hervorzuheben. Sie können das Aussehen und Verhalten der Standardstile im Beispiel mit dem Aussehen und Verhalten anderer Links auf dieser Seite vergleichen, auf die mehr CSS-Stile angewendet wurden. Standardlinks haben die folgenden Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Wenn über einen Link geschwebt wird, ändert sich der Mauszeiger zu einem kleinen Hand-Symbol.
- Fokussierte Links haben einen Umriss — Sie sollten in der Lage sein, die Links auf dieser Seite mit der Tastatur zu fokussieren, indem Sie die Tabulatortaste drücken.
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

Interessanterweise sind diese Standardstile fast die gleichen wie in den Anfängen der Browser in den frühen 1990er Jahren. Dies liegt daran, dass Benutzer dieses Verhalten kennen und erwarten — wenn Links anders gestylt würden, würde das viele Menschen verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht stilisieren sollten. Es bedeutet einfach, dass Sie sich nicht zu weit vom erwarteten Verhalten entfernen sollten. Sie sollten mindestens:

- Verwenden Sie Unterstreichungen für Links, aber nicht für andere Dinge. Wenn Sie Links nicht unterstreichen wollen, heben Sie sie zumindest auf eine andere Weise hervor.
- Lassen Sie sie in irgendeiner Weise reagieren, wenn sie überfahren/fokussiert werden, und auf eine leicht andere Weise, wenn sie aktiviert werden.

Die Standardstile können mit den folgenden CSS-Eigenschaften ausgeschaltet/geändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten dies nicht ausschalten, es sei denn, Sie haben einen sehr guten Grund.
- {{cssxref("outline")}} für den Textumriss. Ein Umriss ist ähnlich wie ein Rahmen. Der einzige Unterschied besteht darin, dass ein Rahmen im Box-Modell Platz einnimmt und ein Umriss nicht; er sitzt einfach über dem Hintergrund. Der Umriss ist ein nützliches Hilfsmittel für die Barrierefreiheit und sollte nicht entfernt werden, ohne eine andere Methode zur Anzeige des fokussierten Links hinzuzufügen.

> [!NOTE]
> Sie sind nicht auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu stilisieren — Sie können beliebige Eigenschaften verwenden.

## Stilierung von Links

Nachdem wir uns nun die Standardzustände im Detail angesehen haben, betrachten wir nun eine typische Reihe von Link-Stilen.

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

Diese Reihenfolge ist wichtig, da Link-Stile aufeinander aufbauen. Zum Beispiel gelten die Stile in der ersten Regel für alle nachfolgenden. Wenn ein Link aktiviert wird, wird er normalerweise auch überfahren. Wenn Sie diese in der falschen Reihenfolge anordnen und in jedem Regelset die gleichen Eigenschaften ändern, funktioniert es nicht wie erwartet. Um sich die Reihenfolge zu merken, können Sie ein Akronym wie **L**o**V**e **F**ears **HA**te verwenden.

Nun fügen wir etwas mehr Informationen hinzu, um dies richtig zu stilisieren:

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

Wir stellen auch einige Beispiel-HTML zur Verfügung, auf das der CSS angewendet wird:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Das Zusammenführen der beiden ergibt folgendes Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier gemacht? Dies sieht sicherlich anders aus als das Standard-Styling, bietet aber dennoch eine ausreichend vertraute Erfahrung, damit Benutzer wissen, was passiert:

- Die ersten beiden Regeln sind in dieser Diskussion nicht so interessant.
- Die dritte Regel verwendet den `a`-Selektor, um den Fokusumriss zu entfernen (welcher sich ohnehin zwischen den Browsern unterscheidet).
- Als nächstes verwenden wir die Selektoren `a:link` und `a:visited`, um ein paar Farbvariationen auf nicht besuchte und besuchte Links anzuwenden, damit sie sich unterscheiden.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, um fokussierte und überfahrene Links ohne Unterstreichungen und mit unterschiedlichen Hintergrundfarben zu versehen.
- Schließlich wird `a:active` verwendet, um den Links ein invertiertes Farbschema zu geben, während sie aktiviert werden, um klarzumachen, dass etwas Wichtiges passiert!

## Stylen Sie Ihre eigenen Links

Für diese Aufgabe möchten wir, dass Sie unser leeres Regelset nehmen und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Nutzen Sie Ihre Fantasie, lassen Sie Ihrer Kreativität freien Lauf. Wir sind sicher, dass Sie mit etwas Cooleres und genauso Funktionalem wie unser obiges Beispiel aufwarten können.

1. Klicken Sie auf **"Play"** im Code-Block unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Geben Sie den Links ein Standardstyling, das jederzeit auf sie angewendet wird. Sie müssen sich nicht nur auf die Textfarbe beschränken, aber stellen Sie sicher, dass die Links weiterhin als Links erkennbar sind.
3. Geben Sie _besuchten_ Links eine leicht andere Farbe als die von Ihnen festgelegten Standard-Links-Stile.
4. Verleihen Sie den Fokus- und Hover-Zuständen eine ausgeprägte Stilrichtung, die sie gegenüber anderen Links hervorhebt. Entfernen Sie auch die Standard-Unterstreichung, wenn Links fokussiert/überfahren werden.
5. Geben Sie dem _aktiven_ Zustand wieder einen anderen Stil.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie eine Beispiel-Lösung unter dem Beispiel-Ausgang anzeigen.

```html-nolint live-sample___link_styling
<p>
  There are several browsers available, such as
  <a href="https://www.mozilla.org/firefox/new/" target="_blank">Mozilla Firefox</a>,
  <a href="https://www.google.co.uk/chrome/" target="_blank">Google Chrome</a>, and
  <a href="https://www.microsoft.com/edge" target="_blank">Microsoft Edge</a>.
</p>
```

```css-nolint hidden live-sample___link_styling
p {
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 1.4;
}

```

```css live-sample___link_styling
a {
}

a:visited {
}

a:focus,
a:hover {
}

a:active {
}
```

{{ EmbedLiveSample('link_styling', "100%", 100) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges CSS könnte so aussehen:

```css
a {
  outline-color: transparent;
  padding: 2px 1px 0;
  color: #265301;
}

a:visited {
  color: #437a16;
}

a:hover,
a:focus {
  background: #bae498;
  text-decoration: none;
}

a:active {
  background: #265301;
  color: #cdfeaa;
}
```

</details>

## Einbinden von Symbolen auf Links

Eine gängige Praxis ist das Hinzufügen von Symbolen auf Links, um einen besseren Hinweis darauf zu geben, zu welcher Art von Inhalt der Link führt. Schauen wir uns ein wirklich einfaches Beispiel an, das ein Symbol für externe Links hinzufügt (Links, die zu anderen Seiten führen). Ein solches Symbol sieht normalerweise aus wie ein kleiner Pfeil, der aus einem Kasten zeigt. Für dieses Beispiel verwenden wir [externes Link-Symbol von icons8.com](https://icons8.com/icon/741/external-link).

Sehen wir uns etwas HTML und CSS an, das uns den gewünschten Effekt verschafft. Zuerst etwas einfaches HTML zum Stilisieren:

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

Was geschieht hier? Wir überspringen den Großteil des CSS, da es sich um die gleichen Informationen handelt, die Sie bereits gesehen haben. Die letzte Regel ist jedoch interessant: wir verwenden {{cssxref("::after")}}-Pseudo-Element. Das `0.8rem x 0.8rem` Pseudo-Element wird nach dem Ankertyp als Inline-Block eingefügt. Und das Symbol wird als {{cssxref("background")}} des Pseudo-Elements gerendert.

Wir haben eine [relative Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) `em` verwendet. Diese passt die Größe des Symbols proportional zur Textgröße des Ankers an. Wenn sich die Textgröße des Ankers ändert, passt sich die Symbolgröße entsprechend an.

Ein letztes Wort: Wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) richtig schreiben, sollten Sie nur absolute URLs für externe Links verwenden — es ist effizienter, relative Links zu verwenden, um auf andere Teile Ihrer eigenen Seite zu verlinken (wie beim ersten Link). Der Text "http" sollte daher nur in externen Links auftauchen (wie beim zweiten und dritten), und wir können dies mit einem [Attributselektor](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) auswählen: `a[href^="http"]` wählt {{htmlelement("a")}}-Elemente aus, jedoch nur, wenn sie ein [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut mit einem Wert haben, der mit "http" beginnt.

Das war's. Versuchen Sie, die Aufgabenabschnitt oben erneut zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie noch nicht mit [Hintergründen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) und [responsivem Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) vertraut sind; diese werden an anderer Stelle erklärt.

## Links als Schaltflächen stilisieren

Die Werkzeuge, die Sie bisher in diesem Artikel erkundet haben, können auch in anderer Weise verwendet werden. Zum Beispiel können Zustände wie Hover verwendet werden, um viele verschiedene Elemente zu stilisieren, nicht nur Links — Sie könnten den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen stilisieren.

Außerdem werden Links in bestimmten Umständen häufig gestylt, um wie Schaltflächen auszusehen und sich zu verhalten. Ein Webseiten-Navigationsmenü kann als eine Gruppe von Links markiert werden, und diese kann gestylt werden, um wie eine Gruppe von Steuerknöpfen oder Registerkarten auszusehen, die dem Benutzer den Zugriff auf andere Teile der Seite ermöglichen. Sehen wir uns an, wie.

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

Das HTML definiert ein {{HTMLElement("nav")}}-Element mit einer `"container"`-Klasse. Das `<nav>` enthält unsere Links.

Das CSS enthält das Styling für den Container und die darin enthaltenen Links.

- Die zweite Regel sagt:
  - Der Container ist ein [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Die Elemente, die es enthält — in diesem Fall die Links — werden _Flex-Elemente_ sein.
  - Der Abstand zwischen den Flex-Elementen beträgt `0.625%` der Breite des Containers.
- Die dritte Regel stilisiert die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz im Container nutzen.
  - Als nächstes schalten wir die Standard-{{cssxref("text-decoration")}} und {{cssxref("outline")}} aus — wir wollen nicht, dass sie unser Aussehen beeinträchtigen.
  - Die letzten drei Deklarationen dienen dazu, den Text innerhalb jedes Links zu zentrieren, die {{cssxref("line-height")}} auf 3 zu setzen, um den Schaltflächen etwas Höhe zu verleihen (was auch den Vorteil hat, den Text vertikal zu zentrieren) und die Textfarbe auf Schwarz zu setzen.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen alles vermittelt, was Sie im Moment über Links wissen müssen! Der letzte Artikel in unserem Modul zur Textstilisierung beschreibt, wie Sie benutzerdefinierte Schriftarten auf Ihren Webseiten verwenden können (oder Webfonts, wie sie besser bekannt sind).

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
