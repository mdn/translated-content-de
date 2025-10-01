---
title: Gestaltung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
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
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Die Herausforderungen bei der Gestaltung von Formularen zu verstehen und einige der grundlegenden Techniken zu erlernen, die Ihnen nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen bei der Gestaltung von Formular-Widgets

### Geschichte

Im Jahr 1995 führte [die HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formularelemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und erst Jahre später von den meisten Browsern unterstützt. Daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formularelemente darzustellen.

Selbst mit verfügbarer CSS-Unterstützung waren Browseranbieter zunächst zögerlich, Formularelemente stilisierbar zu machen, da die Benutzer an die Aussehen ihrer jeweiligen Browser gewöhnt waren. Doch die Dinge haben sich geändert, und Formularelemente sind jetzt größtenteils stilisierbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ Text, URL, E-Mail), außer [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Schaltflächen (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwieriger zu gestalten

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese gestaltet.

#### Interne Bestandteile können nicht allein mit CSS gestaltet werden

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Sammlung von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und ihren Inhalten ermöglichen, genau wie bei regulären DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise können der Kalender des Datumsauswahlers und die Schaltfläche auf `<select>`, die beim Klicken eine Optionsliste anzeigt, nicht nur mit CSS gestylt werden.

Die Artikel [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente wie {{cssxref('::-moz-range-track')}} sind in der Lage, solche internen Komponenten zu gestalten, jedoch sind diese nicht konsistent über alle Browser hinweg, weshalb sie nicht sehr zuverlässig sind. Wir werden diese später erwähnen.

## Gestaltung einfacher Formular-Widgets

Die in der vorherigen Sektion genannten "einfach zu gestaltenden" Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) gestaltet werden. Es gibt auch spezielle Selektoren — [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) —, die eine Gestaltung basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Am Ende dieses Artikels werden wir ein Beispiel durchgehen — aber zuerst sind hier einige spezielle Aspekte der Formulargestaltung, die es zu beachten gilt.

### Schriftarten und Text

CSS-Schrift- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren übergeordneten Elementen. Viele Browser verwenden stattdessen das standardmäßige Erscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts einheitlich zu gestalten, können Sie die folgenden Regeln in Ihr Stylesheet aufnehmen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert bewirkt, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft des übergeordneten Elements entspricht; er übernimmt den Wert des übergeordneten Elements.

Die untenstehenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS zu sehen, wobei der Standardschriftstil der Plattform verwendet wird. Rechts sind die gleichen Elemente mit unserer obigen Stilregel angewendet.

![Formularelemente mit Standard- und geerbten Schriftarten. Standardmäßig sind einige Typen Serif und andere sans Serif. Das Erben sollte die Schriftarten aller auf die des übergeordneten Schriftartsets ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt der Input vom Typ Submit nicht vom übergeordneten Absatz.](forms_fontfamily.png)

Die Standards unterschieden sich in mehreren Aspekten. Das Erben sollte deren Schriftarten auf die des übergeordneten Schriftartsets ändern — in diesem Fall das standardmäßige Serif-Schriftartset des übergeordneten Containers. Alle tun dies, außer eine merkwürdige Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Vielmehr verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente gegenüber ihren entsprechenden Input-Typen zu verwenden!

Es gibt viel Diskussion darüber, ob Formulare mit den standardmäßigen Systemstilen oder mit angepassten Stilen, die auf Ihren Inhalt abgestimmt sind, besser aussehen. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die sich auf das CSS-Boxmodell bezieht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich jedoch die Browser auf die standardmäßigen Systemstile beim Anzeigen dieser Widgets. Es liegt an Ihnen zu definieren, wie Sie diese in Ihre Inhalte integrieren möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, stoßen Sie auf einige Schwierigkeiten, wenn Sie ihnen eine einheitliche Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rahmen, Abstände und Ränder hat.** Um verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft in Verbindung mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im untenstehenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer oben angewandten Regel. Beachten Sie, wie dies uns ermöglicht sicherzustellen, dass alle Elemente den gleichen Raum einnehmen, trotz der standardmäßigen Plattformregeln für jedes Widget.

![Boxmodell-Eigenschaften wirken sich auf die meisten Eingabetypen aus.](boxmodel_formcontrols1.png)

Was im Screenshot möglicherweise nicht ersichtlich ist, ist, dass die Radio- und Kontrollkästchensteuerungen immer noch gleich aussehen, aber in den 150px des durch die {{cssxref('width')}}-Eigenschaft bereitgestellten horizontalen Raums zentriert sind. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Raum.

### Platzierung der Legende

Das {{HTMLElement("legend")}}-Element ist okay zu gestalten, aber es kann etwas knifflig sein, seine Platzierung zu kontrollieren. Standardmäßig ist es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils positioniert, nahe der oberen linken Ecke. Um es anderswo zu positionieren, zum Beispiel irgendwo im Feldset oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

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

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen wurden zur Klarheit entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, sodass das `<legend>` relativ zu ihm positioniert wird (ansonsten würde das `<legend>` relativ zum `<body>` positioniert werden).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil der Beschriftung jedes Formularelements innerhalb des Feldsatzes gesprochen — aber eine Technik wie die oben gezeigte ist in Ordnung. Der Inhalt der Legende wird auf die gleiche Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihres `<legend>` zu helfen. Wenn Sie es jedoch zum Beispiel mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt aber eine unschöne Lücke im `<fieldset>`-Rahmen, die nicht einfach zu beseitigen ist.

## Ein spezifisches Stilbeispiel

Schauen wir uns ein konkretes Beispiel an, wie ein HTML-Formular gestaltet werden kann. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den untenstehenden Anweisungen.

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

Fügen Sie den obigen Code in den Body Ihres HTML-Dokuments ein.

### Organisieren Ihrer Assets

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, brauchen wir drei zusätzliche Assets:

1. [Den Hintergrund der Postkarte](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter" Schrift von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben.
3. Eine handgezeichnete Schriftart: [Die "Journal" Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben.

Ihre Schriftarten benötigen noch etwas Verarbeitung, bevor Sie beginnen können:

1. Gehen Sie zum fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie das bereitgestellte Zip-File.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; dies könnte sich in Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Web-Schriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) Artikel für viel mehr Informationen.

### Das CSS

Jetzt können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke in das {{htmlelement("style")}}-Element ein, einen nach dem anderen.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile festlegen, die auf die Elemente {{HTMLElement("body")}} und {{HTMLElement("form")}} angewendet werden. Wenn das fontsquirrel-Output anders als oben beschrieben war, können Sie die richtigen `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit in der Datei `stylesheet.css` finden (Sie müssen die untenstehenden `@font-face`-Blöcke mit ihnen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich der Überschrift und aller Formularelemente, einfach positionieren:

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

#### Beschriftungen und Steuerelemente

Jetzt können wir mit der Arbeit an den Formularelementen selbst beginnen. Zuerst stellen wir sicher, dass den {{HTMLElement("label")}}s die richtige Schriftart zugewiesen wird:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige gemeinsame Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Rahmen")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, den Fokus zu stylen, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Da unsere Textfelder nun vollständig sind, müssen wir das Erscheinungsbild der ein- und mehrzeiligen Textfelder anpassen, damit sie übereinstimmen, da sie typischerweise nicht gleich aussehen, wenn die Standardeinstellungen verwendet werden.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die zwei wichtigen Dinge hier sind die {{cssxref("resize")}}- und die {{cssxref("overflow")}}-Eigenschaft. Während unser Design ein festes Design ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld ändern, ist es am besten, Benutzer nicht daran zu hindern, die Größe eines textbereichs anzupassen, wenn sie dies wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld konsistenter über Browser hinweg darzustellen. Einige Browser verwenden standardmäßig den Wert `auto`, während einige den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass alle `auto` verwenden:

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

#### Gestaltung der Absenden-Schaltfläche

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu gestalten; Sie können damit tun, was Sie wollen, sogar Pseudoelemente verwenden:

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

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller Stylings und Anpassungen, wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz wie erwartet funktioniert und Sie es mit unserer Version abgleichen möchten, können Sie es auf GitHub finden — siehe es [live laufend](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, ist es, solange wir Formulare nur mit Textfeldern und Schaltflächen erstellen möchten, einfach, sie mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie mit Formular-Widgets umgegangen wird, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
