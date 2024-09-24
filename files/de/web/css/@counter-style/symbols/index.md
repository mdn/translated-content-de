---
title: Symbole
slug: Web/CSS/@counter-style/symbols
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Der **`symbols`** [CSS](/de/docs/Web/CSS)-Deskriptor der {{cssxref("@counter-style")}}-At-Regel wird verwendet, um die Symbole zur Erstellung von Zählerdarstellungen im angegebenen Zählsystem festzulegen. Die Angabe dieses Deskriptors ist obligatorisch, wenn der Wert des {{cssxref('@counter-style/system', 'system')}}-Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

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
  - : Gibt das Symbol an, das im Zählsystem verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("&lt;image&gt;")}} oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>`-Wert kann als {{cssxref("&lt;url&gt;")}} oder {{cssxref("&lt;gradient&gt;")}} angegeben werden.

> [!NOTE]
> Wenn ein {{glossary("identifier")}} für ein Symbol verwendet wird, beachten Sie, dass {{glossary("ASCII")}}-Nicht-Buchstaben wie `*`, `"`, und `\` nicht als Identifikatoren gelten. Sie müssen entweder als Zeichenfolge in Anführungszeichen gesetzt oder maskiert werden.

## Beschreibung

Ein Symbol kann eine Zeichenfolge, ein Bild oder ein Identifikator sein. Es wird innerhalb der {{cssxref("@counter-style")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}}-Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols`-Deskriptor angegeben werden. Für das `additive` System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}}-Deskriptor, um die Symbole anzugeben.

Während ein Leerzeichen zwischen zitierten Symbolen nicht erforderlich ist, macht es CSS lesbarer. Um ein Anführungszeichen als Symbol zu verwenden, maskieren Sie entweder das Anführungszeichen oder setzen Sie es in andere Anführungszeichen, wie `"'"`.

Wenn Sie Symbole mit Identifikatoren anstelle von Zeichenfolgen definieren, stellen Sie sicher, dass Sie die Syntaxregeln für Identifikatoren verwenden. Zum Beispiel müssen, wie oben erwähnt, ASCII-Nicht-Buchstaben wie `*` entweder in Anführungszeichen gesetzt oder maskiert werden. Hex-Escape-Zeichen werden von einem Leerzeichen gefolgt. Dieses Leerzeichen mag wie das Leerzeichen aussehen, das zwei Identifikatoren trennt, ermöglicht es jedoch, dass Ziffern den Hex-Escaped-Zeichen folgen. Das bedeutet, dass zwei Leerzeichen nach einem Hex-Escaped-Identifikator eingefügt werden müssen, um ihn vom nächsten Identifikator zu trennen. Es ist besser, die Zeichenfolge `"\2A 1"` statt `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Codewerkzeuge möglicherweise doppelte Leerzeichen entfernen. Es ist generell sicherer, Identifikatoren, die maskiert werden müssen, zu zitieren oder Zeichenfolgen zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Zählersymbolen

In diesem Beispiel umfasst die Liste der Werte für den `symbols`-Deskriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen Hex-Escape-Identifikator in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

#### HTML

```html
<ul class="list">
  <li>Eins</li>
  <li>Zwei</li>
  <li>Drei</li>
  <li>Vier</li>
  <li>Fünf</li>
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

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listeneigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
