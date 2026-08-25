---
title: Andere Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Nun betrachten wir die Funktionalität von Formular-Elementen, die keine `<input>`-Elemente sind, im Detail. Diese reichen von anderen Steuerelementen wie Dropdown-Listen und mehrzeiligen Textfeldern bis hin zu nützlichen Formularfunktionen wie dem {{htmlelement('output')}}-Element (welches wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
        Das Verständnis von Formularfunktionen, die keine <code>&#x3C;input></code>-Elemente sind, und deren Implementierung mithilfe von HTML.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element spezifiziert, anstatt das {{HTMLElement("input")}}-Element zu verwenden.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies rendert sich wie folgt:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem regulären einzeiligen Textfeld ist, dass es Benutzern erlaubt ist, harte Zeilenumbrüche (d.h. durch Drücken der Eingabetaste) einzufügen, die beim Senden der Daten eingeschlossen werden.

`<textarea>` benötigt auch einen schließenden Tag; jeder Standardtext, den Sie enthalten möchten, sollte zwischen den öffnenden und schließenden Tags platziert werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "void element")}} ohne schließenden Tag — jeder Standardwert wird im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut platziert.

Beachten Sie, dass, obwohl Sie alles innerhalb eines `<textarea>`-Elements einfügen können (einschließlich anderer HTML-Elemente, CSS und JavaScript), es aufgrund seiner Natur alles so gerendert wird, als ob es reiner Textinhalt wäre. (Mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf Nicht-Formular-Steuerelementen wird eine API bereitgestellt, um HTML/"rich"-Inhalte anstelle von einfachem Text zu erfassen).

Visuell wird der eingegebene Text umbrochen und das Steuerelement ist standardmäßig skalierbar. Die meisten Browser bieten einen Ziehgriff, den Sie ziehen können, um die Größe des Textbereichs zu erhöhen oder zu verringern.

### Steuerung der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute zur Steuerung seiner Darstellung über mehrere Zeilen hinweg:

- [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) des Textsteuerelements an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Anfangsbreite, da sie durch Ändern der Größe des `<textarea>` geändert und durch CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, ist 20.
- [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Steuerelement an. Dies ist effektiv die Anfangshöhe, da sie durch Ändern der Größe des `<textarea>` geändert und durch CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, ist 2.
- [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)
  - : Bestimmt, wie das Steuerelement Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übermittelte Text nicht umbrochen wird, der von Browser gerenderte Text jedoch umbrochen wird; `hard` (das `cols`-Attribut muss beim Verwenden dieses Wertes angegeben werden), was bedeutet, dass sowohl der übermittelte als auch gerenderte Text umbrochen wird, und `off`, was das Umwickeln stoppt.

### Steuerung der Skalierbarkeit von Textareas

Die Möglichkeit, die Größe eines `<textarea>` zu ändern, wird mit der CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standardwert — erlaubt das horizontale und vertikale Skalieren.
- `horizontal`: Erlaubt nur das horizontale Skalieren.
- `vertical`: Erlaubt nur das vertikale Skalieren.
- `none`: Erlaubt keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die das Skalieren nur in der `block`- oder `inline`-Richtung erlauben (dies variiert je nach Richtung Ihres Textes; lesen Sie [Handling different text directions](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), um mehr zu erfahren).

Spielen Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite, um zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl aus vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche zu beanspruchen. HTML hat zwei Arten von Dropdown-Steuerelementen: die **Auswahlbox** und die **Automatische Vervollständigungsbox**. Die Interaktion ist bei beiden Arten von Dropdown-Steuerelementen gleich — nach der Aktivierung des Steuerelements zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

### Auswahlbox

Eine einfache Auswahlbox wird mit einem {{HTMLElement("select")}}-Element erstellt, das eines oder mehrere {{HTMLElement("option")}}-Elemente als untergeordnete Elemente enthält, wobei jedes eine seiner möglichen Werte spezifiziert.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für die Auswahlbox mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element festgelegt werden — diese Option ist dann beim Laden der Seite vorausgewählt.

#### Verwendung von optgroup

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

Auf dem {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Reference/Elements/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser stellt sie normalerweise visuell von den Optionen getrennt dar (z. B. fett dargestellt und auf einer anderen Verschachtelungsebene), sodass sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizites `value`-Attribut hat, wird dieser Wert übertragen, wenn das Formular mit dieser Option gesendet wird. Wenn das `value`-Attribut weggelassen wird, wie bei den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. `value`-Attribute sind also nicht erforderlich, aber Sie könnten einen Grund finden, einen verkürzten oder anderen Wert an den Server zu senden als den, der visuell in der Auswahlbox angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe der Auswahlbox ausreichend, um einen einzelnen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut bietet Kontrolle darüber, wie viele Optionen sichtbar sind, wenn die Auswahl keinen Fokus hat.

### Mehrfachauswahl-Auswahlbox

Standardmäßig lässt eine Auswahlbox nur die Auswahl eines Wertes durch den Benutzer zu. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Benutzer mehrere Werte auswählen. Benutzer können mehrere Werte auswählen, indem sie den vom Betriebssystem bereitgestellten Standardmechanismus verwenden (z. B. können auf dem Desktop mehrere Werte angeklickt werden, während die <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Tasten gedrückt gehalten werden).

```html
<select id="multi" name="multi" multiple size="3">
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
> Bei Mehrfachauswahl-Auswahlboxen werden die Werte nicht mehr als Dropdown-Inhalt angezeigt — stattdessen werden alle Werte gleichzeitig in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut.

### Autovervollständigungsbox

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formularelemente mit dem {{HTMLElement("datalist")}}-Element mit Kind-{{HTMLElement("option")}}-Elementen bereitstellen, um die anzuzeigenden Werte zu spezifizieren. Das `<datalist>` muss eine `id` erhalten.

Die Datenliste wird dann mit einem {{htmlelement("input")}}-Element (z. B. ein `text`- oder `email`-Eingabetyp) unter Verwendung des [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attributs verknüpft, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste mit einem Formularelement verbunden ist, werden ihre Optionen verwendet, um den vom Benutzer eingegebenen Text automatisch zu vervollständigen; typischerweise wird dem Benutzer dies als Dropdown-Liste möglicher Übereinstimmungen für das, was er ins Eingabefeld getippt hat, präsentiert.

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

#### Weniger offensichtliche Anwendungen von datalist

Gemäß [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe erfordert. Dies führt zu einigen Anwendungen, die weniger offensichtlich erscheinen mögen.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` bei `range`-Eingabetypen unterstützen, ein kleiner Häkchen über dem Bereich für jeden datalist-`{{htmlelement("option")}}`-Wert angezeigt. Sie können eine Implementierung [eines solchen Beispiels auf der `<input type="range">`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/input/range#adding_tick_marks) sehen.

Und Browser, die {{htmlelement('datalist')}}s und [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützen, sollten eine angepasste Farbpalette als Standard anzeigen, während weiterhin die volle Farbpalette verfügbar bleibt.

In diesen Fällen verhalten sich verschiedene Browser unterschiedlich, je nach Fall. Betrachten Sie solche Anwendungen als progressive Verbesserung und stellen Sie sicher, dass sie anmutig verschlechtert werden.

## Weitere Formularfunktionen

Es gibt einige andere Formularfunktionen, die nicht so offensichtlich wie die bereits erwähnten sind, aber dennoch in einigen Situationen nützlich sind, daher dachten wir, es wäre sinnvoll, sie kurz zu erwähnen.

### Messgeräte und Fortschrittsbalken

Messgeräte und Fortschrittsbalken (erstellt mit den {{HTMLElement("meter")}} und {{HTMLElement("progress")}}-Elementen) sind visuelle Darstellungen von numerischen Werten.

#### Messgerät

Ein Messbalken stellt einen festen Wert in einem durch [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) und [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) begrenzten Bereich dar. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die Werte [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) teilen den Bereich in die folgenden drei Teile:
  - Der untere Teil des Bereichs liegt zwischen den Werten [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) und [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low), einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den Werten [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high), ausschließlich.
  - Der obere Teil des Bereichs liegt zwischen den Werten [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) und [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max), einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. In Verbindung mit dem [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low)- und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high)-Wert definiert er, welcher Teil des Bereichs bevorzugt wird:
  - Befindet sich der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im unteren Teil des Bereichs, wird der untere Bereich als der bevorzugte Teil betrachtet, der mittlere Bereich wird als der durchschnittliche Teil betrachtet und der obere Bereich wird als der schlechteste Teil betrachtet.
  - Befindet sich der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im mittleren Teil des Bereichs, wird der untere Bereich als durchschnittlicher Teil, der mittlere Bereich als bevorzugter Teil und der obere Bereich ebenfalls als durchschnittlich betrachtet.
  - Befindet sich der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im oberen Teil des Bereichs, wird der untere Bereich als der schlechteste Teil, der mittlere Bereich als der durchschnittliche Teil und der obere Bereich als der bevorzugte Teil betrachtet.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe des Messbalkens zu ändern:

- Befindet sich der aktuelle Wert im bevorzugten Teil des Bereichs, ist der Balken grün.
- Befindet sich der aktuelle Wert im durchschnittlichen Teil des Bereichs, ist der Balken gelb.
- Befindet sich der aktuelle Wert im schlechtesten Teil des Bereichs, ist der Balken rot.

Ein solcher Balken wird mit dem {{HTMLElement("meter")}}-Element erstellt. Dies ist nützlich, um eine Art von Messgerät zu implementieren; zum Beispiel einen Balken, der den insgesamt genutzten Speicherplatz auf einer Festplatte anzeigt, der rot wird, wenn er beginnt, sich zu füllen.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements dient als Fallback für Browser, die das Element nicht unterstützen, und für unterstützende Technologien, um es zu verlesen.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der sich im Laufe der Zeit bis zu einem maximalen Wert ändert, der durch das [`max`](/de/docs/Web/HTML/Reference/Elements/progress#max)-Attribut angegeben wird. Ein solcher Balken wird mit einem {{HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies ist zur Implementierung von allem, was Fortschrittsberichte erfordert, wie der Prozentsatz der insgesamt heruntergeladenen Dateien oder die Anzahl der beantworteten Fragen in einem Fragebogen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements dient als Fallback für Browser, die das Element nicht unterstützen, und für Screenreader, um es zu verlesen.

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularsteuerelementen. Sie müssen sich nicht alle diese Details sofort merken und können auf diese Artikel so oft zurückgreifen, wie Sie möchten, um sich über Details zu informieren.

Jetzt, da Sie ein Verständnis für das HTML bezüglich der verschiedenen verfügbaren Formularsteuerelemente haben, werfen wir einen Blick darauf, [wie man sie gestaltet](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
