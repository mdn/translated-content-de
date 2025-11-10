---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef}}

Die **`open()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle lädt eine angegebene Ressource in einen neuen oder bestehenden Browsing-Kontext (das heißt, einen Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Reference/Elements/iframe)) unter einem bestimmten Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}
  - : Eine Zeichenkette, die die URL oder den Pfad der zu ladenden Ressource angibt. Wenn eine leere Zeichenkette (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite im anvisierten Browsing-Kontext geöffnet.

- `target` {{optional_inline}}
  - : Eine Zeichenkette ohne Leerzeichen, die den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontextes angibt, in den die Ressource geladen wird. Falls der Name keinen bestehenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target`-Schlüsselwörter](/de/docs/Web/HTML/Reference/Elements/a#target) `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur relevant für [fenced frames](/de/docs/Web/API/Fenced_frame_API).

    Dieser Name kann als `target`-Attribut von [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)-Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}
  - : Eine Zeichenkette, die eine durch Kommas getrennte Liste von Fenstermerkmalen in der Form `name=value` enthält. Boolesche Werte können mit einer der folgenden Optionen auf wahr gesetzt werden: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige nicht-null Zahl ist. Diese Merkmale umfassen Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll und dergleichen. Die folgenden Optionen werden unterstützt:
    - `attributionsrc` {{experimental_inline}}
      - : Zeigt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzerinteraktions-Ereignishandlers wie `click`), innerhalb von fünf Sekunden nach der Benutzerinteraktion erfolgen. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort zum Abschluss der Registrierung einer Attributionsquelle auszulösen.

        Zusätzlich wird der Browser auch ausgelöst, die zugehörigen Quelldaten (wie im Antwort-Header {{httpheader("Attribution-Reporting-Register-Source")}} bereitgestellt) zu speichern, wenn die `open()`-Methode abgeschlossen ist.

        Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

        > [!NOTE]
        > `open()`-Aufrufe können nicht verwendet werden, um einen Attributions-Trigger zu registrieren.

    - `popup`
      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf wahr gesetzt wird, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die UI-Funktionen, die im Popup-Fenster enthalten sind, werden automatisch vom Browser entschieden, in der Regel einschließlich einer Adressleiste. Wenn `popup` vorhanden ist und auf false gesetzt ist, wird trotzdem ein neuer Tab geöffnet.

        Es gibt einige veraltete Funktionen, die früher UI-Features des geöffneten Fensters steuerten. In modernen Browsern haben sie nur noch die Wirkung, ein Popup anzufordern. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Features enthält (einschließlich nicht erkannter Funktionen) außer `noopener`, `noreferrer` oder `attributionsrc`, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:
        - `location` und `toolbar` sind beide false oder abwesend
        - `menubar` ist false oder abwesend
        - `resizable` ist false
        - `scrollbars` ist false oder abwesend
        - `status` ist false oder abwesend

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`
      - : Gibt die Breite des Inhaltsbereichs an, einschließlich der Scrollleisten. Der Mindestwert ist 100.

    - `height` oder `innerHeight`
      - : Gibt die Höhe des Inhaltsbereichs an, einschließlich der Scrollleisten. Der Mindestwert ist 100.

    - `left` oder `screenX`
      - : Gibt den Abstand in Pixeln von der linken Seite des Arbeitsbereichs an, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster erstellt wird.

    - `top` oder `screenY`
      - : Gibt den Abstand in Pixeln von der oberen Seite des Arbeitsbereichs an, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster erstellt wird.

    - `noopener`
      - : Wenn dieses Merkmal gesetzt ist, hat das neue Fenster keinen Zugriff auf das ursprüngliche Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht-leere Zielnamen, die nicht `_top`, `_self` und `_parent` sind, in Bezug auf die Entscheidung, ob ein neuer Browsing-Kontext geöffnet wird, wie `_blank` behandelt.

    - `noreferrer`
      - : Wenn dieses Merkmal gesetzt ist, lässt der Browser den [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header aus und setzt `noopener` auf wahr. Weitere Informationen finden Sie unter [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer).

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird als leere Zeichenkette (`""`) behandelt.

> [!NOTE]
> Angefragte Position (`top`, `left`) und angefragte Dimensionen (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn ein solcher angefragter Wert es nicht ermöglicht, dass das gesamte Browser-Popup im Arbeitsbereich der Anwendungen des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten, kein Teil des neuen Popups darf anfänglich außerhalb des Bildschirms positioniert sein.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}}-Objekt zurückgegeben.
Die zurückgegebene Referenz kann verwendet werden, um Eigenschaften und Methoden des neuen Kontextes zuzugreifen, solange sie die Sicherheitsanforderungen [der Same-origin policy](/de/docs/Web/Security/Same-origin_policy) erfüllt.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einem neuen {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} geöffnet wird, werden die Referenzen zum geöffneten Fenster getrennt und das zurückgegebene Objekt wird anzeigen, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, weil er beispielsweise durch einen Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die `open()`-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle nimmt eine URL als Parameter und lädt die durch sie identifizierte Ressource in einen neuen oder bestehenden Tab oder ein Fenster. Der `target`-Parameter bestimmt, in welchem Fenster oder Tab die Ressource geladen wird, und der `windowFeatures`-Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Funktionen zu öffnen und dessen Größe und Position zu steuern.

Entfernte URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das tatsächliche Abrufen der URL wird verzögert und beginnt nachdem der aktuelle Skriptblock die Ausführung beendet hat. Die Fenstergenerierung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strenge Popup-Blocker-Richtlinien. Popup-Fenster müssen direkt als Antwort auf Benutzereingaben geöffnet werden, und für jeden `Window.open()`-Aufruf ist ein separates Benutzeraktionen-Ereignis erforderlich. Dies verhindert, dass Websites Benutzer mit vielen Fenstern zuspammen. Dies stellt jedoch ein Problem für Multi-Window-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass sie:

- Nicht mehr als ein neues Fenster gleichzeitig öffnen.
- Bestehende Fenster wiederverwenden, um verschiedene Seiten anzuzeigen.
- Benutzer darüber informieren, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ zeigt das folgende Beispiel, wie man ein Popup mit dem Merkmal `popup` öffnet.

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

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar und `window.open()` funktioniert nicht. Anstatt sich ausschließlich auf das Vorhandensein dieser Funktionalität zu verlassen, können wir eine alternative Lösung bieten, damit die Website oder Anwendung dennoch funktioniert.

### Alternative Möglichkeiten bieten, wenn JavaScript deaktiviert ist

Wenn JavaScript-Unterstützung deaktiviert oder nicht existent ist, erstellt der User Agent entsprechend ein zweites Fenster oder rendert die referenzierte Ressource entsprechend seiner Handhabung des `target`-Attributs. Das Ziel und die Idee sind es, dem Benutzer eine Möglichkeit zu bieten (und _nicht aufzuerlegen_), die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Usability-Probleme im Zusammenhang mit Links, die Popups öffnen. Der Zweck von `event.preventDefault()` im Code ist es, die Standardaktion des Links abzubrechen: Wenn der Ereignis-Listener für `click` ausgeführt wird, besteht keine Notwendigkeit, die Standardaktion des Links auszuführen. Aber wenn die JavaScript-Unterstützung im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Ereignis-Listener für `click` ignoriert, und der Browser lädt die referenzierte Ressource im Zielrahmen oder Fenster, das den Namen `"WikipediaWindowName"` trägt. Wenn kein Rahmen oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster und benennt es `"WikipediaWindowName"`.

> [!NOTE]
> Weitere Informationen zum `target`-Attribut finden Sie unter [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target).

### Vorhandene Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des target-Attributs erstellt mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers, die weder recycelt noch wiederverwendet werden können. Versuchen Sie, Ihrem `target`-Attribut einen aussagekräftigen Namen zu geben, und verwenden Sie diesen `target`-Attribut auf Ihrer Seite wieder, so dass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (was den Prozess für den Benutzer beschleunigt) und damit den Grund (und die Nutzerressourcen, die dafür aufgewendete Zeit) für die Erstellung eines zusätzlichen Fensters von Anfang an rechtfertigt. Die Verwendung eines einzigen `target`-Attributswerts und dessen Wiederverwendung in Links ist viel benutzerressourcenfreundlicher, da es nur ein einziges zusätzliches Fenster erstellt, das recycelt wird.

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

Wenn der neu geöffnete Browsing-Kontext nicht den gleichen {{Glossary("Origin", "Ursprung")}} teilt, kann das öffnende Skript nicht mit dem Inhalt des Browsing-Kontextes interagieren (lesen oder schreiben).

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

### Vermeiden Sie die Verwendung von window.open()

Es ist vorzuziehen, die Verwendung von `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blockierfunktion.
- Moderne Browser bieten Tab-Browsing und Tab-fähige Browserbenutzer bevorzugen es in den meisten Situationen, neue Tabs anstelle neuer Fenster zu öffnen.
- Benutzer können eingebaute Browservorlagen oder Erweiterungen verwenden, um zu entscheiden, ob ein Link in einem neuen Fenster, im gleichen Fenster, in einem neuen Tab, im gleichen Tab oder im Hintergrund geöffnet werden soll. Das Erzwingen einer bestimmten Art des Öffnens mit `window.open()` wird sie verwirren und ihre Gewohnheiten ignorieren.
- Popups haben keine Menütoolbar, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden; daher ziehen viele Benutzer das Tab-Browsing vor, weil die Benutzeroberfläche stabil bleibt.

### Verwenden Sie niemals window.open() inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichen setzen oder wenn JavaScript geladen wird, Fehler auftreten oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien, wie Screenreader.

Falls notwendig, verwenden Sie ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element. Im Allgemeinen _sollten Sie nur einen Link für die Navigation zu einer echten URL_ verwenden.

### Kennzeichnen Sie immer Links, die zu einem sekundären Fenster führen

Kennzeichnen Sie Links, die neue Fenster öffnen, auf eine Weise, die Navigation für Benutzer erleichtert.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Zweck ist es, Benutzer auf Kontextwechsel hinzuweisen, um Verwirrung auf Seiten des Benutzers zu minimieren: Das Wechseln des aktuellen Fensters oder das Öffnen neuer Fenster kann für Benutzer sehr irritierend sein (im Fall eines Popups gibt es keine Toolbar mit einer "Zurück" Schaltfläche, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Änderungen im Kontext explizit identifiziert werden, bevor sie auftreten, können Benutzer bestimmen, ob sie fortfahren möchten oder sich auf den Wechsel vorbereiten können: Sie werden nicht verwirrt oder desorientiert sein, und erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen möchten (in einem neuen Fenster oder nicht, im gleichen Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Understanding WCAG, Leitfaden 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzer im Voraus warnen, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

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
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
