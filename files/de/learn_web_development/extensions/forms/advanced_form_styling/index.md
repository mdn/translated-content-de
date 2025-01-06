---
title: Fortgeschrittenes Formular-Styling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formular-Steuerelementen zu stylen, die schwerer zu stylen sind – die Kategorien "schlecht" und "hässlich". Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons völlig einfach zu stylen; jetzt werden wir uns den problematischeren Teilen zuwenden.

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

Um zusammenzufassen, was wir im vorherigen Artikel gesagt haben, haben wir:

**Das Schlechte**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder einige spezifischere Tricks:

- Kontrollkästchen (`checkboxes`) und Optionsfelder (`radio buttons`)
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

**Das Hässliche**: Einige Elemente können nicht gründlich mit CSS gestylt werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Steuerelementen beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zuerst über die [`appearance`](/de/docs/Web/CSS/appearance)-Eigenschaft sprechen, die ziemlich nützlich ist, um alle oben genannten Elemente besser stilisierbar zu machen.

## appearance: Steuerung von OS-Level-Styling

Im vorherigen Artikel haben wir gesagt, dass das Styling von Webformular-Steuerelementen historisch gesehen weitgehend von dem zugrunde liegenden Betriebssystem übernommen wurde, was Teil des Problems bei der Anpassung des Aussehens dieser Steuerelemente darstellt.

Die {{cssxref("appearance")}}-Eigenschaft wurde als Möglichkeit geschaffen, zu kontrollieren, welches OS- oder systembasierte Styling auf Webformular-Steuerelemente angewendet wurde. Der bei weitem hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein Steuerelement, auf das Sie dies anwenden, so weit wie möglich systemweites Styling verwendet und lässt Sie die Stile selbst mit CSS aufbauen.

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

Das Anwenden des folgenden CSS darauf entfernt das systemseitige Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie auf Ihrem System aussehen – Standard auf der linken Seite und mit dem obigen CSS rechts angewendet ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen bewirkt es, dass der stilisierte Rand entfernt wird, was CSS-Styling etwas einfacher macht, aber nicht wirklich essenziell ist. In einigen Fällen – Such- und Optionsfelder/Kontrollkästchen ist es weit nützlicher. Wir werden uns diese nun ansehen.

### Suchfelder bändigen

[`<input type="search">`](/de/docs/Web/HTML/Element/input/search) ist im Wesentlichen nur ein Texteingabefeld, warum ist `appearance: none;` hier nützlich? Die Antwort ist, dass Safari-Suchfelder einige Stilbeschränkungen haben – Sie können beispielsweise ihre `height` oder `font-size` nicht frei anpassen.

Dies kann mit unserem Freund `appearance: none;` behoben werden, der das Standardaussehen deaktiviert:

```css
input[type="search"] {
  appearance: none;
}
```

Im folgenden Beispiel können Sie zwei identisch gestaltete Suchfelder sehen. Das rechte hat `appearance: none;` angewendet, das linke nicht. Wenn Sie es in Safari auf macOS betrachten, werden Sie sehen, dass das linke nicht richtig dimensioniert ist.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

Interessanterweise behebt das Setzen von Rand/Hintergrund auf das Suchfeld auch dieses Problem. Das folgende gestylte Suchfeld hat nicht `appearance: none;` angewendet, leidet aber in Safari nicht unter dem gleichen Problem wie das vorherige Beispiel.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> [!NOTE]
> Sie haben möglicherweise bemerkt, dass im Suchfeld das "x"-Löschsymbol, das erscheint, wenn der Suchwert nicht null ist, in Edge und Chrome verschwindet, wenn das Eingabefeld den Fokus verliert, aber in Safari bleibt. Um dies per CSS zu entfernen, können Sie `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button { display: none; }` verwenden.

### Styling von Kontrollkästchen und Radio-Buttons

Das Styling eines Kontrollkästchens oder Radio-Buttons ist standardmäßig knifflig. Die Größen von Kontrollkästchen und Radio-Buttons sind nicht so gedacht, dass sie mit ihrem Standarddesign geändert werden können, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen.

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

Verschiedene Browser behandeln das Kontrollkästchen und die Spanne unterschiedlich, oft auf unschöne Weise:

| Browser                             | Darstellung                                                                                              |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgraue Umrandung](firefox-mac-checkbox.png)                               |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauer Umrandung](firefox-windows-checkbox.png)                        |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecken mit 1px mittelgrauer Umrandung](chrome-mac-checkbox.png)                             |
| Chrome 63 (Windows 10)              | ![Rechteckige Umrandungen mit leicht grauem Hintergrund anstelle von weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Umrandungen mit leicht grauem Hintergrund anstelle von weiß.](edge-checkbox.png)           |

#### Verwendung von appearance: none auf Radios/Kontrollkästchen

Wie wir bereits gezeigt haben, können Sie das Standardaussehen eines Kontrollkästchens oder Radio-Buttons vollständig mit {{cssxref("appearance", "appearance: none;")}} entfernen. Nehmen wir dieses Beispiel-HTML:

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

Nun, lassen Sie uns diese mit einem benutzerdefinierten Kontrollkästchen-Design stylen. Lassen Sie uns damit beginnen, die ursprünglichen Kontrollkästchen zu entfernen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}} und {{cssxref(":disabled")}} Pseudo-Klassen verwenden, um das Aussehen unseres benutzerdefinierten Kontrollkästchens zu ändern, wenn sich sein Zustand ändert:

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

Weitere Informationen über solche Pseudo-Klassen und mehr finden Sie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die oben genannten tun Folgendes:

- `:checked` — das Kontrollkästchen (oder Radio-Button) ist in einem ausgewählten Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Radio-Button) ist in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Radio-Button-Styling.
- [Toggle-Switch-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das so gestylt ist, dass es wie ein Kippschalter aussieht.

Wenn Sie diese Kontrollkästchen in einem Browser betrachten, der {{cssxref("appearance")}} nicht unterstützt, geht Ihr benutzerdefiniertes Design verloren, aber sie sehen immer noch wie Kontrollkästchen aus und sind benutzbar.

## Was kann mit den "hässlichen" Elementen gemacht werden?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer gründlich zu stylen sind. Kurz gesagt, diese sind Dropdown-Boxen, komplexe Steuerelementtypen wie [`color`](/de/docs/Web/HTML/Element/input/color) und [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), und feedback-orientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente in verschiedenen Browsern sehr unterschiedliche Standardansichten haben, und während Sie sie in gewisser Weise stylen können, sind einige Teile ihrer Interna buchstäblich unmöglich zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden im Aussehen und Gefühl zu leben, können Sie mit ein paar einfachen Stylings davonkommen, um die Größe konsistent zu machen, einheitliches Styling von Dingen wie Hintergrundfarben zu schaffen, und die Verwendung von appearance, um einige systemseitige Stylings zu entfernen.

Nehmen wir das folgende Beispiel, das eine Reihe der "hässlichen" Formelemente in Aktion zeigt:

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
> Wenn Sie diese Beispiele gleichzeitig in einer Reihe von Browsern testen möchten, können Sie [hier live finden](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (siehe auch [hier für den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Beachten Sie auch, dass wir der Seite ein JavaScript hinzugefügt haben, das die vom Dateiauswahldialog ausgewählten Dateien unterhalb des Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der Seite zur Referenz von [`<input type="file">`](/de/docs/Web/HTML/Element/input/file#examples) gefunden wird.

Wie Sie sehen können, haben wir es ziemlich gut geschafft, diese in modernen Browsern einheitlich aussehen zu lassen.

Wir haben einige globale normalisierende CSS-Styles auf alle Steuerelemente und ihre Labels angewendet, um sie auf die gleiche Weise zu dimensionieren, ihre Elterschrift zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einige gleichmäßige Schatten und abgerundete Ecken auf die Steuerelemente angewendet, wo es sinnvoll schien:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Bereichstypen, Fortschrittsbalken und Metern fügen sie nur eine unschöne Box um den Steuerbereich hinzu, sodass es keinen Sinn macht.

Lassen Sie uns über einige Besonderheiten dieser Steuerelementtypen sprechen und dabei Schwierigkeiten hervorheben.

### Selects und Datenlisten

In modernen Browsern sind Selects und Datenlisten im Allgemeinen nicht allzu schwierig zu stylen, vorausgesetzt, Sie möchten das Erscheinungsbild nicht zu sehr von den Standardeinstellungen abweichen.

Es ist uns gelungen, das grundsätzliche Aussehen der Boxen ziemlich einheitlich und konsistent zu gestalten. Das Datalist-Steuerelement ist ohnehin `<input type="text">`, also wussten wir, dass dies kein Problem darstellen würde.

Zwei Dinge sind etwas problematischer. Erstens das "Pfeil"-Symbol des Selects, das anzeigt, dass es sich um ein Dropdown handelt, unterscheidet sich zwischen den Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box erhöhen oder in unschöner Weise ändern. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol vollständig zu entfernen:

```css
select {
  appearance: none;
}
```

Dann haben wir unser eigenes Symbol mit generiertem Inhalt erzeugt. Wir haben ein zusätzliches Wrapper um das Steuerelement gelegt, weil [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht auf `<select>`-Elementen funktionieren (weil ihr Inhalt vollständig durch den Browser gesteuert wird):

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

Dann verwenden wir generierten Inhalt, um einen kleinen Abwärtspfeil zu erzeugen, und setzen ihn an die richtige Stelle mit Positionierung:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über die Box haben, die die Optionen enthält, wenn Sie auf die `<select>`-Box klicken, um sie zu öffnen. Sie können die Schriftart des Elternteils erben, aber Sie können Dinge wie Abstände und Farben nicht einstellen. Gleiches gilt für die Autocompleteliste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die vollständige Kontrolle über das Styling der Optionen benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes benutzerdefiniertes Steuerelement erstellen, oder im Fall von Select das `multiple`-Attribut verwenden, wodurch alle Optionen auf der Seite erscheinen und dieses spezielle Problem umgangen wird:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise auch nicht zu dem Design, das Sie anstreben, aber es ist erwähnenswert!

### Datumseingabetypen

Die Datums-/Uhrzeit-Eingabetypen ([`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), [`time`](/de/docs/Web/HTML/Element/input/time), [`week`](/de/docs/Web/HTML/Element/input/week), [`month`](/de/docs/Web/HTML/Element/input/month)) haben alle dasselbe Hauptproblem. Die eigentliche umgebende Box ist genauso einfach zu stylen wie jede Texteingabe, und was wir in diesem Demo haben, sieht gut aus.

Jedoch sind die inneren Teile des Steuerelements (z.B. der Pop-up-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Drehregler, den Sie verwenden können, um Werte zu erhöhen/zu verringern) überhaupt nicht stylisierbar, und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich volle Kontrolle über das Styling benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen.

> [!NOTE]
> Es ist erwähnenswert, dass [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) hier ebenfalls zu erwähnen ist – auch dieser hat einen Drehregler, mit dem Sie Werte erhöhen/ verringern können, weshalb er potenziell unter dasselbe Problem fällt. Im Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher, und es ist einfach, stattdessen einen Eingabetyp `tel` zu verwenden, der das Erscheinungsbild von `text` hat, aber auf Geräten mit Touch-Tastaturen die numerische Tastatur anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Element/input/range) ist ärgerlich zu stylen. Sie können etwas wie das Folgende verwenden, um die Standardschieberegler vollständig zu entfernen und durch einen benutzerdefinierten Stil zu ersetzen (ein dünner roter Track in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Schiebereglers des Bereichssteuerungselements anzupassen – um die vollständige Kontrolle über das Bereichs-Styling zu erhalten, müssen Sie eine ganze Menge komplexen CSS-Codes verwenden, einschließlich mehrerer nicht standardmäßiger, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für eine ausführliche Beschreibung dessen, was benötigt wird, an.

### Farbeingabetypen

Eingabesteuerelemente des Typs Farbe sind nicht allzu schlecht. In unterstützenden Browsern geben sie Ihnen in der Regel einfach einen Block mit Vollfarbe mit einem kleinen Rand.

Sie können den Rand entfernen und nur den Farbblock belassen, indem Sie etwas wie dies verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch der einzige Weg, um etwas signifikant anderes zu erhalten.

### Dateieingabetypen

Eingaben des Typs Datei sind im Allgemeinen in Ordnung – wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das gut in den Rest der Seite passt – die Ausgabelinie, die Teil des Steuerelements ist, übernimmt die Elternschrift, wenn Sie der Eingabe sagen, dies zu tun, und Sie können die benutzerdefinierte Liste von Dateinamen und -größen in jeder gewünschten Weise stylen; wir haben sie schließlich erstellt.

Das einzige Problem mit Dateiauswahl-Dialogen ist, dass die Schaltfläche, die zum Öffnen des Dateiauswahl-Dialogs bereitgestellt wird, völlig untastiltierbar ist – sie kann nicht dimensioniert oder gefärbt werden, und sie akzeptiert noch nicht einmal eine andere Schriftart.

Ein Ausweg ist es, sich zunutze zu machen, dass, wenn Sie ein Label mit einem Formularsteuerelement kombiniert haben, das Klicken auf das Label das Steuerelement aktiviert. Sie könnten also das tatsächliche Formulareingabefeld mit etwas wie diesem ausblenden:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label stylen, damit es wie eine Schaltfläche aussieht, die, wenn sie gedrückt wird, den Dateiauswahldialog wie erwartet öffnet:

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

Sie können das Ergebnis der obigen CSS-Styling im folgenden Live-Beispiel sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live, und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Zähler und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Element/meter) und [`<progress>`](/de/docs/Web/HTML/Element/progress) sind möglicherweise am schwierigsten zu stylen. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite setzen. Aber darüber hinaus sind sie eigentlich wirklich schwer in irgendeiner Weise zu stylen. Sie behandeln Höheneinstellungen nicht konsistent miteinander und zwischen Browsern, Sie können den Hintergrund färben, aber nicht den Vordergrundbalken, und das Setzen von `appearance: none` auf sie macht die Dinge schlimmer, nicht besser.

Es ist einfacher, einfach Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie das Styling kontrollieren wollen, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

Der Artikel [Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) bietet ein Beispiel, wie man ein benutzerdefiniertes gestaltetes Select mit HTML, CSS und JavaScript erstellt.

## Zusammenfassung

Auch wenn es immer noch Schwierigkeiten gibt, CSS mit HTML-Formularen zu verwenden, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Für jetzt ist die beste Lösung, mehr darüber zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formular-Steuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) untersuchen, die uns in modernen Browsern zum Stylen von Formularen in verschiedenen Zuständen zur Verfügung stehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Versenden von Formularen über JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
