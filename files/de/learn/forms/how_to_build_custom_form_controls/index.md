---
title: Wie Sie benutzerdefinierte Formularsteuerelemente erstellen
slug: Learn/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}

Es gibt Fälle, in denen die verfügbaren nativen HTML-Formularsteuerelemente nicht ausreichend erscheinen. Zum Beispiel, wenn Sie [erweiterte Stile](/de/docs/Learn/Forms/Advanced_form_styling) für einige Steuerelemente wie das {{HTMLElement("select")}}-Element anwenden müssen oder wenn Sie benutzerdefinierte Verhaltensweisen anbieten möchten, können Sie in Betracht ziehen, Ihre eigenen Steuerelemente zu erstellen.

In diesem Artikel werden wir besprechen, wie man ein benutzerdefiniertes Steuerelement erstellt. Dazu werden wir an einem Beispiel arbeiten: dem Nachbau des {{HTMLElement("select")}}-Elements. Wir werden auch besprechen, wann, ob und ob es sinnvoll ist, ein eigenes Steuerelement zu erstellen und was zu beachten ist, wenn der Bau eines Steuerelements erforderlich ist.

> [!NOTE]
> Wir konzentrieren uns auf den Bau des Steuerelements, nicht darauf, wie man den Code generisch und wiederverwendbar macht; dies würde einige nicht triviale JavaScript-Codes und DOM-Manipulationen in einem unbekannten Kontext erfordern, und das fällt nicht in den Umfang dieses Artikels.

## Design, Struktur und Semantik

Bevor Sie ein benutzerdefiniertes Steuerelement erstellen, sollten Sie sich genau überlegen, was Sie wollen. Dies spart Ihnen wertvolle Zeit. Insbesondere ist es wichtig, alle Zustände Ihres Steuerelements klar zu definieren. Dazu ist es gut, mit einem vorhandenen Steuerelement zu beginnen, dessen Zustände und Verhalten gut bekannt sind, sodass Sie diese so weit wie möglich nachahmen können.

In unserem Beispiel werden wir das {{HTMLElement("select")}}-Element nachbauen. Hier ist das Ergebnis, das wir erreichen möchten:

![Die drei Zustände eines Auswahlkastens](custom-select.png)

Dieser Screenshot zeigt die drei Hauptzustände unseres Steuerelements: den normalen Zustand (links); den aktiven Zustand (in der Mitte) und den offenen Zustand (rechts).

In Bezug auf das Verhalten rekonstruieren wir ein natives HTML-Element. Daher sollte es dieselben Verhaltensweisen und Semantiken wie das native HTML-Element haben. Wir verlangen, dass unser Steuerelement sowohl mit der Maus als auch mit der Tastatur bedienbar ist und für einen Screenreader verständlich ist, genauso wie jedes native Steuerelement. Beginnen wir damit, zu definieren, wie das Steuerelement jeden Zustand erreicht:

**Das Steuerelement befindet sich im Normalzustand, wenn:**

- die Seite geladen wird.
- das Steuerelement aktiv war und der Benutzer irgendwo außerhalb davon klickt.
- das Steuerelement aktiv war und der Benutzer den Fokus mit der Tastatur auf ein anderes Steuerelement verschiebt (z. B. mit der

  <kbd>Tab</kbd>

  Taste).

**Das Steuerelement befindet sich im aktiven Zustand, wenn:**

- der Benutzer darauf klickt oder es auf einem Touchscreen berührt.
- der Benutzer die Tabulatortaste drückt und es den Fokus erhält.
- das Steuerelement im offenen Zustand war und der Benutzer darauf klickt.

**Das Steuerelement befindet sich im offenen Zustand, wenn:**

- das Steuerelement sich in einem anderen Zustand als geöffnet befindet und der Benutzer darauf klickt.

Sobald wir wissen, wie wir die Zustände ändern können, ist es wichtig zu definieren, wie der Wert des Steuerelements geändert wird:

**Der Wert ändert sich, wenn:**

- der Benutzer auf eine Option klickt, wenn das Steuerelement im offenen Zustand ist.
- der Benutzer die Pfeiltasten nach oben oder unten drückt, wenn das Steuerelement im aktiven Zustand ist.

**Der Wert ändert sich nicht, wenn:**

- der Benutzer die Pfeiltaste nach oben drückt, wenn die erste Option ausgewählt ist.
- der Benutzer die Pfeiltaste nach unten drückt, wenn die letzte Option ausgewählt ist.

Zum Schluss definieren wir, wie sich die Optionen des Steuerelements verhalten:

- Wenn das Steuerelement geöffnet ist, wird die ausgewählte Option hervorgehoben.
- Wenn sich die Maus über einer Option befindet, wird die Option hervorgehoben und die zuvor hervorgehobene Option in ihren Normalzustand zurückgesetzt.

Für unser Beispiel werden wir hier stoppen; jedoch wird ein aufmerksamer Leser bemerken, dass einige Verhaltensweisen fehlen. Zum Beispiel, was passiert Ihrer Meinung nach, wenn der Benutzer die Tabulatortaste drückt, während das Steuerelement im offenen Zustand ist? Die Antwort ist _nichts_. Okay, das richtige Verhalten scheint offensichtlich, aber die Tatsache ist, dass es sehr leicht ist, dieses Verhalten zu übersehen, da es nicht in unseren Spezifikationen definiert ist. Dies ist besonders in einer Teamumgebung der Fall, in der die Personen, die das Verhalten des Steuerelements entwerfen, andere sind als diejenigen, die es implementieren.

Ein weiteres interessantes Beispiel: Was passiert, wenn der Benutzer die Pfeiltasten nach oben oder unten drückt, während das Steuerelement im offenen Zustand ist? Dieses ist etwas kniffliger. Wenn Sie davon ausgehen, dass der aktive Zustand und der offene Zustand völlig unterschiedlich sind, lautet die Antwort erneut "nichts wird passieren", da wir keine Tastaturinteraktionen für den geöffneten Zustand definiert haben. Andererseits, wenn Sie annehmen, dass sich der aktive Zustand und der offene Zustand ein wenig überschneiden, könnte sich der Wert ändern, aber die Option wird definitiv nicht entsprechend hervorgehoben, wiederum weil wir keine Tastaturinteraktionen für Optionen definiert haben, wenn das Steuerelement im geöffneten Zustand ist (wir haben nur definiert, was passiert, wenn das Steuerelement geöffnet wird, aber nichts danach).

Wir müssen ein wenig weiter denken: Was ist mit der Esc-Taste? Das Drücken der <kbd>Esc</kbd>-Taste schließt ein geöffnetes Auswahlfeld. Denken Sie daran, dass, wenn Sie dieselbe Funktionalität wie das vorhandene native {{htmlelement('select')}} bieten möchten, es sich für alle Benutzer in genau derselben Weise wie der Select verhalten sollte, von der Tastatur über die Maus bis hin zu Touchscreen und Screenreader und jedem anderen Eingabegerät.

In unserem Beispiel sind die fehlenden Spezifikationen offensichtlich, daher werden wir sie behandeln, aber es kann ein echtes Problem für exotische neue Steuerelemente darstellen. Bei standardisierten Elementen, zu denen das {{htmlelement('select')}} gehört, haben die Autoren der Spezifikation sehr viel Zeit darauf verwendet, alle Interaktionen für jeden Anwendungsfall für jedes Eingabegerät zu spezifizieren. Neue Steuerelemente zu erstellen ist nicht so einfach, insbesondere wenn Sie etwas schaffen, das noch nie zuvor gemacht wurde und daher niemand die geringste Vorstellung davon hat, welches die erwarteten Verhaltensweisen und Interaktionen sind. Zumindest wurde Select schon einmal gemacht, also wissen wir, wie es sich verhalten sollte!

Das Entwerfen neuer Interaktionen ist im Allgemeinen nur eine Option für sehr große Branchenakteure, die genug Reichweite haben, dass eine von ihnen geschaffene Interaktion zu einem Standard werden kann. Zum Beispiel führte Apple 2001 das Scrollrad mit dem iPod ein. Sie hatten den Marktanteil, um erfolgreich eine völlig neue Art der Interaktion mit einem Gerät einzuführen, etwas, das die meisten Geräteunternehmen nicht tun können.

Am besten ist es, keine neuen Benutzerinteraktionen zu erfinden. Für jede Interaktion, die Sie hinzufügen, ist es unerlässlich, Zeit in der Entwurfsphase zu verbringen; wenn Sie ein Verhalten schlecht definieren oder eines vergessen, wird es sehr schwer sein, es neu zu definieren, sobald die Benutzer sich daran gewöhnt haben. Wenn Sie Zweifel haben, fragen Sie nach den Meinungen anderer und, wenn Sie das Budget dafür haben, zögern Sie nicht, [Benutzertests durchzuführen](https://en.wikipedia.org/wiki/Usability_testing). Dieser Prozess wird als UX-Design bezeichnet. Wenn Sie mehr über dieses Thema erfahren möchten, sollten Sie sich die folgenden hilfreichen Ressourcen ansehen:

- [UXMatters.com](https://www.uxmatters.com/)
- [Der UX-Design-Abschnitt von Smashing Magazine](https://www.smashingmagazine.com/)

> [!NOTE]
> In den meisten Systemen gibt es auch eine Möglichkeit, das {{HTMLElement("select")}}-Element mit der Tastatur zu öffnen, um alle verfügbaren Auswahlmöglichkeiten zu sehen (dies entspricht dem Klicken auf das {{HTMLElement("select")}}-Element mit der Maus). Dies wird erreicht mit <kbd>Alt</kbd> + <kbd>Down</kbd> auf Windows. Wir haben dies in unserem Beispiel nicht implementiert, aber es wäre einfach zu tun, da der Mechanismus bereits für das `click`-Ereignis implementiert wurde.

## Definition der HTML-Struktur und (einige) Semantiken

Jetzt, da die Grundfunktionalität des Steuerelements entschieden ist, ist es an der Zeit, es zu bauen. Der erste Schritt besteht darin, seine HTML-Struktur zu definieren und ihm einige grundlegende Semantiken zu geben. Hier ist, was wir brauchen, um ein {{HTMLElement("select")}}-Element nachzubauen:

```html
<!-- Dies ist unser Hauptcontainer für unser Steuerelement.
     Das tabindex-Attribut ermöglicht dem Benutzer, das Steuerelement zu fokussieren.
     Wir werden später sehen, dass es besser ist, es über JavaScript zu setzen. -->
<div class="select" tabindex="0">
  <!-- Dieser Container wird verwendet, um den aktuellen Wert des Steuerelements anzuzeigen -->
  <span class="value">Cherry</span>

  <!-- Dieser Container enthält alle Optionen, die für unser Steuerelement verfügbar sind.
       Da es sich um eine Liste handelt, ergibt es Sinn, das ul-Element zu verwenden. -->
  <ul class="optList">
    <!-- Jede Option enthält nur den anzuzeigenden Wert, wir werden später sehen,
         wie man den realen Wert handhabt, der mit den Formulardaten gesendet wird -->
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

Beachten Sie die Verwendung von Klassennamen; diese identifizieren jeden relevanten Teil unabhängig von den tatsächlich verwendeten HTML-Elementen. Dies ist wichtig, um sicherzustellen, dass wir unser CSS und JavaScript nicht an eine starke HTML-Struktur binden, sodass wir später Implementierungsänderungen vornehmen können, ohne den Code zu brechen, der das Steuerelement verwendet. Zum Beispiel, was passiert, wenn Sie später das Äquivalent des {{HTMLElement("optgroup")}}-Elements implementieren möchten?

Klassennamen liefern jedoch keinen semantischen Wert. In diesem aktuellen Zustand "sieht" der Screenreader-Benutzer nur eine ungeordnete Liste. Wir werden später ARIA-Semantiken hinzufügen.

## Erstellen des Aussehens mit CSS

Da wir jetzt eine Struktur haben, können wir beginnen, unser Steuerelement zu gestalten. Der ganze Sinn des Aufbaus dieses benutzerdefinierten Steuerelements besteht darin, es genau nach unseren Vorstellungen gestalten zu können. Zu diesem Zweck werden wir unsere CSS-Arbeit in zwei Teile aufteilen: Der erste Teil sind die CSS-Regeln, die unbedingt notwendig sind, damit unser Steuerelement sich wie ein {{HTMLElement("select")}}-Element verhält, und der zweite Teil besteht aus den hübschen Stilen, die verwendet werden, um es so aussehen zu lassen, wie wir es möchten.

### Erforderliche Stile

Die erforderlichen Stile sind diejenigen, die notwendig sind, um die drei Zustände unseres Steuerelements zu handhaben.

```css
.select {
  /* Dies schafft einen Positionierungskontext für die Optionsliste;
     das Hinzufügen dieser zu `.select:focus-within` wird eine bessere Option sein, wenn es vollständig unterstützt wird
  */
  position: relative;

  /* Dies macht unser Steuerelement gleichzeitig teil des Textflusses und größenanpassbar */
  display: inline-block;
}
```

Wir brauchen eine zusätzliche Klasse `active`, um das Aussehen und Gefühl unseres Steuerelements im aktiven Zustand zu definieren. Da unser Steuerelement fokussierbar ist, verdoppeln wir diesen benutzerdefinierten Stil mit der {{cssxref(":focus")}}-Pseudoklasse, um sicherzustellen, dass sie sich gleich verhalten.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* Diese box-shadow-Eigenschaft ist nicht unbedingt erforderlich, es ist jedoch zwingend notwendig, 
     dass der aktive Zustand sichtbar ist, insbesondere für Tastaturbenutzer, sodass wir sie als Standardwert verwenden. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Jetzt kümmern wir uns um die Liste der Optionen:

```css
/* Der .select-Selektor hier hilft sicherzustellen, dass wir nur 
   Elemente innerhalb unseres Steuerelements auswählen. */
.select .optList {
  /* Dies stellt sicher, dass unsere Liste von Optionen unterhalb des Wertes angezeigt wird
     und aus dem HTML-Fluss heraus ist */
  position: absolute;
  top: 100%;
  left: 0;
}
```

Wir benötigen eine zusätzliche Klasse, um zu handhaben, wann die Liste der Optionen verborgen ist. Dies ist notwendig, um die Unterschiede zwischen dem aktiven Zustand und dem offenen Zustand, die nicht genau übereinstimmen, zu verwalten.

```css
.select .optList.hidden {
  /* Dies ist eine einfache Möglichkeit, die Liste auf zugängliche Weise zu verbergen;
     wir werden später mehr über Zugänglichkeit sprechen */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> Wir könnten auch `transform: scale(1, 0)` verwendet haben, um der Optionsliste keine Höhe und volle Breite zu geben.

### Verschönerung

So, jetzt, da wir die Grundfunktionalität an Ort und Stelle haben, kann der Spaß beginnen. Das folgende ist nur ein Beispiel für das, was möglich ist, und wird mit dem Screenshot am Anfang dieses Artikels übereinstimmen. Sie sollten jedoch frei experimentieren und sehen, was Sie herausfinden können.

```css
.select {
  /* Die Berechnungen gehen davon aus, dass 1em 16px entspricht, was der Standardwert in den meisten Browsern ist.
     Wenn Sie mit der Umrechnung von px in em verloren sind, versuchen Sie https://nekocalc.com/px-to-em-converter */
  font-size: 0.625em; /* dies (10px) ist der neue Schriftgrößenkontext für Em-Werte in diesem Kontext */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  /* Wir brauchen extra Platz für den Pfeil nach unten, den wir hinzufügen werden */
  padding: 0.1em 2.5em 0.2em 0.5em;
  width: 10em; /* 100px */

  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);

  /* Die erste Deklaration ist für Browser, die keine linearen Verläufe unterstützen. */
  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* Da der Wert breiter sein kann als unser Steuerelement, müssen wir sicherstellen, dass er die Breite des Steuerelements nicht verändert.
     Wenn der Inhalt überläuft, wird ein Auslassungszeichen angezeigt */
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
```

Wir brauchen kein zusätzliches Element, um den Pfeil nach unten zu gestalten; stattdessen verwenden wir das {{cssxref("::after")}}-Pseudo-Element. Es könnte auch mit einem einfachen Hintergrundbild auf der `select`-Klasse implementiert werden.

```css
.select::after {
  content: "▼"; /* Wir verwenden das Unicode-Zeichen U+25BC; stellen Sie sicher, dass ein charset-Meta-Tag gesetzt ist */
  position: absolute;
  z-index: 1; /* Dies wird wichtig sein, um zu verhindern, dass der Pfeil die Optionsliste überlappt */
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

Als Nächstes gestalten wir die Liste der Optionen:

```css
.select .optList {
  z-index: 2; /* Wir haben explizit erklärt, dass die Liste der Optionen immer über dem Pfeil nach unten liegt */

  /* Dies setzt den Standardstil des UL-Elements zurück */
  list-style: none;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  /* Wenn die Werte kleiner als das Steuerelement sind, wird die Liste der Optionen
     so breit wie das Steuerelement selbst sein */
  min-width: 100%;

  /* Wenn die Liste zu lang ist, läuft ihr Inhalt vertikal über,
     (was automatisch eine vertikale Bildlaufleiste hinzufügt) aber nie horizontal
     (weil wir keine Breite definiert haben, passt sich die Liste automatisch an ihre Breite an.
     Wenn das nicht möglich ist, wird der Inhalt abgeschnitten) */
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

Für die Optionen müssen wir eine `highlight`-Klasse hinzufügen, um den Wert, den der Benutzer wählen wird (oder schon gewählt hat), identifizieren zu können.

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

Hier ist das Ergebnis mit unseren drei Zuständen ([Schauen Sie sich den Quellcode hier an](/de/docs/Learn/Forms/How_to_build_custom_form_controls/Example_1)):

#### Basiszustand

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

## Beleben Sie Ihr Steuerelement mit JavaScript

Jetzt, da unser Design und unsere Struktur bereit sind, können wir den JavaScript-Code schreiben, um das Steuerelement tatsächlich zum Funktionieren zu bringen.

> [!WARNING]
> Das Folgende ist pädagogischer Code, nicht Produktionscode, und sollte nicht wie er ist verwendet werden. Er ist weder zukunftssicher noch funktioniert er in älteren Browsern. Er enthält auch redundante Teile, die im Produktionscode optimiert werden sollten.

### Warum funktioniert es nicht?

Bevor wir beginnen, ist es wichtig zu bedenken, dass **JavaScript im Browser eine unzuverlässige Technologie ist**. Benutzerdefinierte Steuerelemente sind auf JavaScript angewiesen, um alles zusammenzuführen. Es gibt jedoch Fälle, in denen JavaScript im Browser nicht ausgeführt werden kann:

- Der Benutzer hat JavaScript deaktiviert: Das ist ungewöhnlich; sehr wenige Menschen deaktivieren heute JavaScript.
- Das Skript wurde nicht geladen: Dies ist einer der häufigsten Fälle, besonders in der mobilen Welt, wo das Netzwerk nicht sehr zuverlässig ist.
- Das Skript ist fehlerhaft: Diese Möglichkeit sollten Sie immer in Betracht ziehen.
- Das Skript steht in Konflikt mit einem Drittanbieterskript: Dies kann passieren bei Tracking-Skripten oder irgendwelchen Bookmarklets, die der Benutzer verwendet.
- Das Skript steht in Konflikt mit oder wird von einer Browsererweiterung beeinflusst (wie die [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/)-Erweiterung von Firefox oder die [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba)-Erweiterung von Chrome).
- Der Benutzer verwendet einen älteren Browser, und eines der von Ihnen benötigten Features wird nicht unterstützt: Dies wird häufig passieren, wenn Sie cutting-edge APIs verwenden.
- Der Benutzer interagiert mit dem Inhalt, bevor das JavaScript vollständig heruntergeladen, geparst und ausgeführt wurde.

Aufgrund dieser Risiken ist es sehr wichtig zu überlegen, was passiert, wenn Ihr JavaScript nicht funktioniert. Wir werden Optionen in Betracht ziehen und die Grundlagen in unserem Beispiel abdecken (eine vollständige Diskussion zur Lösung dieses Problems für alle Szenarien würde ein Buch erfordern). Denken Sie einfach daran, dass es von entscheidender Bedeutung ist, Ihr Skript generisch und wiederverwendbar zu machen.

In unserem Beispiel, wenn unser JavaScript-Code nicht läuft, werden wir auf die Anzeige eines standardmäßigen {{HTMLElement("select")}}-Elements zurückgreifen. Wir schließen unser Steuerelement und das {{HTMLElement("select")}}-Element ein; welches angezeigt wird, hängt von der Klasse des Body-Elements ab, wobei die Klasse des Body-Elements von dem Skript aktualisiert wird, das das Steuerelement ausführt, wenn es erfolgreich geladen wird.

Um dies zu erreichen, benötigen wir zwei Dinge:

Erstens müssen wir vor jeder Instanz unseres benutzerdefinierten Steuerelements ein reguläres {{HTMLElement("select")}}-Element hinzufügen. Selbst wenn unser JavaScript wie erhofft funktioniert, hat dieses "zusätzliche" Select einen Vorteil: Wir werden dieses Select verwenden, um Daten von unserem benutzerdefinierten Steuerelement zusammen mit dem Rest unserer Formulardaten zu senden. Wir werden dies später ausführlicher besprechen.

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

Zweitens benötigen wir zwei neue Klassen, um das nicht benötigte Element auszublenden: Wir blenden das benutzerdefinierte Steuerelement aus, wenn unser Skript nicht läuft, oder das "echte" {{HTMLElement("select")}}-Element, wenn es läuft. Beachten Sie, dass unser HTML-Code standardmäßig unser benutzerdefiniertes Steuerelement ausblendet.

```css
.widget select,
.no-widget .select {
  /* Dieser CSS-Selektor sagt im Grunde:
     - entweder haben wir die Klasse des Body-Elements auf "widget" gesetzt und somit verbergen wir das eigentliche <select>-Element
     - oder wir haben die Klasse des Body-Elements nicht geändert, daher ist die Klasse des Body-Elements noch "no-widget",
       sodass die Elemente, deren Klasse "select" ist, verborgen sein müssen */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

Dieses CSS blendet eines der Elemente visuell aus, aber es steht immer noch Screenreadern zur Verfügung.

Jetzt brauchen wir einen JavaScript-Schalter, um festzustellen, ob das Skript läuft oder nicht. Dieser Schalter besteht aus ein paar Zeilen: Wenn unser Skript während der Seitenladezeit läuft, entfernt es die `no-widget`-Klasse und fügt die `widget`-Klasse hinzu, wodurch die Sichtbarkeit des {{HTMLElement("select")}}-Elements und des benutzerdefinierten Steuerelements umgekehrt wird.

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
    <option>Le
