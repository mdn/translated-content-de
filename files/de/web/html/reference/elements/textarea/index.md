---
title: "`<textarea>` HTML-Element für Textfelder"
short-title: <textarea>
slug: Web/HTML/Reference/Elements/textarea
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element stellt eine mehrzeilige einfache Textbearbeitungssteuerung dar, die nützlich ist, wenn Sie Benutzern erlauben möchten, eine beträchtliche Menge an freiformatiertem Text einzugeben, zum Beispiel einen Kommentar in einem Bewertungs- oder Feedback-Formular.

{{InteractiveExample("HTML Demo: &lt;textarea&gt;", "tabbed-standard")}}

```html interactive-example
<label for="story">Tell us your story:</label>

<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

```css interactive-example
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 1px #999999;
}

label {
  display: block;
  margin-bottom: 10px;
}
```

Das obige Beispiel demonstriert mehrere Funktionen von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Zugänglichkeitszwecke zu verknüpfen
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunktes festzulegen, der an den Server gesendet wird, wenn das Formular abgeschickt wird.
- `rows` und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Diese festzulegen ist eine gute Idee für Konsistenz, da die Standardvorgaben der Browser unterschiedlich sein können.
- Das `<textarea>`-Element spezifiziert seinen Inhalt unterschiedlich in HTML- und JavaScript-Kontexten:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt abzurufen oder zu setzen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um seinen Anfangswert zu erhalten und festzulegen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere allgemeine Attribute, die für Formular-`<input>`-Elemente üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Kontrolliert, ob der eingegebene Text vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:
    - `off`: Der Benutzer muss explizit bei jeder Verwendung einen Wert in dieses Feld eingeben, oder das Dokument bietet seine eigene Autovervollständigungsmethode; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten vervollständigen, die der Benutzer bei vorherigen Verwendungen eingegeben hat.
    - [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Detail-Token-Autofill, optional vorangestellt durch ein gliederndes Token, ein Abrechnungs- oder Versandgruppierungstoken und/oder ein Token, das den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der im `form`-Eigentümer des `<textarea>` festgelegt ist. Der Formulareigentümer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben wird. Für mehr Informationen lesen Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/form#autocomplete) in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Kontrolliert, ob die automatische Rechtschreibkorrektur und Textverarbeitung aktiviert ist, während der Benutzer dieses `textarea` bearbeitet.
    Erlaubte Werte sind:
    - `on`
      - : Aktiviert die automatische Rechtschreibkorrektur und Textersetzungen.
    - `off`
      - : Deaktiviert die automatische Rechtschreibkorrektur und Textersetzungen.

- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Dieses boolesche Attribut erlaubt es Ihnen zu spezifizieren, dass eine Formularsteuerung den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein formverbundenes Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung in durchschnittlichen Zeichenbreiten. Wenn es spezifiziert ist, muss es eine positive ganze Zahl sein. Wenn es nicht spezifiziert ist, ist der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Inhalts des Elements anzugeben.
    Für mehr Informationen siehe das Attribut [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht spezifiziert ist, erbt die Steuerung ihre Einstellung vom umgebenden Element, zum Beispiel {{HTMLElement("fieldset")}}; wenn es kein umgebendes Element gibt, wenn das Attribut `disabled` gesetzt ist, ist die Steuerung aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das Formularelement, mit dem das `<textarea>`-Element verbunden ist (sein "Formulareigentümer"). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht spezifiziert ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente an beliebigen Stellen in einem Dokument zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer eingeben kann. Wenn dieser Wert nicht spezifiziert ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer eingeben muss.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Zeilenumbrüche oder Zeilenwechsel innerhalb des Platzhaltertextes müssen bei der Darstellung des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein korrektes {{HTMLElement("label")}}-Element, das mit dem Eingabefeld verbunden ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer den Wert der Kontrolle nicht ändern kann. Im Gegensatz zum Attribut `disabled` verhindert das Attribut `readonly` nicht, dass der Benutzer auf die Steuerung klickt oder sie auswählt. Der Wert einer schreibgeschützten Steuerung wird trotzdem mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses Attribut spezifiziert, dass der Benutzer einen Wert eingeben muss, bevor das Formular abgeschickt werden kann.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Wenn es spezifiziert ist, muss es eine positive ganze Zahl sein. Wenn es nicht spezifiziert ist, ist der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Gibt an, ob das `<textarea>` von der Rechtschreibprüfung des zugrunde liegenden Browsers/OS unterzogen wird. Der Wert kann sein:
    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default`: Gibt an, dass das Element gemäß einem Standardverhalten agieren soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des Elternelements.
    - `false`: Gibt an, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- `wrap`
  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umbrechen soll. Mögliche Werte sind:
    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, so dass jede Zeile nicht länger als die Breite der Steuerung ist; das Attribut [`cols`](#cols) muss festgelegt sein, damit dies wirksam wird
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche werden dem Wert hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, ändert aber das Erscheinungsbild zu `white-space: pre`, so dass Zeilenabschnitte, die `cols` überschreiten, nicht umgebrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht spezifiziert ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}} — es hat inhärente Dimensionen, ähnlich einem Rasterbild. Standardmäßig hat es den {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, da es mit regulärem CSS leicht anpassbar ist, einschließlich des Box-Modells, der Schriftarten, des Farbschemas usw.

[Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`s.

### Inkonsistenz der Basislinie

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` liegt, sodass verschiedene Browser sie an unterschiedlichen Positionen festlegen. Bei Gecko wird die Basislinie des `<textarea>` auf der Basislinie der ersten Zeile des Textfelds festgelegt, bei einem anderen Browser kann sie am unteren Ende des `<textarea>`-Rahmens festgelegt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich vergrößerbar ist

In den meisten Browsern sind `<textarea>`s vergrößerbar — Sie bemerken den Ziehgriff in der rechten Ecke, mit dem die Größe des Elements auf der Seite verändert werden kann. Dies wird durch die CSS-Eigenschaft {{ cssxref("resize") }} gesteuert — die Größenänderung ist standardmäßig aktiviert, Sie können sie jedoch explizit deaktivieren, indem Sie einen `resize`-Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Styling gültiger und ungültiger Werte

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. diejenigen innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` festgelegten Grenzen) können mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Um beispielsweise Ihrem Textfeld eine andere Umrandung zu geben, je nachdem, ob es gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textfeld mit einer festgelegten Anzahl von Zeilen und Spalten, einigen Standardinhalten und CSS-Stilen, die verhindern, dass Benutzer das Element auf eine Breite von mehr als 500px und eine Höhe von mehr als 130px vergrößern:

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

Dieses Beispiel hat eine Mindest- und Höchstanzahl von Zeichen — jeweils 10 und 20. Probieren Sie es aus.

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

Beachten Sie, dass `minlength` den Benutzer nicht davon abhält, Zeichen zu entfernen, so dass die eingegebene Anzahl unter das Minimum fällt, aber es macht den eingegebenen Wert ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert festgelegt haben (zum Beispiel 3), ein leeres `<textarea>` als gültig angesehen wird, es sei denn, Sie haben auch das Attribut `required` gesetzt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen Platzhalter festgelegt. Beachten Sie, wie er verschwindet, wenn Sie anfangen, in das Feld zu tippen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein korrektes {{HTMLElement("label")}}-Element, das mit dem Eingabefeld verbunden ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textfelder

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled).
Sie können den Inhalt keines der beiden Elemente bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrase-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role"
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
