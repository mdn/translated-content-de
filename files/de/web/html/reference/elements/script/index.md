---
title: "`<script>` HTML Skriptelement"
short-title: <script>
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

Das **`<script>`**-Element in [HTML](/de/docs/Web/HTML) wird verwendet, um ausführbaren Code oder Daten einzubetten; üblicherweise wird es verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`
  - : Für klassische Skripte: Wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist.

    Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules): Wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte) bei klassischen Skripten, in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Eliminierung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor das Parsing fortgesetzt wird. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async`-Attribut angegeben ist.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs an einem Element repräsentiert den Wert "wahr", das Fehlen des Attributs repräsentiert den Wert "falsch".

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Async-Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt im `fetch()`-Aufruf festgelegt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das dem `fetch()`-Aufruf übergeben wird), oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gesendet wird, bei dem [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server behandeln. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein leerer Zeichenfolgewert verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, beispielsweise:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server behandeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsort der Ressource an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Wenn mehrere URLs angegeben werden, bedeutet dies, dass mehrere Attributionsquellen in derselben Funktion registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg gemessen werden soll, was die Generierung verschiedener Berichte auf unterschiedlichen Daten beinhaltet.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking`
  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Operationen blockiert werden sollten, bis das Skript ausgeführt wurde. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken sein. Aktuell gibt es nur ein Token:
    - `render`: Die Darstellung von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können möglicherweise das Rendern blockieren. Skripte blockieren standardmäßig nicht das Rendern; wenn ein `script`-Element nicht `type="module"`, `async` oder `defer` enthält, blockiert es das _Parsen_, nicht das _Rendern_. Wenn ein solches `script`-Element dynamisch via Skript hinzugefügt wird, müssen Sie `blocking = "render"` setzen, damit es das Rendern blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übergeben minimale Informationen an die [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die Standard-{{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um Fehlermeldungen für Seiten zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine ausführlichere Erklärung der gültigen Argumente.
- `defer`
  - : Dieses boolesche Attribut wird gesetzt, um einem Browser mitzuteilen, dass das Skript erst ausgeführt werden soll, nachdem das Dokument geparst wurde, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer`-Attribut hat keine Auswirkung auf [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert ausgeführt.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Eliminierung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor das Parsing fortgesetzt wird. `Async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async` Attribut angegeben ist.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts. Erlaubte Werte:
    - `high`
      - : Ruft das externe Skript mit einer hohen Priorität im Vergleich zu anderen externen Skripten ab.
    - `low`
      - : Ruft das externe Skript mit einer niedrigen Priorität im Vergleich zu anderen externen Skripten ab.
    - `auto`
      - : Legt keine Präferenz für die Abrufpriorität fest.
        Dies ist die Standardeinstellung.
        Sie wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity)
  - : Dieses Attribut enthält einen oder mehrere {{Glossary("hash_function", "Hashes")}} des Skripts. Es wird verwendet, um sicherzustellen, dass der Inhalt des Skripts dem entspricht, was der Entwickler erwartet, und nicht durch ein bösartiges Skript in einem [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks) ersetzt wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe auch [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzugeben, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden sollte — im Effekt kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die keinen modularen JavaScript-Code unterstützen.
- `nonce`
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} (einmaliger Wert), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zu erlauben. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource sonst trivial ist.
- `referrerpolicy`
  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von Ressourcen, die vom Skript abgerufen werden, gesendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen am selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartigen Ursprung")}} gesendet, aber abweichende Ursprungsanfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer gleichartigen Ursprungsanfrage, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an eine weniger sichere Destination (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

    > [!NOTE]
    > Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine übergeordnete Referrerrichtlinie, d.h. eine, die auf das gesamte Dokument oder die gesamte Domain angewendet wird. Wenn keine übergeordnete Richtlinie verfügbar ist, wird der leere String so behandelt, als wäre er gleichbedeutend mit `strict-origin-when-cross-origin`.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann anstelle der direkten Einbettung eines Skripts in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:
    - **Attribut ist nicht gesetzt (Standard), ein leerer String, oder ein JavaScript MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren werden ermutigt, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [in der IANA-Medientypen-Spezifikation aufgelistet](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verzögert.
        Die `charset`- und `defer`-Attribute haben keine Auswirkungen.
        Für Informationen zur Verwendung von `module` siehe unseren [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulscripts die Verwendung des CORS-Protokolls für das Abrufen von Ursprüngen.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
        Spekulationsregeln werden in Form eines JSON-Objekts erstellt, das bestimmt, welche Ressourcen vorgeholt oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss dessen Wert eine {{Glossary("ASCII", "ASCII")}}-Groß-/Kleinschreibung für `utf-8` sein. Es ist nicht notwendig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichenkodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Anders als das `type`-Attribut wurden jedoch die möglichen Werte dieses Attributs nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"`-Attribute sowie Inline-Skripte ohne das `type="module"`-Attribut werden sofort abgerufen und ausgeführt, bevor der Browser das Parsen der Seite fortsetzt.

Das Skript sollte mit dem MIME-Typ `text/javascript` bereitgestellt werden, aber Browser sind nachsichtig und blockieren es nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie man (ein externes) Skript mit dem `<script>`-Element importiert:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie (ein Inline-) Skript innerhalb des `<script>`-Elements platziert wird:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was das Rendern der Seite blockiert. Das bedeutet, dass der Rest des Inhalts auf der Webseite verhindert wird, verarbeitet und dem Nutzer angezeigt zu werden, bis das Skript das Ausführen beendet hat.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und von keinem anderen Skript auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, laden in der Reihenfolge, in der sie auf der Seite erscheinen.
Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte auf das Vorhandensein des DOM angewiesen sind (z.B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skript-Lademethoden und was das für Ihre Seite bedeutet:

![Wie die drei Skript-Lademethoden funktionieren: Standard blockiert das Parsen während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsen nur für die Ausführung. Mit defer wird das Parsen nicht pausiert, aber die Ausführung erfolgt erst, nachdem alles andere geparst wurde.](async-defer.jpg)

_Dieses Bild ist aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und zu einer reduzierten Version zugeschnitten, unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) Lizenzbedingungen._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht darauf verlassen, in welcher Reihenfolge die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und falls dies der Fall ist, wird jede Funktion in diesen Skripten, die von `jquery` abhängt, einen Fehler verursachen, weil `jquery` zum Zeitpunkt der Ausführung des Skripts nicht definiert ist.

`async` sollte verwendet werden, wenn Sie eine Menge von Hintergrundskripten laden müssen und diese so schnell wie möglich bereitstellen möchten.
Zum Beispiel, vielleicht haben Sie einige Spieledateien zu laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber derzeit möchten Sie einfach mit der Darstellung des Spielintros, -titeln und -lobbies fortfahren, ohne dass diese durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen, und direkt nach dem Download von Skript und Inhalt ausgeführt:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` lädt.
Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte auf das Vorhandensein des DOM angewiesen sind (z.B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Zusammengefasst:

- `async` und `defer` instruieren den Browser beide, das Skript in einem separaten Thread zu laden, während der Rest der Seite (das DOM, etc.) herunterlädt, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine spezifische Reihenfolge der Ausführung.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie sich befinden, und werden erst ausgeführt, nachdem alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte darauf warten müssen, dass das Parsen abgeschlossen ist und von anderen Skripten und/oder dem DOM abhängen, laden Sie sie mit `defer` und platzieren die entsprechenden `<script>`-Elemente in der Reihenfolge, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Das ermöglicht Ihnen die Verwendung von Modulscripten, während `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitgestellt werden.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Import von Modulen mit importmap

Beim Importieren von Modulen in Skripten, wenn Sie die Funktion [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) nicht verwenden, muss jedes Modul mithilfe eines Modulspezifikators importiert werden, der entweder eine absolute oder relative URL ist.
Im untenstehenden Beispiel ist der erste Modulspezifikator eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importkarte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifikator ersetzen kann.
Die untenstehende Importkarte definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

Dies erlaubt es uns, Module unter Verwendung von Namen im Modulspezifikator zu importieren (anstatt absolute oder relative URLs zu verwenden).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importkarten machen können, siehe den Abschnitt [Importing modules using import maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

### Einbetten von Daten in HTML

Sie können das `<script>`-Element auch verwenden, um Daten mit serverseitigem Rendern in HTML einzubetten, indem Sie einen gültigen Nicht-JavaScript MIME-Typ im `type`-Attribut angeben.

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

### Rendering blockieren, bis ein Skript abgerufen und ausgeführt wurde

Sie können `render`-Token in ein `blocking`-Attribut einfügen;
das Rendering der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wurde. Im folgenden Beispiel blockieren wir das Rendering eines async Skripts, sodass das Skript das Parsen nicht blockiert, aber garantiert ausgewertet wird, bevor das Rendering beginnt.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalte</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalte</a> akzeptiert.
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und die Erklärung der Unterschiede zwischen `async` und `defer`](https://thevalleyofcode.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
