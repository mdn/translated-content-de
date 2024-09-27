---
title: "Window: open()-Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Die **`open()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle lädt eine angegebene Ressource in einen neuen oder vorhandenen Browsing-Kontext (das heißt, ein Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Element/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}

  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wenn ein leerer String (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite in den anvisierten Browsing-Kontext geöffnet.

- `target` {{optional_inline}}

  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontexts angibt, in den die Ressource geladen wird. Wenn der Name keinen vorhandenen Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Element/a#target), `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur für [fenced frames](/de/docs/Web/API/Fenced_frame_API) relevant.

    Dieser Name kann als `target`-Attribut von [`<a>`](/de/docs/Web/HTML/Element/a#target)- oder [`<form>`](/de/docs/Web/HTML/Element/form#target)-Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String, der eine durch Kommas getrennte Liste von Fensterfunktionen in der Form `name=value` enthält. Boolesche Werte können auf true gesetzt werden mit: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige nicht-null-Zahl ist. Diese Features umfassen Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll und so weiter. Die folgenden Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit [transient activation](/de/docs/Glossary/Transient_activation) (d. h. innerhalb eines Benutzerinteraktionsereignis-Handlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion erfolgen. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um die Registrierung einer Attributionquelle abzuschließen.

        Zusätzlich wird der Browser auch ausgelöst, die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn die `open()`-Methode abgeschlossen ist.

        Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

        > **Note:** `open()`-Aufrufe können nicht verwendet werden, um einen Attribution-Trigger zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt wird, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die UI-Features des Popup-Fensters werden automatisch vom Browser entschieden, meistens ist nur eine Adressleiste enthalten. Wenn `popup` vorhanden und auf false gesetzt ist, wird trotzdem ein neuer Tab geöffnet.

        Es gibt einige veraltete Features, die früher UI-Features des geöffneten Fensters steuerten. In modernen Browsern haben sie nur die Wirkung, ein Popup anzufordern. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Features (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster ebenfalls als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` sind false oder fehlen
        - `status` ist false oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Gibt die Breite des Inhaltsbereichs einschließlich der Scrollleisten an. Der Mindestwert ist 100.

    - `height` oder `innerHeight`

      - : Gibt die Höhe des Inhaltsbereichs einschließlich der Scrollleisten an. Der Mindestwert ist 100.

    - `left` oder `screenX`

      - : Gibt den Abstand in Pixeln von der linken Seite des Arbeitsbereichs, wie er vom Betriebssystem des Benutzers definiert ist, an, wo das neue Fenster generiert wird.

    - `top` oder `screenY`

      - : Gibt den Abstand in Pixeln von der oberen Seite des Arbeitsbereichs, wie er vom Betriebssystem des Benutzers definiert ist, an, wo das neue Fenster generiert wird.

    - `noopener`

      - : Wenn dieses Feature gesetzt ist, hat das neue Fenster keinen Zugriff auf das ursprüngliche Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht-leere Zielenamen, außer `_top`, `_self` und `_parent`, wie `_blank` behandelt, was die Entscheidung betrifft, ob ein neuer Browsing-Kontext geöffnet wird.

    - `noreferrer`
      - : Wenn dieses Feature gesetzt ist, wird der Browser den [`Referer`](/de/docs/Web/HTTP/Headers/Referer)-Header weglassen und `noopener` auf true setzen. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) für weitere Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie ein leerer String (`""`) behandelt.

> [!NOTE]
> Angeforderte Position (`top`, `left`) und angeforderte Dimension (`width`, `height`)-Werte in `windowFeatures` **werden korrigiert**, wenn ein solcher angeforderter Wert es nicht zulässt, dass das gesamte Browser-Popup innerhalb des Arbeitsbereichs für Anwendungen des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten: Kein Teil des neuen Popups kann initial außerhalb des Bildschirms positioniert werden.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein [`WindowProxy`](/de/docs/Glossary/WindowProxy)-Objekt zurückgegeben. Die zurückgegebene Referenz kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange sie den Sicherheitsanforderungen der [Same-origin policy](/de/docs/Web/Security/Same-origin_policy) entspricht.

`null` wird zurückgegeben, wenn der Browser das Öffnen des neuen Browsing-Kontexts nicht erfolgreich ausführen kann, zum Beispiel, weil es von einem Popup-Blocker des Browsers blockiert wurde.

## Beschreibung

Die `open()`-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle akzeptiert eine URL als Parameter und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Tab oder ein Fenster. Der `target`-Parameter bestimmt, in welches Fenster oder Tab die Ressource geladen werden soll, und der `windowFeatures`-Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Funktionen zu öffnen und seine Größe und Position zu steuern.

Entfernte URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das tatsächliche Abrufen der URL erfolgt verzögert und beginnt, nachdem der aktuelle Skriptblock ausgeführt wurde. Die Fenstererstellung und das Laden der referenzierten Ressource werden asynchron durchgeführt.

Moderne Browser haben strenge Popup-Blocker-Richtlinien. Popup-Fenster müssen direkt als Antwort auf Benutzereingaben geöffnet werden, und für jeden `Window.open()`-Aufruf ist ein separates Benutzergeste-Ereignis erforderlich. Dadurch wird verhindert, dass Websites die Nutzer mit zahlreichen Fenstern belästigen. Dies stellt jedoch ein Problem für Multi-Fenster-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten:

- Öffnen Sie nicht mehr als ein neues Fenster gleichzeitig.
- Verwenden Sie vorhandene Fenster erneut, um verschiedene Seiten anzuzeigen.
- Beraten Sie Benutzer, wie sie ihre Browser-Einstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ zeigt das folgende Beispiel, wie ein Popup mit der `popup`-Funktion geöffnet wird.

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

## Progressive Erweiterung

In manchen Fällen ist JavaScript deaktiviert oder nicht verfügbar, und `window.open()` wird nicht funktionieren. Anstatt sich ausschließlich auf das Vorhandensein dieses Features zu verlassen, können wir eine alternative Lösung bieten, damit die Website oder Anwendung weiterhin funktioniert.

### Bereitstellung alternativer Wege, wenn JavaScript deaktiviert ist

Wenn die JavaScript-Unterstützung deaktiviert oder nicht vorhanden ist, wird der Benutzeragent ein sekundäres Fenster entsprechend erstellen oder die referenzierte Ressource gemäß seiner Handhabung des `target`-Attributs rendern. Das Ziel und die Idee sind es, dem Benutzer (und nicht aufzuzwingen) eine Möglichkeit zu bieten, die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Benutzerfreundlichkeitsprobleme bei Links, die Popups öffnen. Der Zweck von `event.preventDefault()` im Code ist es, die Standardaktion des Links abzubrechen: Wenn der Event-Listener für `click` ausgeführt wird, gibt es keinen Bedarf, die Standardaktion des Links auszuführen. Aber wenn die JavaScript-Unterstützung im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Event-Listener für `click` ignoriert, und der Browser lädt die referenzierte Ressource im Zielrahmen oder Fenster, das den Namen `"WikipediaWindowName"` hat. Wenn kein Rahmen oder Fenster den Namen `"WikipediaWindowName"` hat, wird der Browser ein neues Fenster erstellen und es `"WikipediaWindowName"` nennen.

> [!NOTE]
> Für mehr Details zum `target`-Attribut siehe [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des `target`-Attributs wird mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellen, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target`-Attribut einen bedeutungsvollen Namen zu geben und diesen `target`-Attribut auf Ihrer Seite zu wiederverwenden, so dass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (und damit den Prozess für den Benutzer beschleunigt) und damit den Grund (und die Benutzerressourcen, aufgewendete Zeit) rechtfertigt, warum überhaupt ein Sekundärfenster erstellt wurde. Die Verwendung eines einzigen `target`-Attributwerts und dessen Wiederverwendung in Links ist viel benutzerressourcenfreundlicher, da nur ein einziges sekundäres Fenster erstellt wird, das recycelt wird.

Hier ist ein Beispiel, wo ein Sekundärfenster geöffnet und für andere Links wiederverwendet werden kann:

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

## Same-origin policy

Wenn der neu geöffnete Browsing-Kontext nicht die gleiche [Herkunft](/de/docs/Glossary/Origin) teilt, wird das öffnende Skript nicht mit dem Inhalt des Browsing-Kontexts interagieren können (lesen oder schreiben).

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

Für weitere Informationen siehe den Artikel zur [Same-origin policy](/de/docs/Web/Security/Same-origin_policy).

## Barrierefreiheitsbedenken

### Vermeiden Sie es, auf window.open() zurückzugreifen

Es ist vorzuziehen, `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blockierungsfunktion.
- Moderne Browser bieten Tab-Browsing, und Benutzer tabfähiger Browser bevorzugen es, neue Tabs zu öffnen, anstatt neue Fenster zu öffnen.
- Nutzer können Browser-eigene Funktionen oder Erweiterungen verwenden, um zu entscheiden, ob sie einen Link in einem neuen Fenster, im selben Fenster, in einem neuen Tab, im selben Tab oder im Hintergrund öffnen möchten. Das Erzwängen des Öffnens auf eine bestimmte Weise mit `window.open()` wird sie verwirren und ihre Gewohnheiten ignorieren.
- Popups haben keine Menüleiste, wohingegen neue Tabs die Benutzeroberfläche des Browser-Fensters verwenden; daher bevorzugen viele Nutzer Tabs, da die Benutzeroberfläche stabil bleibt.

### Verwenden Sie nie window.open() inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichen setzen oder wenn JavaScript geladen wird, Fehler oder deaktiviert ist. Sie übermitteln auch inkorrekte Semantik an unterstützende Technologien wie Screenreader.

Wenn nötig, verwenden Sie ein [`<button>`](/de/docs/Web/HTML/Element/button)-Element. Allgemein _sollten Sie nur einen Link zur Navigation zu einer echten URL verwenden_.

### Immer Links zu einem sekundären Fenster kennzeichnen

Kennzeichnen Sie Links, die neue Fenster öffnen, auf eine Weise, die die Navigation für Benutzer erleichtert.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Das Ziel ist, Benutzer vor Kontextänderungen zu warnen, um Verwirrung auf der Seite des Benutzers zu minimieren: das Ändern des aktuellen Fensters oder das Öffnen neuer Fenster kann für Benutzer sehr verwirrend sein (im Falle eines Popups bietet keine Symbolleiste eine "Zurück"-Taste, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Änderungen im Kontext explizit identifiziert werden, bevor sie auftreten, können die Nutzer entscheiden, ob sie weitermachen möchten oder auf die Änderung vorbereitet sein: sie werden nicht nur nicht verwirrt oder fühlen sich desorientiert, sondern erfahrenere Nutzer können besser entscheiden, wie sie solche Links öffnen (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis von WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur wenn notwendig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern eine Warnung im Voraus geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

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
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
