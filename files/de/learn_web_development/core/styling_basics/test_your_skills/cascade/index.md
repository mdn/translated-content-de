---
title: "Testen Sie Ihre Fähigkeiten: Die Kaskade"
short-title: "Test: Kaskade"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: 1380f007c100ceb8d9f6f9d0f9baccaab81a8eae
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen zu beurteilen, ob Sie die universellen Eigenschaftswerte zum [Kontrollieren der Vererbung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden für den Gebrauch. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einen der speziellen Werte verwenden, die wir im Abschnitt [Kontrollieren der Vererbung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#controlling_inheritance) betrachtet haben.

Um die Aufgabe abzuschließen, schreiben Sie eine Deklaration in einer neuen Regel, die die Hintergrundfarbe wieder auf Weiß zurücksetzt, ohne einen tatsächlichen Farbwert zu verwenden.

Ihr Endergebnis sollte wie folgt aussehen:

{{EmbedLiveSample("cascade1-finish")}}

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("cascade1-start")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Eine mögliche Lösung ist wie folgt:

```css live-sample___cascade1-finish
#outer #inner a {
  background-color: inherit;
}
```

In dieser Aufgabe müssen Sie zwei Dinge tun. Erstens, schreiben Sie einen Selektor für das `a`-Element, der spezifischer ist als der Selektor, der den Hintergrund zu Powderblue verändert. In dieser Lösung wird dies durch die Verwendung des `id`-Selectors erreicht, der eine sehr hohe Spezifität hat.

Dann müssen Sie daran denken, dass es spezielle Schlüsselwortwerte für alle Eigenschaften gibt. In diesem Fall setzt die Verwendung von `inherit` die Hintergrundfarbe zurück, sodass sie dieselbe ist wie bei ihrem Elternelement.

</details>

## Aufgabe 2

Um diese Aufgabe abzuschließen, ändern Sie die Reihenfolge der Kaskadenschicht, um die Links in `rebeccapurple` zu färben. Die `lightgreen`-Deklaration darf nicht bearbeitet werden!

Diese Aufgabe ist ein ehrgeiziges Ziel — es erfordert Wissen über Kaskadenschichten, das wir im Artikel [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) nicht behandelt haben. Sie können die benötigten Informationen im Abschnitt [Kaskadenschichten > Bestimmen der Vorrangstellung basierend auf der Reihenfolge der Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#determining_the_precedence_based_on_the_order_of_layers) finden.

Ihr Endergebnis sollte wie folgt aussehen:

{{EmbedLiveSample("cascade2-finish")}}

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("cascade2-start")}}

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

Es gibt eine Sache, die Sie in dieser Aufgabe tun müssen: Ändern Sie die Reihenfolge der Priorität, sodass die Deklaration für die gewünschte Farbe in der zuletzt deklarierten Schicht liegt, was diese Lösung zeigt.

Sie müssen daran denken, dass ungelayerte normale Stile Vorrang vor gelayerten normalen Stilen haben. Aber wenn alle Stile innerhalb von Schichten sind — wie in dieser Aufgabe — haben Stile in später deklarierten Schichten Vorrang vor Stilen, die in früheren Schichten deklariert sind. Wenn die lila Schicht an das Ende verschoben wird, hat sie Vorrang vor den grünen und gelben Schichten.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}
