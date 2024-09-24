---
title: "Fenster: open()-Methode"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
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

  - : Ein String, der die URL oder den Pfad der zu ladenden Ressource angibt. Wenn ein leerer String (`""`) angegeben wird oder dieser Parameter weggelassen wird, wird eine leere Seite in den Ziel-Browsing-Kontext geöffnet.

- `target` {{optional_inline}}

  - : Ein String ohne Leerzeichen, der den [Namen](/de/docs/Web/API/Window/name) des Browsing-Kontextes angibt, in den die Ressource geladen wird. Wenn der Name keinen bestehenden Kontext identifiziert, wird ein neuer Kontext erstellt und mit dem angegebenen Namen versehen. Die speziellen [`target` Schlüsselwörter](/de/docs/Web/HTML/Element/a#target) `_self`, `_blank` (Standard), `_parent`, `_top` und `_unfencedTop` können ebenfalls verwendet werden. `_unfencedTop` ist nur relevant für [fenced frames](/de/docs/Web/API/Fenced_frame_API).

    Dieser Name kann als `target`-Attribut von [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target) Elementen verwendet werden.

- `windowFeatures` {{optional_inline}}

  - : Ein String, der eine durch Kommas getrennte Liste von Fenstermerkmalen in der Form `name=value` enthält. Boolesche Werte können auf true gesetzt werden durch: `name`, `name=yes`, `name=true` oder `name=n`, wobei `n` eine beliebige von null abweichende Ganzzahl ist. Zu diesen Merkmalen gehören Optionen wie die Standardgröße und -position des Fensters, ob ein minimales Popup-Fenster geöffnet werden soll und so weiter. Die folgenden Optionen werden unterstützt:

    - `attributionsrc` {{experimental_inline}}

      - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem `open()`-Aufruf sendet. Dieser Aufruf muss mit [transient activation](/de/docs/Glossary/Transient_activation) (d. h. innerhalb eines Benutzereingabe-Eventhandlers wie `click`) innerhalb von fünf Sekunden nach der Benutzerinteraktion durchgeführt werden. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um die Registrierung einer Attributionsquelle abzuschließen.

        Zusätzlich wird der Browser auch dazu veranlasst, die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader angegeben) zu speichern, wenn die `open()`-Methode abgeschlossen ist.

        Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

        > **Note:** `open()`-Aufrufe können nicht verwendet werden, um einen Attributions-Trigger zu registrieren.

    - `popup`

      - : Standardmäßig öffnet `window.open` die Seite in einem neuen Tab. Wenn `popup` auf true gesetzt ist, wird angefordert, dass ein minimales Popup-Fenster verwendet wird. Die in das Popup-Fenster einbezogenen UI-Merkmale werden automatisch vom Browser entschieden, meist wird nur eine Adressleiste eingeschlossen. Wenn `popup` vorhanden und auf false gesetzt ist, wird trotzdem ein neues Tab geöffnet.

        Es gibt einige älterer Merkmale, die UI-Merkmale des geöffneten Fensters steuern sollten. In modernen Browsern haben sie nur die Wirkung, ein Popup anzufordern. Wenn `popup` nicht angegeben ist und `windowFeatures` irgendwelche Merkmale (einschließlich nicht erkannter) enthält, außer `noopener`, `noreferrer` oder `attributionsrc`, wird das Fenster auch als Popup geöffnet, wenn eine der folgenden Bedingungen zutrifft:

        - `location` und `toolbar` sind beide false oder fehlen
        - `menubar` ist false oder fehlt
        - `resizable` ist false
        - `scrollbars` sind false oder fehlen
        - `status` ist false oder fehlt

        Andernfalls wird das Fenster als Tab geöffnet.

    - `width` oder `innerWidth`

      - : Gibt die Breite des Inhaltsbereichs, einschließlich der Scrollbalken, an. Der Mindestwert ist 100.

    - `height` oder `innerHeight`

      - : Gibt die Höhe des Inhaltsbereichs, einschließlich der Scrollbalken, an. Der Mindestwert ist 100.

    - `left` oder `screenX`

      - : Gibt die Entfernung in Pixel vom linken Rand des Arbeitsbereichs an, wie er vom Betriebssystem des Benutzers definiert ist, wo das neue Fenster erzeugt wird.

    - `top` oder `screenY`

      - : Gibt die Entfernung in Pixel vom oberen Rand des Arbeitsbereichs an, wie er vom Betriebssystem des Benutzers definiert ist, wo das neue Fenster erzeugt wird.

    - `noopener`

      - : Wenn dieses Merkmal gesetzt ist, hat das neue Fenster keinen Zugriff auf das Ursprungsfenster über [`Window.opener`](/de/docs/Web/API/Window/opener) und gibt `null` zurück.

        Wenn `noopener` verwendet wird, werden nicht-leere Zielnamen, mit Ausnahme von `_top`, `_self` und `_parent`, wie `_blank` behandelt, was entscheidet, ob ein neuer Browsing-Kontext geöffnet werden soll.

    - `noreferrer`
      - : Wenn dieses Merkmal gesetzt ist, wird der Browser den [`Referer`](/de/docs/Web/HTTP/Headers/Referer)-Header weglassen und `noopener` auf true setzen. Siehe [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) für weitere Informationen.

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`).

> [!NOTE]
> Angeforderte Positionswerte (`top`, `left`) und Maße (`width`, `height`) in `windowFeatures` **werden korrigiert**, wenn ein solcher angeforderter Wert nicht zulässt, dass das gesamte Browser-Popup im Arbeitsbereich für Anwendungen des Betriebssystems des Benutzers gerendert wird. Mit anderen Worten: Kein Teil des neuen Popups kann anfänglich außerhalb des Bildschirms positioniert sein.

### Rückgabewert

Wenn der Browser den neuen Browsing-Kontext erfolgreich öffnet, wird ein [`WindowProxy`](/de/docs/Glossary/WindowProxy)-Objekt zurückgegeben. Die zurückgegebene Referenz kann verwendet werden, um auf Eigenschaften und Methoden des neuen Kontexts zuzugreifen, solange dies den [Same-Origin-Richtlinien](/de/docs/Web/Security/Same-origin_policy) zugehörigen Sicherheitsanforderungen entspricht.

`null` wird zurückgegeben, wenn der Browser den neuen Browsing-Kontext nicht öffnen kann, zum Beispiel weil er durch einen Popup-Blocker des Browsers blockiert wurde.

## Beschreibung

Die `open()`-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle akzeptiert eine URL als Parameter und lädt die Ressource, die sie identifiziert, in ein neues oder bestehendes Tab oder Fenster. Der `target`-Parameter bestimmt, in welches Fenster oder Tab die Ressource geladen wird, und der `windowFeatures`-Parameter kann verwendet werden, um ein neues Popup mit minimalen UI-Merkmalen zu öffnen und dessen Größe und Position zu steuern.

Externe URLs werden nicht sofort geladen. Wenn `window.open()` zurückkehrt, enthält das Fenster immer `about:blank`. Das tatsächliche Abrufen der URL wird verzögert und beginnt, nachdem der aktuelle Skriptblock seine Ausführung beendet hat. Die Fenstererstellung und das Laden der referenzierten Ressource erfolgen asynchron.

Moderne Browser haben strenge Popup-Blocker-Richtlinien. Popup-Fenster müssen als direkte Antwort auf Benutzereingaben geöffnet werden, und ein separates Benutzeraktion-Ereignis ist für jeden `Window.open()`-Aufruf erforderlich. Dies verhindert, dass Websites Benutzer mit vielen Fenstern überschwemmen. Dies stellt jedoch ein Problem für Mehrfenster-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass:

- nicht mehr als ein neues Fenster auf einmal geöffnet wird.
- bestehende Fenster wiederverwendet werden, um verschiedene Seiten anzuzeigen.
- Anwender darauf hingewiesen werden, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

## Beispiele

### Öffnen eines neuen Tabs

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Öffnen eines Popups

Alternativ zeigt das folgende Beispiel, wie man ein Popup mit dem `popup`-Merkmal öffnet.

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
  // Das Fenster konnte nicht geöffnet werden.
  // Dies wird wahrscheinlich durch eingebaute Popup-Blocker verursacht.
  // …
}
```

## Progressive Verbesserung

In einigen Fällen ist JavaScript deaktiviert oder nicht verfügbar und `window.open()` wird nicht funktionieren. Anstatt sich ausschließlich auf das Vorhandensein dieser Funktion zu verlassen, können wir eine alternative Lösung bieten, damit die Website oder Anwendung weiterhin funktioniert.

### Alternative Möglichkeiten bieten, wenn JavaScript deaktiviert ist

Wenn die Unterstützung von JavaScript deaktiviert oder nicht vorhanden ist, erstellt der Benutzeragent entsprechend ein zweites Fenster oder rendert die referenzierte Ressource entsprechend seiner Handhabung des `target`-Attributs. Das Ziel und die Idee ist es, dem Benutzer eine Möglichkeit zu bieten (und nicht aufzuzwingen), die referenzierte Ressource zu öffnen.

#### HTML

```html
<a href="https://www.wikipedia.org/" target="OpenWikipediaWindow">
  Wikipedia, eine freie Enzyklopädie (öffnet in einem anderen, möglicherweise bereits bestehenden, Tab)
</a>
```

#### JavaScript

```js
let windowObjectReference = null; // globale Variable
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

Der obige Code löst einige Usability-Probleme im Zusammenhang mit Links, die Popups öffnen. Der Zweck von `event.preventDefault()` im Code ist es, die Standardaktion des Links abzubrechen: Wenn der Ereignis-Listener für `click` ausgeführt wird, gibt es keinen Grund, die Standardaktion des Links auszuführen. Aber wenn die JavaScript-Unterstützung auf dem Browser des Benutzers deaktiviert oder nicht vorhanden ist, wird der Ereignis-Listener für `click` ignoriert, und der Browser lädt die referenzierte Ressource in dem Zielrahmen oder Fenster, das den Namen `"WikipediaWindowName"` hat. Wenn kein Rahmen oder Fenster den Namen `"WikipediaWindowName"` hat, erstellt der Browser ein neues Fenster und nennt es `"WikipediaWindowName"`.

> [!NOTE]
> Für weitere Details über das `target`-Attribut, siehe [`<a>`](/de/docs/Web/HTML/Element/a#target) oder [`<form>`](/de/docs/Web/HTML/Element/form#target).

### Vorhandene Fenster wiederverwenden und `target="_blank"` vermeiden

Die Verwendung von `"_blank"` als Wert des `target`-Attributs erstellt mehrere neue, unbenannte Fenster auf dem Desktop des Benutzers, die nicht wiederverwendet werden können. Versuchen Sie, Ihrem `target`-Attribut einen sinnvollen Namen zu geben und diesen `target`-Attributwert auf Ihrer Seite wiederzuverwenden, sodass ein Klick auf einen anderen Link die referenzierte Ressource in einem bereits erstellten und gerenderten Fenster laden kann (somit wird der Prozess für den Benutzer beschleunigt) und somit die Begründung für die Erstellung eines sekundären Fensters im ersten Ansatz gerechtfertigt wird. Die Verwendung eines einzelnen `target`-Attributwertes und dessen Wiederverwendung in Links ist viel benutzerressourcenfreundlicher, da nur ein einziges sekundäres Fenster erstellt wird, das recycelt wird.

Hier ist ein Beispiel, bei dem ein sekundäres Fenster geöffnet und für andere Links wiederverwendet werden kann:

#### HTML

```html
<p>
  <a href="https://www.wikipedia.org/" target="SingleSecondaryWindowName">
    Wikipedia, eine freie Enzyklopädie (öffnet in einem anderen, möglicherweise bereits bestehenden, Tab)
  </a>
</p>
<p>
  <a
    href="https://support.mozilla.org/products/firefox"
    target="SingleSecondaryWindowName">
    Firefox FAQ (öffnet in einem anderen, möglicherweise bereits bestehenden, Tab)
  </a>
</p>
```

#### JavaScript

```js
let windowObjectReference = null; // globale Variable
let previousURL; /* globale Variable, die die
                    derzeitige URL im sekundären Fenster speichert */
function openRequestedSingleTab(url) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
  } else if (previousURL !== url) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
    /* ist die zu ladende Ressource anders,
       so laden wir sie im bereits geöffneten sekundären Fenster und
       bringen dieses dann vor/oder über dem übergeordneten Fenster in den Vordergrund. */
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  }
  previousURL = url;
  /* Erklärung: Wir speichern die aktuelle URL, um sie
     bei einem weiteren Aufruf dieser Funktion zu vergleichen. */
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

Wenn der neu geöffnete Browsing-Kontext nicht denselben [Ursprung](/de/docs/Glossary/Origin) teilt, kann das öffnende Skript nicht mit den Inhalten des Browsing-Kontexts interagieren (lesen oder schreiben).

```js example-bad
// Skript von example.com
const otherOriginContext = window.open("https://example.org");
// example.com und example.org haben nicht denselben Ursprung

console.log(otherOriginContext.origin);
// DOMException: Permission denied to access property "origin" on cross-origin object
```

```js example-good
// Skript von example.com
const sameOriginContext = window.open("https://example.com");
// Dieses Mal hat der neue Browsing-Kontext denselben Ursprung

console.log(sameOriginContext.origin);
// https://example.com
```

Für weitere Informationen siehe den Artikel zur [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy).

## Barrierefreiheitsanliegen

### Vermeiden Sie die Nutzung von window.open()

Es ist vorzuziehen, die Nutzung von `window.open()` zu vermeiden, aus mehreren Gründen:

- Moderne Browser bieten eine Popup-Blocker-Funktion.
- Moderne Browser bieten Tab-Browsing, und Benutzer von Tab-fähigen Browsern bevorzugen es in den meisten Situationen, neue Tabs zu öffnen statt neue Fenster.
- Benutzer können integrierte oder Erweiterungsfunktionen des Browsers nutzen, um zu entscheiden, ob ein Link in einem neuen Fenster, im selben Fenster, in einem neuen Tab, im gleichen Tab oder im Hintergrund geöffnet werden soll. Das Erzwingen einer spezifischen Art des Öffnens mittels `window.open()` wird sie verwirren und ihre Gewohnheiten missachten.
- Popups haben keine Menü-Werkzeugleiste, während neue Tabs die Benutzeroberfläche des Browserfensters nutzen; daher ziehen viele Benutzer Tab-Browsing vor, da die Benutzeroberfläche stabil bleibt.

### Verwenden Sie nicht window.open() inline in HTML

Vermeiden Sie `<a href="#" onclick="window.open(…);">` oder `<a href="javascript:window\.open(…)" …>`.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/verschieben von Links, Öffnen von Links in einem neuen Tab/Fenster, beim Lesezeichen setzen oder wenn JavaScript lädt, Fehler aufweist oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien, wie Bildschirmlesegeräte.

Falls erforderlich, verwenden Sie ein [`<button>`](/de/docs/Web/HTML/Element/button)-Element. Generell _sollten Sie nur einen Link für die Navigation zu einer echten URL verwenden_.

### Identifizieren Sie stets Links, die zu einem zweiten Fenster führen

Identifizieren Sie Links, die neue Fenster öffnen werden, auf eine Weise, die die Navigation für Benutzer erleichtert.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (öffnet in einem neuen Tab)
</a>
```

Der Zweck besteht darin, Benutzer über Kontextänderungen zu informieren, um Verwirrung auf Seiten des Benutzers zu minimieren: das Wechseln des aktuellen Fensters oder das Aufpoppen neuer Fenster kann für Benutzer sehr desorientierend sein (im Falle eines Popups bietet keine Werkzeugleiste einen "Zurück"-Button, um zum vorherigen Fenster zurückzukehren).

Wenn extreme Änderungen im Kontext explizit identifiziert werden, bevor sie erfolgen, können die Benutzer selbst bestimmen, ob sie fortfahren möchten, oder sich auf die Änderung vorbereiten: nicht nur, dass sie nicht verwirrt oder desorientiert werden, sondern erfahrenere Benutzer können besser entscheiden, wie sie solche Links öffnen möchten (in einem neuen Fenster oder nicht, im selben Fenster, in einem neuen Tab oder nicht, im "Hintergrund" oder nicht).

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verstehen von WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur, wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern vorab ankündigen, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Dokumentation des `target`-Attributes:
  - [`<a>`](/de/docs/Web/HTML/Element/a#target)
  - [`<form>`](/de/docs/Web/HTML/Element/form#target)
- [`window.close()`](/de/docs/Web/API/Window/close)
- [`window.closed`](/de/docs/Web/API/Window/closed)
- [`window.focus()`](/de/docs/Web/API/Window/focus)
- [`window.opener`](/de/docs/Web/API/Window/opener)
- [`rel="opener"`](/de/docs/Web/HTML/Attributes/rel#opener) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel#noopener)
- [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy)
