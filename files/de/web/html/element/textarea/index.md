---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element stellt ein mehrzeiliges Plain-Text-Steuerelement dar, das nützlich ist, wenn Sie den Benutzern erlauben möchten, eine beträchtliche Menge an freiformuliertem Text einzugeben, beispielsweise einen Kommentar zu einer Rezension oder einem Feedback-Formular.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Das obige Beispiel veranschaulicht eine Reihe von Funktionen des `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der beim Absenden des Formulars zum Server übermittelt wird.
- `rows`- und `cols`-Attribute, mit denen Sie eine genaue Größe für das `<textarea>` festlegen können. Es ist eine gute Idee, diese festzulegen, um Konsistenz zu gewährleisten, da die Standardeinstellungen in Browsern variieren können.
- Das `<textarea>`-Element spezifiziert seinen Inhalt unterschiedlich in HTML- und JavaScript-Kontexten:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags und nicht als `value`-Attribut angegeben.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt zu erhalten oder zu setzen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um seinen anfänglichen Wert zu erhalten und zu setzen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die allgemein für Formular-`<input>`s gelten, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Steuert, ob eingegebener Text automatisch durch den Browser vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss bei jeder Nutzung explizit einen Wert in dieses Feld eingeben, oder das Dokument bietet seine eigene Autovervollständigungsmethode; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten, die der Benutzer bei vorherigen Verwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine gereihte Menge von durch Leerzeichen getrennten Autovervollständigungs-Detail-Token, optional gefolgt von einem Abschnitt-Token, einem Rechnungs- oder Versandgruppen-Token und/oder einem Token, der den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der auf dem Formular-Eigentümer des `<textarea>` gesetzt ist. Der Formular-Eigentümer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formularelement, dessen `id` mit dem `form`-Attribut des Eingabeelements angegeben ist. Für weitere Informationen siehe das [`autocomplete`-Attribut](/de/docs/Web/HTML/Element/form#autocomplete) in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)

  - : Steuert, ob eine automatische Rechtschreibprüfung und Textverarbeitung aktiviert ist, während der Benutzer dieses `textarea` bearbeitet.
    Erlaubte Werte sind:

    - `on`
      - : Automatische Rechtschreibkorrektur und Textersatz aktivieren.
    - `off`
      - : Automatische Rechtschreibkorrektur und Textersatz deaktivieren.

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass eine Formularkontrolle beim Laden der Seite den Eingabefokus haben soll. Nur ein formularbezogenes Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Textkontrolle, in durchschnittlichen Zeichenbreiten. Wenn es spezifiziert ist, muss es eine positive Ganzzahl sein. Wenn nicht spezifiziert, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Elementinhalts anzuzeigen.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit der Kontrolle interagieren kann. Wenn dieses Attribut nicht spezifiziert ist, erbt die Kontrolle ihre Einstellung vom enthaltenen Element, z.B. {{ HTMLElement("fieldset") }}; wenn kein enthaltenes Element vorhanden ist, wenn das `disabled`-Attribut gesetzt ist, ist die Kontrolle aktiv.
- `form`
  - : Das Formularelement, mit dem das `<textarea>`-Element verknüpft ist (sein "Formular-Eigentümer"). Der Wert des Attributs muss die `id` eines Formularelements im gleichen Dokument sein. Wenn dieses Attribut nicht spezifiziert ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall in einem Dokument zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16-Codierungseinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16-Codierungseinheiten), die der Benutzer eingeben muss.
- `name`
  - : Der Name der Kontrolle.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in die Kontrolle eingegeben werden kann. Wagenrücklauf- oder Zeilenumbrüche innerhalb des Platzhaltertextes müssen beim Darstellen des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie ersetzen _nicht_ ein ordentliches {{HTMLElement("label")}}-Element, das mit der Eingabe verknüpft ist. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer den Wert der Kontrolle nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer in der Kontrolle klickt oder sie auswählt. Der Wert einer schreibgeschützten Kontrolle wird dennoch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular einreichen kann.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Kontrolle. Wenn es spezifiziert ist, muss es eine positive Ganzzahl sein. Wenn es nicht spezifiziert ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` von der zugrundeliegenden Browser-/OS-Rechtschreibprüfung überprüft werden soll. Der Wert kann sein:

    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default`: Gibt an, dass das Element entsprechend einem Standardverhalten handeln soll, möglicherweise basierend auf dem `spellcheck`- Wert des übergeordneten Elements.
    - `false`: Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden soll.

- `wrap`

  - : Gibt an, wie die Kontrolle den Wert für die Formularübermittlung umbrechen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, damit jede Zeile nicht breiter ist als das Steuerelement; das [`cols`](#cols)-Attribut muss angegeben werden, damit dies wirksam wird.
    - `soft`: Der Browser sorgt dafür, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt werden.
    - `off` {{non-standard_inline}}: Wie `soft`, ändert jedoch das Erscheinungsbild auf `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umbrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Dimensionen, wie ein Rasterbild. Sein Standardwert für {{cssxref("display")}} ist `inline-block`. Verglichen mit anderen Formularelementen ist es relativ einfach zu stylen, wobei sein Boxmodell, seine Schriftarten, Farbschemata usw. leicht mit normalem CSS manipulierbar sind.

[Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`s.

### Inkonsistenz der Grundlinie

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` ist, sodass verschiedene Browser sie an verschiedenen Positionen setzen. Bei Gecko wird die Grundlinie des `<textarea>` auf der Grundlinie der ersten Zeile des Textfeldes gesetzt, bei einem anderen Browser kann sie am unteren Rand des `<textarea>`-Rahmens gesetzt werden. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuern, ob ein Textarea vergrößert werden kann

In den meisten Browsern sind `<textarea>`s vergrößerbar — Sie bemerken den Ziehgriff in der rechten unteren Ecke, der verwendet werden kann, um die Größe des Elements auf der Seite zu ändern. Dies wird durch die {{cssxref("resize")}} CSS-Eigenschaft gesteuert — das Vergrößern ist standardmäßig aktiviert, aber Sie können es explizit deaktivieren, indem Sie den Wert `resize` auf `none` setzen:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` gesetzten Grenzen) können mithilfe der {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen hervorgehoben werden. Zum Beispiel, um Ihrem Textfeld einen anderen Rahmen zu geben, je nachdem, ob es gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textfeld mit einer festgelegten Anzahl von Zeilen und Spalten, etwas Standardinhalt und CSS-Stile, die verhindern, dass Benutzer das Element mehr als 500px breit und 130px hoch vergrößern:

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

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen - jeweils 10 bzw. 20. Probieren Sie es aus.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Zahl unter das Minimum fällt, aber der eingegebene Wert wird dann im `<textarea>` als ungültig betrachtet. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert (zum Beispiel 3) gesetzt haben, ein leeres `<textarea>` immer noch als gültig angesehen wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen Platzhalter gesetzt. Beachten Sie, wie er verschwindet, wenn Sie beginnen, in das Feld zu tippen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie ersetzen _nicht_ ein ordentliches {{HTMLElement("label")}}-Element, das mit der Eingabe verknüpft ist. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`-Felder — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
Sie können den Inhalt keines der Elemente bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt.
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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textflussinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >benennbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >übermittelbar</a
        >
        sowie ein
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >formularassoziiertes</a
        >
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Auslassen von Tags</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textflussinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
