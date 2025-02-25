---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderem Seiteninhalt. Popover-Inhalte können entweder deklarativ über HTML-Attribute oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung all ihrer Funktionen.

## Deklarative Popovers erstellen

In ihrer einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das den Popover-Inhalt enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Wenn das `popover`-Attribut ohne Wert gesetzt wird, entspricht dies dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs führt dazu, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover ein- oder auszublenden, müssen Sie mindestens einen Steuerungsbutton (auch als Popover-**Invoker** bekannt) hinzufügen. Sie können ein {{htmlelement("button")}} (oder ein {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerungsbutton festlegen, indem Sie ihm das [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut zuweisen, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Button ein Umschalter ist — mehrmaliges Drücken schaltet das Popover zwischen Anzeigen und Ausblenden um.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-Attribut verwenden — dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Zum Beispiel, um separate Anzeigen- und Ausblendebuttons zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Code-Schnipsel in unserem [Basic declarative popover example](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) dargestellt wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerungsbutton ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Schicht")}} verschoben, sodass es über allen anderen Seiteninhalten sitzt.

## Auto-Zustand und "leichte Ablehnung"

Wenn ein Popover-Element wie oben gezeigt mit `popover` oder `popover="auto"` gesetzt ist, wird gesagt, dass es sich im **Auto-Zustand** befindet. Die zwei wichtigen Verhaltensweisen, die im Auto-Zustand zu beachten sind:

- Das Popover kann "leicht abgewiesen" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb davon ausblenden können.
- Das Popover kann auch geschlossen werden, indem browserspezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste verwendet werden.
- Normalerweise kann nur ein `auto` Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel besteht, wenn Sie geschachtelte Auto-Popovers haben. Siehe den Abschnitt [Nested popovers](#verschachtelte_popovers) für weitere Details.

> **Hinweis:** Auch Popovers mit `popover="auto"` werden durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) bei anderen Elementen im Dokument abgelehnt. Beachten Sie jedoch, dass Aufrufe dieser Methoden bei einem angezeigten Popover fehlschlagen, da diese Verhaltensweisen in einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch bei einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein einzelnes Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere UI-Teaching-Nachrichten, die Sie anzeigen möchten, aber Sie möchten nicht, dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status einen vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Multiple auto popovers example](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht abzulehnen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Barrierefreiheitsfunktionen von Popovers

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Benutzern von Tastaturen und unterstützenden Technologien (AT) die Interaktion mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Navigationsreihenfolge der Tastaturfokussierung so aktualisiert, dass das Popover als nächstes in der Sequenz folgt: Wenn beispielsweise ein Button gedrückt wird, um ein Popover anzuzeigen, sind alle Buttons innerhalb des Popovers als nächstes in der Tabulatorreihenfolge (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus zurück auf den Invoker verschoben.
- Um ATs wie Bildschirmlesegeräten zu ermöglichen, die Beziehung zwischen Invoker und Popover zu verstehen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung in dieser Weise schafft auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

> [!NOTE]
> Sie können auch eine Popover-Invoker-Beziehung mit der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) einrichten, beachten Sie jedoch, dass in diesem Fall nur die Änderungen der Fokussierungsreihenfolge gemacht werden und nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option beliebig auf jedes Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es nicht garantiert werden kann, dass die Beziehung sinnvoll wäre.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht abgewiesen" werden, obwohl deklarative Anzeigen/Ausblenden/Umschaltbuttons (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Multiple manual popovers example](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut abzurufen oder festzulegen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch nützlich zur Feature-Erkennung. Zum Beispiel:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut und ermöglichen es Ihnen, die Steuerungsschaltfläche(n) für ein Popover festzulegen, obwohl der Eigenschaftswert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-globalen HTML-Attribut, das Ihnen erlaubt, die von einer Steuerungsschaltfläche ausgeführte Aktion zu spezifizieren.

Indem Sie diese drei kombinieren, können Sie ein Popover und seine Steuerungsschaltfläche programmatisch einrichten, so:

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

Sie haben auch verschiedene Methoden, um das Anzeigen und Ausblenden zu steuern:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Anzeigen eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Ausblenden eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zum Umschalten eines Popovers.

Zum Beispiel könnten Sie die Möglichkeit bieten, ein Hilfspopup per Klick auf einen Button oder durch Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden, oder Sie könnten es wie oben gezeigt mit JavaScript tun.

Für das zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert - eine, um das Popover zu öffnen, und eine andere, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu prüfen, ob ein Popover aktuell angezeigt wird. Die {{cssxref(":popover-open")}} Pseudoklasse stimmt nur mit Popovers überein, die derzeit angezeigt werden. Dies ist wichtig, um Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits ausgeblendetes Popover auszublenden.

Alternativ könnten Sie eine einzige Taste programmieren, um das Popover sowohl anzuzeigen als auch auszublenden, so:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Toggle help UI example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-Javascript-Eigenschaften, die Feature-Erkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, keine mehrfachen Auto-Popovers gleichzeitig anzuzeigen - wenn sie innerhalb voneinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über auslösende/steuernde Elemente:

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

Sehen Sie sich unser [Nested popover menu example](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an, um ein Beispiel zu sehen. Sie werden bemerken, dass eine ganze Reihe von Ereignishandlern verwendet wurde, um das Unter-Popover bei Maus- und Tastaturzugriff angemessen anzuzeigen und auszublenden, und auch, um beide Menüs auszublenden, wenn eine Option aus einem von beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte handhaben, entweder in einem SPA oder einer mehrseitigen Website, sind möglicherweise nicht alle davon notwendig, aber sie wurden in diesem Demo-Beispiel zur Veranschaulichung aufgenommen.

## Verwendung des "Hint"-Popover-Zustands

Es gibt einen dritten Popover-Typ, den Sie erstellen können - **Hint-Popovers**, die durch Setzen von `popover="hint"` auf Ihrem Popover-Element angegeben werden. `hint`-Popovers schließen nicht `auto`-Popovers, wenn sie angezeigt werden, schließen aber andere `hint`-Popovers. Sie können leicht abgewiesen werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Werkzeugleisten-Buttons haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber Sie möchten auch Tooltips anzeigen, wenn die Buttons überfahren werden, ohne die UI-Popovers zu schließen.

`hint`-Popovers neigen dazu, in Reaktion auf nicht-klickbare Javascript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet zu werden. Das Klicken auf einen Button, um ein `hint`-Popover zu öffnen, würde ein geöffnetes `auto`-Popover leicht abweisen.

Sehen Sie sich unser [popover hint demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau wie oben beschrieben funktioniert. Das Demo bietet eine Button-Leiste; wenn gedrückt, zeigen die Buttons `auto` Popup-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn sie jedoch überfahren oder fokussiert werden, zeigen die Buttons auch Tooltips (`hint`-Popovers), um dem Benutzer eine Vorstellung davon zu geben, was jeder Button tut, was ein aktuell anzeigendes Untermenü nicht ausblendet.

In den folgenden Abschnitten gehen wir auf alle wichtigen Teile des Codes ein.

> [!NOTE]
> Sie _können_ `hint`-Popovers mit `manual`-Popovers verwenden, obwohl es dafür eigentlich keinen wirklichen Grund gibt. Sie sind dazu gedacht, einige der Einschränkungen von `auto`-Popovers zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützten Browsern auf `popover="manual"` zurückfällt.

### Die Untermenüs mit `popover="auto"` erstellen

Die Popup-Untermenüs werden deklarativ mit `auto`-Popovers erstellt.

Zuerst die Steuerungsschalter:

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

### Die Tooltips mit `popover="hint"` erstellen

Die Untermenü-Popovers funktionieren gut so, wie sie sind, und öffnen sich, wenn die Werkzeugleisten-Buttons gedrückt werden, aber wie zeigen wir auch Tooltips bei Schwebefokus an? Zuerst erstellen wir die Tooltips in HTML unter Verwendung von `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um die Anzeige/Ausblendung zu steuern, müssen wir JavaScript verwenden. Zuerst greifen wir auf die `hint`-Popovers und die Steuerungsschalter in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s zu, mithilfe von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion `addEventListeners()`, die vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem bestimmten {{htmlelement("button")}} setzt, das ausgewählt wird, indem das `<button>` an einem bestimmten Indexwert der `btns` `NodeList` ausgewählt wird. Die Funktionen wirken sich auf das `hint`-Popover am selben Indexwert der `tooltips` `NodeList` aus, was es uns ermöglicht, die Buttons und die Tooltips synchron zu halten — das richtige Tooltip zu zeigen/auszublenden, wenn ein Button bedient wird.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event), und [blenden](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event) aus, was bedeutet, dass die Tooltips sowohl per Maus als auch per Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns` `NodeList` zu iterieren und die Funktion `addEventListeners()` für jedes einzelne von ihnen zu rufen, sodass alle die gewünschten Ereignislistener setzen.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Popovers stylen

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Popovers auswählen

Sie können alle Popovers mit einem einfachen Attributselektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attributselektor angeben:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die angezeigt werden, indem Sie die {{cssxref(":popover-open")}} Pseudoklasse verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Den Popover-Hintergrund stylen

Das {{cssxref("::backdrop")}} Pseudoelement ist ein Vollbild-Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Schicht")}} platziert wird, sodass Effekte zum Inhalt der Seite hinter dem Popover(s) hinzugefügt werden können, falls gewünscht. Sie möchten beispielsweise den Inhalt hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Popover blur background example](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies rendert.

### Popovers positionieren

Beim Betrachten der ersten Beispiele, die zu Beginn des Artikels verlinkt sind, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Viewports erscheinen, ihren Inhalt umschließen und einen schwarzen Rand haben. Dies ist die standardmäßige Stilgebung, erreicht durch die folgende Regel im UA-Stylesheet:

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

Um eine benutzerdefinierte Größe anzuwenden und das Popover an anderer Stelle zu positionieren, könnten Sie die obigen Stile mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel dafür in unserem [Popover positioning example](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API anbietet. Wenn Sie ein Popover relativ zu seinem Invoker statt dem Viewport oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil der Tatsache nutzen, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

Das Verknüpfen eines beliebigen Popover-Typs mit seinem Invoker durch das [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut oder die `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) schafft eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu über [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Assoziation zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Verbindung mithilfe der {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften hergestellt werden. Sie müssen jedoch immer noch das Positionierungs-CSS angeben.

Beispielsweise könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten auf {{Glossary("inset_properties", "Einsetzeigenschaften")}} und `anchor-center`-Werte auf Ausrichtungeigenschaften setzen:

```css
.my-popover {
  bottom: calc(anchor(top) + 20px);
  justify-self: anchor-center;
}
```

Oder Sie könnten eine {{cssxref("position-area")}} Eigenschaft verwenden:

```css
.my-popover {
  position-area: top;
}
```

Siehe [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Verknüpfung von Anker- und positionierten Elementen sowie zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, siehe unser [popover hint demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Ankerassozierungen mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften gemacht werden.

## Popovers animieren

Popovers sind auf `display: none;` gesetzt, wenn sie ausgeblendet sind, und `display: block;`, wenn sie angezeigt werden, und werden gleichzeitig aus der {{Glossary("top_layer", "obersten Schicht")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützte Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. So zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) ändert sich der Wert bei `0 %` der Animationsdauer auf `block`, damit er die gesamte Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100 %` der Animationsdauer auf `none`, damit er die gesamte Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben genannte Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben genannte Verhalten standardmäßig verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

### Einen Popover-Übergang implementieren

Beim Animieren von Popovers mit CSS-Übergängen sind folgende Merkmale erforderlich:

- {{CSSxRef("@starting-style")}} at-rule
  - : Stellt eine Reihe von Anfangswerten für Eigenschaften zur Verfügung, die auf das Popover gesetzt sind, von denen Sie ausgehen möchten, wenn es zum ersten Mal gezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen ändert bei einem sichtbaren Element; sie werden nicht beim ersten Stilupdate eines Elements oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während der Übergangsdauer als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Schließen Sie `overlay` in die Übergangsliste ein, um sicherzustellen, dass die Entfernung des Popovers von der obersten Schicht bis zum Abschluss des Übergangs aufgeschoben wird, erneut um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf den {{cssxref("transition")}}-Kurzschreibweise), um diskrete Übergänge für diese beiden Eigenschaften zu aktivieren, die standardmäßig nicht animierbar sind.

Lassen Sie uns ein Beispiel betrachten, damit Sie sehen können, wie dies aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-HTML-Attribut als Popover angegeben wird, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers vorgesehen ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausblendet, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf den versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Animationsdauer festzulegen, während das Popover ein- oder ausgeblendet wird.

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

Wie bereits besprochen, haben wir auch:

- Einen Anfangszustand für die `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `Display` zur Liste der übergehenden Eigenschaften hinzugefügt, damit das animierte Element während der Ein- und Ausfahranimation des Popovers sichtbar (auf `display: block` gesetzt) bleibt. Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden.
- `Overlay` zur Liste der übergehenden Eigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Schicht bis zum Abschluss der Animation verzögert wird. Der Effekt davon kann bei einfachen Animationen wie dieser nicht bemerkbar sein, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vor dem Abschluss des Übergangs aus dem Overlay entfernt wird.
- `allow-discrete` auf beide Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu aktivieren.

Sie werden feststellen, dass wir auch einen Übergang für das [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem Popover erscheint, wenn es sich öffnet, aufgenommen haben, die eine schöne Verdunklungsanimation bietet.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` in `display: block` wechseln, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass der Stilübergang bei Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis hierfür.

### Eine Popover-Schlüsselbildanimation

Bei der Animation eines Popovers mit CSS-Schlüsselbildanimationen gibt es einige Unterschiede zu beachten:

- Sie stellen keinen `@starting-style` bereit; Sie schließen Ihre "zu" und "von" `display` Werte in Schlüsselbilder ein.
- Sie aktivieren diskrete Animationen nicht explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` auch nicht innerhalb von Schlüsselbildern einstellen; die `display` Animation behandelt die Animation des Popovers von anzeigen zu ausblenden.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Ein- und Austrittsanimationen angeben, und eine Eintrittsanimation nur für den Hintergrund. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts zu animieren ist.

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
