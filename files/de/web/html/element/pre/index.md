---
title: "<pre>: Das vorformatierte Textelement"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert vorformatierten Text, der exakt so dargestellt werden soll, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise mit einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font) Schriftart gerendert.

Leerzeichen innerhalb dieses Elements werden wie geschrieben angezeigt, mit einer Ausnahme. Wenn ein oder mehrere führende Zeilenumbrüche unmittelbar nach dem öffnenden `<pre>` Tag enthalten sind, wird das _erste_ Zeilenumbruchszeichen entfernt.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst, daher müssen einige Syntaxzeichen, wie `<`, möglicherweise mit ihren entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} maskiert werden, um sicherzustellen, dass Ihr Textinhalt als reiner Text bleibt. Weitere Informationen finden Sie unter [Maskierung von mehrdeutigen Zeichen](#maskierung_von_mehrdeutigen_zeichen).

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computercode, Computerausgabe und Benutzereingaben zu repräsentieren.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Block-Level")}}-Element, d.h. sein Standardwert für {{cssxref("display")}} ist `block`.

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
           E SUIS
           LA LAN
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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl der Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keine visuelle Wirkung; um eine solche Wirkung zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, der angibt, wie der Überlauf geschehen muss. In modernen Browsern wird dieser Hinweis ignoriert und hat keine visuelle Auswirkung; um eine solche Wirkung zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und prägnant beschreiben.

Menschen mit Seheinschränkungen, die unterstützende Technologien wie einen Bildschirmleser verwenden, verstehen möglicherweise nicht, was die vorformatierten Textzeichen darstellen, wenn sie in Folge vorgelesen werden.

Eine Kombination aus den {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elementen, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA)-Attribute `role` und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) auf dem `pre`-Element, ermöglicht es, dass die vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunst als Bild mit alternativem Text angekündigt werden kann, wobei das `figcaption` als Bildunterschrift dient.

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
- [H86: Bereitstellung von Textalternativen für ASCII-Art, Emoticons, und Leetspeak | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

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

### Maskierung von mehrdeutigen Zeichen

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element demonstrieren. Die Zeichenfolgen, die gültige HTML-Tags definieren (die mit `<` beginnen und mit `>` enden), werden nicht angezeigt. Um die Tag-Zeichen als Text anzuzeigen, müssen Sie das `<`-Zeichen mit seiner Zeichenreferenz maskieren, damit die Sequenzen keine gültigen Tags mehr definieren.

Eigentlich behandelt der HTML-Parser die meisten Zeichen als reinen Text, es sei denn, sie befinden sich in spezifischen Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch geparst werden; `&am;` ist in Ordnung, aber `&amp;` nicht. Es ist jedoch eine gute Praxis, alle mehrdeutigen Zeichen zu maskieren, um jegliche Verwirrung zu vermeiden, besonders wenn Sie HTML programmatisch generieren und den `<pre>`-Inhalt einfügen. In diesem Fall ist hier eine gute Faustregel, wie man Zeichen maskiert:

1. Schreiben Sie zunächst den Inhalt so aus, wie er im HTML-Dokument erscheinen soll.
2. Ersetzen Sie alle Ampersand-Zeichen (`&`) durch `&amp;`. Führen Sie diesen Schritt zuerst aus, damit neue `&`-Zeichen, die im nächsten Schritt generiert werden, nicht maskiert werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Dies sollte dazu führen, dass der Inhalt wie beabsichtigt angezeigt wird. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` durch `&gt;`, `"` durch `&quot;`, und `'` durch `&apos;`), schadet jedoch nicht.

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
          >Fließinhalte</a
        >, greifbare Inhalte.
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
      <th scope="row">Tag-Aussparung</th>
      <td>Keine, sowohl der start- als auch der end-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
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
