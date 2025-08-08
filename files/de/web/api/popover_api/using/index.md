---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklerinnen und Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über andere Seiteninhalte. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung all ihrer Funktionen.

## Erstellen deklarativer Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das die Popover-Inhalte enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungselementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen/verbergen, müssen Sie mindestens eine Steuerungsschaltfläche hinzufügen (auch bekannt als Popover-**Invokator**). Sie können ein {{htmlelement("button")}} (oder {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerungsschaltfläche festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass die Schaltfläche eine Umschaltschaltfläche ist – durch wiederholtes Drücken wird das Popover zwischen Anzeigen und Verbergen umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden – dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Anzeige- und Ausblend-Schaltflächen zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Code-Snippet in unserem [Beispiel für ein einfaches deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einer Steuerungsschaltfläche ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Schicht")}} verschoben, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das darauf abzielt, neben Popover-Befehlen auch andere Funktionalitäten, einschließlich benutzerdefinierter Befehle, bereitzustellen.

Das vorherige Code-Snippet könnte wie folgt umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## auto-Zustand und "light dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt eingestellt ist, wird gesagt, dass es sich im **auto-Zustand** befindet. Die beiden wichtigen Verhaltensweisen, die im Zusammenhang mit dem auto-Zustand zu beachten sind:

- Das Popover kann durch einen Klick außerhalb davon "light dismissed" werden, d.h. Sie können das Popover ausblenden, indem Sie außerhalb davon klicken.
- Das Popover kann auch mit browserspezifischen Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- In der Regel kann nur ein `auto` Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel gilt, wenn Sie verschachtelte auto Popovers haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> `popover="auto"` Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument ausgeblendet. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits gezeigten Popover zum Fehlschlag führt, da diese Verhaltensweisen auf einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der auto-Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere lehrreiche UI-Nachrichten, die Sie anzeigen möchten, aber das Display soll nicht überladen und verwirrend werden, oder Sie zeigen Statusmeldungen an, bei denen der neue Status jeden vorherigen überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere auto Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach ihrer Anzeige leicht zu schließen, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Zugänglichkeiten

Wenn über das `popovertarget`-Attribut eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und assistive Technologie-Benutzern das Interagieren mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Reihenfolge der Tastaturfokusnavigation aktualisiert, sodass das Popover als Nächstes in der Reihenfolge erscheint: Zum Beispiel, wenn eine Schaltfläche gedrückt wird, um ein Popover anzuzeigen, sind alle Schaltflächen im Popover als Nächstes in der Tabulatorreihenfolge (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt, wenn das Popover über die Tastatur geschlossen wird (normalerweise mit der <kbd>Esc</kbd>-Taste), wird der Fokus wieder auf den Invoker verschoben.
- Um es assistiven Technologien wie Bildschirmlesegeräten zu ermöglichen, die Beziehung zwischen dem Invoker und dem Popover zu verstehen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise erstellt auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung herzustellen

Sie können eine Popover-Invoker-Beziehung auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwendung der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur Änderungen an der Fokussierungsreihenfolge vorgenommen werden, nicht an der impliziten ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jedes Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung Sinn ergibt.
- Zwischen einem {{htmlelement("select")}}-Element und dessen Dropdown-Auswahl, wenn es über die {{cssxref("appearance")}}-Eigenschaft `base-select`-Wert in die [anpassbare Select-Element-](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Funktionalität aufgenommen wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum auto-Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht geschlossen" werden, obwohl deklarative Anzeige-/Ausblend-/Umschalttasten (wie zuvor gezeigt) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die Ereignisse `beforetoggle` und `toggle`

Sie können auf das Anzeigen oder Ausblenden eines Popovers reagieren, indem Sie die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) verwenden:

- `beforetoggle` wird unmittelbar bevor ein Popover angezeigt oder verborgen wird gefeuert. Dies kann beispielsweise verwendet werden, um zu verhindern, dass das Popover angezeigt oder verborgen wird (durch Verwendung von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach dessen Verwendung aufzuräumen.
- `toggle` wird unmittelbar nach dem Anzeigen oder Verbergen eines Popovers ausgeführt. Dies wird im Allgemeinen verwendet, um im Anschluss an eine Popover-Zustandsänderung anderen Code auszuführen.

Beide Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis besitzt die folgenden Funktionen zusätzlich zu denen, die vom standardmäßigen [`Event`](/de/docs/Web/API/Event)-Objekt geerbt wurden:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) zeigen an, von welchem Zustand zum welchen neuen Zustand das Popover gewechselt hat, sodass Sie speziell auf das Öffnen oder Schließen eines Popovers reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält einen Verweis auf das HTML-Popover-Steuerelement, das das Umschalten initiiert hat, sodass Sie unterschiedlich auf das Umschaltereignis reagieren können, je nachdem, welches Steuerelement es bewirkt hat.

Typical usage might look something like this:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Siehe die obigen Referenzlinks für mehr Informationen und Beispiele.

## Popovers über JavaScript anzeigen

Sie können Popovers auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu bekommen oder zu setzen. Das kann genutzt werden, um ein Popover über JavaScript zu erstellen, und ist auch nützlich für die Funktionserkennung. Ein Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, und erlauben es Ihnen, die Steuerungsschaltfläche(n) für ein Popover einzurichten, wobei der übergebene Wert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), das es Ihnen ermöglicht, die von einer Steuerungsschaltfläche durchgeführte Aktion zu spezifizieren.

Wenn Sie diese drei Eigenschaften zusammen verwenden, können Sie ein Popover und seine Steuerungsschaltfläche programmgesteuert einrichten, so wie:

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

Es gibt auch mehrere Methoden zur Kontrolle der Anzeige und des Verbergens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), um ein Popover umzuschalten.

Zum Beispiel möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfe-Popover mit einem Klick auf eine Schaltfläche oder durch Drücken einer bestimmten Taste auf der Tastatur ein- und auszublenden. Das erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das zweite könnten Sie eine Ereignis-Handler erstellen, der zwei separate Tasten programmiert, eine zum Öffnen des Popovers und eine andere, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover gerade angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse trifft nur auf Popovers zu, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, oder ein bereits verborgenes Popover zu verbergen.

Alternativ könnten Sie eine einzige Taste programmieren, um das Popover zu öffnen _und_ zu schließen, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie unser [Beispiel für die Umschaltung der Benutzeroberfläche](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)), um die Popover-JavaScript-Eigenschaften, Funktionserkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass mehrere auto Popovers nicht gleichzeitig angezeigt werden — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet werden, wegen ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

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

Sehen Sie unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel. Sie werden bemerken, dass einige Event-Handler verwendet wurden, um das Unter-Popover während der Maus- und Tastaturzugriffe korrekt anzuzeigen und zu verbergen und um beide Menüs zu verbergen, wenn eine Option aus einem der beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte in einer SPA- oder mehrseitigen Website handhaben, sind möglicherweise nicht alle oder einige dieser notwendig, aber sie wurden in diesem Demo zu illustrativen Zwecken aufgenommen.

## Verwendung des "hint" Popover-Zustands

Es gibt einen dritten Typ von Popovers, den Sie erstellen können — **hint Popovers**, gekennzeichnet durch die Einstellung `popover="hint"` auf Ihrem Popover-Element. `Hint` Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber sie schließen andere `hint` Popovers. Sie können leicht ausgeblendet werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Symbolleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber auch Tooltips anzeigen möchten, wenn die Schaltflächen überflogen werden, ohne die UI-Popovers zu schließen.

`Hint` Popovers werden in der Regel als Reaktion auf andere als Klick-JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) ein- und ausgeblendet. Das Klicken auf eine Schaltfläche, um ein `hint` Popover zu öffnen, würde dazu führen, dass ein geöffnetes `auto` Popover ausgeblendet wird.

Sehen Sie unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel, das genau wie oben beschrieben funktioniert. Das Demo verfügt über eine Schaltflächenleiste; wenn sie gedrückt wird, zeigen die Schaltflächen `auto` Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn sie jedoch darüber gefahren oder fokussiert werden, zeigen die Schaltflächen auch Tooltips (`hint` Popovers), die dem Benutzer eine Vorstellung davon geben, was jede Schaltfläche tut, und die ein aktuell angezeigtes Untermenü nicht ausblenden.

In den folgenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint` Popovers zusammen mit `manual` Popovers verwenden, obwohl es eigentlich nicht viel Grund dafür gibt. Sie sind so gestaltet, dass einige der Einschränkungen von `auto` Popovers umgangen werden, und ermöglichen Anwendungsfälle wie den in diesem Abschnitt beschrieben.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützten Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ mit `auto` Popovers erstellt.

Zuerst die Steuerungsschaltflächen:

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

Die Untermenü-Popovers funktionieren gut, wie sie sind, indem sie sich öffnen, wenn die Symbolleistenschaltflächen gedrückt werden, aber wie zeigen wir außerdem Tooltips bei Schaltflächen-Hover/Focus? Zuerst erstellen wir die Tooltips im HTML, unter Verwendung von `hint` Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um die Anzeige/Verbergung zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen auf die `hint` Popovers und die Steuerungsschaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Anschließend erstellen wir eine Funktion `addEventListeners()`, die vier Ereignis-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einer gegebenen {{htmlelement("button")}} setzt, ausgewählt durch Ergreifen des `<button>` an einem spezifischen Indexwert der `btns` `NodeList`. Die Funktionen wirken auf das `hint` Popover am gleichen Indexwert der `tooltips` `NodeList`, was es uns ermöglicht, die Schaltflächen und die Tooltips synchron zu halten — das richtige Tooltip zu zeigen/verbergen, wenn mit einer Schaltfläche interagiert wird.

Die Ereignis-Listener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event), und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips mit Maus und Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns` `NodeList` zu iterieren und die `addEventListeners()`-Funktion für jede von ihnen aufzurufen, sodass alle die gewünschten Ereignis-Listener gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Gestalten von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Auswahl von Popovers

Sie können alle Popovers mit einem einfachen Attributselektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen spezifischen Popover-Typ auswählen, indem Sie einen Wert in den Attributselektor einfügen:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die derzeit angezeigt werden, unter Verwendung der {{cssxref(":popover-open")}}-Pseudoklasse:

```css
:popover-open {
  /* Declarations here */
}
```

### Gestalten des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudoelement ist ein bildschirmfüllendes Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Schicht")}} platziert wird und es ermöglicht, Effekte auf die Seiteninhalte hinter dem/den Popover(s) hinzuzufügen, wenn gewünscht. Sie könnten zum Beispiel den Inhalt hinter dem Popover verschwommen machen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie unser [Beispiel für einen verschwommenen Hintergrund beim Popover](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) für eine Idee davon, wie dies gerendert wird.

### Positionierung von Popovers

Beim Betrachten der ersten paar Beispiele, die zu Beginn des Artikels verlinkt sind, haben Sie vielleicht bemerkt, dass die Popovers in der Mitte des Viewports erscheinen, ihre Inhalte umschließen und einen schwarzen Rand haben. Dies ist das Standardstyling, erreicht durch die folgende Regel im UA-Stylesheet:

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

Um benutzerdefinierte Größen zu vergeben und das Popover woanders zu positionieren, könnten Sie die obigen Stile mit so etwas überschreiben:

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

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt zum Viewport oder einem positionierten Vorfahren positionieren möchten, können Sie die Tatsache ausnutzen, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

[Das Verknüpfen jeder Art von Popover mit seinem Invoker](#andere_möglichkeiten,_eine_popover-invoker-beziehung_herzustellen) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Invoker das **Ankerelement** des Popovers wird, sodass Sie das Popover relativ dazu positionieren können, indem Sie [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Da die Zuordnung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Zuordnung über die {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften hergestellt werden. Dennoch müssen Sie das Positionierungs-CSS angeben.

Zum Beispiel könnten Sie eine Kombination aus {{cssxref("anchor()")}}-Funktionswerten, die auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt sind, und `anchor-center`-Werte, die auf Ausrichtungseigenschaften gesetzt sind, verwenden:

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

Siehe [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Zuordnung von Anker- und positionierten Elementen und zur Positionierung relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Verknüpfung nutzt, siehe unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Ankerzuordnungen mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften gemacht wurden.

## Popovers animieren

Popovers sind auf `display: none;` gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie aus der {{Glossary("top_layer", "obersten Schicht")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Damit Popovers animiert werden können, muss die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, damit der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Beispielsweise:

- Wenn `display` von `none` auf `block` (oder einen anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Zeit sichtbar ist.

> [!NOTE]
> Bei der Animation unter Verwendung von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu aktivieren. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} at-Regel
  - : Bietet einen Satz von Ausgangswerten für die auf das Popover gesetzten Eigenschaften, von denen Sie übergehen möchten, wenn es zum ersten Mal angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert auf einen anderen bei einem sichtbaren Element ändert; sie werden nicht beim ersten Stilupdate eines Elements oder beim Ändern des `display`-Typs von `none` auf einen anderen Typ ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergänge hinzu, damit das Popover für die Dauer des Übergangs `display: block` (oder einen anderen sichtbaren `display`-Wert) bleibt und die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Liste der Übergänge hinzu, um sicherzustellen, dass das Entfernen des Popovers von der obersten Schicht zurückgestellt wird, bis der Übergang abgeschlossen ist, was wiederum die Sichtbarkeit des Übergangs sicherstellt.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Attribut als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung für das Popover festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergangsweise animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausgeblendet wird, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Ausgangszustand für diese Eigenschaften auf den verborgenen Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation zu definieren, während das Popover angezeigt oder verborgen wird.

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

- Einen Ausgangszustand für den `transition`-Wert im `@starting-style`-Block festgelegt.
- `Display` zur Liste der Übergangseigenschaften hinzugefügt, damit das animierte Element während der Ein- und Ausblendanime sichtbar bleibt (auf `display: block` eingestellt). Ohne dies wäre die Ausblendanimation nicht sichtbar; das Popover würde in der Praxis einfach verschwinden.
- `Overlay` zur Liste der Übergangseigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements von der obersten Schicht zurückgestellt wird, bis die Animation abgeschlossen ist. Die Wirkung davon ist möglicherweise bei einfachen Animationen wie dieser nicht bemerkbar, aber bei komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- Auf beide Eigenschaften in den obigen Übergängen `allow-discrete` gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch ein Übergang für das [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingeschlossen haben, das hinter dem Popover erscheint, wenn es öffnet, und eine nette Abdunkelungsanimation bietet.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal beim Auftreten des Eingangsübergangs von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zu seinem Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

### Eine Popover-Keyframe-Animation

Bei der Animation eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keine `@starting-style` an; Sie schließen Ihre "to" und "from" `display`-Werte in Keyframes ein.
- Sie aktivieren keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` in Keyframes.
- Sie müssen `overlay` in Keyframes nicht festsetzen; die `display`-Animation behandelt die Animation des Popovers vom angezeigten zum versteckten Zustand.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung für das Popover festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Ein- und Ausblendeffekte sowie eine Einblendung nur für das Backdrop angeben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Backdrops zu animieren — das Backdrop wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass es nichts zu animieren gibt.

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
