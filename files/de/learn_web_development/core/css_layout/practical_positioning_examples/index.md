---
title: Praktische Positionierungsbeispiele
slug: Learn_web_development/Core/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

Dieser Artikel zeigt, wie Sie einige praxisnahe Beispiele erstellen können, um zu veranschaulichen, welche Arten von Dingen Sie mit Positionierung erreichen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>), und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Vorstellung von der praktischen Anwendung der Positionierung erhalten</td>
    </tr>
  </tbody>
</table>

## Eine Registerkarten-Infobox

Das erste Beispiel, das wir uns ansehen, ist eine klassische Registerkarten-Infobox — ein sehr übliches Feature, das verwendet wird, wenn Sie viele Informationen auf kleinem Raum packen möchten. Dazu gehören informationsreiche Apps wie Strategie-/Kriegsspiele, mobile Versionen von Websites, bei denen der Bildschirm schmal und der Platz begrenzt ist, und kompakte Informationskästen, bei denen Sie viele Informationen verfügbar machen möchten, ohne dass sie die gesamte Benutzeroberfläche füllen. Unser einfaches Beispiel wird am Ende so aussehen:

![Registerkarte 1 ist ausgewählt. 'Registerkarte 2' und 'Registerkarte 3' sind die anderen beiden Registerkarten. Nur die Inhalte der ausgewählten Registerkarte sind sichtbar. Wenn eine Registerkarte ausgewählt ist, ändert sich deren Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe von Orangerot zu Sattelbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live bei [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Vielleicht denken Sie: "Warum nicht einfach die separaten Registerkarten als separate Webseiten erstellen und die Registerkarten einfach darauf verlinken, um den Effekt zu erzielen?" Der Code wäre zwar einfacher, aber jede separate "Seitenansicht" würde tatsächlich eine neu geladene Webseite darstellen, was es schwieriger machen würde, Informationen über Ansichten hinweg zu speichern und diese Funktion in ein größeres UI-Design zu integrieren.

Zu Beginn möchten wir, dass Sie eine lokale Kopie der Anfangsdateien erstellen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese an einem sinnvollen Ort auf Ihrem lokalen Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Werfen wir einen Blick auf das HTML im Body:

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

Hier haben wir ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, das zwei {{htmlelement("div")}}s enthält. Das erste div enthält drei Buttons, die die tatsächlichen Registerkarten zum Anklicken für das Anzeigen unserer Inhaltspanels werden. Das zweite div enthält drei {{htmlelement("article")}}-Elemente, die die Inhaltspanels bilden, die jeder Registerkarte entsprechen. Jedes Panel enthält einige Beispielinhalte.

Die Idee hierbei ist, die Registerkarten so zu stylen, dass sie wie ein Standard-Navigationsmenü aussehen, und die Panels mithilfe der absoluten Positionierung übereinander zu legen. Zudem stellen wir Ihnen ein wenig JavaScript zur Verfügung, das Sie auf Ihrer Seite einfügen können, um das entsprechende Panel anzuzeigen, wenn eine Registerkarte gedrückt wird, und die Registerkarte selbst zu stylen. Sie müssen den JavaScript-Code an dieser Stelle nicht verstehen, aber Sie sollten erwägen, bald etwas über grundlegendes [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu lernen — je komplexer Ihre UI-Funktionen werden, desto wahrscheinlicher ist es, dass Sie etwas JavaScript benötigen, um die gewünschte Funktionalität zu implementieren.

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

Dies ist nur eine allgemeine Einrichtung, um eine serifenlose Schrift auf unserer Seite zu setzen, das `border-box` {{cssxref("box-sizing")}}-Modell zu verwenden und den Standard-{{htmlelement("body")}}-Rand zu entfernen.

Fügen Sie als Nächstes das folgende CSS direkt unter Ihrem vorherigen CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Dies legt eine bestimmte Breite und Höhe für den Inhalt fest und zentriert ihn auf dem Bildschirm mit dem alten `margin: 1.25rem auto 0`. Zuvor im Kurs haben wir davon abgeraten, wenn möglich eine feste Höhe für Inhaltscontainer festzulegen; in diesem Fall ist es jedoch in Ordnung, da wir feste Inhalte in unseren Registerkarten haben.

### Styling unserer Registerkarten

Nun möchten wir die Registerkarten so stylen, dass sie wie Registerkarten aussehen — im Grunde handelt es sich um ein horizontales Navigationsmenü, aber anstatt verschiedene Webseiten zu laden, wenn sie angeklickt werden, wie zuvor im Kurs gesehen, bewirken sie, dass auf derselben Seite verschiedene Panels angezeigt werden. Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu, um die `tablist` zu einem {{cssxref("flex")}}-Container zu machen und 100% Breite einzunehmen:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden in diesem Beispiel Nachkommenselektoren mit `.info-box` am Anfang der Kette — dies ermöglicht es uns, dieses Feature in eine Seite mit bereits vorhandenen Inhalten einzufügen, ohne befürchten zu müssen, die Stile anderer Teile der Seite zu beeinflussen.

Als Nächstes stylen wir die Buttons so, dass sie wie Registerkarten aussehen. Fügen Sie das folgende CSS hinzu:

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

Dann setzen wir die `:focus`- und `:hover`-Zustände der Registerkarten so, dass sie anders aussehen, wenn sie fokussiert bzw. darübergefahren werden, und den Benutzern ein visuelles Feedback geben.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Anschließend setzen wir eine Regel, die eine der Registerkarten hervorhebt, wenn die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Eigenschaft auf `true` gesetzt ist. Wir werden dies mit JavaScript festlegen, wenn auf eine Registerkarte geklickt wird. Platzieren Sie das folgende CSS unter Ihren anderen Stilen:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Styling der Panels

Die nächste Aufgabe ist es, unsere Panels zu stylen. Los geht's!

Fügen Sie zuerst die folgende Regel hinzu, um den `.panels`-{{htmlelement("div")}}-Container zu stylen. Hier setzen wir eine feste {{cssxref("height")}}, um sicherzustellen, dass die Panels genau in die Infobox passen, {{cssxref("position")}} `relative`, um das {{htmlelement("div")}} als Positionierungskontext festzulegen, sodass Sie dann positionierte Kindelemente relativ dazu und nicht zum anfänglichen Ansichtsfenster platzieren können, und schließlich {{cssxref("clear")}} wir das im CSS oben gesetzte Float, damit es den restlichen Layout nicht beeinträchtigt.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Schließlich für diesen Abschnitt werden wir die einzelnen {{htmlelement("article")}}-Elemente stylen, die unsere Panels ausmachen. Die erste Regel, die wir hinzufügen werden, positioniert die Panels absolut {{cssxref("position")}}, und lässt sie alle bündig an der {{cssxref("top")}} und {{cssxref("left")}} ihrer {{htmlelement("div")}}-Container sitzen — dieser Teil ist entscheidend für dieses gesamte Layout-Feature, da es die Panels übereinander positioniert. Die Regel gibt den Panels auch die gleiche festgelegte Höhe wie der Container und fügt den Inhalten etwas Padding, eine Text-{{cssxref("color")}} und eine {{cssxref("background-color")}} hinzu.

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

Die zweite Regel, die wir hier hinzufügen, bewirkt, dass ein Panel mit der Klasse `is-hidden` auf ihm versteckt wird. Erneut werden wir diese Klasse zu geeigneten Zeitpunkten mit JavaScript hinzufügen/entfernen. Wenn eine Registerkarte ausgewählt ist, wird die entsprechende Tafel ihre `is-hidden`-Klasse entfernt haben und alle anderen Tafeln werden `is-hidden`-Klassen gesetzt haben, sodass nur eine Tafel gleichzeitig sichtbar ist.

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

- Beim [Window-Load-Event](/de/docs/Web/API/Window/load_event) initialisiert es `TabsManual` [Klasse](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) für alle `tablist`-Elemente.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Referenzen zu Registerkarten und Panels in den Variablen `tabs` und `tabpanels` gesammelt, sodass wir später einfach darauf zugreifen können.
- Der Konstruktor registriert auch [`click`](/de/docs/Web/API/Element/click_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler bei allen Registerkarten. Die Ereignishandler enthalten Logik darüber, was passieren soll, wenn eine Registerkarte durch Klick oder Tastendruck ausgewählt wird.
- In der Funktion `setSelectedTab(currentTab)` passiert Folgendes:

  - Eine `for`-Schleife wird verwendet, um alle Registerkarten zu durchlaufen und sie durch Setzen der `aria-selected`-Eigenschaft auf `false` zu deaktivieren und durch Setzen der `is-hidden`-Klasse auf den entsprechenden Panels zu verstecken.
  - Auf der ausgewählten Registerkarte (`currentTab`) wird `aria-selected` auf `true` gesetzt und die `is-hidden`-Klasse vom entsprechenden Panel entfernt.

- Der Code unterstützt auch die Tastaturnavigation mit den Tasten `Linkspfeil`, `Rechtspfeil`, `Home` und `Ende`.

## Eine fixierte Position Tabbed-Info-Box

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Info-Box — und fügen sie in den Kontext einer vollständigen Webseite ein. Aber nicht nur das — wir geben ihr eine feste Position, sodass sie an derselben Position im Browserfenster bleibt. Wenn der Hauptinhalt scrollt, bleibt die Info-Box an derselben Position auf dem Bildschirm. Unser fertiges Beispiel sieht so aus:

![Info-Box ist ein Container mit 3 Registerkarten, wobei die erste Registerkarte ausgewählt ist und nur der Inhalt der ersten Registerkarte angezeigt wird. Es erhält eine feste Position. Die Info-Box ist in der oberen linken Ecke des Fensters positioniert mit einer Breite von 452 Pixel. Ein Container mit gefälschten Inhalten nimmt die restliche rechte Hälfte des Fensters ein; der Container mit gefälschten Inhalten ist höher als das Fenster und kann scrollen. Wenn die Seite gescrollt wird, bewegt sich der Container auf der rechten Seite, während die Info-Box an derselben Position auf dem Bildschirm fixiert bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live bei [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)) sehen. Sehen Sie sich das an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Als Ausgangspunkt können Sie Ihr fertiggestelltes Beispiel aus dem ersten Abschnitt des Artikels verwenden, oder Sie erstellen eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repo.

### HTML-Ergänzungen

Zuerst benötigen wir zusätzliches HTML, um den Hauptinhalt der Webseite darzustellen. Fügen Sie das folgende {{htmlelement("section")}}-Element direkt unterhalb Ihres öffnenden {{htmlelement("body")}}-Tags ein, direkt vor dem bestehenden Abschnitt:

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
> Sie können den gefälschten Inhalt gerne durch echten Inhalt ersetzen, wenn Sie möchten.

### Änderungen am bestehenden CSS

Als Nächstes müssen wir einige kleine Änderungen am bestehenden CSS vornehmen, um die Infobox zu platzieren und zu positionieren. Ändern Sie Ihre `.info-box`-Regel, um `margin: 0 auto;` zu entfernen (wir möchten die Infobox nicht mehr zentrieren), fügen Sie {{cssxref("position", "position: fixed;")}} hinzu und kleben Sie sie an die {{cssxref("top")}} des Browser-Anzeigebereichs.

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

### Styling des Hauptinhalts

Das Einzige, was für dieses Beispiel noch übrig bleibt, ist, dem Hauptinhalt etwas Stil zu verleihen. Fügen Sie die folgende Regel unterhalb des Restes Ihres CSS hinzu:

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

Zunächst geben wir dem Inhalt die gleiche {{cssxref("background-color")}}, {{cssxref("color")}}, und {{cssxref("padding")}} wie den Infobox-Panels. Dann geben wir ihm einen großen {{cssxref("margin-left")}}, damit er nach rechts verschoben wird und Platz für die Infobox macht, sodass diese nichts überlappt.

Damit endet das zweite Beispiel; wir hoffen, dass Sie das dritte genauso interessant finden.

## Ein gleitendes verstecktes Panel

Das letzte Beispiel, das wir hier präsentieren, ist ein Panel, das beim Drücken eines Symbols auf den Bildschirm gleitet oder von diesem verschwindet — wie bereits erwähnt, ist dies beliebt für Situationen wie mobile Layouts, bei denen der verfügbare Bildschirmplatz klein ist, sodass Sie nicht den größten Teil davon nutzen möchten, indem Sie anstelle des nützlichen Inhalts ein Menü oder Infobereich zeigen.

Unser fertiges Beispiel sieht so aus:

![Ein leerer Bildschirm auf der linken 60% des Bildschirms mit einem 40% breiten Panel, das Informationen auf der rechten Seite anzeigt. Ein 'Fragezeichen'-Symbol befindet sich in der oberen rechten Ecke. Das Panel gleitet beim Drücken dieses 'Fragezeichen'-Symbols auf und vom Bildschirm.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertiggestellte Beispiel live bei [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)) sehen. Schauen Sie es sich an, um eine Vorstellung zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Als Ausgangspunkt machen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repo. Dies baut nicht auf dem vorherigen Beispiel auf, sodass eine neue Startdatei erforderlich ist. Lassen Sie uns einen Blick auf das HTML in der Datei werfen:

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

Hier haben wir zunächst ein {{htmlelement("button")}}-Element mit einem speziellen Fragezeichenzeichen als Button-Text. Der Button wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Element/aside)-Infopanel zu zeigen/verbergen. In den folgenden Abschnitten werden wir erklären, wie das alles funktioniert.

### Styling des Buttons

Zuerst beschäftien wir uns mit dem Button — fügen Sie das folgende CSS zwischen Ihre {{htmlelement("style")}}-Tags ein:

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
- Den Rahmen entfernt und den Hintergrund transparent gemacht, sodass anstelle des Buttons nur das `?`-Symbol angezeigt wird.
- {{cssxref("position")}} `absolute` darauf gesetzt und {{cssxref("top")}} und {{cssxref("right")}} verwendet, um es ordentlich in der oberen rechten Ecke zu positionieren.
- Ein {{cssxref("z-index")}} von 1 darauf gesetzt — dies ist so, dass wenn das Infopanel gestylt und angezeigt wird, es das Symbol nicht verdeckt; stattdessen wird das Symbol darüber sitzen, sodass es erneut gedrückt werden kann, um das Infopanel zu verstecken.
- Die {{cssxref("cursor")}}-Eigenschaft verwendet, um den Mauszeiger zu ändern, während er über das Symbol schwebt, zu einer Hand (wie die, die Sie sehen, wenn Sie über Links fahren), als zusätzlich visuellen Hinweis für Benutzer, dass das Symbol etwas Interessantes tut.

### Styling des Panels

Nun ist es an der Zeit, das eigentliche gleitende Panel zu stylen. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

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

Hier passiert viel — lassen Sie uns das Stück für Stück besprechen:

- Zuerst setzen wir eine einfache {{cssxref("background-color")}} und {{cssxref("color")}} auf die Infobox.
- Als Nächstes setzen wir eine feste {{cssxref("width")}} auf das Panel und machen seine {{cssxref("height")}} die gesamte Höhe des Browser-Anzeigebereichs.
- Wir fügen auch etwas horizontales {{cssxref("padding")}} hinzu, um es etwas auszufüllen.
- Als Nächstes setzen wir {{cssxref("position", "position: fixed;")}} auf das Panel, sodass es immer an derselben Stelle erscheint, auch wenn die Seite zu scrollen ist. Wir fixieren es oben im Ansichtsfenster und setzen es standardmäßig so, dass es außerhalb des Bildschirms rechts ist.
- Schließlich setzen wir eine {{cssxref("transition")}} auf das Element. Transition ist ein interessantes Feature, das ermöglicht, dass Änderungen zwischen Zuständen reibungslos erfolgen, anstatt abrupt "an" oder "aus" zu gehen. In diesem Fall beabsichtigen wir, dass das Panel reibungslos in den Bildschirm gleitet, wenn das Kontrollkästchen aktiviert ist. (Oder anders ausgedrückt, wenn das Fragezeichen-Symbol geklickt wird.)

### Einstellen des aktiven Status

Es gibt ein letztes Stück CSS, das hinzugefügt werden muss — setzen Sie das folgende am Ende Ihres CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt, dass wenn das Infopanel die `.open`-Klasse gesetzt hat, die {{cssxref("right")}}-Eigenschaft des `<aside>` auf `0px` gesetzt wird, was dazu führt, dass das Panel wieder auf dem Bildschirm erscheint (dank der Transition sanft). Das Entfernen der `.open`-Klasse verbirgt das Panel erneut.

Um die `.open`-Klasse in das Infopanel mit einem Klick auf den Button hinzuzufügen/zu entfernen, brauchen wir etwas JavaScript. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}}-Tags ein:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt dem Button einen Klickereignishandler hinzu. Der Klickhandler schaltet die `open`-Klasse auf dem Infobox-Panel, das das Panel ein- oder ausblendet.
Der Ereignishandler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Eigenschaft auf dem Button zur Verbesserung der Zugänglichkeit.

Das war's auch schon — die einfachste Möglichkeit, einen umschaltbaren Infopanel-Effekt zu erstellen.

## Zusammenfassung

Damit endet unser Blick auf die Positionierung — mittlerweile sollten Sie eine Vorstellung davon haben, wie die grundlegenden Mechanismen funktionieren, sowie verstehen, wie man beginnt, diese anzuwenden, um einige interessante UI-Funktionen zu erstellen. Machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstanden haben — Positionierung ist ein ziemlich fortgeschrittenes Thema, und Sie können die Artikel jederzeit erneut durcharbeiten, um Ihr Verständnis zu fördern.
