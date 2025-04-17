---
title: <script type="speculationrules">
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 31f1214fbabf51aa60ed6a3dae71b8d257e634d7
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Body des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können innerhalb externer Textdateien definiert werden, auf die durch den {{httpheader("Speculation-Rules")}} HTTP-Header verwiesen wird, und die die gleiche [nachfolgend bereitgestellte JSON-Darstellung](#json-darstellung_der_spekulationsregeln) verwenden. Das Angeben eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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
  - : Die Definition der Spekulationsregeln ist kein gültiges JSON-Objekt.

## Beschreibung

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Regeln für Vorabruf und Vorabrendering:

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

### JSON-Darstellung der Spekulationsregeln

Die JSON-Struktur enthält auf oberster Ebene ein oder mehrere Felder, von denen jedes eine Aktion zur Definition von Spekulationsregeln darstellt. Gegenwärtig werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehöriger Dokumentantwortkörper heruntergeladen werden sollte, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der vom Dokument referenzierten Ressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollten. Dies umfasst das Laden aller Ressourcen, das Ausführen von JavaScript und sogar das Laden von Ressourcen und das Durchführen von Datenabrufen, die von JavaScript gestartet werden. Wenn zu diesen Dokumenten navigiert wird, erfolgen die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Nutzung von prefetch und prerender.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Reihe von URLs und verwandte Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eines der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert) basierend auf den im `"where"`-Schlüssel beschriebenen Bedingungen übereinstimmen. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"`-Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur externen Ressourcen-URL (wenn extern abgerufen) analysiert. `"urls"` und `"where"` können nicht zusammen in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, unter denen die Regel auf URLs im zugehörigen Dokument angewendet wird. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht zusammen in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der Standard-[URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit den Mustern übereinstimmen, werden die Regel angewendet.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ dazu abgeglichen wird. Dies funktioniert genauso wie der [regelübergreifende `"relative_to"`-Schlüssel](#relative_to_2), außer dass er nur eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die mit diesen Selektoren übereinstimmen, wird die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthält, von denen alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthält, bei der, wenn es zutrifft, die Regel _nicht_ darauf angewendet wird. Alle Links, die _nicht_ der Bedingung entsprechen, wird die Regel _angewendet_.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen enthält (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`), von denen jede übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für mehr Erklärung und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorab laden/renderer soll, um Leistungsvorteile gegen Ressourcenaufwand abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass dem Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument könnte erhebliche Zeit zum Abrufen benötigen. Prefetch/Prerender sollte so schnell wie möglich beginnen, vorbehaltlich nur solcher Überlegungen wie Benutzereinstellungen und Ressourcenlimits.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich vorab laden/renderer. Prefetch/Prerender sollte bei jedem geringsten Hinweis darauf beginnen, dass einem Link gefolgt werden könnte. Beispielsweise könnte der Benutzer den Mauszeiger in Richtung des Links bewegen, ihn für einen Moment fokussieren oder das Scrollen mit dem Link an prominenter Stelle anhalten.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Prefetch/Prerender sollte beginnen, wenn es eine vernünftige Anzeichen dafür gibt, dass der Benutzer einem Link in naher Zukunft folgen wird. Beispielsweise könnte der Benutzer einen Link in den Viewport scrollen und ihn für einige Zeit fokussieren.
    - `"conservative"`
      - : Der Autor wünscht sich einige Vorteile aus spekulativem Laden mit einem recht kleinen Tausch von Ressourcen. Prefetch/Prerender sollte erst beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, beispielsweise auf [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben wird, standardisieren Listen- (`"urls"`) Regeln auf `immediate` und Dokument- (`"where"`) Regeln auf `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er einen Link auswählen kann, auf den der Autor weniger eifrig hingewiesen hat, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher {{httpheader("No-Vary-Search")}} Headerwert für Dokumente festgelegt wird, für die er Vorabruf-/Vorladeranfragen erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es sinnvoller ist, auf das Ende eines bestehenden Vorabrufs/Vorladders zu warten oder eine neue Abfrage zu starten, wenn die Spekulationsregel erfüllt ist. Siehe das Beispiel zu [`"expects_no_vary_search"`](#expects_no_vary_search_example) für mehr Erklärung zur Verwendung.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine bestimmte Referrer-Richtlinienzeichenfolge darstellt, die verwendet wird, wenn die in der Regel angegebenen URLs angefordert werden — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon ist, der verweisenden Seite zu erlauben, speziell für die spekulative Abfrage eine strengere Richtlinie festzulegen als die Richtlinie, die die Seite bereits festgelegt hat (entweder standardmäßig oder durch Nutzung des `Referrer-Policy`).

    > [!NOTE]
    > Ein cross-site Prefetch erfordert eine Referrer-Richtlinie, die mindestens so streng wie der Standardwert `"strict-origin-when-cross-origin"` ist — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine untergeordnetere Richtlinie, die in den Spekulationsregeln festgelegt ist, überschreibt eine strengere Richtlinie, die auf der verweisenden Seite festgelegt ist, solange sie immer noch ausreichend streng für den cross-site-Fall ist.

    > [!NOTE]
    > Im Falle von Dokumentregeln wird die angegebene Referrer-Politik des verlinkten Links (z. B. mit dem [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-Attribut) verwendet, es sei denn, die Regel spezifiziert eine Politik, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass Links anhand von URLs relativ dazu abgeglichen werden. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument abgeglichen werden, auf dem die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei abgeglichen werden, in der die Regeln festgelegt sind. Dies ist der Standardwert.

    Diese Schlüsselkonfiguration ist nur für Regeln von Bedeutung, die in einer externen Datei definiert sind (festgelegt mithilfe des {{httpheader("Speculation-Rules")}} Headers). Wenn Regeln innerhalb des gleichen Dokuments festgelegt sind, für das sie festgelegt werden (d.h. in einem Inline-`<script>`-Element), spielt es keine Rolle.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, das Fähigkeiten des Browsers, der die Regel analysiert, darstellt, die verfügbar sein müssen, wenn die Regel auf die angegebenen URLs angewendet werden soll.

    > [!WARNING]
    > Prefetches schlägt automatisch fehl in Browsern, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur für Prefetch) Gibt an, dass die Regel nur übereinstimmt, wenn der Benutzeragent die Client-IP-Adresse davon abhalten kann, für den Ursprungsserver sichtbar zu sein, wenn eine cross-origin Vorabruf-Anfrage ausgegeben wird. Genau wie dies funktioniert, hängt von browserimpliziten Details ab. Beispiele:
        - Die Implementierung von Chrome verbirgt die IP-Adresse über einen von Google kontrollierten Proxy, daher funktioniert sie standardmäßig nur bei von Google kontrollierten Verweisern (da in diesem Fall die URL der Zielseite an Google zu senden, kein zusätzlicher Datenschutzverlust ist). Bei Verwendung auf einer nicht von Google kontrollierten Seite stimmen Regeln, die dies enthalten, nur für Benutzer überein, die in `chrome://settings/preloading` "Enhanced preloading" aktivieren.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bereitstellen. Umfassende Tests in allen Zielbrowsern werden empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas ähnlich der [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte etwas basierend auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt verwenden.

- `"tag"` {{experimental_inline}}

  - : Ein String, der verwendet wird, um eine Regel oder ein Regelset zu identifizieren. Diese wird in den {{httpheader("Sec-Speculation-Tags")}}-Anfrage-Header für alle Spekulationen aufgenommen, die von dieser Regel abgedeckt werden.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie ausdrücklich in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Anweisung erlaubt werden, wenn die Seite diese enthält. Dies erfolgt durch Hinzufügen des `"inline-speculation-rules"`-Werts zusammen mit einem Hash- oder nonce-Source.

## Beispiele

### Vorabruf und Vorabrendering im selben Regelset

Die in der Beschreibungssektion gezeigten Grundbeispiele enthielten separate Spekulationsregeln für Vorabruf und Vorabrendering. Es ist möglich, beides in einem einzigen Regelset zu definieren:

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
> Dieses Code-Snippet bietet ein Beispiel für eine Listenregel (`"urls"`) und eine Dokumentregel (`"where"`).

### Mehrfache Regelsets

Es ist auch erlaubt, mehrere Regelsets in einer einzigen HTML-Datei einzuschließen:

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

Und mehrere Regeln in einem einzigen Ergebnis-Set:

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

### Dynamisches Regel-Insertion

Im Folgenden ist ein Beispiel, das Spekulationsregeln erkennt und, falls unterstützt, dynamisch eine Vorabrendering-Spekulationsregel über JavaScript hinzufügt:

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

### `where`-Syntax-Beispiele

Eine dokumentenbasierte Regel enthält eine `"where"`-Eigenschaft, die ein Objekt mit Kriterien ist, das definiert, welche Links im Dokument übereinstimmen. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird ein einzelnes URL-Muster oder einen CSS-Selektor übereinstimmen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig übereinstimmen:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Wildcard (`*`)-Zeichen enthalten, sodass ein einzelner Wert mehrere URLs übereinstimmen kann. Zum Beispiel könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` angezielt werden. Zum Beispiel könnte das untenstehende Objekt alle gleich-origin URLs mit einem `category` Suchparameter (als erster oder nachfolgender Parameter) ansprechen:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann durch Platzierung innerhalb einer `"not"`-Bedingung negiert werden — das bedeutet, dass ein Link, wenn er übereinstimmt, die Spekulationsregel _nicht_ darauf angewendet wird, aber wenn er _nicht_ übereinstimmt, sie _angewendet_ wird. Das folgende Beispiel bewirkt, dass alle Links, die mit dem URL-Muster `/logout` _nicht_ übereinstimmen, die Regel darauf angewendet wird, aber nicht bei Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"`- oder `"or"`-Bedingungen kombiniert werden — diese nehmen den Wert von Arrays mit mehreren Bedingungen an, von denen alle oder eine (jeweils) übereinstimmen muss, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt kein festgelegtes Limit für erlaubte Verschachtelungsebenen.

Es ist hilfreich, das `"where"`-Objekt als Äquivalent zu einer `if`-Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist gleichbedeutend mit

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregel-Beispiel werden alle gleich-origin Seiten zum Vorabrufen markiert, außer denen, die als problematisch bekannt sind — die `/logout`-Seite und alle mit einer Klasse von `.no-prerender` markierten Links:

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
> Das obige `where`-Muster enthält keine Cross-Site-Links, die für Vorabrufe unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um Verfolgung zu verhindern), aber nicht für Vorabrendering.

### `"relative_to"` Beispiel

Für Regelsets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}}-Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der externen Textdatei analysiert. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu analysieren, wird `"relative_to"` so verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden, und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei sich auf einem anderen Ursprung befindet als das Dokument, auf das sie angewendet werden sollen:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn sich das Dokument jedoch unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://other.example/resources/rules.json` (z. B. auf einem Drittanbieter- oder cookielosen Ressourcenursprung), dann:

   - `"relative_to": "document"` wird `/home` zu `https://example.com/home` machen.
   - `"relative_to": "ruleset"` wird `/home` zu `https://other.example/home` machen.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann:

   - `"relative_to": "document"` würde `home` zu `https://example.com/some/home` machen.
   - `"relative_to": "ruleset"` würde `home` zu `https://example.com/resources/home` machen.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnisseite `/users`, die einen `id`-Parameter hat, der hinzugefügt wird, um Informationen zu einem bestimmten Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine vollständig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die URL getrennt gecacht werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Seitenfenster mit deren Daten anzuzeigen, sollte die URL für Caching-Zwecke als gleich angesehen werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte über einen {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` beginnt, während die Header für den Prefetch von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser noch nicht, welchen `No-Vary-Search`-Wert es geben wird, falls überhaupt einer gesetzt ist. Wenn kein `No-Vary-Search`-Wert gesetzt wäre und das Anwendungsverhalten eher wie Option 1 oben wäre, würde der Prefetch verschwendet, und der Browser müsste die separate Seite `/users?id=345` von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, welchen `No-Vary-Search`-Wert der Seitenautor erwartet. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine String-Darstellung des erwarteten Kopfzeilenwerts enthält:

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

Dies gibt an, dass Option 2, wie oben beschrieben, das ist, was der Server voraussichtlich produzieren wird. Wenn eine Navigation beginnt, während ein laufender Prefetch von `/users` erfolgt, informiert dies den Browser darüber, dass es in Ordnung ist, auf den Prefetch zu warten, anstatt sofort eine weitere Abfrage für `/users?id=345` zu starten.

Dokumentenregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig von dem Muster, das verwendet wird. Zum Beispiel im Fall von:

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

Wenn ein Link überflogen wird, wird der Browser damit beginnen, genau diesen Link vorzubereiten.

Wenn der Benutzer über einen anderen Link schwebt, bevor der Prefetch abgeschlossen ist, gibt das `expects_no_vary_search`-Muster dem Browser an, dass es nicht notwendig ist, den aktuellen Prefetch abzubrechen, weil alle `/users` URLs mit `id` URL-Parameter-Werten effektiv auf dieselbe Seite für diesen Kontext zeigen (und für Caching-Zwecke).

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn prerender mit `No-Vary-Search` verwendet wird, da die Seite anfänglich mit unterschiedlichen URL-Parametern vorgerendert sein kann. `No-Vary-Search` wird für URL-Parameter verwendet, die die gleiche Ressource vom Server liefern, aber vom Client aus verschiedenen Gründen (Client-seitiges Rendering, UTM-Parameter für Analytik-Messungen etc.) verwendet werden. Da das anfängliche Prerendering für verschiedene URL-Parameter erfolgen kann, sollte jeder davon abhängiger Code nur nach der Prerender-Aktivierung ausgeführt werden.

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
> Als [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter als durch Leerzeichen getrennte, zitierte Zeichenfolgen — wie oben gezeigt — und nicht durch Kommata getrennt werden, wie es Entwicklern möglicherweise vertrauter ist.

### `eagerness` Beispiel

Das folgende Dokumentregel-Set zeigt, wie `eagerness` verwendet werden kann, um anzuzeigen, mit welcher Eile der Browser jede übereinstimmende Gruppe von Links vorab rendern sollte.

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

Hier geben wir an:

- Alle gleich-site Links im Dokument sollten konservativ vorgeladen werden (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig vorgeladen werden (d.h. wenn der Benutzer irgendeine Art von Bewegung unternimmt, um zu ihnen zu navigieren).

> [!NOTE]
> Die Auswirkungen der Eagerness-Einstellungen sind weniger nützlich für Listenregeln. Standardmäßig werden URLs in Listenregeln sofort geladen/vorgeladen, sobald die Regeln analysiert werden, was Sie erwarten würden — sie sind für die explizite Auflistung von hochpriorisierten URLs gedacht, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` in der aktuellen Implementierung die gleiche Wirkung wie `immediate`. Niedrigere Eagerness-Einstellungen sind für das Vorbereiten/Vorabrenderieren, wenn Links interagiert werden, und dafür werden Sie eher Dokumentregeln verwenden, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann auf oberster Ebene zum Identifizieren des gesamten Regelsets eingefügt werden:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
