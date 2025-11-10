---
title: Beispiel für Stacking-Kontext 3
short-title: Beispiel 3
slug: Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

## Beschreibung

Dieses Beispiel zeigt Probleme auf, die auftreten können, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und `z-index`-Werte über Klassenselektoren zugewiesen werden.

Das Beispiel enthält ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. Zweite und dritte Ebene `div`-Elemente erscheinen, wenn ein Benutzer mit der Maus darüber fährt oder auf ihre Eltern klickt. In der Regel wird diese Art von Menü entweder clientseitig oder serverseitig durch ein Script generiert, sodass Stilregeln mit einem Klassenselektor statt mit einem ID-Selektor zugewiesen werden.

Wenn sich die drei Menüebenen teilweise überlappen, kann das Verwalten der Stapelung problematisch werden.

Das Menü der ersten Ebene ist relativ positioniert und schafft einen Stacking-Kontext.

Das Menü der zweiten Ebene ist absolut innerhalb des Elternelements positioniert. Um es über allen Menüs der ersten Ebene zu platzieren, wird die `z-index`-Eigenschaft verwendet. Das Problem besteht darin, dass für jedes Menü der zweiten Ebene ein Stacking-Kontext erstellt wird und jedes Menü der dritten Ebene dem Kontext seines Elternteils gehört.

Ein Menü der dritten Ebene wird also unter den folgenden Menüs der zweiten Ebene gestapelt, weil alle Menüs der zweiten Ebene denselben `z-index`-Wert haben und die Standard-Stapelregeln gelten.

Um die Situation besser zu verstehen, hier die Hierarchie des Stacking-Kontexts (die drei Punkte "..." stellen eine mehrfache Wiederholung der vorherigen Zeile dar):

- Root Stacking-Kontext
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

Dieses Problem kann vermieden werden, indem Überlappungen zwischen Menüs verschiedener Ebenen entfernt werden, oder indem einzelne (und unterschiedliche) `z-index`-Werte durch den ID-Selektor statt durch den Klassenselektor zugewiesen werden, oder indem die HTML-Hierarchie abgeflacht wird.

> [!NOTE]
> Im Quellcode werden Sie sehen, dass Menüs der zweiten Ebene und Menüs der dritten Ebene aus mehreren `div`-Elementen bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

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

- [Stacking ohne die Eigenschaft `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements): Wie schwebende Elemente mit Stapeln gehandhabt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index): Wie man `z-index` verwendet, um die Standard-Stapelung zu ändern.
- [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context): Anmerkungen zum Stacking-Kontext.
- [Beispiel für Stacking-Kontext 1](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Beispiel für Stacking-Kontext 2](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
