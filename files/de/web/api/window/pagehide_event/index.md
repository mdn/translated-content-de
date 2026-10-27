---
title: "Window: pagehide-Ereignis"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`pagehide`**-Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.

Wenn beispielsweise jemand auf die Zurück-Schaltfläche des Browsers klickt, empfängt die aktuelle Seite ein `pagehide`-Ereignis, bevor die vorherige Seite angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pagehide", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpagehide = (event) => { }
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Aliasse für Ereignishandler

Neben der `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onpagehide` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Wie die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event) und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) wird auch dieses Ereignis von Browsern nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Im folgenden Szenario wird das `pagehide`-Ereignis beispielsweise überhaupt nicht ausgelöst:

1. Eine Person besucht Ihre Seite auf einem Mobilgerät.
2. Die Person wechselt zu einer anderen App.
3. Später schließt sie den Browser über die App-Verwaltung.

Dieses Ereignis ist jedoch mit dem [Back/Forward-Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel. Wenn Sie einen Listener dafür hinzufügen, verhindert dies nicht, dass die Seite in den bfcache aufgenommen wird.

Das beste Ereignis, um das Ende einer Sitzung zu erkennen, ist [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event). In Browsern, die `visibilitychange` nicht unterstützen, ist `pagehide` die nächstbeste Alternative.

Wenn Sie speziell erkennen möchten, wann eine Seite entladen wird, ist `pagehide` die beste Wahl.

Weitere Informationen dazu, wie dieses Ereignis mit anderen Ereignissen im Lebenszyklus einer Seite zusammenhängt, finden Sie im Leitfaden zur [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api).

## Beispiele

In diesem Beispiel wird ein Ereignishandler eingerichtet, der auf `pagehide`-Ereignisse achtet und eine besondere Verarbeitung durchführt, wenn die Seite für eine mögliche spätere Wiederverwendung gespeichert wird.

```js
window.addEventListener("pagehide", (event) => {
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
});
```

Dies lässt sich auch mit der Ereignishandler-Eigenschaft `onpagehide` von [`Window`](/de/docs/Web/API/Window) schreiben. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onpagehide` hinzugefügte Ereignis-Listener ersetzt werden:

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
