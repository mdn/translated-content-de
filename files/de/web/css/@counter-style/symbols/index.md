---
title: symbols
slug: Web/CSS/@counter-style/symbols
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{CSSRef}}

Der **`symbols`** [CSS](/de/docs/Web/CSS) Deskriptor der {{cssxref("@counter-style")}} Regel wird verwendet, um die Symbole für die Erstellung von Zählerdarstellungen im spezifizierten Zählsystem zu bestimmen. Es ist zwingend erforderlich, diesen Deskriptor anzugeben, wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

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
  - : Gibt das Symbol an, das innerhalb des Zählsystems verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("&lt;image&gt;")}}, oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>` Wert kann wiederum entweder als {{cssxref("url_value", "&lt;url&gt;")}} oder {{cssxref("&lt;gradient&gt;")}} angegeben werden.

> [!NOTE]
> Wenn ein {{Glossary("identifier", "Identifier")}} für ein Symbol verwendet wird, beachten Sie, dass {{Glossary("ASCII", "ASCII")}} Nicht-Buchstaben wie `*`, `"`, und `\` nicht als Identifier gelten. Sie müssen entweder als String zitiert oder escapet werden.

## Beschreibung

Ein Symbol kann ein String, Bild oder Identifier sein. Es wird innerhalb der {{cssxref("@counter-style")}} [Regel](/de/docs/Web/CSS/At-rule) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols` Deskriptor angegeben werden. Für das `additive` System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} Deskriptor, um die Symbole zu bestimmen.

Obwohl ein Leerzeichen zwischen zitierten Symbolen nicht erforderlich ist, macht es CSS lesbarer. Um ein Anführungszeichen als Symbol zu verwenden, escapen Sie das Anführungszeichen oder schließen Sie das Zeichen in unterschiedliche Anführungszeichen ein, wie z.B. `"'"`.

Wenn Symbole mit Identifiers statt mit Strings definiert werden, stellen Sie sicher, dass Sie die Syntaxregeln für Identifiers einhalten. Zum Beispiel, wie oben erwähnt, sind ASCII Nicht-Buchstaben wie `*` keine Identifier und müssen entweder zitiert oder escapet werden. Hex-Escape-Zeichen werden von einem Leerzeichen gefolgt. Dieses Leerzeichen kann wie das Trennzeichen zwischen zwei Identifiers erscheinen, ermöglicht jedoch, dass Ziffern den hex-escapten Zeichen folgen. Dies bedeutet, dass nach einem hex-escapten Identifier zwei Leerzeichen eingefügt werden müssen, um ihn vom nächsten Identifier zu trennen. Es ist besser, den String `"\2A 1"` zu verwenden als `\2A  1` mit zwei Leerzeichen, da Ihre Code-Tools möglicherweise doppelte Leerzeichen entfernen. Es ist allgemein sicherer, Identifier, die escapet werden müssen, zu zitieren oder Strings zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Zählersymbolen

In diesem Beispiel enthält die Werteliste für den `symbols` Deskriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen Hex-Escape-Identifier in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

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
- Listeneigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
