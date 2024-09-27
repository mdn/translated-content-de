---
title: "<sup>: Das Superscript-Element"
slug: Web/HTML/Element/sup
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<sup>`**-[HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Hochgestellt angezeigt werden soll. Hochgestellte Texte werden normalerweise mit einer angehobenen Grundlinie unter Verwendung von kleinerem Text dargestellt.

{{EmbedInteractiveExample("pages/tabbed/sup.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden – das heißt, um die Position des Textes zu ändern, um typografischen Konventionen oder Standards zu entsprechen, und nicht allein zu Präsentations- oder Darstellungszwecken.

Zum Beispiel sollte der Wortmarke eines Unternehmens oder Produkts, die eine angehobene Grundlinie verwendet, mithilfe von CSS gestylt werden (höchstwahrscheinlich {{cssxref("vertical-align")}}) und nicht mit `<sup>`. Dies würde durch die Verwendung von z.B. `vertical-align: super` oder, um die Grundlinie um 50% zu verschieben, `vertical-align: 50%` erfolgen.

Angemessene Einsatzmöglichkeiten für `<sup>` umfassen (sind aber nicht unbedingt darauf beschränkt):

- Die Anzeige von Exponenten, wie zum Beispiel "x<sup>3</sup>". Es kann lohnenswert sein, [MathML](/de/docs/Web/MathML) für solche Zwecke zu verwenden, besonders in komplexeren Fällen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Die Darstellung von [hochgestellten Buchstaben](https://en.wikipedia.org/wiki/Superior_letter), die in einigen Sprachen zur Darstellung bestimmter Abkürzungen verwendet werden. Zum Beispiel kann im Französischen das Wort "mademoiselle" als "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [Hochgestellte Buchstaben](#hochgestellte_buchstaben) für Beispiele.
- Die Darstellung von Ordnungszahlen, wie "4<sup>th</sup>" anstelle von "fourth". Siehe [Ordnungszahlen](#ordnungszahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten oder Potenzen einer Zahl gehören zu den häufigsten Anwendungen von hochgestellten Texten. Zum Beispiel:

```html
<p>
  One of the most common equations in all of physics is <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Hochgestellte Buchstaben

Hochgestellte Buchstaben sind technisch gesehen nicht dasselbe wie hochgestellter Text. Es ist jedoch üblich, `<sup>` zu verwenden, um hochgestellte Buchstaben in HTML darzustellen. Zu den häufigsten Anwendungen von hochgestellten Buchstaben gehört die Darstellung bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordnungszahlen

Ordnungszahlen, wie "fourth" im Englischen oder "quinto" im Spanischen, können abgekürzt werden, indem Ziffern und sprachspezifischer Text hochgestellt dargestellt werden:

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
          >Fluss-Inhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
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

- Das {{HTMLElement("sub")}} HTML-Element, das Tiefgestellt erzeugt. Beachten Sie, dass Sie `sub` und `sup` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl einen hochgestellten als auch einen tiefgestellten Text neben dem chemischen Symbol eines Elements zu erzeugen, um dessen Ordnungszahl und seine Kernnummer darzustellen.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup), und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML-Elemente.
- Die CSS {{cssxref("vertical-align")}}-Eigenschaft.
