---
title: Verwendung der Popover API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Darstellung von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Verwendung aller ihrer Funktionen.

## Erstellung von deklarativen Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das Ihre Popover-Inhalte enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungselementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Durch das Hinzufügen dieses Attributs wird das Element beim Laden der Seite ausgeblendet, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover anzuzeigen/zu verbergen, müssen Sie einige Steuerungsknöpfe hinzufügen. Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} vom `type="button"`) als Popover-Steuerungsknopf festlegen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass der Knopf ein Umschalter ist — durch wiederholtes Drücken des Knopfes wird das Popover zwischen Anzeige und Verbergen umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-Attribut verwenden — dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Zum Beispiel, um separate Anzeige- und Verbergen-Knöpfe zu erstellen, können Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Code-Schnipsel in unserem [Basisbeispiel für ein deklaratives Popover](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, wird `"toggle"` als Standardaktion von einem Steuerungsknopf ausgeführt.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die [oberste Ebene](/de/docs/Glossary/top_layer) eingefügt, sodass es über allen anderen Seiteninhalten liegt.

## auto-Zustand und "Light Dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt gesetzt ist, wird gesagt, dass es einen **auto-Zustand** hat. Die zwei wichtigen Verhaltensweisen im Zusammenhang mit dem auto-Zustand sind:

- Das Popover kann "light dismissed" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb davon ausblenden können.
- Das Popover kann auch über browserspezifische Mechanismen geschlossen werden, wie beispielsweise durch Drücken der <kbd>Esc</kbd>-Taste.
- Normalerweise kann nur ein Popover gleichzeitig angezeigt werden — wenn ein zweites Popover angezeigt wird, während bereits eines angezeigt wird, wird das erste ausgeblendet. Die Ausnahme von dieser Regel besteht, wenn Sie verschachtelte auto-Popovers haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> **Hinweis:** `popover="auto"`-Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument ausblendet. Beachten Sie jedoch, dass diese Methoden auf einem bereits angezeigten Popover fehlschlagen, da dieses Verhalten bei einem bereits angezeigten Popover keinen Sinn ergibt. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der auto-Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere UI-Nachrichten, die Sie anzeigen möchten, aber der Bildschirm soll nicht überfüllt und verwirrend werden, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status einen vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach deren Anzeige "light zu dismissen" und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Verwendung des manuellen Popover-Zustands

Die Alternative zum auto-Zustand ist der **manuelle Zustand**, erreicht durch das Setzen von `popover="manual"` auf Ihrem Popover-Element:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "light dismissed" werden, obwohl deklarative Anzeigen/Verbergen/Umschalten-Knöpfe (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) in Aktion sehen.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch über eine JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch nützlich zur Feature-Erkennung. Zum Beispiel:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Ebenso:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut und ermöglichen es Ihnen, die Steuerungsknöpfe für ein Popover einzurichten, obwohl der übergebene Wert eine Referenz zum zu steuernden Popover-DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) und ermöglichen es Ihnen, die von einem Steuerungsknopf auszuführende Aktion zu spezifizieren.

Durch das Zusammenfügen dieser drei Elemente können Sie ein Popover und dessen Steuerungsknopf programmatisch einrichten, so:

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

Sie haben auch mehrere Methoden zum Steuern des Anzeigen und Verbergens:

- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), um ein Popover anzuzeigen.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), um ein Popover zu verbergen.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), um ein Popover umzuschalten.

Zum Beispiel könnten Sie die Möglichkeit bieten, ein Hilfe-Popover durch Klicken auf einen Knopf oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden, oder Sie könnten es wie oben gezeigt mittels JavaScript tun.

Für das zweite könnten Sie ein Ereignishandler erstellen, der zwei separate Tasten programmiert — eine zum Öffnen des Popovers und eine zum erneuten Schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudo-Klasse matcht nur Popovers, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits verborgenes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover wie folgt ein- und auszublenden:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel zur Umschaltung der Hilfe-UI](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Funktionserkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, nicht mehrere auto-Popovers gleichzeitig anzuzeigen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

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

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an. Sie werden feststellen, dass ziemlich viele Ereignishandler verwendet wurden, um das Untermenu bei Maus- und Tastaturzugriff angemessen anzuzeigen und zu verbergen und auch um beide Menüs zu verbergen, wenn eine Option aus einem von beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder in einer mehrseitigen Website, müssen möglicherweise einige oder alle dieser Elemente nicht erforderlich sein, aber sie wurden in dieser Demo zu Illustrationszwecken aufgenommen.

## Styling von Popovers

Die Popover-API verfügt über einige verwandte CSS-Funktionen, die es wert sind, betrachtet zu werden.

Um das tatsächliche Popover zu stylen, können Sie alle Popovers mit einem einfachen Attributselektor (`[popover]`) auswählen oder Popovers, die angezeigt werden, mit einer neuen Pseudo-Klasse — {{cssxref(":popover-open")}}.

Beim Betrachten der ersten beiden Beispiele, die zu Beginn des Artikels verlinkt wurden, haben Sie möglicherweise bemerkt, dass die Popovers in der Mitte des Ansichtsfensters erscheinen. Dies ist das Standardstyling, das so im UA-Stylesheet erreicht wird:

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

Um die Standardstile zu überschreiben und das Popover an einer anderen Stelle in Ihrem Ansichtsfenster erscheinen zu lassen, müssten Sie die obigen Stile mit so etwas wie diesem überschreiben:

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

Sie können ein isoliertes Beispiel hierfür in unserem [Beispiel zur Positionierung eines Popovers](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

Das {{cssxref("::backdrop")}}-Pseudo-Element ist ein Vollbild-Element, das direkt hinter den angezeigten Popover-Elementen in der [obersten Ebene](/de/docs/Glossary/top_layer) platziert wird, was es ermöglicht, Effekte auf die Seitenelemente hinter dem Popover zu legen, wenn gewünscht. Sie könnten beispielsweise den Hintergrund hinter dem Popover unscharf stellen, um die Aufmerksamkeit des Nutzers darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel zur Unschärfe des Popover-Hintergrunds](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

## Animieren von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie verborgen sind, und auf `display: block;` wenn sie angezeigt werden, sowie sie aus der [obersten Ebene](/de/docs/Glossary/top_layer) und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt/ hinzugefügt werden. Daher muss für Popovers, die animiert werden sollen, die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt wird der Browser zwischen `none` und einem anderen `display`-Wert wechseln, sodass der animierte Inhalt die gesamte Animationsdauer über angezeigt wird. So zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er die gesamte Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit er die gesamte Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind folgende Funktionen erforderlich:

- {{CSSxRef("@starting-style")}}-Regel
  - : Bietet eine Reihe von Anfangswerten für Eigenschaften, die auf dem Popover gesetzt sind, von denen Sie beim ersten Anzeigen übergehen möchten. Dies ist notwendig, um unerwartete Verhaltensweisen zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn sich eine Eigenschaft auf einem sichtbaren Element von einem Wert zu einem anderen ändert; sie werden nicht beim ersten Stilupdate eines Elements oder wenn der `display`-Typ von `none` zu einem anderen Typ wechselt, ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft:
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das Popover während der gesamten Dauer des Übergangs im `display: block` (oder einem anderen sichtbaren `display`-Wert) bleibt und sich die übrigen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft:
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des Popovers von der obersten Ebene bis zum Abschluss des Übergangs aufgeschoben wird, damit der Übergang sichtbar bleibt.
- {{cssxref("transition-behavior")}}-Eigenschaft:
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge für diese beiden Eigenschaften zu aktivieren, die standardmäßig nicht animierbar sind.

Sehen wir uns ein Beispiel an, damit Sie sehen können, wie dies aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-HTML-Attribut als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung des Popovers markiert ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die zwei Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausblendet, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, setzen wir einen Ausgangszustand für diese Eigenschaften auf den verborgenen Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudo-Klasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation beim An- oder Ausschalten des Popovers zu definieren.

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

- Einen Ausgangszustand für die `transition` innerhalb des `@starting-style`-Blocks festgelegt.
- `display` zur Liste der Übergangseigenschaften hinzugefügt, damit das animierte Element während der Ein- und Ausblendanimationen des Popovers sichtbar ist (auf `display: block` gesetzt). Ohne dies wäre die Ausblendanimation nicht sichtbar; in Wirklichkeit würde das Popover einfach verschwinden.
- `overlay` zur Liste der Übergangseigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements von der obersten Ebene bis zum Abschluss der Animation aufgeschoben wird. Die Wirkung hiervon ist möglicherweise bei grundlegenden Animationen wie dieser nicht wahrnehmbar, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element aus dem Overlay entfernt wird, bevor der Übergang abgeschlossen ist.
- `allow-discrete` auf beide Eigenschaften in den Übergängen oben gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu aktivieren.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingefügt haben, der beim Öffnen des Popovers erscheint und eine schöne Abdunkelungsanimation bietet.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{EmbedLiveSample("Transitioning a popover", "100%", "200")}}

> [!NOTE]
> Da Popovers bei jedem Aufruf von `display: none` zu `display: block` wechseln, wechseln Popovers bei jedem Eintrittsübergang von ihrem `@starting-style`-Stil zu ihrem `[popover]:popover-open`-Stil. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Ausgang in solchen Fällen unterschiedlich ist. Sehen Sie sich unser [Beispiel zur Demonstration der Verwendung von Ausgangsstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) an, um den Beweis hierfür zu sehen.

### Eine Popover-Keyframe-Animation

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an; Sie fügen Ihre "zu" und "von" `display`-Werte in den Keyframes ein.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb der Keyframes.
- Sie müssen `overlay` nicht explizit innerhalb der Keyframes setzen; die `display`-Animation kümmert sich um die Animation des Popovers von angezeigt zu verborgen.

Sehen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerung des Popovers markiert ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Eintritts- und Austrittsanimationen sowie eine Eintrittsanimation nur für das Backdrop angeben. Beachten Sie, dass es nicht möglich war, das Verblassen des Backdrops zu animieren — das Backdrop wird unmittelbar aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass nichts zum Animieren vorhanden ist.

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

{{EmbedLiveSample("A popover keyframe animation", "100%", "200")}}
