---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 6e205846ce8de4024621447c1d239f9480d79c42
---

{{HTTPSidebar}}

Das HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Response-Header")}} ermöglicht es einer Website zu kontrollieren, ob ein neues Top-Level-Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder durch Navigation zu einer neuen Seite aufgerufen wird, im selben {{Glossary("Browsing_context", "Browsing Context Group")}} (BCG) oder in einer neuen Browsing Context Group geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden alle Verbindungen zwischen dem neuen Dokument und seinem Opener getrennt, und das neue Dokument kann vom Opener prozessisoliert werden.
Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert nutzen können, um auf sein globales Objekt zuzugreifen. Auf diese Weise werden eine Reihe von Cross-Origin-Angriffen verhindert, die als [XS-Leaks](https://xsleaks.dev/) bekannt sind.

Das bedeutet auch, dass jedes Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht über [`window.opener`](/de/docs/Web/API/Window/opener) darauf zugreifen kann.
Dies ermöglicht Ihnen eine bessere Kontrolle über Verweise auf ein Fenster als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), das ausgehende Navigationen betrifft, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Openers ab und davon, ob das neue Dokument nach einer Navigation oder mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Opener-Policy: noopener-allow-popups
```

### Direktiven

- `unsafe-none`

  - : Das Dokument erlaubt das Teilen seiner Browsing Context Group mit jedem anderen Dokument und kann daher unsicher sein.
    Diese Option wird verwendet, um ein Dokument von der Nutzung von COOP zur Prozessisolation auszuschließen.
    Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet, es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Direktivenwert).

    Bei der Verwendung von `Window.open()` öffnen Dokumente mit `unsafe-none` immer Dokumente mit jedem anderen Wert in eine neue BCG.
    Dokumente mit `unsafe-none` können jedoch in der gleichen BCG geöffnet werden, wenn der Opener die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einer neuen BCG öffnen.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-originäre Dokumente enthalten.
    Das wird verwendet, um [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG zu gewährleisten.

    Dokumente mit `same-origin` werden nur dann in der gleichen BCG geöffnet und geöffnet, wenn beide Dokumente gleich-originär sind und die Direktive `same-origin` haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich der [`same-origin`](#same-origin)-Direktive, mit der Ausnahme, dass das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in der gleichen BCG erlaubt wird, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Einschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolation benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und Referenzen behalten muss.
    Zum Beispiel bei der Nutzung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument in der gleichen BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument Cross-Site oder Same-Site ist.

    Ansonsten öffnen Dokumente mit `same-origin-allow-popups` nur dann in der gleichen BCG, wenn beide Dokumente gleich-originär sind und die Direktive `same-origin-allow-popups` haben.

- `noopener-allow-popups` {{experimental_inline}}

  - : Dokumente mit dieser Direktive werden immer in einer neuen BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat.
    Es wird verwendet, um Fälle zu unterstützen, in denen eine Prozessisolation von _gleich-originären_ Dokumenten erforderlich ist.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Opener, indem der Browsing-Kontext für das aktuelle Dokument isoliert wird, unabhängig vom Ursprung des Opener-Dokuments.
    Dies stellt sicher, dass der Opener keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt – selbst wenn sie gleich-originär sind.

    Bei Navigationen wird ein Dokument mit dieser Direktive immer andere Dokumente in einer neuen BCG öffnen, es sei denn, sie sind gleich-originär und haben die Direktive `noopener-allow-popups`.
    Bei der Nutzung von [`Window.open()`](/de/docs/Web/API/Window/open) wird ein Dokument mit dieser Direktive Dokumente in einer neuen BCG öffnen, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie Same-Site oder Cross-Site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleich-originäre und vertrauenswürdige Cross-Origin-Ressourcen, die sich gegenseitig skripten müssen, im gleichen Browser-Kontext-Group geöffnet werden dürfen.
Andere Ressourcen sollten in ihrer eigenen Gruppe cross-origin isoliert werden.

Die folgenden Abschnitte zeigen, ob Dokumente im gleichen BCG oder einem neuen BCG nach einer Navigation oder dem Öffnen eines Fensters aufgerufen werden.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um sich auf jedes Dokument zu beziehen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, unabhängig davon, ob es ein Popup, Tab, Fenster oder ein anderer Kontext ist.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument im gleichen BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, andernfalls in einer neuen BCG.

Die Richtlinien stimmen überein, wenn:

- beide Dokumente `unsafe-none` sind, oder
- keines der Dokumente `unsafe-none` ist, ihre Richtlinienwerte gleich sind und sie gleich-originär sind.

Die folgende Tabelle zeigt das Ergebnis dieser Regel, ob Dokumente im gleichen oder in einem neuen BCG geöffnet werden, je nach den verschiedenen Direktivenwerten.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Opener (Zeile) / Geöffnet (Spalte) | `unsafe-none` | `same-origin-allow-popups`  | `same-origin`               | `noopener-allow-popups`     |
| ---------------------------------- | ------------- | --------------------------- | --------------------------- | --------------------------- |
| `unsafe-none`                      | Gleich        | Neu                         | Neu                         | Neu                         |
| `same-origin-allow-popups`         | Neu           | Gleich wenn gleich-originär | Neu                         | Neu                         |
| `same-origin`                      | Neu           | Neu                         | Gleich wenn gleich-originär | Neu                         |
| `noopener-allow-popups`            | Neu           | Neu                         | Neu                         | Gleich wenn gleich-originär |

### Öffnen mit Window.open()

Bei der Nutzung von `Window.open()`, wird das neue Dokument im gleichen BCG entsprechend den folgenden Regeln geöffnet, die in Reihenfolge ausgewertet werden:

1. Wahr: geöffnet `noopener-allow-popups`
2. Falsch: (`opener same-origin-allow-popups` oder `noopener-allow-popups`) und (geöffnetes Dokument ist `unsafe-none`)
3. Falsch: Übereinstimmende COOP-Richtlinien (wie oben für Navigationen beschrieben)
4. Wahr: Andernfalls!

Die folgende Tabelle zeigt das Opener-Verhalten für die verschiedenen Direktivenwerte.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Opener (Zeile) / Geöffnet (Spalte) | `unsafe-none` | `same-origin-allow-popups`  | `same-origin`               | `noopener-allow-popups` |
| ---------------------------------- | ------------- | --------------------------- | --------------------------- | ----------------------- |
| `unsafe-none`                      | Gleich        | Neu                         | Neu                         | Neu                     |
| `same-origin-allow-popups`         | Gleich        | Gleich wenn gleich-originär | Neu                         | Neu                     |
| `same-origin`                      | Neu           | Neu                         | Gleich wenn gleich-originär | Neu                     |
| `noopener-allow-popups`            | Gleich        | Neu                         | Neu                         | Neu                     |

## Beispiele

### Bestimmte Funktionen hängen von Cross-Origin-Isolation ab

Bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern sind nur verfügbar, wenn Ihr Dokument einen COOP-Header mit dem Wert `same-origin` gesetzt hat.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Siehe auch den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header, den Sie ebenfalls auf `require-corp` oder `credentialless` setzen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie gegen die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) oder die Eigenschaft [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) testen, die in Fenster- und Worker-Kontexten verfügbar ist:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

### Trennen der Opener-Beziehung

Betrachten Sie einen hypothetischen Ursprung `example.com`, der zwei sehr unterschiedliche Anwendungen im gleichen Ursprung hat:

- Eine Chat-Anwendung bei `/chat`, die es jedem Nutzer ermöglicht, jeden anderen Nutzer zu kontaktieren und ihm Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung bei `/passwords`, die alle Passwörter des Nutzers über verschiedene Dienste hinweg enthält.

Die Administratoren der "Passwörter"-Anwendung würden es sehr gerne sicherstellen, dass sie nicht direkt durch die "Chat"-App gescripted werden kann, die naturgemäß eine größere XSS-Oberfläche hat.
Der "richtige Weg", diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten, aber in manchen Fällen ist das nicht möglich, und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder markenbezogenen Gründen auf einem einzigen Ursprung sein.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups`-Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht durch ein Dokument gescripted wird, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, wird das `WindowProxy`, das von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegeben wird, anzeigen, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Opener die Passwortanwendung nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird.
Die Seite müsste auch Folgendes sicherstellen:

- Verwendung von Fetch Metadata, um gleich-originäre Anfragen an die sensiblere App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass ihre Authentifikations-Cookies alle `HttpOnly` sind.
- Sicherstellen, dass Root-Level Service-Worker nicht von der weniger sensitiven App installiert werden.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` in der sensibleren App keine sensiblen Informationen an eine andere gleich-originäre App preisgeben.
- Sicherstellen, dass ihre Login-Seite auf einem separaten Ursprung bereitgestellt wird, da die automatische Ausfüllfunktion des Passwortmanagers auf Basis des Ursprungs angewendet wird.
- Verstehen, dass der Browser die sensiblere App möglicherweise immer noch im gleichen Prozess wie die weniger sensible App unterstützt und sie anfällig für Angriffe im Stile von Spectre ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
