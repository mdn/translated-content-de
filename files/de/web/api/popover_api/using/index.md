---
title: Verwenden der Popover-API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden. Dieser Artikel bietet eine detaillierte Anleitung zur Verwendung aller Funktionen.

## Erstellen deklarativer Popovers

In seiner einfachsten Form wird ein Popover erstellt, indem das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu dem Element hinzugefügt wird, das Ihre Popover-Inhalte enthalten soll. Eine `id` ist ebenfalls erforderlich, um das Popover mit seinen Steuerelementen zu verknüpfen.

```html
<div id="mypopover" popover>Popover-Inhalt</div>
```

> [!NOTE]
> Das Setzen des `popover`-Attributs ohne Wert ist gleichbedeutend mit dem Setzen von `popover="auto"`.

Das Hinzufügen dieses Attributs führt dazu, dass das Element beim Laden der Seite ausgeblendet wird, indem {{cssxref("display", "display: none")}} darauf gesetzt wird. Um das Popover zu zeigen/zu verbergen, müssen Sie einige Steuerungsknöpfe hinzufügen. Sie können einen {{htmlelement("button")}} (oder {{htmlelement("input")}} mit `type="button"`) als Popover-Steuerknopf einstellen, indem Sie ihm ein [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut geben, dessen Wert die ID des zu steuernden Popovers sein sollte:

```html
<button popovertarget="mypopover">Popover umschalten</button>
<div id="mypopover" popover>Popover-Inhalt</div>
```

Das Standardverhalten ist, dass der Knopf ein Umschaltknopf ist — durch wiederholtes Drücken wird das Popover zwischen angezeigt und verborgen umgeschaltet.

Wenn Sie dieses Verhalten ändern möchten, können Sie das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-Attribut verwenden — dies nimmt einen Wert von `"hide"`, `"show"` oder `"toggle"` an. Um beispielsweise separate Anzeigen- und Verbergen-Knöpfe zu erstellen, können Sie Folgendes tun:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Popover anzeigen
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Popover verbergen
</button>
<div id="mypopover" popover>Popover-Inhalt</div>
```

Sie können sehen, wie der vorherige Code-Schnipsel in unserem [Grundlegenden deklarativen Popover-Beispiel](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) gerendert wird ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)).

> [!NOTE]
> Wenn das `popovertargetaction`-Attribut weggelassen wird, ist `"toggle"` die Standardaktion, die von einem Steuerknopf ausgeführt wird.

Wenn ein Popover angezeigt wird, wird `display: none` davon entfernt und es wird in die {{glossary("Top-Schicht")}} gelegt, sodass es über allen anderen Seiteninhalten liegt.

## Auto-Status und "light dismiss"

Wenn ein Popover-Element mit `popover` oder `popover="auto"` wie oben gezeigt eingestellt ist, hat es den **Auto-Status**. Die beiden wichtigen Verhaltensweisen, die beim Auto-Status zu beachten sind, sind:

- Das Popover kann "light dismissed" werden — das bedeutet, dass Sie das Popover durch Klick außerhalb davon verbergen können.
- Das Popover kann auch mit browser-spezifischen Mechanismen wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.
- Normalerweise kann nur ein Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Siehe den Abschnitt [Verschachtelte Popovers](#verschachtelte_popovers) für weitere Details.

> **Hinweis:** `popover="auto"`-Popovers werden auch durch erfolgreiche {{domxref("HTMLDialogElement.showModal()")}}- und {{domxref("Element.requestFullscreen()")}}-Aufrufe auf anderen Elementen im Dokument verworfen. Allerdings bedenken Sie, dass das Aufrufen dieser Methoden auf einem angezeigten Popover zu einem Fehler führt, da diese Verhaltensweisen bei einem bereits angezeigten Popover keinen Sinn ergeben. Sie können sie jedoch auf einem Element mit dem `popover`-Attribut aufrufen, das derzeit nicht angezeigt wird.

Der Auto-Status ist nützlich, wenn Sie nur ein einziges Popover gleichzeitig anzeigen möchten. Vielleicht haben Sie mehrere Lehrinhaltsnachrichten, die Sie anzeigen möchten, aber nicht möchten, dass die Anzeige unübersichtlich und verwirrend wird, oder vielleicht zeigen Sie Statusmeldungen an, bei denen der neue Status jeden vorherigen Status überschreibt.

Sie können das oben beschriebene Verhalten in Aktion in unserem [Beispiel mit mehreren Auto-Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)) sehen. Versuchen Sie, die Popovers nach ihrer Anzeige mit "light dismiss" zu verbergen, und sehen Sie, was passiert, wenn Sie versuchen, beide gleichzeitig anzuzeigen.

## Verwendung des manuellen Popover-Status

Die Alternative zum Auto-Status ist der **manuelle Status**, der durch Einstellen von `popover="manual"` auf Ihrem Popover-Element erreicht wird:

```html
<div id="mypopover" popover="manual">Popover-Inhalt</div>
```

In diesem Zustand:

- Das Popover kann nicht "light dismissed" werden, obwohl deklarative Anzeigen-/Verbergen-/Umschaltknöpfe (wie zuvor gezeigt) weiterhin funktionieren.
- Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

Sie können dieses Verhalten in Aktion in unserem [Beispiel mit mehreren manuellen Popovers](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)) sehen.

## Anzeigen von Popovers über JavaScript

Sie können Popovers auch anhand einer JavaScript-API steuern.

Die {{domxref("HTMLElement.popover")}}-Eigenschaft kann verwendet werden, um das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut zu erhalten oder zu setzen. Dies kann verwendet werden, um ein Popover über JavaScript zu erstellen, und ist auch für die Feature-Erkennung nützlich. Zum Beispiel:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Ähnlich:

- {{domxref("HTMLButtonElement.popoverTargetElement")}} und {{domxref("HTMLInputElement.popoverTargetElement")}} bieten ein Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut, das Ihnen ermöglicht, die Steuerknöpfe für ein Popover einzurichten, obwohl der Eigenschaftswert eine Referenz auf das zu steuernde Popover-DOM-Element ist.
- {{domxref("HTMLButtonElement.popoverTargetAction")}} und {{domxref("HTMLInputElement.popoverTargetAction")}} bieten ein Äquivalent zum [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-globalen HTML-Attribut, mit dem Sie die Aktion festlegen können, die von einem Steuerknopf ausgeführt wird.

Indem Sie diese drei kombinieren, können Sie ein Popover und seinen Steuerknopf programmgesteuert einrichten, wie folgt:

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

Es gibt auch mehrere Methoden zur Steuerung des Ein- und Ausblendens:

- {{domxref("HTMLElement.showPopover()")}}, um ein Popover anzuzeigen.
- {{domxref("HTMLElement.hidePopover()")}}, um ein Popover auszublenden.
- {{domxref("HTMLElement.togglePopover()")}}, um ein Popover umzuschalten.

Beispielsweise könnten Sie die Möglichkeit bieten, ein Hilfe-Popover durch Klicken auf einen Knopf oder durch Drücken einer bestimmten Taste auf der Tastatur ein- und auszuschalten. Das erste könnte deklarativ erreicht werden, oder Sie könnten es mit JavaScript wie oben gezeigt tun.

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

Dieses Beispiel verwendet {{domxref("Element.matches()")}}, um programmatisch zu überprüfen, ob ein Popover derzeit angezeigt wird. Die {{cssxref(":popover-open")}}-Pseudoklasse passt nur auf Popovers, die derzeit angezeigt werden. Dies ist wichtig, um die Fehler zu vermeiden, die auftreten, wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen oder ein bereits ausgeblendetes Popover zu verbergen.

Alternativ könnten Sie eine einzelne Taste programmieren, um das Popover zu zeigen _und_ zu verbergen, wie folgt:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Sehen Sie sich unser [Beispiel zur Umschaltung der Hilfe-Benutzeroberfläche](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) an, um die Popover-JavaScript-Eigenschaften, die Funktionserkennung und die `togglePopover()`-Methode in Aktion zu sehen.

## Verschachtelte Popovers

Es gibt eine Ausnahme von der Regel, dass nicht mehrere Auto-Popovers auf einmal angezeigt werden — wenn sie ineinander verschachtelt sind. In solchen Fällen dürfen mehrere Popovers aufgrund ihrer Beziehung zueinander gleichzeitig geöffnet sein. Dieses Muster wird unterstützt, um Anwendungsfälle wie verschachtelte Popover-Menüs zu ermöglichen.

Es gibt drei verschiedene Möglichkeiten, verschachtelte Popovers zu erstellen:

1. Direkte DOM-Nachkommen:

   ```html
   <div popover>
     Eltern
     <div popover>Kindelement</div>
   </div>
   ```

2. Über aufrufende/Steuerelemente:

   ```html
   <div popover>
     Eltern
     <button popovertarget="foo">Klicken Sie mich</button>
   </div>

   <div popover id="foo">Kindelement</div>
   ```

3. Über das `anchor`-Attribut:

   ```html
   <div popover id="foo">Eltern</div>

   <div popover anchor="foo">Kindelement</div>
   ```

Sehen Sie sich unser [Beispiel für ein verschachteltes Popover-Menü](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) an. Sie werden feststellen, dass ziemlich viele Ereignishandler verwendet wurden, um das Subpopover während der Maus- und Tastaturzugriffe entsprechend anzuzeigen und zu verbergen, und auch um beide Menüs zu verbergen, wenn eine Option aus einem der beiden ausgewählt wird. Abhängig davon, wie Sie das Laden neuer Inhalte handhaben, entweder in einer SPA oder einer mehrseitigen Website, sind möglicherweise einige oder alle dieser Aktionen nicht notwendig, aber sie wurden zu diesem Zweck in diesem Beispiel zur Verdeutlichung einbezogen.

## Stilgestaltung von Popovers

Die Popover-API hat einige verwandte CSS-Funktionen, die es wert sind, betrachtet zu werden.

Im Hinblick auf die Gestaltung des eigentlichen Popovers können Sie alle Popovers mit einem einfachen Attributselektor (`[popover]`) auswählen, oder Sie wählen Popovers, die mit einer neuen Pseudoklasse angezeigt werden — {{cssxref(":popover-open")}}.

Beim Betrachten der ersten Beispiele, die zu Beginn des Artikels verlinkt sind, haben Sie vielleicht bemerkt, dass die Popovers in der Mitte der Anzeige erscheinen. Dies ist die Standardstilierung, die so im UA-Stylesheet erreicht wird:

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

Um die Standardstile zu überschreiben und das Popover an einer anderen Stelle auf Ihrer Anzeige erscheinen zu lassen, müssen Sie die obigen Stile mit etwas Ähnlichem überschreiben:

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

Sie können ein isoliertes Beispiel dafür in unserem [Beispiel zur Popover-Positionierung](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)) sehen.

Das {{cssxref("::backdrop")}}-Pseudoelement ist ein vollflächiges Element, das direkt hinter angezeigten Popover-Elementen in der {{glossary("Top-Schicht")}} platziert wird, sodass Effekte auf die Seiteninhalte hinter den Popovers hinzugefügt werden können, wenn gewünscht. Beispielsweise möchten Sie vielleicht den Inhalt hinter dem Popover verschwommen darstellen, um die Aufmerksamkeit der Benutzer darauf zu lenken:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Sehen Sie sich unser [Beispiel für verschwommene Popover-Hintergründe](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([Quelle](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) an, um eine Vorstellung davon zu bekommen, wie dies aussieht.

## Animieren von Popovers

Popovers sind auf `display: none;` eingestellt, wenn sie verborgen sind, und auf `display: block;` wenn sie angezeigt werden, und werden aus der {{glossary("Top-Schicht")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt oder hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit Popovers animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt wechselt der Browser zwischen `none` und einem anderen `display`-Wert, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird. So zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er während der gesamten Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) eingestellt werden, um obiges Verhalten zu ermöglichen. Beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist obiges Verhalten standardmäßig verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

### Übergang eines Popovers

Beim Animieren von Popovers mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{CSSxRef("@starting-style")}}-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die am Popover gesetzt sind, von denen Sie ausgehend beim ersten Anzeigen des Popovers übergehen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element wechselt; sie werden nicht bei der ersten Stilaktualisierung eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- {{CSSxRef("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergänge hinzu, sodass das Popover während der Übergangsdauer `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{CSSxRef("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Liste der Übergänge hinzu, um sicherzustellen, dass die Entfernung des Popovers aus der Top-Schicht bis zum Abschluss des Übergangs verzögert wird, und wieder sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf den {{cssxref("transition")}}-Shorthand), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht:

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das globale [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-HTML-Attribut als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Das Popover anzeigen</button>
<div popover="auto" id="mypopover">Ich bin ein Popover! Ich sollte animieren.</div>
```

#### CSS

Die beiden Popover-Eigenschaften, die wir übergehen möchten, sind [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform). Wir möchten, dass das Popover ein- oder ausblendet, während es sich horizontal vergrößert oder verkleinert. Um dies zu erreichen, legen wir einen Anfangszustand für diese Eigenschaften im verborgenen Zustand des Popover-Elements fest (ausgewählt mit dem `[popover]`- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors)) und einen Endzustand für den angezeigten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open)-Pseudoklasse). Wir verwenden auch die [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um die zu animierenden Eigenschaften und die Dauer der Animation zu definieren, wenn das Popover angezeigt oder verborgen wird.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

/* Übergang für das Popover selbst */

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* Endstatus der Austrittsanimation */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

/* Muss nach der vorherigen Regel [popover]:popover-open stehen,
um wirksam zu sein, da die Spezifität gleich ist */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Übergang für das Popover-Hintergrund */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Der Verschachtelungsselektor (&) kann keine Pseudoelemente darstellen,
daher kann diese startende-Stil-Regel nicht verschachtelt werden */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

Wie bereits erwähnt, haben wir auch:

- Einen Anfangszustand für den `transition` innerhalb des `@starting-style`-Blocks festgelegt.
- `display` zur Liste der Übergangseigenschaften hinzugefügt, sodass das animierte Element während der Ein- und Austrittsanimationen des Popovers sichtbar (auf `display: block` gesetzt) bleibt. Ohne dieses würde die Austrittsanimation nicht sichtbar sein; das Popover würde sozusagen einfach verschwinden.
- `overlay` zur Liste der Übergangseigenschaften hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der Top-Schicht bis zum Abschluss der Animation verzögert wird. Der Effekt davon ist möglicherweise bei einfachen Animationen wie dieser nicht bemerkbar, aber in komplexeren Fällen kann das Auslassen dieser Eigenschaft dazu führen, dass das Element vor Abschluss der Übergangsphase aus dem Overlay entfernt wird.
- `allow-discrete` auf beiden Eigenschaften in den obigen Übergängen gesetzt, um [diskrete Übergänge](/de/docs/Web/CSS/CSS_animated_properties#discrete) zu ermöglichen.

Sie werden feststellen, dass wir auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) enthalten haben, der hinter dem Popover erscheint, wenn es sich öffnet, wodurch eine schöne Verdunkelungsanimation entsteht.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Übergang eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wechseln die Popovers von ihren `@starting-style`-Stilen zu ihren `[popover]:popover-open`-Stilen jedes Mal, wenn der Eintrittsübergang auftritt. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standardzustand `[popover]`.
>
> Es ist möglich, dass sich der Stilübergang beim Ein- und Austritt in solchen Fällen unterscheidet. Sehen Sie sich unser [Beispiel für den Nachweis der Zeitpunkte, zu denen Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) an, um dies zu beweisen.

### Eine Popover-Schlüsselbild-Animation

Beim Animieren eines Popovers mit CSS-Schlüsselbild-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben kein `@starting-style` an; Sie fügen Ihre "to"- und "from"-`display`-Werte in Schlüsselbildern ein.
- Sie aktivieren diskrete Animationen nicht explizit; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` in Schlüsselbildern nicht explizit setzen; die `display`-Animation übernimmt die Animation des Popovers vom angezeigten zum verborgenen Zustand.

Schauen wir uns ein Beispiel an.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers festgelegt ist:

```html
<button popovertarget="mypopover">Das Popover anzeigen</button>
<div popover="auto" id="mypopover">Ich bin ein Popover! Ich sollte animieren.</div>
```

#### CSS

Wir haben Schlüsselbilder definiert, die die gewünschte Ein- und Austrittsanimation sowie eine Eintrittsanimation nur für das Hintergrundbild des Popovers festlegen. Beachten Sie, dass es nicht möglich war, das Verblassen des Hintergrundbildes zu animieren — das Hintergrundbild wird sofort aus dem DOM entfernt, wenn das Popover geschlossen wird, sodass es nichts zu animieren gibt.

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

/* Animation-Schlüsselbilder */

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
    /* Display benötigt in der Austrittsanimation, um das Popover
    bis zum Ende der Animation sichtbar zu halten */
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleX(0);
    /* Display: none nicht erforderlich hier, da es der Standardwert
    für ein geschlossenes Popover ist, aber eingeschlossen, um das
    Verhalten zu verdeutlichen */
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

{{ EmbedLiveSample("Eine Popover-Schlüsselbild-Animation", "100%", "200") }}
