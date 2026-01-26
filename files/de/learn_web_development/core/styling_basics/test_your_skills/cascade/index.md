---
title: "Testen Sie Ihre Fähigkeiten: Die Kaskade"
short-title: "Test: Kaskade"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: d0be159e6119ff73453bea6d224f0a2056307aa4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen zu beurteilen, ob Sie universelle Eigenschaftswerte für das [Steuern der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Vererbung steuern](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) betrachtet haben.

Um die Aufgabe abzuschließen, schreiben Sie eine Deklaration in eine neue Regel, die die Hintergrundfarbe ohne Verwendung eines tatsächlichen Farbwerts auf Weiß zurücksetzt.

Ihr Endergebnis sollte wie folgt aussehen:

{{EmbedLiveSample("cascade1-finish", "100%", "110px")}}

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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("cascade1-start", "100%", "110px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Eine mögliche Lösung ist wie folgt:

```css live-sample___cascade1-finish
#outer #inner a {
  background-color: inherit;
}
```

Es gibt zwei Dinge, die Sie in dieser Aufgabe tun müssen. Erstens, schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der den Hintergrund auf Puderblau ändert. In dieser Lösung wird dies durch die Verwendung des `id`-Selektors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie sich daran erinnern, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt `inherit` die Hintergrundfarbe zurück, um mit der des übergeordneten Elements übereinzustimmen.

</details>

## Aufgabe 2

Um diese Aufgabe abzuschließen, manipulieren Sie die Reihenfolge der Kaskadenschichten, um die Links in `rebeccapurple` zu färben. Bearbeiten Sie nicht die `lightgreen` Deklaration!

Diese Aufgabe ist ein erweitertes Ziel – sie erfordert Wissen über Kaskadenschichten, das wir nicht im Artikel [Handling conflicts](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) behandelt haben. Die notwendigen Informationen finden Sie unter [Kaskadenschichten > Festlegen der Priorität basierend auf der Reihenfolge der Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers).

Ihr Endergebnis sollte wie folgt aussehen:

{{EmbedLiveSample("cascade2-finish", "100%", "110px")}}

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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("cascade2-start", "100%", "110px")}}

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

Es gibt eine Sache, die Sie in dieser Aufgabe tun müssen: die Reihenfolge der Priorität ändern, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht liegt, was diese Lösung zeigt.

Sie müssen sich daran erinnern, dass nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben. Aber wenn alle Stile innerhalb von Schichten sind – wie in dieser Aufgabe – haben Stile in später deklarierten Schichten Vorrang vor Stilen, die in früher deklarierten Schichten deklariert sind. Die Verschiebung der lila Schicht ans Ende bedeutet, dass sie Vorrang vor den grünen und gelben Schichten hat.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}
