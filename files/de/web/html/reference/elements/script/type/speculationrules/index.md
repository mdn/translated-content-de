---
title: HTML-Attributwert `<script type="speculationrules">`
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{SeeCompatTable}}

Der Wert **`speculationrules`** des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) des [Elements `<script>`](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln liegen als JSON-Struktur vor, die festlegt, welche Ressourcen der Browser vorab abrufen oder vorab rendern soll. Sie sind Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

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

Ein Element `<script type="speculationrules">` muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen getrennte Regeln für das vorzeitige Abrufen und das vorzeitige Rendern:

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

Die JSON-Struktur enthält auf oberster Ebene ein oder mehrere Felder, von denen jedes eine Aktion bezeichnet, für die Spekulationsregeln definiert werden. Derzeit werden folgende Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für mögliche künftige Navigationen, bei denen der Antwortinhalt des zugehörigen Dokuments vorab heruntergeladen werden soll. Dadurch können sich erhebliche Leistungsvorteile ergeben, wenn zu diesen Dokumenten navigiert wird. Keine der Unterressourcen, auf die die Seite verweist, wird dabei heruntergeladen.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für mögliche künftige Navigationen, bei denen die zugehörigen Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dazu gehören das Laden aller Unterressourcen, das Ausführen des gesamten JavaScript-Codes sowie das Laden von Unterressourcen und das Abrufen von Daten, das durch JavaScript ausgelöst wird. Wird zu einem solchen Dokument navigiert, erfolgt die Navigation unmittelbar, was erhebliche Leistungsvorteile bringt.

> [!NOTE]
> Ausführliche Informationen zur effektiven Nutzung des vorzeitigen Abrufens und Renderns finden Sie auf der Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Jedes Aktionsfeld enthält ein Array mit einem oder mehreren Objekten. Jedes Objekt enthält eine einzelne Regel, die eine Gruppe von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}
  - : Eine Zeichenfolge, die angibt, woher die URLs stammen, für die die Regel gilt. Die Angabe ist optional, da sich der Wert immer aus anderen Eigenschaften ableiten lässt.

    Folgende Werte sind möglich:
    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument ermittelt werden (definiert durch die Elemente {{htmlelement("a")}} und {{htmlelement("area")}}), und zwar anhand der Bedingungen eines `"where"`-Schlüssels. Da ein `"where"`-Schlüssel `"source": "document"` impliziert, ist diese Angabe optional.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im Schlüssel `"urls"` angegeben ist. Da ein `"urls"`-Schlüssel `"source": "list"` impliziert, ist diese Angabe optional.

- `"urls"` {{experimental_inline}}
  - : Ein Array von Zeichenfolgen mit den URLs, für die die Regel gelten soll. Dies können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments aufgelöst (wenn die Regel direkt in ein Dokument eingebettet ist) oder relativ zur URL der externen Ressource (wenn sie extern abgerufen wird). `"urls"` und `"where"` können nicht in derselben Regel angegeben werden.

- `"where"` {{experimental_inline}}
  - : Ein Objekt mit den Bedingungen, anhand derer die Regel mit URLs im zugehörigen Dokument abgeglichen wird. Das `"where"`-Objekt stellt damit eine Prüfung dar, die für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel auf ihn angewendet wird. `"where"` und `"urls"` können nicht in derselben Regel angegeben werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Eine Zeichenfolge mit einem URL-Muster oder ein Array mit mehreren URL-Mustern gemäß der [Syntax der URL Pattern API](/de/docs/Web/API/URL_Pattern_API). Die Regel wird auf Links im Dokument angewendet, deren URLs mit den Mustern übereinstimmen.
    - `"relative_to"`
      - : Legt bei einer `"href_matches"`-Bedingung fest, relativ wozu der Abgleich erfolgen soll. Dies funktioniert genauso wie der [Schlüssel `"relative_to"` auf Regelebene](#relative_to_2), wirkt sich aber nur auf eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels aus.
    - `"selector_matches"`
      - : Eine Zeichenfolge mit einem [CSS-Selektor](/de/docs/Web/CSS/Guides/Selectors) oder ein Array mit mehreren CSS-Selektoren. Die Regel wird auf Links im Dokument angewendet, die diesen Selektoren entsprechen.
    - `"and"`
      - : Ein Array mit einem oder mehreren Objekten, die Bedingungen enthalten (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Alle Bedingungen müssen erfüllt sein, damit die Regel angewendet wird.
    - `"not"`
      - : Ein Objekt mit einer Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Wenn die Bedingung erfüllt ist, wird die Regel _nicht_ angewendet. Auf alle Links, die die Bedingung _nicht_ erfüllen, wird die Regel angewendet.
    - `"or"`
      - : Ein Array mit einem oder mehreren Objekten, die Bedingungen enthalten (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` oder `"or"`). Es genügt, wenn eine dieser Bedingungen erfüllt ist, damit die Regel angewendet wird.

    `"where"`-Bedingungen können über mehrere Ebenen verschachtelt werden, um komplexe Bedingungen zu erstellen. Sie können sie auch in getrennte Regeln aufteilen, um sie übersichtlich zu halten. Weitere Erläuterungen und Anwendungsbeispiele finden Sie unter [Beispiele für die `where`-Syntax](#where_syntax_examples).

- `"eagerness"` {{experimental_inline}}
  - : Eine Zeichenfolge, die dem Browser einen Hinweis gibt, wie früh er Linkziele vorab abrufen oder rendern soll, um Leistungsvorteile gegen den Ressourcenaufwand abzuwägen. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor geht davon aus, dass dem Link sehr wahrscheinlich gefolgt wird und/oder das Abrufen des Dokuments längere Zeit dauern kann. Das vorzeitige Abrufen oder Rendern sollte so bald wie möglich beginnen; zu berücksichtigen sind lediglich Faktoren wie Nutzereinstellungen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte möglichst früh eine große Anzahl möglicher Navigationen vorab abrufen oder rendern lassen. Dies sollte bereits bei geringfügigen Anzeichen beginnen, dass einem Link gefolgt werden könnte. Beispielsweise könnte der Nutzer den Mauszeiger in Richtung des Links bewegen, kurz mit dem Mauszeiger darüber verweilen, ihn fokussieren oder das Scrollen anhalten, während der Link gut sichtbar ist.
    - `"moderate"`
      - : Der Autor möchte einen Mittelweg zwischen `eager` und `conservative` wählen. Das vorzeitige Abrufen oder Rendern sollte beginnen, wenn es hinreichende Anzeichen dafür gibt, dass der Nutzer dem Link bald folgen wird. Beispielsweise könnte der Nutzer einen Link in den sichtbaren Bereich scrollen und den Mauszeiger eine Weile darüber halten oder ihn fokussieren.
    - `"conservative"`
      - : Der Autor möchte bei vergleichsweise geringem Ressourcenaufwand einen gewissen Vorteil durch spekulatives Laden erzielen. Das vorzeitige Abrufen oder Rendern sollte erst beginnen, wenn der Nutzer anfängt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht ausdrücklich angegeben ist, verwenden Listenregeln (`"urls"`) standardmäßig `immediate` und Dokumentregeln (`"where"`) standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken. Er kann daher einen Link auswählen, für den der Autor eine geringere Priorität angegeben hat als für einen anderen, wenn er diesen Link für die bessere Wahl hält.

- `"expects_no_vary_search"` {{experimental_inline}}
  - : Eine Zeichenfolge, die dem Browser einen Hinweis darauf gibt, welcher Wert des Headers {{httpheader("No-Vary-Search")}} in Antworten für Dokumente zu erwarten ist, für die vorzeitige Abruf- oder Renderanfragen gesendet werden. Der Browser kann damit im Voraus entscheiden, ob es sinnvoller ist, auf den Abschluss eines bereits laufenden Vorgangs zu warten oder beim Abgleich der Spekulationsregel eine neue Abrufanfrage zu starten. Weitere Erläuterungen zur Verwendung finden Sie im [Beispiel für `"expects_no_vary_search"`](#expects_no_vary_search_example).

- `"referrer_policy"` {{experimental_inline}}
  - : Eine Zeichenfolge, die eine bestimmte Referrer-Richtlinie für Anfragen an die in der Regel angegebenen URLs festlegt. Mögliche Werte finden Sie unter [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy). Damit kann die verweisende Seite speziell für die spekulative Anfrage eine strengere Richtlinie festlegen als diejenige, die bereits für die Seite gilt – sei es standardmäßig oder durch `Referrer-Policy`.

    > [!NOTE]
    > Für einen vorzeitigen Abruf über Website-Grenzen hinweg ist eine Referrer-Richtlinie erforderlich, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"`: also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine weniger strenge Richtlinie in den Spekulationsregeln überschreibt eine strengere Richtlinie der verweisenden Seite, sofern sie für den websiteübergreifenden Fall noch streng genug ist.

    > [!NOTE]
    > Bei Dokumentregeln wird die für den passenden Link angegebene Referrer-Richtlinie verwendet, beispielsweise über das Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy), sofern die Regel keine Richtlinie festlegt, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}
  - : Eine Zeichenfolge, die angibt, relativ wozu URLs abgeglichen werden sollen. Mögliche Werte sind:
    - `document`
      - : URLs sollen relativ zu dem Dokument abgeglichen werden, für das die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollen relativ zu der Datei abgeglichen werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Einstellung ist nur für Regeln relevant, die in einer externen Datei definiert und über den Header {{httpheader("Speculation-Rules")}} eingebunden werden. Wenn die Regeln direkt in dem Dokument angegeben sind, für das sie gelten (also in einem eingebetteten `<script>`-Element), macht sie keinen Unterschied.

- `"requires"` {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, die Fähigkeiten des Browsers bezeichnen, der die Regel verarbeitet. Diese Fähigkeiten müssen vorhanden sein, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorzeitige Abrufe schlagen in Browsern, die eine angegebene Anforderung nicht erfüllen können, automatisch fehl – selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (Nur für das vorzeitige Abrufen.) Gibt an, dass die Regel nur angewendet wird, wenn der User-Agent verhindern kann, dass die IP-Adresse des Clients für den Ursprungsserver sichtbar wird, falls eine ursprungsübergreifende Anfrage zum vorzeitigen Abrufen gesendet wird. Wie genau dies funktioniert, hängt von der Implementierung des Browsers ab. Zum Beispiel:
        - Die Implementierung von Chrome verbirgt die IP-Adresse mithilfe eines Proxys von Google. Daher funktioniert sie standardmäßig nur für von Google kontrollierte verweisende Seiten (da die Übermittlung der Ziel-URLs an Google in diesem Fall keine zusätzliche Preisgabe privater Informationen darstellt). Auf einer Website, die nicht Google gehört, werden Regeln mit dieser Anforderung nur für Nutzer angewendet, die „Enhanced preloading“ unter `chrome://settings/preloading` aktivieren.
        - Andere Chromium-basierte Browser müssen eigene Lösungen bereitstellen. Gründliche Tests in allen Zielbrowsern sind empfehlenswert.
        - Eine künftige Safari-Implementierung könnte möglicherweise eine Lösung ähnlich [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine künftige Firefox-Implementierung könnte auf dem Produkt [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) basieren.

- `"tag"` {{experimental_inline}}
  - : Eine Zeichenfolge zur Kennzeichnung einer Regel oder eines Regelsatzes. Sie wird bei allen von dieser Regel erfassten spekulativen Anfragen in den Anfrage-Header {{HTTPHeader("Sec-Speculation-Tags")}} aufgenommen.

- `"target_hint"` {{experimental_inline}}
  - : Eine Zeichenfolge, die angibt, wo die Seite die Aktivierung des vorab gerenderten Inhalts erwartet.
    Diese Direktive wird für Spekulationen zum vorzeitigen Abrufen nicht unterstützt.
    Zulässige Werte sind:
    - `"target_hint": "_blank"`
      - : Vorab gerenderten Inhalt auf einer neuen Seite öffnen.
    - `"target_hint": "_self"`
      - : Vorab gerenderten Inhalt auf der aktuellen Seite öffnen.
        Dies ist der Standardwert, wenn keiner angegeben wird.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie ausdrücklich in der Direktive [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) erlaubt werden, falls die Website diese Direktive verwendet. Dazu wird der Wert `"inline-speculation-rules"` zusammen mit einer Hash- oder Nonce-Quelle hinzugefügt.

## Beispiele

### Vorzeitiges Abrufen und Rendern im selben Regelsatz

Die grundlegenden Beispiele im Abschnitt „Beschreibung“ enthalten getrennte Spekulationsregeln für das vorzeitige Abrufen und Rendern. Beides lässt sich auch in einem einzigen Regelsatz definieren:

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
> Dieser Codeausschnitt zeigt ein Beispiel für eine Listenregel (`"urls"`) und eines für eine Dokumentregel (`"where"`).

### Mehrere Regelsätze

Eine einzelne HTML-Datei kann auch mehrere Regelsätze enthalten:

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

Ebenso können mehrere Regeln in einem einzigen Regelsatz enthalten sein:

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

Das folgende Beispiel prüft, ob Spekulationsregeln unterstützt werden, und fügt gegebenenfalls mithilfe von JavaScript dynamisch eine Regel zum vorzeitigen Rendern hinzu:

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

### Beispiele für die `where`-Syntax

Eine Regel, deren URLs aus dem Dokument stammen, enthält eine `"where"`-Eigenschaft. Deren Wert ist ein Objekt mit Kriterien, die bestimmen, welche Links im Dokument übereinstimmen. Das `"where"`-Objekt stellt damit eine Prüfung dar, die für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel auf ihn angewendet wird.

Die einfachste Variante gleicht ein einzelnes URL-Muster oder einen einzelnen CSS-Selektor ab:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch ein Array von Werten enthalten, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig abgeglichen werden können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalterzeichen (`*`) enthalten, sodass ein einzelner Wert mit mehreren URLs übereinstimmt. Das folgende Objekt könnte beispielsweise mit `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

Auch [Suchparameter (oder Query-Strings)](/de/docs/Web/API/URL/search) können mit `href_matches` berücksichtigt werden. Das folgende Objekt könnte beispielsweise mit allen URLs desselben Ursprungs übereinstimmen, die einen Suchparameter `category` enthalten (als ersten oder nachfolgenden Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung gesetzt wird. Das bedeutet: Ist die Bedingung erfüllt, wird die Spekulationsregel auf einen Link _nicht_ angewendet; ist sie _nicht_ erfüllt, wird sie angewendet. Im folgenden Beispiel gilt die Regel für alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, jedoch nicht für Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Mehrere `"where"`-Bedingungen mit `"and"` oder `"or"` kombinieren

Mehrere Bedingungen können innerhalb von `"and"`- oder `"or"`-Bedingungen kombiniert werden. Diese enthalten Arrays mit mehreren Bedingungen. Damit eine Spekulationsregel für einen Link gilt, müssen bei `"and"` alle und bei `"or"` mindestens eine der Bedingungen erfüllt sein. Mit `"and"` und `"or"` lassen sich Bedingungen über mehrere Ebenen verschachteln; eine festgelegte Grenze für die Verschachtelungstiefe gibt es nicht.

Sie können sich das `"where"`-Objekt wie eine `if`-Anweisung vorstellen. Demnach ist

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

gleichbedeutend mit

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Beispiel einer Spekulationsregel werden alle Seiten desselben Ursprungs für das vorzeitige Abrufen markiert, außer den als problematisch bekannten: der Seite `/logout` und allen Links mit der Klasse `.no-prerender`:

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
> Das obige `where`-Muster umfasst keine websiteübergreifenden Links. Diese werden für das vorzeitige Abrufen unterstützt (sofern der Nutzer keine Cookies für die Zielwebsite gesetzt hat, um Tracking zu verhindern), nicht aber für das vorzeitige Rendern.

### Beispiel für `"relative_to"`

Bei Regelsätzen, die extern abgerufen werden (also über den Antwort-Header {{httpheader("Speculation-Rules")}}), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der externen Textdatei aufgelöst. Damit URLs in einer Listenregel relativ zur Basis-URL des Dokuments aufgelöst werden, verwenden Sie `"relative_to"` wie folgt:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Bei Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` kombiniert werden. Dann wird die Basis-URL des Dokuments nur für die Muster in dieser bestimmten Bedingung verwendet:

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

`relative_to` ist vor allem dann relevant, wenn die JSON-Datei mit den Spekulationsregeln einen anderen Ursprung hat als das Dokument, auf das die Regeln angewendet werden sollen:

1. Befindet sich das Dokument unter `https://example.com/some/subpage.html` und die Regeldatei unter `https://example.com/resources/rules.json`, entspricht `/home` immer `https://example.com/home` – unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Befindet sich das Dokument dagegen unter `https://example.com/some/subpage.html` und die Regeldatei unter `https://other.example/resources/rules.json` (beispielsweise auf dem Ursprung einer Drittanbieter-Ressource oder einer Ressource ohne Cookies), gilt:
   - Mit `"relative_to": "document"` entspricht `/home` der URL `https://example.com/home`.
   - Mit `"relative_to": "ruleset"` entspricht `/home` der URL `https://other.example/home`.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer möglicher, aber seltenerer Anwendungsfall liegt vor, wenn URLs in der Form `home` statt `/home` angegeben werden. Befindet sich das Dokument unter `https://example.com/some/subpage.html` und die Regeldatei unter `https://example.com/resources/rules.json`, gilt:
   - Mit `"relative_to": "document"` entspricht `home` der URL `https://example.com/some/home`.
   - Mit `"relative_to": "ruleset"` entspricht `home` der URL `https://example.com/resources/home`.

### Beispiel für `"expects_no_vary_search"`

Betrachten wir eine Übersichtsseite eines Nutzerverzeichnisses, `/users`, der ein Parameter `id` hinzugefügt wird, um Informationen zu einem bestimmten Nutzer aufzurufen, beispielsweise `/users?id=345`. Ob diese URL für das Caching als identisch gelten sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn der Parameter dazu führt, dass eine vollständig neue Seite mit den Informationen zum angegebenen Nutzer geladen wird, sollte die URL separat zwischengespeichert werden.
2. Wenn der Parameter dazu führt, dass der angegebene Nutzer auf derselben Seite hervorgehoben und möglicherweise ein ausklappbares Feld mit seinen Daten angezeigt wird, sollte die URL für das Caching als identisch gelten. Dies kann das Laden der Nutzerseiten beschleunigen und mit einem {{httpheader("No-Vary-Search")}}-Header mit dem Wert `params=("id")` erreicht werden.

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

Was geschieht in diesem Fall, wenn der Nutzer eine Navigation zu `/users?id=345` beginnt, bevor die Header für das vorzeitige Abrufen von `/users` eingegangen sind? Zu diesem Zeitpunkt weiß der Browser noch nicht, ob ein `No-Vary-Search`-Wert gesetzt ist und wie dieser gegebenenfalls lautet. Wäre kein `No-Vary-Search`-Wert gesetzt und entspräche das Verhalten der Anwendung eher der obigen Option 1, wäre der vorzeitige Abruf nutzlos gewesen. Der Browser müsste die separate Seite `/users?id=345` von Grund auf abrufen.

Um dies zu vermeiden, können wir einen Hinweis darauf geben, welchen `No-Vary-Search`-Wert der Autor der Seite erwartet. Eine Spekulationsregel kann ein Feld `"expects_no_vary_search"` enthalten, dessen Wert eine Zeichenfolge mit dem erwarteten Header-Wert ist:

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

Damit wird angegeben, dass der Server voraussichtlich das unter Option 2 beschriebene Verhalten bereitstellt. Beginnt eine Navigation, während `/users` bereits vorzeitig abgerufen wird, weiß der Browser dadurch, dass er auf den Abschluss dieses Abrufs warten sollte, statt sofort einen weiteren Abruf von `/users?id=345` zu starten.

Je nach verwendetem Muster können auch Dokumentregeln mit `"expects_no_vary_search"` kombiniert werden. Im folgenden Fall beispielsweise:

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

Wenn der Mauszeiger über einem Link verweilt, beginnt der Browser, genau diesen Link vorzeitig abzurufen.

Verweilt der Nutzer vor Abschluss dieses Abrufs über einem anderen Link, teilt das `expects_no_vary_search`-Muster dem Browser mit, dass er den laufenden Abruf nicht abbrechen muss. In diesem Zusammenhang – und für das Caching – verweisen alle `/users`-URLs mit Werten für den URL-Parameter `id` praktisch auf dieselbe Seite.

> [!WARNING]
> Bei der Verwendung des vorzeitigen Renderns mit `No-Vary-Search` ist besondere Vorsicht geboten, da die Seite zunächst mit anderen URL-Parametern vorab gerendert werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, bei denen der Server dieselbe Ressource liefert, die der Client aber für verschiedene Zwecke nutzt (clientseitiges Rendering, UTM-Parameter zur Analyse usw.). Da das erste vorzeitige Rendern für andere URL-Parameter erfolgen kann, sollte Code, der von ihnen abhängt, erst nach der Aktivierung der vorab gerenderten Seite ausgeführt werden.

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
> Als [strukturiertes Feld](https://www.rfc-editor.org/info/rfc8941/) müssen die Parameter – wie oben gezeigt – Zeichenfolgen in Anführungszeichen sein, die durch Leerzeichen und nicht durch Kommas getrennt sind, auch wenn Entwickler eher an eine Trennung durch Kommas gewöhnt sind.

### Beispiel für `eagerness`

Der folgende Satz von Dokumentregeln zeigt, wie Sie mit `eagerness` Hinweise dazu geben können, wie früh der Browser die jeweils passenden Links vorab rendern soll.

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

- Alle im Dokument enthaltenen Links zur selben Website sollen zurückhaltend vorab gerendert werden (also wenn der Nutzer beginnt, sie zu aktivieren).
- Alle Produktlinks im Dokument (hier Links mit einer `class` von `.product-link`) sollen frühzeitig vorab gerendert werden (also sobald der Nutzer Anzeichen dafür zeigt, dass er zu ihnen navigieren möchte).

> [!NOTE]
> Bei Listenregeln sind die Auswirkungen der `eagerness`-Einstellungen weniger nützlich. Standardmäßig werden die URLs von Listenregeln sofort vorab abgerufen oder gerendert, sobald die Regeln verarbeitet wurden. Das entspricht dem vorgesehenen Zweck: Listenregeln dienen dazu, URLs mit hoher Priorität ausdrücklich aufzuführen, die möglichst bald verfügbar sein sollen. Aus diesem Grund hat `eager` in aktuellen Implementierungen dieselbe Wirkung wie `immediate`. Niedrigere `eagerness`-Werte dienen dazu, das vorzeitige Abrufen oder Rendern durch Interaktionen mit Links auszulösen. Um solche Links auf der Seite zu finden, werden Sie eher Dokumentregeln verwenden.

### Beispiel für `tag`

Ein `tag` kann auf oberster Ebene hinzugefügt werden, um den gesamten Regelsatz zu kennzeichnen:

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

### Beispiel für `target_hint`

Mit `target_hint` kann angegeben werden, in welchem Zielfenster passende vorab gerenderte Inhalte geöffnet werden:

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

Die obigen Regeln ermöglichen es, die folgenden Links für die jeweiligen Ziele korrekt vorab zu rendern:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Für Dokumentregeln (die `where` verwenden) ist es nicht erforderlich, da das Ziel anhand des Attributs `target` des Link-Elements `<a>` ermittelt werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Seiten in Chrome für sofortige Seitennavigation vorab rendern](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
