---
title: <script type="speculationrules">
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) zeigt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können innerhalb externer Textdateien definiert werden, auf die durch den {{httpheader("Speculation-Rules")}} HTTP-Header verwiesen wird, unter Verwendung der gleichen [unten bereitgestellten JSON-Darstellung](#darstellung_der_spekulationsregeln_in_json). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Prefetch- und Prerender-Regeln:

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

### Darstellung der Spekulationsregeln in JSON

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, von denen jedes eine Aktion darstellt, für die Spekulationsregeln definiert werden können. Derzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehöriger Dokumentantwortkörper heruntergeladen werden soll, was zu erheblichen Leistungssteigerungen führt, wenn diese Dokumente aufgerufen werden. Beachten Sie, dass keine der von der Seite referenzierten Nebenressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies umfasst das Laden aller Nebenressourcen, das Ausführen aller JavaScript-Anwendungen und sogar das Laden von Nebenressourcen und das Durchführen von Datenabrufen, die von JavaScript initiiert werden. Wenn diese Dokumente aufgerufen werden, sind die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details darüber, wie Prefetch und Prerender effektiv genutzt werden können.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Gruppe von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs von Navigationslinks im zugehörigen Dokument (wie in den {{htmlelement("a")}}- und {{htmlelement("area")}}-Elementen definiert) anhand der durch einen `"where"`-Schlüssel beschriebenen Bedingungen abgeglichen werden. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"`-Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments geparst (wenn sie inline in einem Dokument sind) oder relativ zur externen Ressourcen-URL (wenn sie extern abgerufen werden). `"urls"` und `"where"` können nicht beide in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, unter denen die Regel URLs im zugehörigen Dokument abgleicht. Im Wesentlichen repräsentiert das `"where"`-Objekt einen Test, der auf jeden Link auf der Seite durchgeführt wird, um zu überprüfen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der Standard-[URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, werden die Regel angewendet.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu etwas abgeglichen wird. Dies funktioniert genau wie der [regelbasierte `"relative_to"`-Schlüssel](#relative_to_2), nur dass er nur eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/Guides/Selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die von diesen Selektoren erfasst werden, wird die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthalten, von denen alle zutreffen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthält, auf die die Regel _nicht_ angewendet wird, wenn sie übereinstimmt. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, wird die Regel _angewendet_.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthalten, von denen eine übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für eine weitere Erklärung und mehrere Nutzungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorladen/vorrendern soll, um Leistungsvorteile gegen die Ressourcennutzung abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument möglicherweise erhebliche Zeit zum Abrufen benötigt. Prefetch/Prerender sollte so schnell wie möglich beginnen, nur unter Berücksichtigung von Benutzerpräferenzen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich vorladen/vorrendern. Prefetch/Prerender sollte bei jedem geringen Hinweis darauf beginnen, dass ein Link gefolgt werden könnte. Zum Beispiel könnte der Benutzer den Mauszeiger zum Link bewegen, ihn für einen Moment schweben/fokussieren oder das Scrollen mit dem Link an einer prominenten Stelle pausieren.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Prefetch/Prerender sollte beginnen, wenn es einen vernünftigen Hinweis darauf gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Benutzer einen Link in den Sichtbereich scrollen und ihn einige Zeit schweben/fokussieren.
    - `"conservative"`
      - : Der Autor wünscht sich einen gewissen Nutzen aus dem spekulativen Laden bei einem recht geringen Ressourcenaufwand. Prefetch/Prerender sollte erst beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, zum Beispiel bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, sind Listen (`"urls"`) Regeln standardmäßig auf `immediate` und Dokument (`"where"`) Regeln auf `conservative` gesetzt. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig angezeigt hat, wenn der weniger eifrige Kandidat als die bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher {{httpheader("No-Vary-Search")}} Headerwert für Antworten festgelegt wird, für die er Prefetch/Prerender-Anfragen erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es sinnvoller ist, auf einen bestehenden Prefetch/Prerender abzuwarten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [`"expects_no_vary_search"`-Beispiel](#expects_no_vary_search_example) für eine genauere Erklärung, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Policy darstellt, die bei Anfragen an die in der Regel angegebenen URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Dies soll es der verweisenden Seite ermöglichen, eine strengere Richtlinie speziell für die spekulative Anfrage festzulegen als die Richtlinie, die die Seite bereits festgelegt hat (entweder standardmäßig oder durch Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein Cross-Site Prefetch erfordert eine Referrer-Policy, die mindestens so strikt ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine laxere Policy, die in den Spekulationsregeln festgelegt ist, wird eine strengere Policy auf der verweisenden Seite überschreiben, solange sie für den Cross-Site-Fall noch ausreichend strikt ist.

    > [!NOTE]
    > Im Falle von Dokumentregeln wird die angegebene Referrer-Policy des übereinstimmenden Links (z.B. durch Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-Attributs) verwendet, es sei denn, die Regel gibt eine Policy an, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass die Links, die anhand der URL übereinstimmen, relativ dazu abgeglichen werden sollen. Der Wert kann einer der folgenden sein:

    - `"document"`
      - : URLs sollen relativ zu dem Dokument abgeglichen werden, auf das die Spekulationsregeln angewendet werden.
    - `"ruleset"`
      - : URLs sollen relativ zu der Datei abgeglichen werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (festgelegt über den {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments angegeben werden, für das sie gelten (d.h. in einem Inline-`<script>`-Element), macht das keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, das Fähigkeiten des Browsers darstellt, der die Regel parst, die verfügbar sein müssen, wenn die Regel auf die angegebenen URLs angewendet werden soll.

    > [!WARNING]
    > Prefetches werden in Browsern, die eine angegebene Anforderung nicht erfüllen können, automatisch fehlschlagen, auch wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur-prefetch) Gibt an, dass die Regel nur übereinstimmt, wenn der User-Agent verhindern kann, dass die Client-IP-Adresse für den Ursprungsserver sichtbar ist, wenn eine Cross-Origin Prefetch-Anfrage ausgegeben wird. Wie dies genau funktioniert, hängt von den spezifischen Implementierungsdetails des Browsers ab. Beispielsweise:
        - Chromes Implementierung verbirgt die IP-Adresse mit einem von Google betriebenen Proxy, daher funktioniert es standardmäßig nur für von Google kontrollierte Referrer (da in diesem Fall das Senden der URLs des Ziels an Google keine zusätzliche Datenschutzverletzung darstellt). Wenn dies auf einer nicht von Google betriebenen Seite verwendet wird, werden Regeln, die dies beinhalten, nur für Benutzer übereinstimmen, die "Erweitertes Vorladen" in `chrome://settings/preloading` aktivieren.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bieten. Umfangreiche Tests in allen Zielbrowsern werden empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas in der Art von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte etwas auf Basis des [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkts verwenden.

- `"tag"` {{experimental_inline}}

  - : Ein String, der zur Identifizierung einer Regel oder eines Regelsatzes verwendet wird. Dieser wird im {{HTTPHeader("Sec-Speculation-Tags")}} Header für Anfragen enthalten sein, die von dieser Regel abgedeckt werden.

- `"target_hint"` {{experimental_inline}}
  - : Ein String, der angibt, wo der Seite erwartet, dass der vorgerenderte Inhalt aktiviert wird.
    Diese Direktive wird nicht für Prefetch-Spekulationen unterstützt.
    Erlaubte Werte sind:
    - `"target_hint": "_blank"`
      - : Vorgerenderter Inhalt wird in einer neuen Seite geöffnet.
    - `"target_hint": "_self"`
      - : Vorgerenderter Inhalt wird auf der aktuellen Seite geöffnet.
        Dies ist der Standard, falls nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Richtlinie erlaubt werden, wenn die Seite diese enthält. Dies wird durch Hinzufügen des Wertes `"inline-speculation-rules"` zusammen mit einer Hash- oder Nonce-Quelle erreicht.

## Beispiele

### Prefetch und Prerender in demselben Satz von Regeln

Die grundlegenden Beispiele in der Beschreibungssektion enthalten separate Spekulationsregeln, die für Prefetch und Prerender definiert sind. Es ist möglich, beide in einem einzigen Satz von Regeln zu definieren:

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
> Dieses Codebeispiel bietet eine Listen (`"urls"`) Regel und eine Dokument (`"where"`) Regel.

### Mehrfache Regelsätze

Es ist auch erlaubt, mehrere Regelsätze in einer einzigen HTML-Datei einzuschließen:

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

### Dynamisches Einfügen von Regeln

Unten finden Sie ein Beispiel, das Spekulationsregeln erkennt und, falls unterstützt, dynamisch eine Prerender-Spekulationsregel über JavaScript hinzufügt:

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

### `where` Syntax Beispiele

Eine dokumentenbasierte Regel enthält eine `"where"`-Eigenschaft, die ein Objekt mit Kriterien enthält, die definieren, welche Links im Dokument übereinstimmen. Im Wesentlichen repräsentiert das `"where"`-Objekt einen Test, der auf jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die grundlegendste Version stimmt mit einem einzelnen URL-Muster oder CSS-Selektor überein:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig abgeglichen werden können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalterzeichen (`*`) enthalten, die es ermöglichen, dass ein einzelner Wert mit mehreren URLs übereinstimmt. Zum Beispiel könnte das untenstehende Objekt mit `user/`, `user/settings`, `user/stats`, etc. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragestrings)](/de/docs/Web/API/URL/search) können in `href_matches` ebenfalls gezielt angesprochen werden. Beispielsweise könnte das untenstehende Objekt alle gleiche Ursprungs-URLs mit einem `category` Suchparameter abgleichen (als erster oder nachfolgender Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung gesetzt wird — dies bedeutet, dass, wenn sie übereinstimmt, ein Link _nicht_ die Spekulationsregel auf ihn angewendet bekommt, aber wenn _nicht_ übereinstimmend, es _wird_ darauf angewendet. Das folgende Beispiel wird dazu führen, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel angewendet bekommen, jedoch nicht die Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"`-Bedingungen kombiniert werden — diese haben den Wert von Arrays, die mehrere Bedingungen enthalten, von denen alle oder eine übereinstimmen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt kein festgelegtes Limit für erlaubte Verschachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als äquivalent zu einer `if`-Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist gleichbedeutend mit

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Beispiel für eine Spekulationsregel sind alle gleiche Ursprungsseiten für Prefetching markiert, außer denjenigen, die als problematisch bekannt sind — die `/logout` Seite und alle Links, die mit einer `.no-prerender`-Klasse markiert sind:

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
> Das `where`-Muster oben schließt Cross-Site-Links nicht ein, die für Prefetching unterstützt werden (sofern der Benutzer keine Cookies für die Zielseite gesetzt hat, um Tracking zu verhindern), aber nicht für Prerendering.

### `"relative_to"` Beispiel

Für Regelsätze, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Header), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` kombiniert werden, und die Basis-URL des Dokuments würde nur für Muster in dieser speziellen Bedingung verwendet:

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

Im obigen Beispiel wird nur die erste `"href_matches"` relativ zur Basis-URL des Dokuments abgeglichen.

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei auf einem anderen Ursprung als das Dokument ist, auf das Sie sie anwenden möchten:

1. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` liegen, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn das Dokument jedoch unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` (z.B. bei einem Drittanbieterserver oder cookieless Ursprungsserver) liegen, dann:

   - `"relative_to": "document"` führt dazu, dass `/home` zu `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` führt dazu, dass `/home` zu `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein anderer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` statt `/home` angegeben sind. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` liegen, dann:
   - `"relative_to": "document"` würde dazu führen, dass `home` zu `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde dazu führen, dass `home` zu `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Startseite `/users`, die einen `id` Parameter hat, um Informationen über einen bestimmten Benutzer aufzurufen, zum Beispiel `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Auswirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die URL separat gecached werden.
2. Wenn dieser Parameter die Auswirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und vielleicht ein Ausziehpanel anzuzeigen, das seine Daten darstellt, dann sollte die URL für Caching-Zwecke als gleich betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch einen {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, während die Header für den Prefetch von `/users` noch nicht erhalten wurden? Zu diesem Zeitpunkt weiß der Browser nicht, was der `No-Vary-Search`-Wert sein wird, falls überhaupt. Wenn kein `No-Vary-Search`-Wert festgelegt wurde und das Verhalten der Anwendung eher wie Option 1 oben ist, wäre der Prefetch verschwendet und der Browser müsste die separate Seite `/users?id=345` von Grund auf abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search`-Wert sein wird. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine String-Darstellung des erwarteten Headerwerts enthält:

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

Dies zeigt an, dass die Option 2 oben das ist, was der Server voraussichtlich erzeugen wird. Wenn eine Navigation beginnt, während ein laufender Prefetch von `/users` vorhanden ist, informiert dies den Browser, dass es angemessen ist, auf den Prefetch zu warten, anstatt sofort einen neuen Abruf für `/users?id=345` zu starten.

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

Wenn ein Link geschwebt wird, beginnt der Browser mit dem Prefetchen dieses spezifischen Links.

Wenn der Benutzer über einen anderen Link schwebt, bevor der Prefetch abgeschlossen ist, sagt das `"expects_no_vary_search"`-Muster dem Browser, dass es nicht notwendig ist, den aktuellen Prefetch abzubrechen, da alle `/users`-URLs mit `id` URL-Parameterwerten effektiv auf dieselbe Seite für diesen Kontext (und für Caching-Zwecke) zeigen.

> [!WARNING]
> Zusätzliche Vorsicht muss walten, wenn Prerender mit `No-Vary-Search` verwendet wird, da die Seite möglicherweise ursprünglich mit anderen URL-Parametern vorgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Ressource vom Server liefern, aber aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analysen). Da das ursprüngliche Prerendering möglicherweise für andere URL-Parameter erfolgt, sollte jeglicher Code, der davon abhängt, nur nach der Prerender Aktivierung ausgeführt werden.

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
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter leerzeichenseparierte, in Anführungszeichen gesetzte Strings sein — wie oben gezeigt — und nicht kommagetrennt, wie Entwickler vielleicht eher gewohnt sind.

### `eagerness` Beispiel

Der folgende Satz von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um den Eifer zu kennzeichnen, mit dem der Browser jeden übereinstimmenden Satz von Links vorab laden/nachzurendern sollte.

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

Hier geben wir den Hinweis, dass:

- Alle gleichseitige Links im Dokument konservativ nachgerendert werden sollen (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollte eifrig nachgerendert werden (d.h. wenn der Benutzer irgendeine Art von Bewegung macht, auf sie zuzugreifen).

> [!NOTE]
> Die Auswirkungen von Eifer-Einstellungen sind weniger nützlich für Listenregeln. Standardmäßig werden URL-Listenregeln unmittelbar, sobald die Regeln geparst sind, vorgeladen/nachgerendert, was Sie erwarten — sie sind dazu gedacht, explizit hoch priorisierte URLs aufzulisten, die Sie so bald wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` bei den aktuellen Implementierungen die gleiche Wirkung wie `immediate`. Niedrigere Eifer-Einstellungen sind für Prefetching/Prerendering, wenn Links interagiert werden, und dafür sind Sie eher dazu geneigt, Dokumentregeln zu verwenden, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann auf oberster Ebene enthalten sein, um den gesamten Regelsatz zu identifizieren:

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

Oder um individuelle Regeln zu identifizieren:

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

Ein `target_hint` kann enthalten sein, um das Zielfenster anzugeben, in dem übereinstimmende Prerender-Spekulationen geöffnet werden:

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

Die oben stehenden Regeln erlauben, dass die folgenden Links korrekt im entsprechenden Ziel gerendert werden:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Sie werden für Dokumentregeln (die `where` verwenden) nicht benötigt, da in diesen das Ziel vom `target`-Attribut des `<a>`-Linkelements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
