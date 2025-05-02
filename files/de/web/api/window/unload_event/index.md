---
title: "Window: unload Event"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{deprecated_header}}

> [!WARNING]
> Entwickler sollten vermeiden, dieses Ereignis zu verwenden. Siehe "Hinweise zur Verwendung" unten.

Das **`unload`**-Ereignis wird ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

Es wird nach folgenden Ereignissen ausgelöst:

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) (abbrechbares Ereignis)
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)

Der Status des Dokuments ist folgender:

- Alle Ressourcen existieren noch (img, iframe usw.)
- Nichts ist für den Endbenutzer mehr sichtbar
- UI-Interaktionen sind unwirksam ([`window.open`](/de/docs/Web/API/Window/open), [`alert`](/de/docs/Web/API/Window/alert), [`confirm`](/de/docs/Web/API/Window/confirm), usw.)
- Ein Fehler wird den Entladevorgang nicht stoppen

Bitte beachten Sie, dass das `unload`-Ereignis auch dem Dokumentbaum folgt: Das Entladen des übergeordneten Frames erfolgt **vor** dem `unload` des Kindsframes (siehe Beispiel unten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlereigenschaft fest.

```js-nolint
addEventListener("unload", (event) => { })

onunload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Event-Handler-Aliase

Neben der `Window`-Schnittstelle ist die Ereignisbehandlereigenschaft `onunload` auch für folgende Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Entwickler sollten vermeiden, dieses Ereignis zu verwenden.

Insbesondere auf Mobilgeräten wird das `unload`-Ereignis nicht zuverlässig ausgelöst. Zum Beispiel wird das `unload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Außerdem ist das `unload`-Ereignis nicht mit dem [Back/Forward Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, weil viele Seiten, die dieses Ereignis verwenden, davon ausgehen, dass die Seite nach dem Ereignis nicht weiter existiert. Um dem entgegenzuwirken, werden einige Browser (wie Firefox) Seiten nicht in den bfcache aufnehmen, wenn sie `unload`-Listener haben, was schlecht für die Leistung ist. Andere, wie Chrome, werden das `unload` nicht auslösen, wenn ein Benutzer die Seite verlässt.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das nächstbeste Alternativereignis das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis, das ebenfalls nicht zuverlässig ausgelöst wird, aber bfcache-kompatibel ist.

Wenn Sie speziell versuchen wollen, Seitenentladungsereignisse zu erkennen, ist es am besten, auf das `pagehide`-Ereignis zu hören.

Siehe den [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event)-Leitfaden für weitere Informationen zu den Problemen, die mit dem `unload`-Ereignis verbunden sind.

## Beispiele

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Parent Frame</title>
    <script>
      window.addEventListener("beforeunload", (event) => {
        console.log("I am the 1st one.");
      });
      window.addEventListener("unload", (event) => {
        console.log("I am the 3rd one.");
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

Unten der Inhalt von `child-frame.html`:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Child Frame</title>
    <script>
      window.addEventListener("beforeunload", (event) => {
        console.log("I am the 2nd one.");
      });
      window.addEventListener("unload", (event) => {
        console.log("I am the 4th and last one…");
      });
    </script>
  </head>
  <body>
    ☻
  </body>
</html>
```

Wenn der übergeordnete Frame entladen wird, werden Ereignisse in der Reihenfolge ausgelöst, die durch die `console.log()`-Meldungen beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event), [`load`](/de/docs/Web/API/Window/load_event)
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` verwenden sollten, nicht `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Leitfäden zu bewährten Verfahren zum Umgang mit dem Verhalten des Seitenlebenszyklus in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit browserübergreifenden Inkonsistenzen im Seitenlebenszyklus befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward Cache ist, und seine Auswirkungen auf verschiedene Ereignisse im Seitenlebenszyklus.
