---
title: "Window: pagehide-Ereignis"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("HTML DOM")}}

Das **`pagehide`**-Ereignis wird an ein {{domxref("Window")}} gesendet, wenn der Browser die aktuelle Seite verbirgt, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.

Beispielsweise, wenn der Benutzer die Zurück-Schaltfläche des Browsers klickt, empfängt die aktuelle Seite ein `pagehide`-Ereignis, bevor die vorherige Seite angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js
addEventListener("pagehide", (event) => {});
onpagehide = (event) => {};
```

## Ereignistyp

Ein {{domxref("PageTransitionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PageTransitionEvent")}}

## Ereigniseigenschaften

- {{domxref("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : Zeigt an, ob das Dokument aus einem Cache geladen wird.

## Ereignis-Handler-Aliase

Neben der `Window`-Schnittstelle ist die Ereignisbehandlungseigenschaft `onpagehide` auch auf den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Anwendungshinweise

Wie das [`unload`](/de/docs/Web/API/Window/unload_event)
und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis wird dieses Ereignis von Browsern nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Zum Beispiel wird das `pagehide`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Jedoch, im Gegensatz zu den `unload` und `beforeunload` Ereignissen, ist dieses Ereignis mit dem [Back/Forward-Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, so dass das Hinzufügen eines Listeners zu diesem Ereignis nicht verhindert, dass die Seite in den bfcache aufgenommen wird.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das `pagehide`-Ereignis die nächstbeste Alternative.

Wenn Sie spezifisch versuchen, Seitenladeereignisse zu erkennen, ist das `pagehide`-Ereignis die beste Option.

Sehen Sie sich den [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) Leitfaden an, um mehr darüber zu erfahren, wie sich dieses Ereignis auf andere Ereignisse im Seitenlebenszyklus bezieht.

## Beispiele

In diesem Beispiel wird ein Ereignis-Handler eingerichtet, um auf `pagehide`-Ereignisse zu achten und eine spezielle Behandlung vorzunehmen, wenn die Seite für eine mögliche Wiederverwendung gespeichert wird.

```js
window.addEventListener(
  "pagehide",
  (event) => {
    if (event.persisted) {
      /* die Seite wird nicht verworfen, sodass sie später wiederverwendet werden kann */
    }
  },
  false,
);
```

Dies kann auch unter Verwendung der `onpagehide` Ereignisbehandlungseigenschaft im {{domxref("Window")}} geschrieben werden:

```js
window.onpagehide = (event) => {
  if (event.persisted) {
    /* die Seite wird nicht verworfen, sodass sie später wiederverwendet werden kann */
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("Window.pageshow_event", "pageshow")}} Ereignis.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Empfehlungen zum Umgang mit Seitenlebenszyklusverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die mit Browserinkonsistenzen im Seitenlebenszyklus umgeht.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und seine Auswirkungen auf verschiedene Seitenlebenszyklusereignisse.
