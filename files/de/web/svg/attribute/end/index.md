---
title: end
slug: Web/SVG/Attribute/end
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{SVGRef}}

Das **`end`**-Attribut definiert einen Endwert für die Animation, der die aktive Dauer begrenzen kann.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;end-value-list></code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

Die `<end-value-list>` ist eine durch Semikolon getrennte Liste von Werten. Jeder Wert kann einer der folgenden sein:

- `<offset-value>`
  - : Dieser Wert definiert einen [clock-value](/de/docs/Web/SVG/Content_type#clock-value), der einen Zeitpunkt relativ zum Beginn des SVG-Dokuments darstellt (normalerweise das {{domxref("SVGElement/load_event", "load")}}- oder {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignis). Negative Werte sind gültig.
- `<syncbase-value>`

  - : Dieser Wert definiert eine _syncbase_ und einen optionalen Offset von dieser _syncbase_. Die Animationseendzeit des Elements wird relativ zum Beginn oder aktiven Ende einer anderen Animation definiert.

    Ein gültiger syncbase-Wert besteht aus einer ID-Referenz zu einem anderen Animationselement, gefolgt von einem Punkt und entweder `begin` oder `end`, um zu identifizieren, ob mit dem Beginn oder aktiven Ende des referenzierten Animationselements synchronisiert werden soll. Ein optionaler Offset-Wert wie im `<offset-value>` kann angehängt werden.

- `<event-value>`

  - : Dieser Wert definiert ein Ereignis und einen optionalen Offset, der bestimmt, wann die Animation des Elements enden soll. Die Animationseendzeit wird relativ zu dem Zeitpunkt definiert, an dem das angegebene Ereignis ausgelöst wird.

    Ein gültiger event-Wert besteht aus einer Element-ID, gefolgt von einem Punkt und einem der unterstützten Ereignisse für dieses Element. Alle gültigen Ereignisse (nicht notwendigerweise von allen Elementen unterstützt) sind durch die DOM- und HTML-Spezifikationen definiert. Diese sind:

    - {{domxref("Element/focus_event", "focus")}}
    - {{domxref("Element/blur_event", "blur")}}
    - {{domxref("Element/focusin_event", "focusin")}}
    - {{domxref("Element/focusout_event", "focusout")}}
    - {{domxref("Element/DOMActivate_event", "activate")}}
    - {{domxref("Element/auxclick_event", "auxclick")}}
    - {{domxref("Element/click_event", "click")}}
    - {{domxref("Element/dblclick_event", "dblclick")}}
    - {{domxref("Element/mousedown_event", "mousedown")}}
    - {{domxref("Element/mouseenter_event", "mouseenter")}}
    - {{domxref("Element/mouseleave_event", "mouseleave")}}
    - {{domxref("Element/mousemove_event", "mousemove")}}
    - {{domxref("Element/mouseout_event", "mouseout")}}
    - {{domxref("Element/mouseover_event", "mouseover")}}
    - {{domxref("Element/mouseup_event", "mouseup")}}
    - {{domxref("Element/wheel_event", "wheel")}}
    - {{domxref("Element/beforeinput_event", "beforeinput")}}
    - {{domxref("Element/input_event", "input")}}
    - {{domxref("Element/keydown_event", "keydown")}}
    - {{domxref("Element/keyup_event", "keyup")}}
    - {{domxref("Element/compositionstart_event", "compositionstart")}}
    - {{domxref("Element/compositionupdate_event", "compositionupdate")}}
    - {{domxref("Element/compositionend_event", "compositionend")}}
    - {{domxref("SVGElement/load_event", "load")}}
    - {{domxref("SVGElement/unload_event", "unload")}}
    - {{domxref("SVGElement/abort_event", "abort")}}
    - {{domxref("HTMLElement/error_event", "error")}}
    - {{domxref("HTMLInputElement/select_event", "select")}}
    - {{domxref("Window/resize_event", "resize")}}
    - {{domxref("Element/scroll_event", "scroll")}}
    - {{domxref("SVGAnimationElement/beginEvent_event", "beginEvent")}}
    - {{domxref("SVGAnimationElement/endEvent_event", "endEvent")}}
    - {{domxref("SVGAnimationElement/repeatEvent_event", "repeatEvent")}}

    Ein optionaler Offset-Wert wie im `<offset-value>` kann angehängt werden.

- `<repeat-value>`

  - : Dieser Wert definiert ein qualifiziertes Wiederholungsereignis. Die Animationseendzeit des Elements wird relativ zu dem Zeitpunkt definiert, zu dem das Wiederholungsereignis mit dem angegebenen Iterationswert ausgelöst wird.

    Ein gültiger Wiederholungswert besteht aus einer Element-ID, gefolgt von einem Punkt und der Funktion `repeat()` mit einem ganzzahligen Wert, der die Anzahl der Wiederholungen als Parameter angibt. Ein optionaler Offset-Wert wie im `<offset-value>` kann angehängt werden.

- `<accessKey-value>`

  - : Dieser Wert definiert einen Accesskey, der das Ende der Animation auslösen soll. Die Animation des Elements endet, wenn der Benutzer die angegebene Taste drückt.

    Ein gültiger accessKey-Wert besteht aus der Funktion `accessKey()` mit dem einzugebenden Zeichen als Parameter. Ein optionaler Offset-Wert wie im `<offset-value>` kann angehängt werden.

- `<wallclock-sync-value>`

  - : Dieser Wert definiert die Animationseendzeit als reale Uhrzeit.

    Ein gültiger wallclock-sync-Wert besteht aus der Funktion `wallclock()` mit einem Zeitwert als Parameter. Die Zeitsyntax basiert auf der im [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) definierten Syntax.

- `indefinite`
  - : Das Ende der Animation wird durch einen Aufruf der Methode {{domxref("SVGAnimationElement.endElement()")}} bestimmt.

## Beispiele

### Offset-Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- animated rectangles -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="100"
      begin="0s"
      end="8s"
      fill="freeze" />
  </rect>

  <rect x="10" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="75"
      begin="0s"
      end="6s"
      fill="freeze" />
  </rect>

  <rect x="10" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      begin="0s"
      end="4s"
      fill="freeze" />
  </rect>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Offset_example', '100%', 130)}}

### Ereignis-Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangle -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="0s"
      end="endButton.click"
      dur="8s"
      repeatCount="indefinite"
      fill="freeze" />
  </rect>

  <!-- trigger -->
  <rect
    id="endButton"
    style="cursor:pointer;"
    x="19.5"
    y="62.5"
    rx="5"
    height="25"
    width="80"
    fill="#EFEFEF"
    stroke="black"
    stroke-width="1" />

  <text x="60" y="80" text-anchor="middle" style="pointer-events:none;">
    Click me.
  </text>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Event_example', '100%', 130)}}

### Accesskey-Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangles -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="0s"
      end="accessKey(e)"
      dur="8s"
      repeatCount="indefinite"
      fill="freeze" />
  </rect>

  <!-- trigger -->
  <text x="60" y="80" text-anchor="middle" style="pointer-events:none;">
    Hit the "s" key
  </text>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Accesskey_example', '100%', 130)}}

_Dieses Beispiel ist in einem iFrame eingebettet. Wenn Sie die Tastenereignisse aktivieren möchten, müssen Sie zuerst darauf klicken._

## Spezifikationen

{{Specifications}}
