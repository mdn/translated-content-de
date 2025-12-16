---
title: counters()
slug: Web/CSS/Reference/Values/counters
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt eine Zeichenfolge zurück, die die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit der bereitgestellten Zeichenfolge verknüpft. Der dritte, optionale Parameter ermöglicht die Definition des Listentyps.

Die `counters()`-Funktion wird generell innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) durch die {{cssxref("content")}} Eigenschaft verwendet, kann theoretisch aber überall eingesetzt werden, wo ein {{cssxref("string")}} Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet von außen nach innen und getrennt durch die angegebene `<string>`. Die Zähler werden im `<style>` dargestellt, das angegeben ist, und standardmäßig `decimal`, wenn kein `<style>` angegeben ist.

{{InteractiveExample("CSS Demo: counters()", "tabbed-standard")}}

```css interactive-example
ol {
  counter-reset: index;
  list-style-type: none;
}

li::before {
  counter-increment: index;
  content: counters(index, ".", decimal) " ";
}
```

```html interactive-example
<ol>
  <li>Mars</li>
  <li>
    Saturn
    <ol>
      <li>Mimas</li>
      <li>Enceladus</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Tethys</li>
    </ol>
  </li>
  <li>
    Uranus
    <ol>
      <li>Titania</li>
    </ol>
  </li>
</ol>
```

## Syntax

```css
/* Basic usage  - style defaults to decimal */
counters(counter-name, '.');

/* changing the counter display */
counters(counter-name, '-', upper-roman)
```

Ein [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) hat an sich keinen sichtbaren Effekt. Die `counters()`-Funktion (und die {{cssxref("counter()")}} Funktion) macht ihn nützlich, indem sie entwicklerdefinierte Inhalte zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Konkatenator `<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}} zur Identifizierung der Zähler, derselbe groß-/klein-geschriebene Name, der für die Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für inline, einmalige Zähler die {{cssxref("symbols")}} Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/Reference/Values/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Eine beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen codiert werden: zum Beispiel repräsentiert `\000A9` das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zähler-Stil-Name oder eine [`symbols()`](/de/docs/Web/CSS/Reference/Values/symbols) Funktion. Der Zähler-Stil-Name kann ein vordefinierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplexer vordefinierter Stil wie ostasiatisch oder äthiopisch, oder ein anderer [vordefinierter Zähler-Stil](/de/docs/Web/CSS/Guides/Counter_styles). Wenn ausgelassen, ist der Standard für den Zähler-Stil dezimal.

Der Rückgabewert ist eine Zeichenfolge, die alle Werte aller Zähler im CSS-Zählersatz des Elements mit dem Namen `<counter-name>` im durch `<counter-style>` definierten Zähler-Stil (oder dezimal, falls weggelassen) enthält. Die Rückgabezeichenfolge ist in der Reihenfolge vom äußersten zum innersten sortiert und wird durch die angegebene `<string>` verbunden.

> [!NOTE]
> Für Informationen über nicht verkettete Zähler sehen Sie sich die {{cssxref("counter()")}} Funktion an, die die `<string>` als Parameter weglässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählwertes mit römischen Zahlen in Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit gesetztem `<counter-style>` und eine andere, die auf `decimal` zurückfällt.

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

### Vergleich des Zählwertes mit führender Null mit Kleinbuchstaben

Dieses Beispiel enthält drei `counters()`-Funktionen, jede mit unterschiedlichen `<string>` und `<counter-style>` Werten.

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

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("@counter-style")}} Regel
- CSS [`counter()`](/de/docs/Web/CSS/Reference/Values/counter) Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
