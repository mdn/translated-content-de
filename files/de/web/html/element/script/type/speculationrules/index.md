---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorab gerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die über den {{httpheader("Speculation-Rules")}}-HTTP-Header referenziert werden, unter Verwendung der gleichen [JSON-Darstellung, die unten angegeben ist](#json-darstellung_der_spekulationsregeln). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler nicht in der Lage sind, das Dokument selbst direkt zu ändern.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen getrennte Pre-Fetching- und Prerendering-Regeln:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, von denen jedes eine Aktion darstellt, um Spekulationsregeln dafür zu definieren. Derzeit werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, bei denen der zugehörige Dokumentantwortkörper heruntergeladen werden sollte, was bei der Navigation zu diesen Dokumenten zu erheblichen Leistungsverbesserungen führt. Beachten Sie, dass keine der im Dokument referenzierten Unterressourcen heruntergeladen wird.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, die vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies umfasst das Laden aller Unterressourcen, das Ausführen aller JavaScripts und sogar das Laden von Unterressourcen und das Ausführen von Datenabfragen, die durch JavaScript gestartet werden. Wenn auf diese Dokumente zugegriffen wird, erfolgen die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für umfassende Details zur effektiven Nutzung von Prefetching und Prerendering.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzige Regel, die eine Menge von URLs und verwandte Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden Werte sein:

    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert) anhand der Bedingungen, die durch einen `"where"`-Schlüssel beschrieben werden, stammen. Beachten Sie, dass das Vorhandensein eines `"where"`-Schlüssels `"source": "document"` impliziert, sodass er optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"`-Schlüssel spezifiziert ist. Beachten Sie, dass das Vorhandensein eines `"urls"`-Schlüssels `"source": "list"` impliziert, sodass er optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur URL der externen Ressource (wenn extern abgerufen) geparst. `"urls"` und `"where"` können nicht in derselben Regel eingestellt sein.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, nach denen die Regel den im zugehörigen Dokument enthaltenen URLs entspricht. Effektiv stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht in derselben Regel eingestellt sein.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array mit mehreren URL-Muster-Strings, die der Standard-[URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs dem/den Muster(n) entsprechen, erhalten die Regel angewendet.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu etwas übereinstimmt. Dies funktioniert genauso wie der [Regel-übergreifende `"relative_to"`-Schlüssel](#relative_to_2), außer dass es nur eine einzige `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array mit mehreren CSS-Selektoren. Links im Dokument, die von diesen Selektoren übereinstimmen, haben die Regel angewendet.
    - `"and"`
      - : Ein Array mit einem oder mehreren Objekten, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, die alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, welche, falls sie übereinstimmt, _nicht_ die Regel angewendet hat. Alle Links, die dieser Bedingung _nicht_ entsprechen, _werden_ die Regel angewendet bekommen.
    - `"or"`
      - : Ein Array mit einem oder mehreren Objekten, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede für die Regel übereinstimmen kann, um auf sie angewendet zu werden.

    `"where"`-Bedingungen können in mehreren Ebenen verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sich entscheiden, sie in separate Regeln aufzuteilen, um sie einfach zu halten. Siehe [Beispiele für where](#where_syntax_examples) für weitere Erklärungen und mehrere Verwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis gibt, wie dringend er Link-Ziele vorladen/vorrendern sollte, um Leistungsverbesserungen gegen Ressourcenaufwendungen abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument erhebliche Zeit zum Abrufen benötigt. Prefetch/Prerender sollte schnellstmöglich beginnen, vorbehaltlich nur Überlegungen wie Benutzereinstellungen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen vorladen/vorrendern, so früh wie möglich. Prefetch/Prerender sollte bei jedem kleinen Hinweis beginnen, dass ein Link gefolgt werden könnte. Zum Beispiel könnte der Benutzer seine Maus auf den Link bewegen, diesen für einen Moment anvisieren/fokussieren oder das Scrollen bei einer prominenten Anzeige pausieren.
    - `"moderate"`
      - : Der Autor sucht ein Gleichgewicht zwischen `eager` und `conservative`. Prefetch/Prerender sollte beginnen, wenn ein vernünftiger Vorschlag besteht, dass der Benutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Benutzer einen Link in das Ansichtsfenster scrollen und ihn für einige Zeit anvisieren/fokussieren.
    - `"conservative"`
      - : Der Autor wünscht sich einen Vorteil durch spekulative Ladung mit einem relativ kleinen Tausch von Ressourcen. Prefetch/Prerender sollte erst beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben wird, sind List (`"urls"`) Regeln standardmäßig auf `immediate` und Dokument (`"where"`) Regeln auf `conservative` eingestellt. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er einen Link auswählen kann, den der Autor als weniger dringend als einen anderen angedeutet hat, wenn der weniger dringliche Kandidat als bessere Wahl erachtet wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen {{httpheader("No-Vary-Search")}}-Headerwert er auf Antworten für Dokumente erhält, die Vorab-Abruf-/Vorrender-Anfragen erhalten. Der Browser kann dies im Voraus nutzen, um festzustellen, ob es nützlicher ist, auf den Abschluss einer vorhandenen Vorab-Abruf-/Vorrender-Aktion zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Weitere Erklärungen zur Nutzung finden Sie im [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example).

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische "Referrer-Policy"-Zeichenfolge darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet wird — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck besteht darin, der verweisenden Seite zu ermöglichen, für die spekulative Anforderung speziell eine strengere Richtlinie festzulegen als die Richtlinie, die die Seite bereits gesetzt hat (entweder standardmäßig oder durch die Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Eine "cross-site"-Prefetch erfordert eine Referrer-Richtlinie, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, oder `"no-referrer"`. Eine weniger strenge Richtlinie, die in den Spekulationsregeln festgelegt ist, überschreibt eine strengere Richtlinie, die auf der verweisenden Seite festgelegt wurde, solange sie immer noch ausreichend strikt für den cross-site-Fall ist.

    > [!NOTE]
    > Im Fall von Dokumentregeln wird die angegebene Referrer-Richtlinie des übereinstimmenden Links (z.B. unter Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-Attributs) verwendet, es sei denn, die Regel gibt eine Richtlinie an, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie Links, die durch eine URL übereinstimmen, relativ zu etwas übereinstimmen lassen möchten. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zum Dokument verglichen werden, auf dem die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei verglichen werden, in der die Regeln festgelegt sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (festgelegt über den {{httpheader("Speculation-Rules")}}-Header). Wenn Regeln innerhalb desselben Dokuments spezifiziert sind, für das sie festgelegt werden (d.h. in einem Inline-`<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, das Fähigkeiten des Browsers darstellt, der die Regel analysiert, welche verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Prefetches werden automatisch in Browsern fehlschlagen, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur für prefetch) Gibt an, dass die Regel nur dann übereinstimmt, wenn der Benutzeragent die Anzeige der Client-IP-Adresse an den Ursprungsserver verhindern kann, wenn eine cross-origin Prefetch-Anforderung ausgegeben wird. Wie genau dies funktioniert, hängt von den spezifischen Implementierungsdetails des Browsers ab. Zum Beispiel:
        - Chromes Implementation verbirgt die IP-Adresse mit einem von Google betriebenen Proxy, daher funktioniert dies standardmäßig nur für von Google kontrollierte Referrer (da in diesem Fall das Senden der URLs des Ziels an Google kein zusätzliches Datenschutzproblem darstellt). Bei Verwendung auf einer nicht von Google kontrollierten Seite, werden Regeln, die dies enthalten, nur mit Benutzern abgeglichen, die "Enhanced preloading" in `chrome://settings/preloading` aktivieren.
        - Andere auf Chromium-basierte Browser müssen ihre eigenen Lösungen bereitstellen. Gründliche Tests in allen Zielbrowsern sind ratsam.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas Ähnliches wie [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte möglicherweise etwas auf der Basis des [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkts verwenden.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-[`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Richtlinie erlaubt werden, falls die Seite sie enthält. Dies erfolgt durch Hinzufügen des `"inline-speculation-rules"`-Wertes zusammen mit einer Hash- oder Nonce-Quelle.

## Beispiele

### Prefetching und Prerendering im selben Satz von Regeln

Die grundlegenden Beispiele im Beschreibungsabschnitt enthielten separate Spekulationsregeln, die für das Prefetching und das Prerendering definiert wurden. Es ist möglich, beide in einem einzigen Regelwerk festzulegen:

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
> Dieses Code-Snippet bietet ein Listenregel (`"urls"`) und ein Dokumentregel (`"where"`) Beispiel.

### Mehrere Regel-Sets

Es ist auch zulässig, mehrere Regel-Sets in einer einzigen HTML-Datei einzuschließen:

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

Und mehrere Regeln in einem einzigen Ergebnis-Set:

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

Unten ist ein Beispiel, das Spekulationsregeln erkennt und, falls unterstützt, dynamisch eine Prerender-Spekulationsregel über JavaScript hinzufügt:

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

Sie können dies in Aktion auf dieser [prerender demos](https://prerender-demos.glitch.me/) Seite sehen.

### Beispiele für `where`-Syntax

Eine aus einem Dokument stammende Regel enthält eine `"where"`-Eigenschaft, die ein Objekt mit Kriterien ist, die definieren, welche Links im Dokument übereinstimmen. Effektiv stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird.

Die grundlegendste Version wird ein einzelnes URL-Muster oder CSS-Selektor übereinstimmen:

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

URL-Muster und Selektoren können auch Wildcard (`*`)-Zeichen enthalten, sodass ein einziger Wert mehreren URLs entsprechen kann. Zum Beispiel kann das untenstehende Objekt `user/`, `user/settings`, `user/stats`, usw. entsprechen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragestrings)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Zum Beispiel könnte das untenstehende Objekt alle gleichseitigen URLs mit einem `category`-Suchparameter abgleichen (als erster oder nachfolgender Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Eine Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung eingefügt wird - das bedeutet, dass ein Link, wenn er übereinstimmt, _nicht_ die Regel angewendet bekommt. Links, die _nicht_ übereinstimmen, haben _die_ Regel angewendet. Das folgende Beispiel wird bewirken, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel angewendet bekommen, jedoch nicht Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"`-Bedingungen kombiniert werden - diese nehmen den Wert von Arrays mit mehreren Bedingungen an, von denen alle oder jede (jeweils) übereinstimmen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehrfach verschachtelt werden - es gibt kein festgelegtes Limit für die erlaubte Verschachtelungsebenen.

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

Im folgenden vollständigen Spekulationsregel-Beispiel werden alle gleichseitigen Seiten für das Prefetching markiert, mit Ausnahme der in Probleme bekannten - der `/logout`-Seite und aller Links mit einer Klasse von `.no-prerender`:

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
> Das oben angegebene `where`-Muster schließt keine cross-site-Links ein, die für das Prefetching unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielsite gesetzt, um das Tracking zu vermeiden) jedoch nicht für das Prerendering.

### `"relative_to"`-Beispiel

Für Regel-Sets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}}-Header), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` kombiniert werden und die Basis-URL des Dokuments wird nur für Muster in dieser bestimmten Bedingung verwendet:

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

Im obigen Beispiel wird nur das erste `"href_matches"` relativ zur Basis-URL des Dokuments verglichen.

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln-JSON-Datei auf einem anderen Ursprung als das Dokument liegt, auf das sie angewendet werden soll:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` befinden, dann entspricht `/home` immer `https://example.com/home` unabhängig davon, ob `relative_to` auf `document` oder `ruleset` eingestellt ist.

2. Befindet sich das Dokument jedoch unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` (zum Beispiel auf einem Drittanbieter- oder cookieless Ressource-Ursprung), dann:

   - `"relative_to": "document"` führt dazu, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` führt dazu, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` statt `/home` angegeben werden. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` liegen, dann:

   - `"relative_to": "document"` würde `home` zu `https://example.com/some/home` äquivalent machen.
   - `"relative_to": "ruleset"` würde `home` zu `https://example.com/resources/home` äquivalent machen.

### `"expects_no_vary_search"`-Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage, `/users`, die einen `id`-Parameter erhält, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Auswirkung hat, eine völlig neue Seite mit den Informationen für den angegebenen Benutzer zu laden, dann sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Auswirkung hat, den angegebenen Benutzer auf der gleichen Seite hervorzuheben und möglicherweise ein Panel zu öffnen, das ihre Daten anzeigt, dann sollte die URL für Caching-Zwecke als gleich betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte über ein {{httpheader("No-Vary-Search")}} mit dem Wert `params=("id")` erreicht werden.

Wie beeinflusst dies die Spekulationsregeln? Betrachten Sie den folgenden Code:

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` beginnt, während die Headers für das Prefetch von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, welchen `No-Vary-Search`-Wert er erhalten wird, falls vorhanden. Wenn kein `No-Vary-Search`-Wert festgelegt war und das Anwendungsverhalten eher dem von Option 1 oben entsprach, wäre das Prefetching verschwendet und der Browser müsste die separate Seite `/users?id=345` von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, welchen `No-Vary-Search`-Wert die Serverautor erwartet. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine Zeichenfolgen-Darstellung des erwarteten Headerwerts enthält:

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

Dies weist darauf hin, dass Option 2 wie oben beschrieben das ist, was der Server voraussichtlich erzeugen wird. Wenn eine Navigation beginnt, während ein Prefetch von `/users` läuft, informiert dies den Browser, dass es angemessen ist, auf das Prefetch zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

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

Wenn über einen Link geschwebt wird, wird der Browser beginnen, diesen spezifischen Link zu prefetchen.

Wenn der Benutzer über einen weiteren Link schwebt, bevor das Prefetching abgeschlossen ist, sagt das `expects_no_vary_search`-Muster dem Browser, dass es nicht nötig ist, das aktuelle Prefetch abzubrechen, da alle `/users`-URLs mit `id`-URL-Parameterwerten für diesen Kontext effektiv auf die gleiche Seite verweisen (und für Caching-Zwecke).

> [!WARNING]
> Besondere Vorsicht ist geboten, wenn Prerender mit `No-Vary-Search` verwendet wird, da die Seite anfänglich mit unterschiedlichen URL-Parametern prerendert werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendering, UTM-Parameter für die Analyse, etc.). Da das anfängliche Prerender für verschiedene URL-Parameter sein kann, sollte jeder darauf basierende Code erst nach der Aktivierung des Prerenders ausgeführt werden.

Mehrere Parameter können in einem Leerzeichen-getrennten Array bereitgestellt werden:

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
> Als ein [strukturierte Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter Leerzeichen-getrennte, angeführte Zeichenfolgen sein — wie oben gezeigt — und nicht durch Kommata getrennt, was Entwicklern möglicherweise vertrauter ist.

### `eagerness`-Beispiel

Das folgende Set von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um anzugeben, mit welcher Dringlichkeit der Browser jede übereinstimmende Menge von Links prerendern sollte.

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

Hiermit geben wir an, dass:

- Alle gleichseitigen Links, die im Dokument enthalten sind, konservativ prerendert werden sollen (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Produktlinks (in diesem Fall solche mit einer Klasse von `.product-link`) im Dokument sollen eifrig prerendert werden (d.h. wenn der Benutzer einen Schritt in Richtung Navigation zu ihnen unternimmt).

> [!NOTE]
> Die Auswirkungen von Eagerness-Einstellungen sind für Listenregeln weniger nützlich. Standardmäßig werden List-Feld-URLs sofort geprefetched und gerendert, sobald die Regeln analysiert wurden, was Sie erwarten würden — sie sind für die explizite Auflistung von hochwertigen URLs gedacht, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` die gleiche Wirkung wie `immediate` in aktuellen Implementierungen. Niedrigere Eagerness-Einstellungen sind für Prefetching/Prerendering beim Interagieren mit den Links gedacht, und dafür verwenden Sie häufiger Dokumentregeln, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
