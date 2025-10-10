---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht das Kombinieren von Markierungen beim Schachteln von Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und geschachtelten Zähler, falls vorhanden, mit dem angegebenen String verkettet. Der dritte, optionale Parameter erlaubt die Definition des Listenstils.

Die `counters()` Funktion wird generell innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}} Eigenschaft verwendet, kann theoretisch jedoch überall genutzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string) Wert unterstützt wird.

Die `counters()` Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet von außen nach innen und getrennt durch das angegebene `<string>`. Die Zähler werden in dem angegebenen `<style>` gerendert, standardmäßig als `decimal`, wenn kein `<style>` angegeben ist.

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

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat allein keine sichtbare Wirkung. Die `counters()` Funktion (und die {{cssxref("counter", "counter()")}} Funktion) macht ihn nützlich, indem sie entwicklerdefinierten Inhalt zurückgibt.

### Werte

Die `counters()` Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verkettungsstring `<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}} zur Identifizierung der Zähler, derselbe case-sensitive Name, der für die {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} Eigenschaften verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für einmalige Inline-Zähler anstelle eines benannten Zählers die {{cssxref("symbols")}} Funktion verwendet werden, in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility).
- {{cssxref("&lt;string&gt;")}}
  - : Eine beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen kodiert werden: zum Beispiel repräsentiert `\000A9` das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/symbols) Funktion. Der Zählerstilname kann ein vordefinierter Stil sein, wie numerisch, alphabetisch oder symbolisch, ein komplexer Langstil wie ostasiatisch oder äthiopisch oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn weggelassen, wird der Zählerstil standardmäßig auf Dezimal gesetzt.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählersatz des Elements, benannt `<counter-name>`, im durch `<counter-style>` definierten Stil enthält (oder Dezimal, falls weggelassen). Der Rückgabestring ist von außen nach innen sortiert, verbunden durch das angegebene `<string>`.

> [!NOTE]
> Informationen zu nicht verketteten Zählern finden Sie in der {{cssxref("counter", "counter()")}} Funktion, die das `<string>` als Parameter weglässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählwerts mit römischen Ziffern in Großbuchstaben

Dieses Beispiel enthält zwei `counters()` Funktionen: eine mit gesetztem `<counter-style>` und die andere, die standardmäßig auf `decimal` setzt.

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

{{EmbedLiveSample("Vergleich des Standardzählwerts mit römischen Ziffern in Großbuchstaben", "100%", 270)}}

### Vergleich des Zählwerts mit führender Null mit Kleinbuchstaben

Dieses Beispiel umfasst drei `counters()` Funktionen, jede mit unterschiedlichen `<string>` und `<counter-style>` Werten.

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

{{EmbedLiveSample("Vergleich des Zählwerts mit führender Null mit Kleinbuchstaben", "100%", 270)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("@counter-style")}} At-Regel
- CSS [`counter()`](/de/docs/Web/CSS/counter) Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
