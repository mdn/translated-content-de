---
title: "Benachrichtigung: Daten-Eigenschaft"
short-title: data
slug: Web/API/Notification/data
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte **`data`**-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt einen strukturierten Klon der Benachrichtigungsdaten zurück, wie sie in der `data`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben sind.

Die Daten der Benachrichtigung können beliebige Daten sein, die Sie mit der Benachrichtigung verknüpfen möchten.

## Wert

Ein strukturierter Klon.

## Beispiele

Der folgende Codeausschnitt löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird erstellt, und dann wird die Benachrichtigung mit dem `Notification()`-Konstruktor ausgelöst.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  data: {
    url: "https://example.com/review/12345",
    status: "open",
  },
};

const n = new Notification("New review activity", options);

console.log(n.data); // Logs the data object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
