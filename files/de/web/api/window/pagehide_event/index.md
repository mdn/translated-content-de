---
title: "Window: pagehide-Ereignis"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("HTML DOM")}}

Das **`pagehide`**-Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.

Zum Beispiel, wenn der Benutzer auf die Zurück-Schaltfläche des Browsers klickt, erhält die aktuelle Seite ein `pagehide`-Ereignis, bevor die vorherige Seite angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onpagehide` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Wie die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event)
und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) wird dieses Ereignis von Browsern nicht zuverlässig ausgelöst, insbesondere auf mobilen Geräten. Zum Beispiel wird das `pagehide`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Nutzer besucht Ihre Seite.
2. Der Nutzer wechselt dann zu einer anderen App.
3. Später schließt der Nutzer den Browser vom App-Manager aus.

Im Gegensatz zu den Ereignissen `unload` und `beforeunload` ist dieses Ereignis jedoch kompatibel mit dem [back/forward cache](https://web.dev/articles/bfcache) (bfcache), sodass das Hinzufügen eines Listeners zu diesem Ereignis nicht verhindert, dass die Seite im bfcache aufgenommen wird.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das `pagehide`-Ereignis die nächstbeste Alternative.

Wenn Sie speziell versuchen, das Entladen von Seiten zu erkennen, ist das `pagehide`-Ereignis die beste Option.

Sehen Sie sich den [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api)-Leitfaden für weitere Informationen darüber an, wie sich dieses Ereignis auf andere Ereignisse im Seitenlebenszyklus bezieht.

## Beispiele

In diesem Beispiel wird ein Ereignis-Handler eingerichtet, der auf `pagehide`-Ereignisse achtet und eine spezielle Behandlung vornimmt, wenn die Seite für eine mögliche Wiederverwendung gespeichert wird.

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
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) gibt Best-Practice-Anleitungen zum Umgang mit dem Verhalten des Seitenlebenszyklus in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die mit browserübergreifenden Inkonsistenzen im Verhalten des Seitenlebenszyklus umgeht.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/forward-Cache ist und welche Auswirkungen er auf verschiedene Ereignisse im Seitenlebenszyklus hat.
