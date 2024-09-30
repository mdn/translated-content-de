---
title: "Window: pagehide-Event"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("HTML DOM")}}

Das **`pagehide`**-Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.

Zum Beispiel erhält die aktuelle Seite ein `pagehide`-Ereignis, bevor die vorherige Seite angezeigt wird, wenn der Benutzer auf die Zurück-Schaltfläche des Browsers klickt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("pagehide", (event) => {});
onpagehide = (event) => {};
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Ereigniseigenschaften

- [`PageTransitionEvent.persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument aus einem Cache geladen wird.

## Ereignishandler-Aliase

Neben der `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onpagehide` auch auf folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Nutzungsnotizen

Ähnlich wie die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event) und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) wird dieses Ereignis von Browsern, insbesondere auf Mobilgeräten, nicht zuverlässig ausgelöst. Zum Beispiel wird das `pagehide`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Im Gegensatz zu den Ereignissen `unload` und `beforeunload` ist dieses Ereignis jedoch mit dem [Back/Forward Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, sodass das Hinzufügen eines Listeners zu diesem Ereignis nicht verhindert, dass die Seite in den bfcache aufgenommen wird.

Das beste Ereignis zur Signalisierung des Endes einer Benutzersitzung ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das `pagehide`-Ereignis die zweitbeste Alternative.

Wenn Sie speziell versuchen, das Ausblenden von Seitenereignissen zu erkennen, ist das `pagehide`-Ereignis die beste Option.

Weitere Informationen darüber, wie dieses Ereignis mit anderen Ereignissen im Seitenlebenszyklus zusammenhängt, finden Sie im [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) Leitfaden.

## Beispiele

In diesem Beispiel wird ein Ereignishandler eingerichtet, um auf `pagehide`-Ereignisse zu achten und eine spezielle Behandlung durchzuführen, wenn die Seite für eine mögliche Wiederverwendung gespeichert wird.

```js
window.addEventListener(
  "pagehide",
  (event) => {
    if (event.persisted) {
      /* the page isn't being discarded, so it can be reused later */
    }
  },
  false,
);
```

Dies kann auch unter Verwendung der `onpagehide`-Ereignishandler-Eigenschaft auf dem [`Window`](/de/docs/Web/API/Window) geschrieben werden:

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

- Das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Richtlinien zur Handhabung des Seitenlebenszyklusverhaltens in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die sich mit plattformübergreifenden Inkonsistenzen im Seitenlebenszyklusverhalten befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward Cache ist und welche Auswirkungen er auf verschiedene Seitenlebenszyklusereignisse hat.
