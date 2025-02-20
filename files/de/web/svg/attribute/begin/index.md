---
title: begin
slug: Web/SVG/Attribute/begin
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{SVGRef}}

Das **`begin`**-Attribut definiert, wann eine Animation beginnen soll.

Der Attributwert ist eine Liste von Werten, die durch ein Semikolon getrennt sind. Die Interpretation einer Liste von Startzeiten ist in der SMIL-Spezifikation im Abschnitt ["Evaluation of begin and end time lists"](https://www.w3.org/TR/smil-animation/#Timing-EvaluationOfBeginEndTimeLists) detailliert beschrieben. Jeder einzelne Wert kann einer der folgenden sein: `<offset-value>`, `<syncbase-value>`, `<event-value>`, `<repeat-value>`, `<accessKey-value>`, `<wallclock-sync-value>` oder das Schlüsselwort `indefinite`.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## animate, animateMotion, animateTransform, set

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `begin`, wann das Element beginnen soll, d.h. aktiv werden soll.

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
  - : Dieser Wert definiert einen [clock-value](/de/docs/Web/SVG/Content_type#clock-value), der einen Zeitpunkt relativ zum Beginn des SVG-Dokuments darstellt (normalerweise das [`load`](/de/docs/Web/API/Window/load_event) oder das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis). Negative Werte sind gültig.
- `<syncbase-value>`

  - : Dieser Wert definiert eine _syncbase_ und einen optionalen Offset von dieser _syncbase_. Die Startzeit der Animation des Elements wird relativ zum Beginn oder aktiven Ende einer anderen Animation definiert.

    Ein gültiger syncbase-value besteht aus einem ID-Referenz zu einem anderen Animationselement, gefolgt von einem Punkt und entweder `begin` oder `end`, um zu identifizieren, ob man sich mit dem Beginn oder dem aktiven Ende des referenzierten Animationselements synchronisieren möchte. Ein optionaler Offset-Wert, wie in `<offset-value>` definiert, kann angehängt werden.

- `<event-value>`

  - : Dieser Wert definiert ein Ereignis und einen optionalen Offset, der bestimmt, zu welchem Zeitpunkt die Animation des Elements beginnen soll. Die Startzeit der Animation wird relativ zu dem Zeitpunkt definiert, zu dem das angegebene Ereignis ausgelöst wird.

    Ein gültiger event-value besteht aus einer Element-ID, gefolgt von einem Punkt und einem der unterstützten Ereignisse für dieses Element. Alle gültigen Ereignisse (nicht unbedingt von allen Elementen unterstützt) sind durch die DOM- und HTML-Spezifikationen definiert. Diese sind:

    - [`focus`](/de/docs/Web/API/Element/focus_event)
    - [`blur`](/de/docs/Web/API/Element/blur_event)
    - [`focusin`](/de/docs/Web/API/Element/focusin_event)
    - [`focusout`](/de/docs/Web/API/Element/focusout_event)
    - [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event)
    - [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
    - [`click`](/de/docs/Web/API/Element/click_event)
    - [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
    - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
    - [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
    - [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
    - [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
    - [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
    - [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
    - [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
    - [`wheel`](/de/docs/Web/API/Element/wheel_event)
    - [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
    - [`input`](/de/docs/Web/API/Element/input_event)
    - [`keydown`](/de/docs/Web/API/Element/keydown_event)
    - [`keyup`](/de/docs/Web/API/Element/keyup_event)
    - [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
    - [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
    - [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
    - [`load`](/de/docs/Web/API/Window/load_event)
    - [`unload`](/de/docs/Web/API/Window/unload_event)
    - [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
    - [`error`](/de/docs/Web/API/HTMLElement/error_event)
    - [`select`](/de/docs/Web/API/HTMLInputElement/select_event)
    - [`resize`](/de/docs/Web/API/Window/resize_event)
    - [`scroll`](/de/docs/Web/API/Element/scroll_event)
    - [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event)
    - [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)
    - [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event)

    Ein optionaler Offset-Wert, wie in `<offset-value>` definiert, kann angehängt werden.

- `<repeat-value>`

  - : Dieser Wert definiert ein qualifiziertes Wiederholereignis. Die Startzeit der Elementanimation wird relativ zu dem Zeitpunkt festgelegt, an dem das Wiederholereignis mit dem angegebenen Iterationswert ausgelöst wird.

    Ein gültiger repeat-value besteht aus einer Element-ID, gefolgt von einem Punkt und der Funktion `repeat()` mit einem ganzzahligen Wert, der die Anzahl der Wiederholungen als Parameter angibt. Ein optionaler Offset-Wert, wie in `<offset-value>` definiert, kann angehängt werden.

- `<accessKey-value>`

  - : Dieser Wert definiert einen Zugangsschlüssel, der die Animation auslösen soll. Die Elementanimation beginnt, wenn der Benutzer die angegebene Taste drückt.

    Ein gültiger accessKey-value besteht aus der Funktion `accessKey()` mit dem einzugebenden Zeichen als Parameter. Ein optionaler Offset-Wert, wie in `<offset-value>` definiert, kann angehängt werden.

- `<wallclock-sync-value>`

  - : Dieser Wert definiert die Startzeit der Animation als Echtzeituhrzeit.

    Ein gültiger wallclock-sync-value besteht aus der Funktion `wallclock()` mit einem Zeitwert als Parameter. Die Zeitsyntax basiert auf der in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) definierten Syntax.

- `indefinite`
  - : Der Beginn der Animation wird durch einen `beginElement()`-Methodenaufruf oder einen auf das Element zielenden Hyperlink bestimmt.

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
  <!-- animated rectangles -->
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
  <!-- animated rectangle -->
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

  <!-- trigger -->
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
  <!-- animated rectangle -->
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

  <!-- grid -->
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
  <!-- animated rectangles -->
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

_Dieses Beispiel ist in einem iFrame eingebettet. Wenn Sie die Tastendruckereignisse aktivieren möchten, müssen Sie zuerst darauf klicken._

[begin-5-accesskey.svg](begin-5-accesskey.svg)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
