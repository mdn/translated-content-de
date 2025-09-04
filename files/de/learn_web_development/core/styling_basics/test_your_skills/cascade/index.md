---
title: "Testen Sie Ihre Fähigkeiten: Die Kaskade"
short-title: "Test: Kaskade"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: 5ed0891989972a0dbfdc5c1d95fa1d52a58395cb
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen zu beurteilen, ob Sie universelle Eigenschaftswerte für das [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Verwendung von „Testen Sie Ihre Fähigkeiten“](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt über das [Steuern der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) betrachtet haben.

Um die Aufgabe abzuschließen, schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Kaum sichtbare gelbe Links auf einem weißen Hintergrund.](mdn-cascade.png)

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

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Zuerst schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der verwendet wurde, um den Hintergrund auf powderblue zu setzen. In dieser Lösung wurde dies durch die Verwendung des `id`-Selektors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt die Verwendung von `inherit` die Hintergrundfarbe zurück auf die gleiche wie das Elternelement.

</details>

## Aufgabe 2

Um diese Aufgabe abzuschließen, manipulieren Sie die Reihenfolge der Kaskadenschichten, um die Links in `rebeccapurple` zu färben. Bearbeiten Sie nicht die `lightgreen`-Deklaration!

Diese Aufgabe ist ein Stretch-Ziel — sie erfordert Kenntnisse über Kaskadenschichten, die wir im Artikel [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) nicht behandelt haben. Die Informationen, die Sie benötigen, um diese Aufgabe zu versuchen, finden Sie bei [Kaskadenschichten > Festlegung der Priorität basierend auf der Reihenfolge der Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers).

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Kaum sichtbare gelbe Links auf einem weißen Hintergrund.](mdn-cascade.png)

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

In dieser Aufgabe gibt es eine Sache, die Sie tun müssen: Ändern Sie die Reihenfolge der Prioritäten, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht ist, was diese Lösung zeigt.

Sie müssen sich daran erinnern, dass ungelayerte normale Stile Vorrang vor gelayerten normalen Stilen haben. Aber wenn alle Stile sich innerhalb von Schichten befinden — wie bei dieser Aufgabe —, haben Stile in später deklarierten Schichten Vorrang vor Stilen, die in früheren Schichten deklariert wurden. Wenn Sie die violette Schicht ans Ende verschieben, erhält sie Vorrang vor den grünen und gelben Schichten.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}
