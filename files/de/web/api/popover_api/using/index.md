---
title: Verwenden der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten, die über anderen Seiteninhalten angezeigt werden. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Deklarative Popovers erstellen

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das Sie für den Popover-Inhalt verwenden möchten. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Durch das Hinzufügen dieses Attributs wird das Element beim Laden der Seite ausgeblendet, indem {{cssxref("display", "display: none")}} darauf angewendet wird. Um das Popover anzuzeigen/verbergen, müssen Sie mindestens einen Steuerknopf (auch als der Popover-**Invoker** bekannt) hinzufügen. Sie können einen {{htmlelement("button")}} (oder ein {{htmlelement("input")}} des Typs `type="button"`) als Popover-Steuerknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass der Knopf ein Umschaltknopf ist – ein wiederholtes Drücken wird das Popover zwischen sichtbar und verborgen umschalten.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden – dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um zum Beispiel separate Anzeig- und Verbergknöpfe zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Code-Schnipsel in unserem [Grundlegenden deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` von ihm entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} verschoben, sodass es über allen anderen Seiteninhalten angezeigt wird.

### `command` und `commandfor`

Die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribute bieten eine ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das auf die Bereitstellung anderer Funktionen über Popover-Befehle hinaus, einschließlich benutzerdefinierter Befehle, abzielt.

Der vorherige Code-Schnipsel könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "leichtes Verwerfen"

Wenn ein Popover-Element wie oben gezeigt mit `popover` oder `popover="auto"` gesetzt ist, sagt man, es hat einen **Auto-Zustand**. Die zwei wichtigen Verhaltensweisen, die zum Auto-Zustand beachtet werden sollten, sind:

- Das Popover kann "leicht verworfen" werden – das bedeutet, dass Sie das Popover durch Klicken außerhalb ausblenden können.
- Das Popover kann auch mit browser-spezifischen Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein `auto` Popover auf einmal angezeigt werden – das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, versteckt das erste. Eine Ausnahme von dieser Regel besteht, wenn Sie verschachtelte Auto-Popovers haben. Siehe den Abschnitt zu [Verschachtelten Popovers](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument verworfen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem angezeigten Popover zum Fehler führt, da diese Verhaltensweisen auf einem bereits angezeigten Popover nicht sinnvoll sind. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie jeweils nur ein Popover anzeigen möchten. Vielleicht haben Sie mehrere Lehr-UI-Nachrichten, die Sie anzeigen möchten, ohne dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht zu verwerfen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Zugänglichkeitsfunktionen von Popovers

Wenn eine Beziehung zwischen einem Popover und seinem Steuerungselement (Invoker) über das `popovertarget`-Attribut hergestellt wird, führt die API automatisch zwei weitere Änderungen an der Umgebung durch, um Tastatur- und unterstützenden Technologiebenutzern das Interagieren mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Navigationsreihenfolge der Tastaturfokusse aktualisiert, sodass das Popover als nächstes in der Sequenz ist: Zum Beispiel, wenn ein Knopf gedrückt wird, um ein Popover anzuzeigen, werden alle Knöpfe im Popover als nächstes in der Tab-Reihenfolge sein (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (gewöhnlich durch Drücken der <kbd>Esc</kbd>-Taste) der Fokus zurück zum Invoker verschoben.
- Um unterstützenden Technologien wie Bildschirmlesegeräten das Verstehen der Beziehung zwischen dem Invoker und dem Popover zu ermöglichen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer solchen Beziehung zwischen einem Popover und seiner Steuerung sorgt zusätzlich für eine implizite Ankerreferenz zwischen den beiden – siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung herzustellen

Sie können eine Popover-Invoker-Beziehung auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwenden der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Fokus-Navigationsreihenfolge geändert wird, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element festgelegt werden kann, nicht nur auf `<button>` Elemente, und es nicht garantiert werden kann, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Auswahlmenü, wenn es für die Funktionalität des [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) in die Funktionalität des anpassbaren Auswahl-Elements über die {{cssxref("appearance")}}-Eigenschaft `base-select`-Wert einbezogen wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwenden des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht verworfen" werden, obwohl die deklarativen Anzeigen/Verbergen/Umschaltknöpfe (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle` und `toggle` Events

Sie können auf das Anzeigen oder Verbergen eines Popovers mithilfe der [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Events reagieren:

- `beforetoggle` wird kurz bevor ein Popover angezeigt oder verborgen wird ausgelöst. Dies kann verwendet werden, um zum Beispiel das Anzeigen oder Verbergen des Popovers zu verhindern (mithilfe von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach der Nutzung zu bereinigen.
- `toggle` wird direkt nachdem ein Popover angezeigt oder verborgen wird ausgelöst. Es wird im Allgemeinen verwendet, um anderen Code in Reaktion auf eine geänderte Popover-Umschaltstatus auszuführen.

Beide dieser Events haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Ereignisobjekt. Dieses Ereignis hat die folgenden Eigenschaften zusätzlich zu denen, die vom standardmäßigen [`Event`](/de/docs/Web/API/Event) Objekt geerbt werden:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, von welchem Zustand das Popover gerade übergegangen ist und zu welchem, was Ihnen ermöglicht, spezifisch auf das Öffnen oder Schließen eines Popovers zu reagieren.
- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft enthält einen Verweis auf das HTML-Popover-Steuerelement, das das Umschalten initiiert hat, was Ihnen ermöglicht, unterschiedlichen Code in Reaktion auf das Umschaltereignis abhängig davon auszuführen, welches Steuerelement es initiiert hat.

Typische Nutzung sieht möglicherweise so aus:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Sehen Sie sich die vorherigen Referenzlinks für mehr Informationen und Beispiele an.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut abzurufen oder festzulegen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch nützlich für die Funktionserkennung. Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, sodass Sie die Steuerknöpfe für ein Popover einrichten können, obwohl der Eigenschaftswert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) globalen HTML-Attribut, mit dem Sie die Aktion festlegen können, die von einem Steuerknopf durchgeführt wird.

Mithilfe dieser drei können Sie ein Popover und seinen Steuerknopf programmatisch einrichten, wie folgt:

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

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) um ein Popover umzuschalten.

Beispielsweise könnten Sie die Möglichkeit bereitstellen, ein Hilfepopover durch Klicken auf einen Knopf oder durch Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert – eine, um das Popover zu öffnen, und eine, um es erneut zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse stimmt nur mit Popovers überein, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits verborgenes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover zu zeigen _und_ zu verstecken, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Siehe unser [Toggle-Hilfe-UI-Beispiel](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) um die Popover-JavaScript-Eigenschaften, die Funktionserkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere Auto-Popovers gleichzeitig angezeigt werden können – wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet werden, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

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

Sehen Sie sich unser [Beispiel für verschachtelte Popover-Menüs](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an. Sie werden bemerken, dass ziemlich viele Ereignishandler verwendet wurden, um das Sub-Popover während des Maus- und Tastaturzugriffs korrekt anzuzeigen und zu verbergen und auch, um beide Menüs zu verbergen, wenn eine Option aus einem von beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer mehrseitigen Website, können einige oder alle dieser Schritte nicht notwendig sein, aber sie wurden in diesem Demo zu Illustrationszwecken aufgenommen.

## Verwenden des "Hinweis"-Popover-Zustands

Es gibt einen dritten Typ von Popover, den Sie erstellen können – **Hinweis-Popovers**, die durch Setzen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind. `hint`-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere `hint`-Popovers. Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Symbolleisten-Schaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber auch Tooltips enthüllen möchten, wenn die Schaltflächen schwebend sind, ohne die UI-Popovers zu schließen.

`hint`-Popovers werden in der Regel in Reaktion auf nicht-klickbezogene JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen. Das Klicken auf einen Button, um ein `hint`-Popover zu öffnen, würde ein offenes `auto`-Popover leicht verwerfen.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel an, das genau wie oben beschrieben funktioniert. Das Demo enthält eine Schaltflächenleiste; beim Drücken zeigen die Schaltflächen `auto` Pop-up-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn jedoch über oder fokussiert, zeigen die Schaltflächen auch Tooltips (`hint`-Popovers) an, um dem Benutzer eine Vorstellung davon zu geben, was jede Schaltfläche tut, die derzeit angezeigte Untermenüs jedoch nicht verbergen.

In den untenstehenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint`-Popovers neben `manual`-Popovers verwenden, auch wenn es dafür keinen großen Grund gibt. Sie sind dazu ausgelegt, einige der Einschränkungen von `auto`-Popovers zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

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

Die Untermenü-Popovers funktionieren einwandfrei, indem sie geöffnet werden, wenn die Werkzeugleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips bei Schalterüberlagerung/fokussieren? Zuerst erstellen wir die Tooltips in HTML, indem wir `hint`-Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um das Anzeigen/Verbergen zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir uns Referenzen auf die `hint`-Popovers und die Steuerschaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion, `addEventListeners()`, welche vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem gegebenen {{htmlelement("button")}} setzt, der ausgewählt wird, indem der `<button>` an einem bestimmten Indexwert der `btns`-`NodeList` abgerufen wird. Die Funktionen wirken auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList`, was es uns erlaubt, die Schalter und die Tooltips in Einklang zu bringen – indem wir den richtigen Tooltip anzeigen oder verstecken, wenn ein Schalter interagiert wird.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover beim [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event), und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover beim [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur zugreifbar sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<button>`s in der `btns`-`NodeList` zu iterieren, und rufen die `addEventListeners()`-Funktion für jedes von ihnen auf, sodass alle die gewünschten Ereignislistener haben.

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

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attributselektor angeben:

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

### Stil des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudo-Element ist ein Vollbild-Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird, sodass Effekte zu den Seiteninhalten hinter dem Popover hinzugefügt werden können, wenn gewünscht. Sie möchten zum Beispiel möglicherweise die Inhalte hinter dem Popover verschwimmen lassen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel für einen unscharfen Popover-Hintergrund](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Popovers positionieren

Wenn Sie sich die ersten beiden Beispiele ansehen, die zu Beginn des Artikels verlinkt sind, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Ansichtsfensters erscheinen, ihre Inhalte umschließen und einen schwarzen Rand haben. Dies ist das Standardstyling, erreicht durch die folgende Regel im UA-Stylesheet:

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

Um benutzerdefinierte Größen anzuwenden und das Popover an einer anderen Stelle zu positionieren, könnten Sie die obigen Stile überschreiben mit etwas wie diesem:

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

Sie können ein isoliertes Beispiel davon in unserem [Beispiel für die Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker anstatt zum Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie von der Tatsache profitieren, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

[Das Verknüpfen jeder Art von Popover mit seinem Invoker](#andere_möglichkeiten,_eine_popover-invoker-beziehung_herzustellen) erstellt eine implizite Ankerreferenz zwischen den beiden. Dadurch wird der Invoker zum **Ankerelement** des Popovers, was bedeutet, dass Sie das Popover relativ dazu unter Verwendung von [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Assoziation zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Assoziation unter Verwendung der {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden. Sie müssen jedoch immer noch das positionierende CSS angeben.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Rand-Eigenschaften")}} festgelegt sind, und `anchor-center`-Werte, die auf Ausrichtungseigenschaften festgelegt sind:

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

Wenn Sie {{cssxref("position-area")}} oder {{cssxref("anchor()")}} verwenden, um Popovers zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position kollidieren, die Sie erreichen möchten. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen, wie in den obigen Beispielen. Die CSS-Arbeitsgruppe [überlegt Wege, um dieses Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

Sehen Sie sich [Verwenden der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zum Verknüpfen von Anker- und Positionierungselementen und zur Positionierung von Elementen relativ zu ihrem Anker an.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an. Wenn Sie sich den CSS-Code ansehen, werden Sie sehen, dass keine expliziten Ankerassoziationen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften gemacht werden.

## Popovers animieren

Popovers sind auf `display: none;` eingestellt, wenn sie verborgen sind, und auf `display: block;`, wenn sie angezeigt werden, sowie aus der {{Glossary("top_layer", "obersten Ebene")}} und im [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Daher muss für die Animation von Popovers die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen Wert von `display`, sodass die animierten Inhalte für die gesamte Animationsdauer sichtbar sind. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass es während der gesamten Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass es während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Wenn Sie mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animieren, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) eingestellt sein, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Ein Popover überblenden

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} at-rule
  - : Bietet einen Satz von Startwerten für Eigenschaften, die auf das Popover gesetzt sind und von denen Sie möchten, dass sie sich ändern, wenn es zum ersten Mal angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element wechselt; sie werden nicht auf dem ersten Stil-Update eines Elements oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst.
- {{CSSxRef("display")}} property
  - : Fügen Sie `display` zur Übergangs-Liste hinzu, damit das Popover während des gesamten Übergangs als `display: block` (oder einem anderen sichtbaren `display`-Wert) sichtbar bleibt, wodurch sichergestellt wird, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} property
  - : Integrieren Sie `overlay` in die Übergangsliste, um sicherzustellen, dass das Entfernen des Popovers aus der obersten Ebene bis zum Abschluss des Übergangs verzögert wird, um erneut sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} property
  - : Stellen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzschrift) ein, um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das durch das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-HTML-Attribut als Popover deklariert wird, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers dient:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die zwei Popover-Eigenschaften, die wir überblenden möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover aus- oder einblendet, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf den versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]`- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation beim Anzeigen oder Verbergen des Popovers zu definieren.

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

Wie bereits früher diskriert, haben wir auch:

- Einen Anfangszustand für die `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `display` zu den anzuwendenden Eigenschaften hinzugefügt, damit das animierte Element während der Popover-Ein- und -Ausblendanimationen sichtbar (als `display: block`) bleibt. Ohne dies wäre die Ausblendanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden.
- `overlay` zu den anzuwendenden Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus der obersten Schicht bis zum Abschluss der Animation verzögert wird. Der Effekt davon mag bei einfachen Animationen wie dieser nicht bemerkbar sein, aber in komplexeren Fällen kann ein Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beide Eigenschaften in den oben genannten Transitions gesetzt, um das [diskrete Transitions](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch eine Überblendung auf dem beim Öffnen des Popovers erscheinenden [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinter dem Popover hinzugefügt haben, was eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt wiedergegeben:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da sich Popovers von `display: none` zu `display: block` jedes Mal ändern, wenn sie angezeigt werden, wechselt das Popover bei jedem Einblenden von seinem `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standard `[popover]` Zustand.
>
> Es ist möglich, dass sich die Stilübergänge beim Ein- und Ausblenden unterscheiden können. Sehen Sie sich unser Beispiel [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis davon an.

### Eine Schlüsselbildanimation für das Popover

Wenn Sie ein Popover mit CSS-Schlüsselbild-Animationen animieren, gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an; Sie fügen Ihre "zu" und "von" `display`-Werte in Schlüsselbildern ein.
- Sie aktivieren nicht explizit diskrete Animationen; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` auch nicht innerhalb der Schlüsselbilder setzen; die `display`-Animation behandelt die Animation des Popovers vom Gezeigten zum Verborgenen.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert wurde, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers dient:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Ein- und Ausblend-Animationen angeben und eine Animation nur für den Hintergrund darstellen. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren – der Hintergrund wird direkt aus dem DOM entfernt, wenn das Popover geschlossen wird, daher gibt es nichts zu animieren.

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

Der Code wird wie folgt ausgeführt:

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}
