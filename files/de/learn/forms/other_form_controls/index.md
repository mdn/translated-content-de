---
title: Andere Formularelemente
slug: Learn/Forms/Other_form_controls
l10n:
  sourceCommit: a17faf1f9fd0c51b0accf8a85ec140e4182d5984
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

Wir betrachten nun die Funktionalität von Formular-Elementen, die keine `<input>`-Elemente sind, im Detail. Dazu gehören andere Steuerungstypen wie Dropdown-Listen und mehrzeilige Textfelder, sowie andere nützliche Formularfunktionen wie das {{htmlelement('output')}}-Element (welches wir im vorherigen Artikel im Einsatz gesehen haben) und Fortschrittsbalken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Um die Nicht-<code>&#x3C;input></code>-Formularfunktionen zu verstehen und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mithilfe eines {{HTMLElement("textarea")}}-Elements angegeben, anstatt eines {{HTMLElement("input")}}-Elements.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem regulären einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche (d.h. durch Drücken der Eingabetaste) einfügen dürfen, die beim Absenden der Daten enthalten sein werden.

`<textarea>` erfordert auch einen schließenden Tag; jeder Standardtext, den Sie enthalten möchten, sollte zwischen den öffnenden und schließenden Tags platziert werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein [leeres Element](/de/docs/Glossary/void_element) ohne schließenden Tag — ein Standardwert wird innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs hinterlegt.

Beachten Sie, dass Sie zwar alles innerhalb eines `<textarea>`-Elements platzieren können (einschließlich anderer HTML-Elemente, CSS und JavaScript), es jedoch aufgrund seiner Natur alles als normaler Textinhalt gerendert wird. (Die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf Nicht-Formular-Steuerelementen bietet eine API zum Erfassen von HTML/"rich" Content anstelle von einfachem Text).

Visuell wird der eingegebene Text umbrochen, und das Formularelement ist standardmäßig anpassbar. Die meisten Browser bieten einen Ziehpunkt, den Sie verwenden können, um die Größe des Textbereichs zu erhöhen/verringern.

Ein Anwendungsbeispiel für einen Textbereich finden Sie in dem [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Steuerung der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute, um seine Darstellung über mehrere Zeilen zu steuern:

- [`cols`](/de/docs/Web/HTML/Element/textarea#cols) 
  - : Gibt die sichtbare Breite (Spalten) des Texteintragsfeldes an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Anfangsbreite, da sie durch Ziehen der Größe des `<textarea>` geändert und mit CSS überschrieben werden kann. Der Standardwert, wenn kein Wert angegeben ist, ist 20.
- [`rows`](/de/docs/Web/HTML/Element/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Steuerelement an. Dies ist effektiv die Anfangshöhe, da sie durch Ziehen der Größe des `<textarea>` geändert und mit CSS überschrieben werden kann. Der Standardwert, wenn kein Wert angegeben ist, ist 2.
- [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)
  - : Bestimmt, wie der Text im Steuerelement umbrochen wird. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übermittelte Text nicht umbrochen wird, aber der im Browser gerenderte Text umbrochen wird; `hard` (das `cols`-Attribut muss bei Verwendung dieses Wertes angegeben werden), was bedeutet, dass sowohl der übermittelte als auch der gerenderte Text umbrochen wird, und `off`, was das Umbruch beendet.

### Steuerung der Anpassbarkeit von `<textarea>`

Die Möglichkeit, ein `<textarea>` zu skalieren, wird mit der CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standard — erlaubt ein horizontales und vertikales Skalieren.
- `horizontal`: Erlaubt nur ein horizontales Skalieren.
- `vertical`: Erlaubt nur ein vertikales Skalieren.
- `none`: Verhindert jede Skalierung.
- `block` und `inline`: Experimentelle Werte, die eine Skalierung nur in der `block`- oder `inline`-Richtung erlauben (dies variiert je nach Textorientierung; lesen Sie den Artikel [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions), um mehr darüber zu erfahren.)

Spielen Sie mit dem interaktiven Beispiel auf der {{cssxref("resize")}}-Referenzseite, um eine Demonstration zu sehen, wie diese Werte funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern das Auswählen aus vielen Optionen zu ermöglichen, ohne dabei viel Platz in der Benutzeroberfläche einzunehmen. HTML bietet zwei Arten von Dropdown-Steuerelementen: das **Select-Feld** und das **Auto-Complete-Feld**. Die Interaktion ist bei beiden Typen von Dropdown-Steuerelementen gleich — nachdem das Steuerelement aktiviert wurde, zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Beispiele für alle Arten von Dropdown-Feldern finden Sie auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Select-Feld

Ein einfaches Select-Feld wird mit einem {{HTMLElement("select")}}-Element erstellt, das ein oder mehrere {{HTMLElement("option")}}-Elemente als Kinder enthält, von denen jedes eine seiner möglichen Werte angibt.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für das Select-Feld mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut für das gewünschte {{HTMLElement("option")}}-Element festgelegt werden — diese Option ist dann vorausgewählt, wenn die Seite geladen wird.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachtelt werden, um optisch zugehörige Gruppen von Werten zu erstellen:

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

Beim {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Element/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser stellt sie optisch normalerweise von den Optionen abgehoben dar (z.B. durch Fettschrift und auf einem anderen Verschachtelungsniveau), sodass sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizit gesetztes `value`-Attribut hat, wird dieser Wert übermittelt, wenn das Formular mit dieser ausgewählten Option abgesendet wird. Wenn das `value`-Attribut weggelassen wird, wie bei den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. Daher sind `value`-Attribute nicht notwendig, Sie könnten jedoch einen Grund finden, einen verkürzten oder anderen Wert an den Server zu senden als den, der im Select-Feld visuell angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe des Select-Feldes so eingestellt, dass ein einzelner Wert angezeigt wird. Das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut bietet Kontrolle darüber, wie viele Optionen sichtbar sind, wenn das Select nicht den Fokus hat.

### Mehrfachauswahl-Select-Feld

Standardmäßig lässt ein Select-Feld den Benutzer nur einen Wert auswählen. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Sie Benutzern erlauben, mehrere Werte auszuwählen. Benutzer können mehrere Werte auswählen, indem sie die vom Betriebssystem bereitgestellte Standardmechanismus verwenden (z.B., auf dem Desktop können mehrere Werte durch Klicken bei gedrückter <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste ausgewählt werden).

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
> Im Fall von Mehrfachauswahl-Select-Feldern werden Sie feststellen, dass das Select-Feld die Werte nicht mehr als Dropdown-Inhalt anzeigt — stattdessen werden alle Werte auf einmal in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut.

### Auto-Complete-Feld

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formular-Widgets bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit Kind-{{HTMLElement("option")}}-Elemente verwenden, um die anzuzeigenden Werte anzugeben. Das `<datalist>` muss eine `id` bekommen.

Die Datenliste wird dann an ein {{htmlelement("input")}}-Element (z.B. ein `text`- oder `email`-Eingabetyp) mit dem [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut gebunden, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste mit einem Formular-Widget verbunden ist, werden ihre Optionen verwendet, um eingegebenen Text des Nutzers automatisch zu vervollständigen; typischerweise wird dies dem Nutzer als Dropdown-Liste präsentiert, die mögliche Übereinstimmungen für das, was er in das Eingabefeld eingetippt hat, anzeigt.

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

Laut [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe erfordert. Dies führt zu einigen Verwendungen, die etwas weniger offensichtlich erscheinen könnten.

Zum Beispiel wird, in Browsern, die `{{htmlelement("datalist")}}` auf `range` Eingabetypen unterstützen, ein kleiner Strich über der Skala für jeden datalist `{{htmlelement("option")}}` Wert angezeigt. Ein Implementierungsbeispiel hierzu finden Sie auf der [Referenzseite für `<input type="range">`](/de/docs/Web/HTML/Element/input/range#adding_tick_marks).

Und Browser, die {{htmlelement('datalist')}}s und [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) unterstützen, sollten eine angepasste Farbpalette als Standard anzeigen und gleichzeitig die vollständige Farbpalette verfügbar machen.

In diesem Fall verhalten sich verschiedene Browser in Einzelfällen unterschiedlich, daher sollten solche Verwendungen als progressive Verbesserung betrachtet werden, und sicherstellen, dass sie sich gut degradieren.

## Andere Formularfunktionen

Es gibt noch einige andere Formularfunktionen, die nicht so offensichtlich sind wie die bereits erwähnten, aber in manchen Situationen trotzdem nützlich, daher dachten wir, es wäre erwähnenswert, sie kurz zu erwähnen.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Zähler und Fortschrittsbalken

Zähler und Fortschrittsbalken sind visuelle Darstellungen von numerischen Werten. Unterstützung für das {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Zähler

Ein Zählerbalken repräsentiert einen festen Wert in einem Bereich, begrenzt durch die [`max`](/de/docs/Web/HTML/Element/meter#max) und [`min`](/de/docs/Web/HTML/Element/meter#min)-Werte. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen gesetzten Werten:

- Die [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werte unterteilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereichs liegt zwischen den [`min`](/de/docs/Web/HTML/Element/meter#min) und [`low`](/de/docs/Web/HTML/Element/meter#low) Werten, einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werten, ausschließlich.
  - Der obere Teil des Bereichs liegt zwischen den [`high`](/de/docs/Web/HTML/Element/meter#high) und [`max`](/de/docs/Web/HTML/Element/meter#max) Werten, einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. In Verbindung mit den [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) Werten definiert er, welcher Teil des Bereichs bevorzugt wird:

  - Wenn sich der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im unteren Teil des Bereichs befindet, wird der untere Bereich als bevorzugter Teil angesehen, der mittlere Bereich als durchschnittlicher Teil, und der obere Bereich als schlechtester Teil.
  - Wenn sich der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im mittleren Teil des Bereichs befindet, wird der untere Bereich als durchschnittlicher Teil angesehen, der mittlere Bereich als bevorzugter Teil, und der obere Bereich ebenfalls als durchschnittlich angesehen.
  - Wenn sich der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum) Wert im oberen Teil des Bereichs befindet, wird der untere Bereich als schlechtester Teil angesehen, der mittlere Bereich als durchschnittlicher Teil und der obere Bereich als bevorzugter Teil angesehen.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe des Zählerbalkens zu ändern:

- Befindet sich der aktuelle Wert im bevorzugten Bereich, ist der Balken grün.
- Befindet sich der aktuelle Wert im durchschnittlichen Bereich, ist der Balken gelb.
- Befindet sich der aktuelle Wert im schlechtesten Bereich, ist der Balken rot.

Ein solcher Balken wird mithilfe des {{HTMLElement("meter")}}-Elements erstellt. Dies ist für die Implementierung einer beliebigen Art von Zähler vorgesehen; zum Beispiel ein Balken, der den gesamten auf einer Festplatte belegten Speicherplatz anzeigt und rot wird, wenn er voll zu werden beginnt.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist eine Fallback-Option für Browser, die das Element nicht unterstützen, und für unterstützende Technologien, um es zu vokalisieren.

#### Fortschritt

Ein Fortschrittsbalken repräsentiert einen Wert, der sich im Laufe der Zeit bis zu einem maximalen Wert ändert, der durch das [`max`](/de/docs/Web/HTML/Element/progress#max)-Attribut spezifiziert wird. Ein solcher Balken wird mit einem {{ HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies ist für die Implementierung von allem gedacht, was Fortschrittsberichterstattung erfordert, wie beispielsweise der Prozentsatz der heruntergeladenen Gesamtdaten oder die Anzahl der ausgefüllten Fragen eines Fragebogens.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist eine Fallback-Option für Browser, die das Element nicht unterstützen, und für Screenreader, um es zu vokalisieren.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Andere Steuerungen](/de/docs/Learn/Forms/Test_your_skills:_Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularelementen. Sie müssen nicht alle Details sofort merken und können diese Artikel so oft Sie möchten zurückkehren, um Details zu überprüfen.

Jetzt, wo Sie das HTML hinter den verschiedenen verfügbaren Formularelementen verstehen, schauen wir uns das [Styling davon](/de/docs/Learn/Forms/Styling_web_forms) an.

{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaften-Kompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
