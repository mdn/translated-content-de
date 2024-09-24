---
title: "<sup>: Das Hochgestellt-Element"
slug: Web/HTML/Element/sup
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<sup>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Inline-Text, der aus rein typografischen Gründen als hochgestellt angezeigt werden soll. Hochstellungen werden üblicherweise mit einer angehobenen Grundlinie und kleinerem Text dargestellt.

{{EmbedInteractiveExample("pages/tabbed/sup.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<sup>`-Element sollte nur aus typografischen Gründen verwendet werden – das heißt, um die Position des Textes entsprechend typografischen Konventionen oder Standards zu ändern, und nicht nur aus Präsentations- oder Erscheinungsgründen.

Zum Beispiel sollte die Stilisierung der [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) eines Unternehmens oder Produkts, das eine angehobene Grundlinie verwendet, mit CSS (höchstwahrscheinlich {{cssxref("vertical-align")}}) und nicht mit `<sup>` erfolgen. Dies könnte beispielsweise mit `vertical-align: super` oder um die Grundlinie um 50 % anzuheben, mit `vertical-align: 50%` durchgeführt werden.

Geeignete Anwendungsfälle für `<sup>` umfassen (sind aber nicht notwendigerweise darauf beschränkt):

- Anzeige von Exponenten, wie "x<sup>3</sup>". Es könnte sinnvoll sein, in solchen Fällen, insbesondere bei komplexeren Ausdrücken, die Verwendung von [MathML](/de/docs/Web/MathML) zu erwägen. Siehe [Exponenten](#exponenten) unter [Beispiele](#beispiele) unten.
- Anzeige von [superior lettering](https://en.wikipedia.org/wiki/Superior_letter), das in einigen Sprachen bei der Darstellung bestimmter Abkürzungen verwendet wird. Zum Beispiel kann im Französischen das Wort "mademoiselle" als "M<sup>lle</sup>" abgekürzt werden; dies ist ein akzeptabler Anwendungsfall. Siehe [Superior lettering](#superior_lettering) für Beispiele.
- Darstellung von Ordinalzahlen, wie "4<sup>th</sup>" anstelle von "fourth". Siehe [Ordinalzahlen](#ordinalzahlen) für Beispiele.

## Beispiele

### Exponenten

Exponenten, oder Potenzen einer Zahl, sind eine der häufigsten Anwendungen von hochgestelltem Text. Zum Beispiel:

```html
<p>
  Eine der bekanntesten Gleichungen in der Physik ist <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Exponents", 650, 80)}}

### Superior lettering

Superior lettering ist technisch gesehen nicht dasselbe wie hochgestellt. Es ist jedoch üblich, `<sup>` zu verwenden, um superior lettering in HTML darzustellen. Zu den häufigsten Verwendungen von superior lettering gehört die Präsentation bestimmter Abkürzungen im Französischen:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Ergebnis

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### Ordinalzahlen

Ordinalzahlen, wie "fourth" auf Englisch oder "quinto" auf Spanisch, können durch Zahlen und sprachenspezifischen Text dargestellt werden, die als hochgestellt angezeigt werden:

```html
<p>
  Die Ordinalzahl "fifth" kann in verschiedenen Sprachen wie folgt abgekürzt werden:
</p>
<ul>
  <li>Englisch: 5<sup>th</sup></li>
  <li>Französisch: 5<sup>ème</sup></li>
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
      <td>Keine, sowohl Start- als auch End-Tag sind erforderlich.</td>
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("sub")}} HTML-Element, das Tiefstellungen erzeugt. Beachten Sie, dass `sub` und `sup` nicht gleichzeitig verwendet werden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl ein Hochgestellt- als auch ein Tiefstelltzeichen neben dem chemischen Symbol eines Elements darzustellen, das seine Ordnungszahl und seine Massenzahl repräsentiert.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML-Elemente.
- Die CSS {{cssxref("vertical-align")}} Eigenschaft.
