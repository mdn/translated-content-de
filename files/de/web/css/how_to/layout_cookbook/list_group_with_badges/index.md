---
title: Listengruppe mit Badges
slug: Web/CSS/How_to/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

In diesem Rezept erstellen wir ein Listengruppen-Muster mit Badges, die eine Anzahl anzeigen.

![Eine Liste von Elementen mit einem Badge, der eine Anzahl rechts neben dem Text anzeigt.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollten mit den Badges angezeigt werden. Das Badge sollte rechtsbündig und vertikal zentriert ausgerichtet sein. Das Badge muss vertikal zentriert sein, egal ob es eine einzelne Textzeile oder mehrere Textzeilen gibt.

## Rezept

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Flexbox macht dieses spezifische Muster unkompliziert und erleichtert auch Änderungen am Layout.

Um sicherzustellen, dass Text und Badge korrekt ausgerichtet sind, verwende ich die Eigenschaft {{cssxref("justify-content")}} mit dem Wert `space-between`. Dies platziert jeden zusätzlichen Abstand zwischen den Elementen. Im Live-Beispiel, wenn Sie diese Eigenschaft entfernen, werden Sie sehen, wie das Badge zum Ende des Textes auf den Elementen mit kürzerem Text als eine Zeile verschoben wird.

Um den Inhalt horizontal auszurichten, verwende ich die Eigenschaft {{cssxref("align-items")}}, um Text und Badge auf der Querachse auszurichten. Wenn Sie möchten, dass das Badge am oberen Rand des Inhalts ausgerichtet wird, ändern Sie dies zu `align-items: flex-start`.

## Siehe auch

- [Box-Alignment in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
