---
title: Styling von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 1d2dd9c951674bf559b9b6d5223704ea3d8d8269
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
        grundlegenden Techniken kennenzulernen, die Ihnen nützlich sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Styling von Formular-Widgets

### Geschichte

1995 führte [die HTML-2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente ein. Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; in der Zwischenzeit griffen die Browser darauf zurück, die Formularelemente durch das zugrunde liegende Betriebssystem darzustellen.

Auch als CSS verfügbar war, waren die Browserhersteller zunächst zurückhaltend, Formularelemente stylbar zu machen, weil die Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt größtenteils stylbar, mit wenigen Ausnahmen.

### Arten von Widgets

#### Einfach zu stylen

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), mit Ausnahme von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Buttons (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu stylen

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie diese gestylt werden.

#### Mit internen Komponenten, die nicht allein mit CSS gestylt werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), ein Satz von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte ermöglichen, genau wie bei normalen DOM-Elementen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beispielsweise kann der Kalender des Date-Pickers und der Button auf `<select>`, der beim Klicken eine Optionsliste anzeigt, nicht allein mit CSS gestylt werden.

Die Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie diese gestylt werden.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu stylen, aber sie sind nicht konsistent über alle Browser hinweg, also nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Styling einfacher Formular-Widgets

Die "einfach-zu-stylen"-Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestylt werden. Es gibt auch spezielle Selektoren — [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die Styling basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst gibt es einige besondere Aspekte des Formularstylings, die wissenswert sind.

### Schriftarten und Text

CSS-Schrift- und Textmerkmale können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formularelementen nutzen). Das Verhalten des Browsers ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standard-Erscheinungsbild des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts abzustimmen, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der Wert der Eigenschaft {{cssxref('inherit')}} bewirkt, dass der Eigenschaftswert mit dem berechneten Wert der Eigenschaft des Elternelements übereinstimmt; die Vererbung des Wertes des Elternteils.

Die untenstehenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">`, und eines `<button>` in Chrome auf macOS mit dem standardmäßigen Schriftstil der Plattform zu sehen. Rechts sind die gleichen Elemente mit unserer oben angegebenen Stilregel angewendet.

![Formularelemente mit Standard- und geerbten Schriftarten. Standardmäßig sind einige Typen serifen und andere serifenlos. Die Vererbung sollte die Schriftarten aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Seltsamerweise erbt input vom Typ submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standards wichen in vielfacher Hinsicht ab. Die Vererbung sollte deren Schriftarten auf die des Schriftfamilie des Elternelements ändern — in diesem Fall die standardmäßige Serifenschrift des Elterncontainers. Dies tun sie alle, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom Elternabsatz in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente anstelle ihrer äquivalenten Input-Typen zu verwenden!

Es gibt viele Diskussionen darüber, ob Formulare mit den System-Standardstilen oder angepassten Stilen, die zu Ihrem Inhalt passen, besser aussehen. Diese Entscheidung liegt bei Ihnen als Designer Ihrer Webseite oder Webanwendung.

### Box Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die sich auf das CSS-Boxmodell bezieht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser auf die System-Standardstile bei der Anzeige dieser Widgets. Es liegt an Ihnen, zu definieren, wie Sie sie in Ihren Inhalt integrieren möchten. Wenn Sie das native Look-and-Feel der Widgets beibehalten möchten, haben Sie Schwierigkeiten, ihnen eine konsistente Größe zu geben.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für die Grenze, den Abstand und den Rand hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

In dem untenstehenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">`, und {{htmlelement('button')}}. Die rechte Spalte zeigt hingegen dieselben Elemente mit unserer oben angegebenen Regel angewendet. Beachten Sie, wie dies gewährleistet, dass alle Elemente denselben Platz einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften wirken sich auf die meisten Eingabetypen aus.](boxmodel_formcontrols1.png)

Was möglicherweise über den Screenshot nicht ersichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber sie sind in den 150px Horizontalraum zentriert, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Platz.

### Legend-Platzierung

Das {{HTMLElement("legend")}}-Element ist in Ordnung zu stylen, aber es kann schwierig sein, die Platzierung zu kontrollieren. Standardmäßig wird es immer über der oberen Grenze seines {{HTMLElement("fieldset")}}-Elternteils, nahe der oberen linken Ecke positioniert. Um es an anderer Stelle zu positionieren, beispielsweise innerhalb des Fieldsets oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

Betrachten Sie das folgende Beispiel:

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
        <label for="cauli">Cauliflower</label>
        <input type="checkbox" id="cauli" name="cauli" value="cauli" />
      </li>
      <li>
        <label for="broc">Broccoli</label>
        <input type="checkbox" id="broc" name="broc" value="broc" />
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

Um die Legende auf diese Weise zu positionieren, haben wir das folgende CSS verwendet (andere Deklarationen aus Platzgründen entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit das `<legend>` relativ zu ihm positioniert wird (ansonsten würde das `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Etiketts jedes Formularelements innerhalb des Fieldset ausgesprochen — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Die Legendeninhalte werden weiterhin auf die gleiche Weise ausgesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch mit beispielsweise einem `transform: translateY();` positionieren, bewegt es sich, aber hinterlässt eine unschöne Lücke im `<fieldset>`-Rahmen, die nicht leicht zu beseitigen ist.

## Ein spezifisches Styling-Beispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular stylen kann. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [siehe hier für die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie diesem Beispiel folgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den untenstehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig komplizierter als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

Hier beginnt der Spaß! Bevor wir mit dem Codieren beginnen, benötigen wir drei zusätzliche Assets:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinenschrift: [Die "Mom's Typewriter"-Schriftart von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schrift: [Die "Journal"-Schriftart von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in dasselbe Verzeichnis wie oben herunter.

Ihre Schriften erfordern noch eine weitere Verarbeitung, bevor Sie beginnen:

1. Gehen Sie zum [Webfont Generator] von fontsquirrel.com(https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie Ihre beiden Schriftdateien über das Formular hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entzippen Sie die bereitgestellte Zip-Datei.
4. Innerhalb der entzippten Inhalte finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie könnten sich zukünftig ändern.) Kopieren Sie diese Dateien in ein Verzeichnis namens fonts, im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren [Web Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)-Artikel für viel mehr Informationen.

### Das CSS

Jetzt können wir uns in das CSS für das Beispiel vertiefen. Fügen Sie alle unten gezeigten Codeblöcke nacheinander in das {{htmlelement("style")}}-Element ein.

#### Gesamtes Layout

Zuerst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln definieren und alle Grundstile auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente setzen. Falls die fontsquirrel-Ausgabe anders war als das, was wir oben beschrieben haben, finden Sie die korrekten `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit, in der Datei `stylesheet.css` (Sie müssen die untenstehenden `@font-face`-Blöcke durch diese ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir ein bisschen [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet haben, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, einfach positionieren:

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

#### Labels und Eingabefelder

Nun können wir mit den Formularelementen selbst arbeiten. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schrift erhalten:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige gemeinsame Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Grenzen")}} und {{cssxref("background","Hintergründe")}}, und definieren ihr {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Nachdem unsere Textfelder fertig sind, müssen wir die Anzeige von einzeiligen und mehrzeiligen Textfeldern anpassen, damit sie übereinstimmen, da sie in der Regel mit den Standardwerten nicht gleich aussehen.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als inline-block-Elemente gerendert. Die zwei wichtigen Dinge hier sind die {{cssxref("resize")}}- und {{cssxref("overflow")}}-Eigenschaften. Während unser Design ein festes Design ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld ändern, ist es besser, Benutzern nicht zu verbieten, die Größe eines Textbereichs nach Belieben anzupassen. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld über Browser hinweg konsistenter zu rendern. Einige Browser verwenden standardmäßig den Wert `auto`, während andere den Wert `scroll` verwenden. In unserem Fall ist es besser, sicherzustellen, dass jeder `auto` verwendet:

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

Das {{HTMLElement("button")}}-Element ist wirklich praktisch mit CSS zu stylen; Sie können tun, was Sie wollen, sogar [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

![Das finale Aussehen und Layout des Formulars nach dem Anwenden aller beschriebenen Stile und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht ganz so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — sehen Sie es [live](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare mit nur Textfeldern und Buttons erstellen möchten, ist es einfach, sie mit CSS zu stylen. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formularelementen umgeht, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
