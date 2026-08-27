---
title: Anleitung zum Erstellen benutzerdefinierter Formularelemente
short-title: Benutzerdefinierte Formularelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: ba3c8980510073ee92674aa71cb2c8c5b71294ab
---

Es gibt Fälle, in denen die verfügbaren nativen HTML-Formularelemente nicht ausreichen. Beispielsweise, wenn Sie [erweiterte Stylingoptionen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) bei bestimmten Elementen wie dem {{HTMLElement("select")}}-Element benötigen oder wenn Sie benutzerdefinierte Verhaltensweisen anbieten möchten. In solchen Fällen sollten Sie darüber nachdenken, eigene Steuerelemente zu erstellen.

In diesem Artikel werden wir besprechen, wie man ein benutzerdefiniertes Steuerelement erstellt. Dazu werden wir an einem Beispiel arbeiten: dem Neuaufbau des {{HTMLElement("select")}}-Elements. Wir werden auch diskutieren, wann und ob die Erstellung eines eigenen Steuerelements sinnvoll ist und was zu beachten ist, wenn der Aufbau eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns darauf, das Steuerelement zu erstellen, nicht darauf, wie man den Code generisch und wiederverwendbar macht; das würde einiges an nicht triviale JavaScript-Codes und DOM-Manipulation in einem unbekannten Kontext erfordern, und das ist außerhalb des Umfangs dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie sich genau überlegen, was Sie wollen. Dies spart Ihnen wertvolle Zeit. Es ist besonders wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Um dies zu tun, ist es gut, mit einem bestehenden Steuerelement zu beginnen, dessen Zustände und Verhalten gut bekannt sind, damit Sie diese so weit wie möglich nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element nachbauen. Hier ist das Ergebnis, das wir erreichen wollen:

![Die drei Zustände eines Auswahlfeldes](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

Was das Verhalten betrifft, so rekonstruieren wir ein natives HTML-Element. Daher sollte es die gleichen Verhaltensweisen und Semantiken wie das native HTML-Element haben. Unser Steuerelement muss mit der Maus sowie mit der Tastatur verwendbar sein und für einen Screenreader verständlich, genau wie jedes native Steuerelement. Lassen Sie uns damit beginnen, zu definieren, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im Normalzustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Nutzer irgendwo außerhalb davon klickt.
- das Steuerelement aktiv war und der Nutzer den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt (z. B. mit der <kbd>Tab</kbd>-Taste).

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Nutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Nutzer die Tabulatortaste drückt und es den Fokus erhält.
- das Steuerelement im offenen Zustand war und der Nutzer darauf klickt.

**Das Steuerelement befindet sich im offenen Zustand, wenn:**

- das Steuerelement in einem anderen Zustand als geöffnet ist und der Nutzer darauf klickt.

Sobald wir wissen, wie Zustände gewechselt werden, ist es wichtig zu definieren, wie der Wert des Steuerelements geändert wird:

**Der Wert ändert sich, wenn:**

- der Nutzer auf eine Option klickt, wenn das Steuerelement im geöffneten Zustand ist.
- der Nutzer die Pfeil-hoch oder Pfeil-runter-Tasten drückt, wenn das Steuerelement im aktiven Zustand ist.

**Der Wert ändert sich nicht, wenn:**

- der Nutzer die Pfeil-hoch-Taste drückt, wenn die erste Option ausgewählt ist.
- der Nutzer die Pfeil-runter-Taste drückt, wenn die letzte Option ausgewählt ist.

Lassen Sie uns schließlich definieren, wie die Optionen des Steuerelements sich verhalten werden:

- Wenn das Steuerelement geöffnet ist, wird die ausgewählte Option hervorgehoben
- Wenn die Maus über eine Option schwebt, wird die Option hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren Normalzustand zurück

Für die Zwecke unseres Beispiels hören wir hier auf; wenn Sie jedoch aufmerksam sind, werden Sie bemerken, dass einige Verhaltensweisen fehlen. Zum Beispiel, was glauben Sie, wird passieren, wenn der Benutzer die Tabulatortaste drückt, während das Steuerelement im geöffneten Zustand ist? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich, aber die Tatsache ist, weil es nicht in unseren Spezifikationen definiert ist, ist es sehr einfach, dieses Verhalten zu übersehen. Dies ist besonders im Teamumfeld zutreffend, wenn die Personen, die das Verhalten des Steuerelements entwerfen, andere sind als diejenigen, die es implementieren.

Ein weiteres interessantes Beispiel: Was wird passieren, wenn der Nutzer die Pfeil-hoch- oder Pfeil-runter-Tasten drückt, während das Steuerelement im geöffneten Zustand ist? Dies ist ein bisschen kniffliger. Wenn Sie davon ausgehen, dass der aktive Zustand und der offene Zustand völlig verschieden sind, ist die Antwort wieder "nichts wird passieren", weil wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie davon ausgehen, dass der aktive Zustand und der offene Zustand sich ein wenig überschneiden, könnte sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, wieder, weil wir keine Tastaturinteraktionen bezüglich der Optionen definiert haben, wenn das Steuerelement geöffnet ist (wir haben nur definiert, was passieren sollte, wenn das Steuerelement geöffnet wird, aber nichts danach).

Wir müssen ein wenig weiterdenken: was ist mit der Escape-Taste? Durch Drücken der <kbd>Esc</kbd>-Taste wird ein geöffnetes Auswahlfeld geschlossen. Denken Sie daran, wenn Sie dieselbe Funktionalität wie das bestehende native {{htmlelement('select')}} bieten möchten, sollte es sich in allen Aspekten ebenso verhalten wie das Auswahlfeld für alle Benutzer, von der Tastatur über die Maus bis hin zum Touchscreen und Screenreader und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie behandeln, aber es kann ein echtes Problem für exotische neue Steuerelemente sein. Wenn es um standardisierte Elemente wie das {{htmlelement('select')}} geht, haben die Spezifikationsautoren enorm viel Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall für jedes Eingabegerät zu spezifizieren. Das Erstellen neuer Steuerelemente ist nicht so einfach, insbesondere wenn Sie etwas erstellen, das noch nie zuvor gemacht wurde, und daher niemand eine Ahnung hat, was die erwarteten Verhaltensweisen und Interaktionen sind. Zumindest wurde das Auswahlfeld schon vorher erstellt, sodass wir wissen, wie es sich verhalten sollte!

Das Entwerfen neuer Interaktionen ist im Allgemeinen nur eine Option für sehr große Branchenakteure, die genug Reichweite haben, dass eine von ihnen geschaffene Interaktion zu einem Standard werden kann. Beispielsweise führte Apple das Scrollrad mit dem iPod im Jahr 2001 ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät einzuführen, etwas, was die meisten Geräteunternehmen nicht tun können.

Es ist besser, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es unerlässlich, Zeit in der Entwurfsphase zu verbringen; wenn Sie ein Verhalten schlecht definieren oder vergessen, eines zu definieren, wird es sehr schwierig sein, es neu zu definieren, sobald die Benutzer daran gewöhnt sind. Wenn Sie Zweifel haben, fragen Sie nach den Meinungen anderer, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess nennt sich UX-Design. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie die folgenden hilfreichen Ressourcen überprüfen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich auf SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Außerdem gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Optionen anzuzeigen (dies entspricht einem Mausklick auf das {{HTMLElement("select")}}-Element). Dies wird unter Windows mit <kbd>Alt</kbd> + <kbd>Pfeil runter</kbd> erreicht. Wir haben dies in unserem Beispiel nicht implementiert, aber es wäre einfach zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einiger) Semantiken

Jetzt, da die Grundfunktionen des Steuerelements festgelegt sind, ist es an der Zeit, mit dem Bau zu beginnen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm einige grundlegende Semantiken zu geben. Hier ist, was wir benötigen, um ein {{HTMLElement("select")}}-Element neu zu erstellen:

```html
<!-- This is our main container for our control.
     The tabindex attribute is what allows the user to focus on the control.
     We'll see later that it's better to set it through JavaScript. -->
<div class="select" tabindex="0">
  <!-- This container will be used to display the current value of the control -->
  <span class="value">Cherry</span>

  <!-- This container will contain all the options available for our control.
       Because it's a list, it makes sense to use the ul element. -->
  <ul class="optList">
    <!-- Each option only contains the value to be displayed, we'll see later
         how to handle the real value that will be sent with the form data -->
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten zugrunde liegenden HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine starre HTML-Struktur binden, damit wir später Änderungen an der Implementierung vornehmen können, ohne den Code zu brechen, der das Steuerelement verwendet. Was wäre zum Beispiel, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand "sieht" der Benutzer eines Screenreaders lediglich eine ungeordnete Liste. Wir werden später ARIA-Semantiken hinzufügen.

## Erstellen des Erscheinungsbilds mit CSS

Nun, da wir eine Struktur haben, können wir mit dem Design unseres Steuerelements beginnen. Der Sinn des Aufbaus dieses benutzerdefinierten Steuerelements besteht darin, es genau so gestalten zu können, wie wir es möchten. Dazu werden wir unsere CSS-Arbeiten in zwei Teile aufteilen: Der erste Teil wird die CSS-Regeln umfassen, die absolut notwendig sind, um unser Steuerelement so verhalten zu lassen wie ein {{HTMLElement("select")}}-Element, und der zweite Teil wird aus den hübschen Stilen bestehen, die wir verwenden, damit es so aussieht, wie wir es möchten.

### Erforderliche Stile

Die erforderlichen Stile sind diejenigen, die notwendig sind, um die drei Zustände unseres Steuerelements zu handhaben.

```css
.select {
  /* This will create a positioning context for the list of options;
     adding this to `.select:focus-within` will be a better option when fully supported
  */
  position: relative;

  /* This will make our control become part of the text flow and sizable at the same time */
  display: inline-block;
}
```

Wir benötigen eine zusätzliche Klasse `active`, um das Erscheinungsbild unseres Steuerelements zu definieren, wenn es sich im aktiven Zustand befindet. Da unser Steuerelement fokussierbar ist, verdoppeln wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudoklasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Nun kümmern wir uns um die Liste der Optionen:

```css
/* The .select selector here helps to make sure we only select
   element inside our control. */
.select .optList {
  /* This will make sure our list of options will be displayed below the value
     and out of the HTML flow */
  position: absolute;
  top: 100%;
  left: 0;
}
```

Wir benötigen eine zusätzliche Klasse, um zu verfolgen, wann die Optionsliste ausgeblendet ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven und dem offenen Zustand zu verwalten, die nicht exakt übereinstimmen.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way;
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir hätten auch `transform: scale(1, 0)` verwenden können, um der Optionsliste keine Höhe und volle Breite zu geben.

### Verschönerung

Da wir nun die Grundfunktionen implementiert haben, kann der Spaß beginnen. Das folgende Beispiel ist nur ein Beispiel dafür, was möglich ist, und wird dem Screenshot am Anfang dieses Artikels entsprechen. Sie sollten jedoch gerne experimentieren und sehen, was Sie sich einfallen lassen können.

```css
.select {
  /* The computations are made assuming 1em equals 16px which is the default value in most browsers.
     If you are lost with px to em conversion, try https://nekocalc.com/px-to-em-converter */
  font-size: 0.625em; /* this (10px) is the new font size context for em value in this context */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  /* We need extra room for the down arrow we will add */
  padding: 0.1em 2.5em 0.2em 0.5em;
  width: 10em; /* 100px */

  border: 0.2em solid black;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* Because the value can be wider than our control, we have to make sure it will not
     change the control's width. If the content overflows, we display an ellipsis */
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
```

Wir benötigen kein zusätzliches Element, um den Pfeil nach unten zu gestalten; stattdessen verwenden wir das {{cssxref("::after")}}-Pseudo-Element. Es könnte auch mit einem einfachen Hintergrundbild auf der `select`-Klasse implementiert werden.

```css
.select::after {
  content: "▼"; /* We use the unicode character U+25BC; make sure to set a charset meta tag */
  position: absolute;
  z-index: 1; /* This will be important to keep the arrow from overlapping the list of options */
  top: 0;
  right: 0;

  box-sizing: border-box;

  height: 100%;
  width: 2em;
  padding-top: 0.1em;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
  text-align: center;
}
```

Als Nächstes gestalten wir die Liste der Optionen:

```css
.select .optList {
  z-index: 2; /* We explicitly said the list of options will always be on top of the down arrow */

  /* this will reset the default style of the ul element */
  list-style: none;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  /* If the values are smaller than the control, the list of options
     will be as wide as the control itself */
  min-width: 100%;

  /* In case the list is too long, its content will overflow vertically
     (which will add a vertical scrollbar automatically) but never horizontally
     (because we haven't set a width, the list will adjust its width automatically.
     If it can't, the content will be truncated) */
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);
  background: #f0f0f0;
}
```

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert identifizieren zu können, den der Nutzer auswählen wird (oder ausgewählt hat).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

Hier ist das Ergebnis mit unseren drei Zuständen ([sehen Sie sich den Quellcode hier an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

#### Grundzustand

```html hidden
<div class="select">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

{{EmbedLiveSample("Basic_state",120,130)}}

#### Aktiver Zustand

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

{{EmbedLiveSample("Active_state",120,130)}}

#### Geöffneter Zustand

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList">
    <li class="option highlight">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

{{EmbedLiveSample("Open_state",120,130)}}

## Den Steuerelement mit JavaScript zum Leben erwecken

Da unser Design und unsere Struktur fertig sind, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich funktionsfähig zu machen.

> [!WARNING]
> Der folgende Code ist ein Lernbeispiel, kein Produktionscode, und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher noch wird er auf älteren Browsern funktionieren. Er hat auch redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig sich zu erinnern, **JavaScript im Browser ist eine unverlässliche Technologie**. Benutzerdefinierte Steuerelemente verlassen sich auf JavaScript, um alles miteinander zu verbinden. Es gibt jedoch Fälle, in denen JavaScript nicht im Browser ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Dies ist ungewöhnlich; heutzutage deaktivieren nur sehr wenige Menschen JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, in der das Netzwerk nicht sehr zuverlässig ist.
- Das Skript hat Fehler: Sie sollten immer diese Möglichkeit in Betracht ziehen.
- Das Skript ist mit einem Drittanbieterskript in Konflikt: Dies kann mit Tracking-Skripten oder mit Lesezeichen-Skripten passieren, die der Benutzer verwendet.
- Das Skript ist mit einer Browsererweiterung in Konflikt (beispielsweise mit der Firefox-Erweiterung [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) oder der Chrome-Erweiterung [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba)).
- Der Benutzer verwendet einen älteren Browser, und eine der von Ihnen benötigten Funktionen wird nicht unterstützt: Dies wird häufig vorkommen, wenn Sie modernste APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, analysiert und ausgeführt wurde.

Aufgrund dieser Risiken ist es sehr wichtig, ernsthaft zu überlegen, was passieren wird, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen in Betracht ziehen und die Grundlagen in unserem Beispiel behandeln (eine vollständige Diskussion zur Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie daran, es ist wichtig, Ihr Skript generisch und wiederverwendbar zu gestalten.

In unserem Beispiel, wenn unser JavaScript-Code nicht ausgeführt wird, werden wir auf die Anzeige eines Standard-{{HTMLElement("select")}}-Elements zurückgreifen. Wir schließen unser Steuerelement und das {{HTMLElement("select")}} ein; welches angezeigt wird, hängt von der Klasse des Body-Elements ab, wobei die Klasse des Body-Elements durch das Skript aktualisiert wird, das das Steuerelement bei erfolgreichem Laden funktionsfähig macht.

Um dies zu erreichen, benötigen wir zwei Dinge:

Erstens müssen wir ein reguläres {{HTMLElement("select")}}-Element vor jedem Instanz unseres benutzerdefinierten Steuerelements hinzufügen. Es gibt einen Vorteil, diesen "extra" select zu haben, auch wenn unser JavaScript wie erhofft funktioniert: Wir werden diesen select verwenden, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit den restlichen Formulardaten zu senden. Wir werden dies später ausführlicher diskutieren.

```html
<body class="no-widget">
  <form>
    <select name="myFruit">
      <option>Cherry</option>
      <option>Lemon</option>
      <option>Banana</option>
      <option>Strawberry</option>
      <option>Apple</option>
    </select>

    <div class="select">
      <span class="value">Cherry</span>
      <ul class="optList hidden">
        <li class="option">Cherry</li>
        <li class="option">Lemon</li>
        <li class="option">Banana</li>
        <li class="option">Strawberry</li>
        <li class="option">Apple</li>
      </ul>
    </div>
  </form>
</body>
```

Zweitens benötigen wir zwei neue Klassen, um das überflüssige Element auszublenden: Wir blenden das benutzerdefinierte Steuerelement aus, wenn unser Skript nicht ausgeführt wird, oder das "echte" {{HTMLElement("select")}}-Element, wenn es ausgeführt wird. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement ausblendet.

```css
.widget select,
.no-widget .select {
  /* This CSS selector basically says:
     - either we have set the body class to "widget" and thus we hide the actual <select> element
     - or we have not changed the body class, therefore the body class is still "no-widget",
       so the elements whose class is "select" must be hidden */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

Dieses CSS blendet eines der Elemente visuell aus, es ist jedoch weiterhin für Screenreader verfügbar.

Jetzt benötigen wir einen JavaScript-Schalter, um zu bestimmen, ob das Skript ausgeführt wird oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn zu Ladezeiten unserer Seite unser Skript ausgeführt wird, entfernt es die `no-widget`-Klasse und fügt die `widget`-Klasse hinzu, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements getauscht wird.

```js
document.body.classList.remove("no-widget");
document.body.classList.add("widget");
```

#### Ohne JS

Siehe den [volständigen Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#no_js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

{{EmbedLiveSample("Without_JS",120,130)}}

#### Mit JS

Siehe den [volständigen Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

```js hidden
const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");
```

{{EmbedLiveSample("With_JS",120,130)}}

> [!NOTE]
> Wenn Sie Ihren Code wirklich generisch und wiederverwendbar machen möchten, ist es weit besser, anstelle eines Klassenswitches nur die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente auszublenden und den DOM-Baum, der das benutzerdefinierte Steuerelement darstellt, nach jedem {{HTMLElement("select")}}-Element auf der Seite dynamisch hinzuzufügen.

### Den Job erleichtern

In dem Code, den wir gleich aufbauen werden, verwenden wir die Standard-JavaScript- und DOM-APIs, um alle erforderlichen Arbeiten durchzuführen. Die Funktionen, die wir verwenden möchten, sind die folgenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Aufbau von Event-Callbacks

Die Vorarbeit ist erledigt. Jetzt können wir alle Funktionen definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Steuerelement interagiert.

```js
// This function will be used each time we want to deactivate a custom control
// It takes one parameter
// select : the DOM node with the `select` class to deactivate
function deactivateSelect(select) {
  // If the control is not active there is nothing to do
  if (!select.classList.contains("active")) return;

  // We need to get the list of options for the custom control
  const optList = select.querySelector(".optList");

  // We close the list of option
  optList.classList.add("hidden");

  // and we deactivate the custom control itself
  select.classList.remove("active");
}

// This function will be used each time the user wants to activate the control
// (which, in turn, will deactivate other select controls)
// It takes two parameters:
// select : the DOM node with the `select` class to activate
// selectList : the list of all the DOM nodes with the `select` class
function activeSelect(select, selectList) {
  // If the control is already active there is nothing to do
  if (select.classList.contains("active")) return;

  // We have to turn off the active state on all custom controls
  // Because the deactivateSelect function fulfills all the requirements of the
  // forEach callback function, we use it directly without using an intermediate
  // anonymous function.
  selectList.forEach(deactivateSelect);

  // And we turn on the active state for this specific control
  select.classList.add("active");
}

// This function will be used each time the user wants to open/closed the list of options
// It takes one parameter:
// select : the DOM node with the list to toggle
function toggleOptList(select) {
  // The list is kept from the control
  const optList = select.querySelector(".optList");

  // We change the class of the list to show/hide it
  optList.classList.toggle("hidden");
}

// This function will be used each time we need to highlight an option
// It takes two parameters:
// select : the DOM node with the `select` class containing the option to highlight
// option : the DOM node with the `option` class to highlight
function highlightOption(select, option) {
  // We get the list of all option available for our custom select element
  const optionList = select.querySelectorAll(".option");

  // We remove the highlight from all options
  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  // We highlight the right option
  option.classList.add("highlight");
}
```

Sie benötigen diese, um die verschiedenen Zustände des benutzerdefinierten Steuerelements zu handhaben.

Als Nächstes binden wir diese Funktionen an die entsprechenden Ereignisse:

```js
const selectList = document.querySelectorAll(".select");

// Each custom control needs to be initialized
selectList.forEach((select) => {
  // as well as all its `option` elements
  const optionList = select.querySelectorAll(".option");

  // Each time a user hovers their mouse over an option, we highlight the given option
  optionList.forEach((option) => {
    option.addEventListener("mouseover", () => {
      // Note: the `select` and `option` variable are closures
      // available in the scope of our function call.
      highlightOption(select, option);
    });
  });

  // Each times the user clicks on or taps a custom select element
  select.addEventListener("click", (event) => {
    // Note: the `select` variable is a closure
    // available in the scope of our function call.

    // We toggle the visibility of the list of options
    toggleOptList(select);
  });

  // In case the control gains focus
  // The control gains the focus each time the user clicks on it or each time
  // they use the tabulation key to access the control
  select.addEventListener("focus", (event) => {
    // Note: the `select` and `selectList` variable are closures
    // available in the scope of our function call.

    // We activate the control
    activeSelect(select, selectList);
  });

  // In case the control loses focus
  select.addEventListener("blur", (event) => {
    // Note: the `select` variable is a closure
    // available in the scope of our function call.

    // We deactivate the control
    deactivateSelect(select);
  });

  // Lose focus if the user hits `esc`
  select.addEventListener("keyup", (event) => {
    // deactivate on keyup of `esc`
    if (event.key === "Escape") {
      deactivateSelect(select);
    }
  });
});
```

An diesem Punkt wird unser Steuerelement sich entsprechend unserem Design ändern, aber sein Wert wird noch nicht aktualisiert. Wir werden dies als Nächstes behandeln.

#### Live-Beispiel

Sehen Sie sich den [vollständigen Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_3).

```html hidden
<form class="no-widget">
  <select name="myFruit" tabindex="-1">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" tabindex="0">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");

const selectList = document.querySelectorAll(".select");

selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((option) => {
    option.addEventListener("mouseover", () => {
      highlightOption(select, option);
    });
  });

  select.addEventListener("click", (event) => {
    toggleOptList(select);
  });

  select.addEventListener("focus", (event) => {
    activeSelect(select, selectList);
  });

  select.addEventListener("blur", (event) => {
    deactivateSelect(select);
  });

  select.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      deactivateSelect(select);
    }
  });
});
```

{{EmbedLiveSample("Live_example",120,130)}}

### Behandlung des Werts des Steuerelements

Wenn unser Steuerelement nun funktioniert, müssen wir Code hinzufügen, um seinen Wert entsprechend der Benutzereingabe zu aktualisieren und um den Wert zusammen mit den Formulardaten senden zu können.

Der einfachste Weg, dies zu tun, ist, ein natives Steuerelement im Hintergrund zu verwenden. Ein solches Steuerelement wird den Wert mit allen vom Browser bereitgestellten integrierten Steuerelementen im Auge behalten, und der Wert wird wie gewohnt gesendet, wenn ein Formular übermittelt wird. Es gibt keinen Grund, das Rad neu zu erfinden, wenn wir dies alles für uns erledigen lassen können.

Wie bereits erwähnt, verwenden wir bereits ein natives select-Steuerelement als Fallback aus Barrierefreiheitsgründen; wir können seinen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

```js
// This function updates the displayed value and synchronizes it with the native control.
// It takes two parameters:
// select : the DOM node with the class `select` containing the value to update
// index  : the index of the value to be selected
function updateValue(select, index) {
  // We need to get the native control for the given custom control
  // In our example, that native control is a sibling of the custom control
  const nativeWidget = select.previousElementSibling;

  // We also need to get the value placeholder of our custom control
  const value = select.querySelector(".value");

  // And we need the whole list of options
  const optionList = select.querySelectorAll(".option");

  // We set the selected index to the index of our choice
  nativeWidget.selectedIndex = index;

  // We update the value placeholder accordingly
  value.textContent = optionList[index].textContent;

  // And we highlight the corresponding option of our custom control
  highlightOption(select, optionList[index]);
}

// This function returns the current selected index in the native control
// It takes one parameter:
// select : the DOM node with the class `select` related to the native control
function getIndex(select) {
  // We need to access the native control for the given custom control
  // In our example, that native control is a sibling of the custom control
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}
```

Mit diesen beiden Funktionen können wir die nativen Steuerelemente mit den benutzerdefinierten verknüpfen:

```js
const selectList = document.querySelectorAll(".select");

// Each custom control needs to be initialized
selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");
  const selectedIndex = getIndex(select);

  // We make our custom control focusable
  select.tabIndex = 0;

  // We make the native control no longer focusable
  select.previousElementSibling.tabIndex = -1;

  // We make sure that the default selected value is correctly displayed
  updateValue(select, selectedIndex);

  // Each time a user clicks on an option, we update the value accordingly
  optionList.forEach((option, index) => {
    option.addEventListener("click", (event) => {
      updateValue(select, index);
    });
  });

  // Each time a user uses their keyboard on a focused control, we update the value accordingly
  select.addEventListener("keyup", (event) => {
    let index = getIndex(select);
    // When the user hits the Escape key, deactivate the custom control
    if (event.key === "Escape") {
      deactivateSelect(select);
    }

    // When the user hits the down arrow, we jump to the next option
    if (event.key === "ArrowDown" && index < optionList.length - 1) {
      index++;
      // Prevent the default action of the ArrowDown key press.
      // Without this, the page would scroll down when the ArrowDown key is pressed.
      event.preventDefault();
    }

    // When the user hits the up arrow, we jump to the previous option
    if (event.key === "ArrowUp" && index > 0) {
      index--;
      // Prevent the default action of the ArrowUp key press.
      event.preventDefault();
    }
    if (event.key === "Enter" || event.key === " ") {
      // If Enter or Space is pressed, toggle the option list
      toggleOptList(select);
    }

    updateValue(select, index);
  });
});
```

Im obigen Code ist es erwähnenswert, die [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft zu verwenden. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Steuerelement niemals den Fokus erhält und um sicherzustellen, dass unser benutzerdefiniertes Steuerelement den Fokus bekommt, wenn der Benutzer seine Tastatur oder Maus benutzt.

Damit sind wir fertig!

#### Live-Beispiel

Sehen Sie sich den [Quellcode hier an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");

const selectList = document.querySelectorAll(".select");

selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((option) => {
    option.addEventListener("mouseover", () => {
      highlightOption(select, option);
    });
  });

  select.addEventListener("click", (event) => {
    toggleOptList(select);
  });

  select.addEventListener("focus", (event) => {
    activeSelect(select, selectList);
  });

  select.addEventListener("blur", (event) => {
    deactivateSelect(select);
  });
});

const selectList = document.querySelectorAll(".select");

selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");
  const selectedIndex = getIndex(select);

  select.tabIndex = 0;
  select.previousElementSibling.tabIndex = -1;

  updateValue(select, selectedIndex);

  optionList.forEach((option, index) => {
    option.addEventListener("click", (event) => {
      updateValue(select, index);
    });
  });

  select.addEventListener("keyup", (event) => {
    let index = getIndex(select);

    if (event.key === "Escape") {
      deactivateSelect(select);
    }
    if (event.key === "ArrowDown" && index < optionList.length - 1) {
      index++;
    }
    if (event.key === "ArrowUp" && index > 0) {
      index--;
    }

    updateValue(select, index);
  });
});
```

{{EmbedLiveSample("live_example_2",120,130)}}

Aber warten Sie eine Sekunde, sind wir wirklich fertig?

## Es zugänglich machen

Wir haben etwas gebaut, das funktioniert, und obwohl wir weit von einem voll ausgestatteten Auswahlfeld entfernt sind, funktioniert es gut. Aber was wir getan haben, ist nichts anderes als das Herumspielen mit dem DOM. Es hat keine echte Semantik, und obwohl es wie ein Auswahlfeld aussieht, ist es aus Sicht des Browsers keins, sodass Hilfstechnologien nicht verstehen können, dass es sich um ein Auswahlfeld handelt. Kurz gesagt, dieses hübsche neue Auswahlfeld ist nicht zugänglich!

Glücklicherweise gibt es eine Lösung, und diese heißt [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für "Accessible Rich Internet Application" und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die speziell für das, was wir hier tun, entwickelt wurde: Webanwendungen und benutzerdefinierte Steuerelemente zugänglich machen. Es ist im Grunde ein Satz von Attributen, die HTML erweitern, sodass wir Rollen, Zustände und Eigenschaften besser beschreiben können, als wäre das von uns entworfene Element das native Element, für das es sich ausgibt. Die Verwendung dieser Attribute kann durch Bearbeiten des HTML-Markups erfolgen. Wir aktualisieren auch die ARIA-Attribute über JavaScript, wenn der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut akzeptiert einen Wert, der angibt, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel werden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle verwenden. Es ist eine "zusammengesetzte Rolle", was bedeutet, dass Elemente mit dieser Rolle erwarten, Kinder zu haben, von denen jedes eine bestimmte Rolle hat (in diesem Fall mindestens ein Kind mit der `option`-Rolle).

Es ist auch erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf Standard-HTML-Markup angewendet werden. Beispielsweise passt das {{HTMLElement("table")}}-Element zur Rolle `grid`, und das {{HTMLElement("ul")}}-Element zur Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die `listbox`-Rolle unseres Steuerelements die `list`-Rolle des {{HTMLElement("ul")}}-Elements überschreibt. Dazu verwenden wir die Rolle `presentation`. Diese Rolle ist dafür vorgesehen, uns anzugeben, dass ein Element keine besondere Bedeutung hat und ausschließlich zur Präsentation von Informationen dient. Wir werden es auf unser {{HTMLElement("ul")}}-Element anwenden.

Um die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle zu unterstützen, müssen wir lediglich unser HTML wie folgt aktualisieren:

```html
<!-- We add the role="listbox" attribute to our top element -->
<div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- We also add the role="presentation" to the ul element -->
  <ul class="optList" role="presentation">
    <!-- And we add the role="option" attribute to all the li elements -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div>
```

> [!NOTE]
> Es ist nicht notwendig, sowohl das `role`-Attribut als auch ein `class`-Attribut einzuschließen. Anstelle der Verwendung von `.option` verwenden Sie die `[role="option"]` [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attributs ist nicht genug. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Status- und Eigenschaftsattribute. Je mehr und je besser Sie sie verwenden, desto besser wird Ihr Steuerelement von Hilfstechnologien verstanden. In unserem Fall beschränken wir uns auf ein Attribut: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu markieren, welche Option derzeit ausgewählt ist; dies ermöglicht es Hilfstechnologien, den Nutzer darüber zu informieren, was die aktuelle Auswahl ist. Wir werden es dynamisch mit JavaScript verwenden, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Dazu müssen wir unsere `updateValue()`-Funktion überarbeiten:

```js
function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll('[role="option"]');

  // We make sure that all the options are not selected
  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  // We make sure the chosen option is selected
  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;
  highlightOption(select, optionList[index]);
}
```

Es mag einfacher erschienen sein, einen Screenreader sich auf das außerhalb des Bildschirms befindliche Auswahlfeld konzentrieren zu lassen und unser gestaltetes zu ignorieren, aber dies ist keine barrierefreie Lösung. Screenreader sind nicht auf blinde Menschen beschränkt; Menschen mit Sehschwäche und sogar solche mit perfektem Sehvermögen verwenden sie ebenfalls. Aus diesem Grund können Sie nicht den Screenreader sich auf ein außerhalb des Bildschirms befindliches Element fokussieren lassen.

Nachfolgend das Endergebnis all dieser Änderungen (Sie bekommen ein besseres Gefühl dafür, indem Sie es mit einer Hilfstechnologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) ausprobieren).

#### Live-Beispiel

Sehen Sie sich den [vollständigen Quellcode hier an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" role="listbox">
    <span class="value">Cherry</span>
    <ul class="optList hidden" role="presentation">
      <li class="option" role="option" aria-selected="true">Cherry</li>
      <li class="option" role="option">Lemon</li>
      <li class="option" role="option">Banana</li>
      <li class="option" role="option">Strawberry</li>
      <li class="option" role="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");

const selectList = document.querySelectorAll(".select");

selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");
  const selectedIndex = getIndex(select);

  select.tabIndex = 0;
  select.previousElementSibling.tabIndex = -1;

  updateValue(select, selectedIndex);

  optionList.forEach((option, index) => {
    option.addEventListener("mouseover", () => {
      highlightOption(select, option);
    });

    option.addEventListener("click", (event) => {
      updateValue(select, index);
    });
  });

  select.addEventListener("click", (event) => {
    toggleOptList(select);
  });

  select.addEventListener("focus", (event) => {
    activeSelect(select, selectList);
  });

  select.addEventListener("blur", (event) => {
    deactivateSelect(select);
  });

  select.addEventListener("keyup", (event) => {
    let index = getIndex(select);

    if (event.key === "Escape") {
      deactivateSelect(select);
    }
    if (event.key === "ArrowDown" && index < optionList.length - 1) {
      index++;
    }
    if (event.key === "ArrowUp" && index > 0) {
      index--;
    }

    updateValue(select, index);
  });
});
```

{{EmbedLiveSample("live_example_3",120,130)}}

Wenn Sie weitermachen möchten, benötigt der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie durchführen können. Zwei Hinweise, die Ihnen dabei helfen: das erste Argument für alle unsere Funktionen ist dasselbe, was bedeutet, dass diese Funktionen den gleichen Kontext benötigen. Es wäre klug, ein Objekt aufzubauen, um diesen Kontext zu teilen.

## Ein alternativer Ansatz: Verwendung von Optionsfeldern

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nichtsemantischem HTML, CSS und JavaScript nachgebaut. Dieses Auswahlfeld wählt eine Option aus einer begrenzten Anzahl von Optionen aus, was die gleiche Funktionalität einer gleich benannten Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons hat.

Wir könnten dies daher unter Verwendung von Optionsfeldern neu erfinden; lassen Sie uns diese Option anschauen.

Wir können mit einer völlig semantischen, barrierefreien, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Buttons mit einem zugehörigen {{htmlelement('label')}} beginnen und die gesamte Gruppe mit einem semantisch geeigneten {{htmlelement('fieldset')}} und {{htmlelement('legend')}}-Paar beschriften.

```html
<fieldset>
  <legend>Pick a fruit</legend>
  <ul class="styledSelect">
    <li>
      <input
        type="radio"
        name="fruit"
        value="Cherry"
        id="fruitCherry"
        checked />
      <label for="fruitCherry">Cherry</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Lemon" id="fruitLemon" />
      <label for="fruitLemon">Lemon</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Banana" id="fruitBanana" />
      <label for="fruitBanana">Banana</label>
    </li>
    <li>
      <input
        type="radio"
        name="fruit"
        value="Strawberry"
        id="fruitStrawberry" />
      <label for="fruitStrawberry">Strawberry</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Apple" id="fruitApple" />
      <label for="fruitApple">Apple</label>
    </li>
  </ul>
</fieldset>
```

Wir werden die Optionsliste (nicht die Legende/das Formularfeld) ein wenig gestalten, um sie dem vorherigen Beispiel etwas anzupassen, nur um zu zeigen, dass es möglich ist:

```css
.styledSelect {
  display: inline-block;
  padding: 0;
}
.styledSelect li {
  list-style-type: none;
  padding: 0;
  display: flex;
}
.styledSelect [type="radio"] {
  position: absolute;
  left: -100vw;
  top: -100vh;
}
.styledSelect label {
  margin: 0;
  line-height: 2;
  padding-left: 4px;
}
.styledSelect:not(:focus-within) input:not(:checked) + label {
  height: 0;
  outline-color: transparent;
  overflow: hidden;
}
.styledSelect:not(:focus-within) input:checked + label {
  border: 0.2em solid black;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);
}
.styledSelect:not(:focus-within) input:checked + label::after {
  content: "▼";
  background: black;
  float: right;
  color: white;
  padding: 0 4px;
  margin: 0 -4px 0 4px;
}
.styledSelect:focus-within {
  border: 0.2em solid black;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);
}
.styledSelect:focus-within input:checked + label {
  background-color: #333333;
  color: white;
  width: 100%;
}
```

Ohne JavaScript und nur mit ein wenig CSS können wir die Liste der Optionsfelder so gestalten, dass nur das ausgewählte Element angezeigt wird. Wenn der Fokus innerhalb des `<ul>` im `<fieldset>` ist, öffnet sich die Liste, und die Pfeil hoch und runter (und links und rechts) Tasten arbeiten, um die vorherigen und nächsten Elemente auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert bis zu einem gewissen Grad ohne JavaScript. Wir haben ein ähnliches Steuerelement zu unserem benutzerdefinierten Steuerelement erstellt, das funktioniert, selbst wenn das JavaScript ausfällt. Klingt nach einer großartigen Lösung, oder? Nun, nicht zu 100%. Es funktioniert mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es scheint mehr Sinn zu machen, Webstandards als Basis für benutzerdefinierte Steuerelemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Allerdings hat unser Steuerelement nicht die gleiche Funktionalität, die ein `<select>`-Element nativ hat.

Auf der positiven Seite ist dieses Steuerelement vollständig zugänglich für einen Screenreader und vollständig über die Tastatur navigierbar. Dieses Steuerelement ersetzt jedoch nicht ein {{htmlelement('select')}}. Es gibt Funktionalitäten, die unterschiedlich sind und/oder fehlen. Beispielsweise navigieren alle vier Pfeile durch die Optionen, aber das Klicken auf den Pfeil nach unten, wenn sich der Benutzer auf dem letzten Button befindet, bringt ihn zum ersten Button; es stoppt nicht am oberen und unteren Ende der Optionsliste wie ein `<select>` es tut.

Wir überlassen es Ihnen als Übung, diese fehlende Funktionalität hinzuzufügen.

## Fazit

Wir haben alle Grundlagen zum Erstellen eines benutzerdefinierten Formularelements gesehen, aber wie Sie sehen, ist es nicht trivial. Bevor Sie Ihr eigenes angepasstes Steuerelement erstellen, überlegen Sie, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen können. Wenn Sie ein benutzerdefiniertes Steuerelement erstellen müssen, ist es oft einfacher, auf Drittbibliotheken zu setzen, anstatt Ihr eigenes zu erstellen. Aber wenn Sie Ihr eigenes erstellen, vorhandene Elemente modifizieren oder ein Framework verwenden, um ein vorgefertigtes Steuerelement zu implementieren, denken Sie daran, dass die Erstellung eines benutzerfreundlichen und zugänglichen Formularelements komplizierter ist als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihren eigenen Code schreiben:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente über Optionsfelder, Ihr eigenes JavaScript oder mit einer Drittanbieterbibliothek erstellen, stellen Sie sicher, dass es barrierefrei und zukunftssicher ist; das heißt, es muss mit einer Vielzahl von Browsern besser funktionieren, deren Kompatibilität mit den Webstandards, die sie verwenden, variiert. Viel Spaß!
