---
title: "<sup>: Das Superscript-Element"
slug: Web/HTML/Reference/Elements/sup
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<sup>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als superscript angezeigt werden soll. Superscripts werden üblicherweise mit einer angehobenen Basislinie und kleinerem Text dargestellt.

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungszweck

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden, also um die Position des Textes gemäss typografischen Konventionen oder Standards zu ändern, nicht ausschliesslich für Präsentations- oder Erscheinungszwecke.

Um beispielsweise das [Markenzeichen](https://en.wikipedia.org/wiki/Wordmark) eines Unternehmens oder Produkts, das eine angehobene Basislinie verwendet, zu stylen, sollte CSS und nicht `<sup>` benutzt werden (höchstwahrscheinlich {{cssxref("vertical-align")}}). Dies würde zum Beispiel mit `vertical-align: super` oder, um die Basislinie um 50% anzuheben, `vertical-align: 50%` umgesetzt werden.

Geeignete Anwendungsfälle für `<sup>` beinhalten (sind jedoch nicht notwendigerweise darauf beschränkt):

- Darstellung von Exponenten, wie "x<sup>3</sup>". Es könnte der Einsatz von [MathML](/de/docs/Web/MathML) in Erwägung gezogen werden, insbesondere bei komplexeren Fällen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Darstellung von [höhergestellten Buchstaben](https://en.wikipedia.org/wiki/Superior_letter), die in einigen Sprachen bei der Wiedergabe bestimmter Abkürzungen verwendet werden. Zum Beispiel kann im Französischen das Wort "mademoiselle" als "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [Höhergestellte Buchstaben](#höhergestellte_buchstaben) für Beispiele.
- Darstellung von Ordnungszahlen, wie "4<sup>th</sup>" anstelle von "fourth". Siehe [Ordungszahlen](#ordnungszahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten oder Potenzen einer Zahl sind eines der häufigsten Einsatzgebiete für hochgestellten Text. Zum Beispiel:

```html
<p>
  One of the most common equations in all of physics is <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Höhergestellte Buchstaben

Höhergestellte Buchstaben sind technisch gesehen nicht dasselbe wie Superscript. Es ist jedoch gängig, `<sup>` zu verwenden, um höhergestellte Buchstaben in HTML darzustellen. Zu den häufigsten Anwendungen höhergestellter Buchstaben gehört die Präsentation bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordnungszahlen

Ordnungszahlen, wie "fourth" im Englischen oder "quinto" im Spanischen, können abgekürzt unter Verwendung von Ziffern und sprachspezifischem, als hochgestellt dargestelltem Text:

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
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

- Das {{HTMLElement("sub")}} HTML-Element, das Subscripts erzeugt. Beachten Sie, dass `sub` und `sup` nicht gleichzeitig verwendet werden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl ein Superscript als auch ein Subscript neben dem chemischen Symbol eines Elements anzuzeigen, welches seine Ordnungs- und Massenzahl repräsentiert.
- Die MathML-Elemente [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup).
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
