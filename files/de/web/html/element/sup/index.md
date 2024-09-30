---
title: "<sup>: Das Superscript-Element"
slug: Web/HTML/Element/sup
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<sup>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Superscript angezeigt werden soll. Superscripts werden normalerweise mit einer angehobenen Grundlinie unter Verwendung kleinerer Schrift dargestellt.

{{EmbedInteractiveExample("pages/tabbed/sup.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden – also um die Position des Textes zu ändern, um typografischen Konventionen oder Standards zu entsprechen, und nicht ausschließlich aus Präsentations- oder Darstellungszwecken.

Zum Beispiel sollte das Styling eines [Wortzeichens](https://en.wikipedia.org/wiki/Wordmark) eines Geschäfts oder Produkts, das eine angehobene Grundlinie verwendet, mit CSS (höchstwahrscheinlich {{cssxref("vertical-align")}}) und nicht mit `<sup>` erfolgen. Dies könnte beispielsweise mit `vertical-align: super` oder, um die Grundlinie um 50 % anzuheben, mit `vertical-align: 50%` gemacht werden.

Geeignete Anwendungsfälle für `<sup>` umfassen (sind aber nicht unbedingt darauf beschränkt):

- Darstellung von Exponenten, wie "x<sup>3</sup>". Es kann sich lohnen, [MathML](/de/docs/Web/MathML) dafür zu verwenden, insbesondere in komplexeren Fällen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Darstellung von [hochgestellten Buchstaben](https://en.wikipedia.org/wiki/Superior_letter), die in einigen Sprachen bei der Wiedergabe bestimmter Abkürzungen verwendet werden. Zum Beispiel kann im Französischen das Wort "mademoiselle" als "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [Hochgestellte Buchstaben](#hochgestellte_buchstaben) für Beispiele.
- Darstellung von Ordnungszahlen, wie "4<sup>th</sup>" statt "fourth". Siehe [Ordnungszahlen](#ordnungszahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten, oder Potenzen einer Zahl, gehören zu den häufigsten Anwendungen von superskriptiertem Text. Zum Beispiel:

```html
<p>
  One of the most common equations in all of physics is <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Hochgestellte Buchstaben

Hochgestellte Buchstaben sind technisch gesehen nicht dasselbe wie Superscript. Trotzdem wird `<sup>` häufig verwendet, um hochgestellte Buchstaben in HTML darzustellen. Zu den häufigsten Verwendungen von hochgestellten Buchstaben gehört die Darstellung bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordnungszahlen

Ordnungszahlen, wie "fourth" im Englischen oder "quinto" im Spanischen, können unter Verwendung von Zahlen und sprachspezifisch im Superscript gerendertem Text abgekürzt werden:

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
          >Phrasierungsinhalt</a
        >, wahrnehmbarer Inhalt.
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
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
      <td>Jede</td>
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

- Das {{HTMLElement("sub")}} HTML-Element, das tiefgestellte Schrift erzeugt. Beachten Sie, dass Sie `sub` und `sup` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl ein Superscript als auch ein Subscript neben dem chemischen Symbol eines Elements darzustellen, das seine Ordnungszahl und seine Kernladungszahl repräsentiert.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML-Elemente.
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
