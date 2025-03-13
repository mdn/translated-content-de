---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef}}

Die **`open()`** Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces lädt eine angegebene Ressource in einen neuen oder bestehenden Browsing-Kontext (das heißt, einen Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Element/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}

  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wird ein leerer String (`""`) angegeben oder dieser Parameter weggelassen, wird eine leere Seite im anvisierten Browsing-Kontext geöffnet.

- `target` {{optional_inline}}

  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontexts angibt, in den die Ressource geladen wird. Wenn der Name keinen existierenden Kontext identifiziert, wird ein neuer Kontext erstellt und der angegebene Name zugewiesen. Auch die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Element/a#target) `_self`, `_blank` (Standardwert), `_parent`, `_top` und `_unfencedTop` können verwendet werden. `_unfencedTop` ist nur für [fenced frames](/de/docs/Web/API/Fenced_frame_API) relevant.

    Dieser Name kann als `target`-Attribut von [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target)-Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String, der eine durch Kommas getrennte Liste von Fenstermerkmalen in der Form `name=value` enthält. Boolesche Werte können auf wahr gesetzt werden mit: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige von null verschiedene Ganzzahl ist. Diese Merkmale umfassen Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll und so weiter. Die folgenden Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} erfolgen (d.h. innerhalb eines Benutzerinteraktionsereignishandlers wie `click`), innerhalb von fünf Sekunden nach der Benutzerinteraktion. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um die Registrierung einer Attribution-Quelle abzuschließen.

        Zusätzlich wird der Browser auch ausgelöst, die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt) zu speichern, wenn die `open()`-Methode abgeschlossen ist.

        Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

        > **Note:** `open()`-Aufrufe können nicht verwendet werden, um einen Attribution-Trigger zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf wahr gesetzt ist, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die UI-Merkmale des Popup-Fensters werden automatisch vom Browser entschieden, in der Regel wird nur eine Adressleiste angezeigt. Wenn `popup` vorhanden und auf false gesetzt ist, wird trotzdem ein neuer Tab geöffnet.

        Es gibt einige veraltete Merkmale, die früher UI-Merkmale des geöffneten Fensters steuerten. In modernen Browsern bewirken sie nur, dass ein Popup angefordert wird. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Merkmale (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide false oder nicht vorhanden
        - `menubar` ist false oder nicht vorhanden
        - `resizable` ist false
        - `scrollbars` ist false oder nicht vorhanden
        - `status` ist false oder nicht vorhanden

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Gibt die Breite des Inhaltsbereichs an, einschließlich Scrollleisten. Der Mindestwert beträgt 100.

    - `height` oder `innerHeight`

      - : Gibt die Höhe des Inhaltsbereichs an, einschließlich Scrollleisten. Der Mindestwert beträgt 100.

    - `left` oder `screenX`

      - : Gibt die Entfernung in Pixeln von der linken Seite des Arbeitsbereichs an, wie er vom Betriebssystem des Benutzers definiert ist, wo das neue Fenster erzeugt wird.

    - `top` oder `screenY`

      - : Gibt die Entfernung in Pixeln von der oberen Seite des Arbeitsbereichs an, wie er vom Betriebssystem des Benutzers definiert ist, wo das neue Fenster erzeugt wird.

    - `noopener`

      - : Wenn dieses Merkmal gesetzt ist, hat das neue Fenster keinen Zugriff auf das ursprungserzeugende Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht-leere Zielnamen, außer `_top`, `_self` und `_parent`, wie `_blank` behandelt, wenn es darum geht, zu entscheiden, ob ein neuer Browsing-Kontext geöffnet werden soll.

    - `noreferrer`
      - : Wenn dieses Merkmal gesetzt ist, lässt der Browser den [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header weg und setzt `noopener` auf wahr. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) für weitere Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie der leere String (`""`) behandelt.

> [!NOTE]
> Angeforderte Position (`top`, `left`) und angeforderte Dimension (`width`, `height`) Werte in `windowFeatures` **werden korrigiert**, wenn ein solcher angeforderter Wert nicht ermöglicht, dass das gesamte Browser-Popup im Anwendungsbereich des Betriebssystems des Benutzers gerendert werden kann. Mit anderen Worten, kein Teil des neuen Popups kann initial außerhalb des sichtbaren Bereichs positioniert werden.

### Rückgabewert

Wenn der Browser erfolgreich den neuen Browsing-Kontext öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}}-Objekt zurückgegeben.
Die zurückgegebene Referenz kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontextes zuzugreifen, solange sie die Sicherheitsanforderungen der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) erfüllt.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einem neuen {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} geöffnet wird, werden Referenzen auf das geöffnete Fenster getrennt und das zurückgegebene Objekt zeigt an, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, zum Beispiel, weil er durch einen Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die `open()` Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces nimmt eine URL als Parameter und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Tab oder ein Fenster. Der `target` Parameter bestimmt, in welches Fenster oder welchen Tab die Ressource geladen werden soll, und der `windowFeatures` Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Funktionen zu öffnen und Größe und Position zu steuern.

Entfernte URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das eigentliche Abrufen der URL wird verzögert und beginnt, nachdem der aktuelle Skriptblock die Ausführung abgeschlossen hat. Die Fenstergenerierung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strikte Popup-Blocker-Richtlinien. Popup-Fenster müssen als direkte Reaktion auf Benutzereingaben geöffnet werden, und für jeden `Window.open()`-Aufruf ist ein separates Benutzeraktionsereignis erforderlich. Dies verhindert, dass Websites die Benutzer mit vielen Fenstern überfluten. Dies stellt jedoch eine Herausforderung für Multi-Window-Anwendungen dar. Um dieses Problem zu umgehen, können Sie Ihre Anwendungen so gestalten, dass:

- Sie nicht mehr als ein neues Fenster gleichzeitig öffnen.
- Sie bestehende Fenster zum Anzeigen verschiedener Seiten wiederverwenden.
- Sie Nutzer darüber informieren, wie sie ihre Browsereinstellungen ändern können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Pop-ups

Alternativ zeigt das folgende Beispiel, wie man ein Popup öffnet, indem man das `popup`-Merkmal verwendet.

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

## Progressives Enhancement

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar, und `window.open()` funktioniert nicht. Anstatt sich ausschließlich auf die Verfügbarkeit dieser Funktion zu verlassen, können wir eine alternative Lösung bieten, sodass die Website oder Anwendung weiterhin funktioniert.

### Bereitstellen alternativer Möglichkeiten, wenn JavaScript deaktiviert ist

Wenn JavaScript-Unterstützung deaktiviert oder nicht vorhanden ist, erstellt der User Agent entsprechend ein sekundäres Fenster oder rendert die referenzierte Ressource gemäß seiner Handhabung des `target`-Attributs. Das Ziel und die Idee sind, den Benutzern eine Möglichkeit zu bieten (und nicht aufzuzwingen), die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Usability-Probleme im Zusammenhang mit Links, die Pop-ups öffnen. Der Zweck von `event.preventDefault()` im Code ist es, die Standardaktion des Links abzubrechen: Wenn der Ereignislistener für `click` ausgeführt wird, besteht keine Notwendigkeit, die Standardaktion des Links auszuführen. Wenn die JavaScript-Unterstützung im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Ereignislistener für `click` ignoriert und der Browser lädt die referenzierte Ressource im Zielrahmen oder -fenster mit dem Namen `"WikipediaWindowName"`. Wenn kein Rahmen oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster mit diesem Namen.

> [!NOTE]
> Für weitere Details zum `target`-Attribut siehe [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target).

### Wiederverwendung vorhandener Fenster und Vermeidung von `target="_blank"`

Die Verwendung von `"_blank"` als Wert für das target-Attribut führt dazu, dass mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellt werden, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, einen sinnvollen Namen für Ihr `target`-Attribut zu geben und diesen auf Ihrer Seite wiederzuverwenden, sodass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (was den Prozess für den Benutzer beschleunigt) und somit den Grund (und die Benutzer-Systemressourcen, Zeitaufwand) für das Erstellen eines sekundären Fensters rechtfertigt. Die Verwendung eines einzigen target-Attributwerts und dessen Wiederverwendung in Links ist viel benutzerressourcenfreundlicher, da dadurch nur ein einziges sekundäres Fenster erstellt wird, das recycelt wird.

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

Wenn der neu geöffnete Browsing-Kontext nicht denselben {{Glossary("Origin", "Origin")}} teilt, kann das öffnende Skript nicht mit dem Inhalt des Browsing-Kontextes interagieren (weder lesen noch schreiben).

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

Für weitere Informationen siehe den Artikel zur [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

## Barrierefreiheitshinweise

### Vermeiden Sie es, window.open() zu verwenden

Es ist vorzuziehen, `window.open()` aus mehreren Gründen zu vermeiden:

- Moderne Browser bieten eine Popup-Blockierungsfunktion.
- Moderne Browser bieten Tab-Browsing, und Benutzer von tabfähigen Browsern ziehen es vor, in den meisten Situationen neue Tabs zu öffnen statt neue Fenster.
- Benutzer können integrierte Browsereinstellungen oder Erweiterungen verwenden, um auszuwählen, ob ein Link in einem neuen Fenster, im selben Fenster, in einem neuen Tab, im gleichen Tab oder im Hintergrund geöffnet werden soll. Wenn man das Öffnen auf eine bestimmte Weise erzwingt, indem man `window.open()` verwendet, wird dies die Benutzer verwirren und ihre Gewohnheiten ignorieren.
- Popups haben keine Menüleiste, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden; daher ziehen viele Benutzer Tab-Browsing vor, weil die Oberfläche stabil bleibt.

### Verwenden Sie window.open() niemals inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Wechseln von Links, Öffnen von Links in einem neuen Tab/Fenster, beim Lesezeichen setzen oder wenn JavaScript geladen, mit Fehlern ausgeführt wird oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien, wie Screenreader.

Verwenden Sie bei Bedarf ein [`<button>`](/de/docs/Web/HTML/Element/button)-Element. Allgemein gilt: _Sie sollten nur einen Link zur Navigation zu einer echten URL verwenden_.

### Kennzeichnen Sie immer Links, die zu einem sekundären Fenster führen

Kennzeichnen Sie Links, die neue Fenster öffnen, so, dass sie die Navigation für Benutzer erleichtern.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Der Zweck besteht darin, Benutzer auf Kontextänderungen hinzuweisen, um die Verwirrung auf Seiten der Benutzer zu minimieren: Das Ändern des aktuellen Fensters oder das Erzeugen neuer Fenster kann für Benutzer sehr verwirrend sein (bei einem Popup wird keine Toolbar bereitgestellt, die eine "Zurück"-Schaltfläche hat, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Kontextänderungen explizit identifiziert werden, bevor sie auftreten, können die Benutzer entscheiden, ob sie fortfahren möchten, oder sie können sich auf die Änderung vorbereiten: Nicht nur, dass sie nicht verwirrt oder desorientiert werden, erfahrenere Benutzer können besser entscheiden, wie solche Links geöffnet werden (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / WCAG verstehen, Leitfaden 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `target` Attributdokumentation:
  - [`<a>`](/de/docs/Web/HTML/Element/a#target)
  - [`<form>`](/de/docs/Web/HTML/Element/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel#noopener)
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
