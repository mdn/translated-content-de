---
title: Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente
short-title: Benutzerdefinierte Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

In manchen Fällen reichen die verfügbaren nativen HTML-Formularsteuerelemente scheinbar nicht aus. Wenn Sie beispielsweise für Steuerelemente wie das {{HTMLElement("select")}}-Element [erweiterte Gestaltungsmöglichkeiten](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) benötigen oder ein eigenes Verhalten bereitstellen möchten, können Sie eigene Steuerelemente erstellen.

In diesem Artikel besprechen wir, wie Sie ein benutzerdefiniertes Steuerelement erstellen. Als Beispiel bauen wir das {{HTMLElement("select")}}-Element nach. Außerdem erörtern wir, wie, wann und ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen, und was zu beachten ist, wenn dies erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns darauf, das Steuerelement zu erstellen, nicht darauf, den Code allgemein einsetzbar und wiederverwendbar zu machen. Dafür wären nicht triviale JavaScript- und DOM-Manipulationen in einem unbekannten Kontext nötig, die den Rahmen dieses Artikels sprengen würden.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie genau festlegen, was Sie erreichen möchten. Das spart Ihnen wertvolle Zeit. Besonders wichtig ist es, alle Zustände Ihres Steuerelements klar zu definieren. Dafür empfiehlt es sich, mit einem vorhandenen Steuerelement zu beginnen, dessen Zustände und Verhalten bekannt sind, und diese so weit wie möglich nachzubilden.

In unserem Beispiel bauen wir das {{HTMLElement("select")}}-Element nach. Dieses Ergebnis möchten wir erreichen:

![Die drei Zustände eines Auswahlfelds](custom-select.png)

Der Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links), den aktiven Zustand (in der Mitte) und den geöffneten Zustand (rechts).

Da wir ein natives HTML-Element nachbilden, sollte unser Steuerelement dasselbe Verhalten und dieselbe Semantik aufweisen. Es muss sich wie jedes native Steuerelement sowohl mit der Maus als auch mit der Tastatur bedienen lassen und für Screenreader verständlich sein. Definieren wir zunächst, wie das Steuerelement die einzelnen Zustände erreicht:

**Das Steuerelement befindet sich im normalen Zustand, wenn:**

- die Seite geladen wird.
- es aktiv war und die Person auf eine Stelle außerhalb des Steuerelements klickt.
- es aktiv war und die Person den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt, beispielsweise mit der <kbd>Tab</kbd>-Taste.

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- die Person darauf klickt oder es auf einem Touchscreen berührt.
- die Person die Tabulatortaste drückt und das Steuerelement den Fokus erhält.
- es geöffnet war und die Person darauf klickt.

**Das Steuerelement befindet sich im geöffneten Zustand, wenn:**

- es sich in einem anderen Zustand als dem geöffneten befindet und die Person darauf klickt.

Nachdem feststeht, wie die Zustände wechseln, müssen wir definieren, wie sich der Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- die Person bei geöffnetem Steuerelement auf eine Option klickt.
- die Person bei aktivem Steuerelement die Pfeiltaste nach oben oder unten drückt.

**Der Wert ändert sich nicht, wenn:**

- die Person die Pfeiltaste nach oben drückt, während die erste Option ausgewählt ist.
- die Person die Pfeiltaste nach unten drückt, während die letzte Option ausgewählt ist.

Legen wir abschließend fest, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn sich der Mauszeiger über einer Option befindet, wird diese hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren normalen Zustand zurück.

Für unser Beispiel belassen wir es dabei. Wenn Sie aufmerksam gelesen haben, werden Sie jedoch feststellen, dass einige Verhaltensweisen fehlen. Was passiert beispielsweise, wenn die Person bei geöffnetem Steuerelement die Tabulatortaste drückt? Die Antwort lautet: _nichts_. Das richtige Verhalten mag offensichtlich erscheinen. Da es aber nicht in unseren Anforderungen definiert ist, kann es leicht übersehen werden. Das gilt besonders in Teams, in denen andere Personen das Verhalten des Steuerelements entwerfen als diejenigen, die es implementieren.

Ein weiteres Beispiel: Was passiert, wenn die Person bei geöffnetem Steuerelement die Pfeiltaste nach oben oder unten drückt? Das ist etwas schwieriger zu beantworten. Wenn Sie den aktiven und den geöffneten Zustand als vollständig getrennt betrachten, lautet die Antwort wieder: „Es passiert nichts“, denn für den geöffneten Zustand haben wir keine Tastaturinteraktionen definiert. Wenn Sie dagegen davon ausgehen, dass sich der aktive und der geöffnete Zustand teilweise überschneiden, ändert sich möglicherweise der Wert. Die entsprechende Option wird aber nicht hervorgehoben, denn auch für die Optionen im geöffneten Zustand haben wir keine Tastaturinteraktionen definiert. Wir haben lediglich festgelegt, was beim Öffnen des Steuerelements passiert, nicht aber, was danach geschieht.

Wir müssen noch weiterdenken: Was ist mit der Esc-Taste? Ein Druck auf <kbd>Esc</kbd> schließt ein geöffnetes Auswahlfeld. Denken Sie daran: Wenn Sie dieselbe Funktionalität wie das vorhandene native {{htmlelement('select')}}-Element bereitstellen möchten, muss sich Ihr Steuerelement für alle Personen genauso verhalten – unabhängig davon, ob sie eine Tastatur, eine Maus, einen Touchscreen, einen Screenreader oder ein anderes Eingabegerät verwenden.

In unserem Beispiel sind die fehlenden Anforderungen offensichtlich, sodass wir sie berücksichtigen können. Bei neuartigen Steuerelementen kann dies jedoch zu einem echten Problem werden. Für standardisierte Elemente wie {{htmlelement('select')}} haben die Verfasser der Spezifikation sehr viel Zeit darauf verwendet, alle Interaktionen für jeden Anwendungsfall und jedes Eingabegerät festzulegen. Neue Steuerelemente zu entwickeln ist nicht so einfach, insbesondere wenn es noch kein Vorbild gibt und deshalb niemand genau weiß, welches Verhalten und welche Interaktionen zu erwarten sind. Das Auswahlfeld gibt es immerhin schon, sodass wir wissen, wie es sich verhalten sollte.

Neue Interaktionen zu entwickeln, ist im Allgemeinen nur für sehr große Unternehmen eine Option, deren Reichweite ausreicht, damit eine von ihnen eingeführte Interaktion zum Standard werden kann. Apple führte beispielsweise 2001 mit dem iPod das Scrollrad ein. Das Unternehmen hatte genügend Marktanteile, um eine völlig neue Art der Gerätebedienung erfolgreich einzuführen – etwas, das den meisten Geräteherstellern nicht möglich ist.

Erfinden Sie nach Möglichkeit keine neuen Benutzerinteraktionen. Wenn Sie dennoch eine Interaktion hinzufügen, sollten Sie sich in der Entwurfsphase ausreichend Zeit dafür nehmen. Wenn Sie ein Verhalten unzureichend definieren oder vergessen, es festzulegen, wird es sehr schwierig, es später zu ändern, sobald sich die Nutzenden daran gewöhnt haben. Holen Sie im Zweifelsfall die Meinung anderer ein und zögern Sie nicht, bei entsprechendem Budget [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird UX-Design genannt. Wenn Sie mehr darüber erfahren möchten, sehen Sie sich diese hilfreichen Ressourcen an:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Auf den meisten Systemen lässt sich das {{HTMLElement("select")}}-Element auch mit der Tastatur öffnen, um alle verfügbaren Optionen anzuzeigen. Das entspricht einem Mausklick auf das {{HTMLElement("select")}}-Element. Unter Windows geht dies mit <kbd>Alt</kbd> + <kbd>Down</kbd>. In unserem Beispiel haben wir das nicht implementiert. Es wäre jedoch einfach, da der Mechanismus für das `click`-Ereignis bereits vorhanden ist.

## HTML-Struktur und grundlegende Semantik definieren

Nachdem die grundlegende Funktionalität des Steuerelements feststeht, können wir mit seiner Umsetzung beginnen. Zuerst definieren wir seine HTML-Struktur und geben ihm eine grundlegende Semantik. Um ein {{HTMLElement("select")}}-Element nachzubauen, benötigen wir Folgendes:

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

Beachten Sie die Verwendung von Klassennamen: Sie kennzeichnen alle relevanten Teile unabhängig von den tatsächlich verwendeten HTML-Elementen. Das ist wichtig, damit wir CSS und JavaScript nicht an eine starre HTML-Struktur binden. So können wir die Implementierung später ändern, ohne Code zu beschädigen, der das Steuerelement verwendet. Was wäre beispielsweise, wenn Sie später ein Äquivalent zum {{HTMLElement("optgroup")}}-Element implementieren möchten?

Klassennamen haben allerdings keine semantische Bedeutung. In diesem Zustand „sieht“ eine Person mit Screenreader nur eine ungeordnete Liste. Die ARIA-Semantik ergänzen wir später.

## Das Erscheinungsbild mit CSS gestalten

Da die Struktur nun steht, können wir das Steuerelement gestalten. Schließlich soll sich das benutzerdefinierte Steuerelement genau nach unseren Vorstellungen gestalten lassen. Wir teilen die CSS-Arbeit daher in zwei Teile auf: Zuerst erstellen wir die Regeln, die unbedingt erforderlich sind, damit sich unser Steuerelement wie ein {{HTMLElement("select")}}-Element verhält. Danach fügen wir die Gestaltungsregeln hinzu, die ihm das gewünschte Aussehen geben.

### Erforderliche Gestaltungsregeln

Die erforderlichen Gestaltungsregeln behandeln die drei Zustände unseres Steuerelements.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Erscheinungsbild im aktiven Zustand festzulegen. Da unser Steuerelement den Fokus erhalten kann, ergänzen wir diesen benutzerdefinierten Stil um die Pseudoklasse {{cssxref(":focus")}}. So stellen wir sicher, dass sich beide gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
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

Wir benötigen eine weitere Klasse für den Fall, dass die Optionsliste ausgeblendet ist. Damit können wir die Unterschiede zwischen dem aktiven und dem geöffneten Zustand behandeln, die nicht vollständig übereinstimmen.

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

Nachdem die grundlegende Funktionalität steht, kann der kreative Teil beginnen. Das Folgende ist nur ein Beispiel dafür, was möglich ist, und entspricht dem Screenshot am Anfang dieses Artikels. Experimentieren Sie gern, um eine eigene Gestaltung zu entwickeln.

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

Für den Abwärtspfeil benötigen wir kein zusätzliches Element. Stattdessen verwenden wir das Pseudoelement {{cssxref("::after")}}. Er ließe sich auch als einfaches Hintergrundbild für die Klasse `select` umsetzen.

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

Für die Optionen benötigen wir eine Klasse `highlight`, um den Wert zu kennzeichnen, den die Person auswählen wird oder bereits ausgewählt hat.

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

Hier sehen Sie das Ergebnis in den drei Zuständen ([den Quellcode finden Sie hier](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

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

Da Design und Struktur nun fertig sind, können wir den JavaScript-Code schreiben, der das Steuerelement funktionsfähig macht.

> [!WARNING]
> Der folgende Code dient zu Lernzwecken, ist nicht für den produktiven Einsatz gedacht und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher noch funktioniert er in älteren Browsern. Außerdem enthält er redundante Teile, die in produktivem Code optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist Folgendes wichtig: **JavaScript im Browser ist keine zuverlässige Technologie**. Benutzerdefinierte Steuerelemente sind darauf angewiesen, dass JavaScript alle Teile miteinander verbindet. Es gibt jedoch Situationen, in denen JavaScript im Browser nicht ausgeführt werden kann:

- Die Person hat JavaScript deaktiviert: Das ist ungewöhnlich; heutzutage deaktivieren nur noch wenige Menschen JavaScript.
- Das Skript wurde nicht geladen: Das kommt häufig vor, besonders auf Mobilgeräten, wo Netzwerkverbindungen nicht immer zuverlässig sind.
- Das Skript enthält Fehler: Diese Möglichkeit sollten Sie immer berücksichtigen.
- Das Skript steht im Konflikt mit einem Skript eines Drittanbieters: Das kann bei Tracking-Skripten oder Bookmarklets vorkommen, die die Person verwendet.
- Das Skript steht im Konflikt mit einer Browsererweiterung oder wird von ihr beeinflusst, beispielsweise von der Firefox-Erweiterung [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/).
- Die Person verwendet einen älteren Browser, der eine benötigte Funktion nicht unterstützt: Das kommt häufig vor, wenn Sie hochmoderne APIs verwenden.
- Die Person interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Angesichts dieser Risiken sollten Sie sorgfältig überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir besprechen mögliche Vorgehensweisen und behandeln in unserem Beispiel die Grundlagen. Eine umfassende Erörterung aller Szenarien würde den Rahmen eines Buches erfordern. Denken Sie vor allem daran, dass Ihr Skript allgemein einsetzbar und wiederverwendbar sein sollte.

Wenn unser JavaScript-Code nicht ausgeführt wird, zeigen wir in unserem Beispiel stattdessen ein gewöhnliches {{HTMLElement("select")}}-Element an. Wir binden sowohl unser Steuerelement als auch das {{HTMLElement("select")}}-Element ein. Welches davon angezeigt wird, hängt von der Klasse des `body`-Elements ab. Das Skript, das unser Steuerelement funktionsfähig macht, aktualisiert diese Klasse, sobald es erfolgreich geladen wurde.

Dafür benötigen wir zwei Dinge:

Zuerst fügen wir vor jeder Instanz unseres benutzerdefinierten Steuerelements ein reguläres {{HTMLElement("select")}}-Element ein. Dieses „zusätzliche“ Auswahlfeld ist auch dann nützlich, wenn unser JavaScript wie erhofft funktioniert: Wir verwenden es, um die Daten unseres benutzerdefinierten Steuerelements zusammen mit den übrigen Formulardaten zu senden. Darauf gehen wir später näher ein.

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

Zweitens benötigen wir zwei neue Klassen, um das jeweils nicht benötigte Element auszublenden: Wenn unser Skript nicht läuft, blenden wir das benutzerdefinierte Steuerelement visuell aus. Läuft es, blenden wir das „echte“ {{HTMLElement("select")}}-Element aus. Beachten Sie, dass unser HTML-Code das benutzerdefinierte Steuerelement standardmäßig ausblendet.

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

Dieses CSS blendet eines der Elemente visuell aus, für Screenreader bleibt es jedoch verfügbar.

Nun benötigen wir einen JavaScript-Schalter, der feststellt, ob das Skript läuft. Dafür genügen wenige Zeilen: Wenn unser Skript beim Laden der Seite ausgeführt wird, entfernt es die Klasse `no-widget` und fügt die Klasse `widget` hinzu. Dadurch wird die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements vertauscht.

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
> Wenn Ihr Code tatsächlich allgemein einsetzbar und wiederverwendbar sein soll, ist es wesentlich besser, statt zwischen Klassen zu wechseln nur die Klasse `widget` hinzuzufügen, um die {{HTMLElement("select")}}-Elemente auszublenden. Anschließend fügen Sie den DOM-Baum für das benutzerdefinierte Steuerelement dynamisch hinter jedem {{HTMLElement("select")}}-Element auf der Seite ein.

### Die Arbeit vereinfachen

Für den folgenden Code verwenden wir die standardmäßigen JavaScript- und DOM-APIs. Wir planen, diese Funktionen einzusetzen:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Ereignis-Callbacks erstellen

Die Grundlage ist geschaffen. Nun können wir alle Funktionen definieren, die aufgerufen werden, wenn eine Person mit unserem Steuerelement interagiert.

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

Diese Funktionen benötigen Sie, um die verschiedenen Zustände des benutzerdefinierten Steuerelements zu behandeln.

Als Nächstes verknüpfen wir die Funktionen mit den entsprechenden Ereignissen:

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

  // Lose focus if the user hits `esc`
  select.addEventListener("keyup", (event) => {
    // deactivate on keyup of `esc`
    if (event.key === "Escape") {
      deactivateSelect(select);
    }
  });
});
```

Jetzt wechselt unser Steuerelement seinen Zustand wie vorgesehen. Sein Wert wird allerdings noch nicht aktualisiert. Darum kümmern wir uns als Nächstes.

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

### Den Wert des Steuerelements behandeln

Da unser Steuerelement nun funktioniert, müssen wir Code hinzufügen, der seinen Wert entsprechend den Eingaben aktualisiert und dafür sorgt, dass der Wert mit den Formulardaten gesendet werden kann.

Am einfachsten lässt sich das mit einem nativen Steuerelement im Hintergrund erreichen. Ein solches Steuerelement verwaltet den Wert mithilfe der im Browser integrierten Funktionen. Beim Absenden eines Formulars wird der Wert wie gewohnt übermittelt. Es gibt keinen Grund, das Rad neu zu erfinden, wenn der Browser diese Arbeit bereits für uns erledigen kann.

Wie bereits gezeigt, verwenden wir aus Gründen der Barrierefreiheit ohnehin ein natives Auswahlfeld als Ausweichlösung. Wir können seinen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

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

Mit diesen beiden Funktionen können wir die nativen Steuerelemente mit den benutzerdefinierten verknüpfen:

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

Beachten Sie im obigen Code die Eigenschaft [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex). Sie stellt sicher, dass das native Steuerelement niemals den Fokus erhält und unser benutzerdefiniertes Steuerelement den Fokus erhält, wenn die Person Tastatur oder Maus verwendet.

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

Aber Moment – sind wir wirklich fertig?

## Das Steuerelement barrierefrei machen

Wir haben etwas erstellt, das funktioniert. Obwohl es noch weit von einem vollwertigen Auswahlfeld entfernt ist, lässt es sich gut bedienen. Bisher haben wir jedoch lediglich das DOM manipuliert. Unser Steuerelement besitzt keine echte Semantik. Auch wenn es wie ein Auswahlfeld aussieht, ist es aus Sicht des Browsers keines. Assistive Technologien können daher nicht erkennen, dass es sich um ein Auswahlfeld handelt. Kurz gesagt: Dieses hübsche neue Auswahlfeld ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung: [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für „Accessible Rich Internet Application“ und ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die genau für unseren Anwendungsfall entwickelt wurde: Webanwendungen und benutzerdefinierte Steuerelemente barrierefrei zu machen. Im Wesentlichen handelt es sich um Attribute, die HTML erweitern. Mit ihnen können wir Rollen, Zustände und Eigenschaften genauer beschreiben, sodass das neu erstellte Element wie das native Element verstanden wird, das es nachbildet. Diese Attribute lassen sich im HTML-Markup setzen. Wenn eine Person einen anderen Wert auswählt, aktualisieren wir die ARIA-Attribute außerdem mit JavaScript.

### Das Attribut `role`

Ein zentrales Attribut von [ARIA](/de/docs/Web/Accessibility/ARIA) ist [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques). Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) nimmt einen Wert an, der festlegt, wozu ein Element dient. Jede Rolle definiert eigene Anforderungen und Verhaltensweisen. In unserem Beispiel verwenden wir die Rolle [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role). Sie ist eine „zusammengesetzte Rolle“: Von Elementen mit dieser Rolle werden Kindelemente mit jeweils bestimmten Rollen erwartet – in diesem Fall mindestens ein Kindelement mit der Rolle `option`.

ARIA definiert außerdem Rollen, die standardmäßig für gewöhnliches HTML-Markup gelten. Beispielsweise entspricht das {{HTMLElement("table")}}-Element der Rolle `grid` und das {{HTMLElement("ul")}}-Element der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, müssen wir sicherstellen, dass die Rolle `listbox` unseres Steuerelements Vorrang vor der Rolle `list` des {{HTMLElement("ul")}}-Elements hat. Dafür verwenden wir die Rolle `presentation`. Mit ihr kennzeichnen wir, dass ein Element keine eigene besondere Bedeutung hat und ausschließlich zur Darstellung von Informationen dient. Wir weisen sie unserem {{HTMLElement("ul")}}-Element zu.

Um die Rolle [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) zu unterstützen, müssen wir unser HTML lediglich wie folgt aktualisieren:

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
> Es ist nicht erforderlich, sowohl ein `role`-Attribut als auch ein `class`-Attribut anzugeben. Verwenden Sie in Ihrem CSS statt `.option` den [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[role="option"]`.

### Das Attribut `aria-selected`

Das Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques) allein reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet außerdem zahlreiche Attribute für Zustände und Eigenschaften. Je besser und umfassender Sie diese verwenden, desto besser können assistive Technologien Ihr Steuerelement verstehen. In unserem Fall beschränken wir uns auf ein Attribut: `aria-selected`.

Das Attribut `aria-selected` kennzeichnet die aktuell ausgewählte Option. So können assistive Technologien mitteilen, welche Option ausgewählt ist. Wir verwenden es dynamisch mit JavaScript, um die ausgewählte Option jedes Mal zu kennzeichnen, wenn eine Person eine Auswahl trifft. Dazu müssen wir unsere Funktion `updateValue()` überarbeiten:

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

Es mag einfacher erscheinen, den Screenreader auf das außerhalb des sichtbaren Bereichs liegende Auswahlfeld fokussieren zu lassen und unser gestaltetes Steuerelement zu ignorieren. Das ist jedoch keine barrierefreie Lösung. Screenreader werden nicht nur von blinden Menschen verwendet, sondern auch von Menschen mit eingeschränktem und sogar mit uneingeschränktem Sehvermögen. Deshalb darf der Screenreader nicht auf ein Element außerhalb des sichtbaren Bereichs fokussieren.

Nachfolgend sehen Sie das Ergebnis aller Änderungen. Am besten lässt es sich mit einer assistiven Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) nachvollziehen.

#### Interaktives Beispiel

Sehen Sie sich [hier den vollständigen Quellcode](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5) an.

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

Wenn Sie den Code weiterentwickeln möchten, sind noch einige Verbesserungen nötig, bevor er allgemein einsetzbar und wiederverwendbar ist. Sie können dies als Übung versuchen. Zwei Hinweise dazu: Das erste Argument ist bei allen unseren Funktionen gleich. Das bedeutet, dass diese Funktionen denselben Kontext benötigen. Es wäre sinnvoll, ein Objekt zu erstellen, über das sie diesen Kontext gemeinsam nutzen.

## Ein alternativer Ansatz: Radio-Buttons verwenden

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht semantischem HTML, CSS und JavaScript nachgebaut. Dieses Auswahlfeld wählt eine von einer begrenzten Anzahl von Optionen aus. Dieselbe Funktionalität bietet eine Gruppe gleichnamiger {{htmlelement('input/radio', 'radio')}}-Buttons.

Wir könnten das Steuerelement daher stattdessen mit Radio-Buttons nachbauen. Sehen wir uns diese Möglichkeit an.

Wir beginnen mit einer vollständig semantischen, barrierefreien, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Buttons mit zugehörigen {{htmlelement('label')}}-Elementen. Die gesamte Gruppe beschriften wir mit einem semantisch passenden Paar aus {{htmlelement('fieldset')}} und {{htmlelement('legend')}}.

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

Wir gestalten die Liste der Radio-Buttons – nicht `legend` und `fieldset` – ein wenig, damit sie dem vorherigen Beispiel ähnelt. So zeigen wir, dass dies möglich ist:

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

Ohne JavaScript und mit nur wenig CSS können wir die Liste der Radio-Buttons so gestalten, dass nur der ausgewählte Eintrag angezeigt wird. Wenn sich der Fokus innerhalb des `<ul>`-Elements im `<fieldset>`-Element befindet, öffnet sich die Liste. Mit den Pfeiltasten nach oben und unten sowie nach links und rechts lassen sich vorherige und nächste Einträge auswählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Bis zu einem gewissen Grad funktioniert dies ohne JavaScript. Wir haben ein Steuerelement erstellt, das unserem benutzerdefinierten Steuerelement ähnelt und auch dann funktioniert, wenn JavaScript ausfällt. Klingt nach einer hervorragenden Lösung, oder? Nicht ganz. Mit der Tastatur funktioniert es, aber ein Mausklick führt nicht zum erwarteten Verhalten. Es ist wahrscheinlich sinnvoller, Webstandards als Grundlage für benutzerdefinierte Steuerelemente zu verwenden, statt sich auf Frameworks zu verlassen, die Elemente ohne native Semantik erstellen. Unser Steuerelement bietet allerdings nicht dieselbe Funktionalität wie ein natives `<select>`-Element.

Positiv ist, dass dieses Steuerelement für Screenreader vollständig zugänglich ist und sich vollständig mit der Tastatur bedienen lässt. Es ersetzt jedoch kein {{htmlelement('select')}}-Element. Einige Funktionen unterscheiden sich oder fehlen. Beispielsweise kann man mit allen vier Pfeiltasten durch die Optionen navigieren. Wenn sich die Person jedoch auf dem letzten Button befindet und die Pfeiltaste nach unten drückt, springt die Auswahl zum ersten Button. Anders als bei einem `<select>`-Element endet die Navigation nicht am Anfang oder Ende der Optionsliste.

Die Ergänzung dieser fehlenden Funktionalität überlassen wir Ihnen als Übung.

## Fazit

Wir haben die Grundlagen für die Erstellung eines benutzerdefinierten Formularsteuerelements kennengelernt. Wie Sie sehen, ist dies jedoch nicht trivial. Bevor Sie ein eigenes Steuerelement erstellen, prüfen Sie, ob HTML alternative Elemente bietet, die Ihre Anforderungen ausreichend erfüllen. Wenn Sie ein benutzerdefiniertes Steuerelement benötigen, ist es oft einfacher, eine Bibliothek eines Drittanbieters zu verwenden, statt alles selbst zu entwickeln. Wenn Sie dennoch ein eigenes Steuerelement erstellen, vorhandene Elemente anpassen oder mit einem Framework ein vorgefertigtes Steuerelement implementieren, denken Sie daran: Ein benutzbares und barrierefreies Formularsteuerelement zu erstellen, ist komplizierter, als es aussieht.

Bevor Sie selbst Code schreiben, sollten Sie diese Bibliotheken in Betracht ziehen:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente mit Radio-Buttons, eigenem JavaScript oder einer Bibliothek eines Drittanbieters erstellen, stellen Sie sicher, dass sie barrierefrei und robust gegenüber unterschiedlichen Browserfunktionen sind. Sie müssen also mit einer Vielzahl von Browsern funktionieren, die die verwendeten Webstandards unterschiedlich gut unterstützen. Viel Spaß!
