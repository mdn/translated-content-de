---
title: "Testen Sie Ihre Fähigkeiten: Die Cascade"
slug: Learn/CSS/Building_blocks/Cascade_tasks
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie universelle Eigenschaftswerte für [das Kontrollieren der Vererbung in CSS](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Code-Blöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte, die wir im Abschnitt über das [Kontrollieren der Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#controlling_inheritance) behandelt haben, verwenden. Schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Das Endergebnis sollte wie das untenstehende Bild aussehen:

![Kaum sichtbare gelbe Links auf einem weißen Hintergrund.](mdn-cascade.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___cascade
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade
#outer div ul .nav a {
  background-color: powderblue;
  padding: 5px;
  display: inline-block;
  margin-bottom: 10px;
}

div div li a {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("cascade")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu sehen</summary>

Eine mögliche Lösung ist wie folgt:

```css
#outer #inner a {
  background-color: initial;
}
```

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Erstens schreiben Sie einen Selektor für das `a` Element, der spezifischer ist als der Selektor, der den Hintergrund in powderblue ändert. In dieser Lösung wird dies durch die Verwendung des `id` Selektors erreicht, welcher eine sehr hohe Spezifität hat.

Dann müssen Sie daran denken, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt die Verwendung von `inherit` die Hintergrundfarbe zurück, so dass sie mit dem übergeordneten Element übereinstimmt.

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie Ihre Änderungen durch das Ausnutzen der [Reihenfolge der Cascade-Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#order_of_cascade_layers) vornehmen. Bearbeiten Sie eine bestehende Deklaration, ohne die lightgreen-Deklaration zu ändern, und verwenden Sie die Reihenfolge der Cascade-Schichten, um die Links rebeccapurple zu machen.

Das Endergebnis sollte wie das untenstehende Bild aussehen:

![Kaum sichtbare gelbe Links auf einem weißen Hintergrund.](mdn-cascade.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___cascade-layer
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade-layer
@layer yellow, purple, green;

@layer yellow {
  #outer div ul .nav a {
    padding: 5px;
    display: inline-block;
    margin-bottom: 10px;
  }
}
@layer purple {
  div div li a {
    color: rebeccapurple;
  }
}
@layer green {
  a {
    color: lightgreen;
  }
}
```

{{EmbedLiveSample("cascade-layer")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu sehen</summary>

Eine mögliche Lösung ist wie folgt:

```css
@layer yellow, green, purple;
```

Es gibt eine Sache, die Sie in dieser Aufgabe tun müssen: Ändern Sie die Reihenfolge der Priorität, so dass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht steht, wie es diese Lösung zeigt.

Sie müssen daran denken, dass nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Aber wenn alle Stile innerhalb von Schichten sind – wie in dieser Aufgabe – haben Stile in später deklarierten Schichten Vorrang vor Stilen in früher deklarierten Schichten. Das Verschieben der violetten Schicht ans Ende bedeutet, dass sie Vorrang vor den grünen und gelben Schichten hat.

</details>

## Siehe auch

- [CSS Bausteine](/de/docs/Learn/CSS/Building_blocks)
