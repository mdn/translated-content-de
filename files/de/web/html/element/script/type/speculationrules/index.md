---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type) Attributs des [`<script>` Elements](/de/docs/Web/HTML/Element/script) zeigt an, dass der Körper des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können innerhalb externer Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, unter Verwendung der gleichen [unten bereitgestellten JSON-Darstellung](#spekulationsregeln_json-darstellung). Das Angeben eines HTTP-Headers ist nützlich, wenn Entwickler das Dokument selbst nicht direkt ändern können.

## Syntax

```html
<script type="speculationrules">
  // JSON object defining rules
</script>
```

> [!NOTE]
> Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht spezifiziert werden.

### Ausnahmen

- `TypeError`
  - : Die Spekulationsregeldefinition ist kein gültiges JSON-Objekt.

## Beschreibung

Ein `<script type="speculationrules">` Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Regeln für Vorababrufen (Prefetch) und Vorabdarstellung (Prerender):

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "href_matches": "/next" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

### Spekulationsregeln JSON-Darstellung

Die JSON-Struktur enthält ein oder mehrere Felder auf der obersten Ebene, von denen jedes eine Aktion darstellt, um Spekulationsregeln zu definieren. Derzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, bei denen der zugehörige Dokumentenantwortkörper heruntergeladen werden sollte, was zu erheblichen Leistungsverbesserungen führt, wenn diese Dokumente aufgerufen werden. Beachten Sie, dass keine der vom Seiteninhalt referenzierten Subressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, bei denen die zugehörigen Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollten. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScript-Befehle und sogar das Laden von Subressourcen und das Ausführen von Datenabrufen, die durch JavaScript initiiert werden. Wenn diese Dokumente aufgerufen werden, findet die Navigation sofort statt, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Nutzung von Vorababrufen und Vorabdarstellung.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Menge von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, auf die sich die Regel bezieht. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs von Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} Elementen definiert) anhand der durch einen `"where"` Schlüssel beschriebenen Bedingungen übereinstimmen. Beachten Sie, dass das Vorhandensein eines `"where"` Schlüssels `"source": "document"` impliziert, sodass dieser optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"` Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"` Schlüssels `"source": "list"` impliziert, sodass dieser optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet wird. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur externen Ressourcen-URL (wenn extern abgerufen) analysiert. `"urls"` und `"where"` können nicht gleichzeitig in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, unter denen die Regel auf URLs im zugehörigen Dokument angewendet wird. Tatsächlich stellt das `"where"` Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht gleichzeitig in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Musterstrings enthält, die der Standard-Syntax der [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, wird die Regel auferlegt.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu etwas übereinstimmt. Dies funktioniert genau wie der [Regel-ebene `"relative_to"` Schlüssel](#relative_to_2), außer dass es nur auf eine einzelne `"href_matches"` Bedingung innerhalb eines `"where"` Schlüssels wirkt.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die durch diese Selektoren übereinstimmen, wird die Regel auferlegt.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie übereinstimmt, die Regel _nicht_ auferlegt wird. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, wird die Regel _tatsächlich_ auferlegt.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrfach verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [Beispiele für where](#where_syntax_examples) für weitere Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorab laden/vorangeben sollte, um Leistungsvorteile gegen Ressourcenüberlastungen abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor hält das Anklicken des Links für sehr wahrscheinlich und/oder das Dokument könnte lange zum Abrufen brauchen. Vorab laden/vorangeben sollte so schnell wie möglich beginnen, vorbehaltlich Überlegungen wie Benutzereinstellungen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen möglichst frühzeitig vorab laden/vorangeben. Vorab laden/vorangeben sollte bei jedem geringsten Anzeichen beginnen, dass ein Link geöffnet werden könnte. Beispielsweise könnte der Benutzer den Mauszeiger in Richtung des Links bewegen, diesen kurz überfahren/fokussieren oder das Scrollen in einer markanten Stelle pausieren.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Vorab laden/vorangeben sollte beginnen, wenn es einen vernünftigen Hinweis darauf gibt, dass der Benutzer einen Link in naher Zukunft öffnen wird. Beispielsweise könnte der Benutzer einen Link in den Sichtbereich scrollen und ihn für einige Zeit überfahren/anwählen.
    - `"conservative"`
      - : Der Autor möchte von spekulativem Laden mit einem relativ geringen Ressourcenaufwand profitieren. Vorab laden/vorangeben sollte nur beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, gelten Listenregeln (`"urls"`) standardmäßig als `immediate` und Dokumentregeln (`"where"`) als `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig angedeutet hat, wenn der weniger eifrige Kandidat als die bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen {{httpheader("No-Vary-Search")}} Header-Wert auf Antworten für Dokumente gesetzt wird, für die es Vorab laden/Vorangeben-Anfragen erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf den Abschluss eines vorhandenen Vorab ladens/Vorangebens zu warten oder einen neuen Abruf zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für weitere Erklärungen, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Policy-String darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet wird — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon ist es, der verweisenden Seite zu ermöglichen, eine strengere Richtlinie speziell für die spekulative Anfrage festzulegen als die bereits festgelegte Richtlinie der Seite (entweder standardmäßig oder durch verwenden von `Referrer-Policy`).

    > [!NOTE]
    > Ein Cross-Site-Vorababruf erfordert eine Referrer-Policy, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine lockerere Policy, die in den Spekulationsregeln festgelegt ist, überschreibt eine strengere Policy, die auf der verweisenden Seite festgelegt ist, solange sie noch streng genug für den Cross-Site-Fall ist.

    > [!NOTE]
    > Im Fall von Dokumentenregeln wird die angegebene Referrer-Policy des übereinstimmenden Links (z. B. unter Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) Attributs) verwendet, es sei denn, die Regel gibt eine Policy an, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo die durch URL gematchten Links relativ gematcht werden sollen. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zum Dokument gematcht werden, auf dem die Spekulationsregeln gesetzt sind.
    - `ruleset`
      - : URLs sollten relativ zur Datei gematcht werden, in der die Regeln festgelegt sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für in einer externen Datei definierte Regeln (festgelegt unter Verwendung des {{httpheader("Speculation-Rules")}} Headers). Wenn Regeln innerhalb desselben Dokuments spezifiziert sind, für das sie gesetzt werden (d. h. in einem Inline-`<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, die Fähigkeiten des Browsers darstellen, der die Regel analysiert, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet werden kann.

    > [!WARNING]
    > Vorababrufe werden automatisch in Browsern fehlschlagen, die eine angegebene Anforderung nicht erfüllen können, auch wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur Vorababruf) Gibt an, dass die Regel nur dann übereinstimmt, wenn der Benutzeragent die Client-IP-Adresse vor dem Ursprungsserver verbergen kann, wenn eine Cross-Origin-Vorababruf-Anfrage gestellt wird. Wie genau dies funktioniert, hängt von browserspezifischen Implementierungsdetails ab. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse durch einen Proxy von Google. Daher funktioniert es standardmäßig nur für Google-kontrollierte Verweise (da in diesem Fall das Versenden der URLs des Ziels an Google kein zusätzlicher Datenschutzverlust ist). Wenn sie auf einer nicht von Google kontrollierten Website verwendet wird, werden Regeln, die dies enthalten, nur für Nutzer übereinstimmen, die "Erweitertes Vorladen" in `chrome://settings/preloading` aktivieren.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bereitstellen. Eine gründliche Überprüfung in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas verwenden, das der [iCloud Private Relay](https://support.apple.com/en-us/102602) ähnelt.
        - Eine zukünftige Firefox-Implementierung könnte etwas auf der Grundlage des [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkts verwenden.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, wenn die Site sie enthält. Dies erfolgt durch Hinzufügen des `"inline-speculation-rules"` Werts zusammen mit einer Hash- oder Nonce-Quelle.

## Beispiele

### Vorababruf und Vorabdarstellung in demselben Regelsatz

Die grundlegenden Beispiele, die im Abschnitt Beschreibung gezeigt werden, enthielten getrennte Spekulationsregeln, die für Vorababruf und Vorabdarstellung definiert wurden. Es ist möglich, beides in einem einzigen Regelsatz zu definieren:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ],
    "prerender": [
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

> [!NOTE]
> Dieses Code-Snippet bietet ein Listenregel (`"urls"`) und ein Dokumentregel-(`"where"`) Beispiel.

### Mehrere Regelsätze

Es ist auch zulässig, mehrere Regelsätze in einer einzigen HTML-Datei aufzunehmen:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

Und mehrere Regeln in einem einzigen Ergebnissatz:

```js
<script type="speculationrules">
{
  "prerender": [
    {
      "urls": ["one.html"]
    },
    {
      "urls": ["two.html"]
    }
  ]
}
</script>
```

### Dynamisches Einfügen von Regeln

Unten ist ein Beispiel, das Spekulationsregeln erkennt und, wenn unterstützt, eine Vorabrechterspekulationregel dynamisch über JavaScript hinzufügt:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prerender: [
      {
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  console.log("added speculation rules to: next.html");
  document.body.append(specScript);
}
```

Sie können dies in Aktion auf dieser [prerender demos](https://prerender-demos.glitch.me/) Seite sehen.

### `where` Syntax Beispiele

Eine dokumentenbasierte Regel enthält eine `"where"` Eigenschaft, die ein Objekt mit Kriterien ist, die definieren, welche Links im Dokument übereinstimmen. Tatsächlich stellt das `"where"` Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird mit einem einzelnen URL-Muster oder CSS-Selektor übereinstimmen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten eingestellt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig übereinstimmen:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Wildcard-(`*`)-Zeichen enthalten, die es ermöglichen, dass ein einzelner Wert mit mehreren URLs übereinstimmt. Zum Beispiel könnte das untenstehende Objekt mit `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` anvisiert werden. Zum Beispiel könnte das untenstehende Objekt mit allen gleichen Ursprungs-URLs mit einem `category` Suchparameter übereinstimmen (als erster oder nachfolgender Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann durch Platzierung in einer `"not"` Bedingung negiert werden – das bedeutet, dass bei Übereinstimmung mit einem Link die Spekulationsregel _nicht_ auferlegt wird, aber wenn _nicht_ übereinstimmt, _wird_ sie. Das folgende Beispiel wird dazu führen, dass allen Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel auferlegt wird, aber nicht Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"` Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden – diese nehmen den Wert von Arrays ein, die mehrere Bedingungen enthalten, von denen alle oder einige (jeweils) übereinstimmen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehr als eine Ebene tief verschachtelt werden – es gibt kein festgelegtes Limit für die zulässigen Verschachtelungsebenen.

Es ist nützlich, das `"where"` Objekt als äquivalent zu einer `if` Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist äquivalent zu

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle gleichen Ursprungsseiten zum Vorababrufen markiert, außer denen, die als problematisch bekannt sind – die Seite `/logout` und alle Links, die mit einer Klasse `.no-prerender` markiert sind:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "selector_matches": ".no-prerender" } }
          ]
        }
      }
    ]
  }
</script>
```

> [!NOTE]
> Das `where` Muster oben schließt keine Cross-Site-Links ein, die zum Vorabberechnungsabrufen unterstützt werden (sofern der Benutzer keine Cookies für die Zielseite gesetzt hat, um Tracking zu verhindern), aber nicht zum Vorabdarstellen.

### `relative_to` Beispiel

Für Regelsätze, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Antwort-Header), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei analysiert. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu analysieren, wird `"relative_to"` so verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet:

```json
{
  "where": {
    "or": [
      { "href_matches": "/home", "relative_to": "document" },
      { "href_matches": "/about" }
    ]
  }
}
```

Im obigen Beispiel wird nur die erste `"href_matches"` relativ zur Basis-URL des Dokuments gematcht.

`relative_to` ist vor allem dann relevant, wenn die Spekulationsregeln JSON-Datei auf einem anderen Ursprung als das zugehörige Dokument liegt:

1. Wenn das Dokument sich an `https://example.com/some/subpage.html` befindet und die Regeln an `https://example.com/resources/rules.json`, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn das Dokument jedoch an `https://example.com/some/subpage.html` und die Regeln an `https://other.example/resources/rules.json` (zum Beispiel auf einer Drittanbieter- oder Cookieless-Ressourcenursprung) liegen, dann:

   - `"relative_to": "document"` führt dazu, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` führt dazu, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in Form von `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument an `https://example.com/some/subpage.html` befindet und die Regeln an `https://example.com/resources/rules.json`, dann:

   - `"relative_to": "document"` würde dazu führen, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde dazu führen, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnisseite, `/users`, die einen `id` Parameter hinzugefügt hat, um Informationen zu einem bestimmten Benutzer aufzurufen, zum Beispiel `/users?id=345`. Ob diese URL aus Caching-Zwecken identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter den Effekt hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter den Effekt hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein verschiebbares Panel anzuzeigen, das deren Daten anzeigt, sollte die URL aus Caching-Zwecken als gleich betrachtet werden. Dies könnte zu Verbesserungen der Leistung rund um das Laden der Benutzerseiten führen und könnte durch ein {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erzielt werden.

Wie wirkt sich dies auf Spekulationsregeln aus? Betrachten Sie den folgenden Code:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["/users"]
      }
    ]
  }
</script>
<a href="/users?id=345">User Bob</a>
```

Was passiert, wenn der Benutzer mit der Navigation zu `/users?id=345` beginnt, wenn die Header für den Vorababruf von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, welchen `No-Vary-Search` Wert es geben wird, wenn überhaupt. Wenn kein `No-Vary-Search` Wert festgesetzt war und das Verhalten der Anwendung eher wie Option 1 oben war, wäre der Vorababruf verschwendet und der Browser müsste die separate `/users?id=345` Seite von Grund auf neu abrufen.

Zur Lösung dieses Problems können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search` Wert wird. Eine Spekulationsregel kann ein `"expects_no_vary_search"` Feld enthalten, das eine String-Darstellung des erwarteten Header-Werts enthält:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["/users"],
        "expects_no_vary_search": "params=(\"id\")"
      }
    ]
  }
</script>
<a href="/users?id=345">User Bob</a>
```

Dies zeigt an, dass Option 2, wie oben beschrieben, das ist, was der Server erwarten soll zu liefern. Wenn eine Navigation beginnt, während es einen laufenden Vorababruf von `/users` gibt, informiert es den Browser, dass es angebracht ist, auf das Vorababrufen zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentenregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, je nach verwendetem Muster. Zum Beispiel im Fall von:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        { "where": { "href_matches": "/users?id=*" } },
        "expects_no_vary_search": "params=(\"id\")"
      }
    ]
  }
</script>
<a href="/users?id=012">User Bill</a>
<a href="/users?id=345">User Bob</a>
<a href="/users?id=678">User Ben</a>
```

Wenn ein Link überfahren wird, beginnt der Browser mit dem Abrufen dieses spezifischen Links.

Wenn der Benutzer einen anderen Link überfährt, bevor das Vorababrufen abgeschlossen ist, weist das `expects_no_vary_search` Muster den Browser darauf hin, dass es nicht notwendig ist, das aktuelle Vorababrufen abzubrechen, da alle `/users` URLs mit `id` URL-Parameterwerten tatsächlich auf dieselbe Seite für diesen Kontext verweisen (und für Caching-Zwecke).

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn `No-Vary-Search` mit Vorabdarstellen verwendet wird, da die Seite zu Beginn mit anderen URL-Parametern vorab dargestellt werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendern, UTM-Parameter für Analysen, etc.). Da das initiale Vorabdarstellen für unterschiedliche URL-Parameter sein kann, sollte jeder darauf basierende Code nur nach Vorabdarstellungsaktivierung ausgeführt werden.

Es können mehrere Parameter in einem durch Leerzeichen getrennten Array bereitgestellt werden:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        { "where": { "href_matches": "/users?id=*" } },
        "expects_no_vary_search": "params=(\"id\" \"order\" \"lang\")"
      }
    ]
  }
</script>
```

> [!NOTE]
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter durch Leerzeichen getrennte, in Anführungszeichen gesetzte Strings sein – wie oben gezeigt – und nicht durch Kommas getrennt, was Entwicklern möglicherweise eher vertraut ist.

### `eagerness` Beispiel

Der folgende Satz von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um anzuzeigen, mit welcher Dringlichkeit der Browser jede übereinstimmende Menge von Links vorabdarstellen sollte.

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "href_matches": "/*" },
        "eagerness": "conservative"
      },
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

Hier deuten wir an, dass:

- Alle samma Ursprungslinks im Dokument konservativ vorab dargestellt werden sollten (d.h. wenn der Benutzer beginnt, diese zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig vorab dargestellt werden (d.h. wenn der Benutzer in irgendeiner Weise darauf zusteuert, diese zu öffnen).

> [!NOTE]
> Die Auswirkungen von Dringlichkeitseinstellungen sind weniger nützlich für Listenregeln. Standardmäßig werden URLs aus Listenregeln sofort vorab geladen/vorab dargestellt, sobald die Regeln analysiert werden, was Sie erwarten würden – sie sind für die explizite Auflistung von URLs mit hoher Priorität gedacht, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` in aktuellen Implementierungen die gleiche Wirkung wie `immediate`. Niedrigere Dringlichkeitseinstellungen sind zum Vorababrufen/Vorabdarstellen, wenn Links interagiert werden, und dafür werden Sie wahrscheinlich Dokumentregeln verwenden, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seiten-Navigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
