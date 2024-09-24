---
title: Webformulare gestalten
slug: Learn/Forms/Styling_web_forms
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) gestaltet.

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
        Die Probleme bei der Gestaltung von Formularen zu verstehen und einige der
        grundlegenden Gestaltungsverfahren zu lernen, die für Sie nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen bei der Gestaltung von Formular-Widgets

### Geschichte

Im Jahr 1995 führte [die HTML 2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formular-Steuerelemente ein (auch bekannt als "Formular-Widgets" oder "Formular-Elemente"). Aber CSS wurde erst Ende 1996 veröffentlicht und erst Jahre später von den meisten Browsern unterstützt; In der Zwischenzeit verließen sich Browser auf das zugrunde liegende Betriebssystem, um Formular-Widgets darzustellen.

Selbst mit verfügbarem CSS waren Browseranbieter zunächst zurückhaltend, Formular-Elemente stilisierbar zu machen, weil die Nutzer an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formular-Widgets sind mittlerweile größtenteils stilisierbar, mit ein paar Ausnahmen.

### Arten von Widgets

#### Einfach zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z. B. Typ Text, URL, E-Mail), außer [`<input type="search">`](/de/docs/Web/HTML/Element/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwieriger zu gestalten

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

Der Artikel [Erweiterte Formulargestaltung](/de/docs/Learn/Forms/Advanced_form_styling) zeigt, wie man diese gestaltet.

#### Elemente mit Interna, die nicht allein mit CSS gestaltet werden können

- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel kann der Dateipicker-Kalender und der Button auf \<select>, der beim Klicken eine Optionsliste anzeigt, nicht allein mit CSS gestaltet werden.

Die Artikel [Erweiterte Formulargestaltung](/de/docs/Learn/Forms/Advanced_form_styling) und [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, können solche internen Komponenten gestalten, sind aber nicht konsistent über Browser hinweg und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Gestaltung einfacher Formular-Widgets

Die in der vorherigen Sektion erwähnten "einfach zu gestaltenden" Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn/Forms/Your_first_form) und [CSS Baukastensysteme](/de/docs/Learn/CSS/Building_blocks) gestaltet werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) — die das Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst gibt es einige spezielle Aspekte der Formulargestaltung, die wissenswert sind.

### Schriftarten und Text

CSS-Schriftarten und Texteigenschaften können einfach mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Browserverhalten ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren übergeordneten Elementen. Viele Browser verwenden stattdessen das Standardaussehen des Systems. Um das Aussehen Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der Wert {{cssxref('inherit')}} bewirkt, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft des übergeordneten Elements entspricht; der Wert des übergeordneten Elements wird geerbt.

Die folgenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS mit der Standardschriftart des Plattformstils. Rechts sind dieselben Elemente, auf die unsere obige Stilregel angewendet wurde.

![Formularsteuerelemente mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen Serifenschriftarten und andere Sans-Serif-Schriftarten. Vererben sollte die Schriftarten aller in die Schriftfamilie des übergeordneten Elements ändern - in diesem Fall ein Absatz. Seltsamerweise erbt input vom Typ submit nicht vom übergeordneten Absatz.](forms_fontfamily.png)

Die Standards unterschieden sich in mehrfacher Hinsicht. Das Vererben sollte ihre Schriftarten in die des übergeordneten Elements ändern — in diesem Fall die Standard-Serifenschrift des übergeordneten Containers. Sie alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente ihren äquivalenten Inputtypen vorzuziehen!

Es gibt viel Diskussion darüber, ob Formulare besser mit den Standardstilen des Systems oder mit benutzerdefinierten Stilen aussehen, die auf Ihre Inhalte abgestimmt sind. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder unterstützen jede Eigenschaft, die mit dem CSS-Box-Modell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch beim Anzeigen dieser Widgets auf die Standardstile des Systems. Es liegt an Ihnen, zu definieren, wie Sie diese in Ihren Inhalt integrieren möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, stoßen Sie auf ein kleines Problem, wenn Sie ihnen eine konsistente Größe geben wollen.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für den Rand, das Padding und den Randabstand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die Eigenschaft {{cssxref("box-sizing")}} zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im folgenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt dieselben Elemente mit unserer obigen Regel angewendet. Beachten Sie, wie dadurch sichergestellt wird, dass alle Elemente denselben Platz einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Box-Model-Eigenschaften wirken sich auf die meisten Inputtypen aus.](boxmodel_formcontrols1.png)

Was im Screenshot vielleicht nicht offensichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber sie sind im 150px breiten horizontalen Raum zentriert, der durch die Eigenschaft {{cssxref('width')}} bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Platz.

### Platzierung der Legende

Das {{HTMLElement("legend")}}-Element ist okay zu stylen, aber es kann etwas schwierig sein, seine Platzierung zu kontrollieren. Standardmäßig ist es immer über dem oberen Rand seines {{HTMLElement("fieldset")}}-Elternteils positioniert, nahe der oberen linken Ecke. Um es an einer anderen Stelle zu positionieren, zum Beispiel irgendwo innerhalb des Fieldsets oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, verwenden wir das folgende CSS (andere Deklarationen aus Gründen der Kürze entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit das `<legend>` relativ dazu positioniert wird (ansonsten würde das `<legend>` relativ zum `<body>` positioniert werden).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil der Beschriftung jedes Formularelements innerhalb des Fieldsets angesprochen — aber eine Technik wie die oben beschriebene zu verwenden, ist in Ordnung. Der Inhalt der Legende wird weiterhin auf die gleiche Weise angesprochen; es ist nur die visuelle Position, die geändert wurde.

> [!NOTE]
> Sie könnten auch die Eigenschaft {{cssxref("transform")}} verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch zum Beispiel mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt jedoch eine unschöne Lücke im `<fieldset>`-Rahmen, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Lassen Sie uns ein konkretes Beispiel dafür betrachten, wie ein HTML-Formular gestaltet werden kann. Wir werden ein ansprechend aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den untenstehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig komplexer als das Beispiel, das wir in [dem ersten Artikel dieses Leitfadens](/de/docs/Learn/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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
    <label for="msg">Ihre Nachricht:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Senden Sie Ihre Nachricht</button>
  </div>
</form>
```

Fügen Sie den obigen Code in den Body Ihres HTML ein.

### Organisieren Ihrer Ressourcen

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, brauchen wir drei zusätzliche Assets:

1. [Den Postkartenhintergrund](background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschine-Schriftart: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriften benötigen vor dem Starten noch etwas Bearbeitung:

1. Gehen Sie zum fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entzippen Sie die bereitgestellte Zip-Datei.
4. Drinnen in den entzippten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; diese können in Zukunft variieren.) Kopieren Sie diese Dateien in ein Verzeichnis namens "fonts", im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browserkompatibilität zu maximieren; siehe unseren Artikel [Web fonts](/de/docs/Learn/CSS/Styling_text/Web_fonts) für eine ausführlichere Erklärung.

### Das CSS

Nun können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke nacheinander in das {{htmlelement("style")}}-Element ein.

#### Gesamt-Layout

Zunächst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren und alle grundlegenden Stile, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente festgelegt sind. Wenn die fontsquirrel-Ausgabe anders war als das, was wir oben beschrieben haben, finden Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css` (Sie müssen die untenstehenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

  /* wir erstellen unser Grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu gestalten. Damit können wir unsere Elemente, einschließlich der Überschrift und aller Formularelemente, einfach positionieren:

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

Jetzt können wir an den Formularelementen selbst arbeiten. Zunächst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige gemeinsame Regeln. Anders gesagt, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}}, und definieren ihr {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, Fokusstile zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Nun, da unsere Textfelder fertig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder angleichen, da sie normalerweise nicht gleich aussehen, wenn die Standardeinstellungen verwendet werden.

#### Anpassung der Textareas

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein Design mit fester Größe ist und wir die `resize`-Eigenschaft verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu vergrößern, ist es am besten, Benutzern nicht zu verbieten, eine Textarea zu vergrößern, wenn sie dies wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld in allen Browsern gleichmäßig darzustellen. Einige Browser verwenden standardmäßig den Wert `auto`, während andere den Wert `scroll` verwenden. In unserem Fall ist es besser sicherzustellen, dass alle `auto` verwenden:

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

#### Styling des Absenden-Buttons

Das {{HTMLElement("button")}}-Element ist wirklich bequem mit CSS zu stylen; Sie können alles tun, sogar [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller Styling- und Anpassungsschritte wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert hat, wie Sie es erwartet haben und Sie es mit unserer Version vergleichen möchten, finden Sie es auf GitHub — siehe es [live laufen](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Styling-Grundlagen](/de/docs/Learn/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen können, ist es einfach, Formulare mit nur Textfeldern und Buttons mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn/Forms/Advanced_form_styling) werden wir sehen, wie man Formular-Widgets behandelt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

### Erweiterte Themen

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Versenden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschafts-Kompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
