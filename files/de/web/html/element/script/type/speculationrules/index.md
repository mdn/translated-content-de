---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>` Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die bestimmt, welche Ressourcen vom Browser vorausgeladen oder vorgerendert werden sollten. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die über den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, unter Verwendung der gleichen [unten bereitgestellten JSON-Darstellung](#spekulationsregeln_json-darstellung). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, die jeweils eine Aktion darstellen, um Spekulationsregeln zu definieren. Derzeit unterstützte Aktionen sind:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehöriger Dokumentenresponse-Body heruntergeladen werden sollte, was zu erheblichen Leistungsverbesserungen führt, wenn diese Dokumente aufgerufen werden. Beachten Sie, dass keiner der vom Dokument referenzierten Subressourcen heruntergeladen wird.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden. Dies beinhaltet das Laden aller Subressourcen, das Ausführen aller JavaScript-Skripte und sogar das Laden von Subressourcen und das Durchführen von Datenabrufen, die von JavaScript gestartet werden. Wenn diese Dokumente aufgerufen werden, erfolgt die Navigation sofort, was erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Hauptseite für vollständige Details zur effektiven Nutzung von Prefetch und Prerender.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die einen Satz von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, für die die Regel gilt. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eine der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugeordneten Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} Elementen definiert) basierend auf den durch einen `"where"` Schlüssel beschriebenen Bedingungen übereinstimmen. Beachten Sie, dass das Vorhandensein eines `"where"` Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"` Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"` Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur URL der externen Ressource (wenn extern abgerufen) geparst. `"urls"` und `"where"` können nicht beide in derselben Regel gesetzt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, nach denen die Regel URLs im zugeordneten Dokument zuordnen kann. Im Wesentlichen repräsentiert das `"where"` Objekt einen Test, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Musterzeichenfolgen enthält, die der standardmäßigen [URL Pattern API Sintax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, haben die Regel angewendet.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"` Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu ihm abgeglichen wird. Dies funktioniert genauso wie der [regelbezogene `"relative_to"` Schlüssel](#relative_to_2), außer dass er nur eine einzelne `"href_matches"` Bedingung innerhalb eines `"where"` Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der ein [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die durch diese Selektoren übereinstimmen, haben die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die alle zur Anwendung der Regel übereinstimmen müssen.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, bei deren Übereinstimmung die Regel _nicht_ angewendet wird. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ die Regel angewendet bekommen.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede zur Anwendung der Regel übereinstimmen kann.

    `"where"` Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where Beispiele](#where_syntax_examples) für mehr Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorladen/vorrendern sollte, um ein Gleichgewicht zwischen Leistungsverbesserungen und Ressourceneinsatz zu finden. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor glaubt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument könnte signifikante Zeit zum Abrufen benötigen. Prefetch/Prerender sollte so schnell wie möglich beginnen, nur beschränkt durch Überlegungen wie Benutzereinstellungen und Ressourcenlimits.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich vorladen/vorrendern. Prefetch/Prerender sollte bei jedem leichten Hinweis, dass ein Link gefolgt werden könnte, beginnen. Zum Beispiel könnte der Benutzer den Mauszeiger in Richtung des Links bewegen, ihn für einen Moment überfällig/fokussieren oder das Scrollen mit dem Link an prominenter Stelle anhalten.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Prefetch/Prerender sollte beginnen, wenn es einen vernünftigen Vorschlag gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Nutzer einen Link in das Ansichtsfenster scrollen und ihn für eine Weile überfokussieren.
    - `"conservative"`
      - : Der Autor möchte einige Vorteile aus spekulativem Laden mit einem relativ geringen Resourceneinsatz ziehen. Prefetch/Prerender sollte nur dann beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, zum Beispiel auf [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben wird, wird bei Listenregeln (`"urls"`) der Standardwert `immediate` verwendet und bei Dokumentenregeln (`"where"`) `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Algorithmen, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig markiert hat, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher {{httpheader("No-Vary-Search")}} Headerwert für Antworten auf Dokumente gesetzt wird, für die er Prefetch/Prerender Anfragen erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein bestehendes Prefetch/Prerender zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel erfüllt wird. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für weitere Erklärungen zur Verwendung.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Richtlinie angibt, die beim Anfragen der in der Regel angegebenen URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) für mögliche Werte. Zweck ist es, der verweisenden Seite zu erlauben, eine strengere Richtlinie spezifisch für die spekulative Anfrage festzulegen als die bereits auf der Seite festgelegte Richtlinie (entweder standardmäßig oder durch die Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein cross-site Prefetch erfordert eine Referrer-Policy, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine in den Spekulationsregeln gesetzte lockere Richtlinie überschreibt eine strengere auf der verweisenden Seite gesetzte Richtlinie, solange sie für den cross-site Fall immer noch ausreichend streng ist.

    > [!NOTE]
    > Bei Dokumentenregeln wird die spezifizierte Referrer-Richtlinie des verlinkten Links (z.B. durch das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) Attribut) verwendet, es sei denn, die Regel spezifiziert eine Richtlinie, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wie Sie möchten, dass übereinstimmende Links relativ zu ihm abgeglichen werden. Der Wert kann eine von Folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument abgeglichen werden, auf das die Spekulationsregeln angewendet werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei abgeglichen werden, in der die Regeln festgelegt sind. Dies ist der Standardwert.

    Diese Schlüsselfestlegung ist nur relevant für Regeln, die in einer externen Datei definiert sind (gesetzt durch den {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments, für das sie festgelegt werden (d.h. in einem inline `<script>` Element), spezifiziert werden, macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, das Fähigkeiten des Browsers, der die Regel parst, repräsentiert, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet werden kann.

    > [!WARNING]
    > Prefetches schlagen automatisch in Browsern fehl, die keine angegebene Anforderung erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur vorladen) Gibt an, dass die Regel nur dann übereinstimmt, wenn der Benutzeragent die Sichtbarkeit der Client-IP-Adresse für den Ursprungsserver verhindern kann, wenn eine cross-origin Prefetch-Anfrage ausgegeben wird. Genau wie das funktioniert, hängt von den Browserspezifikationen ab. Zum Beispiel:
        - Die Implementierung von Chrome verbirgt die IP-Adresse durch einen von Google gehosteten Proxy, daher funktioniert sie standardmäßig nur für Google-kontrollierte Referer (da in diesem Fall das Senden der URLs des Ziels an Google keine zusätzliche Privatsphäreverletzung darstellt). Bei Verwendung auf einer nicht von Google gehosteten Seite, werden Regeln, die dies beinhalten, nur für Benutzer übereinstimmen, die im `chrome://settings/preloading` "Erweitertes Vorladen" aktivieren.
        - Andere Chromium-basierte Browser müssen eigene Lösungen bereitstellen. Eine umfassende Prüfung in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas wie der [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt basieren.

> [!NOTE]
> Da Spekulationsregeln ein `<script>` Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) Richtlinie erlaubt werden, wenn die Seite diese enthält. Dies erfolgt durch Hinzufügen des `"inline-speculation-rules"` Werts zusammen mit einem Hash- oder Nicht-Quellcode.

## Beispiele

### Vorladen und Vorab-Rendern im gleichen Regelset

Die grundlegenden Beispiele, die im Beschreibungsabschnitt gezeigt wurden, schlossen separate Spekulationsregeln ein, die für Prefetch und Prerender definiert sind. Es ist möglich, beide in einem einzigen Regelset zu definieren:

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
> Dieses Codebeispiel bietet ein Listen-Regel (`"urls"`) und ein Dokument-Regel-(`"where"`) Beispiel.

### Mehrere Regelsets

Es ist auch zulässig, mehrere Regelsets in einem einzelnen HTML-Dokument einzuschließen:

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

### Dynamische Regel-Insertion

Das folgende Beispiel erkennt Spekulationsregeln und fügt, wenn unterstützt, dynamisch eine Prerender-Spekulationsregel via JavaScript hinzu:

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

Sie können dies in Aktion auf der [Prerender Demos](https://prerender-demos.glitch.me/) Seite sehen.

### `where` Syntax Beispiele

Eine Dokument-sourced Regel enthält eine `"where"` Eigenschaft, die ein Objekt darstellt, das Kriterien enthält, die definieren, welche Links im Dokument übereinstimmen. Im Wesentlichen repräsentiert das `"where"` Objekt einen Test, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird ein einzelnes URL-Muster oder CSS-Selektor übereinstimmen:

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

URL-Muster und Selektoren können auch Wildcard (`*`) Zeichen enthalten, sodass ein einzelner Wert mit mehreren URLs übereinstimmen kann. Zum Beispiel könnte das unten stehende Objekt `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` anvisiert werden. Zum Beispiel könnte das untenstehende Objekt mit allen gleichen Ursprungs-URLs mit einem `category` Suchparameter übereinstimmen (als erster oder nachfolgender Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"` Bedingung gesetzt wird — dies bedeutet, dass, wenn übereinstimmt, ein Link _nicht_ die Spekulationsregel darauf angewendet bekommt, aber wenn _nicht_ übereinstimmt, er _wird_. Das folgende Beispiel wird bewirken, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel darauf angewendet bekommen, jedoch nicht Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"` Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden — diese nehmen den Wert von Arrays auf, die mehrere Bedingungen enthalten, die alle oder irgendein (jeweils) zur Anwendung der Spekulationsregeln für einen Link übereinstimmen müssen. Mithilfe von `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt keine spezifizierte Begrenzung für die zulässigen Verschachtelungsebenen.

Es ist nützlich, das `"where"` Objekt als Äquivalent zu einer `if` Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist gleichwertig mit

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle Seiten gleichen Ursprungs zum Vorladen markiert, außer solche, die als problematisch bekannt sind — die `/logout` Seite und alle Links, die mit einer Klasse von `.no-prerender` gekennzeichnet sind:

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
> Das obige `where` Muster schließt keine cross-site Links ein, die zum Vorladen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um das Tracking zu verhindern), aber nicht zum Vorab-Rendern.

### `"relative_to"` Beispiel

Für Regelsets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Antwort-Header), werden URLs in Listenregeln und URL-Muster in Dokumentenregeln standardmäßig relativ zur URL der externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` folgendermaßen verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Bei Dokumentenregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden, und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei auf einem anderen Ursprung als das Dokument ist, auf das Sie sie anwenden möchten:

1. Wenn das Dokument sich bei `https://example.com/some/subpage.html` befindet und die Regeln bei `https://example.com/resources/rules.json`, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn das Dokument sich jedoch bei `https://example.com/some/subpage.html` befindet und die Regeln bei `https://other.example/resources/rules.json` sind (zum Beispiel auf einem Drittanbieter- oder cookieless Ressourcenursprung), dann:

   - `"relative_to": "document"` wird `/home` zu `https://example.com/home` gleichsetzen.
   - `"relative_to": "ruleset"` wird `/home` zu `https://other.example/home` gleichsetzen.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstatt `/home` angegeben sind. Wenn das Dokument sich bei `https://example.com/some/subpage.html` befindet und die Regeln bei `https://example.com/resources/rules.json`, dann:

   - `"relative_to": "document"` würde `home` zu `https://example.com/some/home` gleichsetzen.
   - `"relative_to": "ruleset"` würde `home` zu `https://example.com/resources/home` gleichsetzen.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Zielseite, `/users`, die einen `id` Parameter hat, um Informationen über einen bestimmten Benutzer zu bringen, z.B. `/users?id=345`. Ob diese URL für Cache-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine vollständig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, dann sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein zusätzliches Panel mit deren Daten anzuzeigen, dann sollte die URL für Cache-Zwecke als dieselbe betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch einen {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

Wie betrifft dies Spekulationsregeln? Betrachten Sie den folgenden Code:

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, wenn die Header für das Vorladen von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, was der `No-Vary-Search` Wert sein wird, falls überhaupt etwas. Wenn kein `No-Vary-Search` Wert gesetzt war und das Anwendungsverhalten eher wie Option 1 oben war, wäre das Vorladen nutzlos und der Browser müsste von Grund auf die separate `/users?id=345` Seite abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der `No-Vary-Search` Wert sein soll. Eine Spekulationsregel kann ein `"expects_no_vary_search"` Feld haben, das eine Zeichenfolgenrepräsentation des erwarteten Headerwerts enthält:

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

Dies zeigt an, dass Option 2 oben beschrieben ist, was der Server zu produzieren erwartet wird. Wenn eine Navigation beginnt, während ein laufendes Prefetch von `/users` stattfindet, informiert dies den Browser, dass es angemessen ist, auf das Prefetch zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentenregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig vom Muster, das verwendet wird. Zum Beispiel im Fall von:

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

Wenn ein Link überfahren wird, startet der Browser das Vorholen dieses bestimmten Links.

Wenn der Benutzer einen anderen Link überfährt, bevor das Vorladen abgeschlossen ist, sagt das `expects_no_vary_search` Muster dem Browser, dass es nicht notwendig ist, das aktuelle Vorladen abzubrechen, da alle `/users` URLs mit `id` URL-Parameterwerten effektiv auf dieselbe Seite in diesem Kontext (und für Cache-Zwecke) verweisen.

### `eagerness` Beispiel

Das folgende Set von Dokumentenregeln zeigt, wie `eagerness` verwendet werden kann, um einen Hinweis darauf zu geben, mit welcher Eifrigkeit der Browser jede übereinstimmende Satz von Links vorrendern sollte.

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

- Alle Links auf derselben Seite im Dokument konservativ vorgerendert werden sollten (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall, solche mit einer Klasse von `.product-link`) im Dokument sollten eifrig vorgerendert werden (d.h. wenn der Benutzer irgendeine Art von Bewegung zu ihnen hin macht).

> [!NOTE]
> Die Auswirkungen von Eifrigkeitseinstellungen sind für Listenregel weniger nützlich. Standardmäßig werden URLs von Listenregel sofort vorgeladen/gerendert, sobald die Regeln geparst sind, was Sie erwarten würden — sie sind für das explizite Auflisten von hochprioritären URLs gedacht, die Sie so schnell wie möglich zur Verfügung stellen möchten. Aus diesem Grund hat `eager` die gleiche Wirkung wie `immediate` in den aktuellen Implementierungen. Niedrigere Eifrigkeitsstufen sind für das Vorladen/Vorrendern, wenn Links interagiert werden, und dafür werden Sie wahrscheinlich Dokumentenregeln verwenden, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitenwechsel](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
