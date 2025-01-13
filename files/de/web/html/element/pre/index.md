---
title: "`<pre>`: Das Element für vorformatierten Text"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: 6ca95422a33ab55e746004dd877156d18e42d5b3
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert vorformatierten Text, der genau so dargestellt werden soll, wie er in der HTML-Datei geschrieben wurde. Der Text wird typischerweise mit einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font)-Schriftart angezeigt.

Leerzeichen innerhalb dieses Elements werden wie geschrieben angezeigt, mit einer Ausnahme. Wenn ein oder mehrere führende Zeilenumbrüche unmittelbar nach dem öffnenden `<pre>`-Tag enthalten sind, wird das _erste_ Zeilenumbruchzeichen entfernt.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Block-Level")}}-Element, d.h. sein Standardwert für {{cssxref("display")}} ist `block`.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

Wenn Sie reservierte Zeichen wie `<`, `>`, `&` und `"` innerhalb des `<pre>`-Tags anzeigen müssen, müssen die Zeichen mit ihren entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} maskiert werden.

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computer-Code, Computerausgaben und Benutzereingaben darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keine visuelle Wirkung; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, wie der Überlauf geschehen soll. In modernen Browsern wird dieser Hinweis ignoriert und hat keine visuelle Wirkung; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für alle mit vorformatiertem Text erstellten Bilder oder Diagramme bereitzustellen. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und präzise beschreiben.

Personen mit Sehschwächen, die Assistive Technologien wie einen Screenreader verwenden, können möglicherweise nicht verstehen, was die Zeichen des vorformatierten Textes darstellen, wenn sie in Reihenfolge vorgelesen werden.

Eine Kombination der {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elemente, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA)-`role` und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribute auf dem `pre`-Element, ermöglicht es, dass das vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunstwerk als Bild mit alternativem Text angekündigt wird, und `figcaption` dient als Bildunterschrift.

### Beispiel

```html
<figure>
  <pre role="img" aria-label="ASCII COW">
      ___________________________
  &lt; I'm an expert in my field. &gt;
      ---------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pre>
  <figcaption id="cow-caption">
    A cow saying, "I'm an expert in my field." The cow is illustrated using
    preformatted text characters.
  </figcaption>
</figure>
```

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Bereitstellung von Textalternativen für ASCII-Kunst, Emoticons und Leetspeak | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Using CSS to change the font color is easy.</p>
<pre><code>
body {
  color: red;
}
</code></pre>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

### Maskierung von reservierten Zeichen

#### HTML

```html
<pre><code>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0)
  return &quot;Single Digit Number&quot;
</code></pre>
```

#### Ergebnis

{{EmbedLiveSample("Escaping_reserved_characters")}}

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
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
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
      <td>[`HTMLPreElement`](/de/docs/Web/API/HTMLPreElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
- {{Glossary("Character_reference", "Zeichenreferenz")}}
- Verwandtes Element: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
