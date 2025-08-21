---
title: "Testen Sie Ihr Wissen: Die Kaskade"
short-title: "Test: Kaskade"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Tests ist es, Sie dabei zu unterstützen, zu beurteilen, ob Sie die universellen Eigenschaftswerte zum [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihres Wissens](/de/docs/Learn_web_development#test_your_skills). Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) mit uns Kontakt aufnehmen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Steuern der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) behandelt haben.

Um die Aufgabe abzuschließen, schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe ohne Nutzung eines tatsächlichen Farbwerts auf Weiß zurücksetzt.

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

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Zuerst schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der den Hintergrund auf powderblue setzt. In dieser Lösung wird dies durch die Verwendung des `id`-Selectors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt `inherit` die Hintergrundfarbe zurück, sodass sie die gleiche wie die des Elternelements ist.

</details>

## Aufgabe 2

Um diese Aufgabe zu lösen, manipulieren Sie die Reihenfolge der Kaskadenschichten, um die Links `rebeccapurple` zu färben. Bearbeiten Sie nicht die `lightgreen`-Deklaration!

Diese Aufgabe ist ein ehrgeiziges Ziel — sie erfordert Wissen über Kaskadenschichten, das wir im Artikel [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) nicht behandelt haben. Die notwendigen Informationen finden Sie unter [Kaskadenschichten > Bestimmen der Präzedenz basierend auf der Reihenfolge der Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers).

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

Es gibt eine Sache, die Sie in dieser Aufgabe tun müssen: Ändern Sie die Reihenfolge der Präzedenz, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht ist, wie in dieser Lösung gezeigt.

Sie müssen bedenken, dass unverlayerte normale Stile Vorrang vor verlayerte normalen Stilen haben. Wenn jedoch alle Stile innerhalb von Schichten sind — wie im Fall dieser Aufgabe — haben Stile in später deklarierten Schichten Vorrang vor Stilen in früher deklarierten Schichten. Das Verschieben der lila Schicht ans Ende bedeutet, dass sie Vorrang vor den grünen und gelben Schichten hat.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
