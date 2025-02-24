---
title: "<pre>: Das vorformatierte Textelement"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert vorformatierten Text, der genau so präsentiert wird, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise in einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font)-Schriftart dargestellt.

Leerzeichen innerhalb dieses Elements werden wie geschrieben angezeigt, mit einer Ausnahme. Wenn ein oder mehrere führende neue Zeilenzeichen unmittelbar nach dem öffnenden `<pre>`-Tag eingefügt werden, wird das _erste_ neue Zeilenzeichen entfernt.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst. Daher müssen, wenn Sie sicherstellen möchten, dass Ihr Textinhalt als reiner Text bleibt, einige Syntaxzeichen wie `<` möglicherweise mit den entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} maskiert werden. Siehe [Mehrdeutige Zeichen maskieren](#mehrdeutige_zeichen_maskieren) für weitere Informationen.

`<pre>`-Elemente enthalten häufig die {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computercode, Computerausgabe und Benutzereingaben darzustellen.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Block-level")}}-Element, d.h. sein Standardwert von {{cssxref("display")}} ist `block`.

{{InteractiveExample("HTML Demo: &lt;pre&gt;", "tabbed-standard")}}

```html interactive-example
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

```css interactive-example
pre {
  font-size: 0.7rem;
  margin: 0;
}
```

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Beinhaltet die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keine visuelle Wirkung; um solch eine Wirkung zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, der angibt, wie der Überlauf erfolgen muss. In modernen Browsern wird dieser Hinweis ignoriert und führt zu keinem sichtbaren Effekt; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für alle Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und prägnant beschreiben.

Personen mit Sehbehinderungen, die mit Hilfe von unterstützender Technologie wie einem Bildschirmleser surfen, können möglicherweise nicht verstehen, was die vorformatierten Textzeichen darstellen, wenn sie hintereinander vorgelesen werden.

Eine Kombination aus den {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elementen, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA)-`role` und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribute auf dem `pre`-Element, ermöglicht es, die vorformatierten {{Glossary("ASCII", "ASCII")}}-Grafiken als Bild mit alternativem Text anzukündigen, wobei das `figcaption` als Bildunterschrift dient.

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

- [MDN Verständnis der WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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

### Mehrdeutige Zeichen maskieren

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element demonstrieren. Die Zeichenfolgen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Tag-Zeichen als Text anzuzeigen, müssen Sie den `<`-Charakter mit seiner Zeichenreferenz maskieren, damit die Sequenzen nicht länger gültige Tags definieren.

In der Realität behandelt der HTML-Parser die meisten Zeichen als einfachen Text, es sei denn in bestimmten Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch geparst werden; `&am;` ist in Ordnung, aber `&amp;` nicht. Es ist jedoch eine gute Praxis, alle mehrdeutigen Zeichen zu maskieren, um Verwirrung zu vermeiden, insbesondere wenn Sie HTML programmatisch generieren und den `<pre>`-Inhalt injizieren. In diesem Fall hier eine gute Faustregel zum Maskieren von Zeichen:

1. Schreiben Sie zunächst den Inhalt, wie er im HTML-Dokument erscheinen soll.
2. Ersetzen Sie alle Kaufmannsund-Zeichen (`&`) durch `&amp;`. Machen Sie diesen Schritt zuerst, damit neue `&`-Zeichen, die im nächsten Schritt erstellt werden, nicht maskiert werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Dies sollte dazu führen, dass der Inhalt so angezeigt wird, wie Sie es beabsichtigt haben. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` zu `&gt;`, `"` zu `&quot;` und `'` zu `&apos;`), wird jedoch keinen Schaden anrichten.

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
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzähnlicher Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Jede</td>
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
