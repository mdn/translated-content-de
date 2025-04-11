---
title: "<script>: Das Script-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ausführbaren Code oder Daten einzubetten; meist wird es verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`

  - : Bei klassischen Skripten, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsing abgerufen und sobald es verfügbar ist ausgewertet.

    Bei [Modul-Skripten](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsing abgerufen und sobald sie verfügbar sind ausgewertet.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei eingebetteten Skripten) für klassische Skripte, in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Eliminierung **parserblockierender JavaScripts**, bei denen der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut mit dem `defer`-Attribut angegeben wird, verhält sich das Element so, als wäre nur das `async`-Attribut angegeben.

    Dies ist ein Boolean-Attribut: Das Vorhandensein eines Boolean-Attributs auf einem Element repräsentiert den Wert wahr, und das Fehlen des Attributs repräsentiert den Wert falsch.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Async-Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header mit der Skript-Ressourcenanfrage senden soll. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die Option `attributionReporting` enthält (entweder direkt im `fetch()`-Aufruf oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder durch Senden einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), die beim Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server abwickeln. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein leerer String-Wert verwendet, wenn er weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) gesendet, zusätzlich zum Herkunftsserver der Ressource. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header entsprechend antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die verschiedene Berichte über unterschiedliche Daten generieren.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blocking-Tokens sein, die unten aufgeführt sind.
    - `render`: Die Darstellung von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente geben minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte weiter, die die standardmäßigen {{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um eine Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellung Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine ausführlichere Erklärung der gültigen Argumente.
- `defer`

  - : Dieses Boolean-Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet ist.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei eingebetteten Skripten), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) – sie werden standardmäßig verzögert geladen.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Eliminierung **parserblockierender JavaScripts**, bei denen der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut mit dem `async`-Attribut angegeben wird, verhält sich das Element so, als wäre nur das `async`-Attribut angegeben.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts.
    Zulässige Werte:

    - `high`
      - : Abrufen des externen Skripts mit hoher Priorität im Vergleich zu anderen externen Skripten.
    - `low`
      - : Abrufen des externen Skripts mit geringer Priorität im Vergleich zu anderen externen Skripten.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority) für mehr Informationen.

- `integrity`
  - : Dieses Attribut enthält eingebettete Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses Boolean-Attribut wird gesetzt, um anzuzeigen, dass das Skript nicht in Browsern ausgeführt werden soll, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen – in der Praxis kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die es nicht unterstützen, modulares JavaScript-Code.
- `nonce`
  - : Eine kryptographische Nonce (einmalige Nummer), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zu erlauben. Der Server muss jedes Mal, wenn er eine Richtlinie überträgt, einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource sonst trivial ist.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von Ressourcen, die vom Skript abgerufen werden, gesendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}}, und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für den {{Glossary("Same-origin_policy", "Same-Origin")}} gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
    - `strict-origin`: Nur den Origin des Dokuments als Referrer senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber ihn nicht an eine weniger sichere Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Same-Origin-Anfrage durchgeführt wird, nur den Origin senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und keinen Header an eine weniger sichere Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Origin _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

    > [!NOTE]
    > Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch der Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit am `<script>`-Element angegeben ist, wird es eine übergeordnete Referrer-Richtlinie, d.h. eine auf das gesamte Dokument oder die Domain gesetzte Richtlinie, übernehmen. Wenn keine übergeordnete Richtlinie verfügbar ist, wird der leere String als gleichwertig zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zum Einbetten eines Skripts direkt innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren werden ermutigt, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript MIME-Typen sind [in der IANA Medien-Typen Spezifikation aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu kontrollieren, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung der Skriptinhalte wird verzögert.
        Die `charset` und `defer` Attribute haben keine Wirkung.
        Für Informationen zur Verwendung von `module`, siehe unseren [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modul-Skripte die Verwendung des CORS-Protokolls für das Cross-Origin-Fetching.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}} Fall-unempfindliche Übereinstimmung mit `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen, und das `script`-Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie eingebettete Skripte ohne das `type="module"` Attribut werden sofort abgerufen und ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind tolerant und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein (externes) Skript mit dem `<script>`-Element importiert wird:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie ein (eingebettetes) Skript innerhalb des `<script>`-Elements gesetzt wird:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download abgeschlossen ist, wird das Skript jedoch ausgeführt, wodurch die Seite blockiert wird. Dies bedeutet, dass der Rest des Inhalts auf der Webseite nicht verarbeitet und dem Benutzer angezeigt wird, bis das Skript seine Ausführung beendet hat.
Sie haben keine Garantie, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden erst ausgeführt, nachdem der gesamte Seiteninhalt geladen wurde, was nützlich ist, wenn Ihre Skripte darauf angewiesen sind, dass das DOM vorhanden ist (z.B. sie ändern ein oder mehrere Elemente auf der Seite).

Hier ist eine visuelle Darstellung der verschiedenen Skript-Lademethoden und was das für Ihre Seite bedeutet:

![Wie die drei Skript-Lademethoden funktionieren: Standardmäßig wird das Parsen blockiert, während JavaScript geladen und ausgeführt wird. Bei Async wird das Parsen nur für die Ausführung unterbrochen. Bei Defer wird das Parsen nicht unterbrochen, aber die Ausführung erfolgt erst, nachdem alles andere geparst wurde.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skript-Elemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht darauf verlassen, in welcher Reihenfolge die Skripte geladen werden.
`jquery.js` könnte vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, werden alle Funktionen in diesen Skripten, die von `jquery` abhängen, einen Fehler erzeugen, weil `jquery` zum Zeitpunkt der Skriptausführung nicht definiert sein wird.

`async` sollte verwendet werden, wenn Sie eine Reihe von Hintergrundskripten laden müssen und Sie diese einfach so schnell wie möglich einfügen möchten.
Zum Beispiel könnten Sie einige Spieldateien laden müssen, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber im Moment möchten Sie einfach mit der Anzeige des Spielintros, der Titel und der Lobby fortfahren, ohne dass diese vom Laden der Skripte blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen, und werden ausgeführt, sobald das Skript und der Inhalt heruntergeladen wurden:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden erst ausgeführt, nachdem der gesamte Seiteninhalt geladen wurde, was nützlich ist, wenn Ihre Skripte darauf angewiesen sind, dass das DOM vorhanden ist (z.B. sie ändern ein oder mehrere Elemente auf der Seite).

Zusammengefasst:

- `async` und `defer` weisen beide den Browser an, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie sich befinden, und werden erst ausgeführt, wenn alles geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf Parsing warten müssen und von anderen Skripten und/oder dem DOM abhängen, laden Sie sie mit `defer` und setzen Sie deren `<script>`-Elemente in die Reihenfolge, in der Sie wollen, dass der Browser sie ausführt.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Das ermöglicht Ihnen, Modulskripte zu verwenden und gleichzeitig mit `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitzustellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie nicht die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Funktion verwenden, muss jedes Modul mit einem Modulspezifikator importiert werden, der entweder eine absolute oder relative URL ist.
Im folgenden Beispiel wird der erste Modulspezifikator ("./shapes/square.js") relativ zur Basis-URL des Dokuments aufgelöst, während der zweite eine absolute URL ist.

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

Dies ermöglicht es uns, Module unter Verwendung von Namen im Modulspezifikator zu importieren (anstatt absolute oder relative URLs zu verwenden).

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Für weitere Beispiele, was Sie mit Importkarten tun können, siehe den Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Modul-Leitfaden.

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

### Rendern blockieren, bis ein Skript abgerufen und ausgeführt wird

Sie können ein `render`-Token innerhalb eines `blocking`-Attributs einschließen;
das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im folgenden Beispiel blockieren wir das Rendern auf einem asynchronen Skript,
damit das Skript nicht das Parsen blockiert, aber garantiert wird, dass es vor dem Start des Renderns ausgewertet wird.

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
