---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine mehrzeilige Plain-Text-Bearbeitungssteuerung, nützlich, wenn Sie Benutzern erlauben möchten, eine beträchtliche Menge freien Text einzugeben, beispielsweise einen Kommentar zu einer Bewertung oder einem Feedback-Formular.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Das obige Beispiel demonstriert eine Reihe von Funktionen von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der an den Server gesendet wird, wenn das Formular übermittelt wird.
- `rows` und `cols`-Attribute, um die genaue Größe des `<textarea>` festzulegen. Diese zu setzen ist eine gute Idee für Konsistenz, da die Standards der Browser unterschiedlich sein können.
- Standardinhalt, der zwischen den öffnenden und schließenden Tags eingegeben wird. `<textarea>` unterstützt nicht das `value`-Attribut.

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die für Formular-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Dieses Attribut gibt an, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss explizit einen Wert in dieses Feld eingeben oder das Dokument stellt seine eigene Autovervollständigungsmethode bereit; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten automatisch vervollständigen, die der Benutzer bei vorherigen Anwendungen eingegeben hat.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Autofill-Detailtokens, die optional von einem Abschnitts-Token, einem Rechnungs- oder Versandgruppen-Token und/oder einem Token zur Identifizierung des Empfängertyps vorangestellt sind.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der auf dem `<textarea>`-Formularinhaber gesetzt ist. Der Formularinhaber ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben ist. Weitere Informationen finden Sie im Attribut [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete) in {{HTMLElement("form")}}.

- `autocorrect` {{non-standard_inline}}

  - : Eine Zeichenfolge, die angibt, ob die automatische Rechtschreibkorrektur und Verarbeitung von Texteinsetzungen (falls vorhanden) aktiviert werden sollen, während der Benutzer dieses `textarea` bearbeitet. Erlaubte Werte sind:

    - `on`
      - : Aktivieren Sie die automatische Rechtschreibkorrektur und Texteinsetzungen.
    - `off`
      - : Deaktivieren Sie die automatische Rechtschreibkorrektur und Texteinsetzungen.

- `autofocus`
  - : Dieses boolesche Attribut ermöglicht die Angabe, dass eine Steuerung bei Seitenlad eine Eingabefokus erhalten soll. Nur ein formularzugehöriges Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, ist der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textausrichtung des Inhalts des Elements anzuzeigen.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom enthaltenen Element, zum Beispiel von {{ HTMLElement("fieldset") }}; wenn es kein enthaltenes Element gibt, wenn das `disabled`-Attribut gesetzt ist, ist die Steuerung aktiviert.
- `form`
  - : Das Formular-Element, mit dem das `<textarea>`-Element verbunden ist (sein "Formularinhaber"). Der Wert des Attributs muss die `id` eines Formular-Elementes im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formular-Elementes sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall in einem Dokument zu platzieren, nicht nur als Nachkommen von Formular-Elementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche innerhalb des Platzhalters müssen als Zeilenumbrüche behandelt werden, wenn der Hinweis gerendert wird.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _keine_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verknüpft ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer in der Steuerung klickt oder auswählt. Der Wert einer schreibgeschützten Steuerung wird trotzdem mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert ausfüllen muss, bevor ein Formular gesendet wird.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, ist der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser bzw. das Betriebssystem unterliegt. Der Wert kann sein:

    - `true`: Gibt an, dass das Element einer Rechtschreib- und Grammatikprüfung unterzogen werden muss.
    - `default` : Gibt an, dass das Element gemäß einem Standardverhalten agieren soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des übergeordneten Elements.
    - `false` : Gibt an, dass das Element keiner Rechtschreibprüfung unterzogen werden soll.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umschlagen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols)-Attribut muss dafür angegeben werden, damit dies wirksam wird.
    - `soft`: Der Browser sorgt dafür, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, jedoch werden keine zusätzlichen Zeilenumbrüche hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, aber ändert das Aussehen zu `white-space: pre`, sodass Liniensegmente, die `cols` überschreiten, nicht umgebrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Dimensionen, ähnlich einem Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, wobei sein Boxmodell, seine Schriftarten, sein Farbschema usw. mit regulärem CSS leicht manipulierbar sind.

[Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`s.

### Basislinien-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` ist, sodass verschiedene Browser sie an verschiedenen Positionen festlegen. Für Gecko wird die Basislinie des `<textarea>` auf der Basislinie der ersten Zeile des Textarea gesetzt, bei einem anderen Browser kann sie am unteren Rand des `<textarea>`-Rahmens gesetzt werden. Verwenden Sie {{cssxref("vertical-align", "vertical-align: baseline")}} nicht darauf; das Verhalten ist unvorhersehbar.

### Kontrolle, ob ein Textarea größenänderbar ist

In den meisten Browsern sind `<textarea>`s größenänderbar — Sie werden den Ziehgriff in der rechten unteren Ecke bemerken, mit dem die Größe des Elements auf der Seite verändert werden kann. Dies wird durch die CSS-Eigenschaft {{ cssxref("resize") }} gesteuert — standardmäßig ist die Größenänderung aktiviert, aber Sie können sie explizit mit einem `resize`-Wert von `none` deaktivieren:

```css
textarea {
  resize: none;
}
```

### Styling gültiger und ungültiger Werte

Gültige und ungültige Werte eines `<textarea>`-Elements (z. B. solche, die innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` gesetzten Grenzen liegen) können mithilfe der Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Beispielsweise, um Ihrem Textarea je nach Gültigkeit oder Ungültigkeit einen unterschiedlichen Rahmen zu geben:

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt ein Textarea mit einer festgelegten Anzahl an Zeilen und Spalten, etwas Standardinhalt und CSS-Stilen, die verhindern, dass Benutzer das Element mehr als 500px breit und 130px hoch vergrößern:

```html
<textarea name="textarea" rows="5" cols="15">Write something here</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_example')}}

### Beispiel mit "minlength" und "maxlength"

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen — 10 bzw. 20. Probieren Sie es aus und sehen Sie.

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">
Write something here…
</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample('Example using "minlength" and "maxlength"')}}

Es ist zu beachten, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl das Minimum unterschreitet, aber es macht den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert eingestellt haben (3 zum Beispiel), ein leeres `<textarea>` immer noch als gültig betrachtet wird, es sei denn, Sie haben auch das `required`-Attribut eingestellt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen Platzhalter gesetzt. Beachten Sie, wie er verschwindet, wenn Sie anfangen, in das Feld zu tippen.

```html
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="Comment text."></textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample('Example using "placeholder"')}}

> [!NOTE]
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _keine_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verknüpft ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
Sie können den Inhalt beider Elemente nicht bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt.
Der Wert des `disabled`-Elements wird nicht übermittelt und es ist nicht fokussierbar.

```html
<textarea name="textarea" rows="5" cols="30" readonly>
I am a read-only textarea.
</textarea>
<textarea name="textarea" rows="5" cols="30" disabled>
I am a disabled textarea.
</textarea>
```

```css
textarea {
  display: block;
  resize: horizontal;
  max-width: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample('disabled_and_readonly_text_areas', '', '230')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >formularzugehöriges</a
        >
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role"
            >textbox</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere formularbezogene Elemente:
  - {{ HTMLElement("form") }}
  - {{ HTMLElement("button") }}
  - {{ HTMLElement("datalist") }}
  - {{ HTMLElement("legend") }}
  - {{ HTMLElement("label") }}
  - {{ HTMLElement("select") }}
  - {{ HTMLElement("optgroup") }}
  - {{ HTMLElement("option") }}
  - {{ HTMLElement("input") }}
  - {{ HTMLElement("fieldset") }}
  - {{ HTMLElement("output") }}
  - {{ HTMLElement("progress") }}
  - {{ HTMLElement("meter") }}
