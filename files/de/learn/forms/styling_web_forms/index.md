---
title: Styling von Webformularen
slug: Learn/Forms/Styling_web_forms
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Nun zeigen wir, wie sie in [CSS](/de/docs/Web/CSS) gestaltet werden können.

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
        Verstehen der Probleme beim Styling von Formularen und Erlernen einiger
        grundlegender Gestaltungstechniken, die für Sie nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

Im Jahr 1995 führten die [HTML 2 Spezifikationen](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formularelemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formularelemente darzustellen.

Selbst mit CSS waren die Browseranbieter zunächst zögerlich, Formularelemente stilisierbar zu machen, da die Benutzer sehr an den Look ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert und Formular-Widgets sind nun größtenteils stilisierbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Leicht zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Eingabe von einzeiligem Text in {{HTMLElement("input")}}s (z.B. Typen text, url, email), außer [`<input type="search">`](/de/docs/Web/HTML/Element/input/search).
4. Mehrzeiliges {{HTMLElement("textarea")}}
5. Schaltflächen (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwieriger zu gestalten

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

Der Artikel [Fortgeschrittenes Formular-Styling](/de/docs/Learn/Forms/Advanced_form_styling) zeigt, wie man diese stilisiert.

#### Mit internen Elementen, die nicht allein mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- Elemente, die in der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Kalender des Datepickers und die Schaltfläche beim `<select>`, die eine Optionsliste anzeigt, wenn darauf geklickt wird, nicht allein mit CSS gestylt werden.

Die Artikel [Fortgeschrittenes Formular-Styling](/de/docs/Learn/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu stylen, aber diese sind nicht konsistent über alle Browser hinweg, daher sind sie nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling von einfachen Formular-Widgets

Die "leicht zu gestalten" Widgets aus dem vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) — die das Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden ein Beispiel am Ende dieses Artikels durchgehen — aber zuerst hier einige spezielle Aspekte des Formularstylings, die es wert sind, bekannt zu werden.

### Schriften und Text

CSS Schrift- und Texteigenschaften können leicht mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Browserverhalten ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren übergeordneten Elementen. Viele Browser verwenden stattdessen das Standardaussehen des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie folgende Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Das {{cssxref('inherit')}}-Eigenschaftswert sorgt dafür, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft seines übergeordneten Elements entspricht; er erbt den Wert des übergeordneten Elements.

Die untenstehenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS, mit dem Standard-Schriftstil der Plattform in Verwendung. Rechts sind die gleichen Elemente, mit unserer obigen Stilregel angewendet.

![Formularsteuerelemente mit Standard- und vererbten Schriftfamilien. Standardmäßig sind einige Typen serifenbetont und andere ohne. Das Vererben sollte die Schriftarten aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Seltsamerweise erbt die Eingabe des Typs submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standardeinstellungen unterschieden sich auf verschiedene Weise. Das Vererben sollte ihre Schriftarten auf die Schriftfamilie der übergeordneten Element ändern — in diesem Fall die Standard-Serifenschrift des übergeordneten Containers. Sie alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Stattdessen wird die {{cssxref('font-family#Values', 'font-family: system-ui')}} verwendet. Dies ist ein weiterer Grund, `<button>`-Elemente ihren äquivalenten Eingabetypen vorzuziehen!

Es gibt viel Diskussion darüber, ob Formulare besser aussehen, wenn sie die Standardeinstellungen des Systems verwenden oder angepasste Stile, die auf Ihren Inhalt abgestimmt sind. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Modell

Alle Texteingabefelder unterstützen vollumfänglich jede Eigenschaft, die mit dem CSS-Boxmodell in Verbindung steht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor jedoch verlassen sich die Browser auf die Standardeinstellungen des Systems, wenn sie diese Widgets darstellen. Es liegt an Ihnen, zu definieren, wie Sie sie in Ihren Inhalt einfügen möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine einheitliche Größe geben möchten.

**Das liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Auffüllung und Umrandung hat.** Um derselben Größe für mehrere verschiedene Widgets zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im untenstehenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer obigen Regel angewendet. Beachten Sie, wie dies uns ermöglicht, sicherzustellen, dass alle Elemente die gleiche Menge an Raum einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften betreffen die meisten Eingabetypten.](boxmodel_formcontrols1.png)

Was auf dem Screenshot nicht offensichtlich zu erkennen ist, ist, dass die Radio- und Kontrollkästchen zwar gleich aussehen, aber in den 150px des horizontalen Raums, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird, zentriert sind. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Platz.

### Position von Legenden

Das {{HTMLElement("legend")}}-Element ist in Ordnung zu gestalten, kann aber etwas knifflig sein, um die Position zu kontrollieren. Standardmäßig wird es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternelements, nahe der oberen linken Ecke, positioniert. Um es woanders zu platzieren, z. B. innerhalb des `fieldset` irgendwo oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Betrachten Sie das folgende Beispiel:

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit die `<legend>` relativ zu ihm positioniert wird (ansonsten würde die `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Etiketts jedes Formularelements innerhalb des `fieldset` angesagt — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Der Legendeninhalt wird immer noch auf die gleiche Weise angesagt; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um beim Positionieren Ihrer `<legend>` zu helfen. Wenn Sie es jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt jedoch eine unschöne Lücke im `<fieldset>`-Rand, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylt. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie dieses Beispiel mitverfolgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und befolgen Sie die unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig komplexer als das Beispiel, das wir im [ersten Artikel dieses Leitfadens](/de/docs/Learn/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Hier beginnt der Spaß! Bevor wir beginnen zu kodieren, benötigen wir drei zusätzliche Assets:

1. [Der Postkarten-Hintergrund](background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre Arbeit-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter" Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schriftart: [Die "Journal" Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen noch etwas Verarbeitung, bevor Sie starten:

1. Gehen Sie zum fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mithilfe des Formulars beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte ZIP-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie könnten sich in der Zukunft ändern.) Kopieren Sie diese Dateien in ein Verzeichnis namens `fonts`, im selben Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Web-Schriften](/de/docs/Learn/CSS/Styling_text/Web_fonts) Artikel für viel mehr Informationen.

### Das CSS

Nun können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke nacheinander in das {{htmlelement("style")}}-Element ein.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile, die für die {{HTMLElement("body")}} und {{HTMLElement("form")}}-Elemente festgelegt sind. Wenn die fontsquirrel-Ausgabe von dem abweicht, was wir oben beschrieben haben, können Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css` finden (Sie müssen die unten stehenden `@font-face`-Blöcke mit ihnen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu gestalten. Damit können wir unsere Elemente leicht positionieren, einschließlich des Titels und aller Formularelemente:

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

Nun können wir beginnen, an den Formularelementen selbst zu arbeiten. Zuerst sorgen wir dafür, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}} und definieren ihr {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir sie mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokusstil zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, da sie typischerweise nicht gleich aussehen, wenn die Standardeinstellungen verwendet werden.

#### Feinabstimmung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}} und {{cssxref("overflow")}} Eigenschaften. Während unser Design ein festes Größenlayout ist und wir die Eigenschaft `resize` verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld ändern, ist es besser, Benutzer nicht daran zu hindern, ein Textfeld neu zu skalieren, wenn sie es möchten. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld im gesamten Browser konsistenter zu rendern. Einige Browser verwenden standardmäßig den Wert `auto`, während einige standardmäßig den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass alle `auto` verwenden:

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

#### Styling des Sende-Buttons

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu gestalten; Sie können tun, was immer Sie möchten, sogar unter Verwendung von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements):

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

![Das endgültige Aussehen und Layout des Formulars, nachdem alles Styling und alle Anpassungen wie oben beschrieben angewendet wurden.](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert hat, wie Sie es erwartet haben, und Sie es mit unserer Version überprüfen möchten, können Sie es auf GitHub finden — sehen Sie sich [die Live-Ansicht](https://mdn.github.io/learning-area/html/forms/postcard-example/) an (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Styling-Grundlagen](/de/docs/Learn/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen können, ist es einfach, Formulare mit nur Textfeldern und Schaltflächen mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formular-Widgets umgeht, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Versand von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftenkompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
