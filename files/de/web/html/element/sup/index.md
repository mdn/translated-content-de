---
title: "<sup>: Das Superscript-Element"
slug: Web/HTML/Element/sup
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{HTMLSidebar}}

Das **`<sup>`** [HTML](/de/docs/Web/HTML)-Element gibt an, dass Inline-Text aus typografischen Gründen als Superscript angezeigt werden soll. Superskripte werden normalerweise mit einer angehobenen Grundlinie und kleinerem Text dargestellt.

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

## Verwendungsnotizen

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden, d. h. um die Position des Textes anzupassen, um typografischen Konventionen oder Standards zu entsprechen, und nicht ausschließlich für Präsentations- oder Darstellungszwecke.

Beispielsweise sollte das Gestalten des [Wortzeichens](https://en.wikipedia.org/wiki/Wordmark) eines Unternehmens oder Produkts, das eine angehobene Grundlinie verwendet, mithilfe von CSS (höchstwahrscheinlich {{cssxref("vertical-align")}}) und nicht mit `<sup>` erfolgen. Dies könnte mittels `vertical-align: super` zur Anpassung der Baseline oder um sie um 50% anzuheben mit `vertical-align: 50%` umgesetzt werden.

Angemessene Anwendungsfälle für `<sup>` umfassen (sind aber nicht unbedingt darauf beschränkt):

- Darstellung von Exponenten, wie "x<sup>3</sup>". Es könnte sinnvoll sein, [MathML](/de/docs/Web/MathML) für diese zu verwenden, insbesondere in komplexeren Fällen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Darstellung von [erhobenen Buchstaben](https://en.wikipedia.org/wiki/Superior_letter), die in einigen Sprachen bei der Wiedergabe bestimmter Abkürzungen verwendet werden. Zum Beispiel kann im Französischen das Wort "mademoiselle" als "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [Erhobene Buchstaben](#erhobene_buchstaben) für Beispiele.
- Darstellung von Ordnungszahlen, wie "4<sup>th</sup>" anstelle von "fourth". Siehe [Ordnungszahlen](#ordnungszahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten oder Potenzen einer Zahl sind eines der häufigsten Einsatzgebiete von Superskript-Text. Zum Beispiel:

```html
<p>
  One of the most common equations in all of physics is <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Erhobene Buchstaben

Erhobene Buchstaben sind technisch gesehen nicht dasselbe wie Superskript. Es ist jedoch üblich, `<sup>` zu verwenden, um erhobene Buchstaben in HTML darzustellen. Zu den häufigsten Verwendungen erhobener Buchstaben gehört die Darstellung bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordnungszahlen

Ordnungszahlen, wie "fourth" im Englischen oder "quinto" im Spanischen, können mit Ziffern und sprachspezifischem in Superskript gerendertem Text abgekürzt werden:

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >.
      </td>
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
          >Phrasinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">superscript</a
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

- Das {{HTMLElement("sub")}} HTML-Element, das Subscripts erzeugt. Beachten Sie, dass Sie `sub` und `sup` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl ein Superscript als auch ein Subscript neben dem chemischen Symbol eines Elements darzustellen, das seine Ordnungszahl und seine Kernnummer repräsentiert.
- Die [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup), und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup) MathML-Elemente.
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
