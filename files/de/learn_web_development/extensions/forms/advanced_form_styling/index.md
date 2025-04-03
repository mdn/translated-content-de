---
title: Fortgeschrittenes Formulargestaltung
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularelementen zu stylen, die schwieriger zu gestalten sind — die Kategorien "schlecht" und "hässlich". Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons relativ einfach zu gestalten; jetzt werden wir uns auf die problematischeren Bereiche konzentrieren.

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
        Verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Wiederholung dessen, was wir im vorherigen Artikel gesagt haben, haben wir:

**Das Schlechte**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder einige spezifische Tricks:

- Checkboxes und Radiobuttons
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

**Das Hässliche**: Einige Elemente können nicht vollständig mit CSS gestaltet werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei normalen DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zuerst über die [`appearance`](/de/docs/Web/CSS/appearance) Eigenschaft sprechen, die sehr nützlich ist, um all dies besser stilisierbar zu machen.

## appearance: Kontrolle über das OS-Level-Styling

Im vorherigen Artikel haben wir gesagt, dass das Styling von Web-Formularelementen historisch weitgehend vom zugrunde liegenden Betriebssystem übernommen wurde, was Teil des Problems bei der Anpassung des Aussehens dieser Steuerelemente ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde entwickelt, um zu kontrollieren, welches OS- oder System-Level-Styling auf Web-Formularelemente angewendet wurde. Der bei weitem hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass jedes Steuerelement, auf das Sie es anwenden, systembasierte Stile verwendet, so weit wie möglich, und lässt Sie die Stile selbst mit CSS aufbauen.

Zum Beispiel, lassen Sie uns die folgenden Steuerelemente nehmen:

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

Die Anwendung des folgenden CSS auf sie entfernt das systembasierte Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie in Ihrem System aussehen — standardmäßig links und mit dem oben genannten CSS angewendet rechts ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen besteht der Effekt darin, die stilisierte Umrandung zu entfernen, wodurch das CSS-Styling etwas einfacher wird, aber nicht wirklich essentiell ist. In einigen Fällen — Such- und Radiobuttons/Checkboxes — wird es viel nützlicher. Schauen wir uns das nun an.

### Suchfelder zähmen

[`<input type="search">`](/de/docs/Web/HTML/Element/input/search) ist im Grunde nur ein Texteingabefeld, also warum ist `appearance: none;` hier nützlich? Die Antwort ist, dass Safari-Suchfelder einige Styling-Einschränkungen haben — Sie können ihre `height` oder `font-size` nicht frei anpassen, zum Beispiel.

Dies kann mit unserem Freund `appearance: none;` behoben werden, das das Standardaussehen deaktiviert:

```css
input[type="search"] {
  appearance: none;
}
```

Im folgenden Beispiel sehen Sie zwei identisch gestaltete Suchfelder. Das rechte hat `appearance: none;` angewendet, das linke nicht. Wenn Sie es in Safari auf macOS betrachten, werden Sie sehen, dass das linke nicht richtig dimensioniert ist.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

Interessanterweise löst das Festlegen der Umrandung/Hintergrundfarbe auf dem Suchfeld auch dieses Problem. Das folgende gestaltete Suchfeld hat `appearance: none;` nicht angewendet, leidet jedoch in Safari nicht unter demselben Problem wie das vorherige Beispiel.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> [!NOTE]
> Vielleicht haben Sie bemerkt, dass im Suchfeld das "x"-Löschen-Symbol, das erscheint, wenn der Wert der Suche nicht null ist, in Edge und Chrome verschwindet, wenn das Eingabefeld den Fokus verliert, aber in Safari bleibt. Um es per CSS zu entfernen, können Sie `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button { display: none; }` verwenden.

### Styling von Checkboxes und Radio Buttons

Das Styling einer Checkbox oder eines Radiobuttons ist standardmäßig schwierig. Die Größen von Checkboxes und Radio Buttons sollen mit ihrem Standarddesign nicht geändert werden, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen.

Betrachten Sie zum Beispiel diesen einfachen Testfall:

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

Verschiedene Browser behandeln die Checkbox und den Span unterschiedlich, oft auf unschöne Weise:

| Browser                             | Rendering                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgraue Umrandung](firefox-mac-checkbox.png)                        |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauer Umrandung](firefox-windows-checkbox.png)                 |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecke mit 1px mittelgrauer Umrandung](chrome-mac-checkbox.png)                       |
| Chrome 63 (Windows 10)              | ![Rechteckige Umrandungen mit leicht grauem Hintergrund statt weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Umrandungen mit leicht grauem Hintergrund statt weiß.](edge-checkbox.png)           |

#### Verwendung von appearance: none bei Radios/Checkboxes

Wie wir vorher gezeigt haben, können Sie das Standardaussehen einer Checkbox oder eines Radiobuttons mit {{cssxref("appearance", "appearance: none;")}} vollständig entfernen. Nehmen wir dieses Beispiel-HTML:

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

Lassen Sie uns nun diese mit einem benutzerdefinierten Checkbox-Design stylen. Beginnen wir damit, die ursprünglichen Checkboxes zu entstilisieren:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}} und {{cssxref(":disabled")}} Pseudoklassen verwenden, um das Aussehen unserer benutzerdefinierten Checkbox zu ändern, wenn sich ihr Zustand ändert:

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

Sie werden mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erfahren; die obigen bewirken Folgendes:

- `:checked` — die Checkbox (oder der Radiobutton) befindet sich in einem aktivierten Zustand — der Benutzer hat sie angeklickt/aktiviert.
- `:disabled` — die Checkbox (oder der Radiobutton) befindet sich in einem deaktivierten Zustand — sie kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestaltete Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Radiobutton-Styling.
- [Toggle-Switch-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Eine Checkbox, die wie ein Kippschalter gestaltet ist.

Wenn Sie diese Checkboxes in einem Browser anzeigen, der {{cssxref("appearance")}} nicht unterstützt, geht Ihr benutzerdefiniertes Design verloren, aber sie werden immer noch wie Checkboxes aussehen und benutzbar sein.

## Was kann man gegen die "hässlichen" Elemente tun?

Jetzt wenden wir uns den "hässlichen" Steuerelementen zu — denen, die wirklich schwer gründlich zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerelementtypen wie [`color`](/de/docs/Web/HTML/Element/input/color) und [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), und feedback-orientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standardansichten in verschiedenen Browsern haben, und obwohl Sie sie in gewisser Weise stylen können, sind einige Teile ihrer Interna buchstäblich unmöglich zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden im Aussehen und Gefühl zu leben, können Sie mit etwas einfachem Styling auskommen, um die Größenanpassung zu konsistent zu machen, einheitliches Styling wie Hintergrundfarben und das Verwenden von appearance, um einige systembasierte Styles zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formulareigenschaften im Einsatz zeigt:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

Dieses Beispiel hat das folgende CSS, das darauf angewendet wird:

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
> Wenn Sie diese Beispiele gleichzeitig in mehreren Browsern testen möchten, können Sie [es hier live finden](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (sehen Sie sich auch [hier den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Beachten Sie auch, dass wir etwas JavaScript hinzugefügt haben, das die Dateien auflistet, die vom Dateiauswähler ausgewählt wurden, unterhalb des Steuerelements. Dies ist eine vereinfachte Version des Beispiels, das auf der referenzseite zu [`<input type="file">`](/de/docs/Web/HTML/Element/input/file#examples) zu finden ist.

Wie Sie sehen können, haben wir ziemlich gut geschafft, diese in modernen Browsern einheitlich aussehen zu lassen.

Wir haben etwas globales normalisierendes CSS auf alle Steuerelemente und deren Beschriftungen angewendet, damit sie gleich angeordnet werden, die Schrift ihres übergeordneten Elements übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch auf den Steuerelementen, wo es sinnvoll war, einen gleichmäßigen Schatten und abgerundete Ecken hinzugefügt:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Range-Types, Fortschrittsbalken und Messgeräten fügen sie nur einen hässlichen Rahmen um den Steuerbereich hinzu, daher macht es keinen Sinn.

Lassen Sie uns über einige Besonderheiten dieser Steuerelemente sprechen und auf die Schwierigkeiten hinweisen.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Features, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei normalen DOM-Elementen ermöglichen. In unterstützenden Browsern und Codebasen müssen Sie sich keine Sorgen mehr über die unten beschriebenen Legacy-Techniken für `<select>`-Elemente machen.

Das Styling von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) ermöglicht ein akzeptables Maß an Anpassung, solange Sie den Look and Feel nicht zu weit vom Standard abweichen lassen wollen. Wir haben es geschafft, das grundlegende Erscheinungsbild der Boxen ziemlich einheitlich und konsistent zu gestalten. Das Datalist-aufrufende Steuerelement ist ohnehin ein `<input type="text">`, daher wussten wir, dass dies kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Erstens unterscheidet sich das "Pfeil"-Symbol des Selects, das anzeigt, dass es sich um ein Dropdown-Menü handelt,zwischen den Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box erhöhen oder in hässlicher Weise anpassen. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol ganz zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol mittels generiertem Inhalt erstellt. Wir haben einen zusätzlichen Wrapper um das Steuerelement gelegt, weil [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht auf `<select>`-Elementen funktionieren (da ihr Inhalt vollständig vom Browser kontrolliert wird):

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

Wir haben dann generierten Inhalt verwendet, um einen kleinen Pfeil nach unten zu generieren und ihn mit Positionierung an die richtige Stelle zu setzen:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Feld haben, das erscheint, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die auf dem übergeordneten Element gesetzte Schriftart erben, aber Sie werden nicht in der Lage sein, Dinge wie Abstände und Farben festzulegen. Dasselbe gilt für die Autovervollständigungsliste, die bei {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über das Styling der Optionen benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erstellen, oder Ihr eigenes benutzerdefiniertes Steuerelement bauen, oder im Fall von Select das `multiple`-Attribut verwenden, das alle Optionen auf der Seite erscheinen lässt und dieses bestimmte Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich kann dies auch nicht in das Design passen, das Sie verfolgen, aber es ist erwähnenswert!

### Datums-Eingabetypen

Die Datums-/Zeitangabe-Typen ([`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), [`time`](/de/docs/Web/HTML/Element/input/time), [`week`](/de/docs/Web/HTML/Element/input/week), [`month`](/de/docs/Web/HTML/Element/input/month)) haben alle das gleiche große zugehörige Problem. Die eigentliche Umhüllungsbox ist so einfach zu stylen wie jeder Texteingabebereich, und was wir in diesem Demo haben, sieht gut aus.

Allerdings sind die internen Teile des Steuerelements (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie verwenden können, um Werte zu erhöhen/zu reduzieren) überhaupt nicht stilisierbar, und Sie können sie nicht mit `appearance: none;` entfernen. Wenn Sie wirklich die volle Kontrolle über das Styling haben möchten, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erstellen, oder Ihr eigenes bauen.

> [!NOTE]
> Es ist erwähnenswert, [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) hier ebenfalls zu erwähnen — dies hat auch einen Spinner, den Sie verwenden können, um Werte zu erhöhen/reduzieren, sodass es potenziell das gleiche Problem hat. Allerdings ist im Fall des `number`-Typs die gesammelten Daten einfacher, und es ist einfach, stattdessen einen `tel`-Eingabebereich zu verwenden, der wie `text` aussieht, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Range-Eingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Element/input/range) ist ärgerlich zu stylen. Sie können etwas wie das folgende verwenden, um das Standard-Slider-Track vollständig zu entfernen und es durch ein benutzerdefiniertes Stil zu ersetzen (ein dünnes rotes Track, in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Schiebereglers der Bereichssteuerung anzupassen — um die volle Kontrolle über die Range-Gestaltung zu erhalten, müssen Sie eine ganze Menge komplexen CSS-Code verwenden, einschließlich mehrerer nicht-standardmäßiger, browser-spezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS Tricks für eine ausführliche Beschreibung dessen, was benötigt wird.

### Farbeingabetypen

Eingabesteuerungen des Typs Farbe sind nicht zu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Block aus Vollfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen, indem Sie nur den Farbblock mit etwas wie diesem belassen:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Allerdings ist eine benutzerdefinierte Lösung der einzige Weg, um etwas erheblich anderes zu erreichen.

### Dateieingabetypen

Eingaben des Typs Datei sind in der Regel in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das gut mit dem Rest der Seite funktioniert — das Ausgabelinienfeld, das Teil der Steuerung ist, wird die Schriftart des übergeordneten Elements übernehmen, wenn Sie der Eingabe dies mitteilen, und Sie können die angepasste Liste von Dateinamen und -größen in jeder gewünschten Weise stylen; wir haben sie schließlich erstellt.

Das einzige Problem mit Dateiauswählern ist, dass die bereitgestellte Schaltfläche, die Sie drücken, um den Dateiauswähler zu öffnen, völlig unstylisierbar ist — sie kann nicht in der Größe verändert oder eingefärbt werden, und sie nimmt selbst keinen anderen Schriftfont an.

Ein Weg, dies zu umgehen, ist, dass, wenn Sie ein Label haben, das einem Formularelement zugeordnet ist, das Klicken auf das Label das Steuerelement aktiviert. Sie könnten also das tatsächliche Formularelement mit etwas wie diesem verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so stilisieren, dass es wie eine Schaltfläche wirkt, die beim Drücken den Dateipicker wie erwartet öffnet:

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

Das Ergebnis des oben genannten CSS-Stylings können Sie im folgenden Live-Beispiel sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Zähler und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Element/meter) und [`<progress>`](/de/docs/Web/HTML/Element/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im vorherigen Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Darüber hinaus sind sie jedoch sehr schwierig in irgendeiner Weise zu stylen. Sie behandeln Höhenangaben zwischen einander und zwischen Browsern nicht konsistent, Sie können den Hintergrund einfärben, aber nicht die Fortschrittsleiste, und das Einstellen von `appearance: none` auf ihnen macht die Dinge nicht besser, sondern schlechter.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie in der Lage sein möchten, das Styling zu kontrollieren, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Während es immer noch Schwierigkeiten bei der Verwendung von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Derzeit ist es die beste Lösung, mehr über die Art und Weise zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die Erstellung von [vollständig angepassten `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) unter Verwendung der dedizierten, modernen HTML- und CSS-Funktionen erkunden, die für diesen Zweck verfügbar sind.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
