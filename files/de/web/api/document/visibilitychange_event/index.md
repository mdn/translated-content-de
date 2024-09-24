---
title: "Dokument: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef}}

Das `visibilitychange`-Ereignis wird im Dokument ausgelöst, wenn der Inhalt seines Tabs sichtbar wird oder ausgeblendet wurde.

Das Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Verwendungshinweise

Das Ereignis enthält keinen aktualisierten Sichtbarkeitsstatus des Dokuments, aber Sie können diese Information aus der {{domxref("Document.visibilityState", "visibilityState")}}-Eigenschaft des Dokuments erhalten.

Dieses Ereignis wird mit einem `visibilityState` von `hidden` ausgelöst, wenn ein Benutzer zu einer neuen Seite navigiert, Tabs wechselt, den Tab schließt, den Browser minimiert oder schließt oder auf einem mobilen Gerät vom Browser zu einer anderen App wechselt. Der Übergang zu `hidden` ist das letzte Ereignis, das zuverlässig von der Seite beobachtet werden kann, daher sollten Entwickler es als wahrscheinliches Ende der Benutzersitzung betrachten (zum Beispiel für das [Versenden von Analysedaten](/de/docs/Web/API/Navigator/sendBeacon)).

Der Übergang zu `hidden` ist auch ein guter Zeitpunkt, an dem Seiten die Aktualisierung der Benutzeroberfläche stoppen und alle Aufgaben beenden können, die der Benutzer nicht im Hintergrund laufen haben möchte.

## Beispiele

### Musik pausieren beim Wechsel zu versteckt

Dieses Beispiel pausiert die Wiedergabe von Audio, wenn die Seite ausgeblendet ist, und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird. Ein vollständiges Beispiel finden Sie in der [Dokumentation zur Page Visibility API: Pausieren von Audio bei Seitenversteckung](/de/docs/Web/API/Page_Visibility_API#pausing_audio_on_page_hide).

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else {
    // Wiedergabe fortsetzen, wenn Audio "beim Verstecken gespielt wurde"
    if (playingOnHide) {
      audio.play();
    }
  }
});
```

### Senden von Analyse am Ende der Sitzung beim Wechsel zu versteckt

Dieses Beispiel betrachtet den Übergang zu `hidden` als das Ende der Benutzersitzung und sendet die entsprechenden Analysen mit der {{domxref("Navigator.sendBeacon()")}} API:

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
- {{domxref("Document.visibilityState")}}
- {{domxref("Document.hidden")}}
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) gibt Best-Practice-Ratschläge zum Umgang mit dem Verhalten des Seitenlebenszyklus in Ihren Webanwendungen.
