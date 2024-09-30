---
title: "Notification: lang Eigenschaft"
short-title: lang
slug: Web/API/Notification/lang
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte **`lang`**-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt die in der Benachrichtigung verwendete Sprache an, wie sie in der `lang`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben ist.

Die Sprache selbst wird mithilfe eines Strings spezifiziert, der ein Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} darstellt. Siehe die Sitepoint-Seite [ISO 2 Letter Language Codes](https://www.sitepoint.com/iso-2-letter-language-codes/) für eine einfache Referenz.

## Wert

Ein String, der das Sprach-Tag angibt.

## Beispiele

Das folgende Snippet löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird erstellt, und dann wird die Benachrichtigung mithilfe des `Notification()`-Konstruktors ausgelöst.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  lang: "en-US",
};

const n = new Notification("New review activity", options);

console.log(n.lang); // "en-US"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
