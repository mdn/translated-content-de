---
title: "Notification: lang-Eigenschaft"
short-title: lang
slug: Web/API/Notification/lang
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`lang`**-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die in der Benachrichtigung verwendete Sprache angibt, wie sie in der `lang`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors spezifiziert ist.

Die Sprache selbst wird mittels eines Strings definiert, der einen Sprachcode gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} repräsentiert. Siehe die Sitepoint-Seite [ISO 2-Buchstaben-Sprachcodes](https://www.sitepoint.com/iso-2-letter-language-codes/) für eine einfache Referenz.

## Wert

Ein String, der den Sprachcode angibt.

## Beispiele

Der folgende Codeausschnitt löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird erstellt, dann wird die Benachrichtigung mit dem `Notification()`-Konstruktor ausgelöst.

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
