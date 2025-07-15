---
title: Listengruppe mit Abzeichen
slug: Web/CSS/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Rezept erstellen wir ein Listengruppenmuster mit Abzeichen, die eine Anzahl anzeigen.

![Eine Liste von Elementen mit einem Abzeichen, das eine Anzahl anzeigt, rechts neben dem Text.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollten mit den Abzeichen angezeigt werden. Das Abzeichen sollte rechts ausgerichtet und vertikal zentriert sein. Das Abzeichen muss vertikal zentriert sein, unabhängig davon, ob es eine einzelne Zeile mit Inhalt oder mehrere Textzeilen gibt.

## Rezept

Klicken Sie auf "Play" in den untenstehenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Um sicherzustellen, dass der Text und das Abzeichen korrekt ausgerichtet sind, verwende ich die {{cssxref("justify-content")}}-Eigenschaft mit dem Wert `space-between`. Dadurch wird zusätzlicher Platz zwischen den Elementen eingefügt. Im Live-Beispiel sehen Sie, wenn Sie diese Eigenschaft entfernen, dass das Abzeichen zum Ende des Textes bei Elementen mit kürzerem Text als eine Zeile verschoben wird.

Um den Inhalt horizontal auszurichten, verwende ich die {{cssxref("align-items")}}-Eigenschaft, um den Text und das Abzeichen auf der Querachse auszurichten. Wenn Sie möchten, dass das Abzeichen an der Oberseite des Inhalts ausgerichtet ist, ändern Sie dies zu `align-items: flex-start`.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
