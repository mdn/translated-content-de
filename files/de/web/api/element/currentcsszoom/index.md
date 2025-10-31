---
title: "Element: currentCSSZoom-Eigenschaft"
short-title: currentCSSZoom
slug: Web/API/Element/currentCSSZoom
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`currentCSSZoom`** der [`Element`](/de/docs/Web/API/Element)-Schnittstelle liefert den "effektiven" [CSS-`zoom`](/de/docs/Web/CSS/Reference/Properties/zoom) eines Elements. Dabei wird der Zoom berücksichtigt, der auf das Element und alle seine übergeordneten Elemente angewendet wird.

Der Wert wird berechnet, indem die CSS-`zoom`-Werte des Elements und aller seiner Eltern multipliziert werden.
Wenn beispielsweise drei Elemente mit den Zoom-Werten 2, 1.5 und 3 ineinander verschachtelt sind, hat das am tiefsten verschachtelte Element einen `currentCSSZoom`-Wert von 9.
Hat das Element keine CSS-Box, zum Beispiel weil `display: none` auf das Element oder einen seiner Eltern gesetzt ist, wird `currentCSSZoom` auf 1 gesetzt.

Beachten Sie, dass einige Methoden, wie z.B. [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), Abmessungen und Position relativ zum Viewport zurückgeben und daher die Effekte des CSS-`zoom` enthalten.
Andere Eigenschaften und Methoden geben Werte zurück, die relativ zum Element selbst sind und die Effekte des Zoomens nicht enthalten.
Dazu gehören beispielsweise `client*`-Eigenschaften wie [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight), `scroll*()`-Methoden wie [`Element.scroll()`](/de/docs/Web/API/Element/scroll) und `offset*`-Eigenschaften wie [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight).
Die `currentCSSZoom`-Eigenschaft kann verwendet werden, um diese Werte zu skalieren und die Effekte des Zoomens anzupassen.

## Wert

Eine Zahl, die den effektiven CSS-Zoom des Elements angibt, oder 1, wenn das Element nicht gerendert wird.

## Beispiele

Dieses Beispiel zeigt, wie `currentCSSZoom` berechnet wird.

Zunächst definieren wir eine verschachtelte Struktur von `<div>`-Elementen, wobei das "Eltern"-Element nicht gezoomt ist und ein verschachteltes Element "child1" enthält, auf das `zoom: 2` angewendet wurde, das wiederum ein verschachteltes Element "child2" mit `zoom: 3` enthält.
Das "child2"-Element enthält zwei verschachtelte Elemente, von denen eines nicht gerendert wird und keines das Zoom-Eigenschaft angewendet hat.

```html
<div id="parent">
  parent
  <div style="zoom: 2" id="child1">
    child1 (zoom: 2)
    <div style="zoom: 3" id="child2">
      child2 (zoom: 3)
      <div id="child3_rendered">child3_rendered</div>
      <div style="display: none" id="child3_not-rendered">
        child3_not-rendered
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

Der JavaScript-Code protokolliert den Zoom-Wert, der auf jeder Ebene angewendet wird, zusammen mit dem `currentCSSZoom`-Wert.

```js
if ("currentCSSZoom" in Element.prototype) {
  const parent = document.querySelector("#parent");
  log(`parent (unzoomed). currentCSSZoom: ${parent.currentCSSZoom}`);
  const child1 = document.querySelector("#child1");
  log(`child1 (zoom: 2). currentCSSZoom: ${child1.currentCSSZoom}`);
  const child2 = document.querySelector("#child2");
  log(`child2 (zoom: 2). currentCSSZoom: ${child2.currentCSSZoom}`);
  const top_child3_rendered = document.querySelector("#child3_rendered");
  log(
    `child3_rendered (unzoomed). currentCSSZoom: ${child3_rendered.currentCSSZoom}`,
  );
  const top_child3_notRendered = document.querySelector("#child3_not-rendered");
  log(
    `child3_notRendered (not rendered): ${child3_notRendered.currentCSSZoom}`,
  );
} else {
  log("Element.currentCSSZoom not supported in this browser");
}
```

Die resultierende gerenderte `<div>`-Struktur und das Protokoll werden unten angezeigt.
Beachten Sie zunächst, dass Eltern-, Child1- und Child2-Zoom-Stufen 1, 2 und 3 haben und mit 1, 2 und 6-fache Größe des Elterntextes gerendert werden.
Dies spiegelt sich in den protokollierten `currentCSSZoom`-Werten wider.

Das `<div>` mit der ID `child3_rendered` hat zwar kein `zoom` gesetzt, erbt jedoch den `currentCSSZoom`-Wert von 6, wie im Protokoll gezeigt.
Das letzte `<div>` wird nicht gerendert und hat daher einen `currentCSSZoom`-Wert von 1.

{{EmbedLiveSample('Examples', '100%', "400px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS `zoom`](/de/docs/Web/CSS/Reference/Properties/zoom)
