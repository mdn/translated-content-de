---
title: "<script>: Das Script-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 245f255abc186f7249017b6611da50c5aae2d70f
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es verwendet, um JavaScript-Code einzubetten oder zu referenzieren. Das `<script>` Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `async`

  - : Bei klassischen Skripten, wenn das `async` Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und sofort ausgewertet, sobald es verfügbar ist.

    Bei [Modulskripten](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async` Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei Inline-Skripten) für klassische Skripte, in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer` Attribut angegeben ist, wird das Element so behandelt, als ob nur das `async` Attribut angegeben ist.

    Dies ist ein boolesches Attribut: das Vorhandensein eines booleschen Attributs an einem Element repräsentiert den wahren Wert, und das Fehlen des Attributs repräsentiert den falschen Wert.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Async-Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Skript-Ressourcenanfrage sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage gesendet wird, die die `attributionReporting` Option enthält (entweder direkt im `fetch()` Aufruf oder in einem [`Request`](/de/docs/Web/API/Request) Objekt, das in den `fetch()` Aufruf übergeben wird), oder indem ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gesendet wird, bei dem [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolesch, d.h. nur der `attributionsrc` Name. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server senden möchten, auf den das `src` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server bearbeiten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server bearbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert des `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte auf unterschiedlichen Daten einschließt.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking`

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungs-Tokens sein, die unten aufgeführt sind.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script` Elemente übermitteln minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}} Prüfungen nicht bestehen. Um Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, nutzen Sie dieses Attribut. Siehe [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für eine genauere Erklärung seiner gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut ist so gesetzt, dass es einem Browser anzeigt, dass das Skript nach dem Parsen des Dokuments ausgeführt werden soll, jedoch bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird.

    Skripte mit dem `defer` Attribut verhindern, dass das `DOMContentLoaded` Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src` Attribut fehlt (d.h. für Inline-Skripte), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer` Attribut hat keine Auswirkung auf [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer` Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `async` Attribut angegeben ist, wird das Element so behandelt, als ob nur das `async` Attribut angegeben ist.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen eines externen Skripts verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Rufen Sie das externe Skript mit hoher Priorität relativ zu anderen externen Skripten ab.
    - `low`
      - : Rufen Sie das externe Skript mit niedriger Priorität relativ zu anderen externen Skripten ab.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority) für weitere Informationen.

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src` Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut ist so gesetzt, dass es anzeigt, dass das Skript in Browsern, die [ES module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — tatsächlich kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die modulares JavaScript nicht unterstützen.
- `nonce`
  - : Eine kryptographische Nonce (nur einmal verwendete Nummer), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zuzulassen. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource ansonsten trivial ist.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn das Skript oder von dem Skript abgerufene Ressourcen abgerufen werden:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn/web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer ist auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Ursprung")}} gesendet, aber bei bereichsübergreifenden Anforderungen werden keine Referrer-Informationen enthalten.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitslevel gleich bleibt (HTTPS→HTTPS), senden Sie ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn eine Anforderung gleichen Ursprungs erfolgt, senden Sie nur den Ursprung, wenn das Protokollsicherheitslevel gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>` Element angegeben ist, wird es eine Referrer-Richtlinie auf höherer Ebene übernehmen, d.h. eine, die auf das gesamte Dokument oder die gesamte Domain festgelegt ist. Wenn keine Richtlinie auf höherer Ebene verfügbar ist, wird der leere Zeichenfolgenwert als äquivalent zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt den URI eines externen Skripts an; dies kann alternativ zum direkten Einbetten eines Skripts innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut zeigt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs kann einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
      - : Zeigt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [in der IANA-Medientypen-Spezifikation aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert zeigt an, dass der Körper des Elements eine Import-Mappingtabelle enthält.
        Die Import-Mappingtabelle ist ein JSON-Objekt, das Entwickler verwenden können, um zu kontrollieren, wie der Browser Modulspezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert werden.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verschoben.
        Die Attribute `charset` und `defer` haben keine Auswirkung.
        Für Informationen zur Verwendung von `module` siehe unseren [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
        Im Gegensatz zu klassischen Skripten benötigen Modulskripte das CORS-Protokoll für bereichsübergreifendes Abrufen.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert zeigt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab abgerufen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src` Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}} nicht fallweise-sensitive Übereinstimmung für `utf-8` sein. Es ist nicht notwendig, das `charset` Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script` Element seine Zeichenkodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type` Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type` Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Das `type` Attribut sollte stattdessen verwendet werden.

## Anmerkungen

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie Inline-Skripte ohne das `type="module"` Attribut werden sofort abgerufen und ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` geliefert wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis auf das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein (externes) Skript mit dem `<script>` Element importiert wird:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie ein (Inline-)Skript innerhalb des `<script>` Elements eingefügt wird:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async` Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Wenn der Download jedoch abgeschlossen ist, wird das Script ausgeführt, was das Rendern der Seite blockiert. Das bedeutet, dass der Rest des Inhalts auf der Webseite nicht verarbeitet und dem Benutzer angezeigt wird, bis das Script die Ausführung beendet hat.
Es gibt keine Garantie, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer` Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptlade-Methoden und was das für Ihre Seite bedeutet:

![Wie die drei Skriptlade-Methoden funktionieren: Standard hat das Parsen blockiert, während JavaScript abgerufen und ausgeführt wird. Mit async wird das Parsen nur für die Ausführung pausiert. Mit defer wird das Parsen nicht unterbrochen, aber die Ausführung erfolgt erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und zugeschnitten auf eine reduzierte Version, unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) Lizenzbedingungen._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, kann jede Funktion in diesen Skripten, die von `jquery` abhängt, einen Fehler verursachen, weil `jquery` zum Zeitpunkt der Skriptausführung nicht definiert wäre.

`async` sollte verwendet werden, wenn Sie eine Reihe von Hintergrundskripten laden möchten und Sie sie so schnell wie möglich bereitstellen möchten.
Vielleicht haben Sie zum Beispiel einige Spieldatendateien zu laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber im Moment möchten Sie einfach fortfahren, das Spielintro, Titel und Lobby anzuzeigen, ohne dass sie vom Skriptladen blockiert werden.

Skripte, die das `defer` Attribut verwenden (siehe unten), laden in der Reihenfolge, in der sie auf der Seite stehen, und führen sie aus, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Zusammenfassend:

- Sowohl `async` als auch `defer` weisen den Browser an, die Skripte in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass der Seiten-Ladevorgang während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async` Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer` Attribut werden in der Reihenfolge ihrer Position geladen und erst ausgeführt, wenn alles andere geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten und von anderen Skripten oder dem DOM abhängen müssen, laden Sie sie unter Verwendung von `defer` und platzieren Sie die entsprechenden `<script>` Elemente in der Reihenfolge, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module` Wert für das [`type`](#type) Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule` Attribut. Dies ermöglicht es Ihnen, Modulscripts zu verwenden, während Sie `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Wenn Module in Skripten importiert werden und Sie die Funktion [`type=importmap`](#importmap) nicht verwenden, muss jedes Modul mit einem Modulspezifizierer importiert werden, der entweder eine absolute oder relative URL ist.
Im untenstehenden Beispiel wird der erste Modulspezifizierer ("./shapes/square.js") relativ zur Basis-URL des Dokuments aufgelöst, während der zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Import-Mappingtabelle ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, falls sie übereinstimmt, den Text im Modulspezifizierer ersetzen kann.
Die untenstehende Import-Mappingtabelle definiert die Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulspezifizierer verwendet werden können.

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

Dies ermöglicht es uns, Module unter Verwendung von Namen im Modulspezifizierer (anstatt absolute oder relative URLs) zu importieren.

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Für weitere Beispiele, was Sie mit Import-Mappingtabellen machen können, siehe den Abschnitt [Module mit Import-Mappingtabellen importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript Module Leitfaden.

### Einbetten von Daten in HTML

Sie können das `<script>` Element auch verwenden, um Daten in HTML beim serverseitigen Rendern einzubetten, indem Sie einen gültigen Nicht-JavaScript-MIME-Typ im `type` Attribut angeben.

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

### Rendering blockieren, bis ein Skript abgerufen und ausgeführt wird

Sie können das `render` Token im `blocking` Attribut einschließen;
das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im folgenden Beispiel blockieren wir das Rendern eines async Skripts,
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalt</a>.
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
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalt</a> akzeptiert.
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
- [Flavio Copes' Artikel über effizientes Laden von JavaScript und Erklärung der Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
