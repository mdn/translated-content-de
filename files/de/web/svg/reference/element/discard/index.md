---
title: <discard>
slug: Web/SVG/Reference/Element/discard
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{SeeCompatTable}}

Das **`<discard>`** [SVG](/de/docs/Web/SVG) Element kann verwendet werden, um den Zeitpunkt anzugeben, zu dem ein bestimmtes Element aus dem DOM entfernt werden soll.
Dies erlaubt es einem SVG-Viewer, Speicher zu sparen, indem Elemente, die nicht mehr benötigt werden, wie beispielsweise abgeschlossene animierte Elemente, verworfen werden.

Der Vorgang entfernt das Ziel-Element und alle seine Kinder und danach das `<discard>` Element selbst (dies geschieht auch, wenn das Ziel-Element ungültig war).

Das [`begin`](#begin) Attribut wird verwendet, um den Auslösepunkt anzugeben, an dem das `<discard>` Element aktiv wird und sein zugehöriges Element verworfen wird.
Das zu entfernende Ziel-Element wird mithilfe des [`href`](#href) Attributs angegeben.
Wenn nicht spezifiziert, ist das unmittelbare Elternelement des `<discard>` Elements das Ziel.

Das `<discard>` Element kann an denselben Stellen verwendet werden wie das {{SVGElement('animate')}} Element.
Autoren sollten das `playbackorder` Attribut auf `forwardonly` setzen, wenn sie dieses Element verwenden, da Elemente nicht wieder hinzugefügt werden, wenn der Benutzer in der Zeitleiste zurückgeht.

## Attribute

- {{SVGAttr("begin")}}

  - : Der Auslöser, der das `<discard>` Element aktiviert, woraufhin das zugehörige Element verworfen werden sollte.
    Dies ist häufig ein [`syncbase-value`](/de/docs/Web/SVG/Reference/Attribute/begin#syncbase-value), der den Start oder das Ende einer anderen Animation angibt, ein [`offset-value`](/de/docs/Web/SVG/Reference/Attribute/begin#offset-value) relativ zu dem Zeitpunkt, an dem die SVG-Datei in das DOM geladen wurde, oder ein [`event-value`](/de/docs/Web/SVG/Reference/Attribute/begin#event-value).

    _Werttyp_: [**\<begin-value-list>**](/de/docs/Web/SVG/Reference/Attribute/begin#animate_animatemotion_animatetransform_set).
    _Standardwert_: `0`; _Animierbar_: **nein**

- {{SVGAttr("href")}}

  - : Eine URL-Referenz auf das zu verwerfende Ziel-Element.
    Dies hat die gleichen Anforderungen wie [`href` für Animationselemente](/de/docs/Web/SVG/Reference/Attribute/href#animate_animatemotion_animatetransform_set) und kann ein weiteres `<discard>` Element sein.
    Wenn nicht definiert, ist das Ziel-Element das unmittelbare Elternelement des `<discard>` Elements.

    Beachten Sie, dass, wenn das Ziel-Element nicht Teil des aktuellen SVG-Dokumentfragments ist, das Entfernen abhängig von der Zielsprache ist.

    _Standardwert_: `none`; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Beispiele

### Verwerfen ausgelöst am Ende einer Animation

Dieses Beispiel zeigt, wie das `<discard>` Element mit einer Aktivierung, die auf dem Abschluss einer Animation basiert, verwendet werden könnte.
Das SVG basiert auf Erik Dahlströms "Loading bar" SVG unter http://xn--dahlstrm-t4a.net/svg/smil/svgt12_discard.svg.

Das SVG definiert ein "Laden abgeschlossen" {{svgelement("text")}} Element, das durch ein {{svgelement("g")}} Element verborgen wird.

Das `<rect>` wird über eine Dauer von 4 Sekunden bis zum Ende des Balkens durch die Animation mit der ID "barAnim" animiert.
Das `<g>` Element enthält ein Discard-Element, das durch den Abschluss der "barAnim" Animation ausgelöst wird: `<discard begin="barAnim.end" />`.
Wenn dies aktiviert wird, werden das `<g>` Element und all seine Inhalte aus dem DOM verworfen, sodass nur der Textblock, der "Laden abgeschlossen" anzeigt, übrig bleibt.

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

Das untenstehende Live-Beispiel zeigt das obenstehende SVG im oberen Bild, während das zweite Bild dieselbe SVG-Datei ist, jedoch ohne die `<discard>` Elemente (in Browsern, die das discard Element nicht unterstützen, verhalten sich beide Bilder gleich).

Im oberen Bild (in Browsern, die das `<discard>` Element unterstützen) verschwinden der Balken und alles andere im `<g>` Element, nachdem der Balken das Ende erreicht hat, und wird verworfen, sodass nur der "Laden abgeschlossen" Text bleibt.
Der Fortschrittsbalken im unteren Bild kehrt einfach in seinen Anfangszustand nach Abschluss der Animation zurück, und der "Laden abgeschlossen" Text wird nie angezeigt.

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

Dieses Beispiel zeigt, wie das `<discard>` Element mit einer Aktivierung, die auf der Zeit basiert, verwendet werden könnte.

Es ist fast genau dasselbe wie das vorherige Beispiel, der Hauptunterschied besteht darin, dass das Discard-Element nach 5 Sekunden (`<discard begin="5s" />`) ausgelöst wird, anstatt am Ende der Animation (4 Sekunden). Dies entfernt auch die ID aus dem `<animate>` Element, da diese nicht verwendet wird.

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

Das untenstehende Live-Beispiel zeigt das obenstehende SVG im oberen Bild, während das zweite Bild dieselbe SVG-Datei ist, jedoch ohne die `<discard>` Elemente (in Browsern, die das discard Element nicht unterstützen, verhalten sich beide Bilder gleich).

Im oberen Bild (in Browsern, die das `<discard>` Element unterstützen) wird der Balken nach vier Sekunden abgeschlossen und kehrt dann in seinen Anfangszustand zurück.
Eine Sekunde später wird alles im `<g>` Element verschwinden, sodass nur der "Laden abgeschlossen" Text bleibt.
Der Fortschrittsbalken im unteren Bild kehrt einfach in seinen Anfangszustand nach Abschluss der Animation zurück, und der "Laden abgeschlossen" Text wird nie angezeigt.

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
