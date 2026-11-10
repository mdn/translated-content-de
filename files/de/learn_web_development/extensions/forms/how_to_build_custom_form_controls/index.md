---
title: Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente
short-title: Benutzerdefinierte Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 24078b032d39461b3e7c9b0b6966d5f17d599f91
---

Die verfügbaren nativen HTML-Formularsteuerelemente bieten möglicherweise nicht in allen Fällen ausreichende Funktionen. Wenn Sie beispielsweise einige Steuerelemente wie das Element {{HTMLElement("select")}} [umfangreich gestalten](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) oder ein eigenes Verhalten bereitstellen möchten, können Sie eigene Steuerelemente erstellen.

In diesem Artikel besprechen wir, wie Sie ein benutzerdefiniertes Steuerelement erstellen. Dazu bauen wir das Element {{HTMLElement("select")}} nach. Außerdem erörtern wir, ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen, und welche Anforderungen dabei zu beachten sind.

> [!NOTE]
> Wir konzentrieren uns auf die Erstellung des Steuerelements, nicht darauf, wie sich der Code allgemein und wiederverwendbar gestalten lässt. Dafür wären nicht triviale JavaScript-Programmierung und DOM-Manipulation in einem unbekannten Kontext erforderlich; das liegt außerhalb des Rahmens dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie genau festlegen, was Sie erreichen möchten. Das spart Ihnen bei der Implementierung Zeit. Insbesondere sollten Sie alle Zustände Ihres Steuerelements klar definieren. Es empfiehlt sich, ein vorhandenes Steuerelement, dessen Zustände und Verhalten gut bekannt sind, so genau wie möglich nachzubilden.

In unserem Beispiel bauen wir das Element {{HTMLElement("select")}} nach. Dieses Ergebnis möchten wir erzielen:

![Die drei Zustände eines Auswahlfelds](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements. Von links nach rechts: normal, aktiv und geöffnet.

Wir bilden das Verhalten eines nativen HTML-Elements nach. Daher sollte unser Steuerelement dasselbe Verhalten und dieselbe Semantik wie das native HTML-Element aufweisen. Es muss wie jedes native Steuerelement mit Maus und Tastatur bedienbar und für Screenreader verständlich sein. Definieren wir zunächst, wie das Steuerelement die einzelnen Zustände erreicht:

**Das Steuerelement befindet sich im normalen Zustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und die Person irgendwo außerhalb darauf klickt.
- das Steuerelement aktiv war und die Person den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt, etwa mit der Taste <kbd>Tab</kbd>.

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- die Person darauf klickt oder es auf einem Touchscreen berührt.
- die Person die Taste <kbd>Tab</kbd> drückt und das Steuerelement dadurch den Fokus erhält.
- das Steuerelement geöffnet ist und die Person darauf klickt.

**Das Steuerelement befindet sich im geöffneten Zustand, wenn:**

- es sich in einem anderen Zustand als „geöffnet“ befindet und die Person darauf klickt.

Sobald wir wissen, wie die Zustände wechseln, müssen wir festlegen, wie sich der Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- die Person bei geöffnetem Steuerelement auf eine Option klickt.
- die Person bei aktivem Steuerelement die Pfeiltaste nach oben oder unten drückt.

**Der Wert ändert sich nicht, wenn:**

- die Person die Pfeiltaste nach oben drückt, während die erste Option ausgewählt ist.
- die Person die Pfeiltaste nach unten drückt, während die letzte Option ausgewählt ist.

Definieren wir abschließend, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn sich die Maus über einer Option befindet, wird diese hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren normalen Zustand zurück.

> [!NOTE]
> Diese Spezifikation ist vorläufig. Sie beschreibt die ersten Schritte dieses Tutorials, in denen eine vertraute, einem nativen Steuerelement ähnliche Interaktion mit einfachem JavaScript nachgebildet werden soll. Wenn später Semantik für Barrierefreiheit und ein explizites Tastaturverhalten hinzukommen — im Abschnitt [Barrierefreiheit herstellen](#barrierefreiheit_herstellen) und im Unterabschnitt [Tastaturinteraktion](#tastaturinteraktion) — wird dieses Modell verfeinert: Eine separate _aktive Option_ kann durch die Liste bewegt werden, ohne bereits eine Option auszuwählen. Der ausgewählte Wert ändert sich nur zu bestimmten Zeitpunkten statt während der Navigation. Im späteren Code wird die Hilfsfunktion, die die Liste sowohl öffnet als auch schließt, daher durch getrennte Schritte ersetzt: die Liste öffnen, eine Option auswählen, die Liste schließen und den Vorgang abbrechen, ohne den Wert zu ändern.

Dabei belassen wir es zunächst. Vielleicht fällt Ihnen auf, dass einige Verhaltensweisen fehlen. Was geschieht beispielsweise, wenn die Person bei geöffnetem Steuerelement die Taste <kbd>Tab</kbd> drückt? Die Antwort lautet: _nichts_. Das richtige Verhalten scheint offensichtlich, wird aber leicht übersehen, weil es in unseren Vorgaben nicht definiert ist. Das gilt besonders in Teams, wenn andere Personen das Verhalten des Steuerelements entwerfen als diejenigen, die es implementieren.

Ein weiteres Beispiel: Was geschieht, wenn die Person bei geöffnetem Steuerelement die Pfeiltaste nach oben oder unten drückt? Diese Frage ist etwas schwieriger. Wenn Sie den aktiven und den geöffneten Zustand als völlig verschieden betrachten, lautet die Antwort wieder „nichts“, denn wir haben keine Tastaturinteraktionen für den geöffneten Zustand definiert. Wenn Sie dagegen davon ausgehen, dass sich aktiver und geöffneter Zustand teilweise überschneiden, könnte sich der Wert ändern. Die entsprechende Option würde jedoch keinesfalls hervorgehoben, weil wir auch für die Optionen bei geöffnetem Steuerelement keine Tastaturinteraktionen definiert haben. Wir haben nur festgelegt, was beim Öffnen geschieht, nicht aber danach.

Wir müssen noch etwas weiterdenken: Was ist mit der Escape-Taste? Mit <kbd>Esc</kbd> wird ein geöffnetes Auswahlfeld geschlossen. Denken Sie daran: Wenn Sie dieselbe grundlegende Funktionalität wie das vorhandene native {{htmlelement('select')}} bereitstellen möchten, sollte das Anzeigen und Auswählen von Optionen bei der Bedienung mit Tastatur, Maus, Touchscreen und Screenreader vertraut sein. Die abschließende barrierefreie Version dieses Tutorials orientiert sich am gezeigten Navigations- und Auswahlverhalten des [WAI-ARIA-APG-Beispiels für eine Combobox nur zur Auswahl](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/), nicht an jedem Implementierungsdetail nativer Steuerelemente. Erweiterte Interaktionen wie die Suche durch Tippen, <kbd>PageUp</kbd>/<kbd>PageDown</kbd> und <kbd>Alt</kbd>+<kbd>Arrow</kbd> liegen außerhalb dessen, was dieses Tutorial demonstriert.

In unserem Beispiel sind die fehlenden Vorgaben offensichtlich, sodass wir sie berücksichtigen können. Bei ungewöhnlichen neuen Steuerelementen kann das jedoch ein ernstes Problem sein. Für standardisierte Elemente wie {{htmlelement('select')}} wurden die Interaktionen für jeden Anwendungsfall und alle Eingabegeräte sorgfältig festgelegt. Neue Steuerelemente zu erstellen ist schwierig — insbesondere, wenn Sie etwas völlig Neues entwickeln und deshalb niemand weiß, welches Verhalten und welche Interaktionen zu erwarten sind. Zumindest Auswahlfelder gibt es bereits, sodass wir wissen, wie sie sich verhalten sollten!

Neue Interaktionen zu entwerfen, kommt im Allgemeinen nur für sehr große Unternehmen mit ausreichender Reichweite infrage, damit sich eine von ihnen geschaffene Interaktion als Standard etablieren kann. Apple führte beispielsweise 2001 mit dem iPod das Scrollrad ein. Das Unternehmen hatte den nötigen Marktanteil, um eine völlig neue Art der Gerätebedienung erfolgreich einzuführen — etwas, das den meisten Geräteherstellern nicht möglich ist.

Vermeiden Sie es möglichst, neue Bedieninteraktionen zu erfinden. Wenn Sie doch eine neue Interaktion hinzufügen, ist ihre Gestaltung wichtig. Ist ein Verhalten schlecht oder gar nicht definiert, lässt es sich nur schwer nachträglich ändern, sobald sich die Menschen daran gewöhnt haben. Holen Sie im Zweifelsfall mehrere Meinungen ein und [führen Sie Nutzertests durch](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr darüber erfahren möchten, finden Sie unter den folgenden Ressourcen hilfreiche Informationen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Auf den meisten Systemen lässt sich das Element {{HTMLElement("select")}} auch mit der Tastatur öffnen, um alle verfügbaren Optionen anzusehen — genauso wie durch einen Mausklick auf das Element {{HTMLElement("select")}}. Unter Windows funktioniert das mit <kbd>Alt</kbd> + <kbd>Down</kbd>. Wir haben dies in unserem Beispiel nicht implementiert; nach dem Vorbild des `click`-Events ließe es sich jedoch leicht ergänzen.

## HTML-Struktur und (einen Teil der) Semantik definieren

Nachdem wir die grundlegende Funktionalität des Steuerelements festgelegt haben, können wir mit der Erstellung beginnen. Zuerst definieren wir seine HTML-Struktur und Semantik. Für den Nachbau eines Elements {{HTMLElement("select")}} benötigen wir Folgendes:

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

Beachten Sie, dass wir die relevanten Teile unabhängig von den zugrunde liegenden HTML-Elementen durch Klassennamen kennzeichnen. So binden wir CSS und JavaScript nicht an eine starre HTML-Struktur und können die Implementierung später ändern, ohne Code zu beeinträchtigen, der das Steuerelement verwendet. Was wäre beispielsweise, wenn Sie später ein Gegenstück zum Element {{HTMLElement("optgroup")}} implementieren möchten?

Klassennamen haben allerdings keine semantische Bedeutung. In diesem Zustand „sieht“ eine Person mit Screenreader nur eine ungeordnete Liste. Die ARIA-Semantik ergänzen wir später.

## Das Erscheinungsbild mit CSS gestalten

Nachdem die Struktur feststeht, können wir unser Steuerelement gestalten. Der Sinn dieses benutzerdefinierten Steuerelements besteht gerade darin, dass wir es nach unseren Vorstellungen gestalten können. Dafür teilen wir die CSS-Arbeit in zwei Bereiche auf: Zunächst schreiben wir die nötigen CSS-Regeln, damit sich das Steuerelement wie ein Element {{HTMLElement("select")}} verhält. Anschließend fügen wir die Gestaltungsregeln hinzu, die ihm das gewünschte Aussehen geben.

### Erforderliche Stile

Wir benötigen Stile für die drei Zustände unseres Steuerelements.

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

Für das Erscheinungsbild im aktiven Zustand benötigen wir eine zusätzliche Klasse `active`. Da unser Steuerelement fokussierbar ist, ergänzen wir diesen benutzerdefinierten Stil um die Pseudoklasse {{cssxref(":focus")}}, damit auch Personen, die eine Tastatur verwenden, die Interaktivität erkennen können.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required; however, it's imperative to ensure
     the active state is visible, especially to keyboard users, so we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Kümmern wir uns nun um die Optionsliste:

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

Zum Ausblenden der Optionsliste benötigen wir eine weitere Klasse. Damit können wir zwischen aktivem und geöffnetem Zustand unterscheiden.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way;
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir hätten auch `transform: scale(1, 0)` verwenden können, damit die Optionsliste keine Höhe, aber ihre volle Breite hat.

### Optische Gestaltung

Nachdem die grundlegende Funktionalität steht, beginnt der kreative Teil. Das Folgende ist nur ein Beispiel dafür, was möglich ist, und entspricht dem Screenshot am Anfang dieses Artikels. Experimentieren Sie ruhig selbst und sehen Sie, welche Gestaltung Ihnen gelingt.

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

Für den Abwärtspfeil brauchen wir kein zusätzliches Element. Stattdessen verwenden wir das Pseudoelement {{cssxref("::after")}}:

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

Den Optionen geben wir eine Klasse `highlight`, um den Wert zu kennzeichnen, den die Person auswählen wird oder bereits ausgewählt hat.

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

So sieht das Ergebnis in seinen drei Zuständen aus ([Quellcode ansehen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

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

Nachdem Design und Struktur fertig sind, können wir JavaScript schreiben, damit das Steuerelement tatsächlich funktioniert.

> [!WARNING]
> Der folgende Code dient der Veranschaulichung, ist kein Produktionscode und sollte nicht unverändert verwendet werden. Er enthält redundante Teile, die für den produktiven Einsatz optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist eines wichtig: **JavaScript im Browser ist keine uneingeschränkt zuverlässige Technologie**. Benutzerdefinierte Steuerelemente sind darauf angewiesen, dass JavaScript alle Teile miteinander verbindet. Es gibt jedoch Fälle, in denen JavaScript im Browser nicht ausgeführt werden kann:

- Die Person hat JavaScript deaktiviert: Das ist ungewöhnlich; heutzutage deaktivieren nur sehr wenige Menschen JavaScript.
- Das Skript wurde nicht geladen: Das ist einer der häufigsten Fälle, insbesondere auf Mobilgeräten, wo die Netzwerkverbindung nicht immer zuverlässig ist.
- Das Skript enthält Fehler: Diese Möglichkeit sollten Sie immer berücksichtigen.
- Das Skript steht in Konflikt mit einem Skript eines Drittanbieters: Das kann bei Tracking-Skripten oder Bookmarklets geschehen, die die Person verwendet.
- Das Skript steht in Konflikt mit einer Browsererweiterung oder wird von ihr beeinflusst, etwa von der Firefox-Erweiterung [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/).
- Die Person verwendet einen älteren Browser, der eine benötigte Funktion nicht unterstützt: Das kommt häufig vor, wenn Sie besonders neue APIs einsetzen.
- Die Person interagiert bereits mit den Inhalten, bevor JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Angesichts dieser Risiken sollten Sie bedenken, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir besprechen mögliche Vorgehensweisen und behandeln die Grundlagen in unserem Beispiel. Eine vollständige Erörterung aller Szenarien würde ein ganzes Buch erfordern. Denken Sie vor allem daran, dass Ihr Skript möglichst allgemein und wiederverwendbar sein sollte.

Wenn unser JavaScript-Code nicht ausgeführt wird, zeigen wir in unserem Beispiel stattdessen ein standardmäßiges Element {{HTMLElement("select")}} an. Zunächst nehmen wir sowohl unser Steuerelement als auch das Element {{HTMLElement("select")}} in die Seite auf. Anschließend blenden wir je nach erfolgreicher Ausführung des Skripts eines der beiden aus. Dazu verwenden wir `class`-Werte auf dem Element `<body>`.

Dafür sind zwei Schritte nötig:

Erstens fügen wir vor jeder Instanz unseres benutzerdefinierten Steuerelements ein reguläres Element {{HTMLElement("select")}} ein. Dieses „zusätzliche“ Auswahlfeld ist auch dann nützlich, wenn unser JavaScript wie vorgesehen funktioniert: Wir verwenden es, um die Daten des benutzerdefinierten Steuerelements zusammen mit den übrigen Formulardaten zu senden. Darauf gehen wir später näher ein.

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

Zweitens erstellen wir zwei neue Klassen, mit denen wir das jeweils nicht benötigte Element ausblenden: Wenn unser Skript nicht läuft, blenden wir das benutzerdefinierte Steuerelement visuell aus. Läuft es, blenden wir das „echte“ Element {{HTMLElement("select")}} aus. Standardmäßig blendet unser HTML-Code das benutzerdefinierte Steuerelement aus.

```css
.widget select,
.no-widget .select {
  /* This CSS selector basically says:
     - we either set the body class to "widget", hiding the actual <select> element
     - or we keep the body class of "no-widget", which hides elements with a class of "select"*/
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

Dieses CSS blendet eines der Elemente visuell aus; für Screenreader bleiben jedoch beide verfügbar.

> [!NOTE]
> Dieses Tutorial behält zunächst die bisherige Technik zum visuellen Ausblenden bei. Bevor
> JavaScript ausgeführt wird, soll das native Auswahlfeld als Ausweichlösung dienen. Das
> visuell ausgeblendete benutzerdefinierte Steuerelement kann jedoch ebenfalls für
> assistive Technologien zugänglich bleiben. Das abschließende barrierefreie Beispiel
> weiter unten entfernt das jeweils inaktive Steuerelement sowohl im Ausweich- als auch
> im erweiterten Zustand aus dem Accessibility Tree.

Nun brauchen wir in JavaScript einen Umschalter, der feststellt, ob das Skript läuft. Wird es beim Laden der Seite ausgeführt, entfernen die folgenden Zeilen die Klasse `no-widget` und fügen die Klasse `widget` hinzu. Dadurch wird das sichtbare Element {{HTMLElement("select")}} gegen das benutzerdefinierte Steuerelement ausgetauscht.

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
> Statt zwischen Klassen umzuschalten, könnten Sie die Klasse `widget` hinzufügen, um die Elemente {{HTMLElement("select")}} auszublenden, und anschließend den DOM-Baum für das benutzerdefinierte Steuerelement dynamisch hinter jedem dieser Elemente einfügen. Dadurch wäre der Code leichter wiederverwendbar.

### Verwendete DOM-Scripting-Funktionen

Im folgenden Code verwenden wir diese DOM-Scripting-Funktionen:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Event-Callbacks erstellen

Die Grundlagen sind gelegt. Nun können wir die Funktionen definieren, die unser benutzerdefiniertes Auswahlfeld steuern.

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

Als Nächstes verknüpfen wir die Funktionen mit den passenden Events:

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

Damit wechselt unser Steuerelement wie geplant zwischen den Zuständen. Sein Wert wird jedoch noch nicht aktualisiert. Das erledigen wir als Nächstes.

> [!NOTE]
> Die oben eingeführten Hilfsfunktionen — `toggleOptList()`, `deactivateSelect()` und `activeSelect()` — gehören zu einer frühen Phase dieses Artikels. Die aufeinander aufbauenden Beispiele [Beispiel 3](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_3) und [Beispiel 4](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4) behalten diese Namen und Verhaltensweisen bewusst bei. In der abschließenden barrierefreien Version wird `toggleOptList()` — die Hilfsfunktion zum Öffnen und Schließen der Liste — durch vier getrennte Funktionen ersetzt: `openOptList()` öffnet die Liste, `commitActiveOption()` wählt eine Option aus, `closeOptList()` schließt die Liste und `cancelSelection()` schließt sie, ohne den Wert zu ändern. `activeSelect()` wird in `deactivateOtherSelects()` umbenannt, weil die Funktion bei Fokus nun nur noch andere geöffnete benutzerdefinierte Steuerelemente schließen muss.

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

### Den Wert des Steuerelements verarbeiten

Als Nächstes ergänzen wir Code, der den Wert des Steuerelements anhand der Eingabe aktualisiert und ihn mit den Formulardaten sendet.

Am einfachsten geht das mit einem nativen Steuerelement im Hintergrund. Es verwaltet den Wert mithilfe der integrierten Browserfunktionen, und der Wert wird beim Absenden des Formulars wie gewohnt übertragen. Es gibt keinen Grund, das Rad neu zu erfinden.

Wie bereits gezeigt, verwenden wir aus Gründen der Barrierefreiheit ohnehin ein natives Auswahlfeld als Ausweichlösung. Dessen Wert können wir mit dem Wert unseres benutzerdefinierten Steuerelements synchronisieren:

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

Mithilfe dieser beiden Funktionen können wir die nativen und benutzerdefinierten Steuerelemente miteinander verknüpfen:

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

Beachten Sie im obigen Code die Eigenschaft [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex). Mit `select.previousElementSibling.tabIndex = -1` wird das native Steuerelement aus der sequenziellen Tastaturnavigation entfernt. `select.tabIndex = 0` macht das benutzerdefinierte Steuerelement fokussierbar, sodass es bei der Bedienung mit Tastatur oder Maus den Fokus erhalten kann. Ein negativer tabindex entfernt ein Element aus der sequenziellen Tastaturnavigation; programmatisch kann es dennoch fokussiert werden.

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

Aber Moment — sind wir wirklich fertig?

## Barrierefreiheit herstellen

Wir haben etwas gebaut, das funktioniert. Auch wenn es noch weit von einem Auswahlfeld mit vollem Funktionsumfang entfernt ist, lässt es sich gut bedienen. Bisher haben wir jedoch lediglich das DOM manipuliert. Dem Steuerelement fehlt echte Semantik. Obwohl es wie ein Auswahlfeld aussieht, erkennen assistive Technologien es nicht als solches. Kurz gesagt: Dieses hübsche neue Auswahlfeld ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung: [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für „Accessible Rich Internet Applications“ und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die genau für unseren Zweck entwickelt wurde: Webanwendungen und benutzerdefinierte Steuerelemente barrierefrei zu machen. ARIA stellt Attribute bereit, die HTML erweitern und Rollen, Zustände und Eigenschaften beschreiben. So können wir fehlende Semantik ergänzen. Einige dieser Attribute werden in HTML gesetzt, andere mit JavaScript aktuell gehalten.

### Das Attribut `role`

Ein zentrales Attribut von [ARIA](/de/docs/Web/Accessibility/ARIA) ist [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques). Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) nimmt einen Wert an, der den Zweck eines Elements definiert. Jede Rolle bringt eigene Anforderungen und Verhaltensweisen mit sich.

In unserem Beispiel erhält das Element `<div class="select">` [`role="combobox"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role). Damit wird angegeben, dass das Element eine Liste von Optionen bereitstellt, die ein- und ausgeklappt werden kann. Außerdem fügen wir [`aria-haspopup="listbox"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) hinzu, um den Typ des Popups anzugeben, und [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), das auf die `id` der Optionsliste verweist.
Eine Listbox ist der Standard-Popup-Typ einer Combobox; `aria-haspopup="listbox"` ist hier also nicht erforderlich. In diesem Beispiel geben wir es dennoch ausdrücklich an.
Da das initialisierte Formular mehrere benutzerdefinierte Steuerelemente enthalten kann, tragen wir diese IDs nicht fest im HTML ein: Doppelte IDs würden die ARIA-Referenzen beeinträchtigen. Stattdessen erzeugt JavaScript bei der Initialisierung für die Listbox und jede ihrer Optionen eine eindeutige `id` und setzt `aria-controls` so, dass es auf die erzeugte `id` der Listbox verweist.

Combobox und Listbox sind Geschwisterelemente innerhalb eines neutralen Wrappers. Der Wrapper hat selbst keine ARIA-Rolle. Das Attribut `aria-controls` der Combobox stellt die Verbindung zu ihrer zugehörigen Listbox her.

Das Element `<ul>` erhält [`role="listbox"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role). Dadurch erkennen assistive Technologien, dass es eine Liste auswählbarer Einträge enthält. Jedes Element `<li>` erhält [`role="option"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role).

Sowohl das native `<select>` als auch das benutzerdefinierte `<div>` erhalten das Attribut [`aria-label="Fruit"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), damit assistive Technologien einen aussagekräftigen Namen für das Steuerelement ausgeben können. Auch die Popup-Listbox erhält mit `aria-label="Fruit"` den barrierefrei zugänglichen Namen, den die Rolle `listbox` erfordert.

Das native `<select>` behält seinen barrierefrei zugänglichen Namen als Ausweichlösung für den Fall, dass JavaScript nicht verfügbar ist. Sobald JavaScript das benutzerdefinierte Widget aktiviert, entfernt das abschließende CSS weiter unten das native Steuerelement aus der Darstellung, der Fokusnavigation und dem Accessibility Tree. Damit bleibt die benutzerdefinierte Combobox als zugängliches Steuerelement übrig.

Zur Unterstützung dieser Rollen passen wir unser HTML wie folgt an:

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
> In diesem Tutorial behalten wir sowohl das Attribut `role` als auch das Attribut
> `class` bei: `role` liefert assistiven Technologien die Semantik, während
> `class` von CSS und JavaScript verwendet wird. In einer allgemeineren
> Implementierung könnten Sie stattdessen Selektoren wie
> `[role="option"]` verwenden, sofern Sie CSS und JavaScript
> entsprechend anpassen.

In den früheren Schritten wird das inaktive benutzerdefinierte Steuerelement aus dem sichtbaren Bereich verschoben. Zu diesem Zeitpunkt hat es noch nicht die endgültige ARIA-Widget-Semantik erhalten. Wenn es für assistive Technologien zugänglich bleibt, entsteht dadurch also noch kein zweites benanntes Formularsteuerelement. In dieser abschließenden barrierefreien Version besitzt das benutzerdefinierte Steuerelement jedoch Combobox-Semantik und einen barrierefrei zugänglichen Namen. Würde es vor der Ausführung von JavaScript im Accessibility Tree bleiben, wären sowohl das native `<select>` als auch eine inaktive benutzerdefinierte Combobox zugänglich. Um diese Dopplung zu vermeiden, blendet das abschließende Beispiel das jeweils inaktive Steuerelement mit `display: none` aus. Dabei wird der Wrapper des gesamten benutzerdefinierten Widgets statt nur der Combobox angesprochen, damit auch die zugehörige Popup-Listbox ausgeblendet wird:

```css
.widget select,
.no-widget .select-wrapper {
  display: none;
}
```

Der Wrapper bildet zugleich den Positionierungskontext für die Popup-Listbox, die absolut relativ zu ihm positioniert wird:

```css
.select-wrapper {
  position: relative;
  display: inline-block;
}
```

Das native `<select>` bleibt mit dem Formular verknüpft. `updateValue()` hält seinen ausgewählten Wert für die Formularübermittlung synchron.

### Die Attribute `aria-selected` und `aria-activedescendant`

Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) allein genügt nicht. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet außerdem zahlreiche Attribute für Zustände und Eigenschaften, damit assistive Technologien Ihr Steuerelement verstehen können.

Das Attribut `aria-selected` kennzeichnet die von der Person ausgewählte Option als aktuelle Auswahl. Dadurch können assistive Technologien mitteilen, welche Option ausgewählt ist. Das Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der Combobox kennzeichnet die derzeit aktive und visuell hervorgehobene Option — allerdings nur, solange die Listbox geöffnet ist. Da sich beide Attribute auf eine bestimmte Option beziehen, erhält jede Option eine eindeutige `id`.

Die folgenden Funktionen halten diese Zustände gemeinsam synchron:

- `openOptList(select, activeIndex)` öffnet die Listbox und legt dabei die aktive Option fest: Die Funktion setzt `aria-expanded` auf `"true"`, entfernt die Klasse `hidden`, fügt die Klasse `active` hinzu und verwendet `highlightOption()`, um die visuelle Hervorhebung und `aria-activedescendant` auf die Option bei `activeIndex` auszurichten.
- `commitActiveOption(select)` wählt die derzeit aktive Option durch einen Aufruf von `updateValue()` aus. Ist die Listbox geschlossen oder wird die aktive Option nicht gefunden, kehrt die Funktion zurück, ohne etwas zu ändern. Sie schließt die Listbox nicht.
- `closeOptList(select)` schließt die Listbox: Die Funktion stellt mit `highlightOption()` die visuelle Hervorhebung der ausgewählten Option wieder her, blendet die Listbox aus, entfernt die Klasse `active`, setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`.
- `cancelSelection(select)` ist der Weg für Escape: Die Funktion lässt den ausgewählten Wert unverändert und schließt die Listbox mit `closeOptList()`. Diese Funktion stellt vor dem Einklappen der Listbox die ausgewählte Option als aktive visuelle Hervorhebung wieder her.
- `highlightOption(select, option)` aktualisiert die visuelle Hervorhebung der übergebenen aktiven Option und — solange die Listbox geöffnet ist — auch `aria-activedescendant`. Die Funktion ändert für sich genommen weder `aria-selected` noch `selectedIndex` des nativen `<select>`; das geschieht nur über `updateValue()`.
- `updateValue()` ist die einzige Stelle, an der sich die ausgewählte Option ändert: Die Funktion aktualisiert `aria-selected`, den nativen `selectedIndex`, den angezeigten Wert, die visuelle Hervorhebung und — bei geöffneter Listbox — `aria-activedescendant`.

Ist die Listbox geöffnet, bewegen die Pfeiltasten die aktive Hervorhebung und `aria-activedescendant` mithilfe von `highlightOption()` durch die Optionen. Dabei wird `updateValue()` nie aufgerufen; `aria-selected` und der Wert des nativen `<select>` ändern sich daher nicht. Wenn die Maus über einer Option verweilt, ändert sich nur deren Aussehen durch CSS. Weder `aria-activedescendant` noch `aria-selected`, `selectedIndex` des nativen `<select>` oder der ausgewählte Wert ändern sich. Die Rückmeldung beim Darüberfahren mit der Maus wird durch eine einzige CSS-Regel für Optionen umgesetzt, die nicht die derzeit aktive Option sind:

```css
.select-wrapper .option:not(.highlight):hover {
  background-color: rgb(0 0 0 / 10%);
}
```

Den Code dazu finden Sie weiter unten unter [Den aufgeklappten Zustand aktualisieren](#den_aufgeklappten_zustand_aktualisieren).

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

`highlightOption()` hält `aria-activedescendant` bei geöffneter Listbox mit der visuellen Hervorhebung synchron:

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

Es mag einfacher erscheinen, den Fokus eines Screenreaders auf das außerhalb des sichtbaren Bereichs platzierte Auswahlfeld zu legen und das gestaltete Steuerelement zu ignorieren. Sie sollten sich jedoch nicht auf ein solches natives Auswahlfeld als einziges barrierefrei zugängliches Steuerelement verlassen. Screenreader werden nicht nur von blinden Menschen verwendet, sondern auch von Menschen mit eingeschränktem und sogar mit uneingeschränktem Sehvermögen. Deshalb ist es wichtig, die ARIA-Attribute mit dem sichtbaren Zustand zu synchronisieren.

### Die aktive Option sichtbar halten

Eine Listbox mit vielen Optionen kann höher sein als der verfügbare Platz. Die aktive Option sollte deshalb an zwei Stellen sichtbar bleiben: innerhalb des scrollbaren Bereichs der Listbox und auf der Seite. Zwei Hilfsfunktionen übernehmen das:

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

`scrollOptionIntoListbox()` verschiebt die Scrollposition der Listbox, damit die angegebene Option darin sichtbar bleibt. Die Funktion wird jedes Mal beim Öffnen der Listbox ausgeführt — unabhängig davon, ob dies per Tastatur oder Zeigegerät geschieht. So ist die Option, bei der die Listbox geöffnet wird, stets sichtbar. `keepOptionVisible()` ruft diese Funktion auf und scrollt zusätzlich die Seite, allerdings nur, wenn die Option nicht bereits im Viewport sichtbar ist. Sie wird verwendet, wenn die Listbox bereits geöffnet ist und die aktive Option per Tastatur verschoben wird. So bleibt die Option sichtbar, auf die `aria-activedescendant` verweist.

### Den aufgeklappten Zustand aktualisieren

Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) gibt an, ob die Optionsliste derzeit geöffnet oder geschlossen ist. Statt einer Funktion, die die Liste sowohl öffnet als auch schließt, verwenden wir für den Popup-Zustand die getrennten Hilfsfunktionen `openOptList()` und `closeOptList()`. `openOptList()` öffnet die Liste direkt, setzt `aria-expanded` auf `"true"` und verwendet `highlightOption()`, um die visuelle Hervorhebung und `aria-activedescendant` auf die Option bei dem übergebenen `activeIndex` auszurichten. `closeOptList()` setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`. Vor dem Öffnen prüft `openOptList()` die angeforderte Option. Daher hat eine geöffnete Listbox immer eine aktive Option:

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

Nicht jede Methode zum Schließen der Liste hat dieselbe Wirkung. Wird <kbd>Enter</kbd>, <kbd>Space</kbd> oder <kbd>Tab</kbd> gedrückt, der Fokus wegbewegt oder eine Option angeklickt, wird zunächst mit `commitActiveOption()` die aktive Option ausgewählt und danach die Liste mit `closeOptList()` geschlossen. Bei geöffneter Listbox ruft <kbd>Escape</kbd> `cancelSelection()` auf; damit wird die Liste geschlossen, ohne den Wert zu ändern. Ein Klick auf die Combobox bei geöffneter Liste ruft lediglich `closeOptList()` auf. In jedem Fall stellt `closeOptList()` die ausgewählte Option als aktive Hervorhebung wieder her, blendet die Listbox durch Hinzufügen der Klasse `hidden` aus, entfernt die Klasse `active`, setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`. So verweist die eingeklappte Combobox nicht auf eine Option in einer ausgeblendeten Listbox.

Die Klasse `active` folgt dem aufgeklappten Zustand: `openOptList()` setzt sie beim Öffnen, `closeOptList()` entfernt sie beim Schließen. Die ergänzende Hilfsfunktion `deactivateOtherSelects()` — die umbenannte Nachfolgerin der früheren Funktion `activeSelect()` — erfüllt weiterhin denselben Zweck wie zu Beginn des Tutorials: Wenn ein Steuerelement den Fokus erhält, schließt sie alle anderen geöffneten benutzerdefinierten Steuerelemente auf der Seite, indem sie für jedes `closeOptList()` aufruft:

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

Damit das Steuerelement per Tastatur zugänglich ist, muss es sich vollständig mit der Tastatur bedienen lassen. Wir reagieren auf `keydown`-Events und verarbeiten die folgenden Tasten mit einer `switch`-Anweisung:

- <kbd>ArrowDown</kbd> — bei eingeklappter Listbox: die Listbox mit der aktuell ausgewählten Option als aktiver Option öffnen; bei aufgeklappter Listbox: die aktive Option zur nächsten Option verschieben, ohne den ausgewählten Wert zu ändern.
- <kbd>ArrowUp</kbd> — bei eingeklappter Listbox: die Listbox mit der aktuell ausgewählten Option als aktiver Option öffnen; bei aufgeklappter Listbox: die aktive Option zur vorherigen Option verschieben, ohne den ausgewählten Wert zu ändern.
- <kbd>Home</kbd> — bei eingeklappter Listbox: die Listbox mit der ersten Option als aktiver Option öffnen; bei aufgeklappter Listbox: die erste Option aktivieren, ohne den ausgewählten Wert zu ändern.
- <kbd>End</kbd> — bei eingeklappter Listbox: die Listbox mit der letzten Option als aktiver Option öffnen; bei aufgeklappter Listbox: die letzte Option aktivieren, ohne den ausgewählten Wert zu ändern.
- <kbd>Enter</kbd> / <kbd>Space</kbd> — bei eingeklappter Listbox: die Listbox mit der aktuell ausgewählten Option als aktiver Option öffnen; bei aufgeklappter Listbox: die aktive Option auswählen und die Listbox schließen.
- <kbd>Tab</kbd> — bei aufgeklappter Listbox: die aktive Option auswählen und die Listbox schließen; andernfalls den normalen Fokuswechsel zulassen.
- <kbd>Escape</kbd> — bei aufgeklappter Listbox: den zuvor ausgewählten Wert beibehalten, die ausgewählte Option wieder als aktive und hervorgehobene Option festlegen und die Listbox schließen; bei eingeklappter Listbox bleibt die Verarbeitung der Taste der Seite überlassen.

Die Navigationstasten (<kbd>ArrowDown</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>) und die Tasten zur Auswahl einer Option (<kbd>Enter</kbd>, <kbd>Space</kbd>) rufen `event.preventDefault()` auf. Damit verhindern sie das standardmäßige Scrollen des Browsers oder das Absenden des Formulars. Ist das benutzerdefinierte Auswahlfeld eingeklappt, öffnen diese Tasten die Listbox über `openOptList()`, ohne den ausgewählten Wert zu ändern. Nach dem Öffnen gehen <kbd>ArrowDown</kbd> und <kbd>ArrowUp</kbd> von der aktuell hervorgehobenen aktiven Option aus, nicht von der ausgewählten Option. Die Tastaturnavigation wird also bei der aktiven Option fortgesetzt, die beim Öffnen oder durch vorherige Navigation festgelegt wurde. Den Ausgangsindex ermittelt die kleine Hilfsfunktion `getActiveIndex()`. Ist die Listbox eingeklappt oder fehlt der aktive Nachfahre beziehungsweise stimmt er nicht mehr mit einer Option überein, fällt sie auf die von `getIndex()` zurückgegebene ausgewählte Option zurück:

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

Das oben beschriebene Navigations- und Auswahlverhalten orientiert sich am [WAI-ARIA-APG-Beispiel für eine Combobox nur zur Auswahl](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/): Das Popup öffnet sich mit einer festgelegten Ausgangsoption, Navigationstasten bewegen die aktive Option, ohne den ausgewählten Wert zu ändern, und Bestätigungstasten wählen die aktive Option aus und schließen das Popup. Dieses Tutorial konzentriert sich auf diese grundlegenden Interaktionen. Erweiterte Interaktionen wie die Suche durch Tippen, <kbd>PageUp</kbd>/<kbd>PageDown</kbd> und <kbd>Alt</kbd>+<kbd>Arrow</kbd> sind nicht Teil der gezeigten Implementierung.

Der `keydown`-Handler ermittelt seinen Ausgangsindex mithilfe der obigen Hilfsfunktion. Bei geöffneter Listbox bewegen die Pfeiltasten die aktive Option nur über `highlightOption()`. Sie rufen nie `updateValue()` auf und ändern daher nicht den ausgewählten Wert. Auf jeden Navigationsschritt folgt `keepOptionVisible()`, damit die Option, auf die `aria-activedescendant` verweist, sowohl innerhalb der Listbox als auch auf der Seite sichtbar bleibt:

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
      return;
  }
});
```

### Fokus und Klicks verarbeiten

Eine sorgfältige Fokusverwaltung sorgt dafür, dass sich die Optionsliste vorhersehbar öffnet und schließt. Wenn das benutzerdefinierte Steuerelement den Fokus erhält, deaktivieren wir alle anderen geöffneten Auswahlfelder. Verliert es den Fokus und ist die Listbox geöffnet, wählen wir die aktive Option aus und schließen die Liste. Ist die Listbox bereits geschlossen, bleibt der Wert unverändert.

Bei der Mausbedienung ändert sich durch das Darüberfahren mit der Maus nur das Aussehen einer Option per CSS (`.select-wrapper .option:not(.highlight):hover`). Weder die aktive Option noch der ausgewählte Wert ändern sich. Für jede Option richten wir einen `mousedown`-Handler ein, der `event.preventDefault()` aufruft. So wird verhindert, dass der Klick ein `blur`-Event auf dem Container auslöst. Der `click`-Handler jeder Option ruft ausdrücklich `highlightOption()` für die angeklickte Option auf, um sie zur aktiven Option zu machen. Anschließend ruft er `commitActiveOption()` und `closeOptList()` auf und gibt dem Steuerelement den Fokus zurück. Da die Listbox ein Geschwisterelement der Combobox und kein Nachfahre von ihr ist, erreicht ein Klick auf eine Option nie den `click`-Handler der Combobox. Der Handler muss daher die Weitergabe des Events nicht unterbinden. Da das Verlassen des Steuerelements die aktuelle aktive Option auswählt, wird nach einem bloßen Darüberfahren mit der Maus beim Wegbewegen des Fokus die zuvor aktive Option ausgewählt — also die beim Öffnen oder durch Tastaturnavigation festgelegte Option — und nicht die Option unter dem Mauszeiger:

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

Beim Öffnen mit einem Zeigegerät gilt derselbe Ausgangspunkt wie bei <kbd>ArrowDown</kbd> und <kbd>ArrowUp</kbd>: Solange die Listbox geschlossen ist, bewegen diese Interaktionen die aktive Option nicht durch die Liste. Sie öffnen die Listbox jeweils mit der aktuell ausgewählten Option als aktiver Option.

Das native Element `<select>` wird in `updateValue()` über `nativeWidget.selectedIndex = index` synchron gehalten. Dadurch bleiben die Formulardaten auch bei Verwendung des benutzerdefinierten Steuerelements korrekt.

Unten sehen Sie das Endergebnis all dieser Änderungen. Probieren Sie es am besten mit einer assistiven Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) aus.

Das Formular wechselt erst dann in den Zustand `widget`, wenn alle benutzerdefinierten Auswahlfelder initialisiert wurden. Sollte die synchrone Initialisierung vorher abbrechen, bleiben die nativen Steuerelemente durch den ursprünglichen Zustand `no-widget` verfügbar.

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
        return;
    }
  });
});

if (selectList.length > 0) {
  form.classList.remove("no-widget");
  form.classList.add("widget");
}
```

{{EmbedLiveSample("live_example_3",120,130)}}

Der Code dieses Beispiels lässt sich noch verbessern, um ihn allgemeiner und wiederverwendbar zu machen. Das erste Argument jeder Funktion ist dasselbe; alle Funktionen benötigen also denselben Kontext. Versuchen Sie als Übung, ein Objekt zu erstellen, über das sie diesen Kontext gemeinsam nutzen.

## Ein alternativer Ansatz: Radio-Buttons verwenden

Im obigen Beispiel haben wir ein Element {{htmlelement('select')}} mithilfe von HTML ohne passende Semantik, CSS und JavaScript nachgebaut. Unser benutzerdefiniertes Widget wählt eine Option aus einer begrenzten Anzahl aus. Dieselbe Funktionalität bietet eine Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons.

Wir könnten das Steuerelement daher auch mit Radio-Buttons nachbauen. Sehen wir uns diesen Ansatz an.

Wir beginnen mit einer vollständig semantischen, barrierefrei zugänglichen, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Buttons mit jeweils zugehörigem {{htmlelement('label')}}. Die gesamte Gruppe beschriften wir mit einem semantisch passenden Paar aus {{htmlelement('fieldset')}} und {{htmlelement('legend')}}.

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

Wir gestalten die Liste der Radio-Buttons ein wenig — nicht aber `legend` oder `fieldset` —, damit sie dem vorherigen Beispiel etwas ähnelt. Das soll lediglich zeigen, dass dieser Ansatz möglich ist:

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

Ganz ohne JavaScript und mit nur wenig CSS können wir die Radio-Buttons so gestalten, dass nur der ausgewählte Eintrag angezeigt wird. Befindet sich der Fokus innerhalb des `<ul>` im `<fieldset>`, öffnet sich die Liste. Mit den Pfeiltasten nach oben und unten — ebenso wie mit denen nach links und rechts — lassen sich der vorherige und der nächste Eintrag auswählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Das funktioniert bis zu einem gewissen Grad ohne JavaScript. Wir haben ein Steuerelement erstellt, das unserem benutzerdefinierten Widget ähnelt und selbst dann funktioniert, wenn JavaScript fehlschlägt. Klingt nach einer großartigen Lösung, oder? Nicht ganz. Mit der Tastatur funktioniert es, bei einem Mausklick verhält es sich jedoch nicht wie erwartet. Im Allgemeinen ist es wohl sinnvoller, benutzerdefinierte Steuerelemente auf Webstandards aufzubauen, statt sich auf Frameworks zu verlassen, die Elemente ohne native Semantik erzeugen. Unser Steuerelement bietet allerdings nicht dieselbe Funktionalität wie ein natives `<select>`.

Positiv ist, dass dieses Steuerelement für Screenreader vollständig zugänglich und vollständig mit der Tastatur navigierbar ist. Ein Ersatz für {{htmlelement('select')}} ist es dennoch nicht: Einige Funktionen unterscheiden sich oder fehlen. Beispielsweise navigieren alle vier Pfeiltasten durch die Optionen. Befindet sich die Person jedoch auf dem letzten Button und drückt die Pfeiltaste nach unten, springt die Auswahl zum ersten Button. Anders als bei einem `<select>` hält sie nicht am Anfang oder Ende der Optionsliste an.

Die Ergänzung dieser fehlenden Funktionalität überlassen wir Ihnen als Übung.

## Fazit

In diesem Artikel haben wir ein benutzerdefiniertes Formularsteuerelement erstellt. Der dafür nötige Aufwand ist jedoch erheblich. Bevor Sie ein eigenes Steuerelement entwickeln, prüfen Sie, ob vorhandene HTML-Steuerelemente Ihre Anforderungen erfüllen. Wenn Sie ein benutzerdefiniertes Steuerelement benötigen, ist es oft einfacher, bestehende Elemente anzupassen oder eine Bibliothek eines Drittanbieters zu verwenden, statt alles selbst zu entwickeln. Ein benutzbares und barrierefrei zugängliches Formularsteuerelement zu erstellen, ist komplizierter, als es zunächst aussieht.

Bevor Sie selbst eines programmieren, sollten Sie unter anderem diese Bibliotheken in Betracht ziehen:

- [jQuery UI](https://jqueryui.com/)
- [AXE: barrierefreie benutzerdefinierte Auswahlmenüs](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)
