---
title: "Dokument: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef}}

Das `visibilitychange`-Ereignis wird im Dokument ausgelöst, wenn die Inhalte seines Tabs sichtbar werden oder versteckt wurden.

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

Das Ereignis beinhaltet nicht den aktualisierten Sichtbarkeitsstatus des Dokuments, aber Sie können diese Information von der [`visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft des Dokuments erhalten.

Dieses Ereignis wird mit einem `visibilityState` von `hidden` ausgelöst, wenn ein Benutzer zu einer neuen Seite navigiert, Tabs wechselt, den Tab schließt, den Browser minimiert oder schließt oder, auf Mobilgeräten, vom Browser zu einer anderen App wechselt. Der Übergang zu `hidden` ist das letzte Ereignis, das für die Seite zuverlässig beobachtbar ist, daher sollten Entwickler es als wahrscheinliches Ende der Benutzersitzung betrachten (zum Beispiel für das [Senden von Analysedaten](/de/docs/Web/API/Navigator/sendBeacon)).

Der Übergang zu `hidden` ist auch ein guter Punkt, an dem Seiten die Aktualisierung der Benutzeroberfläche stoppen und Aufgaben beenden können, die der Benutzer nicht im Hintergrund laufen lassen möchte.

## Beispiele

### Musik pausieren beim Übergang zu hidden

Dieses Beispiel pausiert die Wiedergabe von Audio, wenn die Seite verborgen ist, und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird. Für ein vollständiges Beispiel siehe die Dokumentation [Page Visibility API: Pausing audio on page hide](/de/docs/Web/API/Page_Visibility_API#pausing_audio_on_page_hide).

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

### Senden von Sitzungsend-Analyse beim Übergang zu hidden

Dieses Beispiel behandelt den Übergang zu `hidden` als Ende der Benutzersitzung und sendet die entsprechenden Analysen mithilfe der [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)-API:

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
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt ausführlich, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) gibt Leitfäden zu Best Practices im Umgang mit dem Verhalten von Seitenlebenszyklen in Ihren Webanwendungen.
