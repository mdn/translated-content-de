---
title: Weitere Formularsteuerungen
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir betrachten jetzt die Funktionalität von nicht-`<input>`-Formularelementen im Detail, von anderen Steuerungstypen wie Drop-down-Listen und mehrzeiligen Textfeldern bis hin zu anderen nützlichen Formularfunktionen wie dem {{htmlelement('output')}}-Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
        Das Verständnis der nicht-<code>&#x3C;input></code>-Formularfunktionen und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element definiert, anstatt mit dem {{HTMLElement("input")}}-Element.

```html
<textarea cols="30" rows="8"></textarea>
```

So wird es dargestellt:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem regulären einzeiligen Textfeld ist, dass Benutzer harte Zeilenumbrüche (d.h. durch Drücken der Eingabetaste) einfügen können, die bei der Dateneinreichung enthalten bleiben.

`<textarea>` benötigt auch ein Abschluss-Tag; jeder Standardtext, den Sie enthalten möchten, sollte zwischen den Öffnungs- und Schlussetiketten platziert werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "void element")}} ohne Abschluss-Tag – jeder Standardwert wird innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs gesetzt.

Beachten Sie, dass Sie zwar alles in einem `<textarea>`-Element (einschließlich anderer HTML-Elemente, CSS und JavaScript) einfügen können, es aber aufgrund seiner Natur als reiner Text-Inhalt gerendert wird. (Mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf Nicht-Form-Steuerelementen steht eine API zur Verfügung, um HTML/"reichhaltigen" Inhalt anstelle von reinem Text zu erfassen).

Visuell wird der eingegebene Text umbrochen, und das Formular-Steuerelement ist standardmäßig skalierbar. Die meisten Browser bieten einen Ziehgriff, den Sie ziehen können, um die Größe des Textbereichs zu vergrößern/verkleinern.

Ein Beispiel für die Verwendung eines Textbereichs finden Sie in dem [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Steuerung der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute zur Steuerung seiner Darstellung über mehrere Zeilen:

- [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) des Text-Steuerelements an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Startbreite, da sie durch Ändern der Größe des `<textarea>` geändert werden kann und mithilfe von CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, beträgt 20.
- [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Steuerelement an. Dies ist effektiv die Starthöhe, da sie durch Ändern der Größe des `<textarea>` geändert werden kann und mithilfe von CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, beträgt 2.
- [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)
  - : Gibt an, wie das Steuerelement Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der gesendete Text nicht umgebrochen wird, aber der von Browser gerenderte Text umbrochen ist; `hard` (das `cols`-Attribut muss bei Verwendung dieses Wertes angegeben werden), was bedeutet, dass sowohl der gesendete als auch der gerenderte Text umbrochen werden. `off` stoppt das Umbruchverhalten.

### Steuerung der Skalierbarkeit von Textbereichen

Die Möglichkeit, ein `<textarea>` zu skalieren, wird mit der CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standard – ermöglicht das horizontale und vertikale Skalieren.
- `horizontal`: Ermöglicht nur das horizontale Skalieren.
- `vertical`: Ermöglicht nur das vertikale Skalieren.
- `none`: Ermöglicht kein Skalieren.
- `block` und `inline`: Experimentelle Werte, die nur das Skalieren in der `block`- oder `inline`-Richtung erlauben (dies variiert je nach Textgerichtetheit; lesen Sie [Handling different text directions](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), wenn Sie mehr erfahren möchten).

Experimentieren Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite für eine Demonstration, wie diese funktionieren.

## Drop-down-Steuerelemente

Drop-down-Steuerelemente sind eine einfache Möglichkeit, Benutzern das Auswählen aus vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche einzunehmen. HTML hat zwei Arten von Drop-down-Steuerelementen: das **Auswahlfeld** und das **Autovervollständigungsfeld**. Die Interaktion ist bei beiden Arten von Drop-down-Steuerelementen gleich – nach der Aktivierung des Steuerelements zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Sie können Beispiele aller Drop-down-Feldtypen auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) finden ([siehe auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

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

Falls erforderlich, kann der Standardwert für das Auswahlfeld mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element gesetzt werden – diese Option wird dann beim Laden der Seite vorausgewählt.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachtelt werden, um visuell zugehörige Gruppen von Werten zu erstellen:

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

Im {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Reference/Elements/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser hebt sie in der Regel visuell von den Optionen ab (d.h. fett gedruckt und auf einer anderen Verschachtelungsebene), damit sie weniger wahrscheinlich für tatsächliche Optionen gehalten werden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizit gesetztes `value`-Attribut hat, wird dieser Wert gesendet, wenn das Formular mit dieser ausgewählten Option eingereicht wird. Wenn das `value`-Attribut weggelassen wird, wie in den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. `value`-Attribute sind daher nicht erforderlich, aber es könnte Gründe geben, einen verkürzten oder anderen Wert an den Server zu senden als den, der visuell im Auswahlfeld angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe des Auswahlfelds so eingestellt, dass sie einen einzigen Wert anzeigt. Das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut bietet die Kontrolle darüber, wie viele Optionen sichtbar sind, wenn das Auswahlfeld nicht im Fokus steht.

### Mehrfachauswahl-Auswahlfeld

Standardmäßig lässt ein Auswahlfeld nur die Auswahl eines Wertes zu. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attributs zu dem {{HTMLElement("select")}}-Element kann man es zulassen, dass Benutzer mehrere Werte auswählen. Benutzer können mehrere Werte auswählen, indem sie den Standardmechanismus des Betriebssystems verwenden (z. B. können auf dem Desktop mehrere Werte angeklickt werden, während die <kbd>Cmd</kbd>/<kbd>Strg</kbd>-Tasten gedrückt gehalten werden).

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
> Bei Mehrfachauswahl-Auswahlfeldern werden die Werte im Auswahlfeld nicht mehr als Drop-down-Inhalte angezeigt – stattdessen werden alle Werte gleichzeitig in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut.

### Autovervollständigungsfeld

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formular-Widgets bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit Kinder-{{HTMLElement("option")}}-Elementen verwenden, um die anzuzeigenden Werte anzugeben. Das `<datalist>` muss eine `id` erhalten.

Die Datenliste wird dann über das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut, dessen Wert die `id` der zu bindenden Datenliste ist, mit einem {{htmlelement("input")}}-Element (z. B. ein `text`- oder `email`-Eingabetyp) verbunden.

Sobald eine Datenliste einem Formular-Widget zugeordnet ist, werden ihre Optionen verwendet, um den vom Benutzer eingegebenen Text automatisch zu vervollständigen; typischerweise wird dies dem Benutzer als ein Drop-down-Feld mit möglichen Übereinstimmungen für das, was er in das Eingabefeld eingegeben hat, präsentiert.

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

#### Weniger offensichtliche Verwendungen von datalist

Nach [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe erfordert. Dies führt zu einigen Verwendungen, die ein bisschen nicht offensichtlich erscheinen.

Zum Beispiel wird bei Browsern, die `{{htmlelement("datalist")}}` für `range`-Eingabetypen unterstützen, eine kleine Markierung über dem Bereich für jeden `{{htmlelement("option")}}`-Wert der Datenliste angezeigt. Sie können eine Implementierung [Beispiel davon auf der `<input type="range">`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/input/range#adding_tick_marks) sehen.

Und Browser, die {{htmlelement('datalist')}} und [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützen, sollten eine angepasste Farbpalette als Standard anzeigen, während die vollständige Farbpalette dennoch verfügbar bleibt.

In diesem Fall verhalten sich verschiedene Browser in verschiedenen Fällen unterschiedlich, daher sollten solche Verwendungen als progressive Verbesserung betrachtet werden, und es sollte sichergestellt werden, dass sie problemlos degradieren.

## Weitere Formularfunktionen

Es gibt noch einige weitere Formularfunktionen, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber dennoch in einigen Situationen nützlich sind, daher dachten wir, es wäre es wert, ihnen einen kurzen Hinweis zu geben.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub unter [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) finden ([siehe auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Messgeräte und Fortschrittsbalken

Messgeräte und Fortschrittsbalken sind visuelle Darstellungen numerischer Werte. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Messgerät

Eine Messlatte stellt einen festen Wert in einem Bereich dar, der durch [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) und [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min)-Werte begrenzt ist. Dieser Wert wird visuell als Leiste gerendert, und um zu wissen, wie diese Leiste aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die Werte [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) teilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereichs liegt zwischen den [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) und [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) Werten, einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) Werten, ausschließlich.
  - Der obere Teil des Bereichs liegt zwischen den [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) und [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) Werten, einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. Zusammen mit den [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) Werten wird definiert, welcher Teil des Bereichs bevorzugt ist:

  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im unteren Teil des Bereichs liegt, wird der untere Bereich als der bevorzugte Teil angesehen, der mittlere Bereich als durchschnittlicher Teil und der obere Bereich als der schlechteste Teil betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im mittleren Teil des Bereichs liegt, wird der untere Bereich als durchschnittlicher Teil angesehen, der mittlere Bereich als der bevorzugte Teil und der obere Bereich ebenfalls als durchschnittlich angesehen.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im oberen Teil des Bereichs liegt, wird der untere Bereich als der schlechteste Teil angesehen, der mittlere Bereich als durchschnittlicher Teil und der obere Bereich als der bevorzugte Teil betrachtet.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe der Messlatte zu ändern:

- Wenn der aktuelle Wert im bevorzugten Teil des Bereichs liegt, ist die Leiste grün.
- Wenn der aktuelle Wert im durchschnittlichen Teil des Bereichs liegt, ist die Leiste gelb.
- Wenn der aktuelle Wert im schlechtesten Teil des Bereichs liegt, ist die Leiste rot.

Eine solche Leiste wird durch Verwenden des {{HTMLElement("meter")}}-Elements erstellt. Dies ist für die Implementierung jeder Art von Messgerät, zum Beispiel einer Leiste, die den Gesamtspeicherplatz auf einer Festplatte anzeigt, die rot wird, wenn sie voll wird.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für unterstützende Technologien zum Vorlesen.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der sich im Laufe der Zeit bis zu einem maximalen durch das [`max`](/de/docs/Web/HTML/Reference/Elements/progress#max)-Attribut spezifizierten Wert ändert. Ein solcher Balken wird mithilfe eines {{ HTMLElement("progress")}}-Elements erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies dient zur Implementierung von allem, das Fortschrittsberichte erfordert, wie der Prozentsatz der insgesamt heruntergeladenen Dateien oder die Anzahl der ausgefüllten Fragen in einem Fragebogen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für Bildschirmlesegeräte zum Vorlesen.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Andere Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularsteuerungen. Sie müssen nicht alle diese Details auf einmal im Kopf behalten und können zu diesen Artikeln zurückkehren, so oft Sie möchten, um Details zu überprüfen.

Jetzt, da Sie ein Verständnis des HTMLs hinter den verschiedenen verfügbaren Formularsteuerungen haben, werden wir uns mit [deren Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
