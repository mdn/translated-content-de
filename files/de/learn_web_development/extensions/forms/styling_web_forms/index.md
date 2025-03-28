---
title: Gestaltung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Nun zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) gestaltet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen für das Styling</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Die Probleme beim Styling von Formularen zu verstehen und einige der
        grundlegenden Techniken zu erlernen, die Ihnen nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Stylen von Formular-Widgets

### Geschichte

1995 führte die [HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente ein (auch bekannt als "Form-Widgets" oder "Formularelemente"). CSS wurde jedoch erst Ende 1996 veröffentlicht und nicht von den meisten Browsern bis Jahre danach unterstützt. In der Zwischenzeit hatten die Browser auf das zugrunde liegende Betriebssystem gesetzt, um Form-Widgets darzustellen.

Selbst mit verfügbarer CSS waren Browseranbieter zunächst zögerlich, Formularelemente stilisierbar zu machen, da Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Form-Widgets sind nun größtenteils stilisierbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Eingabefelder mit einer Zeile, z.B. {{HTMLElement("input")}} (Typ text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Element/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

Der Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylt.

#### Mit internen Elementen, die nicht allein mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Datumsauswahlkalender und die Schaltfläche auf `<select>`, die eine Optionsliste anzeigt, wenn sie angeklickt wird, nicht nur mit CSS gestylt werden.

Die Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese stylt.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie z.B. {{cssxref('::-moz-range-track')}}, können solche internen Komponenten stylen, sind jedoch nicht browserübergreifend konsistent und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die in der vorherigen Sektion genannten "einfach zu stylenden" Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestaltet werden. Es gibt auch spezielle Selektoren - [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) - die das Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst gibt es einige besondere Aspekte des Formularstylings, die es wert sind, beachtet zu werden.

### Schriften und Text

CSS-Schrift- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Browserverhalten ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standard-Aussehen des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu gestalten, können Sie die folgenden Regeln Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der Wert {{cssxref('inherit')}} der Eigenschaft bewirkt, dass der Eigenschaftswert mit dem berechneten Wert der Eigenschaft seines Elternelements übereinstimmt; den Wert des Elternteils erben.

Die untenstehenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS, mit dem standardmäßig verwendeten Schriftstil der Plattform. Rechts sind die gleichen Elemente mit der oben genannten Stilregel.

![Formularsteuerelemente mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen Serif und andere Sans Serif. Das Erben sollte die Schriften aller auf die Schriftfamilie des Elternelements ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt 'input of type submit' nicht vom Elternelement Absatz.](forms_fontfamily.png)

Die Standards unterschieden sich in mehrfacher Hinsicht. Durch das Erben sollten ihre Schriftarten auf die des Elternelements geänderten Schriftfamilien umgestellt werden — in diesem Fall die Standard-Serif-Schriftart des übergeordneten Containers. Dies tun sie alle, mit einer merkwürdigen Ausnahme – `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Vielmehr verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, {{HTMLElement("button")}}-Elemente über ihre entsprechenden Eingabetypen zu verwenden!

Es gibt viel Diskussion darüber, ob Formulare besser aussehen, wenn sie die Standardeinstellungen des Systems verwenden oder auf Ihre Inhalte abgestimmte, angepasste Stile verwenden. Diese Entscheidung liegt bei Ihnen als Designer Ihrer Webseite oder Webanwendung.

### Box-Sizing

Alle Texteingabefelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Box-Modell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie vorher verlassen sich jedoch Browser auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihre Inhalte einfügen möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine einheitliche Größe geben möchten.

**Dies liegt daran, dass jedes Widget eigene Regeln für Rahmen, Polsterung und Rand hat.** Um denselben Raum für verschiedene Widgets zu schaffen, können Sie die Eigenschaft {{cssxref("box-sizing")}} zusammen mit konsistenten Werten für andere Eigenschaften verwenden:

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

Im unten stehenden Screenshot zeigt die linke Spalte das Standardrendering eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt dieselben Elemente mit unserer obigen Regel darauf angewandt. Beachten Sie, wie wir auf diese Weise sicherstellen können, dass alle Elemente die gleiche Menge an Platz einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Box-Modell-Eigenschaften wirken sich auf die meisten Eingabetypen aus.](boxmodel_formcontrols1.png)

Was im Screenshot möglicherweise nicht offensichtlich ist, ist, dass die Radio- und Kontrollkästchenelemente immer noch gleich aussehen, aber sie sind in den 150px horizontalen Raum zentriert, der durch die Eigenschaft {{cssxref('width')}} bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, halten sich aber an den zugewiesenen Raum.

### Platzierung von Legenden

Das {{HTMLElement("legend")}}-Element ist okay zum Stylen, aber es kann etwas knifflig sein, die Platzierung zu kontrollieren. Standardmäßig ist es immer über der oberen Grenze seines übergeordneten {{HTMLElement("fieldset")}} positioniert, in der Nähe der oberen linken Ecke. Um es woanders zu positionieren, beispielsweise innerhalb des Feldsatzes oder in der Nähe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie folgendes Beispiel:

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit das `<legend>` relativ dazu positioniert wird (andernfalls wird das `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von assistiven Technologien als Teil der Bezeichnung jedes Formularelements innerhalb des Feldsatzes gesprochen — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Der Inhalt der Legende wird immer noch auf die gleiche Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die Eigenschaft {{cssxref("transform")}} verwenden, um Ihnen bei der Positionierung Ihres `<legend>` zu helfen. Wenn Sie es jedoch beispielsweise mit `transform: translateY();` positionieren, bewegt es sich, hinterlässt jedoch eine hässliche Lücke in der `<fieldset>`-Grenze, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stilisiert. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [siehe hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur etwas umfangreicher als das Beispiel aus [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form); es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Fügen Sie den obigen Code in den Körper Ihres HTMLs ein.

### Organisieren Sie Ihre Ressourcen

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Ressourcen:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das oben genannte Verzeichnis herunter.
3. Eine handgeschriebene Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen noch etwas Bearbeitung, bevor Sie starten:

1. Gehen Sie zum fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. Innerhalb der entpackten Inhalte finden Sie einige Schriftartdateien (zum Zeitpunkt des Schreibens zwei `.woff`- und zwei `.woff2`-Dateien; sie können sich in Zukunft unterscheiden). Kopieren Sie diese Dateien in ein Verzeichnis namens "fonts", im selben Verzeichnis wie vorher. Wir verwenden zwei verschiedene Dateien für jede Schrift, um die Kompatibilität mit verschiedenen Browsern zu maximieren; siehe unser Artikel [Web-Schriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für viel mehr Informationen.

### Das CSS

Nun können wir uns in das CSS für das Beispiel vertiefen. Fügen Sie alle unten gezeigten Codeblöcke in das {{htmlelement("style")}}-Element ein, einen nach dem anderen.

#### Allgemeines Layout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente gesetzt sind, definieren. Wenn die output von fontsquirrel anders ist als die oben beschriebenen, finden Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der `stylesheet.css`-Datei (Sie müssen die unten stehenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, einfach positionieren:

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

Nun können wir mit den Formularelementen selbst arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}-Elemente die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige gemeinsame Regeln. Mit anderen Worten, wir entfernen deren {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, durchsichtigen Hintergrund hervor (es ist immer wichtig, einen Fokus-Stil zu haben, für Benutzbarkeit und Tastatur-Barrierefreiheit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, damit sie übereinstimmen, da sie normalerweise nicht gleich aussehen, wenn die Standardwerte verwendet werden.

#### Anpassen der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Elemente gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}} und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein Design mit fester Größe ist und wir die Eigenschaft `resize` verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu vergrößern oder zu verkleinern, ist es am besten, Benutzern nicht zu verbieten, die Größe eines Textbereichs zu ändern, wenn sie dies wünschen. Die Eigenschaft {{cssxref("overflow")}} wird verwendet, um das Feld über verschiedene Browser hinweg konsistenter darzustellen. Einige Browser verwenden standardmäßig den Wert `auto`, während andere den Wert `scroll` verwenden. In unserem Fall ist es besser sicherzustellen, dass alle `auto` verwenden:

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

#### Styling der Absenden-Schaltfläche

Das {{HTMLElement("button")}}-Element ist wirklich praktisch zum Stylen mit CSS; Sie können tun, was Sie wollen, sogar mit [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements):

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

Und voilà! Ihr Formular sollte nun so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung des gesamten beschriebenen Stylings und Feintunings](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht wie erwartet funktioniert und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es [live laufen](https://mdn.github.io/learning-area/html/forms/postcard-example/) (und sehen Sie sich [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example) an).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Styling-Grundlagen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare nur mit Textfeldern und Schaltflächen erstellen möchten, ist es einfach, sie mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formular-Widgets umgeht, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
