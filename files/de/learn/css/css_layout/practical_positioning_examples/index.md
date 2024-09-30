---
title: Praktische Beispiele für Positionierung
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{LearnSidebar}}

Dieser Artikel zeigt, wie man einige realitätsnahe Beispiele erstellt, um zu veranschaulichen, welche Arten von Dingen mit der Positionierung möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein Verständnis für die Anwendungsmöglichkeiten von Positionierung erlangen</td>
    </tr>
  </tbody>
</table>

## Eine Registerkarten-Infobox

Das erste Beispiel, das wir betrachten, ist eine klassische Infobox mit Registerkarten — eine sehr häufige Funktion, wenn Sie viele Informationen in einem kleinen Bereich unterbringen möchten. Dazu gehören informationslastige Apps wie Strategie-/Kriege-Spiele, mobile Versionen von Webseiten, auf denen der Bildschirm schmal ist und der Platz begrenzt ist, sowie kompakte Infoboxen, bei denen Sie viele Informationen zugänglich machen möchten, ohne dass sie die gesamte Benutzeroberfläche ausfüllen. Unser einfaches Beispiel wird so aussehen, wenn wir fertig sind:

![Tab 1 ist ausgewählt. "Tab 2" und "Tab 3" sind die anderen beiden Tabs. Nur der Inhalt des ausgewählten Tabs ist sichtbar. Wenn ein Tab ausgewählt ist, ändert sich seine Schriftfarbe von Schwarz zu Weiß und seine Hintergrundfarbe von Orange-Rot zu Sattelbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Sie könnten denken: "Warum nicht einfach die separaten Registerkarten als separate Webseiten erstellen und einfach die Registerkarten klicken lassen, um die separaten Seiten anzuzeigen und den Effekt zu erzeugen?" Ja, dieser Code wäre einfacher, aber dann wäre jede separate "Seitenansicht" tatsächlich eine neu geladene Webseite, was es schwieriger machen würde, Informationen über Ansichten hinweg zu speichern und diese Funktion in ein größeres UI-Design zu integrieren.

Zunächst möchten wir, dass Sie eine lokale Kopie der Startdateien erstellen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese Dateien an einem sinnvollen Ort auf Ihrem Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Schauen wir uns das HTML an, das sich im Body befindet:

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

Hier haben wir ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, das zwei {{htmlelement("div")}}-Elemente enthält. Das erste Div enthält drei Buttons, die die tatsächlichen Registerkarten sein werden, auf die Sie klicken können, um unsere Inhalts-Panels anzuzeigen. Das zweite Div enthält drei {{htmlelement("article")}}-Elemente, die die Inhalts-Panels bilden, die zu jeder Registerkarte gehören. Jedes Panel enthält einige Beispielinhalte.

Die Idee hier ist, dass wir die Registerkarten so gestalten, dass sie wie ein Standard-Horizontal-Navigationsmenü aussehen und die Panels mit absoluter Positionierung übereinander anordnen. Wir geben Ihnen auch ein bisschen JavaScript, das Sie auf Ihrer Seite einfügen können, um das entsprechende Panel anzuzeigen, wenn eine Registerkarte gedrückt wird, und den Registerkarte selbst zu gestalten. Sie müssen den JavaScript-Code an dieser Stelle nicht verstehen, aber Sie sollten darüber nachdenken, so bald wie möglich einige grundlegende [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics)-Kenntnisse zu erlernen — je komplexer Ihre UI-Funktionen werden, desto wahrscheinlicher ist es, dass Sie ein wenig JavaScript benötigen, um Ihre gewünschte Funktionalität umzusetzen.

### Allgemeine Einrichtung

Fügen Sie zu Beginn Folgendes zwischen Ihren öffnenden und schließenden {{HTMLElement("style")}}-Tags ein:

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

Dies ist nur eine allgemeine Einrichtung, um auf unserer Seite eine serifenlose Schriftart zu setzen, das `border-box`-{{cssxref("box-sizing")}}-Modell zu verwenden und den Standard-{{htmlelement("body")}}-Rand zu entfernen.

Fügen Sie als Nächstes Folgendes direkt unter Ihrem vorherigen CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Dies legt eine spezifische Breite und Höhe für den Inhalt fest und zentriert ihn auf dem Bildschirm unter Verwendung des alten `margin: 1.25rem auto 0`. In vorherigen Kursen haben wir davon abgeraten, wenn möglich, eine feste Höhe auf Inhaltscontainer zu setzen. In diesem Fall ist es jedoch in Ordnung, da wir festen Inhalt in unseren Registerkarten haben.

### Styling unserer Registerkarten

Jetzt möchten wir die Registerkarten so gestalten, dass sie wie Registerkarten aussehen — im Grunde sind es horizontale Navigationsmenüs, aber anstatt verschiedene Webseiten zu laden, wenn sie angeklickt werden, so wie bisher in diesem Kurs gesehen, lassen sie verschiedene Panels auf derselben Seite anzeigen. Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu, um das `tablist`-Element zu einem {{cssxref("flex")}}-Container zu machen und es 100% Breite beanspruchen zu lassen:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden in diesem Beispiel überall Nachfahren-Selektoren mit `.info-box` am Anfang der Kette — dies ist so, dass wir diese Funktion in eine Seite mit bereits vorhandenem Inhalt einfügen können, ohne Befürchtungen, die auf andere Teile der Seite angewandten Stile zu beeinflussen.

Als Nächstes gestalten wir die Buttons so, dass sie wie Registerkarten aussehen. Fügen Sie das folgende CSS hinzu:

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

Als Nächstes setzen wir die `:focus`- und `:hover`-Zustände der Registerkarten, um sie anders aussehen zu lassen, wenn sie fokussiert/gehovered werden, und geben Benutzern visuelles Feedback.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Dann setzen wir eine Regel, die eine der Registerkarten hervorhebt, wenn die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Eigenschaft auf `true` gesetzt ist. Wir werden das mithilfe von JavaScript festlegen, wenn eine Registerkarte angeklickt wird. Platzieren Sie das folgende CSS unterhalb Ihrer anderen Stile:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Styling der Panels

Der nächste Job ist es, unsere Panels zu gestalten. Los geht's!

Fügen Sie zuerst die folgende Regel hinzu, um den `.panels`-{{htmlelement("div")}}-Container zu gestalten. Hier setzen wir eine feste {{cssxref("height")}}, um sicherzustellen, dass sich die Panels bequem innerhalb der Infobox befinden, {{cssxref("position")}} `relative`, um das {{htmlelement("div")}} als Positionierungskontext festzulegen, damit Sie positionierte Kindelemente relativ zu ihm und nicht zum ursprünglichen Viewport platzieren können, und schließlich {{cssxref("clear")}}en wir das Float, das im oben stehenden CSS gesetzt wurde, damit es den Rest des Layouts nicht beeinträchtigt.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Zum Schluss für diesen Abschnitt werden wir die einzelnen {{htmlelement("article")}}-Elemente gestalten, die unsere Panels bilden. Die erste Regel, die wir hinzufügen, wird die Panels absolut {{cssxref("position")}}ieren und sie alle bündig an die {{cssxref("top")}}- und {{cssxref("left")}}-Seite ihres {{htmlelement("div")}}-Containers setzen — dieser Teil ist der Schlüssel zu diesem gesamten Layout-Feature, da er die Panels übereinander positioniert. Die Regel gibt den Panels auch die gleiche festgesetzte Höhe wie der Container und gibt dem Inhalt etwas {{cssxref("padding")}}, eine Text-{{cssxref("color")}} und eine {{cssxref("background-color")}}.

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

Die zweite Regel, die wir hier hinzufügen, sorgt dafür, dass ein Panel mit einer Klasse `is-hidden` darauf versteckt wird. Auch hier werden wir diese Klasse zu gegebener Zeit mit JavaScript hinzufügen/entfernen. Wenn eine Registerkarte ausgewählt wird, wird das entsprechende Panel seine `is-hidden` Klasse entfernt bekommen und alle anderen Panels werden `is-hidden` gesetzt, sodass nur ein Panel gleichzeitig sichtbar ist.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Der letzte Teil, der diese Funktion zum Laufen bringt, ist der JavaScript-Code. Die Datei `tabs-manual.js` wurde mit dem [`<script>`](/de/docs/Web/HTML/Element/script)-Tag eingefügt:

```html
<script src="tabs-manual.js"></script>
```

Dieser Code erledigt Folgendes:

- Beim [Window Load Event](/de/docs/Web/API/Window/load_event) wird die `TabsManual` [Class](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) für alle `tablist`-Elemente initialisiert.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Registerkarten- und Panel-Referenzen in den Variablen `tabs` und `tabpanels` gesammelt, sodass wir später leicht Dinge mit ihnen machen können.
- Der Konstruktor registriert auch [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event-Handler auf allen Registerkarten. Die Event-Handler beinhalten Logik darüber, was passieren soll, wenn eine Registerkarte mit einem Klick oder Tastendruck ausgewählt wird.
- In der Funktion `setSelectedTab(currentTab)` geschieht Folgendes:

  - Eine `for`-Schleife wird verwendet, um alle Registerkarten durchzugehen und sie durch Setzen der `aria-selected`-Eigenschaft auf `false` zu deselektieren und durch Setzen der `is-hidden`-Klasse auf den entsprechenden Panels.
  - An der ausgewählten Registerkarte (`currentTab`) wird `aria-selected` auf `true` gesetzt und die `is-hidden`-Klasse wird vom entsprechenden Panel entfernt.

- Der Code hat auch Logik, um die Navigation mit der Tastatur mit den Tasten `Linker Pfeil`, `Rechter Pfeil`, `Home` und `Ende` zu unterstützen.

## Eine fest-positionierte Infobox mit Registerkarten

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Infobox — und fügen es in den Kontext einer vollständigen Webseite ein. Aber nicht nur das — wir geben ihm eine feste Position, damit es an derselben Stelle im Browserfenster bleibt. Wenn der Hauptinhalt scrollt, bleibt die Infobox an derselben Position auf dem Bildschirm. Unser fertiges Beispiel wird so aussehen:

![Die Infobox ist ein Container mit 3 Registerkarten, wobei die erste Registerkarte ausgewählt ist und nur der Inhalt der ersten Registerkarte angezeigt wird. Es hat eine feste Position. Die Infobox ist in der oberen linken Ecke des Fensters mit einer Breite von 452 Pixeln positioniert. Ein Container mit gefälschtem Inhalt nimmt die rechte Hälfte des Fensters ein; der Container mit gefälschtem Inhalt ist höher als das Fenster und scrollbar. Wenn die Seite gescrollt wird, bewegt sich der rechte Seitencenter-Container, während die Infobox fest an derselben Stelle auf dem Bildschirm bleibt. ](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Als Ausgangspunkt können Sie Ihr fertiges Beispiel aus dem ersten Abschnitt des Artikels verwenden oder eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repository erstellen.

### HTML-Ergänzungen

Zunächst benötigen wir etwas zusätzliches HTML, um den Hauptinhalt der Webseite darzustellen. Fügen Sie den folgenden {{htmlelement("section")}} direkt unter Ihrem öffnenden {{htmlelement("body")}}-Tag hinzu, direkt vor dem bestehenden Abschnitt:

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
> Sie können gerne den gefälschten Inhalt durch echten Inhalt ersetzen, wenn Sie möchten.

### Änderungen am bestehenden CSS

Als Nächstes müssen wir einige kleine Änderungen am bestehenden CSS vornehmen, um die Infobox platziert und positioniert zu bekommen. Ändern Sie Ihre `.info-box`-Regel, indem Sie `margin: 0 auto;` entfernen (wir möchten die Infobox nicht mehr zentrieren), {{cssxref("position", "position: fixed;")}} hinzufügen und sie an den {{cssxref("top")}} des Browser-Viewports kleben.

Es sollte jetzt so aussehen:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 0 auto;
  position: fixed;
  top: 0;
}
```

### Styling des Hauptinhalts

Das Einzige, was für dieses Beispiel noch übrig ist, ist, dem Hauptinhalt ein wenig Stil zu verleihen. Fügen Sie die folgende Regel unter den Rest Ihres CSS hinzu:

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

Zuerst geben wir dem Inhalt dieselbe {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("padding")}} wie die Panels der Infobox. Dann geben wir ihm einen großen {{cssxref("margin-left")}}, um ihn nach rechts zu verschieben und Platz für die Infobox zu schaffen, damit sie nicht mit etwas anderem überlappt.

Damit endet das zweite Beispiel; wir hoffen, dass Sie das dritte ebenso interessant finden.

## Ein verborgenes Schiebepanel

Das letzte Beispiel, das wir hier präsentieren werden, ist ein Panel, das beim Drücken eines Symbols auf dem Bildschirm ein- und ausgeblendet wird — wie bereits erwähnt, ist dies beliebt in Situationen wie mobilen Layouts, bei denen der verfügbare Bildschirmraum gering ist, sodass Sie nicht den größten Teil davon nutzen möchten, um ein Menü oder Info-Panel anstelle des nützlichen Inhalts anzuzeigen.

Unser fertiges Beispiel wird so aussehen:

![Ein leerer Bildschirm auf der linken 60% des Bildschirms mit einem 40% breiten Panel, das Informationen rechts anzeigt. Ein Symbol in Form eines Fragezeichens befindet sich in der oberen rechten Ecke. Das Panel schiebt sich ein und aus dem Bildschirm durch Drücken dieses 'Fragezeichen'-Symbols.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Als Ausgangspunkt erstellen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repository. Dies folgt nicht auf das vorherige Beispiel, daher ist eine neue Startdatei erforderlich. Schauen wir uns das HTML in der Datei an:

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

Zu Beginn haben wir hier ein {{htmlelement("button")}}-Element mit einem speziellen Fragezeichen-Zeichen als Button-Text. Der Button wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Element/aside)-Info-Panel anzuzeigen/zu verbergen. In den folgenden Abschnitten werden wir erklären, wie dies alles funktioniert.

### Styling des Buttons

Lassen Sie uns zunächst den Button behandeln — fügen Sie das folgende CSS zwischen Ihre {{htmlelement("style")}}-Tags ein:

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

- Eine große {{cssxref("font-size")}} gesetzt, um das Symbol schön groß zu machen.
- Den Rand entfernt und den Hintergrund transparent gemacht, sodass stattdessen nur das `?`-Symbol angezeigt wird.
- {{cssxref("position")}} `absolute` darauf gesetzt und {{cssxref("top")}} und {{cssxref("right")}} verwendet, um es schön in der oberen rechten Ecke zu positionieren.
- Einen {{cssxref("z-index")}} von 1 darauf gesetzt — dies ist so, dass das Info-Panel, wenn es gestylt und angezeigt wird, nicht das Symbol überdeckt; stattdessen wird das Symbol darüber sitzen, sodass es erneut gedrückt werden kann, um das Info-Panel zu verbergen.
- Die {{cssxref("cursor")}}-Eigenschaft verwendet, um den Mauscursor zu verändern, wenn er über dem Symbol schwebt, zu einem Handzeiger (wie der, den Sie sehen, wenn über Links gefahren wird), als zusätzlicher visueller Hinweis für Benutzer, dass das Symbol etwas Interessantes tut.

### Styling des Panels

Jetzt ist es an der Zeit, das eigentliche Schiebepanel selbst zu gestalten. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

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

Hier passiert eine Menge — lassen Sie es uns Stück für Stück besprechen:

- Zuerst setzen wir ein einfaches {{cssxref("background-color")}} und {{cssxref("color")}} auf dem Info-Panel.
- Als Nächstes setzen wir eine feste {{cssxref("width")}} auf das Panel und machen seine {{cssxref("height")}} die gesamte Höhe des Browserfensters.
- Wir fügen auch ein bisschen horizontalen {{cssxref("padding")}} hinzu, um es etwas Platz zu machen.
- Als Nächstes setzen wir {{cssxref("position", "position: fixed;")}} auf das Panel, damit es immer an derselben Stelle erscheint, auch wenn die Seite scrollbare Inhalte hat. Wir kleben es an die {{cssxref("top")}}-Seite des Viewports und setzen es so, dass es standardmäßig rechts vom Bildschirm außerhalb liegt.
- Schließlich setzen wir ein {{cssxref("transition")}} auf das Element. Transition ist ein interessantes Feature, das es erlaubt, Änderungen zwischen Zuständen sanft vorzunehmen, statt nur abrupt auf "ein" oder "aus" zu schalten. In diesem Fall haben wir vor, das Panel sanft auf den Bildschirm gleiten zu lassen, wenn das Kontrollkästchen aktiviert ist. (Oder anders gesagt, wenn das Fragezeichen-Symbol geklickt wird.)

### Setzen des Aktivierungszustands

Es gibt noch ein letztes Stück CSS hinzuzufügen — setzen Sie das Folgende am unteren Ende Ihres CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt, dass, wenn das Info-Panel die Klasse `.open` gesetzt hat, die {{cssxref("right")}}-Eigenschaft des `<aside>` auf `0px` gesetzt wird, was dazu führt, dass das Panel wieder auf dem Bildschirm erscheint (sanft aufgrund des Übergangs). Durch Entfernen der `.open`-Klasse wird das Panel wieder versteckt.

Um die `.open`-Klasse mit einem Klick auf den Button zum Info-Panel hinzuzufügen oder zu entfernen, müssen wir etwas JavaScript verwenden. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}}-Tags ein:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt dem Button einen Klick-Event-Handler hinzu. Der Klick-Handler toggelt die `open`-Klasse auf dem Info-Box-Panel, welches das Panel in oder aus dem Sichtbereich schiebt. Der Event-Handler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Eigenschaft auf dem Button, um die Zugänglichkeit zu verbessern.

Das wäre es also — die einfachste Möglichkeit, einen umschaltbaren Info-Panel-Effekt zu erzeugen.

## Zusammenfassung

Damit endet unser Blick auf die Positionierung — bis jetzt sollten Sie eine Vorstellung davon haben, wie die grundlegenden Mechaniken funktionieren, sowie ein Verständnis dafür, wie man anfängt, diese einzusetzen, um einige interessante UI-Funktionen zu erstellen. Machen Sie sich keine Sorgen, wenn Sie dies nicht sofort verstanden haben — Positionierung ist ein ziemlich fortgeschrittenes Thema, und Sie können die Artikel immer wieder durchgehen, um Ihr Verständnis zu vertiefen.
