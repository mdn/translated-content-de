---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 58290795d9f78c91933e092053bb6439bde56651
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen dieser API.

## Erstellen von deklarativen Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut dem Element hinzugefügt wird, das die Popover-Inhalte enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert ist gleichbedeutend mit `popover="auto"`.

Durch das Hinzufügen dieses Attributs wird das Element beim Laden der Seite ausgeblendet, indem {{cssxref("display", "display: none")}} auf ihm gesetzt wird. Um das Popover anzuzeigen oder zu verbergen, müssen Sie mindestens einen Steuerknopf hinzufügen (auch bekannt als Popover **Invoker**). Sie können einen {{htmlelement("button")}} (oder ein {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut mitgeben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Knopf ein Umschaltknopf ist — ein wiederholtes Drücken schaltet das Popover zwischen Anzeigen und Ausblenden um.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden - dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Anzeigen- und Ausblendknöpfe zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Wie der vorherige Codeausschnitt gerendert wird, sehen Sie in unserem [Beispiel für ein einfaches deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)).

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` von ihm entfernt und es wird in die {{Glossary("top_layer", "Oberste Ebene")}} gesetzt, sodass es über allen anderen Seiteninhalten sitzt.

### `command` und `commandfor`

Die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribute bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das darauf abzielt, andere Funktionen über Popover-Befehle hinaus bereitzustellen, einschließlich benutzerdefinierter Befehle.

Der vorherige Codeausschnitt könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "leichtes Ausblenden"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` gesetzt wird, wie oben gezeigt, befindet es sich im **Auto-Zustand**. Die wichtigen Verhaltensweisen im Auto-Zustand sind:

- Das Popover kann "leicht ausgeblendet" werden – das bedeutet, dass Sie das Popover durch Klicken außerhalb davon ausblenden können.
- Das Popover kann auch über browserspezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- In der Regel kann nur ein `auto` Popover gleichzeitig angezeigt werden – das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> Popovers mit `popover="auto"` werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument ausgeblendet. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem angezeigten Popover zu einem Fehlschlagen führen wird, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das aktuell nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Lehr-Nachrichten in der Benutzeroberfläche, die Sie anzeigen möchten, aber nicht möchten, dass die Anzeige überladen und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach deren Anzeige leicht auszublenden und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig zu zeigen.

## Zugänglichkeitsfunktionen von Popovers

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, damit Tastatur- und unterstützende Technologie (AT)-Benutzer leichter mit dem Popover interagieren können:

- Wenn das Popover angezeigt wird, wird die Reihenfolge der Navigation mit der Tastatur so aktualisiert, dass das Popover als Nächstes in der Reihenfolge ist: Wenn beispielsweise ein Knopf gedrückt wird, um ein Popover anzuzeigen, sind alle Knöpfe im Popover als Nächstes in der Tabs-Reihenfolge (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus wieder zum Invoker verschoben.
- Um ATs wie Bildschirmleser in die Lage zu versetzen, die Beziehung zwischen dem Invoker und dem Popover zu erkennen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise schafft auch eine implizite Anker-Referenz zwischen den beiden - siehe [Popover Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Wege, um eine Popover-Initiator-Beziehung einzurichten

Sie können auf andere Weise eine Popover-Initiator-Beziehung einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwendung der `source`-Option der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)- oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methoden. Beachten Sie, dass in diesem Fall nur die Änderungen der Fokusnavigation order vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Picker, wenn es in die [anpassbare Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)-Funktionalität über den `base-select`-Wert der {{cssxref("appearance")}}-Eigenschaft integriert ist. In diesem Fall wird eine implizite Popover-Initiator-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht ausgeblendet" werden, obwohl deklarative Anzeigen-/Verbergen-/Umschaltknöpfe (wie zuvor gezeigt) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Dieses Verhalten können Sie in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle`- und `toggle`-Ereignisse

Sie können auf das Anzeigen oder Verbergen eines Popovers mit den [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)- und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignissen reagieren:

- `beforetoggle` wird direkt bevor ein Popover angezeigt oder verborgen wird, ausgelöst. Dies kann z.B. genutzt werden, um zu verhindern, dass das Popover angezeigt oder verborgen wird (mittels [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers zu bereinigen, nachdem es verwendet wurde.
- `toggle` wird direkt nachdem ein Popover angezeigt oder verborgen wurde, ausgelöst. Dies wird allgemein verwendet, um anderen Code in Reaktion auf eine Änderung des Popover-Umschaltzustands auszuführen.

Beide dieser Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis hat folgende Funktionen zusätzlich zu denen, die vom Standard-[`Event`](/de/docs/Web/API/Event)-Objekt geerbt werden:

- Die [`oldState`](/de/docs/Web/API/ToggleEvent/oldState)- und [`newState`](/de/docs/Web/API/ToggleEvent/newState)-Eigenschaften geben an, von welchem und zu welchem Zustand das Popover gerade gewechselt ist, und ermöglichen es Ihnen, spezifisch auf das Öffnen oder Schließen eines Popovers zu reagieren.
- Die [`source`](/de/docs/Web/API/ToggleEvent/source)-Eigenschaft enthält eine Referenz zum HTML-Popover-Steuerelement, das das Umschalten initiiert hat, sodass Sie in der Lage sind, unterschiedlichen Code als Reaktion auf das Umschalt-Ereignis auszuführen, je nachdem, welches Steuerelement es initiiert hat.

Typische Verwendung könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Beachten Sie, dass das Aufrufen von [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) oder [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) innerhalb eines `beforetoggle`-Ereignislisteners, während ein anderes Popover bereits angezeigt oder verborgen wird, nicht erlaubt ist und ein `InvalidStateError`-`DOMException` auslöst.

Siehe die vorherigen Referenzlinks für mehr Informationen und Beispiele.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover) Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut abzurufen oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch für die Funktionserkennung nützlich. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, mit dem Sie die Steuerelement-Knöpfe für ein Popover festlegen können, obwohl der Eigenschaftswert eine Referenz auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), das es Ihnen ermöglicht, die von einem Steuerelement-Knopf auszuführende Aktion zu spezifizieren.

Wenn Sie diese drei kombinieren, können Sie programmgesteuert ein Popover und seinen Steuerungsknopf einrichten, etwa so:

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

Es gibt auch mehrere Methoden, um das Anzeigen und Verbergen zu steuern:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) um ein Popover umzuschalten.

Zum Beispiel möchten Sie vielleicht die Fähigkeit bieten, ein Hilfe-Popover durch Klicken auf einen Knopf oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Die erste Option könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript, wie oben gezeigt, tun.

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover momentan angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudo-Klasse passt nur zu Popovers, die gerade angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover erneut anzuzeigen oder ein bereits verborgenes Popover zu verbergen.

Alternativ könnten Sie eine einzige Taste programmieren, um das Popover zu zeigen _und_ zu verbergen, etwa so:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie unser [Beispiel zur Umschaltung der Hilfe-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)), um die JavaScript-Eigenschaften des Popovers, die Funktionserkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere Auto-Popovers gleichzeitig angezeigt werden dürfen - wenn sie ineinander verschachtelt sind. In solchen Fällen ist es erlaubt, dass mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sind. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

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

> [!NOTE]
> Ein `auto` Popover kann kein `hint` Popover als Elternteil im `auto` [Popover-Stack](#popover_openclose_interaction_rules) haben (obwohl es `auto` Popovers oder `hint` Popovers verschachteln kann).
> Wenn ein `auto` Popover strukturell innerhalb eines `hint` Popovers verschachtelt ist – etwa, wenn das `auto` ein DOM-Nachkomme des Hinweises ist oder sein Invoker im Hinweis liegt – wird der Effektivtyp des `auto` Popovers vom Browser automatisch auf `hint` herabgestuft, und es wird so behandelt.

Sehen Sie unser [Beispiel für verschachtelte Popover-Menüs](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)), um ein Beispiel zu sehen. Sie werden bemerken, dass ziemlich viele Ereignishandler verwendet wurden, um das Unterpopover während der Maus- und Tastaturzugriffe angemessen anzuzeigen und zu verbergen, und um beide Menüs zu verstecken, wenn eine Option aus einem der beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte in einer SPA oder einer mehrseitigen Website handhaben, sind einige oder alle davon möglicherweise nicht notwendig, aber sie wurden in diesem Demo zu illustrativen Zwecken aufgenommen.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ erstellt, unter Verwendung von `auto` Popovers.

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

## Verwendung des "Hint"-Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hint-Popovers**, die durch Setzen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind.
Sie können leicht ausgeblendet werden und reagieren auf Schließanfragen.

`hint` Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber schließen andere `hint` Popovers, die keine Vorfahren im [Hint-Stack](#popover_openclose_interaction_rules) sind.
Umgekehrt: Das Schließen eines `auto` Popovers durch das Drücken von <kbd>Esc</kbd> oder durch leichtes Ausblenden betrifft `hint` Popovers nicht, es sei denn, sie sind Nachfahren des geschlossenen `auto` Popovers.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Werkzeugleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, Sie aber auch Tooltips enthüllen möchten, wenn die Knöpfe berührt werden, ohne die UI-Popovers zu schließen.

`hint` Popovers werden tendenziell in Reaktion auf nicht-klickbare JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen.
Beachten Sie, dass Sie möglicherweise auch eine Schaltfläche klicken, um ein `hint` Popover zu öffnen, aber der Klick wird alle `auto` Popovers, die sich außerhalb der Schaltfläche befinden, leicht ausblenden (was wahrscheinlich nicht so beabsichtigt ist).

Sehen Sie unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)), um ein Beispiel zu sehen, das genau wie oben beschrieben funktioniert. Das Demo verfügt über eine Schaltflächenleiste; wenn gedrückt, zeigen die Schaltflächen `auto` Popup-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn jedoch die Schaltflächen berührt oder fokussiert werden, zeigen sie auch Tooltips (`hint` Popovers) an, die dem Benutzer eine Vorstellung davon geben, was jede Schaltfläche bewirkt, ohne ein aktuell angezeigtes Untermenü zu verbergen.

In den folgenden Abschnitten gehen wir die wichtigen Teile des Codes durch.

> [!NOTE]
> Sie _können_ `hint` Popovers zusammen mit `manual` Popovers verwenden, obwohl es dafür nicht wirklich einen Grund gibt. Sie sind darauf ausgelegt, einige der Einschränkungen von `auto` Popovers zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

> [!NOTE]
> Es gibt eine verwandte Funktion — **Interesse-Initiatoren** — die verwendet werden kann, um Hover-/Fokus-Popover-Funktionalität bequem und konsistent zu erstellen, ohne dass JavaScript erforderlich ist. Schauen Sie sich [Verwendung von Interesse-Initiatoren](/de/docs/Web/API/Popover_API/Using_interest_invokers) an, um mehr zu erfahren.

### Erstellen der Tooltips mit `popover="hint"`

Die Untermenü-Popovers funktionieren so, wie sie sind, beim Drücken der Steuer-Schaltflächen, aber wie zeigen wir auch Tooltips beim Hover/Fokus der Schaltflächen? Zuerst erstellen wir die Tooltips in HTML, unter Verwendung von `hint` Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im Demo-[Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) sind die Tooltips in den Popover-Steuerknöpfen verschachtelt. Dies liegt daran, dass es in Browsern, die CSS-Ankerpositionierung nicht unterstützen, einen besseren Fallback bietet — die `hint` Popovers erscheinen neben ihren zugeordneten Steuerknöpfen und nicht irgendwo anders.

Um die Anzeige/Verdeckung zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen zu den `hint` Popovers und den Steuerknöpfen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s, indem wir [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignislisten (mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem gegebenen {{htmlelement("button")}} setzt, der durch Abrufen des `<button>` an einem bestimmten Indexwert der `btns` `NodeList` gewählt wird. Die Funktionen wirken auf das `hint` Popover am selben Indexwert der `tooltips` `NodeList`, wodurch wir in der Lage sind, die Schalter und die Tooltips synchron zu halten, das heißt, das richtige Tooltip anzuzeigen/zu verbergen, wenn eine Schaltfläche interagiert wird.

Die Ereignislisten [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover beim [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) an und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover beim [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips sowohl per Maus als auch Tastatur erreichbar sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<button>`-Elemente in der `btns` `NodeList` zu iterieren und unsere `addEventListeners()`-Funktion für jedes auszuführen, damit alle die gewünschten Ereignislisten gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Popover-Öffnen/Schließen-Interaktionsregeln

Der Browser pflegt zwei unabhängige Stapel von offenen Popovers: einen **Auto-Stack** für `auto` Popovers und einen **Hint-Stack** für `hint` Popovers.
Wenn ein Popover gezeigt wird, wird es auf den entsprechenden Stapel gelegt; wenn es versteckt wird, geht der Browser diesen Stapel zurück und schließt zuerst alle Nachkommen-Popovers auf diesem Stapel.
Da die beiden Stapel getrennt sind, wirken sich Operationen auf einem nicht automatisch auf den anderen aus.

Einige spezifische Regeln, wie Popovers interagieren, die sich aus dieser Spezifikation ableiten, sind:

- Das Anzeigen eines `hint` Popovers schließt keine `auto` Popovers.
- Das Anzeigen eines `hint` Popovers schließt andere `hint` Popovers, außer denen, die seine Vorfahren im Hint-Stack sind.
- Klicken außerhalb eines Popovers blendet alle offenen `auto` und `hint` Popovers, die keine Vorfahren davon sind, leicht aus.
- Das Schließen eines `auto` Popovers schließt keine `hint` Popovers, die nicht dessen Nachfahren sind.
- Das Anzeigen eines `auto` Popovers als Kind eines `hint` Popovers stuft das `auto` Popover zu `hint` herunter.
- Das Anzeigen eines Popovers, während ein anderes gerade angezeigt oder verborgen wird, ist nicht gestattet.

Beachten Sie, dass `manual` Popovers in keinem der Stapel teilnehmen — sie werden unabhängig ein- und ausgeblendet und beeinflussen keine Auto- oder Hint-Popovers.

## Stil von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Popovers auswählen

Sie können alle Popovers mit einem einfachen Attribut-Selektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen spezifischen Popover-Typ auswählen, indem Sie einen Wert im Attribut-Selektor angeben:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die angezeigt werden, indem Sie die {{cssxref(":popover-open")}} Pseudo-Klasse verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Stil des Popover-Hintergrunds

Das {{cssxref("::backdrop")}} Pseudo-Element ist ein Vollbildelement, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Schicht")}} platziert wird. So können Effekte auf den Seiteninhalt hinter dem Popover hinzugefügt werden, wenn gewünscht. Sie könnten beispielsweise den Inhalt hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Siehe unser [Beispiel für einen unscharfen Hintergrund von Popovers](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)), um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Beim Betrachten der ersten paar Beispiele, die am Anfang des Artikels verlinkt sind, haben Sie vielleicht bemerkt, dass die Popovers in der Mitte des Viewports erscheinen, ihren Inhalt umschließen und eine schwarze Umrandung haben. Dies ist die Standardgestaltung, erreicht mit der folgenden Regel im UA-Stylesheet:

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

Um eine benutzerdefinierte Größe und Positionierung des Popovers an eine andere Stelle zu ermöglichen, könnten Sie die obigen Stile mit etwas wie diesem überschreiben:

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

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt zum Viewport oder einem positionierten Vorfahren positionieren möchten, können Sie von der Tatsache profitieren, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

Das Verknüpfen einer beliebigen Art von Popover mit seinem Invoker ([siehe weitere Möglichkeiten, um eine Popover-Initiator-Beziehung einzurichten](#andere_wege,_um_eine_popover-initiator-beziehung_einzurichten)) erstellt eine implizite Ankerreferenz zwischen den beiden. Dadurch wird der Invoker zum **Ankerelement** des Popovers, wodurch Sie das Popover relativ dazu mittels [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positionieren können.

Da die Assoziierung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Assoziierung mittels der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften gemacht werden. Sie müssen jedoch immer noch das Positionierungs-CSS angeben.

Beispielsweise könnten Sie eine Kombination aus {{cssxref("anchor()")}}-Funktionswerten auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} und `anchor-center`-Werten, die auf Ausrichtungseigenschaften gesetzt sind, verwenden:

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

Beim Verwenden von {{cssxref("position-area")}} oder {{cssxref("anchor()")}}, um Popovers zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position, die Sie erreichen möchten, in Konflikt stehen können. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, sodass es ratsam ist, diese zurückzusetzen, wie in den obigen Beispielen gezeigt. Die CSS-Arbeitsgruppe prüft [Möglichkeiten, um zu vermeiden, dass diese Lösung erforderlich ist](https://github.com/w3c/csswg-drafts/issues/10258).

Sehen Sie [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zu Verknüpfungen zwischen Anker- und positionierten Elementen und zum Positionieren von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, siehe unser [popover hint demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie den CSS-Code überprüfen, werden Sie sehen, dass keine expliziten Ankerassoziationen mittels der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften gemacht werden.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um das Popover daran zu hindern, an seinem Invoker verankert zu sein, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerassoziation](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Animieren von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie verborgen sind, und auf `display: block;`, wenn sie gezeigt werden, und werden zusätzlich aus der/zu der {{Glossary("top_layer", "obersten Ebene")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt oder hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen `display`-Wert wechseln, sodass der animierte Inhalt für die gesamte Dauer der Animation gezeigt wird. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, damit es die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wechselt der Wert zu `none` bei `100%` der Animationsdauer, damit es die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Merkmale erforderlich:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Bietet einen Satz von Startwerten für Eigenschaften, die auf das Popover gesetzt werden, von denen Sie möchten, dass der Übergang erfolgt, wenn es zum ersten Mal gezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element wechselt; sie werden nicht bei der ersten Stilaktualisierung eines Elements ausgelöst oder wenn sich der `display`-Typ von `none` in einen anderen ändert.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während des gesamten Übergangs `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zu der Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Schicht bis zum Abschluss des Übergangs verschoben wird, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das durch das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-HTML-Attribut als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung für das Popover bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die zwei Popover-Eigenschaften, die wir übergangsweise animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}. Wir möchten, dass das Popover beim Ein- oder Ausblenden verblasst, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf den versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attribut-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt durch die {{cssxref(":popover-open")}} Pseudoklasse). Wir verwenden auch die {{cssxref("transition")}}-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation festzulegen, während das Popover gezeigt oder verborgen wird.

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

Wie zuvor besprochen, haben wir zudem:

- Setzen Sie einen Anfangszustand für das `transition` innerhalb des `@starting-style` Blocks.
- Fügen Sie `display` zur Liste der übergangenen Eigenschaften hinzu, sodass das animierte Element während der Ein- und Ausblendeanimationen des Popovers sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Ausblendeanimation nicht sichtbar; effektiv würde das Popover einfach verschwinden.
- Fügen Sie `overlay` zur Liste der übergangenen Eigenschaften hinzu, um sicherzustellen, dass das Element erst nach Abschluss der Animation aus der obersten Schicht entfernt wird. Der Effekt dessen könnte bei einfachen Animationen wie dieser nicht bemerkbar sein, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- Setzen Sie `allow-discrete` bei beiden Eigenschaften in den obigen Übergängen, um [diskrete Übergänge](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) zu ermöglichen.

Sie werden bemerken, dass wir auch eine Überblendung beim Erscheinen des {{cssxref("::backdrop")}} hinter dem Popover integriert haben, wodurch eine schöne Abdunkelungsanimation bereitgestellt wird.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal, wenn sie gezeigt werden, von `display: none` zu `display: block` wechseln, geht das Popover bei jedem Einblenden-Übergang von seinen `@starting-style` zu seinen `[popover]:popover-open` Stilen über. Wenn das Popover geschlossen wird, erfolgt der Übergang von seinem `[popover]:popover-open` Zustand zu dem Standard-`[popover]` Zustand.
>
> Es ist möglich, dass sich der Stilübergang bei Ein- und Ausgang in solchen Fällen unterscheidet. Siehe unser [Demonstrationsbeispiel, wann Anfangsstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used), für einen Beweis hierfür.

### Eine Popover-Schlüsselbildanimation

Beim Animieren eines Popovers mit CSS-Schlüsselbildanimationen gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an; Sie fügen Ihre "von" und "zu" `display`-Werte in den Schlüsselbildern ein.
- Sie aktivieren keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` innerhalb von Schlüsselbildern nicht setzen; die `display`-Animation behandelt die Animation des Popovers von sichtbar zu unsichtbar.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung für das Popover bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Ein- und Ausanimationsvorgänge angeben, und nur eine Einanimationssequenz für das Backdrop. Beachten Sie, dass es nicht möglich war, das verblasste Ausblenden des Backdrops zu animieren - das Backdrop wird sofort entfernt, wenn das Popover geschlossen wird, sodass nichts zu animieren ist.

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

## Siehe auch

- Sammlung von [Popover-API-Beispielen](https://mdn.github.io/dom-examples/popover-api/)
