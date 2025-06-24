---
title: "<script>: Das Skriptelement"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es genutzt, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`

  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist.

    Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte bei klassischen Skripten), in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Eliminierung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut mit dem `defer`-Attribut angegeben wird, verhält sich das Element, als wäre nur das `async`-Attribut angegeben.

    Dies ist ein boolesches Attribut: Die Anwesenheit eines booleschen Attributs auf einem Element stellt den true-Wert dar, und das Fehlen des Attributs stellt den false-Wert dar.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des Headers `Attribution-Reporting-Eligible` ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt in der `fetch()`-Aufruf oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf eingefügt wurde), oder indem ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolesch, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung von Attributionsquellen oder -triggern auf demselben Server handhaben. Bei der Registrierung eines Attribution-Triggers ist diese Eigenschaft optional und es wird ein leerer String-Wert verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource sich nicht auf einem Server befindet, den Sie kontrollieren, oder Sie möchten einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung auftritt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusammen mit der Ursprungsressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die unterschiedliche Berichte über unterschiedliche Daten generieren.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstokens sein, die unten aufgeführt sind.
    - `render`: Die Darstellung von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übergeben minimale Informationen an die [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine genauere Erklärung der gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut ist gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet ist.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), es hätte in diesem Fall keine Wirkung.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Eliminierung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut mit dem `async`-Attribut angegeben wird, verhält sich das Element, als wäre nur das `async`-Attribut angegeben.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts.
    Erlaubte Werte:

    - `high`
      - : Das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten abrufen.
    - `low`
      - : Das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten abrufen.
    - `auto`
      - : Keine Vorliebe für die Abrufpriorität festlegen.
        Dies ist die Standardeinstellung.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein User-Agent verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Dieses Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut ist gesetzt, um anzugeben, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — dies kann effektiv verwendet werden, um Alternativskripte für ältere Browser bereitzustellen, die keine modularen JavaScript-Codes unterstützen.
- `nonce`
  - : Ein kryptografischer Nonce (Zahl, die einmal verwendet wird) zur Erlaubnis von Skripten in einer [script-src Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src). Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, einen Nonce bereitzustellen, der nicht erraten werden kann, da es sonst trivial wäre, die Richtlinie einer Ressource zu umgehen.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder der vom Skript abgerufenen Ressourcen gesendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleicher Ursprung")}} gesendet, aber bei Ursprungsübergreifenden Anfragen wird keine Referrer-Information übermittelt.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber sendet ihn nicht zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer gleichartigen Anfrage, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Nutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen durchleitet.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, übernimmt es eine höhere Referrer-Richtlinie, z. B. eine, die auf das gesamte Dokument oder die Domain gesetzt ist. Wenn keine höhere Richtlinie verfügbar ist, wird die leere Zeichenfolge als gleichbedeutend mit `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt den URI eines externen Skripts an; dies kann anstelle des direkten Einbettens eines Skripts innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs kann einer der folgenden sein:
    - **Attribut ist nicht gesetzt (Standard), eine leere Zeichenfolge oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [in der IANA-Medientypenspezifikation aufgelistet](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu kontrollieren, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verzögert.
        Die Attribute `charset` und `defer` haben keine Wirkung.
        Für Informationen zur Verwendung von `module` siehe unseren [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für ursprungsübergreifendes Abrufen.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert zeigt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab abgerufen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu erkennen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Falls vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}}-schreibunempfindliche Übereinstimmung für `utf-8` sein. Es ist nicht nötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichenkodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Anmerkungen

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"`-Attribute sowie Inline-Skripte ohne `type="module"`-Attribut werden abgerufen und sofort ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem MIME-Typ `text/javascript` bereitgestellt werden, aber Browser sind nachsichtig und blocken nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man ein (externes) Skript mit dem `<script>`-Element importiert:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie man ein (inline) Skript innerhalb des `<script>`-Elements einfügt:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download abgeschlossen ist, wird jedoch das Skript ausgeführt, was die Seite daran hindert, gerendert zu werden. Das bedeutet, dass der Rest des Inhalts auf der Webseite nicht verarbeitet und dem Benutzer angezeigt werden kann, bis das Skript die Ausführung beendet hat.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite modifizieren).

Hier ist eine visuelle Darstellung der verschiedenen Skript-Lademethoden und was das für Ihre Seite bedeutet:

![Wie die drei Skript-Lademethoden arbeiten: Standard blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsen nur für die Ausführung. Mit defer wird das Parsen nicht angehalten, aber die Ausführung erfolgt erst, nachdem alles andere geparst wurde.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden und in diesem Fall wird jeder Funktion in diesen Skripten, die von `jquery` abhängt, einen Fehler produzieren, weil `jquery` zum Zeitpunkt der Skriptausführung nicht definiert ist.

`async` sollte verwendet werden, wenn Sie eine Reihe von Hintergrundskripten laden möchten und Sie sie einfach so schnell wie möglich zur Verfügung haben möchten.
Zum Beispiel möchten Sie vielleicht einige Spieldateien laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber im Moment möchten Sie einfach fortfahren, das Spiel-Intro, Titel und Lobby anzuzeigen, ohne dass diese durch das Laden der Skripte blockiert werden.

Skripte, die mit dem `defer`-Attribut geladen werden (siehe unten), werden in der Reihenfolge ausgeführt, in der sie in der Seite stehen, und sobald das Skript und der Inhalt heruntergeladen wurden:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. modifizieren sie ein oder mehrere Elemente auf der Seite).

Zusammengefasst:

- `async` und `defer` weisen den Browser beide an, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM, usw.) heruntergeladen wird, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie vorliegen, und werden erst ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, sollten Sie `async` verwenden.
- Wenn Ihre Skripte auf das Parsen warten müssen und von anderen Skripten und/oder dem DOM abhängig sind, laden Sie sie mit `defer` und setzen Sie ihre entsprechenden `<script>`-Elemente in der Reihenfolge, in der Sie möchten, dass der Browser sie ausführt.

### Modul Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Dadurch können Sie Modulscripte verwenden, während Sie `nomodule`-markierte Alternativskripte für nicht unterstützende Browser bereitstellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie nicht die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Funktion verwenden, muss jedes Modul mit einem Modulspezifizierer importiert werden, der entweder eine absolute oder relative URL ist.
Im Beispiel unten ist der erste Modulspezifizierer eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importkarte ermöglicht die Bereitstellung einer Zuordnung, die, wenn sie übereinstimmt, den Text im Modulspezifizierer ersetzen kann.
Die Importkarte unten definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifizierer verwendet werden können.

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

Damit können wir Module mithilfe von Namen im Modulspezifizierer importieren (anstatt absolute oder relative URLs zu verwenden).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Weitere Beispiele dafür, was Sie mit Importkarten machen können, finden Sie im Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Moduls-Leitfaden.

### Daten in HTML einbetten

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

### Rendering blockieren, bis ein Skript abgerufen und ausgeführt wird

Sie können den `render`-Token innerhalb eines `blocking`-Attributs einfügen;
Das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im folgenden Beispiel blockieren wir das Rendern eines asynchronen Skripts,
damit das Skript das Parsen nicht blockiert, aber garantiert vor Beginn des Renderings ausgewertet wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadatainhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrase-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadatainhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrase-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und die Erklärung der Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
