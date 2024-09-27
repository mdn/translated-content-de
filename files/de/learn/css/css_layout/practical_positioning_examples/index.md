---
title: Praktische Positionierungsbeispiele
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{LearnSidebar}}

Dieser Artikel zeigt, wie man einige praxisnahe Beispiele erstellt, um zu veranschaulichen, welche Dinge man mit Positionierung erreichen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Vorstellung von den praktischen Aspekten der Positionierung bekommen</td>
    </tr>
  </tbody>
</table>

## Eine Registerkarten-Infobox

Das erste Beispiel, das wir uns ansehen werden, ist eine klassische Registerkarten-Infobox — ein sehr häufig verwendetes Feature, wenn Sie viele Informationen in einem kleinen Bereich unterbringen möchten. Dies umfasst informationsreiche Apps wie Strategie-/Kriegsspiele, mobile Versionen von Websites, bei denen der Bildschirm schmal ist und der Platz begrenzt ist, sowie kompakte Informationsboxen, bei denen Sie viele Informationen verfügbar machen möchten, ohne dass sie die gesamte Benutzeroberfläche füllen. Unser einfaches Beispiel wird so aussehen, wenn wir fertig sind:

![Registerkarte 1 ist ausgewählt. 'Tab 2' und 'Tab 3' sind die anderen beiden Registerkarten. Nur der Inhalt der ausgewählten Registerkarte ist sichtbar. Wenn eine Registerkarte ausgewählt wird, wechselt ihre Textfarbe von Schwarz zu Weiß und ihre Hintergrundfarbe von Orangerot zu Sattbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Vielleicht denken Sie: „Warum nicht einfach die separaten Registerkarten als separate Webseiten erstellen und die Registerkarten als Links zu den separaten Seiten verwenden, um den Effekt zu erzeugen?“ Dieser Code wäre zwar einfacher, aber jedes separate „Seiten“-Ansicht wäre tatsächlich eine neu geladene Webseite, was es schwieriger machen würde, Informationen über Ansichten hinweg zu speichern und dieses Feature in ein größeres UI-Design zu integrieren.

Um zu beginnen, möchten wir, dass Sie eine lokale Kopie der Startdateien erstellen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese an einem sinnvollen Ort auf Ihrem lokalen Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Lassen Sie uns einen Blick auf das im Body enthaltene HTML werfen:

```html
<section class="info-box">
  <div role="tablist" class="manual">
    <button
      id="tab-1"
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="tabpanel-1">
      <span>Tab 1</span>
    </button>

    <button
      id="tab-2"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="tabpanel-2">
      <span>Tab 2</span>
    </button>
    <button
      id="tab-3"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="tabpanel-3">
      <span>Tab 3</span>
    </button>
  </div>

  <div class="panels">
    <article id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
      <h2>The first tab</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum
        et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius
        libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt
        metus. Donec ultrices, urna maximus consequat aliquet, dui neque
        eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor
        urna. Nulla facilisi.
      </p>
    </article>

    <article id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2">
      <h2>The second tab</h2>
      <p>
        This tab hasn't got any Lorem Ipsum in it. But the content isn't very
        exciting all the same.
      </p>
    </article>

    <article id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3">
      <h2>The third tab</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. And now an
        ordered list: how exciting!
      </p>
      <ol>
        <li>dui neque eleifend lorem, a auctor libero turpis at sem.</li>
        <li>Aliquam ut porttitor urna.</li>
        <li>Nulla facilisi</li>
      </ol>
    </article>
  </div>
</section>
```

Hier haben wir also ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, das zwei {{htmlelement("div")}}s enthält. Das erste div enthält drei Buttons, die zu den eigentlichen Registerkarten werden, auf die wir klicken können, um unsere Inhaltspanels anzuzeigen. Das zweite div enthält drei {{htmlelement("article")}}-Elemente, die die Inhaltspanels bilden, die zu jeder Registerkarte gehören. Jedes Panel enthält einige Beispielinhalte.

Die Idee hier ist, dass wir die Registerkarten so gestalten, dass sie wie ein standardmäßiges horizontales Navigationsmenü aussehen und die Panels so gestalten, dass sie übereinanderliegen, indem wir absolute Positionierung verwenden. Wir werden Ihnen auch ein wenig JavaScript geben, das Sie auf Ihrer Seite einfügen können, um das entsprechende Panel anzuzeigen, wenn eine Registerkarte gedrückt wird, und die Registerkarte selbst zu gestalten. Sie müssen den JavaScript-Code an dieser Stelle nicht verstehen, aber Sie sollten darüber nachdenken, bald etwas [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) zu lernen — je komplexer Ihre UI-Features werden, desto wahrscheinlicher ist es, dass Sie JavaScript benötigen, um die gewünschte Funktionalität zu implementieren.

### Allgemeine Einrichtung

Fügen Sie zunächst folgendes zwischen Ihren öffnenden und schließenden {{HTMLElement("style")}} Tags hinzu:

```css
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

Dies ist nur eine allgemeine Einrichtung, um eine serifenlose Schriftart auf unserer Seite zu setzen, das `border-box` {{cssxref("box-sizing")}} Modell zu verwenden und den Standard-{{htmlelement("body")}}-Rand zu entfernen.

Fügen Sie als nächstes das folgende CSS direkt unter Ihrem vorherigen CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Dies legt eine bestimmte Breite und Höhe auf dem Inhalt fest und zentriert ihn auf dem Bildschirm mithilfe von `margin: 1.25rem auto 0`. Im Kurs haben wir zuvor davon abgeraten, eine feste Höhe auf Inhaltscontainern festzulegen, wenn es überhaupt möglich ist; in diesem Fall ist es in Ordnung, da wir feste Inhalte in unseren Registerkarten haben.

### Styling unserer Registerkarten

Jetzt möchten wir die Registerkarten so gestalten, dass sie wie Registerkarten aussehen — im Grunde handelt es sich um ein horizontales Navigationsmenü, aber anstatt beim Anklicken verschiedene Webseiten zu laden, wie wir es im Kurs bereits gesehen haben, führen sie dazu, dass auf derselben Seite unterschiedliche Panels angezeigt werden. Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu, um den `tablist` zu einem {{cssxref("flex")}}-Container zu machen und über 100 % Breite zu erstrecken:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden in diesem Beispiel Nachfahren-Selektoren mit `.info-box` am Anfang der Kette — dies ist, damit wir dieses Feature in eine Seite mit bereits vorhandenem Inhalt einfügen können, ohne Angst davor zu haben, die Stile, die auf andere Teile der Seite angewendet werden, zu stören.

Als nächstes stylen wir die Buttons so, dass sie wie Registerkarten aussehen. Fügen Sie das folgende CSS hinzu:

```css
.info-box [role="tab"] {
  padding: 0 1rem 0 1rem;
  line-height: 3rem;
  background: white;
  color: #b60000;
  font-weight: bold;
  border: none;
  outline: none;
}
```

Als Nächstes setzen wir die `:focus` und `:hover` Zustände der Registerkarten, sodass sie anders aussehen, wenn sie fokussiert/gehovert sind, und den Benutzern ein visuelles Feedback geben.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Dann setzen wir eine Regel, die eine der Registerkarten hervorhebt, wenn auf ihr die Eigenschaft [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `true` gesetzt wird. Wir werden dies mit JavaScript setzen, wenn auf eine Registerkarte geklickt wird. Platzieren Sie das folgende CSS unter Ihren anderen Stilen:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Styling der Panels

Der nächste Schritt besteht darin, unsere Panels zu stylen. Los geht's!

Fügen Sie zuerst die folgende Regel hinzu, um den `.panels` {{htmlelement("div")}}-Container zu stylen. Hier setzen wir eine feste {{cssxref("height")}}, um sicherzustellen, dass die Panels fest in der Infobox sitzen, {{cssxref("position")}} `relative`, um das {{htmlelement("div")}} als Positionierungskontext festzulegen, sodass Sie dann positionierte Kindelemente relativ dazu platzieren und nicht zum ursprünglichen Ansichtsfenster; schließlich setzen wir {{cssxref("clear")}} auf das obenstehende CSS, damit es nicht den Rest des Layouts beeinträchtigt.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Zum Abschluss dieses Abschnitts gestalten wir die einzelnen {{htmlelement("article")}}-Elemente, die unsere Panels ausmachen. Die erste Regel, die wir hinzufügen, positioniert die Panels absolut {{cssxref("position")}} und sorgt dafür, dass sie alle bündig auf der {{cssxref("top")}} und {{cssxref("left")}} ihres {{htmlelement("div")}}-Containers sitzen — dieser Teil ist entscheidend für dieses Gesamt-Layout-Feature, da er die Panels übereinanderliegen lässt. Die Regel gibt den Panels auch die gleiche feste Höhe wie dem Container und sorgt für etwas Padding für den Inhalt, eine Text{{cssxref("color")}} und eine {{cssxref("background-color")}}.

```css
.info-box [role="tabpanel"] {
  background-color: #b60000;
  color: white;
  position: absolute;
  padding: 0.8rem 1.2rem;
  height: 352px;
  top: 0;
  left: 0;
}
```

Die zweite Regel, die wir hier hinzufügen, bewirkt, dass ein Panel mit einer `is-hidden`-Klasse darauf ausgeblendet wird. Auch hier werden wir diese Klasse bei Bedarf mit JavaScript hinzufügen/entfernen. Wenn eine Registerkarte ausgewählt ist, wird die entsprechende Panel-Klasse `is-hidden` entfernt und allen anderen Panels wird die Klasse `is-hidden` gesetzt, sodass immer nur ein Panel sichtbar ist.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Der letzte Teil, der dieses Feature zum Funktionieren bringt, ist der JavaScript-Code. Die Datei `tabs-manual.js` wurde mit dem [`<script>`](/de/docs/Web/HTML/Element/script)-Tag eingebunden:

```html
<script src="tabs-manual.js"></script>
```

Dieser Code tut Folgendes:

- Beim [Fensterlade-Ereignis](/de/docs/Web/API/Window/load_event) wird `TabsManual` [class](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) für alle `tablist`-Elemente initialisiert.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Registerkarten- und Panel-Referenzen in `tabs` und `tabpanels` Variablen gesammelt, sodass wir später leicht Aktionen an ihnen ausführen können.
- Der Konstruktor registriert auch [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignishandler für alle Registerkarten. Die Ereignishandler beinhalten eine Logik, was geschehen soll, wenn eine Registerkarte durch Klicken oder Tastendruck ausgewählt wird.
- In der `setSelectedTab(currentTab)` Funktion passiert Folgendes:

  - Eine `for`-Schleife wird verwendet, um alle Registerkarten durchzugehen und sie abzuwählen, indem die `aria-selected` Eigenschaft auf `false` gesetzt und die `is-hidden` Klasse auf den entsprechenden Panels gesetzt wird.
  - Auf der ausgewählten Registerkarte (`currentTab`) wird `aria-selected` auf `true` gesetzt und die `is-hidden` Klasse aus dem entsprechenden Panel entfernt.

- Der Code enthält auch Logik zur Unterstützung der Tastaturnavigation mit den Tasten `Linkspfeil`, `Rechtspfeil`, `Home` und `End`.

## Eine fixierte Registerkarten-Infobox

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Infobox — und integrieren es in den Kontext einer vollständigen Webseite. Aber nicht nur das — wir geben ihr eine feste Position, sodass sie an derselben Position im Browserfenster bleibt. Wenn der Hauptinhalt scrollt, bleibt die Infobox an derselben Position auf dem Bildschirm. Unser fertiges Beispiel wird so aussehen:

![Infobox ist ein Container mit 3 Registerkarten, wobei die erste Registerkarte ausgewählt ist und nur der Inhalt der ersten Registerkarte angezeigt wird. Es hat eine feste Position. Die Infobox ist oben links in der Ecke des Fensters platziert, mit einer Breite von 452 Pixeln. Ein Container mit gefälschtem Inhalt belegt die rechte Hälfte des Fensters; dieser Container ist höher als das Fenster und scrollbar. Wenn die Seite gescrollt wird, bewegt sich der Container auf der rechten Seite, während die Infobox fest an derselben Position auf dem Bildschirm bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Als Ausgangspunkt können Sie Ihr fertiges Beispiel aus dem ersten Abschnitt des Artikels verwenden oder eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repo erstellen.

### HTML-Ergänzungen

Zuerst benötigen wir zusätzliches HTML, um den Hauptinhalt der Webseite darzustellen. Fügen Sie das folgende {{htmlelement("section")}} unmittelbar unterhalb Ihres öffnenden {{htmlelement("body")}} Tags hinzu, direkt vor dem bestehenden Abschnitt:

```html
<section class="fake-content">
  <h1>Fake content</h1>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
</section>
```

> [!NOTE]
> Sie können den Fake-Content durch echten Content ersetzen, wenn Sie möchten.

### Änderungen am bestehenden CSS

Als nächstes müssen wir einige kleine Änderungen am bestehenden CSS vornehmen, um die Infobox zu platzieren und zu positionieren. Ändern Sie Ihre `.info-box` Regel, um `margin: 0 auto;` zu entfernen (wir wollen die Infobox nicht mehr zentriert haben), fügen Sie {{cssxref("position", "position: fixed;")}} hinzu und befestigen Sie es am {{cssxref("top")}} des Browser-Viewports.

Es sollte nun so aussehen:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 0 auto;
  position: fixed;
  top: 0;
}
```

### Hauptinhalt stylen

Das Einzige, was für dieses Beispiel noch fehlt, ist, dem Hauptinhalt einige Stile zu verleihen. Fügen Sie die folgende Regel unter den Rest Ihres CSS hinzu:

```css
.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}

.fake-content p {
  margin-bottom: 200px;
}
```

Zunächst geben wir dem Inhalt die gleiche {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("padding")}} wie die Infobox-Panels. Dann geben wir ihm einen großen {{cssxref("margin-left")}}, um ihn nach rechts zu verschieben und Platz für die Infobox zu schaffen, damit sie nicht über andere Inhalte überlappt.

Dies markiert das Ende des zweiten Beispiels; wir hoffen, dass Sie das dritte genauso interessant finden.

## Ein verschiebbares verstecktes Panel

Das letzte Beispiel, das wir hier präsentieren, ist ein Panel, das bei Drücken eines Symbols auf- und abgeblendet wird — wie bereits erwähnt, ist dies beliebt für Situationen wie mobile Layouts, bei denen der verfügbare Bildschirmplatz klein ist, sodass Sie nicht den größten Teil davon für ein Menü- oder Infopanel anzeigen, sondern den nützlichen Inhalt.

Unser fertiges Beispiel wird so aussehen:

![Ein leerer Bildschirm auf der linken Seite von 60% des Bildschirms mit einem 40% breiten Panel, das Informationen auf der rechten Seite anzeigt. Ein 'Fragezeichen'-Symbol befindet sich in der oberen rechten Ecke. Das Panel schiebt sich beim Drücken dieses 'Fragezeichen'-Symbols auf und von der Seite.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Als Ausgangspunkt erstellen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repo. Dies führt nicht aus dem vorherigen Beispiel fort, sodass eine neue Startdatei erforderlich ist. Lassen Sie uns einen Blick auf das HTML in der Datei werfen:

```html-nolint
<button
  type="button"
  id="menu-button"
  aria-haspopup="true"
  aria-controls="info-panel"
  aria-expanded="false">
      ❔
</button>

<aside id="info-panel" aria-labelledby="menu-button">
  …
</aside>
```

Hier beginnen wir mit einem {{htmlelement("button")}}-Element, das ein spezielles Fragezeichen-Zeichen als Buttontext hat. Der Button wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Element/aside) Info-Panel anzuzeigen/auszublenden. In den folgenden Abschnitten erklären wir, wie das alles funktioniert.

### Styling des Buttons

Lassen Sie uns zunächst den Button behandeln — fügen Sie folgendes CSS zwischen Ihre {{htmlelement("style")}} Tags hinzu:

```css
#menu-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;

  font-size: 3rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
```

Die erste Regel stylt den `<button>`; hier haben wir:

- Eine große {{cssxref("font-size")}} eingestellt, um das Symbol schön groß zu machen.
- Den Rand entfernt und den Hintergrund transparent gemacht, sodass anstelle des Buttons nur das Fragezeichen-Symbol angezeigt wird.
- {{cssxref("position")}} `absolute` darauf gesetzt und {{cssxref("top")}} und {{cssxref("right")}} verwendet, um es schön in der oberen rechten Ecke zu positionieren.
- Ein {{cssxref("z-index")}} von 1 darauf gesetzt — dies ist, damit wenn das Info-Panel gestylt und angezeigt wird, es nicht das Symbol überdeckt; stattdessen wird das Symbol darüber liegen, sodass es erneut gedrückt werden kann, um das Info-Panel auszublenden.
- Die {{cssxref("cursor")}} Eigenschaft verwendet, um den Mauszeiger zu ändern, wenn er über das Symbol schwebt, zu einem Hand-Cursor (wie der, den Sie sehen, wenn Links überfahren werden), als weiteres visuelles Zeichen für die Benutzer, dass das Symbol etwas Interessantes bewirkt.

### Styling des Panels

Jetzt ist es Zeit, das eigentliche verschiebbare Panel selbst zu stylen. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
#info-panel {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s right ease-out;
}
```

Hier passiert viel — lassen Sie uns Stück für Stück darüber sprechen:

- Zuerst setzen wir einfache {{cssxref("background-color")}} und {{cssxref("color")}} auf das Info-Box.
- Als nächstes setzen wir eine feste {{cssxref("width")}} auf das Panel und machen seine {{cssxref("height")}} die gesamte Höhe des Browser-Viewports.
- Wir fügen auch einige horizontale {{cssxref("padding")}} hinzu, um es ein wenig aufzuweichen.
- Als nächstes setzen wir {{cssxref("position", "position: fixed;")}} auf das Panel, sodass es immer an derselben Position angezeigt wird, auch wenn die Seite Inhalte zum Scrollen hat. Wir kleben es an die {{cssxref("top")}} des Viewports und setzen es so, dass es standardmäßig außerhalb des {cssxref("right")}} ist.
- Schließlich setzen wir eine {{cssxref("transition")}} auf das Element. Transition ist eine interessante Funktion, die es Ihnen ermöglicht, Änderungen zwischen Zuständen reibungslos zu gestalten, anstatt einfach "an" oder "aus" zu sein. In diesem Fall beabsichtigen wir, das Panel reibungslos auf dem Bildschirm erscheinen zu lassen, wenn das Kontrollkästchen aktiviert ist. (Oder anders ausgedrückt, wenn das Fragezeichen-Symbol angeklickt wird.)

### Festlegen des gecheckten Zustands

Es gibt ein letztes bisschen CSS hinzuzufügen — setzen Sie das folgende am Ende Ihres CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt, dass wenn die Info-Panel `.open` Klasse auf sich hat, setze die {{cssxref("right")}} Eigenschaft des `<aside>` auf `0px`, was dazu führt, dass das Panel wieder auf dem Bildschirm erscheint (aufgrund der Transition). Das Entfernen der `.open` Klasse blendet das Panel wieder aus.

Um die `.open` Klasse auf dem Info-Panel mit einem Klick auf den Button hinzuzufügen/entfernen, müssen wir JavaScript verwenden. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}} Tags hinzu:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt dem Button einen Klickereignishandler hinzu. Der Klickhandler schaltet die `open` Klasse auf dem Info-Box Panel um, was das Panel in oder aus dem Sichtfeld schiebt. Der Ereignishandler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Eigenschaft auf dem Button, um die Barrierefreiheit zu verbessern.

So haben Sie es — der einfachste Weg, um einen umschaltbaren Panel-Effekt zu erzeugen.

## Zusammenfassung

Damit beenden wir unseren Blick auf die Positionierung — mittlerweile sollten Sie eine Vorstellung davon haben, wie die grundlegende Mechanik funktioniert, und verstehen, wie man damit beginnt, einige interessante UI-Features zu erstellen. Machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstanden haben — Positionierung ist ein ziemlich fortgeschrittenes Thema, und Sie können die Artikel jederzeit erneut durchgehen, um Ihr Verständnis zu vertiefen.
