---
title: Anleitung zum Erstellen von benutzerdefinierten Formularelementen
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Es gibt einige Fälle, in denen die verfügbaren nativen HTML-Formularelemente möglicherweise nicht ausreichen. Wenn Sie beispielsweise ein [fortgeschrittenes Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) für einige Steuerelemente wie das {{HTMLElement("select")}} Element benötigen oder benutzerdefinierte Verhaltensweisen bereitstellen möchten, könnten Sie in Erwägung ziehen, Ihre eigenen Steuerelemente zu erstellen.

In diesem Artikel besprechen wir, wie man ein benutzerdefiniertes Steuerelement erstellt. Zu diesem Zweck werden wir mit einem Beispiel arbeiten: das {{HTMLElement("select")}} Element neu zu erstellen. Wir werden auch erörtern, wann und ob es sinnvoll ist, ein eigenes Steuerelement zu bauen und worauf zu achten ist, wenn der Bau eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns darauf, das Steuerelement zu erstellen, nicht darauf, wie man den Code generisch und wiederverwendbar gestaltet; das würde nicht-trivialen JavaScript-Code und DOM-Manipulation in einem unbekannten Kontext erfordern und über den Rahmen dieses Artikels hinausgehen.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie sich genau überlegen, was Sie erreichen möchten. Dies spart Ihnen einiges an wertvoller Zeit. Besonders wichtig ist es, alle Zustände Ihres Steuerelements klar zu definieren. Um dies zu tun, ist es gut, mit einem bestehenden Steuerelement zu beginnen, dessen Zustände und Verhalten gut bekannt sind, sodass Sie diese möglichst genau nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}} Element neu erstellen. Hier ist das gewünschte Ergebnis:

![Die drei Zustände eines Auswahlfeldes](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

In Bezug auf das Verhalten rekonstruieren wir ein natives HTML-Element. Es sollte daher das gleiche Verhalten und die gleichen Semantiken wie das native HTML Element haben. Unser Steuerelement muss sowohl mit der Maus als auch mit der Tastatur bedienbar und für einen Bildschirmleser verständlich sein, genau wie jedes native Steuerelement. Beginnen wir damit, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im Normalzustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Nutzer irgendwo außerhalb klickt.
- das Steuerelement aktiv war und der Nutzer den Fokus mit der Tastatur (z. B. <kbd>Tab</kbd>-Taste) auf ein anderes Steuerelement verschiebt.

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Nutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Nutzer die Tab-Taste drückt und es den Fokus erhält.
- das Steuerelement im offenen Zustand war und der Benutzer darauf klickt.

**Das Steuerelement befindet sich im offenen Zustand, wenn:**

- das Steuerelement sich in einem anderen Zustand als geöffnet befindet und der Benutzer darauf klickt.

Sobald wir wissen, wie Zustände geändert werden, ist es wichtig zu definieren, wie der Wert des Steuerelements geändert wird:

**Der Wert ändert sich, wenn:**

- der Nutzer eine Option klickt, wenn das Steuerelement im offenen Zustand ist.
- der Nutzer die Aufwärts- oder Abwärtspfeiltasten drückt, wenn das Steuerelement im aktiven Zustand ist.

**Der Wert ändert sich nicht, wenn:**

- der Nutzer die Aufwärtspfeiltaste drückt, wenn die erste Option ausgewählt ist.
- der Nutzer die Abwärtspfeiltaste drückt, wenn die letzte Option ausgewählt ist.

Schließlich definieren wir, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn sich die Maus über einer Option befindet, wird diese hervorgehoben und die zuvor hervorgehobene Option kehrt in den normalen Zustand zurück.

Für die Zwecke unseres Beispiels belassen wir es dabei; jedoch, wenn Sie ein aufmerksamer Leser sind, werden Sie bemerken, dass einige Verhaltensweisen fehlen. Zum Beispiel, was denken Sie passiert, wenn der Benutzer die Tabulator-Taste drückt, während das Steuerelement im offenen Zustand ist? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich, aber die Tatsache ist, dass wir es in unseren Spezifikationen nicht definiert haben, daher ist es sehr leicht, dieses Verhalten zu übersehen. Dies gilt besonders in einem Teamumfeld, wenn die Personen, die das Verhalten des Steuerelements entwerfen, andere als diejenigen sind, die es implementieren.

Ein weiteres interessantes Beispiel: Was passiert, wenn der Benutzer die Aufwärts- oder Abwärtspfeiltasten drückt, während das Steuerelement im offenen Zustand ist? Dies ist ein wenig kniffliger. Wenn Sie der Meinung sind, dass der aktive Zustand und der offene Zustand komplett unterschiedlich sind, lautet die Antwort erneut "es passiert nichts", da wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie der Meinung sind, dass der aktive Zustand und der offene Zustand sich etwas überschneiden, könnte sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, einmal mehr, weil wir keine Tastaturinteraktionen über Optionen definiert haben, wenn sich das Steuerelement im geöffneten Zustand befindet (wir haben nur festgelegt, was passieren soll, wenn das Steuerelement geöffnet wird, aber nichts danach).

Wir müssen etwas weiter denken: Was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt einen geöffneten Auswahlkasten. Denken Sie daran, wenn Sie die gleiche Funktionalität wie das bestehende native {{htmlelement('select')}} bereitstellen möchten, sollte es sich für alle Benutzer genauso verhalten wie der Select, von der Tastatur über die Maus bis hin zu Touchscreens und Bildschirmleser und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie ansprechen, aber es kann ein echtes Problem für exotische neue Steuerelemente sein. Bei standardisierten Elementen, zu denen das {{htmlelement('select')}} gehört, haben die Spezifikationsautoren viel Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall und für jedes Eingabegerät zu spezifizieren. Das Erstellen neuer Steuerelemente ist nicht so einfach, besonders wenn Sie etwas erstellen, das noch nicht getan wurde und daher niemand die leiseste Ahnung hat, was die erwarteten Verhaltensweisen und Interaktionen sind. Zumindest wurde Select schon vorher gemacht, daher wissen wir, wie es sich verhalten sollte!

Neue Interaktionen zu entwerfen, ist in der Regel nur eine Option für sehr große Industrieakteure, die genug Reichweite haben, damit eine von ihnen geschaffene Interaktion zum Standard werden kann. Zum Beispiel führte Apple 2001 mit dem iPod das Scrollrad ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät einzuführen, etwas, das die meisten Gerätefirmen nicht tun können.

Es ist am besten, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es wichtig, Zeit in die Entwurfsphase zu investieren; wenn Sie ein Verhalten schlecht definieren oder vergessen, eines zu definieren, wird es sehr schwierig sein, es neu zu definieren, wenn die Benutzer sich daran gewöhnt haben. Wenn Sie Zweifel haben, fragen Sie nach Meinungen von anderen, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird als UX-Design bezeichnet. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie die folgenden hilfreichen Ressourcen überprüfen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Auch in den meisten Systemen gibt es eine Möglichkeit, das {{HTMLElement("select")}} Element mit der Tastatur zu öffnen, um alle verfügbaren Optionen anzuzeigen (dies entspricht einem Klick auf das {{HTMLElement("select")}} Element mit der Maus). Dies erfolgt mit <kbd>Alt</kbd> + <kbd>Runter</kbd> auf Windows. Wir haben dies in unserem Beispiel nicht implementiert, aber es wäre einfach möglich, da der Mechanismus bereits für das `click` Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einiger) Semantiken

Da die grundlegende Funktionalität des Steuerelements entschieden wurde, ist es an der Zeit, es zu erstellen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm einige grundlegende Semantiken zu geben. Hier ist, was wir brauchen, um ein {{HTMLElement("select")}} Element neu zu erstellen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil, unabhängig von den tatsächlich verwendeten HTML-Elementen. Das ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine feste HTML-Struktur binden, damit wir Implementierungsänderungen später vornehmen können, ohne Code, der das Steuerelement verwendet, zu brechen. Was wäre zum Beispiel, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}} Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem gegenwärtigen Zustand "sieht" der Benutzer des Bildschirmlesers nur eine ungeordnete Liste. Wir werden später ARIA-Semantiken hinzufügen.

## Erstellen von Look and Feel mit CSS

Jetzt, da wir eine Struktur haben, können wir mit dem Design unseres Steuerelements beginnen. Die ganze Idee des Erstellens dieses benutzerdefinierten Steuerelements ist, es genau so zu stylen, wie wir es wollen. Zu diesem Zweck werden wir unsere CSS-Arbeit in zwei Teile unterteilen: Der erste Teil sind die absolut notwendigen CSS-Regeln, um unser Steuerelement so funktionieren zu lassen wie ein {{HTMLElement("select")}} Element, und der zweite Teil besteht aus den schicken Stilen, die wir verwenden, um es so aussehen zu lassen, wie wir es möchten.

### Erforderliche Stile

Die erforderlichen Stile sind jene, die nötig sind, um die drei Zustände unseres Steuerelements zu handhaben.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Aussehen und Verhalten unseres Steuerelements im aktiven Zustand zu definieren. Da unser Steuerelement fokussierbar ist, kombinieren wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}} Pseudoklasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Nun, behandeln wir die Liste der Optionen:

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

Wir benötigen eine zusätzliche Klasse, um zu handhaben, wann die Liste der Optionen ausgeblendet ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand zu verwalten, die nicht genau übereinstimmen.

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

Nun, da wir die grundlegende Funktionalität vorbereitet haben, kann der Spaß beginnen. Das Folgende ist nur ein Beispiel für das, was möglich ist, und entspricht dem Screenshot am Anfang dieses Artikels. Sie sollten jedoch experimentieren und sehen, was Ihnen einfällt.

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

Wir benötigen kein zusätzliches Element, um den Abwärtspfeil zu gestalten; stattdessen verwenden wir das {{cssxref("::after")}} Pseudoelement. Es könnte auch mit einem einfachen Hintergrundbild auf der `select` Klasse implementiert werden.

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

Für die Optionen müssen wir eine `highlight` Klasse hinzufügen, um den Wert identifizieren zu können, den der Benutzer auswählen wird (oder bereits ausgewählt hat).

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

## Belebung Ihres Steuerelements mit JavaScript

Nachdem unser Design und Struktur fertig sind, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich zu betreiben.

> [!WARNING]
> Der folgende Code ist ein Lerncode, kein Produktionscode, und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher noch funktioniert er auf älteren Browsern. Er enthält auch redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig zu bedenken, dass **JavaScript im Browser eine unzuverlässige Technologie** ist. Benutzerdefinierte Steuerelemente verlassen sich auf JavaScript, um alles zu verbinden. Es gibt jedoch Fälle, in denen JavaScript nicht im Browser ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Dies ist ungewöhnlich; sehr wenige Menschen deaktivieren heutzutage JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, wo das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Sie sollten immer diese Möglichkeit in Betracht ziehen.
- Das Skript steht in Konflikt mit einem fremden Skript: Dies kann bei Tracking-Skripten oder bei Lesezeichen passieren, die der Benutzer verwendet.
- Das Skript steht in Konflikt oder wird von einer Browsererweiterung beeinflusst (z. B. Firefox's [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) Erweiterung oder Chrome's [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) Erweiterung).
- Der Benutzer verwendet einen älteren Browser und eine der Funktionen, die Sie benötigen, wird nicht unterstützt: Dies tritt häufig auf, wenn Sie neueste APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, analysiert und ausgeführt wurde.

Aufgrund dieser Risiken ist es wirklich wichtig, ernsthaft zu überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen in Betracht ziehen und die Grundlagen in unserem Beispiel abdecken (eine vollständige Diskussion über die Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie einfach daran: Es ist wichtig, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht ausgeführt wird, zeigen wir ein Standard-{{HTMLElement("select")}} Element an. Wir binden unser Steuerelement und das {{HTMLElement("select")}} ein; welches angezeigt wird, hängt von der Klasse des Body-Elements ab. Die Klasse des Body-Elements wird von dem Skript, das das Steuerelement funktionsfähig macht, aktualisiert, wenn es erfolgreich geladen wird.

Um dies zu erreichen, benötigen wir zwei Dinge:

Erstens müssen wir ein reguläres {{HTMLElement("select")}} Element vor jeder Instanz unseres benutzerdefinierten Steuerelements hinzufügen. Es gibt einen Vorteil, dieses "zusätzliche" Select zu haben, auch wenn unser JavaScript wie gehofft funktioniert: Wir werden dieses Select verwenden, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit dem Rest unserer Formulardaten zu senden. Wir werden dies später ausführlicher besprechen.

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

Zweitens benötigen wir zwei neue Klassen, um das nicht benötigte Element auszublenden: Wir blenden das benutzerdefinierte Steuerelement aus, wenn unser Skript nicht läuft, oder das "echte" {{HTMLElement("select")}} Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement ausblendet.

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

Dieses CSS blendet eines der Elemente visuell aus, ist jedoch für Bildschirmleser weiterhin verfügbar.

Nun benötigen wir einen JavaScript-Schalter, um festzustellen, ob das Skript läuft oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn unser Skript zur Ladezeit der Seite läuft, entfernt es die `no-widget` Klasse und fügt die `widget` Klasse hinzu, wodurch die Sichtbarkeit des {{HTMLElement("select")}} Elements und des benutzerdefinierten Steuerelements vertauscht wird.

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
> Wenn Sie wirklich möchten, dass Ihr Code generisch und wiederverwendbar ist, ist es weit besser, einfach die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}} Elemente auszublenden und den DOM-Baum, der das benutzerdefinierte Steuerelement darstellt, dynamisch nach jedem {{HTMLElement("select")}} Element auf der Seite hinzuzufügen.

### Die Aufgabe erleichtern

Im Code, den wir gleich erstellen, verwenden wir die Standard-JavaScript- und DOM-APIs, um alle Arbeiten zu erledigen, die wir benötigen. Die von uns geplanten Funktionen sind wie folgt:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Aufbau von Ereignisrückrufen

Die Grundlagen sind erledigt. Wir können jetzt alle Funktionen definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Steuerelement interagiert.

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

An diesem Punkt, wird unser Steuerelement gemäß unserem Design den Zustand ändern, aber sein Wert wird noch nicht aktualisiert. Wir werden das als nächstes klären.

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
```

{{EmbedLiveSample("Live_example",120,130)}}

### Behandlung des Wertes des Steuerelements

Nun, da unser Steuerelement funktioniert, müssen wir Code hinzufügen, um seinen Wert entsprechend der Benutzerinteraktion zu aktualisieren und es möglich zu machen, den Wert zusammen mit den Formulardaten zu senden.

Der einfachste Weg, dies zu tun, ist die Verwendung eines nativen Steuerelements als Basis. Ein solches Steuerelement wird den Wert mit allen eingebauten Steuerelementen, die der Browser bereitstellt, nachverfolgen, und der Wert wird wie gewohnt gesendet, wenn ein Formular übermittelt wird. Es gibt keinen Grund, das Rad neu zu erfinden, wenn wir all dies für uns erledigen lassen können.

Wie zuvor gesehen, verwenden wir bereits ein natives Select-Steuerelement aus Zugänglichkeitsgründen als Fallback; wir können seinen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

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

In dem obigen Code ist es erwähnenswert, die Verwendung der [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex) Eigenschaft. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Steuerelement niemals den Fokus erhält und um sicherzustellen, dass unser benutzerdefiniertes Steuerelement den Fokus erhält, wenn der Benutzer seine Tastatur oder Maus verwendet.

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

Aber warten Sie einen Moment, sind wir wirklich fertig?

## Es zugänglich machen

Wir haben etwas gebaut, das funktioniert, und obwohl wir weit davon entfernt sind, einen voll ausgestatteten Auswahlkasten zu haben, funktioniert es gut. Aber was wir getan haben, ist nichts weiter als am DOM rumgepfuscht. Es hat keine echte Semantik, und obwohl es wie ein Auswahlfeld aussieht, ist es aus Sicht des Browsers keines, sodass unterstützende Technologien nicht verstehen können, dass es sich um ein Auswahlfeld handelt. Kurz gesagt, dieses hübsche neue Auswahlfeld ist nicht zugänglich!

Glücklicherweise gibt es eine Lösung und sie heißt [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für "Accessible Rich Internet Application", und es ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die speziell für das entwickelt wurde, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerelemente zugänglich zu machen. Es ist im Wesentlichen ein Satz von Attributen, die HTML erweitern, sodass wir die Rollen, Zustände und Eigenschaften besser beschreiben können, als ob das von uns entworfene Element das Nativelement wäre, das es versucht darzustellen. Die Verwendung dieser Attribute kann durch Bearbeiten des HTML-Codes erfolgen. Wir aktualisieren die ARIA-Attribute auch über JavaScript, sobald der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role` Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel werden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) Rolle verwenden. Es ist eine "komposite Rolle", was bedeutet, dass Elemente mit dieser Rolle erwarten, dass sie Kinder haben, von denen jedes eine spezifische Rolle hat (in diesem Fall mindestens ein Kind mit der `option` Rolle).

Es ist auch erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf das HTML-Markup angewendet werden. Zum Beispiel entspricht das {{HTMLElement("table")}} Element der Rolle `grid`, und das {{HTMLElement("ul")}} Element der Rolle `list`. Da wir ein {{HTMLElement("ul")}} Element verwenden, wollen wir sicherstellen, dass die `listbox` Rolle unseres Steuerelements die `list` Rolle des {{HTMLElement("ul")}} Elements überschreibt. Zu diesem Zweck verwenden wir die Rolle `presentation`. Diese Rolle ist so gestaltet, dass wir andeuten können, dass ein Element keine besondere Bedeutung hat und ausschließlich zur Darstellung von Informationen verwendet wird. Wir wenden es auf unser {{HTMLElement("ul")}} Element an.

Um die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) Rolle zu unterstützen, müssen wir nur unser HTML wie folgt aktualisieren:

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
> Es ist nicht notwendig, sowohl das `role` Attribut als auch ein `class` Attribut zu verwenden. Statt `.option` zu verwenden, nutzen Sie die `[role="option"]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected` Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) Attributs reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Zustände und Eigenschaftsattribute. Je mehr und besser Sie sie verwenden, desto besser wird Ihr Steuerelement von unterstützenden Technologien verstanden. In unserem Fall beschränken wir uns auf die Verwendung eines Attributs: `aria-selected`.

Das `aria-selected` Attribut wird verwendet, um zu markieren, welche Option derzeit ausgewählt ist; dies ermöglicht unterstützenden Technologien, den Benutzer darüber zu informieren, was die aktuelle Auswahl ist. Wir werden es dynamisch mit JavaScript verwenden, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Zu diesem Zweck müssen wir unsere `updateValue()` Funktion überarbeiten:

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

Es mag einfacher erschienen haben, einem Bildschirmleser den Fokus auf das außerhalb des Bildschirms liegende Select-Element zu überlassen und unser stilisiertes zu ignorieren, aber dies ist keine zugängliche Lösung. Bildschirmleser sind nicht auf blinde Menschen beschränkt; auch Menschen mit Sehschwäche und sogar mit perfektem Sehvermögen nutzen sie. Aus diesem Grund kann man den Bildschirmleser nicht auf ein außerhalb des Bildschirms liegendes Element fokussieren lassen.

Unten ist das endgültige Ergebnis all dieser Änderungen (Sie erhalten ein besseres Gefühl dafür, indem Sie es mit einer unterstützenden Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) ausprobieren).

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

Wenn Sie weitermachen möchten, benötigt der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie versuchen können, durchzuführen. Zwei Hinweise, die Ihnen dabei helfen könnten: Das erste Argument unserer gesamten Funktionen ist dasselbe, was bedeutet, dass diese Funktionen denselben Kontext benötigen. Es wäre klug, ein Objekt zu erstellen, das diesen Kontext teilt.

## Ein alternativer Ansatz: Verwendung von Optionsfeldern

Im obigen Beispiel haben wir ein {{htmlelement('select')}} Element mit nicht-semantischem HTML, CSS und JavaScript neu erfunden. Dieser Select wählt eine Option aus einer begrenzten Anzahl von Optionen aus, was die gleiche Funktionalität ist wie die einer gleichnamigen Gruppe von {{htmlelement('input/radio', 'radio')}} Buttons.

Wir könnten dies daher mit Optionsfeldern neu erfinden; schauen wir uns diese Option an.

Wir können mit einer vollständig semantischen, zugänglichen, ungeordneten Liste von {{htmlelement('input/radio','radio')}} Buttons mit einem zugehörigen {{htmlelement('label')}}, die die gesamte Gruppe mit einem semantisch passenden {{htmlelement('fieldset')}} und {{htmlelement('legend')}} umschließt, beginnen.

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

Wir werden die Liste der Optionsfelder (nicht die Legende/Feldsatz) etwas stylen, um sie ein wenig wie das vorherige Beispiel aussehen zu lassen, nur um zu zeigen, dass es möglich ist:

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

Ohne JavaScript und nur mit ein wenig CSS können wir die Liste der Optionsfelder so stilisieren, dass nur das angekreuzte Element angezeigt wird. Wenn der Fokus innerhalb des `<ul>` im `<fieldset>` liegt, öffnet sich die Liste und die Auf- und Abwärtspfeile (sowie die links und rechts) funktionieren, um die vorherigen und nächsten Elemente auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert bis zu einem gewissen Grad ohne JavaScript. Wir haben ein ähnliches Steuerelement zu unserem benutzerdefinierten Steuerelement erstellt, das funktioniert, auch wenn das JavaScript fehlschlägt. Sieht aus wie eine tolle Lösung, oder? Nun, nicht zu 100%. Es funktioniert mit der Tastatur, aber nicht so wie erwartet bei einem Mausklick. Es ist wahrscheinlich sinnvoller, Webstandards als Grundlage für benutzerdefinierte Steuerelemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unser Steuerelement hat jedoch nicht die gleiche Funktionalität wie ein `<select>` nativ hat.

Auf der positiven Seite ist dieses Steuerelement vollständig für einen Bildschirmleser zugänglich und vollständig mit der Tastatur navigierbar. Dieses Steuerelement ist jedoch kein {{htmlelement('select')}} Ersatz. Es gibt Funktionalitäten, die unterschiedlich sind und/oder fehlen. Beispielsweise navigieren alle vier Pfeile durch die Optionen, aber das Klicken auf den Abwärtspfeil, wenn sich der Benutzer auf dem letzten Button befindet, führt ihn zum ersten Button; es stoppt nicht oben und unten von der Auswahlliste der Optionen wie ein `<select>` es tut.

Wir überlassen das Hinzufügen dieser fehlenden Funktionalität als Übung für den Leser.

## Fazit

Wir haben alle Grundlagen des Aufbaus eines benutzerdefinierten Formularelements gesehen, aber wie Sie sehen können, ist es nicht trivial, dies zu tun. Bevor Sie Ihr eigenes angepasstes Steuerelement erstellen, sollten Sie überlegen, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen können. Wenn Sie ein benutzerdefiniertes Steuerelement erstellen müssen, ist es oft einfacher, sich auf Drittanbieter-Bibliotheken zu verlassen, anstatt Ihr eigenes zu bauen. Aber wenn Sie Ihr eigenes erstellen, bestehende Elemente modifizieren oder ein Framework verwenden, um ein fertiges Steuerelement zu implementieren, denken Sie daran, dass die Erstellung eines benutzerfreundlichen und zugänglichen Formularelements komplizierter ist, als es aussieht.

Hier sind ein paar Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihr eigenes kodieren:

- [jQuery UI](https://jqueryui.com/)
- [AXE barrierefreie benutzerdefinierte Dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente über Optionsfelder, Ihr eigenes JavaScript oder mit einer Drittanbieter-Bibliothek erstellen, stellen Sie sicher, dass es zugänglich und zukunftssicher ist; das heißt, es muss mit einer Vielzahl von Browsern besser funktionieren, deren Kompatibilität mit den verwendeten Web-Standards variiert. Viel Spaß!
