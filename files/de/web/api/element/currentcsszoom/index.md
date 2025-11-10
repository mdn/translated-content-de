---
title: "Element: currentCSSZoom-Eigenschaft"
short-title: currentCSSZoom
slug: Web/API/Element/currentCSSZoom
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

Die **`currentCSSZoom`** read-only-Eigenschaft des [`Element`](/de/docs/Web/API/Element) Interface liefert den "effektiven" [CSS-`zoom`](/de/docs/Web/CSS/Reference/Properties/zoom) eines Elements, indem sie den Zoom berücksichtigt, der auf das Element und all seine Elternelemente angewendet wird.

Der Wert wird berechnet, indem die CSS-`zoom`-Werte des Elements und all seiner Eltern multipliziert werden.
Zum Beispiel, wenn drei Elemente mit Zoom-Werten von 2, 1,5 und 3 ineinander verschachtelt sind, wird das am tiefsten verschachtelte Element einen `currentCSSZoom`-Wert von 9 haben.
Falls das Element keine CSS-Box hat, beispielsweise weil `display: none` auf das Element oder eines seiner Elternteile gesetzt ist, wird der `currentCSSZoom` auf 1 gesetzt.

Beachten Sie, dass einige Methoden, wie zum Beispiel [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), Dimensionen und Positionen relativen zum Viewport zurückgeben und daher die Effekte von CSS `zoom` beinhalten.
Andere Eigenschaften und Methoden geben Werte zurück, die relativ zum Element selbst sind und die Effekte des Zoomens nicht beinhalten.
Dazu gehören beispielsweise `client*`-Eigenschaften wie [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight), `scroll*()`-Methoden wie [`Element.scroll()`](/de/docs/Web/API/Element/scroll), und `offset*`-Eigenschaften wie [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight).
Die `currentCSSZoom`-Eigenschaft kann verwendet werden, um diese Werte anzupassen, um den Effekten des Zoomens Rechnung zu tragen.

## Wert

Eine Zahl, die den effektiven CSS-Zoom auf dem Element angibt, oder 1, falls das Element nicht gerendert wird.

## Beispiele

Dieses Beispiel demonstriert, wie der `currentCSSZoom` berechnet wird.

Zuerst definieren wir eine verschachtelte Struktur von `<div>`-Elementen, bei der das "Elternteil" nicht gezoomt ist und ein verschachteltes Element "child1" enthält, auf das `zoom: 2` angewendet wurde, welches wiederum ein verschachteltes Element "child2" mit `zoom: 3` enthält.
Das "child2"-Element enthält zwei verschachtelte Elemente, von denen eines nicht gerendert wird, und keines von denen die Zoom-Eigenschaft angewendet hat.

```html
<div id="parent">
  parent
  <div style="zoom: 2" id="child1">
    child1 (zoom: 2)
    <div style="zoom: 3" id="child2">
      child2 (zoom: 3)
      <div id="child3-rendered">child3-rendered</div>
      <div style="display: none" id="child3-not-rendered">
        child3-not-rendered
      </div>
    </div>
  </div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 95px;
  overflow: scroll;
  margin: 10px;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der JavaScript-Code protokolliert den auf jede Ebene angewendeten Zoom-Wert zusammen mit seinem `currentCSSZoom`-Wert.

```js
if ("currentCSSZoom" in Element.prototype) {
  const parent = document.querySelector("#parent");
  log(`parent (unzoomed). currentCSSZoom: ${parent.currentCSSZoom}`);
  const child1 = document.querySelector("#child1");
  log(`child1 (zoom: 2). currentCSSZoom: ${child1.currentCSSZoom}`);
  const child2 = document.querySelector("#child2");
  log(`child2 (zoom: 2). currentCSSZoom: ${child2.currentCSSZoom}`);
  const child3Rendered = document.querySelector("#child3-rendered");
  log(
    `child3-rendered (unzoomed). currentCSSZoom: ${child3Rendered.currentCSSZoom}`,
  );
  const child3NotRendered = document.querySelector("#child3-not-rendered");
  log(
    `child3-not-rendered (not rendered): ${child3NotRendered.currentCSSZoom}`,
  );
} else {
  log("Element.currentCSSZoom not supported in this browser");
}
```

Die resultierende gerenderte `<div>`-Struktur und das Protokoll sind unten zu sehen.
Zuerst beachten Sie, dass Elternteil, child1 und child2 Zoom-Stufen von 1, 2 und 3 haben und mit 1, 2 und 6-facher Größe des Elterntextes gerendert werden.
Dies spiegelt sich in den protokollierten `currentCSSZoom`-Werten wider.

Das `<div>` mit der ID `child3-rendered` hat keinen `zoom`-Wert, erbt aber den `currentCSSZoom`-Wert von 6, wie im Protokoll gezeigt.
Das letzte `<div>` wird nicht gerendert und hat daher einen `currentCSSZoom`-Wert von 1.

{{EmbedLiveSample('Examples', '100%', "400px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS `zoom`](/de/docs/Web/CSS/Reference/Properties/zoom)
