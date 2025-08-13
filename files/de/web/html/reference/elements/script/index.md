---
title: "<script>: Das Script-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

Das **`<script>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; es wird typischerweise verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`
  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist.

    Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte) bei klassischen Skripten, da es in diesem Fall keine Wirkung hat.

    Dieses Attribut ermöglicht die Beseitigung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten muss, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element so, als ob nur das `async`-Attribut angegeben wäre.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs an einem Element repräsentiert den Wahrheitswert, und das Fehlen des Attributs den Falschheitswert.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browser-Unterstützung. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Anforderung der Skriptquelle sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Zuweisungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Zuweisungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) bzw. zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Zuweisungsquellen oder -auslöser registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anforderung mit der Option `attributionReporting` gesendet wird (entweder direkt im `fetch()`-Aufruf festgelegt oder in einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolesch, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Zuweisungsquelle oder des Triggers auf demselben Server behandeln. Bei der Registrierung eines Zuweisungsauslösers ist diese Eigenschaft optional, und es wird ein leerer Zeichenfolgenwert verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, beispielsweise:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Zuweisungsquelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zu den in `attributionsrc` angegebenen URLs zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Wenn mehrere URLs angegeben werden, bedeutet dies, dass mehrere Zuweisungsquellen auf derselben Funktion registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung unterschiedlicher Berichte zu unterschiedlichen Daten umfasst.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Vorgänge blockiert werden sollen, bis das Skript ausgeführt wurde. Die zu blockierenden Vorgänge müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken sein. Derzeit gibt es nur ein Token:
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können möglicherweise das Rendering blockieren. Skripte blockieren standardmäßig nicht das Rendern; wenn ein `script`-Element nicht `type="module"`, `async` oder `defer` enthält, blockiert es das _Parsen_, nicht das _Rendern_. Wenn ein solches `script`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie `blocking = "render"` setzen, damit es das Rendern blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übermitteln minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die Standard-{{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um das Fehlerprotokollieren für Websites, die eine separate Domain für statische Medien verwenden, zu ermöglichen, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine ausführlichere Erklärung seiner gültigen Argumente.
- `defer`
  - : Dieses boolesche Attribut wird gesetzt, um einem Browser mitzuteilen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt werden soll.

    Skripte mit dem Attribut `defer` verhindern das Auslösen des `DOMContentLoaded`-Ereignisses, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), da es in diesem Fall keine Wirkung hat.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten muss, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, verhält sich das Element so, als ob nur das `async`-Attribut angegeben wäre.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Ruft das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten ab.
    - `low`
      - : Ruft das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten ab.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest.
        Dies ist die Standardeinstellung.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent zur Überprüfung verwenden kann, ob eine abgerufene Ressource ohne unerwartete Manipulationen geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript nicht in Browsern ausgeführt werden soll, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — tatsächlich kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die keinen modularen JavaScript-Code unterstützen.
- `nonce`
  - : Eine kryptografische Nonce (nur einmal verwendete Nummer), um Skripten in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zu erlauben. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource andernfalls trivial wäre.
- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von Skripten abgerufenen Ressourcen gesendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationsvorgänge am selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "Same Origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Origin des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Same-Origin-Anfrage durchgeführt wird, nur den Origin senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header zu einem weniger sicheren Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Origin _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)) enthalten. **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leckt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit am `<script>`-Element angegeben ist, übernimmt es eine höhere Referrer-Richtlinie, d.h. eine auf das gesamte Dokument oder die Domain festgelegte. Wenn keine höhere Richtlinie verfügbar ist, wird der leere String so behandelt, als wäre er `strict-origin-when-cross-origin` gleichwertig.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative verwendet werden, um ein Skript direkt innerhalb eines Dokuments einzubetten.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut gibt den Skripttyp an, der dargestellt wird.
    Der Wert dieses Attributs wird einer der folgenden sein:
    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren werden ermutigt, das Attribut wegzulassen, wenn sich das Skript auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [in der IANA-Medientypen-Spezifikation aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung der Skriptinhalte wird verzögert.
        Die Attribute `charset` und `defer` haben keine Wirkung.
        Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für plattformübergreifende Abrufe.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln haben die Form eines JSON-Objekts, das bestimmt, welche Ressourcen vom Browser vorab abgerufen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Falls vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}}-konsensitiv unabhängige Übereinstimmung mit `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element die Zeichencodierung vom Dokument übernimmt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie Inline-Skripte ohne das `type="module"` Attribut werden abgerufen und sofort ausgeführt, bevor der Browser die Seite weiter parst.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind tolerant und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man ein (externes) Skript mit dem `<script>`-Element importiert:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie man ein (Inline-)Skript innerhalb des `<script>`-Elements platziert:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download abgeschlossen ist, wird das Skript jedoch ausgeführt, was die Seite vom Rendern abhält.
Das bedeutet, dass der Rest des Inhalts auf der Webseite daran gehindert wird, verarbeitet und dem Nutzer angezeigt zu werden, bis das Skript fertig ausgeführt ist.
Es gibt keine Garantie, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und nicht von einem anderen Skript auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bevor der Seiteninhalt vollständig geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängig sind, dass das DOM an Ort und Stelle ist (z.B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Methoden des Skriptladens und was das für Ihre Seite bedeutet:

![Wie die drei Methoden des Skriptladens funktionieren: Standard blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsen nur für die Ausführung. Mit defer wird das Parsen nicht pausiert, die Ausführung erfolgt erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und beschnitten zu einer verkleinerten Version, unterliegt den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)_.

Wenn Sie beispielsweise die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden und falls dies der Fall ist, wird jede Funktion in diesen Skripten, die von `jquery` abhängt, einen Fehler erzeugen, da `jquery` nicht definiert sein wird, wenn das Skript ausgeführt wird.

`async` sollte verwendet werden, wenn Sie eine Reihe von Hintergrundskripten laden müssen und Sie nur möchten, dass sie so schnell wie möglich bereitgestellt werden.
Beispielsweise möchten Sie vielleicht einige Spieledateien laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber im Moment möchten Sie einfach mit dem Anzeigen des Spieleintros, der Titel und der Lobby fortfahren, ohne dass diese durch das Laden der Skripte blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen, und werden ausgeführt, sobald das Skript und der Inhalt heruntergeladen wurden:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bevor der Seiteninhalt vollständig geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängig sind, dass das DOM an Ort und Stelle ist (z.B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Zusammenfassung:

- `async` und `defer` weisen den Browser beide an, die Skripte in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie angezeigt werden, und werden erst ausgeführt, wenn alles geladen wurde.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, dann verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten und von anderen Skripten und/oder dem DOM abhängen sollen, laden Sie sie mit `defer` und platzieren Sie ihre entsprechenden `<script>`-Elemente in der Reihenfolge, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Dadurch können Sie Modulscripte verwenden und gleichzeitig `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie nicht das [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Merkmal verwenden, dann muss jedes Modul mit einem Modulspezifizierer importiert werden, der entweder eine absolute oder relative URL ist.
Im folgenden Beispiel ist der erste Modulspezifizierer eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importkarte ermöglicht Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifizierer ersetzen kann.
Die folgende Importkarte definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifizierer verwendet werden können.

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

Dies ermöglicht es uns, Module unter Verwendung von Namen im Modulspezifizierer (anstelle von absoluten oder relativen URLs) zu importieren.

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importkarten machen können, siehe den Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden zu JavaScript-Modulen.

### Daten in HTML einbetten

Sie können das `<script>`-Element auch verwenden, um Daten mit serverseitigem Rendering in HTML einzubetten, indem Sie einen gültigen, nicht JavaScript-bezogenen MIME-Typ im `type`-Attribut angeben.

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

### Rendering blockieren, bis ein Skript abgerufen und ausgeführt ist

Sie können ein `render`-Token innerhalb eines `blocking`-Attributs einfügen;
das Rendering der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wurde. Im folgenden Beispiel blockieren wir das Rendering auf einem asynchronen Skript, sodass das Skript nicht das Parsen blockiert, aber garantiert ist, vor dem Start des Renderings ausgewertet zu werden.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierung von Inhalten</a>.
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
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierung von Inhalten</a> akzeptiert.
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
      <td>Kein <code>role</code> erlaubt</td>
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und die Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
