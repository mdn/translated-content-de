---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein mehrzeiliges Klartext-Bearbeitungsfeld, das nützlich ist, wenn Sie Benutzern erlauben möchten, eine größere Menge an freiem Text einzugeben, zum Beispiel einen Kommentar in einem Bewertungs- oder Feedback-Formular.

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
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}

label {
  display: block;
  margin-bottom: 10px;
}
```

Das obige Beispiel zeigt eine Reihe von Funktionen von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der an den Server gesendet wird, wenn das Formular abgeschickt wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Diese Einstellung ist aus Gründen der Konsistenz eine gute Idee, da die Standardeinstellungen der Browser variieren können.
- Das `<textarea>`-Element spezifiziert seinen Inhalt unterschiedlich in HTML- und JavaScript-Kontexten:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt zu erhalten oder zu setzen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um dessen Anfangswert zu erhalten und zu setzen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die allgemein für Formular-`<input>`-Elemente gelten, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Steuert, ob eingegebener Text vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss für jede Verwendung explizit einen Wert in dieses Feld eingeben, oder das Dokument stellt seine eigene Auto-Vervollständigungs-Methode zur Verfügung; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten, die der Benutzer bei früheren Verwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Autofill-Detail-Token, optional vorangestellt von einem Abschnitts-Token, einem Rechnungs- oder Versandgruppierungs-Token und/oder einem Token, das den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht angeben, erben den `autocomplete`-`on`- oder `off`-Status, der am Formularbesitzer des `<textarea>` festgelegt wurde. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, dem dieses `<textarea>`-Element untergeordnet ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben ist. Weitere Informationen finden Sie im [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)

  - : Steuert, ob die automatische Rechtschreibkorrektur und Verarbeitung von Text aktiviert ist, während der Benutzer dieses `textarea` bearbeitet.
    Erlaubte Werte sind:

    - `on`
      - : Aktiviert die automatische Rechtschreibkorrektur und Textersetzungen.
    - `off`
      - : Deaktiviert die automatische Rechtschreibkorrektur und Textersetzungen.

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Dieses boolesche Attribut lässt Sie angeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben soll. Nur ein form-assoziiertes Element in einem Dokument kann dieses Attribut angegeben haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textausrichtung der Elementinhalte anzuzeigen.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umgebenden Element, zum Beispiel {{ HTMLElement("fieldset") }}; wenn es kein umgebendes Element gibt, wenn das `disabled`-Attribut gesetzt ist, ist die Steuerung aktiviert.
- `form`
  - : Das Formularelement, mit dem das `<textarea>`-Element verbunden ist (seinen "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formularelements im gleichen Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente an beliebiger Stelle innerhalb eines Dokuments zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl an Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche innerhalb des Platzhaltertexts müssen beim Darstellen des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer in der Steuerung klickt oder auswählt. Der Wert einer schreibgeschützten Steuerung wird trotzdem mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular übermittelt.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` von der darunterliegenden Browser-/Betriebssystem-Rechtschreibprüfung überwacht wird. Der Wert kann sein:

    - `true`: Gibt an, dass das Element hinsichtlich Rechtschreibung und Grammatik überprüft werden muss.
    - `default`: Gibt an, dass das Element gemäß einem Standardverhalten agieren soll, möglicherweise basierend auf dem `spellcheck`-Wert des übergeordneten Elements.
    - `false`: Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden soll.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umbrochen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, damit jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols)-Attribut muss angegeben werden, damit dies wirksam wird.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt werden.
    - `off` {{non-standard_inline}}: Wie `soft`, aber verändert das Erscheinungsbild zu `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umbrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben wird, ist `soft` der Standardwert.

## Gestaltung mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Dimensionen, wie ein Rasterbild. Standardmäßig ist der {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu gestalten, da sein Boxmodell, seine Schriftarten, sein Farbschema usw. leicht mit regulärem CSS manipulierbar sind.

[Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zur Gestaltung von `<textarea>`s.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` liegt, deshalb setzen verschiedene Browser sie an unterschiedliche Positionen. Für Gecko ist die `<textarea>`-Grundlinie auf die Grundlinie der ersten Zeile des Textarea gesetzt, in einem anderen Browser kann sie am unteren Ende des `<textarea>`-Rahmens gesetzt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich vergrößert werden kann

In den meisten Browsern sind `<textarea>`s vergrößerbar — Sie werden den Ziehgriff in der rechten Ecke bemerken, der verwendet werden kann, um die Größe des Elements auf der Seite zu ändern. Dies wird durch die {{ cssxref("resize") }}-CSS-Eigenschaft gesteuert — die Größenänderung ist standardmäßig aktiviert, aber Sie können sie explizit deaktivieren, indem Sie einen `resize`-Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Gestaltung gültiger und ungültiger Werte

Gültige und ungültige Werte eines `<textarea>`-Elements (z. B. diejenigen innerhalb und außerhalb der von `minlength`, `maxlength` oder `required` festgelegten Grenzen) können durch die Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich einen anderen Rahmen zu geben, je nachdem, ob er gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textarea mit einer festen Anzahl von Zeilen und Spalten, einigen Standardinhalten und CSS-Stilen, die verhindern, dass Benutzer das Element auf mehr als 500px Breite und 130px Höhe ändern:

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

Dieses Beispiel hat eine Mindest- und Höchstanzahl von Zeichen — von 10 beziehungsweise 20. Probieren Sie es aus und sehen Sie.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl das Minimum unterschreitet, aber es macht den eingegebenen Wert im `<textarea>` ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert gesetzt haben (z. B. 3), ein leeres `<textarea>` immer noch als gültig angesehen wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
Sie können den Inhalt beider Elemente nicht bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen gesendet.
Der Wert des `disabled`-Elements wird nicht gesendet und ist nicht fokussierbar.

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
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
          >formular-assoziiertes</a
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
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
