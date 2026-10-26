---
title: "NavigationHistoryEntry: dispose-Ereignis"
short-title: dispose
slug: Web/API/NavigationHistoryEntry/dispose_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Navigation API")}}

Das **`dispose`**-Ereignis der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle wird ausgelöst, wenn der Eintrag nicht mehr Teil der Liste der Verlaufseinträge ist.

Ein Eintrag wird in folgenden Fällen entfernt:

- Vorwärts-Verlaufseinträge werden gelöscht. Weitere Informationen finden Sie im Beispiel unter [Benachrichtigungen beim Entfernen von Einträgen](https://github.com/wicg/navigation-api#notifications-on-entry-disposal).
- Der Benutzer löscht seinen Browserverlauf über die Einstellungen oder die dafür vorgesehenen Bedienelemente.
- Das Verlaufslimit wird überschritten. Dieses Limit ist nicht festgelegt, Browser begrenzen den Verlauf jedoch in der Regel auf 50 Seiten.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dispose", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
