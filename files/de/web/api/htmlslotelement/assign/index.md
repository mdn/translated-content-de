---
title: "HTMLSlotElement: Methode assign()"
short-title: assign()
slug: Web/API/HTMLSlotElement/assign
l10n:
  sourceCommit: 8ec7a537a8756184ceb9544220279c186b270f73
---

{{APIRef("Shadow DOM API")}}

Die Methode **`assign()`** des Interfaces [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) setzt die _manuell zugewiesenen Knoten_ des Slots auf eine geordnete Menge von slotfähigen Elementen. Die Menge der manuell zugewiesenen Knoten ist zunächst leer, bis Knoten mit `assign()` zugewiesen werden.

> [!NOTE]
> Manuelle Zuweisungen bestimmen den angezeigten Inhalt des Slots nur, wenn der Schattenbaum mit der Option `slotAssignment: "manual"` [erstellt](/de/docs/Web/API/Element/attachShadow) wurde. In einem Schattenbaum mit benannter (automatischer) Zuweisung aktualisiert der Aufruf von `assign()` weiterhin die manuell zugewiesenen Knoten des Slots, überschreibt jedoch nicht die benannte Zuweisung.

## Syntax

```js-nolint
assign()
assign(node1)
assign(node1, node2)
assign(node1, node2, /* …, */ nodeN)
```

### Parameter

- `node1`, …, `nodeN`
  - : Eine Menge von [`Element`](/de/docs/Web/API/Element)- oder [`Text`](/de/docs/Web/API/Text)-Knoten. Die Übergabe von null Argumenten leert die manuell zugewiesenen Knoten des Slots, und sein Fallback-Inhalt wird angezeigt. Fallback-Inhalt wird auch angezeigt, wenn keine Knoten zugewiesen wurden oder alle zugewiesenen Knoten aus dem Schatten-Host entfernt wurden.

    Das Entfernen eines Knotens aus dem Schatten-Host erhält seine manuelle Zuweisung, sodass das erneute Einfügen in den Host seine Slot-Zuweisung wiederherstellt, sofern die manuelle Zuweisung nicht mit `assign()` geändert wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zugewiesene Knoten und Fallback-Inhalt anzeigen

In diesem Beispiel wird die Methode `assign()` verwendet, um eines von zwei Panels anzuzeigen. Klicken Sie auf eine Panel-Schaltfläche, um dieses Panel dem Slot zuzuweisen, oder klicken Sie auf „Fallback anzeigen“, um die Zuweisung zu löschen und den Fallback-Inhalt des Slots anzuzeigen. Das Wechseln zwischen Panels oder das Löschen der Zuweisung entfernt die Panels nicht aus dem Schatten-Host.

Um das Löschen einer Zuweisung mit dem Entfernen eines Knotens zu vergleichen, zeigen Sie zunächst ein Panel an und klicken Sie dann auf „Zugewiesenes Panel entfernen“. Dadurch wird das Panel aus dem Schatten-Host entfernt, ohne `assign()` aufzurufen. Der Fallback-Inhalt sollte automatisch erscheinen. Wenn Sie zuerst auf eine andere Schaltfläche klicken, werden alle entfernten Panels wieder im Schatten-Host eingefügt.

#### HTML

```html
<div>
  <button id="show-first">Show first panel</button>
  <button id="show-second">Show second panel</button>
  <button id="show-fallback">Show fallback</button>
  <button id="remove-panel">Remove assigned panel</button>
</div>

<div id="panels">
  <tab-panel><p>This is the first panel.</p></tab-panel>
  <tab-panel><p>This is the second panel.</p></tab-panel>
</div>
```

#### JavaScript

```js
function updateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll("tab-panel");
  if (panels.length && tabIdx && tabIdx <= panels.length) {
    slot.assign(panels[tabIdx - 1]);
  } else {
    // Clear any previous assignment to display the slot's fallback content.
    slot.assign();
  }
}

const host = document.querySelector("#panels");
const panels = host.querySelectorAll("tab-panel");
const shadow = host.attachShadow({
  mode: "open",
  slotAssignment: "manual",
});
shadow.innerHTML = `
  <slot>
    <p>This is the fallback content. No panel is assigned.</p>
  </slot>
`;
const slot = shadow.querySelector("slot");

function restorePanels() {
  for (let i = panels.length - 1; i >= 0; i--) {
    if (panels[i].parentNode !== host) {
      host.insertBefore(panels[i], panels[i + 1] ?? null);
    }
  }
}

document.querySelector("#show-first").addEventListener("click", () => {
  restorePanels();
  updateDisplayTab(host, 1);
});

document.querySelector("#show-second").addEventListener("click", () => {
  restorePanels();
  updateDisplayTab(host, 2);
});

document.querySelector("#show-fallback").addEventListener("click", () => {
  restorePanels();
  updateDisplayTab(host, 0);
});

document.querySelector("#remove-panel").addEventListener("click", () => {
  for (const panel of slot.assignedNodes()) {
    // Remove the node without clearing its manual assignment.
    panel.remove();
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Displaying assigned nodes and fallback content", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
