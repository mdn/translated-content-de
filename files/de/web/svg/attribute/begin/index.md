---
title: begin
slug: Web/SVG/Attribute/begin
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{SVGRef}}

Das **`begin`**-Attribut definiert, wann eine Animation beginnen soll.

Der Attributwert ist eine durch Semikolon getrennte Liste von Werten. Die Interpretation einer Liste von Startzeiten wird in der SMIL-Spezifikation in ["Evaluation of begin and end time lists"](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-EvaluationOfBeginEndTimeLists) detailliert beschrieben. Jeder einzelne Wert kann einer der folgenden sein: `<offset-value>`, `<syncbase-value>`, `<event-value>`, `<repeat-value>`, `<accessKey-value>`, `<wallclock-sync-value>` oder das Schlüsselwort `indefinite`.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## animate, animateMotion, animateTransform, set

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, und {{SVGElement("set")}} definiert `begin`, wann das Element beginnen, d.h. aktiv werden soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;begin-value-list></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0s</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

Die `<begin-value-list>` ist eine durch Semikolon getrennte Liste von Werten. Jeder Wert kann einer der folgenden sein:

- `<offset-value>`
  - : Dieser Wert definiert einen [clock-value](/de/docs/Web/SVG/Content_type#clock-value), der einen Zeitpunkt relativ zum Beginn des SVG-Dokuments repräsentiert (gewöhnlich das {{domxref("Window/load_event", "load")}}- oder {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignis). Negative Werte sind gültig.
- `<syncbase-value>`

  - : Dieser Wert definiert eine _syncbase_ und einen optionalen Offset von dieser _syncbase_. Die Animationsstartzeit des Elements wird relativ zum Beginn oder aktiven Ende einer anderen Animation definiert.

    Ein gültiger syncbase-Wert besteht aus einer ID-Referenz zu einem anderen Animationselement, gefolgt von einem Punkt und entweder `begin` oder `end`, um zu identifizieren, ob mit dem Beginn oder dem aktiven Ende des referenzierten Animationselements synchronisiert werden soll. Ein optionaler Offset-Wert, wie in `<offset-value>` definiert, kann angefügt werden.

- `<event-value>`

  - : Dieser Wert definiert ein Ereignis und einen optionalen Offset, der bestimmt, zu welcher Zeit die Animation des Elements beginnen soll. Die Animationsstartzeit wird relativ zu dem Zeitpunkt definiert, zu dem das spezifizierte Ereignis ausgelöst wird.

    Ein gültiger event-Wert besteht aus einer Element-ID, gefolgt von einem Punkt und einem der unterstützten Ereignisse für dieses Element. Alle gültigen Ereignisse (nicht unbedingt von allen Elementen unterstützt) sind durch die DOM- und HTML-Spezifikationen definiert. Diese sind:

    - {{domxref("Element/focus_event", "focus")}}
    - {{domxref("Element/blur_event", "blur")}}
    - {{domxref("Element/focusin_event", "focusin")}}
    - {{domxref("Element/focusout_event", "focusout")}}
    - {{domxref("Element/DOMActivate_event", "DOMActivate")}}
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
    - {{domxref("Element/wheel_event","wheel")}}
    - {{domxref("Element/beforeinput_event", "beforeinput")}}
    - {{domxref("Element/input_event", "input")}}
    - {{domxref("Element/keydown_event", "keydown")}}
    - {{domxref("Element/keyup_event", "keyup")}}
    - {{domxref("Element/compositionstart_event", "compositionstart")}}
    - {{domxref("Element/compositionupdate_event", "compositionupdate")}}
    - {{domxref("Element/compositionend_event", "compositionend")}}
    - {{domxref("Window/load_event", "load")}}
    - {{domxref("Window/unload_event", "unload")}}
    - {{domxref("HTMLMediaElement/abort_event", "abort")}}
    - {{domxref("HTMLElement/error_event", "error")}}
    - {{domxref("HTMLInputElement/select_event", "select")}}
    - {{domxref("Window/resize_event", "resize")}}
    - {{domxref("Element/scroll_event", "scroll")}}
    - {{domxref("SVGAnimationElement/beginEvent_event", "beginEvent")}}
    - {{domxref("SVGAnimationElement/endEvent_event", "endEvent")}}
    - {{domxref("SVGAnimationElement/repeatEvent_event", "repeatEvent")}}

    Ein optionaler Offset-Wert, wie in `<offset-value>` definiert, kann angefügt werden.

- `<repeat-value>`

  - : Dieser Wert definiert ein qualifiziertes Wiederholungsereignis. Die Animationsstartzeit des Elements wird relativ zu dem Zeitpunkt definiert, an dem das Wiederholungsereignis mit dem angegebenen Iterationswert ausgelöst wird.

    Ein gültiger repeat-Wert besteht aus einer Element-ID, gefolgt von einem Punkt und der Funktion `repeat()` mit einem ganzzahligen Wert, der die Anzahl der Wiederholungen als Parameter angibt. Ein optionaler Offset-Wert, wie in `<offset-value>` definiert, kann angefügt werden.

- `<accessKey-value>`

  - : Dieser Wert definiert eine Zugriffstaste, die die Animation auslösen soll. Die Animation des Elements beginnt, wenn der Benutzer die angegebene Taste drückt.

    Ein gültiger accessKey-Wert besteht aus der Funktion `accessKey()` mit dem einzugebenden Zeichen als Parameter. Ein optionaler Offset-Wert, wie in `<offset-value>` definiert, kann angefügt werden.

- `<wallclock-sync-value>`

  - : Dieser Wert definiert die Animationsstartzeit als eine Echtzeituhrzeit.

    Ein gültiger wallclock-sync-Wert besteht aus der Funktion `wallclock()` mit einem Zeitwert als Parameter. Die Zeitsyntax basiert auf der in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) definierten Syntax.

- `indefinite`
  - : Der Beginn der Animation wird durch einen Aufruf der Methode `beginElement()` oder einen Hyperlink, der auf das Element gerichtet ist, bestimmt.

## Beispiele

### Offset-Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- animierte Rechtecke -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="100"
      begin="0s"
      dur="8s"
      fill="freeze" />
  </rect>

  <rect x="35" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="75"
      begin="2s"
      dur="6s"
      fill="freeze" />
  </rect>

  <rect x="60" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      begin="4s"
      dur="4s"
      fill="freeze" />
  </rect>

  <!-- Raster -->
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

[begin-1-offset.svg](begin-1-offset.svg)

### Syncbase-Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animierte Rechtecke -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      id="first"
      begin="0s;third.end"
      dur="4s" />
  </rect>

  <rect x="60" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="25"
      id="second"
      begin="first.end"
      dur="2s" />
  </rect>

  <rect x="85" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="25"
      id="third"
      begin="second.end"
      dur="2s" />
  </rect>

  <!-- Raster -->
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

{{EmbedLiveSample('Syncbase_example', '100%', 130)}}

[begin-2-syncbase.svg](begin-2-syncbase.svg)

### Ereignis-Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animiertes Rechteck -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="startButton.click"
      dur="8s"
      fill="freeze" />
  </rect>

  <!-- Auslöser -->
  <rect
    id="startButton"
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
    Klick hier.
  </text>

  <!-- Raster -->
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

[begin-3-event.svg](begin-3-event.svg)

### Wiederholungs-Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animiertes Rechteck -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      id="myLoop"
      begin="0s;myLoop.end"
      dur="4s"
      repeatCount="3" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="green"
      begin="myLoop.begin" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="gold"
      begin="myLoop.repeat(1)" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="red"
      begin="myLoop.repeat(2)" />
  </rect>

  <!-- Raster -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">1s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">2s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">3s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">4s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Repeat_example', '100%', 130)}}

[begin-4-repeat.svg](begin-4-repeat.svg)

### Accesskey-Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animierte Rechtecke -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="accessKey(s)"
      dur="8s"
      fill="freeze" />
  </rect>

  <!-- Auslöser -->
  <text x="60" y="80" text-anchor="middle" style="pointer-events:none;">
    Drücken Sie die "s"-Taste
  </text>

  <!-- Raster -->
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

_Dieses Beispiel ist in einem iFrame eingebettet. Wenn Sie die Tastaturereignisse aktivieren möchten, müssen Sie zuerst darauf klicken._

[begin-5-accesskey.svg](begin-5-accesskey.svg)

## Spezifikationen

{{Specifications}}
