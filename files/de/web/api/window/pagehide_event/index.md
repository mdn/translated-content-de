---
title: "Window: pagehide Ereignis"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("HTML DOM")}}

Das **`pagehide`** Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser die aktuelle Seite verbirgt, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.

Beispielsweise erhält die aktuelle Seite ein `pagehide` Ereignis, bevor die vorherige Seite angezeigt wird, wenn der Benutzer auf die Zurück-Schaltfläche des Browsers klickt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pagehide", (event) => { })

onpagehide = (event) => { }
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Ereignishandler-Aliase

Zusätzlich zur `Window` Schnittstelle ist die Ereignishandler-Eigenschaft `onpagehide` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Anmerkungen zur Verwendung

Wie die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event) und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) wird dieses Ereignis von Browsern, insbesondere auf mobilen Geräten, nicht zuverlässig ausgelöst. Beispielsweise wird das `pagehide` Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Im Gegensatz zu den Ereignissen `unload` und `beforeunload` ist dieses Ereignis jedoch mit dem [back/forward cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, sodass das Hinzufügen eines Listeners zu diesem Ereignis nicht verhindert, dass die Seite in den bfcache aufgenommen wird.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das `pagehide` Ereignis die nächstbeste Alternative.

Wenn Sie speziell versuchen, das Entladen von Seiten zu erkennen, ist das `pagehide` Ereignis die beste Option.

Siehe den [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) Leitfaden für weitere Informationen darüber, wie sich dieses Ereignis auf andere Ereignisse im Seitenlebenszyklus bezieht.

## Beispiele

In diesem Beispiel wird ein Ereignishandler eingerichtet, der auf `pagehide` Ereignisse achtet und eine spezielle Handhabung vornimmt, wenn die Seite für eine mögliche Wiederverwendung gespeichert wird.

```js
window.addEventListener("pagehide", (event) => {
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
});
```

Dies kann auch unter Verwendung der `onpagehide` Ereignishandler-Eigenschaft auf dem [`Window`](/de/docs/Web/API/Window) geschrieben werden:

```js
window.onpagehide = (event) => {
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignis.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Empfehlungen zur Handhabung des Seitenlebenszyklusverhaltens in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die sich mit browserübergreifenden Inkonsistenzen im Seitenlebenszyklusverhalten befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Rückwärts-/Vorwärts-Cache ist und seine Auswirkungen auf verschiedene Seitenlebenszyklusereignisse.
