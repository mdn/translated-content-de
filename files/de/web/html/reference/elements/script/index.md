---
title: "`<script>`-HTML-Skriptelement"
short-title: <script>
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Das **`<script>`**-Element von [HTML](/de/docs/Web/HTML) wird verwendet, um ausführbaren Code oder Daten einzubetten. Typischerweise wird damit JavaScript-Code eingebettet oder referenziert. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, etwa mit GLSL, der Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API), sowie mit {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`
  - : Bei klassischen Skripten wird das Skript, wenn das Attribut `async` vorhanden ist, parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist.

    Bei [Modulskripten](/de/docs/Web/JavaScript/Guide/Modules) werden, wenn das Attribut `async` vorhanden ist, die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf bei klassischen Skripten nicht verwendet werden, wenn das Attribut `src` fehlt (also bei Inline-Skripten), da es in diesem Fall keine Wirkung hätte.

    Mit diesem Attribut lässt sich **parserblockierendes JavaScript** vermeiden, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem Attribut `defer` angegeben wird, verhält sich das Element so, als wäre nur das Attribut `async` angegeben.

    Dies ist ein boolesches Attribut: Ist es bei einem Element vorhanden, entspricht das dem Wert „wahr“; fehlt es, entspricht das dem Wert „falsch“.

    Hinweise zur Browser-Unterstützung finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität). Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt an, dass der Browser zusammen mit der Anfrage für die Skriptressource einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Auf Serverseite wird dadurch veranlasst, in der Antwort einen {{httpheader("Attribution-Reporting-Register-Source")}}- beziehungsweise {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header zu senden, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) beziehungsweise einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header gesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der Option `attributionReporting` gesendet wird. Diese Option kann entweder direkt beim Aufruf von `fetch()` oder in einem [`Request`](/de/docs/Web/API/Request)-Objekt gesetzt werden, das an `fetch()` übergeben wird. Eine weitere Möglichkeit ist, eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfrage zu senden, bei der [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt aufgerufen wurde.

    Für dieses Attribut gibt es zwei mögliche Formen:
    - Boolesch, also nur der Name `attributionsrc`. Dadurch wird festgelegt, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das Attribut `src` verweist. Das ist geeignet, wenn Sie die Registrierung der Attributionsquelle oder des Attributionstriggers auf demselben Server verarbeiten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional; wenn sie fehlt, wird eine leere Zeichenfolge verwendet.
    - Ein Wert mit einer oder mehreren URLs, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich, wenn sich die angeforderte Ressource nicht auf einem Server befindet, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server verarbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Bei der Ressourcenanfrage wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Server der Ressource an die in `attributionSrc` angegebenen URLs gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- beziehungsweise {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Wenn Sie mehrere URLs angeben, können mehrere Attributionsquellen für dieselbe Funktion registriert werden. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten und für die unterschiedliche Berichte mit unterschiedlichen Daten erstellt werden.

    Weitere Einzelheiten finden Sie unter [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`
  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Vorgänge blockiert werden sollen, bis das Skript ausgeführt wurde. Die zu blockierenden Vorgänge müssen als durch Leerzeichen getrennte Liste von Blocking-Tokens angegeben werden. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können das Rendern blockieren. Skripte blockieren das Rendern nicht standardmäßig. Wenn ein `script`-Element weder `type="module"` noch `async` oder `defer` enthält, blockiert es das _Parsen_, nicht das _Rendern_. Wird ein solches `script`-Element dynamisch per Skript hinzugefügt, müssen Sie `blocking = "render"` setzen, damit es das Rendern blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gewöhnliche `script`-Elemente übermitteln für Skripte, die die üblichen {{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen, nur minimale Informationen an [`window.onerror`](/de/docs/Web/API/Window/error_event). Verwenden Sie dieses Attribut, um die Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien nutzen. Eine ausführlichere Erklärung der gültigen Argumente finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).
- `defer`
  - : Dieses boolesche Attribut signalisiert dem Browser, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des Ereignisses [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgeführt werden soll.

    Skripte mit dem Attribut `defer` verhindern, dass das Ereignis `DOMContentLoaded` ausgelöst wird, bevor das Skript geladen und vollständig ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das Attribut `src` fehlt (also bei Inline-Skripten), da es in diesem Fall keine Wirkung hätte.
    >
    > Das Attribut `defer` hat keine Wirkung auf [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) – deren Ausführung wird standardmäßig aufgeschoben.

    Skripte mit dem Attribut `defer` werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Mit diesem Attribut lässt sich **parserblockierendes JavaScript** vermeiden, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem Attribut `async` angegeben wird, verhält sich das Element so, als wäre nur das Attribut `async` angegeben.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts. Zulässige Werte sind:
    - `high`
      - : Das externe Skript wird im Vergleich zu anderen externen Skripten mit hoher Priorität abgerufen.
    - `low`
      - : Das externe Skript wird im Vergleich zu anderen externen Skripten mit niedriger Priorität abgerufen.
    - `auto`
      - : Es wird keine bevorzugte Abrufpriorität festgelegt.
        Dies ist die Standardeinstellung.
        Sie wird verwendet, wenn kein oder ein ungültiger Wert festgelegt ist.
- [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity)
  - : Dieses Attribut enthält einen oder mehrere {{Glossary("hash_function", "Hashes")}} des Skripts. Damit wird sichergestellt, dass der Inhalt des Skripts den Erwartungen der Entwickler entspricht und nicht bei einem [Angriff auf die Lieferkette](/de/docs/Web/Security/Attacks/Supply_chain_attacks) durch ein schädliches Skript ersetzt wurde. Das Attribut darf nicht angegeben werden, wenn das Attribut `src` fehlt. Siehe auch [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut gibt an, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll. Damit können älteren Browsern, die modularen JavaScript-Code nicht unterstützen, Ersatzskripte bereitgestellt werden.
- `nonce`
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} (einmalig verwendete Zahl), die Skripte im Rahmen einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) erlaubt. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert erzeugen. Der Wert darf nicht erraten werden können, da sich die Richtlinie einer Ressource sonst leicht umgehen ließe.
- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder der vom Skript abgerufenen Ressourcen gesendet wird:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origins")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Origin der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), ihren {{Glossary("host", "Host")}} und ihren {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Bei Anfragen an andere Origins ist der gesendete Referrer auf Schema, Host und Port beschränkt. Bei Navigationen innerhalb desselben Origins wird weiterhin der Pfad übermittelt.
    - `same-origin`: Bei Anfragen innerhalb {{Glossary("Same-origin_policy", "desselben Origins")}} wird ein Referrer gesendet; Cross-Origin-Anfragen enthalten dagegen keine Referrer-Informationen.
    - `strict-origin`: Der Origin des Dokuments wird nur dann als Referrer gesendet, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS), nicht aber an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standardwert): Bei einer Anfrage innerhalb desselben Origins wird die vollständige URL gesendet. Bleibt die Sicherheitsstufe des Protokolls gleich (HTTPS→HTTPS), wird nur der Origin gesendet; an ein weniger sicheres Ziel (HTTPS→HTTP) wird kein Header gesendet.
    - `unsafe-url`: Der Referrer enthält den Origin _und_ den Pfad, jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username). **Dieser Wert ist unsicher**, da er Origins und Pfade von TLS-geschützten Ressourcen an unsichere Origins weitergibt.

    > [!NOTE]
    > Eine leere Zeichenfolge (`""`) ist sowohl der Standardwert als auch der Ersatzwert, wenn `referrerpolicy` nicht unterstützt wird. Wird `referrerpolicy` nicht ausdrücklich auf dem `<script>`-Element angegeben, übernimmt es eine übergeordnete Referrer-Richtlinie, etwa die des gesamten Dokuments oder der Domain. Ist keine übergeordnete Richtlinie vorhanden, wird die leere Zeichenfolge wie `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt den URI eines externen Skripts an. Es kann als Alternative dazu verwendet werden, ein Skript direkt in ein Dokument einzubetten.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut gibt den Typ des Skripts an.
    Sein Wert ist einer der folgenden:
    - **Attribut nicht gesetzt (Standardwert), eine leere Zeichenfolge oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass es sich um ein „klassisches Skript“ mit JavaScript-Code handelt.
        Wenn das Skript JavaScript-Code enthält, wird empfohlen, das Attribut wegzulassen, statt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind in der [IANA-Spezifikation für Medientypen aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Inhalt des Elements eine Import-Map enthält.
        Die Import-Map ist ein JSON-Objekt, mit dem Entwickler steuern können, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird aufgeschoben.
        Die Attribute `charset` und `defer` haben keine Wirkung.
        Informationen zur Verwendung von `module` finden Sie in unserem [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
        Anders als klassische Skripte erfordern Modulskripte beim Abruf von anderen Origins die Verwendung des CORS-Protokolls.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
        Spekulationsregeln liegen als JSON-Objekt vor und bestimmen, welche Ressourcen der Browser vorab abrufen oder rendern soll. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
        Entwickler müssen zur Kennzeichnung von Datenblöcken einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist.
        Alle anderen Attribute werden ignoriert, einschließlich des Attributs `src`.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Falls vorhanden, muss sein Wert ohne Berücksichtigung der Groß- und Kleinschreibung gemäß {{Glossary("ASCII", "ASCII")}} mit `utf-8` übereinstimmen. Das Attribut `charset` muss nicht angegeben werden, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichenkodierung vom Dokument übernimmt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das Attribut `type` gibt dieses Attribut die verwendete Skriptsprache an. Im Gegensatz zu `type` wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das Attribut `type` verwendet werden.

## Hinweise

Skripte ohne die Attribute [`async`](#async), [`defer`](#defer) oder `type="module"` sowie Inline-Skripte ohne das Attribut `type="module"` werden unmittelbar abgerufen und ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem MIME-Typ `text/javascript` bereitgestellt werden. Browser sind jedoch tolerant und blockieren es nur, wenn es mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit dem `<script>`-Element ein externes Skript importieren:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie Sie ein Inline-Skript innerhalb des `<script>`-Elements platzieren:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Bei Skripten, die mit dem Attribut `async` geladen werden, wird die Seite während des Abrufens nicht blockiert.
Sobald der Download abgeschlossen ist, wird das Skript jedoch ausgeführt, wodurch das Rendern der Seite blockiert wird. Das bedeutet, dass der übrige Inhalt der Webseite erst verarbeitet und angezeigt werden kann, wenn die Ausführung des Skripts abgeschlossen ist.
Es gibt keine Garantie dafür, dass die Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Verwenden Sie `async` am besten, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und nicht von anderen Skripten auf der Seite abhängen.

Skripte mit dem Attribut `defer` werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen wurde. Das ist nützlich, wenn Ihre Skripte voraussetzen, dass das DOM vorhanden ist, etwa weil sie ein oder mehrere Elemente auf der Seite verändern.

Die folgende Grafik veranschaulicht die verschiedenen Methoden zum Laden von Skripten und deren Auswirkungen auf Ihre Seite:

![Funktionsweise der drei Methoden zum Laden von Skripten: Standardmäßig wird das Parsen blockiert, während JavaScript abgerufen und ausgeführt wird. Bei async wird das Parsen nur für die Ausführung unterbrochen. Bei defer wird das Parsen nicht unterbrochen; die Ausführung beginnt erst, nachdem alles andere geparst wurde.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg). Es wurde unter den Bedingungen der [CC-BY-4.0-Lizenz](https://creativecommons.org/licenses/by/4.0/) kopiert und auf eine verkleinerte Version zugeschnitten._

Angenommen, Sie haben die folgenden Skriptelemente:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden. Werden die beiden anderen Skripte zuerst ausgeführt, verursachen alle darin enthaltenen Funktionen, die von `jquery` abhängen, einen Fehler, weil `jquery` zu diesem Zeitpunkt noch nicht definiert ist.

`async` sollte verwendet werden, wenn Sie mehrere Hintergrundskripte laden möchten, die möglichst schnell verfügbar sein sollen.
Beispielsweise müssen Sie möglicherweise Dateien mit Spieldaten laden, die erst beim eigentlichen Spielbeginn benötigt werden. Bis dahin möchten Sie aber bereits die Spieleinführung, Titel und Lobby anzeigen, ohne dass das Laden der Skripte dies blockiert.

Skripte, die mit dem Attribut `defer` geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen, sobald das jeweilige Skript und der Seiteninhalt heruntergeladen wurden:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und `script2.js` vor `script3.js`.
Die Skripte werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen wurde. Das ist nützlich, wenn Ihre Skripte voraussetzen, dass das DOM vorhanden ist, etwa weil sie ein oder mehrere Elemente auf der Seite verändern.

Zusammengefasst:

- Sowohl `async` als auch `defer` weisen den Browser an, Skripte in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) geladen wird. Dadurch wird das Laden der Seite während des Abrufs nicht blockiert.
- Skripte mit dem Attribut `async` werden ausgeführt, sobald ihr Download abgeschlossen ist.
  Das blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit dem Attribut `defer` werden in der Reihenfolge geladen, in der sie erscheinen, und erst ausgeführt, wenn alles vollständig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte warten müssen, bis das Parsen abgeschlossen ist, und von anderen Skripten und/oder dem DOM abhängen, laden Sie sie mit `defer`. Ordnen Sie die entsprechenden `<script>`-Elemente in der Reihenfolge an, in der der Browser sie ausführen soll.

### Ersatzlösung für Module

Browser, die den Wert `module` für das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) unterstützen, ignorieren Skripte mit dem Attribut `nomodule`. So können Sie Modulskripte verwenden und zugleich mit `nomodule` gekennzeichnete Ersatzskripte für Browser bereitstellen, die Module nicht unterstützen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Wenn Sie Module in Skripten importieren, ohne die Funktion [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) zu verwenden, muss jedes Modul mit einem Modulspezifizierer importiert werden, der entweder eine absolute oder eine relative URL ist.
Im folgenden Beispiel ist der erste Modulspezifizierer eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Mit einer Import-Map können Sie eine Zuordnung bereitstellen, die bei einer Übereinstimmung den Text im Modulspezifizierer ersetzt.
Die folgende Import-Map definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifizierer verwendet werden können.

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

Dadurch können wir Module anhand von Namen im Modulspezifizierer importieren, statt absolute oder relative URLs zu verwenden.

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Weitere Beispiele für die Möglichkeiten von Import-Maps finden Sie im Abschnitt [Module mithilfe von Import-Maps importieren](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#importing_modules_using_import_maps) des Leitfadens zur Verwendung von Modulen im Web.

### Daten in HTML einbetten

Sie können das `<script>`-Element auch verwenden, um bei serverseitigem Rendering Daten in HTML einzubetten. Geben Sie dazu im Attribut `type` einen gültigen MIME-Typ an, der kein JavaScript-MIME-Typ ist.

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

### Rendern blockieren, bis ein Skript abgerufen und ausgeführt wurde

Sie können das Token `render` in das Attribut `blocking` aufnehmen.
Dadurch wird das Rendern der Seite blockiert, bis das Skript abgerufen und ausgeführt wurde. Im folgenden Beispiel blockieren wir das Rendern für ein asynchrones Skript. So blockiert das Skript nicht das Parsen, wird aber garantiert ausgewertet, bevor das Rendern beginnt.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Textinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Dynamisches Skript, etwa <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Nicht zulässig; sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Textinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
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
- [Flavio Copes’ Artikel über das effiziente Laden von JavaScript und die Unterschiede zwischen `async` und `defer`](https://thevalleyofcode.com/javascript-async-defer/)
- [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
