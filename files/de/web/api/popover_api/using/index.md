---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mithilfe von HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Deklarative Popovers erstellen

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das die Popover-Inhalte enthalten soll. Ein `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungselementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf eingestellt wird. Um das Popover anzuzeigen/auszublenden, müssen Sie mindestens eine Steuerschaltfläche hinzufügen (auch bekannt als Popover-**Invokator**). Sie können eine {{htmlelement("button")}} (oder {{htmlelement("input")}} mit `type="button"`) als Popover-Steuerschaltfläche festlegen, indem Sie ihr ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass die Schaltfläche eine Umschalttaste ist - beim wiederholten Drücken wird das Popover zwischen Sichtbar und Ausgeblendet umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden - dies nimmt den Wert `"hide"`, `"show"` oder `"toggle"` an. Um zum Beispiel separate Schaltflächen für Anzeigen und Ausblenden zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Codebeispiel in unserem [Grundlegenden deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die standardmäßige Aktion, die von einer Steuerschaltfläche ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "Top-Ebene")}} verschoben, sodass es über allen anderen Seiteninhalten liegt.

## Automatischer Status und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt eingestellt ist, wird gesagt, dass es sich im **automatischen Status** befindet. Die zwei wichtigen Verhaltensweisen, die man beachten sollte, sind:

- Das Popover kann "light dismissed" werden - das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken.
- Das Popover kann auch mit browser-spezifischen Mechanismen geschlossen werden, wie das Drücken der <kbd>Esc</kbd>-Taste.
- In der Regel kann nur ein `auto`-Popover gleichzeitig angezeigt werden - wenn ein zweites Popover angezeigt wird, während eines bereits angezeigt wird, wird das erste ausgeblendet. Die Ausnahme von dieser Regel besteht, wenn Sie verschachtelte automatische Popovers haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für mehr Details.

> **Hinweis:** `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) für andere Elemente im Dokument geschlossen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits angezeigten Popover zu einem Fehler führt, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das momentan nicht angezeigt wird.

Der automatische Status ist nützlich, wenn Sie immer nur ein einziges Popover auf einmal anzeigen möchten. Vielleicht haben Sie mehrere didaktische UI-Nachrichten, die Sie anzeigen möchten, aber möchten nicht, dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Mehrfach automatische Popovers Beispiel](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach dem Anzeigen "leicht zu schließen", und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Zugänglichkeit

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invokator) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und unterstützende Technologie (AT)-Benutzern zu ermöglichen, leichter mit dem Popover zu interagieren:

- Wenn das Popover angezeigt wird, wird die Reihenfolge der Tastaturnavigationsfokus so aktualisiert, dass das Popover als nächstes in der Sequenz ist: Zum Beispiel, wenn eine Schaltfläche gedrückt wird, um ein Popover anzuzeigen, werden Schaltflächen innerhalb des Popovers als nächstes in der Tabulatorreihenfolge sein (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt, wenn das Popover über die Tastatur geschlossen wird (normalerweise über die <kbd>Esc</kbd>-Taste), wird der Fokus zurück auf den Invokator verschoben.
- Um AT wie Bildschirmlesern zu ermöglichen, die Beziehung zwischen dem Invokator und dem Popover zu verstehen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise schafft auch eine implizite Ankerreferenz zwischen den beiden - siehe [Popover-Anker-Positionierung](#popover-anker-positionierung) für mehr Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung einzurichten

Neben der Verwendung des `popovertarget`-Attributs können Sie eine Popover-Invoker-Beziehung auch auf andere Weise einrichten:

- Verwendung der `source`-Option der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)- oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methoden. Beachten Sie, dass in diesem Fall nur die Fokusnavigationsreihenfolge geändert wird, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element festgelegt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Auswahlfenster, wenn es über die {{cssxref("appearance")}}-Eigenschaft `base-select` in die [anpassbare Auswahlfunktion](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) integriert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Status

Eine Alternative zum automatischen Status ist der **manuelle Status**, der durch Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "light dismissed" werden, obwohl deklarative Schaltflächen zum Anzeigen/Ausblenden/Umschalten (wie oben gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Mehrfach manuelle Popovers Beispiel](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch mithilfe einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu bekommen oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch nützlich für die Funktionsüberprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, das es Ihnen ermöglicht, die Steuerschaltfläche(n) für ein Popover einzurichten, obwohl der Eigenschaftswert eine Referenz auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), sodass Sie die Aktion festlegen können, die von einer Steuerschaltfläche ausgeführt wird.

Indem Sie diese drei zusammenfügen, können Sie ein Popover und seine Steuerschaltfläche programmatisch einrichten, wie folgt:

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

Sie haben auch mehrere Methoden zur Steuerung des Anzeigens und Ausblendens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Anzeigen eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Ausblenden eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zum Umschalten eines Popovers.

Sie könnten beispielsweise die Möglichkeit bieten, ein Hilfe-Popover ein- und auszublenden, indem Sie eine Schaltfläche anklicken oder eine bestimmte Taste auf der Tastatur drücken. Die erste Möglichkeit könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt machen.

Für die zweite Möglichkeit könnten Sie einen Ereignis-Handler erstellen, der zwei separate Tasten programmiert - eine, um das Popover zu öffnen, und eine, um es wieder zu schließen:

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

In diesem Beispiel wird [`Element.matches()`](/de/docs/Web/API/Element/matches) verwendet, um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse stimmt nur mit Popovers überein, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die ausgelöst werden, wenn Sie versuchen, ein bereits angezeigtes Popover erneut anzuzeigen, oder ein bereits ausgeblendetes Popover auszublenden.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover sowohl anzuzeigen _als auch_ auszublenden, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Toggle help UI example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Funktionsüberprüfung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere automatische Popovers gleichzeitig angezeigt werden - wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über Invokator-/Steuerelemente:

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

Sehen Sie sich unser [Verschachteltes Popover-Menü-Beispiel](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an, um ein Beispiel zu sehen. Sie werden bemerken, dass einige Event-Handler verwendet wurden, um das Unterpopover bei Maus- und Tastaturzugriffen entsprechend anzuzeigen und auszublenden und auch beide Menüs auszublenden, wenn eine Option aus einem von beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte handhaben, sei es in einer SPA oder einer mehrseitigen Website, können einige oder alle hiervon nicht notwendig sein, aber sie wurden in diesem Demo zu illustrativen Zwecken aufgenommen.

## Verwendung des "Hint"-Popover-Status

Es gibt eine dritte Art von Popover, die Sie erstellen können - **Hinweis-Popovers**, die durch Setzen von `popover="hint"` auf Ihr Popover-Element gekennzeichnet sind. `hint`-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, sondern schließen andere `hint`-Popovers. Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Symbolleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber Sie auch Tooltips anzeigen möchten, wenn die Schaltflächen überfahren werden oder den Fokus erhalten, ohne die UI-Popovers zu schließen.

`hint`-Popovers werden in der Regel in Reaktion auf nicht klickrige JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) ge- und ausgeblendet. Das Klicken auf eine Schaltfläche zum Öffnen eines `hint`-Popovers würde ein offenes `auto`-Popover leicht schließen.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel an, das exakt wie oben beschrieben funktioniert. Das Demo verfügt über eine Schaltflächenleiste; beim Drücken zeigen die Schaltflächen `auto`-Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn jedoch überfahren oder fokussiert, zeigen die Schaltflächen auch Tooltips (Hinweis-Popovers), um dem Benutzer eine Vorstellung davon zu geben, was jede Schaltfläche tut, die kein aktuell angezeigtes Untermenü ausblenden.

In den folgenden Abschnitten gehen wir alle wichtigen Teile des Codes durch.

> [!NOTE]
> Sie _können_ `hint`-Popovers neben `manual`-Popovers verwenden, obwohl es dafür nicht wirklich viel Grund gibt. Sie sind dazu gedacht, einige der Einschränkungen von `auto`-Popovers zu umgehen und Anwendungsfälle wie den in diesem Abschnitt erläuterten zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

### Erstellung der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ erstellt, wobei `auto`-Popovers verwendet werden.

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

### Erstellung der Tooltips mit `popover="hint"`

Die Untermenü-Popovers funktionieren so, wie sie sind, und öffnen sich, wenn die Symbolleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips bei Schaltflächenhovern oder -fokus an? Erstens erstellen wir die Tooltips in HTML, indem wir `hint`-Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Zum Steuern der Anzeige/Ausblendung müssen wir JavaScript verwenden. Zuerst greifen wir über zwei separate [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) auf die `hint`-Popovers und die Steuerschaltflächen zu:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion `addEventListeners()`, die vier Event-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einer gegebenen {{htmlelement("button")}} setzt, die ausgewählt wird, indem das `<button>` an einem bestimmten Indexwert der `btns` `NodeList` gegriffen wird. Die Funktionen wirken auf das `hint`-Popover am gleichen Indexwert der `tooltips` `NodeList`, sodass wir die Schaltflächen und die Tooltips synchron halten - das richtige Tooltip wird angezeigt oder ausgeblendet, wenn eine Schaltfläche interagiert wird.

Die Event-Listener [show](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event), und [hide](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur erreichbar sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns` `NodeList` zu iterieren und die `addEventListeners()`-Funktion für jede aufzurufen, sodass alle die gewünschten Event-Listener gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Stylen von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Auswählen von Popovers

Sie können alle Popovers mit einem einfachen Attributselektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attributselektor einschließen:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die angezeigt werden, indem Sie die {{cssxref(":popover-open")}}-Pseudoklasse verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrundes

Das {{cssxref("::backdrop")}}-Pseudoelement ist ein vollflächiges Element, das direkt hinter den sichtbar angezeigten Popover-Elementen in der {{Glossary("top_layer", "Top-Ebene")}} platziert wird und es ermöglicht, Effekte auf die Seiteninhalte hinter dem/den Popover(s) hinzuzufügen, falls gewünscht. Vielleicht möchten Sie zum Beispiel die Inhalte hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Popover-Hintergrundverwischungsbeispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie das gerendert wird.

### Positionierung von Popovers

Beim Betrachten der ersten paar Beispiele, die zu Beginn des Artikels verlinkt sind, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Ansichtsfensters erscheinen, ihren Inhalt umschließen und eine schwarze Umrandung haben. Dies ist das Standardstyling, das mittels der folgenden Regel im UA-Stylesheet erreicht wird:

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

Um benutzerdefinierte Größen anzuwenden und das Popover an einem anderen Ort zu positionieren, könnten Sie die oben genannten Stile mit so etwas überschreiben:

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

Sie können ein isoliertes Beispiel dafür in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Anker-Positionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invokator statt relativ zum Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil nutzen, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

Das Verknüpfen jeder Art von Popover mit seinem Invoker (siehe [Andere Möglichkeiten, eine Popover-Invoker-Beziehung einzurichten](#andere_möglichkeiten,_eine_popover-invoker-beziehung_einzurichten)) schafft eine implizite Ankerreferenz zwischen den beiden. Dies bewirkt, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass das Popover relativ zu ihm positioniert werden kann, indem [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwendet wird.

Da die Assoziation zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Assoziation mithilfe der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden. Sie müssen jedoch immer noch das Positionierungs-CSS festlegen.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt sind, und `anchor-center`-Werte, die auf Ausrichtungseigenschaften gesetzt sind:

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

Siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für mehr Details zum Assoziieren von Anker- und positionierten Elementen und zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, siehe unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Ankerassoziationen mithilfe der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften gemacht werden.

## Animieren von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie ausgeblendet sind, und `display: block;` wenn sie angezeigt werden, sowie aus der {{Glossary("top_layer", "Top-Ebene")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt werden. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das obige Verhalten zu aktivieren. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}}-Regel
  - : Bietet einen Satz von Ausgangswerten für Eigenschaften, die auf das Popover gesetzt werden und von denen aus übergegangen werden soll, wenn es zuerst angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft ihren Wert auf einem sichtbaren Element ändert; sie werden nicht bei der ersten Stilaktualisierung eines Elements ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während des gesamten Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des Popovers aus der Top-Ebene bis zum Abschluss des Übergangs zurückgestellt wird, was wiederum den Übergang sichtbar macht.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Stellen Sie `transition-behavior: allow-discrete` auf die Übergänge `display` und `overlay` (oder das {{cssxref("transition")}}-Shorthand) ein, um diskrete Übergänge auf diesen beiden Eigenschaften zu aktivieren, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, um zu sehen, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert wurde, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers festgelegt wurde:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir überblenden möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausblendet, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf den versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]`-[Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die Eigenschaften zu definieren, die animiert werden sollen, und die Dauer der Animation, während das Popover ein- oder ausgeblendet wird.

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

- Einen Anfangszustand für den `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `display` zur Liste der übergangenen Eigenschaften hinzugefügt, sodass das animierte Element während der Ein- und Ausblendanimationen des Popovers sichtbar (auf `display: block` gesetzt) bleibt. Ohne dies wäre die Ausblendanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergangenen Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus der Top-Ebene erst nach Abschluss der Animation erfolgt. Der Effekt hiervon ist möglicherweise nicht sichtbar bei grundlegenden Animationen wie dieser, aber in komplexeren Fällen kann das Auslassen dieser Eigenschaft dazu führen, dass das Element vor Abschluss des Übergangs aus dem Overlay entfernt wird.
- `allow-discrete` auf beiden Eigenschaften in den oben genannten Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinzugefügt haben, der hinter dem Popover erscheint, wenn es geöffnet wird, und eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wird das Popover bei jedem Auftreten des Überblendübergangs von seinen `@starting-style`-Styles zu seinen `[popover]:popover-open`-Styles überblendet. Wenn das Popover geschlossen wird, überblendet es von seinem `[popover]:popover-open`-Status zurück in den Standardstatus `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Ausblenden unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis dafür.

### Eine Popover-Keyframe-Animation

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an; Sie schließen Ihre "zu" und "von" `display`-Werte in Keyframes ein.
- Sie aktivieren diskrete Animationen nicht explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch nicht innerhalb von Keyframes setzen; die `display`-Animation behandelt die Animation des Popovers vom Sichtbaren zum Unsichtbaren.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert wurde, und ein {{htmlelement("button")}}-Element, das als Popovers-Anzeigensteuerung festgelegt wurde:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Ein- und Ausblendanimationen und eine Eintrittsanimation nur für das Hintergrundbild angeben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren - der Hintergrund wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts mehr zu animieren ist.

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

Der Code rendert wie folgt:

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}
