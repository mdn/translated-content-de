---
title: "Testen Sie Ihre Fähigkeiten: Die Kaskade"
short-title: Cascade
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Fähigkeitentests ist es, Ihnen zu helfen zu beurteilen, ob Sie die universellen Eigenschaftswerte zum [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Verwendung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns aufnehmen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Steuern der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) betrachtet haben.

Um die Aufgabe abzuschließen, schreiben Sie eine Deklaration in eine neue Regel, die die Hintergrundfarbe wieder auf weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

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

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Erstens, schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der den Hintergrund auf powderblue stellt. In dieser Lösung wird dies durch die Verwendung des `id`-Selectors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt `inherit` die Hintergrundfarbe so, dass sie dieselbe wie die des übergeordneten Elements ist.

</details>

## Aufgabe 2

Um diese Aufgabe abzuschließen, manipulieren Sie die Reihenfolge der Kaskadenebenen, um die Links in `rebeccapurple` zu färben. Bearbeiten Sie nicht die `lightgreen`-Deklaration!

Diese Aufgabe ist ein Stretch-Ziel — sie erfordert Kenntnisse über Kaskadenebenen, die wir im Artikel [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) nicht behandelt haben. Sie finden die benötigten Informationen, um diese Aufgabe anzugehen, unter [Kaskadenebenen > Bestimmen der Vorrangstellung basierend auf der Reihenfolge der Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers).

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

Es gibt eine Sache, die Sie in dieser Aufgabe tun müssen: Ändern Sie die Reihenfolge der Vorrangstellung, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Ebene liegt, was diese Lösung zeigt.

Sie müssen sich daran erinnern, dass nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Wenn jedoch alle Stile innerhalb von Ebenen sind – wie in dieser Aufgabe – haben Stile in später deklarierten Ebenen Vorrang vor Stilen in früher deklarierten Ebenen. Das Verschieben der lila Ebene an das Ende bedeutet, dass sie Vorrang vor den grünen und gelben Ebenen hat.

</details>
