---
title: Andere Formularelemente
slug: Learn/Forms/Other_form_controls
l10n:
  sourceCommit: a17faf1f9fd0c51b0accf8a85ec140e4182d5984
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

Wir betrachten nun die Funktionalität von nicht-`<input>` Formular-Elementen im Detail, von anderen Steuerungstypen wie Dropdown-Listen und mehrzeiligen Textfeldern bis hin zu anderen nützlichen Formularfunktionen wie dem {{htmlelement('output')}}-Element (das wir im letzten Artikel in Aktion gesehen haben) und Fortschrittsbalken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen der nicht-<code>&#x3C;input></code> Formular-Funktionen und
        wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element angegeben, anstatt ein {{HTMLElement("input")}}-Element zu verwenden.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem normalen einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche einfügen dürfen (d.h. Enter drücken), die beim Senden der Daten einbezogen werden.

`<textarea>` erfordert auch einen schließenden Tag; jeder Standardtext, den Sie enthalten möchten, sollte zwischen die öffnenden und schließenden Tags gesetzt werden. Im Gegensatz dazu ist {{HTMLElement("input")}} ein [void element](/de/docs/Glossary/void_element) ohne schließenden Tag — ein Standardwert wird im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut gesetzt.

Beachten Sie, dass selbst wenn Sie alles in ein `<textarea>`-Element einfügen können (einschließlich anderer HTML-Elemente, CSS und JavaScript), es aufgrund seiner Natur alles als reinen Textinhalt gerendert wird. (Die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf Nicht-Formular-Kontrollen bietet eine API zum Erfassen von HTML/"reichhaltigem" Inhalt anstelle von reinem Text).

Visuell wird der eingegebene Text umgebrochen und das Formularelement ist standardmäßig anpassbar. Die meisten Browser bieten einen Ziehgriff, den Sie ziehen können, um die Größe des Textbereichs zu vergrößern oder zu verkleinern.

Ein Beispiel für die Verwendung von Textbereichen finden Sie im [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel erstellt haben.

### Steuerung der mehrzeiligen Anzeige

{{htmlelement("textarea")}} akzeptiert drei Attribute, um seine Darstellung über mehrere Zeilen hinweg zu steuern:

- [`cols`](/de/docs/Web/HTML/Element/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) der Textsteuerung an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Startbreite, da sie durch Ändern der Größe des `<textarea>` verändert und durch CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, beträgt 20.
- [`rows`](/de/docs/Web/HTML/Element/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für die Steuerung an. Dies ist effektiv die Starthöhe, da sie durch Ändern der Größe des `<textarea>` verändert und durch CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, beträgt 2.
- [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)
  - : Gibt an, wie die Steuerung Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der eingereichte Text nicht umbrochen wird, aber der vom Browser gerenderte Text umbrochen wird; `hard` (das `cols`-Attribut muss bei der Verwendung dieses Werts angegeben werden), was bedeutet, dass sowohl die eingereichten als auch die gerenderten Texte umbrochen werden, und `off`, was das Umbruchverhalten stoppt.

### Steuerung der Anpassbarkeit von Textbereichen

Die Möglichkeit, die Größe eines `<textarea>` zu ändern, wird mit der CSS-Eigenschaft `resize` gesteuert. Ihre möglichen Werte sind:

- `both`: Der Standard — erlaubt das Ändern der Größe horizontal und vertikal.
- `horizontal`: Ermöglicht das Ändern der Größe nur horizontal.
- `vertical`: Ermöglicht das Ändern der Größe nur vertikal.
- `none`: Ermöglicht keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die es ermöglichen, die Größe nur in block- oder inline-Richtung zu ändern (dies variiert je nach Textausrichtung; lesen Sie [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions), wenn Sie mehr erfahren möchten).

Spielen Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite, um eine Demonstration zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern viele Auswahlmöglichkeiten zu bieten, ohne viel Platz in der Benutzeroberfläche einzunehmen. HTML hat zwei Arten von Dropdown-Steuerelementen: die **Auswahlbox** und die **Autovervollständigungsbox**. Die Interaktion ist bei beiden Arten von Dropdown-Steuerelementen gleich — nachdem das Steuerelement aktiviert wurde, zeigt der Browser eine Liste von Werten an, aus denen der Benutzer wählen kann.

> [!NOTE]
> Sie können Beispiele aller Dropdown-Box-Typen auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)) finden.

### Auswahlbox

Eine einfache Auswahlbox wird mit einem {{HTMLElement("select")}}-Element erstellt, das ein oder mehrere {{HTMLElement("option")}}-Elemente als Kinder hat, von denen jedes einen seiner möglichen Werte angibt.

#### Grundlegendes Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für die Auswahlbox mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element gesetzt werden — diese Option ist dann voreingestellt, wenn die Seite geladen wird.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachtelt werden, um visuell assoziierte Gruppen von Werten zu erstellen:

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

Beim {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Element/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser hebt sie normalerweise visuell von den Optionen ab (d.h. durch Fettung und auf einer anderen Verschachtelungsebene), sodass sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des Wertattributs

Wenn ein {{HTMLElement("option")}}-Element ein explizites `value`-Attribut darauf gesetzt hat, wird dieser Wert gesendet, wenn das Formular mit dieser gewählten Option übermittelt wird. Wenn das `value`-Attribut weggelassen wird, wie bei den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. `value`-Attribute sind also nicht notwendig, aber Sie könnten einen Grund finden, einen verkürzten oder anderen Wert an den Server zu senden, als er in der Auswahlbox visuell angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe der Auswahlbox ausreichend, um einen einzelnen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut bietet die Kontrolle darüber, wie viele Optionen sichtbar sind, wenn die Auswahl nicht den Fokus hat.

### Multiple-Choice-Auswahlbox

Standardmäßig lässt eine Auswahlbox einen Benutzer nur einen Wert auswählen. Durch das Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Sie Benutzern erlauben, mehrere Werte auszuwählen. Benutzer können mehrere Werte auswählen, indem sie den Standardmechanismus des Betriebssystems verwenden (z.B. auf dem Desktop, indem mehrere Werte bei gedrückter <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste angeklickt werden).

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
> Im Fall von Multiple-Choice-Auswahlboxen werden Sie feststellen, dass die Auswahlbox die Werte nicht mehr als Dropdown-Inhalt anzeigt — stattdessen werden alle Werte gleichzeitig in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut.

### Autovervollständigungsbox

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formularelemente bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit Kind-{{HTMLElement("option")}}-Elementen verwenden, um die anzuzeigenden Werte anzugeben. Die `<datalist>` muss eine `id` erhalten.

Die Datenliste wird dann an ein {{htmlelement("input")}}-Element (z.B. einem `text`- oder `email`-Eingabetyp) mit dem [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut gebunden, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste einem Formularelement zugeordnet ist, werden ihre Optionen verwendet, um den vom Benutzer eingegebenen Text automatisch zu vervollständigen; typischerweise wird dies dem Benutzer als Dropdownfeld präsentiert, das mögliche Übereinstimmungen für das, was er in das Eingabefeld getippt hat, auflistet.

#### Grundlegendes Beispiel

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

Laut [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe erfordert. Dies führt zu einigen Anwendungen, die ein wenig unauffällig erscheinen könnten.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` auf `range`-Eingabetypen unterstützen, ein kleiner Tick obendrauf für jeden datalist `{{htmlelement("option")}}`-Wert angezeigt. Ein Beispiel für diese Implementierung können Sie auf der [Referenzseite für `<input type="range">`](/de/docs/Web/HTML/Element/input/range#adding_tick_marks) sehen.

Und Browser, die {{htmlelement('datalist')}}s und [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) unterstützen, sollten eine angepasste Palette von Farben als Standard anzeigen, während die vollständige Farbpalette weiterhin verfügbar ist.

In diesem Fall verhalten sich verschiedene Browser von Fall zu Fall unterschiedlich, daher sollten solche Anwendungsfälle als progressive Verbesserung betrachtet werden, und sicherstellen, dass sie sich anmutig degradieren.

## Andere Formularfunktionen

Es gibt einige andere Formularfunktionen, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber trotzdem in einigen Situationen nützlich sind, daher halten wir es für wert, ihnen eine kurze Erwähnung zu widmen.

> [!NOTE]
> Die Beispiele aus diesem Abschnitt finden Sie auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Messlatten und Fortschrittsbalken

Messlatten und Fortschrittsbalken sind visuelle Darstellungen numerischer Werte. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Meter

Eine Messlatte stellt einen festen Wert in einem von [`max`](/de/docs/Web/HTML/Element/meter#max) und [`min`](/de/docs/Web/HTML/Element/meter#min) begrenzten Bereich dar. Dieser Wert wird visuell als Balken dargestellt und um zu erfahren, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werte teilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereichs liegt zwischen den [`min`](/de/docs/Web/HTML/Element/meter#min) und [`low`](/de/docs/Web/HTML/Element/meter#low) Werten, einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werten, ausschließlich.
  - Der obere Teil des Bereichs liegt zwischen den [`high`](/de/docs/Web/HTML/Element/meter#high) und [`max`](/de/docs/Web/HTML/Element/meter#max) Werten, einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. Zusammen mit den [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werten, wird damit der bevorzugte Teil des Bereichs definiert:

  - Befindet sich der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im unteren Teil des Bereichs, wird der niedrigere Bereich als der bevorzugte Teil betrachtet, der mittlere Bereich als durchschnittlicher Teil und der höhere Bereich als der schlechteste Teil.
  - Befindet sich der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im mittleren Teil des Bereichs, wird der niedrigere Bereich als durchschnittlicher Teil betrachtet, der mittlere Bereich als der bevorzugte Teil und der höhere Bereich ebenfalls als durchschnittlich.
  - Befindet sich der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im oberen Teil des Bereichs, wird der niedrigere Bereich als der schlechteste Teil betrachtet, der mittlere Bereich als durchschnittlicher Teil und der höhere Bereich als der bevorzugte Teil.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe der Messlatte zu ändern:

- Befindet sich der aktuelle Wert im bevorzugten Bereich, ist die Leiste grün.
- Befindet sich der aktuelle Wert im durchschnittlichen Bereich, ist die Leiste gelb.
- Befindet sich der aktuelle Wert im schlechtesten Bereich, ist die Leiste rot.

Eine solche Leiste wird mit dem {{HTMLElement("meter")}}-Element erstellt. Dies dient zur Implementierung jeder Art von Messlatte, z.B. einer Leiste, die den gesamten belegten Speicherplatz auf einer Disk anzeigt, die rot wird, wenn sie beginnt, voll zu werden.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für unterstützende Technologien, um es zu sprachlich zu äußern.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der sich im Laufe der Zeit bis zu einem durch das [`max`](/de/docs/Web/HTML/Element/progress#max)-Attribut spezifizierten Maximalwert verändert. Ein solcher Balken wird mit einem {{HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies dient zur Implementierung alles, was eine Fortschrittsberichterstattung erfordert, wie z.B. den Prozentsatz der insgesamt heruntergeladenen Dateien oder die Anzahl der beantworteten Fragen in einem Fragebogen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für Bildschirmlesegeräte, um es zu äußern.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Andere Steuerelemente](/de/docs/Learn/Forms/Test_your_skills:_Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formen-Steuerelementen. Sie müssen sich all diese Details nicht auf einmal merken und können so oft Sie möchten auf diese Artikel zurückkommen, um Details zu überprüfen.

Jetzt, da Sie einen Überblick über das HTML hinter den verschiedenen verfügbaren Formen-Steuerelementen haben, werfen wir einen Blick darauf, [wie man sie gestaltet](/de/docs/Learn/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

### Erweiterte Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
