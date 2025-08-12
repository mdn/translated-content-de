---
title: Formatierung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Nun zeigen wir, wie man diese in [CSS](/de/docs/Web/CSS) stylt.

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
        Die Probleme beim Stylen von Formularen zu verstehen und einige der
        grundlegenden Techniken zu erlernen, die nützlich für Sie sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

Im Jahr 1995 führte [die HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularsteuerelemente (auch bekannt als "Formular-Widgets" oder "Formular-Elemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; in der Zwischenzeit verließen sich die Browser auf das zugrunde liegende Betriebssystem, um Formular-Widgets darzustellen.

Selbst mit Verfügbarkeit von CSS waren die Browser-Anbieter zunächst zögerlich, Formularelemente stilisierbar zu machen, weil die Benutzer an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formular-Widgets sind nun größtenteils stilisierbar, mit wenigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stilisieren

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text{{HTMLElement("input")}}s (z. B. Typ text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stilisieren

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweiterte Formularstile](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylt.

#### Mit internen Elementen, die nicht allein in CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen nun [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte ermöglichen, genau wie bei regulären DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Kalender des Datumsauswahlers und der Button auf `<select>`, der eine Optionsliste anzeigt, wenn er angeklickt wird, nicht allein mit CSS gestylt werden.

Die Artikel [Erweiterte Formularstile](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese stylt.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie z. B. {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu stylen, sind jedoch nicht konsistent über Browser hinweg und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die im vorangegangenen Abschnitt als "einfach zu stilisieren" eingestuften Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) —, mit denen auf Basis des aktuellen Zustands der Benutzeroberfläche stilisiert werden kann.

Am Ende dieses Artikels werden wir ein Beispiel durchgehen — aber zuerst gibt es einige spezielle Aspekte der Formularformatierung, die es wert sind, beachtet zu werden.

### Schriftarten und Text

CSS-Schrift- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Allerdings ist das Browserverhalten oft inkonsistent. Einige Widgets erben standardmäßig nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standarderscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu gestalten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Wert führt dazu, dass der Eigenschaftswert mit dem berechneten Wert der Eigenschaft des Eltern-Elements übereinstimmt; er erbt den Wert des Elternteils.

Die untenstehenden Screenshots zeigen den Unterschied. Auf der linken Seite ist das Standardrendering eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS mit dem Standard-Schriftstil der Plattform zu sehen. Auf der rechten Seite sind dieselben Elemente zu sehen, auf die unsere oben genannte Stilregel angewendet wurde.

![Formular-Steuerelemente mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen Serifenschriften und andere Serifenlos. Das Erben sollte die Schriftarten aller auf die Schriftfamilie des übergeordneten Elements ändern - in diesem Fall ein Absatz. Seltsamerweise erbt der Typ Submit nicht vom übergeordneten Absatz.](forms_fontfamily.png)

Die Standards wichen in mehreren Aspekten voneinander ab. Das Erben sollte deren Schriftarten auf die Schriftfamilie des Elternteils ändern — in diesem Fall die standardmäßige Serifenschrift des übergeordneten Containers. Alle tun dies mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Tatsächlich verwendet es {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente gegenüber ihren äquivalenten Eingabetypen zu bevorzugen!

Es gibt viel Diskussion darüber, ob Formulare besser mit den Standardstilen des Systems aussehen oder mit benutzerdefinierten Stilen, die für die Anpassung an Ihren Inhalt entworfen wurden. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Texteingabefelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Boxmodell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihren Inhalt integrieren möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine einheitliche Größe geben möchten.

**Das liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Auffüllung und Abstand hat.** Um mehrere verschiedene Widgets in der gleichen Größe anzuzeigen, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im untenstehenden Screenshot zeigt die linke Spalte das Standardrendering eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt dieselben Elemente mit unserer obigen Regel angewendet. Beachten Sie, wie dies uns ermöglicht sicherzustellen, dass alle Elemente den gleichen Raum einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Box-Modell-Eigenschaften beeinflussen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was möglicherweise nicht über den Screenshot ersichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente gleich aussehen, sie jedoch in den 150px des vom {{cssxref('width')}}-Eigenschaft bereitgestellten horizontalen Raums zentriert sind. Andere Browser zentrieren die Widgets möglicherweise nicht, halten sich jedoch an den zugewiesenen Raum.

### Legendenplatzierung

Das {{HTMLElement("legend")}}-Element ist zwar okay zu stylen, aber die Platzierung kann etwas knifflig sein. Standardmäßig ist es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils positioniert, in der Nähe der oberen linken Ecke. Um es woanders zu platzieren, beispielsweise innerhalb des Fieldsets oder in der Nähe der unteren linken Ecke, müssen Sie auf die Positionsangabe zurückgreifen.

Nehmen Sie folgendes Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, verwendeten wir den folgenden CSS-Code (andere Deklarationen aus Gründen der Kürze entfernt):

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

Das {{HTMLElement("legend")}}-Element ist für die Barrierefreiheit sehr wichtig — es wird von unterstützenden Technologien als Teil der Bezeichnung jedes Formular-Elements innerhalb des Feldes gelesen — jedoch ist die Verwendung einer Technik wie oben beschrieben in Ordnung. Der Inhalt der Legende wird weiterhin auf die gleiche Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um beim Positionieren Ihrer `<legend>` zu helfen. Wenn Sie sie jedoch zum Beispiel mit `transform: translateY();` positionieren, bewegt sie sich, hinterlässt jedoch eine unschöne Lücke in der `<fieldset>`-Umrandung, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylen kann. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den untenstehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig involvierter als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur einige zusätzliche IDs und eine Überschrift.

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

### Organisieren Sie Ihre Assets

Hier beginnt der Spaß erst richtig! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Assets:

1. [Den Postkarten-Hintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre HTML-Arbeitsdatei.
2. Eine Schreibmaschine-Schriftart: [Die "Mom's Typewriter" Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schriftart: [Die "Journal" Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen eine weitere Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Verwenden Sie das Formular, um beide Schriftdateien hochzuladen und ein Webschriftarten-Kit zu generieren. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; diese könnten sich in der Zukunft ändern.) Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im selben Verzeichnis wie vorher. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) Artikel für viel mehr Informationen.

### Das CSS

Jetzt können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke, einen nach dem anderen, innerhalb des {{htmlelement("style")}}-Elements hinzu.

#### Gesamtlayout

Zuerst bereiten wir vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile setzen, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente angewendet werden. Wenn die fontsquirrel-Ausgabe von dem abweicht, was wir oben beschrieben haben, finden Sie die richtigen `@font-face`-Blöcke in Ihrem heruntergeladenen Webschriftarten-Kit, in der `stylesheet.css`-Datei (Sie müssen die folgenden `@font-face`-Blöcke mit diesen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Gitter](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, problemlos positionieren:

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

#### Labels und Steuerelemente

Nun können wir mit der Arbeit an den Formularelementen selbst beginnen. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart haben:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder benötigen einige allgemeine Regeln. Anders ausgedrückt, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokusstil zu haben, aus Gründen der Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Nun, da unsere Textfelder fertig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, damit sie übereinstimmen, da sie normalerweise mit den Standardeinstellungen nicht gleich aussehen.

#### Anpassen der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Elemente gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein Design fester Größe ist, und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld ändern, ist es am besten, Benutzer nicht daran zu hindern, einen Textbereich nach Belieben zu ändern. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld konsistenter über Browser hinweg zu rendern. Einige Browser standardmäßig auf den Wert `auto`, während einige standardmäßig auf den Wert `scroll`. In unserem Fall ist es besser, sicherzugehen, dass alle `auto` verwenden:

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

#### Styling des Senden-Buttons

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu stylen; Sie können damit tun, was Sie wollen, sogar mit [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements):

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

### Das finale Ergebnis

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller Stiländerungen und Anpassungen, wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version abgleichen möchten, finden Sie es auf GitHub — sehen Sie es [live laufend](https://mdn.github.io/learning-area/html/forms/postcard-example/) (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare nur mit Textfeldern und Buttons erstellen wollen, ist es einfach, diese mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Formular-Widgets handhabt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
