---
title: "Testen Sie Ihre Fähigkeiten: Die Kaskade"
slug: Learn_web_development/Core/Styling_basics/Cascade_tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie universelle Eigenschaftswerte für das [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie feststecken, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Steuern der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) betrachtet haben. Sie sollen eine Deklaration in einer neuen Regel schreiben, die die Hintergrundfarbe wieder auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Kaum sichtbare gelbe Links auf weißem Hintergrund.](mdn-cascade.png)

Versuchen Sie den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Eine mögliche Lösung sieht wie folgt aus:

```css
#outer #inner a {
  background-color: initial;
}
```

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Erstens, schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der den Hintergrund in powderblue ändert. In dieser Lösung wird dies durch den `id`-Selektor erreicht, der eine sehr hohe Spezifität hat.

Zweitens müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt `inherit` die Hintergrundfarbe auf die des übergeordneten Elements zurück.

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie Ihre Änderungen durch die Nutzung der [Reihenfolge der Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#order_of_cascade_layers) vornehmen. Bearbeiten Sie eine bestehende Deklaration, ohne die lightgreen-Deklaration zu berühren, indem Sie die Reihenfolge der Kaskadenschichten verwenden, um die Links rebeccapurple zu machen.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Kaum sichtbare gelbe Links auf weißem Hintergrund.](mdn-cascade.png)

Versuchen Sie den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Eine mögliche Lösung sieht wie folgt aus:

```css
@layer yellow, green, purple;
```

In dieser Aufgabe müssen Sie eine Sache tun: Ändern Sie die Reihenfolge der Priorität, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht enthalten ist, was diese Lösung zeigt.

Sie müssen sich daran erinnern, dass ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Wenn jedoch alle Stile innerhalb von Schichten sind — wie in dieser Aufgabe — haben Stile in später deklarierten Schichten Vorrang vor Stilen, die in früher deklarierten Schichten deklariert wurden. Das Verschieben der lila Schicht an das Ende bedeutet, dass sie Vorrang vor den grünen und gelben Schichten hat.

</details>

## Siehe auch

- [Grundlagen der CSS-Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
