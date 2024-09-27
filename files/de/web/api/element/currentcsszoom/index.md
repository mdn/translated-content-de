---
title: "Element: currentCSSZoom-Eigenschaft"
short-title: currentCSSZoom
slug: Web/API/Element/currentCSSZoom
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{APIRef("DOM")}}

Die **`currentCSSZoom`** schreibgeschützte Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle liefert den "effektiven" [CSS `zoom`](/de/docs/Web/CSS/zoom) eines Elements, wobei der auf das Element und alle seine Elternelemente angewendete Zoom berücksichtigt wird.

Der Wert wird berechnet, indem die CSS-`zoom`-Werte des Elements und aller seiner Eltern multipliziert werden.
Zum Beispiel, wenn drei Elemente mit Zoom-Werten von 2, 1,5 und 3 in einander verschachtelt sind, wird das am tiefsten verschachtelte Element einen `currentCSSZoom`-Wert von 9 haben.
Wenn das Element keine CSS-Box hat, zum Beispiel weil `display: none` auf das Element oder eines seiner Eltern angewendet wurde, wird `currentCSSZoom` auf 1 gesetzt.

Beachten Sie, dass einige Methoden, wie zum Beispiel [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), Dimensionen und Positionen zurückgeben, die relativ zum Viewport sind und daher die Effekte des CSS `zoom` beinhalten.
Andere Eigenschaften und Methoden geben Werte zurück, die relativ zum Element selbst sind und die Zoom-Effekte nicht beinhalten.
Dazu gehören beispielsweise `client*` Eigenschaften wie [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight), `scroll*()` Methoden wie [`Element.scroll()`](/de/docs/Web/API/Element/scroll) und `offset*` Eigenschaften wie [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight).
Die `currentCSSZoom`-Eigenschaft kann verwendet werden, um diese Werte anzupassen und die Effekte des Zooms zu berücksichtigen.

## Wert

Eine Zahl, die den effektiven CSS-Zoom des Elements angibt, oder 1, wenn das Element nicht gerendert wird.

## Beispiele

Dieses Beispiel demonstriert, wie `currentCSSZoom` berechnet wird.

Zuerst definieren wir eine verschachtelte Struktur von `<div>`-Elementen, bei der das "Elternelement" ungezoomt ist und ein verschachteltes Element "child1" enthält, das `zoom: 2` angewendet hat, welches wiederum ein verschachteltes Element "child2" mit `zoom: 3` enthält.
Das "child2"-Element enthält zwei verschachtelte Elemente, von denen eines nicht gerendert wird und keines von beiden die Zoom-Eigenschaft hat.

```html
<div id="parent">
  parent
  <div style="zoom: 2" id="child1">
    child1 (zoom: 2)
    <div style="zoom: 3" id="child2">
      child2 (zoom: 3)
      <div id="child3_rendered">child3_rendered</div>
      <div style="display: none" id="child3_notrendered">
        child3_notrendered
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

Der JavaScript-Code protokolliert den an jeder Ebene angewendeten Zoom-Wert zusammen mit seinem `currentCSSZoom`-Wert.

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
  const top_child3_notrendered = document.querySelector("#child3_notrendered");
  log(
    `child3_notrendered (not rendered): ${child3_notrendered.currentCSSZoom}`,
  );
} else {
  log("Element.currentCSSZoom not supported in this browser");
}
```

Die resultierende gerenderte `<div>`-Struktur und das Protokoll werden unten angezeigt.
Zuerst beachten Sie, dass das Elternelement, child1 und child2 Zoom-Stufen von 1, 2 und 3 haben und mit 1, 2 und 6-mal der Größe des elterlichen Textes gerendert werden.
Dies wird durch die protokollierten `currentCSSZoom`-Werte widergespiegelt.

Das `<div>` mit der ID `child3_rendered` hat kein `zoom` gesetzt, erbt aber den `currentCSSZoom`-Wert von 6, wie im Protokoll angezeigt.
Das letzte `<div>` wird nicht gerendert und hat daher einen `currentCSSZoom`-Wert von 1.

{{EmbedLiveSample('Examples', '100%', "400px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS `zoom`](/de/docs/Web/CSS/zoom)
