---
title: "Navigator: contacts Eigenschaft"
short-title: kontakte
slug: Web/API/Navigator/contacts
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Contact Picker API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`contacts`** schreibgeschützte Eigenschaft der
{{domxref("Navigator")}}-Schnittstelle gibt eine {{domxref('ContactsManager')}}-Schnittstelle zurück,
die es Benutzern ermöglicht, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte
Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

## Wert

Ein {{domxref('ContactsManager')}}-Objekt. Zwei aufeinanderfolgende Aufrufe geben dasselbe Objekt zurück.

## Beispiele

Der folgende Code überprüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Einen Kontakt-Wähler für das Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [Ein Contact Picker-Demo auf Glitch](https://contact-picker.glitch.me/)
