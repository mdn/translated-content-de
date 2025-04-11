---
title: "Prüfen Sie Ihre Fähigkeiten: Die Kaskade"
short-title: Cascade
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Ziel dieses Fertigkeitstests ist es zu beurteilen, ob Sie die universellen Eigenschaftswerte zum [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Klicken Sie unten in den Codeblöcken auf **„Abspielen“**, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Steuern der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) betrachtet haben. Schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe wieder auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Ihr Endergebnis sollte wie im Bild unten aussehen:

![Kaum sichtbare gelbe Links auf weißem Hintergrund.](mdn-cascade.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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
  background-color: initial;
}
```

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Erstens, schreiben Sie einen Selektor für das `a`-Element, der spezieller ist als der Selektor, der den Hintergrund powderblue färbt. In dieser Lösung wird dies durch die Verwendung des `id`-Selektors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt die Verwendung von `inherit` die Hintergrundfarbe auf die gleiche wie das übergeordnete Element zurück.

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die Reihenfolge der Kaskadenschichten manipulieren, um die Links in `rebeccapurple` zu färben. Die `lightgreen`-Deklaration darf nicht bearbeitet werden!

Diese Aufgabe ist ein erweitertes Ziel – sie erfordert Kenntnisse über Kaskadenschichten, die wir nicht im Artikel [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) behandelt haben. Sie können die benötigten Informationen unter [Kaskadenschichten > Bestimmung der Vorrangordnung basierend auf der Reihenfolge der Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers) finden.

Ihr Endergebnis sollte wie im Bild unten aussehen:

![Kaum sichtbare gelbe Links auf weißem Hintergrund.](mdn-cascade.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

In dieser Aufgabe müssen Sie eine Sache tun: die Vorrangordnung so ändern, dass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht ist, was diese Lösung zeigt.

Sie müssen sich daran erinnern, dass nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Wenn jedoch alle Stile innerhalb von Schichten sind – wie in dieser Aufgabe – haben Stile in später deklarierten Schichten Vorrang vor Stilen in früher deklarierten Schichten. Das Verschieben der lila Schicht an das Ende bedeutet, dass sie Vorrang vor den grünen und gelben Schichten hat.

</details>

## Siehe auch

- [Grundlagen der CSS-Formatierung](/de/docs/Learn_web_development/Core/Styling_basics)
