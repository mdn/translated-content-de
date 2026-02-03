---
title: "Testen Sie Ihre Fähigkeiten: Das Kaskadenprinzip"
short-title: "Test: Kaskade"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeiten-Tests ist es, Ihnen zu helfen, einzuschätzen, ob Sie universelle Eigenschaftswerte für [Steuerung der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können auch einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) nutzen, um uns zu erreichen.

## Kaskade 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt zur [Steuerung der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) betrachtet haben.

Um die Aufgabe abzuschließen, schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe wieder auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("cascade1-start", "100%", "110px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___cascade1-start live-sample___cascade1-finish
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade1-start live-sample___cascade1-finish
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

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("cascade1-finish", "100%", "110px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Eine mögliche Lösung ist wie folgt:

```css live-sample___cascade1-finish
#outer #inner a {
  background-color: inherit;
}
```

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Zuerst schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der den Hintergrund powderblue macht. In dieser Lösung wird dies durch die Verwendung des `id`-Selektors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt `inherit` die Hintergrundfarbe zurück, sodass sie mit dem Elternelement übereinstimmt.

</details>

## Kaskade 2

Um diese Aufgabe abzuschließen, manipulieren Sie die Reihenfolge der Kaskadenschichten, um die Links `rebeccapurple` zu färben. Bearbeiten Sie nicht die `lightgreen` Deklaration!

Diese Aufgabe ist ein Stretch-Goal — sie erfordert Kenntnisse über Kaskadenschichten, die wir im Artikel [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) nicht behandelt haben. Sie können die benötigten Informationen in [Kaskadenschichten > Bestimmung der Vorrangregelung basierend auf der Reihenfolge der Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers) finden.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("cascade2-start", "100%", "110px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___cascade2-start live-sample___cascade2-finish
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade2-start
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

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("cascade2-finish", "100%", "110px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Eine mögliche Lösung ist wie folgt:

```css live-sample___cascade2-finish
@layer yellow, green, purple;
```

```css hidden live-sample___cascade2-finish
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

Es gibt eine Sache, die Sie in dieser Aufgabe tun müssen: Ändern Sie die Reihenfolge der Vorrangregelung, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht erscheint, was diese Lösung zeigt.

Sie müssen sich daran erinnern, dass nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Aber wenn alle Stile innerhalb von Schichten sind — wie bei dieser Aufgabe — haben Stile in später deklarierten Schichten Vorrang vor Stilen, die in früher deklarierten Schichten deklariert wurden. Wenn die violette Schicht am Ende platziert wird, erhält sie Vorrang vor den grünen und gelben Schichten.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}
