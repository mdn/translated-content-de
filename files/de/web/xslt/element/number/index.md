---
title: <xsl:number>
slug: Web/XSLT/Element/number
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

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
  - : Bestimmt, was im Quellbaum sequenziell nummeriert werden soll. Es verwendet einen XPath-Ausdruck.
- `level`

  - : Definiert, wie Ebenen des Quellbaums bei der Generierung von fortlaufenden Nummern berücksichtigt werden sollen. Es gibt drei gültige Werte: `single`, `multiple` und `any`. Der Standardwert ist `single`:

    - `single`
      - : Nummeriert Knoten fortlaufend, wie die Punkte in einer Liste. Der Prozessor geht zum ersten Knoten in der [`ancestor-or-self`](/de/docs/Web/XPath/Axes#ancestor-or-self)-Achse, der mit dem `count`-Attribut übereinstimmt, und zählt dann diesen Knoten plus alle vorhergehenden Geschwister (stoppt, wenn er auf ein `from`-Attribut-Match trifft, falls vorhanden), die auch mit dem `count`-Attribut übereinstimmen. Falls keine Übereinstimmung gefunden wird, wird die Sequenz eine leere Liste sein.
    - `multiple`
      - : Nummeriert Knoten als Zusammengesetzte Sequenz, die die hierarchische Position des Knotens widerspiegelt, z.B. 1.2.2.5. (Das verschachtelte Format kann mit dem `format`-Attribut angegeben werden, z.B. A.1.1). Der Prozessor betrachtet alle [`ancestors`](/de/docs/Web/XPath/Axes#ancestor) des aktuellen Knotens und den aktuellen Knoten selbst und stoppt, wenn er auf ein Match für das `from`-Attribut trifft, falls vorhanden. Für jeden Knoten in dieser Liste, der mit dem `count`-Attribut übereinstimmt, zählt der Prozessor, wie viele vorhergehende übereinstimmende Geschwister es gibt, und fügt eins für den Knoten selbst hinzu. Wenn keine Übereinstimmung gefunden wird, wird die Sequenz eine leere Liste sein.
    - `any` (Zurzeit nicht unterstützt.)
      - : Nummeriert alle übereinstimmenden Knoten, unabhängig von der Ebene, fortlaufend. Die [`ancestor`](/de/docs/Web/XPath/Axes#ancestor)-, [`self`](/de/docs/Web/XPath/Axes#self)- und [`preceding`](/de/docs/Web/XPath/Axes#preceding)-Achsen werden alle berücksichtigt. Der Prozessor beginnt beim aktuellen Knoten und fährt in umgekehrter Dokumentenreihenfolge fort, stoppt, wenn er auf ein Match zu irgendwelchen `from`-Attributen trifft. Wenn kein Match zum `count`-Attribut gefunden wird, wird die Sequenz eine leere Liste sein. Diese Ebene wird zurzeit nicht unterstützt.

- `from`
  - : Gibt an, wo die Nummerierung beginnen oder neu gestartet werden soll. Die Sequenz beginnt mit dem ersten Nachkommen des Knotens, der dem `from`-Attribut entspricht.
- `value`
  - : Wendet ein bestimmtes Format auf eine Zahl an. Dies ist eine schnelle Möglichkeit, eine vom Benutzer gelieferte Zahl (im Gegensatz zu einer Knotensequenznummer) in einem der Standard-`<xsl:number>`-Formate zu formatieren.
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

- `lang` (Zurzeit nicht unterstützt.)
  - : Gibt an, welches Alphabet der Sprache in buchstabenbasierten Nummerierungsformaten verwendet werden soll.
- `letter-value`
  - : Unterscheidet zwischen Nummerierungssequenzen, die Buchstaben verwenden. Einige Sprachen haben mehr als ein Nummerierungssystem, das Buchstaben verwendet. Wenn beide Systeme mit demselben Token beginnen, kann es zu Mehrdeutigkeiten kommen. Dieses Attribut kann den Wert `alphabetic` oder `traditional` haben. Der Standardwert ist `alphabetic`.
- `grouping-separator`
  - : Gibt an, welches Zeichen als Gruppen-Trennzeichen (z.B. Tausender) verwendet werden soll. Der Standard ist das Komma (`,`).
- `grouping-size`
  - : Gibt die Anzahl der Ziffern an, die eine numerische Gruppe bilden. Der Standardwert ist `3`.

### Typ

Anweisung, erscheint innerhalb eines Templates.

## Spezifikationen

XSLT, Abschnitt 7.7

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe obige Kommentare.
