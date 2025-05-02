---
title: "Dokument: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `visibilitychange`-Ereignis wird am Dokument ausgelöst, wenn der Inhalt seines Tabs sichtbar wird oder verborgen wird.

Das Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("visibilitychange", (event) => { })

onvisibilitychange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Das Ereignis enthält nicht den aktualisierten Sichtbarkeitsstatus des Dokuments, aber Sie können diese Information aus der [`visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft des Dokuments abrufen.

Dieses Ereignis wird mit einem `visibilityState` von `hidden` ausgelöst, wenn ein Benutzer zu einer neuen Seite navigiert, Tabs wechselt, den Tab schließt, den Browser minimiert oder schließt oder auf mobilen Geräten vom Browser zu einer anderen App wechselt. Der Übergang zu `hidden` ist das letzte Ereignis, das zuverlässig von der Seite beobachtbar ist, daher sollten Entwickler es als das wahrscheinliche Ende der Benutzersitzung behandeln (zum Beispiel zum [Senden von Analysedaten](/de/docs/Web/API/Navigator/sendBeacon)).

Der Übergang zu `hidden` ist auch ein guter Zeitpunkt, an dem Seiten aufhören können, UI-Aktualisierungen vorzunehmen und alle Aufgaben zu stoppen, die der Benutzer nicht im Hintergrund laufen lassen möchte.

## Beispiele

### Musik pausieren beim Übergang zu versteckt

Dieses Beispiel pausiert die Wiedergabe von Audio, wenn die Seite versteckt wird und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird.
Ein vollständiges Beispiel finden Sie in der Dokumentation [Page Visibility API: Pausing audio on page hide](/de/docs/Web/API/Page_Visibility_API#pausing_audio_on_page_hide).

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

### Senden von Analysedaten am Ende der Sitzung beim Übergang zu versteckt

Dieses Beispiel behandelt den Übergang zu `hidden` als das Ende der Benutzersitzung und sendet die entsprechenden Analysedaten mit der [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
API:

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
- [Verlieren Sie nicht den Benutzer- und App-Status, verwenden Sie die Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` verwenden sollten, nicht `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) gibt Best-Practice-Anweisungen zum Umgang mit dem Verhalten des Seitenlebenszyklus in Ihren Webanwendungen.
