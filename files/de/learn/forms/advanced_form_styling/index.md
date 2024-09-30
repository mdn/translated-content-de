---
title: Erweiterte Formular-Stilgestaltung
slug: Learn/Forms/Advanced_form_styling
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularelementen zu gestalten, die schwieriger zu stylen sind — die Kategorien der „schlechten“ und „hässlichen“. Wie wir [im vorherigen Artikel](/de/docs/Learn/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen sehr einfach zu stylen; jetzt tauchen wir in die Gestaltung der problematischeren Teile ein.

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
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Um zusammenzufassen, was wir im vorherigen Artikel gesagt haben, haben wir:

**Das Schlechte**: Einige Elemente sind schwerer zu gestalten und erfordern komplexeres CSS oder einige spezifische Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

**Das Hässliche**: Einige Elemente können nicht umfassend mit CSS gestaltet werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Sprechen wir zuerst über die [`appearance`](/de/docs/Web/CSS/appearance) -Eigenschaft, die ziemlich nützlich ist, um all die genannten Elemente besser gestalten zu können.

## appearance: Kontrolle über OS-Level-Styling

Im vorherigen Artikel sagten wir, dass das Styling von Formularsteuerungen im Web historisch weitgehend vom zugrunde liegenden Betriebssystem übernommen wurde, was Teil des Problems bei der Anpassung des Aussehens dieser Steuerungen ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde eingeführt, um zu kontrollieren, welches OS- oder System-Level-Styling auf Formularsteuerungen im Web angewendet wird. Der bei weitem hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass jedes Steuerelement, auf das es angewendet wird, soweit wie möglich systemweites Styling verwendet und ermöglicht es Ihnen, die Stile selbst mithilfe von CSS aufzubauen.

Nehmen wir zum Beispiel die folgenden Steuerelemente:

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

Durch das Anwenden des folgenden CSS auf diese werden die systemebenen Stile entfernt.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie in Ihrem System aussehen — Standardmäßig auf der linken Seite und mit dem obigen CSS auf der rechten Seite angewendet ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen besteht die Wirkung darin, die stilisierten Rahmen zu entfernen, was die CSS-Gestaltung ein wenig erleichtert, aber nicht wirklich wesentlich ist. In ein paar Fällen — Such- und Optionsfelder/Kontrollkästchen — wird es viel nützlicher. Wir werden uns das jetzt ansehen.

### Suchfelder bändigen

[`<input type="search">`](/de/docs/Web/HTML/Element/input/search) ist im Grunde nur ein Texteingabefeld. Warum also ist `appearance: none;` hier nützlich? Die Antwort ist, dass Safari-Suchfelder einige Stylingeinschränkungen haben — Sie können zum Beispiel ihre `height` oder `font-size` nicht frei anpassen.

Dies kann mit unserem Freund `appearance: none;` behoben werden, das das Standard-Erscheinungsbild deaktiviert:

```css
input[type="search"] {
  appearance: none;
}
```

Im folgenden Beispiel können Sie zwei identisch gestaltete Suchfelder sehen. Das rechte hat `appearance: none;` angewendet und das linke nicht. Wenn Sie es in Safari auf macOS betrachten, werden Sie sehen, dass das linke nicht richtig dimensioniert ist.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

Interessanterweise behebt das Setzen von Rahmen/Hintergrund auf das Suchfeld auch dieses Problem. Das folgende gestaltete Suchfeld hat `appearance: none;` nicht angewendet, leidet aber im Gegensatz zum vorherigen Beispiel in Safari nicht unter demselben Problem.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> [!NOTE]
> Sie haben vielleicht bemerkt, dass im Suchfeld das „x“-Löschen-Symbol, das erscheint, wenn der Wert der Suche nicht null ist, verschwindet, wenn das Eingabefeld in Edge und Chrome den Fokus verliert, aber in Safari bleibt. Um es über CSS zu entfernen, können Sie `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button { display: none; }` verwenden.

### Styling von Kontrollkästchen und Optionsfeldern

Das Styling eines Kontrollkästchens oder eines Optionsfeldes ist von Haus aus kompliziert. Die Größen von Kontrollkästchen und Optionsfeldern sind nicht für Änderungen mit ihren Standarddesigns gedacht, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen.

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

Verschiedene Browser behandeln das Kontrollkästchen und span unterschiedlich, oft auf hässliche Weise:

| Browser                             | Rendering                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgrauer Rahmen](firefox-mac-checkbox.png)                               |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauem Rahmen](firefox-windows-checkbox.png)                         |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecke mit 1px mittelgrauem Rahmen](chrome-mac-checkbox.png)                               |
| Chrome 63 (Windows 10)              | ![Rechteckige Rahmen mit leicht grauem Hintergrund statt weiß.](chrome-windows-checkbox.png)           |
| Edge 16 (Windows 10)                | ![Rechteckige Rahmen mit leicht grauem Hintergrund statt weiß.](edge-checkbox.png)                      |

#### Verwendung von appearance: none für Radios/Kontrollkästchen

Wie wir zuvor gezeigt haben, können Sie das Standard-Erscheinungsbild eines Kontrollkästchens oder eines Optionsfeldes vollständig mit {{cssxref("appearance", "appearance: none;")}} entfernen. Nehmen wir dieses Beispiel-HTML:

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

Nun, lassen Sie uns diese mit einem benutzerdefinierten Kontrollkästchendesign gestalten. Lassen Sie uns beginnen, indem wir die originalen Kontrollkästchen unstylen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}} und {{cssxref(":disabled")}} Pseudoklassen verwenden, um das Erscheinungsbild unseres benutzerdefinierten Kontrollkästchens zu ändern, während sich sein Zustand ändert:

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

Sie werden mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn/Forms/UI_pseudo-classes) erfahren; die obigen führen Folgendes aus:

- `:checked` — das Kontrollkästchen (oder Optionsfeld) ist in einem aktivierten Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) ist in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Optionsfeld-Styling.
- [Toggle-Schalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Toggle-Schalter aussieht.

Wenn Sie diese Kontrollkästchen in einem Browser anzeigen, der {{cssxref("appearance")}} nicht unterstützt, wird Ihr benutzerdefiniertes Design verloren gehen, aber sie werden immer noch wie Kontrollkästchen aussehen und verwendbar sein.

## Was kann gegen die "hässlichen" Elemente getan werden?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer umfassend zu gestalten sind. Kurz gesagt, dazu gehören Dropdown-Boxen, komplexe Steuerelementtypen wie [`color`](/de/docs/Web/HTML/Element/input/color) und [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local) sowie feedback-orientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente in verschiedenen Browsern sehr unterschiedliche Standardaussehen haben, und während Sie sie in gewisser Weise stylen können, sind einige Teile ihrer internen Struktur buchstäblich unmöglich zu stylen.

Wenn Sie bereit sind, einige Unterschiede im Aussehen und Verhalten in Kauf zu nehmen, können Sie mit einfachem Styling auskommen, um eine konsistente Größenanpassung, einheitliches Styling von Dingen wie Hintergrundfarben und die Verwendung von appearance zu ermöglichen, um einige systemebene Stile loszuwerden.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formularelemente in Aktion zeigt:

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
> Wenn Sie diese Beispiele gleichzeitig in mehreren Browsern testen möchten, können Sie [es hier live finden](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (siehe auch [hier für den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Bedenken Sie auch, dass wir der Seite etwas JavaScript hinzugefügt haben, das die von der Dateiauswahl ausgewählten Dateien unterhalb des Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der Referenzseite [`<input type="file">`](/de/docs/Web/HTML/Element/input/file#examples) zu finden ist.

Wie Sie sehen können, haben wir es ziemlich gut geschafft, diese in modernen Browsern einheitlich aussehen zu lassen.

Wir haben einige globale normalisierende CSS auf alle Steuerelemente und ihre Etiketten angewendet, um sie so zu dimensionieren, dass sie in gleicher Weise proportional zu ihren übergeordneten Elementen erscheinen und deren Schriftart übernehmen, wie im vorherigen Artikel erwähnt:

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

Wir haben auch einen einheitlichen Schatten und abgerundete Ecken an den Steuerelementen hinzugefügt, bei denen es Sinn machte:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Berechtigungsarten, Fortschrittsbalken und Messern fügen sie nur einen hässlichen Rahmen um den Steuerungsbereich herum hinzu, so dass es keinen Sinn macht.

Lassen Sie uns einige spezifische Details zu jedem dieser Steuerelementtypen besprechen und dabei Schwierigkeiten hervorheben.

### Selects und Datalisten

In modernen Browsern sind Selects und Datalisten im Allgemeinen nicht allzu schlecht zu gestalten, solange Sie das Aussehen und Verhalten nicht zu stark vom Standard abweichen lassen möchten.

Uns ist es gelungen, das grundlegende Aussehen der Boxen ziemlich einheitlich und konsistent zu halten. Das Datalist-Steuerelement ist ohnehin ein `<input type="text">`, also wussten wir, dass dies kein Problem darstellen würde.

Zwei Dinge sind etwas problematischer. Zunächst einmal unterscheidet sich das "Pfeil"-Symbol des Selects, das anzeigt, dass es sich um ein Dropdown handelt, zwischen den Browsern. Es tendiert auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box vergrößern oder in hässlicher Weise ändern. Um dies in unserem Beispiel zu beheben, haben wir zunächst unseren alten Freund `appearance: none` benutzt, um das Symbol insgesamt zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol mithilfe von generiertem Inhalt erstellt. Wir haben einen zusätzlichen Wrapper um das Steuerelement gelegt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht auf `<select>`-Elementen funktionieren (da deren Inhalt vollständig vom Browser gesteuert wird):

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

Wir haben daraufhin mithilfe von generiertem Inhalt einen kleinen Abwärtspfeil erstellt und diesen mit einer Positionierung an der richtigen Stelle platziert:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über die Box haben, die erscheint und die Optionen enthält, wenn Sie auf die `<select>`-Box klicken, um sie zu öffnen. Sie können die im übergeordneten Element festgelegte Schriftart erben, aber Sie können keine Dinge wie Abstände und Farben festlegen. Dasselbe gilt für die Autovervollständigungsliste, die bei {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über die Optionengestaltung benötigen, müssen Sie entweder einige Bibliotheken verwenden, um ein benutzerdefiniertes Steuerelement zu erstellen, oder Ihr eigenes benutzerdefiniertes Steuerelement erstellen oder im Fall von Select das `multiple`-Attribut verwenden, das alle Optionen auf der Seite erscheinen lässt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich kann dies auch nicht zu dem Design passen, das Sie anstreben, aber es ist erwähnenswert!

### Datumseingabetypen

Die Datum/Zeit-Eingabetypen ([`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), [`time`](/de/docs/Web/HTML/Element/input/time), [`week`](/de/docs/Web/HTML/Element/input/week), [`month`](/de/docs/Web/HTML/Element/input/month)) haben alle dasselbe Hauptproblem. Die eigentliche Box ist genauso einfach zu gestalten wie jede Texteingabe, und was wir in diesem Demo haben, sieht gut aus.

Allerdings sind die internen Teile des Steuerelements (z.B. das Popup-Kalender, das Sie zum Auswählen eines Datums verwenden, das Spinner, das Sie zum Erhöhen/Verkleinern von Werten verwenden können) überhaupt nicht gestaltbar und Sie können sie nicht mit `appearance: none;` entfernen. Wenn Sie wirklich die volle Kontrolle über das Styling benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erstellen oder Ihr eigenes erstellen.

> [!NOTE]
> Es lohnt sich hier auch [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) zu erwähnen — dieses hat auch ein Spinner, das Sie zum Erhöhen/Verkleinern von Werten verwenden können, so dass es potenziell unter dasselbe Problem leidet. Allerdings ist im Fall des `number`-Typs die erfasste Datenmenge einfacher und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Erscheinungsbild von `text` hat, jedoch die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Element/input/range) ist ärgerlich zu gestalten. Sie können etwas wie das folgende verwenden, um die Standardschieber-Spur vollständig zu entfernen und sie mit einem benutzerdefinierten Stil zu ersetzen (in diesem Fall eine dünne rote Spur):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Schiebereglers der Bereichssteuerung anzupassen — um die vollständige Kontrolle über die Bereichsgestaltung zu erhalten, müssen Sie eine ganze Reihe von komplexem CSS-Code verwenden, einschließlich mehrerer nicht standardisierter, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS Tricks für eine ausführliche Beschreibung der erforderlichen Schritte an.

### Farbeingabetypen

Eingabesteuerungen des Typs Farbe sind nicht allzu schlecht. In unterstützenden Browsern geben sie Ihnen normalerweise einen Block mit Vollfarbe und einem kleinen Rahmen.

Sie können den Rahmen entfernen, sodass nur der Farbblock bleibt, indem Sie etwas wie dieses verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch der einzige Weg, um etwas deutlich anderes zu erreichen.

### Dateieingabetyen

Eingaben des Typs Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das in den Rest der Seite passt — die Ausgabelinie, die Teil des Steuerelements ist, übernimmt die Elternschrift, wenn Sie dies der Eingabe mitteilen, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen in beliebiger Weise stylen; wir haben sie schließlich erstellt.

Das einzige Problem mit Dateiauswahlen ist, dass der bereitgestellte Button, den Sie drücken, um den Dateiwähler zu öffnen, überhaupt nicht stilisierbar ist — er kann nicht in der Größe verändert oder gefärbt werden und akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dies zu umgehen, ist die Tatsache auszunutzen, dass, wenn Sie ein Label haben, das mit einer Formularsteuerung verbunden ist, das Klicken auf das Label die Steuerung aktiviert. So können Sie das eigentliche Formulareingabefeld mit so etwas verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so gestalten, dass es als Button fungiert, der beim Drücken den Dateiauswähler wie erwartet öffnet:

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

Sie können das Ergebnis des oben genannten CSS Stylings im folgenden Live-Beispiel sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Meter und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Element/meter) und [`<progress>`](/de/docs/Web/HTML/Element/progress) sind möglicherweise die schlechtesten von allen. Wie Sie im vorherigen Beispiel gesehen haben, können wir ihre Breite relativ genau einstellen. Aber darüber hinaus ist es wirklich schwierig, sie in irgendeiner Weise zu gestalten. Sie verarbeiten Höhenangaben nicht konsistent miteinander und zwischen Browsern, Sie können den Hintergrund färben, aber nicht die Vordergrundleiste, und das Setzen von `appearance: none` auf sie macht die Dinge schlimmer statt besser.

Es ist einfacher, eine eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie in der Lage sein möchten, das Styling zu kontrollieren, oder eine Drittanbieterlösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

Der Artikel [Wie man benutzerdefinierte Formularsteuerungen baut](/de/docs/Learn/Forms/How_to_build_custom_form_controls) bietet ein Beispiel dafür, wie man einen benutzerdefinierten Select mit HTML, CSS und JavaScript erstellt.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten gibt, CSS mit HTML-Formularen zu verwenden, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Für jetzt besteht die beste Lösung darin, mehr über die Unterstützung durch verschiedene Browser zu lernen, wenn CSS auf HTML-Formularsteuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zur Verfügung stehen, um Formen in verschiedenen Zuständen zu stylen.

{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerungen baut](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
