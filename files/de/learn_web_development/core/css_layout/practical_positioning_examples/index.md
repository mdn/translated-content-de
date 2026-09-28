---
title: Praktische Beispiele für die Positionierung
slug: Learn_web_development/Core/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: 5658facd7100855113a75ce508ab8d825a4d97b0
---

Dieser Artikel zeigt anhand einiger praxisnaher Beispiele, welche Möglichkeiten die Positionierung bietet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein Verständnis für die praktische Anwendung der Positionierung entwickeln</td>
    </tr>
  </tbody>
</table>

## Ein Infofeld mit Tabs

Unser erstes Beispiel ist ein klassisches Infofeld mit Tabs. Solche Elemente werden häufig verwendet, wenn viele Informationen auf wenig Raum untergebracht werden sollen: etwa in informationsreichen Anwendungen wie Strategie- oder Kriegsspielen, in mobilen Versionen von Websites mit begrenzter Bildschirmfläche oder in kompakten Infofeldern, die zahlreiche Informationen bereitstellen sollen, ohne die gesamte Benutzeroberfläche auszufüllen. Unser einfaches Beispiel wird am Ende so aussehen:

![Tab 1 ist ausgewählt. „Tab 2“ und „Tab 3“ sind die beiden anderen Tabs. Nur der Inhalt des ausgewählten Tabs ist sichtbar. Wird ein Tab ausgewählt, ändert sich seine Textfarbe von Schwarz zu Weiß und seine Hintergrundfarbe von Orangerot zu Sattelbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel unter [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) live ansehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)). Sehen Sie es sich an, um einen Eindruck davon zu bekommen, was Sie in diesem Abschnitt erstellen werden.

Vielleicht fragen Sie sich: „Warum erstellt man nicht einfach für jeden Tab eine eigene Webseite und lässt die Tabs zu diesen Seiten navigieren?“ Der Code wäre zwar einfacher, aber jede Ansicht wäre dann eine neu geladene Webseite. Das würde es erschweren, Informationen zwischen den Ansichten zu erhalten und diese Funktion in eine größere Benutzeroberfläche zu integrieren.

Erstellen Sie zunächst lokale Kopien der Ausgangsdateien [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie sie an einem geeigneten Ort auf Ihrem Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Sehen wir uns das HTML innerhalb des Body an:

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

Hier haben wir ein {{htmlelement("section")}}-Element mit der `class` `info-box`, das zwei {{htmlelement("div")}}-Elemente enthält. Das erste div enthält drei Buttons. Sie werden zu den anklickbaren Tabs, mit denen unsere Inhaltsbereiche angezeigt werden. Das zweite div enthält drei {{htmlelement("article")}}-Elemente, die die Inhaltsbereiche für die jeweiligen Tabs bilden. Jeder Bereich enthält Beispielinhalte.

Wir werden die Tabs wie ein gewöhnliches horizontales Navigationsmenü gestalten. Die Bereiche werden mithilfe absoluter Positionierung übereinander angeordnet. Außerdem erhalten Sie etwas JavaScript, das Sie in Ihre Seite einbinden können, damit beim Drücken eines Tabs der zugehörige Bereich angezeigt und der Tab entsprechend gestaltet wird. Sie müssen den JavaScript-Code zu diesem Zeitpunkt noch nicht verstehen. Es empfiehlt sich aber, sich bald mit den Grundlagen von [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu beschäftigen: Je komplexer Ihre Benutzeroberfläche wird, desto wahrscheinlicher benötigen Sie JavaScript, um die gewünschten Funktionen umzusetzen.

### Allgemeine Einrichtung

Fügen Sie zunächst zwischen dem öffnenden und dem schließenden {{HTMLElement("style")}}-Tag Folgendes ein:

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

Damit legen wir eine serifenlose Schriftart für die Seite fest, verwenden das `border-box`-Modell für {{cssxref("box-sizing")}} und entfernen den standardmäßigen Außenabstand des {{htmlelement("body")}}-Elements.

Fügen Sie direkt unter dem bisherigen CSS Folgendes hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Damit erhalten die Inhalte eine bestimmte Breite und Höhe und werden mit `margin: 1.25rem auto 0` auf dem Bildschirm zentriert. An früherer Stelle im Kurs haben wir davon abgeraten, Inhaltscontainern nach Möglichkeit eine feste Höhe zuzuweisen. Hier ist das in Ordnung, weil die Inhalte unserer Tabs feststehen.

### Die Tabs gestalten

Nun sollen die Tabs auch wie Tabs aussehen. Im Grunde bilden sie ein horizontales Navigationsmenü. Anders als bei den bisher im Kurs behandelten Menüs laden sie beim Anklicken aber keine anderen Webseiten, sondern zeigen unterschiedliche Bereiche auf derselben Seite an. Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu. Sie macht `tablist` zu einem {{cssxref("flex")}}-Container, der die gesamte verfügbare Breite einnimmt:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden in diesem Beispiel durchgehend Nachfahren-Selektoren, die mit `.info-box` beginnen. So können wir die Funktion in eine Seite mit bereits vorhandenen Inhalten einfügen, ohne befürchten zu müssen, dass sie die Gestaltung anderer Seitenbereiche beeinflusst.

Als Nächstes gestalten wir die Buttons so, dass sie wie Tabs aussehen. Fügen Sie das folgende CSS hinzu:

```css
.info-box [role="tab"] {
  padding: 0 1rem;
  line-height: 3rem;
  background: white;
  color: #b60000;
  font-weight: bold;
  border: none;
  outline: none;
}
```

Anschließend legen wir fest, dass die Tabs in den Zuständen `:focus` und `:hover` anders aussehen. So erhalten Nutzer eine visuelle Rückmeldung, wenn ein Tab fokussiert ist oder der Mauszeiger darüber schwebt.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Dann fügen wir eine Regel hinzu, die einen Tab hervorhebt, wenn seine Eigenschaft [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt ist. Diesen Wert setzen wir beim Anklicken eines Tabs mit JavaScript. Platzieren Sie das folgende CSS unter Ihren anderen Regeln:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Die Bereiche gestalten

Als Nächstes gestalten wir die Inhaltsbereiche. Legen wir los!

Fügen Sie zuerst die folgende Regel für den {{htmlelement("div")}}-Container `.panels` hinzu. Wir geben ihm eine feste {{cssxref("height")}}, damit die Bereiche genau in das Infofeld passen. Mit {{cssxref("position")}} `relative` legen wir das {{htmlelement("div")}} als Positionierungskontext fest: Positionierte Kindelemente können dann relativ zu ihm statt relativ zum ursprünglichen Viewport platziert werden. Schließlich heben wir mit {{cssxref("clear")}} das im CSS oben festgelegte Float auf, damit es das übrige Layout nicht beeinflusst.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Nun gestalten wir die einzelnen {{htmlelement("article")}}-Elemente, aus denen die Bereiche bestehen. Die erste Regel setzt für die Bereiche eine absolute {{cssxref("position")}} und richtet sie bündig an der {{cssxref("top")}}- und {{cssxref("left")}}-Kante ihres {{htmlelement("div")}}-Containers aus. Das ist entscheidend für dieses Layout, denn dadurch liegen die Bereiche übereinander. Die Regel gibt ihnen außerdem dieselbe Höhe wie dem Container und fügt Innenabstand, eine Text-{{cssxref("color")}} und eine {{cssxref("background-color")}} hinzu.

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

Die zweite Regel blendet einen Bereich aus, wenn ihm die Klasse `is-hidden` zugewiesen ist. Auch diese Klasse fügen wir zum passenden Zeitpunkt mit JavaScript hinzu oder entfernen sie. Wird ein Tab ausgewählt, entfernen wir `is-hidden` vom zugehörigen Bereich und weisen die Klasse allen anderen Bereichen zu. So ist immer nur ein Bereich sichtbar.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Damit die Funktion vollständig arbeitet, fehlt noch der JavaScript-Code. Die Datei `tabs-manual.js` wird über das Tag [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) eingebunden:

```html
<script src="tabs-manual.js"></script>
```

Der Code führt Folgendes aus:

- Beim [Ladeereignis des Fensters](/de/docs/Web/API/Window/load_event) initialisiert er die [Klasse](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) `TabsManual` für alle `tablist`-Elemente.
- Beim Erstellen eines `TabsManual`-Objekts sammelt der Konstruktor alle Referenzen auf Tabs und Bereiche in den Variablen `tabs` und `tabpanels`. So können wir später leicht auf sie zugreifen.
- Der Konstruktor registriert außerdem Event-Handler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) auf allen Tabs. Sie legen fest, was geschieht, wenn ein Tab durch einen Klick oder Tastendruck ausgewählt wird.
- In der Funktion `setSelectedTab(currentTab)` geschieht Folgendes:
  - Eine `for`-Schleife durchläuft alle Tabs und hebt ihre Auswahl auf. Dazu setzt sie die Eigenschaft `aria-selected` auf `false` und weist den zugehörigen Bereichen die Klasse `is-hidden` zu.
  - Beim ausgewählten Tab (`currentTab`) wird `aria-selected` auf `true` gesetzt und die Klasse `is-hidden` vom zugehörigen Bereich entfernt.

- Der Code unterstützt außerdem die Tastaturnavigation mit den Tasten `Left arrow`, `Right arrow`, `Home` und `End`.

## Ein fest positioniertes Infofeld mit Tabs

Im zweiten Beispiel fügen wir unser Infofeld in eine vollständige Webseite ein. Außerdem positionieren wir es fest, sodass es im Browserfenster an derselben Stelle bleibt. Wenn der Hauptinhalt gescrollt wird, behält das Infofeld seine Position auf dem Bildschirm bei. Das fertige Beispiel sieht so aus:

![Das Infofeld enthält drei Tabs. Der erste Tab ist ausgewählt, und nur sein Inhalt wird angezeigt. Das Infofeld ist fest positioniert. Es befindet sich in der oberen linken Ecke des Fensters und ist 452 Pixel breit. Ein Container mit Platzhalterinhalten nimmt den übrigen rechten Teil des Fensters ein. Er ist höher als das Fenster und kann gescrollt werden. Beim Scrollen bewegt sich der rechte Container, während das Infofeld an derselben Stelle auf dem Bildschirm bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel unter [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) live ansehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)). Sehen Sie es sich an, um einen Eindruck davon zu bekommen, was Sie in diesem Abschnitt erstellen werden.

Als Ausgangspunkt können Sie Ihr fertiges Beispiel aus dem ersten Abschnitt verwenden oder eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repository erstellen.

### HTML ergänzen

Zunächst benötigen wir zusätzliches HTML für den Hauptinhalt der Webseite. Fügen Sie das folgende {{htmlelement("section")}}-Element direkt nach dem öffnenden {{htmlelement("body")}}-Tag und vor dem bereits vorhandenen Abschnitt ein:

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
> Sie können die Platzhalterinhalte nach Belieben durch echte Inhalte ersetzen.

### Das vorhandene CSS ändern

Als Nächstes ändern wir das vorhandene CSS, um das Infofeld zu positionieren. Fügen Sie Ihrer `.info-box`-Regel {{cssxref("position", "position: fixed;")}} hinzu, damit das Infofeld am {{cssxref("top")}} des Browser-Viewports fixiert wird. Sobald das Infofeld fest positioniert ist, zentriert `margin: 0 auto;` es nicht mehr. Entfernen Sie diese Deklaration daher.

Die Regel sollte nun so aussehen:

```css
.info-box {
  width: 452px;
  height: 400px;
  position: fixed;
  top: 0;
}
```

### Den Hauptinhalt gestalten

Zum Abschluss dieses Beispiels müssen wir nur noch den Hauptinhalt gestalten. Fügen Sie die folgende Regel unter Ihrem übrigen CSS hinzu:

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

Zunächst geben wir dem Inhalt dieselbe {{cssxref("background-color")}}, {{cssxref("color")}} und dasselbe {{cssxref("padding")}} wie den Bereichen des Infofelds. Anschließend verschieben wir ihn mit einem großen {{cssxref("margin-left")}} nach rechts. So schaffen wir Platz für das Infofeld und verhindern, dass es andere Inhalte überlagert.

Damit ist das zweite Beispiel abgeschlossen. Das dritte ist hoffentlich ebenso interessant für Sie.

## Ein einblendbarer, verschiebbarer Bereich

Unser letztes Beispiel ist ein Bereich, der beim Drücken eines Symbols auf den Bildschirm geschoben oder wieder hinausgeschoben wird. Wie bereits erwähnt, ist das besonders bei mobilen Layouts nützlich: Dort ist der verfügbare Platz begrenzt, und ein Menü oder Infobereich soll nicht den Großteil des Bildschirms anstelle der eigentlichen Inhalte einnehmen.

Das fertige Beispiel sieht so aus:

![Die linken 60 % des Bildschirms sind leer. Rechts befindet sich ein 40 % breiter Bereich mit Informationen. In der oberen rechten Ecke ist ein Fragezeichen-Symbol zu sehen. Beim Drücken dieses Symbols wird der Bereich auf den Bildschirm geschoben oder wieder hinausgeschoben.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel unter [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) live ansehen ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)). Sehen Sie es sich an, um einen Eindruck davon zu bekommen, was Sie in diesem Abschnitt erstellen werden.

Erstellen Sie als Ausgangspunkt eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repository. Dieses Beispiel baut nicht auf dem vorherigen auf, daher benötigen Sie eine neue Ausgangsdatei. Sehen wir uns das HTML in der Datei an:

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

Am Anfang steht ein {{htmlelement("button")}}-Element mit einem besonderen Fragezeichen als Button-Text. Mit dem Button wird der Infobereich [`aside`](/de/docs/Web/HTML/Reference/Elements/aside) ein- und ausgeblendet. In den folgenden Abschnitten erklären wir, wie das funktioniert.

### Den Button gestalten

Kümmern wir uns zuerst um den Button. Fügen Sie zwischen Ihren {{htmlelement("style")}}-Tags das folgende CSS ein:

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

Die erste Regel gestaltet den `<button>`. Dabei haben wir:

- eine große {{cssxref("font-size")}} festgelegt, damit das Symbol gut sichtbar ist;
- den Rahmen entfernt und den Hintergrund transparent gemacht, sodass nur das Symbol `?` statt der Schaltfläche zu sehen ist;
- {{cssxref("position")}} auf `absolute` gesetzt und den Button mit {{cssxref("top")}} und {{cssxref("right")}} in der oberen rechten Ecke platziert;
- ihm einen {{cssxref("z-index")}} von 1 gegeben. So verdeckt der eingeblendete Infobereich das Symbol nicht; es bleibt darüber liegen und kann erneut gedrückt werden, um den Bereich auszublenden;
- mit der Eigenschaft {{cssxref("cursor")}} festgelegt, dass der Mauszeiger über dem Symbol als Hand erscheint – wie beim Zeigen auf einen Link. Das gibt Nutzern einen zusätzlichen visuellen Hinweis darauf, dass das Symbol eine Funktion hat.

### Den Bereich gestalten

Nun gestalten wir den verschiebbaren Bereich selbst. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

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

Hier geschieht einiges. Gehen wir es Schritt für Schritt durch:

- Zuerst legen wir für das Infofeld eine einfache {{cssxref("background-color")}} und {{cssxref("color")}} fest.
- Dann geben wir dem Bereich eine feste {{cssxref("width")}} und setzen seine {{cssxref("height")}} auf die volle Höhe des Browser-Viewports.
- Mit horizontalem {{cssxref("padding")}} schaffen wir etwas Abstand zum Inhalt.
- Anschließend setzen wir {{cssxref("position", "position: fixed;")}}, damit der Bereich immer an derselben Stelle erscheint, auch wenn die Seite gescrollt wird. Wir richten ihn am {{cssxref("top")}} des Viewports aus und platzieren ihn standardmäßig außerhalb des sichtbaren Bereichs auf der {{cssxref("right")}} Seite.
- Schließlich legen wir eine {{cssxref("transition")}} für das Element fest. Eine Transition lässt Änderungen zwischen Zuständen fließend ablaufen, statt abrupt zwischen „an“ und „aus“ zu wechseln. Hier soll der Bereich sanft auf den Bildschirm gleiten, wenn die Checkbox aktiviert wird – beziehungsweise, anders ausgedrückt, wenn auf das Fragezeichen-Symbol geklickt wird.

### Den aktiven Zustand festlegen

Zum Schluss fehlt noch eine CSS-Regel. Fügen Sie Folgendes am Ende Ihres CSS hinzu:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt: Wenn der Infobereich die Klasse `.open` hat, wird die Eigenschaft {{cssxref("right")}} des `<aside>` auf `0px` gesetzt. Dadurch erscheint der Bereich wieder auf dem Bildschirm – dank der Transition mit einer fließenden Bewegung. Wird die Klasse `.open` entfernt, verschwindet er wieder.

Um die Klasse `.open` beim Klicken auf den Button zum Infobereich hinzuzufügen oder von ihm zu entfernen, benötigen wir etwas JavaScript. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}}-Tags ein:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt dem Button einen Event-Handler für Klicks hinzu. Dieser schaltet die Klasse `open` am Infobereich um, sodass der Bereich in den sichtbaren Bereich hinein- oder aus ihm herausgleitet. Außerdem setzt der Event-Handler die Eigenschaft [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) des Buttons, um die Barrierefreiheit zu verbessern.

Damit kennen Sie eine einfache Möglichkeit, einen ein- und ausblendbaren Infobereich zu erstellen.

## Zusammenfassung

Damit schließen wir unseren Blick auf die Positionierung ab. Sie sollten nun verstehen, wie ihre grundlegenden Mechanismen funktionieren und wie Sie damit interessante Funktionen für Benutzeroberflächen umsetzen können. Machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstanden haben: Positionierung ist ein recht fortgeschrittenes Thema. Sie können die Artikel jederzeit erneut durcharbeiten, um Ihr Verständnis zu vertiefen.
