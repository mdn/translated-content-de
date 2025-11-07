---
title: symbols
slug: Web/CSS/Reference/At-rules/@counter-style/symbols
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`symbols`**-Deskriptor von {{cssxref("@counter-style")}} [CSS](/de/docs/Web/CSS) At-Regel wird verwendet, um die Symbole zur Erstellung von Zählerdarstellungen im angegebenen Zählsystem festzulegen. Das Festlegen dieses Deskriptors ist obligatorisch, wenn der Wert des {{cssxref('@counter-style/system', 'system')}}-Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Werte

Der `symbols`-Deskriptor wird als Liste von einem oder mehreren durch Leerzeichen getrennten `<symbol>`-Werten angegeben.

- `<symbol>`
  - : Gibt das zu verwendende Symbol im Zählsystem an. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("&lt;image&gt;")}} oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>`-Wert kann wiederum als {{cssxref("url_value", "&lt;url&gt;")}} oder {{cssxref("&lt;gradient&gt;")}} angegeben werden.

> [!NOTE]
> Bei der Verwendung eines {{Glossary("identifier", "Identifiers")}} für ein Symbol beachten Sie, dass {{Glossary("ASCII", "ASCII")}}-Nicht-Buchstaben wie `*`, `"`, und `\` nicht als Identifier gelten. Sie müssen entweder als Zeichenfolge in Anführungszeichen gesetzt oder maskiert werden.

## Beschreibung

Ein Symbol kann eine Zeichenfolge, ein Bild oder ein Identifier sein. Es wird innerhalb der {{cssxref("@counter-style")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}}-Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols`-Deskriptor angegeben werden. Für das `additive` System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}}-Deskriptor, um die Symbole festzulegen.

Obwohl ein Leerzeichen zwischen in Anführungszeichen gesetzten Symbolen nicht erforderlich ist, macht es CSS lesbarer. Um ein Anführungszeichen als Symbol zu verwenden, maskieren Sie entweder das Anführungszeichenzeichen oder setzen Sie das Zeichen in verschiedene Anführungszeichen, wie z. B. `"'"`.

Beim Definieren von Symbolen mit Identifikatoren anstelle von Zeichenfolgen achten Sie darauf, die Syntaxregeln für Identifikatoren zu verwenden. Zum Beispiel, wie oben erwähnt, sind ASCII-Nicht-Buchstaben wie `*` keine Identifikatoren und müssen entweder in Anführungszeichen gesetzt oder maskiert werden. Hex-Escape-Zeichen werden durch ein Leerzeichen gefolgt. Dieses Leerzeichen kann wie das Leerzeichen aussehen, das zwei Identifikatoren trennt, ermöglicht jedoch, dass Ziffern auf hex-maskierte Zeichen folgen. Dies bedeutet, dass zwei Leerzeichen nach einem hex-maskierten Identifier eingefügt werden müssen, um ihn vom nächsten Identifier zu trennen. Zum Beispiel ist es besser, die Zeichenfolge `"\2A 1"` anstelle von `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Code-Tools möglicherweise doppelte Leerzeichen entfernen. Es ist im Allgemeinen sicherer, Identifikatoren, die maskiert werden müssen, in Anführungszeichen zu setzen oder Zeichenfolgen zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Zählersymbolen

In diesem Beispiel umfasst die Liste der Werte für den `symbols`-Deskriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen hex-maskierten Identifier in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style symbols-example {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.list {
  list-style: symbols-example;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_counter_symbols')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}}-Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listenstil-Eigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}-Funktion
- {{cssxref("url_value", "&lt;url&gt;")}}-Typ
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
