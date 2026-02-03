---
title: "Testen Sie Ihr Können: Überlauf"
short-title: "Test: Überlauf"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Tests ist es, Ihnen zu helfen zu beurteilen, ob Sie [das Konzept des Überlaufs in CSS und dessen Verwaltung](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verstehen.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Anleitung zur Nutzung von Tests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Überlauf 1

In dieser Aufgabe überfließt der Inhalt das Kästchen, weil es eine feste Höhe hat.

Um die Aufgabe zu vervollständigen:

1. Aktualisieren Sie das CSS, damit die Höhe des Kästchens beibehalten wird und Scrollleisten nur dann erscheinen, wenn genug Text vorhanden ist, um einen Überlauf zu verursachen.
2. Testen Sie Ihre Lösung, indem Sie etwas Text aus dem HTML entfernen und prüfen, dass keine Scrollleiste erscheint, wenn nur wenig Text vorhanden ist.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("overflow1-start", "", "450px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___overflow1-start live-sample___overflow1-finish
<div class="box">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___overflow1-start live-sample___overflow1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
  border: 5px solid black;
  padding: 1em;
  height: 200px;
  width: 300px;
}
```

Die aktualisierte Gestaltung sollte folgendermaßen aussehen:

{{EmbedLiveSample("overflow1-finish", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `overflow: auto` hinzufügen, damit das Kästchen nur dann Scrollleisten erhält, wenn der Inhalt zu groß ist:

```css live-sample___overflow1-finish
.box {
  overflow: auto;
}
```

</details>

## Überlauf 2

In dieser Aufgabe befindet sich ein Bild im Kästchen, das größer ist als die Dimensionen des Kästchens, sodass es sichtbar überläuft. Aktualisieren Sie das CSS so, dass jedes Bild, das außerhalb des Kästchens liegt, verborgen wird.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("overflow2-start", "", "260px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___overflow2-start live-sample___overflow2-finish
<div class="box">
  <img
    alt="flowers"
    src="https://mdn.github.io/shared-assets/images/examples/flowers.jpg" />
</div>
```

```css live-sample___overflow2-start live-sample___overflow2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid black;
  height: 200px;
  width: 300px;
}
```

Die aktualisierte Gestaltung sollte folgendermaßen aussehen:

{{EmbedLiveSample("overflow2-finish", "", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `overflow: hidden` zum `.box` Selektor hinzufügen:

```css live-sample___overflow2-finish
.box {
  overflow: hidden;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}
