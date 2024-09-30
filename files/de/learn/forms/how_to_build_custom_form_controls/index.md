---
title: Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente
slug: Learn/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}

Es gibt einige Fälle, in denen die verfügbaren nativen HTML-Formularsteuerelemente möglicherweise nicht ausreichen. Wenn Sie beispielsweise [erweiterte Stile](/de/docs/Learn/Forms/Advanced_form_styling) auf einige Steuerelemente wie das {{HTMLElement("select")}}-Element anwenden müssen oder wenn Sie benutzerdefinierte Verhaltensweisen bereitstellen möchten, sollten Sie in Betracht ziehen, Ihre eigenen Steuerelemente zu erstellen.

In diesem Artikel werden wir diskutieren, wie man ein benutzerdefiniertes Steuerelement erstellt. Dazu werden wir mit einem Beispiel arbeiten: dem Wiederaufbau des {{HTMLElement("select")}}-Elements. Wir werden auch besprechen, wie, wann und ob es sinnvoll ist, Ihr eigenes Steuerelement zu erstellen und worauf Sie achten sollten, wenn die Erstellung eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns auf den Bau des Steuerelements, nicht darauf, wie man den Code generisch und wiederverwendbar macht; das würde einigen nicht trivialen JavaScript-Code und DOM-Manipulation in einem unbekannten Kontext erfordern, und das ist nicht der Umfang dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie genau herausfinden, was Sie möchten. Dies spart Ihnen wertvolle Zeit. Insbesondere ist es wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Um dies zu tun, ist es gut, mit einem bestehenden Steuerelement zu beginnen, dessen Zustände und Verhalten gut bekannt sind, sodass Sie diese so weit wie möglich nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element nachbilden. Hier ist das Ergebnis, das wir erreichen möchten:

![Die drei Zustände eines Auswahlkästchens](custom-select.png)

Dieses Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den Normalzustand (links); den aktiven Zustand (in der Mitte) und den geöffneten Zustand (rechts).

Im Hinblick auf das Verhalten rekonstruieren wir ein natives HTML-Element. Es sollte daher das gleiche Verhalten und die gleiche Semantik wie das native HTML-Element haben. Wir benötigen, dass unser Steuerelement sowohl mit einer Maus als auch mit einer Tastatur verwendbar ist und für einen Bildschirmleser verständlich ist, genau wie jedes native Steuerelement. Lassen Sie uns damit beginnen, zu definieren, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement ist in seinem Normalzustand, wenn:**

- die Seite geladen ist.
- das Steuerelement aktiv war und der Benutzer irgendwo außerhalb klickt.
- das Steuerelement aktiv war und der Benutzer den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt (z.B. durch Drücken der

  <kbd>Tab</kbd>

  -Taste).

**Das Steuerelement ist in seinem aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tabulatortaste drückt und es den Fokus erhält.
- das Steuerelement in seinem geöffneten Zustand war und der Benutzer darauf klickt.

**Das Steuerelement ist in seinem geöffneten Zustand, wenn:**

- sich das Steuerelement in einem anderen Zustand als geöffnet befindet und der Benutzer darauf klickt.

Sobald wir wissen, wie man Zustände ändert, ist es wichtig zu definieren, wie man den Wert des Steuerelements ändert:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, wenn sich das Steuerelement im geöffneten Zustand befindet.
- der Benutzer die Aufwärts- oder Abwärtspfeiltasten drückt, wenn sich das Steuerelement im aktiven Zustand befindet.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Aufwärtspfeiltaste drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Abwärtspfeiltaste drückt, wenn die letzte Option ausgewählt ist.

Lassen Sie uns schließlich definieren, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet wird, wird die ausgewählte Option hervorgehoben.
- Wenn die Maus über eine Option bewegt wird, wird die Option hervorgehoben und die zuvor hervorgehobene Option in ihren Normalzustand zurückversetzt.

Für die Zwecke unseres Beispiels hören wir hier auf; jedoch, wenn Sie ein aufmerksamer Leser sind, werden Sie feststellen, dass einige Verhaltensweisen fehlen. Zum Beispiel, was denken Sie, wird passieren, wenn der Benutzer die Tabulatortaste drückt, während sich das Steuerelement im geöffneten Zustand befindet? Die Antwort ist _nichts_. OK, das richtige Verhalten scheint offensichtlich, aber die Tatsache ist, weil es in unseren Spezifikationen nicht definiert ist, ist es sehr einfach, dieses Verhalten zu übersehen. Dies ist besonders wahr in einem Teamumfeld, wenn die Personen, die das Verhalten des Steuerelements entwerfen, andere sind als diejenigen, die es implementieren.

Ein weiteres schönes Beispiel: Was wird passieren, wenn der Benutzer die Aufwärts- oder Abwärtspfeiltasten drückt, während sich das Steuerelement im geöffneten Zustand befindet? Dieses ist ein bisschen kniffliger. Wenn Sie davon ausgehen, dass sich der aktive Zustand und der geöffnete Zustand völlig unterscheiden, ist die Antwort wieder „nichts wird passieren“, weil wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie davon ausgehen, dass der aktive Zustand und der geöffnete Zustand sich ein wenig überschneiden, könnte sich der Wert ändern, die Option wird jedoch definitiv nicht entsprechend hervorgehoben, weil wir keine Tastaturinteraktionen über Optionen definiert haben, wenn sich das Steuerelement im geöffneten Zustand befindet (wir haben nur definiert, was passieren sollte, wenn das Steuerelement geöffnet ist, jedoch nichts danach).

Wir müssen weiter denken: was ist mit der Escape-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt ein geöffnetes Auswahlmenü. Denken Sie daran, wenn Sie die gleiche Funktionalität wie das bestehende native {{htmlelement('select')}} bieten möchten, sollte es für alle Benutzer genauso funktionieren wie das Auswahlmenü, von Tastatur zu Maus zu Touch zu Bildschirmleser und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich und wir werden sie behandeln, aber es kann ein echtes Problem für exotische neue Steuerelemente darstellen. Wenn es um standardisierte Elemente geht, von denen das {{htmlelement('select')}} eines ist, haben die Autoren der Spezifikation eine enorm lange Zeit damit verbracht, alle Interaktionen für jeden Anwendungsfall für jedes Eingabegerät zu spezifizieren. Neue Steuerelemente zu erstellen ist nicht so einfach, besonders wenn Sie etwas erstellen, das noch nie zuvor gemacht wurde und daher niemand die geringste Ahnung hat, was das erwartete Verhalten und die Interaktionen sein sollten. Zumindest das Auswahlmenü wurde bereits gemacht, also wissen wir, wie es sich verhalten sollte!

Das Entwerfen neuer Interaktionen ist im Allgemeinen nur für sehr große Industrieakteure eine Option, die genug Reichweite haben, dass eine Interaktion, die sie erstellen, zu einem Standard werden kann. Zum Beispiel führte Apple das Scrollrad mit dem iPod im Jahr 2001 ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Möglichkeit zur Interaktion mit einem Gerät einzuführen, etwas, was die meisten Geräteunternehmen nicht tun können.

Es ist am besten, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es entscheidend, Zeit in die Designphase zu investieren; wenn Sie ein Verhalten schlecht definieren oder eines vergessen, wird es sehr schwer, es neu zu definieren, nachdem sich die Benutzer daran gewöhnt haben. Wenn Sie Zweifel haben, fragen Sie nach den Meinungen anderer, und wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird als UX-Design bezeichnet. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie die folgenden hilfreichen Ressourcen überprüfen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Bereich von SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Auch gibt es in den meisten Systemen eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Auswahlmöglichkeiten anzusehen (dies entspricht dem Klicken auf das {{HTMLElement("select")}}-Element mit einer Maus). Dies wird mit <kbd>Alt</kbd> + <kbd>Nach unten</kbd> auf Windows erreicht. Wir haben dies nicht in unserem Beispiel implementiert, aber es wäre einfach zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definieren der HTML-Struktur und (einiger) Semantiken

Da nun die grundlegende Funktionalität des Steuerelements festgelegt wurde, ist es an der Zeit, mit dem Bau zu beginnen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm eine grundlegende Semantik zu geben. Hier ist, was wir benötigen, um ein {{HTMLElement("select")}}-Element neu zu erstellen:

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

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten zugrunde liegenden HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine strenge HTML-Struktur binden, sodass wir Implementierungsänderungen später vornehmen können, ohne Code zu brechen, der das Steuerelement verwendet. Zum Beispiel, was, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen bieten jedoch keinen semantischen Wert. In diesem aktuellen Zustand „sieht“ der Bildschirmleser-Benutzer nur eine ungeordnete Liste. Wir werden gleich ARIA-Semantiken hinzufügen.

## Erstellung des Aussehens und Stils mit CSS

Jetzt, da wir eine Struktur haben, können wir mit dem Entwerfen unseres Steuerelements beginnen. Der ganze Sinn des Baus dieses benutzerdefinierten Steuerelements besteht darin, es genau so zu gestalten, wie wir es möchten. Zu diesem Zweck werden wir unsere CSS-Arbeit in zwei Teile aufteilen: Der erste Teil wird die absolut notwendigen CSS-Regeln sein, damit sich unser Steuerelement wie ein {{HTMLElement("select")}}-Element verhält, und der zweite Teil wird aus den schicken Stilen bestehen, die wir verwenden, um es so aussehen zu lassen, wie wir es möchten.

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

Wir benötigen eine zusätzliche Klasse `active`, um das Aussehen und die Haptik unseres Steuerelements zu definieren, wenn es sich im aktiven Zustand befindet. Da unser Steuerelement fokussierbar ist, verdoppeln wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudoklasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* This box-shadow property is not exactly required, however it's imperative to ensure
     active state is visible, especially to keyboard users, that we use it as a default value. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Jetzt kümmern wir uns um die Optionsliste:

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

Wir benötigen eine zusätzliche Klasse, um zu handhaben, wann die Optionsliste versteckt ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand zu verwalten, die nicht genau übereinstimmen.

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

Da wir nun die grundlegende Funktionalität an Ort und Stelle haben, kann der Spaß beginnen. Das folgende ist nur ein Beispiel dafür, was möglich ist, und wird dem Screenshot am Anfang dieses Artikels entsprechen. Sie sollten jedoch gerne experimentieren und sehen, was Sie sich einfallen lassen können.

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

Wir benötigen kein zusätzliches Element, um den Abwärtspfeil zu entwerfen; stattdessen verwenden wir das {{cssxref("::after")}}-Pseudoelement. Es könnte auch mit einem einfachen Hintergrundbild auf der `select`-Klasse implementiert werden.

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

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert zu identifizieren, den der Benutzer wählen wird (oder gewählt hat).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

Hier ist also das Ergebnis mit unseren drei Zuständen ([sehen Sie sich den Quellcode hier an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_1)):

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

## Beleben Ihres Steuerelements mit JavaScript

Da unser Design und unsere Struktur bereit sind, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich zum Laufen zu bringen.

> [!WARNING]
> Der folgende Code ist lehrreich, nicht für die Produktion gedacht und sollte nicht unverändert verwendet werden. Er ist weder zukunftssicher, noch funktioniert er in älteren Browsern. Er enthält auch redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor Sie beginnen, ist es wichtig, sich daran zu erinnern: **JavaScript im Browser ist eine unzuverlässige Technologie**. Benutzerdefinierte Steuerelemente sind auf JavaScript angewiesen, um alles zu verknüpfen. Es gibt jedoch Fälle, in denen JavaScript im Browser nicht ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Dies ist ungewöhnlich; nur sehr wenige Menschen deaktivieren heutzutage JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, insbesondere in der Mobilwelt, wo das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Sie sollten immer diese Möglichkeit in Betracht ziehen.
- Das Skript steht in Konflikt mit einem Drittanbieter-Skript: Dies kann mit Tracking-Skripten oder mit Lesezeichenleisten-Skripten passieren, die der Benutzer verwendet.
- Das Skript steht in Konflikt mit einer Browser-Erweiterung (wie FireFox's [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) Erweiterung oder Chromes [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) Erweiterung).
- Der Benutzer verwendet einen älteren Browser und eine der benötigten Funktionen wird nicht unterstützt: Dies wird häufig geschehen, wenn Sie moderne APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, analysiert und ausgeführt wurde.

Aufgrund dieser Risiken ist es sehr wichtig, ernsthaft zu überlegen, was passieren wird, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen berücksichtigen und die Grundlagen in unserem Beispiel behandeln (eine vollständige Diskussion zur Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie daran, dass es wichtig ist, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht läuft, werden wir auf die Anzeige eines Standard-{{HTMLElement("select")}}-Elements zurückfallen. Wir schließen unser Steuerelement und das {{HTMLElement("select")}} ein; welches angezeigt wird, hängt von der Klasse des body-Elements ab, wobei die Klasse des body-Elements vom Skript aktualisiert wird, das das Steuerelement aktiviert, wenn es erfolgreich geladen wird.

Um dies zu erreichen, benötigen wir zwei Dinge:

Erstens müssen wir ein reguläres {{HTMLElement("select")}}-Element vor jeder Instanz unseres benutzerdefinierten Steuerelements hinzufügen. Es gibt einen Vorteil, dieses "zusätzliche" Auswahlmenü zu haben, auch wenn unser JavaScript wie erwartet funktioniert: wir werden dieses Auswahlmenü verwenden, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit dem Rest unserer Formulardaten zu senden. Wir werden dies später ausführlicher diskutieren.

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

Zweitens benötigen wir zwei neue Klassen, um das nicht benötigte Element zu verbergen: wir verbergen visuell das benutzerdefinierte Steuerelement, wenn unser Skript nicht läuft, oder das "echte" {{HTMLElement("select")}}-Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement ausblendet.

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

Dieses CSS blendet eines der Elemente visuell aus, ist jedoch weiterhin für Bildschirmleser verfügbar.

Jetzt benötigen wir einen JavaScript-Schalter, um festzustellen, ob das Skript läuft oder nicht. Dieser Schalter besteht aus ein paar Zeilen: wenn unser Skript zum Zeitpunkt des Ladens der Seite läuft, wird es die `no-widget`-Klasse entfernen und die `widget`-Klasse hinzufügen, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements ausgetauscht wird.

```js
window.addEventListener("load", () => {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

#### Ohne JS

Überprüfen Sie den [vollständigen Quellcode](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#no_js).

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

Überprüfen Sie den [vollständigen Quellcode](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#js).

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
> Wenn Sie wirklich Ihren Code generisch und wiederverwendbar machen möchten, ist es weit besser, anstatt einen Klassenschalter zu machen, einfach die Widget-Klasse hinzuzufügen, um die {{HTMLElement("select")}}-Elemente zu verbergen und den DOM-Baum, der das benutzerdefinierte Steuerelement darstellt, dynamisch nach jedem {{HTMLElement("select")}}-Element auf der Seite hinzuzufügen.

### Job erleichtern

Im Code, den wir erstellen werden, verwenden wir die Standard-JavaScript- und DOM-APIs, um alle notwendigen Aufgaben auszuführen. Die Funktionen, die wir planen zu verwenden, sind die folgenden:

1. [`classList`](/de/docs/Web/API/Element/classList)
2. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
3. [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
4. [`querySelector()`](/de/docs/Web/API/Element/querySelector) und [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)

### Erstellung der Ereignisrückrufe

Die Grundlagen sind getan. Jetzt können wir alle Funktionen definieren, die jedes Mal verwendet werden, wenn der Benutzer mit unserem Steuerelement interagiert.

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

Sie benötigen diese, um die verschiedenen Zustände der benutzerdefinierten Steuerung zu handhaben.

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

An diesem Punkt ändert unser Steuerelement den Zustand gemäß unserem Design, aber der Wert wird noch nicht aktualisiert. Das werden wir als Nächstes angehen.

#### Live-Beispiel

Sehen Sie sich den [vollständigen Quellcode](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_3) an.

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

### Handhabung des Werts des Steuerelements

Da unser Steuerelement nun funktioniert, müssen wir Code hinzufügen, um seinen Wert gemäß der Benutzereingabe zu aktualisieren und es möglich zu machen, den Wert zusammen mit Formulardaten zu senden.

Der einfachste Weg, dies zu tun, besteht darin, ein nativen Steuerelement im Hintergrund zu verwenden. Ein solches Steuerelement verfolgt den Wert mit allen integrierten Steuerelementen, die vom Browser bereitgestellt werden, und der Wert wird wie gewohnt gesendet, wenn ein Formular abgeschickt wird. Es macht keinen Sinn, das Rad neu zu erfinden, wenn wir all dies für uns erledigen lassen können.

Wie zuvor gesehen, verwenden wir bereits ein natives Auswahlsteuerelement aus Barrierefreiheitsgründen; wir können seinen Wert mit dem unseres benutzerdefinierten Steuerelements synchronisieren:

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

Mit diesen beiden Funktionen können wir die nativen Steuerelemente mit den benutzerdefinierten steuern:

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

Im obigen Code ist es bemerkenswert, die [`tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)-Eigenschaft zu verwenden. Die Verwendung dieser Eigenschaft ist notwendig, um sicherzustellen, dass das native Steuerelement niemals den Fokus erhält, und um sicherzustellen, dass unser benutzerdefiniertes Steuerelement den Fokus erlangt, wenn der Benutzer seine Tastatur oder Maus verwendet.

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

Aber warten Sie eine Sekunde, sind wir wirklich fertig?

## Barrierefreiheit sicherstellen

Wir haben etwas gebaut, das funktioniert, und obwohl wir von einer vollständig ausgereiften Auswahlbox weit entfernt sind, funktioniert es gut. Aber was wir getan haben, ist nichts mehr als das Manipulieren des DOM. Es hat keine echte Semantik, und obwohl es wie eine Auswahlbox aussieht, ist es aus Sicht des Browsers keine, sodass unterstützende Technologien nicht in der Lage sein werden, zu verstehen, dass es sich um eine Auswahlbox handelt. Kurz gesagt, diese hübsche neue Auswahlbox ist nicht barrierefrei!

Glücklicherweise gibt es eine Lösung und sie heißt [ARIA](/de/docs/Web/Accessibility/ARIA). ARIA steht für „Accessible Rich Internet Application“ und es ist [eine W3C-Spezifikation](https://www.w3.org/TR/wai-aria/), die speziell dafür entwickelt wurde, was wir hier tun: Webanwendungen und benutzerdefinierte Steuerelemente barrierefrei zu machen. Es handelt sich im Wesentlichen um eine Reihe von Attributen, die HTML erweitern, damit wir Rollen, Zustände und Eigenschaften besser beschreiben können, als sei das Element, das wir gerade entworfen haben, das native Element, für das es sich ausgibt. Die Verwendung dieser Attribute kann durch Bearbeitung des HTML-Markup erfolgen. Wir aktualisieren auch die ARIA-Attribute über JavaScript, während der Benutzer seinen ausgewählten Wert aktualisiert.

### Das `role`-Attribut

Das Schlüsselattribut, das von [ARIA](/de/docs/Web/Accessibility/ARIA) verwendet wird, ist das [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attribut. Das [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attribut akzeptiert einen Wert, der definiert, für was ein Element verwendet wird. Jede Rolle definiert ihre eigenen Anforderungen und Verhaltensweisen. In unserem Beispiel verwenden wir die [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)-Rolle. Es handelt sich um eine „zusammengesetzte Rolle“, was bedeutet, dass Elemente mit dieser Rolle erwartet werden, Kinder zu haben, wobei jedes eine spezifische Rolle hat (in diesem Fall mindestens ein Kind mit der `option`-Rolle).

Es ist auch erwähnenswert, dass ARIA Rollen definiert, die standardmäßig auf Standard-HTML-Markup angewendet werden. Zum Beispiel entspricht das {{HTMLElement("table")}}-Element der Rolle `grid`, und das {{HTMLElement("ul")}}-Element entspricht der Rolle `list`. Da wir ein {{HTMLElement("ul")}}-Element verwenden, wollen wir sicherstellen, dass die `listbox`-Rolle unseres Steuerelements die `list`-Rolle des {{HTMLElement("ul")}}-Elements überschreibt. Zu diesem Zweck verwenden wir die Rolle `presentation`. Diese Rolle ist dafür gedacht, uns anzugeben, dass ein Element keine spezielle Bedeutung hat und lediglich zur Darstellung von Informationen verwendet wird. Wir werden sie auf unser {{HTMLElement("ul")}}-Element anwenden.

Um die [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)-Rolle zu unterstützten, müssen wir lediglich unser HTML folgendermaßen aktualisieren:

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
> Sowohl das `role`-Attribut als auch ein `class`-Attribut einzuschließen, ist nicht notwendig. Anstatt `.option` zu verwenden, verwenden Sie in Ihrem CSS die `[role="option"]`- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors).

### Das `aria-selected`-Attribut

Die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)-Attributs ist nicht genug. [ARIA](/de/docs/Web/Accessibility/ARIA) stellt auch viele Zustands- und Eigenschaftsattribute bereit. Je mehr und besser Sie sie verwenden, desto besser wird Ihr Steuerelement von unterstützenden Technologien verstanden werden. In unserem Fall werden wir uns auf ein Attribut beschränken: `aria-selected`.

Das `aria-selected`-Attribut wird verwendet, um zu kennzeichnen, welche Option derzeit ausgewählt ist; dies ermöglicht es unterstützenden Technologien, dem Benutzer mitzuteilen, was die aktuelle Auswahl ist. Wir werden es dynamisch mit JavaScript verwenden, um die ausgewählte Option jedes Mal zu markieren, wenn der Benutzer eine auswählt. Zu diesem Zweck müssen wir unsere `updateValue()`-Funktion überarbeiten:

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

Es mag einfacher erschienen sein, einen Bildschirmleser auf das außerhalb des Bildschirms liegende Auswahlmenü fokussieren zu lassen und unser gestaltetes Auswahlmenü zu ignorieren, aber dies ist keine barrierefreie Lösung. Bildschirmleser sind nicht nur auf blinde Menschen beschränkt; auch Menschen mit geringem Sehvermögen oder sogar perfekter Sehkraft verwenden sie. Aus diesem Grund können Sie nicht den Bildschirmleser auf ein Element fokussieren lassen, das außerhalb des Bildschirms liegt.

Unten ist das endgültige Ergebnis aller Änderungen (Sie erhalten ein besseres Gefühl dafür, indem Sie es mit einer unterstützenden Technologie wie [NVDA](https://www.nvaccess.org/) oder [VoiceOver](https://www.apple.com/accessibility/vision/) ausprobieren).

#### Live-Beispiel

Sehen Sie sich den [vollständigen Quellcode hier an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_5).

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

Wenn Sie weitermachen möchten, muss der Code in diesem Beispiel vor dem Gemeinschaftsgebrauch und der Wiederverwendbarkeit einige Verbesserungen erfahren. Dies ist eine Übung, die Sie versuchen können. Zwei Hinweise, die Ihnen dabei helfen: Das erste Argument für alle unsere Funktionen ist dasselbe, was bedeutet, dass diese Funktionen denselben Kontext benötigen. Es wäre ratsam, ein Objekt zu erstellen, um diesen Kontext zu teilen.

## Ein alternativer Ansatz: Verwendung von Radiobuttons

Im obigen Beispiel haben wir ein {{htmlelement('select')}}-Element mit nicht-semantischem HTML, CSS und JavaScript neu erfunden. Diese Auswahl bestand darin, eine Option aus einer begrenzten Anzahl von Optionen auszuwählen, was dieselbe Funktionalität wie eine namensgleiche Gruppe von {{htmlelement('input/radio', 'radio')}}-Schaltern ist.

Daher könnten wir dies mithilfe von Radiobuttons neu erfinden; schauen wir uns diese Option an.

Wir können mit einer vollständig semantischen, barrierefreien, ungeordneten Liste von {{htmlelement('input/radio','radio')}}-Schaltern beginnen, die mit einem zugehörigen {{htmlelement('label')}} versehen sind und die gesamte Gruppe mit einem semantisch passenden {{htmlelement('fieldset')}} und {{htmlelement('legend')}}-Paar kennzeichnen.

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

Wir werden ein wenig Styling auf die Liste der Radiobuttons (nicht auf die Legende/Feldsatz) anwenden, damit es etwas wie das frühere Beispiel aussieht, nur um zu zeigen, dass es möglich ist:

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

Ohne JavaScript und mit nur einem kleinen bisschen CSS können wir die Liste der Radiobuttons so stylen, dass nur der ausgewählte Punkt angezeigt wird. Wenn der Fokus innerhalb des `<ul>` im `<fieldset>` liegt, öffnet sich die Liste, und die auf- und abwärts (sowie links und rechts) Pfeile funktionieren, um die vorherigen und nächsten Elemente auszuwählen. Probieren Sie es aus:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

Dies funktioniert, zumindest bis zu einem gewissen Grad, ohne JavaScript. Wir haben ein ähnliches Steuerelement wie unser benutzerdefiniertes erstellt, das auch dann funktioniert, wenn das JavaScript fehlschlägt. Sieht nach einer tollen Lösung aus, oder? Nun, nicht zu 100%. Es funktioniert mit der Tastatur, aber nicht wie erwartet mit einem Mausklick. Es macht wahrscheinlich mehr Sinn, Webstandards als Grundlage für benutzerdefinierte Steuerelemente zu verwenden, anstatt sich auf Frameworks zu verlassen, um Elemente ohne native Semantik zu erstellen. Unser Steuerelement hat jedoch nicht die gleiche Funktionalität, die ein `<select>` nativ bietet.

Auf der positiven Seite ist dieses Steuerelement vollständig für einen Bildschirmleser zugänglich und vollständig über die Tastatur navigierbar. Dennoch ist dieses Steuerelement kein {{htmlelement('select')}}-Ersatz. Es gibt Funktionalitäten, die anders sind und/oder fehlen. Zum Beispiel navigieren alle vier Pfeiltasten durch die Optionen, aber durch Klicken auf den Abwärtspfeil, wenn der Benutzer auf dem letzten Schalter ist, wird er zum ersten Schalter gebracht; es stoppt nicht oben und unten in der Optionsliste wie ein `<select>`.

Wir überlassen es als Leserübung, diese fehlende Funktionalität hinzuzufügen.

## Fazit

Wir haben alle Grundlagen zum Erstellen eines benutzerdefinierten Formularsteuerelements gesehen, aber wie Sie sehen können, ist es nicht trivial. Bevor Sie Ihr eigenes benutzerdefiniertes Steuerelement erstellen, überlegen Sie, ob HTML alternative Elemente bietet, die Ihre Anforderungen angemessen unterstützen können. Wenn Sie ein benutzerdefiniertes Steuerelement erstellen müssen, ist es oft einfacher, sich auf Drittanbieterbibliotheken zu verlassen, anstatt Ihr eigenes zu erstellen. Aber wenn Sie Ihr eigenes erstellen, vorhandene Elemente modifizieren oder ein Framework verwenden, um ein vorgefertigtes Steuerelement zu implementieren, denken Sie daran, dass das Erstellen eines benutzbaren und barrierefreien Formularsteuerelements komplizierter ist, als es aussieht.

Hier sind einige Bibliotheken, die Sie in Betracht ziehen sollten, bevor Sie Ihren eigenen Code schreiben:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Wenn Sie alternative Steuerelemente über Radiobuttons, Ihr eigenes JavaScript oder mit einer Drittanbieterbibliothek erstellen, sorgen Sie dafür, dass es barrierefrei und funktionssicher ist; Das bedeutet, dass es mit einer Vielzahl von Browsern, deren Kompatibilität mit den Webstandards sie verwenden unterschiedlich ist, besser funktionieren muss. Viel Spaß!

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Wie strukturiert man ein HTML-Formular](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formularsteuerelemente](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formularsteuerelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudo-Klassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- [Formulare per JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- **Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente**
- [HTML-Formulare in alten Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Erweiterte Stilgestaltung für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [Eigenschafts-Kompatibilitätstabelle für Formularsteuerelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
