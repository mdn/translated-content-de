---
title: So bauen Sie benutzerdefinierte Formularsteuerungen
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Es gibt einige Fälle, in denen die verfügbaren nativen HTML-Formularsteuerungen möglicherweise nicht ausreichen. Zum Beispiel, wenn Sie [fortgeschrittenes Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) für einige Steuerungen wie das {{HTMLElement("select")}}-Element durchführen müssen oder wenn Sie benutzerdefinierte Verhaltensweisen bereitstellen möchten, sollten Sie erwägen, Ihre eigenen Steuerelemente zu erstellen.

In diesem Artikel besprechen wir, wie man ein benutzerdefiniertes Steuerelement erstellt. Dazu werden wir an einem Beispiel arbeiten: dem Nachbau des {{HTMLElement("select")}}-Elements. Wir werden auch diskutieren, wie, wann und ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen, und was zu beachten ist, wenn der Bau eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir werden uns darauf konzentrieren, das Steuerelement zu erstellen, nicht darauf, wie man den Code generisch und wiederverwendbar macht; das würde einige nicht triviale JavaScript-Codes und DOM-Manipulationen in einem unbekannten Kontext erfordern, und das fällt nicht in den Umfang dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie genau herausfinden, was Sie wollen. Dies wird Ihnen wertvolle Zeit sparen. Insbesondere ist es wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Dazu ist es gut, mit einem bestehenden Steuerelement zu beginnen, dessen Zustände und Verhalten gut bekannt sind, damit Sie diese so weit wie möglich nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element neu erstellen. Hier ist das Ergebnis, das wir erreichen möchten:

![Die drei Zustände einer Auswahlbox](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

Was das Verhalten betrifft, so erstellen wir ein natives HTML-Element neu. Daher sollte es die gleichen Verhaltensweisen und Semantiken wie das native HTML-Element haben. Wir verlangen, dass unser Steuerelement mit einer Maus sowie mit einer Tastatur benutzbar und für einen Screenreader verständlich ist, genau wie jedes native Steuerelement. Beginnen wir damit, zu definieren, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im normalen Zustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Benutzer irgendwo außerhalb davon klickt.
- das Steuerelement aktiv war und der Benutzer den Fokus mit der Tastatur auf eine andere Steuerung verschiebt (z.B. die <kbd>Tab</kbd>-Taste).

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tabulatortaste drückt und es den Fokus erhält.
- das Steuerelement sich im offenen Zustand befand und der Benutzer darauf klickt.

**Das Steuerelement befindet sich im offenen Zustand, wenn:**

- das Steuerelement sich in einem anderen Zustand als offen befindet und der Benutzer darauf klickt.

Sobald wir wissen, wie man die Zustände ändert, ist es wichtig zu definieren, wie man den Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, während das Steuerelement im offenen Zustand ist.
- der Benutzer die Pfeiltasten nach oben oder unten drückt, während das Steuerelement im aktiven Zustand ist.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Pfeiltaste nach oben drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Pfeiltaste nach unten drückt, wenn die letzte Option ausgewählt ist.

Schließlich definieren wir, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn die Maus über eine Option bewegt wird, wird die Option hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren normalen Zustand zurück.

Für die Zwecke unseres Beispiels hören wir hier auf; wenn Sie jedoch aufmerksam sind, werden Sie feststellen, dass einige Verhaltensweisen fehlen. Zum Beispiel, was glauben Sie, wird passieren, wenn der Benutzer die Tabulatortaste drückt, während das Steuerelement im offenen Zustand ist? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich zu sein, aber die Tatsache ist, weil es nicht in unseren Spezifikationen definiert ist, ist es sehr einfach, dieses Verhalten zu übersehen. Dies gilt insbesondere in einem Teamumfeld, wenn die Personen, die das Verhalten der Steuerung entwerfen, andere sind als diejenigen, die es implementieren.

Ein weiteres amüsantes Beispiel: Was wird passieren, wenn der Benutzer die Pfeiltasten nach oben oder unten drückt, während das Steuerelement im offenen Zustand ist? Dieses ist ein wenig kniffliger. Wenn Sie der Meinung sind, dass der aktive Zustand und der offene Zustand völlig unterschiedlich sind, lautet die Antwort erneut "es wird nichts passieren", da wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie der Meinung sind, dass sich der aktive Zustand und der offene Zustand ein wenig überschneiden, könnte sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, erneut weil wir keine Tastaturinteraktionen über Optionen definiert haben, wenn das Steuerelement im geöffneten Zustand ist (wir haben nur definiert, was passieren soll, wenn die Steuerung geöffnet ist, aber nichts danach).

Wir müssen etwas weiterdenken: Was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt eine offene Auswahl. Denken Sie daran, wenn Sie die gleiche Funktionalität wie das vorhandene native {{htmlelement('select')}} bereitstellen möchten, sollte es sich genauso verhalten wie die Auswahl für alle Benutzer, von der Tastatur über die Maus bis hin zu Touchscreens und Screenreadern und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, also werden wir damit umgehen, aber es kann ein echtes Problem für exotische neue Steuerungen sein. Bei standardisierten Elementen, zu denen das {{htmlelement('select')}} gehört, haben die Autoren der Spezifikation eine außergewöhnlich lange Zeit damit verbracht, alle Interaktionen für jede Verwendungsmöglichkeit mit jedem Eingabegerät zu spezifizieren. Neue Steuerungen zu erstellen ist nicht so einfach, insbesondere wenn Sie etwas erstellen, das noch nie zuvor gemacht wurde und daher niemand die geringste Ahnung hat, was die erwarteten Verhaltensweisen und Interaktionen sind. Zumindest wurde die Auswahl schon früher gemacht, also wissen wir, wie sie sich verhalten sollte!

Neue Interaktionen zu entwerfen ist im Allgemeinen nur für sehr große Branchenführer eine Option, die genug Reichweite haben, dass eine von ihnen erschaffene Interaktion zu einem Standard werden kann. Apple beispielsweise führte das Scrollrad mit dem iPod im Jahr 2001 ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät einzuführen, etwas, das den meisten Geräteherstellern nicht möglich ist.

Es ist besser, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es wichtig, Zeit in der Designphase zu verbringen; wenn Sie ein Verhalten schlecht definieren oder vergessen, eines zu definieren, wird es sehr schwer sein, es neu zu definieren, sobald sich die Benutzer daran gewöhnt haben. Wenn Sie Zweifel haben, fragen Sie nach den Meinungen anderer, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie die folgenden hilfreichen Ressourcen überprüfen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Außerdem gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Optionen zu sehen (dies entspricht dem Klicken auf das {{HTMLElement("select")}}-Element mit einer Maus). Dies wird unter Windows mit <kbd>Alt</kbd> + <kbd>Abwärts</kbd> erreicht. Wir haben dies in unserem Beispiel nicht implementiert, aber es wäre einfach zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einiger) Semantiken

Nun, da die grundlegende Funktionalität der Steuerung entschieden wurde, ist es an der Zeit, mit dem Aufbau zu beginnen. Der erste Schritt besteht darin, die HTML-Struktur zu definieren und ihr einige grundlegende Semantiken zu geben. Hier ist, was wir benötigen, um ein {{HTMLElement("select")}}-Element neu zu erstellen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich darunterliegenden HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine starke HTML-Struktur binden, damit wir später Implementierungsänderungen vornehmen können, ohne den Code zu brechen, der die Steuerung verwendet. Was wäre zum Beispiel, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand "sieht" der Screenreader-Benutzer nur eine ungeordnete Liste. Wir werden in Kürze ARIA-Semantiken hinzufügen.

## Erstellung von Aussehen und Verhalten mit CSS

Jetzt, da wir eine Struktur haben, können wir mit dem Design unserer Steuerung beginnen. Der ganze Sinn, diese benutzerdefinierte Steuerung zu erstellen, besteht darin, sie genau so zu gestalten, wie wir es wünschen. Zu diesem Zweck werden wir unsere CSS-Arbeit in zwei Teile aufteilen: Der erste Teil sind die CSS-Regeln, die absolut notwendig sind, um unsere Steuerung wie ein {{HTMLElement("select")}}-Element agieren zu lassen, und der zweite Teil besteht aus den aufwendigen Stilen, um es so aussehen zu lassen, wie wir es möchten.

### Erforderliche Stile

Die erforderlichen Stile sind diejenigen, die notwendig sind, um die drei Zustände unserer Steuerung zu handhaben.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Aussehen und Verhalten unserer Steuerung im aktiven Zustand zu definieren. Da unsere Steuerung fokusfähig ist, ergänzen wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudo-Klasse, um sicherzustellen, dass sie sich gleich verhalten.

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

Wir benötigen eine zusätzliche Klasse, um zu handhaben, wenn die Liste der Optionen ausgeblendet ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand zu verwalten, die nicht genau übereinstimmen.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way;
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir könnten auch `transform: scale(1, 0)` verwenden, um der Optionenliste keine Höhe und volle Breite zu geben.

### Verschönerung

Jetzt, da wir die grundlegende Funktionalität an Ort und Stelle haben, kann der Spaß beginnen. Das Folgende ist nur ein Beispiel für das, was möglich ist, und wird dem Screenshot am Anfang dieses Artikels entsprechen. Sie sollten jedoch frei experimentieren und sehen, was Sie sich einfallen lassen können.

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

Wir benötigen kein zusätzliches Element, um den Abwärtspfeil zu gestalten. Stattdessen verwenden wir das {{cssxref("::after")}}-Pseudo-Element. Es könnte auch mit einem einfachen Hintergrundbild auf der `select`-Klasse implementiert werden.

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

Kümmern wir uns nun um die Gestaltung der Optionsliste:

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

Für die Optionen benötigen wir eine `highlight`-Klasse, um den Wert identifizieren zu können, den der Benutzer auswählen wird (oder ausgewählt hat).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

Hier ist also das Ergebnis mit unseren drei Zuständen ([den Quellcode finden Sie hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

#### Basiszustand

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
  font-family: Verdana, Arial, sans-serif;

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

## Zum Leben erwecken Ihrer Steuerung mit JavaScript

Jetzt, da unser Design und unsere Struktur fertig sind, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich funktionsfähig zu machen.

> [!WARNING]
> Der folgende Code ist lehrreich und sollte nicht unverändert in der Produktion verwendet werden. Er ist weder zukunftssicher noch funktioniert er mit älteren Browsern. Es gibt auch redundante Teile, die im Produktivcode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig, sich daran zu erinnern, dass **JavaScript im Browser eine unzuverlässige Technologie** ist. Benutzerdefinierte Steuerelemente verlassen sich auf JavaScript, um alles zusammenzuführen. Es gibt jedoch Fälle, in denen JavaScript im Browser nicht in der Lage ist, ausgeführt zu werden:

- Der Benutzer hat JavaScript deaktiviert: Dies ist ungewöhnlich; sehr wenige Menschen deaktivieren heutzutage JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, in der das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Sie sollten diese Möglichkeit immer in Betracht ziehen.
- Das Skript steht in Konflikt mit einem Drittanbieter-Skript: Dies kann mit Tracking-Skripts oder mit Lesezeichen-Tools passieren, die der Benutzer verwendet.
- Das Skript steht in Konflikt mit oder wird von einer Browsererweiterung beeinflusst (wie z.B. Firefox' [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) Erweiterung oder Chromes [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) Erweiterung).
- Der Benutzer verwendet einen alten Browser, und eine der von Ihnen benötigten Funktionen wird nicht unterstützt: Dies wird häufig vorkommen, wenn Sie fortschrittliche APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Aufgrund dieser Risiken ist es wirklich wichtig, ernsthaft zu überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen in Betracht ziehen und das Wesentliche in unserem Beispiel abdecken (eine vollständige Diskussion zur Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie daran, es ist wichtig, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht ausgeführt wird, zeigen wir als Fallback ein standardmäßiges {{HTMLElement("select")}}-Element an. Wir integrieren sowohl unser Steuerelement als auch das {{HTMLElement("select")}}; welches angezeigt wird, hängt von der Klasse des Body-Elements ab, wobei die Klasse des Body-Elements vom Skript aktualisiert wird, das die Steuerung zum Funktionieren bringt, wenn es erfolgreich geladen wird.

Um dies zu erreichen, benötigen wir zwei Dinge:

Erstens müssen wir ein reguläres {{HTMLElement("select")}}-Element vor jeder Instanz unseres benutzerdefinierten Steuerelements hinzufügen. Es gibt einen Vorteil, "zusätzlich" diese Auswahl zu haben, selbst wenn JavaScript wie erhofft funktioniert: Wir werden diese Auswahl verwenden, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit dem Rest unserer Formulardaten zu senden. Wir werden dies später genauer besprechen.

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

Zweitens benötigen wir zwei neue Klassen, um das nicht benötigte Element auszublenden: Wir verstecken visuell das benutzerdefinierte Steuerelement, wenn unser Skript nicht ausgeführt wird, oder das echte {{HTMLElement("select")}}-Element, wenn es ausgeführt wird. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement ausblendet.

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

Nun benötigen wir einen JavaScript-Schalter, um zu bestimmen, ob das Skript ausgeführt wird oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn unser Skript zum Seitenladezeitpunkt ausgeführt wird, entfernt es die `no-widget`-Klasse und fügt die `widget`-Klasse hinzu, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und der benutzerdefinierten Steuerung gewechselt wird.

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
window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});
```

{{EmbedLiveSample("With_JS",120,130)}}

> [!NOTE]
> Wenn Sie Ihren Code wirklich generisch und wiederverwendbar machen möchten, anstatt einen Klassenswitch zu machen, ist es viel besser, nur die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente auszublenden und den DOM-Baum, der das benutzerdefinierte Steuerelement darstellt, dynamisch nach jedem {{HTMLElement("select")}}-Element auf der Seite hinzuzufügen.

### Die Arbeit erleichtern

Im Code, den wir gleich erstellen werden, verwenden wir die Standard-JavaScript- und DOM-APIs, um die ganze Arbeit zu erledigen, die wir benötigen. Die Funktionen, die wir verwenden möchten, sind die folgenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Erstellen von Ereignisrückrufen

Die Grundlagen sind gelegt. Wir können jetzt alle Funktionen definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserer Steuerung interagiert.

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

Als nächstes binden wir diese Funktionen an die entsprechenden Ereignisse:

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

Zu diesem Zeitpunkt wird unsere Steuerung ihren Zustand gemäß unserem Design ändern, aber ihr Wert wird noch nicht aktualisiert. Das erledigen wir als nächstes.

#### Live-Beispiel

Sehen Sie sich den [vollständigen Quellcode an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_3).

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

### Den Wert des Steuerelements handhaben

Jetzt, da unsere Steuerung funktioniert, müssen wir Code hinzufügen, um ihren Wert entsprechend der Benutzereingabe zu aktualisieren und es ermöglichen, den Wert zusammen mit den Formulardaten zu senden.

Der einfachste Weg, dies zu tun, ist, unter der Haube eine native Steuerung zu verwenden. Eine solche Steuerung wird den Wert mit allen integrierten Steuerelementen des Browsers verfolgen, und der Wert wird wie gewohnt gesendet, wenn ein Formular gesendet wird. Es macht keinen Sinn, das Rad neu zu erfinden, wenn wir all dies für uns erledigt haben können.

Wie zuvor gesehen, verwenden wir bereits eine native Auswahlsteuerung als Fallback aus Barrierefreiheitsgründen; wir können ihren Wert mit dem unserer benutzerdefinierten Steuerung synchronisieren:

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

Mit diesen beiden Funktionen können wir die nativen Steuerungen an die benutzerdefinierten binden:

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

In dem obigen Code ist es wichtig zu beachten, dass die Verwendung des [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft notwendig ist, um sicherzustellen, dass die native Steuerung niemals den Fokus erhält, und um sicherzustellen, dass unsere benutzerdefinierte Steuerung den Fokus erhält, wenn der Benutzer die Tastatur oder die Maus verwendet.

Damit sind wir fertig!

#### Live-Beispiel

Sehen Sie sich den [Quellcode hier](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4) an.

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

## Barrierefreiheit sicherstellen

Wir haben etwas gebaut, das funktioniert, und obwohl es weit von einem voll ausgestatteten Auswahlkasten entfernt ist, funktioniert es gut. Aber was wir getan haben, ist nichts weiter als mit dem DOM zu spielen. Es hat keinen wirklichen Semantik, und obwohl es wie ein Auswahlkasten aussieht, ist es aus Sicht des Browsers keiner, sodass unterstützende Technologien nicht in der Lage sein werden zu verstehen, dass es sich um einen Auswahlkasten handelt. Kurz gesagt, dieser hübsche neue Auswahlkasten ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung, und sie heißt [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für "Accessible Rich Internet Application", und es ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die speziell für das entwickelt wurde, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerungen zugänglich machen. Sie ist im Wesentlichen eine Reihe von Attributen, die HTML erweitern, damit wir Rollen, Zustände und Eigenschaften besser beschreiben können, als wäre das von uns entworfene Element das native Element, als das es sich ausgeben möchte. Die Verwendung dieser Attribute kann durch Bearbeitung des HTML-Markups erfolgen. Wir aktualisieren auch die ARIA-Attribute über JavaScript, wenn der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel verwenden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle. Es ist eine "komposite Rolle", was bedeutet, dass Elemente mit dieser Rolle erwarten, dass sie Kinder haben, die jeweils eine bestimmte Rolle haben (in diesem Fall mindestens ein Kind mit der `option`-Rolle).

Es ist auch erwähnenswert, dass ARIA-Rollen definiert, die standardmäßig auf standard markup-HTML angewendet werden. Beispielsweise entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die `listbox`-Rolle unserer Steuerung die `list`-Rolle des {{HTMLElement("ul")}}-Elements ersetzt. Dazu verwenden wir die Rolle `presentation`. Diese Rolle ist dafür konzipiert, uns anzuzeigen, dass ein Element keine besondere Bedeutung hat und ausschließlich zur Informationsanzeige verwendet wird. Wir werden sie auf unser {{HTMLElement("ul")}}-Element anwenden.

Um die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle zu unterstützen, müssen wir unser HTML wie folgt aktualisieren:

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
> Sowohl das `role`-Attribut als auch ein `class`-Attribut einzuschließen, ist nicht notwendig. Statt `.option` verwenden Sie `[role="option"]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attributs ist nicht genug. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Zustands- und Eigenschaftsattributen. Je mehr und besser Sie sie verwenden, desto besser wird Ihre Steuerung von unterstützenden Technologien verstanden. In unserem Fall werden wir uns auf ein Attribut beschränken: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu markieren, welche Option derzeit ausgewählt ist; dies ermöglicht unterstützenden Technologien, den Benutzer über die aktuelle Auswahl zu informieren. Wir werden es dynamisch mit JavaScript verwenden, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Zu diesem Zweck müssen wir unsere `updateValue()`-Funktion überarbeiten:

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

Es könnte einfacher erschienen sein, eine Hilfstechnologie auf die vom Bildschirm abgewandte Auswahl zu fokussieren und unsere stilisierte nicht zu berücksichtigen, aber dies ist keine barrierefreie Lösung. Bildschirmleser sind nicht nur für blinde Menschen; Menschen mit Sehschwäche und sogar perfekt sehende Menschen benutzen sie. Aus diesem Grund können Sie den Bildschirmleser nicht auf ein Element fokussieren, das sich vom Bildschirm abgewandt hat.

Nachfolgend finden Sie das Endergebnis all dieser Änderungen (Sie erhalten ein besseres Gefühl dafür, indem Sie es mit einer unterstützenden Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) ausprobieren).

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
  font-family: Verdana, Arial, sans-serif;

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

Wenn Sie weitermachen möchten, benötigt der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie versuchen können. Zwei Tipps, die Ihnen dabei helfen: Das erste Argument für alle unsere Funktionen ist dasselbe, was bedeutet, dass diese Funktionen denselben Kontext benötigen. Es wäre klug, ein Objekt zu erstellen, um diesen Kontext zu teilen.

## Ein alternativer Ansatz: Verwendung von Radiobuttons

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht-semantischem HTML, CSS und JavaScript neu erfunden. Diese Auswahl hat eine Option aus einer begrenzten Anzahl von Optionen ausgewählt, was die gleiche Funktionalität einer gleichnamigen Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons ist.

Wir könnten dies daher neu erfinden, indem wir stattdessen Radiobuttons verwenden; schauen wir uns diese Option an.

Wir können mit einer vollständig semantischen, zugänglichen, ungeordneten Liste von {{htmlelement('input/radio', 'radio')}}-Buttons beginnen, die mit einem zugehörigen {{htmlelement('label')}} versehen ist und die gesamte Gruppe mit einem semantisch geeigneten {{htmlelement('fieldset')}} und {{htmlelement('legend')}} Paar bezeichnet.

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

Wir werden eine kleine Gestaltung der Radiobutton-Liste durchführen (nicht die Legende/das Feldset), um sie ein wenig wie das frühere Beispiel aussehen zu lassen, nur um zu zeigen, dass es machbar ist:

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

Ohne JavaScript und mit ein wenig CSS können wir die Liste der Radiobuttons so stylen, dass nur das geprüfte Element angezeigt wird. Wenn der Fokus innerhalb des `<ul>` im `<fieldset>` liegt, öffnet sich die Liste, und die Aufwärts- und Abwärtspfeile (sowie links und rechts) arbeiten, um das vorherige und nächste Element auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert, in gewissem Maße, ohne JavaScript. Wir haben eine ähnliche Steuerung zu unserer benutzerdefinierten Steuerung erstellt, die sogar dann funktioniert, wenn das JavaScript versagt. Klingt nach einer großartigen Lösung, richtig? Nun, nicht zu 100%. Es funktioniert mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es scheint wahrscheinlich sinnvoller, Webstandards als Grundlage für benutzerdefinierte Steuerungen zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unsere Steuerung hat jedoch nicht die gleiche Funktionalität wie ein `<select>` von Haus aus.

Auf der positiven Seite ist diese Steuerung vollständig zugänglich für einen Bildschirmleser und vollständig über die Tastatur navigierbar. Diese Steuerung ist jedoch kein Ersatz für ein {{htmlelement('select')}}. Es fehlt oder unterscheidet sich an Funktionalität. Zum Beispiel navigieren alle vier Pfeile durch die Optionen, aber das Klicken des Abwärtspfeils, wenn der Benutzer auf den letzten Button ist, bringt ihn zum ersten Button; es hält nicht am oberen und unteren Ende der Optionsliste an, wie es ein `<select>` tut.

Wir überlassen es Ihnen als Übung, diese fehlende Funktionalität hinzuzufügen.

## Fazit

Wir haben die Grundlagen des Erstellens einer benutzerdefinierten Formularsteuerung gesehen, aber wie Sie sehen können, ist es nicht einfach, dies zu tun. Bevor Sie eine eigene, angepasste Steuerung erstellen, sollten Sie überlegen, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen könnten. Wenn Sie eine benutzerdefinierte Steuerung erstellen müssen, ist es oft einfacher, sich auf Drittanbieter-Bibliotheken zu verlassen, anstatt Ihre eigene zu erstellen. Aber wenn Sie Ihre eigene erstellen, vorhandene Elemente modifizieren oder ein Framework verwenden, um eine vorgefertigte Steuerung zu implementieren, denken Sie daran, dass das Erstellen einer benutzbaren und zugänglichen Formularsteuerung komplizierter ist, als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihre eigene kodieren:

- [jQuery UI](https://jqueryui.com/)
- [AXE zugängliche benutzerdefinierte Dropdown-Auswahlen](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerungen über Radiobuttons, Ihr eigenes JavaScript oder eine Drittanbieterbibliothek erstellen, stellen Sie sicher, dass sie zugänglich und zukunftssicher ist; das heißt, sie muss in der Lage sein, besser mit einer Vielzahl von Browsern zu arbeiten, deren Kompatibilitäten mit den Webstandards, die sie verwenden, variieren. Viel Spaß!
