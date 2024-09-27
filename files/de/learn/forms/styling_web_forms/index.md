---
title: Gestaltung von Webformularen
slug: Learn/Forms/Styling_web_forms
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

In den vorherigen Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) stylt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme hinter dem Styling von Formularen verstehen und einige der
        grundlegenden Styling-Techniken erlernen, die nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

1995 führte [die HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formularelemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und wurde von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formularelemente darzustellen.

Selbst mit CSS verfügbar, waren Browserhersteller zunächst zögerlich, Formularelemente stilisierbar zu machen, da Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Zeiten haben sich geändert, und Formularelemente sind jetzt größtenteils stilisierbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. type text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Element/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

Der Artikel [Advanced form styling](/de/docs/Learn/Forms/Advanced_form_styling) zeigt, wie man diese stylt.

#### Mit interner Struktur, die nicht nur mit CSS gestaltet werden kann

- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Kontrollen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Datumsauswahlkalender und der Button auf \<select>, der eine Optionsliste anzeigt, wenn darauf geklickt wird, nicht nur mit CSS gestylt werden.

Die Artikel [Advanced form styling](/de/docs/Learn/Forms/Advanced_form_styling) und [How to build custom form controls](/de/docs/Learn/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese stylt.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu stylen, aber diese sind nicht einheitlich über alle Browser hinweg, also nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die "einfach zu stilisierenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) — die es ermöglichen, basierend auf dem aktuellen Zustand der Benutzeroberfläche zu stylen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst sind hier einige spezielle Aspekte des Formularstylings, die es wert sind, bekannt zu sein.

### Schriftarten und Text

CSS-Schriftarten- und Textfunktionen können leicht auf jedes Widget angewendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standardaussehen des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}} Eigenschaftswert bewirkt, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft des übergeordneten Elements entspricht; den Wert des Elternteils erben.

Die unteren Screenshots zeigen den Unterschied. Links ist die Standardanzeige eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS, mit dem Standardschriftstil der Plattform. Rechts sind die gleichen Elemente, mit unserer obigen Stilregel angewendet.

![Formularsteuerelemente mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen serifen- und andere sans-serif. Vererben sollte die Schriftarten aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt der Typ-Absenden-Eingabetyp nicht von dem übergeordneten Absatz.](forms_fontfamily.png)

Die Standards unterschieden sich in mehreren Punkten. Das Vererben sollte ihre Schriftarten auf die der Schriftfamilie des übergeordneten Elements ändern — in diesem Fall die Standardschriftart des übergeordneten Containers. Sie alle tun dies, mit einer seltsamen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Vielmehr verwendet es das {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente den entsprechenden Eingabetypen vorzuziehen!

Es gibt viel Diskussion darüber, ob Formulare mit den Standard-Systemstilen oder angepassten Stilen, die auf Ihren Inhalt abgestimmt sind, besser aussehen. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Boxmodell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich Browser jedoch auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihren Inhalt integrieren möchten. Wenn Sie das native Look and Feel der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine einheitliche Größe geben möchten.

**Das liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Polsterung und Außenabstand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}} Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im unteren Screenshot zeigt die linke Spalte die Standardanzeige eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte zeigt hingegen die gleichen Elemente mit unserer obigen Regel darauf angewendet. Beachten Sie, wie dies uns erlaubt, sicherzustellen, dass alle Elemente den gleichen Raum einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften beeinflussen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was über den Screenshot vielleicht nicht erkennbar ist, ist, dass die Radio- und Kontrollkästchen weiterhin gleich aussehen, aber sie sind in den 150px horizontalen Raum zentriert, der durch die {{cssxref('width')}} Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Platz.

### Platzierung der Legende

Das {{HTMLElement("legend")}}-Element lässt sich gut stylen, aber es kann etwas knifflig sein, seine Platzierung zu steuern. Standardmäßig wird es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils, nahe der oberen linken Ecke, positioniert. Um es woanders zu positionieren, beispielsweise irgendwo innerhalb des Fieldsets oder in der Nähe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen zur Kürze entfernt):

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

Das `<fieldset>` muss auch positioniert werden, damit das `<legend>` relativ dazu positioniert wird (ansonsten würde das `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Labels jedes Formularelements im Fieldset vorgelesen — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Die Inhalte der Legende werden weiterhin auf die gleiche Weise gesprochen; es hat sich nur die visuelle Position geändert.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie sie jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt sie sich, hinterlässt aber eine unschöne Lücke im `<fieldset>`-Rand, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel dafür an, wie man ein HTML-Formular stylt. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den Anweisungen unten.

### Das HTML

Das HTML ist nur geringfügig komplizierter als das Beispiel, das wir im [ersten Artikel dieses Leitfadens](/de/docs/Learn/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

### Organisieren Ihrer Assets

Hier beginnt der Spaß! Bevor wir mit dem Coden beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkartenhintergrund](background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinenschrift: [Die "Mom's Typewriter"-Schrift von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie zuvor herunter.
3. Eine handgezeichnete Schrift: [Die "Journal"-Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie zuvor herunter.

Ihre Schriften benötigen einige weitere Verarbeitung, bevor Sie beginnen:

1. Gehen Sie auf die fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entzippen Sie die bereitgestellte ZIP-Datei.
4. In den entzippten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; diese könnten sich in der Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens "fonts" im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schrift, um die Browser-Kompatibilität zu maximieren; siehe unseren Artikel [Web fonts](/de/docs/Learn/CSS/Styling_text/Web_fonts) für viel mehr Informationen.

### Das CSS

Jetzt können wir uns in das CSS für das Beispiel einschmuggeln. Fügen Sie alle unten gezeigten Codeblöcke nacheinander in das {{htmlelement("style")}}-Element ein.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren und alle grundlegenden Stile, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente gesetzt werden. Wenn die Fontsquirrel-Ausgabe anders war als oben beschrieben, finden Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css` (Sie müssen die unten stehenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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
  background: #222;
}

form {
  position: relative;
  width: 740px;
  height: 498px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
  background: #fff url(background.jpg);

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

Beachten Sie, dass wir etwas [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, leicht positionieren:

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

Jetzt können wir an den Formularelementen selbst arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige allgemeine Regeln. Mit anderen Worten, wir entfernen deren {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}} und definieren deren {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokusstil zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, um sie anzugleichen, da sie normalerweise nicht gleich aussehen, wenn man die Standardwerte verwendet.

#### Anpassung der `<textarea>`

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein design mit fester Größe ist, und wir die `resize`-Eigenschaft verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu vergrößern oder zu verkleinern, ist es am besten, Benutzern nicht zu verhindern, ein `<textarea>` bei Bedarf zu verändern. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld konsistenter über die Browser hinweg darzustellen. Einige Browser verwenden standardmäßig den Wert `auto`, während einige standardmäßig den Wert `scroll` verwenden. In unserem Fall ist es besser sicherzustellen, dass jeder `auto` verwendet:

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

#### Styling des Absendens-Buttons

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um mit CSS gestylt zu werden; Sie können tun, was Sie wollen, sogar [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

```css
button {
  padding: 5px;
  font: bold 0.6em sans-serif;
  border: 2px solid #333;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transform: rotate(-1.5deg);
}

button:after {
  content: " >>>";
}

button:hover,
button:focus {
  background: #000;
  color: #fff;
}
```

### Das Endergebnis

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller Stile und Anpassungen, wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es [live](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Styling-Basics](/de/docs/Learn/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen, ist es einfach, Formulare mit nur Textfeldern und Buttons mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn/Forms/Advanced_form_styling) werden wir sehen, wie man Formular-Widgets behandelt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

### Fortgeschrittene Themen

- [How to build custom form controls](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
