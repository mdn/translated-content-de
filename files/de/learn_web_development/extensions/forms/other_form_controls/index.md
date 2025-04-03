---
title: Andere Formularelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir betrachten nun die Funktionalität von nicht-`<input>` Formularelementen im Detail, von anderen Steuerelementtypen wie Dropdown-Listen und mehrzeiligen Textfeldern bis hin zu anderen nützlichen Formularfeatures wie dem {{htmlelement('output')}}-Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
        Die nicht-<code>&#x3C;input></code> Formulareigenschaften zu verstehen und wie sie mithilfe von HTML implementiert werden können.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element angegeben, anstelle eines {{HTMLElement("input")}}-Elements.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem normalen einzeiligen Textfeld ist, dass Benutzer harte Zeilenumbrüche (d.h. durch Drücken der Eingabetaste) einfügen dürfen, die bei der Datenübermittlung einbezogen werden.

`<textarea>` nimmt auch ein schließendes Tag an; jeder Standardtext, den Sie enthalten möchten, sollte zwischen die öffnenden und schließenden Tags gesetzt werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "leeres Element")}} ohne schließendes Tag — jeder Standardwert wird innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs gesetzt.

Beachten Sie, dass selbst wenn Sie alles innerhalb eines `<textarea>`-Elements (einschließlich anderer HTML-Elemente, CSS und JavaScript) platzieren können, es aufgrund seiner Natur so gerendert wird, als wäre es reiner Textinhalt. (Die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) bei Nicht-Formularelementen bietet eine API zum Erfassen von HTML/"Rich"-Inhalten anstelle von reinem Text).

Visuell wird der eingegebene Text umgebrochen und das Formularelement ist standardmäßig skalierbar. Die meisten Browser bieten einen Ziehgriff, mit dem Sie die Größe des Textbereichs vergrößern/verkleinern können.

Ein Anwendungsbeispiel für Textbereiche finden Sie im [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Steuerung der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute zur Steuerung seiner Darstellung über mehrere Zeilen hinweg:

- [`cols`](/de/docs/Web/HTML/Element/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) des Textelements an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Startbreite, da sie durch Ändern der Größe des `<textarea>` geändert und mit CSS überschrieben werden kann. Der Standardwert, falls keiner angegeben ist, ist 20.
- [`rows`](/de/docs/Web/HTML/Element/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Steuerelement an. Dies ist effektiv die Starthöhe, da sie durch Ändern der Größe des `<textarea>` geändert und mit CSS überschrieben werden kann. Der Standardwert, falls keiner angegeben ist, ist 2.
- [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)
  - : Gibt an, wie das Steuerelement Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übertragene Text nicht umbrochen wird, aber der vom Browser gerenderte Text umbrochen wird; `hard` (das `cols`-Attribut muss bei Verwendung dieses Werts angegeben werden), was bedeutet, dass sowohl die übermittelten als auch die gerenderten Texte umbrochen werden, und `off`, was das Umbruch-Verhalten stoppt.

### Steuerung der Skalierbarkeit von Textbereichen

Die Möglichkeit, ein `<textarea>` zu skalieren, wird mit der CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standardwert — erlaubt das horizontale und vertikale Skalieren.
- `horizontal`: Erlaubt nur das horizontale Skalieren.
- `vertical`: Erlaubt nur das vertikale Skalieren.
- `none`: Erlaubt keine Skalierung.
- `block` und `inline`: Experimentelle Werte, die nur das Skalieren in die Richtung `block` oder `inline` zulassen (dies variiert je nach Richtung Ihres Textes; lesen Sie [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), um mehr darüber zu erfahren).

Spielen Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite, um eine Demonstration zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl aus vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche zu beanspruchen. HTML hat zwei Arten von Dropdown-Steuerelementen: die **Auswahlliste** und die **Autocomplete-Box**. Die Interaktion ist in beiden Arten von Dropdown-Steuerelementen gleich — nachdem das Steuerelement aktiviert wurde, zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Sie finden Beispiele für alle Arten von Dropdown-Boxen auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([Siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Auswahlliste

Eine einfache Auswahlliste wird mit einem {{HTMLElement("select")}}-Element erstellt, das ein oder mehrere {{HTMLElement("option")}}-Elemente als Kinder hat, von denen jedes einen seiner möglichen Werte angibt.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für die Auswahlliste mithilfe des [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attributs auf dem gewünschten {{HTMLElement("option")}}-Element festgelegt werden — diese Option ist dann voreingestellt, wenn die Seite geladen wird.

#### Verwendung der Optgroup

Die {{HTMLElement("option")}}-Elemente können innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachtelt werden, um visuell verbundene Gruppen von Werten zu erstellen:

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

Beim {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Element/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser trennt diese normalerweise visuell von den Optionen (d.h. indem sie fett gedruckt und auf einer anderen Verschachtelungsebene angezeigt werden), damit sie weniger wahrscheinlich für tatsächliche Optionen gehalten werden.

#### Verwendung des Wertattributs

Wenn ein {{HTMLElement("option")}}-Element ein explizit festgelegtes `value`-Attribut hat, wird dieser Wert gesendet, wenn das Formular mit dieser Option gesendet wird. Wenn das `value`-Attribut weggelassen wird, wie in den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. Daher sind `value`-Attribute nicht notwendig, aber Sie könnten einen Grund haben, einen verkürzten oder anderen Wert an den Server senden zu wollen, als was visuell in der Auswahlliste angezeigt wird.

Beispielsweise:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe der Auswahlliste ausreichend, um einen einzelnen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut bietet Kontrolle darüber, wie viele Optionen sichtbar sind, wenn die Auswahlliste nicht im Fokus steht.

### Mehrfachauswahl-Auswahlliste

Standardmäßig lässt eine Auswahlliste einen Benutzer nur einen Wert auswählen. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Sie Benutzern erlauben, mehrere Werte auszuwählen. Benutzer können mehrere Werte auswählen, indem sie den Standardmechanismus des Betriebssystems verwenden (z.B., auf dem Desktop können mehrere Werte durch Klicken bei gedrückter <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste ausgewählt werden).

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
> Bei Mehrfachauswahllisten werden die Werte nicht mehr als Dropdown-Inhalt angezeigt — stattdessen werden alle Werte auf einmal in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut.

### Autovervollständigungs-Box

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formular-Widgets bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit untergeordneten {{HTMLElement("option")}}-Elementen verwenden, um die anzuzeigenden Werte anzugeben. Die `<datalist>` muss eine `id` erhalten.

Die Datenliste wird dann an ein {{htmlelement("input")}}-Element (z.B. einen `text`- oder `email`-Eingabetyp) mithilfe des [`list`](/de/docs/Web/HTML/Element/input#list)-Attributs gebunden, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste mit einem Formular-Widget verbunden ist, werden ihre Optionen zum automatischen Vervollständigen des vom Benutzer eingegebenen Textes verwendet; typischerweise wird dem Benutzer eine Dropdown-Liste mit möglichen Übereinstimmungen für das, was er in das Eingabefeld getippt hat, präsentiert.

#### Einfaches Beispiel

Sehen wir uns ein Beispiel an.

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

#### Weniger offensichtliche Datalist-Verwendungen

Gemäß [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit allen Arten von Widgets verwendet werden, die eine Benutzereingabe erfordern. Dies führt zu einigen Verwendungsmöglichkeiten, die ein wenig unauffällig erscheinen können.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` auf `range`-Eingabetypen unterstützen, ein kleines Häkchen über dem Bereich für jeden Datalist-`{{htmlelement("option")}}`-Wert angezeigt. Sie können eine Implementierung [dieses Beispiels auf der `<input type="range">`-Referenzseite](/de/docs/Web/HTML/Element/input/range#adding_tick_marks) sehen.

Und Browser, die {{htmlelement('datalist')}}s und [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) unterstützen, sollten eine benutzerdefinierte Farbpalette als Standard anzeigen, während immer noch die vollständige Farbpalette verfügbar bleibt.

In diesem Fall verhalten sich verschiedene Browser unterschiedlich von Fall zu Fall, daher sollten solche Verwendungen als progressive Verbesserung betrachtet werden, und es sollte sichergestellt werden, dass sie sich bei Nichtunterstützung anmutig verschlechtern.

## Andere Formulareigenschaften

Es gibt einige andere Formulareigenschaften, die nicht so offensichtlich sind wie diejenigen, die wir bereits erwähnt haben, aber dennoch in einigen Situationen nützlich sind, sodass wir dachten, es wäre wert, ihnen einen kurzen Hinweis zu geben.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Zähler und Fortschrittsbalken

Zähler und Fortschrittsbalken sind visuelle Darstellungen von numerischen Werten. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Zähler

Ein Zählerbalken stellt einen festen Wert in einem Bereich dar, der durch [`max`](/de/docs/Web/HTML/Element/meter#max) und [`min`](/de/docs/Web/HTML/Element/meter#min) Werte abgegrenzt ist. Dieser Wert wird visuell als Balken angezeigt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werte teilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereichs liegt zwischen den [`min`](/de/docs/Web/HTML/Element/meter#min) und [`low`](/de/docs/Web/HTML/Element/meter#low) Werten, inklusive.
  - Der mittlere Teil des Bereichs liegt zwischen den [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werten, exklusiv.
  - Der höhere Teil des Bereichs liegt zwischen den [`high`](/de/docs/Web/HTML/Element/meter#high) und [`max`](/de/docs/Web/HTML/Element/meter#max) Werten, inklusive.

- Der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. In Verbindung mit den [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werten definiert er, welcher Teil des Bereichs bevorzugt wird:

  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im unteren Teil des Bereichs liegt, wird der untere Bereich als der bevorzugte Teil betrachtet, der mittlere Bereich wird als durchschnittlicher Teil betrachtet und der höhere Bereich wird als der schlechteste Teil betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im mittleren Teil des Bereichs liegt, wird der untere Bereich als durchschnittlicher Teil betrachtet, der mittlere Bereich als bevorzugter Teil, und der höhere Bereich als ebenfalls durchschnittlich betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im höheren Teil des Bereichs liegt, wird der untere Bereich als der schlechteste Teil betrachtet, der mittlere Bereich als durchschnittlicher Teil und der höhere Bereich als bevorzugter Teil betrachtet.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe des Zählerbalkens zu ändern:

- Wenn der aktuelle Wert im bevorzugten Teil des Bereichs liegt, ist der Balken grün.
- Wenn der aktuelle Wert im durchschnittlichen Teil des Bereichs liegt, ist der Balken gelb.
- Wenn der aktuelle Wert im schlechtesten Teil des Bereichs liegt, ist der Balken rot.

Ein solcher Balken wird durch die Verwendung des {{HTMLElement("meter")}}-Elements erstellt. Dies kann für die Implementierung einer Art Zähler verwendet werden; beispielsweise ein Balken, der den gesamten auf einer Festplatte genutzten Speicher anzeigt und rot wird, wenn sie beginnt, voll zu werden.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für Hilfstechnologien, um es zu vokalisieren.

#### Fortschrittsbalken

Ein Fortschrittsbalken stellt einen Wert dar, der sich im Laufe der Zeit bis zu einem durch das [`max`](/de/docs/Web/HTML/Element/progress#max)-Attribut angegebenen Maximalwert ändert. Ein solcher Balken wird durch ein {{ HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies ist für die Implementierung von allem, das eine Fortschrittsberichterstattung erfordert, wie z.B. den Prozentsatz der insgesamt heruntergeladenen Dateien oder die Anzahl der in einem Fragebogen ausgefüllten Fragen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für Bildschirmlesegeräte, um es zu vokalisieren.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Andere Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularsteuerelementen. Sie müssen sich nicht alle diese Details auf einmal merken und können so oft Sie möchten zu diesen Artikeln zurückkehren, um die Details zu überprüfen.

Da Sie nun einen Überblick über das HTML hinter den verschiedenen verfügbaren Formularsteuerelementen haben, werden wir uns mit [deren Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
