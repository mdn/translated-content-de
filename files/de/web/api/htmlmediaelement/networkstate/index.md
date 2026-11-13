---
title: "HTMLMediaElement: networkState-Eigenschaft"
short-title: networkState
slug: Web/API/HTMLMediaElement/networkState
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`networkState`** der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt den aktuellen Status des Abrufs von Medien über das Netzwerk an.

## Wert

Ein `unsigned short`. Mögliche Werte sind:

| Konstante           | Wert | Beschreibung                                                                                     |
| ------------------- | ---- | ------------------------------------------------------------------------------------------------ |
| `NETWORK_EMPTY`     | 0    | Es sind noch keine Daten vorhanden. Außerdem ist `readyState` gleich `HAVE_NOTHING`.             |
| `NETWORK_IDLE`      | 1    | HTMLMediaElement ist aktiv und hat eine Ressource ausgewählt, verwendet aber das Netzwerk nicht. |
| `NETWORK_LOADING`   | 2    | Der Browser lädt HTMLMediaElement-Daten herunter.                                                |
| `NETWORK_NO_SOURCE` | 3    | Es wurde keine HTMLMediaElement-src gefunden.                                                    |

## Beispiele

Dieses Beispiel wartet darauf, dass das Audioelement mit der Wiedergabe beginnt, und prüft dann, ob noch Daten geladen werden.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, in der die Eigenschaft `HTMLMediaElement.networkState` definiert ist
