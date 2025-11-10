---
title: "Window: unload-Ereignis"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: e380b2e33938d1a2f99ff0e26fbc47bab85b9313
---

{{APIRef}}

> [!WARNING]
> Entwickler sollten die Verwendung dieses Ereignisses vermeiden. Siehe "Hinweise zur Verwendung" unten.

Das **`unload`**-Ereignis wird ausgelöst, wenn das Dokument oder eine untergeordnete Ressource entladen wird.

Es wird nach folgenden Ereignissen ausgelöst:

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) (abbrechbares Ereignis)
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)

Das Dokument befindet sich in folgendem Zustand:

- Alle Ressourcen existieren noch (img, iframe etc.)
- Für den Endbenutzer ist nichts mehr sichtbar
- Benutzeroberflächen-Interaktionen sind unwirksam ([`window.open`](/de/docs/Web/API/Window/open), [`alert`](/de/docs/Web/API/Window/alert), [`confirm`](/de/docs/Web/API/Window/confirm), etc.)
- Ein Fehler stoppt den Entladevorgang nicht

Bitte beachten Sie, dass das `unload`-Ereignis auch dem Dokumentbaum folgt: Das Entladen des übergeordneten Rahmens erfolgt **vor** dem `unload` des untergeordneten Rahmens (siehe Beispiel unten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("unload", (event) => { })

onunload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onunload` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Entwickler sollten die Verwendung dieses Ereignisses vermeiden.

Insbesondere auf mobilen Geräten wird das `unload`-Ereignis nicht zuverlässig ausgelöst. Das `unload`-Ereignis wird zum Beispiel in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Das `unload`-Ereignis ist auch nicht mit dem [Back/Forward Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, da viele Seiten, die dieses Ereignis verwenden, davon ausgehen, dass die Seite nicht weiter existieren wird, nachdem das Ereignis ausgelöst wurde. Um dem entgegenzuwirken, platzieren einige Browser (wie Firefox) Seiten nicht im bfcache, wenn sie `unload`-Listener haben, was schlecht für die Leistung ist. Andere, wie Chrome, lösen das `unload`-Ereignis nicht aus, wenn ein Benutzer die Seite verlässt.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist die nächstbeste Alternative das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis, das zwar auch nicht zuverlässig ausgelöst wird, aber bfcache-kompatibel ist.

Wenn Sie speziell versuchen, Entladeereignisse der Seite zu erkennen, sollten Sie am besten auf das `pagehide`-Ereignis hören.

Weitere Informationen zu den Problemen im Zusammenhang mit dem `unload`-Ereignis finden Sie im [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event) Leitfaden.

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

Unten, der Inhalt von `child-frame.html`:

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

Wenn der übergeordnete Rahmen entladen wird, werden die Ereignisse in der Reihenfolge ausgelöst, die durch die `console.log()`-Nachrichten beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event), [`load`](/de/docs/Web/API/Window/load_event)
- [Entladen von Dokumenten — Entladen eines Dokuments](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- [Verlieren Sie nicht den Benutzer- und App-Zustand, verwenden Sie die Sichtbarkeit der Seite](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) gibt Leitlinien für bewährte Praktiken zum Umgang mit dem Seitenlebenszyklusverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit inkonsistenten Seitenlebenszyklusverhalten zwischen den Browsern befasst.
- [Back/Forward Cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward Cache ist und seine Auswirkungen auf verschiedene Seitenlebenszyklusereignisse.
