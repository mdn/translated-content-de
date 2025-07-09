---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Reference/Elements/textarea
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine mehrzeilige Klartext-Bearbeitungskontrolle, nützlich, wenn Sie Benutzern erlauben möchten, eine beträchtliche Menge an Freitext einzugeben, beispielsweise einen Kommentar zu einer Bewertung oder ein Feedback-Formular.

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

Das obige Beispiel demonstriert einige Funktionen von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der beim Absenden des Formulars an den Server übermittelt wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` anzugeben. Das Setzen dieser Attribute ist für die Konsistenz eine gute Idee, da die Standardwerte der Browser unterschiedlich sein können.
- Das `<textarea>`-Element spezifiziert seinen Inhalt in HTML- und JavaScript-Kontexten unterschiedlich:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen Öffnungs- und Schlusstags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt zu erhalten oder zu setzen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um seinen ursprünglichen Wert zu erhalten und zu setzen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die für Formular-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, auf welche Weise.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Steuert, ob eingegebener Text vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:
    - `off`: Der Benutzer muss explizit einen Wert in dieses Feld eingeben, oder das Dokument stellt seine eigene Auto-Vervollständigungsmethode bereit; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten, die der Benutzer bei vorherigen Verwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Auto-Vervollständigungsdetail-Token, optional eingeleitet durch ein Abschnitts-Token, ein Rechnungs- oder Versandgruppen-Token und/oder ein Token, das den Empfängertyp identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der auf den `<textarea>`'s Formularbesitzer festgelegt wurde. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formular-Element, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben ist. Für weitere Informationen siehe das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob die automatische Rechtschreibkorrektur und Textverarbeitung aktiviert ist, während der Benutzer dieses `textarea` bearbeitet.
    Zulässige Werte sind:
    - `on`
      - : Aktiviert automatische Rechtschreibkorrektur und Textsubstitutionen.
    - `off`
      - : Deaktiviert automatische Rechtschreibkorrektur und Textsubstitutionen.

- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Dieses boolesche Attribut ermöglicht es Ihnen, festzulegen, dass ein Formularelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein formularbezogenes Element in einem Dokument kann dieses Attribut haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung, angegeben in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 20.
- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Dieses Attribut gibt die Textausrichtung der Elementinhalte an.
    Für weitere Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung von dem umschließenden Element, zum Beispiel {{ HTMLElement("fieldset") }}; gibt es kein umschließendes Element, wenn das `disabled`-Attribut gesetzt ist, ist die Steuerung aktiviert.
- `form`
  - : Das Formularelement, mit dem das `<textarea>`-Element verbunden ist (sein "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall in einem Dokument zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Die maximale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Die minimale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer eingeben sollte.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche innerhalb des Placeholder-Textes müssen bei der Anzeige des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten anzuzeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer in die Steuerung klickt oder sie auswählt. Der Wert einer schreibgeschützten Steuerung wird weiterhin mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert ausfüllen muss, bevor er ein Formular absendet.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Wenn es angegeben ist, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/das Betriebssystem unterzogen wird. Der Wert kann sein:
    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik geprüft werden muss.
    - `default` : Gibt an, dass das Element gemäß einem Standardverhalten agieren soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des Elternelements.
    - `false` : Gibt an, dass das Element nicht auf Rechtschreibung geprüft werden soll.

- `wrap`
  - : Zeigt an, wie die Steuerung den Wert zur Formularübermittlung umbricht. Mögliche Werte sind:
    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols)-Attribut muss für diese Wirkung angegeben werden.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, es werden jedoch keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, aber ändert das Erscheinungsbild in `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umbrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Gestaltung mit CSS

`<textarea>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}} — es hat intrinsische Abmessungen, wie ein Rasterbild. Standardmäßig ist der {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu gestalten, da sein Box-Modell, seine Schriftarten, sein Farbschema usw. leicht mit regulärem CSS manipulierbar sind.

[Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zur Gestaltung von `<textarea>`s.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` ist, daher setzen verschiedene Browser sie an unterschiedliche Positionen. Bei Gecko wird die Grundlinie des `<textarea>` auf die Grundlinie der ersten Zeile des Textbereichs gesetzt, bei einem anderen Browser kann sie unten am `<textarea>`-Rahmen gesetzt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich skalierbar ist

In den meisten Browsern sind `<textarea>`s skalierbar — Sie bemerken den Ziehgriff in der rechten unteren Ecke, mit dem die Größe des Elements auf der Seite verändert werden kann. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — die Skalierung ist standardmäßig aktiviert, Sie können sie jedoch explizit mit einem `resize`-Wert von `none` deaktivieren:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z. B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` gesetzten Grenzen) können mithilfe der {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-Pseudoklassen hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich eine andere Grenze zu geben, je nachdem, ob es gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textbereich mit einer festgelegten Anzahl von Zeilen und Spalten, einigen voreingestellten Inhalten und CSS-Stilen, die verhindern, dass Benutzer die Größe des Elements über 500px Breite und 130px Höhe hinaus ändern:

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

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen - von 10 bzw. 20. Probieren Sie es aus und sehen Sie.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die Anzahl unter das Minimum fällt, aber es macht den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass ein leeres `<textarea>` immer noch als gültig betrachtet wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen Placeholder gesetzt. Beachten Sie, wie es verschwindet, wenn Sie anfangen in das Feld zu tippen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten anzuzeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled).
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgeführt</a
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
          >formularassoziiertes</a
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
      <td>Keine, sowohl das Start- als auch das Endetag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
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
