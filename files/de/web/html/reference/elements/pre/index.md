---
title: "<pre>: Das Element für vorformatierten Text"
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<pre>`**-[HTML](/de/docs/Web/HTML)-Element steht für vorformatierten Text, der genau so dargestellt werden soll, wie er im HTML-Dokument geschrieben ist. Der Text wird normalerweise in einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font) Schriftart dargestellt.

Leerzeichen innerhalb dieses Elements werden wie geschrieben angezeigt, mit einer Ausnahme. Wenn sofort nach dem öffnenden `<pre>`-Tag ein oder mehrere führende Zeilenumbruchzeichen enthalten sind, wird das _erste_ Zeilenumbruchzeichen entfernt.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst. Wenn Sie möchten, dass Ihr Textinhalt als Klartext bleibt, müssen einige Syntaxzeichen, wie `<`, unter Verwendung ihrer entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} maskiert werden. Weitere Informationen finden Sie unter [Zweideutige Zeichen maskieren](#zweideutige_zeichen_maskieren).

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}} Elemente, um Computer-Code, Computerausgabe und Benutzereingaben darzustellen.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Block-Element")}}, d.h. sein Standardwert für {{cssxref("display")}} ist `block`.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keine visuelle Auswirkung; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, wie der Überlauf geschehen muss. In modernen Browsern wird dieser Hinweis ignoriert und hat keine visuelle Wirkung; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für alle Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und prägnant beschreiben.

Personen mit Sehbehinderungen, die mithilfe von unterstützender Technologie wie einem Screenreader surfen, können möglicherweise nicht verstehen, was die vorformatierten Textzeichen darstellen, wenn sie in der Reihenfolge vorgelesen werden.

Eine Kombination aus den {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}} Elementen, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA) `role` und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribute auf dem `pre`-Element, ermöglicht es, dass die vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunst als Bild mit alternativem Text angekündigt wird, wobei die `figcaption` als Bildunterschrift dient.

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

- [MDN Understanding WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Bereitstellung von Textalternativen für ASCII-Kunst, Emoticons und Leetspeak | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

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

### Zweideutige Zeichen maskieren

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element demonstrieren. Die Zeichenfolgen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Zeichen der Tags als Text anzuzeigen, müssen Sie das `<`-Zeichen mithilfe seiner Zeichenreferenz maskieren, sodass die Zeichenfolgen keine gültigen Tags mehr definieren.

Tatsächlich behandelt der HTML-Parser die meisten Zeichen als Klartext, es sei denn, sie befinden sich in bestimmten Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch geparst werden; `&am;` ist in Ordnung, aber `&amp;` ist es nicht. Es ist jedoch eine gute Praxis, alle mehrdeutigen Zeichen zu maskieren, um Verwirrung zu vermeiden, insbesondere wenn Sie HTML programmgesteuert generieren und den `<pre>`-Inhalt einfügen. In diesem Fall ist hier eine gute Faustregel zur Maskierung von Zeichen:

1. Schreiben Sie zuerst den Inhalt aus, wie er im HTML-Dokument erscheinen soll.
2. Ersetzen Sie alle kaufmännischen Und-Zeichen (`&`) durch `&amp;`. Machen Sie diesen Schritt zuerst, damit neu erzeugte `&`-Zeichen im nächsten Schritt nicht maskiert werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Dies sollte dazu führen, dass der Inhalt wie beabsichtigt angezeigt wird. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` in `&gt;`, `"` in `&quot;` und `'` in `&apos;`), schadet aber nicht.

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
          >Flussinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
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
