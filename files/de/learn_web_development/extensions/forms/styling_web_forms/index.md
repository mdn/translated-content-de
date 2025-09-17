---
title: Styling web forms
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 3fcbbaa87b49ddd87f76d7b932f366726028ab2c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) stylen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Styling von Formularen zu verstehen und einige der grundlegenden Stiltechniken zu erlernen, die Ihnen nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

1995 führte die [HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formular-Elemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und erst Jahre später von den meisten Browsern unterstützt; daher waren die Browser in der Zwischenzeit darauf angewiesen, dass das zugrunde liegende Betriebssystem die Formularelemente rendert.

Selbst mit vorhandener CSS-Technologie zögerten Browseranbieter zunächst, Formularelemente stilbar zu machen, weil Benutzer sich so sehr an das Aussehen ihrer jeweiligen Browser gewöhnt hatten. Aber die Dinge haben sich geändert, und Formular-Widgets sind jetzt größtenteils stilbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwieriger zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylt.

#### Mit internen Komponenten, die nicht alleine mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen nun [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalten wie bei normalen DOM-Elementen ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise können der Kalender des Datumswählers und der Button auf `<select>`, der bei Klick eine Optionsliste anzeigt, nicht alleine mit CSS gestylt werden.

Die Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Wie man benutzerdefinierte Formularelemente baut](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie diese gestaltet werden können.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, können solche internen Komponenten stylen, aber sie sind nicht über alle Browser hinweg konsistent, also nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die "einfach zu stylenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die ein Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden ein Beispiel am Ende dieses Artikels durchgehen — aber zuerst sind hier einige spezielle Aspekte des Formularstylings, die es wert sind, beachtet zu werden.

### Schriftarten und Text

CSS-Schriftart- und Text-Funktionen können leicht mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Form-Widgets verwenden). Allerdings ist das Browserverhalten oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das standardmäßige Erscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu halten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der Wert {{cssxref('inherit')}} der Eigenschaft bewirkt, dass der Eigenschaftswert mit dem berechneten Wert der Eigenschaft seines übergeordneten Elements übereinstimmt; das Erben des Wertes des übergeordneten Elements.

Die folgenden Screenshots zeigen den Unterschied. Links ist die Standardwiedergabe eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und ein `<button>` in Chrome auf macOS mit dem standardmäßigen Schriftstil der Plattform in Verwendung. Rechts sind die gleichen Elemente, mit unserer obigen Stilregel angewendet.

![Formularelemente mit Standard- und geerbten Schriftarten. Standardmäßig sind einige Typen serifenlos. Das Erben sollte die Schriften aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Seltsamerweise erbt input vom Typ submit nicht vom Eltern-Absatz.](forms_fontfamily.png)

Die Standardeinstellungen unterschieden sich in einer Reihe von Punkten. Das Erben sollte ihre Schriften auf die des übergeordneten Schriftfamilie ändern — in diesem Fall die Standard-Serifenschrift des übergeordneten Containers. Sie tun dies alle, mit einer seltsamen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente anstelle ihrer entsprechenden Eingabetypen zu verwenden.

Es gibt viele Debatten darüber, ob Formulare mit den standardmäßigen Systemstilen oder angepasste Stile, die zum Inhalt passen, besser aussehen. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Seite oder Webanwendung.

### Box-Größenbestimmung

Alle Textfelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Box-Modell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich Browser jedoch auf die standardmäßigen Systemstile bei der Anzeige dieser Widgets. Es liegt an Ihnen, zu definieren, wie Sie diese in Ihren Inhalt einfügen möchten. Wenn Sie das native Aussehen der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine konsistente Größe geben wollen.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Füllung und Umrandung hat.** Um verschiedene Widgets auf die gleiche Größe zu bringen, können Sie die {{cssxref("box-sizing")}} Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

In dem Screenshot unten zeigt die linke Spalte die Standardwiedergabe eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer obigen Regel angewendet. Beachten Sie, wie dies es uns ermöglicht, sicherzustellen, dass alle Elemente den gleichen Raum einnehmen, trotz der Standardregeln des Plattformen für jeden Art von Widget.

![Box-Modell-Eigenschaften beeinflussen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was auf dem Screenshot möglicherweise nicht ersichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber sie sind in den 150 Pixel horizontalen Raum zentriert, der von der {{cssxref('width')}} Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Raum.

### Legendenplatzierung

Das {{HTMLElement("legend")}}-Element kann gestylt werden, aber es kann ein wenig knifflig sein, seine Platzierung zu kontrollieren. Standardmäßig ist es immer über der oberen Grenze seines übergeordneten {{HTMLElement("fieldset")}} positioniert, nahe der linken oberen Ecke. Um es woanders zu platzieren, beispielsweise irgendwo innerhalb des Feldsatzes oder nahe der unteren linken Ecke, müssen Sie auf die Positionierung zurückgreifen.

Betrachten Sie das folgende Beispiel:

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
        <label for="cauli">Cauliflower</label>
        <input type="checkbox" id="cauli" name="cauli" value="cauli" />
      </li>
      <li>
        <label for="broc">Broccoli</label>
        <input type="checkbox" id="broc" name="broc" value="broc" />
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
        <label for="bolognaise">Bolognaise</label>
        <input type="radio" id="bolognaise" name="meal" value="bolognaise" />
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

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen aus Gründen der Kürze entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit die `<legend>` relativ dazu positioniert wird (ansonsten würde die `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil der Beschriftung jedes Formularelements innerhalb des Feldsatzes vorgelesen — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Die Legendeninhalte werden weiterhin auf die gleiche Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch mit beispielsweise einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt jedoch eine hässliche Lücke im `<fieldset>`-Rahmen, die nicht einfach zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Betrachten wir ein konkretes Beispiel, wie man ein HTML-Formular stylen kann. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html), und folgen Sie den unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig komplexer als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Fügen Sie den obigen Code in den Body Ihres HTML ein.

### Organisation Ihrer Assets

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Ressourcen:

1. [Der Hintergrund der Postkarte](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter"-Schrift von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schriftart: [Die "Journal"-Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen mehr Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum [Webfont-Generator von fontsquirrel.com](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; diese könnten sich in Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im gleichen Verzeichnis wie vorher. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Leitfaden zu Web-Schriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für weitere Informationen.

### Das CSS

Nun können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke in das {{HTMLElement("style")}}-Element ein, einen nach dem anderen.

#### Gesamt-Layout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile festlegen, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente angewendet werden. Wenn die Ausgabe von fontsquirrel anders war als das, was wir oben beschrieben haben, finden Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der `stylesheet.css`-Datei (Sie müssen die untenstehenden `@font-face`-Blöcke mit ihnen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Mit diesen können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, leicht positionieren:

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

#### Beschriftungen und Steuerelemente

Nun können wir an den Formularelementen selbst arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Umrandungen")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokus-Stil zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder komplett sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, damit sie zusammenpassen, da sie normalerweise nicht gleich aussehen, wenn die Standard-Einstellungen verwendet werden.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Blockelemente gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Größen-Design ist und wir die `resize`-Eigenschaft verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu vergrößern, ist es am besten, Benutzer nicht daran zu hindern, ein Textarea anzupassen, wenn sie es wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld konsistenter über Browser hinweg zu rendern. Einige Browser verwenden standardmäßig den Wert `auto`, während einige den Wert `scroll` verwenden. In unserem Fall ist es besser, sicher zu sein, dass alle `auto` verwenden werden:

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

#### Styling des Submit-Buttons

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu stylen; Sie können damit machen, was Sie möchten, selbst durch die Verwendung von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements):

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

### Das endgültige Ergebnis

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller beschriebenen Stylings und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, finden Sie es auf GitHub — sehen Sie es [live in Aktion](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, ist es einfach, Formulare mit nur Textfeldern und Buttons zu gestalten, solange wir sie nur mit CSS aufbauen wollen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Formularelemente handhabt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
