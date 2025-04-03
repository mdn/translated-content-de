---
title: <xsl:number>
slug: Web/XML/XSLT/Reference/Element/number
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das `<xsl:number>`-Element zählt Dinge sequenziell. Es kann auch verwendet werden, um schnell eine Zahl zu formatieren.

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
  - : Spezifiziert, was im Quellbaum sequenziell nummeriert werden soll. Es verwendet einen XPath-Ausdruck.
- `level`

  - : Definiert, wie Ebenen des Quellbaums bei der Erzeugung sequenzieller Nummern berücksichtigt werden sollen. Es hat drei gültige Werte: `single`, `multiple` und `any`. Der Standardwert ist `single`:

    - `single`
      - : Nummeriert Geschwisterknoten sequenziell, wie in den Elementen einer Liste. Der Prozessor geht zum ersten Knoten in der [`ancestor-or-self`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor-or-self)-Achse, der mit dem `count`-Attribut übereinstimmt, und zählt dann diesen Knoten plus alle seine vorhergehenden Geschwister (stoppt, wenn er eine Übereinstimmung mit dem `from`-Attribut erreicht, falls vorhanden), die ebenfalls mit dem `count`-Attribut übereinstimmen. Wenn keine Übereinstimmung gefunden wird, ist die Sequenz eine leere Liste.
    - `multiple`
      - : Nummeriert Knoten als zusammengesetzte Sequenz, die die hierarchische Position des Knotens widerspiegelt, z.B., 1.2.2.5. (Das verschachtelte Format kann mit dem `format`-Attribut angegeben werden, z.B., A.1.1). Der Prozessor betrachtet alle [`ancestors`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor) des aktuellen Knotens und den aktuellen Knoten selbst und stoppt, wenn er eine Übereinstimmung mit dem `from`-Attribut erreicht, falls vorhanden. Für jeden Knoten in dieser Liste, der mit dem `count`-Attribut übereinstimmt, zählt der Prozessor, wie viele vorhergehende übereinstimmende Geschwister er hat, und fügt eins für den Knoten selbst hinzu. Wenn keine Übereinstimmung gefunden wird, ist die Sequenz eine leere Liste.
    - `any` (Derzeit nicht unterstützt.)
      - : Nummeriert alle übereinstimmenden Knoten unabhängig von der Ebene sequenziell. Die [`ancestor`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor)-, [`self`](/de/docs/Web/XML/XPath/Reference/Axes#self)- und [`preceding`](/de/docs/Web/XML/XPath/Reference/Axes#preceding)-Achsen werden alle berücksichtigt. Der Prozessor startet am aktuellen Knoten und bewegt sich in umgekehrter Dokumentreihenfolge vorwärts, stoppt, falls er eine Übereinstimmung zu irgendeinem `from`-Attribut erreicht. Wenn keine Übereinstimmung mit dem `count`-Attribut gefunden wird, ist die Sequenz eine leere Liste. Diese Ebene wird derzeit nicht unterstützt.

- `from`
  - : Gibt an, wo die Nummerierung beginnen oder neu anfangen soll. Die Sequenz beginnt mit dem ersten Nachkommen des Knotens, der mit dem `from`-Attribut übereinstimmt.
- `value`
  - : Wendet ein gegebenes Format auf eine Zahl an. Dies ist eine schnelle Möglichkeit, eine vom Benutzer bereitgestellte Zahl (im Gegensatz zu einer Knotensequenznummer) in eines der standardmäßigen `<xsl:number>`-Formate zu formatieren.
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
  - : Spezifiziert, welches Alphabet der Sprache in buchstabenbasierten Nummerierungsformaten verwendet werden soll.
- `letter-value`
  - : Unterscheidet zwischen Nummerierungssequenzen, die Buchstaben verwenden. Einige Sprachen haben mehr als ein Nummerierungssystem, das Buchstaben verwendet. Wenn beide Systeme mit demselben Token beginnen, kann es zu Zweideutigkeiten kommen. Dieses Attribut kann den Wert `alphabetic` oder `traditional` haben. Der Standardwert ist `alphabetic`.
- `grouping-separator`
  - : Gibt an, welches Zeichen als Gruppierungszeichen (z.B. Tausendertrenner) verwendet werden soll. Der Standardwert ist das Komma (`,`).
- `grouping-size`
  - : Gibt die Anzahl der Ziffern an, aus denen eine numerische Gruppe besteht. Der Standardwert ist `3`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.7

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe obige Anmerkungen.
