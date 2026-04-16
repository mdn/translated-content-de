---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: f4ac8828bd679520dc7d424bcdfe6cf431615ecc
---

{{APIRef}}

Die **`open()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle lädt eine spezifizierte Ressource in einen neuen oder bestehenden Browsing-Kontext (d.h. ein Tab, ein Fenster, oder ein [iframe](/de/docs/Web/HTML/Reference/Elements/iframe)) unter einem spezifizierten Namen.

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
  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontextes spezifiziert, in den die Ressource geladen wird. Wenn der Name keinen existierenden Kontrast identifiziert, wird ein neuer Kontext erstellt und mit dem spezifizierten Namen versehen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Reference/Elements/a#target), `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur relevant für [fenced frames](/de/docs/Web/API/Fenced_frame_API).

    Dieser Name kann als `target` Attribut von [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target) Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}
  - : Ein String, der eine durch Kommas getrennte Liste von Fensterfeatures im Format `name=value` enthält. Boolesche Werte können auf true gesetzt werden, indem einer der folgenden Werte verwendet wird: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige von null verschiedene Ganzzahl ist. Diese Features umfassen Optionen wie die Standardgröße und Position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll und so weiter. Die folgenden Optionen werden unterstützt:
    - `attributionsrc` {{deprecated_inline}}
      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit dem `open()` Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzereingabe-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzereingabe erfolgen. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers als Antwort auszulösen, um die Registrierung einer Attributionsquelle abzuschließen.

        Darüber hinaus wird der Browser auch ausgelöst, um die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader angegeben) zu speichern, wenn die `open()` Methode abgeschlossen ist.

        Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

        > [!NOTE]
        > `open()` Aufrufe können nicht verwendet werden, um einen Attribution Trigger zu registrieren.

    - `popup`
      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt ist, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die in das Popup-Fenster einbezogenen UI-Features werden automatisch vom Browser entschieden, im Allgemeinen nur eine Adressleiste. Wenn `popup` vorhanden und auf false gesetzt ist, wird trotzdem ein neuer Tab geöffnet.

        Es gibt einige alte Features, die früher die UI-Features des geöffneten Fensters kontrollierten. In modernen Browsern haben sie nur noch die Wirkung, ein Popup anzufordern. Wenn `popup` nicht spezifiziert ist und `windowFeatures` irgendwelche Features (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:
        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` ist false oder fehlt
        - `status` ist false oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`
      - : Gibt die Breite des Inhaltsbereichs an, einschließlich der Scrollleisten. Der Mindestwert ist 100.

    - `height` oder `innerHeight`
      - : Gibt die Höhe des Inhaltsbereichs an, einschließlich der Scrollleisten. Der Mindestwert ist 100.

    - `left` oder `screenX`
      - : Spezifiziert die Entfernung in Pixeln von der linken Seite des Arbeitsbereichs, wie vom Betriebssystem des Nutzers definiert, wo das neue Fenster generiert wird.

    - `top` oder `screenY`
      - : Spezifiziert die Entfernung in Pixeln von der oberen Seite des Arbeitsbereichs, wie vom Betriebssystem des Nutzers definiert, wo das neue Fenster generiert wird.

    - `noopener`
      - : Wenn dieses Feature gesetzt ist, hat das neue Fenster keinen Zugriff auf das ursprüngliche Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht-leere Zielnamen, außer `_top`, `_self` und `_parent`, wie `_blank` behandelt, wenn entschieden wird, ob ein neuer Browsing-Kontext geöffnet wird.

    - `noreferrer`
      - : Wenn dieses Feature gesetzt ist, wird der [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header vom Browser weggelassen und `noopener` auf true gesetzt. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) für mehr Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird genauso behandelt wie der leere String (`""`).

> [!NOTE]
> Angeforderte Positionswerte (`top`, `left`) und angeforderte Größenwerte (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn ein solcher angeforderter Wert es nicht erlaubt, dass das gesamte Browser-Popup innerhalb des Arbeitsbereichs für Anwendungen des Betriebssystems des Benutzers gerendert werden kann. Mit anderen Worten, kein Teil des neuen Popups kann initial außerhalb des Bildschirms positioniert werden.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}} Objekt zurückgegeben.
Die zurückgegebene Referenz kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange sie den Sicherheitsanforderungen der [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy) entspricht.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einer neuen {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} geöffnet wird, werden die Referenzen zum geöffneten Fenster getrennt und das zurückgegebene Objekt wird anzeigen, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, zum Beispiel weil er von einem Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die [`Window`](/de/docs/Web/API/Window) Schnittstelle der `open()` Methode nimmt eine URL als Parameter, und lädt die damit identifizierte Ressource in ein neues oder bestehendes Tab oder Fenster. Der `target` Parameter bestimmt, in welches Fenster oder Tab die Ressource geladen wird, und der `windowFeatures` Parameter kann verwendet werden, um das Öffnen eines neuen Popups mit minimalen UI-Features zu steuern und seine Größe und Position zu kontrollieren.

Externe URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das eigentliche Abrufen der URL wird verzögert und beginnt, nachdem der aktuelle Skriptblock beendet ist. Die Fenstererstellung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strikte Popup-Blockierungsrichtlinien. Popup-Fenster müssen in direkter Reaktion auf Benutzereingaben geöffnet werden, und ein separates Benutzergeste-Ereignis ist für jeden `Window.open()` Aufruf erforderlich. Dies verhindert, dass Webseiten die Benutzer mit vielen Fenstern spammen. Dies stellt jedoch ein Problem für Multi-Window-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten:

- Öffnen Sie nicht mehr als ein neues Fenster auf einmal.
- Verwenden Sie vorhandene Fenster erneut, um unterschiedliche Seiten anzuzeigen.
- Beraten Sie Benutzer, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ zeigt das folgende Beispiel, wie man ein Popup mit dem `popup` Feature öffnet.

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

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar, und `window.open()` wird nicht funktionieren. Anstatt sich ausschließlich auf das Vorhandensein dieser Funktion zu verlassen, können wir eine alternative Lösung anbieten, damit die Webseite oder Anwendung weiterhin funktioniert.

### Alternative Möglichkeiten bereitstellen, wenn JavaScript deaktiviert ist

Wenn die Unterstützung von JavaScript deaktiviert oder nicht existent ist, wird der Benutzeragent ein sekundäres Fenster entsprechend erstellen oder die referenzierte Ressource gemäß der Handhabung des `target` Attributs rendern. Das Ziel und die Idee ist es, dem Benutzer eine Möglichkeit zu bieten (und _nicht aufzuzwingen_), die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Benutzerfreundlichkeitsprobleme im Zusammenhang mit Links, die Popups öffnen. Der Zweck von `event.preventDefault()` im Code ist es, die Standardaktion des Links abzubrechen: Wenn der Ereignislistener für `click` ausgeführt wird, gibt es keine Notwendigkeit, die Standardaktion des Links auszuführen. Aber wenn die Unterstützung von JavaScript auf dem Browser des Benutzers deaktiviert oder nicht existent ist, wird der Ereignislistener für `click` ignoriert und der Browser lädt die referenzierte Ressource im Ziel-Frame oder Fenster, das den Namen `"WikipediaWindowName"` hat. Wenn kein Frame oder Fenster den Namen `"WikipediaWindowName"` hat, wird der Browser ein neues Fenster erstellen und es `"WikipediaWindowName"` nennen.

> [!NOTE]
> Für weitere Details zum `target` Attribut siehe [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des Zielattributs wird mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellen, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, einen bedeutungsvollen Namen für Ihr `target` Attribut bereitzustellen und dieses `target` Attribut auf Ihrer Seite wiederzuverwenden, damit ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (dadurch wird der Prozess für den Benutzer beschleunigt) und daher der Grund (und die Systemressourcen, die Zeit) für das Erstellen eines sekundären Fensters gerechtfertigt werden. Die Verwendung eines einzelnen `target` Attributwertes und seine Wiederverwendung in Links ist wesentlich benutzerfreundlicher, da es nur ein einzelnes sekundäres Fenster erstellt, das recycelt wird.

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
  link.addEventListener("click", (event) => {
    openRequestedSingleTab(link.href);
    event.preventDefault();
  });
}
```

## Same-origin policy

Wenn der neu geöffnete Browsing-Kontext nicht denselben {{Glossary("Origin", "Ursprung")}} teilt, kann das öffnende Skript nicht mit dem Inhalt des Browsing-Kontexts interagieren (lesen oder schreiben).

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

Für weitere Informationen siehe den Artikel zur [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy).

## Barrierefreiheitsbedenken

### Vermeiden Sie die Verwendung von window.open()

Es ist vorzuziehen, auf `window.open()` zu verzichten, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blockierungsfunktion.
- Moderne Browser bieten Tab-Browsing, und Benutzern von tab-fähigen Browsern bevorzugen meistens das Öffnen neuer Tabs anstatt neuer Fenster.
- Nutzer können integrierte Browserfunktionen oder Erweiterungen verwenden, um zu wählen, ob ein Link in einem neuen Fenster, im gleichen Fenster, in einem neuen Tab, im gleichen Tab oder im Hintergrund geöffnet werden soll. Das Erzwingen der Öffnung in einer bestimmten Weise mit `window.open()` wird sie verwirren und ihre Gewohnheiten ignorieren.
- Popups haben keine Menüleiste, während neue Tabs die Benutzeroberfläche des Browserfensters nutzen; viele Benutzer bevorzugen daher das Tab-Browsing, da die Schnittstelle stabil bleibt.

### Verwenden Sie niemals window.open() inline im HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href` Werte verursachen unerwartetes Verhalten beim Kopieren/Verschieben von Links, Öffnen von Links in einem neuen Tab/Fenster, Markieren, oder wenn JavaScript geladen wird, Fehler auftreten oder deaktiviert ist. Sie vermitteln auch unausgeglichene Semantik an unterstützende Technologien wie Bildschirmleser.

Falls erforderlich, verwenden Sie ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) Element stattdessen. Generell _sollten Sie nur einen Link für die Navigation zu einer echten URL verwenden_.

### Kennzeichnen Sie immer Links, die zu einem sekundären Fenster führen

Kennzeichnen Sie Links, die neue Fenster öffnen, auf eine Weise, die die Navigation für Benutzer erleichtert.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Das Ziel ist es, Benutzer über Kontextwechsel zu informieren, um Verwirrung auf Seiten der Benutzer zu minimieren: Das Ändern des aktuellen Fensters oder das Öffnen neuer Fenster kann für Benutzer sehr verwirrend sein (im Fall eines Popups gibt es keine Symbolleiste, die einen "Zurück"-Button bietet, um zum vorherigen Fenster zu gelangen).

Wenn extreme Kontextwechsel vor ihrem Eintreten explizit identifiziert werden, können die Benutzer entscheiden, ob sie fortfahren möchten oder so vorbereitet sind: Sie werden nicht verwirrt oder desorientiert sein, aber erfahrene Benutzer können besser entscheiden, wie sie solche Links öffnen (in einem neuen Fenster oder nicht, im gleichen Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Understanding WCAG, Guideline 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `target` Attributdokumentation:
  - [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Reference/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
