---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: 070ea0f4ceb3264e21253f63647e12a09bbdfd60
---

{{APIRef}}

Die **`open()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces lädt eine angegebene Ressource in einen neuen oder bestehenden Browsing-Kontext (das heißt, einen Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Element/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}

  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wenn ein leerer String (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite im Ziel-Browsing-Kontext geöffnet.

- `target` {{optional_inline}}

  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontexts angibt, in den die Ressource geladen wird. Wenn der Name keinen existierenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target`-Schlüsselwörter](/de/docs/Web/HTML/Element/a#target) `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur relevant für [fenced frames](/de/docs/Web/API/Fenced_frame_API).

    Dieser Name kann als `target`-Attribut von [`<a>`](/de/docs/Web/HTML/Element/a#target)- oder [`<form>`](/de/docs/Web/HTML/Element/form#target)-Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String, der eine durch Kommas getrennte Liste von Fenstermerkmalen in der Form `name=value` enthält. Boolesche Werte können auf true gesetzt werden, indem eines der folgenden verwendet wird: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige nicht-null Zahl ist. Diese Merkmale umfassen Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll usw. Die folgenden Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Weist darauf hin, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d. h. innerhalb eines Benutzerinteraktionsevent-Handlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion gemacht werden. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um die Registrierung einer Attribution-Quelle abzuschließen.

        Darüber hinaus wird der Browser auch ausgelöst, um die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header angegeben) zu speichern, wenn die `open()`-Methode abgeschlossen ist.

        Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

        > **Note:** `open()`-Aufrufe können nicht verwendet werden, um einen Attribution-Trigger zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt ist, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die UI-Funktionen, die im Popup-Fenster enthalten sind, werden automatisch vom Browser entschieden, im Allgemeinen einschließlich einer Adressleiste. Wenn `popup` vorhanden und auf false gesetzt ist, wird dennoch ein neuer Tab geöffnet.

        Es gibt einige ältere Funktionen, die früher UI-Funktionen des geöffneten Fensters steuerten. In modernen Browsern haben sie nur den Effekt, ein Popup zu beantragen. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Funktionen (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` ist false oder fehlt
        - `status` ist false oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Gibt die Breite des Inhaltsbereichs einschließlich der Bildlaufleisten an. Der Mindestwert ist 100.

    - `height` oder `innerHeight`

      - : Gibt die Höhe des Inhaltsbereichs einschließlich der Bildlaufleisten an. Der Mindestwert ist 100.

    - `left` oder `screenX`

      - : Gibt die Entfernung in Pixeln von der linken Seite des Arbeitsbereichs an, wie sie vom Betriebssystem des Benutzers definiert ist, wo das neue Fenster erzeugt wird.

    - `top` oder `screenY`

      - : Gibt die Entfernung in Pixeln von der oberen Seite des Arbeitsbereichs an, wie sie vom Betriebssystem des Benutzers definiert ist, wo das neue Fenster erzeugt wird.

    - `noopener`

      - : Wenn dieses Merkmal gesetzt ist, hat das neue Fenster keinen Zugriff auf das ausgehende Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht-leere Zielnamen, außer `_top`, `_self` und `_parent`, in Bezug darauf behandelt, ob ein neuer Browsing-Kontext geöffnet wird, wie `_blank`.

    - `noreferrer`
      - : Wenn dieses Merkmal gesetzt ist, wird der [`Referer`](/de/docs/Web/HTTP/Headers/Referer)-Header vom Browser ausgelassen, und `noopener` wird auf true gesetzt. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) für mehr Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`).

> [!NOTE]
> Angeforderte Position (`top`, `left`) und angeforderte Dimensionen (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn ein solcher angeforderter Wert es nicht ermöglicht, dass das gesamte Browser-Popup im Arbeitsbereich des Benutzersystems angezeigt wird. Mit anderen Worten, kein Teil des neuen Popups kann anfänglich außerhalb des Bildschirms positioniert werden.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}}-Objekt zurückgegeben.
Die zurückgegebene Referenz kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange sie den Sicherheitsanforderungen der [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy) entspricht.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einem neuen {{Glossary("Browsing_context", "Browsing Context Group")}} geöffnet wird, werden die Referenzen auf das geöffnete Fenster getrennt, und das zurückgegebene Objekt zeigt an, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, zum Beispiel weil es durch einen Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die `open()`-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces nimmt eine URL als Parameter und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Tab oder ein Fenster. Der `target`-Parameter bestimmt, in welches Fenster oder welchen Tab die Ressource geladen werden soll, und der `windowFeatures`-Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Funktionen zu öffnen und seine Größe und Position zu kontrollieren.

Remote-URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das tatsächliche Abrufen der URL wird verschoben und beginnt, nachdem der aktuelle Skriptblock beendet ist. Die Fenstererstellung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strikte Popup-Blocker-Richtlinien. Popupfenster müssen direkt als Reaktion auf Benutzereingaben geöffnet werden, und für jeden `Window.open()`-Aufruf ist ein separates Benutzergestenevent erforderlich. Dies verhindert, dass Websites Benutzer mit zahlreichen Fenstern spammen. Dies stellt jedoch ein Problem für Multi-Window-Anwendungen dar. Um dieses Problem zu umgehen, können Sie Ihre Anwendungen so gestalten, dass:

- Nicht mehr als ein neues Fenster auf einmal geöffnet wird.
- Bestehende Fenster wieder verwendet werden, um verschiedene Seiten anzuzeigen.
- Benutzer darauf hingewiesen werden, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ zeigt das folgende Beispiel, wie ein Popup mit dem `popup`-Merkmal geöffnet wird.

```js
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
```

Es ist möglich, die Größe und Position des neuen Popups zu kontrollieren:

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

In manchen Fällen ist JavaScript deaktiviert oder nicht verfügbar, und `window.open()` wird nicht funktionieren. Anstatt ausschließlich auf die Verfügbarkeit dieser Funktion zu vertrauen, können wir eine alternative Lösung bieten, damit die Website oder Anwendung dennoch funktioniert.

### Alternative Möglichkeiten bieten, wenn JavaScript deaktiviert ist

Wenn JavaScript-Unterstützung deaktiviert oder nicht vorhanden ist, erstellt der Benutzeragent ein sekundäres Fenster entsprechend oder rendert die referenzierte Ressource gemäß seiner Behandlung des `target`-Attributs. Das Ziel und die Idee sind es, dem Benutzer eine Möglichkeit zu bieten (und _nicht aufzuzwingen_), um die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Benutzerfreundlichkeitsprobleme in Bezug auf Links, die Popups öffnen. Der Zweck von `event.preventDefault()` im Code besteht darin, die Standardaktion des Links abzubrechen: Wenn der Event-Listener für `click` ausgeführt wird, besteht keine Notwendigkeit, die Standardaktion des Links auszuführen. Aber wenn die JavaScript-Unterstützung auf dem Browser des Benutzers deaktiviert ist oder fehlt, wird der Event-Listener für `click` ignoriert, und der Browser lädt die referenzierte Ressource in dem Ziel-Frame oder -Fenster mit dem Namen `"WikipediaWindowName"`. Wenn kein Frame oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster und nennt es `"WikipediaWindowName"`.

> [!NOTE]
> Für weitere Details über das `target`-Attribut siehe [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert für das target-Attribut wird mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellen, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target`-Attribut einen sinnvollen Namen zu geben und verwenden Sie dieses `target`-Attribut auf Ihrer Seite erneut, sodass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (wodurch das Verfahren für den Benutzer beschleunigt wird) und so den Grund (und die Systemressourcen des Benutzers, die dafür aufgewendete Zeit) rechtfertigt, ein sekundäres Fenster überhaupt zu erstellen. Die Verwendung eines einzigen `target`-Attributwerts und dessen Wiederverwendung in Links ist viel ressourcenschonender für Benutzer, da es nur ein einziges sekundäres Fenster erstellt, das recycelt wird.

Hier ist ein Beispiel, bei dem ein sekundäres Fenster geöffnet und für andere Links wiederverwendet werden kann:

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

## Same-Origin-Richtlinie

Wenn der neu geöffnete Browsing-Kontext nicht denselben {{Glossary("Origin", "Origin")}} teilt, kann das öffnende Skript nicht mit dem Inhalt des Browsing-Kontexts interagieren (lesen oder schreiben).

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

Für weitere Informationen lesen Sie den Artikel zur [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy).

## Barrierefreiheitsbedenken

### Vermeiden Sie den Rückgriff auf window.open()

Es ist vorzuziehen, den Rückgriff auf `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Funktion zum Blockieren von Popups.
- Moderne Browser bieten Tabbed-Browsing, und Benutzer von tab-fähigen Browsern ziehen es in den meisten Situationen vor, neue Tabs zu öffnen anstatt neuer Fenster.
- Benutzer können eingebaute Browserfunktionen oder Erweiterungen verwenden, um auszuwählen, ob sie einen Link in einem neuen Fenster, im selben Fenster, in einem neuen Tab, im selben Tab oder im Hintergrund öffnen möchten. Das Erzwingen einer bestimmten Art der Öffnung durch `window.open()` verwirrt sie und ignoriert ihre Gewohnheiten.
- Popups haben keine Menüleiste, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden; daher bevorzugen viele Benutzer das Browsen mit Tabs, da die Benutzeroberfläche stabil bleibt.

### Verwenden Sie niemals window.open() inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, beim Bookmarking oder wenn JavaScript geladen wird, Fehler auftritt oder deaktiviert ist. Sie vermitteln auch assistiven Technologien wie Bildschirmlesegeräten falsche Semantik.

Wenn nötig, verwenden Sie stattdessen ein [`<button>`](/de/docs/Web/HTML/Element/button)-Element. Im Allgemeinen _sollten Sie einen Link nur für die Navigation zu einer echten URL verwenden_.

### Erkennen Sie immer Links, die zu einem sekundären Fenster führen

Erkennen Sie Links, die neue Fenster öffnen, auf eine Weise, die die Navigation für Benutzer unterstützt.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Der Zweck ist, Benutzer über Kontextänderungen zu warnen, um Verwirrung seitens des Benutzers zu minimieren: das Wechseln des aktuellen Fensters oder das Öffnen neuer Fenster kann für Benutzer sehr desorientierend sein (im Falle eines Popups bietet keine Symbolleiste einen "Zurück"-Knopf, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Kontextänderungen vor ihrem Auftreten explizit identifiziert werden, können Benutzer bestimmen, ob sie fortfahren möchten, oder sie können auf die Änderung vorbereitet sein: Sie werden nicht nur nicht verwirrt oder desorientiert sein, sondern erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen möchten (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständliche WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur, wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorwarnung geben, wenn sich ein neues Fenster öffnet](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Dokumentation des `target`-Attributs:
  - [`<a>`](/de/docs/Web/HTML/Element/a#target)
  - [`<form>`](/de/docs/Web/HTML/Element/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel#noopener)
- [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy)
