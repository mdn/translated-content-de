---
title: <script type="speculationrules">
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>` Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können innerhalb externer Textdateien definiert werden, auf die über den {{httpheader("Speculation-Rules")}} HTTP-Header verwiesen wird, wobei dieselbe [unten bereitgestellte JSON-Darstellung](#spekulationsregeln_json-darstellung) verwendet wird. Das Angeben eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

## Syntax

```html
<script type="speculationrules">
  // JSON object defining rules
</script>
```

> [!NOTE]
> Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Spekulationsregeldefinition ist kein gültiges JSON-Objekt.

## Beschreibung

Ein `<script type="speculationrules">` Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Vorabruf- und Vorrenderregeln:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf der obersten Ebene, von denen jedes eine Aktion zur Definition von Spekulationsregeln darstellt. Derzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehöriger Dokumentantwortkorpus heruntergeladen werden soll, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der vom Dokument referenzierten Subressourcen heruntergeladen wird.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScript-Programme und sogar das Laden von Subressourcen und das Ausführen von Datenabrufen, die von JavaScript gestartet werden. Wenn zu diesen Dokumenten navigiert wird, werden Navigationen sofort erfolgen, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Hauptseite für vollständige Details zur effektiven Nutzung von Prefetch und Prerender.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Menge von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Diese Option ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eines der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs basierend auf den Bedingungen, die durch einen `"where"` Schlüssel beschrieben werden, von Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} Elementen definiert) abgeglichen werden. Beachten Sie, dass das Vorhandensein eines `"where"` Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs von einer Liste kommen, die im Schlüssel `"urls"` angegeben wird. Beachten Sie, dass das Vorhandensein eines `"urls"` Schlüssels `"source": "list"` impliziert, also ist es optional.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet wird. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn sie inline in einem Dokument sind) oder relativ zur URL der externen Ressource analysiert (wenn sie extern abgerufen werden). `"urls"` und `"where"` können nicht gleichzeitig in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, nach denen die Regel URLs im zugehörigen Dokument abgleicht. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht gleichzeitig in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster oder ein Array enthält, das mehrere URL-Musterstrings enthält, die dem Standard- [URL-Muster-API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs dem/den Muster(n) entsprechen, erhalten die Regelanwendung.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"` Bedingung kann hier angegeben werden, wo Sie möchten, dass diese Bedingung relativ zu sein abgeglichen wird. Dies funktioniert genau wie der [Regelstufe `"relative_to"` Schlüssel](#relative_to_2), außer dass es nur eine einzelne `"href_matches"` Bedingung innerhalb eines `"where"` Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die von diesen Selektoren übereinstimmen, erhalten die Regelanwendung.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, die alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie übereinstimmt, _keine_ Regelanwendung darauf hat. Alle Links, die diese Bedingung _nicht_ erfüllen, _werden_ die Regelanwendung erhalten.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede für die Anwendung der Regel übereinstimmen kann.

    `"where"`-Bedingungen können mehrere Ebenen tief verschachtelt sein, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [wo Beispiele](#where_syntax_examples) für mehr Erklärung und mehrere Beispiele zur Verwendung.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorab laden/vorrendern soll, um Leistungsvorteile gegen Ressourcenaufwand abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor glaubt, dass der Link sehr wahrscheinlich gefolgt wird und/oder das Dokument möglicherweise signifikante Zeit zum Abrufen benötigt. Vorabrufen/vorrendern sollte so schnell wie möglich beginnen, nur unter Berücksichtigung von Benutzerpräferenzen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich vorab laden/vorrendern. Vorabrufen/vorrendern sollte bei jedem geringfügigen Vorschlag beginnen, dass ein Link gefolgt werden könnte. Beispielsweise könnte der Benutzer den Mauszeiger auf den Link bewegen, ihn für einen Moment schweben/fokussieren oder beim Scrollen mit dem Link an einem prominenten Ort anhalten.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Vorabrufen/vorrendern sollte beginnen, wenn es einen vernünftigen Vorschlag gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Beispielsweise könnte der Benutzer einen Link in den sichtbaren Bereich scrollen und ihn eine Zeit lang schweben/fokussieren.
    - `"conservative"`
      - : Der Autor wünscht sich einige Vorteile aus spekulativem Laden mit einem relativ geringen Ressourcenaufwand. Vorabrufen/vorrendern sollte nur beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, z.B. bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, haben List-Regeln (`"urls"`) standardmäßig `immediate`, und Dokumentregeln (`"where"`) standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig angedeutet hat als einen anderen, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen Wert des {{httpheader("No-Vary-Search")}} Headers auf Antworten für Dokumente gesetzt wird, für die es Vorabruf-/Vorrender-Anfragen erhält. Der Browser kann dies im Voraus verwenden, um zu bestimmen, ob es nützlicher ist, auf ein bereits laufendes Vorabrufen/Vorrendern zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für mehr Erklärung zur Verwendung.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Policy angibt, die beim Anfordern der in der Regel angegebenen URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck besteht darin, der verweisenden Seite zu ermöglichen, eine strengere Richtlinie speziell für die spekulative Anforderung festzulegen als die Richtlinie, die die Seite bereits festgelegt hat (entweder standardmäßig oder durch Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein websitespezifischer Vorabruf erfordert eine Referrer-Policy, die mindestens genauso streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine in den Spekulationsregeln festgelegte laxere Richtlinie überschreibt eine strengere Richtlinie, die auf der verweisenden Seite festgelegt wurde, solange sie für die grenzüberschreitende Abfrage noch ausreichend streng ist.

    > [!NOTE]
    > Im Fall von Dokumentregeln wird die angegebene Referrer-Policy des übereinstimmenden Links (z.B. mit dem [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attribut) verwendet, es sei denn, die Regel spezifiziert eine Richtlinie, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass Links, die durch eine URL abgeglichen werden, relativ dazu sein sollen. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument abgeglichen werden, auf dem die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollten relativ zur Datei abgeglichen werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (gesetzt über den {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments festgelegt werden, für das sie festgelegt werden (d.h. in einem inline `<script>` Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, die Fähigkeiten des Browsers, der die Regel analysiert, darstellen, die verfügbar sein müssen, wenn die Regel auf die angegebenen URLs angewendet werden soll.

    > [!WARNING]
    > Vorabrufe schlagen in Browsern, die eine festgelegte Anforderung nicht erfüllt werden können, automatisch fehl, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur für Vorabrufe) Gibt an, dass die Regel nur dann übereinstimmt, wenn der Benutzeragent die Sichtbarkeit der Client-IP-Adresse gegenüber dem Ursprungsserver verhindern kann, wenn eine grenzüberschreitende Vorabrufanfrage ausgeführt wird. Die genaue Funktionsweise hängt von den spezifischen Browserimplementierungen ab. Zum Beispiel:
        - Chromes Implementierung versteckt die IP-Adresse durch einen von Google betriebenen Proxy, daher funktioniert sie standardmäßig nur für Google-kontrollierte Verweiser (da in diesem Fall das Senden der URLs des Ziels an Google kein zusätzliches Datenschutzleck darstellt). Wenn auf einer nicht von Google kontrollierten Seite verwendet, stimmen Regeln, die dies beinhalten, nur für Nutzer überein, die "Erweitertes Vorladen" in `chrome://settings/preloading` aktivieren.
        - Andere Chromium-basierte Browser müssen ihre eigenen Lösungen bereitstellen. Gründliche Tests in allen Zielbrowsern werden empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas wie [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte möglicherweise etwas verwenden, das auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt basiert.

- `"tag"` {{experimental_inline}}

  - : Ein String, der zur Identifizierung einer Regel oder Regelgruppe verwendet wird. Dies wird in der {{HTTPHeader("Sec-Speculation-Tags")}} Anfrage-Header für alle von dieser Regel abgedeckten Spekulationen enthalten sein.

- `"target_hint"` {{experimental_inline}}
  - : Ein String, der angibt, wo die Seite erwartet, dass der vorgeladene Inhalt aktiviert wird.
    Die Direktive wird für Vorabruf-Spekulationen nicht unterstützt.
    Zulässige Werte sind:
    - `"target_hint": "_blank"`
      - : Vorgeladene Inhalte in einer neuen Seite öffnen.
    - `"target_hint": "_self"`
      - : Vorgeladene Inhalte auf der aktuellen Seite öffnen.
        Dies ist der Standardwert, wenn nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>` Element verwenden, müssen sie ausdrücklich in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt sein, wenn die Seite sie einschließt. Dies geschieht durch Hinzufügen des `"inline-speculation-rules"` Wertes zusammen mit einer Hash- oder Nonce-Quelle.

## Beispiele

### Vorabrufen und Vorrendern im gleichen Satz von Regeln

Die im Beschreibungsteil gezeigten Beispiele umfassten separate definierte Spekulationsregeln für Vorabrufen und Vorrendern. Es ist möglich, beide in einem einzigen Satz von Regeln zu definieren:

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
> Dieses Codebeispiel zeigt ein List-Regel (`"urls"`) Beispiel und ein Dokumentregel (`"where"`) Beispiel.

### Mehrere Regelsätze

Es ist auch zulässig, mehrere Regelsätze in einer einzigen HTML-Datei einzuschließen:

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

```html
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

### Dynamisches Regel-Einfügen

Unten ist ein Beispiel, das die Unterstützung von Spekulationsregeln erkennt und bei Unterstützung dynamisch eine Vorrender-Spekulationsregel über JavaScript hinzufügt:

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

Sie können dies in Aktion auf dieser [Prerender-Demos](https://prerender-demos.glitch.me/) Seite sehen.

### `where` Syntaxbeispiele

Eine dokumentenbezogene Regel enthält eine `"where"` Eigenschaft, die ein Objekt mit Kriterien darstellt, die definieren, welche Links im Dokument übereinstimmen. Im Wesentlichen stellt das `"where"` Objekt einen Test dar, der für jeden Link auf der Seite ausgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die grundlegendste Version wird ein einzelnes URL-Muster oder einen CSS-Selektor abgleichen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig übereinstimmen können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalter (`*`) Zeichen enthalten, was es einem einzigen Wert ermöglicht, mehrere URLs zu entsprechen. Zum Beispiel könnte das folgende Objekt `user/`, `user/settings`, `user/stats` usw. abgleichen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` zielgerichtet sein. Zum Beispiel könnte das folgende Objekt alle gleichherkunftlichen URLs mit einem `category` Suchparameter abgleichen (als erstes oder als nachfolgendes Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"` Bedingung gesetzt wird — das bedeutet, dass beim Übereinstimmen eines Links _keine_ Spekulationsregel auf ihn angewendet wird, aber wenn _nicht_ übereinstimmt, _wird_ sie angewendet. Das folgende Beispiel wird bewirken, dass alle Links, die _nicht_ das URL-Muster `/logout` entsprechen, die Regelanwendung erhalten, aber keine Links, die `/logout` entsprechen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"` Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden — diese nehmen den Wert von Arrays, die mehrere Bedingungen enthalten, bei denen alle oder jede (jeweils) übereinstimmen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt kein spezifiziertes Limit für zulässige Verschachtelungsebenen.

Es ist nützlich, das `"where"` Objekt als einem `if` Statement gleichwertig zu betrachten. So ist

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

gleichwertig zu

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle gleichherkunftlichen Seiten zum Vorabrufen markiert, außer denjenigen, von denen bekannt ist, dass sie problematisch sind — die `/logout` Seite und alle Links, die mit einer Klasse von `.no-prerender` versehen sind:

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
> Das `where` Muster oben schließt Links zu anderen Websites, die für das Vorabrufen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Ziel-Website gesetzt, um das Tracking zu verhindern) aber nicht für das Vorrendern, nicht ein.

### `"relative_to"` Beispiel

Für Regelsätze, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Antwort-Header), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der externen Textdatei analysiert. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu analysieren, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` kombiniert werden und die Basis-URL des Dokuments würde nur für Muster in dieser speziellen Bedingung verwendet:

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

Im obigen Beispiel wird nur das erste `"href_matches"` relativ zur Basis-URL des Dokuments übereinstimmen.

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei sich unter einem anderen Ursprung als das Dokument befindet, auf das Sie sie anwenden möchten:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json` sind, entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn sich das Dokument jedoch unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://other.example/resources/rules.json` sind (zum Beispiel auf einem Drittanbieterserver oder cookiefreien Ressourcenursprung), dann:

   - `"relative_to": "document"` wird dazu führen, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` wird dazu führen, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein anderer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann:
   - `"relative_to": "document"` würde dazu führen, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde dazu führen, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Ankunftsseite, `/users`, die einen `id` Parameter hat, der hinzugefügt wird, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL als identisch für Caching-Zwecke angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit den Informationen für den angegebenen Benutzer zu laden, sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Ausziehpanel anzuzeigen, das deren Daten anzeigt, sollte die URL für Caching-Zwecke als gleich angesehen werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch ein {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, wenn die Header für das Vorabrufen von `/users` noch nicht eingegangen sind? An diesem Punkt weiß der Browser noch nicht, was der `No-Vary-Search` Wert sein wird, falls es einen gibt. Wenn kein `No-Vary-Search` Wert festgelegt war und das Anwendungsverhalten eher wie Option 1 oben war, wäre das Vorabrufen verschwendet und der Browser würde die separate `/users?id=345` Seite von Anfang an neu abrufen müssen.

Um dies zu lösen, können wir einen Hinweis geben, was der Seitenautor erwartet, dass der `No-Vary-Search` Wert sein wird. Eine Spekulationsregel kann ein `"expects_no_vary_search"` Feld haben, das eine String-Darstellung des erwarteten Header-Werts enthält:

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

Dies zeigt an, dass Option 2 oben beschrieben das ist, was der Server voraussichtlich produzieren wird. Wenn eine Navigation startet, während ein laufendes Vorabrufen von `/users` läuft, teilt dies dem Browser mit, dass es angemessen ist, auf das Vorabrufen zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig vom verwendeten Muster. Zum Beispiel im Fall von:

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

Wenn ein Link hovriert wird, wird der Browser beginnen, diesen bestimmten Link vorzubladen.

Wenn der Benutzer einen anderen Link hovriert, bevor das Vorabrufen abgeschlossen ist, teilt das `expects_no_vary_search` Muster dem Browser mit, dass es nicht notwendig ist, das aktuelle Vorabrufen zu stornieren, da alle `/users` URLs mit `id` URL Parameterwerten in diesem Kontext effektiv auf dieselbe Seite verweisen (und für Caching-Zwecke).

> [!WARNING]
> Es muss zusätzliche Vorsicht geboten werden, wenn Prerender mit `No-Vary-Search` verwendet wird, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorgeladen wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Medium vom Server liefern, aber von der Client-Seite aus verschiedenen Gründen verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analytikmessungen usw.). Da das initiale Vorrendern möglicherweise für unterschiedliche URL-Parameter erfolgt, sollte jeder Code, der davon abhängt, erst nach der Prerender-Aktivierung ausgeführt werden.

Mehrere Parameter können in einem durch Leerzeichen geteilten Array bereitgestellt werden:

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
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter durch Leerzeichen getrennte, zitierte Strings sein — wie oben gezeigt — und nicht durch Kommas getrennt, wie Entwickler möglicherweise gewohnt sind.

### `eagerness` Beispiel

Das folgende Set von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um einen Hinweis darauf zu geben, mit welcher E

ifrigkeit der Browser jede übereinstimmende Gruppe von Links vorrendern soll.

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

Hier wird angedeutet, dass:

- Alle gleichherkunftlichen Links im Dokument konservativ vorgeladen werden sollen (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument eifrig vorgeladen werden sollen (d.h. wenn der Benutzer jegliche Art von Bewegung in Richtung der Navigation zu ihnen macht).

> [!NOTE]
> Die Auswirkungen von Eager-Einstellungen sind weniger nützlich für Listregeln. Standardmäßig werden die URLs von Listregeln sofort vorgeladen/vorgeladen, sobald die Regeln analysiert werden, was Sie erwarten würden — sie sind für die explizite Auflistung von URLs mit hoher Priorität gedacht, die Sie so schnell wie möglich verfügbar machen möchten. Deshalb hat `eager` in aktuellen Implementierungen den gleichen Effekt wie `immediate`. Niedrigere eagerness-Einstellungen sind für das Vorabrufen/Vorrendern, wenn mit Links interagiert wird, und für diese verwenden Sie wahrscheinlich eher Dokumentregeln, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann auf oberster Ebene enthalten sein, um die gesamte Regelgruppe zu identifizieren:

```html
<script type="speculationrules">
  {
    "tag": "my-rules",
    "prerender": [
      {
        "where": { "href_matches": "/*" },
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

Oder um einzelne Regeln zu identifizieren:

```html
<script type="speculationrules">
  {
    "prefetch": [
      "tag": "my-prefetch-rule",
      "urls": ["next.html"]
    ],
    "prerender": [
      "tag": "my-prerender-rule",
      "urls": ["next2.html"]
    ],
  }
</script>
```

Weitere Beispiele finden Sie unter {{HTTPHeader("Sec-Speculation-Tags")}}.

### `target_hint` Beispiel

Ein `target_hint` kann enthalten sein, um das Ziel für das Öffnen von übereinstimmenden Vorrender-Spekulationen anzuzeigen:

```html
<script type="speculationrules">
  {
    "tag": "my-rules",
    "prerender": [
      {
        "eagerness": "eager",
        "target_hint": "_blank",
        "urls": ["page2.html"]
      }
    ]
  }
</script>
```

Die oben angegebenen Regeln ermöglichen es, die folgenden Links korrekt in den geeigneten Zielen vorzurendern:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` ist nur für Listregeln erforderlich, die `urls` verwenden.
Sie werden nicht für Dokumentregeln (die `where` verwenden) benötigt, da in diesen das Ziel aus dem `target` Attribut des `<a>` Linkelements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigation] (https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
