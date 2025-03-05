---
title: "<pre>: Das Element für vorformatierten Text"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert vorformatierten Text, der genau so präsentiert wird, wie er in der HTML-Datei geschrieben ist. Der Text wird normalerweise mit einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font) Schriftart gerendert.

Leerzeichen innerhalb dieses Elements werden wie geschrieben angezeigt, mit einer Ausnahme. Wenn ein oder mehrere führende Zeilenumbruchzeichen unmittelbar nach dem öffnenden `<pre>`-Tag enthalten sind, wird das _erste_ Zeilenumbruchzeichen entfernt.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst. Wenn Sie sicherstellen möchten, dass Ihr Textinhalt als reiner Text bleibt, müssen einige Syntaxzeichen wie `<` möglicherweise mit ihren jeweiligen {{Glossary("character_reference", "Zeichenreferenzen")}} escapiert werden. Weitere Informationen finden Sie unter [Escape ambiger Zeichen](#escape_ambiger_zeichen).

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computer-Code, Computerausgabe und Benutzereingaben darzustellen.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Block-Level")}}-Element, d.h. sein Standard-{{cssxref("display")}}-Wert ist `block`.

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Beinhaltet die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Auch wenn es technisch noch implementiert ist, hat dieses Attribut keine visuelle Auswirkung; um eine solche Wirkung zu erzielen, verwenden Sie CSS {{Cssxref("width")}} stattdessen.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, der angibt, wie der Überlauf erfolgen muss. In modernen Browsern wird dieser Hinweis ignoriert und hat keine visuelle Wirkung; um eine solche Wirkung zu erzielen, verwenden Sie CSS {{Cssxref("white-space")}} stattdessen.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für alle mit vorformatiertem Text erstellten Bilder oder Diagramme bereitzustellen. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und prägnant beschreiben.

Menschen mit Sehbehinderungen, die mit Unterstützungstechnologien wie einem Screenreader im Internet surfen, könnten möglicherweise nicht verstehen, was die Zeichen des vorformatierten Textes darstellen, wenn sie nacheinander vorgelesen werden.

Eine Kombination der {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elemente, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA) `role`- und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribute auf dem `pre`-Element, ermöglichen es, dass die vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunst als Bild mit Alternativtext angekündigt wird, wobei die `figcaption` als Bildunterschrift dient.

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

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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

### Escape ambiger Zeichen

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element demonstrieren. Die Zeichenfolgen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Tag-Zeichen als Text anzuzeigen, müssen Sie mindestens das `<`-Zeichen mit seiner Zeichenreferenz escapen, sodass die Sequenzen keine gültigen Tags mehr definieren.

In der Praxis behandelt der HTML-Parser die meisten Zeichen als einfachen Text, es sei denn, sie befinden sich in bestimmten Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch geparst werden; `&am;` ist in Ordnung, aber `&amp;` ist es nicht. Es ist jedoch eine gute Praxis, alle mehrdeutigen Zeichen zu escapen, um jegliche Verwirrung zu vermeiden, insbesondere wenn Sie HTML programmgesteuert generieren und den `<pre>`-Inhalt einfügen. In diesem Fall ist hier ein guter allgemeiner Ansatz, wie Sie Zeichen escapen sollten:

1. Schreiben Sie zunächst den Inhalt so, wie Sie ihn im HTML-Dokument darstellen möchten.
2. Ersetzen Sie alle Ampersands (`&`) durch `&amp;`. Machen Sie diesen Schritt zuerst, damit neu generierte `&`-Zeichen im nächsten Schritt nicht erneut escapen.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Dies sollte dazu führen, dass der Inhalt wie beabsichtigt angezeigt wird. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` durch `&gt;`, `"` durch `&quot;` und `'` durch `&apos;`), aber es schadet nicht.

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
          >Flow-Inhalt</a
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
      <td>Keine, sowohl der startende als auch der endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- {{Glossary("Character_reference", "Zeichenreferenz")}}
- Verwandtes Element: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
