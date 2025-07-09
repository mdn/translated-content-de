---
title: "<sup>: Das Superscript-Element"
slug: Web/HTML/Reference/Elements/sup
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<sup>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als hochgestellt angezeigt werden soll. Hochgestellt wird normalerweise mit einer angehobenen Grundlinie und kleinerem Text gerendert.

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

## Nutzungshinweise

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden – also um die Position des Textes zu ändern, um den typografischen Konventionen oder Standards zu entsprechen, und nicht ausschließlich zu Präsentations- oder Darstellungszwecken.

Zum Beispiel sollte das [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) eines Unternehmens oder Produkts, das eine angehobene Grundlinie verwendet, mittels CSS gestylt werden (höchstwahrscheinlich {{cssxref("vertical-align")}}) und nicht mit `<sup>`. Dies würde z. B. durch `vertical-align: super` oder durch Anheben der Grundlinie um 50% mit `vertical-align: 50%` erreicht werden.

Geeignete Anwendungsfälle für `<sup>` umfassen (sind aber nicht unbedingt darauf beschränkt):

- Darstellung von Exponenten, wie "x<sup>3</sup>". Es könnte sich lohnen, die Verwendung von [MathML](/de/docs/Web/MathML) in Betracht zu ziehen, insbesondere in komplexeren Fällen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Darstellung von [Superior-Schriftzeichen](https://en.wikipedia.org/wiki/Superior_letter), die in einigen Sprachen bei bestimmten Abkürzungen verwendet werden. Zum Beispiel kann im Französischen das Wort "mademoiselle" mit "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [Superior-Schriftzeichen](#superior-schriftzeichen) für Beispiele.
- Darstellung von Ordinalzahlen, wie "4<sup>th</sup>" statt "vierter". Siehe [Ordinalzahlen](#ordinalzahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten oder Potenzen einer Zahl sind eine der häufigsten Anwendungen für hochgestellten Text. Zum Beispiel:

```html
<p>
  One of the most common equations in all of physics is <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Superior-Schriftzeichen

Superior-Schriftzeichen sind nicht technisch dasselbe wie Superscript. Es ist jedoch üblich, `<sup>` zu verwenden, um Superior-Schriftzeichen in HTML darzustellen. Zu den häufigsten Anwendungen von Superior-Schriftzeichen gehört die Darstellung bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordinalzahlen

Ordinalzahlen, wie "vierter" auf Englisch oder "quinto" auf Spanisch, können durch Ziffern und sprachspezifischen, hochgestellten Text abgekürzt werden:

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
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
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
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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

- Das {{HTMLElement("sub")}} HTML-Element, das Tiefschriften erzeugt. Beachten Sie, dass `sub` und `sup` nicht gleichzeitig verwendet werden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um gleichzeitig sowohl ein Superscript als auch ein Subscript neben dem chemischen Symbol eines Elements zu erzeugen, das seine Ordnungszahl und seine Kernladungszahl darstellt.
- Die [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup) MathML-Elemente.
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
