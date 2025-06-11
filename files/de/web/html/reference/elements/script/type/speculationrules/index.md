---
title: <script type="speculationrules">
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) zeigt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die vom {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, mit derselben [unten bereitgestellten JSON-Darstellung](#spekulationsregeln_json-darstellung). Die Angabe eines HTTP-Headers ist nützlich, wenn Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Vorab-Lade- und Vorab-Render-Regeln:

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

Die JSON-Struktur enthält ein oder mehrere Felder der obersten Ebene, von denen jedes eine Aktion zur Definition von Spekulationsregeln darstellt. Derzeit unterstützte Aktionen sind:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenziell zukünftige Navigationen, für die die zugehörigen Dokumentantworten vorab geladen werden sollen, was zu signifikanten Leistungsverbesserungen führt, wenn diese Dokumente aufgerufen werden. Beachten Sie, dass keine der auf der Seite referenzierten Subressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenziell zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dazu gehört das Laden aller Subressourcen, das Ausführen aller JavaScript und sogar das Laden von Subressourcen und das Durchführen von Datenabrufen, die durch JavaScript gestartet wurden. Wenn diese Dokumente aufgerufen werden, erfolgen Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API), um vollständige Details zur effektiven Nutzung von Vorabladen und Vorabrendern zu erhalten.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Reihe von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel zutrifft. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs von Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert) anhand der durch einen `"where"`-Key beschriebenen Bedingungen übereinstimmen. Beachten Sie, dass die Anwesenheit eines `"where"`-Keys `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im Schlüssel `"urls"` angegeben ist. Beachten Sie, dass die Anwesenheit eines `"urls"`-Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn sie in ein Dokument eingebettet sind) oder relativ zur externen Ressourcen-URL (wenn sie extern abgerufen werden) geparst. `"urls"` und `"where"` können nicht in derselben Regel gesetzt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, unter denen die Regel auf URLs angewendet wird, die im zugehörigen Dokument enthalten sind. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht in derselben Regel gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der Standard [URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit den Mustern übereinstimmen, erhalten die Regel.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"`-Bedingung kann hier angegeben werden, wo Sie möchten, dass diese Bedingung relativ zu etwas anderem abgeglichen wird. Dies funktioniert genau wie der [rule-level `"relative_to"` key](#relative_to_2), außer dass es nur eine einzige `"href_matches"`-Bedingung innerhalb eines `"where"`-Keys beeinflusst.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die von diesen Selektoren übereinstimmen, erhalten die Regel.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen alle zutreffen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie zutrifft, _nicht_ die Regel darauf angewendet wird. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ die Regel anwenden.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede zutreffen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie auf separate Regeln aufteilen, um sie einfach zu halten. Weitere Erklärungen und mehrere Anwendungsbeispiele finden Sie in den [where examples](#where_syntax_examples).

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorab laden/vorabrendern soll, um Performance-Vorteile gegen Ressourcenkosten abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument lange zum Abrufen benötigt. Vorabladen/Vorabrendern sollte schnellstmöglich starten, nur unter Berücksichtigung wie Benutzereinstellungen und Ressourcenbeschränkungen.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich vorab laden/vorabrendern. Vorabladen/Vorabrendern sollte bei jedem leichten Hinweis, dass ein Link möglicherweise gefolgt wird, starten. Zum Beispiel könnte der Benutzer den Mauszeiger zum Link bewegen, ihn kurz halten/fokussieren oder mit dem Scrollen aufhören, während der Link an prominenter Stelle ist.
    - `"moderate"`
      - : Der Autor sucht ein Gleichgewicht zwischen `eager` und `conservative`. Vorabladen/Vorabrendern sollte beginnen, wenn es einen vernünftigen Hinweis darauf gibt, dass der Benutzer demnächst einem Link folgen wird. Zum Beispiel könnte der Benutzer den Link in den Viewport scrollen und ihn für einige Zeit halten/fokussieren.
    - `"conservative"`
      - : Der Autor wünscht sich einige Vorteile vom spekulativen Laden mit einem relativ geringen Ressourcenausgleich. Vorabladen/Vorabrendern sollte nur beginnen, wenn der Benutzer beginnt, auf den Link zu klicken, zum Beispiel bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Falls `"eagerness"` nicht explizit angegeben ist, standardmäßig werden List-(`"urls"`) Regeln als `immediate` und Dokument-(`"where"`) Regeln als `conservative` angesehen. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig eingestuft hat, wenn er diesen Kandidaten als bessere Wahl ansieht.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen Wert der {{httpheader("No-Vary-Search")}}-Header auf den Antworten für Dokumente setzten wird, die Vorab-Anfragen erhalten. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen bestehenden Vorabruf zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel verwendet wird. Weitere Erklärungen zur Verwendung finden Sie im [`"expects_no_vary_search"` example](#expects_no_vary_search_example).

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine bestimmte Verweiserpolitik darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet werden soll – siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Das Ziel ist es, der verweisenden Seite zu erlauben, eine strengere Richtlinie speziell für die spekulative Anfrage zu setzen, als die bereits auf der Seite gesetzte (entweder standardmäßig oder durch Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein vorab geladener Cross-Site-Anfrage erfordert eine Verweiserpolitik, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"`, also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine laxere Richtlinie, die in den Spekulationsregeln festgelegt ist, überschreibt eine strengere Richtlinie, die auf der verweisenden Seite festgelegt ist, solange sie noch ausreichend streng für den Cross-Site-Fall ist.

    > [!NOTE]
    > Bei Dokumentregeln wird die festgelegte Verweiserpolitik des verknüpften Links (z.B. durch das Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)) verwendet, es sei denn, die Regel legt eine Richtlinie fest, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass Links, die auf URLs abgestimmt sind, relativ dazu abgestimmt werden. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument abgestimmt werden, auf das die Spekulationsregeln angewendet werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei abgestimmt werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Einstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (die den {{httpheader("Speculation-Rules")}}-Header verwenden). Wenn Regeln in demselben Dokument angegeben werden, für das sie gelten (d.h. in einem eingebetteten `<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, die Fähigkeiten des Browsers darstellen, der die Regel analysiert, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorabladen schlagen in Browsern, die eine angegebene Anforderung nicht erfüllen können, automatisch fehl, selbst wenn sie die [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur-Vorabladen) Gibt an, dass die Regel nur dann zutrifft, wenn der Benutzeragent die Client-IP-Adresse daran hindern kann, sichtbar zu werden, wenn eine Cross-Origin Vorablade-Anfrage ausgegeben wird. Wie dies genau funktioniert, hängt von den spezifischen Implementierungsdetails des Browsers ab. Zum Beispiel:
        - Die Implementierung von Chrome verbirgt die IP-Adresse, indem ein von Google betriebener Proxy verwendet wird, daher funktioniert sie standardmäßig nur für von Google kontrollierte Referrer (da in diesem Fall das Versenden der URLs des Ziels an Google kein zusätzliches Datenschutzproblem darstellt). Wenn sie auf einer nicht von Google betriebenen Seite verwendet wird, stimmen Regeln, die dies einschließen, nur für Benutzer, die "Erweitertes Vorladen" in `chrome://settings/preloading` aktivieren.
        - Andere Browser auf Chromium-Basis müssen ihre eigenen Lösungen bereitstellen. Eine umfassende Tests in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas verwenden, das ähnlich dem [iCloud Private Relay](https://support.apple.com/en-us/102602) ist.
        - Eine zukünftige Firefox-Implementierung könnte etwas basierend auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt verwenden.

- `"tag"` {{experimental_inline}}

  - : Ein String, der zur Identifizierung einer Regel oder eines Regelsets verwendet wird. Dies wird im {{HTTPHeader("Sec-Speculation-Tags")}}-Anforderungsheader für alle von dieser Regel abgedeckten Spekulationen enthalten sein.

- `"target_hint"` {{experimental_inline}}

  - : Ein String, der angibt, wo der Seite erwartet, dass der vorab gerenderte Inhalt aktiviert wird.
    Die Anweisung wird nicht für Vorabwurfspekulationen unterstützt.
    Erlaubte Werte sind:
    - `"target_hint": "_blank"`
      - : Öffnen Sie gerenderten Inhalt auf einer neuen Seite.
    - `"target_hint": "_self"`
      - : Öffnen Sie gerenderten Inhalt auf der aktuellen Seite.
        Dies ist der Standard, wenn nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Direktive explizit erlaubt sein, wenn die Seite dies einschließt. Dies geschieht durch das Hinzufügen des Werts `"inline-speculation-rules"` zusammen mit einem Hash- oder Nonce-Source.

## Beispiele

### Vorab-Laden und Vorab-Rendern im gleichen Regelsatz

Die grundlegenden Beispiele, die im Beschreibungsabschnitt gezeigt wurden, enthielten getrennte Spekulationsregeln für Vorab-Laden und Vorab-Rendern. Es ist möglich, beides in einem einzigen Regelsatz zu definieren:

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
> Dieser Codeausschnitt bietet ein Beispiel für eine Listenregel (`"urls"`) und eine Dokumentregel (`"where"`).

### Mehrere Regelsätze

Es ist auch möglich, mehrere Regelsätze in einer einzigen HTML-Datei zu beinhalten:

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

Und mehrere Regeln in einem einzelnen Ergebnissatz:

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

### Dynamische Regelinsertion

Unten ist ein Beispiel, das Spekulationsregeln erkennt und, falls unterstützt, dynamisch eine Vorabrender-Spekulationsregel via JavaScript hinzufügt:

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

Sie können dies in Aktion auf dieser [prerender demos](https://prerender-demos.glitch.me/)-Seite sehen.

### `where` Syntax Beispiele

Eine dokumentenbasierte Regel enthält eine `"where"`-Eigenschaft, die ein Objekt ist, das Kriterien enthält, die definieren, welche Links im Dokument übereinstimmen. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird mit einem einzelnen URL-Muster oder CSS-Selektor übereinstimmen:

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

URL-Muster und Selektoren können auch Platzhalterzeichen (`*`) enthalten, sodass ein einzelner Wert mehrere URLs übereinstimmen kann. Zum Beispiel könnte das unten stehende Objekt `user/`, `user/settings`, `user/stats` usw. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Zum Beispiel könnte das unten stehende Objekt alle gleichseitigen URLs mit einem `category`-Suchparameter (als erster oder nachfolgender Parameter) übereinstimmen:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung platziert wird – dies bedeutet, dass, wenn sie übereinstimmt, ein Link _nicht_ die Spekulationsregel darauf angewendet wird, aber wenn _nicht_ übereinstimmt, er die Regel _wird_ anwenden. Das folgende Beispiel führt dazu, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel darauf anwenden, aber nicht die Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombinieren mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"`-Bedingungen kombiniert werden – diese nehmen den Wert von Arrays mit mehreren Bedingungen an, und sie müssen alle oder einige (jeweils) zutreffen, damit die Spekulationsregeln auf einen Link angewendet werden. Mit `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden – es gibt kein spezifisches Limit für die erlaubten Verschachtelungsebenen.

Es ist nützlich, sich das `"where"`-Objekt als äquivalent zu einer `if`-Anweisung vorzustellen. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist äquivalent zu

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregel-Beispiel werden alle gleichseitigen Seiten zum Vorabladen markiert, außer denen, die bekanntermaßen problematisch sind – die `/logout`-Seite und Links, die mit einer Klasse `.no-prerender` markiert sind:

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
> Das `where`-Muster oben schließt keine Cross-Site-Links ein, die zum Vorabladen unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um das Tracking zu verhindern), aber nicht zum Vorabrendern.

### `"relative_to"` Beispiel

Für Regelsätze, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}}-Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` folgendermaßen verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` kombiniert werden und die Basis-URL des Dokuments würde nur für Muster in dieser bestimmten Bedingung verwendet:

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

Im obigen Beispiel wird nur die erste `"href_matches"` relativ zur Basis-URL des Dokuments übereinstimmen.

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln-JSON-Datei in einem anderen Ursprung als das Dokument ist, auf das Sie sie anwenden möchten:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json` sind, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn sich das Dokument jedoch unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://other.example/resources/rules.json` (z.B. auf einem Drittanbieter- oder cookieless-Ressourcen-Ursprungs), dann:

   - `"relative_to": "document"` führt dazu, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` führt dazu, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann:

   - `"relative_to": "document"` würde `home` zu `https://example.com/some/home` machen.
   - `"relative_to": "ruleset"` würde `home` zu `https://example.com/resources/home` führen.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage, `/users`, die einen `id`-Parameter hinzugefügt bekommt, um Informationen zu einem bestimmten Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL für Cache-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen des angegebenen Benutzers enthält, sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein ausklappbares Panel mit ihren Daten anzuzeigen, sollte die URL für Cache-Zwecke als gleich betrachtet werden. Dies könnte bei den Ladezeiten der Benutzerseiten Leistungsverbesserungen bringen und könnte durch einen {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

Wie beeinflussen diese Spekulationsregeln? Betrachten Sie den folgenden Code:

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

Was passiert in diesem Fall, wenn der Benutzer eine Navigation auf `/users?id=345` startet, während die Header für das Vorabladen von `/users` noch nicht empfangen wurden? An diesem Punkt weiß der Browser nicht, was der `No-Vary-Search`-Wert sein wird, falls überhaupt einer. Wenn kein `No-Vary-Search`-Wert gesetzt wird und das Anwendungsverhalten eher Option 1 oben ähnelt, wäre das Vorabladen umsonst und der Browser müsste die separate Seite `/users?id=345` von Grund auf abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, welchen `No-Vary-Search`-Wert der Seitenautor erwartet. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine String-Darstellung des erwarteten Headerwertes enthält:

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

Dies zeigt an, dass Option 2, die oben beschrieben wurde, das ist, was der Server erwartet zu produzieren. Wenn eine Navigation beginnt, während es ein laufendes Vorabladen von `/users` gibt, informiert dies den Browser, dass es angemessen ist, auf das Vorabladen zu warten, anstatt sofort einen anderen Abruf für `/users?id=345` zu starten.

Dokumentenregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, je nach verwendetem Muster. Zum Beispiel im Fall von:

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

Wird ein Link darüber geschwebt, beginnt der Browser diesen speziellen Link vorab zu laden.

Wenn der Benutzer über einen anderen Link schwebt, bevor das Vorabladen abgeschlossen ist, sagt das `expects_no_vary_search`-Muster dem Browser, dass es nicht notwendig ist, das aktuelle Vorabladen abzubrechen, da alle `/users`-URLs mit `id`-URL-Parameterwerten in diesem Kontext effektiv auf dieselbe Seite verweisen (und für Cache-Zwecke).

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn Vorabrendern mit `No-Vary-Search` verwendet wird, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorab gerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Ressource vom Server liefern, aber aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendern, UTM-Parameter für Analysenzwecke usw.). Da das initiale Vorabrendern möglicherweise für unterschiedliche URL-Parameter erfolgt, sollte Code, der von diesen abhängt, erst nach der Aktivierung des Vorabrendern ausgeführt werden.

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
> Als ein [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941), sollten die Parameter leerzeichen-getrennte, zitierte Strings sein – wie oben gezeigt – und nicht komma-getrennt, was Entwicklern möglicherweise vertrauter ist.

### `eagerness` Beispiel

Das folgende Set von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um anzugeben, wie eifrig der Browser jedes übereinstimmende Set von Links vorabrendern sollte.

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

Hier geben wir an, dass:

- Alle gleichseitigen Links im Dokument konservativ vorgerendert werden sollen (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument eifrig vorab gerendert werden sollen (d.h. wenn der Benutzer irgendeine Art von Bewegung in Richtung der Navigation zu ihnen macht).

> [!NOTE]
> Die Auswirkungen von Eager-Einstellungen sind weniger nützlich für Listenregeln. Standardmäßig werden URLs von Listenregeln sofort vorab geladen/vorabrendert, sobald die Regeln analysiert werden, was Sie erwarten würden – sie sind vorgesehen, um explizit hochprioritäre URLs aufzulisten, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` in den aktuellen Implementierungen die gleiche Wirkung wie `immediate`. Niedrigere Eager-Einstellungen sind zum Vorab-Laden/Vorabrendern vorgesehen, wenn Links interagiert werden, und dafür werden Sie wahrscheinlich mehr Dokumentregeln verwenden, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann in der obersten Ebene hinzugefügt werden, um den gesamten Regelsatz zu identifizieren:

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

Weitere Beispiele finden Sie unter {{HTTPHeader("Sec-Speculation-Tags")}}.

### `target_hint` Beispiel

Ein `target_hint` kann hinzugefügt werden, um anzugeben, in welchem Zielfenster übereinstimmende vorab gerenderte Spekulationen geöffnet werden:

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

Die obigen Regeln ermöglichen es den folgenden Links, korrekt in den entsprechenden Zielen vorab geladen zu werden:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

Der `target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Sie werden nicht für Dokumentregeln (die `where` verwenden) benötigt, da bei diesen das Ziel aus dem `target`-Attribut des `<a>`-Linkelements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seiten-Navigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API)
