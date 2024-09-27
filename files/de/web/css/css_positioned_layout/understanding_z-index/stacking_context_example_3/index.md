---
title: Stacking context example 3
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

## Beschreibung

Dieses letzte Beispiel zeigt Probleme auf, die auftreten können, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und `z-index` Werte mithilfe von Klassenselektoren zugewiesen werden.

Nehmen wir zum Beispiel ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. Zweistufige und dreistufige `div`-Elemente erscheinen, wenn ein Benutzer auf ihre Eltern schwebt oder klickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig skriptgesteuert erstellt, sodass Stilregeln mit einem Klassenselektor anstelle des ID-Selektors zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überschneiden, könnte die Verwaltung der Stapelung problematisch werden.

Das erste Menü ist nur relativ positioniert, sodass kein Stapelkontext erstellt wird.

Das zweite Menü ist im übergeordneten Element absolut positioniert. Um es über alle Menüs der ersten Ebene zu setzen, wird die `z-index`-Eigenschaft verwendet. Das Problem dabei ist, dass für jedes Menü der zweiten Ebene ein Stapelkontext erstellt wird und jedes Menü der dritten Ebene zum Kontext seines Elternteils gehört.

Daher wird ein Menü der dritten Ebene unter den nachfolgenden Menüs der zweiten Ebene gestapelt, da alle Menüs der zweiten Ebene denselben `z-index`-Wert teilen und die Standard-Stapelungsregeln gelten.

Um die Situation besser zu verstehen, hier ist die Hierarchie des Stapelkontextes (die drei Punkte "..." stehen für mehrfache Wiederholung der vorherigen Zeile):

- Wurzel-Stapelkontext

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

Dieses Problem kann vermieden werden, indem Überlappungen zwischen Menüs verschiedener Ebenen entfernt, individuelle (und unterschiedliche) `z-index`-Werte durch den ID-Selektor anstelle des Klassenselektors zugewiesen oder die HTML-Hierarchie abgeflacht wird.

> [!NOTE]
> Im Quellcode werden Sie sehen, dass zweistufige und dreistufige Menüs aus mehreren `div`-Elementen bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

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

- [Stapelung ohne die z-index-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` verwendet wird, um die Standard-Stapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelkontext.
- [Stacking context example 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Stacking context example 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen

> [!NOTE]
> Das Beispielbild sieht falsch aus - mit der zweiten Ebene 2, die die Ebene 3 Menüs überlappt -, weil Ebene 2 Opazität hat, was einen neuen Stapelkontext erstellt.
> Im Wesentlichen ist diese gesamte Beispielseite inkorrekt und irreführend.
