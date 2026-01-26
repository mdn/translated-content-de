---
title: Links stylen
slug: Learn_web_development/Core/Text_styling/Styling_links
l10n:
  sourceCommit: 19c36d7464c349372e38f9b39bf3e7de73687397
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

Beim Stylen von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) ist es wichtig zu verstehen, warum Standardlink-Stile wichtig sind, wie man Pseudoklassen effektiv verwendet, um Linkzustände zu stylen, und wie man Links in häufigen, unterschiedlich gestalteten Benutzeroberflächenelementen wie Navigationsmenüs und Tabs stylt. Wir werden all diese Themen in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, warum Standardlink-Stile für die Benutzerfreundlichkeit im Web wichtig sind — sie sind bekannt und helfen den Nutzern, Links zu erkennen.</li>
          <li>Styling von Linkzuständen: <code>:hover</code>, <code>:focus</code>, <code>:visited</code>, und <code>:active</code>.</li>
          <li>Verstehen, warum Linkzustände für Barrierefreiheit und Benutzerfreundlichkeit notwendig sind.</li>
          <li>Einfügen von Icons auf Links.</li>
          <li>Erstellen eines Navigationsmenüs mit Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Linkzustände

Das Erste, was man verstehen sollte, ist das Konzept der Linkzustände — verschiedene Zustände, in denen sich Links befinden können. Diese können mit verschiedenen [Pseudoklassen](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) gestylt werden:

- **Link**: Ein Link, der ein Ziel hat (d.h. nicht nur ein benannter Anker), das mit der {{cssxref(":link")}} Pseudoklasse gestylt wird.
- **Besucht**: Ein Link, der bereits besucht wurde (im Browserverlauf vorhanden), das mit der {{cssxref(":visited")}} Pseudoklasse gestylt wird.
- **Hover**: Ein Link, über den der Mauszeiger eines Benutzers schwebt, das mit der {{cssxref(":hover")}} Pseudoklasse gestylt wird.
- **Fokus**: Ein Link, der fokussiert ist (z.B. durch einen Tastaturnutzer mit der <kbd>Tab</kbd>-Taste oder Ähnlichem erreicht oder programmatisch fokussiert mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)) — das wird mit der {{cssxref(":focus")}} Pseudoklasse gestylt.
- **Aktiv**: Ein Link, der aktiviert ist (zum Beispiel angeklickt wird), das mit der {{cssxref(":active")}} Pseudoklasse gestylt wird.

## Standardstile

Das folgende Beispiel zeigt, wie ein Link standardmäßig aussieht und sich verhält, obwohl der CSS den Text vergrößert und zentriert, um ihn hervorzuheben. Sie können das Aussehen und Verhalten des Standardstylings im Beispiel mit dem anderer Links auf dieser Seite vergleichen, die mehr CSS-Stile anwenden. Standardlinks haben die folgenden Eigenschaften:

- Links sind unterstrichen.
- Nicht besuchte Links sind blau.
- Besuchte Links sind lila.
- Wenn man mit der Maus über einen Link fährt, ändert sich der Mauszeiger zu einer kleinen Hand.
- Fokussierte Links haben einen Umriss — Sie sollten in der Lage sein, die Links auf dieser Seite mit der Tastatur zu fokussieren, indem Sie die Tabulatortaste drücken.
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
> Alle Linkbeispiele auf dieser Seite verlinken zum Anfang ihres eingebetteten Fensters. Das leere Fragment (`href="#"`) wird verwendet, um einfache Beispiele zu erstellen und sicherzustellen, dass die Live-Beispiele, die jeweils in einem {{HTMLElement("iframe")}} enthalten sind, nicht kaputtgehen.

Interessanterweise sind die Standardstile fast dieselben wie in den frühen Tagen der Browser in den 1990er Jahren. Dies liegt daran, dass Benutzer dieses Verhalten kennen und erwarten — wenn Links anders gestylt wären, würde es die Menschen verwirren. Das bedeutet nicht, dass Sie Links überhaupt nicht stylen sollten. Es bedeutet nur, dass Sie sich nicht zu weit vom erwarteten Verhalten entfernen sollten. Sie sollten zumindest:

- Verwenden Sie Unterstreichungen für Links, jedoch nicht für andere Dinge. Wenn Sie Links nicht unterstreichen möchten, heben Sie sie zumindest auf eine andere Weise hervor.
- Lassen Sie sie irgendwie reagieren, wenn sie überfahren/fokussiert werden, und auf eine leicht andere Weise, wenn sie aktiviert werden.

Die Standardstile können mit den folgenden CSS-Eigenschaften ausgeschaltet/geändert werden:

- {{cssxref("color")}} für die Textfarbe.
- {{cssxref("cursor")}} für den Stil des Mauszeigers — Sie sollten das nicht ausschalten, es sei denn, Sie haben einen sehr guten Grund.
- {{cssxref("outline")}} für den Textrahmen. Ein Umriss ähnelt einem Rahmen. Der einzige Unterschied besteht darin, dass ein Rahmen Platz im Rahmen einnimmt und ein Umriss nicht: Umrisse sitzen auf dem Hintergrund. Der Umriss ist eine nützliche Unterstützung für die Barrierefreiheit, daher sollte er nicht entfernt werden, ohne eine andere Methode der Fokusanzeigung hinzuzufügen.

> [!NOTE]
> Sie sind nicht nur auf die oben genannten Eigenschaften beschränkt, um Ihre Links zu stylen — Sie können jede beliebige Eigenschaft verwenden.

## Links stylen

Da wir die Standardzustände nun im Detail erkundet haben, schauen wir uns ein typisches Set von Linkstilen an.

Zuerst schreiben wir unsere leeren Regelsätze auf:

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

Diese Reihenfolge ist wichtig, weil Linkstile aufeinander aufbauen. Zum Beispiel gelten die Stile in der ersten Regel für alle nachfolgenden. Wenn ein Link aktiviert wird, wird er normalerweise auch überfahren. Wenn Sie diese in der falschen Reihenfolge anordnen und die gleichen Eigenschaften in jedem Regelsatz ändern, funktioniert es nicht wie erwartet. Um sich die Reihenfolge zu merken, könnten Sie ein Merkwort wie **L**o**V**e **F**ears **HA**te verwenden.

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

Wir werden auch einige Beispiel-HTML bereitstellen, um das CSS anzuwenden:

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

Das Zusammenfügen der beiden ergibt dieses Ergebnis:

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

Was haben wir hier gemacht? Das sieht sicherlich anders aus als die Standardgestaltung, bietet jedoch ein vertrautes Erlebnis, damit Benutzer wissen, was vor sich geht:

- Die ersten beiden Regeln sind für diese Diskussion nicht relevant.
- Die dritte Regel verwendet den `a`-Selektor, um den Fokusumriss zu entfernen (der sowieso je nach Browser variiert).
- Als nächstes verwenden wir die `a:link` und `a:visited`-Selektoren, um ein paar Farbvarianten für nicht besuchte und besuchte Links festzulegen, damit sie sich unterscheiden.
- Die nächsten beiden Regeln verwenden `a:focus` und `a:hover`, um für fokussierte und schwebende Links das Unterstreichen zu entfernen und unterschiedliche Hintergrundfarben festzulegen.
- Schließlich wird `a:active` verwendet, um den Links beim Aktivieren eine umgekehrte Farbschemata zu geben, um klarzumachen, dass etwas Wichtiges passiert!

## Gestalten Sie Ihre eigenen Links

Für diese Aufgabe möchten wir, dass Sie unser leeres Set von Regeln nehmen und Ihre eigenen Deklarationen hinzufügen, um die Links wirklich cool aussehen zu lassen. Nutzen Sie Ihre Vorstellungskraft, lassen Sie Ihrer Kreativität freien Lauf. Wir sind sicher, dass Sie mit etwas Coolererem und ebenso Funktionalem wie unser Beispiel oben aufwarten können.

1. Klicken Sie **"Play"** im Code-Block unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Geben Sie den Links ein Standardstyling, das jederzeit auf sie angewendet wird. Sie müssen sich nicht nur an die Textfarbe halten, aber stellen Sie sicher, dass die Links immer noch als solche erkennbar sind.
3. Geben Sie _besuchten_ Links eine etwas andere Farbe als den von Ihnen festgelegten Standardlink-Stilen.
4. Geben Sie den Link-_Fokus_ und _Hover_-Zuständen einen deutlichen Stil, der sie über andere Links hervorhebt. Entfernen Sie außerdem die Standardunterstreichung, wenn Links fokussiert/überfahren werden.
5. Geben Sie dem _aktiv_-Zustand einen anderen Stil.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie unten unter dem Beispielausgang eine Beispielösung anzeigen.

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

Eine gängige Praxis ist es, Icons in Links einzufügen, um anzuzeigen, auf welche Art von Inhalt der Link verweist. Schauen wir uns ein einfaches Beispiel an, das ein Icon zu externen Links hinzufügt (Links, die zu anderen Seiten führen). Externe Link-Icons sind normalerweise Pfeile, die aus Kästen heraus zeigen. Für dieses Beispiel verwenden wir ein [externes Link-Icon von icons8.com](https://icons8.com/icon/741/external-link).

Zuerst ein einfaches HTML, um es zu stylen:

```html-nolint
<p>
  For more information on the weather, visit our <a href="#">weather page</a>,
  look at <a href="https://en.wikipedia.org/">weather on Wikipedia</a>, or check
  out
  <a href="https://www.nationalgeographic.org/topics/resource-library-weather/">
    weather on National Geographic</a>.
</p>
```

Als nächstes folgt ein CSS, das den gewünschten Effekt erzielt:

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

Was passiert hier? Wir überspringen den Großteil des CSS, das ist gleich wie in vorherigen Beispielen. Die letzte Regel ist jedoch interessant: wir verwenden {{cssxref("::after")}} Pseudo-Element-Selektor. Das `0.8em x 0.8em` Pseudo-Element wird nach dem Ankertext als Inline-Block gerendert, und das im {{cssxref("background-image")}}-Eigenschaft referenzierte Icon wird im Hintergrund des Pseudo-Elements platziert. Wir haben auch etwas {{cssxref("margin-left")}} hinzugefügt, um etwas Platz zwischen dem Icon und dem vorhergehenden Wort zu schaffen.

Wir haben eine [relativierte Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) verwendet: `em`. Sie passt die Größe des Icons im Verhältnis zur Textgröße des Ankers an. Wenn sich die Textgröße des Ankers ändert, passt sich auch die Icon-Größe entsprechend an.

Ein letztes Wort: wie haben wir nur externe Links ausgewählt? Nun, wenn Sie Ihre [HTML-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) korrekt schreiben, sollten Sie nur für externe Links absolute URLs verwenden — es ist effizienter, relative Links zu verwenden, um auf andere Teile Ihrer eigenen Website zu verlinken (wie beim ersten Link). Der Text "http" sollte daher nur in externen Links erscheinen (wie bei den zweiten und dritten Links), und wir können dies mit einem [Attributselektor](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) auswählen: `a[href^="http"]` wählt {{htmlelement("a")}}-Elemente, jedoch nur wenn sie ein [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut mit einem Wert haben, der mit "http" beginnt.

Das ist also alles. Versuchen Sie, den Aufgabenteil oben noch einmal zu besuchen und diese neue Technik auszuprobieren!

> [!NOTE]
> Keine Sorge, wenn Ihnen [Hintergründe](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) und [Responsive Web Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) noch nicht vertraut sind; diese werden an anderer Stelle erklärt.

## Links als Buttons stylen

Die Werkzeuge, die Sie bisher in diesem Artikel erkundet haben, können auch auf andere Weise verwendet werden. Zum Beispiel können Zustände wie Hover verwendet werden, um viele verschiedene Elemente zu stylen, nicht nur Links — vielleicht möchten Sie den Hover-Zustand von Absätzen, Listenelementen oder anderen Dingen stylen.

Darüber hinaus werden Links häufig so gestylt, dass sie sich wie Buttons verhalten. Ein Webseiten-Navigationsmenü kann als eine Reihe von Links markiert werden, und dies kann so gestylt werden, dass es wie eine Reihe von Steuertasten oder Tabs aussieht, die dem Benutzer Zugang zu anderen Teilen der Seite bieten. Schauen wir uns an, wie das funktioniert.

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

Dies gibt uns das folgende Ergebnis:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

Das HTML definiert ein {{HTMLElement("nav")}}-Element mit einer `"container"`-Klasse. Das `<nav>` enthält unsere Links.

Das CSS enthält das Styling für das Container und die darin enthaltenen Links.

- Die zweite Regel sagt:
  - Das Container ist eine [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Die Elemente, die es enthält — die Links in diesem Fall — werden _Flex-Elemente_ sein.
  - Der Abstand zwischen den Flex-Elementen beträgt `0.625%` der Breite des Containers.
- Die dritte Regel stylt die Links:
  - Die erste Deklaration, `flex: 1`, bedeutet, dass die Breiten der Elemente so angepasst werden, dass sie den gesamten verfügbaren Raum im Container nutzen.
  - Als Nächstes schalten wir die Standard-{{cssxref("text-decoration")}} und {{cssxref("outline")}} ab — wir möchten nicht, dass sie unser Aussehen verderben.
  - Die letzten drei Deklarationen dienen dazu, den Text innerhalb jedes Links zu zentrieren, die {{cssxref("line-height")}} auf 3 zu setzen, um den Buttons etwas Höhe zu verleihen (was auch den Vorteil hat, den Text vertikal zu zentrieren), und die Textfarbe auf Schwarz zu setzen.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen alles Wissenswerte über Links vermittelt — für den Moment! Der letzte Artikel in unserem Textstyling-Modul erklärt, wie man benutzerdefinierte Webfonts auf seinen Webseiten verwendet.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
