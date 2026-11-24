---
title: HTML-Attributwert `<script type="speculationrules">`
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 6e6793727b60109b6b35a417aba2fc059327da39
---

Der Wert **`speculationrules`** des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) des [Elements `<script>`](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Speculation Rules enthält.

Speculation Rules haben die Form einer JSON-Struktur, die festlegt, welche Ressourcen der Browser vorab abrufen (prefetch) oder vorab rendern (prerender) soll. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Speculation Rules können auch in externen Textdateien definiert werden, auf die der HTTP-Header {{httpheader("Speculation-Rules")}} verweist. Dabei wird dieselbe [nachfolgend beschriebene JSON-Darstellung](#json-darstellung_von_speculation_rules) verwendet. Ein HTTP-Header ist nützlich, wenn Entwickler das Dokument selbst nicht direkt ändern können.

## Syntax

```html
<script type="speculationrules">
  // JSON object defining rules
</script>
```

> [!NOTE]
> Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Definition der Speculation Rules ist kein gültiges JSON-Objekt.

## Beschreibung

Ein Element `<script type="speculationrules">` muss eine gültige JSON-Struktur enthalten, die Speculation Rules definiert. Die folgenden Beispiele zeigen getrennte Regeln für Prefetch und Prerender:

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

### JSON-Darstellung von Speculation Rules

Die JSON-Struktur enthält auf oberster Ebene ein oder mehrere Felder, von denen jedes eine Aktion bezeichnet, für die Speculation Rules definiert werden. Derzeit werden folgende Aktionen unterstützt:

- `"prefetch"` {{optional_inline}}
  - : Regeln für mögliche zukünftige Navigationen, bei denen der Antwortinhalt des zugehörigen Dokuments vorab heruntergeladen werden soll. Dadurch kann sich die Leistung beim späteren Aufrufen dieser Dokumente erheblich verbessern. Beachten Sie, dass keine der von der Seite referenzierten Unterressourcen heruntergeladen wird.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für mögliche zukünftige Navigationen, bei denen die zugehörigen Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dazu gehören das Laden aller Unterressourcen, das Ausführen des gesamten JavaScript-Codes und sogar das Laden von Unterressourcen sowie das Abrufen von Daten, das durch JavaScript ausgelöst wird. Beim späteren Aufrufen dieser Dokumente erfolgt die Navigation unmittelbar, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Ausführliche Informationen zur effektiven Verwendung von Prefetch und Prerender finden Sie auf der Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Jedes Aktionsfeld enthält ein Array mit einem oder mehreren Objekten. Jedes Objekt enthält eine einzelne Regel, die eine Gruppe von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`
  - : Ein String, der die Quelle der URLs angibt, für die die Regel gilt. Die Angabe ist optional, da sich der Wert immer aus anderen Eigenschaften ableiten lässt.

    Mögliche Werte sind:
    - `"document"`
      - : Gibt an, dass die URLs anhand von Navigationslinks im zugehörigen Dokument abgeglichen werden (wie sie durch {{htmlelement("a")}}- und {{htmlelement("area")}}-Elemente definiert sind). Maßgeblich sind dabei die Bedingungen des Schlüssels `"where"`. Da das Vorhandensein eines `"where"`-Schlüssels `"source": "document"` impliziert, ist die Angabe optional.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im Schlüssel `"urls"` angegeben ist. Da das Vorhandensein eines `"urls"`-Schlüssels `"source": "list"` impliziert, ist die Angabe optional.

- `"urls"`
  - : Ein Array von Strings, das eine Liste von URLs enthält, für die die Regel gelten soll. Es können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments interpretiert, wenn die Regeln direkt im Dokument stehen, oder relativ zur URL der externen Ressource, wenn die Regeln extern abgerufen werden. `"urls"` und `"where"` können nicht in derselben Regel angegeben werden.

- `"where"`
  - : Ein Objekt, das die Bedingungen darstellt, anhand derer die Regel mit URLs im zugehörigen Dokument übereinstimmt. Das `"where"`-Objekt stellt somit einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Speculation Rule für ihn gilt. `"where"` und `"urls"` können nicht in derselben Regel angegeben werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Ein String mit einem URL-Muster oder ein Array mit mehreren URL-Muster-Strings, die der standardmäßigen [Syntax der URL Pattern API](/de/docs/Web/API/URL_Pattern_API) entsprechen. Die Regel gilt für Links im Dokument, deren URLs mit dem Muster oder den Mustern übereinstimmen.
    - `"relative_to"`
      - : Bei einer `"href_matches"`-Bedingung kann damit angegeben werden, relativ wozu diese Bedingung abgeglichen werden soll. Dies funktioniert genauso wie der [Schlüssel `"relative_to"` auf Regelebene](#relative_to_2), wirkt sich aber nur auf eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels aus.
    - `"selector_matches"`
      - : Ein String mit einem [CSS-Selektor](/de/docs/Web/CSS/Guides/Selectors) oder ein Array mit mehreren CSS-Selektoren. Die Regel gilt für Links im Dokument, auf die diese Selektoren zutreffen.
    - `"and"`
      - : Ein Array mit einem oder mehreren Objekten, die Bedingungen enthalten (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Alle Bedingungen müssen erfüllt sein, damit die Regel für die Links gilt.
    - `"not"`
      - : Ein Objekt mit einer Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Wenn die Bedingung erfüllt ist, gilt die Regel _nicht_ für den Link. Die Regel gilt dagegen für alle Links, die die Bedingung _nicht_ erfüllen.
    - `"or"`
      - : Ein Array mit einem oder mehreren Objekten, die Bedingungen enthalten (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Es genügt, wenn eine dieser Bedingungen erfüllt ist, damit die Regel für die Links gilt.

    `"where"`-Bedingungen können über mehrere Ebenen verschachtelt werden, um komplexe Bedingungen zu erstellen. Sie können sie aber auch auf separate Regeln aufteilen, um sie einfach zu halten. Weitere Erläuterungen und Beispiele finden Sie unter [Beispiele für `"where"`](#where_syntax_examples).

- `"eagerness"`
  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie früh er Linkziele vorab abrufen oder rendern soll, um Leistungsvorteile gegen den Ressourcenaufwand abzuwägen. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor geht davon aus, dass dem Link sehr wahrscheinlich gefolgt wird und/oder dass das Abrufen des Dokuments längere Zeit dauern könnte. Prefetch oder Prerender soll so früh wie möglich beginnen, wobei lediglich Faktoren wie Benutzereinstellungen und Ressourcenlimits zu berücksichtigen sind.
    - `"eager"`
      - : Der Autor möchte möglichst früh eine große Anzahl potenzieller Navigationen vorab abrufen oder rendern. Prefetch oder Prerender soll bereits bei einem schwachen Anzeichen dafür beginnen, dass einem Link gefolgt werden könnte. Beispielsweise könnte der Benutzer den Mauszeiger auf den Link zubewegen, kurz mit der Maus darüber verweilen oder ihn fokussieren oder das Scrollen anhalten, während der Link deutlich sichtbar ist.
    - `"moderate"`
      - : Der Autor strebt ein Gleichgewicht zwischen `eager` und `conservative` an. Prefetch oder Prerender soll beginnen, wenn es einen plausiblen Hinweis darauf gibt, dass der Benutzer dem Link in naher Zukunft folgen wird. Beispielsweise könnte der Benutzer einen Link in den Viewport scrollen und eine Weile mit der Maus darüber verweilen oder ihn fokussieren.
    - `"conservative"`
      - : Der Autor möchte mit einem vergleichsweise geringen zusätzlichen Ressourcenaufwand einen gewissen Nutzen aus dem spekulativen Laden ziehen. Prefetch oder Prerender soll erst beginnen, wenn der Benutzer anfängt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht ausdrücklich angegeben wird, verwenden Listenregeln (`"urls"`) standardmäßig `immediate` und Dokumentregeln (`"where"`) standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken. Er kann daher einen Link auswählen, für den der Autor eine geringere Dringlichkeit angegeben hat als für einen anderen, wenn er den weniger dringlichen Kandidaten für die bessere Wahl hält.

- `"expects_no_vary_search"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher Wert des Headers {{httpheader("No-Vary-Search")}} in Antworten für Dokumente gesetzt sein wird, für die er Prefetch- oder Prerender-Anfragen sendet. Der Browser kann damit im Voraus entscheiden, ob es sinnvoller ist, auf den Abschluss eines bereits laufenden Prefetch- oder Prerender-Vorgangs zu warten oder eine neue Abrufanfrage zu starten, wenn eine Speculation Rule zutrifft. Weitere Erläuterungen zur Verwendung finden Sie im [Beispiel für `"expects_no_vary_search"`](#expects_no_vary_search_example).

- `"form_submission"` {{experimental_inline}}
  - : Ein boolescher Wert.
    Bei `true` werden übereinstimmende URLs für eine Navigation durch das Absenden eines Formulars vorab gerendert.
    Der Standardwert ist `false`. In diesem Fall kann das Absenden eines Formulars die vorab gerenderte Seite nicht aktivieren.
    Beachten Sie, dass eine gewöhnliche Navigation zur selben URL, etwa durch Klicken auf einen Link, die vorab gerenderte Seite nicht anzeigt.

    Ein typischer Anwendungsfall ist das Vorabrendern von Ergebnisseiten für Suchanfragen aus einem `GET`-Suchformular, beispielsweise `/search.html?q=cats`. Beispiele finden Sie unter [Vorabrendern von Suchformular-Einsendungen](#vorabrendern_von_suchformular-einsendungen).

    Wird das Prerendering für das Absenden eines Formulars vorbereitet, gelten dafür auch die Prüfungen des Browsers für Formularübermittlungen.
    Wenn beispielsweise die CSP-Direktive [`form-action`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/form-action) der Seite die Ziel-URL des Formulars blockiert, verschwendet der Browser keine Ressourcen damit, eine Seite vorab zu rendern, zu der das Formular nie navigieren kann.

    Für die Verwendung von `"form_submission"` gelten einige Einschränkungen:

    - Das Feld `form_submission` ist nur für `"prerender"`-Aktionen relevant. Enthält eine Regel im `"prefetch"`-Array `"form_submission"`, ignoriert der Browser diese Regel.
    - Vorab gerenderte Seiten werden immer mit {{httpmethod("GET")}} abgerufen. Daher wird eine Formularübermittlung mit {{httpmethod("POST")}} an eine übereinstimmende URL normal geladen.

    Regeln mit [`"document"`](#document) erfassen nur Links. Da die URL für eine Formularübermittlung erst bekannt ist, nachdem der Benutzer das Formular ausgefüllt hat, verwenden entsprechende Speculation Rules normalerweise Regeln mit [`"list"`](#list), die jede URL ausdrücklich angeben.
    Sie können die Regel für vorhersehbare Werte, etwa häufig verwendete Suchbegriffe, in das HTML der Seite aufnehmen.
    Sie können sie auch mit JavaScript hinzufügen, sobald eine Übermittlung wahrscheinlich erscheint, beispielsweise wenn der Benutzer beim Tippen in ein Suchfeld innehält oder mit der Maus über der Schaltfläche zum Absenden verweilt.
    Der Browser kann nicht selbst erkennen, wann ein Formular gleich abgesendet wird. Daher entscheidet die Seite, wann die Regel angewendet wird.

- `"referrer_policy"`
  - : Ein String, der eine bestimmte Referrer-Policy für Anfragen an die in der Regel angegebenen URLs festlegt. Mögliche Werte finden Sie unter [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy). Damit kann die verweisende Seite speziell für die spekulative Anfrage eine strengere Richtlinie festlegen als diejenige, die bereits für die Seite gilt – entweder standardmäßig oder über `Referrer-Policy`.

    > [!NOTE]
    > Ein seitenübergreifender Prefetch erfordert eine Referrer-Policy, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` – also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine weniger strenge Richtlinie in den Speculation Rules setzt eine strengere Richtlinie der verweisenden Seite außer Kraft, sofern sie für den seitenübergreifenden Fall noch ausreichend streng ist.

    > [!NOTE]
    > Bei Dokumentregeln wird die für den übereinstimmenden Link angegebene Referrer-Policy verwendet, beispielsweise über das Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy), es sei denn, die Regel legt eine Richtlinie fest, die diese außer Kraft setzt.

- `"relative_to"`
  - : Ein String, der angibt, relativ wozu URLs abgeglichen werden sollen. Mögliche Werte sind:
    - `document`
      - : URLs sollen relativ zu dem Dokument abgeglichen werden, für das die Speculation Rules festgelegt werden.
    - `ruleset`
      - : URLs sollen relativ zu der Datei abgeglichen werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Einstellung ist nur für Regeln relevant, die in einer externen Datei definiert und über den Header {{httpheader("Speculation-Rules")}} eingebunden werden. Wenn die Regeln direkt in dem Dokument stehen, für das sie gelten – also in einem eingebetteten `<script>`-Element –, hat sie keine Auswirkungen.

- `"requires"` {{experimental_inline}}
  - : Ein Array von Strings, das Fähigkeiten des Browsers bezeichnet, der die Regel verarbeitet. Diese Fähigkeiten müssen verfügbar sein, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Prefetch-Vorgänge schlagen in Browsern, die eine angegebene Anforderung nicht erfüllen können, automatisch fehl – selbst wenn diese Browser die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (Nur für Prefetch) Gibt an, dass die Regel nur dann zutrifft, wenn der User Agent verhindern kann, dass die IP-Adresse des Clients für den Origin-Server sichtbar wird, sobald eine Cross-Origin-Prefetch-Anfrage gesendet wird. Wie genau dies funktioniert, hängt von der Browserimplementierung ab. Beispielsweise:
        - Die Implementierung von Chrome verbirgt die IP-Adresse mithilfe eines Proxys von Google. Daher funktioniert dies standardmäßig nur für von Google kontrollierte verweisende Seiten, da die Weitergabe der Ziel-URLs an Google in diesem Fall keine zusätzliche Preisgabe privater Informationen darstellt. Auf einer Website, die nicht Google gehört, treffen Regeln mit dieser Anforderung nur für Benutzer zu, die unter `chrome://settings/preloading` die Option „Enhanced preloading“ aktivieren.
        - Andere Chromium-basierte Browser müssen eigene Lösungen bereitstellen. Es empfiehlt sich, alle Zielbrowser gründlich zu testen.
        - Eine zukünftige Safari-Implementierung könnte eine Lösung nach dem Vorbild von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte eine Lösung auf Grundlage des Produkts [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) verwenden.

- `"tag"`
  - : Ein String zur Kennzeichnung einer Regel oder eines Regelsatzes. Er wird bei allen spekulativen Anfragen, für die diese Regel gilt, in den Anfrage-Header {{HTTPHeader("Sec-Speculation-Tags")}} aufgenommen.

- `"target_hint"` {{experimental_inline}}
  - : Ein String, der angibt, wo die Seite erwartet, dass der vorab gerenderte Inhalt aktiviert wird.
    Diese Direktive wird für Prefetch-Spekulationen nicht unterstützt.
    Zulässige Werte sind:
    - `"target_hint": "_blank"`
      - : Den vorab gerenderten Inhalt auf einer neuen Seite öffnen.
    - `"target_hint": "_self"`
      - : Den vorab gerenderten Inhalt auf der aktuellen Seite öffnen.
        Dies ist der Standardwert, wenn nichts angegeben wird.

> [!NOTE]
> Da Speculation Rules ein `<script>`-Element verwenden, müssen sie in der Direktive [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) ausdrücklich zugelassen werden, sofern die Website diese Direktive verwendet. Dazu wird der Wert `"inline-speculation-rules"` zusammen mit einer Hash- oder Nonce-Quelle hinzugefügt.

## Beispiele

### Prefetch und Prerender im selben Regelsatz

Die grundlegenden Beispiele im Abschnitt „Beschreibung“ enthielten getrennte Speculation Rules für Prefetch und Prerender. Beide lassen sich auch in einem einzigen Regelsatz definieren:

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
> Dieser Codeausschnitt zeigt ein Beispiel für eine Listenregel (`"urls"`) und eine Dokumentregel (`"where"`).

### Mehrere Regelsätze

Eine HTML-Datei kann auch mehrere Regelsätze enthalten:

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

Ebenso kann ein einzelner Regelsatz mehrere Regeln enthalten:

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

Das folgende Beispiel prüft, ob Speculation Rules unterstützt werden. Falls ja, fügt es über JavaScript dynamisch eine Prerender-Regel hinzu:

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

### Beispiele für die `"where"`-Syntax

Eine dokumentbasierte Regel enthält eine `"where"`-Eigenschaft. Dabei handelt es sich um ein Objekt mit Kriterien, die festlegen, welche Links im Dokument erfasst werden. `"where"` stellt somit einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Speculation Rule für ihn gilt.

Die einfachste Variante gleicht ein einzelnes URL-Muster oder einen CSS-Selektor ab:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch ein Array von Werten enthalten, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig abgeglichen werden:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalterzeichen (`*`) enthalten, sodass ein einzelner Wert mit mehreren URLs übereinstimmt. Das folgende Objekt könnte beispielsweise auf `user/`, `user/settings`, `user/stats` usw. zutreffen.

```json
{ "where": { "href_matches": "/user/*" } }
```

Auch [Suchparameter (oder Query-Strings)](/de/docs/Web/API/URL/search) können mit `href_matches` erfasst werden. Das folgende Objekt könnte beispielsweise auf alle URLs desselben Origins zutreffen, die einen Suchparameter `category` enthalten – unabhängig davon, ob er der erste oder ein nachfolgender Parameter ist:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung eingeschlossen wird. Das bedeutet: Wenn die Bedingung erfüllt ist, gilt die Speculation Rule für einen Link _nicht_; wenn sie _nicht_ erfüllt ist, gilt sie. Im folgenden Beispiel gilt die Regel für alle Links, die _nicht_ dem URL-Muster `/logout` entsprechen, jedoch nicht für Links, die `/logout` entsprechen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Mehrere `"where"`-Bedingungen mit `"and"` oder `"or"` kombinieren

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` kombiniert werden. Beide verwenden Arrays mit mehreren Bedingungen: Bei `"and"` müssen alle Bedingungen erfüllt sein, bei `"or"` genügt eine, damit die Speculation Rules für einen Link gelten. Mit `"and"` und `"or"` lassen sich Bedingungen über mehrere Ebenen verschachteln. Eine Grenze für die Anzahl der Verschachtelungsebenen ist nicht festgelegt.

Es ist hilfreich, sich das `"where"`-Objekt als Entsprechung einer `if`-Anweisung vorzustellen. Somit entspricht

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

dem Folgenden:

```plain
if (A && B && (C || !D)) {
  apply a speculation rule
}
```

Im folgenden vollständigen Beispiel für eine Speculation Rule werden alle Seiten desselben Origins für Prefetch vorgesehen, mit Ausnahme der Seiten, von denen bekannt ist, dass sie problematisch sind: die Seite `/logout` und alle Links mit der Klasse `.no-prerender`:

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
> Das obige `where`-Muster erfasst keine seitenübergreifenden Links. Solche Links werden für Prefetch unterstützt, sofern der Benutzer keine Cookies für die Zielwebsite gesetzt hat, um Tracking zu verhindern, jedoch nicht für Prerender.

### Beispiel für `"relative_to"`

Bei Regelsätzen, die extern abgerufen werden – also über den Antwort-Header {{httpheader("Speculation-Rules")}} –, werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der externen Textdatei interpretiert. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu interpretieren, verwenden Sie `"relative_to"` wie folgt:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Bei Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` kombiniert werden. Die Basis-URL des Dokuments wird dann nur für Muster in dieser bestimmten Bedingung verwendet:

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

`relative_to` ist vor allem dann relevant, wenn die JSON-Datei mit den Speculation Rules einen anderen Origin hat als das Dokument, für das sie gelten soll:

1. Befindet sich das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json`, entspricht `/home` immer `https://example.com/home` – unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Befindet sich das Dokument dagegen unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` – beispielsweise auf einem Origin eines Drittanbieters oder einem Origin ohne Cookies –, gilt:
   - `"relative_to": "document"` führt dazu, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` führt dazu, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer möglicher, aber seltenerer Anwendungsfall liegt vor, wenn Ihre URLs als `home` statt als `/home` angegeben sind. Befindet sich das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json`, gilt:
   - `"relative_to": "document"` würde dazu führen, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde dazu führen, dass `home` `https://example.com/resources/home` entspricht.

### Beispiel für `"expects_no_vary_search"`

Betrachten wir die Übersichtsseite eines Benutzerverzeichnisses, `/users`. Um Informationen zu einem bestimmten Benutzer aufzurufen, wird ein Parameter `id` hinzugefügt, beispielsweise `/users?id=345`. Ob diese URL für das Caching als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn der Parameter dazu führt, dass eine vollständig neue Seite mit den Informationen zum angegebenen Benutzer geladen wird, sollte die URL separat zwischengespeichert werden.
2. Wenn der Parameter dazu führt, dass der angegebene Benutzer auf derselben Seite hervorgehoben wird und möglicherweise ein ausklappbares Panel mit seinen Daten erscheint, sollte die URL für das Caching als identisch betrachtet werden. Das könnte das Laden der Benutzerseiten beschleunigen und ließe sich mit einem {{httpheader("No-Vary-Search")}}-Header mit dem Wert `params=("id")` erreichen.

Wie wirkt sich das auf Speculation Rules aus? Betrachten Sie den folgenden Code:

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

Was geschieht in diesem Fall, wenn der Benutzer eine Navigation zu `/users?id=345` beginnt, bevor die Header für den Prefetch von `/users` eingetroffen sind? Zu diesem Zeitpunkt weiß der Browser noch nicht, ob und welcher `No-Vary-Search`-Wert gesetzt sein wird. Wäre kein `No-Vary-Search`-Wert gesetzt und verhielte sich die Anwendung eher wie in Option 1 oben, wäre der Prefetch nutzlos. Der Browser müsste die separate Seite `/users?id=345` von Grund auf abrufen.

Um dieses Problem zu lösen, können wir einen Hinweis darauf geben, welchen `No-Vary-Search`-Wert der Seitenautor erwartet. Eine Speculation Rule kann ein Feld `"expects_no_vary_search"` mit einer String-Darstellung des erwarteten Header-Werts enthalten:

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

Dies gibt an, dass der Server voraussichtlich das unter Option 2 beschriebene Verhalten liefert. Beginnt eine Navigation, während ein Prefetch von `/users` läuft, weiß der Browser dadurch, dass es sinnvoll ist, auf den Prefetch zu warten, statt sofort einen weiteren Abruf von `/users?id=345` zu starten.

Je nach verwendetem Muster können auch Dokumentregeln zusammen mit `"expects_no_vary_search"` verwendet werden. Betrachten Sie beispielsweise diesen Fall:

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

Wenn der Mauszeiger über einem Link verweilt, beginnt der Browser, genau diesen Link vorab abzurufen.

Wenn der Benutzer vor Abschluss des Prefetch mit dem Mauszeiger über einem anderen Link verweilt, zeigt das `expects_no_vary_search`-Muster dem Browser an, dass der laufende Prefetch nicht abgebrochen werden muss. Denn alle `/users`-URLs mit Werten für den URL-Parameter `id` verweisen in diesem Zusammenhang – und für das Caching – faktisch auf dieselbe Seite.

> [!WARNING]
> Bei der Verwendung von Prerender mit `No-Vary-Search` ist zusätzliche Vorsicht geboten, da die Seite zunächst mit anderen URL-Parametern vorab gerendert werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, bei denen der Server dieselbe Ressource ausliefert, die der Client jedoch aus verschiedenen Gründen nutzt, etwa für clientseitiges Rendering oder UTM-Parameter zur Analyse. Da das anfängliche Prerendering andere URL-Parameter verwenden kann, sollte Code, der von diesen Parametern abhängt, erst nach der Aktivierung der vorab gerenderten Seite ausgeführt werden.

Mehrere Parameter können in einem Array angegeben werden, dessen Einträge durch Leerzeichen getrennt sind:

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
> Da es sich um ein [strukturiertes Feld](https://www.rfc-editor.org/info/rfc8941/) handelt, müssen die Parameter – wie oben gezeigt – als Strings in Anführungszeichen angegeben und durch Leerzeichen statt durch Kommas getrennt werden, auch wenn Entwickler eher an kommagetrennte Werte gewöhnt sind.

### Beispiel für `eagerness`

Der folgende Satz von Dokumentregeln zeigt, wie Sie mit `eagerness` angeben können, wie früh der Browser die jeweiligen übereinstimmenden Links vorab rendern soll.

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

Hier geben wir Folgendes vor:

- Alle Links im Dokument, die auf dieselbe Website verweisen, sollen zurückhaltend vorab gerendert werden, also erst dann, wenn der Benutzer beginnt, sie zu aktivieren.
- Alle Produktlinks im Dokument – hier diejenigen mit der `class` `.product-link` – sollen frühzeitig vorab gerendert werden, sobald der Benutzer irgendeine Bewegung in Richtung einer Navigation zu ihnen erkennen lässt.

> [!NOTE]
> Die Einstellungen für `eagerness` sind bei Listenregeln weniger nützlich. Standardmäßig werden die URLs von Listenregeln sofort nach dem Verarbeiten der Regeln vorab abgerufen oder gerendert. Das entspricht dem erwarteten Verhalten: Listenregeln dienen dazu, URLs mit hoher Priorität ausdrücklich anzugeben, die möglichst schnell verfügbar sein sollen. Aus diesem Grund hat `eager` in aktuellen Implementierungen dieselbe Wirkung wie `immediate`. Weniger dringliche Einstellungen dienen dazu, Prefetch oder Prerender bei der Interaktion mit Links auszulösen. In solchen Fällen werden Sie Links auf der Seite eher mithilfe von Dokumentregeln erfassen.

### Beispiel für `tag`

Ein `tag` kann auf oberster Ebene eingefügt werden, um den gesamten Regelsatz zu kennzeichnen:

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

Alternativ können damit einzelne Regeln gekennzeichnet werden:

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

### Vorabrendern von Suchformular-Einsendungen

Dieses Beispiel zeigt, wie Sie die Ergebnisseite eines Suchformulars für häufig verwendete Suchbegriffe vorab rendern können, um die Wartezeit auf Ergebnisse möglicherweise zu verkürzen.

Wir beginnen mit einem typischen Suchformular:

```html
<form action="/search.html" method="get">
  <label for="site-search">Search the site:</label>
  <input type="search" id="site-search" name="q" />
  <button>Search</button>
</form>
```

Um die Ergebnisseiten für häufig verwendete Suchbegriffe vorab zu rendern, geben Sie für jeden Begriff eine URL an und setzen `"form_submission"` auf `true`:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "urls": [
          "/search.html?q=cats",
          "/search.html?q=dogs",
          "/search.html?q=badgers"
        ],
        "form_submission": true
      }
    ]
  }
</script>
```

Wenn der Benutzer nach „cats“ sucht, aktiviert der Browser die vorab gerenderte Seite `/search.html?q=cats`, die nahezu sofort erscheint.

#### Dynamische Regeln für Formularübermittlungen

Eine statische Liste hilft nur bei Begriffen, die Sie im Voraus vorhersehen können. Stattdessen können Sie einen `input`-Event-Handler verwenden, um eine Regel für die Eingabe des Benutzers hinzuzufügen:

```js
const input = document.getElementById("site-search");
let timer;
let rulesScript;

input.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    // Remove the previous rule, including when the input has been emptied
    rulesScript?.remove();
    rulesScript = undefined;

    // Don't trim: the prerendered URL must exactly match the submitted URL
    const term = input.value;
    if (!term.trim()) return;

    const rules = {
      prerender: [
        {
          urls: [`/search.html?${new URLSearchParams({ q: term })}`],
          form_submission: true,
        },
      ],
    };

    rulesScript = document.createElement("script");
    rulesScript.type = "speculationrules";
    rulesScript.textContent = JSON.stringify(rules);
    document.head.append(rulesScript);
  }, 500);
});
```

### Beispiel für `target_hint`

Mit `target_hint` kann angegeben werden, in welchem Zielfenster übereinstimmende vorab gerenderte Inhalte geöffnet werden:

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

Die obigen Regeln ermöglichen es, die folgenden Links für ihre jeweiligen Ziele korrekt vorab zu rendern:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Für Dokumentregeln mit `where` ist es nicht erforderlich, da sich das Ziel dort aus dem Attribut `target` des `<a>`-Link-Elements ergibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Seiten in Chrome vorab rendern für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
