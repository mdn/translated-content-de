---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, und verwenden die gleiche [unten bereitgestellte JSON-Darstellung](#json-darstellung_von_spekulationsregeln). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Prefetch- und Prerender-Regeln:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, die jeweils eine Aktion darstellen, für die Spekulationsregeln definiert werden sollen. Derzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, bei denen deren zugehöriger Dokumentantwortkörper heruntergeladen werden soll, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der von der Seite referenzierten Unterressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, bei denen deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies umfasst das Laden aller Unterressourcen, das Ausführen aller JavaScript und sogar das Laden von Unterressourcen und das Ausführen von Datenabrufen, die durch JavaScript gestartet werden. Wenn zu diesen Dokumenten navigiert wird, sind die Navigationen sofort, was zu großen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für ausführliche Informationen zur effektiven Nutzung von Prefetch und Prerender.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Menge von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"`

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs von Navigationslinks im zugehörigen Dokument gematcht werden (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert), basierend auf den durch einen `"where"`-Schlüssel beschriebenen Bedingungen. Beachten Sie, dass die Anwesenheit eines `"where"`-Schlüssels `"source": "document"` impliziert, daher ist er optional.
    - `"list"`
      - : Gibt an, dass die URLs von einer Liste stammen werden, die im `"urls"`-Schlüssel angegeben wird. Beachten Sie, dass die Anwesenheit eines `"urls"`-Schlüssels `"source": "list"` impliziert, daher ist er optional.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur externen Ressourcen-URL (wenn extern geholt) geparst. `"urls"` und `"where"` können nicht beide in der gleichen Regel gesetzt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, nach denen die Regel auf URLs im zugehörigen Dokument zutrifft. Effektiv stellt das `"where"`-Objekt einen Test dar, der auf jeden Link auf der Seite angewendet wird, um zu erkennen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in der gleichen Regel gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die dem Standard [URL Pattern API Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs auf die Muster passen, haben die Regel angewendet.
    - `"relative_to"`
      - : Im Falle einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu beachtet wird. Dies funktioniert genau wie der [regelübergreifende `"relative_to"`-Schlüssel](#relative_to_2), außer dass es nur eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die von diesen Selektoren getroffen werden, haben die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen alle erfüllt sein müssen, damit die Regel darauf angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie zutrifft, die Regel _nicht_ darauf angewendet wird. Alle Links, die die Bedingung _nicht_ erfüllen, _werden_ die Regel angewendet.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen eine beliebige zutreffen kann, damit die Regel darauf angewendet wird.

    `"where"`-Bedingungen können mehrfach verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für weitere Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorab laden/vorrendern sollte, um Leistungen gegen Ressourcenkosten abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor geht davon aus, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument möglicherweise erhebliche Zeit zum Abrufen benötigt. Prefetch/Prerender sollte so schnell wie möglich gestartet werden, nur durch Überlegungen wie Benutzereinstellungen und Ressourcenlimits eingeschränkt.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich vorab laden/vorrendern. Prefetch/Prerender sollte bei jeder leichten Andeutung beginnen, dass ein Link gefolgt werden könnte. Beispielsweise könnte der Benutzer seinen Mauszeiger in Richtung des Links bewegen, ihn für einen Moment schweben/konzentrieren oder das Scrollen mit dem Link an prominenter Stelle pausieren.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Prefetch/Prerender sollte beginnen, wenn es eine vernünftige Andeutung gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Beispielsweise könnte der Benutzer einen Link in den Ansichtsbereich scrollen und für einige Zeit darüber schweben/fokussieren.
    - `"conservative"`
      - : Der Autor möchte einige Vorteile aus dem spekulativen Laden bei einem relativ geringen Aufwand an Ressourcen ziehen. Das Prefetch/Prerender sollte erst beginnen, wenn der Benutzer anfängt, auf den Link zu klicken, beispielsweise bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben wird, sind Listen- (`"urls"`) Regeln standardmäßig `immediate`, und Dokumenten- (`"where"`) Regeln standardmäßig `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig angedeutet hat als einen anderen, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher {{httpheader("No-Vary-Search")}} Headerwert auf Antworten gesetzt wird, für Dokumente, für die es Anfragen zum Preload/Vorrendern erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es sinnvoller ist, auf ein bestehendes Preload/Vorrendern zu warten, oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel zutrifft. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für weitere Erklärungen, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Policy darstellt, die beim Anfordern der im Regelwerk angegebenen URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) für mögliche Werte. Der Zweck dieser Maßnahme ist, der verweisenden Seite zu erlauben, eine strengere Policy spezifisch für die spekulative Anfrage zu setzen als die Policy, die die Seite bereits gesetzt hat (entweder standardmäßig oder durch die Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein länderübergreifender Prefetch erfordert eine Referrer-Policy, die mindestens so strikt wie der Standardwert `"strict-origin-when-cross-origin"` ist — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine weniger strenge Policy, die in den Spekulationsregeln gesetzt wird, überschreibt eine strengere Policy, die auf der verweisenden Seite gesetzt wurde, solange sie immer noch ausreichend strikt für den länderübergreifenden Fall ist.

    > [!NOTE]
    > Im Falle von Dokumentregeln wird die angegebene Referrer-Policy des gematchten Links (z.B. durch das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) Attribut) verwendet, es sei denn, die Regel legt eine Policy fest, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass Links, die durch URLs gematcht werden, relativ gematcht werden sollen. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument gematcht werden, auf dem die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollten relativ zur Datei gematcht werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Schlüsselleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (festgelegt durch den {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments spezifiziert sind, für das sie festgelegt werden (d.h. in einem Inline-`<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, das Fähigkeiten des Browsers darstellt, der die Regel parst, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet werden kann.

    > [!WARNING]
    > Prefetches schlagen automatisch in Browsern fehl, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur prefetch) Gibt an, dass die Regel nur zutrifft, wenn der User-Agent verhindern kann, dass die Client-IP-Adresse dem Ursprungsserver sichtbar ist, wenn eine länderübergreifende Prefetch-Anfrage gesendet wird. Wie dies genau funktioniert, hängt von spezifischen Implementierungsdetails des Browsers ab. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse über einen von Google betriebenen Proxy, daher funktioniert es standardmäßig nur für von Google kontrollierte Referrer (da in diesem Fall das Senden der URLs des Ziels an Google kein zusätzlicher Datenschutzverlust ist). Wenn dies auf einer nicht von Google kontrollierten Seite verwendet wird, werden Regeln, die dies enthalten, nur für Benutzer zutreffen, die "Erweitertes Preloading" in `chrome://settings/preloading` aktivieren.
        - Andere Chromium-basierte Browser müssen ihre eigenen Lösungen bereitstellen. Gründliche Tests in allen Zielbrowsern werden empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas Ähnliches wie [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte etwas basierend auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt verwenden.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) Direktive explizit erlaubt werden, wenn die Seite diese enthält. Dies geschieht durch Hinzufügen des `"inline-speculation-rules"`-Wertes zusammen mit einem Hash- oder Nonce-Quelle.

## Beispiele

### Prefetch und Prerender im gleichen Regelwerk

Die grundlegenden Beispiele, die im Beschreibungsabschnitt gezeigt werden, beinhalteten separate Spekulationsregeln, die jeweils für Prefetch und Prerender definiert sind. Es ist möglich, beide in einem einzigen Regelwerk zu definieren:

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
> Dieses Code-Snippet bietet ein Beispiel für eine Listen- (`"urls"`) Regel und eine Dokument- (`"where"`) Regel.

### Mehrere Regelwerke

Es ist auch zulässig, mehrere Regelwerke in einer einzigen HTML-Datei einzuschließen:

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

### Dynamische Regelinsertion

Im Folgenden finden Sie ein Beispiel, das Spekulationsregeln featureerkennt und, falls sie unterstützt werden, eine Prerender-Spekulationsregel dynamisch über JavaScript hinzufügt:

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

Sie können dies in Aktion auf dieser [Prerender-Demoseite](https://prerender-demos.glitch.me/) sehen.

### `where`-Syntax-Beispiele

Eine dokumentenbasierte Regel enthält ein `"where"`-Eigenschaft, die ein Objekt mit Kriterien darstellt, die definieren, welche Links im Dokument gematcht werden. Effektiv stellt das `"where"`-Objekt einen Test dar, der auf jeden Link auf der Seite angewendet wird, um zu erkennen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird ein einzelnes URL-Muster oder einen CSS-Selektor matchen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig gematcht werden können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalter (`*`) Zeichen enthalten, was es ermöglicht, dass ein einzelner Wert mehrere URLs matcht. Zum Beispiel könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats`, etc. matchen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Zum Beispiel könnte das untenstehende Objekt alle gleichursprünglichen URLs mit einem `category`-Suchparameter matchen (als erster oder nachfolgender Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung eingeschlossen wird — das bedeutet, dass, wenn sie zutrifft, ein Link _nicht_ die Spekulationsregel angewendet bekommt, aber wenn _nicht_ zutrifft, wird _sie_ angewendet. Im folgenden Beispiel wird allen Links, die nicht dem URL-Muster `/logout` entsprechen, die Regel angewendet, aber nicht den Links, die `/logout` entsprechen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"`- oder `"or"`-Bedingungen kombiniert werden — diese nehmen den Wert von Arrays, die mehrere Bedingungen enthalten, von denen alle oder nur eine (je nachdem) zutreffen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Durch die Verwendung von `"and"` oder `"or"` können Bedingungen mehrstufige Verschachtelungsebenen erreichen — es gibt kein spezifisches Limit für die erlaubten Verschachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als gleichwertig zu einer `if`-Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

entspricht

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregel-Beispiel sind alle gleichursprünglichen Seiten zum Prefetching markiert, außer solchen, die als problematisch bekannt sind — die `/logout`-Seite und alle Links, die mit einer Klasse `.no-prerender` gekennzeichnet sind:

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
> Das `where`-Muster oben schließt länderübergreifende Links nicht ein, die zum Prefetching unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um Tracking zu vermeiden), aber nicht zum Prerendering.

### `"relative_to"`-Beispiel

Für Regelsets, die extern geholt werden (d.h. über den {{httpheader("Speculation-Rules")}}-Antwort-Header), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden und die Basis-URL des Dokuments wird nur für Muster in dieser bestimmten Bedingung verwendet:

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

Im obigen Beispiel wird nur das erste `"href_matches"` relativ zur Basis-URL des Dokuments gematched.

`relative_to` ist hauptsächlich relevant, wenn die JSON-Datei der Spekulationsregeln auf einem anderen Ursprung als das Dokument liegt, auf das Sie sie anwenden möchten:

1. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln bei `https://example.com/resources/rules.json` liegen, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn das Dokument jedoch unter `https://example.com/some/subpage.html` und die Regeln bei `https://other.example/resources/rules.json` (zum Beispiel auf einem Drittanbieter- oder cookielosen Ressourcursprung) liegen, gilt:

   - `"relative_to": "document"` lässt `/home` `https://example.com/home` entsprechen.
   - `"relative_to": "ruleset"` lässt `/home` `https://other.example/home` entsprechen.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiteres potenzielles (aber seltenes) Anwendungsbeispiel ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn das Dokument unter `https://example.com/some/subpage.html` und die Regeln bei `https://example.com/resources/rules.json` liegen, würde:

   - `"relative_to": "document"` `home` zu `https://example.com/some/home` machen.
   - `"relative_to": "ruleset"` `home` zu `https://example.com/resources/home` machen.

### `"expects_no_vary_search"`-Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage, `/users`, der ein `id`-Parameter hinzugefügt wird, um Informationen über einen bestimmten Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL für Cache-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter den Effekt hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die URL separat im Cache gespeichert werden.
2. Wenn dieser Parameter den Effekt hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein ausziehbares Panel mit ihren Daten anzuzeigen, sollte die URL für Cache-Zwecke als gleich betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und über einen {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` startet, während die Header für das Prefetch von `/users` noch nicht eingegangen sind? An diesem Punkt weiß der Browser nicht, was der Wert von `No-Vary-Search` sein wird, falls vorhanden. Wenn kein `No-Vary-Search`-Wert gesetzt wäre und das Anwendungsverhalten eher wie in Option 1 beschrieben wäre, würde das Prefetch verschwendet und der Browser müsste die separate `/users?id=345`-Seite von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search`-Wert sein sollte. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine String-Darstellung des erwarteten Headerwerts enthält:

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

Dies zeigt an, dass Option 2 oben beschrieben ist das, was der Server zu erzeugen erwartet. Wenn eine Navigation beginnt, während ein laufendes Prefetch von `/users` besteht, informiert dies den Browser darüber, dass es angemessen ist, auf das Prefetch zu warten, anstatt sofort einen weiteren Fetch für `/users?id=345` zu starten.

Dokumentenregeln können je nach verwendetem Muster auch in Verbindung mit `"expects_no_vary_search"` verwendet werden. Zum Beispiel im Falle von:

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

Wenn ein Link geschwebe wird, beginnt der Browser, diesen spezifischen Link vorab zu laden.

Wenn der Benutzer über einen anderen Link fährt, bevor das Prefetch abgeschlossen ist, informiert das `expects_no_vary_search`-Muster den Browser darüber, dass es nicht notwendig ist, das aktuelle Prefetch abzubrechen, da alle `/users` URLs mit `id`-URL-Parameterwerten für diesen Kontext (und für Cache-Zwecke) effektiv auf dieselbe Seite zeigen.

> [!WARNING]
> Bei der Verwendung von Prerender mit `No-Vary-Search` muss besondere Vorsicht walten, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Ressourcen vom Server liefern, aber aus verschiedenen Gründen vom Client verwendet werden (clientseitiges Rendering, UTM-Parameter für Analysezwecke, etc.). Da das initiale Vor-Rendering möglicherweise für unterschiedliche URL-Parameter erfolgt, sollte jeglicher davon abhängige Code erst nach der Aktivierung des Vor-Renderings ausgeführt werden.

### `eagerness`-Beispiel

Das folgende Set von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um darauf hinzuweisen, mit welcher Eifrigkeit der Browser jede passende Menge von Links vorab rendern sollte.

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

Hier zeigen wir an:

- Alle gleichseitigen Links, die im Dokument enthalten sind, sollten konservativ prerendert werden (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Jegliche Produktlinks (in diesem Fall solche mit einer `class` von `.product-link`) im Dokument sollten eifrig prerendert werden (d.h. wenn der Benutzer irgendeine Art von Bewegung in Richtung einer Navigation auf sie macht).

> [!NOTE]
> Die Auswirkungen von Eifrigkeits-Einstellungen sind für Listenregeln weniger nützlich. Standardmäßig werden URLs von Listenregeln sofort vorab geladen / vorgerendert, sobald die Regeln geparst werden, was Sie erwarten würden — sie sind dafür gedacht, explizit hochpriorisierte URLs zu listen, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` die gleiche Wirkung wie `immediate` in aktuellen Implementierungen. Geringere Eifrigkeitseinstellungen sind für Preload/Prerender vorgesehen, wenn Links interagiert werden, und dafür werden Sie eher Dokumentregeln verwenden, um sie auf der Seite zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
