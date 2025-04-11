---
title: Gestaltung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Nun zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) gestaltet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Stilgrundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Gestalten von Formularen zu verstehen und einige der
        grundlegenden Stiltechniken zu lernen, die nützlich für Sie sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen bei der Gestaltung von Formular-Widgets

### Geschichte

1995 führte [die HTML 2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularsteuerungen (auch "Formular-Widgets" oder "Formularelemente" genannt) ein. Aber CSS wurde erst Ende 1996 veröffentlicht und von den meisten Browsern erst Jahre später unterstützt; daher haben Browser in der Zwischenzeit auf das zugrunde liegende Betriebssystem zurückgegriffen, um Formular-Widgets darzustellen.

Selbst mit verfügbarem CSS zögerten die Browserhersteller zunächst, Formularelemente gestaltbar zu machen, da die Benutzer so an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt größtenteils gestaltbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. einzeilige Text-{{HTMLElement("input")}}s (z.B. Typ text, url, email), außer [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Schaltflächen (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwerer zu gestalten

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese gestaltet.

#### Mit internen Elementen, die nicht allein mit CSS gestaltet werden können

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalten wie bei regulären DOM-Elementen ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel kann der Datumsauswahl-Kalender und die Schaltfläche auf `<select>`, die beim Klicken eine Optionsliste anzeigt, nicht allein mit CSS gestaltet werden.

Die Artikel [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, sind in der Lage, solche internen Komponenten zu gestalten, aber diese sind nicht konsistent über alle Browser hinweg, daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Gestaltung einfacher Formular-Widgets

Die "einfach zu gestaltenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestaltet werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) — die die Gestaltung basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst gibt es einige spezielle Aspekte der Formulargestaltung, die es wert sind, darüber Bescheid zu wissen.

### Schriften und Text

CSS-Schrift- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch oft inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren übergeordneten Elementen. Viele Browser verwenden stattdessen das Standardaussehen des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu gestalten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert bewirkt, dass der Eigenschaftswert mit dem berechneten Wert der Eigenschaft seines übergeordneten Elements übereinstimmt; er erbt den Wert des Elternteils.

Die unten stehenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und eines `<button>` in Chrome auf macOS, mit dem Standardschriftstil der Plattform in Gebrauch. Rechts sind die gleichen Elemente mit unserer obigen Stilregel angewendet.

![Formularsteuerelemente mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen serifenlos und andere mit Serifen. Vererbung sollte die Schriftarten aller auf die Schriftfamilie des Elternteils ändern - in diesem Fall ein Absatz. Seltsamerweise erbt der Input vom Typ Submit nicht von dem übergeordneten Absatz.](forms_fontfamily.png)

Die Standards unterschieden sich in einigen Punkten. Die Vererbung sollte ihre Schriftarten auf die der Schriftfamilie des übergeordneten Elements ändern — in diesem Fall die Standard-Serifenschrift der übergeordneten Container. Alle tun dies, mit einer merkwürdigen Ausnahme — `<input type="submit">` erbt nicht vom übergeordneten Absatz in Chrome. Stattdessen verwendet es das {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente gegenüber ihren gleichwertigen Input-Typen zu verwenden!

Es gibt viel Diskussion darüber, ob Formulare besser mit den Standardstilen des Systems oder mit angepassten Stilen, die zu Ihrem Inhalt passen, aussehen. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Sizing

Alle Textfelder unterstützen vollständig jede Eigenschaft, die mit dem CSS-Boxmodell in Zusammenhang steht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und {{cssxref("border")}}. Wie zuvor verlassen sich die Browser jedoch auf die Standardstile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihre Inhalte einfügen möchten. Wenn Sie das native Aussehen und Verhalten der Widgets beibehalten möchten, werden Sie auf einige Schwierigkeiten stoßen, wenn Sie ihnen eine konsistente Größe verleihen möchten.

**Dies liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Innenabstand und Abstand hat.** Um verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im Screenshot unten zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und {{htmlelement('button')}}. Die rechte Spalte hingegen zeigt die gleichen Elemente mit unserer obigen Regel, die auf sie angewendet wurde. Beachten Sie, wie dies es uns ermöglicht sicherzustellen, dass alle Elemente den gleichen Platz einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Box-Model-Eigenschaften betreffen die meisten Eingabetypen.](boxmodel_formcontrols1.png)

Was möglicherweise nicht über den Screenshot ersichtlich ist, ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, aber in den 150px horizontalen Platz zentriert sind, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugeteilten Raum.

### Platzierung der Legende

Das {{HTMLElement("legend")}}-Element ist in Ordnung zu gestalten, aber es kann ein bisschen schwierig sein, die Platzierung davon zu kontrollieren. Standardmäßig ist es immer über der oberen Grenze seines übergeordneten {{HTMLElement("fieldset")}} positioniert, nahe der oberen linken Ecke. Um es woanders zu positionieren, zum Beispiel irgendwo innerhalb des Feldsatzes oder nahe der unteren linken Ecke, müssen Sie auf die Positionierung zurückgreifen.

Nehmen Sie folgendes Beispiel:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Um die Legende auf diese Weise zu positionieren, haben wir folgendes CSS verwendet (andere Deklarationen wurden der Kürze halber weggelassen):

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

Auch das `<fieldset>` muss positioniert werden, damit das `<legend>` relativ dazu positioniert ist (ansonsten würde das `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil des Labels jedes Formularelements innerhalb des Feldsatzes angesprochen — aber eine Technik wie die obige zu verwenden, ist in Ordnung. Der Inhalt der Legende wird immer noch auf die gleiche Weise angesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihres `<legend>` zu helfen. Wenn Sie es jedoch mit beispielsweise einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt aber eine unschöne Lücke in der `<fieldset>`-Grenze, die schwer zu beseitigen ist.

## Ein spezifisches Stilbeispiel

Lassen Sie uns ein konkretes Beispiel betrachten, wie man ein HTML-Formular gestaltet. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [siehe hier für die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie dieses Beispiel mitverfolgen möchten, erstellen Sie eine lokale Kopie unserer [postcard-start.html-Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den unten stehenden Anweisungen.

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

Fügen Sie den obigen Code in den Body Ihres HTML-Dokuments ein.

### Organisation Ihrer Assets

Hier beginnt der Spaß! Bevor wir mit dem Coden beginnen, benötigen wir drei zusätzliche Assets:

1. [Den Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre HTML-Arbeitsdatei.
2. Eine Schreibmaschinen-Schriftart: [Die Schriftart "Mom's Typewriter" von dafont.com](https://www.dafont.com/moms-typewriter.font?back=theme) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.
3. Eine handgezeichnete Schriftart: [Die "Journal"-Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die TTF-Datei in das gleiche Verzeichnis wie oben herunter.

Ihre Schriftarten benötigen noch etwas Bearbeitung, bevor Sie starten:

1. Gehen Sie zum [Webfont Generator] von fontsquirrel.com (https://www.fontsquirrel.com/tools/webfont-generator).
2. Laden Sie mit dem Formular beide Schriftartdateien hoch und generieren Sie ein Webfont-Kit. Laden Sie das Kit auf Ihren Computer herunter.
3. Entpacken Sie den bereitgestellten Zip-Ordner.
4. Innerhalb des entpackten Inhalts finden Sie einige Schriftartdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie könnten sich in Zukunft ändern). Kopieren Sie diese Dateien in ein Verzeichnis namens fonts im gleichen Verzeichnis wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren Artikel über [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für viel mehr Informationen.

### Das CSS

Nun können wir in das CSS für das Beispiel eintauchen. Fügen Sie alle unten gezeigten Codeblöcke nacheinander in das {{htmlelement("style")}}-Element ein.

#### Gesamtlayout

Zuerst bereiten wir vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile festlegen, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente gesetzt werden. Wenn die Ausgabe von fontsquirrel anders war als die oben beschriebenen Ergebnisse, können Sie die richtigen `@font-face`-Blöcke in Ihrem heruntergeladenen Webfont-Kit finden, in der Datei `stylesheet.css` (Sie müssen die folgenden `@font-face`-Blöcke durch sie ersetzen und die Pfade zu den Schriftdateien aktualisieren):

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

Beachten Sie, dass wir einige [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwenden, um das Formular zu layouten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, einfach positionieren:

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

Die Textfelder erfordern einige gemeinsame Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Ränder")}} und {{cssxref("background","Hintergründe")}}, und definieren ihr {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Jetzt, da unsere Textfelder vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, um sie aneinander anzugleichen, da sie typischerweise nicht gleich aussehen, wenn die Standardeinstellungen verwendet werden.

#### Anpassung der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}} und {{cssxref("overflow")}} Eigenschaften. Obwohl unser Design ein Festgrößen-Design ist und wir die `resize`-Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser mehrzeiliges Textfeld vergrößern, ist es am besten, Benutzer nicht daran zu hindern, ein Textfeld zu vergrößern, wenn sie möchten. Die {{cssxref("overflow")}}-Eigenschaft wird verwendet, um das Feld konsistenter über Browser hinweg darzustellen. Einige Browser verwenden standardmäßig den Wert `auto`, während einige den Wert `scroll` verwenden. In unserem Fall ist es besser sicherzustellen, dass alle den Wert `auto` verwenden:

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

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um es mit CSS zu gestalten; Sie können alles tun, was Sie wollen, sogar [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwenden:

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

![Das finale Erscheinungsbild und Layout des Formulars nach der Anwendung aller beschriebenen Stile und Anpassungen](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht so funktioniert, wie Sie es erwartet haben, und Sie es mit unserer Version vergleichen möchten, können Sie es auf GitHub finden — siehe es [live laufend](https://mdn.github.io/learning-area/html/forms/postcard-example/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Stilgrundlagen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Styling_basics).

## Zusammenfassung

Wie Sie sehen können, solange wir Formulare nur mit Textfeldern und Schaltflächen erstellen möchten, können sie leicht mit CSS gestaltet werden. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formularelementen umgeht, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
