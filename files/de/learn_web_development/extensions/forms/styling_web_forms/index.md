---
title: Styling Web Forms
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir gezeigt, wie Sie Webformulare in HTML erstellen können. Jetzt zeigen wir, wie Sie diese in [CSS](/de/docs/Web/CSS) stylen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen der Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Stylen von Formularen verstehen und einige der
        grundlegenden Styling-Techniken lernen, die nützlich für Sie sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Stylen von Formular-Widgets

### Geschichte

1995 führten [die HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularsteuerungen ein (auch bekannt als "Formular-Widgets" oder "Formularelemente"). Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; in der Zwischenzeit vertrauten die Browser auf das zugrundeliegende Betriebssystem zur Darstellung von Formular-Widgets.

Auch mit verfügbarem CSS waren die Browser-Hersteller zunächst zögerlich, Formularelemente stylbar zu machen, da die Nutzer an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert und Formular-Widgets sind jetzt größtenteils stylbar, mit wenigen Ausnahmen.

### Arten von Widgets

#### Leicht zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Eingeschränkte Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwieriger zu stylen

- Kontrollkästchen und Radiobuttons
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese styled.

#### Mit internen Elementen, die nicht allein mit CSS gestyled werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente zur Erstellung von Dropdown-Widgets, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise können der Kalender des Datumsauswahl-Tools und der Button auf \<select>, der eine Auswahlliste beim Klicken anzeigt, nicht nur mit CSS gestylt werden.

Die Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese styled.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, können solche internen Komponenten stylen, sind jedoch nicht konsistent über die verschiedenen Browser hinweg und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die in der vorherigen Sektion genannten "leicht zu stylenden" Widgets können mit den Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die das Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden in diesem Artikel ein Beispiel durchgehen — aber zuerst sind hier einige spezielle Aspekte des Formularstylings, die es wert sind, bekannt zu sein.

### Schriftarten und Text

CSS-Schrift- und Textfunktionen lassen sich leicht mit jedem Widget verwenden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Allerdings ist das Verhalten der Browser oft inkonsistent. Standardmäßig erben einige Widgets nicht die {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standardaussehen des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu gestalten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert sorgt dafür, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft seines Elternelements entspricht; er erbt den Wert des Elternteils.

Die untenstehenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS mit dem Standard-Schriftstil der Plattform. Rechts sind dieselben Elemente, mit unserer vorherigen Stilregel angewendet.

![Formularsteuerungen mit Standard- und geerbten Schriftarten. Standardmäßig sind einige Typen Serif und andere sind Sans Serif. Vererbung sollte die Schriftarten aller auf die des Elternparagrafen ändern - in diesem Fall ein Paragraph. Seltsamerweise übernimmt das Input vom Typ Submit nicht vom Elternparagrafen.](forms_fontfamily.png)

Die Standards unterschieden sich in verschiedenen Aspekten. Durch Vererbung sollte sich die Schriftart auf die Schriftartfamilie des Elternelements ändern — in diesem Fall die Standard-Serifen-Schrift der Elterncontainer. Sie tun dies auch, mit einer seltsamen Ausnahme — `<input type="submit">` erbt nicht vom Elternparagrafen in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente ihren äquivalenten Input-Typen vorzuziehen!

Es gibt eine große Diskussion darüber, ob Formulare besser mit den Standardstilen des Systems oder mit angepassten Stilen aussehen, die auf Ihren Inhalt abgestimmt sind. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box Grösse

Alle Textfelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Boxmodell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihren Inhalt integrieren möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, stoßen Sie auf einige Schwierigkeiten, wenn Sie ihnen eine konsistente Größe geben wollen.

**Dies liegt daran, dass jedes Widget eigene Regeln für Rand, Abstand und Umrandung hat.** Um verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte zeigt dagegen dieselben Elemente mit der oben genannten Regel angewendet. Beachten Sie, wie dies uns ermöglicht, sicherzustellen, dass alle Elemente die gleiche Menge an Platz einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Box-Modell-Eigenschaften beeinflussen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was möglicherweise nicht über den Screenshot offensichtlich wird, ist, dass die Radio- und Kontrollkästchen weiterhin gleich aussehen, aber sie sind im 150px breiten horizontalen Bereich zentriert, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Platz.

### Legende-Positionierung

Das {{HTMLElement("legend")}}-Element ist einfach zu stylen, aber es kann etwas knifflig sein, seine Platzierung zu steuern. Standardmäßig ist es immer über der oberen Grenze seines übergeordneten {{HTMLElement("fieldset")}}-Elements positioniert, in der Nähe der oberen linken Ecke. Um es anderswo zu platzieren, z. B. irgendwo im Feldset oder in der Nähe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie folgendes Beispiel:

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

Um die Legende auf diese Weise zu positionieren, haben wir die folgende CSS verwendet (andere Deklarationen entfernt der Kürze halber):

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

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Labels für jedes Formularelement innerhalb des Feldsets gesprochen — aber die Verwendung einer Technik wie der obigen ist in Ordnung. Der Inhalt der Legende wird weiterhin auf die gleiche Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie sie jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt sie sich, hinterlässt jedoch eine unschöne Lücke in der `<fieldset>`-Umrandung, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Sehen wir uns ein konkretes Beispiel dafür an, wie man ein HTML-Formular stylt. Wir werden ein schick aussehendes Kontaktformular im "Postkarten"-Stil erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie dieses Beispiel nachvollziehen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den nachstehenden Anweisungen.

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

### Organisieren Ihrer Assets

Jetzt beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Veteran Typewriter"-Schriftart von dafont.com](https://www.dafont.com/veteran-typewriter.font) — laden Sie die ZIP-Datei herunter, extrahieren Sie sie und kopieren Sie die TTF-Datei in dasselbe Verzeichnis wie oben.
3. Eine von Hand gezeichnete Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die ZIP-Datei herunter, extrahieren Sie sie und kopieren Sie die TTF-Datei in dasselbe Verzeichnis wie oben.

Ihre Schriftarten benötigen noch einige Bearbeitung, bevor Sie beginnen:

1. Gehen Sie zum [Transfonter Webfont Generator](https://transfonter.org/).
2. Drücken Sie den Button "Add fonts" und laden Sie beide TTF-Dateien hoch.
3. Sobald sie hochgeladen sind, drücken Sie den Button "Convert", um ein Webfont-Paket zu generieren.
4. Laden Sie das Paket mit dem Link "Download" auf Ihren Computer herunter.
5. Entpacken Sie die bereitgestellte Zip-Datei.
6. Im Inhalt des entpackten Archivs finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; diese könnten sich in Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens `fonts` im selben Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schrift, um die Browser-Kompatibilität zu maximieren; lesen Sie unseren Artikel über [Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für viele weitere Informationen.

### Das CSS

Nun können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke innerhalb des bereitgestellten {{htmlelement("style")}}-Elements nacheinander hinzu.

#### Allgemeines Layout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren und alle grundlegenden Stile, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente gesetzt sind.

Finden Sie die `@font-face`-Blöcke in Ihrer heruntergeladenen Webfont-Kit in der Datei `stylesheet.css` und ersetzen Sie die untenstehenden `@font-face`-Blöcke durch diese. Aktualisieren Sie die Pfade zu den Schriftdateien und stellen Sie sicher, dass die Namen der Schriftfamilien Journal und Veteran Typewriter auf `handwriting` und `typewriter` gesetzt sind. Ihr Transfonter-Ergebnis kann leicht unterschiedlich ausfallen, aber das ist in Ordnung, solange Sie die gewünschten Änderungen vornehmen.

```css
@font-face {
  font-family: "handwriting";
  src:
    url("fonts/Journal.woff2") format("woff2"),
    url("fonts/Journal.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "typewriter";
  src:
    url("fonts/VeteranTypewriter.woff2") format("woff2"),
    url("fonts/VeteranTypewriter.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
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
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) verwenden, um das Formular zu layouten. Damit können wir leicht unsere Elemente positionieren, einschließlich des Titels und aller Formularelemente:

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

Nun können wir anfangen, an den Formularelementen selbst zu arbeiten. Zuerst, stellen wir sicher, dass die {{HTMLElement("label")}}s mit der richtigen Schriftart versehen sind:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder benötigen einige gemeinsame Regeln. Mit anderen Worten, wir entfernen deren {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}}, und definieren erneut deren {{cssxref("padding")}} und {{cssxref("margin")}}:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokus-Stil zu haben, für die Benutzerfreundlichkeit und Tastaturbarrierefreiheit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder komplett sind, müssen wir die Darstellung der ein- und mehrzeiligen Textfelder anpassen, da sie standardmäßig nicht gleich aussehen werden.

#### Anpassung der Textareale

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}} und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Desig wird und wir die Eigenschaft `resize` verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld vergrößern, ist es besser, Benutzer nicht daran zu hindern, die Größe eines Textbereichs zu ändern, wenn sie dies wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld gleichmäßiger über Browser hinweg zu rendern. Einige Browser haben standardmäßig den Wert `auto`, während andere den Wert `scroll` verwenden. In unserem Fall ist es besser, sicher zu sein, dass alle `auto` verwenden:

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

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu stylen; Sie können damit alles tun, sogar [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwenden:

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

Und voilà! Ihr Formular sollte jetzt in etwa so aussehen:

![Das finale Aussehen und Layout des Formulars nach dem Anwenden aller Stylings und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, finden Sie es auf GitHub — sehen Sie es [live in Aktion](https://mdn.github.io/learning-area/html/forms/postcard-example/) (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare mit nur Textfeldern und Buttons erstellen möchten, ist es einfach, sie mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formular-Widgets umgeht, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
