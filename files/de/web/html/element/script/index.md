---
title: "<script>: Das Script-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es verwendet, um JavaScript-Code einzubetten oder zu referenzieren. Das `<script>`-Element kann auch mit anderen Programmiersprachen verwendet werden, wie der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Bei klassischen Skripten, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgeführt, sobald es verfügbar ist.

    Bei [Modul-Skripten](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte bei klassischen Skripten), da es in diesem Fall keine Wirkung hätte.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, wird das Element so behandelt, als wäre nur das `async`-Attribut angegeben.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs an einem Element repräsentiert den Wert wahr, und das Fehlen des Attributs repräsentiert den Wert falsch.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browser-Unterstützung. Siehe auch [Async-Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Bestimmt, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Skript-Ressourcenanforderung senden soll. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger durch Senden einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anforderung mit der `attributionReporting`-Option (entweder direkt im `fetch()`-Aufruf festgelegt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird) registriert werden oder durch Senden eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), das auf das Anforderungsobjekt angewendet wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc` Name. Dies bedeutet, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server senden möchten, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server verwalten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein Leerzeichenwert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, bei denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert des `attributionsrc` angeben. Wenn die Ressourcenanforderung auftritt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die im `attributionSrc` angegebenen URLs zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem passenden {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Feature registriert werden können. Sie könnten beispielsweise unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, wobei unterschiedliche Berichte über unterschiedliche Daten generiert werden.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Vorgänge beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Vorgänge müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungstoken sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script` Elemente übermitteln minimale Informationen an [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}} Prüfungen nicht bestehen. Um Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, benutzen Sie dieses Attribut. Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für eine ausführlichere Erklärung seiner gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer` Attribut verhindern das Auslösen des `DOMContentLoaded` Ereignisses, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src` Attribut fehlt (d.h. für Inline-Skripte), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer` Attribut hat keinen Effekt auf [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer` Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wird das Attribut mit dem `async` Attribut angegeben, wirkt das Element, als wäre nur das `async` Attribut spezifiziert.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts.
    Erlaubte Werte:

    - `high`
      - : Das externe Skript mit hoher Priorität relativ zu anderen externen Skripten abrufen.
    - `low`
      - : Das externe Skript mit niedriger Priorität relativ zu anderen externen Skripten abrufen.
    - `auto`
      - : Keine Präferenz für die Abruf-Präferenz festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority) für weitere Informationen.

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src` Attribut nicht angegeben ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden sollte — dies kann verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die modulares JavaScript nicht unterstützen.
- `nonce`
  - : Eine kryptografische Nonce (Nummer, die einmal verwendet wurde) zur Erlaubnis von Skripten in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource ansonsten trivial ist.
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder der vom Skript abgerufenen Ressourcen zu senden:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: ihr [Scheme](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Scheme, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Ursprung")}} gesendet, aber cross-origin Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Anfrage im gleichen Ursprung ausgeführt wird, nur den Ursprung senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht ausdrücklich auf dem `<script>` Element angegeben ist, übernimmt es eine höherwertige Referrer-Richtlinie, d.h. eine, die auf das gesamte Dokument oder die Domain angewendet wird. Wenn keine höherwertige Richtlinie verfügbar ist, wird der leere Zeichenfolgenwert als gleichwertig mit `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zur Einbettung eines Skripts direkt in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
      - : Weist darauf hin, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript MIME-Typen sind [in der IANA-Medientypen-Spezifikation aufgeführt](/de/docs/Web/HTTP/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verzögert.
        Die `charset` und `defer` Attribute haben keine Wirkung.
        Informationen zur Verwendung von `module` finden Sie in unserem Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
        Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für das cross-origin Abrufen.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab abgerufen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src` Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert ein {{Glossary("ASCII", "ASCII")}} Groß- und Kleinschreibung-unempfindliches Match für `utf-8` sein. Es ist unnötig, das `charset` Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script` Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type` Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type` Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Das `type` Attribut sollte stattdessen verwendet werden.

## Anmerkungen

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie Inline-Skripte ohne das `type="module"` Attribut werden sofort abgerufen und ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Nutzung

Diese Beispiele zeigen, wie man ein (externes) Skript mit dem `<script>`-Element importiert.

```html
<script src="javascript.js"></script>
```

Und die folgenden Beispiele zeigen, wie man ein (Inline-)Skript innerhalb des `<script>`-Elements platziert.

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Seite vom Rendern blockiert. Das bedeutet, dass der Rest des Inhalts auf der Webseite verhindert wird, verarbeitet und dem Benutzer angezeigt zu werden, bis das Skript mit der Ausführung fertig ist.
Es gibt keine Garantie, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte der Seite unabhängig voneinander ausgeführt werden und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, laden in der Reihenfolge, in der sie auf der Seite erscheinen.
Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z.B. wenn sie ein oder mehrere Elemente auf der Seite verändern).

Hier ist eine visuelle Darstellung der verschiedenen Methoden zum Laden von Skripten und was das für Ihre Seite bedeutet:

![Wie die drei Methoden zum Laden von Skripten funktionieren: Die Standardeinstellung blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Bei async wird das Parsen nur für die Ausführung pausiert. Bei defer wird das Parsen nicht pausiert, die Ausführung erfolgt jedoch erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt von der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), wurde kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, werden alle Funktionen in diesen Skripten, die von `jquery` abhängen, einen Fehler verursachen, da `jquery` zum Zeitpunkt der Ausführung des Skripts nicht definiert ist.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte laden müssen und Sie diese so schnell wie möglich bereitstellen möchten.
Zum Beispiel möchten Sie vielleicht einige Spieledateien laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber für jetzt möchten Sie einfach den Spieleintrol, Titel und Lobby anzeigen, ohne dass diese durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen, und führen sie aus, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z.B. wenn sie ein oder mehrere Elemente auf der Seite verändern).

Zusammenfassend:

- Sowohl `async` als auch `defer` weisen den Browser an, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM, usw.) heruntergeladen wird, sodass der Seitenladevorgang während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut laden in der Reihenfolge, in der sie sich befinden, und werden erst ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten und von anderen Skripten und/oder dem DOM abhängig sein sollen, laden Sie sie mit `defer` und platzieren Sie ihre entsprechenden `<script>`-Elemente in der gewünschten Ausführungsreihenfolge.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](#type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Das ermöglicht es Ihnen, Modulscripte zu verwenden, während Sie `nomodule`-markierte Fallback-Skripte für nicht-unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie die [`type=importmap`](#importmap)-Funktion nicht verwenden, muss jedes Modul mit einem Modulspezifikator importiert werden, der entweder eine absolute oder relative URL ist.
Im Beispiel unten wird der erste Modulspezifikator ("./shapes/square.js") relativ zur Basis-URL des Dokuments aufgelöst, während der zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Importkarte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, falls sie übereinstimmt, den Text im Modulspezifikator ersetzen kann.
Die folgende Importkarte definiert Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulspezifikatoren verwendet werden können.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

Dies ermöglicht es uns, Module mit Namen im Modulspezifikator (anstelle von absoluten oder relativen URLs) zu importieren.

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Weitere Beispiele dafür, was Sie mit Importkarten tun können, finden Sie im Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden zu JavaScript-Modulen.

### Einbetten von Daten in HTML

Sie können das `<script>`-Element auch verwenden, um Daten in HTML mit serverseitigem Rendering einzubetten, indem Sie einen gültigen Nicht-JavaScript-MIME-Typ im `type`-Attribut angeben.

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

Sie können den `render` Token innerhalb eines `blocking`-Attributs einfügen; das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im Beispiel unten blockieren wir das Rendern eines async Skripts,
sodass das Skript das Parsen nicht blockiert, aber garantiert wird, bevor das Rendern beginnt, dass es ausgewertet wird.

```html
<script blocking="render" async src="async-script.js"></script>
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadateninhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Ausdrucksinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Ausdrucksinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und Erklärung der Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- Leitfaden über [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
