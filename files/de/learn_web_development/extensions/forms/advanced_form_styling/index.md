---
title: Fortgeschrittenes Form-Styling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS gemacht werden kann, um die Arten von Formularelementen zu stylen, die schwieriger zu stylen sind — die Kategorien "schlecht" und "hässlich". Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons recht einfach zu stylen; jetzt werden wir uns mit dem Styling der problematischeren Teile befassen.

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
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; zu lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Wiederholung dessen, was wir im vorherigen Artikel gesagt haben, haben wir:

**Das Schlechte**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder einige spezifischere Tricks:

- Checkboxen und Radiobuttons
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können nicht umfassend mit CSS gestaltet werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen derzeit [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zuerst sprechen wir über die [`appearance`](/de/docs/Web/CSS/appearance)-Eigenschaft, die nützlich ist, um all das oben Genannte stilisierbarer zu machen.

## `appearance`: Kontrolle über Betriebssystem-Styling

Im vorherigen Artikel haben wir erwähnt, dass das Styling von Webformular-Steuerelementen historisch weitgehend vom zugrunde liegenden Betriebssystem abgeleitet wurde, was ein Teil des Grundes für die Schwierigkeiten bei der Anpassung des Aussehens dieser Steuerelemente ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde erstellt, um zu steuern, welches OS- oder systemseitige Styling auf Webformular-Steuerelemente angewendet wurde. Der mit Abstand nützlichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein Steuerelement, auf das Sie es anwenden, so viel wie möglich systemseitiges Styling verwendet, und ermöglicht es Ihnen, die Stile selbst mit CSS aufzubauen.

Zum Beispiel, nehmen wir die folgenden Steuerelemente:

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

Wenn Sie das folgende CSS darauf anwenden, entfernen Sie das systemseitige Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie auf Ihrem System aussehen — Standard links und mit dem obigen CSS rechts angewendet ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen besteht der Effekt darin, den stilisierten Rand zu entfernen, was das CSS-Styling ein wenig erleichtert, aber nicht wesentlich ist. In einigen Fällen, wie bei Radiobuttons und Checkboxen, wird es deutlich nützlicher. Wir werden uns diese jetzt ansehen.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war besonders nützlich für das durchgängige Styling von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elementen. Ohne diesen Wert erlaubte Safari es nicht, {{cssxref("height")}}- oder {{cssxref("font-size")}}-Werte darauf anzuwenden. Dies ist jedoch ab Safari 16 nicht mehr der Fall. Möglicherweise möchten Sie `input[type="search"]` dennoch explizit mit `appearance: none;` anvisieren, wenn Ihre Browser-Unterstützungsmatrix Safari-Versionen vor 16 umfasst.

In Suchfeldern verschwindet der "x"-Löschbutton, der erscheint, wenn der Wert nicht null ist, in Edge und Chrome, wenn das Eingabefeld den Fokus verliert, bleibt aber in Safari bestehen. Um ihn per CSS zu entfernen, können Sie diese Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Checkboxen und Radiobuttons

Das Styling einer Checkbox oder eines Radiobuttons ist standardmäßig knifflig. Die Größen von Checkboxen und Radiobuttons sind in ihren Standarddesigns nicht für Änderungen vorgesehen, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen.

Zum Beispiel, betrachten Sie diesen einfachen Testfall:

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

Verschiedene Browser handhaben die Checkbox und den Span unterschiedlich, oft auf unschöne Weise:

| Browser                             | Rendering                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgrauer Rand](firefox-mac-checkbox.png)                       |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauem Rand](firefox-windows-checkbox.png)                 |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecke mit 1px mittelgrauem Rand](chrome-mac-checkbox.png)                       |
| Chrome 63 (Windows 10)              | ![Rechteckige Ränder mit leicht grauem Hintergrund statt weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Ränder mit leicht grauem Hintergrund statt weiß.](edge-checkbox.png)           |

#### Verwendung von appearance: none auf Radios/Checkboxen

Wie wir zuvor gezeigt haben, können Sie das Standardaussehen einer Checkbox oder eines Radiobuttons vollständig entfernen mit {{cssxref("appearance", "appearance: none;")}}. Nehmen wir dieses Beispiel-HTML:

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

Nun, lassen Sie uns diese mit einem benutzerdefinierten Checkbox-Design stylen. Beginnen wir mit dem Entfernen des Stylings der originalen Kontrollkästchen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}} und {{cssxref(":disabled")}} Pseudo-Klassen verwenden, um das Erscheinungsbild unserer benutzerdefinierten Checkbox zu ändern, wenn sich ihr Zustand ändert:

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

Sie werden in [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) mehr über solche Pseudo-Klassen und mehr erfahren; die obigen tun Folgendes:

- `:checked` — die Checkbox (oder der Radiobutton) befindet sich in einem angekreuzten Zustand — der Benutzer hat darauf geklickt/aktiviert.
- `:disabled` — die Checkbox (oder der Radiobutton) befindet sich in einem deaktivierten Zustand — es kann nicht mit ihr interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch noch ein paar andere Beispiele erstellt, um Ihnen weitere Ideen zu geben:

- [Gestaltete Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Radiobutton-Styling.
- [Toggle-Switch-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Eine Checkbox, die so gestylt ist, dass sie wie ein Kippschalter aussieht.

Wenn Sie diese Checkboxen in einem Browser anzeigen, der {{cssxref("appearance")}} nicht unterstützt, geht Ihr benutzerdefiniertes Design verloren, aber sie sehen immer noch wie Checkboxen aus und sind verwendbar.

## Was kann bezüglich der "hässlichen" Elemente getan werden?

Nun wenden wir uns den "hässlichen" Steuerelementen zu — diejenigen, die wirklich schwer zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerelementtypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und feedback-orientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standartrenderings in verschiedenen Browsern haben, und obwohl Sie sie in gewisser Weise stylen können, sind einige Teile ihrer Interna unmöglich zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden in Aussehen und Benutzererfahrung zu leben, können Sie einige einfache Stylings verwenden, um die Dinge erheblich zu verbessern. Dazu gehören konsistente Größen und Stylings von Eigenschaften wie `background-color` und die Verwendung von `appearance`, um einige systemseitige Stylings zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formularfunktionen in Aktion zeigt:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

Dieses Beispiel hat das folgende CSS angewendet:

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
> Wenn Sie diese Beispiele gleichzeitig in mehreren Browsern testen möchten, können Sie [hier live finden](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (siehe auch [hier für den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Beachten Sie auch, dass wir der Seite ein wenig JavaScript hinzugefügt haben, das die Dateien auflistet, die vom Dateiwähler ausgewählt wurden, unten auf der Steuerung selbst. Dies ist eine vereinfachte Version des Beispiels, das auf der Referenzseite [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) zu finden ist.

Wie Sie sehen können, haben wir es ziemlich gut geschafft, diese in modernen Browsern einheitlich aussehen zu lassen.

Wir haben einige globale, normalisierende CSS-Stile auf alle Steuerelemente und deren Beschriftungen angewendet, um sie gleichermaßen zu dimensionieren, ihre Schriftart vom übergeordneten Element zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einige einheitliche Schatten und abgerundete Ecken zu den Steuerelementen hinzugefügt, wo es sinnvoll ist:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Bereichstypen, Fortschrittsbalken und Messgeräten fügen sie einfach einen hässlichen Rahmen um den Kontrollbereich hinzu, sodass es keinen Sinn macht, sie zu verwenden.

Lassen Sie uns einige Besonderheiten jeder dieser Arten von Steuerelementen besprechen und dabei die Schwierigkeiten hervorheben.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen. In unterstützenden Browsern und Codebasen müssen Sie sich keine Sorgen mehr um die unten beschriebenen Techniken für `<select>`-Elemente machen.

Das Styling von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) ermöglicht ein akzeptables Maß an Anpassung, vorausgesetzt, Sie möchten das Aussehen nicht zu sehr von den Vorgaben abweichen. Wir haben es geschafft, die Felder recht gleichmäßig und konsistent aussehen zu lassen. Das Datalist-aktivierende Steuerelement ist ohnehin ein `<input type="text">`, also wussten wir, dass dies kein Problem darstellen würde.

Zwei Dinge sind etwas problematischer. Zunächst einmal unterscheidet sich das "Pfeil"-Symbol des Selects, das anzeigt, dass es sich um ein Dropdown-Feld handelt, in verschiedenen Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe des Select-Feldes erhöhen oder es auf eine unansehnliche Weise anpassen. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol ganz zu entfernen:

```css
select {
  appearance: none;
}
```

Dann haben wir unser eigenes Symbol mithilfe von generiertem Inhalt erstellt. Wir haben eine zusätzliche Hülle um das Steuerelement gelegt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht auf `<select>`-Elementen funktionieren (ihr Inhalt wird vollständig vom Browser gesteuert):

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

Dann verwenden wir generierten Inhalt, um ein kleines Abwärtssymbol zu erzeugen und es an der richtigen Stelle mit Positionierung zu setzen:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Feld haben, das die Optionen enthält und erscheint, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die Schriftart des übergeordneten Elements erben, aber Sie können Dinge wie Abstände und Farben nicht festlegen. Dasselbe gilt für die Auto-Vervollständigungs-Liste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über das Styling der Optionen haben möchten, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen. Im Fall von `<select>` könnten Sie auch das `multiple`-Attribut verwenden, wodurch alle Optionen auf der Seite angezeigt werden, sodass dieses spezielle Problem umgangen wird:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise auch nicht zu dem Design, das Sie anstreben, aber es ist erwähnenswert!

### Dateneingabetypen

Die Date/Time-Eingabetypen ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe größere Problem. Der eigentliche Container ist so leicht zu stylen wie jede Texteingabe, und das, was wir in dieser Demo haben, sieht gut aus.

Die inneren Teile der Steuerung (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Schieberegler, mit dem Sie Werte erhöhen oder verringern können) sind jedoch überhaupt nicht stilisierbar, und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich die volle Kontrolle über das Styling wünschen, müssen Sie entweder eine Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu erstellen, oder Ihre eigene entwickeln.

> [!NOTE]
> Es lohnt sich, hier auch [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) zu erwähnen — dieses hat ebenfalls einen Schieberegler, mit dem Sie Werte erhöhen oder verringern können, leidet also potenziell unter demselben Problem. Im Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher, und es ist leicht, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Erscheinungsbild von `text` hat, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist ärgerlich zu stylen. Sie können etwas wie das Folgende verwenden, um die Standardskala komplett zu entfernen und sie durch einen benutzerdefinierten Stil zu ersetzen (eine dünne rote Skala, in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Schiebereglers der Bereichssteuerung anzupassen — um die volle Kontrolle über das Bereichsstyling zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, einschließlich mehrerer nicht standardisierter, browsereigener Pseudo-Elemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS Tricks für eine detailliertere Beschreibung dessen, was nötig ist, an.

### Farbeingabetypen

Eingabesteuerungen vom Typ Farbe sind nicht zu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Block aus Volltonfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen und nur den Farbblock übrig lassen, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch der einzige Weg, um etwas wesentlich anderes zu erhalten.

### Dateieingabetypen

Eingaben vom Typ Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es relativ einfach, etwas zu erstellen, das gut mit dem Rest der Seite harmoniert — die Ausgabelinie, die Teil der Steuerung ist, wird die Elternschrift übernehmen, wenn Sie die Eingabe anweisen, dies zu tun, und Sie können die benutzerdefinierte Liste der Dateinamen und Größen beliebig gestalten; wir haben sie schließlich erstellt.

Das einzige Problem bei Dateiauswahlen ist, dass der Button, den Sie drücken, um die Dateiauswahl zu öffnen, vollkommen unstylisierbar ist — er kann nicht skaliert oder gefärbt werden, und er akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dies zu umgehen, besteht darin, die Tatsache auszunutzen, dass, wenn Sie ein Label haben, das mit einem Formularsteuerelement assoziiert ist, ein Klick auf das Label das Steuerelement aktiviert. So könnten Sie die eigentliche Formulareingabe mit etwas wie diesem verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so stylen, dass es wie ein Button aussieht, der beim Drücken den Dateiauswahlprozessor wie erwartet öffnet:

```css
label[for="file"] {
  box-shadow: 1px 1px 3px #ccc;
  background: linear-gradient(to bottom, #eee, #ccc);
  border: 1px solid darkgrey;
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, white, #ddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #ccc;
}
```

Das Ergebnis der obigen CSS-Styling können Sie im Live-Beispiel unten sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Metrik- und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Darüber hinaus sind sie jedoch wirklich schwer zu stylen. Sie verarbeiten das Setzen von Höhen nicht konsistent zueinander und zwischen den Browsern, Sie können den Hintergrund färben, aber nicht die vorderste Leiste, und das Setzen von `appearance: none` auf ihnen verschlimmert die Dinge, anstatt sie zu verbessern.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie das Styling kontrollieren möchten, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten beim Einsatz von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Im Moment ist die beste Lösung, mehr darüber zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir uns mit dem Erstellen von [vollständig angepassten `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) unter Verwendung der speziellen, modernen HTML- und CSS-Funktionen befassen, die für diesen Zweck verfügbar sind.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
