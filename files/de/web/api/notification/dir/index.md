---
title: "Notification: dir-Eigenschaft"
short-title: dir
slug: Web/API/Notification/dir
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`dir`**-Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt die Textrichtung der Benachrichtigung an, wie sie in der `dir`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben ist.

## Wert

Ein String, der die Textrichtung angibt. Mögliche Werte sind:

- `auto`
  - : übernimmt das Sprachverhalten des Browsers (die Standardeinstellung).
- `ltr`
  - : von links nach rechts.
- `rtl`
  - : von rechts nach links.

> [!NOTE]
> Die meisten Browser scheinen explizite ltr- und rtl-Einstellungen zu ignorieren und folgen einfach der browserweiten Einstellung.

## Beispiele

Der folgende Code-Snippet löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird erstellt, und dann wird die Benachrichtigung mit dem `Notification()`-Konstruktor ausgelöst.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  dir: "rtl",
};

const n = new Notification("New review activity", options);

console.log(n.dir); // "rtl"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
