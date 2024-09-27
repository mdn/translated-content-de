---
title: "Window: unload-Ereignis"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}{{deprecated_header}}

> [!WARNING]
> Entwickler sollten die Verwendung dieses Ereignisses vermeiden. Siehe "Verwendungsnotizen" unten.

Das **`unload`**-Ereignis wird ausgelöst, wenn das Dokument oder eine untergeordnete Ressource entladen wird.

Es wird nach folgenden Ereignissen ausgelöst:

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) (abbrechbares Ereignis)
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)

Das Dokument befindet sich in folgendem Zustand:

- Alle Ressourcen existieren noch (img, iframe usw.)
- Nichts ist mehr für den Endbenutzer sichtbar
- UI-Interaktionen sind unwirksam ([`window.open`](/de/docs/Web/API/Window/open), [`alert`](/de/docs/Web/API/Window/alert), [`confirm`](/de/docs/Web/API/Window/confirm), etc.)
- Ein Fehler wird den Entladeprozess nicht stoppen

Bitte beachten Sie, dass das `unload`-Ereignis auch der Dokumenthierarchie folgt: Das Entladen des übergeordneten Rahmens erfolgt **vor** dem `unload` des untergeordneten Rahmens (siehe Beispiel unten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("unload", (event) => {});
onunload = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onunload` auch auf folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Verwendungsnotizen

Entwickler sollten die Verwendung dieses Ereignisses vermeiden.

Besonders auf mobilen Geräten wird das `unload`-Ereignis nicht zuverlässig ausgelöst. Zum Beispiel wird das `unload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser aus dem App-Manager.

Außerdem ist das `unload`-Ereignis nicht mit dem [Back/Forward-Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, da viele Seiten, die dieses Ereignis verwenden, davon ausgehen, dass die Seite nach dem Auslösen des Ereignisses nicht mehr existiert. Um dem entgegenzuwirken, werden einige Browser (wie Firefox) Seiten nicht im bfcache speichern, wenn sie `unload`-Listener haben, was schlecht für die Leistung ist. Andere, wie Chrome, werden das `unload` nicht auslösen, wenn ein Benutzer weg navigiert.

Das beste Ereignis zur Signalisierung des Endes einer Benutzersitzung ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis die nächstbeste Alternative, das ebenfalls nicht zuverlässig ausgelöst wird, aber bfcache-kompatibel ist.

Wenn Sie speziell versuchen, Seitenentladeereignisse zu erkennen, ist es am besten, das `pagehide`-Ereignis zu überwachen.

Siehe den [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event) Leitfaden für weitere Informationen zu den Problemen, die mit dem `unload`-Ereignis verbunden sind.

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

Wenn der übergeordnete Rahmen entladen wird, werden die Ereignisse in der Reihenfolge der `console.log()`-Nachrichten ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event), [`load`](/de/docs/Web/API/Window/load_event)
- [Dokumente entladen — entladen eines Dokuments](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- [Verlieren Sie nicht den Benutzer- und Anwendungszustand, verwenden Sie Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Richtlinien zum Umgang mit dem Seitenlebenszyklusverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit Browser-Überschneidungen im Seitenlebenszyklusverhalten befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und seine Auswirkungen auf verschiedene Seitenlebenszyklusereignisse.
