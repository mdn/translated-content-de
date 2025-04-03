---
title: "<script>: Das Skript-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; hierbei wird typischerweise auf JavaScript-Code verwiesen oder dieser eingebettet. Das `<script>` Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL-Shadersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist.

    Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) wird, wenn das `async`-Attribut vorhanden ist, das Script und alle seine Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte) bei klassischen Skripten, in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, wird das Element so agieren, als wäre nur das `async`-Attribut angegeben.

    Dies ist ein boolesches Attribut: Die Präsenz eines booleschen Attributs auf einem Element stellt den Wert wahr dar, und das Fehlen des Attributs stellt den Wert falsch dar.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Notizen zur Browserunterstützung. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Skript-Ressourcenanforderung sendet. Auf der Server-Seite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Auslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header gesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -auslöser registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage gesendet wird, die die `attributionReporting` Option enthält (entweder direkt im `fetch()` Aufruf festgelegt oder auf einem [`Request`](/de/docs/Web/API/Request) Objekt, das in den `fetch()` Aufruf übergeben wurde), oder durch Senden einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), das auf dem Anfrageobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolesch, d.h. nur der `attributionsrc` Name. Dies weist darauf hin, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attribution-Quelle oder des Auslösers auf demselben Server verwalten. Bei der Registrierung eines Attribution-Auslösers ist dieses Attribut optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn es weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, beispielsweise:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist, oder Sie einfach die Registrierung der Attribution-Quelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header wie angemessen antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie können beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten und die das Generieren verschiedener Berichte auf verschiedenen Daten beinhalten.

    Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Sperrungstoken sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script` Elemente übergeben nur minimale Informationen an den [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}} Prüfungen nicht bestehen. Um die Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für eine ausführlichere Erklärung seiner gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded` Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) — sie verzögern sich standardmäßig.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, wird das Element so agieren, als wäre nur das `async`-Attribut angegeben.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts.
    Zulässige Werte:

    - `high`
      - : Holt das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten.
    - `low`
      - : Holt das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten.
    - `auto`
      - : Setzt keine Präferenz für die Abrufpriorität.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein oder ein ungültiger Wert gesetzt wird.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Weitere Informationen finden Sie unter [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — dies kann verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die Modularen JavaScript-Code nicht unterstützen.
- `nonce`
  - : Ein kryptographischer Nonce (Zahl, die einmal verwendet wird), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zuzulassen. Der Server muss für jede übertragene Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, einen Nonce bereitzustellen, der nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource andernfalls trivial wäre.
- `referrerpolicy`

  - : Gibt an, welche [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von vom Skript abgerufenen Ressourcen gesendet werden sollen:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprung")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt sein: Schema, {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf Schema, Host und Port beschränkt. Navigationen im gleichen Ursprung schließen weiterhin den Pfad ein.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "Same-Origin")}} gesendet, aber bereichsübergreifende Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), senden Sie es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn eine gleich-originige Anfrage durchgeführt wird, senden Sie nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, weil er Ursprünge und Wege von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit im `<script>`-Element angegeben ist, übernimmt es eine höherstufige Referrer-Richtlinie, d.h. eine, die auf das gesamte Dokument oder die gesamte Domain angewendet wird. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere Zeichenfolgenwert als equivalent zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut spezifiziert die URI eines externen Skripts; dies kann als Alternative zum direkten Einbetten eines Skripts in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt die Art des repräsentierten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Es wird empfohlen, das Attribut wegzulassen, wenn sich das Skript auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [in der IANA-Medientypenspezifikation aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung der Skriptinhalte wird verzögert.
        Die Attribute `charset` und `defer` haben keine Auswirkungen.
        Weitere Informationen zur Verwendung von `module` finden Sie in unserem [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
        Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für bereichsübergreifendes Abrufen.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln haben die Form eines JSON-Objekts, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}} nicht unterscheidende Übereinstimmung für `utf-8` sein. Es ist nicht notwendig, das `charset` Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script` Element seine Zeichenkodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Genau wie das `type` Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type` Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Das `type` Attribut sollte stattdessen verwendet werden.

## Anmerkungen

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie Inline-Skripte ohne das `type="module"` Attribut werden sofort abgerufen und ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem `text/javascript` MIME-Typ bedient werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert ist, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; ansonsten wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie man ein (externes) Skript mit dem `<script>` Element importiert:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie man ein (inline) Skript innerhalb des `<script>` Elements platziert:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async` Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, wodurch das Rendering der Seite blockiert wird. Das bedeutet, dass der Rest des Inhalts auf der Webseite verhindert wird, verarbeitet und dem Benutzer angezeigt zu werden, bis das Skript die Ausführung beendet.
Es gibt keine Garantie, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und nicht von einem anderen Skript auf der Seite abhängen.

Skripte, die mit dem `defer` Attribut geladen werden, laden in der Reihenfolge, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon ausgehen, dass das DOM vorhanden ist (z.B. wenn sie eines oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptladeverfahren und was das für Ihre Seite bedeutet:

![Funktionsweise der drei Skript-Lademethoden: Standard blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Bei async pausiert das Parsen nur für die Ausführung. Bei defer wird das Parsen nicht pausiert, aber die Ausführung findet erst nach allem anderen geparst wurde statt.](async-defer.jpg)

_Dieses Bild ist aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und beschnitten auf eine reduzierte Version, unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) Lizenzbedingungen._

Zum Beispiel, wenn Sie folgende Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden und wenn dies der Fall ist, wird jeder Funktionsaufruf in diesen Skripten, der von `jquery` abhängt, einen Fehler erzeugen, da `jquery` zur Zeit der Skriptausführung nicht definiert ist.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte laden müssen und Sie sie einfach so schnell wie möglich ins Spiel bringen möchten.
Zum Beispiel, vielleicht haben Sie einige Spieldateien, die geladen werden müssen, wenn das Spiel tatsächlich beginnt, aber für jetzt möchten Sie einfach mit dem Anzeigen des Spieleintros, der Titel und der Lobby weitermachen, ohne dass diese vom Skriptladen blockiert werden.

Skripte, die mit dem `defer` Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen, und sie ausführen, sobald das Skript und der Inhalt heruntergeladen wurden:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängig sind, dass das DOM vorhanden ist (z.B. wenn sie eines oder mehrere Elemente auf der Seite ändern).

Zusammenfassend:

- `async` und `defer` beide geben dem Browser an, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, so dass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit `async` Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und gibt keine spezifische Ausführungsreihenfolge an.
- Skripte mit `defer` Attribut werden in der Reihenfolge geladen, in der sie vorhanden sind, und werden nur ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten müssen und von anderen Skripten und/oder dem DOM abhängig sind, laden Sie sie mit `defer` und setzen ihre entsprechenden `<script>`-Elemente in die Reihenfolge, in der Sie wollen, dass der Browser sie ausführt.

### Modul-Fallback

Browser, die den `module` Wert für das [`type`](/de/docs/Web/HTML/Element/script/type) Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule` Attribut. Das ermöglicht es Ihnen, Modulscripte zu verwenden, während Sie `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie das [`type=importmap`](/de/docs/Web/HTML/Element/script/type/importmap) Feature nicht verwenden, muss jedes Modul mit einem Modulspezifikator importiert werden, der entweder eine absolute oder relative URL ist.
Im Beispiel unten wird der erste Modulspezifikator ("./shapes/square.js") relativ zur Basis-URL des Dokuments aufgelöst, während die zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Importkarte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifikator ersetzen kann.
Die folgende Importkarte definiert die Schlüssel `square` und `circle`, die als Aliasse für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

Weitere Beispiele dafür, was Sie mit Importkarten machen können, finden Sie im [Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) Abschnitt im Leitfaden zu JavaScript-Modulen.

### Einbetten von Daten in HTML

Sie können das `<script>` Element auch verwenden, um Daten mit serverseitigem Rendering in HTML einzubetten, indem Sie einen gültigen Nicht-JavaScript-MIME-Typ im `type` Attribut angeben.

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

### Blockieren des Renderings bis ein Skript abgerufen und ausgeführt ist

Sie können den `render` Token in ein `blocking` Attribut aufnehmen;
das Rendering der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wurde. Im Beispiel unten blockieren wir das Rendering bei einem asynchronen Skript,
so dass das Skript das Parsen nicht blockiert, aber garantiert ausgewertet wird, bevor das Rendering beginnt.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tagauslassung</th>
      <td>Keine, beide, das Start- und End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
- [Artikel von Flavio Copes zur effizienten Ladezeit von JavaScript und den Unterschieden zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
