---
title: Stilvolle Webformulare
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 86fcc6c7939a997214101371261e99828ea3cc23
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie mit [CSS](/de/docs/Web/CSS) gestaltet.

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
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Styling von Formularen zu verstehen und einige der
        grundlegenden Styling-Techniken zu erlernen, die Ihnen nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

1995 führte die [HTML 2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formularelemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und wurde von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formularelemente darzustellen.

Selbst mit verfügbarem CSS zögerten Browseranbieter zunächst, Formularelemente stylbar zu machen, da die Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt größtenteils stylbar, mit wenigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Texteingaben {{HTMLElement("input")}}s (z.B. Typ text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Element/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

Der Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie diese gestylt werden können.

#### Mit Interna, die nicht nur mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datenbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise können der Kalender-Picker und der Button auf `<select>`, der beim Klicken eine Optionsliste anzeigt, nicht allein mit CSS gestylt werden.

Die Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie diese gestylt werden können.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie zum Beispiel {{cssxref('::-moz-range-track')}}, können solche internen Komponenten stylen, aber diese sind nicht universell über alle Browser hinweg konsistent und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling von einfachen Formular-Widgets

Die "einfach zu stylenden" Widgets aus dem vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [Grundlagen des CSS-Stylings](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die eine Stilgestaltung basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Am Ende dieses Artikels werden wir ein Beispiel durchgehen — aber zuerst sind hier einige spezielle Aspekte des Formulierenstylings, die zu beachten sind.

### Schriftarten und Text

CSS-Schrift- und Textmerkmale können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formularelementen verwenden). Browserverhalten ist jedoch oft inkonsistent. Einige Widgets übernehmen standardmäßig nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standard-Aussehen des Systems. Um sicherzustellen, dass das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent ist, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert führt dazu, dass der Wert der Eigenschaft dem berechneten Wert des Elternelements entspricht; er erbt den Wert des Elternteils.

Die Screenshots unten zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS mit dem Standard-Schriftstil der Plattform. Rechts sind dieselben Elemente, mit unserer oben genannten Stilregel angewendet.

![Formularsteuerelemente mit Standard- und geerbten Schriftarten. Standardmäßig sind einige Typen Serifenschriften und andere serifenlos. Das Erben sollte die Schriften aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall eine Paragraphenschriftart. Merkwürdigerweise erbt Input vom Typ Submit nicht von dem Elterndokument.](forms_fontfamily.png)

Die Standards unterschieden sich in mehreren Punkten. Das Erben sollte ihre Schriftarten auf die der Schriftfamilie des Elternteils ändern — in diesem Fall die standardmäßige serifenlose Schriftart des übergeordneten Containers. Alle tun dies, mit einer seltsamen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Vielmehr verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, {{HTMLElement("button")}}-Elemente gegenüber ihren äquivalenten Eingabetypen zu verwenden!

Es gibt viel Debatte darüber, ob Formulare besser im Systemstandardstil oder in angepassten Styles, die auf Ihren Inhalt abgestimmt sind, aussehen. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder haben vollständige Unterstützung für jede Eigenschaft, die mit dem CSS-Boxmodell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihren Inhalt einblenden möchten. Wenn Sie das native Aussehen der Widgets beibehalten möchten, werden Sie es etwas schwer haben, wenn Sie ihnen eine konsistente Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Ränder, Abstände und Ränder hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt dieselben Elemente mit unserer oben genannten Regel angewendet. Beachten Sie, wie wir so sicherstellen können, dass alle Elemente den gleichen Platz einnehmen, trotz der Standardregeln für jeden Typ von Widget.

![Boxmodell-Eigenschaften betreffen die meisten Input-Typen.](boxmodel_formcontrols1.png)

Was möglicherweise nicht über den Screenshot klar wird, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber sie sind in den 150 Pixeln horizontaler Platz zentriert, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, halten sich jedoch an den zugewiesenen Platz.

### Legendenplatzierung

Das {{HTMLElement("legend")}}-Element ist okay zu stylen, aber es kann etwas schwierig sein, die Platzierung zu kontrollieren. Standardmäßig wird es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils nahe der oberen linken Ecke positioniert. Um es woanders zu positionieren, zum Beispiel irgendwo im Feldset oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie folgendes Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit die `<legend>` relativ dazu positioniert wird (ansonsten würde die `<legend>` relativ zum `<body>` positioniert werden).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Labels jedes Formularelements im Feldset gesprochen — aber die Verwendung einer Technik wie der obigen ist in Ordnung. Der Legend-Inhalt wird auf die gleiche Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie können auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt es sich, aber hinterlässt eine hässliche Lücke in der `<fieldset>`-Grenze, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylen kann. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig komplizierter als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

### Die Assets organisieren

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriften erfordern einige weitere Bearbeitungen, bevor Sie beginnen:

1. Gehen Sie zum fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereit gestellte ZIP-Datei.
4. Im Inhalt der entpackten Datei finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie könnten sich in der Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens "fonts" im selben Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; sehen Sie unseren [Web Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)-Artikel, um viel mehr Informationen zu erhalten.

### Das CSS

Jetzt können wir uns in das CSS für das Beispiel vertiefen. Fügen Sie alle unten gezeigten Codeblöcke nacheinander in das {{htmlelement("style")}}-Element ein.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile auf den {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elementen definieren. Wenn die fontsquirrel-Ausgabe anders war als das, was wir oben beschrieben haben, können Sie die korrekten `@font-face`-Blöcke innerhalb Ihres heruntergeladenen Webfont-Kits im `stylesheet.css`-Datei finden (Sie müssen die folgenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grids](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, leicht positionieren:

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

Jetzt können wir anfangen, die Formularelemente selbst zu bearbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder benötigen einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergrund")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Jetzt, da unsere Textfelder vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, um sie anzupassen, da sie normalerweise nicht gleich mit den Standardeinstellungen aussehen.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente haben standardmäßig die Darstellung als Inline-Block-Element. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}} und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein Design mit fester Größe ist und wir die `resize`-Eigenschaft verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu skalieren, ist es am besten, Benutzern nicht zu verhindern, dass sie ein Textarea nach Belieben skalieren. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über verschiedene Browser hinweg konsistenter zu rendern. Einige Browser verwenden standardmäßig den Wert `auto`, während andere den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass alle `auto` verwenden:

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

Das {{HTMLElement("button")}}-Element ist wirklich bequem mit CSS zu stylen; Sie können alles tun, was Sie wollen, sogar mit [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements):

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

Und voilà! Ihr Formular sollte nun so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller beschriebenen Styles und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert, wie Sie es erwartet haben und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es [live ausführen](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Styling-Grundlagen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare nur mit Textfeldern und Buttons erstellen wollen, ist es einfach, sie mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Formularelemente behandelt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
