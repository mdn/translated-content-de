---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mithilfe von HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Erstellen deklarativer Popovers

In seiner einfachsten Form wird ein Popover durch Hinzufügen des [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attributs zu dem Element erstellt, das als Container für Ihre Popover-Inhalte dienen soll. Es wird zudem eine `id` benötigt, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Festlegen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet wird, indem es {{cssxref("display", "display: none")}} gesetzt wird. Um das Popover anzuzeigen oder auszublenden, müssen Sie mindestens eine Steuertaste hinzufügen (auch Popover-**Invoker** genannt). Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} mit `type="button"`) als Popover-Steuertaste festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut geben, dessen Wert die ID des steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Button ein Umschaltknopf ist – wiederholtes Drücken schaltet das Popover zwischen sichtbar und unsichtbar um.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-Attribut verwenden. Dieses nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Schaltflächen für Anzeigen und Ausblenden zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Code-Snippet in unserem [Grundlegenden Beispiel für ein deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einer Steuertaste ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` von ihm entfernt und es wird in die {{Glossary("top_layer", "Top-Ebene")}} gesetzt, sodass es über allen anderen Seiteninhalten liegt.

## Auto-Zustand und "leichtes Ausblenden"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt festgelegt wird, wird gesagt, dass es sich im **Auto-Zustand** befindet. Zwei wichtige Verhaltensweisen, die im Auto-Zustand zu beachten sind:

- Das Popover kann "leicht ausgeblendet" werden – das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb des Popovers klicken.
- Das Popover kann auch geschlossen werden, indem browserspezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste verwendet werden.
- Normalerweise kann nur ein `auto` Popover gleichzeitig angezeigt werden – das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Eine Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Weitere Informationen finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> **Hinweis:** `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument ausgeblendet. Bedenken Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits angezeigten Popover zu einem Fehler führt, da diese Verhaltensweisen bei einem schon angezeigten Popover keinen Sinn ergeben. Sie können jedoch diese Methoden bei einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere UI-Unterrichtsmeldungen, die Sie anzeigen möchten, möchten jedoch nicht, dass die Anzeige überladen und verwirrend wird, oder Sie zeigen Statusmeldungen an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach dem Anzeigen leicht auszublenden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Barrierefreiheits-Funktionen

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um es Benutzern von Tastatur und unterstützender Technologie (AT) zu ermöglichen, einfacher mit dem Popover zu interagieren:

- Wenn das Popover angezeigt wird, wird die Reihenfolge der Tastaturnavigationsfokus so aktualisiert, dass das Popover der nächsten Sequenz entspricht: Beispielsweise wird, wenn eine Taste gedrückt wird, um ein Popover anzuzeigen, jede Schaltfläche im Inneren des Popovers der nächste in der Tab-Reihenfolge (wird durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Im Gegensatz dazu wird bei der Verwendung der Tastatur (normalerweise durch Drücken der <kbd>Esc</kbd>-Taste) der Fokus zurück auf den Invoker verschoben.
- Um AT, wie Bildschirmlesegeräte, die Beziehung zwischen dem Invoker und dem Popover verständlich zu machen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer solchen Beziehung zwischen einem Popover und seiner Steuerung schafft auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Anker-Positionierung](#popover-anker-positionierung) für weitere Details.

> [!NOTE]
> Sie können auch eine Popover-Invoker-Beziehung unter Verwendung der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) einrichten, aber beachten Sie, dass in diesem Fall nur die Änderungen in der Fokussierung vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der erreicht wird, indem `popover="manual"` auf Ihrem Popover-Element festgelegt wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht ausgeblendet" werden, obwohl deklarative Schaltflächen zum Anzeigen/Ausblenden/Umschalten (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu bekommen oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch für die Funktionserkennung nützlich. Zum Beispiel:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) stellen ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut bereit und ermöglichen es Ihnen, die Steuertaste(n) für ein Popover einzurichten, obwohl der angenommene Eigenschaftswert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) stellen ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) bereit, das Ihnen erlaubt, die Aktion zu spezifizieren, die durch eine Steuertaste ausgeführt wird.

Indem Sie diese drei zusammenfügen, können Sie ein Popover und seine Steuertaste programmatisch einrichten, zum Beispiel so:

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const keyboardHelpPara = document.getElementById("keyboard-help-para");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  toggleBtn.style.display = "none";
}
```

Sie haben auch mehrere Methoden zur Steuerung der Anzeige und des Verbergens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) um ein Popover umzuschalten.

Sie könnten beispielsweise eine Hilfs-Popup-Funktionalität bereitstellen, die ein Hilfspopover durch Klicken auf eine Schaltfläche oder das Drücken einer bestimmten Taste auf der Tastatur umschaltet. Der erste Ansatz könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript so tun, wie oben gezeigt.

Für den zweiten Ansatz könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine zum Öffnen des Popovers und eine weitere, um es wieder zu schließen:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    if (popover.matches(":popover-open")) {
      popover.hidePopover();
    }
  }

  if (event.key === "s") {
    if (!popover.matches(":popover-open")) {
      popover.showPopover();
    }
  }
});
```

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudo-Klasse trifft nur auf Popovers zu, die momentan angezeigt werden. Dies ist wichtig, um Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen oder ein bereits ausgeblendetes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover zu zeigen _und_ zu verbergen wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel zur Umarbeitung der Hilfs-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Funktionserkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, keine mehrfachen Auto-Popovers gleichzeitig anzuzeigen — wenn sie ineinander verschachtelt sind. In solchen Fällen ist es erlaubt, dass mehrere Popovers gleichzeitig geöffnet sind, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Methoden, um verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über aufrufende/steuernde Elemente:

   ```html
   <div popover>
     Parent
     <button popovertarget="foo">Click me</button>
   </div>

   <div popover id="foo">Child</div>
   ```

3. Über das `anchor`-Attribut:

   ```html
   <div popover id="foo">Parent</div>

   <div popover anchor="foo">Child</div>
   ```

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an. Sie werden feststellen, dass eine ganze Reihe von Ereignishandlern verwendet wurde, um die Unter-Popovers bei Maus- und Tastaturzugriff entsprechend anzuzeigen und auszublenden und beide Menüs zu schließen, wenn eine Option aus einem der Menüs ausgewählt wird. Abhängig davon, wie Sie neue Inhalte laden, entweder in einer SPA oder einer mehrseitigen Website, sind einige oder alle dieser möglicherweise nicht erforderlich, aber sie wurden in diesem Demo zu Illustrationszwecken aufgenommen.

## Verwendung des "Hinweis"-Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hinweis-Popovers**, die durch das Setzen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind. `hint`-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, schließen jedoch andere `hint`-Popovers. Sie können leicht ausgeblendet werden und auf Schließungsanforderungen reagieren.

Dies ist nützlich für Fälle, in denen Sie beispielsweise Symbolleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber gleichzeitig auch Tooltips angezeigt werden sollen, wenn die Schaltflächen überfahren oder fokussiert werden, ohne die UI-Popovers zu schließen.

`hint`-Popovers werden häufig in Reaktion auf nicht-klickbare JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und ausgeblendet. Das Klicken auf eine Schaltfläche zum Öffnen eines `hint`-Popovers würde dazu führen, dass ein offenes `auto`-Popover leicht ausgeblendet wird.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, für ein Beispiel, das genau wie oben beschrieben funktioniert. Das Demo enthält eine Schaltflächenleiste: Beim Drücken zeigen die Schaltflächen `auto`-Popup-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn sie jedoch überfahren oder fokussiert werden, zeigen die Schaltflächen auch Tooltips (`hint`-Popovers), um dem Benutzer eine Vorstellung davon zu geben, was jede Schaltfläche tut, ohne ein aktuell angezeigtes Untermenü zu verbergen.

In den untenstehenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, obwohl es dafür nicht wirklich viele Gründe gibt. Sie sind so konzipiert, dass bestimmte Einschränkungen von `auto`-Popovers umgangen werden und Anwendungsfälle wie der in diesem Abschnitt beschriebene ermöglicht werden.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Unter-Menüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ erstellt, indem `auto`-Popovers verwendet werden.

Zuerst die Steuerschaltflächen:

```html
<section id="button-bar">
  <button popovertarget="submenu-1" popovertargetaction="toggle" id="menu-1">
    Menu A
  </button>

  <button popovertarget="submenu-2" popovertargetaction="toggle" id="menu-2">
    Menu B
  </button>

  <button popovertarget="submenu-3" popovertargetaction="toggle" id="menu-3">
    Menu C
  </button>
</section>
```

Nun die Popovers selbst:

```html
<div id="submenu-1" popover="auto">
  <button>Option A</button><br /><button>Option B</button>
</div>
<div id="submenu-2" popover="auto">
  <button>Option A</button><br /><button>Option B</button>
</div>
<div id="submenu-3" popover="auto">
  <button>Option A</button><br /><button>Option B</button>
</div>
```

### Erstellen der Tooltips mit `popover="hint"`

Die Untermenü-Popovers funktionieren so wie sie sind gut, öffnen sich, wenn die Symbolleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips beim Überfahren/Fokussieren der Schaltflächen an? Zuerst erstellen wir die Tooltips in HTML mit `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um die Anzeige/Ausblendung zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir uns Referenzen zu den `hint`-Popovers und den Steuerschaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mittels [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion `addEventListeners()`, die vier Ereignislistener (mittels [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem gegebenen {{htmlelement("button")}} festlegt, der durch das Abrufen des `<button>` an einem bestimmten Indexwert der `btns`-`NodeList` ausgewählt wird. Die Funktionen wirken sich auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList` aus, sodass wir die Schaltflächen und die Tooltips synchron halten und den korrekten Tooltip anzeigen/ausblenden, wenn eine Schaltfläche interagiert wird.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur zugänglich sind.

```js
function addEventListeners(i) {
  btns[i].addEventListener("mouseover", () => {
    tooltips[i].showPopover({ source: btns[i] });
  });

  btns[i].addEventListener("mouseout", () => {
    tooltips[i].hidePopover();
  });

  btns[i].addEventListener("focus", () => {
    tooltips[i].showPopover({ source: btns[i] });
  });

  btns[i].addEventListener("blur", () => {
    tooltips[i].hidePopover();
  });
}
```

Zum Schluss verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um die `<buttons>` in der `btns`-`NodeList` zu durchlaufen und die Funktion `addEventListeners()` für jede aufzurufen, damit alle die gewünschten Ereignislisten zugewiesen bekommen.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Styling von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und -Positionierungstechniken im Zusammenhang mit Popovers.

### Auswahl von Popovers

Sie können alle Popovers mit einem einfachen Attributselekor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert in den Attributselekor aufnehmen:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die angezeigt werden, indem Sie die {{cssxref(":popover-open")}}-Pseudo-Klasse verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudo-Element ist ein Vollbild-Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "Top-Ebene")}} platziert wird und es ermöglicht, Effekte auf die Seiteninhalte hinter den Popovers hinzuzufügen, wenn gewünscht. Man könnte beispielsweise den Inhalt hinter dem Popover ausblenden, um die Aufmerksamkeit des Benutzers darauf zu richten:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel für Popovers mit unscharfem Hintergrund](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um zu sehen, wie dies umgesetzt wird.

### Positionierung von Popovers

Beim Betrachten der ersten paar Beispiele, auf die zu Beginn des Artikels verwiesen wurde, haben Sie vielleicht bemerkt, dass die Popovers in der Mitte des Ansichtsfensters erscheinen, ihren Inhalt umschließen und einen schwarzen Rand haben. Dies ist das Standard-Styling, erreicht durch die folgende Regel im UA-Stylesheet:

```css
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
```

Um benutzerdefinierte Größen und Positionierung des Popovers an einem anderen Ort anzuwenden, könnten Sie die obigen Stile mit so etwas überschreiben:

```css
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

Ein isoliertes Beispiel hierfür können Sie in unserem [Beispiel zur Popover-Positionierung sehen](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)).

### Popover-Anker-Positionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker und nicht zum Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie davon profitieren, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

Das Zuordnen eines Popovers irgendeiner Art mit seinem Invoker durch das [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut oder die `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies verursacht, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ zu ihm über [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Zuordnung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Zuordnung mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden. Sie müssen jedoch weiterhin das Positionierungs-CSS spezifizieren.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}} Funktionswerten verwenden, die auf {{Glossary("inset_properties", "inset properties")}} gesetzt und `anchor-center`-Werte auf Ausrichtungs-Eigenschaften gesetzt sind:

```css
.my-popover {
  bottom: calc(anchor(top) + 20px);
  justify-self: anchor-center;
}
```

Oder Sie könnten eine {{cssxref("position-area")}}-Eigenschaft verwenden:

```css
.my-popover {
  position-area: top;
}
```

Siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Zuordnung von Anker- und positionierten Elementen und zum Positionieren von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Zuordnung verwendet, sehen Sie sich unser [Popover-Hinweis-Demo an](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Ankerzuweisungen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden.

## Animieren von Popovers

Popovers werden mit `display: none;` verborgen und `display: block;` angezeigt, und ebenso aus der {{Glossary("top_layer", "Top-Ebene")}} herausgenommen oder hinzugefügt und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) hinzugefügt oder davon entfernt. Daher muss die {{cssxref("display")}}-Eigenschaft für die Animation von Popovers animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Speziell wird der Browser zwischen `none` und einem anderen `display`-Wert umschalten, damit der animierte Inhalt für die gesamte Animationsdauer sichtbar ist. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) schaltet der Wert bei `0%` der Animationsdauer auf `block`, sodass er während der gesamten Animation sichtbar bleibt.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, schaltet der Wert bei `100%` der Animationsdauer auf `none`, sodass er während der gesamten Animation sichtbar bleibt.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu aktivieren. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen werden die folgenden Funktionen benötigt:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Stellt einen Satz von Startwerten für Eigenschaften bereit, die auf das Popover gesetzt sind, von denen Sie wollen, dass sie animiert werden, wenn es zum ersten Mal angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element wechselt; sie werden nicht ausgelöst, wenn ein Element zum ersten Mal aktualisiert wird oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während der Übergangsdauer als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und sichergestellt wird, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Inkludieren Sie `overlay` in der Übergangsliste, um sicherzustellen, dass das Entfernen des Popovers aus der Top-Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, um ebenfalls sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf dem {{cssxref("transition")}}-Shorthand), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, um zu sehen, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover über das globale [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-HTML-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement des Popovers vorgesehen ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen wollen, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir wollen, dass das Popover während des Ein- oder Ausblendens horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf dem verdeckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den sichtbaren Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudo-Klasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation zu definieren, wenn das Popover angezeigt oder ausgeblendet wird.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

/* Transition for the popover itself */

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* Final state of the exit animation */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Needs to be after the previous [popover]:popover-open rule
to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Transition for the popover's backdrop */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* The nesting selector (&) cannot represent pseudo-elements
so this starting-style rule cannot be nested */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

Wie bereits erwähnt, haben wir auch:

- Einen Startzustand für die `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `display` zur Liste der zu übergehenden Eigenschaften hinzugefügt, damit das animierte Element während der Eintritts- und Austrittsanimationen des Popovers sichtbar (auf `display: block` gesetzt) bleibt. Ohne dies wäre die Austrittsanimation nicht sichtbar; das Popover würde praktisch einfach verschwinden.
- `overlay` zur Liste der zu übergehenden Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus der Überlagerung bis zum Abschluss der Animation hinausgezögert wird. Der Effekt davon mag bei einfachen Animationen wie dieser hier nicht sofort sichtbar sein, aber bei komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vor Abschluss des Übergangs aus der Überlagerung entfernt wird.
- `allow-discrete` auf beiden Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinter dem Popover eingeschlossen haben, das beim Öffnen erscheint und eine schöne Verdunklungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Übergang eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zurück in den Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Beispiel zur Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis hierfür.

### Eine Popover-Keyframe-Animation

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an; Sie fügen Ihre "to"- und "from"-`display`-Werte in Keyframes ein.
- Sie aktivieren keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch nicht innerhalb von Keyframes setzen; die `display`-Animation übernimmt das Animieren des Popovers vom Anzeigen zum Ausblenden.

Werfen wir einen Blick auf ein Beispiel.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement des Popovers vorgesehen ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschte Eintritts- und Austrittsanimation spezifizieren sowie eine Eintrittsanimation nur für das Overlay. Beachten Sie, dass es nicht möglich war, das Einblenden des Overlays zu animieren — das Overlay wird unmittelbar aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass es nichts zu animieren gibt.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
  animation: fade-out 0.7s ease-out;
}

[popover]:popover-open {
  animation: fade-in 0.7s ease-out;
}

[popover]:popover-open::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleX(1);
    /* display needed on the closing animation to keep the popover
    visible until the animation ends */
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleX(0);
    /* display: none not required here because it is the default value
    for a closed popover, but including it so the behavior is clear */
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0%);
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}
```

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Eine Popover-Keyframe-Animation", "100%", "200") }}
