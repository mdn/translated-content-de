---
title: "<pre>: Das Preformatierte Text-Element"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element stellt vorformatierten Text dar, der genau so präsentiert wird, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise mit einer nicht-proportionalen oder [monotypischen Schriftart](https://en.wikipedia.org/wiki/Monospaced_font) gerendert.

Leerzeichen innerhalb dieses Elements werden wie geschrieben angezeigt, mit einer Ausnahme. Wenn unmittelbar nach dem öffnenden `<pre>`-Tag ein oder mehrere führende Zeilenumbrüche enthalten sind, wird das _erste_ Zeilenumbruch-Zeichen entfernt.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst. Wenn Sie sicherstellen möchten, dass Ihr Textinhalt als Klartext erhalten bleibt, müssen einige Syntaxzeichen wie `<` möglicherweise unter Verwendung ihrer entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} escaped werden. Siehe [ambigue Zeichen escapen](#ambigue_zeichen_escapen) für weitere Informationen.

`<pre>`-Elemente enthalten häufig die {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}-Elemente, um Computer-Code, Computerausgaben und Benutzereingaben darzustellen.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keinen visuellen Effekt; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_ darauf, wie der Überlauf geschehen muss. In modernen Browsern wird dieser Hinweis ignoriert und es ergibt sich kein visueller Effekt; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und prägnant beschreiben.

Menschen mit Sehbehinderungen, die mit Hilfe von unterstützenden Technologien wie einem Screenreader surfen, können möglicherweise nicht verstehen, was die vorformatierten Textzeichen darstellen, wenn sie nacheinander vorgelesen werden.

Eine Kombination der {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elemente, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA) `role`- und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribute am `pre`-Element, ermöglicht es, dass die vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunst als Bild mit alternativem Text angekündigt wird, wobei `figcaption` als Bildunterschrift dient.

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
- [H86: Bereitstellung von Textalternativen für ASCII-Art, Emoticons und Leetspeak | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

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

### Ambigue Zeichen escapen

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element demonstrieren. Die Zeichenfolgen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Tag-Zeichen als Text anzuzeigen, müssen Sie das `<`-Zeichen mit seiner Zeichenreferenz escapen, sodass die Sequenzen keine gültigen Tags mehr definieren.

Tatsächlich behandelt der HTML-Parser die meisten Zeichen als Klartext, es sei denn, sie befinden sich in bestimmten Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch geparst werden; `&am;` ist in Ordnung, aber `&amp;` nicht. Es ist jedoch eine gute Praxis, alle ambigen Zeichen zu escapen, um Verwirrung zu vermeiden, insbesondere wenn Sie HTML programmatisch generieren und den `<pre>`-Inhalt einfügen. Hier ist eine gute Faustregel, wie man Zeichen escapen sollte:

1. Schreiben Sie zunächst den Inhalt so, wie er im HTML-Dokument erscheinen soll.
2. Ersetzen Sie alle kaufmännischen Und-Zeichen (`&`) durch `&amp;`. Führen Sie diesen Schritt zuerst aus, damit neue `&`-Zeichen, die im nächsten Schritt generiert werden, nicht escaped werden.
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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >flussfähiger Inhalt</a
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
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >flussfähigen Inhalt</a
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
