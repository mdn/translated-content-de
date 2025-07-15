---
title: Gestaltung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie Sie Webformulare in HTML erstellen. Nun zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) gestaltet.

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

1995 führte [die HTML 2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formularelemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; daher verließen sich Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formular-Widgets darzustellen.

Selbst mit verfügbarem CSS waren Browser-Hersteller zunächst zögerlich, Formularelemente stilisierbar zu machen, da Benutzer so an das Erscheinungsbild ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt größtenteils stilisierbar, mit einigen wenigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stilisieren

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), außer [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeiliges {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwieriger zu stilisieren

- Checkboxen und Radio-Buttons
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylt.

#### Haben interne Elemente, die nicht ausschließlich mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Features, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt ermöglichen, genau wie bei regulären DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise können der Kalender des Datumsauswahl-Widgets und die Schaltfläche auf `<select>`, die eine Optionsliste beim Anklicken anzeigt, nicht ausschließlich mit CSS gestylt werden.

Die Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) erläutern, wie man diese stylt.

> [!NOTE]
> Einige proprietäre CSS-Pseudo-Elemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu stylen, aber diese sind nicht konsistent über verschiedene Browser hinweg, weshalb sie nicht sehr zuverlässig sind. Diese werden wir später erwähnen.

## Styling einfacher Formular-Widgets

Die in der vorherigen Sektion genannten "einfach zu stylenden" Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) —, die es ermöglichen, basierend auf dem aktuellen Zustand der Benutzeroberfläche zu stylen.

Am Ende dieses Artikels werden wir ein Beispiel durchgehen — aber zuerst einige besondere Aspekte des Formularstylings, die wissenswert sind.

### Schriften und Text

CSS-Schrift- und Textmerkmale können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Allerdings ist das Verhalten der Browser oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren übergeordneten Elementen. Viele Browser verwenden stattdessen das Standarderscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der Wert {{cssxref('inherit')}} der Eigenschaft bewirkt, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft des übergeordneten Elements entspricht; er vererbt den Wert des Elternteils.

Die untenstehenden Screenshots zeigen den Unterschied. Auf der linken Seite ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS zu sehen, mit dem Standard-Schriftstil der Plattform. Auf der rechten Seite sind die gleichen Elemente zu sehen, mit der oben genannten Stilregel angewandt.

![Formularsteuerelemente mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen Serif und andere Sans Serif. Durch Erben sollten sich die Schriften alle zur Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt das Input vom Typ Submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standardeinstellungen unterschieden sich in mehreren Aspekten. Durch das Erben sollten ihre Schriften der Schriftfamilie des Elternteils entsprechen — in diesem Fall der Standard-Serifenschrift des übergeordneten Containers. Alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Stattdessen wird die {{cssxref('font-family#Values', 'font-family: system-ui')}} verwendet. Dies ist ein weiterer Grund, {{HTMLElement("button")}}-Elemente den gleichwertigen Eingabetypen vorzuziehen!

Es gibt viele Diskussionen darüber, ob Formulare mit den systemeigenen Standardstilen oder mit angepassten Stilen, die mit Ihrem Inhalt übereinstimmen, besser aussehen. Diese Entscheidung liegt bei Ihnen, als dem Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder bieten vollständige Unterstützung für jede Eigenschaft, die mit dem CSS-Boxmodell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich Browser jedoch auf die systemeigenen Standardstile, wenn sie diese Widgets anzeigen. Es liegt an Ihnen, zu definieren, wie Sie sie in Ihrem Inhalt einfügen möchten. Wenn Sie das nativen Erscheinungsbild der Widgets beibehalten möchten, werden Sie auf ein kleines Problem stoßen, wenn Sie ihnen eine konsistente Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rahmen, Auffüllung und Abstand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte das Standard-Rendering eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer oben genannten Regel angewendet. Beachten Sie, wie dies es uns ermöglicht, sicherzustellen, dass alle Elemente den gleichen Platz beanspruchen, trotz der standardmäßigen Plattformregeln für jede Art von Widget.

![Box-Modell-Eigenschaften betreffen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was möglicherweise im Screenshot nicht ersichtlich ist, ist, dass sich die Radio- und Checkbox-Steuerelemente zwar gleich aussehen, sie jedoch in dem durch die {{cssxref('width')}}-Eigenschaft vorgegebenen horizontalen Raum von 150px zentriert sind. Andere Browser zentrieren die Widgets möglicherweise nicht, halten sich jedoch an den zugewiesenen Raum.

### Legendenplatzierung

Das {{HTMLElement("legend")}}-Element ist okay zu stylen, aber es kann ein wenig knifflig sein, die Platzierung davon zu kontrollieren. Standardmäßig wird es immer über der oberen Grenze seines übergeordneten {{HTMLElement("fieldset")}} positioniert, in der Nähe der oberen linken Ecke. Um es woanders zu positionieren, beispielsweise irgendwo innerhalb des Fieldsets oder in der Nähe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, haben wir die folgende CSS verwendet (andere Deklarationen zur Übersichtlichkeit entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit die `<legend>` relativ dazu positioniert wird (ansonsten würde die `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil der Beschriftung jedes Formularelements innerhalb des Fieldsets gesprochen — aber die Verwendung einer Technik wie der obigen ist in Ordnung. Der Legendeninhalt wird auf die gleiche Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie sie jedoch mit zum Beispiel `transform: translateY();` positionieren, verschiebt sie sich, hinterlässt jedoch eine hässliche Lücke im `<fieldset>`-Rahmen, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylt. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [siehe hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie dieses Beispiel mitverfolgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den untenstehenden Anweisungen.

### Das HTML

Das HTML ist nur unwesentlich komplexer als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

### Organisation Ihrer Assets

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Ressourcen:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schrift: [Die "Mom's Typewriter"-Schrift von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schrift: [Die "Journal"-Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.

Ihre Schriften benötigen einige weitere Bearbeitungsschritte, bevor Sie beginnen:

1. Gehen Sie zum [Webfont-Generator](https://www.fontsquirrel.com/tools/webfont-generator) von fontsquirrel.com.
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Paket. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; das könnte sich in Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schrift, um die Browser-Kompatibilität zu maximieren; siehe unseren [Webschriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) Artikel für viel mehr Informationen.

### Das CSS

Nun können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke innerhalb des {{htmlelement("style")}}-Elements ein, einen nach dem anderen.

#### Gesamtlayout

Zuerst bereiten wir einige {{cssxref("@font-face")}}-Regeln vor und setzen alle grundlegenden Stile auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente. Wenn der Output von fontsquirrel anders war als oben beschrieben, finden Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css` (Sie müssen die untenstehenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir ein wenig [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, einfach positionieren:

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

Nun können wir beginnen, an den Formularelementen selbst zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}} die richtige Schrift erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Rahmen")}} und {{cssxref("background","Hintergründe")}} und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erlangt, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokus-Stil zu haben, für Benutzbarkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Nachdem unsere Textfelder fertig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, um sicherzustellen, dass sie mit den Standardwerten übereinstimmen.

#### Feinabstimmung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Design ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld ändern, ist es am besten, Benutzern nicht zu verbieten, die Größe eines Textbereichs zu ändern, wenn sie dies wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über verschiedene Browser hinweg konsistenter zu rendern. Einige Browser setzen den Standardwert `auto`, während einige den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass jeder `auto` verwendet:

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

#### Styling des Absende-Buttons

Das {{HTMLElement("button")}}-Element lässt sich mit CSS wirklich bequem stylen; Sie können damit alles machen, sogar [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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
  background: #000;
  color: #fff;
}
```

### Das Endergebnis

Und voilà! Ihr Formular sollte nun so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung all des beschriebenen Stylings und der Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Falls Ihr Beispiel nicht ganz so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — siehe es [live ausgeführt](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, ist es einfach, Formulare mit nur Textfeldern und Buttons zu gestalten, solange wir sie mit CSS gestalten möchten. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formular-Widgets umgeht, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
