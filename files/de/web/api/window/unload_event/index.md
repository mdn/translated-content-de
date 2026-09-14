---
title: "Window: unload event"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: 75b6c08573c39a7d6557c911502912f1a3c7da9f
---

{{APIRef("UI Events")}}

> [!WARNING]
> Entwickler sollten die Verwendung dieses Ereignisses vermeiden. Siehe unten „Hinweise zur Verwendung“.

Das **`unload`**-Ereignis wird ausgelöst, wenn das Dokument oder eine untergeordnete Ressource entladen wird.

Es wird ausgelöst nach:

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) (abbrechbares Ereignis)
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)

Das Dokument befindet sich in folgendem Zustand:

- Alle Ressourcen existieren weiterhin (img, iframe usw.)
- Für Endbenutzer ist nichts mehr sichtbar
- UI-Interaktionen haben keine Wirkung ([`window.open`](/de/docs/Web/API/Window/open), [`alert`](/de/docs/Web/API/Window/alert), [`confirm`](/de/docs/Web/API/Window/confirm) usw.)
- Ein Fehler wird den Entladevorgang nicht stoppen

Beachten Sie, dass das unload-Ereignis auch der Dokumentstruktur folgt: Das Entladen des übergeordneten Frames erfolgt **vor** dem `unload` des untergeordneten Frames (siehe Beispiel unten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("unload", (event) => { })

onunload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Event-Handler-Aliasse

Zusätzlich zur `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onunload` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Entwickler sollten die Verwendung dieses Ereignisses vermeiden.

Insbesondere auf Mobilgeräten wird das `unload`-Ereignis nicht zuverlässig ausgelöst. Beispielsweise wird das `unload`-Ereignis im folgenden Szenario überhaupt nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt dann zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

Außerdem ist das `unload`-Ereignis nicht mit dem [Back/forward cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, weil viele Seiten, die dieses Ereignis verwenden, davon ausgehen, dass die Seite nach Auslösen des Ereignisses nicht weiter existiert. Um dem entgegenzuwirken, legen einige Browser (wie Firefox) Seiten mit unload-Listenern nicht im bfcache ab, was sich negativ auf die Leistung auswirkt.

Aus diesen Gründen hat Chrome [das standardmäßige Auslösen von `unload`-Ereignissen eingestellt](https://developer.chrome.com/docs/web-platform/deprecating-unload). Eine Seite, die weiterhin von `unload` abhängt, kann sich mithilfe der `unload`-Direktive des {{HTTPHeader("Permissions-Policy")}}-Headers wieder dafür anmelden.

Verwenden Sie anstelle von `unload` die folgenden Ereignisse, die beide mit dem bfcache kompatibel sind:

- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis wird ausgelöst, wenn sich [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) von `visible` zu `hidden` oder umgekehrt ändert. Dies ist das letzte Ereignis, das zuverlässig ausgelöst wird, daher ist es der beste Ort, um den Anwendungszustand zu speichern oder Analysedaten zu senden. Beachten Sie, dass `visibilitychange` ausgelöst wird, wenn der Benutzer zu einem anderen Tab wechselt, die aktuelle Seite verlässt oder sie schließt.
- Das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, während er eine andere Seite aus dem Verlauf der Sitzung darstellt. Dies ist nützlich, wenn Sie gezielt erkennen möchten, dass der Benutzer von der Seite weg navigiert. Wie `unload` wird es jedoch nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Bevorzugen Sie daher nach Möglichkeit `visibilitychange`.

Anstatt beispielsweise Daten in einem `unload`-Listener zu senden:

```js example-bad
window.addEventListener("unload", () => {
  navigator.sendBeacon("/log", analyticsData);
});
```

Senden Sie sie, wenn die Seite ausgeblendet wird:

```js example-good
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

Weitere Informationen zu den Problemen im Zusammenhang mit dem `unload`-Ereignis finden Sie im [Leitfaden zur Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event).

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

Im Folgenden der Inhalt von `child-frame.html`:

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

Wenn der übergeordnete Frame entladen wird, werden Ereignisse in der durch die `console.log()`-Meldungen beschriebenen Reihenfolge ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event), [`load`](/de/docs/Web/API/Window/load_event)
- [Dokumente entladen — ein Dokument entladen](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- [Benutzer- und Anwendungszustand nicht verlieren, Page Visibility verwenden](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erläutert ausführlich, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Empfehlungen für den Umgang mit dem Verhalten des Seitenlebenszyklus in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die browserübergreifende Inkonsistenzen im Verhalten des Seitenlebenszyklus behandelt.
- [Back/forward cache](https://web.dev/articles/bfcache) erläutert, was der Back/forward cache ist und welche Auswirkungen er auf verschiedene Ereignisse des Seitenlebenszyklus hat.
