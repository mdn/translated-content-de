---
title: symbols
slug: Web/CSS/@counter-style/symbols
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Der **`symbols`** [CSS](/de/docs/Web/CSS) Deskriptor der {{cssxref("@counter-style")}} At-Regel wird verwendet, um die Symbole für die Erstellung von Zählerdarstellungen im angegebenen Zählsystem zu spezifizieren. Die Angabe dieses Deskriptors ist obligatorisch, wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Werte

Der `symbols` Deskriptor wird als Liste von einem oder mehreren durch Leerzeichen getrennten `<symbol>` Werten spezifiziert.

- `<symbol>`
  - : Gibt das Symbol an, das innerhalb des Zählsystems verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("&lt;image&gt;")}}, oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>` Wert kann seinerseits als {{cssxref("&lt;url&gt;")}} oder {{cssxref("&lt;gradient&gt;")}} angegeben werden.

> [!NOTE]
> Wenn Sie einen [Identifier](/de/docs/Glossary/identifier) für ein Symbol verwenden, beachten Sie, dass [ASCII](/de/docs/Glossary/ASCII) Nicht-Buchstaben wie `*`, `"`, und `\` nicht als Identifier angesehen werden. Diese müssen entweder als Zeichenfolge zitiert oder maskiert werden.

## Beschreibung

Ein Symbol kann eine Zeichenfolge, ein Bild oder ein Identifier sein. Es wird innerhalb der {{cssxref("@counter-style")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic`, oder `fixed` ist, muss der `symbols` Deskriptor angegeben werden. Für das `additive` System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} Deskriptor, um die Symbole zu spezifizieren.

Während ein Leerzeichen zwischen zitierten Symbolen nicht erforderlich ist, macht es CSS lesbarer. Um ein Anführungszeichen als Symbol zu verwenden, maskieren Sie entweder das Anführungszeichen-Zeichen oder schließen Sie das Zeichen in unterschiedliche Anführungszeichen ein, z.B. `"'"`.

Beim Definieren von Symbolen mit Identifikatoren anstelle von Zeichenfolgen, achten Sie darauf, Syntaxregeln für Identifikatoren zu befolgen. Zum Beispiel sind ASCII Nicht-Buchstaben wie `*` keine Identifikatoren und müssen entweder zitiert oder maskiert werden. Hexadezimal maskierte Zeichen folgen einem Leerzeichen. Dieses Leerzeichen kann wie der Abstand aussehen, der zwei Identifikatoren trennt, ermöglicht aber, dass Ziffern hexadezimal maskierten Zeichen folgen. Dies bedeutet, dass zwei Leerzeichen nach einem hexadezimal maskierten Identifikator eingefügt werden müssen, um ihn vom nächsten Identifikator zu trennen. Beispielsweise ist es besser, die Zeichenfolge `"\2A 1"` anstelle von `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Codenwerkzeuge vielleicht doppelte Leerzeichen entfernen. Es ist im Allgemeinen sicherer, Identifikatoren, die maskiert werden müssen, zu zitieren oder Zeichenfolgen zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zählsymbole festlegen

In diesem Beispiel umfasst die Liste der Werte für den `symbols` Deskriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`), und einen hexadezimal maskierten Identifier in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

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
