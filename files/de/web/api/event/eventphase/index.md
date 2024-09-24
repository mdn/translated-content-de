---
title: "Ereignis: Eigenschaft eventPhase"
short-title: eventPhase
slug: Web/API/Event/eventPhase
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`eventPhase`** schreibgeschützte Eigenschaft der
{{domxref("Event")}} Schnittstelle zeigt an, welche Phase des Ereignisablaufs derzeit
ausgewertet wird.

## Wert

Gibt einen ganzzahligen Wert zurück, der die aktuelle Auswertungsphase des Ereignisablaufs
spezifiziert. Mögliche Werte sind:

- `Event.NONE` (0)
  - : Das Ereignis wird derzeit nicht verarbeitet.
- `Event.CAPTURING_PHASE` (1)
  - : Das Ereignis wird durch die Vorfahrenobjekte des Ziels weitergeleitet.
    Dieser Prozess beginnt beim {{domxref("Window")}}, dann {{domxref("Document")}},
    dann dem {{domxref("HTMLHtmlElement")}}, und so weiter durch die Elemente,
    bis das Elternteil des Ziels erreicht wird.
    {{domxref("EventTarget/addEventListener", "Ereignis-Listener", "", 1)}},
    die für den Erfassungsmodus registriert sind, wenn {{domxref("EventTarget.addEventListener()")}}
    aufgerufen wurde, werden in dieser Phase ausgelöst.
- `Event.AT_TARGET` (2)
  - : Das Ereignis ist bei
    {{domxref("EventTarget", "dem Ziel des Ereignisses", "", 1)}} angekommen.
    In dieser Phase registrierte Ereignis-Listener werden zu diesem Zeitpunkt aufgerufen. Wenn
    {{domxref("Event.bubbles")}} `false` ist, ist die Verarbeitung
    des Ereignisses nach Abschluss dieser Phase abgeschlossen.
- `Event.BUBBLING_PHASE` (3)
  - : Das Ereignis wird in umgekehrter Reihenfolge durch die Vorfahren des Ziels zurück nach oben propagiert,
    beginnend mit dem Elternteil und schließlich bis zum umgebenden {{domxref("Window")}}.
    Dies wird als _Bubbling_ bezeichnet und tritt nur auf, wenn {{domxref("Event.bubbles")}}
    `true` ist. {{domxref("EventTarget/addEventListener", "Ereignis-Listener", "", 1)}} die für diese Phase registriert sind, werden während dieses Prozesses ausgelöst.

## Beispiel

### HTML

```html
<h4>Ereignis-Weitergabe-Kette</h4>
<ul>
  <li>Klicken Sie auf 'd1'</li>
  <li>Analysieren Sie die Ereignis-Weitergabe-Kette</li>
  <li>Klicken Sie auf das nächste div und wiederholen Sie die Erfahrung</li>
  <li>Ändern Sie den Erfassungsmodus</li>
  <li>Wiederholen Sie die Erfahrung</li>
</ul>
<input type="checkbox" id="chCapture" />
<label for="chCapture">Erfassung verwenden</label>
<div id="d1">
  d1
  <div id="d2">
    d2
    <div id="d3">
      d3
      <div id="d4">d4</div>
    </div>
  </div>
</div>
<div id="divInfo"></div>
```

### CSS

```css
div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color: white;
  font-size: 80%;
}
```

### JavaScript

```js
let clear = false;
let divInfo = null;
let divs = null;
let chCapture = null;

window.onload = () => {
  divInfo = document.getElementById("divInfo");
  divs = document.getElementsByTagName("div");
  chCapture = document.getElementById("chCapture");
  chCapture.onclick = () => {
    removeListeners();
    addListeners();
    clearDivs();
  };
  clearDivs();
  addListeners();
};

function removeListeners() {
  for (const div of divs) {
    if (div.id !== "divInfo") {
      div.removeEventListener("click", onDivClick, true);
      div.removeEventListener("click", onDivClick, false);
    }
  }
}

function addListeners() {
  for (const div of divs) {
    if (div.id !== "divInfo") {
      if (chCapture.checked) {
        div.addEventListener("click", onDivClick, true);
      } else {
        div.addEventListener("click", onDivClick, false);
        div.onmousemove = () => {
          clear = true;
        };
      }
    }
  }
}

function onDivClick(e) {
  if (clear) {
    clearDivs();
    clear = false;
  }
  if (e.eventPhase === 2) {
    e.currentTarget.style.backgroundColor = "red";
  }
  const level =
    ["none", "capturing", "target", "bubbling"][e.eventPhase] ?? "error";
  const para = document.createElement("p");
  para.textContent = `${e.currentTarget.id}; eventPhase: ${level}`;
  divInfo.appendChild(para);
}

function clearDivs() {
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id !== "divInfo") {
      divs[i].style.backgroundColor = i % 2 !== 0 ? "#f6eedb" : "#cceeff";
    }
  }
  divInfo.textContent = "";
}
```

### Ergebnis

{{ EmbedLiveSample('Example', '', '700') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
