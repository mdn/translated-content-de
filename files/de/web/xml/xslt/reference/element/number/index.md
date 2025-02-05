---
title: <xsl:number>
slug: Web/XML/XSLT/Reference/Element/number
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:number>`-Element zählt Dinge sequenziell. Es kann auch verwendet werden, um eine Zahl schnell zu formatieren.

## Syntax

```xml
<xsl:number
  count=EXPRESSION
  level="single" | "multiple" | "any"
  from=EXPRESSION
  value=EXPRESSION
  format=FORMAT-STRING
  lang=XML:LANG-CODE
  letter-value="alphabetic" | "traditional"
  grouping-separator=CHARACTER
  grouping-size=NUMBER  />
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `count`
  - : Gibt an, was im Quellbaum sequenziell nummeriert werden soll. Es verwendet einen XPath-Ausdruck.
- `level`

  - : Definiert, wie Ebenen des Quellbaums berücksichtigt werden sollen, um sequenzielle Zahlen zu generieren. Es hat drei gültige Werte: `single`, `multiple` und `any`. Der Standardwert ist `single`:

    - `single`
      - : Nummeriert Geschwisterknoten sequenziell, wie bei den Elementen in einer Liste. Der Prozessor geht zum ersten Knoten in der [`ancestor-or-self`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor-or-self)-Achse, der mit dem `count`-Attribut übereinstimmt, und zählt dann diesen Knoten sowie alle vorherigen Geschwister (beendet die Zählung, wenn ein Treffer für das `from`-Attribut gefunden wird, falls vorhanden), die ebenfalls dem `count`-Attribut entsprechen. Wird keine Übereinstimmung gefunden, ist die Sequenz eine leere Liste.
    - `multiple`
      - : Nummeriert Knoten als zusammengesetzte Sequenz, die die hierarchische Position des Knotens widerspiegelt, z. B. 1.2.2.5. (Das verschachtelte Format kann mit dem `format`-Attribut angegeben werden, z. B. A.1.1). Der Prozessor betrachtet alle [`ancestors`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor) des aktuellen Knotens und den aktuellen Knoten selbst, wobei er anhält, wenn er einen Treffer für das `from`-Attribut findet, falls vorhanden. Für jeden Knoten in dieser Liste, der mit dem `count`-Attribut übereinstimmt, zählt der Prozessor, wie viele vorherige übereinstimmende Geschwister er hat, und fügt eins für den Knoten selbst hinzu. Wird keine Übereinstimmung gefunden, ist die Sequenz eine leere Liste.
    - `any` (Derzeit nicht unterstützt.)
      - : Nummeriert alle übereinstimmenden Knoten unabhängig von der Ebene sequenziell. Die [`ancestor`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor)-, [`self`](/de/docs/Web/XML/XPath/Reference/Axes#self)- und [`preceding`](/de/docs/Web/XML/XPath/Reference/Axes#preceding)-Achsen werden alle berücksichtigt. Der Prozessor beginnt beim aktuellen Knoten und geht in umgekehrter Dokumentreihenfolge vor, wobei er anhält, wenn er einen Treffer für ein `from`-Attribut erreicht. Wird kein Treffer für das `count`-Attribut gefunden, ist die Sequenz eine leere Liste. Diese Ebene wird derzeit nicht unterstützt.

- `from`
  - : Gibt an, wo die Nummerierung beginnen oder neu beginnen soll. Die Sequenz beginnt mit dem ersten Nachfahren des Knotens, der mit dem `from`-Attribut übereinstimmt.
- `value`
  - : Wendet ein bestimmtes Format auf eine Zahl an. Dies ist eine schnelle Methode, um eine vom Benutzer gelieferte Zahl (im Gegensatz zu einer Knotensequenznummer) in einem der Standardformate von `<xsl:number>` zu formatieren.
- `format`

  - : Definiert das Format der generierten Zahl:

    - `format="1"`
      - : `1 2 3 . . .` (Dies ist das einzige derzeit unterstützte Format)
    - `format="01"`
      - : `01 02 03 . . . 09 10 11 . . .`
    - `format="a"`
      - : `a b c . . .y z aa ab . . .`
    - `format="A"`
      - : `A B C . . . Y Z AA AB . . .`
    - `format="i"`
      - : `i ii iii iv v . . .`
    - `format="I"`
      - : `I II III IV V . . .`

- `lang` (Derzeit nicht unterstützt.)
  - : Gibt an, welches Alphabet der jeweiligen Sprache für buchstabenbasierte Nummerierungsformate verwendet werden soll.
- `letter-value`
  - : Klärt Unklarheiten zwischen Nummerierungsfolgen, die Buchstaben verwenden. Einige Sprachen haben mehr als ein Nummerierungssystem, das Buchstaben verwendet. Wenn beide Systeme mit demselben Zeichen beginnen, können Unklarheiten entstehen. Dieses Attribut kann den Wert `alphabetic` oder `traditional` haben. Der Standardwert ist `alphabetic`.
- `grouping-separator`
  - : Gibt an, welches Zeichen als Gruppierungszeichen (z. B. Tausendertrennzeichen) verwendet werden soll. Der Standardwert ist das Komma (`,`).
- `grouping-size`
  - : Gibt die Anzahl der Ziffern an, die eine numerische Gruppe bilden. Der Standardwert ist `3`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.7

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe obenstehende Anmerkungen.
