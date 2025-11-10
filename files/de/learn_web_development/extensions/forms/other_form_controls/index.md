---
title: Andere Formular-Steuerelemente
slug: Learn_web_development/Extensions/Forms/Other_form_controls
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}

Wir schauen uns jetzt die Funktionalität von nicht-`<input>` Formular-Elementen im Detail an, von anderen Steuerelementtypen wie Dropdown-Listen und mehrzeiligen Textfeldern bis hin zu weiteren nützlichen Formularfunktionen wie dem {{htmlelement('output')}}-Element (das wir im vorherigen Artikel in Aktion gesehen haben) und Fortschrittsbalken.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Das Verständnis für die nicht-<code>&#x3C;input></code> Formularfunktionen und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

## Mehrzeilige Textfelder

Ein mehrzeiliges Textfeld wird mit einem {{HTMLElement("textarea")}}-Element angegeben, statt mit dem {{HTMLElement("input")}}-Element.

```html
<textarea cols="30" rows="8"></textarea>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Multi-line_text_fields", 120, 160)}}

Der Hauptunterschied zwischen einem `<textarea>` und einem normalen einzeiligen Textfeld besteht darin, dass Benutzer harte Zeilenumbrüche einfügen können (d.h. 'Return' drücken), die beim Absenden der Daten enthalten sind.

`<textarea>` erfordert auch einen schließenden Tag; jeglicher Standardtext, den Sie enthalten möchten, sollte zwischen den öffnenden und schließenden Tags eingefügt werden. Im Gegensatz dazu ist das {{HTMLElement("input")}} ein {{Glossary("void_element", "void element")}} ohne schließenden Tag — ein Standardwert wird im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angegeben.

Beachten Sie, dass Sie zwar in ein `<textarea>`-Element alles einfügen können (einschließlich anderer HTML-Elemente, CSS und JavaScript), aufgrund seiner Natur wird dies alles als reiner Textinhalt gerendert. (Die Verwendung von [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf Nicht-Formularsteuerungen bietet eine API zum Erfassen von HTML/"reichhaltigem" Inhalt anstelle von reinem Text).

Visuell wird der eingegebene Text umgebrochen und das Steuerelement kann standardmäßig in der Größe angepasst werden. Die meisten Browser bieten einen Ziehgriff, den Sie ziehen können, um die Größe des Textbereichs zu vergrößern oder zu verkleinern.

Ein Beispiel für die Verwendung eines Textbereichs finden Sie in [unserem Beispiel](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html), das wir im ersten Artikel zusammengestellt haben.

### Steuerung des mehrzeiligen Renderings

{{htmlelement("textarea")}} akzeptiert drei Attribute zur Steuerung seines Renderings über mehrere Zeilen:

- [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)
  - : Gibt die sichtbare Breite (Spalten) des Text-Steuerelements an, gemessen in durchschnittlichen Zeichenbreiten. Dies ist effektiv die Anfangsbreite, da sie durch Anpassen der Größe des `<textarea>` verändert und mittels CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, beträgt 20.
- [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)
  - : Gibt die Anzahl der sichtbaren Textzeilen für das Steuerelement an. Dies ist effektiv die Anfangshöhe, da sie durch Anpassen der Größe des `<textarea>` verändert und mittels CSS überschrieben werden kann. Der Standardwert, wenn keiner angegeben ist, beträgt 2.
- [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)
  - : Gibt an, wie das Steuerelement Text umbricht. Die Werte sind `soft` (der Standardwert), was bedeutet, dass der gesendete Text nicht umbrochen wird, aber der vom Browser angezeigte Text umgebrochen wird; `hard` (das `cols`-Attribut muss bei Verwendung dieses Wertes angegeben werden), was bedeutet, dass sowohl der gesendete als auch der angezeigte Text umbrochen werden, und `off`, was den Umbruch stoppt.

### Steuerung der Änderungen der Größe des Textbereichs

Die Möglichkeit, die Größe eines `<textarea>` zu ändern, wird mit der CSS-Eigenschaft `resize` gesteuert. Mögliche Werte sind:

- `both`: Der Standardwert — erlaubt das Ändern der Größe sowohl horizontal als auch vertikal.
- `horizontal`: Ermöglicht das Ändern der Größe nur horizontal.
- `vertical`: Ermöglicht das Ändern der Größe nur vertikal.
- `none`: Ermöglicht keine Größenänderung.
- `block` und `inline`: Experimentelle Werte, die eine Größenänderung nur in der `block` oder `inline` Richtung erlauben (dies variiert je nach der Richtung des Textes; lesen Sie [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions), wenn Sie mehr erfahren möchten).

Spielen Sie mit dem interaktiven Beispiel oben auf der {{cssxref("resize")}}-Referenzseite für eine Demonstration, wie diese Werte funktionieren.

## Dropdown-Steuerelemente

Dropdown-Steuerelemente sind eine einfache Möglichkeit, Benutzern die Auswahl aus vielen Optionen zu ermöglichen, ohne viel Platz in der Benutzeroberfläche einzunehmen. HTML verfügt über zwei Arten von Dropdown-Steuerelementen: die **Auswahlliste** und die **Autovervollständigungsliste**. Die Interaktion ist bei beiden Arten von Dropdown-Steuerelementen gleich — nachdem das Steuerelement aktiviert wurde, zeigt der Browser eine Liste von Werten an, aus denen der Benutzer auswählen kann.

> [!NOTE]
> Sie finden Beispiele für alle Arten von Dropdown-Boxen auf GitHub unter [drop-down-content.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/drop-down-content.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html)).

### Auswahlliste

Eine einfache Auswahlliste wird mit einem {{HTMLElement("select")}}-Element erstellt, das ein oder mehrere {{HTMLElement("option")}}-Elemente als Kinder hat, von denen jedes eine seiner möglichen Werte angibt.

#### Einfaches Beispiel

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

{{EmbedLiveSample("Basic_example", 120, 120)}}

Falls erforderlich, kann der Standardwert für die Auswahlliste mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut auf dem gewünschten {{HTMLElement("option")}}-Element festgelegt werden — diese Option ist dann beim Laden der Seite voreingestellt.

#### Verwendung von optgroup

Die {{HTMLElement("option")}}-Elemente können innerhalb von {{HTMLElement("optgroup")}}-Elementen verschachtelt werden, um visuell zugeordnete Gruppen von Werten zu erstellen:

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

Beim {{HTMLElement("optgroup")}}-Element wird der Wert des [`label`](/de/docs/Web/HTML/Reference/Elements/optgroup#label)-Attributs vor den Werten der verschachtelten Optionen angezeigt. Der Browser hebt sie normalerweise visuell von den Optionen ab (z.B. durch Fettdruck oder eine andere Verschachtelungsebene), sodass sie weniger wahrscheinlich mit tatsächlichen Optionen verwechselt werden.

#### Verwendung des value-Attributs

Wenn ein {{HTMLElement("option")}}-Element ein explizites `value`-Attribut hat, wird dieser Wert gesendet, wenn das Formular mit dieser Option als ausgewählt übermittelt wird. Wenn das `value`-Attribut weggelassen wird, wie in den obigen Beispielen, wird der Inhalt des {{HTMLElement("option")}}-Elements als Wert verwendet. `value`-Attribute sind also nicht nötig, aber Sie können einen Grund finden, einen kürzeren oder anderen Wert an den Server senden zu wollen als den, der in der Auswahlliste angezeigt wird.

Zum Beispiel:

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Standardmäßig ist die Höhe der Auswahlliste ausreichend, um einen einzigen Wert anzuzeigen. Das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut ermöglicht die Kontrolle darüber, wie viele Optionen sichtbar sind, wenn die Auswahlliste nicht im Fokus ist.

### Mehrfachauswahlliste

Standardmäßig erlaubt eine Auswahlliste nur die Auswahl eines einzigen Wertes. Durch das Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attributs zum {{HTMLElement("select")}}-Element können Sie Benutzern die Auswahl mehrerer Werte ermöglichen. Benutzer können mehrere Werte auswählen, indem sie den Standardmechanismus des Betriebssystems verwenden (z.B. können auf dem Desktop beim Drücken von <kbd>Cmd</kbd>/<kbd>Strg</kbd> mehrere Werte angeklickt werden).

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
> Bei den Mehrfachauswahllisten werden die Werte nicht mehr als Dropdown-Inhalte angezeigt - stattdessen werden alle Werte in einer Liste angezeigt, wobei das optionale [`size`](/de/docs/Web/HTML/Reference/Attributes/size)-Attribut die Höhe des Widgets bestimmt.

> [!NOTE]
> Alle Browser, die das {{HTMLElement("select")}}-Element unterstützen, unterstützen auch das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut.

### Autovervollständigungsliste

Sie können vorgeschlagene, automatisch ausgefüllte Werte für Formular-Widgets bereitstellen, indem Sie das {{HTMLElement("datalist")}}-Element mit untergeordneten {{HTMLElement("option")}}-Elementen verwenden, um die anzuzeigenden Werte anzugeben. Das `<datalist>` muss mit einer `id` versehen werden.

Die Datenliste wird dann mit einem {{htmlelement("input")}}-Element (z.B. einem `text`- oder `email`-Eingabetyp) über das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verbunden, dessen Wert die `id` der zu verbindenden Datenliste ist.

Sobald eine Datenliste mit einem Formular-Widget verbunden ist, werden ihre Optionen verwendet, um eingegebenen Text vom Benutzer automatisch zu vervollständigen; typischerweise wird dies dem Benutzer als Dropdown-Liste angezeigt, die mögliche Übereinstimmungen für das, was er in das Eingabefeld eingegeben hat, anzeigt.

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

Laut [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) können das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut und das {{HTMLElement("datalist")}}-Element mit jeder Art von Widget verwendet werden, die eine Benutzereingabe erfordert. Dies führt zu einigen Verwendungen, die ein wenig unoffensichtlich erscheinen mögen.

Zum Beispiel wird in Browsern, die `{{htmlelement("datalist")}}` bei `range`-Eingabetypen unterstützen, ein kleiner Häkchenmarkierung über dem Bereich für jeden `{{htmlelement("option")}}`-Wert der Datenliste angezeigt. Sie können eine Implementierung [Beispiel hierfür auf der `<input type="range">`-Referenzseite sehen](/de/docs/Web/HTML/Reference/Elements/input/range#adding_tick_marks).

Und Browser, die {{htmlelement('datalist')}}s und [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützen, sollten eine angepasste Farbpalette als Standard anzeigen, während weiterhin die vollständige Farbpalette verfügbar bleibt.

In diesem Fall verhalten sich verschiedene Browser von Fall zu Fall unterschiedlich, daher sollten Sie solche Verwendungen als progressive Verbesserung betrachten und sicherstellen, dass sie problemlos abfallen.

## Andere Formularfunktionen

Es gibt einige andere Formularfunktionen, die nicht so offensichtlich sind wie die, die wir bereits erwähnt haben, aber in manchen Situationen dennoch nützlich sind, sodass wir dachten, es lohne sich, sie kurz zu erwähnen.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub als [other-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/other-examples.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Messlatten und Fortschrittsbalken

Messlatten und Fortschrittsbalken sind visuelle Darstellungen von numerischen Werten. Unterstützung für {{HTMLElement("progress")}} und {{HTMLElement("meter")}} ist in allen modernen Browsern verfügbar.

#### Messlatte

Eine Messlatte stellt einen festen Wert in einem von [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) und [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min) begrenzten Bereich dar. Dieser Wert wird visuell als Steg gerendert, und um zu wissen, wie dieser Steg aussieht, vergleichen wir den Wert mit einigen anderen festgelegten Werten:

- Die [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low)- und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high)-Werte teilen den Bereich in die folgenden drei Teile:
  - Der untere Teil des Bereichs liegt zwischen den [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min)- und [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low)-Werten, einschließlich.
  - Der mittlere Teil des Bereichs liegt zwischen den [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low)- und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high)-Werten, ausschließlich.
  - Der höhere Teil des Bereichs liegt zwischen den [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high)- und [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max)-Werten, einschließlich.

- Der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert definiert den optimalen Wert für das {{HTMLElement("meter")}}-Element. In Kombination mit den [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low)- und [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high)-Werten wird definiert, welcher Teil des Bereichs bevorzugt wird:
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im unteren Teil des Bereichs liegt, wird der untere Bereich als bevorzugter Teil betrachtet, der mittlere Bereich als durchschnittlicher Teil und der höhere Bereich als schlechtester Teil betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im mittleren Teil des Bereichs liegt, wird der untere Bereich als durchschnittlicher Teil betrachtet, der mittlere Bereich als bevorzugter Teil und der höhere Bereich ebenfalls als durchschnittlich betrachtet.
  - Wenn der [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Wert im höheren Teil des Bereichs liegt, wird der untere Bereich als schlechtester Teil betrachtet, der mittlere Bereich als durchschnittlicher Teil und der höhere Bereich als bevorzugter Teil betrachtet.

Alle Browser, die das {{HTMLElement("meter")}}-Element implementieren, verwenden diese Werte, um die Farbe der Messlatte zu ändern:

- Wenn der aktuelle Wert im bevorzugten Teil des Bereichs liegt, ist der Steg grün.
- Wenn der aktuelle Wert im durchschnittlichen Teil des Bereichs liegt, ist der Steg gelb.
- Wenn der aktuelle Wert im schlechtesten Teil des Bereichs liegt, ist der Steg rot.

Ein solcher Steg wird mit dem {{HTMLElement("meter")}}-Element erstellt. Dies dient der Implementierung jeder Art von Messlatte, zum Beispiel einer Leiste, die den gesamten belegten Speicherplatz auf einem Datenträger anzeigt und rot wird, wenn er sich zu füllen beginnt.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

{{EmbedLiveSample("Meter", 120, 120)}}

Der Inhalt innerhalb des {{HTMLElement("meter")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für unterstützende Technologien, um es zu vermitteln.

#### Fortschritt

Ein Fortschrittsbalken stellt einen Wert dar, der sich im Laufe der Zeit bis zu einem maximalen, durch das [`max`](/de/docs/Web/HTML/Reference/Elements/progress#max)-Attribut angegebenen Wert ändert. Ein solcher Balken wird mit einem {{ HTMLElement("progress")}}-Element erstellt.

```html
<progress max="100" value="75">75/100</progress>
```

{{EmbedLiveSample("Progress", 120, 120)}}

Dies dient zur Implementierung von allem, was Fortschrittsberichte erfordert, wie beispielsweise der Prozentsatz der heruntergeladenen Dateien oder die Anzahl der in einem Fragebogen ausgefüllten Fragen.

Der Inhalt innerhalb des {{HTMLElement("progress")}}-Elements ist ein Fallback für Browser, die das Element nicht unterstützen, und für Screenreader, um es zu lesen.

## Zusammenfassung

Wie Sie in den letzten Artikeln gesehen haben, gibt es viele Arten von Formular-Steuerelementen. Sie müssen sich nicht sofort alle diese Details merken und können so oft Sie möchten zu diesen Artikeln zurückkehren, um Details nachzuschlagen.

Jetzt, da Sie ein Verständnis der HTML-Struktur der verschiedenen verfügbaren Formular-Steuerelemente haben, sehen wir uns an, [wie Sie sie stylen können](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/HTML5_input_types","Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms")}}
