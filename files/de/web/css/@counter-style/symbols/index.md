---
title: symbols
slug: Web/CSS/@counter-style/symbols
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **`symbols`** [CSS](/de/docs/Web/CSS)-Deskriptor der {{cssxref("@counter-style")}}-Regel wird verwendet, um die Symbole für die Erstellung von Zählerdarstellungen im angegebenen Zählersystem festzulegen. Das Festlegen dieses Deskriptors ist erforderlich, wenn der Wert des Deskriptors {{cssxref('@counter-style/system', 'system')}} `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Werte

Der Deskriptor `symbols` wird als eine Liste aus einem oder mehreren durch Leerzeichen getrennten `<symbol>`-Werten angegeben.

- `<symbol>`
  - : Gibt das Symbol an, das im Zählersystem verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("&lt;image&gt;")}} oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>`-Wert kann wiederum als {{cssxref("url_value", "&lt;url&gt;")}} oder {{cssxref("&lt;gradient&gt;")}} angegeben werden.

> [!NOTE]
> Bei der Verwendung eines {{Glossary("identifier", "Identifiers")}} für ein Symbol beachten Sie, dass {{Glossary("ASCII", "ASCII")}}-Nicht-Buchstaben wie `*`, `"`, und `\` nicht als Identifier gelten. Sie müssen entweder als Zeichenkette in Anführungszeichen gesetzt oder maskiert werden.

## Beschreibung

Ein Symbol kann eine Zeichenkette, ein Bild oder ein Identifier sein. Es wird innerhalb der {{cssxref("@counter-style")}}-Regel [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet.

Wenn der Wert des Deskriptors {{cssxref('@counter-style/system', 'system')}} `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der Deskriptor `symbols` angegeben werden. Für das `additive`-System verwenden Sie stattdessen den Deskriptor {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}}, um die Symbole anzugeben.

Während ein Leerzeichen zwischen zitierten Symbolen nicht erforderlich ist, verbessert es die Lesbarkeit von CSS. Um ein Anführungszeichen als Symbol zu verwenden, maskieren Sie entweder das Anführungszeichen oder schließen Sie das Zeichen in andere Anführungszeichen ein, z. B. `"'"`.

Wenn Sie Symbole mit Identifiers anstelle von Zeichenketten definieren, beachten Sie die Syntaxregeln für Identifiers. Zum Beispiel, wie oben erwähnt, sind ASCII-Nicht-Buchstaben wie `*` keine Identifiers und müssen entweder zitiert oder maskiert werden. Hexadecimal maskierte Zeichen werden von einem Leerzeichen gefolgt. Dieses Leerzeichen könnte wie der Abstand wirken, der zwei Identifiers trennt, ermöglicht aber, dass Ziffern den hexadecimaleskapierten Zeichen folgen können. Das bedeutet, dass zwei Leerzeichen nach einem hexadecimaleskapierten Identifier eingeschlossen werden müssen, um ihn vom nächsten Identifier zu trennen. Es ist zum Beispiel besser, die Zeichenkette `"\2A 1"` anstelle von `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Codewerkzeuge doppelte Leerzeichen entfernen könnten. Es ist generell sicherer, Identifier, die maskiert werden müssen, zu zitieren oder Zeichenketten zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Zählersymbolen

In diesem Beispiel umfasst die Liste der Werte für den Deskriptor `symbols` Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen hexadecimaleskapierten Identifier in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

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
- Listeneigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}-Funktion
- {{cssxref("url_value", "&lt;url&gt;")}}-Typ
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)-Modul
