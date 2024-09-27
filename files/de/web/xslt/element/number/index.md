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
  - : Gibt an, was im Quellbaum sequenziell nummeriert werden soll. Es wird ein XPath-Ausdruck verwendet.
- `level`

  - : Definiert, wie Ebenen des Quellbaums beim Erzeugen von Sequenznummern berücksichtigt werden sollen. Es gibt drei gültige Werte: `single`, `multiple` und `any`. Der Standardwert ist `single`:

    - `single`
      - : Nummeriert Geschwisternoten sequenziell, wie bei den Elementen einer Liste. Der Prozessor geht zum ersten Knoten in der [`ancestor-or-self`](/de/docs/Web/XPath/Axes#ancestor-or-self)-Achse, der mit dem `count`-Attribut übereinstimmt, und zählt diesen Knoten plus alle seine vorhergehenden Geschwister, die ebenfalls mit dem `count`-Attribut übereinstimmen (und stoppt, wenn er eine Übereinstimmung mit dem `from`-Attribut findet, falls vorhanden). Wenn keine Übereinstimmung gefunden wird, ist die Sequenz eine leere Liste.
    - `multiple`
      - : Nummeriert Knoten als zusammengesetzte Sequenz, die die hierarchische Position des Knotens widerspiegelt, z.B. 1.2.2.5. (Das verschachtelte Format kann mit dem `format`-Attribut angegeben werden, z.B. A.1.1). Der Prozessor betrachtet alle [`ancestors`](/de/docs/Web/XPath/Axes#ancestor) des aktuellen Knotens und den aktuellen Knoten selbst und stoppt, wenn er eine Übereinstimmung für das `from`-Attribut findet, falls vorhanden. Für jeden Knoten in dieser Liste, der mit dem `count`-Attribut übereinstimmt, zählt der Prozessor, wie viele passende Vorgänger es gibt, und addiert einen für den Knoten selbst. Wenn keine Übereinstimmung gefunden wird, ist die Sequenz eine leere Liste.
    - `any` (Zurzeit nicht unterstützt.)
      - : Nummeriert alle passenden Knoten unabhängig von der Ebene sequenziell. Die [`ancestor`](/de/docs/Web/XPath/Axes#ancestor), [`self`](/de/docs/Web/XPath/Axes#self), und [`preceding`](/de/docs/Web/XPath/Axes#preceding) Achsen werden alle berücksichtigt. Der Prozessor beginnt am aktuellen Knoten und fährt in umgekehrter Dokumentreihenfolge fort, stoppt jedoch, wenn er eine Übereinstimmung mit einem `from`-Attribut findet. Wenn keine Übereinstimmung mit dem `count`-Attribut gefunden wird, ist die Sequenz eine leere Liste. Diese Ebene wird zurzeit nicht unterstützt.

- `from`
  - : Gibt an, wo die Nummerierung beginnen oder neu beginnen soll. Die Sequenz beginnt mit dem ersten Nachkommen des Knotens, der mit dem `from`-Attribut übereinstimmt.
- `value`
  - : Wendet ein gegebenes Format auf eine Zahl an. Dies ist eine schnelle Möglichkeit, eine vom Benutzer bereitgestellte Zahl (im Gegensatz zu einer Knotensequenznummer) in einem der standardmäßigen `<xsl:number>`-Formate zu formatieren.
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
  - : Gibt an, welches Alphabet bei buchstabenbasierten Nummerierungsformaten verwendet werden soll.
- `letter-value`
  - : Unterscheidet zwischen Nummerierungssequenzen, die Buchstaben verwenden. Einige Sprachen haben mehr als ein Nummerierungssystem, das Buchstaben verwendet. Wenn beide Systeme mit demselben Token beginnen, kann es zu Mehrdeutigkeiten kommen. Dieses Attribut kann den Wert `alphabetic` oder `traditional` haben. Der Standardwert ist `alphabetic`.
- `grouping-separator`
  - : Gibt an, welches Zeichen als Gruppierungszeichen (z.B. Tausendertrennzeichen) verwendet werden soll. Der Standardwert ist das Komma (`,`).
- `grouping-size`
  - : Gibt die Anzahl an Ziffern an, die eine numerische Gruppe bilden. Der Standardwert ist `3`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.7

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe obenstehende Kommentare.
