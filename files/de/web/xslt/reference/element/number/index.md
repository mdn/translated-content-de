---
title: <xsl:number>
slug: Web/XSLT/Reference/Element/number
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Das `<xsl:number>`-Element zählt Dinge sequentiell. Es kann auch verwendet werden, um schnell eine Zahl zu formatieren.

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
  - : Gibt an, was im Quellbaum sequentiell nummeriert werden soll. Es verwendet einen XPath-Ausdruck.
- `level`

  - : Definiert, wie Ebenen des Quellbaums bei der Erstellung von sequentiellen Nummern berücksichtigt werden sollen. Es gibt drei gültige Werte: `single`, `multiple` und `any`. Der Standardwert ist `single`:

    - `single`
      - : Nummeriert Knoten auf derselben Ebene sequentiell, etwa die Elemente in einer Liste. Der Prozessor geht zum ersten Knoten in der [`ancestor-or-self`](/de/docs/Web/XPath/Reference/Axes#ancestor-or-self)-Achse, der mit dem `count`-Attribut übereinstimmt, und zählt dann diesen Knoten sowie alle dessen vorhergehenden Geschwister (bis er auf ein Attribut `from` trifft, falls vorhanden), die ebenfalls dem `count`-Attribut entsprechen. Wird keine Übereinstimmung gefunden, ist die Sequenz eine leere Liste.
    - `multiple`
      - : Nummeriert Knoten als zusammengesetzte Sequenz, die die hierarchische Position des Knotens widerspiegelt, z.B. 1.2.2.5. (Das verschachtelte Format kann mit dem `format`-Attribut angegeben werden, z.B. A.1.1). Der Prozessor betrachtet alle [`ancestors`](/de/docs/Web/XPath/Reference/Axes#ancestor) des aktuellen Knotens und den aktuellen Knoten selbst und endet, wenn er auf ein `from`-Attribut trifft, falls vorhanden. Für jeden Knoten in dieser Liste, der dem `count`-Attribut entspricht, zählt der Prozessor, wie viele vorhergehende übereinstimmende Geschwister er hat, und addiert eins für den Knoten selbst. Wird keine Übereinstimmung gefunden, ist die Sequenz eine leere Liste.
    - `any` (Derzeit nicht unterstützt.)
      - : Nummeriert alle übereinstimmenden Knoten unabhängig von der Ebene sequentiell. Die [`ancestor`](/de/docs/Web/XPath/Reference/Axes#ancestor)-, [`self`](/de/docs/Web/XPath/Reference/Axes#self)- und [`preceding`](/de/docs/Web/XPath/Reference/Axes#preceding)-Achsen werden alle berücksichtigt. Der Prozessor beginnt am aktuellen Knoten und bewegt sich in umgekehrter Dokumentenreihenfolge, bis er auf ein `from`-Attribut trifft. Wird keine Übereinstimmung mit dem `count`-Attribut gefunden, ist die Sequenz eine leere Liste. Diese Ebene wird derzeit nicht unterstützt.

- `from`
  - : Gibt an, wo die Nummerierung beginnen oder neu beginnen soll. Die Sequenz beginnt mit dem ersten Nachkommen des Knotens, der dem `from`-Attribut entspricht.
- `value`
  - : Wendet ein bestimmtes Format auf eine Zahl an. Dies ist eine schnelle Möglichkeit, eine vom Benutzer bereitgestellte Zahl (im Gegensatz zu einer Knotenfolgenummer) in einem der Standardformate von `<xsl:number>` zu formatieren.
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
  - : Gibt die Sprache an, deren Alphabet in buchstabenbasierten Nummerierungsformaten verwendet werden soll.
- `letter-value`
  - : Klärt Mehrdeutigkeiten bei Nummerierungssequenzen, die Buchstaben verwenden. Einige Sprachen haben mehr als ein Nummerierungssystem, das Buchstaben verwendet. Wenn beide Systeme mit demselben Token beginnen, kann Mehrdeutigkeit entstehen. Dieses Attribut kann den Wert `alphabetic` oder `traditional` haben. Der Standardwert ist `alphabetic`.
- `grouping-separator`
  - : Gibt an, welches Zeichen als Gruppen-Trennzeichen (z.B. Tausendertrennzeichen) verwendet werden soll. Der Standard ist das Komma (`,`).
- `grouping-size`
  - : Gibt an, wie viele Ziffern eine numerische Gruppe bilden. Der Standardwert ist `3`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.7

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe obige Kommentare.
