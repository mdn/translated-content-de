---
title: Gestaltung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
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
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Gestaltungsgrundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Gestalten von Formularen zu verstehen und einige der grundlegenden Gestaltungstechniken zu erlernen, die Ihnen nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen bei der Gestaltung von Formular-Widgets

### Geschichte

1995 wurden in der [HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularsteuerelemente (auch bekannt als „Formular-Widgets“ oder „Formular-Elemente“) eingeführt. Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; daher haben sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem verlassen, um Formular-Widgets darzustellen.

Selbst mit verfügbarem CSS waren die Browseranbieter zunächst zurückhaltend, Formularelemente stilisierbar zu machen, da die Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formular-Widgets sind jetzt größtenteils stilisierbar, mit ein paar Ausnahmen.

### Arten von Widgets

#### Einfach zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu gestalten

- Kontrollkästchen und Radiobuttons
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweiterte Formular-Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese gestaltet.

#### Mit Interna, die nicht allein mit CSS gestaltet werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalten wie bei regulären DOM-Elementen ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Kalender des Datumsauswahl-Widgets und der Button auf \<select>, der eine Optionsliste anzeigt, wenn er angeklickt wird, nicht allein mit CSS gestaltet werden.

Die Artikel [Erweiterte Formular-Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie z.B. {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu gestalten, jedoch sind diese nicht in allen Browsern konsistent und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die „einfach zu gestaltenden“ Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestaltet werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die eine Gestaltung basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir gehen am Ende dieses Artikels ein Beispiel durch — aber zunächst einige besondere Aspekte der Formular-Gestaltung, die es wert sind, bekannt zu sein.

### Schriftarten und Text

CSS-Schrift- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das standardmäßige Erscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare konsistent mit dem Rest Ihres Inhalts zu gestalten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Wert bewirkt, dass der Eigenschaftswert mit dem berechneten Wert der Eigenschaft des Elternelements übereinstimmt; er erbt den Wert des Elternteils.

Die folgenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS, mit dem standardmäßigen Schriftstil der Plattform. Rechts sind die gleichen Elemente mit unserer oben beschriebenen Stilregel angewendet.

![Formularsteuerungen mit Standard- und vererbten Schriftfamilien. Standardmäßig sind einige Typen Serifenschriftarten und andere Sans-Serif. Durch das Erben sollten sich die Schriftarten aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt input vom Typ submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standards unterschieden sich in mehrfacher Hinsicht. Das Erben sollte ihre Schriftarten auf die Schriftfamilie des Elternteils ändern — in diesem Fall die Standard-Serifenschrift der übergeordneten Container. Sie tun es alle, mit einer seltsamen Ausnahme — `<input type="submit">` erbt nicht vom Elternelement in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente in ihrem äquivalenten Eingabetypen vorzuziehen!

Es gibt viele Debatten darüber, ob Formulare mit den standardmäßigen Stilen des Systems oder angepassten Stilen, die mit Ihrem Inhalt übereinstimmen, besser aussehen. Diese Entscheidung liegt bei Ihnen, dem Designer Ihrer Website oder Ihrer Webanwendung.

### Box-Modell

Alle Textfelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Boxmodell zu tun hat, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Aber auch hier verlassen sich die Browser auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen, zu definieren, wie Sie sie in Ihren Inhalt einblenden möchten. Wenn Sie das native Aussehen und Verhalten der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine konsistente Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Auffüllung und Abstand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im folgenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte zeigt die gleichen Elemente mit der oben beschriebenen Regel angewendet. Beachten Sie, wie auf diese Weise sichergestellt werden kann, dass alle Elemente denselben Platz einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften betreffen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was im Screenshot möglicherweise nicht offensichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerungen immer noch gleich aussehen, aber sie sind in den 150px horizontalem Raum zentriert, der von der {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugeteilten Platz.

### Platzierung der Legende

Das {{HTMLElement("legend")}}-Element kann gut gestaltet werden, aber es kann etwas schwierig sein, seine Platzierung zu kontrollieren. Standardmäßig wird es immer über dem oberen Rand seines übergeordneten {{HTMLElement("fieldset")}}-Elements, nahe der oberen linken Ecke, positioniert. Um es woanders zu positionieren, beispielsweise irgendwo im Feldset oder nahe der unteren linken Ecke, müssen Sie sich auf das Positioning verlassen.

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

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen zur Kürzung entfernt):

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

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Labels jedes Formularelements im Feldsatz gesprochen — aber eine Technik wie die oben ist in Ordnung. Die Inhaltsstoffe der Legende werden in gleicher Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen beim Positionieren Ihrer `<legend>` zu helfen. Wenn Sie es jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt jedoch eine hässliche Lücke im `<fieldset>`-Rand, die nicht einfach zu beseitigen ist.

## Ein spezifisches Gestaltungsbeispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular gestaltet. Wir werden ein schick aussehendes „Postkarten“-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html), und folgen Sie den unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig komplizierter als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur einige zusätzliche IDs und eine Überschrift.

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

Hier beginnt der Spaß! Bevor wir mit dem Coden beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkarten-Hintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Veteran Typewriter"-Schriftart von dafont.com](https://www.dafont.com/veteran-typewriter.font) — laden Sie die ZIP-Datei herunter, entpacken Sie sie und kopieren Sie die TTF-Datei in dasselbe Verzeichnis wie oben.
3. Eine handgeschriebene Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die ZIP-Datei herunter, entpacken Sie sie und kopieren Sie die TTF-Datei in dasselbe Verzeichnis wie oben.

Ihre Schriftarten benötigen noch etwas Verarbeitung, bevor Sie starten:

1. Gehen Sie zum [Transfonter Webfont-Generator](https://transfonter.org/).
2. Drücken Sie die Schaltfläche "Schriften hinzufügen" und laden Sie beide TTF-Dateien hoch.
3. Sobald sie hochgeladen sind, drücken Sie die Schaltfläche "Konvertieren", um ein Webfont-Kit zu generieren.
4. Laden Sie das Kit auf Ihren Computer herunter, indem Sie auf den Link "Download" klicken.
5. Entpacken Sie die bereitgestellte ZIP-Datei.
6. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens, zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie könnten in der Zukunft variieren). Kopieren Sie diese Dateien in ein Verzeichnis namens `fonts` im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browserkompatibilität zu maximieren; siehe unseren [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)-Artikel für viele weitere Informationen.

### Das CSS

Nun können wir uns mit dem CSS für das Beispiel befassen. Fügen Sie alle unten gezeigten Code-Blöcke nacheinander in das bereitgestellte {{htmlelement("style")}}-Element ein.

#### Gesamtes Layout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren und alle grundlegenden Stile auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente setzen.

Suchen Sie die `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css`, und ersetzen Sie die unten stehenden `@font-face`-Blöcke durch diese. Aktualisieren Sie die Pfade zu den Schriftdateien und stellen Sie sicher, dass die `font-family`-Namen von Journal und Veteran Typewriter auf `handwriting` und `typewriter` festgelegt sind. Die Ausgabe von Transfonter kann leicht von unserer abweichen, aber das ist in Ordnung, solange Sie die gewünschten Änderungen vornehmen.

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

Beachten Sie, dass wir etwas [CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) benutzt haben, um das Formular zu layouten. Damit können wir unsere Elemente einfach positionieren, einschließlich des Titels und aller Formularelemente:

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

Nun können wir anfangen, an den Formularelementen selbst zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart haben:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Jetzt, da unsere Textfelder fertig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, um sie anzugleichen, da sie typischerweise nicht gleich aussehen werden, wenn sie standardmäßig verwendet werden.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Elemente gerendert. Das wesentlichste hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Da unser Design ein Design mit fester Größe ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld anpassen, ist es am besten, Benutzern nicht zu verhindern, ein Textfeld zu vergrößern, wenn sie dies möchten. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über alle Browser hinweg konsistenter zu rendern. Einige Browser setzen standardmäßig den Wert `auto`, während einige den Wert `scroll` setzen. In unserem Fall ist es besser, sicherzustellen, dass jeder `auto` verwendet:

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

#### Gestaltung des Absende-Buttons

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu gestalten; Sie können damit machen, was Sie möchten, sogar unter Verwendung von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements):

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

Und voilà! Ihr Formular sollte jetzt ungefähr so aussehen:

![Die endgültige Optik und das Layout des Formulars nach Anwendung aller Stile und Anpassungen wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, finden Sie es auf GitHub — sehen Sie es sich [live an](https://mdn.github.io/learning-area/html/forms/postcard-example/) (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, ist es, solange wir Formulare nur mit Textfeldern und Buttons erstellen möchten, einfach, sie mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Formular-Widgets behandelt, die in die Kategorien „schlecht“ und „hässlich“ fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
