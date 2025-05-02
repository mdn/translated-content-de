---
title: "NavigationHistoryEntry: dispose Ereignis"
short-title: dispose
slug: Web/API/NavigationHistoryEntry/dispose_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`dispose`** Ereignis des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces wird ausgelöst, wenn der Eintrag nicht mehr Teil der Verlaufslisteneinträge ist.

Die Entsorgung erfolgt, wenn:

- Vorwärtseinträge im Verlauf gelöscht werden. Siehe das Beispiel unter [Benachrichtigungen bei der Entsorgung von Einträgen](https://github.com/wicg/navigation-api#notifications-on-entry-disposal) für weitere Informationen.
- Der Benutzer seinen Browser-Verlauf über Einstellungen oder bereitgestellte UI-Steuerelemente löscht.
- Das Verlaufslimit überschritten wird. Dies ist nirgendwo spezifiziert, aber Browser neigen dazu, ein Verlaufslimit von 50 Seiten zu haben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("dispose", (event) => { })

ondispose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
