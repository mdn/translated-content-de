---
title: Listengruppe mit Abzeichen
slug: Web/CSS/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

In diesem Beispiel erstellen wir ein Listengruppenmuster mit Abzeichen, die eine Anzahl angeben.

![Eine Liste von Elementen mit einem Abzeichen, das eine Anzahl anzeigt, rechts neben dem Text.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollen mit den Abzeichen angezeigt werden. Das Abzeichen sollte rechtsbündig und vertikal zentriert sein. Das Abzeichen muss vertikal zentriert sein, egal ob es sich um eine einzelne Textzeile oder mehrere Textzeilen handelt.

## Rezept

Klicken Sie auf "Wiedergabe" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Flexbox macht dieses spezielle Muster einfach und erleichtert Änderungen am Layout.

Um sicherzustellen, dass der Text und das Abzeichen korrekt ausgerichtet sind, verwende ich die {{cssxref("justify-content")}}-Eigenschaft mit dem Wert `space-between`. Dies platziert jeden zusätzlichen Raum zwischen den Elementen. Im Live-Beispiel, wenn Sie diese Eigenschaft entfernen, werden Sie sehen, dass das Abzeichen an das Ende des Textes bei Elementen mit kürzerem Text als eine Zeile verschoben wird.

Um den Inhalt horizontal auszurichten, verwende ich die {{cssxref("align-items")}}-Eigenschaft, um Text und Abzeichen auf der Querachse auszurichten. Wenn Sie möchten, dass das Abzeichen am oberen Inhalt ausgerichtet wird, ändern Sie dies in `align-items: flex-start`.

## Siehe auch

- [Ausrichtung von Boxen in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
