---
title: "Element: currentCSSZoom Eigenschaft"
short-title: currentCSSZoom
slug: Web/API/Element/currentCSSZoom
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`currentCSSZoom`** der [`Element`](/de/docs/Web/API/Element)-Schnittstelle liefert den "effektiven" [CSS `zoom`](/de/docs/Web/CSS/zoom) eines Elements, wobei der Zoom berücksichtigt wird, der auf das Element und all seine Elternelemente angewendet wird.

Der Wert wird berechnet, indem die CSS-`zoom`-Werte des Elements und aller Elternelemente multipliziert werden. Zum Beispiel, wenn drei Elemente mit Zoomwerten von 2, 1.5 und 3 ineinander geschachtelt sind, hat das am tiefsten geschachtelte Element einen `currentCSSZoom`-Wert von 9. Wenn das Element keine CSS-Box hat, zum Beispiel, weil `display: none` auf das Element oder eines seiner Elternelemente gesetzt ist, wird `currentCSSZoom` auf 1 gesetzt.

Beachten Sie, dass einige Methoden wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Dimensionen und Positionen relativ zum Ansichtsfenster (Viewport) zurückgeben und daher die Effekte von CSS `zoom` beinhalten. Andere Eigenschaften und Methoden geben Werte zurück, die relativ zum Element selbst sind, und beinhalten nicht die Effekte des Zoomens. Diese umfassen zum Beispiel `client*`-Eigenschaften wie [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight), `scroll*()`-Methoden wie [`Element.scroll()`](/de/docs/Web/API/Element/scroll), und `offset*`-Eigenschaften wie [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight). Die `currentCSSZoom`-Eigenschaft kann verwendet werden, um diese Werte zu skalieren und die Effekte des Zoomens anzupassen.

## Wert

Eine Zahl, die den effektiven CSS-Zoom auf dem Element angibt oder 1, wenn das Element nicht gerendert wird.

## Beispiele

Dieses Beispiel demonstriert, wie `currentCSSZoom` berechnet wird.

Zuerst definieren wir eine geschachtelte Struktur von `<div>`-Elementen, wobei das "Elternelement" keinen Zoom hat und ein geschachteltes Element "child1" enthält, auf das `zoom: 2` angewendet wird, welches wiederum ein geschachteltes Element "child2" mit `zoom: 3` enthält. Das "child2"-Element enthält zwei geschachtelte Elemente, von denen eines nicht gerendert wird und auf keines der beiden die Zoom-Eigenschaft angewendet wurde.

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

Der JavaScript-Code protokolliert den auf jede Ebene angewendeten Zoomwert zusammen mit seinem `currentCSSZoom`-Wert.

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

Die resultierende gerenderte `<div>`-Struktur und das Protokoll werden unten gezeigt. Beachten Sie zunächst, dass das Elternelement, child1 und child2 Zoomstufen von 1, 2 und 3 haben und in 1-, 2- und 6-facher Größe des Elternelement-Textes gerendert werden. Dies spiegelt sich in den protokollierten `currentCSSZoom`-Werten wider.

Das `<div>` mit der ID `child3_rendered` hat keinen `zoom` gesetzt, erbt jedoch den `currentCSSZoom`-Wert von 6, wie im Protokoll gezeigt. Das endgültige `<div>` wird nicht gerendert und hat daher einen `currentCSSZoom`-Wert von 1.

{{EmbedLiveSample('Examples', '100%', "400px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS `zoom`](/de/docs/Web/CSS/zoom)
