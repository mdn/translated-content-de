---
title: Beispiel für einen Stapelkontext 3
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

## Beschreibung

Dieses Beispiel zeigt Probleme, die auftreten, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt und `z-index`-Werte mithilfe von Klassenselektoren zugewiesen werden.

Das Beispiel hat ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. Zweitstufige und drittstufige `div`-Elemente erscheinen, wenn ein Benutzer über ihre Eltern schwebt oder auf sie klickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig skriptgeneriert, sodass Stilregeln mit einem Klassenselektor anstelle des ID-Selektors zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überlappen, kann das Verwalten des Stapelns zu einem Problem werden.

Das erststufige Menü ist relativ positioniert und erstellt einen Stapelkontext.

Das zweitstufige Menü ist absolut innerhalb des Elternelements positioniert. Um es über alle erststufigen Menüs zu legen, wird die `z-index`-Eigenschaft verwendet. Das Problem ist, dass für jedes zweitstufige Menü ein Stapelkontext erstellt wird und jedes drittstufige Menü dem Kontext seines Elternteils angehört.

Also wird ein drittstufiges Menü unter den nachfolgenden zweitstufigen Menüs gestapelt, da alle zweitstufigen Menüs denselben `z-index`-Wert teilen und die Standard-Stapelregeln gelten.

Um die Situation besser zu verstehen, hier die Hierarchie des Stapelkontexts (die drei Punkte "..." stehen für mehrfache Wiederholung der vorhergehenden Zeile):

- Hauptstapelkontext

  - EBENE #1

    - EBENE #2 (`z-index`: 1)

      - EBENE #3
      - …
      - EBENE #3

    - EBENE #2 (`z-index`: 1)
    - …
    - EBENE #2 (`z-index`: 1)

  - EBENE #1
  - …
  - EBENE #1

Dieses Problem kann vermieden werden, indem das Überlappen zwischen verschiedenen Menüebenen entfernt wird, oder indem individuelle (und unterschiedliche) `z-index`-Werte zugewiesen durch den ID-Selektor anstelle des Klassenselektors verwendet werden, oder durch eine Abflachung der HTML-Hierarchie.

> [!NOTE]
> Im Quellcode werden Sie sehen, dass zweitstufige und drittstufige Menüs aus mehreren `div`-Elementen bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

## Beispiel

### HTML

```html
<div class="lev1">
  LEVEL #1

  <div id="container1">
    <div class="lev2">
      LEVEL #2 <br />z-index: 1;

      <div id="container2">
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
        <div class="lev3">LEVEL #3</div>
      </div>
    </div>

    <div class="lev2">LEVEL #2 <br />z-index: 1;</div>
    <div class="lev2">LEVEL #2 <br />z-index: 1;</div>
    <div class="lev2">LEVEL #2 <br />z-index: 1;</div>
  </div>
</div>

<div class="lev1">LEVEL #1</div>
<div class="lev1">LEVEL #1</div>
<div class="lev1">LEVEL #1</div>
```

### CSS

```css hidden
div {
  font: 12px Arial;
  font-weight: bold;
  padding-left: 5px;
}
.lev1 {
  border: 2px outset #669966;
  background-color: #ccffcc;
}
.lev2 {
  border: 2px outset #990000;
  background-color: #ffdddd;
}
.lev3 {
  border: 2px outset #000099;
  background-color: #ddddff;
}
```

```css
div {
  opacity: 0.9;
}
.lev1 {
  width: 250px;
  height: 70px;
  position: relative;
}

#container1 {
  z-index: 1;
  position: absolute;
  top: 30px;
  left: 75px;
}

.lev2 {
  width: 200px;
  height: 60px;
  position: relative;
}

#container2 {
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 110px;
}

.lev3 {
  z-index: 10;
  width: 100px;
  position: relative;
}
```

## Ergebnis

{{ EmbedLiveSample('Example', '320', '330') }}

## Siehe auch

- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelung von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Wie man `z-index` verwendet, um die Standardstapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Notizen zum Stapelkontext.
- [Beispiel für einen Stapelkontext 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Beispiel für einen Stapelkontext 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
