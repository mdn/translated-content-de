---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) zeigt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die festlegt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, auf die durch den {{httpheader("Speculation-Rules")}}-HTTP-Header verwiesen wird, unter Verwendung derselben [unten bereitgestellten JSON-Darstellung](#spekulationsregeln_json-darstellung). Die Angabe eines HTTP-Headers ist nützlich, wenn Entwickler nicht in der Lage sind, das Dokument selbst direkt zu ändern.

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
  - : Die Spekulationsregeln-Definition ist kein gültiges JSON-Objekt.

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

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, von denen jedes eine Aktion darstellt, für die Spekulationsregeln definiert werden sollen. Derzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehöriger Dokumentantwortkörper heruntergeladen werden sollte, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der untergeordneten Ressourcen, auf die von der Seite verwiesen wird, heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollten. Dies umfasst das Laden aller untergeordneten Ressourcen, das Ausführen aller JavaScripts sowie das Laden von untergeordneten Ressourcen und Ausführen von Datenabfragen, die von JavaScript gestartet werden. Wenn zu diesen Dokumenten navigiert wird, sind die Navigationen sofort, was zu großen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Nutzung von Prefetch und Prerender.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Menge von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein Zeichenfolgenwert, der die Quelle der URLs angibt, für die die Regel gilt. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eines der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert) auf der Grundlage der durch einen `"where"`-Schlüssel beschriebenen Bedingungen übereinstimmen. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels `"source": "document"` impliziert, sodass dies optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"`-Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels `"source": "list"` impliziert, sodass dies optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Zeichenfolgen, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments geparst (wenn inline in einem Dokument) oder relativ zur externen Ressourcen-URL (wenn extern abgerufen). `"urls"` und `"where"` können nicht beide in derselben Regel gesetzt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, unter denen die Regel auf URLs im zugehörigen Dokument angewendet wird. Effektiv stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Eine Zeichenfolgen-URL-Vorlage oder ein Array, das mehrere URL-Vorlagen-Zeichenfolgen enthält, die der Standard- [URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit der Vorlage(n) übereinstimmen, erhalten die Regel angewendet.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu einem bestimmten Punkt übereinstimmt. Dies funktioniert genau wie der auf der Regel-Ebene befindliche `"relative_to"`-Schlüssel, außer dass er nur eine einzige `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Eine Zeichenfolge, die einen [CSS-Selector](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selectoren enthält. Links im Dokument, die durch diese Selectoren übereinstimmen, haben die Regel angewendet.
    - `"and"`
      - : Ein Array, das eines oder mehrere Objekte, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, enthält, die alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie übereinstimmt, die Regel nicht auf sie angewendet wird. Alle Links, die nicht mit der Bedingung übereinstimmen, haben die Regel angewendet.
    - `"or"`
      - : Ein Array, das eines oder mehrere Objekte, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, enthält, von denen jede übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können in mehrere Ebenen geschachtelt werden, um komplexe Bedingungen zu schaffen, oder Sie können sich entscheiden, sie in separate Regeln aufzuteilen, um sie einfach zu halten. Siehe [Beispiele für `where`-Syntax](#where_syntax_examples) für mehr Erklärung und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Eine Zeichenfolge, die dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorab laden/vorrendern sollte, um Leistungsvorteile gegen den Ressourcenaufwand auszugleichen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument kann erhebliche Zeit zum Abrufen benötigen. Das Vorabladen/vorrendern sollte so bald wie möglich beginnen, nur unter Berücksichtigung von Nutzerpräferenzen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte viele Navigationen so früh wie möglich vorabladen/vorrendern. Das Vorabladen/vorrendern sollte bei jedem geringen Hinweis darauf beginnen, dass ein Link gefolgt werden könnte. Beispielsweise könnte der Benutzer den Mauszeiger in Richtung des Links bewegen, ihn für einen Moment schweben/fokussieren oder die Bildlaufleiste mit dem Link an einer prominenten Stelle anhalten.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Das Vorabladen/vorrendern sollte beginnen, wenn es einen vernünftigen Hinweis darauf gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Beispielsweise könnte der Benutzer einen Link in den Ansichtsbereich scrollen und ihn für einige Zeit schweben/fokussieren.
    - `"conservative"`
      - : Der Autor möchte von spekulativem Laden mit relativ geringem Ressourceneinsatz profitieren. Das Vorabladen/vorrendern sollte erst beginnen, wenn der Benutzer anfängt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, gilt für Listen (`"urls"`) Regeln standardmäßig `immediate` und für Dokument (`"where"`) Regeln standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, für den der Autor weniger Dringlichkeit signalisiert hat als ein anderer, wenn der weniger dringende Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein Zeichenfolgenwert, der dem Browser einen Hinweis darauf gibt, welchen {{httpheader("No-Vary-Search")}}-Headerwert er auf Antworten setzt, für die Dokumente, die er Anfragen zum Vorabladen/vorrendern erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen bestehenden Vorabladen/vorrendern-Vorgang zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [Beispiel für `"expects_no_vary_search"`](#expects_no_vary_search_example) für mehr Erklärung, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}

  - : Eine Zeichenfolge, die eine spezifische Referrer-Richtlinie darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet wird — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon besteht darin, der weiterleitenden Seite zu ermöglichen, eine strengere Richtlinie speziell für die spekulative Anfrage festzulegen als die Richtlinie, die die Seite bereits konfiguriert hat (entweder standardmäßig oder durch Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein Cross-Site-Vorabladen erfordert eine Referrer-Richtlinie, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, oder `"no-referrer"`. Eine laxe Richtlinie, die in den Spekulationsregeln festgelegt wird, ersetzt eine strengere Richtlinie, die auf der weisenden Seite festgelegt ist, solange sie für den Cross-Site-Fall noch ausreichend streng ist.

    > [!NOTE]
    > Im Falle von Dokumentregeln wird die im übereinstimmenden Link angegebene Referrer-Richtlinie (z. B. unter Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-Attributs) verwendet, es sei denn, die Regel spezifiziert eine Richtlinie, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein Zeichenfolgenwert, der angibt, wo Sie möchten, dass durch URL übereinstimmende Links relativ abgeglichen werden. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument abgeglichen werden, für das die Spekulationsregeln gesetzt werden.
    - `ruleset`
      - : URLs sollten relativ zur Datei abgeglichen werden, in der die Regeln spezifiziert sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (festgelegt über den {{httpheader("Speculation-Rules")}}-Header). Wenn Regeln innerhalb desselben Dokuments angegeben werden, für das sie gesetzt werden (d.h. in einem inline `<script>` Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Zeichenfolgen, die Fähigkeiten des Browsers darstellen, der die Regel analysiert und die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorabladen schlagen automatisch fehl in Browsern, die eine angegebene Anforderung nicht erfüllen können, auch wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur prefatch) Gibt an, dass die Regel nur übereinstimmt, wenn der Benutzeragent die Anzeige der Client-IP-Adresse gegenüber dem Ursprungsserver verhindern kann, wenn eine Cross-Origin-Vorabladungsanfrage gestellt wird. Wie genau das funktioniert, hängt von den spezifischen Implementierungen des Browsers ab. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse unter Verwendung eines von Google betriebenen Proxys, daher funktioniert es standardmäßig nur für Google-kontrollierte Referrer (da in diesem Fall das Senden der URLs des Ziels an Google keine zusätzliche Datenschutzverletzung ist). Bei Verwendung auf einer nicht von Google betriebenen Site, stimmen Regeln, die dies enthalten, nur für Benutzer überein, die `Erweitertes Vorladen` unter `chrome://settings/preloading` aktivieren.
        - Andere Chromium-basierte Browser müssen ihre eigenen Lösungen bieten. Eine gründliche Überprüfung in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas entlang der Linien von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte möglicherweise etwas basierend auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt verwenden.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie ausdrücklich in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Richtlinie zugelassen werden, wenn die Site diese einschließt. Dies erfolgt durch Hinzufügen des `"inline-speculation-rules"`-Werts zusammen mit einem Hash- oder Nonce-Quelle.

## Beispiele

### Prefetch und Prerender in derselben Regelsatz

Die Grundbeispiele, die im Beschreibungsteil gezeigt wurden, enthielten separate Spekulationsregeln für Prefetch und Prerender. Es ist möglich, beide in einem einzigen Regelsatz zu definieren:

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
> Dieses Codebeispiel bietet eine Liste (`"urls"`) und eine Dokument (`"where"`) Regel Beispiel.

### Mehrere Regelsätze

Es ist auch zulässig, mehrere Regelsätze in einer einzigen HTML-Datei einzufügen:

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

Und mehrere Regeln in einem einzigen Ergebnissatz:

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

Im Folgenden wird ein Beispiel gezeigt, das Spekulationsregeln erkennt und, falls unterstützt, dynamisch eine Prerender-Spekulationsregel über JavaScript hinzufügt:

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

### `where`-Syntax Beispiele

Eine dokumentenbasierte Regel enthält eine `"where"`-Eigenschaft, die ein Objekt mit Kriterien enthält, das definiert, welche Links im Dokument übereinstimmen. Effektiv stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird eine einzelne URL-Vorlage oder CSS-Selector abgleichen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, sodass mehrere URL-Vorlagen oder CSS-Selectoren gleichzeitig übereinstimmen können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Vorlagen und Selectoren können auch Platzhalter (`*`) enthalten, sodass ein einzelner Wert mit mehreren URLs übereinstimmen kann. Beispielsweise könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Beispielsweise könnte das untenstehende Objekt alle Same-Origin-URLs mit einem `category`-Suchparameter (als erster oder nachfolgender Parameter) übereinstimmen:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung gesetzt wird — das bedeutet, dass, wenn übereinstimmt, ein Link die Spekulationsregel nicht darauf angewendet wird, aber wenn nicht übereinstimmt, wird sie angewendet. Das folgende Beispiel wird bei allen Links, die die URL-Vorlage `/logout` nicht übereinstimmen, die Regel darauf angewendet, aber nicht bei Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden — diese nehmen den Wert von Arrays auf, die mehrere Bedingungen enthalten, alle oder jede (jeweils) von denen übereinstimmen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Mithilfe von `"and"` oder `"or"` können Bedingungen in mehreren Ebenen geschachtelt werden — es gibt keine festgelegte Grenze für die zulässigen Verschachtelungsebenen.

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

Im folgenden vollständigen Spekulationsregel-Beispiel sind alle gleich-originseiten für das Vorabladen markiert, außer solche, die als problematisch bekannt sind — die `/logout` Seite und Links, die mit einer `.no-prerender` Klasse versehen sind:

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
> Das `where`-Muster oben schließt Cross-Site-Links nicht ein, die für das Vorabladen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielsite gesetzt, um Verfolgung zu verhindern), sie aber nicht für das Vorabrendern.

### Beispiel für `"relative_to"`

Für Regelsätze, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Header), werden URLs in Listenregeln und URL-Vorlagen in Dokumentregeln standardmäßig relativ zur URL der enthaltenden externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` folgendermaßen verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` kombiniert werden, und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei auf einem anderen Ursprung als das Dokument, auf das sie angewendet werden soll, liegt:

1. Wenn das Dokument unter `https://example.com/some/subpage.html` liegt und die Regeln unter `https://example.com/resources/rules.json` sind, dann entspricht `/home` immer `https://example.com/home` unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn jedoch das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` sind (zum Beispiel auf einem Drittanbieter- oder cookieslosen Ressourcenursprung), dann:

   - `"relative_to": "document"` verursacht, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` verursacht, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` statt `\home` spezifiziert sind. Wenn das Dokument unter `https://example.com/some/subpage.html` liegt und die Regeln unter `https://example.com/resources/rules.json` sind, dann:

   - `"relative_to": "document"` würde `home` `https://example.com/some/home` entsprechen lassen.
   - `"relative_to": "ruleset"` würde `home` `https://example.com/resources/home` entsprechen lassen.

### Beispiel für `"expects_no_vary_search"`

Betrachten Sie den Fall einer Benutzerverzeichnisseite `/users`, die einen `id`-Parameter hat, der hinzugefügt wird, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL als identisch für Cache-Zwecke betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die Informationen für den angegebenen Benutzer enthält, dann sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Pullout-Panel anzuzeigen, das ihre Daten anzeigt, dann sollte die URL für Cache-Zwecke als gleich angesehen werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch eine {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, wenn die Header für das Vorabladen von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, was der `No-Vary-Search`-Wert sein wird, falls überhaupt einer. Wenn es keinen `No-Vary-Search`-Wert gab und das Anwendungsverhalten eher wie Option 1 oben war, wäre das Vorabladen verschwendet und der Browser müsste die separate `/users?id=345`-Seite von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search`-Wert sein wird. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine Zeichenfolgenrepräsentation des erwarteten Headerwerts enthält:

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

Dies zeigt an, dass Option 2, wie oben beschrieben, das ist, was der Server voraussichtlich produziert. Wenn eine Navigation beginnt, während ein laufender Vorabladen von `/users` existiert, informiert dies den Browser, dass es angemessen ist, auf das Vorabladen zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig vom verwendeten Muster. Zum Beispiel im Fall von:

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

Wenn ein Link gehortet wird, wird der Browser sofort damit beginnen, diesen spezifischen Link vorabzuladen.

Wenn der Benutzer einen anderen Link hortet, bevor das Vorabladen abgeschlossen ist, zeigt das `expects_no_vary_search`-Muster dem Browser, dass es nicht notwendig ist, das aktuelle Vorabladen abzubrechen, weil alle `/users` URLs mit `id`-Parameterwerten in diesem Kontext im Wesentlichen auf dieselbe Seite verweisen (und für Cachezwecke).

> [!WARNING]
> Zusätzliche Sorgfalt muss beim Verwenden von Prerender mit `No-Vary-Search` beachtet werden, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die das gleiche Ressource vom Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analytik-Messung usw.). Da das erste Prerender möglicherweise für unterschiedliche URL-Parameter erfolgt, sollte jeglicher Code, der abhängig von ihnen ist, nur nach der Prerender-Aktivierung ausgeführt werden.

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
> Als ein [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941), sollten die Parameter leerzeichen-getrennte, zitierte Zeichenfolgen sein — wie oben gezeigt — und nicht durch Kommas getrennt, was Entwicklern möglicherweise vertrauter ist.

### Beispiel für `eagerness`

Der folgende Satz von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um zu suggerieren, wie eifrig der Browser jeden übereinstimmenden Satz von Links vorladen/prerendern sollte.

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

Hierhin weisen wir darauf hin, dass:

- Alle gleichen Seitenlinks im Dokument sollten konservativ prerendert werden (d.h. wenn der Benutzer anfängt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall, die mit einer `class` von `.product-link`) im Dokument sollten eifrig prerendert werden (d.h. wenn der Benutzer irgendeine Art von Bewegung macht, um zu ihnen zu navigieren).

> [!NOTE]
> Die Auswirkungen der Eagerness-Einstellungen sind weniger nützlich für Listenregeln. Standardmäßig werden die in Listenregeln angegebenen URLs sofort vorladen/geprerendert, sobald die Regeln geparst sind, was Sie erwarten würden — sie sind vorgesehen für das explizite Auflisten von Hochprioritäts-URLs, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` in aktuellen Implementierungen die gleiche Wirkung wie `immediate`. Niedrigere Dringlichkeitseinstellungen sind für das Vorladen/Prerendering bei Interaktion mit Links gedacht, und dafür werden Sie eher Dokumentregeln verwenden, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitenwechsel](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
