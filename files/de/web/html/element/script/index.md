---
title: "<script>: Das Script-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie z.B. der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgeführt, sobald es verfügbar ist.

    Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgeführt, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte) bei klassischen Skripten, in diesem Fall hätte es keinen Effekt.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser die Skripte laden und ausführen müsste, bevor er mit dem Parsen fortfährt. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer`-Attribut spezifiziert ist, wird das Element so behandelt, als ob nur das `async`-Attribut spezifiziert wäre.

    Dies ist ein Boolean-Attribut: Die Anwesenheit eines Boolean-Attributs bei einem Element stellt den Wahrheitswert dar, und das Fehlen des Attributs stellt den Falschwert dar.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Unterstützung in Browsern. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Skriptressourcenanfrage sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage gesendet wird, die die `attributionReporting` Option enthält (entweder direkt im `fetch()` Aufruf gesetzt oder auf einem [`Request`](/de/docs/Web/API/Request) Objekt, das in den `fetch()` Aufruf übergeben wird), oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gesendet wird, auf der [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributes, die Sie setzen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server durchführen. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn sie weggelassen wird.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie die Registrierung der Attributionsquelle auf einem anderen Server vornehmen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header entsprechend antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel unterschiedliche Kampagnen haben, deren Erfolg Sie messen wollen, was die Erstellung verschiedener Berichte zu unterschiedlichen Daten beinhaltet.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking` {{Experimental_Inline}}

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen auf das Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken unten sein.
    - `render`: Die Wiedergabe von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script` Elemente geben minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte weiter, die nicht die standardmäßigen {{Glossary("CORS", "CORS")}} Überprüfungen bestehen. Um Fehlerprotokollierung für Seiten zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für eine ausführlichere Erklärung der gültigen Argumente.
- `defer`

  - : Dieses booleanische Attribut wird gesetzt, um dem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments ausgeführt werden soll, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und die Auswertung abgeschlossen ist.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), in diesem Fall würde es keinen Effekt haben.
    >
    > Das `defer`-Attribut hat keinen Effekt auf [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) — sie verzögern standardmäßig.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser die Skripte laden und ausführen müsste, bevor er mit dem Parsen fortfährt. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `async`-Attribut spezifiziert ist, wird das Element so behandelt, als ob nur das `async`-Attribut spezifiziert wäre.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts.
    Erlaubte Werte:

    - `high`
      - : Abholen des externen Skripts mit hoher Priorität im Vergleich zu anderen externen Skripten.
    - `low`
      - : Abholen des externen Skripts mit niedriger Priorität im Vergleich zu anderen externen Skripten.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität setzen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority) für weitere Informationen.

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut nicht angegeben ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses booleanische Attribut wird gesetzt, um anzuzeigen, dass das Skript nicht in Browsern ausgeführt werden soll, die [ES Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — in der Praxis kann dies verwendet werden, um Fallback-Skripte an ältere Browser zu liefern, die keine modularen JavaScript-Codes unterstützen.
- `nonce`
  - : Eine kryptografische Nonce (Nummer, die einmal verwendet wird), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist wichtig, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen einer Ressourcenrichtlinie andernfalls trivial ist.
- `referrerpolicy`

  - : Gibt an, welche [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von Ressourcen, die vom Skript abgerufen werden, gesendet werden sollen:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Ursprung der verweisenden Seite begrenzt: ihr [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer ist auf das Schema, den Host und den Port beschränkt. Navigationsvorgänge im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartigen Ursprung")}} gesendet, aber abweichende Ursprungsanfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitssicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an einen weniger sicheren Zielort senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL wird gesendet, wenn eine gleichartige Ursprungsanfrage durchgeführt wird, nur die Herkunft wird gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und kein Header wird an ein weniger sicheres Ziel gesendet (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

    > [!NOTE]
    > Ein leerer Stringwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, nimmt es eine übergeordnete Referrer-Politik an, d.h. eine, die auf dem gesamten Dokument oder der Domain festgelegt ist. Wenn keine übergeordnete Politik verfügbar ist, wird der leere String als äquivalent zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt den URI eines externen Skripts an; dies kann als Alternative zum direkten Einbetten eines Skripts in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributes wird einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [in der IANA-Medientypen-Spezifikation aufgelistet](/de/docs/Web/HTTP/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikatoren auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert werden.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verzögert.
        Die `charset` und `defer` Attribute haben keinen Effekt.
        Für Informationen zur Verwendung von `module` siehe unser [JavaScript-Module-Leitfaden](/de/docs/Web/JavaScript/Guide/Modules).
        Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für CORS-fähiges Abrufen.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}} insensitiven Übereinstimmung für `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Anders als das `type`-Attribut wurden jedoch mögliche Werte dieses Attributs nie standardisiert. Das `type`-Attribut sollte stattdessen verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie Inline-Skripte ohne das `type="module"`-Attribut werden sofort abgerufen und ausgeführt, bevor der Browser fortfährt, die Seite zu parsen.

Das Skript sollte mit dem MIME-Typ `text/javascript` bereitgestellt werden, aber Browser sind tolerant und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Diese Beispiele zeigen, wie ein externes Skript mit dem `<script>`-Element importiert wird.

```html
<script src="javascript.js"></script>
```

Die folgenden Beispiele zeigen, wie ein Inline-Skript innerhalb des `<script>`-Elements platziert wird.

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald jedoch der Download abgeschlossen ist, wird das Skript ausgeführt, was die Seite am Rendern hindert. Das bedeutet, dass der verbleibende Inhalt auf der Webseite daran gehindert wird, verarbeitet und dem Benutzer angezeigt zu werden, bis das Skript die Ausführung abgeschlossen hat.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge laufen.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden erst ausgeführt, wenn der Seiteninhalt vollständig geladen ist, was nützlich ist, wenn Ihre Skripte von der Existenz des DOM abhängen (z.B. sie verändern eins oder mehrere Elemente auf der Seite).

Hier ist eine visuelle Darstellung der verschiedenen Skript-Lademethoden und was das für Ihre Seite bedeutet:

![Wie die drei Skript-Ladeverfahren arbeiten: Standard hat blockierendes Parsen, während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsen nur für die Ausführung. Mit defer wird das Parsen nicht pausiert, aber die Ausführung erfolgt erst, wenn alles andere geparst ist.](async-defer.jpg)

_Diese Abbildung stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version beschnitten, nach den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, generieren alle Funktionen, die in diesen Skripten von `jquery` abhängen, einen Fehler, da `jquery` zum Zeitpunkt des Skriptabbruchs nicht definiert wird.

`async` sollte verwendet werden, wenn Sie viele Hintergrundskripte zum Laden haben und Sie möchten, dass sie so schnell wie möglich bereitgestellt werden.
Vielleicht haben Sie beispielsweise einige Spieldateien zu laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber jetzt möchten Sie einfach fortfahren, das Spielintro, -titel und -lobby anzuzeigen, ohne dass sie durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite stehen, und sie werden ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

In dem zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden erst ausgeführt, wenn der Seiteninhalt vollständig geladen ist, was nützlich ist, wenn Ihre Skripte von der Existenz des DOM abhängen (z.B. sie verändern eins oder mehrere Elemente auf der Seite).

Zusammenfassend:

- `async` und `defer` instruieren beide den Browser, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM, usw.) herunterlädt, sodass der Seitenladevorgang während des Abrufvorgangs nicht blockiert ist.
- Skripte mit einem `async`-Attribut werden sofort nach dem Download ausgeführt.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie sich befinden, und werden erst ausgeführt, wenn alles geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten müssen und von anderen Skripten und/oder dem DOM abhängen, laden Sie sie mit `defer` und platzieren Sie die entsprechenden `<script>`-Elemente in der Reihenfolge, in der Sie möchten, dass der Browser sie ausführt.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](#type) Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule` Attribut. Das ermöglicht es Ihnen, Modulscripts zu verwenden, während Sie `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie das [`type=importmap`](#importmap) Merkmal nicht verwenden, muss jedes Modul mit einem Modulspezifikator importiert werden, der entweder eine absolute oder relative URL ist.
Im folgenden Beispiel wird der erste Modulspezifikator ("./shapes/square.js") relativ zur Basis-URL des Dokuments aufgelöst, während der zweite ein absoluter URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Importkarte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifikator ersetzen kann.
Die folgende Importkarte definiert die Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

Dies ermöglicht uns, Module mit Namen im Modulspezifikator zu importieren (anstelle von absoluten oder relativen URLs).

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Für weitere Beispiele, was Sie mit Importmaps tun können, siehe den Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

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

Sie können ein `render`-Token innerhalb eines `blocking`-Attributs einfügen;
das Rendering der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wurde. Im folgenden Beispiel blockieren wir das Rendering auf einem asynchronen Skript,
damit das Skript das Parsen nicht blockiert, aber garantiert ist, dass es vor dem Start des Renderings ausgewertet wird.

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
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadaten-Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Ausslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadaten-Inhalte</a>,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a> erlaubt.
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
      <td>Keine <code>Rolle</code> erlaubt</td>
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
- [JavaScript-Module-Leitfaden](/de/docs/Web/JavaScript/Guide/Modules)
