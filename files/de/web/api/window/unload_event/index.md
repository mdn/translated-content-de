---
title: "Window: unload-Ereignis"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}{{deprecated_header}}

> [!WARNING]
> Entwickler sollten die Verwendung dieses Ereignisses vermeiden. Siehe "Hinweise zur Verwendung" unten.

Das **`unload`**-Ereignis wird ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

Es wird nach den folgenden Ereignissen ausgelöst:

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) (abbrechbares Ereignis)
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)

Der Zustand des Dokuments ist wie folgt:

- Alle Ressourcen existieren noch (img, iframe usw.)
- Nichts ist mehr für den Endbenutzer sichtbar
- UI-Interaktionen sind unwirksam ([`window.open`](/de/docs/Web/API/Window/open), [`alert`](/de/docs/Web/API/Window/alert), [`confirm`](/de/docs/Web/API/Window/confirm), usw.)
- Ein Fehler stoppt den Entladevorgang nicht

Bitte beachten Sie, dass das `unload`-Ereignis auch dem Dokumentbaum folgt: Das `unload` des übergeordneten Frames erfolgt **vor** dem `unload` des untergeordneten Frames (siehe Beispiel unten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("unload", (event) => {});
onunload = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onunload` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Entwickler sollten die Verwendung dieses Ereignisses vermeiden.

Besonders auf mobilen Geräten wird das `unload`-Ereignis nicht zuverlässig ausgelöst. Zum Beispiel wird das `unload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Das `unload`-Ereignis ist auch nicht mit dem [Back/Forward-Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, da viele Seiten, die dieses Ereignis verwenden, davon ausgehen, dass die Seite nicht weiter existiert, nachdem das Ereignis ausgelöst wurde. Um dem entgegenzuwirken, werden einige Browser (wie Firefox) Seiten mit `unload`-Listenern nicht in den bfcache aufnehmen, was schlecht für die Leistung ist. Andere, wie Chrome, lösen das `unload`-Ereignis nicht aus, wenn ein Benutzer weg navigiert.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist die nächstbeste Alternative das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis, das ebenfalls nicht zuverlässig ausgelöst wird, aber bfcache-kompatibel ist.

Wenn Sie speziell versuchen, das Entladen von Seiten zu erkennen, sollten Sie auf das `pagehide`-Ereignis achten.

Lesen Sie den [Page Lifecycle API-Leitfaden](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event) für weitere Informationen über die mit dem `unload`-Ereignis verbundenen Probleme.

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

Nachfolgend der Inhalt von `child-frame.html`:

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

Wenn der übergeordnete Frame entladen wird, werden die Ereignisse in der Reihenfolge ausgelöst, die durch die `console.log()`-Nachrichten beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event), [`load`](/de/docs/Web/API/Window/load_event)
- [Entladen von Dokumenten — ein Dokument entladen](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- [Verlieren Sie nicht den Benutzer- und Anwendungszustand, verwenden Sie die Seiten-Visibilität](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` statt `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Richtlinien zum Umgang mit dem Seitenlebenszyklusverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die mit Browserinkonsistenzen im Seitenlebenszyklusverhalten umgeht.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und seine Auswirkungen auf verschiedene Ereignisse im Seitenlebenszyklus.
