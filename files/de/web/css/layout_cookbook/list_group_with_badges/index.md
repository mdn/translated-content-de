---
title: Listengruppe mit Badges
slug: Web/CSS/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

In diesem Rezept erstellen wir ein Listengruppenmuster mit Badges, die eine Anzahl anzeigen.

![Eine Liste von Elementen mit einem Badge, das rechts neben dem Text eine Anzahl anzeigt.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollten mit den Badges angezeigt werden. Der Badge sollte rechts ausgerichtet und vertikal zentriert sein. Der Badge muss vertikal zentriert sein, egal ob es sich um eine einzelne Zeile oder mehrere Zeilen von Inhalten handelt.

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
  color: #fff;
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

Um sicherzustellen, dass der Text und der Badge korrekt ausgerichtet sind, verwende ich die {{cssxref("justify-content")}}-Eigenschaft mit dem Wert `space-between`. Dies platziert zusätzlichen Raum zwischen den Elementen. Im Live-Beispiel, wenn Sie diese Eigenschaft entfernen, sehen Sie, dass sich der Badge an das Ende des Textes bei Elementen mit kürzerem Text als eine Zeile bewegt.

Um den Inhalt horizontal auszurichten, verwende ich die {{cssxref("align-items")}}-Eigenschaft, um den Text und den Badge auf der Querachse auszurichten. Wenn Sie möchten, dass der Badge am oberen Rand des Inhalts ausgerichtet wird, ändern Sie dies in `align-items: flex-start`.

## Siehe auch

- [Boxausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- Modul [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
