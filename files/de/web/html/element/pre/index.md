---
title: "<pre>: Das vorformatierte Textelement"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: 875272cef3d22bc3b78c5d9bf1fa882bf4a5248a
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert vorformatierten Text, der genau so dargestellt werden soll, wie er in der HTML-Datei geschrieben wurde. Der Text wird typischerweise in einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font)-Schriftart gerendert.

Leerzeichen innerhalb dieses Elements werden wie geschrieben angezeigt, mit einer Ausnahme: Wenn unmittelbar nach dem öffnenden `<pre>`-Tag ein oder mehrere führende Zeilenumbrüche enthalten sind, wird der _erste_ Zeilenumbruch entfernt.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst. Um sicherzustellen, dass Ihr Textinhalt als reiner Text erhalten bleibt, müssen einige Syntaxzeichen wie `<` möglicherweise mithilfe ihrer entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} maskiert werden. Weitere Informationen finden Sie unter [maskieren mehrdeutiger Zeichen](#maskieren_mehrdeutiger_zeichen).

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computercode, Computerausgaben und Benutzereingaben darzustellen.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Block-Level")}}-Element; d. h., sein Standardwert für {{cssxref("display")}} ist `block`.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben soll. Obwohl technisch noch implementiert, hat dieses Attribut keine visuelle Wirkung. Um eine solche Wirkung zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Gibt einen _Hinweis_, wie der Überlauf gehandhabt werden soll. In modernen Browsern wird dieser Hinweis ignoriert und hat keine visuelle Wirkung. Um eine solche Wirkung zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und prägnant beschreiben.

Menschen mit Sehbehinderungen, die unterstützende Technologien wie einen Screenreader verwenden, können möglicherweise nicht verstehen, was die Zeichen im vorformatierten Text darstellen, wenn diese nacheinander vorgelesen werden.

Eine Kombination aus den {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elementen, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA)-`role` und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribute am `pre`-Element, ermöglicht es, dass die vorformatierte {{Glossary("ASCII", "ASCII")}}-Grafik als Bild mit Alternativtext angekündigt wird, wobei das `figcaption` als Bildunterschrift dient.

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

- [MDN Verstehen von WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Bereitstellung von Textalternativen für ASCII-Grafiken, Emoticons und Leetspeak | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

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

### Maskieren mehrdeutiger Zeichen

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element darstellen. Die Zeichenfolgen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Tag-Zeichen als Text darzustellen, müssen Sie das `<`-Zeichen (zumindest) mithilfe seiner Zeichenreferenz maskieren, sodass die Zeichenfolgen keine gültigen Tags mehr definieren.

In Wirklichkeit behandelt der HTML-Parser die meisten Zeichen als Klartext, es sei denn, sie befinden sich in spezifischen Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch geparst; `&am;` ist in Ordnung, aber `&amp;` nicht. Dennoch ist es eine gute Praxis, alle mehrdeutigen Zeichen zu maskieren, um jegliche Verwirrung zu vermeiden, insbesondere wenn Sie HTML programmgesteuert generieren und den Inhalt des `<pre>`-Elements einfügen. In diesem Fall ist hier eine Faustregel, wie Zeichen maskiert werden sollen:

1. Schreiben Sie zunächst den Inhalt so, wie er im HTML-Dokument erscheinen soll.
2. Ersetzen Sie alle Kaufmännischen Und-Zeichen (`&`) durch `&amp;`. Machen Sie diesen Schritt zuerst, damit neue `&`-Zeichen, die im nächsten Schritt generiert werden, nicht maskiert werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Dies sollte dazu führen, dass der Inhalt wie beabsichtigt dargestellt wird. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` durch `&gt;`, `"` durch `&quot;` und `'` durch `&apos;`), wird jedoch keinen Schaden anrichten.

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
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert.
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
