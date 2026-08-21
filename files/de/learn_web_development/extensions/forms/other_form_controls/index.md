---
title: Andere Formularelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir betrachten nun die Funktionalität von nicht-`<input>`-Formularelementen im Detail, von anderen Steuerelementtypen wie Dropdown-Listen und mehrzeiligen Textfeldern bis hin zu anderen nützlichen Formularfunktionen wie dem {{htmlelement('output')}}-Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
        Die nicht-<code>&#x3C;input></code> Formulareigenschaften zu verstehen und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element angegeben, anstatt das {{HTMLElement("input")}}-Element zu verwenden.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt wiedergegeben:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem regulären einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche (d.h. durch Drücken der Eingabetaste) einschließen dürfen, die beim Senden der Daten enthalten werden.

`<textarea>` benötigt auch ein schließendes Tag; jeder Standardtext, der enthalten sein soll, sollte zwischen den öffnenden und schließenden Tags platziert werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "leeres Element")}} ohne schließendes Tag — ein Standardwert wird innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs platziert.

Beachten Sie, dass, obwohl Sie in ein `<textarea>`-Element alles einfügen können (einschließlich anderer HTML-Elemente, CSS und JavaScript), es aufgrund seiner Natur alles so dargestellt wird, als wäre es reiner Textinhalt. (Die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) bei Nicht-Formularsteuerelementen bietet eine API zum Erfassen von HTML/"rich"-Inhalten anstelle von reinem Text).

Visuell umbricht der eingegebene Text und das Formularelement ist standardmäßig skalierbar. Die meisten Browser bieten einen Ziehgriff, den Sie ziehen können, um die Größe des Textbereichs zu erhöhen/verringern.

Ein Beispiel für die Verwendung eines Textbereichs finden Sie im [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel dieses Moduls zusammengestellt haben.

### Mehrzeiliges Rendering steuern

{{htmlelement("textarea")}} akzeptiert drei Attribute, um seine Darstellung über mehrere Zeilen zu steuern:

- [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) der Texteinheit an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Startbreite, da sie durch Skalierung des `<textarea>` geändert und mittels CSS überschrieben werden kann. Der Standardwert, falls keiner angegeben ist, beträgt 20.
- [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)
  - : Gibt die Anzahl sichtbarer Textzeilen für das Steuerelement an. Dies ist effektiv die Anfangshöhe, da sie durch Skalierung des `<textarea>` geändert und mittels CSS überschrieben werden kann. Der Standardwert, falls keiner angegeben ist, beträgt 2.
- [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)
  - : Gibt an, wie das Steuerelement Text umbrechen soll. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übermittelte Text nicht umbrochen wird, aber der im Browser gerenderte Text umbrochen wird; `hard` (das `cols`-Attribut muss bei Verwendung dieses Wertes angegeben werden), was bedeutet, dass sowohl der übermittelte als auch gerenderte Text umbrochen werden, und `off`, was das Umgehen beendet.

### Steuerung der Größenänderbarkeit von Textbereichen

Die Fähigkeit, die Größe eines `<textarea>` zu ändern, wird mit der CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standardwert — ermöglicht das Skalieren horizontal und vertikal.
- `horizontal`: Ermöglicht nur horizontale Größenänderung.
- `vertical`: Ermöglicht nur vertikale Größenänderung.
- `none`: Ermöglicht keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die Größenänderung nur in der `block`- oder `inline`-Richtung erlauben (dies variiert je nach Richtung Ihres Textes; lesen Sie [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), wenn Sie mehr erfahren möchten).

Probieren Sie das interaktive Beispiel oben auf der {{cssxref("resize")}}-Referenzseite aus, um eine Demonstration zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl aus vielen Optionen zu ermöglichen, ohne zu viel Platz in der Benutzeroberfläche zu beanspruchen. HTML bietet zwei Arten von Dropdown-Steuerelementen: das **Auswahlfeld** und das **Autovervollständigungsfeld**. Die Interaktion ist bei beiden Arten gleich — nach Aktivierung des Steuerelements zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Sie finden Beispiele für alle Arten von Dropdown-Feldern auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

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

Falls erforderlich, kann der Standardwert für das Auswahlfeld mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element festgelegt werden — diese Option ist dann beim Laden der Seite vorausgewählt.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können innerhalb von {{HTMLElement("optgroup")}}-Elementen eingebettet werden, um visuell zugeordneten Gruppen von Werten zu erstellen:

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

Bei dem {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Reference/Elements/optgroup#label)-Attributs angezeigt, bevor die Werte der eingebetteten Optionen angezeigt werden. Der Browser stellt sie normalerweise visuell von den Optionen abstechend dar (z. B. fett und auf einer anderen Einzugsebene), um Verwechslungen mit tatsächlichen Optionen zu vermeiden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizit gesetztes `value`-Attribut besitzt, wird dieser Wert gesendet, wenn das Formular mit dieser ausgewählten Option übermittelt wird. Wenn das `value`-Attribut weggelassen wird, wie bei den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. `value`-Attribute sind also nicht notwendig, aber Sie könnten einen Grund finden, einen verkürzten oder anderen Wert an den Server zu senden, als der, der visuell im Auswahlfeld angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe des Auswahlfeldes ausreichend, um einen einzigen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut bietet Kontrolle darüber, wie viele Optionen sichtbar sind, wenn das Auswahlfeld nicht den Fokus hat.

### Mehrfachauswahl-Auswahlfeld

Standardmäßig erlaubt ein Auswahlfeld dem Benutzer, nur einen Wert auszuwählen. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Sie es Benutzern ermöglichen, mehrere Werte auszuwählen. Benutzer können mehrere Werte auswählen, indem sie den standardmäßigen Mechanismus des Betriebssystems verwenden (z. B. auf dem Desktop können mehrere Werte durch Klicken bei gleichzeitigem Gedrückthalten der <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Tasten ausgewählt werden).

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
> Im Fall von Mehrfachauswahl-Auswahlfeldern werden Sie feststellen, dass das Auswahlfeld die Werte nicht mehr als Dropdown-Inhalt anzeigt — stattdessen werden alle Werte gleichzeitig in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut.

### Autovervollständigungsfeld

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formularelemente mittels des {{HTMLElement("datalist")}}-Elements mit Kind-{{HTMLElement("option")}}-Elementen angeben, um die anzuzeigenden Werte zu bestimmen. Das `<datalist>` muss eine `id` erhalten.

Die Datenliste wird dann an ein {{htmlelement("input")}}-Element (z. B. ein `text`- oder `email`-Input-Typ) gebunden, indem das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verwendet wird, dessen Wert die `id` der zu bindenden Datenliste ist.

Sobald eine Datenliste mit einem Formularelement verknüpft ist, werden ihre Optionen verwendet, um den Benutzern eingegebenen Text automatisch zu vervollständigen; in der Regel wird dies dem Benutzer als Dropdown-Liste mit möglichen Übereinstimmungen zu dem, was er in das Eingabefeld eingegeben hat, präsentiert.

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

Gemäß [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Eingabesteuerelement verwendet werden, das Benutzereingabe erfordert. Dies führt zu einigen Anwendungen, die möglicherweise ein wenig unauffällig erscheinen.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` bei `range`-Eingabetypen unterstützen, über dem Bereich ein kleiner Tick für jeden `{{htmlelement("option")}}`-Wert der Datenliste angezeigt. Sie können eine Implementierung [dieses Beispiels auf der Referenzseite `<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range#adding_tick_marks) einsehen.

Und Browser, die {{htmlelement('datalist')}} und [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützen, sollten eine angepasste Palette von Farben als Standard anzeigen, während die vollständige Farbauswahl dennoch verfügbar bleibt.

In diesem Fall verhalten sich verschiedene Browser in unterschiedlichen Situationen unterschiedlich, daher sollten solche Anwendungen als progressive Verbesserung betrachtet werden und sicherstellen, dass sie sich ansprechend anpassen.

## Weitere Formulareigenschaften

Es gibt einige weitere Formulareigenschaften, die nicht so offensichtlich wie die bereits erwähnten sind, aber trotzdem in manchen Situationen nützlich sein können. Daher halten wir es für lohnenswert, ihnen eine kurze Erwähnung zu geben.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub unter [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Messgeräte und Fortschrittsbalken

Messgeräte und Fortschrittsbalken sind visuelle Darstellungen numerischer Werte. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Messgerät

Ein Messbalken stellt einen festen Wert in einem von [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) und [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) abgegrenzten Bereich dar. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die Werte [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) teilen den Bereich in die folgenden drei Teile:
  - Der untere Teil des Bereichs liegt zwischen den Werten [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) und [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low), einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den Werten [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high), ausschließlich.
  - Der obere Teil des Bereichs liegt zwischen den Werten [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) und [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max), einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. In Verbindung mit den Werten [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) definiert er, welcher Teil des Bereichs bevorzugt wird:
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im unteren Teil des Bereichs liegt, wird der untere Bereich als der bevorzugte Teil angesehen, der mittlere Bereich als der durchschnittliche Teil und der obere Bereich als der schlechteste Teil.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im mittleren Teil des Bereichs liegt, wird der untere Bereich als durchschnittlicher Teil, der mittlere Bereich als bevorzugter Teil und der obere Bereich ebenfalls als durchschnittlich angesehen.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im oberen Teil des Bereichs liegt, wird der untere Bereich als der schlechteste Teil, der mittlere Bereich als der durchschnittliche Teil und der obere Bereich als der bevorzugte Teil angesehen.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe des Messbalkens zu ändern:

- Wenn der aktuelle Wert im bevorzugten Teil des Bereichs liegt, ist der Balken grün.
- Wenn der aktuelle Wert im durchschnittlichen Teil des Bereichs liegt, ist der Balken gelb.
- Wenn der aktuelle Wert im schlechtesten Teil des Bereichs liegt, ist der Balken rot.

Ein solcher Balken wird durch die Verwendung des {{HTMLElement("meter")}}-Elements erstellt. Dies ist für die Implementierung jeder Art von Messgerät gedacht; zum Beispiel ein Balken, der den gesamten Speicherplatz auf einer Festplatte anzeigt, der rot wird, wenn er voll zu werden beginnt.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements dient als Fallback für Browser, die das Element nicht unterstützen und für unterstützende Technologien, um es zu vokalisieren.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der sich im Laufe der Zeit bis zu einem maximalen Wert ändert, der durch das [`max`](/de/docs/Web/HTML/Reference/Elements/progress#max)-Attribut angegeben wird. Ein solcher Balken wird durch die Verwendung eines {{ HTMLElement("progress")}}-Elements erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies ist für die Implementierung von allem gedacht, was Fortschrittsanzeige erfordert, wie der Prozentsatz der heruntergeladenen Gesamtdateien oder die Anzahl der ausgefüllten Fragen in einem Fragebogen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements dient als Fallback für Browser, die das Element nicht unterstützen, und für Bildschirmleser, um es zu vokalisieren.

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularelementen. Sie müssen sich nicht alle diese Details auf einmal merken und können jederzeit zu diesen Artikeln zurückkehren, so oft Sie möchten, um Details nachzuschlagen.

Da Sie nun ein Verständnis für das HTML hinter den verschiedenen verfügbaren Formularelementen haben, werden wir uns ansehen, [wie man sie gestaltet](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
