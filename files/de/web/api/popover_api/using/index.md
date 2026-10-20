---
title: Die Popover API verwenden
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 93149226b6b94a770731d262508f5c4aa10bcbed
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover API** bietet Entwicklern einen standardisierten, einheitlichen und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte lassen sich entweder deklarativ über HTML-Attribute oder mit JavaScript steuern. Dieser Artikel ist ein ausführlicher Leitfaden zur Verwendung aller Funktionen der API.

## Popovers deklarativ erstellen

In der einfachsten Form erstellen Sie ein Popover, indem Sie dem Element, das den Popover-Inhalt enthalten soll, das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) hinzufügen. Außerdem wird eine `id` benötigt, um das Popover seinen Steuerelementen zuzuordnen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Attribut `popover` ohne Wert zu setzen, ist gleichbedeutend mit `popover="auto"`.

Durch dieses Attribut wird das Element beim Laden der Seite ausgeblendet, indem {{cssxref("display", "display: none")}} darauf angewendet wird. Um das Popover ein- und auszublenden, benötigen Sie mindestens einen Steuerbutton, auch **Invoker** des Popovers genannt. Sie können ein {{htmlelement("button")}}-Element oder ein {{htmlelement("input")}}-Element mit `type="button"` als Steuerbutton für ein Popover festlegen, indem Sie ihm das Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) geben. Dessen Wert muss die ID des zu steuernden Popovers sein:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Standardmäßig fungiert der Button als Umschaltbutton: Durch wiederholtes Drücken wird das Popover abwechselnd ein- und ausgeblendet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) verwenden. Es akzeptiert die Werte `"hide"`, `"show"` oder `"toggle"`. Um beispielsweise getrennte Buttons zum Ein- und Ausblenden zu erstellen, können Sie Folgendes verwenden:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Wie das vorherige Codebeispiel dargestellt wird, sehen Sie in unserem [einfachen Beispiel für ein deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)).

> [!NOTE]
> Wenn das Attribut `popovertargetaction` fehlt, führt ein Steuerbutton standardmäßig die Aktion `"toggle"` aus.

Wenn ein Popover angezeigt wird, wird `display: none` von ihm entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} verschoben. Dadurch liegt es über allen anderen Seiteninhalten.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`. Sie sind jedoch allgemeiner ausgelegt und sollen neben Popover-Befehlen auch andere Funktionen ermöglichen, einschließlich benutzerdefinierter Befehle.

Das vorherige Codebeispiel könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Der Zustand „auto“ und „Light Dismiss“

Wenn ein Popover-Element wie oben gezeigt mit `popover` oder `popover="auto"` versehen ist, befindet es sich im **Zustand „auto“**. Dabei sind folgende Verhaltensweisen wichtig:

- Das Popover kann per „Light Dismiss“ geschlossen werden. Das bedeutet, dass Sie es durch einen Klick außerhalb des Popovers ausblenden können.
- Das Popover kann auch über browserspezifische Mechanismen geschlossen werden, beispielsweise durch Drücken der Taste <kbd>Esc</kbd>.
- Normalerweise kann jeweils nur ein `auto`-Popover angezeigt werden. Wenn bereits eines angezeigt wird und Sie ein zweites öffnen, wird das erste ausgeblendet. Eine Ausnahme bilden verschachtelte `auto`-Popovers. Weitere Einzelheiten finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> [!NOTE]
> Popovers mit `popover="auto"` werden auch geschlossen, wenn [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) oder [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) für andere Elemente im Dokument erfolgreich aufgerufen wird. Beachten Sie jedoch, dass Aufrufe dieser Methoden für ein bereits angezeigtes Popover fehlschlagen: Dieses Verhalten ist für ein bereits angezeigtes Popover nicht sinnvoll. Sie können die Methoden aber für ein Element mit dem Attribut `popover` aufrufen, das gerade nicht angezeigt wird.

Der Zustand „auto“ ist nützlich, wenn Sie jeweils nur ein Popover anzeigen möchten. Vielleicht möchten Sie mehrere erklärende UI-Hinweise anzeigen, ohne dass die Darstellung unübersichtlich wird. Oder Sie zeigen Statusmeldungen an, bei denen eine neue Meldung die vorherige ersetzt.

Das beschriebene Verhalten können Sie in unserem [Beispiel mit mehreren auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ausprobieren ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)). Schließen Sie die angezeigten Popovers per Light Dismiss und beobachten Sie, was geschieht, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Barrierefreiheitsfunktionen für Popovers

Wenn über das Attribut `popovertarget` eine Beziehung zwischen einem Popover und seinem Steuerelement (Invoker) hergestellt wird, nimmt die API automatisch zwei weitere Änderungen vor. Dadurch können Personen, die eine Tastatur oder assistive Technologien (AT) verwenden, leichter mit dem Popover interagieren:

- Wenn das Popover angezeigt wird, wird die Reihenfolge der Tastaturfokusnavigation so angepasst, dass das Popover als Nächstes folgt. Wird beispielsweise ein Button gedrückt, um ein Popover anzuzeigen, sind die Buttons im Popover als Nächstes in der Tab-Reihenfolge und erhalten beim Drücken von <kbd>Tab</kbd> den Fokus. Wird das Popover dagegen über die Tastatur geschlossen, üblicherweise mit <kbd>Esc</kbd>, kehrt der Fokus zum Invoker zurück.
- Damit assistive Technologien wie Screenreader die Beziehung zwischen Invoker und Popover erkennen können, wird zwischen ihnen implizit eine Beziehung über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) hergestellt.

Wenn Sie auf diese Weise eine Beziehung zwischen einem Popover und seinem Steuerelement herstellen, entsteht außerdem eine implizite Ankerreferenz zwischen beiden. Weitere Einzelheiten finden Sie unter [Popover-Positionierung mit Ankern](#popover-positionierung_mit_ankern).

## Weitere Möglichkeiten, eine Beziehung zwischen Popover und Invoker herzustellen

Neben dem Attribut `popovertarget` können Sie eine Beziehung zwischen Popover und Invoker auch auf andere Weise herstellen:

- Über die Option `source` der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Reihenfolge der Fokusnavigation angepasst wird. Eine implizite ARIA-Beziehung wird nicht hergestellt. Der Grund dafür ist, dass sich `source` auf jede Art von Element beziehen kann, nicht nur auf `<button>`-Elemente. Daher lässt sich nicht garantieren, dass eine solche Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seiner Dropdown-Auswahl, wenn Sie über den Wert `base-select` der Eigenschaft {{cssxref("appearance")}} die Funktionalität eines [anpassbaren select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) aktivieren. In diesem Fall wird zwischen den beiden implizit eine Popover-Invoker-Beziehung hergestellt.

## Den Popover-Zustand „manual“ verwenden

Eine Alternative zum Zustand „auto“ ist der **Zustand „manual“**. Sie aktivieren ihn, indem Sie für Ihr Popover-Element `popover="manual"` setzen:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand gilt:

- Das Popover kann nicht per Light Dismiss geschlossen werden. Deklarative Buttons zum Einblenden, Ausblenden und Umschalten funktionieren jedoch weiterhin.
- Mehrere voneinander unabhängige Popovers können gleichzeitig angezeigt werden.

Dieses Verhalten können Sie in unserem [Beispiel mit mehreren manual-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ausprobieren ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)).

## Die Ereignisse `beforetoggle` und `toggle`

Mit den Ereignissen [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) können Sie darauf reagieren, dass ein Popover ein- oder ausgeblendet wird:

- `beforetoggle` wird unmittelbar vor dem Ein- oder Ausblenden eines Popovers ausgelöst. Sie können damit beispielsweise das Ein- oder Ausblenden verhindern, indem Sie [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) verwenden, dem Popover Animationsklassen hinzufügen oder seinen Zustand nach der Verwendung bereinigen.
- `toggle` wird unmittelbar nach dem Ein- oder Ausblenden eines Popovers ausgelöst. Es wird üblicherweise verwendet, um weiteren Code auszuführen, wenn sich der Anzeigezustand eines Popovers ändert.

Beide Ereignisse besitzen ein Ereignisobjekt vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Zusätzlich zu den vom regulären [`Event`](/de/docs/Web/API/Event)-Objekt geerbten Funktionen bietet dieses Ereignis Folgendes:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, von welchem Zustand in welchen Zustand das Popover gerade gewechselt ist. So können Sie gezielt auf das Öffnen oder Schließen reagieren.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält eine Referenz auf das HTML-Steuerelement des Popovers, das den Zustandswechsel ausgelöst hat. Damit können Sie abhängig vom auslösenden Steuerelement unterschiedlichen Code ausführen.

Eine typische Verwendung könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Beachten Sie, dass Aufrufe von [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) oder [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) innerhalb eines `beforetoggle`-Event-Listeners nicht zulässig sind, während ein anderes Popover bereits ein- oder ausgeblendet wird. Solche Aufrufe lösen eine `InvalidStateError`-`DOMException` aus.

Weitere Informationen und Beispiele finden Sie unter den vorherigen Referenzlinks.

## Popovers mit JavaScript anzeigen

Sie können Popovers auch über eine JavaScript-API steuern.

Mit der Eigenschaft [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover) können Sie das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) auslesen oder setzen. So können Sie per JavaScript ein Popover erstellen. Die Eigenschaft eignet sich außerdem zur Funktionserkennung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Entsprechend gilt:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) entsprechen dem Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget). Damit können Sie die Steuerbuttons für ein Popover festlegen. Als Eigenschaftswert dient allerdings eine Referenz auf das zu steuernde Popover-DOM-Element.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) entsprechen dem globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction). Damit können Sie festlegen, welche Aktion ein Steuerbutton ausführt.

Mit diesen drei Eigenschaften können Sie ein Popover und seinen Steuerbutton programmatisch einrichten:

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

Außerdem stehen Ihnen mehrere Methoden zum Ein- und Ausblenden zur Verfügung:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Einblenden eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Ausblenden eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zum Umschalten des Anzeigezustands eines Popovers.

Vielleicht möchten Sie beispielsweise ein Hilfe-Popover durch Klicken auf einen Button oder durch Drücken einer bestimmten Taste ein- und ausblenden. Die Steuerung per Button lässt sich deklarativ oder, wie oben gezeigt, mit JavaScript umsetzen.

Für die Tastatursteuerung könnten Sie einen Event-Handler erstellen, der zwei getrennte Tasten verarbeitet: eine zum Öffnen und eine zum Schließen des Popovers.

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu prüfen, ob ein Popover gerade angezeigt wird. Die Pseudoklasse {{cssxref(":popover-open")}} trifft nur auf Popovers zu, die gerade angezeigt werden. Diese Prüfung ist wichtig, um Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover einzublenden oder ein bereits ausgeblendetes Popover auszublenden.

Alternativ können Sie eine einzige Taste so einrichten, dass sie das Popover sowohl ein- _als auch_ ausblendet:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Unser [Beispiel für eine umschaltbare Hilfeoberfläche](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) zeigt die JavaScript-Eigenschaften für Popovers, die Funktionserkennung und die Methode `togglePopover()` in Aktion ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)).

## Verschachtelte Popovers

Von der Regel, dass nicht mehrere auto-Popovers gleichzeitig angezeigt werden können, gibt es eine Ausnahme: ineinander verschachtelte Popovers. Aufgrund ihrer Beziehung zueinander dürfen in diesem Fall mehrere Popovers gleichzeitig geöffnet sein. So lassen sich beispielsweise verschachtelte Popover-Menüs umsetzen.

Es gibt drei Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Als direkte DOM-Nachfahren:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über Invoker- oder Steuerelemente:

   ```html
   <div popover>
     Parent
     <button popovertarget="foo">Click me</button>
   </div>

   <div popover id="foo">Child</div>
   ```

3. Über das Attribut `anchor`:

   ```html
   <div popover id="foo">Parent</div>

   <div popover anchor="foo">Child</div>
   ```

> [!NOTE]
> Ein `auto`-Popover kann im [auto-Popover-Stack](#popover_openclose_interaction_rules) kein `hint`-Popover als übergeordnetes Element haben. Es kann jedoch `auto`- oder `hint`-Popovers enthalten.
> Wenn ein `auto`-Popover strukturell in einem `hint`-Popover verschachtelt ist – etwa als dessen DOM-Nachfahre oder weil sich sein Invoker darin befindet –, stuft der Browser den effektiven Typ des `auto`-Popovers automatisch auf `hint` herab und behandelt es entsprechend.

Ein Beispiel finden Sie in unserem [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)). Dort werden mehrere Event-Handler verwendet, um das Unter-Popover bei Maus- und Tastaturbedienung passend ein- und auszublenden. Außerdem werden beide Menüs ausgeblendet, wenn in einem der Menüs eine Option ausgewählt wird. Je nachdem, wie Sie neue Inhalte in einer SPA oder einer mehrseitigen Website laden, benötigen Sie möglicherweise nicht alle diese Handler. Im Beispiel dienen sie der Veranschaulichung.

### Untermenüs mit `popover="auto"` erstellen

Die aufklappbaren Untermenüs werden deklarativ als `auto`-Popovers erstellt.

Zuerst die Steuerbuttons:

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

Dann die Popovers selbst:

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

## Den Popover-Zustand „hint“ verwenden

Sie können einen dritten Popover-Typ erstellen: **hint-Popovers**. Dazu setzen Sie für Ihr Popover-Element `popover="hint"`.
Sie lassen sich per Light Dismiss schließen und reagieren auf Schließanforderungen.

Wenn `hint`-Popovers angezeigt werden, schließen sie keine `auto`-Popovers. Sie schließen jedoch andere `hint`-Popovers, sofern diese nicht ihre Vorfahren im [hint-Stack](#popover_openclose_interaction_rules) sind.
Umgekehrt wirkt sich das Schließen eines `auto`-Popovers mit <kbd>Esc</kbd> oder per Light Dismiss nicht auf `hint`-Popovers aus, sofern diese keine Nachfahren des geschlossenen auto-Popovers sind.

Das ist beispielsweise nützlich, wenn Buttons in einer Symbolleiste beim Drücken UI-Popovers öffnen sollen, während beim Bewegen des Mauszeigers über die Buttons zusätzlich Tooltips erscheinen sollen, ohne die UI-Popovers zu schließen.

`hint`-Popovers werden häufig als Reaktion auf JavaScript-Ereignisse angezeigt und ausgeblendet, die keine Klickereignisse sind, etwa [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event).
Sie können ein `hint`-Popover auch per Buttonklick öffnen. Der Klick schließt jedoch alle `auto`-Popovers per Light Dismiss, außerhalb derer sich der Button befindet – was wahrscheinlich nicht beabsichtigt ist.

Unsere [Demo zu hint-Popovers](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) verhält sich genau wie beschrieben. Sie enthält eine Buttonleiste: Beim Drücken öffnen die Buttons aufklappbare `auto`-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn sich der Mauszeiger über einem Button befindet oder der Button den Fokus erhält, erscheint zusätzlich ein Tooltip (`hint`-Popover), der seine Funktion erklärt. Ein bereits angezeigtes Untermenü bleibt dabei geöffnet.

In den folgenden Abschnitten gehen wir die wichtigsten Teile des Codes durch.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, auch wenn es dafür kaum einen Grund gibt. `hint`-Popovers wurden entwickelt, um einige Einschränkungen von `auto`-Popovers zu umgehen und Anwendungsfälle wie den hier beschriebenen zu ermöglichen.
>
> Beachten Sie außerdem, dass `popover="hint"` in Browsern ohne entsprechende Unterstützung auf `popover="manual"` zurückfällt.

> [!NOTE]
> Eine verwandte Funktion sind **Interest Invokers**. Mit ihnen können Sie Popovers bei Hover oder Fokus bequem und einheitlich öffnen, ohne JavaScript zu benötigen. Weitere Informationen finden Sie unter [Interest Invokers verwenden](/de/docs/Web/API/Popover_API/Using_interest_invokers).

### Tooltips mit `popover="hint"` erstellen

Die Untermenü-Popovers funktionieren bereits: Sie öffnen sich, wenn die Buttons der Symbolleiste gedrückt werden. Wie zeigen wir zusätzlich Tooltips an, wenn sich der Mauszeiger über einem Button befindet oder er den Fokus erhält? Zuerst erstellen wir die Tooltips in HTML als `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im [Quellcode der Demo](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) sind die Tooltips in den Steuerbuttons der Popovers verschachtelt. Das verbessert das Fallback-Verhalten in Browsern, die CSS-Anchor-Positioning nicht unterstützen: Die `hint`-Popovers erscheinen neben den zugehörigen Steuerbuttons statt an einer völlig anderen Stelle.

Zum Ein- und Ausblenden benötigen wir JavaScript. Zunächst rufen wir mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) Referenzen auf die `hint`-Popovers und die Steuerbuttons ab und speichern sie in zwei getrennten [`NodeList`](/de/docs/Web/API/NodeList)-Objekten:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Anschließend erstellen wir die Funktion `addEventListeners()`. Sie registriert mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) vier Event-Listener für ein {{htmlelement("button")}}-Element, das über einen bestimmten Index aus der `btns`-`NodeList` ausgewählt wird. Die Funktionen steuern das `hint`-Popover mit demselben Index in der `tooltips`-`NodeList`. So bleiben Buttons und Tooltips einander zugeordnet, und bei einer Interaktion mit einem Button wird der richtige Tooltip ein- oder ausgeblendet.

Die Event-Listener [blenden das Popover ein](/de/docs/Web/API/HTMLElement/showPopover), wenn [`mouseover`](/de/docs/Web/API/Element/mouseover_event) oder [`focus`](/de/docs/Web/API/Element/focus_event) ausgelöst wird, und [blenden es aus](/de/docs/Web/API/HTMLElement/hidePopover), wenn [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`blur`](/de/docs/Web/API/Element/blur_event) ausgelöst wird. Dadurch sind die Tooltips sowohl mit der Maus als auch mit der Tastatur zugänglich.

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

Zum Schluss durchlaufen wir mit einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife die `<button>`-Elemente in der `btns`-`NodeList` und rufen für jedes Element `addEventListeners()` auf. So erhalten alle Buttons die vorgesehenen Event-Listener.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Interaktionsregeln beim Öffnen und Schließen von Popovers

Der Browser verwaltet zwei voneinander unabhängige Stacks geöffneter Popovers: einen **auto-Stack** für `auto`-Popovers und einen **hint-Stack** für `hint`-Popovers.
Wenn ein Popover angezeigt wird, wird es auf den entsprechenden Stack gelegt. Beim Ausblenden durchläuft der Browser diesen Stack rückwärts und schließt zuerst alle dort enthaltenen untergeordneten Popovers.
Da die beiden Stacks getrennt sind, wirken sich Aktionen auf einem Stack nicht automatisch auf den anderen aus.

Aus dieser Festlegung ergeben sich unter anderem folgende Regeln für die Interaktion zwischen Popovers:

- Das Anzeigen eines `hint`-Popovers schließt keine `auto`-Popovers.
- Das Anzeigen eines `hint`-Popovers schließt andere `hint`-Popovers, sofern diese nicht seine Vorfahren im hint-Stack sind.
- Ein Klick außerhalb eines Popovers schließt per Light Dismiss alle geöffneten `auto`- und `hint`-Popovers, die keine Vorfahren des angeklickten Popovers sind.
- Das Ausblenden eines `auto`-Popovers schließt keine `hint`-Popovers, die nicht seine Nachfahren sind.
- Wenn ein `auto`-Popover als Kind eines `hint`-Popovers angezeigt wird, wird es auf den Typ `hint` herabgestuft.
- Das Anzeigen eines Popovers ist nicht zulässig, während ein anderes gerade ein- oder ausgeblendet wird.

`manual`-Popovers gehören zu keinem der beiden Stacks. Sie werden unabhängig ein- und ausgeblendet und wirken sich nicht auf auto- oder hint-Popovers aus.

## Popovers gestalten

Dieser Abschnitt behandelt einige CSS-Techniken zur Auswahl und Positionierung von Popovers.

### Popovers auswählen

Mit einem einfachen Attributselektor können Sie alle Popovers auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Wenn Sie einen bestimmten Popover-Typ auswählen möchten, geben Sie im Attributselektor einen Wert an:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Mit der Pseudoklasse {{cssxref(":popover-open")}} wählen Sie nur Popovers aus, die gerade angezeigt werden:

```css
:popover-open {
  /* Declarations here */
}
```

### Den Hintergrund eines Popovers gestalten

Das Pseudoelement {{cssxref("::backdrop")}} ist ein bildschirmfüllendes Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} liegt. Damit können Sie bei Bedarf Effekte auf den Seiteninhalt hinter den Popovers anwenden. Beispielsweise können Sie den Inhalt hinter einem Popover weichzeichnen, um die Aufmerksamkeit darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Wie das aussehen kann, zeigt unser [Beispiel mit weichgezeichnetem Popover-Hintergrund](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)).

### Popovers positionieren

Bei den ersten Beispielen, die am Anfang des Artikels verlinkt sind, ist Ihnen vielleicht aufgefallen, dass die Popovers in der Mitte des Viewports erscheinen, ihre Inhalte umschließen und einen schwarzen Rahmen haben. Das ist die Standardgestaltung, die durch folgende Regel im UA-Stylesheet entsteht:

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

Um eine eigene Größe festzulegen und das Popover an anderer Stelle zu positionieren, können Sie diese Styles beispielsweise so überschreiben:

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

Ein eigenständiges Beispiel dafür finden Sie in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)).

### Popover-Positionierung mit Ankern

Die Popover API bietet noch eine weitere nützliche Möglichkeit zur Positionierung. Wenn Sie ein Popover relativ zu seinem Invoker statt relativ zum Viewport oder zu einem positionierten Vorfahren platzieren möchten, können Sie die **implizite Ankerreferenz** zwischen Popover und Invoker nutzen.

Wenn Sie [ein Popover beliebigen Typs seinem Invoker zuordnen](#weitere_möglichkeiten,_eine_beziehung_zwischen_popover_und_invoker_herzustellen), entsteht zwischen beiden eine implizite Ankerreferenz. Der Invoker wird dadurch zum **Ankerelement** des Popovers. Mit [CSS-Anchor-Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) können Sie das Popover relativ zu diesem Element positionieren.

Da die Zuordnung zwischen Popover und Invoker implizit ist, müssen Sie den Anker nicht mit {{cssxref("anchor-name")}} benennen. Wenn Sie das Popover mit {{cssxref("position-area")}} positionieren, wird der implizite Anker automatisch verwendet. Wenn Sie dagegen {{cssxref("anchor()")}} oder `anchor-center` verwenden, müssen Sie dies mit `position-anchor: auto` aktivieren. Der Anfangswert von {{cssxref("position-anchor")}} ist `normal`; solange `position-area` auf `none` steht, verhält er sich wie `none`.

Sie können beispielsweise einen Wert der Funktion `anchor()` für eine {{Glossary("inset_properties", "Inset-Eigenschaft")}} mit dem Wert `anchor-center` für eine Ausrichtungseigenschaft kombinieren:

```css
.my-popover {
  margin: 0;
  position-anchor: auto;
  top: calc(anchor(bottom) + 10px);
  justify-self: anchor-center;
}
```

Oder Sie verwenden die Eigenschaft {{cssxref("position-area")}}:

```css
.my-popover {
  position-area: top;
}
```

Wenn Sie Popovers mit `anchor()` und `anchor-center` positionieren, beachten Sie, dass [die Standard-Styles für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) Ihrer gewünschten Positionierung entgegenwirken können. Häufig liegt das am Standardwert `auto` für {{cssxref("margin")}}. Setzen Sie `margin` für das Popover am besten auf `0` oder, wenn Sie Abstand zwischen dem positionierten Element und dem Anker wünschen, auf einen positiven `<length>`-Wert. So funktioniert die Positionierung wie erwartet. Ein Beispiel dafür sehen Sie im ersten Codebeispiel dieses Abschnitts.

Bei Popovers, die mit {{cssxref("position-area")}} positioniert werden, tritt dieses Problem nicht auf. Für jedes Element, dessen `position-area` auf einen anderen Wert als `none` gesetzt ist, wird der verwendete Wert von `auto` für `margin` und {{Glossary("Inset_properties", "Inset-Eigenschaften")}} zu `0` aufgelöst.

Weitere Informationen zur Zuordnung von Anker- und positionierten Elementen sowie zur Positionierung relativ zu einem Anker finden Sie unter [CSS-Anchor-Positioning verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor).

> [!NOTE]
> Ein Beispiel für diese implizite Zuordnung finden Sie in unserer [Demo zu hint-Popovers](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Im CSS-Code sehen Sie Beispiele sowohl mit `position-area` als auch mit `anchor()`/`anchor-center`.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, damit das Popover nicht mehr an seinem Invoker verankert ist, setzen Sie die Eigenschaft `position-anchor` des Popovers auf `none` oder auf einen Ankernamen, der im aktuellen Dokument nicht existiert, beispielsweise `--not-an-anchor-name`. Siehe auch [Eine Ankerzuordnung entfernen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Popovers animieren

Ausgeblendete Popovers haben `display: none;`, angezeigte Popovers dagegen `display: block;`. Außerdem werden sie aus der {{Glossary("top_layer", "obersten Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt beziehungsweise ihnen hinzugefügt. Damit Popovers animiert werden können, muss daher die Eigenschaft {{cssxref("display")}} animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Konkret wechselt der Browser so zwischen `none` und einem anderen `display`-Wert, dass der animierte Inhalt während der gesamten Animation sichtbar bleibt. Zum Beispiel:

- Bei einer Animation von `display` von `none` zu `block` oder einem anderen sichtbaren `display`-Wert erfolgt der Wechsel zu `block` bei `0%` der Animationsdauer. So bleibt der Inhalt durchgehend sichtbar.
- Bei einer Animation von `display` von `block` oder einem anderen sichtbaren `display`-Wert zu `none` erfolgt der Wechsel zu `none` bei `100%` der Animationsdauer. So bleibt der Inhalt ebenfalls während der gesamten Animation sichtbar.

> [!NOTE]
> Bei Animationen mit [CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions) müssen Sie [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) setzen, um dieses Verhalten zu aktivieren. Bei [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist es standardmäßig verfügbar; ein entsprechender zusätzlicher Schritt ist nicht erforderlich.

### Ein Popover mit Transitions animieren

Wenn Sie Popovers mit CSS-Transitions animieren, benötigen Sie folgende Funktionen:

- Die At-Regel {{CSSxRef("@starting-style")}}
  - : Sie stellt Anfangswerte für die Eigenschaften des Popovers bereit, von denen aus die Transition beim ersten Anzeigen beginnen soll. Das verhindert unerwartetes Verhalten. Standardmäßig treten CSS-Transitions nur auf, wenn sich eine Eigenschaft eines sichtbaren Elements von einem Wert zu einem anderen ändert. Bei der ersten Aktualisierung der Styles eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ werden sie nicht ausgelöst.
- Die Eigenschaft {{CSSxRef("display")}}
  - : Nehmen Sie `display` in die Liste der Transitions auf, damit das Popover während der gesamten Transition `display: block` oder einen anderen sichtbaren `display`-Wert behält. So bleiben die anderen Transitions sichtbar.
- Die Eigenschaft {{CSSxRef("overlay")}}
  - : Nehmen Sie `overlay` in die Liste der Transitions auf, damit das Popover erst nach Abschluss der Transition aus der obersten Ebene entfernt wird. Auch das sorgt dafür, dass die Transition sichtbar bleibt.
- Die Eigenschaft {{cssxref("transition-behavior")}}
  - : Setzen Sie `transition-behavior: allow-discrete` für die Transitions von `display` und `overlay` oder für die Kurzschreibweise {{cssxref("transition")}}. Damit ermöglichen Sie diskrete Transitions für diese beiden Eigenschaften, die standardmäßig nicht animierbar sind.

Sehen wir uns an einem Beispiel an, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert wird, sowie ein {{htmlelement("button")}}-Element, das zum Ein- und Ausblenden des Popovers dient:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir animieren möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}. Das Popover soll ein- beziehungsweise ausgeblendet werden und sich dabei horizontal vergrößern oder verkleinern. Dazu legen wir einen Anfangszustand für diese Eigenschaften fest, wenn das Popover-Element ausgeblendet ist. Diesen Zustand wählen wir mit dem `[popover]`-[Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) aus. Für den angezeigten Zustand legen wir einen Endzustand fest, den wir über die Pseudoklasse {{cssxref(":popover-open")}} auswählen. Mit der Eigenschaft {{cssxref("transition")}} definieren wir außerdem die zu animierenden Eigenschaften und die Dauer der Animation beim Ein- und Ausblenden.

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

Wie oben erläutert, haben wir außerdem:

- im Block `@starting-style` einen Anfangszustand für `transition` festgelegt.
- `display` zur Liste der animierten Eigenschaften hinzugefügt, damit das animierte Element während der Animation beim Öffnen und Schließen des Popovers sichtbar bleibt (`display: block`). Ohne dies wäre die Animation beim Schließen nicht sichtbar; das Popover würde praktisch einfach verschwinden.
- `overlay` zur Liste der animierten Eigenschaften hinzugefügt, damit das Element erst nach Abschluss der Animation aus der obersten Ebene entfernt wird. Bei einfachen Animationen wie dieser fällt der Unterschied möglicherweise nicht auf. In komplexeren Fällen kann das Weglassen dieser Eigenschaft jedoch dazu führen, dass das Element vor Abschluss der Transition aus der obersten Ebene entfernt wird.
- für beide oben genannten Eigenschaften `allow-discrete` gesetzt, um [diskrete Transitions](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch für das beim Öffnen hinter dem Popover erscheinende {{cssxref("::backdrop")}} eine Transition hinzugefügt haben. So entsteht ein ansprechender Abdunklungseffekt.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wird das Popover bei jeder Öffnungs-Transition von den Styles in `@starting-style` zu den Styles in `[popover]:popover-open` animiert. Beim Schließen erfolgt die Transition vom Zustand `[popover]:popover-open` zum Standardzustand `[popover]`.
>
> Die Style-Transitions beim Öffnen und Schließen können sich daher unterscheiden. Das zeigt unser Beispiel zur [Veranschaulichung der Verwendung von Anfangs-Styles](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used).

### Ein Popover mit Keyframes animieren

Wenn Sie ein Popover mit CSS-Keyframe-Animationen animieren, gibt es einige Unterschiede:

- Sie verwenden kein `@starting-style`, sondern geben die „to“- und „from“-Werte für `display` in Keyframes an.
- Sie müssen diskrete Animationen nicht ausdrücklich aktivieren; innerhalb von Keyframes gibt es keine Entsprechung zu `allow-discrete`.
- Sie müssen auch `overlay` nicht in Keyframes festlegen. Die Animation von `display` übernimmt den Wechsel des Popovers vom angezeigten zum ausgeblendeten Zustand.

Sehen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, sowie ein {{htmlelement("button")}}-Element, das zum Ein- und Ausblenden des Popovers dient:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes für die gewünschten Animationen beim Öffnen und Schließen sowie eine Animation nur für das Einblenden des Hintergrunds definiert. Das Ausblenden des Hintergrunds ließ sich nicht animieren: Beim Schließen des Popovers wird der Hintergrund sofort aus dem DOM entfernt, sodass nichts mehr animiert werden kann.

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

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}

## Siehe auch

- Sammlung von [Beispielen zur Popover API](https://mdn.github.io/dom-examples/popover-api/)
