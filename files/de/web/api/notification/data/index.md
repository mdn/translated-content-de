---
title: "Benachrichtigung: Daten-Eigenschaft"
short-title: Daten
slug: Web/API/Notification/data
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`data`** schreibgeschützte Eigenschaft der
{{domxref("Notification")}} Schnittstelle gibt einen strukturierten Klon der Daten der Benachrichtigung zurück, wie in der `data`-Option des
{{domxref("Notification.Notification","Notification()")}} Konstruktors angegeben.

Die Daten der Benachrichtigung können beliebige Daten sein, die Sie mit der Benachrichtigung verknüpfen möchten.

## Wert

Ein strukturierter Klon.

## Beispiele

Das folgende Beispiel sendet eine Benachrichtigung; ein einfaches `options`-Objekt wird erstellt, und dann wird die Benachrichtigung unter Verwendung des `Notification()` Konstruktors gesendet.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  data: {
    url: "https://example.com/review/12345",
    status: "open",
  },
};

const n = new Notification("New review activity", options);

console.log(n.data); // Gibt das Datenobjekt aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
