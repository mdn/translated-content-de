---
title: Stapelkontext-Beispiel 3
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

## Beschreibung

Dieses letzte Beispiel zeigt Probleme auf, die auftreten, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und wenn `z-index`-Werte mittels Klassenselektoren zugewiesen werden.

Nehmen wir als Beispiel ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. Zweitstufige und drittstufige `div`-Elemente erscheinen, wenn ein Benutzer über ihre Eltern schwebt oder darauf klickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig skriptbasiert erzeugt, sodass Stilregeln mit einem Klassenselektor anstatt des ID-Selektors zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überlappen, kann das Verwalten der Stapelung problematisch werden.

Das Menü der ersten Ebene ist nur relativ positioniert, sodass kein Stapelkontext erstellt wird.

Das Menü der zweiten Ebene ist innerhalb des Elternelements absolut positioniert. Um es über alle Menüelemente der ersten Ebene zu setzen, wird die `z-index`-Eigenschaft verwendet. Das Problem ist, dass für jedes Menü der zweiten Ebene ein Stapelkontext erstellt wird und jedes Menü der dritten Ebene zum Kontext seines Elternteils gehört.

Ein Menü der dritten Ebene wird daher unter den folgenden Menüs der zweiten Ebene gestapelt, da alle Menüs der zweiten Ebene denselben `z-index`-Wert teilen und die Standard-Stapelregeln gelten.

Um die Situation besser zu verstehen, hier die Stapelkontext-Hierarchie (die drei Punkte "..." stehen für eine mehrfache Wiederholung der vorherigen Zeile):

- Root-Stapelkontext

  - Ebene #1

    - Ebene #2 (`z-index`: 1)

      - Ebene #3
      - …
      - Ebene #3

    - Ebene #2 (`z-index`: 1)
    - …
    - Ebene #2 (`z-index`: 1)

  - Ebene #1
  - …
  - Ebene #1

Dieses Problem kann vermieden werden, indem Überlappungen zwischen den verschiedenen Menüebenen entfernt oder individuelle (und unterschiedliche) `z-index`-Werte über den ID-Selektor anstatt eines Klassenselektors zugewiesen oder die HTML-Hierarchie abgeflacht wird.

> [!NOTE]
> Im Quellcode werden Sie sehen, dass Menüs der zweiten und dritten Ebene aus mehreren `div`-Elementen bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

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

- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Wie man `z-index` verwendet, um die standardmäßige Stapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Anmerkungen zum Stapelkontext.
- [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Stapelkontext-Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen

> [!NOTE]
> Das Beispielbild sieht falsch aus - mit der zweiten Ebene 2, die sich über die Menüs der Ebene 3 überlappt - weil Ebene 2 eine Opazität hat, die einen neuen Stapelkontext erstellt.
> Im Grunde ist diese ganze Beispielseite falsch und irreführend.
