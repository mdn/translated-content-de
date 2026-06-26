---
title: '`<script type="speculationrules">` HTML-Attributwert'
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{SeeCompatTable}}

Der **`speculationrules`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributes des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln haben die Form einer JSON-Struktur, die bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die durch das HTTP-Header-Feld {{httpheader("Speculation-Rules")}} referenziert werden, indem sie die gleiche [unten bereitgestellte JSON-Darstellung](#json-darstellung_der_spekulationsregeln) verwenden. Die Angabe eines HTTP-Headers ist in Fällen nützlich, in denen Entwickler das Dokument selbst nicht direkt ändern können.

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

Ein `<script type="speculationrules">`-Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Regeln für das Vorladen und Vorab-Rendern:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf der obersten Ebene, von denen jedes eine Aktion zur Definition von Spekulationsregeln darstellt. Derzeit sind die unterstützten Aktionen:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehöriger Dokumentantwortkörper heruntergeladen werden sollte, was zu erheblichen Leistungsverbesserungen führt, wenn zu diesen Dokumenten navigiert wird. Beachten Sie, dass keine der von der Seite referenzierten Unterressourcen heruntergeladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für potenzielle zukünftige Navigationen, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollten. Dies umfasst das Laden aller Unterressourcen, das Ausführen aller JavaScripts und sogar das Laden von Unterressourcen und das Durchführen von Datenabrufen, die durch JavaScript gestartet wurden. Wenn zu diesen Dokumenten navigiert wird, sind die Navigationen sofort, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Hauptseite für vollständige Details zur effektiven Nutzung von `prefetch` und `prerender`.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzige Regel, die eine Menge von URLs und zugehörige Parameter definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}
  - : Ein String, der die Quelle der URLs anzeigt, auf die sich die Regel bezieht. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann einer der folgenden sein:
    - `"document"`
      - : Gibt an, dass die URLs aus Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}}-Elementen definiert) basierend auf den durch einen `"where"`-Schlüssel beschriebenen Bedingungen abgeglichen werden. Beachten Sie, dass die Präsenz eines `"where"`-Schlüssels `"source": "document"` impliziert, was so optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste im `"urls"`-Schlüssel stammen. Beachten Sie, dass die Präsenz eines `"urls"`-Schlüssels `"source": "list"` impliziert, was so optional ist.

- `"urls"` {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das eine Liste von URLs darstellt, auf die die Regel angewendet werden soll. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn inline in einem Dokument) oder relativ zur URL der externen Ressource (wenn extern abgerufen) analysiert. `"urls"` und `"where"` können nicht beide in derselben Regel gesetzt werden.

- `"where"` {{experimental_inline}}
  - : Ein Objekt, das die Bedingungen darstellt, anhand derer die Regel auf URLs im zugehörigen Dokument angewendet wird. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der bei jedem Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel gesetzt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array, das mehrere URL-Muster-Strings enthält, die der Standard-Syntax der [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem/den Muster(n) übereinstimmen, werden die Regel angewendet.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"`-Bedingung kann dies angeben, wo Sie möchten, dass diese Bedingung relativ zu einer bestimmten Stelle abgeglichen wird. Dies funktioniert genau wie der [rule-level `"relative_to"`-Schlüssel](#relative_to_2), außer dass es nur eine einzelne `"href_matches"`-Bedingung innerhalb eines `"where"`-Schlüssels beeinflusst.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/Guides/Selectors) enthält, oder ein Array, das mehrere CSS-Selektoren enthält. Links im Dokument, die durch diese Selektoren abgeglichen werden, wird die Regel angewendet.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die alle erfüllt sein müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die, wenn sie erfüllt ist, _nicht_ die Regel auf sie angewendet wird. Alle Links, die _nicht_ mit der Bedingung übereinstimmen, _werden_ die Regel angewendet.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte mit Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, von denen eines übereinstimmen kann, damit die Regel auf sie angewendet wird.

    `"where"`-Bedingungen können in mehreren Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder Sie können sich dafür entscheiden, sie in separate Regeln zu unterteilen, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für weitere Erklärungen und mehrere Anwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie eifrig er Linkziele vorladen/vorrendern sollte, um Leistungsgewinne gegen Ressourcenaufwand abzuwägen. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich gefolgt wird und/oder dass das Dokument erheblichen Zeitaufwand beim Abrufen erfordert. Das Vorladen/Vorrendern sollte so schnell wie möglich beginnen, nur durch Überlegungen wie Benutzereinstellungen und Ressourcenlimits beschränkt.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationen so früh wie möglich vorladen/vorrendern. Das Vorladen/Vorrendern sollte bei jedem leichten Hinweis darauf beginnen, dass ein Link gefolgt werden könnte. Zum Beispiel könnte der Benutzer seinen Mauszeiger in Richtung des Links bewegen, ihn für einen Moment schweben/fokussieren oder das Scrollen mit dem Link an prominenter Stelle anhalten.
    - `"moderate"`
      - : Der Autor sucht nach einem Gleichgewicht zwischen `eager` und `conservative`. Das Vorladen/Vorrendern sollte beginnen, wenn es eine vernünftige Vermutung gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Zum Beispiel könnte der Benutzer einen Link ins Sichtfenster scrollen und ihn eine Weile schweben/fokussieren.
    - `"conservative"`
      - : Der Autor möchte einige Vorteile durch spekulatives Laden mit einem relativ geringen Ressourcenaufwand erzielen. Das Vorladen/Vorrendern sollte nur beginnen, wenn der Benutzer anfängt, auf den Link zu klicken, zum Beispiel bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben ist, sind `list ("urls")`-Regeln standardmäßig auf `immediate` und `document ("where")`-Regeln auf `conservative` eingestellt. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen Link auswählt, den der Autor als weniger eifrig angedeutet hat als einen anderen, wenn der weniger eifrige Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen {{httpheader("No-Vary-Search")}}-Header-Wert für Antworten auf Dokumente, die zuvor Vorlade/Vorrender-Anfragen erhalten, festgelegt wird. Mithilfe dieses Hinweises kann der Browser im Voraus bestimmen, ob es nützlicher ist, auf ein bestehendes Vorladen/Vorrendern zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [`"expects_no_vary_search"`-Beispiel](#expects_no_vary_search_example) für weitere Erklärungen, wie dies verwendet werden kann.

- `"referrer_policy"` {{experimental_inline}}
  - : Ein String, der eine spezifische Referrer-Policy darstellt, die beim Anfordern der in der Regel angegebenen URLs verwendet werden soll – siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck davon ist es, der verweisenden Seite zu erlauben, eine strengere Richtlinie speziell für die spekulative Anforderung festzulegen als die, die die Seite bereits eingestellt hat (entweder standardmäßig oder durch Verwendung der `Referrer-Policy`).

    > [!NOTE]
    > Ein domainspezifisches Vorladen erfordert eine Referrer-Policy, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, oder `"no-referrer"`. Eine weniger strenge Regelung in den Spekulationsregeln überschreibt eine strengere Regelung auf der verweisenden Seite, solange sie dennoch hinreichend streng für den domainspezifischen Fall ist.

    > [!NOTE]
    > Im Fall von Dokumentregeln wird die angegebene Referrer-Richtlinie des verknüpften Links (z.B. unter Verwendung des [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-Attributes) verwendet, es sei denn, die Regel legt eine Richtlinie fest, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}
  - : Ein String, der angibt, wo Sie möchten, dass über URL gefundene Links relativ dazu abgeglichen werden. Der Wert kann einer der folgenden sein:
    - `document`
      - : URLs sollten relativ zu dem Dokument abgeglichen werden, auf das die Spekulationsregeln eingestellt sind.
    - `ruleset`
      - : URLs sollten relativ zu der Datei abgeglichen werden, in der die Regeln angegeben sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (festgelegt durch den {{httpheader("Speculation-Rules")}}-Header). Wenn Regeln innerhalb desselben Dokuments festgelegt werden, für das sie gelten (d.h. in einem Inline-`<script>`-Element), spielt es keine Rolle.

- `"requires"` {{experimental_inline}}
  - : Ein Array von Strings, die Fähigkeiten des Browsers darstellen, der die Regel analysiert und die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Vorladungen schlagen automatisch in Browsern fehl, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur für Vorladen) Gibt an, dass die Regel nur zutrifft, wenn der Benutzeragent in der Lage ist, die Sichtbarkeit der Client-IP-Adresse für den Ursprungsserver zu verhindern, falls eine domainspezifische Vorladeanfrage gesendet wird. Wie dies funktioniert, hängt von spezifischen Implementierungsdetails des Browsers ab. Zum Beispiel:
        - Chromes Implementierung versteckt die IP-Adresse mit einem Google-eigenen Proxy, daher funktioniert dies standardmäßig nur für von Google kontrollierte Verweiser (da in diesem Fall das Versenden der URLs der Ziel-URLs an Google kein zusätzlicher Privatsphärenverlust bedeutet). Bei Benutzung auf einer Nicht-Google-eigenen Seite werden Regeln, die dies beinhalten, nur auf Benutzer zutreffen, die "Erweitertes Preloading" in `chrome://settings/preloading` eingeschaltet haben.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bereitstellen. Eine gründliche Prüfung in allen Zielbrowsern wird empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas Ähnliches wie den [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte eventuell auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) basieren.

- `"tag"` {{experimental_inline}}
  - : Ein String, der verwendet wird, um eine Regel oder Regelsatz zu identifizieren. Dies wird im {{HTTPHeader("Sec-Speculation-Tags")}}-Anforderungsheader für alle Spekulationen enthalten sein, die durch diese Regel abgedeckt sind.

- `"target_hint"` {{experimental_inline}}
  - : Ein String, der angibt, wo der Inhalt des vorgerenderten Documents aktiviert werden soll.
    Die Direktive wird für Vorlade-Spekulationen nicht unterstützt.
    Erlaubte Werte sind:
    - `"target_hint": "_blank"`
      - : Öffnet den vorgerenderten Inhalt auf einer neuen Seite.
    - `"target_hint": "_self"`
      - : Öffnet den vorgerenderten Inhalt auf der aktuellen Seite.
        Dies ist der Standard, wenn nicht angegeben.

> [!NOTE]
> Da Spekulationsregeln ein `<script>`-Element verwenden, müssen sie explizit in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Direktive zugelassen werden, wenn die Site diese enthält. Dies erfolgt durch Hinzufügen des `"inline-speculation-rules"`-Werts zusammen mit einer Hash- oder Nonce-Quelle.

## Beispiele

### Vorladen und Vorab-Rendern im selben Regelsatz

Die grundlegenden Beispiele, die im Beschreibungsabschnitt gezeigt wurden, enthielten separate Spekulationsregeln, die für Vorladen und Vorab-Rendern definiert wurden. Es ist möglich, beides in einem einzigen Regelsatz zu definieren:

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
> Dieses Codebeispiel bietet eine `list ("urls")`-Regel und eine `document ("where")`-Regelbeispiel.

### Mehrere Regelsätze

Es ist auch erlaubt, mehrere Regelsätze in einer einzigen HTML-Datei einzuschließen:

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

### Dynamisches Einfügen von Regeln

Nachfolgend ist ein Beispiel, das Spekulationsregeln erkennt und, falls unterstützt, eine Vorab-Render-Spekulationsregel dynamisch über JavaScript hinzufügt:

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

### `where`-Syntaxbeispiele

Eine dokumentenbezogene Regel enthält eine `"where"`-Eigenschaft, die ein Objekt darstellt, das Kriterien enthält, die definieren, welche Links im Dokument abgeglichen werden. Im Wesentlichen stellt das `"where"`-Objekt einen Test dar, der bei jedem Link auf der Seite ausgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird.

Die grundlegendste Version wird ein einzelnes URL-Muster oder einen CSS-Selektor abgleichen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Array von Werten gesetzt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig abgeglichen werden können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Platzhalter (`*`) enthalten, sodass ein einzelner Wert auf mehrere URLs zutreffen kann. Zum Beispiel könnte das unten stehende Objekt `user/`, `user/settings`, `user/stats`, usw. abgleichen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Zum Beispiel könnte das unten stehende Objekt alle gleichstämmigen URLs mit einem `category`-Suchparameter abgleichen (als erster oder weiterer Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann negiert werden, indem sie in eine `"not"`-Bedingung gesetzt wird — dies bedeutet, dass, wenn sie abgeglichen wird, ein Link _nicht_ die Spekulationsregel angewendet bekommt, aber wenn _nicht_ abgeglichen, wird sie _doch_ angewendet. Das folgende Beispiel bewirkt, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel angewendet bekommen, aber nicht Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Mehrere `"where"`-Bedingungen mit `"and"` oder `"or"` kombinieren

Mehrere Bedingungen können innerhalb von `"and"`- oder `"or"`-Bedingungen kombiniert werden — diese nehmen den Wert von Arrays, die mehrere Bedingungen enthalten, an, alle oder jede davon (jeweils) müssen übereinstimmen, damit die Spekulationsregeln auf einen Link angewendet werden. Durch die Verwendung von `"and"` oder `"or"` können Bedingungen in mehreren Ebenen verschachtelt werden — es gibt kein festgelegtes Limit für erlaubte Verschachtelungsebenen.

Es ist nützlich, das `"where"`-Objekt als Äquivalent zu einer `if`-Anweisung zu betrachten. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist gleichwertig zu

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle gleichstämmigen Seiten zum Vorladen markiert, außer solche, die als problematisch bekannt sind — die `/logout`-Seite und alle Links mit Klassen von `.no-prerender`:

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
> Das `where`-Muster oben schließt domainspezifische Links aus, die zum Vorladen unterstützt werden (sofern der Benutzer keine Cookies für die Zielsite gesetzt hat, um Tracking zu vermeiden), jedoch nicht zum Vorrendern.

### `"relative_to"`-Beispiel

Für Regelsätze, die extern geladen werden (z.B. über das {{httpheader("Speculation-Rules")}}-Antwort-Headerfeld), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenen externen Textdatei analysiert. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu analysieren, wird `"relative_to"` wie folgt verwendet:

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

Im obigen Beispiel wird nur das erste `"href_matches"`-Muster relativ zur Basis-URL des Dokuments abgeglichen.

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregel-JSON-Datei auf einem anderen Ursprung als das Dokument liegt, auf das Sie sie anwenden möchten:

1. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` eingestellt ist.

2. Wenn sich das Dokument jedoch unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://other.example/resources/rules.json` (zum Beispiel auf einer Drittanbieter- oder cookieless Resource) liegen, dann:
   - `"relative_to": "document"` wird bewirken, dass `/home` `https://example.com/home` entspricht.
   - `"relative_to": "ruleset"` wird bewirken, dass `/home` `https://other.example/home` entspricht.

   Dies ist das typische Anwendungsbeispiel für `"relative_to"`.

3. Ein weiteres mögliches (aber selteneres) Anwendungsbeispiel ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben werden. Wenn sich das Dokument unter `https://example.com/some/subpage.html` befindet und die Regeln unter `https://example.com/resources/rules.json`, dann:
   - `"relative_to": "document"` würde bewirken, dass `home` `https://example.com/some/home` entspricht.
   - `"relative_to": "ruleset"` würde bewirken, dass `home` `https://example.com/resources/home` entspricht.

### `"expects_no_vary_search"`-Beispiel

Betrachten Sie den Fall einer Benutzerverzeichnis-Landingpage `/users`, die einen `id`-Parameter erhält, um Informationen zu einem bestimmten Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL für Cache-Zwecke als identisch angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen zum angegebenen Benutzer enthält, dann sollte die URL separat im Cache gespeichert werden.
2. Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Panel anzuzeigen, das seine Daten zeigt, dann sollte die URL für Cache-Zwecke als identisch angesehen werden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen und durch einen {{httpheader("No-Vary-Search")}}-Header mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` beginnt, während die Header für das Vorladen von `/users` noch nicht erhalten wurden? Zu diesem Zeitpunkt weiß der Browser nicht, was der `No-Vary-Search`-Wert sein wird, falls es einen gibt. Wenn kein `No-Vary-Search`-Wert gesetzt war und das Anwendungsverhalten mehr wie in Option 1 oben war, wäre das Vorladen vergeudet und der Browser müsste die separate `/users?id=345`-Seite von Grund auf neu laden.

Um dies zu lösen, können wir einen Hinweis darauf geben, was der Seitenersteller erwartet, was der `No-Vary-Search`-Wert sein sollte. Eine Spekulationsregel kann ein `"expects_no_vary_search"`-Feld haben, das eine Stringdarstellung des erwarteten Headerwerts enthält:

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

Dies zeigt an, dass Option 2, wie oben beschrieben, das ist, was der Server voraussichtlich produziert. Wenn eine Navigation beginnt, während ein Vorladen von `/users` noch im Gange ist, informiert dies den Browser, dass es angemessen ist, auf das Vorladen zu warten, anstatt sofort eine neue Anforderung für `/users?id=345` zu starten.

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

Wenn über einen Link geschwebt wird, beginnt der Browser mit dem Vorladen dieses spezifischen Links.

Wenn der Benutzer vor Abschluss des Vorladens über einen anderen Link schwebt, teilt das `expects_no_vary_search`-Muster dem Browser mit, dass es nicht erforderlich ist, das aktuelle Vorladen abzubrechen, da alle `/users`-URLs mit `id`-URL-Parameterwerten für diesen Kontext effektiv auf dieselbe Seite verweisen (und für Cache-Zwecke).

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn `prerender` mit `No-Vary-Search` verwendet wird, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Ressource vom Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (clientseitiges Rendering, UTM-Parameter für Analysen usw.). Da das ursprüngliche Vorrendern möglicherweise für andere URL-Parameter erfolgt, sollte jeder Code, der davon abhängig ist, nur nach Aktivierung des Vorderrenderns ausgeführt werden.

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
> Als [strukturiertes Feld](https://www.rfc-editor.org/info/rfc8941) sollten die Parameter - wie oben gezeigt - durch Leerzeichen getrennte, in Anführungszeichen gesetzte Zeichenfolgen sein und nicht durch Kommata getrennt, wie es Entwickler möglicherweise gewohnt sind.

### `eagerness`-Beispiel

Der folgende Satz von Dokumentregeln zeigt, wie `eagerness` verwendet werden kann, um anzudeuten, mit welcher Eifrigkeit der Browser jedes passende Set von Links vorladen/vorrendern sollte.

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

- Alle gleichmäßigen Seiten-Links, die im Dokument enthalten sind, konservativ vorgerendert werden sollten (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall diejenigen mit einer `class` von `.product-link`) im Dokument sollten eifrig vorgerendert werden (d.h. wenn der Benutzer irgendeine Art von Bewegung in Richtung einer Navigation zu ihnen macht).

> [!NOTE]
> Die Auswirkungen von `eagerness`-Einstellungen sind für Listenregeln weniger nützlich. Standardmäßig werden Listenregel-URLs sofort, sobald die Regeln analysiert werden, vorgeladen/vorgerendert, was Sie erwarten würden — sie sind gedacht für die explizite Auflistung von hochprioritären URLs, die Sie so schnell wie möglich verfügbar machen möchten. Aus diesem Grund hat `eager` in aktuellen Implementierungen denselben Effekt wie `immediate`. Niedrigere Eifrigkeitseinstellungen sind für das Vorladen/Vorrendern gedacht, wenn Links zu ihnen interagiert werden, und hierfür dürfte man eher Dokumentregeln verwenden, um sie auf der Seite zu finden.

### `tag`-Beispiel

Ein `tag` kann auf oberster Ebene enthalten sein, um den gesamten Regelsatz zu identifizieren:

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

### `target_hint`-Beispiel

Ein `target_hint` kann enthalten sein, um das Ziel-Fenster anzugeben, in dem passende Vorab-Render-Spekulationen geöffnet werden:

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

Die oben aufgeführten Regeln ermöglichen es, die folgenden Links korrekt in den entsprechenden Zielen vorab zu rendern:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Sie sind nicht für Dokumentregeln erforderlich (die `where` verwenden), da in diesen das Ziel aus dem `target`-Attribut des `<a>` Linkelements bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Seiten in Chrome vorab laden, um sofortige Seiten-Navigationen zu ermöglichen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
