---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef}}

Die **`open()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle lädt eine angegebene Ressource in einen neuen oder bestehenden Browsing-Kontext (z. B. ein Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Reference/Elements/iframe)) unter einem angegebenen Namen.

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
  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontextes angibt, in den die Ressource geladen wird. Wenn der Name keinen bestehenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [„target“-Schlüsselwörter](/de/docs/Web/HTML/Reference/Elements/a#target), `_self`, `_blank` (Voreinstellung), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur relevant für [fenced frames](/de/docs/Web/API/Fenced_frame_API).

    Dieser Name kann als `target`-Attribut von [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target)- oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)-Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}
  - : Ein String, der eine kommagetrennte Liste von Fensterfunktionen in der Form `name=value` enthält. Boolesche Werte können mit einem der folgenden Werte auf wahr gesetzt werden: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige von null verschiedene Ganzzahl ist. Zu diesen Funktionen gehören Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll und Ähnliches. Die folgenden Optionen werden unterstützt:
    - `attributionsrc` {{experimental_inline}}
      - : Zeigt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header gemeinsam mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzerinteraktionsereignishandlers wie `click`) durchgeführt werden, innerhalb von fünf Sekunden nach der Benutzerinteraktion. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um die Registrierung einer Attributionsquelle abzuschließen.

        Darüber hinaus wird der Browser auch dazu veranlasst, die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header bereitgestellt), wenn die `open()`-Methode abgeschlossen ist.

        Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

        > [!NOTE]
        > `open()`-Aufrufe können nicht verwendet werden, um einen Attribuierungs-Trigger zu registrieren.

    - `popup`
      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf wahr gesetzt ist, wird ein minimales Popup-Fenster angefordert. Die im Popup-Fenster enthaltenen UI-Funktionen werden automatisch vom Browser entschieden, in der Regel wird nur eine Adressleiste angezeigt. Wenn `popup` vorhanden ist und auf falsch gesetzt ist, wird dennoch ein neuer Tab geöffnet.

        Es gibt einige veraltete Funktionen, die dazu verwendet wurden, UI-Funktionen des geöffneten Fensters zu steuern. In modernen Browsern haben sie nur den Effekt, ein Popup anzufordern. Wenn `popup` nicht angegeben ist und `windowFeatures` andere Funktionen (einschließlich nicht erkannter) als `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster ebenfalls als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:
        - `location` und `toolbar` sind beide falsch oder fehlen
        - `menubar` ist falsch oder fehlt
        - `resizable` ist falsch
        - `scrollbars` ist falsch oder fehlt
        - `status` ist falsch oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`
      - : Gibt die Breite des Inhaltsbereichs einschließlich Bildlaufleisten an. Der mindestens erforderliche Wert beträgt 100.

    - `height` oder `innerHeight`
      - : Gibt die Höhe des Inhaltsbereichs einschließlich Bildlaufleisten an. Der mindestens erforderliche Wert beträgt 100.

    - `left` oder `screenX`
      - : Gibt den Abstand in Pixeln von der linken Seite des Arbeitsbereichs an, wie es vom Betriebssystem des Benutzers definiert wird, wo das neue Fenster erzeugt wird.

    - `top` oder `screenY`
      - : Gibt den Abstand in Pixeln von der oberen Seite des Arbeitsbereichs an, wie es vom Betriebssystem des Benutzers definiert wird, wo das neue Fenster erzeugt wird.

    - `noopener`
      - : Wenn diese Funktion gesetzt ist, hat das neue Fenster keinen Zugriff auf das ursprüngliche Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht leere Zielnamen, außer `_top`, `_self` und `_parent`, in Bezug auf die Entscheidung, ob ein neuer Browsing-Kontext geöffnet wird, wie `_blank` behandelt.

    - `noreferrer`
      - : Wenn diese Funktion gesetzt ist, wird der [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header ausgelassen, und `noopener` wird auf wahr gesetzt. Weitere Informationen finden Sie unter [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer).

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie der leere String (`""`) behandelt.

> [!NOTE]
> Angeforderte Positionen (`top`, `left`) und angeforderte Abmessungen (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn einer dieser angeforderten Werte das vollständige Rendern des Browser-Popups im Arbeitsbereich der Anwendungen des Benutzers Betriebssystems nicht zulässt. Mit anderen Worten: Kein Teil des neuen Popups kann initial außerhalb des Bildschirms positioniert sein.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}}-Objekt zurückgegeben. Der zurückgegebene Verweis kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange er den Sicherheitsanforderungen der [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy) entspricht.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einer neuen {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} geöffnet wird, werden Verweise auf das geöffnete Fenster getrennt, und das zurückgegebene Objekt zeigt an, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, zum Beispiel weil er von einem Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die `open()`-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle nimmt eine URL als Parameter und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Tab oder ein Fenster. Der `target`-Parameter bestimmt, in welches Fenster oder Tab die Ressource geladen wird, und der `windowFeatures`-Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Funktionen zu eröffnen und dessen Größe und Position zu steuern.

Remote-URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das eigentliche Abrufen der URL wird verzögert und startet, nachdem der aktuelle Skriptblock die Ausführung beendet hat. Die Fenstergenerierung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strikte Popup-Blocker-Richtlinien. Popup-Fenster müssen als direkte Reaktion auf Benutzeraktionen geöffnet werden, und jedes `Window.open()`-Aufruf erfordert ein separates Benutzeraktionsergeignis. Dies verhindert, dass Websites Benutzer mit vielen Fenstern belästigen. Es stellt jedoch ein Problem für Mehrfensteranwendungen dar. Um dieses Problem zu umgehen, können Sie Ihre Anwendungen so gestalten, dass sie:

- Nicht mehr als ein neues Fenster gleichzeitig öffnen.
- Bestehende Fenster wiederverwenden, um verschiedene Seiten anzuzeigen.
- Benutzer darüber informieren, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ demonstriert das folgende Beispiel, wie man ein Popup mit der `popup`-Funktion öffnet.

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

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar und `window.open()` funktioniert nicht. Statt sich ausschließlich auf das Vorhandensein dieser Funktion zu verlassen, können wir eine alternative Lösung bieten, sodass die Website oder Anwendung weiterhin funktioniert.

### Alternativen bereitstellen, wenn JavaScript deaktiviert ist

Wenn die Unterstützung für JavaScript deaktiviert oder nicht vorhanden ist, erstellt der Benutzeragent ein entsprechendes zweites Fenster oder rendert die referenzierte Ressource gemäß seiner Handhabung des `target`-Attributes. Das Ziel und die Idee ist es, dem Benutzer eine Möglichkeit zu bieten (und _nicht aufzuzwingen_), die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Usability-Probleme im Zusammenhang mit Links, die Popups öffnen. Der Zweck von `event.preventDefault()` im Code ist es, die Standardaktion des Links abzubrechen: Wenn der Ereignis-Listener für `click` ausgeführt wird, besteht keine Notwendigkeit, die Standardaktion des Links auszuführen. Aber wenn die Unterstützung für JavaScript auf dem Benutzerbrowser deaktiviert oder nicht vorhanden ist, wird der Ereignis-Listener für `click` ignoriert und der Browser lädt die referenzierte Ressource im Zielfenster oder -rahmen, das den Namen `"WikipediaWindowName"` hat. Wenn kein Rahmen oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster und benennt es `"WikipediaWindowName"`.

> [!NOTE]
> Für mehr Details zum `target`-Attribut, siehe [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Das Verwenden von `"_blank"` als Wert des target-Attributs wird mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellen, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target`-Attribut einen sinnvollen Namen zu geben und diesen auf Ihrer Seite wiederzuverwenden, sodass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (damit der Prozess für den Benutzer beschleunigt wird) und daher der Grund (und die Benutzung der Benutzersystemressourcen, verbrachte Zeit) für das Erstellen eines zweiten Fensters gerechtfertigt ist. Es ist viel benutzerressourcenfreundlicher, einen einzelnen `target`-Attributwert zu verwenden und ihn in Links wiederzuverwenden, da so nur ein einziges sekundäres Fenster erstellt wird, das recycelt wird.

Hier ist ein Beispiel, bei dem ein zweites Fenster geöffnet und für andere Links wiederverwendet werden kann:

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

Wenn der neu geöffnete Browsing-Kontext nicht den selben {{Glossary("Origin", "Ursprung")}} teilt, kann das öffnende Skript nicht mit dem Inhalt des Browsing-Kontextes interagieren (lesen oder schreiben).

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

Für mehr Informationen siehe den Artikel [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy).

## Barrierefreiheitsbedenken

### Vermeiden Sie die Verwendung von window.open()

Es ist vorzuziehen, die Verwendung von `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blocking-Funktion.
- Moderne Browser bieten ein Tab-Browsing, und Tab-fähige Browser-Nutzer ziehen es vor, neue Tabs zu öffnen statt neue Fenster in den meisten Situationen zu öffnen.
- Benutzer können integrierte Browserfunktionen oder Erweiterungen verwenden, um zu entscheiden, ob ein Link in einem neuen Fenster, im gleichen Fenster, in einem neuen Tab, im gleichen Tab oder im Hintergrund geöffnet wird. Das Erzwingen des Öffnens auf eine bestimmte Weise, unter Verwendung von `window.open()`, wird sie verwirren und ihre Gewohnheiten ignorieren.
- Popups haben keine Menü-Symbolleiste, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden; daher bevorzugen viele Benutzer das Tab-Browsing, da die Oberfläche stabil bleibt.

### Verwenden Sie niemals window.open() inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese fehlerhaften `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, beim Bookmarken oder wenn JavaSkript lädt, Fehler auftreten oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien wie Bildschirmleser.

Falls notwendig, verwenden Sie stattdessen ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element. Im Allgemeinen _sollten Sie nur einen Link zur Navigation zu einer echten URL verwenden_.

### Identifizieren Sie immer Links, die zu einem zweiten Fenster führen

Identifizieren Sie Links, die neue Fenster öffnen werden, auf eine Weise, die die Navigation für Benutzer unterstützt.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Der Zweck ist es, Benutzer vor Kontextänderungen zu warnen, um Verwirrungen auf Seiten des Benutzers zu minimieren: Das Ändern des aktuellen Fensters oder das Öffnen neuer Fenster kann für Benutzer sehr verwirrend sein (im Fall eines Popups bietet keine Symbolleiste eine "Zurück"-Schaltfläche, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Kontextänderungen explizit identifiziert werden, bevor sie auftreten, können die Benutzer bestimmen, ob sie fortfahren möchten oder sie können sich auf die Änderung vorbereiten: nicht nur werden sie nicht verwirrt oder desorientiert fühlen, sondern erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis von WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `target`-Attribut-Dokumentation:
  - [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Reference/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
