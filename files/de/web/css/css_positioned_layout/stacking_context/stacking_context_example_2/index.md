---
title: Beispiel für Stacking-Context 2
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

## Beschreibung

Dies ist ein einfaches Beispiel, aber es ist der Schlüssel, um das Konzept des _Stacking-Contexts_ zu verstehen. Es gibt dieselben vier DIVs wie im vorherigen Beispiel, aber nun sind `z-index`-Eigenschaften auf beiden Ebenen der Hierarchie zugewiesen.

Sie können sehen, dass DIV #2 (`z-index`: 2) über DIV #3 (`z-index`: 1) liegt, weil sie beide zum selben Stacking-Context (dem Root-Stacking-Context) gehören, sodass die z-index-Werte bestimmen, wie die Elemente gestapelt werden.

Was als seltsam angesehen werden kann, ist, dass DIV #2 (`z-index`: 2) über DIV #4 (`z-index`: 10) liegt, trotz ihrer z-index-Werte. Der Grund ist, dass sie nicht zum selben Stacking-Context gehören. DIV #4 gehört zum Stacking-Context, der durch DIV #3 erstellt wird, und wie zuvor erklärt, liegt DIV #3 (und sein gesamter Inhalt) unter DIV #2.

Um die Situation besser zu verstehen, hier ist die Stacking-Context-Hierarchie:

- Root-Stacking-Context
  - DIV #2 (`z-index`: 2)
  - DIV #3 (`z-index`: 1)
    - DIV #4 (`z-index`: 10)

> [!NOTE]
> Es ist wichtig zu beachten, dass die HTML-Hierarchie von der Stacking-Context-Hierarchie unterschiedlich ist. In der Stacking-Context-Hierarchie werden Elemente, die keinen Stacking-Context erstellen, auf ihrem Elternteil zusammengefasst.

## Beispiel

### HTML

```html
<div id="div1">
  <br />
  <span class="bold">DIV #1</span><br />
  position: relative;
  <div id="div2">
    <br />
    <span class="bold">DIV #2</span><br />
    position: absolute;<br />
    z-index: 2;
  </div>
</div>

<br />

<div id="div3">
  <br />
  <span class="bold">DIV #3</span><br />
  position: relative;<br />
  z-index: 1;
  <div id="div4">
    <br />
    <span class="bold">DIV #4</span><br />
    position: absolute;<br />
    z-index: 10;
  </div>
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

#div2 {
  z-index: 2;
}
#div3 {
  z-index: 1;
}
#div4 {
  z-index: 10;
}

#div1,
#div3 {
  height: 80px;
  position: relative;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#div2 {
  opacity: 0.8;
  position: absolute;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 170px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}

#div4 {
  opacity: 0.8;
  position: absolute;
  width: 200px;
  height: 70px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
}
```

## Ergebnis

{{ EmbedLiveSample('Example', '352', '270') }}

## Siehe auch

- [Beispiel: 1-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1)
- [Beispiel: 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3)
- [Stacking-Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Modul CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)
