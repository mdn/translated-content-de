---
title: "<pre>: Das Element für vorformatierten Text"
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: 3f411c383420140dfbd5c81ab39a6e12efd1857d
---

{{HTMLSidebar}}

Das **`<pre>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert vorformatierten Text, der genau so dargestellt wird, wie er in der HTML-Datei geschrieben ist. Der Text wird typischerweise mit einer nicht-proportionalen oder [monospace](https://en.wikipedia.org/wiki/Monospaced_font)-Schriftart dargestellt.

Leerzeichen innerhalb dieses Elements werden so angezeigt, wie sie geschrieben sind, mit einer Ausnahme. Wenn ein oder mehrere führende Zeilenumbrüche direkt nach dem öffnenden `<pre>`-Tag enthalten sind, wird der _erste_ Zeilenumbruch entfernt.

Der Textinhalt von `<pre>`-Elementen wird als HTML analysiert. Wenn Sie sicherstellen möchten, dass Ihr Textinhalt als reiner Text bleibt, müssen einige Syntaxzeichen, wie `<`, möglicherweise mit ihren entsprechenden {{Glossary("character_reference", "Zeichenreferenzen")}} escaped werden. Weitere Informationen finden Sie unter [escaping ambiguous characters](#escaping_von_mehrdeutigen_zeichen).

`<pre>`-Elemente enthalten häufig {{HTMLElement("code")}}, {{HTMLElement("samp")}} und {{HTMLElement("kbd")}} Elemente, um jeweils Computercode, Computerausgaben und Benutzereingaben darzustellen.

Standardmäßig ist `<pre>` ein {{Glossary("Block-level_content", "Blockelement")}}, das heißt, sein Standardwert für {{cssxref("display")}} ist `block`.

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Enthält die _bevorzugte_ Anzahl von Zeichen, die eine Zeile haben sollte. Obwohl technisch noch implementiert, hat dieses Attribut keinen visuellen Effekt; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("width")}}.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Ist ein _Hinweis_, der angibt, wie der Overflow erfolgen muss. In modernen Browsern wird dieser Hinweis ignoriert und hat keinen visuellen Effekt; um einen solchen Effekt zu erzielen, verwenden Sie stattdessen CSS {{Cssxref("white-space")}}.

## Barrierefreiheit

Es ist wichtig, eine alternative Beschreibung für alle Bilder oder Diagramme bereitzustellen, die mit vorformatiertem Text erstellt wurden. Die alternative Beschreibung sollte den Inhalt des Bildes oder des Diagramms klar und prägnant beschreiben.

Menschen mit Sehbehinderungen, die mit Hilfe von unterstützenden Technologien wie einem Screenreader im Internet surfen, verstehen möglicherweise nicht, was die Zeichen des vorformatierten Textes darstellen sollen, wenn sie nacheinander vorgelesen werden.

Eine Kombination aus den {{HTMLElement("figure")}}- und {{HTMLElement("figcaption")}}-Elementen, ergänzt durch die [ARIA](/de/docs/Web/Accessibility/ARIA) `role`- und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribute auf dem `pre`-Element ermöglicht es, dass die vorformatierte {{Glossary("ASCII", "ASCII")}}-Kunst als Bild mit alternativem Text angekündigt wird, wobei das `figcaption` als Bildunterschrift dient.

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

- [MDN Verstehen der WCAG, Richtlinien 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Bereitstellung von Textalternativen für ASCII-Art, Emoticons und Leetspeak | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

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

Angenommen, Sie möchten HTML-Code in einem `<pre>`-Element darstellen. Die Zeichenfolgen, die gültige HTML-Tags definieren (beginnend mit `<` und endend mit `>`), werden nicht angezeigt. Um die Tag-Zeichen als Text darzustellen, müssen Sie mindestens das `<`-Zeichen mit seiner Zeichenreferenz escapen, sodass die Sequenzen keine gültigen Tags mehr definieren.

Tatsächlich behandelt der HTML-Parser die meisten Zeichen als einfachen Text, es sei denn, es handelt sich um spezifische Kontexte. Zum Beispiel ist `< code` in Ordnung, aber `<code` würde falsch interpretiert; `&am;` ist in Ordnung, aber `&amp;` ist es nicht. Dennoch ist es eine gute Praxis, alle mehrdeutigen Zeichen zu escapen, um jede Verwirrung zu vermeiden, insbesondere wenn Sie HTML programmgesteuert generieren und den `<pre>`-Inhalt injizieren. Hier ist eine gute Faustregel, wie man Zeichen escapt:

1. Schreiben Sie zuerst den Inhalt so, wie Sie ihn im HTML-Dokument erscheinen lassen möchten.
2. Ersetzen Sie alle Ampersands (`&`) durch `&amp;`. Machen Sie diesen Schritt zuerst, damit neu erzeugte `&`-Zeichen im nächsten Schritt nicht eskapiert werden.
3. Ersetzen Sie alle `<`-Zeichen durch `&lt;`.

Das sollte dazu führen, dass der Inhalt wie gewünscht angezeigt wird. Das Ersetzen anderer HTML-Syntaxzeichen ist optional (wie `>` zu `&gt;`, `"` zu `&quot;`, und `'` zu `&apos;`), schadet jedoch nicht.

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
          >Flow-Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen des Tags</th>
      <td>Keines, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
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
