---
title: Andere Formularelemente
slug: Learn/Forms/Other_form_controls
l10n:
  sourceCommit: a17faf1f9fd0c51b0accf8a85ec140e4182d5984
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

Wir betrachten nun die Funktionalität von anderen Formular-Elementen im Detail, von anderen Steuerungstypen wie Dropdown-Listen und mehrzeiligen Textfeldern bis zu anderen nützlichen Formularfunktionen wie dem {{htmlelement('output')}}-Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
      <th scope="row">Ziel:</th>
      <td>
        Um die nicht-<code>&#x3C;input></code>-Formularfunktionen zu verstehen und wie
        man sie mit HTML umsetzt.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element angegeben, anstatt mit dem {{HTMLElement("input")}}-Element.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem normalen einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche (d. h. die Eingabetaste drücken) einfügen können, die beim Senden der Daten enthalten werden.

`<textarea>` benötigt auch einen schließenden Tag; jeglicher Standardtext, den Sie enthalten möchten, sollte zwischen den öffnenden und schließenden Tags platziert werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{glossary("void element")}} ohne Schlusstag — jeder Standardwert wird im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut gesetzt.

Beachten Sie, dass auch wenn Sie alles in ein `<textarea>`-Element (einschließlich anderer HTML-Elemente, CSS und JavaScript) setzen können, wird es aufgrund seiner Natur so gerendert, als ob es nur einfacher Textinhalt wäre. (Die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf Nicht-Formularsteuerelementen bietet eine API zum Erfassen von HTML/"reichhaltigem" Inhalt anstelle von einfachem Text).

Visuell wird der eingegebene Text umbrochen und das Formularelement ist standardmäßig in der Größe anpassbar. Die meisten Browser bieten einen Ziehgriff, den Sie ziehen können, um die Größe des Textbereichs zu vergrößern oder zu verkleinern.

Sie finden ein Beispiel für die Verwendung von Textbereichen im [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Kontrolle der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute, um seine Darstellung über mehrere Zeilen zu steuern:

- [`cols`](/de/docs/Web/HTML/Element/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) des Textelements an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Startbreite, da sie durch Größenänderung des `<textarea>` geändert werden kann und mit CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, beträgt 20.
- [`rows`](/de/docs/Web/HTML/Element/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Element an. Dies ist effektiv die Starthöhe, da sie durch Größenänderung des `<textarea>` geändert werden kann und mit CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, beträgt 2.
- [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)
  - : Gibt an, wie das Element Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der eingereichte Text nicht umbrochen wird, während der im Browser gerenderte Text umbrochen wird; `hard` (das `cols`-Attribut muss bei Verwendung dieses Werts angegeben werden), was bedeutet, dass sowohl die eingereichten als auch die gerenderten Texte umbrochen werden, und `off`, was den Umbruch stoppt.

### Steuerung der Größenänderbarkeit des Textbereichs

Die Möglichkeit, ein `<textarea>` zu vergrößern oder zu verkleinern, wird durch die CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standardwert — erlaubt Größenänderung in horizontaler und vertikaler Richtung.
- `horizontal`: Erlaubt Größenänderung nur in horizontaler Richtung.
- `vertical`: Erlaubt Größenänderung nur in vertikaler Richtung.
- `none`: Erlaubt keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die es erlauben, nur in der `block`- oder `inline`-Richtung zu vergrößern bzw. zu verkleinern (dies variiert je nach Textausrichtung; lesen Sie [Umgang mit unterschiedlichen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions), wenn Sie mehr erfahren möchten).

Spielen Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite, um eine Demonstration zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl aus vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche zu beanspruchen. HTML verfügt über zwei Arten von Dropdown-Steuerelementen: die **Auswahlbox** und die **automatisch vervollständigte Box**. Die Interaktion ist bei beiden Arten von Dropdown-Steuerelementen gleich — nachdem das Steuerelement aktiviert wurde, zeigt der Browser eine Liste von Werten an, aus denen der Benutzer wählen kann.

> [!NOTE]
> Sie können Beispiele für alle Dropdown-Box-Typen auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Auswahlbox

Eine einfache Auswahlbox wird mit einem {{HTMLElement("select")}}-Element erstellt, das ein oder mehrere {{HTMLElement("option")}}-Elemente als Kinder hat, von denen jedes einen seiner möglichen Werte angibt.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banane</option>
  <option selected>Kirsche</option>
  <option>Zitrone</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für die Auswahlbox mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element festgelegt werden — diese Option wird dann beim Laden der Seite vorausgewählt.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachtelt werden, um visuell zusammengehörende Gruppen von Werten zu erstellen:

```html
<select id="groups" name="groups">
  <optgroup label="Früchte">
    <option>Banane</option>
    <option selected>Kirsche</option>
    <option>Zitrone</option>
  </optgroup>
  <optgroup label="Gemüse">
    <option>Karotte</option>
    <option>Aubergine</option>
    <option>Kartoffel</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("Using_optgroup", 120, 120)}}

Auf dem {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Element/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Die Browser stellen sie normalerweise visuell von den Optionen abgesetzt dar (d. h. fettgedruckt und auf einer anderen Einzugsebene), sodass sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizites `value`-Attribut hat, wird dieser Wert gesendet, wenn das Formular mit der ausgewählten Option abgeschickt wird. Wenn das `value`-Attribut weggelassen wird, wie bei den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. Es sind also keine `value`-Attribute notwendig, aber Sie könnten einen Grund haben wollen, einen verkürzten oder anderen Wert an den Server zu senden als den, der visuell in der Auswahlbox angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Große, schöne gelbe Banane</option>
  <option value="cherry">Saftige, juicy Kirsche</option>
  <option value="lemon">Scharfe, kraftvolle Zitrone</option>
</select>
```

Standardmäßig ist die Höhe der Auswahlbox ausreichend, um einen einzigen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut bietet die Kontrolle darüber, wie viele Optionen sichtbar sind, wenn die Auswahl nicht den Fokus hat.

### Mehrfachauswahlbox

Standardmäßig lässt eine Auswahlbox einen Benutzer nur einen Wert auswählen. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Sie Benutzern erlauben, mehrere Werte auszuwählen. Benutzer können mehrere Werte auswählen, indem sie den Standardmechanismus des Betriebssystems verwenden (z. B. auf dem Desktop durch Klicken auf mehrere Werte, während die <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Tasten gehalten werden).

```html
<select id="multi" name="multi" multiple size="2">
  <optgroup label="Früchte">
    <option>Banane</option>
    <option selected>Kirsche</option>
    <option>Zitrone</option>
  </optgroup>
  <optgroup label="Gemüse">
    <option>Karotte</option>
    <option>Aubergine</option>
    <option>Kartoffel</option>
  </optgroup>
</select>
```

{{EmbedLiveSample("Multiple_choice_select_box", 120, 120)}}

> [!NOTE]
> Im Fall von Mehrfachauswahlboxen werden Sie feststellen, dass die Auswahlbox die Werte nicht länger als Dropdown-Inhalte anzeigt — stattdessen werden alle Werte auf einmal in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut.

### Autocomplete-Box

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formularelemente bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit Kinder-{{HTMLElement("option")}}-Elementen verwenden, um die anzuzeigenden Werte anzugeben. Das `<datalist>` muss eine `id` erhalten.

Die Datenliste wird dann an ein {{htmlelement("input")}}-Element (z. B. ein `text`- oder `email`-Eingabetyp) mit dem [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut gebunden, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste mit einem Formularelement verbunden ist, werden ihre Optionen verwendet, um den vom Benutzer eingegebenen Text automatisch zu vervollständigen; typischerweise wird dies dem Benutzer als Dropdown-Liste mit möglichen Übereinstimmungen für das, was er in das Eingabefeld eingegeben hat, angezeigt.

#### Einfaches Beispiel

Schauen wir uns ein Beispiel an.

```html
<label for="myFruit">Was ist Ihr Lieblingsobst?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
<datalist id="mySuggestion">
  <option>Apfel</option>
  <option>Banane</option>
  <option>Brombeere</option>
  <option>Blaubeere</option>
  <option>Zitrone</option>
  <option>Litschi</option>
  <option>Pfirsich</option>
  <option>Birne</option>
</datalist>
```

{{EmbedLiveSample("Basic_example_2", 120, 120)}}

#### Weniger offensichtliche Verwendung von datalist

Laut [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe erfordert. Dies führt zu einigen Verwendungen, die möglicherweise ein wenig unauffällig erscheinen.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` für `range`-Eingabetypen unterstützen, oberhalb des Bereichs für jeden datalist-`{{htmlelement("option")}}`-Wert ein kleiner Kennzeichnungsstrich angezeigt. Sie können eine Implementierung [eines solchen Beispiels auf der `<input type="range">`-Referenzseite](/de/docs/Web/HTML/Element/input/range#adding_tick_marks) sehen.

Und Browser, die {{htmlelement('datalist')}} und [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) unterstützen, sollten eine benutzerdefinierte Farbpalette als Standard anzeigen, während gleichzeitig die vollständige Farbpalette verfügbar bleibt.

In diesem Fall verhalten sich verschiedene Browser von Fall zu Fall unterschiedlich, daher sollten solche Verwendungen als progressive Erweiterung betrachtet werden, und sicherstellen, dass sie ordentlich veralten.

## Andere Formularfunktionen

Es gibt einige andere Formularfunktionen, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber in einigen Situationen dennoch nützlich sein können, daher dachten wir, es wäre es wert, sie kurz zu erwähnen.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Zähler und Fortschrittsbalken

Zähler und Fortschrittsbalken sind visuelle Darstellungen von numerischen Werten. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Meter

Ein Zählerbalken repräsentiert einen festen Wert in einem durch [`max`](/de/docs/Web/HTML/Element/meter#max) und [`min`](/de/docs/Web/HTML/Element/meter#min) festgelegten Bereich. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die Werte [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) teilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereichs liegt zwischen den Werten [`min`](/de/docs/Web/HTML/Element/meter#min) und [`low`](/de/docs/Web/HTML/Element/meter#low), inklusive.
  - Der mittlere Teil des Bereichs liegt zwischen den Werten [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high), exklusiv.
  - Der höhere Teil des Bereichs liegt zwischen den Werten [`high`](/de/docs/Web/HTML/Element/meter#high) und [`max`](/de/docs/Web/HTML/Element/meter#max), inklusive.

- Der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. In Verbindung mit den Werten [`low`](/de/docs/Web/HTML/Element/meter#low) und [`high`](/de/docs/Web/HTML/Element/meter#high) wird definiert, welcher Teil des Bereichs bevorzugt wird:

  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im unteren Teil des Bereichs liegt, wird der untere Bereich als bevorzugt angesehen, der mittlere Bereich als durchschnittlich und der höhere Bereich als der schlechteste Teil.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im mittleren Teil des Bereichs liegt, wird der untere Bereich als durchschnittlicher Teil angesehen, der mittlere Bereich als bevorzugt, und der höhere Bereich ebenfalls als durchschnittlich.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Wert im höheren Teil des Bereichs liegt, wird der untere Bereich als der schlechteste Teil angesehen, der mittlere Bereich als durchschnittlicher und der höhere Bereich als bevorzugt.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe des Zählerbalkens zu ändern:

- Wenn der aktuelle Wert im bevorzugten Teil des Bereichs liegt, ist der Balken grün.
- Wenn der aktuelle Wert im durchschnittlichen Teil des Bereichs liegt, ist der Balken gelb.
- Wenn der aktuelle Wert im schlechtesten Teil des Bereichs liegt, ist der Balken rot.

Ein solcher Balken wird durch das {{HTMLElement("meter")}}-Element erstellt. Dies kann zur Implementierung jeder Art von Zähler verwendet werden, zum Beispiel ein Balken, der den gesamten belegten Speicherplatz auf einer Festplatte anzeigt, der rot wird, wenn er sich füllt.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt im {{HTMLElement("meter")}}-Element ist ein Fallback für Browser, die das Element nicht unterstützen, und für unterstützende Technologien, um es zu sprechen.

#### Fortschritt

Ein Fortschrittsbalken repräsentiert einen sich über die Zeit ändernden Wert bis zu einem maximalen durch das [`max`](/de/docs/Web/HTML/Element/progress#max)-Attribut angegebenen Wert. Ein solcher Balken wird durch das {{HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies dient zur Implementierung von allem, was eine Fortschrittsanzeige erfordert, wie zum Beispiel den Prozentsatz der heruntergeladenen Dateien oder die Anzahl der beantworteten Fragen in einem Fragebogen.

Der Inhalt im {{HTMLElement("progress")}}-Element ist ein Fallback für Browser, die das Element nicht unterstützen, und für Bildschirmlesegeräte, um es zu sprechen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Andere Steuerungen](/de/docs/Learn/Forms/Test_your_skills:_Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularelementen. Sie müssen sich nicht alle diese Details auf einmal merken und können so oft Sie möchten zu diesen Artikeln zurückkehren, um Details nachzuschlagen.

Da Sie nun die HTML-Grundlagen der verschiedenen verfügbaren Formularelemente kennen, werden wir uns ansehen, wie man [sie gestaltet](/de/docs/Learn/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn/Forms/HTML5_input_types","Learn/Forms/Styling_web_forms", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare senden über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
