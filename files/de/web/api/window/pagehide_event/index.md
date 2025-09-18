---
title: "Window: pagehide-Ereignis"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("HTML DOM")}}

Das **`pagehide`**-Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf darzustellen.

Zum Beispiel, wenn der Benutzer die Zurück-Taste des Browsers klickt, erhält die aktuelle Seite ein `pagehide`-Ereignis, bevor die vorherige Seite angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pagehide", (event) => { })

onpagehide = (event) => { }
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("PageTransitionEvent")}}

## Ereigniseigenschaften

- [`PageTransitionEvent.persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument aus einem Cache geladen wird.

## Ereignis-Handler-Aliasse

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onpagehide` auch bei den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Wie die [`unload`](/de/docs/Web/API/Window/unload_event) und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignisse wird dieses Ereignis von Browsern, insbesondere auf Mobilgeräten, nicht zuverlässig ausgelöst. Zum Beispiel wird das `pagehide`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Jedoch, im Gegensatz zu den `unload`- und `beforeunload`-Ereignissen, ist dieses Ereignis kompatibel mit dem [Back/Forward-Cache](https://web.dev/articles/bfcache) (bfcache), sodass das Hinzufügen eines Listeners zu diesem Ereignis nicht verhindert, dass die Seite in den bfcache aufgenommen wird.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das `pagehide`-Ereignis die beste Alternative.

Wenn Sie speziell versuchen, Seiten-Entlade-Ereignisse zu erkennen, ist das `pagehide`-Ereignis die beste Option.

Sehen Sie sich das [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) an, um mehr darüber zu erfahren, wie dieses Ereignis mit anderen Ereignissen im Seitenlebenszyklus zusammenhängt.

## Beispiele

In diesem Beispiel wird ein Ereignishandler eingerichtet, um auf `pagehide`-Ereignisse zu achten und eine spezielle Behandlung durchzuführen, wenn die Seite für eine mögliche Wiederverwendung gespeichert wird.

```js
window.addEventListener("pagehide", (event) => {
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
});
```

Dies kann auch unter Verwendung der `onpagehide`-Ereignis-Handler-Eigenschaft auf dem [`Window`](/de/docs/Web/API/Window) geschrieben werden:

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
- Das [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) gibt Best Practices für die Handhabung des Seitenlebenszyklus in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit browserübergreifenden Inkonsistenzen im Seitenlebenszyklusverhalten befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und seine Auswirkungen auf verschiedene Seitenlebenszyklusereignisse.
