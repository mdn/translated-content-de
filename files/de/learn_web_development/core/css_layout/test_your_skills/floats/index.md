---
title: "Testen Sie Ihre Fähigkeiten: Floats"
short-title: "Test: Floats"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Floats
l10n:
  sourceCommit: 143f7345a4276156679d816a153470fe1fc6f3f8
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Floats in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Floats) mit den {{CSSxRef("float")}} und {{CSSxRef("clear")}} Eigenschaften und Werten sowie anderen Methoden zum Klären von Floats verstehen. Sie werden drei kleine Aufgaben durchgehen, die verschiedene Elemente des gerade behandelten Materials verwenden.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Floats 1

Um diese Aufgabe abzuschließen, lassen Sie die zwei Elemente mit den Klassen `float1` und `float2` links bzw. rechts schweben. Der Text sollte dann zwischen den beiden Elementen erscheinen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("float1-start", "", "440px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___float1-start live-sample___float1-finish
<div class="box">
  <div class="float float1">One</div>
  <div class="float float2">Two</div>
  <p>The two boxes should float to either side of this text.</p>
</div>
```

```css live-sample___float1-start live-sample___float1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

* {
  box-sizing: border-box;
}

.box {
  padding: 0.5em;
}

.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: white;
  padding: 1em;
}

.float1 {
  /* Add styles here */
}

.float2 {
  /* Add styles here */
}
```

Das Layout sollte folgendermaßen aussehen, wenn die Aufgabe abgeschlossen ist:

{{EmbedLiveSample("float1-finish", "", "210px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie können `float` für beide Kästchen verwenden:

```css live-sample___float1-finish
.float1 {
  float: left;
}

.float2 {
  float: right;
}
```

</details>

## Floats 2

Um diese Aufgabe abzuschließen:

1. Lassen Sie das Element mit der Klasse `float` nach links schweben.
2. Aktualisieren Sie den Code so, dass die erste Textzeile neben diesem Element angezeigt wird, während die folgende Textzeile (die die Klasse `below` hat) darunter angezeigt wird.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("float2-start", "", "300px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___float2-start live-sample___float2-finish
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
  <p class="below">Make this sentence appear below the float.</p>
</div>
```

```css live-sample___float2-start live-sample___float2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

* {
  box-sizing: border-box;
}

.box {
  padding: 0.5em;
}

.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: white;
  padding: 1em;
}

.float {
  /* Add styles here */
}

.below {
  /* Add styles here */
}
```

Das fertige Layout sollte folgendermaßen aussehen:

{{EmbedLiveSample("float2-finish", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen das Element nach links fließen lassen und dann `clear: left` zur Klasse für den zweiten Absatz hinzufügen:

```css live-sample___float2-finish
.float {
  float: left;
}

.below {
  clear: left;
}
```

</details>

## Floats 3

In dieser Aufgabe haben wir ein schwebendes Element. Der Hintergrundkasten, der das Floatelement und den Text umgibt, erstreckt sich derzeit nicht unter das geschwebte Element.

Um diese Aufgabe abzuschließen, verwenden Sie die aktuellste Methode, um sicherzustellen, dass der Hintergrundkasten das Floatelement enthält und sich darunter erstreckt.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("float3-start", "", "220px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___float3-start live-sample___float3-finish
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
</div>
```

```css live-sample___float3-start live-sample___float3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

* {
  box-sizing: border-box;
}

.box {
  padding: 0.5em;
}

.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
  color: white;
}

.box {
  background-color: rebeccapurple;
  padding: 10px;
  color: white;
}

.float {
  float: right;
}

.box {
  /* Add styles here */
}
```

Wenn Sie die Aufgabe abgeschlossen haben, sollten der Hintergrundkasten und das Floatelement folgendermaßen aussehen:

{{EmbedLiveSample("float3-finish", "", "220px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Klären Sie den Kasten unter dem Floatelement, indem Sie `display: flow-root` zur Klasse für `.box` hinzufügen.
Andere Methoden könnten das Verwenden von `overflow` oder ein clearfix-Hack sein, jedoch beschreiben die Lernmaterialien die `flow-root` Methode als die moderne Möglichkeit, dies zu erreichen.

```css live-sample___float3-finish
.box {
  display: flow-root;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}
