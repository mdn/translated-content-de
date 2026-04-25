---
title: "`<pre>` HTML-Element für vorformatierten Text"
short-title: <pre>
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert vorformatierten Text, der genau so dargestellt wird, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise in einer Schriftart mit fester Breite oder [Monospace](https://en.wikipedia.org/wiki/Monospaced_font) wiedergegeben.

Leerzeichen innerhalb dieses Elements werden so angezeigt, wie sie geschrieben wurden, mit einer Ausnahme. Wenn ein oder mehrere führende Zeilenumbrüche direkt auf den öffnenden `<pre>`-Tag folgen, wird das _erste_ Zeilenumbruchszeichen entfernt. Diese Transformation wird durch den HTML-Parser durchgeführt und gilt nicht bei der Verwendung von {{Glossary("XHTML", "XHTML")}}.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst. Wenn Sie sicherstellen möchten, dass Ihr Textinhalt als reiner Text bleibt, müssen Sie einige Syntaxzeichen, wie `<`, möglicherweise mit den entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} maskieren. Weitere Informationen finden Sie unter [Maskierung von mehrdeutigen Zeichen](#maskierung_von_mehrdeutigen_zeichen).

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}} Elemente, um Computer-Code, Computerausgabe und Benutzereingaben darzustellen.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Block-Element")}}, d.h. der standardmäßige {{cssxref("display")}}-Wert ist `block`.

{{InteractiveExample("HTML Demo: &lt;pre&gt;", "tabbed-standard")}}

```html interactive-example
<pre>
             S
             A
            LUT
             M
            O N
            D  E
            DONT
          JE SUIS
          LA  LAN
          G U E  É
         L O Q U E N
        TE      QUESA
       B  O  U  C  H  E
      O        P A R I S
     T I R E   ET   TIRERA
    T O U             JOURS
   AUX                  A  L
 LEM                      ANDS   - Apollinaire
</pre>
```

```css interactive-example
pre {
  font-size: 0.7rem;
  margin: 0;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch weiterhin implementiert, hat dieses Attribut keine visuelle Wirkung; verwenden Sie stattdessen CSS {{Cssxref("width")}}, um eine solche Wirkung zu erzielen.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, wie der Überlauf stattfinden muss. In modernen Browsern wird dieser Hinweis ignoriert und führt zu keiner visuellen Wirkung; verwenden Sie stattdessen CSS {{Cssxref("white-space")}}, um eine solche Wirkung zu erzielen.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für alle Bilder oder Diagramme zu bieten, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und präzise beschreiben.

Personen mit Sehbeeinträchtigungen, die mit Unterstützungstechnologien wie einem Screenreader surfen, können möglicherweise nicht verstehen, was die Zeichen des vorformatierten Textes darstellen, wenn sie der Reihe nach vorgelesen werden.

Eine Kombination aus {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}} Elementen, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA) `role`- und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribute auf dem `pre`-Element, ermöglicht es der vorformatierten {{Glossary("ASCII", "ASCII")}}-Kunst, als Bild mit alternativem Text angekündigt zu werden, wobei `figcaption` als Bildunterschrift dient.

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

- [MDN-Verständnis der WCAG, Erklärung zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Bereitstellung von Textalternativen für ASCII-Kunst, Emoticons und Leetspeak | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## Beispiele

### Grundlegendes Beispiel

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

### Maskierung von mehrdeutigen Zeichen

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element demonstrieren. Die Zeichensequenzen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Tag-Zeichen als Text anzuzeigen, müssen Sie das `<`-Zeichen mithilfe seiner Zeichenreferenz maskieren, sodass die Sequenzen keine gültigen Tags mehr definieren.

In der Realität behandelt der HTML-Parser die meisten Zeichen als reinen Text, es sei denn, sie befinden sich in spezifischen Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch geparst werden; `&am;` ist in Ordnung, aber `&amp;` nicht. Es ist jedoch eine gute Praxis, alle mehrdeutigen Zeichen zu maskieren, um Verwirrung zu vermeiden, insbesondere wenn Sie HTML programmatisch generieren und den `<pre>`-Inhalt einfügen. Hier ist eine gute Faustregel, wie man Zeichen maskiert:

1. Schreiben Sie zuerst den Inhalt, wie er im HTML-Dokument erscheinen soll.
2. Ersetzen Sie alle Kaufmannsund-Zeichen (`&`) durch `&amp;`. Führen Sie diesen Schritt zuerst aus, damit neue `&`-Zeichen, die im nächsten Schritt erzeugt werden, nicht maskiert werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Dies sollte dazu führen, dass der Inhalt so angezeigt wird, wie Sie es beabsichtigt haben. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` durch `&gt;`, `"` durch `&quot;` und `'` durch `&apos;`), wird aber keinen Schaden anrichten.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        >, spürbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Satzinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
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
- Verwandte Elemente: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
