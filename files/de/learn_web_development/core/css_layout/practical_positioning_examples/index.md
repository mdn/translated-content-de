---
title: Praktische Beispiel für Positionierung
slug: Learn_web_development/Core/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Dieser Artikel zeigt, wie man einige praxisnahe Beispiele erstellt, um zu veranschaulichen, welche Möglichkeiten Sie mit Positionierungs-Techniken haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen des Stylings</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein Gefühl für die praktischen Anwendungen der Positionierung zu bekommen</td>
    </tr>
  </tbody>
</table>

## Eine Registerkarten-Infobox

Das erste Beispiel, das wir uns ansehen werden, ist eine klassische Registerkarten-Infobox — ein sehr häufig verwendetes Feature, wenn Sie viele Informationen in einem kleinen Bereich unterbringen möchten. Dies beinhaltet informationsreiche Anwendungen wie Strategie-/Kriegsspiele, mobile Versionen von Webseiten, bei denen der Bildschirm schmal ist und der Platz begrenzt ist, sowie kompakte Informationsboxen, bei denen Sie viele Informationen verfügbar machen möchten, ohne dass sie die gesamte Benutzeroberfläche füllen. Unser einfaches Beispiel wird am Ende so aussehen:

![Registerkarte 1 ist ausgewählt. 'Registerkarte 2' und 'Registerkarte 3' sind die anderen beiden Registerkarten. Nur die Inhalte der ausgewählten Registerkarte sind sichtbar. Wenn eine Registerkarte ausgewählt ist, ändert sich die Textfarbe von schwarz zu weiß und die Hintergrundfarbe von orangerot zu sattelbraun.](tabbed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live auf [tabbed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Sie könnten denken: "Warum nicht einfach die separaten Registerkarten als separate Webseiten erstellen und die Registerkarten für separate Seiten anklickbar machen, um den Effekt zu erzeugen?" Dieser Code wäre einfacher, ja, aber dann wäre jede separate "Seitenansicht" tatsächlich eine neu geladene Webseite, was es schwieriger machen würde, Informationen über Ansichten hinweg zu speichern und dieses Feature in ein größeres UI-Design zu integrieren.

Zu Beginn sollten Sie eine lokale Kopie der Startdateien erstellen — [tabbed-info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) und [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js). Speichern Sie diese an einem sinnvollen Ort auf Ihrem Computer und öffnen Sie `tabbed-info-box-start.html` in Ihrem Texteditor. Schauen wir uns den HTML-Inhalt im Body-Bereich an:

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

Hier haben wir ein {{htmlelement("section")}}-Element mit einer `class` von `info-box`, die zwei {{htmlelement("div")}}-Elemente enthält. Das erste div enthält drei Buttons, die zu den eigentlichen Registerkarten werden, auf die geklickt werden kann, um unsere Inhaltspaneele anzuzeigen. Das zweite div enthält drei {{htmlelement("article")}}-Elemente, die die Inhaltspaneele bilden, die den jeweiligen Registerkarten entsprechen. Jedes Paneel enthält etwas Beispielinhalt.

Der Gedanke hier ist, dass wir die Registerkarten so stylen, dass sie wie ein standardmäßiges horizontales Navigationsmenü aussehen und die Paneele mithilfe von absoluter Positionierung übereinander liegen. Wir geben Ihnen auch ein bisschen JavaScript, das Sie auf Ihrer Seite einfügen können, um das entsprechende Paneel anzuzeigen, wenn eine Registerkarte gedrückt wird, und die Registerkarte selbst zu stylen. Sie müssen den JavaScript-Code an dieser Stelle nicht verstehen, aber Sie sollten darüber nachdenken, so schnell wie möglich einige grundlegende [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)-Kenntnisse zu erwerben — je komplexer Ihre UI-Funktionen werden, desto wahrscheinlicher ist es, dass Sie etwas JavaScript benötigen, um Ihre gewünschte Funktionalität zu implementieren.

### Allgemeine Einrichtung

Um zu beginnen, fügen Sie das folgende zwischen Ihren öffnenden und schließenden {{HTMLElement("style")}}-Tags ein:

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

Dies ist nur eine allgemeine Einrichtung, um eine serifenlose Schriftart auf unserer Seite zu setzen, das `border-box`-{{cssxref("box-sizing")}}-Modell zu verwenden und den Standardabstand des {{htmlelement("body")}} zu entfernen.

Fügen Sie als nächstes das Folgende direkt unter Ihrem vorherigen CSS hinzu:

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

Dies setzt eine spezifische Breite und Höhe auf den Inhalt und zentriert ihn auf dem Bildschirm mit dem alten `margin: 1.25rem auto 0`. Bereits im Kurs haben wir davon abgeraten, eine feste Höhe auf Inhaltscontainer zu setzen, wenn es irgendwie möglich ist; in diesem Fall ist es jedoch in Ordnung, da wir festen Inhalt in unseren Registerkarten haben.

### Styling unserer Registerkarten

Nun möchten wir, dass die Registerkarten wie Registerkarten aussehen — im Grunde sind dies ein horizontales Navigationsmenü, aber anstatt beim Anklicken unterschiedliche Webseiten zu laden, wie wir es vorher im Kurs gesehen haben, bewirken sie, dass unterschiedliche Paneele auf derselben Seite angezeigt werden. Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu, um die `tablist` zu einem {{cssxref("flex")}}-Container zu machen und sie über die gesamte Breite von 100% zu spannen:

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> Wir verwenden Nachkommen-Selektoren mit `.info-box` am Anfang der Kette im gesamten Beispiel — das ist so, dass wir dieses Feature auf einer Seite mit bereits enthaltenen Inhalten hinzufügen können, ohne die Stile anderer Teile der Seite zu beeinträchtigen.

Als nächstes stylen wir die Buttons so, dass sie wie Registerkarten aussehen. Fügen Sie das folgende CSS hinzu:

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

Als nächstes setzen wir die `:focus`- und `:hover`-Zustände der Registerkarten so, dass sie anders aussehen, wenn sie fokussiert/gehovered werden und den Benutzern ein visuelles Feedback geben.

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

Dann setzen wir eine Regel, die eine der Registerkarten hervorhebt, wenn die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Eigenschaft auf `true` gesetzt ist. Wir werden dies mit JavaScript setzen, wenn eine Registerkarte angeklickt wird. Platzieren Sie das folgende CSS unter Ihren anderen Stilen:

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### Styling der Paneele

Die nächste Aufgabe besteht darin, unsere Paneele zu stylen. Lassen Sie uns loslegen!

Fügen Sie als erstes die folgende Regel hinzu, um den `.panels` {{htmlelement("div")}}-Container zu stylen. Hier setzen wir eine feste {{cssxref("height")}}, um sicherzustellen, dass die Paneele genau in die Infobox passen, setzen {{cssxref("position")}} auf `relative`, um das {{htmlelement("div")}} als Positionierungs-Kontext zu setzen, sodass Sie dann positionierte Kindelemente relativ dazu und nicht zum anfänglichen Ansichtsfenster platzieren können, und schließlich {{cssxref("clear")}} wir den Float, der im obigen CSS gesetzt wurde, damit er nicht die restliche Layout beeinflusst.

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

Zum Abschluss für diesen Abschnitt stylen wir die einzelnen {{htmlelement("article")}}-Elemente, die unsere Paneele ausmachen. Die erste Regel, die wir hinzufügen, positioniert die Paneele absolut {{cssxref("position")}} und lässt alle bündig zur {{cssxref("top")}} und {{cssxref("left")}} ihres {{htmlelement("div")}}-Containers liegen — dieser Teil ist entscheidend für dieses gesamte Layout-Feature, da er die Paneele übereinander sitzen lässt. Die Regel gibt den Paneelen auch die gleiche feste Höhe wie dem Container, fügt dem Inhalt etwas {{cssxref("padding")}} hinzu, eine Text{{cssxref("color")}}, und eine {{cssxref("background-color")}}.

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

Die zweite Regel, die wir hier hinzufügen, sorgt dafür, dass ein Paneel mit einer `is-hidden`-Klasse daran versteckt wird. Auch hier werden wir diese Klasse zu angemessener Zeit mit JavaScript hinzufügen/entfernen. Wenn eine Registerkarte ausgewählt ist, wird das entsprechende Paneel seine `is-hidden`-Klasse entfernt haben, und alle anderen Paneele werden die `is-hidden`-Klasse gesetzt haben, sodass jeweils nur ein Paneel sichtbar ist.

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

Der letzte Teil, der dieses Feature zum Funktionieren bringt, ist der JavaScript-Code. Die Datei `tabs-manual.js` wurde mit dem [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Tag eingebunden:

```html
<script src="tabs-manual.js"></script>
```

Dieser Code macht Folgendes:

- Beim [Seitenladeereignis](/de/docs/Web/API/Window/load_event) initialisiert er die `TabsManual`-[Klasse](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) für alle `tablist`-Elemente.
- Wenn ein `TabsManual`-Objekt erstellt wird, werden im Konstruktor alle Referenzen zu Tabs und Paneelen in `tabs` und `tabpanels`-Variablen gesammelt, sodass wir später leicht Dinge mit ihnen machen können.
- Der Konstruktor registriert auch [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler auf allen Tabs. Die Ereignishandler enthalten Logik dazu, was passieren soll, wenn eine Registerkarte durch Klick oder Tastendruck ausgewählt wird.
- Im `setSelectedTab(currentTab)`-Funktion passiert Folgendes:
  - Ein `for`-Schleife wird verwendet, um durch alle Registerkarten zu zyklieren und sie durch Setzen der `aria-selected`-Eigenschaft auf `false` zu deselektieren und `is-hidden`-Klasse auf entsprechenden Paneelen zu setzen.
  - Auf der ausgewählten Registerkarte (`currentTab`) wird `aria-selected` auf `true` gesetzt und `is-hidden`-Klasse vom entsprechenden Paneel entfernt.

- Der Code hat auch Logik zur Unterstützung der Tastaturnavigation mit den Tasten `Left arrow`, `Right arrow`, `Home` und `End`.

## Eine fixierte Position der Registerkarten-Infobox

In unserem zweiten Beispiel nehmen wir unser erstes Beispiel — unsere Infobox — und fügen es in den Kontext einer vollständigen Webseite ein. Aber nicht nur das — wir geben ihr eine feststehende Position, sodass sie an derselben Position im Browserfenster bleibt. Wenn sich der Hauptinhalt scrollt, bleibt die Infobox an derselben Position auf dem Bildschirm. Unser fertiges Beispiel wird so aussehen:

![Die Infobox ist ein Container mit 3 Registerkarten, wobei die erste Registerkarte ausgewählt ist und nur die Inhalte der ersten Registerkarte angezeigt werden. Sie hat eine feste Position. Die Infobox ist in der oberen linken Ecke des Fensters mit einer Breite von 452 Pixeln positioniert. Ein Container mit gefälschtem Inhalt nimmt die übrige rechte Hälfte des Fensters ein; der Container mit dem gefälschten Inhalt ist höher als das Fenster und kann gescrollt werden. Wenn die Seite gescrollt wird, bewegt sich der Container auf der rechten Seite, während die Infobox an ihrer Position auf dem Bildschirm fixiert bleibt.](fixed-info-box.png)

> [!NOTE]
> Sie können das fertige Beispiel live auf [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Als Ausgangspunkt können Sie Ihr fertiges Beispiel aus dem ersten Abschnitt des Artikels verwenden oder eine lokale Kopie von [tabbed-info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) aus unserem GitHub-Repo machen.

### HTML-Ergänzungen

Zuerst benötigen wir einige zusätzliche HTML-Inhalte, um den Hauptinhalt der Webseite darzustellen. Fügen Sie das folgende {{htmlelement("section")}} direkt unter Ihrem öffnenden {{htmlelement("body")}}-Tag, kurz vor dem vorhandenen Abschnitt hinzu:

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
> Sie können nach Belieben den gefälschten Inhalt durch echten Inhalt ersetzen.

### Änderungen am bestehenden CSS

Als Nächstes müssen wir einige kleine Änderungen am bestehenden CSS vornehmen, um die Infobox zu platzieren und zu positionieren. Ändern Sie Ihre `.info-box`-Regel, um `margin: 0 auto;` zu entfernen (wir möchten die Infobox nicht mehr zentrieren), fügen Sie {{cssxref("position", "position: fixed;")}} hinzu und heften Sie sie an die {{cssxref("top")}} des Browser-Viewports.

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

### Styling des Hauptinhalts

Das Einzige, was für dieses Beispiel übrig bleibt, ist, dem Hauptinhalt etwas Styling zu geben. Fügen Sie die folgende Regel unter den Rest Ihres CSS hinzu:

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

Zunächst geben wir dem Inhalt die gleiche {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("padding")}} wie den Infobox-Paneelen. Dann geben wir ihm einen großen {{cssxref("margin-left")}}, um ihn nach rechts zu verschieben, wodurch Platz für die Infobox freigelassen wird, damit sie nicht mit anderen Elementen überlappt.

Dies markiert das Ende des zweiten Beispiels; wir hoffen, dass Sie das dritte ebenso interessant finden.

## Ein schiebbares verstecktes Paneel

Das letzte Beispiel, das wir hier präsentieren, ist ein Paneel, das sich bei Betätigung eines Icons ein- und ausblenden lässt — wie bereits erwähnt, ist dies beliebt für Situationen wie mobile Layouts, bei denen der verfügbare Bildschirmplatz klein ist, sodass Sie nicht den größten Teil davon durch ein Menü oder Infopaneel belegen möchten, anstatt den nützlichen Inhalt anzuzeigen.

Unser fertiges Beispiel wird so aussehen:

![Ein leerer Bildschirm auf der linken 60% des Bildschirms mit einem 40% breiten Paneel, das rechts Informationen anzeigt. Ein '?' Icon befindet sich in der oberen rechten Ecke. Das Paneel gleitet auf und aus dem Bildschirm bei Betätigung dieses '?' Icons.](hidden-sliding-panel.png)

> [!NOTE]
> Sie können das fertige Beispiel live auf [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)) sehen. Schauen Sie es sich an, um eine Vorstellung davon zu bekommen, was Sie in diesem Abschnitt des Artikels bauen werden.

Als Ausgangspunkt machen Sie eine lokale Kopie von [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) aus unserem GitHub-Repo. Dies folgt nicht auf das vorherige Beispiel, daher ist eine neue Startdatei erforderlich. Lassen Sie uns einen Blick auf das HTML in der Datei werfen:

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

Hier haben wir ein {{htmlelement("button")}}-Element mit einem speziellen Fragezeichenzeichen als Button-Text. Der Button wird gedrückt, um das [`aside`](/de/docs/Web/HTML/Reference/Elements/aside)-Infopaneel ein- und auszublenden. In den folgenden Abschnitten erklären wir, wie das alles funktioniert.

### Styling des Buttons

Beginnen wir mit dem Button — fügen Sie das folgende CSS zwischen Ihren {{htmlelement("style")}}-Tags ein:

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

- Eine große {{cssxref("font-size")}} gesetzt, um das Icon schön groß zu machen.
- Den Rahmen entfernt und den Hintergrund transparent gemacht, sodass statt des Buttons nur das `?` Icon angezeigt wird.
- {{cssxref("position")}} auf `absolute` gesetzt und {{cssxref("top")}} und {{cssxref("right")}} verwendet, um es schön in der oberen rechten Ecke zu platzieren.
- Ein {{cssxref("z-index")}} von 1 darauf gesetzt — dies ist so, dass wenn das Infopaneel gestylt und angezeigt wird, es das Icon nicht verdeckt; stattdessen sitzt das Icon darauf, sodass es erneut gedrückt werden kann, um das Info-Paneel auszublenden.
- Die {{cssxref("cursor")}}-Eigenschaft verwendet, um den Mauszeiger, wenn er über dem Icon schwebt, in eine Handzeiger (wie der, den Sie sehen, wenn Links überfahren werden) zu ändern, als visuellen Hinweis für die Benutzer, dass das Icon etwas Interessantes tut.

### Styling des Paneels

Nun ist es an der Zeit, das eigentliche schiebende Paneel selbst zu stylen. Fügen Sie die folgende Regel am Ende Ihres CSS ein:

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

Hier passiert eine Menge — lassen Sie uns das Stück für Stück besprechen:

- Zuerst setzen wir einige einfache {{cssxref("background-color")}} und {{cssxref("color")}} auf dem Infopaneel.
- Als nächstes setzen wir eine feste {{cssxref("width")}} auf das Paneel und machen seine {{cssxref("height")}} die gesamte Höhe des Browser-Viewports.
- Wir fügen auch etwas {{cssxref("padding")}} horizontal dazu, um es ein bisschen aufzulockern.
- Als Nächstes setzen wir {{cssxref("position", "position: fixed;")}} auf das Paneel, sodass es immer an derselben Stelle erscheint, selbst wenn die Seite Inhalte zum Scrollen hat. Wir kleben es an die {{cssxref("top")}} des Viewports und stellen es so ein, dass es standardmäßig außerhalb des Bildschirms nach rechts ist.
- Schließlich setzen wir eine {{cssxref("transition")}} auf das Element. Transition ist ein interessantes Feature, das es ermöglicht, Veränderungen zwischen Zuständen sanft passieren zu lassen, statt einfach nur "an" oder "aus" abrupt zu wechseln. In diesem Fall beabsichtigen wir, dass das Paneel sanft auf dem Bildschirm erscheint, wenn das Kontrollkästchen aktiviert ist. (Oder anders ausgedrückt: Wenn das Fragezeichenicon angeklickt wird.)

### Einstellung des Check-Zustands

Es gibt noch ein letztes Stück CSS hinzuzufügen — setzen Sie Folgendes unten in Ihr CSS:

```css
#info-panel.open {
  right: 0px;
}
```

Die Regel besagt, dass wenn das Infopaneel die `.open`-Klasse gesetzt hat, wird die {{cssxref("right")}}-Eigenschaft des `<aside>` auf `0px` gesetzt, was dazu führt, dass das Paneel wieder auf dem Bildschirm erscheint (sanft dank der Transition). Durch das Entfernen der `.open`-Klasse wird das Paneel wieder ausgeblendet.

Um die `.open`-Klasse am Infopaneel durch Klicken auf den Button hinzuzufügen/zu entfernen, benötigen wir etwas JavaScript. Fügen Sie den folgenden Code zwischen {{htmlelement("script")}}-Tags ein:

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

Der Code fügt dem Button einen Click-Event-Handler hinzu. Der Click-Handler schaltet die `open`-Klasse am Infopaneel ein oder aus, wodurch das Paneel ein- oder aus dem Bild rutscht. Der Ereignishandler setzt auch die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Eigenschaft am Button, um die Zugänglichkeit zu verbessern.

Da haben Sie es — der einfachste Weg, einen umschaltbaren Infopaneeleffekt zu erstellen.

## Zusammenfassung

Damit beenden wir unseren Blick auf die Positionierung — Sie sollten nun eine Vorstellung davon haben, wie die grundlegenden Mechanismen funktionieren, und verstehen, wie Sie diese beginnen können anzuwenden, um interessante UI-Funktionen zu erstellen. Machen Sie sich keine Sorgen, wenn Sie das nicht alles sofort verstanden haben — Positionierung ist ein ziemlich fortgeschrittenes Thema, und Sie können die Artikel jederzeit erneut durcharbeiten, um Ihr Verständnis zu vertiefen.
