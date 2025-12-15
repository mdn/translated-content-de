---
title: "<script>: Das Skript-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Das **`<script>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird dies verwendet, um JavaScript-Code einzubetten oder zu referenzieren. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL Shader Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`
  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist.

    Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für inline Skripte) bei klassischen Skripten, da es in diesem Fall keine Wirkung hätte.

    Dieses Attribut ermöglicht die Eliminierung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element so, als ob nur das `async`-Attribut angegeben wäre.

    Dies ist ein boolesches Attribut: das Vorhandensein eines booleschen Attributs auf einem Element repräsentiert den Wahrheitswert, und das Fehlen des Attributs repräsentiert den Falschwert.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Async scripts for asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser eine {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skript-Ressourcenanfrage sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder Trigger durch das Senden einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage registriert werden, die die `attributionReporting`-Option enthält (entweder direkt auf dem `fetch()`-Aufruf gesetzt oder auf einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder durch das Senden einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), das auf dem Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server behandeln. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn er weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server behandeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressource angefordert wird, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsort der Ressource an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header entsprechend antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen von Berichten zu unterschiedlichen Daten erfordert.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen blockiert werden sollen, bis das Skript ausgeführt wurde. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken sein. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können möglicherweise das Rendering blockieren. Skripte blockieren standardmäßig nicht das Rendern; wenn ein `script`-Element nicht `type="module"`, `async` oder `defer` enthält, blockiert es _parsing_, nicht _rendering_. Wenn ein solches `script`-Element dynamisch über Skript hinzugefügt wird, müssen Sie `blocking = "render"` setzen, damit es das Rendern blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente geben minimale Informationen an das [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die Standard-{{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um das Fehlerprotokollieren für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine ausführlichere Erklärung seiner gültigen Argumente.
- `defer`
  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Events ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Event ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für inline Skripte), da es in diesem Fall keine Wirkung hätte.
    >
    > Das `defer`-Attribut hat keine Auswirkungen auf [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Eliminierung von **Parser-blockierendem JavaScript**, wo der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, verhält sich das Element so, als ob nur das `async`-Attribut angegeben wäre.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts. Erlaubte Werte:
    - `high`
      - : Abrufen des externen Skripts mit hoher Priorität im Verhältnis zu anderen externen Skripten.
    - `low`
      - : Abrufen des externen Skripts mit niedriger Priorität im Verhältnis zu anderen externen Skripten.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulationen geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzugeben, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — effektiv kann dies verwendet werden, um Fallback-Skripte an ältere Browser zu liefern, die kein modulares JavaScript unterstützen.
- `nonce`
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} (nur einmal verwendete Nummer) zur Erlaubnis von Skripten in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src). Der Server muss bei jeder Übermittlung einer Richtlinie einen einzigartigen Nonce-Wert erzeugen. Es ist wichtig, eine Nonce bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource sonst trivial ist.
- `referrerpolicy`
  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder von durch das Skript abgerufenen Ressourcen gesendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite begrenzt: sein [scheme](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "host")}} und {{Glossary("port", "port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Scheme, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber Anfragen von Ursprüngen werden keine Referrerinformationen enthalten.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Zieladresse senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden bei einer Anfrage desselben Ursprungs, nur den Ursprung senden, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), und keinen Header an eine weniger sichere Zieladresse senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leckt.

    > [!NOTE]
    > Ein Leerzeichenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit auf dem `<script>`-Element angegeben ist, wird es eine höhere Referrer-Richtlinie übernehmen, d.h. eine, die auf das gesamte Dokument oder die Domain gesetzt ist. Wenn keine höhere Richtlinie verfügbar ist, wird das leere Zeichen als gleichwertig mit `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt den URI eines externen Skripts an; dies kann als Alternative zur direkten Einbettung eines Skripts innerhalb eines Dokuments verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut gibt den Typ des repräsentierten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:
    - **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Die Autoren werden ermutigt, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript MIME-Typen sind [aufgeführt in der IANA Medientypen-Spezifikation](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu kontrollieren, wie der Browser Modulspezifikatoren auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert werden.
    - `module`
      - : Dieser Wert führt dazu, dass der Code als ein JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verzögert.
        Die `charset`- und `defer`-Attribute haben keine Wirkung.
        Für Informationen zur Verwendung von `module`, siehe unseren [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für das Abrufen von Ursprüngen.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorab gerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu bezeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}} Groß-/Kleinschreibung-unabhängige Übereinstimmung für `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden jedoch die möglichen Werte dieses Attributs nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute, sowie inlineskripte ohne das `type="module"` Attribut, werden sofort abgerufen und ausgeführt, bevor der Browser die Seite weiter parst.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man ein (externes) Skript unter Verwendung des `<script>`-Elements importiert:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie man ein (Inline-) Skript innerhalb des `<script>`-Elements platziert:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Seite am Rendern hindert. Das bedeutet, dass der Rest des Inhalts der Webseite für den Benutzer nicht verarbeitet oder angezeigt wird, bis das Skript fertig ausgeführt ist.
Es gibt keine Garantie, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und nicht von einem anderen Skript auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, werden in der Reihenfolge geladen, in der sie auf der Seite erscheinen.
Sie werden nicht ausgeführt, bevor der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte von einem vorliegenden DOM abhängig sind (z.B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Hier ist eine visuelle Darstellung der verschiedenen Skript-Lademethoden und was das für Ihre Seite bedeutet:

![Wie die drei Skript-Lademethoden funktionieren: Standard hat Parsing blockiert, während JavaScript abgerufen und ausgeführt wird. Mit async wird das Parsen nur für die Ausführung pausiert. Mit defer wird das Parsen nicht angehalten, aber die Ausführung erfolgt erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Zum Beispiel, wenn Sie die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht darauf verlassen, in welcher Reihenfolge die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden und wenn dies der Fall ist, führen alle Funktionen in diesen Skripten, die von `jquery` abhängen, zu einem Fehler, da `jquery` nicht definiert ist, wenn das Skript ausgeführt wird.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte zu laden haben und Sie sie einfach so schnell wie möglich an Ort und Stelle bringen möchten.
Zum Beispiel möchten Sie möglicherweise einige Spieldateien laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber für jetzt möchten Sie einfach mit der Anzeige des Spieleintros, der Titel und der Lobby fortfahren, ohne dass diese durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer`-Attribut (siehe unten) geladen werden, werden in der Reihenfolge ausgeführt, in der sie auf der Seite erscheinen und sie ausführen, sobald das Skript und der Inhalt heruntergeladen wurden:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und dass `script2.js` vor `script3.js` geladen wird.
Sie werden nicht ausgeführt, bevor der gesamte Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte von einem vorliegenden DOM abhängig sind (z.B. wenn sie ein oder mehrere Elemente auf der Seite ändern).

Zusammengefasst:

- `async` und `defer` weisen den Browser an, das Skript/die Skripte in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM, usw.) heruntergeladen wird, sodass das Laden der Seite im Verlauf des Abrufprozesses nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie sich befinden, und werden erst ausgeführt, wenn alles fertig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, dann verwenden Sie `async`.
- Wenn Ihre Skripte warten müssen, bis das Parsen abgeschlossen ist und abhängen von anderen Skripten und/oder dem DOM, laden Sie sie mit `defer` und platzieren Sie die entsprechenden `<script>`-Elemente in der Reihenfolge, in der Sie möchten, dass der Browser sie ausführt.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Dies ermöglicht es Ihnen, Modulscripte zu verwenden und gleichzeitig `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitzustellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Funktion nicht verwenden, muss jedes Modul mit einem Modulspezifikator importiert werden, der entweder eine absolute oder relative URL ist.
Im folgenden Beispiel ist der erste Modulspezifikator eine absolute URL, während die zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importmap ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt, den Text im Modulspezifikator ersetzen kann.
Die untenstehende Importmap definiert die Schlüssel `circle` und `square`, die als Aliase für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

Dies ermöglicht es uns, Module unter Verwendung von Namen im Modulspezifikator zu importieren (anstatt absolute oder relative URLs).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importkarten machen können, siehe den Abschnitt [Importing modules using import maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Modulleitfaden.

### Einbetten von Daten in HTML

Sie können das `<script>`-Element auch verwenden, um Daten in HTML mit serverseitigem Rendering einzubetten, indem Sie einen gültigen nicht-JavaScript-MIME-Typ im `type`-Attribut angeben.

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

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einfügen;
das Rendern der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im folgenden Beispiel blockieren wir das Rendern eines async-Skripts,
damit das Skript das Parsen nicht blockiert, aber garantiert vor dem Start des Renderns ausgewertet wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a> akzeptiert.
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und das Erklären der Unterschiede zwischen `async` und `defer`](https://thevalleyofcode.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
