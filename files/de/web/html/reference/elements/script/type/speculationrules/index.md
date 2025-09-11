---
title: <script type="speculationrules">
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 9c2dabaabc326c4a3fed27f6e9bcb3605958e516
---

{{SeeCompatTable}}{{non-standard_header}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, unter Verwendung der gleichen [unten bereitgestellten JSON-Darstellung](#json-darstellung_der_spekulationsregeln). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

## Syntax

```html
<script type="speculationrules">
  // JSON object defining rules
</script>
```

> [!NOTE]
> Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben sein.

### Ausnahmen

- `TypeError`
  - : Die Definition der Spekulationsregeln ist kein gültiges JSON-Objekt.

## Beschreibung

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Regeln für Prefetch und Prerender:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf der obersten Ebene, von denen jedes eine Aktion repräsentiert, um Spekulationsregeln zu definieren. Derzeit werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}} {{non-standard_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, bei denen die zugehörigen Dokumentantwortkörper heruntergeladen werden sollten, was bei der Navigation zu diesen Dokumenten zu erheblichen Leistungsverbesserungen führt. Beachten Sie, dass keine der im Dokument referenzierten Subressourcen heruntergeladen wird.
- `"prerender"` {{optional_inline}} {{experimental_inline}} {{non-standard_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, bei denen die zugehörigen Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollten. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScript-Codes und sogar das Laden von Subressourcen und das Durchführen von Datenabrufen, die vom JavaScript initiiert werden. Wenn diese Dokumente navigiert werden, erfolgen die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Nutzung von Prefetch und Prerender.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte umfasst. Jedes Objekt enthält eine einzige Regel, die eine Menge von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}
  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eines der folgenden sein:
    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} definiert) basierend auf den durch den Schlüssel `"where"` beschriebenen Bedingungen abgeglichen werden. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels `"source": "document"` impliziert, weshalb es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im Schlüssel `"urls"` angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels `"source": "list"` impliziert, weshalb es optional ist.

- `"urls"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Array von Strings, das eine Liste von URLs repräsentiert, auf die die Regel angewendet wird. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn sie inline in einem Dokument sind) oder relativ zur URL der externen Ressource (wenn sie extern abgerufen werden) analysiert. `"urls"` und `"where"` können nicht beide in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Objekt, das die Bedingungen repräsentiert, nach denen die Regel die im zugehörigen Dokument enthaltenen URLs abgleicht. Effektiv stellt das `"where"`-Objekt einen Test dar, der bei jedem Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array mit mehreren URL-Muster-Strings, die der Standard- [URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, haben die Regel angewendet.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ dazu abgeglichen wird. Dies funktioniert exakt wie der [regelübergreifende `"relative_to"`-Schlüssel](#relative_to_2), mit dem einzigen Unterschied, dass er nur eine einzige `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels beeinflusst.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array mit mehreren CSS-Selektoren. Links im Dokument, die durch diese Selektoren abgeglichen werden, haben die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthalten, die alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie übereinstimmt, _nicht_ die Regel darauf angewendet bekommt. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ die Regel darauf angewendet haben.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`) enthalten können, von denen jedes eine Übereinstimmung haben kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrstufig verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where-Beispiele](#where_syntax_examples) für weitere Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der dem Browser einen Hinweis gibt, wie eifrig er Linkziele vorladen/vorrendern soll, um Leistungsvorteile gegen Ressourcenaufwand abzuwägen. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor hält den Link für sehr wahrscheinlich, dass er gefolgt wird, und/oder das Dokument kann erheblich Zeit zum Abrufen in Anspruch nehmen. Das Vorladen/Vorrendern sollte so bald wie möglich gestartet werden, nur unter Berücksichtigung von Benutzereinstellungen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen vorladen/vorrendern, so früh wie möglich. Das Vorladen/Vorrendern sollte bei jeder noch so kleinen Andeutung, dass ein Link gefolgt werden könnte, beginnen. Beispielsweise könnte der Benutzer den Mauszeiger in Richtung des Links bewegen, ihn kurz fokussieren/hovern oder beim Scrolling mit dem Link an prominenter Stelle anhalten.
    - `"moderate"`
      - : Der Autor sucht nach einem Kompromiss zwischen `eager` und `conservative`. Das Vorladen/Vorrendern sollte beginnen, wenn es eine vernünftige Andeutung gibt, dass der Benutzer einen Link in naher Zukunft folgen wird. Zum Beispiel könnte der Benutzer einen Link in den sichtbaren Bereich scrollen und ihn für einige Zeit fokussieren/hovern.
    - `"conservative"`
      - : Der Autor wünscht sich einen gewissen Nutzen durch das speculative Laden mit einem relativ kleinen Ressourcenaufwand. Das Vorladen/Vorrendern sollte nur starten, wenn der Benutzer beginnt, auf den Link zu klicken, beispielsweise beim [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, sind List (`"urls"`) Regeln standardmäßig auf `immediate` und Dokument (`"where"`) Regeln standardmäßig auf `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig hingewiesen hat, wenn sich der weniger eifrige Kandidat als die bessere Wahl erweist.

- `"expects_no_vary_search"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen Wert der {{httpheader("No-Vary-Search")}}-Header für Antworten haben wird, bei denen Dokumente angefordert werden, die er für Vorabrufe/Vorrendern erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen vorhandenen Vorabruf/Vorrendern zu warten oder einen neuen Abruf zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das Beispiel für [`"expects_no_vary_search"`](#expects_no_vary_search_example) für eine weitere Erklärung, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der eine spezifische Referrer-Policy darstellt, die bei der Anforderung der in der Regel angegebenen URLs zu verwenden ist — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon ist es, der verweisenden Seite zu ermöglichen, eine strengere Policy speziell für die spekulative Anforderung festzulegen als die Policy, die die Seite bereits hat (entweder standardmäßig oder durch die Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein Cross-Site-Prefetch erfordert eine Referrer-Policy, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine in den Spekulationsregeln festgelegte schwächere Policy überschreibt eine auf der verweisenden Seite festgelegte strengere Policy, solange sie für den Cross-Site-Fall noch ausreichend streng ist.

    > [!NOTE]
    > Im Fall von Dokumentregeln wird die spezifische Referrer-Policy des abgeglichenen Links (z.B. durch Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-Attributs) verwendet, es sei denn, die Regel spezifiziert eine Policy, die sie überschreibt.

- `"relative_to"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der angibt, wo Sie möchten, dass die durch URL abgeglichenen Links relativ dazu abgeglichen werden. Der Wert kann einer der folgenden sein:
    - `document`
      - : URLs sollten relativ zu dem Dokument abgeglichen werden, auf dem die Spekulationsregeln gesetzt werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei abgeglichen werden, in der die Regeln spezifiziert sind. Dies ist der Standardwert.

    Diese Schlüssel-Einstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (die mit dem {{httpheader("Speculation-Rules")}}-Header festgelegt wird). Wenn Regeln im gleichen Dokument spezifiziert sind, für das sie gesetzt werden (d.h. in einem inline `<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Array von Strings, das Fähigkeiten des Browsers repräsentiert, der die Regel analysiert, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorabrufe schlagen automatisch in Browsern fehl, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur Prefetch) Gibt an, dass die Regel nur dann übereinstimmt, wenn der Benutzeragent die Client-IP-Adresse vor dem Ursprung-Server verbergen kann, wenn eine Cross-Origin-Vorabrufforderung ausgegeben wird. Die genaue Arbeitsweise hängt von den Browser-Implementierungsdetails ab. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse durch die Verwendung eines von Google betriebenen Proxys, daher funktioniert dies standardmäßig nur für von Google kontrollierte Referrer (da in diesem Fall das Senden der URLs des Ziels an Google kein zusätzlicher Datenschutz-Leck ist). Wenn es auf einer nicht von Google betriebenen Website verwendet wird, passen Regeln, die dies beinhalten, nur für Benutzer, die das "Enhanced preloading" in `chrome://settings/preloading` aktivieren.
        - Andere Chromium-basierte Browser müssen ihre eigenen Lösungen bereitstellen. Gründliche Tests in allen Ziel-Browsern werden empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas wie [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte auf etwas basieren, das auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt basiert.

- `"tag"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der verwendet wird, um eine Regel oder ein Regelset zu identifizieren. Dies wird im {{HTTPHeader("Sec-Speculation-Tags")}}-Request-Header für alle von dieser Regel abgedeckten Spekulationen enthalten sein.

- `"target_hint"` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der angibt, wo der Seiteninhalt aktiviert werden soll. Die Direktive wird für Prefetch-Spekulationen nicht unterstützt. Erlaubte Werte sind:
    - `"target_hint": "_blank"`
      - : Prerenderter Inhalt in einer neuen Seite öffnen.
    - `"target_hint": "_self"`
      - : Prerenderter Inhalt auf der aktuellen Seite öffnen. Dies ist der Standard, wenn nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive zugelassen werden, falls die Website diese enthält. Dies geschieht durch Hinzufügen des `"inline-speculation-rules"`-Werts zusammen mit einem Hash- oder Nonce-Quellenwert.

## Beispiele

### Prefetch und Prerender im selben Regelsatz

Die grundlegenden Beispiele, die im Beschreibungsteil gezeigt wurden, enthielten separate Spekulationsregeln, die für Prefetch und Prerender definiert waren. Es ist möglich, beide in einem einzigen Regelsatz zu definieren:

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
> Dieses Code-Snippet bietet ein List-(`"urls"`) Regel- und ein Dokument-(`"where"`) Regelbeispiel.

### Mehrere Regelsets

Es ist auch zulässig, mehrere Regelsätze in einer einzigen HTML-Datei zu inkludieren:

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

### Dynamische Regel-Einfügung

Unten ist ein Beispiel, das Spekulationsregeln feature-detektiert und, wenn sie unterstützt werden, dynamisch eine Prerender-Spekulationsregel via JavaScript hinzufügt:

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

### `where` Syntax-Beispiele

Eine dokumentenbezogene Regel enthält eine `"where"`-Eigenschaft, die ein Objekt mit Kriterien umfasst, die definieren, welche Links im Dokument übereinstimmen. Effektiv stellt das `"where"`-Objekt einen Test dar, der bei jedem Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird.

Die grundlegendste Version wird ein einzelnes URL-Muster oder CSS-Selektor abgleichen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, damit mehrere URL-Muster oder CSS-Selektoren gleichzeitig abgeglichen werden können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Wildcard (`*`) Zeichen enthalten, wodurch ein einziger Wert mehrere URLs abgleichen kann. Zum Beispiel könnte das unten stehende Objekt `user/`, `user/settings`, `user/stats` usw. abgleichen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Zum Beispiel könnte das unten stehende Objekt alle gleichursprünglichen URLs mit einem `category` Suchparameter (als erster oder nachfolgender Parameter) abgleichen:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann verneint werden, indem sie in eine `"not"`-Bedingung eingefügt wird — das bedeutet, dass, wenn sie übereinstimmt, ein Link _nicht_ die Spekulationsregel darauf angewendet bekommt, aber wenn _nicht_ übereinstimmt, es _wird_ die Regel darauf angewendet. Das folgende Beispiel wird dafür sorgen, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel darauf angewendet bekommen, aber nicht Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"`-Bedingungen kombiniert werden — diese nehmen den Wert von Arrays an, die mehrere Bedingungen enthalten, von denen alle oder jede (jeweils) übereinstimmen muss, damit die Spekulationsregeln auf einen Link angewendet werden. Durch die Verwendung von `"and"` oder `"or"` können Bedingungen mehrstufig tief verschachtelt werden — es gibt kein angegebenes Limit für erlaubte Verschachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als Äquivalent einer `if`-Anweisung zu betrachten. So

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist äquivalent zu

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle gleichursprünglichen Seiten für das Vorabholen markiert, außer denen, die bekanntlich problematisch sind — die `/logout`-Seite und alle Links, die mit einer Klasse `.no-prerender` gekennzeichnet sind:

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
> Das `where`-Muster oben enthält keine Cross-Site-Links, die für das Vorabholen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um Verfolgung zu verhindern), aber nicht für das Vorrendern.

### `"relative_to"` Beispiel

Für Regelsets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Response-Header), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei analysiert. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu analysieren, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden und die Basis-URL des Dokuments würde nur für Muster in dieser speziellen Bedingung verwendet:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln-JSON-Datei auf einem anderen Ursprung als das Dokument, auf das sie angewendet werden sollen, liegt:

1. Wenn das Dokument sich unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann entspricht `/home` immer `https://example.com/home` unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn das Dokument sich jedoch unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://other.example/resources/rules.json` (zum Beispiel auf einem Drittanbieter- oder cookielosen Ressource-Ursprung), dann:
   - `"relative_to": "document"` wird dafür sorgen, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` wird dafür sorgen, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` statt `/home` angegeben werden. Wenn das Dokument sich unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann:
   - `"relative_to": "document"` würde dafür sorgen, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde dafür sorgen, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage, `/users`, auf die ein `id`-Parameter hinzugefügt wird, um Informationen zu einem bestimmten Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine vollständig neue Seite mit den Informationen des angegebenen Nutzers zu laden, dann sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Nutzer auf derselben Seite hervorzuheben und möglicherweise ein Auszieh-Panel anzuzeigen, das deren Daten darstellt, dann sollte die URL für Caching-Zwecke als gleich betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch einen {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer beginnt, eine Navigation zu `/users?id=345` zu starten, wenn die Header für das Vorabrufen von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, welcher `No-Vary-Search`-Wert gesetzt sein wird, falls überhaupt einer gesetzt wird. Wenn kein `No-Vary-Search`-Wert gesetzt wäre und das Anwendungsverhalten mehr wie Option 1 oben ist, wäre das Vorabrufen verschwendet, und der Browser müsste die separate Seite `/users?id=345` von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search`-Wert sein wird. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld enthalten, das eine String-Darstellung des erwarteten Header-Werts enthält:

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

Dies gibt an, dass Option 2 wie oben beschrieben das ist, was der Server voraussichtlich bereitstellen wird. Wenn eine Navigation startet, während ein laufender Vorabruf von `/users` stattfindet, informiert dies den Browser, dass es angebracht ist, auf den Vorabruf zu warten, anstatt sofort einen neuen Abruf für `/users?id=345` zu starten.

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

Wenn ein Link gehoven wird, beginnt der Browser, diesen bestimmten Link vorabzuladen.

Wenn der Benutzer über einen anderen Link hovert, bevor der Vorabruf abgeschlossen ist, teilt das `expects_no_vary_search`-Muster dem Browser mit, dass es nicht notwendig ist, den aktuellen Vorabruf abzubrechen, da alle `/users`-URLs mit `id`-URL-Parameterwerten für diesen Kontext als dieselbe Seite gesehen werden (und für Caching-Zwecke).

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn Sie Prerender mit `No-Vary-Search` verwenden, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorrender wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Ergebnis vom Server liefern, jedoch aus verschiedenen Gründen vom Client verwendet werden (client-seitiges Rendering, UTM-Parameter für Analysezwecke, etc.). Da das anfängliche Vorrendern möglicherweise für verschiedene URL-Parameter erfolgt, sollte jeglicher Code, der von diesen abhängt, nur nach der Prerender-Aktivierung laufen.

Mehrere Parameter können in einem leerzeichengetrennten Array bereitgestellt werden:

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
> Als ein [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter Leerzeichen-getrennte, zitierte Strings sein — wie oben gezeigt — und nicht komma-getrennt, was Entwicklern möglicherweise geläufiger ist.

### `eagerness` Beispiel

Der folgende Satz von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um darauf hinzuweisen, mit welcher Eifer der Browser jede übereinstimmende Menge von Links prerendern soll.

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

Hiermit geben wir einen Hinweis darauf, dass:

- Alle gleich-ursprünglichen Links, die im Dokument enthalten sind, konservativ prerendern sollten (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produkt-Links (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig prerendern (d.h. wenn der Benutzer irgendeine Art von Bewegung in Richtung Navigation zu diesen macht).

> [!NOTE]
> Die Auswirkungen der Eagerness-Einstellungen sind für Listenregeln weniger nützlich. Standardmäßig werden Listenregel-URLs sofort vorabgeladen/vorrendern, sobald die Regeln analysiert werden, was Sie erwarten würden — sie sind dafür gedacht, explizite Listen von Hochprioritäts-URLs, die so bald wie möglich verfügbar gemacht werden sollen, anzugeben. Aus diesem Grund hat `eager` die gleiche Wirkung wie `immediate` in aktuellen Implementierungen. Niedrigere Eagerness-Einstellungen beziehen sich auf das Vorabholen/Vorrendern, wenn mit Links interagiert wird, und hierfür verwenden Sie eher Dokumentregeln, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann auf oberster Ebene eingefügt werden, um den gesamten Regelsatz zu identifizieren:

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

Ein `target_hint` kann hinzugefügt werden, um das Ziel-Fenster anzugeben, in dem übereinstimmende Prerender-Spekulationen geöffnet werden:

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

Die obigen Regeln ermöglichen das korrekte Prerendern der folgenden Links in den entsprechenden Zielen:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Sie werden nicht für Dokumentregeln benötigt (die `where` verwenden), da in diesen das Ziel aus dem `target`-Attribut des `<a>`-Link-Elements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
