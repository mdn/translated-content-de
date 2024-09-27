---
title: Anleitung zum Erstellen benutzerdefinierter Formularelemente
slug: Learn/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}

In manchen Fällen scheinen die verfügbaren nativen HTML-Formularelemente nicht ausreichend zu sein. Zum Beispiel, wenn Sie [erweiterte Stile](/de/docs/Learn/Forms/Advanced_form_styling) auf bestimmte Elemente wie das {{HTMLElement("select")}}-Element anwenden möchten oder wenn Sie benutzerdefinierte Funktionen bereitstellen wollen, könnten Sie erwägen, Ihre eigenen Steuerelemente zu erstellen.

In diesem Artikel werden wir diskutieren, wie man ein benutzerdefiniertes Steuerelement erstellt. Dazu arbeiten wir mit einem Beispiel: dem Nachbau des {{HTMLElement("select")}}-Elements. Wir werden auch besprechen, wie, wann und ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen, und was zu berücksichtigen ist, wenn der Bau eines Steuerelements eine Anforderung ist.

> [!NOTE]
> Wir konzentrieren uns auf den Bau des Steuerelements, nicht darauf, wie man den Code generisch und wiederverwendbar macht; das würde einige komplexe JavaScript-Code und DOM-Manipulationen in einem unbekannten Kontext erfordern und liegt außerhalb des Umfangs dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie zunächst genau bestimmen, was Sie möchten. Dies spart Ihnen wertvolle Zeit. Insbesondere ist es wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Dazu ist es gut, mit einem bestehenden Steuerelement zu beginnen, dessen Zustände und Verhalten gut bekannt sind, damit Sie diese so weit wie möglich nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element nachbauen. Hier ist das Ergebnis, das wir erreichen wollen:

![Die drei Zustände einer Auswahlliste](custom-select.png)

Dieses Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links), den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

In Bezug auf das Verhalten erstellen wir ein natives HTML-Element nach. Daher sollte es das gleiche Verhalten und die gleiche Semantik wie das native HTML-Element haben. Unser Steuerelement muss mit der Maus und der Tastatur bedienbar und für einen Bildschirmleser verständlich sein, genau wie jedes native Steuerelement. Beginnen wir damit, zu definieren, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im normalen Zustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Benutzer irgendwo außerhalb klickt.
- das Steuerelement aktiv war und der Benutzer den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt (z. B. die

  <kbd>Tab</kbd>

  Taste).

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tabulatortaste drückt und es den Fokus erhält.
- das Steuerelement sich im offenen Zustand befand und der Benutzer darauf klickt.

**Das Steuerelement befindet sich im offenen Zustand, wenn:**

- das Steuerelement sich in einem anderen Zustand als offen befindet und der Benutzer darauf klickt.

Sobald wir wissen, wie man Zustände ändert, ist es wichtig zu definieren, wie man den Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, während sich das Steuerelement im offenen Zustand befindet.
- der Benutzer die Pfeiltasten nach oben oder unten drückt, wenn sich das Steuerelement im aktiven Zustand befindet.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Pfeiltaste nach oben drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Pfeiltaste nach unten drückt, wenn die letzte Option ausgewählt ist.

Schließlich definieren wir, wie die Optionen des Steuerelements verhalten sollen:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn die Maus über eine Option fährt, wird die Option hervorgehoben und die zuvor hervorgehobene Option wird in ihren normalen Zustand zurückgesetzt.

Für unser Beispiel lassen wir es dabei; jedoch, wenn Sie ein aufmerksamer Leser sind, werden Sie bemerken, dass einige Verhaltensweisen fehlen. Zum Beispiel, was passiert, wenn der Benutzer die Tabulatortaste drückt, während sich das Steuerelement im offenen Zustand befindet? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich, aber Tatsache ist, weil es nicht in unseren Spezifikationen definiert ist, ist es sehr leicht, dieses Verhalten zu übersehen. Dies ist besonders in einer Teamumgebung der Fall, wenn die Personen, die das Verhalten des Steuerelements entwerfen, andere sind als diejenigen, die es umsetzen.

Ein weiteres Beispiel: was passiert, wenn der Benutzer die Aufwärts- oder Abwärtspfeiltasten drückt, während sich das Steuerelement im offenen Zustand befindet? Dies ist etwas kniffliger. Wenn Sie davon ausgehen, dass der aktive Zustand und der offene Zustand völlig unterschiedlich sind, ist die Antwort erneut "nichts wird passieren", weil wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie davon ausgehen, dass der aktive Zustand und der offene Zustand sich ein wenig überlappen, könnte sich der Wert ändern, die Option wird jedoch definitiv nicht entsprechend hervorgehoben, weil wir keine Tastaturinteraktionen über Optionen definiert haben, wenn sich das Steuerelement im geöffneten Zustand befindet (wir haben nur definiert, was passieren soll, wenn das Steuerelement geöffnet wird, aber nichts danach).

Wir müssen ein bisschen weiterdenken: was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd> Taste schließt ein geöffnetes Select. Denken Sie daran, wenn Sie die gleiche Funktionalität wie das bestehende native {{htmlelement('select')}} bieten möchten, sollte es sich in jeder Hinsicht wie das Select verhalten: von der Tastatur zur Maus bis hin zur Berührung und zum Bildschirmleser sowie jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, also werden wir sie behandeln, aber es kann ein echtes Problem für neue exotische Steuerelemente sein. Bei standardisierten Elementen, wozu das {{htmlelement('select')}} gehört, haben die Autoren der Spezifikationen enorme Mengen an Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall und jedes Eingabegerät zu spezifizieren. Neue Steuerelemente zu erstellen, ist nicht so einfach, besonders wenn Sie etwas schaffen, das es vorher nicht gab, und daher niemand die geringste Ahnung hat, was die erwarteten Verhaltensweisen und Interaktionen sind. Mindestens das Select wurde vorher gemacht, also wissen wir, wie es sich verhalten soll!

Das Entwerfen neuer Interaktionen ist im Allgemeinen nur für sehr große Branchenakteure eine Option, die genug Einfluss haben, dass eine von ihnen geschaffene Interaktion zu einem Standard werden kann. Zum Beispiel führte Apple 2001 mit dem iPod das Scrollrad ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät einzuführen, etwas, was die meisten Geräteunternehmen nicht tun können.

Es ist am besten, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es wichtig, in der Entwurfsphase Zeit zu investieren; wenn Sie ein Verhalten schlecht definieren oder eines vergessen, wird es sehr schwer sein, es neu zu definieren, wenn die Benutzer es bereits gewohnt sind. Wenn Sie Zweifel haben, fragen Sie nach den Meinungen anderer und zögern Sie nicht, wenn Sie das Budget dafür haben, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird UX Design genannt. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX Design Abschnitt von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> In den meisten Systemen gibt es außerdem eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Auswahlmöglichkeiten anzusehen (das ist dasselbe wie das Klicken des {{HTMLElement("select")}}-Elements mit einer Maus). Dies wird unter Windows mit <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> erreicht. Wir haben dies nicht in unserem Beispiel implementiert, aber es wäre einfach zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einiger) Semantiken

Jetzt, da die grundlegende Funktionalität des Steuerelements festgelegt ist, ist es an der Zeit, mit dem Aufbau zu beginnen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm etwas grundlegende Semantik zu geben. Hier ist, was wir für den Nachbau eines {{HTMLElement("select")}}-Elements benötigen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten zugrunde liegenden HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine strenge HTML-Struktur binden, sodass wir Implementierungsänderungen später vornehmen können, ohne den Code zu brechen, der das Steuerelement verwendet. Zum Beispiel, was, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand "sieht" der Bildschirmleser lediglich eine ungeordnete Liste. Wir werden in Kürze ARIA-Semantiken hinzufügen.

## Erstellen des Aussehens mittels CSS

Jetzt, da wir eine Struktur haben, können wir mit dem Design unseres Steuerelements beginnen. Der gesamte Zweck des Aufbaus dieses benutzerdefinierten Steuerelements ist es, es genau so zu stylen, wie wir es möchten. Zu diesem Zweck werden wir unsere CSS-Arbeit in zwei Teile teilen: Der erste Teil sind CSS-Regeln, die unbedingt notwendig sind, um unser Steuerelement wie ein {{HTMLElement("select")}}-Element verhalten zu lassen, und der zweite Teil besteht aus den stilvollen Designs, die es so aussehen lassen, wie wir es möchten.

### Erforderliche Stile

Die erforderlichen Stile sind diejenigen, die nötig sind, um die drei Zustände unseres Steuerelements zu handhaben.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Aussehen und Verhalten unseres Steuerelements im aktiven Zustand zu definieren. Da unser Steuerelement fokussierbar ist, verdoppeln wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudoklasse, um sicherzustellen, dass sie gleich handeln.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Jetzt kümmern wir uns um die Liste der Optionen:

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

So, jetzt haben wir die grundlegende Funktionalität im Platz, der Spaß kann beginnen. Das Folgende ist nur ein Beispiel für das, was möglich ist, und es wird das abgebildete Screenshot am Anfang dieses Artikels nachahmen. Sie sollten jedoch experimentieren und sehen, was Sie sich einfallen lassen können.

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

Wir benötigen kein zusätzliches Element, um den Abwärtspfeil zu gestalten; stattdessen verwenden wir das {{cssxref("::after")}}-Pseudo-Element. Es könnte auch mit einem einfachen Hintergrundbild auf der `select`-Klasse implementiert werden.

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

Als nächstes stylen wir die Liste der Optionen:

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

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert zu identifizieren, den der Benutzer auswählen wird (oder bereits ausgewählt hat).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

Hier ist also das Ergebnis mit unseren drei Zuständen ([schauen Sie sich den Quellcode hier an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_1)):

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

## Ihrem Steuerelement Leben einhauchen mit JavaScript

Jetzt, da unser Design und die Struktur bereitstehen, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich zum Laufen zu bringen.

> [!WARNING]
> Der folgende Code ist Lerncode, kein Produktionscode, und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher noch wird er auf älteren Browsern funktionieren. Er enthält auch redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig, sich daran zu erinnern, dass **JavaScript im Browser eine unzuverlässige Technologie** ist. Benutzerdefinierte Steuerelemente verlassen sich auf JavaScript, um alles zu verbinden. Allerdings gibt es Fälle, in denen JavaScript nicht im Browser ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Dies ist ungewöhnlich; sehr wenige Menschen deaktivieren heutzutage JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, wo das Netzwerk nicht sehr verlässlich ist.
- Das Skript ist fehlerhaft: Diese Möglichkeit sollten Sie immer in Betracht ziehen.
- Das Skript steht in Konflikt mit einem Drittanbieter-Skript: Dies kann bei Tracking-Skripten oder anderen Bookmarklets, die der Benutzer verwendet, passieren.
- Das Skript steht in Konflikt mit, oder wird von, einer Browser-Erweiterung beeinflusst (wie z. B. der [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/)-Erweiterung von Firefox oder der [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba)-Erweiterung von Chrome).
- Der Benutzer verwendet einen älteren Browser, und eine der von Ihnen benötigten Funktionen wird nicht unterstützt: Dies wird häufig geschehen, wenn Sie hochmoderne APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Aufgrund dieser Risiken ist es sehr wichtig, ernsthaft darüber nachzudenken, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen in Betracht ziehen und die Grundlagen in unserem Beispiel behandeln (eine vollständige Diskussion über die Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie nur daran, es ist wichtig, dass Ihr Skript generisch und wiederverwendbar ist.

In unserem Beispiel, wenn unser JavaScript-Code nicht läuft, fallen wir auf die Anzeige eines standardmäßigen {{HTMLElement("select")}}-Elements zurück. Wir binden unser Steuerelement und das {{HTMLElement("select")}}; welches angezeigt wird, hängt von der Klasse des Body-Elements ab, wobei die Klasse des Body-Elements von dem Skript aktualisiert wird, das das Steuerelement zum Funktionieren bringt, wenn es erfolgreich geladen wird.

Um dies zu erreichen, benötigen wir zwei Dinge:

Erstens müssen wir vor jeder Instanz unseres benutzerdefinierten Steuerelements ein reguläres {{HTMLElement("select")}}-Element hinzufügen. Es gibt einen Vorteil, dieses "extra" Select zu haben, auch wenn unser JavaScript wie erhofft funktioniert: Wir verwenden dieses Select, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit den restlichen Formulardaten zu senden. Wir werden dies später ausführlicher diskutieren.

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

Zweitens benötigen wir zwei neue Klassen, um das nicht benötigte Element ausblenden zu können: wir blenden das Benutzerkontrollfeld visuell aus, wenn unser Skript nicht läuft, oder das "richtige" {{HTMLElement("select")}}-Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement ausblendet.

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

Dieses CSS blendet eines der Elemente visuell aus, es steht jedoch immer noch Bildschirmlesern zur Verfügung.

Jetzt benötigen wir einen JavaScript-Schalter, um festzustellen, ob das Skript läuft oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn unser Skript zur Ladezeit der Seite läuft, wird es die `no-widget`-Klasse entfernen und die `widget`-Klasse hinzufügen, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements gewechselt wird.

```js
window.addEventListener("load", () => {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

#### Ohne JS

Sehen Sie sich den [vollen Quellcode an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#no_js).

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

Sehen Sie sich den [vollen Quellcode an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#js).

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
> Wenn Sie Ihren Code wirklich generisch und wiederverwendbar machen möchten, ist es weitaus besser, einfach die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente auszublenden, und den DOM-Baum, der das benutzerdefinierte Steuerelement darstellt, dynamisch nach jedem {{HTMLElement("select")}}-Element auf der Seite hinzuzufügen.

### Den Job erleichtern

Im Code, den wir gleich erstellen werden, verwenden wir die Standard-JavaScript- und DOM-APIs, um all die Arbeit zu erledigen, die wir benötigen. Die Funktionen, die wir verwenden wollen, sind die folgenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Erstellen von Ereignis-Rückrufen

Die Grundarbeit ist erledigt. Wir können jetzt beginnen, alle Funktionen zu definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Steuerelement interagiert.

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

An diesem Punkt wird unser Steuerelement entsprechend unserem Entwurf den Zustand ändern, aber sein Wert wird noch nicht aktualisiert. Das werden wir als Nächstes behandeln.

#### Live-Beispiel

Sehen Sie sich den [vollen Quellcode an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_3).

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

### Handhabung des Wertes des Steuerelements

Jetzt, da unser Steuerelement funktioniert, müssen wir Code hinzufügen, um seinen Wert entsprechend der Benutzereingabe zu aktualisieren und ihn mit Formulardaten sendbar zu machen.

Der einfachste Weg, dies zu tun, ist die Verwendung eines nativen Steuerelements im Hintergrund. Ein solches Steuerelement verfolgt den Wert mit allen integrierten Steuerelementen, die der Browser bereitstellt, und der Wert wird, wie gewohnt, gesendet, wenn ein Formular abgeschickt wird. Es macht keinen Sinn, das Rad neu zu erfinden, wenn wir all das für uns erledigt haben können.

Wie bereits gesehen, verwenden wir bereits ein natives Select-Steuerelement als Fallback aus Zugänglichkeitsgründen; wir können seinen Wert mit dem des benutzerdefinierten Steuerelements synchronisieren:

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

Mit diesen beiden Funktionen können wir die nativen Steuerelemente mit den benutzerdefinierten verbinden:

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

Im obigen Code ist die Verwendung der [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft erwähnenswert. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Steuerelement niemals den Fokus erhält, und um sicherzustellen, dass unser benutzerdefiniertes Steuerelement den Fokus erhält, wenn der Benutzer die Tastatur oder Maus verwendet.

Damit sind wir fertig!

#### Live-Beispiel

Sehen Sie sich den [Quellcode hier an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_4).

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

Aber einen Moment mal, sind wir wirklich fertig?

## Zugänglich machen

Wir haben etwas gebaut, das funktioniert und obwohl wir weit von einer voll ausgestatteten Auswahlliste entfernt sind, funktioniert es gut. Aber was wir getan haben, ist nichts anderes als das Herumfummeln im DOM. Es hat keinen wirklichen semantischen Wert, und obwohl es wie eine Auswahlliste aussieht, ist es aus Sicht des Browsers keine, sodass unterstützende Technologien nicht in der Lage sein werden zu verstehen, dass es sich um eine Auswahlliste handelt. Kurz gesagt, diese hübsche neue Auswahlliste ist nicht zugänglich!

Zum Glück gibt es eine Lösung und sie heißt [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für "Accessible Rich Internet Application" und es ist [eine W3C-Spezifikation](https://www.w3.org/TR/wai-aria/), die speziell für das, was wir hier tun, entwickelt wurde: das Zugänglichmachen von Webanwendungen und benutzerdefinierten Steuerelementen. Es handelt sich im Wesentlichen um einen Satz von Attributen, die HTML erweitern, damit wir Rollen, Zustände und Eigenschaften besser beschreiben können, als ob das Element, das wir gerade entwickelt haben, das native Element wäre, für das es sich ausgibt. Die Verwendung dieser Attribute kann durch Bearbeiten des HTML-Markups erfolgen. Wir aktualisieren auch die ARIA-Attribute über JavaScript, sobald der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel verwenden wir die Rolle [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role). Es handelt sich um eine "komposite Rolle", was bedeutet, dass Elemente mit dieser Rolle erwarten, Kinder zu haben, jedes mit einer speziellen Rolle (in diesem Fall mindestens ein Kind mit der Rolle `option`).

Es ist auch erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf Standard-HTML-Markup angewendet werden. Zum Beispiel entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die Rolle `listbox` unseres Steuerelements die Rolle `list` des {{HTMLElement("ul")}}-Elements übertrifft. Zu diesem Zweck verwenden wir die Rolle `presentation`. Diese Rolle ist dazu gedacht, uns anzugeben, dass ein Element keine besondere Bedeutung hat und ausschließlich dazu dient, Informationen zu präsentieren. Wir werden es auf unser {{HTMLElement("ul")}}-Element anwenden.

Um die Rolle [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role) zu unterstützen, müssen wir unser HTML folgendermaßen aktualisieren:

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
> Es ist nicht notwendig, sowohl das `role`-Attribut als auch ein `class`-Attribut zu verwenden. Anstelle von `.option` verwenden Sie in Ihrem CSS die `[role="option"]` [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors).

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attributs reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Zustands- und Eigenschaftsattribute. Je mehr und besser Sie sie nutzen, desto besser wird Ihr Steuerelement von unterstützender Technologie verstanden. In unserem Fall werden wir unsere Verwendung auf ein Attribut begrenzen: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu kennzeichnen, welche Option derzeit ausgewählt ist; dies ermöglicht es unterstützenden Technologien, den Benutzer darüber zu informieren, welche die aktuelle Auswahl ist. Wir werden es dynamisch mit JavaScript verwenden, um die ausgewählte Option jedes Mal zu kennzeichnen, wenn der Benutzer eine auswählt. Zu diesem Zweck müssen wir unsere `updateValue()`-Funktion überarbeiten:

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

Es scheint einfacher gewesen zu sein, einen Bildschirmleser auf das außerhalb des Bildschirms befindliche Select zu fokussieren und unser stilisiertes zu ignorieren, aber dies ist keine zugängliche Lösung. Bildschirmleser sind nicht nur auf Menschen mit Blindheit beschränkt; auch Menschen mit Sehbehinderung und sogar mit perfekter Sehkraft verwenden sie. Aus diesem Grund können Sie den Bildschirmleser nicht auf ein Element außerhalb des Bildschirms fokussieren lassen.

Im Folgenden sehen Sie das endgültige Ergebnis all dieser Änderungen (Sie bekommen ein besseres Gefühl dafür, wenn Sie es mit einer unterstützenden Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/vision/) ausprobieren).

#### Live-Beispiel

Sehen Sie sich den [vollen Quellcode hier an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_5).

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

Wenn Sie weitermachen möchten, benötigt der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie versuchen können durchzuführen. Zwei Hinweise, um Ihnen dabei zu helfen: das erste Argument für alle unsere Funktionen ist dasselbe, was bedeutet, dass diese Funktionen denselben Kontext benötigen. Es wäre klug, ein Objekt zu erstellen, um diesen Kontext zu teilen.

## Ein alternativer Ansatz: Verwendung von Radiobuttons

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element unter Verwendung von nicht-semantischem HTML, CSS und JavaScript neu erfunden. Dieses Select wählte eine Option aus einer begrenzten Anzahl von Optionen aus, was die gleiche Funktionalität einer gleichnamigen Gruppe von {{htmlelement('input/radio', 'radio')}}-Schaltflächen hat.

Wir könnten dies daher mit Radiobuttons neu erfinden; sehen wir uns diese Option an.

Wir können mit einer völlig semantischen, zugänglichen, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Schaltflächen mit einem zugehörigen {{htmlelement('label')}} beginnen und die gesamte Gruppe mit einem semantisch geeigneten {{htmlelement('fieldset')}} und {{htmlelement('legend')}}-Paar beschriften.

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

Wir werden die Radiobutton-Liste (nicht die Legende/das Fieldset) ein wenig stylen, um sie etwas wie das frühere Beispiel aussehen zu lassen, nur um zu zeigen, dass es möglich ist:

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

Ohne JavaScript und nur mit ein wenig CSS können wir die Liste der Radiobuttons so stylen, dass nur das angekreuzte Element angezeigt wird. Wenn der Fokus innerhalb des `<ul>` im `<fieldset>` ist, öffnet sich die Liste und die Pfeiltasten nach oben und unten (sowie links und rechts) funktionieren, um die vorherigen und nächsten Elemente zu auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert bis zu einem gewissen Grad ohne JavaScript. Wir haben ein ähnliches Steuerelement zu unserem benutzerdefinierten Steuerelement erstellt, das funktioniert, selbst wenn das JavaScript versagt. Klingt nach einer großartigen Lösung, oder? Nun, nicht 100%. Es funktioniert bei der Tastatur, aber nicht wie erwartet bei einem Mausklick. Es scheint sinnvoller, Webstandards als Grundlage für benutzerdefinierte Steuerelemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unser Steuerelement hat jedoch nicht die gleiche Funktionalität wie ein `<select>` nativ.

Positiv zu vermerken ist, dass dieses Steuerelement voll zugänglich für einen Bildschirmleser und vollständig über die Tastatur navigierbar ist. Allerdings ist dieses Steuerelement kein Ersatz für {{htmlelement('select')}}. Es gibt Funktionalitäten, die sich unterscheiden und/oder fehlen. Zum Beispiel navigieren alle vier Pfeile durch die Optionen, aber das Klicken auf den Pfeil nach unten, wenn der Benutzer auf der letzten Schaltfläche ist, bringt ihn zur ersten Schaltfläche; es stoppt nicht oben und unten in der Optionsliste wie ein `<select>`.

Wir überlassen das Hinzufügen dieser fehlenden Funktionalität Ihnen als Übung.

## Fazit

Wir haben alle Grundlagen für den Bau eines benutzerdefinierten Formularelements gesehen, aber wie Sie sehen, ist es nicht trivial. Bevor Sie Ihr eigenes benutzerdefiniertes Steuerelement erstellen, überlegen Sie, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen können. Wenn Sie ein benutzerdefiniertes Steuerelement erstellen müssen, ist es oft einfacher, sich auf Drittanbieter-Bibliotheken zu verlassen, als Ihr eigenes zu erstellen. Aber wenn Sie eigene, bestehende Elemente ändern oder ein Framework verwenden, um ein bereits gebackenes Steuerelement zu implementieren, denken Sie daran, dass die Erstellung eines benutzerfreundlichen und zugänglichen Formularelements komplizierter ist, als es scheint.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihren eigenen Code schreiben:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente über Radiobuttons, Ihr eigenes JavaScript oder mit einer Drittanbieter-Bibliothek erstellen, stellen Sie sicher, dass sie zugänglich und zukunftssicher sind; das heißt, sie müssen besser mit einer Vielzahl von Browsern arbeiten, deren Kompatibilität mit den verwendeten Webstandards variiert. Viel Spaß!

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [Stylen von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- **Anleitung zum Erstellen benutzerdefinierter Formularelemente**
- [HTML-Formulare in älteren Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Erweiterte Stilgebung für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
