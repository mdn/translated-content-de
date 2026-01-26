---
title: "<pre>: Das vorformatierte Textelement"
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: d534b22334554896f3c2c83e469f9b9eb3f9188a
---

Das **`<pre>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert vorformatierten Text, der genau so angezeigt werden soll, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise mit einer nicht-proportionalen oder [monospaced](https://en.wikipedia.org/wiki/Monospaced_font) Schriftart gerendert.

Leerzeichen innerhalb dieses Elements werden wie geschrieben angezeigt, mit einer Ausnahme. Wenn ein oder mehrere führende Zeilenumbrüche direkt nach dem öffnenden `<pre>`-Tag enthalten sind, wird der _erste_ Zeilenumbruch entfernt. Diese Transformation erfolgt durch den HTML-Parser und gilt nicht bei Verwendung von {{Glossary("XHTML", "XHTML")}}.

Der Textinhalt von `<pre>`-Elementen wird als HTML interpretiert, sodass Sie Syntaxzeichen wie `<` möglicherweise mit ihren entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} escapen müssen, um sicherzustellen, dass Ihr Textinhalt als reiner Text erhalten bleibt. Weitere Informationen finden Sie unter [Escaping von mehrdeutigen Zeichen](#escaping_von_mehrdeutigen_zeichen).

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}}, um Computercode, Computerausgaben und Benutzereingaben darzustellen.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Block-Level")}} Element, das heißt, der Standardwert von {{cssxref("display")}} ist `block`.

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
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch immer noch implementiert, hat dieses Attribut keine visuelle Wirkung; um solch einen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, der angibt, wie der Überlauf erfolgen muss. In modernen Browsern wird dieser Hinweis ignoriert und es resultiert keine visuelle Wirkung; um solch einen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder Diagramms klar und prägnant beschreiben.

Menschen mit Sehbehinderungen, die mit Hilfe von unterstützender Technologie wie einem Screenreader browsen, können möglicherweise nicht verstehen, was die vorformatierten Textzeichen darstellen, wenn sie in Reihenfolge vorgelesen werden.

Eine Kombination der {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elemente, ergänzt durch das [ARIA](/de/docs/Web/Accessibility/ARIA) `role` und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribute am `pre`-Element, erlauben es, das vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunstwerk als Bild mit alternativem Text anzukündigen, wobei das `figcaption` als Bildunterschrift dient.

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

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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

### Escaping von mehrdeutigen Zeichen

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element demonstrieren. Die Zeichenfolgen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Tag-Zeichen als Text anzuzeigen, müssen Sie zumindest das `<`-Zeichen mit seiner Zeichenreferenz escapen, sodass die Sequenzen keine gültigen Tags mehr definieren.

In Wirklichkeit behandelt der HTML-Parser die meisten Zeichen als normalen Text, es sei denn, sie stehen in bestimmten Kontexten. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch interpretiert; `&am;` ist in Ordnung, aber `&amp;` ist es nicht. Es ist jedoch eine gute Praxis, alle mehrdeutigen Zeichen zu escapen, um Verwirrung zu vermeiden, insbesondere wenn Sie programmgesteuert HTML generieren und den `<pre>`-Inhalt injizieren. In diesem Fall hier eine gute Faustregel, wie man Zeichen escapen sollte:

1. Schreiben Sie zuerst den Inhalt so auf, wie Sie ihn im HTML-Dokument erscheinen lassen möchten.
2. Ersetzen Sie alle Et-Zeichen (`&`) durch `&amp;`. Machen Sie diesen Schritt zuerst, damit neue `&`-Zeichen, die im nächsten Schritt generiert wurden, nicht erneut escapet werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Dies sollte dazu führen, dass der Inhalt wie beabsichtigt angezeigt wird. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` zu `&gt;`, `"` zu `&quot;` und `'` zu `&apos;`), schadet jedoch nicht.

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
        >, fühlbarer Inhalt.
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
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
- Verwandtes Element: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
