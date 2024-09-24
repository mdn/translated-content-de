---
title: "Benachrichtigung: lang-Eigenschaft"
short-title: lang
slug: Web/API/Notification/lang
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lang`** der
{{domxref("Notification")}}-Schnittstelle gibt die in der Benachrichtigung verwendete Sprache an,
wie im `lang`-Optionsfeld des
{{domxref("Notification.Notification","Notification()")}}-Konstruktors angegeben.

Die Sprache selbst wird durch einen String repräsentiert, der ein Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} darstellt.
Sehen Sie sich die Sitepoint-Seite zu den [ISO-2-Buchstaben-Sprachcodes](https://www.sitepoint.com/iso-2-letter-language-codes/) für eine einfache Referenz an.

## Wert

Ein String, der das Sprach-Tag angibt.

## Beispiele

Das folgende Beispiel löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird erstellt, und dann wird die Benachrichtigung mit dem `Notification()`-Konstruktor ausgelöst.

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
