---
title: "<script>: Das Script-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; es wird typischerweise verwendet, um JavaScript-Code einzubetten oder zu referenzieren. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie zum Beispiel der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`

  - : Bei klassischen Skripten wird, falls das `async`-Attribut vorhanden ist, das klassische Skript parallel zum Parsen abgerufen und ausgeführt, sobald es verfügbar ist.

    Bei [Module Scripts](/de/docs/Web/JavaScript/Guide/Modules) werden bei vorhandenen `async`-Attribut sowohl die Skripte als auch all ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgeführt, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei Inline-Skripten), da es in diesem Fall keine Wirkung hätte.

    Dieses Attribut ermöglicht die Beseitigung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element, als wäre nur das `async`-Attribut angegeben.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs auf einem Element repräsentiert den wahren Wert, und das Fehlen des Attributs repräsentiert den falschen Wert.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt beim `fetch()`-Aufruf oder bei einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gesendet wird, bei der [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) für das Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung von Attributionsquellen oder -triggern auf demselben Server verarbeiten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn sie weggelassen wird.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, bei denen die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder wenn Sie einfach nur die Registrierung von Attributionsquellen auf einem anderen Server verarbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) gesendet, zusätzlich zum Ursprung der Ressource. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header wie erforderlich zur Vervollständigung der Registrierung antworten.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte auf unterschiedlichen Daten beinhaltet.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut zeigt ausdrücklich an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollten. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstoken sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übergeben minimale Informationen an [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}}-Überprüfungen nicht bestehen. Um die Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine detaillierte Erklärung der gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), da es in diesem Fall keine Wirkung hätte.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Module Scripts](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert ausgeführt.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, verhält sich das Element, als wäre nur das `async`-Attribut angegeben.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts.
    Erlaubte Werte:

    - `high`
      - : Ruft das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten ab.
    - `low`
      - : Ruft das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten ab.
    - `auto`
      - : Setzt keine Präferenz für die Abrufpriorität.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut gibt an, dass das Skript nicht in Browsern ausgeführt werden sollte, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — tatsächlich kann dies verwendet werden, um Fallback-Scripts für ältere Browser bereitzustellen, die keine modularen JavaScript-Codes unterstützen.
- `nonce`
  - : Eine kryptographische Nonce (nur einmal verwendete Zahl), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zu erlauben. Der Server muss jedes Mal, wenn er eine Richtlinie überträgt, einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da die Umgehung der Richtlinie einer Ressource sonst trivial wäre.
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von Ressourcen, die das Skript abruft, gesendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der Verweisenseite beschränkt sein: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), den {{Glossary("host", "Host")}} und den {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der gesendete Referrer zu anderen Origins wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiches Origin")}} gesendet, jedoch enthalten cross-origin-Anfragen keine Referrer-Informationen.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Protokoll-Sicherheitslevel gleich bleibt (HTTPS→HTTPS), senden Sie ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL beim Ausführen einer gleichartiger Anfrage, senden Sie nur den Ursprung, wenn das Protokoll-Sicherheitslevel gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen auf unsichere Ursprünge preisgibt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine Referrer-Richtlinie auf höherer Ebene, d.h. eine, die für das gesamte Dokument oder die Domäne festgelegt ist. Wenn keine Richtlinie auf höherer Ebene verfügbar ist, wird der leere String wie `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt den URI eines externen Skripts an; es kann als Alternative zur direkten Einbettung eines Skripts innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript JavaScript-Code referenziert, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [in der IANA-Medientypenspezifikation aufgelistet](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts ist verzögert.
        Die `charset`- und `defer`-Attribute haben keine Wirkung.
        Informationen zur Verwendung von `module` finden Sie in unserem [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
        Im Gegensatz zu klassischen Skripten erfordern Modul-Skripte die Verwendung des CORS-Protokolls zum Abrufen über Ursprung hinweg.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Abgeschaffte Attribute

- `charset` {{Deprecated_inline}}
  - : Falls vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}}-zeichenunempfindliche Übereinstimmung zu `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichenkodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Ähnlich dem `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut sind die möglichen Werte dieses Attributs jedoch nie standardisiert worden. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute, sowie Inline-Skripte ohne das `type="module"` Attribut werden sofort abgerufen und ausgeführt, bevor der Browser die Seite weiter analysiert.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie man ein (externes) Skript mittels des `<script>`-Elements importiert:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie man ein (internes) Skript innerhalb des `<script>`-Elements platziert:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async` Attribut geladen werden, laden das Skript, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Seite beim Rendern blockiert. Dies bedeutet, dass der Rest des Inhalts auf der Webseite daran gehindert wird, verarbeitet und dem Benutzer angezeigt zu werden, bis das Skript mit der Ausführung fertig ist.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und nicht auf andere Skripte der Seite angewiesen sind.

Skripte, die mit dem `defer` Attribut geladen werden, laden in der Reihenfolge, in der sie auf der Seite erscheinen.
Sie laufen erst, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte von einem vorhandenen DOM abhängen (z. B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptladeverfahren und was das für Ihre Seite bedeutet:

![Wie die drei Skriptladeverfahren funktionieren: Standard hat Parsen blockiert, während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsen nur zur Ausführung. Mit defer wird das Parsen nicht pausiert, die Ausführung erfolgt jedoch erst, wenn alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Wenn Sie zum Beispiel die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Können Sie sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, werden Funktionen in diesen Skripten, die von `jquery` abhängen, einen Fehler auslösen, da `jquery` zum Zeitpunkt der Skriptausführung nicht definiert wird.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte laden müssen und Sie diese einfach so schnell wie möglich bereitstellen möchten.
Zum Beispiel könnten Sie einige Spieldateien haben, die geladen werden müssen, wenn das Spiel tatsächlich beginnt, aber momentan möchten Sie einfach nur fortfahren, das Spielintro, die Titel und die Lobby anzuzeigen, ohne dass sie durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer` Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen und führen sie aus, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir uns darauf verlassen, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte von einem vorhandenen DOM abhängen (z. B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Zusammengefasst:

- `async` und `defer` weisen beide den Browser an, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass der Seitenladen während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async` Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer` Attribut werden in der Reihenfolge geladen, in der sie sich befinden, und werden erst ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden müssen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte warten müssen, bis das Parsen abgeschlossen ist und von anderen Skripten und/oder dem DOM in ihrer Mitte abhängen, laden Sie sie mit `defer` und bringen ihre entsprechenden `<script>`-Elemente in die Reihenfolge, in der Sie wünschen, dass der Browser sie ausführt.

### Modulfallback

Browser, die den Wert `module` für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule` Attribut. Das ermöglicht es Ihnen, Modulscripte zu verwenden, während `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitgestellt werden.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Funktion nicht verwenden, muss jedes Modul mit einem Modulspezifizierer importiert werden, der entweder eine absolute oder relative URL ist.
Im Beispiel unten ist der erste Modulspezifizierer eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importmap ermöglicht Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifizierer ersetzen kann.
Die untenstehende Importmap definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifizierer verwendet werden können.

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

Dies ermöglicht uns, Module unter Verwendung von Namen im Modulspezifizierer zu importieren (anstatt absolute oder relative URLs).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importmaps machen können, siehe den Abschnitt [Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden für JavaScript-Module.

### Daten in HTML einbetten

Sie können das `<script>`-Element auch verwenden, um Daten in HTML einzubetten mit serverseitigem Rendering, indem Sie einen gültigen nicht-JavaScript-MIME-Typ im `type` Attribut angeben.

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

Sie können das `render`-Token innerhalb eines `blocking` Attributs einschließen; das Rendering der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wurde. Im untenstehenden Beispiel blockieren wir das Rendering auf einem asynchronen Skript, sodass das Skript das Parsen nicht blockiert, aber garantiert wird, bevor das Rendering beginnt, ausgewertet zu werden.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM Schnittstelle</th>
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
- [Artikel von Flavio Copes über das effiziente Laden von JavaScript und die Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
