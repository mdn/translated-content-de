---
title: Andere Formularelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir betrachten nun die Funktionalität von nicht-`<input>` Formularelementen im Detail, von anderen Steuerelementtypen wie Dropdown-Listen und mehrzeiligen Textfeldern bis hin zu anderen nützlichen Formulareigenschaften wie dem {{htmlelement('output')}} Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
        Verständnis der nicht-<code>&#x3C;input></code> Formularfunktionen und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}} Element angegeben, anstatt das {{HTMLElement("input")}} Element zu verwenden.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem normalen einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche (d.h. das Drücken der Eingabetaste) einfügen dürfen, die beim Übermitteln der Daten enthalten sind.

`<textarea>` benötigt auch einen schließenden Tag; jeder Standardtext, den Sie enthalten möchten, sollte zwischen den öffnenden und schließenden Tags eingefügt werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "leeres Element")}} ohne schließenden Tag — jede Standardwert wird dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut hinzugefügt.

Beachten Sie, dass Sie zwar alles in ein `<textarea>` Element einfügen können (einschließlich anderer HTML-Elemente, CSS und JavaScript), es jedoch aufgrund seiner Natur alles so gerendert wird, als wäre es reiner Textinhalt. (Die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) bei Nicht-Formularsteuerelementen bietet eine API zur Erfassung von HTML/"reichhaltigen" Inhalten anstelle von reinem Text).

Visuell werden die eingegebenen Texte umbrochen und das Formularelement ist standardmäßig in der Größe änderbar. Die meisten Browser bieten einen Ziehgriff an, den Sie ziehen können, um die Größe des Textbereichs zu vergrößern/zu verkleinern.

Sie finden ein Beispiel für die Verwendung von Textbereichen im [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Kontrolle des mehrzeiligen Renderings

{{htmlelement("textarea")}} akzeptiert drei Attribute, um sein Rendering über mehrere Zeilen zu steuern:

- [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) des Textelements an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Anfangsbreite, da sie durch Ändern der Größe des `<textarea>` geändert und durch CSS überschrieben werden kann. Der Standardwert, falls keiner angegeben wird, ist 20.
- [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)
  - : Gibt die Anzahl sichtbarer Textzeilen für das Element an. Dies ist effektiv die Anfangshöhe, da sie durch Ändern der Größe des `<textarea>` geändert und durch CSS überschrieben werden kann. Der Standardwert, falls keiner angegeben wird, ist 2.
- [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)
  - : Gibt an, wie das Element den Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übermittelte Text nicht umbrochen wird, der vom Browser angezeigte Text jedoch; `hard` (das `cols` Attribut muss angegeben werden, wenn dieser Wert verwendet wird), was bedeutet, dass sowohl der übermittelte als auch der angezeigte Text umbrochen werden, und `off`, was das Umbrichen stoppt.

### Kontrolle der Größeänderbarkeit des Textbereichs

Die Möglichkeit, die Größe eines `<textarea>` zu ändern, wird mit der CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standardwert — erlaubt die Größenänderung sowohl horizontal als auch vertikal.
- `horizontal`: Erlaubt nur die horizontale Größenänderung.
- `vertical`: Erlaubt nur die vertikale Größenänderung.
- `none`: Erlaubt keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die nur das Ändern der Größe in der `block`- oder `inline`-Richtung erlauben (dies variiert je nach Richtung des Textes; lesen Sie [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), wenn Sie mehr erfahren möchten).

Experimentieren Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}} Referenzseite, um eine Demonstration zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl aus vielen Optionen anzubieten, ohne viel Platz in der Benutzeroberfläche zu beanspruchen. HTML hat zwei Arten von Dropdown-Steuerelementen: das **Auswahlfeld** und das **Autovervollständigungsfeld**. Die Interaktion ist bei beiden Typen von Dropdown-Steuerelementen gleich — nachdem das Steuerelement aktiviert wurde, zeigt der Browser eine Liste der Werte an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Sie können Beispiele für alle Arten von Dropdown-Kästen auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Auswahlfeld

Ein einfaches Auswahlfeld wird mit einem {{HTMLElement("select")}} Element erstellt, das ein oder mehrere {{HTMLElement("option")}} Elemente als Kinder enthält, von denen jedes eine seiner möglichen Werte angibt.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für das Auswahlfeld mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) Attribut auf dem gewünschten {{HTMLElement("option")}} Element festgelegt werden — diese Option wird dann beim Laden der Seite vorausgewählt.

#### Verwendung von optgroup

Die {{HTMLElement("option")}} Elemente können in {{HTMLElement("optgroup")}} Elemente eingebettet werden, um visuell verbundene Gruppen von Werten zu erstellen:

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

Auf dem {{HTMLElement("optgroup")}} Element wird der Wert des [`label`](/de/docs/Web/HTML/Reference/Elements/optgroup#label) Attributs vor den Werten der eingebetteten Optionen angezeigt. Der Browser hebt diese normalerweise optisch von den Optionen ab (z.B. durch Hervorhebung und auf einer anderen Verschachtelungsstufe), sodass sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}} Element ein explizites `value` Attribut hat, wird dieser Wert gesendet, wenn das Formular mit der ausgewählten Option übermittelt wird. Wenn das `value` Attribut weggelassen wird, wie in den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}} Elements als Wert verwendet. `value` Attribute sind also nicht erforderlich, aber Sie könnten einen Grund haben, einen verkürzten oder anderen Wert an den Server zu senden als den, der visuell im Auswahlfeld angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe des Auswahlfeldes ausreichend, um einen einzigen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size) Attribut bietet Kontrolle darüber, wie viele Optionen sichtbar sind, wenn das Auswahlfeld nicht fokussiert ist.

### Mehrfache Auswahl im Auswahlfeld

Standardmäßig lässt ein Auswahlfeld nur eine Auswahl zu. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attributs zum {{HTMLElement("select")}} Element können Sie Benutzern erlauben, mehrere Werte auszuwählen. Benutzer können mehrere Werte durch den Standardmechanismus des Betriebssystems auswählen (z.B. können auf dem Desktop mehrere Werte angeklickt werden, während die <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Tasten gedrückt gehalten werden).

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
> Im Fall von Mehrfachauswahlfeldern werden die Werte nicht mehr als Dropdown-Inhalt angezeigt, sondern alle Werte werden gleichzeitig in einer Liste dargestellt, wobei das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size) Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}} Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut.

### Autovervollständigungsfeld

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formular-Widgets mithilfe des {{HTMLElement("datalist")}} Elements mit untergeordneten {{HTMLElement("option")}} Elementen angeben, um die anzuzeigenden Werte zu spezifizieren. Die `<datalist>` muss mit einer `id` versehen werden.

Die Datenliste wird dann an ein {{htmlelement("input")}} Element (z.B. ein `text` oder `email` Eingabetyp) mit dem [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut gebunden, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste einem Formular-Widget zugeordnet ist, werden ihre Optionen verwendet, um den vom Benutzer eingegebenen Text automatisch zu vervollständigen; typischerweise wird dies dem Benutzer als Dropdown-Feld angezeigt, das mögliche Übereinstimmungen für den eingegebenen Text anzeigt.

#### Einfaches Beispiel

Werfen wir einen Blick auf ein Beispiel.

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

#### Weniger offensichtliche Verwendungen von datalist

Gemäß [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut und das {{HTMLElement("datalist")}} Element mit jeder Art von Widget verwendet werden, die eine Benutzereingabe erfordert. Dies führt zu einigen Verwendungen, die möglicherweise ein wenig unklar erscheinen.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` bei `range` Eingabetypen unterstützen, eine kleine Markierung über dem Bereich für jeden datalist `{{htmlelement("option")}}` Wert angezeigt. Sie können eine Implementierung [Beispiel hierfür auf der `<input type="range">` Referenzseite](/de/docs/Web/HTML/Reference/Elements/input/range#adding_tick_marks) sehen.

Und Browser, die `{{htmlelement('datalist')}}`s und [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützen, sollten eine angepasste Farbpalette als Standard anzeigen, während die vollständige Farbpalette weiterhin verfügbar bleibt.

In diesem Fall verhalten sich verschiedene Browser in unterschiedlichen Situationen unterschiedlich, betrachten Sie solche Verwendungen also als progressive Verbesserung und stellen Sie sicher, dass sie sich anständig zurückstufen.

## Andere Formulareigenschaften

Es gibt einige andere Formulareigenschaften, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber in einigen Situationen dennoch nützlich sind, daher halten wir es für sinnvoll, sie kurz zu erwähnen.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Zähler und Fortschrittsbalken

Zähler und Fortschrittsbalken sind visuelle Darstellungen von numerischen Werten. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Zähler

Ein Zählerbalken repräsentiert einen festen Wert in einem Bereich, der durch [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) und [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) Werte begrenzt ist. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) Werte teilen den Bereich in folgende drei Teile:

  - Der untere Bereich liegt zwischen den [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) und [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) Werten, einschließlich.
  - Der mittlere Bereich liegt zwischen den [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) Werten, ausschließlich.
  - Der obere Bereich liegt zwischen den [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) und [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) Werten, einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum) Wert definiert den optimalen Wert für das {{HTMLElement("meter")}} Element. Zusammen mit dem [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) Wert definiert es, welcher Teil des Bereichs bevorzugt wird:
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum) Wert im unteren Bereich liegt, wird der untere Bereich als der bevorzugte Teil angesehen, der mittlere Bereich wird als durchschnittlicher Teil angesehen, und der obere Bereich wird als der schlechteste Teil angesehen.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum) Wert im mittleren Bereich liegt, wird der untere Bereich als durchschnittlich angesehen, der mittlere Bereich wird als bevorzugt angesehen, und der obere Bereich wird ebenfalls als durchschnittlich angesehen.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum) Wert im oberen Bereich liegt, wird der untere Bereich als der schlechteste Teil angesehen, der mittlere Bereich wird als durchschnittlich angesehen, und der obere Bereich wird als bevorzugt angesehen.

Alle Browser, die das {{HTMLElement("meter")}} Element implementieren, verwenden diese Werte, um die Farbe des Zählerbalkens zu ändern:

- Wenn der aktuelle Wert im bevorzugten Bereich liegt, ist der Balken grün.
- Wenn der aktuelle Wert im durchschnittlichen Bereich liegt, ist der Balken gelb.
- Wenn der aktuelle Wert im schlechtesten Bereich liegt, ist der Balken rot.

Ein solcher Balken wird mit dem {{HTMLElement("meter")}} Element erstellt. Dies ist zur Implementierung jeder Art von Zähler gedacht, zum Beispiel ein Balken, der den gesamten verbrauchten Speicherplatz auf einer Festplatte anzeigt, der rot wird, wenn er voll wird.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}} Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für unterstützende Technologien zur Sprachausgabe.

#### Fortschritt

Ein Fortschrittsbalken repräsentiert einen Wert, der sich im Laufe der Zeit bis zu einem maximalen Wert ändert, der durch das [`max`](/de/docs/Web/HTML/Reference/Elements/progress#max) Attribut spezifiziert wird. Ein solcher Balken wird mit einem {{ HTMLElement("progress")}} Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies ist zur Implementierung von Fortschrittsberichten gedacht, z.B. den Prozentsatz der heruntergeladenen Dateien oder die Anzahl der beantworteten Fragen in einem Fragebogen.

Der Inhalt innerhalb des {{HTMLElement("progress")}} Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für Screenreader zur Sprachausgabe.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Andere Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularelementen. Sie müssen sich nicht alle Details auf einmal merken und können diese Artikel so oft wieder aufsuchen, wie Sie möchten, um sich über Details zu informieren.

Jetzt, da Sie ein Verständnis für das HTML hinter den verschiedenen verfügbaren Formularelementen haben, werden wir uns damit beschäftigen, [wie man sie stylt](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
