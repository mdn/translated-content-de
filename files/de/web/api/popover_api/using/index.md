---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten, flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Erstellung deklarativer Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das Sie für Ihre Popover-Inhalte verwenden möchten. Eine `id` wird ebenfalls benötigt, um das Popover mit dessen Steuerungselementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen oder zu verstecken, müssen Sie mindestens einen Steuerschaltfläche (bekannt als Popover-**Invoker**) hinzufügen. Sie können eine {{htmlelement("button")}} (oder {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerschaltfläche festlegen, indem Sie ihr ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass die Schaltfläche als Umschalter fungiert – wiederholtes Drücken schaltet das Popover zwischen Anzeige und Verbergen um.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-Attribut verwenden – es akzeptiert die Werte `"hide"`, `"show"` oder `"toggle"`. Zum Beispiel, um separate Show- und Hide-Schaltflächen zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Code-Schnipsel in unserem [einfachen deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einer Steuerschaltfläche ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} gesetzt, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribute bieten sehr ähnliche Funktionen wie `popovertarget` und `popovertargetaction`, sind jedoch allgemeiner ausgelegt, um andere Funktionen über Popover-Befehle hinaus zu bieten, einschließlich benutzerdefinierter Befehle.

Der vorherige Code-Schnipsel könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Auto-Zustand und "leichter Abbruch"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt wird, hat es den **Auto-Zustand**. Die zwei wichtigen Verhaltensweisen des Auto-Zustands sind:

- Das Popover kann "leicht abgebrochen" werden – das bedeutet, dass Sie das Popover durch Klicken außerhalb davon verbergen können.
- Das Popover kann auch geschlossen werden, indem browserspezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste verwendet werden.
- Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden – das Anzeigen eines zweiten Popovers, wenn eines bereits angezeigt wird, wird das erste verbergen. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Weitere Details finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> [!NOTE]
> `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument geschlossen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits gezeigten Popover zu einem Fehler führt, da dieses Verhalten auf einem bereits gezeigten Popover keinen Sinn macht. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie immer nur ein einzelnes Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Lehrnachrichten der Benutzeroberfläche, die Sie anzeigen möchten, aber nicht möchten, dass die Anzeige überladen und unübersichtlich wird, oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status den vorherigen überschreibt.

Sie können das oben beschriebene Verhalten in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht abzubrechen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Zugänglichkeitsmerkmale

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und unterstützende Technologie (AT)-Benutzern eine einfachere Interaktion mit dem Popover zu ermöglichen:

- Wenn das Popover angezeigt wird, wird die Tastaturfokus-Navigationsreihenfolge aktualisiert, sodass das Popover als nächstes in der Sequenz folgt: Beispielsweise, wenn eine Schaltfläche gedrückt wird, um ein Popover anzuzeigen, werden alle Schaltflächen innerhalb des Popovers als nächstes in der Tabulatorreihenfolge sein (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird der Fokus beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) zurück auf den Invoker verschoben.
- Um ATs wie Bildschirmlesegeräten die Beziehung zwischen Invoker und Popover verständlich zu machen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise schafft auch einen impliziten Ankerverweis zwischen den beiden – siehe [Popover-Ankerpositionierung](#popover_ankerpositionierung) für weitere Details.

## Weitere Möglichkeiten, eine Popover-Invoker-Beziehung einzurichten

Sie können eine Popover-Invoker-Beziehung auch auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwendung der `source`-Option der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)- oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methoden. Beachten Sie, dass in diesem Fall nur die Änderungen an der Fokussier-Navigationsreihenfolge vorgenommen werden, jedoch nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Picker, wenn es in die [anpassbare Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#custom_select_menu_style) Funktionalität über die `appearance`-Eigenschaft `base-select` Wert integriert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch das Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht abgebrochen" werden, obwohl deklarative Show/Hide/Toggle-Schaltflächen (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) in Aktion sehen.

## Die `beforetoggle`- und `toggle`-Ereignisse

Sie können auf ein Popover reagieren, das angezeigt oder ausgeblendet wird, indem Sie die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)- und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse verwenden:

- `beforetoggle` wird unmittelbar bevor ein Popover angezeigt oder ausgeblendet wird ausgelöst. Dies kann z. B. verwendet werden, um zu verhindern, dass das Popover angezeigt oder ausgeblendet wird (Verwendung von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach dessen Verwendung aufzuräumen.
- `toggle` wird unmittelbar nachdem ein Popover angezeigt oder ausgeblendet wurde ausgelöst. Dies wird im Allgemeinen verwendet, um anderen Code als Reaktion auf eine Popover-Umschaltstatusänderung auszuführen.

Beide dieser Ereignisse haben ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis hat die folgenden Eigenschaften zusätzlich zu den von dem Standard-[`Event`](/de/docs/Web/API/Event)-Objekt geerbten:

- Die [`oldState`](/de/docs/Web/API/ToggleEvent/oldState)- und [`newState`](/de/docs/Web/API/ToggleEvent/newState)-Eigenschaften geben an, von welchem Zustand das Popover gerade übergangsweise gegangen ist und zu welchem, sodass Sie spezifisch auf das Öffnen oder Schließen des Popovers reagieren können.
- Die [`source`](/de/docs/Web/API/ToggleEvent/source)-Eigenschaft enthält einen Verweis auf das HTML-Popover-Steuerelement-Element, das die Umschaltung initiiert hat, sodass Sie unterschiedlichen Code in Reaktion auf das Umschaltereignis je nach dem Steuerungselement, das es initiiert hat, ausführen können.

Typische Verwendung könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Sehen Sie sich die vorherigen Referenzlinks für weitere Informationen und Beispiele an.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut abzurufen oder festzulegen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch nützlich für die Merkmalserkennung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, sodass Sie die Steuerschaltfläche(n) für ein Popover einrichten können, obwohl der eigentliche Wert eine Referenz auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-globalen HTML-Attribut, das es Ihnen ermöglicht, die Aktion zu spezifizieren, die von einer Steuerschaltfläche ausgeführt werden soll.

Indem Sie diese drei zusammen verwenden, können Sie ein Popover und dessen Steuerschaltfläche programmgesteuert einrichten, wie folgt:

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

Sie haben auch mehrere Methoden zum Steuern der Anzeige und des Verbergens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) um ein Popover umzuschalten.

Zum Beispiel möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfe-Popover ein- und auszuschalten, indem Sie auf eine Schaltfläche klicken oder eine bestimmte Taste auf der Tastatur drücken. Das erste könnte deklarativ erreicht werden oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert – eine zum Öffnen des Popovers und eine zum erneuten Schließen:

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

In diesem Beispiel wird [`Element.matches()`](/de/docs/Web/API/Element/matches) verwendet, um programmgesteuert zu überprüfen, ob ein Popover gerade angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse entspricht nur Popovers, die gerade angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen oder ein bereits verstecktes Popover zu verstecken.

Alternativ könnten Sie auch eine einzelne Taste programmieren, um das Popover sowohl zu zeigen als auch zu verstecken, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Toggle-Hilfe-UI-Beispiel](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die JavaScript-Eigenschaften des Popovers, die Merkmalserkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere Auto-Popovers gleichzeitig angezeigt werden – wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, da sie miteinander in Beziehung stehen. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

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

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel an. Ihnen wird auffallen, dass ziemlich viele Ereignishandler verwendet wurden, um das Subpopover während des Maus- und Tastaturzugriffs angemessen anzuzeigen und zu verbergen, und um beide Menüs zu verbergen, wenn eine Option aus einem von beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer Mehrseiten-Website, sind möglicherweise einige oder alle davon nicht notwendig, aber sie wurden in diesem Demo zu Illustrationszwecken aufgenommen.

## Verwendung des "Hinweis"-Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können – **Hinweis-Popovers**, gekennzeichnet durch das Setzen von `popover="hint"` auf Ihr Popover-Element. `hint`-Popovers schließen `auto`-Popovers nicht, wenn sie angezeigt werden, schließen aber andere `hint`-Popovers. Sie können leicht abgebrochen werden und reagieren auf Schließaufforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Werkzeugleistenschaltflächen haben, die zum Anzeigen von UI-Popovers gedrückt werden können, aber auch Tooltips anzeigen möchten, wenn die Schaltflächen überfahren werden, ohne die UI-Popovers zu schließen.

`hint`-Popovers werden normalerweise als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet. Das Klicken auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein offenes `auto`-Popover leicht abbrechen.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau wie beschrieben funktioniert. Das Demo enthält eine Schaltflächenleiste; wenn gedrückt, zeigen die Schaltflächen `auto`-Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Beim Überfahren oder Fokussieren zeigen die Schaltflächen jedoch auch Tooltips (`hint`-Popovers) an, um dem Benutzer eine Vorstellung davon zu geben, was jede Schaltfläche macht, die ein derzeit angezeigtes Untermenü nicht verstecken.

In den untenstehenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint`-Popovers neben `manual`-Popovers verwenden, obwohl es dafür eigentlich nicht wirklich viele Gründe gibt. Sie sind so konzipiert, dass sie einige der Einschränkungen von `auto`-Popovers umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

> [!NOTE]
> Es gibt eine verwandte Funktion — **Interessierte Invoker** — die verwendet werden kann, um Hover/Focus-Popover-Funktionalität bequem und konsistent zu erstellen, ohne JavaScript zu benötigen. Lesen Sie [Verwendung interessierter Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers), um mehr zu erfahren.

### Erstellung der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ erstellt, indem `auto`-Popovers verwendet werden.

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

### Erstellung der Tooltips mit `popover="hint"`

Die Submenü-Popovers funktionieren gut, wie sie sind, da sie geöffnet werden, wenn die Werkzeugleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips bei Schaltflächen-Hover/Fokus an? Zuerst erstellen wir die Tooltips im HTML, indem wir `hint`-Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Im Demo-[Sourcecode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint) sind die Tooltips innerhalb der Popover-Steuerschaltflächen verschachtelt. Das liegt daran, dass es einen besseren Fallback in Browsern bietet, die CSS-Ankerpositionierung nicht unterstützen — die `hint`-Popovers erscheinen neben ihren zugehörigen Steuerschaltflächen, anstatt an einem völlig anderen Ort.

Um die Anzeige/des Verbergens zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir Referenzen zu den `hint`-Popovers und den Steuerschaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignishandler (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf eine gegebene {{htmlelement("button")}} setzt, die durch das Abrufen des `<button>` an einem bestimmten Indexwert der `btns`-`NodeList` ausgewählt wurde. Die Funktionen wirken auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList`, sodass wir die Schaltflächen und die Tooltips synchron halten — das korrekte Tooltip anzeigen/verbergen, wenn mit einer Schaltfläche interagiert wird.

Die Ereignishandler [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) an und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), sodass die Tooltips über Maus und Tastatur zugänglich sind.

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

Abschließend verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um die `<buttons>` in der `btns`-`NodeList` zu durchlaufen und die `addEventListeners()`-Funktion für jede aufzurufen, damit alle die gewünschten Ereignishandler gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Styling von Popovers

Dieser Abschnitt behandelt einige CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

### Auswahl von Popovers

Sie können alle Popovers mit einem einfachen Attributauswähler auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert in den Attributauswähler aufnehmen:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur die Popovers auswählen, die angezeigt werden, indem Sie die {{cssxref(":popover-open")}}-Pseudoklasse verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudoelement ist ein vollbildiges Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird, sodass Effekte auf den Seiteninhalt hinter dem/den Popover(s) hinzugefügt werden können, wenn gewünscht. Sie möchten beispielsweise möglicherweise den Inhalt hinter dem Popover unscharf machen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Popover-Blur-Hintergrundbeispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Beim Betrachten der ersten paar am Anfang des Artikels verlinkten Beispiele ist Ihnen möglicherweise aufgefallen, dass die Popovers in der Mitte des Ansichtsfensters erscheinen, ihren Inhalt umwickeln und eine schwarze Umrandung haben. Dies ist das Standardstil, das durch die folgende Regel im UA-Stylesheet erreicht wird:

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

Um benutzerdefinierte Abmessungen anzuwenden und das Popover an einem anderen Ort zu positionieren, könnten Sie die obigen Stile mit so etwas überschreiben:

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

Ein isoliertes Beispiel dafür finden Sie in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)).

### Popover Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker statt zum Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil der Tatsache nutzen, dass Popovers und ihre Invoker eine **implizite Ankerreferenz** haben.

[Das Verknüpfen jedweder Art von Popover mit seinem Invoker](#weitere_möglichkeiten,_eine_popover-invoker-beziehung_einzurichten) erzeugt eine implizite Ankerreferenz zwischen den beiden. Dies bewirkt, dass der Invoker zum **Ankerelement** des Popovers wird, sodass Sie das Popover relativ dazu positionieren können, indem Sie [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwenden.

Da die Assoziation zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Assoziation mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden. Sie müssen jedoch immer noch das Positionierungs-CSS angeben.

Zum Beispiel könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt sind, und `anchor-center`-Werte, die auf Ausrichtungseigenschaften gesetzt sind:

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

Wenn Sie {{cssxref("position-area")}} oder {{cssxref("anchor()")}} zur Positionierung von Popovers verwenden, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position kollidieren, die Sie zu erreichen versuchen. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen, wie in den obigen Beispielen gezeigt. Die CSS-Arbeitsgruppe prüft [Möglichkeiten, diesen Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

Siehe [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details über das Zuordnen von Anker- und positionierten Elementen und das Positionieren von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, siehe unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Ankerzuordnungen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften gemacht werden.

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um das Popover nicht mehr an seinen Invoker anzukern, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Popovers auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie z. B. `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Animation von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie versteckt sind und `display: block;`, wenn sie angezeigt werden, sowie von der {{Glossary("top_layer", "obersten Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt oder hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Genauer gesagt, der Browser wird zwischen `none` und einem anderen `display`-Wert wechseln, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er durchgehend sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er durchgehend sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das obige Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist das obige Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Transition eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Merkmale erforderlich:

- {{CSSxRef("@starting-style")}} at-rule
  - : Bietet eine Reihe von Startwerten für auf das Popover gesetzte Eigenschaften, von denen aus Sie bei erstmaliger Anzeige übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn eine Eigenschaftswertänderung auf einem sichtbaren Element vorliegt; sie werden nicht beim ersten Stil-Update eines Elements oder beim Ändern des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- {{CSSxRef("display")}} property
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover für die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt, wodurch die anderen Übergänge sichtbar werden.
- {{CSSxRef("overlay")}} property
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des Popovers aus der obersten Ebene verzögert wird, bis der Übergang abgeschlossen ist, und sichern dabei die Sichtbarkeit des Übergangs.
- {{cssxref("transition-behavior")}} property
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge auf diesen beiden nicht standardmäßig animierbaren Eigenschaften zu ermöglichen.

Lassen Sie uns ein Beispiel betrachten, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das durch das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Attribut als Popover deklariert wird, und ein {{htmlelement("button")}}-Element, das als Popover-Anzeigesteuerung fungiert:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen möchten, sind {{cssxref("opacity")}} und {{cssxref("transform")}}. Wir möchten, dass das Popover ein- oder ausgeblendet wird, während es horizontal wächst oder schrumpft. Um dies zu erreichen, legen wir einen Startzustand für diese Eigenschaften auf dem verborgenen Zustand des Popover-Elements (ausgewählt durch den `[popover]` [Attributauswähler](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt durch die {{cssxref(":popover-open")}}-Pseudoklasse) fest. Wir verwenden auch die {{cssxref("transition")}}-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation beim Zeigen oder Verbergen des Popovers zu definieren.

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

- Einen Startzustand für den `transition` im `@starting-style`-Block festgelegt.
- `display` zur Liste der übergehenden Eigenschaften hinzugefügt, damit das animierte Element während der Ein- und Ausblendanimations bleibt (auf `display: block` gesetzt). Ohne dies wäre die Ausblendanimaion nicht sichtbar; das Popover würde im Grunde einfach verschwinden.
- `overlay` zur Liste der übergehenden Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus der obersten Ebene bis zum Abschluss der Animation verzögert wird. Der Effekt dessen ist vielleicht bei grundlegenden Animationen wie dieser nicht spürbar, in komplexeren Fällen kann das Auslassen dieser Eigenschaft jedoch dazu führen, dass das Element vor dem Abschluss der Überlappung entfernt wird.
- `allow-discrete` auf beiden Eigenschaften der obigen Übergänge gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf dem {{cssxref("::backdrop")}} eingebaut haben, der hinter dem Popover erscheint, wenn es geöffnet wird, was eine nette Verdunkelungsanimation gibt.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, übergeht das Popover von den `@starting-style`-Stilen zu den `[popover]:popover-open`-Stilen jedes Mal, wenn der Eintrittsübergang auftritt. Wenn das Popover schließt, wechselt es von seiner `[popover]:popover-open`-Zurück zu seinem Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Style-Übergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel als Beweis dafür.

### Eine Popover-Schlüsselframe-Animation

Beim Animieren eines Popovers mit CSS-Schlüsselframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keine `@starting-style` an; Sie schließen Ihre "zu"- und "von"-`display`-Werte in Schlüsselbilder ein.
- Sie aktivieren diskrete Animationen nicht explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb der Schlüsselbilder.
- Sie müssen `overlay` innerhalb der Schlüsselbilder ebenfalls nicht setzen; die `display`-Animation regelt das Animieren des Popovers von sichtbar zu versteckt.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert wird, und ein {{htmlelement("button")}}-Element, das als Popover-Anzeigesteuerung fungiert:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Eintritts- und Austrittsanimationen sowie eine Eintrittsanimation nur für den Hintergrund spezifizieren. Beachten Sie, dass es nicht möglich war, das Verblassen des Hintergrunds zu animieren – der Hintergrund wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts animiert werden kann.

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

## Siehe auch

- Sammlung von [Popover API-Beispielen](https://mdn.github.io/dom-examples/popover-api/)
