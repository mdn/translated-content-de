---
title: Styling von Webformularen
slug: Learn/Forms/Styling_web_forms
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man HTML-Webformulare erstellt. Jetzt zeigen wir Ihnen, wie Sie diese mit [CSS](/de/docs/Web/CSS) gestalten können.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Verständnis der Probleme hinter dem Styling von Formularen und Erlernen einiger grundlegender Styling-Techniken, die nützlich für Sie sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

1995 führte [die HTML 2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularsteuerelemente ein (auch "Formular-Widgets" oder "Formularelemente" genannt). Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; solange mussten sich die Browser auf das zugrunde liegende Betriebssystem verlassen, um Formular-Widgets darzustellen.

Auch mit verfügbarem CSS waren Browserhersteller anfangs zurückhaltend, Formularelemente gestaltbar zu machen, da Benutzer so sehr an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt größtenteils gestaltbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Leicht zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z. B. Typ text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Element/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

Der Artikel [Fortgeschrittenes Formular-Styling](/de/docs/Learn/Forms/Advanced_form_styling) zeigt, wie diese gestylt werden können.

#### Mit Interna, die nicht nur mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- Elemente, die bei der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Datumsauswahlkalender und die Schaltfläche auf \<select>, die eine Optionsliste anzeigt, wenn sie angeklickt wird, nicht nur mit CSS allein gestylt werden.

Die Artikel [Fortgeschrittenes Formular-Styling](/de/docs/Learn/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls) beschreiben, wie diese gestylt werden können.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, können solche internen Komponenten stylen, aber diese sind nicht konsistent über Browser hinweg und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die "leicht zu stylenden" Widgets aus dem vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) — die das Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden ein Beispiel am Ende dieses Artikels durchgehen — aber zuerst, hier einige besondere Aspekte des Formularstylings, die es wert sind, beachtet zu werden.

### Schriftarten und Text

CSS-Schrift- und Texteigenschaften können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Allerdings ist das Verhalten der Browser oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren übergeordneten Elementen. Viele Browser verwenden stattdessen das Standardaussehen des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie folgende Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Attributwert bewirkt, dass der Attributwert dem berechneten Wert des Attributs seines Elternelements entspricht; er erbt den Wert des Elternteils.

Die folgenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS mit dem Standard-Schriftstil der Plattform. Rechts sind dieselben Elemente, auf die unsere obige Stilregel angewendet wurde.

![Formularsteuerelemente mit Standard- und geerbten Schriftarten. Standardmäßig sind einige Arten Serifenschriften und andere Sans-Serif-Schriften. Erben sollte die Schriftarten aller in die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt der Eingabetyp submit nicht vom Elternteil-Absatz.](forms_fontfamily.png)

Die Defaults unterschieden sich in mehreren Aspekten. Das Erben sollte ihre Schriftarten auf die des Elternelements ändern — in diesem Fall die Standard-Serifen-Schriftart des übergeordneten Containers. Alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom Elternelement-Absatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente über ihre äquivalenten Eingabetypen zu verwenden!

Es gibt viele Debatten darüber, ob Formulare besser im systemeigenen Standardstil oder in benutzerdefinierten, an Ihren Inhalt angepassten Stilen aussehen. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box Sizing

Alle Textfelder unterstützen komplett jede Eigenschaft, die mit dem CSS-Boxmodell zu tun hat, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch auf die systemeigenen Standardstile beim Anzeigen dieser Widgets. Es liegt an Ihnen, zu definieren, wie Sie wünschen, dass sie sich in Ihren Inhalt einfügen. Wenn Sie das nativen Aussehen und Gefühl der Widgets beibehalten möchten, werden Sie ein wenig Schwierigkeiten haben, wenn Sie ihnen eine konsistente Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Abstand und Rand hat.** Um mehreren unterschiedlichen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt dieselben Elemente mit unserer obigen Regel angewendet. Beachten Sie, wie dies uns ermöglicht sicherzustellen, dass alle Elemente den gleichen Platz einnehmen, trotz der Standards des Systems für jede Art von Widget.

![Boxmodell-Eigenschaften beeinflussen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was im Screenshot möglicherweise nicht offensichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber in den 150px horizontalen Raum zentriert sind, der von der {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Platz.

### Legende-Positionierung

Das {{HTMLElement("legend")}}-Element ist in Ordnung zu stylen, aber es kann ein wenig schwierig sein, seine Platzierung zu kontrollieren. Standardmäßig wird es immer über der oberen Begrenzung seines {{HTMLElement("fieldset")}}-Elternelements, nahe der oberen linken Ecke, positioniert. Um es woanders zu positionieren, zum Beispiel innerhalb des Feldsatzes irgendwo oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen wurden der Übersichtlichkeit halber entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit das `<legend>` relativ dazu positioniert wird (ansonsten würde das `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Etiketts jedes Formularelements innerhalb des Feldsatzes angesagt — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Die Inhaltsangaben der Legende werden weiterhin auf die gleiche Weise angesagt; es hat sich nur die visuelle Position geändert.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihres `<legend>` zu helfen. Wenn Sie es jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt jedoch eine unschöne Lücke in der `<fieldset>`-Grenze, die nicht einfach zu entfernen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel dafür an, wie man ein HTML-Formular stylen kann. Wir werden ein hübsch aussehendes „Postkarten“-Kontaktformular erstellen; [siehe hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie dieses Beispiel nachvollziehen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur leicht komplexer als das Beispiel, das wir im [ersten Artikel dieses Leitfadens](/de/docs/Learn/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Fügen Sie den obigen Code in den Body Ihres HTMLs ein.

### Organisieren Ihrer Assets

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkarten-Hintergrund](background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.
3. Eine handschriftliche Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen etwas mehr Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zu fontsquirrel.com [Webfont-Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie über das Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. Im Inhalt des entpackten Ordners finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie können in der Zukunft variieren.) Kopieren Sie diese Dateien in ein Verzeichnis namens fonts im selben Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Web-Schriften](/de/docs/Learn/CSS/Styling_text/Web_fonts) Artikel für viel mehr Informationen.

### Das CSS

Nun können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke nacheinander in das {{htmlelement("style")}}-Element ein.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile festlegen, die auf die {{HTMLElement("body")}} und {{HTMLElement("form")}}-Elemente angewendet werden. Wenn die von fontsquirrel ausgegebenen Dateien sich von dem unterscheiden, was wir oben beschrieben haben, können Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css` finden (Sie müssen die folgenden `@font-face`-Blöcke mit ihnen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Jetzt können wir beginnen, an den Formularelementen selbst zu arbeiten. Zuerst sorgen wir dafür, dass die {{HTMLElement("label")}}s mit der richtigen Schriftart versehen werden:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige gemeinsame Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}} und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir sie mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokusstil zu haben, für Bedienungsfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Da unsere Textfelder nun vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, um sie anzugleichen, da sie typischerweise mit den Standardwerten nicht gleich aussehen.

#### Anpassen der Textareas

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die zwei wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein Fixgrößen-Design ist und wir die `resize`-Eigenschaft verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu vergrößern, ist es am besten, Benutzern nicht zu verbieten, eine Textarea zu vergrößern, wenn sie möchten. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, damit das Feld konsistenter über die Browser hinweg gerendert wird. Einige Browser verwenden standardmäßig den Wert `auto`, während andere standardmäßig den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass jeder `auto` verwendet:

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

Das {{HTMLElement("button")}}-Element ist wirklich praktisch mit CSS zu stylen; Sie können tun, was Sie möchten, sogar unter Verwendung von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements):

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

### Das endgültige Ergebnis

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach der Anwendung aller beschriebenen Stile und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Falls Ihr Beispiel nicht so funktioniert, wie Sie es erwartet haben und Sie es mit unserer Version vergleichen möchten, finden Sie es auf GitHub — sehen Sie es [live in Aktion](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihr Können

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Styling-Grundlagen](/de/docs/Learn/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare mit nur Textfeldern und Schaltflächen bauen wollen, ist es einfach, diese mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn/Forms/Advanced_form_styling) werden wir sehen, wie man Formularelemente behandelt, die in die "schlechte" und "hässliche" Kategorie fallen.

{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen durch JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschafts-Kompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
