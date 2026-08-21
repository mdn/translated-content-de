---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`open()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces lädt eine angegebene Ressource in einen neuen oder bestehenden Browsing-Kontext (d.h. ein Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Reference/Elements/iframe)) unter einem angegebenen Namen.

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
  - : Ein leerzeichenfreier String, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontexts angibt, in den die Ressource geladen werden soll. Falls der Name keinen existierenden Kontext identifiziert, wird ein neuer Kontext erstellt und der angegebene Name zugewiesen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Reference/Elements/a#target), `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur für [abgegrenzte Frames](/de/docs/Web/API/Fenced_frame_API) relevant.

    Dieser Name kann als `target`-Attribut der [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target)- oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)-Elemente verwendet werden.

- `windowFeatures` {{optional_inline}}
  - : Ein String, der eine durch Kommata getrennte Liste von Fenster-Features in der Form `name=value` enthält. Boolean-Werte können mit einer der folgenden Methoden auf true gesetzt werden: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige von null abweichende Ganzzahl ist. Zu diesen Features gehören Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll und so weiter. Die folgenden Optionen werden unterstützt:
    - `attributionsrc` {{deprecated_inline}}
      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "vorübergehender Aktivierung")}} (d.h. innerhalb eines Benutzer-Interaktion-Ereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion erfolgen. Auf Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort zu triggern, um die Registrierung einer Attribution-Quelle abzuschließen.

        Zusätzlich wird der Browser auch ausgelöst, um die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header bereitgestellt) zu speichern, wenn die `open()`-Methode abgeschlossen ist.

        Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

        > [!NOTE]
        > `open()`-Aufrufe können nicht verwendet werden, um einen Attribution-Trigger zu registrieren.

    - `popup`
      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt ist, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die im Popup-Fenster enthaltenen UI-Features werden automatisch vom Browser entschieden und beinhalten allgemein nur eine Adressleiste. Wenn `popup` vorhanden und auf false gesetzt ist, wird dennoch ein neuer Tab geöffnet.

        Es gibt einige Legacy-Features, die früher UI-Features des geöffneten Fensters kontrollierten. In modernen Browsern haben sie nur noch die Wirkung, ein Popup anzufordern. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Features (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:
        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` ist false oder fehlt
        - `status` ist false oder fehlt

        Anderenfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`
      - : Gibt die Breite des Inhaltsbereichs an, einschließlich der Scrollleisten. Der Mindestwert ist 100.

    - `height` oder `innerHeight`
      - : Gibt die Höhe des Inhaltsbereichs an, einschließlich der Scrollleisten. Der Mindestwert ist 100.

    - `left` oder `screenX`
      - : Gibt die Entfernung in Pixeln von der linken Seite des Arbeitsbereichs an, wie sie vom Betriebssystem des Benutzers definiert ist, an der das neue Fenster erstellt wird.

    - `top` oder `screenY`
      - : Gibt die Entfernung in Pixeln von der oberen Seite des Arbeitsbereichs an, wie sie vom Betriebssystem des Benutzers definiert ist, an der das neue Fenster erstellt wird.

    - `noopener`
      - : Wenn dieses Feature gesetzt ist, wird das neue Fenster keinen Zugriff auf das ursprüngliche Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) haben und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht leere Zielnamen, außer `_top`, `_self` und `_parent`, in Bezug darauf, ob ein neuer Browsing-Kontext geöffnet wird, wie `_blank` behandelt.

    - `noreferrer`
      - : Wenn dieses Feature gesetzt ist, wird der [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header vom Browser weggelassen und `noopener` wird auf true gesetzt. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) für mehr Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`).

> [!NOTE]
> Angeforderte Position (`top`, `left`) und angeforderte Maße (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn einer der angeforderten Werte es nicht erlaubt, dass das gesamte Browser-Popup im Arbeitsbereich der Anwendungen des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten, kein Teil des neuen Popups kann anfänglich außerhalb des Bildschirms positioniert werden.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}}-Objekt zurückgegeben.
Der zurückgegebene Verweis kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange er den [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)-Sicherheitsanforderungen entspricht.

Wenn der {{httpheader("Cross-Origin-Opener-Policy")}} HTTP-Header verwendet wird und die Dokumentrichtlinien so sind, dass das Dokument in einer neuen {{Glossary("Browsing_context", "Browsingkontext-Gruppe")}} geöffnet wird, werden die Verweise auf das geöffnete Fenster getrennt und das zurückgegebene Objekt zeigt an, dass das geöffnete Fenster geschlossen ist ([`closed`](/de/docs/Web/API/Window/closed) ist `true`).

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, zum Beispiel weil er durch einen Browser-Popup-Blocker blockiert wurde.

## Beschreibung

Die `open()`-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces nimmt eine URL als Parameter und lädt die Ressource, die sie identifiziert, in einen neuen oder bestehenden Browsing-Kontext.
Der `target`-Parameter bestimmt, in welches Fenster, welchen Tab oder welches Frame die Ressource geladen werden soll, und der `windowFeatures`-Parameter kann verwendet werden, um die Features des neuen Fensters zu steuern, wie zum Beispiel, ob es ein Tab oder ein Popup mit minimalen UI-Features ist, seine Größe und Position und so weiter.

Wenn `window.open()` einen neuen Browsing-Kontext erstellt (d.h. wenn kein bestehendes Fenster mit diesem Namen gefunden wird), enthält das Fenster zunächst `about:blank`.
Wenn eine andere URL angegeben wurde, wird sie asynchron geladen und das Global Object wird für diese Navigation wiederverwendet, wenn es gleichen Ursprungs ist – so können alle Eigenschaften, die auf dem Fenster vor dem Laden gesetzt wurden, bestehen bleiben.
Wenn das Ziel sich auf ein bestehendes navigierbares Element bezieht (`_self`, `_parent`, `_top` oder ein bekannter Fenstername), tritt keine `about:blank`-Phase auf – der Browser navigiert direkt den bestehenden Kontext.

Moderne Browser haben strikte Popup-Blocker-Richtlinien. Popup-Fenster müssen in direkter Reaktion auf Benutzereingaben geöffnet werden, und für jeden `Window.open()`-Aufruf ist ein separates Benutzerinteraktionsereignis erforderlich. Dies verhindert, dass Websites Benutzer mit vielen Fenstern überfluten. Dies stellt jedoch ein Problem für Multi-Window-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass:

- nicht mehr als ein neues Fenster gleichzeitig geöffnet wird.
- bestehende Fenster erneut verwendet werden, um verschiedene Seiten anzuzeigen.
- Benutzer darüber informiert werden, wie sie ihre Browsereinstellungen aktualisieren, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ zeigt das folgende Beispiel, wie ein Popup unter Verwendung des `popup`-Features geöffnet wird.

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

## Progressiver Ausbau

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar und `window.open()` funktioniert nicht. Anstatt sich ausschließlich auf die Anwesenheit dieses Features zu verlassen, können wir eine alternative Lösung bieten, damit die Website oder Anwendung weiterhin funktioniert.

### Alternative Wege bereitstellen, wenn JavaScript deaktiviert ist

Wenn JavaScript-Unterstützung deaktiviert oder nicht existent ist, wird der Benutzeragent ein sekundäres Fenster entsprechend erstellen oder die referenzierte Ressource gemäß seiner Handhabung des `target`-Attributs rendern. Das Ziel und die Idee sind es, dem Benutzer eine Möglichkeit zu bieten (und _nicht aufzuzwingen_), die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Probleme in Bezug auf die Benutzerfreundlichkeit, die mit Links verbunden sind, die Popups öffnen. Der Zweck des `event.preventDefault()` im Code besteht darin, die Standardaktion des Links abzubrechen: Wenn der Ereignis-Listener für `click` ausgeführt wird, dann besteht keine Notwendigkeit, die Standardaktion des Links auszuführen. Wenn jedoch die JavaScript-Unterstützung im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Ereignis-Listener für `click` ignoriert und der Browser lädt die referenzierte Ressource in dem Zielfenster oder -tab, das den Namen `"WikipediaWindowName"` trägt. Wenn kein Frame oder Fenster den Namen `"WikipediaWindowName"` hat, wird der Browser ein neues Fenster erstellen und es `"WikipediaWindowName"` nennen.

> [!NOTE]
> Für weitere Informationen zum `target`-Attribut siehe [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target) oder [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target).

### Bestehende Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des `target`-Attributs erstellt mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers, die nicht wiederverwendet oder recycelt werden können. Versuchen Sie, Ihrem `target`-Attribut einen sinnvollen Namen zu geben und diesen `target`-Attributwert auf Ihrer Seite wiederzuverwenden, so dass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (was den Prozess für den Benutzer beschleunigt) und somit die Rechtfertigung (sowie die Ressourcen, Zeitaufwand des Benutzers) für die Erstellung eines sekundären Fensters erfüllt. Die Verwendung eines einzigen `target`- Attributwertes und dessen Wiederverwendung in Links ist viel benutzerfreundlicher, da es nur ein einziges sekundäres Fenster erstellt, das recycelt wird.

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

## Same-Origin-Policy

Wenn der neu geöffnete Browsing-Kontext nicht den gleichen {{Glossary("Origin", "Ursprung")}} teilt, wird das öffnende Skript nicht in der Lage sein, mit dem Inhalt des Browsing-Kontexts zu interagieren (lesen oder schreiben).

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

Für weitere Informationen konsultieren Sie den Artikel zur [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy).

## Barrierefreiheitsbedenken

### Vermeiden Sie den Rückgriff auf window.open()

Es ist vorzuziehen, den Rückgriff auf `window.open()` zu vermeiden, aus verschiedenen Gründen:

- Moderne Browser bieten Popup-Blocker-Features.
- Moderne Browser bieten Tab-Browsing und Tab-fähige Browserbenutzer bevorzugen normalerweise das Öffnen neuer Tabs gegenüber dem Öffnen neuer Fenster.
- Benutzer können eingebaute Browser-Features oder Erweiterungen verwenden, um zu wählen, ob ein Link in einem neuen Fenster, im selben Fenster, in einem neuen Tab, im selben Tab oder im Hintergrund geöffnet wird. Das Erzwingen der Öffnung auf eine bestimmte Weise mittels `window.open()` wird sie verwirren und ihre Gewohnheiten missachten.
- Popups haben keine Menü-Symbolleiste, während neue Tabs die Benutzeroberfläche des Browserfensters verwenden; daher bevorzugen viele Benutzer das Tab-Browsing, weil die Benutzeroberfläche stabil bleibt.

### Verwenden Sie niemals window.open() inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Bookmarking oder wenn JavaScript geladen wird, Fehler oder deaktiviert. Sie vermitteln auch falsche Semantik an unterstützende Technologien, wie Bildschirmlesegeräte.

Falls notwendig, verwenden Sie stattdessen ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) Element. Im Allgemeinen _sollten Sie einen Link nur für die Navigation zu einer echten URL verwenden_.

### Immer Links identifizieren, die zu einem sekundären Fenster führen

Identifizieren Sie Links, die neue Fenster öffnen, in einer Weise, die die Navigation für Benutzer erleichtert.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Das Ziel ist es, Benutzer vor Kontextänderungen zu warnen, um Verwirrung auf Seiten des Benutzers zu minimieren: Das Ändern des aktuellen Fensters oder das Öffnen neuer Fenster kann für Benutzer sehr verwirrend sein (im Falle eines Popups gibt es keine Symbolleiste mit einer "Zurück"-Schaltfläche, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Kontextänderungen explizit identifiziert werden, bevor sie eintreten, können die Benutzer bestimmen, ob sie fortfahren möchten oder sich auf die Änderung vorbereiten können: Sie werden nicht nur nicht verwirrt oder desorientiert sein, sondern erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im Hintergrund oder nicht).

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern vorher eine Warnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `target`-Attributdokumentation:
  - [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/de/docs/Web/HTML/Reference/Elements/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Reference/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
