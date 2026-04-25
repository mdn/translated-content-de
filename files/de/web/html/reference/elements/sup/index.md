---
title: "`<sup>` HTML-Superscript-Element"
short-title: <sup>
slug: Web/HTML/Reference/Elements/sup
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<sup>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Superscript angezeigt werden soll. Hochgestellte Zeichen werden üblicherweise mit einer angehobenen Grundlinie und in kleinerem Text dargestellt.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden, um die Position des Textes entsprechend typografischer Konventionen oder Standards zu ändern, anstatt rein für Präsentations- oder Erscheinungszwecke.

Um beispielsweise das [Wordmark](https://en.wikipedia.org/wiki/Wordmark) eines Unternehmens oder Produkts zu gestalten, das eine erhöhte Grundlinie verwendet, sollte CSS verwendet werden (höchstwahrscheinlich {{cssxref("vertical-align")}}) anstelle von `<sup>`. Dies könnte z.B. mit `vertical-align: super` oder, um die Grundlinie um 50 % zu verschieben, mit `vertical-align: 50%` erfolgen.

Geeignete Anwendungsfälle für `<sup>` umfassen (sind aber nicht unbedingt darauf beschränkt):

- Darstellung von Exponenten, wie bei "x<sup>3</sup>". Es könnte in Betracht gezogen werden, [MathML](/de/docs/Web/MathML) für diese zu verwenden, insbesondere bei komplexeren Fällen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Darstellung von [superiors Schreibweise](https://en.wikipedia.org/wiki/Superior_letter), die in einigen Sprachen bei der Wiedergabe bestimmter Abkürzungen verwendet wird. Zum Beispiel kann im Französischen das Wort "mademoiselle" mit "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [Superiors Schreibweise](#superiors_schreibweise) für Beispiele.
- Darstellung von Ordinalzahlen, wie "4<sup>th</sup>" anstelle von "fourth." Siehe [Ordinalzahlen](#ordinalzahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten oder Potenzen einer Zahl gehören zu den häufigsten Anwendungen von hochgestelltem Text. Zum Beispiel:

```html
<p>
  One of the most common equations in all of physics is <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Superiors Schreibweise

Superiors Schreibweise ist technisch gesehen nicht dasselbe wie Superscript. Es ist jedoch üblich, `<sup>` zu verwenden, um Superiors Schreibweise in HTML darzustellen. Zu den häufigsten Anwendungen der Superiors Schreibweise gehört die Darstellung bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordinalzahlen

Ordinalzahlen, wie "fourth" im Englischen oder "quinto" im Spanischen, können mit Ziffern und sprachspezifischem Text abgekürzt werden, der im Superscript dargestellt wird:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">hochgestellt</a
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

- Das {{HTMLElement("sub")}} HTML-Element, das Tiefgestellt produziert. Beachten Sie, dass `sub` und `sup` nicht gleichzeitig verwendet werden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um neben dem chemischen Symbol eines Elements sowohl ein Superscript als auch ein Subscript zu erzeugen, das seine Ordnungszahl und seine Kernladungszahl darstellt.
- Die [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup) MathML-Elemente.
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
