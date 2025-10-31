---
title: "<script>: Das Skript-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das **`<script>`**- [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie zum Beispiel der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`
  - : Bei klassischen Skripten, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen geladen und ausgeführt, sobald es verfügbar ist.

    Bei [Modul-Skripten](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen geladen und ausgeführt, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), da es in diesem Fall keine Wirkung hätte.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und ausführen müsste, bevor das Parsen fortgesetzt werden kann. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut festgelegt ist, verhält sich das Element so, als wäre nur das `async`-Attribut festgelegt.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs auf einem Element steht für den Wert „wahr“, und das Fehlen des Attributs steht für den Wert „falsch“.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browser-Unterstützung. Siehe auch [Async-Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skript-Ressourcenanfrage senden soll. Serverseitig wird dies genutzt, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers als Antwort auszulösen, um eine JavaScript-basierte [Attrubutionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) entsprechend zu registrieren. Welches Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting` Option enthält (entweder direkt beim `fetch()`-Aufruf gesetzt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen gesendet wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolesch, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server wie das `src`-Attribut senden möchten. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server handhaben. Bei der Registrierung eines Attribution-Triggers ist diese Eigenschaft optional, und ein leerer String-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcengeanstierung auftritt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) gesendet, zusätzlich zur Ursprungsressource. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header entsprechend der Registrierung antworten.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem sie verschiedene Berichte auf unterschiedlichen Daten erzeugen.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Vorgänge blockiert werden sollten, bis das Skript ausgeführt wurde. Die zu blockierenden Vorgänge müssen eine durch Leerzeichen getrennte Liste von Blockiertokens sein. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können möglicherweise das Rendern blockieren. Skripte blockieren standardmäßig nicht das Rendern; wenn ein `script`-Element kein `type="module"`, `async`, oder `defer` enthält, blockiert es _das Parsen_, nicht _das Rendern_. Wenn ein solches `script`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie `blocking = "render"` setzen, damit es das Rendern blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übermitteln minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine ausführliche Erklärung der gültigen Argumente.
- `defer`
  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet ist.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), da es in diesem Fall keine Wirkung hätte.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig aufgeschoben.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und ausführen müsste, bevor das Parsen fortgesetzt werden kann. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut festgelegt ist, verhält sich das Element so, als wäre nur das `async`-Attribut festgelegt.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten abrufen.
    - `low`
      - : Das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent zur Überprüfung verwenden kann, dass eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subressourcen-Integrität](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut zeigt an, dass das Skript nicht in Browsern ausgeführt werden soll, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — in der Praxis kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die keinen modularen JavaScript-Code unterstützen.
- `nonce`
  - : Eine kryptographische Nonce (Nummer, die nur einmal verwendet wird), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zu ermöglichen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da es ansonsten trivial ist, die Richtlinie einer Ressource zu umgehen.
- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von durch das Skript abgerufenen Ressourcen gesendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprung")}}en ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen am selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartiger Ursprung")}} gesendet, sowohl wie Cross-Origin-Anfragen, welche keine Referrer-Informationen enthalten.
    - `strict-origin`: Sendet den Ursprung des Dokuments als Referrer nur, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL, wenn eine gleichartige Anfrage ausgeführt wird, sendet nur den Ursprung, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (jedoch nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password), oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

    > [!NOTE]
    > Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine höherstufige Referrer-Richtlinie, d.h. eine, die auf das gesamte Dokument oder die Domäne angewendet wird. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere String als gleichwertig mit `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zur direkten Einbettung eines Skriptes innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:
    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
      - : Gibt an, dass das Skript ein „klassisches Skript“ ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn sich das Skript auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben.
        JavaScript MIME-Typen sind in der [IANA Media Types Specification](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) aufgelistet.
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu kontrollieren, wie der Browser Modulbezeichner bei der Einfuhr von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung der Skriptinhalte wird aufgeschoben.
        Die Attribute `charset` und `defer` haben keine Wirkung.
        Für Informationen zur Verwendung von `module`, siehe unseren [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für die Fetching von Cross-Origin.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln sind ein JSON-Objekt, das festlegt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}}- Groß- und Kleinschreibung-unabhängige Übereinstimmung für `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichenkodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Anders als das `type`-Attribut jedoch wurden die möglichen Werte dieses Attributs nie standardisiert. Das `type`-Attribut sollte stattdessen verwendet werden.

## Anmerkungen

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"`-Attribute sowie Inline-Skripte ohne das `type="module"`-Attribut werden sofort abgerufen und ausgeführt, bevor der Browser mit der Analyse der Seite fortfährt.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein (externes) Skript mit dem `<script>`-Element importiert wird:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie ein (internes) Skript im `<script>`-Element gesetzt wird:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Seite am Rendern hindert. Das bedeutet, dass der Rest des Inhalts auf der Webseite kann nicht verarbeitet und dem Benutzer angezeigt werden, bis das Skript fertig ist.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, laden in der Reihenfolge, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z.B. sie modifizieren ein oder mehrere Elemente auf der Seite).

Das folgende Bild zeigt eine visuelle Darstellung der verschiedenen Skriptladeverfahren und ihrer Auswirkungen auf Ihre Seite:

![Wie die drei Skriptlädemethoden funktionieren: Standard blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Mit async wird das Parsen nur für die Ausführung pausiert. Mit defer wird das Parsen nicht pausiert, aber die Ausführung erfolgt erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) Lizenzbedingungen._

Wenn Sie beispielsweise die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` könnte vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, werden alle Funktionen in diesen Skripten, die sich auf `jquery` verlassen, einen Fehler erzeugen, weil `jquery` zum Zeitpunkt, an dem das Skript ausgeführt wird, nicht definiert sein wird.

`async` sollte verwendet werden, wenn Sie eine Reihe von Hintergrundskripten laden müssen und Sie einfach möchten, dass sie so schnell wie möglich bereitgestellt werden.
Zum Beispiel, vielleicht müssen Sie einige Spieldateien laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber im Moment möchten Sie einfach nur mit dem Anzeigen des Spieleintros, der Titel und der Lobby weitermachen, ohne dass sie durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge, wie sie in der Seite erscheinen, geladen und ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bis der Seiteninhalt vollständig geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z.B. sie modifizieren ein oder mehrere Elemente auf der Seite).

Zusammengefasst:

- `async` und `defer` geben dem Browser beide die Anweisung, das/die Skript(e) in einem eigenen Thread herunterzuladen, während der Rest der Seite (das DOM, etc.) heruntergeladen wird, sodass das Laden der Seite nicht während des Abrufvorgangs blockiert wird.
- Skripte mit einem `async` Attribut werden sofort nach Abschluss des Downloads ausgeführt.
  Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer` Attribut werden in der Reihenfolge geladen, in der sie sind, und werden erst ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten müssen und von anderen Skripten und/oder dem DOM abhängen, laden Sie sie mit `defer` und setzen Sie deren entsprechende `<script>`-Elemente in die Reihenfolge, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Dies ermöglicht es Ihnen, Modulskripte zu verwenden, während Sie `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie nicht die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Funktion verwenden, muss jedes Modul mit einem Modulbezeichner importiert werden, der entweder eine absolute oder relative URL ist.
Im folgenden Beispiel ist der erste Modulbezeichner eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importkarte erlaubt es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulbezeichner ersetzen kann.
Die folgende Importkarte definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulbezeichner verwendet werden können.

```html
<script type="importmap">
  {
    "imports": {
      "circle": "https://example.com/shapes/circle.js",
      "square": "./shapes/square.js"
    }
  }
</script>
```

Dies ermöglicht es uns, Module mit Namen im Modulbezeichner zu importieren (anstelle von absoluten oder relativen URLs).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importkarten tun können, siehe den Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

### Einbetten von Daten in HTML

Sie können das `<script>`-Element auch verwenden, um Daten in HTML mit serverseitigem Rendering einzubetten, indem Sie im `type`-Attribut einen gültigen Nicht-JavaScript-MIME-Typ angeben.

```html
<!-- Generated by the server -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Maria Cruz",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- Static -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("User information: %o", userInfo);
</script>
```

### Blockieren des Renderns, bis ein Skript abgerufen und ausgeführt wird

Sie können das `render` Token im `blocking`-Attribut einfügen;
das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wurde. Im folgenden Beispiel blockieren wir das Rendern eines asynchronen Skripts,
damit das Skript das Parsen nicht blockiert, aber garantiert ausgewertet wird, bevor das Rendern beginnt.

```html
<script blocking="render" async src="async-script.js"></script>
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fluss-Inhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasen-Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalte</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasen-Inhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Flavio Copes Artikel über das effiziente Laden von JavaScript und die Erklärung der Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
