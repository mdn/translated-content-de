---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: dc01d3966f382cb0f07f7c583969fb2c39857ef3
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten, flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller ihrer Funktionen.

## Deklarative Popovers erstellen

In ihrer einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das den Popover-Inhalt enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite versteckt wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen oder zu verbergen, müssen Sie mindestens eine Steuertaste (auch als Popover-**Invoker** bekannt) hinzufügen. Sie können eine {{htmlelement("button")}} (oder {{htmlelement("input")}} vom `type="button"`) als Popover-Steuerungstaste festlegen, indem Sie ihr ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass die Schaltfläche eine Umschalttaste ist — durch wiederholtes Drücken wird das Popover zwischen Anzeigen und Ausblenden umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden — dieses nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Schaltflächen zum Anzeigen und Ausblenden zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der obige Codeausschnitt in unserem [Beispiel für ein einfaches deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) dargestellt wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einer Steuertaste ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} eingefügt, sodass es über allen anderen Seiteninhalten sitzt.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das darauf abzielt, andere Funktionalitäten über Popover-Befehle hinaus bereitzustellen, einschließlich benutzerdefinierter Befehle.

Der vorhergehende Codeausschnitt könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt eingestellt ist, sagt man, es habe einen **Auto-Zustand**. Die beiden wichtigen Verhaltensweisen, die bezüglich des Auto-Zustands zu beachten sind:

- Das Popover kann "light dismissed" werden — das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken.
- Das Popover kann auch durch browserspezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Eine Ausnahme von dieser Regel liegt vor, wenn Sie verschachtelte Auto-Popovers haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) bei anderen Elementen im Dokument geschlossen. Bedenken Sie jedoch, dass das Aufrufen dieser Methoden bei einem bereits angezeigten Popover zu einem Fehler führt, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Ein Auto-Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere UI-Lehrnachrichten, die Sie anzeigen möchten, aber nicht möchten, dass die Anzeige überladen und verwirrend wird, oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) in Aktion sehen. Versuchen Sie, die Popovers nach dem Anzeigen "light dismissed" zu machen, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Zugänglichkeitsmerkmale

Wenn über das `popovertarget`-Attribut eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und unterstützenden Technologie-Nutzern (AT) das einfachere Interagieren mit dem Popover zu ermöglichen:

- Wenn das Popover angezeigt wird, wird die Reihenfolge der Tabulatorsteuerung aktualisiert, sodass das Popover als nächstes in der Sequenz erscheint: Zum Beispiel, wenn eine Schaltfläche gedrückt wird, um ein Popover anzuzeigen, werden alle Schaltflächen im Popover als nächstes in der Tabulatorreihenfolge (durch Drücken der <kbd>Tab</kbd>-Taste fokussiert) angezeigt. Umgekehrt wird der Fokus beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) zurück zum Invoker verschoben.
- Um AT wie Bildschirmlesern zu ermöglichen, die Beziehung zwischen dem Invoker und dem Popover besser zu verstehen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Die Einrichtung einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise schafft auch einen impliziten Ankerverweis zwischen den beiden — siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung herzustellen

Sie können eine Popover-Invoker-Beziehung auch auf andere Weise herstellen, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Mit der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Änderungen der Fokusrichtung vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und dessen Dropdown-Picker, wenn es über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` in die [anpassbare Auswahl](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)-Funktionalität integriert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden hergestellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "light dismissed" werden, auch wenn deklarative Show/Hide/Toggle-Schaltflächen (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle`- und `toggle`-Ereignisse

Sie können auf das Anzeigen oder Ausblenden eines Popovers mit den Veranstaltungen [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) reagieren:

- `beforetoggle` wird direkt vor dem Anzeigen oder Ausblenden eines Popovers ausgelöst. Dies kann beispielsweise verwendet werden, um das Anzeigen oder Ausblenden des Popovers zu verhindern (durch Verwendung von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach dessen Verwendung zu bereinigen.
- `toggle` wird direkt nach dem Anzeigen oder Ausblenden eines Popovers ausgelöst. Dies wird im Allgemeinen verwendet, um anderen Code als Reaktion auf das Ändern des Umschaltzustands des Popovers auszuführen.

Beide Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis weist zusätzlich zu den vom Standard-[`Event`](/de/docs/Web/API/Event)-Objekt geerbten Eigenschaften folgende Merkmale auf:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, von welchem Zustand das Popover gerade gewechselt hat und in welchen es wechselt, sodass Sie speziell auf das Öffnen oder Schließen eines Popovers reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält einen Verweis auf das HTML-Popover-Steuerelementelement, das das Umschalten initiiert hat, sodass Sie verschiedenen Code als Reaktion auf das Umschalt-Ereignis ausführen können, abhängig davon, welches Steuerelement ihn initiiert hat.

Die typische Verwendung könnte folgendermaßen aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Weitere Informationen und Beispiele finden Sie in den vorherigen Referenzlinks.

## Popovers über JavaScript anzeigen

Sie können Popovers auch mit einer JavaScript-API steuern.

Die Eigenschaft [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover) kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch nützlich für die Funktionsprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), mit dem Sie die Steuertaste(n) für ein Popover einrichten können, obwohl der Wert der Eigenschaft ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), mit dem Sie die von einer Steuertaste durchgeführte Aktion spezifizieren können.

Indem Sie diese drei zusammenführen, können Sie ein Popover und seine Steuertaste programmgesteuert wie folgt einrichten:

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

Sie haben auch mehrere Methoden, um das Anzeigen und Verbergen zu steuern:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), um ein Popover umzuschalten.

Zum Beispiel könnten Sie die Möglichkeit bereitstellen wollen, ein Hilfe-Popover durch Klicken auf eine Schaltfläche oder durch Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Die erste könnte deklarativ erreicht werden, oder Sie könnten es mithilfe von JavaScript wie oben gezeigt tun.

Für die zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine zum Öffnen des Popovers und eine zum erneuten Schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse stimmt nur dann mit Popovers überein, wenn sie momentan angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits verstecktes Popover auszublenden.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover sowohl zu zeigen _als auch_ zu verbergen, so wie dies:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Siehe unser [Toggle-Hilfe-UI-Beispiel](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)), um die Popover-JavaScript-Eigenschaften, die Funktionsprüfung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere Auto-Popovers gleichzeitig angezeigt werden dürfen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachfolger:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über Aufruf-/Steuerelemente:

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

Unser [Beispiel für verschachtelte Popover-Menüs](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) zeigt ein Beispiel. Sie werden feststellen, dass ziemlich viele Ereignishandler verwendet wurden, um das Unter-Popover während der Maus- und Tastatur-interaktion entsprechend anzuzeigen und zu verbergen, und auch um beide Menüs zu verbergen, wenn eine Option aus einem der beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte handhaben, sei es in einer SPA oder einer mehrseitigen Website, sind möglicherweise nicht alle erforderlich, aber sie wurden in diesem Demo zu Veranschaulichungszwecken aufgenommen.

## Verwendung des "hint"-Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hinweis-Popovers**, die durch Setzen von `popover="hint"` auf Ihr Popover-Element gekennzeichnet sind. `hint`-Popovers schließen `auto`-Popovers nicht, wenn sie angezeigt werden, sondern schließen andere `hint`-Popovers. Sie können "light dismissed" werden und auf Schließanforderungen reagieren.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Symbolleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber auch Tooltips anzeigen möchten, wenn die Schaltflächen angefahren werden, ohne dass die UI-Popovers geschlossen werden.

`hint`-Popovers neigen dazu, als Reaktion auf nicht klickbasierte JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) ein- und ausgeblendet zu werden. Das Klicken einer Schaltfläche zum Öffnen eines `hint`-Popovers würde ein geöffnetes `auto`-Popover "light-dismissen".

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau so funktioniert, wie oben beschrieben. Das Demo enthält eine Schaltflächenleiste; wenn gedrückt, zeigen die Schaltflächen `auto`-Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn jedoch über ihnen gehovert oder sie fokussiert werden, zeigen die Schaltflächen auch Tooltips (`hint`-Popovers) an, um dem Nutzer eine Vorstellung davon zu geben, was jede Schaltfläche bewirkt, die kein derzeit angezeigtes Untermenü ausblenden.

In den folgenden Abschnitten gehen wir auf alle wichtigen Teile des Codes ein.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, obwohl es nicht wirklich viel Sinn ergibt. Sie sind so konzipiert, dass sie einige der Einschränkungen von `auto`-Popovers umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützten Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ unter Verwendung von `auto`-Popovers erstellt.

Zuerst die Steuertasten:

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

Die Untermenü-Popovers funktionieren gut, wie sie sind, öffnen sich, wenn die Symbolleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips beim Hover/Fokus der Schaltflächen an? Zuerst erstellen wir die Tooltips in HTML, indem wir `hint`-Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im [Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) der Demo sind die Tooltips innerhalb der Popover-Steuerschaltflächen verschachtelt. Das liegt daran, dass es eine bessere Rückfallebene für nicht-CSS-Ankerpositionierung unterstützende Browser bietet — die `hint`-Popovers erscheinen neben ihren zugehörigen Steuertasten und nicht irgendwo anders.

Um das Ein-/Ausblenden zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen zu den `hint`-Popovers und den Steuerschaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf eine gegebene {{htmlelement("button")}} setzt, die durch Ziehen des `<button>` an einem bestimmten Indexwert der `btns`-`NodeList` ausgewählt wird. Die Funktionen wirken auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList`, sodass wir die Schaltflächen und die Tooltips synchron halten können — zeigen/verbergen des korrekten Tooltips, wenn mit einer Taste interagiert wird.

Die Eventlistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), wodurch die Tooltips sowohl mit Maus als auch mit Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um die `<buttons>` in der `btns`-`NodeList` zu durchlaufen und die `addEventListeners()`-Funktion für jede einzelne aufzurufen, sodass alle gewünschten Ereignislistener gesetzt sind.

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

Alternativ können Sie einen spezifischen Popover-Typ auswählen, indem Sie einen Wert im Attributselektor angeben:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die derzeit angezeigt werden, indem Sie die {{cssxref(":popover-open")}}-Pseudoklasse verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Das Popover-Backdrop stylen

Das {{cssxref("::backdrop")}}-Pseudo-Element ist ein Vollbild-Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird und es ermöglicht, Effekte auf die Seiteninhalte hinter dem/den Popover(s) hinzuzufügen, wenn gewünscht. Sie könnten zum Beispiel den Inhalt hinter dem Popover verschwommen darstellen, um die Aufmerksamkeit des Nutzers auf das Popover zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel für verschwommene Hintergründe von Popovers](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie das gerendert wird.

### Popovers positionieren

Wenn Sie sich die ersten Beispiele zu Beginn des Artikels ansehen, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Viewports erscheinen, ihren Inhalt umschließen und eine schwarze Umrandung haben. Dies ist die Standard-Stilgebung, erreicht durch die folgende Regel im UA-Stylesheet:

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

Sie können dieses isolierte Beispiel in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker und nicht zum Viewport oder einem positionierten Vorfahren positionieren möchten, können Sie die Tatsache nutzen, dass Popovers und ihre Invoker einen **impliziten Ankerverweis** haben.

[Wenn Sie eine beliebige Art von Popover mit seinem Invoker verknüpfen](#andere_möglichkeiten,_eine_popover-invoker-beziehung_herzustellen), schaffen Sie einen impliziten Ankerverweis zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ zu diesem mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Assoziation zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Assoziation mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden. Die Positionierungs-CSS muss jedoch weiterhin spezifiziert werden.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten, die auf {{Glossary("inset_properties", "Einsetzeigenschaften")}} gesetzt sind, und `anchor-center`-Werten anwenden, die auf Ausrichtungseigenschaften gesetzt sind:

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

Wenn Sie {{cssxref("position-area")}} oder {{cssxref("anchor()")}} verwenden, um Popovers zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der von Ihnen angestrebten Position kollidieren können. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen, wie in den obigen Beispielen beschrieben. Die CSS-Arbeitsgruppe [untersucht Möglichkeiten, diese Umgehungslösungen zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Assoziation von Anker- und positionierten Elementen und zum Positionieren von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation nutzt, siehe unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie den CSS-Code überprüfen, werden Sie sehen, dass keine expliziten Ankerassoziationen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden.

> [!NOTE]
> Wenn Sie den impliziten Ankerverweis entfernen möchten, um zu verhindern, dass das Popover an seinem Invoker verankert wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerassoziation](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Popovers animieren

Popovers werden auf `display: none;` gesetzt, wenn sie verborgen sind, und auf `display: block;`, wenn sie angezeigt werden, sowie aus der {{Glossary("top_layer", "top layer")}} und dem [Zugänglichkeitbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt schaltet der Browser zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist. Also zum Beispiel:

- Beim Animieren von `display` von `none` nach `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) nach `none` wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das obige Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das obige Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Ein Popover übergangsweise ändern

Beim Animieren von Popovers mit CSS-Übergängen sind folgende Merkmale erforderlich:

- {{CSSxRef("@starting-style")}}-Regel
  - : Stellt eine Reihe von Anfangswerten für Eigenschaften bereit, die auf das Popover gesetzt sind und von denen Sie beim ersten Anzeigen übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft von einem Wert zu einem anderen bei einem sichtbaren Element wechselt; sie werden nicht beim ersten Stil-Update eines Elements oder bei einer Umstellung des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover für die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt, sodass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des Popovers von der obersten Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, um erneut sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform) um diskrete Übergänge für diesen beiden Eigenschaften zu aktivieren, die normalerweise nicht animierbar sind.

Werfen wir einen Blick auf ein Beispiel, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement für das Popover fungiert:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergangsweise ändern möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausblendet, während es horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften am verborgenen Zustand des Popovers (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation beim Ein- oder Ausblenden des Popovers zu bestimmen.

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

Wie bereits erwähnt, haben wir ebenfalls:

- Einen Anfangszustand für die `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `display` zur Liste der übergangenen Eigenschaften hinzugefügt, damit das animierte Element während der Ein- und Ausblend-Animationen des Popovers (auf `display: block` gesetzt) sichtbar bleibt. Ohne dies würde die Ausblende-Animation nicht sichtbar sein; das Popover würde einfach verschwinden.
- `overlay` zur Liste der übergangenen Eigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus dem Overlay bis zum Abschluss der Animation aufgeschoben ist. Der Effekt davon fällt möglicherweise nicht bei grundlegenden Animationen wie dieser auf, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vor Abschluss des Übergangs aus dem Overlay entfernt wird.
- `allow-discrete` auf beide Eigenschaften in den oben genannten Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingestellt haben, der hinter dem Popover erscheint, wenn es geöffnet wird, und eine nette Verdunkelungs-Animation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` auf `display: block` wechseln, wenn sie angezeigt werden, ändert sich das Popover bei jedem Zugangstransition von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Zugang und Austritt in solchen Fällen unterscheidet. Siehe unser [Beweis für die Verwendung von Anfangsstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Nachweis.

### Eine Popover-Schlüsselbildanimation

Beim Animieren eines Popovers mit CSS-Schlüsselbildanimationen gibt es einige Unterschiede zu beachten:

- Sie geben keine `@starting-style` vor; Sie fügen Ihre "to" und "from" `display`-Werte in Schlüsselbildern ein.
- Sie aktivieren keine diskreten Animationen explizit; es gibt keine Entsprechung zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` nicht einmal in Schlüsselbildern setzen; die `display`-Animation behandelt die Animation des Popovers von angezeigt nach verborgen.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement für das Popover fungiert:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Zugang- und Austrittsanimationen für das Popover sowie nur eine Zugang-Animation für das Backdrop spezifizieren. Beachten Sie, dass es nicht möglich war, das Ausblenden des Backdrops zu animieren — das Backdrop wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass es nichts zu animieren gibt.

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
