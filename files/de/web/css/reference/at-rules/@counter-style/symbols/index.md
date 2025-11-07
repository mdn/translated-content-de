---
title: Symbole
slug: Web/CSS/Reference/At-rules/@counter-style/symbols
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`symbols`** [CSS](/de/docs/Web/CSS) Deskriptor der @counter-style {{cssxref("@counter-style")}} At-Regel wird verwendet, um Symbole für die Erstellung von Gegenpunkt-Darstellungen im angegebenen Zählsystem zu definieren. Die Angabe dieses Deskriptors ist obligatorisch, wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

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
  - : Gibt das Symbol an, das im Zählsystem verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("&lt;image&gt;")}} oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>` Wert kann wiederum als {{cssxref("url_value", "&lt;url&gt;")}} oder {{cssxref("&lt;gradient&gt;")}} angegeben werden.

> [!NOTE]
> Beim Verwenden eines {{Glossary("identifier", "Bezeichners")}} für ein Symbol beachten Sie, dass {{Glossary("ASCII", "ASCII")}} Nicht-Buchstaben wie `*`, `"`, und `\` nicht als Bezeichner gelten. Sie müssen entweder als Zeichenfolge angegeben oder maskiert werden.

## Beschreibung

Ein Symbol kann ein String, Bild oder Bezeichner sein. Es wird innerhalb der {{cssxref("@counter-style")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols` Deskriptor angegeben werden. Für das `additive` System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} Deskriptor, um die Symbole zu definieren.

Obwohl ein Leerraum zwischen in Anführungszeichen stehenden Symbolen nicht erforderlich ist, macht er CSS besser lesbar. Um ein Anführungszeichen als Symbol zu verwenden, maskieren Sie entweder das Anführungszeichen oder schließen Sie das Zeichen in andere Anführungszeichen ein, wie zum Beispiel `"'"`.

Wenn Sie Symbole mit Bezeichnern anstelle von Strings definieren, stellen Sie sicher, dass Sie die Syntaxregeln für Bezeichner einhalten. Zum Beispiel, wie oben erwähnt, sind ASCII Nicht-Buchstaben wie `*` keine Bezeichner und müssen entweder in Anführungszeichen gesetzt oder maskiert werden. Hex-Escape-Zeichen werden von einem Leerraum gefolgt. Dieser Leerraum kann wie der Raum zwischen zwei Bezeichnern aussehen, ermöglicht jedoch Ziffern, hex-maskierten Zeichen zu folgen. Dies bedeutet, dass nach einem hex-maskierten Bezeichner zwei Leerzeichen eingeschlossen werden müssen, um ihn vom nächsten Bezeichner zu trennen. Es ist besser, die Zeichenfolge `"\2A 1"` anstelle von `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Codetools doppelte Leerzeichen entfernen könnten. Es ist im Allgemeinen sicherer, Bezeichner zu zitieren, die maskiert werden müssen, oder Strings zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Zähler-Symbolen

In diesem Beispiel umfasst die Liste der Werte für den `symbols` Deskriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen hex-maskierten Bezeichner in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

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
- Listen-Stil-Eigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
