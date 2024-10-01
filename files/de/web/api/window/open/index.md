---
title: "Window: open() Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Die **`open()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle lädt eine angegebene Ressource in einen neuen oder existierenden Browsing-Kontext (d.h. ein Tab, ein Fenster oder ein [iframe](/de/docs/Web/HTML/Element/iframe)) unter einem angegebenen Namen.

## Syntax

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameter

- `url` {{optional_inline}}

  - : Ein String, der die URL oder den Pfad der Ressource angibt, die geladen werden soll. Wenn ein leerer String (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite im Ziel-Browsing-Kontext geöffnet.

- `target` {{optional_inline}}

  - : Ein Leerzeichen-freier String, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontexts angibt, in den die Ressource geladen wird. Wenn der Name keinen bestehenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Element/a#target), `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur relevant für [fenced frames](/de/docs/Web/API/Fenced_frame_API).

    Dieser Name kann als `target` Attribut der [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target) Elemente verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String, der eine durch Kommas getrennte Liste von Fenster-Features in der Form `name=value` enthält. Boolesche Werte können auf wahr gesetzt werden mit einer der folgenden Definitionen: `name`, `name=yes`, `name=true`, oder `name=n`, wobei `n` eine beliebige von Null unterschiedliche ganze Zahl ist. Diese Features umfassen Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll und so weiter. Die folgenden Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit dem `open()` Aufruf sendet. Dieser Aufruf muss mit {{Glossary("Transient_activation", "transient activation")}} (d.h. innerhalb eines Benutzerinteraktionsereignishandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion erfolgen. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort auszulösen, um die Registrierung einer Attributionsquelle abzuschließen.

        Darüber hinaus wird auch der Browser ausgelöst, um die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt) zu speichern, wenn die `open()` Methode abgeschlossen wird.

        Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

        > **Note:** `open()` Aufrufe können nicht verwendet werden, um einen Attribution Trigger zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf wahr gesetzt ist, wird ein minimales Popup-Fenster angefordert. Die UI-Features im Popup-Fenster werden automatisch vom Browser entschieden, in der Regel wird nur eine Adressleiste enthalten sein. Wenn `popup` vorhanden und auf falsch gesetzt ist, wird dennoch ein neuer Tab geöffnet.

        Es gibt ein paar ältere Features, die früher die UI-Funktionen des geöffneten Fensters steuerten. In modernen Browsern haben sie nur die Wirkung, ein Popup anzufordern. Wenn `popup` nicht spezifiziert ist, und `windowFeatures` irgendwelche Features (einschließlich nicht erkannter) außer `noopener`, `noreferrer` oder `attributionsrc` enthält, wird das Fenster ebenfalls als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide falsch oder fehlen
        - `menubar` ist falsch oder fehlt
        - `resizable` ist falsch
        - `scrollbars` ist falsch oder fehlt
        - `status` ist falsch oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Gibt die Breite des Inhaltsbereichs einschließlich der Scrollleisten an. Der minimal erforderliche Wert ist 100.

    - `height` oder `innerHeight`

      - : Gibt die Höhe des Inhaltsbereichs einschließlich der Scrollleisten an. Der minimal erforderliche Wert ist 100.

    - `left` oder `screenX`

      - : Gibt den Abstand in Pixeln von der linken Seite des Arbeitsbereichs an, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster erstellt wird.

    - `top` oder `screenY`

      - : Gibt den Abstand in Pixeln von der Oberseite des Arbeitsbereichs an, wie vom Betriebssystem des Benutzers definiert, wo das neue Fenster erstellt wird.

    - `noopener`

      - : Wenn dieses Feature gesetzt ist, wird das neue Fenster keinen Zugriff auf das ursprüngliche Fenster über [`Window.opener`](/de/docs/Web/API/Window/opener) haben und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht leere Zielnamen, außer `_top`, `_self` und `_parent`, wie `_blank` behandelt, wenn es darum geht, ob ein neuer Browsing-Kontext geöffnet werden soll.

    - `noreferrer`
      - : Wenn dieses Feature gesetzt ist, wird der Browser den [`Referer`](/de/docs/Web/HTTP/Headers/Referer) Header weglassen und `noopener` auf wahr setzen. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) für weitere Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird wie ein leerer String (`""`) behandelt.

> [!NOTE]
> Angeforderte Position (`top`, `left`) und angeforderte Dimension (`width`, `height`) Werte in `windowFeatures` **werden korrigiert**, wenn einer dieser gewünschten Werte es nicht erlaubt, dass das gesamte Browser-Popup innerhalb des Arbeitsbereichs für Anwendungen des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten, kein Teil des neuen Popups kann anfänglich außerhalb des Bildschirms positioniert sein.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein {{Glossary("WindowProxy", "`WindowProxy`")}} Objekt zurückgegeben. Der zurückgegebene Verweis kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange er den Sicherheitsanforderungen der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) entspricht.

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, z.B. weil er durch einen Popup-Blocker des Browsers blockiert wurde.

## Beschreibung

Die `open()` Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle nimmt eine URL als Parameter entgegen und lädt die Ressource, die sie identifiziert, in ein neues oder bestehendes Tab oder Fenster. Der `target` Parameter bestimmt, in welches Fenster oder Tab die Ressource geladen werden soll, und der `windowFeatures` Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Features zu öffnen und dessen Größe und Position zu steuern.

Entfernte URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das tatsächliche Abrufen der URL wird verschoben und beginnt, nachdem der aktuelle Skriptblock abgeschlossen ist. Die Fenstergenerierung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strikte Popup-Blocker-Richtlinien. Popup-Fenster müssen als direkte Reaktion auf Benutzereingaben geöffnet werden, und ein separates Benutzerereignis ist für jeden `Window.open()` Aufruf erforderlich. Dies soll verhindern, dass Websites Benutzer mit vielen Fenstern belästigen. Dies stellt jedoch ein Problem für Multi-Window-Anwendungen dar. Um dieses Problem zu umgehen, können Sie Ihre Anwendungen so gestalten:

- Öffnen Sie nicht mehr als ein neues Fenster gleichzeitig.
- Verwenden Sie vorhandene Fenster für die Anzeige verschiedener Seiten wieder.
- Weisen Sie Benutzer an, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

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

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar und `window.open()` wird nicht funktionieren. Anstatt sich ausschließlich auf die Anwesenheit dieses Features zu verlassen, können wir eine alternative Lösung bereitstellen, damit die Website oder Anwendung weiterhin funktioniert.

### Bereitstellung alternativer Methoden, wenn JavaScript deaktiviert ist

Wenn die Unterstützung von JavaScript deaktiviert oder nicht vorhanden ist, wird der Benutzeragent ein sekundäres Fenster entsprechend erstellen oder die referenzierte Ressource gemäß seiner Handhabung des `target` Attributs rendern. Das Ziel und die Idee ist es, dem Benutzer eine (und nicht aufzuzwingende) Möglichkeit zu geben, die referenzierte Ressource zu öffnen.

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

Der obige Code löst einige Usability-Probleme im Zusammenhang mit Links, die Popups öffnen. Der Zweck von `event.preventDefault()` im Code besteht darin, die Standardaktion des Links abzubrechen: Wenn der Ereignis-Listener für `click` ausgeführt wird, gibt es keine Notwendigkeit, die Standardaktion des Links auszuführen. Wenn jedoch die Unterstützung von JavaScript im Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Ereignis-Listener für `click` ignoriert und der Browser lädt die referenzierte Ressource im Ziel-Frame oder Fenster, das den Namen `"WikipediaWindowName"` hat. Wenn kein Frame oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt und benennt der Browser ein neues Fenster mit `"WikipediaWindowName"`.

> [!NOTE]
> Weitere Details zum `target` Attribut finden Sie unter [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target).

### Wiederverwendung vorhandener Fenster und Vermeidung von `target="_blank"`

Die Verwendung von `"_blank"` als Wert des `target` Attributs wird mehrere neue und unbenannte Fenster auf dem Desktop des Benutzers erstellen, die nicht recycelt oder wiederverwendet werden können. Versuchen Sie, Ihrem `target` Attribut einen aussagekräftigen Namen zu geben und diesen auf Ihrer Seite wiederzuverwenden, damit ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (was den Prozess für den Benutzer beschleunigt) und somit den Grund (sowie die Nutzung von Systemressourcen des Benutzers und die aufgewendete Zeit) für die Erstellung eines sekundären Fensters rechtfertigt. Die Verwendung eines einzigen `target` Attributwertes und dessen Wiederverwendung in Links ist viel benutzerfreundlicher, da es nur ein einziges sekundäres Fenster erstellt, das recycelt wird.

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

Wenn der neu geöffnete Browsing-Kontext nicht denselben {{Glossary("Origin", "Ursprung")}} teilt, kann das öffnende Skript nicht (lesend oder schreibend) mit dem Inhalt des Browsing-Kontexts interagieren.

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

Weitere Informationen finden Sie im Artikel zur [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

## Barrierefreiheitsbedenken

### Vermeiden Sie die Verwendung von window.open()

Es ist vorzuziehen, `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blocker-Funktion.
- Moderne Browser bieten Tab-Browser und Benutzer, die Browsing mit Tabs unterstützen, bevorzugen in den meisten Situationen das Öffnen neuer Tabs gegenüber dem Öffnen neuer Fenster.
- Benutzer können Browser-eigene Funktionen oder Erweiterungen verwenden, um zu wählen, ob sie einen Link in einem neuen Fenster, demselben Fenster, in einem neuen Tab, demselben Tab oder im Hintergrund öffnen möchten. Das Erzwingen einer bestimmten Öffnungsweise mit `window.open()` wird sie verwirren und ihre Gewohnheiten missachten.
- Popups haben keine Menüleiste, während neue Tabs die Benutzeroberfläche des Browser-Fensters verwenden; daher bevorzugen viele Benutzer das Surfen mit Tabs, da die Oberfläche stabil bleibt.

### Verwenden Sie niemals window.open() inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href` Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Setzen von Lesezeichen oder beim Laden von JavaScript, bei Fehlern oder wenn JavaScript deaktiviert ist. Sie geben auch falsche Semantik an unterstützende Technologien, wie Bildschirmleser, weiter.

Falls erforderlich, verwenden Sie stattdessen ein [`<button>`](/de/docs/Web/HTML/Element/button) Element. Im Allgemeinen sollten Sie nur einen Link zur Navigation zu einer realen URL verwenden.

### Identifizieren Sie immer Links, die zu einem sekundären Fenster führen

Identifizieren Sie Links, die neue Fenster öffnen, so, dass sie die Navigation für Benutzer unterstützen.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

Der Zweck besteht darin, Benutzer vor Kontextänderungen zu warnen, um Verwirrung zu minimieren: Das Ändern des aktuellen Fensters oder das Erscheinen neuer Fenster kann für Benutzer sehr verwirrend sein (im Fall eines Popups bietet keine Symbolleiste einen "Zurück"-Button, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Änderungen im Kontext vor ihrer Durchführung ausdrücklich identifiziert werden, können die Benutzer bestimmen, ob sie fortfahren möchten, oder sie können sich auf die Änderung vorbereiten: So werden sie nicht verwirrt oder desorientiert sein, sondern erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen (in einem neuen Fenster oder nicht, im gleichen Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis der WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Neue Fenster und Tabs aus einem Link nur öffnen, wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern im Voraus Bescheid geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `target` Attribut Dokumentation:
  - [`<a>`](/de/docs/Web/HTML/Element/a#target)
  - [`<form>`](/de/docs/Web/HTML/Element/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel#noopener)
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
