---
title: "Benachrichtigung: lang-Eigenschaft"
short-title: lang
slug: Web/API/Notification/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`lang`** schreibgeschützte Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt die in der Benachrichtigung verwendete Sprache an, wie sie in der `lang`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben ist.

Die Sprache selbst wird durch einen String dargestellt, der ein {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} repräsentiert.

## Wert

Ein String, der das Sprach-Tag angibt.

## Beispiele

Das folgende Beispiel löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird erstellt, dann wird die Benachrichtigung unter Verwendung des `Notification()`-Konstruktors ausgelöst.

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
