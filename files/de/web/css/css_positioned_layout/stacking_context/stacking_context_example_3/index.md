---
title: Beispiel für Stapelkontext 3
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

## Beschreibung

Dieses Beispiel zeigt Probleme auf, die auftreten, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und `z-index`-Werte mit Klassenselektoren zugewiesen werden.

Das Beispiel hat ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. `div`-Elemente auf der zweiten und dritten Ebene erscheinen, wenn ein Benutzer über ihre Eltern schwebt oder klickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig skriptgeneriert, sodass Stilregeln mit einem Klassenselektor statt einem id-Selektor zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überlappen, könnte das Verwalten des Stapelns ein Problem werden.

Das Menü der ersten Ebene ist relativ positioniert, wodurch ein Stapelkontext entsteht.

Das Menü der zweiten Ebene ist innerhalb des Elternelements absolut positioniert. Um es über alle Menüs der ersten Ebene zu platzieren, wird die `z-index`-Eigenschaft verwendet. Das Problem ist, dass für jedes Menü der zweiten Ebene ein Stapelkontext erstellt wird und jedes Menü der dritten Ebene zum Kontext seines Elternteils gehört.

Ein Menü der dritten Ebene wird daher unter den folgenden Menüs der zweiten Ebene gestapelt, da alle Menüs der zweiten Ebene denselben `z-index`-Wert teilen und die Standardstapelregeln gelten.

Um die Situation besser zu verstehen, hier die Stapelkontext-Hierarchie (die drei Punkte "..." stehen für die mehrfache Wiederholung der vorherigen Zeile):

- Root-Stapelkontext
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

Dieses Problem kann vermieden werden, indem die Überlappung zwischen verschiedenen Menüebenen entfernt wird oder durch die Verwendung individueller (und unterschiedlicher) `z-index`-Werte, die durch den id-Selektor zugewiesen werden, anstatt Klassenselektor, oder durch das Abflachen der HTML-Hierarchie.

> [!NOTE]
> Im Quellcode sehen Sie, dass Menüs der zweiten und dritten Ebene aus mehreren `div`-Elementen bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

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
  font: 12px "Arial";
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

- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements): Wie schwebende Elemente mit dem Stapeln behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index): Wie `z-index` verwendet wird, um die Standardstapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context): Hinweise zum Stapelkontext.
- [Beispiel für Stapelkontext 1](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Beispiel für Stapelkontext 2](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
