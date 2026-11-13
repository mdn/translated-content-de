---
title: HTML-Attributwert `<script type="speculationrules">`
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Der Wert **`speculationrules`** des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) des [Elements `<script>`](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die festlegt, welche Ressourcen der Browser vorab abrufen oder vorab rendern soll. Sie sind Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können auch in externen Textdateien definiert werden, auf die der HTTP-Header {{httpheader("Speculation-Rules")}} verweist. Dabei wird dieselbe [unten beschriebene JSON-Darstellung](#json-darstellung_von_spekulationsregeln) verwendet. Ein HTTP-Header ist nützlich, wenn Entwickler das Dokument selbst nicht direkt ändern können.

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
  - : Die Definition der Spekulationsregeln ist kein gültiges JSON-Objekt.

## Beschreibung

Ein Element `<script type="speculationrules">` muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen getrennte Regeln für Prefetch und Prerender:

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

### JSON-Darstellung von Spekulationsregeln

Die JSON-Struktur enthält auf der obersten Ebene ein oder mehrere Felder. Jedes Feld steht für eine Aktion, für die Spekulationsregeln definiert werden. Derzeit werden folgende Aktionen unterstützt:

- `"prefetch"` {{optional_inline}}
  - : Regeln für mögliche zukünftige Navigationen, bei denen der Response-Body des zugehörigen Dokuments vorab heruntergeladen werden soll. Dies führt zu erheblichen Leistungsverbesserungen, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass dabei keine Subressourcen heruntergeladen werden, auf die die Seite verweist.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für mögliche zukünftige Navigationen, bei denen die zugehörigen Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dazu gehören das Laden aller Subressourcen, die Ausführung des gesamten JavaScript sowie das Laden von Subressourcen und das Abrufen von Daten, die durch JavaScript angestoßen werden. Wird zu einem dieser Dokumente navigiert, erfolgt die Navigation sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Ausführliche Informationen zur effektiven Verwendung von Prefetch und Prerender finden Sie auf der Hauptseite zur [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Jedes Aktionsfeld enthält ein Array mit einem oder mehreren Objekten. Jedes Objekt enthält eine einzelne Regel, die eine Gruppe von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`
  - : Ein String, der die Quelle der URLs angibt, für die die Regel gilt. Die Angabe ist optional, da sich der Wert stets aus anderen Eigenschaften ableiten lässt.

    Mögliche Werte sind:
    - `"document"`
      - : Gibt an, dass die URLs anhand von Navigationslinks im zugehörigen Dokument ermittelt werden (wie sie durch die Elemente {{htmlelement("a")}} und {{htmlelement("area")}} definiert sind). Maßgeblich sind dabei die Bedingungen eines `"where"`-Schlüssels. Da ein `"where"`-Schlüssel `"source": "document"` impliziert, ist die Angabe optional.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im Schlüssel `"urls"` angegeben ist. Da ein `"urls"`-Schlüssel `"source": "list"` impliziert, ist die Angabe optional.

- `"urls"`
  - : Ein Array von Strings, das eine Liste der URLs darstellt, auf die die Regel angewendet werden soll. Dies können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments aufgelöst, wenn die Regeln direkt im Dokument stehen, oder relativ zur URL der externen Ressource, wenn sie extern abgerufen werden. `"urls"` und `"where"` können nicht in derselben Regel angegeben werden.

- `"where"`
  - : Ein Objekt mit Bedingungen, anhand derer die Regel URLs im zugehörigen Dokument abgleicht. Das `"where"`-Objekt beschreibt damit eine Prüfung, die für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel für ihn gilt. `"where"` und `"urls"` können nicht in derselben Regel angegeben werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Ein String mit einem URL-Muster oder ein Array mit mehreren URL-Muster-Strings gemäß der standardmäßigen [Syntax der URL Pattern API](/de/docs/Web/API/URL_Pattern_API). Die Regel wird auf Links im Dokument angewendet, deren URLs mit dem oder den Mustern übereinstimmen.
    - `"relative_to"`
      - : Gibt für eine `"href_matches"`-Bedingung an, relativ wozu der Abgleich erfolgen soll. Dies funktioniert genauso wie der [`"relative_to"`-Schlüssel auf Regelebene](#relative_to_2), wirkt sich jedoch nur auf eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels aus.
    - `"selector_matches"`
      - : Ein String mit einem [CSS-Selektor](/de/docs/Web/CSS/Guides/Selectors) oder ein Array mit mehreren CSS-Selektoren. Die Regel wird auf Links im Dokument angewendet, die diesen Selektoren entsprechen.
    - `"and"`
      - : Ein Array mit einem oder mehreren Objekten, die Bedingungen enthalten (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Alle Bedingungen müssen erfüllt sein, damit die Regel angewendet wird.
    - `"not"`
      - : Ein Objekt mit einer Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Auf Links, die diese Bedingung erfüllen, wird die Regel _nicht_ angewendet. Auf alle Links, die die Bedingung _nicht_ erfüllen, wird sie angewendet.
    - `"or"`
      - : Ein Array mit einem oder mehreren Objekten, die Bedingungen enthalten (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Es genügt, wenn eine dieser Bedingungen erfüllt ist, damit die Regel angewendet wird.

    `"where"`-Bedingungen können über mehrere Ebenen verschachtelt werden, um komplexe Bedingungen zu erstellen. Alternativ können Sie sie auf separate Regeln verteilen, um sie einfach zu halten. Weitere Erläuterungen und Anwendungsbeispiele finden Sie in den [Beispielen zur `where`-Syntax](#where_syntax_examples).

- `"eagerness"`
  - : Ein String, der dem Browser einen Hinweis gibt, wie früh er Linkziele vorab abrufen oder rendern soll, um Leistungsvorteile gegen den Ressourcenverbrauch abzuwägen. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor hält es für sehr wahrscheinlich, dass dem Link gefolgt wird, und/oder das Abrufen des Dokuments könnte erhebliche Zeit in Anspruch nehmen. Prefetch oder Prerender soll so bald wie möglich beginnen, vorbehaltlich von Faktoren wie Nutzereinstellungen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl möglicher Navigationen so früh wie möglich vorab abrufen oder rendern. Prefetch oder Prerender soll bereits beim geringsten Anzeichen beginnen, dass einem Link gefolgt werden könnte. Beispielsweise könnte der Nutzer den Mauszeiger in Richtung des Links bewegen, kurz mit dem Mauszeiger darauf verweilen, ihn fokussieren oder beim Scrollen anhalten, während der Link gut sichtbar ist.
    - `"moderate"`
      - : Der Autor möchte einen Mittelweg zwischen `eager` und `conservative`. Prefetch oder Prerender soll beginnen, wenn es einen hinreichenden Hinweis darauf gibt, dass der Nutzer dem Link in naher Zukunft folgen wird. Beispielsweise könnte der Nutzer einen Link in den Viewport scrollen und eine Weile mit dem Mauszeiger darauf verweilen oder ihn fokussieren.
    - `"conservative"`
      - : Der Autor möchte einen gewissen Nutzen aus dem spekulativen Laden ziehen und dafür nur einen vergleichsweise geringen zusätzlichen Ressourcenverbrauch in Kauf nehmen. Prefetch oder Prerender soll erst beginnen, wenn der Nutzer anfängt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht ausdrücklich angegeben wird, gilt für Listenregeln (`"urls"`) standardmäßig `immediate` und für Dokumentregeln (`"where"`) `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken. Er kann daher einen Link auswählen, den der Autor als weniger dringend eingestuft hat, wenn er diesen Kandidaten für geeigneter hält.

- `"expects_no_vary_search"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen Wert der Header {{httpheader("No-Vary-Search")}} in den Antworten auf Prefetch- oder Prerender-Anfragen für Dokumente haben wird. So kann der Browser im Voraus entscheiden, ob es sinnvoller ist, auf den Abschluss eines laufenden Prefetch oder Prerender zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel zutrifft. Das [Beispiel zu `"expects_no_vary_search"`](#expects_no_vary_search_example) erläutert die Verwendung näher.

- `"referrer_policy"`
  - : Ein String, der eine bestimmte Referrer-Policy für Anfragen an die in der Regel angegebenen URLs festlegt. Mögliche Werte finden Sie unter [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy). Damit kann die verweisende Seite speziell für die spekulative Anfrage eine strengere Policy festlegen als diejenige, die bereits für die Seite gilt – entweder standardmäßig oder durch `Referrer-Policy`.

    > [!NOTE]
    > Für einen websiteübergreifenden Prefetch ist eine Referrer-Policy erforderlich, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` – also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine weniger strenge Policy in den Spekulationsregeln überschreibt eine strengere Policy der verweisenden Seite, sofern sie für den websiteübergreifenden Fall noch ausreichend streng ist.

    > [!NOTE]
    > Bei Dokumentregeln wird die für den jeweiligen Link festgelegte Referrer-Policy verwendet, beispielsweise durch das Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy), sofern die Regel keine Policy angibt, die sie überschreibt.

- `"relative_to"`
  - : Ein String, der angibt, relativ wozu Links beim URL-Abgleich aufgelöst werden sollen. Mögliche Werte sind:
    - `document`
      - : URLs sollen relativ zu dem Dokument abgeglichen werden, für das die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollen relativ zu der Datei abgeglichen werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Einstellung ist nur für Regeln relevant, die in einer externen Datei definiert sind (angegeben über den Header {{httpheader("Speculation-Rules")}}). Wenn die Regeln direkt in dem Dokument stehen, für das sie gelten – also in einem Inline-Element `<script>` –, macht sie keinen Unterschied.

- `"requires"` {{experimental_inline}}
  - : Ein Array von Strings, das Fähigkeiten des Browsers beschreibt, der die Regel verarbeitet. Diese Fähigkeiten müssen verfügbar sein, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Prefetch-Anfragen schlagen in Browsern, die eine angegebene Anforderung nicht erfüllen können, automatisch fehl – selbst wenn diese Browser die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (Nur für Prefetch) Gibt an, dass die Regel nur zutrifft, wenn der User-Agent verhindern kann, dass die Client-IP-Adresse bei einer Cross-Origin-Prefetch-Anfrage für den Origin-Server sichtbar wird. Wie dies genau funktioniert, hängt von der Browserimplementierung ab. Beispielsweise:
        - Die Implementierung von Chrome verbirgt die IP-Adresse über einen Proxy von Google. Daher funktioniert sie standardmäßig nur für Referrer unter Kontrolle von Google, da die Weitergabe der Ziel-URLs an Google in diesem Fall keine zusätzliche Offenlegung privater Daten darstellt. Auf einer Website, die nicht Google gehört, treffen Regeln mit diesem Wert nur für Nutzer zu, die unter `chrome://settings/preloading` die Option „Enhanced preloading“ aktivieren.
        - Andere Chromium-basierte Browser müssen eigene Lösungen bereitstellen. Es empfiehlt sich, alle Zielbrowser gründlich zu testen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise einen Ansatz ähnlich [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte auf dem Produkt [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) basieren.

- `"tag"`
  - : Ein String zur Kennzeichnung einer Regel oder eines Regelsatzes. Er wird bei allen Spekulationen, für die diese Regel gilt, in den Request-Header {{HTTPHeader("Sec-Speculation-Tags")}} aufgenommen.

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
> Da Spekulationsregeln ein Element `<script>` verwenden, müssen sie in der Direktive [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) ausdrücklich erlaubt werden, falls die Website diese Direktive verwendet. Dazu wird der Wert `"inline-speculation-rules"` zusammen mit einer Hash- oder Nonce-Quelle hinzugefügt.

## Beispiele

### Prefetch und Prerender im selben Regelsatz

Die grundlegenden Beispiele im Abschnitt „Beschreibung“ enthalten getrennte Spekulationsregeln für Prefetch und Prerender. Beide können auch in einem einzigen Regelsatz definiert werden:

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
> Dieses Codebeispiel enthält eine Listenregel (`"urls"`) und eine Dokumentregel (`"where"`).

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

Das folgende Beispiel prüft, ob Spekulationsregeln unterstützt werden, und fügt gegebenenfalls dynamisch per JavaScript eine Prerender-Spekulationsregel hinzu:

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

### Beispiele zur `where`-Syntax

Eine dokumentbasierte Regel enthält eine `"where"`-Eigenschaft. Dabei handelt es sich um ein Objekt mit Kriterien, die festlegen, welche Links im Dokument übereinstimmen. Das `"where"`-Objekt beschreibt damit eine Prüfung, die für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel für ihn gilt.

Die einfachste Variante gleicht ein einzelnes URL-Muster oder einen CSS-Selektor ab:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig abgeglichen werden:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können außerdem Platzhalterzeichen (`*`) enthalten, sodass ein einzelner Wert mit mehreren URLs übereinstimmt. Das folgende Objekt könnte beispielsweise `user/`, `user/settings`, `user/stats` usw. abgleichen.

```json
{ "where": { "href_matches": "/user/*" } }
```

Auch [Suchparameter (oder Query-Strings)](/de/docs/Web/API/URL/search) können mit `href_matches` berücksichtigt werden. Das folgende Objekt könnte beispielsweise alle Same-Origin-URLs mit einem Suchparameter `category` abgleichen, unabhängig davon, ob dieser der erste oder ein nachfolgender Parameter ist:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann durch Einbettung in eine `"not"`-Bedingung negiert werden. Das bedeutet: Wenn ein Link die Bedingung erfüllt, wird die Spekulationsregel auf ihn _nicht_ angewendet; erfüllt er sie _nicht_, wird sie angewendet. Im folgenden Beispiel gilt die Regel für alle Links, die _nicht_ dem URL-Muster `/logout` entsprechen, aber nicht für Links, die `/logout` entsprechen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Mehrere `"where"`-Bedingungen mit `"and"` oder `"or"` kombinieren

Mehrere Bedingungen können in `"and"`- oder `"or"`-Bedingungen kombiniert werden. Deren Werte sind Arrays mit mehreren Bedingungen: Bei `"and"` müssen alle, bei `"or"` muss mindestens eine davon erfüllt sein, damit die Spekulationsregel auf einen Link angewendet wird. Mit `"and"` und `"or"` lassen sich Bedingungen über mehrere Ebenen verschachteln; für die Verschachtelungstiefe ist keine Grenze festgelegt.

Es kann hilfreich sein, sich das `"where"`-Objekt als Entsprechung einer `if`-Anweisung vorzustellen. Somit ist

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

gleichbedeutend mit

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Beispiel einer Spekulationsregel werden alle Same-Origin-Seiten für Prefetch vorgesehen, mit Ausnahme der Seiten, die bekanntermaßen problematisch sind: die Seite `/logout` und alle Links mit der Klasse `.no-prerender`:

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
> Das obige `where`-Muster schließt websiteübergreifende Links nicht ein. Diese werden für Prefetch unterstützt, sofern der Nutzer für die Zielwebsite keine Cookies gesetzt hat, um Tracking zu verhindern. Für Prerender werden sie nicht unterstützt.

### Beispiel zu `"relative_to"`

Bei Regelsätzen, die extern abgerufen werden – also über den Response-Header {{httpheader("Speculation-Rules")}} –, werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der externen Textdatei aufgelöst. Um URLs einer Listenregel relativ zur Basis-URL des Dokuments aufzulösen, verwenden Sie `"relative_to"` wie folgt:

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

Im obigen Beispiel wird nur die erste `"href_matches"`-Bedingung relativ zur Basis-URL des Dokuments abgeglichen.

`relative_to` ist vor allem dann relevant, wenn die JSON-Datei mit den Spekulationsregeln einen anderen Origin hat als das Dokument, auf das Sie die Regeln anwenden möchten:

1. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` liegen, entspricht `/home` immer `https://example.com/home` – unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn das Dokument hingegen unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` liegen, beispielsweise bei einem Drittanbieter oder auf einem Ressourcen-Origin ohne Cookies, gilt:
   - Bei `"relative_to": "document"` entspricht `/home` der URL `https://example.com/home`.
   - Bei `"relative_to": "ruleset"` entspricht `/home` der URL `https://other.example/home`.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer möglicher, aber seltenerer Anwendungsfall liegt vor, wenn Ihre URLs als `home` statt als `/home` angegeben sind. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` liegen, gilt:
   - Bei `"relative_to": "document"` entspricht `home` der URL `https://example.com/some/home`.
   - Bei `"relative_to": "ruleset"` entspricht `home` der URL `https://example.com/resources/home`.

### Beispiel zu `"expects_no_vary_search"`

Betrachten wir die Startseite eines Nutzerverzeichnisses, `/users`, der ein `id`-Parameter hinzugefügt wird, um Informationen zu einem bestimmten Nutzer anzuzeigen, beispielsweise `/users?id=345`. Ob diese URL für das Caching als identisch mit `/users` gelten sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn der Parameter bewirkt, dass eine völlig neue Seite mit den Informationen zum angegebenen Nutzer geladen wird, sollte die URL separat zwischengespeichert werden.
2. Wenn der Parameter bewirkt, dass der angegebene Nutzer auf derselben Seite hervorgehoben und möglicherweise ein ausklappbares Panel mit seinen Daten angezeigt wird, sollten die URLs für das Caching als identisch gelten. Dies könnte das Laden der Nutzerseiten beschleunigen und ließe sich mit einem {{httpheader("No-Vary-Search")}}-Header mit dem Wert `params=("id")` erreichen.

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

Was geschieht in diesem Fall, wenn der Nutzer eine Navigation zu `/users?id=345` beginnt, bevor die Header für den Prefetch von `/users` empfangen wurden? Zu diesem Zeitpunkt weiß der Browser noch nicht, ob und welchen `No-Vary-Search`-Wert die Antwort enthalten wird. Wenn kein `No-Vary-Search`-Wert gesetzt wäre und sich die Anwendung eher wie in der obigen Option 1 verhielte, wäre der Prefetch nutzlos. Der Browser müsste die separate Seite `/users?id=345` vollständig neu abrufen.

Um dieses Problem zu lösen, können wir angeben, welchen `No-Vary-Search`-Wert der Autor der Seite erwartet. Eine Spekulationsregel kann ein Feld `"expects_no_vary_search"` enthalten, dessen Wert eine String-Darstellung des erwarteten Header-Werts ist:

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

Dies zeigt an, dass vom Server das unter Option 2 beschriebene Verhalten erwartet wird. Wenn eine Navigation beginnt, während der Prefetch von `/users` noch läuft, weiß der Browser dadurch, dass er auf dessen Abschluss warten kann, statt sofort eine weitere Anfrage für `/users?id=345` zu starten.

Je nach verwendetem Muster können Dokumentregeln ebenfalls mit `"expects_no_vary_search"` kombiniert werden. Betrachten Sie beispielsweise diesen Fall:

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

Wenn der Nutzer den Mauszeiger über einen anderen Link bewegt, bevor der Prefetch abgeschlossen ist, zeigt das `expects_no_vary_search`-Muster dem Browser an, dass er den laufenden Prefetch nicht abbrechen muss. In diesem Kontext – und für das Caching – verweisen alle `/users`-URLs mit Werten für den URL-Parameter `id` effektiv auf dieselbe Seite.

> [!WARNING]
> Bei der Verwendung von Prerender mit `No-Vary-Search` ist besondere Vorsicht geboten, da die Seite zunächst mit anderen URL-Parametern vorab gerendert werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, bei denen der Server dieselbe Ressource liefert, die der Client aber aus verschiedenen Gründen nutzt, etwa für clientseitiges Rendering oder UTM-Parameter zur Analyse. Da der anfängliche Prerender andere URL-Parameter betreffen kann, sollte Code, der von diesen Parametern abhängt, erst nach der Aktivierung des vorab gerenderten Dokuments ausgeführt werden.

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
> Da es sich um ein [strukturiertes Feld](https://www.rfc-editor.org/info/rfc8941/) handelt, sollten die Parameter – wie oben gezeigt – durch Leerzeichen getrennte Strings in Anführungszeichen sein, nicht durch Kommas getrennt, wie Entwickler es möglicherweise eher gewohnt sind.

### Beispiel zu `eagerness`

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

Hier geben wir folgende Hinweise:

- Alle Same-Site-Links im Dokument sollen zurückhaltend vorab gerendert werden, also wenn der Nutzer beginnt, sie zu aktivieren.
- Alle Produktlinks im Dokument – hier diejenigen mit einer `class` von `.product-link` – sollen frühzeitig vorab gerendert werden, sobald der Nutzer Anzeichen erkennen lässt, zu ihnen navigieren zu wollen.

> [!NOTE]
> Bei Listenregeln sind die Auswirkungen der `eagerness`-Einstellungen weniger nützlich. Standardmäßig werden die URLs von Listenregeln sofort vorab abgerufen oder gerendert, sobald die Regeln verarbeitet wurden. Das ist zu erwarten: Listenregeln dienen dazu, URLs mit hoher Priorität ausdrücklich aufzuführen, die möglichst schnell verfügbar sein sollen. Deshalb hat `eager` in aktuellen Implementierungen dieselbe Wirkung wie `immediate`. Niedrigere `eagerness`-Werte sind für Prefetch oder Prerender bei Interaktionen mit Links gedacht. Um solche Links auf der Seite zu finden, werden Sie eher Dokumentregeln verwenden.

### Beispiel zu `tag`

Ein `tag` kann auf der obersten Ebene angegeben werden, um den gesamten Regelsatz zu kennzeichnen:

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

Oder um einzelne Regeln zu kennzeichnen:

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

### Beispiel zu `target_hint`

Ein `target_hint` kann angegeben werden, um das Zielfenster festzulegen, in dem passende vorab gerenderte Inhalte geöffnet werden:

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

Mit den obigen Regeln können die folgenden Links für ihre jeweiligen Ziele korrekt vorab gerendert werden:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Für Dokumentregeln, die `where` verwenden, ist es nicht erforderlich, da sich das Ziel dort aus dem Attribut `target` des Link-Elements `<a>` ergibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Seiten in Chrome für sofortige Navigationen vorab rendern](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
