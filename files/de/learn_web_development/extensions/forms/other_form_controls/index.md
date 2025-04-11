---
title: Andere Formularelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir schauen uns nun die Funktionalität von Formular-Elementen an, die keine `<input>`-Elemente sind, und zwar im Detail. Dazu gehören andere Steuerungstypen wie Dropdown-Listen und mehrzeilige Textfelder sowie andere nützliche Formularfunktionen wie das {{htmlelement('output')}}-Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
        Um die nicht-<code>&#x3C;input></code>-Formularfunktionen zu verstehen und wie
        man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird durch ein {{HTMLElement("textarea")}}-Element angegeben, anstatt das {{HTMLElement("input")}}-Element zu verwenden.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem regulären einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche einfügen können, die beim Absenden der Daten enthalten sind.

`<textarea>` hat auch einen abschließenden Tag; jeglicher Standardtext, den Sie enthalten möchten, sollte zwischen den öffnenden und schließenden Tags platziert werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "leeres Element")}} ohne abschließenden Tag – ein Standardwert wird im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angegeben.

Beachten Sie, dass Sie, obwohl Sie alles in ein `<textarea>`-Element einfügen können (einschließlich anderer HTML-Elemente, CSS und JavaScript), aufgrund seiner Natur alles als Klartextinhalt gerendert wird. (Die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf Nicht-Formular-Steuerelementen bietet eine API zum Erfassen von HTML/"reichhaltigem" Inhalt anstelle von Klartext).

Visuell wird der eingegebene Text umgebrochen und das Formularelement ist standardmäßig anpassbar. Die meisten Browser bieten einen Ziehgriff, mit dem Sie die Größe des Textbereichs vergrößern/verkleinern können.

Ein Beispiel für die Verwendung eines Textbereichs finden Sie in dem [Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Steuerung der mehrzeiligen Darstellung

{{htmlelement("textarea")}} akzeptiert drei Attribute zur Steuerung seiner Darstellung über mehrere Zeilen:

- [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)
  - : Gibt die sichtbare Breite (in Spalten) des Textsteuerfeldes an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist im Wesentlichen die Ausgangsbreite, da sie durch Ändern der Größe des `<textarea>` verändert werden kann und durch CSS überschrieben wird. Der Standardwert, wenn keiner angegeben ist, beträgt 20.
- [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Steuerfeld an. Dies ist im Wesentlichen die Ausgangshöhe, da sie durch Ändern der Größe des `<textarea>` verändert werden kann und durch CSS überschrieben wird. Der Standardwert, wenn keiner angegeben ist, beträgt 2.
- [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)
  - : Gibt an, wie das Steuerfeld Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der übermittelte Text nicht umbrochen wird, aber der vom Browser gerenderte Text umbrochen wird; `hard` (das `cols`-Attribut muss bei Verwendung dieses Wertes angegeben werden), was bedeutet, dass sowohl der übermittelte als auch der gerenderte Text umbrochen werden, und `off`, das das Umbruch stoppen lässt.

### Steuerung der Änderbarkeit von Textarea-Größen

Die Fähigkeit, die Größe eines `<textarea>` zu ändern, wird mit der CSS-Eigenschaft `resize` gesteuert. Ihre möglichen Werte sind:

- `both`: Der Standard — erlaubt Größenänderung horizontal und vertikal.
- `horizontal`: Erlaubt nur horizontale Größenänderung.
- `vertical`: Erlaubt nur vertikale Größenänderung.
- `none`: Erlaubt keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die es erlauben, nur in `block`- oder `inline`-Richtung zu vergrößern (dies variiert je nach Richtung Ihres Textes; lesen Sie [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), wenn Sie mehr darüber erfahren möchten.)

Spielen Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite, um eine Demonstration zu sehen, wie diese funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl aus vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche einzunehmen. HTML hat zwei Arten von Dropdown-Steuerelementen: das **Auswahlfeld** und das **Autocomplete-Feld**. Die Interaktion ist bei beiden Arten von Dropdown-Steuerelementen gleich — nach der Aktivierung des Steuerelements zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Sie können Beispiele für alle Arten von Dropdown-Feldern auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Auswahlfeld

Ein einfaches Auswahlfeld wird mit einem {{HTMLElement("select")}}-Element erstellt, das ein oder mehrere {{HTMLElement("option")}}-Elemente als seine Kinder hat, von denen jedes einen seiner möglichen Werte angibt.

#### Grundlegendes Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für das Auswahlfeld mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element festgelegt werden — diese Option ist dann voreingestellt, wenn die Seite geladen wird.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können in {{HTMLElement("optgroup")}}-Elemente verschachtelt werden, um visuell verbundene Gruppen von Werten zu erstellen:

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

Beim {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Reference/Elements/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser hebt sie normalerweise visuell von den Optionen ab (z. B. durch Fettschrift und auf einer anderen Verschachtelungsebene), damit sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des Value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizites `value`-Attribut gesetzt hat, wird dieser Wert gesendet, wenn das Formular mit dieser Option ausgewählt übermittelt wird. Wenn das `value`-Attribut weggelassen wird, wie in den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. `value`-Attribute sind also nicht erforderlich, aber Sie könnten einen Grund haben, einen verkürzten oder anderen Wert an den Server senden zu wollen, als der, der visuell im Auswahlfeld angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe des Auswahlfeldes so groß, dass ein einzelner Wert angezeigt wird. Das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut bietet die Kontrolle darüber, wie viele Optionen angezeigt werden, wenn das Auswahlfeld keinen Fokus hat.

### Auswahlfeld mit Mehrfachauswahl

Standardmäßig lässt ein Auswahlfeld einen Benutzer nur einen Wert auswählen. Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Sie Benutzern erlauben, mehrere Werte auszuwählen. Benutzer können mehrere Werte auswählen, indem sie den Standardmechanismus des Betriebssystems verwenden (z. B. können auf dem Desktop mehrere Werte durch Klicken und Halten der <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Tasten ausgewählt werden).

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
> Im Fall von Auswahlfeldern mit Mehrfachauswahl werden Sie feststellen, dass das Auswahlfeld die Werte nicht mehr als Dropdown-Inhalt anzeigt — stattdessen werden alle Werte auf einmal in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut.

### Autocomplete-Feld

Sie können vorgeschlagene, automatisch vervollständigte Werte für Formular-Widgets mit dem {{HTMLElement("datalist")}}-Element bereitstellen, das untergeordnete {{HTMLElement("option")}}-Elemente zur Spezifikation der anzuzeigenden Werte hat. Das `<datalist>` benötigt eine `id`.

Die Datenliste wird dann mit einem {{htmlelement("input")}}-Element (z. B. ein `text`- oder `email`-Eingabetyp) unter Verwendung des [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attributs verknüpft, dessen Wert die `id` der zuzuordnenden Datenliste ist.

Sobald eine Datenliste mit einem Formular-Widget verbunden ist, werden ihre Optionen verwendet, um den vom Benutzer eingegebenen Text automatisch zu vervollständigen; typischerweise wird dies dem Benutzer als Dropdown-Liste möglicher Übereinstimmungen für das, was er in das Eingabefeld eingegeben hat, präsentiert.

#### Grundlegendes Beispiel

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

Laut [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, das eine Benutzereingabe erfordert. Dies führt zu einigen Verwendungen, die etwas weniger offensichtlich erscheinen mögen.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` bei `range`-Eingabetypen unterstützen, eine kleine Markierung über dem Bereich für jeden `{{htmlelement("option")}}`-Wert der Datalist angezeigt. Sie können eine Implementierung [dieses Beispiels auf der `<input type="range">`-Referenzseite sehen](/de/docs/Web/HTML/Reference/Elements/input/range#adding_tick_marks).

Und Browser, die {{htmlelement('datalist')}}s und [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützen, sollten eine angepasste Farbpalette als Standard anzeigen, während die vollständige Farbpalette weiterhin verfügbar ist.

In diesem Fall verhalten sich verschiedene Browser unterschiedlich, so dass Sie solche Verwendungen als progressive Verbesserung betrachten und sicherstellen sollten, dass sie sich anpassen, wenn sie nicht unterstützt werden.

## Andere Formularfunktionen

Es gibt noch einige andere Formularfunktionen, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber dennoch in einigen Situationen nützlich sein können, daher hielten wir es für sinnvoll, sie kurz zu erwähnen.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub unter [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Messgeräte und Fortschrittsbalken

Messgeräte und Fortschrittsbalken sind visuelle Darstellungen von Zahlenwerten. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Messgerät

Ein Messbalken stellt einen festen Wert in einem durch [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) und [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) begrenzten Bereich dar. Dieser Wert wird visuell als Balken dargestellt, und um zu wissen, wie dieser Balken aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die Werte [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) teilen den Bereich in die folgenden drei Teile:

  - Der untere Teil des Bereichs liegt zwischen den Werten [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) und [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low), einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den Werten [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high), ausschließlich.
  - Der obere Teil des Bereichs liegt zwischen den Werten [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) und [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max), einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. Zusammen mit den Werten [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low) und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high) definiert es, welcher Teil des Bereichs bevorzugt wird:

  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im unteren Teil des Bereichs liegt, wird der untere Bereich als der bevorzugte Teil angesehen, der mittlere Bereich als der durchschnittliche Teil und der obere Bereich als der schlechteste Teil betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im mittleren Teil des Bereichs liegt, wird der untere Bereich als durchschnittlicher Teil angesehen, der mittlere Bereich als bevorzugter Teil und der obere Bereich ebenfalls als durchschnittlicher Teil betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im oberen Teil des Bereichs liegt, wird der untere Bereich als der schlechteste Teil angesehen, der mittlere Bereich als der durchschnittliche Teil und der obere Bereich als bevorzugter Teil betrachtet.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe des Messbalkens zu ändern:

- Wenn der aktuelle Wert im bevorzugten Teil des Bereichs liegt, ist der Balken grün.
- Wenn der aktuelle Wert im durchschnittlichen Teil des Bereichs liegt, ist der Balken gelb.
- Wenn der aktuelle Wert im schlechtesten Teil des Bereichs liegt, ist der Balken rot.

Ein solcher Balken wird durch das {{HTMLElement("meter")}}-Element erstellt. Dies dient zur Implementierung einer beliebigen Art von Messgerät; zum Beispiel ein Balken, der den insgesamt genutzten Speicherplatz auf einer Festplatte anzeigt, der rot wird, wenn er anfängt, voll zu werden.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für unterstützende Technologien, um es zu verlautbaren.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der im Laufe der Zeit bis zu einem durch das [`max`](/de/docs/Web/HTML/Reference/Elements/progress#max)-Attribut angegebenen Höchstwert ändert. Ein solcher Balken wird mit einem {{ HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies dient zur Implementierung von allem, was Fortschrittsberichte erfordert, wie beispielsweise dem Prozentsatz der heruntergeladenen Dateien oder der Anzahl der in einem Fragebogen ausgefüllten Fragen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für Screenreader, um es zu verlautbaren.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Weitere Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Other_controls).

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formularelementen. Sie müssen diese Details nicht sofort alle behalten und können so oft wie nötig zu diesen Artikeln zurückkehren, um Einzelheiten nachzuschlagen.

Nun, da Sie ein Verständnis des HTML hinter den verschiedenen verfügbaren Formularelementen haben, werden wir uns anschauen, [wie man sie stylt](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
