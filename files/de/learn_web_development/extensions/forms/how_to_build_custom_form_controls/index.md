---
title: Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente
short-title: Benutzerdefinierte Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 912d9d7cc46ac052cd4e9c5df3c02a7b145b9ad8
---

Die verfügbaren nativen HTML-Formularsteuerelemente bieten möglicherweise nicht in jedem Fall genügend Funktionalität. Wenn Sie beispielsweise einige Steuerelemente wie das {{HTMLElement("select")}}-Element [erweitert gestalten](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) oder eigene Verhaltensweisen bereitstellen möchten, können Sie erwägen, eigene Steuerelemente zu erstellen.

In diesem Artikel besprechen wir, wie Sie ein benutzerdefiniertes Steuerelement erstellen. Dazu bauen wir das {{HTMLElement("select")}}-Element nach. Außerdem erörtern wir, wann ein eigenes Steuerelement sinnvoll ist und welche Anforderungen Sie berücksichtigen sollten.

> [!NOTE]
> Wir konzentrieren uns auf die Erstellung des Steuerelements, nicht darauf, den Code allgemein verwendbar und wiederverwendbar zu machen. Letzteres würde komplexeren JavaScript-Code und DOM-Manipulationen in einem unbekannten Kontext erfordern und liegt außerhalb des Rahmens dieses Artikels.

## Entwurf, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie genau festlegen, was es leisten soll. Das spart Ihnen bei der Implementierung Zeit. Insbesondere sollten Sie alle Zustände des Steuerelements klar definieren. Es empfiehlt sich, ein vorhandenes Steuerelement, dessen Zustände und Verhalten gut bekannt sind, möglichst genau nachzubilden.

In unserem Beispiel bauen wir das {{HTMLElement("select")}}-Element nach. Dieses Ergebnis möchten wir erreichen:

![Die drei Zustände eines Auswahlfelds](custom-select.png)

Der Screenshot zeigt die drei Hauptzustände unseres Steuerelements. Von links nach rechts: normal, aktiv und geöffnet.

Wir bilden das Verhalten eines nativen HTML-Elements nach. Daher sollte unser Steuerelement dieselben Verhaltensweisen und dieselbe Semantik wie das native HTML-Element aufweisen. Es muss sich wie jedes native Steuerelement mit Maus und Tastatur bedienen lassen und für Screenreader verständlich sein. Legen wir zunächst fest, wie das Steuerelement die einzelnen Zustände erreicht:

**Das Steuerelement befindet sich im normalen Zustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und die Person irgendwo außerhalb davon klickt.
- das Steuerelement aktiv war und die Person den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt, beispielsweise mit der <kbd>Tab</kbd>-Taste.

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- die Person darauf klickt oder es auf einem Touchscreen berührt.
- die Person die Tab-Taste drückt und das Steuerelement dadurch den Fokus erhält.
- das Steuerelement geöffnet ist und die Person darauf klickt.

**Das Steuerelement befindet sich im geöffneten Zustand, wenn:**

- es sich in einem anderen Zustand als „geöffnet“ befindet und die Person darauf klickt.

Nachdem feststeht, wie die Zustände wechseln, müssen wir definieren, wie sich der Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- die Person bei geöffnetem Steuerelement auf eine Option klickt.
- die Person im aktiven Zustand die Pfeiltaste nach oben oder unten drückt.

**Der Wert ändert sich nicht, wenn:**

- die Person die Pfeiltaste nach oben drückt, während die erste Option ausgewählt ist.
- die Person die Pfeiltaste nach unten drückt, während die letzte Option ausgewählt ist.

Legen wir abschließend fest, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn sich die Maus über einer Option befindet, wird diese Option hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren normalen Zustand zurück.

> [!NOTE]
> Diese Spezifikation ist vorläufig. Sie beschreibt die frühen Phasen dieser Anleitung, in denen eine vertraute, nativen Steuerelementen ähnliche Interaktion mit einfachem JavaScript nachgebildet werden soll. Wenn später Barrierefreiheitssemantik und explizites Tastaturverhalten ergänzt werden – im Abschnitt [Barrierefreiheit herstellen](#barrierefreiheit_herstellen) und im Unterabschnitt [Tastaturinteraktion](#tastaturinteraktion) –, wird dieses Modell verfeinert: Eine separate _aktive Option_ kann sich durch die Liste bewegen, ohne bereits eine Option auszuwählen. Der gewählte Wert ändert sich nur an bestimmten Stellen, statt sich während der Navigation zu ändern. Der spätere Code ersetzt daher die Hilfsfunktion, die die Liste sowohl öffnet als auch schließt, durch getrennte Schritte: Liste öffnen, Option auswählen, Liste schließen und ohne Wertänderung abbrechen.

Hier halten wir zunächst inne. Vielleicht fällt Ihnen auf, dass einige Verhaltensweisen fehlen. Was geschieht beispielsweise, wenn die Person die Tab-Taste drückt, während das Steuerelement geöffnet ist? Die Antwort lautet: _nichts_. Das richtige Verhalten scheint offensichtlich zu sein, lässt sich aber leicht übersehen, weil es in unseren Vorgaben nicht definiert ist. Das gilt besonders bei der Arbeit im Team, wenn unterschiedliche Personen das Verhalten eines Steuerelements entwerfen und implementieren.

Ein weiteres Beispiel: Was geschieht, wenn die Person bei geöffnetem Steuerelement die Pfeiltaste nach oben oder unten drückt? Hier ist die Antwort etwas schwieriger. Wenn Sie den aktiven und den geöffneten Zustand als völlig verschieden betrachten, geschieht wieder „nichts“, weil wir für den geöffneten Zustand keine Tastaturinteraktionen definiert haben. Wenn Sie dagegen davon ausgehen, dass sich der aktive und der geöffnete Zustand teilweise überschneiden, ändert sich möglicherweise der Wert. Die entsprechende Option wird aber auf keinen Fall passend hervorgehoben: Wir haben keine Tastaturinteraktionen für Optionen definiert, während das Steuerelement geöffnet ist. Festgelegt haben wir nur, was beim Öffnen geschieht, nicht aber, was danach passiert.

Wir müssen noch etwas weiterdenken: Was ist mit der Escape-Taste? Mit <kbd>Esc</kbd> wird ein geöffnetes Auswahlfeld geschlossen. Denken Sie daran: Wenn Sie dieselbe grundlegende Funktionalität wie das vorhandene native {{htmlelement('select')}} bereitstellen möchten, sollte das Anzeigen und Auswählen von Optionen bei Tastatur, Maus, Touchscreen und Screenreader vertraut sein. Die abschließende barrierefreie Phase dieser Anleitung orientiert sich am gezeigten Navigations- und Auswahlverhalten des [WAI-ARIA-APG-Beispiels für eine Select-Only-Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/), nicht an jedem Implementierungsdetail nativer Steuerelemente. Erweiterte Interaktionen wie die Auswahl durch Tippen, <kbd>PageUp</kbd>/<kbd>PageDown</kbd> und <kbd>Alt</kbd>+<kbd>Arrow</kbd> liegen außerhalb des Rahmens dieser Anleitung.

In unserem Beispiel sind die fehlenden Vorgaben offensichtlich, sodass wir sie ergänzen können. Bei neuartigen Steuerelementen kann das jedoch ein echtes Problem sein. Die Interaktionen standardisierter Elemente wie {{htmlelement('select')}} wurden für jeden Anwendungsfall und alle Eingabegeräte sorgfältig spezifiziert. Neue Steuerelemente zu entwickeln ist schwierig, insbesondere wenn es noch kein Vorbild gibt und daher niemand weiß, welches Verhalten und welche Interaktionen erwartet werden. Auswahlfelder gibt es immerhin bereits – wir wissen also, wie sie sich verhalten sollten!

Neue Interaktionen zu entwerfen ist in der Regel nur für sehr große Unternehmen eine Option, deren Reichweite ausreicht, damit sich eine von ihnen entwickelte Interaktion als Standard etablieren kann. Apple führte beispielsweise 2001 mit dem iPod das Scrollrad ein. Das Unternehmen hatte genügend Marktanteile, um eine völlig neue Art der Gerätebedienung erfolgreich einzuführen – etwas, das den meisten Geräteherstellern nicht möglich ist.

Erfinden Sie nach Möglichkeit keine neuen Benutzerinteraktionen. Wenn Sie dennoch eine neue Interaktion hinzufügen, ist ihre Gestaltung wichtig. Wird ein Verhalten ungenau oder gar nicht definiert, lässt es sich nur schwer nachträglich ändern, sobald sich die Nutzenden daran gewöhnt haben. Holen Sie im Zweifel mehrere Meinungen ein und [führen Sie Usability-Tests durch](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr darüber erfahren möchten, finden Sie hier hilfreiche Ressourcen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Auf den meisten Systemen lässt sich das {{HTMLElement("select")}}-Element auch mit der Tastatur öffnen, um alle verfügbaren Optionen anzuzeigen – genau wie durch einen Mausklick auf das {{HTMLElement("select")}}-Element. Unter Windows geschieht dies mit <kbd>Alt</kbd> + <kbd>Down</kbd>. Wir haben das in unserem Beispiel nicht implementiert; es ließe sich jedoch leicht nach dem Vorbild des `click`-Events ergänzen.

## HTML-Struktur und (einen Teil der) Semantik festlegen

Nachdem wir die grundlegende Funktionalität des Steuerelements festgelegt haben, können wir mit der Erstellung beginnen. Zuerst definieren wir seine HTML-Struktur und Semantik. Folgendes benötigen wir, um ein {{HTMLElement("select")}}-Element nachzubauen:

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

Beachten Sie, dass Klassennamen die relevanten Teile unabhängig von den tatsächlich verwendeten HTML-Elementen kennzeichnen. So binden wir CSS und JavaScript nicht an eine starre HTML-Struktur und können die Implementierung später ändern, ohne Code zu beschädigen, der das Steuerelement verwendet. Was wäre beispielsweise, wenn Sie später ein Gegenstück zum {{HTMLElement("optgroup")}}-Element implementieren möchten?

Klassennamen allein vermitteln allerdings keine Semantik. In diesem Zustand „sieht“ eine Person mit Screenreader nur eine ungeordnete Liste. Die ARIA-Semantik ergänzen wir später.

## Erscheinungsbild mit CSS gestalten

Nachdem die Struktur steht, können wir das Steuerelement gestalten. Schließlich erstellen wir dieses benutzerdefinierte Steuerelement gerade deshalb, weil wir sein Aussehen frei bestimmen möchten. Dazu teilen wir die CSS-Arbeit in zwei Teile: Zunächst schreiben wir die erforderlichen CSS-Regeln, damit sich das Steuerelement wie ein {{HTMLElement("select")}}-Element verhält. Anschließend ergänzen wir die Gestaltungsregeln für das gewünschte Aussehen.

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

Mit der zusätzlichen Klasse `active` legen wir das Erscheinungsbild im aktiven Zustand fest. Da unser Steuerelement den Fokus erhalten kann, kombinieren wir diesen benutzerdefinierten Style mit der Pseudoklasse {{cssxref(":focus")}}, damit die Interaktion auch für Tastaturnutzende erkennbar ist.

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

Zum Ausblenden der Optionsliste benötigen wir eine weitere Klasse. Damit können wir zwischen dem aktiven und dem geöffneten Zustand unterscheiden.

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

### Gestaltung

Nachdem die grundlegende Funktionalität steht, kommt der kreative Teil. Das Folgende ist lediglich ein Beispiel für die Möglichkeiten und entspricht dem Screenshot am Anfang dieses Artikels. Experimentieren Sie ruhig selbst mit anderen Gestaltungen.

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

Für den nach unten zeigenden Pfeil benötigen wir kein zusätzliches Element. Stattdessen verwenden wir das Pseudoelement {{cssxref("::after")}}:

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

Den Optionen weisen wir eine Klasse `highlight` zu, um den Wert zu kennzeichnen, den die Person auswählen wird oder bereits ausgewählt hat.

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

So sieht das Ergebnis in den drei Zuständen aus ([den Quellcode finden Sie hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

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

## Das Steuerelement mit JavaScript funktionsfähig machen

Nachdem Entwurf und Struktur fertig sind, können wir JavaScript schreiben, damit das Steuerelement tatsächlich funktioniert.

> [!WARNING]
> Der folgende Code dient Lernzwecken und ist kein produktionsreifer Code. Verwenden Sie ihn nicht unverändert. Er enthält redundante Teile, die für den produktiven Einsatz optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, sollten wir uns eines vor Augen halten: **JavaScript im Browser ist keine verlässlich verfügbare Technik**. Benutzerdefinierte Steuerelemente sind darauf angewiesen, dass JavaScript ihre Bestandteile miteinander verbindet. Es gibt jedoch Fälle, in denen JavaScript im Browser nicht ausgeführt werden kann:

- JavaScript wurde deaktiviert. Das ist ungewöhnlich; heutzutage deaktivieren es nur wenige Menschen.
- Das Skript wurde nicht geladen. Das ist einer der häufigsten Fälle, insbesondere auf Mobilgeräten, wo die Netzwerkverbindung nicht immer zuverlässig ist.
- Das Skript enthält einen Fehler. Diese Möglichkeit sollten Sie immer berücksichtigen.
- Das Skript steht in Konflikt mit einem Skript eines Drittanbieters. Das kann bei Tracking-Skripten oder von Nutzenden eingesetzten Bookmarklets passieren.
- Das Skript steht in Konflikt mit einer Browsererweiterung wie [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/) für Firefox oder wird von ihr beeinflusst.
- Ein älterer Browser unterstützt eine benötigte Funktion nicht. Das kommt häufig vor, wenn Sie sehr neue APIs verwenden.
- Die Person interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Wegen dieser Risiken ist es wichtig zu überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir besprechen mögliche Ansätze und behandeln in unserem Beispiel die Grundlagen. Eine vollständige Erörterung aller Szenarien würde ein ganzes Buch erfordern. Denken Sie vor allem daran, dass Ihr Skript allgemein verwendbar und wiederverwendbar sein sollte.

Wenn unser JavaScript-Code im Beispiel nicht ausgeführt wird, zeigen wir stattdessen ein gewöhnliches {{HTMLElement("select")}}-Element an. Dazu nehmen wir sowohl unser Steuerelement als auch das {{HTMLElement("select")}} auf und blenden abhängig davon, ob das Skript erfolgreich läuft, eines der beiden aus. Dafür verwenden wir `class`-Werte auf dem `<body>`-Element.

Dazu sind zwei Schritte nötig:

Erstens fügen wir vor jeder Instanz unseres benutzerdefinierten Steuerelements ein reguläres {{HTMLElement("select")}}-Element ein. Dieses „zusätzliche“ select ist auch dann nützlich, wenn unser JavaScript wie vorgesehen funktioniert: Wir verwenden es, um den Wert unseres benutzerdefinierten Steuerelements zusammen mit den übrigen Formulardaten zu senden. Darauf gehen wir später genauer ein.

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

Zweitens erstellen wir zwei neue Klassen, mit denen sich das jeweils nicht benötigte Element ausblenden lässt: Läuft das Skript nicht, blenden wir das benutzerdefinierte Steuerelement visuell aus; läuft es, blenden wir das „echte“ {{HTMLElement("select")}}-Element visuell aus. Standardmäßig blendet unser HTML-Code das benutzerdefinierte Steuerelement aus.

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

Dieses CSS blendet eines der Elemente visuell aus; für Screenreader sind jedoch weiterhin beide verfügbar.

> [!NOTE]
> Diese Anleitung verwendet zunächst weiterhin die zuvor eingeführte Technik zum visuellen Ausblenden. Bevor JavaScript ausgeführt wird, ist das native select als Ausweichlösung vorgesehen. Das visuell ausgeblendete benutzerdefinierte Steuerelement kann jedoch ebenfalls für assistive Technologien zugänglich bleiben. Im abschließenden barrierefreien Beispiel unten wird das jeweils inaktive Steuerelement sowohl im Ausweich- als auch im erweiterten Zustand aus dem Accessibility Tree entfernt.

Nun benötigen wir eine JavaScript-Umschaltung, die feststellt, ob das Skript ausgeführt wird. Läuft es beim Laden der Seite, entfernen die folgenden Zeilen die Klasse `no-widget` und fügen die Klasse `widget` hinzu. Dadurch tauschen das {{HTMLElement("select")}}-Element und das benutzerdefinierte Steuerelement ihre Sichtbarkeit.

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

Die Vorbereitungen sind abgeschlossen. Nun können wir die Funktionen definieren, die unser benutzerdefiniertes select steuern.

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

Anschließend verknüpfen wir sie mit den passenden Events:

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

Damit wechselt unser Steuerelement entsprechend dem Entwurf zwischen seinen Zuständen. Sein Wert wird aber noch nicht aktualisiert. Das erledigen wir als Nächstes.

> [!NOTE]
> Die oben eingeführten Hilfsfunktionen `toggleOptList()`, `deactivateSelect()` und `activeSelect()` gehören zur frühen Lernphase dieses Artikels. Die schrittweise aufgebauten [Beispiele 3](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_3) und [4](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4) behalten diese Namen und Verhaltensweisen bewusst bei, damit jedes Beispiel auf dem vorherigen aufbaut. In der abschließenden barrierefreien Phase wird `toggleOptList()` – die Hilfsfunktion, die die Liste sowohl öffnet als auch schließt – durch vier getrennte Hilfsfunktionen ersetzt: `openOptList()` zum Öffnen, `commitActiveOption()` zum Auswählen einer Option, `closeOptList()` zum Schließen und `cancelSelection()` zum Schließen ohne Wertänderung. `activeSelect()` wird in `deactivateOtherSelects()` umbenannt, da die Funktion beim Erhalt des Fokus nur noch andere geöffnete benutzerdefinierte Steuerelemente schließen muss.

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

Als Nächstes ergänzen wir Code, der den Wert entsprechend den Eingaben aktualisiert und ihn mit den Formulardaten sendet.

Am einfachsten ist es, im Hintergrund ein natives Steuerelement zu verwenden. Es hält den Wert mithilfe der vom Browser bereitgestellten Funktionen fest, und beim Absenden des Formulars wird der Wert wie gewohnt übertragen. Es gibt keinen Grund, das Rad neu zu erfinden.

Wie bereits gezeigt, verwenden wir aus Gründen der Barrierefreiheit ohnehin ein natives select als Ausweichlösung. Dessen Wert können wir mit dem Wert unseres benutzerdefinierten Steuerelements synchronisieren:

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

Mit diesen beiden Funktionen können wir die nativen mit den benutzerdefinierten Steuerelementen verknüpfen:

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

Beachten Sie im obigen Code die Eigenschaft [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex). Durch `select.previousElementSibling.tabIndex = -1` wird das native Steuerelement aus der sequenziellen Tastaturnavigation entfernt. `select.tabIndex = 0` macht das benutzerdefinierte Steuerelement fokussierbar, sodass es bei der Bedienung mit Tastatur oder Maus den Fokus erhalten kann. Ein negativer tabindex entfernt ein Element aus der sequenziellen Tastaturnavigation; programmgesteuert kann es aber weiterhin fokussiert werden.

Damit sind wir fertig!

#### Interaktives Beispiel

Sehen Sie sich [hier den Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4) an.

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

Moment – sind wir wirklich fertig?

## Barrierefreiheit herstellen

Wir haben etwas gebaut, das funktioniert. Auch wenn es noch weit von einem vollständig ausgestatteten Auswahlfeld entfernt ist, lässt es sich gut bedienen. Bisher haben wir allerdings lediglich das DOM manipuliert. Dem Steuerelement fehlt eine echte Semantik: Es sieht zwar wie ein Auswahlfeld aus, wird von assistiven Technologien aber nicht als solches erkannt. Kurz gesagt: Dieses hübsche neue Auswahlfeld ist nicht barrierefrei!

Zum Glück gibt es eine Lösung: [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für „Accessible Rich Internet Applications“ und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die genau für unseren Anwendungsfall entwickelt wurde: Webanwendungen und benutzerdefinierte Steuerelemente barrierefrei zu machen. ARIA umfasst Attribute, die HTML um Beschreibungen von Rollen, Zuständen und Eigenschaften erweitern. Damit können wir die fehlende Semantik ergänzen. Einige dieser Attribute werden im HTML gesetzt, andere mit JavaScript laufend aktualisiert.

### Das Attribut `role`

Das wichtigste Attribut von [ARIA](/de/docs/Web/Accessibility/ARIA) ist [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques). Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) erhält einen Wert, der den Zweck eines Elements definiert. Jede Rolle hat eigene Anforderungen und Verhaltensweisen.

In unserem Beispiel verwendet das Element `<div class="select">` [`role="combobox"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role). Das zeigt an, dass das Element eine Liste von Optionen bereitstellt, die sich auf- und zuklappen lässt. Mit [`aria-haspopup="listbox"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) geben wir außerdem den Typ des Popups an. [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) verweist auf die `id` der Optionsliste.
Eine listbox ist der standardmäßige Popup-Typ einer combobox, daher ist `aria-haspopup="listbox"` hier nicht erforderlich. In diesem Beispiel geben wir es ausdrücklich an.
Da das initialisierte Formular mehrere benutzerdefinierte Steuerelemente enthalten kann, tragen wir diese IDs nicht fest im HTML ein: Doppelte IDs würden die ARIA-Referenzen ungültig machen. Stattdessen erzeugt JavaScript bei der Initialisierung für die listbox jedes Steuerelements und für jede ihrer Optionen eine eindeutige `id`. Anschließend wird `aria-controls` so gesetzt, dass es auf die erzeugte `id` der listbox verweist.

Die combobox und die listbox sind Geschwisterelemente innerhalb eines neutralen Wrappers. Der Wrapper hat keine eigene ARIA-Rolle; das Attribut `aria-controls` der combobox stellt die Verbindung zu ihrer listbox her.

Das `<ul>`-Element verwendet [`role="listbox"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role). Dadurch erkennen assistive Technologien, dass es sich um eine Liste auswählbarer Einträge handelt. Jedes `<li>`-Element verwendet [`role="option"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role).

Sowohl das native `<select>` als auch das benutzerdefinierte `<div>` erhalten ein Attribut [`aria-label="Fruit"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), damit assistive Technologien einen aussagekräftigen Namen für das Steuerelement ansagen können. Auch die Popup-listbox verwendet `aria-label="Fruit"` und erhält damit den für die Rolle `listbox` erforderlichen zugänglichen Namen.

Das native `<select>` behält seinen zugänglichen Namen als Ausweichlösung für den Fall, dass JavaScript nicht verfügbar ist. Wenn JavaScript das benutzerdefinierte Widget aktiviert, entfernt das unten gezeigte abschließende CSS das native Steuerelement aus der Darstellung, der Fokusnavigation und dem Accessibility Tree. Die benutzerdefinierte combobox bleibt dann als zugängliches Steuerelement verfügbar.

Zur Unterstützung dieser Rollen ändern wir unser HTML wie folgt:

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
> In dieser Anleitung behalten wir sowohl das Attribut `role` als auch das Attribut `class` bei: `role` liefert assistiven Technologien die Semantik, während CSS und JavaScript `class` verwenden. In einer allgemeineren Implementierung könnten Sie stattdessen Selektoren wie `[role="option"]` verwenden, sofern Sie CSS und JavaScript entsprechend anpassen.

In den früheren Phasen wird das inaktive benutzerdefinierte Steuerelement aus dem sichtbaren Bereich verschoben. Zu diesem Zeitpunkt hat es noch nicht die endgültige ARIA-Widget-Semantik; wenn es zugänglich bleibt, entsteht daher kein zweites benanntes Formularsteuerelement. In der abschließenden barrierefreien Version besitzt das benutzerdefinierte Steuerelement dagegen combobox-Semantik und einen zugänglichen Namen. Bliebe es vor der Ausführung von JavaScript im Accessibility Tree, wären sowohl das native `<select>` als auch eine inaktive benutzerdefinierte combobox zugänglich. Um diese Doppelung zu vermeiden, blendet das abschließende Beispiel das jeweils inaktive Steuerelement mit `display: none` aus. Dabei wird der Wrapper des benutzerdefinierten Widgets angesprochen, nicht nur die combobox, sodass die zugehörige Popup-listbox ebenfalls ausgeblendet wird:

```css
.widget select,
.no-widget .select-wrapper {
  display: none;
}
```

Der Wrapper dient außerdem als Positionierungskontext für die Popup-listbox, die absolut relativ zu ihm positioniert wird:

```css
.select-wrapper {
  position: relative;
  display: inline-block;
}
```

Das native `<select>` bleibt mit dem Formular verknüpft. `updateValue()` hält seinen ausgewählten Wert für das Absenden des Formulars synchron.

### Die Attribute `aria-selected` und `aria-activedescendant`

Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) allein reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) stellt außerdem zahlreiche Attribute für Zustände und Eigenschaften bereit, damit assistive Technologien Ihr Steuerelement verstehen können.

Das Attribut `aria-selected` kennzeichnet die Option, die als aktuelle Auswahl gewählt wurde. So können assistive Technologien den ausgewählten Wert ansagen. Das Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der combobox kennzeichnet die derzeit aktive und visuell hervorgehobene Option – allerdings nur, solange die listbox geöffnet ist. Da beide Attribute auf eine bestimmte Option verweisen, hat jede Option eine eindeutige `id`.

Die folgenden Funktionen halten diese Zustände gemeinsam synchron:

- `openOptList(select, activeIndex)` öffnet die listbox und legt dabei die aktive Option fest: Die Funktion setzt `aria-expanded` auf `"true"`, entfernt die Klasse `hidden`, fügt die Klasse `active` hinzu und stimmt mithilfe von `highlightOption()` die visuelle Hervorhebung und `aria-activedescendant` auf die Option am `activeIndex` ab.
- `commitActiveOption(select)` wählt die derzeit aktive Option durch einen Aufruf von `updateValue()`. Ist die listbox geschlossen oder wird die aktive Option nicht gefunden, kehrt die Funktion zurück, ohne etwas zu ändern. Sie schließt die listbox nicht.
- `closeOptList(select)` schließt die listbox: Die Funktion stellt mit `highlightOption()` die visuelle Hervorhebung der gewählten Option wieder her, blendet die listbox aus, entfernt die Klasse `active`, setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`.
- `cancelSelection(select)` behandelt Escape: Die Funktion lässt den gewählten Wert unverändert und schließt die listbox über `closeOptList()`. Dabei wird vor dem Zuklappen die gewählte Option wieder als aktive Option hervorgehoben.
- `highlightOption(select, option)` aktualisiert die visuelle Hervorhebung der übergebenen aktiven Option und – solange die listbox geöffnet ist – auch `aria-activedescendant`. Die Funktion ändert weder `aria-selected` noch den `selectedIndex` des nativen `<select>`; diese Werte werden nur durch `updateValue()` geändert.
- `updateValue()` ist die einzige Stelle, an der sich die gewählte Option ändert: Die Funktion aktualisiert `aria-selected`, den nativen `selectedIndex`, den sichtbaren Wert, die visuelle Hervorhebung und – solange die listbox geöffnet ist – `aria-activedescendant`.

Ist die listbox geöffnet, bewegen die Pfeiltasten über `highlightOption()` die aktive Hervorhebung und `aria-activedescendant` durch die Liste. Sie rufen niemals `updateValue()` auf und ändern daher weder `aria-selected` noch den Wert des nativen `<select>`. Wenn sich der Mauszeiger über einer Option befindet, ändert sich durch CSS nur deren Aussehen. `aria-activedescendant`, `aria-selected`, der `selectedIndex` des nativen `<select>` und der gewählte Wert bleiben unverändert. Eine einzige CSS-Regel sorgt für dieses Hover-Feedback bei Optionen, die gerade nicht aktiv sind:

```css
.select-wrapper .option:not(.highlight):hover {
  background-color: rgb(0 0 0 / 10%);
}
```

Den Code finden Sie unten unter [Den geöffneten Zustand aktualisieren](#den_geöffneten_zustand_aktualisieren).

`updateValue()` ist die einzige Stelle, an der sich die gewählte Option ändert:

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

Es mag einfacher erscheinen, den Screenreader auf das außerhalb des sichtbaren Bereichs positionierte select fokussieren zu lassen und unser gestaltetes Steuerelement zu ignorieren. Sie sollten sich aber nicht darauf verlassen, dass ein solches natives select das einzige zugängliche Steuerelement ist. Screenreader werden nicht nur von blinden Menschen genutzt, sondern auch von Menschen mit eingeschränktem oder sogar uneingeschränktem Sehvermögen. Deshalb ist es wichtig, die ARIA-Attribute mit dem sichtbaren Zustand zu synchronisieren.

### Die aktive Option sichtbar halten

Eine listbox mit vielen Optionen kann höher sein als der verfügbare Platz. Die aktive Option sollte daher an zwei Stellen sichtbar bleiben: innerhalb des scrollbaren Bereichs der listbox und auf der Seite. Dafür sorgen zwei Hilfsfunktionen:

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

`scrollOptionIntoListbox()` verschiebt die Scrollposition der listbox so, dass die übergebene Option darin sichtbar bleibt. Die Funktion wird bei jedem Öffnen der listbox ausgeführt – unabhängig davon, ob dies per Tastatur oder Zeigegerät geschieht. So ist die beim Öffnen aktive Option immer sichtbar. `keepOptionVisible()` ruft diese Funktion auf und scrollt zusätzlich die Seite, allerdings nur, wenn die Option nicht bereits im sichtbaren Bereich liegt. Die Funktion wird verwendet, wenn die listbox schon geöffnet ist und die aktive Option per Tastatur verschoben wird. So bleibt die Option sichtbar, auf die `aria-activedescendant` verweist.

### Den geöffneten Zustand aktualisieren

Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) gibt an, ob die Optionsliste gerade geöffnet oder geschlossen ist. Statt einer Funktion, die beides übernimmt, ändern getrennte Hilfsfunktionen `openOptList()` und `closeOptList()` den Popup-Zustand. `openOptList()` öffnet die Liste direkt, setzt `aria-expanded` auf `"true"` und stimmt mit `highlightOption()` die visuelle Hervorhebung und `aria-activedescendant` auf die Option am übergebenen `activeIndex` ab. `closeOptList()` setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`. Vor dem Öffnen prüft `openOptList()` die angeforderte Option. Eine geöffnete listbox hat somit immer eine aktive Option:

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

Nicht jede Art, die Liste zu schließen, bewirkt dasselbe. Beim Drücken von <kbd>Enter</kbd>, <kbd>Space</kbd> oder <kbd>Tab</kbd>, beim Verlassen des Steuerelements mit dem Fokus oder beim Klicken auf eine Option wird zuerst mit `commitActiveOption()` die aktive Option gewählt und anschließend mit `closeOptList()` die Liste geschlossen. Ist die listbox geöffnet, ruft <kbd>Escape</kbd> `cancelSelection()` auf. Dadurch wird die Liste geschlossen, ohne den Wert zu ändern. Ein Klick auf die combobox bei geöffneter Liste ruft dagegen nur `closeOptList()` auf. In allen Fällen stellt `closeOptList()` die gewählte Option als aktive Hervorhebung wieder her, blendet die listbox durch Hinzufügen der Klasse `hidden` aus, entfernt die Klasse `active`, setzt `aria-expanded` auf `"false"` und entfernt `aria-activedescendant`. So verweist die zugeklappte combobox nicht auf eine Option in einer ausgeblendeten listbox.

Die Klasse `active` entspricht dem geöffneten Zustand: `openOptList()` setzt sie beim Öffnen, `closeOptList()` entfernt sie beim Schließen. Die begleitende Hilfsfunktion `deactivateOtherSelects()` – die umbenannte Nachfolgerin der früheren Funktion `activeSelect()` – erfüllt weiterhin denselben Zweck wie in der frühen Lernphase: Wenn ein Steuerelement den Fokus erhält, schließt sie alle anderen geöffneten benutzerdefinierten Steuerelemente auf der Seite, indem sie für jedes `closeOptList()` aufruft:

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

Damit das Steuerelement per Tastatur zugänglich ist, muss es sich mit der Tastatur bedienen lassen. Wir reagieren auf `keydown`-Events und verarbeiten mit einer `switch`-Anweisung die folgenden Tasten:

- <kbd>ArrowDown</kbd> – bei zugeklappter Liste die listbox mit der aktuell gewählten Option als aktiver Option öffnen; bei geöffneter Liste die aktive Option zur nächsten Option verschieben, ohne den gewählten Wert zu ändern
- <kbd>ArrowUp</kbd> – bei zugeklappter Liste die listbox mit der aktuell gewählten Option als aktiver Option öffnen; bei geöffneter Liste die aktive Option zur vorherigen Option verschieben, ohne den gewählten Wert zu ändern
- <kbd>Home</kbd> – bei zugeklappter Liste die listbox mit der ersten Option als aktiver Option öffnen; bei geöffneter Liste die aktive Option zur ersten Option verschieben, ohne den gewählten Wert zu ändern
- <kbd>End</kbd> – bei zugeklappter Liste die listbox mit der letzten Option als aktiver Option öffnen; bei geöffneter Liste die aktive Option zur letzten Option verschieben, ohne den gewählten Wert zu ändern
- <kbd>Enter</kbd> / <kbd>Space</kbd> – bei zugeklappter Liste die listbox mit der aktuell gewählten Option als aktiver Option öffnen; bei geöffneter Liste die aktive Option wählen und die Liste schließen
- <kbd>Tab</kbd> – bei geöffneter Liste die aktive Option wählen und die Liste schließen; andernfalls den Fokus wie gewohnt weiterbewegen
- <kbd>Escape</kbd> – bei geöffneter Liste den zuvor gewählten Wert beibehalten, den aktiven Zustand und die Hervorhebung auf die gewählte Option zurücksetzen und die Liste schließen; bei zugeklappter Liste die Taste der Seite überlassen

Die Navigationstasten (<kbd>ArrowDown</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>) und die Tasten zur Auswahl einer Option (<kbd>Enter</kbd>, <kbd>Space</kbd>) rufen `event.preventDefault()` auf. So verhindern sie das standardmäßige Scrollen oder Absenden eines Formulars durch den Browser. Ist das benutzerdefinierte select zugeklappt, öffnen diese Tasten die listbox über `openOptList()`, ohne den gewählten Wert zu ändern. Nach dem Öffnen beginnen <kbd>ArrowDown</kbd> und <kbd>ArrowUp</kbd> bei der aktuell hervorgehobenen aktiven Option statt bei der gewählten Option. Die Tastaturnavigation setzt damit bei der aktiven Option fort, die beim Öffnen oder durch eine vorherige Tastaturnavigation festgelegt wurde. Eine kleine Hilfsfunktion, `getActiveIndex()`, ermittelt den Startindex. Ist die listbox zugeklappt oder fehlt der aktive Nachfahre beziehungsweise passt er nicht mehr zu einer Option, verwendet sie stattdessen die von `getIndex()` zurückgegebene gewählte Option:

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

Das oben unterstützte Navigations- und Auswahlverhalten orientiert sich am [WAI-ARIA-APG-Beispiel für eine Select-Only-Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/): Ein Popup öffnet sich mit einer gewählten Startoption, Navigationstasten verschieben die aktive Option ohne Änderung des gewählten Werts und Bestätigungstasten wählen die aktive Option und schließen das Popup. Diese Anleitung konzentriert sich auf diese grundlegenden Interaktionen. Erweiterte Interaktionen wie die Auswahl durch Tippen, <kbd>PageUp</kbd>/<kbd>PageDown</kbd> und <kbd>Alt</kbd>+<kbd>Arrow</kbd> werden in der gezeigten Implementierung nicht behandelt.

Der `keydown`-Handler ermittelt seinen Startindex mithilfe der obigen Hilfsfunktion. Bei geöffneter listbox verschieben die Pfeiltasten die aktive Option ausschließlich über `highlightOption()`. Sie rufen niemals `updateValue()` auf und ändern somit nicht den gewählten Wert. Auf jeden Navigationsschritt folgt `keepOptionVisible()`, damit die Option, auf die `aria-activedescendant` verweist, innerhalb der listbox und auf der Seite sichtbar bleibt:

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

Eine sorgfältige Fokusverwaltung sorgt dafür, dass sich die Optionsliste vorhersehbar öffnet und schließt. Erhält das benutzerdefinierte Steuerelement den Fokus, deaktivieren wir alle anderen geöffneten Auswahlfelder. Verliert es den Fokus, wählen wir bei geöffneter listbox die aktive Option und schließen die Liste. Ist die listbox bereits geschlossen, bleibt der Wert unverändert.

Bei der Mausbedienung ändert das Bewegen des Zeigers über eine Option nur deren Aussehen per CSS (`.select-wrapper .option:not(.highlight):hover`), nicht aber die aktive Option oder den gewählten Wert. Für jede Option registrieren wir einen `mousedown`-Handler, der `event.preventDefault()` aufruft. Dadurch löst der Klick kein `blur`-Event auf dem Container aus. Der `click`-Handler jeder Option ruft ausdrücklich `highlightOption()` für die angeklickte Option auf und macht sie damit aktiv. Anschließend ruft er `commitActiveOption()` und `closeOptList()` auf und setzt den Fokus wieder auf das Steuerelement. Da die listbox ein Geschwisterelement der combobox und kein untergeordnetes Element ist, erreicht ein Klick auf eine Option niemals den `click`-Handler der combobox. Der Handler muss die Weitergabe des Events daher nicht unterbinden. Da beim Verlassen des Steuerelements die aktuelle aktive Option gewählt wird, führt ein Fokuswechsel nach bloßem Hover zur Auswahl der zuvor aktiven Option – also der beim Öffnen oder durch Tastaturnavigation festgelegten Option –, nicht der Option unter dem Mauszeiger:

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

Das Öffnen per Zeigegerät folgt demselben Prinzip für den Startpunkt wie <kbd>ArrowDown</kbd> und <kbd>ArrowUp</kbd>: Solange die listbox geschlossen ist, navigiert keine dieser Interaktionen durch die Optionen. Sie öffnen die listbox jeweils mit der aktuell gewählten Option als aktiver Option.

Das native `<select>`-Element wird durch `nativeWidget.selectedIndex = index` innerhalb von `updateValue()` synchron gehalten. So bleiben die Formulardaten auch bei Verwendung des benutzerdefinierten Steuerelements korrekt.

Unten sehen Sie das Endergebnis all dieser Änderungen. Am besten probieren Sie es mit einer assistiven Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) aus.

Das Formular wechselt erst in den Zustand `widget`, nachdem alle benutzerdefinierten Auswahlfelder initialisiert wurden. Wird die synchrone Initialisierung vorher unterbrochen, bleiben die nativen Steuerelemente durch den ursprünglichen Zustand `no-widget` verfügbar.

#### Interaktives Beispiel

Sehen Sie sich [hier den vollständigen Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5) an.

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

Der Code dieses Beispiels lässt sich noch verbessern, um ihn allgemeiner verwendbar und wiederverwendbar zu machen. Das erste Argument aller Funktionen ist identisch – sie benötigen also denselben Kontext. Versuchen Sie als Übung, ein Objekt zu erstellen, über das sie diesen Kontext gemeinsam nutzen.

## Ein alternativer Ansatz: Radio-Buttons verwenden

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht-semantischem HTML, CSS und JavaScript nachgebaut. Unser benutzerdefiniertes Widget wählt eine Option aus einer begrenzten Anzahl aus. Dieselbe Funktionalität bietet eine Gruppe von {{htmlelement('input/radio', 'radio')}}-Buttons.

Wir könnten das Steuerelement daher auch mit Radio-Buttons nachbauen. Sehen wir uns diese Möglichkeit an.

Als Ausgangspunkt dient eine vollständig semantische, barrierefreie ungeordnete Liste von {{htmlelement('input/radio','radio')}}-Buttons mit jeweils zugehörigem {{htmlelement('label')}}. Die gesamte Gruppe beschriften wir mit einem semantisch passenden Paar aus {{htmlelement('fieldset')}} und {{htmlelement('legend')}}.

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

Wir gestalten die Radio-Button-Liste ein wenig – nicht das legend/fieldset –, sodass sie dem früheren Beispiel etwas ähnelt. Das zeigt, dass auch dieser Ansatz möglich ist:

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

Ohne JavaScript und mit nur wenig CSS können wir die Radio-Buttons so gestalten, dass nur das ausgewählte Element angezeigt wird. Befindet sich der Fokus innerhalb des `<ul>` im `<fieldset>`, öffnet sich die Liste. Mit den Pfeiltasten nach oben und unten sowie nach links und rechts lassen sich vorherige und nächste Elemente auswählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Bis zu einem gewissen Grad funktioniert das ohne JavaScript. Wir haben ein Steuerelement erstellt, das unserem benutzerdefinierten Widget ähnelt und auch dann funktioniert, wenn JavaScript ausfällt. Klingt nach einer großartigen Lösung, oder? Nicht ganz. Mit der Tastatur funktioniert es, aber bei Mausklicks verhält es sich nicht wie erwartet. Es ist wahrscheinlich sinnvoller, Webstandards als Grundlage für benutzerdefinierte Steuerelemente zu verwenden, statt sich auf Frameworks zu verlassen, die Elemente ohne native Semantik erzeugen. Allerdings bietet unser Steuerelement nicht dieselbe Funktionalität, die ein `<select>` von Haus aus hat.

Positiv ist, dass dieses Steuerelement für Screenreader vollständig zugänglich und per Tastatur vollständig navigierbar ist. Es ist jedoch kein Ersatz für ein {{htmlelement('select')}}. Einige Funktionen unterscheiden sich oder fehlen. Beispielsweise navigieren alle vier Pfeiltasten durch die Optionen. Drückt die Person beim letzten Button die Pfeiltaste nach unten, springt die Auswahl allerdings zum ersten Button. Anders als bei einem `<select>` hält die Navigation am Anfang und Ende der Optionsliste nicht an.

Die Ergänzung dieser fehlenden Funktionalität überlassen wir Ihnen als Übung.

## Fazit

In diesem Artikel haben wir ein benutzerdefiniertes Formularsteuerelement erstellt – der Aufwand dafür ist jedoch erheblich. Bevor Sie ein eigenes Steuerelement entwickeln, prüfen Sie, ob vorhandene HTML-Steuerelemente Ihre Anforderungen erfüllen. Wenn Sie tatsächlich ein benutzerdefiniertes Steuerelement benötigen, ist es oft einfacher, vorhandene Elemente anzupassen oder eine Bibliothek eines Drittanbieters zu verwenden, als es von Grund auf selbst zu erstellen. Ein benutzbares und barrierefreies Formularsteuerelement zu entwickeln ist schwieriger, als es aussieht.

Bevor Sie selbst mit der Programmierung beginnen, sollten Sie diese Bibliotheken in Betracht ziehen:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)
