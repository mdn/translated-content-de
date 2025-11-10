---
title: <xsl:number>
slug: Web/XML/XSLT/Reference/Element/number
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `<xsl:number>` Element zählt Dinge sequenziell. Es kann auch verwendet werden, um eine Zahl schnell zu formatieren.

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

  - : Definiert, wie Ebenen des Quellbaums bei der Generierung sequenzieller Zahlen betrachtet werden sollen. Es hat drei gültige Werte: `single`, `multiple` und `any`. Der Standardwert ist `single`:
    - `single`
      - : Nummeriert Geschwisterknoten sequenziell, wie in den Elementen einer Liste. Der Prozessor geht zum ersten Knoten in der [`ancestor-or-self`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor-or-self) Achse, der dem `count` Attribut entspricht, und zählt dann diesen Knoten sowie alle seine vorhergehenden Geschwister (Stoppen bei einem Treffer des `from` Attributs, falls vorhanden), die ebenfalls dem `count` Attribut entsprechen. Wenn kein Treffer gefunden wird, ist die Sequenz eine leere Liste.
    - `multiple`
      - : Nummeriert Knoten als zusammengesetzte Sequenz, die die hierarchische Position des Knotens widerspiegelt, z.B. 1.2.2.5. (Das verschachtelte Format kann mit dem `format` Attribut angegeben werden, z.B. A.1.1). Der Prozessor betrachtet alle [`ancestors`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor) des aktuellen Knotens und den aktuellen Knoten selbst, bis er auf ein `from` Attribut stößt, falls vorhanden. Für jeden Knoten in dieser Liste, der dem `count` Attribut entspricht, zählt der Prozessor, wie viele vorausgehende übereinstimmende Geschwister er hat, und fügt eins für den Knoten selbst hinzu. Wenn kein Treffer gefunden wird, ist die Sequenz eine leere Liste.
    - `any` (Derzeit nicht unterstützt.)
      - : Nummeriert alle übereinstimmenden Knoten, unabhängig von der Ebene, sequenziell. Die [`ancestor`](/de/docs/Web/XML/XPath/Reference/Axes#ancestor), [`self`](/de/docs/Web/XML/XPath/Reference/Axes#self), und [`preceding`](/de/docs/Web/XML/XPath/Reference/Axes#preceding) Achsen werden alle betrachtet. Der Prozessor beginnt am aktuellen Knoten und fährt in umgekehrter Dokumentenreihenfolge fort, wobei er stoppt, wenn er auf ein `from` Attribut stößt. Wenn kein `count` Attribut gefunden wird, ist die Sequenz eine leere Liste. Diese Ebene wird derzeit nicht unterstützt.

- `from`
  - : Gibt an, wo die Nummerierung beginnen oder neu beginnen soll. Die Sequenz beginnt mit dem ersten Nachkommen des Knotens, der dem `from` Attribut entspricht.
- `value`
  - : Wendet ein bestimmtes Format auf eine Zahl an. Dies ist eine schnelle Möglichkeit, eine benutzergelieferte Zahl (im Gegensatz zu einer Knotensequenznummer) in einem der Standardformate von `<xsl:number>` zu formatieren.
- `format`

  - : Definiert das Format der generierten Nummer:
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
  - : Gibt an, welches Alphabet der Sprache in buchstabenbasierten Nummerierungsformaten verwendet werden soll.
- `letter-value`
  - : Unterscheidet zwischen Nummerierungssequenzen, die Buchstaben verwenden. Einige Sprachen haben mehr als ein Nummerierungssystem, das Buchstaben verwendet. Wenn beide Systeme mit demselben Token beginnen, kann es zu Mehrdeutigkeiten kommen. Dieses Attribut kann den Wert `alphabetic` oder `traditional` haben. Der Standard ist `alphabetic`.
- `grouping-separator`
  - : Gibt an, welches Zeichen als Gruppen-Trennzeichen (z.B. Tausender) verwendet werden soll. Der Standard ist das Komma (`,`).
- `grouping-size`
  - : Gibt die Anzahl der Ziffern an, die eine numerische Gruppe bilden. Der Standardwert ist `3`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.7

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe oben stehende Kommentare.
