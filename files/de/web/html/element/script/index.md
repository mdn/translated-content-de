---
title: "<script>: Das Script-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ausführbaren Code oder Daten einzubetten; es wird typischerweise verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie zum Beispiel mit der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Für klassische Skripte: Wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und sofort ausgewertet, sobald es verfügbar ist.

    Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules): Wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und sofort ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei eingebetteten Skripten) bei klassischen Skripten, da es in diesem Fall keinen Effekt hätte.

    Dieses Attribut ermöglicht die Eliminierung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async`-Attribut angegeben wäre.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs auf einem Element repräsentiert den Wert `true`, und das Fehlen des Attributs repräsentiert den Wert `false`.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attribution-Quelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt auf dem `fetch()`-Aufruf festgelegt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolescher Wert, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server behandeln. Wenn Sie einen Attribution-Trigger registrieren, ist diese Eigenschaft optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich, wenn die angeforderte Ressource sich nicht auf einem von Ihnen kontrollierten Server befindet oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server behandeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zur Ursprungsressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header entsprechend antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die das Generieren unterschiedlicher Berichte über unterschiedliche Daten beinhalten.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen blockiert werden sollen, wenn das Skript abgerufen wird. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der folgenden Blockierungstokens sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script`-Elemente übermitteln minimale Informationen an [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um Fehlerprotokollierung für Sites zuzulassen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Weitere Informationen zu den gültigen Argumenten finden Sie unter [CORS-Einstellungattribute](/de/docs/Web/HTML/Attributes/crossorigin).
- `defer`

  - : Dieses boolesche Attribut ist gesetzt, um dem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern das Auslösen des `DOMContentLoaded`-Ereignisses, bis das Skript geladen und ausgewertet worden ist.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei eingebetteten Skripten), da es in diesem Fall keinen Effekt hätte.
    >
    > Das `defer`-Attribut hat keine Wirkung bei [Modulskripten](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Eliminierung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async`-Attribut angegeben wäre.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten abrufen.
    - `low`
      - : Das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist die Standardeinstellung.
        Sie wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält Metadaten, die ein Benutzeragent verwenden kann, um sicherzustellen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut nicht angegeben ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut gibt an, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — tatsächlich kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die modulare JavaScript-Code nicht unterstützen.
- `nonce`
  - : Eine kryptographische Zufallszahl (einmalig verwendet), um Skripten in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zu ermöglichen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Zufallswert generieren. Es ist entscheidend, eine Zufallszahl bereitzustellen, die nicht erraten werden kann, da das Umgehen einer Ressourcenrichtlinie sonst trivial wäre.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn das Skript oder von dem Skript abgefragte Ressourcen abgerufen werden:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: Ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der gesendete Referrer zu anderen Ursprüngen wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), ihn jedoch nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine gleichursprüngige Anfrage durchgeführt wird, nur den Ursprung senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)) enthalten. **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine höherstufige Referrer-Richtlinie, d.h. eine, die auf das gesamte Dokument oder die gesamte Domain angewendet wird. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere Zeichenfolgenwert als gleichwertig zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zum Einbetten eines Skripts direkt in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren werden ermutigt, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind in der [IANA Media Types Specification](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) aufgeführt.
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Inhalt des Elements eine Import-Karte enthält.
        Die Import-Karte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts erfolgt verzögert.
        Die `charset`- und `defer`-Attribute haben keine Wirkung.
        Weitere Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für das Abrufen über Domains hinweg.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen der Browser vorab laden oder vorab rendern soll. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und im Browser nicht verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}}-Groß-/Kleinschreibungsinsensitive Übereinstimmung für `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichencodierung aus dem Dokument ableitet.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"`-Attribute sowie eingebettete Skripte ohne das `type="module"`-Attribut werden sofort abgerufen und ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem `text/javascript`-MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein (externes) Skript mit dem `<script>`-Element importiert wird:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie ein (eingebettetes) Skript innerhalb des `<script>`-Elements platziert wird:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite während des Abrufens zu blockieren.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was das Rendern der Seite blockiert. Dies bedeutet, dass der Rest des Inhalts auf der Webseite nicht verarbeitet und dem Benutzer angezeigt wird, bis das Skript fertig ausgeführt ist.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und von keinem anderen Skript auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, laden in der Reihenfolge, in der sie auf der Seite erscheinen.
Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. sie ändern ein oder mehrere Elemente auf der Seite).

Hier ist eine visuelle Darstellung der verschiedenen Skriptladeverfahren und was das für Ihre Seite bedeutet:

![Wie die drei Skriptladeverfahren funktionieren: Standard hat Parsen blockiert, während JavaScript abgerufen und ausgeführt wird. Bei async pausiert das Parsen nur für die Ausführung. Bei defer wird das Parsen nicht pausiert, aber die Ausführung erfolgt erst, nachdem alles andere geparst wurde.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine verkleinerte Version beschnitten, unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) Lizenzbedingungen._

Beispielsweise haben Sie die folgenden Skriptelemente:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht darauf verlassen, in welcher Reihenfolge die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und in diesem Fall führen alle Funktionen in diesen Skripten, die von `jquery` abhängen, zu einem Fehler, da `jquery` zum Zeitpunkt der Skripte nicht definiert ist.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte laden müssen und diese so schnell wie möglich bereitgestellt werden sollen.
Beispielsweise haben Sie möglicherweise einige Spieledatendateien zu laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber derzeit möchten Sie einfach mit der Anzeige des Spielintro, der Titel und der Lobby fortfahren, ohne dass diese durch das Laden der Skripte blockiert werden.

Skripte, die mit dem `defer`-Attribut (siehe unten) geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen, und werden ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und `script2.js` vor `script3.js`.
Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. sie ändern ein oder mehrere Elemente auf der Seite).

Zusammenfassend:

- Sowohl `async` als auch `defer` weisen den Browser an, das (die) Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie im Dokument erscheinen, und werden erst ausgeführt, sobald alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, dann verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten und auf andere Skripte und/oder das DOM angewiesen sind, laden Sie sie mit `defer` und platzieren Sie ihre entsprechenden `<script>`-Elemente in der Reihenfolge, in der Sie möchten, dass der Browser sie ausführt.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](#type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Das ermöglicht Ihnen, Modulscripte zu verwenden und gleichzeitig `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitzustellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Importieren von Modulen mit importmap

Beim Importieren von Modulen in Skripten, wenn Sie die [`type=importmap`](#importmap)-Funktion nicht verwenden, muss jedes Modul mit einem Spezifizierer importiert werden, der entweder eine absolute oder relative URL ist.
Im folgenden Beispiel wird der erste Modulspezifizierer ("./shapes/square.js") relativ zur Basis-URL des Dokuments aufgelöst, während der zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Import-Karte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifizierer ersetzen kann.
Die Import-Karte unten definiert die Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulspezifizierer verwendet werden können.

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

Dies ermöglicht es uns, Module mit Namen im Modulspezifizierer (anstatt absolute oder relative URLs) zu importieren.

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Für weitere Beispiele, was Sie mit Import-Karten tun können, siehe den Abschnitt [Importieren von Modulen mit Import-Karten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Modul-Leitfaden.

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

### Blockieren des Renderns, bis ein Skript abgerufen und ausgeführt wurde

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einschließen;
das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wurde. Im folgenden Beispiel blockieren wir das Rendern eines asynchronen Skripts,
sodass das Skript das Parsen nicht blockiert, aber garantiert ist, dass es ausgewertet wird, bevor das Rendern beginnt.

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
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadaten-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadaten-Inhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> zulässig</td>
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
- [Flavio Copes' Artikel über effizientes Laden von JavaScript und die Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
