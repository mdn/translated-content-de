---
title: Styling von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) gestaltet.

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
        Die Probleme bei der Gestaltung von Formularen zu verstehen und einige der
        grundlegenden Styling-Techniken zu erlernen, die nützlich für Sie sind.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Stylen von Formular-Widgets

### Geschichte

Im Jahr 1995 führte [die HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch "Formular-Widgets" oder "Formularelemente" genannt) ein. Aber CSS wurde erst Ende 1996 veröffentlicht und erst Jahre später von den meisten Browsern unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formularelemente darzustellen.

Selbst mit verfügbaren CSS waren Browser-Anbieter zunächst nicht bereit, Formularelemente stilisierbar zu machen, da Benutzer an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formular-Widgets sind jetzt größtenteils stilisierbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Leicht zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), außer für [`<input type="search">`](/de/docs/Web/HTML/Element/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Schaltflächen (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen ("Checkboxes") und Radiobuttons
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

Der Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie diese gestylt werden.

#### Haben interne Teile, die nicht allein mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, darunter {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise können der Datumsauswahlkalender und die Schaltfläche auf `<select>`, die eine Optionsliste anzeigt, wenn sie angeklickt wird, nicht allein mit CSS gestylt werden.

Die Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie diese gestylt werden.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente wie {{cssxref('::-moz-range-track')}} können solche internen Komponenten stilisieren, sind jedoch nicht konsistent über die Browser hinweg und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die im vorherigen Abschnitt als "leicht zu stylen" bezeichneten Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) —, die das Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — doch zuerst sind hier einige besondere Aspekte der Formularstilierung, die es wert sind, bekannt zu sein.

### Schriftarten und Text

CSS-Schriftarten und Textmerkmale können leicht mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formularelementen verwenden). Browser-Verhalten ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standardsystem-Aussehen. Um das Erscheinungsbild Ihrer Formulare konsistent mit dem Rest Ihres Inhalts zu gestalten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert bewirkt, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft des Elternelements entspricht; der Wert des Elternteils wird geerbt.

Die untenstehenden Screenshots zeigen den Unterschied. Links ist das Standard-Rendering eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS zu sehen, wobei die standardmäßige Schriftart des Plattformdesigns verwendet wird. Rechts sind die gleichen Elemente zu sehen, auf die unsere obige Stilregel angewendet wurde.

![Formularsteuerungen mit standardmäßigen und geerbten Schriftfamilien. Standardmäßig sind einige Typen serif und andere sans serif. Das Erben sollte die Schriften aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt der Eingabetyp Submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standardwerte unterschieden sich auf verschiedene Weise. Das Erben sollte ihre Schriften auf die Schriftfamilie des Elternteils ändern — in diesem Fall die Standard-Serif-Schrift des Elterncontainers. Sie tun dies alle, mit einer seltsamen Ausnahme — `<input type="submit">` erbt nicht vom Elternabsatz in Chrome. Stattdessen nutzt es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente gegenüber ihren äquivalenten Eingabetypen zu verwenden!

Es gibt viele Debatten darüber, ob Formulare besser mit den standardmäßigen Systemstilen oder mit benutzerdefinierten Stilen aussehen, die auf Ihre Inhalte abgestimmt sind. Diese Entscheidung liegt bei Ihnen als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die sich auf das CSS-Boxmodell bezieht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich Browser jedoch auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen, zu definieren, wie Sie diese in Ihren Inhalten einfügen möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, haben Sie etwas Schwierigkeiten, wenn Sie ihnen eine konsistente Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Polsterung und Rand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte das Standard-Rendering eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit angewandter obiger Regel. Beachten Sie, wie dies uns ermöglicht, sicherzustellen, dass alle Elemente den gleichen Raum einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Box-Modell-Eigenschaften beeinflussen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was auf dem Screenshot möglicherweise nicht sichtbar ist, ist dass die Radio- und Kontrollkästchen-Steuerungen immer noch gleich aussehen, aber sie sind in den 150px horizontalen Raum zentriert, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, halten sich jedoch an den zugeteilten Raum.

### Legend-Positionierung

Das {{HTMLElement("legend")}}-Element ist in Ordnung zu stylen, aber es kann ein wenig knifflig sein, die Platzierung davon zu kontrollieren. Standardmäßig ist es immer über dem oberen Rand seines {{HTMLElement("fieldset")}}-Elternteils positioniert, nahe der oberen linken Ecke. Um es woanders zu positionieren, zum Beispiel irgendwo innerhalb des fieldsets, oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie folgendes Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen wurden zur Kürze entfernt):

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

Das `<fieldset>` muss auch positioniert werden, damit das `<legend>` relativ zu ihm positioniert wird (ansonsten würde das `<legend>` relativ zum `<body>` positioniert werden).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Zugänglichkeit — es wird von unterstützenden Technologien als Teil des Labels für jedes Formularelement innerhalb des Fieldsets vorgelesen — aber die Verwendung einer Technik wie der obigen ist in Ordnung. Die Inhalte der Legende werden immer noch auf die gleiche Weise vorgelesen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihre `<legend>`-Positionierung zu unterstützen. Wenn Sie sie jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt sie sich, hinterlässt aber eine unschöne Lücke im `<fieldset>`-Rand, die nicht einfach zu beseitigen ist.

## Ein konkretes Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylt. Wir werden ein schickes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den unten stehenden Anweisungen.

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

Fügen Sie den obigen Code in den Body Ihres HTML ein.

### Organisieren Ihrer Assets

Hier beginnt der Spaß! Bevor wir mit dem Codieren anfangen, benötigen wir drei zusätzliche Ressourcen:

1. [Der Postkarten-Hintergrund](background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre arbeitende HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.
3. Eine handgeschriebene Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen etwas mehr Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum fontsquirrel.com [Webfont-Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftartdateien hoch und erstellen Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entzippen Sie die bereitgestellte Zip-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie können zukünftig variieren.) Kopieren Sie diese Dateien in ein Verzeichnis namens fonts im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)-Artikel für viele weitere Informationen.

### Das CSS

Nun können wir uns in das CSS für das Beispiel vertiefen. Fügen Sie alle unten gezeigten Codeblöcke in das {{htmlelement("style")}}-Element ein, einen nach dem anderen.

#### Gesamt-Layout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren und alle grundlegenden Stile festlegen, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente angewendet werden. Wenn die fontsquirrel-Ausgabe anders war, als wir oben beschrieben haben, können Sie die richtigen `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit in der Datei `stylesheet.css` finden (Sie müssen die untenstehenden `@font-face`-Blöcke mit ihnen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grids](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, problemlos positionieren:

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

Nun können wir beginnen, an den Formularelementen selbst zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige gemeinsame Regeln. In anderen Worten, wir entfernen deren {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}} und definieren deren {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, Fokusstile zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Nachdem unsere Textfelder fertig sind, müssen wir die Anzeige der einzeiligen und mehrzeiligen Textfelder anpassen, um übereinzustimmen, da sie typischerweise nicht gleich aussehen würden.

#### Anpassen der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Elemente gerendert. Die zwei wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Design ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unseren mehrzeiligen Textbereich ändern, ist es am besten, Benutzer nicht daran zu hindern, die Größe eines Textbereichs zu ändern, wenn sie dies wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über Browser hinweg konsistenter zu rendern. Einige Browser haben als Standardwert `auto`, während einige den Wert `scroll` haben. In unserem Fall ist es besser, sicherzustellen, dass alle `auto` verwenden:

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

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu gestalten; Sie können damit alles machen, sogar [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach dem Anwenden aller Stilierungen und Anpassungen, wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es [live](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Styling-Grundlagen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen können, ist es einfach, Formulare mit Textfeldern und Schaltflächen nur mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formularelementen umgeht, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

### Erweiterte Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
