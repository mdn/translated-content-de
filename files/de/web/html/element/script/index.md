---
title: "<script>: Das Skriptelement"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<script>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um ausführbaren Code oder Daten einzubetten. Dies wird typischerweise genutzt, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie z. B. der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und [JSON](/de/docs/Glossary/JSON).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen geholt und ausgeführt, sobald es verfügbar ist.

    Für [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen geholt und ausgeführt, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inlineskripte) bei klassischen Skripten, da es in diesem Fall keinen Effekt hätte.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierenden JavaScripts**, bei denen der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben ist, verhält sich das Element so, als ob nur das `async`-Attribut spezifiziert wäre.

    Dies ist ein booleanes Attribut: Das Vorhandensein eines booleanen Attributs auf einem Element repräsentiert den wahren Wert, und das Fehlen des Attributs repräsentiert den falschen Wert.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browser-Unterstützung. Siehe auch [Async-Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcen-Anforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) bzw. [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine {{domxref("Window/fetch", "fetch()")}}-Anforderung gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt beim `fetch()`-Aufruf gesetzt oder auf einem {{domxref("Request")}}-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder durch das Senden eines {{domxref("XMLHttpRequest")}} mit {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}}, das auf dem Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server verwalten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, z.B.:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Bei der Ressourcenanforderung wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsserver gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass auf derselben Funktion mehrere Attributionsquellen registriert werden können. Zum Beispiel könnten Sie verschiedene Kampagnen messen, für die unterschiedliche Berichte über verschiedene Daten erstellt werden.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking` {{Experimental_Inline}}

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstoken sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script`-Elemente geben minimale Informationen an das {{domxref('Window.error_event', 'window.onerror')}} für Skripte weiter, die die Standard-{{Glossary("CORS")}}-Prüfungen nicht bestehen. Um Fehlerprotokollierung für Sites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für eine detailliertere Erklärung seiner gültigen Argumente.
- `defer`

  - : Dieses Boolean-Attribut ist gesetzt, um dem Browser mitzuteilen, dass das Skript nach dem Parsen des Dokuments ausgeführt werden soll, aber bevor das {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignis ausgelöst wird.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inlineskripte), in diesem Fall hätte es keinen Effekt.
    >
    > Das `defer`-Attribut hat keine Auswirkungen auf [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) — sie verzögern standardmäßig.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierenden JavaScript**, bei denen der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut spezifiert ist, verhält sich das Element so, als ob nur das `async`-Attribut spezifiziert wäre.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Signalisiert einen hochpriorisierten Abruf im Verhältnis zu anderen externen Skripten.
    - `low`
      - : Signalisiert einen niedrig priorisierten Abruf im Verhältnis zu anderen externen Skripten.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Abrufpriorität im Verhältnis zu anderen externen Skripten.

- `integrity`
  - : Dieses Attribut enthält inline Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut nicht angegeben ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses Boolean-Attribut wird gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden sollte — in der Tat kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die kein modulares JavaScript unterstützen.
- `nonce`
  - : Ein kryptografischer Nonce (Zahl, die einmal verwendet wird), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist wichtig, einen Nonce bereitzustellen, der nicht erraten werden kann, da das Umgehen der Ressourcenschutzrichtlinie sonst trivial ist.
- `referrerpolicy`

  - : Gibt an, welchen [referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von Ressourcen, die vom Skript abgerufen werden, gesendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin")}}s ohne {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referer wird auf den Ursprung der referenzierenden Seite beschränkt: sein [schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, und {{Glossary("port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referer wird auf das Schema, den Host und den Port beschränkt. Navigationen innerhalb des gleichen Ursprungs enthalten immer noch den Pfad.
    - `same-origin`: Ein Referer wird für {{Glossary("Same-origin policy", "same origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referer-Informationen.
    - `strict-origin`: Nur der Ursprung des Dokuments wird als Referer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP) gesendet.
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL, wenn eine Anforderung im gleichen Ursprung durchgeführt wird, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referer wird den Ursprung _und_ den Pfad einschließen (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element festgelegt ist, übernimmt es eine höherstufige Referrer-Policy, d.h. eine, die auf das gesamte Dokument oder die Domain festgelegt ist. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere String als Äquivalent zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an. Dies kann als Alternative zum direkten Einbetten eines Skripts in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an. Der Wert dieses Attributs wird eine der folgenden Möglichkeiten sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält. Autoren werden ermutigt, das Attribut wegzulassen, wenn sich das Skript auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben. JavaScript-MIME-Typen sind [in der IANA-Mediendokumentation aufgeführt](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Import-Map enthält. Die Import-Map ist ein JSON-Objekt, mit dem Entwickler steuern können, wie der Browser Modulbezeichner beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird. Die Verarbeitung der Skriptinhalte wird verzögert. Die `charset`- und `defer`-Attribute haben keine Auswirkungen. Für Informationen über die Verwendung von `module` siehe unseren [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden. Anders als klassische Skripte erfordern Modulscripte die Verwendung des CORS-Protokolls für Cross-Origin-Abrufe.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält. Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab abgerufen oder vorgeladen werden sollen. Dies ist Teil der {{domxref("Speculation Rules API", "", "", "nocode")}}.
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet. Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen. Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII")}}-unempfindliche Übereinstimmung für "`utf-8`" sein. Es ist nicht notwendig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen, und das `script`-Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Ähnlich dem `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async)-, [`defer`](#defer)- oder `type="module"`-Attribute sowie Inline-Skripte ohne `type="module"`-Attribut werden abgerufen und sofort ausgeführt, bevor der Browser die Seite weiterparst.

Das Skript sollte mit dem `text/javascript`-MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, wird ein {{domxref("HTMLElement/error_event", "error")}}-Ereignis an das Element gesendet; andernfalls wird ein {{domxref("HTMLElement/load_event", "load")}}-Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Diese Beispiele zeigen, wie ein (externes) Skript mit dem `<script>`-Element importiert wird.

```html
<script src="javascript.js"></script>
```

Und die folgenden Beispiele zeigen, wie ein (inline) Skript innerhalb des `<script>`-Elements platziert wird.

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Mit dem `async`-Attribut geladene Skripte laden das Skript, ohne dass die Seite blockiert wird, während das Skript geholt wird. Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, wodurch die Seite blockiert wird. Dies bedeutet, dass der Rest des Inhalts auf der Webseite daran gehindert wird, bis das Skript die Ausführung abgeschlossen hat. Sie können nicht garantieren, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden. Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und von keinem anderen Skript auf der Seite abhängen.

Mit dem `defer`-Attribut geladene Skripte werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen. Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptladekonzepte und was das für Ihre Seite bedeutet:

![Wie die drei Skriptladeverfahren arbeiten: Standard blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsen nur für die Ausführung. Mit defer wird das Parsen nicht angehalten, aber die Ausführung findet nach dem Parsen aller anderen Elemente statt.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden. `jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden und in diesem Fall wird jede Funktion in diesen Skripten, die von `jquery` abhängt, einen Fehler erzeugen, da `jquery` zum Zeitpunkt des Skriptstarts nicht definiert sein wird.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte laden müssen, und Sie diese so schnell wie möglich bereitstellen möchten. Zum Beispiel könnten Sie einige Spieldateien laden wollen, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber fürs Erste möchten Sie nur mit der Anzeige von Spielintro, Titeln und Lobby fortfahren, ohne dass sie durch das Skriptladen blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen und ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und `script2.js` vor `script3.js` geladen wird. Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Zusammenfassung:

- `async` und `defer` bewirken beide, dass der Browser das/die Skript(e) in einem separaten Thread herunterlädt, während der Rest der Seite (DOM usw.) heruntergeladen wird, sodass das Laden der Seite während des Abrufvorgangs nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist. Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen, und werden erst ausgeführt, wenn alles geladen ist.
- Falls Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten sollen und von anderen Skripten und/oder dem DOM abhängig sind, laden Sie sie mit `defer` und setzen Sie ihre entsprechenden `<script>`-Elemente in der gewünschten Reihenfolge auf der Seite, die der Browser ausführen soll.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](#type)-Attribut unterstützen, ignorieren jedes Skript, das ein `nomodule`-Attribut hat. Dadurch können Sie Modulscripte verwenden, während Sie für nicht unterstützende Browser `nomodule`-markierte Fallback-Skripte bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Importmap importieren

Wenn Sie Module in Skripten importieren und die [`type=importmap`](#importmap)-Funktion nicht verwenden, muss jedes Modul mit einem Modulbezeichner importiert werden, der entweder eine absolute oder relative URL ist. Im Beispiel unten wird der erste Modulbezeichner („./shapes/square.js“) relativ zur Basis-URL des Dokuments aufgelöst, während der zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Importmap ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, falls sie zutrifft, den Text im Modulbezeichner ersetzen kann. Die Importmap unten definiert die Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulbezeichner verwendet werden können.

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

Dies ermöglicht es uns, Module mit Namen im Modulbezeichner (anstatt absolute oder relative URLs) zu importieren.

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Für mehr Beispiele, was Sie mit Importmaps machen können, sehen Sie sich den Abschnitt [Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden für JavaScript-Module an.

### Einbetten von Daten in HTML

Sie können das `<script>`-Element auch verwenden, um Daten mit serverseitigem Rendering in HTML einzubetten, indem Sie im `type`-Attribut einen gültigen Nicht-JavaScript-MIME-Typ angeben.

```html
<!-- Vom Server generiert -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Maria Cruz",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- Statisch -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("User information: %o", userInfo);
</script>
```

### Blockieren des Renderns bis ein Skript abgerufen und ausgeführt wird

Sie können das Token `render` innerhalb eines `blocking`-Attributs einschließen; das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im folgenden Beispiel blockieren wir das Rendern eines asynchronen Skripts, sodass das Skript nicht das Parsen blockiert, aber garantiert ist, dass es ausgewertet wird, bevor das Rendern beginnt.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Inhalt in Phrasenform</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadateninhalt</a> erlaubt,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Inhalt in Phrasenform</a> erlaubt.
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
      <td>Kein <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- {{domxref("document.currentScript")}}
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und die Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
