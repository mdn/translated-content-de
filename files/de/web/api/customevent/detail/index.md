---
title: "CustomEvent: detail-Eigenschaft"
short-title: detail
slug: Web/API/CustomEvent/detail
l10n:
  sourceCommit: 14aec55e57117d0dc4a916112e23d310908e9937
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`detail`**-Eigenschaft der {{domxref("CustomEvent")}}-Schnittstelle gibt alle Daten zurück, die beim Initialisieren des Ereignisses übergeben wurden.

## Wert

Welche Daten auch immer das Ereignis initialisiert wurden.

## Beispiel

```js
// benutzerdefinierte Ereignisse erstellen
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

const element = document.createElement("div"); // ein <div>-Element erstellen

// einen entsprechenden Ereignis-Listener hinzufügen
element.addEventListener("animalfound", (e) => console.log(e.detail.name));

// die Ereignisse auslösen
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);

// "cat" und "dog" werden in der Konsole protokolliert
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CustomEvent")}}
