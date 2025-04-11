---
title: <script type="speculationrules">
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die vom {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, wobei dieselbe [unten angegebene JSON-Darstellung](#spekulationsregeln_json-darstellung) verwendet wird. Das Angeben eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Vorlade- und Vorabrufregeln:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf der obersten Ebene, von denen jedes eine Aktion darstellt, um Spekulationsregeln zu definieren. Gegenwärtig sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationsvorgänge, bei denen der zugehörige Dokumentantwortkörper heruntergeladen werden soll, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der vom Dokument referenzierten Subressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationsvorgänge, bei denen die zugehörigen Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScript-Codes und sogar das Laden von Subressourcen und das Durchführen von Datenabfragen, die durch JavaScript gestartet wurden. Wenn zu diesen Dokumenten navigiert wird, sind die Navigationsvorgänge augenblicklich, was zu großen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Verwendung von Prefetch und Prerender.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die einen Satz von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel zutrifft. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden Werte sein:

    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} definiert) basierend auf den durch einen `"where"`-Schlüssel beschriebenen Bedingungen ermittelt werden. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels `"source": "document"` impliziert, daher ist es optional.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"`-Schlüssel angegeben wird. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels `"source": "list"` impliziert, daher ist es optional.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet wird. Dies können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn im Dokument eingebettet) oder relativ zur externen Ressourcen-URL (wenn extern geladen) geparst. `"urls"` und `"where"` können nicht beide in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, wie die Regel auf URLs im zugehörigen Dokument angewendet wird. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der auf jeden Link auf der Seite angewendet wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die dem Standard [URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, erhalten die Regel angewendet.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu etwas abgeglichen wird. Dies funktioniert genauso wie der [regelbasierte `"relative_to"`-Schlüssel](#relative_to_2), mit der Ausnahme, dass es nur eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels beeinflusst.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die von diesen Selektoren erfasst werden, erhalten die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen alle zutreffen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, welche, wenn sie zutrifft, _nicht_ die Regel darauf angewendet wird. Alle Links, die _nicht_ die Bedingung erfüllen, _werden_ die Regel angewendet.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen eine zutreffen muss, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für weitere Erklärungen und mehrere Nutzungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorladen/vorrendern sollte, um Leistungsgewinne gegen Ressourcenkosten abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor glaubt, dass der Link sehr wahrscheinlich verfolgt wird, und/oder das Dokument erhebliche Zeit zum Laden benötigt. Prefetch/Prerender sollte so schnell wie möglich starten, unter Berücksichtigung von Faktoren wie Benutzereinstellungen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationsvorgängen so früh wie möglich vorladen/vorrendern. Prefetch/Prerender sollte mit jeder geringfügigen Andeutung beginnen, dass ein Link verfolgt werden könnte. Zum Beispiel könnte der Benutzer seinen Mauszeiger in Richtung des Links bewegen, ihn für einen Moment schweben/befokussen oder das Scrollen mit dem Link an prominenter Stelle stoppen.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Prefetch/Prerender sollte beginnen, wenn es eine vernünftige Andeutung gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Benutzer einen Link ins Sichtfeld scrollen und ihn für einige Zeit schweben/befokussen.
    - `"conservative"`
      - : Der Autor möchte von spekulativem Laden profitieren mit einem relativ geringen Ressourcenaufwand. Prefetch/Prerender sollte erst starten, wenn der Benutzer beginnt, auf den Link zu klicken, z.B. beim [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, sind Listenvorgänge (`"urls"`) standardmäßig `immediate` und Dokumentvorgänge (`"where"`) standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig markiert hat als einen anderen, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher {{httpheader("No-Vary-Search")}}-Headerwert auf Antworten für Dokumente festgelegt wird, für die er Prefetch/Prerender-Anfragen erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen bestehenden Prefetch/Prerender zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für weitere Erklärungen, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Richtlinie darstellt, die verwendet werden soll, wenn die in der Regel angegebenen URLs abgerufen werden — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck hiervon ist es, dass die verweisende Seite eine strengere Richtlinie speziell für die spekulative Anfrage festlegen kann, als die Richtlinie, die die Seite bereits hat (entweder standardmäßig oder durch Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein cross-site Prefetch erfordert eine Referrer-Richtlinie, die mindestens so streng wie der Standardwert `"strict-origin-when-cross-origin"` ist — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, oder `"no-referrer"`. Eine in den Spekulationsregeln festgelegte laxere Richtlinie wird eine strengere Richtlinie, die auf der verweisenden Seite festgelegt ist, überschreiben, solange sie noch ausreichend streng für den cross-site Fall ist.

    > [!NOTE]
    > Im Fall von Dokumentenregeln wird die im verlinkten Link angegebene Referrer-Richtlinie (z.B. durch das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-Attribut) verwendet, es sei denn, die Regel spezifiziert eine Richtlinie, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass URLs, die durch die URL abgeglichen werden, relativ dazu abgeglichen werden. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument abgeglichen werden, auf das die Spekulationsregeln angewendet werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei abgeglichen werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (via {{httpheader("Speculation-Rules")}}-Header festgelegt). Wenn Regeln innerhalb desselben Dokuments, für das sie festgelegt werden (d.h. in einem eingebetteten `<script>`-Element), angegeben sind, macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, die die Fähigkeiten des Browsers darstellt, der die Regel analysiert und die vorhanden sein müssen, damit die Regel auf die angegebenen URLs angewendet werden kann.

    > [!WARNING]
    > Prefetches schlagen automatisch in Browsern fehl, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur Prefetch) Gibt an, dass die Regel nur zutrifft, wenn der User-Agent die Client-IP-Adresse verbergen kann, um dem Ursprungsserver zu verborgen zu bleiben, wenn eine cross-origin Prefetch-Anfrage ausgegeben wird. Wie dies genau funktioniert, hängt von den Implementierungsspezifika des Browsers ab. Zum Beispiel:
        - Chromes Implementierung versteckt die IP-Adresse unter Verwendung eines von Google betriebenen Proxys, daher funktioniert es standardmäßig nur für Google-kontrollierte Referrer (da in diesem Fall die URL des Ziels an Google zu senden kein zusätzlicher Datenschutzverlust ist). Wenn es auf einer von Google nicht kontrollierten Seite verwendet wird, stimmen die Regeln, die dies enthalten, nur für Benutzer überein, die in `chrome://settings/preloading` die Einstellung "Erweitertes Preloading" aktivieren.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bereitstellen. Gründliche Tests in allen Zielbrowsern sind empfehlenswert.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas in der Art von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte etwas verwenden, basierend auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, wenn die Seite sie enthält. Dies wird durch Hinzufügen des Wertes `"inline-speculation-rules"` zusammen mit einem Hash- oder Nonce-Quelle erreicht.

## Beispiele

### Prefetch und Prerender im selben Satz von Regeln

Die grundlegenden Beispiele in der Beschreibungskategorie beinhalteten separate Spekulationsregeln für Prefetch und Prerender. Es ist möglich, beide in einem einzigen Satz von Regeln zu definieren:

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
> Dieses Codebeispiel bietet ein Beispiel für eine Liste (`"urls"`) und eine Dokumentenregel (`"where"`).

### Mehrere Regelsätze

Es ist auch zulässig, mehrere Regelsets in einer einzigen HTML-Datei zu inkludieren:

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

### Dynamische Regelentfernung

Nachstehend ist ein Beispiel für eine Funktionsdetektion von Spekulationsregeln aufgeführt, und wenn unterstützt, wird dynamisch eine Prerender-Spekulationsregel über JavaScript hinzugefügt:

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

Sie können dies in Aktion auf dieser Seite [Prerender-Demos](https://prerender-demos.glitch.me/) sehen.

### `where`-Syntaxbeispiele

Eine dokumentbasierte Regel enthält eine `"where"`-Eigenschaft, die ein Objekt ist, das Kriterien enthält, die definieren, welche Links im Dokument abgeglichen werden. Tatsächlich stellt das `"where"`-Objekt einen Test dar, der auf jeden Link auf der Seite angewendet wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die grundlegendste Version wird ein einzelnes URL-Muster oder einen CSS-Selektor abgleichen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten festgelegt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig abgeglichen werden können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Wildcard-Zeichen (`*`) enthalten, sodass ein einzelner Wert mehrere URLs abgleichen kann. Zum Beispiel könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats` usw. abgleichen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragestrings)](/de/docs/Web/API/URL/search) können in `href_matches` ebenfalls gezielt werden. Zum Beispiel könnte das untenstehende Objekt alle gleichursprünglichen URLs mit einem Suchparameter `category` abgleichen (als erster oder nachfolgender Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung gesetzt wird — dies bedeutet, dass, wenn sie zutrifft, ein Link _nicht_ die Spekulationsregel darauf angewendet wird, aber wenn _nicht_ zutreffend, sie _wird_. Das folgende Beispiel bewirkt, dass alle Links, die _nicht_ das URL-Muster `/logout` entsprechen, die Regel darauf angewendet wird, aber nicht auf Links, die `/logout` entsprechen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden — diese nehmen den Wert von Arrays, die mehrere Bedingungen enthalten, von denen alle oder eine (bzw.) zutreffen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Durch die Verwendung von `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt kein festgelegtes Limit für die erlaubten Verschachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als ein Äquivalent zu einer `if`-Anweisung zu denken. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist äquivalent zu

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle gleichseitigen Seiten zum Vorausladen markiert, mit Ausnahme der Seiten, die als problematisch bekannt sind — die `/logout` Seite und alle Links, die mit einer Klasse von `.no-prerender` markiert wurden:

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
> Das `where`-Muster oben schließt cross-site Links aus, die für das Vorausladen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um Tracking zu verhindern), jedoch nicht für das Vorrendern.

### `"relative_to"` Beispiel

Für Regelsets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}}-Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentenregeln standardmäßig relativ zur URL der externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentenregeln kann `"relative_to"` direkt mit `"href_matches"` kombiniert werden und die Basis-URL des Dokuments würde nur für Muster in dieser speziellen Bedingung verwendet werden:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln-JSON-Datei sich an einem anderen Ursprung befindet als das Dokument, auf das Sie sie anwenden möchten:

1. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` befinden, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn das Dokument jedoch unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` (zum Beispiel auf einem drittanbieter- oder cookieless Resourcen-Ursprung), dann:

   - `"relative_to": "document"` bewirkt, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` bewirkt, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben werden. Wenn sich das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` befinden, dann:

   - `"relative_to": "document"` würde bewirken, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde bewirken, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage `/users`, die einen `id`-Parameter hinzufügt, um Informationen zu einem bestimmten Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf der gleichen Seite hervorzuheben und möglicherweise ein Ausziehpanel anzuzeigen, das deren Daten zeigt, sollte die URL für Caching-Zwecke als dieselbe angesehen werden. Dies könnte zu Leistungsverbesserungen rund um das Laden der Benutzerseiten führen und erreicht werden durch ein {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")`.

Wie beeinflusst dies Spekulationsregeln? Betrachten Sie den folgenden Code:

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, während die Header für das Prefetch von `/users` noch nicht eingegangen sind? Zu diesem Zeitpunkt weiß der Browser nicht, was der `No-Vary-Search` Wert sein wird, falls überhaupt einer. Wenn kein `No-Vary-Search` Wert festgelegt war und das Anwendungsverhalten eher wie Option 1 war, wäre der Prefetch verschwendet und der Browser müsste die separate Seite `/users?id=345` von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, welchen `No-Vary-Search` Wert der Seitenautor erwartet. Eine Spekulationsregel kann ein `"expects_no_vary_search"` Feld haben, das eine String-Darstellung des erwarteten Headerwerts enthält:

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

Dies deutet darauf hin, dass Option 2, wie oben beschrieben, das ist, was der Server voraussichtlich produzieren wird. Wenn eine Navigation beginnt, während ein laufender Prefetch von `/users` besteht, informiert dies den Browser, dass es angemessen ist, auf den Prefetch zu warten anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentenregeln können ebenfalls in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig vom verwendeten Muster. Zum Beispiel, im Fall von:

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

Wenn der Benutzer über einen anderen Link fährt, bevor das Prefetch abgeschlossen ist, teilt das `expects_no_vary_search` Muster dem Browser mit, dass es nicht erforderlich ist, das aktuelle Prefetch zu stornieren, da alle `/users`-URLs mit `id`-URL-Parameterwerten effektiv auf die gleiche Seite in diesem Kontext (und für Cache-Zwecke) verweisen.

> [!WARNING]
> Zusätzliche Vorsicht ist beim Einsatz von Prerender mit `No-Vary-Search` geboten, da die Seite zunächst mit anderen URL-Parametern vorgeladen werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, die das gleiche Ressourcenverhalten vom Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analysezwecke usw.). Da das anfängliche Prerendering möglicherweise für andere URL-Parameter erfolgt, sollte jeder Code, der von ihnen abhängt, erst nach der Prerender-Aktivierung ausgeführt werden.

Mehrere Parameter können in einem space-getrennten Array bereitgestellt werden:

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
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter space-getrennte, in Anführungszeichen gesetzte Strings sein — wie oben gezeigt — und nicht komma-getrennt, was Entwicklern möglicherweise eher vertraut ist.

### `eagerness` Beispiel

Die folgende Reihe von Dokumentenregeln zeigt, wie `eagerness` verwendet werden kann, um einen Hinweis darauf zu geben, wie eifrig der Browser jede Übereinstimmung von Linksets prerendern sollte.

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

Hier geben wir einen Hinweis darauf:

- Alle gleichseitigen Links, die sich im Dokument befinden, sollten konservativ prerendert werden (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Irgendeine Produkt-Links (in diesem Fall diejenigen mit einer Klasse von `.product-link`), die sich im Dokument befinden, sollten eifrig prerendert werden (d.h. wenn der Benutzer eine Art von Bewegung in Richtung der Navigation zu ihnen macht).

> [!NOTE]
> Die Auswirkungen von Eagerness-Einstellungen sind für Listenregeln weniger nützlich. Standardmäßig werden URLs in Listenregeln sofort vorgeladen/gerendert, sobald die Regeln analysiert werden, was Sie erwarten würden — sie sind für das explizite Auflisten von URLS mit hoher Priorität konzipiert, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` die gleiche Wirkung wie `immediate` in aktuellen Implementierungen. Niedrige Eagerness-Einstellungen sind für Prefetching/Prerendering, wenn Links interagiert werden, und für diese würden Sie eher Dokumentenregeln verwenden, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seiten-Navigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
