---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen dieser API.

## Erstellen deklarativer Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das Ihren Popover-Inhalt enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit dessen Steuerungselementen zu verbinden.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element bei Seitenladevorgang verborgen wird, indem es mit {{cssxref("display", "display: none")}} versehen wird. Um das Popover anzuzeigen oder zu verstecken, muss mindestens ein Steuerungsknopf (auch als Popover-**Invoker** bekannt) hinzugefügt werden. Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerungsknopf setzen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten des Buttons ist, ein Umschalter zu sein — durch wiederholtes Drücken wird das Popover zwischen sichtbar und verborgen umschalten.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-Attribut verwenden — dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Anzeigen- und Verbergen-Knöpfe zu erstellen, könnten Sie dies tun:

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
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die ein Steuerungsknopf ausführen wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{Glossary("top_layer", "Oberste Schicht")}} gebracht, sodass es über allen anderen Seiteninhalten schwebt.

## Automatischer Zustand und "leichtes Verwerfen"

Wenn ein Popover-Element wie oben gezeigt mit `popover` oder `popover="auto"` versehen ist, wird gesagt, dass es sich im **automatischen Zustand** befindet. Die beiden wichtigen Verhaltensweisen bei automatischem Zustand sind:

- Das Popover kann "leicht verworfen" werden — dies bedeutet, dass Sie das Popover durch Klicken außerhalb davon ausblenden können.
- Das Popover kann auch durch browserspezifische Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein `auto` Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel besteht, wenn Sie verschachtelte automatische Popovers haben. Weitere Details hierzu finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> **Note:** `popover="auto"` Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) für andere Elemente im Dokument verworfen. Beachten Sie allerdings, dass das Aufrufen dieser Methoden bei einem angezeigten Popover fehlschlägt, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der automatische Zustand ist nützlich, wenn Sie immer nur ein Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Lernnachrichten in der Benutzeroberfläche, die Sie anzeigen möchten, aber Sie möchten nicht, dass die Anzeige überladen und verwirrend wird. Oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status einen vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere automatische Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht zu verwerfen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Zugänglichkeitsfunktionen für Popovers

Wenn eine Beziehung zwischen einem Popover und dessen Steuerung (Invoker) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um es Tastatur- und assistiven Technologie (AT)-Nutzern zu erleichtern, mit dem Popover zu interagieren:

- Wenn das Popover angezeigt wird, wird die Tastaturfokus-Navigationsreihenfolge so aktualisiert, dass das Popover als nächstes in der Sequenz ist: Wenn beispielsweise ein Knopf gedrückt wird, um ein Popover anzuzeigen, sind alle Knöpfe im Popover die nächsten in der Tabulatorreihenfolge (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird, wenn das Popover über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) geschlossen wird, der Fokus zurück auf den Invoker verlagert.
- Um AT wie Bildschirmlesern das Verständnis der Beziehung zwischen Invoker und Popover zu erleichtern, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und dessen Steuerung auf diese Weise erstellt auch einen impliziten Ankerbezug zwischen den beiden — siehe [Popover-Ankerpositionierung](#popover-anker-positionierung) für weitere Details.

> [!NOTE]
> Sie können auch eine Popover-Invoker-Beziehung mit der `source`-Option der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methoden einrichten, aber beachten Sie, dass in diesem Fall nur die Änderungen der Fokus-Navigationsreihenfolge vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum automatischen Zustand ist der **manuelle Zustand**, der durch `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht verworfen" werden, obwohl deklarative Anzeig-/Verberg-/Umschalttasten (wie oben gezeigt) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Popovers über JavaScript anzeigen

Sie können Popovers auch mithilfe einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich für die Feature-Erkennung. Beispielsweise:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut, das es ermöglicht, die Steuerungsknöpfe für ein Popover einzurichten, obwohl der Eigenschaftswert ein Verweis auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction), das es ermöglicht, die durch einen Steuerungsknopf ausgeführte Aktion festzulegen.

Indem Sie diese drei zusammenfügen, können Sie ein Popover und seinen Steuerungsknopf programmatisch einrichten, wie folgt:

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

Zum Beispiel möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfe-Popover durch Klicken auf einen Knopf oder durch Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden, oder Sie könnten es wie oben gezeigt mit JavaScript tun.

Für das zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine zum Öffnen des Popovers und eine andere, um es erneut zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}} Pseudo-Klasse trifft nur auf Popovers zu, die derzeit angezeigt werden. Dies ist wichtig, um Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits verborgenes zu verbergen.

Alternativ können Sie eine einzelne Taste programmieren, um das Popover wie folgt ein- und auszublenden:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel für die Umschaltung der Hilfe-Benutzeroberfläche](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die JavaScript-Eigenschaften des Popovers, die Feature-Erkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere automatische Popovers gleichzeitig angezeigt werden dürfen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachfahren:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über Invoker-/Steuerungselemente:

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

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an. Ihnen wird auffallen, dass eine Vielzahl von Ereignishandlern verwendet wurden, um das Unter-Popover während des Maus- und Tastaturzugangs angemessen anzuzeigen und zu verstecken, und auch um beide Menüs zu verstecken, wenn eine Option aus einem von beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte in einer SPA- oder Multi-Page-Website handhaben, können einige oder alle dieser Komponenten möglicherweise nicht notwendig sein, aber sie wurden in diesem Demo zu Illustrationszwecken enthalten.

## Verwendung des "Hint"-Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hint-Popovers**, die durch `popover="hint"` auf Ihrem Popover-Element bezeichnet werden. `hint`-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere `hint`-Popovers. Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Toolbar-Knöpfe haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber gleichzeitig möchten, dass Tooltips angezeigt werden, wenn die Knöpfe geschwebt werden, ohne die UI-Popovers zu schließen.

`hint`-Popovers neigen dazu, in Reaktion auf nicht-Click-JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und ausgeblendet zu werden. Ein Klick auf einen Knopf, um ein `hint`-Popover zu öffnen, würde dazu führen, dass ein offenes `auto`-Popover leicht verworfen wird.

Sehen Sie sich unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau wie oben beschrieben funktioniert. Das Demo bietet eine Button-Leiste; wenn gedrückt, zeigen die Knöpfe `auto`-Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn die Knöpfe jedoch geschwebt oder fokussiert werden, werden auch Tooltips (`hint`-Popovers) angezeigt, die dem Benutzer eine Vorstellung davon geben, was jeder Knopf macht, ohne ein derzeit angezeigtes Untermenü auszublenden.

In den untenstehenden Abschnitten gehen wir auf alle wichtigen Teile des Codes ein.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, obwohl dafür eigentlich kein wirklicher Bedarf besteht. Sie sind dazu gedacht, einige der Einschränkungen von `auto`-Popovers zu umgehen und Anwendungsfälle zu ermöglichen, wie sie in diesem Abschnitt beschrieben werden.
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

Die Untermenü-Popovers funktionieren gut, wenn sie sind — sie öffnen sich, wenn die Toolbar-Knöpfe gedrückt werden, aber wie zeigen wir auch Tooltips bei Hover/Focus auf den Knöpfen an? Zuerst erstellen wir die Tooltips im HTML mit `hint`-Popovers:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um das Anzeigen/Verbergen zu steuern, müssen wir JavaScript verwenden. Zuerst holen wir uns Referenzen zu den `hint`-Popovers und den Steuerungsknöpfen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion `addEventListeners()`, die vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einen gegebenen {{htmlelement("button")}} setzt, ausgewählt durch das Abrufen des `<button>` an einem spezifischen Indexwert der `btns`-`NodeList`. Die Funktionen wirken auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList`, wodurch wir die Knöpfe und die Tooltips synchron halten können — das richtige Tooltip wird gezeigt/versteckt, wenn ein Knopf bedient wird.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event), und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips über Maus und Tastatur zugänglich sind.

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

Zum Schluss verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns`-`NodeList` zu iterieren und die Funktion `addEventListeners()` für jeden von ihnen aufzurufen, sodass alle die gewünschten Ereignislistener gesetzt haben.

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

Alternativ können Sie einen bestimmten Popover-Typ auswählen, indem Sie einen Wert im Attributselektor einschließen:

```css
[popover="auto"] {
  /* Declarations here */
}
```

Sie können nur Popovers auswählen, die angezeigt werden, indem Sie die {{cssxref(":popover-open")}} Pseudo-Klasse verwenden:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrunds

Das {{cssxref("::backdrop")}} Pseudo-Element ist ein Vollbild-Element, das direkt hinter angezeigten Popover-Elementen in der {{Glossary("top_layer", "Obersten Schicht")}} platziert wird, wodurch Effekte zu den Seiteninhalten hinter dem Popover hinzugefügt werden können, falls gewünscht. Vielleicht möchten Sie beispielsweise den Inhalt hinter dem Popover verwischen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel für verwischte Hintergründe bei Popovers](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Beim Betrachten der ersten paar Beispiele, die zu Beginn des Artikels verlinkt sind, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Viewports erscheinen, ihren Inhalt umschließen und einen schwarzen Rand haben. Dies ist das Standard-Design, das mit der folgenden Regel im UA-Stylesheet erreicht wird:

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

Um benutzerdefinierte Größen anzuwenden und das Popover woanders zu positionieren, könnten Sie die obigen Styles mit etwas wie diesem überschreiben:

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

Ein isoliertes Beispiel hierfür können Sie in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Anker-Positionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Invoker anstelle des Viewports oder eines positionierten Vorgängers positionieren möchten, können Sie die Tatsache nutzen, dass Popovers und ihre Invoker einen **impliziten Ankerbezug** haben.

Das Verknüpfen einer Art von Popover mit seinem Invoker über das [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut oder die `source`-Option der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methoden erstellt einen impliziten Ankerbezug zwischen den beiden. Dies führt dazu, dass der Invoker zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu über die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Zuordnung zwischen dem Popover und dem Invoker implizit ist, muss keine explizite Zuordnung mit den {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden. Sie müssen jedoch dennoch das Positionierungs-CSS angeben.

Beispielsweise könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten bei {{Glossary("inset_properties", "Einfüge-Eigenschaften")}} verwenden und `anchor-center`-Werte bei Ausrichtungseigenschaften:

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

Siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Zuordnung von Anker- und positionierten Elementen sowie zum Positionieren von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Zuordnung verwendet, siehe unser [Popover-Hinweis-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Ankerzuordnungen mithilfe der {{cssxref("anchor-name")}} und {{cssxref("position-anchor")}}-Eigenschaften gemacht werden.

## Animation von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie verborgen sind, und auf `display: block;`, wenn sie angezeigt werden, und werden sowohl aus der {{Glossary("top_layer", "Obersten Schicht")}} als auch aus dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt und hinzugefügt. Um Popovers zu animieren, muss die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen Wert von `display` wechseln, sodass der animierte Inhalt für die gesamte Dauer der Animation sichtbar ist. Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert), wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er die ganze Zeit über sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit er die ganze Zeit über sichtbar ist.

> [!NOTE]
> Beim Animieren von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Bei der Animation von Popovers mit CSS-Übergängen sind folgende Merkmale erforderlich:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Stellt einen Satz von Startwerten für Eigenschaften bereit, die am Popover gesetzt sind und von denen Sie ausgehend überblenden möchten, wenn es zuerst angezeigt wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig finden CSS-Übergänge nur statt, wenn eine Eigenschaft von einem Wert auf einen anderen bei einem sichtbaren Element ändert; sie werden nicht bei der ersten Stiländerung eines Elements oder wenn der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` in die Übergangsliste ein, damit das Popover für die gesamte Dauer des Übergangs `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Schließen Sie `overlay` in die Übergangsliste ein, um sicherzustellen, dass die Entfernung des Popovers aus der obersten Schicht bis zum Abschluss des Übergangs aufgeschoben wird und der Übergang erneut sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf das {{cssxref("transition")}}-Shorthand), um diskrete Übergänge für diese beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Sehen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das durch das globale `popover`-HTML-Attribut als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir überblenden möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausgeblendet wird, während es horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Anfangszustand für diese Eigenschaften im verborgenen Zustand des Popover-Elements (ausgewählt mit dem Attributselektor `[popover]`) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt mit der Pseudo-Klasse [`:popover-open`]). Wir verwenden auch die Eigenschaft [`transition`](/de/docs/Web/CSS/transition), um die zu animierenden Eigenschaften und die Dauer der Animation festzulegen, während das Popover gezeigt oder verborgen wird.

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

Wie zuvor besprochen, haben wir auch:

- Einen Anfangszustand für die `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `display` zur Liste der überzublendenden Eigenschaften hinzugefügt, sodass das animierte Element während der Ein- und Austrittsanimationen des Popovers sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Ausblenden-Animation nicht sichtbar; effektiv würde das Popover einfach verschwinden.
- `overlay` zur Liste der überzublendenden Eigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Schicht bis zum Abschluss der Animation aufgeschoben wird. Der Effekt dessen fällt bei grundlegenden Animationen wie dieser möglicherweise nicht auf, doch in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus der Überlagerung entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beide Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden bemerken, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) einbezogen haben, der hinter dem Popover erscheint, wenn es sich öffnet, und eine schöne Abdunklungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Übergang eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen, wenn der Eintrittsübergang erfolgt. Wenn das Popover geschlossen wird, geht es vom `[popover]:popover-open`-Zustand in den Standardzustand `[popover]` über.
>
> Es ist möglich, dass sich der Stilübergang beim Ein- und Austritt in solchen Fällen unterscheidet. Siehe unser [Beispiel, das zeigt, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für ein Beispiel, das dies beweist.

### Eine Popover-Schlüsselframe-Animation

Bei der Animation eines Popovers mit CSS-Schlüsselframe-Animationen gibt es einige Unterschiede, auf die Sie achten sollten:

- Sie geben keinen `@starting-style` an; Sie schließen Ihre "zu" und "von" `display`-Werte in Schlüsselframes ein.
- Sie ermöglichen nicht explizit diskrete Animationen; es gibt kein `allow-discrete` innerhalb von Schlüsselframes.
- Sie müssen `overlay` auch nicht in Schlüsselframes setzen; die `display`-Animation behandelt die Animation des Popovers von angezeigt zu verborgen.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselframes definiert, die die gewünschten Ein- und Austrittsanimationen angeben, und eine Eintrittsanimation nur für das Backdrop. Beachten Sie, dass es nicht möglich war, das Backdrop-Überblenden zu animieren — das Backdrop wird unmittelbar aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts mehr zu animieren ist.

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

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Eine Popover-Schlüsselframe-Animation", "100%", "200") }}
