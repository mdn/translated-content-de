---
title: "Dokument: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 923b4568e8df696bea2c42262619514de118cc6e
---

{{APIRef}}

Das `visibilitychange`-Ereignis wird am Dokument ausgelöst, wenn sich dessen Sichtbarkeitsstatus ändert – zum Beispiel, wenn der Benutzer die Browser-Tabs wechselt, zu einer neuen Seite navigiert, den Browser minimiert oder schließt oder auf Mobilgeräten zu einer anderen App wechselt.

Das Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("visibilitychange", (event) => { })

onvisibilitychange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Nutzungshinweise

Das Ereignis enthält nicht den aktualisierten Sichtbarkeitsstatus des Dokuments, aber Sie können diese Information über die [`visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft des Dokuments erhalten.

Dieses Ereignis wird mit einem `visibilityState` von `hidden` ausgelöst, wenn ein Benutzer zu einer neuen Seite navigiert, Tabs wechselt, den Tab schließt, den Browser minimiert oder schließt oder auf Mobilgeräten vom Browser zu einer anderen App wechselt. Der Übergang zu `hidden` ist das letzte Ereignis, das von der Seite zuverlässig beobachtet werden kann, daher sollten Entwickler es als das wahrscheinliche Ende der Sitzung des Benutzers betrachten (zum Beispiel für das [Senden von Analysedaten](/de/docs/Web/API/Navigator/sendBeacon)).

Der Übergang zu `hidden` ist auch ein guter Zeitpunkt, an dem Seiten das Aktualisieren der Benutzeroberfläche stoppen und Aufgaben beenden können, die der Benutzer nicht im Hintergrund weiterlaufen lassen möchte.

## Beispiele

### Musik pausieren beim Übergang zu `hidden`

Dieses Beispiel pausiert die Wiedergabe von Audio, wenn die Seite ausgeblendet wird, und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird. Für ein vollständiges Beispiel siehe die Dokumentation [Page Visibility API: Audio pausieren beim Verstecken der Seite](/de/docs/Web/API/Page_Visibility_API#pausing_audio_on_page_hide).

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

### Senden von End-of-Session-Analytics beim Übergang zu `hidden`

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
- [Lose nicht Benutzer- und App-Status, verwenden Sie Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) bietet Best-Practice-Leitfaden für den Umgang mit Seitenlebenszyklusverhalten in Ihren Webanwendungen.
