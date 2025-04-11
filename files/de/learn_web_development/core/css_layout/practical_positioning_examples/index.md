---
title: Praktische Positionierungsbeispiele
slug: Learn_web_development/Core/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Artikel zeigt, wie Sie einige praxisnahe Beispiele erstellen können, um zu veranschaulichen, was Sie mit Positionierung erreichen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein Gefühl dafür bekommen, wie Positionierung in der Praxis funktioniert</td>
    </tr>
  </tbody>
</table>

## Eine Registerkarten-Infobox

Das erste Beispiel, das wir uns ansehen, ist eine klassische Infobox mit Registerkarten — eine sehr häufig verwendete Funktion, wenn Sie viele Informationen in einem kleinen Bereich unterbringen möchten. Dies beinhaltet informationslastige Anwendungen wie Strategie-/Kriegsspiele, mobile Versionen von Websites, bei denen der Bildschirm schmal ist und der Platz begrenzt ist, und kompakte Informationsboxen, in denen Sie möglicherweise viele Informationen verfügbar machen möchten, ohne dass sie die gesamte Benutzeroberfläche ausfüllen. Unser einfaches Beispiel wird so aussehen, wenn wir fertig sind:

![Registerkarte 1 ist ausgewählt. 'Registerkarte 2' und 'Registerkarte 3' sind die anderen beiden Registerkarten. Nur der Inhalt der ausgewählten Registerkarte ist sichtbar. Wenn eine Registerkarte ausgewählt wird, ändert sich ihre Textfarbe von Schwarz auf Weiß und ihre Hintergrundfarbe von Orangenrot auf Sattebraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) laufen sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Sie könnten denken: "Warum nicht einfach die separaten Registerkarten als separate Webseiten erstellen und die Registerkarten durch Klicken durch die separaten Seiten führen, um den Effekt zu erzielen?" Dieser Code wäre einfacher, ja, aber dann wäre jede separate "Seiten"-Ansicht tatsächlich eine neu geladene Webseite, was es schwieriger machen würde, Informationen zwischen Ansichten zu speichern und dieses Feature in ein größeres UI-Design zu integrieren.

Zunächst möchten wir, dass Sie eine lokale Kopie der Ausgangsdateien erstellen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese sinnvoll auf Ihrem lokalen Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Schauen wir uns das HTML an, das im Body enthalten ist:

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

Hier haben wir ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, das zwei {{htmlelement("div")}}-Elemente enthält. Das erste Div enthält drei Schaltflächen, die die tatsächlichen Registerkarten sein werden, auf die Sie klicken können, um unsere Inhaltsfenster anzuzeigen. Das zweite Div enthält drei {{htmlelement("article")}}-Elemente, die die Inhaltsfenster bilden, die jeweils einer Registerkarte entsprechen. Jedes Fenster enthält einige Beispielinhalte.

Die Idee hier ist, die Registerkarten so zu gestalten, dass sie wie ein standardmäßiges horizontales Navigationsmenü aussehen, und die Fenster so zu gestalten, dass sie sich mithilfe der absoluten Positionierung übereinander legen. Wir geben Ihnen auch ein wenig JavaScript, das Sie auf Ihrer Seite einfügen können, um bei Betätigung einer Registerkarte das entsprechende Fenster anzuzeigen und die Registerkarte selbst zu stylen. Sie müssen den JavaScript-Code an dieser Stelle nicht verstehen, aber Sie sollten daran denken, so bald wie möglich etwas grundlegendes [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu lernen — je komplexer Ihre UI-Features werden, desto wahrscheinlicher ist es, dass Sie etwas JavaScript benötigen, um Ihre gewünschte Funktionalität zu implementieren.

### Allgemeine Einrichtung

Beginnen Sie damit, das Folgende zwischen Ihre öffnenden und schließenden {{HTMLElement("style")}}-Tags hinzuzufügen:

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

Dies ist nur eine allgemeine Einrichtung, um eine sans-serif-Schriftart auf unserer Seite zu setzen, das `border-box` {{cssxref("box-sizing")}} Modell zu verwenden und den Standard-{{htmlelement("body")}}-Rand zu entfernen.

Fügen Sie als Nächstes das Folgende direkt unter Ihrem vorherigen CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Dies setzt eine bestimmte Breite und Höhe auf den Inhalt und zentriert ihn auf dem Bildschirm mit dem alten `margin: 1.25rem auto 0`. Zuvor im Kurs haben wir davon abgeraten, nach Möglichkeit eine feste Höhe auf Inhaltscontainer zu setzen; in diesem Fall ist es jedoch in Ordnung, da wir festgelegte Inhalte in unseren Registerkarten haben.

### Styling unserer Registerkarten

Jetzt möchten wir die Registerkarten so stylen, dass sie wie Registerkarten aussehen — im Grunde sind sie ein horizontales Navigationsmenü, aber anstatt beim Anklicken verschiedene Webseiten zu laden, wie wir es zuvor im Kurs gesehen haben, führen sie dazu, dass auf derselben Seite unterschiedliche Fenster angezeigt werden. Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu, um das `tablist`-Element zu einem {{cssxref("flex")}}-Container zu machen und über die gesamte Breite zu spannen:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden in diesem Beispiel Nachfahrenselektoren mit `.info-box` am Anfang der Kette — dies ist so, dass wir dieses Feature in eine Seite mit bereits vorhandenem Inhalt einfügen können, ohne befürchten zu müssen, dass die auf andere Teile der Seite angewandten Stile beeinflusst werden.

Als Nächstes stylen wir die Schaltflächen so, dass sie wie Registerkarten aussehen. Fügen Sie das folgende CSS hinzu:

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

Als Nächstes setzen wir die `:focus`- und `:hover`-Zustände der Registerkarten so, dass sie unterschiedlich aussehen, wenn sie fokussiert oder darübergefahren werden, um den Benutzern visuelles Feedback zu geben.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Dann setzen wir eine Regel fest, die eine der Registerkarten hervorhebt, wenn die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Eigenschaft auf `true` gesetzt ist. Wir werden dies mit JavaScript tun, wenn eine Registerkarte angeklickt wird. Platzieren Sie das folgende CSS unter Ihren anderen Stilen:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Styling der Fenster

Der nächste Schritt besteht darin, unsere Fenster zu stylen. Lassen Sie uns beginnen!

Fügen Sie zunächst die folgende Regel hinzu, um den `.panels` {{htmlelement("div")}} Container zu stylen. Hier setzen wir eine feste {{cssxref("height")}}, um sicherzustellen, dass die Fenster ordentlich in der Infobox passen, {{cssxref("position")}} `relative`, um das {{htmlelement("div")}} als Positionierungskontext festzulegen, sodass Sie anschließend positionierte Kind-Elemente relativ zu ihm und nicht zum initialen Viewport platzieren können, und schließlich setzen wir {{cssxref("clear")}}, um den in obigem CSS gesetzten Float zu entfernen, damit er das restliche Layout nicht stört.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Abschließend für diesen Abschnitt stylen wir die einzelnen {{htmlelement("article")}}-Elemente, die unsere Fenster umfassen. Die erste Regel, die wir hinzufügen, wird die Fenster absolut {{cssxref("position")}}ieren und sie alle bündig zum {{cssxref("top")}} und {{cssxref("left")}} ihres {{htmlelement("div")}} Containers setzen — dieser Teil ist entscheidend für diese gesamte Layout-Funktion, da er die Fenster übereinander positioniert. Die Regel gibt den Fenstern auch die gleiche festgelegte Höhe wie der Container und fügt dem Inhalt etwas Padding, eine Text{{cssxref("color")}} und eine {{cssxref("background-color")}} hinzu.

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

Die zweite Regel, die wir hier hinzufügen, macht es so, dass ein Fenster mit der Klasse `is-hidden` auf ihm versteckt wird. Auch hier werden wir diese Klasse mit JavaScript zum richtigen Zeitpunkt hinzufügen/entfernen. Wenn eine Registerkarte ausgewählt wird, wird das entsprechende Fenster seine `is-hidden`-Klasse entfernt und alle anderen Fenster werden die `is-hidden`-Klasse gesetzt haben, sodass nur ein Fenster gleichzeitig sichtbar ist.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Der letzte Teil, der diese Funktion zum Laufen bringt, ist der JavaScript-Code. Die Datei `tabs-manual.js` wurde mit dem [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Tag eingebunden:

```html
<script src="tabs-manual.js"></script>
```

Dieser Code macht folgendes:

- Beim [window load event](/de/docs/Web/API/Window/load_event) initialisiert es die `TabsManual` [Klasse](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) für alle `tablist`-Elemente.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Referenzen der Registerkarten und Fenster in den Variablen `tabs` und `tabpanels` gesammelt, sodass wir später leicht Dinge mit ihnen tun können.
- Der Konstruktor registriert außerdem [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis-Handler für alle Registerkarten. Diese Ereignis-Handler enthalten Logik darüber, was passieren sollte, wenn eine Registerkarte per Klick oder Tastendruck ausgewählt wird.
- In der Funktion `setSelectedTab(currentTab)` wird Folgendes durchgeführt:

  - Mit einer `for`-Schleife werden alle Registerkarten durchlaufen und abgewählt, indem die `aria-selected`-Eigenschaft auf `false` gesetzt und die `is-hidden`-Klasse auf den entsprechenden Fenstern gesetzt wird.
  - Bei der ausgewählten Registerkarte (`currentTab`) wird `aria-selected` auf `true` gesetzt und die `is-hidden`-Klasse vom entsprechenden Fenster entfernt.

- Der Code beinhaltet auch Logik zur Unterstützung der Tastaturnavigation mithilfe der `Linker Pfeil`, `Rechter Pfeil`, `Home` und `Ende`-Tasten.

## Eine Infobox mit fester Position

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Infobox — und fügen es in den Kontext einer vollständigen Webseite ein. Aber nicht nur das — wir geben ihm eine feste Position, damit es an derselben Stelle im Browserfenster bleibt. Wenn der Hauptinhalt scrollt, bleibt die Infobox an derselben Position auf dem Bildschirm. Unser fertiges Beispiel wird so aussehen:

![Die Infobox ist ein Container mit 3 Registerkarten, wobei die erste Registerkarte ausgewählt ist und nur der Inhalt der ersten Registerkarte angezeigt wird. Sie hat eine feste Position erhalten. Die Infobox ist in der oberen linken Ecke des Fensters positioniert und hat eine Breite von 452 Pixeln. Ein Container mit Fake-Inhalten belegt den restlichen rechten Teil des Fensters; der Fake-Content-Container ist höher als das Fenster und ist scrollbar. Wenn die Seite scrollt, bewegt sich der Container auf der rechten Seite, während die Infobox fest an derselben Stelle auf dem Bildschirm bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)) laufen sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Als Ausgangspunkt können Sie Ihr fertiges Beispiel aus dem ersten Abschnitt des Artikels verwenden oder eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repo erstellen.

### HTML-Ergänzungen

Zuerst benötigen wir zusätzliches HTML, um den Hauptinhalt der Webseite darzustellen. Fügen Sie das folgende {{htmlelement("section")}} direkt unter Ihrem öffnenden {{htmlelement("body")}}-Tag hinzu, direkt vor dem bestehenden Abschnitt:

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
> Sie können den Fake-Inhalt gerne ändern, wenn Sie echten Inhalt einfügen möchten.

### Änderungen am bestehenden CSS

Als Nächstes müssen wir einige kleine Änderungen am bestehenden CSS vornehmen, um die Infobox zu platzieren und zu positionieren. Ändern Sie Ihre `.info-box` Regel, um `margin: 0 auto;` zu entfernen (wir wollen die Infobox nicht mehr zentrieren), {{cssxref("position", "position: fixed;")}} hinzuzufügen, und sie an der {{cssxref("top")}} des Browser-Viewports zu fixieren.

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

### Hauptinhalt stylen

Das Einzige, was noch für dieses Beispiel fehlt, ist, dem Hauptinhalt ein wenig Stil zu verleihen. Fügen Sie die folgende Regel unter dem Rest Ihres CSS hinzu:

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

Zu Beginn geben wir dem Inhalt die gleiche {{cssxref("background-color")}}, {{cssxref("color")}}, und {{cssxref("padding")}} wie den Infobox-Fenstern. Wir geben ihm dann eine große {{cssxref("margin-left")}}, um ihn nach rechts zu verschieben, Platz für die Infobox zu schaffen, damit sie nichts anderes überlappt.

Damit ist das zweite Beispiel abgeschlossen; wir hoffen, dass Sie das dritte ebenso interessant finden.

## Eine einfahrbare versteckte Leiste

Das letzte Beispiel, das wir hier vorstellen werden, ist ein Panel, das beim Drücken eines Icons in den Bildschirm hinein- und herausfährt — wie bereits erwähnt, ist dies beliebt bei mobilen Layouts, bei denen der verfügbare Bildschirmplatz klein ist, sodass Sie nicht den Großteil davon mit einem Menü oder Infopanel anstelle der nützlichen Inhalte belegen möchten.

Unser fertiges Beispiel wird so aussehen:

![Ein leerer Bildschirm auf der linken 60 % des Bildschirms mit einem 40 % breiten Panel, das Informationen auf der rechten Seite anzeigt. Oben rechts befindet sich ein 'Fragezeichen'-Icon. Das Panel fährt beim Drücken dieses 'Fragezeichen'-Icons in den Bildschirm ein und aus.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel live unter [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)) laufen sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Als Ausgangspunkt erstellen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repo. Dies schließt nicht an das vorherige Beispiel an, daher ist eine neue Startdatei erforderlich. Schauen wir uns das HTML in der Datei an:

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

Zunächst haben wir hier ein {{htmlelement("button")}}-Element mit einem speziellen Fragezeichen-Zeichen als Schaltflächentext. Die Schaltfläche wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Reference/Elements/aside)-Info-Panel anzuzeigen/auszublenden. In die untenstehenden Abschnitten werden wir erklären, wie das alles funktioniert.

### Die Schaltfläche stylen

Lassen Sie uns zuerst die Schaltfläche behandeln — fügen Sie das folgende CSS zwischen Ihren {{htmlelement("style")}}-Tags hinzu:

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

Mit der ersten Regel stylen wir das `<button>`; dabei haben wir:

- Eine große {{cssxref("font-size")}} gesetzt, um das Icon schön groß zu machen.
- Den Rand entfernt und den Hintergrund transparent gemacht, sodass statt der Schaltfläche nur das `?`-Icon angezeigt wird.
- {{cssxref("position")}} `absolute` auf das Element gesetzt und {{cssxref("top")}} sowie {{cssxref("right")}} verwendet, um es schön in der oberen rechten Ecke zu positionieren.
- Einen {{cssxref("z-index")}} von 1 gesetzt — dies ist so, dass wenn das Infopanel gestylt und angezeigt wird, es das Icon nicht überdeckt; stattdessen wird das Icon darüber liegen, sodass es wieder gedrückt werden kann, um das Paneel auszublenden.
- Die {{cssxref("cursor")}} Eigenschaft benutzt, um den Mauscursor zu ändern, wenn er über das Icon schwebt, sodass er als Handzeiger erscheint (wie der, der angezeigt wird, wenn Links überfahren werden), als zusätzlicher visueller Hinweis für die Benutzer, dass das Icon etwas Interessantes macht.

### Das Panel stylen

Jetzt ist es an der Zeit, das eigentliche Ein-/Ausfahr-Paneel zu stylen. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

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

Es passiert hier viel — lassen Sie es uns Stück für Stück besprechen:

- Zuerst haben wir auf dem Infopanel einfache {{cssxref("background-color")}} und {{cssxref("color")}} gesetzt.
- Als Nächstes setzen wir eine feste {{cssxref("width")}} auf das Paneel und machen die {{cssxref("height")}} zur gesamten Höhe des Browser-Viewports.
- Wir fügen auch einige horizontale {{cssxref("padding")}} hinzu, um es ein wenig zu verschieben.
- Dann setzen wir {{cssxref("position", "position: fixed;")}} auf das Paneel, sodass es immer an derselben Stelle erscheint, selbst wenn die Seite Inhalte zum Scrollen hat. Wir kleben es an die {{cssxref("top")}} des Viewports und setzen es so, dass es standardmäßig außerhalb des Bildschirms nach {{cssxref("right")}} erscheint.
- Schließlich setzen wir eine {{cssxref("transition")}} auf das Element. Transition ist eine interessante Funktion, die es ermöglicht, dass Änderungen zwischen Zuständen reibungslos geschehen, anstatt einfach nur "ein" oder "aus" zu werden. In diesem Fall beabsichtigen wir, das Panel sanft auf den Bildschirm zu schieben, wenn die Checkbox aktiviert ist. (Oder anders gesagt, wenn das Fragezeichen-Icon geklickt wird.)

### Den ausgewählten Zustand festlegen

Es gibt noch einen letzten CSS-Teil hinzuzufügen — setzen Sie das folgende am Ende Ihres CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt, dass wenn das Info-Panel die `.open`-Klasse gesetzt hat, die {{cssxref("right")}} Eigenschaft des `<aside>` auf `0px` gesetzt wird, was dafür sorgt, dass das Paneel wieder auf dem Bildschirm erscheint (sanft aufgrund der Transition). Das Entfernen der `.open`-Klasse blendet das Paneel wieder aus.

Um die `.open`-Klasse auf dem Info-Panel mit einem Klick der Schaltfläche hinzuzufügen/zu entfernen, müssen wir etwas JavaScript verwenden. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}}-Tags hinzu:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt einen Klickevent-Handler zur Schaltfläche hinzu. Der Klick-Handler schaltet die `open`-Klasse auf dem Info-Panel um, was das Panel in oder aus der Ansicht schiebt. Der Event-Handler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Eigenschaft auf die Schaltfläche, um die Zugänglichkeit zu verbessern.

So, da haben Sie es — der einfachste Weg, um einen schaltbaren Info-Panel-Effekt zu erzeugen.

## Zusammenfassung

Damit endet unser Blick auf die Positionierung — bis jetzt sollten Sie eine Vorstellung davon haben, wie die grundlegenden Mechaniken funktionieren, sowie verstehen, wie Sie anfangen können, diese anzuwenden, um einige interessante UI-Features zu erstellen. Machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstanden haben — Positionierung ist ein relativ fortgeschrittenes Thema, und Sie können die Artikel jederzeit erneut durchgehen, um Ihr Verständnis zu vertiefen.
