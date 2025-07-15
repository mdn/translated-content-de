---
title: symbols
slug: Web/CSS/@counter-style/symbols
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`symbols`** [CSS](/de/docs/Web/CSS) Deskriptor der {{cssxref("@counter-style")}}-Regel wird verwendet, um die Symbole zur Erstellung von Zählerdarstellungen im angegebenen Zählersystem zu spezifizieren. Die Angabe dieses Deskriptors ist verpflichtend, wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Werte

Der `symbols` Deskriptor wird als Liste von einem oder mehreren durch Leerzeichen getrennten `<symbol>` Werten angegeben.

- `<symbol>`
  - : Gibt das Symbol an, das im Zählersystem verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("&lt;image&gt;")}}, oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>` Wert kann wiederum als ein {{cssxref("url_value", "&lt;url&gt;")}} oder {{cssxref("&lt;gradient&gt;")}} angegeben werden.

> [!NOTE]
> Beim Verwenden eines {{Glossary("identifier", "Bezeichners")}} für ein Symbol beachten Sie, dass {{Glossary("ASCII", "ASCII")}} nicht-Buchstaben wie `*`, `"`, und `\` nicht als Bezeichner gelten. Diese müssen entweder als String angegeben oder escaped werden.

## Beschreibung

Ein Symbol kann ein String, ein Bild oder ein Bezeichner sein. Es wird innerhalb der {{cssxref("@counter-style")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols`-Deskriptor angegeben werden. Für das `additive`-System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} Deskriptor, um die Symbole anzugeben.

Obwohl ein Leerzeichen zwischen den angegebenen Symbolen nicht erforderlich ist, macht es CSS besser lesbar. Um ein Anführungszeichen als Symbol zu verwenden, sollten Sie entweder das Anführungszeichen-Zeichen escapen oder das Zeichen in verschiedene Anführungszeichen setzen, wie zum Beispiel `"'"`.

Wenn Symbole mit Bezeichnern statt mit Strings definiert werden, stellen Sie sicher, dass Sie die Syntaxregeln für Bezeichner verwenden. Zum Beispiel müssen ASCII nicht-Buchstaben wie `*`, wie oben erwähnt, entweder zitiert oder escaped werden. Hex-Escape-Zeichen werden von einem Leerzeichen gefolgt. Dieses Leerzeichen mag wie der Abstand zwischen zwei Bezeichnern erscheinen, ermöglicht jedoch das Folgen von Ziffern nach hexadezimal escapten Zeichen. Das bedeutet, dass zwei Leerzeichen nach einem hexadezimal escapten Bezeichner eingefügt werden müssen, um ihn vom nächsten zu trennen. Zum Beispiel ist es besser, den String `"\2A 1"` statt `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Codewerkzeuge möglicherweise doppelte Leerzeichen entfernen. Es ist generell sicherer, Bezeichner, die escapet werden müssen, zu zitieren oder Strings zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Zählersymbolen

In diesem Beispiel enthält die Liste der Werte für den `symbols`-Deskriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen in Anführungszeichen gesetzten hexadecimalescape Bezeichner (`"\24B7"`) für das Zeichen `Ⓑ`.

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

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listenstil-Eigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
