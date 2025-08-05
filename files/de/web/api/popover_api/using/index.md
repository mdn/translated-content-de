---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 303832e855634fdd74108d4a77c0654e9194ea24
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mittels HTML-Attributen oder per JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Deklarative Popover erstellen

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut dem Element hinzugefügt wird, das den Popover-Inhalt enthalten soll. Eine `id` ist ebenfalls erforderlich, um den Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet ist, indem ihm {{cssxref("display", "display: none")}} zugewiesen wird. Um den Popover anzuzeigen oder auszublenden, müssen Sie mindestens einen Steuerungsknopf hinzufügen (bekannt als der Popover-**Invoker**). Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerungsknopf festlegen, indem Sie ihm das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut zuweisen, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass der Knopf ein Umschaltknopf ist — beim wiederholten Drücken wird der Popover zwischen sichtbar und verborgen umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) verwenden — dieses nimmt den Wert `"hide"`, `"show"` oder `"toggle"` an. Zum Beispiel, um separate Anzeige- und Verbergungsknöpfe zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Code-Ausschnitt in unserem [Grundlegenden deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerungsknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} eingefügt, sodass es über allen anderen Seiteninhalten liegt.

### `command` und `commandfor`

Die Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bieten eine sehr ähnliche Funktionalität wie `popovertarget` und `popovertargetaction`, jedoch mit einem allgemeineren Design, das darauf abzielt, andere Funktionen über Popover-Befehle hinaus bereitzustellen, einschließlich benutzerdefinierter Befehle.

Der vorherige Code-Ausschnitt könnte so umgeschrieben werden:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">Show popover</button>
<button commandfor="mypopover" command="hide-popover">Hide popover</button>
<div id="mypopover" popover>Popover content</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## Automatischer Status und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt ist, sagt man, es hat den **automatischen Status**. Die zwei wichtigen Verhaltensweisen, die man beim automatischen Status beachten sollte, sind:

- Das Popover kann "leicht beendet" werden — das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken.
- Das Popover kann auch geschlossen werden, indem browser-spezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste verwendet werden.
- In der Regel kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte automatische Popover haben. Weitere Einzelheiten finden Sie im Abschnitt [Verschachtelte Popover](#verschachtelte_popover).

> [!NOTE]
> `popover="auto"`-Popover werden auch bei erfolgreichen Aufrufen von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) für andere Elemente im Dokument beendet. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf ein bereits angezeigtes Popover fehlschlägt, da dieses Verhalten auf einem bereits angezeigten Popover keinen Sinn ergibt. Sie können sie jedoch auf ein Element mit dem `popover`-Attribut anwenden, das derzeit nicht angezeigt wird.

Der automatische Status ist nützlich, wenn Sie jeweils nur ein einziges Popover anzeigen möchten. Vielleicht haben Sie mehrere lehrerhafte UI-Nachrichten, die Sie anzeigen möchten, dabei soll die Anzeige jedoch nicht überfüllt und verwirrend werden, oder Sie zeigen Statusmeldungen an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere automatische Popover](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popover nach ihrer Anzeige leicht zu beenden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Zugänglichkeitsfunktionen

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) über das Attribut `popovertarget` eingerichtet wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastatur- und Assistive-Technologie-Nutzern (AT) die Interaktion mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Navigationsreihenfolge der Tastatur aktualisiert, sodass das Popover als nächstes in der Reihenfolge steht: zum Beispiel, wenn ein Knopf gedrückt wird, um ein Popover zu zeigen, werden alle Knöpfe innerhalb des Popovers als nächstes in der Tabulatorreihenfolge stehen (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt, wenn das Popover über die Tastatur geschlossen wird (normalerweise über die <kbd>Esc</kbd>-Taste), wird der Fokus zurück zum Invoker verschoben.
- Um AT, wie Bildschirmlesern, den Zusammenhang zwischen dem Invoker und dem Popover verständlich zu machen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Die Einrichtung einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise schafft auch eine implizite Ankerreferenz zwischen beiden — siehe [Popover-Ankerpositionierung](#popover-ankerpositionierung) für weitere Einzelheiten.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung einzurichten

Sie können eine Popover-Invoker-Beziehung auch auf andere Weise einrichten, zusätzlich zur Nutzung des `popovertarget`-Attributs:

- Nutzung der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur Änderungen an der Fokusnavigationsreihenfolge vorgenommen werden, nicht an der impliziten ARIA-Beziehung. Dies, weil die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Auswahlfeld, wenn es mit dem Wert `base-select` der Eigenschaft {{cssxref("appearance")}} in die Funktionalität [anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) integriert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen beiden erstellt.

## Verwendung des manuellen Popover-Status

Eine Alternative zum automatischen Status ist der **manuelle Status**, der durch Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht beendet" werden, obwohl deklarative Anzeige-/Verbergungsknöpfe (wie zuvor gezeigt) weiterhin funktionieren.
- Mehrere unabhängige Popover können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popover](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Die `beforetoggle`- und `toggle`-Ereignisse

Sie können auf die Anzeige oder das Verbergen eines Popovers reagieren, indem Sie die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) verwenden:

- `beforetoggle` wird unmittelbar vor der Anzeige oder dem Verbergen eines Popovers ausgelöst. Dies kann beispielsweise verwendet werden, um die Anzeige oder das Verbergen des Popovers zu verhindern (mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), um Animationsklassen zu einem Popover hinzuzufügen, um es zu animieren, oder um den Zustand eines Popovers nach dessen Verwendung zu bereinigen.
- `toggle` wird unmittelbar nach der Anzeige oder dem Verbergen eines Popovers ausgelöst. Dies wird in der Regel verwendet, um anderen Code als Reaktion auf die Änderung des Umschaltstatus eines Popovers auszuführen.

Beide Ereignisse verfügen über ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Ereignisobjekt. Dieses Ereignis bietet neben den geerbten Funktionen des Standard-[`Event`](/de/docs/Web/API/Event)-Objekts die folgenden Funktionen:

- Die Eigenschaften [`oldState`](/de/docs/Web/API/ToggleEvent/oldState) und [`newState`](/de/docs/Web/API/ToggleEvent/newState) geben an, von welchem Zustand zum welchem Zustand das Popover gerade übergegangen ist, sodass Sie spezifisch auf das Öffnen oder Schließen eines Popovers reagieren können.
- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) enthält einen Verweis auf das HTML-Popover-Steuerelement, das das Umschalten initiiert hat, sodass Sie in der Lage sind, unterschiedlichen Code als Reaktion auf das Umschaltereignis auszuführen, je nachdem, welches Steuerelement es initiiert hat.

Typische Verwendung könnte so aussehen:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Weitere Informationen und Beispiele finden Sie in den vorangegangenen Referenzlinks.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die Eigenschaft [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover) kann verwendet werden, um das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich zur Funktionsüberprüfung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), das es Ihnen ermöglicht, das/die Steuerungsknöpfe für ein Popover einzurichten, obwohl der eigentliche Wert hier ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), um die Aktion anzugeben, die von einem Steuerungsknopf ausgeführt wird.

Wenn Sie diese drei kombinieren, können Sie programmatisch ein Popover und seinen Steuerungsknopf wie folgt einrichten:

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

Sie haben auch mehrere Methoden zum Steuern der Anzeige und zum Verbergen:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Anzeigen eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Verbergen eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zum Umschalten eines Popovers.

Zum Beispiel möchten Sie vielleicht die Möglichkeit bereitstellen, ein Hilfe-Popover ein- und auszuschalten, indem eine Taste geklickt oder eine bestimmte Taste auf der Tastatur gedrückt wird. Die erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für die zweite könnte ein Ereignishandler erstellt werden, der zwei separate Tasten programmiert — eine zum Öffnen des Popovers und eine zum erneuten Schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}} Pseudoklasse trifft nur auf Popovers zu, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits verborgenes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover sowohl anzuzeigen als auch zu verbergen:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Siehe unser [Beispiel zum Umschalten der Benutzeroberfläche](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)), um die JavaScript-Eigenschaften des Popovers, Funktionsüberprüfung und `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popover

Es gibt eine Ausnahme von der Regel, nicht mehrere automatische Popovers gleichzeitig anzuzeigen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popover aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popover zu erstellen:

1. Direkte DOM-Nachfahren:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über auslösende/steuernde Elemente:

   ```html
   <div popover>
     Parent
     <button popovertarget="foo">Click me</button>
   </div>

   <div popover id="foo">Child</div>
   ```

3. Über das Attribut `anchor`:

   ```html
   <div popover id="foo">Parent</div>

   <div popover anchor="foo">Child</div>
   ```

Siehe unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel. Sie werden feststellen, dass eine ganze Reihe von Ereignis-Handlern verwendet wurden, um das Anzeigen und Verbergen des Unterpopovers während der Maus- und Tastaturzugriffe angemessen zu steuern und beide Menüs auszublenden, wenn eine Option aus einem der beiden ausgewählt wird. Abhängig davon, wie Sie neue Inhalte laden, entweder in einer SPA oder einer Multi-Page-Website, können einige oder alle diese nicht notwendig sein, aber sie wurden in diesem Demo zu Illustrationszwecken aufgenommen.

## Verwendung des "Hint"-Popover-Status

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hint-Popover**, die durch Setzen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind. `hint`-Popover schließen nicht `auto`-Popover, wenn sie angezeigt werden, schließen jedoch andere `hint`-Popover. Sie können leicht beendet werden und auf Schließanforderungen reagieren.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Symbolleistenknöpfe haben, die gedrückt werden können, um UI-Popover anzuzeigen, aber auch Tooltips anzeigen möchten, wenn die Knöpfe schwebend oder fokussiert sind, ohne die UI-Popover zu schließen.

`hint`-Popovers werden tendenziell als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen. Das Klicken auf einen Knopf zum Öffnen eines `hint`-Popovers würde ein geöffnetes `auto`-Popover leicht beenden.

Siehe unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel, das genau wie oben beschrieben funktioniert. Das Demo enthält eine Symbolleistenleiste; beim Drücken zeigen die Knöpfe `auto`-Popup-Menüs, in denen weitere Optionen ausgewählt werden können. Allerdings zeigen die Knöpfe auch Tooltips (`hint`-Popovers) an, wenn sie überfahren oder fokussiert werden, damit der Benutzer eine Vorstellung davon bekommt, was jeder Knopf bewirkt. Diese verbergen ein gerade angezeigtes Menü nicht.

In den folgenden Abschnitten führen wir Sie durch alle wichtigen Teile des Codes.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, obwohl es wirklich nicht viel Grund dafür gibt. Sie sind dafür ausgelegt, einige der Einschränkungen von `auto`-Popovers zu umgehen, um Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ mit `auto`-Popovers erstellt.

Zuerst die Steuerungsknöpfe:

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

Die Untermenüs funktionieren einwandfrei, öffnen sich, wenn die Symbolleistenknöpfe gedrückt werden, aber wie zeigen wir auch Tooltips bei Knopf-Hover/Fokus? Zuerst erstellen wir die Tooltips in HTML, mit `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um die Anzeige/Verbergung zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir uns Verweise auf die `hint`-Popovers und die Steuerungsknöpfe in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s, indem wir [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignis-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem gegebenen {{htmlelement("button")}} setzt, indem sie den `<button>` an einem spezifischen Indexwert der `btns` `NodeList` auswählt. Die Funktionen wirken sich auf das `hint`-Popover am selben Indexwert der `tooltips` `NodeList` aus, was es uns ermöglicht, die Knöpfe und die Tooltips zu synchronisieren — das richtige Tooltip zu zeigen/verbergen, wenn ein Knopf interagiert wird.

Die Ereignis-Listener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event), und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was es ermöglicht, dass die Tooltips über Maus und Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns` `NodeList` zu iterieren und die `addEventListeners()`-Funktion für jeden einzelnen aufzurufen, damit alle die gewünschten Ereignis-Listener haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Stilgestaltung von Popovers

Dieser Abschnitt deckt einige CSS-Auswahl- und Positionierungstechniken ab, die relevant für Popovers sind.

### Auswahl von Popovers

Sie können alle Popovers mit einem einfachen Attribut-Selektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie eine spezifische Popover-Art auswählen, indem Sie einen Wert im Attribut-Selektor angeben:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die angezeigt werden, indem Sie die {{cssxref(":popover-open")}} Pseudoklasse verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Gestaltung des Popover-Hintergrunds

Das {{cssxref("::backdrop")}} Pseudo-Element ist ein Vollbild-Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird. Dies ermöglicht Effekte, die bei den Seiteninhalten hinter dem/den Popover(s) hinzugefügt werden können, wenn gewünscht. Sie könnten zum Beispiel den Inhalt hinter dem Popover unscharf machen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Popover-Hintergrund-Unschärfe-Beispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Beim Betrachten der ersten Beispiele, die zu Beginn des Artikels verlinkt sind, haben Sie vielleicht bemerkt, dass die Popovers in der Mitte des Ansichtsfensters erscheinen, ihren Inhalt umgeben und einen schwarzen Rahmen haben. Dies ist das Standardstil, erreicht durch die folgende Regel im UA-Stylesheet:

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

Um eine benutzerdefinierte Größe anzuwenden und das Popover an eine andere Stelle zu positionieren, könnten Sie die obigen Stile mit etwa Folgendem überschreiben:

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

Sie können ein isoliertes Beispiel dafür in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Ankerpositionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker und nicht zum Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie die Tatsache nutzen, dass Popovers und ihre Invokers eine **implizite Ankerreferenz** haben.

[Die Zuordnung einer beliebigen Art von Popover mit seinem Invoker](#andere_möglichkeiten,_eine_popover-invoker-beziehung_einzurichten) erstellt eine implizite Ankerreferenz zwischen beiden. Dies führt dazu, dass der Invoker das **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu positionieren können, indem Sie [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Da die Zuordnung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Zuordnung mit den Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} vorgenommen werden. Trotzdem müssen Sie die Positionierungs-CSS angeben.

Zum Beispiel könnten Sie eine Kombination aus {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Einfüge-Eigenschaften")}} gesetzt sind, sowie `anchor-center`-Werte, die auf Ausrichtungs-Eigenschaften gesetzt sind:

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

Weitere Details zur Zuordnung von Anker- und positionierten Elementen und zum Positionieren von Elementen relativ zu ihrem Anker finden Sie unter [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor).

> [!NOTE]
> Für ein Beispiel, das diese implizite Zuordnung verwendet, siehe unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie den CSS-Code überprüfen, werden Sie feststellen, dass keine expliziten Ankerzuordnungen mit den Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} vorgenommen werden.

## Animation von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie aus der {{Glossary("top_layer", "obersten Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen `display`-Wert umschalten, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar ist. Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer zu `block` wechseln, sodass er während der gesamten Zeitdauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer zu `none` wechseln, sodass er während der gesamten Animationszeit sichtbar ist.

> [!NOTE]
> Bei Animationen mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Bei Animationen mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein äquivalenter Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Stellt eine Reihe von Startwerten für Eigenschaften bereit, die auf das Popover gesetzt sind, von denen aus es beim ersten Anzeigen übergeht. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft sich von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht ausgelöst, wenn ein Element das erste Mal eine Stiländerung erfährt, oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergänge hinzu, damit das Popover für die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt, wodurch die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Fügen Sie `overlay` zur Liste der Übergänge hinzu, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Ebene bis zum Abschluss des Übergangs verschoben wird, wodurch wiederum sichergestellt wird, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf den {{cssxref("transition")}}-Schlüssel) um diskrete Übergänge auf diesen beiden Eigenschaften, die standardmäßig nicht animierbar sind, zu ermöglichen.

Lassen Sie uns ein Beispiel anschauen, damit Sie sehen, wie das aussieht:

#### HTML

Der HTML-Code enthält ein {{htmlelement("div")}}-Element, das mit dem globalen HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers bezeichnet ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergangsweise animieren wollen, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausblendet, während es horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Startzustand für diese Eigenschaften auf den verborgenen Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die Pseudoklasse [`:popover-open`](/de/docs/Web/CSS/:popover-open)). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation festzulegen, während das Popover angezeigt oder verborgen wird.

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
  background-color: rgb(0 0 0 / 0%);
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
    background-color: rgb(0 0 0 / 0%);
  }
}
```

Wie bereits besprochen, haben wir auch:

- Einen Startzustand für den `transition` im `@starting-style` Block gesetzt.
- `display` zur Liste der Übergangseigenschaften hinzugefügt, damit das animierte Element während der Ein- und Austrittsanimationen des Popovers sichtbar bleibt (auf `display: block` gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Praxis würde das Popover einfach verschwinden.
- `overlay` zur Liste der Übergangseigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene verschoben wird, bis die Animation abgeschlossen ist. Der Effekt davon mag bei einfachen Animationen wie dieser nicht bemerkbar sein, aber in komplexeren Fällen kann das Auslassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beiden Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf den [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinzugefügt haben, der hinter dem Popover erscheint, wenn es geöffnet wird, was eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Übergang eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige von `display: none` zu `display: block` wechseln, erfolgt der Übergang des Popovers von seinen `@starting-style`-Stilen zu seinem `[popover]:popover-open`-Stilen jedes Mal, wenn der Einfahrtsübergang auftritt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zu seinem Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Ein- und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für ein Proof dafür.

### Eine Popover-Keyframe-Animation

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen sind einige Unterschiede zu beachten:

- Sie bieten keinen `@starting-style`; Sie fügen Ihre "to"- und "from"-`display`-Werte in Keyframes ein.
- Sie aktivieren diskrete Animationen nicht explizit; es gibt kein Äquivalent zu `allow-discrete` in Keyframes.
- Sie müssen `overlay` auch nicht in Keyframes setzen; die `display`-Animation steuert die Animation des Popovers von sichtbar zu unsichtbar.

Lassen Sie uns ein Beispiel ansehen.

#### HTML

Der HTML-Code enthält ein als Popover deklariertes {{htmlelement("div")}}-Element und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers bezeichnet ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Ein- und Austrittsanimationen spezifizieren, und eine Einlaufanimation nur für den Hintergrund. Beachten Sie, dass es nicht möglich war, den Hintergrundausfade zu animieren – der Hintergrund wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, daher gibt es nichts zum Animieren.

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
    background-color: rgb(0 0 0 / 0%);
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}
```

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Eine Popover-Keyframe-Animation", "100%", "200") }}
