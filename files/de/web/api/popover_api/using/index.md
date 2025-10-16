---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 827fdf3b0a52b14af5962cb2c9d3b59e213c2a57
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen der API.

## Deklarative Popover erstellen

In seiner einfachsten Form wird ein Popover erstellt, indem das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu dem Element hinzugefügt wird, das Ihre Popover-Inhalte enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen oder auszublenden, müssen Sie mindestens einen Steuerknopf hinzufügen (auch als Popover-**Invoker** bekannt). Sie können eine {{htmlelement("button")}} (oder ein {{htmlelement("input")}} vom `type="button"`) als Popover-Steuerknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers ist:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Button ein Umschaltknopf ist — das wiederholte Drücken wird das Popover zwischen Sichtbar und Versteckt umschalten.

Wenn Sie dieses Verhalten ändern möchten, können Sie das Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) verwenden — dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Anzeigen- und Ausblenden-Schaltflächen zu erstellen, können Sie dies so tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Codebeispiel in unserem [Basic declarative popover example](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) gerendert wird ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)).

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` entfernt und es wird in die {{Glossary("top_layer", "Top-Ebene")}} verschoben, sodass es über allen anderen Seiteninhalten angezeigt wird.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das andere Funktionalitäten jenseits von Popover-Befehlen ermöglicht, einschließlich benutzerdefinierter Befehle.

Das vorherige Code-Snippet könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "light dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` gesetzt ist, wie oben gezeigt, befindet es sich im sogenannten **Auto-Zustand**. Die zwei wichtigen Verhaltensweisen des Auto-Zustands sind:

- Das Popover kann "leicht verworfen" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb davon ausblenden können.
- Das Popover kann auch mithilfe browserspezifischer Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein `auto` Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie geschachtelte Auto-Popover haben. Siehe den Abschnitt über [Geschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> [!NOTE]
> Popover mit `popover="auto"` werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument verworfen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits angezeigten Popover fehlschlägt, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf ein Element mit dem `popover`-Attribut anwenden, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie immer nur ein einzelnes Popover auf einmal anzeigen möchten. Vielleicht haben Sie mehrere Benachrichtigungen im UI, die Sie zeigen möchten, ohne dass die Anzeige unübersichtlich wird, oder Sie zeigen Statusnachrichten an, bei denen der neue Status jeden vorherigen überlagert.

Das oben beschriebene Verhalten können Sie in unserem [Multiple auto popovers example](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht zu verwerfen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Barrierefreiheit bei Popovers

Wenn eine Beziehung zwischen einem Popover und dessen Steuerelement (Invoker) über das Attribut `popovertarget` hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und assistiven Technologiebenutzern (AT) die Interaktion mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Reihenfolge der Tastaturfokusnavigation so aktualisiert, dass das Popover als nächstes in der Reihenfolge ist: Zum Beispiel, wenn ein Knopf zum Anzeigen eines Popovers gedrückt wird, werden alle Knöpfe innerhalb des Popovers als nächstes in der Navigationsreihenfolge sein (werden fokussiert, indem die <kbd>Tab</kbd>-Taste gedrückt wird). Umgekehrt wird der Fokus beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) zurück auf den Invoker verlagert.
- Um ATs wie Bildschirmlesern die Beziehung zwischen dem Invoker und dem Popover verständlich zu machen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Eine solche Beziehung zwischen einem Popover und dessen Steuerelement herzustellen, erstellt auch eine implizite Ankerreferenz zwischen den beiden — weitere Details finden Sie im Abschnitt [Popover-Ankerpositionierung](#popover-anker-positionierung).

## Weitere Möglichkeiten zur Einrichtung einer Popover-Invoker-Beziehung

Sie können eine Popover-Invoker-Beziehung auf andere Weisen einrichten, zusätzlich zur Verwendung des Attributs `popovertarget`:

- Durch Verwenden der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur Fokusnavigationsänderungen vorgenommen werden, nicht jedoch die implizite ARIA-Beziehung. Dies, weil die `source`-Option auf jedes Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es nicht garantiert werden kann, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und dessen Dropdown-Auswahlliste, wenn es über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` in die [anpassbare Selektorelement]-Funktionalität eingeschaltet wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwenden des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der erreicht wird, indem `popover="manual"` auf Ihr Popover-Element gesetzt wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht verworfen" werden, obwohl die zuvor gesehenen Steuertasten zum Anzeigen/Verbergen/Umschalten weiterhin funktionieren.
- Mehrere unabhängige Popover können gleichzeitig angezeigt werden.

Das Verhalten können Sie in unserem [Mehrere manuelle Popovers Beispiel](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle` und `toggle` Ereignisse

Sie können darauf reagieren, dass ein Popover angezeigt oder ausgeblendet wird, indem Sie auf die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) hören:

- `beforetoggle` wird unmittelbar bevor ein Popover angezeigt oder ausgeblendet wird ausgelöst. Dies kann z.B. verwendet werden, um das Anzeigen oder Ausblenden des Popovers zu verhindern (mithilfe von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach der Verwendung aufzuräumen.
- `toggle` wird unmittelbar nachdem ein Popover angezeigt oder ausgeblendet wurde ausgelöst. Dies wird im Allgemeinen genutzt, um andere Codes als Reaktion auf eine Änderung des Popover-Umschaltzustands auszuführen.

Beide Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis hat die folgenden Merkmale zusätzlich zu denen, die vom Standard[`Event`](/de/docs/Web/API/Event)-Objekt geerbt werden:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, von welchem Zustand das Popover gerade gewechselt ist und zu welchem, was es Ihnen ermöglicht, spezifisch auf das Öffnen oder Schließen eines Popovers zu reagieren.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält eine Referenz auf das HTML-Popover-Steuerelement, das das Umschalten initiiert hat, sodass Sie unterschiedlich auf das Umschalt-Ereignis reagieren können, abhängig davon, welches Steuerung es initiiert hat.

Typische Nutzung könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Siehe die vorherigen Referenzlinks für mehr Informationen und Beispiele.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die Eigenschaft [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover) kann verwendet werden, um das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich für die Funktionsprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) and [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), das es Ihnen ermöglicht, die Steuerknöpfe für ein Popover einzurichten, obwohl der angenommene Eigenschaftswert eine Referenz auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), mit dem Sie die von einem Steuerknopf ausgeführte Aktion angeben können.

Diese drei zusammenzuführen, können Sie ein Popover und dessen Steuerknopf programmatisch einrichten, wie folgt:

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

Sie haben auch verschiedene Methoden, um das Ein- und Ausblenden zu steuern:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zeigt ein Popover an.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) blendet ein Popover aus.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) wechselt ein Popover.

Zum Beispiel könnten Sie die Möglichkeit bieten, ein Hilfepopover an- und auszuschalten, indem Sie einen Button klicken oder eine bestimmte Taste auf der Tastatur drücken. Die erste Möglichkeit könnte deklarativ umgesetzt werden oder Sie könnten es mittels JavaScript wie oben gezeigt machen.

Für die zweite Möglichkeit könnten Sie einen Ereignis-Handler kreieren, der zwei separate Tasten programmiert — eine, um das Popover zu öffnen und eine andere, um es wieder zu schließen:

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

Dieses Beispiel nutzt [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}} Pseudo-Klasse passt nur auf Popovers, die momentan angezeigt werden. Dies ist wichtig, um Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits ausgeblendetes Popover auszublenden.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover sowohl zu zeigen _als auch_ zu verstecken, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Toggle help UI example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um zu sehen, wie die JavaScript-Eigenschaften von Popovers, die Funktionsprüfung und die `togglePopover()`-Methode in Aktion sind.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, keine mehreren Auto-Popovers gleichzeitig anzuzeigen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachfahren:

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

Sehen Sie sich unser [Beispiel eines verschachtelten Popover-Menüs](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an. Sie werden feststellen, dass einige Ereignis-Handler verwendet wurden, um das Unterpopover bei Maus- und Tastaturzugriff entsprechend anzuzeigen und zu verbergen und beide Menüs auszublenden, wenn eine Option aus einem von beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte behandeln, entweder in einer SPA oder einer Multi-Seiten-Website, müssen möglicherweise nicht alle eingesetzt werden, aber sie wurden in diesem Beispiel zu illustrativen Zwecken aufgenommen.

## Verwenden des "hint" Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hinweis-Popovers**, die durch das Setzen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind. `hint` Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere `hint` Popovers. Sie können leicht verworfen werden und auf Schließanforderungen reagieren.

Dies ist nützlich für Situationen, in denen Sie z.B. Werkzeugleisten-Knöpfe haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber auch Tooltips angezeigt werden sollen, wenn die Knöpfe gehoben werden, ohne die UI-Popovers zu schließen.

`hint` Popovers werden in der Regel als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und versteckt. Wenn Sie einen Knopf drücken, um ein `hint` Popover zu öffnen, würde ein offenes `auto` Popover leicht verworfen.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an für ein Beispiel, das genau wie beschrieben funktioniert. Das Demo verfügt über eine Schaltflächenleiste; wenn die Knöpfe gedrückt werden, zeigen sie `auto` Pop-up-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn die Knöpfe jedoch überflogen oder fokussiert werden, zeigen sie auch Tooltips (`hint` Popovers) an, um dem Benutzer eine Vorstellung von der Funktion jedes Knopfes zu geben, die kein derzeit ein Untermenü anzeigt, verstecken.

In den folgenden Abschnitten gehen wir die wichtigsten Teile des Codes durch.

> [!NOTE]
> Sie _können_ `hint` Popovers neben `manual` Popovers verwenden, obwohl es dafür nicht wirklich viele Gründe gibt. Sie sind dazu gedacht, einige der Einschränkungen von `auto` Popovers zu umgehen und Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

Die Pop-up-Untermenüs werden deklarativ mit `auto` Popovers erstellt.

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

Die Untermenü-Popovers funktionieren einwandfrei wie sie sind, sie öffnen sich, wenn die Werkzeugleistentasten gedrückt werden, aber wie zeigen wir auch Tooltips bei Knopfüberflug/Fokussierung? Zuerst erstellen wir die Tooltips im HTML mit `hint` Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um das Anzeigen/Verbergen zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen zu den `hint` Popovers und den Steuerknöpfen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mithilfe von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion `addEventListeners()`, die vier Ereignis-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einen bestimmten {{htmlelement("button")}} setzt, der durch das Greifen des `<button>` bei einem bestimmten Indexwert der `btns` `NodeList` ausgewählt wird. Die Funktionen wirken auf das `hint` Popover beim gleichen Indexwert der `tooltips` `NodeList` und halten somit die Knöpfe und die Tooltips synchron — das korrekte Tooltip wird angezeigt/versteckt, wenn ein Knopf interagiert wird.

Die Ereignis-Listener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) oder [`focus`](/de/docs/Web/API/Element/focus_event), und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips per Maus sowie Tastatur zugänglich sind.

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

Schließlich nutzen wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schlaufe, um die `<buttons>` in der `btns` `NodeList` zu durchlaufen und die `addEventListeners()` Funktion für jedes aufzurufen, sodass alle die gewünschten Ereignis-Listener eingestellt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Styling von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Auswahl von Popovers

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

Sie können nur die Popovers, die angezeigt werden, mit der {{cssxref(":popover-open")}} Pseudo-Klasse auswählen:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrundes

Das {{cssxref("::backdrop")}} Pseudo-Element ist ein Fullscreen-Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "Top-Schicht")}} platziert wird und Effekte auf die Seiteninhalte hinter dem Popover hinzufügen kann, wenn gewünscht. Sie könnten zum Beispiel die Inhalte hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers auf das Popover zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Popover-Blur-Hintergrundbeispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionieren von Popovers

Beim Durchsehen der ersten paar Beispiele, die am Anfang des Artikels verlinkt sind, haben Sie vielleicht bemerkt, dass die Popovers in der Mitte des Sichtfensters erscheinen, ihren Inhalt umhüllen und einen schwarzen Rand haben. Dies ist das Standardstyling, erreicht durch die folgende Regel im UA-Stylesheet:

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

Um benutzerdefinierte Größen und Positionen anderswo anzuwenden, könnten Sie die obigen Stile mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel dafür in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Anker-Positionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt zum Sichtfenster oder einem positionierten Vorfahren positionieren möchten, können Sie die Tatsache nutzen, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

[Das Verknüpfen einer beliebigen Art von Popover mit seinem Invoker](#weitere_möglichkeiten_zur_einrichtung_einer_popover-invoker-beziehung) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu positionieren können, indem Sie die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Da die Verknüpfung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Verbindung mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften hergestellt werden. Allerdings müssen Sie dennoch die CSS-Positionierung angeben.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}} Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Einfügeigenschaften")}} gesetzt sind, und `anchor-center` Werte auf Ausrichtungseigenschaften:

```css
.my-popover {
  margin: 0;
  inset: auto;
  bottom: calc(anchor(top) + 20px);
  justify-self: anchor-center;
}
```

Oder Sie könnten eine {{cssxref("position-area")}} Eigenschaft verwenden:

```css
.my-popover {
  margin: 0;
  inset: auto;
  position-area: top;
}
```

Wenn Sie {{cssxref("position-area")}} oder {{cssxref("anchor()")}} verwenden, um Popovers zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position, die Sie erreichen wollen, in Konflikt stehen. Die üblichen Schuldigen sind die Standardstile für `margin` und `inset`, daher wird empfohlen, diese zurückzusetzen, wie in den obigen Beispielen. Die CSS-Arbeitsgruppe [überlegt, wie man diese Umgehungslösung vermeiden kann](https://github.com/w3c/csswg-drafts/issues/10258).

Sehen Sie [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zum Verknüpfen von Anker- und positionierten Elementen und zum Positionieren von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Zuordnung verwendet, sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an. Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Ankerzuordnungen mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} Eigenschaften gemacht wurden.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass das Popover an seinen Invoker verankert wird, können Sie dies tun, indem Sie die Eigenschaft `position-anchor` des Popovers auf einen Ankernamen setzen, der nicht im aktuellen Dokument existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Animieren von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie versteckt sind und auf `display: block;`, wenn sie angezeigt werden, sowie im {{Glossary("top_layer", "Top Layer")}} und im [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) hinzugefügt oder entfernt, sodass die {{cssxref("display")}} Eigenschaft animierbar sein muss, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere schaltet der Browser zwischen `none` und einem anderen `display`-Wert um, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. So, beispielsweise:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er während der gesamten Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) steht das oben beschriebene Verhalten standardmäßig zur Verfügung; ein entsprechender Schritt ist nicht erforderlich.

### Ein Popover übergehen

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} At-rule
  - : Bietet einen Satz von Ausgangswerten für Eigenschaften, die auf das Popover gesetzt sind, die Sie beim ersten Anzeigen übergehen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn ein Eigenschaftenwert bei einem sichtbaren Element geändert wird; sie werden nicht ausgelöst, wenn ein Element das erste Mal gestylt wird oder wenn sich der `display`-Typ von `none` in einen anderen ändert.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` zu der Übergangsliste hinzu, damit das Popover während der gesamten Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt, was sicherstellt, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, damit das Entfernen des Popovers aus dem Top Layer, wieder bis der Übergang abgeschlossen ist, verzögert wird, was gewährleistet, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die Übergänge `display` und `overlay` (oder auf das {{cssxref("transition")}} Kurzschreiben), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die nicht standardmäßig animierbar sind.

Werfen wir einen Blick auf ein Beispiel, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das durch das globale HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert wird, und ein {{htmlelement("button")}}-Element, das als Display-Steuerung des Popovers gestaltet ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir animieren möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir wollen, dass das Popover ein- oder ausblendet, während es sich horizontal öffnet oder schließt. Um dies zu osią lại zu erreichen, setzen wir einen Ausgangszustand für diese Eigenschaften im versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudo-Klasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation bei entweder Anzeigen oder Verstecken des Popovers zu definieren.

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

Wie oben besprochen, haben wir auch:

- Setzen eines Ausgangszustands für den `transition` innerhalb des `@starting-style` Blocks.
- `display` zur Liste der animierten Eigenschaften hinzugefügt, sodass das animierte Element während der Eintritts- und Austrittsanimationen des Popovers sichtbar bleibt (auf `display: block` gesetzt). Ohne dieses würde die Austrittsanimation nicht sichtbar sein; das Popover würde einfach verschwinden.
- `overlay` zur Liste der animierten Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus dem Top Layer verzögert wird, bis die Animation abgeschlossen ist. Der Effekt dessen mag bei einfachen Animationen wie diesem nicht wahrnehmbar sein, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay genommen wird, bevor der Übergang vollständig ist.
- Auf beiden Eigenschaften in den obigen Übergängen `allow-discrete` gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden bemerken, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingeschlossen haben, der beim Öffnen des Popovers erscheint und eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige von `display: none` zu `display: block` wechseln, wechselt das Popover jedes Mal beim Auftrittsübergang von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standard `[popover]` Zustand.
>
> Es ist möglich, das der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie sich unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel an, um einen Nachweis darüber zu erhalten.

### Eine Keyframe-Animation eines Popovers

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie stellen keine `@starting-style` bereit; Sie schließen Ihre "von" und "zu" `display`-Werte in Keyframes ein.
- Sie ermöglichen nicht explizit diskrete Animationen; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch nicht innerhalb von Keyframes setzen; die `display` Animation sorgt für die Animation des Popovers von angezeigt zu verborgen.

Werfen wir einen Blick auf ein Beispiel.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Display-Steuerung des Popovers gestaltet ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Ein- und Austrittsanimationen angeben, sowie eine Eintrittsanimation für den Hintergrund selbst. Beachten Sie, dass es nicht möglich war, den Hintergrund abzublenden — der Hintergrund wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts zu animieren bleibt.

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
