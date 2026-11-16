---
title: Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente
short-title: Benutzerdefinierte Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: e976b4bf6b9e0c68b4321904560df47804d8cc48
---

Die verfügbaren nativen HTML-Formularsteuerelemente bieten möglicherweise nicht in allen Fällen genügend Funktionalität. Wenn Sie beispielsweise für bestimmte Steuerelemente wie das {{HTMLElement("select")}}-Element [erweiterte Gestaltungsmöglichkeiten](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) benötigen oder ein eigenes Verhalten bereitstellen möchten, können Sie eigene Steuerelemente erstellen.

In diesem Artikel besprechen wir, wie Sie ein benutzerdefiniertes Steuerelement erstellen. Dazu bilden wir das {{HTMLElement("select")}}-Element nach. Außerdem besprechen wir, ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen, und welche Anforderungen Sie dabei berücksichtigen sollten.

> [!NOTE]
> Wir konzentrieren uns auf die Erstellung des Steuerelements, nicht darauf, den Code allgemein verwendbar und wiederverwendbar zu machen. Letzteres würde nicht trivialen JavaScript-Code und DOM-Manipulation in einem unbekannten Kontext erfordern und liegt außerhalb des Rahmens dieses Artikels.

## Gestaltung, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie genau festlegen, was Sie erreichen möchten. Das spart Ihnen bei der Implementierung Zeit. Insbesondere sollten Sie alle Zustände Ihres Steuerelements klar definieren. Es empfiehlt sich, ein vorhandenes Steuerelement, dessen Zustände und Verhalten bekannt sind, möglichst genau nachzubilden.

In unserem Beispiel bilden wir das {{HTMLElement("select")}}-Element nach. Dies ist das angestrebte Ergebnis:

![Die drei Zustände eines Auswahlfelds](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements. Von links nach rechts: normal, aktiv und geöffnet.

Wir bilden das Verhalten eines nativen HTML-Elements nach. Deshalb sollte unser Steuerelement dieselben Verhaltensweisen und dieselbe Semantik wie das native HTML-Element aufweisen. Es muss sich wie jedes native Steuerelement mit Maus und Tastatur bedienen lassen und für Screenreader verständlich sein. Definieren wir zunächst, wie das Steuerelement die einzelnen Zustände erreicht:

**Das Steuerelement befindet sich im normalen Zustand, wenn:**

- die Seite geladen wird.
- es aktiv war und der Benutzer auf eine Stelle außerhalb des Steuerelements klickt.
- es aktiv war und der Benutzer den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt, etwa mit der <kbd>Tab</kbd>-Taste.

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tab-Taste drückt und das Steuerelement den Fokus erhält.
- es geöffnet ist und der Benutzer darauf klickt.

**Das Steuerelement befindet sich im geöffneten Zustand, wenn:**

- es sich in einem anderen Zustand als „geöffnet“ befindet und der Benutzer darauf klickt.

Nachdem wir wissen, wie die Zustände wechseln, müssen wir festlegen, wie sich der Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, während das Steuerelement geöffnet ist.
- der Benutzer die Pfeiltaste nach oben oder unten drückt, während das Steuerelement aktiv ist.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Pfeiltaste nach oben drückt, während die erste Option ausgewählt ist.
- der Benutzer die Pfeiltaste nach unten drückt, während die letzte Option ausgewählt ist.

Legen wir abschließend fest, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn sich der Mauszeiger über einer Option befindet, wird diese hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren normalen Zustand zurück.

> [!NOTE]
> Diese Spezifikation ist vorläufig. Sie beschreibt die frühen Phasen dieser Anleitung, in denen das Ziel darin besteht, eine vertraute, nativen Steuerelementen ähnliche Interaktion mit reinem JavaScript nachzubilden. Wenn später – im Abschnitt [Barrierefreiheit herstellen](#barrierefreiheit_herstellen) und im Unterabschnitt [Tastaturinteraktion](#tastaturinteraktion) – Barrierefreiheitssemantik und ein explizites Tastaturverhalten hinzukommen, wird dieses Modell verfeinert: Eine separate _aktive Option_ kann sich durch die Liste bewegen, ohne dass bereits eine Option ausgewählt wird. Der ausgewählte Wert ändert sich nur zu bestimmten Zeitpunkten und nicht während der Navigation. Deshalb ersetzt der spätere Code die Hilfsfunktion, die die Liste sowohl öffnet als auch schließt, durch getrennte Schritte: die Liste öffnen, eine Option auswählen, die Liste schließen und den Vorgang abbrechen, ohne den Wert zu ändern.

Hier halten wir zunächst inne. Möglicherweise fällt Ihnen auf, dass einige Verhaltensweisen fehlen. Was passiert beispielsweise, wenn der Benutzer die Tab-Taste drückt, während das Steuerelement geöffnet ist? Die Antwort lautet: _nichts_. Das richtige Verhalten erscheint offensichtlich, wird aber leicht übersehen, weil es in unseren Vorgaben nicht definiert ist. Das gilt insbesondere bei der Arbeit im Team, wenn andere Personen das Verhalten des Steuerelements entwerfen als diejenigen, die es implementieren.

Ein weiteres interessantes Beispiel: Was passiert, wenn der Benutzer die Pfeiltasten nach oben oder unten drückt, während das Steuerelement geöffnet ist? Das ist etwas schwieriger. Wenn Sie den aktiven und den geöffneten Zustand als völlig verschieden betrachten, lautet die Antwort erneut: „Es passiert nichts“, denn für den geöffneten Zustand haben wir keine Tastaturinteraktionen definiert. Wenn Sie dagegen davon ausgehen, dass sich der aktive und der geöffnete Zustand teilweise überschneiden, könnte sich der Wert ändern. Die entsprechende Option würde aber definitiv nicht hervorgehoben, weil wir auch hier keine Tastaturinteraktionen mit Optionen bei geöffnetem Steuerelement definiert haben. Wir haben nur festgelegt, was beim Öffnen geschieht, nicht aber, was danach passiert.

Wir müssen noch etwas weiterdenken: Was ist mit der Escape-Taste? Durch Drücken von <kbd>Esc</kbd> wird ein geöffnetes select geschlossen. Wenn Sie dieselbe grundlegende Funktionalität wie das vorhandene native {{htmlelement('select')}} bereitstellen möchten, muss der Mechanismus zum Anzeigen und Auswählen von Optionen bei Tastatur, Maus, Touchscreen und Screenreader vertraut sein. Die abschließende barrierefreie Phase dieser Anleitung orientiert sich am gezeigten Navigations- und Auswahlverhalten des [WAI-ARIA APG Select-Only Combobox Example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/) und nicht an jedem Detail nativer Implementierungen. Erweiterte Interaktionen wie die Suche durch Tippen, <kbd>PageUp</kbd>/<kbd>PageDown</kbd> und <kbd>Alt</kbd>+<kbd>Arrow</kbd> werden in dieser Anleitung nicht behandelt.

In unserem Beispiel sind die fehlenden Vorgaben offensichtlich, sodass wir sie ergänzen können. Bei neuartigen Steuerelementen kann dies jedoch ein echtes Problem sein. Für standardisierte Elemente wie {{htmlelement('select')}} wurden die Interaktionen für jeden Anwendungsfall und alle Eingabegeräte sorgfältig festgelegt. Neue Steuerelemente zu erstellen ist anspruchsvoll – besonders dann, wenn es sich um etwas völlig Neues handelt und deshalb niemand weiß, welches Verhalten und welche Interaktionen zu erwarten sind. Zumindest select gibt es bereits, sodass wir wissen, wie es sich verhalten sollte!

Neue Interaktionen zu entwerfen ist im Allgemeinen nur für sehr große Unternehmen eine realistische Option: Sie verfügen über genügend Reichweite, damit eine von ihnen eingeführte Interaktion zum Standard werden kann. Apple führte beispielsweise 2001 mit dem iPod das Scrollrad ein. Das Unternehmen hatte einen ausreichenden Marktanteil, um erfolgreich eine völlig neue Art der Gerätebedienung einzuführen – etwas, das die meisten Gerätehersteller nicht erreichen können.

Vermeiden Sie nach Möglichkeit, neue Benutzerinteraktionen zu erfinden. Wenn Sie eine neue Interaktion hinzufügen, ist deren Gestaltung wichtig. Definieren Sie ein Verhalten ungenau oder vergessen Sie, es zu definieren, lässt es sich nur schwer nachträglich ändern, sobald sich Benutzer daran gewöhnt haben. Wenn Sie Zweifel haben, holen Sie mehrere Meinungen ein und [führen Sie Benutzertests durch](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr darüber erfahren möchten, finden Sie hier hilfreiche Ressourcen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der Bereich UX Design von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Auf den meisten Systemen lässt sich das {{HTMLElement("select")}}-Element auch mit der Tastatur öffnen, um alle verfügbaren Optionen anzuzeigen. Das entspricht einem Mausklick auf das {{HTMLElement("select")}}-Element. Unter Windows verwenden Sie dazu <kbd>Alt</kbd> + <kbd>Down</kbd>. In unserem Beispiel haben wir dies nicht implementiert; es ließe sich jedoch leicht nach dem Vorbild des `click`-Events ergänzen.

## HTML-Struktur und einen Teil der Semantik festlegen

Nachdem wir die grundlegende Funktionalität des Steuerelements festgelegt haben, können wir mit der Umsetzung beginnen. Zuerst definieren wir seine HTML-Struktur und Semantik. Folgendes benötigen wir, um ein {{HTMLElement("select")}}-Element nachzubilden:

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
    <!-- Each option only contains the value to be displayed; we'll see later
         how to handle the real value that will be sent with the form data -->
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

Beachten Sie, dass Klassennamen die relevanten Teile unabhängig von den zugrunde liegenden HTML-Elementen kennzeichnen. So vermeiden wir, CSS und JavaScript fest an eine bestimmte HTML-Struktur zu binden. Dadurch können wir die Implementierung später ändern, ohne Code zu beschädigen, der das Steuerelement verwendet. Was wäre beispielsweise, wenn Sie später ein Gegenstück zum {{HTMLElement("optgroup")}}-Element implementieren möchten?

Klassennamen haben allerdings keine semantische Bedeutung. Im aktuellen Zustand „sieht“ ein Screenreader-Benutzer nur eine ungeordnete Liste. Wir werden gleich ARIA-Semantik hinzufügen.

## Aussehen und Verhalten mit CSS gestalten

Nachdem die Struktur steht, können wir unser Steuerelement gestalten. Der Sinn dieses benutzerdefinierten Steuerelements besteht darin, dass wir es genau nach unseren Vorstellungen gestalten können. Dafür teilen wir die CSS-Arbeit in zwei Bereiche auf: Zuerst erstellen wir die notwendigen CSS-Regeln, damit sich unser Steuerelement wie ein {{HTMLElement("select")}}-Element verhält. Danach ergänzen wir die gestalterischen Details für das gewünschte Aussehen.

### Erforderliche Styles

Wir benötigen Styles für die drei Zustände unseres Steuerelements.

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

Für das Aussehen und Verhalten im aktiven Zustand benötigen wir eine zusätzliche Klasse `active`. Da unser Steuerelement fokussierbar ist, ergänzen wir diesen benutzerdefinierten Style durch die Pseudoklasse {{cssxref(":focus")}}, damit auch Tastaturbenutzer eine visuelle Rückmeldung erhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required; however, it's imperative to ensure
     the active state is visible, especially to keyboard users, so we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Kümmern wir uns nun um die Liste der Optionen:

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

Wir benötigen eine zusätzliche Klasse, um die Optionsliste auszublenden. Das ist notwendig, um zwischen dem aktiven und dem geöffneten Zustand zu unterscheiden.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way;
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir hätten auch `transform: scale(1, 0)` verwenden können, um der Optionsliste keine Höhe, aber die volle Breite zu geben.

### Optische Gestaltung

Die grundlegende Funktionalität ist nun vorhanden – jetzt beginnt der gestalterische Teil. Das Folgende ist lediglich ein Beispiel für die Möglichkeiten und entspricht dem Screenshot am Anfang dieses Artikels. Experimentieren Sie gerne selbst mit anderen Gestaltungen.

```css
.select {
  /* Our code assumes 1em equals 16px, which is the default value in most browsers.
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

Für den Abwärtspfeil benötigen wir kein zusätzliches Element. Stattdessen verwenden wir das Pseudoelement {{cssxref("::after")}}:

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

Den Optionen fügen wir eine Klasse `highlight` hinzu, um den Wert zu kennzeichnen, den der Benutzer auswählen wird oder bereits ausgewählt hat.

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

Hier ist das Ergebnis mit unseren drei Zuständen ([den Quellcode finden Sie hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

#### Normaler Zustand

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

## Das Steuerelement mit JavaScript zum Leben erwecken

Nachdem Gestaltung und Struktur fertig sind, können wir JavaScript schreiben, damit das Steuerelement tatsächlich funktioniert.

> [!WARNING]
> Der folgende Code dient Lernzwecken, ist kein produktionsreifer Code und sollte nicht unverändert eingesetzt werden. Er enthält redundante Teile, die für den produktiven Einsatz optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, sollten wir uns eines vor Augen halten: **JavaScript im Browser ist keine verlässlich verfügbare Technologie**. Benutzerdefinierte Steuerelemente sind darauf angewiesen, dass JavaScript alle Teile miteinander verbindet. Es gibt jedoch Situationen, in denen JavaScript im Browser nicht ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Das ist ungewöhnlich; heutzutage deaktivieren nur wenige Menschen JavaScript.
- Das Skript wurde nicht geladen: Das ist einer der häufigsten Fälle, insbesondere auf Mobilgeräten mit einer unzuverlässigen Netzwerkverbindung.
- Das Skript enthält Fehler: Diese Möglichkeit sollten Sie immer berücksichtigen.
- Das Skript steht im Konflikt mit einem Skript eines Drittanbieters: Das kann bei Tracking-Skripten oder Bookmarklets auftreten, die der Benutzer verwendet.
- Das Skript steht im Konflikt mit einer Browser-Erweiterung oder wird von ihr beeinflusst, etwa von der Firefox-Erweiterung [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/).
- Der Benutzer verwendet einen älteren Browser, der eine benötigte Funktion nicht unterstützt: Das kommt häufig vor, wenn Sie neue APIs einsetzen.
- Der Benutzer interagiert mit dem Inhalt, bevor JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Angesichts dieser Risiken sollten Sie überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir besprechen mögliche Ansätze und behandeln die Grundlagen in unserem Beispiel. Eine vollständige Erörterung aller Szenarien würde ein ganzes Buch erfordern. Denken Sie vor allem daran, dass es wichtig ist, Ihr Skript allgemein verwendbar und wiederverwendbar zu gestalten.

Wenn unser JavaScript-Code nicht ausgeführt wird, greifen wir in diesem Beispiel auf ein standardmäßiges {{HTMLElement("select")}}-Element zurück. Zunächst fügen wir sowohl unser Steuerelement als auch das {{HTMLElement("select")}}-Element ein. Je nachdem, ob das Skript erfolgreich ausgeführt wird, blenden wir eines davon mithilfe von `class`-Werten auf dem `<body>`-Element aus.

Dafür sind zwei Schritte erforderlich:

Erstens fügen wir vor jeder Instanz unseres benutzerdefinierten Steuerelements ein reguläres {{HTMLElement("select")}}-Element ein. Dieses „zusätzliche“ select ist auch dann nützlich, wenn unser JavaScript wie erhofft funktioniert: Wir verwenden es, um die Daten unseres benutzerdefinierten Steuerelements zusammen mit den übrigen Formulardaten zu übertragen. Darauf gehen wir später genauer ein.

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

Zweitens erstellen wir zwei neue Klassen, mit denen wir das jeweils nicht benötigte Element ausblenden: Wenn unser Skript nicht ausgeführt wird, blenden wir das benutzerdefinierte Steuerelement visuell aus; andernfalls das „echte“ {{HTMLElement("select")}}-Element. Standardmäßig blendet unser HTML-Code das benutzerdefinierte Steuerelement aus.

```css
.widget select,
.no-widget .select {
  /* This CSS selector basically says:
     - we either set the body class to "widget", hiding the actual <select> element
     - or we keep the body class of "no-widget", which hides elements with a class of "select"
  */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

Dieses CSS blendet eines der Elemente visuell aus, beide bleiben jedoch für Screenreader verfügbar.

> [!NOTE]
> Diese Anleitung behält zunächst die zuvor verwendete Technik zum visuellen Ausblenden bei. Bevor JavaScript ausgeführt wird, ist das native select als Fallback vorgesehen. Das visuell ausgeblendete benutzerdefinierte Steuerelement kann jedoch ebenfalls für assistive Technologien verfügbar bleiben. Im abschließenden barrierefreien Beispiel weiter unten wird das jeweils inaktive Steuerelement sowohl im Fallback- als auch im erweiterten Zustand aus dem Accessibility Tree entfernt.

Nun benötigen wir eine JavaScript-Umschaltung, um festzustellen, ob das Skript ausgeführt wird. Wenn es beim Laden der Seite ausgeführt wird, entfernen die folgenden Zeilen die Klasse `no-widget` und fügen die Klasse `widget` hinzu. Dadurch tauschen das {{HTMLElement("select")}}-Element und das benutzerdefinierte Steuerelement ihre Sichtbarkeit.

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
> Statt die Klassen auszutauschen, könnten Sie die Klasse `widget` hinzufügen, um die {{HTMLElement("select")}}-Elemente auszublenden, und den DOM-Baum für das benutzerdefinierte Steuerelement jeweils dynamisch dahinter einfügen. Dadurch wäre der Code besser wiederverwendbar.

### Verwendete DOM-Scripting-Funktionen

Im folgenden Code verwenden wir diese DOM-Scripting-Funktionen:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Event-Callbacks erstellen

Die Grundlagen sind gelegt. Nun können wir die Funktionen definieren, die unser benutzerdefiniertes select steuern.

```js
// This function will be used each time we want to deactivate a custom control
// It takes one parameter
// select: the DOM node with the `select` class to deactivate
function deactivateSelect(select) {
  // If the control is not active, there is nothing to do
  if (!select.classList.contains("active")) return;

  // We need to get the list of options for the custom control
  const optList = select.querySelector(".optList");

  // We close the list of options
  optList.classList.add("hidden");

  // and we deactivate the custom control itself
  select.classList.remove("active");
}

// This function will be used each time the user wants to activate the control
// (which, in turn, will deactivate other select controls)
// It takes two parameters:
// select: the DOM node with the `select` class to activate
// selectList: the list of all the DOM nodes with the `select` class
function activeSelect(select, selectList) {
  // If the control is already active, there is nothing to do
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
// select: the DOM node with the list to toggle
function toggleOptList(select) {
  // The list is kept from the control
  const optList = select.querySelector(".optList");

  // We change the class of the list to show/hide it
  optList.classList.toggle("hidden");
}

// This function will be used each time we need to highlight an option
// It takes two parameters:
// select: the DOM node with the `select` class containing the option to highlight
// option: the DOM node with the `option` class to highlight
function highlightOption(select, option) {
  // We get the list of all options available for our custom select element
  const optionList = select.querySelectorAll(".option");

  // We remove the highlight from all options
  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  // We highlight the right option
  option.classList.add("highlight");
}
```

Diese Funktionen benötigen Sie, um die verschiedenen Zustände des benutzerdefinierten Steuerelements zu verwalten.

Als Nächstes verknüpfen wir die Funktionen mit den entsprechenden Events:

```js
const selectList = document.querySelectorAll(".select");

// Each custom control needs to be initialized
selectList.forEach((select) => {
  // as well as all its `option` elements
  const optionList = select.querySelectorAll(".option");

  // Each time a user hovers their mouse over an option, we highlight the given option
  optionList.forEach((option) => {
    option.addEventListener("mouseover", () => {
      // Note: the `select` and `option` variables are closures
      // available in the scope of our function call.
      highlightOption(select, option);
    });
  });

  // Each time the user clicks on or taps a custom select element
  select.addEventListener("click", (event) => {
    // Note: the `select` variable is a closure
    // available in the scope of our function call.

    // We toggle the visibility of the list of options
    toggleOptList(select);
  });

  // In case the control gains focus
  // The control gains focus each time the user clicks on it or each time
  // they use the Tab key to access the control
  select.addEventListener("focus", (event) => {
    // Note: the `select` and `selectList` variables are closures
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
    // Deactivate on `Esc` keyup
    if (event.key === "Escape") {
      deactivateSelect(select);
    }
  });
});
```

An diesem Punkt wechselt unser Steuerelement wie vorgesehen zwischen den Zuständen, sein Wert wird jedoch noch nicht aktualisiert. Darum kümmern wir uns als Nächstes.

> [!NOTE]
> Die oben eingeführten Hilfsfunktionen `toggleOptList()`, `deactivateSelect()` und `activeSelect()` gehören zur frühen Lernphase dieses Artikels. Das aufeinander aufbauende [Beispiel 3](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_3) und [Beispiel 4](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4) behalten diese Namen und Verhaltensweisen bewusst bei. In der abschließenden barrierefreien Phase wird `toggleOptList()` – die Hilfsfunktion, die die Liste sowohl öffnet als auch schließt – durch vier getrennte Hilfsfunktionen ersetzt: `openOptList()` zum Öffnen der Liste, `commitActiveOption()` zum Auswählen einer Option, `closeOptList()` zum Schließen der Liste und `cancelSelection()` zum Schließen ohne Änderung des Werts. `activeSelect()` wird in `deactivateOtherSelects()` umbenannt, da die Funktion bei Erhalt des Fokus nur noch andere geöffnete benutzerdefinierte Steuerelemente schließen muss.

#### Interaktives Beispiel

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

### Den Wert des Steuerelements verwalten

Als Nächstes ergänzen wir Code, der den Wert des Steuerelements entsprechend den Benutzereingaben aktualisiert und ihn zusammen mit den Formulardaten überträgt.

Am einfachsten verwenden wir dafür im Hintergrund ein natives Steuerelement. Es verwaltet den Wert mithilfe der im Browser integrierten Funktionen, und der Wert wird beim Absenden des Formulars wie gewohnt übertragen. Es besteht kein Grund, das Rad neu zu erfinden.

Wie bereits gezeigt, verwenden wir aus Gründen der Barrierefreiheit schon ein natives select-Steuerelement als Fallback. Wir können dessen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

```js
// This function updates the displayed value and synchronizes it with the native control.
// It takes two parameters:
// select: the DOM node with the class `select` containing the value to update
// index: the index of the value to be selected
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
// select: the DOM node with the class `select` related to the native control
function getIndex(select) {
  // We need to access the native control for the given custom control
  // In our example, that native control is a sibling of the custom control
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}
```

Mit diesen beiden Funktionen können wir die nativen und die benutzerdefinierten Steuerelemente miteinander verknüpfen:

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

Beachten Sie im obigen Code die Verwendung der Eigenschaft [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex). `select.previousElementSibling.tabIndex = -1` entfernt das native Steuerelement aus der sequenziellen Tastaturnavigation. `select.tabIndex = 0` macht das benutzerdefinierte Steuerelement fokussierbar, sodass es bei der Bedienung mit Tastatur oder Maus den Fokus erhalten kann. Ein negativer tabindex entfernt ein Element aus der sequenziellen Tastaturnavigation; programmatisch kann es weiterhin fokussiert werden.

Damit sind wir fertig!

#### Interaktives Beispiel

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
      event.preventDefault();
    }
    if (event.key === "ArrowUp" && index > 0) {
      index--;
      event.preventDefault();
    }

    if (event.key === "Enter" || event.key === " ") {
      toggleOptList(select);
    }

    updateValue(select, index);
  });
});
```

{{EmbedLiveSample("live_example_2",120,130)}}

Aber Moment – sind wir wirklich fertig?

## Barrierefreiheit herstellen

Wir haben etwas erstellt, das funktioniert. Obwohl es noch weit von einem voll ausgestatteten Auswahlfeld entfernt ist, lässt es sich gut bedienen. Bisher haben wir jedoch lediglich das DOM verändert. Unser Steuerelement besitzt keine echte Semantik. Auch wenn es wie ein Auswahlfeld aussieht, erkennen assistive Technologien es nicht als solches. Kurz gesagt: Dieses neue, ansprechende Auswahlfeld ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung: [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für „Accessible Rich Internet Applications“ und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die genau für unseren Anwendungsfall entwickelt wurde: Webanwendungen und benutzerdefinierte Steuerelemente barrierefrei zu machen. ARIA umfasst Attribute, die HTML um Beschreibungen von Rollen, Zuständen und Eigenschaften erweitern. Damit können wir fehlende Semantik ergänzen. Einige dieser Attribute werden im HTML gesetzt, andere mit JavaScript aktuell gehalten.

### Das `role`-Attribut

Ein zentrales Attribut von [ARIA](/de/docs/Web/Accessibility/ARIA) ist [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques). Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) nimmt einen Wert an, der den Zweck eines Elements festlegt. Jede Rolle definiert eigene Anforderungen und Verhaltensweisen.

In unserem Beispiel verwendet das Element `<div class="select">` [`role="combobox"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role). Das zeigt an, dass das Element eine Liste von Optionen bereitstellt, die geöffnet und geschlossen werden kann. Wir ergänzen [`aria-haspopup="listbox"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), um den Typ des Popups anzugeben, sowie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) als Verweis auf die `id` der Optionsliste.
Für eine combobox ist listbox der standardmäßige Popup-Typ; `aria-haspopup="listbox"` ist hier also nicht erforderlich. In diesem Beispiel geben wir den Typ dennoch ausdrücklich an.
Da das initialisierte Formular mehrere benutzerdefinierte Steuerelemente enthalten kann, tragen wir diese IDs nicht fest im HTML ein: Doppelte IDs würden die ARIA-Verweise ungültig machen. Stattdessen erzeugt JavaScript bei der Initialisierung für die listbox jedes Steuerelements und jede ihrer Optionen eine eindeutige `id` und setzt `aria-controls` so, dass es auf die erzeugte `id` der listbox verweist.

Combobox und listbox sind Geschwisterelemente innerhalb eines neutralen umschließenden Elements. Dieses Element besitzt selbst keine ARIA-Rolle. Das `aria-controls`-Attribut der combobox stellt die Verbindung zu ihrer listbox her.

Das `<ul>`-Element verwendet [`role="listbox"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role). Damit erkennen assistive Technologien, dass es eine Liste auswählbarer Einträge enthält. Jedes `<li>`-Element verwendet [`role="option"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role).

Sowohl das native `<select>` als auch das benutzerdefinierte `<div>` erhalten ein Attribut [`aria-label="Fruit"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), damit assistive Technologien einen aussagekräftigen Namen für das Steuerelement ansagen können. Auch die Popup-listbox verwendet `aria-label="Fruit"`, um den für die Rolle `listbox` erforderlichen barrierefreien Namen bereitzustellen.

Das native `<select>` behält seinen barrierefreien Namen als Fallback ohne JavaScript. Wenn JavaScript das benutzerdefinierte Steuerelement aktiviert, entfernt das unten gezeigte abschließende CSS das native Steuerelement aus der Darstellung, der Fokusnavigation und dem Accessibility Tree. Damit bleibt die benutzerdefinierte combobox als zugängliches Steuerelement verfügbar.

Zur Unterstützung dieser Rollen aktualisieren wir unser HTML wie folgt:

```html
<form class="no-widget">
  <select name="myFruit" aria-label="Fruit">
    <option>Cherry</option>
    <!-- ... -->
  </select>

  <div class="select-wrapper">
    <div
      class="select"
      role="combobox"
      aria-label="Fruit"
      aria-haspopup="listbox"
      aria-expanded="false">
      <span class="value">Cherry</span>
    </div>

    <ul class="optList hidden" role="listbox" aria-label="Fruit">
      <li class="option" role="option" aria-selected="true">Cherry</li>
      <li class="option" role="option" aria-selected="false">Lemon</li>
      <!-- ... -->
    </ul>
  </div>
</form>
```

> [!NOTE]
> In dieser Anleitung behalten wir sowohl das Attribut `role` als auch das Attribut `class` bei: `role` stellt die Semantik für assistive Technologien bereit, während `class` von CSS und JavaScript verwendet wird. In einer allgemeiner verwendbaren Implementierung könnten Sie stattdessen Selektoren wie `[role="option"]` einsetzen, sofern Sie CSS und JavaScript entsprechend und einheitlich anpassen.

In den früheren Phasen wird das inaktive benutzerdefinierte Steuerelement außerhalb des sichtbaren Bereichs platziert. Zu diesem Zeitpunkt besitzt es noch nicht die endgültige ARIA-Semantik eines Steuerelements; seine Verfügbarkeit für assistive Technologien erzeugt daher kein zweites benanntes Formularsteuerelement. In dieser abschließenden barrierefreien Version besitzt das benutzerdefinierte Steuerelement dagegen combobox-Semantik und einen barrierefreien Namen. Bliebe es vor der Ausführung von JavaScript im Accessibility Tree, wären sowohl das native `<select>` als auch eine inaktive benutzerdefinierte combobox verfügbar. Um dies zu vermeiden, blendet das abschließende Beispiel das jeweils inaktive Steuerelement mit `display: none` aus. Dabei wird das benutzerdefinierte Steuerelement als Ganzes über sein umschließendes Element ausgeblendet und nicht nur die combobox, damit auch die zugehörige Popup-listbox verborgen bleibt:

```css
.widget select,
.no-widget .select-wrapper {
  display: none;
}
```

Das umschließende Element dient zugleich als Positionierungsbezug für die Popup-listbox, die relativ dazu absolut positioniert wird:

```css
.select-wrapper {
  position: relative;
  display: inline-block;
}
```

Das native `<select>` bleibt mit dem Formular verbunden. `updateValue()` hält seinen ausgewählten Wert für die Formularübermittlung synchron.

### Die Attribute `aria-selected` und `aria-activedescendant`

Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) allein reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) stellt außerdem zahlreiche Attribute für Zustände und Eigenschaften bereit, damit assistive Technologien Ihr Steuerelement verstehen können.

Das Attribut `aria-selected` kennzeichnet die vom Benutzer gewählte Option als aktuelle Auswahl. Dadurch können assistive Technologien den Benutzer über die aktuelle Auswahl informieren. Das Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der combobox kennzeichnet die aktuell aktive und visuell hervorgehobene Option – allerdings nur, solange die listbox geöffnet ist. Da sich beide Attribute auf eine bestimmte Option beziehen, besitzt jede Option eine eindeutige `id`.

Die folgenden Funktionen sorgen gemeinsam dafür, dass diese Zustände synchron bleiben:

- `openOptList(select, activeIndex)` öffnet die listbox und legt dabei die aktive Option fest: Die Funktion setzt `aria-expanded` auf `"true"`, entfernt die Klasse `hidden`, fügt die Klasse `active` hinzu und verwendet `highlightOption()`, um die visuelle Hervorhebung und `aria-activedescendant` auf die Option bei `activeIndex` auszurichten.
- `commitActiveOption(select)` wählt die aktuell aktive Option durch einen Aufruf von `updateValue()` aus. Ist die listbox geschlossen oder wird die aktive Option nicht gefunden, kehrt die Funktion zurück, ohne etwas zu ändern. Sie schließt die listbox nicht.
- `closeOptList(select)` schließt die listbox: Die Funktion stellt die visuelle Hervorhebung der ausgewählten Option mit `highlightOption()` wieder her, blendet die listbox aus, entfernt die Klasse `active`, setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`.
- `cancelSelection(select)` behandelt Escape: Die Funktion lässt den ausgewählten Wert unverändert und schließt die Liste über `closeOptList()`. Vor dem Einklappen der listbox wird dadurch die ausgewählte Option wieder visuell als aktiv hervorgehoben.
- `highlightOption(select, option)` aktualisiert die visuelle Hervorhebung der übergebenen aktiven Option und – solange die listbox geöffnet ist – auch `aria-activedescendant`. Die Funktion ändert selbst weder `aria-selected` noch den `selectedIndex` des nativen `<select>`; diese Werte werden ausschließlich durch `updateValue()` geändert.
- `updateValue()` ist die einzige Stelle, an der sich die ausgewählte Option ändert: Die Funktion aktualisiert `aria-selected`, den nativen `selectedIndex`, den sichtbaren Wert, die visuelle Hervorhebung und – bei geöffneter listbox – `aria-activedescendant`.

Wenn die listbox geöffnet ist, bewegen die Pfeiltasten die aktive Hervorhebung und `aria-activedescendant` mithilfe von `highlightOption()` durch die Liste. Sie rufen niemals `updateValue()` auf und ändern deshalb weder `aria-selected` noch den Wert des nativen `<select>`. Wenn sich der Mauszeiger über einer Option befindet, ändert sich durch CSS lediglich deren Aussehen. `aria-activedescendant`, `aria-selected`, der `selectedIndex` des nativen `<select>` und der ausgewählte Wert bleiben unverändert. Eine einzige CSS-Regel steuert diese Rückmeldung für Optionen, die gerade nicht aktiv sind:

```css
.select-wrapper .option:not(.highlight):hover {
  background-color: rgb(0 0 0 / 10%);
}
```

Den Code finden Sie unten unter [Den geöffneten Zustand aktualisieren](#den_geöffneten_zustand_aktualisieren).

`updateValue()` ist die einzige Stelle, an der sich die ausgewählte Option ändert:

```js
function updateValue(select, index) {
  const wrapper = select.parentElement;
  const nativeWidget = wrapper.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = wrapper.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;

  optionList.forEach((option, optionIndex) => {
    const isSelected = optionIndex === index;
    option.classList.toggle("highlight", isSelected);
    option.setAttribute("aria-selected", String(isSelected));

    if (isSelected) {
      if (select.getAttribute("aria-expanded") === "true") {
        select.setAttribute("aria-activedescendant", option.id);
      } else {
        select.removeAttribute("aria-activedescendant");
      }
    }
  });
}
```

`highlightOption()` hält `aria-activedescendant` bei geöffneter listbox mit der visuellen Hervorhebung synchron:

```js
function highlightOption(select, option) {
  const wrapper = select.parentElement;
  const optionList = wrapper.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");

  if (select.getAttribute("aria-expanded") === "true") {
    select.setAttribute("aria-activedescendant", option.id);
  }
}
```

Es mag einfacher erscheinen, einen Screenreader auf das außerhalb des sichtbaren Bereichs platzierte select zugreifen zu lassen und das gestaltete Steuerelement zu ignorieren. Sie sollten sich jedoch nicht darauf verlassen, dass ein solches natives select das einzige barrierefreie Steuerelement ist. Screenreader werden nicht nur von blinden Menschen verwendet, sondern auch von Menschen mit eingeschränktem und sogar mit uneingeschränktem Sehvermögen. Deshalb ist es wichtig, die ARIA-Attribute mit dem visuellen Zustand zu synchronisieren.

### Die aktive Option sichtbar halten

Eine listbox mit vielen Optionen kann höher sein als der verfügbare Platz. Deshalb sollte die aktive Option an zwei Stellen sichtbar bleiben: innerhalb des scrollbaren Bereichs der listbox und auf der Seite. Zwei Hilfsfunktionen übernehmen diese Aufgabe:

```js
// This function scrolls the listbox itself, so that the given option is
// visible inside the listbox's own scroll area.
// It takes two parameters:
// select: the DOM node with the class `select` related to the native control
// option: the option that should be visible inside the listbox
function scrollOptionIntoListbox(select, option) {
  const optList = select.parentElement.querySelector(".optList");
  const optionRect = option.getBoundingClientRect();
  const listRect = optList.getBoundingClientRect();

  if (optionRect.top < listRect.top) {
    optList.scrollTop -= listRect.top - optionRect.top;
  } else if (optionRect.bottom > listRect.bottom) {
    optList.scrollTop += optionRect.bottom - listRect.bottom;
  }
}

// This function keeps the given option visible while the listbox is open.
// It scrolls the listbox as described above, and then scrolls the page
// as well, but only if the option is not already visible in the viewport.
// It takes two parameters:
// select: the DOM node with the class `select` related to the native control
// option: the option that should stay visible
function keepOptionVisible(select, option) {
  scrollOptionIntoListbox(select, option);
  option.scrollIntoView({ block: "nearest" });
}
```

`scrollOptionIntoListbox()` verschiebt die Scrollposition der listbox so, dass die angegebene Option innerhalb der listbox sichtbar bleibt. Die Funktion wird bei jedem Öffnen der listbox ausgeführt, unabhängig davon, ob dies per Tastatur oder Zeigegerät geschieht. Dadurch ist die Option, bei der die listbox geöffnet wird, stets sichtbar. `keepOptionVisible()` ruft diese Funktion auf und scrollt zusätzlich die Seite – allerdings nur, wenn die Option im Viewport noch nicht sichtbar ist. Die Funktion wird verwendet, wenn die listbox bereits geöffnet ist und die Tastatur die aktive Option verschiebt. So bleibt die Option, auf die `aria-activedescendant` verweist, im sichtbaren Bereich.

### Den geöffneten Zustand aktualisieren

Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) gibt an, ob die Optionsliste derzeit geöffnet oder geschlossen ist. Der Popup-Zustand wird mit getrennten Hilfsfunktionen `openOptList()` und `closeOptList()` geändert, statt mit einer einzigen Funktion zum Öffnen und Schließen der Liste. `openOptList()` öffnet die Liste unmittelbar, setzt `aria-expanded` auf `"true"` und verwendet `highlightOption()`, um die visuelle Hervorhebung und `aria-activedescendant` auf die Option am übergebenen `activeIndex` auszurichten. `closeOptList()` setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`. Bevor `openOptList()` die listbox öffnet, prüft die Funktion die angeforderte Option. So besitzt eine geöffnete listbox immer eine aktive Option:

```js
function openOptList(select, activeIndex) {
  const wrapper = select.parentElement;
  const optList = wrapper.querySelector(".optList");
  const optionList = optList.querySelectorAll(".option");

  // Check the requested active option before opening the listbox.
  // If the index is invalid, leave the listbox closed.
  if (
    !Number.isInteger(activeIndex) ||
    activeIndex < 0 ||
    activeIndex >= optionList.length
  ) {
    return;
  }

  optList.classList.remove("hidden");
  select.classList.add("active");
  select.setAttribute("aria-expanded", "true");

  highlightOption(select, optionList[activeIndex]);
  scrollOptionIntoListbox(select, optionList[activeIndex]);
}

function commitActiveOption(select) {
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  const wrapper = select.parentElement;
  const optionList = wrapper.querySelectorAll(".option");
  const activeId = select.getAttribute("aria-activedescendant");
  const activeIndex = [...optionList].findIndex(
    (option) => option.id === activeId,
  );

  if (activeIndex === -1) {
    return;
  }

  updateValue(select, activeIndex);
}

function closeOptList(select) {
  // Use aria-expanded to check whether the listbox is open.
  // openOptList() and closeOptList() keep the .active and .hidden classes
  // in sync with that state.
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  const wrapper = select.parentElement;
  const optionList = wrapper.querySelectorAll(".option");
  const committedOption = optionList[getIndex(select)];
  if (committedOption) {
    highlightOption(select, committedOption);
  }

  const optList = wrapper.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
  select.setAttribute("aria-expanded", "false");
  select.removeAttribute("aria-activedescendant");
}

function cancelSelection(select) {
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  closeOptList(select);
}
```

Nicht jede Art, die Liste zu schließen, hat dieselbe Wirkung. Beim Drücken von <kbd>Enter</kbd>, <kbd>Space</kbd> oder <kbd>Tab</kbd>, beim Verschieben des Fokus oder beim Klicken auf eine Option wird zunächst durch `commitActiveOption()` die aktive Option ausgewählt und die Liste anschließend mit `closeOptList()` geschlossen. Wenn die listbox geöffnet ist, ruft <kbd>Escape</kbd> `cancelSelection()` auf. Dadurch wird die Liste geschlossen, ohne den Wert zu ändern. Ein Klick auf die combobox bei geöffneter Liste ruft lediglich `closeOptList()` auf. In jedem Fall stellt `closeOptList()` die ausgewählte Option als aktive Hervorhebung wieder her, blendet die listbox durch Hinzufügen der Klasse `hidden` aus, entfernt die Klasse `active`, setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`. So verweist die eingeklappte combobox nicht auf eine Option in einer ausgeblendeten listbox.

Die Klasse `active` entspricht dem geöffneten Zustand: `openOptList()` setzt sie beim Öffnen, und `closeOptList()` entfernt sie beim Schließen. Die zugehörige Hilfsfunktion `deactivateOtherSelects()` – die umbenannte Nachfolgerin der früheren Funktion `activeSelect()` – erfüllt weiterhin denselben Zweck wie in der frühen Lernphase: Wenn ein Steuerelement den Fokus erhält, schließt sie alle anderen geöffneten benutzerdefinierten Steuerelemente auf der Seite, indem sie für jedes `closeOptList()` aufruft:

```js
function deactivateOtherSelects(select, selectList) {
  selectList.forEach((other) => {
    if (other !== select) {
      closeOptList(other);
    }
  });
}
```

### Tastaturinteraktion

Damit das Steuerelement barrierefrei mit der Tastatur bedient werden kann, reagieren wir auf `keydown`-Events. Eine `switch`-Anweisung verarbeitet die folgenden Tasten:

- <kbd>ArrowDown</kbd> – wenn die listbox geschlossen ist, wird sie mit der aktuell ausgewählten Option als aktiver Option geöffnet; wenn sie geöffnet ist, wird die nächste Option aktiv, ohne den ausgewählten Wert zu ändern.
- <kbd>ArrowUp</kbd> – wenn die listbox geschlossen ist, wird sie mit der aktuell ausgewählten Option als aktiver Option geöffnet; wenn sie geöffnet ist, wird die vorherige Option aktiv, ohne den ausgewählten Wert zu ändern.
- <kbd>Home</kbd> – wenn die listbox geschlossen ist, wird sie mit der ersten Option als aktiver Option geöffnet; wenn sie geöffnet ist, wird die erste Option aktiv, ohne den ausgewählten Wert zu ändern.
- <kbd>End</kbd> – wenn die listbox geschlossen ist, wird sie mit der letzten Option als aktiver Option geöffnet; wenn sie geöffnet ist, wird die letzte Option aktiv, ohne den ausgewählten Wert zu ändern.
- <kbd>Enter</kbd> / <kbd>Space</kbd> – wenn die listbox geschlossen ist, wird sie mit der aktuell ausgewählten Option als aktiver Option geöffnet; wenn sie geöffnet ist, wird die aktive Option ausgewählt und die Liste geschlossen.
- <kbd>Tab</kbd> – wenn die listbox geöffnet ist, wird die aktive Option ausgewählt und die Liste geschlossen; andernfalls kann sich der Fokus normal weiterbewegen.
- <kbd>Escape</kbd> – wenn die listbox geöffnet ist, bleibt der zuvor ausgewählte Wert erhalten, die aktive Hervorhebung wird auf die ausgewählte Option zurückgesetzt und die Liste geschlossen; wenn die listbox geschlossen ist, wird die Taste der Seite überlassen.

Die Navigationstasten (<kbd>ArrowDown</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>) und die Tasten zum Auswählen einer Option (<kbd>Enter</kbd>, <kbd>Space</kbd>) rufen `event.preventDefault()` auf. So verhindern sie das standardmäßige Scrollen oder Absenden des Formulars durch den Browser. Wenn das benutzerdefinierte select geschlossen ist, öffnen diese Tasten die listbox über `openOptList()`, ohne den ausgewählten Wert zu ändern. Sobald die listbox geöffnet ist, gehen <kbd>ArrowDown</kbd> und <kbd>ArrowUp</kbd> von der aktuell hervorgehobenen aktiven Option aus und nicht von der ausgewählten Option. Die Tastaturnavigation setzt sich somit bei der Option fort, die beim Öffnen oder durch die bisherige Tastaturnavigation aktiv wurde. Eine kleine Hilfsfunktion, `getActiveIndex()`, ermittelt den Ausgangsindex. Ist die listbox geschlossen oder fehlt der aktive Nachfahre beziehungsweise entspricht er keiner Option mehr, greift sie auf die von `getIndex()` zurückgegebene ausgewählte Option zurück:

```js
function getActiveIndex(select, optionList) {
  if (select.getAttribute("aria-expanded") === "true") {
    const activeId = select.getAttribute("aria-activedescendant");
    const index = [...optionList].findIndex((option) => option.id === activeId);

    if (index !== -1) {
      return index;
    }
  }

  return getIndex(select);
}
```

Das oben beschriebene Navigations- und Auswahlverhalten orientiert sich am [WAI-ARIA APG Select-Only Combobox Example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/): ein Popup, das mit einer festgelegten Ausgangsoption geöffnet wird, Navigationstasten, die die aktive Option bewegen, ohne den ausgewählten Wert zu ändern, und Bestätigungstasten, die die aktive Option auswählen und die Liste schließen. Diese Anleitung konzentriert sich auf diese grundlegenden Interaktionen. Erweiterte Interaktionen wie die Suche durch Tippen, <kbd>PageUp</kbd>/<kbd>PageDown</kbd> und <kbd>Alt</kbd>+<kbd>Arrow</kbd> sind nicht Teil der gezeigten Implementierung.

Der `keydown`-Handler verwendet die obige Hilfsfunktion, um seinen Ausgangsindex zu ermitteln. Bei geöffneter listbox bewegen die Pfeiltasten die aktive Option ausschließlich über `highlightOption()`. Sie rufen niemals `updateValue()` auf und ändern somit auch nicht den ausgewählten Wert. Auf jeden Navigationsschritt folgt `keepOptionVisible()`, damit die Option, auf die `aria-activedescendant` verweist, innerhalb der listbox und auf der Seite sichtbar bleibt:

```js
select.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    if (select.getAttribute("aria-expanded") === "true") {
      commitActiveOption(select);
      closeOptList(select);
    }
    return;
  }

  let index = getActiveIndex(select, optionList);
  const expanded = select.getAttribute("aria-expanded") === "true";

  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();

      if (!expanded) {
        openOptList(select, getIndex(select));
        break;
      }

      if (index < optionList.length - 1) {
        index++;
        highlightOption(select, optionList[index]);
        keepOptionVisible(select, optionList[index]);
      }
      break;

    case "ArrowUp":
      event.preventDefault();

      if (!expanded) {
        openOptList(select, getIndex(select));
        break;
      }

      if (index > 0) {
        index--;
        highlightOption(select, optionList[index]);
        keepOptionVisible(select, optionList[index]);
      }
      break;

    case "Home":
      event.preventDefault();

      if (!expanded) {
        openOptList(select, 0);
        break;
      }

      highlightOption(select, optionList[0]);
      keepOptionVisible(select, optionList[0]);
      break;

    case "End":
      event.preventDefault();

      if (!expanded) {
        openOptList(select, optionList.length - 1);
        break;
      }

      highlightOption(select, optionList[optionList.length - 1]);
      keepOptionVisible(select, optionList[optionList.length - 1]);
      break;

    case "Enter":
    case " ":
      event.preventDefault();

      if (!expanded) {
        openOptList(select, getIndex(select));
        break;
      }

      commitActiveOption(select);
      closeOptList(select);
      break;

    case "Escape":
      if (expanded) {
        event.preventDefault();
        cancelSelection(select);
      }
      break;
    default:
    // Ignore all other keys
  }
});
```

### Fokus und Klicks verwalten

Eine ordnungsgemäße Fokusverwaltung sorgt dafür, dass sich die Optionsliste vorhersehbar öffnet und schließt. Wenn das benutzerdefinierte Steuerelement den Fokus erhält, deaktivieren wir alle anderen geöffneten selects. Verliert es den Fokus, wählen wir bei geöffneter listbox die aktive Option aus und schließen die Liste. Ist die listbox bereits geschlossen, bleibt der Wert unverändert.

Bei der Mausbedienung ändert das Bewegen des Zeigers über eine Option lediglich deren Aussehen durch CSS (`.select-wrapper .option:not(.highlight):hover`). Weder die aktive Option noch der ausgewählte Wert ändern sich. An jede Option binden wir einen `mousedown`-Handler, der `event.preventDefault()` aufruft. Dadurch verhindert er, dass der Klick auf dem Container ein `blur`-Event auslöst. Der `click`-Handler jeder Option ruft ausdrücklich `highlightOption()` für die angeklickte Option auf und macht sie damit zur aktiven Option. Anschließend ruft er `commitActiveOption()` und `closeOptList()` auf und gibt den Fokus an das Steuerelement zurück. Da die listbox ein Geschwisterelement der combobox und kein Nachfahre ist, erreicht ein Klick auf eine Option nie den `click`-Handler der combobox. Der Handler muss daher die Weitergabe des Events nicht unterbinden. Weil beim Verlassen des Steuerelements die aktuelle aktive Option ausgewählt wird, wählt ein Fokuswechsel nach dem bloßen Bewegen des Mauszeigers über eine Option die zuvor aktive Option aus – also diejenige, die beim Öffnen oder durch Tastaturnavigation festgelegt wurde –, nicht die Option unter dem Mauszeiger:

```js
optionList.forEach((option, index) => {
  option.addEventListener("mousedown", (event) => {
    event.preventDefault();
  });

  option.addEventListener("click", (event) => {
    highlightOption(select, optionList[index]);
    commitActiveOption(select);
    closeOptList(select);
    select.focus();
  });
});

select.addEventListener("click", () => {
  if (select.getAttribute("aria-expanded") === "true") {
    closeOptList(select);
    return;
  }
  openOptList(select, getIndex(select));
});
```

Beim Öffnen mit einem Zeigegerät gilt dasselbe Prinzip für die Ausgangsoption wie bei <kbd>ArrowDown</kbd> und <kbd>ArrowUp</kbd>: Solange die listbox geschlossen ist, bewegt keine dieser Interaktionen die aktive Option durch die Liste. Stattdessen öffnen sie alle die listbox mit der aktuell ausgewählten Option als aktiver Option.

Das native `<select>`-Element wird innerhalb von `updateValue()` durch `nativeWidget.selectedIndex = index` synchron gehalten. So bleiben die Formulardaten auch dann korrekt, wenn das benutzerdefinierte Steuerelement verwendet wird.

Unten sehen Sie das Ergebnis aller Änderungen. Probieren Sie es am besten mit einer assistiven Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) aus.

Das Formular wechselt erst in den Zustand `widget`, nachdem alle benutzerdefinierten selects initialisiert wurden. Wenn die synchrone Initialisierung vorher abbricht, bleiben die nativen Steuerelemente durch den ursprünglichen Zustand `no-widget` verfügbar.

#### Interaktives Beispiel

Sehen Sie sich den [vollständigen Quellcode hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5) an.

```html hidden
<form class="no-widget">
  <select name="myFruit" aria-label="Fruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select-wrapper">
    <div
      class="select"
      role="combobox"
      aria-label="Fruit"
      aria-haspopup="listbox"
      aria-expanded="false">
      <span class="value">Cherry</span>
    </div>

    <ul class="optList hidden" role="listbox" aria-label="Fruit">
      <li class="option" role="option" aria-selected="true">Cherry</li>
      <li class="option" role="option" aria-selected="false">Lemon</li>
      <li class="option" role="option" aria-selected="false">Banana</li>
      <li class="option" role="option" aria-selected="false">Strawberry</li>
      <li class="option" role="option" aria-selected="false">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select-wrapper {
  display: none;
}

.select-wrapper {
  position: relative;
  display: inline-block;
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

.select-wrapper .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select-wrapper .optList.hidden {
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

.select-wrapper .optList {
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

.select-wrapper .option {
  padding: 0.2em 0.3em;
}

.select-wrapper .highlight {
  background: black;
  color: white;
}

.select-wrapper .option:not(.highlight):hover {
  background-color: rgb(0 0 0 / 10%);
}
```

```js hidden
// -------------------- //
// Function definitions //
// -------------------- //

function openOptList(select, activeIndex) {
  const wrapper = select.parentElement;
  const optList = wrapper.querySelector(".optList");
  const optionList = optList.querySelectorAll(".option");

  // Check the requested active option before opening the listbox.
  // If the index is invalid, leave the listbox closed.
  if (
    !Number.isInteger(activeIndex) ||
    activeIndex < 0 ||
    activeIndex >= optionList.length
  ) {
    return;
  }

  optList.classList.remove("hidden");
  select.classList.add("active");
  select.setAttribute("aria-expanded", "true");

  highlightOption(select, optionList[activeIndex]);
  scrollOptionIntoListbox(select, optionList[activeIndex]);
}

function commitActiveOption(select) {
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  const wrapper = select.parentElement;
  const optionList = wrapper.querySelectorAll(".option");
  const activeId = select.getAttribute("aria-activedescendant");
  const activeIndex = [...optionList].findIndex(
    (option) => option.id === activeId,
  );

  if (activeIndex === -1) {
    return;
  }

  updateValue(select, activeIndex);
}

function closeOptList(select) {
  // Use aria-expanded to check whether the listbox is open.
  // openOptList() and closeOptList() keep the .active and .hidden classes
  // in sync with that state.
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  const wrapper = select.parentElement;
  const optionList = wrapper.querySelectorAll(".option");
  const committedOption = optionList[getIndex(select)];
  if (committedOption) {
    highlightOption(select, committedOption);
  }

  const optList = wrapper.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
  select.setAttribute("aria-expanded", "false");
  select.removeAttribute("aria-activedescendant");
}

function cancelSelection(select) {
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  closeOptList(select);
}

function deactivateOtherSelects(select, selectList) {
  selectList.forEach((other) => {
    if (other !== select) {
      closeOptList(other);
    }
  });
}

function highlightOption(select, option) {
  const wrapper = select.parentElement;
  const optionList = wrapper.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");

  if (select.getAttribute("aria-expanded") === "true") {
    select.setAttribute("aria-activedescendant", option.id);
  }
}

// This function scrolls the listbox itself, so that the given option is
// visible inside the listbox's own scroll area.
// It takes two parameters:
// select : the DOM node with the class `select` related to the native control
// option : the option that should be visible inside the listbox
function scrollOptionIntoListbox(select, option) {
  const optList = select.parentElement.querySelector(".optList");
  const optionRect = option.getBoundingClientRect();
  const listRect = optList.getBoundingClientRect();

  if (optionRect.top < listRect.top) {
    optList.scrollTop -= listRect.top - optionRect.top;
  } else if (optionRect.bottom > listRect.bottom) {
    optList.scrollTop += optionRect.bottom - listRect.bottom;
  }
}

// This function keeps the given option visible while the listbox is open.
// It scrolls the listbox as described above, and then scrolls the page
// as well, but only if the option is not already visible in the viewport.
// It takes two parameters:
// select : the DOM node with the class `select` related to the native control
// option : the option that should stay visible
function keepOptionVisible(select, option) {
  scrollOptionIntoListbox(select, option);
  option.scrollIntoView({ block: "nearest" });
}

function updateValue(select, index) {
  const wrapper = select.parentElement;
  const nativeWidget = wrapper.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = wrapper.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;

  optionList.forEach((option, optionIndex) => {
    const isSelected = optionIndex === index;
    option.classList.toggle("highlight", isSelected);
    option.setAttribute("aria-selected", String(isSelected));

    if (isSelected) {
      if (select.getAttribute("aria-expanded") === "true") {
        select.setAttribute("aria-activedescendant", option.id);
      } else {
        select.removeAttribute("aria-activedescendant");
      }
    }
  });
}

function getIndex(select) {
  const nativeWidget = select.parentElement.previousElementSibling;

  return nativeWidget.selectedIndex;
}

// This function returns the index of the currently active option in the listbox
// when the custom select is expanded. While the listbox is open,
// `aria-activedescendant` identifies the active option, and keyboard navigation
// continues from that option. If the listbox is closed, or if no matching active
// option can be found, we use the currently chosen option returned by
// `getIndex()`.
// It takes two parameters:
// select: the DOM node with the class `select` related to the native control
// optionList: the list of options for the given custom control
function getActiveIndex(select, optionList) {
  if (select.getAttribute("aria-expanded") === "true") {
    const activeId = select.getAttribute("aria-activedescendant");
    const index = [...optionList].findIndex((option) => option.id === activeId);

    if (index !== -1) {
      return index;
    }
  }

  return getIndex(select);
}

// ------------- //
// Event binding //
// ------------- //

const form = document.querySelector("form");

const selectList = form.querySelectorAll(".select");

selectList.forEach((select, selectIndex) => {
  const wrapper = select.parentElement;
  const optList = wrapper.querySelector(".optList");
  const optionList = optList.querySelectorAll(".option");
  const selectedIndex = getIndex(select);

  select.tabIndex = 0;

  const listboxId = `custom-select-${selectIndex}-listbox`;
  optList.id = listboxId;
  select.setAttribute("aria-controls", listboxId);

  optionList.forEach((option, optionIndex) => {
    option.id = `custom-select-${selectIndex}-option-${optionIndex}`;
  });

  updateValue(select, selectedIndex);

  optionList.forEach((option, index) => {
    option.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });

    option.addEventListener("click", (event) => {
      highlightOption(select, optionList[index]);
      commitActiveOption(select);
      closeOptList(select);
      select.focus();
    });
  });

  select.addEventListener("click", () => {
    if (select.getAttribute("aria-expanded") === "true") {
      closeOptList(select);
      return;
    }
    openOptList(select, getIndex(select));
  });

  select.addEventListener("focus", () => {
    deactivateOtherSelects(select, selectList);
  });

  select.addEventListener("blur", () => {
    if (select.getAttribute("aria-expanded") === "true") {
      commitActiveOption(select);
      closeOptList(select);
    }
  });

  select.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      if (select.getAttribute("aria-expanded") === "true") {
        commitActiveOption(select);
        closeOptList(select);
      }
      return;
    }

    let index = getActiveIndex(select, optionList);
    const expanded = select.getAttribute("aria-expanded") === "true";

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, getIndex(select));
          break;
        }

        if (index < optionList.length - 1) {
          index++;
          highlightOption(select, optionList[index]);
          keepOptionVisible(select, optionList[index]);
        }
        break;

      case "ArrowUp":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, getIndex(select));
          break;
        }

        if (index > 0) {
          index--;
          highlightOption(select, optionList[index]);
          keepOptionVisible(select, optionList[index]);
        }
        break;

      case "Home":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, 0);
          break;
        }

        highlightOption(select, optionList[0]);
        keepOptionVisible(select, optionList[0]);
        break;

      case "End":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, optionList.length - 1);
          break;
        }

        highlightOption(select, optionList[optionList.length - 1]);
        keepOptionVisible(select, optionList[optionList.length - 1]);
        break;

      case "Enter":
      case " ":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, getIndex(select));
          break;
        }

        commitActiveOption(select);
        closeOptList(select);
        break;

      case "Escape":
        if (expanded) {
          event.preventDefault();
          cancelSelection(select);
        }
        break;
      default:
      // Ignore all other keys
    }
  });
});

if (selectList.length > 0) {
  form.classList.remove("no-widget");
  form.classList.add("widget");
}
```

{{EmbedLiveSample("live_example_3",120,130)}}

Der Code dieses Beispiels lässt sich noch verbessern, damit er allgemeiner verwendbar und besser wiederverwendbar ist. Das erste Argument ist bei allen Funktionen gleich; sie benötigen also alle denselben Kontext. Versuchen Sie als Übung, ein Objekt zu erstellen, über das sie diesen Kontext gemeinsam nutzen.

## Ein alternativer Ansatz: Radio-Buttons verwenden

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit HTML ohne passende Semantik, CSS und JavaScript nachgebildet. Unser benutzerdefiniertes Steuerelement wählt eine Option aus einer begrenzten Anzahl aus. Das entspricht der Funktionalität einer Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons.

Wir könnten die Funktion daher auch mit Radio-Buttons nachbilden. Sehen wir uns diese Möglichkeit an.

Wir beginnen mit einer vollständig semantischen, barrierefreien, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Buttons mit jeweils zugehörigem {{htmlelement('label')}}. Die gesamte Gruppe beschriften wir mit einem semantisch passenden Paar aus {{htmlelement('fieldset')}} und {{htmlelement('legend')}}.

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

Mit ein wenig CSS gestalten wir die Liste der Radio-Buttons – nicht legend oder fieldset – so, dass sie dem vorherigen Beispiel etwas ähnelt. Das soll lediglich zeigen, dass dies möglich ist:

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

Ganz ohne JavaScript und mit nur wenig CSS können wir die Radio-Buttons so gestalten, dass nur der aktivierte Eintrag angezeigt wird. Wenn sich der Fokus innerhalb des `<ul>` im `<fieldset>` befindet, öffnet sich die Liste. Mit den Pfeiltasten nach oben und unten – ebenso wie mit den Pfeiltasten nach links und rechts – lassen sich der vorherige und der nächste Eintrag auswählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Bis zu einem gewissen Grad funktioniert das ohne JavaScript. Wir haben ein Steuerelement erstellt, das unserem benutzerdefinierten Steuerelement ähnelt und selbst dann funktioniert, wenn JavaScript ausfällt. Klingt nach einer guten Lösung, oder? Nicht ganz. Mit der Tastatur funktioniert es, bei Mausklicks jedoch nicht wie erwartet. Für benutzerdefinierte Steuerelemente ist es wahrscheinlich sinnvoller, Webstandards als Grundlage zu verwenden, statt sich auf Frameworks zu verlassen, die Elemente ohne native Semantik erstellen. Unser Steuerelement bietet allerdings nicht dieselbe Funktionalität wie ein natives `<select>`.

Positiv ist, dass dieses Steuerelement für Screenreader vollständig zugänglich ist und sich vollständig mit der Tastatur bedienen lässt. Es ist jedoch kein Ersatz für {{htmlelement('select')}}. Einige Funktionen unterscheiden sich oder fehlen. Beispielsweise navigieren alle vier Pfeiltasten durch die Optionen. Wenn sich der Benutzer auf dem letzten Button befindet und die Pfeiltaste nach unten drückt, springt die Auswahl jedoch zum ersten Button. Anders als bei `<select>` stoppt sie nicht am oberen oder unteren Ende der Optionsliste.

Das Ergänzen der fehlenden Funktionalität überlassen wir Ihnen als Übung.

## Fazit

In diesem Artikel haben wir ein benutzerdefiniertes Formularsteuerelement erstellt. Der dafür erforderliche Aufwand ist jedoch beträchtlich. Bevor Sie ein eigenes Steuerelement erstellen, prüfen Sie, ob vorhandene HTML-Steuerelemente Ihre Anforderungen erfüllen. Wenn Sie ein benutzerdefiniertes Steuerelement benötigen, passen Sie vorhandene Elemente an oder verwenden Sie eine Bibliothek eines Drittanbieters. Das ist häufig einfacher, als ein Steuerelement vollständig selbst zu erstellen. Ein benutzbares und barrierefreies Formularsteuerelement zu entwickeln ist komplizierter, als es zunächst aussieht.

Bevor Sie selbst mit dem Programmieren beginnen, sollten Sie diese Bibliotheken in Betracht ziehen:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)
