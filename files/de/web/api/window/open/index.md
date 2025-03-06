---
title: "Window: open()-Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef}}

Die **`open()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle lädt eine angegebene Ressource in einen neuen oder bestehenden Browsing-Kontext (also ein Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Element/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}

  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wenn ein leerer String (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite in den zielgerichteten Browsing-Kontext geöffnet.

- `target` {{optional_inline}}

  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontexts angibt, in den die Ressource geladen wird. Wenn der Name keinen bestehenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Element/a#target), `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur relevant für [fenced frames](/de/docs/Web/API/Fenced_frame_API).

    Dieser Name kann als `target`-Attribut von [`<a>`](/de/docs/Web/HTML/Element/a#target)- oder [`<form>`](/de/docs/Web/HTML/Element/form#target)-Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String mit einer durch Kommas getrennten Liste von Fenstermerkmalen in der Form `name=value`. Boolean-Werte können auf wahr gesetzt werden, indem eines der folgenden verwendet wird: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige Ganzzahl ungleich null ist. Diese Merkmale umfassen Optionen wie die Standardgröße und -position des Fensters, ob ein minimalistisches Popup-Fenster geöffnet werden soll, und so weiter. Die folgenden Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d. h. innerhalb eines Benutzerinteraktions-Ereignis-Handlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion erfolgen. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um die Registrierung einer Attribution-Quelle abzuschließen.

        Außerdem wird der Browser auch ausgelöst, die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader angegeben) zu speichern, wenn die `open()`-Methode abgeschlossen ist.

        Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

        > **Note:** `open()`-Aufrufe können nicht verwendet werden, um einen Attribution-Trigger zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf wahr gesetzt ist, wird angefordert, dass ein minimalistisches Popup-Fenster verwendet wird. Die in das Popup-Fenster einbezogenen UI-Merkmale werden automatisch vom Browser entschieden, im Allgemeinen ist nur eine Adressleiste enthalten. Wenn `popup` vorhanden und auf falsch gesetzt ist, wird dennoch ein neuer Tab geöffnet.

        Es gibt ein paar veraltete Merkmale, die früher die UI-Merkmale des geöffneten Fensters steuerten. In modernen Browsern haben sie nur die Wirkung, ein Popup anzufordern. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Merkmale (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide falsch oder nicht vorhanden
        - `menubar` ist falsch oder nicht vorhanden
        - `resizable` ist falsch
        - `scrollbars` ist falsch oder nicht vorhanden
        - `status` ist falsch oder nicht vorhanden

        Ansonsten wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Bestimmt die Breite des Inhaltsbereichs, einschließlich der Scrollleisten. Der Mindestwert beträgt 100.

    - `height` oder `innerHeight`

      - : Bestimmt die Höhe des Inhaltsbereichs, einschließlich der Scrollleisten. Der Mindestwert beträgt 100.

    - `left` oder `screenX`

      - : Bestimmt die Entfernung in Pixeln von der linken Seite des Arbeitsbereichs, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster generiert wird.

    - `top` oder `screenY`

      - : Bestimmt die Entfernung in Pixeln von der oberen Seite des Arbeitsbereichs, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster generiert wird.

    - `noopener`

      - : Wenn dieses Merkmal gesetzt ist, hat das neue Fenster keinen Zugriff auf das Ausgangsfenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht leere Zielnamen, außer `_top`, `_self` und `_parent`, in Bezug auf die Entscheidung, ob ein neuer Browsing-Kontext geöffnet werden soll, wie `_blank` behandelt.

    - `noreferrer`
      - : Wenn dieses Merkmal gesetzt ist, lässt der Browser den [`Referer`](/de/docs/Web/HTTP/Headers/Referer)-Header weg und setzt `noopener` auf wahr. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) für weitere Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`).

> [!NOTE]
> Angeforderte Positionswerte (`top`, `left`) und angeforderte Dimensionswerte (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn einer dieser Werte es nicht erlaubt, dass das gesamte Browser-Popup im Arbeitsbereich des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten: Kein Teil des neuen Popups kann initial außerhalb des Bildschirms positioniert werden.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}}-Objekt zurückgegeben.
Der zurückgegebene Verweis kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange er den Sicherheitsanforderungen der [same-origin policy](/de/docs/Web/Security/Same-origin_policy) entspricht.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}}-HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einem neuen {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} geöffnet wird, werden die Verweise auf das geöffnete Fenster getrennt und das zurückgegebene Objekt wird anzeigen, dass das Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, beispielsweise weil er von einem Popup-Blocker des Browsers blockiert wurde.

## Beschreibung

Die `open()`-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle nimmt eine URL als Parameter entgegen und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Tab oder ein Fenster. Der `target`-Parameter bestimmt, in welchem Fenster oder Tab die Ressource geladen wird, und der `windowFeatures`-Parameter kann verwendet werden, um zu steuern, ob ein neues Popup mit minimalen UI-Merkmalen geöffnet werden soll und um dessen Größe und Position zu steuern.

Externe URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das tatsächliche Laden der URL wird verzögert und startet, nachdem der aktuelle Skriptblock die Ausführung beendet hat. Die Fenstererstellung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strenge Popup-Blockriorichtlinien. Popup-Fenster müssen in direkter Antwort auf Benutzereingaben geöffnet werden, und für jeden `Window.open()`-Aufruf ist ein separates Benutzerinteraktionsereignis erforderlich. Dies verhindert, dass Websites Benutzer mit vielen Fenstern spammen. Dies stellt jedoch ein Problem für mehr Fensteranwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so entwerfen, dass sie:

- nicht mehr als ein neues Fenster gleichzeitig öffnen,
- bestehende Fenster wiederverwenden, um verschiedene Seiten anzuzeigen,
- Benutzer darauf hinweisen, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popup-Fensters

Alternativ zeigt das folgende Beispiel, wie ein Popup geöffnet wird, indem das `popup`-Feature verwendet wird.

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

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar, und `window.open()` funktioniert nicht. Anstatt sich ausschließlich auf das Vorhandensein dieses Features zu verlassen, können wir eine alternative Lösung bereitstellen, damit die Website oder Anwendung weiterhin funktioniert.

### Alternative Möglichkeiten bieten, wenn JavaScript deaktiviert ist

Wenn die JavaScript-Unterstützung deaktiviert oder nicht vorhanden ist, wird der Benutzer-Agent entsprechend ein sekundäres Fenster erstellen oder die referenzierte Ressource gemäß seiner Verarbeitung des `target`-Attributs rendern. Ziel und Idee sind es, dem Benutzer eine Möglichkeit zu bieten (und nicht aufzuerlegen), die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Benutzerfreundlichkeitsprobleme im Zusammenhang mit Links, die Popups öffnen. Der Zweck des `event.preventDefault()` im Code besteht darin, die Standardaktion des Links abzubrechen: Wenn der Event-Listener für `click` ausgeführt wird, besteht keine Notwendigkeit, die Standardaktion des Links auszuführen. Wenn jedoch die JavaScript-Unterstützung im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Event-Listener für `click` ignoriert, und der Browser lädt die referenzierte Ressource in dem Ziel-Frame oder -Fenster, das den Namen `"WikipediaWindowName"` hat. Wenn kein Frame oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster und benennt es `"WikipediaWindowName"`.

> [!NOTE]
> Weitere Informationen zum `target`-Attribut finden Sie unter [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des Zielattributs wird mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellen, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target`-Attribut einen aussagekräftigen Namen zu geben und denselben `target`-Attribut auf Ihrer Seite wiederzuverwenden, sodass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (dadurch wird der Prozess für den Benutzer beschleunigt) und die Begründung dafür rechtfertigt, ein sekundäres Fenster überhaupt zu erstellen (und Benutzersystemressourcen, Zeitverbrauch). Die Verwendung eines einzigen `target`-Attributwerts und dessen Wiederverwendung in Links ist viel benutzerfreundlicher, da sie nur ein einziges sekundäres Fenster erstellt, das recycelt wird.

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

## Same-origin policy

Wenn der neu geöffnete Browsing-Kontext nicht dieselbe {{Glossary("Origin", "Herkunft")}} teilt, kann das eröffnende Skript nicht mit dem Inhalt des Browsing-Kontexts interagieren (lesen oder schreiben).

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

Weitere Informationen finden Sie im Artikel zur [Same-origin policy](/de/docs/Web/Security/Same-origin_policy).

## Zugänglichkeitsbedenken

### Vermeidung der Verwendung von window.open()

Es ist vorzuziehen, die Verwendung von `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blockierungsfunktion.
- Moderne Browser bieten Tab-Browsing, und Benutzer von tab-fähigen Browsern bevorzugen es in den meisten Situationen, neue Tabs anstelle neuer Fenster zu öffnen.
- Benutzer können eingebaute Browserfunktionen oder Erweiterungen verwenden, um zu entscheiden, ob ein Link in einem neuen Fenster, im selben Fenster, in einem neuen Tab, im selben Tab oder im Hintergrund geöffnet wird. Das Erzwingen einer bestimmten Art der Öffnung mit `window.open()` wird sie verwirren und ihre Gewohnheiten missachten.
- Popups haben keine Menü-Symbolleiste, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden; daher ziehen viele Benutzer Tab-Browsing vor, da die Benutzeroberfläche stabil bleibt.

### Verwenden Sie niemals window.open() direkt im HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese fehlerhaften `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Draggen von Links, Öffnen von Links in einem neuen Tab/Fenster, Bookmarking oder wenn JavaScript lädt, Fehler hat oder deaktiviert ist. Sie vermitteln auch falsche Semantik für unterstützende Technologien wie Bildschirmleser.

Verwenden Sie stattdessen bei Bedarf ein [`<button>`](/de/docs/Web/HTML/Element/button)-Element. Im Allgemeinen sollten _Sie nur einen Link zur Navigation zu einer echten URL verwenden_.

### Identifizieren Sie immer Links, die zu einem sekundären Fenster führen

Identifizieren Sie Links, die neue Fenster öffnen, auf eine Weise, die die Navigation für Benutzer erleichtert.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Der Zweck besteht darin, Benutzer vor Kontextänderungen zu warnen, um Verwirrung auf ihrer Seite zu minimieren: Die Änderung des aktuellen Fensters oder das Popup neuer Fenster kann für Benutzer sehr desorientierend sein (im Fall eines Popups bietet keine Symbolleiste eine "Zurück"-Schaltfläche, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Kontextänderungen explizit identifiziert werden, bevor sie auftreten, können Benutzer entscheiden, ob sie fortfahren möchten, oder sie können sich auf die Änderung vorbereiten: Nicht nur, dass sie nicht verwirrt oder desorientiert sein werden, sondern erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen möchten (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis von WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern vorherige Warnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

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
