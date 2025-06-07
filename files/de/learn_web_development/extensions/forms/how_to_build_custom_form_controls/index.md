---
title: Anleitung zum Erstellen benutzerdefinierter Formularelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Es gibt einige Fälle, in denen die verfügbaren nativen HTML-Formularelemente nicht ausreichend erscheinen. Beispielsweise wenn Sie eine [erweiterte Stilgestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) bei einigen Elementen wie dem {{HTMLElement("select")}}-Element durchführen müssen oder wenn Sie benutzerdefinierte Verhaltensweisen bereitstellen möchten. In solchen Fällen könnten Sie in Betracht ziehen, Ihre eigenen Elemente zu erstellen.

In diesem Artikel werden wir diskutieren, wie man ein benutzerdefiniertes Element erstellt. Dazu werden wir mit einem Beispiel arbeiten: das Nachbauen des {{HTMLElement("select")}}-Elements. Wir werden auch besprechen, wie, wann und ob es sinnvoll ist, ein eigenes Element zu bauen und welche Überlegungen anzustellen sind, wenn der Bau eines Elements erforderlich ist.

> [!NOTE]
> Wir werden uns darauf konzentrieren, das Element zu erstellen, nicht darauf, wie man den Code generisch und wiederverwendbar macht; das würde einige nicht triviale JavaScript-Codes und DOM-Manipulationen in einem unbekannten Kontext erfordern, und das liegt außerhalb des Umfangs dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie mit dem Bau eines benutzerdefinierten Elements beginnen, sollten Sie sich genau überlegen, was Sie möchten. Das spart Ihnen wertvolle Zeit. Es ist besonders wichtig, alle Zustände Ihres Elements klar zu definieren. Dazu ist es gut, mit einem vorhandenen Element zu beginnen, dessen Zustände und Verhalten bekannt sind, um diese so weit wie möglich nachzuahmen.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element nachbauen. Hier ist das gewünschte Ergebnis:

![Die drei Zustände einer Auswahlliste](custom-select.png)

Dieses Bildschirmfoto zeigt die drei Hauptzustände unseres Elements: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

In Bezug auf das Verhalten erstellen wir ein natives HTML-Element nach. Daher sollte es die gleichen Verhaltensweisen und die gleiche Semantik wie das native HTML-Element haben. Unser Element muss mit der Maus sowie über die Tastatur bedienbar sein und für einen Screenreader verständlich sein, genau wie jedes native Element. Lassen Sie uns damit beginnen, zu definieren, wie das Element jeden Zustand erreicht:

**Das Element befindet sich im normalen Zustand, wenn:**

- die Seite geladen wird.
- das Element aktiv war und der Benutzer irgendwo außerhalb davon klickt.
- das Element aktiv war und der Benutzer den Fokus mit der Tastatur auf ein anderes Element verschiebt (z. B. mit der <kbd>Tab</kbd>-Taste).

**Das Element befindet sich im aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tab-Taste drückt und es den Fokus erhält.
- das Element im offenen Zustand war und der Benutzer darauf klickt.

**Das Element befindet sich im offenen Zustand, wenn:**

- das Element in einem anderen als dem offenen Zustand ist und der Benutzer darauf klickt.

Sobald wir wissen, wie die Zustände gewechselt werden, ist es wichtig zu definieren, wie der Wert des Elements geändert wird:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, wenn sich das Element im offenen Zustand befindet.
- der Benutzer die Pfeil-nach-oben- oder Pfeil-nach-unten-Taste drückt, wenn sich das Element im aktiven Zustand befindet.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Pfeil-nach-oben-Taste drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Pfeil-nach-unten-Taste drückt, wenn die letzte Option ausgewählt ist.

Letztlich wollen wir definieren, wie sich die Optionen des Elements verhalten:

- Wenn das Element geöffnet ist, wird die ausgewählte Option hervorgehoben.
- Wenn der Mauszeiger über einer Option ist, wird die Option hervorgehoben und die zuvor hervorgehobene Option in ihren normalen Zustand zurückversetzt.

Für die Zwecke unseres Beispiels werden wir an dieser Stelle aufhören. Wenn Sie jedoch aufmerksam sind, werden Sie feststellen, dass einige Verhaltensweisen fehlen. Beispielsweise, was glauben Sie, passiert, wenn der Benutzer die Tab-Taste drückt, während sich das Element im offenen Zustand befindet? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich, aber Tatsache ist, weil es nicht in unseren Spezifikationen definiert ist, wird dieses Verhalten leicht übersehen. Das gilt besonders in einem Teamumfeld, wenn die Personen, die das Verhalten des Elements entwerfen, von denen, die es implementieren, unterschiedlich sind.

Ein weiteres Beispiel: Was passiert, wenn der Benutzer die Pfeil-nach-oben- oder Pfeil-nach-unten-Tasten drückt, während sich das Element im offenen Zustand befindet? Dies ist etwas kniffliger. Wenn man davon ausgeht, dass der aktive Zustand und der offene Zustand völlig unterschiedlich sind, ist die Antwort erneut "nichts wird passieren", da wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn man davon ausgeht, dass der aktive und der offene Zustand sich etwas überlappen, könnte sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, wieder weil wir keine Tastaturinteraktionen für Optionen definiert haben, wenn sich das Element im geöffneten Zustand befindet (wir haben nur definiert, was passieren soll, wenn das Element geöffnet wird, aber danach nichts mehr).

Wir müssen weiterdenken: Was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt eine geöffnete Auswahl. Denken Sie daran, wenn Sie dieselbe Funktionalität wie das vorhandene native {{htmlelement('select')}} bereitstellen möchten, sollte es für alle Benutzer, von der Tastatur zur Maus bis hin zu Berührungen zu Screenreadern und jedem anderen Eingabegerät, genau gleich wie die Auswahl funktionieren.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, also werden wir sie handhaben, aber es kann ein echtes Problem für exotische neue Elemente sein. Wenn es um standardisierte Elemente geht, von denen das {{htmlelement('select')}} eines ist, haben die Spezifikationsautoren Unmengen an Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall für jedes Eingabegerät zu spezifizieren. Neue Elemente zu erstellen ist nicht einfach, besonders wenn Sie etwas kreieren, was es vorher noch nicht gab, und deshalb niemand die geringste Ahnung hat, was die erwarteten Verhaltensweisen und Interaktionen sind. Zumindest wurde die Auswahl schon vorher gemacht, also wissen wir, wie sie sich verhalten sollte!

Neue Interaktionen zu gestalten ist in der Regel nur eine Option für sehr große Branchenakteure, die genug Einfluss haben, um eine von ihnen geschaffene Interaktion zu einem Standard zu machen. Zum Beispiel hat Apple 2001 das Scroll-Rad mit dem iPod eingeführt. Sie hatten den Marktanteil, um eine völlig neue Art der Interaktion mit einem Gerät erfolgreich einzuführen, etwas, das die meisten Gerätefirmen nicht können.

Es ist am besten, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es entscheidend, sich in der Gestaltungsphase Zeit zu nehmen; wenn Sie ein Verhalten schlecht definieren oder es versäumen, eines zu definieren, wird es sehr schwierig sein, es neu zu definieren, sobald sich die Benutzer daran gewöhnt haben. Wenn Sie Zweifel haben, fragen Sie nach den Meinungen anderer, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird als UX-Design bezeichnet. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Außerdem gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Auswahlmöglichkeiten anzusehen (das ist dasselbe wie das Klicken auf das {{HTMLElement("select")}}-Element mit einer Maus). Dies wird mit <kbd>Alt</kbd> + <kbd>Down</kbd> unter Windows erreicht. Wir haben das nicht in unserem Beispiel implementiert, aber es wäre einfach, es zu tun, da der Mechanismus für das `click`-Ereignis bereits umgesetzt wurde.

## Definition der HTML-Struktur und (einige) Semantiken

Jetzt, da die grundlegende Funktionalität des Elements festgelegt wurde, ist es an der Zeit, mit dem Aufbau zu beginnen. Der erste Schritt besteht darin, die HTML-Struktur zu definieren und ihr einige grundlegende Semantiken zu geben. Hier ist, was wir benötigen, um ein {{HTMLElement("select")}}-Element nachzubauen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten zugrunde liegenden HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine starre HTML-Struktur binden, sodass wir Implementierungsänderungen später vornehmen können, ohne den Code zu brechen, der das Element verwendet. Zum Beispiel, was, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand sieht der Bildschirmleser-Benutzer nur eine ungeordnete Liste. Wir werden in Kürze ARIA-Semantiken hinzufügen.

## Erstellung des Erscheinungsbildes mit CSS

Jetzt, da wir eine Struktur haben, können wir mit dem Design unseres Elements beginnen. Der ganze Sinn dieses benutzerdefinierten Elements besteht darin, es genau so zu stylen, wie wir es möchten. Zu diesem Zweck werden wir unsere CSS-Arbeit in zwei Teile aufteilen: Der erste Teil wird die CSS-Regeln umfassen, die unbedingt erforderlich sind, damit unser Element wie ein {{HTMLElement("select")}}-Element funktioniert, und der zweite Teil besteht aus den ausgefallenen Stilen, die verwendet werden, um es so aussehen zu lassen, wie wir möchten.

### Erforderliche Stile

Die erforderlichen Stile sind diejenigen, die notwendig sind, um die drei Zustände unseres Elements zu handhaben.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Erscheinungsbild unseres Elements zu definieren, wenn es sich im aktiven Zustand befindet. Da unser Element fokussierbar ist, doppeln wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudo-Klasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Nun lassen Sie uns die Liste der Optionen behandeln:

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
> Wir könnten auch `transform: scale(1, 0)` verwenden, um der Option-Liste keine Höhe und volle Breite zu geben.

### Verschönerung

Jetzt, da wir die grundlegende Funktionalität an Ort und Stelle haben, kann der Spaß beginnen. Das Folgende ist nur ein Beispiel dafür, was möglich ist, und wird dem Screenshot am Anfang dieses Artikels entsprechen. Allerdings sollten Sie sich frei fühlen, zu experimentieren und zu sehen, was Sie sich einfallen lassen können.

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

Wir benötigen kein zusätzliches Element, um den nach unten weisenden Pfeil zu gestalten; stattdessen verwenden wir das {{cssxref("::after")}}-Pseudo-Element. Es könnte auch umgesetzt werden, indem einfach ein Hintergrundbild auf der `select`-Klasse verwendet wird.

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

Nun, lass uns die Liste der Optionen stylen:

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

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert identifizieren zu können, den der Benutzer auswählen wird (oder ausgewählt hat).

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

## Ihr Element mit JavaScript zum Leben erwecken

Jetzt, da unser Design und unsere Struktur bereit sind, können wir den JavaScript-Code schreiben, um das Element tatsächlich funktionieren zu lassen.

> [!WARNING]
> Der folgende Code ist Lehrmaterial, kein Produktionscode, und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher noch funktioniert er bei älteren Browsern. Es gibt auch redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig, sich zu erinnern **JavaScript im Browser ist eine unzuverlässige Technologie**. Benutzerdefinierte Elemente verlassen sich auf JavaScript, um alles zu verbinden. Es gibt jedoch Fälle, in denen JavaScript nicht im Browser ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Das ist ungewöhnlich; sehr wenige Menschen deaktivieren heutzutage JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, besonders in der mobilen Welt, wo das Netzwerk nicht zuverlässig ist.
- Das Skript enthält Fehler: Sie sollten diese Möglichkeit immer in Betracht ziehen.
- Das Skript steht im Konflikt mit einem Drittanbieter-Skript: Dies kann mit Tracking-Skripten oder einem Bookmarklet vorkommen, das der Benutzer verwendet.
- Das Skript steht im Konflikt mit einer Browsererweiterung (wie die [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/)-Erweiterung von Firefox oder die [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba)-Erweiterung von Chrome).
- Der Benutzer verwendet einen alten Browser, und eine von Ihnen benötigte Funktion wird nicht unterstützt: Dies wird häufig passieren, wenn Sie auf Schneidekanten-APIs zurückgreifen.
- Der Benutzer interagiert mit dem Inhalt bevor JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Aufgrund dieser Risiken ist es sehr wichtig, ernsthaft zu überlegen, was passieren wird, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen diskutieren, die in Betracht zu ziehen sind, und die Grundlagen in unserem Beispiel behandeln (eine vollständige Diskussion über die Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie daran, es ist wichtig, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht ausgeführt wird, werden wir auf die Darstellung eines Standard-{{HTMLElement("select")}}-Elements zurückfallen. Wir schließen unser Element und das {{HTMLElement("select")}} ein; welches angezeigt wird, hängt von der Klasse des body-Elements ab, wobei die Klasse des body-Elements durch das Skript aktualisiert wird, das das Element funktionsfähig macht, wenn es erfolgreich geladen wird.

Um dies zu erreichen, benötigen wir zwei Dinge:

Erstens müssen wir ein reguläres {{HTMLElement("select")}}-Element vor jeder Instanz unseres benutzerdefinierten Elements hinzufügen. Es gibt einen Vorteil, diese "extra" Auswahl zu haben, selbst wenn unser JavaScript wie erhofft funktioniert: wir werden diese Auswahl verwenden, um Daten von unserem benutzerdefinierten Element zusammen mit den restlichen Formulardaten zu senden. Wir werden dies später ausführlicher behandeln.

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

Zweitens brauchen wir zwei neue Klassen, um uns das unbenötigte Element auszublenden: wir verbergen das benutzerdefinierte Element optisch, wenn unser Skript nicht ausgeführt wird, oder das "echte" {{HTMLElement("select")}}-Element, wenn es ausgeführt wird. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Element ausblendet.

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

Dieser CSS-Code blendet eines der Elemente optisch aus, aber es ist immer noch für Screenreader verfügbar.

Jetzt brauchen wir einen JavaScript-Schalter, um zu bestimmen, ob das Skript ausgeführt wird oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn zum Zeitpunkt des Seitenladens unser Skript ausgeführt wird, entfernt es die `no-widget`-Klasse und fügt die `widget`-Klasse hinzu, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Elements vertauscht wird.

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
> Wenn Sie Ihren Code wirklich generisch und wiederverwendbar machen möchten, ist es besser, anstelle eines Klassenschalters einfach die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente zu verstecken, und den DOM-Baum, der das benutzerdefinierte Element repräsentiert, dynamisch nach jedem {{HTMLElement("select")}}-Element auf der Seite hinzuzufügen.

### Den Job erleichtern

In dem Code, den wir jetzt erstellen werden, werden wir die Standard-JavaScript- und DOM-APIs verwenden, um alle Arbeiten, die wir benötigen, durchzuführen. Die Features, die wir verwenden möchten, sind:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Ereignis-Callbacks erstellen

Die Grundarbeit ist erledigt. Wir können nun anfangen, alle Funktionen zu definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Element interagiert.

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

Diese benötigen Sie, um die verschiedenen Zustände des benutzerdefinierten Elements zu handhaben.

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

Zu diesem Zeitpunkt wechselt unser Element den Zustand gemäß unserem Design, aber sein Wert wird noch nicht aktualisiert. Das werden wir als nächstes handhaben.

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

  border: 0.2em solid #000; /* 2px */
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

### Den Wert des Elements handhaben

Jetzt, da unser Element funktioniert, müssen wir den Code hinzufügen, um seinen Wert entsprechend der Benutzereingabe zu aktualisieren und es ermöglichen, den Wert zusammen mit den Formulardaten zu senden.

Der einfachste Weg, dies zu tun, ist die Verwendung eines nativen Elements im Hintergrund. Ein solches Element wird den Wert mit allen eingebauten Kontrollen des Browsers verfolgen, und der Wert wird wie gewohnt gesendet, wenn ein Formular abgeschickt wird. Es besteht keine Notwendigkeit, das Rad neu zu erfinden, wenn dies alles für uns erledigt werden kann.

Wie bereits gezeigt, verwenden wir bereits ein natives Auswahl-Element als Fallback aus Gründen der Barrierefreiheit; wir können seinen Wert mit dem unseres benutzerdefinierten Elements synchronisieren:

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

Mit diesen beiden Funktionen können wir die nativen Elemente mit den benutzerdefinierten verknüpfen:

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

Im obigen Code ist es erwähnenswert, die Verwendung der [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft zu beachten. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Element nie den Fokus erhält, und um sicherzustellen, dass unser benutzerdefiniertes Element den Fokus erhält, wenn der Benutzer seine Tastatur oder Maus verwendet.

Damit sind wir fertig!

#### Live-Beispiel

Schauen Sie sich den [Quellcode hier an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4).

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

Aber warten Sie einen Moment, sind wir wirklich fertig?

## Es zugänglich machen

Wir haben etwas gebaut, das funktioniert, und obwohl wir weit entfernt von einem voll ausgestatteten Auswahlfeld sind, funktioniert es gut. Aber was wir getan haben, ist nichts weiter als das Herumspielen mit dem DOM. Es hat keine reale Semantik, und obwohl es wie ein Auswahlfeld aussieht, ist es aus der Sicht des Browsers keines, sodass unterstützende Technologien nicht verstehen können, dass es sich um ein Auswahlfeld handelt. Kurz gesagt, dieses hübsche neue Auswahlfeld ist nicht zugänglich!

Glücklicherweise gibt es eine Lösung, und die nennt sich [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für "Accessible Rich Internet Application" und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die speziell dafür entwickelt wurde, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerungen zugänglich machen. Es ist im Grunde eine Reihe von Attributen, die HTML erweitern, sodass wir besser beschreiben können, welche Rollen, Zustände und Eigenschaften das von uns entworfene Element hat, als wäre es das native Element, das es vorgibt zu sein. Die Verwendung dieser Attribute kann durch Bearbeiten des HTML-Markups erfolgen. Wir aktualisieren auch die ARIA-Attribute über JavaScript, sobald der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel werden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle verwenden. Es ist eine "kompositorische Rolle", was bedeutet, dass Elemente mit dieser Rolle erwarten, Kinder zu haben, die jeweils eine spezifische Rolle haben (in diesem Fall mindestens ein Kind mit der `option`-Rolle).

Es ist auch erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf standardmäßiges HTML-Markup angewendet werden. Zum Beispiel entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die `listbox`-Rolle unseres Elements die `list`-Rolle des {{HTMLElement("ul")}}-Elements ersetzen wird. Dazu verwenden wir die Rolle `presentation`. Diese Rolle ist dafür ausgelegt, uns anzugeben, dass ein Element keine besondere Bedeutung hat und ausschließlich zur Präsentation von Informationen verwendet wird. Wir werden es auf unser {{HTMLElement("ul")}}-Element anwenden.

Um die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle zu unterstützen, müssen wir nur unser HTML folgendermaßen aktualisieren:

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
> Die gleichzeitige Verwendung des `role`-Attributs und eines `class`-Attributs ist nicht notwendig. Anstelle der Verwendung von `.option` verwenden Sie die `[role="option"]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attributs reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Status- und Eigenschaftsattribute. Je mehr und besser Sie sie verwenden, desto besser wird Ihr Element von unterstützenden Technologien verstanden. In unserem Fall werden wir unsere Nutzung auf ein Attribut beschränken: `aria-selected`.

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

Es könnte einfacher erschienen sein, einen Screenreader auf das außerhalb des Bildschirms liegende Auswahlfeld zu fokussieren und unser stilisiertes zu ignorieren, aber dies ist keine zugängliche Lösung. Screenreader sind nicht nur auf blinde Menschen beschränkt; auch Menschen mit eingeschränktem Sehvermögen und sogar mit perfektem Sehvermögen verwenden sie. Aus diesem Grund kann man den Screenreader nicht auf ein außerhalb des Bildschirms liegendes Element fokussieren lassen.

Unten ist das Endergebnis all dieser Änderungen (Sie bekommen ein besseres Gefühl dafür, indem Sie es mit einer unterstützenden Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) ausprobieren).

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

Wenn Sie weitermachen möchten, braucht der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie versuchen können. Zwei Hinweise, die Ihnen dabei helfen: das erste Argument aller unserer Funktionen ist dasselbe, was bedeutet, dass diese Funktionen denselben Kontext benötigen. Es wäre klug, ein Objekt zu erstellen, um diesen Kontext zu teilen.

## Ein alternativer Ansatz: Verwendung von Auswahlknöpfen

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht-semantischem HTML, CSS und JavaScript neu erfunden. Diese Auswahl wählte eine Option aus einer begrenzten Anzahl von Optionen aus, was dieselbe Funktionalität einer gleichnamigen Gruppe von {{htmlelement('input/radio', 'radio')}}-Knöpfen ist.

Wir könnten dies daher auch mit Auswahlknöpfen neu erfinden; lassen Sie uns diese Option betrachten.

Wir können mit einer völlig semantischen, zugänglichen, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Knöpfen mit einem zugehörigen {{htmlelement('label')}} beginnen, wobei die gesamte Gruppe mit einem semantisch geeigneten {{htmlelement('fieldset')}} und {{htmlelement('legend')}}-Paar beschriftet wird.

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

Wir werden die Auswahlknopfliste (nicht die Legende/Fieldset) ein wenig stylen, um sie ein bisschen wie das frühere Beispiel aussehen zu lassen, nur um zu zeigen, dass es gemacht werden kann:

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

Ohne JavaScript und mit nur ein wenig CSS können wir die Liste der Auswahlknöpfe so stylen, dass nur das angekreuzte Element angezeigt wird. Wenn der Fokus sich innerhalb der `<ul>` im `<fieldset>` befindet, öffnet sich die Liste, und die Pfeile nach oben und unten (und links und rechts) funktionieren, um das vorherige und nächste Element auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert, bis zu einem gewissen Grad, ohne JavaScript. Wir haben ein ähnliches Kontrollelement wie unser benutzerdefiniertes Element erstellt, das funktioniert, selbst wenn das JavaScript fehlschlägt. Klingt nach einer großartigen Lösung, oder? Nun, nicht ganz. Es funktioniert mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es scheint mehr Sinn zu machen, Webstandards als Grundlage für benutzerdefinierte Kontrollelemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unser Element hat jedoch nicht die gleiche Funktionalität wie ein `<select>`-Element nativ.

Auf der positiven Seite ist dieses Element voll zugänglich für einen Screenreader und vollständig über die Tastatur navigierbar. Dieses Element ist jedoch kein Ersatz für ein {{htmlelement('select')}}. Es gibt Funktionsweisen, die sich unterscheiden und/oder fehlen. Zum Beispiel navigieren alle vier Pfeile durch die Optionen, aber das Klicken des Abwärtspfeils, wenn der Benutzer auf dem letzten Knopf ist, bringt ihn zum ersten Knopf; es endet nicht am oberen und unteren Ende der Optionsliste wie ein `<select>`.

Wir überlassen Ihnen das Hinzufügen dieser fehlenden Funktionalität als Leserübung.

## Schlussfolgerung

Wir haben alle Grundlagen zum Erstellen eines benutzerdefinierten Formularelements gesehen, aber wie Sie sehen, ist es nicht trivial. Bevor Sie Ihr eigenes benutzerdefiniertes Element erstellen, überlegen Sie, ob HTML alternative Elemente bereitstellt, die Ihre Anforderungen ausreichend unterstützen können. Wenn Sie dennoch ein benutzerdefiniertes Element erstellen müssen, ist es oft einfacher, auf Drittanbieter-Bibliotheken zurückzugreifen, anstatt Ihr eigenes zu erstellen. Aber, wenn Sie Ihr eigenes erstellen, vorhandene Elemente modifizieren oder ein Framework verwenden, um ein vorgefertigtes Element zu implementieren, denken Sie daran, dass die Erstellung eines benutzbaren und zugänglichen Formularelements komplizierter ist, als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihr eigenes programmieren:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Elemente über Auswahlknöpfe, Ihr eigenes JavaScript oder mit einer Drittanbieter-Bibliothek erstellen, stellen Sie sicher, dass es zugänglich und zukunftssicher ist; das heißt, es muss mit einer Vielzahl von Browsern besser funktionieren können, deren Kompatibilität mit den von ihnen verwendeten Webstandards variiert. Viel Spaß!
