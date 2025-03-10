---
title: Stapelkontext Beispiel 2
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

## Beschreibung

Dies ist ein sehr einfaches Beispiel, aber es ist der Schlüssel zum Verständnis des Konzepts des _Stapelkontexts_. Es gibt dieselben vier DIVs wie im vorherigen Beispiel, aber jetzt sind `z-index` Eigenschaften auf beiden Hierarchieebenen zugewiesen.

Sie können sehen, dass DIV #2 (`z-index`: 2) über DIV #3 (`z-index`: 1) liegt, weil sie beide zum selben Stapelkontext gehören (dem Wurzelkontext), sodass die `z-index` Werte bestimmen, wie die Elemente gestapelt werden.

Was als seltsam angesehen werden kann, ist, dass DIV #2 (`z-index`: 2) über DIV #4 (`z-index`: 10) liegt, trotz der `z-index` Werte. Der Grund dafür ist, dass sie nicht zum selben Stapelkontext gehören. DIV #4 gehört zum Stapelkontext, der von DIV #3 erstellt wird, und wie zuvor erklärt wurde, befindet sich DIV #3 (und sein gesamter Inhalt) unter DIV #2.

Um die Situation besser zu verstehen, hier die Stapelkontext-Hierarchie:

- Wurzel-Stapelkontext

  - DIV #2 (`z-index`: 2)
  - DIV #3 (`z-index`: 1)

    - DIV #4 (`z-index`: 10)

> [!NOTE]
> Es ist erwähnenswert, dass die HTML-Hierarchie von der Stapelkontext-Hierarchie abweicht. In der Stapelkontext-Hierarchie werden Elemente, die keinen Stapelkontext erzeugen, auf ihren Elternteil reduziert.

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

- [Stapelung ohne die `z-index` Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index): Die Stapelregeln, die angewendet werden, wenn `z-index` nicht verwendet wird.
- [Schwebende Elemente stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Anleitung zur Verwendung von `z-index`, um die Standard-Stapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Hinweise zum Stapelkontext.
- [Stapelkontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-Ebenen HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Stapelkontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3): 3-Ebenen HTML-Hierarchie, `z-index` auf der zweiten Ebene
