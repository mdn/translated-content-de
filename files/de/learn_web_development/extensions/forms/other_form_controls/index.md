---
title: Andere Formularelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir betrachten nun im Detail die Funktionalität von nicht-`<input>`-Formularelementen, von anderen Steuerungstypen wie Dropdown-Listen und mehrzeiligen Textfeldern bis hin zu anderen nützlichen Formularcharakteristika wie dem {{htmlelement('output')}}-Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen der nicht-<code>&#x3C;input></code>-Formulareigenschaften und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element angegeben, anstatt das {{HTMLElement("input")}}-Element zu verwenden.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem normalen einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche einfügen dürfen (d.h. durch Drücken der Eingabetaste), die beim Absenden der Daten enthalten bleiben.

`<textarea>` benötigt auch einen schließenden Tag; jeder Standardtext, den Sie enthalten möchten, sollte zwischen den öffnenden und schließenden Tags platziert werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "void element")}} ohne schließenden Tag — jeder Standardwert wird im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angegeben.

Beachten Sie, dass, obwohl Sie in ein `<textarea>`-Element alles einfügen können (einschließlich anderer HTML-Elemente, CSS und JavaScript), aufgrund seiner Natur alles so gerendert wird, als ob es reiner Textinhalt wäre. (Durch die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) bei nicht-formularbezogenen Steuerelementen kann man eine API bereitstellen, um HTML/"Rich"-Inhalt anstelle von reinem Text zu erfassen).

Optisch wird der eingegebene Text umbrochen und das Formularelement ist standardmäßig anpassbar. Die meisten Browser bieten einen Ziehgriff, den Sie verwenden können, um die Größe des Textbereichs zu erhöhen/verringern.

Ein Beispiel für die Verwendung von Textbereichen finden Sie in dem [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Kontrolle der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute zur Steuerung der Darstellung über mehrere Zeilen hinweg:

- [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) des Textkontrollfeldes an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist im Wesentlichen die anfängliche Breite, da sie durch Ändern der Größe des `<textarea>` verändert und durch CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben wird, ist 20.
- [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Kontrollfeld an. Dies ist im Wesentlichen die anfängliche Höhe, da sie durch Ändern der Größe des `<textarea>` verändert und durch CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben wird, ist 2.
- [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)
  - : Gibt an, wie das Kontrollfeld Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übermittelte Text nicht umbrochen wird, aber der im Browser angezeigte Text umbrochen wird; `hard` (das `cols`-Attribut muss beim Verwenden dieses Wertes angegeben werden), was bedeutet, dass sowohl der übermittelte als auch der angezeigte Text umbrochen werden, und `off`, was das Umbruchverfahren stoppt.

### Anpassen der Größenänderbarkeit der Textarea

Die Möglichkeit, eine `<textarea>` zu ändern, wird mit der CSS-`resize`-Eigenschaft gesteuert. Die möglichen Werte sind:

- `both`: Der Standardwert — erlaubt sowohl horizontales als auch vertikales Ändern der Größe.
- `horizontal`: Erlaubt nur horizontales Ändern der Größe.
- `vertical`: Erlaubt nur vertikales Ändern der Größe.
- `none`: Erlaubt keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die das Ändern der Größe nur in der `block`- oder `inline`-Richtung zulassen (dies variiert je nach Richtung Ihres Textes; lesen Sie [Handhabung unterschiedlicher Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), wenn Sie mehr erfahren möchten).

Spielen Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite, um eine Demonstration zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl aus vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche zu beanspruchen. HTML hat zwei Arten von Dropdown-Steuerelementen: das **Auswahlfeld** und das **Autovervollständigungsfeld**. Die Interaktion ist bei beiden Arten von Dropdown-Steuerelementen gleich – nachdem das Steuerelement aktiviert wurde, zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Sie finden Beispiele für alle Arten von Dropdown-Feldern auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([siehe auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Auswahlfeld

Ein einfaches Auswahlfeld wird mit einem {{HTMLElement("select")}}-Element erstellt, das ein oder mehrere {{HTMLElement("option")}}-Elemente als Kinder enthält, von denen jedes einen seiner möglichen Werte angibt.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für das Auswahlfeld mithilfe des [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attributs im gewünschten {{HTMLElement("option")}}-Element festgelegt werden — diese Option ist dann bereits ausgewählt, wenn die Seite geladen wird.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können in {{HTMLElement("optgroup")}}-Elemente verschachtelt werden, um visuell zugeordnete Gruppen von Werten zu erstellen:

```html
<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("Using_optgroup", 120, 120)}}

Beim {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Reference/Elements/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser hebt sie normalerweise visuell von den Optionen ab (d.h. durch Fettdruck und auf einer anderen Verschachtelungsebene), damit sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des Value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizites `value`-Attribut gesetzt hat, wird dieser Wert gesendet, wenn das Formular mit dieser Option abgeschickt wird. Wenn das `value`-Attribut weggelassen wird, wie bei den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. Daher sind `value`-Attribute nicht notwendig, aber es könnte sein, dass Sie einen Grund haben, einen gekürzten oder anderen Wert an den Server zu senden als den, der visuell im Auswahlfeld angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe des Auswahlfeldes ausreichend, um einen einzelnen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut bietet eine Steuerung darüber, wie viele Optionen sichtbar sind, wenn das Auswahlfeld nicht den Fokus hat.

### Mehrfachauswahl-Auswahlfeld

Standardmäßig lässt ein Auswahlfeld nur die Auswahl eines einzigen Wertes zu. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Benutzer mehrere Werte auswählen. Benutzer können mehrere Werte durch das von ihrem Betriebssystem bereitgestellte Standardmechanismus auswählen (z.B. auf dem Desktop können mehrere Werte durch Klicken bei gedrückter <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste ausgewählt werden).

```html
<select id="multi" name="multi" multiple size="2">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("Multiple_choice_select_box", 120, 120)}}

> [!NOTE]
> Bei Mehrfachauswahl-Auswahlfeldern werden die Werte nicht mehr als Dropdown-Inhalt angezeigt — stattdessen werden alle Werte auf einmal in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut.

### Autovervollständigungsfeld

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formularelemente bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit untergeordneten {{HTMLElement("option")}}-Elementen verwenden, um die anzuzeigenden Werte festzulegen. Das `<datalist>` muss mit einer `id` versehen werden.

Die Datenliste wird dann an ein {{htmlelement("input")}}-Element gebunden (z.B. ein `text`- oder `email`-Eingabetyp) unter Verwendung des [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attributs, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste mit einem Formularelement verbunden ist, werden deren Optionen verwendet, um den vom Benutzer eingegebenen Text automatisch zu vervollständigen; typischerweise wird dies dem Benutzer als Dropdown-Box angezeigt, die mögliche Übereinstimmungen für das, was er in das Eingabefeld getippt hat, auflistet.

#### Einfaches Beispiel

Schauen wir uns ein Beispiel an.

```html
<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
<datalist id="mySuggestion">
  <option>Apple</option>
  <option>Banana</option>
  <option>Blackberry</option>
  <option>Blueberry</option>
  <option>Lemon</option>
  <option>Lychee</option>
  <option>Peach</option>
  <option>Pear</option>
</datalist>
```

{{EmbedLiveSample("Basic_example_2", 120, 120)}}

#### Weniger offensichtliche Verwendungen von Datenlisten

Laut der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe benötigt. Dies führt zu einigen Verwendungen, die möglicherweise etwas nicht offensichtlich erscheinen.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` bei `range`-Eingabetypen unterstützen, über dem Schieberegler für jeden Datenlisten-`{{htmlelement("option")}}`-Wert ein kleiner Markierungsstrich angezeigt. Sie können eine Implementierung [Beispiel hierfür auf der `<input type="range">`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/input/range#adding_tick_marks) sehen.

Und Browser, die {{htmlelement('datalist')}}s und [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützen, sollten eine angepasste Farbpalette als Standard anzeigen, während dennoch die vollständige Farbpalette verfügbar ist.

In diesem Fall verhalten sich verschiedene Browser unterschiedlich, daher sollten Sie solche Anwendungen als progressive Verbesserung betrachten und sicherstellen, dass sie elegant zurückstufen.

## Andere Formularmerkmale

Es gibt einige andere Formulareigenschaften, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber dennoch in einigen Situationen nützlich sind. Daher dachten wir, es wäre wertvoll, sie kurz zu erwähnen.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Zähler und Fortschrittsbalken

Zähler und Fortschrittsbalken sind visuelle Darstellungen von numerischen Werten. Die Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Zähler

Ein Zählerbalken repräsentiert einen festen Wert innerhalb eines durch [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) und [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) begrenzten Bereiches. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) Werte teilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereiches liegt zwischen den [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) und [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) Werten, einschließlich.
  - Der mittlere Teil des Bereiches liegt zwischen den [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) Werten, ausschließlich.
  - Der höhere Teil des Bereiches liegt zwischen den [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) und [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) Werten, einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum) Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. Zusammen mit den [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) Werten definiert er, welcher Teil des Bereiches bevorzugt ist:

  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum) Wert im unteren Teil des Bereiches liegt, wird der untere Bereich als der bevorzugte Teil betrachtet, der mittlere Bereich als der durchschnittliche Teil und der höhere Bereich als der schlechteste Teil.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum) Wert im mittleren Teil des Bereiches liegt, wird der untere Bereich als durchschnittlicher Teil betrachtet, der mittlere Bereich als der bevorzugte und der höhere Bereich ebenfalls als durchschnittlich betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum) Wert im oberen Teil des Bereiches liegt, wird der untere Bereich als der schlechteste Teil betrachtet, der mittlere Bereich als der durchschnittliche und der höhere Bereich als der bevorzugte Teil.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe der Zählerleiste zu ändern:

- Wenn der aktuelle Wert im bevorzugten Bereich liegt, ist die Leiste grün.
- Wenn der aktuelle Wert im durchschnittlichen Bereich liegt, ist die Leiste gelb.
- Wenn der aktuelle Wert im schlechtesten Bereich liegt, ist die Leiste rot.

Ein solcher Balken wird mit dem {{HTMLElement("meter")}}-Element erstellt. Dies dient zur Implementierung jeder Art von Zähler; zum Beispiel eine Balkenanzeige, die den gesamten genutzten Speicherplatz auf einer Festplatte anzeigt und rot wird, wenn sie sich füllt.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist ein Ersatz für Browser, die das Element nicht unterstützen, und für assistive Technologien, um es zu verlautbaren.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der sich über die Zeit bis zu einem durch das [`max`](/de/docs/Web/HTML/Reference/Elements/progress#max)-Attribut angegebenen Maximalwert ändert. Ein solcher Balken wird mit dem {{ HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies dient zur Implementierung von allem, was eine Fortschrittsanzeige erfordert, wie beispielsweise den Prozentsatz der heruntergeladenen Dateien oder die Anzahl der beantworteten Fragen in einem Fragebogen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist ein Ersatz für Browser, die das Element nicht unterstützen, und für Bildschirmlesegeräte, um es zu verlautbaren.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Andere Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularelementen. Sie müssen sich nicht alle diese Details auf einmal merken und können so oft wie nötig zu diesen Artikeln zurückkehren, um Details zu überprüfen.

Jetzt, da Sie die HTML-Struktur der verschiedenen verfügbaren Formularelemente verstanden haben, werden wir uns ansehen, wie man sie [stilisiert](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
