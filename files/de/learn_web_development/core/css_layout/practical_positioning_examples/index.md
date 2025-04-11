---
title: Praktische Beispiele für Positionierung
slug: Learn_web_development/Core/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

Dieser Artikel zeigt, wie man einige praxisnahe Beispiele erstellt, um zu veranschaulichen, welche Dinge Sie mit Positionierung tun können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >) und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein Gefühl für die praktischen Aspekte der Positionierung zu bekommen</td>
    </tr>
  </tbody>
</table>

## Ein Registerkarten-Info-Box

Das erste Beispiel, das wir uns ansehen werden, ist eine klassische Registerkarten-Info-Box — ein sehr häufig verwendetes Feature, wenn Sie viele Informationen in einem kleinen Bereich packen möchten. Dies schließt informationsreiche Apps wie Strategie-/Kriegsspiele, mobile Versionen von Webseiten, bei denen der Bildschirm schmal ist und der Platz begrenzt ist, und kompakte Informationsboxen ein, in denen viele Informationen verfügbar gemacht werden sollen, ohne dass sie die gesamte Benutzeroberfläche ausfüllen. Unser einfaches Beispiel wird so aussehen, wenn wir fertig sind:

![Reiter 1 ist ausgewählt. 'Reiter 2' und 'Reiter 3' sind die anderen beiden Registerkarten. Nur die Inhalte der ausgewählten Registerkarte sind sichtbar. Bei Auswahl einer Registerkarte ändert sich die Textfarbe von schwarz auf weiß und die Hintergrundfarbe von orange-rot auf sattelbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) laufen sehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)). Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels aufbauen werden.

Sie denken vielleicht: "Warum nicht einfach die separaten Registerkarten als separate Webseiten erstellen und einfach die Registerkarten dazu verwenden, auf die separaten Seiten zu klicken, um den Effekt zu erzeugen?" Dieser Code wäre einfacher, ja, aber jede separate "Seiten"-Ansicht wäre tatsächlich eine neu geladene Webseite, wodurch es schwieriger würde, Informationen über Ansichten hinweg zu speichern und dieses Feature in ein größeres UI-Design zu integrieren.

Zunächst möchten wir, dass Sie eine lokale Kopie der Startdateien erstellen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese an einem sinnvollen Ort auf Ihrem lokalen Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Schauen wir uns das HTML im Body an:

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

Hier haben wir ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, das zwei {{htmlelement("div")}}s enthält. Das erste div enthält drei Buttons, die zu den eigentlichen Registerkarten werden, um unsere Inhaltspanels anzuzeigen. Das zweite div enthält drei {{htmlelement("article")}}-Elemente, die die Inhaltspanels bilden, die jeweils einer Registerkarte entsprechen. Jedes Panel enthält einige Beispielinhalte.

Die Idee hier ist, dass wir die Registerkarten so gestalten, dass sie wie ein standardmäßiges horizontales Navigationsmenü aussehen, und die Panels so gestalten, dass sie mit absoluter Positionierung übereinander liegen. Wir werden Ihnen auch ein wenig JavaScript zur Verfügung stellen, das Sie auf Ihrer Seite einfügen können, um das entsprechende Panel anzuzeigen, wenn eine Registerkarte gedrückt wird, und die Registerkarte selbst zu stylen. Sie müssen den JavaScript-Code zu diesem Zeitpunkt nicht verstehen, aber Sie sollten in Betracht ziehen, so bald wie möglich einige grundlegende [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)-Kenntnisse zu erwerben — je komplexer Ihre UI-Features werden, desto wahrscheinlicher ist es, dass Sie etwas JavaScript benötigen, um die gewünschte Funktionalität umzusetzen.

### Allgemeine Einrichtung

Fügen Sie zunächst das folgende CSS zwischen Ihren öffnenden und schließenden {{HTMLElement("style")}}-Tags hinzu:

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

Dies ist nur eine allgemeine Einrichtung, um eine serifenlose Schriftart auf unserer Seite zu setzen, das {{cssxref("box-sizing")}}-Modell `border-box` zu verwenden und den Standardrand des {{htmlelement("body")}} zu entfernen.

Fügen Sie anschließend das folgende CSS direkt unter Ihrem vorherigen CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Dies setzt eine bestimmte Breite und Höhe für den Inhalt und zentriert ihn auf dem Bildschirm mit dem alten `margin: 1.25rem auto 0`. Zuvor im Kurs haben wir davon abgeraten, eine feste Höhe auf Inhaltscontainern festzulegen, wenn möglich; es ist in diesem Fall in Ordnung, da wir festen Inhalt in unseren Registerkarten haben.

### Gestaltung unserer Registerkarten

Nun möchten wir die Registerkarten so gestalten, dass sie wie Registerkarten aussehen — im Grunde genommen handelt es sich hierbei um ein horizontales Navigationsmenü, aber anstatt beim Klicken auf verschiedene Webseiten zu laden, wie wir es zuvor im Kurs gesehen haben, wird es dazu führen, dass unterschiedliche Panels auf derselben Seite angezeigt werden. Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu, um das `tablist`-Element zu einem {{cssxref("flex")}}-Container zu machen und die Breite auf 100% zu spannen:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden in diesem Beispiel Nachfahrenselektoren mit `.info-box` am Anfang der Kette — das ist, damit wir dieses Feature auf einer Seite mit bereits vorhandenem Inhalt einfügen können, ohne Angst haben zu müssen, dass die Stile auf andere Teile der Seite einwirken.

Als Nächstes werden wir die Buttons so gestalten, dass sie wie Registerkarten aussehen. Fügen Sie folgendes CSS hinzu:

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

Als nächstes legen wir die `:focus`- und `:hover`-Zustände der Registerkarten fest, damit sie anders aussehen, wenn sie fokussiert/gehovered werden, und bieten den Nutzern visuelles Feedback.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Dann legen wir eine Regel fest, die eine der Registerkarten hervorhebt, wenn die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Eigenschaft auf `true` gesetzt ist. Wir werden dies mit JavaScript festlegen, wenn eine Registerkarte angeklickt wird. Platzieren Sie folgendes CSS unter Ihren anderen Stilen:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Gestaltung der Panels

Die nächste Aufgabe ist es, unsere Panels zu stylen. Lass uns loslegen!

Fügen Sie zuerst die folgende Regel hinzu, um den `.panels` {{htmlelement("div")}} Container zu stylen. Hier setzen wir eine feste {{cssxref("height")}}, damit die Panels exakt in die Info-Box passen. Wir setzen die {{cssxref("position")}} auf `relative`, um das {{htmlelement("div")}} als Positionierungskontext zu setzen, sodass Sie anschließend positionierte Kind-Elemente relativ dazu platzieren können und nicht zum ursprünglichen Viewport. Schließlich entfernen wir den in der obigen CSS gesetzten Float, sodass dieser das restliche Layout nicht beeinträchtigt.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Abschließend für diesen Abschnitt werden wir die einzelnen {{htmlelement("article")}}-Elemente stylen, die unsere Panels bilden. Die erste Regel, die wir hinzufügen, wird die Panels absolut {{cssxref("position")}}ieren und sie alle bündig am {{cssxref("top")}} und {{cssxref("left")}} ihres {{htmlelement("div")}} Containers platzieren — dieser Teil ist entscheidend für dieses gesamte Layout-Feature, da er die Panels übereinander positioniert. Die Regel gibt den Panels auch die gleiche feste Höhe wie dem Container und gibt dem Inhalt etwas Padding, eine Textfarbe und einen Hintergrund.

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

Die zweite Regel, die wir hier hinzufügen, bewirkt, dass ein Panel mit einer Klasse `is-hidden` ausgeblendet wird. Auch hier werden wir die Klasse `is-hidden` mit JavaScript zur richtigen Zeit hinzufügen/entfernen. Wenn eine Registerkarte ausgewählt wird, wird die entsprechende Anzeige die Klasse `is-hidden` entfernt haben und alle anderen Anzeigen werden die Klasse `is-hidden` erhalten, sodass nur ein Panel zu einem Zeitpunkt sichtbar ist.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Der letzte Teil, der dieses Feature zum funktionieren bringt, ist der JavaScript-Code. Die Datei `tabs-manual.js` wurde mit dem `<script>`-Tag eingebunden:

```html
<script src="tabs-manual.js"></script>
```

Dieser Code macht Folgendes:

- Beim [window load event](/de/docs/Web/API/Window/load_event) initialisiert er die `TabsManual` [class](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) für alle `tablist`-Elemente.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Registerkarten und Panel-Referenzen in den Variablen `tabs` und `tabpanels` gesammelt, sodass wir später einfach Dinge mit ihnen tun können.
- Der Konstruktor registriert auch [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignishandler für alle Registerkarten. Die Ereignishandler enthalten Logik darüber, was passieren soll, wenn eine Registerkarte mithilfe eines Klicks oder einer Tastenanschlag ausgewählt wird.
- In der Funktion `setSelectedTab(currentTab)` passiert Folgendes:

  - Eine `for`-Schleife wird verwendet, um durch alle Registerkarten zu gehen und sie durch das Setzen der Eigenschaft `aria-selected` auf `false` und durch das Setzen der Klasse `is-hidden` auf den entsprechenden Panels abzuwählen.
  - Bei der ausgewählten Registerkarte (`currentTab`) wird die Eigenschaft `aria-selected` auf `true` gesetzt und die Klasse `is-hidden` vom entsprechenden Panel entfernt.

- Der Code enthält auch Logik zur Unterstützung der Tastaturnavigation mit den Tasten `Linker Pfeil`, `Rechter Pfeil`, `Pos1` und `Ende`.

## Eine fest positionierte Registerkarten-Info-Box

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Info-Box — und betten es in den Kontext einer vollständigen Webseite ein. Aber nicht nur das — wir geben ihm eine feste Position, sodass es sich an derselben Position im Browserfenster bleibt. Wenn der Hauptinhalt scrollt, bleibt die Info-Box an derselben Stelle auf dem Bildschirm. Unser fertiges Beispiel wird so aussehen:

![Info-Box ist ein Container mit 3 Registerkarten, wobei die erste Registerkarte ausgewählt ist und nur die Inhalte der ersten Registerkarte angezeigt werden. Es wird eine feste Position gegeben. Die Info-Box befindet sich in der oberen linken Ecke des Fensters mit einer Breite von 452 Pixeln. Ein Container mit Fake-Inhalt füllt den Rest der rechten Fensterhälfte aus; der Fake-Inhaltscontainer ist höher als das Fenster und scrollbar. Wenn die Seite gescrollt wird, bewegt sich der rechte Container, während die Info-Box fest in derselben Position auf dem Bildschirm bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) laufen sehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)). Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels aufbauen werden.

Als Ausgangspunkt können Sie Ihr fertiggestelltes Beispiel aus dem ersten Abschnitt des Artikels verwenden oder eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repo erstellen.

### HTML-Ergänzungen

Zunächst benötigen wir einige zusätzliche HTML, um den Hauptinhalt der Webseite darzustellen. Fügen Sie das folgende {{htmlelement("section")}} direkt unter Ihrem öffnenden {{htmlelement("body")}}-Tag, direkt vor dem bestehenden Abschnitt hinzu:

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
> Sie können den Fake-Inhalt gerne durch echten Inhalt ersetzen, wenn Sie möchten.

### Änderungen am bestehenden CSS

Als nächstes müssen wir einige kleine Änderungen am bestehenden CSS vornehmen, um die Info-Box zu platzieren und zu positionieren. Ändern Sie Ihre `.info-box` Regel, um `margin: 0 auto;` zu entfernen (wir möchten die Info-Box nicht mehr zentrieren), fügen Sie {{cssxref("position", "position: fixed;")}} hinzu und befestigen Sie es an der {{cssxref("top")}} des Browser-Viewports.

Sie sollte nun so aussehen:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 0 auto;
  position: fixed;
  top: 0;
}
```

### Gestaltung des Hauptinhalts

Das Einzige, was für dieses Beispiel noch fehlt, ist, dem Hauptinhalt ein wenig Stil zu verleihen. Fügen Sie die folgende Regel unter dem Rest Ihres CSS hinzu:

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

Zunächst geben wir dem Inhalt die gleiche {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("padding")}} wie den Info-Box-Panels. Dann geben wir ihm einen großen {{cssxref("margin-left")}} um ihn nach rechts zu verschieben, um Platz für die Info-Box zu schaffen, damit sie nirgendwo anders überlappt.

Damit endet das zweite Beispiel; wir hoffen, Sie finden das dritte ebenso interessant.

## Ein sich versteckendes Schiebepanel

Das letzte Beispiel, das wir hier vorstellen werden, ist ein Panel, das sich auf Knopfdruck ein- und ausblendet — wie bereits erwähnt, ist dies in Situationen wie mobilen Layouts beliebt, wo der verfügbare Bildschirmplatz klein ist, sodass Sie nicht den größten Teil davon verwenden, um ein Menü oder ein Info-Panel statt des nützlichen Inhalts anzuzeigen.

Unser fertiges Beispiel wird so aussehen:

![Ein leerer Bildschirm auf der linken 60% des Bildschirms mit einem 40% breiten Panel, das Informationen auf der rechten Seite anzeigt. Ein 'Fragezeichen'-Symbol befindet sich in der oberen rechten Ecke. Das Panel gleitet auf und von dem Bildschirm mit dem Drücken dieses 'Fragezeichen'-Symbols.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) laufen sehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)). Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels aufbauen werden.

Als Ausgangspunkt erstellen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repo. Dies folgt nicht dem vorherigen Beispiel, sodass eine neue Startdatei erforderlich ist. Lassen Sie uns einen Blick auf das HTML in der Datei werfen:

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

Zunächst haben wir hier ein {{htmlelement("button")}}-Element mit einem speziellen Fragezeichenzeichen als Button-Text. Der Button wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Reference/Elements/aside) Info-Panel ein- oder auszublenden. In den untenstehenden Abschnitten werden wir erklären, wie das alles funktioniert.

### Gestaltung des Buttons

Zuerst lassen Sie uns mit dem Button beschäftigen — fügen Sie das folgende CSS zwischen Ihren {{htmlelement("style")}}-Tags hinzu:

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
- Den Rand entfernt und den Hintergrund transparent gemacht, sodass nur das Fragezeichen-Symbol angezeigt wird.
- Das {{cssxref("position")}}-Attribut `absolute` darauf gesetzt und {{cssxref("top")}} und {{cssxref("right")}} verwendet, um es schön in der oberen rechten Ecke zu positionieren.
- Ein {{cssxref("z-index")}} von 1 darauf gesetzt — dies geschieht, damit, wenn das Info-Panel gestylt und sichtbar ist, es das Symbol nicht verdeckt; stattdessen wird das Symbol oben darauf sitzen, sodass es erneut gedrückt werden kann, um das Info-Panel zu verbergen.
- Die {{cssxref("cursor")}}-Eigenschaft verwendet, um den Mauszeiger zu ändern, wenn er über das Symbol schwebt, zu einem Handzeiger (wie den, den Sie sehen, wenn Links überfahren werden), als zusätzlichen visuellen Hinweis für die Nutzer, dass das Symbol etwas Interessantes bewirkt.

### Gestaltung des Panels

Nun ist es an der Zeit, das eigentliche Schiebepanel selbst zu stylen. Fügen Sie die folgende Regel am unteren Rand Ihres CSS hinzu:

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

Es passiert hier viel — lassen Sie uns die einzelnen Teile besprechen:

- Zuerst setzen wir eine einfache {{cssxref("background-color")}} und {{cssxref("color")}} auf die Info-Box.
- Als Nächstes setzen wir eine feste {{cssxref("width")}} auf das Panel und machen seine {{cssxref("height")}} die gesamte Höhe des Browser-Viewports.
- Wir fügen auch etwas horizontales {{cssxref("padding")}} hinzu, um es ein wenig zu glätten.
- Dann setzen wir {{cssxref("position", "position: fixed;")}} auf das Panel, sodass es immer an derselben Stelle erscheint, selbst wenn die Seite Inhalte zum Scrollen hat. Wir kleben es an den {{cssxref("top")}} des Viewports und setzen es so, dass es standardmäßig außerhalb des Bildschirms nach rechts angezeigt wird.
- Schließlich setzen wir eine {{cssxref("transition")}} auf das Element. Das Transition-Attribut ist eine interessante Funktion, mit der Sie Übergänge zwischen Zuständen sanft anstatt abrupt gestalten können. In diesem Fall beabsichtigen wir, das Panel sanft auf den Bildschirm gleiten zu lassen, wenn das Kontrollkästchen aktiviert ist. (Oder anders ausgedrückt, wenn das Fragezeichen-Symbol geklickt wird.)

### Festlegung des aktiviertem Zustands

Es gibt noch ein letztes bisschen CSS hinzuzufügen — setzen Sie das folgende am Ende Ihres CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel gibt an, dass wenn das Info-Panel die `.open` Klasse gesetzt hat, die {{cssxref("right")}} Eigenschaft des `<aside>` auf `0px` gesetzt wird, was dazu führt, dass das Panel wieder auf dem Bildschirm erscheint (sanft aufgrund der Transition). Das Entfernen der `.open`-Klasse versteckt das Panel wieder.

Um die `.open` Klasse vom Info-Panel mit einem Klick auf den Button ein- und auszublenden, müssen wir etwas JavaScript verwenden. Fügen Sie den folgenden Code zwischen den {{htmlelement("script")}}-Tags hinzu:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt dem Button einen Klickereignishandler hinzu. Der Klick-Handler schaltet die `open` Klasse am Info-Box-Panel um, was das Panel in oder aus dem Blick schiebt. Der Ereignishandler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Eigenschaft auf den Button, um die Zugänglichkeit zu verbessern.

Also, da haben Sie es — der einfachste Weg, einen umschaltbaren Info-Panel-Effekt zu erstellen.

## Zusammenfassung

Damit endet unser Blick auf die Positionierung — inzwischen sollten Sie eine Vorstellung davon haben, wie die grundlegenden Mechaniken funktionieren, sowie ein Verständnis dafür, wie Sie diese beginnen können anzuwenden, um einige interessante UI-Features zu erstellen. Machen Sie sich keine Sorgen, wenn nicht alles sofort klar wurde — Positionierung ist ein ziemlich fortgeschrittenes Thema, und Sie können jederzeit die Artikel erneut durchgehen, um Ihr Verständnis zu unterstützen.
