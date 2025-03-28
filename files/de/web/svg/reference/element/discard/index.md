---
title: <discard>
slug: Web/SVG/Reference/Element/discard
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{SeeCompatTable}}

Das **`<discard>`** [SVG](/de/docs/Web/SVG) Element kann verwendet werden, um den Zeitpunkt anzugeben, zu dem ein bestimmtes Element aus dem DOM entfernt werden soll. Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem nicht mehr benötigte Elemente, wie z.B. abgeschlossene animierte Elemente, entfernt werden.

Der Vorgang entfernt das Ziellelement und alle seine Kinder und anschließend das `<discard>` Element selbst (dies geschieht auch, wenn das Ziellelement ungültig war).

Das [`begin`](#begin) Attribut wird verwendet, um den Auslösepunkt anzugeben, an dem das `<discard>` Element aktiv wird und das zugeordnete Element verworfen wird. Das Ziellelement, das aus dem DOM entfernt werden soll, wird über das [`href`](#href) Attribut angegeben. Falls nicht angegeben, ist das unmittelbare Elternteil des `<discard>` Elements das Ziel.

`<discard>` kann an allen Orten verwendet werden, an denen auch das {{SVGElement('animate')}} Element benutzt werden kann. Autoren sollten das `playbackorder` Attribut auf `forwardonly` setzen, wenn dieses Element verwendet wird, da Elemente nicht erneut hinzugefügt werden, wenn der Benutzer in der Zeitachse rückwärts sucht.

## Attribute

- {{SVGAttr("begin")}}

  - : Der Auslöser, der das `<discard>` Element aktiv macht, woraufhin das zugeordnete Element verworfen werden soll. Dies ist üblicherweise ein [`syncbase-value`](/de/docs/Web/SVG/Reference/Attribute/begin#syncbase-value), der den Beginn oder das Ende einer anderen Animation angibt, ein [`offset-value`](/de/docs/Web/SVG/Reference/Attribute/begin#offset-value) relativ zu dem Zeitpunkt, zu dem die SVG-Datei in das DOM geladen wurde, oder ein [`event-value`](/de/docs/Web/SVG/Reference/Attribute/begin#event-value).

    _Werttyp_: [**\<begin-value-list>**](/de/docs/Web/SVG/Reference/Attribute/begin#animate_animatemotion_animatetransform_set).
    _Standardwert_: `0`; _Animierbar_: **nein**

- {{SVGAttr("href")}}

  - : Ein URL-Verweis auf das Ziellelement, das verworfen werden soll. Dies hat die gleichen Anforderungen wie [`href` bei Animationselementen](/de/docs/Web/SVG/Reference/Attribute/href#animate_animatemotion_animatetransform_set) und kann ein weiteres `<discard>` Element sein. Wenn nicht definiert, ist das Ziellelement das unmittelbare Elternteil des `<discard>` Elements.

    Beachten Sie, dass wenn das Ziellelement nicht Teil des aktuellen SVG-Dokumentfragments ist, ob es verworfen wird oder nicht, von der Zielsprache abhängt.

    _Standardwert_: `none`; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Beispiele

### Verwerfen ausgelöst durch das Ende einer Animation

Dieses Beispiel zeigt, wie das `<discard>` Element mit einer Aktivierung, die durch das Ende einer Animation ausgelöst wird, verwendet werden könnte. Das verwendete SVG basiert auf Erik Dahlströms "Loading bar" SVG unter http://xn--dahlstrm-t4a.net/svg/smil/svgt12_discard.svg.

Das SVG definiert ein "Fertig geladen" {{svgelement("text")}}-Element, das von einem {{svgelement("g")}}-Element verborgen wird.

Das `<rect>` wird über eine Dauer von 4 Sekunden bis zum Ende der Leiste durch die Animation mit der ID "barAnim" animiert. Das `<g>` Element enthält ein Discard-Element, das durch den Abschluss der "barAnim" Animation ausgelöst wird: `<discard begin="barAnim.end" />`. Wenn dies aktiviert wird, werden das `<g>` Element und alle seine Inhalte aus dem DOM entfernt, so dass nur der Textblock übrig bleibt, der "Fertig geladen" anzeigt.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 100 50">
  <text
    x="50"
    y="30"
    font-family="sans-serif"
    font-size="10px"
    text-anchor="middle"
    stroke="white"
    stroke-width="0.2">
    Load complete
  </text>
  <g>
    <rect
      rx="5"
      x="10"
      y="15"
      height="20"
      width="80"
      fill="white"
      stroke="black" />
    <rect fill="lime" rx="3" x="12" y="17" height="16.1" width="10">
      <animate id="barAnim" attributeName="width" to="76" dur="4s" />
    </rect>
    <text
      x="50"
      y="30"
      font-family="sans-serif"
      font-size="10px"
      text-anchor="middle"
      stroke="white"
      stroke-width="0.2">
      Loading...
    </text>
    <discard begin="barAnim.end" />
  </g>
</svg>
```

#### Ergebnis

Das folgende Live-Beispiel zeigt das oben stehende SVG im oberen Bild, während das zweite Bild die gleiche SVG-Datei ist, jedoch mit den `<discard>` Elementen entfernt (in Browsern, die das Discard-Element nicht unterstützen, verhalten sich beide Bilder gleich).

Im oberen Bild (in Browsern, die das `<discard>` Element unterstützen) verschwinden die Balken und alles im `<g>` Element, nachdem die Balken das Ende erreicht haben und verworfen werden, so dass nur der "Fertig geladen"-Text übrig bleibt. Der untere Bildfortschrittsbalken kehrt einfach in seinen Anfangszustand zurück, nachdem die Animation abgeschlossen ist, und der "Fertig geladen"-Text wird nie angezeigt.

```html hidden
<button id="reset" type="button">Reset</button>
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```html hidden
<img
  src="bar_discard_event.svg"
  alt="Animated progress bar SVG that uses discard triggered on the end of an animation" />
<img
  src="bar_no_discard.svg"
  alt="Animated progress bar SVG that does not include discard element" />
```

{{EmbedLiveSample('Result', , '800px')}}

### Verwerfen ausgelöst durch Zeit

Dieses Beispiel zeigt, wie das `<discard>` Element mit einer zeitbasierten Aktivierung verwendet werden kann.

Es ist fast identisch mit dem vorherigen Beispiel, der Hauptunterschied besteht darin, dass das Discard-Element nach 5 Sekunden (`<discard begin="5s" />`) anstelle des Endes der Animation (4 Sekunden) ausgelöst wird. Dies entfernt auch die ID vom `<animate>` Element, da sie nicht verwendet wird.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 100 50">
  <text
    x="50"
    y="30"
    font-family="sans-serif"
    font-size="10px"
    text-anchor="middle"
    stroke="white"
    stroke-width="0.2">
    Load complete
  </text>
  <g>
    <rect
      rx="5"
      x="10"
      y="15"
      height="20"
      width="80"
      fill="white"
      stroke="black" />
    <rect fill="lime" rx="3" x="12" y="17" height="16.1" width="10">
      <animate attributeName="width" to="76" dur="4s" />
    </rect>
    <text
      x="50"
      y="30"
      font-family="sans-serif"
      font-size="10px"
      text-anchor="middle"
      stroke="white"
      stroke-width="0.2">
      Loading...
    </text>
    <discard begin="5s" />
  </g>
</svg>
```

#### Ergebnis

Das folgende Live-Beispiel zeigt das oben stehende SVG im oberen Bild, während das zweite Bild die gleiche SVG-Datei ist, jedoch mit den `<discard>` Elementen entfernt (in Browsern, die das Discard-Element nicht unterstützen, verhalten sich beide Bilder gleich).

Im oberen Bild (in Browsern, die das `<discard>` Element unterstützen) wird die Leiste nach vier Sekunden fertiggestellt und kehrt dann in ihren Anfangszustand zurück. Eine Sekunde später verschwindet alles im `<g>` Element, so dass nur der "Fertig geladen"-Text übrig bleibt. Der untere Bildfortschrittsbalken kehrt einfach in seinen Anfangszustand zurück, nachdem die Animation abgeschlossen ist, und der "Fertig geladen"-Text wird nie angezeigt.

```html hidden
<button id="reset" type="button">Reset</button>
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```html hidden
<img
  src="bar_discard_time.svg"
  alt="Animated progress bar SVG that uses discard triggered on time" />
<img
  src="bar_no_discard.svg"
  alt="Animated progress bar SVG that does not include discard element" />
```

{{EmbedLiveSample('result_2', , '800px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
