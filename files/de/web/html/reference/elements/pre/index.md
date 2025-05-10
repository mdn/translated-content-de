---
title: "<pre>: Das vorformatierte Textelement"
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element steht für vorformatierten Text, der genau so angezeigt wird, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise in einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font) Schriftart dargestellt.

Leerzeichen innerhalb dieses Elements werden so dargestellt, wie sie geschrieben wurden, mit einer Ausnahme. Wenn ein oder mehrere führende Zeilenumbruchzeichen unmittelbar nach dem öffnenden `<pre>`-Tag enthalten sind, wird das _erste_ Zeilenumbruchzeichen entfernt.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst. Wenn Sie sicherstellen möchten, dass Ihr Textinhalt als reiner Text bleibt, müssen einige Syntaxzeichen, wie `<`, mit ihren jeweiligen {{Glossary("character_reference", "Zeichenreferenzen")}} eskapiert werden. Siehe [Ambige Zeichen escapen](#ambige_zeichen_escapen) für weitere Informationen.

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computercode, Computerausgabe und Benutzereingaben darzustellen.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keine visuelle Wirkung; um eine solche Wirkung zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, der angibt, wie der Überlauf erfolgen muss. In modernen Browsern wird dieser Hinweis ignoriert und hat keine visuelle Auswirkung; um eine solche Wirkung zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder des Diagramms klar und präzise beschreiben.

Menschen mit Sehbehinderung und solche, die mit Hilfstechnologien wie Bildschirmlesegeräten surfen, könnten nicht verstehen, was die vorformatierten Textzeichen darstellen, wenn sie in der Reihenfolge vorgelesen werden.

Eine Kombination der {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elemente, ergänzt durch das [ARIA](/de/docs/Web/Accessibility/ARIA) `role` und die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribute auf dem `pre`-Element, ermöglicht es, die vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunst als Bild mit alternativem Text anzukündigen, wobei die `figcaption` als Bildunterschrift dient.

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

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Textalternativen für ASCII-Kunst, Emoticons und Leetspeak bereitstellen | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

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

### Ambige Zeichen escapen

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element demonstrieren. Die Zeichenfolgen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Tag-Zeichen als Text anzuzeigen, müssen Sie das `<`-Zeichen mit seiner Zeichenreferenz escapen, sodass die Sequenzen keine gültigen Tags mehr definieren.

Tatsächlich behandelt der HTML-Parser die meisten Zeichen als reinen Text, es sei denn, sie befinden sich in spezifischen Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch geparst werden; `&am;` ist in Ordnung, aber `&amp;` nicht. Es ist jedoch eine gute Praxis, alle missverständlichen Zeichen zu escapen, um Verwirrung zu vermeiden, insbesondere wenn Sie HTML programmatisch generieren und den `<pre>`-Inhalt einfügen. Hier ist eine gute Faustregel, wie man Zeichen escapet:

1. Schreiben Sie zunächst den Inhalt so, wie er im HTML-Dokument erscheinen soll.
2. Ersetzen Sie alle Kaufmannsundzeichen (`&`) durch `&amp;`. Machen Sie diesen Schritt zuerst, damit neu generierte `&`-Zeichen im nächsten Schritt nicht erneut escapt werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Dies sollte dazu führen, dass der Inhalt wie beabsichtigt angezeigt wird. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` zu `&gt;`, `"` zu `&quot;` und `'` zu `&apos;`), wird aber keinen Schaden anrichten.

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
          >Fließinhalte</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalte</a
        > akzeptiert.
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
