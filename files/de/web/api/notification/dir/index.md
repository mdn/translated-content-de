---
title: "Benachrichtigung: dir-Eigenschaft"
short-title: dir
slug: Web/API/Notification/dir
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`dir`**-Eigenschaft der {{domxref("Notification")}}-Schnittstelle gibt die Textrichtung der Benachrichtigung an, wie sie in der `dir`-Option des {{domxref("Notification.Notification","Notification()")}}-Konstruktors spezifiziert ist.

## Wert

Ein String, der die Textrichtung angibt. Mögliche Werte sind:

- `auto`
  - : Übernimmt das Sprachverhalten des Browsers (die Standardeinstellung).
- `ltr`
  - : Links nach rechts.
- `rtl`
  - : Rechts nach links.

> [!NOTE]
> Die meisten Browser scheinen explizite ltr- und rtl-Einstellungen zu ignorieren und verwenden stattdessen die browserweite Einstellung.

## Beispiele

Das folgende Beispiel löst eine Benachrichtigung aus. Ein einfaches `options`-Objekt wird erstellt, dann wird die Benachrichtigung mithilfe des `Notification()`-Konstruktors ausgelöst.

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
