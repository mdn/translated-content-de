---
title: Beispiel für Stacking-Kontext 3
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

## Beschreibung

Dieses letzte Beispiel zeigt Probleme, die auftreten, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und `z-index`-Werte mit Klassenselektoren zugewiesen werden.

Betrachten wir als Beispiel ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. Zweitstufige und drittstufige `div`-Elemente erscheinen, wenn ein Benutzer über ihre Eltern schwebt oder darauf klickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig skriptgeneriert, sodass Stilregeln mit einem Klassenselektor anstelle des ID-Selektors zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überlappen, könnte das Verwalten der Stapelreihenfolge problematisch werden.

Das Menü der ersten Stufe ist nur relativ positioniert, daher wird kein Stacking-Kontext erstellt.

Das Menü der zweiten Stufe ist innerhalb des übergeordneten Elements absolut positioniert. Um es über alle Menüs der ersten Stufe zu platzieren, wird die `z-index`-Eigenschaft verwendet. Das Problem ist, dass für jedes Menü der zweiten Stufe ein Stacking-Kontext erstellt wird und jedes Menü der dritten Stufe zum Kontext seines Elternteils gehört.

Ein Menü der dritten Stufe wird also unter den folgenden Menüs der zweiten Stufe gestapelt, da alle Menüs der zweiten Stufe denselben z-index-Wert teilen und die Standard-Stapelregeln gelten.

Um die Situation besser zu verstehen, hier die Stacking-Kontext-Hierarchie (die drei Punkte "..." stehen für die mehrfache Wiederholung der vorherigen Zeile):

- Wurzel-Stacking-Kontext

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

Dieses Problem kann vermieden werden, indem Überlappungen zwischen Menüs unterschiedlicher Ebenen entfernt, individuelle (und unterschiedliche) `z-index`-Werte durch den ID-Selektor zugewiesen oder die HTML-Hierarchie abgeflacht wird.

> [!NOTE]
> Im Quellcode sehen Sie, dass Menüs der zweiten und dritten Ebene aus mehreren `div`-Elementen bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

## Beispiel

### HTML

```html
<div class="lev1">
  <span class="bold">LEVEL #1</span>

  <div id="container1">
    <div class="lev2">
      <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;

      <div id="container2">
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
      </div>
    </div>

    <div class="lev2">
      <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
    </div>
    <div class="lev2">
      <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
    </div>
    <div class="lev2">
      <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
    </div>
  </div>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>
```

### CSS

```css
div {
  font: 12px Arial;
}

span.bold {
  font-weight: bold;
}

div.lev1 {
  width: 250px;
  height: 70px;
  position: relative;
  border: 2px outset #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#container1 {
  z-index: 1;
  position: absolute;
  top: 30px;
  left: 75px;
}

div.lev2 {
  opacity: 0.9;
  width: 200px;
  height: 60px;
  position: relative;
  border: 2px outset #990000;
  background-color: #ffdddd;
  padding-left: 5px;
}

#container2 {
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 110px;
}

div.lev3 {
  z-index: 10;
  width: 100px;
  position: relative;
  border: 2px outset #000099;
  background-color: #ddddff;
  padding-left: 5px;
}
```

## Ergebnis

{{ EmbedLiveSample('Example', '320', '330') }}

## Siehe auch

- [Stapelreihenfolge ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapeln von Flusselementen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie Flusselemente beim Stapeln behandelt werden.
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` verwendet wird, um die Standard-Stapelreihenfolge zu ändern.
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stacking-Kontor.
- [Beispiel für Stacking-Kontext 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Beispiel für Stacking-Kontext 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen

> [!NOTE]
> Das Beispielbild sieht falsch aus - mit dem zweiten Level 2, das die Level-3-Menüs überlappt - weil Level 2 eine Deckkraft hat, die einen neuen Stacking-Kontext erstellt.
> Im Grunde ist diese gesamte Beispielseite falsch und irreführend.
