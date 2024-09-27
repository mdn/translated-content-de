---
title: Verwendung der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet einen detaillierten Leitfaden zur Verwendung all ihrer Funktionen.

## Erstellen von deklarativen Popovers

In seiner einfachsten Form wird ein Popover durch Hinzufügen des [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attributs zu dem Element erstellt, das den Popover-Inhalt enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerungen zu verknüpfen.

```html
<div id="mypopover" popover>Popover content</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert entspricht dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs bewirkt, dass das Element beim Laden der Seite verborgen wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover zu zeigen/verbergen, müssen Sie einige Steuerschaltflächen hinzufügen. Sie können eine {{htmlelement("button")}} (oder {{htmlelement("input")}} vom Typ `type="button"`) als Popover-Steuerschaltfläche festlegen, indem Sie ihr ein [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut zuweisen, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Das Standardverhalten besteht darin, dass die Schaltfläche eine Umschalt-Schaltfläche ist — durch wiederholtes Drücken wird das Popover zwischen Anzeige und Verbergen umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) Attribut verwenden — dies nimmt einen Wert von `"hide"`, `"show"`, oder `"toggle"` an. Um beispielsweise getrennte Anzeige- und Verbergen-Schaltflächen zu erstellen, könnten Sie dies tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

Sie können sehen, wie der vorherige Codeausschnitt in unserem [grundlegenden deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)) gerendert wird.

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einer Steuerschaltfläche ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die [Top-Layer](/de/docs/Glossary/top_layer) gebracht, damit es über allen anderen Seiteninhalten sitzt.

## Auto-Zustand und "leichter Verweis"

Wenn für ein Popover-Element `popover` oder `popover="auto"` gesetzt ist, wie oben gezeigt, heißt es, dass es sich im **Auto-Zustand** befindet. Die zwei wichtigen Verhaltensweisen zum Auto-Zustand sind:

- Das Popover kann "leicht verwiesen" werden — das bedeutet, dass Sie das Popover verbergen können, indem Sie außerhalb davon klicken.
- Das Popover kann auch mit browserspezifischen Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann immer nur ein Popover gleichzeitig angezeigt werden — wenn ein zweites Popover angezeigt wird, während ein anderes bereits angezeigt wird, wird das erste verborgen. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte automatische Popovers haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> **Note:** `popover="auto"` Popovers werden auch durch erfolgreiche Aufrufe von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) und [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf anderen Elementen im Dokument verworfen. Bedenken Sie jedoch, dass das Aufrufen dieser Methoden auf einem angezeigten Popover scheitern wird, da diese Aktionen auf einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Zustand ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere lehrreiche UI-Nachrichten, die Sie anzeigen möchten, aber nicht möchten, dass die Anzeige überladen und verwirrend wird, oder vielleicht zeigen Sie Statusnachrichten an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel für mehrere automatische Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach dem Anzeigen leicht zu verweisen, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Verwenden des manuellen Popover-Zustands

Die Alternative zum Auto-Zustand ist der **manuelle Zustand**, der erreicht wird, indem `popover="manual"` auf Ihrem Popover-Element gesetzt wird:

```html
<div id="mypopover" popover="manual">Popover content</div>
```

In diesem Zustand:

- Das Popover kann nicht "leicht verwiesen" werden, obwohl deklarative Anzeigen/Verbergen/Umschalt-Schaltflächen (wie zuvor gesehen) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel für mehrere manuelle Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch mit einer JavaScript-API steuern.

Die [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut abzurufen oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen und ist auch nützlich zur Feature-Erkennung. Zum Beispiel:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Ähnlich:

- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut, wodurch Sie die Steuerschaltflächen für ein Popover einrichten können, obwohl der Eigenschaftswert eine Referenz auf das steuernate DOM-Element ist.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction) bieten ein Äquivalent zum globalen HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction), wodurch Sie die von einer Steuerschaltfläche ausgeführte Aktion festlegen können.

Wenn Sie diese drei zusammentun, können Sie ein Popover und seine Steuerschaltfläche programmatisch einrichten, wie folgt:

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

Zum Beispiel, vielleicht möchten Sie die Möglichkeit bieten, ein Hilfe-Popover durch Klicken auf eine Schaltfläche oder Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Letzteres könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

Für das Zweite könnten Sie einen Ereignishandler erstellen, der zwei separate Tasten programmiert — eine, um das Popover zu öffnen, und eine, um es wieder zu schließen:

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

Dieses Beispiel verwendet [`Element.matches()`](/de/docs/Web/API/Element/matches), um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}} Pseudo-Klasse passt nur zu Popovers, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen oder ein bereits verstecktes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover gleichzeitig zu zeigen _und_ zu verbergen, wie dieses:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Toggle-hilfe UI Beispiel](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Feature-Erkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, keine mehreren automatischen Popovers gleichzeitig anzuzeigen — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers gleichzeitig geöffnet sein, aufgrund ihrer Beziehung zueinander. Diese Muster werden unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Wege, um verschachtelte Popovers zu erstellen:

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

Sehen Sie sich unser [Beispiel für verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an. Sie werden bemerken, dass einige Ereignishandler verwendet wurden, um das Subpopover während Maus- und Tastaturzugriff korrekt anzuzeigen und zu verbergen, und auch um beide Menüs zu verbergen, wenn eine Option von einem der beiden ausgewählt wird. Je nachdem, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer mehrseitigen Webseite, sind einige oder alle dieser möglicherweise nicht notwendig, aber sie wurden in diesem Demo zu Illustrationszwecken enthalten.

## Styling von Popovers

Die Popover-API verfügt über einige verwandte CSS-Features, die es wert sind, angeschaut zu werden.

In Bezug auf das Styling des eigentlichen Popovers können Sie alle Popovers mit einem einfachen Attribut-Selektor (`[popover]`) auswählen, oder Sie wählen Popovers aus, die mit einer neuen Pseudo-Klasse angezeigt werden — {{cssxref(":popover-open")}}.

Beim Betrachten der ersten paar Beispiele am Anfang des Artikels haben Sie vielleicht bemerkt, dass die Popovers in der Mitte des Ansichtsbereichs erscheinen. Dies ist das Standard-Styling, das so im UA-Stylesheet erreicht wird:

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

Um die Standardstile zu überschreiben und das Popover an einer anderen Stelle in Ihrem Ansichtsbereich erscheinen zu lassen, müssten Sie die oben genannten Stile mit etwas wie diesem überschreiben:

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

Das {{cssxref("::backdrop")}} Pseudo-Element ist ein Vollbild-Element, das direkt hinter den gezeigten Popover-Elementen im [Top-Layer](/de/docs/Glossary/top_layer) platziert wird, sodass Effekte hinzugefügt werden können, um die Seiteninhalte hinter dem(dem) Popover(s) zu verändern, falls gewünscht. Sie könnten beispielsweise den Inhalt hinter dem Popover verschwimmen lassen, um den Fokus des Benutzers darauf zu richten:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Popover-Verschwommenheits-Hintergrund-Beispiel](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies gerendert wird.

## Animieren von Popovers

Popovers sind auf `display: none;` gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie werden sie aus/zu dem [Top-Layer](/de/docs/Glossary/top_layer) und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt/hinzugefügt. Daher muss für die Animation von Popovers die {{cssxref("display")}} Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt, wird der Browser zwischen `none` und einem anderen Wert von `display` wechseln, damit der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. Zum Beispiel:

- Wenn `display` von `none` auf `block` (oder einen anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit es sichtbar bleibt.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) auf `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit es sichtbar bleibt.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist das oben beschriebene Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Eigenschaften erforderlich:

- {{CSSxRef("@starting-style")}}-Regel
  - : Bietet einen Satz von Startwerten für Eigenschaften, die auf das Popover gesetzt sind und für die ein Übergang erfolgen soll, wenn das Popover zum ersten Mal angezeigt wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn sich ein Wert für eine sichtbare Eigenschaft ändert; sie werden nicht ausgelöst bei der ersten Stiländerung eines Elements oder wenn der `display`-Typ von `none` auf einen anderen Typ wechselt.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das Popover während der gesamten Dauer der Animation als `display: block` (oder ein anderer sichtbarer `display`-Wert) verbleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Schließen Sie `overlay` in die Übergangsliste ein, um sicherzustellen, dass das Entfernen des Popovers aus der obersten Ebene bis zum Abschluss des Übergangs verzögert wird, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` für die `display`- und `overlay`-Übergänge (oder für die {{cssxref("transition")}}-Kurzüberschrift), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Werfen wir einen Blick auf ein Beispiel, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das mittels des globalen [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Attributs als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover während des Ein- oder Ausblendens horizontal wächst oder schrumpft. Um dies zu erreichen, setzen wir einen Startzustand für diese Eigenschaften auf den versteckten Zustand des Popover-Elements (ausgewählt mit dem `[popover]` [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudo-Klasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation bei Anzeige oder Verbergen des Popovers festzulegen.

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

Wie bereits besprochen, haben wir außerdem:

- Einen Startzustand für die `transition` innerhalb des `@starting-style`-Blocks festgelegt.
- `display` zur Liste der übergegangenen Eigenschaften hinzugefügt, sodass das animierte Element während des Eintritts- und Austrittsanimations als `display: block` sichtbar bleibt. Ohne dies wäre die Austrittsanimation nicht sichtbar; im Wesentlichen würde das Popover einfach verschwinden.
- `overlay` zur Liste der übergegangenen Eigenschaften hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus dem oberen Layer bis zum Abschluss der Animation verzögert wird. Der Effekt dieser Maßnahme ist möglicherweise nicht bei grundlegenden Animationen wie dieser bemerkbar, aber in komplexeren Fällen kann das Weglassen dieser Eigenschaft dazu führen, dass das Element vor dem Abschluss der Übergangsanimation aus dem Overlay entfernt wird.
- `allow-discrete` auf die oben genannten Eigenschaften in den Übergaängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden bemerken, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) enthalten haben, der hinter dem Popover erscheint, wenn es sich öffnet und eine schöne Abdunkelungsanimation bietet.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Übergang eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` auf `display: block` wechseln, wenn sie gezeigt werden, übergehen sie bei jedem Eintrittsübergang von ihren `@starting-style`-Stilen zu ihren `[popover]:popover-open`-Stilen. Wenn das Popover schließt, übergeht es von seinem `[popover]:popover-open`-Zustand in den Standard-`[popover]`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Ein- und Austritt unterscheidet. Siehe unser [Demonstration der Verwendung von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel als Beweis dafür.

### Eine Popover-Keyframe-Animation

Beim Animieren eines Popovers mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben kein `@starting-style` an; Sie setzen Ihre "zu" und "von" `display`-Werte in Keyframes ein.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` ebenfalls nicht innerhalb von Keyframes festlegen; die `display`-Animation steuert die Animation des Popovers vom Anzeigen bis Verbergen.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung für das Popover bestimmt ist:

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

Wir haben Keyframes definiert, die die gewünschten Eintritts- und Austrittsanimationen spezifizieren und eine Eintrittsanimation nur für das Backdrop. Beachten Sie, dass es nicht möglich war, das Backdrop auszublenden — das Backdrop wird unmittelbar aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass es nichts gibt, das animiert werden kann.

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

{{ EmbedLiveSample("Eine Popover-Keyframe-Animation", "100%", "200") }}
