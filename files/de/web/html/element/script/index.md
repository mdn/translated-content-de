---
title: "<script>: Das Skript-Element"
slug: Web/HTML/Element/script
l10n:
  sourceCommit: 87ad113fadfaded6335c35c55b0787923a422f52
---

{{HTMLSidebar}}

Das **`<script>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um ausführbaren Code oder Daten einzubetten; typischerweise wird dies genutzt, um JavaScript-Code einzubetten oder darauf zu verweisen. Das `<script>`-Element kann auch mit anderen Sprachen, wie der [GLSL Shader Programmiersprache](/de/docs/Web/API/WebGL_API) von WebGL und {{Glossary("JSON", "JSON")}}, verwendet werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `async`

  - : Für klassische Skripte gilt: Wenn das `async`-Attribut vorhanden ist, wird das klassische Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist.

    Für [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) gilt: Wenn das `async`-Attribut vorhanden ist, werden die Skripte und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. bei Inline-Skripten) für klassische Skripte, in diesem Fall hätte es keine Wirkung.

    Dieses Attribut ermöglicht die Eliminierung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `defer` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `defer`-Attribut angegeben wird, wird das Element so behandelt, als ob nur das `async`-Attribut angegeben wäre.

    Dies ist ein boolesches Attribut: Das Vorhandensein eines booleschen Attributs auf einem Element repräsentiert den True-Wert, und das Fehlen des Attributs repräsentiert den False-Wert.

    Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Anmerkungen zur Browserunterstützung. Siehe auch [Async-Skripte für asm.js](/de/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcen-Anforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    > [!NOTE]
    > Alternativ können JavaScript-basierte Attributionsquellen oder Trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage mit der `attributionReporting`-Option gesendet wird (entweder direkt im `fetch()`-Aufruf oder in einem [`Request`](/de/docs/Web/API/Request)-Objekt, das an den `fetch()`-Aufruf übergeben wird), oder durch Senden eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), das auf dem Anforderungsobjekt aufgerufen wird.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, also nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server bearbeiten. Beim Registrieren eines Attribution-Triggers ist diese Eigenschaft optional, und ein leerer Zeichenfolgenwert wird verwendet, wenn er ausgelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server gehostet wird, den Sie kontrollieren, oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert für `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zur Ressourcenquelle gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header entsprechend antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte über unterschiedliche Daten umfasst.

    Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `blocking`

  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen auf das Abrufen des Skripts blockiert werden sollten. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstokens sein, die unten aufgeführt sind.
    - `render`: Die Darstellung von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
  - : Normale `script`-Elemente übermitteln minimale Informationen an den [`window.onerror`](/de/docs/Web/API/Window/error_event) für Skripte, die die Standard-{{Glossary("CORS", "CORS")}}-Prüfungen nicht bestehen. Um eine Fehlerprotokollierung für Websites zu ermöglichen, die eine separate Domain für statische Medien verwenden, verwenden Sie dieses Attribut. Weitere Informationen zu den gültigen Argumenten finden Sie unter [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Attributes/crossorigin).
- `defer`

  - : Dieses boolesche Attribut wird gesetzt, um dem Browser anzuzeigen, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt werden soll.

    Skripte mit dem `defer`-Attribut verhindern, dass das `DOMContentLoaded`-Ereignis ausgelöst wird, bis das Skript geladen und ausgewertet wurde.

    > [!WARNING]
    > Dieses Attribut darf nicht verwendet werden, wenn das `src`-Attribut fehlt (d.h. für Inline-Skripte), in diesem Fall hätte es keine Wirkung.
    >
    > Das `defer`-Attribut hat keine Auswirkungen auf [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) — sie werden standardmäßig verzögert.

    Skripte mit dem `defer`-Attribut werden in der Reihenfolge ausgeführt, in der sie im Dokument erscheinen.

    Dieses Attribut ermöglicht die Eliminierung von **Parser-blockierendem JavaScript**, bei dem der Browser Skripte laden und auswerten müsste, bevor er mit dem Parsen fortfährt. `async` hat in diesem Fall eine ähnliche Wirkung.

    Wenn das Attribut zusammen mit dem `async`-Attribut angegeben wird, wird das Element so behandelt, als ob nur das `async`-Attribut angegeben wäre.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts zu verwenden ist.
    Zulässige Werte:

    - `high`
      - : Abrufen des externen Skripts mit hoher Priorität im Vergleich zu anderen externen Skripten.
    - `low`
      - : Abrufen des externen Skripts mit niedriger Priorität im Vergleich zu anderen externen Skripten.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority).

- `integrity`
  - : Dieses Attribut enthält eingebettete Metadaten, die ein Benutzeragent verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulationen bereitgestellt wurde. Das Attribut darf nicht angegeben werden, wenn das `src`-Attribut nicht angegeben ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Dieses boolesche Attribut wird gesetzt, um anzuzeigen, dass das Skript in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, nicht ausgeführt werden soll — tatsächlich kann dies verwendet werden, um Fallback-Skripte an ältere Browser zu liefern, die modulares JavaScript nicht unterstützen.
- `nonce`
  - : Eine kryptografische Einmalverwendung zur Autorisierung von Skripten in einer [script-src Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). Der Server muss bei jeder Übertragung einer Richtlinie einen eindeutigen Wert generieren. Es ist entscheidend, eine Zufallszahl bereitzustellen, die nicht erraten werden kann, da das Umgehen der Richtlinie einer Ressource ansonsten trivial ist.
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) Sie beim Abrufen des Skripts oder von Skripten abgerufenen Ressourcen senden möchten:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf Schema, Host und Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für den {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber bereichsübergreifende Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie den Ursprung des Dokuments nur als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn Sie eine Anfrage an denselben Ursprung durchführen, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

    > [!NOTE]
    > Ein leerer Zeichenfolgenwert (`""`) ist sowohl der Standardwert als auch ein Fallback-Wert, wenn `referrerpolicy` nicht unterstützt wird. Wenn `referrerpolicy` im `<script>`-Element nicht explizit angegeben wird, übernimmt es eine höherstufige Referrer-Richtlinie, d. h. eine auf das gesamte Dokument oder die Domain angewendete. Wenn keine höherstufige Richtlinie verfügbar ist, wird der leere Zeichenfolgenwert als `strict-origin-when-cross-origin` behandelt.

- `src`
  - : Dieses Attribut gibt die URI eines externen Skripts an; dies kann als Alternative zum Einbetten eines Skripts direkt in ein Dokument verwendet werden.
- [`type`](/de/docs/Web/HTML/Element/script/type)

  - : Dieses Attribut gibt die Art des dargestellten Skripts an.
    Der Wert dieses Attributs ist einer der folgenden:

    - **Attribut ist nicht gesetzt (Standard), eine leere Zeichenfolge oder ein JavaScript-MIME-Typ**
      - : Gibt an, dass das Skript ein „klassisches Skript“ ist, das JavaScript-Code enthält.
        Autoren werden ermutigt, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
        JavaScript-MIME-Typen sind in der [IANA-Medientypenspezifikation](/de/docs/Web/HTTP/MIME_types#textjavascript) aufgelistet.
    - [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
      - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
        Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu kontrollieren, wie der Browser Modulspezifikatoren auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert werden.
    - `module`
      - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
        Die Verarbeitung des Skriptinhalts wird verzögert.
        Die `charset`- und `defer`-Attribute haben keine Wirkung.
        Weitere Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden.
        Im Gegensatz zu klassischen Skripten erfordert die Modul-Skripte die Verwendung des CORS-Protokolls für das länderübergreifende Abrufen.
    - [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
      - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
        Spekulationsregeln haben die Form eines JSON-Objekts, das bestimmt, welche Ressourcen vom Browser vorab geladen oder gerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
    - **Jeder andere Wert**
      - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
        Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
        Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

### Veraltete Attribute

- `charset` {{Deprecated_inline}}
  - : Wenn vorhanden, muss sein Wert eine {{Glossary("ASCII", "ASCII")}}-groß-/kleinschreibungssensitive Übereinstimmung für `utf-8` sein. Es ist unnötig, das `charset`-Attribut anzugeben, da Dokumente UTF-8 verwenden müssen und das `script`-Element seine Zeichenkodierung von dem Dokument erbt.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Ähnlich wie das `type`-Attribut identifiziert dieses Attribut die verwendete Skriptsprache. Im Gegensatz zum `type`-Attribut wurden jedoch die möglichen Werte dieses Attributs niemals standardisiert. Stattdessen sollte das `type`-Attribut verwendet werden.

## Hinweise

Skripte ohne [`async`](#async), [`defer`](#defer) oder `type="module"`-Attribute sowie Inline-Skripte ohne das `type="module"`-Attribut werden abgerufen und sofort ausgeführt, bevor der Browser fortfährt, die Seite zu parsen.

Das Skript sollte mit dem MIME-Typ `text/javascript` bereitgestellt werden, aber die Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), einem Videotyp (`video/*`), einem Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird.
Wenn das Skript blockiert wird, wird ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis an das Element gesendet; andernfalls wird ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis gesendet.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie man ein (externes) Skript mit dem `<script>`-Element importiert:

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

Skripte, die mithilfe des `async`-Attributs geladen werden, laden das Skript, ohne die Seite zu blockieren, während das Skript abgerufen wird.
Sobald der Download jedoch abgeschlossen ist, wird das Skript ausgeführt, was die Seite daran hindert, Inhalte zu rendern. Dies bedeutet, dass der Rest des Inhalts auf der Webseite daran gehindert wird, verarbeitet und dem Benutzer angezeigt zu werden, bis das Skript seine Ausführung abgeschlossen hat.
Es gibt keine Garantie dafür, dass Skripte in einer bestimmten Reihenfolge ausgeführt werden.
Es ist am besten, `async` zu verwenden, wenn die Skripte auf der Seite unabhängig voneinander ausgeführt werden und von keinem anderen Skript auf der Seite abhängen.

Skripte, die mit dem `defer`-Attribut geladen werden, laden in der Reihenfolge, in der sie auf der Seite erscheinen.
Sie werden erst ausgeführt, wenn der Seiteninhalt vollständig geladen ist, was nützlich ist, wenn Ihre Skripte davon abhängen, dass das DOM vorhanden ist (z.B. sie ändern ein oder mehrere Elemente auf der Seite).

Hier ist eine grafische Darstellung der verschiedenen Skriptladeverfahren und was das für Ihre Seite bedeutet:

![Wie die drei Skriptladeverfahren funktionieren: Der Standard blockiert das Parsen, während JavaScript abgerufen und ausgeführt wird. Mit async pausiert das Parsen nur zur Ausführung. Mit defer wird das Parsen nicht pausiert, aber die Ausführung erfolgt erst, nachdem alles andere geparst ist.](async-defer.jpg)

_Dieses Bild stammt aus der [HTML-Spezifikation](https://html.spec.whatwg.org/images/asyncdefer.svg), kopiert und auf eine reduzierte Version zugeschnitten, unter den Lizenzbedingungen von [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Wenn Sie zum Beispiel die folgenden Skriptelemente haben:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Sie können sich nicht auf die Reihenfolge verlassen, in der die Skripte geladen werden.
`jquery.js` kann vor oder nach `script2.js` und `script3.js` geladen werden und wenn das der Fall ist, würden alle Funktionen in diesen Skripten, die von `jquery` abhängen, einen Fehler verursachen, da `jquery` zum Zeitpunkt der Skriptausführung nicht definiert ist.

`async` sollte verwendet werden, wenn Sie eine Reihe von Hintergrundskripten laden möchten und diese so schnell wie möglich bereitstellen möchten.
Vielleicht haben Sie beispielsweise einige Spieldateien zu laden, die benötigt werden, wenn das Spiel tatsächlich beginnt, aber fürs Erste möchten Sie einfach mit der Anzeige des Spielintros, der Titel und der Lobby fortfahren, ohne dass sie durch das Laden von Skripten blockiert werden.

Skripte, die mit dem `defer`-Attribut (siehe unten) geladen werden, laufen in der Reihenfolge, in der sie auf der Seite erscheinen, und führen sie aus, sobald das Skript und der Inhalt heruntergeladen sind:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Im zweiten Beispiel können wir sicher sein, dass `jquery.js` vor `script2.js` und `script3.js` und `script2.js` vor `script3.js` geladen wird.
Sie werden erst ausgeführt, wenn der gesamte Inhalt der Seite geladen ist, was nützlich ist, wenn Ihre Skripte vom Vorhandensein des DOM abhängen (zum Beispiel ändern sie ein oder mehrere Elemente auf der Seite).

Zusammengefasst:

- `async` und `defer` beide weisen den Browser an, das oder die Skripte in einem separaten Thread zu laden, während der Rest der Seite (das DOM usw.) geladen wird, sodass das Laden der Seite während des Abrufvorgangs nicht blockiert wird.
- Skripte mit einem `async`-Attribut werden ausgeführt, sobald der Download abgeschlossen ist.
  Dies blockiert die Seite und garantiert keine bestimmte Ausführungsreihenfolge.
- Skripte mit einem `defer`-Attribut werden in der Reihenfolge geladen, in der sie stehen, und werden nur ausgeführt, wenn alles vollständig geladen ist.
- Wenn Ihre Skripte sofort ausgeführt werden sollen und keine Abhängigkeiten haben, verwenden Sie `async`.
- Wenn Ihre Skripte warten müssen, bis das Parsen abgeschlossen ist und auf andere Skripte und/oder das DOM angewiesen sind, laden Sie sie mit `defer` und platzieren Sie die entsprechenden `<script>`-Elemente in der Reihenfolge, in der der Browser sie ausführen soll.

### Modul-Fallback

Browser, die den `module`-Wert für das [`type`](#type)-Attribut unterstützen, ignorieren alle Skripte mit einem `nomodule`-Attribut. Dies ermöglicht Ihnen, Modul-Skripte zu verwenden und gleichzeitig `nomodule`-markierte Fallback-Skripte für nicht unterstützende Browser bereitzustellen.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Module mit Import-Karten importieren

Beim Importieren von Modulen in Skripten, wenn Sie das [`type=importmap`](#importmap)-Feature nicht verwenden, muss jedes Modul mit einem Modulspezifikator importiert werden, der entweder eine absolute oder relative URL ist.
Im untenstehenden Beispiel wird der erste Modulspezifikator ("./shapes/square.js") relativ zur Basis-URL des Dokuments aufgelöst, während der zweite eine absolute URL ist.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Eine Importkarte ermöglicht es Ihnen, eine Zuordnung bereitzustellen, die, falls sie übereinstimmt, den Text im Modulspezifikator ersetzen kann.
Die Importkarte unten definiert die Schlüssel `square` und `circle`, die als Aliase für die oben gezeigten Modulspezifikatoren verwendet werden können.

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

So können wir Module mit Namen im Modulspezifikator anstelle von absoluten oder relativen URLs importieren.

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

Weitere Beispiele für die Möglichkeiten von Importkarten finden Sie im Abschnitt [Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Modul-Leitfaden.

### Einbetten von Daten in HTML

Sie können das `<script>`-Element auch verwenden, um Daten in HTML mit serverseitigem Rendering einzubetten, indem Sie einen gültigen, nicht-JavaScript-MIME-Typ im `type`-Attribut angeben.

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

Sie können `render`-Token im `blocking`-Attribut einschließen; die Darstellung der Seite wird blockiert, bis das Skript abgerufen und ausgeführt wird. Im unten stehenden Beispiel blockieren wir das Rendern eines asynchronen Skripts, sodass das Skript das Parsen nicht blockiert, aber garantiert vor Start des Renderns ausgewertet wird.

```html
<script blocking="render" async src="async-script.js"></script>
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhalts-Kategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadata-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Dynamisches Skript wie <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#metadata_content">Metadata-Inhalt</a> akzeptiert,
        oder jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
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
- [Flavio Copes' Artikel über effizientes Laden von JavaScript und die Erklärung der Unterschiede zwischen `async` und `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden
