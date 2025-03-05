---
title: <discard>
slug: Web/SVG/Element/discard
l10n:
  sourceCommit: c15dc43c147bba7bdbaf2754831c59e5f44b98d2
---

{{SVGRef}}{{SeeCompatTable}}

Das **`<discard>`** [SVG](/de/docs/Web/SVG)-Element kann verwendet werden, um den Zeitpunkt anzugeben, zu dem ein bestimmtes Element aus dem DOM entfernt werden soll.
Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem Elemente, die nicht mehr benötigt werden, wie z.B. animierte Elemente, die abgeschlossen sind, entfernt werden.

Die Operation entfernt das Zielelement und alle seine Kinder sowie das `<discard>`-Element selbst (dies geschieht sogar, wenn das Zielelement ungültig war).

Das [`begin`](#begin)-Attribut wird verwendet, um den Triggerpunkt anzugeben, an dem das `<discard>`-Element aktiv wird und sein zugehöriges Element verworfen wird.
Das Zielelement, das aus dem DOM entfernt werden soll, wird mit dem [`href`](#href)-Attribut angegeben.
Wenn es nicht spezifiziert ist, ist das unmittelbare übergeordnete Element des `<discard>`-Elements das Ziel.

`<discard>` kann an den gleichen Stellen wie das {{SVGElement('animate')}}-Element verwendet werden.
Autoren sollten das `playbackorder`-Attribut auf `forwardonly` setzen, wenn dieses Element verwendet wird, da Elemente nicht erneut hinzugefügt werden, wenn der Benutzer in der Zeitleiste rückwärts blättert.

## Attribute

- {{SVGAttr("begin")}}

  - : Der Auslöser, der das `<discard>`-Element aktiv werden lässt, woraufhin das zugehörige Element verworfen werden soll.
    Dies ist üblicherweise ein [`syncbase-value`](/de/docs/Web/SVG/Attribute/begin#syncbase-value), der den Start oder das Ende einer anderen Animation angibt, ein [`offset-value`](/de/docs/Web/SVG/Attribute/begin#offset-value), relativ zu dem Zeitpunkt, an dem die SVG-Datei in das DOM geladen wurde, oder ein [`event-value`](/de/docs/Web/SVG/Attribute/begin#event-value).

    _Werttyp_: [**\<begin-value-list>**](/de/docs/Web/SVG/Attribute/begin#animate_animatemotion_animatetransform_set).
    _Standardwert_: `0`; _Animierbar_: **nein**

- {{SVGAttr("href")}}

  - : Eine URL-Referenz für das Zielelement, das verworfen werden soll.
    Dies hat die gleichen Anforderungen wie [`href` bei Animationselementen](/de/docs/Web/SVG/Attribute/href#animate_animatemotion_animatetransform_set) und kann ein weiteres `<discard>`-Element sein.
    Wenn nicht definiert, ist das Zielelement das unmittelbare übergeordnete Element des `<discard>`-Elements.

    Beachten Sie, dass, wenn das Zielelement nicht Teil des aktuellen SVG-Dokument-Fragments ist, das Verwerfen davon abhängt, welche Zielsprache verwendet wird.

    _Standardwert_: `none`; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Beispiele

### Verwerfen ausgelöst durch das Ende einer Animation

Dieses Beispiel zeigt, wie das `<discard>`-Element mit einem Aktivierungspunkt verwendet werden kann, der auf dem Abschluss einer Animation basiert.
Das verwendete SVG basiert auf Erik Dahlströms "Loading bar" SVG unter http://xn--dahlstrm-t4a.net/svg/smil/svgt12_discard.svg.

Das SVG definiert ein "Load complete" {{svgelement("text")}}-Element, das durch ein {{svgelement("g")}}-Element verborgen wird.

Das `<rect>` wird über eine Dauer von 4 Sekunden mit der Animation mit der ID "barAnim" zum Ende der Leiste animiert.
Das `<g>`-Element enthält ein discard-Element, das durch den Abschluss der "barAnim"-Animation ausgelöst wird: `<discard begin="barAnim.end" />`.
Wenn dies aktiviert wird, werden das `<g>`-Element und alle seine Inhalte aus dem DOM entfernt, wobei nur der Textblock mit der Anzeige "Load complete" übrig bleibt.

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

Das unten stehende Live-Beispiel zeigt das obige SVG im oberen Bild an, während das zweite Bild die gleiche SVG-Datei, jedoch ohne die `<discard>`-Elemente zeigt (in Browsern, die das discard-Element nicht unterstützen, verhalten sich beide Bilder gleich).

Im oberen Bild (in Browsern, die das `<discard>`-Element unterstützen) verschwindet die Leiste und alles andere im `<g>`-Element, nachdem die Leiste das Ende erreicht hat und verworfen wurde, sodass nur der "Load complete"-Text angezeigt wird.
Die untere Bild-Fortschrittsanzeige wird einfach in ihren ursprünglichen Zustand zurückversetzt, wenn die Animation abgeschlossen ist, und der "Load complete"-Text wird nie angezeigt.

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

Dieses Beispiel zeigt, wie das `<discard>`-Element mit einem Aktivierungspunkt verwendet werden kann, der auf Zeit basiert.

Es ist fast genau das gleiche wie das vorherige Beispiel, der Hauptunterschied besteht darin, dass das discard-Element nach 5 Sekunden (`<discard begin="5s" />`) anstelle des Endes der Animation (4 Sekunden) ausgelöst wird. Daher wird die ID aus dem `<animate>`-Element entfernt, da sie nicht verwendet wird.

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

Das unten stehende Live-Beispiel zeigt das obige SVG im oberen Bild an, während das zweite Bild die gleiche SVG-Datei, jedoch ohne die `<discard>`-Elemente zeigt (in Browsern, die das discard-Element nicht unterstützen, verhalten sich beide Bilder gleich).

Im oberen Bild (in Browsern, die das `<discard>`-Element unterstützen) wird die Leiste nach vier Sekunden bis zur Fertigstellung fortschreiten und dann auf ihren ursprünglichen Zustand zurückgesetzt.
Eine Sekunde später wird alles im `<g>`-Element verschwinden, sodass nur der "Load complete"-Text angezeigt wird.
Die untere Bild-Fortschrittsanzeige wird einfach in ihren ursprünglichen Zustand zurückversetzt, wenn die Animation abgeschlossen ist, und der "Load complete"-Text wird nie angezeigt.

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
