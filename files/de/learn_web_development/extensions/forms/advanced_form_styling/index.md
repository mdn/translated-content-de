---
title: Erweiterte Formular-Styling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS gemacht werden kann, um die Arten von Formularsteuerelementen zu gestalten, die schwieriger zu gestalten sind — die Kategorien "schlecht" und "hässlich". Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen einfach zu gestalten. Jetzt werden wir uns mit den problematischeren Teilen des Stylings befassen.

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

Um zusammenzufassen, was wir im vorherigen Artikel gesagt haben:

**Das Schlechte**: Einige Elemente sind schwieriger zu gestalten und erfordern komplexeres CSS oder spezifische Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können nicht vollständig mit CSS gestaltet werden. Dazu gehören:

- Elemente, die bei der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte wie bei regulären DOM-Elementen ermöglicht.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zunächst über die [`appearance`](/de/docs/Web/CSS/appearance)-Eigenschaft sprechen, die ziemlich nützlich ist, um alle oben genannten Elemente stilvoller zu machen.

## appearance: Kontrolle über OS-Level-Styling

Im letzten Artikel haben wir gesagt, dass das Styling von Webformular-Steuerelementen historisch gesehen weitgehend vom zugrunde liegenden Betriebssystem übernommen wurde, was eines der Probleme bei der Anpassung des Aussehens dieser Steuerelemente ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde als Mittel entwickelt, um zu kontrollieren, welches OS- oder System-Level-Styling auf Webformular-Steuerelemente angewendet wurde. Der bei weitem nützlichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein Steuerelement, auf das es angewendet wird, so weit wie möglich systembezogenes Styling verwendet, und ermöglicht Ihnen, die Stile selbst mit CSS zu entwickeln.

Beispielsweise betrachten wir die folgenden Steuerelemente:

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

Anwenden des folgenden CSS auf sie entfernt das systemlevelbasierte Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt, wie sie in Ihrem System aussehen — standardmäßig links und mit dem obigen CSS rechts ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen besteht der Effekt darin, den stilisierten Rand zu entfernen, was das CSS-Styling etwas erleichtert, aber nicht wirklich wesentlich ist. In einigen Fällen - bei Suchfeldern und Kontrollkästchen/Optionsfeldern - wird es weitaus nützlicher. Wir werden uns diese nun anschauen.

### Suchfelder zähmen

[`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search) ist im Grunde nur ein Texteingabefeld. Warum ist `appearance: none;` hier nützlich? Die Antwort ist, dass Safari-Suchfelder einige Styling-Einschränkungen haben — Sie können beispielsweise deren `height` oder `font-size` nicht frei anpassen.

Dies kann mit unserem Freund `appearance: none;` behoben werden, das das Standard-Erscheinungsbild deaktiviert:

```css
input[type="search"] {
  appearance: none;
}
```

Im folgenden Beispiel sehen Sie zwei identisch gestaltete Suchfelder. Das rechte hat `appearance: none;` angewendet, das linke nicht. Wenn Sie es in Safari unter macOS betrachten, werden Sie sehen, dass das linke nicht richtig dimensioniert ist.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

Interessanterweise behebt das Setzen des Randes bzw. des Hintergrunds auf das Suchfeld ebenfalls dieses Problem. Das folgende gestaltete Suchfeld hat `appearance: none;` nicht angewendet, aber es leidet nicht unter demselben Problem in Safari wie das vorherige Beispiel.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> [!NOTE]
> Sie haben vielleicht bemerkt, dass im Suchfeld das "x"-Löschsymbol, das erscheint, wenn der Wert der Suche nicht null ist, verschwindet, wenn das Eingabefeld in Edge und Chrome den Fokus verliert, in Safari jedoch bleibt. Um dies über CSS zu entfernen, können Sie `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button { display: none; }` verwenden.

### Styling von Kontrollkästchen und Optionsfeldern

Das Styling von Kontrollkästchen oder Optionsfeldern ist standardmäßig knifflig. Die Größen von Kontrollkästchen und Optionsfeldern sollen mit ihren Standarddesigns nicht geändert werden, und Browser reagieren sehr unterschiedlich, wenn Sie dies versuchen.

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

Verschiedene Browser behandeln das Kontrollkästchen und den Span auf unterschiedliche, oft hässliche Weise:

| Browser                             | Rendering                                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgrauer Rand](firefox-mac-checkbox.png)                              |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauem Rand](firefox-windows-checkbox.png)                        |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecken mit 1px mittelgrauem Rand](chrome-mac-checkbox.png)                             |
| Chrome 63 (Windows 10)              | ![Rechteckige Ränder mit leicht grauem Hintergrund anstelle von Weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Ränder mit leicht grauem Hintergrund anstelle von Weiß.](edge-checkbox.png)           |

#### Verwendung von appearance: none bei Radios/Kontrollkästchen

Wie wir bereits gezeigt haben, können Sie das Standard-Erscheinungsbild eines Kontrollkästchens oder Optionsfeldes vollständig mit {{cssxref("appearance", "appearance: none;")}} entfernen. Nehmen wir folgendes HTML-Beispiel:

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

Jetzt stylen wir diese mit einem benutzerdefinierten Kontrollkästchen-Design. Lassen Sie uns mit dem Entfernen des ursprünglichen Stils der Kontrollkästchen beginnen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}}- und {{cssxref(":disabled")}}-Pseudoklassen verwenden, um das Erscheinungsbild unseres benutzerdefinierten Kontrollkästchens je nach seinem Status zu ändern:

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

Sie werden mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erfahren; die obigen tun folgendes:

- `:checked` — das Kontrollkästchen (oder das Optionsfeld) befindet sich im aktivierten Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder das Optionsfeld) befindet sich im deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestaltete Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Optionsfeld-Styling.
- [Umschalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Umschalter gestylt ist.

Wenn Sie diese Kontrollkästchen in einem Browser anzeigen, der {{cssxref("appearance")}} nicht unterstützt, geht Ihr benutzerdefiniertes Design verloren, aber sie sehen immer noch wie Kontrollkästchen aus und sind verwendbar.

## Was kann man mit den "hässlichen" Elementen machen?

Wenden wir uns nun den "hässlichen" Steuerelementen zu - denjenigen, die wirklich schwer vollständig zu gestalten sind. Kurz gesagt, diese sind Dropdown-Boxen, komplexe Steuerelementtypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), und feedbackorientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standardaussehen zwischen den Browsern haben, und während Sie sie in einigen Aspekten gestalten können, sind einige Teile ihrer internen Elemente buchstäblich unmöglich zu gestalten.

Wenn Sie bereit sind, mit einigen Unterschieden in Aussehen und Gefühl zu leben, können Sie mit einfachem Styling eine einheitliche Größe, eine einheitliche Farbgestaltung und die Verwendung des appearance-Eigenschafts erreichen, um einige systembezogene Stile zu entfernen.

Betrachten Sie das folgende Beispiel, das eine Reihe von "hässlichen" Formularfunktionen in Aktion zeigt:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

Dieses Beispiel hat das folgende CSS auf sich angewendet:

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
> Wenn Sie diese Beispiele gleichzeitig in mehreren Browsern testen möchten, finden Sie es [hier live](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (sehen Sie auch [hier den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Beachten Sie auch, dass wir einige JavaScript auf die Seite hinzugefügt haben, das die vom Dateiauswahlfenster ausgewählten Dateien unterhalb des eigentlichen Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der Referenzseite zu [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) zu finden ist.

Wie Sie sehen können, haben wir es ziemlich gut geschafft, diese in modernen Browsern einheitlich aussehen zu lassen.

Wir haben einige globale Normalisierungs-CSS auf alle Steuerelemente und deren Beschriftungen angewendet, um sie in gleicher Weise zu dimensionieren, ihre übergeordnete Schriftart zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einige gleichmäßige Schatten und abgerundete Ecken zu den Steuerelementen hinzugefügt, bei denen es sinnvoll war:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Bereichstypen, Fortschrittsbalken und Messgeräten fügen sie nur einen hässlichen Kasten um das Steuerbereichsgebiet hinzu, sodass es keinen Sinn macht.

Sprechen wir über einige Besonderheiten jedes dieser Steuerungstypen und heben die Schwierigkeiten auf dem Weg hervor.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte wie bei regulären DOM-Elementen ermöglicht. In unterstützenden Browsern und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen Ansichtstechniken für `<select>`-Elemente kümmern.

Das Styling von Datalists und Selects (in Browsern, die nicht anpassungsfähige Selects unterstützen) ermöglicht einen akzeptablen Grad an Anpassung, vorausgesetzt, Sie möchten das Aussehen und die Haptik nicht zu sehr von den Standards abweichen. Wir haben es geschafft, das grundlegende Aussehen der Boxen ziemlich einheitlich und konsistent aussehen zu lassen. Das Datalist aufrufende Steuerelement ist ohnehin ein `<input type="text">`, sodass wir wussten, dass dies kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Erstens unterscheidet sich das "Pfeil"-Symbol des Selects, das anzeigt, dass es sich um ein Dropdown handelt, zwischen den Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Auswahlbox erhöhen oder in hässlicher Weise anpassen. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol ganz zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol unter Verwendung von generiertem Inhalt erstellt. Wir haben eine zusätzliche Hülle um das Steuerelement gelegt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht auf `<select>`-Elementen funktionieren (da deren Inhalt vollständig vom Browser gesteuert wird):

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

Wir haben dann generierten Inhalt verwendet, um einen kleinen Pfeil nach unten zu erzeugen und ihn mit Positionierung an der richtigen Stelle zu platzieren:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das erscheinende Fenster haben, das die Optionen enthält, wenn Sie auf die `<select>`-Box klicken, um sie zu öffnen. Sie können die auf dem übergeordneten Element gesetzte Schriftart erben, aber Sie können Dinge wie Abstand und Farben nicht einstellen. Dasselbe gilt für die Autocomplete-Liste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die vollständige Kontrolle über das Option-Styling benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, Ihr eigenes benutzerdefiniertes Steuerelement erstellen oder im Fall der Auswahl das `multiple`-Attribut verwenden, das alle Optionen auf der Seite erscheinen lässt und so dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich könnte dies auch nicht zu dem Design passen, das Sie anstreben, aber es ist erwähnenswert!

### Datums-Eingabetypen

Die Datum/Uhrzeit-Eingabetypen ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe große zugehörige Problem. Das eigentliche enthaltene Feld ist so einfach zu gestalten wie jedes Texteingabefeld, und was wir in diesem Demo haben, sieht gut aus.

Jedoch sind die internen Teile des Steuerfeldes (z.B. der Popup-Kalender zum Auswählen eines Datums, der Spinner zum Inkremetieren/Dekrementieren von Werten) überhaupt nicht stilisierbar, und Sie können sie nicht mit `appearance: none;` entfernen. Wenn Sie wirklich die vollständige Kontrolle über das Styling benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen.

> [!NOTE]
> Es ist erwähnenswert, dass [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) hier auch erwähnt werden sollte — dies hat auch einen Spinner, den Sie zur Inkremetierung/Dekrementierung von Werten verwenden können, und leidet daher möglicherweise unter demselben Problem. Im Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher, und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Aussehen eines `text`-Feldes hat, jedoch die numerische Tastatur bei Geräten mit Touch-Tastaturen anzeigt.

### Bereichs-Eingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist schwer zu gestalten. Sie können etwas wie das folgende verwenden, um den Standardschieberegler vollständig zu entfernen und ihn durch einen benutzerdefinierten Stil zu ersetzen (in diesem Fall ein dünner roter Track):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Jedoch ist es sehr schwierig, den Stil des Bereichssteuergriffs anzupassen — um die vollständige Kontrolle über das Bereichsstyling zu erlangen, müssen Sie eine ganze Menge komplexen CSS-Codes verwenden, einschließlich mehrerer nicht standardmäßiger, browser-spezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für einen detaillierten Bericht darüber an, was erforderlich ist.

### Farbeingabetypen

Eingabesteuerelemente des Typs Farbe sind nicht allzu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einfach einen Block aus Vollfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen und nur den Farbblock lassen, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Jedoch ist eine benutzerdefinierte Lösung der einzige Weg, um etwas signifikant anderes zu erhalten.

### Dateieingabetypen

Inputs vom Typ Datei sind im Allgemeinen OK — wie Sie in unserem Beispiel gesehen haben, ist es relativ einfach, etwas zu erstellen, das gut in den Rest der Seite passt — die Ausgangszeile, die Teil des Steuerelements ist, übernimmt die übergeordnete Schriftart, wenn Sie das Eingabefeld dazu anweisen, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen auf beliebige Weise gestalten; wir haben sie schließlich selbst erstellt.

Das einzige Problem bei Dateiauswahlfenstern ist, dass die bereitgestellte Schaltfläche, die Sie zum Öffnen der Dateiauswahl drücken, vollständig nicht gestaltbar ist — sie kann nicht dimensioniert oder gefärbt werden, und sie akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dies zu umgehen, besteht darin, den Umstand auszunutzen, dass, wenn Sie ein Etikett mit einem Steuerelement verknüpft haben, das Klicken auf das Etikett das Steuerelement aktiviert. Sie könnten also das eigentliche Formulareingabefeld verstecken, indem Sie so etwas verwenden:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Etikett so gestalten, dass es wie eine Schaltfläche handelt, die bei Betätigung die Dateiauswahl wie erwartet öffnet:

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

Sie können das Ergebnis des obigen CSS-Stylings im folgenden Live-Beispiel sehen (sehen Sie auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live, und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Messgeräte und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind womöglich die schlimmsten. Wie Sie im vorherigen Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwierig, in irgendeiner Weise zu gestalten. Sie behandeln Höheneinstellungen nicht konsistent zwischen sich und zwischen den Browsern, Sie können den Hintergrund färben, aber nicht die Vordergrundleiste, und `appearance: none` macht die Dinge schlimmer, nicht besser.

Es ist einfacher, Ihre eigene Custom-Lösung für diese Funktionen zu erstellen, wenn Sie in der Lage sein möchten, das Styling zu kontrollieren, oder eine Lösung eines Drittanbieters wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten mit HTML-Formularen und CSS gibt, gibt es Wege, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Für jetzt ist die beste Lösung, mehr über die Art und Weise zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularsteuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die Erstellung von [vollständig angepassten `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dedizierten, modernen HTML- und CSS-Funktionen untersuchen, die für diesen Zweck verfügbar sind.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
