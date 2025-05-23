---
title: "<script>: Das Script-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{HTMLSidebar}}

Das **`<script>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es verwendet, um JavaScript-Code einzubetten oder zu referenzieren. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie zum Beispiel der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`

  - : Bei klassischen Skripten, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen geladen und so schnell wie möglich ausgewertet.

    Bei [Module-Skripten](/de/docs/Web/JavaScript/Guide/Modules) wird, wenn das `async`-Attribut vorhanden ist, das Skript und alle Abhängigkeiten parallel zum Parsen geladen und so schnell wie möglich ausgewertet.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte) bei klassischen Skripten. In diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten muss, bevor er mit dem Parsen fortfahren kann. In diesem Fall hat `defer` eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element so, als ob nur das `async`-Attribut angegeben wäre.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs auf einem Element stellt den Wert wahr dar, und das Fehlen des Attributs stellt den Wert falsch dar.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browser-Unterstützung. Siehe auch [Async scripts for asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Quelle für Zuordnung](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Trigger für Zuordnung](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des Headers `Attribution-Reporting-Eligible` ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Zuordnungsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt im `fetch()`-Aufruf gesetzt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolesch, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Zuordnungsquelle oder des Triggers auf demselben Server handhaben. Beim Registrieren eines Zuordnungstriggers ist diese Eigenschaft optional, und es wird ein leerer Zeichenfolgenwert verwendet, wenn sie weggelassen wird.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Zuordnungsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header entsprechend antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass auf derselben Funktion mehrere Zuordnungsquellen registriert werden können. Sie könnten beispielsweise unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten und die unterschiedliche Berichte zu unterschiedlichen Daten erstellen.

    Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungstoken sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übermitteln minimale Informationen an [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um die Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS settings attributes](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine genauere Erklärung der gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut wird gesetzt, um dem Browser mitzuteilen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer`-Attribut hat keinen Effekt auf [Module-Skripte](/de/docs/Web/JavaScript/Guide/Modules) — sie sind standardmäßig defer.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten muss, bevor er mit dem Parsen fortfahren kann. In diesem Fall hat `async` eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, verhält sich das Element so, als ob nur das `async`-Attribut angegeben wäre.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts.
    Zulässige Werte:

    - `high`
      - : Das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten laden.
    - `low`
      - : Das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten laden.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Er wird verwendet, wenn kein oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript nicht in Browsern ausgeführt werden soll, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — tatsächlich kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die modulare JavaScript-Codes nicht unterstützen.
- `nonce`
  - : Ein kryptografischer Neuheitswert (einmalig verwendete Zahl), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zu erlauben. Der Server muss jedes Mal, wenn er eine Richtlinie überträgt, einen eindeutigen Neuheitswert generieren. Es ist entscheidend, einen Neuheitswert bereitzustellen, der nicht erraten werden kann, da das Umgehen einer Ressourcenrichtlinie ansonsten trivial ist.
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder beim Abrufen von Ressourcen durch das Skript gesendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Herkünfte")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf die Herkunft der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Herkünfte gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen in derselben Herkunft enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartige Herkunft")}} gesendet, aber abgesehen von herkunftsübergreifende Anfragen wird keine Referrer-Information enthalten.
    - `strict-origin`: Nur die Herkunft des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP) senden.
    - `strict-origin-when-cross-origin` (Standard): Bei einer Anfrage aus derselben Herkunft eine vollständige URL senden, nur die Herkunft senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP) senden.
    - `unsafe-url`: Der Referrer enthält die Herkunft _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Herkünfte und Pfade von TLS-geschützten Ressourcen zu unsicheren Herkünfte leakt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine übergeordnete Referrerrichtlinie, z.B. eine, die für das gesamte Dokument oder die Domain festgelegt wurde. Wenn keine übergeordnete Richtlinie verfügbar ist, wird der leere String als gleichbedeutend mit `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann anstelle des direkten Einbettens eines Skripts innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)

  - : Dieses Attribut gibt den Typ des repräsentierten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript sich auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben.
        JavaScript MIME-Typen sind in der [IANA media types specification](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) aufgelistet.
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert zeigt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifier auflöst, wenn er [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert.
    - `module`
      - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung der Skriptinhalte wird verzögert.
        Die Attribute `charset` und `defer` haben keinen Effekt.
        Informationen zur Verwendung von `module` finden Sie in unserem [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
        Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für das herkunftsübergreifende Abrufen.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert zeigt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorkonfiguriert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert einer {{Glossary("ASCII", "ASCII")}} Groß- und Kleinschreibung übereinstimmender Wert für `utf-8` sein. Es ist nicht erforderlich, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden jedoch die möglichen Werte dieses Attributs nie standardisiert. Das `type`-Attribut sollte stattdessen verwendet werden.

## Anmerkungen

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"`-Attribute sowie Inline-Skripte ohne das `type="module"`-Attribut werden abgerufen und sofort ausgeführt, bevor der Browser weiterhin die Seite parst.

Das Skript sollte mit dem MIME-Typ `text/javascript` bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert ist, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein (externes) Skript mit dem `<script>`-Element importiert wird:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie ein (Inline-)Skript innerhalb des `<script>`-Elements eingefügt wird:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Seite am Rendern hindert. Dies bedeutet, dass der Rest des Inhalts auf der Webseite bis zur Ausführung des Skripts nicht verarbeitet oder dem Nutzer angezeigt wird.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und von keinem anderen Skript auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte darauf angewiesen sind, dass das DOM vorhanden ist (z. B. ändern sie ein oder mehrere Elemente auf der Seite).

Hier ist eine visuelle Darstellung der verschiedenen Skript-Lademethoden und was das für Ihre Seite bedeutet:

![Wie die drei Skript-Lademethoden funktionieren: Standard hat ein blockiertes Parsen, während JavaScript abgerufen und ausgeführt wird. Bei async wird das Parsen nur für die Ausführung unterbrochen. Bei defer wird das Parsen nicht pausiert, aber die Ausführung erfolgt erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und gekürzt zu einer reduzierten Version, unter den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht darauf verlassen, in welcher Reihenfolge die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und in diesem Fall führt jede Funktion in diesen Skripten, die von `jquery` abhängt, zu einem Fehler, weil `jquery` zum Zeitpunkt der Skriptausführung nicht definiert ist.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte laden möchten, und Sie sie einfach so schnell wie möglich an Ort und Stelle haben möchten.
Zum Beispiel haben Sie möglicherweise einige Spieldateien, die geladen werden sollen, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber für jetzt möchten Sie einfach mit der Darstellung des vorhandenen Spielintros, Titeln und Lobbys fortfahren, ohne dass Skript-Ladungen sie blockieren.

Skripte, die mit dem `defer`-Attribut (siehe unten) geladen werden, werden in der Reihenfolge ausgeführt, in der sie auf der Seite stehen, und sie werden so schnell ausgeführt, wie das Skript und der Content heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte darauf angewiesen sind, dass das DOM vorhanden ist (z. B. ändern sie ein oder mehrere Elemente auf der Seite).

Zusammenfassend:

- `async` und `defer` weisen den Browser beide an, das oder die Skripte in einem separaten Thread zu laden, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass das Seitenladen während des Abrufvorgangs nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie vorhanden sind, und werden nur ausgeführt, sobald alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten und von anderen Skripten und/oder dem DOM abhängen, laden Sie sie mit `defer` und platzieren deren entsprechende `<script>`-Elemente in der Reihenfolge, in der Sie möchten, dass der Browser sie ausführt.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Dadurch können Sie Modulscripte verwenden und gleichzeitig mit `nomodule`-gekennzeichnete Fallback-Skripte für nicht unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Funktion nicht verwenden, muss jedes Modul mit einem Modulspezifikator importiert werden, der entweder eine absolute oder relative URL ist.
In dem unten gezeigten Beispiel ist der erste Modulspezifikator eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importkarte ermöglicht es, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifikator ersetzen kann.
Die unten stehende Importkarte definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

Dies ermöglicht das Importieren von Modulen mit Namen im Modulspezifikator (anstatt mit absoluten oder relativen URLs).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importkarten tun können, siehe den Abschnitt [Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden für JavaScript-Module.

### Einbetten von Daten in HTML

Sie können auch das `<script>`-Element verwenden, um Daten in HTML mit serverseitigem Rendering einzubetten, indem Sie einen gültigen Nicht-JavaScript-MIME-Typ im `type`-Attribut angeben.

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

### Rendern blockieren, bis ein Skript abgerufen und ausgeführt wird

Sie können ein `render`-Token im `blocking`-Attribut einfügen;
das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im folgenden Beispiel blockieren wir das Rendern auf einem asynchronen Skript,
damit das Skript das Parsen nicht blockiert, aber garantiert vor dem Rendern ausgewertet wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadateninhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
- [Artikel von Flavio Copes über das effiziente Laden von JavaScript und Erklärungen zu den Unterschieden zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
