---
title: "MouseEvent: relatedTarget-Eigenschaft"
short-title: relatedTarget
slug: Web/API/MouseEvent/relatedTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.relatedTarget`** ist das sekundäre Ziel für das Mausereignis, falls eines vorhanden ist.

Das bedeutet:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Ereignisname</th>
      <th><code>target</code></th>
      <th><code>relatedTarget</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Element/mouseenter_event", "mouseenter")}}</td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät betreten hat
      </td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät verlassen hat
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element/mouseleave_event", "mouseleave")}}</td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät verlassen hat
      </td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät betreten hat
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element/mouseout_event", "mouseout")}}</td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät verlassen hat
      </td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät betreten hat
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element/mouseover_event", "mouseover")}}</td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät betreten hat
      </td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät verlassen hat
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement/dragenter_event", "dragenter")}}</td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät betreten hat
      </td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät verlassen hat
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement/dragleave_event", "dragleave")}}</td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät verlassen hat
      </td>
      <td>
        Das {{domxref("EventTarget")}}, das das Zeigegerät betreten hat
      </td>
    </tr>
  </tbody>
</table>

Bei Ereignissen ohne sekundäres Ziel gibt `relatedTarget` `null` zurück.

{{domxref("FocusEvent.relatedTarget")}} ist eine ähnliche Eigenschaft für Fokusereignisse.

## Wert

Ein {{domxref("EventTarget")}}-Objekt oder `null`.

## Beispiele

Versuchen Sie, den Mauszeiger in die roten und blauen Felder hinein und heraus zu bewegen.

### HTML

```html
<body id="body">
  <div id="outer">
    <div id="red"></div>
    <div id="blue"></div>
  </div>
  <p id="log"></p>
</body>
```

### CSS

```css
#outer {
  width: 250px;
  height: 125px;
  display: flex;
}

#red {
  flex-grow: 1;
  background: red;
}

#blue {
  flex-grow: 1;
  background: blue;
}

#log {
  max-height: 120px;
  overflow-y: scroll;
}
```

### JavaScript

```js
const mouseoutLog = document.getElementById("log"),
  red = document.getElementById("red"),
  blue = document.getElementById("blue");

red.addEventListener("mouseover", overListener);
red.addEventListener("mouseout", outListener);
blue.addEventListener("mouseover", overListener);
blue.addEventListener("mouseout", outListener);

function outListener(event) {
  let related = event.relatedTarget ? event.relatedTarget.id : "unknown";

  mouseoutLog.innerText = `\nfrom ${event.target.id} into ${related} ${mouseoutLog.innerText}`;
}

function overListener(event) {
  let related = event.relatedTarget ? event.relatedTarget.id : "unknown";

  mouseoutLog.innerText = `\ninto ${event.target.id} from ${related} ${mouseoutLog.innerText}`;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 700, 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("MouseEvent") }}
