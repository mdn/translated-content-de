---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die festlegt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, unter Verwendung der gleichen [unten bereitgestellten JSON-Darstellung](#json-darstellung_der_spekulationsregeln). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Vorab-Laden- und Vorab-Rendern-Regeln:

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

Die JSON-Struktur enthält auf der obersten Ebene ein oder mehrere Felder, von denen jedes eine Aktion zur Definition von Spekulationsregeln darstellt. Gegenwärtig werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für mögliche zukünftige Navigationen, deren zugehöriger Dokument-Response-Body heruntergeladen werden soll, was zu signifikanten Leistungsverbesserungen führt, wenn diese Dokumente aufgerufen werden. Beachten Sie, dass keine der Unterressourcen, auf die die Seite verweist, heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für mögliche zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies schließt das Laden aller Unterressourcen, das Ausführen aller JavaScript und sogar das Laden von Unterressourcen und das Ausführen von Datenabfragen ein, die von JavaScript gestartet werden. Wenn diese Dokumente aufgerufen werden, sind die Navigationen sofort, was zu großen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details, wie `prefetch` und `prerender` effektiv genutzt werden können.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Reihe von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eines der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} Elementen definiert) stammen, basierend auf den durch einen `"where"`-Schlüssel beschriebenen Bedingungen. Beachten Sie, dass die Anwesenheit eines `"where"`-Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im Schlüssel `"urls"` angegeben ist. Beachten Sie, dass die Anwesenheit eines `"urls"`-Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet wird. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur URL der externen Ressource (wenn extern geladen) geparst. `"urls"` und `"where"` können nicht beide in derselben Regel gesetzt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, bei denen die Regel auf URLs im zugehörigen Dokument zutrifft. Effektiv stellt das `"where"`-Objekt einen Test dar, der an jedem Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel auf ihn angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der Standard- [URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, wird die Regel angewendet.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann diese angeben, wo Sie möchten, dass diese Bedingung relativ zu etwas anderem abgeglichen wird. Dies funktioniert genauso wie der [regelbasierte `"relative_to"`-Schlüssel](#relative_to_2), außer dass es nur eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die mit diesen Selektoren übereinstimmen, wird die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen alle für die Regel angewendet werden müssen.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie übereinstimmt, _nicht_ auf die Regel angewendet wird. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ angewendet.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen eine jede Bedingung erfüllen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrfach verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [wo Beispiele](#where_syntax_examples) für mehr Erklärung und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis gibt, wie eifrig er Linkziele vorab laden/vorrendern sollte, um die Leistungsverbesserungen gegen die Ressourcenkosten abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument erheblich Zeit zum Abrufen benötigt. Das Vorab-Laden/-Rendern sollte so bald wie möglich beginnen, nur eingeschränkt durch Nutzerpräferenzen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte viele Navigationen vorab laden/vorrendern, so früh wie möglich. Das Vorab-Laden/-Rendern sollte bei jedem Hinweis darauf, dass ein Link möglicherweise gefolgt wird, beginnen. Zum Beispiel könnte der Nutzer seinen Mauszeiger in Richtung des Links bewegen, ihn kurz über-/fokussieren oder beim Scrollen mit dem Link an einer prominenten Stelle anhalten.
    - `"moderate"`
      - : Der Autor sucht eine Balance zwischen `eager` und `conservative`. Das Vorab-Laden/-Rendern sollte beginnen, wenn es einen vernünftigen Hinweis darauf gibt, dass der Nutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Nutzer einen Link in das Ansichtsfenster scrollen und ihn für einige Zeit über-/fokussieren.
    - `"conservative"`
      - : Der Autor wünscht, einen gewissen Nutzen aus dem spekulativen Laden bei einem relativ geringen Ressourcenaufwand zu ziehen. Das Vorab-Laden/-Rendern sollte nur beginnen, wenn der Nutzer beginnt, auf den Link zu klicken, zum Beispiel bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, setzen Listenvorgaben (`"urls"`) den Standard auf `immediate` und Dokumentvorgaben (`"where"`) auf `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig angedeutet hat, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen {{httpheader("No-Vary-Search")}}-Headerwert auf Antworten für Dokumente eingestellt wird, die Anfragen zum Vorab-Laden/-Rendern erhalten. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein bestehendes Vorab-Laden/-Rendern zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [`"expects_no_vary_search"`-Beispiel](#expects_no_vary_search_example) für weitere Erläuterungen zur Nutzung.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezielle Referrer-Policy angibt, die angewendet wird, wenn die URLs in der Regel angefragt werden — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) für mögliche Werte. Der Zweck hiervon ist es, der verweisenden Seite zu ermöglichen, speziell für die spekulative Anfrage eine strengere Policy festzulegen als die Policy, die die Seite bereits hat (entweder standardmäßig oder durch den `Referrer-Policy`-Einsatz).

    > [!NOTE]
    > Eine übergreifende Vorab-Ladung erfordert eine Referrer-Policy, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine laxere Policy, die in den Spekulationsregeln gesetzt wird, überschreibt eine strengere Policy, die auf der verweisenden Seite eingestellt ist, solange sie immer noch ausreichend streng für den Cross-Site-Fall ist.

    > [!NOTE]
    > Im Falle von Dokumentregeln wird die angegebene Referrer-Policy des übereinstimmenden Links (z.B. mit dem [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-Attribut) verwendet, es sei denn, die Regel gibt eine Policy an, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass Links, die mit der URL übereinstimmen, relativ dazu verglichen werden. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zum Dokument abgeglichen werden, auf dem die Spekulationsregeln gesetzt werden.
    - `ruleset`
      - : URLs sollten relativ zur Datei abgeglichen werden, in der die Regeln spezifiziert sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (gesetzt über den {{httpheader("Speculation-Rules")}}-Header). Wenn die Regeln innerhalb desselben Dokuments spezifiziert werden, auf das sie angewendet werden (d.h. in einem inline `<script>`-Element), macht sie keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, das die Fähigkeiten des Browsers darstellt, der die Regel analysiert, die verfügbar sein müssen, wenn die Regel auf die angegebenen URLs angewendet werden soll.

    > [!WARNING]
    > Vorab-Laden schlägt in Browsern automatisch fehl, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur vorab-Ladung) Gibt an, dass die Regel nur dann übereinstimmt, wenn der Nutzer-Agent in der Lage ist, die Client-IP-Adresse vor Verfügbarkeit für den Ursprungsserver zu verbergen, falls eine plattformübergreifende Vorab-Lade-Anfrage erfolgt. Wie genau dies funktioniert, hängt von den Implementierungsdetails des Browsers ab. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse mittels eines von Google betriebenen Proxys, daher funktioniert es standardmäßig nur für von Google kontrollierte Referrer (da in diesem Falle die URL-Adressen des Ziels an Google zu senden, kein zusätzliches Risiko für die Privatsphäre darstellt). Wenn es auf einer nicht von Google betriebenen Webseite verwendet wird, stimmen Regeln, die dies beinhalten, nur für Nutzer überein, die "Erweitertes Vorab-Laden" in `chrome://settings/preloading` einschalten.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bereitstellen. Gründliches Testen in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas in der Art von [iCloud Private Relay](https://support.apple.com/de-de/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte etwas nutzen, das auf dem [Mozilla VPN](https://www.mozilla.org/de-DE/products/vpn/) Produkt basiert.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element nutzen, müssen sie explizit erlaubt sein in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) Direktive, wenn die Seite eine solche enthält. Dies geschieht, indem der Wert `"inline-speculation-rules"` zusammen mit einem Hash- oder Nonce-Quellwert hinzugefügt wird.

## Beispiele

### Vorab-Laden und Vorrendern im gleichen Satz von Regeln

Die grundlegenden Beispiele im Beschreibungsabschnitt enthalten separate Spekulationsregeln, die für Vorab-Laden und Vorrendern definiert sind. Es ist möglich, beides in einem einzigen Satz von Regeln zu definieren:

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
> Dieses Codebeispiel bietet ein Beispiel für eine Listenregel (`"urls"`) und eine Dokumentregel (`"where"`).

### Mehrfache Regelsets

Es ist auch erlaubt, mehrere Regelsets in einer einzigen HTML-Datei einzuschließen:

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

### Dynamisches Einfügen von Regeln

Nachfolgend ein Beispiel, das Spekulationsregeln erkennt und, falls unterstützt, eine Vorrenderungsspekulationsregel dynamisch über JavaScript hinzufügt:

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

Sie können dies in Aktion auf dieser Seite [Prerender-Demos](https://prerender-demos.glitch.me/) sehen.

### `where`-Syntax-Beispiele

Eine aus dem Dokument stammende Regel enthält eine `"where"`-Eigenschaft, die ein Objekt mit Kriterien darstellt, die definieren, welche Links im Dokument übereinstimmen. Effektiv stellt das `"where"`-Objekt einen Test dar, der an jedem Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird mit einem einzigen URL-Muster oder CSS-Selektor übereinstimmen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig übereinstimmen können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Wildcard-Zeichen (`*`) enthalten, wodurch ein einzelner Wert mit mehreren URLs übereinstimmen kann. Zum Beispiel könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können ebenfalls in `href_matches` angezielt werden. Zum Beispiel könnte das untenstehende Objekt alle same-origin URLs mit einem `category` Suchparameter (als erster oder nachfolgender Parameter) übereinstimmen.

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie innerhalb einer `"not"`-Bedingung platziert wird — das bedeutet, dass ein Link, wenn er übereinstimmt, _nicht_ die Spekulationsregel angewendet bekommt, aber wenn er _nicht_ übereinstimmt, sie _wird_ angewendet. Das folgende Beispiel bewirkt, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel angewendet bekommen, jedoch nicht Links, die mit `/logout` übereinstimmen.

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb `"and"` oder `"or"` kombiniert werden — diese nehmen den Wert von Arrays mit mehreren Bedingungen, von denen alle oder jede (jeweils) erfüllt sein müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt kein spezifiziertes Limit für erlaubte Verschachtelungsebenen.

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

Im folgenden vollständigen Spekulationsregelbeispiel sind alle Same-Origin-Seiten zum Vorabladen markiert, außer denen, die als problematisch bekannt sind — die `/logout`-Seite und alle Links, die mit einer Klasse `.no-prerender` versehen sind:

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
> Das obige `where`-Muster schließt keine bereichsübergreifenden Links ein, die für das Vorabladen (vorausgesetzt der Nutzer hat keine Cookies für die Zielseite gesetzt, um gegen Tracking zu schützen) unterstützt werden, aber nicht für das Vorrendern.

### `"relative_to"`-Beispiel

Für Regelsets, die extern geladen werden (d.h. über den {{httpheader("Speculation-Rules")}}-Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden, und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei auf einem anderen Ursprung als das Dokument ist, auf das Sie sie anwenden möchten:

1. Wenn das Dokument sich auf `https://example.com/some/subpage.html` befindet und die Regeln auf `https://example.com/resources/rules.json`, dann bedeutet `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn das Dokument jedoch auf `https://example.com/some/subpage.html` ist und die Regeln auf `https://other.example/resources/rules.json` (zum Beispiel auf einem Drittanbieter-Ressourcen-Ursprung oder einem cookielosen Ursprung), dann:

   - `"relative_to": "document"` wird bewirken, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` wird bewirken, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiteres potenzielles (aber selteneres) Anwendungsbeispiel ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument auf `https://example.com/some/subpage.html` befindet und die Regeln auf `https://example.com/resources/rules.json`, dann:

   - `"relative_to": "document"` würde bewirken, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde bewirken, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"`-Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnisseite, `/users`, auf der ein `id`-Parameter hinzugefügt wird, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch eingestuft werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, dann sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und vielleicht ein Auswahlpanel anzuzeigen, das deren Daten anzeigt,Dann sollte die URL für Caching-Zwecke als gleich betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte über einen {{httpheader("No-Vary-Search")}}-Header mit einem Wert von `params=("id")` erreicht werden.

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

Was passiert in diesem Fall, wenn der Benutzer eine Navigation zu `/users?id=345` startet, während die Header für das Vorabladen von `/users` noch nicht empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, welchen `No-Vary-Search`-Wert, falls vorhanden, gesetzt wird. Wenn kein `No-Vary-Search`-Wert gesetzt war und das Anwendungsverhalten eher wie Option 1 oben war, würde das Vorabladen verschwendet werden und der Browser müsste die separate `/users?id=345`-Seite von Grund auf abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search`-Wert sein wird. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine String-Darstellung des erwarteten Headerwertes enthält:

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

Dies gibt an, dass Option 2 wie oben beschrieben das ist, was der Server produzieren sollte. Wenn eine Navigation beginnt, während ein Vorabladen von `/users` läuft, informiert dies den Browser, dass es angemessen ist, auf das Vorabladen zu warten, statt sofort einen anderen Abruf für `/users?id=345` zu starten.

Dokumentregeln können je nach verwendetem Muster auch zusammen mit `"expects_no_vary_search"` verwendet werden. Zum Beispiel im Fall von:

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

Wenn ein Link angefahren wird, beginnt der Browser, genau diesen Link vorab zu laden.

Wenn der Nutzer einen anderen Link hovert, bevor das Vorab-Laden abgeschlossen ist, sagt das `expects_no_vary_search`-Muster dem Browser, dass es nicht nötig ist, das aktuelle Vorab-Laden abzubrechen, da alle `/users`-URLs mit `id`-URL-Parameterwerten in diesem Kontext effektiv auf dieselbe Seite verweisen (und für Caching-Zwecke).

### `eagerness`-Beispiel

Der folgende Satz von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um darauf hinzuweisen, mit welcher Eile der Browser jede übereinstimmende Menge von Links vorrendern sollte.

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

Hierbei deuten wir an:

- Alle Same-Site-Links, die im Dokument enthalten sind, sollten konservativ vorrendern (d.h. wenn der Nutzer anfängt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig vorrendern (d.h. wenn der Nutzer irgendeine Bewegung in Richtung eines Klicks auf sie macht).

> [!NOTE]
> Die Effekte von Eifrigkeitseinstellungen sind weniger nützlich für Listenregeln. Standardmäßig werden Listenregel-URLs sofort vorab geladen/vorrendered, sobald die Regeln analysiert werden, was man erwarten würde — sie sind dafür gedacht, explizit hochpriorisierte URLs aufzulisten, die man so schnell wie möglich verfügbar machen möchte. Aus diesem Grund hat `eager` in aktuellen Implementierungen den gleichen Effekt wie `immediate`. Niedrigere Eifrigkeitseinstellungen sind für das Vorab-Laden/Vorrendering, wenn Links interagiert werden, und dafür werden Sie eher Dokumentregeln verwenden, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
