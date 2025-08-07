---
title: Styling von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Nun zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) stylt.

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
        Die Probleme beim Stylen von Formularen zu verstehen und einige der grundlegenden Styling-Techniken zu erlernen, die nützlich für Sie sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

Im Jahr 1995 führte [die HTML-2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente ein (auch bekannt als "Formular-Widgets" oder "Formular-Elemente"). CSS wurde jedoch erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formularelemente darzustellen.

Selbst mit verfügbarem CSS zögerten die Browseranbieter zunächst, Formularelemente stylbar zu machen, weil die Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind nun größtenteils stylbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z. B. Typ text, url, email), außer [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylen kann.

#### Mit internen Elementen, die nicht allein mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die zur Erstellung von Dropdown-Widgets dienen, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen nun [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte ermöglichen, genau wie bei regulären DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Datumsauswahlkalender und die Schaltfläche auf `<select>`, die beim Klicken eine Optionsliste anzeigt, nicht allein mit CSS gestylt werden.

Die Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zur Erstellung benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese stylen kann.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu stylen, aber diese sind nicht konsistent über alle Browser hinweg und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die in der vorherigen Sektion genannten "einfach zu stylenden" Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die das Styling basierend auf dem aktuellen Zustand der UI ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen – aber zunächst gibt es einige besondere Aspekte des Formularstylings, die es wert sind, bekannt zu machen.

### Schriften und Text

CSS-Schrift- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten von Browsern ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standard-Erscheinungsbild des Systems. Um sicherzustellen, dass das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts übereinstimmt, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert führt dazu, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft des übergeordneten Elements entspricht; das bedeutet, dass der Wert des Elternteils übernommen wird.

Die untenstehenden Screenshots zeigen den Unterschied. Links die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome unter macOS, mit der Standard-Schriftart des Plattformstils in Verwendung. Rechts dieselben Elemente, mit unserer oben genannten Stilregel angewendet.

![Formular-Steuerungen mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen serif und andere sans serif. Erben sollte die Schriftarten aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt der Typ input submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standards unterschieden sich in vielerlei Hinsicht. Das Erben sollte ihre Schriftarten auf die des Eltern-Containers ändern — in diesem Fall die Standardschriftart des Elterncontainers. Sie alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom Elternabsatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente gegenüber ihren entsprechenden Eingabetypen zu verwenden!

Es gibt viel Diskussion darüber, ob Formulare besser aussehen, wenn sie die Standardsystemstile verwenden, oder wenn sie angepasst werden, um Ihrem Inhalt zu entsprechen. Diese Entscheidung liegt bei Ihnen als Gestalter Ihrer Website oder Webanwendung.

### Box Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die sich auf das CSS-Box-Modell bezieht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt bei Ihnen zu definieren, wie Sie diese in Ihren Inhalt einfügen möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, wird es ein wenig schwierig für Sie sein, wenn Sie ihnen eine konsistente Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Polsterung und Abstand hat.** Um mehreren unterschiedlichen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im untenstehenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte zeigt dagegen dieselben Elemente mit unseren oben genannten Regeln, die auf sie angewendet wurden. Beachten Sie, wie dies es uns ermöglicht, sicherzustellen, dass alle Elemente denselben Raum einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Box-Modell-Eigenschaften wirken sich auf die meisten Eingabetypen aus.](boxmodel_formcontrols1.png)

Was im Screenshot nicht deutlich zu erkennen ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber sie sind innerhalb der 150px horizontaler Raum zentriert, der von der {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, halten sich jedoch an den zugewiesenen Raum.

### Legendenplatzierung

Das {{HTMLElement("legend")}}-Element ist zum Stylen in Ordnung, aber es kann etwas schwierig sein, seine Platzierung zu kontrollieren. Standardmäßig wird es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils in der Nähe der oberen linken Ecke positioniert. Um es woanders zu positionieren, zum Beispiel innerhalb des fieldset irgendwo oder in der Nähe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen wurden der Kürze halber entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit die `<legend>`-Position relativ dazu ist (andererseits würde die `<legend>` relativ zum `<body>` positioniert werden).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Labels jedes Formularelements innerhalb des fieldset gesprochen — aber eine Technik wie die oben beschriebene zu verwenden, ist in Ordnung. Die Legendeninhalte werden auf die gleiche Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie sie jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt sie sich, hinterlässt jedoch eine unschöne Lücke im `<fieldset>`-Rahmen, die nicht einfach zu entfernen ist.

## Ein spezifisches Style-Beispiel

Sehen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylen kann. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie dieses Beispiel mitmachen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den untenstehenden Anweisungen.

### Das HTML

Das HTML ist nur wenig komplexer als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

### Ihre Assets organisieren

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Ressourcen:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben.
3. Eine handgezeichnete Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben.

Ihre Schriftarten benötigen etwas mehr Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum [Webfont-Generator](https://www.fontsquirrel.com/tools/webfont-generator) von fontsquirrel.com.
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte ZIP-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie könnten in Zukunft variieren). Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im selben Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; sehen Sie unseren [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)-Artikel für viel mehr Informationen.

### Der CSS

Jetzt können wir in den CSS-Code für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke nacheinander innerhalb des {{htmlelement("style")}}-Elements hinzu.

#### Gesamtlayout

Zuerst bereiten wir uns darauf vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren und alle grundlegenden Stile, die auf den {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elementen gesetzt sind. Wenn die fontsquirrel-Ausgabe von dem, was wir oben beschrieben haben, unterschiedlich war, können Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit in der Datei `stylesheet.css` finden (Sie müssen die folgenden `@font-face`-Blöcke mit ihnen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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
  background: white url("background.jpg");

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwenden, um das Formular zu gestalten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, einfach positionieren:

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

Die Textfelder benötigen einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Rahmen")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir sie mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, Fokus-Stile zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder fertig sind, müssen wir das Display der ein- und mehrzeiligen Textfelder anpassen, um zu passen, da sie normalerweise nicht gleich aussehen, wenn man die Standardwerte verwendet.

#### Anpassen der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die zwei wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Größen-Design ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld vergrößern oder verkleinern, ist es am besten, Benutzern nicht zu verhindern, ein Textbereich zu vergrößern oder verkleinern, wenn sie dies wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über Browser hinweg konsistenter zu rendern. Einige Browser haben standardmäßig den Wert `auto`, während einige den Wert `scroll` haben. In unserem Fall ist es besser, sicherzustellen, dass alle `auto` verwenden:

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

Das {{HTMLElement("button")}}-Element ist wirklich bequem, um mit CSS zu stylen; Sie können tun, was Sie wollen, sogar mit [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements):

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

![Das endgültige Aussehen und Layout des Formulars nach der Anwendung aller Style- und Anpassarbeiten, wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht so funktioniert, wie Sie es erwartet haben und Sie es mit unserer Version abgleichen möchten, können Sie es auf GitHub finden — sehen Sie es [live laufend](https://mdn.github.io/learning-area/html/forms/postcard-example/) (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen, solange wir Formulare nur mit Textfeldern und Buttons erstellen wollen, ist es einfach, sie mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formular-Widgets umgeht, die in die "schlechten" und "hässlichen" Kategorien fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
