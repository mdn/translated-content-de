---
title: <script type="speculationrules">
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>` Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorausgeladen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können innerhalb extern referenzierter Textdateien definiert werden, auf die über den {{httpheader("Speculation-Rules")}} HTTP-Header verwiesen wird. Dies nutzt die gleiche [nachfolgend bereitgestellte JSON-Darstellung](#spekulationsregeln_json-darstellung). Das Festlegen eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">` Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Regeln für Prefetch und Prerender:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf der obersten Ebene, von denen jedes eine Aktion zur Definition von Spekulationsregeln repräsentiert. Derzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für mögliche zukünftige Navigationen, deren zugehöriger Dokumentenantwortkörper heruntergeladen werden sollte, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der vom Dokument referenzierten Unterressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für mögliche zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollten. Dies beinhaltet das Laden aller Unterressourcen, das Ausführen von JavaScript und sogar das Laden von Unterressourcen und das Durchführen von Datenerfassungen, die durch JavaScript gestartet werden. Wenn zu diesen Dokumenten navigiert wird, sind die Übergänge sofort, was zu großen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Nutzung von Prefetch und Prerender.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Menge von URLs und verwandten Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}
  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eine der folgenden sein:
    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} Elementen definiert) basierend auf den durch einen `"where"` Schlüssel beschriebenen Bedingungen angepasst werden. Beachten Sie, dass die Anwesenheit eines `"where"` Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"` Schlüssel angegeben ist. Beachten Sie, dass die Anwesenheit eines `"urls"` Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}
  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn sie inline in einem Dokument sind) oder relativ zur URL der externen Ressource (wenn sie extern abgerufen werden) geparst. `"urls"` und `"where"` können nicht beide in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}
  - : Ein Objekt, das die Bedingungen darstellt, unter denen die Regel auf URLs im zugehörigen Dokument angewendet wird. Effektiv repräsentiert das `"where"` Objekt einen Test, der bei jedem Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der standardmäßigen [URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs dem Muster oder den Mustern entsprechen, werden die Regel angewendet.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"` Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ dazu abgeglichen wird. Dies funktioniert genauso wie der [regelbezogene `"relative_to"` Schlüssel](#relative_to_2), nur dass er nur eine einzelne `"href_matches"` Bedingung innerhalb eines `"where"` Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die diesen Selektoren entsprechen, wird die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, die alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, bei deren Übereinstimmung die Regel _nicht_ darauf angewendet wird. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, werden _mit_ der Regel angewendet.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede für die Anwendung der Regel auf sie übereinstimmen kann.

    `"where"` Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für weitere Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis gibt, mit welcher Eile er Linkziele vorladen/vorgeladen sollte, um Leistungsverbesserungen gegen Ressourcenkosten abzuwägen. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor hält den Link für sehr wahrscheinlich gefolgt und/oder das Dokument kann signifikant lange zum Abrufen dauern. Das Vorladen/Vorbereiten sollte so schnell wie möglich beginnen, vorbehaltlich nur Überlegungen wie Benutzerpräferenzen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich laden. Das Vorladen/Vorbereiten sollte bei jedem geringfügigen Hinweis beginnen, dass ein Link möglicherweise gefolgt wird. Beispielsweise könnte der Benutzer den Mauszeiger über den Link bewegen, ihn für einen Moment anvisieren/fokussieren oder das Scrollen mit dem Link an einer prominenten Stelle pausieren.
    - `"moderate"`
      - : Der Autor sucht einen Ausgleich zwischen `eager` und `conservative`. Das Vorladen/Vorbereiten sollte beginnen, wenn es eine vernünftige Annahme gibt, dass der Benutzer einen Link in naher Zukunft folgen wird. Beispielsweise könnte der Benutzer einen Link in den Ansichtsbereich scrollen und ihn eine Weile anvisieren/fokussieren.
    - `"conservative"`
      - : Der Autor möchte sich einige Vorteile des spekulativen Ladens mit einem relativ geringen Ressourceneinsatz sichern. Das Vorladen/Vorbereiten sollte erst beginnen, wenn der Benutzer beginnt, den Link zu klicken, zum Beispiel bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht ausdrücklich angegeben wird, haben List (`"urls"`) Regeln standardmäßig `immediate` und Dokument (`"where"`) Regeln standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor weniger dringend angedeutet hat als einen anderen, wenn der weniger dringende Kandidat als bessere Wahl gilt.

- `"expects_no_vary_search"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher {{httpheader("No-Vary-Search")}} Headerwert für Antworten gesetzt wird, für die es Anfragen zum Vorladen/Vorbereiten erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein bereits laufendes Vorladen/Vorbereiten zu warten oder eine neue Abrufanforderung zu starten, wenn die Spekulationsregel zutrifft. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für weitere Erklärungen zur Verwendung.

- `"referrer_policy"` {{experimental_inline}}
  - : Ein String, der eine spezifische Referrer-Policy darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet wird – siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon ist es, der verweisenden Seite zu ermöglichen, eine strengere Richtlinie speziell für die spekulative Anforderung festzulegen als die Richtlinie, die die Seite bereits hat (entweder standardmäßig oder mit `Referrer-Policy`).

    > [!NOTE]
    > Ein cross-site Vorladen erfordert eine Referrer-Policy, die mindestens so streng ist wie der standardmäßige `"strict-origin-when-cross-origin"`-Wert — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine in den Spekulationsregeln festgelegte weniger strenge Richtlinie überschreibt eine strengere Richtlinie auf der verweisenden Seite, sofern sie für den cross-site-Fall noch ausreichend streng ist.

    > [!NOTE]
    > Bei Dokumentregeln wird die angegebene Referrer-Policy des übereinstimmenden Links (z. B. unter Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attributs) verwendet, es sei denn, die Regel gibt eine Richtlinie an, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}
  - : Ein String, der angibt, wo Sie möchten, dass durch URL abgestimmte Links relativ dazu abgeglichen werden. Der Wert kann einer der folgenden sein:
    - `document`
      - : URLs sollten relativ zum Dokument abgeglichen werden, auf dem die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei abgeglichen werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Einstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (festgelegt mit dem {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments festgelegt sind, für das sie gelten (d.h. in einem Inline-`<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}
  - : Ein Array von Strings, das Fähigkeiten des Browsers darstellt, der die Regel analysiert, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorladungen werden in Browsern, die eine festgelegte Anforderung nicht erfüllen können, automatisch fehlschlagen, auch wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur Vorladen) Gibt an, dass die Regel nur übereinstimmt, wenn der Benutzeragent verhindern kann, dass die Client-IP-Adresse für den Ursprungsserver sichtbar ist, wenn eine cross-origin-Vorladeanforderung gesendet wird. Wie genau dies funktioniert, hängt von den Implementierungsspezifika des Browsers ab. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse über einen von Google betriebenen Proxy, daher funktioniert es standardmäßig nur für Google-kontrollierte Verweise (da in diesem Fall das Senden der URLs des Ziels an Google kein zusätzlicher Datenschutzverlust ist). Wenn es auf einer nicht von Google betriebenen Seite verwendet wird, stimmt dies nur für Benutzer überein, die "Erweitertes Vorladen" in `chrome://settings/preloading` aktivieren.
        - Andere Chromium-basierte Browser müssen ihre eigenen Lösungen bereitstellen. Eine gründliche Testung in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas in der Art von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte etwas basierend auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt verwenden.

- `"tag"` {{experimental_inline}}
  - : Ein String, der verwendet wird, um eine Regel oder ein Regelset zu identifizieren. Dies wird im {{HTTPHeader("Sec-Speculation-Tags")}} Anforderungsheader für alle Spekulationen enthalten sein, die von dieser Regel abgedeckt werden.

- `"target_hint"` {{experimental_inline}}
  - : Ein String, der angibt, wo der Inhalt des vorgeladenen Ziels aktiviert werden soll.
    Die Direktive wird für Vorladenspekulationen nicht unterstützt.
    Erlaubte Werte sind:
    - `"target_hint": "_blank"`
      - : Öffnen Sie den vorgeladenen Inhalt in einer neuen Seite.
    - `"target_hint": "_self"`
      - : Öffnen Sie den vorgeladenen Inhalt auf der aktuellen Seite.
        Dies ist der Standard, wenn nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie ausdrücklich in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, falls die Seite dies einschließt. Dies wird durch Hinzufügen des `"inline-speculation-rules"` Werts zusammen mit einer Hash- oder Nonce-Quelle erreicht.

## Beispiele

### Prefetch und Prerender im gleichen Regelset

Die Grundbeispiele, die im Beschreibungsteil gezeigt werden, umfassen separate Spekulationsregeln für Prefetch und Prerender. Es ist möglich, beide in einem einzigen Regelset zu definieren:

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
> Dieses Codebeispiel bietet ein Listen-(`"urls"`) Regel- und ein Dokument-(`"where"`) Regelbeispiel.

### Mehrere Regelsets

Es ist ebenfalls erlaubt, mehrere Regelsets in eine einzige HTML-Datei einzuschließen:

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

Und mehrere Regeln in einem einzigen Resultatset:

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

### Dynamische Regelinsertion

Nachfolgend sehen Sie ein Beispiel, das Spekulationsregeln erkennt und, falls unterstütz, dynamisch eine Prerender-Spekulationsregel über JavaScript hinzufügt:

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

### Beispiele für `where`-Syntax

Eine regelbasierte Regel enthält eine `"where"` Eigenschaft, die ein Objekt mit Kriterien umfasst, welche Links im Dokument abgeglichen werden. Effektiv repräsentiert das `"where"`-Objekt einen Test, der bei jedem Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird ein einziges URL-Muster oder einen CSS-Selektor abgleichen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, damit mehrere URL-Muster oder CSS-Selektoren gleichzeitig übereinstimmen:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und -Selektoren können auch Platzhalterzeichen (`*`) enthalten, wodurch ein einzelner Wert mit mehreren URLs übereinstimmen kann. Das folgende Objekt kann beispielsweise `user/`, `user/settings`, `user/stats`, usw. abgleichen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können ebenfalls in `href_matches` gezielt werden. Das folgende Objekt könnte beispielsweise alle gleichen Ursprungs-URLs mit einem `category` Suchparameter (als erster oder nachfolgender Parameter) abgleichen:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"` Bedingung gestellt wird — dies bedeutet, dass bei einer Übereinstimmung keine Regel auf den Link angewendet wird, bei keiner Übereinstimmung jedoch schon. Das folgende Beispiel wird dazu führen, dass alle Links, die nicht mit dem URL-Muster `/logout` übereinstimmen, die Regel auf sie angewendet bekommen, jedoch nicht Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden — diese nehmen den Wert von Arrays mit mehreren Bedingungen an, bei denen alle oder eine beliebige Bedingung (jeweils) für die Anwendung der Spekulationsregeln auf einem Link übereinstimmen muss. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt kein festgelegtes Limit für die erlaubten Verschachtelungsstufen.

Es ist hilfreich, das `"where"`-Objekt als gleichwertig zu einer `if`-Anweisung zu betrachten. Also spart

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist gleichwertig zu

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle Seiten mit dem gleichen Ursprung für das Vorladen markiert, mit Ausnahme der als problematisch bekannten — der `/logout`-Seite und allen Links, die mit einer `.no-prerender` Klasse markiert sind:

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
> Das `where`-Muster oben umfasst keine cross-site-Links, die zum Vorladen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielsite gesetzt, um das Tracking zu verhindern), jedoch nicht für Prerendering.

### `"relative_to"` Beispiel

Für Regelsets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Antwort-Header), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei sich auf einem anderen Ursprung befindet als das Dokument, für das Sie sie anwenden möchten:

1. Wenn das Dokument sich unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann entspricht `/home` immer `https://example.com/home` unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Befindet sich das Dokument jedoch unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` (zum Beispiel auf einem Drittanbieter- oder cookieless Ressourcen-Ursprung), dann:
   - `"relative_to": "document"` wird `/home` zu `https://example.com/home` entsprechen lassen.
   - `"relative_to": "ruleset"` wird `/home` zu `https://other.example/home` entsprechen lassen.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn das Dokument sich unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann:
   - `"relative_to": "document"` würde `home` zu `https://example.com/some/home` entsprechen lassen.
   - `"relative_to": "ruleset"` würde `home` zu `https://example.com/resources/home` entsprechen lassen.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Nutzerdirektorium-Einstiegsseite, `/users`, die einen `id` Parameter enthält, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob dieser URL für Caching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit Informationen zum angegebenen Benutzer zu laden, sollte die URL separat gecacht werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und gegebenenfalls ein Ziehapanel mit deren Daten anzuzeigen, sollte die URL für Caching-Zwecke als gleich angesehen werden. Dies könnte Leistungsvorteile beim Laden der Nutzerseiten bringen und könnte über einen {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, wenn die Header für das Vorladen von `/users` noch nicht empfangen wurden? An diesem Punkt weiß der Browser nicht, welchen `No-Vary-Search` Wert er haben wird, falls vorhanden. Wenn kein `No-Vary-Search` Wert gesetzt wird und das Anwendungsverhalten eher wie Option 1 oben ist, wäre das Vorladen verschwendet und der Browser müsste für die separate `/users?id=345` Seite von Anfang an eine neue Anforderung machen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search` Wert ist. Eine Spekulationsregel kann ein `"expects_no_vary_search"` Feld haben, das eine String-Darstellung des erwarteten Headerwerts enthält:

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

Dies weist darauf hin, dass Option 2 oben die erwartete Serverausgabe ist. Wenn eine Navigation beginnt, während es ein laufendes Vorladen von `/users` gibt, informiert dies den Browser darüber, dass es angemessen ist, auf das Vorladen zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentregeln können auch in Kombination mit `"expects_no_vary_search"` verwendet werden, abhängig vom verwendeten Muster. Zum Beispiel im Fall von:

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

Wenn ein Link angesteuert wird, beginnt der Browser damit, diesen spezifischen Link vorzubereiten.

Wenn der Benutzer einen anderen Link ansteuert, bevor das Vorladen abgeschlossen ist, teilt das `expects_no_vary_search` Muster dem Browser mit, dass es nicht notwendig ist, das aktuelle Vorladen abzubrechen, da alle `/users` URLs mit `id` URL-Parameterwerten in diesem Kontext (und für Caching-Zwecke) effektiv auf dieselbe Seite verweisen.

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn Prerenderring mit `No-Vary-Search` verwendet wird, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorgeladen wird. `No-Vary-Search` wird für URL-Parameter verwendet, die vom Server die gleiche Ressource liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendern, UTM-Parameter zur Analyse-Messung, usw.). Da das initiale Prerendering für verschiedene URL-Parameter erfolgen kann, sollte jeder Code, der von ihnen abhängt, erst nach der Aktivierung des Prerendering ausgeführt werden.

Mehrere Parameter können in einem durch Leerzeichen getrennten Array bereitgestellt werden:

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
> Als [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter als leerezeichengetrennte, in Anführungszeichen gesetzte Strings bereitgestellt werden — wie oben gezeigt — und nicht durch Kommas getrennt, so wie Entwickler es vielleicht gewöhnt sind.

### `eagerness` Beispiel

Das folgende Dokumentregelset zeigt, wie `eagerness` verwendet werden kann, um die Eile anzuzeigen, mit der der Browser jedes übereinstimmende Set von Links vorbereiten sollte.

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

Hier geben wir an, dass:

- Alle Links derselben Site, die im Dokument enthalten sind, konservativ vorbereitet werden sollen (d.h. wenn der Benutzer beginnt, diese auszuführen).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig vorbereitet werden (d.h. wenn der Benutzer irgendeine Art von Bewegung in Richtung einer Navigation zu ihnen macht).

> [!NOTE]
> Die Auswirkungen von Eiligkeitseinstellungen sind bei Listenregeln weniger nützlich. Standardmäßig werden URLs von Listenregeln sofort vorgeladen/vorbereitet, sobald die Regeln analysiert werden, was erwartet wird — sie sind für die explizite Liste priorisierter URLs gedacht, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` dieselbe Wirkung wie `immediate` in den aktuellen Implementierungen. Niedrigere Eiligkeitseinstellungen sind für Vorlade-Vorgänge, wenn Links interagiert werden, und dafür werden Sie eher Dokumentregeln verwenden, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann auf der obersten Ebene hinzugefügt werden, um das gesamte Regelset zu identifizieren:

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

Siehe {{HTTPHeader("Sec-Speculation-Tags")}} für weitere Beispiele.

### `target_hint` Beispiel

Ein `target_hint` kann hinzugefügt werden, um das Zielfenster anzugeben, in dem übereinstimmende Prerender-Vermutungen geöffnet werden:

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

Die oben stehenden Regeln erlauben es den folgenden Links, korrekt in den entsprechenden Zielen vorgeladen zu werden:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Sie werden für Dokumentregeln (die `where` verwenden) nicht benötigt, da in diesen das Ziel aus dem `target`-Attribut des `<a>` Link-Elements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Preload-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
