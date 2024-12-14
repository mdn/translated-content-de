---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Diese Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler, sofern vorhanden, mit dem angegebenen String verknüpft. Der dritte, optionale Parameter erlaubt die Definition des Listentyps.

Die `counters()`-Funktion wird in der Regel innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch jedoch überall eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, von außen nach innen geordnet und durch den angegebenen `<string>` getrennt. Die Zähler werden im `<style>`-Format dargestellt, das angegeben ist, und standardmäßig auf `decimal` gesetzt, wenn kein `<style>` angegeben ist.

{{EmbedInteractiveExample("pages/tabbed/function-counters.html", "tabbed-standard")}}

## Syntax

```css
/* Simple usage  - style defaults to decimal */
counters(counter-name, '.');

/* changing the counter display */
counters(counter-name, '-', upper-roman)
```

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat für sich genommen keine sichtbare Wirkung. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}}-Funktion) macht ihn nützlich, indem sie entwicklerdefinierte Inhalte zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verknüpfungs-`<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}} zur Identifizierung der Zähler, der derselbe groß-/kleinschreibungssensitive Name ist, der für die {{cssxref("counter-reset")}}- und {{cssxref("counter-increment")}}-Eigenschaften verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ können für Inline- und Einmalgebrauchs-Zähler die {{cssxref("symbols")}}-Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen kodiert werden: beispielsweise repräsentiert `\000A9` das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/symbols)-Funktion. Der Zählerstilname kann ein einfach vorkonfigurierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplizierter ausgeschriebener Stil wie ostasiatisch oder äthiopisch, oder ein anderer [vorkonfigurierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn er weggelassen wird, wird der Zählerstil auf decimal gesetzt.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählersatz des Elements namens `<counter-name>` im durch `<counter-style>` (oder decimal, falls weggelassen) definierten Zählerstil enthält. Der Rückgabestring sortiert von außen nach innen und ist durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Für Informationen über nicht verkettete Zähler siehe die {{cssxref("counter", "counter()")}}-Funktion, die den `<string>` als Parameter weglässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählwerts mit römischen Zahlen in Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit `<counter-style>` gesetzt und die andere standardmäßig auf `decimal`.

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

### Vergleich des Zählwerts mit führender Null mit Kleinbuchstaben

Dieses Beispiel enthält drei `counters()`-Funktionen, jeweils mit unterschiedlichen `<string>`- und `<counter-style>`-Werten.

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
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("@counter-style")}} Regel
- CSS [`counter()`](/de/docs/Web/CSS/counter) Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
