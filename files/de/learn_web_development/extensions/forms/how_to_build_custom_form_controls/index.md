---
title: Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Es gibt einige Fälle, in denen die verfügbaren nativen HTML-Formularsteuerelemente nicht ausreichen. Beispielsweise, wenn Sie eine [fortgeschrittene Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) auf einige Steuerelemente wie das {{HTMLElement("select")}}-Element vornehmen müssen, oder wenn Sie benutzerdefinierte Verhaltensweisen bereitstellen möchten, sollten Sie in Betracht ziehen, Ihre eigenen Steuerelemente zu erstellen.

In diesem Artikel werden wir diskutieren, wie man ein benutzerdefiniertes Steuerelement erstellt. Dazu werden wir mit einem Beispiel arbeiten: dem Nachbau des {{HTMLElement("select")}}-Elements. Wir werden auch erörtern, wie, wann und ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen, und was zu beachten ist, wenn der Bau eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns darauf, das Steuerelement zu erstellen, nicht darauf, wie man den Code generisch und wiederverwendbar macht; das würde einigen nicht trivialen JavaScript-Code und DOM-Manipulationen in einem unbekannten Kontext erfordern und liegt außerhalb des Umfangs dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie sich genau überlegen, was Sie möchten. Dies spart wertvolle Zeit. Insbesondere ist es wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Dafür ist es gut, mit einem vorhandenen Steuerelement zu beginnen, dessen Zustände und Verhalten bekannt sind, damit Sie diese so weit wie möglich nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element nachbauen. Hier ist das Ergebnis, das wir erreichen wollen:

![Die drei Zustände einer Auswahlliste](custom-select.png)

Dieses Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links), den aktiven Zustand (in der Mitte) und den geöffneten Zustand (rechts).

In Bezug auf das Verhalten reproduzieren wir ein natives HTML-Element. Daher sollte es das gleiche Verhalten und die gleiche Semantik wie das native HTML-Element haben. Wir erfordern, dass unser Steuerelement sowohl mit der Maus als auch mit der Tastatur nutzbar ist und für einen Screenreader verständlich ist, genau wie jedes native Steuerelement. Lassen Sie uns damit beginnen, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im Normalzustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Benutzer irgendwo außerhalb davon klickt.
- das Steuerelement aktiv war und der Benutzer den Fokus mit der Tastatur zu einem anderen Steuerelement verschiebt (z.B. die <kbd>Tab</kbd>-Taste).

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tab-Taste drückt und es den Fokus erhält.
- das Steuerelement im geöffneten Zustand war und der Benutzer darauf klickt.

**Das Steuerelement befindet sich im geöffneten Zustand, wenn:**

- das Steuerelement in einem anderen Zustand als geöffnet ist und der Benutzer darauf klickt.

Sobald wir wissen, wie man den Zustand ändert, ist es wichtig zu definieren, wie man den Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, wenn das Steuerelement im geöffneten Zustand ist.
- der Benutzer die Aufwärts- oder Abwärtspfeiltasten drückt, wenn das Steuerelement im aktiven Zustand ist.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Aufwärtspfeiltaste drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Abwärtspfeiltaste drückt, wenn die letzte Option ausgewählt ist.

Schließlich wollen wir definieren, wie die Optionen des Steuerelements sich verhalten werden:

- Wenn das Steuerelement geöffnet ist, wird die ausgewählte Option hervorgehoben
- Wenn die Maus über einer Option ist, wird die Option hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren Normalzustand zurück

Für die Zwecke unseres Beispiels werden wir hier aufhören; jedoch, wenn Sie ein aufmerksamer Leser sind, werden Sie bemerken, dass einige Verhaltensweisen fehlen. Zum Beispiel, was denken Sie, passiert, wenn der Benutzer die Tab-Taste drückt, während das Steuerelement im geöffneten Zustand ist? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich, aber die Tatsache ist, weil es nicht in unseren Spezifikationen definiert ist, ist es sehr leicht, dieses Verhalten zu übersehen. Dies gilt insbesondere in einer Teamumgebung, wenn die Personen, die das Verhalten des Steuerelements entwerfen, andere sind als diejenigen, die es implementieren.

Ein weiteres interessantes Beispiel: Was wird passieren, wenn der Benutzer die Aufwärts- oder Abwärtspfeiltasten drückt, während das Steuerelement im geöffneten Zustand ist? Dieses ist etwas kniffliger. Wenn Sie davon ausgehen, dass der aktive Zustand und der offene Zustand komplett unterschiedlich sind, passiert wieder "nichts", weil wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie der Ansicht sind, dass der aktive Zustand und der geöffnete Zustand etwas überlappen, dann könnte sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, wiederum weil wir keine Tastaturinteraktionen über Optionen definiert haben, wenn das Steuerelement im geöffneten Zustand ist (wir haben nur definiert, was passieren soll, wenn das Steuerelement geöffnet ist, aber nichts danach).

Wir müssen ein bisschen weiter denken: Was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt eine geöffnete Auswahlliste. Denken Sie daran, wenn Sie die gleiche Funktionalität wie das bestehende native {{htmlelement('select')}} bereitstellen wollen, sollte es sich für alle Benutzer wie das Select verhalten, von der Tastatur bis zur Maus bis zum Touchscreen bis zum Screenreader und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie handhaben, aber es kann ein echtes Problem für exotische neue Steuerelemente sein. Bei standardisierten Elementen, zu denen auch {{htmlelement('select')}} gehört, haben die Autoren der Spezifikation übermäßig viel Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall für jedes Eingabegerät zu spezifizieren. Neue Steuerelemente zu erstellen, ist nicht so einfach, besonders wenn Sie etwas erstellen, was es vorher noch nicht gab, und daher hat niemand die geringste Ahnung, was die erwarteten Verhaltensweisen und Interaktionen sind. Zumindest wurde Select bereits gemacht, also wissen wir, wie es sich verhalten sollte!

Neue Interaktionen zu entwerfen, ist im Allgemeinen nur für sehr große Industrieplayer möglich, die genug Reichweite haben, dass eine Interaktion, die sie erzeugen, zu einem Standard werden kann. Zum Beispiel führte Apple das Scrollrad mit dem iPod im Jahr 2001 ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art und Weise einzuführen, mit einem Gerät zu interagieren, etwas, das die meisten Gerätefirmen nicht tun können.

Es ist am besten, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es von entscheidender Bedeutung, in der Designphase Zeit zu verbringen; wenn Sie ein Verhalten schlecht definieren oder eines zu definieren vergessen, wird es sehr schwierig sein, es neu zu definieren, sobald die Benutzer sich daran gewöhnt haben. Wenn Sie Zweifel haben, fragen Sie nach den Meinungen anderer und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://de.wikipedia.org/wiki/Usability_Testing). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Abschnitt von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Außerdem gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Auswahlmöglichkeiten zu betrachten (dies entspricht dem Klicken auf das {{HTMLElement("select")}}-Element mit der Maus). Dies wird mit <kbd>Alt</kbd> + <kbd>Abwärts</kbd> auf Windows erreicht. Wir haben dies in unserem Beispiel nicht implementiert, aber es wäre leicht zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einige) Semantik

Da die grundlegende Funktionalität des Steuerelements festgelegt ist, ist es an der Zeit, mit dem Aufbau zu beginnen. Der erste Schritt besteht darin, die HTML-Struktur zu definieren und ihr etwas Grundsemantik zu geben. Hier ist, was wir brauchen, um ein {{HTMLElement("select")}}-Element nachzubilden:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jede relevante Stelle unabhängig von den tatsächlich verwendeten HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine feste HTML-Struktur binden, sodass wir spätere Implementierungsänderungen ohne das Brechen von Code, der das Steuerelement verwendet, durchführen können. Was ist zum Beispiel, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand "sieht" der Screenreader-Benutzer nur eine ungeordnete Liste. Wir werden später ARIA-Semantik hinzufügen.

## Erstellen des Aussehens und Verhaltens mit CSS

Da wir nun eine Struktur haben, können wir mit dem Design unseres Steuerelements beginnen. Der ganze Zweck des Aufbaus dieses benutzerdefinierten Steuerelements ist es, es genau so stylen zu können, wie wir wollen. Dazu werden wir unsere CSS-Arbeit in zwei Teile aufteilen: Der erste Teil wird die CSS-Regeln umfassen, die absolut notwendig sind, um unser Steuerelement wie ein {{HTMLElement("select")}}-Element zu verhalten, und der zweite Teil wird aus den schicken Stilen bestehen, die verwendet werden, um es so aussehen zu lassen, wie wir wollen.

### Benötigte Stile

Die benötigten Stile sind diejenigen, die notwendig sind, um die drei Zustände unseres Steuerelements zu verwalten.

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

Wir brauchen eine zusätzliche Klasse `active`, um das Aussehen und Verhalten unseres Steuerelements zu definieren, wenn es im aktiven Zustand ist. Da unser Steuerelement fokussierbar ist, ergänzen wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudo-Klasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Nun, lassen Sie uns die Liste der Optionen handhaben:

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

Wir benötigen eine zusätzliche Klasse, um zu handhaben, wann die Liste der Optionen versteckt ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand zu verwalten, die nicht exakt übereinstimmen.

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

Da wir nun die grundlegende Funktionalität an Ort und Stelle haben, kann der Spaß beginnen. Das Folgende ist nur ein Beispiel dafür, was möglich ist, und wird dem Screenshot am Anfang dieses Artikels entsprechen. Sie sollten jedoch frei experimentieren und sehen, was Sie sich ausdenken können.

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

Als nächstes gestalten wir die Liste der Optionen:

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

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert identifizieren zu können, den der Benutzer auswählen wird (oder ausgewählt hat).

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

## Ihren Steuerelement mit JavaScript zum Leben erwecken

Da unser Design und unsere Struktur bereit sind, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich zum Laufen zu bringen.

> [!WARNING]
> Der folgende Code ist ein Lehr-Code, kein Produktionscode und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher noch wird er auf älteren Browsern funktionieren. Er hat außerdem redundante Teile, die in Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor Sie beginnen, ist es wichtig sich daran zu erinnern, dass **JavaScript im Browser eine unzuverlässige Technologie ist**. Benutzerdefinierte Steuerelemente verlassen sich auf JavaScript, um alles zusammenzuführen. Es gibt jedoch Fälle, in denen JavaScript im Browser nicht ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Dies ist ungewöhnlich; sehr wenige Leute deaktivieren heutzutage JavaScript.
- Das Skript wurde nicht geladen: Das ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, wo das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Sie sollten diese Möglichkeit immer in Betracht ziehen.
- Das Skript steht in Konflikt mit einem Drittanbieter-Skript: Dies kann mit Tracking-Skripten oder Bookmarklets passieren, die der Benutzer verwendet.
- Das Skript steht im Konflikt mit oder wird von einer Browser-Erweiterung beeinflusst (wie z.B. Firefox's [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) Erweiterung oder Chromes [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) Erweiterung).
- Der Benutzer verwendet einen älteren Browser, und eine der von Ihnen benötigten Funktionen wird nicht unterstützt: Dies wird häufig vorkommen, wenn Sie hochmoderne APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, analysiert und ausgeführt wurde.

Aufgrund dieser Risiken ist es extrem wichtig, ernsthaft zu überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir werden über Optionen sprechen, die in Betracht gezogen werden müssen, und die Grundlagen in unserem Beispiel abdecken (eine vollständige Diskussion über die Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie einfach daran, es ist entscheidend, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht ausgeführt wird, werden wir auf die Anzeige eines Standard-{{HTMLElement("select")}}-Elements zurückfallen. Wir fügen unser Steuerelement und das {{HTMLElement("select")}}-Element hinzu; welches angezeigt wird, hängt von der Klasse des Body-Elements ab, wobei die Klasse des Body-Elements von dem Skript aktualisiert wird, das das Steuerelement bei erfolgreichem Laden funktioniert.

Dazu benötigen wir zwei Dinge:

Erstens müssen wir ein reguläres {{HTMLElement("select")}}-Element vor jeder Instanz unseres benutzerdefinierten Steuerelements hinzufügen. Es hat einen Vorteil, dieses "zusätzliche" Select zu haben, selbst wenn unser JavaScript wie erhofft funktioniert: Wir werden dieses Select verwenden, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit den restlichen Formulardaten zu senden. Wir werden dies später ausführlicher besprechen.

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

Zweitens benötigen wir zwei neue Klassen, um das nicht benötigte Element zu verstecken: wir verstecken das benutzerdefinierte Steuerelement visuell, wenn unser Skript nicht läuft, oder das "echte" {{HTMLElement("select")}}-Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement versteckt.

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

Dieses CSS versteckt eines der Elemente visuell, ist jedoch weiterhin für Screenreader verfügbar.

Nun brauchen wir einen JavaScript-Schalter, um zu bestimmen, ob das Skript läuft oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn zu Ladezeit unserer Skripts unser Skript läuft, wird es die Klasse `no-widget` entfernen und die Klasse `widget` hinzufügen, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements vertauscht wird.

```js
document.body.classList.remove("no-widget");
document.body.classList.add("widget");
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
const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");
```

{{EmbedLiveSample("With_JS",120,130)}}

> [!NOTE]
> Wenn Sie Ihren Code wirklich generisch und wiederverwendbar machen möchten, ist es anstatt eines Klassenwechsels viel besser, einfach die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente zu verstecken, und den DOM-Baum, der das benutzerdefinierte Steuerelement darstellt, dynamisch nach jedem {{HTMLElement("select")}}-Element auf der Seite hinzuzufügen.

### Die Aufgabe erleichtern

Im Code, den wir erstellen werden, verwenden wir die Standard-JavaScript- und DOM-APIs, um die gesamte Arbeit zu erledigen, die wir benötigen. Die Funktionen, die wir verwenden möchten, sind die folgenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Event-Rückrufe erstellen

Die Grundlagen sind erledigt. Jetzt können wir alle Funktionen definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Steuerelement interagiert.

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

Als nächstes binden wir diese Funktionen an die entsprechenden Ereignisse:

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

  // Loose focus if the user hits `esc`
  select.addEventListener("keyup", (event) => {
    // deactivate on keyup of `esc`
    if (event.key === "Escape") {
      deactivateSelect(select);
    }
  });
});
```

An diesem Punkt ändert unser Steuerelement den Zustand entsprechend unserem Design, aber der Wert wird noch nicht aktualisiert. Das werden wir als Nächstes regeln.

#### Live Beispiel

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

### Umgang mit dem Wert des Steuerelements

Da unser Steuerelement nun funktioniert, müssen wir Code hinzufügen, um seinen Wert entsprechend der Benutzereingabe zu aktualisieren und es zu ermöglichen, den Wert zusammen mit den Formulardaten zu senden.

Der einfachste Weg, dies zu erreichen, ist die Verwendung eines nativen Steuerelements im Hintergrund. Ein solches Steuerelement verfolgt den Wert mit allen integrierten Steuerelementen, die vom Browser bereitgestellt werden, und der Wert wird wie gewohnt gesendet, wenn ein Formular eingereicht wird. Es besteht keine Notwendigkeit, das Rad neu zu erfinden, wenn wir all dies für uns erledigen können.

Wie bereits gesehen, verwenden wir bereits ein natives Select-Steuerelement als Fallback aus Gründen der Barrierefreiheit; wir können seinen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

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

In dem obigen Code ist es bemerkenswert, die Verwendung der [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft zu beachten. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Steuerelement niemals den Fokus erhält, und um sicherzustellen, dass unser benutzerdefiniertes Steuerelement den Fokus erhält, wenn der Benutzer seine Tastatur oder Maus verwendet.

Damit sind wir fertig!

#### Live Beispiel

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

## Barrierefreiheit herstellen

Wir haben etwas gebaut, das funktioniert, und obwohl wir weit von einem voll ausgestatteten Select-Feld entfernt sind, funktioniert es gut. Aber was wir getan haben, ist nichts weiter als ein bisschen Herumfummeln im DOM. Es hat keine echte Semantik, und selbst wenn es wie ein Select-Feld aussieht, ist es aus Sicht des Browsers keines, sodass unterstützende Technologien nicht verstehen können, dass es sich um ein Select-Feld handelt. Kurz gesagt, dieses hübsche neue Select-Feld ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung, die sich [ARIA](/de/docs/Web/Accessibility/ARIA) nennt. ARIA steht für "Accessible Rich Internet Application" und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die speziell für das gedacht ist, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerelemente barrierefrei zu machen. Es handelt sich im Grunde um einen Satz von Attributen, die HTML erweitern, sodass wir Rollen, Zustände und Eigenschaften besser beschreiben können, als ob das von uns entworfene Element das native Element wäre, für das es sich ausgibt. Die Verwendung dieser Attribute kann durch Bearbeiten des HTML-Markup erfolgen. Wir aktualisieren auch die ARIA-Attribute über JavaScript, wenn der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel werden wir die Rolle [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) verwenden. Es ist eine "zusammengesetzte Rolle", was bedeutet, dass Elemente mit dieser Rolle erwarten, dass sie Kinder haben, von denen jede eine spezifische Rolle hat (in diesem Fall mindestens ein Kind mit der `option`-Rolle).

Es ist ebenfalls erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf Standard-HTML-Markup angewendet werden. Zum Beispiel entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die `listbox`-Rolle unseres Steuerelements die `list`-Rolle des {{HTMLElement("ul")}}-Elements überschreibt. Dazu verwenden wir die Rolle `presentation`. Diese Rolle ist so konzipiert, dass wir angeben können, dass ein Element keine spezielle Bedeutung hat und nur zur Präsentation von Informationen verwendet wird. Wir werden es auf unser {{HTMLElement("ul")}}-Element anwenden.

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
> Es ist nicht notwendig, sowohl das `role`-Attribut als auch ein `class`-Attribut zu verwenden. Verwenden Sie anstelle von `.option` die `[role="option"]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attributs allein ist nicht ausreichend. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Zustands- und Eigenschaftsattributen. Je mehr und besser Sie diese verwenden, desto besser wird Ihr Steuerelement von unterstützenden Technologien verstanden. In unserem Fall werden wir unsere Nutzung auf ein Attribut beschränken: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu markieren, welche Option gerade ausgewählt ist; dies ermöglicht unterstützenden Technologien, dem Benutzer mitzuteilen, welche aktuelle Auswahl getroffen wurde. Wir verwenden es dynamisch mit JavaScript, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Hierzu müssen wir unsere `updateValue()`-Funktion überarbeiten:

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

Es könnte einfacher erscheinen, einem Screenreader zu erlauben, sich auf das außerhalb liegende Select zu konzentrieren und unser stilisiertes zu ignorieren, aber dies ist keine zugängliche Lösung. Screenreader sind nicht auf blinde Menschen beschränkt; Menschen mit Sehbehinderungen und sogar Menschen mit perfektem Sehvermögen verwenden sie auch. Aus diesem Grund können Sie den Screenreader nicht auf ein außerhalb liegendes Element fokussieren lassen.

Unten ist das endgültige Ergebnis all dieser Änderungen zu sehen (Sie erhalten ein besseres Gefühl dafür, indem Sie es mit einer assistierenden Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) ausprobieren).

#### Live Beispiel

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

Wenn Sie weitermachen möchten, benötigt der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie versuchen können. Zwei Hinweise, die Ihnen dabei helfen sollen: Das erste Argument für alle unsere Funktionen ist dasselbe, was bedeutet, dass diese Funktionen denselben Kontext benötigen. Es wäre klug, ein Objekt zu erstellen, um diesen Kontext zu teilen.

## Ein alternativer Ansatz: Verwenden von Optionsfeldern

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht-semantischem HTML, CSS und JavaScript neu erfunden. Dieses Select hat eine Option aus einer begrenzten Anzahl von Optionen ausgewählt, was die gleiche Funktionalität wie eine gleichnamige Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons hat.

Daher könnten wir dies anstelle von Radios neu erfinden; lassen Sie uns diese Option betrachten.

Wir können mit einer vollständig semantischen, barrierefreien, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Buttons mit einem zugehörigen {{htmlelement('label')}}, die die gesamte Gruppe mit einem semantisch geeigneten {{htmlelement('fieldset')}} und {{htmlelement('legend')}}-Paar kennzeichnet, beginnen.

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

Wir werden die Liste der Radiobuttons (nicht die Legende/Feldsatz) ein wenig stylen, um sie etwas wie das vorherige Beispiel aussehen zu lassen, nur um zu zeigen, dass dies möglich ist:

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

Ohne JavaScript und nur mit ein wenig CSS können wir die Liste der Radiobuttons so gestalten, dass nur der angekreuzte Artikel angezeigt wird. Wenn sich der Fokus innerhalb des `<ul>` in dem `<fieldset>` befindet, öffnet sich die Liste, und die Aufwärts- und Abwärtspfeile (und links und rechts) funktionieren, um die vorherigen und nächsten Elemente auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert, bis zu einem gewissen Grad, ohne JavaScript. Wir haben ein ähnliches Steuerelement wie unser benutzerdefiniertes Steuerelement erstellt, das auch dann funktioniert, wenn das JavaScript fehlschlägt. Sieht nach einer großartigen Lösung aus, oder? Nun, nicht zu 100%. Es funktioniert mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es scheint wahrscheinlich sinnvoller, Webstandards als Grundlage für benutzerdefinierte Steuerelemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Allerdings hat unser Steuerelement nicht die gleiche Funktionalität wie ein `<select>` es nativ hat.

Auf der positiven Seite ist dieses Steuerelement vollständig für einen Screenreader zugänglich und vollständig mit der Tastatur navigierbar. Aber dieses Steuerelement ist kein {{htmlelement('select')}}-Ersatz. Es gibt Funktionalitäten, die sich unterscheiden und/oder fehlen. Zum Beispiel navigieren alle vier Pfeile durch die Optionen, aber wenn der Benutzer auf den letzten Button ist, bringt ihn der Klick auf den Abwärtspfeil zum ersten Button; es stoppt nicht oben und unten in der Optionsliste wie ein `<select>` es tut.

Wir überlassen das Hinzufügen dieser fehlenden Funktionalität dem Leser als Übung.

## Fazit

Wir haben alle Grundlagen zum Erstellen eines benutzerdefinierten Formularsteuerelements gesehen, aber wie Sie sehen, ist es nicht trivial. Bevor Sie Ihr eigenes Steuerelement erstellen, überlegen Sie, ob HTML alternative Elemente bietet, die ausreichend sind, um Ihre Anforderungen zu unterstützen. Wenn Sie ein benutzerdefiniertes Steuerelement erstellen müssen, ist es oft einfacher, sich auf Drittanbieter-Bibliotheken zu verlassen, anstatt Ihr eigenes zu erstellen. Aber wenn Sie es tun, vorhandene Elemente ändern oder ein Framework zum Implementieren eines vorgefertigten Steuerelements verwenden, denken Sie daran, dass es komplizierter ist, ein benutzerfreundliches und barrierefreies Formularsteuerelement zu erstellen, als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihren eigenen Code schreiben:

- [jQuery UI](https://jqueryui.com/)
- [AXE zugängliche benutzerdefinierte Dropdowns auswählen](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente über Radio-Buttons, Ihr eigenes JavaScript oder mit einer Drittanbieter-Bibliothek erstellen, stellen Sie sicher, dass diese zugänglich und zukunftssicher sind; das heißt, sie müssen besser mit einer Vielzahl von Browsern funktionieren, deren Kompatibilität mit den von Ihnen verwendeten Webstandards variiert. Viel Spaß!
