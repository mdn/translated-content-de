---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: c71bdfc071c3d86009286734f2c8437243e4ad1f
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Verwendung aller Funktionen.

## Erstellen deklarativer Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das Ihren Popover-Inhalt enthalten soll. Eine `id` wird ebenfalls benötigt, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert ist gleichbedeutend mit `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen/auszublenden, müssen Sie mindestens einen Steuerknopf (auch bekannt als Popover-**Invoker**) hinzufügen. Sie können ein {{htmlelement("button")}} (oder ein {{htmlelement("input")}} des Typs `type="button"`) als Popover-Steuerknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des Popovers sein sollte, das gesteuert werden soll:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Knopf ein Umschaltknopf ist — drückt man ihn wiederholt, wird das Popover zwischen Anzeigen und Verbergen umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden — dies kann einen Wert von `"hide"`, `"show"` oder `"toggle"` haben. Zum Beispiel, um separate Anzeigen- und Verbergennknöpfe zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Code-Snippet in unserem [Grundlegenden Beispiel für ein deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} gesetzt, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das dazu gedacht ist, andere Funktionalitäten über Popover-Befehle hinaus bereitzustellen, einschließlich benutzerdefinierter Befehle.

Das vorherige Code-Snippet könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "Light Dismiss"

Wenn ein Popover-Element wie oben gezeigt mit `popover` oder `popover="auto"` gesetzt wird, befindet es sich im **Auto-Zustand**. Die zwei wichtigen Verhaltensweisen, die Sie beim Auto-Zustand beachten sollten, sind:

- Das Popover kann durch "leichtes Abweisen" ausgeblendet werden — das bedeutet, dass Sie das Popover durch einen Klick außerhalb davon ausblenden können.
- Das Popover kann auch über browserspezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein `auto` Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn eines bereits angezeigt wird, wird das erste verstecken. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Weitere Details finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> [!NOTE]
> `popover="auto"` Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument verworfen. Beachten Sie jedoch, dass diese Methoden auf einem bereits angezeigten Popover zu einem Fehlschlag führen, da dieses Verhalten auf einem bereits angezeigten Popover nicht sinnvoll ist. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere UI-Lehrnachrichten, die Sie anzeigen möchten, aber möchten nicht, dass die Anzeige überladen und verwirrend wird, oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status einen vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht abzulehnen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Zugänglichkeitsfunktionen für Popovers

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das Attribut `popovertarget` hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um es Tastatur- und assistiven Technologiebenutzern (AT) zu erleichtern, mit dem Popover zu interagieren:

- Wenn das Popover angezeigt wird, wird die Navigationsreihenfolge für die Tastaturfokussierung so aktualisiert, dass das Popover als nächstes in der Reihenfolge ist: Wenn beispielsweise ein Knopf gedrückt wird, um ein Popover anzuzeigen, sind alle innerhalb des Popovers befindlichen Knöpfe in der nächsten Tabulator-Reihenfolge (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus zurück auf den Invoker verlagert.
- Um AT, wie Bildschirmlesegeräte, die Beziehung zwischen dem Invoker und dem Popover nachvollziehen zu lassen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise erstellt auch einen impliziten Ankerbezug zwischen den beiden — siehe [Positionierung des Popover-Ankers](#popover-anker-positionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung herzustellen

Sie können eine Popover-Invoker-Beziehung auf andere Weise erstellen, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwenden Sie die `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Änderungen an der Fokusschnittreihenfolge vorgenommen werden, nicht aber die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jeden beliebigen Elementtyp gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und dessen Dropdown-Auswahl, wenn es durch die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` in die Funktionalität eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) integriert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden hergestellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der erreicht wird, indem `popover="manual"` auf Ihrem Popover-Element gesetzt wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht durch "leichtes Abweisen" geschlossen werden, obwohl deklarative Anzeige-/Verbergungs-/Umschaltknöpfe (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle`- und `toggle`-Ereignisse

Sie können auf das Anzeigen oder Verbergen eines Popovers mit den Ereignissen [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) reagieren:

- `beforetoggle` wird kurz bevor ein Popover angezeigt oder verborgen wird, ausgelöst. Dies kann beispielsweise verwendet werden, um das Anzeigen oder Verbergen des Popovers zu verhindern (mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers zu bereinigen, nachdem es verwendet wurde.
- `toggle` wird unmittelbar nach dem Anzeigen oder Verbergen eines Popovers ausgelöst. Dies wird im Allgemeinen verwendet, um anderen Code als Reaktion auf die Änderung des Umschaltzustands eines Popovers auszuführen.

Beide Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis verfügt über folgende Funktionen zusätzlich zu den vom Standard-[`Event`](/de/docs/Web/API/Event)-Objekt geerbten Funktionen:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) zeigen an, von welchem Zustand das Popover gerade gewechselt hat und in welchen Zustand es sich befindet, sodass Sie spezifisch auf das Öffnen oder Schließen eines Popovers reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält einen Verweis auf das HTML-Popover-Steuerelement, das das Umschalten initiiert hat, wodurch Sie in der Lage sind, verschiedene Codes als Reaktion auf das Umschaltereignis auszuführen, abhängig davon, welches Steuerungselement es initiiert hat.

Die typische Verwendung könnte folgendermaßen aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Siehe die vorherigen Referenzlinks für weitere Informationen und Beispiele.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu beziehen oder einzustellen. Dies kann verwendet werden, um ein Popover per JavaScript zu erstellen und ist auch nützlich für die Funktionsprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, wodurch Sie die Steuerungsknöpfe für ein Popover einrichten können, obwohl der Eigenschaftswert ein Verweis auf das Popover-DOM-Element ist, das gesteuert werden soll.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), wodurch Sie die durch einen Steuerknopf auszuführende Aktion festlegen können.

Indem Sie diese drei zusammenführen, können Sie ein Popover und seinen Steuerknopf programmatisch einrichten, wie folgt:

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

Beispielsweise möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfe-Popover durch Klicken auf einen Knopf oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das zweite könnten Sie einen Ereignis-Handler erstellen, der zwei separate Tasten programmiert — eine, um das Popover zu öffnen, und eine, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover gerade angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudo-Klasse stimmt nur mit Popovers überein, die momentan angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen oder ein bereits ausgeblendetes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover wie folgt zu zeigen _und_ zu verbergen:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel zum Umschalten der Hilfe-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Funktionsprüfung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere Auto-Popovers gleichzeitig angezeigt werden dürfen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

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

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an, um ein Beispiel zu sehen. Sie werden feststellen, dass eine ganze Reihe von Ereignis-Handlern verwendet wurde, um das Untermenü-Popover bei Maus- und Tastaturzugriff korrekt anzuzeigen und auszublenden und auch beide Menüs zu verstecken, wenn eine Option aus einem der beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer mehrseitigen Website, sind möglicherweise einige oder alle diese nicht erforderlich, aber sie wurden in dieses Demo zu Illustrationszwecken aufgenommen.

## Verwendung des "hint" Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hint-Popovers**, die durch das Setzen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind. `Hint`-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere `hint`-Popovers. Sie können lichtabweisend sein und auf Schließanforderungen reagieren.

Dies ist nützlich für Situationen, in denen Sie beispielsweise über Werkzeugleistenknöpfe verfügen, die gedrückt werden können, um UI-Popovers anzuzeigen, während Sie gleichzeitig Tooltips anzeigen möchten, wenn die Knöpfe darüber gehoben werden, ohne das UI-Popover zu schließen.

`Hint`-Popovers neigen dazu, in Reaktion auf nicht-klickbasierte JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet zu werden. Das Klicken auf einen Knopf, um ein `hint`-Popover zu öffnen, würde ein offenes `auto`-Popover "lichtabweisen".

Sehen Sie unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel, das genau wie oben beschrieben funktioniert. Das Demo verfügt über eine Knopfleiste; wenn gedrückt, zeigen die Knöpfe `auto`-Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Werden die Knöpfe jedoch überfahren oder fokussiert, werden Tooltips (`hint`-Popovers) angezeigt, die dem Benutzer einen Hinweis darauf geben, was jeder Knopf macht und die ein derzeit angezeigtes Untermenü nicht verstecken.

In den folgenden Abschnitten gehen wir alle wichtigen Teile des Codes durch.

> [!NOTE]
> Sie _können_ `hint`-Popovers gemeinsam mit `manual`-Popovers verwenden, obwohl dafür eigentlich kaum ein Grund besteht. Sie sind dafür ausgelegt, einige der Einschränkungen von `auto`-Popovers zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Bitte beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ mit `auto`-Popovers erstellt.

Zuerst die Steuerelement-Knöpfe:

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

### Erstellen der Tooltips mit `popover="hint"`

Die Untermenü-Popovers funktionieren so wie sie sind, indem sie geöffnet werden, wenn die Werkzeugleistenknöpfe gedrückt werden. Aber wie zeigen wir auch Tooltips bei Knopfüberfahren/-fokus an? Zuerst erstellen wir die Tooltips in HTML, indem wir `hint`-Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um die Anzeige/Ausblendung zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen zu den `hint`-Popovers und den Steuerelement-Knöpfen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignis-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem bestimmten {{htmlelement("button")}}, ausgewählt durch Auswahl des `<button>` an einem bestimmten Indexwert der `btns` `NodeList`, setzt. Die Funktionen wirken auf das `hint`-Popover am selben Indexwert der `tooltips` `NodeList`, sodass wir die Knöpfe und die Tooltips synchron halten — das richtige Tooltip wird angezeigt/ausgeblendet, wenn ein Knopf interagiert wird.

Die Ereignis-Listener [anzeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event), und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips sowohl über Maus als auch über Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns` `NodeList` zu iterieren, die `addEventListeners()`-Funktion für jeden von ihnen zu rufen, sodass für alle die gewünschten Ereignis-Listener gesetzt werden.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Popovers stylen

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Auswahl von Popovers

Sie können alle Popovers mit einem einfachen Attribut-Selektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attribut-Selektor angeben:

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

### Styling des Popover-Hintergrunds

Das Pseudo-Element {{cssxref("::backdrop")}} ist ein vollflächiges Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird, wodurch Effekte zu den Seitenelementen hinter dem/den Popover(s) hinzugefügt werden können, wenn gewünscht. Sie könnten beispielsweise den Inhalt hinter dem Popover ausblenden, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel für ein unscharfes Popover-Hintergrundbild](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Wenn Sie sich die ersten paar verknüpften Beispiele zu Beginn des Artikels angesehen haben, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Viewports erscheinen, ihren Inhalt umschließen und einen schwarzen Rahmen haben. Dies ist das Standardstyling, erreicht durch die folgende Regel im UA-Stileblatt:

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

Sie können ein isoliertes Beispiel dafür in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Anker-Positionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt zum Viewport oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil nutzen, dass Popovers und ihre Invoker einen **impliziten Ankerbezug** haben.

[Assoziieren eines beliebigen Typs von Popover mit seinem Invoker](#andere_möglichkeiten,_eine_popover-invoker-beziehung_herzustellen) erstellt einen impliziten Ankerbezug zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, wodurch Sie das Popover relativ zu ihm mit der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Assoziierung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Assoziierung mit den Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} vorgenommen werden. Sie müssen jedoch immer noch das Positionierungs-CSS angeben.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten auf {{Glossary("inset_properties", "Einsatz-Eigenschaften")}} und `anchor-center`-Werten auf Alignment-Eigenschaften verwenden:

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

Wenn Sie {{cssxref("position-area")}} oder {{cssxref("anchor()")}} verwenden, um Popovers zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position, die Sie zu erreichen versuchen, in Konflikt stehen könnten. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, also ist es ratsam, diese zurückzusetzen, wie in den obigen Beispielen gezeigt. Die CSS-Arbeitsgruppe nimmt [Maßnahmen, um zu verhindern, dass dieses Workaround erforderlich ist](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Assoziierung von Anker- und positionierten Elementen und zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziierung verwendet, siehe unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Anker-Associations mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften gemacht werden.

## Animation von Popovers

Popovers werden auf `display: none;` gesetzt, wenn sie ausgeblendet sind, und `display: block;`, wenn sie angezeigt werden, und werden außerdem aus / zu der {{Glossary("top_layer", "obersten Ebene")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen `display`-Wert wechseln, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Also, zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass es die gesamte Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass es die gesamte Dauer sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das obige Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das obige Verhalten standardmäßig verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Merkmale erforderlich:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Bietet einen Satz von Anfangswerten für Eigenschaften auf dem Popover, von denen aus Sie beim ersten Anzeigen übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn ein sichtbares Element von einem Wert zu einem anderen wechselt, sie werden nicht beim ersten Stilausweich eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft:
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während der Dauer des Übergangs auf `display: block` (oder einem anderen sichtbaren `display`-Wert) verbleibt, was sicherstellt, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft:
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des Popovers von der obersten Ebene bis zum Abschluss des Übergangs aufgeschoben wird, was wiederum sicherstellt, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft:
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzschreibweise), um diskrete Übergänge von nicht standardmäßig animierbaren Eigenschaften zu ermöglichen.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein als Popover deklariertes {{htmlelement("div")}}-Element über das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-HTML-Attribut und ein {{htmlelement("button")}}-Element, das als Ansichtskontrolle des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die zwei Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover verblasst oder auftaucht, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften auf den ausgeblendeten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudo-Klasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die Eigenschaften zu definieren, die animiert werden, und die Animationsdauer festzulegen, wenn das Popover angezeigt oder ausgeblendet wird.

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

Wie bereits angemerkt, haben wir auch:

- Einen Anfangszustand für die `transition` innerhalb des `@starting-style`-Blocks festgelegt.
- `display` zur Liste der Übergangseigenschaften hinzugefügt, sodass das animierte Element während der Ein- und Ausblendanimationen des Popovers (auf `display: block` gesetzt) sichtbar bleibt. Ohne dies wäre die Ausblendanimation nicht sichtbar; das Popover würde einfach verschwinden.
- `overlay` zur Liste der Übergangseigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene bis zum Abschluss der Animation verzögert wird. Der Effekt davon kann für grundlegende Animationen wie diese möglicherweise nicht sichtbar sein, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus der Überlagerung entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beide Eigenschaften in den oben genannten Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Beachten Sie, dass wir auch einen Übergang auf der [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinzugefügt haben, die hinter dem Popover erscheint, wenn es sich öffnet, und eine schöne Verdunkelungsanimation bereitstellt.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, erfolgt bei jedem Eintrittsübergang der Übergang vom `@starting-style` des Popovers zu den `[popover]:popover-open`-Styles. Wenn das Popover schließt, geht es von seinem `[popover]:popover-open`-Zustand in den Standard-`[popover]`-Zustand über.
>
> Es ist möglich, dass sich der Stilübergang bei Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Beweis für den Fall, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Nachweis dafür.

### Eine Popover-Schlüsselbild-Animation

Wenn ein Popover mit CSS-Schlüsselbild-Animationen animiert wird, sind einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an; Sie geben Ihre "to" und "from" `display`-Werte in Schlüsselbildern an.
- Sie aktivieren keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` in Schlüsselbildern.
- Sie müssen `overlay` in Schlüsselbildern ebenfalls nicht setzen; die `display`-Animation behandelt die Animation des Popovers vom angezeigten zum ausgeblendeten Zustand.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein als Popover deklariertes {{htmlelement("div")}}-Element und ein {{htmlelement("button")}}-Element, das als Ansichtskontrolle des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Ein-und Ausblendeanimationen angeben, sowie eine Einstiegsanimation für den Hintergrund. Beachten Sie, dass es nicht möglich war, das Verblassen des Hintergrunds zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts zu animieren übrig bleibt.

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
