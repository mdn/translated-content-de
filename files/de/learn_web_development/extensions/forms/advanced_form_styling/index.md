---
title: Fortgeschrittenes Styling von Formularen
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 69514142d2eb708ad577e7ce3b658b473c8da8cc
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS gemacht werden kann, um die Arten von Formularsteuerungen zu stylen, die schwieriger zu stylen sind - die „schlechten“ und „hässlichen“ Kategorien. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen leicht zu stylen; jetzt werden wir uns den problematischeren Teilen widmen.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen, was getan werden kann, um diese anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Um zusammenzufassen, was wir im vorherigen Artikel gesagt haben, haben wir:

**Das Schlechte**: Einige Elemente sind schwieriger zu gestalten und erfordern komplexeres CSS oder spezifischere Tricks:

- Kontrollkästchen und Optionsschaltflächen
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können nicht vollständig mit CSS gestaltet werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zunächst über die [`appearance`](/de/docs/Web/CSS/appearance) Eigenschaft sprechen, die nützlich ist, um alle oben genannten Elemente besser gestaltbar zu machen.

## `appearance`: Kontrolle des OS-Level-Stylings

Im vorherigen Artikel erwähnten wir, dass die Gestaltung von Webformular-Steuerelementen traditionell weitgehend vom zugrunde liegenden Betriebssystem abgeleitet wurde, was ein Teil des Grunds ist, warum es schwierig ist, das Aussehen dieser Steuerelemente anzupassen.

Die {{cssxref("appearance")}}-Eigenschaft wurde geschaffen, um zu steuern, welches OS- oder systemweite Styling auf Webformular-Steuerelemente angewendet wurde. Der bei weitem hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein Steuerelement, auf das Sie es anwenden, soweit wie möglich das systemweite Styling nutzt, und ermöglicht es Ihnen, die Stile selbst mit CSS aufzubauen.

Betrachten Sie zum Beispiel die folgenden Steuerelemente:

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

Das Anwenden des folgenden CSS entfernt das systemweite Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt, wie sie auf Ihrem System aussehen - standardmäßig auf der linken Seite und mit dem obigen CSS auf der rechten ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen besteht die Wirkung darin, die stilisierte Umrandung zu entfernen, was das CSS-Styling ein wenig erleichtert, aber nicht essenziell ist. In einigen Fällen, wie bei Optionsschaltflächen und Kontrollkästchen, wird es deutlich nützlicher. Wir werden uns diese jetzt ansehen.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war besonders nützlich, um [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elemente konsistent zu stylen. Ohne ihn erlaubte Safari weder die Einstellung von {{cssxref("height")}} noch von {{cssxref("font-size")}} Werten auf ihnen. In Safari 16 und später ist das jedoch nicht mehr der Fall. Möglicherweise möchten Sie dennoch `input[type="search"]` explizit mit `appearance: none;` ansprechen, wenn Ihre Browser-Unterstützungsmatrix Safari-Versionen älter als 16 enthält.

In Suchinputs verschwindet der "x"-Löschknopf, der erscheint, wenn der Wert nicht null ist, wenn das Eingabefeld den Fokus in Edge und Chrome verliert, bleibt jedoch in Safari bestehen. Um ihn per CSS zu entfernen, können Sie diese Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Kontrollkästchen und Optionsschaltflächen

Das Styling eines Kontrollkästchens oder einer Optionsschaltfläche ist standardmäßig schwierig. Die Größen von Kontrollkästchen und Optionsschaltflächen sollen mit ihren Standarddesigns nicht verändert werden, und Browser reagieren sehr unterschiedlich, wenn Sie versuchen, dies zu tun.

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

Verschiedene Browser behandeln das Kontrollkästchen und den Span unterschiedlich, oft auf unschöne Weise:

| Browser                             | Rendering                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgraue Umrandung](firefox-mac-checkbox.png)                               |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauer Umrandung](firefox-windows-checkbox.png)                        |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecke mit 1px mittelgrauer Umrandung](chrome-mac-checkbox.png)                              |
| Chrome 63 (Windows 10)              | ![Rechteckige Umrandungen mit leicht grauem Hintergrund anstelle von Weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Umrandungen mit leicht grauem Hintergrund anstelle von Weiß.](edge-checkbox.png)           |

#### Verwendung von appearance: none bei Radios/Kontrollkästchen

Wie wir zuvor gezeigt haben, können Sie das Standardaussehen eines Kontrollkästchens oder einer Optionsschaltfläche mit {{cssxref("appearance", "appearance: none;")}} vollständig entfernen. Nehmen wir dieses Beispiel-HTML:

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

Jetzt stylen wir diese mit einem benutzerdefinierten Kontrollkästchendesign. Beginnen wir damit, die ursprünglichen Kontrollkästchen zu entstylen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}} und {{cssxref(":disabled")}} Pseudo-Klassen verwenden, um das Erscheinungsbild unseres benutzerdefinierten Kontrollkästchens zu ändern, wenn sich sein Zustand ändert:

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

Sie erfahren mehr über solche Pseudo-Klassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die obigen erledigen Folgendes:

- `:checked` — das Kontrollkästchen (oder die Optionsschaltfläche) befindet sich im ausgewählten Zustand — der Benutzer hat darauf geklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder die Optionsschaltfläche) befindet sich im deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Optionsschaltflächen](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Optionsschaltflächen-Styling.
- [Umschalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen im Look eines Umschalters.

Wenn Sie diese Kontrollkästchen in einem Browser anzeigen, der {{cssxref("appearance")}} nicht unterstützt, geht Ihr benutzerdefiniertes Design verloren, aber sie werden immer noch wie Kontrollkästchen aussehen und verwendbar sein.

## Was kann man mit den "hässlichen" Elementen machen?

Wenden wir uns nun den "hässlichen" Steuerungen zu — denjenigen, die wirklich schwer gründlich zu stylen sind. Kurz gesagt, dies sind Dropdown-Menüs, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), und feedback-orientierte Steuerungen wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standardansichten in verschiedenen Browsern haben, und obwohl Sie sie in gewisser Weise stylen können, sind einige Teile ihrer Interna unmöglich zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden in Aussehen und Haptik zu leben, können einfache Styles verwendet werden, um die Dinge erheblich zu verbessern. Dazu gehören konsistente Größenanpassungen und das Styling von Eigenschaften wie `background-color` und die Verwendung von `appearance`, um einige systemweite Stylings zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Reihe der „hässlichen“ Formularfunktionen in Aktion zeigt:

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
> Wenn Sie diese Beispiele in mehreren Browsern gleichzeitig testen möchten, können Sie [es hier live finden](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (siehe auch [hier die Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Beachten Sie auch, dass wir etwas JavaScript auf der Seite hinzugefügt haben, das die vom Dateiauswahlwerkzeug ausgewählten Dateien unterhalb der Steuerung selbst auflistet. Dies ist eine vereinfachte Version des Beispiels auf der [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) Referenzseite.

Wie Sie sehen können, ist es uns gelungen, diese in modernen Browsern relativ einheitlich aussehen zu lassen.

Wir haben einiges an globalem, normalisierendem CSS auf alle Steuerungen und deren Beschriftungen angewendet, um sie auf die gleiche Weise zu dimensionieren, die Schriftart des übergeordneten Elements zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir fügten auch einige gleichmäßige Schatten und abgerundete Ecken dort hinzu, wo es sinnvoll ist:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerungen wie Schiebereglern, Fortschrittsbalken und Messgeräten fügen sie nur einen hässlichen Rahmen um das Steuerungsgebiet hinzu, was keinen Sinn macht.

Lassen Sie uns einige Besonderheiten dieser Steuerungstypen besprechen und die Schwierigkeiten hervorheben.

### Auswahl und Datenlisten

Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen. In unterstützten Browsern und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen alten Techniken für `<select>`-Elemente kümmern.

Das Styling von Datenlisten und Auswahlelementen (in Browsern, die keine anpassbaren Auswahloptionen unterstützen) ermöglicht ein akzeptables Maß an Anpassung, vorausgesetzt, Sie möchten nicht das Aussehen und Gefühl zu stark von den Standards abweichen. Wir haben es geschafft, die Kästchen ziemlich einheitlich und konsistent aussehen zu lassen. Das Steuerungselement, das die Datalist aufruft, ist sowieso ein `<input type="text">`, also wussten wir, dass das kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Zuerst das "Pfeil"-Symbol der Auswahl, das anzeigt, dass es sich um ein Dropdown handelt, sich zwischen den Browsern unterscheidet. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe des Auswahlfelds vergrößern oder es auf hässliche Weise neu dimensionieren. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol ganz loszuwerden:

```css
select {
  appearance: none;
}
```

Dann haben wir unser eigenes Symbol mit generiertem Inhalt erstellt. Wir haben eine zusätzliche Hülle um die Steuerung gelegt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht auf `<select>`-Elementen funktionieren (ihr Inhalt wird vollständig vom Browser kontrolliert):

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

Wir verwenden dann generierten Inhalt, um einen kleinen Pfeil nach unten zu generieren und platzieren ihn mit Positionierung an der richtigen Stelle:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Kästchen haben, das erscheint und die Optionen anzeigt, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die auf dem übergeordneten Element eingestellte Schriftart erben, aber Sie können keine Dinge wie Abstände und Farben einstellen. Dasselbe gilt für die Autovervollständigungsliste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich volle Kontrolle über das Styling der Optionen benötigen, müssen Sie entweder eine Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu erstellen, oder Ihre eigene entwickeln. Im Fall von `<select>` könnten Sie auch das `multiple`-Attribut verwenden, das alle Optionen auf der Seite anzeigt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise nicht zu dem Design, das Sie anstreben, aber es ist erwähnenswert!

### Datumseingabefelder

Die Datum/Uhrzeit Eingabefelder ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle das gleiche wesentliche damit verbundene Problem. Das eigentliche Eingabefeld ist so einfach zu stylen wie jedes Texteingabefeld, und was wir in dieser Demo haben, sieht gut aus.

Jedoch sind die internen Teile der Steuerung (z.B. das Popup-Kalender, das Sie zur Auswahl eines Datums verwenden, der Spinner, den Sie zum Erhöhen/Verringern von Werten verwenden können) überhaupt nicht stylbar, und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich volle Kontrolle über das Styling benötigen, müssen Sie entweder eine Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu erstellen, oder Ihre eigene entwickeln.

> [!NOTE]
> Es ist erwähnenswert [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) hier auch — dies hat auch einen Spinner, den Sie verwenden können, um Werte zu erhöhen oder zu verringern, so dass es potenziell das gleiche Problem hat. Im Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher, und es ist einfach, statt dessen einen `tel` Eingabetyp zu verwenden, der das Erscheinungsbild von `text` hat, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Reichweiteneingabefelder

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist mühsam zu gestalten. Sie können etwas wie das Folgende verwenden, um den Standardschiebereglerin vollständig zu entfernen und durch einen benutzerdefinierten Stil zu ersetzen (eine dünne rote Spur, in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Jedoch ist es sehr schwierig, den Stil des Ziehgriffs des Range-Controls anzupassen — um volle Kontrolle über das Range-Styling zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, einschließlich mehrerer nicht-standardmäßiger, browserspezifischer Pseudo-Elemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS Tricks für eine detaillierte Anleitung zu dem, was benötigt wird.

### Farbeingabefelder

Farbeingabekontrollen sind nicht zu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Block aus Vollfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen und nur den Block aus Farbe hinterlassen, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Jedoch ist eine benutzerdefinierte Lösung der einzige Weg, um etwas signifikant anderes zu erhalten.

### Dateieingabefelder

Dateieingabefelder sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu schaffen, das in Ordnung mit dem Rest der Seite übereinstimmt — die Ausgabereihe, die Teil der Steuerung ist, wird die übergeordnete Schriftart erben, wenn Sie den Input entsprechend einstellen, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen auf jede beliebige Weise gestalten; wir haben sie schließlich erstellt.

Das einzige Problem mit Dateiauswahlwerkzeugen ist, dass die Schaltfläche, die Sie drücken, um den Dateiauswahlwerkzeug zu öffnen, völlig unstylbar ist — sie kann nicht dimensioniert oder gefärbt werden, und sie akzeptiert nicht einmal eine andere Schriftart.

Eine Möglichkeit, dies zu umgehen, besteht darin, den Vorteil zu nutzen, dass, wenn Sie ein Label mit einer Formularsteuerung verknüpfen, das Klicken auf das Label die Steuerung aktivieren wird. Daher könnten Sie die eigentliche Formulareingabe mit so etwas verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so stylen, dass es wie eine Schaltfläche aussieht, die, wenn sie gedrückt wird, den Dateiauswahlwerkzeug wie erwartet öffnet:

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

Sie können das Ergebnis des obigen CSS-Stylings im Live-Beispiel unten sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live, und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Messgeräte und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im vorherigen Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwierig, in irgendeiner Weise zu stylen. Sie gehen mit Höhenanpassungen nicht konsistent zwischen sich selbst und zwischen Browsern um, Sie können den Hintergrund färben, aber nicht die Vordergrundleiste, und das Setzen von `appearance: none` auf ihnen macht die Dinge schlimmer, nicht besser.

Es ist einfacher, eine eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie die Kontrolle über das Styling haben möchten, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Während es immer noch Schwierigkeiten gibt, CSS mit HTML-Formularen zu verwenden, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Fürs Erste ist die beste Lösung, mehr darüber zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularsteuerungen angewendet wird.

Im nächsten Artikel dieses Moduls werden wir untersuchen, wie man [vollständig angepasste `<select>`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dafür verfügbaren modernen HTML- und CSS-Funktionen erstellt.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
