---
title: "Navigator: `contacts`-Eigenschaft"
short-title: contacts
slug: Web/API/Navigator/contacts
l10n:
  sourceCommit: f84cdbda4f9c642f57083e013341f170774f0973
---

{{APIRef("Contact Picker API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`contacts`**-Schreibgeschützte Eigenschaft des
[`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Interface zurück,
das es Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

## Wert

Ein [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Objekt. Zwei aufeinanderfolgende Aufrufe geben dasselbe Objekt zurück.

## Beispiele

Der folgende Code prüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Kontakt-Picker für das Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [Contact Picker API Live-Demo](https://mdn.github.io/dom-examples/contact-picker/)
