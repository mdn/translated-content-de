---
title: "Window: pagehide-Ereignis"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: 958799789600997855abbdabca7abc8a221b6778
---

{{APIRef("HTML DOM")}}

Das Ereignis **`pagehide`** wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.

Wenn beispielsweise jemand auf die Zurück-Schaltfläche des Browsers klickt, empfängt die aktuelle Seite ein `pagehide`-Ereignis, bevor die vorherige Seite angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("pagehide", (event) => { })

onpagehide = (event) => { }
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Aliase für Event-Handler

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onpagehide` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Wie die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event) und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) wird auch dieses Ereignis von Browsern nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Im folgenden Szenario wird das Ereignis `pagehide` beispielsweise überhaupt nicht ausgelöst:

1. Jemand ruft Ihre Seite auf einem Mobilgerät auf.
2. Anschließend wechselt die Person zu einer anderen App.
3. Später schließt sie den Browser über den App-Manager.

Dieses Ereignis ist jedoch mit dem [Back/Forward-Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel. Das Hinzufügen eines Listeners verhindert daher nicht, dass die Seite im bfcache gespeichert wird.

Das am besten geeignete Ereignis, um das Ende einer Sitzung zu erkennen, ist [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event). In Browsern, die `visibilitychange` nicht unterstützen, ist `pagehide` die nächstbeste Alternative.

Wenn Sie gezielt erkennen möchten, dass eine Seite verlassen wird, ist `pagehide` die beste Wahl.

Weitere Informationen darüber, wie dieses Ereignis mit anderen Ereignissen im Lebenszyklus einer Seite zusammenhängt, finden Sie im Leitfaden zur [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api).

## Beispiele

In diesem Beispiel wird ein Event-Handler eingerichtet, der `pagehide`-Ereignisse überwacht und eine besondere Verarbeitung vornimmt, wenn die Seite zur möglichen Wiederverwendung gespeichert wird.

```js
window.addEventListener("pagehide", (event) => {
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
});
```

Dasselbe lässt sich auch mit der Event-Handler-Eigenschaft `onpagehide` von [`Window`](/de/docs/Web/API/Window) schreiben:

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

- Das Ereignis [`pageshow`](/de/docs/Web/API/Window/pageshow_event).
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Empfehlungen zum Umgang mit dem Lebenszyklus von Seiten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die browserübergreifende Unterschiede beim Lebenszyklus von Seiten behandelt.
- [Back/Forward-Cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und welche Auswirkungen er auf verschiedene Ereignisse im Lebenszyklus einer Seite hat.
