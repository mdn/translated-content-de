---
title: Styling web forms
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den vorhergehenden Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) stylt.

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
        Die Probleme beim Stylen von Formularen zu verstehen und einige der
        grundlegenden Styling-Techniken zu lernen, die für Sie nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Stylen von Formular-Widgets

### Geschichte

1995 führte [die HTML 2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente ein (auch bekannt als "Formular-Widgets" oder "Formularelelemente"). Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre danach unterstützt; daher vertrauten die Browser inzwischen darauf, dass das zugrundeliegende Betriebssystem die Formular-Widgets rendert.

Selbst mit CSS verfügbar zögerten Browserhersteller anfangs, Formularelemente stylbar zu machen, weil Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt größtenteils stylbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), außer [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylt.

#### Interna, die nicht allein mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt ermöglichen, ähnlich wie bei normalen DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können das Datumsauswahlkalender und der Button auf `<select>`, der beim Klicken eine Optionsliste anzeigt, nicht allein mit CSS gestylt werden.

Die Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie diese gestylt werden.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu stylen, aber diese sind nicht in allen Browsern konsistent, daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die "einfach zu stylenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die das Styling basierend auf dem aktuellen Status der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst sind hier einige besondere Aspekte des Formularstylings, die es wert sind, bekannt zu werden.

### Schriften und Text

CSS-Schrift- und Textmerkmale können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das standardisierte Erscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu gestalten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der Wert der Eigenschaft {{cssxref('inherit')}} bewirkt, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft des übergeordneten Elements entspricht; er erbt den Wert des übergeordneten Elements.

Die unten gezeigten Screenshots zeigen den Unterschied. Links ist das Standard-Rendering eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">`, und eines `<button>` in Chrome auf macOS, mit dem standardmäßigen Schriftstil der Plattform in Benutzung. Rechts sind die gleichen Elemente, mit unserer obigen Stilregel angewendet.

![Formularsteuerungen mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen Serifenschriften und andere sind serifenlos. Erben sollte die Schriften aller zur Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt input vom Typ submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standardeinstellungen unterschieden sich in mehreren Punkten. Erben sollte ihre Schriften auf die Schriftfamilie des Elternteils ändern — in diesem Fall die standardmäßige Serifenschrift der übergeordneten Container. Sie tun es auch, mit einer seltsamen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente über ihre entsprechenden Eingabetypen zu verwenden!

Es gibt viele Debatten darüber, ob Formulare besser aussehen, wenn sie die Standardstile des Systems verwenden, oder wenn sie auf Ihre Inhalte abgestimmte, angepasste Stile haben. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Größen

Alle Textfelder unterstützen voll und ganz jede Eigenschaft, die mit dem CSS-Boxmodell zusammenhängt, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, und {{cssxref("border")}}. Wie zuvor verlassen sich jedoch die Browser auf die standardisierten Stile des Systems, wenn diese Widgets angezeigt werden. Es liegt an Ihnen zu bestimmen, wie Sie sie in Ihre Inhalte integrieren möchten. Wenn Sie das native Aussehen und Verhalten der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine einheitliche Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rahmen, Abstände und Ränder hat.** Um mehreren unterschiedlichen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte das Standard-Rendering eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">`, und {{htmlelement('button')}}. Die rechte Spalte zeigt hingegen die gleichen Elemente mit unserer obigen Regel angewendet an. Beachten Sie, wie wir so sicherstellen können, dass alle Elemente den gleichen Raum einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften beeinträchtigen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was durch den Screenshot nicht erkennbar ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber sie sind in den 150 Pixel horizontalen Raum zentriert, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugeteilten Raum.

### Legendenplatzierung

Das {{HTMLElement("legend")}}-Element ist okay zu stylen, aber es kann etwas schwierig sein, die Platzierung davon zu steuern. Standardmäßig ist es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils positioniert, nahe der oberen linken Ecke. Um es irgendwo anders zu positionieren, beispielsweise innerhalb des Fieldsets oder in der Nähe der unteren linken Ecke, müssen Sie sich auf das Positionieren verlassen.

Betrachten Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu platzieren, haben wir das folgende CSS verwendet (andere Deklarationen wurden der Kürze halber entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit die `<legend>` relativ dazu positioniert wird (ansonsten würde die `<legend>` relativ zum `<body>` positioniert werden).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil der Bezeichnung jedes Formularelements innerhalb des Fieldsets ausgesprochen — aber die Verwendung einer Technik wie der oben gezeigten ist in Ordnung. Der Inhalt der Legende wird immer noch auf die gleiche Weise gesprochen; nur die visuelle Position wurde geändert.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch zum Beispiel mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt aber eine hässliche Lücke im `<fieldset>`-Rand, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Sehen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylt. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur etwas komplexer als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Jetzt beginnt der Spaß! Vor dem Kodieren benötigen wir drei zusätzliche Assets:

1. [Der Postkarten-Hintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter" Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis herunter, wie oben.
3. Eine handgeschriebene Schriftart: [Die "Journal" Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis herunter, wie oben.

Ihre Schriftarten benötigen noch einige Bearbeitung, bevor Sie beginnen:

1. Gehen Sie zum [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) von fontsquirrel.com.
2. Laden Sie Ihre Schriftdateien mit dem Formular hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte ZIP-Datei.
4. Innerhalb der entpackten Inhalte finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens, zwei `.woff` Dateien und zwei `.woff2` Dateien; sie könnten sich in Zukunft ändern.) Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im selben Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Web Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) Artikel für weitere Informationen.

### Das CSS

Nun können wir uns in das CSS für das Beispiel vertiefen. Fügen Sie alle unten gezeigten Codeblöcke innerhalb des {{htmlelement("style")}}-Elements, nacheinander, hinzu.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren, und alle grundlegenden Stile, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente gesetzt werden. Wenn die fontsquirrel Ausgabe anders war, als wir oben beschrieben haben, können Sie die korrekten `@font-face` Blöcke in Ihrem heruntergeladenen Webfont-Kit finden, in der `stylesheet.css` Datei (Sie müssen die unten stehenden `@font-face` Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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
  background: #fff url("background.jpg");

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, einfach positionieren:

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

Nun können wir mit den Formularelementen selbst arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart haben:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder benötigen einige gemeinsame Regeln. Mit anderen Worten, wir entfernen deren {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}}, und definieren deren {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir sie mit einem hellgrauen, transparenten, Hintergrund hervor (es ist immer wichtig, Fokus-Stile zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder fertig sind, müssen wir das Display der ein- und mehrzeiligenTextfelder anpassen, damit sie übereinstimmen, da sie normalerweise mit den Standardeinstellungen nicht gleich aussehen.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Design ist, und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld vergrößern, ist es am besten, Benutzern nicht zu verbieten, einen Textbereich zu vergrößern, wenn sie es möchten. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über verschiedene Browser hinweg konsistenter zu rendern. Einige Browser verwenden standardmäßig den Wert `auto`, während andere standardmäßig den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass alle `auto` verwenden:

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

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu stylen; Sie können alles damit machen, sogar [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller beschriebenen Stileinstellungen und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert hat, wie Sie es erwartet haben und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es sich [live an](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare nur mit Textfeldern und Tasten bauen wollen, ist es einfach, sie mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man sich mit Formularelementen befasst, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
