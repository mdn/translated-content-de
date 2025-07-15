---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit dem bereitgestellten String verbindet. Der dritte, optionale Parameter ermöglicht die Definition des Listenstils.

Die `counters()`-Funktion wird in der Regel innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, aber theoretisch kann sie überall genutzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, von außen nach innen angeordnet und durch den spezifizierten `<string>` getrennt. Die Zähler werden in dem angegebenen `<style>` dargestellt, wobei `decimal` als Standard verwendet wird, wenn kein `<style>` angegeben wird.

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

Ein [Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat keine sichtbare Wirkung für sich. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}}-Funktion) macht ihn nützlich, indem sie entwicklerdefinierten Inhalt zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verkettungs-`<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der die Zähler identifiziert, was derselbe Fall-sensible Name ist, der für die {{cssxref("counter-reset")}}- und {{cssxref("counter-increment")}}-Eigenschaften verwendet wird. Der Name kann nicht mit zwei Strichen beginnen und darf nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für Inline-Zähler zur einmaligen Verwendung die {{cssxref("symbols")}}-Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen codiert werden: Zum Beispiel steht `\000A9` für das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/symbols)-Funktion. Der Zählerstilname kann ein vordefinierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplexer Langform-vordefinierter Stil wie ostasiatisch oder äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn er weggelassen wird, wird `decimal` als Standard verwendet.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im Element-CSS-Zählersatz enthält, benannt `<counter-name>` im durch `<counter-style>` definierten Zählerstil (oder `decimal`, wenn weggelassen). Der Rückgabestring ist von außen nach innen sortiert und durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Für Informationen über nicht verkettete Zähler siehe die {{cssxref("counter", "counter()")}}-Funktion, die den `<string>` als Parameter weglässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählerwerts mit römischen Großbuchstabenzahlen

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit festgelegtem `<counter-style>` und die andere, die standardmäßig `decimal` verwendet.

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

{{EmbedLiveSample("Vergleich des Standardzählerwerts mit römischen Großbuchstabenzahlen", "100%", 270)}}

### Vergleich von Zählerwerten mit führenden Nullen mit Kleinbuchstaben

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

{{EmbedLiveSample("Vergleich von Zählerwerten mit führenden Nullen mit Kleinbuchstaben", "100%", 270)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-set")}}-Eigenschaft
- {{cssxref("counter-reset")}}-Eigenschaft
- {{cssxref("counter-increment")}}-Eigenschaft
- {{cssxref("@counter-style")}}-Atregel
- CSS [`counter()`](/de/docs/Web/CSS/counter)-Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)-Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)-Modul
