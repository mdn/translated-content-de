---
title: "<script>: Das Skript-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: fef6630e9b90f9794d3194ea8389ff70599c6884
---

Das **`<script>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ausführbaren Code oder Daten einzubetten; dies wird typischerweise verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`
  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist.

    Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), da es in diesem Fall keine Wirkung hätte.

    Dieses Attribut ermöglicht die Beseitigung von **parserblockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async`-Attribut angegeben ist.

    Es handelt sich um ein boolesches Attribut: Die Anwesenheit eines booleschen Attributs an einem Element repräsentiert den Wert `true`, und das Fehlen des Attributs repräsentiert den Wert `false`.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Async-Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass der Browser eine {{httpheader("Attribution-Reporting-Eligible")}}-Header-Anfrage zusammen mit der Skriptressourcenanfrage senden soll. Serverseitig wird dies verwendet, um das Senden einer {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header-Anfrage in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der `attributionReporting`-Option gesendet wird (entweder direkt im `fetch()`-Aufruf oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolesch, d.h. nur der Name `attributionsrc`. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server wie das `src`-Attribut gesendet werden soll. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server bearbeiten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und wenn sie ausgelassen wird, wird ein leerer Stringwert verwendet.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ressourcenursprung gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Möglicherweise haben Sie beispielsweise verschiedene Kampagnen, deren Erfolg Sie messen möchten, die das Erstellen unterschiedlicher Berichte auf verschiedenen Daten beinhalten.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für mehr Details.

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen blockiert werden sollen, bis das Skript ausgeführt wurde. Die zu blockierenden Operationen müssen durch eine Liste von Blocking-Tokens, getrennt durch Leerzeichen, angegeben werden. Derzeit gibt es nur ein Token:
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können möglicherweise das Rendering blockieren. Skripte sind standardmäßig nicht renderblockierend; wenn ein `script`-Element nicht `type="module"`, `async` oder `defer` enthält, blockiert es _Parsing_, nicht _Rendering_. Wenn ein solches `script`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie `blocking = "render"` setzen, damit es das Rendering blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übermitteln minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die Standard-{{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um das Fehlerprotokoll für Sites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine ausführlichere Erklärung der gültigen Argumente.
- `defer`
  - : Dieses boolesche Attribut zeigt an, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), da es in diesem Fall keine Wirkung hätte.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) – sie werden standardmäßig verzögert ausgeführt.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parserblockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async`-Attribut angegeben ist.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts. Zulässige Werte:
    - `high`
      - : Ruft das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten ab.
    - `low`
      - : Ruft das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten ab.
    - `auto`
      - : Legt keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity)
  - : Dieses Attribut enthält einen oder mehrere {{Glossary("hash_function", "Hashes")}} des Skripts. Es wird verwendet, um sicherzustellen, dass der Inhalt des Skripts dem entspricht, was der Entwickler erwartet, und nicht durch ein bösartiges Skript in einem [Lieferkettenangriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks) ersetzt wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe auch [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll – effektiv kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die kein modulares JavaScript unterstützen.
- `nonce`
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} (Zahl, die nur einmal verwendet wird) zur Authentifizierung von Skripten in einer [script-src Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src). Der Server muss für jede Richtlinie, die er überträgt, einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie der Ressource ansonsten trivial ist.
- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder bei vom Skript abgerufenen Ressourcen gesendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "desselben Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrerinformationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), sendet es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL beim Ausführen einer Same-Origin-Anfrage, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält sowohl den Ursprung _als auch_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

    > [!NOTE]
    > Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, falls `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, wird es eine auf höherer Ebene festgelegte Referrer-Richtlinie übernehmen, d.h. eine für das gesamte Dokument oder die Domäne festgelegte Richtlinie. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere String als gleichwertig mit `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zur Einbettung eines Skripts direkt in einem Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:
    - **Attribut ist nicht gesetzt (Standardwert), ein leerer String oder ein JavaScript MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript JavaScript-Code referenziert, anstatt einen MIME-Typ zu spezifizieren.
        JavaScript-MIME-Typen sind [in der IANA-Mediatype-Spezifikation aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert zeigt an, dass der Körper des Elements eine Importmap enthält.
        Die Importmap ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikationen auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert werden.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verzögert.
        Die `charset`- und `defer`-Attribute haben keine Wirkung.
        Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für Cross-Origin-Abrufe.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab abgerufen oder gerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Falls vorhanden, muss sein Wert ein {{Glossary("ASCII", "ASCII")}}soweit-insensitives Match zu `utf-8` sein. Es ist nicht notwendig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element sein Zeichencodierung von dem Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Das `type`-Attribut sollte stattdessen verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie Inline-Skripte ohne das `type="module"`-Attribut werden abgerufen und sofort ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem MIME-Typ `text/javascript` bereitgestellt werden, aber Browser sind tolerant und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert ist, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man ein (externes) Skript mit dem `<script>` Element importiert:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie man ein (Inline-)Skript innerhalb des `<script>` Elements platziert:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Darstellung der Seite blockiert. Das bedeutet, dass der Rest des Inhalts auf der Webseite daran gehindert wird, verarbeitet und dem Benutzer angezeigt zu werden, bis das Skript fertig ausgeführt wird.
Es gibt keine Garantie dafür, dass die Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Am besten verwendet man `async`, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptlade-Methoden und was dies für Ihre Seite bedeutet:

![Wie die drei Skriptlade-Methoden funktionieren: Standard blockiert Parsing, während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsing nur für die Ausführung. Mit defer wird das Parsing nicht pausiert, aber die Ausführung findet erst nach dem Parsing aller anderen Elemente statt.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und reduziert unter den Lizenzbedingungen der [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und in diesem Fall erzeugen Funktionen in diesen Skripten, die von `jquery` abhängig sind, einen Fehler, da `jquery` zum Zeitpunkt der Skriptausführung nicht definiert wird.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte laden müssen und diese so schnell wie möglich verfügbar sein sollen.
Zum Beispiel, wenn Sie einige Spieldatendateien laden müssen, die beim tatsächlichen Spielbeginn benötigt werden, aber derzeit nur das Spieleinführungs-, Titel- und Lobby-Bildschirm gezeigt werden sollen, ohne dass sie durch das Skriptladen blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge, in der sie auf der Seite erscheinen, ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Zusammenfassend:

- `async` und `defer` weisen den Browser beide an, das/die Skript(e) in einem eigenen Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden sofort ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie vorliegen, und werden nur ausgeführt, sobald alles vollständig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf dem Parsen warten sollen und von anderen Skripten und/oder dem DOM abhängig sind, laden Sie sie mit `defer` und platzieren Sie die entsprechenden `<script>` Elemente in der Reihenfolge, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut unterstützen, ignorieren Skripte, die mit einem `nomodule`-Attribut versehen sind. Dies ermöglicht es Ihnen, Modulskripte zu verwenden, während Sie `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie nicht die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Funktion verwenden, muss jedes Modul mit einer Modulspezifikation importiert werden, die entweder eine absolute oder eine relative URL ist.
Im folgenden Beispiel ist die erste Modulspezifikation eine absolute URL, während die zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importmap ermöglicht es Ihnen, eine Abbildung bereitzustellen, die, falls sie übereinstimmt, den Text in der Modulspezifikation ersetzen kann.
Die unten stehende Importmap definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifikationen verwendet werden können.

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

Dies ermöglicht es uns, Module mit Namen in der Modulspezifikation (anstatt absolute oder relative URLs) zu importieren.

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importmaps tun können, siehe den Abschnitt [Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

### Einbetten von Daten in HTML

Sie können das `<script>`-Element auch verwenden, um Daten in HTML mit serverseitiger Darstellung einzubetten, indem Sie einen gültigen Nicht-JavaScript-MIME-Typ im `type`-Attribut angeben.

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

### Blockierung des Renderns bis ein Skript abgerufen und ausgeführt ist

Sie können ein `render`-Token in einem `blocking`-Attribut einfügen;
das Rendering der Seite wird blockiert, bis das Skript abgerufen und ausgeführt ist. Im folgenden Beispiel blockieren wir das Rendering eines asynchronen Skripts,
damit das Skript nicht das Parsen blockiert, aber garantiert ausgewertet wird, bevor das Rendering beginnt.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassen</th>
      <td>Keine, sowohl Start- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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
- [Artikel von Flavio Copes über das effiziente Laden von JavaScript und die Unterschiede zwischen `async` und `defer` erklären](https://thevalleyofcode.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
