---
title: Verwenden der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seitenelementen. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung all seiner Funktionen.

## Deklarative Popovers erstellen

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das den Popover-Inhalt enthalten soll. Eine `id` wird ebenfalls benötigt, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite durch {{cssxref("display", "display: none")}} ausgeblendet wird. Um das Popover anzuzeigen/auszublenden, müssen Sie mindestens einen Steuerknopf (auch als Popover-**Invoker** bekannt) hinzufügen. Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} mit `type="button"`) als Popover-Steuerknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu kontrollierenden Popovers ist:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass der Knopf ein Kippschalter ist — durch wiederholtes Drücken wird das Popover zwischen Anzeigen und Ausblenden umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden — dieses nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Zum Beispiel, um separate Knöpfe zum Anzeigen und Ausblenden zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Codeausschnitt in unserem [Basisdeklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die durch einen Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} gestellt, sodass es über allen anderen Seitenelementen steht.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten sehr ähnliche Funktionalitäten wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das darauf abzielt, andere Funktionalitäten über Popover-Befehle hinaus bereitzustellen, einschließlich benutzerdefinierter Befehle.

Der vorherige Codeausschnitt könnte folgendermaßen umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Automatischer Status und "leichtes Ausblenden"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt wird, sagt man, es habe **automatischen Status**. Die zwei wichtigen Verhaltensweisen, die bei automatischem Status zu beachten sind:

- Das Popover kann "leicht ausgeblendet" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb davon ausblenden können.
- Das Popover kann auch mithilfe browser-spezifischer Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, während eines bereits angezeigt wird, blendet das erste aus. Eine Ausnahme dieser Regel liegt vor, wenn Sie verschachtelte automatische Popovers haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument ausgeblendet. Bedenken Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits angezeigten Popover fehlschlägt, da diese Verhaltensweisen auf einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der automatische Status ist nützlich, wenn Sie nur ein einzelnes Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Lehr-Nachrichten im UI, die Sie zeigen möchten, aber nicht möchten, dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status jeden vorherigen überschreibt.

Sie können das oben beschriebene Verhalten in unserem [Beispiel für mehrere automatische Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) in Aktion sehen. Versuchen Sie, die Popovers nach dem Anzeigen leicht auszublenden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Zugänglichkeitsmerkmale

Wenn eine Beziehung zwischen einem Popover und seinem Steuerungs- (Invoker-)Element über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Benutzern von Tastatur und unterstützender Technologie (AT) die Interaktion mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Tastaturfokus-Navigationsreihenfolge aktualisiert, sodass das Popover das nächste in der Reihenfolge ist: Wenn zum Beispiel ein Knopf gedrückt wird, um ein Popover anzuzeigen, werden alle Knöpfe im Popover die nächsten in der Tabulator-Reihenfolge (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird der Fokus beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) zurück auf den Invoker verschoben.
- Um AT wie Bildschirmlesegeräten einen Sinn für die Beziehung zwischen Invoker und Popover zu geben, wird eine implizite Beziehung [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) zwischen ihnen eingerichtet.

Durch das Einrichten einer Beziehung auf diese Weise wird auch ein impliziter Ankerverweis zwischen beiden erstellt – siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Details.

## Andere Möglichkeiten zur Einrichtung einer Popover-Invoker-Beziehung

Sie können eine Popover-Invoker-Beziehung auf andere Weise einrichten, zusätzlich zur Nutzung des `popovertarget`-Attributs:

- Durch Verwenden der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Änderungen der Fokussierungsreihenfolge vorgenommen werden und nicht die implizite ARIA-Beziehung. Dies, weil die `source`-Option auf jede Art von Element festgelegt werden kann, nicht nur auf `<button>`-Elemente, und es nicht garantiert werden kann, dass die Beziehung Sinn ergibt.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Picker, wenn dieses in [anpassbare select-Element]-Funktionalität](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über die {{cssxref("appearance")}}-Eigenschaft `base-select`-Wert eingefügt wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen beiden erstellt.

## Verwenden des manuellen Popover-Status

Eine Alternative zum automatischen Status ist der **manuelle Status**, der durch Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht ausgeblendet" werden, obwohl deklarative Anzeigen/Verstecken/Umschalt-Knöpfe (wie früher gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) in Aktion sehen.

## Die Ereignisse `beforetoggle` und `toggle`

Sie können auf das Anzeigen oder Ausblenden eines Popovers reagieren, indem Sie die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) verwenden:

- `beforetoggle` wird unmittelbar bevor ein Popover angezeigt oder ausgeblendet wird ausgelöst. Dies kann zum Beispiel verwendet werden, um zu verhindern, dass das Popover angezeigt oder ausgeblendet wird (mithilfe von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren oder um den Zustand eines Popovers nach dessen Verwendung zu bereinigen.
- `toggle` wird direkt nachdem ein Popover angezeigt oder ausgeblendet wurde ausgelöst. Dies wird im Allgemeinen verwendet, um anderen Code als Reaktion auf das Ändern des Umschaltstatus eines Popovers auszuführen.

Beide dieser Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Ereignisobjekt. Dieses Ereignis hat die folgenden Eigenschaften zusätzlich zu denen, die es vom Standard-[`Event`](/de/docs/Web/API/Event)-Objekt erbt:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, von welchem Zustand das Popover gerade gewechselt hat und zu welchem, sodass Sie gezielt auf das Öffnen oder Schließen eines Popovers reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält eine Referenz auf das HTML-Popover-Steuerelement, das die Umschaltung initiiert hat, sodass Sie je nachdem, welches Steuerelement es initiiert hat, mit unterschiedlichem Code auf das Umschalt-Ereignis reagieren können.

Typische Verwendung könnte etwa so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Siehe die vorherigen Referenzlinks für weitere Informationen und Beispiele.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich für die Funktionsüberprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, sodass Sie die Steuerknöpfe für ein Popover einrichten können, obwohl der übernommene Eigenschaftswert eine Referenz auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), mit dem Sie die Aktion angeben können, die durch einen Steuerknopf durchgeführt wird.

Indem Sie diese drei zusammenführen, können Sie ein Popover und seinen Steuerungsknopf programmgesteuert einrichten:

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

Sie haben auch mehrere Methoden, um die Anzeige zu steuern:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) um ein Popover auszublenden.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) um ein Popover umzuschalten.

Zum Beispiel möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfe-Popover durch Klicken eines Knopfes oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine um das Popover zu öffnen und eine um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover derzeit angezeigt wird. Die Pseudo-Klasse {{cssxref(":popover-open")}} passt nur auf Popovers, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover erneut anzuzeigen oder ein bereits ausgeblendetes Popover erneut auszublenden.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover zu zeigen _und_ auszublenden, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel für eine umschaltbare Hilfe-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Funktionsprüfung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere automatische Popovers gleichzeitig angezeigt werden können — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über invokierende/steuernde Elemente:

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

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel an. Ihnen wird auffallen, dass ziemlich viele Ereignishandler verwendet wurden, um das Unterpopover bei Maus- und Tastaturzugriffen entsprechend anzuzeigen und auszublenden und auch beide Menüs auszublenden, wenn eine Option aus einem der beiden ausgewählt wird. Abhängig davon, wie Sie neue Inhalte laden, entweder in einer SPA oder Multi-Page-Website, könnte es sein, dass einige oder alle dieser Schritte nicht nötig sind, sie wurden jedoch in diesem Beispiel zu Veranschaulichungszwecken aufgenommen.

## Verwenden des "Hinweis"-Popover-Status

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hinweis-Popovers**, die durch Setzen von `popover="hint"` auf Ihr Popover-Element gekennzeichnet sind. `Hint`-Popovers schließen `auto`-Popovers nicht, wenn sie angezeigt werden, aber sie schließen andere `hint`-Popovers. Sie können leicht ausgeblendet werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie z. B. Symbolleistenknöpfe haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber auch Tooltips angezeigt werden sollen, wenn die Knöpfe überfahren werden, ohne die UI-Popovers zu schließen.

`Hint`-Popovers neigen dazu, als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet zu werden. Das Klicken eines Knopfes, um ein `hint`-Popover zu öffnen, würde dazu führen, dass ein offenes `auto`-Popover leicht ausgeblendet wird.

Sehen Sie sich unser [Beispiel für Hinweispopovers](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau wie oben beschrieben funktioniert. In der Demo gibt es eine Knopfleiste; wenn diese gedrückt werden, zeigen die Knöpfe `auto`-Pop-up-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Beim Überfahren oder Fokussieren zeigen die Knöpfe jedoch auch Tooltips (`hint`-Popovers) an, um dem Benutzer eine Vorstellung davon zu geben, was jeder Knopf tut, ohne ein derzeit angezeigtes Untermenü auszublenden.

In den folgenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, obwohl es dafür keinen wirklichen Grund gibt. Sie sind darauf ausgelegt, einige der Einschränkungen von `auto`-Popovers zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt geschilderten zu ermöglichen.
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

Die Untermenü-Popovers funktionieren gut, wie sie sind, indem sie geöffnet werden, wenn die Symbolleistenknöpfe gedrückt werden, aber wie zeigen wir auch Tooltips bei Knopf-Überfahren/Fokus an? Zuerst erstellen wir die Tooltips in HTML mithilfe von `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im [Quellcode der Demo](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) sind die Tooltips im Popover-Steuerknopf verschachtelt. Dies liegt daran, dass es eine bessere Rückfallebene in Browsern bietet, die CSS-Ankerpositionierung nicht unterstützen — die `hint`-Popovers erscheinen neben ihren zugehörigen Steuerknöpfen und nicht irgendwo anders.

Um die Anzeige/Verbergen zu steuern, müssen wir JavaScript verwenden. Zuerst greifen wir auf die `hint`-Popovers und die Steuerknöpfe in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s über [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zu:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) für einen bestimmten {{htmlelement("button")}} festlegt, der durch das Greifen des `<button>` an einem bestimmten Indexwert der `btns`-`NodeList` ausgewählt wurde. Die Funktionen wirken sich auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList` aus, sodass wir die Knöpfe und die Tooltips synchron halten können — um das richtige Tooltip beim Interagieren mit einem Knopf anzuzeigen/auszublenden.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) an und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) es bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), sodass die Tooltips über Maus und Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns`-`NodeList` zu iterieren und die `addEventListeners()`-Funktion für jeden zu rufen, damit alle die gewünschten Ereignislistener eingestellt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Styling von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Popovers auswählen

Sie können alle Popovers mit einem einfachen Attributselektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attributselektor hinzufügen:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die angezeigt werden, indem Sie die Pseudo-Klasse {{cssxref(":popover-open")}} verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudo-Element ist ein Vollbildelement, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird, um Effekte auf die Seiteninhalte hinter den Popover(s) hinzuzufügen, wenn gewünscht. Sie möchten beispielsweise den Inhalt hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu konzentrieren:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel zum Hintergrundverwischen bei Popovers](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies aussieht.

### Positionierung von Popovers

Beim Betrachten der ersten Beispiele am Anfang des Artikels haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Viewports erscheinen, ihren Inhalt umschließen und eine schwarze Umrandung haben. Dies ist die Standardstilisierung, die mit der folgenden Regel im UA-Stylesheet erreicht wird:

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

Um eine benutzerdefinierte Größe zuzuweisen und das Popover an einer anderen Stelle zu positionieren, können Sie die oben genannten Stile mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel dafür in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt dem Viewport oder einem positionierten Vorfahren positionieren möchten, können Sie von der Tatsache Gebrauch machen, dass Popovers und ihre Invoker einen **impliziten Ankerverweis** haben.

[Die Assoziation jeder Art von Popover mit seinem Invoker](#andere_möglichkeiten_zur_einrichtung_einer_popover-invoker-beziehung) erstellt einen impliziten Ankerverweis zwischen den beiden. Dies veranlasst den Invoker, das **Ankerelement** des Popovers zu werden, sodass Sie das Popover relativ dazu mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Assoziation zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Assoziation mithilfe der Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} hergestellt werden. Sie müssen jedoch die Positionierungs-CSS angeben.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}} Funktionswerten, die auf {{Glossary("inset_properties", "Einsatz-Eigenschaften")}} gesetzt sind, und `anchor-center`-Werte, die auf Ausrichtungseigenschaften gesetzt sind, verwenden:

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

Beim Verwenden von {{cssxref("position-area")}} oder {{cssxref("anchor()")}} zur Positionierung von Popovers ist zu beachten, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position, die Sie erreichen möchten, in Konflikt stehen. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher empfiehlt es sich, diese zurückzusetzen, wie in den obigen Beispielen gezeigt. Die CSS-Arbeitsgruppe untersucht [Möglichkeiten, um diese Maßnahme zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zum Assoziieren von Anker- und positionierten Elementen und zum Positionieren von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an. Wenn Sie den CSS-Code überprüfen, werden Sie sehen, dass keine expliziten Anker-Assoziationen mithilfe der Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} hergestellt werden.

> [!NOTE]
> Wenn Sie den impliziten Ankerverweis entfernen möchten, um zu verhindern, dass das Popover an seinem Invoker verankert wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, z. B. `--not-an-anchor-name`. Siehe auch [das Entfernen einer Anker-Assoziation](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Animieren von Popovers

Popovers werden auf `display: none;` gesetzt, wenn sie ausgeblendet sind und `display: block;`, wenn sie angezeigt werden, und werden aus der {{Glossary("top_layer", "obersten Ebene")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. So zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer zu `block` wechseln, sodass er während der gesamten Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer zu `none` wechseln, sodass er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das obige Verhalten zu aktivieren. Bei Verwendung von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Eigenschaften erforderlich:

- {{CSSxRef("@starting-style")}}-Atregel
  - : Bietet einen Satz von Anfangswerten für die auf das Popover gesetzten Eigenschaften, von denen Sie beim ersten Anzeigen aus übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn sich eine Eigenschaft auf einem sichtbaren Element von einem Wert in einen anderen ändert; sie werden nicht bei der ersten Stilaktualisierung eines Elements oder beim Ändern des `display`-Typs von `none` in einen anderen Typ ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während der gesamten Übergangsdauer `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des Popovers aus der obersten Ebene bis zum Abschluss des Übergangs verzögert wird und der Übergang sichtbar bleibt.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Abkürzung), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die zwei Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) und [`transform`](/de/docs/Web/CSS/Reference/Properties/transform). Wir möchten, dass das Popover während der Zunahme oder Abnahme horizontal verblasst oder schrumpft. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf dem versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)) und ein Endstadium für den angezeigten Zustand des Popovers (ausgewählt über die Pseudo-Klasse [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open)). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/Reference/Properties/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation beim Anzeigen oder Ausblenden des Popovers zu definieren.

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

Wie zuvor erwähnt, haben wir auch:

- Einen Anfangszustand für die `transition` im Block `@starting-style` gesetzt.
- `display` in die Liste der Übergangseigenschaften aufgenommen, damit das animierte Element während des Ein- und Ausblendevorgangs des Popovers sichtbar bleibt (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden.
- `overlay` in die Liste der Übergangseigenschaften aufgenommen, um sicherzustellen, dass das Entfernen des Elements aus der obersten Ebene bis zum Abschluss der Animation verzögert wird. Der Effekt davon ist möglicherweise bei grundlegenden Animationen wie dieser nicht erkennbar, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang vollständig ist.
- `allow-discrete` für beide Eigenschaften in den oberen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf dem erscheinenden [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) hinter dem Popover beim Öffnen enthalten haben, was eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, geht das Popover bei jedem Einblendeübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen über. Wenn das Popover schließt, geht es von seinem `[popover]:popover-open`-Zustand in den Standard-`[popover]`-Zustand über.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austreten in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis davon.

### Eine Keyframe-Animation für ein Popover

Bei der Animation eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an; Sie fügen Ihre "to" und "from" `display`-Werte in Keyframes ein.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch innerhalb von Keyframes nicht setzen; die `display`-Animation behandelt die Animation des Popovers von angezeigt bis verborgen.

Sehen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Ein- und Austrittsanimationen angeben, und eine Eingangsanimation nur für das Backdrop. Beachten Sie, dass es nicht möglich war, das Backdrop-Ausblenden zu animieren — das Backdrop wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts zu animieren bleibt.

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
