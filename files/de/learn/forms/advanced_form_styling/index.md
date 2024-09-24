---
title: Fortgeschrittenes Formular-Styling
slug: Learn/Forms/Advanced_form_styling
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularsteuerungen zu stylen, die schwieriger zu stylen sind — die Kategorien "schlecht" und "hässlich". Wie wir [im vorherigen Artikel](/de/docs/Learn/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons perfekt einfach zu stylen; jetzt werden wir uns mit den problematischeren Teilen befassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
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

**Die schlecht**: Einige Elemente sind schwieriger zu stylen und erfordern komplexere CSS oder spezifische Tricks:

- Kontrollkästchen und Radio-Buttons
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

**Die hässlich**: Einige Elemente können nicht umfassend mit CSS gestylt werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zunächst über die [`appearance`](/de/docs/Web/CSS/appearance)-Eigenschaft sprechen, die ziemlich nützlich ist, um die oben genannten Elemente stylischer zu machen.

## appearance: Kontrolle des Betriebssystem-Stylings

Im vorherigen Artikel haben wir gesagt, dass das Styling von Webformular-Steuerungen historisch weitgehend vom zugrunde liegenden Betriebssystem übernommen wurde, was ein Teil des Problems bei der Anpassung des Aussehens dieser Steuerungen ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde als Möglichkeit geschaffen, zu steuern, welches OS- oder systembezogene Styling auf Webformular-Steuerungen angewendet wurde. Bei weitem der hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass eine von Ihnen angewendete Steuerung systembezogenes Styling verwendet, soweit dies möglich ist, und ermöglicht es Ihnen, die Stile selbst mit CSS aufzubauen.

Nehmen wir zum Beispiel die folgenden Steuerungen:

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

Die Anwendung des folgenden CSS entfernt das systembezogene Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie in Ihrem System aussehen — standardmäßig links und mit dem oben angewendeten CSS rechts ([finden Sie es hier auch](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen ist der Effekt, die stilisierte Umrandung zu entfernen, was das CSS-Styling etwas einfacher macht, aber nicht wirklich wesentlich ist. In einigen Fällen — Such- und Radio-Buttons/Kontrollkästchen — wird es viel nützlicher. Wir werden uns diese nun ansehen.

### Suchfelder zähmen

[`<input type="search">`](/de/docs/Web/HTML/Element/input/search) ist im Grunde nur ein Texteingabefeld, also warum ist `appearance: none;` hier nützlich? Die Antwort ist, dass Safari-Suchfelder einige Styling-Einschränkungen haben — Sie können ihre `height` oder `font-size` zum Beispiel nicht frei anpassen.

Dies kann mit unserem Freund `appearance: none;` behoben werden, der das Standard-Aussehen deaktiviert:

```css
input[type="search"] {
  appearance: none;
}
```

Im unten stehenden Beispiel sehen Sie zwei identisch gestylte Suchfelder. Das rechte hat `appearance: none;` angewendet, und das linke nicht. Wenn Sie es in Safari auf macOS betrachten, werden Sie sehen, dass das linke nicht richtig dimensioniert ist.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

Interessanterweise behebt das Setzen von Rahmen/Hintergrund auf dem Suchfeld auch dieses Problem. Das folgende gestaltete Suchfeld hat nicht `appearance: none;` angewendet, aber es hat nicht das gleiche Problem in Safari wie das vorherige Beispiel.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> [!NOTE]
> Sie haben vielleicht bemerkt, dass im Suchfeld das "x"-Löschsymbol, das erscheint, wenn der Wert der Suche nicht null ist, verschwindet, wenn das Eingabefeld den Fokus in Edge und Chrome verliert, aber in Safari erhalten bleibt. Um es per CSS zu entfernen, können Sie `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button { display: none; }` verwenden.

### Styling von Kontrollkästchen und Radiobuttons

Das Styling eines Kontrollkästchens oder eines Radio-Buttons ist standardmäßig knifflig. Die Größen von Kontrollkästchen und Radiobuttons sind mit ihren Standarddesigns nicht dazu gedacht, geändert zu werden, und die Browser reagieren sehr unterschiedlich darauf, wenn Sie es versuchen.

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

Verschiedene Browser behandeln das Kontrollkästchen und span unterschiedlich, oft auf unschöne Weise:

| Browser                             | Rendering                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px hellgrauer Rahmen](firefox-mac-checkbox.png)                                |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittelgrauem Rahmen](firefox-windows-checkbox.png)                          |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecken mit 1px mittelgrauem Rahmen](chrome-mac-checkbox.png)                               |
| Chrome 63 (Windows 10)              | ![Rechteckige Rahmen mit leicht gräulichem Hintergrund anstelle von Weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Rahmen mit leicht gräulichem Hintergrund anstelle von Weiß.](edge-checkbox.png)            |

#### Verwendung von appearance: none bei Radiobuttons/Kontrollkästchen

Wie wir bereits gezeigt haben, können Sie das Standard-Aussehen eines Kontrollkästchens oder Radio-Buttons vollständig mit {{cssxref("appearance", "appearance: none;")}} entfernen. Nehmen wir dieses Beispiel-HTML:

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

Jetzt stylen wir diese mit einem benutzerdefinierten Kontrollkästchen-Design. Beginnen wir damit, die ursprünglichen Kontrollkästchen zu entfernen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}} und {{cssxref(":disabled")}} Pseudo-Klassen verwenden, um das Aussehen unserer benutzerdefinierten Kontrollkästchens zu ändern, während sich ihr Zustand ändert:

```css
input[type="checkbox"] {
  position: relative;
  width: 1em;
  height: 1em;
  border: 1px solid gray;
  vertical-align: -2px;
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
  visibility: visible;
}

input[type="checkbox"]:disabled {
  border-color: black;
  background: #ddd;
  color: gray;
}
```

In diesem [folgenden Artikel](/de/docs/Learn/Forms/UI_pseudo-classes) erfahren Sie mehr über solche Pseudo-Klassen; die oben genannten machen Folgendes:

- `:checked` — das Kontrollkästchen (oder der Radio-Button) ist in einem ausgewählten Zustand – der Benutzer hat darauf geklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder der Radio-Button) ist in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch einige andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Radio-Button-Styling.
- [Toggle-Schalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Toggle-Schalter gestaltet ist.

Wenn Sie diese Kontrollkästchen in einem Browser ansehen, der {{cssxref("appearance")}} nicht unterstützt, geht Ihr benutzerdefiniertes Design verloren, aber sie sehen weiterhin wie Kontrollkästchen aus und sind benutzbar.

## Was kann man gegen die "hässlichen" Elemente tun?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer vollständig zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerelementtypen wie [`color`](/de/docs/Web/HTML/Element/input/color) und [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local) sowie feedback-orientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standardaussehen zwischen den Browsern haben, und während Sie sie in gewisser Weise stylen können, sind einige Teile ihrer internen Struktur buchstäblich unmöglich zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden im Aussehen und Verhalten zu leben, können Sie mit ein wenig einfachem Styling auskommen, um die Größenanpassung konsistent zu machen, einen einheitlichen Stil für Dinge wie Hintergrundfarben anzuwenden und `appearance` zu verwenden, um einige systembezogene Stile loszuwerden.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formfunktionen in Aktion zeigt:

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
> Wenn Sie diese Beispiele in mehreren Browsern gleichzeitig testen möchten, können Sie es [hier live finden](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (auch [hier den Quellcode sehen](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Bedenken Sie auch, dass wir etwas JavaScript auf der Seite hinzugefügt haben, das die vom Dateipicker ausgewählten Dateien auflistet, unterhalb der Steuerung selbst. Dies ist eine vereinfachte Version des Beispiels auf der [`<input type="file">`](/de/docs/Web/HTML/Element/input/file#examples)-Referenzseite.

Wie Sie sehen können, haben wir es ziemlich gut geschafft, diese in modernen Browsern einheitlich aussehen zu lassen.

Wir haben einige globale Normalisierungs-CSS für alle Steuerelemente und deren Labels angewendet, um sie gleich groß zu machen, die Schriftart des Elternteils anzunehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einigen Steuerelementen, bei denen es Sinn machte, einen einheitlichen Schatten und abgerundete Ecken hinzugefügt:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerungen wie Bereichstypen, Fortschrittsbalken und Messuhren fügen sie nur einen hässlichen Rahmen um den Steuerbereich hinzu, daher macht es keinen Sinn.

Lassen Sie uns über einige Besonderheiten dieser Steuerelementtypen sprechen und die Schwierigkeiten auf dem Weg hervorheben.

### Selects und Datalists

In modernen Browsern sind Selects und Datalists im Allgemeinen nicht allzu schlecht zu stylen, vorausgesetzt, Sie möchten das Aussehen und Gefühl nicht zu stark von den Standards abweichen.

Wir haben es geschafft, das grundlegende Aussehen der Boxen relativ einheitlich und konsistent aussehen zu lassen. Das Datalist-Steuerelement ist ohnehin `<input type="text">`, also wussten wir, dass dies kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Erstens unterscheidet sich das "Pfeil"-Symbol des Selects, das anzeigt, dass es sich um ein Dropdown handelt, je nach Browser. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box erhöhen oder auf unschöne Weise anpassen. Um dies in unserem Beispiel zu beheben, haben wir zunächst unseren alten Freund `appearance: none` verwendet, um das Symbol vollständig zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol mithilfe von generierten Inhalten erstellt. Wir haben einen zusätzlichen Wrapper um das Steuerelement gelegt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) auf `<select>`-Elementen nicht funktionieren (da ihr Inhalt vollständig vom Browser gesteuert wird):

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

Wir verwenden dann generierte Inhalte, um einen kleinen Abwärtspfeil zu generieren, und positionieren ihn mit Hilfe der Positionierung an der richtigen Stelle:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über die Box haben, die beim Klicken auf die `<select>`-Box zum Öffnen der Optionen erscheint. Sie können die auf dem Elternteil gesetzte Schriftart erben, aber Sie können Dinge wie Abstände und Farben nicht festlegen. Dasselbe gilt für die Autocompletion-Liste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die vollständige Kontrolle über die Gestaltung der Optionen benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes benutzerdefiniertes Steuerelement erstellen oder im Fall von Select das `Multiple`-Attribut verwenden, was dazu führt, dass alle Optionen auf der Seite angezeigt werden, wodurch dieses spezielle Problem umgangen wird:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise nicht in das Design, das Sie anstreben, aber es ist erwähnenswert!

### Datumseingabefelder

Die Datums-/Uhrzeit-Eingabefelder ([`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), [`time`](/de/docs/Web/HTML/Element/input/time), [`week`](/de/docs/Web/HTML/Element/input/week), [`month`](/de/docs/Web/HTML/Element/input/month)) haben alle dasselbe große zugehörige Problem. Das tatsächliche enthaltene Feld ist so einfach zu stylen wie jedes Texteingabefeld, und das, was wir in diesem Demo haben, sieht gut aus.

Allerdings sind die internen Teile der Steuerung (z.B. das Popup-Kalender, das Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie verwenden können, um Werte zu erhöhen/zu verringern) überhaupt nicht stylbar, und Sie können sie mit `appearance: none;` nicht loswerden. Wenn Sie wirklich die vollständige Kontrolle über das Styling benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen.

> [!NOTE]
> Es ist auch erwähnenswert [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) hier zu erwähnen — dies hat auch einen Spinner, den Sie verwenden können, um Werte zu erhöhen/zu verringern, also leidet möglicherweise unter demselben Problem. Im Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher, und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Aussehen von `text` hat, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Element/input/range) ist ärgerlich zu stylen. Sie können etwa Folgendes verwenden, um die Standard-Schieberegler-Leiste vollständig zu entfernen und sie durch einen benutzerdefinierten Stil zu ersetzen (eine dünne rote Spur, in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Allerdings ist es sehr schwierig, den Stil des Ziehgriffs des Bereichskontrolls anzupassen — um die volle Kontrolle über das Bereichs-Styling zu erhalten, müssen Sie eine ganze Menge komplexen CSS-Code verwenden, einschließlich mehrerer nicht-standardisierter, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für einen detaillierten Bericht über das, was erforderlich ist.

### Farbeingabetypen

Eingabesteuerungen vom Typ Farbe sind nicht allzu schlecht. In unterstützten Browsern geben sie Ihnen in der Regel nur einen Block mit fester Farbe mit einem kleinen Rahmen.

Sie können den Rahmen entfernen und dabei nur den Farbbereich belassen, indem Sie etwas wie folgt verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Allerdings ist eine benutzerdefinierte Lösung der einzige Weg, um etwas Signifikant anderes zu erhalten.

### Dateieingabetypen

Eingaben vom Typ Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das gut zum Rest der Seite passt — die Zeile mit der Ausgabe, die Teil des Steuerelements ist, erbt die Schriftart des Elternteils, wenn Sie der Eingabe sagen, dies zu tun, und Sie können die benutzerdefinierte Liste der Dateinamen und Größen auf jede beliebige Weise gestalten; wir haben sie schließlich erstellt.

Das einzige Problem mit Dateipickern ist, dass der bereitgestellte Button, den Sie drücken, um den Dateipicker zu öffnen, völlig unstilbar ist — er kann nicht in der Größe verändert oder gefärbt werden, und er akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dies zu umgehen, besteht darin, sich zunutze zu machen, dass, wenn Sie ein Label mit einem Form-Kontrollknopf in Bezug bringen, das Klicken auf das Label den Kontrollknopf aktiviert. Sie könnten das eigentliche Formelement mit etwas wie diesem verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so gestalten, dass es wie ein Button aussieht, der beim Drücken den Dateiwähler wie erwartet öffnet:

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

Sie können das Ergebnis des oben genannten CSS-Stylings im folgenden Live-Beispiel sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Messuhren und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Element/meter) und [`<progress>`](/de/docs/Web/HTML/Element/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im vorherigen Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwer auf irgendeine Weise zu stylen. Sie verarbeiten Höheneinstellungen nicht konsistent untereinander und zwischen den Browsern, Sie können den Hintergrund färben, aber nicht die Vordergrundleiste, und wenn man `appearance: none` auf sie anwendet, macht es die Dinge eher schlechter als besser.

Es ist einfacher, einfach Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie in der Lage sein wollen, das Styling zu steuern, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

Der Artikel [Wie man benutzerdefinierte Formularsteuerungen erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls) bietet ein Beispiel für den Bau einer benutzerdefinierten gestalteten Auswahl mit HTML, CSS, und JavaScript.

## Zusammenfassung

Während es immer noch Schwierigkeiten bei der Verwendung von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Derzeit ist die beste Lösung, mehr über die Art und Weise zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularsteuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudo-Klassen](/de/docs/Learn/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu stylen.

{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerungen erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
