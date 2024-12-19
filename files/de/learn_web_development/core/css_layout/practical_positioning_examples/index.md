---
title: Praktische Beispiele zur Positionierung
slug: Learn_web_development/Core/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser Artikel zeigt, wie Sie einige praxisnahe Beispiele erstellen können, um zu veranschaulichen, welche Arten von Dingen Sie mit der Positionierung machen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        >) und eine Idee, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein Verständnis für die praktischen Aspekte der Positionierung zu erlangen</td>
    </tr>
  </tbody>
</table>

## Ein Registerkarten-Info-Box

Das erste Beispiel, das wir betrachten, ist eine klassische Registerkarten-Info-Box — ein sehr gebräuchliches Feature, das verwendet wird, wenn Sie viele Informationen auf einem kleinen Bereich unterbringen möchten. Dies umfasst informationsintensive Apps wie Strategie-/Kriegsspiele, mobile Versionen von Websites, bei denen der Bildschirm schmal ist und der Platz begrenzt ist, sowie kompakte Informationsfelder, in denen Sie viele Informationen verfügbar machen möchten, ohne dass sie die gesamte Benutzeroberfläche ausfüllen. Unser einfaches Beispiel wird so aussehen, wenn wir fertig sind:

![Tab 1 ist ausgewählt. 'Tab 2' und 'Tab 3' sind die anderen beiden Tabs. Nur der Inhalt des ausgewählten Tabs ist sichtbar. Wenn ein Tab ausgewählt ist, ändert sich seine Textfarbe von Schwarz zu Weiß und seine Hintergrundfarbe von Orangerot zu Sattelbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) laufen sehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)). Sehen Sie sich das an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Sie denken vielleicht: "Warum nicht einfach die separaten Tabs als separate Webseiten erstellen und die Tabs dann zu den separaten Seiten führen lassen, um den Effekt zu erzielen?" Dieser Code wäre einfacher, ja, aber dann würde jede separate "Seitenansicht" tatsächlich eine neu geladene Webseite sein, was es schwieriger machen würde, Informationen über Ansichten hinweg zu speichern und dieses Feature in ein größeres UI-Design zu integrieren.

Zunächst möchten wir, dass Sie eine lokale Kopie der Startdateien erstellen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese an einem geeigneten Ort auf Ihrem lokalen Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Sehen wir uns das im Body enthaltene HTML an:

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

Hier haben wir ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, das zwei {{htmlelement("div")}}s enthält. Das erste Div enthält drei Buttons, die zu den eigentlichen Tabs werden, um auf unsere Inhaltsfenster zu klicken. Das zweite Div enthält drei {{htmlelement("article")}}-Elemente, die die Inhaltsfenster bilden, die jedem Tab entsprechen. Jedes Fenster enthält einige Beispielinhalte.

Die Idee hier ist, dass wir die Tabs so gestalten, dass sie wie ein standardmäßiges horizontales Navigationsmenü aussehen, und die Fenster so gestalten, dass sie mithilfe absoluter Positionierung übereinander liegen. Wir werden Ihnen auch etwas JavaScript geben, das Sie in Ihre Seite einfügen können, um bei einem Druck auf einen Tab das entsprechende Fenster anzuzeigen und den Tab selbst zu gestalten. Sie müssen den JavaScript-Code an dieser Stelle nicht verstehen, aber Sie sollten darüber nachdenken, so schnell wie möglich einige grundlegende [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)-Kenntnisse zu erwerben — je komplexer Ihre UI-Funktionen werden, desto wahrscheinlicher ist es, dass Sie etwas JavaScript benötigen, um die gewünschte Funktionalität zu implementieren.

### Allgemeine Einrichtung

Zunächst fügen Sie das folgende CSS zwischen Ihre öffnenden und schließenden {{HTMLElement("style")}}-Tags ein:

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

Dies ist nur eine allgemeine Einrichtung, um eine serifenlose Schriftart auf unserer Seite festzulegen, das {{cssxref("box-sizing")}}-Modell `border-box` zu verwenden und den Standard-{{htmlelement("body")}}-Rand zu entfernen.

Fügen Sie als Nächstes folgendes CSS direkt unter Ihr vorheriges CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Dies legt eine bestimmte Breite und Höhe auf den Inhalt fest und zentriert ihn auf dem Bildschirm unter Verwendung des alten CSS-Statements `margin: 1.25rem auto 0`. Zuvor im Kurs haben wir davon abgeraten, wenn möglich, eine feste Höhe auf Inhaltscontainer zu setzen; es ist in diesem Fall in Ordnung, da wir festen Inhalt in unseren Tabs haben.

### Gestaltung unserer Tabs

Nun wollen wir die Tabs so gestalten, dass sie wie Tabs aussehen — im Grunde genommen handelt es sich um ein horizontales Navigationsmenü, aber anstatt wie zuvor im Kurs gesehen beim Klicken auf verschiedene Webseiten geladen zu werden, führen sie dazu, dass verschiedene Fenster auf derselben Seite angezeigt werden. Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu, um den `tablist` zu einem {{cssxref("flex")}}-Container zu machen und 100% der Breite einzunehmen:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> In diesem Beispiel verwenden wir Deszendenten-Selektoren mit `.info-box` am Anfang der Kette — dies dient dazu, damit wir diese Funktion in eine Seite mit bereits vorhandenem Inhalt einfügen können, ohne befürchten zu müssen, dass die auf andere Teile der Seite angewendeten Stile beeinträchtigt werden.

Als Nächstes werden wir die Buttons so gestalten, dass sie wie Tabs aussehen. Fügen Sie folgendes CSS hinzu:

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

Als Nächstes werden wir die `:focus`- und `:hover`-Zustände der Tabs so gestalten, dass sie anders aussehen, wenn sie fokussiert/gehört werden, um den Benutzern visuelles Feedback zu geben.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Danach werden wir eine Regel festlegen, die einen der Tabs hervorhebt, wenn die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Eigenschaft auf `true` gesetzt ist. Wir werden dies mit JavaScript festlegen, wenn ein Tab angeklickt wird. Platzieren Sie das folgende CSS unter Ihren anderen Stilen:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Gestaltung der Fenster

Der nächste Job ist das Gestalten unserer Fenster. Los geht's!

Fügen Sie zunächst die folgende Regel hinzu, um den `.panels`-{{htmlelement("div")}}-Container zu gestalten. Hier legen wir eine feste {{cssxref("height")}} fest, um sicherzustellen, dass die Fenster genau in die Info-Box passen, {{cssxref("position")}} `relative`, um das {{htmlelement("div")}} als Positionierungskontext festzulegen, damit Sie positionierte Kindelemente relativ dazu und nicht zum anfänglichen Viewport platzieren können, und schließlich {{cssxref("clear")}} das Float, das im obigen CSS gesetzt ist, sodass es das restliche Layout nicht stört.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Schließlich für diesen Abschnitt werden wir die individuellen {{htmlelement("article")}}-Elemente, die unsere Fenster bilden, gestalten. Die erste Regel, die wir hinzufügen, wird die Fenster absolut {{cssxref("position")}}ieren und sie alle gleich an die {{cssxref("top")}} und {{cssxref("left")}} Seite ihres {{htmlelement("div")}}-Containers setzen — dieser Teil ist der Schlüssel zu dieser gesamten Layout-Funktion, da er die Fenster übereinander sitzen lässt. Die Regel gibt den Fenstern auch die gleiche feste Höhe wie der Container und fügt dem Inhalt ein Padding, eine Text-{{cssxref("color")}} und eine {{cssxref("background-color")}} hinzu.

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

Die zweite Regel, die wir hier hinzufügen, bewirkt, dass ein Fenster mit einer `is-hidden`-Klasse auf sich versteckt wird. Auch hier werden wir diese Klasse mit JavaScript zur passenden Zeit hinzufügen/entfernen. Wenn ein Tab ausgewählt wird, entfernt das entsprechende Fenster seine `is-hidden`-Klasse und alle anderen Fenster erhalten die `is-hidden`-Klasse, sodass jeweils nur ein Fenster sichtbar ist.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Der letzte Teil, der diese Funktion zum Funktionieren bringt, ist der JavaScript-Code. Die Datei `tabs-manual.js` wurde mit dem [`<script>`](/de/docs/Web/HTML/Element/script)-Tag eingebunden:

```html
<script src="tabs-manual.js"></script>
```

Dieser Code führt die folgenden Aktionen aus:

- Beim [Laden des Fensters](/de/docs/Web/API/Window/load_event) initialisiert er die `TabsManual`-Klasse für alle `tablist`-Elemente.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Tab- und Panel-Referenzen in den Variablen `tabs` und `tabpanels` gesammelt, sodass wir später leicht Dinge mit ihnen anstellen können.
- Der Konstruktor registriert auch [`click`](/de/docs/Web/API/Element/click_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler für alle Tabs. Die Ereignishandler enthalten die Logik dafür, was passiert, wenn ein Tab durch Klicken oder Tastendruck ausgewählt wird.
- In der Funktion `setSelectedTab(currentTab)` passiert folgendes:

  - Eine `for`-Schleife wird verwendet, um alle Tabs durchzugehen und sie durch Festlegen der `aria-selected`-Eigenschaft auf `false` zu deselektieren und die `is-hidden`-Klasse zu den entsprechenden Fenstern hinzuzufügen.
  - Für den ausgewählten Tab (`currentTab`) wird die `aria-selected`-Eigenschaft auf `true` gesetzt und die `is-hidden`-Klasse aus dem entsprechenden Fenster entfernt.

- Der Code enthält auch Logik zur Unterstützung der Tastaturnavigation mit den Tasten `Linkspfeil`, `Rechtspfeil`, `Home` und `Ende`.

## Eine fixierte Position für die Registerkarten-Info-Box

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Info-Box — und fügen es in den Kontext einer vollständigen Webseite ein. Aber nicht nur das — wir geben ihr auch eine fixierte Position, sodass sie in derselben Position im Browserfenster bleibt. Wenn der Hauptinhalt scrollt, bleibt die Info-Box an derselben Stelle auf dem Bildschirm. Unser fertiges Beispiel wird so aussehen:

![Info-Box ist ein Container mit 3 Tabs, wobei der erste Tab ausgewählt ist und nur der Inhalt des ersten Tabs angezeigt wird. Es hat eine fixierte Position. Die Info-Box ist oben links im Fenster positioniert und hat eine Breite von 452 Pixeln. Ein Container mit Fake-Inhalten belegt die restliche rechte Hälfte des Fensters; der Fake-Inhaltscontainer ist höher als das Fenster und scrollbar. Wenn die Seite gescrollt wird, bewegt sich der Container auf der rechten Seite, während die Info-Box fixiert an derselben Stelle auf dem Bildschirm bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) laufen sehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)). Sehen Sie sich das an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Als Ausgangspunkt können Sie Ihr komplettes Beispiel aus dem ersten Abschnitt des Artikels verwenden oder eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repo erstellen.

### HTML-Ergänzungen

Zunächst benötigen wir zusätzliches HTML, um den Hauptinhalt der Webseite darzustellen. Fügen Sie das folgende {{htmlelement("section")}} direkt unterhalb Ihres öffnenden {{htmlelement("body")}}-Tags ein, unmittelbar vor dem vorhandenen Abschnitt:

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
> Sie können den Fake-Inhalt gerne gegen echten Inhalt austauschen, wenn Sie möchten.

### Änderungen im bestehenden CSS

Als Nächstes müssen wir einige kleine Änderungen im bestehenden CSS vornehmen, um die Info-Box zu platzieren und zu positionieren. Ändern Sie Ihre `.info-box`-Regel, um `margin: 0 auto;` zu entfernen (wir möchten die Info-Box nicht mehr zentrieren), fügen Sie {{cssxref("position", "position: fixed;")}} hinzu und fixieren Sie es an der {{cssxref("top")}} des Browser-Viewports.

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

### Gestaltung des Hauptinhalts

Das Einzige, was für dieses Beispiel noch fehlt, ist dem Hauptinhalt etwas Gestaltung zu geben. Fügen Sie die folgende Regel unter den Rest Ihres CSS hinzu:

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

Zuerst geben wir dem Inhalt die gleiche {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("padding")}} wie die Info-Box-Panels. Dann geben wir ihm einen großen {{cssxref("margin-left")}}, um ihn nach rechts zu verschieben, damit Platz für die Info-Box geschaffen wird und nichts anderes überlappt.

Damit endet das zweite Beispiel; wir hoffen, dass Sie das dritte genauso interessant finden werden.

## Ein einfahrbares verstecktes Panel

Das letzte Beispiel, das wir hier präsentieren werden, ist ein Panel, das bei Druck auf ein Symbol ein- und ausfährt — wie früher erwähnt, ist dies beliebt für Situationen wie mobile Layouts, wo der verfügbare Bildschirmplatz klein ist, sodass Sie nicht den größten Teil davon mit einem Menü oder Info-Panel überdecken möchten, anstatt mit dem nützlichen Inhalt.

Unser fertiges Modell wird so aussehen:

![Ein leerer Bildschirm auf der linken Seite mit 60% des Bildschirms und einem 40% breiten Panel, das Informationen rechts anzeigt. Ein 'Fragezeichen'-Symbol befindet sich in der oberen rechten Ecke. Das Panel fährt beim Drücken dieses 'Fragezeichen'-Symbols ein und aus.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) sehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)). Sehen Sie sich das an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Als Ausgangspunkt erstellen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repo. Dies folgt nicht aus dem vorherigen Beispiel, daher ist eine neue Startdatei erforderlich. Lassen Sie uns einen Blick auf das HTML in der Datei werfen:

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

Hier beginnen wir mit einem {{htmlelement("button")}}-Element mit einem speziellen Fragezeichen-Symbol als Button-Text. Der Button wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Element/aside)-Info-Panel anzuzeigen/auszublenden. In den folgenden Abschnitten erklären wir, wie das alles funktioniert.

### Gestaltung des Buttons

Zuerst lassen Sie uns den Button behandeln — fügen Sie folgendes CSS zwischen Ihre {{htmlelement("style")}}-Tags ein:

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

Die erste Regel gestaltet den `<button>`; hier haben wir:

- Eine große {{cssxref("font-size")}} eingestellt, um das Symbol schön groß zu machen.
- Den Rahmen entfernt und den Hintergrund transparent gemacht, sodass stattdessen nur das `?`-Symbol angezeigt wird.
- {{cssxref("position")}} `absolute` darauf gesetzt und {{cssxref("top")}} sowie {{cssxref("right")}} genutzt, um es in der oberen rechten Ecke schön zu positionieren.
- Ein {{cssxref("z-index")}} von 1 darauf gesetzt — dies soll verhindern, dass das Info-Panel, wenn es gestylt und angezeigt wird, das Symbol verdeckt; stattdessen wird das Symbol darüber gesetzt, sodass es erneut gedrückt werden kann, um das Info-Fenster auszublenden.
- Die {{cssxref("cursor")}}-Eigenschaft verwendet, um den Mauscursor zu ändern, wenn er über das Symbol schwebt, um einen Handsymbolzeiger anzuzeigen (ähnlich dem, den Sie sehen, wenn Links geschwebt werden), als zusätzlichen visuellen Hinweis für Benutzer, dass das Symbol etwas Interessantes tut.

### Gestaltung des Panels

Jetzt ist es Zeit, das eigentliche einfahrende Panel selbst zu gestalten. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

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

Es ist viel los hier — lassen Sie uns Stück für Stück darüber sprechen:

- Zunächst setzen wir einfache {{cssxref("background-color")}} und {{cssxref("color")}} auf das Info-Feld.
- Als Nächstes legen wir eine feste {{cssxref("width")}} auf das Panel, und seine {{cssxref("height")}} die gesamte Höhe des Browser-Viewports.
- Wir fügen auch etwas horizontales {{csshref("padding")}} hinzu, um es ein wenig aufzuteilen.
- Danach setzen wir {{cssxref("position", "position: fixed;")}} auf das Panel, sodass es immer an derselben Stelle erscheint, auch wenn die Seite Inhalt hat, der gescrollt werden kann. Wir kleben es an die {{cssxref("top")}} des Viewports und setzen es so, dass es standardmäßig außerhalb des Bildschirms an der {{cssxref("right")}} ist.
- Schließlich legen wir eine {{cssxref("transition")}} auf das Element, Transition ist ein interessantes Merkmal, das es ermöglicht, dass Übergänge zwischen Zuständen reibungslos statt abrupt erfolgen. In diesem Fall beabsichtigen wir, das Panel sanft auf den Bildschirm zu schieben, wenn das Checkbox aktiviert ist. (Oder anders gesagt, wenn das Fragezeichen-Symbol angeklickt wird.)

### Festlegen des überprüften Zustands

Es gibt ein letztes bisschen CSS, das hinzugefügt werden muss — setzen Sie das Folgende am Ende Ihres CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt, dass wenn das Info-Panel eine `.open`-Klasse auf sich hat, die {{cssxref("right")}}-Eigenschaft des `<aside>` auf `0px` gesetzt wird, was dazu führt, dass das Panel wieder auf dem Bildschirm erscheint (sanft aufgrund der Transition). Entfernen der `.open`-Klasse versteckt das Panel wieder.

Um die `.open`-Klasse mit einem Klick auf den Button auf dem Info-Panel zu setzen/entfernen, müssen wir etwas JavaScript verwenden. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}}-Tags hinzu:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt einen Klick-Ereignishandler zum Button hinzu. Der Klickhandler wechselt die `open`-Klasse auf dem Info-Box-Panel, was das Panel in oder aus dem Sichtbereich gleiten lässt. Der Ereignishandler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Eigenschaft auf dem Button, um die Barrierefreiheit zu verbessern.

So gibt es sie — die einfachste Möglichkeit, einen umschaltbaren Info-Panel-Effekt zu erstellen.

## Zusammenfassung

Damit ist unser Blick auf die Positionierung abgeschlossen — mittlerweile sollten Sie eine Idee davon haben, wie die grundlegenden Mechanismen funktionieren und wie Sie beginnen können, diese anzuwenden, um einige interessante UI-Features zu erstellen. Machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstanden haben — die Positionierung ist ein ziemlich fortgeschrittenes Thema und Sie können die Artikel jederzeit erneut durcharbeiten, um Ihr Verständnis zu verbessern.
