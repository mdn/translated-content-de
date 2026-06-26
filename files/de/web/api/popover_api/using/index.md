---
title: Verwenden der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 7ea78dce9d6321ccde40f32ca946c254b7e424f0
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ über HTML-Attribute oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Erstellung deklarativer Popover

In seiner einfachsten Form wird ein Popover durch Hinzufügen des [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs zu dem Element erstellt, das Sie zur Aufnahme Ihrer Popover-Inhalte verwenden möchten. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungselementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Wenn das `popover`-Attribut ohne Wert eingestellt wird, entspricht dies dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet wird, indem darauf {{cssxref("display", "display: none")}} angewendet wird. Um das Popover anzuzeigen/verbergen, müssen Sie mindestens einen Steuerschaltfläche (auch als Popover **Invoker** bekannt) hinzufügen. Sie können eine {{htmlelement("button")}} (oder {{htmlelement("input")}} von `type="button"`) als Popover-Steuerschaltfläche festlegen, indem Sie ihr ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut geben, dessen Wert die ID des Popovers sein sollte, das gesteuert werden soll:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass die Schaltfläche eine Umschalttaste ist – durch wiederholtes Drücken wird das Popover zwischen angezeigtem und verborgenem Zustand umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) Attribut verwenden, das einen Wert von `"hide"`, `"show"` oder `"toggle"` annehmen kann. Beispielweise, um separate Anzeigen- und Ausblendeschaltflächen zu erstellen, könnten Sie dies wie folgt tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Codebeispiel in unserem [Beispiel für ein grundlegendes deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einer Steuerschaltfläche ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "obere Ebene")}} gestellt, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, aber mit einem allgemeineren Design, das über Popover-Befehle hinaus andere Funktionalitäten einschließlich benutzerdefinierter Befehle bieten soll.

Das vorherige Codebeispiel könnte wie folgt umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt eingestellt ist, heißt es, dass es einen **Auto-Zustand** hat. Die wichtigen Verhaltensweisen, die beim Auto-Zustand zu beachten sind, sind:

- Das Popover kann "leicht verworfen" werden — das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken.
- Das Popover kann auch über browser-spezifische Mechanismen geschlossen werden, wie das Drücken der <kbd>Esc</kbd>-Taste.
- Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, während eines bereits angezeigt wird, blendet das erste aus. Die Ausnahme zu dieser Regel ist, wenn Sie verschachtelte Auto-Popover haben. Siehe den Abschnitt [Verschachtelte Popover](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> Popover mit `popover="auto"` werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument verworfen. Beachten Sie jedoch, dass diese Methoden auf einem bereits angezeigten Popover zu einem Fehler führen, da diese Verhaltensweisen auf einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf ein Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie jeweils nur ein einzelnes Popover zeigen möchten. Vielleicht haben Sie mehrere Lern-UI-Nachrichten, die Sie anzeigen möchten, aber nicht möchten, dass der Anzeigebereich überladen und verwirrend wird. Oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status einen vorherigen überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere Auto-Popover](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popover leicht zu verwerfen, nachdem sie angezeigt werden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Barrierefreiheitsfunktionen

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und Hilfstechnologie (AT)-Nutzern das Interagieren mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Tastaturfokus-Navigationsreihenfolge aktualisiert, sodass das Popover das nächste in der Reihenfolge ist: Zum Beispiel, wenn eine Schaltfläche gedrückt wird, um ein Popover anzuzeigen, sind alle Schaltflächen im Popover die nächsten in der Tabulatorreihenfolge (werden beim Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus zurück auf den Invoker verschoben.
- Um AT wie Bildschirmlesegeräten das Verständnis der Beziehung zwischen dem Invoker und dem Popover zu ermöglichen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen ihnen eingerichtet.

Durch das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise wird auch eine implizite Ankerreferenz zwischen den beiden erstellt – siehe [Popover Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Weitere Möglichkeiten zum Einrichten einer Popover-Invoker-Beziehung

Sie können auch auf andere Weise, zusätzlich zum `popovertarget`-Attribut, eine Popover-Invoker-Beziehung einrichten:

- Durch Verwenden der `source`-Option der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methoden. Beachten Sie, dass in diesem Fall nur die Änderungen der Fokussierungsreihenfolge vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinen Dropdown-Picker, wenn es sich in die [anpassbare Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Funktionalität über die {{cssxref("appearance")}} Eigenschaft `base-select`-Wert einkoppelt. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht verworfen" werden, obwohl deklarative Anzeigen-/Ausblende-/Umschalttasten (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popover können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popover](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle` und `toggle` Ereignisse

Sie können auf das Anzeigen oder Verbergen eines Popovers reagieren, indem Sie die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse verwenden:

- `beforetoggle` wird kurz vor dem Anzeigen oder Verbergen eines Popovers ausgelöst. Dies kann beispielsweise verwendet werden, um das Anzeigen oder Verbergen des Popovers zu verhindern (durch Verwenden von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach seiner Verwendung zu bereinigen.
- `toggle` wird direkt nach dem Anzeigen oder Verbergen eines Popovers ausgelöst. Dies wird im Allgemeinen verwendet, um anderen Code als Reaktion auf eine Zustandsänderung des Popovers auszuführen.

Beide Ereignisse verfügen über ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Ereignisobjekt. Dieses Ereignis hat zusätzlich zu den vom standardmäßigen [`Event`](/de/docs/Web/API/Event) geerbten Funktionen folgende Merkmale:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) zeigen an, aus welchem Zustand das Popover gerade übergegangen ist und in welchen Zustand es übergeht, sodass Sie gezielt auf das Öffnen oder Schließen eines Popovers reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält einen Verweis auf das HTML-Popover-Steuerelement, das den Umschaltvorgang initiiert hat, sodass Sie unterschiedlichen Code als Reaktion auf das Umschaltereignis ausführen können, je nachdem, welches Steuerelement es initiiert hat.

Typische Verwendung könnte ähnlich wie folgt aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Siehe die vorherigen Referenzlinks für weitere Informationen und Beispiele.

## Anzeigen von Popovern über JavaScript

Sie können Popover auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover) Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut abzurufen oder festzulegen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich für die Funktionsüberprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut, das es Ihnen ermöglicht, die Steuerschaltfläche(n) für ein Popover einzurichten, obwohl der Eigenschaftswert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), das es Ihnen ermöglicht, die von einer Steuerschaltfläche ausgeführte Aktion anzugeben.

Indem Sie diese drei miteinander kombinieren, können Sie ein Popover und seine Steuerschaltfläche programmatisch einrichten, wie folgt:

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

Sie haben auch mehrere Methoden zum Steuern des Anzeigens und Ausblendens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Anzeigen eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Ausblenden eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zum Umschalten eines Popovers.

Beispielsweise möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfe-Popover per Klick auf eine Schaltfläche oder durch Drücken einer bestimmten Taste auf der Tastatur ein- und auszublenden. Die erste Möglichkeit könnte deklarativ umgesetzt werden, oder Sie könnten es mithilfe von JavaScript tun, wie oben gezeigt.

Für die zweite Möglichkeit könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine, um das Popover zu öffnen, und eine, um es wieder zu schließen:

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

In diesem Beispiel wird [`Element.matches()`](/de/docs/Web/API/Element/matches) verwendet, um programmgesteuert zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}} Pseudoklasse entspricht nur Popovern, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover zu öffnen oder ein bereits ausgeblendetes Popover zu schließen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover zu zeigen _und_ auszublenden, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Siehe unser [Beispiel für umschaltbare Hilfe-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)), um die JavaScript-Eigenschaften des Popovers, die Funktionsüberprüfung und die Verwendung der `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, keine mehreren Auto-Popovers gleichzeitig anzuzeigen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über Invoking/Steuerelemente:

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

Siehe unser [Beispiel für verschachtelte Popover-Menüs](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel. Sie werden feststellen, dass eine ganze Reihe von Ereignishandlern verwendet wurden, um das Subpopover während des Zugriffs über die Maus und die Tastatur angemessen anzuzeigen und auszublenden, und auch beide Menüs auszublenden, wenn eine Option ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte behandeln, entweder in einer SPA oder einer Multi-Page-Website, können einige oder alle davon nicht erforderlich sein, aber sie wurden in diesem Demo zu Veranschaulichungszwecken aufgenommen.

## Verwendung des "Hint" Popover-Zustands

Es gibt einen dritten Typ von Popovers, den Sie erstellen können — **Hint-Popovers**, die durch Einstellen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind. `hint`-Popovers schließen `auto`-Popovers beim Anzeigen nicht, aber sie schließen andere `hint`-Popovers. Sie können leicht verworfen werden und reagieren auf Schließanfragen.

Dies ist nützlich in Situationen, in denen Sie beispielsweise Werkzeugleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber Sie auch Tooltips anzeigen möchten, wenn die Schaltflächen überfahren werden, ohne die UI-Popovers zu schließen.

`hint`-Popovers werden tendenziell als Reaktion auf Nicht-Klick-JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet. Das Klicken auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein geöffnetes `auto`-Popover leicht verworfen.

Siehe unser [Demo zu "hint" Popovers](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel, das genau wie oben beschrieben verhält. Das Demo verfügt über eine Schaltflächenleiste; wenn sie gedrückt wird, zeigen die Schaltflächen `auto`-Popup-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn sie jedoch überfahren oder fokussiert werden, zeigen die Schaltflächen auch Tooltips (`hint` Popovers), um dem Benutzer eine Vorstellung davon zu geben, was jede Schaltfläche tut, ohne dass ein derzeit angezeigtes Untermenü ausgeblendet wird.

In den folgenden Abschnitten gehen wir auf alle wichtigen Teile des Codes ein.

> [!NOTE]
> Sie _können_ "Hint-Popovers" zusammen mit "manuellen" Popovers verwenden, obwohl es wirklich keinen großen Grund dafür gibt. Sie sind dazu gedacht, einige der Einschränkungen von `auto`-Popovers zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern zu `popover="manual"` zurückfällt.

> [!NOTE]
> Es gibt eine verwandte Funktion — **Interest Invokers** — die verwendet werden kann, um Hover-/Fokus-Popover-Funktionalität bequem und konsistent zu erstellen, ohne JavaScript zu erfordern. Schauen Sie sich [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) an, um mehr zu erfahren.

### Erstellung der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ mit `auto`-Popovers erstellt.

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

Jetzt die Popovers selbst:

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

Die Untermenü-Popovers funktionieren gut wie sie sind, öffnend, wenn die Werkzeugleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips bei Schaltflächen-Hover/Fokus? Zuerst erstellen wir die Tooltips in HTML, indem wir `hint`-Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im Demo [Source Code](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) sind die Tooltips innerhalb der Popover-Steuerschaltflächen verschachtelt. Dies liegt daran, dass es eine bessere Fallback in Browsern bietet, die das CSS-Ankerpositionieren nicht unterstützen — die `hint`-Popovers erscheinen neben ihren zugehörigen Steuerelementen anstelle von völlig woanders.

Um das Anzeigen/Verbergen zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen auf die `hint`-Popovers und die Steuerschaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mithilfe von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion `addEventListeners()`, die vier Ereignis-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem gegebenen {{htmlelement("button")}} setzt, ausgewählt durch Abrufen des `<button>` an einem bestimmten Indexwert der `btns` `NodeList`. Die Funktionen wirken sich auf das `hint` Popover am gleichen Indexwert der `tooltips` `NodeList` aus, sodass wir die Schaltflächen und die Tooltips synchronisieren können — das richtige Tooltip anzeigen/verbergen, wenn eine Schaltfläche interagiert wird.

Die Ereignis-Listener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife, um durch die `<button>`-Elemente in der `btns` `NodeList` zu iterieren und unsere `addEventListeners()` Funktion für jedes aufrufen, sodass alle die gewünschten Ereignis-Listener gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Popovers gestalten

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Popovers auswählen

Sie können alle Popovers mit einem einfachen Attributselektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie eine bestimmte Popover-Art auswählen, indem Sie einen Wert im Attributselektor angeben:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die mit der {{cssxref(":popover-open")}} Pseudoklasse angezeigt werden:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrunds

Das {{cssxref("::backdrop")}} Pseudoelement ist ein Vollbildelement, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "oberen Ebene")}} platziert ist, sodass dem Seiteninhalt hinter dem/den Popover(s) bei Bedarf Effekte hinzugefügt werden können. Sie könnten zum Beispiel den Inhalt hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Siehe unser [Beispiel für Popover-Blur-Hintergrund](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) für eine Idee, wie dies gerendert wird.

### Positionierung von Popovers

Beim Betrachten der ersten beiden Beispiele, die am Anfang des Artikels verlinkt sind, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Ansichtsbereichs erscheinen, ihren Inhalt umschließen und eine schwarze Grenze haben. Dies ist das Standardstil, das durch die folgende Regel im UA-Stylesheet erreicht wird:

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

Um eine benutzerdefinierte Größe anzuwenden und das Popover woanders zu positionieren, könnten Sie die oben genannten Stile mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel dafür in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker anstatt dem Ansichtsbereich oder einem positionierten Vorfahr positionieren möchten, können Sie den Vorteil nutzen, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

[Das Verknüpfen jeder Art von Popover mit seinem Invoker](#weitere_möglichkeiten_zum_einrichten_einer_popover-invoker-beziehung) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu mithilfe von [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positionieren können.

Da die Zuordnung zwischen dem Popover und dem Invoker implizit erfolgt, muss keine explizite Zuordnung mithilfe der {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften gemacht werden. Sie müssen jedoch immer noch die CSS-Positionierung angeben.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}} Funktionswerten auf {{Glossary("inset_properties", "Einsetzen von Eigenschaften")}} und `anchor-center` Werten auf Ausrichtungseigenschaften verwenden:

```css
.my-popover {
  margin: 0;
  inset: auto;
  bottom: calc(anchor(top) + 20px);
  justify-self: anchor-center;
}
```

Oder Sie könnten eine {{cssxref("position-area")}} Eigenschaft verwenden:

```css
.my-popover {
  margin: 0;
  inset: auto;
  position-area: top;
}
```

Beim Verwenden von {{cssxref("position-area")}} oder {{cssxref("anchor()")}} zur Positionierung von Popovers sollten Sie beachten, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der zu erreichenden Position in Konflikt geraten könnten. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen, wie in den obigen Beispielen gezeigt. Die CSS-Arbeitsgruppe prüft [Möglichkeiten, diesen Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

Sehen Sie [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Verknüpfung von Anker- und positionierten Elementen und zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Zuordnung verwendet, siehe unser [popover "hint" Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie den CSS-Code überprüfen, werden Sie sehen, dass keine expliziten Ankerzuordnungen mithilfe der {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften gemacht werden.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass das Popover an seinen Invoker geankert wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [das Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Animieren von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie ausgeblendet sind, und `display: block;`, wenn sie angezeigt werden, und werden aus der/der {{Glossary("top_layer", "oberen Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/zugefügt. Daher muss die {{cssxref("display")}} Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen `display`-Wert wechseln, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Ein Popover übergehen

Beim Animieren von Popovers mit CSS-Übergängen sind folgende Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} @-Regel
  - : Bietet eine Reihe von Startwerten für auf das Popover gesetzte Eigenschaften, von denen Sie beim ersten Anzeigen übergehen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn ein Wert einer Eigenschaft auf einem sichtbaren Element von einem Wert zu einem anderen wechselt; sie werden nicht bei der ersten Stilaktualisierung eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergänge hinzu, damit das Popover während der Übergangsdauer als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und der andere Übergang sichtbar ist.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des Popovers von der oberen Ebene erst nach Abschluss des Übergangs erfolgt, damit der Übergang wieder sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf das {{cssxref("transition")}}-Kurzzeichen), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Attribut als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung für die Anzeige des Popovers bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergeben möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}. Wir möchten, dass das Popover beim Ein- und Ausblenden verblasst und sich dabei horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Startzustand für diese Eigenschaften auf den ausgeblendeten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}} Pseudoklasse). Wir verwenden auch die {{cssxref("transition")}}-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation beim Anzeigen oder Ausblenden des Popovers zu definieren.

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
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
  background-color: transparent;
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
    background-color: transparent;
  }
}
```

Wie bereits erwähnt, haben wir auch:

- Einen Startzustand für die `transition` innerhalb des `@starting-style` Blocks gesetzt.
- `display` zur Liste der übergangenen Eigenschaften hinzugefügt, damit das animierte Element während des Ein- und Ausblendeanimations sichtbar (auf `display: block` gesetzt) bleibt. Ohne dies wäre die Ausblendeanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergangenen Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements von der oberen Ebene erst nach Abschluss der Animation erfolgt. Der Effekt davon ist möglicherweise nicht für grundlegende Animationen erkennbar, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beiden Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang beim Erscheinen des {{cssxref("::backdrop")}} hinter dem Popover hinzugefügt haben, der eine nette Verdunklungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{EmbedLiveSample("Transitioning a popover", "100%", "200")}}

> [!NOTE]
> Da Popovers jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, erfolgt der Übergang des Popovers jedes Mal vom `@starting-style`-Stil zum `[popover]:popover-open` Stil, wenn der Eintrittsübergang stattfindet. Wenn das Popover geschlossen wird, erfolgt der Übergang vom `[popover]:popover-open` Zustand zum Standard `[popover]` Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration von wann Startstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Nachweis darüber.

### Eine Popover-Schlüsselbildanimation

Beim Animieren eines Popovers mit CSS-Schlüsselbildanimationen gibt es einige Unterschiede zu beachten:

- Sie geben kein `@starting-style`; Sie fügen Ihre "to" und "from" `display`-Werte in Schlüsselbilder ein.
- Sie aktivieren diskrete Animationen nicht explizit; es gibt nichts Vergleichbares zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` innerhalb von Schlüsselbildern nicht setzen; die `display`-Animation verarbeitet die Animation des Popovers von sichtbar zu ausgeblendet.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung für die Anzeige des Popovers bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Eintritts- und Austrittsanimationen sowie eine Eintrittsanimation für das Hintergrundbild spezifizieren. Beachten Sie, dass es nicht möglich war, das Verblassen des Hintergrundbilds auszublenden — das Hintergrundbild wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts mehr animiert werden kann.

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
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
    background-color: transparent;
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}
```

#### Ergebnis

Der Code wird wie folgt gerendert:

{{EmbedLiveSample("A popover keyframe animation", "100%", "200")}}

## Siehe auch

- Sammlung von [Popover-API-Beispielen](https://mdn.github.io/dom-examples/popover-api/)
