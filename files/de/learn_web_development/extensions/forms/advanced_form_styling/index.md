---
title: Erweitertes Formular-Styling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS zur Gestaltung der Arten von Formularsteuerungen getan werden kann, die schwieriger zu stylen sind - die Kategorien „schlecht“ und „hässlich“. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen sehr einfach zu stylen; jetzt werden wir uns mit den schwierigeren Teilen des Stylings befassen.

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
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; zu lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Wiederholung dessen, was wir im vorherigen Artikel gesagt haben, haben wir:

**Das Schlechte**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder spezifische Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

**Das Hässliche**: Einige Elemente können nicht vollständig mit CSS gestaltet werden. Diese beinhalten:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt ermöglichen, wie bei regulären DOM-Elementen.
- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Sprechen wir zuerst über die [`appearance`](/de/docs/Web/CSS/appearance)-Eigenschaft, die ziemlich nützlich ist, um all das oben Genannte stilisierbarer zu machen.

## appearance: Steuerung des OS-Level-Stylings

Im vorherigen Artikel sagten wir, dass historisch gesehen das Styling von Webformularsteuerungen größtenteils vom zugrunde liegenden Betriebssystem übernommen wurde, was Teil des Problems bei der Anpassung des Aussehens dieser Steuerungen ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde als Methode entwickelt, um zu kontrollieren, welches OS- oder System-Level-Styling auf Webformularsteuerungen angewendet wird. Bei weitem der hilfreichste Wert und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass eine Steuerung, auf die Sie es anwenden, das System-Level-Styling verwendet, so weit wie möglich, und ermöglicht es Ihnen, die Stile selbst mit CSS aufzubauen.

Zum Beispiel, lassen Sie uns die folgenden Steuerungen nehmen:

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

Die Anwendung des folgenden CSS darauf entfernt das System-Level-Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt, wie sie in Ihrem System aussehen – standardmäßig links und mit angewendetem CSS rechts ([finden Sie es auch hier](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html), wenn Sie es auf anderen Systemen testen möchten).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

In den meisten Fällen besteht die Wirkung darin, die stilisierte Grenze zu entfernen, was das CSS-Styling etwas erleichtert, aber nicht wirklich wesentlich ist. In ein paar Fällen – Such- und Radio-Buttons/Kontrollkästchen – wird es viel nützlicher. Schauen wir uns das jetzt an.

### Suchfelder zähmen

[`<input type="search">`](/de/docs/Web/HTML/Element/input/search) ist im Grunde nur eine Texteingabe, warum ist `appearance: none;` hier nützlich? Die Antwort ist, dass Safari-Suchfelder einige Styling-Einschränkungen haben – Sie können ihre `height` oder `font-size` nicht frei einstellen.

Dies kann durch unseren Freund `appearance: none;` behoben werden, der das Standard-Design deaktiviert:

```css
input[type="search"] {
  appearance: none;
}
```

Im Beispiel unten sehen Sie zwei identisch gestylte Suchfelder. Das rechte hat `appearance: none;` angewendet, und das linke nicht. In Safari auf macOS sehen Sie, dass das linke nicht richtig dimensioniert ist.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

Interessanterweise behebt das Setzen von Rahmen/Hintergrund auf dem Suchfeld auch dieses Problem. Die folgende gestylte Suche hat `appearance: none;` nicht angewendet, leidet aber nicht unter demselben Problem in Safari wie das vorherige Beispiel.

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> [!NOTE]
> Vielleicht haben Sie bemerkt, dass im Suchfeld das "x"-Löschsymbol, das erscheint, wenn der Wert der Suche nicht null ist, in Edge und Chrome verschwindet, wenn das Eingabefeld den Fokus verliert, aber in Safari bleibt es bestehen. Um es per CSS zu entfernen, können Sie `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button { display: none; }` verwenden.

### Styling von Kontrollkästchen und Radio-Buttons

Die Gestaltung eines Kontrollkästchens oder eines Radio-Buttons ist standardmäßig schwierig. Die Größen von Kontrollkästchen und Radio-Buttons sind mit ihren Standarddesigns nicht dafür ausgelegt, geändert zu werden, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen.

Nehmen Sie zum Beispiel diesen einfachen Testfall:

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

Verschiedene Browser behandeln das Kontrollkästchen und den Nichttrennende Leerstelle-Element unterschiedlich, oft auf hässliche Weise:

| Browser                             | Rendering                                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![Abgerundete Ecken und 1px grauer Rand](firefox-mac-checkbox.png)                                  |
| Firefox 57 (Windows 10)             | ![Rechteckige Ecken mit 1px mittlerem grauen Rand](firefox-windows-checkbox.png)                    |
| Chrome 77 (macOS), Safari 13, Opera | ![Abgerundete Ecke mit 1px mittelgrauem Rand](chrome-mac-checkbox.png)                              |
| Chrome 63 (Windows 10)              | ![Rechteckige Ränder mit leicht grauem Hintergrund anstelle von Weiß.](chrome-windows-checkbox.png) |
| Edge 16 (Windows 10)                | ![Rechteckige Ränder mit leicht grauem Hintergrund anstelle von Weiß.](edge-checkbox.png)           |

#### Verwenden von appearance: none bei Radio-Buttons/Kontrollkästchen

Wie wir zuvor gezeigt haben, können Sie das Standarderscheinungsbild eines Kontrollkästchens oder eines Radio-Buttons mit {{cssxref("appearance", "appearance: none;")}} vollständig entfernen. Nehmen wir dieses Beispiel-HTML:

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

Nun wollen wir diese mit einem benutzerdefinierten Kontrollkästchen-Design gestalten. Lassen Sie uns zunächst die ursprünglichen Kontrollkästchen entfernen:

```css
input[type="checkbox"] {
  appearance: none;
}
```

Wir können die {{cssxref(":checked")}} und {{cssxref(":disabled")}} Pseudo-Klassen verwenden, um das Erscheinungsbild unseres benutzerdefinierten Kontrollkästchens beim Ändern seines Status zu ändern:

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

Sie werden in [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) mehr über solche Pseudo-Klassen und mehr erfahren; die oben genannten machen Folgendes:

- `:checked` — das Kontrollkästchen (oder der Radio-Button) befindet sich im aktiviertem Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder der Radio-Button) befindet sich im deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Radio-Button-Styling.
- [Umschalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Kippschalter aussieht.

Wenn Sie diese Kontrollkästchen in einem Browser ansehen, der {{cssxref("appearance")}} nicht unterstützt, wird Ihr benutzerdefiniertes Design verloren gehen, aber sie werden trotzdem wie Kontrollkästchen aussehen und verwendbar sein.

## Was kann gegen die "hässlichen" Elemente getan werden?

Lassen Sie uns nun unsere Aufmerksamkeit auf die "hässlichen" Steuerungen richten — diejenigen, die wirklich schwer gründlich zu gestalten sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerarten wie [`color`](/de/docs/Web/HTML/Element/input/color) und [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), und feedback-orientierte Steuerungen wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standardaussehen in Browsern haben, und obwohl Sie sie in gewisser Weise gestalten können, sind einige Teile ihrer Interna buchstäblich unmöglich zu gestalten.

Wenn Sie bereit sind, einige Unterschiede im Aussehen und Verhalten zu akzeptieren, können Sie mit einigen einfachen Stiländerungen durchkommen, um Größenkonsistenz zu erreichen, einheitliche Gestaltung von Hintergrundfarben und die Verwendung von Appearance-Eigenschaften, um einige System-Level-Stilungen loszuwerden.

Nehmen Sie das folgende Beispiel, das eine Reihe der „hässlichen“ Formularfeatures in Aktion zeigt:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

Dieses Beispiel hat folgendes CSS darauf angewendet:

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
> Wenn Sie diese Beispiele gleichzeitig in einer Reihe von Browsern testen möchten, können Sie [es live hier finden](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) (siehe auch [hier für den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html)).
>
> Beachten Sie auch, dass wir der Seite etwas JavaScript hinzugefügt haben, das die Dateien auflistet, die vom Dateiauswähler ausgewählt wurden, unterhalb der Steuerung selbst. Dies ist eine vereinfachte Version des Beispiels, das auf der [`<input type="file">`](/de/docs/Web/HTML/Element/input/file#examples)-Referenzseite zu finden ist.

Wie Sie sehen können, haben wir ziemlich gut hingekriegt, dass diese in modernen Browsern einheitlich aussehen.

Wir haben einige global normalisierende CSS für alle Steuerungen und deren Labels angewendet, damit sie auf die gleiche Art und Weise dimensioniert werden, ihre Elterschrift übernehmen usw., wie oben im vorherigen Artikel erwähnt:

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

Wir haben auch einige gleichmäßige Schatten und abgerundete Ecken zu den Steuerungen hinzugefügt, bei denen dies Sinn machte:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Bei anderen Steuerungen wie Bereichstypen, Fortschrittsbalken und Messgeräten fügen sie nur eine hässliche Box um den Steuerbereich hinzu, daher ergibt es keinen Sinn.

Sprechen wir über einige Besonderheiten bei diesen Steuerungstypen und heben dabei Schwierigkeiten hervor.

### Selects und Datalisten

Einige Browser unterstützen jetzt [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Features, die zusammen ermöglichen, `<select>`-Elemente und deren Inhalt vollständig anzupassen, genau wie bei regulären DOM-Elementen. In unterstützenden Browsern und Codebasen müssen Sie sich keine Sorgen mehr über die unten beschriebenen Techniken für `<select>`-Elemente machen.

Das Styling von Datalisten und Selects (in Browsern, die keine anpassbaren Selects unterstützen) ermöglicht ein akzeptables Maß an Anpassung, vorausgesetzt, Sie möchten das Aussehen und das Gefühl nicht allzu sehr von den Standards abweichen. Wir haben es geschafft, das grundlegende Aussehen der Boxen ziemlich einheitlich und konsistent zu halten. Der Datalist-einberufende Steuerung ist sowieso ein `<input type="text">`, daher wussten wir, dass dies kein Problem darstellen würde.

Zwei Dinge sind etwas problematischer. Erstens, das "Pfeil"-Symbol des Selects, das anzeigt, dass es ein Dropdown ist, unterscheidet sich zwischen den Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Auswahlbox vergrößern oder in hässlicher Weise verkleinern. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol ganz loszuwerden:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol mit generiertem Inhalt erstellt. Wir haben eine zusätzliche Hülle um die Steuerung gelegt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) bei `<select>`-Elementen nicht funktionieren (weil deren Inhalt vollständig durch den Browser kontrolliert wird):

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

Wir verwenden dann generierten Inhalt, um einen kleinen Abwärtspfeil zu generieren und platzieren ihn an der richtigen Stelle mithilfe von Positionierung:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Kästchen haben, das erscheint und die Optionen enthält, wenn Sie auf die `<select>`-Box klicken, um sie zu öffnen. Sie können die im übergeordneten Element gesetzte Schriftart erben, aber Sie können nicht Dinge wie Abstände und Farben einstellen. Dasselbe gilt für die Autovervollständigungsliste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über das Styling der Optionen benötigen, müssen Sie entweder eine Art Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu generieren, oder Ihre eigene benutzerdefinierte Steuerung erstellen, oder im Fall von select das `multiple`-Attribut verwenden, das alle Optionen auf der Seite erscheinen lässt, wodurch dieses bestimmte Problem umgangen wird:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich könnte dies auch nicht mit dem Design übereinstimmen, welches Sie anstreben, aber es ist erwähnenswert!

### Datumseingabetypen

Die Datums-/Zeit-Eingabetypen ([`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local), [`time`](/de/docs/Web/HTML/Element/input/time), [`week`](/de/docs/Web/HTML/Element/input/week), [`month`](/de/docs/Web/HTML/Element/input/month)) haben alle das gleiche große Problem. Die eigentliche umgebende Box lässt sich genauso leicht stylen wie jede Texteingabe, und was wir in diesem Demo haben, sieht gut aus.

Die internen Teile der Steuerung (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, die Spinnen, die Sie verwenden können, um Werte zu erhöhen/zu verringern) lassen sich jedoch überhaupt nicht stylen, und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich die volle Kontrolle über das Styling haben möchten, müssen Sie entweder eine Art Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu generieren, oder Ihre eigene erstellen.

> [!NOTE]
> Es ist erwähnenswert, [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) hier zu erwähnen — dies hat ebenfalls einen Spinner, den Sie verwenden können, um Werte zu erhöhen/zu verringern, so dass es potenziell dasselbe Problem leidet. In dem Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher, und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Erscheinungsbild von `text` hat, aber das numerische Tastenfeld bei Geräten mit Touch-Tastaturen anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Element/input/range) ist ärgerlich im Stylen. Sie können etwas wie das Folgende verwenden, um das Standardschieberegler-Spur vollständig zu entfernen und sie durch ein benutzerdefiniertes Design zu ersetzen (eine dünne rote Spur in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Ziehgriffs der Bereichssteuerung anzupassen – um die volle Kontrolle über das Styling von Bereichseingaben zu erreichen, müssen Sie eine ganze Menge komplexen CSS-Code verwenden, inklusive mehrerer nicht standardmäßiger, browser-spezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks an für einen detaillierten Überblick darüber, was nötig ist.

### Farbeingabetypen

Eingaben vom Typ Farbe sind nicht allzu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einfach einen Block aus Volltonfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen, indem Sie nur den Farbblock übrig lassen, mit etwas wie diesem:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Jedoch ist eine benutzerdefinierte Lösung der einzige Weg, um etwas signifikant anderes zu bekommen.

### Dateieingabetypen

Eingaben vom Typ Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das gut mit dem Rest der Seite übereinstimmt — die Ausgabelinie, die Teil der Steuerung ist, wird die übergeordnete Schriftart erben, wenn Sie die Eingabe dazu auffordern, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen auf jede gewünschte Weise gestalten; schließlich haben wir sie erstellt.

Das einzige Problem bei Dateiauswählern ist, dass die bereitgestellte Schaltfläche, die Sie klicken, um den Dateiauswähler zu öffnen, sich nicht gestalten lässt – sie kann nicht in der Größe oder Farbe angepasst werden, und sie wird nicht einmal eine andere Schriftart akzeptieren.

Ein Weg, dies zu umgehen, besteht darin, zu nutzen, dass, wenn Sie ein Label haben, das mit einer Formularsteuerung verbunden ist, das Klicken auf das Label die Steuerung aktiviert. Sie könnten also die eigentliche Formulareingabe mit etwas wie diesem verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so stylen, dass es wie eine Schaltfläche wirkt, die, wenn sie gedrückt wird, den Dateiauswähler wie erwartet öffnet:

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

Sie können das Ergebnis der obigen CSS-Styling im folgenden Live-Beispiel sehen (siehe auch [styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) live, und der [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)).

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### Messgeräte und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Element/meter) und [`<progress>`](/de/docs/Web/HTML/Element/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwer in irgendeiner Weise zu gestalten. Sie handhaben die Höheneinstellungen nicht konsistent zwischen einander und zwischen Browsern, Sie können den Hintergrund färben, aber nicht den Vordergrundbalken, und das Setzen von `appearance: none` darauf macht die Dinge schlimmer, nicht besser.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie die Kontrolle über das Styling haben möchten, oder eine Drittanbieterlösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten bei der Verwendung von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Bis dahin ist die beste Lösung, mehr über die Art und Weise zu erfahren, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularsteuerungen angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die Erstellung von [vollständig angepassten `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dafür verfügbaren dedizierten modernen HTML- und CSS-Features erkunden.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
