---
title: "Dokument: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef}}

Das `visibilitychange`-Ereignis wird am Dokument ausgelöst, wenn sich dessen Sichtbarkeitsstatus ändert – beispielsweise, wenn ein Benutzer zu einem anderen Browser-Tab wechselt, eine neue Seite aufruft, den Browser minimiert oder schließt oder auf einem Mobilgerät zu einer anderen App wechselt.

Das Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("visibilitychange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onvisibilitychange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Das Ereignis enthält nicht den aktualisierten Sichtbarkeitsstatus des Dokuments. Sie können diese Information jedoch über die Eigenschaft [`visibilityState`](/de/docs/Web/API/Document/visibilityState) des Dokuments abrufen.

Dieses Ereignis wird mit einem `visibilityState` von `hidden` ausgelöst, wenn ein Benutzer eine neue Seite aufruft, den Tab wechselt oder schließt, den Browser minimiert oder schließt oder auf einem Mobilgerät vom Browser zu einer anderen App wechselt. Der Übergang zu `hidden` ist das letzte Ereignis, das die Seite zuverlässig beobachten kann. Entwickler sollten ihn daher als wahrscheinliches Ende der Benutzersitzung behandeln, beispielsweise um [Analysedaten zu senden](/de/docs/Web/API/Navigator/sendBeacon).

Der Übergang zu `hidden` ist auch ein guter Zeitpunkt, um Aktualisierungen der Benutzeroberfläche und Aufgaben anzuhalten, die der Benutzer nicht im Hintergrund weiterlaufen lassen möchte.

## Beispiele

### Musikwiedergabe beim Übergang zu hidden pausieren

Dieses Beispiel pausiert die Audiowiedergabe, wenn die Seite ausgeblendet wird, und setzt sie fort, sobald die Seite wieder sichtbar ist.
Ein vollständiges Beispiel finden Sie in der Dokumentation zur [Page Visibility API: Audiowiedergabe beim Ausblenden der Seite pausieren](/de/docs/Web/API/Page_Visibility_API#pausing_audio_on_page_hide).

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else if (playingOnHide) {
    // Resume playing if audio was "playing on hide"
    audio.play();
  }
});
```

### Analysedaten zum Sitzungsende beim Übergang zu hidden senden

Dieses Beispiel behandelt den Übergang zu `hidden` als Ende der Benutzersitzung und sendet die entsprechenden Analysedaten über die API [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon):

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
- [Benutzer- und Anwendungsstatus nicht verlieren: Page Visibility verwenden](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt ausführlich, warum Sie `visibilitychange` statt `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) bietet Empfehlungen für den Umgang mit dem Seitenlebenszyklus in Ihren Webanwendungen.
