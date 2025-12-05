---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Erstellen von deklarativen Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das Sie für Ihre Popover-Inhalte verwenden möchten. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert ist gleichbedeutend mit dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs führt dazu, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen oder zu verbergen, müssen Sie mindestens einen Steuerknopf hinzufügen (auch als Popover-**Invoker** bezeichnet). Sie können eine {{htmlelement("button")}} (oder {{htmlelement("input")}} vom `type="button"`) als Popover-Steuerungsknopf festlegen, indem Sie ihm das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass der Knopf ein Umschaltknopf ist — durch wiederholtes Drücken wird das Popover zwischen Anzeigen und Verbergen umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden — das einen Wert von `"hide"`, `"show"` oder `"toggle"` annimmt. Um beispielsweise separate Anzeige- und Verbergknöpfe zu erstellen, könnten Sie Folgendes tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Codeausschnitt in unserem [Basisbeispiel für ein deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Schicht")}} verschoben, sodass es über allen anderen Seiteninhalten angezeigt wird.

### `command` und `commandfor`

Die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribute bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, sind jedoch mit einem allgemeineren Design ausgelegt, das über Popover-Befehle hinaus weitere Funktionalitäten, einschließlich benutzerdefinierter Befehle, ermöglichen soll.

Der vorherige Codeausschnitt könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "leichtes Schließen"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt festgelegt wird, sagt man, dass es sich im **Auto-Zustand** befindet. Die beiden wichtigen Verhaltensweisen, die bei Auto-Zustand zu beachten sind, sind:

- Das Popover kann "leicht geschlossen" werden - dies bedeutet, dass Sie das Popover verstecken können, indem Sie außerhalb davon klicken.
- Das Popover kann auch mit browserspezifischen Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- In der Regel kann zur gleichen Zeit nur ein `auto`-Popover angezeigt werden - das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, versteckt das erste. Eine Ausnahme von dieser Regel sind verschachtelte Auto-Popovers. Details dazu finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) weiter unten.

> [!NOTE]
> `popover="auto"` Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument geschlossen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem angezeigten Popover zu einem Fehlschlag führt, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein einzelnes Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Lehr-UI-Nachrichten, die Sie anzeigen möchten, aber nicht möchten, dass die Anzeige überladen und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht zu schließen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Barrierefreiheitsfunktionen

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um es Tastatur- und unterstützenden Technologie-(AT)-Nutzern zu ermöglichen, leichter mit dem Popover zu interagieren:

- Wenn das Popover angezeigt wird, wird die Navigationsreihenfolge der Tastaturfokussierung aktualisiert, sodass das Popover als nächstes in der Reihenfolge ist: Zum Beispiel, wenn ein Knopf gedrückt wird, um ein Popover anzuzeigen, werden alle Knopfe innerhalb des Popovers als nächstes in der Tabulator-Reihenfolge sein (werden durch das Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (in der Regel über die <kbd>Esc</kbd>-Taste) der Fokus zurück zum Invoker verschoben.
- Um AT, wie Bildschirmlesegeräten, das Verstehen der Beziehung zwischen dem Invoker und dem Popover zu ermöglichen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise erstellt auch eine implizite Anker-Referenz zwischen den beiden – siehe [Popover-Anker-Positionierung](#popover-anker-positionierung) für weitere Details.

## Andere Möglichkeiten zur Einrichtung einer Popover-Invoker-Beziehung

Sie können eine Popover-Invoker-Beziehung auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwenden der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Änderungen der Fokusnavigationsreihenfolge vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jeden Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und dass nicht gewährleistet werden kann, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Picker, wenn die Funktionalität [anpassbare Auswahl des Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die `base-select`-Wert der {{cssxref("appearance")}}-Eigenschaft aktiviert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung von manuellem Popover-Zustand

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, erreicht durch Setzen von `popover="manual"` auf Ihrem Popover-Element:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht geschlossen" werden, obwohl deklarative Anzeige-/Verberg-/Umschaltknöpfe (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die Ereignisse `beforetoggle` und `toggle`

Sie können auf ein anzeigendes oder verstecktes Popover durch die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) reagieren:

- `beforetoggle` wird unmittelbar bevor ein Popover angezeigt oder versteckt wird, ausgelöst. Dies kann verwendet werden, um beispielsweise das Anzeigen oder Verbergen des Popovers zu verhindern (mithilfe von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach seiner Verwendung zu bereinigen.
- `toggle` wird unmittelbar nachdem ein Popover angezeigt oder versteckt wurde, ausgelöst. Dies wird in der Regel verwendet, um anderen Code als Reaktion auf das Ändern des Popover-Umschaltzustands auszuführen.

Beide Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis verfügt über die folgenden Funktionen zusätzlich zu den vom Standard-`Event`(/de/docs/Web/API/Event)-Objekt geerbten:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, aus welchem Zustand das Popover gerade gewechselt hat und zu welchem Zustand es gewechselt ist, sodass Sie speziell auf das Öffnen oder Schließen des Popovers reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält einen Verweis auf das HTML-Popover-Steuerelement, das das Umschalten initiiert hat, sodass Sie anderen Code als Reaktion auf das Ein- und Ausklappen des Popovers ausführen können, je nachdem, welches Steuerungselement es ausgelöst hat.

Ein typischer Gebrauch könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Siehe die vorherigen Referenzlinks für weitere Informationen und Beispiele.

## Anzeigen von Popovers via JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu lesen oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich für die Funktionsprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, indem sie es ermöglichen, die Steuerknöpfe eines Popovers einzurichten, obwohl der zu verwendende Eigenschaftswert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), indem sie ermöglichen, die von einem Steuerknopf auszuführende Aktion anzugeben.

Indem sie diese drei zusammenführen, können Sie programmatisch ein Popover und seinen Steuerknopf auf folgende Weise einrichten:

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

Sie haben auch mehrere Methoden zur Steuerung des Anzeigen und Verbergens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), um ein Popover ein- oder auszuklappen.

Zum Beispiel möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfe-Popover ein- und auszuschalten, indem Sie auf einen Knopf klicken oder eine bestimmte Taste auf der Tastatur drücken. Das erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das zweite könnten Sie einen Ereignis-Handler erstellen, der zwei separate Tasten programmiert - eine, um das Popover zu öffnen, und eine andere, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse passt nur zu Popovers, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits verstecktes Popover zu verbergen.

Alternativ könnten Sie eine einzige Taste programmieren, um das Popover zu zeigen _und_ zu verbergen, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel zum Umschalten der Hilfe-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die JavaScript-Eigenschaften von Popovers, die Funktionsprüfung und die Methode `togglePopover()` in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehr als ein Auto-Popover auf einmal angezeigt wird - nämlich wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet werden, da sie in Beziehung zueinander stehen. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über aufrufende/Steuerelemente:

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

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an, um ein Beispiel zu sehen. Ihnen wird auffallen, dass ziemlich viele Ereignishandler verwendet wurden, um das Subpopover bei Maus- und Tastaturzugriffen angemessen anzuzeigen und zu verbergen und auch beide Menüs ausblenden, wenn eine Option aus einem ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer Multi-Seiten-Website, sind möglicherweise nicht alle davon notwendig, aber sie wurden in diesem Demo-Beispiel zu Illustrationszwecken aufgenommen.

## Verwendung des Popover-Zustands "hint"

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hint-Popovers**, die durch Setzen von `popover="hint"` auf Ihrem Popover-Element angegeben werden. `Hint`-Popovers schließen `auto`-Popovers nicht, wenn sie angezeigt werden, schließen jedoch andere `hint`-Popovers. Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

Dies ist nützlich in Situationen, in denen Sie beispielsweise Symbolleistenknöpfe haben, die gedrückt werden können, um UI-Popovers anzuzeigen, Sie aber auch Tooltips anzeigen möchten, wenn die Knöpfe überfahren werden, ohne die UI-Popovers zu schließen.

`Hint`-Popovers werden in der Regel als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und versteckt. Das Klicken auf einen Knopf, um ein `hint`-Popover zu öffnen, würde ein offenes `auto`-Popover leicht schließen.

Sehen Sie sich unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau wie oben beschrieben funktioniert. Das Demo enthält eine Knopfleiste; Wenn gedrückt, zeigen die Knöpfe `auto`-Popup-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn überfahren oder fokussiert, zeigen die Knöpfe jedoch auch Tooltips (`hint`-Popovers) an, um dem Benutzer einen Hinweis darauf zu geben, was jeder Knopf tut, die ein aktuell angezeigtes Untermenü nicht verbergen.

In den folgenden Abschnitten gehen wir alle wichtigen Teile des Codes durch.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, obwohl es eigentlich keinen wirklichen Grund dafür gibt. Sie sind so konzipiert, einige der Einschränkungen von `auto`-Popovers zu umgehen und Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

> [!NOTE]
> Es gibt ein verwandtes Feature — **Interest Invokers** —, das verwendet werden kann, um Hover-/Fokus-Popover-Funktionalität bequem und konsistent zu erstellen, ohne JavaScript zu benötigen. Lesen Sie [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers), um mehr zu erfahren.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ mit `auto`-Popovers erstellt.

Erstens, die Steuerknöpfe:

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

Die Untermenü-Popovers funktionieren einwandfrei, wie sie sind, und öffnen sich, wenn die Symbolleistenknöpfe gedrückt werden, aber wie zeigen wir auch Tooltips bei Knopfüberfahrt/Fokus an? Zuerst erstellen wir die Tooltips in HTML, indem wir `hint`-Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im [Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) des Demos sind die Tooltips innerhalb der Popover-Steuerknöpfe verschachtelt. Dies liegt daran, dass es eine bessere Rückfallebene in Browsern bietet, die die CSS-Ankerpositionierung nicht unterstützen — die `hint`-Popovers erscheinen neben ihren zugehörigen Steuerknöpfen, anstatt völlig woanders.

Um das Anzeigen/Verbergen zu steuern, müssen wir JavaScript verwenden. Zuerst greifen wir auf die `hint`-Popovers und die Steuerknöpfe in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mithilfe von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zu:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Event Listener (via [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einen bestimmten {{htmlelement("button")}}-Element setzt, ausgewählt durch Greifen des `<button>` an einem bestimmten Indexwert der `btns`-`NodeList`. Die Funktionen wirken auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList`, wodurch wir die Knöpfe und Tooltips synchron halten — das richtige Tooltip anzeigen/verstecken, wenn ein Knopf mit ihm interagiert wird.

Die Event Listener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns`-`NodeList` zu iterieren und die `addEventListeners()`-Funktion für jedes aufzurufen, sodass alle davon die gewünschten Event Listener gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Styling von Popovers

Dieser Abschnitt behandelt einige relevante CSS-Auswahl- und Positionierungstechniken für Popovers.

### Auswahl von Popovers

Sie können alle Popovers mit einem einfachen Attribut-Selektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie eine bestimmte Art von Popover auswählen, indem Sie einen Wert im Attribut-Selektor angeben:

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

### Styling des Popover-Backdrops

Das {{cssxref("::backdrop")}}-Pseudoelement ist ein Vollbild-Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Schicht")}} platziert wird und es ermöglicht, Effekte auf die Seiteninhalte hinter dem/den Popover(s) hinzuzufügen, wenn gewünscht. Vielleicht möchten Sie zum Beispiel den Inhalt hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel für verschwommenen Hintergrund von Popovers](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Wenn Sie sich die ersten beiden Beispiele am Anfang des Artikels angesehen haben, ist Ihnen vielleicht aufgefallen, dass die Popovers in der Mitte des Ansichtsbereichs erscheinen, ihren Inhalt umschließen und einen schwarzen Rand haben. Dies ist das Standardstyling, das mit der folgenden Regel im UA-Stylesheet erreicht wurde:

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

Um benutzerdefinierte Größen anzuwenden und das Popover woanders zu positionieren, könnten Sie die obigen Stile überschreiben mit so etwas wie diesem:

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

Sie können ein isoliertes Beispiel davon in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Anker-Positionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker anstelle des Ansichtsbereichs oder eines positionierten Vorfahren positionieren möchten, können Sie den Vorteil der Tatsache nutzen, dass Popovers und ihre Invoker eine **implizite Anker-Referenz** haben.

[Eine beliebige Art von Popover mit ihrem Invoker zu verknüpfen](#andere_möglichkeiten_zur_einrichtung_einer_popover-invoker-beziehung) erstellt eine implizite Anker-Referenz zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ zu ihm mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positionieren können.

Da die Verbindung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Verbindung mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden. Sie müssen jedoch immer noch die Positionierungs-CSS angeben.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Einsetz-Eigenschaften")}} gesetzt sind, und `anchor-center`-Werte, die auf Ausrichtungseigenschaften gesetzt sind:

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

Beim Verwenden von {{cssxref("position-area")}} oder {{cssxref("anchor()")}} zum Positionieren von Popovers beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position, die Sie zu erreichen versuchen, in Konflikt stehen. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen, wie in den obigen Beispielen. Die CSS-Arbeitsgruppe [prüft Möglichkeiten, um dies zu verhindern](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Verknüpfung von Anker- und positionierten Elementen und zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Verbindung verwendet, siehe unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine explizite Anker-Verbindungen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden.

> [!NOTE]
> Wenn Sie die implizite Anker-Referenz entfernen möchten, um zu verhindern, dass das Popover an seinem Invoker verankert wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Anker-Referenz](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Animieren von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie sie aus der {{Glossary("top_layer", "obersten Schicht")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt werden. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen Wert von `display`, damit der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, sodass er die gesamte Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert zu `none` bei `100%` der Animationsdauer umgeschaltet, sodass er die gesamte Zeit sichtbar ist.

> [!NOTE]
> Wenn das Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) erfolgt, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

### Einen Popover überblenden

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Merkmale erforderlich:

- {{CSSxRef("@starting-style")}} at-rule
  - : Bietet eine Reihe von Ausgangswerten für Eigenschaften auf dem Popover, von dem aus Sie überblenden möchten, wenn es zum ersten Mal angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei der ersten Stilaktualisierung eines Elements ausgelöst oder wenn der `display`-Typ von `none` auf einen anderen Typ wechselt.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergänge hinzu, damit das Popover während der gesamten Übergangszeit als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Schließen Sie `overlay` in die Liste der Übergänge ein, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Schicht aufgeschoben wird, bis der Übergang abgeschlossen ist, wodurch der Übergang sichtbar bleibt.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf die {{cssxref("transition")}}-Kurzform), um für diese beiden Eigenschaften diskrete Übergänge zu ermöglichen, die standardmäßig nicht animierbar sind.

Werfen wir einen Blick auf ein Beispiel, damit Sie sehen, wie das aussieht:

#### HTML

Der HTML-Code enthält ein {{htmlelement("div")}}-Element, das über das globale HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert wird, sowie ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers ausgewiesen ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir überblenden möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform). Wir möchten, dass das Popover eingefügt oder herausgezogen wird, während es sich horizontal vergrößert oder verkleinert. Dazu setzen wir einen Ausgangszustand für diese Eigenschaften auf den verborgenen Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attribut-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt via der [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/Reference/Properties/transition) Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation festzulegen, während das Popover ein- oder ausgeblendet wird.

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

- Einen Ausgangszustand für den `transition` innerhalb des `@starting-style`-Blocks festgelegt.
- `display` zur Liste der überblendenen Eigenschaften hinzugefügt, damit das animierte Element während der Eintritts- und Austrittsanimationen des Popovers sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden.
- `overlay` zur Liste der überblendenen Eigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus dem Overlay bis zum Abschluss der Animation aufgeschoben wird. Der Effekt hiervon ist möglicherweise für grundlegende Animationen wie diese nicht erkennbar, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beide Eigenschaften in den oben genannten Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) zu ermöglichen.

Sie werden bemerken, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) eingefügt haben, der hinter dem Popover erscheint, wenn es geöffnet wird, und eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Übergang eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen, wenn der Eintrittsübergang stattfindet. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass der Stilwechsel beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration des Zeitpunkts, zu dem Ausgangsstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel, um einen Beweis hierfür zu erhalten.

### Eine Popover-Keyframe-Animation

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an; Sie geben Ihre "zu" und "von" `display`-Werte in Keyframes an.
- Sie ermöglichen keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch nicht explizit in den Keyframes festlegen; die `display`-Animation übernimmt die Animation des Popovers von angezeigt auf versteckt.

Schauen wir uns ein Beispiel an.

#### HTML

Der HTML-Code enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers ausgewiesen ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Eintritts- und Austrittsanimationen angeben, sowie eine Eintrittsanimation nur für den Backdrop. Beachten Sie, dass es nicht möglich war, das Ausblenden des Backdrops zu animieren — der Backdrop wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass es nichts zu animieren gibt.

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

{{ EmbedLiveSample("Eine Popover-Keyframe-Animation", "100%", "200") }}

## Siehe auch

- Sammlung von [Popover-API-Beispielen](https://mdn.github.io/dom-examples/popover-api/)
