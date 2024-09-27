---
title: "NavigationHistoryEntry: dispose-Ereignis"
short-title: dispose
slug: Web/API/NavigationHistoryEntry/dispose_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`dispose`**-Ereignis der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle wird ausgelöst, wenn der Eintrag nicht mehr Teil der Liste der Historieneinträge ist.

Die Entsorgung erfolgt, wenn:

- Vorwärtsgerichtete Historieneinträge gelöscht werden. Siehe das Beispiel bei [Benachrichtigungen über die Entsorgung von Einträgen](https://github.com/wicg/navigation-api#notifications-on-entry-disposal) für weitere Informationen.
- Der Benutzer seinen Browser-Verlauf über Einstellungen oder bereitgestellte Bedienoberflächen löscht.
- Das Historielimit überschritten wird. Dies ist nirgends spezifiziert, aber Browser haben tendenziell ein Historielimit von 50 Seiten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("dispose", (event) => {});

ondispose = (event) => {};
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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
