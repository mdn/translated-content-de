---
title: "<sup>: Das Superscript-Element"
slug: Web/HTML/Element/sup
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<sup>`**-[HTML](/de/docs/Web/HTML)-Element spezifiziert einen Inline-Text, der aus rein typografischen Gründen als Superscript angezeigt werden soll. Superscript wird normalerweise mit einer erhöhten Grundlinie und in kleinerer Schriftgröße dargestellt.

{{InteractiveExample("HTML Demo: &lt;sup&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The <em>Pythagorean theorem</em> is often expressed as the following equation:
</p>

<p>
  <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
</p>
```

```css interactive-example
p {
  font:
    1rem "Fira Sans",
    sans-serif;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden — das heißt, um die Position des Textes zu verändern, um typografischen Konventionen oder Standards zu entsprechen, und nicht allein aus Darstellungs- oder Erscheinungsgründen.

Zum Beispiel sollte die Formatierung des [Wortmarken](https://en.wikipedia.org/wiki/Wordmark) eines Unternehmens oder Produkts, das eine erhöhte Grundlinie verwendet, mittels CSS (höchstwahrscheinlich {{cssxref("vertical-align")}}) und nicht mit `<sup>` vorgenommen werden. Dies könnte beispielsweise durch `vertical-align: super` oder, um die Grundlinie um 50% anzuheben, `vertical-align: 50%` umgesetzt werden.

Geeignete Anwendungsfälle für `<sup>` sind unter anderem:

- Darstellung von Exponenten, wie "x<sup>3</sup>". Es könnte sich lohnen, [MathML](/de/docs/Web/MathML) für diese zu verwenden, insbesondere in komplexeren Fällen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Darstellung von [erhobenen Buchstaben](https://en.wikipedia.org/wiki/Superior_letter), die in einigen Sprachen bei der Darstellung bestimmter Abkürzungen verwendet werden. Zum Beispiel kann im Französischen das Wort "mademoiselle" mit "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [Erhobene Buchstaben](#erhobene_buchstaben) für Beispiele.
- Darstellung von Ordnungszahlen, wie "4<sup>th</sup>" anstelle von "fourth". Siehe [Ordnungszahlen](#ordnungszahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten, also Potenzen einer Zahl, sind einer der häufigsten Verwendungszwecke für hochgestellten Text. Zum Beispiel:

```html
<p>
  One of the most common equations in all of physics is <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Erhobene Buchstaben

Erhobene Buchstaben sind technisch gesehen nicht dasselbe wie Superscript. Jedoch ist es üblich, `<sup>` zu verwenden, um erhobene Buchstaben in HTML darzustellen. Zu den häufigsten Anwendungen erhobener Buchstaben gehört die Darstellung bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordnungszahlen

Ordnungszahlen, wie "fourth" auf Englisch oder "quinto" auf Spanisch, können mit Ziffern und sprachspezifischem Text abgekürzt werden, der im Superscript dargestellt wird:

```html
<p>
  The ordinal number "fifth" can be abbreviated in various languages as follows:
</p>
<ul>
  <li>English: 5<sup>th</sup></li>
  <li>French: 5<sup>ème</sup></li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Ordinal_numbers", 650, 160)}}

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierende Inhalte</a
        >, fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierende Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasierende Inhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">superscript</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("sub")}} HTML-Element, das tiefgestellten Text erzeugt. Beachten Sie, dass `sub` und `sup` nicht gleichzeitig verwendet werden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl einen Superscript als auch einen Subscript neben dem chemischen Symbol eines Elements darzustellen, das seine Ordnungszahl und seine Kernladungszahl repräsentiert.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML-Elemente.
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
