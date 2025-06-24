---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef}}

Die **`open()`** Methode des [`Window`](/de/docs/Web/API/Window) Schnittstelle lädt eine angegebene Ressource in einen neuen oder vorhandenen Browsing-Kontext (das heißt, einen Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Reference/Elements/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}

  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wenn ein leerer String (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite im angezielten Browsing-Kontext geöffnet.

- `target` {{optional_inline}}

  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontextes spezifiziert, in den die Ressource geladen wird. Wenn der Name keinen bestehenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Reference/Elements/a#target) `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur für [fenced frames](/de/docs/Web/API/Fenced_frame_API) relevant.

    Dieser Name kann als `target` Attribut von [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target) Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String, der eine durch Kommas getrennte Liste von Fenster-Features in der Form `name=value` enthält. Boolesche Werte können auf true gesetzt werden, indem eine der folgenden Optionen verwendet wird: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige nicht-null Zahl ist. Zu diesen Features gehören Optionen wie die Standardgröße und Position des Fensters, ob ein minimales Popup-Fenster geöffnet wird und so weiter. Folgende Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit dem `open()` Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzer-Interaktionsereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion erfolgen. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort zu veranlassen, um die Registrierung einer Attributionsquelle abzuschließen.

        Außerdem wird der Browser ausgelöst, die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader angegeben) zu speichern, wenn die `open()`-Methode abgeschlossen ist.

        Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

        > [!NOTE] > `open()`-Aufrufe können nicht verwendet werden, um einen Attribution Trigger zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt ist, wird ein minimales Popup-Fenster angefordert. Die in dem Popup-Fenster enthaltenen Benutzeroberflächen-Features werden automatisch vom Browser entschieden, in der Regel einschließlich einer Adressleiste. Wenn `popup` vorhanden und auf false gesetzt ist, wird dennoch ein neuer Tab geöffnet.

        Es gibt einige veraltete Features, die früher die Benutzeroberflächen-Features des geöffneten Fensters steuerten. In modernen Browsern haben sie nur die Wirkung, ein Popup zu beantragen. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Features (einschließlich nicht erkannter) enthält, die nicht `noopener`, `noreferrer` oder `attributionsrc` sind, wird das Fenster ebenfalls als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` sind false oder fehlen
        - `status` ist false oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Gibt die Breite des Inhaltsbereichs einschließlich der Rollbalken an. Der Mindestwert beträgt 100.

    - `height` oder `innerHeight`

      - : Gibt die Höhe des Inhaltsbereichs einschließlich der Rollbalken an. Der Mindestwert beträgt 100.

    - `left` oder `screenX`

      - : Gibt den Abstand in Pixeln von der linken Seite des Arbeitsbereichs, wie vom Betriebssystem des Benutzers definiert, an, wo das neue Fenster erzeugt wird.

    - `top` oder `screenY`

      - : Gibt den Abstand in Pixeln von der oberen Seite des Arbeitsbereichs, wie vom Betriebssystem des Benutzers definiert, an, wo das neue Fenster erzeugt wird.

    - `noopener`

      - : Wenn dieses Feature gesetzt ist, hat das neue Fenster keinen Zugriff auf das ursprüngliche Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht leere Zielnamen, mit Ausnahme von `_top`, `_self` und `_parent`, in Bezug auf die Entscheidung, einen neuen Browsing-Kontext zu öffnen, wie `_blank` behandelt.

    - `noreferrer`
      - : Wenn dieses Feature gesetzt ist, wird der [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header vom Browser weggelassen, und `noopener` wird auf true gesetzt. Weitere Informationen finden Sie unter [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer).

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird wie ein leerer String (`""`) behandelt.

> [!NOTE]
> Angeforderte Position (`top`, `left`) und angeforderte Dimensionen (`width`, `height`) Werte in `windowFeatures` **werden korrigiert**, wenn irgendein angeforderter Wert nicht erlaubt, dass das gesamte Browser-Popup innerhalb des Arbeitsbereichs der Anwendungen des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten, kein Teil des neuen Popups kann initial außerhalb des Bildschirms positioniert sein.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}} Objekt zurückgegeben.
Die zurückgegebene Referenz kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange sie den Sicherheitsanforderungen der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) entspricht.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einer neuen {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} geöffnet wird, werden Verweise auf das geöffnete Fenster getrennt, und das zurückgegebene Objekt zeigt an, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, zum Beispiel weil er durch einen Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die `open()` Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle nimmt eine URL als Parameter und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Tab oder ein Fenster. Der `target`-Parameter bestimmt, in welches Fenster oder Tab die Ressource geladen wird, und der `windowFeatures`-Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Features zu öffnen und seine Größe und Position zu steuern.

Remote-URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das eigentliche Abrufen der URL wird verzögert und beginnt, nachdem der aktuelle Skriptblock die Ausführung beendet hat. Die Fenstererstellung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strenge Popup-Blocker-Richtlinien. Popup-Fenster müssen direkt als Antwort auf Benutzereingaben geöffnet werden, und für jeden `Window.open()` Aufruf ist ein separates Benutzerbewegungsereignis erforderlich. Dies verhindert, dass Websites Benutzer mit vielen Fenstern zuspammen. Dies stellt jedoch ein Problem für Multi-Fenster-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass sie:

- Nicht mehr als ein neues Fenster gleichzeitig öffnen.
- Vorhandene Fenster zum Anzeigen verschiedener Seiten wiederverwenden.
- Benutzer darüber informieren, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ zeigt das folgende Beispiel, wie ein Popup unter Verwendung des `popup` Features geöffnet wird.

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

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar, und `window.open()` funktioniert nicht. Anstatt sich ausschließlich auf das Vorhandensein dieser Funktion zu verlassen, können wir eine alternative Lösung anbieten, damit die Website oder Anwendung weiterhin funktioniert.

### Alternative Möglichkeiten anbieten, wenn JavaScript deaktiviert ist

Wenn die Unterstützung von JavaScript deaktiviert oder nicht vorhanden ist, erstellt der Benutzeragent entsprechend ein sekundäres Fenster oder rendert die referenzierte Ressource gemäß seiner Behandlung des `target`-Attributs. Das Ziel und die Idee sind, dem Benutzer eine Möglichkeit zu bieten (und nicht aufzuerlegen), die referenzierte Ressource zu öffnen.

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

Der oben gezeigte Code löst einige Usability-Probleme im Zusammenhang mit Links, die Popups öffnen. Der Zweck von `event.preventDefault()` im Code ist es, die Standardaktion des Links abzubrechen: Wenn der Ereignislistener für `click` ausgeführt wird, gibt es keinen Grund, die Standardaktion des Links auszuführen. Aber wenn die Unterstützung von JavaScript im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Ereignislistener für `click` ignoriert und der Browser lädt die referenzierte Ressource in dem Zielrahmen oder im Fenster, das den Namen `"WikipediaWindowName"` hat. Wenn kein Rahmen oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster und benennt es `"WikipediaWindowName"`.

> [!NOTE]
> Für weitere Details über das `target`-Attribut siehe [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Zielwert des Attributs führt dazu, dass mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellt werden, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target` Attribut einen bedeutungsvollen Namen zu geben und diesen `target` Attribut auf Ihrer Seite wiederzuverwenden, sodass ein Klick auf einen weiteren Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (wodurch der Prozess für den Benutzer beschleunigt wird) und damit die Begründung der Erstellung eines sekundären Fensters im ersten Schritt rechtfertigt. Die Verwendung eines einzelnen Zielwertes und dessen Wiederverwendung in Links ist viel ressourcenschonender für Benutzer, da es nur ein einziges sekundäres Fenster erstellt, das recycelt wird.

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

## Same-Origin-Policy

Wenn der neu geöffnete Browsing-Kontext nicht denselben {{Glossary("Origin", "Ursprung")}} teilt, wird das öffnende Skript nicht in der Lage sein, mit dem Inhalt des Browsing-Kontexts zu interagieren (lesen oder schreiben).

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

Für weitere Informationen lesen Sie den Artikel zur [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

## Bedenken zur Barrierefreiheit

### Vermeiden Sie die Verwendung von window.open()

Es ist besser, die Verwendung von `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten ein Popup-Blockierungs-Feature.
- Moderne Browser bieten Tab-Browsing-Funktionen, und Tab-fähige Browserbenutzer ziehen es in den meisten Situationen vor, neue Tabs anstelle von neuen Fenstern zu öffnen.
- Benutzer können eingebaute Browser-Features oder Erweiterungen verwenden, um auszuwählen, ob sie einen Link in einem neuen Fenster, im selben Fenster, in einem neuen Tab, im selben Tab oder im Hintergrund öffnen möchten. Das Erzwingen, dass das Öffnen in einer bestimmten Weise erfolgt, indem `window.open()` verwendet wird, wird sie verwirren und ihre Gewohnheiten ignorieren.
- Popups haben keine Menüwerkzeugleiste, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden; daher ziehen es viele Benutzer vor, mit Tabs zu browsen, weil die Oberfläche stabil bleibt.

### Verwenden Sie window.open() niemals inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese ungültigen `href` Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, beim Setzen von Lesezeichen oder wenn JavaScript lädt, Fehler hat oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien wie Screenreader.

Falls nötig, verwenden Sie ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) Element. Im Allgemeinen _sollten Sie nur einen Link für die Navigation zu einer echten URL verwenden_.

### Kennzeichnen Sie immer Links, die zu einem sekundären Fenster führen

Identifizieren Sie Links, die neue Fenster öffnen, so, dass sie die Navigation der Benutzer unterstützen.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Der Zweck ist, Benutzer über Kontextänderungen zu warnen, um Verwirrung seitens des Benutzers zu minimieren: Das Ändern des aktuellen Fensters oder das Anzeigen neuer Fenster kann für Benutzer sehr verwirrend sein (im Falle eines Popups gibt es keine Werkzeugleiste mit einer Schaltfläche "Zurück", um zum vorherigen Fenster zurückzukehren).

Wenn extreme Kontextwechsel vor ihrem Auftreten explizit identifiziert werden, können die Benutzer bestimmen, ob sie fortfahren möchten, oder sie können auf die Änderung vorbereitet sein: Nicht nur, dass sie nicht verwirrt oder desorientiert sein werden, sondern erfahreneren Benutzer können besser entscheiden, wie sie solche Links öffnen (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis der WCAG, Leitfaden 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_voraussagbar_webseiten_machensieerscheinen_und_bedienensiesich_in_voraussagbarer_weise)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzer vorwarnen, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `target`-Attributsdokumentation:
  - [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Reference/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
