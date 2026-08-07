---
title: Gestaltung von Webformularen
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: caa54002c2400b60b714180bfa34dd93c2963a3b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

In den letzten Artikeln haben wir gezeigt, wie man Webformulare in HTML erstellt. Jetzt zeigen wir, wie man sie in [CSS](/de/docs/Web/CSS) gestaltet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Probleme beim Gestalten von Formularen zu verstehen und einige der grundlegenden Gestaltungstechniken zu erlernen, die nützlich für Sie sein werden.
      </td>
    </tr>
  </tbody>
</table>

## Herausforderungen beim Gestalten von Formular-Widgets

### Geschichte

Im Jahr 1995 führte [die HTML 2-Spezifikation](https://datatracker.ietf.org/doc/html/rfc1866) Formularelemente (auch "Formular-Widgets" oder "Formularelemente" genannt) ein. Aber CSS wurde erst Ende 1996 veröffentlicht und war erst Jahre später in den meisten Browsern unterstützt; in der Zwischenzeit verließen sich die Browser auf das zugrunde liegende Betriebssystem, um Formularelemente darzustellen.

Selbst mit verfügbarer CSS-Unterstützung waren die Browseranbieter zunächst zögerlich, Formularelemente gestaltbar zu machen, da die Benutzer an das Aussehen ihrer jeweiligen Browser gewöhnt waren. Aber die Dinge haben sich geändert, und Formularelemente sind jetzt meist gestaltbar, mit einigen Ausnahmen.

### Arten von Widgets

#### Einfach zu gestalten

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} und {{HTMLElement("legend")}}
3. Einzeilige Text-{{HTMLElement("input")}}s (z.B. type text, url, email), außer [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search).
4. Mehrzeilige {{HTMLElement("textarea")}}
5. Schaltflächen (sowohl {{HTMLElement("input")}} als auch {{HTMLElement("button")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Schwieriger zu gestalten

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

Der Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) zeigt, wie man diese gestaltet.

#### Mit Internes können nicht nur mit CSS gestaltet werden

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), ein Set von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und ihrem Inhalt wie von regulären DOM-Elementen ermöglichen.
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zum Beispiel können der Kalender des Datumsauswahlers und die Schaltfläche auf \<select>, die eine Optionsliste bei Klick anzeigt, nicht nur mit CSS gestaltet werden.

Die Artikel [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) beschreiben, wie man diese gestaltet.

> [!NOTE]
> Einige proprietäre CSS-Pseudoelemente, wie {{cssxref('::-moz-range-track')}}, können solche internen Komponenten gestalten, sind jedoch nicht konsistent über alle Browser hinweg und daher nicht sehr zuverlässig. Wir werden diese später erwähnen.

## Gestaltung von einfachen Formular-Widgets

Die "einfach zu gestaltenden" Widgets im vorherigen Abschnitt können mit Techniken aus den Artikeln [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [CSS-Bausteine](/de/docs/Learn_web_development/Core/Styling_basics) gestaltet werden. Es gibt auch spezielle Selektoren — [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) —, die eine Gestaltung basierend auf dem aktuellen Zustand der Benutzeroberfläche ermöglichen.

Wir werden am Ende dieses Artikels ein Beispiel durchgehen — aber zuerst einige besondere Aspekte der Formular-Gestaltung, die es sich zu kennen lohnt.

### Schriftarten und Text

CSS-Schrift- und Textfunktionen können problemlos mit jedem Widget verwendet werden (und ja, Sie können {{cssxref("@font-face")}} mit Formular-Widgets verwenden). Das Verhalten der Browser ist jedoch häufig inkonsistent. Standardmäßig erben einige Widgets nicht {{cssxref("font-family")}} und {{cssxref("font-size")}} von ihren Eltern. Viele Browser verwenden stattdessen das Standard-Aussehen des Systems. Um das Erscheinungsbild Ihrer Formulare mit dem Rest Ihres Inhalts konsistent zu halten, können Sie die folgenden Regeln zu Ihrem Stylesheet hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

Der {{cssxref('inherit')}}-Eigenschaftswert bewirkt, dass der Eigenschaftswert den berechneten Wert der Eigenschaft seines Elternelements entspricht; er erbt den Wert des Elternteils.

Die folgenden Screenshots zeigen den Unterschied. Links ist die Standarddarstellung eines `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">` und ein `<button>` in Chrome auf macOS mit dem Standard-Schriftstil der Plattform. Rechts sind die gleichen Elemente mit unserer oben angewandten Stilregel.

![Formularsteuerungen mit Standard- und geerbten Schriftfamilien. Standardmäßig sind einige Typen Serif und andere sind Sans Serif. Die Vererbung sollte die Schriften aller auf die des Elternteils ändern - in diesem Fall ein Absatz. Merkwürdigerweise erbt der Input vom Typ submit nicht vom Elternabsatz.](forms_fontfamily.png)

Die Standardwerte unterschieden sich in mehreren Punkten. Die Vererbung sollte ihre Schriften auf die Schriftfamilie des übergeordneten Elements ändern — in diesem Fall die Serif-Standard-Schrift des übergeordneten Containers. Alle tun dies, mit einer seltsamen Ausnahme – `<input type="submit">` erbt nicht vom Elternelement in Chrome. Stattdessen verwendet es die {{cssxref('font-family#Values', 'font-family: system-ui')}}. Dies ist ein weiterer Grund, `<button>`-Elemente über ihren gleichwertigen Eingabetypen zu verwenden!

Es gibt viele Debatten darüber, ob Formulare besser mit den Standard-Systemstilen oder mit benutzerdefinierten Stilen aussehen, die auf Ihren Inhalt abgestimmt sind. Diese Entscheidung liegt bei Ihnen, als Designer Ihrer Website oder Webanwendung.

### Box-Größe

Alle Textfelder unterstützen umfassend jede Eigenschaft, die mit dem CSS-Boxmodell in Verbindung steht, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, und {{cssxref("border")}}. Wie zuvor verlassen sich jedoch die Browser auf die Standard-Stile des Systems, wenn sie diese Widgets anzeigen. Es liegt an Ihnen zu definieren, wie Sie sie in Ihren Inhalt einbinden möchten. Wenn Sie das native Aussehen und Verhalten der Widgets beibehalten möchten, werden Sie ein wenig Schwierigkeiten haben, wenn Sie ihnen eine einheitliche Größe geben wollen.

**Das liegt daran, dass jedes Widget seine eigenen Regeln für Rand, Polsterung und Umrandung hat.** Um mehreren verschiedenen Widgets die gleiche Größe zu geben, können Sie die {{cssxref("box-sizing")}}-Eigenschaft zusammen mit einigen konsistenten Werten für andere Eigenschaften verwenden:

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

Im folgenden Screenshot zeigt die linke Spalte die Standarddarstellung eines `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">`, und {{htmlelement('button')}}. Die rechte Spalte zeigt hingegen dieselben Elemente mit unserer obigen Regel angewendet. Beachten Sie, wie dies es uns ermöglicht, sicherzustellen, dass alle Elemente denselben Raum einnehmen, trotz der Standardregeln der Plattform für jede Art von Widget.

![Boxmodell-Eigenschaften wirken sich auf die meisten Eingabetypen aus.](boxmodel_formcontrols1.png)

Was im Screenshot möglicherweise nicht offensichtlich ist, dass die Radio- und Kontrollkästchen-Steuerelemente immer noch gleich aussehen, jedoch in den 150 Pixeln horizontalen Raum zentriert sind, der durch die {{cssxref('width')}}-Eigenschaft bereitgestellt wird. Andere Browser zentrieren die Widgets möglicherweise nicht, aber sie halten sich an den zugewiesenen Raum.

### Legendenplatzierung

Das {{HTMLElement("legend")}}-Element kann gestaltet werden, aber es kann ein wenig knifflig sein, die Platzierung zu kontrollieren. Standardmäßig wird es immer über der oberen Umrandung seines übergeordneten {{HTMLElement("fieldset")}}-Elements, nahe der oberen linken Ecke, positioniert. Um es anderswo zu positionieren, zum Beispiel irgendwo innerhalb des Fieldsets oder nahe der unteren linken Ecke, müssen Sie sich auf die Positionierung verlassen.

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

Um die Legende auf diese Weise zu positionieren, haben wir die folgende CSS verwendet (andere Deklarationen zur Kürze entfernt):

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

Das `<fieldset>` muss ebenfalls positioniert werden, damit die `<legend>` relativ zu diesem positioniert wird (ansonsten würde die `<legend>` relativ zum `<body>` positioniert).

Das {{HTMLElement("legend")}}-Element ist sehr wichtig für die Barrierefreiheit — es wird von unterstützenden Technologien als Teil der Bezeichnung jedes Formularelements innerhalb des Fieldsets gesprochen — aber die Verwendung einer Technik wie der oben genannten ist in Ordnung. Der Inhalt der Legende wird weiterhin auf dieselbe Weise gesprochen; es ist nur die visuelle Position, die sich geändert hat.

> [!NOTE]
> Sie könnten auch die {{cssxref("transform")}}-Eigenschaft verwenden, um Ihnen bei der Positionierung Ihrer `<legend>` zu helfen. Wenn Sie es jedoch mit beispielsweise einem `transform: translateY();` positionieren, bewegt es sich, hinterlässt aber eine hässliche Lücke in der `<fieldset>`-Umrandung, die nicht einfach zu entfernen ist.

## Ein spezifisches Stilbeispiel

Schauen wir uns ein konkretes Beispiel an, wie man ein HTML-Formular gestaltet. Wir werden ein schick aussehendes "Postkarten"-Kontaktformular erstellen; [siehe hier für die fertige Version](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Wenn Sie dieses Beispiel mitverfolgen möchten, machen Sie eine lokale Kopie unserer [postcard-start.html Datei](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) und folgen Sie den untenstehenden Anweisungen.

### Das HTML

Das HTML ist nur geringfügig umfangreicher als das Beispiel, das wir in [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) verwendet haben; es hat nur ein paar zusätzliche IDs und eine Überschrift.

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

### Organisation Ihrer Ressourcen

Hier beginnt der Spaß! Bevor wir mit dem Programmieren beginnen, benötigen wir drei zusätzliche Ressourcen:

1. [Der Postkartenhintergrund](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/background.jpg) — laden Sie dieses Bild herunter und speichern Sie es im gleichen Verzeichnis wie Ihre Arbeits-HTML-Datei.
2. Eine Schreibmaschinenschrift: [Die "Veteran Typewriter" Schrift von dafont.com](https://www.dafont.com/veteran-typewriter.font) — laden Sie die ZIP-Datei herunter, entpacken Sie sie und kopieren Sie die TTF-Datei in dasselbe Verzeichnis wie oben.
3. Eine handgeschriebene Schrift: [Die "Journal" Schrift von dafont.com](https://www.dafont.com/journal.font) — laden Sie die ZIP-Datei herunter, entpacken Sie sie und kopieren Sie die TTF-Datei in dasselbe Verzeichnis wie oben.

Ihre Schriften benötigen noch einige Verarbeitung, bevor Sie starten:

1. Gehen Sie zum [Transfonter Webfont-Generator](https://transfonter.org/).
2. Drücken Sie die Schaltfläche "Schriften hinzufügen" und laden Sie beide TTF-Dateien hoch.
3. Sobald sie hochgeladen sind, drücken Sie die "Konvertieren" Schaltfläche, um ein Webfont-Kit zu generieren.
4. Laden Sie das Kit mit dem "Download" Link auf Ihren Computer herunter.
5. Entpacken Sie die bereitgestellte Zip-Datei.
6. In den entpackten Inhalten finden Sie einige Schriftdateien (zum Zeitpunkt des Schreibens zwei `.woff`-Dateien und zwei `.woff2`-Dateien; sie können in Zukunft variieren.) Kopieren Sie diese Dateien in ein Verzeichnis namens `fonts` innerhalb desselben Verzeichnisses wie zuvor. Wir verwenden zwei verschiedene Dateien für jede Schriftart, um die Browser-Kompatibilität zu maximieren; siehe unseren Artikel über [Web Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) für viel mehr Informationen.

### Das CSS

Jetzt können wir uns in das CSS für das Beispiel vertiefen. Fügen Sie alle unten gezeigten Code-Blöcke nacheinander in das bereitgestellte {{htmlelement("style")}}-Element ein.

#### Gesamtlayout

Zunächst bereiten wir uns vor, indem wir unsere {{cssxref("@font-face")}}-Regeln und alle grundlegenden Stile setzen, die auf die {{HTMLElement("body")}}- und {{HTMLElement("form")}}-Elemente angewendet werden.

Suchen Sie die `@font-face` Blöcke in Ihrem heruntergeladenen Webfont-Kit in der `stylesheet.css` Datei und ersetzen Sie die unten stehenden `@font-face` Blöcke durch sie. Aktualisieren Sie die Pfade zu den Schriftdateien und stellen Sie sicher, dass die "Journal" und "Veteran Typewriter" `font-family` Namen auf `handwriting` bzw. `typewriter` gesetzt sind. Ihr Transfonter-Ausgabe kann leicht von unserer abweichen, das ist in Ordnung, solange Sie die angeforderten Änderungen vornehmen.

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
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

Beachten Sie, dass wir einige [CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) verwendet haben, um das Formular zu gestalten. Damit können wir unsere Elemente, einschließlich des Titels und aller Formularelemente, einfach positionieren:

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

Jetzt können wir mit der Arbeit an den Formularelementen selbst beginnen. Zuerst stellen wir sicher, dass die {{HTMLElement("label")}}s die richtige Schriftart haben:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Die Textfelder erfordern einige allgemeine Regeln. Mit anderen Worten, wir entfernen ihre {{cssxref("border","Umrandungen")}} und {{cssxref("background","Hintergründe")}}, und definieren ihre {{cssxref("padding")}} und {{cssxref("margin")}} neu:

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

Wenn eines dieser Felder den Fokus erhält, heben wir sie mit einem hellgrauen, transparenten Hintergrund hervor (es ist immer wichtig, einen Fokus-Stil zu haben, für die Benutzerfreundlichkeit und Tastaturzugänglichkeit):

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

Jetzt, da unsere Textfelder vollständig sind, müssen wir die Anzeige der ein- und mehrzeiligen Textfelder anpassen, um übereinzustimmen, da sie normalerweise nicht gleich aussehen, wenn man die Standardeinstellungen verwendet.

#### Anpassen der Textbereiche

{{HTMLElement("textarea")}}-Elemente werden standardmäßig als Inline-Block-Element gerendert. Die beiden wichtigen Dinge hier sind die {{cssxref("resize")}} und {{cssxref("overflow")}} Eigenschaften. Während unser Design ein Design mit fester Größe ist und wir die `resize` Eigenschaft verwenden könnten, um zu verhindern, dass Benutzer unser Mehrzeilen-Textfeld ändern, ist es am besten, Benutzern nicht zu verbieten, ein Textfeld zu ändern, wenn sie es wünschen. Die {{cssxref("overflow")}} Eigenschaft wird verwendet, um das Feld über Browser hinweg konsistenter zu gestalten. Einige Browser verwenden standardmäßig den Wert `auto`, während andere den Wert `scroll` verwenden. In unserem Fall ist es besser sicherzugehen, dass alle `auto` verwenden:

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

#### Stil des Absenden-Buttons

Das {{HTMLElement("button")}}-Element ist wirklich praktisch, um mit CSS gestaltet zu werden; Sie können tun, was Sie möchten, sogar [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwenden:

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
  background: black;
  color: white;
}
```

### Das endgültige Ergebnis

Und voilà! Ihr Formular sollte jetzt ungefähr so aussehen:

![Das endgültige Aussehen und Layout des Formulars nach Anwendung aller Stile und Anpassungen, wie oben beschrieben](updated-form-screenshot.jpg)

> [!NOTE]
> Wenn Ihr Beispiel nicht wie erwartet funktioniert und Sie es mit unserer Version vergleichen möchten, finden Sie es auf GitHub — sehen Sie es sich [live an](https://mdn.github.io/learning-area/html/forms/postcard-example/) (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)).

## Zusammenfassung

Wie Sie sehen, solange wir Formulare nur mit Textfeldern und Schaltflächen erstellen möchten, ist es einfach, sie mit CSS zu gestalten. [Im nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) werden wir sehen, wie man mit Formular-Widgets umgeht, die in die Kategorien "schlecht" und "hässlich" fallen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}
