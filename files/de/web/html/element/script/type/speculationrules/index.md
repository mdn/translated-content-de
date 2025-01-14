---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: 8fcc8b5aae5d641223e3c644615b5c01b747cbe2
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type) Attributs des [`<script>` elements](/de/docs/Web/HTML/Element/script) zeigt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die bestimmt, welche Ressourcen vom Browser vorab abgerufen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, wobei die gleiche [unten angegebene JSON-Darstellung](#spekulationsregeln_json-darstellung) verwendet wird. Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">` Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Prefetch- und Prerender-Regeln:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf höchster Ebene, die jeweils eine Aktion darstellen, um Spekulationsregeln zu definieren. Derzeit werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenziell zukünftige Navigationen, deren zugehöriger Dokumenten-Response-Body heruntergeladen werden soll, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der vom Seitenreferenzierten Subressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenziell zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScript-Codes und sogar das Laden von Subressourcen und das Ausführen von Datenabrufen, die von JavaScript gestartet wurden. Wenn zu diesen Dokumenten navigiert wird, sind die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API), um vollständige Details zur effektiven Nutzung von Prefetch und Prerender zu erhalten.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Menge von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie definiert in {{htmlelement("a")}} und {{htmlelement("area")}} Elementen) basierend auf den durch einen `"where"`-Schlüssel beschriebenen Bedingungen übereinstimmen. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels impliziert, dass `"source": "document"` ist, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"`-Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels impliziert, dass `"source": "list"` ist, sodass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet wird. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur URL der externen Ressource (wenn extern abgerufen) analysiert. `"urls"` und `"where"` können nicht beide in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, anhand derer die Regel URLs im zugehörigen Dokument zuordnet. Effektiv stellt das `"where"`-Objekt einen Test dar, der auf jedem Link auf der Seite durchgeführt wird, um zu überprüfen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array mit mehreren URL-Muster-Strings, die der Standard-[URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, werden die Regel angewendet.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu etwas übereinstimmt. Dies funktioniert genau wie der [Regel-Ebene `"relative_to"`-Schlüssel](#relative_to_2), beeinflusst jedoch nur eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array mit mehreren CSS-Selektoren. Links im Dokument, die von diesen Selektoren getroffen werden, werden die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, falls sie zutrifft, nicht die Regel darauf angewendet wird. Alle Links, die nicht die Bedingung erfüllen, werden die Regel angewendet.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie aufteilen in separate Regeln, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für weitere Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Link-Ziele vorab abrufen/vorrendern sollte, um die Leistungsverbesserungen gegen die Ressourcenkosten abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument möglicherweise lange Zeit zum Abrufen benötigt. Vorabrufen/Vorrendern sollte so schnell wie möglich beginnen, vorbehaltlich nur Überlegungen wie Benutzereinstellungen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen vorab abrufen/vorrendern, so früh wie möglich. Vorabrufen/Vorrendern sollte bei jedem geringfügigen Hinweis beginnen, dass ein Link möglicherweise gefolgt werden könnte. Beispielsweise könnte der Benutzer den Mauszeiger in Richtung des Links bewegen, diesen kurzzeitig schweben/fokussieren oder das Scrollen mit dem Link an einer prominenten Stelle pausieren.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Vorabrufen/Vorrendern sollte starten, wenn eine vernünftige Annahme besteht, dass der Benutzer in naher Zukunft einem Link folgen wird. Beispielsweise könnte der Benutzer einen Link in den Ansichtsbereich scrollen und ihn für eine Weile schweben/fokussieren.
    - `"conservative"`
      - : Der Autor möchte einige Vorteile des spekulativen Ladens mit einem relativ geringen Ressourcenaufwand nutzen. Vorabrufen/Vorrendern sollte erst beginnen, wenn der Benutzer anfängt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht ausdrücklich angegeben ist, verwenden Listenregeln (`"urls"`) standardmäßig `immediate` und Dokumentregeln (`"where"`) standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig markiert hat als einen anderen, wenn der weniger eifrige Kandidat als die bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen Wert der {{httpheader("No-Vary-Search")}} Header auf Antworten für Dokumente gesetzt werden soll, für die es Vorabrufen/Vorrendern-Anfragen erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein bestehendes Vorabrufen/Vorrendern zu warten oder eine neue Abruffrage zu starten, wenn die Spekulationsregel zutrifft. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für weitere Erklärungen zur Verwendung.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Richtlinie darstellt, die verwendet wird, wenn die angegebenen URLs in der Regel angefordert werden - siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) für mögliche Werte. Zweck dieser ist es, es der verweisenden Seite zu ermöglichen, eine strengere Richtlinie speziell für die spekulative Anfrage festzulegen als die bereits gesetzte Richtlinie der Seite (entweder standardmäßig oder durch Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein cross-site prefetch erfordert eine Referrer-Richtlinie, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, oder `"no-referrer"`. Eine laschere Politik, die in den Spekulationsregeln festgelegt ist, wird eine strengere Politik auf der verweisenden Seite überschreiben, solange sie immer noch ausreichend streng für den cross-site Fall ist.

    > [!NOTE]
    > Im Falle von Dokumentregeln wird die angegebene Referrer-Richtlinie des übereinstimmenden Links (z. B. durch Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) Attributs) verwendet, es sei denn, die Regel gibt eine Richtlinie an, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass Links, die nach URL übereinstimmen, relativ dazu übereinstimmen. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument übereinstimmen, auf dem die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei übereinstimmen, in der die Regeln spezifiziert sind. Dies ist der Standardwert.

    Diese Einstellung des Schlüssels ist nur relevant für Regeln, die in einer externen Datei definiert sind (festgelegt mit dem {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments angegeben werden, für das sie festgelegt werden (d. h. in einem inline `<script>` Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, das die Fähigkeiten des Browsers darstellt, der die Regel analysiert, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorabrufe werden in Browsern, die eine angegebene Anforderung nicht erfüllen können, automatisch fehlschlagen, auch wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur für prefetch) Gibt an, dass die Regel nur dann zutrifft, wenn der Benutzer-Agent die IP-Adresse des Clients daran hindern kann, dem ursprünglichen Server sichtbar zu sein, wenn eine cross-origin Vorabrufen-Anfrage gestellt wird. Wie dies genau funktioniert, hängt von browser-spezifischen Implementierungsdetails ab. Zum Beispiel:
        - Chrome's Implementierung verbirgt die IP-Adresse mit einem Google-eigenen Proxy, daher funktioniert sie standardmäßig nur für von Google kontrollierte Referrer (da in diesem Fall das Senden der URLs des Ziels zu Google kein zusätzlicher Datenschutzleck ist). Wenn es auf einer nicht von Google kontrollierten Seite verwendet wird, werden Regeln, die dies beinhalten, nur für Benutzer zutreffen, die "Verbessertes Vorababrufen" in `chrome://settings/preloading` einschalten.
        - Andere Chromium-basierte Browser müssen ihre eigenen Lösungen bereitstellen. Gründliche Tests in allen Ziel-Browsern werden empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas in der Richtung von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte möglicherweise auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt basieren.

> [!NOTE]
> Da Spekulationsregeln ein `<script>` Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) Direktive erlaubt sein, wenn die Seite diese enthält. Dies wird erreicht, indem der Wert `"inline-speculation-rules"` zusammen mit einer hash- oder nonce-Quelle hinzugefügt wird.

## Beispiele

### Prefetch und Prerender im selben Satz von Regeln

Die im Beschreibungsteil gezeigten grundlegenden Beispiele enthielten separate Spekulationsregeln, die sowohl für Prefetch als auch für Prerender definiert wurden. Es ist möglich, beides in einem einzigen Satz von Regeln zu definieren:

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
> Dieser Code Ausschnitt bietet ein Beispiel sowohl für eine Listenregel (`"urls"`) als auch für eine Dokumentregel (`"where"`).

### Mehrere Regelsätze

Es ist auch zulässig, mehrere Sätze von Regeln in einer einzigen HTML-Datei einzuschließen:

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

### Dynamische Regelinsertion

Unten ist ein Beispiel, das die Spekulationsregeln erkennt und, wenn unterstützt, eine Prerender-Spekulationsregel dynamisch über JavaScript hinzufügt:

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

Sie können dies in Aktion auf dieser [Prerender-Demos](https://prerender-demos.glitch.me/) Seite sehen.

### `where` Syntax Beispiele

Eine dokumentenbasierte Regel enthält eine `"where"` Eigenschaft, die ein Objekt ist, das Kriterien enthält, die bestimmen, welche Links im Dokument getroffen werden. Effektiv stellt das `"where"`-Objekt einen Test dar, der auf jedem Link auf der Seite ausgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die grundlegendste Version wird ein einzelnes URL-Muster oder CSS-Selektor treffen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, so dass mehrere URL-Muster oder CSS-Selektoren gleichzeitig getroffen werden können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalter (`*`) Zeichen enthalten, sodass ein einzelner Wert mehrere URLs treffen kann. Zum Beispiel könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats`, usw. treffen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Zum Beispiel könnte das unten stehende Objekt alle gleich-stämmigen URLs mit einem `category` Suchparameter treffen (als erster oder weiterer Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie innerhalb einer `"not"` Bedingung platziert wird — dies bedeutet, dass, wenn sie getroffen wird, ein Link _nicht_ die Spekulationsregel angewendet bekommt, aber wenn _nicht_ getroffen, wird sie _angewendet_. Das folgende Beispiel wird alle Links, die nicht das URL-Muster `/logout` treffen, haben die Regel darauf angewendet, aber nicht Links, die `/logout` treffen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"` Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden — diese nehmen den Wert von Arrays, die mehrere Bedingungen enthalten, von denen alle oder jede (beziehungsweise) getroffen werden müssen, damit die Spekulationsregeln auf einen Link zutreffen. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt kein festgelegtes Limit für die erlaubten Verschachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als Äquivalent zu einer `if`-Anweisung zu betrachten. Daher

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

entspricht

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel sind alle gleich-stämmigen Seiten zum Vorabrufen markiert, außer denen, die als problematisch bekannt sind — die `/logout` Seite und alle Links, die mit einer Klasse von `.no-prerender` versehen sind:

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
> Das `where`-Muster oben schließt Links zu fremden Seiten aus, die für das Vorabrufen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um ein Verfolgen zu verhindern), jedoch nicht für das Vorrendern.

### `"relative_to"` Beispiel

Für Regelsätze, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}}) Antwortheader, werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` so verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet:

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

Im obigen Beispiel wird nur das erste `"href_matches"` relativ zur Basis-URL des Dokuments übereinstimmend.

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei auf einem anderen Ursprungsort als das Dokument, auf das Sie sie anwenden möchten, ist:

1. Befindet sich das Dokument an `https://example.com/some/subpage.html` und die Regeln bei `https://example.com/resources/rules.json`, entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Befindet sich das Dokument jedoch an `https://example.com/some/subpage.html` und die Regeln an `https://other.example/resources/rules.json` (zum Beispiel auf einem Drittanbieter- oder cookielose Ressource-Ursprungsort), dann:

   - `"relative_to": "document"` bewirkt, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` bewirkt, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer möglicher (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Befindet sich das Dokument an `https://example.com/some/subpage.html` und die Regeln bei `https://example.com/resources/rules.json`, dann:

   - `"relative_to": "document"` bewirkt, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` bewirkt, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage `/users`, die einen `id` Parameter hinzugefügt hat, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine vollständig neue Seite mit den Informationen des angegebenen Benutzers zu laden, sollte die URL separat gecacht werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Pullout-Panel mit ihren Daten anzuzeigen, sollte die URL für Caching-Zwecke als identisch betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch einen {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` beginnt, während die Header für das Prefetch von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, was der `No-Vary-Search` Wert sein wird, falls überhaupt. Wenn kein `No-Vary-Search` Wert gesetzt wurde und das Anwendungsverhalten eher wie in Option 1 oben beschrieben war, wäre das Prefetch verschwendet und der Browser müsste die separate `/users?id=345` Seite von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search` Wert sein soll. Eine Spekulationsregel kann ein `"expects_no_vary_search"` Feld haben, das eine String-Darstellung des erwarteten Header-Werts enthält:

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

Dies zeigt an, dass Option 2 oben beschrieben ist, was der Server erwartet, zu produzieren. Wenn eine Navigation beginnt, während ein Prefetch von `/users` im Gange ist, informiert dies den Browser, dass es angebracht ist, auf das Prefetch zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig vom benutzten Muster. Zum Beispiel im Fall von:

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

Wenn ein Link überfahren wird, beginnt der Browser, diesen speziellen Link vorab abzurufen.

Wenn der Benutzer über einen anderen Link fährt, bevor das Prefetch abgeschlossen ist, teilt das `expects_no_vary_search` Muster dem Browser mit, dass es nicht notwendig ist, das aktuelle Prefetch abzubrechen, da alle `/users` URLs mit `id` URL-Parameterwerten im Wesentlichen für diesen Kontext (und für Caching-Zwecke) zu derselben Seite führen.

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn das Vorrendern mit `No-Vary-Search` verwendet wird, da die Seite anfänglich mit verschiedenen URL-Parametern vorgerendert werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Server-Ressource liefern, die jedoch aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analytik-Messungen usw.). Da das anfängliche Prerender für unterschiedliche URL-Parameter sein kann, sollte jeder Code, der von ihnen abhängt, nur nach der Prerender-Aktivierung ausgeführt werden.

### `eagerness` Beispiel

Das folgende Set von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um zu signalisieren, mit welcher Eifersucht der Browser jede übereinstimmende Gruppe von Links vorrendern sollte.

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

Hier signalisieren wir, dass:

- Alle gleich-stämmigen Links, die im Dokument enthalten sind, konservativ vorrendern sollten (d. h. wenn der Benutzer beginnt, sie zu aktivieren).
- Beliebige Produkt-Links (in diesem Fall solche mit einer Klasse von `.product-link`) im Dokument sollten eifrig vorrendern (d. h. wenn der Benutzer irgendeine Art von Bewegung in Richtung Navigation zu ihnen macht).

> [!NOTE]
> Die Auswirkungen von Eifersichtseinstellungen sind für Listenregeln weniger nützlich. Standardmäßig werden URLs von Listenregeln sofort vorab abgerufen/vorrendern, sobald die Regeln analysiert werden, was zu erwarten ist — sie sind dazu gedacht, hochpriorisierte URLs explizit aufzulisten, die Sie so schnell wie möglich zur Verfügung stellen möchten. Aus diesem Grund hat `eager` die gleiche Wirkung wie `immediate` in derzeitigen Implementierungen. Niedrigere Eifersichtseinstellungen sind für das Vorabrufen/Vorrendern, wenn Links interagiert werden, und dafür werden Sie vermutlich Dokumentregeln verwenden, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
