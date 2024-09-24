---
title: "Window: unload-Ereignis"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}{{deprecated_header}}

> [!WARNING]
> Entwickler sollten dieses Ereignis vermeiden. Siehe "Verwendungsnotizen" unten.

Das **`unload`**-Ereignis wird ausgelöst, wenn das Dokument oder eine Kindressource entladen wird.

Es wird nach folgenden Ereignissen ausgelöst:

- {{domxref("Window/beforeunload_event", "beforeunload")}} (abbrechbares Ereignis)
- {{domxref("Window/pagehide_event", "pagehide")}}

Das Dokument befindet sich in folgendem Zustand:

- Alle Ressourcen existieren noch (img, iframe etc.)
- Nichts ist mehr für den Endbenutzer sichtbar
- UI-Interaktionen sind unwirksam ({{domxref("window.open")}}, {{domxref("window.alert", "alert")}}, {{domxref("window.confirm", "confirm")}}, etc.)
- Ein Fehler stoppt den Entladevorgang nicht

Bitte beachten Sie, dass das `unload`-Ereignis auch der Dokumentenstruktur folgt: Das Entladen des übergeordneten Rahmens erfolgt **vor** dem `unload` des Kindrahmens (siehe Beispiel unten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("unload", (event) => {});
onunload = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onunload` auch auf den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Verwendungsnotizen

Entwickler sollten dieses Ereignis vermeiden.

Besonders auf mobilen Geräten wird das `unload`-Ereignis nicht zuverlässig ausgelöst. Zum Beispiel wird das `unload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Außerdem ist das `unload`-Ereignis nicht kompatibel mit dem [Back/Forward Cache](https://web.dev/articles/bfcache) (bfcache), da viele Seiten, die dieses Ereignis verwenden, davon ausgehen, dass die Seite nach dem Auslösen des Ereignisses nicht mehr existieren wird. Um dem entgegenzuwirken, werden einige Browser (wie Firefox) Seiten nicht in den bfcache aufnehmen, wenn sie `unload`-Listener haben, was schlecht für die Leistung ist. Andere, wie Chrome, werden das `unload`-Ereignis nicht auslösen, wenn ein Benutzer die Seite verlässt.

Das beste Ereignis, um das Ende einer Benutzersitzung zu signalisieren, ist das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. In Browsern, die `visibilitychange` nicht unterstützen, ist das nächstbeste Alternativereignis das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis, das ebenfalls nicht zuverlässig ausgelöst wird, aber bfcache-kompatibel ist.

Wenn Sie speziell versuchen, das Entladen von Seiten zu erkennen, hören Sie am besten auf das `pagehide`-Ereignis.

Lesen Sie die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event)-Anleitung für weitere Informationen zu den Problemen im Zusammenhang mit dem `unload`-Ereignis.

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

Wenn der übergeordnete Rahmen entladen wird, werden Ereignisse in der durch die `console.log()`-Nachrichten beschriebenen Reihenfolge ausgelöst.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt detailreich, warum Sie `visibilitychange` verwenden sollten, nicht
  `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) gibt Best-Practice-Empfehlungen für den Umgang mit dem Seitenlebenszyklus in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit browserübergreifenden Inkonsistenzen im Seitenlebenszyklus befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward Cache ist und seine Auswirkungen auf verschiedene Ereignisse im Seitenlebenszyklus.
