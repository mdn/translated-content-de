---
title: "<pre>: Das Preformatierte Textelement"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: 9fe5e2339bb17192e502c7e0875b9676ce211163
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert vorformatierten Text, der genau so dargestellt werden soll, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise in einer nicht proportionalen oder [monospace](https://en.wikipedia.org/wiki/Monospaced_font) Schriftart dargestellt. Leerzeichen innerhalb dieses Elements werden angezeigt, wie sie geschrieben sind.

Standardmäßig ist `<pre>` ein [Block-Level](/de/docs/Glossary/Block-level_content)-Element, d.h. sein Standardwert für {{cssxref("display")}} ist `block`.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

Wenn Sie reservierte Zeichen wie `<`, `>`, `&` und `"` innerhalb des `<pre>`-Tags anzeigen müssen, müssen diese Zeichen mit ihren jeweiligen [Zeichenreferenzen](/de/docs/Glossary/character_reference) maskiert werden.

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computercode, Computerausgaben und Benutzereingaben darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keinen visuellen Effekt; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, der angibt, wie der Überlauf erfolgen muss. In modernen Browsern wird dieser Hinweis ignoriert und es entsteht kein visueller Effekt; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für alle Bilder oder Diagramme zu liefern, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und prägnant beschreiben.

Menschen mit Sehbehinderungen, die mit Unterstützungstechnologien wie einem Screenreader browsen, verstehen möglicherweise nicht, was die Zeichen des vorformatierten Textes darstellen, wenn sie in der Reihenfolge vorgelesen werden.

Eine Kombination der {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}-Elemente, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA) `role`- und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribute auf dem `pre`-Element, ermöglicht es, dass die vorformatierte [ASCII](/de/docs/Glossary/ASCII)-Kunst als Bild mit alternativem Text angekündigt wird, wobei die `figcaption` als Bildunterschrift dient.

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

- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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
          >Fließender Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierter Inhalt</a
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Alle</td>
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
- [Zeichenreferenz](/de/docs/Glossary/Character_reference)
- Verwandtes Element: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
