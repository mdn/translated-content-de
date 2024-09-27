---
title: "<script>: Das Script-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie beispielsweise der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und [JSON](/de/docs/Glossary/JSON).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und so schnell wie möglich ausgeführt.

    Für [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und all ihre Abhängigkeiten parallel zum Parsen abgerufen und so schnell wie möglich ausgewertet.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für inline Skripte) bei klassischen Skripten, in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor das Parsen fortgesetzt wird. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async`-Attribut angegeben ist.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs auf einem Element repräsentiert den wahr-Wert, und das Fehlen des Attributs repräsentiert den falsch-Wert.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browser-Unterstützung. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} headers in der Antwort auszulösen, um eine JavaScript-basierte [Attribution-Quelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) entsprechend zu registrieren. Welcher Antwortheader gesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attribution-Quellen oder -Triggers registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der Option `attributionReporting` gesendet wird (entweder direkt im `fetch()`-Aufruf festgelegt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das an den `fetch()`-Aufruf übergeben wird), oder durch das Senden einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit aufgerufener [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anforderungsobjekt.

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolesch, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server senden möchten, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attribution-Quelle oder des Triggers auf demselben Server abwickeln. Beim Registrieren eines Attribution-Triggers ist diese Eigenschaft optional, und ein Leerstringwert wird verwendet, wenn sie weggelassen wird.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist oder Sie die Registrierung der Attribution-Quelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcennachfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zur Ursprungsressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Spezifizieren mehrerer URLs bedeutet, dass mehrere attribution sources auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte zu verschiedenen Daten beinhaltet.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking` {{Experimental_Inline}}

  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Vorgänge beim Abrufen des Skripts blockiert werden sollten. Die zu blockierenden Vorgänge müssen eine Liste von mit Leerzeichen getrennten Blockier-Token sein, die unten aufgeführt sind.
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script`-Elemente übermitteln minimale Informationen an `window.onerror` für Skripte, die die standardmäßigen [CORS](/de/docs/Glossary/CORS)-Prüfungen nicht bestehen. Um die Fehlerprotokollierung für Sites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für eine genauere Erklärung der gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses, ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für inline Skripte), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer`-Attribut hat keine Auswirkung auf [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig zurückgestellt.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor das Parsen fortgesetzt wird. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async`-Attribut angegeben ist.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen eines externen Skriptes verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Signalisiert einen Abruf mit hoher Priorität im Vergleich zu anderen externen Skripten.
    - `low`
      - : Signalisiert einen Abruf mit niedriger Priorität im Vergleich zu anderen externen Skripten.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Abrufpriorität im Vergleich zu anderen externen Skripten.

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut nicht spezifiziert ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — im Wesentlichen kann es verwendet werden, um Fallback-Skripte an ältere Browser zu liefern, die kein modulares JavaScript unterstützen.
- `nonce`
  - : Ein kryptografischer Nonce (einmal verwendete Zahl), um Skripte innerhalb einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) zu ermöglichen. Der Server muss einen eindeutigen Nonce-Wert generieren, jedes Mal, wenn er eine Richtlinie überträgt. Es ist entscheidend, einen Nonce bereitzustellen, der nicht erraten werden kann, da andernfalls das Umgehen der Richtlinie trivial wäre.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von Ressourcen, die vom Skript abgerufen werden, gesendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an [Origin](/de/docs/Glossary/origin)s ohne [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossary/host) und [Port](/de/docs/Glossary/port).
    - `origin-when-cross-origin`: Der Referrer, der an andere Origins gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für [Same-Origin](/de/docs/Glossary/Same-origin_policy) gesendet, aber Anfragen über verschiedene Origins enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Origin des Dokuments als Referrer, wenn das Protokollsicherheitslevel gleich bleibt (HTTPS→HTTPS), sendet aber nichts an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei derselben Origin-Anfrage, sendet nur den Origin, wenn das Protokollsicherheitslevel gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Origin _und_ den Pfad beinhalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leakt.

    > [!NOTE]
    > Ein Leerstringwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine höhere Referrer-Richtlinie, d.h. eine, die im gesamten Dokument oder auf Domainebene festgelegt ist. Wenn keine höhere Richtlinie verfügbar ist, wird der Leerstring als äquivalent zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut spezifiziert die URI eines externen Skriptes; dies kann als Alternative zum direkten Einbetten eines Skripts in einem Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an. Der Wert dieses Attributs ist einer der folgenden:

    - **Attribut ist nicht gesetzt (Standard), ein Leerstring oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält. Autoren wird geraten, das Attribut wegzulassen, wenn sich das Skript auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben. JavaScript-MIME-Typen sind [im IANA-Medientypenverzeichnis aufgelistet](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält. Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu kontrollieren, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird. Die Verarbeitung des Skriptinhalts wird verzögert. Die Attribute `charset` und `defer` haben keine Auswirkung. Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden. Anders als klassische Skripte benötigen Modul-Skripte das CORS-Protokoll für die abfrageübergreifende Abrufung.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält. Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab abgerufen oder gerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet. Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen. Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss der Wert eine [ASCII](/de/docs/Glossary/ASCII)-Groß-/Kleinschreibung-übereinstimmung für den Text `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"`-Attribute sowie inline Skripte ohne das `type="module"`-Attribut werden sofort abgerufen und ausgeführt, bevor der Browser die Seite weiter parst.

Das Skript sollte mit dem `text/javascript`-MIME-Typ bereitgestellt werden, aber Browser sind tolerant und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert ist, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Nutzung

Diese Beispiele zeigen, wie man ein (externes) Script mit dem `<script>`-Element importiert.

```html
<script src="javascript.js"></script>
```

Und die folgenden Beispiele zeigen, wie man ein (inline) Script innerhalb des `<script>`-Elements platziert.

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript, ohne die Seite zu blockieren, während das Skript abgerufen wird. Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Anzeige der Seite blockiert. Das bedeutet, dass der Rest der Inhalte auf der Webseite verhindert wird, verarbeitet und dem Benutzer angezeigt zu werden, bis das Skript fertig ist. Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden. Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen. Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte von einem vorhandenen DOM abhängig sind (z.B. wenn sie eines oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptlademethoden und was das für Ihre Seite bedeutet:

![So funktionieren die drei Skriptsladeverfahren: Standardmäßig wird das Parsen blockiert, während JavaScript abgerufen und ausgeführt wird. Mit async wird das Parsen nur für die Ausführung pausiert. Mit defer wird das Parsen nicht pausiert, sondern die Ausführung erfolgt erst, nachdem alles andere geparst wurde.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version beschnitten, unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)-Lizenzbedingungen._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge der geladenen Skripte verlassen. `jquery.js` könnte vor oder nach `script2.js` und `script3.js` geladen werden und in diesem Fall führen Funktionen in diesen Skripten, die von `jquery` abhängen, zu einem Fehler, da `jquery` zum Zeitpunkt der Skriptausführung nicht definiert sein wird.

`async` sollte verwendet werden, wenn Sie eine Reihe von Hintergrundskripten laden müssen und Sie diese so schnell wie möglich bereitstellen möchten. Zum Beispiel, vielleicht sollten einige Spieldatendateien geladen werden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber vorerst möchten Sie einfach mit der Anzeige des Spiel-Intros, der Titel und der Lobby fortfahren, ohne dass diese durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie auf der Seite angegeben sind, und werden sie ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird. Sie werden erst ausgeführt, wenn der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte von einem vorhandenen DOM abhängig sind (z.B. wenn sie eines oder mehrere Elemente auf der Seite ändern).

Zusammengefasst:

- `async` und `defer` weisen den Browser beide an, das Skript/ die Skripte in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist. Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie angegeben sind, und führen erst aus, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und sie keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten müssen und von anderen Skripten und/oder einem vorhandenen DOM abhängig sind, laden Sie sie mit `defer` und platzieren Sie ihre entsprechenden `<script>`-Elemente in der Reihenfolge, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](#type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Das ermöglicht Ihnen, Modul-Skripte zu verwenden und gleichzeitig mit `nomodule` markierte Fallback-Skripte für nicht unterstützende Browser bereitzustellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Wenn Module in Skripten importiert werden und Sie die [`type=importmap`](#importmap)-Funktion nicht verwenden, muss jedes Modul mit einem Modul-Spezifikator importiert werden, der entweder eine absolute oder relative URL ist. Im folgenden Beispiel löst sich der erste Modul-Spezifikator ("./shapes/square.js") relativ zur Basis-URL des Dokuments auf, während der zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Importkarte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifikator ersetzen kann. Die untenstehende Importkarte definiert Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

Dies erlaubt uns, Module mit Namen im Modulspezifikator zu importieren (anstatt absolute oder relative URLs zu verwenden).

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Für weitere Beispiele, was Sie mit Importkarten tun können, siehe den [Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)-Abschnitt im JavaScript-Module-Leitfaden.

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

### Rendering blockieren, bis ein Skript geholt und ausgeführt wird

Sie können das `render`-Token innerhalb eines `blocking`-Attributs enthalten; das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im folgenden Beispiel blockieren wir das Rendering für ein asynchrones Skript, sodass das Skript das Parsen nicht blockiert, aber vor dem Start des Renderings ausgewertet wird.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fluss-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungs-Inhalt</a>.
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
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadaten-Inhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungs-Inhalt</a> akzeptiert.
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
- [Artikel von Flavio Copes zum effizienten Laden von JavaScript und Erklärung der Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden
