---
title: "Navigator: contacts-Eigenschaft"
short-title: contacts
slug: Web/API/Navigator/contacts
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Contact Picker API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`contacts`** schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Interface zurück, das es Benutzern ermöglicht, Einträge aus ihrem Kontaktverzeichnis auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

## Wert

Ein [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Objekt. Zwei aufeinanderfolgende Aufrufe geben dasselbe Objekt zurück.

## Beispiele

Der folgende Code prüft, ob die Contact Picker API unterstützt wird.

```javascript
if ("contacts" in navigator) {
  console.log("The Contact Picker API is supported.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Contact Picker für das Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [Ein Contact Picker-Demo auf glitch](https://contact-picker.glitch.me/)
