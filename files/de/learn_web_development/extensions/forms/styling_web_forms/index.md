---
title: Styling web forms
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Nun zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) stylt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgebung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Stylen von Formularen verstehen und einige grundlegende Stilverfahren lernen, die für Sie nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Stylen von Formular-Widgets

### Geschichte

Im Jahr 1995 führte [die HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente ein (auch bekannt als "Formular-Widgets" oder "Formularelemente"). Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; daher verließen sich die Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem, um Formular-Widgets darzustellen.

Selbst mit verfügbaren CSS zögerten die Browseranbieter zunächst, Formularelemente stylbar zu machen, da die Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Doch die Dinge haben sich geändert, und die meisten Formular-Widgets sind jetzt stylbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Leicht zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), außer für [`<input type="search">`](/de/docs/Web/HTML/Element/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)

Der Artikel [Fortgeschrittenes Form-Design](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylt.

#### Interne Elemente, die nicht allein mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Gruppe von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte ermöglichen, genau wie bei regulären DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise kann der Kalender des Datumsauswahlers und die Schaltfläche auf `<select>`, die eine Optionsliste beim Klicken anzeigt, nicht allein mit CSS gestylt werden.

Die Artikel [Fortgeschrittenes Form-Design](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese stylt.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, können solche internen Komponenten stylen, sind jedoch nicht konsistent über alle Browser hinweg, daher sind sie nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Stylen einfacher Formular-Widgets

Die im vorherigen Abschnitt beschriebenen "leicht zu stylenden" Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [Grundlagen der CSS-Stilgebung](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die eine Stilgebung basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst sind hier einige spezielle Aspekte der Formulargestaltung, die es sich zu kennen lohnt.

### Schriftarten und Text

CSS-Schriftarten und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Allerdings ist das Verhalten der Browser oft inkonsistent. Einige Widgets erben standardmäßig nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren übergeordneten Elementen. Viele Browser verwenden stattdessen das Standard-Erscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu machen, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert bewirkt, dass der Wert der Eigenschaft dem berechneten Wert der Eigenschaft seines übergeordneten Elements entspricht; das Erben des Wertes des Elternteils.

Die unten gezeigten Screenshots zeigen den Unterschied. Auf der linken Seite ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome unter macOS, mit dem Standard-Schriftstil der Plattform in Verwendung. Auf der rechten Seite sind die gleichen Elemente, mit unserer oben angewandten Stilregel.

![Formularelemente mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen Serif und andere Sans-Serif. Das Erben sollte die Schriftarten aller auf die Schriftfamilie des Eltern-Paragraphen ändern. Seltsamerweise erbt der Eingabetyp Submit nicht vom übergeordneten Paragraphen.](forms_fontfamily.png)

Die Standards unterschieden sich auf mehrere Arten. Das Erben sollte ihre Schriftarten auf die der Schriftfamilie des Elternteils ändern — in diesem Fall die Standardschriftart Serif des Elterncontainers. Alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom Eltern-Paragraphen in Chrome. Stattdessen verwendet es {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente über ihre entsprechenden Eingabetypen zu verwenden!

Es gibt viel Debatte darüber, ob Formulare besser aussehen, wenn sie die Standard-Systemstile verwenden oder an Ihre Inhalte angepasste Stile. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die sich auf das CSS-Boxmodell bezieht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch auf die Standard-Systemstile, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihre Inhalte integrieren möchten. Wenn Sie das native Erscheinungsbild der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine einheitliche Größe geben möchten.

**Das liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Abstände und Rand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im unten gezeigten Screenshot zeigt die linke Spalte das Standard-Rendering eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer oben angewandten Regel darauf. Beachten Sie, wie uns dies ermöglicht, sicherzustellen, dass alle Elemente den gleichen Raum einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften betreffen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was im Screenshot möglicherweise nicht offensichtlich ist, ist, dass die Radio- und Kontrollkästchenelemente immer noch gleich aussehen, aber sie sind in den 150px horizontalen Raum zentriert, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, halten sich aber an den zugewiesenen Raum.

### Legende Platzierung

Das {{HTMLElement("legend")}}-Element kann gestylt werden, aber es kann etwas schwierig sein, seine Platzierung zu kontrollieren. Standardmäßig wird es immer über der oberen Begrenzung seines übergeordneten {{HTMLElement("fieldset")}} positioniert, nahe der oberen linken Ecke. Um es an einer anderen Stelle zu positionieren, beispielsweise irgendwo innerhalb des Fieldsets oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Nehmen Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, verwenden wir das folgende CSS (andere Deklarationen wurden zur kürze entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit das `<legend>` relativ dazu positioniert wird (andernfalls würde das `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Labels jedes Formularelements innerhalb des Fieldsets gesprochen — aber das Verwenden einer Technik wie der oben genannten ist in Ordnung. Der Legendentext wird weiterhin auf dieselbe Weise angesagt; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihres `<legend>` zu helfen. Wenn Sie es jedoch beispielsweise mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt aber eine unschöne Lücke in der `<fieldset>`-Begrenzung, die nicht leicht zu beseitigen ist.

## Ein spezifisches Gestaltungsexempel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylt. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen den unten stehenden Anweisungen.

### Das HTML

Das HTML ist nur etwas mehr involviert als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Hier beginnt der Spaß! Bevor wir mit dem Programmieren beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkarten-Hintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im selben Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.
3. Eine handgeschriebene Schriftart: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen noch etwas Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie über das Formular beide Schriftart-Dateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte Zip-Datei.
4. Im entpackten Inhalt finden Sie einige Schriftart-Dateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie könnten sich in Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens Fonts, im selben Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; sehen Sie sich unseren [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)-Artikel für viele weitere Informationen an.

### Das CSS

Jetzt können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke innerhalb des {{htmlelement("style")}}-Elements ein, einen nach dem anderen.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren, und alle grundlegenden Stile, die auf die {{HTMLElement("body")}} und {{HTMLElement("form")}}-Elemente gesetzt sind. Wenn die fontsquirrel-Ausgabe von dem abweicht, was wir oben beschrieben haben, finden Sie die richtigen `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css` (Sie müssen die unten stehenden `@font-face`-Blöcke mit ihnen ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, leicht positionieren:

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

#### Labels und Kontrollen

Jetzt können wir mit den Formularelementen selbst anfangen zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder benötigen einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border", "Rahmen")}} und {{cssxref("background", "Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir es mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokusstil zu haben, für die Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Da unsere Textfelder nun abgeschlossen sind, müssen wir das Display der ein- und mehrzeiligen Textfelder anpassen, um übereinzustimmen, da sie normalerweise nicht gleich aussehen würden.

#### Tweaking der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}} und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Designthema ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld anpassen, ist es am besten, Benutzer nicht daran zu hindern, ein textarea zu ändern, wenn sie dies wünschen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über Browser hinweg konsistenter zu machen. Einige Browser standardisieren auf den Wert `auto`, während einige auf den Wert `scroll` standardisieren. In unserem Fall ist es besser, sicherzustellen, dass jeder `auto` verwendet:

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

#### Styling der Submit-Schaltfläche

Das {{HTMLElement("button")}}-Element ist wirklich bequem mit CSS zu stylen; Sie können alles tun, was Sie möchten, sogar [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

### Das endergebnis

Und voilà! Ihr Formular sollte jetzt so aussehen:

![Das endgültige Erscheinungsbild und Layout des Formulars nach dem Anwenden aller beschriebenen Stilgestaltung und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz wie erwartet funktioniert und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es sich [live an](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlagen des Stylings](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen, ist es recht einfach, Formulare mit nur Textfeldern und Schaltflächen zu stylen, solange wir uns auf CSS verlassen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Formular-Widgets handhabt, die in die Kategorien "schlecht" und "schlecht aussehend" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
