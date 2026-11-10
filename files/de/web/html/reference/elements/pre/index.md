---
title: "`<pre>`: HTML-Element für vorformatierten Text"
short-title: <pre>
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<pre>`**-Element von [HTML](/de/docs/Web/HTML) stellt vorformatierten Text dar, der genau so angezeigt werden soll, wie er in der HTML-Datei steht. Der Text wird üblicherweise in einer nichtproportionalen Schriftart mit [fester Zeichenbreite](https://en.wikipedia.org/wiki/Monospaced_font) dargestellt.

Leerraum innerhalb dieses Elements wird so angezeigt, wie er geschrieben wurde – mit einer Ausnahme: Wenn unmittelbar auf das öffnende `<pre>`-Tag ein oder mehrere Zeilenumbrüche folgen, wird der _erste_ Zeilenumbruch entfernt. Diese Umwandlung erfolgt durch den HTML-Parser und gilt nicht bei Verwendung von {{Glossary("XHTML", "XHTML")}}.

Der Textinhalt von `<pre>`-Elementen wird als HTML geparst. Wenn Sie sicherstellen möchten, dass Ihr Textinhalt reiner Text bleibt, müssen Sie daher möglicherweise bestimmte Syntaxzeichen wie `<` mithilfe der entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} maskieren. Weitere Informationen finden Sie unter [Mehrdeutige Zeichen maskieren](#mehrdeutige_zeichen_maskieren).

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}-, {{HTMLElement("samp")}}- und {{HTMLElement("kbd")}}-Elemente, um Programmcode, Computerausgaben beziehungsweise Benutzereingaben darzustellen.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Blockelement")}}, das heißt, der Standardwert seiner {{cssxref("display")}}-Eigenschaft ist `block`.

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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Gibt die _bevorzugte_ Anzahl von Zeichen pro Zeile an. Obwohl dieses Attribut technisch noch implementiert ist, hat es keine visuelle Wirkung. Verwenden Sie stattdessen die CSS-Eigenschaft {{Cssxref("width")}}, um eine solche Wirkung zu erzielen.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Gibt einen _Hinweis_ darauf, wie überlaufender Inhalt behandelt werden soll. Moderne Browser ignorieren diesen Hinweis, sodass das Attribut keine visuelle Wirkung hat. Verwenden Sie stattdessen die CSS-Eigenschaft {{Cssxref("white-space")}}, um eine solche Wirkung zu erzielen.

## Barrierefreiheit

Für Bilder oder Diagramme, die mit vorformatiertem Text erstellt wurden, ist eine alternative Beschreibung wichtig. Sie sollte den Inhalt des Bildes oder Diagramms klar und knapp beschreiben.

Menschen mit eingeschränktem Sehvermögen, die Hilfstechnologien wie Screenreader verwenden, verstehen möglicherweise nicht, was die Zeichen des vorformatierten Textes darstellen, wenn diese nacheinander vorgelesen werden.

Mit einer Kombination aus den Elementen {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}} sowie dem [ARIA](/de/docs/Web/Accessibility/ARIA)-Attribut `role` und dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) auf dem `pre`-Element kann vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunst als Bild mit Alternativtext angekündigt werden. Das `figcaption`-Element dient dabei als Bildunterschrift.

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

- [MDN: Erläuterungen zu WCAG-Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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

### Mehrdeutige Zeichen maskieren

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element zeigen. Zeichenfolgen, die gültige HTML-Tags bilden (beginnend mit `<` und endend mit `>`), werden nicht als Text angezeigt. Damit die Tag-Zeichen als Text erscheinen, müssen Sie (mindestens) das Zeichen `<` mit seiner Zeichenreferenz maskieren. Dadurch bilden die Zeichenfolgen keine gültigen Tags mehr.

Tatsächlich behandelt der HTML-Parser die meisten Zeichen als reinen Text, sofern sie nicht in einem bestimmten Kontext stehen. Beispielsweise ist `< code` unproblematisch, während `<code` als Tag geparst würde; `&am;` ist unproblematisch, `&amp;` dagegen nicht. Dennoch empfiehlt es sich, alle mehrdeutigen Zeichen zu maskieren, um Missverständnisse zu vermeiden – insbesondere wenn Sie HTML programmatisch erzeugen und Inhalt in das `<pre>`-Element einfügen. Als Faustregel für das Maskieren gilt:

1. Schreiben Sie zunächst den Inhalt so, wie er im HTML-Dokument erscheinen soll.
2. Ersetzen Sie alle Und-Zeichen (`&`) durch `&amp;`. Führen Sie diesen Schritt zuerst aus, damit die im nächsten Schritt neu entstehenden `&`-Zeichen nicht ebenfalls maskiert werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Danach sollte der Inhalt wie beabsichtigt angezeigt werden. Andere HTML-Syntaxzeichen zu ersetzen, ist optional (etwa `>` durch `&gt;`, `"` durch `&quot;` und `'` durch `&apos;`), schadet aber nicht.

#### HTML

```html
<pre><code>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0)
  return &quot;Single Digit Number&quot;
</code></pre>
```

#### Ergebnis

{{EmbedLiveSample("escaping_ambiguous_characters")}}

## Technische Übersicht

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
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassen von Tags</th>
      <td>Keines; sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
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
- Verwandte Elemente: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
