---
title: Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente
short-title: Benutzerdefinierte Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: d93983dfe60b65633f67fffe04676c241ff92960
---

Es gibt einige Fälle, in denen die verfügbaren nativen HTML-Formularsteuerelemente möglicherweise nicht ausreichen. Wenn Sie beispielsweise bei einigen Steuerelementen wie dem {{HTMLElement("select")}}-Element [erweiterte Stile anwenden](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) müssen oder benutzerdefinierte Verhaltensweisen bereitstellen möchten, können Sie erwägen, eigene Steuerelemente zu erstellen.

In diesem Artikel besprechen wir, wie Sie ein benutzerdefiniertes Steuerelement erstellen. Dazu arbeiten wir mit einem Beispiel: dem Nachbau des {{HTMLElement("select")}}-Elements. Wir besprechen außerdem, wie, wann und ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen, und was zu beachten ist, wenn das Erstellen eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns auf das Erstellen des Steuerelements, nicht darauf, den Code generisch und wiederverwendbar zu machen; dies würde nicht trivialen JavaScript-Code und DOM-Manipulation in einem unbekannten Kontext erfordern und liegt außerhalb des Umfangs dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie zunächst genau herausfinden, was Sie möchten. Das spart Ihnen wertvolle Zeit. Insbesondere ist es wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Dafür ist es sinnvoll, mit einem bestehenden Steuerelement zu beginnen, dessen Zustände und Verhalten gut bekannt sind, damit Sie diese so weit wie möglich nachbilden können.

In unserem Beispiel bauen wir das {{HTMLElement("select")}}-Element nach. Dies ist das Ergebnis, das wir erreichen möchten:

![Die drei Zustände eines Auswahlfelds](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den Normalzustand (links), den aktiven Zustand (in der Mitte) und den geöffneten Zustand (rechts).

Hinsichtlich des Verhaltens erstellen wir ein natives HTML-Element nach. Daher sollte es dieselben Verhaltensweisen und dieselbe Semantik wie das native HTML-Element aufweisen. Unser Steuerelement muss sowohl mit einer Maus als auch mit einer Tastatur verwendbar und für einen Screenreader verständlich sein, genau wie jedes native Steuerelement. Beginnen wir damit, zu definieren, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im Normalzustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Benutzer irgendwo außerhalb davon klickt.
- das Steuerelement aktiv war und der Benutzer den Fokus mithilfe der Tastatur auf ein anderes Steuerelement verschiebt (z. B. mit der <kbd>Tab</kbd>-Taste).

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tabulatortaste drückt und es den Fokus erhält.
- das Steuerelement im geöffneten Zustand war und der Benutzer darauf klickt.

**Das Steuerelement befindet sich im geöffneten Zustand, wenn:**

- das Steuerelement sich in einem anderen Zustand als dem geöffneten befindet und der Benutzer darauf klickt.

Sobald wir wissen, wie Zustände geändert werden, ist es wichtig zu definieren, wie der Wert des Steuerelements geändert wird:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, während sich das Steuerelement im geöffneten Zustand befindet.
- der Benutzer die Pfeiltaste nach oben oder unten drückt, während sich das Steuerelement im aktiven Zustand befindet.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Pfeiltaste nach oben drückt, während die erste Option ausgewählt ist.
- der Benutzer die Pfeiltaste nach unten drückt, während die letzte Option ausgewählt ist.

Definieren wir abschließend, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn sich die Maus über einer Option befindet, wird die Option hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren Normalzustand zurück.

Für die Zwecke unseres Beispiels belassen wir es dabei; wenn Sie jedoch aufmerksam lesen, werden Sie feststellen, dass einige Verhaltensweisen fehlen. Was glauben Sie beispielsweise, passiert, wenn der Benutzer die Tabulatortaste drückt, während sich das Steuerelement im geöffneten Zustand befindet? Die Antwort lautet: _nichts_. Gut, das richtige Verhalten scheint offensichtlich, aber da es in unserer Spezifikation nicht definiert ist, lässt sich dieses Verhalten sehr leicht übersehen. Dies gilt insbesondere in einer Teamumgebung, wenn die Personen, die das Verhalten des Steuerelements entwerfen, nicht dieselben sind wie diejenigen, die es implementieren.

Ein weiteres interessantes Beispiel: Was passiert, wenn der Benutzer die Pfeiltasten nach oben oder unten drückt, während sich das Steuerelement im geöffneten Zustand befindet? Dies ist etwas komplizierter. Wenn Sie davon ausgehen, dass der aktive und der geöffnete Zustand vollständig verschieden sind, lautet die Antwort wiederum „nichts passiert“, da wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Wenn Sie andererseits davon ausgehen, dass sich der aktive und der geöffnete Zustand etwas überschneiden, kann sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, wiederum weil wir keine Tastaturinteraktionen für Optionen definiert haben, während sich das Steuerelement im geöffneten Zustand befindet (wir haben nur definiert, was beim Öffnen des Steuerelements passieren soll, aber nichts danach).

Wir müssen etwas weiterdenken: Was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt ein geöffnetes select. Denken Sie daran: Wenn Sie dieselbe Funktionalität wie das vorhandene native {{htmlelement('select')}} bereitstellen möchten, sollte es sich für alle Benutzer exakt genauso verhalten wie das select, unabhängig davon, ob sie eine Tastatur, Maus, Touch-Eingabe, einen Screenreader oder ein anderes Eingabegerät verwenden.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie behandeln. Bei exotischen neuen Steuerelementen kann dies jedoch ein echtes Problem sein. Bei standardisierten Elementen, zu denen auch {{htmlelement('select')}} gehört, haben die Autoren der Spezifikation außerordentlich viel Zeit darauf verwendet, alle Interaktionen für jeden Anwendungsfall und jedes Eingabegerät zu spezifizieren. Das Erstellen neuer Steuerelemente ist nicht so einfach, insbesondere wenn Sie etwas erstellen, das es zuvor noch nicht gab und daher
niemand auch nur die geringste Vorstellung davon hat, welches Verhalten und welche Interaktionen erwartet werden. Zumindest select gab es bereits, daher wissen wir, wie es sich verhalten sollte!

Das Entwerfen neuer Interaktionen ist im Allgemeinen nur für sehr große Akteure der Branche eine Option, die über ausreichend Reichweite verfügen, damit eine von ihnen entwickelte Interaktion zum Standard werden kann. Apple führte beispielsweise 2001 mit dem iPod das Scrollrad ein. Das Unternehmen verfügte über genügend Marktanteil, um eine vollständig neue Art der Interaktion mit einem Gerät erfolgreich einzuführen – etwas, das die meisten Gerätehersteller nicht leisten können.

Es ist am besten, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es entscheidend, Zeit in die Entwurfsphase zu investieren; wenn Sie ein Verhalten schlecht definieren oder vergessen, eines zu definieren, wird es sehr schwierig sein, es neu zu definieren, nachdem sich Benutzer daran gewöhnt haben. Wenn Sie Zweifel haben, holen Sie die Meinungen anderer ein, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Außerdem gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Auswahlmöglichkeiten anzuzeigen (dies entspricht dem Klicken auf das {{HTMLElement("select")}}-Element mit der Maus). Unter Windows wird dies mit <kbd>Alt</kbd> + <kbd>Down</kbd> erreicht. Wir haben dies in unserem Beispiel nicht implementiert, aber es wäre einfach umzusetzen, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definieren der HTML-Struktur und (einiger) Semantik

Nachdem die grundlegende Funktionalität des Steuerelements festgelegt wurde, ist es Zeit, mit seiner Erstellung zu beginnen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm eine grundlegende Semantik zu geben. Folgendes benötigen wir, um ein {{HTMLElement("select")}}-Element nachzubauen:

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

Beachten Sie die Verwendung von Klassennamen; sie identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten zugrunde liegenden HTML-Elementen. Dies ist wichtig, damit wir unser CSS und JavaScript nicht an eine starre HTML-Struktur binden und später Implementierungsänderungen vornehmen können, ohne Code zu beschädigen, der das Steuerelement verwendet. Was beispielsweise, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. Im aktuellen Zustand „sieht“ ein Screenreader-Benutzer nur eine unsortierte Liste. Wir werden gleich ARIA-Semantik hinzufügen.

## Erstellen von Aussehen und Verhalten mit CSS

Jetzt, da wir eine Struktur haben, können wir mit dem Entwurf unseres Steuerelements beginnen. Der ganze Zweck der Erstellung dieses benutzerdefinierten Steuerelements besteht darin, es genau nach unseren Wünschen gestalten zu können. Dazu teilen wir unsere CSS-Arbeit in zwei Teile auf: Der erste Teil enthält die CSS-Regeln, die unbedingt erforderlich sind, damit sich unser Steuerelement wie ein {{HTMLElement("select")}}-Element verhält, und der zweite Teil besteht aus den dekorativen Stilen, die ihm das gewünschte Aussehen verleihen.

### Erforderliche Stile

Die erforderlichen Stile sind jene, die notwendig sind, um die drei Zustände unseres Steuerelements zu behandeln.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Aussehen unseres Steuerelements zu definieren, wenn es sich im aktiven Zustand befindet. Da unser Steuerelement fokussierbar ist, ergänzen wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudoklasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Nun behandeln wir die Optionsliste:

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

Wir benötigen eine zusätzliche Klasse, um zu behandeln, wann die Optionsliste ausgeblendet ist. Dies ist erforderlich, um die Unterschiede zwischen dem aktiven und dem geöffneten Zustand zu verwalten, die nicht exakt übereinstimmen.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way;
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir hätten auch `transform: scale(1, 0)` verwenden können, um der Optionsliste keine Höhe und die volle Breite zu geben.

### Verschönerung

Da die grundlegende Funktionalität nun vorhanden ist, kann der interessante Teil beginnen. Das Folgende ist nur ein Beispiel dafür, was möglich ist, und entspricht dem Screenshot am Anfang dieses Artikels. Sie können jedoch gerne experimentieren und sehen, was Ihnen einfällt.

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

Wir benötigen kein zusätzliches Element, um den Abwärtspfeil zu gestalten; stattdessen verwenden wir das {{cssxref("::after")}}-Pseudo-Element. Es könnte auch mithilfe eines einfachen Hintergrundbilds für die Klasse `select` implementiert werden.

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

Als Nächstes gestalten wir die Optionsliste:

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

Für die Optionen müssen wir eine Klasse `highlight` hinzufügen, um den Wert identifizieren zu können, den der Benutzer auswählen wird (oder ausgewählt hat).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

Hier ist also das Ergebnis mit unseren drei Zuständen ([sehen Sie sich hier den Quellcode an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

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

## Ihr Steuerelement mit JavaScript zum Leben erwecken

Nachdem unser Design und unsere Struktur fertig sind, können wir den JavaScript-Code schreiben, damit das Steuerelement tatsächlich funktioniert.

> [!WARNING]
> Das Folgende ist Lehrcode, kein Produktionscode, und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher noch funktioniert er in älteren Browsern. Er enthält außerdem redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig, sich daran zu erinnern: **JavaScript im Browser ist eine unzuverlässige Technologie**. Benutzerdefinierte Steuerelemente verlassen sich auf JavaScript, um alles miteinander zu verbinden. Es gibt jedoch Fälle, in denen JavaScript im Browser nicht ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Das ist ungewöhnlich; heutzutage deaktivieren nur sehr wenige Menschen JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, in der das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Sie sollten diese Möglichkeit stets in Betracht ziehen.
- Das Skript steht in Konflikt mit einem Drittanbieter-Skript: Dies kann bei Tracking-Skripten oder Bookmarklets auftreten, die der Benutzer verwendet.
- Das Skript steht in Konflikt mit einer Browsererweiterung oder wird von ihr beeinflusst (etwa von Firefox' Erweiterung [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) oder Chromes Erweiterung [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba)).
- Der Benutzer verwendet einen älteren Browser und eines der erforderlichen Features wird nicht unterstützt: Dies geschieht häufig, wenn Sie moderne APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Aufgrund dieser Risiken ist es sehr wichtig, ernsthaft darüber nachzudenken, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir besprechen zu berücksichtigende Optionen und behandeln die Grundlagen in unserem Beispiel (eine vollständige Diskussion zur Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie einfach daran: Es ist entscheidend, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel greifen wir auf die Anzeige eines standardmäßigen {{HTMLElement("select")}}-Elements zurück, wenn unser JavaScript-Code nicht ausgeführt wird. Wir schließen unser Steuerelement und das {{HTMLElement("select")}} ein; welches angezeigt wird, hängt von der Klasse des body-Elements ab. Die Klasse des body-Elements wird durch das Skript aktualisiert, das das Steuerelement funktionsfähig macht, sobald es erfolgreich geladen wurde.

Dafür benötigen wir zwei Dinge:

Zunächst müssen wir vor jeder Instanz unseres benutzerdefinierten Steuerelements ein reguläres {{HTMLElement("select")}}-Element hinzufügen. Es hat auch dann einen Vorteil, dieses „zusätzliche“ select zu haben, wenn unser JavaScript wie erhofft funktioniert: Wir verwenden dieses select, um Daten aus unserem benutzerdefinierten Steuerelement zusammen mit den übrigen Formulardaten zu senden. Dies besprechen wir später ausführlicher.

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

Zweitens benötigen wir zwei neue Klassen, mit denen wir das nicht benötigte Element ausblenden können: Wir blenden das benutzerdefinierte Steuerelement visuell aus, wenn unser Skript nicht läuft, oder das „echte“ {{HTMLElement("select")}}-Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig das benutzerdefinierte Steuerelement ausblendet.

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

Dieses CSS blendet eines der Elemente visuell aus, es bleibt jedoch für Screenreader verfügbar.

Nun benötigen wir einen JavaScript-Schalter, um festzustellen, ob das Skript läuft oder nicht. Dieser Schalter besteht aus wenigen Zeilen: Wenn unser Skript beim Laden der Seite läuft, entfernt es die Klasse `no-widget` und fügt die Klasse `widget` hinzu. Dadurch wird die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements vertauscht.

```js
document.body.classList.remove("no-widget");
document.body.classList.add("widget");
```

#### Ohne JS

Sehen Sie sich den [vollständigen Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#no_js) an.

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

Sehen Sie sich den [vollständigen Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#js) an.

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
> Wenn Sie Ihren Code wirklich generisch und wiederverwendbar machen möchten, ist es wesentlich besser, statt eines Klassenwechsels einfach die Klasse widget hinzuzufügen, um die {{HTMLElement("select")}}-Elemente auszublenden, und den DOM-Baum, der das benutzerdefinierte Steuerelement darstellt, dynamisch nach jedem {{HTMLElement("select")}}-Element auf der Seite hinzuzufügen.

### Die Arbeit erleichtern

Im Code, den wir gleich erstellen, verwenden wir die standardmäßigen JavaScript- und DOM-APIs, um alle erforderlichen Aufgaben auszuführen. Wir planen, die folgenden Features zu verwenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Ereignis-Callbacks erstellen

Die Grundlagen sind erledigt. Nun können wir damit beginnen, alle Funktionen zu definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Steuerelement interagiert.

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

Sie benötigen diese, um die verschiedenen Zustände des benutzerdefinierten Steuerelements zu behandeln.

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

Zu diesem Zeitpunkt ändert unser Steuerelement seinen Zustand entsprechend unserem Entwurf, aber sein Wert wird noch nicht aktualisiert. Das behandeln wir als Nächstes.

#### Live-Beispiel

Sehen Sie sich den [vollständigen Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_3) an.

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

### Den Wert des Steuerelements behandeln

Jetzt, da unser Steuerelement funktioniert, müssen wir Code hinzufügen, um seinen Wert gemäß Benutzereingaben zu aktualisieren und das Senden des Werts zusammen mit Formulardaten zu ermöglichen.

Am einfachsten gelingt dies mithilfe eines nativen Steuerelements im Hintergrund. Ein solches Steuerelement verfolgt den Wert mit allen vom Browser bereitgestellten integrierten Funktionen, und der Wert wird beim Absenden eines Formulars wie gewohnt gesendet. Es gibt keinen Grund, das Rad neu zu erfinden, wenn all dies für uns erledigt werden kann.

Wie zuvor gesehen, verwenden wir bereits ein natives select-Steuerelement als Fallback aus Gründen der Barrierefreiheit; wir können seinen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

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

Mit diesen beiden Funktionen können wir die nativen Steuerelemente an die benutzerdefinierten binden:

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

Im obigen Code ist die Verwendung der Eigenschaft [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex) erwähnenswert. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Steuerelement niemals den Fokus erhält, und um sicherzustellen, dass unser benutzerdefiniertes Steuerelement den Fokus erhält, wenn der Benutzer seine Tastatur oder Maus verwendet.

Damit sind wir fertig!

#### Live-Beispiel

Sehen Sie sich den [Quellcode hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4) an.

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

Aber warten Sie einen Moment, sind wir wirklich fertig?

## Barrierefreiheit herstellen

Wir haben etwas erstellt, das funktioniert, und obwohl wir noch weit von einem voll ausgestatteten Auswahlfeld entfernt sind, funktioniert es gut. Doch was wir getan haben, ist nichts weiter als Manipulation des DOM. Es hat keine echte Semantik, und obwohl es wie ein Auswahlfeld aussieht, ist es aus Sicht des Browsers keines. Daher können assistive Technologien nicht verstehen, dass es ein Auswahlfeld ist. Kurz gesagt: Dieses hübsche neue Auswahlfeld ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung, und sie heißt [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für „Accessible Rich Internet Application“ und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die speziell für das entwickelt wurde, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerelemente barrierefrei machen. Sie ist im Grunde eine Reihe von Attributen, die HTML erweitern, damit wir Rollen, Zustände und Eigenschaften besser beschreiben können, als wäre das gerade entwickelte Element das native Element, als das es sich ausgibt. Diese Attribute können durch Bearbeiten des HTML-Markups verwendet werden. Außerdem aktualisieren wir die ARIA-Attribute über JavaScript, wenn der Benutzer seinen ausgewählten Wert aktualisiert.

### Das Attribut `role`

Das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendete Schlüsselattribut ist das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques). Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert eigene Anforderungen und Verhaltensweisen. In unserem Beispiel verwenden wir die Rolle [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role). Es handelt sich um eine „zusammengesetzte Rolle“, was bedeutet, dass Elemente mit dieser Rolle Kinder mit jeweils einer bestimmten Rolle erwarten (in diesem Fall mindestens ein Kind mit der Rolle `option`).

Erwähnenswert ist auch, dass ARIA Rollen definiert, die standardmäßig auf standardmäßiges HTML-Markup angewendet werden. Beispielsweise entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die Rolle `listbox` unseres Steuerelements die Rolle `list` des {{HTMLElement("ul")}}-Elements überschreibt. Dafür verwenden wir die Rolle `presentation`. Diese Rolle dient dazu anzugeben, dass ein Element keine besondere Bedeutung hat und ausschließlich zur Darstellung von Informationen verwendet wird. Wir wenden sie auf unser {{HTMLElement("ul")}}-Element an.

Um die Rolle [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) zu unterstützen, müssen wir unser HTML nur wie folgt aktualisieren:

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
> Es ist nicht notwendig, sowohl das Attribut `role` als auch ein Attribut `class` einzuschließen. Verwenden Sie statt `.option` die `[role="option"]`-[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) in Ihrem CSS.

### Das Attribut `aria-selected`

Die Verwendung des Attributs [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet außerdem viele Zustands- und Eigenschaftsattribute. Je mehr und besser Sie diese verwenden, desto besser wird Ihr Steuerelement von assistiven Technologien verstanden. In unserem Fall beschränken wir unsere Verwendung auf ein Attribut: `aria-selected`.

Das Attribut `aria-selected` wird verwendet, um zu markieren, welche Option derzeit ausgewählt ist; dadurch können assistive Technologien den Benutzer über die aktuelle Auswahl informieren. Wir verwenden es dynamisch mit JavaScript, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine Option auswählt. Dafür müssen wir unsere Funktion `updateValue()` überarbeiten:

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

Es hätte vielleicht einfacher gewirkt, einen Screenreader auf das select außerhalb des sichtbaren Bereichs zu fokussieren und unser gestaltetes Element zu ignorieren, aber dies ist keine barrierefreie Lösung. Screenreader sind nicht auf blinde Menschen beschränkt; auch Menschen mit Sehbehinderung und sogar Menschen mit perfektem Sehvermögen verwenden sie. Aus diesem Grund können Sie den Screenreader nicht auf ein Element außerhalb des sichtbaren Bereichs fokussieren lassen.

Nachfolgend sehen Sie das endgültige Ergebnis all dieser Änderungen (Sie bekommen ein besseres Gefühl dafür, wenn Sie es mit einer assistiven Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) ausprobieren).

#### Live-Beispiel

Sehen Sie sich den [vollständigen Quellcode hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5) an.

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

Wenn Sie weitermachen möchten, benötigt der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Sie können versuchen, dies als Übung umzusetzen. Zwei Hinweise dazu: Das erste Argument aller unserer Funktionen ist gleich, was bedeutet, dass diese Funktionen denselben Kontext benötigen. Es wäre sinnvoll, ein Objekt zu erstellen, um diesen Kontext zu teilen.

## Ein alternativer Ansatz: Verwendung von Radio-Buttons

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mithilfe von nicht semantischem HTML, CSS und JavaScript neu erfunden. Dieses select wählte eine Option aus einer begrenzten Anzahl von Optionen aus, was dieselbe Funktionalität wie eine gleichnamige Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons ist.

Wir könnten dies daher stattdessen mit Radio-Buttons neu erfinden; sehen wir uns diese Option an.

Wir können mit einer vollständig semantischen, barrierefreien, unsortierten Liste von {{htmlelement('input/radio','radio')}}-Buttons mit zugehörigen {{htmlelement('label')}} beginnen und die gesamte Gruppe mit einem semantisch passenden Paar aus {{htmlelement('fieldset')}} und {{htmlelement('legend')}} beschriften.

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

Wir gestalten die Liste der Radio-Buttons (nicht legend/fieldset) ein wenig, damit sie etwas wie das frühere Beispiel aussieht – nur um zu zeigen, dass dies möglich ist:

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

Ohne JavaScript und nur mit etwas CSS können wir die Liste der Radio-Buttons so gestalten, dass nur das aktivierte Element angezeigt wird. Wenn sich der Fokus innerhalb des `<ul>` im `<fieldset>` befindet, öffnet sich die Liste, und die Pfeiltasten nach oben und unten (sowie links und rechts) wählen die vorherigen und nächsten Elemente aus. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert bis zu einem gewissen Grad ohne JavaScript. Wir haben ein unserem benutzerdefinierten Steuerelement ähnliches Steuerelement erstellt, das auch funktioniert, wenn JavaScript ausfällt. Klingt nach einer großartigen Lösung, oder? Nun, nicht zu 100 %. Es funktioniert mit der Tastatur, aber bei einem Mausklick nicht wie erwartet. Es ist vermutlich sinnvoller, Webstandards als Grundlage für benutzerdefinierte Steuerelemente zu verwenden, statt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unser Steuerelement verfügt jedoch nicht über dieselbe Funktionalität wie ein `<select>` nativ.

Positiv ist, dass dieses Steuerelement vollständig für einen Screenreader zugänglich und vollständig über die Tastatur navigierbar ist. Dieses Steuerelement ist jedoch kein Ersatz für {{htmlelement('select')}}. Einige Funktionen unterscheiden sich und/oder fehlen. Beispielsweise navigieren alle vier Pfeiltasten durch die Optionen, aber ein Klick auf den Abwärtspfeil, wenn sich der Benutzer auf dem letzten Button befindet, bringt ihn zum ersten Button; es stoppt nicht oben und unten in der Optionsliste wie ein `<select>`.

Das Hinzufügen dieser fehlenden Funktionalität überlassen wir als Übung dem Leser.

## Fazit

Wir haben alle Grundlagen für das Erstellen eines benutzerdefinierten Formularsteuerelements gesehen, aber wie Sie sehen können, ist dies nicht trivial. Bevor Sie Ihr eigenes angepasstes Steuerelement erstellen, prüfen Sie, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen können. Wenn Sie ein benutzerdefiniertes Steuerelement erstellen müssen, ist es oft einfacher, auf Drittanbieter-Bibliotheken zurückzugreifen, statt selbst eines zu erstellen. Wenn Sie jedoch ein eigenes Steuerelement erstellen, vorhandene Elemente verändern oder ein Framework verwenden, um ein vorgefertigtes Steuerelement zu implementieren, denken Sie daran, dass die Erstellung eines verwendbaren und barrierefreien Formularsteuerelements komplizierter ist, als es aussieht.

Hier sind einige Bibliotheken, die Sie vor dem Schreiben eines eigenen Steuerelements in Betracht ziehen sollten:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente über Radio-Buttons, eigenes JavaScript oder mit einer Drittanbieter-Bibliothek erstellen, stellen Sie sicher, dass sie barrierefrei und zukunftssicher sind; das heißt, sie müssen mit einer Vielzahl von Browsern besser funktionieren können, deren Kompatibilität mit den verwendeten Webstandards unterschiedlich ist. Viel Spaß!
