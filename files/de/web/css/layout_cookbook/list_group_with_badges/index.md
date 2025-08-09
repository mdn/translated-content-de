---
title: Listengruppe mit Badges
slug: Web/CSS/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

In diesem Rezept erstellen wir ein Listengruppenmuster mit Badges, die eine Anzahl anzeigen.

![Eine Liste von Elementen mit einem Badge, das eine Anzahl rechts vom Text anzeigt.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollten mit den Badges angezeigt werden. Das Badge sollte rechts ausgerichtet und vertikal zentriert sein. Das Badge muss vertikal zentriert sein, unabhängig davon, ob es eine einzelne oder mehrere Zeilen Text gibt.

## Rezept

Klicken Sie auf "Abspielen" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
  border: 1px solid #ccc;
  border-radius: 0.5em;
  width: 20em;
}

.list-group li {
  border-top: 1px solid #ccc;
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

## Entscheidungen getroffen

Flexbox macht dieses spezielle Muster einfach und erleichtert auch Änderungen am Layout.

Um sicherzustellen, dass der Text und das Badge korrekt ausgerichtet sind, verwende ich die {{cssxref("justify-content")}}-Eigenschaft mit dem Wert `space-between`. Dies platziert jeden zusätzlichen Raum zwischen den Elementen. Im Live-Beispiel, wenn Sie diese Eigenschaft entfernen, sehen Sie, dass das Badge an das Ende des Textes bei Elementen mit kürzerem Text als eine Zeile verschoben wird.

Um den Inhalt horizontal auszurichten, verwende ich die {{cssxref("align-items")}}-Eigenschaft, um den Text und das Badge auf der Querachse auszurichten. Wenn Sie möchten, dass sich das Badge am oberen Rand des Inhalts ausrichtet, ändern Sie dies in `align-items: flex-start`.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
