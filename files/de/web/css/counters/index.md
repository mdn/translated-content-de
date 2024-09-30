---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt eine Zeichenfolge zurück, die die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit der bereitgestellten Zeichenfolge verknüpft. Der dritte, optionale Parameter ermöglicht die Definition des Listentyps.

Die `counters()`-Funktion wird in der Regel innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch aber überall verwendet werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet vom äußersten zum innersten und getrennt durch das angegebene `<string>`. Die Zähler werden im angegebenen `<style>` dargestellt und verwenden standardmäßig `decimal`, wenn kein `<style>` angegeben wird.

{{EmbedInteractiveExample("pages/tabbed/function-counters.html", "tabbed-standard")}}

## Syntax

```css
/* Simple usage  - style defaults to decimal */
counters(countername, '.');

/* changing the counter display */
counters(countername, '-', upper-roman)
```

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat für sich genommen keine sichtbare Auswirkung. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}}-Funktion) macht sie nützlich, indem sie benutzerdefinierten Inhalt zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verkettungs-`<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}} zur Identifizierung der Zähler, der derselbe groß-/kleinbuchstabensensitive Name ist, der für die {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}}-Eigenschaften verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für Inline-Zähler, die einmalig verwendet werden, die Funktion {{cssxref("symbols")}} anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nichtlateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen kodiert werden: zum Beispiel steht `\000A9` für das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählertyp-Name oder eine [`symbols()`](/de/docs/Web/CSS/symbols)-Funktion. Der Zählertyp-Name kann ein einfacher vordefinierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplexer langfristiger vordefinierter Stil wie ostasiatisch oder äthiopisch oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn er weggelassen wird, ist der Standard des Zählerstils decimal.

Der Rückgabewert ist eine Zeichenfolge, die alle Werte aller Zähler im CSS-Zählersystem des Elements mit dem Namen `<counter-name>` im vom `<counter-style>` definierten Zählerstil enthält (oder decimal, wenn weggelassen). Die Rückgabezeichenfolge ist in der Reihenfolge von äußersten zuerst bis innersten zuletzt sortiert und wird durch das angegebene `<string>` verbunden.

> [!NOTE]
> Für Informationen über nicht verknüpfte Zähler siehe die {{cssxref("counter", "counter()")}}-Funktion, die das `<string>` als Parameter auslässt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich zwischen Standardwert des Zählers und römischen Zahlen in Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit festgelegtem `<counter-style>` und die andere mit der Vorgabe `decimal`.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    counters(listCounter, ".", upper-roman) ") ";
}
li::before {
  content:
    counters(listCounter, ".") " == "
    counters(listCounter, ".", lower-roman);
}
```

#### Ergebnis

{{EmbedLiveSample("Comparing default counter value to uppercase roman numerals", "100%", 270)}}

### Vergleich von Zählerwerten mit führender Null im Dezimalformat zu Kleinbuchstaben

Dieses Beispiel umfasst drei `counters()`-Funktionen, jede mit unterschiedlichen `<string>`- und `<counter-style>`-Werten.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
  content:
    counters(count, "-", decimal-leading-zero) ") ";
}
li::before {
  content:
    counters(count, "~", upper-alpha) " == "
    counters(count,  "*", lower-alpha);
}
```

#### Ergebnis

{{EmbedLiveSample("Comparing decimal-leading-zero counter value to lowercase letters", "100%", 270)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-set")}}-Eigenschaft
- {{cssxref("counter-reset")}}-Eigenschaft
- {{cssxref("counter-increment")}}-Eigenschaft
- {{cssxref("@counter-style")}}-At-Regel
- CSS [`counter()`](/de/docs/Web/CSS/counter)-Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)-Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)-Modul
