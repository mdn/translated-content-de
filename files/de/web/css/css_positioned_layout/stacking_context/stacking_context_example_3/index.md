---
title: Beispiel für einen Stapelkontext 3
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3
l10n:
  sourceCommit: ec0ac22d16171cb72b7391f4727d43c4ffcbee5b
---

{{CSSRef}}

## Beschreibung

Dieses Beispiel zeigt Probleme auf, die beim Mischen mehrerer positionierter Elemente in einer mehrstufigen HTML-Hierarchie auftreten können, insbesondere wenn `z-index`-Werte über Klassenselektoren zugewiesen werden.

Das Beispiel beinhaltet ein dreistufiges hierarchisches Menü, das aus mehreren positionierten `div`-Elementen besteht. Zweite und dritte Ebene der `div`-Elemente erscheinen, wenn ein Benutzer mit der Maus darüber fährt oder darauf klickt. Normalerweise wird eine solche Art von Menü entweder clientseitig oder serverseitig skriptgeneriert, daher werden Stilregeln mit einem Klassenselektor anstelle des ID-Selektors zugewiesen.

Wenn sich die drei Menüebenen teilweise überlappen, könnte das Stapeln problematisch werden.

Das Menü der ersten Ebene ist relativ positioniert und schafft damit einen Stapelkontext.

Das Menü der zweiten Ebene ist absolut innerhalb des Elternelements positioniert. Um es über alle Menüs der ersten Ebene zu setzen, wird die `z-index`-Eigenschaft verwendet. Das Problem ist, dass für jedes Menü der zweiten Ebene ein Stapelkontext erstellt wird und jedes Menü der dritten Ebene zum Kontext seines Elternteils gehört.

Daher wird ein Menü der dritten Ebene unter den folgenden Menüs der zweiten Ebene gestapelt, da alle Menüs der zweiten Ebene denselben `z-index`-Wert teilen und die Standard-Stapelregeln gelten.

Um die Situation besser zu verstehen, hier ist die Stapelkontext-Hierarchie (die drei Punkte "..." stehen für mehrfache Wiederholung der vorherigen Zeile):

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

Dieses Problem kann vermieden werden, indem die Überlappung zwischen verschiedenen Menüebenen entfernt wird, individuelle (und unterschiedliche) `z-index`-Werte über ID-Selektor statt Klassenselektor zugewiesen werden oder die HTML-Hierarchie abgeflacht wird.

> [!NOTE]
> Im Quellcode werden Sie sehen, dass Menüs der zweiten und dritten Ebene aus mehreren `div`-Elementen bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um alle auf einmal zu gruppieren und zu positionieren.

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
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung gehandhabt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Wie man `z-index` verwendet, um die Standard-Stapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Anmerkungen zum Stapelkontext.
- [Beispiel für einen Stapelkontext 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Beispiel für einen Stapelkontext 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
