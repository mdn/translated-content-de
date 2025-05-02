---
title: "Window: pagehide-Ereignis"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

Das **`pagehide`**-Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus der Sitzungshistorie anzuzeigen.

Beispielsweise erhält die aktuelle Seite ein `pagehide`-Ereignis, wenn der Benutzer die Zurück-Schaltfläche des Browsers drückt, bevor die vorherige Seite angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pagehide", (event) => { })

onpagehide = (event) => { }
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent), erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Ereigniseigenschaften

- [`PageTransitionEvent.persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument aus einem Cache geladen wird.

## Aliasnamen für Ereignishandler

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onpagehide` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Verwendungshinweise

Wie die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event) und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), wird dieses Ereignis von Browsern, insbesondere auf mobilen Geräten, nicht zuverlässig ausgelöst. Beispielsweise wird das `pagehide`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser vom App-Manager aus.

Im Gegensatz zu den Ereignissen `unload` und `beforeunload` ist dieses Ereignis jedoch mit dem [Back/Forward Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, sodass das Hinzufügen eines Listeners für dieses Ereignis die Seite nicht daran hindert, im bfcache enthalten zu sein.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das `pagehide`-Ereignis die nächstbeste Alternative.

Wenn Sie speziell versuchen, das Entladen von Seiten zu erkennen, ist das `pagehide`-Ereignis die beste Option.

Siehe den [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api)-Leitfaden für weitere Informationen darüber, wie sich dieses Ereignis auf andere Ereignisse im Seitenlebenszyklus bezieht.

## Beispiele

In diesem Beispiel wird ein Ereignishandler eingerichtet, um nach `pagehide`-Ereignissen zu suchen und eine spezielle Behandlung vorzunehmen, wenn die Seite für eine mögliche Wiederverwendung gepuffert wird.

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

- Das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Leitlinien zum Umgang mit dem Verhalten des Seitenlebenszyklus in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die sich mit inkonsistentem Verhalten im Seitenlebenszyklus zwischen verschiedenen Browsern befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward Cache ist und seine Auswirkungen auf verschiedene Ereignisse im Seitenlebenszyklus.
