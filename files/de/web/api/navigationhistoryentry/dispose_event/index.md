---
title: "NavigationHistoryEntry: dispose Ereignis"
short-title: dispose
slug: Web/API/NavigationHistoryEntry/dispose_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`dispose`** Ereignis der {{domxref("NavigationHistoryEntry")}} Schnittstelle wird ausgelöst, wenn der Eintrag nicht mehr Teil der Verlaufseintragsliste ist.

Eine Entsorgung erfolgt, wenn:

- Vorwärts-Verlaufseinträge gelöscht werden. Siehe das Beispiel unter [Benachrichtigungen über Eintragsentsorgung](https://github.com/wicg/navigation-api#notifications-on-entry-disposal) für weitere Informationen.
- Der Benutzer seinen Browserverlauf über Einstellungen oder bereitgestellte UI-Kontrollen löscht.
- Das Verlaufslimit überschritten wird. Dies ist nirgends spezifiziert, aber Browser neigen dazu, ein Verlaufslimit von 50 Seiten zu haben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("dispose", (event) => {});

ondispose = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
navigation.addEventListener("currententrychange", () => {
  navigation.currentEntry.addEventListener("dispose", disposeHandler);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
