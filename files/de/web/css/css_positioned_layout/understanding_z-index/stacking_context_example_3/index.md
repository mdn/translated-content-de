---
title: Beispiel für einen Stapelkontext 3
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

## Beschreibung

Dieses letzte Beispiel zeigt Probleme auf, die auftreten, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und `z-index`-Werte mithilfe von Klassenselektoren zugewiesen werden.

Nehmen wir als Beispiel ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. `div`-Elemente der zweiten und dritten Ebene erscheinen, wenn ein Benutzer über ihre Eltern fährt oder sie anklickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig per Skript generiert, sodass Stilregeln mit einem Klassenselektor anstelle des id-Selektors zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überlappen, kann das Verwalten der Stapelung zu einem Problem werden.

Das Menü der ersten Ebene ist nur relativ positioniert, sodass kein Stapelkontext erstellt wird.

Das Menü der zweiten Ebene ist absolut innerhalb des Elternelements positioniert. Um es über alle Menüs der ersten Ebene zu platzieren, wird die `z-index`-Eigenschaft verwendet. Das Problem ist, dass für jedes Menü der zweiten Ebene ein Stapelkontext erstellt wird und jedes Menü der dritten Ebene zum Kontext seines Elternteils gehört.

Ein Menü der dritten Ebene wird daher unter den folgenden Menüs der zweiten Ebene gestapelt, da alle Menüs der zweiten Ebene denselben `z-index`-Wert teilen und die Standardstapelregeln gelten.

Um die Situation besser zu verstehen, hier ist die Stapelkontexthierarchie (die drei Punkte "..." stellen eine mehrfache Wiederholung der vorherigen Zeile dar):

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

Dieses Problem kann vermieden werden, indem Überlappungen zwischen Menüs verschiedener Ebenen entfernt werden oder indem individuelle (und unterschiedliche) `z-index`-Werte zugewiesen werden, die durch den id-Selektor statt durch den Klassenselektor zugewiesen werden, oder indem die HTML-Hierarchie abgeflacht wird.

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

- [Stapelung ohne die `z-index` Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die angewendet werden, wenn `z-index` nicht verwendet wird.
- [Schwebende Elemente stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung umgegangen werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie man `z-index` verwendet, um die Standardstapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelkontext.
- [Beispiel für einen Stapelkontext 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Beispiel für einen Stapelkontext 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen

> [!NOTE]
> Das Beispielbild sieht falsch aus - mit der zweiten Ebene, die die Menüs der dritten Ebene überlappt -, weil Ebene 2 eine Opazität hat, die einen neuen Stapelkontext erstellt.
> Im Grunde ist diese ganze Beispielseite fehlerhaft und irreführend.
