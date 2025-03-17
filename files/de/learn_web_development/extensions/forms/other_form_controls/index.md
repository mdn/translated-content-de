---
title: Andere Formularelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir betrachten nun die Funktionalität von nicht-`<input>`​​-Formularelementen im Detail, angefangen bei anderen Steuerelementen wie Dropdown-Listen und mehrzeiligen Textfeldern, bis hin zu anderen nützlichen Formularfunktionen wie dem {{htmlelement('output')}}-Element (das wir im vorhergehenden Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
        Das Verständnis der Funktionen von nicht-`<input>`-Formularen und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element angegeben, anstatt mit dem {{HTMLElement("input")}}-Element.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem normalen einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche (d.h. Betätigung der Eingabetaste) einfügen dürfen, die beim Absenden der Daten enthalten werden.

`<textarea>` benötigt auch ein schließendes Tag; beliebiger Standardtext, den Sie enthalten möchten, sollte zwischen den öffnenden und schließenden Tags gesetzt werden. Im Gegensatz dazu ist {{HTMLElement("input")}} ein {{Glossary("void_element", "leeres Element")}} ohne Schlusstag – ein Standardwert wird innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributes gesetzt.

Beachten Sie, dass Sie, obwohl Sie alles innerhalb eines `<textarea>`-Elements platzieren können (einschließlich anderer HTML-Elemente, CSS und JavaScript), es alles so gerendert wird, als wäre es reiner Textinhalt. (Durch die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf Nicht-Formular-Steuerelementen wird eine API bereitgestellt, um HTML/"reichhaltige" Inhalte anstelle von reinem Text zu erfassen).

Visuell wird der eingegebene Text umbrochen, und das Formularelement ist standardmäßig größenveränderbar. Die meisten Browser bieten einen Ankerpunkt, der gezogen werden kann, um die Größe des Textbereichs zu vergrößern oder zu verkleinern.

Sie finden ein Beispiel für die Verwendung eines Textbereichs im [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Steuerung der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute zur Steuerung der Darstellung über mehrere Zeilen:

- [`cols`](/de/docs/Web/HTML/Element/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) der Textsteuerung an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Anfangsbreite, da es durch Ändern der Größe des `<textarea>` geändert und mit CSS überschrieben werden kann. Der Standardwert beträgt 20, wenn keiner angegeben ist.
- [`rows`](/de/docs/Web/HTML/Element/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Steuerelement an. Dies ist effektiv die Anfangshöhe, da es durch Ändern der Größe des `<textarea>` geändert und mit CSS überschrieben werden kann. Der Standardwert beträgt 2, wenn keiner angegeben ist.
- [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)
  - : Gibt an, wie die Steuerung Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übermittelte Text nicht umbrochen wird, aber der vom Browser gerenderte Text umbrochen wird; `hard` (das `cols`-Attribut muss bei Verwendung dieses Wertes angegeben werden), was bedeutet, dass sowohl die übermittelten als auch die gerenderten Texte umbrochen werden, und `off`, was das Umbruch unterbindet.

### Steuerung der Größenänderbarkeit des Textbereichs

Die Möglichkeit, die Größe eines `<textarea>` zu ändern, wird durch die CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standardwert – erlaubt das Ändern der Größe horizontal und vertikal.
- `horizontal`: Erlaubt nur horizontales Ändern der Größe.
- `vertical`: Erlaubt nur vertikales Ändern der Größe.
- `none`: Erlaubt keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die das Ändern der Größe nur in der Richtung `block` oder `inline` erlauben (dies variiert je nach Richtung Ihres Textes; lesen Sie [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), wenn Sie mehr erfahren möchten).

Spielen Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite, um eine Demonstration zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl von vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche einzunehmen. HTML hat zwei Arten von Dropdown-Steuerelementen: das **Auswahlfeld** und das **Autovervollständigungsfeld**. Die Interaktion ist bei beiden Arten von Dropdown-Steuerelementen dieselbe – nachdem das Steuerelement aktiviert wurde, zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Beispiele für alle Arten von Dropdown-Boxen finden Sie auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Auswahlfeld

Ein einfaches Auswahlfeld wird mit einem {{HTMLElement("select")}}-Element erstellt, das eines oder mehrere {{HTMLElement("option")}}-Elemente als Kinder enthält, von denen jedes einen seiner möglichen Werte angibt.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für das Auswahlfeld mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element festgelegt werden – diese Option ist dann voreingestellt, wenn die Seite geladen wird.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können innerhalb der {{HTMLElement("optgroup")}}-Elemente verschachtelt werden, um visuell verbundene Gruppen von Werten zu erstellen:

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

Auf dem {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Element/optgroup#label)-Attributes vor den Werten der verschachtelten Optionen angezeigt. Der Browser hebt sie normalerweise visuell von den Optionen ab (z. B. Fettgedruckt und auf einer anderen Verschachtelungsebene), damit sie weniger leicht mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizit gesetztes `value`-Attribut aufweist, wird dieser Wert gesendet, wenn das Formular mit dieser ausgewählten Option abgeschickt wird. Wenn das `value`-Attribut weggelassen wird, wie in den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. `Value`-Attribute sind also nicht erforderlich, aber Sie könnten einen Grund haben, einen verkürzten oder anderen Wert an den Server zu senden, als den, der visuell im Auswahlfeld angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe des Auswahlfelds ausreichend, um einen einzigen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut ermöglicht die Steuerung, wie viele Optionen sichtbar sind, wenn das Auswahlfeld nicht den Fokus hat.

### Mehrfachauswahl-Auswahlfeld

Standardmäßig erlaubt ein Auswahlfeld nur das Auswählen eines einzigen Wertes. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attributes zum {{HTMLElement("select")}}-Element können Sie Benutzern erlauben, mehrere Werte auszuwählen. Benutzer können mehrere Werte durch das Standardverfahren des Betriebssystems auswählen (z. B. können auf dem Desktop mehrere Werte durch Klicken bei gedrückter <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste ausgewählt werden).

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
> Bei Mehrfachauswahl-Auswahlfeldern werden die Werte nicht mehr als Dropdown-Inhalte angezeigt – stattdessen alle Werte gleichzeitig in einer Liste, wobei das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut.

### Autovervollständigungsfeld

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formular-Widgets bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit Kinder-{{HTMLElement("option")}}-Elementen verwenden, um die anzuzeigenden Werte anzugeben. Das `<datalist>` muss eine `id` erhalten.

Die Datenliste wird dann über das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut, dessen Wert die `id` der zu bindenden Datenliste ist, an ein {{htmlelement("input")}}-Element (z. B. ein `text` oder `email` Eingabetyp) gebunden.

Sobald eine Datenliste mit einem Formular-Widget verknüpft ist, werden ihre Optionen verwendet, um den Text zu vervollständigen, der vom Benutzer eingegeben wurde; typischerweise wird dies dem Benutzer als Dropdown-Feld präsentiert, das mögliche Übereinstimmungen für das anzeigt, was er in das Eingabefeld getippt hat.

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

#### Weniger offensichtliche Verwendungen von datalist

Laut [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe erfordert. Dies führt zu einigen Verwendungen, die etwas unklar erscheinen könnten.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}`-Elemente bei `range`-Eingabetypen unterstützen, eine kleine Markierung über dem Bereich für jeden datalist `{{htmlelement("option")}}`-Wert angezeigt. Sie können eine Implementierung [dieses Beispiels auf der `<input type="range">` Referenzseite](/de/docs/Web/HTML/Element/input/range#adding_tick_marks) sehen.

Und Browser, die {{htmlelement('datalist')}} und [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) unterstützen, sollten eine angepasste Farbauswahl als Standard darstellen, während dennoch die vollständige Farbpalette verfügbar bleibt.

In diesem Fall verhalten sich verschiedene Browser von Fall zu Fall unterschiedlich, daher betrachten Sie solche Verwendungen als progressive Verbesserung und stellen Sie sicher, dass sie sich anständig degradieren.

## Weitere Formulareigenschaften

Es gibt ein paar andere Formulareigenschaften, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber in einigen Situationen dennoch nützlich sind, sodass wir es für wertvoll hielten, sie kurz zu erwähnen.

> [!NOTE]
> Beispiele aus diesem Abschnitt finden Sie auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Messgeräte und Fortschrittsbalken

Messgeräte und Fortschrittsbalken sind visuelle Darstellungen von numerischen Werten. Die Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Meter

Ein Meter-Balken stellt einen festen Wert in einem Bereich dar, der durch die [`max`](/de/docs/Web/HTML/Element/meter#max)- und [`min`](/de/docs/Web/HTML/Element/meter#min)-Werte begrenzt wird. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die [`low`](/de/docs/Web/HTML/Element/meter#low)- und [`high`](/de/docs/Web/HTML/Element/meter#high)-Werte teilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereichs liegt zwischen den [`min`](/de/docs/Web/HTML/Element/meter#min)- und [`low`](/de/docs/Web/HTML/Element/meter#low)-Werten, einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den [`low`](/de/docs/Web/HTML/Element/meter#low)- und [`high`](/de/docs/Web/HTML/Element/meter#high)-Werten, ausschließlich.
  - Der obere Teil des Bereichs liegt zwischen den [`high`](/de/docs/Web/HTML/Element/meter#high)- und [`max`](/de/docs/Web/HTML/Element/meter#max)-Werten, einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. In Verbindung mit den [`low`](/de/docs/Web/HTML/Element/meter#low)- und [`high`](/de/docs/Web/HTML/Element/meter#high)-Werten wird definiert, welcher Teil des Bereichs bevorzugt wird:

  - Liegt der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im unteren Teil des Bereichs, wird der untere Bereich als bevorzugter Teil angesehen, der mittlere Bereich als durchschnittlicher Teil und der obere Bereich als schlechtester Teil.
  - Liegt der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im mittleren Teil des Bereichs, wird der untere Bereich als durchschnittlicher Teil angesehen, der mittlere Bereich als bevorzugter Teil und der obere Bereich ebenfalls als durchschnittlich.
  - Liegt der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im oberen Teil des Bereichs, wird der untere Bereich als schlechtester Teil angesehen, der mittlere Bereich als durchschnittlicher und der obere Bereich als bevorzugt.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe des Meter-Balkens zu ändern:

- Wenn sich der aktuelle Wert im bevorzugten Teil des Bereichs befindet, ist der Balken grün.
- Wenn sich der aktuelle Wert im durchschnittlichen Teil des Bereichs befindet, ist der Balken gelb.
- Wenn sich der aktuelle Wert im schlechtesten Teil des Bereichs befindet, ist der Balken rot.

Ein solcher Balken wird durch das {{HTMLElement("meter")}}-Element erstellt. Dies ist für die Implementierung jeder Art von Messgerät; zum Beispiel ein Balken, der den gesamten auf einer Festplatte genutzten Speicherplatz anzeigt, der rot wird, wenn er sich zu füllen beginnt.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist ein Rückfall für Browser, die das Element nicht unterstützen und für unterstützende Technologien, um es zu vokalisieren.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der sich im Laufe der Zeit bis zu einem durch das [`max`](/de/docs/Web/HTML/Element/progress#max)-Attribut angegebenen Höchstwert ändert. Ein solcher Balken wird mit einem {{HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies ist für die Implementierung von allem, was eine Fortschrittsberichterstattung erfordert, wie der Prozentsatz der heruntergeladenen Dateien oder die Anzahl der beantworteten Fragen in einem Fragebogen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist ein Rückfall für Browser, die das Element nicht unterstützen und für Screenreader, um es zu vokalisieren.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Test your skills: Other controls](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularelementen. Sie müssen sich nicht alle diese Details auf einmal merken und können so oft Sie möchten auf diese Artikel zurückgreifen, um Details nachzuschlagen.

Jetzt, da Sie einen Überblick über das HTML hinter den verschiedenen verfügbaren Formularelementen haben, schauen wir uns an, [wie man sie gestaltet](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung für benutzerdefinierte Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare mit JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
