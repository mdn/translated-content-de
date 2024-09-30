---
title: "Document: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef}}

Das `visibilitychange`-Ereignis wird bei dem Dokument ausgelöst, wenn die Inhalte seines Tabs sichtbar geworden sind oder versteckt wurden.

Das Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Das Ereignis beinhaltet nicht den aktualisierten Sichtbarkeitsstatus des Dokuments, aber Sie können diese Information von der [`visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft des Dokuments erhalten.

Dieses Ereignis wird mit einem `visibilityState` von `hidden` ausgelöst, wenn ein Benutzer zu einer neuen Seite navigiert, Tabs wechselt, den Tab schließt, den Browser minimiert oder schließt oder auf einem mobilen Gerät vom Browser zu einer anderen App wechselt. Der Übergang zu `hidden` ist das letzte Ereignis, das von der Seite zuverlässig beobachtet werden kann, daher sollten Entwickler es als wahrscheinliches Ende der Benutzersitzung behandeln (zum Beispiel zum [Senden von Analysedaten](/de/docs/Web/API/Navigator/sendBeacon)).

Der Übergang zu `hidden` ist auch ein guter Zeitpunkt, zu dem Seiten UI-Aktualisierungen stoppen und alle Aufgaben anhalten können, die der Benutzer nicht im Hintergrund ausgeführt haben möchte.

## Beispiele

### Musik beim Wechseln zu verborgen pausieren

Dieses Beispiel pausiert die Wiedergabe von Audio, wenn die Seite verborgen wird und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird.
Für ein vollständiges Beispiel siehe die [Page Visibility API: Pausing audio on page hide](/de/docs/Web/API/Page_Visibility_API#pausing_audio_on_page_hide) Dokumentation.

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else {
    // Resume playing if audio was "playing on hide"
    if (playingOnHide) {
      audio.play();
    }
  }
});
```

### Senden von Sitzungsend-Analysen beim Wechseln zu verborgen

Dieses Beispiel behandelt den Übergang zu `hidden` als das Ende der Benutzersitzung und sendet die entsprechenden Analysen mit der [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)-API:

```js
document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)
- [`Document.hidden`](/de/docs/Web/API/Document/hidden)
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) bietet Best-Practice-Anleitungen zum Umgang mit dem Seitenlebenszyklusverhalten in Ihren Webanwendungen.
