---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: 7e8e1764410fa1871549d9961c2375389b9d55eb
---

{{APIRef}}

Die **`open()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle lädt eine spezifizierte Ressource in einen neuen oder bestehenden Browsing-Kontext (das heißt, ein Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Reference/Elements/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}
  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wenn ein leerer String (`""`) angegeben wird oder wenn dieser Parameter weggelassen wird, wird eine leere Seite im gezielten Browsing-Kontext geöffnet.

- `target` {{optional_inline}}
  - : Ein String, ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontexts spezifiziert, in den die Ressource geladen wird. Wenn der Name keinen existierenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Reference/Elements/a#target), `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur für [fenced frames](/de/docs/Web/API/Fenced_frame_API) relevant.

    Dieser Name kann als `target`-Attribut der [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target) Elemente verwendet werden.

- `windowFeatures` {{optional_inline}}
  - : Ein String, der eine durch Kommata getrennte Liste von Fensterfunktionen in der Form `name=value` enthält. Boolesche Werte können auf true gesetzt werden, indem einer der folgenden Werte verwendet wird: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige nicht-null Zahl ist. Diese Funktionen umfassen Optionen wie die Standardgröße und Position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll, und so weiter. Die folgenden Optionen werden unterstützt:
    - `attributionsrc` {{deprecated_inline}}
      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "flüchtiger Aktivierung")}} erfolgen (d.h. innerhalb eines Benutzerinteraktions-Ereignishandlers wie `click`), innerhalb von fünf Sekunden nach der Benutzerinteraktion. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers als Antwort zu initiieren, um die Registrierung einer Attributionsquelle abzuschließen.

        Zusätzlich wird der Browser ausgelöst, die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader bereitgestellt), wenn die `open()`-Methode abgeschlossen ist.

        Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

        > [!NOTE]
        > `open()`-Aufrufe können nicht verwendet werden, um einen Attribution-Auslöser zu registrieren.

    - `popup`
      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt ist, wird angefragt, dass ein minimales Popup-Fenster verwendet wird. Die im Popup-Fenster enthaltenen UI-Funktionen werden automatisch vom Browser entschieden, normalerweise nur mit einer Adressleiste. Wenn `popup` vorhanden und auf false gesetzt ist, wird trotzdem ein neuer Tab geöffnet.

        Es gibt einige veraltete Funktionen, die früher UI-Funktionen des geöffneten Fensters steuerten. In modernen Browsern haben sie nur den Effekt, eine Popup-Anfrage zu stellen. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Funktionen (einschließlich nicht erkannter) enthält außer `noopener`, `noreferrer` oder `attributionsrc`, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:
        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` ist false oder fehlt
        - `status` ist false oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`
      - : Gibt die Breite des Inhaltsbereichs an, einschließlich Scrollleisten. Der minimale erforderliche Wert ist 100.

    - `height` oder `innerHeight`
      - : Gibt die Höhe des Inhaltsbereichs an, einschließlich Scrollleisten. Der minimale erforderliche Wert ist 100.

    - `left` oder `screenX`
      - : Gibt die Entfernung in Pixeln von der linken Seite des Arbeitsbereichs an, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster generiert wird.

    - `top` oder `screenY`
      - : Gibt die Entfernung in Pixeln von der Oberseite des Arbeitsbereichs an, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster generiert wird.

    - `noopener`
      - : Wenn diese Funktion gesetzt ist, hat das neue Fenster keinen Zugriff auf das Ursprungsfenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht-leere Zielnamen, außer `_top`, `_self` und `_parent`, im Hinblick darauf, ob ein neuer Browsing-Kontext geöffnet werden soll, wie `_blank` behandelt.

    - `noreferrer`
      - : Wenn diese Funktion gesetzt ist, wird der [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header ausgelassen, und `noopener` wird auf true gesetzt. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) für weitere Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird genauso behandelt wie der leere String (`""`).

> [!NOTE]
> Angeforderte Position (`top`, `left`) und angeforderte Abmessung (`width`, `height`) Werte in `windowFeatures` **werden korrigiert**, wenn einer dieser angeforderten Werte es nicht erlaubt, dass das gesamte Browser-Popup im Arbeitsbereich für Anwendungen des Betriebssystems des Benutzers gerendert werden kann. Mit anderen Worten, kein Teil des neuen Popups kann initial außerhalb des Bildschirms positioniert sein.

### Rückgabewert

Wenn es dem Browser gelingt, den neuen Browsing-Kontext zu öffnen, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}} Objekt zurückgegeben.
Der zurückgegebene Verweis kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange er den Sicherheitsanforderungen der [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy) entspricht.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einer neuen {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} geöffnet wird, werden Verweise auf das geöffnete Fenster getrennt, und das zurückgegebene Objekt zeigt an, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn es dem Browser nicht gelingt, den neuen Browsing-Kontext zu öffnen, z.B. weil dieser durch einen Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die `open()`-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle nimmt eine URL als Parameter und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Browsing-Kontext.
Der `target`-Parameter bestimmt, in welches Fenster, welchen Tab oder welches Frame die Ressource geladen werden soll, und der `windowFeatures`-Parameter kann verwendet werden, um die Funktionen des neuen Fensters zu steuern, wie z.B. ob es ein Tab oder ein Popup mit minimalen UI-Funktionen ist, seine Größe und Position, usw.

Wenn `window.open()` einen neuen Browsing-Kontext erstellt (d.h. wenn kein existierendes Fenster mit diesem Namen gefunden wird), enthält das Fenster anfangs `about:blank`.
Wenn eine andere URL angegeben wurde, wird sie asynchron geladen, und das globale Objekt wird für diese Navigation wiederverwendet, wenn es gleich-originen ist - so können alle vor dem Laden gesetzten Eigenschaften im Fenster bestehen bleiben.
Wenn `target` auf einen existierenden Navigierbaren (`_self`, `_parent`, `_top` oder einen bekannten Fensternamen) verweist, erfolgt keine `about:blank` Phase - der Browser navigiert den existierenden Kontext direkt.

Moderne Browser haben strenge Popup-Blocker-Richtlinien. Popup-Fenster müssen als direkte Antwort auf Benutzereingaben geöffnet werden, und es ist ein separates Benutzeraktionsereignis für jeden `Window.open()`-Aufruf erforderlich. Dies verhindert, dass Websites Benutzer mit vielen Fenstern spammen. Dies stellt jedoch ein Problem für Multi-Window-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten:

- Öffnen Sie nicht mehr als ein neues Fenster gleichzeitig.
- Verwenden Sie bestehende Fenster wieder, um verschiedene Seiten anzuzeigen.
- Raten Sie den Benutzern, ihre Browsereinstellungen zu aktualisieren, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ demonstriert das folgende Beispiel, wie man ein Popup mit der `popup` Funktion öffnet.

```js
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
```

Es ist möglich, die Größe und Position des neuen Popups zu steuern:

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

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar, und `window.open()` wird nicht funktionieren. Anstatt sich ausschließlich auf das Vorhandensein dieser Funktion zu verlassen, können wir eine alternative Lösung bieten, sodass die Seite oder Anwendung weiterhin funktioniert.

### Alternative Wege anbieten, wenn JavaScript deaktiviert ist

Wenn die JavaScript-Unterstützung deaktiviert ist oder nicht existiert, wird der User-Agent entsprechend ein sekundäres Fenster erstellen oder die referenzierte Ressource gemäß seiner Handhabung des `target`-Attributs rendern. Das Ziel und die Idee sind es, dem Benutzer eine Möglichkeit zu bieten (und _nicht aufzuzwingen_), die referenzierte Ressource zu öffnen.

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
link.addEventListener("click", (event) => {
  openRequestedTab(link.href);
  event.preventDefault();
});
```

Der obige Code löst einige Usability-Probleme in Bezug auf Links, die Popups öffnen. Der Zweck des `event.preventDefault()` im Code ist es, die Standardaktion des Links abzubrechen: Wenn der Ereignislistener für `click` ausgeführt wird, besteht keine Notwendigkeit, die Standardaktion des Links auszuführen. Aber wenn die JavaScript-Unterstützung im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Ereignislistener für `click` ignoriert, und der Browser lädt die referenzierte Ressource im Ziel-Frame oder -Fenster, das den Namen `"WikipediaWindowName"` hat. Wenn kein Frame oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster und benennt es `"WikipediaWindowName"`.

> [!NOTE]
> Für weitere Details über das `target`-Attribut, siehe [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des Zielattributs wird mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellen, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target`-Attribut einen sinnvollen Namen zu geben und diesen `target`-Attribut auf Ihrer Seite wiederzuverwenden, damit ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (was den Prozess für den Benutzer beschleunigt) und so den Grund (und die Systemressourcen des Benutzers, die aufgebrachte Zeit) rechtfertigen, warum überhaupt ein sekundäres Fenster erstellt wurde. Die Verwendung eines einzigen `target`-Attributwerts und dessen Wiederverwendung in Links ist viel benutzerressourcenfreundlicher, da es nur ein einziges sekundäres Fenster erstellt, das recycelt wird.

Hier ist ein Beispiel, wo ein sekundäres Fenster geöffnet und für andere Links wiederverwendet werden kann:

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
  link.addEventListener("click", (event) => {
    openRequestedSingleTab(link.href);
    event.preventDefault();
  });
}
```

## Same-origin policy

Wenn der neu geöffnete Browsing-Kontext nicht den gleichen {{Glossary("Origin", "Ursprung")}} teilt, kann das öffnende Skript nicht mit dem Inhalt des Browsing-Kontexts interagieren (lesen oder schreiben).

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

Für weitere Informationen, siehe den Artikel [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy).

## Barrierefreiheit Bedenken

### Vermeiden Sie die Nutzung von window.open()

Es ist vorzuziehen, die Nutzung von `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blockierungsfunktion.
- Moderne Browser bieten Tab-Browsing, und tab-fähige Browser-Benutzer bevorzugen es, neue Tabs zu öffnen, anstatt neue Fenster zu öffnen, in den meisten Situationen.
- Benutzer können browserinterne Funktionen oder Erweiterungen verwenden, um auszuwählen, ob ein Link in einem neuen Fenster, im gleichen Fenster, in einem neuen Tab, im gleichen Tab oder im Hintergrund geöffnet werden soll. Das erzwungene Öffnen in einer bestimmten Weise mit `window.open()` wird sie verwirren und ihre Gewohnheiten missachten.
- Popups haben keine Menü-Werkzeugleiste, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden. Daher ziehen viele Benutzer das Tab-Browsing vor, weil die Schnittstelle stabil bleibt.

### Verwenden Sie window.open() niemals inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese fehlerhaften `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichen setzen oder wenn JavaScript lädt, Fehler hat oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien wie Bildschirmlesesoftware.

Falls notwendig, verwenden Sie ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element stattdessen. Im Allgemeinen _sollten Sie nur einen Link zur Navigation zu einer realen URL verwenden_.

### Kennzeichnen Sie immer Links, die zu einem sekundären Fenster führen

Kennzeichnen Sie Links, die neue Fenster öffnen, auf eine Weise, die die Navigation für Benutzer erleichtert.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Der Zweck besteht darin, Benutzer vor Kontextänderungen zu warnen, um Verwirrung auf Seiten des Benutzers zu minimieren: Das Ändern des aktuellen Fensters oder das Öffnen neuer Fenster kann für Benutzer sehr desorientierend sein (im Falle eines Popups gibt es keinen Werkzeugleisten-"Zurück"-Button, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Kontextänderungen explizit identifiziert werden, bevor sie auftreten, können die Benutzer entscheiden, ob sie fortfahren möchten oder darauf vorbereitet sind: Sie werden nicht verwirrt oder desorientiert sein, und erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis von WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Dokumentation zum `target`-Attribut:
  - [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Reference/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
