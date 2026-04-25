---
title: '`<script type="speculationrules">` HTML-Attributwert'
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{SeeCompatTable}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können innerhalb externer Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden und die gleiche [unten angegebene JSON-Repräsentation verwenden](#spekulationsregeln_json-darstellung). Die Angabe eines HTTP-Headers ist in Fällen nützlich, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Die JSON-Struktur enthält ein oder mehrere Felder auf der obersten Ebene, von denen jedes eine Aktion darstellt, um Spekulationsregeln zu definieren. Aktuell werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehöriger Dokument-Antwortkörper heruntergeladen werden soll. Dies führt zu erheblichen Leistungsverbesserungen, wenn diese Dokumente aufgerufen werden. Beachten Sie, dass keine der vom Dokument referenzierten Subressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollten. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScript und sogar das Laden von Subressourcen und das Durchführen von Datenabfragen, die von JavaScript gestartet werden. Wenn diese Dokumente aufgerufen werden, erfolgen die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Nutzung von `prefetch` und `prerender`.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzige Regel, die eine Reihe von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}
  - : Ein String, der die Quelle der URLs angibt, auf die sich die Regel bezieht. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eines der folgenden sein:
    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie im {{htmlelement("a")}}- und {{htmlelement("area")}}-Element definiert) basierend auf den von einem `"where"`-Schlüssel beschriebenen Bedingungen ausgewählt werden. Beachten Sie, dass die Anwesenheit eines `"where"`-Schlüssels `"source": "document"` impliziert, daher ist er optional.
    - `"list"`
      - : Gibt an, dass die URLs aus einer in dem `"urls"`-Schlüssel angegebenen Liste stammen. Beachten Sie, dass die Anwesenheit eines `"urls"`-Schlüssels `"source": "list"` impliziert, daher ist er optional.

- `"urls"` {{experimental_inline}}
  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn sie inline in einem Dokument sind) oder relativ zur externen Ressourcen-URL (falls extern geladen) geparst. `"urls"` und `"where"` können nicht beide in derselben Regel gesetzt werden.

- `"where"` {{experimental_inline}}
  - : Ein Objekt, das die Bedingungen darstellt, nach denen die Regel URLs im zugehörigen Dokument zuordnet. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der an jedem Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der Standard-Syntax der [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, erhalten die Regel angewandt.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann diese angeben, wo Sie möchten, dass die Bedingung relativ zugeordnet wird. Dies funktioniert genauso wie der [regelbezogene `"relative_to"`-Schlüssel](#relative_to_2), nur dass es nur eine einzige `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/Guides/Selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die von diesen Selektoren übereinstimmen, erhalten die Regel angewandt.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen alle übereinstimmen müssen, damit die Regel darauf angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, falls sie übereinstimmt, die Regel _nicht_ darauf angewendet wird. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ die Regel angewandt haben.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrstufig verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für mehr Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}
  - : Ein String, der einen Hinweis für den Browser bereitstellt, wie eifrig er die Link-Ziele vorladen oder vorab rendern soll, um Leistungsvorteile gegen Ressourcenüberlastung abzuwägen. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird und/oder das Dokument erheblich Zeit zum Abrufen benötigt. Prefetch/Prerender sollte so schnell wie möglich starten, unter Berücksichtigung von Benutzerpräferenzen und Ressourcenbegrenzungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen vorab laden oder rendern, so früh wie möglich. Prefetch/Prerender sollte bei jedem geringfügigen Hinweis beginnen, dass ein Link möglicherweise gefolgt wird. Zum Beispiel könnte der Benutzer den Mauszeiger zum Link bewegen, ihn für einen Moment überfahren/fokussieren oder das Scrollen mit dem Link an einer prominenten Stelle pausieren.
    - `"moderate"`
      - : Der Autor sucht nach einem Mittelweg zwischen `eager` und `conservative`. Prefetch/Prerender sollte beginnen, wenn es einen vernünftigen Hinweis gibt, dass der Benutzer dem Link in naher Zukunft folgen wird. Zum Beispiel könnte der Benutzer einen Link in das Sichtfenster scrollen und ihn für einige Zeit überfahren/fokussieren.
    - `"conservative"`
      - : Der Autor möchte von spekulativem Laden profitieren, mit einem relativ kleinen Ressourcenaufwand. Prefetch/Prerender sollte erst beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, zum Beispiel bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, verwenden Listenregeln (`"urls"`) standardmäßig `immediate` und Dokumentenregeln (`"where"`) standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig markiert hat, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis gibt, welcher Wert für den {{httpheader("No-Vary-Search")}}-Header auf Antworten gesetzt wird, für die er Anforderungen für Vorabrufung oder Prerender erhält. Der Browser kann dies benutzen, um im Voraus zu bestimmen, ob es sinnvoller ist, auf eine bestehende Vorabrufung/Prerender zu warten oder eine neue Abrufanforderung zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das Beispiel [`"expects_no_vary_search"`](#expects_no_vary_search_example), um mehr zu erfahren, wie das verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}
  - : Ein String, der eine spezifische Referrer-Richtlinie darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Ziel ist es, der verweisenden Seite zu erlauben, speziell für die spekulative Anforderung eine strengere Politik festzulegen als die, die die Seite bereits gesetzt hat (entweder standardmäßig oder durch die Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Eine Website-übergreifende Vorabrufung erfordert eine Referrer-Richtlinie, die mindestens so streng wie der Standardwert `"strict-origin-when-cross-origin"` ist — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, oder `"no-referrer"`. Eine in den Spekulationsregeln festgelegte laxere Politik überschreibt eine auf der verweisenden Seite festgelegte strengere Politik, solange sie noch ausreichend streng für den fremden Umgebungen ist.

    > [!NOTE]
    > Bei Dokumentregeln wird die angegebene Referrer-Richtlinie (z.B. mit dem [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attribut) des übereinstimmenden Links verwendet, es sei denn, die Regel spezifiziert eine Politik, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}
  - : Ein String, der angibt, wo Sie möchten, dass die durch URL zugeordneten Links relativ zugeordnet werden. Der Wert kann einer der folgenden sein:
    - `document`
      - : URLs sollten relativ zum Dokument, für das die Spekulationsregeln gesetzt werden, zugeordnet werden.
    - `ruleset`
      - : URLs sollten relativ zur Datei, in der die Regeln spezifiziert sind, zugeordnet werden. Dies ist der Standardwert.

    Diese Einstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (gesetzt durch den {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments angegeben werden, für das sie gesetzt sind (d.h. in einem Inline-`<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}
  - : Ein Array von Strings, die Fähigkeiten des Browsers darstellen, der die Regel analysiert. Diese müssen verfügbar sein, muss die Regel auf die angegebenen URLs angewendet werden.

    > [!WARNING]
    > Vorabrufe werden in Browsern, die eine angegebene Anforderung nicht erfüllen können, automatisch fehlschlagen, auch wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur für Vorabruf) Gibt an, dass die Regel nur dann Übereinstimmungen findet, wenn der Benutzeragent verhindern kann, dass die Client-IP-Adresse für den Ursprungsserver sichtbar ist, wenn eine Website-übergreifende Vorabrufanforderung gestellt wird. Wie dies funktioniert, hängt von den spezifischen Implementationen der Browser ab. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse mithilfe eines von Google betriebenen Proxys, daher funktioniert sie standardmäßig nur für von Google kontrollierte Verweiser (da in diesem Fall das Senden der Ziel-URLs an Google kein zusätzliches Datenschutzleck darstellt). Wenn es auf einer Nicht-Google-eigenen Site verwendet wird, wird die Regel nur für Benutzer übereinstimmen, die "Erweitertes Vorladen" in `chrome://settings/preloading` aktivieren.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen anbieten. Eine umfassende Prüfung in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas in der Art von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte sich an dem Produkt [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) orientieren.

- `"tag"` {{experimental_inline}}
  - : Ein String, der verwendet wird, um eine Regel oder ein Regelset zu identifizieren. Dies wird im {{HTTPHeader("Sec-Speculation-Tags")}} Anforderungsheader für alle durch diese Regel abgedeckten Spekulationen enthalten sein.

- `"target_hint"` {{experimental_inline}}
  - : Ein String, der angibt, wo die Seite erwartet, dass der vorgerenderte Inhalt aktiviert wird.
    Die Anweisung wird für Vorabrufspekulationen nicht unterstützt.
    Zulässige Werte sind:
    - `"target_hint": "_blank"`
      - : Öffnen Sie vorgerenderte Inhalte in einer neuen Seite.
    - `"target_hint": "_self"`
      - : Öffnen Sie vorgerenderte Inhalte auf der aktuellen Seite.
        Dies ist der Standard, falls nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie ausdrücklich in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt werden, wenn die Seite diese enthält. Dies wird erreicht, indem der Wert `"inline-speculation-rules"` zusammen mit einer Hash- oder Nonce-Quelle hinzugefügt wird.

## Beispiele

### Prefetch und prerender in demselben Regelsatz

Die grundlegenden Beispiele im Beschreibungsabschnitt enthielten separate definierte Spekulationsregeln für Prefetch und Prerender. Es ist möglich, beides in einem einzigen Regelsatz zu definieren:

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
> Dieses Code-Snippet bietet ein Beispiel für eine Liste (`"urls"`) Regel und eine Dokument (`"where"`) Regel.

### Mehrere Regelsets

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

### Dynamische Regel-Insertion

Im Folgenden finden Sie ein Beispiel, das Spekulationsregeln erkennt und bei Unterstützung dynamisch eine Vorabrechnungs-Spekulationsregel über JavaScript hinzufügt:

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

### `where` Syntaxbeispiele

Eine dokumentbasierte Regel enthält eine `"where"` Eigenschaft, die ein Objekt mit Kriterien darstellt, die definieren, welche Links im Dokument übereinstimmen. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der an jedem Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird mit einem einzelnen URL-Muster oder CSS-Selektor übereinstimmen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch als Array von Werten gesetzt werden, so dass mehrere URL-Muster oder CSS-Selektoren gleichzeitig übereinstimmen können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalter (`*`) enthalten, wodurch ein einzelner Wert mit mehreren URLs übereinstimmen kann. Zum Beispiel könnte das Objekt unten `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Beispielsweise könnte das Objekt unten alle gleichmäßigen Ursprungs-URLs mit einem `category` Suchparameter (als ersten oder nachfolgenden Parameter) übereinstimmen:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann durch Platzierung innerhalb einer `"not"`-Bedingung negiert werden — dies bedeutet, dass ein Link, der übereinstimmt, _nicht_ die Spekulationsregel darauf angewendet wird, aber wenn _nicht_ übereingestimmt, wird sie _werden_. Das folgende Beispiel wird dafür sorgen, dass die Regel auf alle Links angewendet wird, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, aber nicht auf Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"` Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"`-Bedingungen kombiniert werden — diese nehmen den Wert von Arrays an, die mehrere Bedingungen enthalten, von denen alle oder jede (jeweils) übereinstimmen muss, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt keine festgelegte Begrenzung für erlaubte Verschachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als Äquivalent zu einer `if`-Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist äquivalent zu

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregel-Beispiel werden alle gleichmäßigen Ursprungs-Seiten zum Vorladen markiert, außer solche, die als problematisch bekannt sind — die `/logout` Seite und alle Links, die mit einer Klasse `.no-prerender` markiert sind:

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
> Das oben genannte `where`-Muster schließt keine Website-übergreifenden Links ein, die zum Vorladen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um ein Tracking zu vermeiden), aber nicht zum Prerendern.

### `"relative_to"` Beispiel

Für Regelsätze, die extern geladen werden (d.h. über den {{httpheader("Speculation-Rules")}}-Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentenregeln standardmäßig relativ zur URL der externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Bei Dokumentenregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln-JSON-Datei auf einer anderen Herkunft als das Dokument ist, auf das Sie sie anwenden möchten:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann entspricht `/home` immer `https://example.com/home` unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn sich jedoch das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://other.example/resources/rules.json` (zum Beispiel auf einer Drittanbieter- oder cookieless-Resource-Herkunft), dann:
   - `"relative_to": "document"` bewirkt, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` bewirkt, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` statt `/home` angegeben sind. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann:
   - `"relative_to": "document"` bewirkt, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` bewirkt, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage, `/users`, die einen `id`-Parameter enthält, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit den Informationen für den angegebenen Benutzer zu laden, dann sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein ausziehbares Panel mit seinen Daten anzuzeigen, dann sollte die URL für Caching-Zwecke als gleich angesehen werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch die Verwendung eines {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

Wie wirkt sich dies auf die Spekulationsregeln aus? Betrachten Sie den folgenden Code:

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, während die Header für den Vorabruf von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, welcher `No-Vary-Search`-Wert gesetzt sein wird, falls überhaupt einer vorhanden ist. Wenn kein `No-Vary-Search`-Wert gesetzt wäre und das Anwendungsverhalten eher wie Option 1 oben wäre, wäre der Vorabruf verschwendet und der Browser müsste die separate Seite `/users?id=345` von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor als den `No-Vary-Search`-Wert erwartet. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine String-Darstellung des erwarteten Headerwerts enthält:

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

Dies zeigt an, dass die oben beschriebene Option 2 das ist, was der Server auszugeben erwartet. Wenn eine Navigation beginnt, während ein laufender Vorabruf von `/users` stattfindet, informiert dies den Browser, dass es angemessen ist, auf den Vorabruf zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentenregeln können je nach verwendetem Muster auch in Verbindung mit `"expects_no_vary_search"` verwendet werden. Beispielsweise im Fall von:

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

Wenn ein Link überfahren wird, beginnt der Browser, diesen spezifischen Link vorabzuladen.

Wenn der Benutzer einen anderen Link überfährt, bevor der Vorabruf abgeschlossen ist, weist das `expects_no_vary_search`-Muster den Browser darauf hin, dass es nicht notwendig ist, den aktuellen Vorabruf abzubrechen, da alle `/users` URLs mit `id`-Parameterwerten in diesem Kontext (und für Caching-Zwecke) effektiv auf dieselbe Seite zeigen.

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn `prerender` mit `No-Vary-Search` verwendet wird, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Resource vom Server liefern, jedoch aus verschiedenen Gründen vom Client verwendet werden (clientseitiges Rendering, UTM-Parameter für die Analytikmessung usw.). Da das ursprüngliche Prerender möglicherweise für unterschiedliche URL-Parameter erfolgt, sollte der darauf basierende Code nur nach der Aktivierung des Prerendervorgangs ausgeführt werden.

Mehrere Parameter können in einem durch Leerzeichen getrennten Array angegeben werden:

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
> Als [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter wie gezeigt leerzeichengetrennte, in Anführungszeichen gesetzte Strings sein — und nicht durch Kommas getrennt, was Entwicklern möglicherweise vertrauter ist.

### `eagerness` Beispiel

Der folgende Satz von Dokumentenregeln zeigt, wie `eagerness` verwendet werden kann, um anzugeben, mit welcher Eifrigkeit der Browser jede übereinstimmende Menge von Links vorabladen sollte.

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

Hier deutet wir an, dass:

- Alle gleichmäßigen Ursprungs-Links im Dokument konservativ vorab geladen werden sollen (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall solche mit einer `class` von `.product-link`) im Dokument sollten eifrig vorab geladen werden (d.h. wenn der Benutzer irgendeine Art von Bewegung in Richtung Navigation auf sie macht).

> [!NOTE]
> Die Effekte der Eifer-Einstellungen sind für Listenregeln weniger nützlich. Standardmäßig werden Listenregel-URLs sofort vorgeladen/prerendered, sobald die Regeln geparst werden, was Sie erwarten würden — sie sind für die explizite Auflistung von High-Priority-URLs gedacht, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` in aktuellen Implementierungen die gleiche Wirkung wie `immediate`. Niedrigere Eifer-Einstellungen sind für das Vorladen/Rendern, wenn Links interagiert werden, und dafür verwenden Sie eher Dokumentenregeln, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann auf der obersten Ebene aufgenommen werden, um den gesamten Regelsatz zu identifizieren:

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

Ein `target_hint` kann aufgenommen werden, um das Ziel-Fenster anzugeben, in dem passende prerender-Spekulationen geöffnet werden:

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

Die obigen Regeln ermöglichen es, dass die folgenden Links korrekt im geeigneten Ziel prerendered werden:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` ist nur für Listenregeln erforderlich, die `urls` verwenden.
Sie sind für Dokumentenregeln (die `where` verwenden) nicht nötig, da in diesen das Ziel aus dem `target`-Attribut des `<a>`-Link-Elements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
