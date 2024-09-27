---
title: "Notification: dir-Eigenschaft"
short-title: dir
slug: Web/API/Notification/dir
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`dir`** schreibgeschützte Eigenschaft des [`Notification`](/de/docs/Web/API/Notification) Interface zeigt die Textrichtung der Benachrichtigung an, wie sie in der `dir`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktors angegeben ist.

## Wert

Ein String, der die Textrichtung angibt. Mögliche Werte sind:

- `auto`
  - : übernimmt das Verhaltensmuster der Spracheinstellung des Browsers (Standard.)
- `ltr`
  - : Links nach rechts.
- `rtl`
  - : Rechts nach links.

> [!NOTE]
> Die meisten Browser scheinen die expliziten Einstellungen für ltr und rtl zu ignorieren und verwenden stattdessen die allgemeine Browsereinstellung.

## Beispiele

Der folgende Ausschnitt löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird erstellt, dann wird die Benachrichtigung mittels des `Notification()` Konstruktors ausgelöst.

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
