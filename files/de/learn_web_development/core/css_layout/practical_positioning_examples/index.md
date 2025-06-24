---
title: Praktische Positionierungsbeispiele
slug: Learn_web_development/Core/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel zeigt, wie man einige praxisnahe Beispiele erstellt, um zu veranschaulichen, welche Möglichkeiten Sie mit der Positionierung haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen in HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Vorstellung von den praktischen Anwendungen der Positionierung zu bekommen</td>
    </tr>
  </tbody>
</table>

## Ein Registerkarten-Info-Box

Das erste Beispiel, das wir uns ansehen, ist eine klassische Registerkarten-Info-Box — ein sehr häufiges Feature, das verwendet wird, wenn Sie viele Informationen in einem kleinen Bereich unterbringen wollen. Dies schließt informationsintensive Anwendungen wie Strategie-/Kriegsspiele ein, mobile Versionen von Websites, bei denen der Bildschirm schmal und der Platz begrenzt ist, und kompakte Informationsboxen, bei denen Sie viele Informationen verfügbar machen möchten, ohne die gesamte Benutzeroberfläche auszufüllen. Unser einfaches Beispiel wird am Ende so aussehen:

![Tab 1 ist ausgewählt. "Tab 2" und "Tab 3" sind die anderen beiden Tabs. Nur der Inhalt der ausgewählten Registerkarte ist sichtbar. Wenn eine Registerkarte ausgewählt wird, ändert sich deren Textfarbe von Schwarz zu Weiß und deren Hintergrundfarbe von Orange-Rot zu Sattelbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live laufend bei [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Vielleicht denken Sie "Warum nicht einfach die separaten Registerkarten als separate Webseiten erstellen und die Registerkarten durch Klicken zu den separaten Seiten weiterleiten, um den Effekt zu erzeugen?" Dieser Code wäre einfacher, ja, aber dann würde jede Ansicht einer separaten "Seite" tatsächlich eine neu geladene Webseite sein, was es schwieriger machen würde, Informationen über Ansichten hinweg zu speichern und dieses Feature in eine größere Benutzeroberflächengestaltung zu integrieren.

Zunächst möchten wir, dass Sie eine lokale Kopie der Startdateien erstellen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese an einem sinnvollen Ort auf Ihrem lokalen Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Werfen wir einen Blick auf das HTML im Body:

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

Hier haben wir ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, das zwei {{htmlelement("div")}}-Elemente enthält. Das erste div enthält drei Schaltflächen, die zu den tatsächlichen Tabs werden, auf die Sie klicken können, um unsere Inhaltspanels anzuzeigen. Das zweite div enthält drei {{htmlelement("article")}}-Elemente, die die Inhaltspanels bilden, die zu jedem Tab gehören. Jedes Panel enthält etwas Beispielinhalt.

Die Idee dabei ist, dass wir die Tabs so stylen, dass sie wie ein Standard horizontales Navigationsmenü aussehen, und die Panels so stylen, dass sie sich mithilfe der absoluten Positionierung übereinander legen. Wir werden Ihnen auch ein wenig JavaScript zur Verfügung stellen, das Sie auf Ihrer Seite einfügen können, um das entsprechende Panel anzuzeigen, wenn auf einen Tab geklickt wird, und den Tab selbst zu stylen. Sie müssen das JavaScript an dieser Stelle noch nicht verstehen, aber Sie sollten darüber nachdenken, so bald wie möglich einige grundlegende [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)-Kenntnisse zu erwerben — je komplexer Ihre UI-Features werden, desto wahrscheinlicher ist es, dass Sie JavaScript benötigen, um die gewünschte Funktionalität zu implementieren.

### Allgemeine Einrichtung

Zu Beginn fügen Sie das Folgende zwischen Ihren öffnenden und schließenden {{HTMLElement("style")}}-Tags ein:

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

Dies ist lediglich eine allgemeine Einrichtung, um eine serifenlose Schriftart auf unserer Seite festzulegen, das `border-box` {{cssxref("box-sizing")}}-Modell zu verwenden und den Standard-{{htmlelement("body")}}-Rand zu entfernen.

Fügen Sie als Nächstes das Folgende unmittelbar unterhalb Ihres vorherigen CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Damit wird eine spezifische Breite und Höhe auf dem Inhalt festgelegt und dieser mit dem alten `margin: 1.25rem auto 0` zentriert. Zuvor hatten wir im Kurs davon abgeraten, wenn möglich eine feste Höhe auf Inhaltscontainern festzulegen. In diesem Fall ist es jedoch in Ordnung, da wir festen Inhalt in unseren Tabs haben.

### Styling unserer Tabs

Jetzt möchten wir die Tabs so stylen, dass sie wie Tabs aussehen — im Wesentlichen handelt es sich dabei um ein horizontales Navigationsmenü, aber anstatt beim Anklicken andere Webseiten zu laden, wie wir es zuvor im Kurs gesehen haben, bewirken sie, dass unterschiedliche Panels auf der gleichen Seite angezeigt werden. Zuerst fügen Sie die folgende Regel am Ende Ihres CSS hinzu, um `tablist` zu einem {{cssxref("flex")}}-Container zu machen und ihn über die gesamte Breite von 100% zu spannen:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden in diesem Beispiel Nachfahren-Selektoren mit `.info-box` am Anfang der Kette — dies dient dazu, dass wir dieses Feature in eine Seite mit bereits vorhandenem Inhalt einfügen können, ohne befürchten zu müssen, dass wir die auf andere Teile der Seite angewendeten Stile stören.

Als Nächstes stylen wir die Schaltflächen, damit sie wie Tabs aussehen. Fügen Sie das folgende CSS hinzu:

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

Als Nächstes stellen wir die `:focus`- und `:hover`-Zustände der Tabs so ein, dass sie anders aussehen, wenn sie fokussiert/gehovert werden, und den Nutzern visuelles Feedback geben.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Dann werden wir eine Regel einstellen, die eines der Tabs hervorhebt, wenn die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Eigenschaft darauf auf `true` gesetzt wird. Wir werden dies mit JavaScript einstellen, wenn auf einen Tab geklickt wird. Platzieren Sie das folgende CSS unterhalb Ihrer anderen Stile:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Styling der Panels

Die nächste Aufgabe besteht darin, unsere Panels zu stylen. Lassen Sie uns loslegen!

Zuerst von allem fügen Sie die folgende Regel hinzu, um den `.panels` {{htmlelement("div")}}-Container zu stylen. Hier setzen wir eine feste {{cssxref("height")}}, um sicherzustellen, dass die Panels sich bequem innerhalb der Info-Box befinden, {{cssxref("position")}} `relative`, um das {{htmlelement("div")}} als Positionierungskontext festzulegen, so dass Sie positionierte Kind-Elemente relativ dazu platzieren können und nicht zum ursprünglichen Viewport, und schließlich {{cssxref("clear")}} wir die oben im CSS festgelegte Float, damit sie den Rest des Layouts nicht stört.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Zum Schluss für diesen Abschnitt werden wir die einzelnen {{htmlelement("article")}}-Elemente stylen, die unsere Panels ausmachen. Die erste Regel, die wir hinzufügen, positioniert die Panels absolut {{cssxref("position")}} und lässt sie alle bündig am {{cssxref("top")}} und {{cssxref("left")}} ihres {{htmlelement("div")}}-Containers sitzen — dieser Teil ist der Schlüssel zu diesem gesamten Layout-Feature, da er dafür sorgt, dass die Panels übereinander liegen. Die Regel legt den Panels auch die gleiche festgelegte Höhe wie der Container fest und gibt dem Inhalt etwas Padding, eine Text-{{cssxref("color")}} und eine {{cssxref("background-color")}}.

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

Die zweite Regel, die wir hier hinzufügen, sorgt dafür, dass ein Panel mit gesetzt `is-hidden`-Klasse als versteckt gilt. Auch hier fügen wir diese Klasse mit JavaScript zum angemessenen Zeitpunkt hinzu oder entfernen sie. Wenn ein Tab ausgewählt wird, wird die entsprechende Panel-Klasse von `is-hidden` entfernt und alle anderen Panels erhalten die `is-hidden`-Klasse, sodass nur ein Panel gleichzeitig sichtbar ist.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Der letzte Teil, der dieses Feature zum Laufen bringt, ist der JavaScript-Code. Die Datei `tabs-manual.js` wurde mit dem [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Tag eingebunden:

```html
<script src="tabs-manual.js"></script>
```

Dieser Code macht Folgendes:

- Beim [window load event](/de/docs/Web/API/Window/load_event) initialisiert es die `TabsManual` [class](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) für alle `tablist`-Elemente.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Tab- und Panel-Referenzen in den Variablen `tabs` und `tabpanels` gesammelt, damit wir später leicht auf sie zugreifen können.
- Der Konstruktor registriert außerdem [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event-Handler auf allen Tabs. Die Event-Handler enthalten Logik darüber, was passieren soll, wenn ein Tab durch einen Klick oder Tastendruck ausgewählt wird.
- In der Funktion `setSelectedTab(currentTab)` passiert Folgendes:

  - Eine `for`-Schleife wird verwendet, um alle Tabs durchzugehen und sie abzuwählen, indem die `aria-selected`-Eigenschaft auf `false` gesetzt und die `is-hidden`-Klasse bei den entsprechenden Panels gesetzt wird.
  - Auf dem ausgewählten Tab (`currentTab`) wird `aria-selected` auf `true` gesetzt und `is-hidden`-Klasse wird vom zugehörigen Panel entfernt.

- Der Code enthält auch Logik zur Unterstützung der Tastatur-Navigation mit den Tasten `Links-Pfeil`, `Rechts-Pfeil`, `Home` und `Ende`.

## Eine fest positionierte Registerkarten-Info-Box

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Info-Box — und fügen es in den Kontext einer vollständigen Webseite ein. Aber nicht nur das — wir geben ihr eine feste Position, sodass sie an derselben Position im Browserfenster bleibt. Wenn der Hauptinhalt scrollt, bleibt die Info-Box an derselben Position auf dem Bildschirm. Unser fertiges Beispiel wird so aussehen:

![Info-Box ist ein Container mit 3 Tabs, wobei der erste Tab ausgewählt ist und nur der Inhalt des ersten Tabs angezeigt wird. Sie wird in einer festen Position angegeben. Die Info-Box ist in der oberen linken Ecke des Fensters positioniert mit einer Breite von 452 Pixeln. Ein Container mit Fake-Inhalten nimmt die andere Hälfte des Fensters ein; der Fake-Inhalte-Container ist höher als das Fenster und scrollbar. Wenn die Seite gescrollt wird, bewegt sich der Behälter auf der rechten Seite, während die Info-Box in derselben festen Position auf dem Bildschirm bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live bei [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Als Ausgangspunkt können Sie Ihr fertiges Beispiel aus dem ersten Abschnitt des Artikels verwenden oder eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repo erstellen.

### HTML-Ergänzungen

Zuerst benötigen wir etwas zusätzliches HTML, das den Hauptinhalt der Webseite darstellt. Fügen Sie das folgende {{htmlelement("section")}} direkt unterhalb Ihres öffnenden {{htmlelement("body")}}-Tags, kurz vor dem bestehenden Abschnitt, hinzu:

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
> Sie können das Fake-Inhalte gerne durch echten Inhalt ersetzen, wenn Sie möchten.

### Änderungen am vorhandenen CSS

Als Nächstes müssen wir einige kleine Änderungen am vorhandenen CSS vornehmen, um die Info-Box zu setzen und zu positionieren. Ändern Sie Ihre `.info-box`-Regel, um `margin: 0 auto;` zu entfernen (wir möchten die Info-Box nicht mehr zentrieren), fügen Sie {{cssxref("position", "position: fixed;")}} hinzu und heften Sie sie an die {{cssxref("top")}} des Browser-Viewports.

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

Das Einzige, was für dieses Beispiel noch übrig bleibt, ist, dem Hauptinhalt etwas Styling zu geben. Fügen Sie die folgende Regel unter dem Rest Ihres CSS hinzu:

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

Zunächst geben wir dem Inhalt die gleiche {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("padding")}} wie den Info-Box-Panels. Dann geben wir ihm einen großen {{cssxref("margin-left")}}, um ihn nach rechts zu verschieben, damit Platz für die Info-Box bleibt und sie nichts anderes überlappt.

Damit endet das zweite Beispiel; wir hoffen, dass Sie das dritte genauso interessant finden werden.

## Ein gleitendes verstecktes Panel

Das letzte Beispiel, das wir hier präsentieren, ist ein Panel, das bei Betätigung eines Symbols auf und ab gleitet — wie bereits erwähnt, ist dies in Situationen wie mobilen Layouts beliebt, bei denen der verfügbare Bildschirmplatz klein ist, sodass Sie nicht den größten Teil davon verbergen möchten, indem Sie ein Menü oder Info-Panel anstelle des nützlichen Inhalts anzeigen.

Unser fertiges Beispiel sieht so aus:

![Ein leerer Bildschirm auf der linken 60% des Bildschirms mit einem 40% breiten Panel, das Informationen auf der rechten Seite anzeigt. Ein 'Fragezeichen'-Symbol befindet sich in der oberen rechten Ecke. Das Panel gleitet auf und ab dem Bildschirm bei Betätigung dieses 'Fragezeichen'-Symbols.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel live bei [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels erstellen werden.

Als Ausgangspunkt erstellen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repo. Dies baut nicht auf dem vorherigen Beispiel auf, sodass eine neue Startdatei erforderlich ist. Werfen wir einen Blick auf das HTML in der Datei:

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

Zu Beginn haben wir hier ein {{htmlelement("button")}}-Element mit einem speziellen Fragezeichen als Schaltflächentext. Die Taste wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Reference/Elements/aside) Info-Panel ein- oder auszublenden. In den folgenden Abschnitten erklären wir, wie das alles funktioniert.

### Styling der Schaltfläche

Zuerst befassen wir uns mit der Schaltfläche — fügen Sie das folgende CSS zwischen Ihren {{htmlelement("style")}}-Tags hinzu:

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
- Den Rahmen entfernt und den Hintergrund transparent gemacht, sodass anstelle der Schaltfläche nur das `?`-Icon angezeigt wird.
- {{cssxref("position")}} `absolute` darauf gesetzt und {{cssxref("top")}} und {{cssxref("right")}} verwendet, um es schön in der oberen rechten Ecke zu positionieren.
- Einen {{cssxref("z-index")}} von 1 darauf gesetzt — das ist so, dass wenn das Info-Panel gestylt und angezeigt wird, es das Icon nicht verdeckt; stattdessen sitzt das Icon darauf, sodass es erneut gedrückt werden kann, um das Info-Panel auszublenden.
- Die {{cssxref("cursor")}}-Eigenschaft verwendet, um den Mauszeiger zu ändern, wenn er über dem Icon schwebt, zu einem Hand-Pointer (wie der, den Sie sehen, wenn Links gehobt werden), als zusätzliches visuelles Zeichen für die Benutzer, dass das Icon etwas Interessantes tut.

### Styling des Panels

Jetzt ist es an der Zeit, das eigentliche gleitende Panel selbst zu stylen. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

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

Hier passiert eine Menge — lassen Sie uns das Stück für Stück durchgehen:

- Zuerst setzen wir einige einfache {{cssxref("background-color")}} und {{cssxref("color")}} auf das Info-Panel.
- Als Nächstes setzen wir eine feste {{cssxref("width")}} auf das Panel und machen die {{cssxref("height")}} die gesamte Höhe des Browser-Viewports.
- Wir fügen auch etwas horizontales {{cssxref("padding")}} hinzu, um es ein wenig zu vergrößern.
- Als Nächstes setzen wir die {{cssxref("position", "position: fixed;")}} auf das Panel, damit es immer an derselben Stelle erscheint, selbst wenn die Seite Inhalte zum Scrollen hat. Wir kleben es an die {{cssxref("top")}} des Viewports und setzen es so, dass es standardmäßig außerhalb des {{cssxref("right")}}-Screens ist.
- Schließlich setzen wir eine {{cssxref("transition")}} auf das Element. Transition ist ein interessantes Feature, das es ermöglicht, Zustandsänderungen sanft stattfinden zu lassen, anstatt einfach "an" oder "aus" zu sein. In diesem Fall beabsichtigen wir, dass das Panel sanft über den Bildschirm gleitet, wenn das Kontrollkästchen aktiviert wird. (Oder anders ausgedrückt, wenn auf das Fragezeichen-Icon geklickt wird.)

### Einstellen des markierten Zustands

Es gibt noch ein letztes Stück CSS hinzuzufügen — setzen Sie das Folgende am Ende Ihres CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt, dass, wenn das Info-Panel `.open`-Klasse auf sich hat, setzen Sie die {{cssxref("right")}}-Eigenschaft des `<aside>` auf `0px`, was bewirkt, dass das Panel wieder auf dem Bildschirm erscheint (sanft dank der Transition). Das Entfernen der `.open`-Klasse blendet das Panel wieder aus.

Um die `.open`-Klasse mit einem Klick auf die Schaltfläche hinzuzufügen/zu entfernen, müssen wir etwas JavaScript verwenden. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}}-Tags hinzu:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt der Schaltfläche einen Klick-Event-Handler hinzu. Der Klick-Handler schaltet die `open`-Klasse auf dem Info-Panel um, wodurch das Panel in oder aus der Ansicht gleitet.
Der Event-Handler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Eigenschaft auf die Schaltfläche, um die Zugänglichkeit zu verbessern.

Das ist der einfachste Weg, um einen umschaltbaren Info-Panel-Effekt zu erstellen.

## Zusammenfassung

Damit schließen wir unseren Blick auf die Positionierung ab — Sie sollten jetzt eine Vorstellung davon haben, wie die grundlegenden Mechanismen funktionieren, sowie ein Verständnis dafür, wie Sie diese anwenden können, um einige interessante UI-Features zu erstellen. Keine Sorge, wenn Sie dies nicht sofort verstanden haben — die Positionierung ist ein ziemlich fortschrittliches Thema und Sie können die Artikel jederzeit erneut durchgehen, um Ihr Verständnis zu vertiefen.
