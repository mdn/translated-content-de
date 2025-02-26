---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: 0795bd3d58d8c2b80b3b3930f565fc19a84b7fa9
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) zeigt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgerendert werden sollten. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, auf die mittels des {{httpheader("Speculation-Rules")}} HTTP-Headers verwiesen wird, und verwenden die gleiche [unten bereitgestellte JSON-Darstellung](#json-darstellung_der_spekulationsregeln). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Regeln für Vorladen (prefetch) und Vorab-Rendering (prerender):

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

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, von denen jedes eine Aktion zur Definition von Spekulationsregeln darstellt. Derzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationsvorgänge, deren zugehörige Dokumentantwort geladen werden sollte, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der vom Dokument referenzierten Unterressourcen geladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationsvorgänge, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen, einschließlich des Ladens aller Unterressourcen, der Ausführung aller JavaScript und sogar das Laden von Unterressourcen und Datenerfassungen, die von JavaScript gestartet werden. Wenn zu diesen Dokumenten navigiert wird, sind die Navigationsvorgänge sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API), um vollständige Details zur effektiven Nutzung von Vorab-Laden und Vorab-Rendering zu erhalten.

Jedes Aktionsfeld enthält ein Array, das wiederum eines oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Reihe von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs aus den Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert) übereinstimmen, basierend auf den durch einen `"where"`-Schlüssel beschriebenen Bedingungen. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer im `"urls"`-Schlüssel angegebenen Liste stammen. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn sie inline in einem Dokument sind) oder relativ zur externen Ressourcen-URL (wenn extern geladen) geparst. `"urls"` und `"where"` können in derselben Regel nicht beide gesetzt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen repräsentiert, unter denen die Regel auf URLs im zugehörigen Dokument angewendet wird. Effektiv stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können in derselben Regel nicht beide gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array mit mehreren URL-Muster-Strings, die dem Standard [URL Pattern API Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, erhalten die Regel angewendet.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ dazu abgeglichen wird. Dies funktioniert genau wie der [regelbezogene `"relative_to"`-Schlüssel](#relative_to_2), außer dass es nur eine einzige `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array mit mehreren CSS-Selektoren. Links im Dokument, die durch diese Selektoren übereinstimmen, erhalten die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthält, von denen alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthält, das, wenn es übereinstimmt, _nicht_ die Regel darauf angewendet bekommt. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ die Regel angewendet bekommen.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthält, von denen irgendeine übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrfach tief geschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für mehr Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorladen/vorrendern sollte, um einen Ausgleich zwischen Leistungssteigerungen und Ressourcenaufwand zu erreichen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument möglicherweise erhebliche Zeit zum Laden benötigt. Vorladen/Vorrendern sollte so schnell wie möglich beginnen, nur durch Überlegungen wie Benutzereinstellungen und Ressourcenbeschränkungen begrenzt.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationsvorgängen so früh wie möglich vorladen/vorrendern. Das Vorladen/Vorrendern sollte bei jedem geringsten Anzeichen beginnen, dass ein Link gefolgt werden könnte. Beispielsweise könnte der Benutzer den Mauszeiger in Richtung des Links bewegen, über/fokussieren oder das Scrollen mit dem Link an einer prominenten Stelle anhalten.
    - `"moderate"`
      - : Der Autor sucht nach einem Ausgleich zwischen `eager` und `conservative`. Das Vorladen/Vorrendern sollte beginnen, wenn es eine vernünftige Annahme gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Benutzer einen Link in den Anzeigebereich scrollen und ihn einige Zeit über/fokussieren.
    - `"conservative"`
      - : Der Autor möchte einigen Nutzen aus spekulativem Laden mit einem relativ geringen Aufwand von Ressourcen ziehen. Das Vorladen/Vorrendern sollte erst beginnen, wenn der Benutzer anfängt, auf den Link zu klicken, zum Beispiel bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht ausdrücklich angegeben ist, werden Listen (`"urls"`) Regeln standardmäßig als `immediate` betrachtet und Dokument (`"where"`) Regeln als `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig als einen anderen angedeutet hat, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen {{httpheader("No-Vary-Search")}}-Headerwert auf Antworten für Dokumente erwartet wird, die Prefetch/Prerender-Anfragen erhalten. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen vorhandenen Prefetch/Prerender zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [`"expects_no_vary_search"`-Beispiel](#expects_no_vary_search_example), um mehr darüber zu erfahren, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Richtlinienzeichenfolge darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) für mögliche Werte. Der Zweck besteht darin, der verweisenden Seite zu ermöglichen, eine strengere Richtlinie speziell für die spekulative Anfrage festzulegen als die Richtlinie, die die Seite bereits festgelegt hat (entweder standardmäßig oder durch Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein Cross-Site-Prefetch erfordert eine Referrer-Richtlinie, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine laxere Richtlinie, die in den Spekulationsregeln festgelegt ist, wird eine strengere Richtlinie auf der verweisenden Seite überschreiben, solange sie noch ausreichend streng für den Cross-Site-Fall ist.

    > [!NOTE]
    > Im Falle von Dokumentregeln wird die angegebene Referrer-Richtlinie des übereinstimmenden Links (z.B. durch Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-Attributs) verwendet, es sei denn, die Regel spezifiziert eine Richtlinie, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der bestimmt, wo Sie möchten, dass die durch URL übereinstimmenden Links relativ dazu übereinstimmen sollen. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zum Dokument, auf das die Spekulationsregeln angewendet werden, übereinstimmen.
    - `ruleset`
      - : URLs sollten relativ zur Datei, in der die Regeln angegeben sind, übereinstimmen. Dies ist der Standardwert.

    Diese Einstellung des Schlüssels ist nur relevant für Regeln, die in einer externen Datei definiert sind (eingestellt mit dem {{httpheader("Speculation-Rules")}}-Header). Wenn Regeln im gleichen Dokument spezifiziert sind, für das sie angewendet werden (d.h. in einem Inline-`<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Zeichenfolgen, die Funktionen des Browsers darstellen, der die Regel analysiert und die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Prefetches werden in Browsern, die eine angegebene Anforderung nicht erfüllen können, automatisch fehlschlagen, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur Vorladen) Gibt an, dass die Regel nur dann übereinstimmt, wenn der Benutzeragent verhindern kann, dass die Client-IP-Adresse sichtbar ist, wenn eine Cross-Origin-Prefetch-Anfrage ausgeführt wird. Wie genau dies funktioniert, ist von den spezifischen Implementierungsdetails des Browsers abhängig. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse mithilfe eines von Google betriebenen Proxys. Daher funktioniert es standardmäßig nur für von Google kontrollierte Verweiser (da hier keine zusätzliche Datenschutzlücke entsteht, wenn die URLs des Ziels an Google gesendet werden). Wenn es auf einer nicht von Google betriebenen Seite verwendet wird, entsprechen Regeln, die dies beinhalten, nur dann den Anforderungen, wenn Benutzer die "Enhanced preloading" in `chrome://settings/preloading` aktivieren.
        - Andere Chromium-basierte Browser müssen ihre eigenen Lösungen liefern. Gründliche Tests in allen Zielbrowsern sind ratsam.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas Ähnliches wie [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte etwas basierend auf dem Produkt [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) nutzen.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie ausdrücklich in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)-Richtlinie erlaubt werden, wenn die Seite dies beinhaltet. Dies erfolgt durch Hinzufügen des Wertes `"inline-speculation-rules"` zusammen mit einer Hash- oder Nonce-Quelle.

## Beispiele

### Vorladen und Vorab-Rendering im gleichen Regelset

Die grundlegenden Beispiele, die im Abschnitt Beschreibung gezeigt wurden, enthalten separate Spekulationsregeln, die für Vorladen und Vorab-Rendering definiert sind. Es ist möglich, beide in einem einzigen Regelset zu definieren:

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
> Dieses Codefragment bietet ein Beispiel für eine Liste (`"urls"`) Regel und eine Dokument (`"where"`) Regel.

### Mehrere Regelsets

Es ist auch erlaubt, mehrere Sets von Regeln in einer einzigen HTML-Datei einzuschließen:

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

Und mehrere Regeln in einem einzigen Ergebnisset:

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

Im Folgenden ist ein Beispiel, das Spekulationsregeln erkennt und, falls unterstützt, eine Vorab-Render-Spekulationsregel dynamisch mit JavaScript hinzufügt:

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

Sie können dies in Aktion auf dieser Seite mit [prerender demos](https://prerender-demos.glitch.me/) sehen.

### `where`-Syntax-Beispiele

Eine dokumentenbezogene Regel enthält eine `"where"`-Eigenschaft, bei der es sich um ein Objekt handelt, das Kriterien enthält, die definieren, welche Links im Dokument übereinstimmen. Effektiv stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version stimmt mit einem einzelnen URL-Muster oder CSS-Selektor überein:

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

URL-Muster und Selektoren können auch Platzhalterzeichen (`*`) enthalten, die einen einzelnen Wert erlauben, mit mehreren URLs übereinzustimmen. Beispielsweise könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können ebenfalls in `href_matches` gezielt werden. Beispielsweise könnte das untenstehende Objekt alle gleichursprünglichen URLs mit einem `category`-Suchparameter übereinstimmen (als erster oder nachfolgender Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann durch Platzierung innerhalb einer `"not"`-Bedingung negiert werden — dies bedeutet, dass, wenn sie übereinstimmt, eine Spekulationsregel _nicht_ darauf angewendet wird, aber wenn _nicht_ übereinstimmt, sie _wird_ angewendet. Das folgende Beispiel wird dazu führen, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel angewendet bekommen, aber nicht Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb `"and"` oder `"or"` kombiniert werden — diese nehmen den Wert von Arrays mit mehreren Bedingungen, von denen alle oder alle (jeweils) übereinstimmen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehrfach tief geschachtelt werden — es gibt kein festgelegtes Limit für die erlaubten Verschachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als ein `if`-Statement zu betrachten. Also ist

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

gleichbedeutend mit

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle gleichursprünglichen Seiten zum Vorladen markiert, außer denen, von denen bekannt ist, dass sie problematisch sind — die `/logout`-Seite und alle Links, die mit einer Klasse von `.no-prerender` versehen sind:

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
> Das obige `where`-Muster schließt keine Cross-Site-Links ein, die zum Vorladen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um Tracking zu vermeiden), aber nicht zum Vorab-Rendering.

### `"relative_to"`-Beispiel

Für Regelsets, die extern geladen werden (d.h. über den {{httpheader("Speculation-Rules")}}-Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden und die Basis-URL des Dokuments wird nur für Muster in dieser bestimmten Bedingung verwendet:

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

Im obigen Beispiel wird nur das erste `"href_matches"` relativ zur Basis-URL des Dokuments abgeglichen.

`relative_to` ist hauptsächlich relevant, wenn sich die Spekulationsregeln-JSON-Datei auf einem anderen Ursprung als das Dokument befindet, auf das sie angewendet werden sollen:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` befinden, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn sich das Dokument jedoch unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` befinden (z.B. auf einem Drittanbieter- oder cookielosen Ressource-Ursprung), dann:

   - `"relative_to": "document"` wird dazu führen, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` wird dazu führen, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein anderer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs im Format `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` befinden, dann:

   - `"relative_to": "document"` würde dazu führen, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde dazu führen, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"`-Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage, `/users`, die einen `id`-Parameter hinzugefügt hat, um Informationen über einen spezifischen Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit den Informationen des angegebenen Benutzers zu laden, sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und vielleicht ein Pullout-Panel zum Anzeigen seiner Daten anzuzeigen, dann sollte die URL als gleich für Caching-Zwecke betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte über ein {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

Wie wirkt sich das auf Spekulationsregeln aus? Betrachten Sie den folgenden Code:

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, während die Header für das Vorladen von `/users` noch nicht eingegangen sind? Zu diesem Zeitpunkt weiß der Browser nicht, welchen `No-Vary-Search`-Wert es geben wird, falls vorhanden. Wenn kein `No-Vary-Search`-Wert gesetzt wäre und das Anwendungsverhalten eher wie Option 1 oben wäre, wäre das Vorladen verschwendet und der Browser müsste die separate `/users?id=345`-Seite von Grund auf abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, was der `No-Vary-Search`-Wert sein sollte. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine String-Darstellung des erwarteten Headerwerts enthält:

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

Dies zeigt an, dass Option 2, die oben beschrieben wurde, das ist, was der Server voraussichtlich liefern wird. Wenn eine Navigation beginnt, während ein laufendes Vorladen von `/users` stattfindet, informiert dies den Browser darüber, dass es angemessen ist, auf das Vorladen zu warten, anstatt sofort einen neuen Abruf für `/users?id=345` zu starten.

Dokumentregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig vom verwendeten Muster. Zum Beispiel, im Fall von:

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

Wenn ein Link überfahren wird, beginnt der Browser, diesen spezifischen Link vorzuladen.

Wenn der Benutzer einen anderen Link überfährt, bevor das Vorladen abgeschlossen ist, sagt das `expects_no_vary_search`-Muster dem Browser, dass es nicht notwendig ist, das aktuelle Vorladen abzubrechen, da alle `/users`-URLs mit `id`-URL-Parameterwerten effektiv auf dieselbe Seite für diesen Kontext (und für Caching-Zwecke) verweisen.

> [!WARNING]
> Besondere Vorsicht ist geboten, wenn `prerender` mit `No-Vary-Search` verwendet wird, da die Seite möglicherweise zunächst mit anderen URL-Parametern vorgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, aber aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendering, UTM-Parameter zur Analyse-Messung usw.). Da das anfängliche Vorabrenden möglicherweise für unterschiedliche URL-Parameter erfolgt, sollte jeglicher Code, der davon abhängt, erst nach der Prerender-Aktivierung ausgeführt werden.

Mehrere Parameter können in einem mit Leerzeichen getrennten Array bereitgestellt werden:

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
> Als ein [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter durch Leerzeichen getrennte, in Anführungszeichen gesetzte Strings sein — wie oben gezeigt — und nicht durch Kommata getrennt, woran Entwickler möglicherweise mehr gewöhnt sind.

### `eagerness`-Beispiel

Der folgende Satz von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um anzugeben, mit welcher Emsigkeit der Browser jedes übereinstimmende Set von Links vorab rendern sollte.

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

Hiermit deuten wir an, dass:

- Alle im Dokument enthaltenen Links zur gleichen Seite sollten konservativ vorgerendert werden (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig vorgerendert werden (d.h. wenn der Benutzer irgendeine Art von Bewegung macht, um zu ihnen zu navigieren).

> [!NOTE]
> Die Auswirkungen der `eagerness`-Einstellungen sind weniger nützlich für Listenregeln. Standardmäßig werden URLs von Listenregeln sofort vorab geladen/gerendert, sobald die Regeln analysiert werden, was Sie erwarten würden — sie sind für die explizite Auflistung von Hoch-Prioritäts-URLs vorgesehen, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` in aktuellen Implementierungen die gleiche Wirkung wie `immediate`. Niedrigere Emsigkeitseinstellungen sind zum Vorbereiten/Vorabladen, wenn Links interagiert werden, und für diese werden Sie wahrscheinlich Dokumentregeln verwenden, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seiten-Navigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
