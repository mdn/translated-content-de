---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popup-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Nutzung aller Funktionen.

## Deklarative Popovers erstellen

In der einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das den Popover-Inhalt enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert ist gleichbedeutend mit `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite ausgeblendet wird, indem auf ihm {{cssxref("display", "display: none")}} gesetzt wird. Um den Popover anzuzeigen oder auszublenden, müssen Sie mindestens einen Steuerknopf hinzufügen (auch als Popover-**Aufrufer** bekannt). Sie können ein {{htmlelement("button")}} (oder ein {{htmlelement("input")}} vom `type="button"`) als Popover-Steuerknopf einstellen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Knopf ein Umschalter ist — ein wiederholtes Drücken schaltet das Popover zwischen Anzeige und Ausblendung um.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-Attribut verwenden — dieses nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Zum Beispiel könnten Sie separate Zeige- und Ausblende-Buttons erstellen:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Code-Snippet in unserem [einfachen deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, wird `"toggle"` als Standardaktion des Steuerknopfes ausgeführt.

Wenn ein Popover angezeigt wird, wird `display: none` entfernt und in die {{Glossary("top_layer", "Top-Schicht")}} gesetzt, sodass es über allen anderen Seiteninhalten liegt.

## Auto-Zustand und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt wird, wird gesagt, dass es sich im **Auto-Zustand** befindet. Die zwei wichtigen Verhaltensweisen im Auto-Zustand sind:

- Der Popover kann "leicht ausgeblendet" werden — das bedeutet, dass Sie den Popover durch Klicken außerhalb davon ausblenden können.
- Der Popover kann auch durch spezifische Browser-Mechanismen wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- In der Regel kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Weitere Einzelheiten finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> **Hinweis:** `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument ausgeblendet. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem bereits angezeigten Popover fehlschlagen wird, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere UI-Nachrichten, die Sie zeigen möchten, aber nicht möchten, dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status alle vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht auszublenden, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Zugänglichkeitsmerkmale von Popovers

Wenn eine Beziehung zwischen einem Popover und seinem Steuerungselement (Aufrufer) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Tastaturbenutzern und unterstützender Technologie (AT) die Interaktion mit dem Popover zu erleichtern:

- Wenn der Popover angezeigt wird, wird die Navigationsreihenfolge der Tastaturfokussierung aktualisiert, sodass der Popover als nächstes in der Reihenfolge steht: Zum Beispiel, wenn ein Knopf gedrückt wird, um einen Popover anzuzeigen, werden alle Knöpfe im Popover als nächstes in der Tab-Reihenfolge stehen (werden durch Drücken der <kbd>Tab</kbd>-Taste fokussiert). Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus wieder auf den Aufrufer verlagert.
- Um AT wie Bildschirmlesegeräten die Beziehung zwischen dem Aufrufer und dem Popover verständlich zu machen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Die Einrichtung einer Beziehung zwischen einem Popover und seinem Steuerungselement auf diese Weise erzeugt auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Anker-Positionierung](#anker-positionierung_von_popovers) für weitere Details.

## Andere Wege zur Einrichtung einer Popover-Aufrufer-Beziehung

Sie können eine Popover-Aufrufer-Beziehung neben der Verwendung des `popovertarget`-Attributs auch auf andere Weise einrichten:

- Durch Verwendung der `source`-Option der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Fokusnavigation-Reihenfolgenänderungen vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es kann nicht garantiert werden, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Auswahlelement, wenn es über die {{cssxref("appearance")}}-Eigenschaft `base-select` in die Funktionalität eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) integriert wird. In diesem Fall wird eine implizite Popover-Aufrufer-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch das Setzen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht ausgeblendet" werden, obwohl deklarative Show/Hide/Toggle-Buttons (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) in Aktion sehen.

## Popovers über JavaScript anzeigen

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann zur Erstellung eines Popovers über JavaScript verwendet werden und ist auch nützlich für die Merkmals-Erkennung. Zum Beispiel:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut, das die Einrichtung der Steuerknöpfe für ein Popover ermöglicht, obwohl der Eigenschaftswert eine Referenz auf das zu steuernde Popover-DOM-Element nimmt.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction), das es Ihnen erlaubt, die vom Steuerknopf ergriffene Aktion anzugeben.

Indem Sie diese drei zusammenbringen, können Sie programmatisch ein Popover und seinen Steuerknopf einrichten, wie folgt:

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

Sie haben auch mehrere Methoden zur Steuerung der Anzeige und Ausblendung:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) zum Anzeigen eines Popovers.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zum Ausblenden eines Popovers.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) zum Umschalten eines Popovers.

Zum Beispiel könnten Sie die Möglichkeit bieten, ein Hilfepopover durch Klicken auf einen Knopf oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine zum Öffnen des Popovers und eine, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse trifft nur Popovers, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen oder ein bereits ausgeblendetes Popover auszublenden.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover sowohl ein- als auch auszublenden, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [UI-Hilfe umschalten Beispiel](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die in Aktion gezeigten Popover-JavaScript-Eigenschaften, Merkmalserkennung und die `togglePopover()`-Methode zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, nicht mehrere Auto-Popovers gleichzeitig anzuzeigen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, aufgrund ihrer Beziehung zueinander. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über Aufruf-/Steuerungselemente:

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

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an. Ihnen wird auffallen, dass ziemlich viele Ereignishandler verwendet wurden, um das Unterpopover während des Maus- und Tastaturzugriffs angemessen anzuzeigen und auszublenden und auch beide Menüs auszublenden, wenn eine Option aus einem von beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte handhaben, entweder in einer Single-Page-Anwendung oder einer mehrseitigen Webseite, könnten einige von all diesen möglicherweise nicht erforderlich sein, aber sie wurden in diesem Demo zu illustrativen Zwecken aufgenommen.

## Verwendung des "Hint"-Popover-Zustands

Es gibt eine dritte Art von Popover, die Sie erstellen können — **Hint-Popovers**, die durch das Setzen von `popover="hint"` auf Ihrem Popover-Element gekennzeichnet sind. `Hint`-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere `hint`-Popovers. Sie können leicht ausgeblendet werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie zum Beispiel Werkzeugleistenknöpfe haben, die zum Anzeigen von UI-Popovers gedrückt werden können, aber Sie möchten auch Tooltips anzeigen, wenn die Knöpfe überfahren werden, ohne die UI-Popovers zu schließen.

`Hint`-Popovers neigen dazu, als Reaktion auf nicht-klickbare JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet zu werden. Wenn Sie einen Knopf zum Öffnen eines `Hint`-Popovers klicken, würde ein offenes `auto`-Popover leicht ausgeblendet.

Sehen Sie sich unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) an, um ein Beispiel zu sehen, das genau wie oben beschrieben funktioniert. Das Demo verfügt über eine Tastenleiste; wenn sie gedrückt werden, zeigen die Tasten `auto`-Popup-Untermenüs, in denen weitere Optionen ausgewählt werden können. Wenn sie jedoch überfahren oder fokussiert werden, zeigen die Tasten auch Tooltips (`hint`-Popovers), um dem Benutzer eine Vorstellung davon zu geben, was jeder Knopf bewirkt, die ein derzeit angezeigtes Untermenü nicht ausblenden.

In den folgenden Abschnitten gehen wir alle wichtigen Teile des Codes durch.

> [!NOTE]
> Sie _können_ `Hint`-Popovers neben `manual`-Popovers verwenden, obwohl es dafür eigentlich keinen großen Grund gibt. Sie sind so konzipiert, dass sie einige der Einschränkungen von `auto`-Popovers umgehen, um Anwendungsfälle wie das in diesem Abschnitt beschriebene zu ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützenden Browsern auf `popover="manual"` zurückfällt.

### Die Untermenüs mit `popover="auto"` erstellen

Die Popup-Untermenüs werden deklarativ mit `auto`-Popovers erstellt.

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

### Die Tooltips mit `popover="hint"` erstellen

Die Untermenü-Popovers funktionieren so wie sie sind gut, indem sie geöffnet werden, wenn die Werkzeugleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips bei Schaltflächen-Hover/Focus an? Zuerst erstellen wir die Tooltips in HTML, wobei `hint`-Popovers verwendet werden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um die Anzeige/Ausblendung zu steuern, müssen wir JavaScript verwenden. Zuerst greifen wir auf die `hint`-Popovers und die Steuerknöpfe in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)en mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zu:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als Nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einem bestimmten {{htmlelement("button")}} setzt, der durch das Erfassen des `<button>` an einem bestimmten Indexwert der `btns`-`NodeList` ausgewählt wird. Die Funktionen werden auf das `hint`-Popover am gleichen Indexwert der `tooltips`-`NodeList` angewendet, sodass wir die Knöpfe und die Tooltips synchron halten können — das richtige Tooltip anzeigen/ausblenden, wenn mit einem Knopf interagiert wird.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [blenden](/de/docs/Web/API/HTMLElement/hidePopover) das Popover bei [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event) aus, was bedeutet, dass die Tooltips über Maus und Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um die `<buttons>` in der `btns`-`NodeList` zu durchlaufen und die `addEventListeners()`-Funktion für jede von ihnen aufzurufen, sodass alle die gewünschten Ereignislistener-Einstellungen haben.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Popovers stylen

Dieser Abschnitt befasst sich mit einigen CSS-Auswahl- und Positionierungstechniken, die für Popovers relevant sind.

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

Sie können nur Popovers auswählen, die mit der {{cssxref(":popover-open")}}-Pseudoklasse angezeigt werden:

```css
:popover-open {
  /* Declarations here */
}
```

### Styling des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudoelement ist ein vollseitiges Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "Top-Schicht")}} platziert wird, sodass bei Bedarf Effekte auf die Seiteninhalte hinter den Popovers hinzugefügt werden können. Möglicherweise möchten Sie beispielsweise die Inhalte hinter dem Popover verschwimmen lassen, um die Aufmerksamkeit des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel für Hintergrundunschärfe von Popovers](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

### Positionierung von Popovers

Wenn Sie sich die ersten paar Beispiele am Anfang des Artikels ansehen, ist Ihnen möglicherweise aufgefallen, dass die Popovers in der Mitte des Ansichtsbereichs erscheinen, ihren Inhalt umschließen und einen schwarzen Rand haben. Dies ist das Standard-Styling, das mit der folgenden Regel im UA-Stylesheet erzielt wird:

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

Um eine benutzerdefinierte Größe anzuwenden und das Popover an einer anderen Stelle zu positionieren, könnten Sie die oben genannten Stile mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel hierfür in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Anker-Positionierung von Popovers

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Aufrufer statt zum Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil nutzen, dass Popovers und ihre Aufrufer eine **implizite Ankerreferenz** haben.

[Das Verknüpfen einer beliebigen Art von Popover mit seinem Aufrufer](#andere_wege_zur_einrichtung_einer_popover-aufrufer-beziehung) erzeugt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Aufrufer zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ zu ihm mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Verknüpfung zwischen dem Popover und dem Aufrufer implizit ist, muss keine explizite Zuordnung mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden. Sie müssen jedoch die CSS-Positionierung spezifizieren.

Beispielsweise könnten Sie eine Kombination von {{cssxref("anchor()")}}-Funktionswerten setzen, die auf {{Glossary("inset_properties", "Einfügeeigenschaften")}} angewendet sind, und `anchor-center`-Werten, die auf Ausrichtungs-Eigenschaften gesetzt sind:

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

Siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Verknüpfung von Anker- und positionierten Elementen und zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Ein Beispiel, das diese implizite Zuordnung verwendet, finden Sie in unserem [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Anker-Zuordnungen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften vorgenommen werden.

## Popovers animieren

Popovers sind eingestellt auf `display: none;` wenn sie ausgeblendet und `display: block;` wenn sie angezeigt werden, sowie der {{Glossary("top_layer", "Top-Schicht")}} und dem [Zugänglichkeit-Baum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entsprechend hinzugefügt oder entfernt werden. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation der [diskreten Animationstypen](/de/docs/Web/CSS/CSS_animated_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen `display`-Wert wechseln, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. Also zum Beispiel:

- Wenn `display` von `none` auf `block` (oder einen anderen sichtbaren `display`-Wert) animiert wird, schaltet der Wert zu `block` bei `0%` der Animationsdauer, damit es während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, schaltet der Wert zu `none` bei `100%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.

> [!NOTE]
> Bei der Animation mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Bei Animationen mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Bei der Animation von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}} at-rule
  - : Bietet eine Reihe von Ausgangswerten für Eigenschaften, die auf dem Popover gesetzt sind, von denen Sie übergehen möchten, wenn es zum ersten Mal angezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei der ersten Stilaktualisierung eines Elements oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst.
- {{CSSxRef("display")}} property
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während des gesamten Übergangs sichtbar bleibt (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt), um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} property
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des Popovers aus der Top-Schicht aufgeschoben wird, bis der Übergang abgeschlossen ist, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} property
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Abkürzung), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein als Popover deklariertes {{htmlelement("div")}}-Element über das globale [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-HTML-Attribut und ein als Popover-Anzeige-Steuerelement bestimmtes {{htmlelement("button")}}-Element:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die zwei Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausgeblendet wird, während es horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Ausgangszustand für diese Eigenschaften auf den ausgeblendet Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation festzulegen, während das Popover angezeigt oder ausgeblendet wird.

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

Wie bereits erwähnt, haben wir auch:

- Einen Ausgangszustand für die `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `display` zur Liste der übergangenen Eigenschaften hinzugefügt, damit das animierte Element während der Eingangs- und Ausgangsanimation des Popovers sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Ausgangsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergangenen Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus der Top-Schicht verzögert wird, bis die Animation abgeschlossen ist. Der Effekt kann bei einfachen Animationen wie dieser möglicherweise nicht sichtbar sein, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vor Abschluss des Übergangs aus dem Overlay entfernt wird.
- `allow-discrete` auf beide Eigenschaften in den oben genannten Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch eine Übergangsanimation auf der [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingefügt haben, die hinter dem Popover erscheint, wenn es geöffnet wird, und eine angenehme Verdunkelungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Übergang eines Popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, wechselt das Popover bei jedem Auftreten des Eingangsübergangs von seinen `@starting-style`-Stil zu seinem `[popover]:popover-open`-Stil. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-Zustand `[popover]`.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Beispiel für eine Demonstration der Verwendung von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dieser Möglichkeit.

### Eine Popover-Schlüsselrahmen-Animation

Beim Animieren eines Popovers mit CSS-Schlüsselbildrahmenanimationen gibt es einige Unterschiede zu beachten:

- Sie geben keine `@starting-style` an; Sie schließen Ihre "to"- und "from"-`display`-Werte in den Schlüsselbildern ein.
- Sie aktivieren keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb der Schlüsselbilder.
- Sie müssen `overlay` auch nicht in den Schlüsselbildern setzen; die `display`-Animation behandelt die Animation des Popovers vom Anzeigen zum Ausblenden.

Lassen Sie uns ein Beispiel ansehen.

#### HTML

Das HTML enthält ein als Popover deklariertes {{htmlelement("div")}}-Element und ein als Popover-Anzeige-Steuerelement bestimmtes {{htmlelement("button")}}-Element:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder erstellt, die die gewünschten Eingangs- und Ausgangsanimationen spezifizieren, und als Eingangsanimation nur für die Hintergrundeingangsanimation. Beachten Sie, dass es nicht möglich war, den Hintergrund auszublenden zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass es nichts zu animieren gibt.

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

{{ EmbedLiveSample("Eine Popover-Schlüsselrahmen-Animation", "100%", "200") }}
