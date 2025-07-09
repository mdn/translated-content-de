---
title: "<script>: Das Skript-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<script>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird es verwendet, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie zum Beispiel der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- `async`
  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und so schnell wie möglich ausgewertet.

    Für [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei Inline-Skripten) für klassische Skripte, in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Beseitigung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben ist, wird das Element so agieren, als ob nur das `async`-Attribut angegeben ist.

    Dies ist ein boolesches Attribut: die Anwesenheit eines booleschen Attributs an einem Element repräsentiert den Wert true, und das Fehlen des Attributs repräsentiert den Wert false.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Anmerkungen zum Browser-Support. Siehe auch [Asynchrone Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) entsprechend zu registrieren. Welcher Antwort-Header zurückgesendet wird, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage gesendet wird, die die Option `attributionReporting` enthält (entweder direkt im `fetch()`-Aufruf oder in einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Anruf übergeben wird), oder indem eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) auf dem Anfrageobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an den gleichen Server gesendet wird, auf den das `src`-Attribut verweist. Das ist in Ordnung, wenn Sie die Registrierung von Attributionsquellen oder Triggern auf demselben Server durchführen. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie die Registrierung der Attributionsquelle auf einem anderen Server durchführen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zur Ursprungsressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, wie es zur Registrierung notwendig ist.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die unterschiedliche Berichte über verschiedene Daten generieren.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Die Operationen, die blockiert werden sollen, müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungstokens sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übermitteln nur minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die Standard- {{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um die Fehlerprotokollierung für Sites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Settings-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine ausführlichere Erklärung seiner gültigen Argumente.
- `defer`
  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und vollständig ausgewertet ist.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei Inline-Skripten), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben ist, wird das Element so agieren, als ob nur das `async`-Attribut angegeben ist.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts verwendet werden soll.
    Zulässige Werte:
    - `high`
      - : Abrufen des externen Skripts mit hoher Priorität im Verhältnis zu anderen externen Skripten.
    - `low`
      - : Abrufen des externen Skripts mit niedriger Priorität im Verhältnis zu anderen externen Skripten.
    - `auto`
      - : Kein Präferenz für die Abrufpriorität festlegen.
        Dies ist die Standardeinstellung.
        Sie wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority) für weitere Informationen.

- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulationen ausgeliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — dies kann effektiv dazu verwendet werden, Fallback-Skripte an ältere Browser zu liefern, die modularen JavaScript-Code nicht unterstützen.
- `nonce`
  - : Eine kryptografische einmalige Nummer, um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zuzulassen. Der Server muss bei jeder Übertragung einer Richtlinie einen einzigartigen Nonce-Wert erzeugen. Es ist entscheidend, eine Nonce anzugeben, die nicht erraten werden kann, da sonst das Umgehen der Ressourcenrichtlinie trivial wäre.
- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von durch das Skript abgerufenen Ressourcen gesendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt sein: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartigen Ursprung")}} gesendet, aber cross-origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie ihn jedoch nicht an eine weniger sichere Destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei der Durchführung einer Anfrage zum selben Ursprung, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an eine weniger sichere Destination (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

    > [!NOTE]
    > Ein leerer String-Wert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wird `referrerpolicy` nicht explizit am `<script>`-Element angegeben, übernimmt es eine höherstufige Referrer-Richtlinie, d.h. eine, die auf das gesamte Dokument oder die Domain gesetzt ist. Wenn eine höherstufige Richtlinie nicht verfügbar ist, wird der leere String als äquivalent zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zur direkten Einbettung eines Skripts in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut zeigt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:
    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird geraten, das Attribut wegzulassen, wenn das Skript JavaScript-Code betrifft, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [im IANA-Medientypen-Spezifikation](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) aufgelistet.
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung der Skriptinhalte wird verzögert.
        Die Attribute `charset` und `defer` haben keine Wirkung.
        Für Informationen zur Verwendung von `module` siehe unseren [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für das Abrufen über Ursprünge hinweg.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert ein {{Glossary("ASCII", "ASCII")}} kleinbuchstabensensitiver Vergleich zu `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Anmerkungen

Skripte ohne die Attribute [`async`](#async), [`defer`](#defer) oder `type="module"`, sowie Inline-Skripte ohne das Attribut `type="module"`, werden sofort abgerufen und ausgeführt, bevor der Browser die Seite weiter parsiert.

Das Skript sollte mit dem `text/javascript`-MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein (externes) Skript mit dem `<script>`-Element importiert wird:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie ein (Inline-)Skript innerhalb des `<script>`-Elements eingebettet wird:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Seite vom Rendern abhält. Das bedeutet, dass der verbleibende Inhalt auf der Webseite nicht weiterverarbeitet und dem Benutzer angezeigt wird, bis das Skript fertig ausgeführt wird.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander laufen und nicht von anderen Skripten auf der Seite abhängen.

Scripts, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden erst ausgeführt, wenn der Seiteninhalt vollständig geladen ist, was nützlich ist, wenn Ihre Skripte darauf angewiesen sind, dass das DOM vorhanden ist (z.B. wenn sie ein oder mehrere Elemente auf der Seite verändern).

Hier ist eine visuelle Darstellung der verschiedenen Skriptladeverfahren und was das für Ihre Seite bedeutet:

![Wie die drei Skriptladeverfahren funktionieren: Standard blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Bei async pausiert das Parsen nur für die Ausführung. Mit defer wird das Parsen nicht pausiert, aber die Ausführung erfolgt erst, nachdem alles andere geparst wurde.](async-defer.jpg)

_Dieses Bild ist aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie folgende Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge der Skriptladungen verlassen.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden, und wenn dies der Fall ist, werden alle Funktionen in diesen Skripten, die von `jquery` abhängen, einen Fehler verursachen, weil `jquery` zum Zeitpunkt der Skriptausführung nicht definiert ist.

`async` sollte verwendet werden, wenn Sie eine Vielzahl von Hintergrundskripten laden möchten und einfach nur ihre Platzierung so schnell wie möglich erreichen wollen.
Zum Beispiel möchten Sie vielleicht einige Spieldateien laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber derzeit möchten Sie nur das Spielintro, die Titel und das Lobby anzeigen, ohne dass diese durch das Laden von Skripten blockiert werden.

Skripte, die das `defer`-Attribut verwenden (siehe unten), werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen, und werden ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bevor der Seiteninhalt vollständig geladen ist, was nützlich ist, wenn Ihre Skripte darauf angewiesen sind, dass das DOM vorhanden ist (z.B. wenn sie ein oder mehrere Elemente auf der Seite verändern).

Zusammengefasst:

- `async` und `defer` weisen den Browser beide an, das/die Skript(e) in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM, etc.) heruntergeladen wird, sodass das Laden der Seite während des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie sind, und werden nur ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden müssen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte auf das Parsen warten müssen und von anderen Skripten und/oder dem DOM abhängen, laden Sie sie mit `defer` und platzieren Sie die entsprechenden `<script>`-Elemente in der Reihenfolge, in der Sie möchten, dass der Browser sie ausführt.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Dies ermöglicht die Verwendung von Modulscripten, während `nomodule`-markierte Fallback-Skripten für nicht unterstützende Browser bereitgestellt werden.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Importieren von Modulen mit importmap

Beim Importieren von Modulen in Skripten, wenn Sie nicht die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) Funktion verwenden, dann muss jedes Modul unter Verwendung eines Modulspezifikators importiert werden, der entweder eine absolute oder relative URL ist.
Im Beispiel unten ist der erste Modulspezifikator eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importkarte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifikator ersetzen kann.
Die Importkarte unten definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

Dies ermöglicht es uns, Module unter Verwendung von Namen im Modulspezifikator zu importieren (anstatt absoluter oder relativer URLs).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importkarten tun können, siehe den Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Leitfaden für Module.

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

### Blockieren des Renderns, bis ein Skript abgerufen und ausgeführt wird

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einfügen;
das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im Beispiel unten blockieren wir das Rendern bei einem asynchronen Skript,
sodass das Skript das Parsen nicht blockiert, aber garantiert ist, dass es bewertet wird, bevor das Rendern beginnt.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Inhaltsmetadaten</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungskontext</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript, wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadaten-Inhalte</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungskontext</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und die Unterschiede zwischen `async` und `defer` erklärend](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
