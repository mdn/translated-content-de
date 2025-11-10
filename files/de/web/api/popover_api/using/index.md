---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mithilfe von HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Erstellen deklarativer Popovers

In seiner einfachsten Form wird ein Popover durch Hinzufügen des [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs zu dem Element erstellt, das Ihre Popover-Inhalte enthalten soll. Eine `id` wird ebenfalls benötigt, um das Popover mit seinen Steuerelementen zu verbinden.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert ist gleichbedeutend mit `popover="auto"`.

Wenn Sie dieses Attribut hinzufügen, wird das Element beim Laden der Seite ausgeblendet, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen oder auszublenden, müssen Sie mindestens einen Kontrollknopf (auch als Popover-**Aufrufer** bekannt) hinzufügen. Sie können eine {{htmlelement("button")}} (oder ein {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu kontrollierenden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten für den Knopf ist, ein Umschaltknopf zu sein — das wiederholte Drücken des Knopfes wechselt das Popover zwischen Anzeigen und Ausblenden.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden — dieses nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Anzeigen- und Ausblenden-Knöpfe zu erstellen, könnten Sie Folgendes tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Codeausschnitt in unserem [Grundlegenden deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird es `display: none` entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} verschoben, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribute bieten sehr ähnliche Funktionalitäten wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das auf die Bereitstellung anderer Funktionalitäten über Popover-Befehle hinaus abzielt, einschließlich benutzerdefinierter Befehle.

Der vorherige Codeausschnitt könnte wie folgt umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Automatischer Zustand und "light dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt wird, heißt es, dass es sich im **automatischen Zustand** befindet. Die zwei wichtigen Verhaltensweisen, die bei automatischem Zustand zu beachten sind:

- Das Popover kann "leicht verworfen" werden — das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken.
- Das Popover kann auch geschlossen werden, indem browserspezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste genutzt werden.
- Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden — wenn ein zweites Popover angezeigt wird, während bereits eins angezeigt wird, wird das erste ausgeblendet. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte automatische Popovers haben. Weitere Details finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> [!NOTE] > `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) an anderen Elementen im Dokument verworfen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden bei einem angezeigten Popover fehlschlägt, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch bei einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der automatische Zustand ist nützlich, wenn Sie nur ein einzelnes Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Lehr-UI-Nachrichten, die Sie anzeigen möchten, aber nicht möchten, dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, wobei der neue Status einen vorherigen Status überschreibt.

Sie können das beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere automatische Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach dem Anzeigen leicht zu verwerfen, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Zugänglichkeitsfunktionen für Popovers

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und unterstützende Technologie (AT)-Benutzern zu ermöglichen, einfacher mit dem Popover zu interagieren:

- Wenn das Popover angezeigt wird, wird die Tastaturfokussierreihenfolge aktualisiert, sodass das Popover als nächstes in der Reihenfolge ist: Ein Beispiel, wenn ein Knopf gedrückt wird, um ein Popover anzuzeigen, werden alle Knöpfe im Popover als nächstes in der Tab-Reihenfolge sein (wird durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Im Gegensatz dazu wird der Fokus beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) zurück zum Invoker verschoben.
- Um AT wie Screenreadern zu ermöglichen, die Beziehung zwischen dem Invoker und dem Popover zu verstehen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise schafft auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung herzustellen

Sie können eine Popover-Invoker-Beziehung auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwendung der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Fokussierreihenfolge geändert wird, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es nicht garantiert werden kann, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Picker, wenn es über die Eigenschaft {{cssxref("appearance")}} `base-select` in die Funktionalität von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) integriert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum automatischen Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht verworfen" werden, obwohl deklarative Anzeigen-/Ausblenden-/Umschaltknöpfe (wie bereits gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle`- und `toggle`-Ereignisse

Sie können auf das Anzeigen oder Verbergen eines Popovers mit den Ereignissen [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) reagieren:

- `beforetoggle` wird unmittelbar bevor ein Popover angezeigt oder ausgeblendet wird, ausgelöst. Dies kann beispielsweise verwendet werden, um zu verhindern, dass das Popover angezeigt oder ausgeblendet wird (mithilfe von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach seiner Verwendung aufzuräumen.
- `toggle` wird unmittelbar nachdem ein Popover angezeigt oder ausgeblendet wird, ausgelöst. Dies wird allgemein verwendet, um anderen Code als Reaktion auf eine Änderung des Umschaltzustands eines Popovers auszuführen.

Beide Ereignisse verfügen über ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis verfügt über folgende Funktionen zusätzlich zu denjenigen, die von dem Standard-`Event`(/de/docs/Web/API/Event)-Objekt geerbt werden:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) zeigen an, von welchem Zustand das Popover gerade übergegangen ist und zu welchem Zustand, was es Ihnen ermöglicht, speziell auf das Öffnen oder Schließen eines Popovers zu reagieren.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält einen Verweis auf das HTML-Popover-Steuerelement, das die Umschaltung initiiert hat, was es Ihnen ermöglicht, unterschiedlichen Code als Reaktion auf das Umschaltereignis auszuführen, abhängig davon, welches Steuerelement es initiiert hat.

Typische Verwendung könnte wie folgt aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Sehen Sie sich die vorherigen Referenzlinks für weitere Informationen und Beispiele an.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut abzurufen oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich für die Funktionserkennung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut und ermöglichen es Ihnen, die Steuerknöpfe für ein Popover einzurichten, obwohl der Eigenschaftswert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), mit dem Sie die Aktion angeben können, die von einem Steuerknopf durchgeführt wird.

Indem Sie diese drei zusammen verwenden, können Sie ein Popover und seinen Steuerknopf programmatisch einrichten, wie folgt:

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

Sie haben auch mehrere Methoden zur Kontrolle des Anzeigens und Verbergens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Anzeigen eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Verbergen eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zur Umschaltung eines Popovers.

Zum Beispiel möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfspopover durch Klicken auf einen Knopf oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das Erste könnte deklarativ erreicht werden oder Sie könnten es mithilfe von JavaScript steuern, wie oben gezeigt.

Für das Letztere könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine, um das Popover zu öffnen, und eine, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudo-Klasse passt nur auf Popovers, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits ausgeblendetes Popover auszublenden.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover sowohl anzuzeigen _als auch_ auszublenden, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Toggle-Hilfe-UI-Beispiel](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, Funktionsdetektion und `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere automatische Popovers gleichzeitig angezeigt werden dürfen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popovers-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über Steuerelemente/Aufrufer:

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

Sehen Sie unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel. Sie werden feststellen, dass ziemlich viele Ereignishandler verwendet wurden, um das Unterpopover während des Maus- und Tastaturzugangs angemessen anzuzeigen und auszublenden und auch beide Menüs auszublenden, wenn eine Option aus einem von beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte in einer SPA- oder einer mehrseitigen Website handhaben, könnte ein Teil oder alle davon nicht erforderlich sein, aber sie wurden in diesem Demo zu Illustrationszwecken hinzugefügt.

## Verwendung des "hint"-Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hinweis-Popovers**, die durch Setzen von `popover="hint"` auf Ihrem Popover-Element bezeichnet werden. `hint`-Popovers schließen `auto`-Popovers nicht, wenn sie angezeigt werden, sondern schließen andere `hint`-Popovers. Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

Das ist nützlich für Situationen, in denen Sie beispielsweise Symbolleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber Sie möchten auch Tooltipps anzeigen, wenn die Schaltflächen überfahren werden, ohne die UI-Popovers zu schließen.

`hint`-Popovers werden typischerweise in Reaktion auf nicht anklickbare JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet. Das Klicken auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein geöffnetes `auto`-Popover leicht verwerfen.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel an, das genau wie oben beschrieben funktioniert. Das Demo verfügt über eine Schaltflächenleiste; wenn sie gedrückt werden, zeigen die Schaltflächen `auto` Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Werden die Schaltflächen jedoch überfahren oder fokussiert, zeigen die Schaltflächen auch Tooltipps (`hint`-Popovers) an, um dem Benutzer eine Vorstellung davon zu geben, was jede Schaltfläche bewirkt, die ein derzeit angezeigtes Untermenü nicht ausblenden.

In den folgenden Abschnitten gehen wir alle wichtigen Teile des Codes durch.

> [!NOTE]
> Sie _können_ `hint`-Popovers neben `manual`-Popovers verwenden, obwohl es dafür eigentlich keinen wirklichen Grund gibt. Sie sind dafür gedacht, einige der Einschränkungen von `auto`-Popovers zu umgehen und damit Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützten Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ erstellt, indem `auto`-Popovers verwendet werden.

Zuerst die Steuerknöpfe:

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

Die Untermenü-Popovers funktionieren so wie sie sind, öffnen sich wenn die Symbolleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips bei Schaltflächen-Hover/Focus an? Zuerst erstellen wir die Tooltips im HTML mit `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im [Quellcode des Demos](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) sind die Tooltips innerhalb der Popover-Steuerknöpfe verschachtelt. Das liegt daran, dass es in nicht unterstützenden CSS-Anker-Positionierungsbrowsern eine bessere Fallback-Option bietet — die `hint`-Popovers erscheinen neben ihren zugehörigen Steuerknöpfen und nicht woanders.

Um die Anzeige/Ausblenden zu steuern, müssen wir JavaScript verwenden. Zuerst greifen wir auf die `hint`-Popovers und die Steuerknöpfe in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)-Listen mittels [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zu:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) für einen angegebenen {{htmlelement("button")}} setzt, ausgewählt durch das Ergreifen des `<button>` an einem spezifischen Indexwert der `btns`-`NodeList`. Die Funktionen wirken sich auf das `hint`-Popover beim gleichen Indexwert der `tooltips`-`NodeList` aus, wodurch wir die Schaltflächen und die Tooltips synchron halten können — anzeigen/ausblenden des richtigen Tooltips, wenn eine Schaltfläche interagiert wird.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event), und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur zugänglich sind.

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

Abschließend verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns`-`NodeList` zu iterieren und die `addEventListeners()`-Funktion für jeden auszuführen, sodass alle die gewünschten Ereignislistener gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Styling von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Auswählen von Popovers

Sie können alle Popovers mit einem einfachen Attribut-Selektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen spezifischen Popover-Typ auswählen, indem Sie einen Wert im Attributselektor angeben:

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

### Stylen des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudo-Element ist ein vollbildunterstütztes Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird und es ermöglicht, Effekte auf die Seitenelemente hinter dem/den Popover(s) anzuwenden, wenn gewünscht. Beispielsweise könnten Sie den Inhalt hinter dem Popover ausblenden, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie unser [Popover-Blur-Hintergrundbeispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) für eine Idee, wie dies gerendert wird.

### Positionierung von Popovers

Wenn Sie die ersten paar Beispiele zu Beginn des Artikels betrachtet haben, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte der Ansicht erscheinen, ihren Inhalt umschließen und einen schwarzen Rahmen haben. Dies ist das Standardstyling, das mit der folgenden Regel im UA-Stylesheet erreicht wird:

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

Um benutzerdefinierte Größen anzuwenden und das Popover an einer anderen Stelle zu positionieren, können Sie die obigen Styles überschreiben mit so etwas wie:

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

Sie können ein isolated Beispiel dafür in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt zur Ansicht oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil nutzen, dass Popovers und ihre Aufrufer eine **implizite Ankerreferenz** haben.

[Das Verknüpfen einer Art von Popover mit seinem Invoker](#andere_möglichkeiten,_eine_popover-invoker-beziehung_herzustellen) schafft eine implizite Ankerreferenz zwischen den beiden. Dadurch wird der Aufrufer zum **Ankerelement** des Popovers, was bedeutet, dass Sie das Popover relativ dazu mittels [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positionieren können.

Da die Assoziation zwischen dem Popover und dem Aufrufer implizit ist, muss keine explizite Assoziation mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden. Sie müssen jedoch das Positionierungs-CSS angeben.

Beispielsweise könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Einfassungs-Eigenschaften")}} gesetzt sind, und `anchor-center`-Werte auf Ausrichtungseigenschaften setzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
  bottom: calc(anchor(top) + 20px);
  justify-self: anchor-center;
}
```

Oder Sie könnten eine {{cssxref("position-area")}}-Eigenschaft verwenden:

```css
.my-popover {
  margin: 0;
  inset: auto;
  position-area: top;
}
```

Bei der Verwendung von {{cssxref("position-area")}} oder {{cssxref("anchor()")}} zur Positionierung von Popovers, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position kollidieren könnten, die Sie zu erreichen versuchen. Die gewohnten Übeltäter sind die Standardstile für `margin` und `inset`, daher wird empfohlen, diese zurückzusetzen, wie in den obigen Beispielen. Die CSS-Arbeitsgruppe prüft [Möglichkeiten zur Vermeidung dieses Workarounds](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für mehr Details zur Assoziierung von Anker- und Positionierungselementen und zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, siehe unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie den CSS-Code überprüfen, werden Sie sehen, dass keine expliziten Anker-Assoziationen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen wurden.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass das Popover an seinen Invoker verankert ist, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der nicht im aktuellen Dokument existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Anker-Assoziation](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Popovers animieren

Popovers sind auf `display: none;` gesetzt, wenn sie ausgeblendet sind, und `display: block;`, wenn sie angezeigt werden, sowie werden sie von/zu der {{Glossary("top_layer", "obersten Ebene")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](https://de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Insbesondere wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Bei der Animation von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er die ganze Zeit über sichtbar ist.
- Bei der Animation von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er die ganze Zeit über sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt sein, um das oben beschriebene Verhalten zu aktivieren. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; es ist kein gleichwertiger Schritt erforderlich.

### Übergang eines Popovers animieren

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}}-At-Regel
  - : Bietet einen Satz von Ausgangswerten für die am Popover gesetzten Eigenschaften, von denen aus Sie den Übergang beginnen möchten, wenn es zum ersten Mal angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft von einem Wert zu einem anderen Wert auf einem sichtbaren Element ändert; sie werden nicht bei der ersten Stilaktualisierung eines Elements oder wenn der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das Popover während der gesamten Übergangszeit `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt, und die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Nehmen Sie `overlay` in die Übergangsliste auf, um sicherzustellen, dass die Entfernung des Popovers von der obersten Ebene solange verzögert wird, bis der Übergang abgeschlossen ist, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Shorthand), um diskrete Übergänge bei diesen zwei Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Lassen Sie uns ein Beispiel betrachten, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-HTML-Attribut als Popover deklariert wurde, und ein {{htmlelement("button")}}-Element, das als Steuerelement für das Anzeigen des Popovers ausgewählt wurde:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die zwei Popover-Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform). Wir möchten, dass das Popover während des Ein- oder Ausblendens horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Ausgangszustand für diese Eigenschaften auf den versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open)-Pseudo-Klasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/Reference/Properties/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation zu definieren, wenn das Popover angezeigt oder versteckt wird.

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

- Einen Anfangszustand für den `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `display` zur Liste der übergangenen Eigenschaften hinzugefügt, sodass das animierte Element (auf `display: block` gesetzt) während der Ein- und Ausblendanimation des Popovers sichtbar bleibt. Ohne dies wäre die Ausblendanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergangenen Eigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements von der obersten Ebene solange verzögert wird, bis die Animation abgeschlossen ist. Der Effekt dieses Vorgangs ist bei grundlegenden Animationen wie dieser möglicherweise nicht erkennbar, jedoch in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element von der Überlagerung entfernt wird, bevor die Transition abgeschlossen ist.
- `allow-discrete` auf beiden Eigenschaften in den vorhergehenden Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) integriert haben, der hinter dem Popover erscheint, wenn es geöffnet wird, und eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover bei jedem Auftreten des Einstiegübergangs von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration der Verwendung von Anfangsstilen](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis.

### Eine Popover-Keyframe-Animation

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style`; Sie fügen Ihre "zu" und "von" `display`-Werte in Keyframes ein.
- Sie aktivieren diskrete Animationen nicht explizit; es gibt kein Äquivalent zu `allow-discrete` in Keyframes.
- Sie müssen `overlay` in Keyframes nicht setzen; die `display`-Animation verarbeitet die Animation des Popovers vom angezeigten zum versteckten Zustand.

Sehen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerelement für das Anzeigen des Popovers ausgewählt wurde:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Eintritts- und Austrittsanimationen sowie nur eine Eintrittsanimation für den Hintergrund angeben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren — der Hintergrund wird unmittelbar aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts animiert werden kann.

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

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}
