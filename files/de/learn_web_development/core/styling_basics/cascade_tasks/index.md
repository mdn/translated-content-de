---
title: "Testen Sie Ihre Fähigkeiten: Die Kaskade"
slug: Learn_web_development/Core/Styling_basics/Cascade_tasks
l10n:
  sourceCommit: 5fcdc3bf55405b922199bd19f35245bd4bb9a971
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es, festzustellen, ob Sie die universellen Eigenschaftswerte für das [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Code-Blöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Steuern der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) behandelt haben. Schreiben Sie eine Anweisung in einer neuen Regel, die die Hintergrundfarbe wieder auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Ihr endgültiges Ergebnis sollte wie das untenstehende Bild aussehen:

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
  background-color: initial;
}
```

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Zuerst schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der den Hintergrund in Hellblau verwandelt. In dieser Lösung wurde dies durch die Verwendung des `id`-Selektors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt `inherit` die Hintergrundfarbe wieder zurück auf die des Elternelements.

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die Reihenfolge der Kaskadenschichten manipulieren, um die Links in `rebeccapurple` zu färben. Bearbeiten Sie nicht die `lightgreen`-Deklaration!

Diese Aufgabe ist ein erweitertes Ziel — sie erfordert Wissen über Kaskadenschichten, das wir im Artikel [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) nicht behandelt haben. Die benötigten Informationen finden Sie unter [Kaskadenschichten > Bestimmen der Vorrangstellung basierend auf der Reihenfolge der Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers).

Ihr endgültiges Ergebnis sollte wie das untenstehende Bild aussehen:

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

Sie müssen sich daran erinnern, dass nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Wenn jedoch alle Stile in Schichten sind — wie in diesem Fall — haben Stile in später deklarierten Schichten Vorrang vor vorher deklarierten Schichten. Wenn Sie die violette Schicht ans Ende verschieben, hat sie Vorrang vor den grünen und gelben Schichten.

</details>

## Siehe auch

- [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
