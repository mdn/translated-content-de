---
title: "Testen Sie Ihre Fähigkeiten: Die Kaskade"
short-title: Cascade
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: ad05d59f31af097f555a7d6de2728e6fd2a11e4a
---

Das Ziel dieses Fähigkeitstests ist festzustellen, ob Sie universelle Eigenschaftswerte zum [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Klicken Sie auf **„Play“** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Klemmbrett-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Vererbung steuern](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) behandelt haben. Schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe wieder auf weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Kaum sichtbare gelbe Links auf einem weißen Hintergrund.](mdn-cascade.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Erstens, schreiben Sie einen Selektor für das `a`-Element, das spezifischer ist als der Selektor, der den Hintergrund in Puderblau ändert. In dieser Lösung wird dies durch die Verwendung des `id`-Selectors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall wird durch die Verwendung von `inherit` die Hintergrundfarbe wieder auf die gleiche wie das Elternelement gesetzt.

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die Reihenfolge der Kaskadenebenen manipulieren, um die Links in `rebeccapurple` zu färben. Bearbeiten Sie nicht die `lightgreen`-Deklaration!

Diese Aufgabe ist ein ehrgeiziges Ziel — sie erfordert Kenntnisse über Kaskadenebenen, die wir im Artikel [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) nicht behandelt haben. Sie finden die benötigten Informationen, um diese Aufgabe zu versuchen, unter [Kaskadenebenen > Ermitteln der Vorrangigkeit basierend auf der Reihenfolge der Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers).

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Kaum sichtbare gelbe Links auf einem weißen Hintergrund.](mdn-cascade.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

In dieser Aufgabe müssen Sie die Reihenfolge des Vorrangs ändern, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Ebene liegt, was diese Lösung zeigt.

Sie müssen sich daran erinnern, dass unlagerte normale Stile Vorrang vor gelagerten normalen Stilen haben. Aber wenn alle Stile innerhalb von Ebenen sind — wie im Fall dieser Aufgabe — haben Stile in später deklarierten Ebenen Vorrang vor Stilen, die in früheren Ebenen deklariert wurden. Das Verschieben der lila Ebene an das Ende bedeutet, dass sie Vorrang vor den grünen und gelben Ebenen hat.

</details>

## Siehe auch

- [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
