---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Die **`open()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle lädt eine angegebene Ressource in einen neuen oder bestehenden Browsing-Kontext (das heißt, ein Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Reference/Elements/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}

  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wenn ein leerer String (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite im anvisierten Browsing-Kontext geöffnet.

- `target` {{optional_inline}}

  - : Ein String, ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontextes angibt, in den die Ressource geladen wird. Wenn der Name keinen bestehenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target` Keywords](/de/docs/Web/HTML/Reference/Elements/a#target), `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur relevant für [fenced frames](/de/docs/Web/API/Fenced_frame_API).

    Dieser Name kann als `target` Attribut von [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target) Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String, der eine durch Kommas getrennte Liste von Fenstermerkmalen in der Form `name=value` enthält. Boolesche Werte können auf true gesetzt werden, indem eines der folgenden benutzt wird: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige nicht-null Zahl ist. Diese Merkmale umfassen Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll, und so weiter. Die folgenden Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit dem `open()` Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb einer Benutzerinteraktions-Event-Handle wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion erfolgen. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort auszulösen, um die Registrierung einer Attribution-Quelle abzuschließen.

        Zusätzlich wird der Browser auch ausgelöst, um die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), wenn die `open()` Methode abgeschlossen ist.

        Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für mehr Details.

        > **Note:** `open()` Aufrufe können nicht verwendet werden, um einen Zuordnungsauslöser zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt ist, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die UI-Features, die im Popup-Fenster enthalten sind, werden automatisch vom Browser entschieden, allgemein nur mit einer Adressleiste. Wenn `popup` vorhanden und auf false gesetzt ist, wird trotzdem ein neuer Tab geöffnet.

        Es gibt einige ältere Features, die früher UI-Features des geöffneten Fensters kontrollierten. In modernen Browsern haben sie nur den Effekt, ein Popup anzufordern. Wenn `popup` nicht angegeben ist, und `windowFeatures` irgendwelche Features (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster auch dann als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` ist false oder fehlt
        - `status` ist false oder fehlt

        Ansonsten wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Gibt die Breite des Inhaltsbereichs, einschließlich Scrollbars an. Der Mindestwert beträgt 100.

    - `height` oder `innerHeight`

      - : Gibt die Höhe des Inhaltsbereichs, einschließlich Scrollbars an. Der Mindestwert beträgt 100.

    - `left` oder `screenX`

      - : Gibt die Entfernung in Pixeln von der linken Seite des Arbeitsbereichs an, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster generiert wird.

    - `top` oder `screenY`

      - : Gibt die Entfernung in Pixeln von der Oberseite des Arbeitsbereichs an, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster generiert wird.

    - `noopener`

      - : Wenn dieses Merkmal gesetzt ist, hat das neue Fenster keinen Zugriff auf das auslösende Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht-leere Zielnamen außer `_top`, `_self` und `_parent` im Hinblick darauf, ob ein neuer Browsing-Kontext geöffnet werden soll, wie `_blank` behandelt.

    - `noreferrer`
      - : Wenn dieses Merkmal gesetzt ist, wird der [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header vom Browser weggelassen und `noopener` wird auf true gesetzt. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) für mehr Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird genauso behandelt wie der leere String (`""`).

> [!NOTE]
> Angeforderte Positionswerte (`top`, `left`) und angeforderte Dimensionswerte (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn ein solcher angeforderter Wert nicht zulässt, dass das gesamte Browser-Popup innerhalb des Arbeitsbereichs für Anwendungen des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten, kein Teil des neuen Popups kann initial außerhalb des Bildschirms positioniert werden.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}} Objekt zurückgegeben. Der zurückgegebene Verweis kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange er den Sicherheitsanforderungen [der same-origin policy](/de/docs/Web/Security/Same-origin_policy) entspricht.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentenrichtlinien so sind, dass das Dokument in einem neuen {{Glossary("Browsing_context", "browsing context group")}} geöffnet wird, werden Verweise auf das geöffnete Fenster getrennt und das zurückgegebene Objekt zeigt an, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn es dem Browser nicht gelingt, den neuen Browsing-Kontext zu öffnen, beispielsweise weil er durch einen Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die `Window` Schnittstelle's `open()` Methode nimmt eine URL als Parameter und lädt die Ressource, die sie identifiziert, in ein neues oder bestehendes Tab oder Fenster. Der `target` Parameter bestimmt, in welches Fenster oder Tab die Ressource geladen werden soll, und der `windowFeatures` Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Features zu öffnen und seine Größe und Position zu bestimmen.

Remote-URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das tatsächliche Abrufen der URL verzögert sich und beginnt, nachdem der aktuelle Skriptblock fertig ausgeführt wurde. Die Fenstergenerierung und das Laden der referenzierten Ressource werden asynchron durchgeführt.

Moderne Browser haben strenge Popup-Blocker-Richtlinien. Popup-Fenster müssen in direkter Antwort auf Benutzereingaben geöffnet werden, und für jeden `Window.open()` Aufruf ist ein separates Benutzeraktionsereignis erforderlich. Dies verhindert, dass Webseiten Benutzer mit vielen Fenstern überfluten. Dies stellt jedoch ein Problem für Anwendungen mit mehreren Fenstern dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass sie:

- Nicht mehr als ein neues Fenster gleichzeitig öffnen.
- Bestehende Fenster wiederverwenden, um verschiedene Seiten anzuzeigen.
- Nutzer darüber informieren, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ zeigt das folgende Beispiel, wie man ein Popup mit der `popup` Funktion öffnet.

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

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar und `window.open()` funktioniert nicht. Anstatt sich ausschließlich auf das Vorhandensein dieses Features zu verlassen, können wir eine alternative Lösung anbieten, damit die Webseite oder Anwendung weiterhin funktioniert.

### Alternative Wege bei deaktiviertem JavaScript bieten

Wenn JavaScript-Unterstützung deaktiviert oder nicht vorhanden ist, wird der Benutzer-Agent entsprechend ein Sekundärfenster erstellen oder die referenzierte Ressource gemäß seiner Handhabung des `target` Attributs rendern. Ziel und Idee sind es, dem Benutzer eine Möglichkeit zu bieten (und _nicht aufzuzwingen_), die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Usability-Probleme im Zusammenhang mit Links, die Popups öffnen. Das Ziel von `event.preventDefault()` im Code besteht darin, die Standardaktion des Links abzubrechen: Wenn der Ereignislistener für `click` ausgeführt wird, besteht keine Notwendigkeit, die Standardaktion des Links auszuführen. Aber wenn die JavaScript-Unterstützung im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Ereignislistener für `click` ignoriert und der Browser lädt die referenzierte Ressource im Ziel-Frame oder -Fenster mit dem Namen `"WikipediaWindowName"`. Wenn kein Frame oder Fenster den Namen `"WikipediaWindowName"` hat, wird der Browser ein neues Fenster erstellen und es `"WikipediaWindowName"` nennen.

> [!NOTE]
> Für mehr Details über das `target` Attribut siehe [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des target-Attributs erstellt mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target` Attribut einen sinnvollen Namen zu geben und verwenden Sie diesen `target` Attribut auf Ihrer Seite erneut, damit ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (was den Prozess für den Benutzer beschleunigt) und somit den Grund (und die Benutzer-Systemressourcen, die aufgewendete Zeit) für die Erstellung eines Sekundärfensters im ersten Platz rechtfertigt. Die Verwendung eines einzigen `target` Attributwertes und dessen Wiederverwendung in Links ist viel benutzerressourcenfreundlicher, da es nur ein einziges Sekundärfenster erstellt, das recycelt wird.

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

Wenn der neu eröffnete Browsing-Kontext nicht den gleichen {{Glossary("Origin", "Ursprung")}} teilt, kann das öffnende Skript nicht mit dem Inhalt des Browsing-Kontextes interagieren (lesen oder schreiben).

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

Für mehr Informationen siehe den Artikel [Same-origin policy](/de/docs/Web/Security/Same-origin_policy).

## Barrierefreiheit

### Vermeiden Sie `window.open()` zu verwenden

Es ist vorzuziehen, die Verwendung von `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blocker-Funktion.
- Moderne Browser bieten Tabbed-Browsing, und Browsernutzer, die Tabbed-Browsing unterstützen, bevorzugen es in den meisten Situationen, neue Tabs zu öffnen, anstatt neue Fenster zu öffnen.
- Nutzer können integrierte Browser-Funktionen oder Erweiterungen nutzen, um zu wählen, ob sie einen Link in einem neuen Fenster, im gleichen Fenster, in einem neuen Tab, im gleichen Tab oder im Hintergrund öffnen möchten. Die Nutzung von `window.open()`, um das Öffnen auf eine bestimmte Weise zu erzwingen, wird sie verwirren und ihre Gewohnheiten ignorieren.
- Popups haben keine Menü-Symbolleiste, während neue Tabs die Benutzeroberfläche des Browserfensters nutzen; daher bevorzugen viele Nutzer das Tabbed-Browsing, da die Schnittstelle stabil bleibt.

### Verwenden Sie `window.open()` niemals inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese fehlerhaften `href` Werte verursachen unerwartetes Verhalten beim Kopieren/ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichen setzen oder wenn JavaScript geladen wird, Fehler oder deaktiviert ist. Sie vermitteln auch falsche Semantik für unterstützende Technologien, wie z. B. Bildschirmleseprogramme.

Verwenden Sie stattdessen gegebenenfalls ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) Element. Im Allgemeinen sollten Sie _nur einen Link zur Navigation zu einer echten URL verwenden_.

### Kennzeichnen Sie immer Links, die zu einem Sekundärfenster führen

Kennzeichnen Sie Links, die neue Fenster öffnen, auf eine Weise, die die Navigation für Benutzer unterstützt.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Das Ziel ist es, Benutzer vor Kontextänderungen zu warnen, um Verwirrung zu minimieren: das Ändern des aktuellen Fensters oder das Öffnen von neuen Fenstern kann für Benutzer sehr desorientierend sein (im Fall eines Popups bietet keine Symbolleiste einen "Zurück"-Button, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Änderungen im Kontext explizit identifiziert werden, bevor sie auftreten, können die Benutzer entscheiden, ob sie fortfahren möchten oder darauf vorbereitet werden können: nicht nur, dass sie nicht verwirrt oder desorientiert sind, sondern erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen (in einem neuen Fenster oder nicht, im gleichen Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis WCAG, Leitfaden 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs von einem Link nur, wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern eine Vorwarnung geben, wenn sie ein neues Fenster öffnen](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Dokumentation zum `target` Attribut:
  - [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Reference/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
