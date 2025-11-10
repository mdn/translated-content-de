---
title: Anleitung zum Erstellen benutzerdefinierter Formularelemente
short-title: Benutzerdefinierte Formularelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Es gibt einige Fälle, in denen die verfügbaren nativen HTML-Formularelemente möglicherweise nicht ausreichen. Wenn Sie beispielsweise [erweiterte Formatierungen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) auf einige Elemente wie das {{HTMLElement("select")}}-Element anwenden möchten oder benutzerdefiniertes Verhalten bieten möchten, sollten Sie in Erwägung ziehen, eigene Steuerelemente zu erstellen.

In diesem Artikel werden wir besprechen, wie man ein benutzerdefiniertes Steuerelement erstellt. Dazu werden wir mit einem Beispiel arbeiten: dem Nachbau des {{HTMLElement("select")}}-Elements. Wir werden auch erörtern, wie, wann und ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen, und was zu beachten ist, wenn der Bau eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns darauf, das Steuerelement zu erstellen, nicht darauf, wie man den Code generisch und wiederverwendbar macht; das würde einige nicht triviale JavaScript-Codierungen und DOM-Manipulationen in einem unbekannten Kontext erfordern und liegt außerhalb des Umfangs dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie sich genau überlegen, was Sie wollen. Dies spart Ihnen wertvolle Zeit. Insbesondere ist es wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Um dies zu tun, ist es gut, mit einem vorhandenen Steuerelement zu beginnen, dessen Zustände und Verhalten bekannt sind, damit Sie diese so weit wie möglich nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element neu erstellen. Hier ist das Ergebnis, das wir erreichen möchten:

![The three states of a select box](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

In Bezug auf das Verhalten erstellen wir ein natives HTML-Element nach. Daher sollte es die gleichen Verhaltensweisen und Semantiken wie das native HTML-Element haben. Wir benötigen, dass unser Steuerelement sowohl mit der Maus als auch mit der Tastatur nutzbar ist und für einen Screenreader verständlich, genau wie jedes native Steuerelement. Fangen wir damit an, zu definieren, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im Normalzustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Nutzer außerhalb davon klickt.
- das Steuerelement aktiv war und der Nutzer mit der Tastatur (z.B. die <kbd>Tab</kbd>-Taste) den Fokus auf ein anderes Steuerelement verschiebt.

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Nutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Nutzer die Tabulatortaste drückt und es den Fokus erhält.
- das Steuerelement im geöffneten Zustand war und der Nutzer darauf klickt.

**Das Steuerelement befindet sich im geöffneten Zustand, wenn:**

- das Steuerelement sich in einem anderen Zustand als offen befindet und der Nutzer darauf klickt.

Sobald wir wissen, wie sich die Zustände ändern, ist es wichtig zu definieren, wie sich der Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- der Nutzer auf eine Option klickt, während das Steuerelement im geöffneten Zustand ist.
- der Nutzer die Pfeiltasten nach oben oder unten drückt, während das Steuerelement im aktiven Zustand ist.

**Der Wert ändert sich nicht, wenn:**

- der Nutzer die Pfeiltaste nach oben drückt, wenn die erste Option ausgewählt ist.
- der Nutzer die Pfeiltaste nach unten drückt, wenn die letzte Option ausgewählt ist.

Schließlich lassen Sie uns definieren, wie sich die Optionen des Steuerelements verhalten werden:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn sich die Maus über einer Option befindet, wird die Option hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren Normalzustand zurück.

Für die Zwecke unseres Beispiels belassen wir es dabei; wenn Sie jedoch sorgfältig lesen, werden Sie bemerken, dass einige Verhaltensweisen fehlen. Zum Beispiel, was glauben Sie, wird passieren, wenn der Benutzer die Tabulatortaste drückt, während das Steuerelement im geöffneten Zustand ist? Die Antwort lautet _nichts_. Der richtige Ablauf scheint offensichtlich, aber weil er nicht in unseren Spezifikationen definiert ist, ist es sehr leicht, dieses Verhalten zu übersehen. Dies gilt besonders in einem Teamumfeld, in dem die Personen, die das Verhalten entwerfen, sich von denen unterscheiden, die es implementieren.

Ein weiteres interessantes Beispiel: Was wird passieren, wenn der Benutzer die Pfeiltasten nach oben oder unten drückt, während das Steuerelement im geöffneten Zustand ist? Dies ist etwas kniffliger. Wenn Sie davon ausgehen, dass sich der aktive Zustand und der geöffnete Zustand vollständig unterscheiden, lautet die Antwort erneut "nichts wird passieren", weil wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie davon ausgehen, dass der aktive Zustand und der geöffnete Zustand sich ein wenig überschneiden, könnte sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, da wir keine Tastaturinteraktionen über Optionen definiert haben, wenn das Steuerelement im geöffneten Zustand ist (wir haben nur definiert, was passieren soll, wenn das Steuerelement geöffnet wird, aber nichts danach).

Wir müssen etwas weiterdenken: Was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt eine geöffnete Auswahl. Denken Sie daran, wenn Sie die gleiche Funktionalität wie bei der bestehenden nativen {{htmlelement('select')}} bereitstellen möchten, sollte es sich in jedem Auftrag für alle Benutzer genauso verhalten wie das Auswahlfeld, von der Tastatur bis zur Maus, zum Touchscreen-Reader und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie behandeln, aber es kann ein echtes Problem für exotische neue Steuerelemente sein. Bei standardisierten Elementen, zu denen auch das {{htmlelement('select')}} gehört, haben die Autor:innen enorme Anstrengungen unternommen, alle Interaktionen für jedes Anwendungsszenario und jedes Eingabegerät zu spezifizieren. Neue Steuerelemente zu erstellen ist nicht so einfach, besonders wenn man etwas erschafft, das zuvor nicht existierte und von dem niemand die leiseste Ahnung hat, wie die erwarteten Verhaltensweisen und Interaktionen sein sollen. Mindestens wurde das Selektionsfeld vorher erstellt, sodass wir wissen, wie es sich verhalten sollte!

Die Gestaltung neuer Interaktionen ist im Allgemeinen nur eine Option für sehr große Branchenakteure, die ausreichend Reichweite haben, um eine von ihnen erstellte Interaktion zu einem Standard zu machen. Beispielsweise führte Apple 2001 das Scrollrad mit dem iPod ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät zu etablieren, was die meisten Geräteunternehmen nicht können.

Es ist besser, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es lebenswichtig, in der Entwurfsphase Zeit zu investieren; wenn Sie ein Verhalten schlecht definieren oder vergessen, eines zu definieren, wird es sehr schwer sein, es neu zu definieren, sobald die Benutzer daran gewöhnt sind. Wenn Sie Zweifel haben, fragen Sie nach der Meinung anderer, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird als UX-Design bezeichnet. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Ebenso gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Optionen anzusehen (das ist dasselbe wie das Klicken auf das {{HTMLElement("select")}}-Element mit einer Maus). Dies wird unter Windows mit <kbd>Alt</kbd> + <kbd>Pfeiltaste unten</kbd> erreicht. Wir haben dies nicht in unser Beispiel implementiert, aber es wäre einfach zu tun, da der Mechanismus bereits für das `click`-Ereignis umgesetzt wurde.

## Definieren der HTML-Struktur und (einige) Semantiken

Nun, da die grundlegende Funktionalität des Steuerelements entschieden ist, ist es an der Zeit, mit dem Aufbau zu beginnen. Der erste Schritt ist, seine HTML-Struktur zu definieren und ihm einige grundlegende Semantiken zu verleihen. Hier ist, was wir brauchen, um ein {{HTMLElement("select")}}-Element neu zu erstellen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine feste HTML-Struktur binden, sodass wir später Implementierungsänderungen vornehmen können, ohne Code zu brechen, der das Steuerelement verwendet. Was wäre beispielsweise, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements umsetzen möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand "sieht" der Screenreader-Benutzer nur eine ungeordnete Liste. Wir werden in einem Moment ARIA-Semantik hinzufügen.

## Erstellen des Erscheinungsbildes mit CSS

Nun, da wir eine Struktur haben, können wir mit dem Design unseres Steuerelements beginnen. Der ganze Punkt beim Erstellen dieses benutzerdefinierten Steuerelements ist, es genau so zu gestalten, wie wir es wollen. Zu diesem Zweck werden wir unsere CSS-Arbeit in zwei Teile aufteilen: Der erste Teil wird die absolut notwendigen CSS-Regeln sein, um unser Steuerelement wie ein {{HTMLElement("select")}}-Element verhalten zu lassen, und der zweite Teil wird aus den stilvollen Stilen bestehen, die verwendet werden, um es so aussehen zu lassen, wie wir es wollen.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Erscheinungsbild unseres Steuerelements zu definieren, wenn es sich im aktiven Zustand befindet. Da unser Steuerelement fokussierbar ist, doppeln wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudoklasse, um sicherzustellen, dass sie gleich funktionieren.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Nun, lassen Sie uns die Liste der Optionen behandeln:

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

Wir benötigen eine zusätzliche Klasse, um zu steuern, wann die Liste der Optionen ausgeblendet ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand zu verwalten, die nicht genau übereinstimmen.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way;
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir hätten auch `transform: scale(1, 0)` verwenden können, um der Optionsliste keine Höhe, aber volle Breite zu geben.

### Verschönerung

Nun, da die grundlegende Funktionalität vorhanden ist, kann der Spaß beginnen. Das Folgende ist nur ein Beispiel, was möglich ist, und wird dem Screenshot am Anfang dieses Artikels entsprechen. Sie sollten jedoch nicht zögern, zu experimentieren und zu sehen, was Sie sich einfallen lassen können.

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

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert identifizieren zu können, den der Benutzer wählen wird (oder gewählt hat).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

Das ist das Ergebnis mit unseren drei Zuständen ([siehe den Quellcode hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

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

## Bringen Sie Ihr Steuerelement mit JavaScript zum Leben

Nun, da Design und Struktur bereit sind, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich funktionsfähig zu machen.

> [!WARNING]
> Der Folgende ist Bildungscode, kein Produktionscode, und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher noch wird er in älteren Browsern funktionieren. Er hat auch redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor Sie beginnen, ist es wichtig, daran zu denken, dass **JavaScript im Browser eine unzuverlässige Technologie ist**. Benutzerdefinierte Steuerelemente sind auf JavaScript angewiesen, um alles zu verknüpfen. Es gibt jedoch Fälle, in denen JavaScript nicht im Browser laufen kann:

- Der User hat JavaScript deaktiviert: Das ist ungewöhnlich; sehr wenige Menschen deaktivieren heutzutage JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, wo das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Diese Möglichkeit sollten Sie immer in Betracht ziehen.
- Das Skript steht im Konflikt mit einem Drittanbieter-Skript: Dies kann mit Tracking-Skripten oder Lesezeichenlettern passieren, die der Benutzer verwendet.
- Das Skript steht im Konflikt mit oder wird von einer Browser-Erweiterung (wie die Firefox-Erweiterung [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) oder die Chrome-Erweiterung [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba)) beeinflusst.
- Der User benutzt einen älteren Browser und eins der benötigten Features ist nicht unterstützt: Das wird häufig passieren, wenn Sie von den neuesten APIs Gebrauch machen.
- Der User interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, analysiert und ausgeführt wurde.

Angesichts dieser Risiken ist es wirklich wichtig, ernsthaft zu überlegen, was passieren wird, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen betrachten, die in Betracht gezogen werden sollten und die Grundlagen in unserem Beispiel abdecken (eine vollständige Betrachtung der Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie einfach daran, dass es entscheidend ist, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht ausgeführt wird, werden wir zurückfallen, um ein Standard-{{HTMLElement("select")}}-Element anzuzeigen. Wir schließen unser Steuerelement und das {{HTMLElement("select")}}-Element ein; welches angezeigt wird, hängt von der Klasse des Body-Elements ab, wobei die Klasse des Body-Elements von dem Skript aktualisiert wird, das das Steuerelement funktionsfähig macht, wenn es erfolgreich geladen wurde.

Um dies zu erreichen, brauchen wir zwei Dinge:

Zuerst müssen wir ein reguläres {{HTMLElement("select")}}-Element vor jeder Instanz unseres benutzerdefinierten Steuerelements hinzufügen. Es hat einen Vorteil, dieses "extra" Auswahlelement zu haben, auch wenn unser JavaScript wie erhofft funktioniert: Wir werden dieses Auswahlfeld verwenden, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit den restlichen Formulardaten zu senden. Wir werden dies später ausführlicher besprechen.

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

Zweitens benötigen wir zwei neue Klassen, um das nicht benötigte Element auszublenden: Wir verbergen das benutzerdefinierte Steuerelement visuell, wenn unser Skript nicht ausgeführt wird, oder das "echte" {{HTMLElement("select")}}-Element, wenn es ausgeführt wird. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement ausblendet.

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

Dieses CSS blendet eines der Elemente visuell aus, ist aber immer noch für Screenreader verfügbar.

Jetzt brauchen wir einen JavaScript-Schalter, um festzustellen, ob das Skript läuft oder nicht. Dieser Schalter ist ein paar Zeilen: Wenn zum Zeitpunkt des Seitenladens unser Skript ausgeführt wird, wird es die Klasse `no-widget` entfernen und die Klasse `widget` hinzufügen, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements vertauscht wird.

```js
document.body.classList.remove("no-widget");
document.body.classList.add("widget");
```

#### Ohne JS

Schauen Sie sich den [vollständigen Quellcode hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#no_js) an.

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

Schauen Sie sich den [vollständigen Quellcode hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#js) an.

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
> Wenn Sie wirklich möchten, dass Ihr Code generisch und wiederverwendbar ist, ist es anstelle eines Klassenschalters viel besser, einfach die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente zu verstecken, und den DOM-Baum dynamisch hinzuzufügen, der das benutzerdefinierte Steuerelement darstellt, nachdem jedes {{HTMLElement("select")}}-Element auf der Seite hinzugefügt wurde.

### Den Job erleichtern

In dem Code, den wir zu erstellen beabsichtigen, werden wir die Standard-JavaScript- und DOM-APIs verwenden, um alle Arbeiten zu erledigen, die wir benötigen. Die Features, die wir verwenden wollen, sind die folgenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Event-Callbacks erstellen

Die Grundlage ist gelegt. Wir können nun beginnen, alle Funktionen zu definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Steuerelement interagiert.

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

An diesem Punkt wird unser Steuerelement seinen Zustand entsprechend unserem Design ändern, aber sein Wert wird noch nicht aktualisiert. Damit befassen wir uns als nächstes.

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

### Den Wert des Steuerelements ändern

Jetzt, da unser Steuerelement funktioniert, müssen wir Code hinzufügen, um seinen Wert entsprechend den Benutzereingaben zu aktualisieren und es möglich zu machen, den Wert zusammen mit Formulardaten zu senden.

Der einfachste Weg, dies zu tun, ist, ein natives Steuerelement im Hintergrund zu verwenden. Ein solches Steuerelement wird den Wert mit allen vom Browser bereitgestellten integrierten Steuerelementen verfolgen, und der Wert wird wie gewohnt gesendet, wenn ein Formular übermittelt wird. Es macht keinen Sinn, das Rad neu zu erfinden, wenn wir all dies für uns erledigen können.

Wie zuvor gesehen, verwenden wir bereits ein natives Auswahlelement als Fallback aus Barrierefreiheitsgründen; wir können seinen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

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

Im obigen Code ist die Verwendung der Eigenschaft [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex) bemerkenswert. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Steuerelement niemals den Fokus erhält und um sicherzustellen, dass unser benutzerdefiniertes Steuerelement den Fokus erlangt, wenn der Benutzer die Tastatur oder Maus verwendet.

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

Aber warten Sie einen Moment, sind wir wirklich fertig?

## Es zugänglich machen

Wir haben etwas gebaut, das funktioniert, und obwohl wir weit entfernt von einer voll ausgestatteten Auswahlbox sind, funktioniert es gut. Aber was wir getan haben, ist nicht mehr, als mit dem DOM zu spielen. Es hat keine wirkliche Semantik, und selbst wenn es wie eine Auswahlbox aussieht, ist es aus der Sicht des Browsers keine, also werden unterstützende Technologien nicht in der Lage sein zu verstehen, dass es sich um eine Auswahlbox handelt. Kurz gesagt, diese hübsche neue Auswahlbox ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung, die [ARIA](/de/docs/Web/Accessibility/ARIA) genannt wird. ARIA steht für "Accessible Rich Internet Application" und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die speziell für das entwickelt wurde, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerelemente zugänglich machen. Es ist im Grunde ein Satz von Attributen, die HTML erweitern, damit wir Rollen, Zustände und Eigenschaften besser beschreiben können, als wäre das von uns entwickelte Element das nativen Element, das es zu imitieren versucht. Die Verwendung dieser Attribute kann durch Bearbeitung des HTML-Markups erfolgen. Wir aktualisieren die ARIA-Attribute auch über JavaScript, während der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel werden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle verwenden. Es ist eine "kompositorische Rolle", was bedeutet, dass Elemente mit dieser Rolle erwartet werden, Kinder zu haben, von denen jedes eine spezifische Rolle hat (in diesem Fall mindestens ein Kind mit der `option`-Rolle).

Es ist auch erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf standardmäßiges HTML-Markup angewendet werden. Zum Beispiel entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die `listbox`-Rolle unseres Steuerelements die `list`-Rolle des {{HTMLElement("ul")}}-Elements überlagert. Zu diesem Zweck werden wir die Rolle `presentation` verwenden. Diese Rolle wurde entwickelt, um uns anzugeben, dass ein Element keine besondere Bedeutung hat und ausschließlich zur Präsentation von Informationen verwendet wird. Wir werden sie auf unser {{HTMLElement("ul")}}-Element anwenden.

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
> Es ist nicht notwendig, sowohl das `role`-Attribut als auch ein `class`-Attribut einzuschließen. Anstelle von `.option` verwenden Sie die Attributselektoren [role="option"] [attribute selectors](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attributs ist nicht genug. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Zustands- und Eigenschaftsattribute. Je mehr und besser Sie sie verwenden, desto besser wird Ihr Steuerelement von unterstützender Technologie verstanden. In unserem Fall werden wir unseren Gebrauch auf ein Attribut beschränken: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu markieren, welche Option derzeit ausgewählt ist; dies ermöglicht unterstützenden Technologien, den Benutzer darüber zu informieren, was die aktuelle Auswahl ist. Wir werden es dynamisch mit JavaScript verwenden, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Zu diesem Zweck müssen wir unsere `updateValue()`-Funktion überarbeiten:

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

Es hätte einfacher erscheinen können, einen Screenreader auf das Off-Screen-Auswahlelement fokussieren zu lassen und unser stilisiertes zu ignorieren, aber dies ist keine barrierefreie Lösung. Screenreader sind nicht nur auf blinde Menschen beschränkt; Menschen mit schwachem Sehvermögen und sogar perfektem Sehvermögen verwenden sie ebenfalls. Aus diesem Grund können Sie nicht den Screenreader auf ein Off-Screen-Element fokussieren lassen.

Unten ist das endgültige Ergebnis all dieser Änderungen (Sie erhalten ein besseres Gefühl für dies, wenn Sie es mit einer unterstützenden Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) ausprobieren).

#### Live-Beispiel

Schauen Sie sich den [vollständigen Quellcode hier an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5).

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

Wenn Sie weitergehen möchten, benötigt der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie versuchen können, durchzuführen. Zwei Hinweise, um Ihnen dabei zu helfen: Das erste Argument für all unsere Funktionen ist dasselbe, was bedeutet, dass diese Funktionen denselben Kontext erfordern. Ein Objekt zu erstellen, um diesen Kontext zu teilen, wäre ratsam.

## Ein alternativer Ansatz: Radio-Buttons verwenden

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht-semantischem HTML, CSS und JavaScript neu erfunden. Dieses Auswahlkästchen wählte eine Option aus einer begrenzten Anzahl von Optionen aus, was die gleiche Funktionalität wie eine gleichnamige Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons hat.

Wir könnten dies daher mit Radio-Buttons neu erfinden; sehen wir uns diese Option.

Wir können mit einer völlig semantischen, zugänglichen, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Schaltflächen beginnen, die mit einem zugehörigen {{htmlelement('label')}} enthalten sind, wobei die gesamte Gruppe mit einem semantisch passenden {{htmlelement('fieldset')}} und {{htmlelement('legend')}}-Paar bezeichnet wird.

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

Wir werden die Liste der Radio-Buttons (nicht die Legende/Feldset) ein wenig gestalten, um sie wie das vorherige Beispiel aussehen zu lassen, nur um zu zeigen, dass es möglich ist:

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

Ohne JavaScript und nur ein wenig CSS können wir die Liste der Radio-Buttons so gestalten, dass nur das überprüfte Element angezeigt wird. Wenn der Fokus innerhalb der `<ul>` im `<fieldset>` ist, öffnet sich die Liste, und die Auf- und Ab-Pfeiltasten (sowie links und rechts) funktionieren, um die vorherigen und nächsten Elemente auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert, bis zu einem gewissen Grad, ohne JavaScript. Wir haben ein ähnliches Steuerelement zu unserem benutzerdefinierten Steuerelement erstellt, das auch dann funktioniert, wenn das JavaScript ausfällt. Sieht nach einer tollen Lösung aus, oder? Nun, nicht zu 100%. Es funktioniert mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es macht wahrscheinlich mehr Sinn, Webstandards als Basis für benutzerdefinierte Steuerelemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unser Steuerelement hat jedoch nicht die gleiche Funktionalität, die ein `<select>` nativer hat.

Auf der positiven Seite ist dieses Steuerelement vollständig für einen Screenreader zugänglich und kann vollständig über die Tastatur navigiert werden. Dieses Steuerelement ist jedoch kein Ersatz für ein {{htmlelement('select')}}. Es gibt Funktionen, die sich unterscheiden und/oder fehlen. Zum Beispiel navigieren alle vier Pfeile durch die Optionen, aber das Klicken auf den Abwärtspfeil, wenn der Benutzer auf der letzten Schaltfläche ist, führt ihn zur ersten Schaltfläche; es stoppt nicht oben und unten in der Optionsliste wie ein `<select>` es tut.

Das Hinzufügen dieser fehlenden Funktionalität überlassen wir als Übung dem Leser.

## Fazit

Wir haben alle Grundlagen zum Erstellen eines benutzerdefinierten Formularelements gesehen, aber wie Sie sehen können, ist es nicht trivial, dies zu tun. Bevor Sie Ihr eigenes benutzerdefiniertes Steuerelement erstellen, überlegen Sie, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen können. Wenn Sie ein benutzerdefiniertes Steuerelement erstellen müssen, ist es oft einfacher, auf Drittanbieter-Bibliotheken zuzugreifen, anstatt Ihr eigenes zu erstellen. Aber wenn Sie Ihr eigenes erstellen, bestehende Elemente ändern oder ein Framework verwenden, um ein vorgefertigtes Steuerelement zu implementieren, denken Sie daran, dass das Erstellen eines benutzerfreundlichen und zugänglichen Formularelements komplizierter ist, als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihren eigenen Code schreiben:

- [jQuery UI](https://jqueryui.com/)
- [AXE zugängliche benutzerdefinierte Auswahl-Dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente über Radio-Buttons, Ihr eigenes JavaScript oder mit einer Drittanbieter-Bibliothek erstellen, stellen Sie sicher, dass es zugänglich und zukunftssicher ist; das heißt, es sollte mit einer Vielzahl von Browsern besser funktionieren, deren Kompatibilität mit den Webstandards, die sie verwenden, variiert. Viel Spaß!
