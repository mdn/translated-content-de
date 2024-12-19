---
title: Anleitung zur Erstellung benutzerdefinierter Formularsteuerungen
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

In einigen Fällen scheinen die verfügbaren nativen HTML-Formularsteuerungen nicht ausreichend zu sein. Beispielsweise, wenn Sie [fortgeschrittenes Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) für einige Steuerungen wie das {{HTMLElement("select")}}-Element durchführen müssen oder wenn Sie benutzerdefinierte Verhaltensweisen bereitstellen möchten, könnten Sie in Betracht ziehen, Ihre eigenen Steuerungen zu erstellen.

In diesem Artikel werden wir diskutieren, wie man eine benutzerdefinierte Steuerung erstellt. Zu diesem Zweck werden wir mit einem Beispiel arbeiten: den Neuaufbau des {{HTMLElement("select")}}-Elements. Wir werden auch erörtern, wie, wann und ob es sinnvoll ist, eine eigene Steuerung zu bauen und was zu berücksichtigen ist, wenn der Bau einer Steuerung erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns auf den Bau der Steuerung, nicht darauf, wie man den Code generisch und wiederverwendbar macht; das würde einige nicht triviale JavaScript-Codes und DOM-Manipulationen in einem unbekannten Kontext erfordern, und das liegt außerhalb des Umfangs dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie eine benutzerdefinierte Steuerung erstellen, sollten Sie zunächst genau herausfinden, was Sie wollen. Dies wird Ihnen wertvolle Zeit sparen. Insbesondere ist es wichtig, alle Zustände Ihrer Steuerung klar zu definieren. Dazu ist es gut, mit einer vorhandenen Steuerung zu beginnen, deren Zustände und Verhalten gut bekannt sind, damit Sie diese nach Möglichkeit nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element neu erstellen. Hier ist das Ergebnis, das wir erreichen wollen:

![Die drei Zustände eines Auswahlkästchens](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unserer Steuerung: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

Was das Verhalten betrifft, so erstellen wir ein natives HTML-Element neu. Daher sollte es die gleichen Verhaltensweisen und Semantiken wie das native HTML-Element haben. Wir verlangen, dass unsere Steuerung sowohl mit einer Maus als auch mit einer Tastatur verwendbar ist und für einen Screenreader verständlich ist, genauso wie jede native Steuerung. Beginnen wir damit, zu definieren, wie die Steuerung jeden Zustand erreicht:

**Die Steuerung befindet sich in ihrem normalen Zustand, wenn:**

- die Seite geladen wird.
- die Steuerung aktiv war und der Benutzer irgendwo außerhalb klickt.
- die Steuerung aktiv war und der Benutzer mit der Tastatur (z.B. der <kbd>Tab</kbd>-Taste) den Fokus auf eine andere Steuerung verschiebt.

**Die Steuerung befindet sich in ihrem aktiven Zustand, wenn:**

- der Benutzer sie anklickt oder auf einem Touchscreen berührt.
- der Benutzer die Tab-Taste drückt und sie den Fokus erhält.
- die Steuerung im offenen Zustand war und der Benutzer darauf klickt.

**Die Steuerung befindet sich im offenen Zustand, wenn:**

- die Steuerung in einem anderen Zustand als offen ist und der Benutzer darauf klickt.

Sobald wir wissen, wie Zustände geändert werden, ist es wichtig zu definieren, wie der Wert der Steuerung geändert wird:

**Der Wert ändert sich, wenn:**

- der Benutzer eine Option anklickt, wenn die Steuerung im offenen Zustand ist.
- der Benutzer die Pfeiltasten nach oben oder unten drückt, wenn die Steuerung im aktiven Zustand ist.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Pfeiltaste nach oben drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Pfeiltaste nach unten drückt, wenn die letzte Option ausgewählt ist.

Schließlich definieren wir, wie sich die Optionen der Steuerung verhalten werden:

- Wenn die Steuerung geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn die Maus über eine Option fährt, wird die Option hervorgehoben und die zuvor hervorgehobene Option wird in ihren normalen Zustand zurückversetzt.

Für die Zwecke unseres Beispiels hören wir hier auf; wenn Sie jedoch ein aufmerksamer Leser sind, werden Sie bemerken, dass einige Verhaltensweisen fehlen. Zum Beispiel, was denken Sie, passiert, wenn der Benutzer die Tab-Taste drückt, während die Steuerung im offenen Zustand ist? Die Antwort ist _nichts_. Okay, das richtige Verhalten scheint offensichtlich, aber die Tatsache ist, weil es nicht in unseren Spezifikationen definiert ist, kann man dieses Verhalten leicht übersehen. Dies gilt insbesondere in einem Teamumfeld, wenn die Personen, die das Verhalten der Steuerung entwerfen, andere sind als die, die es implementieren.

Ein anderes unterhaltsames Beispiel: Was passiert, wenn der Benutzer die Pfeiltasten nach oben oder unten drückt, während die Steuerung im offenen Zustand ist? Das ist ein wenig kniffliger. Wenn Sie der Meinung sind, dass der aktive Zustand und der offene Zustand völlig unterschiedlich sind, lautet die Antwort erneut "es wird nichts passieren", weil wir keine Tastaturinteraktionen für den offenen Zustand definiert haben. Andererseits, wenn Sie der Meinung sind, dass sich der aktive Zustand und der offene Zustand ein wenig überschneiden, könnte sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, wieder einmal, weil wir keine Tastaturinteraktionen über Optionen definiert haben, wenn sich die Steuerung im geöffneten Zustand befindet (wir haben nur definiert, was passieren sollte, wenn die Steuerung geöffnet wird, aber nichts danach).

Wir müssen ein wenig weiter denken: Was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt ein geöffnetes Auswahlfeld. Denken Sie daran, wenn Sie die gleiche Funktionalität wie das bestehende native {{htmlelement('select')}} bereitstellen möchten, sollte es sich genauso wie das Auswahlfeld für alle Benutzer verhalten, von der Tastatur über die Maus bis zum Touchscreen und zum Screenreader sowie für jedes andere Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie behandeln, aber es kann ein echtes Problem für exotische neue Steuerungen sein. Bei standardisierten Elementen, zu denen das {{htmlelement('select')}} gehört, haben die Spezifikationsautoren eine beträchtliche Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall und jedes Eingabegerät zu spezifizieren. Neue Steuerungen zu erstellen, ist nicht leicht, insbesondere wenn Sie etwas Neues erstellen, das vorher noch nicht gemacht wurde, und daher niemand die geringste Ahnung hat, was die erwarteten Verhaltensweisen und Interaktionen sind. Zumindest wurde das Selektieren bereits gemacht, daher wissen wir, wie es sich verhalten sollte!

Neue Interaktionen zu entwerfen, ist im Allgemeinen nur eine Option für sehr große Branchenakteure, die genug Reichweite haben, dass eine von ihnen geschaffene Interaktion zu einem Standard werden kann. Zum Beispiel führte Apple 2001 mit dem iPod das Scrollrad ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät einzuführen, etwas, das die meisten Gerätefirmen nicht tun können.

Es ist am besten, keine neuen Nutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es wichtig, Zeit in die Designphase zu investieren; wenn Sie ein Verhalten schlecht definieren oder eines vergessen zu definieren, wird es sehr schwer sein, es neu zu definieren, wenn die Benutzer sich daran gewöhnt haben. Wenn Sie Zweifel haben, holen Sie sich die Meinungen anderer ein, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://de.wikipedia.org/wiki/Usability-Testing). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Außerdem gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Auswahlmöglichkeiten anzuzeigen (das ist dasselbe wie das Klicken auf das {{HTMLElement("select")}}-Element mit einer Maus). Dies wird mit <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> auf Windows erreicht. Wir haben dies in unserem Beispiel nicht implementiert, aber es wäre einfach, dies zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einige) Semantik

Nun, da die grundlegenden Funktionen der Steuerung festgelegt wurden, ist es an der Zeit, mit dem Bau zu beginnen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm einige grundlegende Semantiken zu geben. Hier ist, was wir brauchen, um ein {{HTMLElement("select")}}-Element neu zu erstellen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten zugrunde liegenden HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine starke HTML-Struktur binden, damit wir später Implementierungsänderungen vornehmen können, ohne den Code zu brechen, der die Steuerung verwendet. Zum Beispiel, was ist, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand sieht der Benutzer des Screenreaders nur eine ungeordnete Liste. Wir werden in Kürze ARIA-Semantik hinzufügen.

## Erstellung des Erscheinungsbildes mit CSS

Jetzt, da wir eine Struktur haben, können wir mit dem Entwerfen unserer Steuerung beginnen. Der ganze Grund für den Bau dieser benutzerdefinierten Steuerung besteht darin, sie genau so zu gestalten, wie wir es wollen. Dazu werden wir unsere CSS-Arbeit in zwei Teile aufteilen: Der erste Teil wird die unbedingt notwendigen CSS-Regeln sein, um unsere Steuerung wie ein {{HTMLElement("select")}}-Element zu verhalten, und der zweite Teil wird aus den ausgefallenen Stilen bestehen, die verwendet werden, um es so aussehen zu lassen, wie wir es wollen.

### Erforderliche Stile

Die erforderlichen Stile sind die, die notwendig sind, um die drei Zustände unserer Steuerung zu handhaben.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Erscheinungsbild unserer Steuerung im aktiven Zustand zu definieren. Da unsere Steuerung fokussierbar ist, verdoppeln wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudoklasse, um sicherzustellen, dass sie sich gleich verhalten wird.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Jetzt lassen Sie uns die Liste der Optionen behandeln:

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

Wir benötigen eine zusätzliche Klasse, um zu behandeln, wenn die Liste der Optionen ausgeblendet ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand zu verwalten, die nicht genau übereinstimmen.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way;
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir könnten auch `transform: scale(1, 0)` verwendet haben, um der Optionsliste keine Höhe und volle Breite zu geben.

### Verschönerung

Jetzt, da wir die grundlegende Funktionalität implementiert haben, kann der Spaß beginnen. Das Folgende ist nur ein Beispiel für das, was möglich ist, und wird mit dem Screenshot am Anfang dieses Artikels übereinstimmen. Sie sollten jedoch frei sein, zu experimentieren und zu sehen, was Sie sich einfallen lassen können.

```css
.select {
  /* The computations are made assuming 1em equals 16px which is the default value in most browsers.
     If you are lost with px to em conversion, try https://nekocalc.com/px-to-em-converter */
  font-size: 0.625em; /* this (10px) is the new font size context for em value in this context */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  /* We need extra room for the down arrow we will add */
  padding: 0.1em 2.5em 0.2em 0.5em;
  width: 10em; /* 100px */

  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);

  /* The first declaration is for browsers that do not support linear gradients. */
  background: #f0f0f0;
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

Wir benötigen kein zusätzliches Element, um den Pfeil nach unten zu gestalten; stattdessen verwenden wir das {{cssxref("::after")}}-Pseudo-Element. Es könnte auch durch ein einfaches Hintergrundbild auf der `select`-Klasse implementiert werden.

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

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
  text-align: center;
}
```

Als nächstes lassen Sie uns die Liste der Optionen gestalten:

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

  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);
  background: #f0f0f0;
}
```

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert, den der Benutzer wählen wird (oder gewählt hat), identifizieren zu können.

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
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
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: #f0f0f0;
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

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
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
  background: #000;
  color: #ffffff;
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
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: #f0f0f0;
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

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
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
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("Active_state",120,130)}}

#### Offener Zustand

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
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: #f0f0f0;
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

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
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
  background: #000;
  color: #fff;
}
```

{{EmbedLiveSample("Open_state",120,130)}}

## Erwecken Ihrer Steuerung zum Leben mit JavaScript

Jetzt, da unser Design und unsere Struktur bereit sind, können wir den JavaScript-Code schreiben, um die Steuerung tatsächlich funktionsfähig zu machen.

> [!WARNING]
> Der folgende Code ist Lehrmaterial, kein Produktionscode, und sollte nicht so verwendet werden. Er ist weder zukunftssicher noch wird er in älteren Browsern arbeiten. Er enthält zudem redundante Teile, die in Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig, sich zu erinnern, dass **JavaScript im Browser eine unzuverlässige Technologie** ist. Benutzerdefinierte Steuerungen basieren auf JavaScript, um alles zusammenzuführen. Es gibt jedoch Fälle, in denen JavaScript nicht in der Lage ist, im Browser auszuführen:

- Der Benutzer hat JavaScript deaktiviert: Dies ist ungewöhnlich; heutzutage deaktivieren sehr wenige Menschen JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, wo das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Sie sollten immer diese Möglichkeit in Betracht ziehen.
- Das Skript steht im Konflikt mit einem Drittanbieter-Skript: Dies kann mit Tracking-Skripten oder mit jeglichen Bookmarklets, die der Benutzer verwendet, geschehen.
- Das Skript steht im Konflikt mit einer Browser-Erweiterung (wie der [NoScript](https://addons.mozilla.org/de/firefox/addon/noscript/)-Erweiterung von Firefox oder der [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) Erweiterung von Chrome) oder ist davon betroffen.
- Der Benutzer verwendet einen veralteten Browser, und eine der benötigten Funktionen wird nicht unterstützt: Dies wird häufig passieren, wenn Sie sich auf modernste APIs verlassen.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, analysiert und ausgeführt wurde.

Aufgrund dieser Risiken ist es wirklich wichtig, ernsthaft zu überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen in Betracht ziehen und die Grundlagen in unserem Beispiel abdecken (eine vollständige Diskussion zur Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie nur daran, es ist entscheidend, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht ausgeführt wird, fallen wir auf die Anzeige eines standardmäßigen {{HTMLElement("select")}}-Elements zurück. Wir nutzen sowohl unsere Steuerung als auch das {{HTMLElement("select")}}-Element. Welche davon angezeigt wird, hängt von der Klasse des Body-Elements ab, wobei die Klasse des Body-Elements von dem Skript aktualisiert wird, das die Steuerung zum Funktionieren bringt, wenn es erfolgreich geladen wird.

Um dies zu erreichen, benötigen wir zwei Dinge:

Erstens müssen wir vor jeder Instanz unserer benutzerdefinierten Steuerung ein reguläres {{HTMLElement("select")}}-Element hinzufügen. Es gibt einen Vorteil, dieses "zusätzliche" Auswahlfeld zu haben, selbst wenn unser JavaScript wie erhofft funktioniert: Wir werden dieses Auswahlfeld nutzen, um Daten von unserer benutzerdefinierten Steuerung zusammen mit dem Rest unserer Formulardaten zu senden. Wir werden dies später ausführlicher besprechen.

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

Zweitens benötigen wir zwei neue Klassen, um uns das überflüssige Element verstecken zu lassen: Wir blenden visuell die benutzerdefinierte Steuerung aus, wenn unser Skript nicht läuft, oder das "echte" {{HTMLElement("select")}}-Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig unsere benutzerdefinierte Steuerung versteckt.

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

Dieses CSS blendet eines der Elemente visuell aus, aber es ist immer noch für Screenreader verfügbar.

Jetzt benötigen wir einen JavaScript-Schalter, um festzustellen, ob das Skript läuft oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn zur Ladezeit der Seite unser Skript läuft, wird es die `no-widget`-Klasse entfernen und die `widget`-Klasse hinzufügen, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und der benutzerdefinierten Steuerung ausgetauscht wird.

```js
window.addEventListener("load", () => {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

#### Ohne JS

Sehen Sie sich den [vollständigen Quellcode an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#no_js).

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

Sehen Sie sich den [vollständigen Quellcode an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#js).

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
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: #f0f0f0;
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

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
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
  background: #000;
  color: #ffffff;
}
```

```js hidden
window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});
```

{{EmbedLiveSample("With_JS",120,130)}}

> [!NOTE]
> Wenn Sie wirklich möchten, dass Ihr Code generisch und wiederverwendbar ist, ist es viel besser, statt eines Klassenschalters nur die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente auszublenden, und den DOM-Baum, der die benutzerdefinierte Steuerung darstellt, nach jedem {{HTMLElement("select")}}-Element auf der Seite dynamisch hinzuzufügen.

### Den Job erleichtern

Im Code, den wir gleich erstellen werden, werden wir die Standard-JavaScript- und DOM-APIs verwenden, um alle benötigten Arbeiten zu erledigen. Die Funktionen, die wir verwenden werden, sind folgende:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Ereignis-Callbacks erstellen

Die Grundlagen sind erledigt. Wir können nun beginnen, alle Funktionen zu definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserer Steuerung interagiert.

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

Sie benötigen diese, um die verschiedenen Zustände der benutzerdefinierten Steuerung zu handhaben.

Als nächstes verbinden wir diese Funktionen mit den entsprechenden Ereignissen:

```js
// We handle the event binding when the document is loaded.
window.addEventListener("load", () => {
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

    // Loose focus if the user hits `esc`
    select.addEventListener("keyup", (event) => {
      // deactivate on keyup of `esc`
      if (event.key === "Escape") {
        deactivateSelect(select);
      }
    });
  });
});
```

An diesem Punkt wird unsere Steuerung den Zustand gemäß unserem Design ändern, aber ihr Wert wird noch nicht aktualisiert. Das werden wir als Nächstes behandeln.

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
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: #f0f0f0;
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

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
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
  background: #000;
  color: #ffffff;
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

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener(
      "click",
      (event) => {
        toggleOptList(select);
      },
      false,
    );

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
});
```

{{EmbedLiveSample("Live_example",120,130)}}

### Umgang mit dem Wert der Steuerung

Nun, da unsere Steuerung funktioniert, müssen wir Code hinzufügen, um ihren Wert gemäß der Benutzereingabe zu aktualisieren und es möglich zu machen, den Wert zusammen mit den Formulardaten zu senden.

Der einfachste Weg, dies zu tun, besteht darin, eine native Steuerung unter der Haube zu verwenden. Eine solche Steuerung hält den Wert mit all den integrierten Steuerungen, die der Browser bereitstellt, nach und der Wert wird wie gewohnt gesendet, wenn ein Formular abgesendet wird. Es hat keinen Zweck, das Rad neu zu erfinden, wenn wir all dies für uns erledigen lassen können.

Wie zuvor gesehen, verwenden wir bereits eine native Auswahlsteuerung aus Zugänglichkeitsgründen; wir können ihren Wert mit dem unserer benutzerdefinierten Steuerung synchronisieren:

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

Mit diesen zwei Funktionen können wir die nativen Steuerungen mit den benutzerdefinierten verknüpfen:

```js
// We handle event binding when the document is loaded.
window.addEventListener("load", () => {
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
});
```

Im obigen Code ist die Verwendung der [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft bemerkenswert. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass die native Steuerung niemals den Fokus erhält, und um sicherzustellen, dass unsere benutzerdefinierte Steuerung den Fokus erhält, wenn der Benutzer die Tastatur oder die Maus verwendet.

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
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: #f0f0f0;
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

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
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
  background: #000;
  color: #ffffff;
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

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
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
});

window.addEventListener("load", () => {
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
});
```

{{EmbedLiveSample("live_example_2",120,130)}}

Aber warten Sie eine Sekunde, sind wir wirklich fertig?

## Zugänglichkeit sicherstellen

Wir haben etwas gebaut, das funktioniert, und obwohl wir weit von einem voll funktionsfähigen Auswahlfeld entfernt sind, funktioniert es schön. Aber was wir getan haben, ist nichts anderes als am DOM zu basteln. Es hat keine wirkliche Semantik, und auch wenn es wie ein Auswahlfeld aussieht, ist es aus Sicht des Browsers keines, sodass unterstützende Technologien nicht in der Lage sein werden zu verstehen, dass es sich um ein Auswahlfeld handelt. Kurz gesagt, dieses schöne neue Auswahlfeld ist nicht zugänglich!

Glücklicherweise gibt es eine Lösung, und sie nennt sich [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für "Accessible Rich Internet Application", und es ist [eine W3C-Spezifikation](https://www.w3.org/TR/wai-aria/), die speziell dafür gedacht ist, das zu tun, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerungen zugänglich zu machen. Es ist im Grunde eine Reihe von Attributen, die HTML erweitern, damit wir Rollen, Zustände und Eigenschaften besser beschreiben können, als ob das von uns gerade entworfene Element das native Element wäre, für das es sich ausgibt. Die Verwendung dieser Attribute kann durch Bearbeiten des HTML-Markups erfolgen. Wir aktualisieren auch die ARIA-Attribute über JavaScript, während der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel werden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)-Rolle verwenden. Es ist eine "Zusammengesetzte Rolle", was bedeutet, dass Elemente mit dieser Rolle erwarten, Kinder zu haben, von denen jedes eine spezifische Rolle hat (in diesem Fall mindestens ein Kind mit der `option`-Rolle).

Es ist auch erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf Standard-HTML-Markup angewendet werden. Beispielsweise entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die `listbox`-Rolle unserer Steuerung die `list`-Rolle des {{HTMLElement("ul")}}-Elements überschreibt. Zu diesem Zweck verwenden wir die Rolle `presentation`. Diese Rolle ist so konzipiert, dass wir angeben können, dass ein Element keine besondere Bedeutung hat und ausschließlich zur Präsentation von Informationen verwendet wird. Wir werden es auf unser {{HTMLElement("ul")}}-Element anwenden.

Um die Unterstützung der [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)-Rolle zu gewährleisten, müssen wir unser HTML wie folgt aktualisieren:

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
> Es ist nicht notwendig, sowohl das `role`-Attribut als auch ein `class`-Attribut einzuschließen. Statt `.option` verwenden Sie die `[role="option"]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attributs reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Attributzustände und -eigenschaften. Je mehr und besser Sie sie nutzen, desto besser wird Ihre Steuerung von unterstützenden Technologien verstanden. In unserem Fall beschränken wir unsere Nutzung auf ein Attribut: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu markieren, welche Option derzeit ausgewählt ist; dies ermöglicht unterstützenden Technologien, den Benutzer über die aktuelle Auswahl zu informieren. Wir verwenden es dynamisch mit JavaScript, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Zu diesem Zweck müssen wir unsere `updateValue()`-Funktion überarbeiten:

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

Es mag einfacher erscheinen, einen Screenreader auf das außerhalb des Bildschirm befindliche Auswahlfeld fokussieren zu lassen und unser stilisiertes zu ignorieren, aber dies ist keine barrierefreie Lösung. Screenreader sind nicht nur auf blinde Menschen beschränkt; Menschen mit eingeschränktem Sehvermögen und sogar mit perfekt funktionstüchtigem Sehvermögen verwenden sie ebenfalls. Aus diesem Grund können Sie den Screenreader nicht auf ein Element fokussieren lassen, das sich außerhalb des Bildschirms befindet.

Unten ist das Endergebnis aller dieser Änderungen (Sie erhalten ein besseres Gefühl dafür, indem Sie es mit unterstützender Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/vision/)) ausprobieren.

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
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: #f0f0f0;
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

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
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
  background: #000;
  color: #ffffff;
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

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
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
});
```

{{EmbedLiveSample("live_example_3",120,130)}}

Wenn Sie weitermachen möchten, muss der Code in diesem Beispiel verbessert werden, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie versuchen können. Zwei Hinweise, um Ihnen dabei zu helfen: Das erste Argument für alle unsere Funktionen ist dasselbe, was bedeutet, dass diese Funktionen den gleichen Kontext benötigen. Der Aufbau eines Objekts, um diesen Kontext zu teilen, wäre klug.

## Ein alternativer Ansatz: Radio-Buttons verwenden

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element unter Verwendung von nicht-semantischem HTML, CSS und JavaScript neu erfunden. Dieses Auswahlfeld wählte eine Option aus einer begrenzten Anzahl von Optionen, was die gleiche Funktionalität wie eine gleichnamige Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons bietet.

Wir könnten dies daher unter Verwendung von Radio-Buttons neu erfinden; schauen wir uns diese Option an.

Wir können mit einer vollständig semantischen, zugänglichen, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Buttons beginnen, mit einem zugeordnetem {{htmlelement('label')}}, und die gesamte Gruppe mit einem semantisch passenden {{htmlelement('fieldset')}} und {{htmlelement('legend')}} Paar beschriften.

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

Wir werden ein wenig Styling der Radio-Button-Liste machen (nicht der Legende/des Fieldsets), um sie etwas wie das frühere Beispiel aussehen zu lassen, nur um zu zeigen, dass es möglich ist:

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
  padding: 0 0 0 4px;
}
.styledSelect:not(:focus-within) input:not(:checked) + label {
  height: 0;
  outline-color: transparent;
  overflow: hidden;
}
.styledSelect:not(:focus-within) input:checked + label {
  border: 0.2em solid #000;
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
  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);
}
.styledSelect:focus-within input:checked + label {
  background-color: #333;
  color: #fff;
  width: 100%;
}
```

Ohne JavaScript und mit nur einem wenig CSS können wir die Liste der Radio-Buttons so gestalten, dass nur das geprüfte Element angezeigt wird. Wenn der Fokus innerhalb des `<ul>` im `<fieldset>` liegt, öffnet sich die Liste, und die Pfeiltasten nach oben und unten (sowie links und rechts) funktionieren, um das vorherige und das nächste Element auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert in gewissem Maße ohne JavaScript. Wir haben eine ähnliche Steuerung zu unserer benutzerdefinierten Steuerung erstellt, die funktioniert, selbst wenn das JavaScript ausfällt. Sieht nach einer großartigen Lösung aus, richtig? Nun, nicht 100%. Es funktioniert mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es scheint sinnvoller zu sein, Webstandards als Grundlage für benutzerdefinierte Steuerungen zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unsere Steuerung bietet jedoch nicht die gleiche Funktionalität wie eine `<select>`-Steuerung, die von Haus aus nativ ist.

Auf der positiven Seite ist diese Steuerung vollständig zugänglich für einen Screenreader und vollständig navigierbar über die Tastatur. Diese Steuerung ist jedoch kein {{htmlelement('select')}}-Ersatz. Es gibt Funktionalitäten, die unterschiedlich sind und/oder fehlen. Wenn beispielsweise alle vier Pfeile durch die Optionen navigieren, führt das Klicken auf den Pfeil nach unten, wenn der Benutzer sich auf dem letzten Button befindet, zurück zum ersten Button; es stoppt nicht oben und unten in der Optionsliste wie eine `<select>`-Steuerung.

Wir überlassen das Hinzufügen dieser fehlenden Funktionalitäten als Übung für die Leser.

## Fazit

Wir haben alle Grundlagen zur Erstellung einer benutzerdefinierten Formularsteuerung gesehen, aber wie Sie sehen können, ist es nicht trivial, dies zu tun. Bevor Sie Ihre eigene maßgeschneiderte Steuerung erstellen, sollten Sie darüber nachdenken, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen können. Wenn Sie eine benutzerdefinierte Steuerung erstellen müssen, ist es oft einfacher, sich auf Drittanbieter-Bibliotheken zu verlassen, anstatt Ihre eigene zu erstellen. Aber wenn Sie Ihre eigene erstellen, vorhandene Elemente modifizieren oder ein Framework verwenden, um eine vorgefertigte Steuerung zu implementieren, denken Sie daran, dass die Erstellung einer benutzerfreundlichen und zugänglichen Formularsteuerung komplizierter ist, als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihren eigenen Code schreiben:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerungen über Radio-Buttons, Ihr eigenes JavaScript oder mit einer 3rd Party Bibliothek erstellen, stellen Sie sicher, dass sie zugänglich und zukunftssicher sind; das heißt, es muss besser mit einer Vielzahl von Browsern arbeiten können, deren Kompatibilität mit den verwendeten Webstandards variiert. Viel Spaß!

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
- [Zusätzliche Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
- [Stil von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

### Erweiterte Themen

- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
- **Wie man benutzerdefinierte Formularsteuerungen erstellt**
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
