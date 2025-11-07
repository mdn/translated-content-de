---
title: counters()
slug: Web/CSS/Reference/Values/counters
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler (falls vorhanden) mit dem bereitgestellten String verknüpft. Der dritte, optionale Parameter ermöglicht die Definition des Listenstils.

Die `counters()`-Funktion wird im Allgemeinen innerhalb von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) über die {{cssxref("content")}}-Eigenschaft verwendet, kann jedoch theoretisch überall dort benutzt werden, wo ein [`<string>`](/de/docs/Web/CSS/Reference/Values/string) Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, von außen nach innen angeordnet und durch den angegebenen `<string>` getrennt. Die Zähler werden im angegebenen `<style>` dargestellt, standardmäßig `decimal`, falls kein `<style>` angegeben ist.

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

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat allein keine sichtbare Wirkung. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}}-Funktion) macht ihn nützlich, indem sie vom Entwickler definierten Inhalt zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der verkettende `<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}} zur Identifizierung der Zähler, derselbe groß- und kleinschreibungssensitive Name wie für die {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}}-Eigenschaften. Der Name darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für Inline-Zähler, die nur einmal verwendet werden, die {{cssxref("symbols")}}-Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/Reference/Values/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen kodiert werden: zum Beispiel stellt `\000A9` das Copyright-Symbol dar.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/Reference/Values/symbols)-Funktion. Der Zählerstilname kann ein vordefinierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplexer ausgeschriebener vordefinierter Stil wie Ostasiatisch oder Äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wird er weggelassen, ist der Zählerstil standardmäßig auf Dezimal eingestellt.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählermengenset des Elements mit dem Namen `<counter-name>` im durch `<counter-style>` definierten Zählerstil (oder dezimal, falls weggelassen) enthält. Der Rückgabestring ist in der Reihenfolge von außen nach innen sortiert und wird durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Für Informationen über nicht verkettete Zähler, siehe die {{cssxref("counter", "counter()")}}-Funktion, die den `<string>` als Parameter weglässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählerwerts mit römischen Zahlen in Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit gesetzt `<counter-style>` und die andere mit Standardwert `decimal`.

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

{{EmbedLiveSample("Vergleich des Standardzählerwerts mit römischen Zahlen in Großbuchstaben", "100%", 270)}}

### Vergleich von Dezimalwert mit führender Null mit Kleinbuchstaben

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

{{EmbedLiveSample("Vergleich von Dezimalwert mit führender Null mit Kleinbuchstaben", "100%", 270)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-set")}}-Eigenschaft
- {{cssxref("counter-reset")}}-Eigenschaft
- {{cssxref("counter-increment")}}-Eigenschaft
- {{cssxref("@counter-style")}}-Regel
- CSS [`counter()`](/de/docs/Web/CSS/Reference/Values/counter)-Funktion
- {{cssxref("::marker")}}-Pseudoelement
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists)-Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)-Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)-Modul
