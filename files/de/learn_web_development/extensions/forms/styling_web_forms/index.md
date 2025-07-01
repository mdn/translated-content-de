---
title: Styling von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) stylt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Styling von Formularen zu verstehen und einige grundlegende Styling-Techniken zu erlernen, die für Sie nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

1995 führte [die HTML 2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente ein (auch bekannt als "Formular-Widgets" oder "Formularelemente"). Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formular-Widgets zu rendern.

Selbst bei verfügbarer CSS-Unterstützung waren Browseranbieter zunächst zurückhaltend, Formularelemente stylbar zu machen, da die Benutzer so an das Erscheinungsbild ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formular-Widgets sind jetzt größtenteils stylbar, mit einigen Ausnahmen.

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

- Kontrollkästchen und Radio-Buttons
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylt.

#### Haben Interna, die nicht nur mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Selektelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Features, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte wie normale DOM-Elemente ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Datumsauswahlkalender und der Button auf `<select>`, der eine Optionsliste anzeigt, wenn darauf geklickt wird, nicht nur mit CSS gestylt werden.

Die Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese stylt.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, können solche internen Komponenten stylen, aber diese sind nicht konsistent über alle Browser hinweg und daher nicht sehr verlässlich. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die "einfach zu stylenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die das Styling basierend auf dem aktuellen Zustand der UI ermöglichen.

Am Ende dieses Artikels werden wir ein Beispiel durchgehen — aber zunächst gibt es einige besondere Aspekte des Formular-Stylings, die es wert sind, darüber Bescheid zu wissen.

### Schriften und Text

CSS-Schrift- und Texteigenschaften können leicht mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch oft inkonsistent. Standardmäßig übernehmen einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standard-Erscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert führt dazu, dass der Eigenschaftswert mit dem berechneten Wert der Eigenschaft seines Elternelements übereinstimmt und den Wert des Elternteils erbt.

Die Screenshots unten zeigen den Unterschied. Links ist das Standardrendering eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS zu sehen, mit dem Standard-Schriftstil der Plattform. Rechts sind die gleichen Elemente, mit unserer obigen Stilregel angewendet.

![Formularsteuerelemente mit Standard- und geerbten Schriftarten. Standardmäßig sind einige Typen serif und andere sind sans serif. Das Erben sollte die Schriften aller auf die Schriftfamilie der Eltern ändern - in diesem Fall einen Absatz. Seltsamerweise erbt input des Typs submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standardeinstellungen unterschieden sich in verschiedener Hinsicht. Das Erben sollte ihre Schriften auf die des Eltern-Containers ändern — in diesem Fall die Standard-Serif-Schrift des Containers. Alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom Elternabsatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente gegenüber ihren äquivalenten Eingabetypen zu verwenden!

Es gibt viele Debatten darüber, ob Formulare mit den Standardstilen des Systems oder mit angepassten Stilen, die auf Ihre Inhalte abgestimmt sind, besser aussehen. Diese Entscheidung liegt bei Ihnen als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die sich auf das CSS-Boxmodell bezieht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich jedoch die Browser auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihre Inhalte einfügen möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, stoßen Sie auf einige Schwierigkeiten, wenn Sie ihnen eine konsistente Größe geben möchten.

**Das liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Füllung und Abstand hat.** Um denselben verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte das Standardrendering eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt dieselben Elemente mit unserer obigen Regel angewendet. Beachten Sie, wie dies gewährleistet, dass alle Elemente die gleiche Menge an Platz einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften betreffen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was auf dem Screenshot möglicherweise nicht erkennbar ist, ist, dass die Radio- und Kontrollkästchenelemente immer noch gleich aussehen, aber sie sind in den 150px horizontalen Raum zentriert, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Raum.

### Legend-Platzierung

Das {{HTMLElement("legend")}}-Element kann gut gestylt werden, aber es kann etwas knifflig sein, seine Platzierung zu kontrollieren. Standardmäßig wird es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils, in der Nähe der oberen linken Ecke, positioniert. Um es irgendwo anders zu positionieren, zum Beispiel innerhalb des Fieldsets oder in der Nähe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen wurden der Übersichtlichkeit halber entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert sein, damit das `<legend>` relativ dazu positioniert wird (sonst würde das `<legend>` relativ zum `<body>` positioniert werden).

Das {{HTMLElement("legend")}}-Element ist für die Barrierefreiheit sehr wichtig — es wird von unterstützenden Technologien als Teil der Beschriftung jedes Formularelements im Fieldset gesprochen — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Die Inhalte der Legende werden auf dieselbe Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihres `<legend>` zu helfen. Wenn Sie es jedoch mit einem Beispiel wie `transform: translateY();` positionieren, wird es verschoben, lässt jedoch eine unschöne Lücke in der `<fieldset>`-Grenze, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylet. Wir erstellen ein schick aussehendes "Postkarten"-Kontaktformular; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html), und befolgen Sie die unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig komplexer als das Beispiel, das wir in [Ihrem ersten Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

### Organisieren Ihrer Ressourcen

Hier beginnt der Spaß! Bevor wir mit dem Coding beginnen, benötigen wir drei zusätzliche Ressourcen:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre HTML-Datei.
2. Eine Schreibmaschinenschrift: [Die "Mom's Typewriter"-Schrift von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.
3. Eine handschriftliche Schrift: [Die "Journal"-Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.

Ihre Schriften benötigen noch etwas Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum [Webfont Generator von fontsquirrel.com](https://www.fontsquirrel.com/tools/webfont-generator).
2. Verwenden Sie das Formular, um beide Schriftdateien hochzuladen und ein Webfont-Kit zu generieren. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt der Erstellung zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie können sich in Zukunft ändern.) Kopieren Sie diese Dateien in ein Verzeichnis namens "fonts" im selben Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren Artikel [Web Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für viele weitere Informationen.

### Das CSS

Jetzt können wir uns dem CSS für das Beispiel widmen. Fügen Sie alle unten gezeigten Codeblöcke eines nach dem anderen in das {{htmlelement("style")}}-Element ein.

#### Gesamtlayout

Zuerst bereiten wir vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile definieren, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente gesetzt werden. Wenn die Ausgabe von fontsquirrel von dem abweicht, was wir oben beschrieben haben, können Sie die richtigen `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit in der Datei `stylesheet.css` finden (Sie müssen die untenstehenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu gestalten. Dadurch können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, leicht positionieren:

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

Jetzt können wir beginnen, an den Formularelementen selbst zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder benötigen einige gemeinsame Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}} und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Jetzt, da unsere Textfelder fertig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, um sie abzugleichen, da sie mit den Standardeinstellungen normalerweise nicht gleich aussehen.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Seitendesign ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld ändern, ist es besser, Benutzer nicht daran zu hindern, die Größe eines Textbereichs anzupassen, wenn sie es wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über Browser hinweg konsistenter zu rendern. Einige Browser verwenden standardmäßig den Wert `auto`, während einige den Wert `scroll` standardmäßig verwenden. In unserem Fall ist es besser sicherzustellen, dass alle `auto` verwenden:

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

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu stylen; Sie können damit machen, was Sie wollen, sogar [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller Styleanpassungen wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz wie erwartet funktioniert und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es [live in Aktion](https://mdn.github.io/learning-area/html/forms/postcard-example/) (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihr Können

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Styling-Grundlagen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Styling_basics).

## Zusammenfassung

Wie Sie sehen können, ist es einfach, Formulare zu stylen, solange wir nur Textfelder und Buttons verwenden. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Formularelemente behandelt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
