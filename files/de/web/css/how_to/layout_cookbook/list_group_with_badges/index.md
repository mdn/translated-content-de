---
title: Listengruppe mit Abzeichen
slug: Web/CSS/How_to/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Rezept erstellen wir ein Listenmuster mit Abzeichen, die eine Anzahl anzeigen.

![Eine Liste von Elementen mit einem Abzeichen, das eine Anzahl rechts neben dem Text anzeigt.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollten mit den Abzeichen angezeigt werden. Das Abzeichen sollte rechts ausgerichtet und vertikal zentriert sein. Das Abzeichen muss vertikal zentriert sein, unabhängig davon, ob es sich um eine einzelne Zeile oder mehrere Zeilen Text handelt.

## Rezept

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___list-group-badges-example
<ul class="list-group">
  <li>
    Item One
    <span class="badge">2</span>
  </li>
  <li>
    Item Two
    <span class="badge">10</span>
  </li>
  <li>
    Item Three
    <span class="badge">9</span>
  </li>
  <li>
    Item Four
    <span class="badge">0</span>
  </li>
</ul>
```

```css live-sample___list-group-badges-example
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 0;
  margin: 1em;
}
.list-group {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #cccccc;
  border-radius: 0.5em;
  width: 20em;
}

.list-group li {
  border-top: 1px solid #cccccc;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-group li:first-child {
  border-top: 0;
}

.list-group .badge {
  background-color: rebeccapurple;
  color: white;
  font-weight: bold;
  font-size: 80%;
  border-radius: 10em;
  min-width: 1.5em;
  padding: 0.25em;
  text-align: center;
}
```

{{EmbedLiveSample("list-group-badges-example", "", "250px")}}

## Getroffene Entscheidungen

Flexbox macht dieses spezielle Muster einfach und erleichtert auch Änderungen am Layout.

Um sicherzustellen, dass der Text und das Abzeichen korrekt ausgerichtet sind, verwende ich die Eigenschaft {{cssxref("justify-content")}} mit dem Wert `space-between`. Dies platziert jeglichen zusätzlichen Raum zwischen den Elementen. Im Live-Beispiel, wenn Sie diese Eigenschaft entfernen, sehen Sie, dass sich das Abzeichen bei Elementen mit kürzerem Text als einer Zeile zum Ende des Textes bewegt.

Um den Inhalt horizontal auszurichten, verwende ich die Eigenschaft {{cssxref("align-items")}}, um den Text und das Abzeichen auf der Querachse auszurichten. Wenn Sie möchten, dass das Abzeichen zum oberen Rand des Inhalts ausgerichtet wird, ändern Sie dies zu `align-items: flex-start`.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- Modul [Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) der CSS
