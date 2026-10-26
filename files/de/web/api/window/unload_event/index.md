---
title: "Window: unload-Ereignis"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("UI Events")}}

> [!WARNING]
> Entwickler sollten dieses Ereignis nicht verwenden. Weitere Informationen finden Sie unten unter „Hinweise zur Verwendung“.

Das **`unload`**-Ereignis wird ausgelöst, wenn das Dokument oder eine untergeordnete Ressource entladen wird.

Es wird nach den folgenden Ereignissen ausgelöst:

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) (abbrechbares Ereignis)
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)

Das Dokument befindet sich dabei in folgendem Zustand:

- Alle Ressourcen sind noch vorhanden (img, iframe usw.).
- Für Endnutzer ist nichts mehr sichtbar.
- UI-Interaktionen haben keine Wirkung ([`window.open`](/de/docs/Web/API/Window/open), [`alert`](/de/docs/Web/API/Window/alert), [`confirm`](/de/docs/Web/API/Window/confirm) usw.).
- Ein Fehler unterbricht den Entladevorgang nicht.

Beachten Sie, dass das unload-Ereignis auch der Dokumentstruktur folgt: Das Entladen eines übergeordneten Frames erfolgt **vor** dem `unload`-Ereignis eines untergeordneten Frames (siehe Beispiel unten).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("unload", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onunload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Aliase für Event-Handler

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onunload` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Entwickler sollten dieses Ereignis nicht verwenden.

Insbesondere auf Mobilgeräten wird das `unload`-Ereignis nicht zuverlässig ausgelöst. Im folgenden Szenario wird es beispielsweise überhaupt nicht ausgelöst:

1. Ein Nutzer besucht Ihre Seite auf einem Mobilgerät.
2. Der Nutzer wechselt zu einer anderen App.
3. Später schließt der Nutzer den Browser über den App-Manager.

Außerdem ist das `unload`-Ereignis nicht mit dem [Back/Forward-Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel, da viele Seiten, die dieses Ereignis verwenden, davon ausgehen, dass die Seite nach dem Auslösen des Ereignisses nicht mehr existiert. Um dem entgegenzuwirken, nehmen einige Browser (etwa Firefox) Seiten mit unload-Event-Listenern nicht in den bfcache auf. Das beeinträchtigt die Leistung.

Aus diesen Gründen löst Chrome [`unload`-Ereignisse standardmäßig nicht mehr aus](https://developer.chrome.com/docs/web-platform/deprecating-unload). Eine Seite, die weiterhin von `unload` abhängt, kann die Auslösung mithilfe der [`unload`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/unload)-Direktive des {{HTTPHeader("Permissions-Policy")}}-Headers wieder aktivieren.

Verwenden Sie statt `unload` die folgenden Ereignisse, die beide mit dem bfcache kompatibel sind:

- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis wird ausgelöst, wenn [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) von `visible` zu `hidden` oder umgekehrt wechselt. Es ist das letzte Ereignis, das zuverlässig ausgelöst wird, und daher der beste Zeitpunkt, um den Anwendungszustand zu speichern oder Analysedaten zu senden. Beachten Sie, dass `visibilitychange` ausgelöst wird, wenn der Nutzer zu einem anderen Tab wechselt, die aktuelle Seite verlässt oder sie schließt.
- Das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen. Das ist nützlich, wenn Sie gezielt erkennen möchten, ob der Nutzer die Seite verlässt. Wie `unload` wird es jedoch insbesondere auf Mobilgeräten nicht zuverlässig ausgelöst. Bevorzugen Sie daher nach Möglichkeit `visibilitychange`.

Statt Daten beispielsweise in einem `unload`-Event-Listener zu senden:

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

Weitere Informationen zu den Problemen im Zusammenhang mit dem `unload`-Ereignis finden Sie im Leitfaden zur [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event).

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

Wenn der übergeordnete Frame entladen wird, werden die Ereignisse in der durch die `console.log()`-Meldungen beschriebenen Reihenfolge ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event), [`load`](/de/docs/Web/API/Window/load_event)
- [Dokumente entladen – ein Dokument entladen](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- [Nutzer- und Anwendungszustand nicht verlieren: Page Visibility verwenden](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt ausführlich, warum Sie `visibilitychange` statt `beforeunload`/`unload` verwenden sollten.
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Empfehlungen für den Umgang mit dem Lebenszyklus von Seiten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die browserübergreifende Unterschiede beim Lebenszyklus von Seiten berücksichtigt.
- [Back/Forward-Cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und welche Auswirkungen er auf verschiedene Ereignisse im Lebenszyklus einer Seite hat.
