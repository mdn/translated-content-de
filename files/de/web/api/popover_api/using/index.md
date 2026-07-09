---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 913b2dc28956617354dfb63bf93e56c48ac754af
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über andere Seiteninhalte anzuzeigen. Popover-Inhalte können entweder deklarativ mithilfe von HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen dieser API.

## Erstellen von deklarativen Popovern

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut dem Element hinzugefügt wird, das den Popover-Inhalt enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs führt dazu, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen oder zu verbergen, müssen Sie mindestens eine Steuerschaltfläche hinzufügen (auch als Popover-**Invoker** bekannt). Sie können eine {{htmlelement("button")}} (oder {{htmlelement("input")}} mit `type="button"`) verwenden, indem Sie ihr ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass die Schaltfläche eine Toggle-Schaltfläche ist — wiederholtes Drücken wechselt das Popover zwischen sichtbar und verborgen.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden, das einen Wert von `"hide"`, `"show"` oder `"toggle"` annehmen kann. Um beispielsweise separate Anzeigen- und Verbergenschaltflächen zu erstellen, könnten Sie folgendes tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Code-Schnipsel in unserem [Beispiel für ein einfaches deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einer Steuerschaltfläche ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} gebracht, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribute bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das auch andere Funktionalitäten jenseits von Popover-Befehlen ermöglicht, einschließlich benutzerdefinierter Befehle.

Der vorherige Code-Schnipsel könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` gesetzt wird, wie oben gezeigt, sagt man, dass es sich im **Auto-Zustand** befindet. Die wichtigen Verhaltensweisen des Auto-Zustands sind:

- Das Popover kann "light dismissed" werden — das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken.
- Das Popover kann auch geschlossen werden, indem browserspezifische Mechanismen wie Drücken der <kbd>Esc</kbd>-Taste verwendet werden.
- In der Regel kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popover haben. Siehe den Abschnitt [Verschachtelte Popover](#verschachtelte_popover) für weitere Details.

> [!NOTE]
> `popover="auto"`-Popover werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) für andere Elemente im Dokument beendet. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits angezeigten Popover zum Scheitern führt, da diese Verhaltensweisen für ein bereits angezeigtes Popover keinen Sinn ergeben. Sie können sie jedoch auf ein Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein einzelnes Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Unterrichtsnachrichten in der Benutzeroberfläche, die Sie anzeigen möchten, ohne dass die Anzeige überladen und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in unserer [Beispiel für mehrere Auto-Popover](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) in Aktion sehen. Versuchen Sie, die Popover nach dem Anzeigen "light" zu schließen, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Zugänglichkeitsfunktionen

Wenn über das `popovertarget`-Attribut eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und Hilfstechnologiebenutzern die Interaktion mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Reihenfolge der Tastaturfokus-Navigation aktualisiert, sodass das Popover als nächstes in der Sequenz steht: zum Beispiel, wenn eine Taste gedrückt wird, um ein Popover anzuzeigen, werden alle Tasten innerhalb des Popovers als Nächstes in der Tab-Reihenfolge erscheinen (wird durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (in der Regel über die <kbd>Esc</kbd>-Taste) der Fokus zurück auf den Invoker verschoben.
- Um Hilfstechnologien wie Bildschirmlesegeräte über die Beziehung zwischen Invoker und Popover zu informieren, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Die Einrichtung einer Beziehung zwischen einem Popover und seiner Steuerung in dieser Weise erzeugt auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Anker-Positionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung herzustellen

Es gibt noch andere Möglichkeiten, neben dem `popovertarget`-Attribut eine Popover-Invoker-Beziehung herzustellen:

- Verwendung der Option `source` der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Fokus-Navigationsreihenfolge geändert wird, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Picker, wenn es in die Funktionalität des [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) eingebunden wird, über den `appearance`-Eigenwert `base-select`. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch das Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "light dismissed" werden, obwohl deklarative Anzeigen/Verbergenschaltflächen (wie zuvor gesehen) immer noch funktionieren.
- Mehrere unabhängige Popover können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in unserer [Beispiel für mehrere manuelle Popover](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) in Aktion sehen.

## Die `beforetoggle` und `toggle` Ereignisse

Sie können auf das Anzeigen oder Verbergen eines Popovers mit den [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignissen reagieren:

- `beforetoggle` wird direkt vor dem Anzeigen oder Verbergen eines Popovers ausgelöst. Dies kann beispielsweise verwendet werden, um das Anzeigen oder Verbergen des Popovers zu verhindern (mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen hinzuzufügen, um ein Popover zu animieren, oder um den Status eines Popovers nach der Verwendung zu bereinigen.
- `toggle` wird unmittelbar nach dem Anzeigen oder Verbergen eines Popovers ausgelöst. Dies wird allgemein verwendet, um anderen Code als Reaktion auf eine Änderung des Popover-Zustands auszuführen.

Beide Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis hat folgende Merkmale zusätzlich zu denen, die vom Standard-[`Event`](/de/docs/Web/API/Event)-Objekt geerbt werden:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, aus welchem Zustand das Popover gerade übergegangen ist und zu welchem, was Ihnen ermöglicht, spezifisch auf das Öffnen oder Schließen eines Popovers zu reagieren.
- Die [`source`](/de/docs/Web/API/ToggleEvent/source)-Eigenschaft enthält einen Verweis auf das HTML-Popover-Steuerelement, das die Umschaltung initiiert hat, was Ihnen ermöglicht, unterschiedlichen Code als Reaktion auf das Umschalt-Ereignis auszuführen, je nachdem, welches Steuerelement es initiiert hat.

Typische Nutzung könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Beachten Sie, dass das Aufrufen von [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) oder [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) aus einem `beforetoggle`-Ereignislistener heraus, während ein anderes Popover bereits angezeigt oder verborgen wird, nicht erlaubt ist und einen `InvalidStateError` `DOMException` auslöst.

Siehe die vorherigen Referenzlinks für weitere Informationen und Beispiele.

## Anzeigen von Popovern über JavaScript

Sie können Popover auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu holen oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich für die Funktionsprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, wodurch Sie die Steuerschaltfläche(n) für ein Popover einrichten können, obwohl der Eigenschaftswert eine Referenz zu dem zu steuernden Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), wodurch Sie die Aktion, die von einer Steuerschaltfläche ausgeführt wird, spezifizieren können.

Indem Sie diese drei kombinieren, können Sie ein Popover und seine Steuerschaltfläche programmgesteuert einrichten, wie folgt:

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  toggleBtn.style.display = "none";
}
```

Sie haben auch mehrere Methoden, um das Anzeigen und Verbergen zu steuern:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), um ein Popover umzuschalten.

Zum Beispiel möchten Sie vielleicht die Fähigkeit bieten, ein Hilfe-Popover an- und auszuschalten, indem Sie eine Schaltfläche oder eine bestimmte Taste auf der Tastatur drücken. Die erste Möglichkeit könnte deklarativ erreicht werden, oder alternativ können Sie dafür JavaScript verwenden, wie oben gezeigt.

Für die zweite Möglichkeit könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine, um das Popover zu öffnen, und eine weitere, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse trifft nur auf Popover zu, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzunehmen oder ein bereits verborgenes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover anzuzeigen _und_ zu verbergen, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Siehe unser [Beispiel für das Umschalten der Hilfe-Benutzeroberfläche](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)), um die Popover-JavaScript-Eigenschaften, die Funktionen zur Erkennung von Merkmalen und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popover

Es gibt eine Ausnahme von der Regel, dass nicht mehrere Auto-Popover gleichzeitig angezeigt werden können — wenn sie ineinander verschachtelt sind. In solchen Fällen ist es erlaubt, dass mehrere Popover gleichzeitig geöffnet sind, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popover zu erstellen:

1. Direkte DOM-Nachfahren:

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

> [!NOTE]
> Ein `auto`-Popover kann kein `hint`-Popover als übergeordnetes Element im `auto`-[Popover-Stack](#popover_openclose_interaction_rules) haben (obwohl es `auto`-Popover oder `hint`-Popover verschachteln kann).
> Wenn ein `auto`-Popover strukturell innerhalb eines `hint`-Popovers verschachtelt ist — zum Beispiel, wenn das `auto`-Element ein DOM-Nachfahre des Hinweises ist, oder sein Invoker innerhalb des Hinweises sitzt — stuft der Browser den tatsächlichen Typ des `auto`-Popovers automatisch zu `hint` herab, und es wird entsprechend behandelt.

Siehe unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel. Sie werden bemerken, dass einige Ereignishandler verwendet wurden, um das Unterpopover während des Maus- und Tastaturzugriffs angemessen anzuzeigen und zu verbergen, und auch, um beide Menüs zu verbergen, wenn eine Option von einem der beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, sei es in einer SPA oder einer mehrseitigen Website, könnten einige oder alle dieser notwendigen Vorkehrungen überflüssig sein, aber sie wurden in diesem Demo zu Illustrationszwecken aufgenommen.

### Erstellen der Untermenüs mit `popover="auto"`

Die aufklappbaren Untermenüs werden deklarativ erstellt, indem `auto`-Popover verwendet werden.

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

Nun die Popover selbst:

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

## Verwendung des "hint" Popover-Zustands

Es gibt einen dritten Typ von Popover, den Sie erstellen können — **Hinweis-Popover**, die durch das Setzen von `popover="hint"` auf Ihrem Popover-Element ausgezeichnet werden.
Sie können leicht verworfen werden und werden auf Schließanfragen reagieren.

`hint`-Popover schließen keine `auto`-Popover, wenn sie angezeigt werden, sondern schließen andere `hint`-Popover, die keine Vorfahren im [Hinweis-Stack](#popover_openclose_interaction_rules) sind.
Das Umgekehrte gilt ebenfalls: Das Schließen eines `auto`-Popovers durch Drücken von <kbd>Esc</kbd> oder überraschendem Abbruch hat keine Auswirkungen auf `hint`-Popover, es sei denn, sie sind Nachfahren des geschlossenen Auto-Popovers.

Dies ist nützlich in Situationen, in denen Sie beispielsweise Symbolleistenschaltflächen haben, die gedrückt werden können, um UI-Popover anzuzeigen, aber auch Tooltips angezeigt werden sollen, wenn die Schaltflächen überfahren werden, ohne die UI-Popover zu schließen.

`hint`-Popover werden in der Regel in Antwort auf nicht-klickbare JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen.
Beachten Sie, dass Sie auch eine Schaltfläche klicken könnten, um ein `hint`-Popover zu öffnen, aber der Klick würde alle `auto`-Popover, die außerhalb dieser Schaltfläche liegen, zurückweisen (was wahrscheinlich nicht Ihre Absicht ist).

Siehe unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel, das genau wie beschrieben funktioniert. Das Demo verfügt über eine Schaltflächenleiste; beim Drücken zeigen die Schaltflächen automatische Pop-Up-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn sie jedoch überfahren oder fokussiert werden, zeigen die Schaltflächen auch Tooltips (`hint`-Popover) an, um dem Benutzer eine Vorstellung zu geben, was jede Schaltfläche macht, und die ein derzeit angezeigtes Untermenü nicht ausblenden.

In den folgenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint`-Popover zusammen mit `manual`-Popovern verwenden, obwohl es dafür eigentlich keinen großen Grund gibt. Sie sind darauf ausgelegt, einige der Einschränkungen von `auto`-Popovern zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützten Browsern auf `popover="manual"` zurückfällt.

> [!NOTE]
> Es gibt eine verwandte Funktion — **Interessen-Invoker** — die verwendet werden kann, um Hover- und Fokus-Popover-Funktionalität bequem und konsistent zu erstellen, ohne JavaScript zu benötigen. Informieren Sie sich über [Verwendung von Interessen-Invokern](/de/docs/Web/API/Popover_API/Using_interest_invokers), um mehr zu erfahren.

### Erstellen der Tooltips mit `popover="hint"`

Die Untermenü-Popover funktionieren gut so, wie sie sind, und öffnen sich, wenn die Symbolleistenschaltflächen gedrückt werden, aber wie können wir auch Tooltips bei hovering/focus der Schaltflächen anzeigen? Zuerst erstellen wir die Tooltips in HTML mit `hint`-Popovern:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im Demo-[Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) sind die Tooltips innerhalb der Popover-Steuerschaltflächen verschachtelt. Dies liegt daran, dass es in Browsern, die keine CSS-Ankerpositionierung unterstützen, eine bessere Fallback-Option bietet — die `hint`-Popover erscheinen neben ihren zugehörigen Steuerschaltflächen, anstatt an einer völlig anderen Stelle.

Um die Anzeige/Ausblendung zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen auf die `hint`-Popover und die Steuerschaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion `addEventListeners()`, die vier Ereignis-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem gegebenen {{htmlelement("button")}} setzt, das durch das Greifen des `<button>`-Elements an einem bestimmten Indexwert der `btns`-`NodeList` ausgewählt wurde. Die Funktionen wirken auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList`, was es uns ermöglicht, die Schaltflächen und die Tooltips synchron zu halten — das richtige Tooltip beim Interagieren mit einer Schaltfläche anzuzeigen/auszublenden.

Die Ereignis-Listener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips sowohl über Maus als auch über Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<button>`-Elemente in der `btns`-`NodeList` zu iterieren und unsere `addEventListeners()`-Funktion für jedes von ihnen aufzurufen, sodass alle die gewünschten Ereignis-Listener gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Popover-Interaktionsregeln beim Öffnen/Schließen

Der Browser hält zwei unabhängige Stapel von offenen Popovern: einen **Auto-Stapel** für `auto`-Popover und einen **Hinweis-Stapel** für `hint`-Popover.
Wenn ein Popover angezeigt wird, wird es auf den entsprechenden Stapel geschoben; wenn es verborgen wird, geht der Browser den Stapel zurück, indem er zuerst alle Nachfahren-Popover auf diesem Stapel schließt.
Da die beiden Stapel separat sind, wirken sich Operationen auf einem nicht automatisch auf den anderen aus.

Einige spezifische Regeln, die sich aus dieser Spezifikation für die Interaktion von Popovern ableiten, sind:

- Das Anzeigen eines `hint`-Popovers schließt keine `auto`-Popover.
- Das Anzeigen eines `hint`-Popovers schließt andere `hint`-Popover, außer denen, die seine Vorfahren im Hinweis-Stapel sind.
- Das Klicken außerhalb eines Popovers beseitigt alle offenen `auto`- und `hint`-Popover, die nicht seine Vorfahren sind.
- Das Verbergen eines `auto`-Popovers schließt keine `hint`-Popover, die nicht seine Nachfahren sind.
- Das Anzeigen eines `auto`-Popovers als Kind eines `hint`-Popovers stuft das `auto`-Popover zu einem `hint` herab.
- Das Anzeigen eines Popovers, während ein anderes Popover gerade angezeigt oder verborgen wird, ist nicht erlaubt.

Beachten Sie, dass `manual`-Popover an keinem der beiden Stapel teilnehmen — sie werden unabhängig angezeigt und verborgen und beeinflussen weder Auto- noch Hinweis-Popover.

## Styling von Popovern

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popover relevant sind.

### Auswahl von Popovern

Sie können alle Popover mit einem einfachen Attributauswähler auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attributauswähler angeben:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popover auswählen, die angezeigt werden, indem Sie die Pseudoklasse {{cssxref(":popover-open")}} verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrundes

Das Pseudoelement {{cssxref("::backdrop")}} ist ein Vollbildelement, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird, um Effekte auf die hinter dem Popover liegenden Seiteninhalte anzuwenden, wenn gewünscht. Sie könnten zum Beispiel den Hintergrund hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Siehe unser [Beispiel für einen verschwommenen Popover-Hintergrund](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) für eine Vorstellung davon, wie dies gerendert wird.

### Positionierung von Popovern

Beim Betrachten der ersten Paar Beispiele, die zu Beginn des Artikels verlinkt sind, haben Sie möglicherweise bemerkt, dass die Popover in der Mitte des Ansichtsbereichs erscheinen, ihren Inhalt umschließen und einen schwarzen Rand haben. Dies ist das Standardstyling, erreicht mit der folgenden Regel im UA-Stylesheet:

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

Um benutzerdefinierte Größen anzuwenden und das Popover woanders zu positionieren, könnten Sie die obigen Stile mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel dazu in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker anstatt zum Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie die Tatsache ausnutzen, dass Popover und ihre Invoker eine **implizite Ankerreferenz** haben.

[Die Zuordnung eines beliebigen Popovers zu seinem Invoker](#andere_möglichkeiten,_eine_popover-invoker-beziehung_herzustellen) schafft eine implizite Ankerreferenz zwischen den beiden. Dadurch wird der Invoker zum **Ankerelement** des Popovers, was bedeutet, dass Sie das Popover relativ zu ihm mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positionieren können.

Da die Zuordnung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Zuordnung mithilfe der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften erfolgen. Sie müssen jedoch immer noch die positionierenden CSS angeben.

Zum Beispiel könnten Sie eine Kombination aus {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Einsetzeigenschaften")}} gesetzt sind, und `anchor-center`-Werten, die auf Ausrichtungseigenschaften gesetzt sind:

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

Beim Verwenden von {{cssxref("position-area")}} oder {{cssxref("anchor()")}}, um Popover zu positionieren, beachten Sie, dass [die Standardstile für Popover](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der von Ihnen angestrebten Position in Konflikt stehen. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen, wie in den obigen Beispielen. Die CSS-Arbeitsgruppe [sucht nach Möglichkeiten, um zu vermeiden, dass dieses Workaround erforderlich ist](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Verknüpfung von Anker- und positionierten Elementen sowie zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Ein Beispiel, das diese implizite Zuordnung verwendet, finden Sie in unserem [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie sehen, dass keine expliziten Anker-Verbindungen mithilfe der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass das Popover an seinen Invoker verankert bleibt, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie zum Beispiel `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Animieren von Popovern

Popover werden auf `display: none;` gesetzt, wenn sie verborgen sind, und `display: block;` wenn sie angezeigt werden, sowie von der {{Glossary("top_layer", "obersten Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popover animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Speziell wird der Browser zwischen `none` und einem anderen `display`-Wert schalten, so dass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist. Bei Animationen von `display` von `none` auf `block` (oder einen anderen sichtbaren `display`-Wert) wird der Wert also bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er während der gesamten Dauer sichtbar ist. Bei Animationen von `block` (oder einem anderen sichtbaren `display`-Wert) auf `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Wenn Animationen mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animiert werden, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Bei Animationen mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovern mit CSS-Übergängen sind folgende Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Stellt einen Satz von Startwerten für die anzuzeigenden Popover-Eigenschaften bereit, von denen ausgehend die Transition erfolgen soll, wenn sie zuerst angezeigt werden. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich ein Eigenschaftswert auf einem sichtbaren Element ändert; sie werden nicht ausgelöst, wenn ein Element sein erstes Style-Update erhält oder wenn der `display`-Typ von `none` auf einen anderen Typ ändert.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` der Transitionsliste hinzu, damit das Popover während der Dauer der Transition als `display: block` (oder ein anderer sichtbarer `display`-Wert) sichtbar bleibt, um sicherzustellen, dass die anderen Transitionen sichtbar sind.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Schließen Sie `overlay` in die Transitionsliste ein, um sicherzustellen, dass die Entfernung des Popovers von der obersten Ebene bis zum Abschluss der Transition zurückgehalten wird, um sicherzustellen, dass die Transition sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Transitionen (oder auf die {{cssxref("transition")}} Verkürzung), um diskrete Transitionen auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animiert werden können.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover erklärt wird, sowie ein {{htmlelement("button")}}-Element, das als Popover-Steuerung ausgewiesen ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir transiieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}. Wir möchten, dass das Popover während des horizontalen Wachstumens bzw. Schrumpfens ein- oder ausblendet. Um dies zu erreichen, setzen wir einen Ausgangszustand für diese Eigenschaften auf den versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]`-Attributauswähler) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse). Wir verwenden auch die {{cssxref("transition")}}-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation beim Ein- oder Ausblenden des Popovers zu definieren.

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

Wie bereits erwähnt, haben wir das `transition`-Attribut innerhalb des `@starting-style`-Blocks ebenfalls als Ausgangszustand festgelegt.
Wir haben `display` zur Transitionsliste hinzugefügt, damit das animierte Element während der Popover-Eintritts- und -Austrittsanimationen sichtbar (auf `display: block` gesetzt) bleibt. Ohne dies wäre die Austrittsanimation nicht sichtbar; in diesem Fall würde das Popover einfach verschwinden.
Wir haben `overlay` zur Liste der Transitionseigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene bis zum Abschluss der Animation zurückgehalten wird. In einfacheren Fällen mag der Effekt einer solchen Maßnahme unmerklich sein, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vor dem Abschluss der Transition aus dem Overlay entfernt wird.
Wir haben `allow-discrete` auf beiden Eigenschaften in den oben genannten Transitionen gesetzt, um [diskrete Transitionen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch eine Transition auf dem {{cssxref("::backdrop")}}, das hinter dem Popover erscheint, hinzugefügt haben, wenn es sich öffnet, und eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popover bei jeder Anzeige von `display: none` zu `display: block` wechseln, wechseln die Popover bei jedem Eintrittsübergang von ihren `@starting-style`-Stilen zu ihren `[popover]:popover-open`-Stilen.
>
> Es ist möglich, dass der Stilübergang bei Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Beweis der Verwendung von Startstilen](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis hierzu.

### Eine Popover-Schlüsselbildanimation

Wenn ein Popover mit CSS-Schlüsselbildanimationen animiert wird, gibt es einige Unterschiede zu beachten:

- Sie bieten kein `@starting-style`; Sie geben Ihre "zu" und "von" `display`-Werte in Schlüsselbildern an.
- Sie aktivieren keine diskreten Animationen explizit; für Mit Keyframes gibt es keine Entsprechung für `allow-discrete`.
- Sie müssen `overlay` innerhalb von Keyframes nicht explizit festlegen; die `display`-Animation übernimmt die Animation des Popovers von angezeigt zu ausgeblendet.

Werfen wir einen Blick auf ein Beispiel.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover erklärt wird, und ein {{htmlelement("button")}}-Element, das als Popover-Steuerung ausgewiesen ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Ein- und Austrittsanimationen angeben, sowie eine Eintrittsanimation nur für das Backdrop. Beachten Sie, dass es nicht möglich war, das Backdrop auszublenden — das Backdrop wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts animiert werden kann.

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

Der Code rendert wie folgt:

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}

## Siehe auch

- Sammlung von [Popover-API-Beispielen](https://mdn.github.io/dom-examples/popover-api/)
