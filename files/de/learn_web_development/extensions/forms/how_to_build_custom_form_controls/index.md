---
title: Anleitung zum Erstellen benutzerdefinierter Formularelemente
short-title: Benutzerdefinierte Formularelemente
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

In einigen Fällen scheinen die verfügbaren nativen HTML-Formularelemente nicht ausreichend zu sein. Beispielsweise, wenn Sie eine [erweiterte Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) für einige Elemente wie das {{HTMLElement("select")}}-Element durchführen müssen, oder wenn Sie benutzerdefinierte Verhaltensweisen bereitstellen möchten, sollten Sie in Betracht ziehen, Ihre eigenen Elemente zu erstellen.

In diesem Artikel werden wir besprechen, wie man ein benutzerdefiniertes Element erstellt. Zu diesem Zweck arbeiten wir mit einem Beispiel: dem Wiederaufbau des {{HTMLElement("select")}}-Elements. Wir werden auch diskutieren, wann und ob der Bau eines eigenen Elements sinnvoll ist und was zu beachten ist, wenn der Bau eines Elements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns darauf, das Element zu erstellen, nicht darauf, wie man den Code generisch und wiederverwendbar gestaltet. Das würde nicht triviale JavaScript-Code und DOM-Manipulation in einem unbekannten Kontext erfordern und liegt außerhalb des Umfangs dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Element erstellen, sollten Sie zunächst genau herausfinden, was Sie wollen. Dies wird Ihnen wertvolle Zeit sparen. Insbesondere ist es wichtig, alle Zustände Ihres Elements klar zu definieren. Dazu ist es gut, mit einem vorhandenen Element zu beginnen, dessen Zustände und Verhalten gut bekannt sind, damit Sie diese so weit wie möglich nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element neu erstellen. Hier ist das Ergebnis, das wir erreichen möchten:

![Die drei Zustände eines Auswahlfelds](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Elements: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

In Bezug auf das Verhalten ahmen wir ein natives HTML-Element nach. Daher sollte es dasselbe Verhalten und dieselbe Semantik wie das native HTML-Element aufweisen. Unser Element muss mit einer Maus sowie mit einer Tastatur nutzbar und für Bildschirmleser verständlich sein, genau wie jedes native Element. Lassen Sie uns zunächst definieren, wie das Element jeden Zustand erreicht:

**Das Element befindet sich in seinem normalen Zustand, wenn:**

- die Seite geladen wird.
- das Element aktiv war und der Benutzer irgendwo außerhalb davon klickt.
- das Element aktiv war und der Benutzer den Fokus mit der Tastatur auf ein anderes Element verschiebt (z.B. die <kbd>Tab</kbd>-Taste).

**Das Element befindet sich in seinem aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tab-Taste drückt und es den Fokus erhält.
- das Element in seinem offenen Zustand war und der Benutzer darauf klickt.

**Das Element befindet sich in seinem offenen Zustand, wenn:**

- das Element in einem anderen Zustand als offen ist und der Benutzer darauf klickt.

Sobald wir wissen, wie man die Zustände ändert, ist es wichtig, zu definieren, wie man den Wert des Elements ändert:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, wenn sich das Element im offenen Zustand befindet.
- der Benutzer die Pfeiltasten nach oben oder unten drückt, wenn sich das Element im aktiven Zustand befindet.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Pfeiltaste nach oben drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Pfeiltaste nach unten drückt, wenn die letzte Option ausgewählt ist.

Lassen Sie uns schließlich definieren, wie sich die Optionen des Elements verhalten:

- Wenn das Element geöffnet wird, ist die ausgewählte Option hervorgehoben.
- Wenn die Maus über eine Option fährt, wird die Option hervorgehoben und die zuvor hervorgehobene Option kehrt in ihren normalen Zustand zurück.

Für die Zwecke unseres Beispiels belassen wir es dabei; allerdings, wenn Sie ein aufmerksamer Leser sind, werden Sie feststellen, dass einige Verhaltensweisen fehlen. Zum Beispiel, was denken Sie, wird passieren, wenn der Benutzer die Tab-Taste drückt, während sich das Element im offenen Zustand befindet? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich, aber die Tatsache ist, weil es nicht in unseren Spezifikationen definiert ist, ist es sehr leicht, dieses Verhalten zu übersehen. Dies ist besonders in einer Teamumgebung der Fall, wenn die Personen, die das Verhalten des Elements entwerfen, andere sind als die, die es umsetzen.

Ein weiteres interessantes Beispiel: Was wird passieren, wenn der Benutzer die Pfeiltasten nach oben oder unten drückt, während das Element im offenen Zustand ist? Dies ist ein wenig kniffliger. Wenn Sie der Meinung sind, dass der aktive Zustand und der offene Zustand völlig unterschiedlich sind, lautet die Antwort erneut "nichts passiert", weil wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie der Meinung sind, dass sich der aktive Zustand und der offene Zustand etwas überlappen, kann sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, da wir keine Tastaturinteraktionen über Optionen definiert haben, wenn sich das Element im geöffneten Zustand befindet (wir haben nur definiert, was passieren soll, wenn das Element geöffnet ist, aber nichts danach).

Wir müssen ein wenig weiterdenken: Was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt eine geöffnete Auswahl. Denken Sie daran, wenn Sie dieselbe Funktionalität wie das bestehende native {{htmlelement('select')}} bereitstellen möchten, sollte es für alle Benutzer genau gleich funktionieren, von der Tastatur über die Maus bis hin zum Touch- und Bildschirmlesegerät, und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie behandeln, aber es kann ein echtes Problem für exotische neue Elemente sein. Bei standardisierten Elementen, zu denen das {{htmlelement('select')}} gehört, haben die Spezifikationsautoren unglaublich viel Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall für jedes Eingabegerät zu spezifizieren. Neue Elemente zu erstellen ist nicht einfach, besonders wenn Sie etwas erschaffen, das noch nie zuvor gemacht wurde, und daher niemand die geringste Ahnung hat, wie die erwarteten Verhaltensweisen und Interaktionen aussehen. Zumindest die Auswahl ist schon einmal gemacht worden, also wissen wir, wie sie sich verhalten sollte!

Das Entwerfen neuer Interaktionen ist im Allgemeinen nur eine Option für sehr große Branchenakteure mit genügend Reichweite, dass eine von ihnen geschaffene Interaktion zu einem Standard werden kann. Zum Beispiel führte Apple das Scroll-Rad 2001 mit dem iPod ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät einzuführen, etwas, das die meisten Gerätefirmen nicht tun können.

Es ist am besten, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es wichtig, Zeit in die Designphase zu investieren; wenn Sie ein Verhalten schlecht definieren oder vergessen, eines zu definieren, wird es sehr schwer sein, es neu zu definieren, sobald die Benutzer sich daran gewöhnt haben. Wenn Sie Zweifel haben, fragen Sie nach den Meinungen anderer, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Nutzertests durchzuführen](https://de.wikipedia.org/wiki/Benutzerfreundlichkeit). Dieser Prozess wird als UX-Design bezeichnet. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der Abschnitt UX Design von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Auch in den meisten Systemen gibt es eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Auswahlmöglichkeiten anzusehen (dies entspricht dem Klicken auf das {{HTMLElement("select")}}-Element mit einer Maus). Dies wird mit <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> unter Windows erreicht. Wir haben dies nicht in unserem Beispiel implementiert, aber es wäre einfach zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einiger) Semantiken

Jetzt, da die grundlegende Funktionalität des Elements festgelegt wurde, ist es an der Zeit, es zu bauen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm einige grundlegende Semantiken zu geben. Hier ist, was wir zum Wiederaufbau eines {{HTMLElement("select")}}-Elements benötigen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine feste HTML-Struktur binden, damit wir später Implementierungsänderungen vornehmen können, ohne Code zu brechen, der das Element verwendet. Was wäre zum Beispiel, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren wollten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand "sieht" der Benutzer eines Bildschirmlesers nur eine ungeordnete Liste. Wir werden in Kürze ARIA-Semantiken hinzufügen.

## Erstellen des Aussehens und der Funktionalität mit CSS

Jetzt, da wir eine Struktur haben, können wir beginnen, unser Element zu gestalten. Der gesamte Zweck, dieses benutzerdefinierte Element zu erstellen, besteht darin, es genau so zu gestalten, wie wir es möchten. Zu diesem Zweck werden wir unsere CSS-Arbeit in zwei Teile aufteilen: Der erste Teil sind die absolut notwendigen CSS-Regeln, um unser Element wie ein {{HTMLElement("select")}}-Element funktionieren zu lassen, und der zweite Teil besteht aus den eleganten Stilen, die verwendet werden, um es so aussehen zu lassen, wie wir es wollen.

### Erforderliche Styles

Die erforderlichen Styles sind diejenigen, die notwendig sind, um die drei Zustände unseres Elements zu handhaben.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Aussehen und die Funktionalität unseres Elements im aktiven Zustand zu definieren. Da unser Element fokussierbar ist, verdoppeln wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudoklasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Nun, lassen Sie uns die Liste der Optionen verwalten:

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

Wir benötigen eine zusätzliche Klasse, um zu verwalten, wenn die Liste der Optionen ausgeblendet ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand zu verwalten, die nicht genau übereinstimmen.

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

Jetzt, da wir die grundlegende Funktionalität implementiert haben, kann der Spaß beginnen. Das Folgende ist nur ein Beispiel dafür, was möglich ist, und wird dem Screenshot am Anfang dieses Artikels entsprechen. Sie sollten jedoch frei sein, zu experimentieren und zu sehen, was Sie sich einfallen lassen können.

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

Wir benötigen kein zusätzliches Element, um den Abwärtspfeil zu gestalten; stattdessen verwenden wir das {{cssxref("::after")}}-Pseudoelement. Es könnte auch mit einem einfachen Hintergrundbild auf der `select`-Klasse implementiert werden.

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

Als Nächstes gestalten wir die Liste der Optionen:

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

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert identifizieren zu können, den der Benutzer auswählen wird oder ausgewählt hat.

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

## Ihr Element mit JavaScript zum Leben erwecken

Nun, da unser Design und die Struktur bereit sind, können wir den JavaScript-Code schreiben, um das Element tatsächlich funktionieren zu lassen.

> [!WARNING]
> Der Folgende ist ein Bildungscode, kein Produktionscode, und sollte nicht wie dargestellt verwendet werden. Er ist weder zukunftssicher noch wird er in alten Browsern funktionieren. Es gibt auch redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig, sich daran zu erinnern, **JavaScript im Browser ist eine unzuverlässige Technologie**. Benutzerdefinierte Elemente erfordern JavaScript, um alles zusammenzubringen. Es gibt jedoch Fälle, in denen JavaScript nicht im Browser laufen kann:

- Der Benutzer hat JavaScript deaktiviert: Das ist ungewöhnlich; nur sehr wenige Leute deaktivieren heutzutage JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der mobilen Welt, wo das Netzwerk nicht sehr zuverlässig ist.
- Das Skript hat einen Fehler: Sie sollten immer diese Möglichkeit in Betracht ziehen.
- Das Skript steht im Konflikt mit einem Drittanbieter-Skript: Dies kann mit Tracking-Skripten oder mit Lesezeichenerweiterungen passieren, die der Benutzer verwendet.
- Das Skript steht im Konflikt mit oder wird von einer Browser-Erweiterung beeinflusst (wie Firefox' [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/)-Erweiterung oder Chromes [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba)-Erweiterung).
- Der Benutzer verwendet einen alten Browser, und eine der benötigten Funktionen wird nicht unterstützt: Dies wird häufig geschehen, wenn Sie neueste APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Aufgrund dieser Risiken ist es wirklich wichtig, ernsthaft zu überlegen, was passieren wird, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen in Betracht ziehen und die Grundlagen in unserem Beispiel abdecken (eine vollständige Diskussion über die Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie einfach daran, dass es wichtig ist, Ihr Skript generisch und wiederverwendbar zu gestalten.

In unserem Beispiel, wenn unser JavaScript-Code nicht läuft, fallen wir darauf zurück, ein Standard-{{HTMLElement("select")}}-Element anzuzeigen. Wir fügen unser Steuerelement und das {{HTMLElement("select")}} ein; welches angezeigt wird, hängt von der Klasse des "body"-Elements ab, wobei die Klasse des "body"-Elements von dem Skript aktualisiert wird, das das Element funktionstüchtig macht, wenn es erfolgreich geladen wird.

Dafür benötigen wir zwei Dinge:

Erstens müssen wir vor jeder Instanz unseres benutzerdefinierten Elements ein reguläres {{HTMLElement("select")}}-Element hinzufügen. Es gibt einen Vorteil, wenn man dieses "extra" select auch dann hat, wenn unser JavaScript wie erhofft funktioniert: Wir werden dieses select verwenden, um Daten von unserem benutzerdefinierten Element zusammen mit den anderen Formulardaten zu senden. Wir werden dies später ausführlicher besprechen.

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

Zweitens benötigen wir zwei neue Klassen, um uns unnötige Elemente ausblenden zu lassen: Wir blenden das benutzerdefinierte Element visuell aus, wenn unser Skript nicht läuft, oder das "echte" {{HTMLElement("select")}}-Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Element ausblendet.

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

Dieses CSS blendet eines der Elemente visuell aus, es steht aber immer noch Bildschirmlesern zur Verfügung.

Nun benötigen wir einen JavaScript-Schalter, der bestimmt, ob das Skript läuft oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn unser Skript zur Ladezeit der Seite läuft, entfernt es die `no-widget`-Klasse und fügt die `widget`-Klasse hinzu, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Elements umgeschaltet wird.

```js
document.body.classList.remove("no-widget");
document.body.classList.add("widget");
```

#### Ohne JS

Sehen Sie sich den [vollen Quellcode an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#no_js).

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

Sehen Sie sich den [vollen Quellcode an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#js).

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
> Wenn Sie wirklich möchten, dass Ihr Code generisch und wiederverwendbar ist, ist es weit besser, nur die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente auszublenden, und den DOM-Baum, der das benutzerdefinierte Element darstellt, dynamisch nach jedem {{HTMLElement("select")}}-Element auf der Seite hinzuzufügen.

### Die Arbeit erleichtern

Im Code, den wir gleich erstellen, werden wir die Standard-JavaScript- und DOM-APIs verwenden, um alle Arbeiten auszuführen, die wir benötigen. Die Funktionen, die wir verwenden möchten, sind die folgenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Aufbau von Ereignisrückrufen

Die Vorarbeit ist erledigt. Wir können jetzt beginnen, alle Funktionen zu definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Element interagiert.

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

Diese benötigen Sie, um die verschiedenen Zustände des benutzerdefinierten Elements zu verwalten.

Als Nächstes binden wir diese Funktionen an die entsprechenden Ereignisse:

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

Zu diesem Zeitpunkt ändert sich unser Element gemäß unserem Design, aber sein Wert wird noch nicht aktualisiert. Das behandeln wir als Nächstes.

#### Live-Beispiel

Sehen Sie sich den [vollen Quellcode an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_3).

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

### Handhabung des Wertes des Elements

Jetzt, da unser Element funktioniert, müssen wir Code hinzufügen, um seinen Wert entsprechend der Benutzereingabe zu aktualisieren und es zu ermöglichen, den Wert mit Formulardaten zu übermitteln.

Der einfachste Weg, dies zu tun, besteht darin, ein natives Element im Hintergrund zu verwenden. Ein solches Element wird den Wert mit allen integrierten Kontrollen, die der Browser bereitstellt, verfolgen, und der Wert wird wie üblich gesendet, wenn ein Formular übermittelt wird. Es gibt keinen Grund, das Rad neu zu erfinden, wenn wir alles für uns erledigen lassen können.

Wie bereits erwähnt, verwenden wir bereits aus Gründen der Barrierefreiheit ein natives Auswahl-Element als Fallback; wir können seinen Wert mit dem unseres benutzerdefinierten Elements synchronisieren:

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

Mit diesen beiden Funktionen können wir die nativen Elemente mit den benutzerdefinierten verbinden:

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

Im obigen Code ist die Verwendung der [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft erwähnenswert. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Element niemals den Fokus erhält, und um sicherzustellen, dass unser benutzerdefiniertes Element den Fokus erhält, wenn der Benutzer seine Tastatur oder Maus verwendet.

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

## Es zugänglich machen

Wir haben etwas gebaut, das funktioniert und obwohl es weit entfernt von einem voll ausgestatteten Auswahlkasten ist, funktioniert es gut. Aber was wir getan haben ist nichts anderes, als mit dem DOM zu spielen. Es hat keine echte Semantik und obwohl es wie ein Auswahlkasten aussieht, aus Sicht des Browsers ist es keiner, sodass unterstützende Technologien nicht erkennen können, dass es ein Auswahlkasten ist. Kurz gesagt, dieser hübsche neue Auswahlkasten ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung, und sie heißt [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für "Accessible Rich Internet Application", und es ist [eine W3C-Spezifikation](https://w3c.github.io/aria/), die speziell dafür entwickelt wurde, was wir hier tun: Webanwendungen und benutzerdefinierte Elemente zugänglich zu machen. Es ist im Wesentlichen eine Reihe von Attributen, die HTML erweitern, sodass wir besser Rollen, Zustände und Eigenschaften beschreiben können, als ob das von uns gerade entwickelte Element das native Element wäre, als das es ausgegeben werden soll. Die Verwendung dieser Attribute kann durch Bearbeiten des HTML-Markups erfolgen. Wir aktualisieren auch die ARIA-Attribute über JavaScript, wenn der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attribut akzeptiert einen Wert, der definiert, wofür ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel verwenden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle. Es ist eine "komposite Rolle", was bedeutet, dass Elemente mit dieser Rolle erwartet werden, Kinder zu haben, jedes mit einer spezifischen Rolle (in diesem Fall zumindest ein Kind mit der `option`-Rolle).

Es ist auch erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf den Standard-HTML-Markup angewendet werden. Zum Beispiel entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, möchten wir sicherstellen, dass die `listbox`-Rolle unseres Elements die `list`-Rolle des {{HTMLElement("ul")}}-Elements ersetzt. Zu diesem Zweck verwenden wir die Rolle `presentation`. Diese Rolle ist dafür gedacht, uns zu ermöglichen anzuzeigen, dass ein Element keine spezielle Bedeutung hat und nur zur Präsentation von Informationen verwendet wird. Wir werden es auf unser {{HTMLElement("ul")}}-Element anwenden.

Um die [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)-Rolle zu unterstützen, müssen wir einfach unser HTML wie folgt aktualisieren:

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
> Sowohl das `role`-Attribut als auch ein `class`-Attribut einzuschließen ist nicht notwendig. Anstelle der Verwendung von `.option` verwenden Sie die `[role="option"]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in Ihrem CSS.

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)-Attributs reicht nicht aus. [ARIA](/de/docs/Web/Accessibility/ARIA) bietet auch viele Zustands- und Eigenschaftsattributen. Je mehr und besser Sie diese verwenden, desto besser wird Ihr Element von unterstützenden Technologien verstanden. In unserem Fall beschränken wir uns auf ein Attribut: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu kennzeichnen, welche Option derzeit ausgewählt ist; dies ermöglicht unterstützenden Technologien, den Benutzer darüber zu informieren, was die aktuelle Auswahl ist. Wir werden es dynamisch mit JavaScript verwenden, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Zu diesem Zweck müssen wir unsere `updateValue()`-Funktion überarbeiten:

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

Es mag einfacher erscheinen, einem Bildschirmleser zu erlauben, sich auf die Bildschirm-fremde Auswahl zu konzentrieren und unsere stilisierte zu ignorieren, aber das ist keine barrierefreie Lösung. Bildschirmleser sind nicht auf blinde Menschen beschränkt; Menschen mit Sehbehinderungen und sogar Menschen mit perfektem Sehvermögen verwenden sie ebenfalls. Aus diesem Grund können Sie den Bildschirmleser nicht auf ein Bildschirm-fremdes Element fokussieren lassen.

Nachfolgend das Endergebnis aller dieser Änderungen (Sie erhalten ein besseres Gefühl dafür, indem Sie es mit unterstützenden Technologien wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/features/?vision) ausprobieren).

#### Live-Beispiel

Sehen Sie sich den [vollen Quellcode hier an](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5).

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

Wenn Sie weiter voranschreiten möchten, benötigt der Code in diesem Beispiel einige Verbesserungen, bevor er generisch und wiederverwendbar wird. Dies ist eine Übung, die Sie ausprobieren können. Zwei Hinweise, die Ihnen dabei helfen: das erste Argument für alle unsere Funktionen ist dasselbe, was bedeutet, dass diese Funktionen denselben Kontext benötigen. Ein Objekt zu erstellen, um diesen Kontext zu teilen, wäre klug.

## Ein alternativer Ansatz: Verwenden von Optionsfeldern

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht-semantic HTML, CSS und JavaScript neu erfunden. Diese Auswahl wählte eine Option aus einer begrenzten Anzahl von Optionen, was dieselbe Funktionalität einer gleichnamigen Gruppe von {{htmlelement('input/radio', 'radio')}}-Schaltflächen ist.

Wir könnten dies also auch mit Optionsfeldern neu erfinden; lassen Sie uns diese Option betrachten.

Wir können mit einer vollständig semantischen, barrierefreien, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Schaltflächen beginnen, mit einem zugehörigen {{htmlelement('label')}}, wobei die gesamte Gruppe mit einem semantisch geeigneten {{htmlelement('fieldset')}} und {{htmlelement('legend')}}-Paar versehen wird.

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

Wir machen ein wenig Styling der Optionsfensterliste (nicht der Legende/Feldgruppe), um es ein wenig wie im früheren Beispiel aussehen zu lassen, nur um zu zeigen, dass es möglich ist:

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

Ohne JavaScript und mit nur ein bisschen CSS können wir die Liste der Optionsfenster so gestalten, dass nur das geprüfte Element angezeigt wird. Wenn der Fokus innerhalb des `<ul>` im `<fieldset>` ist, öffnet sich die Liste und die Pfeiltasten nach oben und unten (sowie links und rechts) funktionieren, um die vorherigen und nächsten Elemente auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert, bis zu einem gewissen Grad, ohne JavaScript. Wir haben eine ähnliche Kontrolle zu unserem benutzerdefinierten Element geschaffen, die auch funktioniert, wenn das JavaScript fehlschlägt. Hört sich nach einer großartigen Lösung an, oder? Nun, nicht 100%. Es funktioniert mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es scheint mehr Sinn zu machen, Web-Standards als Basis für benutzerdefinierte Elemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unser Element hat jedoch nicht dieselbe Funktionalität, die ein `<select>` nativ hat.

Auf der positiven Seite ist dieses Element vollständig zugänglich für einen Bildschirmleser und vollständig über die Tastatur navigierbar. Aber dieses Element ist kein Ersatz für ein {{htmlelement('select')}}. Es gibt Funktionalitäten, die unterschiedlich sind und/oder fehlen. Zum Beispiel navigieren alle vier Pfeile durch die Optionen, aber das Klicken auf den Abwärtspfeil, wenn sich der Benutzer auf der letzten Schaltfläche befindet, bringt ihn zur ersten Schaltfläche; es hält nicht oben und unten in der Optionsliste an, wie ein `<select>` es tut.

Wir überlassen das Hinzufügen dieser fehlenden Funktionalität einer Leserübung.

## Fazit

Wir haben alle Grundlagen für den Bau eines benutzerdefinierten Formularelements gesehen, aber wie Sie sehen können, ist es nicht trivial. Bevor Sie Ihr eigenes angepasstes Element erstellen, überlegen Sie, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen können. Wenn Sie ein benutzerdefiniertes Element erstellen müssen, ist es oft einfacher, sich auf Drittanbieter-Bibliotheken zu verlassen, anstatt Ihr eigenes zu erstellen. Wenn Sie jedoch Ihr eigenes erstellen, vorhandene Elemente modifizieren oder ein Framework verwenden, um ein vorgefertigtes Element zu implementieren, denken Sie daran, dass das Erstellen eines benutzbaren und zugänglichen Formularelements komplizierter ist, als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie den eigenen Code erstellen:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Elemente über Optionsfenster, Ihr eigenes JavaScript oder mit einer Drittanbieter-Bibliothek erstellen, stellen Sie sicher, dass sie zugänglich und zukunftssicher sind; das heißt, sie sollten in der Lage sein, mit einer Vielzahl von Browsern zu arbeiten, deren Kompatibilität mit den von ihnen verwendeten Webstandards variieren kann. Viel Spaß!
