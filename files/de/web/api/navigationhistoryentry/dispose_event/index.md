---
title: "NavigationHistoryEntry: dispose-Ereignis"
short-title: dispose
slug: Web/API/NavigationHistoryEntry/dispose_event
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Navigation API")}}

Das **`dispose`**-Ereignis des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces wird ausgelöst, wenn der Eintrag nicht mehr Teil der Verlaufs-Eintragsliste ist.

Die Entsorgung erfolgt, wenn:

- Vorwärts-Verlaufseinträge gelöscht werden. Weitere Informationen finden Sie im Beispiel unter [Benachrichtigungen bei Eintragsentsorgung](https://github.com/wicg/navigation-api#notifications-on-entry-disposal).
- Der Benutzer seinen Browser-Verlauf über die Einstellungen oder bereitgestellte Benutzeroberflächensteuerungen löscht.
- Das Verlaufs-Limit überschritten wird. Dies ist nirgends spezifiziert, aber Browser haben tendenziell ein Verlaufs-Limit von 50 Seiten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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

- [Moderne clientseitige Routenerstellung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
