---
title: Anleitung zur Erstellung benutzerdefinierter Formularelemente
slug: Learn/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{LearnSidebar}}

Es gibt einige Fälle, in denen die verfügbaren nativen HTML-Formularelemente möglicherweise nicht ausreichen. Wenn Sie beispielsweise fortgeschrittene Stilgestaltung auf einige Elemente wie das {{HTMLElement("select")}}-Element anwenden müssen, oder wenn Sie benutzerdefinierte Verhaltensweisen bereitstellen möchten, könnten Sie in Erwägung ziehen, Ihre eigenen Steuerelemente zu erstellen.

In diesem Artikel besprechen wir, wie man ein benutzerdefiniertes Steuerelement erstellt. Zu diesem Zweck werden wir an einem Beispiel arbeiten: dem Neuaufbau des {{HTMLElement("select")}}-Elements. Wir werden auch besprechen, wie, wann und ob es sinnvoll ist, Ihr eigenes Steuerelement zu erstellen und was zu berücksichtigen ist, wenn das Erstellen eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns auf die Erstellung des Steuerelements, nicht darauf, wie man den Code generisch und wiederverwendbar macht; dies würde einigen nicht-trivialen JavaScript-Code und DOM-Manipulation in einem unbekannten Kontext erfordern, was den Rahmen dieses Artikels sprengen würde.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie zunächst genau herausfinden, was Sie wollen. Dies spart Ihnen wertvolle Zeit. Insbesondere ist es wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Dazu ist es gut, mit einem vorhandenen Steuerelement zu beginnen, dessen Zustände und Verhalten gut bekannt sind, damit Sie diese möglichst genau nachahmen können.

In unserem Beispiel bauen wir das {{HTMLElement("select")}}-Element neu auf. Hier ist das Ergebnis, das wir erreichen wollen:

![Die drei Zustände einer Auswahlbox](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

In Bezug auf das Verhalten erstellen wir ein natives HTML-Element nach. Daher sollte es das gleiche Verhalten und die gleichen Semantiken wie das native HTML-Element haben. Wir erfordern, dass unser Steuerelement sowohl mit der Maus als auch mit der Tastatur benutzbar ist und einem Bildschirmleser verständlich, genau wie jedes native Steuerelement. Lassen Sie uns damit beginnen, zu definieren, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im Normalzustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Benutzer irgendwo außerhalb davon klickt.
- das Steuerelement aktiv war und der Benutzer den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt (z. B. die <kbd>Tab</kbd>-Taste).

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tabulatortaste drückt und der Fokus darauf fällt.
- das Steuerelement im offenen Zustand war und der Benutzer darauf klickt.

**Das Steuerelement befindet sich im offenen Zustand, wenn:**

- das Steuerelement in einem anderen Zustand als offen ist und der Benutzer darauf klickt.

Sobald wir wissen, wie wir die Zustände ändern, ist es wichtig zu definieren, wie der Wert des Steuerelements geändert wird:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, wenn sich das Steuerelement im offenen Zustand befindet.
- der Benutzer die Aufwärts- oder Abwärtspfeiltasten drückt, wenn sich das Steuerelement im aktiven Zustand befindet.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Aufwärtspfeiltaste drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Abwärtspfeiltaste drückt, wenn die letzte Option ausgewählt ist.

Lassen Sie uns abschließend definieren, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn die Maus über eine Option bewegt wird, wird die Option hervorgehoben und die zuvor hervorgehobene Option in ihren Normalzustand zurückversetzt.

Für unser Beispiel belassen wir es dabei; jedoch, wenn Sie ein aufmerksamer Leser sind, werden Sie feststellen, dass einige Verhaltensweisen fehlen. Zum Beispiel, was denken Sie, wird passieren, wenn der Benutzer die Tabulatortaste drückt, während das Steuerelement im offenen Zustand ist? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich, aber die Tatsache ist, weil es nicht in unseren Spezifikationen definiert ist, ist es sehr einfach, dieses Verhalten zu übersehen. Dies ist besonders in einem Teamumfeld der Fall, wenn die Personen, die das Verhalten des Steuerelements entwerfen, andere sind als diejenigen, die es implementieren.

Ein weiteres schönes Beispiel: Was wird passieren, wenn der Benutzer die Aufwärts- oder Abwärtspfeiltasten drückt, während das Steuerelement im offenen Zustand ist? Dies ist etwas kniffliger. Wenn Sie betrachten, dass der aktive Zustand und der offene Zustand völlig unterschiedlich sind, ist die Antwort erneut "nichts wird passieren", weil wir keine Tastatur-Interaktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie berücksichtigen, dass der aktive Zustand und der offene Zustand sich ein wenig überschneiden, könnte sich der Wert ändern, aber die Option wird mit Sicherheit nicht entsprechend hervorgehoben, einmal mehr, weil wir keine Tastatur-Interaktionen über Optionen definiert haben, wenn sich das Steuerelement im geöffneten Zustand befindet (wir haben nur definiert, was passieren sollte, wenn das Steuerelement geöffnet wird, aber nichts danach).

Wir müssen noch weiter denken: was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd> Taste schließt eine geöffnete Auswahl. Denken Sie daran, wenn Sie die gleiche Funktionalität wie das vorhandene native {{htmlelement('select')}} bieten möchten, sollte es sich genau so verhalten wie das Auswahl-Element für alle Benutzer, vom Tastatur- zum Mausklick bis hin zu Touchscreen und Bildschirmleser und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie behandeln, aber es kann ein echtes Problem für exotische neue Steuerelemente sein. Bei standardisierten Elementen, zu denen auch das {{htmlelement('select')}} gehört, haben die Autoren der Spezifikation enorm viel Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall für jedes Eingabegerät zu spezifizieren. Neue Steuerelemente zu erstellen ist nicht so einfach, insbesondere wenn Sie etwas erstellen, das es noch nie zuvor gegeben hat, und daher niemand die geringste Ahnung hat, wie das erwartete Verhalten und die Interaktionen aussehen sollen. Zumindest wurde das Auswahl-Element schon einmal gemacht, also wissen wir, wie es sich verhalten sollte!

Neue Interaktionen zu entwerfen ist im Allgemeinen nur eine Option für sehr große Branchenakteure, die so viel Einfluss haben, dass eine von ihnen geschaffene Interaktion zu einem Standard werden kann. Zum Beispiel hat Apple das Scrollrad mit dem iPod im Jahr 2001 eingeführt. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät einzuführen, etwas, das die meisten Gerätehersteller nicht tun können.

Es ist am besten, keine neuen Nutzerinteraktionen zu erfinden. Für jede hinzugefügte Interaktion ist es wichtig, in der Designphase Zeit zu investieren; wenn Sie ein Verhalten schlecht definieren oder eines vergessen, wird es sehr schwer, es neu zu definieren, nachdem sich die Benutzer daran gewöhnt haben. Wenn Sie Zweifel haben, fragen Sie andere nach ihrer Meinung, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://de.wikipedia.org/wiki/Usability-Test). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Außerdem gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um sich alle verfügbaren Optionen anzusehen (dies entspricht dem Klicken auf das {{HTMLElement("select")}}-Element mit einer Maus). Dies wird auf Windows mit <kbd>Alt</kbd> + <kbd>Down</kbd> erreicht. Wir haben dies nicht in unserem Beispiel implementiert, aber es wäre leicht zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einige) Semantiken

Jetzt, da die grundlegende Funktionalität des Steuerelements festgelegt ist, ist es an der Zeit, mit dem Aufbau zu beginnen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm einige grundlegende Semantiken zu geben. Hier ist, was wir brauchen, um ein {{HTMLElement("select")}}-Element neu zu erstellen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine feste HTML-Struktur binden, so dass wir Implementierungsänderungen später vornehmen können, ohne den Code zu brechen, der das Steuerelement verwendet. Zum Beispiel, was wäre, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand sieht der Bildschirmleser-Benutzer nur eine ungeordnete Liste. Wir werden ARIA-Semantiken in Kürze hinzufügen.

## Erstellung des Aussehens und Gefühls mit CSS

Jetzt, da wir eine Struktur haben, können wir mit dem Design unseres Steuerelements beginnen. Der gesamte Zweck der Erstellung dieses benutzerdefinierten Steuerelements besteht darin, es genau so zu gestalten, wie wir es wollen. Zu diesem Zweck teilen wir unsere CSS-Arbeit in zwei Teile: Der erste Teil besteht aus den CSS-Regeln, die unbedingt erforderlich sind, damit unser Steuerelement sich wie ein {{HTMLElement("select")}}-Element verhält, und der zweite Teil besteht aus den aufwendigen Stilen, die verwendet werden, um es so aussehen zu lassen, wie wir es wollen.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Aussehen und das Gefühl unseres Steuerelements zu definieren, wenn es sich im aktiven Zustand befindet. Da unser Steuerelement fokussierbar ist, kombinieren wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}} Pseudoklasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Nun, lassen Sie uns die Liste der Optionen bearbeiten:

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

Wir benötigen eine zusätzliche Klasse, um zu handhaben, wenn die Liste der Optionen verborgen ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand zu verwalten, die nicht genau übereinstimmen.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way;
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir hätten auch `transform: scale(1, 0)` verwenden können, um der Optionenliste keine Höhe und volle Breite zu geben.

### Verschönerung

Jetzt, da wir die grundlegende Funktionalität an Ort und Stelle haben, kann der Spaß beginnen. Das Folgende ist nur ein Beispiel dafür, was möglich ist, und wird dem Screenshot zu Beginn dieses Artikels entsprechen. Trotzdem sollten Sie sich frei fühlen zu experimentieren und zu sehen, was Sie sich einfallen lassen können.

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

Wir benötigen kein zusätzliches Element, um den Abwärtspfeil zu gestalten; stattdessen verwenden wir die {{cssxref("::after")}} Pseudoelement. Es könnte auch mit einem einfachen Hintergrundbild auf der `select` Klasse implementiert werden.

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

Nächste, stylen wir die Liste der Optionen:

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

Für die Optionen müssen wir eine `highlight` Klasse hinzufügen, um den Wert identifizieren zu können, den der Benutzer wählen wird (oder gewählt hat).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

Hier ist das Ergebnis mit unseren drei Zuständen ([sehen Sie sich den Quellcode hier an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_1)):

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

#### Aktivzustand

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

## Lebens erwecken Ihrer Steuerung mit JavaScript

Jetzt, da unser Design und unsere Struktur bereit sind, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich zum Laufen zu bringen.

> [!WARNING]
> Der folgende Code ist didaktisch und sollte nicht direkt für Produktionszwecke verwendet werden. Er ist weder zukunftssicher noch funktioniert er auf älteren Browsern. Außerdem enthält er redundante Teile, die in Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig zu erinnern: **JavaScript im Browser ist eine unzuverlässige Technologie**. Benutzerdefinierte Steuerelemente verlassen sich auf JavaScript, um alles zu verbinden. Es gibt jedoch Fälle, in denen JavaScript im Browser nicht ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Das ist unüblich; nur sehr wenige Menschen deaktivieren JavaScript heutzutage.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, besonders in der mobilen Welt, wo das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Sie sollten immer diese Möglichkeit in Betracht ziehen.
- Das Skript steht in Konflikt mit einem Drittanbieter-Skript: Dies kann bei Tracking-Skripten oder beliebigen Bookmarklets der Fall sein, die der Benutzer verwendet.
- Das Skript steht in Konflikt mit oder wird von einer Browser-Erweiterung beeinflusst (z.B. Firefox's [NoScript](https://addons.mozilla.org/de/firefox/addon/noscript/)-Erweiterung oder Chrome's [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba)-Erweiterung).
- Der Benutzer nutzt einen veralteten Browser, und einer der von Ihnen benötigten Funktionen wird nicht unterstützt: Dies wird häufig passieren, wenn Sie Cutting-Edge-APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, analysiert und ausgeführt wurde.

Aufgrund dieser Risiken ist es wirklich wichtig, ernsthaft zu überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen in Betracht ziehen und die Grundlagen in unserem Beispiel behandeln (eine vollständige Diskussion darüber, wie man dieses Problem für alle Szenarien löst, würde ein Buch erfordern). Denken Sie daran, dass es wichtig ist, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht läuft, werden wir auf die Anzeige eines Standard-{{HTMLElement("select")}}-Elements zurückfallen. Wir binden unser Steuerelement und das {{HTMLElement("select")}}; welches angezeigt wird hängt von der Klasse des Body-Elements ab, wobei die Klasse des Body-Elements von dem Skript aktualisiert wird, das das Steuerelement aktiv macht, wenn es erfolgreich geladen wird.

Dazu benötigen wir zwei Dinge:

Erstens, wir müssen ein reguläres {{HTMLElement("select")}}-Element vor jeder Instanz unseres benutzerdefinierten Steuerelements hinzufügen. Es gibt einen Vorteil dieses "extra" auswählen zu haben, selbst wenn unser JavaScript wie erhofft funktioniert: wir werden dieses auswählen verwenden, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit den restlichen Formulardaten zu senden. Wir werden dies später ausführlicher diskutieren.

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

Zweitens, benötigen wir zwei neue Klassen, um uns das unnötige Element zu verbergen: wir verbergen visuell das benutzerdefinierte Steuerelement, wenn unser Skript nicht läuft, oder das "echte" {{HTMLElement("select")}}-Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement versteckt.

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

Dieses CSS versteckt eine der Elemente visuell, aber es ist weiterhin für Bildschirmleser verfügbar.

Jetzt benötigen wir einen JavaScript-Schalter, um festzustellen, ob das Skript läuft oder nicht. Dieser Schalter ist ein paar Zeilen: wenn zum Zeitpunkt des Seitenausladens unser Skript läuft, entfernt es die Klasse `no-widget` und fügt die `widget`-Klasse hinzu, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements verändert wird.

```js
window.addEventListener("load", () => {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

#### Ohne JS

Schauen Sie sich den [vollständigen Quellcode](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#no_js) an.

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

Schauen Sie sich den [vollständigen Quellcode](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#js) an.

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
> Wenn Sie wirklich möchten, dass Ihr Code generisch und wiederverwendbar ist, ist es weit besser, die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente zu verstecken, und den DOM-Baum, der das benutzerdefinierte Steuerelement darstellt, dynamisch nach jedem {{HTMLElement("select")}} Element auf der Seite hinzuzufügen.

### Den Job einfacher machen

In dem Code, den wir gleich bauen werden, werden wir die Standard-JavaScript- und DOM-APIs verwenden, um alles zu erledigen, was wir brauchen. Die Funktionen, die wir verwenden möchten, sind die folgenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Erstellung von Ereignis-Rückruffunktionen

Die Vorarbeit ist abgeschlossen. Wir können nun alle Funktionen definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Steuerelement interagiert.

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

Zu diesem Zeitpunkt wird sich unser Steuerelement entsprechend unserem Design ändern, aber sein Wert wird noch nicht aktualisiert. Das werden wir als Nächstes behandeln.

#### Live Beispiel

Schauen Sie sich den [vollständigen Quellcode](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_3) an.

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

### Umgang mit dem Wert des Steuerelements

Jetzt, da unser Steuerelement funktioniert, müssen wir Code hinzufügen, um seinen Wert entsprechend der Benutzereingaben zu aktualisieren und es möglich zu machen, den Wert zusammen mit den Formulardaten zu senden.

Der einfachste Weg, dies zu tun, besteht darin, ein natives Steuerelement im Hintergrund zu verwenden. Ein solches Steuerelement wird den Wert mit allen vom Browser bereitgestellten integrierten Steuerelementen im Auge behalten, und der Wert wird wie gewohnt gesendet, wenn ein Formular eingereicht wird. Es gibt keinen Grund, das Rad neu zu erfinden, wenn all dies für uns erledigt werden kann.

Wie bereits gesehen nutzen wir ein natives Auswahl-Steuerelement aus Zugänglichkeitsgründen; wir können seinen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

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

Im obigen Code ist die Verwendung der [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft zu beachten. Diese Eigenschaft zu verwenden ist notwendig, um sicherzustellen, dass das native Steuerelement niemals den Fokus erhält und um sicherzustellen, dass unser benutzerdefiniertes Steuerelement den Fokus erhält, wenn der Benutzer seine Tastatur oder Maus benutzt.

Damit sind wir fertig!

#### Live Beispiel

Schauen Sie sich den [Quellcode hier an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_4).

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

Aber einen Moment, sind wir wirklich fertig?

## Es zugänglich machen

Wir haben etwas gebaut, das funktioniert, und obwohl wir weit von einem voll ausgestatteten Auswahlelement entfernt sind, funktioniert es gut. Was wir jedoch getan haben, ist nichts anderes als mit dem DOM zu spielen. Es hat keine echte Semantik, und selbst wenn es wie ein Auswahlbaustein aussieht, ist es aus Sicht des Browsers keiner, sodass unterstützende Technologien nicht in der Lage sind zu verstehen, dass es ein Auswahlbaustein ist. Kurz gesagt, dieses schöne neue Auswahlelement ist nicht zugänglich!

Glücklicherweise gibt es eine Lösung, und sie heißt [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für "Accessible Rich Internet Application", und es ist [eine W3C-Spezifikation](https://www.w3.org/TR/wai-aria/), die speziell für das entworfen wurde, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerelemente zugänglich zu machen. Es ist im Grunde eine Sammlung von Attributen, die HTML erweitern, sodass wir Rollen, Zustände und Eigenschaften besser beschreiben können, als ob das von uns entwickelte Element das native Element wäre, für das es sich ausgibt. Das Verwenden dieser Attribute kann durch Bearbeiten des HTML-Markups erfolgen. Wir aktualisieren die ARIA-Attribute auch über JavaScript, wenn der Benutzer den ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüssellelement, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel werden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)-Rolle verwenden. Es ist eine "zusammengesetzte Rolle", was bedeutet, dass Elemente mit dieser Rolle erwarten, dass sie Kinder haben, jedes mit einer bestimmten Rolle (in diesem Fall mindestens ein Kind mit der `option`-Rolle).

Es ist auch zu beachten, dass ARIA Rollen definiert, die standardmäßig auf das Standard-HTML-Markup angewendet werden. Zum Beispiel passt das {{HTMLElement("table")}}-Element zur Rolle `grid`, und das {{HTMLElement("ul")}}-Element passt zur Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die `listbox`-Rolle unseres Steuerelements die `list`-Rolle des {{HTMLElement("ul")}}-Elements überschreibt. Zu diesem Zweck werden wir die Rolle `presentation` verwenden. Diese Rolle ist dafür gedacht, uns anzuzeigen, dass ein Element keine besondere Bedeutung hat und ausschließlich dazu benutzt wird, Informationen zu präsentieren. Wir werden sie auf unser {{HTMLElement("ul")}}-Element anwenden.

Um die [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)-Rolle zu unterstützen, müssen wir nur unser HTML wie folgt aktualisieren:

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
> Das Einschließen von sowohl dem `role`-Attribut als auch einem `class`-Attribut ist nicht notwendig. Anstelle von `.option` verwenden Sie die `[role="option"]` [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attributs allein reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Zustands- und Eigenschaftsattributen. Je mehr und besser Sie diese verwenden, desto besser wird Ihr Steuerelement von unterstützenden Technologien verstanden. In unserem Fall werden wir unsere Nutzung auf ein Attribut beschränken: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu markieren, welche Option derzeit ausgewählt ist; dies ermöglicht es unterstützenden Technologien, dem Benutzer mitzuteilen, was die aktuelle Auswahl ist. Wir werden es dynamisch mit JavaScript verwenden, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Zu diesem Zweck müssen wir unsere `updateValue()`-Funktion überarbeiten:

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

Es mag einfacher erscheinen, einen Bildschirmleser auf das vom Bildschirm entfernte Auswahl zu fokussieren und unseren stilisierten zu ignorieren, aber das ist keine barrierefreie Lösung. Bildschirmleser sind nicht auf blinde Menschen beschränkt; auch Menschen mit Sehschwäche und sogar perfektem Sehvermögen nutzen sie. Aus diesem Grund können Sie den Bildschirmleser nicht auf ein Element fokussieren lassen, das außerhalb des Bildschirms liegt.

Nachfolgend das endgültige Ergebnis all dieser Änderungen (Sie werden dies besser verstehen, indem Sie es mit einer unterstützenden Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/vision/) ausprobieren).

#### Live Beispiel

Sehen Sie sich den [vollen Quellcode hier](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_5) an.

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

Wenn Sie weitermachen möchten, braucht der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie ausprobieren können. Zwei Hinweise, um Ihnen zu helfen: Das erste Argument für all unsere Funktionen ist das gleiche, was bedeutet, dass diese Funktionen den gleichen Kontext benötigen. Es wäre klug, ein Objekt zu erstellen, um diesen Kontext zu teilen.

## Ein alternativer Ansatz: Verwendung von Radio-Buttons

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht-semantischem HTML, CSS und JavaScript neu erfunden. Dieses Auswahlfeld wählte eine Option aus einer begrenzten Anzahl von Optionen aus, was die gleiche Funktionalität wie eine gleichnamige Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons hat.

Wir könnten diesen Ansatz also auch mit Radio-Buttons neu erfinden; lassen Sie uns diese Option betrachten.

Wir können mit einer vollständig semantischen, zugänglichen, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Buttons mit einem zugehörigen {{htmlelement('label')}}, das die gesamte Gruppe mit einem semantisch geeigneten {{htmlelement('fieldset')}} und {{htmlelement('legend')}} Paar beschriftet, beginnen.

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

Wir werden die Liste der Radio-Buttons (nicht die Legend/fieldset) ein wenig stilisieren, um sie etwas wie das frühere Beispiel aussehen zu lassen, nur um zu zeigen, dass es getan werden kann:

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

Ohne JavaScript und mit nur ein wenig CSS können wir die Liste der Radio-Buttons so gestalten, dass nur der ausgewählte Artikel angezeigt wird. Wenn der Fokus innerhalb des `<ul>` im `<fieldset>` liegt, öffnet sich die Liste, und die Auf- und Abwärtspfeile (sowie links und rechts) funktionieren, um das vorherige und nächste Element auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert bis zu einem gewissen Grad ohne JavaScript. Wir haben eine ähnliche Steuerung zu unserem benutzerdefinierten Steuerelement erstellt, das funktioniert, selbst wenn das JavaScript ausfällt. Sieht nach einer großartigen Lösung aus, oder? Nun, nicht 100%. Es funktioniert zwar mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es macht wahrscheinlich mehr Sinn, Webstandards als Grundlage für benutzerdefinierte Steuerelemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unsere Steuerung hat jedoch nicht die gleiche Funktionalität, die ein `<select>` nativ hat.

Auf der positiven Seite, ist diese Steuerung vollständig zugänglich für einen Bildschirmleser und vollständig über die Tastatur navigierbar. Diese Steuerung ist jedoch kein {{htmlelement('select')}} Ersatz. Es gibt Funktionen, die abweichen und/oder fehlen. Zum Beispiel navigieren alle vier Pfeile durch die Optionen, aber das Klicken auf den Abwärtspfeil, wenn sich der Benutzer auf dem letzten Button befindet, bringt ihn zum ersten Button; es stoppt nicht am oberen und unteren Rand der Optionsliste wie ein `<select>`.

Wir überlassen es dem Leser, diese fehlende Funktionalität zu erweitern.

## Fazit

Wir haben alle Grundlagen zum Erstellen eines benutzerdefinierten Formularelements gesehen, aber wie Sie sehen, ist es nicht einfach durchzuführen. Bevor Sie Ihr eigenes benutzerdefiniertes Steuerelement erstellen, überlegen Sie, ob HTML alternative Elemente bietet, die verwendet werden können, um Ihre Anforderungen angemessen zu unterstützen. Wenn Sie ein benutzerdefiniertes Steuerelement erstellen müssen, ist es oft einfacher, sich auf Drittanbieterbibliotheken zu verlassen, anstatt Ihr eigenes zu erstellen. Aber wenn Sie Ihr eigenes erstellen, bestehende Elemente ändern oder ein Framework verwenden, um ein vorgefertigtes Steuerelement zu implementieren, denken Sie daran, dass es komplizierter ist, ein benutzerfreundliches und zugängliches Formularelement zu erstellen, als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihren eigenen Code schreiben:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente über Radiobuttons, Ihr eigenes JavaScript oder mit einer Drittanbieterbibliothek erstellen, stellen Sie sicher, dass es zugänglich und zukunftssicher ist; das heißt, es muss in der Lage sein, besser mit einer Vielzahl von Browsern zu funktionieren, deren Kompatibilität mit den verwendeten Webstandards variiert. Viel Spaß dabei!

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [So strukturieren Sie ein HTML-Formular](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Input-Typen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [HTML-Formulare gestalten](/de/docs/Learn/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Erweitere Themen

- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- **Anleitung zur Erstellung benutzerdefinierter Formularelemente**
- [HTML-Formulare in älteren Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Erweiterte Stilgestaltung für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
