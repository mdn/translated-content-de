---
title: "HTMLMediaElement: networkState-Eigenschaft"
short-title: networkState
slug: Web/API/HTMLMediaElement/networkState
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.networkState`**-Eigenschaft gibt den aktuellen Status des Abrufs von Medien über das Netzwerk an.

## Wert

Ein `unsigned short`. Mögliche Werte sind:

| Konstante           | Wert  | Beschreibung                                                                           |
| ------------------- | ----- | ------------------------------------------------------------------------------------- |
| `NETWORK_EMPTY`     | 0     | Es sind noch keine Daten vorhanden. Außerdem ist `readyState` auf `HAVE_NOTHING`.     |
| `NETWORK_IDLE`      | 1     | HTMLMediaElement ist aktiv und hat eine Ressource ausgewählt, nutzt aber das Netzwerk nicht. |
| `NETWORK_LOADING`   | 2     | Der Browser lädt HTMLMediaElement-Daten herunter.                                     |
| `NETWORK_NO_SOURCE` | 3     | Keine HTMLMediaElement-Quelle gefunden.                                                   |

## Beispiele

Dieses Beispiel wird das Audio-Element überwachen, um zu beginnen, es abzuspielen, und dann überprüfen, ob es noch Daten lädt.

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("playing", () => {
  if (obj.networkState === 2) {
    // Still loading…
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.networkState`-Eigenschaft zu definieren
