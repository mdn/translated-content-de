---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Deklarative Popovers erstellen

In seiner einfachsten Form wird ein Popover durch Hinzufügen des [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs zu dem Element erstellt, das Sie zur Aufnahme Ihres Popover-Inhalts verwenden möchten. Eine `id` ist auch erforderlich, um das Popover mit seinen Steuerungen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert ist gleichbedeutend mit `popover="auto"`.

Das Hinzufügen dieses Attributs führt dazu, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} auf ihm gesetzt wird. Um das Popover anzuzeigen/ein- oder auszublenden, müssen Sie mindestens eine Steuerungstaste hinzufügen (auch als Popover-**Aufrufer** bekannt). Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} mit `type="button"`) als Popover-Steuerungstaste festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut geben, dessen Wert die ID des Popovers ist, das gesteuert werden soll:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass die Taste als Umschalttaste fungiert — durch wiederholtes Drücken wird das Popover zwischen sichtbar und versteckt umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) verwenden — dieses nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Anzeigungs- und Ausblendetasten zu erstellen, könnten Sie Folgendes tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Code-Schnipsel in unserem [Basis-Beispiel für deklarative Popovers](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einer Steuerungstaste ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "oberste Ebene")}} gesetzt, sodass es über allen anderen Seiteninhalten liegt.

## Automatischer Zustand und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt wird, heißt es, es befinde sich im **automatischen Zustand**. Die zwei wichtigen Verhaltensweisen, die man bei einem automatischen Zustand beachten sollte, sind:

- Das Popover kann "light dismissed" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb davon ausblenden können.
- Das Popover kann auch geschlossen werden, indem browser-spezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste verwendet werden.
- Normalerweise darf nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte automatische Popovers haben. Weitere Details finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> **Hinweis:** `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) bei anderen Elementen im Dokument ausgeblendet. Bedenken Sie jedoch, dass das Aufrufen dieser Methoden bei einem angezeigten Popover zu einem Fehler führen wird, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn machen. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der automatische Zustand ist nützlich, wenn Sie nur ein Popover auf einmal anzeigen möchten. Vielleicht haben Sie mehrere lehrreiche UI-Nachrichten, die Sie anzeigen möchten, aber Sie möchten nicht, dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel mit mehreren automatischen Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach deren Anzeige auszublenden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Accessibility-Features

Wenn über das `popovertarget`-Attribut eine Beziehung zwischen einem Popover und seiner Steuerung (Invoker) hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um es Tastatur- und Hilfstechnologiebenutzern (AT) zu erleichtern, mit dem Popover zu interagieren:

- Wenn das Popover angezeigt wird, wird die Navigationsreihenfolge der Tastatur fokussiert, sodass das Popover als Nächstes in der Reihenfolge ist: Wenn beispielsweise eine Taste gedrückt wird, um ein Popover anzuzeigen, sind alle Tasten im Inneren des Popovers als Nächstes in der Tab-Reihenfolge (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus zurück auf den Invoker verschoben.
- Um AT, wie z.B. Screenreadern, die Beziehung zwischen dem Invoker und dem Popover verständlich zu machen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Wenn auf diese Weise eine Beziehung zwischen einem Popover und seiner Steuerung hergestellt wird, wird auch eine implizite Ankerreferenz zwischen den beiden erstellt — siehe [Popover-Anker-Positionierung](#popover-anker-positionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Invoker-Beziehung einzurichten

Sie können eine Popover-Invoker-Beziehung auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwendung der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Änderungen an der Fokussierungsreihenfolge vorgenommen werden, nicht die implizierte ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente. Es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und dessen Dropdown-Auswahl, wenn es in die Funktion [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) über den Wert des {{cssxref("appearance")}}-Eigenschafts `base-select` integriert wird. In diesem Fall wird eine implizite Popover-Invoker-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum automatischen Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "light dismissed" werden, obwohl deklarative Anzeigen/Ausblenden/Umschalt-Tasten (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel mit mehreren manuellen Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Anzeigen von Popovers via JavaScript

Sie können Popovers auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut zu bekommen oder zu setzen. Dies kann zum Erstellen eines Popovers über JavaScript verwendet werden und ist auch nützlich für die Funktionserkennung. Zum Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, das Ihnen ermöglicht, die Steuertaste(n) für ein Popover einzurichten, obwohl der Eigenschaftswert eine Referenz zum Popover-DOM-Element ist, das gesteuert werden soll.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), das Ihnen ermöglicht, die Aktion festzulegen, die durch eine Steuertaste ausgeführt werden soll.

Diese drei zusammen führen dazu, dass Sie ein Popover und seine Steuertaste programmatisch einrichten können, wie folgt:

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

Sie haben auch mehrere Methoden zum Steuern des Anzeige- und Ausblendeverhaltens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Anzeigen eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Ausblenden eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zum Umschalten eines Popovers.

Beispielsweise möchten Sie möglicherweise die Fähigkeit bereitstellen, ein Hilfs-Popover ein- und auszuschalten, indem Sie auf eine Taste klicken oder eine bestimmte Taste auf der Tastatur drücken. Das Erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript tun, wie oben gezeigt.

Für das Zweite könnten Sie einen Ereignis-Handler erstellen, der zwei separate Tasten programmiert — eine zum Öffnen des Popovers und eine zum erneuten Schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu prüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse selektiert nur die Popovers, die gerade angezeigt werden. Dies ist wichtig, um Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits ausgeblendetes Popover auszublenden.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover zu öffnen und zu schließen, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel zur Umschaltung der Hilfs-Benutzeroberfläche](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Funktionserkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere automatische Popovers gleichzeitig angezeigt werden dürfen — wenn sie ineinander verschachtelt sind. In solchen Fällen ist es erlaubt, mehrere Popovers gleichzeitig offen zu haben, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

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

Sehen Sie sich unser [Beispiel zum verschachtelten Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an, um ein Beispiel zu sehen. Ihnen wird auffallen, dass eine ganze Reihe von Ereignis-Handlern verwendet wurden, um das Unter-Popover während der Maus- und Tastaturbedienung korrekt anzuzeigen und auszublenden und auch um beide Menüs auszublenden, wenn eine Option aus einem der beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer Multi-Page-Website, könnte ein Teil oder alles davon nicht notwendig sein, aber sie wurden in diesem Demo zu illustrativen Zwecken aufgenommen.

## Verwendung des Popover-Zustands "hint"

Es gibt eine dritte Art von Popover, die Sie erstellen können — **hint Popovers**, die durch Setzen von `popover="hint"` auf Ihrem Popover-Element festgelegt werden. `hint` Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere `hint` Popovers. Sie können leicht entlassen werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise über Symbolleistenschaltflächen verfügen, die gedrückt werden können, um UI Popovers anzuzeigen, aber Sie möchten auch Tooltips anzeigen, wenn die Schaltflächen überfahren werden, ohne die UI Popovers zu schließen.

`hint` Popovers neigen dazu, als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und versteckt zu werden. Wenn eine Schaltfläche zum Öffnen eines `hint` Popovers angeklickt wird, würde ein offenes `auto` Popover leicht geschlossen.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel an, das genau wie oben beschrieben funktioniert. Das Demo enthält eine Schaltflächenleiste; bei Betätigung zeigen die Schaltflächen `auto` Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn sie jedoch überfahren oder fokussiert werden, zeigen die Schaltflächen auch Tooltips (`hint` Popovers), um dem Benutzer eine Vorstellung davon zu geben, was jede Schaltfläche macht, die ein derzeit angezeigtes Untermenü nicht ausblenden.

In den folgenden Abschnitten gehen wir alle wichtigen Teile des Codes durch.

> [!NOTE]
> Sie _können_ `hint` Popovers zusammen mit `manual` Popovers verwenden, obwohl es dafür nicht wirklich einen Grund gibt. Sie sind darauf ausgelegt, einige der Einschränkungen von `auto` Popovers zu umgehen und Anwendungsfälle wie den in diesem Abschnitt beschriebenen zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützten Browsern auf `popover="manual"` zurückfällt.

### Erstellen der Untermenüs mit `popover="auto"`

Die Popup-Untermenüs werden deklarativ mit `auto` Popovers erstellt.

Zuerst die Steuertasten:

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

Die Untermenü-Popovers funktionieren, wie sie sind, öffnen sich, wenn die Symbolleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips beim Überfahren/Fokussieren der Schaltfläche an? Zuerst erstellen wir die Tooltips in HTML, indem wir `hint` Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um das Anzeigen/Verstecken zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir uns Referenzen zu den `hint` Popovers und den Steuerschaltflächen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mithilfe von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignis-Listener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem gegebenen {{htmlelement("button")}} setzt, der ausgewählt wird, indem der `<button>` bei einem bestimmten Indexwert der `btns` `NodeList` gegriffen wird. Die Funktionen wirken sich auf das `hint` Popover zum selben Indexwert der `tooltips` `NodeList` aus, sodass wir die Schaltflächen und die Tooltips synchron halten — das richtige Tooltip wird angezeigt/versteckt, wenn eine Schaltfläche interagiert wird.

Die Ereignis-Listener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) an und [verstecken](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event). Das bedeutet, dass die Tooltips sowohl über die Maus als auch über die Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns` `NodeList` zu iterieren und die `addEventListeners()`-Funktion für jede aufzurufen, sodass alle die gewünschten Ereignis-Listener gesetzt haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Styling von Popovers

Dieser Abschnitt behandelt einige CSS-Selektions- und Positionierungstechniken, die für Popovers relevant sind.

### Auswahl von Popovers

Sie können alle Popovers mit einem einfachen Attributselektor auswählen:

```css
[popover] {
  /* Declarations here */
}
```

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attributselektor einschließen:

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

### Styling der Popover-Kulisse

Das {{cssxref("::backdrop")}}-Pseudoelement ist ein Vollbild-Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Schicht")}} platziert wird, sodass Effekte hinzugefügt werden können, um die Seiteninhalte hinter dem/den Popover(s) zu beeinflussen, wenn gewünscht. Sie möchten beispielsweise die Inhalte hinter dem Popover ausblenden, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Popover-Hintergrundunschärfe-Beispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Beim Betrachten der ersten paar Beispiele, die zu Beginn des Artikels verlinkt sind, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Ansichtsfensters erscheinen, ihren Inhalt umschließen und einen schwarzen Rand haben. Dies ist das Standard-Styling, das mit der folgenden Regel im UA-Stylesheet erreicht wird:

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

Um benutzerdefinierte Größen anzuwenden und das Popover an einem anderen Ort zu positionieren, könnten Sie die obigen Styles mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel dazu in unserem [Popover-Positionierungs-Beispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Anker-Positionierung

Es gibt eine andere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Aufrufer und nicht zum Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil nutzen, dass Popovers und ihre Aufrufer über eine **implizite Ankerreferenz** verfügen.

[Das Assoziieren eines beliebigen Typs von Popover mit seinem Aufrufer](#andere_möglichkeiten,_eine_popover-invoker-beziehung_einzurichten) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Aufrufer zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover mit Hilfe von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) relativ dazu positionieren können.

Da die Assoziation zwischen dem Popover und dem Aufrufer implizit ist, muss keine explizite Assoziation mit den Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} erfolgen. Sie müssen jedoch noch das Positionierungs-CSS angeben.

Zum Beispiel könnten Sie eine Kombination aus {{cssxref("anchor()")}}-Funktionswerten verwenden, die auf {{Glossary("inset_properties", "Einsetz-Eigenschaften")}} gesetzt ist, und `anchor-center`-Werte, die auf Ausrichtungs-Eigenschaften gesetzt sind:

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

Weitere Details zum Assoziieren von Anker- und Positionselementen und zur Positionierung von Elementen relativ zu ihrem Anker finden Sie unter [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor).

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation nutzt, sehen Sie unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Anker-Assoziationen mithilfe der Eigenschaften {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}} vorgenommen werden.

## Animieren von Popovers

Popovers werden auf `display: none;` gesetzt, wenn sie ausgeblendet sind, und `display: block;`, wenn sie angezeigt werden, sowie aus der {{Glossary("top_layer", "obersten Schicht")}} und dem [Barrierefreiheit-Baum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Damit Popovers animiert werden können, muss die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. Zum Beispiel:

- Bei der Animation von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, damit er die ganze Zeit sichtbar ist.
- Bei der Animation von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert zu `none` bei `100%` der Animationsdauer, damit er die gesamte Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben genannte Verhalten zu aktivieren. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind folgende Merkmale erforderlich:

- {{CSSxRef("@starting-style")}}-At-Regel
  - : Bietet einen Satz von Startwerten für Eigenschaften, die am Popover festgelegt werden sollen und von denen Sie beim ersten Anzeigen des Popovers ausgehend einen Übergang erstellen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaftsänderung von einem Wert zu einem anderen auf einem sichtbaren Element ergibt; sie werden nicht bei der ersten Stilaktualisierung eines Elements oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover für die Dauer des Übergangs den Wert `display: block` (oder einen anderen sichtbaren `display`-Wert) hat, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des Popovers aus der obersten Schicht aufgeschoben wird, bis der Übergang abgeschlossen ist, sodass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Abkürzung), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über sein globales HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung für die Anzeige des Popovers dient:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausgeblendet wird, während es sich horizontal ausdehnt oder schrumpft. Um dies zu erreichen, legen wir einen Startzustand für diese Eigenschaften im versteckten Zustand des Popover-Elements fest (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation zu definieren, während das Popover angezeigt oder verborgen wird.

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

Wie zuvor beschrieben, haben wir außerdem:

- Einen Startzustand für die `transition` innerhalb des `@starting-style`-Blocks festgelegt.
- `display` zur Liste der übergangenen Eigenschaften hinzugefügt, sodass das animierte Element während der Ein- und Ausblendeanimationen des Popovers sichtbar bleibt (auf `display: block` gesetzt). Ohne dies wäre die Ausblendanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergangenen Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus der obersten Schicht aufgeschoben wird, bis die Animation abgeschlossen ist. Der Effekt davon ist bei einfachen Animationen wie dieser möglicherweise nicht erkennbar, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vor Abschluss des Übergangs aus dem Overlay entfernt wird.
- `allow-discrete` auf beide Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang am [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinzugefügt haben, der hinter dem Popover erscheint, während es sich öffnet, was eine schöne Verdunkelungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers von `display: none` zu `display: block` wechseln, jedes Mal, wenn sie angezeigt werden, wechselt das Popover bei jedem Einblendeübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wird es von seinem `[popover]:popover-open`-Zustand zu seinem Standard-`[popover]`-Zustand übergehen.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Ausblenden in solchen Fällen unterschiedlich ist. Siehe unser [Beispiel zur Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Nachweis dieses Konzepts.

### Eine Popover-Schlüsselbild-Animation

Beim Animieren eines Popovers mit CSS-Schlüsselbild-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben kein `@starting-style`; Sie schließen Ihre "zu" und "von" `display`-Werte in Schlüsselbildern ein.
- Sie ermöglichen keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` auch nicht innerhalb von Schlüsselbildern setzen; die `display`-Animation übernimmt die Animation des Popovers vom angezeigten zum versteckten Zustand.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung für die Anzeige des Popovers fungiert:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Ein- und Ausblendanimationen sowie eine Eingangsanimation nur für das Backdrop spezifizieren. Beachten Sie, dass es nicht möglich war, das Ausblenden des Backdrops zu animieren - das Backdrop wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts animiert werden kann.

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

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}
