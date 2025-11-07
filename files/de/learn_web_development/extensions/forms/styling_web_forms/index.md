---
title: Gestaltung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Nun zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) gestaltet.

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
        Zu verstehen, welche Probleme bei der Gestaltung von Formularen auftreten, und einige grundlegende Gestaltungstechniken zu lernen, die für Sie nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen bei der Gestaltung von Formular-Widgets

### Geschichte

Im Jahr 1995 führte die [HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formularelemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und wurde von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formular-Widgets darzustellen.

Selbst mit verfügbarem CSS waren Browser-Anbieter zunächst zögerlich, die Formularelemente stylisierbar zu machen, weil die Benutzer an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt meistens stylisierbar, mit wenigen Ausnahmen.

### Arten von Widgets

#### Einfach zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ Text, URL, E-Mail), außer [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Schaltflächen (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu gestalten

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Fortgeschrittene Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese gestaltet.

#### Mit internen Elementen, die nicht allein mit CSS gestaltet werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die die vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Kalender des Datumsauswahlfensters und die Schaltfläche auf `<select>`, die eine Optionsliste beim Klicken anzeigt, nicht nur mit CSS gestaltet werden.

Die Artikel [Fortgeschrittene Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu gestalten, aber diese sind nicht konsistent über alle Browser hinweg, daher sind sie nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Einfaches Styling von Formular-Widgets

Die "einfach zu gestaltenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestaltet werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die eine Gestaltung basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — zuerst einige spezielle Aspekte des Formularstylings, die es zu beachten gilt.

### Schriftarten und Text

CSS-Schrift- und -Textmerkmale können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Allerdings ist das Verhalten der Browser oft inkonsistent. Standardmäßig erben einige Widgets nicht von ihren übergeordneten Elementen {{cssxref("font-family")}} und {{cssxref("font-size")}}. Viele Browser verwenden stattdessen das Standardaussehen des Systems. Um die Darstellung Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu gestalten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der Wert {{cssxref('inherit')}} für eine Eigenschaft bedeutet, dass ihr Wert den berechneten Wert der Eigenschaft ihres übergeordneten Elements übernimmt; der Wert wird also vom übergeordneten Element geerbt.

Die folgenden Screenshots zeigen den Unterschied. Auf der linken Seite ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS mit dem Standard-Schriftstil der Plattform. Auf der rechten Seite befinden sich die gleichen Elemente mit unserer obigen Stylerule angewendet.

![Formular-Steuerelemente mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen serifenlos und andere sind mit Serifenschrift. Durch Vererbung sollten sich alle Schriftarten auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Seltsamerweise erbt der Input des Typs submit nicht vom Eltern-Absatz.](forms_fontfamily.png)

Die Standardeinstellungen unterschieden sich in mehreren Punkten. Durch die Vererbung sollten sich ihre Schriftarten auf die der Schriftfamilie des übergeordneten Elements ändern — in diesem Fall die Standardschriftart mit Serifen des Elterncontainers. Alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom Elternabsatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein zusätzlicher Grund, `<button>`-Elemente anstelle ihrer entsprechenden Input-Typen zu verwenden!

Es gibt viele Diskussionen darüber, ob Formulare besser aussehen, wenn sie mit den System-Standardstilen oder mit benutzerdefinierten Stilen gestaltet werden, die sich Ihrem Inhalt anpassen. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die sich auf das CSS-Boxmodell bezieht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Auch hier verlassen sich die Browser beim Anzeigen dieser Widgets allerdings auf die Standardstile des Systems. Es liegt an Ihnen zu definieren, wie Sie sie in Ihren Inhalt einfügen möchten. Wenn Sie das native Aussehen und Verhalten der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine konsistente Größe geben möchten.

**Das liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Abstände und Rand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die Eigenschaft {{cssxref("box-sizing")}} zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im folgenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte zeigt dieselben Elemente mit der oben genannten Regel angewendet. Beachten Sie, wie Sie damit sicherstellen können, dass alle Elemente trotz der Standardregeln der Plattform für jede Art von Widget den gleichen Platz einnehmen.

![Box-Modell-Eigenschaften betreffen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was möglicherweise nicht über den Screenshot ersichtlich ist, ist, dass die Radio- und Checkbox-Steuerelemente immer noch gleich aussehen, aber sie sind in den 150px horizontalen Raum zentriert, der durch die Eigenschaft {{cssxref('width')}} bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Platz.

### Legendenplatzierung

Das {{HTMLElement("legend")}}-Element kann durchaus gestaltet werden, aber es kann ein wenig knifflig sein, seine Platzierung zu steuern. Standardmäßig ist es immer über der oberen Grenze seines übergeordneten {{HTMLElement("fieldset")}}, nahe der oberen linken Ecke, positioniert. Um es an einer anderen Stelle zu positionieren, zum Beispiel irgendwo innerhalb des fieldsets oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie das folgende Beispiel:

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

Um die Legende auf diese Weise zu positionieren, haben wir folgendes CSS verwendet (andere Deklarationen aus Gründen der Kürze entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit das `<legend>` relativ dazu positioniert ist (ansonsten würde das `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Labels jedes Formularelements innerhalb des Fieldsets gesprochen — aber die Verwendung einer Technik wie der obigen ist in Ordnung. Die Inhalte der Legende werden immer noch auf die gleiche Weise gesprochen; es hat sich nur die visuelle Position geändert.

> [!NOTE]
> Sie könnten auch die Eigenschaft {{cssxref("transform")}} verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt jedoch eine unschöne Lücke in der `<fieldset>`-Grenze, die nicht leicht zu beseitigen ist.

## Ein konkretes Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular gestaltet. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den nachstehenden Anweisungen.

### Das HTML

Das HTML ist nur etwas umfangreicher als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Fügen Sie den obigen Code in den Body Ihres HTML-Dokuments ein.

### Organisation Ihrer Assets

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre HTML-Datei.
2. Eine Schreibmaschinenschrift: [Die "Mom's Typewriter"-Schrift von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schrift: [Die "Journal"-Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriften benötigen noch weitere Bearbeitung, bevor Sie beginnen:

1. Gehen Sie zum [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) von fontsquirrel.com.
2. Laden Sie mit dem Formular beide Schriftdateien hoch und erstellen Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; diese könnten sich in Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens "fonts", im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schrift, um die Browser-Kompatibilität zu maximieren; lesen Sie unseren Artikel zu [Webschriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für weitere Informationen.

### Das CSS

Jetzt können wir uns dem CSS für das Beispiel widmen. Fügen Sie alle unten gezeigten Codeblöcke innerhalb des {{htmlelement("style")}}-Elements nacheinander hinzu.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente gesetzt sind, definieren. Wenn die fontsquirrel-Ausgabe anders war als das, was wir oben beschrieben haben, können Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit in der `stylesheet.css`-Datei finden (Sie müssen die unten stehenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir ein wenig [CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) verwendet haben, um das Formular layouten zu können. Auf diese Weise können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, leicht platzieren:

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

Jetzt können wir anfangen, an den Formularelementen selbst zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder benötigen einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokusstil zu haben, aus Gründen der Benutzerfreundlichkeit und der Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, damit sie zusammenpassen, da sie normalerweise nicht gleich aussehen würden, wenn sie als Standard verwendet werden.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die Eigenschaften {{cssxref("resize")}} und {{cssxref("overflow")}}. Während unser Design ein festes Design ist und wir die `resize`-Eigenschaft verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu vergrößern, ist es am besten, Benutzer ein Textfeld vergrößern zu lassen, wenn sie es wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld konsistenter über Browser hinweg darzustellen. Einige Browser haben standardmäßig den Wert `auto`, während einige standardmäßig den Wert `scroll` haben. In unserem Fall ist es besser, sicher zu sein, dass jeder `auto` verwendet:

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

#### Styling der Sende-Schaltfläche

Das {{HTMLElement("button")}}-Element ist sehr bequem mit CSS zu gestalten; Sie können tun, was Sie wollen, sogar unter Verwendung von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements):

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

![Das endgültige Aussehen und Layout des Formulars nach der Anwendung aller oben beschriebenen Stile und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert hat, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es [live laufen](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare nur mit Textfeldern und Schaltflächen erstellen möchten, ist es einfach, sie mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) sehen wir, wie man Formularelemente handhabt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
