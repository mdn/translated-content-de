---
title: <xsl:number>
slug: Web/XSLT/Reference/Element/number
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:number>`-Element zählt Dinge nacheinander. Es kann auch verwendet werden, um schnell eine Zahl zu formatieren.

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
  - : Gibt an, was im Quellbaum fortlaufend nummeriert werden soll. Es verwendet einen XPath-Ausdruck.
- `level`

  - : Definiert, wie Ebenen des Quellbaums bei der Erzeugung fortlaufender Nummerierungen berücksichtigt werden sollen. Es gibt drei gültige Werte: `single`, `multiple` und `any`. Der Standardwert ist `single`:

    - `single`
      - : Nummeriert Geschwisterknoten nacheinander, wie in den Elementen einer Liste. Der Prozessor geht zum ersten Knoten in der [`ancestor-or-self`](/de/docs/Web/XPath/Axes#ancestor-or-self)-Achse, der mit dem `count`-Attribut übereinstimmt, und zählt dann diesen Knoten plus alle vorhergehenden Geschwister (stoppt, wenn er auf ein `from`-Attribut stößt, falls vorhanden), die ebenfalls mit dem `count`-Attribut übereinstimmen. Wenn keine Übereinstimmung gefunden wird, ist die Sequenz eine leere Liste.
    - `multiple`
      - : Nummeriert Knoten als zusammengesetzte Sequenz, die die hierarchische Position des Knotens widerspiegelt, z. B. 1.2.2.5. (Das geschachtelte Format kann mit dem `format`-Attribut angegeben werden, z. B. A.1.1). Der Prozessor betrachtet alle [`ancestors`](/de/docs/Web/XPath/Axes#ancestor) des aktuellen Knotens und den aktuellen Knoten selbst, wobei er anhält, wenn er auf ein `from`-Attribut stößt, falls vorhanden. Für jeden Knoten in dieser Liste, der mit dem `count`-Attribut übereinstimmt, zählt der Prozessor, wie viele vorhergehende übereinstimmende Geschwister er hat, und fügt eins für den Knoten selbst hinzu. Wenn keine Übereinstimmung gefunden wird, ist die Sequenz eine leere Liste.
    - `any` (Derzeit nicht unterstützt.)
      - : Nummeriert alle übereinstimmenden Knoten unabhängig von der Ebene der Reihe nach. Die [`ancestor`](/de/docs/Web/XPath/Axes#ancestor), [`self`](/de/docs/Web/XPath/Axes#self) und [`preceding`](/de/docs/Web/XPath/Axes#preceding)-Achsen werden alle berücksichtigt. Der Prozessor startet am aktuellen Knoten und fährt in umgekehrter Dokumentordnung fort, wobei er anhält, wenn er auf ein `from`-Attribut stößt. Wenn keine Übereinstimmung mit dem `count`-Attribut gefunden wird, ist die Sequenz eine leere Liste. Diese Ebene wird derzeit nicht unterstützt.

- `from`
  - : Gibt an, wo die Nummerierung beginnen oder neu starten soll. Die Sequenz beginnt mit dem ersten Nachfahren des Knotens, der mit dem `from`-Attribut übereinstimmt.
- `value`
  - : Wendet ein bestimmtes Format auf eine Zahl an. Dies ist eine schnelle Möglichkeit, eine vom Benutzer bereitgestellte Zahl (im Gegensatz zu einer Knotensequenznummer) in einem der Standard-`<xsl:number>`-Formate zu formatieren.
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
  - : Gibt an, welches Alphabet der Sprache in buchstabenbasierten Nummerierungsformaten verwendet werden soll.
- `letter-value`
  - : Unterscheidet zwischen Nummerierungssequenzen, die Buchstaben verwenden. Einige Sprachen haben mehr als ein Nummerierungssystem, das Buchstaben verwendet. Wenn beide Systeme mit dem gleichen Zeichen beginnen, kann Unklarheit entstehen. Dieses Attribut kann den Wert `alphabetic` oder `traditional` haben. Der Standardwert ist `alphabetic`.
- `grouping-separator`
  - : Gibt an, welches Zeichen als Gruppierungstrennzeichen (z. B. Tausendertrennzeichen) verwendet werden soll. Der Standardwert ist das Komma (`,`).
- `grouping-size`
  - : Gibt die Anzahl der Ziffern an, die eine numerische Gruppe ausmachen. Der Standardwert ist `3`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.7

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe die obigen Anmerkungen.
