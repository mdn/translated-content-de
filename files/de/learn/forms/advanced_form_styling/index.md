---
title: Erweiterte Form-Stilgestaltung
slug: Learn/Forms/Advanced_form_styling
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularelementen zu gestalten, die schwieriger zu stilisieren sind — die "schlechten" und "hässlichen" Kategorien. Wie wir [im vorherigen Artikel](/de/docs/Learn/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen leicht zu gestalten; nun werden wir uns mit den problematischeren Teilen befassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Wiederholung haben wir im vorherigen Artikel gesagt:

**Die schlechten**: Einige Elemente sind schwieriger zu gestalten und erfordern komplexeres CSS oder spezifischere Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

**Die hässlichen**: Einige Elemente können nicht umfassend mit CSS gestaltet werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zunächst sprechen wir über die [`appearance`](/de/docs/Web/CSS/appearance)-Eigenschaft, die sehr nützlich ist, um all die oben genannten Elemente besser zu gestalten.

## appearance: Kontrolle über das OS-Styling

Im vorherigen Artikel haben wir gesagt, dass die Gestaltung von Webformular-Steuerelementen historisch größtenteils vom zugrundeliegenden Betriebssystem übernommen wurde, was ein Teil des Problems bei der Anpassung dieser Steuerelemente ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde entwickelt, um zu steuern, welches OS- oder systemweite Styling auf Webformular-Steuerelemente angewendet wurde. Bei weitem der hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies stoppt (soweit möglich) jedes Steuerelement, bei dem Sie es anwenden, davor, systemweites Styling zu verwenden, und lässt Sie die Stile selbst mit CSS erstellen.

Zum Beispiel nehmen wir die folgenden Steuerelemente:

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

Mit der Anwendung des folgenden CSS wird das systemweite Styling entfernt.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie auf Ihrem System aussehen — standardmäßig links und mit dem obigen CSS angewendet rechts ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen besteht der Effekt darin, die stilisierte Umrandung zu entfernen, was das CSS-Styling erleichtert, aber nicht wirklich essentiell ist. In ein paar Fällen — Such- und Radio-/Checkboxen — wird es viel nützlicher. Wir schauen uns diese jetzt an.

### Suchfelder zähmen

[`<input type="search">`](/de/docs/Web/HTML/Element/input/search) ist im Grunde nur ein Texteingabefeld, also warum ist `appearance: none;` hier nützlich? Die Antwort ist, dass Safari-Suchfelder einige Stilbeschränkungen haben — zum Beispiel können Sie deren `height` oder `font-size` nicht frei anpassen.

Dies kann mit unserem Freund `appearance: none;` behoben werden, der das Standarderscheinungsbild deaktiviert:

```css
input[type="search"] {
  appearance: none;
}
```

Im folgenden Beispiel sehen Sie zwei identisch gestaltete Suchfelder. Das rechte hat `appearance: none;` angewendet, das linke nicht. Wenn Sie es in Safari auf macOS ansehen, werden Sie sehen, dass das linke nicht richtig dimensioniert ist.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

Interessanterweise behebt das Setzen der Umrandung/Hintergrund auf dem Suchfeld dieses Problem ebenfalls. Die folgende gestaltete Suche hat `appearance: none;` nicht angewendet, leidet aber nicht unter dem gleichen Problem in Safari wie das vorherige Beispiel.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> [!NOTE]
> Sie haben vielleicht bemerkt, dass im Suchfeld das "x"-Löschen-Symbol, das erscheint, wenn der Wert der Suche nicht null ist, in Edge und Chrome verschwindet, wenn das Eingabefeld den Fokus verliert, aber in Safari bestehen bleibt. Um es via CSS zu entfernen, können Sie `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button { display: none; }` verwenden.

### Gestalten von Kontrollkästchen und Optionsfeldern

Das Gestalten eines Kontrollkästchens oder eines Optionsfeldes ist von Natur aus schwierig. Die Größen von Kontrollkästchen und Optionsfeldern sollen nicht mit ihrem Standarddesign geändert werden, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen.

Zum Beispiel betrachten Sie diesen einfachen Testfall:

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

Verschiedene Browser behandeln das Kontrollkästchen und Span unterschiedlich, oft in unschönen Weisen:

| Browser                             | Rendering                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgraue Umrandung](firefox-mac-checkbox.png)                               |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauer Umrandung](firefox-windows-checkbox.png)                        |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecke mit 1px mittelgrauer Umrandung](chrome-mac-checkbox.png)                              |
| Chrome 63 (Windows 10)              | ![Rechteckige Umrandungen mit leicht grauem Hintergrund anstelle von weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Umrandungen mit leicht grauem Hintergrund anstelle von weiß.](edge-checkbox.png)           |

#### Verwendung von appearance: none bei Radios/Kontrollkästchen

Wie wir zuvor gezeigt haben, können Sie das Standarderscheinungsbild eines Kontrollkästchens oder Optionsfeldes mit {{cssxref("appearance", "appearance: none;")}} vollständig entfernen. Nehmen wir dieses Beispiel-HTML:

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

Nun, lassen Sie uns diese mit einem benutzerdefinierten Kontrollkästchen-Design gestalten. Beginnen wir mit dem Entfernen der ursprünglichen Kontrollkästchen-Gestaltung:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die Pseudoklassen {{cssxref(":checked")}} und {{cssxref(":disabled")}} verwenden, um das Erscheinungsbild unserer benutzerdefinierten Kontrollkästchen zu ändern, wenn sich ihr Zustand ändert:

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

Sie erfahren mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn/Forms/UI_pseudo-classes); die obigen bewirken Folgendes:

- `:checked` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem aktivierten Zustand — der Benutzer hat darauf geklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestaltete Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Anpassung der Optionsfeldgestaltung.
- [Toggle-Switch-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Umschalter aussieht.

Wenn Sie diese Kontrollkästchen in einem Browser ansehen, der {{cssxref("appearance")}} nicht unterstützt, wird Ihr benutzerdefiniertes Design verloren gehen, aber sie werden immer noch wie Kontrollkästchen aussehen und benutzbar sein.

## Was kann bei den "hässlichen" Elementen getan werden?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer umfassend zu gestalten sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Element/input/color) und [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local) sowie feedbackorientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente in verschiedenen Browsern sehr unterschiedlich aussehen, und obwohl Sie sie in gewisser Weise gestalten können, sind einige Teile ihrer Interna buchstäblich unmöglich zu gestalten.

Wenn Sie mit einigen Unterschieden im Aussehen und Gefühl leben können, können Sie mit einigen einfachen Stilisierungen durchkommen, um die Größe konsistent zu machen, einheitliches Styling von Dingen wie Hintergrundfarben zu erreichen und das Aussehen zu verwenden, um etwas systemweites Styling loszuwerden.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formulareigenschaften in Aktion zeigt:

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
> Wenn Sie diese Beispiele gleichzeitig in mehreren Browsern testen möchten, können Sie sie [hier live finden](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (sehen Sie auch [hier den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Beachten Sie auch, dass wir der Seite etwas JavaScript hinzugefügt haben, das die vom Dateiauswahler ausgewählten Dateien auflistet, unterhalb des Steuerelements selbst. Dies ist eine vereinfachte Version des Beispiels, das auf der Referenzseite [`<input type="file">`](/de/docs/Web/HTML/Element/input/file#examples) gefunden wurde.

Wie Sie sehen, haben wir es ziemlich gut geschafft, diese in modernen Browsern einheitlich aussehen zu lassen.

Wir haben etwas globales, normalisierendes CSS auf alle Steuerelemente und ihre Beschriftungen angewendet, um sie in gleicher Weise zu dimensionieren, ihre Elternschrift zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einige einheitliche Schatten und abgerundete Ecken auf die Steuerelemente angewendet, bei denen es Sinn machte:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Range-Typen, Fortschrittsbalken und Meter fügen sie nur eine hässliche Box um den Steuerungsbereich hinzu, daher macht es keinen Sinn.

Lassen Sie uns einige Besonderheiten jedes dieser Steuerungstypen besprechen und dabei Schwierigkeiten hervorheben.

### Auswahlen und Datenlisten

In modernen Browsern sind Auswahlen und Datenlisten im Allgemeinen nicht allzu schlecht zu gestalten, vorausgesetzt, Sie wollen das Aussehen und Gefühl nicht zu sehr von den Standardwerten abweichen lassen.

Es gelang uns, das grundlegende Aussehen der Boxen ziemlich einheitlich und konsistent zu gestalten. Die Datenlistensteuerung ist sowieso `<input type="text">`, daher wussten wir, dass dies kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Zunächst einmal unterscheidet sich das "Pfeil"-Symbol, das anzeigt, dass es sich um ein Dropdown handelt, von Browser zu Browser. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Auswahlbox erhöhen oder auf hässliche Weise anpassen. Um dies in unserem Beispiel zu korrigieren, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol vollständig zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol mit generiertem Inhalt erstellt. Wir haben eine zusätzliche Umhüllung um das Steuerelement gesetzt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht auf `<select>`-Elementen funktionieren (weil ihr Inhalt vollständig vom Browser gesteuert wird):

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

Wir verwenden dann generierten Inhalt, um einen kleinen Abwärtspfeil zu erzeugen, und platzieren ihn mit Positionierung an der richtigen Stelle:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über die Box haben, die erscheint und die Optionen enthält, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die von den Eltern geerbte Schriftart übernehmen, aber Dinge wie Abstände und Farben nicht einstellen. Das Gleiche gilt für die Autovervollständigungsliste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über die Optionengestaltung benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erstellen, oder Ihr eigenes benutzerdefiniertes Steuerelement erstellen, oder im Fall von select das `multiple`-Attribut verwenden, das alle Optionen auf der Seite erscheinen lässt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich kann dies auch nicht mit dem von Ihnen gewünschten Design übereinstimmen, aber es lohnt sich, es zu beachten!

### Datums-Eingabetypen

Die Eingabetypen Datum/Zeit ([`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), [`time`](/de/docs/Web/HTML/Element/input/time), [`week`](/de/docs/Web/HTML/Element/input/week), [`month`](/de/docs/Web/HTML/Element/input/month)) haben alle dasselbe große zugehörige Problem. Die eigentliche Box lässt sich so einfach gestalten wie ein beliebiges Textfeld, und was wir in dieser Demo haben, sieht gut aus.

Aber die internen Teile der Steuerung (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Drehknopf, den Sie verwenden können, um Werte zu erhöhen/verringern) sind überhaupt nicht gestaltbar, und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich die volle Kontrolle über die Gestaltung benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erstellen, oder Ihr eigenes erstellen.

> [!NOTE]
> Es lohnt sich zu erwähnen, dass [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) hier auch erwähnt wird — dies hat ebenfalls einen Drehknopf, den Sie verwenden können, um Werte zu erhöhen/verringern, und leidet möglicherweise unter dem gleichen Problem. Allerdings ist im Fall des `number`-Typs die gesammelte Daten einfacher, und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Erscheinungsbild von `text` hat, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Bereichs-Eingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Element/input/range) ist ärgerlich zu gestalten. Sie können etwas wie das Folgende verwenden, um die Standardschieber-Leiste vollständig zu entfernen und durch einen benutzerdefinierten Stil zu ersetzen (eine dünne rote Spur in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Allerdings ist es sehr schwierig, den Stil des Drag-Handles der Bereichssteuerung anzupassen — um die volle Kontrolle über die Bereichsgestaltung zu erhalten, müssen Sie eine ganze Menge komplexer CSS-Code verwenden, einschließlich mehrerer nicht-standardisierter, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für einen detaillierten Überblick darüber an, was nötig ist.

### Farbe Eingabetypen

Eingabekontrollen vom Typ Farbe sind nicht so schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Block aus Vollfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen und nur den Farbblock belassen, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Allerdings ist eine benutzerdefinierte Lösung der einzige Weg, um etwas signifikant anderes zu erreichen.

### Datei-Eingabetypen

Eingaben vom Typ Datei sind generell in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu schaffen, das gut mit dem Rest der Seite harmoniert — die Ausgabeleiste, die Teil des Steuerelements ist, übernimmt die Elternschrift, wenn Sie die Eingabe dazu bringen, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen nach Belieben gestalten; wir haben sie schließlich erstellt.

Das einzige Problem bei Dateiauswählern ist, dass die Schaltfläche, die Sie drücken, um den Dateiauswähler zu öffnen, völlig ungestaltbar ist — sie kann nicht in der Größe oder Farbe angepasst werden, und selbst eine andere Schriftart akzeptiert sie nicht.

Ein Weg, dies zu umgehen, besteht darin, die Tatsache zu nutzen, dass wenn Sie ein Label mit einer Formsteuerung verbunden haben, das Anklicken des Labels die Steuerung aktiviert. Sie könnten die eigentliche Formeingabe daher mit so etwas verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label stilisieren, um wie eine Schaltfläche zu wirken, die, wenn sie gedrückt wird, den Dateiauswähler wie erwartet öffnet:

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

Sie können das Ergebnis der obigen CSS-Stilgestaltung im folgenden Live-Beispiel sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live, und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Meter und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Element/meter) und [`<progress>`](/de/docs/Web/HTML/Element/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwer auf irgendeine Weise zu gestalten. Sie behandeln Höhenangaben inkonsistent zueinander und zu den Browsern, Sie können den Hintergrund färben, aber nicht die vordere Balken, und das Setzen von `appearance: none` darauf macht die Dinge schlimmer, nicht besser.

Es ist einfacher, eine eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie in der Lage sein möchten, das Styling zu kontrollieren, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

Der Artikel [Anleitung: Eigene Formularsteuerungen erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls) bietet ein Beispiel, wie Sie ein benutzerdefiniertes designedes Selektfeld mit HTML, CSS und JavaScript erstellen können.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten gibt, CSS mit HTML-Formularen zu verwenden, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Vorerst ist die beste Lösung, mehr über die Art und Weise, wie die verschiedenen Browser CSS unterstützen, zu lernen, wenn es auf HTML-Formular-Steuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu gestalten.

{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

### Erweiterte Themen

- [Anleitung: Eigene Formularsteuerungen erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschafts-Kompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
