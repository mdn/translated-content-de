---
title: "MouseEvent: relatedTarget-Eigenschaft"
short-title: relatedTarget
slug: Web/API/MouseEvent/relatedTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.relatedTarget`** ist das sekundäre Ziel für das Mausereignis, falls vorhanden.

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
      <td>[`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)</td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), in das das Zeigegerät eingetreten ist
      </td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), aus dem das Zeigegerät herausgegangen ist
      </td>
    </tr>
    <tr>
      <td>[`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)</td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), aus dem das Zeigegerät herausgegangen ist
      </td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), in das das Zeigegerät eingetreten ist
      </td>
    </tr>
    <tr>
      <td>[`mouseout`](/de/docs/Web/API/Element/mouseout_event)</td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), aus dem das Zeigegerät herausgegangen ist
      </td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), in das das Zeigegerät eingetreten ist
      </td>
    </tr>
    <tr>
      <td>[`mouseover`](/de/docs/Web/API/Element/mouseover_event)</td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), in das das Zeigegerät eingetreten ist
      </td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), aus dem das Zeigegerät herausgegangen ist
      </td>
    </tr>
    <tr>
      <td>[`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)</td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), in das das Zeigegerät eingetreten ist
      </td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), aus dem das Zeigegerät herausgegangen ist
      </td>
    </tr>
    <tr>
      <td>[`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)</td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), aus dem das Zeigegerät herausgegangen ist
      </td>
      <td>
        Das [`EventTarget`](/de/docs/Web/API/EventTarget), in das das Zeigegerät eingetreten ist
      </td>
    </tr>
  </tbody>
</table>

Für Ereignisse ohne sekundäres Ziel gibt `relatedTarget`
`null` zurück.

[`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget) ist eine ähnliche Eigenschaft für Fokuserignisse.

## Wert

Ein [`EventTarget`](/de/docs/Web/API/EventTarget)-Objekt oder `null`.

## Beispiele

Versuchen Sie, den Mauszeiger in die roten und blauen Kästchen hinein und heraus zu bewegen.

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

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
