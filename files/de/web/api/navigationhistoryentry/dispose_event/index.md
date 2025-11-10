---
title: "NavigationHistoryEntry: dispose-Ereignis"
short-title: dispose
slug: Web/API/NavigationHistoryEntry/dispose_event
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`dispose`**-Ereignis der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle wird ausgelöst, wenn der Eintrag nicht mehr Teil der Verlaufseintragsliste ist.

Eine Entsorgung erfolgt, wenn:

- Vordere Verlaufseinträge gelöscht werden. Weitere Informationen finden Sie im Beispiel unter [Benachrichtigungen zur Entsorgung von Einträgen](https://github.com/wicg/navigation-api#notifications-on-entry-disposal).
- Der Benutzer seinen Browserverlauf über Einstellungen oder bereitgestellte UI-Steuerelemente löscht.
- Das Verlaufsmaximum überschritten wird. Dies ist nirgendwo spezifiziert, aber Browser neigen dazu, ein Verlaufsmaximum von 50 Seiten zu haben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
