---
title: Stacking context example 2
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

## Beschreibung

Dies ist ein sehr einfaches Beispiel, das jedoch der Schlüssel zum Verständnis des Konzepts des _Stacking-Kontext_ ist. Es gibt dieselben vier DIVs wie im vorherigen Beispiel, aber jetzt sind `z-index`-Eigenschaften auf beiden Ebenen der Hierarchie zugewiesen.

Sie können sehen, dass DIV #2 (`z-index`: 2) über DIV #3 (`z-index`: 1) liegt, da beide zum selben Stacking-Kontext (dem Root-Stacking-Kontext) gehören und daher `z-index`-Werte bestimmen, wie Elemente gestapelt werden.

Als merkwürdig könnte angesehen werden, dass DIV #2 (`z-index`: 2) über DIV #4 (`z-index`: 10) liegt, trotz ihrer `z-index`-Werte. Der Grund dafür ist, dass sie nicht zum selben Stacking-Kontext gehören. DIV #4 gehört zum Stacking-Kontext, der von DIV #3 erstellt wird, und wie zuvor erklärt, liegt DIV #3 (und dessen gesamter Inhalt) unter DIV #2.

Um die Situation besser zu verstehen, hier die Stacking-Kontext-Hierarchie:

- Root-Stacking-Kontext

  - DIV #2 (`z-index`: 2)
  - DIV #3 (`z-index`: 1)

    - DIV #4 (`z-index`: 10)

> [!NOTE]
> Es ist wichtig zu beachten, dass die HTML-Hierarchie von der Stacking-Kontext-Hierarchie abweicht. In der Stacking-Kontext-Hierarchie werden Elemente, die keinen eigenen Stacking-Kontext erstellen, in ihrem übergeordneten Element zusammengefasst.

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

- [Stapelreihenfolge ohne die z-index-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelnde Float-Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie Float-Elemente beim Stapeln behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` verwendet wird, um die Standard-Stapelreihenfolge zu ändern.
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Notizen zum Stacking-Kontext.
- [Stacking-Kontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-Ebenen-HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Stacking-Kontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene
