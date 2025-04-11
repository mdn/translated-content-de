---
title: Webformulare gestalten
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie mit [CSS](/de/docs/Web/CSS) gestaltet.

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
        Um die Herausforderungen bei der Gestaltung von Formularen zu verstehen und einige der
        grundlegenden Gestaltungstechniken zu lernen, die nützlich für Sie sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen bei der Gestaltung von Formular-Widgets

### Geschichte

1995 führte [die HTML-2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formularelemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formularelemente zu rendern.

Selbst mit verfügbarem CSS waren Browserhersteller anfangs zurückhaltend, Formularelemente gestaltbar zu machen, da Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Zeiten haben sich geändert, und Formular-Widgets sind jetzt größtenteils gestaltbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeiliges Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), ausgenommen [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeiliges {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu gestalten

- Kontrollkästchen und Radiobuttons
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese gestaltet.

#### Mit Interna, die nicht allein mit CSS gestaltet werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei normalen DOM-Elementen ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel kann der Datumsauswahlkalender und der Button auf `<select>`, der beim Klicken eine Optionsliste anzeigt, nicht allein mit CSS gestaltet werden.

Die Artikel [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu gestalten, aber sie sind nicht konsistent über alle Browser hinweg, daher sind sie nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Gestaltung einfacher Formular-Widgets

Die "einfach zu gestaltenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestaltet werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die eine Gestaltung basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst sind hier einige besondere Aspekte der Formulargestaltung, die es wert sind, erwähnt zu werden.

### Schriftarten und Text

CSS-Schriftarten- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standarderscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie die folgenden Regeln in Ihr Stylesheet aufnehmen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert bewirkt, dass der Eigenschaftswert mit dem berechneten Wert der Eigenschaft seines Elternelements übereinstimmt; er übernimmt den Wert des Elternteils.

Die Screenshots unten zeigen den Unterschied. Links ist die Standartrenderung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS mit dem Standard-Schriftstil der Plattform in Verwendung. Rechts sind die gleichen Elemente, mit unserer obigen Stilregel angewendet.

![Formularelemente mit Standard- und geerbten Schriftarten. Standardmäßig sind einige Typen Serifen und andere serifenlos. Das Erben sollte die Schriftarten aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Seltsamerweise erbt der Eingabetyp, der gesendet wird, nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standards unterschieden sich in mehrfacher Hinsicht. Das Erben sollte ihre Schriftarten auf die Schriftfamilie des Elternteils ändern — in diesem Fall die Standard-Serifenschrift der Elterncontainer. Alle tun dies, mit einer seltsamen Ausnahme — `<input type="submit">` erbt in Chrome nicht vom Elternabsatz. Stattdessen verwendet es {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente gegenüber ihren gleichwertigen Eingabetypen zu verwenden!

Es gibt viele Debatten darüber, ob Formulare mit den Standardeinstellungen des Systems oder mit angepassten Stilen, die Ihren Inhalt anpassen, besser aussehen. Diese Entscheidung obliegt Ihnen als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Boxmodell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich Browser jedoch auf die standardmäßigen Systemstile, wenn sie diese Widgets anzeigen. Es liegt an Ihnen, zu definieren, wie Sie sie in Ihren Inhalt einfügen möchten. Wenn Sie das native Aussehen und Gefühl der Widgets beibehalten möchten, haben Sie ein wenig Schwierigkeiten, wenn Sie ihnen eine konsistente Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rahmen, Innenabstand und Außenabstand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte die Standartrenderung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer oben genannten Regel angewendet. Beachten Sie, wie dies ermöglicht, dass alle Elemente den gleichen Platz einnehmen, trotz der standardmäßigen Regeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften beeinflussen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was auf dem Screenshot möglicherweise nicht ersichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber sie sind in den 150 Pixel des horizontal bereitgestellten Raums zentriert, wie es die {{cssxref('width')}}-Eigenschaft vorgibt. Andere Browser können die Widgets nicht zentrieren, aber sie halten sich an den zugewiesenen Raum.

### Legenden-Platzierung

Das {{HTMLElement("legend")}}-Element ist in Ordnung, um es zu gestalten, aber es kann ein wenig knifflig sein, seine Platzierung zu kontrollieren. Standardmäßig wird es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils, nahe der oberen linken Ecke positioniert. Um es woanders zu platzieren, z.B. irgendwo innerhalb des Feldsatzes oder in der Nähe der unteren linken Ecke, müssen Sie auf die Positionierung zurückgreifen.

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit das `<legend>` relativ dazu positioniert wird (ansonsten würde das `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Zugänglichkeit — es wird von unterstützenden Technologien als Teil des Etiketts jedes Formularelements innerhalb des Feldsatzes vorgelesen — aber eine Technik wie die oben gezeigte zu verwenden, ist in Ordnung. Der Inhalt der Legende wird weiterhin auf die gleiche Weise vorgelesen; nur die visuelle Position hat sich geändert.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch zum Beispiel mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt jedoch eine hässliche Lücke im `<fieldset>`-Rahmen, die nicht leicht zu beseitigen ist.

## Ein spezifisches Gestaltungsbeispiel

Lassen Sie uns ein konkretes Beispiel ansehen, wie man ein HTML-Formular gestaltet. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [siehe hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html), und folgen Sie den untenstehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig aufwendiger als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Hier beginnt der Spaß! Bevor wir anfangen zu programmieren, benötigen wir drei zusätzliche Assets:

1. [Den Postkarten-Hintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihr HTML-Arbeitsdokument.
2. Eine Schreibmaschinenschrift: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie zuvor herunter.
3. Eine handgezeichnete Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen ein wenig mehr Bearbeitung, bevor Sie beginnen:

1. Gehen Sie zum fontsquirrel.com [Webfont-Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. Im unzipped Inhalt finden Sie einige Schriftarten (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; es könnten sich in der Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; sehen Sie dazu unseren Artikel [Web-Schriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für viel mehr Informationen.

### Das CSS

Nun können wir uns in das CSS für das Beispiel vertiefen. Fügen Sie alle unten gezeigten Codeblöcke nacheinander innerhalb des {{htmlelement("style")}}-Elements hinzu.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren, und alle grundlegenden Stile, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente gesetzt sind. Wenn die fontsquirrel-Ausgabe anders war als das, was wir oben beschrieben haben, können Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit in der Datei `stylesheet.css` finden (Sie müssen die untenstehenden `@font-face`-Blöcke mit ihnen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente einfach positionieren, einschließlich des Titels und aller Formularelemente:

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

Nun können wir anfangen, an den Formularelementen selbst zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige gemeinsame Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Ramen")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokus-Stil zu haben, für Benutzbarkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Nun, da unsere Textfelder vollständig sind, müssen wir die Anzeige der einzeiligen und mehrzeiligen Textfelder anpassen, um sie abzugleichen, da sie normalerweise nicht gleich aussehen, wenn die Standardeinstellungen verwendet werden.

#### Anpassen der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Blockelement gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}} und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Größenlayout ist, und wir die `resize`-Eigenschaft verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu vergrößern, ist es am besten, die Benutzer nicht daran zu hindern, die Größe eines Textbereichs zu ändern, wenn sie dies wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über alle Browser hinweg konsistenter zu rendern. Einige Browser standardisieren den Wert auf `auto`, während andere den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzugehen, dass alle `auto` verwenden:

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

#### Gestalten der Senden-Schaltfläche

Das {{HTMLElement("button")}}-Element ist wirklich praktisch mit CSS zu gestalten; Sie können damit alles tun, sogar [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller oben beschriebenen Gestaltungs- und Anpassungsmaßnahmen.](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz wie erwartet funktioniert und Sie es mit unserer Version abgleichen möchten, können Sie es auf GitHub finden — siehe es [live](https://mdn.github.io/learning-area/html/forms/postcard-example/) (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Gestaltung Grundkenntnisse](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare nur mit Textfeldern und Schaltflächen erstellen möchten, ist es einfach, sie mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Formularelemente handhabt, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
