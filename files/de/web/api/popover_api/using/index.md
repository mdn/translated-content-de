---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Deklarative Popovers erstellen

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das den Popover-Inhalt enthalten soll. Eine `id` wird ebenfalls benötigt, um das Popover mit seinen Steuerungselementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Festlegen des `popover`-Attributs ohne Wert entspricht `popover="auto"`.

Das Hinzufügen dieses Attributs führt dazu, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover zu zeigen/auszublenden, müssen Sie mindestens einen Steuerungsknopf hinzufügen (auch bekannt als Popover-**Invoker**). Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} vom `type="button"`) als Popover-Steuerungsknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Button ein Umschaltknopf ist – wenn er wiederholt gedrückt wird, wird das Popover zwischen sichtbar und ausgeblendet umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden – dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Zum Beispiel, um separate Show- und Hide-Buttons zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Code-Snippet in unserem [Grundlegenden deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Schicht")}} platziert, sodass es über allen anderen Seiteninhalten steht.

## Auto-Zustand und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt ist, spricht man von einem **Auto-Zustand**. Die zwei wichtigen Verhaltensweisen, die beim Auto-Zustand zu beachten sind:

- Das Popover kann "light dismissed" werden — das bedeutet, dass Sie es verbergen können, indem Sie außerhalb davon klicken.
- Das Popover kann auch mittels browser-spezifischer Mechanismen geschlossen werden, beispielsweise durch Drücken der <kbd>Esc</kbd>-Taste.
- Normalerweise kann nur ein `auto` Popover gleichzeitig angezeigt werden – das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popover haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> `popover="auto"` Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument beendet. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits gezeigten Popover zu einem Fehler führt, da diese Verhaltensweisen auf einem bereits gezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie immer nur ein Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere lehrreiche UI-Nachrichten, die Sie anzeigen möchten, aber ohne dass das Display unübersichtlich wird, oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status alle vorherigen überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach dem Anzeigen "light dismissed" zu machen und sehen, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Zugänglichkeitsmerkmale von Popovers

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und Hilfstechnologie (AT)-Benutzern eine einfachere Interaktion mit dem Popover zu ermöglichen:

- Wenn das Popover angezeigt wird, wird die Tastaturfokus-Navigationsreihenfolge aktualisiert, sodass das Popover das nächste in der Reihenfolge ist: Zum Beispiel, wenn ein Knopf gedrückt wird, um ein Popover zu zeigen, werden alle Knöpfe innerhalb des Popovers als nächstes in der Tabulator-Reihenfolge fokussiert (durch Drücken der <kbd>Tab</kbd>-Taste). Umgekehrt wird beim Schließen des Popovers über die Tastatur (in der Regel über die <kbd>Esc</kbd>-Taste) der Fokus zurück auf den Invoker gesetzt.
- Um AT wie Bildschirmleser sinnvoll die Beziehung zwischen Invoker und Popover zu verdeutlichen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen erstellt.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise erstellt auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung einzurichten

Sie können eine Popover-Invoker-Beziehung auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwendung der `source`-Option der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)- oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methoden. Beachten Sie, dass in diesem Fall nur die Fokus-Navigationsänderungen vorgenommen werden, nicht jedoch die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es nicht garantiert werden kann, dass die Beziehung Sinn macht.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Picker, wenn es über die {{cssxref("appearance")}}-Eigenschaft `base-select`-Wert in die [anpassbare select-Element]-Funktionalität integriert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch das Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "light dismissed" werden, obwohl deklarative Show/Hide/Toggle-Buttons (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Anzeige von Popovers über JavaScript

Sie können Popovers auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch für die Feature-Erkennung nützlich. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, sodass Sie die Steuerungsknöpfe für ein Popover einrichten können, obwohl der Property-Wert eine Referenz auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Global-HTML-Attribut, sodass Sie die Aktion angeben können, die von einem Steuerungsknopf ausgeführt wird.

Indem Sie diese drei zusammenfügen, können Sie ein Popover und seinen Steuerungsknopf programmatisch einrichten:

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

Sie haben auch mehrere Methoden zum Steuern der Anzeige und Ausblendung:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Anzeigen eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Ausblenden eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zum Umschalten eines Popovers.

Zum Beispiel möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfe-Popover durch Klicken auf einen Knopf oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das Erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt machen.

Für das Zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert – eine zum Öffnen des Popovers und eine zum Schließen.

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse passt nur auf Popovers, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen oder ein bereits ausgeblendetes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover sowohl zu zeigen _als auch_ zu verbergen:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel für eine umschaltbare Hilfe-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Feature-Erkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, nicht mehrere Auto-Popovers gleichzeitig anzuzeigen – wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachfahren:

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

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel an. Sie werden feststellen, dass einige Ereignishandler verwendet wurden, um die Unter-Popovers angemessen während der Maus- und Tastaturzugriffe anzuzeigen und zu verbergen und auch beide Menüs zu verbergen, wenn eine Option aus einem der Menüs ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer Mehrseiten-Website, könnten einige oder alle diese nicht notwendig sein, aber sie wurden in diesem Demo aus veranschaulichenden Gründen enthalten.

## Verwendung des "Hint" Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hinweis-Popovers**, die durch Setzen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind. `hint` Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere `hint` Popovers. Sie können light dismissed werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Symbolleisten-Schaltflächen haben, die gedrückt werden können, um UI-Popovers zu zeigen, aber Sie möchten auch Tooltips anzeigen, wenn die Schaltflächen berührt werden, ohne die UI-Popovers zu schließen.

`hint` Popovers werden in der Regel als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und verborgen. Das Klicken einer Schaltfläche zum Öffnen eines `hint` Popovers würde ein geöffnetes `auto` Popover light-dismiss machen.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau wie oben beschrieben funktioniert. Das Demo enthält eine Schaltflächenleiste; wenn die Schaltflächen gedrückt werden, zeigen sie `auto` Popup-Untermenüs, innerhalb derer weitere Optionen ausgewählt werden können. Wenn jedoch überfahren oder fokussiert, zeigen die Schaltflächen auch Tooltips (`hint` Popovers), die dem Benutzer eine Vorstellung davon geben, was jede Schaltfläche macht, die ein aktuell angezeigtes Untermenü nicht verbergen.

In den folgenden Abschnitten gehen wir durch alle wichtigen Teile des Codes.

> [!NOTE]
> Sie _können_ `hint` Popovers zusammen mit `manual` Popovers verwenden, obwohl es dafür eigentlich keinen wirklichen Grund gibt. Sie sind dazu gedacht, einige der Einschränkungen von `auto` Popovers zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt detailliert beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützten Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ erstellt, indem `auto` Popovers verwendet werden.

Zuerst die Steuerungsknöpfe:

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

Die Untermenü-Popovers funktionieren gut, wie sie sind und öffnen sich, wenn die Symbolleisten-Schaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips bei Schaltflächenüberfahrt/–fokus? Zuerst erstellen wir die Tooltips in HTML, unter Verwendung von `hint` Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um die Anzeige/Ausblendung zu steuern, müssen wir JavaScript verwenden. Zuerst greifen wir auf die `hint` Popovers und die Steuerungsknöpfe in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zu:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Event-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einen gegebenen {{htmlelement("button")}} setzt, der gewählt wird, indem der `<button>` an einem bestimmten Indexwert der `btns` `NodeList` ergriffen wird. Die Funktionen wirken sich auf das `hint` Popover am gleichen Indexwert der `tooltips` `NodeList` aus, wodurch wir die Schaltflächen und Tooltips synchronisieren können – das richtige Tooltip wird gezeigt/versteckt, wenn ein Button interagiert wird.

Die Event-Listener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<button>`s in der `btns` `NodeList` zu iterieren und die `addEventListeners()`-Funktion für jede von ihnen aufzurufen, sodass alle die gewünschten Event-Listener gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Stilisierung von Popovers

Dieser Abschnitt behandelt einige relevante Auswahl- und Positionstechniken für CSS für Popovers.

### Auswahl von Popovers

Sier können alle Popovers mit einem einfachen Attributselektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attributselektor hinzufügen:

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

### Stil des Popover-Hintergrunds

Das {{cssxref("::backdrop")}} Pseudo-Element ist ein Vollbild-Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Schicht")}} platziert wird, um Effekte auf den Seiteninhalt hinter dem/den Popover(s) hinzufügen zu können, wenn gewünscht. Sie möchten zum Beispiel den Inhalt hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie unser [Popover-Blurring-Beispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)), um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Wenn Sie sich die ersten paar am Anfang des Artikels verlinkten Beispiele ansehen, werden Sie vielleicht bemerkt haben, dass die Popovers in der Mitte des Viewports erscheinen, ihren Inhalt umwickeln, und einen schwarzen Rahmen aufweisen. Dies ist das Standardstyling, erreicht durch die folgende Regel im UA-Stylesheet:

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

Um eine benutzerdefinierte Größenänderung vorzunehmen und das Popover woanders zu positionieren, könnten Sie die obigen Styles mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel davon in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine andere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt dem Viewport oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil nutzen, dass Popovers und ihre Invoker eine **_implizite Ankerreferenz_** haben.

[Das Zuordnen eines Popovers mit seinem Invoker](#andere_möglichkeiten,_eine_popover-invoker-beziehung_einzurichten) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Invoker das **_Ankerelement_** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Weil die Zuordnung zwischen dem Popover und dem Invoker implizit ist, braucht keine explizite Zuordnung mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften gemacht zu werden. Sie müssen jedoch immer noch die Positionierungs-CSS spezifizieren.

Zum Beispiel könnten Sie eine Kombination aus {{cssxref("anchor()")}}-Funktionwerten, die auf {{Glossary("inset_properties", "abgesetzte Eigenschaften")}} gesetzt sind, und `anchor-center` Werte, die auf Ausrichtungseigenschaften gesetzt sind, verwenden:

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

Sehen Sie [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details über die Zuordnung von Anker- und positionierten Elementen und das Positionieren von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Zuordnung verwendet, sehen Sie unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie den CSS-Code überprüfen, werden Sie sehen, dass keine expliziten Ankerzuordnungen mit den Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} gemacht werden.

## Animieren von Popovers

Popovers werden auf `display: none;` gesetzt, wenn sie verborgen sind und `display: block;` wenn sie angezeigt werden, sowie aus der {{Glossary("top_layer", "obersten Schicht")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/hinzugefügt. Damit Popovers animiert werden können, muss die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Speziell: Der Browser wechselt zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar ist. Beispielsweise:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Bietet eine Reihe von Anfangswerten für die Eigenschaften, die auf dem Popover gesetzt sind und die Sie beim ersten Anzeigen übergehen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei der ersten Stiländerung eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergangseigenschaften hinzu, sodass das Popover während der gesamten Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und somit die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Schließen Sie `overlay` in die Übergangseigenschaften ein, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Schicht erst nach Abschluss des Übergangs erfolgt, sodass der Übergang wieder sichtbar wird.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge auf diese beiden nicht standardmäßig animierbaren Eigenschaften zu ermöglichen.

Lassen Sie uns ein Beispiel betrachten, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-HTML-Attribut als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover während des Ein- und Ausblendens horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf dem ausgeblendeten Zustand des Popovers (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation festzulegen, während das Popover angezeigt oder ausgeblendet wird.

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

Wie zuvor besprochen, haben wir auch:

- Einen Anfangszustand für das `transition`-Element im `@starting-style`-Block gesetzt.
- `display` zur Liste der übergangenen Eigenschaften hinzugefügt, damit das animierte Element (auf `display: block` gesetzt) während der Ein- und Ausstiegsanimationen des Popovers sichtbar bleibt. Ohne dies wäre die Ausstiegsanimation nicht sichtbar; in der Praxis würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergangenen Eigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Schicht erst nach Abschluss der Animation erfolgt. Die Wirkung dessen ist in einfacheren Animationen wie dieser möglicherweise nicht sichtbar, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vor Abschluss des Übergangs aus dem Overlay entfernt wird.
- `allow-discrete` auf beide Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf das [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem Popover erscheint, wenn es geöffnet wird, mit einer netten Verdunkelungsanimation gemacht haben.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` nach `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal vom `@starting-style`-Stil in den `[popover]:popover-open`-Stil, wenn der Einstransition auftritt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand in den Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass die Stilübergänge beim Ein- und Ausstieg in solchen Fällen unterschiedlich sind. Sehen Sie sich unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel an, um einen Beweis dafür zu sehen.

### Eine Popover-Keyframe-Animation

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie stellen kein `@starting-style` bereit; Sie nehmen Ihre "zu" und "von" `display`-Werte in Keyframes auf.
- Sie aktivieren diskrete Animationen nicht explizit; es gibt kein Äquivalent zu `allow-discrete` in Keyframes.
- Sie müssen `overlay` auch nicht in Keyframes setzen; die `display`-Animation übernimmt die Animation des Popovers von sichtbar zu verborgen.

Lassen Sie uns ein Beispiel ansehen.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Ein- und Ausstiegsanimationen und eine Einstransition nur für das Overlay spezifizieren. Beachten Sie, dass es nicht möglich war, das Overlay-Fade-Out zu animieren — das Overlay wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts zum Animieren vorhanden ist.

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
