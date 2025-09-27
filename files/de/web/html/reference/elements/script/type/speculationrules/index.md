---
title: <script type="speculationrules">
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{SeeCompatTable}}

Der **`speculationrules`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>` Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.

Spekulationsregeln nehmen die Form einer JSON-Struktur an, die bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgerendert werden sollen. Dies ist Teil der [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API).

> [!NOTE]
> Spekulationsregeln können in externen Textdateien definiert werden, die vom {{httpheader("Speculation-Rules")}} HTTP-Header referenziert werden, wobei die gleiche [JSON-Darstellung unten angegeben](#spekulationsregeln_json-darstellung) verwendet wird. Die Angabe eines HTTP-Headers ist nützlich in Fällen, in denen Entwickler das Dokument selbst nicht direkt ändern können.

## Syntax

```html
<script type="speculationrules">
  // JSON object defining rules
</script>
```

> [!NOTE]
> Die `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, und `referrerpolicy` Attribute dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Definition der Spekulationsregeln ist kein gültiges JSON-Objekt.

## Beschreibung

Ein `<script type="speculationrules">` Element muss eine gültige JSON-Struktur enthalten, die Spekulationsregeln definiert. Die folgenden Beispiele zeigen separate Vorlade- und Vorrechenregeln:

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

Die JSON-Struktur enthält ein oder mehrere Felder auf oberster Ebene, von denen jedes eine Aktion darstellt, für die Spekulationsregeln definiert werden sollen. Derzeit werden die folgenden Aktionen unterstützt:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für zukünftige Navigationsmöglichkeiten, deren zugehörige Dokumentantwort geladen werden soll, was zu erheblichen Leistungsverbesserungen führt, wenn diese Dokumente angesteuert werden. Beachten Sie, dass keine der vom Dokument referenzierten Ressourcen geladen werden.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Regeln für zukünftige Navigationsmöglichkeiten, deren zugehörige Dokumente vollständig heruntergeladen, gerendert und in einem unsichtbaren Tab geladen werden sollen. Dies umfasst das Laden aller Ressourcen, das Ausführen von JavaScript und sogar das Laden von Ressourcen und das Ausführen von Datenabrufen, die vom JavaScript gestartet werden. Beim Navigieren zu diesen Dokumenten werden die Navigationsvorgänge sofort erledigt, was zu erheblichen Leistungsverbesserungen führt.

> [!NOTE]
> Konsultieren Sie die Hauptseite der [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API) für vollständige Details zur effektiven Nutzung von Vorladen und Vorrechnen.

Jedes Aktionsfeld enthält ein Array, das wiederum ein oder mehrere Objekte enthält. Jedes Objekt enthält eine einzelne Regel, die eine Menge von URLs und zugehörigen Parametern definiert.

Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `"source"` {{experimental_inline}}
  - : Ein String, der die Quelle der URLs angibt, auf die die Regel angewendet wird. Dies ist optional, da der Wert immer aus anderen Eigenschaften abgeleitet werden kann.

    Dies kann eines der folgenden sein:
    - `"document"`
      - : Gibt an, dass die URLs von Navigationslinks im zugehörigen Dokument (wie in {{htmlelement("a")}} und {{htmlelement("area")}} Elementen definiert) basierend auf den durch einen `"where"` Schlüssel beschriebenen Bedingungen stammen. Beachten Sie, dass das Vorhandensein eines `"where"` Schlüssels `"source": "document"` impliziert, sodass es optional ist.
    - `"list"`
      - : Gibt an, dass die URLs aus einer Liste stammen, die im `"urls"` Schlüssel angegeben ist. Beachten Sie, dass das Vorhandensein eines `"urls"` Schlüssels `"source": "list"` impliziert, sodass es optional ist.

- `"urls"` {{experimental_inline}}
  - : Ein Array von Strings, die eine Liste von URLs darstellen, auf die die Regel angewendet wird. Diese können absolute oder relative URLs sein. Relative URLs werden relativ zur Basis-URL des Dokuments (wenn sie in einem Dokument eingebettet sind) oder relativ zur externen Ressourcen-URL (wenn sie extern abgerufen werden) geparst. `"urls"` und `"where"` können nicht beide in derselben Regel festgelegt werden.

- `"where"` {{experimental_inline}}
  - : Ein Objekt, das die Bedingungen darstellt, unter denen die Regel auf URLs im zugehörigen Dokument angewendet wird. Effektiv stellt das `"where"` Objekt einen Test dar, der für jeden Link auf der Seite durchgeführt wird, um festzustellen, ob die Spekulationsregel darauf angewendet wird. `"where"` und `"urls"` können nicht beide in derselben Regel festgelegt werden.

    Dieses Objekt kann genau eine der folgenden Eigenschaften enthalten:
    - `"href_matches"`
      - : Ein String, der ein URL-Muster enthält, oder ein Array mit mehreren URL-Muster-Strings, die der Standard- [URL Pattern API-Syntax](/de/docs/Web/API/URL_Pattern_API) folgen. Links im Dokument, deren URLs mit dem Muster(n) übereinstimmen, erhalten die Regel.
    - `"relative_to"`
      - : Im Fall einer `"href_matches"` Bedingung, kann hier angegeben werden, wo Sie möchten, dass diese Bedingung relativ zugeordnet wird. Dies funktioniert genauso wie der [Regel-übergreifende `"relative_to"` Schlüssel](#relative_to_2), außer dass sie nur eine einzelne `"href_matches"` Bedingung innerhalb eines `"where"` Schlüssels betrifft.
    - `"selector_matches"`
      - : Ein String, der einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) enthält, oder ein Array mit mehreren CSS-Selektoren. Links im Dokument, die durch diese Selektoren übereinstimmen, erhalten die Regel.
    - `"and"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, die alle übereinstimmen müssen, damit die Regel auf sie angewendet wird.
    - `"not"`
      - : Ein Objekt, das eine Bedingung (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthält, die bei Übereinstimmung keine Regel auf sie angewendet wird. Alle Links, die nicht mit der Bedingung übereinstimmen, erhalten die Regel.
    - `"or"`
      - : Ein Array, das ein oder mehrere Objekte enthält, die Bedingungen (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, oder `"or"`) enthalten, von denen jede für die Regel übereinstimmen kann.

    `"where"` Bedingungen können mehrere Ebenen tief verschachtelt werden, um komplexe Bedingungen zu erstellen, oder können in getrennte Regeln aufgeteilt werden, um sie einfach zu halten. Siehe [where examples](#where_syntax_examples) für weitere Erklärungen und mehrere Verwendungsbeispiele.

- `"eagerness"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, wie bereitwillig er Link-Ziele laden/vorrendern soll, um Leistungsvorteile gegen Ressourcenaufwand auszubalancieren. Mögliche Werte sind:
    - `"immediate"`
      - : Der Autor denkt, dass der Link sehr wahrscheinlich folgen wird, und/oder das Dokument viel Zeit zum Laden beanspruchen kann. Prefetch/prerender sollte so schnell wie möglich starten, nur unter Berücksichtigung von Benutzereinstellungen und Ressourcenlimits.
    - `"eager"`
      - : Der Autor möchte eine große Anzahl von Navigationsbefehlen so früh wie möglich laden/vorrendern. Prefetch/prerender sollte bei jedem kleinen Hinweis starten, dass ein Link aufgerufen werden könnte. Beispielsweise könnte der Benutzer den Mauszeiger auf den Link bewegen, ihn einen Moment lang mit dem Mauszeiger oder Fokus anzeigen oder das Scrollen pausieren, während der Link an prominenter Stelle steht.
    - `"moderate"`
      - : Der Autor sucht nach einem Mittelweg zwischen `eager` und `conservative`. Prefetch/prerender sollte beginnen, wenn es einen vernünftigen Hinweis gibt, dass der Benutzer in naher Zukunft einem Link folgen wird. Beispielsweise könnte der Benutzer einen Link in den Viewport scrollen und ihn einige Zeit lang fokussieren.
    - `"conservative"`
      - : Der Autor möchte vom spekulativen Laden mit relativ geringem Ressourceneinsatz profitieren. Prefetch/prerender sollte erst starten, wenn der Benutzer den Link zu klicken beginnt, z.B. bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event).

    Wenn `"eagerness"` nicht explizit angegeben wird, gehen die Regeln der Liste (`"urls"`) standardmäßig von `immediate` aus und die Dokumentregeln (`"where"`) von `conservative`. Der Browser berücksichtigt diesen Hinweis zusammen mit seinen eigenen Heuristiken, sodass er möglicherweise einen weniger dringenden Link auswählt, den der Autor als weniger dringend eingestuft hat, wenn der weniger dringende Kandidat als bessere Wahl angesehen wird.

- `"expects_no_vary_search"` {{experimental_inline}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, welchen Wert der {{httpheader("No-Vary-Search")}} Header bei Antworten auf zu spekulierende Anforderungen für Dokumente gesetzt wird. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen bestehenden Prefetch/vorabrender zu warten oder eine neue Anforderung zu starten, wenn die Spekulationsregel erfüllt ist. Siehe das [`"expects_no_vary_search"` Beispiel](#expects_no_vary_search_example) für eine genauere Erklärung der Benutzung.

- `"referrer_policy"` {{experimental_inline}}
  - : Ein String, der eine bestimmte Referrer-Richtlinie bei der Anforderung der URLs im Zuge der Regel darstellt – siehe [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für mögliche Werte. Der Zweck ist es, der verweisenden Seite zu erlauben, eine strengere Richtlinie speziell für die spekulative Anfrage festzulegen als die Richtlinie, die die Seite bereits hat (entweder standardmäßig oder durch Nutzung der `Referrer-Policy`).

    > [!NOTE]
    > Ein Cross-Site-Prefetch erfordert eine Referrer-Richtlinie, die mindestens so streng ist wie der Standardwert `"strict-origin-when-cross-origin"` — also `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` oder `"no-referrer"`. Eine in den Spekulationsregeln festgelegte lockerere Richtlinie überschreibt eine strengere Richtlinie auf der verweisenden Seite, solange sie noch genügend streng für den Cross-Site-Fall ist.

    > [!NOTE]
    > Bei Dokumentregeln wird die festgelegte Referrer-Richtlinie des übereinstimmenden Links (z.B. durch Nutzung des [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attributs) verwendet, es sei denn, die Regel gibt eine Richtlinie an, die sie überschreibt.

- `"relative_to"` {{experimental_inline}}
  - : Ein String, der angibt, wo Sie wollen, dass die durch URL übereinstimmenden Links relativ zugeordnet werden sollen. Der Wert kann einer der folgenden sein:
    - `document`
      - : URLs sollen relativ zum Dokument abgeglichen werden, auf dem die Spekulationsregeln gesetzt werden.
    - `ruleset`
      - : URLs sollen relativ zur Datei abgeglichen werden, in der die Regeln spezifiziert sind. Dies ist der Standardwert.

    Diese Schlüsseleinstellung ist nur relevant für Regeln, die in einer externen Datei definiert sind (gesetzt durch den {{httpheader("Speculation-Rules")}} Header). Wenn Regeln innerhalb desselben Dokuments spezifiziert werden, für die sie gesetzt werden (d.h. in einem eingebetteten `<script>` Element), macht das keinen Unterschied.

- `"requires"` {{experimental_inline}}
  - : Ein Array von Strings, die Fähigkeiten des Browsers beim Parsen der Regel darstellen, die verfügbar sein müssen, damit die Regel auf die angegebenen URLs angewendet wird.

    > [!WARNING]
    > Prefetches werden automatisch in Browsern fehlschlagen, die eine angegebene Anforderung nicht erfüllen können, selbst wenn sie die [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API) unterstützen.

    Mögliche Werte sind:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (nur prefetch) Gibt an, dass die Regel nur übereinstimmt, wenn der Benutzeragent die IP-Adresse des Clients daran hindern kann, die Ursprungsserver sichtbar zu machen, wenn eine anforderungsübergreifende Prefetch-Anforderung gestellt wird. Wie genau dies funktioniert, hängt von den spezifischen Implementationen im Browser ab. Beispielsweise:
        - Chromes Implementierung versteckt die IP-Adresse mit einem Google-eigenen Proxy, weshalb sie standardmäßig nur für Google-kontrollierte Referenten arbeitet (da das Senden der Ziel-URLs an Google in diesem Fall kein zusätzlicher Datenschutzverlust ist). Wenn es auf einer Nicht-Google-eigenen Website verwendet wird, stimmen Regeln, die dies enthalten, nur mit Benutzern überein, die "Erweitertes Vorladen" unter `chrome://settings/preloading` aktivieren.
        - Andere auf Chromium basierende Browser müssen ihre eigenen Lösungen bieten. Gründliche Tests in allen Zielbrowsern werden empfohlen.
        - Eine zukünftige Safari-Implementierung könnte möglicherweise etwas in der Art von [iCloud Private Relay](https://support.apple.com/en-us/102602) verwenden.
        - Eine zukünftige Firefox-Implementierung könnte möglicherweise auf dem [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) Produkt basieren.

- `"tag"` {{experimental_inline}}
  - : Ein String, der zur Identifizierung einer Regel oder Regelmenge verwendet wird. Dieser wird im {{HTTPHeader("Sec-Speculation-Tags")}} Anfrage-Header für alle von dieser Regel abgedeckten Spekulationen enthalten sein.

- `"target_hint"` {{experimental_inline}}
  - : Ein String, der angibt, wo die Seite erwartet, dass der vorgerenderte Inhalt aktiviert wird.
    Die Direktive wird nicht für Prefetch-Spekulationen unterstützt.
    Erlaubte Werte sind:
    - `"target_hint": "_blank"`
      - : Öffnet den vorgerenderten Inhalt in einer neuen Seite.
    - `"target_hint": "_self"`
      - : Öffnet den vorgerenderten Inhalt auf der aktuellen Seite.
        Dies ist der Standard, falls nicht spezifiziert.

> [!NOTE]
> Da Spekulationsregeln ein `<script>` Element verwenden, müssen sie in der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) Direktive explizit zugelassen werden, falls die Seite sie enthält. Dies erfolgt durch Hinzufügen des Wertes `"inline-speculation-rules"` zusammen mit einer Hash- oder Nonce-Quelle.

## Beispiele

### Prefetch und Prerender in demselben Regelset

Die grundlegenden Beispiele, die im Abschnitt Beschreibung gezeigt wurden, enthielten separate Spekulationsregeln für Prefetch und Prerender. Es ist möglich, beide in einem einzigen Regelset zu definieren:

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
> Dieses Code-Beispiel bietet ein Listenregel-Beispiel (`"urls"`) und ein Dokumentregel-Beispiel (`"where"`).

### Mehrere Regelsets

Es ist auch zulässig, mehrere Regelsets in eine einzelne HTML-Datei einzubeziehen:

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

Und mehrere Regeln in einem einzelnen Ergebnis-Set:

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

Unten ist ein Beispiel, das Spekulationsregeln erkennt und, sofern unterstützt, eine Prerender-Spekulationsregel dynamisch per JavaScript hinzufügt:

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

Eine dokumentenbasierte Regel enthält eine `"where"` Eigenschaft, die ein Objekt mit Kriterien darstellt, die definieren, welche Links im Dokument angepasst werden. Effektiv repräsentiert das `"where"` Objekt einen Test, der für jeden Link auf der Seite durchgeführt wird, um zu sehen, ob die Spekulationsregel darauf angewendet wird.

Die einfachste Version wird ein einzelnes URL-Muster oder CSS-Selektor anpassen:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` und `"selector_matches"` können auch auf ein Werten-Array gesetzt werden, sodass mehrere URL-Muster oder CSS-Selektoren gleichzeitig angepasst werden können:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL-Muster und Selektoren können auch Jokerzeichen (`*`) enthalten, sodass ein einzelner Wert mit mehreren URLs übereinstimmen kann. Zum Beispiel könnte das folgende Objekt `user/`, `user/settings`, `user/stats`, etc. anpassen.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Suchparameter (oder Abfragezeichenfolgen)](/de/docs/Web/API/URL/search) können auch in `href_matches` gezielt werden. Zum Beispiel könnte das folgende Objekt alle gleichartigen URLs mit einem `category` Suchparametern anpassen (als ersten oder nachfolgenden Parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Jede Bedingung kann durch Einfügen in eine `"not"` Bedingung negiert werden — dies bedeutet, dass, wenn sie übereinstimmt, ein Link _nicht_ die Spekulationsregel erhält, aber wenn _nicht_ übereinstimmt, erhält er sie. Das folgende Beispiel wird dafür sorgen, dass alle Links, die _nicht_ mit dem URL-Muster `/logout` übereinstimmen, die Regel erhalten, aber nicht Links, die mit `/logout` übereinstimmen:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Kombination mehrerer `"where"` Bedingungen mit `"and"` oder `"or"`

Mehrere Bedingungen können innerhalb von `"and"` oder `"or"` Bedingungen kombiniert werden — diese nehmen den Wert von Arrays mit mehreren Bedingungen an, die alle oder eine von ihnen (jeweils) übereinstimmen müssen, damit die Spekulationsregeln auf einen Link angewendet werden. Durch die Nutzung von `"and"` oder `"or"` können Bedingungen mehrere Ebenen tief verschachtelt werden — es gibt keine angegebene Grenze für zulässige Verschachtelungsebenen.

Es ist hilfreich, das `"where"` Objekt als einem `if`-Statement gleichwertig zu sehen. Also

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

ist gleichwertig mit

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

Im folgenden vollständigen Spekulationsregelbeispiel werden alle gleichartigen Seiten zum Vorladen markiert, außer denen, die bekanntlich problematisch sind — die `/logout` Seite und alle Links, die mit einer Klasse von `.no-prerender` ausgezeichnet sind:

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
> Der `where`-Fall oben schließt übergreifende Links aus, die für das Vorladen unterstützt werden (sofern der Benutzer keine Cookies für die Zielseite gesetzt hat, um Tracking zu verhindern), jedoch nicht für das Vorrendern.

### `"relative_to"` Beispiel

Für Regelsets, die extern abgerufen werden (d.h. über den {{httpheader("Speculation-Rules")}} Response-Header), werden URLs in Listenregeln und URL-Muster in Dokumentregeln standardmäßig relativ zur URL der enthaltenden externen Textdatei geparst. Um URLs in einer Listenregel relativ zur Basis-URL des Dokuments zu parsen, wird `"relative_to"` wie folgt verwendet:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

Für Dokumentregeln kann `"relative_to"` direkt mit `"href_matches"` gepaart werden und die Basis-URL des Dokuments würde nur für Muster in dieser speziellen Bedingung verwendet werden:

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

`relative_to` ist hauptsächlich relevant, wenn die Spekulationsregeln JSON-Datei sich auf einem anderen Ursprung als das Dokument befindet, auf das Sie sie anwenden möchten:

1. Wenn sich das Dokument bei `https://example.com/some/subpage.html` befindet und die Regeln bei `https://example.com/resources/rules.json`, dann entspricht `/home` immer `https://example.com/home`, unabhängig davon, ob `relative_to` auf `document` oder `ruleset` gesetzt ist.

2. Sollte sich das Dokument jedoch bei `https://example.com/some/subpage.html` und die Regeln bei `https://other.example/resources/rules.json` befinden (zum Beispiel auf einem Drittanbieter- oder cookielosen Ursprungsressourcenserver), dann:
   - `"relative_to": "document"` würde `/home` zu `https://example.com/home` machen.
   - `"relative_to": "ruleset"` würde `/home` zu `https://other.example/home` machen.

   Dies ist der typische Anwendungsfall für `"relative_to"`.

3. Ein weiterer potenzieller (aber seltenerer) Anwendungsfall ist, wenn Ihre URLs in der Form `home` anstelle von `/home` angegeben sind. Wenn sich das Dokument bei `https://example.com/some/subpage.html` und die Regeln bei `https://example.com/resources/rules.json`, dann:
   - `"relative_to": "document"` würde `home` zu `https://example.com/some/home` machen.
   - `"relative_to": "ruleset"` würde `home` zu `https://example.com/resources/home` machen.

### `"expects_no_vary_search"` Beispiel

Betrachten Sie den Fall einer Nutzerverzeichnis-Startseite, `/users`, die einen `id` Parameter hinzugefügt bekommt, um Informationen über einen bestimmten Nutzer anzuzeigen, beispielsweise `/users?id=345`. Ob diese URL für Caching-Zwecke als identisch angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

1. Wenn dieser Parameter bewirkt, dass eine vollständig neue Seite geladen wird, die die Informationen des angegebenen Nutzers enthält, sollte die URL separat zwischengespeichert werden.
2. Wenn dieser Parameter bewirkt, dass der angegebene Nutzer auf derselben Seite hervorgehoben und möglicherweise ein Bereichenanzeigepanel angezeigt wird, sollte die URL für Caching-Zwecke als identisch betrachtet werden. Dies könnte zu Leistungsverbesserungen beim Laden der Nutzerseiten führen und könnte durch ein {{httpheader("No-Vary-Search")}} mit einem Wert von `params=("id")` erreicht werden.

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

Was würde in diesem Fall passieren, wenn der Benutzer eine Navigation zu `/users?id=345` beginnt, bevor die Header für das Vorladen von `/users` empfangen wurden? Zu diesem Zeitpunkt weiß der Browser nicht, was der `No-Vary-Search` Wert sein wird, falls vorhanden. Wäre kein `No-Vary-Search` Wert gesetzt und wäre das Anwendungsverhalten eher wie Option 1 oben, wäre das Vorladen umsonst und der Browser müsste die separate `/users?id=345` Seite von Grund auf neu abrufen.

Um das zu lösen, können wir einen Hinweis darauf geben, welchen `No-Vary-Search` Wert der Seitenautor erwartet. Eine Spekulationsregel kann ein `"expects_no_vary_search"` Feld haben, das eine String-Darstellung des erwarteten Headerwertes enthält:

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

Dies weist darauf hin, dass Option 2 erläutert oben ist, was der Server zu produzieren erwartet. Wenn eine Navigation beginnt, während ein laufender Vorabruf von `/users` existiert, informiert dies den Browser, dass es angemessen ist, das Vorabrufen zu abzuschließen, anstatt sofort einen weiteren Abruf für `/users?id=345` zu starten.

Dokumentregeln können auch in Verbindung mit `"expects_no_vary_search"` verwendet werden, je nach verwendetem Muster. Zum Beispiel im Falle von:

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

Wenn der Benutzer über einen anderen Link fährt, bevor das Vorladen abgeschlossen ist, gibt das "expects_no_vary_search" Muster dem Browser an, dass es nicht notwendig ist, den aktuellen Prefetch abzubrechen, weil alle `/users` URLs mit `id` URL-Parameterwerten effektiv auf dieselbe Seite verweisen (und für Cache-Zwecke).

> [!WARNING]
> Zusätzliche Vorsicht ist geboten, wenn Prerender mit "No-Vary-Search" verwendet wird, da die Seite möglicherweise mit anderen URL-Parametern vorgerendert wird. "No-Vary-Search" wird für URL-Parameter verwendet, die dasselbe Serverressourcen liefern, aber aus verschiedenen Gründen vom Client verwendet werden (Client-Side-Rendering, UTM Parameter für Analysezwecke, etc.). Da das anfängliche Prerendern für andere URL-Parameter vorgesehen sein kann, sollte jeder Code, der von ihnen abhängt, erst nach der Prerender-Aktivierung ausgeführt werden.

Es können mehrere Parameter in einem leerzeichengetrennten Array angegeben werden:

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
> Als ein [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter leerzeichengetrennte, in Anführungszeichen gesetzte Strings sein — wie oben gezeigt — und nicht durch Kommas getrennt, an welche Entwickler möglicherweise eher gewöhnt sind.

### `eagerness` Beispiel

Das folgende Dokumentregelset zeigt, wie `eagerness` verwendet werden kann, um anzugeben, mit welcher Bereitschaft der Browser die übereinstimmenden Link-Sets vorab rendert.

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

Hierbei geben wir an, dass:

- Alle im Dokument enthaltenen gleichartigen Links konservativ vorgerendert werden sollen (d.h. wenn der Benutzer beginnt, sie zu aktivieren).
- Alle Produktlinks (in diesem Fall jene mit einer `class` von `.product-link`) im Dokument sollen eifrig vorgerendert werden (d.h. wenn der Benutzer irgendeine Art von Bewegung macht, um zu sehen, ob er zu ihnen navigieren kann).

> [!NOTE]
> Die Effekte der "eagerness"-Einstellungen sind für Listenregeln weniger nützlich. Standardmäßig werden URLs von Listenregeln sofort geladen/geplecht/prerendered, sobald die Regeln geparst werden, was angemessen ist — sie sind für die explizite Auflistung hochprioritärer URLs gedacht, die Sie so schnell wie möglich verfügbar machen möchten. Deshalb hat `eager` dieselbe Wirkung wie `immediate` in aktuellen Implementierungen. Niedrigere Bereitschaftseinstellungen gelten für das Vorabrufen/prerendern, wenn Links interagiert werden, und dafür werden Sie wahrscheinlich mehr Dokumentregeln verwenden, um sie auf der Seite zu finden.

### `tag` Beispiel

Ein `tag` könnte auf der obersten Ebene zum Identifizieren des gesamten Regelsets eingefügt werden:

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

Oder zum Identifizieren individueller Regeln:

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

Ein `target_hint` kann eingefügt werden, um das Ziel anzugeben, in dem übereinstimmende Prerender-Spekulationen geöffnet werden:

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

Die obigen Regeln erlauben es den folgenden Links, korrekt in den entsprechenden Zielen vorgerendert zu werden:

```html
<a href="page1.html">Open link in this window</a>
<a target="_blank" href="page2.html">Open link in new window</a>
```

`target_hint` wird nur für Listenregeln benötigt, die `urls` verwenden.
Für Dokumentregeln (die `where` verwenden) sind sie nicht erforderlich, da in diesen das Ziel von dem `target` Attribut des `<a>` Elementlinkes bekannt sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Seiten in Chrome rendern für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
- [Spekulative Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Spekulationsregeln API](/de/docs/Web/API/Speculation_Rules_API)
