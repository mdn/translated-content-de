---
title: "Element: currentCSSZoom-Eigenschaft"
short-title: currentCSSZoom
slug: Web/API/Element/currentCSSZoom
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{APIRef("DOM")}}

Die **`currentCSSZoom`** schreibgeschützte Eigenschaft des {{domxref("Element")}}-Interfaces gibt den "effektiven" [CSS `zoom`](/de/docs/Web/CSS/zoom) eines Elements an und berücksichtigt dabei den Zoom, der auf das Element und all seine Elternelemente angewendet wird.

Der Wert wird berechnet, indem die CSS-`zoom`-Werte des Elements und aller seiner Eltern miteinander multipliziert werden.
Zum Beispiel, wenn drei Elemente mit Zoom-Werten von 2, 1.5 und 3 ineinander verschachtelt sind, hat das am tiefsten verschachtelte Element einen `currentCSSZoom`-Wert von 9.
Wenn das Element keine CSS-Box hat, zum Beispiel weil `display: none` auf das Element oder eines seiner Eltern angewendet wird, dann wird `currentCSSZoom` auf 1 gesetzt.

Beachten Sie, dass einige Methoden, wie {{domxref("Element.getBoundingClientRect()")}}, Dimensionen und Positionen relativ zum Viewport zurückgeben und daher die Effekte des CSS-`zoom` einschließen.
Andere Eigenschaften und Methoden geben Werte zurück, die relativ zum Element selbst sind und die Effekte des Zoomens nicht einschließen.
Dazu gehören beispielsweise die `client*`-Eigenschaften wie {{domxref("Element.clientHeight")}}, `scroll*()`-Methoden wie {{domxref("Element.scroll()")}}, und `offset*`-Eigenschaften wie {{domxref("HTMLElement.offsetHeight")}}.
Die `currentCSSZoom`-Eigenschaft kann verwendet werden, um diese Werte zu skalieren, um die Zoom-Effekte auszugleichen.

## Wert

Eine Zahl, die den effektiven CSS-Zoom auf das Element angibt, oder 1, wenn das Element nicht gerendert wird.

## Beispiele

Dieses Beispiel demonstriert, wie der `currentCSSZoom` berechnet wird.

Zuerst definieren wir eine verschachtelte Struktur von `<div>`-Elementen, bei der das "Elternteil" nicht gezoomt ist und ein verschachteltes Element "child1" enthält, auf das `zoom: 2` angewendet wird, welches wiederum ein verschachteltes Element "child2" mit `zoom: 3` enthält.
Das "child2"-Element enthält zwei verschachtelte Elemente, von denen eines nicht gerendert wird und keines der beiden die Zoom-Eigenschaft angewendet hat.

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

Der JavaScript-Code protokolliert den Zoomwert, der auf jeder Ebene angewendet wird, zusammen mit seinem `currentCSSZoom`-Wert.

```js
if ("currentCSSZoom" in Element.prototype) {
  const parent = document.querySelector("#parent");
  log(`parent (ungezoomt). currentCSSZoom: ${parent.currentCSSZoom}`);
  const child1 = document.querySelector("#child1");
  log(`child1 (zoom: 2). currentCSSZoom: ${child1.currentCSSZoom}`);
  const child2 = document.querySelector("#child2");
  log(`child2 (zoom: 2). currentCSSZoom: ${child2.currentCSSZoom}`);
  const top_child3_rendered = document.querySelector("#child3_rendered");
  log(
    `child3_rendered (ungezoomt). currentCSSZoom: ${child3_rendered.currentCSSZoom}`,
  );
  const top_child3_notrendered = document.querySelector("#child3_notrendered");
  log(
    `child3_notrendered (nicht gerendert): ${child3_notrendered.currentCSSZoom}`,
  );
} else {
  log("Element.currentCSSZoom nicht in diesem Browser unterstützt");
}
```

Das resultierende rendere `<div>`-Struktur und Protokoll sind unten gezeigt.
Zuerst beachten Sie, dass das Elternteil, child1 und child2 Zoomstufen von 1, 2, und 3 haben und mit 1, 2 und 6 Mal der Größe des Elterntextes gerendert werden.
Dies spiegelt sich in den protokollierten `currentCSSZoom`-Werten wider.

Das `<div>` mit der ID `child3_rendered` hat `zoom` nicht gesetzt, erbt aber den `currentCSSZoom`-Wert von 6, wie im Protokoll gezeigt.
Das letzte `<div>` wird nicht gerendert und hat daher einen `currentCSSZoom`-Wert von 1.

{{EmbedLiveSample('Examples', '100%', "400px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS `zoom`](/de/docs/Web/CSS/zoom)
