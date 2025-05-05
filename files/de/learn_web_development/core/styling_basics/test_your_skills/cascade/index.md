---
title: "Testen Sie Ihre Fähigkeiten: Der Kaskade"
short-title: Cascade
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: e632b14fd430eac85406827dd5412630cf545e8b
---

Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie universelle Eigenschaftswerte zum [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und ihn in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, den wir im Abschnitt [Steuern der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) besprochen haben. Schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe wieder auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Kaum sichtbare gelbe Links auf einem weißen Hintergrund.](mdn-cascade.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Zuerst schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der den Hintergrund powderblue färbt. In dieser Lösung wird dies durch die Verwendung des `id`-Selectors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie daran denken, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt `inherit` die Hintergrundfarbe auf die gleiche wie das übergeordnete Element zurück.

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die Reihenfolge der Kaskadenschichten manipulieren, um die Links `rebeccapurple` zu färben. Bearbeiten Sie nicht die `lightgreen`-Deklaration!

Diese Aufgabe ist ein Stretch-Ziel — sie erfordert Wissen über Kaskadenschichten, das wir im Artikel [Handling conflicts](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) nicht behandelt haben. Sie finden die benötigten Informationen unter [Cascade layers > Determining the precedence based on the order of layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers).

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Kaum sichtbare gelbe Links auf einem weißen Hintergrund.](mdn-cascade.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Es gibt eine Sache, die Sie in dieser Aufgabe tun müssen: Ändern Sie die Reihenfolge der Priorität, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht ist, was diese Lösung zeigt.

Sie müssen daran denken, dass nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Aber wenn alle Stile in Schichten sind — wie in dieser Aufgabe — haben Stile in später deklarierten Schichten Vorrang vor Stilen, die in früheren Schichten deklariert wurden. Das Verschieben der violetten Schicht ans Ende bedeutet, dass sie Vorrang vor den grünen und gelben Schichten hat.

</details>

## Siehe auch

- [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
