---
title: Verwenden der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Erstellen deklarativer Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das Sie für Ihre Popover-Inhalte verwenden möchten. Ein `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungen zu verbinden.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Festlegen des `popover`-Attributs ohne Wert ist gleichbedeutend mit `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element bei Seitenladen versteckt wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen/zu verbergen, müssen Sie mindestens einen Steuerknopf (auch bekannt als Popover-**Invoker**) hinzufügen. Sie können ein {{htmlelement("button")}} (oder ein {{htmlelement("input")}} vom `type="button"`) als Popover-Steuerknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut hinzufügen, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Knopf ein Umschaltknopf ist — durch Drücken wird das Popover zwischen sichtbar und unsichtbar umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden — dieses nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Zum Beispiel, um separate Zeigen- und Verbergen-Knöpfe zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Code-Snippet in unserem [Basic declarative popover example](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` entfernt und es wird in die {{Glossary("top_layer", "obere Ebene")}} verschoben, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das darauf abzielt, andere Funktionalitäten über Popover-Befehle hinaus bereitzustellen, einschließlich benutzerdefinierter Befehle.

Das vorherige Code-Snippet könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Automatik-Zustand und "leichtes Verwerfen"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` festgelegt wird, wird es gesagt, es hat **Automatik-Zustand**. Die zwei wichtigen Verhaltensweisen des Automatik-Zustands sind:

- Das Popover kann "leicht verworfen" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb davon ausblenden können.
- Das Popover kann auch über browserspezifische Mechanismen geschlossen werden, wie z.B. das Drücken der <kbd>Esc</kbd>-Taste.
- In der Regel kann nur ein `auto` Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn eines bereits angezeigt wird, versteckt das erste. Die Ausnahme zu dieser Regel ist, wenn Sie geschachtelte automatische Popovers haben. Weitere Details finden Sie im Abschnitt [Geschachtelte Popovers](#geschachtelte_popovers).

> [!NOTE]
> `popover="auto"` Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument verworfen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden für ein angezeigtes Popover zu einem Fehler führt, da diese Vorgänge für ein bereits gezeigtes Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Automatik-Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Lehr-UI-Nachrichten, die Sie anzeigen möchten, aber die Darstellung soll nicht überladen und verwirrend werden, oder vielleicht zeigen Sie Statusmeldungen, bei denen der neue Status den vorherigen überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere automatische Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht zu verwerfen, nachdem sie gezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig zu zeigen.

## Barrierefreiheitsfunktionen von Popovers

Wenn über das `popovertarget`-Attribut eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und Unterstützungstechnologie-Nutzern (AT) die Interaktion mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Navigationsreihenfolge der Tastaturfokusse aktualisiert, sodass das Popover als Nächstes in der Reihenfolge ist: Beispielsweise, wenn ein Knopf gedrückt wird, um ein Popover zu zeigen, sind alle Knöpfe innerhalb des Popovers als Nächstes in der Tabulatorreihenfolge (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus zurück auf den Invoker verschoben.
- Um AT wie Screenreader die Beziehung zwischen dem Invoker und dem Popover verständlich zu machen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise erstellt auch eine implizite Ankerreferenz zwischen beiden — siehe [Popover-Anker-Positionierung](#popover-anker-positionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung zu erstellen

Sie können eine Popover-Invoker-Beziehung auf andere Weise erstellen, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwendung der Option `source` der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Fokussequenzänderungen vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die Option `source` auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung Sinn machen würde.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Picker, wenn Sie es in [anpassbare select-Element]-Funktionalität über die `appearance`-Eigenschaft `base-select`-Wert integrieren. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Automatik-Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht verworfen" werden, obwohl deklarative Zeigen/Verbergen/Umschalten-Knöpfe (wie zuvor gezeigt) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle` und `toggle` Ereignisse

Sie können auf ein Popover reagieren, das angezeigt oder verborgen wird, indem Sie die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)- und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse verwenden:

- `beforetoggle` wird unmittelbar bevor ein Popover angezeigt oder verborgen wird ausgelöst. Dies kann beispielsweise verwendet werden, um zu verhindern, dass das Popover angezeigt oder verborgen wird (unter Verwendung von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach seiner Verwendung zu bereinigen.
- `toggle` wird unmittelbar nachdem ein Popover angezeigt oder verborgen wurde ausgelöst. Dies wird in der Regel verwendet, um anderen Code als Reaktion auf eine Änderung des Umgeschalteten-Popover-Zustands auszuführen.

Beide dieser Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis verfügt über die folgenden Funktionen zusätzlich zu denen, die vom Standard-[`Event`](/de/docs/Web/API/Event)-Objekt geerbt werden:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, aus welchem Zustand das Popover gerade übergegangen ist und zu welchem, sodass Sie speziell auf ein geöffnetes oder geschlossenes Popover reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält einen Verweis auf das HTML-Popover-Steuerelement, das den Umschaltvorgang initiiert hat, sodass Sie in der Lage sind, je nach Quelle des Umschaltevents unterschiedlichen Code als Reaktion darauf auszuführen.

Typische Verwendung könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Siehe die vorherigen Referenzlinks für weitere Informationen und Beispiele.

## Popovers über JavaScript anzeigen

Sie können Popovers auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich für die Funktionsprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut und ermöglichen Ihnen das Einrichten der Steuerelement-Knöpfe für ein Popover, obwohl der Eigenschaftswert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), das es Ihnen ermöglicht, die Aktion anzugeben, die von einem Steuerelement-Knopf ausgeführt wird.

Wenn Sie diese drei zusammen verwenden, können Sie ein Popover und seinen Steuerknopf programmatisch einrichten, wie folgt:

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

Sie haben auch mehrere Methoden zur Steuerung des Anzeigens und Verbergens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) um ein Popover umzuschalten.

Zum Beispiel könnten Sie die Möglichkeit bieten wollen, ein Hilfe-Popover ein- und auszuschalten, indem Sie einen Knopf drücken oder eine bestimmte Taste auf der Tastatur. Das Erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das Zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine, um das Popover zu öffnen, und eine, um es wieder zu schließen:

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

In diesem Beispiel wird [`Element.matches()`](/de/docs/Web/API/Element/matches) verwendet, um programmatisch zu prüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse stimmt nur mit Popovers überein, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die ausgelöst werden, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, oder ein bereits verborgenes Popover zu verstecken.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover anzuzeigen _und_ zu verbergen, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Siehe unser [Toggle help UI example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)), um die Popover-JavaScript-Eigenschaften, Funktionsprüfung und `togglePopover()`-Methode in Aktion zu sehen.

## Geschachtelte Popovers

Es gibt eine Ausnahme zu der Regel, dass nicht mehrere automatische Popovers gleichzeitig angezeigt werden sollen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungen wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, geschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachfahren:

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

Siehe unser [Beispiel für verschachtelte Popover-Menüs](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel. Sie werden feststellen, dass ziemlich viele Ereignishandler verwendet wurden, um das Unter-Popover während des Maus- und Tastaturzugriffs entsprechend anzuzeigen und zu verbergen, und auch um beide Menüs zu verstecken, wenn eine Option entweder aus dem einen oder dem anderen ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer Multi-Page-Website, sind möglicherweise einige oder alle davon nicht notwendig, aber sie wurden in diesem Demonstrationsbeispiel zu Illustrationszwecken aufgenommen.

## Verwenden des "Hinweis"-Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hinweis-Popovers**, bezeichnet durch das Festlegen von `popover="hint"` auf Ihrem Popover-Element. `hint`-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, sondern schließen andere `hint`-Popovers. Sie können leicht verworfen werden und werden auf Schließanforderungen reagieren.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Symbolleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber gleichzeitig auch Tooltips angezeigt werden sollen, wenn die Schaltflächen überfahren werden, ohne die UI-Popovers zu schließen.

`hint`-Popovers neigen dazu, als Reaktion auf Nicht-Klick-JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und versteckt zu werden. Das Klicken auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein geöffnetes `auto`-Popover zu einem leichten Verwerfen führen.

Siehe unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel, das sich genau wie hier beschrieben verhält. Das Demo zeigt eine Schaltflächenleiste; wenn gedrückt, zeigen die Schaltflächen `auto`-Popup-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn jedoch darüber geflogen oder fokussiert wird, zeigen die Schaltflächen auch Tooltips (`hint`-Popovers), die dem Benutzer eine Vorstellung davon geben, welche Funktion jede Schaltfläche hat, die ein aktuell angezeigtes Untermenü nicht verbergen.

In den folgenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, obwohl es dafür eigentlich keinen wirklichen Grund gibt. Sie sind dafür gedacht, einige der Einschränkungen von `auto`-Popovers zu umgehen und Anwendungen wie die im Abschnitt beschriebene zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

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

Die Untermenü-Popovers funktionieren so wie sie sind gut, indem sie geöffnet werden, wenn die Symbolleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips bei Schaltflächen-Überflug/Fokus an? Zuerst erstellen wir die Tooltips im HTML mit `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im Demo-[Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) sind die Tooltips innerhalb der Popover-Steuerschaltflächen verschachtelt. Dies liegt daran, dass es ein besseres Fallback in Browsern bietet, die keine CSS-Anker-Positionierung unterstützen — die `hint`-Popovers erscheinen neben ihren zugehörigen Steuerschaltflächen und nicht ganz woanders.

Um die Anzeige/Verbergung zu steuern, benötigen wir JavaScript. Zuerst greifen wir auf Referenzen zu den `hint`-Popovers und den Steuerelement-Schaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s über [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zu:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignis-Listener (via [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem gegebenen {{htmlelement("button")}} setzt, wobei der `<button>` bei einem bestimmten Indexwert in der `btns`-`NodeList` ausgewählt wird. Die Funktionen wirken auf das `hint`-Popover bei dem gleichen Indexwert in der `tooltips`-`NodeList`, sodass wir die Schaltflächen und die Tooltips synchron halten — das richtige Tooltip anzeigen/verbergen, wenn eine Schaltfläche interagiert wird.

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

Abschließend verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns`-`NodeList` zu iterieren, dabei die `addEventListeners()`-Funktion für jede von ihnen aufrufen, sodass alle über die gewünschten Ereignis-Listener verfügen.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Gestaltung von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Auswahl von Popovers

Sie können alle Popovers mit einem einfachen Attribut-Selektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert in den Attribut-Selektor einfügen:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Nur Popovers, die angezeigt werden, können mit der {{cssxref(":popover-open")}}-Pseudoklasse ausgewählt werden:

```css
:popover-open {
  /* Declarations here */
}
```

### Gestaltung des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudoelement ist ein ganzseitiges Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "oberen Ebene")}} platziert ist, sodass Effekte auf die Seiteninhalte hinter dem/den Popover(s) hinzugefügt werden können, wenn gewünscht. Beispielsweise könnten Sie den Inhalt hinter dem Popover verschwimmen lassen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie unser Beispiel zur [Popover-Hintergrund-Unschärfe](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) für eine Vorstellung, wie dies gerendert wird.

### Positionieren von Popovers

Beim Betrachten der ersten paar Beispiele, die zu Beginn des Artikels verlinkt wurden, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Ansichtsfensters erscheinen, ihren Inhalt umschließen und eine schwarze Umrandung haben. Dies ist das Standard-Styling, das mit der folgenden Regel im UA-Stylesheet erreicht wird:

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

Um eine benutzerdefinierte Größe anzuwenden und das Popover woanders zu positionieren, könnten Sie die obigen Stile mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel hierfür in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Anker-Positionierung

Eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt dem Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie von der Tatsache profitieren, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

[Das Verknüpfen von beliebigen Arten von Popovers mit ihren Invokern](#andere_möglichkeiten,_eine_popover-invoker-beziehung_zu_erstellen) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Assoziation zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Assoziation mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden. Sie müssen jedoch weiterhin die positionierenden CSS angeben.

Zum Beispiel könnten Sie eine Kombination aus {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Rand-Eigenschaften")}} gesetzt sind, und `anchor-center`-Werte, die auf Ausrichtungs-Eigenschaften gesetzt sind:

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

Wenn Sie {{cssxref("position-area")}} oder {{cssxref("anchor()")}} verwenden, um Popovers zu positionieren, beachten Sie, dass [die Standard-Stile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit dem Positionierungsresultat in Konflikt stehen, das Sie zu erreichen versuchen. Die üblichen Probleme sind die Standard-Stile für `margin` und `inset`, daher wird empfohlen, diese zurückzusetzen, wie in den oben genannten Beispielen. Die CSS-Arbeitsgruppe [prüft Möglichkeiten, um dieses Umstandes zu umgehen](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwenden der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Assoziation zwischen Anker- und positionierten Elementen sowie zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, siehe unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Anker-Assoziationen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften gemacht wurden.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass das Popover zu seinem Invoker verankert wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, z.B. `--not-an-anchor-name`. Siehe auch [Entfernen einer Anker-Assoziation](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Popovers animieren

Popovers sind auf `display: none;` gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, zusätzlich dazu, dass sie von/zu der {{Glossary("top_layer", "oberen Ebene")}} und dem [Barrierefreiheit-Baum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/hinzugefügt werden. Daher muss für die Animation von Popovers die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Speziell wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, sodass die animierten Inhalte während der gesamten Animationsdauer angezeigt werden. Dies bedeutet zum Beispiel:

- Wenn man `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert, wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er die ganze Zeit sichtbar ist.
- Wenn man `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert, wechselt der Wert bei `100%` der Animationsdauer zu `none`, damit er die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben genannte Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Ein Popover übergangweise verändern

Beim Animieren von Popovers mit CSS-Übergängen sind folgende Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Bietet ein Satz von Anfangswerten für Eigenschaften, die auf dem Popover festgelegt sind und von denen aus Sie bei der ersten Anzeige übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht auf den ersten Stil-Updates eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergänge hinzu, damit das Popover während der gesamten Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) erhalten bleibt, wodurch sichergestellt wird, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Liste der Übergänge hinzu, um sicherzustellen, dass das Entfernen des Popovers von der oberen Ebene bis zur Abschluss der Übergangsphase aufgeschoben wird, wodurch ebenfalls sichergestellt wird, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die Übergänge von `display` und `overlay` (oder auf die {{cssxref("transition")}}-Abkürzung), um diskrete Übergänge aufzuführen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, um zu sehen, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover über das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-HTML-Attribut deklariert wurde, und ein {{htmlelement("button")}}-Element, das als Steuerung zum Anzeigen des Popovers bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergangsweise ändern wollen, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform). Wir wollen, dass das Popover ein- oder ausblendet, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf den verborgenen Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attribute-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)) und einen Endzustand für den gezeigten Zustand des Popovers (ausgewählt über das [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/Reference/Properties/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation festzulegen, während das Popover angezeigt oder verborgen wird.

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

- Einen Anfangszustand für den `transition` innerhalb des `@starting-style` Blocks gesetzt.
- `display` zur Liste der übergangsweise geänderten Eigenschaften hinzugefügt, sodass das animierte Element während des Eintritts- und Austritts-Übergangs des Popovers sichtbar (auf `display: block` gesetzt) bleibt. Ohne dies wäre der Austritt-Übergang nicht sichtbar; tatsächlich würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergangsweise geänderten Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements von der oberen Ebene bis zum Abschluss der Animation aufgeschoben wird. Der Effekt dieser Eigenschaft ist möglicherweise nicht erkennbar bei grundlegenden Animationen wie dieser, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vom Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beiden Eigenschaften in den oben genannten Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) eingefügt haben, der sich hinter dem Popover öffnet, was eine angenehme Verdunklungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt der Popover bei jedem Eintragsübergang von den `@starting-style`-Stilen zu den `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang bei Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel, um einen Beweis dafür zu sehen.

### Eine Popover-Schlüsselbild-Animation

Beim Animieren eines Popovers mit CSS-Schlüsselbildanimationen gibt es einige Unterschiede zu beachten:

- Sie geben kein `@starting-style` an; Sie fügen die "to" und "from" `display`-Werte in Schlüsselbildern an.
- Sie aktivieren keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen auch keinen `overlay` in Schlüsselbildern setzen; die `display`-Animation behandelt die Animation des Popovers von der Anzeige bis zur Ausblendung.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert wurde, und ein {{htmlelement("button")}}-Element, das als Steuerknopf zur Anzeige des Popovers bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Ein- und Austrittsanimationen sowie eine Eintragsanimation nur für das Hintergrundbild angeben. Beachten Sie, dass es nicht möglich war, den Hintergrundbild-Verblassen zu animieren — das Hintergrundbild wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts zu animieren ist.

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
