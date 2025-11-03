---
title: Gestaltung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie Sie Webformulare in HTML erstellen können. Jetzt zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) stylen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Die Probleme beim Gestalten von Formularen verstehen und einige der grundlegenden Styling-Techniken erlernen, die für Sie nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

Im Jahr 1995 führten [die HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularkontrollen ein (auch bekannt als „Formular-Widgets“ oder „Formularelemente“). Aber CSS wurde erst Ende 1996 veröffentlicht und wurde von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formular-Widgets darzustellen.

Selbst mit verfügbarem CSS waren Browseranbieter zunächst zurückhaltend, Formularelemente gestaltbar zu machen, da die Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formular-Widgets sind jetzt größtenteils gestaltbar, mit ein paar Ausnahmen.

### Arten von Widgets

#### Einfach zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z. B. Typ text, url, email), außer für [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu gestalten

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie Sie diese gestalten können.

#### Mit internen Funktionen, die nicht allein mit CSS gestaltet werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Gruppe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalten ermöglichen, genau wie bei normalen DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise können der Kalender des Datumsauswahldialogs und die Schaltfläche auf `<select>`, die beim Klicken eine Optionsliste anzeigt, nicht allein mit CSS gestaltet werden.

Die Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudo-Elemente, wie {{cssxref('::-moz-range-track')}}, können solche internen Komponenten gestalten, aber sie sind nicht konsistent über verschiedene Browser hinweg und daher nicht sehr zuverlässig. Wir werden sie später erwähnen.

## Gestaltung einfacher Form-Widgets

Die "einfach zu gestaltenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestaltet werden. Es gibt auch spezielle Selektoren — [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die das Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen – aber zuerst gibt es einige besondere Aspekte des Formularstylings, die es wert sind, beachtet zu werden.

### Schriftarten und Text

CSS-Schrift- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren übergeordneten Elementen. Viele Browser verwenden stattdessen das Standardaussehen des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert bewirkt, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft seines übergeordneten Elements entspricht; der Wert des Elternteils wird geerbt.

Die folgenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS zu sehen, mit dem Standard-Schriftstil der Plattform. Rechts sind die gleichen Elemente, mit unserer oben angeführten Stilregel angewendet.

![Formularsteuerungen mit Standard- und geerbten Schriftfamilien. Einige Typen sind standardmäßig Serifenschriften, andere sind serifenlos. Das Erben sollte die Schriften aller auf die Schriftfamilie des übergeordneten Elements ändern - in diesem Fall ein Absatz. Seltsamerweise erbt der Typ-Input, der übermittelt wird, nicht vom übergeordneten Absatz.](forms_fontfamily.png)

Die Standards unterschieden sich in mehreren Bereichen. Das Erben sollte ihre Schriften auf die Schriftfamilie des übergeordneten Elements ändern – in diesem Fall die Standard-Serifenschrift des übergeordneten Containers. Sie tun dies alle, mit einer seltsamen Ausnahme – `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente den gleichwertigen Input-Typen vorzuziehen!

Es gibt viel Diskussion darüber, ob Formulare mit den Standardstilen des Systems besser aussehen oder mit benutzerdefinierten Stilen, die zu Ihrem Inhalt passen. Diese Entscheidung liegt bei Ihnen, als dem Designer Ihrer Website oder Webanwendung.

### Box-Modell

Alle Textfelder unterstützen vollständig jede Eigenschaft im Zusammenhang mit dem CSS-Box-Modell, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch auf die Standardstile des Systems, wenn diese Widgets angezeigt werden. Es liegt an Ihnen, zu definieren, wie Sie sie in Ihren Inhalt integrieren möchten. Wenn Sie das native Erscheinungsbild und Gefühl der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine konsistente Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Auffüllung und Abstand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

```css
input,
textarea,
select,
button {
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

Im folgenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer oben gezeigten Regel, die darauf angewendet wurde. Beachten Sie, wie wir sicherstellen können, dass alle Elemente denselben Platz einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Box-Modell-Eigenschaften wirken auf die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was möglicherweise nicht über den Screenshot ersichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber sie sind im 150px breiten horizontalen Raum zentriert, der von der {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, halten sich jedoch an den zugewiesenen Platz.

### Positionierung der Legende

Das {{HTMLElement("legend")}}-Element lässt sich gut stylen, aber es kann knifflig sein, seine Platzierung zu kontrollieren. Standardmäßig ist es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils positioniert, in der Nähe der oberen linken Ecke. Um es woanders zu positionieren, zum Beispiel irgendwo innerhalb des Fieldset oder in der Nähe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen wir das folgende Beispiel:

```html hidden live-sample___positioned-legend
<form>
  <fieldset>
    <legend>Choose all the vegetables you like to eat</legend>
    <ul>
      <li>
        <label for="carrots">Carrots</label>
        <input
          type="checkbox"
          checked
          id="carrots"
          name="carrots"
          value="carrots" />
      </li>
      <li>
        <label for="peas">Peas</label>
        <input type="checkbox" id="peas" name="peas" value="peas" />
      </li>
      <li>
        <label for="cabbage">Cabbage</label>
        <input type="checkbox" id="cabbage" name="cabbage" value="cabbage" />
      </li>
      <li>
        <label for="cauliflower">Cauliflower</label>
        <input
          type="checkbox"
          id="cauliflower"
          name="cauliflower"
          value="cauliflower" />
      </li>
      <li>
        <label for="broccoli">Broccoli</label>
        <input type="checkbox" id="broccoli" name="broccoli" value="broccoli" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>What is your favorite meal?</legend>
    <ul>
      <li>
        <label for="soup">Soup</label>
        <input type="radio" checked id="soup" name="meal" value="soup" />
      </li>
      <li>
        <label for="curry">Curry</label>
        <input type="radio" id="curry" name="meal" value="curry" />
      </li>
      <li>
        <label for="pizza">Pizza</label>
        <input type="radio" id="pizza" name="meal" value="pizza" />
      </li>
      <li>
        <label for="tacos">Tacos</label>
        <input type="radio" id="tacos" name="meal" value="tacos" />
      </li>
      <li>
        <label for="bolognese">Bolognese</label>
        <input type="radio" id="bolognese" name="meal" value="bolognese" />
      </li>
    </ul>
  </fieldset>
</form>
```

```css hidden live-sample___positioned-legend
form {
  width: 500px;
  margin: 0 auto;
}

fieldset {
  position: relative;
  margin-bottom: 20px;
}

legend {
  position: absolute;
  color: white;
  background-color: black;
  padding: 3px;
  bottom: 0;
  right: 0;
}
```

{{EmbedLiveSample("positioned-legend", '100%', 400)}}

Um die Legende in dieser Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen zur Kürze entfernt):

```css
fieldset {
  position: relative;
}

legend {
  position: absolute;
  bottom: 0;
  right: 0;
}
```

Das `<fieldset>` muss ebenfalls positioniert werden, sodass die `<legend>` relativ dazu positioniert wird (ansonsten würde die `<legend>` relativ zum `<body>` positioniert werden).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Zugänglichkeit – es wird von unterstützenden Technologien als Teil der Beschriftung jedes Formularelements innerhalb des Fieldset gesprochen – aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Die Legendeninhalte werden weiterhin auf die gleiche Weise gesprochen; es hat sich nur die visuelle Position geändert.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch beispielsweise mit einem `transform: translateY();` positionieren, verschiebt es sich, hinterlässt jedoch eine unschöne Lücke in der `<fieldset>`-Grenze, die nicht leicht zu entfernen ist.

## Ein spezifisches Gestaltungsbeispiel

Werfen wir einen Blick auf ein konkretes Beispiel, wie man ein HTML-Formular gestaltet. Wir erstellen ein schick aussehendes "Postkarten"-Kontaktformular; [siehe hier für die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen den unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig komplexer als das in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendete Beispiel; es hat nur ein paar zusätzliche IDs und eine Überschrift.

```html
<form>
  <h1>to: Mozilla</h1>

  <div id="from">
    <label for="name">from:</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div id="reply">
    <label for="mail">reply:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div id="message">
    <label for="msg">Your message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

Fügen Sie den obigen Code in den Body Ihres HTML-Dokuments ein.

### Organisieren Ihrer Assets

Jetzt beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) – laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinenschriftart: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) – laden Sie die TTF-Datei in dasselbe Verzeichnis herunter wie zuvor.
3. Eine handgezeichnete Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) – laden Sie die TTF-Datei in dasselbe Verzeichnis herunter wie zuvor.

Ihre Schriftarten benötigen etwas mehr Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum [Webfont-Generator von fontsquirrel.com](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; diese können in Zukunft variieren.) Kopieren Sie diese Dateien in ein Verzeichnis namens Fonts, im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Webfonts-Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für viel mehr Informationen.

### Das CSS

Jetzt können wir uns in das CSS für das Beispiel vertiefen. Fügen Sie alle unten gezeigten Codeblöcke in das {{htmlelement("style")}}-Element ein, einen nach dem anderen.

#### Gesamt-Layout

Zuerst bereiten wir unser {{cssxref("@font-face")}} vor, und alle grundlegenden Stile auf den {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elementen. Falls die fontsquirrel-Ausgabe von dem abweicht, was wir oben beschrieben haben, finden Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css` (Sie müssen die folgenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

```css
@font-face {
  font-family: "handwriting";
  src:
    url("fonts/journal-webfont.woff2") format("woff2"),
    url("fonts/journal-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "typewriter";
  src:
    url("fonts/momot___-webfont.woff2") format("woff2"),
    url("fonts/momot___-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font: 1.3rem sans-serif;
  padding: 0.5em;
  margin: 0;
  background: #222222;
}

form {
  position: relative;
  width: 740px;
  height: 498px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
  background: white url("background.jpg");

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, einfach positionieren:

```css
h1 {
  font:
    1em "typewriter",
    monospace;
  align-self: end;
}

#message {
  grid-row: 1 / 5;
}

#from,
#reply {
  display: flex;
}
```

#### Labels und Steuerungen

Jetzt können wir beginnen, an den Formularelementen selbst zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Rahmen")}} und {{cssxref("background","Hintergründen")}} und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

```css
input,
textarea {
  font:
    1.4em/1.5em "handwriting",
    cursive,
    sans-serif;
  border: none;
  padding: 0 10px;
  margin: 0;
  width: 80%;
  background: none;
}
```

Wenn einer dieser Felder den Fokus erhält, heben wir ihn mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokusstil zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Nachdem unsere Textfelder nun vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, damit sie im Standardfall gleich aussehen.

#### Feinabstimmung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Elemente gerendert. Die zwei wichtigen Dinge hier sind die {{cssxref("resize")}}- und die {{cssxref("overflow")}}-Eigenschaft. Während unser Design ein festes Layout hat und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unsere mehrzeiligen Textfelder vergrößern, ist es am besten, Benutzern nicht zu verbieten, ein Textarea zu vergrößern, wenn sie dies möchten. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld konsistenter über Browser hinweg zu machen. Einige Browser verwenden standardmäßig den Wert `auto`, während einige den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass jeder `auto` verwendet:

```css
textarea {
  display: block;

  padding: 10px;
  margin: 10px 0 0 -10px;
  width: 100%;
  height: 90%;

  border-right: 1px solid;

  /* resize  : none; */
  overflow: auto;
}
```

#### Gestaltung der Abschicken-Schaltfläche

Das {{HTMLElement("button")}}-Element lässt sich mit CSS wirklich bequem gestalten; Sie können beliebiges anwenden, sogar [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements):

```css
button {
  padding: 5px;
  font: bold 0.6em sans-serif;
  border: 2px solid #333333;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transform: rotate(-1.5deg);
}

button::after {
  content: " >>>";
}

button:hover,
button:focus {
  background: black;
  color: white;
}
```

### Das Endergebnis

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das Endergebnis und Layout des Formulars nach Anwendung des gesamten Stylings und Feintuning, wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht wie erwartet funktioniert und Sie es mit unserer Version vergleichen möchten, finden Sie es auf GitHub — siehe es [live in Aktion](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, ist es einfach, Formulare mit nur Textfeldern und Schaltflächen mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Form-Widgets handhabt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
