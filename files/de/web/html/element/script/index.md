---
title: "<script>: Das Skript-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>` Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Für klassische Skripte, wenn das `async` Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen geladen und ausgewertet, sobald es verfügbar ist.

    Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) wird, wenn das `async` Attribut vorhanden ist, das Skript sowie alle seine Abhängigkeiten parallel zum Parsen geladen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src` Attribut fehlt (d.h. für Inline-Skripte in klassischen Skripten), in diesem Fall hätte es keinen Effekt.

    Dieses Attribut erlaubt die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer` Attribut angegeben wird, wird das Element so behandelt, als ob nur das `async` Attribut angegeben wäre.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs auf einem Element repräsentiert den Wert "wahr", und das Fehlen des Attributs repräsentiert den Wert "falsch".

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browser-Unterstützung. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Skript-Ressourcenanfrage senden soll. Auf Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage mit der `attributionReporting` Option gesendet wird (entweder direkt im `fetch()` Aufruf oder auf einem [`Request`](/de/docs/Web/API/Request) Objekt, das in den `fetch()` Aufruf übergeben wird) oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) aufgerufen wird, die auf dem Anforderungsobjekt ausgeführt wird.

    Es gibt zwei Versionen dieses Attributs, die Sie setzen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server senden möchten, auf den das `src` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server behandeln. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer Stringwert wird verwendet, wenn sie weggelassen wird.
    - Ein Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten die Registrierung der Attributionsquelle auf einem anderen Server verwalten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die darin bestehen, unterschiedliche Berichte über verschiedene Daten zu erstellen.

    Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten blockierenden Tokens sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script` Elemente übermitteln minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die standardmäßigen {{Glossary("CORS", "CORS")}} Checks nicht bestehen. Um Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für eine ausführlichere Erklärung der gültigen Argumente.
- `defer`

  - : Dieses boolesche Attribut wird gesetzt, um dem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, jedoch vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignisses, ausgeführt werden soll.

    Skripte mit dem `defer` Attribut verhindern, dass das `DOMContentLoaded` Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet ist.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src` Attribut fehlt (d.h. für Inline-Skripte), in diesem Fall hätte es keinen Effekt.
    >
    > Das `defer` Attribut hat keine Wirkung auf [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig zurückgestellt.

    Skripte mit dem `defer` Attribut werden in der Reihenfolge, in der sie im Dokument erscheinen, ausgeführt.

    Dieses Attribut erlaubt die Beseitigung von **parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async` Attribut angegeben wird, wird das Element so behandelt, als ob nur das `async` Attribut angegeben wäre.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die verwendet werden soll, wenn ein externes Skript abgerufen wird.
    Zulässige Werte:

    - `high`
      - : Holen Sie das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten ab.
    - `low`
      - : Holen Sie das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten ab.
    - `auto`
      - : Setzen Sie keine Präferenz für die Abrufpriorität.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um sicherzustellen, dass eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Das Attribut darf nicht angegeben werden, wenn das `src` Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript nicht in Browsern ausgeführt werden soll, die [ES Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — dies kann in effekt dadurch verwendet werden, um älteren Browsern, die keinen modularen JavaScript-Code unterstützen, Fallback-Skripte anzubieten.
- `nonce`
  - : Eine kryptographische Einmalzahl (nonce), die Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) erlaubt. Der Server muss einen eindeutigen Nonce-Wert generieren, jedes Mal wenn er eine Richtlinie überträgt. Es ist entscheidend, einen Nonce zu liefern, der nicht erraten werden kann, da ein Umgehen der Richtlinie eines Ressourcs sonst trivial wäre.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn das Skript oder durch das Skript abgerufene Ressourcen abgerufen werden:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an Ursprünge gesendet, die kein {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) verwenden.
    - `origin`: Der gesendete Referrer ist auf den Ursprung der referenzierenden Seite begrenzt: ihr [Scheme](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer ist auf das Scheme, den Host und den Port begrenzt. Navigationen auf dem gleichen Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für den {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber bei anforderungen über Kreuz fehlen Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Anfrage an denselben Ursprung erfolgt, nur den Ursprung senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS) und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weiterleitet.

    > [!NOTE]
    > Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>` Element festgelegt ist, übernimmt es eine höherstufige Referrer-Politik, d.h. eine, die für das gesamte Dokument oder die gesamte Domain festgelegt ist. Wenn eine höherstufige Politik nicht verfügbar ist, wird der leere String als gleichwertig zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zum direkten Einbetten eines Skripts innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs kann einer der folgenden sein:

    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript JavaScript-Code enthält, anstatt einen MIME-Typ anzugeben.
        JavaScript MIME-Typen sind im [IANA Media Types Specification](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) aufgelistet.
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importmap enthält.
        Die Importmap ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird zurückgestellt.
        Die Attribute `charset` und `defer` haben keine Wirkung.
        Weitere Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für abfrageübergreifendes Laden.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src` Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Falls vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}} fallunempfindliche Übereinstimmung zu `utf-8` sein. Es ist nicht erforderlich, das `charset` Attribut anzugeben, da Dokumente UTF-8 verwenden müssen, und das `script` Element übernimmt die Zeichencodierung des Dokuments.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type` Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type` Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Das `type` Attribut sollte stattdessen verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie Inline-Skripte ohne das `type="module"` Attribut werden unmittelbar abgerufen und ausgeführt, bevor der Browser die Seite weiter parst.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` geliefert wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie ein (externes) Skript mit dem `<script>` Element importiert wird:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie ein (Inline-) Skript im `<script>` Element platziert wird:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async` Attribut geladen werden, laden das Skript, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was das Rendern der Seite blockiert. Das bedeutet, dass der Rest der Inhalte auf der Webseite nicht verarbeitet und dem Benutzer angezeigt wird, bis das Skript fertig ausgeführt ist.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer` Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z.B. wenn sie eines oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptladearten und was das für Ihre Seite bedeutet:

![Wie die drei Skriptladearten funktionieren: Standard blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Mit async wird nur das Parsen für die Ausführung unterbrochen. Mit defer wird das Parsen nicht unterbrochen, aber die Ausführung erfolgt erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Wenn Sie beispielsweise die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

können Sie sich nicht darauf verlassen, in welcher Reihenfolge die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, werden alle Funktionen in diesen Skripten, die von `jquery` abhängen, einen Fehler erzeugen, da `jquery` nicht definiert ist, wenn das Skript ausgeführt wird.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte zum Laden haben und sie einfach so schnell wie möglich in Position bringen möchten.
Beispielsweise könnten Sie einige Spieledateien haben, die geladen werden müssen, wenn das Spiel tatsächlich beginnt, aber vorerst möchten Sie einfach mit der Anzeige des Spieleintros, der Titel und der Lobby fortfahren, ohne dass sie durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer` Attribut (siehe unten) geladen werden, werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen, und werden ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bis der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z.B. wenn sie eines oder mehrere Elemente auf der Seite ändern).

Zusammenfassend:

- `async` und `defer` weisen beide den Browser an, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) heruntergeladen wird, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async` Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer` Attribut werden in der Reihenfolge geladen, in der sie auftreten, und werden erst ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten sollen und von anderen Skripten und/oder dem DOM abhängen, laden Sie sie mit `defer` und platzieren Sie ihre entsprechenden `<script>` Elemente in der Reihenfolge, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module` Wert für das [`type`](/de/docs/Web/HTML/Element/script/type) Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule` Attribut. Das ermöglicht es Ihnen, Modul-Skripte zu verwenden und gleichzeitig `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser zu bieten.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Importmaps importieren

Beim Importieren von Modulen in Skripten, wenn Sie die [`type=importmap`](/de/docs/Web/HTML/Element/script/type/importmap) Funktion nicht verwenden, muss jedes Modul mit einem Modul-Spezifizierer importiert werden, der entweder eine absolute oder relative URL ist.
Im Beispiel unten wird der erste Modul-Spezifizierer ("./shapes/square.js") relativ zur Basis-URL des Dokuments aufgelöst, während der zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Importmap ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, falls sie übereinstimmt, den Text im Modul-Spezifizierer ersetzen kann.
Die Importmap unten definiert die Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulspezifizierer verwendet werden können.

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

Dadurch können wir Module mit Namen im Modulspezifizierer (anstatt absoluter oder relativer URL) importieren.

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Weitere Beispiele, was Sie mit Importmaps machen können, finden Sie im Abschnitt [Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden für JavaScript-Module.

### Einbetten von Daten in HTML

Sie können das `<script>` Element auch verwenden, um Daten in HTML mit serverseitigem Rendering einzubetten, indem Sie einen gültigen Nicht-JavaScript MIME-Typ im `type` Attribut angeben.

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

### Rendern blockieren, bis ein Skript abgerufen und ausgeführt wurde

Sie können das `render` Token innerhalb eines `blocking` Attributs einschließen;
das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wurde. Im Beispiel unten blockieren wir das Rendern eines asynchronen Skripts,
sodass das Skript das Parsen nicht blockiert, aber garantiert ausgewertet wurde, bevor das Rendering beginnt.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a>.
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
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a> akzeptiert.
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und die Erklärung der Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
