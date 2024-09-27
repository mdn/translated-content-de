---
title: "Document: visibilitychange Ereignis"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef}}

Das `visibilitychange` Ereignis wird beim Dokument ausgelöst, wenn der Inhalt des Tabs sichtbar geworden ist oder versteckt wurde.

Das Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder definieren Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Anwendungshinweise

Das Ereignis beinhaltet nicht den aktualisierten Sichtbarkeitsstatus des Dokuments, aber diese Information kann aus der [`visibilityState`](/de/docs/Web/API/Document/visibilityState) Eigenschaft des Dokuments entnommen werden.

Dieses Ereignis wird mit einem `visibilityState` von `hidden` ausgelöst, wenn ein Benutzer zu einer neuen Seite navigiert, Tabs wechselt, den Tab schließt, den Browser minimiert oder schließt oder auf einem mobilen Gerät vom Browser zu einer anderen App wechselt. Der Übergang zu `hidden` ist das letzte Ereignis, das von der Seite zuverlässig beobachtet werden kann, daher sollten Entwickler es als das wahrscheinliche Ende der Benutzersitzung betrachten (zum Beispiel zum [Senden von Analysedaten](/de/docs/Web/API/Navigator/sendBeacon)).

Der Übergang zu `hidden` ist auch ein guter Zeitpunkt, an dem Seiten aufhören können, Benutzeroberfläche-Updates vorzunehmen und Aufgaben zu stoppen, die der Benutzer im Hintergrund nicht laufen lassen möchte.

## Beispiele

### Musik pausieren beim Übergang zu versteckt

Dieses Beispiel pausiert das Abspielen von Audio, wenn die Seite versteckt wird, und setzt es fort, wenn die Seite wieder sichtbar wird. Ein vollständiges Beispiel finden Sie in der [Page Visibility API: Pausing audio on page hide](/de/docs/Web/API/Page_Visibility_API#pausing_audio_on_page_hide) Dokumentation.

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

### Senden von End-der-Sitzung-Analytik beim Übergang zu versteckt

Dieses Beispiel behandelt den Übergang zu `hidden` als das Ende der Benutzersitzung und sendet die entsprechenden Analysen unter Verwendung der [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
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
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) bietet Leitfäden für Best Practices im Umgang mit dem Seitenlebenszyklusverhalten in Ihren Webanwendungen.
