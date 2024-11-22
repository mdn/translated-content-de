---
title: Beispiel für Stacking-Kontext 2
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

## Beschreibung

Dies ist ein sehr einfaches Beispiel, aber es ist der Schlüssel zum Verständnis des Konzepts des _Stacking-Kontexts_. Es gibt dieselben vier DIVs wie im vorherigen Beispiel, aber jetzt sind `z-index`-Eigenschaften auf beiden Ebenen der Hierarchie zugewiesen.

Sie können sehen, dass DIV #2 (`z-index`: 2) über DIV #3 (`z-index`: 1) liegt, da sie beide zum selben Stacking-Kontext (dem Root-Stacking-Kontext) gehören, wodurch `z-index`-Werte bestimmen, wie Elemente gestapelt werden.

Was als merkwürdig empfunden werden kann, ist, dass DIV #2 (`z-index`: 2) über DIV #4 (`z-index`: 10) liegt, trotz ihrer `z-index`-Werte. Der Grund dafür ist, dass sie nicht zum selben Stacking-Kontext gehören. DIV #4 gehört zum Stacking-Kontext, der von DIV #3 erstellt wird, und wie zuvor erklärt liegt DIV #3 (und sein gesamter Inhalt) unter DIV #2.

Um die Situation besser zu verstehen, hier ist die Hierarchie des Stacking-Kontexts:

- Root-Stacking-Kontext

  - DIV #2 (`z-index`: 2)
  - DIV #3 (`z-index`: 1)

    - DIV #4 (`z-index`: 10)

> [!NOTE]
> Es lohnt sich daran zu erinnern, dass die HTML-Hierarchie von der Hierarchie des Stacking-Kontexts unterschiedlich ist. In der Hierarchie des Stacking-Kontexts werden Elemente, die keinen Stacking-Kontext erstellen, beim übergeordneten Element zusammengeführt.

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

- [Stacking ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stacking-Regeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stacking von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente mit Stacking gehandhabt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` verwendet wird, um das Standard-Stacking zu ändern.
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Notizen zum Stacking-Kontext.
- [Beispiel für Stacking-Kontext 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Beispiel für Stacking-Kontext 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
