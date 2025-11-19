---
title: counters()
slug: Web/CSS/Reference/Values/counters
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit dem bereitgestellten String verknüpft. Der dritte, optionale Parameter ermöglicht das Definieren des Listenstils.

Die Funktion `counters()` wird allgemein innerhalb von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) durch die {{cssxref("content")}} Eigenschaft verwendet, kann theoretisch aber überall dort eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/Reference/Values/string) Wert unterstützt wird.

Die `counters()` Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet von außen nach innen und getrennt durch den angegebenen `<string>`. Die Zähler werden in dem angegebenen `<style>` dargestellt, wobei `decimal` als Standardstil gesetzt wird, wenn kein `<style>` angegeben wird.

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

Ein [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) hat allein keine sichtbare Wirkung. Die `counters()` Funktion (und die {{cssxref("counter", "counter()")}} Funktion) macht ihn nützlich, indem sie entwicklerdefinierten Inhalt zurückgibt.

### Werte

Die `counters()` Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verknüpfungs-`<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der die Zähler identifiziert, derselbe Fall-sensitive Name, der für die {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} Eigenschaften verwendet wird. Der Name kann nicht mit zwei Bindestrichen beginnen und darf nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ können für inline, einmalige Zähler die {{cssxref("symbols")}} Funktion anstelle eines benannten Zählers in [Browsers, die `symbols()` unterstützen](/de/docs/Web/CSS/Reference/Values/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen codiert werden: Zum Beispiel steht `\000A9` für das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/Reference/Values/symbols) Funktion. Der Zählerstilname kann ein vordefinierter Stil wie numerisch, alphabetisch oder symbolisch, ein komplexer langhandiger vordefinierter Stil wie Ostasiatisch oder Äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/Guides/Counter_styles) sein. Wenn ausgelassen, wird der Zählerstil auf decimal gesetzt.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählermengen-Element mit dem Namen `<counter-name>` im Zählerstil `<counter-style>` (oder decimal, falls ausgelassen) enthält. Der Rückgabestring ist von außen nach innen sortiert und wird durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Für Informationen über nicht verknüpfte Zähler, siehe die {{cssxref("counter", "counter()")}} Funktion, die `<string>` als Parameter auslässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählwerts mit römischen Ziffern in Großbuchstaben

Dieses Beispiel enthält zwei `counters()` Funktionen: eine mit eingestellt `<counter-style>` und die andere als Standardeinstellung `decimal`.

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

Dieses Beispiel enthält drei `counters()` Funktionen, jede mit unterschiedlichen `<string>` und `<counter-style>` Werten.

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
- {{cssxref("@counter-style")}} At-Regel
- CSS [`counter()`](/de/docs/Web/CSS/Reference/Values/counter) Funktion
- {{cssxref("::marker")}} Pseudoelement
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
