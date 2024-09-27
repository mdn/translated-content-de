---
title: "Notification: renotify-Eigenschaft"
short-title: renotify
slug: Web/API/Notification/renotify
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`renotify`** schreibgeschützte Eigenschaft des
[`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt an, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat, wie in der `renotify`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

## Wert

Ein boolean-Wert. `false` ist der Standardwert; `true` sorgt dafür, dass die Benachrichtigung den Benutzer erneut benachrichtigt.

## Beispiele

Der folgende Codeausschnitt soll eine Benachrichtigung auslösen, die den Benutzer erneut benachrichtigt, nachdem sie ersetzt wurde; ein einfaches `options`-Objekt wird erstellt und dann wird die Benachrichtigung mithilfe des `Notification()`-Konstruktors ausgelöst.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  renotify: true,
};

const n = new Notification("New review activity", options);

console.log(n.renotify); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
