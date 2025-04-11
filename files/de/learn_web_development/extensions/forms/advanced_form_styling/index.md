---
title: Erweiterte Formularstilierung
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel erfahren Sie, was mit CSS gemacht werden kann, um die Arten von Formularelementen zu stylen, die schwieriger zu gestalten sind – die Kategorien „schlecht“ und „hässlich“. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen sehr einfach zu stylen; nun werden wir uns dem Stylen der problematischeren Elemente widmen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; Lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Wiederholung aus dem vorherigen Artikel haben wir:

**Das Schlechte**: Einige Elemente sind schwieriger zu gestalten und erfordern komplexeres CSS oder einige spezifischere Tricks:

- Kontrollkästchen und Radiobuttons
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können nicht vollständig mit CSS gestaltet werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Sprechen wir zunächst über die [`appearance`](/de/docs/Web/CSS/appearance) Eigenschaft, die sehr nützlich ist, um all die oben genannten Elemente formatierbarer zu machen.

## appearance: OS-Ebene-Styling kontrollieren

Im vorherigen Artikel haben wir gesagt, dass das Styling von Webformular-Steuerelementen historisch weitgehend vom zugrunde liegenden Betriebssystem übernommen wurde, was Teil des Problems bei der Anpassung des Erscheinungsbildes dieser Steuerelemente darstellt.

Die {{cssxref("appearance")}} Eigenschaft wurde entwickelt, um zu kontrollieren, welcher OS- oder systembasierte Stil auf Webformular-Steuerelemente angewendet wurde. Bei weitem der nützlichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dadurch wird verhindert, dass ein von Ihnen angewendetes Steuerelement ein systemgesteuertes Styling verwendet, soweit dies möglich ist, und lässt Sie selbst die Stile mit CSS aufbauen.

Beispielsweise nehmen wir die folgenden Steuerelemente:

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

Mit dem folgenden CSS wird das systemgesteuerte Styling entfernt.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt, wie sie auf Ihrem System aussehen — standardmäßig links und mit dem obigen CSS rechts ([finden Sie es hier ebenfalls](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen hat dies zur Folge, dass der stilisierte Rahmen entfernt wird, was das CSS-Styling etwas erleichtert, aber nicht wirklich wesentlich ist. In einigen Fällen — Such- und Radiobuttons/Kontrollkästchen — wird es wesentlich nützlicher. Schauen wir uns diese jetzt an.

### Suchfelder bändigen

[`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search) ist im Grunde nur ein Texteingabefeld, warum ist `appearance: none;` hier nützlich? Die Antwort ist, dass Safari-Suchfelder einige Styling-Beschränkungen aufweisen – Sie können beispielsweise ihre `height` oder `font-size` nicht frei anpassen.

Dies kann mit unserem Freund `appearance: none;` behoben werden, was das Standard-Erscheinungsbild deaktiviert:

```css
input[type="search"] {
  appearance: none;
}
```

Im folgenden Beispiel können Sie zwei identisch gestylte Suchfelder sehen. Das rechte hat `appearance: none;` angewendet, und das linke nicht. Wenn Sie es in Safari auf macOS betrachten, werden Sie sehen, dass das linke nicht richtig dimensioniert ist.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

Interessanterweise behebt das Festlegen von Rahmen/Hintergrund im Suchfeld auch dieses Problem. Das folgende gestaltete Suchfeld hat `appearance: none;` nicht angewendet, leidet jedoch nicht unter dem gleichen Problem in Safari wie das vorherige Beispiel.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> [!NOTE]
> Sie haben vielleicht bemerkt, dass in dem Suchfeld das "x"-Löschsymbol, das erscheint, wenn der Wert der Suche nicht null ist, in Edge und Chrome verschwindet, wenn das Eingabefeld den Fokus verliert, in Safari jedoch bleibt. Um es über CSS zu entfernen, können Sie `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button { display: none; }` verwenden.

### Styling von Kontrollkästchen und Radiobuttons

Das Styling eines Kontrollkästchens oder eines Radiobuttons ist standardmäßig knifflig. Die Größen von Kontrollkästchen und Radiobuttons sollen mit ihren Standarddesigns nicht verändert werden und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen.

Betrachten Sie beispielsweise diesen einfachen Testfall:

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

Unterschiedliche Browser behandeln das Kontrollkästchen und den Span unterschiedlich, oft auf unansehnliche Weise:

| Browser                             | Rendering                                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgrauer Rahmen](firefox-mac-checkbox.png)                            |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittlerem grauen Rahmen](firefox-windows-checkbox.png)                  |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecke mit 1px mittlerem grauen Rahmen](chrome-mac-checkbox.png)                        |
| Chrome 63 (Windows 10)              | ![Rechteckige Rahmen mit leicht grauer Hintergrund anstelle von weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Rahmen mit leicht grauer Hintergrund anstelle von weiß.](edge-checkbox.png)           |

#### Verwendung von appearance: none bei Radiobuttons/Kontrollkästchen

Wie wir zuvor zeigten, können Sie mit {{cssxref("appearance", "appearance: none;")}} das Standard-Erscheinungsbild eines Kontrollkästchens oder Radiobuttons vollständig entfernen. Nehmen wir dieses Beispiel-HTML:

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

Stylen wir diese nun mit einem benutzerdefinierten Kontrollkästchendesign. Beginnen wir damit, die originalen Kontrollkästchen ungestylt zu machen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die Pseudoklassen {{cssxref(":checked")}} und {{cssxref(":disabled")}} verwenden, um das Erscheinungsbild unseres benutzerdefinierten Kontrollkästchens zu ändern, während sich sein Zustand ändert:

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
  background: #ddd;
  color: gray;
}
```

Sie erfahren mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die oben genannten tun Folgendes:

- `:checked` — das Kontrollkästchen (oder Radiobutton) befindet sich im ausgewählten Zustand – der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Radiobutton) befindet sich im deaktivierten Zustand – es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch einige andere Beispiele erstellt, um Ihnen weitere Ideen zu geben:

- [Gestylte Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefinierte Radiobutton-Stilierung.
- [Umschalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein als Umschalter gestaltetes Kontrollkästchen.

Wenn Sie sich diese Kontrollkästchen in einem Browser ansehen, der {{cssxref("appearance")}} nicht unterstützt, geht Ihr benutzerdefiniertes Design verloren, aber sie sehen immer noch wie Kontrollkästchen aus und sind benutzbar.

## Was kann gegen die "hässlichen" Elemente getan werden?

Wenden wir uns nun den "hässlichen" Steuerelementen zu – denjenigen, die wirklich schwer gründlich zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und rückmeldeorientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standarderscheinungen in den Browsern haben und obwohl man sie in gewissem Maße stylen kann, sind einige Teile ihres Inneren buchstäblich ungestaltbar.

Wenn Sie bereit sind, sich mit einigen Unterschieden im Aussehen und Verhalten abzufinden, können Sie mit wenig Aufwand Größenanpassung, einheitliches Styling von Dingen wie Hintergrundfarben und die Verwendung von appearance verwenden, um einige systemgesteuerte Stylings zu entfernen.

Sehen Sie sich das folgende Beispiel an, das eine Anzahl der "hässlichen" Formularfunktionen in Aktion zeigt:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

Dieses Beispiel hat das folgende CSS darauf angewendet:

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
  box-shadow: inset 1px 1px 3px #ccc;
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
> Wenn Sie diese Beispiele gleichzeitig in mehreren Browsern testen möchten, finden Sie sie [hier live](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (sehen Sie auch [hier für den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Bedenken Sie auch, dass wir einige JavaScript zur Seite hinzugefügt haben, die die von der Dateiauswahl ausgewählten Dateien unterhalb des Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der Referenzseite [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) zu finden ist.

Wie Sie sehen, ist es uns ziemlich gut gelungen, diese über moderne Browser hinweg einheitlich aussehen zu lassen.

Wir haben einige globale normalisierende CSS für alle Steuerelemente und ihre Labels angewandt, um sie auf die gleiche Weise zu dimensionieren, ihre Elternschrift zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einige einheitliche Schatten und abgerundete Ecken zu den Steuerelementen hinzugefügt, bei denen es sinnvoll war:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Bereichstypen, Fortschrittsleisten und Messgeräten fügen sie nur einen hässlichen Rahmen um den Kontrollbereich hinzu, sodass es keinen Sinn ergibt.

Lassen Sie uns über einige Besonderheiten jedes dieser Steuerelementtypen sprechen und dabei auch auf Schwierigkeiten hinweisen.

### Selects und Datalists

Einige Browser unterstützen jetzt [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt als reguläre DOM-Elemente ermöglichen. In unterstützenden Browser und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen Techniken für `<select>`-Elemente kümmern, die keine Anpassung unterstützen.

Das Styling von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) erlaubt einen akzeptablen Grad an Anpassung, sofern Sie das Aussehen und das Gefühl nicht zu sehr von den Standards abweichen möchten. Wir haben es geschafft, das grundlegende Erscheinungsbild der Boxen einheitlich und beständig zu gestalten. Der aufgerufene Steuerungstyp der Datalist ist ohnehin ein `<input type="text">`, daher wussten wir, dass dies kein Problem darstellen würde.

Zwei Dinge sind etwas problematischer. Zuallererst unterscheidet sich das "Pfeil"-Symbol der Selects, das anzeigt, dass es sich um ein Dropdown handelt, in den Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box vergrößern oder in unansehnlicher Weise ändern. Um dies in unserem Beispiel zu beheben, verwendeten wir zuerst unseren alten Freund `appearance: none`, um das Symbol vollständig zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol mithilfe von generiertem Inhalt erstellt. Wir haben einen zusätzlichen Wrapper um das Steuerelement gelegt, weil [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) bei `<select>`-Elementen nicht funktionieren (da ihr Inhalt vollständig vom Browser kontrolliert wird):

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

Wir nutzen dann generierten Inhalt, um einen kleinen Pfeil nach unten zu generieren, und positionieren ihn mit Positionierung an der richtigen Stelle:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über die Box haben, die beim Klicken auf die `<select>`-Box erscheint, um sie zu öffnen und die Optionen anzuzeigen. Sie können die Schriftart vom Elternteil übernehmen, aber Sie können keine Dinge wie Abstände und Farben festlegen. Das gleiche gilt für die Autocomplete-Liste, die bei {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über die Option-Stilierung benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erzeugen, ein eigenes benutzerdefiniertes Steuerelement bauen oder im Fall von Select das `multiple` Attribut verwenden, was alle Optionen auf der Seite erscheinen lässt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich muss das nicht unbedingt in das Design passen, das Sie anstreben, aber es ist erwähnenswert!

### Datumeingabetypen

Die Eingabetypen für Datum/Zeit ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle das gleiche Hauptproblem. Die eigentliche Box ist so einfach zu gestalten wie ein beliebiges Textfeld, und was wir in diesem Demo haben, sieht gut aus.

Jedoch sind die inneren Teile des Steuerelements (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie zum Erhöhen/Verringern von Werten verwenden können) überhaupt nicht stylbar, und Sie können sie nicht mit `appearance: none;` entfernen. Wenn Sie wirklich die volle Kontrolle über das Styling haben wollen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erzeugen, oder Ihr eigenes benutzerdefiniertes Steuerelement bauen.

> [!NOTE]
> Es ist erwähnenswert, dass auch [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) hierher gehört — auch dies hat einen Spinner, den Sie zum Erhöhen/Verringern von Werten verwenden können, leidet also möglicherweise unter dem gleichen Problem. Im Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Aussehen von `text` hat, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist ärgerlich zu gestalten. Sie können etwas wie das folgende verwenden, um den Standard-Schieberegler vollständig zu entfernen und ihn durch einen benutzerdefinierten Stil zu ersetzen (in diesem Fall eine dünne rote Spur):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Schieberegler-Griffs der Bereichssteuerung anzupassen — um die volle Kontrolle über das Styling des Bereichs zu erhalten, müssen Sie eine ganze Reihe komplexer CSS-Codes verwenden, einschließlich mehrerer nicht standardisierter, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für eine detaillierte Beschreibung dessen, was benötigt wird.

### Farbeingabetypen

Eingabesteuerungen vom Typ Farbe sind nicht allzu schlecht. In unterstützenden Browsern geben sie Ihnen normalerweise einfach einen Block mit Vollfarbe mit einem kleinen Rahmen.

Sie können den Rahmen entfernen und nur den Farbblock lassen, indem Sie etwas wie dieses verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch der einzige Weg, um etwas wesentlich anderes zu bekommen.

### Dateieingabetypen

Eingaben vom Typ Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es relativ einfach, etwas zu erstellen, das gut zu den restlichen Elementen der Seite passt — die Ausgabelinie, die Teil der Steuerung ist, übernimmt die Elternschrift, wenn Sie dies der Eingabe mitteilen, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen nach Belieben gestalten; wir haben sie schließlich erstellt.

Das einzige Problem mit Dateiauswahlen ist, dass die bereitgestellte Schaltfläche, die Sie drücken, um die Dateiauswahl zu öffnen, völlig unstilbar ist — sie kann nicht dimensioniert oder eingefärbt werden und akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dies zu umgehen, besteht darin, den Umstand auszunutzen, dass, wenn Sie ein Label mit einem Formularelement verbinden, das Klicken auf das Label das Element aktiviert. Sie könnten also die eigentliche Formulareingabe mit etwas wie diesem verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label stilisieren, um wie eine Schaltfläche zu wirken, die beim Drücken die Dateiauswahl wie erwartet öffnet:

```css
label[for="file"] {
  box-shadow: 1px 1px 3px #ccc;
  background: linear-gradient(to bottom, #eee, #ccc);
  border: 1px solid rgb(169 169 169);
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, #fff, #ddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #ccc;
}
```

Sie können das Ergebnis des oben gezeigten CSS-Stylings im folgenden Live-Beispiel sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Mess- und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im vorherigen Beispiel gesehen haben, können wir ziemlich genau die gewünschte Breite einstellen. Darüber hinaus sind sie jedoch wirklich schwer auf irgendeine Weise zu stylen. Sie behandeln Höheneinstellungen nicht konsistent miteinander und zwischen den Browsern, Sie können den Hintergrund färben, aber nicht die Fortschrittsleiste, und das Setzen von `appearance: none` auf sie verschlimmert die Situation eher, als dass sie verbessert wird.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Features zu erstellen, wenn Sie das Styling steuern möchten, oder eine Drittanbieterlösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Während es bei der Verwendung von CSS mit HTML-Formularen immer noch Schwierigkeiten gibt, gibt es Wege, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Derzeit ist die beste Lösung, mehr darüber zu erfahren, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die Erstellung von [vollständig angepassten `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) unter Verwendung der speziellen, modernen HTML- und CSS-Funktionen untersuchen, die für diesen Zweck verfügbar sind.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
