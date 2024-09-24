---
title: "<pre>: Das Element für vorformatierten Text"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: 9fe5e2339bb17192e502c7e0875b9676ce211163
---

{{HTMLSidebar}}

Das **`<pre>`**-[HTML](/de/docs/Web/HTML)-Element stellt vorformatierten Text dar, der genau so angezeigt wird, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise mit einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font)-Schriftart wiedergegeben. Leerzeichen innerhalb dieses Elements werden so angezeigt, wie sie geschrieben sind.

Standardmäßig ist `<pre>` ein [Block-Level](/de/docs/Glossary/Block-level_content)-Element, d.h. sein Standard-{{cssxref("display")}}-Wert ist `block`.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

Wenn Sie reservierte Zeichen wie `<`, `>`, `&` und `"` innerhalb des `<pre>`-Tags anzeigen müssen, müssen die Zeichen mit ihren jeweiligen {{glossary("character reference", "Zeichenreferenzen")}} maskiert werden.

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computer-Code, Computerausgabe und Benutzereingabe darzustellen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keine visuelle Wirkung; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, wie der Überlauf erfolgen muss. In modernen Browsern wird dieser Hinweis ignoriert und hat keine visuelle Wirkung; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für alle Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte klar und prägnant den Inhalt des Bildes oder Diagramms beschreiben.

Menschen mit Sehbehinderungen, die mit Hilfe unterstützender Technologien wie einem Screenreader surfen, verstehen möglicherweise nicht, was die Zeichen des vorformatierten Textes darstellen, wenn sie in der Reihenfolge vorgelesen werden.

Eine Kombination aus den {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elementen, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA) `role`- und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribute auf dem `pre`-Element, ermöglicht es, die vorformatierte {{Glossary("ASCII")}}-Kunst als Bild mit alternativem Text anzukündigen, wobei die `figcaption` als Bildunterschrift dient.

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
    Eine Kuh, die sagt: "I'm an expert in my field." Die Kuh ist mit
    vorformatierten Textzeichen illustriert.
  </figcaption>
</figure>
```

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Bereitstellung von Textalternativen für ASCII-Kunst, Emoticons und Leetspeak | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Mit CSS die Schriftfarbe zu ändern, ist einfach.</p>
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
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generisch</a
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
      <td>{{domxref("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
- {{glossary("Zeichenreferenz")}}
- Verwandtes Element: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
