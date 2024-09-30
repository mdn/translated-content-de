---
title: "<script>: Das Skript-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<script>`**-Element von [HTML](/de/docs/Web/HTML) wird verwendet, um ausführbaren Code oder Daten einzubetten; in der Regel wird es verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie etwa der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und [JSON](/de/docs/Glossary/JSON).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Für klassische Skripte gilt: Wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und so bald wie möglich ausgewertet.

    Bei [Modulskripten](/de/docs/Web/JavaScript/Guide/Modules) gilt: Wenn das `async`-Attribut vorhanden ist, werden die Skripte und all ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d. h. bei Inline-Skripten) für klassische Skripte; in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er das Parsing fortsetzen kann. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben ist, verhält sich das Element so, als ob nur das `async`-Attribut angegeben wäre.

    Dies ist ein booleanes Attribut: Das Vorhandensein eines booleanen Attributs an einem Element repräsentiert den Wert "wahr", und das Fehlen des Attributs repräsentiert den Wert "falsch".

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browser-Unterstützung. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der `attributionReporting`-Option (entweder direkt im `fetch()`-Aufruf oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird) oder durch Senden eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit aufgerufenem [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d. h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server handhaben. Bei der Registrierung eines Attributionstriggers ist dieses Attribut optional, und es wird ein leerer Zeichenfolgenwert verwendet, wenn es weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, z. B.:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header entsprechend antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dieselbe Funktion registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was bedeutet, dass unterschiedliche Berichte über unterschiedliche Daten generiert werden.

    Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking` {{Experimental_Inline}}

  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Vorgänge beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Vorgänge müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungstokens sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script`-Elemente geben minimal Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) weiter für Skripte, die die Standard-[CORS](/de/docs/Glossary/CORS)-Prüfungen nicht bestehen. Um Fehlerprotokollierung für Seiten zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS Einstellungen der Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für eine ausführlichere Erklärung seiner gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript ausgeführt werden soll, nachdem das Dokument geparst wurde, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d. h. für Inline-Skripte), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer`-Attribut hat keinen Effekt auf [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er das Parsing fortsetzen kann. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben ist, verhält sich das Element so, als ob nur das `async`-Attribut angegeben wäre.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Signalisiert einen Hochprioritätsabruf im Vergleich zu anderen externen Skripten.
    - `low`
      - : Signalisiert einen Niedrigprioritätsabruf im Vergleich zu anderen externen Skripten.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Abrufpriorität im Vergleich zu anderen externen Skripten.

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut nicht angegeben ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — es kann verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die keine modularen JavaScript-Codes unterstützen.
- `nonce`
  - : Eine kryptografische Zufallszahl (einmal verwendete Nummer), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) zu erlauben. Der Server muss jedes Mal einen eindeutigen Zufallswert erzeugen, wenn er eine Richtlinie überträgt. Es ist entscheidend, einen Zufallswert bereitzustellen, der nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource ansonsten trivial ist.
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von Ressourcen, die vom Skript abgerufen werden, gesendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an [Ursprünge](/de/docs/Glossary/origin) ohne [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossary/host) und [Port](/de/docs/Glossary/port).
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigierungen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für [denselben Ursprung](/de/docs/Glossary/Same-origin_policy) gesendet, aber Anfragen über Ursprungsgrenzen hinweg enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie den Ursprung des Dokuments nur als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber senden Sie es nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer Anfrage im selben Ursprung, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)) enthalten. **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, wird es eine höherstufige Referrer-Richtlinie übernehmen, d.h. eine auf das gesamte Dokument oder die Domain gesetzte. Wenn eine höherstufige Richtlinie nicht verfügbar ist, wird der leere Zeichenfolgenwert als gleichbedeutend mit `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; es kann als Alternative für das direkte Einbetten eines Skripts innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Type**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren werden ermutigt, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [im IANA-Medientypenverzeichnis aufgelistet](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importmap enthält.
        Die Importmap ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung der Skriptinhalte wird aufgeschoben.
        Die Attribute `charset` und `defer` haben keinen Effekt.
        Für Informationen zur Verwendung von `module`, siehe unseren [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
        Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für das grenzüberschreitende Abrufen.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
        Spekulationsregeln sind ein JSON-Objekt, das festlegt, welche Ressourcen vom Browser vorab abgerufen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert ein [ASCII](/de/docs/Glossary/ASCII) Groß-/Kleinschreibungs-unempfindliches Match für `utf-8` sein. Es ist nicht notwendig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichenkodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne die Attribute [`async`](#async), [`defer`](#defer) oder `type="module"`, sowie Inline-Skripte ohne das `type="module"`-Attribut, werden abgerufen und unmittelbar ausgeführt, bevor der Browser das Parsing der Seite fortsetzt.

Das Skript sollte mit dem MIME-Typ `text/javascript` ausgeliefert werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` ausgeliefert wird.
Wenn das Skript blockiert ist, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

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

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript, ohne dass die Seite während des Abrufs blockiert wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, wodurch das Rendering der Seite blockiert wird. Das bedeutet, dass der Rest des Inhalts auf der Webseite daran gehindert wird, verarbeitet und dem Benutzer angezeigt zu werden, bis das Skript fertig ist.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und nicht von einem anderen Skript auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass der DOM vorhanden ist (z. B. wenn sie eines oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptladeverfahren und was das für Ihre Seite bedeutet:

![Wie die drei Skriptladeverfahren funktionieren: Standard hat das Parsing blockiert während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsing nur für die Ausführung. Mit defer wird das Parsing nicht pausiert, aber die Ausführung erfolgt erst, nachdem alles andere geparst wurde.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version beschnitten, unter den Lizenzbedingungen [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, erzeugen alle Funktionen dieser Skripte, die sich auf `jquery` verlassen, einen Fehler, da `jquery` zum Zeitpunkt der Skriptausführung nicht definiert wird.

`async` sollte verwendet werden, wenn Sie eine Reihe von Hintergrundskripten laden müssen und Sie möchten, dass sie so schnell wie möglich einsatzbereit sind.
Zum Beispiel haben Sie vielleicht einige Spieldatendateien zu laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber vorerst möchten Sie einfach mit der Anzeige des Spielintros, der Titel und der Lobby fortfahren, ohne dass sie durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen, und werden ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass der DOM vorhanden ist (z. B. wenn sie eines oder mehrere Elemente auf der Seite ändern).

Zusammengefasst:

- `async` und `defer` weisen den Browser an, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (der DOM usw.) heruntergeladen wird, sodass der Seitenladevorgang während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie sich befinden und werden nur ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsing warten und von anderen Skripten und/oder dem DOM abhängen müssen, laden Sie sie mit `defer` und platzieren Sie ihre entsprechenden `<script>`-Elemente in der Reihenfolge, in der Sie möchten, dass der Browser sie ausführt.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](#type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Dies ermöglicht es Ihnen, Modulscripte zu verwenden, während `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitgestellt werden.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Importieren von Modulen mit Importmap

Beim Importieren von Modulen in Skripten, wenn Sie die [`type=importmap`](#importmap)-Funktion nicht nutzen, muss jedes Modul mit einem Modulspezifizierer importiert werden, der entweder eine absolute oder relative URL ist.
Im folgenden Beispiel löst sich der erste Modulspezifizierer ("./shapes/square.js") relativ zur Basis-URL des Dokuments auf, während der zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Importmap ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die bei Übereinstimmung den Text im Modulspezifizierer ersetzen kann.
Die folgende Importmap definiert Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulspezifizierer verwendet werden können.

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

Dies ermöglicht es uns, Module unter Verwendung von Namen im Modulspezifizierer (anstelle von absoluten oder relativen URLs) zu importieren.

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Für weitere Beispiele, was Sie mit Importmaps tun können, siehe den Abschnitt [Importieren von Modulen mit Importmaps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

### Einbetten von Daten in HTML

Sie können das `<script>`-Element auch verwenden, um Daten in HTML mit serverseitigem Rendering einzubetten, indem Sie im `type`-Attribut einen gültigen Nicht-JavaScript-MIME-Typ angeben.

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

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einschließen;
das Rendering der Seite wird blockiert, bis das Skript abgerufen und ausgeführt ist. Im untenstehenden Beispiel blockieren wir das Rendering auf einem asynchronen Skript,
so dass das Skript das Parsing nicht blockiert, aber garantiert vor dem Start des Renderings ausgewertet wird.

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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a>.
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
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a> akzeptiert.
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und die Erklärung der Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
