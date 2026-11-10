---
title: Links gestalten
slug: Learn_web_development/Core/Text_styling/Styling_links
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

Beim Gestalten von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) ist es wichtig zu verstehen, warum die Standardstile für Links wichtig sind, wie sich Linkzustände mithilfe von Pseudoklassen gestalten lassen und wie Links in häufig verwendeten Oberflächenelementen wie Navigationsmenüs und Tabs eingesetzt werden können. In diesem Artikel sehen wir uns all diese Themen an.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, warum die Standardstile für Links für die Benutzerfreundlichkeit im Web wichtig sind: Sie sind vertraut und helfen Benutzern, Links zu erkennen.</li>
          <li>Linkzustände gestalten: <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Verstehen, warum Linkzustände für die Barrierefreiheit und Benutzerfreundlichkeit notwendig sind.</li>
          <li>Icons in Links einfügen.</li>
          <li>Ein Navigationsmenü mit Listen und Links erstellen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Linkzustände

Zunächst sollten Sie das Konzept der Linkzustände verstehen – die verschiedenen Zustände, in denen sich Links befinden können. Diese lassen sich mit unterschiedlichen [Pseudoklassen](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) gestalten:

- **Link**: Ein Link mit einem Ziel (also nicht nur ein benannter Anker), der mit der Pseudoklasse {{cssxref(":link")}} gestaltet wird.
- **Besucht**: Ein Link, der bereits besucht wurde (und im Browserverlauf vorhanden ist), wird mit der Pseudoklasse {{cssxref(":visited")}} gestaltet.
- **Hover**: Ein Link, über dem sich der Mauszeiger eines Benutzers befindet, wird mit der Pseudoklasse {{cssxref(":hover")}} gestaltet.
- **Fokus**: Ein Link, der den Fokus hat (z. B. weil ein Tastaturbenutzer ihn mit der <kbd>Tab</kbd>-Taste oder auf ähnliche Weise erreicht hat oder weil er programmgesteuert mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) fokussiert wurde), wird mit der Pseudoklasse {{cssxref(":focus")}} gestaltet.
- **Aktiv**: Ein Link, der aktiviert wird (beispielsweise durch Anklicken), wird mit der Pseudoklasse {{cssxref(":active")}} gestaltet.

## Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält. Das CSS vergrößert und zentriert allerdings den Text, damit er besser hervorsticht. Sie können Aussehen und Verhalten der Standardgestaltung im Beispiel mit anderen Links auf dieser Seite vergleichen, auf die weitere CSS-Stile angewendet werden. Standardmäßig haben Links die folgenden Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind violett.
- Wenn Sie den Mauszeiger über einen Link bewegen, wird er zu einem kleinen Handsymbol.
- Fokussierte Links haben eine Umrandung. Sie sollten die Links auf dieser Seite mit der Tastatur fokussieren können, indem Sie die Tab-Taste drücken.
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
> Alle Linkbeispiele auf dieser Seite verweisen auf den Anfang ihres eingebetteten Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht beeinträchtigt werden.

Interessanterweise sind die Standardstile nahezu dieselben wie in den Anfangstagen der Browser Mitte der 1990er-Jahre. Das liegt daran, dass Benutzer dieses Verhalten kennen und erwarten. Würden Links anders gestaltet, könnte das verwirrend sein. Das bedeutet nicht, dass Sie Links überhaupt nicht gestalten sollten. Sie sollten sich nur nicht zu weit vom erwarteten Verhalten entfernen. Zumindest sollten Sie:

- Links unterstreichen, andere Dinge jedoch nicht. Wenn Sie Links nicht unterstreichen möchten, heben Sie sie zumindest auf andere Weise hervor.
- Dafür sorgen, dass sie beim Bewegen des Mauszeigers darüber und beim Fokussieren reagieren und bei der Aktivierung noch einmal etwas anders aussehen.

Die Standardstile lassen sich mit den folgenden CSS-Eigenschaften deaktivieren oder ändern:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für die Darstellung des Mauszeigers – diese sollten Sie nur aus einem sehr guten Grund deaktivieren.
- {{cssxref("outline")}} für die Umrandung des Textes. Eine `outline` ähnelt einem Rahmen. Der einzige Unterschied besteht darin, dass ein Rahmen Platz in der Box beansprucht, eine `outline` dagegen nicht: Sie liegt über dem Hintergrund. Die `outline` ist eine nützliche Hilfe für die Barrierefreiheit und sollte nicht entfernt werden, ohne den fokussierten Link auf andere Weise kenntlich zu machen.

> [!NOTE]
> Sie sind bei der Gestaltung Ihrer Links nicht auf die oben genannten Eigenschaften beschränkt – Sie können beliebige Eigenschaften verwenden.

## Links gestalten

Nachdem wir die Standardzustände genauer betrachtet haben, sehen wir uns nun eine typische Zusammenstellung von Linkstilen an.

Zunächst schreiben wir unsere leeren Regelsätze:

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

Diese Reihenfolge ist wichtig, da die Linkstile aufeinander aufbauen. Beispielsweise gelten die Stile der ersten Regel auch für alle nachfolgenden Zustände. Wenn ein Link aktiviert wird, befindet sich meist auch der Mauszeiger darüber. Wenn Sie die Regeln in die falsche Reihenfolge bringen und in jedem Regelsatz dieselben Eigenschaften ändern, funktioniert das Ergebnis nicht wie erwartet. Um sich die Reihenfolge zu merken, können Sie die Eselsbrücke **L**o**V**e **F**ears **HA**te verwenden.

Fügen wir nun weitere Angaben hinzu, um die Links passend zu gestalten:

```css live-sample___styling-links
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

Außerdem stellen wir etwas Beispiel-HTML bereit, auf das wir das CSS anwenden:

```html live-sample___styling-links
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Beides zusammen ergibt dieses Ergebnis:

{{ EmbedLiveSample('styling-links', '100%', 200) }}

Was haben wir hier also getan? Das Ergebnis sieht deutlich anders aus als die Standardgestaltung, bietet Benutzern aber immer noch ein vertrautes Erscheinungsbild, sodass sie erkennen können, was passiert:

- Die ersten beiden Regeln sind für diese Betrachtung nicht besonders interessant.
- Die dritte Regel verwendet den Selektor `a`, um die Fokusumrandung zu entfernen (die sich ohnehin je nach Browser unterscheidet).
- Anschließend verwenden wir die Selektoren `a:link` und `a:visited`, um nicht besuchten und besuchten Links unterschiedliche Farben zuzuweisen.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, damit fokussierte Links und Links unter dem Mauszeiger nicht unterstrichen sind und andere Hintergrundfarben erhalten.
- Schließlich sorgt `a:active` während der Aktivierung für ein umgekehrtes Farbschema der Links. So wird deutlich, dass gerade etwas Wichtiges geschieht!

## Gestalten Sie Ihre eigenen Links

Für diese Aufgabe möchten wir Sie bitten, unseren leeren Regelsätzen eigene Deklarationen hinzuzufügen, damit die Links richtig gut aussehen. Lassen Sie Ihrer Fantasie freien Lauf. Wir sind sicher, dass Sie etwas gestalten können, das noch besser aussieht und genauso funktional ist wie unser obiges Beispiel.

1. Klicken Sie im folgenden Codeblock auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Geben Sie den Links eine Grundgestaltung, die immer angewendet wird. Sie müssen sich nicht auf die Textfarbe beschränken, sollten aber sicherstellen, dass die Links weiterhin als solche erkennbar sind.
3. Geben Sie _besuchten_ Links eine etwas andere Farbe als die von Ihnen festgelegte Grundgestaltung.
4. Geben Sie Links in den Zuständen _Fokus_ und _Hover_ einen eigenen Stil, der sie gegenüber anderen Links hervorhebt. Entfernen Sie außerdem die standardmäßige Unterstreichung, wenn Links fokussiert sind oder sich der Mauszeiger darüber befindet.
5. Geben Sie dem Zustand _Aktiv_ ebenfalls einen anderen Stil.

Wenn Sie einen Fehler machen, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. Falls Sie nicht weiterkommen, finden Sie unter der Beispielausgabe eine mögliche Lösung.

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

## Icons in Links einfügen

Häufig werden Links mit Icons versehen, die anzeigen, auf welche Art von Inhalt der Link verweist. Sehen wir uns ein einfaches Beispiel an, das externen Links (Links zu anderen Websites) ein Icon hinzufügt. Icons für externe Links zeigen üblicherweise einen Pfeil, der aus einem Kasten herausweist. Für dieses Beispiel verwenden wir das [Icon für externe Links von icons8.com](https://icons8.com/icon/741/external-link).

Zunächst etwas einfaches HTML, das gestaltet werden soll:

```html-nolint
<p>
  For more information on the weather, visit our <a href="#">weather page</a>,
  look at <a href="https://en.wikipedia.org/">weather on Wikipedia</a>, or check
  out
  <a href="https://www.nationalgeographic.org/topics/resource-library-weather/">
    weather on National Geographic</a>.
</p>
```

Mit dem folgenden CSS erzielen wir den gewünschten Effekt:

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

Was passiert hier? Den Großteil des CSS überspringen wir, da es den vorherigen Beispielen entspricht. Die letzte Regel ist jedoch interessant: Wir verwenden den Pseudoelement-Selektor {{cssxref("::after")}}. Das Pseudoelement mit den Abmessungen `0.8em x 0.8em` wird nach dem Linktext als Inline-Block gerendert. Das Icon, auf das seine Eigenschaft {{cssxref("background-image")}} verweist, wird im Hintergrund des Pseudoelements platziert. Außerdem haben wir mit {{cssxref("margin-left")}} etwas Abstand zwischen dem Icon und dem davorstehenden Wort geschaffen.

Wir haben eine [relative Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) verwendet: `em`. Dadurch wird die Größe des Icons im Verhältnis zur Textgröße des Links festgelegt. Ändert sich die Textgröße des Links, passt sich auch die Größe des Icons entsprechend an.

Eine letzte Frage: Wie haben wir nur die externen Links ausgewählt? Wenn Sie Ihre [HTML-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) richtig schreiben, sollten Sie absolute URLs nur für externe Links verwenden. Für Links zu anderen Bereichen Ihrer eigenen Website sind relative Links effizienter (wie beim ersten Link). Der Text „http“ sollte daher nur in externen Links vorkommen (wie beim zweiten und dritten Link). Dies können wir mit einem [Attributselektor](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) nutzen: `a[href^="http"]` wählt {{htmlelement("a")}}-Elemente aus, aber nur, wenn sie ein [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut haben, dessen Wert mit „http“ beginnt.

Das war’s. Kehren Sie zur obigen Aufgabe zurück und probieren Sie diese neue Technik aus!

> [!NOTE]
> Keine Sorge, wenn Sie mit [Hintergründen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) und [responsivem Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) noch nicht vertraut sind; diese Themen werden an anderer Stelle erklärt.

## Links als Schaltflächen gestalten

Die Werkzeuge, die Sie bisher in diesem Artikel kennengelernt haben, lassen sich auch anderweitig einsetzen. Zustände wie Hover können beispielsweise zur Gestaltung vieler verschiedener Elemente verwendet werden, nicht nur von Links. Vielleicht möchten Sie auch Absätze, Listenelemente oder andere Dinge gestalten, wenn sich der Mauszeiger darüber befindet.

Außerdem werden Links häufig so gestaltet, dass sie wie Schaltflächen aussehen. Ein Navigationsmenü einer Website kann als Gruppe von Links ausgezeichnet und so gestaltet werden, dass es wie eine Reihe von Schaltflächen oder Tabs aussieht, über die Benutzer andere Bereiche der Website erreichen. Sehen wir uns an, wie das funktioniert.

Zunächst etwas HTML:

```html
<nav class="container">
  <a href="#">Home</a>
  <a href="#">Pizza</a>
  <a href="#">Music</a>
  <a href="#">Wombats</a>
  <a href="#">Finland</a>
</nav>
```

Und nun das CSS:

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

Damit erhalten wir das folgende Ergebnis:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}}-Element mit der Klasse `"container"`. Das `<nav>` enthält unsere Links.

Das CSS enthält die Gestaltung für den Container und die darin enthaltenen Links.

- Die zweite Regel besagt:
  - Der Container ist eine [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Die darin enthaltenen Elemente – in diesem Fall die Links – werden zu _Flex-Elementen_.
  - Der Abstand zwischen den Flex-Elementen beträgt `0.625%` der Containerbreite.
- Die dritte Regel gestaltet die Links:
  - Die erste Deklaration, `flex: 1`, bewirkt, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Platz im Container nutzen.
  - Anschließend deaktivieren wir die standardmäßigen Eigenschaften {{cssxref("text-decoration")}} und {{cssxref("outline")}} – sie sollen das Erscheinungsbild nicht beeinträchtigen.
  - Die letzten drei Deklarationen zentrieren den Text in jedem Link, setzen {{cssxref("line-height")}} auf 3, um den Schaltflächen etwas Höhe zu geben (was zugleich den Text vertikal zentriert), und setzen die Textfarbe auf Schwarz.

## Zusammenfassung

Wir hoffen, dass Ihnen dieser Artikel alles vermittelt hat, was Sie vorerst über Links wissen müssen! Der letzte Artikel unseres Moduls zur Textgestaltung erklärt, wie Sie eigene Webfonts auf Ihren Websites verwenden.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
