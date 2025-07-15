---
title: Beispiel für Stacking-Kontext 3
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

## Beschreibung

Dieses Beispiel zeigt Probleme, die auftreten, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und wenn `z-index`-Werte mit Klassenselektoren zugewiesen werden.

Das Beispiel hat ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. Zweitrangige und drittrangige `div`-Elemente erscheinen, wenn ein Benutzer mit der Maus über ihre Eltern fährt oder darauf klickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig skriptgeneriert, sodass Stilregeln mit einem Klassenselektor statt mit einem ID-Selektor zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überlappen, könnte die Verwaltung des Stapelings zum Problem werden.

Das erstklassige Menü ist relativ positioniert und erstellt einen Stapelkontext.

Das zweitrangige Menü ist absolut innerhalb des Elternelements positioniert. Um es über allen erstklassigen Menüs zu platzieren, wird die `z-index`-Eigenschaft verwendet. Das Problem ist, dass für jedes zweitrangige Menü ein Stapelkontext erstellt wird und jedes drittrangige Menü dem Kontext seines Elternteils angehört.

Ein drittrangiges Menü wird also unterhalb der folgenden zweitrangigen Menüs gestapelt, da alle zweitrangigen Menüs denselben `z-index`-Wert teilen und die Standardstapelregeln gelten.

Um die Situation besser zu verstehen, hier ist die Stapelkontext-Hierarchie (die drei Punkte "..." stehen für mehrfache Wiederholung der vorherigen Zeile):

- Root-Stapelkontext
  - LEVEL #1
    - LEVEL #2 (`z-index`: 1)
      - LEVEL #3
      - …
      - LEVEL #3

    - LEVEL #2 (`z-index`: 1)
    - …
    - LEVEL #2 (`z-index`: 1)

  - LEVEL #1
  - …
  - LEVEL #1

Dieses Problem kann vermieden werden, indem die Überlappung zwischen Menüs verschiedener Ebenen entfernt wird, oder indem einzelne (und unterschiedliche) `z-index`-Werte zugewiesen werden, die über den ID-Selektor anstatt des Klassenselektors zugewiesen werden, oder durch Abflachung der HTML-Hierarchie.

> [!NOTE]
> Im Quellcode werden Sie sehen, dass zweitrangige und drittrangige Menüs aus mehreren `div`-Elementen bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

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

- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelung von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Wie man `z-index` verwendet, um die Standardstapelung zu ändern.
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Hinweise zum Stapelkontext.
- [Beispiel für Stacking-Kontext 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Beispiel für Stacking-Kontext 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
