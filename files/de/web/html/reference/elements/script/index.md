---
title: "<script>: Das Script-Element"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Das **`<script>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um führbaren Code oder Daten einzubetten; üblicherweise wird es zum Einbetten oder Verweisen auf JavaScript-Code verwendet. Das `<script>`-Element kann auch mit anderen Sprachen verwendet werden, wie der GLSL-Shader-Programmiersprache von [WebGL](/de/docs/Web/API/WebGL_API) und {{Glossary("JSON", "JSON")}}.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `async`
  - : Für klassische Skripte, wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgeführt, sobald es verfügbar ist.

    Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules), wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgeführt, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte) bei klassischen Skripten, da es in diesem Fall keine Wirkung hätte.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, wo der Browser Skripte laden und ausführen müsste, bevor das Parsen fortgesetzt wird. `defer` hat in diesem Fall einen ähnlichen Effekt.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, verhält sich das Element, als ob nur das `async`-Attribut angegeben wäre.

    Dies ist ein boolesches Attribut: das Vorhandensein eines booleschen Attributs auf einem Element stellt den Wert "wahr" dar, und das Fehlen des Attributs stellt den Wert "falsch" dar.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Hinweise zur Browserunterstützung. Siehe auch [Async scripts für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser ein {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skript-Ressourcenanforderung sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Zuweisungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Zuweisungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des Attributs `Attribution-Reporting-Eligible` ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Zuweisungsquellen oder -auslöser registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die `attributionReporting`-Option enthält (entweder direkt im `fetch()`-Aufruf oder in einem [`Request`](/de/docs/Web/API/Request)-Objekt, das im `fetch()`-Aufruf übergeben wird), oder durch Senden eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), das beim Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:
    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header zum gleichen Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Zuweisungsquelle oder des Auslösers auf demselben Server verwalten. Bei der Registrierung eines Zuweisungsauslösers ist diese Eigenschaft optional, und ein Leerwert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, z. B.:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server unter Ihrer Kontrolle liegt oder Sie die Zuweisungsquelle auf einem anderen Server registrieren möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsserver gesendet. Diese URLs können dann mit einem passenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Zuweisungsquellen für dasselbe Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, für die Sie den Erfolg messen möchten, die das Erstellen verschiedener Berichte über verschiedene Daten umfassen.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `blocking`
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen blockiert werden sollen, bis das Skript ausgeführt wurde. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken sein. Derzeit gibt es nur ein Token:
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können möglicherweise das Rendering blockieren. Skripte blockieren standardmäßig nicht das Rendering; wenn ein `script`-Element nicht `type="module"`, `async` oder `defer` enthält, blockiert es _parsing_, nicht _rendering_. Wenn ein solches `script`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie `blocking = "render"` setzen, damit es das Rendering blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Normale `script`-Elemente übergeben minimale Informationen an [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die Standard-{{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Verwenden Sie dieses Attribut, um Fehlerprotokollierung für Websites zuzulassen, die eine separate Domain für statische Medien verwenden. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für eine ausführlichere Erklärung der gültigen Argumente.
- `defer`
  - : Dieses boolesche Attribut wird gesetzt, um einem Browser anzuzeigen, dass das Skript ausgeführt werden soll, nachdem das Dokument analysiert wurde, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), da es in diesem Fall keine Wirkung hätte.
    >
    > Das `defer`-Attribut hat keine Wirkung auf [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Beseitigung von **parser-blockierendem JavaScript**, wo der Browser Skripte laden und ausführen müsste, bevor er mit dem Parsen fortfahren kann. `async` hat in diesem Fall einen ähnlichen Effekt.

    Wird das Attribut zusammen mit dem `async`-Attribut angegeben, verhält sich das Element, als ob nur das `async`-Attribut angegeben wäre.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Das externe Skript mit hoher Priorität im Verhältnis zu anderen externen Skripten abrufen.
    - `low`
      - : Das externe Skript mit niedriger Priorität im Verhältnis zu anderen externen Skripten abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist die Standardeinstellung.
        Sie wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `integrity`
  - : Dieses Attribut enthält Inline-Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut fehlt. Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wurde gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden sollte — effektiv kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die modularen JavaScript-Code nicht unterstützen.
- `nonce`
  - : Eine kryptografische Zufallsnummer (number used once), um Skripte in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) zuzulassen. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert generieren. Es ist entscheidend, einen Nonce zu bieten, der nicht erraten werden kann, da es sonst trivial wäre, die Richtlinie einer Ressource zu umgehen.
- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen des Skripts oder der vom Skript abgerufenen Ressourcen gesendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Ursprung")}} gesendet, aber Anfragen an andere Ursprünge enthalten keine Referrerinformationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Zieladresse senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (standardmäßig): Eine vollständige URL senden, wenn eine Anfrage im selben Ursprung ausgeführt wird, nur den Ursprung senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und keinen Header an eine weniger sichere Zieladresse senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` nicht explizit im `<script>`-Element angegeben ist, übernimmt es eine höherstufige Referrer-Richtlinie, d.h. eine, die auf das gesamte Dokument oder die Domain angewendet wird. Wenn keine höherstufige Richtlinie verfügbar ist, wird die leere Zeichenfolge als gleichwertig zu `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zur direkten Einbettung eines Skripts in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)
  - : Dieses Attribut gibt den Typ des dargestellten Skripts an.
    Der Wert dieses Attributs wird einer der folgenden sein:
    - **Attribut ist nicht gesetzt (Standard), eine leere Zeichenfolge oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
        Autoren wird empfohlen, das Attribut wegzulassen, wenn sich das Skript auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind [in der IANA-Medientypen-Spezifikation aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
    - `module`
      - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verzögert.
        Die Attribute `charset` und `defer` haben keine Wirkung.
        Für Informationen zur Verwendung von `module` sehen Sie sich unseren [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden an.
        Im Gegensatz zu klassischen Skripten erfordern Modulscripte das CORS-Protokoll für das Cross-Origin-Fetching.
    - [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab abgerufen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Falls vorhanden, muss sein Wert ein {{Glossary("ASCII", "ASCII")}}-insensitives Übereinstimmung für `utf-8` sein. Es ist nicht notwendig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichencodierung vom Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut waren die möglichen Werte dieses Attributs jedoch nie standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Anmerkungen

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"` Attribute sowie Inline-Skripte ohne das `type="module"` Attribut werden sofort abgerufen und ausgeführt, bevor der Browser mit dem Parsen der Seite fortfährt.

Das Skript sollte mit dem `text/javascript` MIME-Typ bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis gesendet.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man ein (externes) Skript mit dem `<script>`-Element importiert:

```html
<script src="javascript.js"></script>
```

Das folgende Beispiel zeigt, wie man ein (Inline-)Skript innerhalb des `<script>`-Elements platziert:

```html
<script>
  alert("Hello World!");
</script>
```

### async und defer

Skripte, die mit dem `async`-Attribut geladen werden, laden das Skript herunter, ohne die Seite zu blockieren, während das Skript abgerufen wird. Sobald der Download abgeschlossen ist, wird das Skript jedoch ausgeführt, was die Seite blockiert. Das bedeutet, dass der Rest des Inhalts auf der Webseite verhindert wird, bis das Skript fertig ausgeführt ist. Es gibt keine Garantie, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden. Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und nicht von anderen Skripten auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, laden in der Reihenfolge, in der sie auf der Seite erscheinen. Sie werden erst ausgeführt, wenn der komplette Seiteninhalt geladen wurde, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite modifizieren).

Hier ist eine visuelle Darstellung der verschiedenen Skript-Lademethoden und was das für Ihre Seite bedeutet:

![Wie die drei Methoden zum Laden von Skripten funktionieren: Standardmäßig wird das Parsen blockiert, während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsen nur zur Ausführung. Mit defer wird das Parsen nicht pausiert, aber die Ausführung erfolgt erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und zugeschnitten auf eine reduzierte Version, unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) Lizenzbedingungen._

Wenn Sie zum Beispiel die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden. `jquery.js` könnte vor oder nach `script2.js` und `script3.js` geladen werden und wenn dies der Fall ist, werden alle Funktionen in diesen Skripten, die von `jquery` abhängen, einen Fehler erzeugen, weil `jquery` zum Zeitpunkt der Ausführung des Skripts nicht definiert sein wird.

`async` sollte verwendet werden, wenn Sie eine Menge Hintergrundskripte laden müssen und Sie möchten einfach, dass sie so schnell wie möglich an Ort und Stelle gelangen. Vielleicht haben Sie zum Beispiel einige Spieldateien zu laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber vorerst möchten Sie nur das Spielintro, die Titel und die Lobby anzeigen, ohne dass diese durch das Laden der Skripte blockiert werden.

Skripte, die mit dem `defer`-Attribut (siehe unten) geladen werden, laufen in der Reihenfolge, in der sie auf der Seite erscheinen und werden ausgeführt, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` geladen wird und `script2.js` vor `script3.js` geladen wird. Sie werden erst ausgeführt, nachdem der komplette Seiteninhalt geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z. B. wenn sie ein oder mehrere Elemente auf der Seite modifizieren).

Zusammenfassend:

- `async` und `defer` weisen beide den Browser an, die Skripte in einem separaten Thread herunterzuladen, während der Rest der Seite (das DOM usw.) herunterlädt, sodass das Laden der Seite während des Abrufvorgangs nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist. Dies blockiert die Seite und garantiert keine spezifische Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie sich befinden, und werden erst ausgeführt, wenn alles geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, sollten Sie `async` verwenden.
- Wenn Ihre Skripte darauf warten müssen, dass das Parsen abgeschlossen ist und sie von anderen Skripten und/oder vom DOM abhängen, laden Sie sie mit `defer` und ordnen Sie die entsprechenden `<script>`-Elemente in der Reihenfolge an, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut unterstützen, ignorieren jedes Skript mit einem `nomodule`-Attribut. Dies ermöglicht es Ihnen, Modulscripte zu verwenden und gleichzeitig `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitzustellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit importmap importieren

Beim Importieren von Modulen in Skripten, wenn Sie die [`type=importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)-Funktion nicht verwenden, muss jedes Modul mit einem Modulspezifikator importiert werden, der entweder eine absolute oder relative URL ist. Im Beispiel unten ist der erste Modulspezifikator eine absolute URL, während der zweite (`"./shapes/square.js"`) relativ zur Basis-URL des Dokuments aufgelöst wird.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Eine Importkarte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, wenn sie übereinstimmt wird, den Text im Modulspezifikator ersetzen kann. Die Importkarte unten definiert die Schlüssel `circle` und `square`, die als Aliasse für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

Dies ermöglicht es uns, Module mit Namen in den Modulspezifikatoren zu importieren (anstatt mit absoluten oder relativen URLs).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Für weitere Beispiele, was Sie mit Importkarten machen können, sehen Sie sich den [Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) Abschnitt im JavaScript-Module-Leitfaden an.

### Daten in HTML einbetten

Sie können das `<script>`-Element auch verwenden, um Daten in HTML mit serverseitigem Rendering einzubetten, indem Sie einen gültigen Nicht-JavaScript MIME-Typ im `type`-Attribut angeben.

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

### Rendering blockieren, bis ein Skript abgerufen und ausgeführt ist

Sie können ein `render`-Token in das `blocking`-Attribut einfügen; das Rendering der Seite wird blockiert, bis das Skript abgerufen und ausgeführt ist. Im folgenden Beispiel blockieren wir das Rendering bei einem asynchronen Skript, sodass das Skript nicht das Parsen blockiert, aber garantiert vor dem Start des Renderings ausgewertet wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Wortlautinhalt</a>.
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
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content">Metadateninhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Wortlautinhalt</a> akzeptiert.
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
- [Flavio Copes' Artikel über das effiziente Laden von JavaScript und die Unterschiede zwischen `async` und `defer` erklären](https://thevalleyofcode.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
