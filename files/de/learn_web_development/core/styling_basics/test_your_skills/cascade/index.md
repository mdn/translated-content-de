---
title: "Testen Sie Ihr Können: Die Kaskade"
short-title: Cascade
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie die universellen Eigenschaftswerte für das [Kontrollieren der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den folgenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Kontrollieren der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) betrachtet haben. Schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe wieder auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Kaum sichtbare gelbe Links auf weißem Hintergrund.](mdn-cascade.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Eine mögliche Lösung ist wie folgt:

```css
#outer #inner a {
  background-color: inherit;
}
```

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Erstens, schreiben Sie einen Selektor für das `a` Element, der spezifischer ist als der Selektor, der den Hintergrund auf "powderblue" setzt. In dieser Lösung wird dies durch die Verwendung des `id` Selektors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt die Verwendung von `inherit` die Hintergrundfarbe zurück, um die gleiche wie das Elternelement zu sein.

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die Reihenfolge der Kaskadenschichten manipulieren, um die Links in `rebeccapurple` zu färben. Die `lightgreen` Deklaration darf nicht bearbeitet werden!

Diese Aufgabe ist ein Stretch-Goal — sie erfordert Kenntnisse über Kaskadenschichten, die wir nicht im Artikel [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) behandelt haben. Sie finden die Informationen, die Sie benötigen, um diese Aufgabe zu versuchen, unter [Kaskadenschichten > Bestimmen der Vorrangigkeit basierend auf der Reihenfolge der Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers).

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Kaum sichtbare gelbe Links auf weißem Hintergrund.](mdn-cascade.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Eine mögliche Lösung ist wie folgt:

```css
@layer yellow, green, purple;
```

Es gibt eine Sache, die Sie in dieser Aufgabe tun müssen: Ändern Sie die Reihenfolge der Reihenfolge, so dass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht ist, was diese Lösung zeigt.

Sie müssen sich merken, dass ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Aber wenn alle Stile in Schichten sind — wie in der Aufgabe — haben Stile in später deklarierten Schichten Vorrang vor Stilen, die in früheren Schichten deklariert wurden. Das Verschieben der violetten Schicht ans Ende bedeutet, dass sie Vorrang vor den grünen und gelben Schichten hat.

</details>

## Siehe auch

- [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
