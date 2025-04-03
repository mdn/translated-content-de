---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Die **`open()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle lädt eine angegebene Ressource in einen neuen oder bestehenden Browserkontext (d.h. einen Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Element/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}

  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wenn ein leerer String (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite im anvisierten Browserkontext geöffnet.

- `target` {{optional_inline}}

  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browserkontextes angibt, in den die Ressource geladen wird. Wenn der Name keinen bestehenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Element/a#target) `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur für [fenced frames](/de/docs/Web/API/Fenced_frame_API) relevant.

    Dieser Name kann als `target`-Attribut von [`<a>`](/de/docs/Web/HTML/Element/a#target)- oder [`<form>`](/de/docs/Web/HTML/Element/form#target)-Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String, der eine durch Kommas getrennte Liste von Fenstermerkmalen in der Form `name=value` enthält. Boolesche Werte können durch eines der folgenden Formate auf true gesetzt werden: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige nicht-nullige Ganzzahl ist. Diese Merkmale umfassen Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll, und so weiter. Die folgenden Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzerinteraktionsereignis wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion erfolgen. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort zum Abschluss der Registrierung einer Attributionsquelle auszulösen.

        Darüber hinaus wird der Browser auch ausgelöst, die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader angegeben) zu speichern, wenn die `open()`-Methode abgeschlossen ist.

        Für weitere Einzelheiten siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

        > **Hinweis:** `open()`-Aufrufe können nicht verwendet werden, um einen Attribution Trigger zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt ist, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die von der Benutzeroberfläche einbezogenen Funktionen des Popup-Fensters werden automatisch durch den Browser entschieden, in der Regel nur mit einer Adressleiste. Wenn `popup` vorhanden ist und auf false gesetzt ist, wird trotzdem ein neuer Tab geöffnet.

        Es gibt einige ältere Funktionen, die früher die Benutzeroberflächenmerkmale des geöffneten Fensters steuerten. In modernen Browsern haben sie nur den Effekt, ein Popup zu anzufordern. Wenn `popup` nicht angegeben ist und `windowFeatures` Funktionen (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthalten, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` ist false oder fehlt
        - `status` ist false oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Gibt die Breite des Inhaltsbereichs einschließlich der Bildlaufleisten an. Der Mindestwert beträgt 100.

    - `height` oder `innerHeight`

      - : Gibt die Höhe des Inhaltsbereichs einschließlich der Bildlaufleisten an. Der Mindestwert beträgt 100.

    - `left` oder `screenX`

      - : Gibt den Abstand in Pixeln von der linken Seite des Arbeitsbereichs an, wie er vom Betriebssystem des Benutzers definiert ist, wo das neue Fenster erzeugt wird.

    - `top` oder `screenY`

      - : Gibt den Abstand in Pixeln von der oberen Seite des Arbeitsbereichs an, wie er vom Betriebssystem des Benutzers definiert ist, wo das neue Fenster erzeugt wird.

    - `noopener`

      - : Wenn dieses Merkmal gesetzt ist, hat das neue Fenster keinen Zugriff auf das Ursprung-Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht leere Zielnamen, außer `_top`, `_self` und `_parent`, wie `_blank` behandelt, um zu entscheiden, ob ein neuer Browserkontext geöffnet werden soll.

    - `noreferrer`
      - : Wenn dieses Merkmal gesetzt ist, wird der [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header vom Browser weggelassen und `noopener` auf true gesetzt. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) für mehr Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie der leere String (`""`) behandelt.

> [!NOTE]
> Angeforderte Positionen (`top`, `left`) und angeforderte Dimensionen (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn einer dieser angeforderten Werte nicht zulässt, dass das gesamte Browser-Popup innerhalb des Arbeitsbereichs der Anwendungen des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten: Kein Teil des neuen Popups kann zu Beginn außerhalb des Bildschirms positioniert werden.

### Rückgabewert

Wenn der Browser den neuen Browserkontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}}-Objekt zurückgegeben.
Der zurückgegebene Verweis kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange er die Sicherheitsanforderungen der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) erfüllt.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}}-HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einer neuen {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} geöffnet wird, werden die Verweise auf das geöffnete Fenster getrennt und das zurückgegebene Objekt wird angeben, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browserkontext nicht öffnen kann, weil er beispielsweise von einem Popup-Blocker des Browsers blockiert wurde.

## Beschreibung

Die `open()`-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle nimmt eine URL als Parameter und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Tab oder ein Fenster. Der `target`-Parameter bestimmt, welches Fenster oder welcher Tab die Ressource laden soll, und der `windowFeatures`-Parameter kann verwendet werden, um ein neues Popup mit minimalen Benutzeroberflächenelementen zu öffnen und dessen Größe und Position zu steuern.

Remote-URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das eigentliche Abrufen der URL wird aufgeschoben und beginnt nach dem Abschluss des aktuellen Skriptblocks. Die Fenstererstellung und das Laden der referenzierten Ressource werden asynchron durchgeführt.

Moderne Browser haben strenge Popup-Blocker-Richtlinien. Pop-up-Fenster müssen in direktem Zusammenhang mit Benutzereingaben geöffnet werden, und für jeden `Window.open()`-Aufruf ist ein separates Benutzerereignis erforderlich. Dies verhindert, dass Websites Benutzer mit vielen Fenstern überlasten. Es stellt jedoch ein Problem für Anwendungen mit mehreren Fenstern dar. Um dieses Problem zu umgehen, können Sie Ihre Anwendungen so gestalten:

- Öffnen Sie nicht mehr als ein neues Fenster gleichzeitig.
- Verwenden Sie bestehende Fenster wieder, um verschiedene Seiten anzuzeigen.
- Beraten Sie Benutzer darüber, wie sie ihre Browser-Einstellungen anpassen können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Pop-ups

Alternativ zeigt das folgende Beispiel, wie ein Pop-up mit der `popup`-Funktion geöffnet wird.

```js
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
```

Es ist möglich, die Größe und Position des neuen Pop-ups zu steuern:

```js
const windowFeatures = "left=100,top=100,width=320,height=320";
const handle = window.open(
  "https://www.mozilla.org/",
  "mozillaWindow",
  windowFeatures,
);
if (!handle) {
  // The window wasn't allowed to open
  // This is likely caused by built-in popup blockers.
  // …
}
```

## Progressive Verbesserung

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar und `window.open()` wird nicht funktionieren. Anstatt sich allein auf die Anwesenheit dieser Funktion zu verlassen, können wir eine alternative Lösung bieten, damit die Seite oder Anwendung weiterhin funktioniert.

### Alternative Wege bereitstellen, wenn JavaScript deaktiviert ist

Wenn die Unterstützung von JavaScript deaktiviert oder nicht vorhanden ist, erstellt der Benutzeragent ein sekundäres Fenster entsprechend oder rendert die referenzierte Ressource entsprechend seiner Handhabung des `target`-Attributs. Das Ziel und die Idee sind, dem Benutzer eine Möglichkeit zu bieten (und _nicht aufzuzwingen_), die referenzierte Ressource zu öffnen.

#### HTML

```html
<a href="https://www.wikipedia.org/" target="OpenWikipediaWindow">
  Wikipedia, a free encyclopedia (opens in another, possibly already existing,
  tab)
</a>
```

#### JavaScript

```js
let windowObjectReference = null; // global variable
function openRequestedTab(url, windowName) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName);
  } else {
    windowObjectReference.focus();
  }
}

const link = document.querySelector("a[target='OpenWikipediaWindow']");
link.addEventListener(
  "click",
  (event) => {
    openRequestedTab(link.href);
    event.preventDefault();
  },
  false,
);
```

Der obige Code löst einige Benutzbarkeitsprobleme im Zusammenhang mit Links, die Pop-ups öffnen. Der Zweck von `event.preventDefault()` im Code besteht darin, die Standardeaktion des Links abzubrechen: Wenn der Event-Listener für `click` ausgeführt wird, besteht keine Notwendigkeit, die Standardeaktion des Links auszuführen. Wenn jedoch die JavaScript-Unterstützung im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Event-Listener für `click` ignoriert, und der Browser lädt die referenzierte Ressource in dem Zielrahmen oder Fenster, das den Namen `"WikipediaWindowName"` hat. Wenn kein Rahmen oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster und nennt es `"WikipediaWindowName"`.

> [!NOTE]
> Weitere Informationen zum `target`-Attribut finden Sie unter [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des target-Attributs erstellt mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target`-Attribut einen aussagekräftigen Namen zu geben und diesen `target`-Attribut auf Ihrer Seite zu wiederholen, sodass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (und den Prozess für den Benutzer daher beschleunigt) und so den Grund (und die Ressourcen für die Benutzung, aufgebrachte Zeit) für die Erstellung eines sekundären Fensters rechtfertigt. Die Verwendung eines einzelnen `target`-Attributwerts und dessen Wiederverwendung in Links ist wesentlich benutzerressourcenfreundlicher, da es nur ein einziges sekundäres Fenster erstellt, das recycelt wird.

Hier ist ein Beispiel, in dem ein sekundäres Fenster geöffnet und für andere Links wiederverwendet werden kann:

#### HTML

```html
<p>
  <a href="https://www.wikipedia.org/" target="SingleSecondaryWindowName">
    Wikipedia, a free encyclopedia (opens in another, possibly already existing,
    tab)
  </a>
</p>
<p>
  <a
    href="https://support.mozilla.org/products/firefox"
    target="SingleSecondaryWindowName">
    Firefox FAQ (opens in another, possibly already existing, tab)
  </a>
</p>
```

#### JavaScript

```js
let windowObjectReference = null; // global variable
let previousURL; /* global variable that will store the
                    url currently in the secondary window */
function openRequestedSingleTab(url) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
  } else if (previousURL !== url) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
    /* if the resource to load is different,
       then we load it in the already opened secondary window and then
       we bring such window back on top/in front of its parent window. */
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  }
  previousURL = url;
  /* explanation: we store the current url in order to compare url
     in the event of another call of this function. */
}

const links = document.querySelectorAll(
  "a[target='SingleSecondaryWindowName']",
);
for (const link of links) {
  link.addEventListener(
    "click",
    (event) => {
      openRequestedSingleTab(link.href);
      event.preventDefault();
    },
    false,
  );
}
```

## Same-Origin-Policy

Wenn der neu eröffnete Browsing-Kontext nicht den gleichen {{Glossary("Origin", "Ursprung")}} teilt, kann das öffnende Skript nicht mit dem Inhalt des Browsing-Kontexts interagieren (lesen oder schreiben).

```js example-bad
// Script from example.com
const otherOriginContext = window.open("https://example.org");
// example.com and example.org are not the same origin

console.log(otherOriginContext.origin);
// DOMException: Permission denied to access property "origin" on cross-origin object
```

```js example-good
// Script from example.com
const sameOriginContext = window.open("https://example.com");
// This time, the new browsing context has the same origin

console.log(sameOriginContext.origin);
// https://example.com
```

Weitere Informationen finden Sie im Artikel zur [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

## Zugänglichkeitsbedenken

### Vermeiden Sie die Verwendung von window.open()

Es ist vorzuziehen, `window.open()` zu vermeiden aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blocker-Funktion.
- Moderne Browser bieten Tab-Browsing, und Tab-fähige Browser-Benutzer bevorzugen es in den meisten Situationen, neue Tabs anstelle von neuen Fenstern zu öffnen.
- Benutzer können eingebaute Funktionen des Browsers oder Erweiterungen verwenden, um auszuwählen, ob sie einen Link in einem neuen Fenster, im gleichen Fenster, in einem neuen Tab, im gleichen Tab oder im Hintergrund öffnen möchten. Das Erzwingen einer speziellen Öffnungsmethode mit `window.open()` verwirrt sie und missachtet ihre Gewohnheiten.
- Popups haben keine Menü-Symbolleiste, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden; daher bevorzugen viele Benutzer Tab-Browsing, weil die Oberfläche stabil bleibt.

### Verwenden Sie niemals window.open() inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Hinzufügen von Lesezeichen oder wenn JavaScript geladen, fehlerhaft ist oder deaktiviert ist. Sie vermitteln auch falsche Semantik für unterstützende Technologien wie Bildschirmleser.

Falls nötig, verwenden Sie stattdessen ein [`<button>`](/de/docs/Web/HTML/Element/button)-Element. Im Allgemeinen _sollten Sie nur einen Link zur Navigation zu einer realen URL verwenden_.

### Identifizieren Sie immer Links, die zu einem sekundären Fenster führen

Identifizieren Sie Links, die neue Fenster öffnen, auf eine Weise, die die Navigation für Benutzer unterstützt.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Der Zweck ist, Benutzer vor Kontextwechseln zu warnen, um Verwirrung auf Seiten der Benutzer zu minimieren: Das Ändern des aktuellen Fensters oder das Öffnen neuer Fenster kann für Benutzer sehr verwirrend sein (im Falle eines Popups gibt es keine Symbolleiste, die eine "Zurück"-Schaltfläche bietet, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Kontextwechsel explizit vorab identifiziert werden, können die Benutzer entscheiden, ob sie weitermachen möchten oder so vorbereitet sein, dass sie nicht nur nicht verwirrt oder desorientiert werden, sondern auch erfahrenere Benutzer besser entscheiden können, wie solche Links geöffnet werden sollen (in einem neuen Fenster oder nicht, im gleichen Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis der WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs aus einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Dokumentation zum `target`-Attribut:
  - [`<a>`](/de/docs/Web/HTML/Element/a#target)
  - [`<form>`](/de/docs/Web/HTML/Element/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel#noopener)
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
