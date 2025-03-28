---
title: Andere Formularelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir betrachten nun die Funktionalität von Formular-Elementen, die nicht aus `<input>`-Elementen bestehen, im Detail, von anderen Steuerelementen wie Dropdown-Listen und mehrzeiligen Textfeldern bis hin zu anderen nützlichen Formulareigenschaften wie dem {{htmlelement('output')}}-Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
        Verstehen der nicht-<code>&#x3C;input></code>-Formularfunktionen und wie sie
        mit HTML implementiert werden.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element angegeben, anstelle des {{HTMLElement("input")}}-Elements.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>`-Element und einem normalen einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche einfügen dürfen (d.h. die Eingabetaste drücken), die beim Absenden der Daten beibehalten werden.

`<textarea>` benötigt auch einen schließenden Tag; jeglicher Standardtext, den Sie enthalten möchten, sollte zwischen die öffnenden und schließenden Tags gesetzt werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "leeres Element")}} ohne schließenden Tag — ein Standardwert wird im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut platziert.

Beachten Sie, dass, obwohl Sie alles in ein `<textarea>`-Element einfügen können (einschließlich anderer HTML-Elemente, CSS und JavaScript), es aufgrund seiner Natur als Klartext gerendert wird. (Durch die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf Nichtformular-Steuerelementen steht eine API zur Verfügung, um anstelle von Klartext HTML/"Rich"-Inhalte zu erfassen).

Visuell wird der eingegebene Text umgebrochen, und das Formularelement ist standardmäßig anpassbar. Die meisten Browser bieten einen Ziehpunkt, mit dem Sie die Größe des Textbereichs vergrößern/verkleinern können.

Ein Beispiel für die Verwendung eines Textbereichs finden Sie im [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel erstellt haben.

### Kontrolle der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute, um seine Darstellung über mehrere Zeilen hinweg zu steuern:

- [`cols`](/de/docs/Web/HTML/Element/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) des Textelements an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Startbreite, da sie durch Ändern der Größe des `<textarea>` geändert und über CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, ist 20.
- [`rows`](/de/docs/Web/HTML/Element/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Steuerelement an. Dies ist effektiv die Startgröße, da sie durch Ändern der Größe des `<textarea>` geändert und über CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, ist 2.
- [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)
  - : Gibt an, wie das Steuerelement Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übermittelte Text nicht umgebrochen wird, aber der vom Browser gerenderte Text umbrochen wird; `hard` (das `cols`-Attribut muss bei Verwendung dieses Wertes angegeben werden), was bedeutet, dass sowohl der übermittelte als auch der gerenderte Text umgebrochen werden, und `off`, was das Umbruchverhalten stoppt.

### Steuerung der Anpassbarkeit des Textbereichs

Die Fähigkeit, ein `<textarea>` zu skalieren, wird mit der CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standardwert — ermöglicht horizontales und vertikales Skalieren.
- `horizontal`: Ermöglicht nur horizontales Skalieren.
- `vertical`: Ermöglicht nur vertikales Skalieren.
- `none`: Ermöglicht kein Skalieren.
- `block` und `inline`: Experimentelle Werte, die eine Größenänderung in der `block`- oder `inline`-Richtung nur zulassen (dies variiert je nach Textausrichtung; lesen Sie [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), wenn Sie mehr herausfinden möchten.)

Spielen Sie mit dem interaktiven Beispiel auf der Referenzseite {{cssxref("resize")}}, um zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind ein einfacher Weg, um Benutzern die Auswahl aus vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche einzunehmen. HTML hat zwei Arten von Dropdown-Steuerelementen: das **Auswahlfeld** und das **Autovervollständigungsfeld**. Die Interaktion ist in beiden Arten von Dropdown-Steuerelementen gleich — nachdem das Steuerelement aktiviert ist, zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Beispiele aller Dropdown-Feldtypen finden Sie auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([hier auch live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Auswahlfeld

Ein einfaches Auswahlfeld wird mit einem {{HTMLElement("select")}}-Element erstellt, das ein oder mehrere {{HTMLElement("option")}}-Elemente als Kinder hat, von denen jedes einen seiner möglichen Werte angibt.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für das Auswahlfeld mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element festgelegt werden – diese Option ist dann bereits ausgewählt, wenn die Seite geladen wird.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können in {{HTMLElement("optgroup")}}-Elementen verschachtelt werden, um visuell verbundene Untergruppen von Werten zu erstellen:

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

Im {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Element/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser hebt sie normalerweise visuell von den Optionen ab (z. B. durch Fettschrift und auf einer anderen Verschachtelungsebene), sodass sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizites `value`-Attribut hat, wird dieser Wert gesendet, wenn das Formular mit dieser ausgewählten Option abgesendet wird. Wenn das `value`-Attribut weggelassen wird, wie in den oben genannten Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. `value`-Attribute sind also nicht erforderlich, aber Sie könnten einen Grund haben, einen kürzeren oder anderen Wert an den Server zu senden als den, der im Auswahlfeld sichtbar angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe des Auswahlfeldes ausreichend, um einen einzelnen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut bietet die Kontrolle darüber, wie viele Optionen sichtbar sind, wenn das Auswahlfeld nicht im Fokus steht.

### Mehrfachauswahl Auswahlfeld

Ein Auswahlfeld lässt standardmäßig nur eine Auswahl zu. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Sie Benutzern erlauben, mehrere Werte auszuwählen. Nutzer können mehrere Werte auswählen, indem sie das im Betriebssystem vorgesehene Standardmechanismus nutzen (z. B. auf dem Desktop können mehrere Werte angeklickt werden, während die <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste gedrückt gehalten wird).

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
> Bei Mehrfachauswahlfeldern werden die Werte nicht mehr als Dropdown-Inhalte angezeigt - stattdessen werden alle Werte auf einmal in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut.

### Autovervollständigungsfeld

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formular-Widgets bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit untergeordneten {{HTMLElement("option")}}-Elementen verwenden, um die anzuzeigenden Werte festzulegen. Das `<datalist>` muss eine `id` zugewiesen bekommen.

Die Datenliste wird dann an ein {{htmlelement("input")}}-Element (z. B. ein `text` oder `email` Input-Typ) mit dem [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut gebunden, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste einem Formular-Widget zugeordnet ist, werden deren Optionen verwendet, um den vom Benutzer eingegebenen Text automatisch zu vervollständigen; typischerweise wird dies dem Benutzer als Dropdown-Liste angezeigt, die mögliche Übereinstimmungen für das, was er in das Eingabefeld getippt hat, auflistet.

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

Gemäß [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe erfordert. Dies führt zu einigen Anwendungen, die möglicherweise etwas nicht offensichtlich erscheinen.

Beispielsweise wird in Browsern, die `{{htmlelement("datalist")}}` bei `range` Input-Typen unterstützen, ein kleines Häkchen über dem Bereich angezeigt für jeden datalist `{{htmlelement("option")}}` Wert. Sie können eine Implementierung [dieses Beispiels auf der `<input type="range">` Referenzseite](/de/docs/Web/HTML/Element/input/range#adding_tick_marks) sehen.

Und Browser, die {{htmlelement('datalist')}}s und [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) unterstützen, sollten eine angepasste Farbpalette als Standard anzeigen und gleichzeitig die gesamte Farbpalette verfügbar machen.

In diesem Fall verhalten sich verschiedene Browser unterschiedlich von Fall zu Fall, betrachten Sie solche Anwendungen daher als progressive Verbesserung und stellen Sie sicher, dass sie anpassungsfähig degradiert werden.

## Andere Formulareigenschaften

Es gibt einige andere Formulareigenschaften, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber in manchen Situationen dennoch nützlich sind, sodass es sich lohnt, ihnen eine kurze Erwähnung zu geben.

> [!NOTE]
> Die Beispiele aus diesem Abschnitt finden Sie auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([hier auch live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Zähler und Fortschrittsbalken

Zähler und Fortschrittsbalken sind visuelle Darstellungen von numerischen Werten. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Zähler

Ein Zählerbalken stellt einen festen Wert in einem Bereich dar, der durch [`max`](/de/docs/Web/HTML/Element/meter#max) und [`min`](/de/docs/Web/HTML/Element/meter#min)-Werte begrenzt ist. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die [`low`](/de/docs/Web/HTML/Element/meter#low)- und [`high`](/de/docs/Web/HTML/Element/meter#high)-Werte teilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereichs liegt zwischen den Werten [`min`](/de/docs/Web/HTML/Element/meter#min) und [`low`](/de/docs/Web/HTML/Element/meter#low), einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den Werten [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high), ausschließlich.
  - Der obere Teil des Bereichs liegt zwischen den Werten [`high`](/de/docs/Web/HTML/Element/meter#high) und [`max`](/de/docs/Web/HTML/Element/meter#max), einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. In Verbindung mit den Werten [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) definiert er, welcher Teil des Bereichs der bevorzugte ist:

  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im unteren Teil des Bereichs liegt, wird der untere Bereich als der bevorzugte Teil betrachtet, der mittlere Bereich als der durchschnittliche Teil und der obere Bereich als der schlechteste Teil.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im mittleren Teil des Bereichs liegt, wird der untere Bereich als ein durchschnittlicher Teil betrachtet, der mittlere Bereich als der bevorzugte Teil und der obere Bereich ebenfalls als durchschnittlich betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im oberen Teil des Bereichs liegt, wird der untere Bereich als der schlechteste Teil betrachtet, der mittlere Bereich als der durchschnittliche Teil und der obere Bereich als der bevorzugte Teil.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe des Zählerbalkens zu ändern:

- Wenn der aktuelle Wert im bevorzugten Teil des Bereichs liegt, ist der Balken grün.
- Wenn der aktuelle Wert im durchschnittlichen Teil des Bereichs liegt, ist der Balken gelb.
- Wenn der aktuelle Wert im schlechtesten Teil des Bereichs liegt, ist der Balken rot.

Ein solcher Balken wird mit dem {{HTMLElement("meter")}}-Element erstellt. Dies ist zum Implementieren jeder Art von Zähler geeignet, zum Beispiel ein Balken, der den gesamten Speicherplatz auf einer Festplatte anzeigt, der rot wird, wenn er voll zu werden beginnt.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, sowie für Hilfstechnologien zur Ausgabe desselben.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der sich im Laufe der Zeit bis zu einem maximalen, durch das [`max`](/de/docs/Web/HTML/Element/progress#max)-Attribut angegebenen Wert verändert. Ein solcher Balken wird mit einem {{HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies ist nützlich für die Implementierung von Funktionen, die eine Fortschrittsanzeige erfordern, wie den Prozentsatz der heruntergeladenen Dateien oder die Anzahl der ausgefüllten Fragen in einem Fragebogen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, sowie für Screenreader zur Ausgabe desselben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Andere Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularelementen. Sie müssen sich nicht alle diese Details auf einmal merken und können zu diesen Artikeln zurückkehren, so oft Sie möchten, um Einzelheiten zu überprüfen.

Jetzt, da Sie ein Verständnis der HTML-Grundlagen hinter den verfügbaren Formularelementen haben, werden wir uns mit deren [Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) beschäftigen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
