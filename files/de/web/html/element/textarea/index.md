---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein mehrzeiliges Klartext-Bearbeitungsfeld, nützlich, wenn Sie Benutzern erlauben möchten, eine erhebliche Menge an Freitext einzugeben, beispielsweise einen Kommentar zu einer Bewertung oder ein Feedback-Formular.

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

Das obige Beispiel zeigt mehrere Merkmale von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen
- Ein `name`-Attribut, um den Namen des assoziierten Datenelements festzulegen, das beim Abschicken des Formulars an den Server übermittelt wird.
- `rows`- und `cols`-Attribute, um genau die Größe des `<textarea>` festzulegen. Diese zu setzen ist eine gute Idee für Konsistenz, da die Standardeinstellungen der Browser unterschiedlich sein können.
- Das `<textarea>`-Element spezifiziert seinen Inhalt unterschiedlich im HTML- und JavaScript-Kontext:
  - Im HTML wird der initiale Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt zu bekommen oder festzulegen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um seinen anfänglichen Wert zu bekommen oder festzulegen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die gemeinsam mit Formular-`<input>`s verwendet werden, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Steuert, ob eingegebener Text automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss explizit einen Wert in dieses Feld bei jeder Nutzung eingeben, oder das Dokument bietet eine eigene Autovervollständigungs-Methode; der Browser vervollständigt die Eingabe nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf früher durch den Benutzer eingegebene Werte automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge aus Leerzeichen-getrennten Autovervollständigungs-Detail-Tokens, optional vorangestellt durch ein Sektions-Token, ein Abrechnungs- oder Versand-Gruppentoken und/oder ein Token, das den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht angeben, erben den `autocomplete`-`on`- oder `off`-Status, der beim `form`-Besitzer des `<textarea>` festgelegt ist. Der `form`-Besitzer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das `form`-Element, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben ist. Sehen Sie für weitere Informationen das [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)

  - : Steuert, ob automatische Rechtschreibkorrektur und Textverarbeitung aktiviert sind, während der Benutzer dieses `textarea` bearbeitet.
    Erlaubte Werte sind:

    - `on`
      - : Aktiviert automatische Rechtschreibkorrektur und Textersetzungen.
    - `off`
      - : Deaktiviert automatische Rechtschreibkorrektur und Textersetzungen.

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Dieses Boolean-Attribut ermöglicht es Ihnen zu spezifizieren, dass ein Form-Control beim Laden der Seite den Eingabefokus haben soll. Nur ein formularbezogenes Element in einem Dokument kann dieses Attribut angegeben haben.
- `cols`
  - : Die sichtbare Breite des Textsteuerungselements in durchschnittlichen Zeichenbreiten. Wenn es spezifiziert ist, muss es eine positive Ganzzahl sein. Wenn es nicht spezifiziert ist, ist der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Inhalts des Elements anzuzeigen. Für weitere Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit dem Kontrollkästchen interagieren kann. Wenn dieses Attribut nicht spezifiziert ist, erbt das Kontrollkästchen seine Einstellung vom enthaltenen Element, z. B. {{ HTMLElement("fieldset") }}; wenn kein enthaltenes Element vorhanden ist, wenn das Attribut `disabled` festgelegt wird, ist das Kontrollkästchen aktiviert.
- `form`
  - : Das `<textarea>`-Element, mit dem das `<textarea>`-Element verbunden ist (sein "form owner"). Der Wert des Attributs muss die `id` eines Form-Elements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Form-Elements sein. Dieses Attribut ermöglicht es, `<textarea>`-Elemente an beliebiger Stelle innerhalb eines Dokuments zu platzieren, nicht nur als Nachkommen von Form-Elementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name des Kontrollfelds.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in das Kontrollkästchen eingegeben werden kann. Wagenrückläufe oder Zeilenvorschübe innerhalb des Placeholder-Texts müssen beim Rendern des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein ordentliches {{HTMLElement("label")}}-Element, das an die Eingabe gebunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses Boolean-Attribut weist darauf hin, dass der Benutzer den Wert des Steuerfelds nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer im Steuerfeld klickt oder auswählt. Der Wert eines schreibgeschützten Kontrollfelds wird dennoch mit dem Formular gesendet.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular gesendet werden kann.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für das Steuerfeld. Wenn dieser Wert angegeben ist, muss es eine positive Ganzzahl sein. Wenn nicht, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/das Betriebssystem unterliegt. Der Wert kann sein:

    - `true`: Gibt an, dass das Element auf Rechtschreib- und Grammatikfehler überprüft werden muss.
    - `default` : Gibt an, dass das Element entsprechend eines Standardverhaltens handeln soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des Elternelements.
    - `false` : Gibt an, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- `wrap`

  - : Gibt an, wie das Steuerfeld den Wert für das Formular festlegen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite des Steuerfelds ist; das `cols`-Attribut muss dazu angegeben sein
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber es werden keine zusätzlichen Zeilenumbrüche dem Wert hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, aber ändert das Erscheinungsbild zu `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umbrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein [Ersatz-Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Abmessungen, wie ein Rasterbild. Standardmäßig ist der {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Form-Elementen ist es relativ einfach zu stylen, mit seinem Box-Modell, Schriftarten, Farbschema usw., die leicht mit regulärem CSS manipulierbar sind.

[Styling HTML forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`s.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` ist, daher setzen verschiedene Browser sie an unterschiedlichen Positionen. Bei Gecko ist die `<textarea>`-Basislinie auf die Basislinie der ersten Zeile des Textareas gesetzt, bei einem anderen Browser könnte sie am unteren Rand des `<textarea>`-Rahmens gesetzt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob eine Textarea skalierbar ist

In den meisten Browsern sind `<textarea>`s skalierbar — Sie werden den Ziehgriff in der rechten Ecke bemerken, der verwendet werden kann, um die Größe des Elements auf der Seite zu ändern. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — Größenänderungen sind standardmäßig aktiviert, aber Sie können sie explizit deaktivieren, indem Sie einen `resize`-Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z. B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` festgelegten Grenzen) können mit den {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen hervorgehoben werden. Zum Beispiel, um Ihrem `textarea` je nach Validität einen anderen Rand zu geben:

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

Das folgende Beispiel zeigt eine Textarea mit einer festgelegten Anzahl von Zeilen und Spalten, einigen Standardinhalten und CSS-Stilen, die verhindern, dass Benutzer das Element mehr als 500px breit und 130px hoch skalieren:

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

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen - jeweils 10 und 20. Probieren Sie es aus und sehen Sie.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Menge unter das Minimum geht, aber es macht den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass auch wenn Sie einen `minlength`-Wert (beispielsweise 3) eingestellt haben, eine leere `<textarea>` immer noch als gültig angesehen wird, es sei denn, Sie haben ebenfalls das `required`-Attribut eingestellt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen festgelegten Platzhalter. Beachten Sie, wie er verschwindet, wenn Sie beginnen, in das Feld zu tippen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein ordentliches {{HTMLElement("label")}}-Element, das an die Eingabe gebunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
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
          >Flow-Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktive Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >kennzeichnbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >einsendbar</a
        >
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
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalte</a
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
