---
title: Beispiel für Stack-Kontext 3
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

## Beschreibung

Dieses letzte Beispiel zeigt Probleme, die auftreten, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und wenn `z-index`-Werte mit Klassenselektoren zugewiesen werden.

Betrachten wir als Beispiel ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. Zweite und dritte Ebenen `div`-Elemente erscheinen, wenn ein Benutzer über ihre übergeordneten Ebenen fährt oder auf sie klickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig generiert, sodass Stilregeln mit einem Klassenselektor statt mit einem ID-Selektor zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überlappen, könnte das Verwalten des Stapelns ein Problem darstellen.

Das Menü der ersten Ebene ist nur relativ positioniert und erzeugt daher keinen Stack-Kontext.

Das Menü der zweiten Ebene ist absolut im übergeordneten Element positioniert. Um es über allen Menüs der ersten Ebene zu platzieren, wird die `z-index`-Eigenschaft verwendet. Das Problem ist, dass für jedes Menü der zweiten Ebene ein Stack-Kontext erstellt wird und jedes Menü der dritten Ebene zum Kontext seines Elternteils gehört.

So wird ein Menü der dritten Ebene unter den folgenden Menüs der zweiten Ebene gestapelt, da alle Menüs der zweiten Ebene denselben z-index-Wert teilen und die standardmäßigen Stapelregeln gelten.

Um die Situation besser zu verstehen, hier die Hierarchie des Stack-Kontexts (die drei Punkte "..." stehen für mehrfache Wiederholung der vorherigen Zeile):

- Root-Stack-Kontext

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

Dieses Problem kann vermieden werden, indem Überlappungen zwischen verschiedenen Menüebenen entfernt werden, individuelle (und unterschiedliche) z-index-Werte durch den ID-Selektor statt durch Klassenselektor zugewiesen werden oder indem die HTML-Hierarchie abgeflacht wird.

> [!NOTE]
> Im Quellcode werden Sie sehen, dass Menüs der zweiten Ebene und dritte Ebene aus mehreren `div`-Elementen bestehen, die sich in einem absolut positionierten Container befinden. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

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

- [Stapelung ohne die z-index Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelung von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): So werden schwebende Elemente bei der Stapelung behandelt.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): So verwenden Sie `z-index`, um die Standardstapelung zu ändern.
- [Stack-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stack-Kontext.
- [Stack-Kontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-Ebenen-HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Stack-Kontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen

> [!NOTE]
> Das Beispielbild sieht falsch aus - mit dem zweiten Level 2, das die Level 3 Menüs überlappt - weil Level 2 eine Opazität hat, die einen neuen Stack-Kontext erstellt. Grundsätzlich ist die gesamte Beispielseite falsch und irreführend.
