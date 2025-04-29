---
title: Styling web forms
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Nun zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) stylen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen für das Styling</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Stylen von Formularen zu verstehen und einige der grundlegenden Techniken zu erlernen, die nützlich für Sie sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Stylen von Formular-Widgets

### Geschichte

1995 führte die [HTML 2 Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch bekannt als "Formular-Widgets" oder "Formularelemente") ein. Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt. In der Zwischenzeit verließen sich die Browser auf das zugrunde liegende Betriebssystem, um Formularelemente anzuzeigen.

Selbst als CSS verfügbar war, waren Browser-Anbieter anfangs zögerlich, Formularelemente stilisierbar zu machen, da die Benutzer an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt größtenteils stilisierbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu style

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

Der Artikel [Erweitertes Styling von Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese stylen kann.

#### Haben interne Komponenten, die nicht nur mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), ein Set von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt ermöglichen, ähnlich wie bei regulären DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Kalender im Datumsauswahl-Dialog und der Knopf im `<select>`, der eine Optionsliste anzeigt, wenn man darauf klickt, nicht nur mit CSS gestylt werden.

Die Artikel [Erweitertes Styling von Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese stylen kann.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie z.B. {{cssxref('::-moz-range-track')}}, können solche internen Komponenten stylen, sind jedoch nicht browserübergreifend konsistent und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die in der vorherigen Sektion beschriebenen "einfach zu stylende" Widgets können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) —, die das Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Am Ende dieses Artikels werden wir ein Beispiel durchgehen — aber zuerst gibt es einige spezielle Aspekte des Form-Stylings, die wissenswert sind.

### Schriftarten und Text

CSS-Schrift- und Text-Funktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Doch das Verhalten des Browsers ist oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standardsystem-Aussehen. Um die Darstellung Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu gestalten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Wert bewirkt, dass der Eigenschaftswert dem berechneten Wert der Eigenschaft des übergeordneten Elements entspricht; der Wert des Elternteils wird geerbt.

Die folgenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome unter macOS mit dem Standard-Schriftstil der Plattform zu sehen. Rechts sind die gleichen Elemente mit unserer obigen Stilregel angewendet.

![Formularelemente mit Standard- und vererbten Schriftfamilien. Standardmäßig sind einige Typen serif und andere sind sans serif. Das erben sollte alle Schrifttypen auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Seltsamerweise erbt der input-Typ submit nicht vom Eltern-Absatz.](forms_fontfamily.png)

Die Standarddarstellungen wichen in einigen Punkten voneinander ab. Das Erben sollte ihre Schriftarten auf die der Elternschriftfamilie ändern — in diesem Fall die standardmäßige serifenlose Schrift der übergeordneten Container. Alle tun dies, mit einer seltsamen Ausnahme — `<input type="submit">` erbt nicht vom Eltern-Absatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente gegenüber ihren äquivalenten Eingabetypen zu verwenden!

Es gibt viele Debatten darüber, ob Formulare besser mit den standardmäßigen Systemstilen oder mit angepassten Stilen, die auf Ihren Inhalt abgestimmt sind, aussehen. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Boxmodell zu tun hat, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich jedoch Browser auf die Systemstandardstile beim Anzeigen dieser Widgets. Es liegt an Ihnen, zu definieren, wie Sie sie in Ihren Inhalt einfügen möchten. Wenn Sie das native Aussehen und Verhalten der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine einheitliche Größe geben möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Polsterung und Abstand hat.** Um mehreren unterschiedlichen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im folgenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer obigen Regel angewendet. Beachten Sie, wie diese es uns ermöglichen, sicherzustellen, dass alle Elemente die gleiche Menge an Platz einnehmen, trotz der standardmäßigen Regeln der Plattform für jeden Widgettyp.

![Box-Modell-Eigenschaften beeinflussen die meisten Eingabetypten.](boxmodel_formcontrols1.png)

Was im Screenshot möglicherweise nicht erkennbar ist, ist, dass die Radio- und Checkbox-Steuerelemente immer noch gleich aussehen, aber sie sind in den 150 Pixeln horizontalen Raum zentriert, die durch die {{cssxref('width')}}-Eigenschaft bereitgestellt werden. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Platz.

### Platzierung der Legende

Das {{HTMLElement("legend")}}-Element ist okay zu stylen, aber es kann etwas schwierig sein, die Platzierung davon zu steuern. Standardmäßig ist es immer über dem oberen Rand seines übergeordneten {{HTMLElement("fieldset")}} positioniert, in der Nähe der oberen linken Ecke. Um es woanders zu positionieren, beispielsweise irgendwo innerhalb des Fieldsets oder in der unteren linken Ecke, müssen Sie auf die Positionierung vertrauen.

Sehen Sie sich das folgende Beispiel an:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende in dieser Weise zu positionieren, verwendeten wir das folgende CSS (andere Deklarationen zur Kürze entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit die `<legend>` relativ zu ihm positioniert ist (ansonsten würde die `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von assistierender Technologie als Teil des Etiketts jedes Formularelements innerhalb des Fieldsets gesprochen — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Der Inhalt der Legende wird weiterhin auf die gleiche Weise gesprochen; nur die visuelle Position hat sich geändert.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch zum Beispiel mit einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt aber eine hässliche Lücke im `<fieldset>`-Rahmen, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Sehen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylt. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [sehen Sie hier die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den Anweisungen unten.

### Das HTML

Das HTML ist nur geringfügig umfangreicher als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur einige zusätzliche IDs und eine Überschrift.

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

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Ressourcen:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinen-Schriftart: [Die "Mom's Typewriter" Schrift von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis herunter.
3. Eine handgeschriebene Schriftart: [Die "Journal" Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in das gleiche Verzeichnis herunter.

Ihre Schriftarten benötigen eine weitere Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum fontsquirrel.com [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie die bereitgestellte ZIP-Datei.
4. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie könnten sich in der Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; sehen Sie unseren Artikel [Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für viel mehr Informationen.

### Das CSS

Nun können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke in das {{htmlelement("style")}}-Element ein, einen nach dem anderen.

#### Gesamtlayout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren und alle grundlegenden Stile festlegen, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente angewendet werden. Wenn die fontsquirrel-Ausgabe von dem, was oben beschrieben wurde, abweicht, können Sie die richtigen `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit in der Datei `stylesheet.css` finden (Sie müssen die unten stehenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Dadurch können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, leicht positionieren:

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

Nun können wir anfangen, an den Formularelementen selbst zu arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige gemeinsame Regeln. Mit anderen Worten, wir entfernen deren {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}} und definieren die {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir sie mit einem hellgrauen, durchsichtigen Hintergrund hervor (es ist immer wichtig, einen Fokus-Stil zu haben, für Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Nun da unsere Textfelder fertig sind, müssen wir die Darstellung der ein- und mehrzeiligen Textfelder anpassen, um sie anzupassen, da sie normalerweise nicht mit den Standardwerten übereinstimmen.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Elemente gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Design ist und wir die `resize`-Eigenschaft verwenden könnten, um Benutzer daran zu hindern, unser mehrzeiliges Textfeld zu ändern, ist es am besten, Benutzer nicht daran zu hindern, ein Textarea zu ändern, wenn sie dies möchten. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld konsistenter über Browser hinweg zu gestalten. Einige Browser verwenden standardmäßig den Wert `auto`, während einige den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass jeder `auto` verwendet:

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

#### Styling des Absendebuttons

Das {{HTMLElement("button")}}-Element ist wirklich bequem mit CSS zu stylen; Sie können tun, was Sie wollen, sogar [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller Stile und Anpassungen wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz wie erwartet funktioniert und Sie es mit unserer Version überprüfen möchten, können Sie es auf GitHub finden — sehen Sie es sich [live an](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlagen des Stylings](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Styling_basics).

## Zusammenfassung

Wie Sie sehen können, ist es einfach, Formulare mit rein textbasierten Eingabefeldern und Schaltflächen mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man Formularelemente behandelt, die in die "schlechten" und "hässlichen" Kategorien fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
