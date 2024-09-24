---
title: <xsl:number>
slug: Web/XSLT/Element/number
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:number>`-Element zählt Dinge sequentiell. Es kann auch verwendet werden, um eine Zahl schnell zu formatieren.

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

  - : Definiert, wie Ebenen des Quellbaums bei der Generierung sequentieller Nummern berücksichtigt werden sollen. Es gibt drei gültige Werte: `single`, `multiple` und `any`. Der Standardwert ist `single`:

    - `single`
      - : Nummeriert Geschwisterknoten sequentiell, ähnlich wie die Elemente in einer Liste. Der Prozessor geht zum ersten Knoten in der [`ancestor-or-self`](/de/docs/Web/XPath/Axes#ancestor-or-self)-Achse, der dem `count`-Attribut entspricht, und zählt dann diesen Knoten plus alle vorhergehenden Geschwister, die ebenfalls dem `count`-Attribut entsprechen (hört auf, wenn ein `from`-Attribut vorhanden ist, das übereinstimmt). Wenn keine Übereinstimmung gefunden wird, ist die Sequenz eine leere Liste.
    - `multiple`
      - : Nummeriert Knoten als zusammengesetzte Sequenz, die die hierarchische Position des Knotens widerspiegelt, z.B. 1.2.2.5. (Das verschachtelte Format kann mit dem `format`-Attribut angegeben werden, z.B. A.1.1). Der Prozessor betrachtet alle [`ancestors`](/de/docs/Web/XPath/Axes#ancestor) des aktuellen Knotens und den aktuellen Knoten selbst, hört auf, wenn ein `from`-Attribut vorhanden ist, das übereinstimmt. Für jeden Knoten in dieser Liste, der dem `count`-Attribut entspricht, zählt der Prozessor, wie viele vorhergehende übereinstimmende Geschwister er hat, und addiert eins für den Knoten selbst. Wenn keine Übereinstimmung gefunden wird, ist die Sequenz eine leere Liste.
    - `any` (Zurzeit nicht unterstützt.)
      - : Nummeriert alle übereinstimmenden Knoten ungeachtet der Ebene sequentiell. Die [`ancestor`](/de/docs/Web/XPath/Axes#ancestor)-, [`self`](/de/docs/Web/XPath/Axes#self)- und [`preceding`](/de/docs/Web/XPath/Axes#preceding)-Achsen werden alle berücksichtigt. Der Prozessor beginnt beim aktuellen Knoten und fährt in umgekehrter Dokumentreihenfolge fort, hält an, wenn er eine Übereinstimmung zu einem `from`-Attribut erreicht. Wenn keine Übereinstimmung zum `count`-Attribut gefunden wird, ist die Sequenz eine leere Liste. Diese Ebene wird zurzeit nicht unterstützt.

- `from`
  - : Gibt an, wo die Nummerierung beginnen oder neu starten soll. Die Sequenz beginnt mit dem ersten Nachkommen des Knotens, der dem `from`-Attribut entspricht.
- `value`
  - : Wendet ein gegebenes Format auf eine Zahl an. Dies ist ein schneller Weg, um eine benutzerdefinierte Zahl (im Gegensatz zu einer Knotensequenznummer) in einem der Standardformate des `<xsl:number>` zu formatieren.
- `format`

  - : Definiert das Format der generierten Nummer:

    - `format="1"`
      - : `1 2 3 . . .` (Dies ist das einzige zurzeit unterstützte Format)
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
  - : Gibt an, welche Alphabetsprache in buchstabenbasierten Nummerierungsformaten verwendet werden soll.
- `letter-value`
  - : Unterscheidet zwischen Nummerierungssequenzen, die Buchstaben verwenden. Einige Sprachen haben mehr als ein Nummerierungssystem, das Buchstaben verwendet. Wenn beide Systeme mit demselben Token beginnen, kann eine Mehrdeutigkeit entstehen. Dieses Attribut kann den Wert "`alphabetic`" oder "`traditional`" haben. Der Standardwert ist "`alphabetic`".
- `grouping-separator`
  - : Gibt an, welches Zeichen als Gruppen- (z.B. Tausender-) Trennzeichen verwendet werden soll. Der Standardwert ist das Komma (`,`).
- `grouping-size`
  - : Gibt die Anzahl der Ziffern an, die eine Zahlengruppe bilden. Der Standardwert ist "`3`".

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.7

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe Kommentare oben.
