---
title: "<sup>: Das Superscript-Element"
slug: Web/HTML/Element/sup
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<sup>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Superscript angezeigt werden soll. Superskripte werden üblicherweise mit einer angehobenen Grundlinie in kleinerer Schriftgröße dargestellt.

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

## Hinweise zur Verwendung

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden - das heißt, um die Position des Texts zu ändern, um typografischen Konventionen oder Standards zu entsprechen, und nicht ausschließlich zu Präsentations- oder Erscheinungszwecken.

Zum Beispiel sollte das Styling des [Wortzeichens](https://en.wikipedia.org/wiki/Wordmark) eines Unternehmens oder Produkts, das eine angehobene Grundlinie verwendet, mit CSS (höchstwahrscheinlich {{cssxref("vertical-align")}}) und nicht mit `<sup>` erfolgen. Dies könnte zum Beispiel mit `vertical-align: super` oder um die Grundlinie um 50% anzuheben, mit `vertical-align: 50%` geschehen.

Geeignete Anwendungsfälle für `<sup>` umfassen (sind aber nicht unbedingt darauf beschränkt):

- Darstellung von Exponenten, wie zum Beispiel "x<sup>3</sup>". Es könnte in Erwägung gezogen werden, [MathML](/de/docs/Web/MathML) für diese zu verwenden, insbesondere in komplexeren Fällen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Darstellung von [hochgestellten Buchstaben](https://en.wikipedia.org/wiki/Superior_letter), die in einigen Sprachen bei der Wiedergabe bestimmter Abkürzungen verwendet werden. Zum Beispiel kann im Französischen das Wort "mademoiselle" als "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [hochgestellte Buchstaben](#hochgestellte_buchstaben) für Beispiele.
- Darstellung von Ordinalzahlen, wie "4<sup>th</sup>" anstelle von "fourth." Siehe [Ordinalzahlen](#ordinalzahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten oder Potenzen einer Zahl sind eines der häufigsten Anwendungsgebiete für superskriptiven Text. Zum Beispiel:

```html
<p>
  One of the most common equations in all of physics is <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Hochgestellte Buchstaben

Hochgestellte Buchstaben sind technisch gesehen nicht dasselbe wie Superscript. Es ist jedoch üblich, `<sup>` zu verwenden, um hochgestellte Buchstaben in HTML darzustellen. Zu den häufigsten Anwendungen von hochgestellten Buchstaben gehört die Darstellung bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordinalzahlen

Ordinalzahlen, wie "fourth" im Englischen oder "quinto" im Spanischen, können mit Ziffern und sprachspezifischem Text dargestellt werden, der in Superscript gerendert wird:

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- Das {{HTMLElement("sub")}} HTML-Element, das Tiefstellungen erzeugt. Beachten Sie, dass Sie `sub` und `sup` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl einen Superscript als auch einen Subscript neben dem chemischen Symbol eines Elements darzustellen, das seine Ordnungszahl und seine Kernladungszahl repräsentiert.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML-Elemente.
- Die CSS {{cssxref("vertical-align")}} Eigenschaft.
