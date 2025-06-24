---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten, flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Verwendung aller ihrer Funktionen.

## Deklarative Popover erstellen

In seiner einfachsten Form wird ein Popover erstellt, indem das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu dem Element hinzugefügt wird, das Ihre Popover-Inhalte enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite durch die Einstellung von {{cssxref("display", "display: none")}} ausgeblendet wird. Um das Popover anzuzeigen/auszublenden, müssen Sie mindestens einen Steuerschalter (auch bekannt als Popover-**Auslöser**) hinzufügen. Sie können eine {{htmlelement("button")}} (oder ein {{htmlelement("input")}} vom `type="button"`) als Popover-Steuerschalter festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut mit dem Wert der ID des zu kontrollierenden Popovers zuweisen:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten ist, dass der Button ein Umschaltknopf ist – bei wiederholtem Drücken wird das Popover zwischen Anzeige und Ausblendung umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) verwenden – dieses nimmt den Wert `"hide"`, `"show"` oder `"toggle"` an. Zum Beispiel, um separate Anzeigen- und Ausblendschalter zu erstellen, könnten Sie Folgendes tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie das vorherige Code-Snippet in unserem [Einfaches deklaratives Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) rendert.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird es aus dem `display: none` entfernt und in die {{Glossary("top_layer", "oberste Ebene")}} gebracht, sodass es über allen anderen Seiteninhalten liegt.

## Auto-Zustand und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` gesetzt ist, hat es den **Auto-Zustand**. Die beiden wichtigen Verhaltensweisen im Auto-Zustand sind:

- Das Popover kann "leicht verworfen" werden – das bedeutet, dass Sie das Popover durch Klicken außerhalb von ihm ausblenden können.
- Das Popover kann auch mit browserspezifischen Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden – das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, versteckt das erste. Die Ausnahme zu dieser Regel besteht darin, wenn Sie verschachtelte Auto-Popovers haben. Weitere Details finden Sie im Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers).

> [!NOTE] > `popover="auto"`-Popovers werden auch bei erfolgreichen Aufrufen von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument verworfen. Beachten Sie jedoch, dass das Aufrufen dieser Methoden auf einem angezeigten Popover zu einem Fehler führt, da diese Verhaltensweisen auf einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein einzelnes Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere UI-Nachrichten, die Sie anzeigen möchten, möchten aber nicht, dass die Anzeige unübersichtlich und verwirrend wird, oder Sie zeigen Statusnachrichten an, bei denen der neue Status vorherige Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Mehrere Auto-Popovers Beispiel](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers leicht zu verwerfen, nachdem sie angezeigt wurden, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Popover-Zugänglichkeitsfunktionen

Wenn eine Beziehung zwischen einem Popover und seiner Steuerung (Auslöser) über das `popovertarget`-Attribut hergestellt wird, nimmt die API automatisch zwei weitere Änderungen an der Umgebung vor, um Benutzern von Tastaturen und unterstützender Technologie (AT) die Interaktion mit dem Popover zu erleichtern:

- Wenn das Popover angezeigt wird, wird die Tastaturfokus-Navigationsreihenfolge aktualisiert, sodass das Popover als nächstes in der Sequenz liegt: zum Beispiel, wenn ein Button gedrückt wird, um ein Popover anzuzeigen, werden beliebige Schaltflächen innerhalb des Popovers als nächstes in der Tabulator-Reihenfolge (wird durch Drücken der <kbd>Tab</kbd>-Taste fokussiert) sein. Umgekehrt wird beim Schließen des Popovers über die Tastatur (normalerweise über die <kbd>Esc</kbd>-Taste) der Fokus wieder auf den Auslöser verschoben.
- Um AT wie Bildschirmleseprogrammen das Verständnis der Beziehung zwischen dem Auslöser und dem Popover zu ermöglichen, wird eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen ihnen eingerichtet.

Das Einrichten einer Beziehung zwischen einem Popover und seiner Steuerung auf diese Weise erstellt auch eine implizite Ankerreferenz zwischen den beiden — siehe [Popover-Anker-Positionierung](#popover-anker-positionierung) für weitere Details.

## Andere Möglichkeiten, eine Popover-Auslöser-Beziehung einzurichten

Sie können eine Popover-Auslöser-Beziehung auf andere Weise einrichten, zusätzlich zur Verwendung des `popovertarget`-Attributs:

- Verwendung der Option `source` der Methoden [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover). Beachten Sie, dass in diesem Fall nur die Änderungen der Fokussier-Navigationsreihenfolge vorgenommen werden, nicht die implizite ARIA-Beziehung. Dies liegt daran, dass die `source`-Option auf jede Art von Element gesetzt werden kann, nicht nur auf `<button>`-Elemente, und es nicht garantiert werden kann, dass die Beziehung sinnvoll wäre.
- Zwischen einem {{htmlelement("select")}}-Element und seinem Dropdown-Auswahlelement, wenn es in die [anpassbare Select-Element](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)-Funktionalität über das {{cssxref("appearance")}}-Eigenschaft `base-select`-Wert eingebunden wird. In diesem Fall wird eine implizite Popover-Auslöser-Beziehung zwischen den beiden erstellt.

## Verwendung des manuellen Popover-Zustands

Eine Alternative zum Auto-Zustand ist der **manuelle Zustand**, der durch Setzen von `popover="manual"` auf Ihr Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht verworfen" werden, obwohl Show/Hide/Umschalt-Schaltflächen (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Mehrere manuelle Popovers Beispiel](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die Eigenschaft [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover) kann verwendet werden, um das Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich zur Featureerkennung. Beispiel:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut, wodurch Sie die Steuerknöpfe für ein Popover einrichten können, obwohl der Eigenschaftswert eine Referenz auf das zu steuernde Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), mit dem Sie die von einem Steuerknopf ausgeführte Aktion angeben können.

Durch das Zusammenführen dieser drei können Sie ein Popover und seinen Steuerknopf programmatisch einrichten, wie folgt:

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

Sie haben auch mehrere Methoden zur Steuerung von Anzeigen und Ausblenden:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), um ein Popover auszublenden.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), um ein Popover umzuschalten.

Beispielsweise möchten Sie möglicherweise die Möglichkeit bieten, ein Hilfepopover durch Klicken eines Buttons oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert – eine, um das Popover zu öffnen, und eine, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmgesteuert zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse stimmt nur mit Popovers überein, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits ausgeblendetes Popover auszublenden.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover anzuzeigen _und_ auszublenden, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Umschalt-Hilfe-UI-Beispiel](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Feature-Erkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, nicht mehrere Auto-Popovers gleichzeitig anzuzeigen – wenn sie ineinander verschachtelt sind. In solchen Fällen ist es erlaubt, dass mehrere Popovers gleichzeitig geöffnet sind, da sie in Beziehung zueinander stehen. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachfahren:

   ```html
   <div popover>
     Parent
     <div popover>Child</div>
   </div>
   ```

2. Über Auslöse-/Steuerelemente:

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

Sehen Sie sich unser [Verschachteltes Popover-Menü Beispiel](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) für ein Beispiel an. Sie werden bemerken, dass recht viele Ereignishandler verwendet wurden, um das Unterpopover bei Maus- und Tastaturzugriff ordnungsgemäß anzuzeigen und auszublenden, und auch um beide Menüs auszublenden, wenn eine Option aus einem der beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte behandeln, sei es in einer SPA oder einer mehrseitigen Website, müssen einige oder alle dieser Schritte nicht unbedingt notwendig sein, aber sie wurden in diesem Demo aus illustrativen Gründen aufgenommen.

## Verwendung des "Hint"-Popover-Zustands

Es gibt einen dritten Popover-Typ, den Sie erstellen können — **Hint-Popovers**, indem Sie `popover="hint"` auf Ihr Popover-Element setzen. `hint`-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, sondern schließen andere `hint`-Popovers. Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

Dies ist nützlich für Situationen, in denen Sie beispielsweise Werkzeugleistenschaltflächen haben, die gedrückt werden können, um UI-Popovers anzuzeigen, aber auch Tooltips angezeigt werden sollen, wenn die Schaltflächen bewegt werden, ohne die UI-Popovers zu schließen.

`hint`-Popovers werden normalerweise in Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) ein- und ausgeblendet. Das Klicken einer Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein offenes `auto`-Popover leicht verwerfen.

Sehen Sie sich unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) für ein Beispiel an, das genau wie oben beschrieben funktioniert. Das Demo zeigt eine Schaltflächenleiste; beim Drücken zeigen die Schaltflächen `auto`-Popup-Untermenüs an, in denen weitere Optionen ausgewählt werden können. Wenn sie jedoch überfährt oder fokussiert werden, zeigen die Schaltflächen auch Tooltips (`hint`-Popovers) an, um dem Benutzer eine Vorstellung davon zu geben, was jede Schaltfläche bewirkt, ohne ein derzeit angezeigtes Untermenü auszublenden.

In den folgenden Abschnitten werden wir alle wichtigen Teile des Codes durchgehen.

> [!NOTE]
> Sie _können_ `hint`-Popovers zusammen mit `manual`-Popovers verwenden, auch wenn es dafür nicht wirklich viel Grund gibt. Sie sind so konzipiert, dass sie einige der Einschränkungen von `auto`-Popovers umgehen und Anwendungsfälle wie den in diesem Abschnitt beschriebenen ermöglichen.
>
> Beachten Sie auch, dass `popover="hint"` in nicht unterstützten Browsern auf `popover="manual"` zurückfällt.

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

Die Untermenü-Popovers funktionieren gut, wenn sie sich öffnen, wenn die Werkzeugleistenschaltflächen gedrückt werden, aber wie zeigen wir auch Tooltips beim Überfahren/Fokussieren der Schaltflächen an? Zuerst erstellen wir die Tooltips in HTML, indem wir `hint`-Popovers verwenden:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

Um das Ein-/Ausblenden zu steuern, müssen wir JavaScript verwenden. Zuerst einmal holen wir Referenzen zu den `hint`-Popovers und den Steuerknöpfen in zwei separaten [`NodeList`](/de/docs/Web/API/NodeList)s mithilfe von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll):

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Als nächstes erstellen wir eine Funktion, `addEventListeners()`, die vier Ereignislistener (über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) auf einen gegebenen {{htmlelement("button")}} setzt, der ausgewählt wird, indem der `<button>` an einem bestimmten Indexwert der `btns`-`NodeList` ausgewählt wird. Die Funktionen wirken auf das `hint`-Popover am selben Indexwert der `tooltips`-`NodeList`, sodass wir die Schaltflächen und die Tooltips synchron halten können — das richtige Tooltip wird angezeigt/ausgeblendet, wenn eine Schaltfläche interagiert wird.

Die Ereignislistener [zeigen](/de/docs/Web/API/HTMLElement/showPopover) das Popover beim [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`focus`](/de/docs/Web/API/Element/focus_event) und [verbergen](/de/docs/Web/API/HTMLElement/hidePopover) das Popover beim [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`blur`](/de/docs/Web/API/Element/blur_event), was bedeutet, dass die Tooltips sowohl über Maus als auch Tastatur zugänglich sind.

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

Schließlich verwenden wir eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, um durch die `<buttons>` in der `btns`-`NodeList` zu iterieren und die `addEventListeners()`-Funktion für jeden aufzurufen, sodass alle die gewünschten Ereignislistener gesetzt bekommen.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Styling von Popovers

Dieser Abschnitt behandelt einige relevante CSS-Auswahl- und Positionierungstechniken für Popovers.

### Popovers auswählen

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

### Styling des Popover-Hintergrunds

Das {{cssxref("::backdrop")}}-Pseudo-Element ist ein vollbildfüllendes Element, das direkt hinter den angezeigten Popover-Elementen in der {{Glossary("top_layer", "obersten Ebene")}} platziert wird, sodass Effekte zu den Seiteninhalten hinter dem Popover(s) hinzugefügt werden können, wenn gewünscht. Sie könnten beispielsweise die Inhalte hinter dem Popover verwischen, um den Fokus des Benutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Popover-Hintergrundunschärfe Beispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies rendert.

### Positionierung von Popovers

Wenn Sie sich die ersten beiden Beispiele angesehen haben, die zu Beginn des Artikels verlinkt sind, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Ansichtsfensters erscheinen, ihren Inhalt umhüllen und einen schwarzen Rand haben. Dies ist das Standard-Design, das durch die folgende Regel im UA-Stilblatt erreicht wird:

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

Um benutzerdefinierte Größenanpassungen anzuwenden und das Popover an einer anderen Stelle zu positionieren, könnten Sie die oben genannten Stile mit etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel dafür in unserem [Popover-Positionierungsbeispiel](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

### Popover-Anker-Positionierung

Es gibt eine weitere nützliche Positionierungsoption, die die Popover-API bietet. Wenn Sie ein Popover relativ zu seinem Auslöser anstatt dem Ansichtsfenster oder einem positionierten Vorfahren positionieren möchten, können Sie den Vorteil nutzen, dass Popovers und ihre Auslöser eine **implizite Ankerreferenz** haben.

[Das Verknüpfen eines beliebigen Popovers mit seinem Auslöser](#andere_möglichkeiten,_eine_popover-auslöser-beziehung_einzurichten) erstellt eine implizite Ankerreferenz zwischen den beiden. Dies führt dazu, dass der Auslöser zum **Ankerelement** des Popovers wird, was bedeutet, dass Sie das Popover relativ dazu mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren können.

Da die Assoziation zwischen dem Popover und dem Auslöser implizit ist, muss keine explizite Assoziation mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften hergestellt werden. Sie müssen jedoch weiterhin das Positionierungs-CSS angeben.

Beispielsweise könnten Sie eine Kombination aus {{cssxref("anchor()")}}-Funktionswerten setzen, die auf {{Glossary("inset_properties", "Einfüge-Eigenschaften")}} angewendet werden, und `anchor-center`-Werte, die auf Ausrichtungseigenschaften gesetzt werden:

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

Siehe [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) für weitere Details zur Assoziation von Anker- und positionierten Elementen und zur Positionierung von Elementen relativ zu ihrem Anker.

> [!NOTE]
> Für ein Beispiel, das diese implizite Assoziation verwendet, sehen Sie unser [Popover-Hint-Demo](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([Source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Wenn Sie sich den CSS-Code ansehen, werden Sie feststellen, dass keine expliziten Ankerassoziationen mit den {{cssxref("anchor-name")}}- und {{cssxref("position-anchor")}}-Eigenschaften gemacht wurden.

## Animieren von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie versteckt sind, und `display: block;`, wenn sie angezeigt werden, sowie aus der {{Glossary("top_layer", "obersten Ebene")}} und dem [Zugänglichkeit-Baum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt oder hinzugefügt werden. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, damit der animierte Inhalt während der gesamten Animationsdauer angezeigt wird. Beispielsweise:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt sein, um obiges Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das obige Verhalten standardmäßig verfügbar; ein äquivalenter Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind folgende Merkmale erforderlich:

- {{CSSxRef("@starting-style")}} At-Regel
  - : Bietet einen Satz von Startwerten für Eigenschaften, die auf dem Popover gesetzt sind und von denen Sie beim ersten Anzeigen aus übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei einer ersten Stilaktualisierung eines Elements ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- {{CSSxRef("display")}} Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während der Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}} Eigenschaft
  - : Einschluss von `overlay` in die Übergangsliste, um sicherzustellen, dass die Entfernung des Popovers von der obersten Ebene erst nach Abschluss des Übergangs erfolgt, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf den {{cssxref("transition")}}-Kurzschreibweise), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Lassen Sie uns ein Beispiel ansehen, damit Sie sehen können, wie dies aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}, das durch das globale [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Attribut als Popover deklariert und ein {{htmlelement("button")}}, das als Popover-Anzeigesteuerung festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausgeblendet wird, während es horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Startzustand für diese Eigenschaften im versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Animationsdauer zu definieren, während das Popover gezeigt oder versteckt wird.

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

- Einen Startzustand für den `transition` innerhalb des `@starting-style`-Blocks gesetzt.
- `display` zur Liste der übergangenen Eigenschaften hinzugefügt, damit das animierte Element während der Ein- und Ausblendanimationen des Popovers sichtbar (auf `display: block` gesetzt) bleibt. Ohne dies wäre die Ausblendanimation nicht sichtbar; faktisch würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergangenen Eigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements von der obersten Ebene erst nach Abschluss der Animation erfolgt. Der Effekt hiervon mag bei einfachen Animationen wie dieser nicht bemerkbar sein, aber in komplexeren Fällen kann die Auslassung dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beide Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Außerdem haben wir einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) hinter dem Popover definiert, der beim Öffnen des Popovers erscheint und eine schöne Verdunklungsanimation bereitstellt.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand in den Standard-`[popover]`-Zustand.
>
> In solchen Fällen ist es möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis dafür.

### Eine Popover-Schlüsselbildanimation

Beim Animieren eines Popovers mit CSS-Schlüsselbildanimationen sind einige Unterschiede zu beachten:

- Sie geben keine `@starting-style` an; Sie schließen Ihre "to"- und "from"-`display`-Werte in Schlüsselbildern ein.
- Sie aktivieren keine diskreten Animationen explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` auch nicht in Schlüsselbildern setzen; die `display`-Animation behandelt die Animation des Popovers von sichtbar zu verborgen.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}, das als Popover deklariert ist, und ein {{htmlelement("button")}}, das als Popover-Anzeigesteuerung festgelegt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschten Ein- und Ausblendanimationen sowie eine Eingangsanimation nur für den Hintergrund spezifizieren. Beachten Sie, dass es nicht möglich war, den Hintergrundeinblendung-Effekt aus-zu-faden, da der Hintergrund unmittelbar aus dem DOM entfernt wird, wenn das Popover geschlossen wird, sodass es nichts zu animierten gibt.

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

Der Code rendert wie folgt:

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}
