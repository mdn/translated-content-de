---
title: Beispiel für Stapelkontext 2
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

## Beschreibung

Dies ist ein einfaches Beispiel, aber es ist der Schlüssel zum Verständnis des Konzepts des _Stapelkontexts_. Es gibt die gleichen vier DIVs wie im vorherigen Beispiel, aber jetzt werden `z-index`-Eigenschaften auf beiden Hierarchieebenen zugewiesen.

Sie können sehen, dass DIV #2 (`z-index`: 2) über DIV #3 (`z-index`: 1) liegt, da beide zum selben Stapelkontext gehören (dem Wurzelkontext), sodass `z-index`-Werte bestimmen, wie Elemente gestapelt werden.

Was als seltsam betrachtet werden kann, ist, dass DIV #2 (`z-index`: 2) über DIV #4 (`z-index`: 10) liegt, trotz ihrer `z-index`-Werte. Der Grund ist, dass sie nicht zum selben Stapelkontext gehören. DIV #4 gehört zum Stapelkontext, der von DIV #3 erstellt wird, und wie zuvor erklärt wurde, ist DIV #3 (und sein gesamter Inhalt) unter DIV #2.

Um die Situation besser zu verstehen, hier die Hierarchie des Stapelkontexts:

- Wurzel-Stapelkontext
  - DIV #2 (`z-index`: 2)
  - DIV #3 (`z-index`: 1)
    - DIV #4 (`z-index`: 10)

> [!NOTE]
> Es ist wichtig, sich daran zu erinnern, dass die HTML-Hierarchie von der Hierarchie des Stapelkontexts unterschiedlich ist. In der Hierarchie des Stapelkontexts werden Elemente, die keinen Stapelkontext erstellen, bei ihrem übergeordneten Element zusammengeführt.

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
  font: 12px "Arial";
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

- [Beispiel: 1-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1)
- [Beispiel: 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3)
- [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [CSS-Positionierungs-Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
