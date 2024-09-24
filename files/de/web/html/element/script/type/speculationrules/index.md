---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>` Elements](/de/docs/Web/HTML/Element/script) zeigt an, dass der Körper des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgerendert werden sollen. Dies ist Teil der {{domxref("Speculation Rules API", "", "", "nocode")}}.

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, unter Verwendung der gleichen [unten bereitgestellten JSON-Darstellung](#json-darstellung_der_spekulationsregeln). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler nicht in der Lage sind, das Dokument selbst direkt zu ändern.

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

### JSON-Darstellung der Spekulationsregeln

Die JSON-Struktur enthält ein oder mehrere Felder auf der obersten Ebene, von denen jedes eine Aktion darstellt, für die Spekulationsregeln definiert werden sollen. Gegenwärtig werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugeordnete Dokumentantworte heruntergeladen werden sollten, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der von der Seite referenzierten Subressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugeordnete Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollten. Dies schließt das Laden aller Subressourcen, das Ausführen aller JavaScript-Programme und sogar das Laden von Subressourcen und das Ausführen von durch JavaScript initiierten Datenabrufen ein. Wenn zu diesen Dokumenten navigiert wird, erfolgen die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die [Hauptseite der Spekulationsregel-API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Verwendung von Prefetch und Prerender.

Jedes Aktionsfeld enthält ein Array, das ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Menge von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, für die die Regel gilt. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eine der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugeordneten Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert) auf Grundlage der durch einen `"where"`-Schlüssel beschriebenen Bedingungen stammen. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels impliziert, dass `source: "document"` ist, so dass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"`-Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels impliziert, dass `source: "list"` ist, so dass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, die eine Liste von URLs darstellen, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur URL der externen Ressource (wenn extern abgerufen) analysiert. `"urls"` und `"where"` können nicht beide in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, nach denen die Regel URLs im zugeordneten Dokument zuordnet. Effektiv repräsentiert das `"where"`-Objekt einen Test, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der Standard-API-Syntax des [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem (den) Muster(n) übereinstimmen, erhalten die Regel.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu etwas eingehalten wird. Dies funktioniert genau auf die gleiche Weise wie der [regelübergreifende `"relative_to"`-Schlüssel](#relative_to_2), außer dass es nur eine einzige `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die durch diese Selektoren übereinstimmen, erhalten die Regel.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie zutrifft, _nicht_ die Regel erhält. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ die Regel erhalten.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen jede zutreffen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrere Ebenen tief geschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können beschließen, sie in separate Regeln zu teilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für weitere Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie begierig er Prefetch/Prerender-Linkziele bereitstellen sollte, um den Ausgleich zwischen dem Nutzen der Leistung und den Ressourcenkosten zu finden. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor hält es für sehr wahrscheinlich, dass der Link gefolgt wird, und/oder das Dokument könnte erhebliche Zeit zum Herunterladen benötigen. Prefetch/Prerender sollte so früh wie möglich beginnen, nur beachten, beachtet werden müssen Benutzerpräferenzen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte so früh wie möglich eine große Anzahl an Navigationen prefetchen/prerendern lassen. Prefetch/Prerender sollte bei jedem Anzeichen, dass ein Link verfolgt werden könnte, beginnen. Zum Beispiel könnte der Benutzer den Mauszeiger zum Link bewegen, ihn für einen Moment schweben lassen/fokussieren oder das Scrollen mit dem Link in einer prominenten Position pausieren.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Prefetch/Prerender sollte beginnen, wenn ein vernünftiger Hinweis darauf besteht, dass der Benutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Benutzer einen Link in das Ansichtsfenster scrollen und ihn eine Zeit lang schweben/fokussieren lassen.
    - `"conservative"`
      - : Der Autor möchte etwas Nutzen aus spekulativem Laden mit einem relativ geringen Ressourcentausch erzielen. Prefetch/Prerender sollte beginnen, nur wenn der Benutzer zu klicken beginnt, z.B. bei {{domxref("Element.mousedown_event", "mousedown")}} oder {{domxref("Element.pointerdown_event", "pointerdown")}}.

    Wenn `"eagerness"` nicht explizit angegeben wird, haben List (`"urls"`) Regeln standardmäßig `immediate` und Dokument (`"where"`) Regeln standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, weshalb er einen Link wählen kann, den der Autor als weniger eifrig angedeutet hat als einen anderen, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher {{httpheader("No-Vary-Search")}}-Header-Wert auf Antworten für Dokumente gesetzt wird, für die er Prefetch/Prerender-Anfragen erhält. Der Browser kann dies im Voraus verwenden, um zu bestimmen, ob es nützlicher ist, auf einen vorhandenen Prefetch/Prerender zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel erfüllt ist. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für weitere Erläuterungen, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Policy angibt, die bei Anfragen der im Regel angegebenen URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon ist es, der verweisenden Seite zu erlauben, eine strengere Richtlinie speziell für die spekulative Anfrage zu setzen als die Richtlinie, die die Seite bereits verwendet (entweder standardmäßig oder unter Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein Cross-Site-Prefetch erfordert eine Referrer-Policy, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine weniger strenge Policy, die in den Spekulationsregeln festgelegt ist, überschreibt eine strengere Policy, die auf der verweisenden Seite festgelegt ist, solange sie für den Cross-Site-Fall noch ausreichend streng ist.

    > [!NOTE]
    > Im Fall von Dokumentregeln wird die angegebene Referrer-Policy des übereinstimmenden Links (z.B. unter Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) Attributs) verwendet, es sei denn, die Regel gibt eine Policy an, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass Links, die mit URL übereinstimmen, zugeordnet werden. Der Wert kann sein:

    - `document`
      - : URLs sollen relativ zu dem Dokument, auf das die Spekulationsregeln eingestellt sind, übereinstimmen.
    - `ruleset`
      - : URLs sollen relativ zu der Datei, in der die Regeln festgelegt sind, übereinstimmen. Dies ist der Standardwert.

    Diese Schlüssel-Einstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (die durch den {{httpheader("Speculation-Rules")}}-Header festgelegt wird). Wenn Regeln innerhalb desselben Dokuments angegeben werden, für das sie festgelegt sind (d.h. in einem Inline-`<script>`-Element), macht dies keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, die Fähigkeiten des Browsers darstellen, der die Regel parst und verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Prefetches werden automatisch in Browsern fehlschlagen, die keine angegebene Anforderung erfüllen können, auch wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur-Prefetch) Gibt an, dass die Regel nur zutrifft, wenn der Benutzer-Agent die IP-Adresse des Clients daran hindern kann, für den ursprünglichen Server sichtbar zu sein, wenn eine Cross-Site-Prefetch-Anfrage ausgegeben wird. Wie genau dies funktioniert, hängt von den Implementierungsdetails des Browsers ab. Zum Beispiel:
        - Die Implementierung von Chrome verbirgt die IP-Adresse mittels eines von Google betriebenen Proxys, daher funktioniert dies standardmäßig nur für Google-kontrollierte Referrer (da das Senden der URLs des Ziels an Google in diesem Fall kein zusätzlicher Privatsphäre-Leck ist). Wenn auf einer von Google nicht kontrollierten Seite verwendet, wird dies nur für Benutzer, die "Enhanced preloading" in `chrome://settings/preloading` aktivieren, funktionieren.
        - Andere auf Chromium-basierende Browser müssen ihre eigenen Lösungen bieten. Gründliche Tests in allen Ziel-Browsern sind ratsam.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas wie [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte etwas basierend auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt verwenden.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, wenn die Seite diese enthält. Dies wird durch Hinzufügen des `"inline-speculation-rules"`-Werts zusammen mit einem Hash- oder Nonce-Quelle durchgeführt.

## Beispiele

### Prefetch und Prerender im selben Satz von Regeln

Die grundlegenden Beispiele, die im Beschreibungsteil gezeigt wurden, enthalten separate Spekulationsregeln, die für Prefetch und Prerender definiert sind. Es ist möglich, beide in einem einzigen Satz von Regeln zu definieren:

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
> Dieses Code-Snippet zeigt ein List (`"urls"`) Regel- und ein Dokument (`"where"`) Regel-Beispiel.

### Mehrere Regel-Sätze

Es ist auch erlaubt, mehrere Sätze von Regeln in einer einzigen HTML-Datei einzuschließen:

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

Und mehrere Regeln in einem einzelnen Ergebnisset:

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

Unten ist ein Beispiel, das Spekulationsregeln erkennt und, falls unterstützt, eine Prerender-Spekulationsregel dynamisch über JavaScript hinzufügt:

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

Sie können dies in Aktion auf dieser Seite [prerender demos](https://prerender-demos.glitch.me/) sehen.

### `where`-Syntax-Beispiele

Eine dokumentenbezogene Regel enthält eine `"where"`-Eigenschaft, die ein Objekt mit Kriterien ist, die definieren, welche Links im Dokument übereinstimmen. Effektiv stellt das `"where"`-Objekt einen Test dar, der auf jedem Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird ein einzelnes URL-Muster oder einen CSS-Selektor übereinstimmen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, so dass mehrere URL-Muster oder CSS-Selektoren gleichzeitig übereinstimmen können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalter (`*`) enthalten, um einen einzelnen Wert zu ermöglichen, mehrere URLs zu entsprechen. Zum Beispiel könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats` usw. entsprechen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt angesprochen werden. Zum Beispiel könnte das untenstehende Objekt alle gleichursprünlichen URLs mit einem `category`-Suchparameter (als erstes oder nachfolgendes Parameter) adressieren:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung gesetzt wird — dies bedeutet, dass, wenn sie zutrifft, ein Link _nicht_ die Spekulationsregel erhält, aber wenn _nicht_ zutrifft, _wird_ der Link die Regel erhalten. Das folgende Beispiel wird dazu führen, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel angewendet bekommen, jedoch nicht diejenigen, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombination mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"`-Bedingungen kombiniert werden — diese nehmen den Wert von Arrays an, die mehrere Bedingungen enthalten, von denen alle oder jede (jeweils) übereinstimmen müssen, damit die Spekulationsregel auf einen Link angewendet wird. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief geschachtelt werden — es gibt kein spezifiziertes Limit für die erlaubten Schachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als Äquivalent zu einer `if`-Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

entspricht

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle gleichursprünlichen Seiten für das Prefetching markiert, mit Ausnahme derjenigen, die dafür bekannt sind, problematisch zu sein — die `/logout`-Seite und alle Links, die mit einer `.no-prerender`-Klasse markiert sind:

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
> Das `where`-Muster oben umfasst keine Cross-Site-Links, die für das Prefetching unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielsite gesetzt, um das Tracking zu verhindern) aber nicht für das Prerendering.

### `"relative_to"` Beispiel

Für Regel-Sets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}}-Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei analysiert. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu analysieren, wird `"relative_to"` verwendet, wie folgt:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden, und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet werden:

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

Im obigen Beispiel wird nur die erste `"href_matches"` relativ zur Basis-URL des Dokuments abgestimmt.

`relative_to` ist hauptsächlich relevant, wenn die JSON-Datei der Spekulationsregeln auf einem anderen Ursprung als das Dokument, für das Sie sie anwenden möchten, vorhanden ist:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann wird `/home` immer `https://example.com/home` entsprechen, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn sich jedoch das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://other.example/resources/rules.json` (zum Beispiel auf einem Drittanbieter- oder Cookieless-Ressourcenursprung), dann:

   - `"relative_to": "document"` wird bewirken, dass `/home` gleich `https://example.com/home` ist.
   - `"relative_to": "ruleset"` wird bewirken, dass `/home` gleich `https://other.example/home` ist.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann:

   - `"relative_to": "document"` würde `home` gleich `https://example.com/some/home` machen.
   - `"relative_to": "ruleset"` würde `home` gleich `https://example.com/resources/home` machen.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnisseite `/users`, die einen `id`-Parameter hinzugefügt hat, um Informationen zu einem bestimmten Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL als identisch für Cache-Zwecke betrachtet werden soll, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine vollständig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Auszug-Feld mit seinen Daten anzuzeigen, dann sollte die URL als dieselbe für Cache-Zwecke betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch ein {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` beginnt, während die Header für den Prefetch von `/users` noch nicht eingegangen sind? An diesem Punkt weiß der Browser nicht, was der `No-Vary-Search`-Wert sein wird, falls überhaupt. Wenn kein `No-Vary-Search`-Wert gesetzt würde und das Anwendungsverhalten mehr wie Option 1 oben ist, wäre der Prefetch umsonst und der Browser müsste die separate `/users?id=345`-Seite von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis geben, was der Seitenautor erwartet, dass der `No-Vary-Search`-Wert sein soll. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine String-Darstellung des erwarteten Header-Wertes enthält:

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

Dies zeigt an, dass Option 2 oben beschrieben ist, was vom Server erwartet wird. Wenn eine Navigation beginnt, während ein Prefetch von `/users` im Gange ist, informiert dies den Browser, dass es angemessen ist, auf den Prefetch zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentenregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig von dem verwendeten Muster. Zum Beispiel, im Fall von:

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

Wenn ein Link

 mit der Maus überfahren wird, beginnt der Browser mit dem Prefetching dieses spezifischen Links.

Wenn der Benutzer einen anderen Link überfährt, bevor das Prefetching abgeschlossen ist, teilt das `expects_no_vary_search`-Muster dem Browser mit, dass es nicht notwendig ist, den aktuellen Prefetch abzubrechen, da alle `/users`-URLs mit `id`-URL-Parameterwerten effektiv auf dieselbe Seite in diesem Kontext (und für Cache-Zwecke) verweisen.

### `eagerness` Beispiel

Das folgende Regelset für Dokumente zeigt, wie `eagerness` verwendet werden kann, um anzugeben, mit welcher Eile der Browser die Prerender-Navigationen für jeden Satz von Links bereitstellen sollte.

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

- Alle gleichseitigen Links im Dokument sollen konservativ vorgerendert werden (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall solche mit einer `class` von `.product-link`) im Dokument sollen eifrig vorgerendert werden (d.h. wenn der Benutzer irgendeine Art von Bewegung macht, um zu ihnen zu navigieren).

> [!NOTE]
> Die Effekte der Eifrigkeitseinstellungen sind bei Listenregeln weniger nützlich. Standardmäßig werden Listenregel-URLs sofort vorgeladen/vorgerendert, sobald die Regeln analysiert werden, was das erwartet wird — sie sind zur expliziten Auflistung von hochpriorisierten URLs vorgesehen, die Sie so bald wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` in aktuellen Implementierungen dieselbe Wirkung wie `immediate`. Niedrigere Eifrigkeitseinstellungen sind für das Prefetching/Prerendering, wenn Links interagiert werden, und dafür verwenden Sie eher Dokumentenregeln, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Speculative loading](/de/docs/Web/Performance/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
