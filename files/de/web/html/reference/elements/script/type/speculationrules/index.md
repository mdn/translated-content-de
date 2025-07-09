---
title: <script type="speculationrules">
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>` elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, unter Verwendung derselben [unten bereitgestellten JSON-Darstellung](#spekulationsregeln_json-darstellung). Das Angeben eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Vorlade- und Vorabrender-Regeln:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, die jeweils eine Aktion darstellen, um Spekulationsregeln zu definieren. Zurzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, die dazu führen, dass der Antwortkörper des zugehörigen Dokuments heruntergeladen wird, was zu erheblichen Leistungsverbesserungen führt, wenn auf diese Dokumente navigiert wird. Beachten Sie, dass keine der vom Dokument referenzierten Unterressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, bei denen das zugehörige Dokument vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden soll. Dies umfasst das Laden aller Unterressourcen, das Ausführen von JavaScript und sogar das Laden von Unterressourcen und das Ausführen von Datenabrufen, die von JavaScript gestartet wurden. Wenn auf diese Dokumente navigiert wird, sind die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Lesen Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API), um vollständige Details zu erfahren, wie Sie prefetch und prerender effektiv nutzen können.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Reihe von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}
  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann sein:
    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} Elementen definiert) anhand der durch einen `"where"` Schlüssel beschriebenen Bedingungen übereinstimmen. Beachten Sie, dass das Vorhandensein eines `"where"` Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"` Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"` Schlüssels `"source": "list"` impliziert, so dass es optional ist.

- `"urls"` {{experimental_inline}}
  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur externen Ressource-URL (wenn extern abgerufen) analysiert. `"urls"` und `"where"` können nicht beide in derselben Regel gesetzt werden.

- `"where"` {{experimental_inline}}
  - : Ein Objekt, das die Bedingungen darstellt, nach denen die Regel URLs im zugehörigen Dokument entspricht. Effektiv stellt das `"where"` Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der standardmäßigen [URL-Muster-API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Mustern übereinstimmen, erhalten die Regel.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"` Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ gematcht wird. Dies funktioniert genau wie der [regelübergreifende `"relative_to"` Schlüssel](#relative_to_2), außer dass es nur eine einzige `"href_matches"` Bedingung innerhalb eines `"where"` Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die von diesen Selektoren getroffen werden, erhalten die Regel.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie zutrifft, die Regel _nicht_ darauf angewendet wird. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ die Regel darauf angewendet haben.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen jede übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"` Bedingungen können in mehrere Ebenen verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können wählen, sie in separate Regeln zu unterteilen, um sie einfach zu halten. Siehe [where Examples](#where_syntax_examples) für mehr Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}
  - : Ein String, der einen Hinweis darauf gibt, wie dringend der Browser link-Ziele vorab laden/vorrendern soll, um Leistungsverbesserungen gegen Ressourcenkosten abzuwägen. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument möglicherweise erhebliche Zeit zum Abrufen benötigt. Vorabladen/Vorrendern sollte so schnell wie möglich beginnen, nur unter Berücksichtigung von Nutzerpräferenzen und Ressourcenlimits.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich vorab laden/vorrendern. Vorabladen/Vorrendern sollte bei jedem leichten Hinweis darauf beginnen, dass ein Link gefolgt werden könnte. Zum Beispiel könnte der Nutzer seinen Mauszeiger in Richtung des Links bewegen, ihn für einen Moment schweben/fokussieren, oder das Scrollen mit dem Link an einer prominenten Stelle anhalten.
    - `"moderate"`
      - : Der Autor sucht eine Balance zwischen `eager` und `conservative`. Vorabladen/Vorrendern sollte beginnen, wenn es eine vernünftige Vermutung gibt, dass der Benutzer einen Link in naher Zukunft folgen wird. Zum Beispiel könnte der Nutzer einen Link in den sichtbaren Bereich scrollen und ihn für einige Zeit schweben/fokussieren.
    - `"conservative"`
      - : Der Autor möchte von spekulativen Ladevorgängen mit einem relativ kleinen Ressourcenaufwand profitieren. Vorabladen/Vorrendern sollte nur beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, sind Listen (`"urls"`) Regeln standardmäßig `immediate` und Dokument (`"where"`) Regeln standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig gekennzeichnet hat als einen anderen, wenn der weniger eifrige Kandidat als bessere Wahl gilt.

- `"expects_no_vary_search"` {{experimental_inline}}
  - : Ein String, der einen Hinweis darauf gibt, welchen {{httpheader("No-Vary-Search")}}-Headerwert für Antworten auf Dokumente gesetzt wird, für die es Vorablade-/Vorrenderanfragen erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es sinnvoller ist, auf ein bestehendes Vorabladen/Vorrendern zu warten oder bei Übereinstimmung der Spekulationsregel eine neue Abrufanforderung zu starten. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für eine ausführlichere Erklärung, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}
  - : Ein String, der eine spezifische Referrer-Richtlinie darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon ist es, der verweisenden Seite zu erlauben, eine strengere Richtlinie speziell für die spekulative Anfrage festzulegen als die Richtlinie, die die Seite bereits festgelegt hat (entweder standardmäßig oder indem `Referrer-Policy` verwendet wird).

    > [!NOTE]
    > Ein sitespezifisches Vorabladen erfordert eine Referrer-Richtlinie, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine laxere Richtlinie, die in den Spekulationsregeln gesetzt ist, überschreibt eine strengere Richtlinie, die auf der verweisenden Seite festgelegt ist, solange sie immer noch ausreichend streng für den sitespezifischen Fall ist.

    > [!NOTE]
    > Im Falle von Dokumentregeln wird die angegebene Referrer-Richtlinie des übereinstimmenden Links (z.B. unter Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attributs) verwendet, es sei denn, die Regel legt eine Richtlinie fest, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}
  - : Ein String, der angibt, wo Sie möchten, dass Links, die durch URL gematcht werden, relativ zu gematcht werden. Der Wert kann einer der folgenden sein:
    - `document`
      - : URLs sollten relativ zu dem Dokument gematcht werden, auf dem die Spekulationsregeln gesetzt werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei gematcht werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Einstellungen des Schlüssels sind nur relevant für Regeln, die in einer externen Datei definiert sind (gesetzt unter Verwendung des {{httpheader("Speculation-Rules")}} Headers). Wenn Regeln innerhalb desselben Dokuments, für das sie festgelegt werden, spezifiziert sind (d.h. in einem Inline-`<script>` Element), macht dies keinen Unterschied.

- `"requires"` {{experimental_inline}}
  - : Ein Array von Strings, die Fähigkeiten des Browsers, der die Regel analysiert, darstellt, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorabladevorgänge werden automatisch in Browsern fehlschlagen, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur für prefetch) Gibt an, dass die Regel nur zutrifft, wenn der User-Agent die IP-Adresse des Clients vor dem Ursprungsserver verbergen kann, wenn eine sitespezifische Vorabladeanforderung gestellt wird. Wie genau dies funktioniert, hängt von Browserspezifika ab. Zum Beispiel:
        - Chromes Implementierung versteckt die IP-Adresse mit einem Google-eigenen Proxy, daher funktioniert es standardmäßig nur für von Google kontrollierte Referrer (da in diesem Fall das Senden der URLs des Ziels an Google kein zusätzlicher Datenschutzverlust ist). Wenn auf einer nicht von Google kontrollierten Website verwendet, werden Regeln, die dies enthalten, nur für Benutzer übereinstimmen, die "Verbessertes Vorladen" in `chrome://settings/preloading` aktivieren.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bieten. Gründliches Testen in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas in der Art von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte möglicherweise etwas basierend auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt verwenden.

- `"tag"` {{experimental_inline}}
  - : Ein String, der verwendet wird, um eine Regel oder Regelmenge zu identifizieren. Dies wird im {{HTTPHeader("Sec-Speculation-Tags")}} Anforderungsheader für alle Spekulationen, die von dieser Regel abgedeckt werden, aufgenommen.

- `"target_hint"` {{experimental_inline}}
  - : Ein String, der angibt, wo der Seiteninhalt, der vorgeladen wurde, aktiviert werden soll.
    Die Direktive ist für vorab geladene Spekulationen nicht unterstützt.
    Zulässige Werte sind:
    - `"target_hint": "_blank"`
      - : Öffne den vorgeladenen Inhalt in einer neuen Seite.
    - `"target_hint": "_self"`
      - : Öffne den vorgeladenen Inhalt auf der aktuellen Seite.
        Dies ist der Standard, wenn nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>` Element verwenden, müssen sie explizit im [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive erlaubt sein, wenn die Website diese beinhaltet. Dies geschieht durch Hinzufügen des `"inline-speculation-rules"` Wertes zusammen mit einer hash- oder nonce-Quelle.

## Beispiele

### Vorabladen und Vorrendern im selben Satz von Regeln

Die grundlegenden Beispiele im Beschreibungsteil enthielten getrennte Spekulationsregeln, die für Vorabladen und Vorrendern definiert waren. Es ist möglich, beide in einem einzigen Satz von Regeln zu definieren:

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
> Dieses Code-Snippet bietet ein Listen (`"urls"`) Regel- und ein Dokument (`"where"`) Regel-Beispiel.

### Mehrere Regelsätze

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

### Dynamische Regel-Einfügung

Im Folgenden ist ein Beispiel, das Spekulationsregeln nach Attributen erkennt und, sofern unterstützt, dynamisch eine Vorrender-Spekulationsregel über JavaScript hinzufügt:

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

Eine dokumentenbezogene Regel enthält eine `"where"` Eigenschaft, die ein Objekt mit Kriterien ist, die definieren, welche Links im Dokument übereinstimmen. Effektiv stellt das `"where"` Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version deckt ein einzelnes URL-Muster oder einen CSS-Selektor ab:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, so dass mehrere URL-Muster oder CSS-Selektoren gleichzeitig übereinstimmen können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalter (`*`) enthalten, sodass ein einzelner Wert mehrere URLs erreichen kann. Zum Beispiel könnte das nachstehende Objekt `user/`, `user/settings`, `user/stats` usw. erreichen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch im `href_matches` gezielt werden. Zum Beispiel könnte das nachstehende Objekt alle gleichoriginigen URLs mit einem `category` Suchparameter (als erster oder nachfolgender Parameter) erreichen:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"` Bedingung eingefügt wird — das bedeutet, dass bei Übereinstimmung ein Link _nicht_ die Spekulationsregel darauf angewendet wird, aber bei *Nicht*übereinstimmung wird sie darauf angewendet. Das folgende Beispiel führt dazu, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel darauf angewendet bekommen, nicht jedoch Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombination mehrerer `"where"` Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden — diese nehmen den Wert von Arrays an, die mehrere Bedingungen enthalten, von denen alle oder jede (jeweils) übereinstimmen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen in mehreren Ebenen tief verschachtelt werden — es gibt kein festgelegtes Limit für erlaubte Verschachtelungsebenen.

Es ist nützlich, das `"where"` Objekt als ein Äquivalent zu einer `if` Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

entspricht

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregel-Beispiel sind alle gleichoriginigen Seiten für das Vorabladen markiert, außer denjenigen, die als problematisch bekannt sind — die `/logout` Seite und alle Links, die mit einer Klasse von `.no-prerender` markiert sind:

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
> Das `where` Muster oben schließt sitespezifische Links aus, die für das Vorabladen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um Tracking zu verhindern), jedoch nicht für das Vorrendern.

### `"relative_to"` Beispiel

Für Regelsätze, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenden externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden, und die Basis-URL des Dokuments wird nur für Muster in dieser bestimmten Bedingung verwendet:

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

Im obigen Beispiel wird nur das erste `"href_matches"` relativ zur Basis-URL des Dokuments gematcht.

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln-JSON-Datei auf einem anderen Ursprung als das Dokument, auf das Sie sie anwenden möchten, liegt:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn sich das Dokument jedoch unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` befinden (zum Beispiel auf einem Drittanbieter- oder cookiefreien Ressourcenursprung), dann:
   - `"relative_to": "document"` führt dazu, dass `/home` mit `https://example.com/home` übereinstimmt.
   - `"relative_to": "ruleset"` führt dazu, dass `/home` mit `https://other.example/home` übereinstimmt.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein anderer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` liegen, dann:
   - `"relative_to": "document"` würde dazu führen, dass `home` mit `https://example.com/some/home` übereinstimmt.
   - `"relative_to": "ruleset"` würde dazu führen, dass `home` mit `https://example.com/resources/home` übereinstimmt.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall von einer Benutzerverzeichnis-Startseite, `/users`, die einen `id` Parameter hat, der hinzugefügt wird, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Zwecke als identisch angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, dann sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Ausklappfenster, das ihre Daten anzeigt, zu öffnen, dann sollte die URL für Cache-Zwecke als gleich angesehen werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch ein {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, wenn die Header für die Vorabladeanforderung von `/users` noch nicht eingegangen sind? Zu diesem Zeitpunkt weiß der Browser nicht, welchen `No-Vary-Search` Wert sie haben wird, wenn überhaupt. Wenn kein `No-Vary-Search` Wert festgelegt wurde und das Anwendungsverhalten mehr wie Option 1 oben war, wäre das Vorabladen verschwendet und der Browser müsste die separate `/users?id=345` Seite von Grund auf abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search` Wert sein wird. Eine Spekulationsregel kann ein `"expects_no_vary_search"` Feld haben, das eine String-Darstellung des erwarteten Header-Werts enthält:

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

Dies zeigt an, dass Option 2, wie oben beschrieben, das ist, was der Server voraussichtlich liefern wird. Wenn eine Navigation gestartet wird, während ein Vorabladen von `/users` im Gange ist, informiert dies den Browser, dass es angemessen ist, auf das Vorabladen zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig von dem verwendeten Muster. Zum Beispiel im Fall von:

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

Wenn ein Link überfahren wird, beginnt der Browser, diesen spezifischen Link vorzubladen.

Wenn der Benutzer einen anderen Link überfährt, bevor das Vorabladen abgeschlossen ist, sagt das `expects_no_vary_search` Muster dem Browser, dass es nicht notwendig ist, das aktuelle Vorabladen abzubrechen, weil alle `/users` URLs mit `id` URL-Parameterwerten effektiv auf dieselbe Seite für diesen Kontext (und für Cache-Zwecke) zeigen.

> [!WARNING]
> Besondere Vorsicht ist geboten, wenn Sie Vorabrendern mit `No-Vary-Search` verwenden, da die Seite möglicherweise zunächst mit anderen URL-Parametern vorgeladen wurde. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Ressourcen von dem Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analysedatenmessung usw.). Da das ursprüngliche Vorabrendern möglicherweise für verschiedene URL-Parameter erfolgt, sollte jeglicher Code, der auf ihnen beruht, erst nach der Vorabrender-Aktivierung laufen.

Mehrere Parameter können in einem leergetrennten Array bereitgestellt werden:

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
> Als [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter leergetrennt, in Anführungszeichen sein, wie oben gezeigt, und nicht komma-getrennt, was Entwicklern möglicherweise vertrauter ist.

### `eagerness` Beispiel

Die folgende Reihe von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um dem Browser mitzuteilen, mit welcher Dringlichkeit er das Vorrendern für jeden passenden Satz von Links durchführen soll.

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

Hier weisen wir darauf hin, dass:

- Alle gleichsite Links, die im Dokument enthalten sind, vorsichtig vorgeladen werden sollten (d.h. wenn der Benutzer anfängt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig vorgeladen werden (d.h. wenn der Benutzer irgendeine Bewegung in Richtung Navigation zu ihnen macht).

> [!NOTE]
> Die Auswirkungen der Eagerness-Einstellungen sind für Listenregeln weniger nützlich. In aktuellen Implementierungen werden URLs von Listenregeln standardmäßig sofort vorgeladen und vorgeladen, sobald die Regeln geparst werden, was Sie erwarten würden — sie sind für die explizite Auflistung von Hochprioritäts-URLs gedacht, die Sie so schnell wie möglich verfügbar machen wollen. Aus diesem Grund hat `eager` in aktuellen Implementierungen die gleiche Wirkung wie `immediate`. Niedrigere Eagerness-Einstellungen sind für Vorabladen/Vorrendern, wenn Links interagiert werden, und für diese verwenden Sie wahrscheinlich eher Dokumentregeln, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann auf oberster Ebene enthalten sein, um den gesamten Regelset zu kennzeichnen:

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

Siehe {{HTTPHeader("Sec-Speculation-Tags")}} für mehr Beispiele.

### `target_hint` Beispiel

Ein `target_hint` kann enthalten sein, um das Ziel-Fenster anzugeben, in dem passende Vorrender-Spekulationen geöffnet werden:

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

Die obigen Regeln ermöglichen es, dass die folgenden Links korrekt in den entsprechenden Zielen vorgeladen werden:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Sie werden für Dokumentregeln (die `where` verwenden) nicht benötigt, da in diesen das Ziel von dem `target` Attribut des `<a>` Linkelements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
