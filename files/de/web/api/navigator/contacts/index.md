---
title: "Navigator: contacts-Eigenschaft"
short-title: contacts
slug: Web/API/Navigator/contacts
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Contact Picker API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`contacts`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle zurück, die es Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

## Wert

Ein [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Objekt. Zwei aufeinanderfolgende Aufrufe geben dasselbe Objekt zurück.

## Beispiele

Der folgende Code überprüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Contact Picker für das Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [Ein Contact Picker-Demo auf glitch](https://contact-picker.glitch.me/)
