---
title: "Window: unload-Event"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("UI Events")}}

> [!WARNING]
> Entwickler sollten die Verwendung dieses Events vermeiden. Siehe "Hinweise zur Verwendung" unten.

Das **`unload`**-Event wird ausgelöst, wenn das Dokument oder eine untergeordnete Ressource entladen wird.

Es wird nach folgenden Events ausgelöst:

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) (abbrechbares Event)
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)

Das Dokument befindet sich in folgendem Zustand:

- Alle Ressourcen existieren noch (img, iframe etc.)
- Nichts ist mehr für den Endbenutzer sichtbar
- UI-Interaktionen sind wirkungslos ([`window.open`](/de/docs/Web/API/Window/open), [`alert`](/de/docs/Web/API/Window/alert), [`confirm`](/de/docs/Web/API/Window/confirm) etc.)
- Ein Fehler stoppt den Entladevorgang nicht

Bitte beachten Sie, dass das unload-Event auch dem Dokumentbaum folgt: das Entladen des übergeordneten Frames erfolgt **vor** dem `unload` des untergeordneten Frames (siehe Beispiel unten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("unload", (event) => { })

onunload = (event) => { }
```

## Eventtyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Event-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onunload` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Entwickler sollten die Verwendung dieses Events vermeiden.

Insbesondere auf mobilen Geräten wird das `unload`-Event nicht zuverlässig ausgelöst. Zum Beispiel wird das `unload`-Event in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser aus dem App-Manager.

Außerdem ist das `unload`-Event nicht mit dem [Back/Forward-Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, da viele Seiten, die dieses Event verwenden, davon ausgehen, dass die Seite nach dem Event nicht mehr existiert. Um dies zu bekämpfen, platzieren einige Browser (wie Firefox) Seiten nicht im bfcache, wenn sie unload-Listener haben, was schlecht für die Leistung ist. Andere, wie Chrome, werden das `unload`-Event nicht auslösen, wenn ein Benutzer weg navigiert.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Event. In Browsern, die `visibilitychange` nicht unterstützen, ist das nächstbeste alternativ das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Event, das ebenfalls nicht zuverlässig ausgelöst wird, aber bfcache-kompatibel ist.

Wenn Sie speziell versuchen, Seitenentlade-Ereignisse zu erkennen, ist es am besten, das `pagehide`-Event zu hören.

Siehe die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event)-Leitfaden für weitere Informationen über die Probleme, die mit dem `unload`-Event verbunden sind.

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

Wenn der übergeordnete Frame entladen wird, werden die Ereignisse in der durch die `console.log()`-Nachrichten beschriebenen Reihenfolge ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Events: [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event), [`load`](/de/docs/Web/API/Window/load_event)
- [Entladen von Dokumenten — ein Dokument entladen](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Event.
- [Verlieren Sie nicht den Benutzer- und App-Status, verwenden Sie die Seiten-Sichtbarkeit](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet bewährte Methoden für den Umgang mit dem Seitenlebenszyklus in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die plattformübergreifende Inkonsistenzen im Seitenlebenszyklusverhalten handhabt.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und seine Auswirkungen auf verschiedene Ereignisse im Seitenlebenszyklus.
