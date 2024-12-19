---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein mehrzeiliges Klartext-Bearbeitungsfeld, das nützlich ist, wenn Sie Benutzern erlauben möchten, eine größere Menge an Freitext einzugeben, beispielsweise einen Kommentar in einem Bewertungs- oder Feedback-Formular.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Das obige Beispiel zeigt eine Reihe von Eigenschaften von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verbinden.
- Ein `name`-Attribut, um den Namen des zugeordneten Datenpunkts festzulegen, der beim Absenden des Formulars an den Server gesendet wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Es ist ratsam, diese zu setzen, um Konsistenz zu gewährleisten, da die Standardeinstellungen der Browser variieren können.
- Das `<textarea>`-Element spezifiziert seinen Inhalt unterschiedlich in HTML- und JavaScript-Kontexten:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt zu erhalten oder zu setzen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue) um seinen anfänglichen Wert zu erhalten und zu setzen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die für Formular-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)

  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, in welcher Weise.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Kontrolliert, ob der eingegebene Text automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss für jede Verwendung explizit einen Wert in dieses Feld eingeben, oder das Dokument stellt seine eigene Autovervollständigungsmethode bereit; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten automatisch vervollständigen, die der Benutzer während früherer Verwendungen eingegeben hat.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von leerzeichengetrennten Autofill-Detail-Token, optional vorangestellt von einem Bereichs-Token, einem Rechnungs- oder Versandgruppen-Token und/oder einem Token, das den Empfängertyp identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht angeben, erben den `autocomplete`-`on`- oder `off`-Status vom Formularbesitzer des `<textarea>`. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formular-Element, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben ist. Weitere Informationen finden Sie im [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)

  - : Kontrolliert, ob automatische Rechtschreibkorrektur und Textbearbeitung aktiviert sind, während der Benutzer dieses `textarea` bearbeitet. Erlaubte Werte sind:

    - `on`
      - : Aktiviert die automatische Rechtschreibkorrektur und Textsubstitutionen.
    - `off`
      - : Deaktiviert die automatische Rechtschreibkorrektur und Textsubstitutionen.

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Dieses Boolesche Attribut ermöglicht es Ihnen zu spezifizieren, dass ein Formularelement den Eingabefokus erhalten soll, wenn die Seite geladen wird. Nur ein formularassoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite des Texteingabefeldes, in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Elementinhaltes anzugeben. Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolesche Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel {{ HTMLElement("fieldset") }}; wenn kein umgebendes Element vorhanden ist, wenn das `disabled`-Attribut gesetzt ist, ist das Steuerelement aktiviert.
- `form`
  - : Das Formular-Element, mit dem das `<textarea>`-Element verbunden ist (sein "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formular-Elements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formular-Elements sein. Dieses Attribut ermöglicht es, `<textarea>`-Elemente überall innerhalb eines Dokuments zu platzieren, nicht nur als Nachkommen von Formular-Elementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale erforderliche Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name des Steuerelements.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in das Steuerelement eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche innerhalb des Placeholder-Textes müssen beim Rendern des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _keine_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses Boolesche Attribut zeigt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Anders als das `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer im Steuerelement klickt oder auswählt. Der Wert eines schreibgeschützten Steuerelements wird weiterhin mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absendet.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für das Steuerelement. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` von der zugrunde liegenden Browser/OS-Rechtschreibprüfung überprüft wird. Der Wert kann sein:

    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default`: Gibt an, dass das Element entsprechend einem Standardverhalten handeln soll, möglicherweise basierend auf dem `spellcheck`-Wert des Elternelements.
    - `false`: Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden sollte.

- `wrap`

  - : Gibt an, wie der Wert für die Formularübermittlung umgebrochen werden soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite des Steuerelements ist; das [`cols`](#cols)-Attribut muss spezifiziert sein, damit dies wirksam wird.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche werden dem Wert hinzugefügt.
    - `off` {{non-standard_inline}}: Ähnlich wie `soft`, ändert jedoch das Erscheinungsbild in `white-space: pre`, sodass Textsegmente, die `cols` überschreiten, nicht umbrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` sein Standardwert.

## Gestaltung mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Abmessungen, ähnlich einem Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu gestalten, wobei sein Box-Modell, seine Schriftart, Farbschema etc. leicht mit regulärem CSS manipuliert werden können.

[Gestaltung von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zur Gestaltung von `<textarea>`s.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` ist, sodass verschiedene Browser sie an unterschiedlichen Positionen festlegen. Bei Gecko ist die Grundlinie des `<textarea>` auf die Baseline der ersten Zeile des Textarea gesetzt, bei einem anderen Browser könnte sie am unteren Rand des `<textarea>`-Rahmens festgelegt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Kontrolle darüber, ob ein Textarea vergrößerbar ist

In den meisten Browsern sind `<textarea>`s vergrößerbar — Sie werden den Ziehgriff in der rechten unteren Ecke bemerken, mit dem Sie die Größe des Elements auf der Seite verändern können. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — das Vergrößern ist standardmäßig aktiviert, kann jedoch explizit mit einem `resize`-Wert von `none` deaktiviert werden:

```css
textarea {
  resize: none;
}
```

### Gestaltung von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. diejenigen innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` gesetzten Grenzen) können mit den {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen hervorgehoben werden. Zum Beispiel, um Ihrem Textarea je nach Gültigkeit einen unterschiedlichen Rahmen zu geben:

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

Das folgende Beispiel zeigt ein Textarea mit einer festgelegten Anzahl von Zeilen und Spalten, etwas Standardinhalt und CSS-Stile, die verhindern, dass Benutzer das Element auf mehr als 500px Breite und 130px Höhe vergrößern:

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

### Beispiel mit Verwendung von "minlength" und "maxlength"

Dieses Beispiel hat eine Mindest- und Höchstanzahl von Zeichen – 10 bzw. 20. Probieren Sie es aus und sehen Sie.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl den Mindestwert unterschreitet, aber es macht den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass ein leeres `<textarea>`, auch wenn Sie einen `minlength`-Wert (z.B. 3) festgelegt haben, immer noch als gültig betrachtet wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

### Beispiel mit Verwendung von "placeholder"

Dieses Beispiel hat einen Placeholder gesetzt. Beachten Sie, wie er verschwindet, wenn Sie anfangen, in das Feld zu tippen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _keine_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textfelder

Dieses Beispiel zeigt zwei `<textarea>`s – eins ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eins ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled). Sie können den Inhalt keines der beiden Elemente bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt. Der Wert des `disabled`-Elements wird nicht übermittelt und es ist nicht fokussierbar.

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
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >absendbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >formularassoziiert</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
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

- Andere formbezogene Elemente:
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
