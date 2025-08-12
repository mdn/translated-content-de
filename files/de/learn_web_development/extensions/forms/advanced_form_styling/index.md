---
title: Erweiterte Formular-Styling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Formularsteuerungen zu stylen, die schwieriger zu gestalten sind — die Kategorien "schlecht" und "hässlich". Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen perfekt einfach zu gestalten; jetzt werden wir uns dem Styling der problematischeren Elemente widmen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Wiederholung des vorherigen Artikels:

**Das Schlechte**: Einige Elemente sind schwerer zu gestalten und erfordern komplexeres CSS oder spezifische Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können nicht gründlich mit CSS gestaltet werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare `select`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Gruppe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Sprechen wir zunächst über die [`appearance`](/de/docs/Web/CSS/appearance)-Eigenschaft, die nützlich ist, um alle oben genannten Elemente besser gestaltbar zu machen.

## `appearance`: Steuerung von OS-basiertem Styling

Im vorherigen Artikel haben wir erwähnt, dass das Styling von Web-Formularsteuerungen historisch gesehen größtenteils vom zugrunde liegenden Betriebssystem abgeleitet wurde, was ein Teil des Grundes für die Schwierigkeit ist, das Aussehen dieser Steuerungen anzupassen.

Die {{cssxref("appearance")}}-Eigenschaft wurde entwickelt, um zu steuern, welches OS- oder systemebenen Styling auf Web-Formularsteuerungen angewendet wurde. Der mit Abstand hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass eine von Ihnen angewendete Steuerung das systembasierte Styling verwendet, soweit möglich, und ermöglicht es Ihnen, die Stile selbst mit CSS aufzubauen.

Zum Beispiel, betrachten wir die folgenden Steuerungen:

```html
<form>
  <p>
    <label for="search">search: </label>
    <input id="search" name="search" type="search" />
  </p>
  <p>
    <label for="text">text: </label>
    <input id="text" name="text" type="text" />
  </p>
  <p>
    <label for="date">date: </label>
    <input id="date" name="date" type="datetime-local" />
  </p>
  <p>
    <label for="radio">radio: </label>
    <input id="radio" name="radio" type="radio" />
  </p>
  <p>
    <label for="checkbox">checkbox: </label>
    <input id="checkbox" name="checkbox" type="checkbox" />
  </p>
  <p><input type="submit" value="submit" /></p>
  <p><input type="button" value="button" /></p>
</form>
```

Wenn Sie das folgende CSS darauf anwenden, wird das systembasierte Styling entfernt.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie in Ihrem System aussehen — Standard links und mit dem obigen CSS rechts angewendet ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen besteht der Effekt darin, den stilisierten Rahmen zu entfernen, was das CSS-Styling etwas einfacher macht, aber nicht unbedingt notwendig ist. In ein paar Fällen, wie z. B. bei Optionsfeldern und Kontrollkästchen, wird es viel nützlicher. Wir werden uns diese jetzt ansehen.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war besonders nützlich für ein konsistentes Styling von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elementen. Ohne diesen Wert erlaubte Safari nicht, {{cssxref("height")}}- oder {{cssxref("font-size")}}-Werte darauf festzulegen. Dies ist jedoch seit Safari 16 nicht mehr der Fall. Möglicherweise möchten Sie `input[type="search"]` immer noch explizit mit `appearance: none;` ansprechen, wenn Ihre Browser-Support-Matrix Safari-Versionen älter als 16 enthält.

In Suchfeldern verschwindet der "x" Löschen-Button, der erscheint, wenn der Wert nicht null ist, wenn das Eingabefeld in Edge und Chrome den Fokus verliert, bleibt jedoch in Safari sichtbar. Um ihn via CSS zu entfernen, können Sie die folgende Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Kontrollkästchen und Optionsfeldern

Das Stylen eines Kontrollkästchens oder eines Optionsfeldes ist standardmäßig schwierig. Die Größen von Kontrollkästchen und Optionsfeldern sind mit ihrem Standarddesign nicht dafür gedacht, geändert zu werden, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen.

Zum Beispiel, betrachten wir diesen einfachen Testfall:

```html
<label
  ><span><input type="checkbox" name="q5" value="true" /></span> True</label
>
<label
  ><span><input type="checkbox" name="q5" value="false" /></span> False</label
>
```

```css
span {
  display: inline-block;
  background: red;
}

input[type="checkbox"] {
  width: 100px;
  height: 100px;
}
```

Verschiedene Browser handhaben das Kontrollkästchen und den `span` auf unterschiedliche, oft unschöne Weisen:

| Browser                             | Darstellung                                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgrauer Rand](firefox-mac-checkbox.png)                                  |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauem Rand](firefox-windows-checkbox.png)                            |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecke mit 1px mittelgrauem Rand](chrome-mac-checkbox.png)                                  |
| Chrome 63 (Windows 10)              | ![Rechteckige Ränder mit leicht grau hinterlegtem Hintergrund statt weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Ränder mit leicht grau hinterlegtem Hintergrund statt weiß.](edge-checkbox.png)           |

#### Verwendung von appearance: none bei Radios/Kontrollkästchen

Wie wir bereits gezeigt haben, können Sie das Standardaussehen eines Kontrollkästchens oder Optionsfeldes ganz entfernen mit {{cssxref("appearance", "appearance: none;")}}. Schauen Sie sich dieses Beispiel HTML an:

```html
<form>
  <fieldset>
    <legend>Fruit preferences</legend>

    <p>
      <label>
        <input type="checkbox" name="fruit" value="cherry" />
        I like cherry
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit" value="banana" disabled />
        I can't like banana
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit" value="strawberry" />
        I like strawberry
      </label>
    </p>
  </fieldset>
</form>
```

Nun lassen Sie uns diese mit einem benutzerdefinierten Kontrollkästchendesign gestalten. Beginnen wir damit, die ursprünglichen Kontrollkästchen unzustylen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}}- und {{cssxref(":disabled")}}-Pseudoklassen verwenden, um das Aussehen unseres benutzerdefinierten Kontrollkästchens je nach Status zu ändern:

```css
input[type="checkbox"] {
  position: relative;
  width: 1em;
  height: 1em;
  border: 1px solid gray;
  /* Adjusts the position of the checkboxes on the text baseline */
  vertical-align: -2px;
  /* Set here so that Windows' High-Contrast Mode can override */
  color: green;
}

input[type="checkbox"]::before {
  content: "✔";
  position: absolute;
  font-size: 1.2em;
  right: -1px;
  top: -0.3em;
  visibility: hidden;
}

input[type="checkbox"]:checked::before {
  /* Use `visibility` instead of `display` to avoid recalculating layout */
  visibility: visible;
}

input[type="checkbox"]:disabled {
  border-color: black;
  background: #dddddd;
  color: gray;
}
```

In [im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erfahren Sie mehr über solche Pseudoklassen und mehr; die oben genannte machen Folgendes:

- `:checked` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem aktivierten Zustand — der Benutzer hat darauf geklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem deaktivierten Zustand — es kann nicht interagiert werden.

Das Live-Ergebnis sehen Sie hier:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Stilieren von Optionsfeldern.
- [Umschalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Umschalter gestylt ist.

Wenn Sie diese Kontrollkästchen in einem Browser ansehen, der {{cssxref("appearance")}} nicht unterstützt, geht Ihr benutzerdefiniertes Design verloren, aber sie werden immer noch wie Kontrollkästchen aussehen und benutzbar sein.

## Was kann gegen die "hässlichen" Elemente getan werden?

Nun wenden wir uns den "hässlichen" Steuerungen zu — denjenigen, die wirklich schwer gründlich zu gestalten sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), und feedback-gestützte Steuerungen wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standarddarstellungen in den Browsern haben, und während Sie sie in gewisser Weise gestalten können, sind einige Teile ihrer internen Struktur unmöglich zu gestalten.

Wenn Sie bereit sind, einige Unterschiede im Look and Feel in Kauf zu nehmen, können Sie einige einfache Stilmittel verwenden, um die Dinge erheblich zu verbessern. Dazu gehört die konsistente Größenanpassung und Gestaltung von Eigenschaften wie `background-color` und die Verwendung von `appearance`, um einige systembasierte Styles zu entfernen.

Betrachten Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formularelemente in Aktion zeigt:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

In diesem Beispiel wurde das folgende CSS angewendet:

```css
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

form > div {
  margin-bottom: 20px;
}

select {
  appearance: none;
  width: 100%;
  height: 100%;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 3px;
  right: 10px;
  position: absolute;
}

button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

label {
  margin-bottom: 5px;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

> [!NOTE]
> Wenn Sie diese Beispiele gleichzeitig in verschiedenen Browsern testen möchten, [finden Sie es hier live](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (siehe auch [hier für den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Beachten Sie auch, dass wir der Seite etwas JavaScript hinzugefügt haben, das die Dateien auflistet, die vom Dateipicker ausgewählt wurden, unterhalb der Steuerung selbst. Dies ist eine vereinfachte Version des Beispiels auf der Referenzseite zu [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples).

Wie Sie sehen, ist es uns recht gut gelungen, diese auf modernen Browsern einheitlich aussehen zu lassen.

Wir haben einige globale normalisierende CSS-Stile auf alle Steuerungen und ihre Beschriftungen angewendet, damit sie gleichmäßig dimensioniert sind, die Schriftart des übergeordneten Elements übernehmen usw., wie im vorherigen Artikel erwähnt:

```css
button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}
```

Wir haben den Steuerungen auch gleichmäßige Schatten und abgerundete Ecken hinzugefügt, wo es sinnvoll ist:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Bereichstypen, Fortschrittsbalken und Zählern fügen sie nur einen hässlichen Rahmen um den Steuerbereich hinzu, daher macht es keinen Sinn.

Sprechen wir über einige Besonderheiten der einzelnen Steuerungstypen und heben dabei Schwierigkeiten hervor.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare `select`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Gruppe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt ermöglicht wie bei regulären DOM-Elementen. In unterstützenden Browsern und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen altehrwürdigen Techniken für `<select>`-Elemente kümmern.

Das Stylen von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) erlaubt ein akzeptables Maß an Anpassung, vorausgesetzt, Sie möchten das Aussehen und das Gefühl nicht zu sehr von den Standardeinstellungen abweichen. Es ist uns gelungen, die Boxen ziemlich einheitlich und konsistent aussehen zu lassen. Die vom Datalist aktivierte Steuerung ist ohnehin ein `<input type="text">`, was wir also nicht als Problem erwartet hätten.

Zwei Dinge sind etwas problematischer. Erstens unterscheidet sich das "Pfeil"-Symbol des Select, das anzeigt, dass es ein Dropdown-Menü ist, je nach Browser. Außerdem neigt es dazu, sich zu ändern, wenn Sie die Größe des Select-Feldes erhöhen oder es in hässlicher Weise neu dimensionieren. Um dieses Problem in unserem Beispiel zu beheben, haben wir zunächst unseren alten Freund `appearance: none` verwendet, um das Symbol ganz zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol mit generiertem Inhalt erstellt. Wir haben eine zusätzliche Hülle um die Steuerung gesetzt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht mit `<select>`-Elementen funktionieren (ihr Inhalt wird vollständig vom Browser kontrolliert):

```html
<label for="select">Select a fruit</label>
<div class="select-wrapper">
  <select id="select" name="select">
    <option>Banana</option>
    <option>Cherry</option>
    <option>Lemon</option>
  </select>
</div>
```

Dann verwenden wir generierten Inhalt, um einen kleinen Pfeil nach unten zu erzeugen und ihn mit Positionierung an die richtige Stelle zu setzen:

```css
.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
```

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Aussehen des Kastens haben, der erscheint und die Optionen enthält, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die Schriftart vom übergeordneten Element erben, aber Dinge wie Abstände und Farben können nicht festgelegt werden. Das gleiche gilt für die Autovervollständigungsliste, die bei {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich vollständige Kontrolle über die Stilgestaltung der Optionen benötigen, müssen Sie entweder eine Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu erzeugen, oder Ihre eigene erstellen. Bei `<select>` könnten Sie auch das `multiple`-Attribut verwenden, welches alle Optionen auf der Seite anzeigt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise auch nicht in das von Ihnen gewünschte Design, aber es ist erwähnenswert!

### Dateneingabetypen

Die Dateneingabetypen ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe größere Problem. Die eigentliche Umschließungsbox ist ebenso einfach zu gestalten wie ein beliebiges Texteingabefeld, und was wir in diesem Demo haben, sieht gut aus.

Die internen Teile der Steuerung (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie verwenden können, um Werte zu erhöhen/verringern) sind jedoch überhaupt nicht gestaltbar, und Sie können sie nicht entfernen, indem Sie `appearance: none;` verwenden. Wenn Sie wirklich vollständige Kontrolle über die Stilgestaltung benötigen, müssen Sie entweder eine Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu erzeugen, oder Ihre eigene erstellen.

> [!NOTE]
> Es lohnt sich, hier auch [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) zu erwähnen — dieser hat auch einen Spinner, mit dem Sie Werte erhöhen/verringern können, leidet möglicherweise unter demselben Problem. Im Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher, und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Erscheinungsbild von `text` hat, aber auf Geräten mit Touch-Tastaturen das numerische Tastenfeld anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist mühsam zu gestalten. Sie können etwas wie das Folgende verwenden, um die Standard-Schieberleiste komplett zu entfernen und durch eine benutzerdefinierte Gestaltung zu ersetzen (eine dünne rote Leiste, in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Ziehgriffs der Bereichssteuerung anzupassen — um vollständige Kontrolle über das Bereichs-Styling zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, einschließlich mehrerer nicht-standardmäßiger, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS Tricks für eine detaillierte Beschreibung dessen an, was erforderlich ist.

### Farbeingabetypen

Eingabesteuerungen des Typs Farbe sind nicht allzu schlecht. In unterstützenden Browsern, neigen sie dazu, Ihnen einen Block aus Vollfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen und nur den Farbblock mit so etwas wie dem Folgenden lassen:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Ein maßgeschneidertes Lösung ist jedoch die einzig mögliche Möglichkeit, etwas signifikant Anderes zu erreichen.

### Dateieingabetypen

Eingaben des Typs Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu schaffen, das dem Rest der Seite angemessen aussieht — die Ausgangszeile, die Teil der Steuerung ist, wird die Schrift des übergeordneten Elements erben, wenn Sie die Eingabe dazu auffordern, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen nach Belieben gestalten; wir haben es schließlich erstellt.

Das einzige Problem mit Dateipickern ist, dass die Schaltfläche, die Sie drücken, um den Dateipicker zu öffnen, überhaupt nicht gestaltbar ist — sie kann nicht in der Größe angepasst oder eingefärbt werden, und sie akzeptiert nicht einmal eine andere Schriftart.

Eine Möglichkeit, dies zu umgehen, besteht darin, die Tatsache auszunutzen, dass, wenn Sie ein Label mit einer Formularsteuerung verbinden, das Anklicken des Labels die Steuerung aktiviert. Also könnten Sie die tatsächliche Formulareingabe verstecken, indem Sie so etwas verwenden:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so gestalten, dass es wie eine Schaltfläche fungiert, die, wenn sie gedrückt wird, den Dateipicker wie erwartet öffnet:

```css
label[for="file"] {
  box-shadow: 1px 1px 3px #cccccc;
  background: linear-gradient(to bottom, #eeeeee, #cccccc);
  border: 1px solid darkgrey;
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, white, #dddddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #cccccc;
}
```

Sie können das Ergebnis des obenstehenden CSS-Stylings im Live-Beispiel unten sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live, und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Zähler und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten. Wie Sie im vorherigen Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwierig in irgendeiner Weise zu gestalten. Sie behandeln Höhenangaben nicht konsistent miteinander und zwischen Browsern, Sie können den Hintergrund einfärben, aber nicht den Vordergrundbalken, und die Einstellung `appearance: none` auf ihnen macht die Dinge nicht besser, sondern schlimmer.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Features zu erstellen, wenn Sie über das Styling die Kontrolle haben wollen, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es nach wie vor Schwierigkeiten beim Einsatz von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Derzeit ist die beste Lösung, mehr über die Unterstützung von CSS bei den verschiedenen Browsern für HTML-Formularsteuerungen zu lernen.

Im nächsten Artikel dieses Moduls werden wir die Erstellung von [vollständig angepassten `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dafür verfügbaren modernen HTML- und CSS-Funktionen untersuchen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
