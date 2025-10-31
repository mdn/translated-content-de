---
title: Nutzung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Erstellen deklarativer Popover

In seiner einfachsten Form wird ein Popover erstellt, indem dem Element, das den Popover-Inhalt enthalten soll, das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut hinzugefügt wird. Eine `id` wird ebenfalls benötigt, um den Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert ist gleichbedeutend mit dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite verborgen wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um den Popover zu zeigen/verbergen, müssen Sie mindestens einen Steuerknopf (auch bekannt als Popover-**Invoker**) hinzufügen. Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerknopf setzen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu kontrollierenden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Knopf ein Umschaltknopf ist — das wiederholte Drücken wird den Popover zwischen gezeigt und verborgen umschalten.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden — dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Knöpfe zum Zeigen und Verbergen zu erstellen, könnten Sie dies so tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Codebeispiel in unserem [Beispiel für ein einfaches deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf durchgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} platziert, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten sehr ähnliche Funktionalitäten wie `popovertarget` und `popovertargetaction`, sind jedoch allgemeiner ausgelegt, um andere Funktionalitäten jenseits von Popover-Befehlen zu unterstützen, einschließlich benutzerdefinierter Befehle.

Das vorherige Codebeispiel könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Automatischer Zustand und "leichtes Verwerfen"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt wird, befindet es sich im **automatischen Zustand**. Die beiden wichtigen Verhaltensweisen, die es zu beachten gilt, sind:

- Der Popover kann "leicht verworfen" werden — das bedeutet, dass Sie das Popover verstecken können, indem Sie außerhalb davon klicken.
- Der Popover kann auch mit browser-spezifischen Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, wird das erste verbergen. Die Ausnahme zu dieser Regel ist, wenn Sie verschachtelte automatische Popover haben. Siehe den Abschnitt [Verschachtelte Popover](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> `popover="auto"`-Popover werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument verworfen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem angezeigten Popover zu einem Fehler führt, da diese Verhaltensweisen auf einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf ein Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Automatischer Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere UI-Lehrenachrichten, die Sie anzeigen möchten, aber nicht möchten, dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in unserem [Beispiel für mehrere automatische Popover](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popover leicht zu verwerfen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Barrierefreiheitsfunktionen von Popovers

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, führt die API automatisch zwei weitere Änderungen in der Umgebung durch, um Tastatur- und technologieunterstützten Benutzern das Interagieren mit dem Popover zu erleichtern:

- Wenn der Popover angezeigt wird, wird die Tastatur-Fokus-Navigationsreihenfolge so aktualisiert, dass der Popover als nächstes in der Reihenfolge steht: Zum Beispiel, wenn ein Knopf gedrückt wird, um einen Popover anzuzeigen, stehen alle Knöpfe innerhalb des Popovers in der Tabulatorreihenfolge (fokussierbar durch Drücken der <kbd>Tab</kbd>-Taste). Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus zurück zum Invoker verschoben.
- Um AT wie Screenreadern die Beziehung zwischen dem Invoker und dem Popover verständlich zu machen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Die Einrichtung einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise schafft auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung einzurichten

Sie können eine Popover-Invoker-Beziehung auch auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwenden der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Fokus-Navigationsreihenfolge geändert wird, nicht jedoch die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Auswahlmenü, wenn Sie sich für die Funktionalität eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die {{cssxref("appearance")}}-Eigenschaft `base-select` entscheiden. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Nutzung des manuellen Popover-Zustands

Eine Alternative zum automatischen Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Der Popover kann nicht "leicht verworfen" werden, obwohl deklarative Anzeige-/Verbergungs-/Umschalt-Schaltflächen (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popover können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popover](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle`- und `toggle`-Ereignisse

Sie können auf das Anzeigen oder Verbergen eines Popovers mit den Ereignissen [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) reagieren:

- `beforetoggle` wird direkt vor dem Anzeigen oder Verbergen eines Popovers ausgelöst. Dies kann zum Beispiel verwendet werden, um das Anzeigen oder Verbergen des Popovers zu verhindern (durch Verwendung von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach seiner Verwendung zu bereinigen.
- `toggle` wird unmittelbar nach dem Anzeigen oder Verbergen eines Popovers ausgelöst. Dies wird im Allgemeinen verwendet, um anderen Code in Reaktion auf eine Änderung des Popover-Umschaltzustands auszuführen.

Beide Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis besitzt die folgenden Funktionen zusätzlich zu denen, die vom Standard-`Event`-Objekt geerbt werden:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, von welchem Zustand der Popover gerade gewechselt hat und zu welchem, sodass Sie spezifisch auf das Öffnen oder Schließen eines Popovers reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält eine Referenz zum HTML-Popover-Steuerelement-Element, das den Umschaltvorgang initiiert hat, sodass Sie verschiedenen Code in Reaktion auf das Umschalt-Ereignis je nach dem Steuerungselement laufen lassen können, das es initiiert hat.

Typische Nutzung könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Siehe die vorherigen Referenzlinks für weitere Informationen und Beispiele.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch nützlich zur Funktions-Erkennung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, um die Steuerknöpfe für ein Popover einzurichten, obwohl der Eigenschaftswert eine Referenz zum Popover-DOM-Element zur Steuerung ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-globalen HTML-Attribut, um die Aktion festzulegen, die von einem Steuerknopf ausgeführt wird.

Indem Sie diese drei zusammenfügen, können Sie programmgesteuert ein Popover und seinen Steuerknopf einrichten, wie folgt:

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

Sie haben auch mehrere Methoden zur Steuerung des Zeigens und Verbergens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), um ein Popover umzuschalten.

Zum Beispiel möchten Sie möglicherweise die Fähigkeit bereitstellen, ein Hilfe-Popover mit einem Klick auf einen Knopf oder das Drücken einer bestimmten Taste auf der Tastatur ein- oder auszuschalten. Das erste könnte deklarativ erreicht werden, oder Sie könnten es so mit JavaScript tun, wie oben gezeigt.

Für das zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine, um den Popover zu öffnen, und eine andere, um ihn wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudo-Klasse trifft nur auf Popovers zu, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits ausgeblendetes Popover zu verbergen.

Alternativ könnten Sie eine einzige Taste programmieren, um das Popover zu zeigen _und_ zu verbergen, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel zur Umschaltung der Hilfe-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Funktions-Erkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere automatische Popovers gleichzeitig angezeigt werden sollten — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

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

Siehe unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel. Sie werden feststellen, dass einige Ereignishandler verwendet wurden, um das Unterpopover während des Maus- und Tastaturzugriffs entsprechend anzuzeigen und zu verbergen sowie um beide Menüs zu verbergen, wenn eine Option aus einem von beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder auf einer mehrseitigen Website, mag es sein, dass einige oder alle davon nicht notwendig sind, aber sie wurden in diesem Demo zu Illustrationszwecken aufgenommen.

## Nutzung des "hint"-Popover-Zustands

Es gibt einen dritten Typ von Popovers, die Sie erstellen können — **Hinweis-Popovers**, die durch Setzen von `popover="hint"` auf Ihr Popover-Element festgelegt werden. `hint`-Popover schließen keine `auto`-Popover, wenn sie angezeigt werden, aber sie schließen andere `hint`-Popover. Sie können leicht verworfen werden und werden auf Schließanforderungen reagieren.

Dies ist nützlich für Situationen, in denen beispielsweise Werkzeugleistentasten gedrückt werden können, um UI-Popovers anzuzeigen, aber Sie möchten auch Tooltips zeigen, wenn die Tasten überfahren werden, ohne dass die UI-Popovers geschlossen werden.

`hint`-Popover neigen dazu, in Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und verborgen zu werden. Das Klicken auf einen Knopf, um ein `hint`-Popover zu öffnen, würde dazu führen, dass ein offenes `auto`-Popover leicht verworfen wird.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau wie beschrieben funktioniert. Das Demo enthält eine Schaltflächenleiste; wenn Sie gedrückt werden, zeigen die Knöpfe `auto`-Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn jedoch überfahren oder fokussiert, zeigen die Knöpfe auch Tooltips (`hint`-Popover), um dem Benutzer eine Vorstellung davon zu geben, was jeder Knopf tut, die ein derzeit angezeigtes Untermenü nicht ausblenden.

In den folgenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint`-Popover neben `manual`-Popovers verwenden, obwohl es dafür kaum einen wirklichen Grund gibt. Sie sind so gestaltet, dass sie einige der Einschränkungen von `auto`-Popovers umgehen und Anwendungsfälle wie den in diesem Abschnitt beschriebenen ermöglichen.
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

Die Untermenü-Popovers funktionieren gut, so wie sie sind, und öffnen sich, wenn die Werkzeugleistentasten gedrückt werden, aber wie zeigen wir auch Tooltips bei Tastenhover/Fokus an? Zuerst erstellen wir die Tooltips in HTML mit `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im [Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) des Demos sind die Tooltips innerhalb der Popover-Steuerknöpfe verschachtelt. Dies liegt daran, dass sie eine bessere Rückfallebene in nicht unterstützenden Browsern bieten — die `hint`-Popovers erscheinen neben ihren zugeordneten Steuerknöpfen statt irgendwo anders.

Um das Zeigen/Verbergen zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen zu den `hint`-Popovers und die Steuerknöpfe in zwei separate [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einen gegebenen {{htmlelement("button")}} setzt, indem sie den `<button>` an einem bestimmten Indexwert der `btns`-`NodeList` auswählt. Die Funktionen wirken auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList`, sodass wir die Knöpfe und Tooltips synchronisieren können — das richtige Tooltip wird gezeigt/verborgen, wenn ein Knopf angeklickt wird.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) den Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) den Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur zugänglich sind.

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

Abschließend verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns`-`NodeList` zu iterieren und die `addEventListeners()`-Funktion für jedes auszuführen, sodass alle die gewünschten Ereignislistener gesetzt haben.

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

Alternativ können Sie einen speziellen Popover-Typ auswählen, indem Sie einen Wert im Attribut-Selektor angeben:

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

### Styling der Popover-Rückseite

Das {{cssxref("::backdrop")}}-Pseudo-Element ist ein ganzseitiges Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird, wodurch Effekte zu den Inhalten der Seite hinter dem/den Popover(s) hinzugefügt werden können, falls gewünscht. Sie könnten zum Beispiel die Inhalte hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Siehe unser [Beispiel für Popover mit verschwommenem Hintergrund](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)), um sich eine Vorstellung davon zu machen, wie dies gerendert wird.

### Positionierung von Popovers

Beim Durchsehen der ersten paar oben verlinkten Beispiele haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Viewports erscheinen, ihren Inhalt umschließen und einen schwarzen Rand haben. Dies ist das Standardstyling, das durch die folgende Regel im UA-Stylesheet erreicht wird:

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

Sie können ein isoliertes Beispiel davon in unserem [Beispiel für Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt zum Viewport oder einem positionierten Vorfahren positionieren möchten, können Sie diesen Vorteil nutzen, denn Popovers und ihre Invoker haben eine **implizite Ankerreferenz**.

[Das Verknüpfen jeder Art von Popover mit seinem Invoker](#andere_möglichkeiten,_eine_popover-invoker-beziehung_einzurichten) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Zuordnung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Zuordnung durch die {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden. Sie müssen jedoch trotzdem die Positionierungs-CSS angeben.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten, die auf {{Glossary("inset_properties", "Einfügeigenschaften")}} gesetzt sind, und `anchor-center`-Werten, die auf Ausrichtungseigenschaften gesetzt sind, verwenden:

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

Beim Verwenden von {{cssxref("position-area")}} oder {{cssxref("anchor()")}} zur Positionierung von Popovers müssen Sie beachten, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der von Ihnen angestrebten Positionierung in Konflikt stehen können. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, sodass es ratsam ist, diese zurückzusetzen, wie in den obigen Beispielen. Die CSS-Arbeitsgruppe [überlegt, wie sich dieser Workaround vermeiden lässt](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Zuordnung von Anker- und positionierten Elementen und zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Ein Beispiel, das diese implizite Zuordnung verwendet, finden Sie in unserem [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie den CSS-Code überprüfen, werden Sie sehen, dass keine expliziten Ankerzuordnungen unter Verwendung der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um das Popover nicht mehr an seinen Invoker zu binden, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, beispielsweise `--not-an-anchor-name`. Siehe auch [das Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Animation von Popovers

Popovers haben `display: none;` gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie entfernt aus / hinzugefügt zur {{Glossary("top_layer", "obersten Ebene")}} und dem [Zugänglichkeit-Baum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree). Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen `display`-Wert umschalten, sodass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) schaltet der Wert bei `0%` der Animationsdauer auf `block` um, damit er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` schaltet der Wert bei `100%` der Animationsdauer auf `none` um, damit er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Bei der Animation mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

### Transition eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} at-rule
  - : Bietet eine Reihe von Ausgangswerten für auf das Popover gesetzte Eigenschaften, von denen aus Sie die Transition durchführen möchten, wenn es zuerst angezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig erfolgen CSS-Übergänge nur, wenn sich eine Eigenschaft von einem Wert auf einen anderen bei einem sichtbaren Element ändert; sie werden nicht bei der ersten Stilaktualisierung eines Elements oder beim Wechsel von `display` von `none` zu einem anderen Typ ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während der gesamten Übergangsdauer als `display: block` (oder ein anderer sichtbarer `display`-Wert) sichtbar bleibt und die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Ebene bis zum Abschluss des Übergangs verschoben wird, wodurch erneut sichergestellt wird, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf die {{cssxref("transition")}}-Kurzschrift), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Sehen wir uns ein Beispiel an, damit Sie sehen können, wie dies aussieht:

#### HTML

Das HTML enthält ein als Popover deklariertes {{htmlelement("div")}}-Element über das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-HTML-Attribut und ein {{htmlelement("button")}}-Element, das als Steuerung für die Popover-Anzeige festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform). Wir möchten, dass der Popover beim Erscheinen oder Verschwinden verblasst, während er horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Ausgangszustand für diese Eigenschaften im versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]`- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudo-Klasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/Reference/Properties/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Animationsdauer zu definieren, wenn das Popover gezeigt oder verborgen wird.

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

Wie bereits früher besprochen, haben wir auch:

- Einen Ausgangszustand für den `transition` innerhalb des `@starting-style` Blocks gesetzt.
- `display` zur Liste der Übergangs-Eigenschaften hinzugefügt, sodass das animierte Element während des Eintritts- und Austrittsanimations des Popovers als `display: block` (oder ein anderer sichtbarer `display`-Wert) sichtbar bleibt. Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden.
- `overlay` zur Liste der Übergangs-Eigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene bis zum Abschluss der Animation verschoben wird. Der Effekt davon mag bei einfachen Animationen wie dieser nicht bemerkbar sein, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beiden Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf der hinter dem Popover erscheinenden [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingeschlossen haben, der eine schöne Verdunklungsanimation bietet.

#### Resultat

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Öffnen von `display: none` zu `display: block` wechseln, wechseln die Popover von ihren `@starting-style`-Stilen zu ihren `[popover]:popover-open`-Stilen jedes Mal, wenn der Eintrittsübergang erfolgt. Wenn das Popover schließt, erfolgt der Übergang von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Nachweis dafür.

### Eine Popover-Schlüsselbildanimation

Beim Animieren eines Popovers mit CSS-Schlüsselbildanimationen gibt es einige wichtige Unterschiede zu beachten:

- Sie sollten keine `@starting-style` angeben; Sie integrieren Ihre "to"- und "from"-`display`-Werte in Schlüsselbilder.
- Sie aktivieren keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` nicht innerhalb von Schlüsselbildern setzen; die `display`-Animation behandelt die Animation des Popovers vom Standpunkt angezeigt zu versteckt.

Lassen Sie uns ein Beispiel betrachten.

#### HTML

Das HTML enthält ein als Popover deklariertes {{htmlelement("div")}}-Element, und ein {{htmlelement("button")}}-Element, das als Steuerung für die Popover-Anzeige festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschte Eintritts- und Austrittsanimationen spezifizieren, und eine Eintrittsanimation nur für das Backdrop. Beachten Sie, dass es nicht möglich war, das Backdrop-Ausblenden zu animieren — das Backdrop wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, so dass nichts zu animieren ist.

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

#### Resultat

Der Code rendert wie folgt:

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}
