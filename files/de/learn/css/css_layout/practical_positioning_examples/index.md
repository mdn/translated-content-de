---
title: Praktische Beispiele für Positionierung
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}

Dieser Artikel zeigt, wie man einige praxisnahe Beispiele erstellt, um zu veranschaulichen, welche Möglichkeiten Sie mit der Positionierung haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein Verständnis für die praktischen Aspekte der Positionierung zu bekommen</td>
    </tr>
  </tbody>
</table>

## Ein Reiter-Infobox

Das erste Beispiel, das wir uns ansehen, ist eine klassische Reiter-Infobox – ein sehr häufig genutztes Feature, wenn viele Informationen in einem kleinen Bereich untergebracht werden sollen. Dies umfasst informationsreiche Apps wie Strategie- oder Kriegsspiele, mobile Versionen von Websites, bei denen der Bildschirm schmal ist und der Platz begrenzt, sowie kompakte Informationsboxen, bei denen viele Informationen verfügbar gemacht werden sollen, ohne dass sie die gesamte Benutzeroberfläche füllen. Unser einfaches Beispiel wird am Ende so aussehen:

![Reiter 1 ist ausgewählt. 'Tab 2' und 'Tab 3' sind die anderen beiden Reiter. Nur der Inhalt des ausgewählten Reiters ist sichtbar. Wenn ein Reiter ausgewählt ist, ändert sich seine Textfarbe von schwarz zu weiß und seine Hintergrundfarbe von orangerot zu sattelbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live sehen unter [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)). Werfen Sie einen Blick darauf, um zu sehen, was Sie in diesem Abschnitt des Artikels bauen werden.

Sie denken vielleicht: "Warum nicht einfach die separaten Reiter als separate Webseiten erstellen und die Reiter zur Erstellung des Effekts einfach mit den separaten Seiten verknüpfen?" Ja, dieser Code wäre einfacher, aber dann wäre jede separate "Seiten"-Ansicht tatsächlich eine neu geladene Webseite. Dies würde es schwieriger machen, Informationen zwischen den Ansichten zu speichern und dieses Feature in ein größeres UI-Design zu integrieren.

Zunächst möchten wir, dass Sie eine lokale Kopie der Startdateien anlegen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese an einem sinnvollen Ort auf Ihrem lokalen Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Werfen wir einen Blick auf das HTML im Body:

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
      <h2>Der erste Reiter</h2>
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
      <h2>Der zweite Reiter</h2>
      <p>
        Dieser Reiter enthält keinen Lorem Ipsum. Aber der Inhalt ist dennoch nicht sehr aufregend.
      </p>
    </article>

    <article id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3">
      <h2>Der dritte Reiter</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Und jetzt eine geordnete Liste: wie aufregend!
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

Hier haben wir ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, das zwei {{htmlelement("div")}}s enthält. Das erste div enthält drei Buttons, die zu den tatsächlichen Reitern werden, auf die geklickt wird, um unsere Inhaltspanels anzuzeigen. Das zweite div enthält drei {{htmlelement("article")}}-Elemente, die aus den Inhaltspanels bestehen, die jeweils einem Reiter entsprechen. Jedes Panel enthält etwas Beispielinhalt.

Die Idee ist, die Reiter wie ein standardmäßiges horizontales Navigationsmenü zu gestalten und die Panels übereinander zu positionieren, indem absolute Positionierung verwendet wird. Wir geben Ihnen auch ein wenig JavaScript, das Sie auf Ihrer Seite einfügen können, um das entsprechende Panel anzuzeigen, wenn ein Reiter gedrückt wird, und den Reiter selbst zu stylen. Sie müssen den JavaScript-Code selbst in diesem Stadium nicht verstehen, aber Sie sollten darüber nachdenken, so schnell wie möglich einige grundlegende [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics)-Kenntnisse zu erlernen — je komplexer Ihre UI-Funktionen werden, desto wahrscheinlicher ist es, dass Sie JavaScript benötigen, um die gewünschte Funktionalität umzusetzen.

### Allgemeine Einrichtung

Fügen Sie zunächst das folgende zwischen Ihren öffnenden und schließenden {{HTMLElement("style")}}-Tags hinzu:

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

Dies ist nur eine allgemeine Einrichtung, um eine serifenlose Schriftart auf unserer Seite festzulegen, das `border-box`-{{cssxref("box-sizing")}}-Modell zu verwenden und den Standard-{{htmlelement("body")}}-Rand zu entfernen.

Fügen Sie als nächstes das folgende direkt unter Ihrem vorherigen CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Dies legt eine spezifische Breite und Höhe für den Inhalt fest und zentriert ihn auf dem Bildschirm mit dem alten `margin: 1.25rem auto 0`. In diesem Kurs haben wir zuvor davon abgeraten, eine feste Höhe für Inhaltscontainer festzulegen, wenn dies überhaupt möglich ist; in diesem Fall ist es jedoch in Ordnung, da wir festen Inhalt in unseren Reitern haben.

### Unsere Reiter stylen

Jetzt möchten wir die Reiter so gestalten, dass sie wie Reiter aussehen – im Grunde sind dies ein horizontales Navigationsmenü, aber anstatt, dass sie beim Anklicken verschiedene Webseiten laden, wie wir es im Kurs zuvor gesehen haben, bewirken sie, dass auf derselben Seite verschiedene Panels angezeigt werden. Fügen Sie als erstes die folgende Regel am Ende Ihres CSS hinzu, damit das `tablist` ein {{cssxref("flex")}}-Container wird und die 100% Breite ausfüllt:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden in diesem Beispiel Nachkommen-Selektoren mit `.info-box` am Anfang der Kette – dies ist, damit wir dieses Feature auf einer Seite mit bereits vorhandenem Inhalt einfügen können, ohne dass die Styles, die auf andere Teile der Seite angewendet werden, beeinträchtigt werden.

Als nächstes gestalten wir die Buttons so, dass sie wie Reiter aussehen. Fügen Sie das folgende CSS hinzu:

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

Als nächstes setzen wir die `:focus`- und `:hover`-Zustände der Reiter, um sie anders aussehen zu lassen, wenn sie fokussiert oder über ihnen geschwebt wird, um den Benutzern visuelles Feedback zu geben.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Dann setzen wir eine Regel, die einen der Reiter hervorhebt, wenn die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Eigenschaft auf `true` gesetzt ist. Wir werden dies mit JavaScript setzen, wenn ein Reiter angeklickt wird. Platzieren Sie das folgende CSS unter Ihren anderen Styles:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Die Panels stylen

Die nächste Aufgabe besteht darin, unsere Panels zu stylen. Los geht's!

Zunächst einmal fügen Sie die folgende Regel hinzu, um den `.panels`-{{htmlelement("div")}}-Container zu stylen. Hier setzen wir eine feste {{cssxref("height")}}, um sicherzustellen, dass die Panels genau in die Infobox passen, {{cssxref("position")}} `relative`, um das {{htmlelement("div")}} als Positionierungskontext zu setzen, sodass Sie dann positionierte Kindelemente relativ dazu platzieren können und nicht zum initialen Viewport, und schließlich setzen wir {{cssxref("clear")}} auf den im oberen CSS festgelegten float, sodass er das restliche Layout nicht stört.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Abschließend für diesen Abschnitt werden wir die einzelnen {{htmlelement("article")}}-Elemente stylen, aus denen unsere Panels bestehen. Die erste Regel, die wir hinzufügen, positioniert die Panels absolut und lässt sie so bündig zur {{cssxref("top")}} und {{cssxref("left")}} ihres {{htmlelement("div")}}-Containers sitzen – dieser Teil ist entscheidend für dieses gesamte Layout-Feature, da er die Panels übereinander liegen lässt. Die Regel gibt den Panels auch die gleiche festgelegte Höhe wie der Container und gibt dem Inhalt etwas Padding, eine Text{{cssxref("color")}} und eine {{cssxref("background-color")}}.

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

Die zweite Regel, die wir hier hinzufügen, bewirkt, dass ein Panel mit einer Klasse `is-hidden` versteckt wird. Auch hier werden wir diese Klasse mithilfe von JavaScript zum richtigen Zeitpunkt hinzufügen/entfernen. Wenn ein Reiter ausgewählt wird, wird die entsprechende Panel-Klasse `is-hidden` entfernt und alle anderen Panels erhalten die Klasse `is-hidden`, sodass nur ein Panel gleichzeitig sichtbar ist.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Der letzte Teil, der dieses Feature zum Laufen bringt, ist der JavaScript-Code. Die Datei `tabs-manual.js` wurde mithilfe des [`<script>`](/de/docs/Web/HTML/Element/script)-Tags eingebunden:

```html
<script src="tabs-manual.js"></script>
```

Dieser Code macht Folgendes:

- Beim [window load event](/de/docs/Web/API/Window/load_event) initialisiert er die `TabsManual`-[Klasse](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) für alle `tablist`-Elemente.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Reiter- und Panel-Referenzen in den Variablen `tabs` und `tabpanels` gesammelt, sodass wir später leicht Aktionen an ihnen ausführen können.
- Der Konstruktor registriert auch [`click`](/de/docs/Web/API/Element/click_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler für alle Reiter. Die Ereignishandler beinhalten Logik darüber, was beim Auswählen eines Reiters durch Klick oder Tastendruck geschehen soll.
- In der Funktion `setSelectedTab(currentTab)` passiert Folgendes:

  - Eine `for`-Schleife wird verwendet, um alle Reiter zu durchlaufen und sie zu deaktivieren, indem die `aria-selected`-Eigenschaft auf `false` gesetzt und die Klasse `is-hidden` auf den entsprechenden Panels gesetzt wird.
  - Beim ausgewählten Reiter (`currentTab`) wird `aria-selected` auf `true` gesetzt und die Klasse `is-hidden` vom entsprechenden Panel entfernt.

- Der Code enthält auch Logik zur Unterstützung der Tastaturnavigation mit den Tasten `Pfeil links`, `Pfeil rechts`, `Home` und `End`.

## Eine fest positionierte Reiter-Infobox

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Infobox — und integrieren sie in den Kontext einer vollständigen Webseite. Aber nicht nur das — wir geben ihr eine feste Position, sodass sie an derselben Stelle im Browserfenster bleibt. Wenn der Hauptinhalt scrollt, bleibt die Infobox an derselben Position auf dem Bildschirm. Unser fertiges Beispiel wird so aussehen:

![Infobox ist ein Container mit 3 Reitern, wobei der erste Reiter ausgewählt ist und nur der Inhalt des ersten Reiters angezeigt wird. Es hat eine feste Position. Die Infobox ist in der oberen linken Ecke des Fensters positioniert mit einer Breite von 452 Pixeln. Ein Container mit fiktivem Inhalt nimmt die rechte Hälfte des Fensters ein; der Container mit fiktivem Inhalt ist höher als das Fenster und kann gescrollt werden. Wenn die Seite gescrollt wird, bewegt sich der Container auf der rechten Seite, während die Infobox fest an derselben Stelle auf dem Bildschirm bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live sehen unter [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)). Werfen Sie einen Blick darauf, um zu sehen, was Sie in diesem Abschnitt des Artikels bauen werden.

Als Ausgangspunkt können Sie Ihr abgeschlossenes Beispiel aus dem ersten Abschnitt des Artikels verwenden oder eine lokale Kopie von [info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html) aus unserem GitHub-Repo erstellen.

### HTML-Ergänzungen

Zuerst einmal benötigen wir zusätzliches HTML, um den Hauptinhalt der Webseite darzustellen. Fügen Sie den folgenden {{htmlelement("section")}} direkt unter Ihrem öffnenden {{htmlelement("body")}}-Tag hinzu, unmittelbar vor dem bestehenden Abschnitt:

```html
<section class="fake-content">
  <h1>Fiktiver Inhalt</h1>
  <p>
    Dies ist fiktiver Inhalt. Der Hauptinhalt Ihrer Webseite würde hier wahrscheinlich stehen.
  </p>
  <p>
    Dies ist fiktiver Inhalt. Der Hauptinhalt Ihrer Webseite würde hier wahrscheinlich stehen.
  </p>
  <p>
    Dies ist fiktiver Inhalt. Der Hauptinhalt Ihrer Webseite würde hier wahrscheinlich stehen.
  </p>
  <p>
    Dies ist fiktiver Inhalt. Der Hauptinhalt Ihrer Webseite würde hier wahrscheinlich stehen.
  </p>
  <p>
    Dies ist fiktiver Inhalt. Der Hauptinhalt Ihrer Webseite würde hier wahrscheinlich stehen.
  </p>
  <p>
    Dies ist fiktiver Inhalt. Der Hauptinhalt Ihrer Webseite würde hier wahrscheinlich stehen.
  </p>
  <p>
    Dies ist fiktiver Inhalt. Der Hauptinhalt Ihrer Webseite würde hier wahrscheinlich stehen.
  </p>
  <p>
    Dies ist fiktiver Inhalt. Der Hauptinhalt Ihrer Webseite würde hier wahrscheinlich stehen.
  </p>
</section>
```

> [!NOTE]
> Sie können den fiktiven Inhalt gerne durch echten Inhalt ersetzen, wenn Sie möchten.

### Änderungen am bestehenden CSS

Als nächstes müssen wir einige kleine Änderungen am bestehenden CSS vornehmen, um die Infobox zu platzieren und zu positionieren. Ändern Sie Ihre `.info-box`-Regel, um `margin: 0 auto;` loszuwerden (wir möchten die Infobox nicht mehr zentrieren), fügen Sie {{cssxref("position", "position: fixed;")}} hinzu und fixieren Sie sie am {{cssxref("top")}} des Browser-Viewports.

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

### Den Hauptinhalt stylen

Das Einzige, was für dieses Beispiel noch fehlt, ist, dem Hauptinhalt etwas Styling zu verleihen. Fügen Sie die folgende Regel unterhalb Ihres restlichen CSS hinzu:

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

Zunächst geben wir dem Inhalt die gleiche {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("padding")}} wie den Infobox-Panels. Anschließend geben wir ihm einen großen {{cssxref("margin-left")}}, um ihn nach rechts zu verschieben und Platz für die Infobox zu schaffen, sodass sie sich nicht mit anderen Inhalten überschneidet.

Damit endet das zweite Beispiel; wir hoffen, dass Sie das dritte ebenso interessant finden werden.

## Ein sich verschiebendes verstecktes Panel

Das letzte Beispiel, das wir hier vorstellen, ist ein Panel, das durch Klicken auf ein Icon auf den Bildschirm und vom Bildschirm verschoben wird – wie bereits erwähnt, ist dies in Situationen wie mobilen Layouts beliebt, in denen der verfügbare Bildschirmplatz klein ist und man ihn nicht hauptsächlich durch ein Menü oder Info-Panel statt nützlichem Inhalt beanspruchen möchte.

Unser fertiges Beispiel wird so aussehen:

![Ein leerer Bildschirm auf der linken Seite mit 60% des Bildschirms und einem Panel mit Informationen auf der rechten Seite mit 40% Breite. Ein 'Fragezeichen'-Symbol befindet sich in der oberen rechten Ecke. Das Panel wird durch Drücken dieses 'Fragezeichen'-Symbols auf den Bildschirm geschoben und von ihm entfernt.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel live sehen unter [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)). Werfen Sie einen Blick darauf, um zu sehen, was Sie in diesem Abschnitt des Artikels bauen werden.

Als Ausgangspunkt erstellen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) von unserem GitHub-Repo. Dies folgt nicht aus dem vorherigen Beispiel, sodass eine neue Startdatei erforderlich ist. Werfen wir einen Blick auf das HTML in der Datei:

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

Zunächst haben wir hier ein {{htmlelement("button")}}-Element mit einem speziellen Fragezeichen-Charakter als Buttontext. Der Button wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Element/aside)-Infopanel anzuzeigen/zu verbergen. In den folgenden Abschnitten erklären wir, wie dies alles funktioniert.

### Den Button stylen

Zuerst kümmern wir uns um den Button – fügen Sie das folgende CSS zwischen Ihren {{htmlelement("style")}}-Tags hinzu:

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

- Eine große {{cssxref("font-size")}} festgelegt, um das Icon schön groß zu machen.
- Den Rand entfernt und den Hintergrund transparent gemacht, sodass nur das `?`-Icon sichtbar wird.
- {{cssxref("position")}} `absolute` darauf gesetzt und {{cssxref("top")}} sowie {{cssxref("right")}} verwendet, um es schön in der oberen rechten Ecke zu positionieren.
- Einen {{cssxref("z-index")}} von 1 darauf gesetzt – dies dient dazu, dass wenn das Infopanel gestylt und angezeigt wird, es das Icon nicht verdeckt; stattdessen sitzt das Icon oben drauf, sodass es erneut gedrückt werden kann, um das Infopanel zu verbergen.
- Die {{cssxref("cursor")}}-Eigenschaft verwendet, um den Mauszeiger zu ändern, wenn er über das Icon schwebt, in einen Handzeiger (wie den, den man sieht, wenn Links überfahren werden), als zusätzliches visuelles Zeichen für die Benutzer, dass das Icon etwas Interessantes tut.

### Das Panel stylen

Jetzt ist es an der Zeit, das tatsächliche Gleiten des Panels selbst zu stylen. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

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

Hier passiert viel – lassen Sie uns dies Stück für Stück betrachten:

- Zuerst setzen wir einige einfache {{cssxref("background-color")}} und {{cssxref("color")}} auf die Infobox.
- Als nächstes setzen wir eine feste {{cssxref("width")}} auf das Panel und machen seine {{cssxref("height")}} die gesamte Höhe des Browser-Viewports.
- Wir fügen auch etwas horizontalen {{cssxref("padding")}} hinzu, damit es aufgelockerter aussieht.
- Als nächstes setzen wir {{cssxref("position", "position: fixed;")}} auf das Panel, sodass es immer an derselben Stelle erscheint, selbst wenn die Seite Inhalte zum Scrollen hat. Wir befestigen es am {{cssxref("top")}} des Viewports und setzen es so, dass es standardmäßig rechts außerhalb des Bildschirms ist.
- Schließlich setzen wir eine {{cssxref("transition")}} auf das Element. Transition ist ein interessantes Feature, das es ermöglicht, Zustandsänderungen sanft ablaufen zu lassen, anstatt abrupt "an" oder "aus" zu gehen. In diesem Fall beabsichtigen wir, dass das Panel sanft auf den Bildschirm gleitet, wenn das Kontrollkästchen aktiviert ist. (Oder anders gesagt, wenn das Fragezeichen-Icon angeklickt wird.)

### Den aktivierten Zustand festlegen

Es gibt noch ein letztes CSS hinzuzufügen — setzen Sie das folgende am Ende Ihres CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt, dass wenn das Info-Panel die `open`-Klasse gesetzt hat, setzen Sie die {{cssxref("right")}}-Eigenschaft des `<aside>` auf `0px`, was bewirkt, dass das Panel wieder auf dem Bildschirm angezeigt wird (sanft aufgrund der Transition). Das Entfernen der `open`-Klasse verbirgt das Panel wieder.

Um die `.open`-Klasse des Info-Panels durch Klicken des Buttons hinzuzufügen/zu entfernen, müssen wir etwas JavaScript verwenden. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}}-Tags hinzu:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt dem Button einen Klickereignishandler hinzu. Der Klick-Handler wechselt die `open`-Klasse auf dem Infobox-Panel, was das Panel in das Sichtfeld oder aus diesem heraus gleiten lässt.
Der Ereignishandler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Eigenschaft des Buttons, um die Barrierefreiheit zu verbessern.

So haben Sie es – der einfachste Weg, um einen umschaltbaren Info-Panel-Effekt zu erstellen.

## Zusammenfassung

Damit endet unser Blick auf die Positionierung – Sie sollten nun eine Vorstellung davon haben, wie die grundlegenden Mechaniken funktionieren und wie Sie damit beginnen können, interessante UI-Features zu erstellen. Keine Sorge, wenn Sie nicht sofort alles verstanden haben – Positionierung ist ein ziemlich fortgeschrittenes Thema, und Sie können die Artikel jederzeit erneut durchgehen, um Ihr Verständnis zu vertiefen.
