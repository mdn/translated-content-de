---
title: <script type="speculationrules">
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 08d05cdb5579ad780d418a9b55da7220f491de8d
---

{{HTMLSidebar}}{{SeeCompatTable}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die durch den {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, unter Verwendung der gleichen [unten bereitgestellten JSON-Darstellung](#spekulationsregeln_json-darstellung). Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler nicht direkt das Dokument selbst modifizieren können.

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

### Spekulationsregeln JSON-Darstellung

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, die jeweils eine Aktion darstellen, um Spekulationsregeln zu definieren. Derzeit werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehöriger Dokumentantwortkörper heruntergeladen werden soll, was zu erheblichen Leistungsverbesserungen führt, wenn diese Dokumente aufgerufen werden. Beachten Sie, dass keine der von der Seite referenzierten Subressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies umfasst das Laden aller Subressourcen, das Ausführen aller JavaScript und sogar das Laden von Subressourcen und Ausführen von Datenabrufen, die durch JavaScript initiiert werden. Wenn diese Dokumente aufgerufen werden, erfolgen die Navigationsvorgänge sofort, was zu großen Leistungsverbesserungen führt.

> [!NOTE]
> Für vollständige Details zur effektiven Nutzung von Prefetch und Prerender konsultieren Sie bitte die Hauptseite der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzige Regel, die eine Menge von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}

  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer von anderen Eigenschaften abgeleitet werden kann.

    Dies kann eines der folgenden sein:

    - `"document"`
      - : Gibt an, dass die URLs von Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert) basierend auf den durch einen `"where"`-Schlüssel beschriebenen Bedingungen übereinstimmen werden. Beachten Sie, dass die Anwesenheit eines `"where"`-Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs von einer Liste kommen, die im `"urls"`-Schlüssel angegeben ist. Beachten Sie, dass die Anwesenheit eines `"urls"`-Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}

  - : Ein Array von Strings, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments geparst (wenn inline in einem Dokument) oder relativ zur externen Ressourcen-URL (wenn extern abgerufen) geparst. `"urls"` und `"where"` dürfen nicht beide in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}

  - : Ein Objekt, das die Bedingungen darstellt, unter denen die Regel auf URLs im zugehörigen Dokument angewendet wird. Effektiv stellt das `"where"`-Objekt einen Test dar, der auf jeden Link auf der Seite angewendet wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` dürfen nicht beide in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:

    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array mit mehreren URL-Muster-Strings, die der Standard-[URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, werden die Regel angewendet.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu dieser Bedingung erfüllt wird. Dies funktioniert genauso wie der [regelbasierte `"relative_to"`-Schlüssel](#relative_to_2), außer dass es nur eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels beeinflusst.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array mit mehreren CSS-Selektoren. Links im Dokument, die von diesen Selektoren übereinstimmen, werden die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, die alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, auf die die Regel _nicht_ angewendet wird, wenn sie übereinstimmt. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, werden die Regel angewendet.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen eines übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sie in separate Regeln aufteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für mehr Erklärung und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorab laden/vorrendern sollte, um die Leistungsvorteile gegen die Ressourcenkosten abzuwägen. Mögliche Werte sind:

    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird, und/oder das Dokument erheblich Zeit benötigt, abgerufen zu werden. Das Vorab-Laden/Vorrendern sollte so bald wie möglich beginnen, nur durch Überlegungen wie Benutzereinstellungen und Ressourcenbeschränkungen bedingt.
    - `"eager"`
      - : Der Autor möchte viele Navigationen vorab laden/vorrendern, so früh wie möglich. Das Vorab-Laden/Vorrendern sollte beginnen, wenn es den geringsten Hinweis darauf gibt, dass ein Link gefolgt wird. Zum Beispiel könnte der Benutzer den Mauszeiger in Richtung des Links bewegen, ihn für einen Moment schweben/lassen oder das Scrollen mit dem Link an einer prominenten Stelle pausieren.
    - `"moderate"`
      - : Der Autor sucht nach einer Balance zwischen `eager` und `conservative`. Das Vorab-Laden/Vorrendern sollte beginnen, wenn es einen vernünftigen Hinweis darauf gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Benutzer einen Link in den Ansichtsbereich scrollen und ihn für einige Zeit schweben/lassen.
    - `"conservative"`
      - : Der Autor möchte einige Vorteile des spekulativen Ladens mit einem relativ kleinen Ressourceneinsatz erreichen. Das Vorab-Laden/Vorrendern sollte nur beginnen, wenn der Benutzer anfängt, auf den Link zu klicken, zum Beispiel bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, gelten für Listen (`"urls"`) die Standardeinstellung `immediate` und für Dokumente (`"where"`) die Standardeinstellung `conservative`. Der Browser nimmt diesen Hinweis zusammen mit seinen eigenen Heuristiken zur Kenntnis, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig bezeichnet hat als einen anderen, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : Ein String, der dem Browser einen Hinweis darauf gibt, welcher {{httpheader("No-Vary-Search")}}-Headerwert für Antworten gesetzt wird, die für Dokumente empfangen werden, für die es Vorab-Ladeanforderungen durchführt. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein bestehendes Vorab-Laden zu warten oder eine neue Abrufanforderung zu starten, wenn die Spekulationsregel erfüllt ist. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für mehr Erklärungen, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}

  - : Ein String, der eine spezifische Referrer-Richtlinie darstellt, die beim Anfordern der im Regel definierten URLs verwendet werden soll — siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon ist es, der verweisenden Seite zu ermöglichen, eine strengere Richtlinie speziell für die spekulative Anforderung festzulegen als die bereits für die Seite festgelegte Richtlinie (entweder standardmäßig oder durch die Verwendung von `Referrer-Policy`).

    > [!NOTE]
    > Ein Cross-Site-Prefetch erfordert eine Referrer-Richtlinie, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, oder `"no-referrer"`. Eine laxere Politik, die in den Spekulationsregeln festgelegt ist, überschreibt eine strengere Politik, die auf der verweisenden Seite festgelegt ist, solange sie noch ausreichend streng für den Cross-Site-Fall ist.

    > [!NOTE]
    > Im Fall von Dokumentregeln wird die im verlinkten Link angegebene Referrer-Richtlinie (z.B. durch Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-Attributs) verwendet, es sei denn, die Regel spezifiziert eine Richtlinie, die diese überschreibt.

- `"relative_to"` {{experimental_inline}}

  - : Ein String, der angibt, wo Sie möchten, dass Links, die mit URL übereinstimmen, relativ zu sein sollen. Der Wert kann einer der folgenden sein:

    - `document`
      - : URLs sollten relativ zu dem Dokument übereinstimmen, auf dem die Spekulationsregeln festgelegt werden.
    - `ruleset`
      - : URLs sollten relativ zu der Datei übereinstimmen, in der die Regeln festgelegt sind. Dies ist der Standardwert.

    Diese Schlüsselkonfiguration ist nur für Regeln relevant, die in einer externen Datei definiert sind (festgelegt mit dem {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments festgelegt sind, für das sie festgelegt werden (d.h. in einem Inline-`<script>`-Element), macht es keinen Unterschied.

- `"requires"` {{experimental_inline}}

  - : Ein Array von Strings, das Fähigkeiten des Browsers darstellt, der die Regel parst, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorab-Ladungen werden in Browsern, die eine spezifizierte Anforderung nicht erfüllen können, automatisch fehlschlagen, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (Nur Prefetch) Gibt an, dass die Regel nur übereinstimmt, wenn der Benutzer-Agent verhindern kann, dass die Client-IP-Adresse für den Ursprungsserver sichtbar ist, wenn eine Cross-Origin-Prefetch-Anforderung ausgegeben wird. Genau wie dies funktioniert, hängt von den spezifischen Browser-Implementierungsdetails ab. Zum Beispiel:
        - Chromes Implementierung verbirgt die IP-Adresse mit einem Google-eigenen Proxy, daher funktioniert es standardmäßig nur für Google-gesteuerte Verweise (da in diesem Fall das Senden der URLs des Ziels an Google kein zusätzlicher Datenschutzverlust ist). Wenn es auf einer nicht von Google betriebenen Website verwendet wird, werden Regeln, die dies enthalten, nur für Benutzer übereinstimmen, die "Erhöhtes Vorladen" in `chrome://settings/preloading` aktivieren.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bereitstellen. Umfassende Tests in allen Zielbrowsern werden empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas verwenden, das ähnlich wie [iCloud Private Relay](https://support.apple.com/en-us/102602) ist.
        - Eine zukünftige Firefox-Implementierung könnte etwas verwenden, das auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt basiert.

- `"tag"` {{experimental_inline}}

  - : Ein String, der zur Identifizierung einer Regel oder eines Regelsets verwendet wird. Dies wird im {{HTTPHeader("Sec-Speculation-Tags")}} Anforderungsheader für alle Spekulationen enthalten sein, die von dieser Regel abgedeckt sind.

- `"target_hint"` {{experimental_inline}}

  - : Ein String, der angibt, wo der Benutzer erwartet, dass der vorgerenderte Inhalt aktiviert wird.
    Die Anweisung, die für Prefetch-Spekulationen nicht unterstützt wird.
    Erlaubte Werte sind:
    - `"target_hint": "_blank"`
      - : Öffnen Sie gerenderten Inhalt auf einer neuen Seite.
    - `"target_hint": "_self"`
      - : Öffnen Sie gerenderten Inhalt auf der aktuellen Seite.
        Dies ist die Standardeinstellung, wenn nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive ausdrücklich zugelassen werden, wenn die Website diese enthält. Dies wird durch Hinzufügen des `"inline-speculation-rules"` Wertes zusammen mit einer Hash- oder Nonce-Quelle erreicht.

## Beispiele

### Prefetch und Prerender im gleichen Regelset

Die grundlegenden Beispiele, die im Beschreibungsabschnitt gezeigt wurden, enthielten separate Spekulationsregeln für Prefetch und Prerender. Es ist möglich, beides in einem einzigen Regelset zu definieren:

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
> Dieses Code-Snippet bietet ein Listen-(`"urls"`) und ein Dokument-(`"where"`) Regelbeispiel.

### Mehrere Regelsets

Es ist auch zulässig, mehrere Regelsets in einer einzelnen HTML-Datei einzubinden:

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

### Dynamische Regel-Insertion

Nachfolgend finden Sie ein Beispiel, das das Feature der Spekulationsregeln erkennt und, wenn es unterstützt wird, dynamisch eine Prerender-Spekulationsregel über JavaScript hinzufügt:

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

### `where` Syntax-Beispiele

Eine dokumentenbasierte Regel enthält eine `"where"`-Eigenschaft, die ein Objekt mit Kriterien ist, die definieren, welche Links im Dokument übereinstimmen. Effektiv stellt das `"where"`-Objekt einen Test dar, der auf jeden Link auf der Seite angewendet wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird ein einzelnes URL-Muster oder CSS-Selektor übereinstimmen:

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

URL-Muster und Selektoren können auch Wildcard-Zeichen (`*`) enthalten, sodass ein einzelner Wert mehrere URLs übereinstimmen kann. Zum Beispiel könnte das untenstehende Objekt `user/`, `user/settings`, `user/stats` etc. übereinstimmen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfrage-Strings)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Zum Beispiel könnte das untenstehende Objekt alle gleichartigen URLs mit einem `category` Suchparameter (als erster oder nachfolgender Parameter) übereinstimmen.

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung platziert wird — das bedeutet, dass, wenn sie übereinstimmt, ein Link _nicht_ die Spekulationsregel angewendet wird, jedoch, wenn _nicht_ übereinstimmt, sie _wird_ angewendet. Das folgende Beispiel bewirkt, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel angewendet wird, jedoch nicht auf Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombination mehrerer `"where"`-Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können in `"and"` oder `"or"` kombiniert werden — diese nehmen den Wert von Arrays, die mehrere Bedingungen enthalten, an, von denen alle oder jede (beziehungsweise) übereinstimmen muss, damit die Spekulationsregeln auf einen Link angewendet werden. Durch die Verwendung von `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt kein spezifiziertes Limit für zugelassene Verschachtelungsebenen.

Es ist nützlich, den `"where"`-Objekt als Äquivalent zu einer `if`-Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist gleichwertig mit

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Beispiel für die Spekulationsregel werden alle gleichartigen Seiten zum Vorab-Laden markiert, außer denen, die als problematisch bekannt sind — die `/logout`-Seite und alle Links, die mit einer `.no-prerender` Klasse markiert sind:

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
> Das obige `where`-Muster enthält keine Cross-Site-Links, die für das Vorab-Laden unterstützt werden (vorausgesetzt, der Benutzer hat keine Cookies für die Zielseite gesetzt, um Tracking zu verhindern), jedoch nicht für das Prerendering.

### `"relative_to"` Beispiel

Für Regelsets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Antwortheader), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` folgendermaßen verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden und die Basis-URL des Dokuments wäre nur für Muster in dieser speziellen Bedingung verwendet:

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

`relative_to` ist hauptsächlich relevant, wenn die JSON-Datei der Spekulationsregeln auf einem anderen Ursprung als das Dokument, das Sie auf sie anwenden möchten, gespeichert ist:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` befinden, entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Wenn sich jedoch das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://other.example/resources/rules.json` befinden (zum Beispiel auf einem Drittanbieter- oder cookiefreien Ursprungsort), dann:

   - `"relative_to": "document"` bewirkt, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` bewirkt, dass `/home` `https://other.example/home` entspricht.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument unter `https://example.com/some/subpage.html` und die Regeln unter `https://example.com/resources/rules.json` befinden, dann:

   - `"relative_to": "document"` würde `home` zu `https://example.com/some/home` entsprechen.
   - `"relative_to": "ruleset"` würde `home` zu `https://example.com/resources/home` entsprechen.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage, `/users`, die einen `id`-Parameter hinzugefügt hat, um Informationen zu einem bestimmten Benutzer abzurufen, zum Beispiel `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Auswirkung hat, eine vollständig neue Seite zu laden, die die Informationen für diesen bestimmten Benutzer enthält, sollte die URL getrennt gecached werden.
2. Wenn dieser Parameter die Auswirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Pullout-Panel anzuzeigen, das seine Daten anzeigt, sollte die URL für Caching-Zwecke als gleich betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und könnte durch ein {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` beginnt, während die Antwortheader für das Vorab-Laden von `/users` noch nicht erhalten wurden? Zu diesem Zeitpunkt weiß der Browser nicht, welchen `No-Vary-Search`-Wert es geben könnte, falls vorhanden. Wenn kein `No-Vary-Search`-Wert gesetzt wäre und das Anwendungsverhalten eher wie Option 1 oben wäre, würde das Vorab-Laden verschwendet und der Browser müsste die separate `/users?id=345` Seite von Grund auf neu abrufen.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenautor erwartet, dass der `No-Vary-Search`-Wert sein wird. Eine Spekulationsregel kann ein `"expects_no_vary_search"`feld enthalten, das eine String-Darstellung des erwarteten Headerwertes enthält:

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

Dies zeigt an, dass die oben beschriebene Option 2 das ist, was der Server erwarten lässt. Wenn eine Navigation beginnt, während ein andauerndes Vorab-Laden von `/users` stattfindet, informiert dies den Browser, dass es angebracht ist, auf das Vorab-Laden zu warten, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentenregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, abhängig vom verwendeten Muster. Zum Beispiel, im Fall von:

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

Wenn ein Link überfahren wird, beginnt der Browser mit dem Vorab-Laden dieses spezifischen Links.

Wenn der Benutzer einen anderen Link überfährt, bevor das Vorab-Laden abgeschlossen ist, sagt das `expects_no_vary_search` Muster dem Browser, dass es nicht nötig ist, das aktuelle Vorab-Laden abzubrechen, da alle `/users` URLs mit `id` URL-Parameterwerten effektiv auf dieselbe Seite für diesen Kontext (und für Caching-Zwecke) verweisen.

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn Prerender mit `No-Vary-Search` verwendet wird, da die Seite möglicherweise zuerst mit verschiedenen URL-Parametern vorgeladen wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Serverressource liefern, jedoch vom Client aus verschiedenen Gründen verwendet werden (clientseitiges Rendering, UTM-Parameter für Analysewerte, etc.). Da das erste Prerender möglicherweise für verschiedene URL-Parameter erfolgt, sollte jeglicher auf diesen basierter Code erst nach Prerender-Aktivierung ausgeführt werden.

Mehrere Parameter können in einem durch Leerzeichen getrennten Array bereitgestellt werden:

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
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter durch Leerzeichen getrennte, zitierte Strings sein — wie oben gezeigt — und nicht durch Kommata getrennt, was Entwicklern möglicherweise vertrauter ist.

### `eagerness` Beispiel

Das folgende Set von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um anzudeuten, wie eifrig der Browser jede übereinstimmende Menge von Links vorab rendern sollte.

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

Hier deuten wir an, dass:

- Alle gleichseitigen Links im Dokument sollten konservativ vorgeladen werden (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig vorgeladen werden (d.h. wenn der Benutzer irgendeine Art von Bewegung in Richtung Navigation zu ihnen macht).

> [!NOTE]
> Die Auswirkungen der Eifer-Einstellungen sind weniger nützlich für Listenregeln. Standardmäßig werden Listenregel-URLs sofort vorgeladen/vorrenderiert, sobald die Regeln geparst werden, was Sie erwarten würden — sie sind zur expliziten Auflistung von hochpriorisierten URLs gedacht, die so bald wie möglich verfügbar gemacht werden sollen. Aus diesem Grund hat `eager` in den aktuellen Implementierungen die gleiche Wirkung wie `immediate`. Niedrigere Eifer-Einstellungen dienen der Vorab-Ladung/Vorrenderung, wenn Links interagiert werden, und dafür verwenden Sie eher Dokumentregeln, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` kann auf oberster Ebene eingefügt werden, um das gesamte Regelset zu identifizieren:

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

Siehe {{HTTPHeader("Sec-Speculation-Tags")}} für weitere Beispiele.

### `target_hint` Beispiel

Ein `target_hint` kann hinzugefügt werden, um das Zielfenster anzugeben, in dem übereinstimmende Prerender-Spekulationen geöffnet werden:

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

Die obigen Regeln ermöglichen, dass die folgenden Links richtig in den entsprechenden Zielen vorrenderiert werden:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` ist nur für Listenregeln erforderlich, die `urls` verwenden.
Sie sind nicht für Dokumentregeln erforderlich (die `where` verwenden), da in diesen Fällen das Ziel vom `target`-Attribut des `<a>`-Link-Elements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
